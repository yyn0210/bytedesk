/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 23:04:12
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-01 15:38:25
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.queue;

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
public class QueueResponse extends BaseResponse {

    private Integer currentNumber;

    private Integer waitingNumber;

    private Integer waitSeconds;
    
    private Integer servingNumber;

    private Integer finishedNumber;

    private String status;

    private String topic;

    private String day;

    private String type;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
