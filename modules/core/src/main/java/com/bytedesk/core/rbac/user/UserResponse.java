/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-04 10:43:08
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.HashSet;
import java.util.Set;

import com.bytedesk.core.rbac.role.RoleResponse;
import com.bytedesk.core.utils.BaseResponse;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class UserResponse extends BaseResponse {

    private static final long serialVersionUID = 1L;    

    // private String uid;
    private String username;
    private String nickname;
    private String email;
    private String mobile;
    private String avatar;
    private String description;
    // 
    private Boolean enabled;
	private boolean superUser;
	private Boolean emailVerified;
	private Boolean mobileVerified;
    //
    @Builder.Default
    private Set<RoleResponse> roles = new HashSet<>();

    @Builder.Default
    private Set<String> organizations = new HashSet<>();
}
