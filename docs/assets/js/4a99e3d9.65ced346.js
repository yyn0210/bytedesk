"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2789],{3943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"manual/agent/auth/login","title":"\u767b\u5f55","description":"\u65b9\u6cd5\u4e00\uff1a\u81ea\u5b9a\u4e49\u670d\u52a1\u5668","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/agent/auth/login.md","sourceDirName":"manual/agent/auth","slug":"/manual/agent/auth/login","permalink":"/bytedesk/docs/manual/agent/auth/login","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/manual/agent/auth/login.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"\u767b\u5f55","sidebar_position":1}}');var i=t(5723),a=t(6246);const l={sidebar_label:"\u767b\u5f55",sidebar_position:1},o="\u767b\u5f55",r={},c=[{value:"\u65b9\u6cd5\u4e00\uff1a\u81ea\u5b9a\u4e49\u670d\u52a1\u5668",id:"\u65b9\u6cd5\u4e00\u81ea\u5b9a\u4e49\u670d\u52a1\u5668",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1aWeb \u7248\u5ba2\u6237\u7aef",id:"\u65b9\u6cd5\u4e8cweb-\u7248\u5ba2\u6237\u7aef",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u767b\u5f55",children:"\u767b\u5f55"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e00\u81ea\u5b9a\u4e49\u670d\u52a1\u5668",children:"\u65b9\u6cd5\u4e00\uff1a\u81ea\u5b9a\u4e49\u670d\u52a1\u5668"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u767b\u5f55\u7ba1\u7406\u540e\u53f0"}),"\n",(0,i.jsxs)(n.li,{children:["\u70b9\u51fb\u5de6\u4fa7\u83dc\u5355\u680f\u7684",(0,i.jsx)(n.code,{children:"\u8bbe\u7f6e"})," -\u300b",(0,i.jsx)(n.code,{children:"\u670d\u52a1\u5668\u8bbe\u7f6e"})," -\u300b\u590d\u5236 \u670d\u52a1\u5668\u5730\u5740"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6253\u5f00\u5ba2\u6237\u7aef\uff0c\u767b\u5f55\u754c\u9762\uff0c\u70b9\u51fb",(0,i.jsx)(n.code,{children:"\u81ea\u5b9a\u4e49\u670d\u52a1\u5668"}),"\uff0c\u7c98\u8d34\u670d\u52a1\u5668\u5730\u5740\uff0c\u70b9\u51fb",(0,i.jsx)(n.code,{children:"\u4fdd\u5b58"})]}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u767b\u5f55\u754c\u9762\uff0c\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u5373\u53ef"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e8cweb-\u7248\u5ba2\u6237\u7aef",children:"\u65b9\u6cd5\u4e8c\uff1aWeb \u7248\u5ba2\u6237\u7aef"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u4e00\u83b7\u53d6\u5230\u670d\u52a1\u5668\u5730\u5740"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u627e\u5230 agent/config.json \u6587\u4ef6\uff0c\u9ed8\u8ba4\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "enabled": false, // false \u6539\u4e3a true\u3002\u53ea\u6709\u4fee\u6539\u4e3a true\uff0c\u4e0b\u9762\u7684 apiHost \u548c htmlHost \u624d\u80fd\u751f\u6548\n    "apiHost": "api.weiyuai.cn", // \u91cd\u8981\uff1a\u6539\u4e3a\u7ebf\u4e0a api \u5730\u5740\uff0c\u5982: api.example.com\uff0c\u4e0d\u80fd\u591f\u4ee5 http \u5f00\u5934\n    "htmlHost": "www.weiyuai.cn" // \u4fee\u6539\u4e3a\u8bbf\u95ee\u9759\u6001\u7f51\u9875\u5730\u5740\uff0c\u5982: www.example.com\uff0c\u4e0d\u80fd\u591f\u4ee5 http \u5f00\u5934\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5c06 apiHost \u548c htmlHost \u66ff\u6362\u4e3a\u670d\u52a1\u5668\u5730\u5740\u5373\u53ef"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6246:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(2155);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);