"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2522],{63833:function(e,t,n){n.d(t,{$l:function(){return v},JT:function(){return x},gf:function(){return w},lg:function(){return p},p0:function(){return d},s9:function(){return b}});var r=n(90819),o=n.n(r),a=n(73193),s=n.n(a),i=n(89933),u=n.n(i),c=n(77667),l=n(7206);function d(e){return f.apply(this,arguments)}function f(){return(f=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/query/org",{method:"GET",params:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return g.apply(this,arguments)}function g(){return(g=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/create",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/create/prompt",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/update",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/update/prompt",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return j.apply(this,arguments)}function j(){return(j=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/robot/delete",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},78477:function(e,t,n){n.d(t,{AP:function(){return d},_J:function(){return v},t5:function(){return b},v_:function(){return p}});var r=n(90819),o=n.n(r),a=n(73193),s=n.n(a),i=n(89933),u=n.n(i),c=n(77667),l=n(7206);function d(e){return f.apply(this,arguments)}function f(){return(f=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/kbase/query/org",{method:"GET",params:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return g.apply(this,arguments)}function g(){return(g=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/kbase/create",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/kbase/update",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=u()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/kbase/delete",{method:"POST",data:s()(s()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},92349:function(e,t,n){n.d(t,{G:function(){return f}});var r=n(73193),o=n.n(r),a=(n(44194),n(17433)),s=n(77667),i=n(28977),u=n.n(i),c=n(89756),l=n(33934),d=n(31549),f=function(e){var t=e.children,n=e.onSuccess,r=e.onError,i={file:null,file_name:"test.png",file_type:"image/png",is_avatar:"true",kb_type:s.IrL,category_uid:"",kb_uid:"",client:s.bVn},f={name:"file",accept:"image/*",action:(0,l.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(s.LA8)},data:i,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload",e);var t=u()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;i.file=e,i.file_name=t,i.file_type=e.type,console.log("beforeUpload",i)},onChange:function(e){if("uploading"!==e.file.status&&console.log("not uploading:",e.file),"done"===e.file.status)if(console.log("response: ",e.file.response),200===e.file.response.code){var t=e.file.response.data;n(t),c.yw.success("".concat(e.file.name," 上传成功"))}else r(e.file),c.yw.error("".concat(e.file.name," 上传失败"));else"error"===e.file.status&&(c.yw.error("".concat(e.file.name," 上传失败")),r(e.file))}};return(0,d.jsx)(a.Z,o()(o()({},f),{},{children:t}))}},93139:function(e,t,n){var r=n(74145);t.Z=function(){var e=(0,r.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"}}}},1780:function(e,t,n){var r=n(77667),o=n(74828),a=n(7206);t.Z=function(){var e=(0,a.useIntl)();return{translateString:function(t){return t&&t.startsWith(r.VoP)?e.formatMessage({id:t,defaultMessage:t}):t},translateStringTranct:function(t){return null!=t&&t.startsWith(r.VoP)||null!=t&&t.startsWith("ROLE_")?(0,o.aS)(e.formatMessage({id:t,defaultMessage:t}),10):(0,o.aS)(t,10)}}}},16288:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var r=n(64476),o=n(44194),a=n(90819),s=n.n(a),i=n(89933),u=n.n(i),c=n(45332),l=n.n(c),d=n(89267),f=n(83730),p=n(80093),g=n(12265),b=n(90136),m=n(21276),v=n(50484),h=n(70458),x=n(7206),y=n(74145),w=n(40431),j=n(77667),k=n(5728),M=n(43688),C=n(8091),S=n(31549),R=function(e){var t=e.open,n=e.onClose,r=e.onSubmit,o=(0,x.useIntl)(),a=k.A.useForm(),s=l()(a,1)[0],i=(0,w.u)((function(e){return e.currentOrg}));return(0,S.jsx)("div",{children:(0,S.jsx)(f.Z,{title:o.formatMessage({id:"pages.robot.new",defaultMessage:"New"}),open:t,forceRender:!0,okText:o.formatMessage({id:"save",defaultMessage:"Save"}),onOk:function(){console.log("handleSaveRobot"),s.validateFields().then((function(e){console.log("handleSaveRobot values:",e);var t={nickname:e.nickname,type:e.type,orgUid:i.uid};console.log("robotObject:",t),r(t)})).catch((function(e){console.log("Form errors:",e)}))},onCancel:function(){n()},children:(0,S.jsxs)(k.A,{form:s,name:"basic",style:{maxWidth:400},submitter:!1,children:[(0,S.jsx)(M.Z,{label:o.formatMessage({id:"nickname",defaultMessage:"Nickname"}),name:"nickname",rules:[{required:!0,message:o.formatMessage({id:"nickname",defaultMessage:"Nickname"})}]}),(0,S.jsx)(C.Z,{label:o.formatMessage({id:"type",defaultMessage:"Type"}),name:["type"],options:[{label:o.formatMessage({id:j.f4h,defaultMessage:"Service"}),value:j.f4h}],rules:[{required:!0,message:o.formatMessage({id:"choose",defaultMessage:"Choose"})}],fieldProps:{placeholder:o.formatMessage({id:"choose",defaultMessage:"Choose"}),onChange:function(e){console.log("onTreeSelectChange:",e)},allowClear:!0}})]})})})},Z=n(63833),T=n(89756),F=n(1780),q=function(){var e=(0,y.Z)().isDarkMode,t=(0,x.useIntl)(),n=(0,o.useRef)(!1),r=(0,F.Z)(),a=r.translateString,i=r.translateStringTranct,c=(0,d.V)((function(e){return{robotResult:e.robotResult,currentRobot:e.currentRobot,insertRobot:e.insertRobot,deleteCurrentRobot:e.deleteCurrentRobot,setRobotResult:e.setRobotResult,setCurrentRobot:e.setCurrentRobot}})),k=c.robotResult,M=c.currentRobot,C=c.insertRobot,q=c.deleteCurrentRobot,A=c.setRobotResult,U=c.setCurrentRobot,P=(0,w.u)((function(e){return e.currentOrg})),I=f.Z.useModal(),O=l()(I,2),V=O[0],D=O[1],E=function(){var e=u()(s()().mark((function e(n){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete robot",n),T.yw.loading(t.formatMessage({id:"deleting",defaultMessage:"Deleting"})),e.next=4,(0,Z.gf)(n);case 4:r=e.sent,console.log("delete robot response",r),200===r.code?(T.yw.destroy(),T.yw.success(t.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),q(n.uid)):(T.yw.destroy(),T.yw.error(r.message));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=u()(s()().mark((function e(){var t,r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.current){e.next=3;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 3:return n.current=!0,T.yw.loading("loading"),t={pageNumber:0,pageSize:50,level:j.K78,type:j.f4h,orgUid:null==P?void 0:P.uid},e.next=8,(0,Z.p0)(t);case 8:r=e.sent,console.log("queryRobotsByOrg: ",r),200===r.code?(T.yw.destroy(),A(r)):(T.yw.destroy(),T.yw.error(r.message)),n.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){N()}),[]);var L=(0,o.useState)(!1),_=l()(L,2),z=_[0],H=_[1],B=function(){var e=u()(s()().mark((function e(n){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.yw.loading(t.formatMessage({id:"creating",defaultMessage:"Creating"})),e.next=3,(0,Z.lg)(n);case 3:r=e.sent,console.log("handleSaveRobot response:",r),200===r.code?(T.yw.destroy(),T.yw.success(t.formatMessage({id:"create.success"})),C(r.data),H(!1)):(T.yw.destroy(),H(!1),T.yw.error(r.message));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){return t.formatMessage({id:null==e?void 0:e.type,defaultMessage:null==e?void 0:e.type})};return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{style:{margin:10},children:(0,S.jsxs)(p.Z,{gap:"small",align:"flex-start",children:[(0,S.jsx)(g.ZP,{size:"small",type:"primary",icon:(0,S.jsx)(h.Z,{}),onClick:function(){H(!0)},children:t.formatMessage({id:"pages.robot.new",defaultMessage:"New"})}),(0,S.jsx)(g.ZP,{size:"small",onClick:N,children:t.formatMessage({id:"refresh",defaultMessage:"Refresh"})}),(0,S.jsx)(g.ZP,{onClick:function(){return function(e){V.confirm({title:t.formatMessage({id:"deleteTip"}),icon:(0,S.jsx)(v.Z,{}),content:"".concat(t.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(a(e.nickname),"】？"),onOk:function(){E(e)},onCancel:function(){},okText:t.formatMessage({id:"ok"}),cancelText:t.formatMessage({id:"cancel"})})}(M)},size:"small",style:{float:"right"},danger:!0,disabled:""===(null==M?void 0:M.uid),children:t.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]})}),(0,S.jsx)(b.Z,{itemLayout:"horizontal",dataSource:k.data.content,renderItem:function(t,n){return(0,S.jsx)(b.Z.Item,{style:(null==M?void 0:M.uid)===t.uid?{backgroundColor:e?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){U(t)},children:(0,S.jsx)(b.Z.Item.Meta,{style:{marginLeft:"10px"},avatar:(0,S.jsx)(m.C,{src:t.avatar}),title:(0,S.jsx)(S.Fragment,{children:i(null==t?void 0:t.nickname)}),description:W(t)})})}}),(0,S.jsx)(R,{open:z,onClose:function(){H(!1)},onSubmit:B}),D]})},A=n(50571),U=n(635),P=n(73193),I=n.n(P),O=n(22450),V=(n(39666),function(){var e=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move",console.log("onDragStart:",e,t)};return(0,S.jsxs)("aside",{children:[(0,S.jsx)("div",{className:"dndnode",onDragStart:function(t){return e(t,"nodeText")},draggable:!0,children:"Text"}),(0,S.jsx)("div",{className:"dndnode",onDragStart:function(t){return e(t,"nodeImage")},draggable:!0,children:"Image"})]})}),D=n(39208),E=n(74828);var N=function(e){var t=e.id,n=e.type,r=e.data,a=e.positionAbsoluteX,s=e.positionAbsoluteY,i=e.isConnectable,u=(0,o.useCallback)((function(){var e=JSON.stringify({id:t,type:n,data:r});D.Z.emit(j.zf0,e)}),[]),c=(0,o.useCallback)((function(){var e=JSON.stringify({id:(0,E.Zx)(),type:n,data:r,position:{x:a+10,y:s+10}});D.Z.emit(j.aCM,e)}),[]),l=(0,o.useCallback)((function(){D.Z.emit(j.rFf,t)}),[]),d=(0,o.useCallback)((function(e){console.log(e.target.value)}),[]);return(0,S.jsxs)("div",{className:"node-text",children:[(0,S.jsxs)(U.Mw,{children:[(0,S.jsx)("button",{onClick:u,children:"run"}),(0,S.jsx)("button",{onClick:c,children:"copy"}),(0,S.jsx)("button",{onClick:l,children:"delete"})]}),(0,S.jsx)(U.HH,{type:"target",position:O.Ly.Top,isConnectable:i}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"text",children:"Text:"}),(0,S.jsx)("input",{id:"text",name:"text",onChange:d,className:"nodrag"})]}),(0,S.jsx)(U.HH,{type:"source",position:O.Ly.Bottom,id:"b",isConnectable:i})]})};var L=function(e){e.data;var t=e.isConnectable;return(0,o.useCallback)((function(e){console.log(e.target.value)}),[]),(0,S.jsxs)("div",{className:"node-image",children:[(0,S.jsx)(U.HH,{type:"target",position:O.Ly.Top,isConnectable:t}),(0,S.jsx)("div",{children:(0,S.jsx)("label",{htmlFor:"text",children:"Image"})}),(0,S.jsx)(U.HH,{type:"source",position:O.Ly.Bottom,id:"b",isConnectable:t})]})};var _=function(e){var t=e.id,n=e.type,r=e.data,a=e.isConnectable,s=(0,o.useCallback)((function(){var e=JSON.stringify({id:t,type:n,data:r});D.Z.emit(j.zf0,e)}),[]);return(0,S.jsxs)("div",{className:"node-start",children:[(0,S.jsx)(U.Mw,{children:(0,S.jsx)("button",{onClick:s,children:"run"})}),(0,S.jsx)("div",{children:(0,S.jsx)("label",{htmlFor:"text",children:"Start"})}),(0,S.jsx)(U.HH,{type:"source",position:O.Ly.Bottom,id:"b",isConnectable:a})]})},z=n(33934),H=n(61411),B=n(62599),W=n(52852),J=function(e){var t=e.open,n=e.onClose,r=(0,d.V)((function(e){return e.currentRobot})),a=(0,o.useState)(""),s=l()(a,2),i=s[0],u=s[1],c=(0,o.useState)(!1),f=l()(c,2),p=f[0],b=f[1],m=(0,w.u)((function(e){return e.currentOrg})),v=function(){console.log("refresh"),b(!1);var e=(0,z.Cn)()+"?org="+encodeURIComponent(null==m?void 0:m.uid)+"&t="+encodeURIComponent(j.vot)+"&sid="+encodeURIComponent(null==r?void 0:r.uid)+"&navbar=0&"+(new Date).getTime();u(e)};(0,o.useEffect)((function(){v()}),[r]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(H.Z,{title:"Preview",onClose:n,open:t,extra:(0,S.jsxs)(B.Z,{children:[(0,S.jsx)(g.ZP,{onClick:function(){window.open(i)},children:"新窗口"}),(0,S.jsx)(g.ZP,{onClick:function(){console.log("restart"),v()},type:"primary",children:"重新开始"})]}),styles:{body:{padding:0}},children:[(0,S.jsx)(W.Z,{spinning:!p,style:{position:"absolute",width:"100%",zIndex:1001},size:"large"}),(0,S.jsx)("iframe",{id:"chat-iframe",src:i,title:"demo",width:"100%",height:"100%",style:{border:0},"data-loaded":"true",onLoad:function(){b(!0),console.log("Iframe loaded successfully!")}})]})})},Y={},G={animated:!1},K={hideAttribution:!0},$=0,X=function(){var e=(0,o.useRef)(null),t=(0,o.useState)([{id:"1",type:"nodeStart",data:{label:"start"},position:{x:50,y:50}}]),n=l()(t,2),r=n[0],a=n[1],s=(0,o.useState)([]),i=l()(s,2),u=i[0],c=i[1],d=(0,o.useMemo)((function(){return{nodeStart:_,nodeText:N,nodeImage:L}}),[]),f=(0,o.useCallback)((function(e){return a((function(t){return(0,U.Fb)(e,t)}))}),[a]),p=(0,o.useCallback)((function(e){return c((function(t){return(0,U.yn)(e,t)}))}),[c]),g=(0,o.useCallback)((function(e){return c((function(t){return(0,O.Z_)(I()(I()({},e),{},{animated:!1}),t)}))}),[c]),b=(0,U._K)().screenToFlowPosition,m=(0,o.useCallback)((function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}),[]),v=(0,o.useCallback)((function(e){e.preventDefault();var t=e.dataTransfer.getData("application/reactflow");if(void 0!==t&&t){var n=b({x:e.clientX,y:e.clientY}),r={id:"dndnode_".concat($++),type:t,data:{label:"nodeText"},position:n};a((function(e){return e.concat(r)}))}}),[b]),h=function(){};(0,o.useEffect)((function(){var e=setInterval(h,1e4);return function(){clearInterval(e)}}),[r,u]);var x=(0,o.useState)(!1),y=l()(x,2),w=y[0],k=y[1];(0,o.useEffect)((function(){var e=function(e){console.log("handleRunEvent:",e),k(!0)};D.Z.on(j.zf0,e);var t=function(e){var t=JSON.parse(e);console.log("handleCopyEvent:",e,t),a((function(e){return e.concat(t)}))};D.Z.on(j.aCM,t);var n=function(e){console.log("handleDeleteEvent:",e),a((function(t){return t.filter((function(t){return t.id!==e}))}))};return D.Z.on(j.rFf,n),function(){D.Z.off(j.zf0,e),D.Z.off(j.aCM,t),D.Z.off(j.rFf,n)}}),[]);return(0,S.jsxs)("div",{className:"dndflow",children:[(0,S.jsx)(V,{}),(0,S.jsx)("div",{ref:e,style:{width:"75vw",height:"80vh"},children:(0,S.jsxs)(U.x$,{nodeTypes:d,nodes:r,edges:u,onNodesChange:f,onEdgesChange:p,onConnect:g,onDrop:v,onDragOver:m,fitView:!0,proOptions:K,nodesDraggable:!0,style:Y,defaultEdgeOptions:G,children:[(0,S.jsx)(U.Aq,{}),(0,S.jsx)(U.ZX,{}),(0,S.jsx)(U.a9,{nodeColor:function(e){switch(e.type){case"input":return"#6ede87";case"output":return"#6865A5";default:return"#ff0072"}},nodeStrokeWidth:3,zoomable:!0,pannable:!0})]})}),(0,S.jsx)(J,{open:w,onClose:function(){k(!1)}})]})},Q=function(){var e=(0,x.useAccess)();return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(x.Access,{accessible:e.canDebug(),fallback:(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(x.FormattedMessage,{id:j.h5w})}),children:(0,S.jsx)(U.tV,{children:(0,S.jsx)(X,{})})})})},ee=n(93982),te=n(78477),ne=n(11984),re=function(){var e=(0,x.useIntl)(),t=(0,x.useNavigate)(),n=k.A.useForm(),r=l()(n,1)[0],a=(0,F.Z)().translateString,i=(0,o.useState)(),c=l()(i,2),f=c[0],p=c[1],b=(0,w.u)((function(e){return e.currentOrg})),m=(0,d.V)((function(e){return{currentRobot:e.currentRobot,setCurrentRobot:e.setCurrentRobot}})),v=m.currentRobot,h=m.setCurrentRobot,y=function(){var t=u()(s()().mark((function t(){var n,r;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T.yw.loading(e.formatMessage({id:"loading",defaultMessage:"Loading"})),n={pageNumber:0,pageSize:50,type:j.QPQ,orgUid:b.uid},t.next=4,(0,te.AP)(n);case 4:r=t.sent,console.log("getKeywordBase response:",n,r),T.yw.destroy(),200===r.code?p(r):T.yw.error(r.message);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,o.useEffect)((function(){y()}),[]),(0,o.useEffect)((function(){r.setFieldValue("kbUid",null==v?void 0:v.kbUid)}),[v]);var M=function(){var t=u()(s()().mark((function t(n){var r,o,a,i,u,c,l;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("onFinish values:",n),c=I()(I()({},v),{},{serviceSettings:I()(I()({},v.serviceSettings),{},{faqUids:null==v||null===(r=v.serviceSettings)||void 0===r||null===(r=r.faqs)||void 0===r?void 0:r.map((function(e){return e.uid})),quickFaqUids:null==v||null===(o=v.serviceSettings)||void 0===o||null===(o=o.quickFaqs)||void 0===o?void 0:o.map((function(e){return e.uid})),guessFaqUids:null==v||null===(a=v.serviceSettings)||void 0===a||null===(a=a.guessFaqs)||void 0===a?void 0:a.map((function(e){return e.uid})),hotFaqUids:null==v||null===(i=v.serviceSettings)||void 0===i||null===(i=i.hotFaqs)||void 0===i?void 0:i.map((function(e){return e.uid})),shortcutFaqUids:null==v||null===(u=v.serviceSettings)||void 0===u||null===(u=u.shortcutFaqs)||void 0===u?void 0:u.map((function(e){return e.uid}))}),kbUid:n.kbUid}),console.log("robotObject:",c),t.next=5,(0,Z.$l)(c);case 5:l=t.sent,console.log("updateRobot response:",l),200===l.code?(T.yw.destroy(),T.yw.success(e.formatMessage({id:"update.success"})),h(l.data)):(T.yw.destroy(),T.yw.error(l.message));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,S.jsx)("div",{children:(0,S.jsxs)(k.A,{form:r,onFinish:M,children:[(0,S.jsx)(C.Z,{width:"md",name:"kbUid",label:"知识库",options:null==f?void 0:f.data.content.map((function(e){return{value:e.uid,label:a(e.name)}})),fieldProps:{onChange:function(e){console.log("kbUid:",e)}}}),(0,S.jsx)(k.A.Item,{children:(0,S.jsx)(g.ZP,{icon:(0,S.jsx)(ne.Z,{}),onClick:function(){t("/kb/llm/data")},children:"添加大模型知识库"},"github")})]})})},oe=n(16655),ae=function(){var e=(0,x.useIntl)(),t=(0,o.useMemo)((function(){return"opensource"===j.nGu}),[]),n=[{key:"kb",label:(0,S.jsx)(x.FormattedMessage,{id:"pages.robot.tab.kb",defaultMessage:"Knowledge Base"}),children:(0,S.jsx)(re,{}),disabled:t}];return(0,S.jsxs)(S.Fragment,{children:[t&&(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(ee.Z,{message:"企业版-高级功能",style:{marginBottom:20},type:"warning",action:(0,S.jsx)(g.ZP,{type:"link",icon:(0,S.jsx)(oe.Z,{}),onClick:function(){return window.open(j.VPj)},children:e.formatMessage({id:"setting.helpcenter"})})})}),(0,S.jsx)(A.Z,{tabPosition:"left",items:n})]})},se=n(92349),ie=n(69957),ue=n(11607),ce=n(47807),le=function(){var e=k.A.useForm(),t=l()(e,1)[0],n=(0,x.useIntl)(),r=(0,F.Z)().translateString,a=(0,d.V)((function(e){return{currentRobot:e.currentRobot,setCurrentRobot:e.setCurrentRobot}})),i=a.currentRobot,c=a.setCurrentRobot,f=(0,o.useState)(""),p=l()(f,2),b=p[0],v=p[1];(0,o.useEffect)((function(){var e;i&&(t.setFieldValue("nickname",r(null==i?void 0:i.nickname)),t.setFieldValue("welcomeTip",r(null==i||null===(e=i.serviceSettings)||void 0===e?void 0:e.welcomeTip)),t.setFieldValue("description",r(null==i?void 0:i.description)))}),[i]);var h=function(){var e=u()(s()().mark((function e(t){var r,o,a,u,l,d,f;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onFinish:",t),T.yw.loading(n.formatMessage({id:"updating"})),d=I()(I()({},i),{},{serviceSettings:I()(I()({},i.serviceSettings),{},{welcomeTip:t.welcomeTip,quickFaqUids:null==i||null===(r=i.serviceSettings)||void 0===r||null===(r=r.quickFaqs)||void 0===r?void 0:r.map((function(e){return e.uid})),faqUids:null==i||null===(o=i.serviceSettings)||void 0===o||null===(o=o.faqs)||void 0===o?void 0:o.map((function(e){return e.uid})),guessFaqUids:null==i||null===(a=i.serviceSettings)||void 0===a||null===(a=a.guessFaqs)||void 0===a?void 0:a.map((function(e){return e.uid})),hotFaqUids:null==i||null===(u=i.serviceSettings)||void 0===u||null===(u=u.hotFaqs)||void 0===u?void 0:u.map((function(e){return e.uid})),shortcutFaqUids:null==i||null===(l=i.serviceSettings)||void 0===l||null===(l=l.shortcutFaqs)||void 0===l?void 0:l.map((function(e){return e.uid}))}),nickname:t.nickname,description:t.description,avatar:b}),console.log("robotObject:",d),e.next=6,(0,Z.$l)(d);case 6:f=e.sent,console.log("updateRobot response:",f),200===f.code?(T.yw.success(n.formatMessage({id:"update.success"})),c(f.data)):T.yw.error(f.message),T.yw.destroy();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){v(null==i?void 0:i.avatar)}),[i]),(0,S.jsxs)(k.A,{form:t,style:{marginLeft:"100px"},onFinish:h,children:[(0,S.jsx)(ce.Z.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:null==e?void 0:e.fileList},label:n.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,S.jsxs)(se.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),v(e)},onError:function(e){console.log("handleUploadError:",e)},children:[(0,S.jsx)(m.C,{src:b}),(0,S.jsx)(g.ZP,{icon:(0,S.jsx)(ie.Z,{}),children:n.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,S.jsx)(M.Z,{width:"md",name:"nickname",label:n.formatMessage({id:"pages.robot.tab.title",defaultMessage:"Title"}),tooltip:n.formatMessage({id:"pages.robot.tab.title",defaultMessage:"Title"}),placeholder:n.formatMessage({id:"pages.robot.tab.title",defaultMessage:"Title"}),rules:[{required:!0,message:n.formatMessage({id:"pages.robot.tab.title",defaultMessage:"Title"})}]}),(0,S.jsx)(ue.Z,{width:"md",name:"welcomeTip",label:n.formatMessage({id:"pages.robot.tab.welcomeTip",defaultMessage:"welcomeTip"}),tooltip:n.formatMessage({id:"pages.robot.tab.welcomeTip",defaultMessage:"welcomeTip"}),placeholder:n.formatMessage({id:"pages.robot.tab.welcomeTip",defaultMessage:"welcomeTip"}),rules:[{required:!0,message:n.formatMessage({id:"pages.robot.tab.welcomeTip",defaultMessage:"welcomeTip"})}]}),(0,S.jsx)(ue.Z,{width:"md",name:"description",label:n.formatMessage({id:"pages.robot.tab.description",defaultMessage:"description"}),tooltip:n.formatMessage({id:"pages.robot.tab.description",defaultMessage:"description"}),placeholder:n.formatMessage({id:"pages.robot.tab.description",defaultMessage:"description"}),rules:[{required:!0,message:n.formatMessage({id:"pages.robot.tab.description",defaultMessage:"description"})}]})]})},de=function(e){var t=e.type;console.log("TabApi:",t);var n=(0,x.useAccess)();return n.canDebug&&console.log("TabApi canDebug"),(0,S.jsx)("div",{children:(0,S.jsx)("p",{children:(0,S.jsx)(x.Access,{accessible:n.canDebug(),fallback:(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(x.FormattedMessage,{id:j.h5w})}),children:"开放api、权限控制、统计数据"})})})},fe=function(){var e=(0,x.useIntl)(),t=(0,o.useState)([]),n=l()(t,2),r=n[0],a=n[1],s=[{key:"basic",label:e.formatMessage({id:"pages.robot.tab.basic",defaultMessage:"Basic"}),children:(0,S.jsx)(le,{})},{key:"advanced",label:e.formatMessage({id:"pages.robot.tab.advanced",defaultMessage:"Advanced"}),children:(0,S.jsx)(ae,{})},{key:"flow",label:e.formatMessage({id:"pages.robot.tab.flow",defaultMessage:"Flow"}),children:(0,S.jsx)(Q,{})},{key:"tabApi",label:"API",children:(0,S.jsx)(de,{type:j._X4})}];return(0,o.useEffect)((function(){a(s)}),[]),(0,S.jsx)(A.Z,{defaultActiveKey:"basic",items:r})},pe=n(93139),ge=r.Z.Sider,be=r.Z.Content,me=function(){var e=(0,pe.Z)(),t=e.leftSiderStyle,n=e.leftSiderWidth,o=e.contentStyle;return(0,S.jsxs)(r.Z,{children:[(0,S.jsx)(ge,{width:n,style:t,children:(0,S.jsx)(q,{})}),(0,S.jsx)(r.Z,{children:(0,S.jsx)(be,{style:o,children:(0,S.jsx)(fe,{})})})]})}},89267:function(e,t,n){n.d(t,{V:function(){return d}});var r=n(73193),o=n.n(r),a=n(76711),s=n.n(a),i=n(77667),u=n(39701),c=n(83642),l=n(41617),d=(0,u.Ue)()((0,c.mW)((0,c.tJ)((0,l.n)((function(e,t){return{robotResult:{data:{content:[]}},currentRobot:{uid:"",nickname:""},insertRobot:function(t){e((function(e){e.robotResult.data.content.unshift(t)}))},setRobotResult:function(n){e({robotResult:n});var r,o=t().currentRobot;""!==o.uid&&void 0!==o||(null===(r=n.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentRobot:n.data.content[0]})},setCurrentRobot:function(n){var r=t().robotResult.data.content,a=r.findIndex((function(e){return e.uid===n.uid}));if(-1!==a){var i=[].concat(s()(r.slice(0,a)),[n],s()(r.slice(a+1))),u=o()(o()({},t().robotResult),{},{data:{content:i}});e({robotResult:u,currentRobot:n})}else console.warn("Robot with the specified uid not found."),e({currentRobot:n})},deleteCurrentRobot:function(n){var r=t().robotResult.data.content,a=r.findIndex((function(e){return e.uid===n}));-1!==a?e({robotResult:o()(o()({},t().robotResult),{},{data:{content:[].concat(s()(r.slice(0,a)),s()(r.slice(a+1)))}})}):console.warn("Robot not found in cache:",n),t().currentRobot.uid===n&&e({currentRobot:{uid:""}})},deleteRobotCache:function(){return e({},!0)}}})),{name:i.Eis})))}}]);