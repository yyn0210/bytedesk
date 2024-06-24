"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1398],{58638:function(W,g,e){e.d(g,{Z:function(){return D}});var c=e(1413),o=e(67294),m={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},p=m,E=e(91146),h=function(R,C){return o.createElement(E.Z,(0,c.Z)((0,c.Z)({},R),{},{ref:C,icon:p}))},O=o.forwardRef(h),D=O},70150:function(W,g,e){e.d(g,{W5:function(){return C}});var c=e(15009),o=e.n(c),m=e(97857),p=e.n(m),E=e(99289),h=e.n(E),O=e(85615),D=e(88541),s=e.n(D),R=e(86745);function C(r){return I.apply(this,arguments)}function I(){return I=h()(o()().mark(function r(n){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,R.request)("/api/v1/message/org",{method:"GET",params:p()({},n)}));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function k(r){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:n.pageNumber,size:n.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},r)})),U.apply(this,arguments)}function v(r){return S.apply(this,arguments)}function S(){return S=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:n,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},r)})),S.apply(this,arguments)}function G(r,n){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,M){var t,u;return _regeneratorRuntime().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:console.log("sendMessageSSE: ",n),t="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(n.sid,"&content=").concat(n.content),u=new EventSource(t,{withCredentials:!1}),u.onopen=function(_){console.log("onopen:",_.target)},u.onmessage=function(_){M(_.data);var l=JSON.parse(_.data);if(l.type=="finish"){u&&u.close();return}},u.onerror=function(_){console.log("onerror:",_),alert("server error"),u.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",_),u.close()},u.addEventListener("customEventName",function(_){console.log("Message id is "+_.lastEventId)});case 7:case"end":return b.stop()}},r)})),x.apply(this,arguments)}function i(r,n){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,M){var t,u,d;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("sendMessageSSEPolyfill: ",n),t=localStorage.ACCESS_TOKEN,u="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(n.sid,"&content=").concat(n.content),d=new EventSourcePolyfill(u,{headers:{Authorization:"Bearer ".concat(t)}}),d.onopen=function(l){console.log("onopen:",l.target)},d.onmessage=function(l){console.log("onmessage:",l.data),M(l.data);var L=JSON.parse(l.data);if(L.type=="finish"){d&&d.close();return}},d.onerror=function(l){console.log("onerror:",l),alert("server error"),d.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",l),d.close()},d.addEventListener("customEventName",function(l){console.log("Message id is "+l.lastEventId)});case 8:case"end":return _.stop()}},r)})),A.apply(this,arguments)}},12801:function(W,g,e){var c=e(15009),o=e.n(c),m=e(97857),p=e.n(m),E=e(13769),h=e.n(E),O=e(99289),D=e.n(O),s=e(80049),R=e(70150),C=e(73803),I=e(87676),k=e(58638),U=e(53719),v=e(86745),S=e(7134),G=e(14726),x=e(67294),i=e(85893),A=["current"],r=function(M){var t=M.type,u=(0,v.useIntl)(),d=(0,x.useRef)(),b=(0,C.Z)(),_=b.translateString,l=(0,I.u)(function(f){return f.orgCurrent}),L=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,i.jsx)(v.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"nickname",render:function(P,a){var j,B;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.C,{src:a==null||(j=a.user)===null||j===void 0?void 0:j.avatar}),_(a==null||(B=a.user)===null||B===void 0?void 0:B.nickname)]})}},{title:(0,i.jsx)(v.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",copyable:!0,render:function(P,a){return(0,i.jsx)(i.Fragment,{children:_(a==null?void 0:a.content)})}},{title:(0,i.jsx)(v.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,i.jsx)(v.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,i.jsx)(v.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",copyable:!0},{title:(0,i.jsx)(v.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],F=function(){console.log("handleExportExcel"),s.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,i.jsx)(U.Z,{columns:L,actionRef:d,cardBordered:!0,request:function(){var f=D()(o()().mark(function P(a,j,B){var N,Z,K,y;return o()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return console.log("request:",a,j,B),N=a.current,Z=h()(a,A),K=p()({pageNumber:a.current-1,orgUid:l.uid},Z),T.next=5,(0,R.W5)(K);case 5:return y=T.sent,console.log("getAllMessages response:",K,y),y.code===200||s.yw.error(y.message),T.abrupt("return",{data:y.data.content,success:!0,total:y.data.totalElements});case 9:case"end":return T.stop()}},P)}));return function(P,a,j){return f.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(P){console.log("page:",P)}},dateFormatter:"string",headerTitle:u.formatMessage({id:"message",defaultMessage:"Message"}),toolBarRender:function(){return[(0,i.jsx)(G.ZP,{icon:(0,i.jsx)(k.Z,{}),type:"primary",onClick:F,children:u.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})};g.Z=r},73803:function(W,g,e){var c=e(85615),o=e(66419),m=e(86745);function p(){var E=(0,m.useIntl)(),h=function(s){return s&&s.startsWith(c.Vo)?E.formatMessage({id:s,defaultMessage:s}):s},O=function(s){return s!=null&&s.startsWith(c.Vo)?(0,o.aS)(E.formatMessage({id:s}),10):(0,o.aS)(s,10)};return{translateString:h,translateStringTranct:O}}g.Z=p},69909:function(W,g,e){e.r(g);var c=e(12801),o=e(85893),m=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c.Z,{type:"team"})})};g.default=m}}]);
