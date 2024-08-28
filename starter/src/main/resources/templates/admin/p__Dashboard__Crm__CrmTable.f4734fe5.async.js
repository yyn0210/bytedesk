"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9710],{58638:function(W,m,e){e.d(m,{Z:function(){return v}});var p=e(1413),i=e(67294),g={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},E=g,f=e(89099),l=function(j,A){return i.createElement(f.Z,(0,p.Z)((0,p.Z)({},j),{},{ref:A,icon:E}))},R=i.forwardRef(l),v=R},70150:function(W,m,e){e.d(m,{W5:function(){return A}});var p=e(15009),i=e.n(p),g=e(97857),E=e.n(g),f=e(99289),l=e.n(f),R=e(85615),v=e(88541),y=e.n(v),j=e(86745);function A(r){return I.apply(this,arguments)}function I(){return I=l()(i()().mark(function r(n){return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,j.request)("/api/v1/message/query/org",{method:"GET",params:E()({},n)}));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function b(r){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:n.pageNumber,size:n.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},r)})),U.apply(this,arguments)}function O(r){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:n,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},r)})),d.apply(this,arguments)}function N(r,n){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,u){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("http://127.0.0.1:1001/visitor/api/v1/ai/ollama/chat",{method:"GET",params:{query:n,kbUid:u,client:HTTP_CLIENT}}));case 1:case"end":return a.stop()}},r)})),B.apply(this,arguments)}function Z(r,n,u){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,u,t){var a,o;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("sendMessageAiStream: ",n),a="http://127.0.0.1:1001/visitor/api/v1/ai/ollama/chat/stream?query=".concat(n,"&kbUid=").concat(u),o=new EventSource(a,{withCredentials:!1}),o.onopen=function(s){console.log("onopen:",s.target)},o.onmessage=function(s){console.log("onmessage:",s.data),t(s.data)},o.onerror=function(s){console.log("onerror:",s),o.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",s),o.close()},o.addEventListener("customEventName",function(s){console.log("Message id is "+s.lastEventId)});case 7:case"end":return _.stop()}},r)})),T.apply(this,arguments)}function z(r,n){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,u){var t,a;return _regeneratorRuntime().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:console.log("sendMessageSSE: ",n),t="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(n.sid,"&content=").concat(n.content),a=new EventSource(t,{withCredentials:!1}),a.onopen=function(_){console.log("onopen:",_.target)},a.onmessage=function(_){u(_.data);var s=JSON.parse(_.data);if(s.type=="finish"){a&&a.close();return}},a.onerror=function(_){console.log("onerror:",_),alert("server error"),a.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",_),a.close()},a.addEventListener("customEventName",function(_){console.log("Message id is "+_.lastEventId)});case 7:case"end":return D.stop()}},r)})),L.apply(this,arguments)}function G(r,n){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,u){var t,a,o;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("sendMessageSSEPolyfill: ",n),t=localStorage.ACCESS_TOKEN,a="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(n.sid,"&content=").concat(n.content),o=new EventSourcePolyfill(a,{headers:{Authorization:"Bearer ".concat(t)}}),o.onopen=function(s){console.log("onopen:",s.target)},o.onmessage=function(s){console.log("onmessage:",s.data),u(s.data);var k=JSON.parse(s.data);if(k.type=="finish"){o&&o.close();return}},o.onerror=function(s){console.log("onerror:",s),alert("server error"),o.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",s),o.close()},o.addEventListener("customEventName",function(s){console.log("Message id is "+s.lastEventId)});case 8:case"end":return _.stop()}},r)})),C.apply(this,arguments)}},65214:function(W,m,e){e.r(m);var p=e(15009),i=e.n(p),g=e(99289),E=e.n(g),f=e(5574),l=e.n(f),R=e(80049),v=e(70150),y=e(69888),j=e(87676),A=e(58638),I=e(57482),b=e(86745),U=e(14726),O=e(67294),d=e(85893),N=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,d.jsx)(b.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",copyable:!0},{title:(0,d.jsx)(b.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,d.jsx)(b.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,d.jsx)(b.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",hideInSearch:!0},{title:(0,d.jsx)(b.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],B=function(){var T=(0,b.useIntl)(),z=(0,O.useRef)(),L=(0,O.useState)(1),G=l()(L,2),C=G[0],r=G[1],n=(0,O.useState)(10),u=l()(n,2),t=u[0],a=u[1],o=(0,O.useState)({}),D=l()(o,2),_=D[0],s=D[1],k=(0,j.u)(function(c){return c.currentOrg}),F=(0,y.G)(function(c){return{messageResult:c.messageResult,setMessageResult:c.setMessageResult}}),x=F.messageResult,H=F.setMessageResult,J=[].concat(N,[{title:T.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(P,M,h,w){return[(0,d.jsx)("a",{onClick:function(){},children:T.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),$=function(){var c=E()(i()().mark(function P(){var M,h;return i()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return M={pageNumber:C-1,pageSize:t,orgUid:k.uid},S.next=3,(0,v.W5)(M);case 3:h=S.sent,console.log("getAllMessages response:",M,h),h.code===200?H(h):R.yw.error(h.message);case 6:case"end":return S.stop()}},P)}));return function(){return c.apply(this,arguments)}}();(0,O.useEffect)(function(){$()},[]),(0,O.useEffect)(function(){$()},[C,t]),(0,O.useEffect)(function(){console.log("messageResult:",x),z.current.reload()},[x]);var V=function(){console.log("handleExportExcel"),R.yw.warning("\u5373\u5C06\u4E0A\u7EBF\uFF0C\u656C\u8BF7\u671F\u5F85")};return(0,d.jsx)(I.Z,{columns:J,actionRef:z,cardBordered:!0,request:function(){var c=E()(i()().mark(function P(M,h,w){return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("request:",M,h,w),r(M.current),a(M.pageSize),K.abrupt("return",Promise.resolve({data:x.data.content,success:!0,total:x.data.totalElements}));case 4:case"end":return K.stop()}},P)}));return function(P,M,h){return c.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:t,showQuickJumper:!0,onChange:function(P){console.log("page:",P)}},dateFormatter:"string",headerTitle:"\u5BA2\u6237\u4FE1\u606F\u5217\u8868",toolBarRender:function(){return[(0,d.jsx)(U.ZP,{icon:(0,d.jsx)(A.Z,{}),type:"primary",onClick:V,children:T.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})};m.default=B},69888:function(W,m,e){e.d(m,{G:function(){return f}});var p=e(85615),i=e(73445),g=e(782),E=e(18753),f=(0,i.Ue)()((0,g.mW)((0,g.tJ)((0,E.n)(function(l,R){return{messageResult:{data:{content:[]}},setMessageResult:function(y){l({messageResult:y})},deleteMessageCache:function(){return l({},!0)}}}),{name:p.j87})))},87676:function(W,m,e){e.d(m,{u:function(){return f}});var p=e(85615),i=e(73445),g=e(782),E=e(18753),f=(0,i.Ue)()((0,g.mW)((0,g.tJ)((0,E.n)(function(l,R){return{currentOrg:{uid:"",name:"",description:""},setCurrentOrg:function(y){l({currentOrg:y})},deleteOrg:function(){return l({},!0)}}}),{name:p.eRd})))}}]);