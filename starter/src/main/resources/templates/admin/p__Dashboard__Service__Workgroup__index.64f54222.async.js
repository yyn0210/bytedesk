"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9828],{35523:function(e,r,t){t.r(r),t.d(r,{default:function(){return Me}});var n=t(64476),s=t(44194),a=t(90819),o=t.n(a),i=t(89933),u=t.n(i),l=t(45332),c=t.n(l),d=t(89756),g=t(81153),f=t(43314),p=t(74145),m=t(85702),v=t(40431),h=t(61017),k=t(50484),y=t(70458),x=t(7206),b=t(83730),j=t(80093),Z=t(12265),w=t(90136),M=t(21276),F=t(1780),S=t(5728),C=t(43688),q=t(8091),W=t(31549),P=function(e){var r=e.open,t=e.onClose,n=e.onSubmit,a=S.A.useForm(),o=c()(a,1)[0],i=(0,F.Z)().translateString,u=(0,v.u)((function(e){return e.currentOrg})),l=(0,m.E)((function(e){return e.agentResult})),d=(0,s.useState)([]),g=c()(d,2),f=g[0],p=g[1];return(0,W.jsx)("div",{children:(0,W.jsx)(b.Z,{title:"创建技能组",open:r,forceRender:!0,onOk:function(){console.log("handleOk"),o.validateFields().then((function(e){console.log("form values:",e);var r={nickname:o.getFieldValue("nickname"),agentUids:o.getFieldValue("agents"),orgUid:u.uid};console.log("workgroup:",r),n(r)})).catch((function(e){console.log("Form errors:",e)}))},onCancel:function(){console.log("handleCancel"),t()},children:(0,W.jsxs)(S.A,{form:o,name:"wgForm",submitter:{render:function(e,r){return(0,W.jsx)(W.Fragment,{})}},children:[(0,W.jsx)(C.Z,{label:"技能组昵称",name:"nickname",rules:[{required:!0,message:"请输入昵称!"}]}),(0,W.jsx)(q.Z,{name:"agents",label:"成员",options:l.data.content.map((function(e){return{value:e.uid,label:i(e.nickname)}})),fieldProps:{mode:"multiple",allowClear:!0,placeholder:"请选择成员",value:f,onChange:function(e){console.log("selected ".concat(e)),p(e)}}})]})})})},D=function(){var e=(0,x.useIntl)(),r=(0,s.useRef)(!1),t=(0,F.Z)().translateStringTranct,n=(0,p.Z)().isDarkMode,a=(0,s.useState)(!1),i=c()(a,2),l=i[0],S=i[1],C=(0,v.u)((function(e){return e.currentOrg})),q=(0,m.E)((function(e){return e.setAgentResult})),D=(0,h.$)((function(e){return{workgroupResult:e.workgroupResult,currentWorkgroup:e.currentWorkgroup,setWorkgroupResult:e.setWorkgroupResult,insertWorkgroup:e.insertWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup,deleteCurrentWorkgroup:e.deleteCurrentWorkgroup}})),U=D.workgroupResult,A=D.currentWorkgroup,R=D.setWorkgroupResult,E=D.insertWorkgroup,T=D.setCurrentWorkgroup,I=D.deleteCurrentWorkgroup,V=b.Z.useModal(),G=c()(V,2),z=G[0],L=G[1],O=function(r){z.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,W.jsx)(k.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(r.nickname,"】？"),onOk:function(){B(r)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})})},B=function(){var r=u()(o()().mark((function r(t){var n;return o()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("delete workgroup",t),d.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),r.next=4,(0,f.zl)(t);case 4:n=r.sent,console.log("delete workgroup response",n),200===n.code?(d.yw.destroy(),d.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),I(t.uid)):(d.yw.destroy(),d.yw.error(n.message));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),N=function(){var e=u()(o()().mark((function e(){var r,t;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={pageNumber:0,pageSize:50,orgUid:C.uid},e.next=3,(0,g._t)(r);case 3:t=e.sent,console.log("queryAgentsByOrg: ",t),200===t.code?q(t):d.yw.error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=u()(o()().mark((function e(){var t,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.current){e.next=3;break}return console.log("isLoading: 1",r.current),e.abrupt("return");case 3:return r.current=!0,d.yw.loading("loading"),t={pageNumber:0,pageSize:50,orgUid:C.uid},e.next=8,(0,f.u7)(t);case 8:n=e.sent,console.log("getWorkgroups",n),200===n.code?(d.yw.destroy(),R(n)):(d.yw.destroy(),d.yw.error(n.message)),r.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){H(),N()}),[]);var Q=function(){var r=u()(o()().mark((function r(t){var n;return o()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("handleSave",t),d.yw.loading(e.formatMessage({id:"creating",defaultMessage:"Creating"})),r.next=4,(0,f.p0)(t);case 4:n=r.sent,console.log("create workgroup:",n),200===n.code?(d.yw.destroy(),d.yw.success(e.formatMessage({id:"create.success",defaultMessage:"create success"})),S(!1),E(n.data)):(d.yw.destroy(),S(!1),d.yw.error(n.message));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(j.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,W.jsx)(Z.ZP,{size:"small",type:"primary",icon:(0,W.jsx)(y.Z,{}),onClick:function(){S(!0)},children:e.formatMessage({id:"pages.robot.new",defaultMessage:"New"})}),(0,W.jsx)(Z.ZP,{size:"small",onClick:H,children:e.formatMessage({id:"refresh",defaultMessage:"Refresh"})}),(0,W.jsx)(Z.ZP,{onClick:function(){return O(A)},size:"small",danger:!0,disabled:A&&""===A.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,W.jsx)(w.Z,{itemLayout:"horizontal",dataSource:U.data.content,renderItem:function(e,r){return(0,W.jsx)(w.Z.Item,{style:A.uid===e.uid?{backgroundColor:n?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){T(e)},children:(0,W.jsx)(w.Z.Item.Meta,{style:{marginLeft:"10px"},avatar:(0,W.jsx)(M.C,{src:e.avatar}),title:(0,W.jsx)(W.Fragment,{children:t(e.nickname)}),description:t(e.description)})},e.uid)}}),(0,W.jsx)(P,{open:l,onClose:function(){S(!1)},onSubmit:Q}),L]})},U=t(50571),A=t(73193),R=t.n(A),E=t(11607),T=t(69957),I=t(92349),V=function(){var e=S.A.useForm(),r=c()(e,1)[0],t=(0,x.useIntl)(),n=(0,F.Z)().translateString,a=(0,m.E)((function(e){return e.agentResult})),i=(0,h.$)((function(e){return{currentWorkgroup:e.currentWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup}})),l=i.currentWorkgroup,g=i.setCurrentWorkgroup,p=(0,s.useState)([]),v=c()(p,2),k=v[0],y=v[1],b=(0,s.useState)(""),j=c()(b,2),w=j[0],P=j[1];(0,s.useEffect)((function(){if(l){var e;r.setFieldValue("nickname",n(null==l?void 0:l.nickname)),r.setFieldValue("description",n(null==l?void 0:l.description));var t=[];null===(e=l.agents)||void 0===e||e.forEach((function(e){t.push(e.uid)})),y(t)}}),[l]);var D=function(){var e=u()(o()().mark((function e(r){var n,s,a,i,u,c,p,m,v;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish",r),d.yw.loading("修改中..."),m=R()(R()(R()({},l),r),{},{avatar:w,agentUids:k,serviceSettings:R()(R()({},l.serviceSettings),{},{robotUid:null===(n=l.serviceSettings)||void 0===n||null===(n=n.robot)||void 0===n?void 0:n.uid,quickFaqUids:null===(s=l.serviceSettings)||void 0===s||null===(s=s.quickFaqs)||void 0===s?void 0:s.map((function(e){return e.uid})),faqUids:null==l||null===(a=l.serviceSettings)||void 0===a||null===(a=a.faqs)||void 0===a?void 0:a.map((function(e){return e.uid})),guessFaqUids:null==l||null===(i=l.serviceSettings)||void 0===i||null===(i=i.guessFaqs)||void 0===i?void 0:i.map((function(e){return e.uid})),hotFaqUids:null===(u=l.serviceSettings)||void 0===u||null===(u=u.hotFaqs)||void 0===u?void 0:u.map((function(e){return e.uid})),shortcutFaqUids:null==l||null===(c=l.serviceSettings)||void 0===c||null===(c=c.shortcutFaqs)||void 0===c?void 0:c.map((function(e){return e.uid})),worktimeUids:null===(p=l.serviceSettings)||void 0===p||null===(p=p.worktimes)||void 0===p?void 0:p.map((function(e){return e.uid}))})}),console.log("workgroupObject:",m),e.next=6,(0,f.W5)(m);case 6:v=e.sent,console.log("updateWorkGroup response:",v),200===v.code?(d.yw.destroy(),d.yw.success(t.formatMessage({id:"update.success"})),g(v.data)):(d.yw.destroy(),d.yw.error(v.message));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){P(null==l?void 0:l.avatar)}),[l]),(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(S.A,{form:r,style:{marginLeft:"100px",width:"300px"},onFinish:D,children:[(0,W.jsx)(S.A.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},label:t.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,W.jsxs)(I.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),P(e)},onError:function(e){console.log("handleUploadError:",e),d.yw.error(e)},children:[(0,W.jsx)(M.C,{src:w}),(0,W.jsx)(Z.ZP,{icon:(0,W.jsx)(T.Z,{}),children:t.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,W.jsx)(C.Z,{width:"md",name:"nickname",label:"昵称",rules:[{required:!0,message:"请输入技能组昵称"}]}),(0,W.jsx)(q.Z,{name:"agents",label:"成员",width:"md",options:a.data.content.map((function(e){return{value:e.uid,label:n(e.nickname)}})),fieldProps:{mode:"multiple",allowClear:!0,placeholder:"请选择成员",value:k,onChange:function(e){console.log("selected ".concat(e)),y(e)}},rules:[{required:!0,message:"请选择成员"}]}),(0,W.jsx)(E.Z,{width:"md",name:"description",label:"描述",rules:[{required:!0,message:"请输入描述"}]})]})})},G=t(77667),z=t(2724),L=t(17082),O=t(51190),B=t(19753),N=t(33959),H=t(79379),Q=t(93288),$=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],J=s.forwardRef((function(e,r){var t=e.fieldProps,n=e.options,s=e.radioType,a=e.layout,o=e.proFieldProps,i=e.valueEnum,u=(0,O.Z)(e,$);return(0,W.jsx)(Q.Z,(0,L.Z)((0,L.Z)({valueType:"button"===s?"radioButton":"radio",ref:r,valueEnum:(0,B.h)(i,void 0)},u),{},{fieldProps:(0,L.Z)({options:n,layout:a},t),proFieldProps:o,filedConfig:{customLightMode:!0}}))})),K=s.forwardRef((function(e,r){var t=e.fieldProps,n=e.children;return(0,W.jsx)(N.ZP,(0,L.Z)((0,L.Z)({},t),{},{ref:r,children:n}))})),_=(0,H.G)(K,{valuePropName:"checked",ignoreWidth:!0});_.Group=J,_.Button=N.ZP.Button,_.displayName="ProFormComponent";var X=_,Y=t(47807),ee=function(){var e=Y.Z.useForm(),r=c()(e,1)[0],t=(0,x.useIntl)(),n=(0,h.$)((function(e){return{currentWorkgroup:e.currentWorkgroup,setCurrentWorkgroup:e.setCurrentWorkgroup}})),a=n.currentWorkgroup,i=n.setCurrentWorkgroup,l=(0,s.useState)(!1),g=c()(l,2),p=(g[0],g[1]),m=(0,s.useState)(G.Jxp),v=c()(m,2),k=v[0],y=v[1];(0,s.useEffect)((function(){return h.$.subscribe((function(e){r.setFieldValue("recent",e.currentWorkgroup.recent),r.setFieldValue("routeType",e.currentWorkgroup.routeType)}))}),[a]),(0,s.useEffect)((function(){p(a.recent),y(a.routeType)}),[]);var b=function(){var e=u()(o()().mark((function e(r){var n,s,u,l,c,g;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish:",r),d.yw.loading("正在修改..."),c=R()(R()(R()({},a),{},{agentUids:a.agents.map((function(e){return e.uid}))},r),{},{serviceSettings:R()(R()({},a.serviceSettings),{},{robotUid:null===(n=a.serviceSettings)||void 0===n||null===(n=n.robot)||void 0===n?void 0:n.uid,quickFaqUids:null===(s=a.serviceSettings)||void 0===s||null===(s=s.quickFaqs)||void 0===s?void 0:s.map((function(e){return e.uid})),faqUids:null===(u=a.serviceSettings)||void 0===u||null===(u=u.faqs)||void 0===u?void 0:u.map((function(e){return e.uid})),worktimeUids:null===(l=a.serviceSettings)||void 0===l||null===(l=l.worktimes)||void 0===l?void 0:l.map((function(e){return e.uid}))})}),console.log("workgroupObject:",c),e.next=6,(0,f.W5)(c);case 6:g=e.sent,console.log("updateWorkGroup response:",g),200===g.code?(d.yw.destroy(),d.yw.success(t.formatMessage({id:"update.success"})),i(g.data)):(d.yw.destroy(),d.yw.error(g.message));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(S.A,{form:r,style:{marginLeft:"100px"},initialValues:{recent:null==a?void 0:a.recent,routeType:null==a?void 0:a.routeType},submitter:{render:function(e,r){return[(0,W.jsx)(Z.ZP,{type:"primary",onClick:function(){var r;null===(r=e.form)||void 0===r||r.submit()},children:"保存"},"submit")]}},onFinish:b,children:[(0,W.jsx)(z.Z,{name:"recent",label:"熟客优先",fieldProps:{onChange:function(e){console.log("checked = ".concat(e.target.checked)),p(e.target.checked)}}}),(0,W.jsx)(X.Group,{name:"routeType",label:"路由类型",options:[{label:"轮询",value:G.Jxp},{label:"当日接待最少优先",value:G.Cap},{label:"饱和度最低优先",value:G.Vdp},{label:"进行中会话最少优先",value:G.Q2z}],fieldProps:{value:k,onChange:function(e){console.log("radio checked",e.target.value),y(e.target.value)}}}),(0,W.jsxs)(S.A.Item,{children:[k===G.Jxp&&(0,W.jsx)("p",{children:"根据客服上线时间进入队列轮流分配。注意：当客服网络不稳定掉线重连之后，会重新排到队列末尾"}),k===G.Cap&&(0,W.jsx)("p",{children:"根据当日(0点开始)客服接待总数进行分配，优先分配给数量最少者。注意：假如客服上班时间不统一，晚登录者登录后会集中收到分配新客，直到跟其他在线客服接待数量相等为止"}),k===G.Vdp&&(0,W.jsx)("p",{children:"根据（客服最大接待数量-当前进行中会话数量）之差分配，优先分配给数量最大者。注意：假如每个客服最大接待数量相等，则此方法跟’进行中会话最少优先‘效果一样"}),k===G.Q2z&&(0,W.jsx)("p",{children:"根据客服当前进行中会话进行分配，优先分配给数量最少者。注意：客服接待数量会受到客服接待速度的影响，接待完毕之后，客服手动结束会话有利于加速分配新客"})]})]})})},re=t(93982),te=t(89875),ne=t(18874),se=t(66772),ae=t(9750),oe=t(13253),ie=t(57545),ue=t(90588),le=t(10187),ce=t(40574),de=t(16655),ge=t(64859),fe=t(28243),pe=function(){var e=(0,x.useIntl)(),r=(0,s.useMemo)((function(){return"opensource"===G.nGu}),[]),t=[{key:"faq",label:(0,W.jsx)(x.FormattedMessage,{id:"menu.knowledge.faq",defaultMessage:"FAQ"}),children:(0,W.jsx)(te.Z,{type:G.aZD}),disabled:r},{key:"quickFaqs",label:(0,W.jsx)(x.FormattedMessage,{id:"menu.knowledge.quickbutton",defaultMessage:"QuickButton"}),children:(0,W.jsx)(ue.Z,{type:G.aZD}),disabled:r},{key:"faqGuess",label:(0,W.jsx)(x.FormattedMessage,{id:"menu.knowledge.faqGuess",defaultMessage:"FaqGuess"}),children:(0,W.jsx)(le.Z,{type:G.aZD}),disabled:r},{key:"faqHot",label:(0,W.jsx)(x.FormattedMessage,{id:"menu.knowledge.faqHot",defaultMessage:"FaqHot"}),children:(0,W.jsx)(ne.Z,{type:G.aZD}),disabled:r},{key:"faqShortcut",label:(0,W.jsx)(x.FormattedMessage,{id:"menu.knowledge.faqShortcut",defaultMessage:"FaqShortcut"}),children:(0,W.jsx)(se.Z,{type:G.aZD}),disabled:r},{key:"rate",label:(0,W.jsx)(x.FormattedMessage,{id:"rate",defaultMessage:"Rate"}),children:(0,W.jsx)(ae.Z,{type:G.aZD}),disabled:r},{key:"leaveMsg",label:(0,W.jsx)(x.FormattedMessage,{id:"leavemsg",defaultMessage:"Leave Msg"}),children:(0,W.jsx)(oe.Z,{type:G.aZD}),disabled:r},{key:"survey",label:(0,W.jsx)(x.FormattedMessage,{id:"survey",defaultMessage:"Survey"}),children:(0,W.jsx)(fe.Z,{type:G.aZD}),disabled:r},{key:"history",label:(0,W.jsx)(x.FormattedMessage,{id:"history",defaultMessage:"History"}),children:(0,W.jsx)(ce.Z,{type:G.aZD}),disabled:r},{key:"inputassociation",label:(0,W.jsx)(x.FormattedMessage,{id:"inputassociation",defaultMessage:"Input Association"}),children:(0,W.jsx)(ge.Z,{type:G.aZD}),disabled:r},{key:"antiharassment",label:(0,W.jsx)(x.FormattedMessage,{id:"antiharassment",defaultMessage:"Anti Harassment"}),children:(0,W.jsx)(ie.Z,{type:G.aZD}),disabled:r}];return(0,W.jsxs)(W.Fragment,{children:[r&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(re.Z,{message:"企业版-高级功能",style:{marginBottom:20},type:"warning",action:(0,W.jsx)(Z.ZP,{type:"link",icon:(0,W.jsx)(de.Z,{}),onClick:function(){return window.open(G.VPj)},children:e.formatMessage({id:"setting.helpcenter"})})})}),(0,W.jsx)(U.Z,{tabPosition:"left",items:t})]})},me=t(82639),ve=t(93030),he=t(89242),ke=t(19743),ye=t(35504),xe=t(63515),be=function(){var e=(0,x.useIntl)(),r=(0,s.useState)([]),t=c()(r,2),n=t[0],a=t[1],o=[{key:"basic",label:e.formatMessage({id:"pages.robot.tab.basic",defaultMessage:"Basic"}),children:(0,W.jsx)(V,{})},{key:"serviceSettings",label:e.formatMessage({id:"pages.agent.service.settings",defaultMessage:"Service Settings"}),children:(0,W.jsx)(xe.Z,{type:G.aZD})},{key:"robot",label:e.formatMessage({id:"pages.agent.robot",defaultMessage:"Robot"}),children:(0,W.jsx)(ye.Z,{type:G.aZD})},{key:"route",label:e.formatMessage({id:"pages.workgroup.tab.route",defaultMessage:"Route"}),children:(0,W.jsx)(ee,{})},{key:"advanced",label:e.formatMessage({id:"pages.robot.tab.advanced",defaultMessage:"Advanced"}),children:(0,W.jsx)(pe,{})},{key:"channel",label:e.formatMessage({id:"pages.robot.tab.channel",defaultMessage:"Channel"}),children:(0,W.jsx)(me.Z,{type:G.aZD})},{key:"channelsocial",label:e.formatMessage({id:"channelsocial",defaultMessage:"Social Channel"}),children:(0,W.jsx)(ve.Z,{type:G.aZD})},{key:"channelshop",label:e.formatMessage({id:"channelshop",defaultMessage:"Shop Channel"}),children:(0,W.jsx)(ke.Z,{type:G.aZD})},{key:"channelforeign",label:e.formatMessage({id:"channelforeign",defaultMessage:"Foreign Channel"}),children:(0,W.jsx)(he.Z,{type:G.aZD})}];return(0,s.useEffect)((function(){a(o)}),[]),(0,W.jsx)(U.Z,{defaultActiveKey:"basic",items:n})},je=t(93139),Ze=n.Z.Sider,we=n.Z.Content,Me=function(){var e=(0,je.Z)(),r=e.leftSiderStyle,t=e.leftSiderWidth;return(0,W.jsxs)(n.Z,{children:[(0,W.jsx)(Ze,{width:t,style:r,children:(0,W.jsx)(D,{})}),(0,W.jsx)(n.Z,{children:(0,W.jsx)(we,{children:(0,W.jsx)(be,{})})})]})}}}]);