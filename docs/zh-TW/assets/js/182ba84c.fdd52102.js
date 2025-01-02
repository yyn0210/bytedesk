"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8580],{749:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"deploy/depend/mysql","title":"Mysql 8.0","description":"- \u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS","source":"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/deploy/depend/mysql.md","sourceDirName":"deploy/depend","slug":"/deploy/depend/mysql","permalink":"/bytedesk/zh-TW/docs/deploy/depend/mysql","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/depend/mysql.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Mysql","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u6587\u6863\u90e8\u7f72","permalink":"/bytedesk/zh-TW/docs/deploy/cicd/devdoc"},"next":{"title":"Postgresql","permalink":"/bytedesk/zh-TW/docs/deploy/depend/postgresql"}}');var l=s(5723),d=s(6246);const o={sidebar_label:"Mysql",sidebar_position:1},r="Mysql 8.0",i={},a=[{value:"\u5b89\u88c5\u914d\u7f6e",id:"\u5b89\u88c5\u914d\u7f6e",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"mysql-80",children:"Mysql 8.0"})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\uff1aUbuntu 20.04 LTS"}),"\n",(0,l.jsx)(n.li,{children:"\u670d\u52a1\u5668\u6700\u4f4e\u914d\u7f6e2\u68384G\u5185\u5b58\uff0c\u63a8\u8350\u914d\u7f6e4\u68388G\u5185\u5b58"}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5\u914d\u7f6e",children:"\u5b89\u88c5\u914d\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://dev.mysql.com/downloads/repo/apt/",children:"\u4e0b\u8f7dmysql-apt-config_0.8.29-1_all.deb"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"- sudo dpkg -i mysql-apt-config_0.8.29-1_all.deb\n- \u5f39\u51fa\u914d\u7f6e\u754c\u9762\uff0c\u9009\u62e9mysql-8.0, \u9009\u62e9ok\n- sudo apt-get update\n- sudo apt-get install mysql-server\n# \u6ce8\uff1a\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u9700\u8981\u8bbe\u7f6e\u5bc6\u7801\uff0c\u9009\u62e9\u6700\u65b0\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f\n\n# \u4e0b\u8f7dSequel Ace\u5ba2\u6237\u7aef\u8fdc\u7a0b\u8fde\u63a5MySQL\n# \u5f00\u542froot\u8fdc\u7a0b\u8bbf\u95ee\uff0c\u767b\u5f55\u670d\u52a1\u5668\n- mysql -u root -p # \u6309\u63d0\u793a\u8f93\u5165\u5bc6\u7801\n- mysql> use mysql; # \u8fdb\u5165mysql\u5e93\n- mysql> update user set host='%' where user ='root'; # \u66f4\u65b0\u57df\u5c5e\u6027\uff0c'%'\u8868\u793a\u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\n- mysql> FLUSH PRIVILEGES;\n- mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '\u5bc6\u7801'; # \u4fee\u6539\u5bc6\u7801\n- mysql> FLUSH PRIVILEGES;\n- mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; # \u6267\u884c\u6388\u6743\u8bed\u53e5\u3002\u6267\u884c\u5b8c\u6b64\u53e5\uff0c\u5916\u90e8\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7\u8d26\u6237\u5bc6\u7801\u8bbf\u95ee\u4e86\n- mysql> FLUSH PRIVILEGES;\n- mysql> exit;\n# \u5176\u4ed6\uff1a\n# FLUSH PRIVILEGES; \u547d\u4ee4\u672c\u8d28\u4e0a\u7684\u4f5c\u7528\u662f\uff1a\n# \u5c06\u5f53\u524duser\u548cprivilige\u8868\u4e2d\u7684\u7528\u6237\u4fe1\u606f/\u6743\u9650\u8bbe\u7f6e\u4ecemysql\u5e93(MySQL\u6570\u636e\u5e93\u7684\u5185\u7f6e\u5e93)\u4e2d\u63d0\u53d6\u5230\u5185\u5b58\u91cc\u3002\n# MySQL\u7528\u6237\u6570\u636e\u548c\u6743\u9650\u6709\u4fee\u6539\u540e\uff0c\u5e0c\u671b\u5728\"\u4e0d\u91cd\u542fMySQL\u670d\u52a1\"\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u751f\u6548\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\u3002\n# \n- sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf # \u5c06 bind-address = 127.0.0.1 \u6ce8\u91ca \u7136\u540e\u4fdd\u5b58\u9000\u51fa\n# - service mysql restart\n# \u5982\u679c\u8fdc\u7a0b\u8fde\u63a5\u62a5\u9519\uff1aAuthentication plugin 'caching_sha2_password' cannot be loaded\uff0c\u5219\u4fee\u6539\u5982\u4e0b\n# mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';\n- \u5230\u963f\u91cc\u4e91 \u6216 \u817e\u8baf\u4e91 \u5f00\u542f\u9632\u706b\u5899\u7aef\u53e33306\uff0c\u5141\u8bb8\u5916\u754c\u53ef\u8bbf\u95ee\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u6216\u8005 \u4f7f\u7528SequalAce\u5ba2\u6237\u7aef\u521b\u5efa\u6570\u636e\u5e93\n# \u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\nmysql>CREATE DATABASE bytedesk_im CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n# \u4f7f\u7528\u6570\u636e\u5e93\nmysql>use bytedesk_im;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},6246:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(2155);const l={},d=t.createContext(l);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);