/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-25 12:33:18
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.thread;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.alibaba.fastjson2.JSON;
import com.bytedesk.core.base.BaseEntity;
import com.bytedesk.core.constant.BytedeskConsts;
import com.bytedesk.core.constant.TypeConsts;
import com.bytedesk.core.enums.ClientEnum;
import com.bytedesk.core.rbac.user.UserEntity;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.core.utils.ConvertUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * thread: 指的是一系列相关的信息或讨论按照时间顺序排列形成的一个连贯的交流脉络.
 * 强调信息的连贯性和关联性，就像一条线将不同的消息或回复串联在一起，通常用于在线论坛、电子邮件、社交媒体等平台上，
 * 指围绕特定主题展开的一系列连续的消息交流
 * conversation: 更侧重于指人与人之间面对面或通过某种通信方式进行的较为直接和实时的语言交流互动，强调交流的过程和行为本身
 * 通常用于描述两个或多个人之间的口头或书面的交流活动，更强调交流的互动性和即时性，使用的场景较为广泛，包括日常对话、商务谈判、电话交流等
 * 综上考虑，此处使用 thread 表示会话更为合适
 * 
 * every visitor <-> agent thread should only be one,
 * history records are stored in thread_log table
 */
@Entity
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners({ ThreadEntityListener.class })
@Table(name = "bytedesk_core_thread", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"topic", "owner_id"})
})
public class ThreadEntity extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * @{TopicUtils}
     */
    @NotBlank
    private String topic;

    @Builder.Default
    private String content = BytedeskConsts.EMPTY_STRING;

    /**
     * @{ThreadTypeConsts}
     */
    @Builder.Default
    @Column(name = "thread_type", nullable = false)
    private String type = ThreadTypeEnum.WORKGROUP.name();

    @Builder.Default
    private String state = ThreadStateEnum.ROBOT.name();

    // 计数器编号，客服咨询首先需要取号，类似银行/医院排队系统
    // @Builder.Default
    // private int serialNumber = 1;

    // 客户端需要此字段，暂时保留，TODO: 需要与真实未读消息数同步
    @Builder.Default
    private int unreadCount = 1;

    // 星标
    @Builder.Default
    private int star = 0;

    // 置顶
    @Builder.Default
    @Column(name = "is_top")
    private boolean top = false;

    // 未读
    @Builder.Default
    @Column(name = "is_unread")
    private boolean unread = false;

    // 免打扰
    @Builder.Default
    @Column(name = "is_mute")
    private boolean mute = false;

    // 不在会话列表显示
    @Builder.Default
    @Column(name = "is_hide")
    private boolean hide = false;
    
    // 类似微信折叠会话
    @Builder.Default
    @Column(name = "is_folded")
    private boolean folded = false;

    // 迁移到QueueMemberEntity
    // 已解决
    // @Builder.Default
    // @Column(name = "is_solved")
    // private boolean solved = false;

    // 已评价
    // @Builder.Default
    // @Column(name = "is_rated")
    // private boolean rated = false;

    // 自动关闭
    @Builder.Default
    @Column(name = "is_auto_close")
    private boolean autoClose = false;

    // 机器人
    @Builder.Default
    @Column(name = "is_robot")
    private boolean robot = false;

    @Builder.Default
    private String client = ClientEnum.WEB.name();

    @Builder.Default
    @Column(columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    // for postgres compatibility，[ERROR: column "extra" is of type json but expression is of type character varying
    @JdbcTypeCode(SqlTypes.JSON)
    private String extra = BytedeskConsts.EMPTY_JSON_STRING;

    /**
     * 在客服会话中，存储访客信息
     * 在同事会话中，存储同事信息
     * 在用户私聊中，存储对方用户信息
     * 机器人会话中，存储访客信息
     * 群组会话中，存储群组信息
     * 注意：h2 db 不能使用 user, 所以重定义为 thread_user
     */
    @Builder.Default
    @Column(name = "thread_user", columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    @JdbcTypeCode(SqlTypes.JSON)
    private String user = BytedeskConsts.EMPTY_JSON_STRING;

    /**
     * 一对一客服对话中，存储客服信息
     * 技能组客服对话中，存储技能组信息
     * 机器人对话中，存储机器人信息
     * 用户私聊、群聊、同事会话中，无需存储，使用owner字段信息
     */
    @Builder.Default
    @Column(columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    @JdbcTypeCode(SqlTypes.JSON)
    private String agent = BytedeskConsts.EMPTY_JSON_STRING;
    private String agentUid;

    // multi agent assistants: monitoring agent、quality check agent、robot agent
    @Builder.Default
    @Column(columnDefinition = TypeConsts.COLUMN_TYPE_JSON)
    @JdbcTypeCode(SqlTypes.JSON)
    private String multiAgents = BytedeskConsts.EMPTY_JSON_STRING;

    // belongs to user
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity owner;

    /**
     // 示例1: 技术支持
    thread.setRequiredSkills("java,spring,mysql");
    // 示例2: 多语言支持
    thread.setRequiredSkills("english,spanish");
    // 示例3: 产品支持
    thread.setRequiredSkills("product-a,technical");
    // 示例4: 分级支持
    thread.setRequiredSkills("level-2,database");
     */
    @Column(length = 500)
    private String requiredSkills;  // 会话所需技能,逗号分隔
    
    public List<String> getRequiredSkillList() {
        if (requiredSkills == null || requiredSkills.isEmpty()) {
            return new ArrayList<>();
        }
        return Arrays.asList(requiredSkills.split(","));
    }

    public ThreadEntity reInit() {
        this.state = ThreadStateEnum.ROBOT.name();
        this.hide = false;
        // this.solved = false;
        // this.rated = false;
        this.autoClose = false;
        this.robot = false;
        return this;
    }

    public Boolean isRobot() {
        return this.state.equals(ThreadStateEnum.ROBOT.name());
    }

    //
    public Boolean isClosed() {
        return this.state.equals(ThreadStateEnum.CLOSED.name());
    }

    public Boolean isStarted() {
        return this.state.equals(ThreadStateEnum.STARTED.name());
    }

    public Boolean isOffline() {
        return this.state.equals(ThreadStateEnum.OFFLINE.name());
    }

    public Boolean isQueuing() {
        return this.state.equals(ThreadStateEnum.QUEUING.name());
    }

    public Boolean isCustomerService() {
        return this.type.equals(ThreadTypeEnum.AGENT.name())
                || this.type.equals(ThreadTypeEnum.WORKGROUP.name());
    }

    public Boolean isRobotType() {
        return this.type.equals(ThreadTypeEnum.KB.name());
    }

    public Boolean isWorkgroupType() {
        return this.type.equals(ThreadTypeEnum.WORKGROUP.name());
    }

    public Boolean isAgentType() {
        return this.type.equals(ThreadTypeEnum.AGENT.name());
    }

    public ThreadProtobuf toProtobuf() {
        return ConvertUtils.convertToThreadProtobuf(this);
    }

    // public UserProtobuf getAgentProtobuf() {
    // return JSON.parseObject(this.agent, UserProtobuf.class);
    // }

    public UserProtobuf getUserProtobuf() {
        return JSON.parseObject(this.user, UserProtobuf.class);
    }

    public Boolean isWeChatMp() {
        return this.client.equals(ClientEnum.WECHAT_MP.name());
    }

    public Boolean isWeChatMini() {
        return this.client.equals(ClientEnum.WECHAT_MINI.name());
    }

    public ThreadEntity setOffline() {
        this.state = ThreadStateEnum.OFFLINE.name();
        return this;
    }

    public ThreadEntity setStart() {
        this.state = ThreadStateEnum.STARTED.name();
        return this;
    }

    public ThreadEntity setClose() {
        this.state = ThreadStateEnum.CLOSED.name();
        return this;
    }

    public ThreadEntity setQueuing() {
        this.state = ThreadStateEnum.QUEUING.name();
        return this;
    }

}
