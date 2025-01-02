"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9402],{1403:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"deploy/depend/nginx","title":"Nginx","description":"- \u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/depend/nginx.md","sourceDirName":"deploy/depend","slug":"/deploy/depend/nginx","permalink":"/bytedesk/zh-CN/docs/deploy/depend/nginx","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/depend/nginx.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Nginx","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Ollama","permalink":"/bytedesk/zh-CN/docs/deploy/depend/ollama"},"next":{"title":"Letsencrypt","permalink":"/bytedesk/zh-CN/docs/deploy/depend/letsencrypt"}}');var s=i(5723),a=i(6246);const r={sidebar_label:"Nginx",sidebar_position:4},l="Nginx",d={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",id:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",level:2},{value:"nginx.conf",id:"nginxconf",level:2},{value:"sites-available",id:"sites-available",level:2},{value:"weiyuai_cn_80.conf",id:"weiyuai_cn_80conf",level:3},{value:"weiyuai_cn_443.conf",id:"weiyuai_cn_443conf",level:3},{value:"weiyuai_cn_api_80.conf",id:"weiyuai_cn_api_80conf",level:3},{value:"weiyuai_cn_api_443.conf",id:"weiyuai_cn_api_443conf",level:3},{value:"\u521b\u5efa\u8f6f\u94fe\u63a5",id:"\u521b\u5efa\u8f6f\u94fe\u63a5",level:2},{value:"\u4f7f\u914d\u7f6e\u751f\u6548",id:"\u4f7f\u914d\u7f6e\u751f\u6548",level:2},{value:"\u5bf9\u5916\u5f00\u653e\u7aef\u53e3",id:"\u5bf9\u5916\u5f00\u653e\u7aef\u53e3",level:2},{value:"TCP \u8fde\u63a5\u6570\u4fee\u6539\uff08\u53ef\u9009\uff09",id:"tcp-\u8fde\u63a5\u6570\u4fee\u6539\u53ef\u9009",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"nginx",children:"Nginx"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS"}),"\n",(0,s.jsx)(e.li,{children:"\u670d\u52a1\u5668\u6700\u4f4e\u914d\u7f6e 2 \u6838 4G \u5185\u5b58\uff0c\u63a8\u8350\u914d\u7f6e 4 \u6838 8G \u5185\u5b58\u3002"}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install nginx\n# \u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\nnetstat -ntlp\n# \u5982\u679c80\u7aef\u53e3\u6b63\u5e38\u542f\u52a8\uff0c\u5219\u8bc1\u660e\u5b89\u88c5\u6210\u529f\n# \u505c\u6b62nginx\n# service nginx stop\n# \u542f\u52a8nginx\n# service nginx start\n# \u91cd\u542fnginx:\n# service nginx restart\n# systemctl restart nginx\n# \u91cd\u65b0\u52a0\u8f7d\uff1a\n# service nginx force-reload\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# \u67e5\u770b\u662f\u5426\u5b89\u88c5stream\u6a21\u5757\nnginx -V | grep stream # \u6ce8\u610f\u662f\u5927\u5199V\n# \u6709\u8f93\u51fa\u5185\u5bb9\u8bc1\u660e\u5df2\u7ecf\u5b89\u88c5\nnginx version: nginx/1.18.0 (Ubuntu)\n# ...\n# \u53ef\u4ee5\u770b\u5230\u53c2\u6570\uff1a--with-stream=dynamic\uff0c\u8bf4\u660e\u5df2\u7ecf\u5b89\u88c5stream\u6a21\u5757\n# \u5bf9\u5e94\u62a5\u9519\uff1aunknown directive "stream" in /etc/nginx/nginx.conf\uff0c\u9700\u8981\u5728nginx.conf\u7684\u7b2c\u4e00\u884c\u63d2\u5165\nload_module /usr/lib/nginx/modules/ngx_stream_module.so;\n# \u7f13\u5b58\u8def\u5f84\uff0c\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u5728nginx.conf\u6587\u4ef6\u4e2d\u7528\u5230\nmkdir -p /var/www/html/nginx/cache/webserver\n# \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\nnginx -s reload\n# \u6216\u8005 \u91cd\u542fnginx\nservice nginx restart\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u51c6\u5907",children:"\u51c6\u5907"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5c06\u4e0b\u8f7d\u7684 ",(0,s.jsx)(e.a,{href:"https://www.weiyuai.cn/download/weiyu-server.zip",children:"server"})," \u6587\u4ef6\u89e3\u538b\uff0c\u89e3\u538b\u540e\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"(base) server % tree -L 1\n.\n\u251c\u2500\u2500 admin\n\u251c\u2500\u2500 agent\n\u251c\u2500\u2500 bytedesk-starter-0.4.0.jar\n\u251c\u2500\u2500 chat\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 readme.md\n\u251c\u2500\u2500 readme.zh.md\n\u251c\u2500\u2500 start.bat\n\u251c\u2500\u2500 start.sh\n\u251c\u2500\u2500 stop.bat\n\u251c\u2500\u2500 stop.sh\n\u2514\u2500\u2500 uploader\n\n7 directories, 7 files\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c06\u5176\u4e2d\u7684 admin\uff0cagent\uff0cchat \u4e09\u4e2a\u6587\u4ef6\u5939\u590d\u5236\u5230 /var/www/html/weiyuai/ \u6587\u4ef6\u5939\u4e0b\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5176\u4e2d\uff1aadmin \u4e3a\u7ba1\u7406\u540e\u53f0\uff0cagent \u4e3a\u5ba2\u6237\u7aef\uff0cchat \u4e3a\u8bbf\u5ba2\u7aef"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e09\u8005\u9ed8\u8ba4\u8bbf\u95ee\u7684\u670d\u52a1\u5668\u5730\u5740\u4e3a: ",(0,s.jsx)(e.a,{href:"http://127.0.0.1:9003",children:"http://127.0.0.1:9003"}),", \u53d1\u5e03\u5230\u7ebf\u4e0a\u65f6\u9700\u8981\u4fee\u6539\u624d\u80fd\u591f\u6b63\u5e38\u4f7f\u7528\uff0c\u5177\u4f53\u4fee\u6539\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.li,{children:"\u627e\u5230 admin/config.json \u3001 agent/config.json \u548c chat/config.json \u4e09\u4e2a\u6587\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"config.json \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "enabled": false,\n    "apiUrl": "https://api.weiyuai.cn",\n    "websocketUrl": "wss://api.weiyuai.cn/websocket",\n    "htmlUrl": "https://www.weiyuai.cn"\n}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"enabled \u5b57\u6bb5\u4e3a\u662f\u5426\u542f\u7528\u81ea\u5b9a\u4e49\u670d\u52a1\u5668\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a false\u3002\u8fd9\u91cc\u9700\u8981\u5c06 false \u6539\u4e3a true\u3002\u53ea\u6709\u4fee\u6539\u4e3a true\uff0c\u4e0b\u9762\u7684 apiHost \u548c htmlHost \u624d\u80fd\u751f\u6548"}),"\n",(0,s.jsx)(e.li,{children:"apiUrl \u5b57\u6bb5\u4e3a api \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1aapi.weiyuai.cn\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"}),"\n",(0,s.jsx)(e.li,{children:"websocketUrl \u5b57\u6bb5\u4e3a websocket \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1aws://api.weiyuai.cn/websocket\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"}),"\n",(0,s.jsxs)(e.li,{children:["htmlHost \u5b57\u6bb5\u4e3a\u9759\u6001\u7f51\u9875\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,s.jsx)(e.a,{href:"http://www.weiyuai.cn%EF%BC%8C%E8%AF%B7%E6%9B%BF%E6%8D%A2%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%9F%9F%E5%90%8D",children:"www.weiyuai.cn\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",children:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c06\u57df\u540d\u66ff\u6362\u4e3aip"}),"\n",(0,s.jsx)(e.li,{children:"\u5c06https\u66ff\u6362\u4e3ahttp"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "enabled": false,\n    "apiUrl": "http://127.0.0.1:9003",\n    "websocketUrl": "ws://127.0.0.1:9885/websocket",\n    "htmlUrl": "http://127.0.0.1:9006"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"nginxconf",children:"nginx.conf"}),"\n",(0,s.jsx)(e.p,{children:"\u5728nginx.conf\u6587\u4ef6\u4e2dhttp\u6a21\u5757\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#...\nhttp {\n    ##...\n    \n    ## restapi-\u8d1f\u8f7d\u5747\u8861\n    upstream weiyuai {\n        # round_robin; # \u9ed8\u8ba4\uff0c\u8f6e\u6d41\u5206\u914d\n        ip_hash; # \u540c\u4e00\u4e2aip\u8bbf\u95ee\u540c\u4e00\u53f0\u670d\u52a1\u5668, \u8fd9\u6837\u6765\u81ea\u540c\u4e00\u4e2aIP\u7684\u8bbf\u5ba2\u56fa\u5b9a\u8bbf\u95ee\u4e00\u4e2a\u540e\u7aef\u670d\u52a1\u5668\n        # least_conn; # \u516c\u5e73\u5206\u914d\n        # server 172.16.81.2:9003     weight=2 max_fails=10 fail_timeout=60s;\n        server 127.0.0.1:9003 weight=2 max_fails=10 fail_timeout=60s;\n    }\n\n    # websocket-\u8d1f\u8f7d\u5747\u8861\n    upstream weiyuaiwss {\n        # round_robin; # \u9ed8\u8ba4\uff0c\u8f6e\u6d41\u5206\u914d\n        ip_hash; # \u540c\u4e00\u4e2aip\u8bbf\u95ee\u540c\u4e00\u53f0\u670d\u52a1\u5668, \u8fd9\u6837\u6765\u81ea\u540c\u4e00\u4e2aIP\u7684\u8bbf\u5ba2\u56fa\u5b9a\u8bbf\u95ee\u4e00\u4e2a\u540e\u7aef\u670d\u52a1\u5668\n        # least_conn; # \u516c\u5e73\u5206\u914d\n        # server 172.16.81.2:9885     weight=2 max_fails=10 fail_timeout=60s;\n        server 127.0.0.1:9885 weight=2 max_fails=10 fail_timeout=60s;\n    }\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"sites-available",children:"sites-available"}),"\n",(0,s.jsx)(e.p,{children:"\u5728sites-available\u6587\u4ef6\u5939\u4e0b\u521b\u5efa4\u4e2a\u6587\u4ef6\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"weiyuai_cn_80conf",children:"weiyuai_cn_80.conf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u5c06 server_name weiyuai.cn *.weiyuai.cn; \u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\u6216\u8005IP\u5730\u5740"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# weiyuai_cn_80.conf\u5185\u5bb9\nserver {\n    listen 80;\n    listen [::]:80;\n\n    root /var/www/html/weiyuai/;\n    index index.html index.htm index.nginx-debian.html index.php;\n\n    server_name weiyuai.cn *.weiyuai.cn;\n\n    location / {\n        # \u5339\u914d\u6240\u6709\u8def\u5f84\uff0c\u5e76\u5c1d\u8bd5\u9996\u5148\u63d0\u4f9b\u6587\u4ef6\uff0c\u7136\u540e\u76ee\u5f55\uff0c\u6700\u540e\u56de\u9000\u5230index.html\n        try_files $uri $uri/ /index.html; # \u8fd9\u91cc\u5e94\u8be5\u6307\u5411\u6839\u76ee\u5f55\u7684index.html\uff0c\u800c\u4e0d\u662f\u7279\u5b9a\u8def\u5f84\u4e0b\u7684index.html\n    }\n\n    # \u5982\u679c\u9700\u8981\u4e3a\u6bcf\u4e2a\u5b50\u8def\u5f84\u63d0\u4f9b\u7279\u5b9a\u7684index.html\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u989d\u5916\u7684location\u5757\n    location /admin/ {\n        try_files $uri $uri/ /admin/index.html;\n    }\n\n    location /agent/ {\n        try_files $uri $uri/ /agent/index.html;\n    }\n\n    location /chat/ {\n        try_files $uri $uri/ /chat/index.html;\n    }\n\n    location /frame/ {\n        try_files $uri $uri/ /chat/index.html;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"weiyuai_cn_443conf",children:"weiyuai_cn_443.conf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u9009\uff0c\u4ec5\u6709\u542f\u7528ssl\u7684\u60c5\u51b5\u4e0b\u9700\u8981"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u5c06 server_name weiyuai.cn *.weiyuai.cn; \u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\u6216\u8005IP\u5730\u5740"}),"\n",(0,s.jsx)(e.li,{children:"443\u7aef\u53e3\u914d\u7f6e\uff0c\u9700\u8981ssl\u8bc1\u4e66\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662fLet's Encrypt\u7684\u514d\u8d39SSL\u8bc1\u4e66"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u6539ssl\u8bc1\u4e66\u7684\u8def\u5f84"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# weiyuai_cn_443.conf\u5185\u5bb9\nserver {\n\tlisten 443 ssl;\n\tlisten [::]:443 ssl;\n\n\tssl_certificate /etc/letsencrypt/live/weiyuai.cn/fullchain.pem; # managed by Certbot\n    ssl_certificate_key /etc/letsencrypt/live/weiyuai.cn/privkey.pem; # managed by Certbot\n\n\tserver_name weiyuai.cn *.weiyuai.cn;\n\n\troot /var/www/html/weiyuai;\n\tindex index.html index.htm index.nginx-debian.html index.php;\n\n\tlocation / {\n        # \u5339\u914d\u6240\u6709\u8def\u5f84\uff0c\u5e76\u5c1d\u8bd5\u9996\u5148\u63d0\u4f9b\u6587\u4ef6\uff0c\u7136\u540e\u76ee\u5f55\uff0c\u6700\u540e\u56de\u9000\u5230index.html\n        try_files $uri $uri/ /index.html; # \u8fd9\u91cc\u5e94\u8be5\u6307\u5411\u6839\u76ee\u5f55\u7684index.html\uff0c\u800c\u4e0d\u662f\u7279\u5b9a\u8def\u5f84\u4e0b\u7684index.html\n    }\n\n    # \u5982\u679c\u9700\u8981\u4e3a\u6bcf\u4e2a\u5b50\u8def\u5f84\u63d0\u4f9b\u7279\u5b9a\u7684index.html\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u989d\u5916\u7684location\u5757\n    location /admin/ {\n        try_files $uri $uri/ /admin/index.html;\n    }\n\n    location /agent/ {\n        try_files $uri $uri/ /agent/index.html;\n    }\n\n    location /chat/ {\n        try_files $uri $uri/ /chat/index.html;\n    }\n\n    location /frame/ {\n        try_files $uri $uri/ /chat/index.html;\n    }\n\n    location /docs/ {\n        try_files $uri $uri/ /docs/index.html;\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"weiyuai_cn_api_80conf",children:"weiyuai_cn_api_80.conf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u5c06 server_name api.weiyuai.cn; \u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\u6216\u8005IP\u5730\u5740"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# weiyuai_cn_api_80.conf\u5185\u5bb9\nserver {\n\tlisten 80;\n\tlisten [::]:80;\n\n\troot /var/www/html/weiyuai/;\n\tindex index.html index.htm index.nginx-debian.html;\n\n    server_name api.weiyuai.cn;\n\n    ## \u53cd\u5411\u4ee3\u7406\n    # https\u4ee3\u7406stomp\u8fde\u63a5\n    location /stomp {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_pass http://weiyuai/stomp;\n\n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n    }\n\n    ## \u53cd\u5411\u4ee3\u7406\n    # https\u4ee3\u7406websocket\u8fde\u63a5\n    location /websocket {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_pass http://weiyuaiwss/websocket;\n\n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n    }\n\n    #\u589e\u52a0\u4e24\u5934\u90e8\n    add_header X-Via $server_addr;\n    add_header X-Cache $upstream_cache_status;\n\n    ## \u53cd\u5411\u4ee3\u7406\n    location @springboot {\n\t\t# \u5c06nginx\u6240\u6709\u8bf7\u6c42\u5747\u8df3\u8f6c\u52309003\u7aef\u53e3\n        proxy_pass http://weiyuai;\n        \n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        #  X-Real-IP \u8ba9\u65e5\u5fd7\u7684IP\u663e\u793a\u771f\u5b9e\u7684\u5ba2\u6237\u7aef\u7684IP\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n\n        # \u8bbe\u7f6e\u7f13\u5b58\n        # \u4e3a\u5e94\u7b54\u4ee3\u7801\u4e3a200\u548c302\u7684\u8bbe\u7f6e\u7f13\u5b58\u65f6\u95f4\u4e3a10\u5206\u949f\uff0c404\u4ee3\u7801\u7f13\u5b5810\u5206\u949f\u3002\n        #proxy_cache webserver;\n        # proxy_cache_valid  200 302  10m;\n        proxy_cache_valid  404      10m;\n\t}\n\n\tlocation / {\n        # First attempt to serve request as file, then\n\t\t# as directory, then fall back to displaying a 404.\n\t\t# try_files $uri $uri/ =404;\n\t\ttry_files $uri $uri/ @springboot;\n\t}\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"weiyuai_cn_api_443conf",children:"weiyuai_cn_api_443.conf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u9009\uff0c\u4ec5\u6709\u542f\u7528ssl\u7684\u60c5\u51b5\u4e0b\u9700\u8981"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u5c06 server_name api.weiyuai.cn; \u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\u6216\u8005IP\u5730\u5740"}),"\n",(0,s.jsx)(e.li,{children:"443\u7aef\u53e3\u914d\u7f6e\uff0c\u9700\u8981ssl\u8bc1\u4e66\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662fLet's Encrypt\u7684\u514d\u8d39SSL\u8bc1\u4e66"}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u4fee\u6539ssl\u8bc1\u4e66\u7684\u8def\u5f84"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# weiyuai_cn_api_443.conf\u5185\u5bb9\nserver {\n\tlisten 443 ssl;\n\tlisten [::]:443 ssl;\n\n\tssl_certificate /etc/letsencrypt/live/weiyuai.cn/fullchain.pem; # managed by Certbot\n    ssl_certificate_key /etc/letsencrypt/live/weiyuai.cn/privkey.pem; # managed by Certbot\n\n\tserver_name api.weiyuai.cn;\n\n\troot /var/www/html/weiyuai;\n\tindex index.html index.htm index.nginx-debian.html;\n\n    ## \u53cd\u5411\u4ee3\u7406\n    # https\u4ee3\u7406stomp\u8fde\u63a5\n    location /stomp {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_pass http://weiyuai/stomp;\n\n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n    }\n\n    ## \u53cd\u5411\u4ee3\u7406\n    # https\u4ee3\u7406websocket\u8fde\u63a5\n    location /websocket {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_pass http://weiyuaiwss/websocket;\n\n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n    }\n\n    #\u589e\u52a0\u4e24\u5934\u90e8\n    add_header X-Via $server_addr;\n    add_header X-Cache $upstream_cache_status;\n\n    ## \u53cd\u5411\u4ee3\u7406\n    location @springboot {\n\t\t# \u5c06nginx\u6240\u6709\u8bf7\u6c42\u5747\u8df3\u8f6c\u52309003\u7aef\u53e3\n        proxy_pass http://weiyuai;\n\n        # add_header Access-Control-Allow-Origin *; # \u62a5\u9519\uff0c\u4e0d\u80fd\u6dfb\u52a0\uff0c\u9700\u8981\u5728spring boot\u4e2d\u53bb\u6389\u76f8\u5e94\u7684origin\n        # \u4e3a\u8bb0\u5f55\u771f\u5b9eip\u5730\u5740\uff0c\u800c\u4e0d\u662f\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\n        proxy_set_header  Host            $host;\n        #  X-Real-IP \u8ba9\u65e5\u5fd7\u7684IP\u663e\u793a\u771f\u5b9e\u7684\u5ba2\u6237\u7aef\u7684IP\n        proxy_set_header  X-Real-IP       $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n        include           fastcgi_params;\n\n        # \u8bbe\u7f6e\u7f13\u5b58\n        # \u4e3a\u5e94\u7b54\u4ee3\u7801\u4e3a200\u548c302\u7684\u8bbe\u7f6e\u7f13\u5b58\u65f6\u95f4\u4e3a10\u5206\u949f\uff0c404\u4ee3\u7801\u7f13\u5b5810\u5206\u949f\u3002\n        #proxy_cache webserver;\n        #proxy_cache_valid  200 302  10m;\n        proxy_cache_valid  404      10m;\n\t}\n\n\tlocation / {\n        # First attempt to serve request as file, then\n\t\t# as directory, then fall back to displaying a 404.\n\t\t# try_files $uri $uri/ =404;\n\t\ttry_files $uri $uri/ @springboot;\n\t}\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u521b\u5efa\u8f6f\u94fe\u63a5",children:"\u521b\u5efa\u8f6f\u94fe\u63a5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u521b\u5efa\u8f6f\u8fde\u63a5\nsudo ln -s /etc/nginx/sites-available/weiyuai_cn_80.conf /etc/nginx/sites-enabled/\nsudo ln -s /etc/nginx/sites-available/weiyuai_cn_443.conf /etc/nginx/sites-enabled/\nsudo ln -s /etc/nginx/sites-available/weiyuai_cn_api_80.conf /etc/nginx/sites-enabled/\nsudo ln -s /etc/nginx/sites-available/weiyuai_cn_api_443.conf /etc/nginx/sites-enabled/\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u914d\u7f6e\u751f\u6548",children:"\u4f7f\u914d\u7f6e\u751f\u6548"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u91cd\u65b0\u52a0\u8f7dnginx\u914d\u7f6e\nsudo nginx -s reload\n# \u6216\nsudo systemctl reload nginx\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5bf9\u5916\u5f00\u653e\u7aef\u53e3",children:"\u5bf9\u5916\u5f00\u653e\u7aef\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5bf9\u5916\u5f00\u653e\u7aef\u53e3\u53f7\nhttp\uff1a80\nhttps\uff1a443\n# \u53ef\u9009\uff0c\u53ef\u4e0d\u5bf9\u5916\u5f00\u653e\nmysql\uff1a3306\nredis\uff1a6379\nrest api\uff1a9003\nwebsocket\uff1a9885\n"})}),"\n",(0,s.jsx)(e.h2,{id:"tcp-\u8fde\u63a5\u6570\u4fee\u6539\u53ef\u9009",children:"TCP \u8fde\u63a5\u6570\u4fee\u6539\uff08\u53ef\u9009\uff09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770bLinux\u7cfb\u7edf\u7528\u6237\u6700\u5927\u6253\u5f00\u7684\u6587\u4ef6\u9650\u5236\nulimit -n\n# 65535\n# \u4fee\u6539\u6253\u5f00\u6587\u4ef6\u9650\u5236\nvi /etc/security/limits.conf\nroot soft nofile 655350\nroot hard nofile 655350\nnginx soft nofile 6553500\nnginx hard nofile 6553500\n* soft nofile 655350\n* hard nofile 655350\n# \u5176\u4e2droot\u6307\u5b9a\u4e86\u8981\u4fee\u6539\u54ea\u4e2a\u7528\u6237\u7684\u6253\u5f00\u6587\u4ef6\u6570\u9650\u5236\u3002\n# \u53ef\u7528'*'\u53f7\u8868\u793a\u4fee\u6539\u6240\u6709\u7528\u6237\u7684\u9650\u5236\uff1bsoft\u6216hard\u6307\u5b9a\u8981\u4fee\u6539\u8f6f\u9650\u5236\u8fd8\u662f\u786c\u9650\u5236\uff1b\n# 102400\u5219\u6307\u5b9a\u4e86\u60f3\u8981\u4fee\u6539\u7684\u65b0\u7684\u9650\u5236\u503c\uff0c\u5373\u6700\u5927\u6253\u5f00\u6587\u4ef6\u6570(\u8bf7\u6ce8\u610f\u8f6f\u9650\u5236\u503c\u8981\u5c0f\u4e8e\u6216\u7b49\u4e8e\u786c\u9650\u5236)\n# \u6ce8\u610f\uff1a\u4fee\u6539\u4e86/etc/security/limits.conf\uff0c\u5173\u95edTerminal\u91cd\u65b0\u767b\u5f55\u6216\u91cd\u542f\u670d\u52a1\u5668\u751f\u6548\n# \u67e5\u770b open files\u6570\nulimit -a\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# \u67e5\u770bnginx log\ncd /var/log/nginx\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://letsencrypt.org/",children:"letsencrypt"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.jianshu.com/p/c5c9d071e395",children:"LetsEncrypt \u901a\u914d\u7b26\u8bc1\u4e66"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.cnblogs.com/xiao987334176/p/11008812.html",children:"Ubuntu /etc/security/limits.conf \u4e0d\u751f\u6548\u95ee\u9898"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},6246:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(2155);const s={},a=t.createContext(s);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);