/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-28 06:45:00
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-28 06:45:02
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.upload.event;

import org.springframework.context.ApplicationEvent;

import com.bytedesk.kbase.upload.UploadEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class UploadUpdateEvent extends ApplicationEvent {

    private static final long serialVersionUID = 1L;

    private final UploadEntity upload;

    public UploadUpdateEvent(Object source, UploadEntity upload) {
        super(source);
        this.upload = upload;
    }
}
