/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-12-25 14:22:19
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-25 14:23:23
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.robot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bytedesk.core.utils.JsonResult;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/robot/webhook")
@RequiredArgsConstructor
@Tag(name = "robot", description = "robot webhook description")
public class RobotWebHookController {

    // 群机器人通过此webhook接收消息
    @PostMapping("/group")
    public ResponseEntity<?> groupWebhook(@RequestBody String request) {
        return ResponseEntity.ok(JsonResult.success(request));
    }
    
}


