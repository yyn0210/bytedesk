/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2021-02-24 15:52:39
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-04 11:24:01
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
/*
 * Copyright (c) 2017 Baidu, Inc. All Rights Reserve.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedesk.core.uid.worker;

import com.bytedesk.core.uid.UidGenerator;
import com.bytedesk.core.uid.UidGereratorRepository;
// import com.bytedesk.core.uid.utils.DockerUtils;
import com.bytedesk.core.uid.utils.NetUtils;
import com.bytedesk.core.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
// import org.apache.commons.lang.math.RandomUtils;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

/**
 * Represents an implementation of {@link WorkerIdAssigner},
 * the worker id will be discarded after assigned to the UidGenerator
 *
 * @author yutianbao
 */
public class DisposableWorkerIdAssigner implements WorkerIdAssigner {

    // @Value("${server.host}")
    // private String host;

    @Value("${server.port}")
    private String port;

    // @Resource
    @Autowired
    private UidGereratorRepository workerNodeDAO;

    /**
     * Assign worker id base on database.<p>
     * If there is host name & port in the environment, we considered that the node runs in Docker container<br>
     * Otherwise, the node runs on an actual machine.
     *
     * @return assigned worker id
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public long assignWorkerId() {
        // build worker node entity
        UidGenerator workerNodeEntity = buildWorkerNode();

        UidGenerator oldWorkerNode = workerNodeDAO
                .findByHostAndPort(workerNodeEntity.getHost(), workerNodeEntity.getPort());
        if (null != oldWorkerNode) {
            return oldWorkerNode.getId();
        }

        // add worker node for new (ignore the same IP + PORT)
        workerNodeDAO.save(workerNodeEntity);
        // LOGGER.info("Add worker node:" + workerNodeEntity);

        return workerNodeEntity.getId();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public long assignFakeWorkerId() {
        return buildFakeWorkerNode().getId();
    }

    /**
     * Build worker node entity by IP and PORT
     */
    private UidGenerator buildWorkerNode() {
        UidGenerator workerNodeEntity = new UidGenerator();
        workerNodeEntity.setUid(Utils.getUid());
    
        workerNodeEntity.setType(WorkerNodeType.ACTUAL.value());
        workerNodeEntity.setHost(NetUtils.getLocalAddress());
        // workerNodeEntity.setPort(System.currentTimeMillis() + "-" + new Random().nextInt(100000));
        // workerNodeEntity.setHost(host);
        workerNodeEntity.setPort(port); 
    
        return workerNodeEntity;
    }

    private UidGenerator buildFakeWorkerNode() {
        UidGenerator workerNodeEntity = new UidGenerator();
        workerNodeEntity.setUid(Utils.getUid());

        workerNodeEntity.setType(WorkerNodeType.FAKE.value());
        workerNodeEntity.setHost(NetUtils.getLocalAddress());
        // workerNodeEntity.setPort(System.currentTimeMillis() + "-" + new Random().nextInt(100000));
        // workerNodeEntity.setHost(host);
        workerNodeEntity.setPort(port);
    
        return workerNodeEntity;
    }
}