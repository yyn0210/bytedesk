/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-17 10:16:43
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-17 10:16:45
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.rating;

import lombok.Data;

@Data
public class RatingMessageExtra {
    private String uid;
    private Integer score;
    private String content;
    private String orgUid;
}
