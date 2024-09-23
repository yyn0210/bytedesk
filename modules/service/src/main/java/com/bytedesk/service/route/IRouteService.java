/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-19 18:56:41
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-20 10:11:15
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.route;

import com.bytedesk.ai.robot.Robot;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.service.agent.Agent;
import com.bytedesk.core.thread.Thread;
import com.bytedesk.service.visitor.VisitorRequest;
import com.bytedesk.service.workgroup.Workgroup;

import jakarta.annotation.Nonnull;

public interface IRouteService {

    public MessageProtobuf routeRobot(VisitorRequest request, @Nonnull Thread thread, @Nonnull Robot robot);

    public MessageProtobuf routeAgent(VisitorRequest request, @Nonnull Thread thread, @Nonnull Agent agent);

    public MessageProtobuf routeWorkgroup(VisitorRequest request, @Nonnull Thread thread, @Nonnull Workgroup workgroup);
}
