/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-27 22:40:33
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-01 10:02:51
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.auto_reply;

import java.time.LocalDateTime;

import com.bytedesk.core.base.BaseResponse;

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
public class AutoReplyResponse extends BaseResponse {
    
    private String content;

    private String type;

    private String level;

    private String categoryUid; // 文章分类

    private String kbUid; // 对应知识库
    
    private String orgUid;

    private LocalDateTime updatedAt;
}
