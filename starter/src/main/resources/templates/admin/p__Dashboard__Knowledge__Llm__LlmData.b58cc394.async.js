"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[4167],{50484:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(17082),o=n(44194),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=n(64423),l=function(e,t){return o.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(l)},60051:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(17082),o=n(44194),a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},s=n(64423),l=function(e,t){return o.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(l)},8091:function(e,t,n){var r=n(17082),o=n(51190),a=n(19753),s=n(44194),l=n(84686),i=n(39647),c=n(31549),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],f=function(e,t){var n=e.fieldProps,d=e.children,f=e.params,p=e.proFieldProps,g=e.mode,m=e.valueEnum,h=e.request,y=e.showSearch,v=e.options,x=(0,o.Z)(e,u),w=(0,s.useContext)(l.Z);return(0,c.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(m),request:h,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:v,mode:g,showSearch:y,getPopupContainer:w.getPopupContainer},n),ref:t,proFieldProps:p},x),{},{children:d}))},p=s.forwardRef((function(e,t){var n=e.fieldProps,u=e.children,f=e.params,p=e.proFieldProps,g=e.mode,m=e.valueEnum,h=e.request,y=e.options,v=(0,o.Z)(e,d),x=(0,r.Z)({options:y,mode:g||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},n),w=(0,s.useContext)(l.Z);return(0,c.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,a.h)(m),request:h,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:w.getPopupContainer},x),ref:t,proFieldProps:p},v),{},{children:u}))})),g=s.forwardRef(f);g.SearchSelect=p,g.displayName="ProFormComponent",t.Z=g},33581:function(e,t,n){n.d(t,{HZ:function(){return g},RR:function(){return u},yL:function(){return f}});var r=n(90819),o=n.n(r),a=n(73193),s=n.n(a),l=n(89933),i=n.n(l),c=n(82045);function u(e){return d.apply(this,arguments)}function d(){return(d=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/upload/query/org",{method:"GET",params:s()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/upload/process",{method:"POST",data:s()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/upload/delete",{method:"POST",data:s()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},47227:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(90819),o=n.n(r),a=n(89933),s=n.n(a),l=n(45332),i=n.n(l),c=n(50484),u=n(83730),d=n(80093),f=n(12265),p=n(38227),g=n(40751),m=n(56913),h=n(44194),y=n(72272),v=n(40431),x=n(89756),w=n(26305),C=n(1780),b=n(82045),j=n(57024),Z=n(31549),M=function(e){var t=e.type,n=(0,b.useIntl)(),r=(0,h.useState)(!0),a=i()(r,2),l=a[0],M=a[1],S=(0,v.u)((function(e){return e.currentOrg})),k=(0,j.j)((function(e){return e.currentKbase})),P=(0,h.useState)(!1),E=i()(P,2),O=E[0],I=E[1],T=(0,w.v)((function(e){return{categoryTreeOptions:e.categoryTreeOptions,setCategoryResult:e.setCategoryResult,currentCategory:e.currentCategory,setCurrentCategoryUid:e.setCurrentCategoryUid}})),U=T.categoryTreeOptions,R=T.setCategoryResult,N=T.currentCategory,D=T.setCurrentCategoryUid,$=(0,C.Z)(),F=$.translateString,_=$.translateStringTranct,z=u.Z.useModal(),L=i()(z,2),q=L[0],V=L[1],A=function(){var e=s()(o()().mark((function e(t){var r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("handleSubmit: ",t),l?x.yw.loading(n.formatMessage({id:"updating"})):x.yw.loading(n.formatMessage({id:"creating"})),!l){e.next=8;break}return e.next=5,(0,y.yr)(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,(0,y.k4)(t);case 10:e.t0=e.sent;case 11:r=e.t0,console.log("createCategory response: ",r),200===r.code?(x.yw.destroy(),l?x.yw.success(n.formatMessage({id:"update.success"})):x.yw.success(n.formatMessage({id:"create.success"})),I(!1),G()):(x.yw.destroy(),x.yw.error(r.message));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=s()(o()().mark((function e(){var r,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getCategories"),x.yw.success(n.formatMessage({id:"loading"})),r={pageNumber:0,pageSize:50,type:t,kbUid:null==k?void 0:k.uid,orgUid:null==S?void 0:S.uid},e.next=5,(0,y.XS)(r);case 5:a=e.sent,console.log("queryCategories response: ",a),200===a.code?(R(a),x.yw.destroy()):(x.yw.destroy(),x.yw.error(a.message));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=s()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleEditCategory: ",N),M(!0),I(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=s()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleDeleteCategory: ",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){G()}),[k]);return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(d.Z,{gap:"small",wrap:"wrap",style:{marginBottom:5},children:[(0,Z.jsx)(f.ZP,{type:"primary",size:"small",onClick:function(){M(!1),I(!0)},disabled:(null==k?void 0:k.type)!=t,children:n.formatMessage({id:"create"})}),""!==(null==N?void 0:N.uid)&&"all"!==(null==N?void 0:N.uid)&&(0,Z.jsx)(f.ZP,{size:"small",onClick:Q,children:n.formatMessage({id:"edit"})}),""!==(null==N?void 0:N.uid)&&"all"!==(null==N?void 0:N.uid)&&(0,Z.jsx)(f.ZP,{onClick:function(){return function(e){q.confirm({title:n.formatMessage({id:"deleteTip"}),icon:(0,Z.jsx)(c.Z,{}),content:"".concat(n.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(F(e.name),"】？"),onOk:function(){K(e)},onCancel:function(){},okText:n.formatMessage({id:"ok"}),cancelText:n.formatMessage({id:"cancel"})})}(N)},size:"small",style:{float:"right"},danger:!0,children:n.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,Z.jsx)(p.Z,{defaultSelectedKeys:[null==N?void 0:N.uid],onSelect:function(e,t){console.log("selected",e,t),0!==e.length&&D(e[0].toString())},treeData:U,blockNode:!0,titleRender:function(e){return(0,Z.jsx)(g.Z,{title:F(e.title),children:_(e.title)})}}),O&&(0,Z.jsx)(m.Z,{open:O,type:t,isEdit:l,onCancel:function(){I(!1)},onSubmit:A}),V]})}},36213:function(e,t,n){var r=n(73193),o=n.n(r),a=n(45332),s=n.n(a),l=n(83730),i=n(44194),c=n(60051),u=n(17433),d=n(28977),f=n.n(d),p=n(77667),g=n(89756),m=n(57024),h=n(26305),y=n(33934),v=n(31549),x=u.Z.Dragger;t.Z=function(e){var t=e.type,n=e.acceptType,r=e.isModalOpen,a=e.handleOk,u=e.handleCancel,d=(0,m.j)((function(e){return e.currentKbase})),w=(0,i.useState)((null==d?void 0:d.uid)||""),C=s()(w,2),b=C[0],j=C[1],Z=(0,h.v)((function(e){return e.currentCategory})),M=(0,i.useState)("当前支持上传pdf/txt/markdown/docx等"),S=s()(M,2),k=S[0],P=S[1],E=(0,i.useState)({file:void 0,file_name:"test.pdf",file_type:"application/pdf",is_avatar:"false",kb_type:t,category_uid:"all"===(null==Z?void 0:Z.uid)?"":(null==Z?void 0:Z.uid)||"",kb_uid:(null==d?void 0:d.uid)||"",client:p.bVn}),O=s()(E,2),I=O[0],T=O[1],U={name:"file",accept:n,action:(0,y.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(p.LA8)},data:I,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload before",e,b,d);var n=f()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;I.file=e,I.file_name=n,I.file_type=e.type,I.kb_type=t,I.kb_uid=b,console.log("beforeUpload after",I)},onChange:function(e){"uploading"===e.file.status&&g.yw.loading("".concat(e.file.name," 上传中")),"done"===e.file.status?(console.log("response: ",e.file.response),200===e.file.response.code?(g.yw.destroy(),g.yw.success("".concat(e.file.name," 上传成功")),a()):(g.yw.destroy(),g.yw.error("".concat(e.file.name," 上传失败")),u())):"error"===e.file.status&&(g.yw.error("".concat(e.file.name," 上传失败")),u())},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}},R=(0,i.useState)(U),N=s()(R,2),D=N[0],$=N[1];return(0,i.useEffect)((function(){m.j.subscribe((function(e,t){var n,r;console.log("useKbaseStore changed:",null==e||null===(n=e.currentKbase)||void 0===n?void 0:n.uid),j(null==e||null===(r=e.currentKbase)||void 0===r?void 0:r.uid),$(U)}))}),[d]),(0,i.useEffect)((function(){t!=p.QPQ&&($(U),P("当前支持上传excel文件")),T(o()(o()({},I),{},{kb_type:t,category_uid:"all"===(null==Z?void 0:Z.uid)?"":null==Z?void 0:Z.uid})),$(U)}),[t,Z]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l.Z,{title:"上传文件",open:r,onOk:a,onCancel:u,children:(0,v.jsxs)(x,o()(o()({},D),{},{children:[(0,v.jsx)("p",{className:"ant-upload-drag-icon",children:(0,v.jsx)(c.Z,{})}),(0,v.jsx)("p",{className:"ant-upload-text",children:"点击或拖拽文件至此处实现上传"}),(0,v.jsx)("p",{className:"ant-upload-hint",children:k})]}))})})}},34124:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(93139),o=n(64476),a=n(77667),s=n(47227),l=n(45332),i=n.n(l),c=n(44194),u=n(50571),d=n(82045),f=n(73193),p=n.n(f),g=n(84176),m=n.n(g),h=n(90819),y=n.n(h),v=n(89933),x=n.n(v),w=n(89756),C=n(33581),b=n(1780),j=n(57024),Z=n(40431),M=n(22509),S=n(33934),k=n(61411),P=n(62599),E=n(12265),O=n(52852),I=n(31549),T=function(e){var t=e.type,n=e.open,r=e.onClose,o=(0,b.Z)().translateString,a=(0,j.j)((function(e){return e.currentKbase})),s=(0,M.L)((function(e){return e.userInfo})),l=(0,Z.u)((function(e){return e.currentOrg})),u=(0,c.useState)(""),d=i()(u,2),f=d[0],p=d[1],g=(0,c.useState)(!1),m=i()(g,2),h=m[0],y=m[1],v=function(){console.log("refresh"),y(!1);var e=(0,S.Cn)()+"?org="+encodeURIComponent(null==l?void 0:l.uid)+"&t="+encodeURIComponent(t)+"&sid="+encodeURIComponent(null==a?void 0:a.uid)+"&uid="+encodeURIComponent(null==s?void 0:s.uid)+"&nickname="+encodeURIComponent(null==s?void 0:s.nickname)+"&avatar="+encodeURIComponent(null==s?void 0:s.avatar)+"&navbar=0&"+(new Date).getTime();p(e)};(0,c.useEffect)((function(){v()}),[a]);return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(k.Z,{title:o(null==a?void 0:a.name),onClose:function(){r&&r()},open:n,extra:(0,I.jsxs)(P.Z,{children:[(0,I.jsx)(E.ZP,{onClick:function(){window.open(f)},children:"新窗口"}),(0,I.jsx)(E.ZP,{onClick:function(){console.log("restart"),v()},type:"primary",children:"重新开始"})]}),styles:{body:{padding:0}},children:[(0,I.jsx)(O.Z,{spinning:!h,style:{position:"absolute",width:"100%",zIndex:1001},size:"large"}),(0,I.jsx)("iframe",{id:"chat-iframe",src:f,title:"demo",width:"100%",height:"100%",style:{border:0},"data-loaded":"true",onLoad:function(){y(!0),console.log("Iframe loaded successfully!")}})]})})},U=n(36213),R=n(26305),N=n(39208),D=n(31816),$=n(52519),F=n(46639),_=["current"],z=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,I.jsx)(d.FormattedMessage,{id:"fileName",defaultMessage:"fileName"}),dataIndex:"fileName"},{title:(0,I.jsx)(d.FormattedMessage,{id:"fileType",defaultMessage:"fileType"}),dataIndex:"fileType",hideInSearch:!0},{title:(0,I.jsx)(d.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,I.jsx)(d.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",width:200,hideInSearch:!0}],L=function(){var e=(0,d.useIntl)(),t=(0,c.useRef)(),n=(0,Z.u)((function(e){return e.currentOrg})),r=(0,j.j)((function(e){return e.currentKbase})),o=(0,R.v)((function(e){return e.currentCategory})),s=(0,c.useState)(!1),l=i()(s,2),u=l[0],f=l[1],g=(0,c.useState)(!1),h=i()(g,2),v=h[0],b=h[1],M=function(){var n=x()(y()().mark((function n(r){var o;return y()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("process",r),n.next=3,(0,C.yL)(r);case 3:o=n.sent,console.log("process response",o),200===o.code?(null==t||t.current.reload(),w.yw.success(e.formatMessage({id:"process.success",defaultMessage:"Process Success"}))):w.yw.error(e.formatMessage({id:"process.fail",defaultMessage:"Process Error"}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),S=function(){var n=x()(y()().mark((function n(r){var o;return y()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.next=3,(0,C.HZ)(r);case 3:o=n.sent,console.log("delete response:",o),200===o.code?(null==t||t.current.reload(),w.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete Success"}))):w.yw.error(e.formatMessage({id:"delete.error",defaultMessage:"Delete Error"}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=[].concat(z,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:150,render:function(t,n,r,o){return[(0,I.jsx)("a",{onClick:function(){var e=null==n?void 0:n.fileUrl,t=encodeURIComponent(e);window.open(decodeURIComponent(t))},children:e.formatMessage({id:"open",defaultMessage:"Open"})},"editable"),(0,I.jsx)("a",{onClick:function(){M(n)},children:"处理"},"status"),(0,I.jsx)(F.Z,{title:e.formatMessage({id:"deleteTip",defaultMessage:"Delete Tip"}),description:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(null==n?void 0:n.fileName,"】？"),onConfirm:function(){return S(n)},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"}),children:(0,I.jsx)(E.ZP,{size:"small",type:"link",danger:!0,children:e.formatMessage({id:"delete",defaultMessage:"Delete"})})},"delete")]}}]);(0,c.useEffect)((function(){var e;null==t||null===(e=t.current)||void 0===e||e.reload()}),[r,o]),(0,c.useEffect)((function(){return N.Z.on(a.YwV,(function(e){var n;console.log("EVENT_BUS_MQTT_NOTICE",e),null==t||null===(n=t.current)||void 0===n||n.reload()})),function(){N.Z.off(a.YwV)}}),[]);var P=(0,c.useMemo)((function(){return(null==r?void 0:r.type)!==a.QPQ||""===(null==r?void 0:r.uid)}),[r]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)($.Z,{columns:k,actionRef:t,cardBordered:!0,request:function(){var e=x()(y()().mark((function e(t,a,s){var l,i,c;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,a,s),t.current,l=m()(t,_),i=p()({pageNumber:t.current-1,categoryUid:"all"===(null==o?void 0:o.uid)?"":null==o?void 0:o.uid,kbUid:null==r?void 0:r.uid,orgUid:null==n?void 0:n.uid},l),e.next=5,(0,C.RR)(i);case 5:return c=e.sent,console.log("getAllUploads response:",c),200===c.code||w.yw.error(c.message),e.abrupt("return",{data:c.data.content,success:!0,total:c.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"文档",toolBarRender:function(){return[!1,(0,I.jsx)(E.ZP,{icon:(0,I.jsx)(D.Z,{}),type:"primary",onClick:function(){return f(!0)},disabled:P,children:e.formatMessage({id:"upload",defaultMessage:"Upload"})},"button")]}}),u&&(0,I.jsx)(U.Z,{type:a.QPQ,acceptType:"*",isModalOpen:u,handleOk:function(){console.log("handleUploadDragSubmit"),f(!1),null==t||t.current.reload()},handleCancel:function(){console.log("handleUploadDragCancel"),f(!1),null==t||t.current.reload()}}),v&&(0,I.jsx)(T,{type:a.xtN,open:v,onClose:function(){return b(!1)}})]})},q=function(){var e=[{key:"file",label:(0,d.useIntl)().formatMessage({id:"pages.robot.kb.file",defaultMessage:"File"}),children:(0,I.jsx)(L,{})}],t=c.useState(e),n=i()(t,2),r=n[0];n[1];return(0,c.useEffect)((function(){0}),[]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(u.Z,{items:r})})},V=o.Z.Sider,A=o.Z.Content,G=function(){var e=(0,r.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,I.jsx)("div",{children:(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(V,{style:t,children:(0,I.jsx)(s.Z,{type:a.QPQ})}),(0,I.jsx)(o.Z,{children:(0,I.jsx)(A,{style:n,children:(0,I.jsx)(q,{})})})]})})}},80093:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(44194),o=n(51865),a=n.n(o),s=n(82252),l=n(74511),i=n(19735),c=n(2645),u=n(53681);const d=["wrap","nowrap","wrap-reverse"],f=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],p=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var g=function(e,t){return a()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&d.includes(n)}})(e,t)),((e,t)=>{const n={};return p.forEach((r=>{n[`${e}-align-${r}`]=t.align===r})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n})(e,t)),((e,t)=>{const n={};return f.forEach((r=>{n[`${e}-justify-${r}`]=t.justify===r})),n})(e,t)))};const m=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},h=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},y=e=>{const{componentCls:t}=e,n={};return d.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},v=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},x=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var w=(0,c.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,o=(0,u.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[m(o),h(o),y(o),v(o),x(o)]}),(()=>({})),{resetStyle:!1}),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const b=r.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:o,className:c,style:u,flex:d,gap:f,children:p,vertical:m=!1,component:h="div"}=e,y=C(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:v,direction:x,getPrefixCls:b}=r.useContext(i.E_),j=b("flex",n),[Z,M,S]=w(j),k=null!=m?m:null==v?void 0:v.vertical,P=a()(c,o,null==v?void 0:v.className,j,M,S,g(j,e),{[`${j}-rtl`]:"rtl"===x,[`${j}-gap-${f}`]:(0,l.n)(f),[`${j}-vertical`]:k}),E=Object.assign(Object.assign({},null==v?void 0:v.style),u);return d&&(E.flex=d),f&&!(0,l.n)(f)&&(E.gap=f),Z(r.createElement(h,Object.assign({ref:t,className:P,style:E},(0,s.Z)(y,["justify","wrap","align"])),p))}));var j=b}}]);