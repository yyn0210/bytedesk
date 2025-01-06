/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-12-22 18:00:07
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-22 18:02:21
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.clipboard;

import org.springframework.stereotype.Component;

import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class ClipboardEntityListener {

    @PostPersist
    public void postPersist(ClipboardEntity clipboard) {
        log.info("ClipboardEntityListener: " + clipboard);
    }
    
    @PostUpdate
    public void postUpdate(ClipboardEntity clipboard) {
        log.info("ClipboardEntityListener: " + clipboard);
    }
    
}
