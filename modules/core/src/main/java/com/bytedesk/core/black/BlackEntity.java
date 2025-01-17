/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-28 22:02:34
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-24 17:44:29
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.black;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.bytedesk.core.base.BaseEntity;
import com.bytedesk.core.constant.BytedeskConsts;
import com.bytedesk.core.constant.TypeConsts;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * black list 
 * 黑名单
 * TODO: 拉黑ip、添加时间段限制
 */
@Entity
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bytedesk_core_black")
public class BlackEntity extends BaseEntity {

    private String reason;

    // 访客 or 用户，json，类型在json中定义
    @Builder.Default
    @Column(name = "black_user", columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    @JdbcTypeCode(SqlTypes.JSON)
    private String blackUser = BytedeskConsts.EMPTY_JSON_STRING;

    private String userUid;
}
