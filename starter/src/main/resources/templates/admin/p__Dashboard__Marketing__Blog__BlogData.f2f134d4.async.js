"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2647],{50484:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(17082),o=n(44194),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=n(64423),l=function(e,t){return o.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(l)},8091:function(e,t,n){var r=n(17082),o=n(51190),a=n(19753),s=n(44194),l=n(84686),i=n(5986),u=n(31549),c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=function(e,t){var n=e.fieldProps,d=e.children,p=e.params,f=e.proFieldProps,g=e.mode,m=e.valueEnum,y=e.request,h=e.showSearch,v=e.options,x=(0,o.Z)(e,c),w=(0,s.useContext)(l.Z);return(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(m),request:y,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:v,mode:g,showSearch:h,getPopupContainer:w.getPopupContainer},n),ref:t,proFieldProps:f},x),{},{children:d}))},f=s.forwardRef((function(e,t){var n=e.fieldProps,c=e.children,p=e.params,f=e.proFieldProps,g=e.mode,m=e.valueEnum,y=e.request,h=e.options,v=(0,o.Z)(e,d),x=(0,r.Z)({options:h,mode:g||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},n),w=(0,s.useContext)(l.Z);return(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(m),request:y,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:w.getPopupContainer},x),ref:t,proFieldProps:f},v),{},{children:c}))})),g=s.forwardRef(p);g.SearchSelect=f,g.displayName="ProFormComponent",t.Z=g},43688:function(e,t,n){var r=n(42601),o=n(17082),a=n(51190),s=n(66744),l=n(47807),i=n(25438),u=n(36490),c=n(44194),d=n(5986),p=n(31549),f=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],m="text",y=function(e){var t=(0,s.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),n=(0,r.Z)(t,2),a=n[0],u=n[1];return(0,p.jsx)(l.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(t){var n,r=t.getFieldValue(e.name||[]);return(0,p.jsx)(i.Z,(0,o.Z)((0,o.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return u(e)},content:(0,p.jsxs)("div",{style:{padding:"4px 0"},children:[null===(n=e.statusRender)||void 0===n?void 0:n.call(e,r),e.strengthText?(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:a,children:e.children}))}})},h=function(e){var t=e.fieldProps,n=e.proFieldProps,r=(0,a.Z)(e,f);return(0,p.jsx)(d.Z,(0,o.Z)({valueType:m,fieldProps:t,filedConfig:{valueType:m},proFieldProps:n},r))};h.Password=function(e){var t=e.fieldProps,n=e.proFieldProps,s=(0,a.Z)(e,g),l=(0,c.useState)(!1),i=(0,r.Z)(l,2),f=i[0],h=i[1];return null!=t&&t.statusRender&&s.name?(0,p.jsx)(y,{name:s.name,statusRender:null==t?void 0:t.statusRender,popoverProps:null==t?void 0:t.popoverProps,strengthText:null==t?void 0:t.strengthText,open:f,onOpenChange:h,children:(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,(0,o.Z)({valueType:"password",fieldProps:(0,o.Z)((0,o.Z)({},(0,u.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var n;null==t||null===(n=t.onBlur)||void 0===n||n.call(t,e),h(!1)},onClick:function(e){var n;null==t||null===(n=t.onClick)||void 0===n||n.call(t,e),h(!0)}}),proFieldProps:n,filedConfig:{valueType:m}},s))})}):(0,p.jsx)(d.Z,(0,o.Z)({valueType:"password",fieldProps:t,proFieldProps:n,filedConfig:{valueType:m}},s))},h.displayName="ProFormComponent",t.Z=h},11607:function(e,t,n){var r=n(17082),o=n(51190),a=n(44194),s=n(5986),l=n(31549),i=["fieldProps","proFieldProps"],u=function(e,t){var n=e.fieldProps,a=e.proFieldProps,u=(0,o.Z)(e,i);return(0,l.jsx)(s.Z,(0,r.Z)({ref:t,valueType:"textarea",fieldProps:n,proFieldProps:a},u))};t.Z=a.forwardRef(u)},46989:function(e,t,n){n.d(t,{BF:function(){return d},Vh:function(){return f},zZ:function(){return m}});var r=n(90819),o=n.n(r),a=n(73193),s=n.n(a),l=n(89933),i=n.n(l),u=n(18850),c=n(79434);function d(e){return p.apply(this,arguments)}function p(){return(p=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/blog/query/org",{method:"GET",params:s()(s()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/blog/create",{method:"POST",data:s()(s()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/blog/update",{method:"POST",data:s()(s()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},92543:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(90819),o=n.n(r),a=n(89933),s=n.n(a),l=n(45332),i=n.n(l),u=n(50484),c=n(83730),d=n(80093),p=n(12265),f=n(38227),g=n(40751),m=n(5634),y=n(44194),h=n(6965),v=n(60346),x=n(32078),w=n(63476),C=n(79720),Z=n(79434),b=n(85495),j=n(31549),P=function(e){var t=e.type,n=(0,Z.useIntl)(),r=(0,y.useState)(!0),a=i()(r,2),l=a[0],P=a[1],S=(0,v.u)((function(e){return e.currentOrg})),M=(0,b.j)((function(e){return e.currentKbase})),k=(0,y.useState)(!1),F=i()(k,2),T=F[0],O=F[1],E=(0,w.v)((function(e){return{categoryTreeOptions:e.categoryTreeOptions,setCategoryResult:e.setCategoryResult,currentCategory:e.currentCategory,setCurrentCategoryUid:e.setCurrentCategoryUid}})),R=E.categoryTreeOptions,I=E.setCategoryResult,$=E.currentCategory,q=E.setCurrentCategoryUid,N=(0,C.Z)(),A=N.translateString,V=N.translateStringTranct,B=c.Z.useModal(),U=i()(B,2),z=U[0],G=U[1],L=function(){var e=s()(o()().mark((function e(t){var r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("handleSubmit: ",t),l?x.yw.loading(n.formatMessage({id:"updating"})):x.yw.loading(n.formatMessage({id:"creating"})),!l){e.next=8;break}return e.next=5,(0,h.yr)(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,(0,h.k4)(t);case 10:e.t0=e.sent;case 11:r=e.t0,console.log("createCategory response: ",r),200===r.code?(x.yw.destroy(),l?x.yw.success(n.formatMessage({id:"update.success"})):x.yw.success(n.formatMessage({id:"create.success"})),O(!1),D()):(x.yw.destroy(),x.yw.error(r.message));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=s()(o()().mark((function e(){var r,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getCategories"),x.yw.success(n.formatMessage({id:"loading"})),r={pageNumber:0,pageSize:50,type:t,kbUid:null==M?void 0:M.uid,orgUid:null==S?void 0:S.uid},e.next=5,(0,h.XS)(r);case 5:a=e.sent,console.log("queryCategories response: ",a),200===a.code?(I(a),x.yw.destroy()):(x.yw.destroy(),x.yw.error(a.message));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=s()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleEditCategory: ",$),P(!0),O(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=s()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleDeleteCategory: ",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,y.useEffect)((function(){D()}),[M]);return(0,j.jsxs)("div",{children:[(0,j.jsxs)(d.Z,{gap:"small",wrap:"wrap",style:{marginBottom:5},children:[(0,j.jsx)(p.ZP,{type:"primary",size:"small",onClick:function(){P(!1),O(!0)},disabled:(null==M?void 0:M.type)!=t,children:n.formatMessage({id:"create"})}),""!==(null==$?void 0:$.uid)&&"all"!==(null==$?void 0:$.uid)&&(0,j.jsx)(p.ZP,{size:"small",onClick:K,children:n.formatMessage({id:"edit"})}),""!==(null==$?void 0:$.uid)&&"all"!==(null==$?void 0:$.uid)&&(0,j.jsx)(p.ZP,{onClick:function(){return function(e){z.confirm({title:n.formatMessage({id:"deleteTip"}),icon:(0,j.jsx)(u.Z,{}),content:"".concat(n.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(A(e.name),"】？"),onOk:function(){Q(e)},onCancel:function(){},okText:n.formatMessage({id:"ok"}),cancelText:n.formatMessage({id:"cancel"})})}($)},size:"small",style:{float:"right"},danger:!0,children:n.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,j.jsx)(f.Z,{defaultSelectedKeys:[null==$?void 0:$.uid],onSelect:function(e,t){console.log("selected",e,t),0!==e.length&&q(e[0].toString())},treeData:R,blockNode:!0,titleRender:function(e){return(0,j.jsx)(g.Z,{title:A(e.title),children:V(e.title)})}}),T&&(0,j.jsx)(m.Z,{open:T,type:t,isEdit:l,onCancel:function(){O(!1)},onSubmit:L}),G]})}},92454:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(66964),o=n(64476),a=n(73193),s=n.n(a),l=n(84176),i=n.n(l),u=n(90819),c=n.n(u),d=n(89933),p=n.n(d),f=n(45332),g=n.n(f),m=n(32078),y=n(46989),h=n(60346),v=n(31816),x=n(52519),w=n(12265),C=n(44194),Z=n(63476),b=n(18850),j=n(5728),P=n(8091),S=n(43688),M=n(11607),k=n(47807),F=n(61411),T=n(62599),O=n(31549),E=function(e){var t=e.isEdit,n=e.blog,r=e.open,o=e.onClose,a=e.onSubmit,l=k.Z.useForm(),i=g()(l,1)[0],u=(0,h.u)((function(e){return e.currentOrg})),c=(0,Z.v)((function(e){return e.categorySelectOptions}));(0,C.useEffect)((function(){var e;t?i.setFieldsValue({type:null==n?void 0:n.type,title:null==n?void 0:n.title,content:null==n?void 0:n.content,categoryUid:null==n||null===(e=n.category)||void 0===e?void 0:e.uid}):i.resetFields()}),[r]);return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(F.Z,{title:t?"修改":"新建",onClose:o,open:r,extra:(0,O.jsxs)(T.Z,{children:[(0,O.jsx)(w.ZP,{onClick:o,children:"取消"}),(0,O.jsx)(w.ZP,{onClick:function(){console.log("handleSubmit"),i.validateFields().then((function(e){console.log(e),a(s()(s()(s()({},n),e),{},{orgUid:null==u?void 0:u.uid}))})).catch((function(e){console.log("Form errors:",e),m.yw.error("请检查表单填写")}))},type:"primary",children:"保存"})]}),children:(0,O.jsxs)(j.A,{form:i,initialValues:s()({},n),submitter:{render:function(){return null}},children:[(0,O.jsx)(P.Z,{label:"分类",name:"categoryUid",rules:[{required:!0,message:"请选择分类"}],options:c,fieldProps:{allowClear:!0,placeholder:"请选择分类",onChange:function(e){console.log("category selected ".concat(e))}}}),(0,O.jsx)(P.Z,{label:"类型",name:"type",rules:[{required:!0,message:"请选择类型"}],options:[{label:"文本",value:b.PYi},{label:"图片",value:b.Qm,disabled:!0},{label:"视频",value:b.tVi,disabled:!0},{label:"音频",value:b.Yu1,disabled:!0},{label:"文件",value:b.Qn,disabled:!0}],fieldProps:{allowClear:!0,placeholder:"请选择类型",onChange:function(e){console.log("type selected ".concat(e))}}}),(0,O.jsx)(S.Z,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}]}),(0,O.jsx)(M.Z,{label:"内容",name:"content"})]})})})},R=n(79434),I=["current"],$=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,O.jsx)(R.FormattedMessage,{id:"title",defaultMessage:"Title"}),dataIndex:"title",copyable:!0},{title:(0,O.jsx)(R.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content"},{title:(0,O.jsx)(R.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInSearch:!0},{title:(0,O.jsx)(R.FormattedMessage,{id:"category",defaultMessage:"Category"}),dataIndex:"category",hideInSearch:!0,render:function(e,t){var n;return null===(n=t.category)||void 0===n?void 0:n.name}},{title:(0,O.jsx)(R.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0,width:180}],q=function(){var e=(0,R.useIntl)(),t=(0,C.useRef)(),n=(0,C.useState)(!0),r=g()(n,2),o=r[0],a=r[1],l=(0,C.useState)(),u=g()(l,2),d=u[0],f=u[1],b=(0,C.useState)(!1),j=g()(b,2),P=j[0],S=j[1],M=(0,h.u)((function(e){return e.currentOrg})),k=[].concat($,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:100,render:function(t,n,r,o){return[(0,O.jsx)("a",{onClick:function(){T(n)},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),F=(0,Z.v)((function(e){return e.currentCategory})),T=function(e){f(e),a(!0),S(!0)},q=function(){var n=p()(c()().mark((function n(r){var a,s;return c()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("handleSubmitDrawer",r),o?m.yw.loading(e.formatMessage({id:"updating"})):m.yw.loading(e.formatMessage({id:"creating"})),!o){n.next=8;break}return n.next=5,(0,y.zZ)(r);case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,(0,y.Vh)(r);case 10:n.t0=n.sent;case 11:a=n.t0,console.log("createBlog response:",r,a),200===a.code?(m.yw.destroy(),m.yw.loading(e.formatMessage({id:"create.success"})),S(!1),null===(s=t.current)||void 0===s||s.reloadAndRest()):(m.yw.destroy(),m.yw.error(a.message));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();(0,C.useEffect)((function(){var e;console.log("currentCategory:",F),null===(e=t.current)||void 0===e||e.reloadAndRest()}),[F]);var N=function(){console.log("handleRichEditor"),window.open("/admin/doceditor")};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Z,{columns:k,actionRef:t,cardBordered:!0,request:function(){var t=p()(c()().mark((function t(n,r,o){var a,l,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request:",n,r,o),m.yw.loading(e.formatMessage({id:"loading",defaultMessage:"Loading"})),n.current,a=i()(n,I),l=s()({pageNumber:n.current-1,orgUid:M.uid,categoryUid:"all"===F.uid?"":F.uid},a),t.next=6,(0,y.BF)(l);case 6:return u=t.sent,console.log("getAllBlogs response:",l,u),m.yw.destroy(),200===u.code||m.yw.error(u.message),t.abrupt("return",{data:u.data.content,success:!0,total:u.data.totalElements});case 11:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"AI生成，并同步到各大社交媒体",toolBarRender:function(){return[(0,O.jsx)(w.ZP,{icon:(0,O.jsx)(v.Z,{}),type:"primary",onClick:N,children:e.formatMessage({id:"create",defaultMessage:"Create"})},"button")]}}),(0,O.jsx)(E,{isEdit:o,open:P,blog:d,onClose:function(){S(!1)},onSubmit:q})]})},N=n(92543),A=o.Z.Sider,V=o.Z.Content,B=function(){var e=(0,r.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,O.jsx)("div",{children:(0,O.jsxs)(o.Z,{children:[(0,O.jsx)(A,{style:t,children:(0,O.jsx)(N.Z,{type:b.qAy})}),(0,O.jsx)(o.Z,{children:(0,O.jsx)(V,{style:n,children:(0,O.jsx)(q,{})})})]})})}},80093:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(44194),o=n(51865),a=n.n(o),s=n(82252),l=n(74511),i=n(19735),u=n(2645),c=n(53681);const d=["wrap","nowrap","wrap-reverse"],p=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],f=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var g=function(e,t){return a()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&d.includes(n)}})(e,t)),((e,t)=>{const n={};return f.forEach((r=>{n[`${e}-align-${r}`]=t.align===r})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n})(e,t)),((e,t)=>{const n={};return p.forEach((r=>{n[`${e}-justify-${r}`]=t.justify===r})),n})(e,t)))};const m=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},y=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},h=e=>{const{componentCls:t}=e,n={};return d.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},v=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},x=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var w=(0,u.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,o=(0,c.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[m(o),y(o),h(o),v(o),x(o)]}),(()=>({})),{resetStyle:!1}),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Z=r.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:o,className:u,style:c,flex:d,gap:p,children:f,vertical:m=!1,component:y="div"}=e,h=C(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:v,direction:x,getPrefixCls:Z}=r.useContext(i.E_),b=Z("flex",n),[j,P,S]=w(b),M=null!=m?m:null==v?void 0:v.vertical,k=a()(u,o,null==v?void 0:v.className,b,P,S,g(b,e),{[`${b}-rtl`]:"rtl"===x,[`${b}-gap-${p}`]:(0,l.n)(p),[`${b}-vertical`]:M}),F=Object.assign(Object.assign({},null==v?void 0:v.style),c);return d&&(F.flex=d),p&&!(0,l.n)(p)&&(F.gap=p),j(r.createElement(y,Object.assign({ref:t,className:k,style:F},(0,s.Z)(h,["justify","wrap","align"])),f))}));var b=Z}}]);