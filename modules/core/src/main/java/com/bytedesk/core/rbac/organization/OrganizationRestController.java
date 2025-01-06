/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:20:17
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-06 15:33:34
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.organization;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bytedesk.core.action.ActionAnnotation;
import com.bytedesk.core.base.BaseRestController;
import com.bytedesk.core.utils.JsonResult;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

// @Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/org")
@Tag(name = "organization - 组织", description = "organization apis")
public class OrganizationRestController extends BaseRestController<OrganizationRequest> {

    private final OrganizationService organizationService;

    @Override
    public ResponseEntity<?> queryByOrg(OrganizationRequest request) {
        
        Page<OrganizationResponse> orgPage = organizationService.queryByOrg(request);
        // //
        return ResponseEntity.ok(JsonResult.success(orgPage));
    }

    @Override
    public ResponseEntity<?> queryByUser(OrganizationRequest request) {
        
        Page<OrganizationResponse> orgPage = organizationService.queryByUser(request);
        // //
        return ResponseEntity.ok(JsonResult.success(orgPage));
    }

    // @GetMapping("/query")
    // public ResponseEntity<?> query(OrganizationRequest pageParam) {
    //     //
    //     Page<OrganizationResponse> orgPage = organizationService.query(pageParam);
    //     // //
    //     return ResponseEntity.ok(JsonResult.success(orgPage));
    // }

    @GetMapping("/uid")
    public ResponseEntity<?> queryByUid(OrganizationRequest request) {
        //
        Optional<OrganizationEntity> org = organizationService.findByUid(request.getUid());
        if (!org.isPresent()) {
            return ResponseEntity.ok(JsonResult.error("组织不存在"));
        }
        return ResponseEntity.ok(JsonResult.success(organizationService.convertToResponse(org.get())));
    }

    @ActionAnnotation(title = "organization", action = "create", description = "organization create")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody OrganizationRequest request) {
        //
        OrganizationResponse org = organizationService.create(request);
        if (org == null) {
            return ResponseEntity.ok(JsonResult.error("创建组织失败"));
        }
        //
        return ResponseEntity.ok(JsonResult.success(org));
    }

    @ActionAnnotation(title = "organization", action = "update", description = "organization update")
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody OrganizationRequest request) {
        //
        OrganizationResponse org = organizationService.update(request);
        if (org == null) {
            return ResponseEntity.ok(JsonResult.error("更新组织失败"));
        }
        //
        return ResponseEntity.ok(JsonResult.success(org));
    }

    
    
    @Override
    public ResponseEntity<?> delete(OrganizationRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
