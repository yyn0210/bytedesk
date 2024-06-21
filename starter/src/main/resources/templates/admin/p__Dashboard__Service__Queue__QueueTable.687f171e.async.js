"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[6668],{58638:function(Q,i,e){e.d(i,{Z:function(){return d}});var o=e(1413),a=e(67294),g={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},s=g,c=e(91146),h=function(S,E){return a.createElement(c.Z,(0,o.Z)((0,o.Z)({},S),{},{ref:E,icon:s}))},m=a.forwardRef(h),d=m},73803:function(Q,i,e){var o=e(85615),a=e(66419),g=e(86745);function s(){var c=(0,g.useIntl)(),h=function(r){return r&&r.startsWith(o.Vo)?c.formatMessage({id:r,defaultMessage:r}):r},m=function(r){return r!=null&&r.startsWith(o.Vo)?(0,a.aS)(c.formatMessage({id:r}),10):(0,a.aS)(r,10)};return{translateString:h,translateStringTranct:m}}i.Z=s},99450:function(Q,i,e){e.r(i),e.d(i,{default:function(){return F}});var o=e(15009),a=e.n(o),g=e(97857),s=e.n(g),c=e(13769),h=e.n(c),m=e(99289),d=e.n(m),r=e(80049),S=e(85615),E=e(86745);function Z(n){return O.apply(this,arguments)}function O(){return O=d()(a()().mark(function n(u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.request)("/api/v1/queue/query/org",{method:"GET",params:s()(s()({},u),{},{client:S.bV})}));case 1:case"end":return t.stop()}},n)})),O.apply(this,arguments)}function w(n){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function n(u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/queue/create",{method:"POST",data:_objectSpread(_objectSpread({},u),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},n)})),R.apply(this,arguments)}function z(n){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function n(u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/queue/update",{method:"POST",data:_objectSpread(_objectSpread({},u),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},n)})),j.apply(this,arguments)}function J(n){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function n(u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/queue/delete",{method:"POST",data:_objectSpread(_objectSpread({},u),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},n)})),I.apply(this,arguments)}var A=e(73803),W=e(87676),G=e(58638),D=e(96853),L=e(14726),H=e(67294),x=e(85893),V=["current"],$=function(){var u=(0,E.useIntl)(),T=(0,H.useRef)(),t=(0,A.Z)(),X=t.translateString,K=(0,W.u)(function(l){return l.orgCurrent}),N=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u72B6\u6001",dataIndex:"status",hideInSearch:!0},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0},{title:"\u5BA2\u6237\u7AEF",dataIndex:"client",copyable:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(y,p,P,M){return[(0,x.jsx)("a",{onClick:function(){},children:"\u4FEE\u6539"},"editable")]}}],U=function(){console.log("handleExportExcel"),r.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,x.jsx)(D.Z,{columns:N,actionRef:T,cardBordered:!0,request:function(){var l=d()(a()().mark(function y(p,P,M){var b,B,C,f;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("request:",p,P,M),b=p.current,B=h()(p,V),C=s()({pageNumber:p.current-1,orgUid:K.uid},B),v.next=5,Z(C);case 5:return f=v.sent,console.log("getAllQueues response:",C,f),f.code===200||r.yw.error(f.message),v.abrupt("return",{data:f.data.content,success:!0,total:f.data.totalElements});case 9:case"end":return v.stop()}},y)}));return function(y,p,P){return l.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(y){console.log("page:",y)}},dateFormatter:"string",headerTitle:"\u6392\u961F\u961F\u5217",toolBarRender:function(){return[(0,x.jsx)(L.ZP,{icon:(0,x.jsx)(G.Z,{}),type:"primary",onClick:U,children:u.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})},F=$}}]);