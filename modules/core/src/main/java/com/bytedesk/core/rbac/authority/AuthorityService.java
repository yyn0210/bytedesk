/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-06 07:32:39
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.authority;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.bytedesk.core.base.BaseRestService;
import com.bytedesk.core.uid.UidUtils;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthorityService extends BaseRestService<AuthorityEntity, AuthorityRequest, AuthorityResponse> {

    private final AuthorityRepository authorityRepository;
    private final ModelMapper modelMapper;
    private final UidUtils uidUtils;
    // private final AuthService authService;

    // @PreAuthorize(AuthorityPermissions.AUTHORITY_READ)
    @Override
    public Page<AuthorityResponse> queryByOrg(AuthorityRequest request) {
        Pageable pageable = PageRequest.of(request.getPageNumber(), request.getPageSize(), Sort.Direction.ASC, "id");
        Specification<AuthorityEntity> specification = AuthoritySpecification.search(request);
        Page<AuthorityEntity> page = authorityRepository.findAll(specification, pageable);
        return page.map(this::convertToResponse);
    }

    // @PreAuthorize(AuthorityPermissions.AUTHORITY_READ)
    @Override
    public Page<AuthorityResponse> queryByUser(AuthorityRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'queryByUser'");
    }

    
    @Cacheable(value = "authority", key = "#uid", unless = "#result==null")
    @Override
    public Optional<AuthorityEntity> findByUid(String uid) {
        return authorityRepository.findByUid(uid);
    }

    @Cacheable(value = "authority", key = "#value", unless = "#result == null")
    public Optional<AuthorityEntity> findByValue(String value) {
        return authorityRepository.findByValue(value);
    }

    public Boolean existsByValue(String value) {
        return authorityRepository.existsByValue(value);
    }

    @Override
    public AuthorityResponse create(AuthorityRequest request) {
        if (existsByValue(request.getValue())) {
            throw new RuntimeException("value " + request.getValue() + " already exists");
        }
        // 
        AuthorityEntity authorityEntity = modelMapper.map(request, AuthorityEntity.class);
        if (StringUtils.hasText(request.getUid())) {
            authorityEntity.setUid(request.getUid());
        } else {
            authorityEntity.setUid(uidUtils.getUid());
        }
        // 
        AuthorityEntity authorityEntitySaved = save(authorityEntity);
        if (authorityEntitySaved == null) {
            throw new RuntimeException("save authority failed");
        }
        return convertToResponse(authorityEntity);
    }

    // @PreAuthorize(AuthorityPermissions.AUTHORITY_UPDATE)
   @Override
    public AuthorityResponse update(AuthorityRequest request) {
        Optional<AuthorityEntity> optional = findByUid(request.getUid());
        if (optional.isPresent()) {
            // 
            optional.get().setName(request.getName());
            optional.get().setDescription(request.getDescription());
            // 
            AuthorityEntity authorityEntity = save(optional.get());
            if (authorityEntity == null) {
                throw new RuntimeException("update authority failed");
            }
            return convertToResponse(authorityEntity);
        } else {
            throw new RuntimeException("authority " + request.getUid() + " not found");
        }
    }

    @CachePut(value = "authority", key = "#entity.uid")
    @Override
    public AuthorityEntity save(AuthorityEntity entity) {
        try {
            return authorityRepository.save(entity);
        } catch (Exception e) {
            // TODO: handle exception
        }
        return null;
    }

    @CacheEvict(value = "authority", key = "#uid")
    @Override
    public void deleteByUid(String uid) {
        Optional<AuthorityEntity> optional = findByUid(uid);
        if (optional.isPresent()) {
            optional.get().setDeleted(true);
            save(optional.get());
        }
    }

    @CacheEvict(value = "authority", key = "#entity.uid")
    @Override
    public void delete(AuthorityRequest entity) {
        deleteByUid(entity.getUid());
    }

    @Override
    public void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, AuthorityEntity entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleOptimisticLockingFailureException'");
    }

    @Override
    public AuthorityResponse convertToResponse(AuthorityEntity entity) {
        return modelMapper.map(entity, AuthorityResponse.class);
    }

    // public void initData() {

    //     if (authorityRepository.count() > 0) {
    //         return;
    //     }
    //     //
    //     String[] authorities = {
    //             TypeConsts.SUPER,
    //             TypeConsts.ADMIN,
    //             TypeConsts.HR,
    //             TypeConsts.ORG,
    //             TypeConsts.IT,
    //             TypeConsts.MONEY,
    //             TypeConsts.MARKETING,
    //             TypeConsts.SALES,
    //             TypeConsts.CUSTOMER_SERVICE,
    //     };

    //     for (String authority : authorities) {
    //         AuthorityRequest authRequest = AuthorityRequest.builder()
    //                 .name(authority)
    //                 .value(authority)
    //                 .description(authority)
    //                 .build();
    //         authRequest.setType(TypeConsts.TYPE_SYSTEM);
    //         //
    //         create(authRequest);
    //     }

    // }

    

}
