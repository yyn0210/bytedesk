"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2701],{53465:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(73193),a=t.n(r),o=t(84176),l=t.n(o),u=t(90819),s=t.n(u),c=t(89933),i=t.n(c),d=t(45332),p=t.n(d),f=t(89756),g=t(77667),m=t(7206);function h(e){return v.apply(this,arguments)}function v(){return(v=i()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/v1/tag/query/org",{method:"GET",params:a()(a()({},n),{},{client:g.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=i()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/v1/tag/create",{method:"POST",data:a()(a()({},n),{},{client:g.bVn})}));case 1:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=i()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/v1/tag/update",{method:"POST",data:a()(a()({},n),{},{client:g.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return M.apply(this,arguments)}function M(){return M=i()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/v1/tag/delete",{method:"POST",data:a()(a()({},n),{},{client:g.bVn})}));case 1:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var k=t(40431),T=t(50484),C=t(31816),F=t(52519),S=t(95943),Z=t(83730),I=t(12265),q=t(44194),A=t(5728),O=t(43688),P=t(8091),D=t(61411),E=t(31549),V=function(e){var n=e.isEdit,t=e.tag,r=e.open,o=e.onClose,l=e.onSubmit,u=A.A.useForm(),s=p()(u,1)[0],c=(0,k.u)((function(e){return e.currentOrg})),i=(0,q.useState)([]),d=p()(i,2),f=d[0],m=d[1],h=(0,q.useState)([]),v=p()(h,2),b=v[0],x=v[1];(0,q.useEffect)((function(){n?(s.setFieldsValue({uid:null==t?void 0:t.uid,name:null==t?void 0:t.name,color:null==t?void 0:t.color,type:null==t?void 0:t.type}),x([null==t?void 0:t.color]),m([null==t?void 0:t.type])):s.setFieldsValue({name:"",color:"red",type:g.IuT})}),[n,t,s]);return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(D.Z,{title:"标签",onClose:o,open:r,children:(0,E.jsxs)(A.A,{form:s,name:"tagForm",onFinish:function(){console.log("handleSubmit"),s.validateFields().then((function(e){var n=a()(a()({},e),{},{orgUid:null==c?void 0:c.uid});console.log("submit",n),l(n)}))},children:[(0,E.jsx)(O.Z,{label:"名称",name:"name",rules:[{required:!0}]}),(0,E.jsx)(P.Z,{name:"color",label:"颜色",width:"md",options:[{label:"red",value:"red"},{label:"magenta",value:"magenta"},{label:"volcano",value:"volcano"},{label:"orange",value:"orange"},{label:"gold",value:"gold"},{label:"lime",value:"lime"},{label:"green",value:"green"},{label:"cyan",value:"cyan"},{label:"blue",value:"blue"},{label:"geekblue",value:"geekblue"},{label:"purple",value:"purple"},{label:"#f50",value:"#f50"}],fieldProps:{allowClear:!0,placeholder:"请选择颜色",value:b,onChange:function(e){console.log("selected color ".concat(e)),x(e)}}}),(0,E.jsx)(P.Z,{name:"type",label:"类型",width:"md",options:[{label:"会话标签",value:g.bDv},{label:"客户标签",value:g.IuT}],fieldProps:{allowClear:!0,placeholder:"请选择类型",value:f,onChange:function(e){console.log("selected type ".concat(e)),m(e)}}})]})})})},B=["current"],R=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,E.jsx)(m.FormattedMessage,{id:"name",defaultMessage:"Name"}),dataIndex:"name",copyable:!0,render:function(e,n){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(S.Z,{color:n.color,children:n.name})})}},{title:(0,E.jsx)(m.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInSearch:!0,render:function(e,n){return(0,E.jsxs)(E.Fragment,{children:[n.type===g.bDv&&(0,E.jsx)(S.Z,{color:"blue",children:"会话标签"}),n.type===g.IuT&&(0,E.jsx)(S.Z,{color:"green",children:"客户标签"})]})}},{title:(0,E.jsx)(m.FormattedMessage,{id:"color",defaultMessage:"Color"}),dataIndex:"color",hideInSearch:!0,render:function(e,n){return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(S.Z,{color:n.color,children:n.color})})}},{title:(0,E.jsx)(m.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],U=function(){var e=(0,m.useIntl)(),n=(0,q.useRef)(),t=(0,k.u)((function(e){return e.currentOrg})),r=(0,q.useState)(!1),o=p()(r,2),u=o[0],c=o[1],d=(0,q.useState)({}),g=p()(d,2),v=g[0],x=g[1],w=(0,q.useState)(!1),M=p()(w,2),S=M[0],A=M[1],O=Z.Z.useModal(),P=p()(O,2),D=P[0],U=P[1],N=[].concat(R,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(n,t,r,a){return[(0,E.jsx)("a",{onClick:function(){x(t),A(!0),c(!0)},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable"),(0,E.jsx)(I.ZP,{type:"link",onClick:function(){return function(n){D.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,E.jsx)(T.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(n.name,"】？"),onOk:function(){G(n)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})})}(t)},danger:!0,children:e.formatMessage({id:"delete",defaultMessage:"Delete"})},"delete")]}}]),G=function(){var t=i()(s()().mark((function t(r){var a;return s()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("deleteTag:",r),t.next=3,j(r);case 3:a=t.sent,console.log("deleteMember:",a),200===a.code?(f.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),n.current.reload()):f.yw.error(a.message);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var e=i()(s()().mark((function e(t){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:r=e.sent,console.log("handleCreateTag response:",r),200===r.code?(null===(a=n.current)||void 0===a||a.reload(),c(!1)):f.yw.error(r.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=i()(s()().mark((function e(t){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uid=null==v?void 0:v.uid,e.next=3,y(t);case 3:r=e.sent,console.log("handleUpdateTag response:",r),200===r.code?(null===(a=n.current)||void 0===a||a.reload(),c(!1)):f.yw.error(r.message);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){c(!0),A(!1),x({})};return(0,E.jsxs)(E.Fragment,{children:[u&&(0,E.jsx)(V,{isEdit:S,open:u,tag:v,onClose:function(){c(!1)},onSubmit:function(e){console.log("onDrawerSubmit:",e),S?K(e):J(e)}}),(0,E.jsx)(F.Z,{columns:N,actionRef:n,cardBordered:!0,request:function(){var e=i()(s()().mark((function e(n,r,o){var u,c,i;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.current,u=l()(n,B),c=a()({pageNumber:n.current-1,orgUid:t.uid},u),e.next=4,h(c);case 4:return i=e.sent,console.log("queryTagsByOrg response:",i,c),200===i.code||f.yw.error(i.message),e.abrupt("return",{data:i.data.content,success:!0,total:i.data.totalElements});case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"标签列表",toolBarRender:function(){return[(0,E.jsx)(I.ZP,{type:"primary",icon:(0,E.jsx)(C.Z,{}),onClick:Q,children:e.formatMessage({id:"create",defaultMessage:"Create"})})]}}),U]})}}}]);