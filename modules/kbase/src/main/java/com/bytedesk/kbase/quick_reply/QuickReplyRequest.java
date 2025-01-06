/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 22:59:48
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-21 11:26:41
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.quick_reply;

import com.bytedesk.core.base.BaseRequest;
import com.bytedesk.core.enums.LevelEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class QuickReplyRequest extends BaseRequest {

    private String title;

    private String content;

    private String shortCut;

    // @Builder.Default
    // private String type;
    // private MessageTypeEnum type = MessageTypeEnum.TEXT;

    @Builder.Default
    private String level = LevelEnum.ORGANIZATION.name();

    private String categoryUid;

    private String kbUid; // 对应知识库的uid

    private String orgUid;

    private String agentUid;
}
