/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 23:01:18
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-01 15:02:00
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.rating;

import com.bytedesk.core.base.BaseRequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper=false)
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RatingRequest extends BaseRequest {
    
    // @Builder.Default
    // private RatingTypeEnum type = RatingTypeEnum.THREAD;

    private Integer score;

    private String comment;

    private String threadTopic;

    private String user;
}
