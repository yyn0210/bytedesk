/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-05-11 18:21:44
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-23 10:06:10
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.category;

import java.util.List;
import java.util.ArrayList;

import com.bytedesk.core.base.BaseRequest;
import com.bytedesk.core.constant.BdConstants;
import com.bytedesk.core.enums.LevelEnum;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequest extends BaseRequest {

    private String name;
    
    private String icon;

    @Builder.Default
    private Integer orderNo = 0;

    @Builder.Default
    private LevelEnum level = LevelEnum.ORGNIZATION;

    // 需要前端传递字符串的情况下，使用string类型
    @NotBlank
    @Builder.Default
    private String platform = BdConstants.PLATFORM_BYTEDESK;
    // private PlatformEnum platform = PlatformEnum.BYTEDESK;

    @Builder.Default
    private List<String> children = new ArrayList<>();

    /** belong to org */
    // private String orgUid;
}
