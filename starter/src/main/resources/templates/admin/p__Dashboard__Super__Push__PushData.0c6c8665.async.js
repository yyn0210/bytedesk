"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9137],{8091:function(e,n,t){var r=t(17082),o=t(51190),a=t(19753),i=t(44194),l=t(84686),u=t(5986),s=t(31549),d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=function(e,n){var t=e.fieldProps,c=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,v=e.request,m=e.showSearch,y=e.options,x=(0,o.Z)(e,d),C=(0,i.useContext)(l.Z);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(g),request:v,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:y,mode:h,showSearch:m,getPopupContainer:C.getPopupContainer},t),ref:n,proFieldProps:f},x),{},{children:c}))},f=i.forwardRef((function(e,n){var t=e.fieldProps,d=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,v=e.request,m=e.options,y=(0,o.Z)(e,c),x=(0,r.Z)({options:m,mode:h||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},t),C=(0,i.useContext)(l.Z);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(g),request:v,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:C.getPopupContainer},x),ref:n,proFieldProps:f},y),{},{children:d}))})),h=i.forwardRef(p);h.SearchSelect=f,h.displayName="ProFormComponent",n.Z=h},43688:function(e,n,t){var r=t(42601),o=t(17082),a=t(51190),i=t(66744),l=t(47807),u=t(25438),s=t(36490),d=t(44194),c=t(5986),p=t(31549),f=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],g="text",v=function(e){var n=(0,i.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),t=(0,r.Z)(n,2),a=t[0],s=t[1];return(0,p.jsx)(l.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(n){var t,r=n.getFieldValue(e.name||[]);return(0,p.jsx)(u.Z,(0,o.Z)((0,o.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return s(e)},content:(0,p.jsxs)("div",{style:{padding:"4px 0"},children:[null===(t=e.statusRender)||void 0===t?void 0:t.call(e,r),e.strengthText?(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:a,children:e.children}))}})},m=function(e){var n=e.fieldProps,t=e.proFieldProps,r=(0,a.Z)(e,f);return(0,p.jsx)(c.Z,(0,o.Z)({valueType:g,fieldProps:n,filedConfig:{valueType:g},proFieldProps:t},r))};m.Password=function(e){var n=e.fieldProps,t=e.proFieldProps,i=(0,a.Z)(e,h),l=(0,d.useState)(!1),u=(0,r.Z)(l,2),f=u[0],m=u[1];return null!=n&&n.statusRender&&i.name?(0,p.jsx)(v,{name:i.name,statusRender:null==n?void 0:n.statusRender,popoverProps:null==n?void 0:n.popoverProps,strengthText:null==n?void 0:n.strengthText,open:f,onOpenChange:m,children:(0,p.jsx)("div",{children:(0,p.jsx)(c.Z,(0,o.Z)({valueType:"password",fieldProps:(0,o.Z)((0,o.Z)({},(0,s.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var t;null==n||null===(t=n.onBlur)||void 0===t||t.call(n,e),m(!1)},onClick:function(e){var t;null==n||null===(t=n.onClick)||void 0===t||t.call(n,e),m(!0)}}),proFieldProps:t,filedConfig:{valueType:g}},i))})}):(0,p.jsx)(c.Z,(0,o.Z)({valueType:"password",fieldProps:n,proFieldProps:t,filedConfig:{valueType:g}},i))},m.displayName="ProFormComponent",n.Z=m},11607:function(e,n,t){var r=t(17082),o=t(51190),a=t(44194),i=t(5986),l=t(31549),u=["fieldProps","proFieldProps"],s=function(e,n){var t=e.fieldProps,a=e.proFieldProps,s=(0,o.Z)(e,u);return(0,l.jsx)(i.Z,(0,r.Z)({ref:n,valueType:"textarea",fieldProps:t,proFieldProps:a},s))};n.Z=a.forwardRef(s)},82445:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(73193),o=t.n(r),a=t(84176),i=t.n(a),l=t(90819),u=t.n(l),s=t(89933),d=t.n(s),c=t(45332),p=t.n(c),f=t(32078),h=t(79434);function g(e){return v.apply(this,arguments)}function v(){return(v=d()(u()().mark((function e(n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/push/query/org",{method:"GET",params:o()({},n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=t(31816),y=t(52519),x=t(12265),C=t(44194),P=t(63476),Z=t(60346),b=t(18850),w=t(5728),j=t(8091),F=t(43688),T=t(11607),S=t(47807),k=t(61411),R=t(62599),q=t(31549),E=function(e){var n=e.isEdit,t=e.quickreply,r=e.open,a=e.onClose,i=e.onSubmit,l=S.Z.useForm(),u=p()(l,1)[0],s=(0,Z.u)((function(e){return e.currentOrg})),d=(0,P.v)((function(e){return e.categorySelectOptions}));(0,C.useEffect)((function(){n||u.resetFields()}),[r]);return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(k.Z,{title:n?"修改":"新建",onClose:a,open:r,extra:(0,q.jsxs)(R.Z,{children:[(0,q.jsx)(x.ZP,{onClick:a,children:"取消"}),(0,q.jsx)(x.ZP,{onClick:function(){console.log("handleSubmit"),u.validateFields().then((function(e){console.log(e),i(o()(o()(o()({},t),e),{},{orgUid:null==s?void 0:s.uid}))})).catch((function(e){console.log("Form errors:",e),f.yw.error("请检查表单填写")}))},type:"primary",children:"保存"})]}),children:(0,q.jsxs)(w.A,{form:u,initialValues:o()({},t),submitter:{render:function(){return null}},children:[(0,q.jsx)(j.Z,{label:"分类",name:"categoryUid",rules:[{required:!0,message:"请选择分类"}],options:d,fieldProps:{allowClear:!0,placeholder:"请选择分类",onChange:function(e){console.log("category selected ".concat(e))}}}),(0,q.jsx)(j.Z,{label:"类型",name:"type",rules:[{required:!0,message:"请选择类型"}],options:[{label:"文本",value:b.PYi},{label:"图片",value:b.Qm,disabled:!0},{label:"视频",value:b.tVi,disabled:!0},{label:"音频",value:b.Yu1,disabled:!0},{label:"文件",value:b.Qn,disabled:!0}],fieldProps:{allowClear:!0,placeholder:"请选择类型",onChange:function(e){console.log("type selected ".concat(e))}}}),(0,q.jsx)(F.Z,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}]}),(0,q.jsx)(T.Z,{label:"内容",name:"content"})]})})})},I=["current"],M=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"发送者",dataIndex:"sender",copyable:!0},{title:"验证码/内容",dataIndex:"content",copyable:!0},{title:"手机号/接收者",dataIndex:"receiver",copyable:!0},{title:"类型",dataIndex:"type"},{title:"状态",dataIndex:"status"},{title:"发送时间",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0,width:180}],O=function(){var e=(0,h.useIntl)(),n=(0,C.useRef)(),t=(0,C.useState)(!0),r=p()(t,2),a=r[0],l=r[1],s=(0,C.useState)(),c=p()(s,2),v=c[0],Z=c[1],b=(0,C.useState)(!1),w=p()(b,2),j=w[0],F=w[1],T=[].concat(M,[{title:e.formatMessage({id:"actions"}),valueType:"option",key:"option",width:100,render:function(n,t,r,o){return[(0,q.jsx)("a",{onClick:function(){R(t)},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),S=(0,P.v)((function(e){return e.currentCategory})),k=function(){Z(void 0),l(!1),F(!0)},R=function(e){Z(e),l(!0),F(!0)},O=function(){var e=d()(u()().mark((function e(n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleSubmitDrawer",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,C.useEffect)((function(){var e;console.log("currentCategory:",S),null===(e=n.current)||void 0===e||e.reloadAndRest()}),[S]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y.Z,{columns:T,actionRef:n,cardBordered:!0,request:function(){var n=d()(u()().mark((function n(t,r,a){var l,s,d;return u()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("request:",t,r,a),f.yw.loading(e.formatMessage({id:"loading",defaultMessage:"Loading"})),t.current,l=i()(t,I),s=o()({pageNumber:t.current-1},l),n.next=6,g(s);case 6:return d=n.sent,console.log("getAllPushs response:",s,d),f.yw.destroy(),200===d.code||f.yw.error(d.message),n.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"推送/短信",toolBarRender:function(){return[(0,q.jsx)(x.ZP,{icon:(0,q.jsx)(m.Z,{}),type:"primary",onClick:k,children:e.formatMessage({id:"create",defaultMessage:"Create"})},"button")]}}),(0,q.jsx)(E,{isEdit:a,open:j,quickreply:v,onClose:function(){F(!1)},onSubmit:O})]})},A=function(){return(0,q.jsx)("div",{children:(0,q.jsx)(O,{})})}},63476:function(e,n,t){t.d(n,{v:function(){return c}});var r=t(76711),o=t.n(r),a=t(73193),i=t.n(a),l=t(18850),u=t(39701),s=t(83642),d=t(41617),c=(0,u.Ue)()((0,s.mW)((0,s.tJ)((0,d.n)((function(e,n){return{categoryResult:{data:{content:[]}},categoryTreeOptions:[],categorySelectOptions:[],currentCategory:{uid:""},setCategoryResult:function(n){var t,r=function(e){var n=[];return e.data.content.forEach((function(e){var t={label:e.name,value:e.uid};n.push(t)})),n}(n),a=i()(i()({},n),{},{data:{content:[{uid:"all",name:"All"}].concat(o()(n.data.content))}}),l=function(e){var n=[];return e.data.content.forEach((function(e){var t={title:e.name,key:e.uid,children:[]};e.children&&Array.isArray(e.children)&&(t.children=e.children.map((function(e){return{title:e.name,key:e.uid,children:[]}}))),n.push(t)})),n}(a);e({categoryResult:a,categoryTreeOptions:l,categorySelectOptions:r}),(null===(t=n.data)||void 0===t||null===(t=t.content)||void 0===t?void 0:t.length)>0?e({currentCategory:n.data.content[0]}):e({currentCategory:{uid:""}})},insertCategory:function(n){e((function(e){e.categoryResult.data.content.unshift(n)}))},upgradeCategory:function(n){e((function(e){var t=e.categoryResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t[r]=n:console.warn("Category with uid ".concat(n.uid," not found."))}))},setCurrentCategory:function(n){e({currentCategory:n})},setCurrentCategoryUid:function(t){var r=n().categoryResult.data.content.find((function(e){return e.uid===t}));e({currentCategory:r})},deleteCategoryCache:function(){return e({},!0)}}})),{name:l.OMm})))}}]);