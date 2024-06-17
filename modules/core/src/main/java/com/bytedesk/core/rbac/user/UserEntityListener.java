/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-15 09:30:09
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-12 07:24:24
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.user;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

// import com.bytedesk.core.thread.ThreadService;
import com.bytedesk.core.topic.TopicService;
import com.bytedesk.core.utils.ApplicationContextHolder;
import jakarta.persistence.PostPersist;
import lombok.extern.slf4j.Slf4j;

@Async
@Slf4j
@Component
public class UserEntityListener {

    // 无法注入bean，否则报错
    // private static TopicService topicService;

    @PostPersist
    public void postPersist(User user) {
        log.info("user postPersist {}", user.getUid());
        // 这里可以记录日志、发送通知等
        // create user topic
        TopicService topicService = ApplicationContextHolder.getBean(TopicService.class);
        topicService.create(user.getUid(), user.getUid());
        // // 每创建一个用户，自动给此用户生成一条文件助理的会话
        // ThreadService threadService = ApplicationContextHolder.getBean(ThreadService.class);
        // threadService.createFileAsistantThread(user);
        // // 每创建一个用户，自动给此用户生成一条系统通知的会话
        // threadService.createSystemNotificationChannelThread(user);
    }

    // @PreUpdate
    // public void preUpdate(User user) {
    // log.info("preUpdate {}", user.getUid());
    // }

    // @PostUpdate
    // public void postUpdate(User user) {
    // log.info("postUpdate {}", user.getUid());
    // }

    // @PreRemove
    // public void preRemove(User user) {
    // log.info("preRemove {}", user.getUid());
    // }

    // @PostRemove
    // public void postRemove(User user) {
    // log.info("postRemove {}", user.getUid());
    // // topicService.deleteByTopicAndUid(user.getUid(), user.getUid());
    // }

}