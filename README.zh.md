<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-05 09:44:23
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-14 17:37:31
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# 微语

企业级多租户即时通讯解决方案
<!-- 一款聊天软件 -->
<!-- 可编排AI知识库问答 + 对接自有业务系统 + 转人工客服。 -->
<!-- 不仅仅是一款 **企业IM** -->
<!-- 致力于实现企业管理软件一站式解决方案。 -->

:::tip
微语仍处于早期的快速迭代阶段，文档可能落后于开发，导致功能描述可能不符，以最新发布的软件版本为准
:::

## 语言

- [English](./README.md)
- [中文](./README.zh.md)

## 介绍

### 企业IM

- 局域网即时通讯
- 企业成员管理
- 聊天记录监控
- ...

### 全渠道客服

- 大模型AI智能客服
- 实现人工客服兜底
- 支持多渠道
- ...

### 知识库AI对话

- 可编排AI知识库问答
- 对接知识库
- 实现系统解耦，更利于扩展
- ...

### 工单系统

- 工单管理
- 工单SLA管理
- 工单统计和报表
- ...

## Docker

```bash
# 1. 创建网络
docker network create bytedesk-network

# 2. 启动 MySQL
docker run -d \
  --name mysql-bytedesk \
  --network bytedesk-network \
  -e MYSQL_DATABASE=bytedesk_im \
  -e MYSQL_ROOT_PASSWORD=r8FqfdbWUaN3 \
  -p 3306:3306 \
  -v mysql_data:/var/lib/mysql \
  mysql:latest

# 3. 启动 Redis
docker run -d \
  --name redis-bytedesk \
  --network bytedesk-network \
  -p 6379:6379 \
  -v redis_data:/data \
  redis/redis-stack-server:latest \
  /bin/sh -c "redis-server --requirepass qfRxz3tVT8Nh"

# 4. 启动 Bytedesk
docker run -d \
  --name bytedesk \
  --network bytedesk-network \
  -p 9003:9003 \
  -p 9885:9885 \
  -v upload_data:/app/uploads \
  -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql-bytedesk:3306/bytedesk_im \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=r8FqfdbWUaN3 \
  -e SPRING_DATA_REDIS_HOST=redis-bytedesk \
  -e SPRING_DATA_REDIS_PASSWORD=qfRxz3tVT8Nh \
  registry.cn-hangzhou.aliyuncs.com/bytedesk/bytedesk:latest

# 停止和删除命令
# docker stop bytedesk redis-bytedesk mysql-bytedesk
# docker rm bytedesk redis-bytedesk mysql-bytedesk
# docker network rm bytedesk-network
```

## 快速开始

