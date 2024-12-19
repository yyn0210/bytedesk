/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-15 15:58:11
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-19 12:10:02
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.strategy;

import java.util.Optional;

import org.springframework.stereotype.Component;

import com.alibaba.fastjson2.JSON;
import com.bytedesk.ai.robot.RobotEntity;
import com.bytedesk.core.message.IMessageSendService;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.core.thread.ThreadRestService;
// import com.bytedesk.core.thread.ThreadStateService;
import com.bytedesk.core.topic.TopicUtils;
import com.bytedesk.service.agent.AgentEntity;
import com.bytedesk.service.agent.AgentRestService;
import com.bytedesk.service.queue.QueueResponse;
import com.bytedesk.service.queue.QueueServiceMy;
// import com.bytedesk.service.counter_visitor.CounterVisitorService;
import com.bytedesk.service.route.RouteService;
import com.bytedesk.service.visitor.VisitorRequest;
import com.bytedesk.service.visitor_thread.VisitorThreadService;

import jakarta.annotation.Nonnull;

import com.bytedesk.core.thread.ThreadEntity;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @author jackning 270580156@qq.com
 */
@Slf4j
@Component("agentCsThreadStrategy")
@AllArgsConstructor
public class AgentCsThreadCreationStrategy implements CsThreadCreationStrategy {

    private final AgentRestService agentService;

    private final ThreadRestService threadService;

    private final VisitorThreadService visitorThreadService;

    // private final IRouteService routeService;
    private final RouteService routeService;
    
    private final IMessageSendService messageSendService;

    private final QueueServiceMy visitorQueueService;

    @Override
    public MessageProtobuf createCsThread(VisitorRequest visitorRequest) {
        return createAgentCsThread(visitorRequest);
    }

    public MessageProtobuf createAgentCsThread(VisitorRequest visitorRequest) {
        //
        String agentUid = visitorRequest.getSid();
        String topic = TopicUtils.formatOrgAgentThreadTopic(agentUid, visitorRequest.getUid());
        // 是否已经存在会话
        ThreadEntity thread = null;
        AgentEntity agent = null;
        Optional<ThreadEntity> threadOptional = threadService.findFirstByTopic(topic);
        if (threadOptional.isPresent() ) {
            thread = threadOptional.get();
            if (thread.isProcessing() && !visitorRequest.getForceAgent()) {
                // 返回未关闭，或 非留言状态的会话
                log.info("Already have a processing thread {}", topic);
                return getAgentProcessingMessage(visitorRequest, threadOptional.get());
            } else {
                // 会话已经关闭，重新初始化会话
                thread = threadOptional.get().reInit();
                agent = agentService.findByUid(agentUid).orElseThrow(() -> new RuntimeException("Agent uid " + agentUid + " not found"));
            }
        } else {
            // 不存在会话，创建会话
            agent = agentService.findByUid(agentUid).orElseThrow(() -> new RuntimeException("Agent uid " + agentUid + " not found"));
            thread = visitorThreadService.getAgentThread(visitorRequest, agent, topic);
        }
        // 计数器，排队号
        // String orgUid = visitorRequest.getOrgUid();
        // String visitor = ConvertServiceUtils.convertToUserProtobufJSONString(visitorRequest);
        // QueueMemberResponse counter = counterService.getNumber(orgUid, topic, visitor);
        // counterVisitorService.saveNumber(orgUid, topic, counter.getCurrentNumber(), visitor);
        // log.info("counter topic: {}, count {}", topic, counter.getCurrentNumber());
        //
        thread = visitorThreadService.reInitAgentThreadExtra(thread, agent);
        QueueResponse queueResponse = visitorQueueService.enqueue(thread);
        log.info("Enqueued to queue {}", queueResponse.toString());
        // thread.setSerialNumber(counter.getCurrentNumber());

        // 未强制转人工的情况下，判断是否转机器人
        if (!visitorRequest.getForceAgent()) {
            // 判断是否需要转机器人
            Boolean isOffline = !agent.isConnectedAndAvailable();
            Boolean transferToRobot = agent.getServiceSettings().shouldTransferToRobot(isOffline);
            if (transferToRobot) {
                // 转机器人
                RobotEntity robot = agent.getServiceSettings().getRobot();
                // 
                return routeService.routeRobot(visitorRequest, thread, robot);
            }
        }
        // 
        return routeService.routeAgent(visitorRequest, thread, agent);
    }

    private MessageProtobuf getAgentProcessingMessage(VisitorRequest visitorRequest, @Nonnull ThreadEntity thread) {
        //
        UserProtobuf user = JSON.parseObject(thread.getAgent(), UserProtobuf.class);
        log.info("getAgentProcessingMessage user: {}, agent {}", user.toString(), thread.getAgent());
        //
        MessageProtobuf messageProtobuf = ThreadMessageUtil.getThreadContinueMessage(user, thread);
        // 广播消息，由消息通道统一处理
        // MessageUtils.notifyUser(messageProtobuf);
        messageSendService.sendProtobufMessage(messageProtobuf);

        return messageProtobuf;
    }

    

}