"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1642],{32863:function(e,t,n){var r=n(17082),s=n(51190),a=n(44194),i=n(39647),o=n(31549),u=["fieldProps","request","params","proFieldProps"],l=function(e,t){var n=e.fieldProps,a=e.request,l=e.params,c=e.proFieldProps,d=(0,s.Z)(e,u);return(0,o.jsx)(i.Z,(0,r.Z)({valueType:"treeSelect",fieldProps:n,ref:t,request:a,params:l,filedConfig:{customLightMode:!0},proFieldProps:c},d))},c=a.forwardRef(l);t.Z=c},66765:function(e,t,n){var r=n(5728);t.ZP=r.A},77849:function(e,t,n){n.d(t,{D$:function(){return f},EP:function(){return h},hS:function(){return p},z_:function(){return d}});var r=n(90819),s=n.n(r),a=n(73193),i=n.n(a),o=n(89933),u=n.n(o),l=n(77667),c=n(82045);function d(e){return m.apply(this,arguments)}function m(){return(m=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/member/query/org",{method:"GET",params:i()(i()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/member/create",{method:"POST",data:i()(i()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/member/update",{method:"POST",data:i()(i()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=u()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/member/delete",{method:"POST",data:i()(i()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},32731:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(64476),s=n(44194),a=n(50571),i=n(82045),o=n(90819),u=n.n(o),l=n(73193),c=n.n(l),d=n(89933),m=n.n(d),f=n(45332),g=n.n(f),p=n(89756),v=n(81153),h=n(1780),b=n(85702),x=n(77667),y=n(39701),j=n(83642),M=n(41617),w=(0,y.Ue)()((0,j.mW)((0,j.tJ)((0,M.n)((function(e,t){return{memberResult:{data:{content:[],totalElements:0}},insertMember:function(t){e((function(e){e.memberResult.data.content.unshift(t)}))},updateMember:function(t){e((function(e){var n=e.memberResult.data.content,r=n.findIndex((function(e){return e.uid===t.uid}));-1!==r?n[r]=t:console.warn("Member with uid ".concat(t.uid," not found."))}))},deleteMember:function(t){e((function(e){var n=e.memberResult.data.content,r=n.findIndex((function(e){return e.uid===t.uid}));-1!==r?n.splice(r,1):console.warn("Member with uid ".concat(t.uid," not found."))}))},setMemberResult:function(t){e({memberResult:t})},deleteMemberCache:function(){return e({},!0)}}})),{name:x.PQL}))),k=n(92349),Z=n(69957),q=n(5728),F=n(43688),S=n(11607),A=n(21276),C=n(12265),P=n(31549),R=function(){var e=q.A.useForm(),t=g()(e,1)[0],n=(0,i.useIntl)(),r=(0,h.Z)().translateString,a=(w((function(e){return e.memberResult})),(0,b.E)((function(e){return{currentAgent:e.currentAgent,setCurrentAgent:e.setCurrentAgent}}))),o=a.currentAgent,l=a.setCurrentAgent,d=(0,s.useState)(""),f=g()(d,2),x=f[0],y=f[1];(0,s.useEffect)((function(){var e;o&&t.setFieldsValue({nickname:r(null==o?void 0:o.nickname),email:null==o?void 0:o.email,mobile:null==o?void 0:o.mobile,description:r(null==o?void 0:o.description),memberUid:null==o||null===(e=o.member)||void 0===e?void 0:e.uid})}),[o]);var j=function(){var e=m()(u()().mark((function e(t){var r,s,a,i,d,m,f,g,h;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish:",t),p.yw.loading(n.formatMessage({id:"updating"})),g=c()(c()(c()({},o),t),{},{avatar:x,serviceSettings:c()(c()({},o.serviceSettings),{},{quickFaqUids:null==o||null===(r=o.serviceSettings)||void 0===r||null===(r=r.quickFaqs)||void 0===r?void 0:r.map((function(e){return e.uid})),faqUids:null==o||null===(s=o.serviceSettings)||void 0===s||null===(s=s.faqs)||void 0===s?void 0:s.map((function(e){return e.uid})),guessFaqUids:null==o||null===(a=o.serviceSettings)||void 0===a||null===(a=a.guessFaqs)||void 0===a?void 0:a.map((function(e){return e.uid})),hotFaqUids:null==o||null===(i=o.serviceSettings)||void 0===i||null===(i=i.hotFaqs)||void 0===i?void 0:i.map((function(e){return e.uid})),shortcutFaqUids:null==o||null===(d=o.serviceSettings)||void 0===d||null===(d=d.shortcutFaqs)||void 0===d?void 0:d.map((function(e){return e.uid}))}),robotSettings:c()(c()({},o.robotSettings),{},{robotUid:null===(m=o.robotSettings)||void 0===m||null===(m=m.robot)||void 0===m?void 0:m.uid}),leaveMsgSettings:c()(c()({},o.leaveMsgSettings),{},{worktimeUids:null==o||null===(f=o.leaveMsgSettings)||void 0===f||null===(f=f.worktimes)||void 0===f?void 0:f.map((function(e){return e.uid}))}),autoReplySettings:c()({},o.autoReplySettings)}),console.log("agentObject:",g),e.next=6,(0,v.sE)(g);case 6:h=e.sent,console.log("updateAgent response:",h),200===h.code?(p.yw.destroy(),p.yw.success(n.formatMessage({id:"update.success"})),l(h.data)):(p.yw.destroy(),p.yw.error(h.message));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e;o&&(y(o.avatar),t.setFieldsValue({member:null==o||null===(e=o.member)||void 0===e?void 0:e.nickname}))}),[o]),(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(q.A,{form:t,style:{marginLeft:"100px"},onFinish:j,children:[(0,P.jsx)(q.A.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},label:n.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,P.jsxs)(k.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),y(e)},onError:function(e){console.log("handleUploadError:",e),p.yw.error(e)},children:[(0,P.jsx)(A.C,{src:x}),(0,P.jsx)(C.ZP,{icon:(0,P.jsx)(Z.Z,{}),children:n.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,P.jsx)(F.Z,{width:"md",name:"nickname",label:"客服卡片-展示客服昵称",rules:[{required:!0,message:"请输入客服昵称"}]}),(0,P.jsx)(F.Z,{width:"md",name:"email",label:"客服卡片-展示邮箱",rules:[{required:!0,message:"请输入邮箱"}]}),(0,P.jsx)(F.Z,{width:"md",name:"mobile",label:"客服卡片-展示手机号",rules:[{required:!0,message:"请输入手机号"}]}),(0,P.jsx)(S.Z,{width:"md",name:"description",label:"客服卡片-展示描述",rules:[{required:!0,message:"请输入描述"}]}),(0,P.jsx)(F.Z,{width:"md",name:"member",label:"绑定成员",disabled:!0})]})})},U=n(93982),V=n(89875),E=n(18874),N=n(66772),I=n(90588),L=n(10187),O=n(9750),T=(n(13253),n(28243),n(16655)),z=function(){var e=(0,i.useIntl)(),t=(0,s.useMemo)((function(){return!1}),[]),n=(0,s.useMemo)((function(){return[{key:"faq",label:(0,P.jsx)(i.FormattedMessage,{id:"menu.knowledge.faq",defaultMessage:"FAQ"}),children:(0,P.jsx)(V.Z,{type:x.Njn}),disabled:t},{key:"quickFaqs",label:(0,P.jsx)(i.FormattedMessage,{id:"menu.knowledge.quickbutton",defaultMessage:"QuickButton"}),children:(0,P.jsx)(I.Z,{type:x.Njn}),disabled:t},{key:"faqGuess",label:(0,P.jsx)(i.FormattedMessage,{id:"menu.knowledge.faqGuess",defaultMessage:"FaqGuess"}),children:(0,P.jsx)(L.Z,{type:x.Njn}),disabled:t},{key:"faqHot",label:(0,P.jsx)(i.FormattedMessage,{id:"menu.knowledge.faqHot",defaultMessage:"FaqHot"}),children:(0,P.jsx)(E.Z,{type:x.Njn}),disabled:t},{key:"faqShortcut",label:(0,P.jsx)(i.FormattedMessage,{id:"menu.knowledge.faqShortcut",defaultMessage:"FaqShortcut"}),children:(0,P.jsx)(N.Z,{type:x.Njn}),disabled:t},{key:"rate",label:(0,P.jsx)(i.FormattedMessage,{id:"rate",defaultMessage:"Rate"}),children:(0,P.jsx)(O.Z,{type:x.Njn}),disabled:t}]}),[e,t]);return(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsx)(U.Z,{message:"企业版-高级功能",style:{marginBottom:20},type:"warning",action:(0,P.jsx)(C.ZP,{type:"link",icon:(0,P.jsx)(T.Z,{}),onClick:function(){return window.open(x.VPj)},children:e.formatMessage({id:"setting.helpcenter"})})}),(0,P.jsx)(a.Z,{tabPosition:"left",items:n})]})},D=n(82639),G=(n(65352),n(89242),n(19743),n(3321)),B=function(){var e=(0,i.useIntl)(),t=(0,s.useMemo)((function(){return[{key:"basic",label:e.formatMessage({id:"pages.robot.tab.basic",defaultMessage:"Basic"}),children:(0,P.jsx)(R,{})},{key:"serviceSettings",label:e.formatMessage({id:"pages.agent.service.settings",defaultMessage:"Service Settings"}),children:(0,P.jsx)(G.Z,{type:x.Njn})},{key:"advanced",label:e.formatMessage({id:"pages.robot.tab.advanced",defaultMessage:"Advanced"}),children:(0,P.jsx)(z,{})},{key:"channel",label:e.formatMessage({id:"pages.robot.tab.channel",defaultMessage:"Channel"}),children:(0,P.jsx)(D.Z,{type:x.Njn})}]}),[e]);return(0,P.jsx)(a.Z,{defaultActiveKey:"basic",items:t})},_=n(74145),H=n(40431),Q=n(50484),W=n(70458),$=n(83730),J=n(80093),K=n(90136),X=n(66765),Y=n(32863),ee=function(e){var t=e.open,n=e.onClose,r=e.onSubmit,a=X.ZP.useForm(),i=g()(a,1)[0],o=(0,H.u)((function(e){return e.currentOrg})),u=w((function(e){return e.memberResult})),l=(0,s.useMemo)((function(){for(var e,t,n=[],r=0;r<u.data.content.length;r++){var s={title:"",value:"",children:[]};e=u.data.content[r],(t=s).title=e.nickname,t.value=e.uid,n.push(s)}return n}),[u]);return(0,P.jsx)("div",{children:(0,P.jsx)($.Z,{title:"创建客服",open:t,forceRender:!0,onOk:function(){console.log("handleOk"),i.validateFields().then((function(e){console.log("form values:",e);var t={nickname:i.getFieldValue("nickname"),email:i.getFieldValue("email"),mobile:i.getFieldValue("mobile"),memberUid:i.getFieldValue("memberUid"),orgUid:o.uid};console.log("agent:",t),r(t)})).catch((function(e){console.log("Form errors:",e)}))},onCancel:function(){console.log("handleCancel"),n()},children:(0,P.jsxs)(X.ZP,{form:i,name:"agentForm",style:{maxWidth:400},submitter:!1,children:[(0,P.jsx)(Y.Z,{label:"绑定成员",name:"memberUid",tooltip:"请先到组织-》成员-》创建成员",rules:[{required:!0,message:"请选择成员!"}],fieldProps:{multiple:!1,treeDefaultExpandAll:!0,placeholder:"请选择成员",onChange:function(e){console.log("onTreeSelectChange:",e);for(var t=0;t<u.data.content.length;t++){var n=u.data.content[t];n.uid===e&&(console.log("element:",n),i.setFieldsValue({nickname:n.nickname}),i.setFieldsValue({email:n.email}),i.setFieldsValue({mobile:n.mobile}))}},treeData:l,variant:"outlined"}}),(0,P.jsx)(F.Z,{label:"昵称",name:"nickname",rules:[{required:!0,message:"请输入昵称!"}]}),(0,P.jsx)(F.Z,{label:"邮箱",name:"email",rules:[{required:!0,message:"请输入邮箱!"},{type:"email",message:"请输入正确的邮箱地址"}]}),(0,P.jsx)(F.Z,{label:"手机号",name:"mobile",rules:[{required:!0,message:"请输入手机号"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号"}]})]})})})},te=n(77849),ne=function(){var e=(0,i.useIntl)(),t=(0,s.useRef)(!1),n=(0,h.Z)(),r=n.translateString,a=n.translateStringTranct,o=(0,_.Z)().isDarkMode,l=(0,s.useState)(!1),c=g()(l,2),d=c[0],f=c[1],y=(0,H.u)((function(e){return e.currentOrg})),j=w((function(e){return e.setMemberResult})),M=(0,b.E)((function(e){return{agentResult:e.agentResult,currentAgent:e.currentAgent,insertAgent:e.insertAgent,setAgentResult:e.setAgentResult,setCurrentAgent:e.setCurrentAgent,deleteCurrentAgent:e.deleteCurrentAgent}})),k=M.agentResult,Z=M.currentAgent,q=M.insertAgent,F=M.setAgentResult,S=M.setCurrentAgent,R=M.deleteCurrentAgent,U=$.Z.useModal(),V=g()(U,2),E=V[0],N=V[1],I=function(){var t=m()(u()().mark((function t(n){var r;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete agent",n),p.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),t.next=4,(0,v.Lr)(n);case 4:r=t.sent,console.log("delete agent response",r),200===r.code?(p.yw.destroy(),p.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),R(n.uid)):(p.yw.destroy(),p.yw.error(r.message));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var e=m()(u()().mark((function e(){var n,r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=3;break}return console.log("isLoading: 1",t.current),e.abrupt("return");case 3:return t.current=!0,p.yw.loading("loading"),n={pageNumber:0,pageSize:50,orgUid:y.uid},e.next=8,(0,v._t)(n);case 8:r=e.sent,console.log("queryAgentsByOrg: ",r),200===r.code?(p.yw.destroy(),F(r)):(p.yw.destroy(),p.yw.error(r.message)),t.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=m()(u()().mark((function e(){var t,n;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageNumber:0,pageSize:50,orgUid:y.uid},e.next=3,(0,te.z_)(t);case 3:n=e.sent,console.log("queryAllMembers:",t,n),200===n.code?j(n):p.yw.error(n.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){L(),O()}),[]);var T=function(){var t=m()(u()().mark((function t(n){var r;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("save agent"),p.yw.loading(e.formatMessage({id:"creating",defaultMessage:"Creating"})),t.next=4,(0,v.x_)(n);case 4:r=t.sent,console.log("create agent:",r),200===r.code?(p.yw.destroy(),p.yw.success(e.formatMessage({id:"create.success"})),q(r.data),f(!1)):(p.yw.destroy(),p.yw.error(r.message));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(J.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,P.jsx)(C.ZP,{size:"small",type:"primary",icon:(0,P.jsx)(W.Z,{}),onClick:function(){f(!0)},children:e.formatMessage({id:"pages.robot.new",defaultMessage:"New"})}),(0,P.jsx)(C.ZP,{size:"small",onClick:L,children:e.formatMessage({id:"refresh",defaultMessage:"Refresh"})}),(0,P.jsx)(C.ZP,{onClick:function(){return function(t){E.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,P.jsx)(Q.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(r(t.nickname),"】？"),onOk:function(){I(t)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})})}(Z)},size:"small",danger:!0,disabled:""===(null==Z?void 0:Z.uid),children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,P.jsx)(K.Z,{itemLayout:"horizontal",dataSource:k.data.content,renderItem:function(e,t){return(0,P.jsx)(K.Z.Item,{style:Z.uid===e.uid?{backgroundColor:o?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){S(e)},children:(0,P.jsx)(K.Z.Item.Meta,{style:{marginLeft:"10px"},avatar:(0,P.jsx)(A.C,{src:e.avatar}),title:(0,P.jsx)(P.Fragment,{children:a(e.nickname)}),description:(n=e,(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("span",{style:{color:"#999999",fontSize:12},children:[n.status===x.Ra4&&"[😀-在线接待]",n.status===x.LZ1&&"[🔻-客服下线]",n.status===x.tU$&&"[🏃‍♀️-客服忙碌]",n.connected?" ✅连接成功":" ❌连接断开"]})}))})},e.uid);var n}}),d&&(0,P.jsx)(ee,{open:d,onClose:function(){f(!1)},onSubmit:T}),N]})},re=n(93139),se=r.Z.Sider,ae=r.Z.Content,ie=function(){var e=(0,re.Z)(),t=e.leftSiderStyle,n=e.leftSiderWidth;return(0,s.useEffect)((function(){}),[]),(0,P.jsxs)(r.Z,{children:[(0,P.jsx)(se,{width:n,style:t,children:(0,P.jsx)(ne,{})}),(0,P.jsx)(r.Z,{children:(0,P.jsx)(ae,{children:(0,P.jsx)(B,{})})})]})}}}]);