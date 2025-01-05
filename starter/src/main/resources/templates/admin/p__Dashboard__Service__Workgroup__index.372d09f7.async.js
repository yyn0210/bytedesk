"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9828],{23277:function(e,t,n){n.r(t),n.d(t,{default:function(){return De}});var r=n(64476),o=n(44194),s=n(90819),i=n.n(s),u=n(89933),a=n.n(u),l=n(45332),c=n.n(l),d=n(89756),f=n(81153),g=n(43314),p=n(74145),m=n(85702),v=n(40431),k=n(61017),h=n(50484),b=n(70458),y=n(82045),w=n(83730),x=n(80093),S=n(12265),j=n(90136),F=n(21276),Z=n(1780),M=n(5728),q=n(43688),R=n(8091),C=n(31549),W=function(e){var t=e.open,n=e.onClose,r=e.onSubmit,s=M.A.useForm(),i=c()(s,1)[0],u=(0,Z.Z)().translateString,a=(0,v.u)((function(e){return e.currentOrg})),l=(0,m.E)((function(e){return e.agentResult})),d=(0,o.useState)([]),f=c()(d,2),g=f[0],p=f[1];return(0,C.jsx)("div",{children:(0,C.jsx)(w.Z,{title:"创建技能组",open:t,forceRender:!0,onOk:function(){console.log("handleOk"),i.validateFields().then((function(e){console.log("form values:",e);var t={nickname:i.getFieldValue("nickname"),agentUids:i.getFieldValue("agents"),orgUid:a.uid};console.log("workgroup:",t),r(t)})).catch((function(e){console.log("Form errors:",e)}))},onCancel:function(){console.log("handleCancel"),n()},children:(0,C.jsxs)(M.A,{form:i,name:"wgForm",submitter:{render:function(e,t){return(0,C.jsx)(C.Fragment,{})}},children:[(0,C.jsx)(q.Z,{label:"技能组昵称",name:"nickname",rules:[{required:!0,message:"请输入昵称!"}]}),(0,C.jsx)(R.Z,{name:"agents",label:"成员",options:l.data.content.map((function(e){return{value:e.uid,label:u(e.nickname)}})),fieldProps:{mode:"multiple",allowClear:!0,placeholder:"请选择成员",value:g,onChange:function(e){console.log("selected ".concat(e)),p(e)}}})]})})})},P=function(){var e=(0,y.useIntl)(),t=(0,o.useRef)(!1),n=(0,Z.Z)().translateStringTranct,r=(0,p.Z)().isDarkMode,s=(0,o.useState)(!1),u=c()(s,2),l=u[0],M=u[1],q=(0,v.u)((function(e){return e.currentOrg})),R=(0,m.E)((function(e){return e.setAgentResult})),P=(0,k.$)((function(e){return{workgroupResult:e.workgroupResult,currentWorkgroup:e.currentWorkgroup,setWorkgroupResult:e.setWorkgroupResult,insertWorkgroup:e.insertWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup,deleteCurrentWorkgroup:e.deleteCurrentWorkgroup}})),U=P.workgroupResult,T=P.currentWorkgroup,A=P.setWorkgroupResult,V=P.insertWorkgroup,E=P.setCurrentWorkgroup,D=P.deleteCurrentWorkgroup,O=w.Z.useModal(),I=c()(O,2),L=I[0],G=I[1],z=function(t){L.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,C.jsx)(h.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(t.nickname,"】？"),onOk:function(){B(t)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})})},B=function(){var t=a()(i()().mark((function t(n){var r;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete workgroup",n),d.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),t.next=4,(0,g.zl)(n);case 4:r=t.sent,console.log("delete workgroup response",r),200===r.code?(d.yw.destroy(),d.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),D(n.uid)):(d.yw.destroy(),d.yw.error(r.message));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var e=a()(i()().mark((function e(){var t,n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageNumber:0,pageSize:50,orgUid:q.uid},e.next=3,(0,f._t)(t);case 3:n=e.sent,console.log("queryAgentsByOrg: ",n),200===n.code?R(n):d.yw.error(n.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=a()(i()().mark((function e(){var n,r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=3;break}return console.log("isLoading: 1",t.current),e.abrupt("return");case 3:return t.current=!0,d.yw.loading("loading"),n={pageNumber:0,pageSize:50,orgUid:q.uid},e.next=8,(0,g.u7)(n);case 8:r=e.sent,console.log("getWorkgroups",r),200===r.code?(d.yw.destroy(),A(r)):(d.yw.destroy(),d.yw.error(r.message)),t.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){H(),N()}),[]);var $=function(){var t=a()(i()().mark((function t(n){var r;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleSave",n),d.yw.loading(e.formatMessage({id:"creating",defaultMessage:"Creating"})),t.next=4,(0,g.p0)(n);case 4:r=t.sent,console.log("create workgroup:",r),200===r.code?(d.yw.destroy(),d.yw.success(e.formatMessage({id:"create.success",defaultMessage:"create success"})),M(!1),V(r.data)):(d.yw.destroy(),M(!1),d.yw.error(r.message));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(x.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,C.jsx)(S.ZP,{size:"small",type:"primary",icon:(0,C.jsx)(b.Z,{}),onClick:function(){M(!0)},children:e.formatMessage({id:"pages.robot.new",defaultMessage:"New"})}),(0,C.jsx)(S.ZP,{size:"small",onClick:H,children:e.formatMessage({id:"refresh",defaultMessage:"Refresh"})}),(0,C.jsx)(S.ZP,{onClick:function(){return z(T)},size:"small",danger:!0,disabled:T&&""===T.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,C.jsx)(j.Z,{itemLayout:"horizontal",dataSource:U.data.content,renderItem:function(e,t){return(0,C.jsx)(j.Z.Item,{style:T.uid===e.uid?{backgroundColor:r?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){E(e)},children:(0,C.jsx)(j.Z.Item.Meta,{style:{marginLeft:"10px"},avatar:(0,C.jsx)(F.C,{src:e.avatar}),title:(0,C.jsx)(C.Fragment,{children:n(e.nickname)}),description:n(e.description)})},e.uid)}}),(0,C.jsx)(W,{open:l,onClose:function(){M(!1)},onSubmit:$}),G]})},U=n(50571),T=n(73193),A=n.n(T),V=n(11607),E=n(69957),D=n(92349),O=function(){var e=M.A.useForm(),t=c()(e,1)[0],n=(0,y.useIntl)(),r=(0,Z.Z)().translateString,s=(0,m.E)((function(e){return e.agentResult})),u=(0,k.$)((function(e){return{currentWorkgroup:e.currentWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup}})),l=u.currentWorkgroup,f=u.setCurrentWorkgroup,p=(0,o.useState)([]),v=c()(p,2),h=v[0],b=v[1],w=(0,o.useState)(""),x=c()(w,2),j=x[0],W=x[1];(0,o.useEffect)((function(){if(l){var e;t.setFieldValue("nickname",r(null==l?void 0:l.nickname)),t.setFieldValue("description",r(null==l?void 0:l.description));var n=[];null===(e=l.agents)||void 0===e||e.forEach((function(e){n.push(e.uid)})),b(n)}}),[l]);var P=function(){var e=a()(i()().mark((function e(t){var r,o,s,u,a,c,p,m,v;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish",t),d.yw.loading("修改中..."),m=A()(A()(A()({},l),t),{},{avatar:j,agentUids:h,serviceSettings:A()(A()({},l.serviceSettings),{},{quickFaqUids:null===(r=l.serviceSettings)||void 0===r||null===(r=r.quickFaqs)||void 0===r?void 0:r.map((function(e){return e.uid})),faqUids:null==l||null===(o=l.serviceSettings)||void 0===o||null===(o=o.faqs)||void 0===o?void 0:o.map((function(e){return e.uid})),guessFaqUids:null==l||null===(s=l.serviceSettings)||void 0===s||null===(s=s.guessFaqs)||void 0===s?void 0:s.map((function(e){return e.uid})),hotFaqUids:null===(u=l.serviceSettings)||void 0===u||null===(u=u.hotFaqs)||void 0===u?void 0:u.map((function(e){return e.uid})),shortcutFaqUids:null==l||null===(a=l.serviceSettings)||void 0===a||null===(a=a.shortcutFaqs)||void 0===a?void 0:a.map((function(e){return e.uid}))}),robotSettings:A()(A()({},l.robotSettings),{},{robotUid:null===(c=l.robotSettings)||void 0===c||null===(c=c.robot)||void 0===c?void 0:c.uid}),leaveMsgSettings:A()(A()({},l.leaveMsgSettings),{},{worktimeUids:null===(p=l.leaveMsgSettings)||void 0===p||null===(p=p.worktimes)||void 0===p?void 0:p.map((function(e){return e.uid}))})}),console.log("workgroupObject:",m),e.next=6,(0,g.W5)(m);case 6:v=e.sent,console.log("updateWorkGroup response:",v),200===v.code?(d.yw.destroy(),d.yw.success(n.formatMessage({id:"update.success"})),f(v.data)):(d.yw.destroy(),d.yw.error(v.message));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){W(null==l?void 0:l.avatar)}),[l]),(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(M.A,{form:t,style:{marginLeft:"100px",width:"300px"},onFinish:P,children:[(0,C.jsx)(M.A.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},label:n.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,C.jsxs)(D.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),W(e)},onError:function(e){console.log("handleUploadError:",e),d.yw.error(e)},children:[(0,C.jsx)(F.C,{src:j}),(0,C.jsx)(S.ZP,{icon:(0,C.jsx)(E.Z,{}),children:n.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,C.jsx)(q.Z,{width:"md",name:"nickname",label:"昵称",rules:[{required:!0,message:"请输入技能组昵称"}]}),(0,C.jsx)(R.Z,{name:"agents",label:"成员",width:"md",options:s.data.content.map((function(e){return{value:e.uid,label:r(e.nickname)}})),fieldProps:{mode:"multiple",allowClear:!0,placeholder:"请选择成员",value:h,onChange:function(e){console.log("selected ".concat(e)),b(e)}},rules:[{required:!0,message:"请选择成员"}]}),(0,C.jsx)(V.Z,{width:"md",name:"description",label:"描述",rules:[{required:!0,message:"请输入描述"}]})]})})},I=n(77667),L=n(2724),G=n(17082),z=n(51190),B=n(19753),N=n(33959),H=n(79379),$=n(39647),Q=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],J=o.forwardRef((function(e,t){var n=e.fieldProps,r=e.options,o=e.radioType,s=e.layout,i=e.proFieldProps,u=e.valueEnum,a=(0,z.Z)(e,Q);return(0,C.jsx)($.Z,(0,G.Z)((0,G.Z)({valueType:"button"===o?"radioButton":"radio",ref:t,valueEnum:(0,B.h)(u,void 0)},a),{},{fieldProps:(0,G.Z)({options:r,layout:s},n),proFieldProps:i,filedConfig:{customLightMode:!0}}))})),K=o.forwardRef((function(e,t){var n=e.fieldProps,r=e.children;return(0,C.jsx)(N.ZP,(0,G.Z)((0,G.Z)({},n),{},{ref:t,children:r}))})),_=(0,H.G)(K,{valuePropName:"checked",ignoreWidth:!0});_.Group=J,_.Button=N.ZP.Button,_.displayName="ProFormComponent";var X=_,Y=n(47807),ee=function(){var e=Y.Z.useForm(),t=c()(e,1)[0],n=(0,y.useIntl)(),r=(0,k.$)((function(e){return{currentWorkgroup:e.currentWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup}})),s=r.currentWorkgroup,u=r.setCurrentWorkgroup,l=(0,o.useState)(!1),f=c()(l,2),p=(f[0],f[1]),m=(0,o.useState)(I.Jxp),v=c()(m,2),h=v[0],b=v[1];(0,o.useEffect)((function(){return k.$.subscribe((function(e){t.setFieldValue("recent",e.currentWorkgroup.recent),t.setFieldValue("routeType",e.currentWorkgroup.routeType)}))}),[s]),(0,o.useEffect)((function(){p(s.recent),b(s.routeType)}),[]);var w=function(){var e=a()(i()().mark((function e(t){var r,o,a,l,c,f;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish:",t),d.yw.loading("正在修改..."),c=A()(A()(A()({},s),{},{agentUids:s.agents.map((function(e){return e.uid}))},t),{},{serviceSettings:A()(A()({},s.serviceSettings),{},{robotUid:null===(r=s.serviceSettings)||void 0===r||null===(r=r.robot)||void 0===r?void 0:r.uid,quickFaqUids:null===(o=s.serviceSettings)||void 0===o||null===(o=o.quickFaqs)||void 0===o?void 0:o.map((function(e){return e.uid})),faqUids:null===(a=s.serviceSettings)||void 0===a||null===(a=a.faqs)||void 0===a?void 0:a.map((function(e){return e.uid})),worktimeUids:null===(l=s.serviceSettings)||void 0===l||null===(l=l.worktimes)||void 0===l?void 0:l.map((function(e){return e.uid}))})}),console.log("workgroupObject:",c),e.next=6,(0,g.W5)(c);case 6:f=e.sent,console.log("updateWorkGroup response:",f),200===f.code?(d.yw.destroy(),d.yw.success(n.formatMessage({id:"update.success"})),u(f.data)):(d.yw.destroy(),d.yw.error(f.message));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(M.A,{form:t,style:{marginLeft:"100px"},initialValues:{recent:null==s?void 0:s.recent,routeType:null==s?void 0:s.routeType},submitter:{render:function(e,t){return[(0,C.jsx)(S.ZP,{type:"primary",onClick:function(){var t;null===(t=e.form)||void 0===t||t.submit()},children:"保存"},"submit")]}},onFinish:w,children:[(0,C.jsx)(L.Z,{name:"recent",label:"熟客优先",fieldProps:{onChange:function(e){console.log("checked = ".concat(e.target.checked)),p(e.target.checked)}}}),(0,C.jsx)(X.Group,{name:"routeType",label:"路由类型",options:[{label:"轮询",value:I.Jxp},{label:"当日接待最少优先",value:I.Cap},{label:"饱和度最低优先",value:I.Vdp},{label:"进行中会话最少优先",value:I.Q2z}],fieldProps:{value:h,onChange:function(e){console.log("radio checked",e.target.value),b(e.target.value)}}}),(0,C.jsxs)(M.A.Item,{children:[h===I.Jxp&&(0,C.jsx)("p",{children:"根据客服上线时间进入队列轮流分配。注意：当客服网络不稳定掉线重连之后，会重新排到队列末尾"}),h===I.Cap&&(0,C.jsx)("p",{children:"根据当日(0点开始)客服接待总数进行分配，优先分配给数量最少者。注意：假如客服上班时间不统一，晚登录者登录后会集中收到分配新客，直到跟其他在线客服接待数量相等为止"}),h===I.Vdp&&(0,C.jsx)("p",{children:"根据（客服最大接待数量-当前进行中会话数量）之差分配，优先分配给数量最大者。注意：假如每个客服最大接待数量相等，则此方法跟’进行中会话最少优先‘效果一样"}),h===I.Q2z&&(0,C.jsx)("p",{children:"根据客服当前进行中会话进行分配，优先分配给数量最少者。注意：客服接待数量会受到客服接待速度的影响，接待完毕之后，客服手动结束会话有利于加速分配新客"})]})]})})},te=n(89875),ne=n(18874),re=n(66772),oe=n(90588),se=n(10187),ie=n(9750),ue=(n(13253),n(28243),function(){var e=(0,y.useIntl)(),t=(0,o.useMemo)((function(){return!1}),[]),n=(0,o.useMemo)((function(){return[{key:"faq",label:(0,C.jsx)(y.FormattedMessage,{id:"menu.knowledge.faq",defaultMessage:"FAQ"}),children:(0,C.jsx)(te.Z,{type:I.aZD}),disabled:t},{key:"quickFaqs",label:(0,C.jsx)(y.FormattedMessage,{id:"menu.knowledge.quickbutton",defaultMessage:"QuickButton"}),children:(0,C.jsx)(oe.Z,{type:I.aZD}),disabled:t},{key:"faqGuess",label:(0,C.jsx)(y.FormattedMessage,{id:"menu.knowledge.faqGuess",defaultMessage:"FaqGuess"}),children:(0,C.jsx)(se.Z,{type:I.aZD}),disabled:t},{key:"faqHot",label:(0,C.jsx)(y.FormattedMessage,{id:"menu.knowledge.faqHot",defaultMessage:"FaqHot"}),children:(0,C.jsx)(ne.Z,{type:I.aZD}),disabled:t},{key:"faqShortcut",label:(0,C.jsx)(y.FormattedMessage,{id:"menu.knowledge.faqShortcut",defaultMessage:"FaqShortcut"}),children:(0,C.jsx)(re.Z,{type:I.aZD}),disabled:t},{key:"rate",label:(0,C.jsx)(y.FormattedMessage,{id:"rate",defaultMessage:"Rate"}),children:(0,C.jsx)(ie.Z,{type:I.aZD}),disabled:t}]}),[e,t]);return(0,C.jsx)(U.Z,{tabPosition:"left",items:n})}),ae=n(82639),le=(n(65352),n(89242),n(19743),n(76711)),ce=n.n(le),de=n(60503),fe=n(42534),ge=n(84686),pe=["fieldProps","proFieldProps"],me=["fieldProps","proFieldProps"],ve="time",ke=o.forwardRef((function(e,t){var n=e.fieldProps,r=e.proFieldProps,s=(0,z.Z)(e,pe),i=(0,o.useContext)(ge.Z);return(0,C.jsx)($.Z,(0,G.Z)({ref:t,fieldProps:(0,G.Z)({getPopupContainer:i.getPopupContainer},n),valueType:"timeRange",proFieldProps:r,filedConfig:{valueType:"timeRange",customLightMode:!0,lightFilterLabelFormatter:function(e){return(0,fe.c)(e,"HH:mm:ss")}}},s))})),he=function(e){var t=e.fieldProps,n=e.proFieldProps,r=(0,z.Z)(e,me),s=(0,o.useContext)(ge.Z);return(0,C.jsx)($.Z,(0,G.Z)({fieldProps:(0,G.Z)({getPopupContainer:s.getPopupContainer},t),valueType:ve,proFieldProps:n,filedConfig:{customLightMode:!0,valueType:ve}},r))};he.RangePicker=ke;var be=he,ye=n(28977),we=n.n(ye);function xe(e){return Se.apply(this,arguments)}function Se(){return(Se=a()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,y.request)("/api/v1/worktime/create",{method:"POST",data:A()(A()({},t),{},{client:I.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=a()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,y.request)("/api/v1/worktime/update",{method:"POST",data:A()(A()({},t),{},{client:I.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e){return Me.apply(this,arguments)}function Me(){return(Me=a()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,y.request)("/api/v1/worktime/delete",{method:"POST",data:A()(A()({},t),{},{client:I.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var qe=n(97214),Re=n.n(qe),Ce=n(63833);we().extend(Re());var We="HH:mm:ss",Pe=function(e){var t=e.type,n=M.A.useForm(),r=c()(n,1)[0],s=(0,y.useIntl)(),u=(0,o.useRef)(!1),l=(0,o.useRef)(),p=(0,m.E)((function(e){return{currentAgent:e.currentAgent,setCurrentAgent:e.setCurrentAgent}})),h=p.currentAgent,b=p.setCurrentAgent,w=(0,k.$)((function(e){return{currentWorkgroup:e.currentWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup}})),x=w.currentWorkgroup,S=w.setCurrentWorkgroup,j=(0,o.useState)([]),F=c()(j,2),q=F[0],W=F[1],P=(0,v.u)((function(e){return e.currentOrg})),U=(0,Z.Z)().translateString,T=(0,o.useState)([]),V=c()(T,2),E=V[0],D=V[1];(0,o.useEffect)((function(){var e,n,o,s,i;if(t===I.Njn)D(null==h||null===(e=h.leaveMsgSettings)||void 0===e?void 0:e.worktimes),r.setFieldValue("defaultRobot",null==h||null===(n=h.robotSettings)||void 0===n?void 0:n.defaultRobot),r.setFieldValue("offlineRobot",null==h||null===(o=h.robotSettings)||void 0===o?void 0:o.offlineRobot),r.setFieldValue("nonWorktimeRobot",null==h||null===(s=h.robotSettings)||void 0===s?void 0:s.nonWorktimeRobot),r.setFieldValue("robotUid",null==h||null===(i=h.robotSettings)||void 0===i||null===(i=i.robot)||void 0===i?void 0:i.uid);else if(t===I.aZD){var u,a,l,c,d;D(null==x||null===(u=x.leaveMsgSettings)||void 0===u?void 0:u.worktimes),r.setFieldValue("defaultRobot",null==x||null===(a=x.robotSettings)||void 0===a?void 0:a.defaultRobot),r.setFieldValue("offlineRobot",null==x||null===(l=x.robotSettings)||void 0===l?void 0:l.offlineRobot),r.setFieldValue("nonWorktimeRobot",null==x||null===(c=x.robotSettings)||void 0===c?void 0:c.nonWorktimeRobot),r.setFieldValue("robotUid",null==x||null===(d=x.robotSettings)||void 0===d||null===(d=d.robot)||void 0===d?void 0:d.uid)}}),[h,x]);var O=function(){var e=a()(i()().mark((function e(){var t,n,r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.current){e.next=3;break}return console.log("isLoading: 1",u.current),e.abrupt("return");case 3:return u.current=!0,d.yw.loading("loading"),t={pageNumber:0,pageSize:50,type:I.f4h,orgUid:P.uid},e.next=8,(0,Ce.p0)(t);case 8:n=e.sent,console.log("queryRobotsByOrg: ",n),200===n.code?W(null===(r=n.data)||void 0===r?void 0:r.content):d.yw.error(n.message),u.current=!1,d.yw.destroy();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){O()}),[]);var G,z,B=function(){var e=a()(i()().mark((function e(n){var r,o,u,a,l,c,p,m,v,k,y,w,j,F,Z;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("onFinish:",n),d.yw.loading(s.formatMessage({id:"updating",defaultMessage:"updating"})),t!==I.Njn){e.next=12;break}return c=A()(A()({},h),{},{serviceSettings:A()(A()({},h.serviceSettings),{},{quickFaqUids:null===(r=h.serviceSettings)||void 0===r||null===(r=r.quickFaqs)||void 0===r?void 0:r.map((function(e){return e.uid})),faqUids:null===(o=h.serviceSettings)||void 0===o||null===(o=o.faqs)||void 0===o?void 0:o.map((function(e){return e.uid})),guessFaqUids:null==h||null===(u=h.serviceSettings)||void 0===u||null===(u=u.guessFaqs)||void 0===u?void 0:u.map((function(e){return e.uid})),hotFaqUids:null==h||null===(a=h.serviceSettings)||void 0===a||null===(a=a.hotFaqs)||void 0===a?void 0:a.map((function(e){return e.uid})),shortcutFaqUids:null==h||null===(l=h.serviceSettings)||void 0===l||null===(l=l.shortcutFaqs)||void 0===l?void 0:l.map((function(e){return e.uid}))}),leaveMsgSettings:A()(A()({},h.leaveMsgSettings),{},{worktimeUids:E.map((function(e){return null==e?void 0:e.uid}))}),robotSettings:A()(A()({},h.robotSettings),{},{defaultRobot:n.defaultRobot,offlineRobot:n.offlineRobot,nonWorktimeRobot:n.nonWorktimeRobot,robotUid:n.robotUid}),maxThreadCount:(null==n?void 0:n.maxThreadCount)||10,autoReplySettings:A()({},h.autoReplySettings)}),console.log("agentObject:",c),e.next=7,(0,f.sE)(c);case 7:p=e.sent,console.log("updateAgent response:",p),200===p.code?(d.yw.destroy(),d.yw.success(s.formatMessage({id:"update.success"})),b(p.data)):(d.yw.destroy(),d.yw.error(p.message)),e.next=20;break;case 12:if(t!==I.aZD){e.next=20;break}return F=A()(A()({},x),{},{serviceSettings:A()(A()({},x.serviceSettings),{},{quickFaqUids:null===(m=x.serviceSettings)||void 0===m||null===(m=m.quickFaqs)||void 0===m?void 0:m.map((function(e){return e.uid})),faqUids:null===(v=x.serviceSettings)||void 0===v||null===(v=v.faqs)||void 0===v?void 0:v.map((function(e){return e.uid})),guessFaqUids:null==x||null===(k=x.serviceSettings)||void 0===k||null===(k=k.guessFaqs)||void 0===k?void 0:k.map((function(e){return e.uid})),hotFaqUids:null==x||null===(y=x.serviceSettings)||void 0===y||null===(y=y.hotFaqs)||void 0===y?void 0:y.map((function(e){return e.uid})),shortcutFaqUids:null==x||null===(w=x.serviceSettings)||void 0===w||null===(w=w.shortcutFaqs)||void 0===w?void 0:w.map((function(e){return e.uid}))}),leaveMsgSettings:A()(A()({},x.leaveMsgSettings),{},{worktimeUids:E.map((function(e){return null==e?void 0:e.uid}))}),robotSettings:A()(A()({},x.robotSettings),{},{defaultRobot:n.defaultRobot,offlineRobot:n.offlineRobot,nonWorktimeRobot:n.nonWorktimeRobot,robotUid:n.robotUid}),agentUids:null==x||null===(j=x.agents)||void 0===j?void 0:j.map((function(e){return e.uid}))}),console.log("workgroupObject:",F),e.next=17,(0,g.W5)(F);case 17:Z=e.sent,console.log("updateWorkGroup response:",Z),200===Z.code?(d.yw.destroy(),d.yw.success(s.formatMessage({id:"update.success"})),S(Z.data)):(d.yw.destroy(),d.yw.error(Z.message));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=[];return E.map((function(t){e.push({worktime:[we()(t.startTime,We),we()(t.endTime,We)]})})),e},H=function(){var e=a()(i()().mark((function e(t,n,r){var o,s,u;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onWorktimeChange:",r,n),s={uid:null===(o=E[r])||void 0===o?void 0:o.uid,startTime:n[0],endTime:n[1]},e.next=4,je(s);case 4:u=e.sent,console.log("updateWorktime response:",u),200===u.code||d.yw.error(u.message);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$=function(){var e=a()(i()().mark((function e(){var t,n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("createWorktime"),t={startTime:"00:00:00",endTime:"23:59:59"},e.next=4,xe(t);case 4:n=e.sent,console.log("createWorktime response:",n),200===n.code?D([].concat(ce()(E),[n.data])):d.yw.error(n.message);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=a()(i()().mark((function e(t){var n,r,o,s;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleteWorktime:",t,null===(n=E[t])||void 0===n?void 0:n.uid),o={uid:null===(r=E[t])||void 0===r?void 0:r.uid},e.next=4,Ze(o);case 4:s=e.sent,console.log("deleteWorktime response:",s),200===s.code?D(E.filter((function(e,n){return n!==t}))):d.yw.error(s.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){console.log("worktimes:",E),r.setFieldValue("worktimes",N())}),[E]),(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(M.A,{form:r,style:{marginLeft:"100px"},onFinish:B,children:[(0,C.jsx)(L.Z,{name:"defaultRobot",width:"md",label:"默认启用机器人"}),(0,C.jsx)(L.Z,{name:"offlineRobot",width:"md",label:"无客服在线时启用机器人"}),(0,C.jsx)(L.Z,{name:"nonWorktimeRobot",width:"md",label:"非工作时间启用机器人"}),(0,C.jsx)(de.u,{name:"worktimes",style:{marginBlockEnd:0,width:"300px"},label:"工作时间区间，支持多个",creatorRecord:{worktime:[we()("00:00:00",We),we()("23:59:59",We)]},initialValue:N(),creatorButtonProps:{creatorButtonText:"添加",icon:!1,style:{width:"unset"}},copyIconProps:!1,deleteIconProps:{tooltipText:"删除"},itemRender:function(e){var t=e.listDom,n=e.action;return(0,C.jsxs)("div",{style:{display:"inline-flex",marginInlineEnd:25},children:[t,n]})},min:1,max:4,actionRef:l,actionGuard:{beforeAddRow:(z=a()(i()().mark((function e(t,n,r){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("beforeAddRow:",t,n),e.next=3,$();case 3:return e.abrupt("return",new Promise((function(e){e(!0)})));case 4:case"end":return e.stop()}}),e)}))),function(e,t,n){return z.apply(this,arguments)}),beforeRemoveRow:(G=a()(i()().mark((function e(t,n){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("beforeRemoveRow:",t),e.next=3,Q(t);case 3:return e.abrupt("return",new Promise((function(e){e(0!==t)})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return G.apply(this,arguments)})},children:function(e,t,n){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(be.RangePicker,{width:"md",name:"worktime",fieldProps:{onChange:function(e,n){H(e,n,t)},format:We}},"worktime")})}}),(0,C.jsx)(R.Z,{name:"robotUid",label:"客服机器人",width:"md",options:q.map((function(e){return{value:e.uid,label:U(e.nickname)}})),fieldProps:{allowClear:!0,placeholder:"请选择客服机器人"}})]})})},Ue=n(3321),Te=function(){var e=(0,y.useIntl)(),t=(0,o.useMemo)((function(){return[{key:"basic",label:e.formatMessage({id:"pages.robot.tab.basic",defaultMessage:"Basic"}),children:(0,C.jsx)(O,{})},{key:"serviceSettings",label:e.formatMessage({id:"pages.agent.service.settings",defaultMessage:"Service Settings"}),children:(0,C.jsx)(Ue.Z,{type:I.aZD})},{key:"robot",label:e.formatMessage({id:"pages.agent.robot",defaultMessage:"Robot"}),children:(0,C.jsx)(Pe,{type:I.aZD})},{key:"route",label:e.formatMessage({id:"pages.workgroup.tab.route",defaultMessage:"Route"}),children:(0,C.jsx)(ee,{})},{key:"advanced",label:e.formatMessage({id:"pages.robot.tab.advanced",defaultMessage:"Advanced"}),children:(0,C.jsx)(ue,{})},{key:"channel",label:e.formatMessage({id:"pages.robot.tab.channel",defaultMessage:"Channel"}),children:(0,C.jsx)(ae.Z,{type:I.aZD})}]}),[e]);return(0,C.jsx)(U.Z,{defaultActiveKey:"basic",items:t})},Ae=n(93139),Ve=r.Z.Sider,Ee=r.Z.Content,De=function(){var e=(0,Ae.Z)(),t=e.leftSiderStyle,n=e.leftSiderWidth;return(0,C.jsxs)(r.Z,{children:[(0,C.jsx)(Ve,{width:n,style:t,children:(0,C.jsx)(P,{})}),(0,C.jsx)(r.Z,{children:(0,C.jsx)(Ee,{children:(0,C.jsx)(Te,{})})})]})}}}]);