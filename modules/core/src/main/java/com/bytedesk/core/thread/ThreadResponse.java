/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-02-21 10:01:27
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-10 21:46:31
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.thread;

import java.util.Date;

import com.bytedesk.core.base.BaseResponse;
import com.bytedesk.core.rbac.user.UserResponseSimple;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * for agent client
 */
@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ThreadResponse extends BaseResponse {

    private static final long serialVersionUID = 1L;

    private String topic;

    private String content;

    private Integer unreadCount;

    private String type;

    private String extra;

	private Date updatedAt;

    private UserResponseSimple user;
}
