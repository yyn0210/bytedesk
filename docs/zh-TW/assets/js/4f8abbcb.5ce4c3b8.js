"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2027],{6983:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"develop/visitor/platform/ios","title":"iOS Swift SDK","description":"\u90e8\u5206\u529f\u80fd","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/develop/visitor/platform/ios.md","sourceDirName":"develop/visitor/platform","slug":"/develop/visitor/platform/ios","permalink":"/docs/zh-TW/docs/develop/visitor/platform/ios","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/develop/visitor/platform/ios.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"iOS","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Android","permalink":"/docs/zh-TW/docs/develop/visitor/platform/android"},"next":{"title":"Flutter","permalink":"/docs/zh-TW/docs/develop/visitor/platform/flutter"}}');var t=n(5723),r=n(6246);const l={sidebar_label:"iOS",sidebar_position:4},d="iOS Swift SDK",o={},a=[{value:"\u90e8\u5206\u529f\u80fd",id:"\u90e8\u5206\u529f\u80fd",level:2},{value:"SDK\u6e90\u7801\u53caDemo\u4e0b\u8f7d",id:"sdk\u6e90\u7801\u53cademo\u4e0b\u8f7d",level:2},{value:"\u96c6\u6210\u65b9\u5f0f",id:"\u96c6\u6210\u65b9\u5f0f",level:2},{value:"\u65b9\u6cd5 1. \u672c\u5730\u96c6\u6210",id:"\u65b9\u6cd5-1-\u672c\u5730\u96c6\u6210",level:3},{value:"\u65b9\u6cd5 2. Swift Package Manager (SPM)",id:"\u65b9\u6cd5-2-swift-package-manager-spm",level:3},{value:"3. Carthage",id:"3-carthage",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"ios-swift-sdk",children:"iOS Swift SDK"})}),"\n",(0,t.jsx)(i.h2,{id:"\u90e8\u5206\u529f\u80fd",children:"\u90e8\u5206\u529f\u80fd"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u5fae\u8bed\u5b98\u65b9\u6280\u672f\u652f\u6301"}),"\n",(0,t.jsx)(i.li,{children:"\u5168\u90e8\u57fa\u4e8eSwift\u5f00\u53d1\uff0c100%\u5168\u90e8\u5f00\u6e90\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u754c\u9762"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u4eba\u5de5\u5ba2\u670d"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u673a\u5668\u4eba"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u6587\u5b57\u3001\u56fe\u7247\u3001\u8bed\u97f3\u3001\u8868\u60c5"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u6d88\u606f\u9884\u77e5\uff1a\u5bf9\u65b9\u6b63\u5728\u8f93\u5165"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u6d88\u606f\u72b6\u6001\uff1a\u9001\u8fbe\u3001\u5df2\u8bfb"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u6d88\u606f\u64a4\u56de"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u53d1\u9001\u5546\u54c1\u4fe1\u606f"}),"\n",(0,t.jsx)(i.li,{children:"\u672a\u8bfb\u6d88\u606f\u6570\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,t.jsx)(i.li,{children:"\u5bf9\u63a5\u7b2c\u4e09\u65b9\u8d26\u53f7\u7cfb\u7edf"}),"\n",(0,t.jsx)(i.li,{children:"\u652f\u6301\u591a\u7528\u6237\u5207\u6362"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"sdk\u6e90\u7801\u53cademo\u4e0b\u8f7d",children:"SDK\u6e90\u7801\u53caDemo\u4e0b\u8f7d"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://gitee.com/270580156/bytedesk-swift",children:"Gitee"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/Bytedesk/bytedesk-swift",children:"Github"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u96c6\u6210\u65b9\u5f0f",children:"\u96c6\u6210\u65b9\u5f0f"}),"\n",(0,t.jsx)(i.p,{children:"\u5efa\u8bae: Xcode Version 14.3\uff0c\u6700\u4f4e\u517c\u5bb9: iOS 13"}),"\n",(0,t.jsx)(i.h3,{id:"\u65b9\u6cd5-1-\u672c\u5730\u96c6\u6210",children:"\u65b9\u6cd5 1. \u672c\u5730\u96c6\u6210"}),"\n",(0,t.jsx)(i.p,{children:"\u6b64\u65b9\u6cd5\u9002\u7528\u4e8e\u6709\u81ea\u5b9a\u4e49\u754c\u9762\u9700\u6c42\u7684\u5f00\u53d1\u8005"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u4e0b\u8f7d\u6e90\u7801\uff0c\u76f4\u63a5\u62d6\u5230\u81ea\u5df1\u9879\u76ee\u4e2d"}),"\n",(0,t.jsx)(i.li,{children:"\u9009\u62e9\u9879\u76ee\uff0c\u9009\u4e2d\u9879\u76eeTARGET\uff0c\u9009\u4e2d General\uff0c\u5728 framework \u4e2d\u6dfb\u52a0 bytedesk_swift.framework"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\u65b9\u6cd5-2-swift-package-manager-spm",children:"\u65b9\u6cd5 2. Swift Package Manager (SPM)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'dependencies: [\n    .package(url: "https://gitee.com/270580156/bytedesk-swift", .upToNextMajor(from: "3.0.0"))\n]\n\u6216\ndependencies: [\n    .package(url: "https://github.com/Bytedesk/bytedesk-swift", .upToNextMajor(from: "3.0.0"))\n]\n'})}),"\n",(0,t.jsx)(i.h3,{id:"3-carthage",children:"3. Carthage"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"github 'bytedesk-swift/bytedesk-swift' ~> 3.0.0\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6246:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var s=n(2155);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);