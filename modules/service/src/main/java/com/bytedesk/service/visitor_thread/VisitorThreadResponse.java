/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-29 13:09:55
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-19 10:41:17
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.visitor_thread;

import com.bytedesk.core.base.BaseResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class VisitorThreadResponse extends BaseResponse {
    
    // private String topic;

    // private String content;

    // private Integer unreadCount;

    // private ThreadTypeEnum type;

    // private String extra;

	// private LocalDateTime createdAt;

    // private UserProtobuf user;

    private String visitorUid;
}
