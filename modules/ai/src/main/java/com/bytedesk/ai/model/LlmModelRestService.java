/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-25 12:19:55
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-12 22:54:39
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.model;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.bytedesk.ai.model.LlmModelJsonLoader.ModelJson;
import com.bytedesk.core.base.BaseRestService;
import com.bytedesk.core.constant.BytedeskConsts;
import com.bytedesk.core.uid.UidUtils;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LlmModelRestService extends BaseRestService<LlmModelEntity, LlmModelRequest, LlmModelResponse> {

    private final LlmModelRepository repository;

    private final ModelMapper modelMapper;

    private final UidUtils uidUtils;

    @Override
    public Page<LlmModelResponse> queryByOrg(LlmModelRequest request) {
        Pageable pageable = PageRequest.of(request.getPageNumber(), request.getPageSize(), Direction.ASC,
                "updatedAt");
        Specification<LlmModelEntity> specification = LlmModelSpecification.search(request);
        Page<LlmModelEntity> page = repository.findAll(specification, pageable);
        return page.map(this::convertToResponse);
    }

    @Override
    public Page<LlmModelResponse> queryByUser(LlmModelRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'queryByUser'");
    }

    @Override
    public Optional<LlmModelEntity> findByUid(String uid) {
        return repository.findByUid(uid);
    }

    // Optional<LlmModelEntity> findByNameAndLevel(String name) {
    //     return repository.findByNameAndLevel(name, LevelEnum.PLATFORM.name());
    // }

    public List<LlmModelEntity> findByProviderUid(String providerUid) {
        return repository.findByProviderUid(providerUid);
    }

    public Boolean existsByNameAndProviderUid(String name, String providerUid) {
        return repository.existsByNameAndProviderUid(name, providerUid);
    }

    @Override
    public LlmModelResponse create(LlmModelRequest request) {

        LlmModelEntity entity = modelMapper.map(request, LlmModelEntity.class);
        if (StringUtils.hasText(request.getUid())) {
            entity.setUid(request.getUid());
        } else {
            entity.setUid(uidUtils.getUid());
        }
        //
        LlmModelEntity savedModel = save(entity);
        if (savedModel == null) {
            throw new RuntimeException("Create LlmModel failed");
        }
        return convertToResponse(savedModel);
    }

    public LlmModelResponse createFromModelJson(String providerUid, ModelJson modelJson) {

        LlmModelRequest request = LlmModelRequest.builder()
                .providerUid(providerUid)
                .name(modelJson.getName())
                .nickname(modelJson.getNickname())
                .build();
        request.setOrgUid(BytedeskConsts.DEFAULT_ORGANIZATION_UID);

        return create(request);
    }

    @Override
    public LlmModelResponse update(LlmModelRequest request) {
        Optional<LlmModelEntity> optional = repository.findByUid(request.getUid());
        if (optional.isPresent()) {
            LlmModelEntity entity = optional.get();
            modelMapper.map(request, entity);
            // 
            LlmModelEntity savedModel = save(entity);
            if (savedModel == null) {
                throw new RuntimeException("Update LlmModel failed");
            }
            return convertToResponse(savedModel);
        } else {
            throw new RuntimeException("LlmModel not found");
        }
    }

    @Override
    public LlmModelEntity save(LlmModelEntity entity) {
        try {
            return repository.save(entity);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void deleteByUid(String uid) {
        Optional<LlmModelEntity> optional = repository.findByUid(uid);
        if (optional.isPresent()) {
            LlmModelEntity entity = optional.get();
            entity.setDeleted(true);
            save(entity);
            // repository.delete(entity);
        }
        else {
            throw new RuntimeException("LlmModel not found");
        }
    }

    @Override
    public void delete(LlmModelRequest entity) {
        deleteByUid(entity.getUid());
    }

    @Override
    public void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, LlmModelEntity entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleOptimisticLockingFailureException'");
    }

    @Override
    public LlmModelResponse convertToResponse(LlmModelEntity entity) {
        return modelMapper.map(entity, LlmModelResponse.class);
    }

}
