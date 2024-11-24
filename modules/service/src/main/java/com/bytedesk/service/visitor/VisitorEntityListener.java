/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-07 13:17:13
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-20 12:41:24
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.visitor;

import org.springframework.stereotype.Component;

import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class VisitorEntityListener {

    @PostPersist
    public void onPostPersist(VisitorEntity visitor) {
        log.info("onPostPersist: {}", visitor);
    }

    @PostUpdate
    public void onPostUpdate(VisitorEntity visitor) {
        log.info("onPostUpdate: {}", visitor);
    }
    
}
