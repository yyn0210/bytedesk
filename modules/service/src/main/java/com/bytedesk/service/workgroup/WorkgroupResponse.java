/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-02-06 10:18:02
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-04 12:26:19
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.workgroup;

import java.util.List;

import com.bytedesk.core.utils.BaseResponse;
import com.bytedesk.service.agent.AgentResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class WorkgroupResponse extends BaseResponse {

    private static final long serialVersionUID = -5451766294L;    

    // private String wid;

    private String nickname;

    private String avatar;

    private String description;

    private String routeType;

    private boolean recent;

    private boolean autoPop;

    private boolean showTopTip;

    private String topTip;

    private String welcomeTip;

    private boolean defaultRobot;

    private Double autoCloseMin;

    // 
    private List<AgentResponse> agents;
}
