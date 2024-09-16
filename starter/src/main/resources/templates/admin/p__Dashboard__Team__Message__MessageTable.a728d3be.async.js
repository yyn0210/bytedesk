"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1398],{58638:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(1413),r=n(67294),s={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},o=n(89099),i=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};var u=r.forwardRef(i)},70150:function(e,t,n){n.d(t,{W5:function(){return d}});var a=n(15009),r=n.n(a),s=n(97857),o=n.n(s),i=n(99289),u=n.n(i),c=(n(85615),n(86745));function d(e){return l.apply(this,arguments)}function l(){return(l=u()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/message/query/org",{method:"GET",params:o()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},12801:function(e,t,n){var a=n(15009),r=n.n(a),s=n(97857),o=n.n(s),i=n(13769),u=n.n(i),c=n(99289),d=n.n(c),l=n(80049),g=n(70150),p=n(73803),f=n(87676),h=n(85615),m=n(17634),x=n(58638),v=n(74190),M=n(86745),w=n(14726),y=n(67294),b=n(85893),k=["current"];t.Z=function(e){e.type;var t=(0,M.useIntl)(),n=(0,y.useRef)(),a=(0,p.Z)().translateString,s=(0,f.u)((function(e){return e.currentOrg})),i=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,b.jsx)(M.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"nickname",render:function(e,t){var n;return(0,b.jsx)(b.Fragment,{children:a(null==t||null===(n=t.user)||void 0===n?void 0:n.nickname)})}},{title:(0,b.jsx)(M.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",width:300,copyable:!0,render:function(e,t){var n;return(0,b.jsx)(b.Fragment,{children:(null==t?void 0:t.content.length)>50?null==t||null===(n=t.content)||void 0===n?void 0:n.substring(0,50):a(null==t?void 0:t.content)})}},{title:(0,b.jsx)(M.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",width:100,hideInSearch:!0},{title:(0,b.jsx)(M.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",width:100,copyable:!0},{title:(0,b.jsx)(M.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",width:100,hideInSearch:!0,copyable:!0},{title:(0,b.jsx)(M.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",width:180,sorter:!0,hideInSearch:!0}],c=function(){console.log("handleExportExcel");var e=localStorage.getItem(h.LA8);window.open((0,m.SV)()+"/api/v1/message/export?uid="+s.uid+"&pageNumber=0&pageSize=20&accessToken="+e)};return(0,b.jsx)(v.Z,{columns:i,actionRef:n,cardBordered:!0,request:function(){var e=d()(r()().mark((function e(t,n,a){var i,c,d;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,n,a),t.current,i=u()(t,k),c=o()({pageNumber:t.current-1,orgUid:s.uid},i),e.next=5,(0,g.W5)(c);case 5:return d=e.sent,console.log("getAllMessages response:",c,d),200===d.code||l.yw.error(d.message),e.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:t.formatMessage({id:"message",defaultMessage:"Message"}),toolBarRender:function(){return[(0,b.jsx)(w.ZP,{icon:(0,b.jsx)(x.Z,{}),type:"primary",onClick:c,children:t.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}},69909:function(e,t,n){n.r(t);var a=n(12801),r=n(85893);t.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{type:"team"})})}}}]);