- [注册体验](https://www.weiyuai.cn/admin/)
- [源码部署](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/source)
- [Docker部署](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/docker)
- [Jar包部署](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/jar)
- [文档](https://www.weiyuai.cn/docs/zh-CN/)

<!-- ## 预览

### 管理后台

| 组织 | 客服 | ai |
| :----------: | :----------: | :----------: |
| <img src="./images/admin/team.png" width="250"> | <img src="./images/admin/service.png" width="250"> | <img src="./images/admin/ai.png" width="250"> |

## [桌面客户端](https://github.com/Bytedesk/bytedesk-desktop)

| 登录 | 对话 | 通讯录 | 设置 |
| :----------: | :----------: | :----------: | :----------: |
| <img src="./images/pc/login2.png" width="100"><img src="./images/pc/switch.png" width="100"> | <img src="./images/pc/chat.png" width="250"> | <img src="./images/pc/contact.png" width="250"> | <img src="./images/pc/setting.png" width="250"> |

| 客服-AI助手 | 客服-常用语 | 客服-访客信息 |
| :----------: | :----------: | :----------: |
| <img src="./images/pc/chat-ai.png" width="250">| <img src="./images/pc/chat-cs.png" width="250"> | <img src="./images/pc/chat-userinfo.png" width="250"> | -->

<!-- ## [移动客户端](https://github.com/Bytedesk/bytedesk-mobile)

- [gitee](https://gitee.com/270580156/bytedesk-mobile)
- [github](https://github.com/Bytedesk/bytedesk-mobile) -->

<!-- ## [网页版](https://github.com/bytedesk/bytedesk-react)

 [gitee](https://gitee.com/270580156/bytedesk-react)
- [github](https://github.com/Bytedesk/bytedesk-react) -->

<!-- | 自定义按钮颜色 |  按钮放在窗口左下角 | 自定义按钮边距 | 自定义聊天窗口边距 |
| :----------: | :----------: | :----------:  | :----------: |
| <img src="./images/visitor-web/button-color.png" width="250"> | <img src="./images/visitor-web/button-left.png" width="250"> | <img src="./images/visitor-web/button-margin.png" width="250"> | <img src="./images/visitor-web/iframe-margin.png" width="250"> |

| 自定义聊天窗口宽度 |  全屏聊天窗口 | iframe聊天窗口 | 嵌入式聊天窗口 |
| :----------: | :----------: | :----------:  | :----------: |
| <img src="./images/visitor-web/iframe-width.png" width="250"> | <img src="./images/visitor-web/chat-full.png" width="250"> | <img src="./images/visitor-web/chat-iframe.png" width="250"> | <img src="./images/visitor-web/chat-embed.png" width="250"> | -->

## 对话SDK

| Project     | Description           | Forks          | Stars             |
|-------------|-----------------------|----------------|-------------------|
| [iOS](https://github.com/bytedesk/bytedesk-swift) | iOS  | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-swift) | ![GitHub Repo stars](https://img.shields.io/github/stars/Bytedesk/bytedesk-swift)                 |
| [Android](https://github.com/bytedesk/bytedesk-android) | Android | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-android) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-android)  |
| [Flutter](https://github.com/bytedesk/bytedesk-flutter) | Flutter | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-flutter)| ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-flutter) |
| [UniApp](https://github.com/bytedesk/bytedesk-uniapp) | Uniapp | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-uniapp) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-uniapp) |
| [Web](https://github.com/bytedesk/bytedesk-web) | Web | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-web) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-web) |

## 客户端

- [下载](https://www.weiyuai.cn/download.html)
<!-- - [Windows](https://www.weiyuai.cn/download.html) -->
<!-- - [Mac](https://www.weiyuai.cn/download.html) -->
<!-- - [Linux](https://www.weiyuai.cn/download.html) -->
<!-- - [Android](https://www.weiyuai.cn/download.html) -->
<!-- - [IOS](https://www.weiyuai.cn/download.html) -->

## 技术栈
<!-- - [sofaboot](https://github.com/sofastack/sofa-boot/blob/master/README_ZH.md) for im server 基于金融级云原生架构-->
- [springboot-3.x for 后端](https://github.com/Bytedesk/bytedesk)
- [react for web前端](https://github.com/Bytedesk/bytedesk-web)
- [flutter for 移动客户端(ios&android)](https://github.com/Bytedesk/bytedesk-mobile)
- [electron for 桌面客户端(windows&mac&linux)](https://github.com/Bytedesk/bytedesk-desktop)
<!-- - [python for ai](https://github.com/Bytedesk/bytedesk-ai) -->

## 联系

<!-- - [Email](mailto:270580156@qq.com) -->
<!-- - [微信](./images/wechat.png) -->
- 微语技术支持群：
- <img src="./images/wechat_group.jpg" width="200">
<!-- - 如群二维码过期，请添加微信，备注: 微语 -->
<!-- - <img src="./images/wechat.png" width="100"> -->
- 服务号
- <img src="./images/wechat_mp.jpg" width="100">
- 订阅号
- <img src="./images/wechatai_mp.jpg" width="100">

<!-- ## [写在前面](https://www.weiyuai.cn/) -->
- 此为开源社区版，支持免费商用
<!-- - 此软件可能存在bug或不完善的地方，如造成损失，需自行负责 -->
<!-- - 请联系[微信](./images/wechat.png) -->
<!-- - 严禁用于含有木马、病毒、色情、赌博、诈骗等违法违规业务 -->

## 版权

- [MIT](./LICENSE)
