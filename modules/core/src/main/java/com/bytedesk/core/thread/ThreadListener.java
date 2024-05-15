/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-15 09:30:56
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-04 10:40:48
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.thread;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import com.bytedesk.core.event.BytedeskEventPublisher;
import com.bytedesk.core.topic.TopicService;
import com.bytedesk.core.utils.ApplicationContextHolder;

import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.extern.slf4j.Slf4j;

@Async
@Slf4j
@Component
public class ThreadListener {
    
    // @PrePersist
    // public void prePersist(Thread thread) {
    //     log.info("prePersist {}", thread.getTid());
    // }

    @PostPersist
    public void postPersist(Thread thread) {
        log.info("thread postPersist {}", thread.getUid());
        // 这里可以记录日志
        // create thread topic
        TopicService topicService = ApplicationContextHolder.getBean(TopicService.class);
        topicService.create(thread.getTopic(), thread.getOwner().getUid());
        // send notifications
        BytedeskEventPublisher bytedeskEventPublisher = ApplicationContextHolder.getBean(BytedeskEventPublisher.class);
        bytedeskEventPublisher.publishThreadCreateEvent(thread);
    }

    // @PreUpdate
    // public void preUpdate(Thread thread) {
    //     log.info("preUpdate {}", thread.getTid());
    // }

    @PostUpdate
    public void postUpdate(Thread thread) {
        log.info("postUpdate {}", thread.getUid());
        // 
        BytedeskEventPublisher bytedeskEventPublisher = ApplicationContextHolder.getBean(BytedeskEventPublisher.class);
        bytedeskEventPublisher.publishThreadUpdateEvent(thread);
    }

    // @PreRemove
    // public void preRemove(Thread thread) {
    //     log.info("preRemove {}", thread.getTid());
    // }

    // @PostRemove
    // public void postRemove(Thread thread) {
    //     log.info("postRemove {}", thread.getTid());
    //     // topicService.deleteByTopicAndUid(thread.getTopic(), thread.getOwner().getUid());
    // }
    
}
