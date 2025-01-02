"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9589],{3272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"deploy/depend/letsencrypt","title":"Letsencrypt","description":"\u8fd0\u884c","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/deploy/depend/letsencrypt.md","sourceDirName":"deploy/depend","slug":"/deploy/depend/letsencrypt","permalink":"/bytedesk/zh-TW/docs/deploy/depend/letsencrypt","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/depend/letsencrypt.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Letsencrypt","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Nginx","permalink":"/bytedesk/zh-TW/docs/deploy/depend/nginx"},"next":{"title":"Docker","permalink":"/bytedesk/zh-TW/docs/deploy/depend/docker"}}');var s=t(5723),r=t(6246);const i={sidebar_label:"Letsencrypt",sidebar_position:5},a="Letsencrypt",c={},l=[{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"letsencrypt",children:"Letsencrypt"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# \u66f4\u65b0\u6e90\nsudo apt update\n# \u5b89\u88c5snapd\nsudo apt install snapd\n# \u67e5\u770bsnapd\u7248\u672c\nsnap version\n# \u66f4\u65b0snap\u5230\u6700\u65b0\u7248\nsudo snap install core; sudo snap refresh core\n# \u5220\u9664\u4e4b\u524d\u5b89\u88c5\u7684certbot\uff0c\u5982\u679c\u4e4b\u524d\u6ca1\u6709\u5b89\u88c5\u8fc7certbot\uff0c\u5219\u5ffd\u7565\n# sudo apt-get remove certbot \u6216 sudo dnf remove certbot, \u6216 sudo yum remove certbot\n# \u91cd\u65b0\u5b89\u88c5certbot\nsudo snap install --classic certbot\n# \u68c0\u67e5certbot\u662f\u5426\u6b63\u5e38\u8fd0\u884c\nsudo ln -s /snap/bin/certbot /usr/bin/certbot\n# \u5b89\u88c5\u8bc1\u4e66\u5e76\u66f4\u65b0nginx\n# sudo certbot --nginx\n# \u4ec5\u7528\u4e8e\u5b89\u88c5\u8bc1\u4e66\uff0c\u4e0d\u66f4\u65b0nginx\n# sudo certbot certonly --nginx\n# \u751f\u6210\u8bc1\u4e66\uff0c\u652f\u6301\u901a\u914d\u7b26\nsudo certbot certonly --manual --preferred-challenges=dns-01\n# \u4fee\u6b63\uff1a\u7eed\u7ea6\u7684\u65f6\u5019\u4f7f\u7528\u8fd9\u4e2a\u624d\u6210\u529f\uff1asudo certbot --manual --preferred-challenges dns certonly\n# \u81ea\u52a8\u66f4\u65b0\u8bc1\u4e66\nsudo certbot renew --dry-run\n# The command to renew certbot is installed in one of the following locations:\n# /etc/crontab/\n# /etc/cron.*/*\n# systemctl list-timers\n# \u4fee\u6539nginx\u914d\u7f6e\u6587\u4ef6 site-available \n# \u91cd\u542f\nservice nginx restart\n# \u6253\u5f00\u6d4f\u89c8\u5668\u786e\u8ba4\u662f\u5426\u6b63\u5e38\u8fd0\u884c\n# \u6682\u65f6\u4e0d\u652f\u63013\u7ea7\u57df\u540d *.*.weiyuai.cn\n# The server will not issue certificates for the identifier :: Error creating new order :: Cannot issue for "*.*.weiyuai.cn": Domain name has more than one wildcard\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo certbot certonly --manual --preferred-challenges=dns-01\n\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlease enter the domain name(s) you would like on your certificate (comma and/or\n\x3c!-- \u6ce8\u610f\uff1a\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u57df\u540d\u3002\u53ef\u6dfb\u52a0\u591a\u4e2a\u57df\u540d\uff0c\u652f\u63012\u7ea7\u30013\u7ea7\u901a\u914d\u7b26\u57df\u540d --\x3e\nspace separated) (Enter 'c' to cancel): weiyuai.cn,*.weiyuai.cn\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\x3c!-- \u6dfb\u52a0\u57df\u540d\u89e3\u6790TXT\u8bb0\u5f55 --\x3e\nPlease deploy a DNS TXT record under the name:\n\n_acme-challenge.weiyuai.cn.\n\nwith the following value:\n\nKRxVNaEepknOJaIZt4e6cR0aTv_AydVsULksMiI7ySA\n\nBefore continuing, verify the TXT record has been deployed. Depending on the DNS\nprovider, this may take some time, from a few seconds to multiple minutes. You can\ncheck if it has finished deploying with aid of online tools, such as the Google\nAdmin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.weiyuai.cn.\nLook for one or more bolded line(s) below the line ';ANSWER'. It should show the\nvalue(s) you've just added.\n\nPress Enter to Continue\n\nSuccessfully received certificate.\nCertificate is saved at: /etc/letsencrypt/live/weiyuai.cn/fullchain.pem\nKey is saved at:         /etc/letsencrypt/live/weiyuai.cn/privkey.pem\nThis certificate expires on 2022-06-09.\nThese files will be updated when the certificate renews.\n\nNEXT STEPS:\n\n- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.\nWe were unable to subscribe you the EFF mailing list because your e-mail address appears to be invalid. You can try again later by visiting <https://act.eff.org>.\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nIf you like Certbot, please consider supporting our work by:\n\n- Donating to ISRG / Let's Encrypt:   <https://letsencrypt.org/donate>\n- Donating to EFF:                    <https://eff.org/donate-le>\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://letsencrypt.org",children:"letsencrypt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sspai.com/post/66008",children:"\u624b\u52a8\u7533\u8bf7 Let's Encrypt \u901a\u914d\u7b26\u8bc1\u4e66"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal",children:"\u53c2\u8003\u7f51\u7ad9"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6246:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(2155);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);