/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 16:37:01
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-03 12:49:18
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.robot;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bytedesk.core.action.ActionAnnotation;
import com.bytedesk.core.base.BaseRestController;
import com.bytedesk.core.thread.ThreadRequest;
import com.bytedesk.core.thread.ThreadResponse;
import com.bytedesk.core.utils.JsonResult;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/robot")
@RequiredArgsConstructor
@Tag(name = "robot", description = "robot description")
public class RobotRestController extends BaseRestController<RobotRequest> {

    private final RobotRestService robotService;

    // @PreAuthorize(RolePermissions.ROLE_ADMIN) // not needed
    @Override
    public ResponseEntity<?> queryByOrg(RobotRequest request) {
        
        Page<RobotResponse> page = robotService.queryByOrg(request);

        return ResponseEntity.ok(JsonResult.success(page));
    }

    @Override
    public ResponseEntity<?> queryByUser(RobotRequest request) {
        
        Page<RobotResponse> page = robotService.queryByUser(request);

        return ResponseEntity.ok(JsonResult.success(page));
    }

    @GetMapping("/query/uid")
    public ResponseEntity<?> queryByUid(RobotRequest request) {

        RobotResponse robot = robotService.queryByUid(request.getUid());

        return ResponseEntity.ok(JsonResult.success(robot));
    }
    
    @ActionAnnotation(title = "robot", action = "create", description = "create robot")
    @Override
    public ResponseEntity<?> create(@RequestBody RobotRequest request) {

        RobotResponse robot = robotService.create(request);

        return ResponseEntity.ok(JsonResult.success(robot));
    }
    
    @ActionAnnotation(title = "robot", action = "create", description = "create robot thread")
    @PostMapping("/create/thread")
    public ResponseEntity<?> createThread(@RequestBody ThreadRequest request) {
        //
        ThreadResponse thread = robotService.createThread(request);

        return ResponseEntity.ok(JsonResult.success(thread));
    }

    @ActionAnnotation(title = "robot", action = "create", description = "create prompt robot")
    @PostMapping("/create/prompt")
    public ResponseEntity<?> createPromptRobot(@RequestBody RobotRequest request) {
        //
        RobotResponse robot = robotService.createPromptRobot(request);

        return ResponseEntity.ok(JsonResult.success(robot));
    }

    @ActionAnnotation(title = "robot", action = "update", description = "update robot")
    @Override
    public ResponseEntity<?> update(@RequestBody RobotRequest request) {

        RobotResponse robotResponse = robotService.update(request);

        return ResponseEntity.ok(JsonResult.success(robotResponse));
    }

    @ActionAnnotation(title = "robot", action = "update", description = "update robot thread")
    @PostMapping("/update/thread")
    public ResponseEntity<?> updateThread(@RequestBody ThreadRequest request) {
        //
        ThreadResponse thread = robotService.updateThread(request);

        return ResponseEntity.ok(JsonResult.success(thread));
    }

    @ActionAnnotation(title = "robot", action = "update", description = "update prompt robot")
    @PostMapping("/update/prompt")
    public ResponseEntity<?> updatePromptRobot(@RequestBody RobotRequest request) {

        RobotResponse robotResponse = robotService.updatePromptRobot(request);

        return ResponseEntity.ok(JsonResult.success(robotResponse));
    }

    @ActionAnnotation(title = "robot", action = "delete", description = "delete robot")
    @Override
    public ResponseEntity<?> delete(@RequestBody RobotRequest request) {
        
        robotService.delete(request);

        return ResponseEntity.ok(JsonResult.success(request));
    }
    
}
