"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5774],{47719:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(17082),r=n(44194),o={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},s=n(64423),i=function(e,t){return r.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};var c=r.forwardRef(i)},41241:function(e,t,n){n.d(t,{ub:function(){return l}});var a=n(90819),r=n.n(a),o=n(73193),s=n.n(o),i=n(89933),c=n.n(i),u=n(77667),d=n(7206);function l(e){return f.apply(this,arguments)}function f(){return(f=c()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/notification/query/org",{method:"GET",params:s()(s()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},28611:function(e,t,n){n.r(t);var a=n(90819),r=n.n(a),o=n(73193),s=n.n(o),i=n(84176),c=n.n(i),u=n(89933),d=n.n(u),l=n(89756),f=n(41241),p=n(40431),g=n(47719),h=n(52519),x=n(7206),m=n(12265),y=n(44194),v=n(31549),M=["current"],b=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,v.jsx)(x.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",copyable:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",hideInSearch:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}];t.default=function(){var e=(0,x.useIntl)(),t=(0,y.useRef)(),n=(0,p.u)((function(e){return e.currentOrg})),a=[].concat(b,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(t,n,a,r){return[(0,v.jsx)("a",{onClick:function(){},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),o=function(){console.log("handleExportExcel"),l.yw.warning("即将上线，敬请期待")};return(0,v.jsx)(h.Z,{columns:a,actionRef:t,cardBordered:!0,request:function(){var e=d()(r()().mark((function e(t,a,o){var i,u,d;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,a,o),t.current,i=c()(t,M),u=s()({pageNumber:t.current-1,orgUid:n.uid},i),e.next=5,(0,f.ub)(u);case 5:return d=e.sent,console.log("queryNotificationsByOrg response:",u,d),200===d.code||l.yw.error(d.message),e.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"通知",toolBarRender:function(){return[(0,v.jsx)(m.ZP,{icon:(0,v.jsx)(g.Z,{}),type:"primary",onClick:o,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}}}]);