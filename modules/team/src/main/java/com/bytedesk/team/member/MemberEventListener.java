/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-03 14:06:20
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-04 15:52:06
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.team.member;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

import org.modelmapper.ModelMapper;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import com.alibaba.excel.EasyExcel;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.event.GenericApplicationEvent;
import com.bytedesk.core.rbac.organization.OrganizationEntity;
import com.bytedesk.core.rbac.organization.OrganizationCreateEvent;
import com.bytedesk.core.rbac.user.UserEntity;
import com.bytedesk.core.thread.ThreadEntity;
import com.bytedesk.core.thread.ThreadTypeEnum;
import com.bytedesk.core.thread.event.ThreadCreateEvent;
import com.bytedesk.core.topic.TopicCacheService;
import com.bytedesk.core.topic.TopicRequest;
import com.bytedesk.core.topic.TopicUtils;
import com.bytedesk.core.uid.UidUtils;
import com.bytedesk.kbase.upload.UploadCreateEvent;
import com.bytedesk.kbase.upload.UploadEntity;
import com.bytedesk.kbase.upload.UploadService;
import com.bytedesk.kbase.upload.UploadTypeEnum;
import com.bytedesk.team.department.DepartmentConsts;
import com.bytedesk.team.department.DepartmentEntity;
import com.bytedesk.team.department.DepartmentService;

import jakarta.transaction.Transactional;

@Slf4j
@Component
@AllArgsConstructor
public class MemberEventListener {

    private final MemberRestService memberService;

    private final ModelMapper modelMapper;

    private final DepartmentService departmentService;

    private final UidUtils uidUtils;

    private final TopicCacheService topicCacheService;

    private final UploadService uploadService;

    @Transactional
    @Order(1)
    @EventListener
    public void onOrganizationCreateEvent(OrganizationCreateEvent event) {
        OrganizationEntity organization = (OrganizationEntity) event.getSource();
        UserEntity user = organization.getUser();
        String orgUid = organization.getUid();
        log.info("organization created: {}", organization.getName());
        //
        DepartmentEntity department = DepartmentEntity.builder()
                .name(DepartmentConsts.DEPT_ADMIN)
                .description("Description for" + DepartmentConsts.DEPT_ADMIN)
                .build();
        department.setUid(uidUtils.getUid());
        department.setOrgUid(orgUid);
        department = departmentService.save(department);
        // 
        if (department != null) {
            // 创建团队成员
            MemberRequest memberRequest = modelMapper.map(user, MemberRequest.class);
            memberRequest.setJobNo("001");
            memberRequest.setJobTitle(I18Consts.I18N_ADMIN);
            memberRequest.setSeatNo("001");
            memberRequest.setTelephone("001");
            memberRequest.setMobile(user.getMobile());
            memberRequest.setStatus(MemberStatusEnum.ACTIVE.name());
            memberRequest.setDeptUid(department.getUid());
            memberRequest.setOrgUid(orgUid);
            memberService.create(memberRequest);
        }
    }

    @EventListener
    public void onThreadCreateEvent(ThreadCreateEvent event) {
        ThreadEntity thread = event.getThread();
        log.info("member ThreadCreateEvent: {}", thread.getUid());
        //
        if (thread.getType().equals(ThreadTypeEnum.MEMBER.name())) {
            memberService.createMemberReverseThread(thread);
        }
    }

    @EventListener
    public void onMemberCreateEvent(GenericApplicationEvent<MemberCreateEvent> event) {
        MemberCreateEvent memberCreateEvent = (MemberCreateEvent) event.getObject();
        MemberEntity member = memberCreateEvent.getMember();
        UserEntity user = member.getUser();
        log.info("member created: {}", memberCreateEvent);
        // 默认订阅成员主题
        TopicRequest request = TopicRequest.builder()
                .topic(TopicUtils.formatOrgMemberTopic(member.getUid()))
                .userUid(user.getUid())
                .build();
        topicCacheService.pushRequest(request);
    }

    @EventListener
    public void onMemberUpdateEvent(GenericApplicationEvent<MemberUpdateEvent> event) {
        MemberUpdateEvent memberUpdateEvent = (MemberUpdateEvent) event.getObject();
        log.info("member updated: {}", memberUpdateEvent);
        // TODO: 删除旧的部门主题
    }

    // @EventListener
    // public void onRoleUpdateEvent(GenericApplicationEvent<RoleUpdateEvent> event) {
    //     RoleUpdateEvent roleUpdateEvent = event.getObject();
    //     RoleEntity roleEntity = roleUpdateEvent.getRoleEntity();
    //     log.info("onRoleUpdateEvent: {}", roleEntity.toString());
    //     // 给member对应的userUid删除/添加角色
    //     // 遍历roleEntity.getMemberUids
    //     if (roleEntity.getLevel().equals(LevelEnum.ORGANIZATION.name())) {
    //         // 
    //     } else {
    //         log.info("not support yet");
    //     }
    // }

     @EventListener
    public void onUploadCreateEvent(GenericApplicationEvent<UploadCreateEvent> event) throws IOException {
        UploadEntity upload = event.getObject().getUpload();
        log.info("UploadEventListener create: {}", upload.toString());

        // 导入Excel文件
        Resource resource = uploadService.loadAsResource(upload.getFileName());
        if (resource.exists()) {
            String filePath = resource.getFile().getAbsolutePath();
            log.info("UploadEventListener loadAsResource: {}", filePath);
            // 
            if (upload.getType().equals(UploadTypeEnum.MEMBER.name())) {
                // 导入成员
                // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
                // https://easyexcel.opensource.alibaba.com/docs/current/quickstart/read
                EasyExcel.read(filePath, 
                    MemberExcel.class, 
                    new MemberExcelListener(memberService, upload.getOrgUid())
                ).sheet().doRead();
            }
        }


        
    }



}
