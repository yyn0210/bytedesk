/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-05-25 10:33:49
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-16 19:25:36
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.message;

public enum MessageStatusEnum {
    SENDING, // sending
    TIMEOUT, // network send failed
    BLOCKED, // in black list
    STRANGER, // not friend
    ERROR, // other send error
    SUCCESS, // send success
    RECALL, // recall back
    DELIVERED, // send to the other client
    READ, // read by the other client
    DESTROYED, // destroyed after read
    UNPROCESSED, // leave message unprocessed
    PROCESSED, // leave message processed
    LEAVE_MSG_SUBMIT, // 提交留言
    RATE_SUBMIT, // 提交会话评价
    RATE_CANCEL, // 取消会话评价
    RATE_UP, // 评价消息up
    RATE_DOWN, // 评价消息down
    TRANSFER_ACCEPT, // 接受转接
    TRANSFER_REJECT, // 拒绝转接
    INVITE_ACCEPT, // 接受邀请
    INVITE_REJECT, // 拒绝邀请
    ;

    // 根据字符串查找对应的枚举常量
    public static MessageStatusEnum fromValue(String value) {
        for (MessageStatusEnum type : MessageStatusEnum.values()) {
            if (type.name().equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("No MessageStatusEnum constant with value: " + value);
    }
}
