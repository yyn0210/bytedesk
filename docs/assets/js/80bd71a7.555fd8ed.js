"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8061],{5940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"deploy/cicd/server","title":"Server CI/CD","description":"- Operating System: Ubuntu 20.04 LTS","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/deploy/cicd/server.md","sourceDirName":"deploy/cicd","slug":"/deploy/cicd/server","permalink":"/bytedesk/docs/deploy/cicd/server","draft":false,"unlisted":false,"editUrl":"https://github.com/bytedesk/bytedesk/docs/deploy/cicd/server.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Server","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Cluster","permalink":"/bytedesk/docs/deploy/cluster"},"next":{"title":"Admin Dashboard","permalink":"/bytedesk/docs/deploy/cicd/admin"}}');var i=s(5723),r=s(6246);const a={sidebar_label:"Server",sidebar_position:1},c="Server CI/CD",o={},d=[{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Jenkins Pipeline",id:"jenkins-pipeline",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"server-cicd",children:"Server CI/CD"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Operating System: Ubuntu 20.04 LTS"}),"\n",(0,i.jsx)(n.li,{children:"Server Requirements: Minimum 2 cores 4GB RAM, Recommended 4 cores 8GB RAM"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: Build and Deploy Server\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - uses: actions/checkout@v2\n    \n    - name: Set up JDK\n      uses: actions/setup-java@v2\n      with:\n        java-version: '17'\n        distribution: 'adopt'\n        \n    - name: Build with Maven\n      run: mvn -B package --file pom.xml\n      \n    - name: Deploy\n      uses: appleboy/scp-action@master\n      with:\n        host: ${{ secrets.HOST }}\n        username: ${{ secrets.USERNAME }}\n        key: ${{ secrets.SSH_KEY }}\n        source: \"target/*.jar\"\n        target: \"/opt/bytedesk/\"\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gitlab-ci",children:"GitLab CI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - build\n  - deploy\n\nbuild:\n  stage: build\n  image: maven:3.8-openjdk-17\n  script:\n    - mvn package\n  artifacts:\n    paths:\n      - target/*.jar\n\ndeploy:\n  stage: deploy\n  script:\n    - rsync -avz --delete target/*.jar user@server:/opt/bytedesk/\n  only:\n    - main\n"})}),"\n",(0,i.jsx)(n.h2,{id:"jenkins-pipeline",children:"Jenkins Pipeline"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"pipeline {\n    agent any\n    \n    tools {\n        jdk 'JDK 17'\n        maven 'Maven 3'\n    }\n    \n    stages {\n        stage('Build') {\n            steps {\n                sh 'mvn clean package'\n            }\n        }\n        \n        stage('Deploy') {\n            steps {\n                sh 'rsync -avz --delete target/*.jar user@server:/opt/bytedesk/'\n            }\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6246:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(2155);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);