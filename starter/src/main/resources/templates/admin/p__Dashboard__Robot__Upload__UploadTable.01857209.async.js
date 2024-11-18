"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1112],{84785:function(e,t,n){n.d(t,{HZ:function(){return g},RR:function(){return c},yL:function(){return f}});var a=n(90228),r=n.n(a),s=n(26068),i=n.n(s),u=n(87999),o=n.n(u),d=n(18735);function c(e){return l.apply(this,arguments)}function l(){return(l=o()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/upload/query/org",{method:"GET",params:i()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=o()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/upload/process",{method:"POST",data:i()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=o()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/upload/delete",{method:"POST",data:i()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},51038:function(e,t,n){var a=n(96677),r=n(94388),s=n(18735);t.Z=function(){var e=(0,s.useIntl)();return{translateString:function(t){return t&&t.startsWith(a.VoP)?e.formatMessage({id:t,defaultMessage:t}):t},translateStringTranct:function(t){return null!=t&&t.startsWith(a.VoP)||null!=t&&t.startsWith("ROLE_")?(0,r.aS)(e.formatMessage({id:t,defaultMessage:t}),10):(0,r.aS)(t,10)}}}},4922:function(e,t,n){n.r(t);var a=n(26068),r=n.n(a),s=n(67825),i=n.n(s),u=n(90228),o=n.n(u),d=n(87999),c=n.n(d),l=n(59153),f=n(84785),p=n(51038),g=n(29244),h=n(93061),m=n(18735),M=n(22949),x=n(58439),w=n(75271),v=n(52676),y=["current"];t.default=function(){var e=(0,m.useIntl)(),t=(0,w.useRef)(),n=(0,g.u)((function(e){return e.currentOrg})),a=((0,p.Z)().translateString,[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,v.jsx)(m.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"nickname",render:function(e,t){return(0,v.jsx)(v.Fragment,{children:(n=null==t?void 0:t.user,a=JSON.parse(n),null==a?void 0:a.nickname)});var n,a}},{title:(0,v.jsx)(m.FormattedMessage,{id:"fileName",defaultMessage:"fileName"}),dataIndex:"fileName",width:100},{title:(0,v.jsx)(m.FormattedMessage,{id:"fileType",defaultMessage:"fileType"}),dataIndex:"fileType",hideInSearch:!0,width:100},{title:(0,v.jsx)(m.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",width:100,hideInSearch:!0},{title:(0,v.jsx)(m.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",width:100,hideInSearch:!0},{title:(0,v.jsx)(m.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",width:100,hideInSearch:!0},{title:(0,v.jsx)(m.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",width:180,hideInSearch:!0}]),s=function(){var n=c()(o()().mark((function n(a){var r;return o()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(a),n.next=3,(0,f.HZ)(a);case 3:r=n.sent,console.log("delete response:",r),200===r.code?(null==t||t.current.reload(),l.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete Success"}))):l.yw.error(e.formatMessage({id:"delete.error",defaultMessage:"Delete Error"}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=[].concat(a,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:150,render:function(t,n,a,r){return[(0,v.jsx)("a",{onClick:function(){var e=null==n?void 0:n.fileUrl,t=encodeURIComponent(e);window.open(decodeURIComponent(t))},children:e.formatMessage({id:"open",defaultMessage:"Open"})},"editable"),(0,v.jsx)(M.Z,{title:e.formatMessage({id:"deleteTip",defaultMessage:"Delete Tip"}),description:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(null==n?void 0:n.fileName,"】？"),onConfirm:function(){return s(n)},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"}),children:(0,v.jsx)(x.ZP,{size:"small",type:"link",danger:!0,children:e.formatMessage({id:"delete",defaultMessage:"Delete"})})},"delete")]}}]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(h.Z,{columns:u,actionRef:t,cardBordered:!0,request:function(){var e=c()(o()().mark((function e(t,a,s){var u,d,c;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,a,s),t.current,u=i()(t,y),d=r()({pageNumber:t.current-1,categoryUid:"",kbUid:"",orgUid:null==n?void 0:n.uid},u),e.next=5,(0,f.RR)(d);case 5:return c=e.sent,console.log("getAllUploads response:",c,d),200===c.code||l.yw.error(c.message),e.abrupt("return",{data:c.data.content,success:!0,total:c.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"文档",toolBarRender:function(){return[]}})})}}}]);