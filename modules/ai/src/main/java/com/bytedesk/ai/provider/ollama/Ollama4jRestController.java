/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-11-11 13:19:23
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-11 16:05:19
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.provider.ollama;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bytedesk.core.utils.JsonResult;

import io.github.ollama4j.models.ps.ModelsProcessResponse;
import io.github.ollama4j.models.response.LibraryModel;
import io.github.ollama4j.models.response.LibraryModelDetail;
import io.github.ollama4j.models.response.LibraryModelTag;
import io.github.ollama4j.models.response.Model;

@RestController
@RequestMapping("/api/v1/ollama4j")
public class Ollama4jRestController {

    @Autowired
    private Ollama4jService ollama4jService;

    // http://localhost:9003/api/v1/ollama4j/ping
    @GetMapping("/ping")
    public ResponseEntity<JsonResult<Boolean>> ping() {
        boolean isReachable = ollama4jService.isOllama4jReachable();
        return ResponseEntity.ok(JsonResult.success(isReachable));
    }

    // http://localhost:9003/api/v1/ollama4j/local-models
    @GetMapping("/local-models")
    public ResponseEntity<JsonResult<List<Model>>> getLocalModels() {
        List<Model> models = ollama4jService.getLocalModels();
        return ResponseEntity.ok(JsonResult.success(models));
    }

    // http://localhost:9003/api/v1/ollama4j/models
    @GetMapping("/models")
    public ResponseEntity<JsonResult<List<LibraryModel>>> getModels() {
        List<LibraryModel> models = ollama4jService.getModels();
        return ResponseEntity.ok(JsonResult.success(models));
    }

    // 当前运行的模型
    // http://localhost:9003/api/v1/ollama4j/ps
    @GetMapping("/ps")
    public ResponseEntity<JsonResult<ModelsProcessResponse>> processModels() {
        ModelsProcessResponse models = ollama4jService.getPs();
        return ResponseEntity.ok(JsonResult.success(models));
    }

    // http://localhost:9003/api/v1/ollama4j/models/{model}/details
    @GetMapping("/models/{model}/details")
    public ResponseEntity<JsonResult<LibraryModelDetail>> getModelDetails(@PathVariable String model) {
        LibraryModel libraryModel = new LibraryModel();
        libraryModel.setName(model);
        LibraryModelDetail modelDetail = ollama4jService.getModelDetails(libraryModel);
        return ResponseEntity.ok(JsonResult.success(modelDetail));
    }

    // http://localhost:9003/api/v1/ollama4j/models/{model}/tags/{tag}
    @GetMapping("/models/{model}/tags/{tag}")
    public ResponseEntity<JsonResult<LibraryModelTag>> getModelTag(@PathVariable String model, @PathVariable String tag) {
        LibraryModelTag modelTag = ollama4jService.getModelTag(model, tag);
        return ResponseEntity.ok(JsonResult.success(modelTag));
    }

    // http://localhost:9003/api/v1/ollama4j/models/pull
    @PostMapping("/models/pull")
    public ResponseEntity<?> pullModel(@RequestBody LibraryModelTag libraryModelTag) {
        ollama4jService.pullModel(libraryModelTag);
        return ResponseEntity.ok(JsonResult.success());
    }

    
}