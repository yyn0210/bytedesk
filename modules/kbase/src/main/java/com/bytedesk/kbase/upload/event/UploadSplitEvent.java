/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2025-01-03 10:18:43
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-03 10:19:49
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2025 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.upload.event;

import java.util.List;

import org.springframework.ai.document.Document;
import org.springframework.context.ApplicationEvent;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class UploadSplitEvent extends ApplicationEvent {

    private static final long serialVersionUID = 1L;

    private final List<Document> documents;

    public UploadSplitEvent(List<Document> documents) {
        super(documents);
        this.documents = documents;
    }
}
