/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-03 12:10:03
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-09 23:10:44
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.organization;

import com.bytedesk.core.base.BaseEntity;
import com.bytedesk.core.rbac.user.UserEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false, exclude = { "user" })
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bytedesk_core_org_apply")
public class OrganizationApplyEntity extends BaseEntity {


    private String note;

    // apply user
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity user;

    // apply organization
    @ManyToOne(fetch = FetchType.LAZY)
    private OrganizationEntity organization;

}
