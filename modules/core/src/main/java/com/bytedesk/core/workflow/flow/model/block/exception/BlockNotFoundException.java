/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-12-10 11:45:32
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-11 10:00:32
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  技术/商务联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.workflow.flow.model.block.exception;

public class BlockNotFoundException extends RuntimeException {
    public BlockNotFoundException(String id) {
        super("Block not found with id: " + id);
    }
}
