"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[6900],{47719:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(17082),a=n(44194),o={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},s=n(64423),c=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};var d=a.forwardRef(c)},1929:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(90819),a=n.n(r),o=n(73193),s=n.n(o),c=n(84176),d=n.n(c),i=n(89933),u=n.n(i),l=n(89756),f=n(77667),p=n(82045);function g(e){return h.apply(this,arguments)}function h(){return(h=u()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/v1/vip/rate/query/org",{method:"GET",params:s()(s()({},t),{},{client:f.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(40431),x=n(47719),y=n(52519),M=n(12265),v=n(28977),w=n.n(v),b=n(44194),k=n(31549),I=["current"],j=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,k.jsx)(p.FormattedMessage,{id:"score",defaultMessage:"Score"}),dataIndex:"score"},{title:(0,k.jsx)(p.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"comment",copyable:!0},{title:(0,k.jsx)(p.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInSearch:!0},{title:(0,k.jsx)(p.FormattedMessage,{id:"agent",defaultMessage:"agent"}),dataIndex:"agent",hideInSearch:!0,render:function(e,t,n,r){return JSON.parse(t.thread.agent).nickname}},{title:(0,k.jsx)(p.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0,render:function(e,t,n,r){return w()(t.updatedAt).format("YYYY-MM-DD HH:mm:ss")}}],E=function(){var e=(0,p.useIntl)(),t=(0,b.useRef)(),n=(0,m.u)((function(e){return e.currentOrg})),r=[].concat(j,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(t,n,r,a){return[(0,k.jsx)("a",{onClick:function(){},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),o=function(){console.log("handleExportExcel"),l.yw.warning("即将上线，敬请期待")};return(0,k.jsx)(y.Z,{columns:r,actionRef:t,cardBordered:!0,request:function(){var e=u()(a()().mark((function e(t,r,o){var c,i,u;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.current,c=d()(t,I),i=s()({pageNumber:t.current-1,orgUid:n.uid},c),e.next=4,g(i);case 4:return u=e.sent,console.log("queryRatesByOrgUid response:",u.data,i),200===u.code||l.yw.error(u.message),e.abrupt("return",{data:u.data.content,success:!0,total:u.data.totalElements});case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"评价记录",toolBarRender:function(){return[(0,k.jsx)(M.ZP,{icon:(0,k.jsx)(x.Z,{}),type:"primary",onClick:o,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}}}]);