/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-05-03 18:13:55
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-12-06 16:04:35
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

import com.bytedesk.core.base.BaseEntity;
import com.bytedesk.core.enums.LevelEnum;
import com.bytedesk.core.enums.PlatformEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners({ CategoryEntityListener.class })
@Table(name = "bytedesk_core_category")
public class CategoryEntity extends BaseEntity {

    private String name;

    // this category type may be user defined, so it should use string type, not enum
    @Column(name = "category_type", nullable = false)
    private String type;

    // private String icon;
    // @Column(unique = true)
    // private String path;

    @Builder.Default
    private int orderNo = 0;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private CategoryEntity parent;

    // 需要排序，所以使用List
    @Builder.Default
    @OneToMany(mappedBy = "parent", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CategoryEntity> children = new ArrayList<>();

    @Builder.Default
    private String level = LevelEnum.ORGANIZATION.name();

    @Builder.Default
    private String platform = PlatformEnum.BYTEDESK.name();

    // knowledge base uid
    private String kbUid;

    @Builder.Default
    @Column(name = "post_count")
    private Integer postCount = 0;

    public void addChild(CategoryEntity child) {
        children.add(child);
        child.setParent(this);
    }

    public void removeChild(CategoryEntity child) {
        children.remove(child);
        child.setParent(null);
    }

}
