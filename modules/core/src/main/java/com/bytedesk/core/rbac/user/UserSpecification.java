/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-20 09:50:37
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-20 16:53:12
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

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class UserSpecification {

    public static Specification<User> search(UserRequest request) {
        log.info("request: {}", request);
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            // load all users, including deleted users
            // predicates.addAll(getBasicPredicates(root, criteriaBuilder, request.getOrgUid()));
            // 
            // if (request.getUsername() != null) {
            //     predicates.add(criteriaBuilder.equal(root.get("username"), request.getUsername()));
            // }
            //
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
