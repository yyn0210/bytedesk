"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5723],{7256:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"deploy/docker","title":"Docker\u90e8\u7f72","description":"- \u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/docker.md","sourceDirName":"deploy","slug":"/deploy/docker","permalink":"/bytedesk/zh-CN/docs/deploy/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/docker.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Docker\u90e8\u7f72","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u6e90\u7801\u90e8\u7f72","permalink":"/bytedesk/zh-CN/docs/deploy/source"},"next":{"title":"Jar\u5305\u90e8\u7f72","permalink":"/bytedesk/zh-CN/docs/deploy/jar"}}');var s=d(5723),r=d(6246);const o={sidebar_label:"Docker\u90e8\u7f72",sidebar_position:3},c="Docker\u90e8\u7f72",i={},a=[{value:"\u5b89\u88c5Docker",id:"\u5b89\u88c5docker",level:2},{value:"\u521b\u5efadocker-compose.yaml\u6587\u4ef6",id:"\u521b\u5efadocker-composeyaml\u6587\u4ef6",level:2},{value:"\u521b\u5efadocker.env\u6587\u4ef6",id:"\u521b\u5efadockerenv\u6587\u4ef6",level:2},{value:"\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u5bb9\u5668",id:"\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u5bb9\u5668",level:2},{value:"\u672c\u5730\u9884\u89c8",id:"\u672c\u5730\u9884\u89c8",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"docker\u90e8\u7f72",children:"Docker\u90e8\u7f72"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS"}),"\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u5668\u6700\u4f4e\u914d\u7f6e2\u68384G\u5185\u5b58\uff0c\u63a8\u8350\u914d\u7f6e4\u68388G\u5185\u5b58"}),"\n"]})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5b89\u88c5docker",children:["\u5b89\u88c5",(0,s.jsx)(n.a,{href:"./depend/docker",children:"Docker"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efadocker-composeyaml\u6587\u4ef6",children:"\u521b\u5efadocker-compose.yaml\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\u5982\u4e0b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'services:\n  bytedesk-db:\n    image: mysql:latest\n    container_name: mysql-bytedesk\n    environment:\n      MYSQL_DATABASE: "bytedesk_im"\n      MYSQL_ROOT_PASSWORD: "r8FqfdbWUaN3"\n    ports:\n      - "3306:3306"\n  bytedesk-redis:\n    image: redis/redis-stack-server:latest\n    container_name: redis-bytedesk\n    command: /bin/sh -c "redis-server --requirepass $$REDIS_HOST_PASSWORD"\n    env_file:\n      - docker.env\n    ports:\n      - "6379:6379"\n  bytedesk:\n    # [\u5b98\u65b9\u955c\u50cf](https://hub.docker.com/r/bytedesk/bytedesk)\n    # image: bytedesk/bytedesk:latest\n    # \u963f\u91cc\u4e91\u955c\u50cf\n    image: registry.cn-hangzhou.aliyuncs.com/bytedesk/bytedesk:latest\n    container_name: bytedesk\n    depends_on:\n      - bytedesk-db\n      - bytedesk-redis\n    environment:\n      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql-bytedesk:3306/bytedesk_im\n      - SPRING_DATASOURCE_USERNAME=root\n      - SPRING_DATASOURCE_PASSWORD=r8FqfdbWUaN3\n      - SPRING_JPA_HIBERNATE_DDL_AUTO=update\n      - SPRING_DATA_REDIS_HOST=redis-bytedesk\n      - SPRING_DATA_REDIS_PORT=6379\n      - SPRING_DATA_REDIS_PASSWORD=qfRxz3tVT8Nh\n      - SPRING_DATA_REDIS_DATABASE=0\n    ports:\n      - 9003:9003\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efadockerenv\u6587\u4ef6",children:"\u521b\u5efadocker.env\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u5bb9\u5982\u4e0b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"REDIS_HOST_PASSWORD=qfRxz3tVT8Nh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u5bb9\u5668",children:"\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4ece\u963f\u91cc\u4e91\u62c9\u53d6\u955c\u50cf\n# \u793e\u533a\u514d\u8d39\u7248\ndocker pull registry.cn-hangzhou.aliyuncs.com/bytedesk/bytedesk-ce:latest\n# \u4f01\u4e1a\u4ed8\u8d39\u7248-\u5b8c\u5584\u4e2d\uff0c\u6682\u672a\u6b63\u5f0f\u5546\u4e1a\u5316\ndocker pull registry.cn-hangzhou.aliyuncs.com/bytedesk/bytedesk:latest\n# \u6216\u4ece docker hub\u62c9\u53d6\u955c\u50cf\uff1a\n# \u793e\u533a\u514d\u8d39\u7248\ndocker pull bytedesk/bytedesk-ce:latest\n# \u4f01\u4e1a\u4ed8\u8d39\u7248-\u5b8c\u5584\u4e2d\uff0c\u6682\u672a\u6b63\u5f0f\u5546\u4e1a\u5316\ndocker pull bytedesk/bytedesk:latest\n# \u542f\u52a8docker compose\u5bb9\u5668, -f\u6807\u5fd7\u6765\u6307\u5b9a\u6587\u4ef6\u8def\u5f84, -d\u6807\u5fd7\u8868\u793a\u5728\u540e\u53f0\u6a21\u5f0f\u4e0b\u542f\u52a8\u5bb9\u5668\ndocker compose -f docker-compose.yaml up -d\n# \u505c\u6b62\u5bb9\u5668\ndocker compose -f docker-compose.yaml stop\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u672c\u5730\u9884\u89c8",children:"\u672c\u5730\u9884\u89c8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"web: http://127.0.0.1:9003/\n\u5f00\u53d1\u8005\u5165\u53e3: http://127.0.0.1:9003/dev\n\u7ba1\u7406\u540e\u53f0: http://127.0.0.1:9003/admin, \u7528\u6237\u540d: admin@email.com, \u5bc6\u7801: admin\n\u5ba2\u6237\u7aef: http://127.0.0.1:9003/agent/chat, \u7528\u6237\u540d: admin@email.com, \u5bc6\u7801: admin\n\u8bbf\u5ba2\u7aef: http://127.0.0.1:9003/chat?org=df_org_uid&t=0&sid=df_ag_uid&\napi\u6587\u6863: http://127.0.0.1:9003/swagger-ui/index.html\n\u6570\u636e\u5e93\u76d1\u63a7: http://127.0.0.1:9003/druid\uff0c\u7528\u6237\u540d: admin@email.com, \u5bc6\u7801: admin\nactuator: http://127.0.0.1:9003/actuator\ndocker: https://hub.docker.com/r/bytedesk/bytedesk\n"})})]})}function k(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6246:(e,n,d)=>{d.d(n,{R:()=>o,x:()=>c});var t=d(2155);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);