/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-06 10:04:59
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-01 22:30:20
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.keyword;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface KeywordRepository extends JpaRepository<KeywordEntity, Long>, JpaSpecificationExecutor<KeywordEntity> {
    
    Optional<KeywordEntity> findByUid(String uid);

    // List<Keyword> findByKeywordListContaining(String keyword);

    // @Query("SELECT k FROM Keyword k WHERE :keyword MEMBER OF k.keywordList")
    // List<Keyword> findByCustomQuery(@Param("keyword") String keyword);
}
