"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5913],{6109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var s=t(5763),o=t(5723),i=t(6246);const l={slug:"scan-to-login",title:"QR Code Login Implementation Process",authors:"jackning",tags:["developer","bytedesk"]},r=void 0,c={authorsImageUrls:[void 0]},d=[];function a(e){const n={li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Desktop client generates a unique device uid: deviceUid"}),"\n",(0,o.jsx)(n.li,{children:"Sends this deviceUid to the server, server returns a random code: randomCode"}),"\n",(0,o.jsx)(n.li,{children:"Desktop client generates QR code using randomCode and deviceUid"}),"\n",(0,o.jsx)(n.li,{children:"Mobile client scans this QR code, obtains deviceUid, sends deviceUid to server, server updates status to SCANED"}),"\n",(0,o.jsx)(n.li,{children:"Mobile client clicks confirm login, sends mobile number and deviceUid to server, server saves mobile number and updates status to CONFIRMED"}),"\n",(0,o.jsx)(n.li,{children:"Desktop client polls to get mobile number and CONFIRMED status, uses mobile number and randomCode to call login API"}),"\n",(0,o.jsx)(n.li,{children:"If desktop client gets EXPIRED status, it needs to fetch a new randomCode and regenerate QR code"}),"\n",(0,o.jsx)(n.li,{children:"After successful login, returns accessToken, desktop client saves this accessToken locally and redirects to homepage"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"QR Code Login Implementation Process"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},6246:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(2155);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}},5763:e=>{e.exports=JSON.parse('{"permalink":"/bytedesk/blog/scan-to-login","editUrl":"https://github.com/bytedesk/bytedesk/blog/2024-10-08-scan-to-login.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2024-10-08-scan-to-login.md","title":"QR Code Login Implementation Process","description":"- Desktop client generates a unique device uid: deviceUid","date":"2024-10-08T00:00:00.000Z","tags":[{"inline":false,"label":"Developer","permalink":"/bytedesk/blog/tags/developer","description":"Developer tag description"},{"inline":false,"label":"Bytedesk","permalink":"/bytedesk/blog/tags/bytedesk","description":"Bytedesk tag description"}],"readingTime":0.67,"hasTruncateMarker":true,"authors":[{"name":"Jack Ning","title":"Maintainer of Bytedesk","url":"https://github.com/pengjinning","imageURL":"https://www.kefux.com/assets/img/qrcode/qiye.png","key":"jackning","page":null}],"frontMatter":{"slug":"scan-to-login","title":"QR Code Login Implementation Process","authors":"jackning","tags":["developer","bytedesk"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/bytedesk/blog/welcome"}}')}}]);