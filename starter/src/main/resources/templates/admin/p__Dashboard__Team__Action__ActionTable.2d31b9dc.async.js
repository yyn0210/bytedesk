"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[4376],{58638:function(R,f,e){e.d(f,{Z:function(){return v}});var g=e(1413),r=e(67294),h={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},u=h,x=e(91146),y=function(j,n){return r.createElement(x.Z,(0,g.Z)((0,g.Z)({},j),{},{ref:n,icon:u}))},E=r.forwardRef(y),v=E},81677:function(R,f,e){e.r(f),e.d(f,{default:function(){return w}});var g=e(15009),r=e.n(g),h=e(97857),u=e.n(h),x=e(13769),y=e.n(x),E=e(99289),v=e.n(E),M=e(80049),j=e(85615),n=e(86745);function F(o){return A.apply(this,arguments)}function A(){return A=v()(r()().mark(function o(s){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,n.request)("/api/v1/action/query/org",{method:"GET",params:u()(u()({},s),{},{client:j.bV})}));case 1:case"end":return t.stop()}},o)})),A.apply(this,arguments)}function V(o){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function o(s){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/action/export",{method:"GET",params:_objectSpread(_objectSpread({},s),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},o)})),T.apply(this,arguments)}var B=e(87676),S=e(58638),Z=e(53719),b=e(14726),G=e(67294),a=e(85893),P=["current"],W=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,a.jsx)(n.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"nickname",render:function(s,c){var t;return(t=c.user)===null||t===void 0?void 0:t.nickname}},{title:(0,a.jsx)(n.FormattedMessage,{id:"title",defaultMessage:"Title"}),dataIndex:"title"},{title:(0,a.jsx)(n.FormattedMessage,{id:"action",defaultMessage:"Action"}),dataIndex:"action"},{title:"ip",dataIndex:"ip",copyable:!0,width:125},{title:(0,a.jsx)(n.FormattedMessage,{id:"city",defaultMessage:"City"}),dataIndex:"ipLocation",copyable:!0,width:160},{title:(0,a.jsx)(n.FormattedMessage,{id:"description",defaultMessage:"Description"}),dataIndex:"description",hideInSearch:!0},{title:(0,a.jsx)(n.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",width:80},{title:(0,a.jsx)(n.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",hideInSearch:!0,width:190}],$=function(){var s=(0,n.useIntl)(),c=(0,G.useRef)(),t=(0,B.u)(function(i){return i.orgCurrent}),z=[].concat(W),H=function(){console.log("handleExportExcel"),M.yw.warning("TODO: handleExportExcel")};return(0,a.jsx)(Z.Z,{columns:z,actionRef:c,cardBordered:!0,request:function(){var i=v()(r()().mark(function m(p,C,L){var N,O,I,d;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("request:",p,C,L),N=p.current,O=y()(p,P),I=u()({pageNumber:p.current-1,orgUid:t.uid},O),l.next=5,F(I);case 5:return d=l.sent,console.log("getAllActions response:",I,d),d.code===200||M.yw.error(d.message),l.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 9:case"end":return l.stop()}},m)}));return function(m,p,C){return i.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(m){console.log("pagination onChange page:",m)}},dateFormatter:"string",headerTitle:s.formatMessage({id:"log",defaultMessage:"Log"}),toolBarRender:function(){return[(0,a.jsx)(b.ZP,{icon:(0,a.jsx)(S.Z,{}),type:"primary",onClick:H,children:s.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})},w=$}}]);
