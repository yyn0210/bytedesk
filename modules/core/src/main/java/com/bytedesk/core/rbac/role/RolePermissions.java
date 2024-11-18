/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-11-04 21:13:47
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-08 11:21:59
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.role;

public class RolePermissions {

    public static final String ROLE_PREFIX = "ROLE_";
    
    // Role permissions
    public static final String ROLE_CREATE = "hasAuthority('ROLE_CREATE')";
    public static final String ROLE_READ = "hasAuthority('ROLE_READ')";
    public static final String ROLE_UPDATE = "hasAuthority('ROLE_UPDATE')";
    public static final String ROLE_EXPORT = "hasAuthority('ROLE_EXPORT')";
    public static final String ROLE_DELETE = "hasAuthority('ROLE_DELETE')";

    // Add more permissions for other entities as needed
    public static final String ROLE_SUPER = "hasRole('SUPER')";
    public static final String ROLE_ADMIN = "hasAnyRole('SUPER', 'ADMIN')";
    public static final String ROLE_MEMBER = "hasAnyRole('SUPER', 'ADMIN', 'MEMBER')";
    public static final String ROLE_CUSTOMER_SERVICE = "hasAnyRole('SUPER', 'ADMIN', 'CS')";


}