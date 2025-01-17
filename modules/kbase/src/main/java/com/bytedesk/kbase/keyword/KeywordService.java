/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-06 10:04:45
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-06 22:44:16
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.keyword;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import com.bytedesk.core.base.BaseRestService;
import com.bytedesk.core.category.CategoryEntity;
import com.bytedesk.core.category.CategoryTypeEnum;
import com.bytedesk.core.category.CategoryRequest;
import com.bytedesk.core.category.CategoryResponse;
import com.bytedesk.core.category.CategoryRestService;
import com.bytedesk.core.uid.UidUtils;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class KeywordService extends BaseRestService<KeywordEntity, KeywordRequest, KeywordResponse> {

    private final KeywordRepository keywordRepository;

    private final ModelMapper modelMapper;

    private final UidUtils uidUtils;

    private final CategoryRestService categoryService;

    @Override
    public Page<KeywordResponse> queryByOrg(KeywordRequest request) {

        Pageable pageable = PageRequest.of(request.getPageNumber(), request.getPageSize(), Sort.Direction.DESC,
                "updatedAt");
        Specification<KeywordEntity> spec = KeywordSpecification.search(request);
        Page<KeywordEntity> page = keywordRepository.findAll(spec, pageable);

        return page.map(this::convertToResponse);
    }

    @Override
    public Page<KeywordResponse> queryByUser(KeywordRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'queryByUser'");
    }

    @Cacheable(value = "keyword", key = "#uid", unless = "#result == null")
    @Override
    public Optional<KeywordEntity> findByUid(String uid) {
        return keywordRepository.findByUid(uid);
    }

    @Override
    public KeywordResponse create(KeywordRequest request) {

        KeywordEntity keyword = modelMapper.map(request, KeywordEntity.class);
        keyword.setUid(uidUtils.getCacheSerialUid());
        //
        KeywordEntity savedKeyword = save(keyword);
        if (savedKeyword == null) {
            throw new RuntimeException("Failed to create keyword");
        }

        return convertToResponse(savedKeyword);
    }

    @Override
    public KeywordResponse update(KeywordRequest request) {
        Optional<KeywordEntity> keywordOptional = findByUid(request.getUid());
        if (!keywordOptional.isPresent()) {
            throw new RuntimeException("Keyword not found");
        }
        KeywordEntity keyword = keywordOptional.get();
        keyword.setKeywordList(request.getKeywordList());
        keyword.setReplyList(request.getReplyList());
        keyword.setMatchType(request.getMatchType().name());
        keyword.setContentType(request.getContentType().name());
        keyword.setEnabled(request.getEnabled());
        //
        KeywordEntity savedKeyword = save(keyword);
        if (savedKeyword == null) {
            throw new RuntimeException("Failed to create keyword");
        }
        //
        return convertToResponse(savedKeyword);
    }

    @Override
    public KeywordEntity save(KeywordEntity entity) {
        try {
            return keywordRepository.save(entity);
        } catch (ObjectOptimisticLockingFailureException e) {
            handleOptimisticLockingFailureException(e, entity);
        }
        return null;
    }

    public void save(List<KeywordEntity> keywords) {
        keywordRepository.saveAll(keywords);
    }

    @Override
    public void deleteByUid(String uid) {
        Optional<KeywordEntity> keywordOptional = findByUid(uid);
        if (keywordOptional.isPresent()) {
            keywordOptional.get().setDeleted(true);
            save(keywordOptional.get());
        }
    }

    @Override
    public void delete(KeywordRequest entity) {
        deleteByUid(entity.getUid());
    }

    @Override
    public void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, KeywordEntity entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleOptimisticLockingFailureException'");
    }

    @Override
    public KeywordResponse convertToResponse(KeywordEntity entity) {
        KeywordResponse keywordResponse = modelMapper.map(entity, KeywordResponse.class);
        // 没有自动转换？手动转换
        keywordResponse.setIsTransfer(entity.isTransfer());
        return keywordResponse;
    }

    public KeywordExcel convertToExcel(KeywordResponse entity) {
        KeywordExcel keywordExcel = modelMapper.map(entity, KeywordExcel.class);
        keywordExcel.setKeyword(String.join("|", entity.getKeywordList()));
        keywordExcel.setReply(String.join("|", entity.getReplyList()));
        return keywordExcel;
    }

    public KeywordEntity convertExcelToKeyword(KeywordExcel excel, String kbUid, String orgUid) {
        List<String> keywordList = Arrays.asList(excel.getKeyword().split("\\|")); // 使用正则表达式匹配 "|"
        List<String> replyList = Arrays.asList(excel.getReply().split("\\|")); // 使用正则表达式匹配 "|"
        log.info("keyword {} keywordList: {}", excel.getKeyword(), keywordList);
        log.info("reply {} replyList: {}", excel.getReply(), replyList);
        // 
        KeywordEntity keyword = KeywordEntity.builder().build();
        keyword.setUid(uidUtils.getCacheSerialUid());
        keyword.setKeywordList(keywordList);
        keyword.setReplyList(replyList);
        // 
        keyword.setMatchType(KeywordMatchEnum.FUZZY.name()); // TODO: 默认匹配类型
        keyword.setTransfer(false);
        // 
        // keyword.setCategoryUid(categoryUid);
        Optional<CategoryEntity> categoryOptional = categoryService.findByNameAndKbUid(excel.getCategory(), kbUid);
        if (categoryOptional.isPresent()) {
            keyword.setCategoryUid(categoryOptional.get().getUid());
        } else {
            // create category
            CategoryRequest categoryRequest = CategoryRequest.builder()
                    .name(excel.getCategory())
                    .kbUid(kbUid)
                    .build();
            categoryRequest.setType(CategoryTypeEnum.KEYWORD.name());
            categoryRequest.setOrgUid(orgUid);
            //
            CategoryResponse categoryResponse = categoryService.create(categoryRequest);
            keyword.setCategoryUid(categoryResponse.getUid());
        }
        // 
        keyword.setKbUid(kbUid);
        keyword.setOrgUid(orgUid);
        // 
        return keyword;
    }

}
