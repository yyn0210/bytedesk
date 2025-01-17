<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-05 09:43:27
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2025-01-14 17:35:33
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# Bytedesk - Chat as a Service

Team Cooperation with AI powered Omnichannel customer service

## Language

- [English](./README.md)
- [中文](./README.zh.md)

## Introduction

### Team IM

- Multi-level organizational structure
- Role management
- Permission management
- Chat record management
- Group chat

### AI Chat

- Chat with LLM
- Chat with Knowledge base(RAG)
- ...

### Customer Service

- Support multiple channels
- multiple routing strategies, and detailed assessment indicators
- Seating workbench
- Seat management
- ...

### Ticket

- Ticket management
- Ticket SLA management
- Ticket statistics and reports
- ...

## Docker

```bash
# 1. create network
docker network create bytedesk-network

# 2. start mysql
docker run -d \
  --name mysql-bytedesk \
  --network bytedesk-network \
  -e MYSQL_DATABASE=bytedesk_im \
  -e MYSQL_ROOT_PASSWORD=r8FqfdbWUaN3 \
  -p 3306:3306 \
  -v mysql_data:/var/lib/mysql \
  mysql:latest

# 3. start Redis
docker run -d \
  --name redis-bytedesk \
  --network bytedesk-network \
  -p 6379:6379 \
  -v redis_data:/data \
  redis/redis-stack-server:latest \
  /bin/sh -c "redis-server --requirepass qfRxz3tVT8Nh"

# 4. start Bytedesk
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

# stop and remove
# docker stop bytedesk redis-bytedesk mysql-bytedesk
# docker rm bytedesk redis-bytedesk mysql-bytedesk
# docker network rm bytedesk-network
```

## Getting Started

- [Register](https://www.weiyuai.cn/admin/)
- [Source Deploy](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/source)
- [Docker Deploy](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/docker)
- [Jar Deploy](https://www.weiyuai.cn/docs/zh-CN/docs/deploy/jar)
- [Docs](https://www.weiyuai.cn/docs/)

<!-- ## Preview

### Admin

| team | service | ai |
| :----------: | :----------: | :----------: |
| <img src="./images/admin/team.png" width="250"> | <img src="./images/admin/service.png" width="250"> | <img src="./images/admin/ai.png" width="250"> |

## [Desktop](https://github.com/Bytedesk/bytedesk-desktop)

| login | chat | contact | setting |
| :----------: | :----------: | :----------: | :----------: |
| <img src="./images/pc/login2.png" width="100"><img src="./images/pc/switch.png" width="100"> | <img src="./images/pc/chat.png" width="250"> | <img src="./images/pc/contact.png" width="250"> | <img src="./images/pc/setting.png" width="250"> |

| chat-ai | chat-cs | chat-userinfo |
| :----------: | :----------: | :----------: |
| <img src="./images/pc/chat-ai.png" width="250">| <img src="./images/pc/chat-cs.png" width="250"> | <img src="./images/pc/chat-userinfo.png" width="250"> | -->

<!-- ## [Mobile](https://github.com/Bytedesk/bytedesk-mobile)

- [github](https://github.com/Bytedesk/bytedesk-mobile) -->

<!-- ## [Web Chat](https://github.com/bytedesk/bytedesk-react)

- [github](https://github.com/Bytedesk/bytedesk-react) -->

<!-- | custom button color |  custom button left | custom button margin | custom iframe margin |
| :----------: | :----------: | :----------:  | :----------: |
| <img src="./images/visitor-web/button-color.png" width="250"> | <img src="./images/visitor-web/button-left.png" width="250"> | <img src="./images/visitor-web/button-margin.png" width="250"> | <img src="./images/visitor-web/iframe-margin.png" width="250"> |

| custom iframe width |  chat full window | chat iframe window | chat embed window |
| :----------: | :----------: | :----------:  | :----------: |
| <img src="./images/visitor-web/iframe-width.png" width="250"> | <img src="./images/visitor-web/chat-full.png" width="250"> | <img src="./images/visitor-web/chat-iframe.png" width="250"> | <img src="./images/visitor-web/chat-embed.png" width="250"> | -->

## Chat SDK

| Project     | Description           | Forks          | Stars             |
|-------------|-----------------------|----------------|-------------------|
| [iOS](https://github.com/bytedesk/bytedesk-swift) | iOS  | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-swift) | ![GitHub Repo stars](https://img.shields.io/github/stars/Bytedesk/bytedesk-swift)                 |
| [Android](https://github.com/bytedesk/bytedesk-android) | Android | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-android) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-android)  |
| [Flutter](https://github.com/bytedesk/bytedesk-flutter) | Flutter | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-flutter)| ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-flutter) |
| [UniApp](https://github.com/bytedesk/bytedesk-uniapp) | Uniapp | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-uniapp) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-uniapp) |
| [Web](https://github.com/bytedesk/bytedesk-web) | Web | ![GitHub forks](https://img.shields.io/github/forks/bytedesk/bytedesk-web) | ![GitHub Repo stars](https://img.shields.io/github/stars/bytedesk/bytedesk-web) |

## Client

- [Download](https://www.weiyuai.cn/download.html)
<!-- - [Windows](https://www.weiyuai.cn/download.html) -->
<!-- - [Mac](https://www.weiyuai.cn/download.html) -->
<!-- - [Linux](https://www.weiyuai.cn/download.html) -->
<!-- - [Android](https://www.weiyuai.cn/download.html) -->
<!-- - [IOS](https://www.weiyuai.cn/download.html) -->

<!-- ## Dev Stack -->
<!-- - [sofaboot](https://github.com/sofastack/sofa-boot/blob/master/README_ZH.md) for im server -->
<!-- - [springboot-3.x for im server](https://github.com/Bytedesk/bytedesk) -->
<!-- - [python for ai](https://github.com/Bytedesk/bytedesk-ai) -->
<!-- - [react for web](https://github.com/Bytedesk/bytedesk-react) -->
<!-- - [flutter for ios&android](https://github.com/Bytedesk/bytedesk-mobile) -->
<!-- - [electron for windows&mac&linux](https://github.com/Bytedesk/bytedesk-desktop) -->

<!-- ## Contact -->

<!-- - [Email](mailto:270580156@qq.com) -->
<!-- - [Wechat](./images/wechat.png) -->
<!-- - 微语技术支持群：
- <img src="./images/wechat_group.jpg" width="200">
- 如群二维码过期，请添加微信，备注: 微语
- <img src="./images/wechat.png" width="100">
- 服务号
- <img src="./images/wechat_mp.jpg" width="100">
- 订阅号
- <img src="./images/wechatai_mp.jpg" width="100"> -->

## License

- [MIT](./LICENSE)
