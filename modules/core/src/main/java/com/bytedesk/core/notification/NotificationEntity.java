/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-01 09:27:49
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-04 17:30:02
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.notification;

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
 * 注意与message类型notice区分
 */
@Data
@Entity
@Builder
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bytedesk_core_notification")
public class NotificationEntity extends BaseEntity {
    
    private String title;

    private String content;

    @Column(name = "notification_type")
    private String type;

    @Builder.Default
    @Column(name = "notification_status")
    private String status = NotificationStatusEnum.UNREAD.name();

    @Builder.Default
    @Column(columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    @JdbcTypeCode(SqlTypes.JSON)
    private String extra = BytedeskConsts.EMPTY_JSON_STRING;
}
