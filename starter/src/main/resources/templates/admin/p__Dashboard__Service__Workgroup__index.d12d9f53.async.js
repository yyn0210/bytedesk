"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[828],{3418:function(q,L,e){e.d(L,{W:function(){return D},x:function(){return G}});var R=e(15009),o=e.n(R),Z=e(97857),u=e.n(Z),K=e(99289),_=e.n(K),U=e(86745);function D(p){return x.apply(this,arguments)}function x(){return x=_()(o()().mark(function p(T){return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,U.request)("/api/v1/agent/query",{method:"GET",params:u()(u()({},T),{},{client:"web"})}));case 1:case"end":return l.stop()}},p)})),x.apply(this,arguments)}function G(p){return B.apply(this,arguments)}function B(){return B=_()(o()().mark(function p(T){return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,U.request)("/api/v1/agent/create",{method:"POST",data:u()(u()({},T),{},{client:"web"})}));case 1:case"end":return l.stop()}},p)})),B.apply(this,arguments)}},24172:function(q,L,e){e.d(L,{Kq:function(){return D},tn:function(){return p}});var R=e(97857),o=e.n(R),Z=e(15009),u=e.n(Z),K=e(99289),_=e.n(K),U=e(86745);function D(f){return x.apply(this,arguments)}function x(){return x=_()(u()().mark(function f(l){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,U.request)("/api/org",{method:"POST",data:{nickname:l,client:"web"}}));case 1:case"end":return v.stop()}},f)})),x.apply(this,arguments)}function G(f){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function f(l){return _regeneratorRuntime().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",request("/api/v1/org/query",{method:"GET",params:_objectSpread(_objectSpread({},l),{},{client:"web"})}));case 1:case"end":return v.stop()}},f)})),B.apply(this,arguments)}function p(f){return T.apply(this,arguments)}function T(){return T=_()(u()().mark(function f(l){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,U.request)("/api/v1/org/uid",{method:"GET",params:{uid:l,client:"web"}}));case 1:case"end":return v.stop()}},f)})),T.apply(this,arguments)}},77154:function(q,L,e){var R=e(39825);function o(){var Z=(0,R.Z)(),u=Z.isDarkMode,K={borderRight:u?"1px solid #333":"1px solid #ccc",background:u?"#141414":"#eee",width:260},_={background:u?"#141414":"#fff"},U={borderLeft:u?"1px solid #333":"1px solid #ccc",background:u?"#141414":"#eee"},D={minHeight:120};return{leftSiderStyle:K,headerStyle:_,rightSiderStyle:U,contentStyle:D}}L.Z=o},52887:function(q,L,e){e.r(L),e.d(L,{default:function(){return Ve}});var R=e(21612),o=e(67294),Z=e(15009),u=e.n(Z),K=e(99289),_=e.n(K),U=e(5574),D=e.n(U),x=e(3418),G=e(97857),B=e.n(G),p=e(86745);function T(c){return f.apply(this,arguments)}function f(){return f=_()(u()().mark(function c(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,p.request)("/api/v1/workgroup/query",{method:"GET",params:B()(B()({},a),{},{client:"web"})}));case 1:case"end":return n.stop()}},c)})),f.apply(this,arguments)}function l(c){return b.apply(this,arguments)}function b(){return b=_()(u()().mark(function c(a){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,p.request)("/api/v1/workgroup/create",{method:"POST",data:B()(B()({},a),{},{client:"web"})}));case 1:case"end":return n.stop()}},c)})),b.apply(this,arguments)}function v(c){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function c(a){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/workgroup/update",{method:"POST",data:{wid:a.uid,nickname:a.nickname,avatar:a.avatar,description:a.description,client:"web"}}));case 1:case"end":return n.stop()}},c)})),P.apply(this,arguments)}function V(c){return re.apply(this,arguments)}function re(){return re=_asyncToGenerator(_regeneratorRuntime().mark(function c(a){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/workgroup/delete",{method:"POST",data:{wid:a,client:"web"}}));case 1:case"end":return n.stop()}},c)})),re.apply(this,arguments)}var J=e(39825),le=e(30694),pe=e(87676),me=e(19632),ge=e.n(me),fe=e(64529),ce=e(782),ve=e(71381),$=(0,fe.Ue)()((0,ce.mW)((0,ce.tJ)((0,ve.n)(function(c,a){return{workgroups:[],currentWorkgroup:{uid:"",nickname:"",avatar:"",description:"",orgUid:""},setWorkgroups:function(){var d=_()(u()().mark(function A(s){return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:a().currentWorkgroup.uid===""?c({workgroups:s,currentWorkgroup:s[0]}):c({workgroups:s});case 1:case"end":return m.stop()}},A)}));function n(A){return d.apply(this,arguments)}return n}(),createWorkgroup:function(){var d=_()(u()().mark(function A(s){var j;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,l(s);case 2:j=h.sent,console.log("create workgroup:",j),c({workgroups:[j.data].concat(ge()(a().workgroups)),currentWorkgroup:j.data});case 5:case"end":return h.stop()}},A)}));function n(A){return d.apply(this,arguments)}return n}(),setCurrentWorkgroup:function(n){c({currentWorkgroup:n})},deleteWorkgroup:function(){return c({},!0)}}}),{name:"WORKGROUP_STORE"}))),he=e(64789),N=e(8232),De=e(86250),ne=e(14726),ae=e(2487),de=e(7134),Ee=e(85576),Fe=e(96365),r=e(85893),Ce=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=(0,J.Z)(),s=A.isDarkMode,j=(0,o.useState)(!1),m=D()(j,2),h=m[0],t=m[1],M=(0,pe.u)(function(E){return E.orgCurrent}),F=(0,le.E)(function(E){return E.setAgents}),y=$(function(E){return{workgroups:E.workgroups,currentWorkgroup:E.currentWorkgroup,setWorkgroups:E.setWorkgroups,createWorkgroup:E.createWorkgroup,setCurrentWorkgroup:E.setCurrentWorkgroup}}),g=y.workgroups,i=y.currentWorkgroup,W=y.setWorkgroups,Y=y.createWorkgroup,k=y.setCurrentWorkgroup,S=function(){var E=_()(u()().mark(function C(){var I,O;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return I={pageNumber:0,pageSize:10,orgUid:M.uid},w.next=3,(0,x.W)(I);case 3:O=w.sent,console.log("get agents",O),O.code===200&&O.data.content.length>0&&F(O.data.content);case 6:case"end":return w.stop()}},C)}));return function(){return E.apply(this,arguments)}}(),te=function(){var E=_()(u()().mark(function C(){var I,O;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return I={pageNumber:0,pageSize:10,orgUid:M.uid},w.next=3,T(I);case 3:O=w.sent,console.log("getWorkgroups",O),O.code===200&&O.data.content.length>0&&W(O.data.content);case 6:case"end":return w.stop()}},C)}));return function(){return E.apply(this,arguments)}}();(0,o.useEffect)(function(){te(),S()},[]);var ie=function(){t(!0)},z=function(){var E=_()(u()().mark(function C(){var I,O;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:I=n.getFieldValue("nickname"),O={nickname:I,orgUid:M.uid},Y(O),t(!1);case 4:case"end":return w.stop()}},C)}));return function(){return E.apply(this,arguments)}}(),Ne=function(){t(!1)},Je=function(C,I){k(C)},Ye=function(C,I){console.log("list on delete",C)},He=function(){ie()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(De.Z,{gap:"small",wrap:"wrap",children:(0,r.jsx)(ne.ZP,{type:"primary",size:"small",icon:(0,r.jsx)(he.Z,{}),onClick:He,children:"\u521B\u5EFA\u6280\u80FD\u7EC4"})}),(0,r.jsx)(ae.Z,{itemLayout:"horizontal",dataSource:g,renderItem:function(C,I){return(0,r.jsx)(ae.Z.Item,{style:i.uid===C.uid?{backgroundColor:s?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},actions:i.uid===C.uid?[(0,r.jsx)("a",{onClick:function(){return Ye(C,I)},children:"\u5220\u9664"},"list-delete")]:[],onClick:function(){return Je(C,I)},children:(0,r.jsx)(ae.Z.Item.Meta,{style:{marginLeft:"10px"},avatar:(0,r.jsx)(de.C,{src:C.avatar}),title:C.nickname})})}}),(0,r.jsx)(Ee.Z,{title:"\u521B\u5EFA\u6280\u80FD\u7EC4",open:h,onOk:z,onCancel:Ne,children:(0,r.jsx)(N.Z,{form:n,name:"wgForm",style:{maxWidth:400},children:(0,r.jsx)(N.Z.Item,{label:"\u6280\u80FD\u7EC4\u6635\u79F0",name:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0!"}],children:(0,r.jsx)(Fe.Z,{})})})})]})},be=Ce,je=e(48096),oe=e(80049),H=e(34994),ee=e(62370),ye=e(77636),Ae=e(5966),ue=e(90672),We=e(83863),Te=e(27484),ke=e.n(Te),Oe=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=(0,le.E)(function(g){return g.agents}),s=$(function(g){return g.currentWorkgroup}),j=(0,o.useState)([]),m=D()(j,2),h=m[0],t=m[1];(0,o.useEffect)(function(){var g=$.subscribe(function(i){var W;n.setFieldValue("nickname",i.currentWorkgroup.nickname),n.setFieldValue("avatar",i.currentWorkgroup.avatar),n.setFieldValue("description",i.currentWorkgroup.description);var Y=[];(W=i.currentWorkgroup.agents)===null||W===void 0||W.forEach(function(k){Y.push(k.uid)}),t(Y)});return g},[s]);var M=function(i){console.log("selected ".concat(i)),t(i)},F={file_name:"test.png",username:"",type:"",kbname:"",client:"web"},y={name:"file",action:"/visitor/api/upload/avatar",showUploadList:!1,data:F,beforeUpload:function(i){console.log("file:",i," uploadData:",F);var W=ke()(new Date).format("YYYYMMDDHHmmss");return F.file_name=W+i.name,!0},onChange:function(i){if(i.file.status!=="uploading"&&console.log(i.file,i.fileList),i.file.status==="done"){var W=i.file.response.data;console.log("url: ",W),oe.yw.success("".concat(i.file.name," file uploaded successfully"))}else i.file.status==="error"&&oe.yw.error("".concat(i.file.name," file upload failed."))}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(H.A,{form:n,style:{marginLeft:"100px",width:"300px"},onFinish:function(){var g=_()(u()().mark(function i(W){return u()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:console.log("onFinish:",W);case 1:case"end":return k.stop()}},i)}));return function(i){return g.apply(this,arguments)}}(),initialValues:{nickname:s.nickname,description:s.description},children:[(0,r.jsxs)(ee.Z,{name:"avatar",label:"\u5934\u50CF",children:[(0,r.jsx)(de.C,{src:s.avatar}),(0,r.jsx)(ye.Z,{})]}),(0,r.jsx)(Ae.Z,{width:"md",name:"nickname",label:"\u6280\u80FD\u7EC4\u6635\u79F0"}),(0,r.jsx)(ee.Z,{name:"agents",label:"\u6210\u5458",children:(0,r.jsx)(We.Z,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6210\u5458",value:h,onChange:M,options:A.map(function(g){return{value:g.uid,label:g.nickname}})})}),(0,r.jsx)(ue.Z,{width:"md",name:"description",label:"\u63CF\u8FF0"})]})})},Be=Oe,se=e(84567),Pe=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=(0,p.useIntl)(),s=(0,o.useState)(!1),j=D()(s,2),m=j[0],h=j[1],t=$(function(F){return F.currentWorkgroup});(0,o.useEffect)(function(){var F=$.subscribe(function(y){});return F},[t]);var M=function(y){t.showTopTip=y.target.checked,console.log("checked = ".concat(y.target.checked,", showTopTip:").concat(t.showTopTip)),h(y.target.checked)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(H.A,{form:n,style:{marginLeft:"100px"},onFinish:function(){var F=_()(u()().mark(function y(g){return u()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:console.log("onFinish:",g);case 1:case"end":return W.stop()}},y)}));return function(y){return F.apply(this,arguments)}}(),initialValues:{welcomeTip:t==null?void 0:t.welcomeTip,topTip:t==null?void 0:t.topTip,showTopTip:t==null?void 0:t.showTopTip},children:[(0,r.jsx)(ue.Z,{width:"md",name:"welcomeTip",label:"\u6B22\u8FCE\u8BED"}),(0,r.jsx)(ee.Z,{children:(0,r.jsx)(se.Z,{onChange:M,name:"showTopTip",children:"\u663E\u793A\u7F6E\u9876\u8BED"})}),m&&(0,r.jsx)(ue.Z,{width:"md",name:"topTip",label:"\u7F6E\u9876\u8BED"})]})})},Me=Pe,we=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=$(function(t){return t.currentWorkgroup}),s=(0,o.useMemo)(function(){return"http://localhost:9006/?t=2&sid="+A.uid+"&"},[A]);(0,o.useEffect)(function(){var t=$.subscribe(function(M){console.log("currentWorkgroup code:",M.currentWorkgroup),n.setFieldValue("code","http://localhost:9006/?t=2&sid="+M.currentWorkgroup.uid+"&")});return t},[A]);var j=function(){window.open(s)},m=function(){navigator.clipboard.writeText(s),oe.yw.info("code copyied into clicpboard")},h=function(M,F){return[(0,r.jsx)(ne.ZP,{type:"primary",onClick:function(){var g;(g=M.form)===null||g===void 0||g.submit(),j()},children:"\u6253\u5F00"},"submit"),(0,r.jsx)(ne.ZP,{onClick:function(){m()},children:"\u590D\u5236"},"reset")]};return(0,r.jsx)(H.A,{form:n,style:{marginLeft:"100px"},submitter:{render:h},initialValues:{code:s},children:(0,r.jsx)(ue.Z,{width:"md",name:"code",label:"\u5BA2\u670D\u4EE3\u7801"})})},Re=we,Ue=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=(0,p.useIntl)(),s=$(function(m){return m.currentWorkgroup});(0,o.useEffect)(function(){var m=$.subscribe(function(h){});return m},[s]);var j=function(h){s.defaultRobot=h.target.checked,console.log("checked = ".concat(h.target.checked,", defaultRobot:").concat(s.defaultRobot))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(H.A,{form:n,style:{marginLeft:"100px"},initialValues:{defaultRobot:s.defaultRobot},onFinish:function(){var m=_()(u()().mark(function h(t){return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:console.log("onFinish:",t);case 1:case"end":return F.stop()}},h)}));return function(h){return m.apply(this,arguments)}}(),children:(0,r.jsx)(ee.Z,{children:(0,r.jsx)(se.Z,{onChange:j,name:"defaultRobot",children:"\u9ED8\u8BA4\u542F\u7528\u673A\u5668\u4EBA"})})})})},xe=Ue,Q=e(85615),X=e(78045),Se=function(){var a=N.Z.useForm(),d=D()(a,1),n=d[0],A=(0,p.useIntl)(),s=$(function(k){return k.currentWorkgroup}),j=(0,o.useState)(!1),m=D()(j,2),h=m[0],t=m[1],M=(0,o.useState)(Q.Jx),F=D()(M,2),y=F[0],g=F[1];(0,o.useEffect)(function(){var k=$.subscribe(function(S){});return k},[s]),(0,o.useEffect)(function(){t(s.recent),g(s.routeType)},[]);var i=function(S){console.log("checked = ".concat(S.target.checked)),t(S.target.checked)},W=function(S){console.log("radio checked",S.target.value),g(S.target.value)},Y=function(S,te){return[(0,r.jsx)(ne.ZP,{type:"primary",onClick:function(){var z;(z=S.form)===null||z===void 0||z.submit()},children:"\u4FDD\u5B58"},"submit")]};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(H.A,{form:n,style:{marginLeft:"100px"},initialValues:{},submitter:{render:Y},onFinish:function(){var k=_()(u()().mark(function S(te){return u()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:console.log("onFinish:",te);case 1:case"end":return z.stop()}},S)}));return function(S){return k.apply(this,arguments)}}(),children:[(0,r.jsx)(ee.Z,{children:(0,r.jsx)(se.Z,{onChange:i,value:h,children:"\u719F\u5BA2\u4F18\u5148"})}),(0,r.jsxs)(H.A.Item,{children:[(0,r.jsxs)(X.ZP.Group,{onChange:W,value:y,children:[(0,r.jsx)(X.ZP,{value:Q.Jx,children:"\u8F6E\u8BE2"}),(0,r.jsx)(X.ZP,{value:Q.C,children:"\u5F53\u65E5\u63A5\u5F85\u6700\u5C11\u4F18\u5148"}),(0,r.jsx)(X.ZP,{value:Q.Vd,children:"\u9971\u548C\u5EA6\u6700\u4F4E\u4F18\u5148"}),(0,r.jsx)(X.ZP,{value:Q.Q2,children:"\u8FDB\u884C\u4E2D\u4F1A\u8BDD\u6700\u5C11\u4F18\u5148"}),(0,r.jsx)(X.ZP,{value:Q.Su,disabled:!0,children:"\u5E7F\u64AD"})]}),(0,r.jsx)("p",{children:"\u6839\u636E\u5BA2\u670D\u767B\u5F55\u65F6\u95F4\u8FDB\u5165\u961F\u5217\u8F6E\u6D41\u5206\u914D\u3002\u6CE8\u610F\uFF1A\u5F53\u5BA2\u670D\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u6389\u7EBF\u91CD\u8FDE\u4E4B\u540E\uFF0C\u4F1A\u91CD\u65B0\u6392\u5230\u961F\u5217\u672B\u5C3E"}),(0,r.jsx)("p",{children:"\u6839\u636E\u5F53\u65E5(0\u70B9\u5F00\u59CB)\u5BA2\u670D\u63A5\u5F85\u603B\u6570\u8FDB\u884C\u5206\u914D\uFF0C\u4F18\u5148\u5206\u914D\u7ED9\u6570\u91CF\u6700\u5C11\u8005\u3002\u6CE8\u610F\uFF1A\u5047\u5982\u5BA2\u670D\u4E0A\u73ED\u65F6\u95F4\u4E0D\u7EDF\u4E00\uFF0C\u665A\u767B\u5F55\u8005\u767B\u5F55\u540E\u4F1A\u96C6\u4E2D\u6536\u5230\u5206\u914D\u65B0\u5BA2\uFF0C\u76F4\u5230\u8DDF\u5176\u4ED6\u5728\u7EBF\u5BA2\u670D\u63A5\u5F85\u6570\u91CF\u76F8\u7B49\u4E3A\u6B62"}),(0,r.jsx)("p",{children:"\u6839\u636E\uFF08\u5BA2\u670D\u6700\u5927\u63A5\u5F85\u6570\u91CF-\u5F53\u524D\u8FDB\u884C\u4E2D\u4F1A\u8BDD\u6570\u91CF\uFF09\u4E4B\u5DEE\u5206\u914D\uFF0C\u4F18\u5148\u5206\u914D\u7ED9\u6570\u91CF\u6700\u5927\u8005\u3002\u6CE8\u610F\uFF1A\u5047\u5982\u6BCF\u4E2A\u5BA2\u670D\u6700\u5927\u63A5\u5F85\u6570\u91CF\u76F8\u7B49\uFF0C\u5219\u6B64\u65B9\u6CD5\u8DDF\u2019\u8FDB\u884C\u4E2D\u4F1A\u8BDD\u6700\u5C11\u4F18\u5148\u2018\u6548\u679C\u4E00\u6837"}),(0,r.jsx)("p",{children:"\u6839\u636E\u5BA2\u670D\u5F53\u524D\u8FDB\u884C\u4E2D\u4F1A\u8BDD\u8FDB\u884C\u5206\u914D\uFF0C\u4F18\u5148\u5206\u914D\u7ED9\u6570\u91CF\u6700\u5C11\u8005\u3002\u6CE8\u610F\uFF1A\u5BA2\u670D\u63A5\u5F85\u6570\u91CF\u4F1A\u53D7\u5230\u5BA2\u670D\u63A5\u5F85\u901F\u5EA6\u7684\u5F71\u54CD\uFF0C\u63A5\u5F85\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5BA2\u670D\u624B\u52A8\u7ED3\u675F\u4F1A\u8BDD\u6709\u5229\u4E8E\u52A0\u901F\u5206\u914D\u65B0\u5BA2"})]})]})})},Ie=Se,Le=function(){var a=(0,p.useIntl)(),d=function(s){console.log(s)},n=[{key:"basic",label:a.formatMessage({id:"pages.robot.tab.basic",defaultMessage:"Basic"}),children:(0,r.jsx)(Be,{})},{key:"tip",label:"\u6B22\u8FCE\u8BED",children:(0,r.jsx)(Me,{})},{key:"robot",label:"\u673A\u5668\u4EBA",children:(0,r.jsx)(xe,{})},{key:"route",label:"\u8DEF\u7531\u914D\u7F6E",children:(0,r.jsx)(Ie,{})},{key:"code",label:"\u5BA2\u670D\u4EE3\u7801",children:(0,r.jsx)(Re,{})}];return(0,r.jsx)(je.Z,{defaultActiveKey:"1",items:n,onChange:d})},Ze=Le,Ke=e(77154),$e=R.Z.Sider,Ge=R.Z.Content,ze=function(){var a=(0,Ke.Z)(),d=a.leftSiderStyle,n=a.contentStyle;return(0,r.jsxs)(R.Z,{children:[(0,r.jsx)($e,{style:d,children:(0,r.jsx)(be,{})}),(0,r.jsx)(R.Z,{children:(0,r.jsx)(Ge,{children:(0,r.jsx)(Ze,{})})})]})},Ve=ze},30694:function(q,L,e){e.d(L,{E:function(){return B}});var R=e(15009),o=e.n(R),Z=e(19632),u=e.n(Z),K=e(99289),_=e.n(K),U=e(3418),D=e(64529),x=e(782),G=e(71381),B=(0,D.Ue)()((0,x.mW)((0,x.tJ)((0,G.n)(function(p,T){return{agents:[],currentAgent:{uid:"",orgUid:""},createAgent:function(){var f=_()(o()().mark(function b(v){var P,V;return o()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,(0,U.x)(v);case 2:P=J.sent,console.log("create agent:",P),P.code===200&&(V=P.data,p({agents:[V].concat(u()(T().agents)),currentAgent:V}));case 5:case"end":return J.stop()}},b)}));function l(b){return f.apply(this,arguments)}return l}(),setAgents:function(){var f=_()(o()().mark(function b(v){return o()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:T().currentAgent.uid===""?p({agents:v,currentAgent:v[0]}):p({agents:v});case 1:case"end":return V.stop()}},b)}));function l(b){return f.apply(this,arguments)}return l}(),setCurrentAgent:function(l){return p(function(b){b.currentAgent=l})},deleteAgent:function(){return p({},!0)}}}),{name:"AGENT_STORE"})))},87676:function(q,L,e){e.d(L,{u:function(){return x}});var R=e(15009),o=e.n(R),Z=e(99289),u=e.n(Z),K=e(24172),_=e(64529),U=e(782),D=e(71381),x=(0,_.Ue)()((0,U.mW)((0,U.tJ)((0,D.n)(function(G,B){return{orgCurrent:{uid:"",name:"",description:""},setOrgCurrent:function(T){G({orgCurrent:T})},createOrg:function(){var p=u()(o()().mark(function f(l){var b;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,K.Kq)(l);case 2:b=P.sent,console.log("createOrg:",b),b.code==200;case 5:case"end":return P.stop()}},f)}));function T(f){return p.apply(this,arguments)}return T}(),deleteOrgCache:function(){return G({},!0)}}}),{name:"ORGANIZTION_STORE"})))}}]);
