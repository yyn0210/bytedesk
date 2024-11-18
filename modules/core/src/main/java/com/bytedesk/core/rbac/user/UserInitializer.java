/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-11-05 13:43:02
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-06 12:17:39
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

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.bytedesk.core.config.BytedeskProperties;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.uid.UidUtils;

// import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * SmartInitializingSingleton：适用于需要确保在 ApplicationContext 初始化之后再执行的初始化逻辑。
 */
@Slf4j
@Component
@AllArgsConstructor
public class UserInitializer {

    private final UserService userService;

    private final BytedeskProperties bytedeskProperties;

    private final UidUtils uidUtils;

    // @PostConstruct
    public void init() {
        // 系统只能存在一个超级管理员账号
        if (userService.existsBySuperUser()) {
            return;
        }
        log.info("init super administrator account...");
        // 创建超级管理员账号
        UserEntity admin = UserEntity.builder()
                .email(bytedeskProperties.getEmail())
                .username(bytedeskProperties.getEmail())
                .password(new BCryptPasswordEncoder().encode(bytedeskProperties.getPassword()))
                .nickname(bytedeskProperties.getNickname())
                .avatar(AvatarConsts.DEFAULT_AVATAR_URL)
                .mobile(bytedeskProperties.getMobile())
                .num(bytedeskProperties.getMobile())
                .superUser(true)
                .emailVerified(true)
                .mobileVerified(true)
                .build();
        admin.setUid(uidUtils.getUid());
        //
        userService.save(admin);
    }

    
}