"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{9517:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"deploy/visitor","title":"\u8bbf\u5ba2\u7aef","description":"Nginx","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/deploy/visitor.md","sourceDirName":"deploy","slug":"/deploy/visitor","permalink":"/bytedesk/zh-TW/docs/deploy/visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/visitor.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_label":"\u8bbf\u5ba2\u7aef","sidebar_position":7}}');var t=i(5723),r=i(6246);const l={sidebar_label:"\u8bbf\u5ba2\u7aef",sidebar_position:7},c="\u8bbf\u5ba2\u7aef",a={},d=[{value:"Nginx",id:"nginx",level:2},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",id:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u8bbf\u5ba2\u7aef",children:"\u8bbf\u5ba2\u7aef"})}),"\n",(0,t.jsx)(n.h2,{id:"nginx",children:(0,t.jsx)(n.a,{href:"./depend/nginx",children:"Nginx"})}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u5730\u90e8\u7f72\u53ef\u4e0d\u9700\u8981\uff0c\u4ec5\u5728\u751f\u4ea7\u73af\u5883\u63a8\u8350\u5b89\u88c5nginx\uff0cnginx\u505a\u53cd\u5411\u4ee3\u7406\uff0c"}),"\n",(0,t.jsx)(n.h2,{id:"\u51c6\u5907",children:"\u51c6\u5907"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5c06\u4e0b\u8f7d\u7684 ",(0,t.jsx)(n.a,{href:"https://www.weiyuai.cn/download/weiyu-server.zip",children:"server"})," \u6587\u4ef6\u89e3\u538b\uff0c\u89e3\u538b\u540e\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"(base) server % tree -L 1\n.\n\u251c\u2500\u2500 admin\n\u251c\u2500\u2500 agent\n\u251c\u2500\u2500 bytedesk-starter-0.4.0.jar\n\u251c\u2500\u2500 chat\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 readme.md\n\u251c\u2500\u2500 readme.zh.md\n\u251c\u2500\u2500 start.bat\n\u251c\u2500\u2500 start.sh\n\u251c\u2500\u2500 stop.bat\n\u251c\u2500\u2500 stop.sh\n\u2514\u2500\u2500 uploader\n\n7 directories, 7 files\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u5176\u4e2d\u7684 admin\uff0cagent\uff0cchat \u4e09\u4e2a\u6587\u4ef6\u5939\u590d\u5236\u5230 /var/www/html/weiyuai/ \u6587\u4ef6\u5939\u4e0b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5176\u4e2d\uff1aadmin \u4e3a\u7ba1\u7406\u540e\u53f0\uff0cagent \u4e3a\u5ba2\u6237\u7aef\uff0cchat \u4e3a\u8bbf\u5ba2\u7aef"}),"\n",(0,t.jsxs)(n.li,{children:["\u4e09\u8005\u9ed8\u8ba4\u8bbf\u95ee\u7684\u670d\u52a1\u5668\u5730\u5740\u4e3a: ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:9003",children:"http://127.0.0.1:9003"}),", \u53d1\u5e03\u5230\u7ebf\u4e0a\u65f6\u9700\u8981\u4fee\u6539\u624d\u80fd\u591f\u6b63\u5e38\u4f7f\u7528\uff0c\u5177\u4f53\u4fee\u6539\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.li,{children:"\u627e\u5230 admin/config.json \u3001 agent/config.json \u548c chat/config.json \u4e09\u4e2a\u6587\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"config.json \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "enabled": true,\n    "apiUrl": "https://api.weiyuai.cn",\n    "websocketUrl": "wss://api.weiyuai.cn/websocket",\n    "htmlUrl": "https://www.weiyuai.cn"\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"enabled \u5b57\u6bb5\u4e3a\u662f\u5426\u542f\u7528\u81ea\u5b9a\u4e49\u670d\u52a1\u5668\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a false\u3002\u8fd9\u91cc\u9700\u8981\u5c06 false \u6539\u4e3a true\u3002\u53ea\u6709\u4fee\u6539\u4e3a true\uff0c\u4e0b\u9762\u7684 apiHost \u548c htmlHost \u624d\u80fd\u751f\u6548"}),"\n",(0,t.jsx)(n.li,{children:"apiUrl \u5b57\u6bb5\u4e3a api \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1aapi.weiyuai.cn\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"}),"\n",(0,t.jsx)(n.li,{children:"websocketUrl \u5b57\u6bb5\u4e3a websocket \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1aws://api.weiyuai.cn/websocket\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"}),"\n",(0,t.jsxs)(n.li,{children:["htmlHost \u5b57\u6bb5\u4e3a\u9759\u6001\u7f51\u9875\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,t.jsx)(n.a,{href:"http://www.weiyuai.cn%EF%BC%8C%E8%AF%B7%E6%9B%BF%E6%8D%A2%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%9F%9F%E5%90%8D",children:"www.weiyuai.cn\uff0c\u8bf7\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u57df\u540d"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b",children:"\u66ff\u6362\u4e3aip\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u57df\u540d\u66ff\u6362\u4e3aip"}),"\n",(0,t.jsx)(n.li,{children:"\u5c06https\u66ff\u6362\u4e3ahttp"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "enabled": true,\n    "apiUrl": "http://127.0.0.1:9003",\n    "websocketUrl": "ws://127.0.0.1:9885/websocket",\n    "htmlUrl": "http://127.0.0.1:9006"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},6246:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(2155);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);