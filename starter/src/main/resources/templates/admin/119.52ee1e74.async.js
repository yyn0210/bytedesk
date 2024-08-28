"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[119],{11475:function(F,D,t){t.d(D,{Z:function(){return M}});var a=t(1413),c=t(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},P=C,O=t(89099),u=function(A,E){return c.createElement(O.Z,(0,a.Z)((0,a.Z)({},A),{},{ref:E,icon:P}))},j=c.forwardRef(u),M=j},58638:function(F,D,t){t.d(D,{Z:function(){return M}});var a=t(1413),c=t(67294),C={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},P=C,O=t(89099),u=function(A,E){return c.createElement(O.Z,(0,a.Z)((0,a.Z)({},A),{},{ref:E,icon:P}))},j=c.forwardRef(u),M=j},14101:function(F,D,t){t.d(D,{Nm:function(){return H},fk:function(){return M}});var a=t(15009),c=t.n(a),C=t(97857),P=t.n(C),O=t(99289),u=t.n(O),j=t(86745);function M(m){return i.apply(this,arguments)}function i(){return i=u()(c()().mark(function m(p){return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/v1/thread/query/org",{method:"GET",params:P()({},p)}));case 1:case"end":return l.stop()}},m)})),i.apply(this,arguments)}function A(m){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function m(p){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/v1/thread/update",{method:"POST",data:_objectSpread({},p)}));case 1:case"end":return l.stop()}},m)})),E.apply(this,arguments)}function H(m){return K.apply(this,arguments)}function K(){return K=u()(c()().mark(function m(p){return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/v1/thread/close",{method:"POST",data:P()({},p)}));case 1:case"end":return l.stop()}},m)})),K.apply(this,arguments)}function V(m){return z.apply(this,arguments)}function z(){return z=_asyncToGenerator(_regeneratorRuntime().mark(function m(p){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/v1/thread/delete",{method:"POST",data:_objectSpread({},p)}));case 1:case"end":return l.stop()}},m)})),z.apply(this,arguments)}function G(m){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime().mark(function m(p){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/v1/thread/export",{method:"GET",params:_objectSpread({},p)}));case 1:case"end":return l.stop()}},m)})),W.apply(this,arguments)}},60119:function(F,D,t){var a=t(97857),c=t.n(a),C=t(13769),P=t.n(C),O=t(15009),u=t.n(O),j=t(99289),M=t.n(j),i=t(5574),A=t.n(i),E=t(80049),H=t(14101),K=t(73803),V=t(87676),z=t(85615),G=t(11475),W=t(58638),m=t(57482),p=t(86745),k=t(66309),l=t(85576),te=t(14726),ne=t(67294),f=t(85893),re=["current"],X=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,f.jsx)(p.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"userNickname",hideInSearch:!0,render:function(ee,I){var g;return I==null||(g=I.user)===null||g===void 0?void 0:g.nickname}},{title:(0,f.jsx)(p.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,f.jsx)(p.FormattedMessage,{id:"unreadCount",defaultMessage:"Unread Count"}),dataIndex:"unreadCount",hideInSearch:!0},{title:(0,f.jsx)(p.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",copyable:!0,hideInSearch:!0},{title:"\u6240\u6709\u8005",dataIndex:"ownerNickname",render:function(ee,I){var g;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(k.Z,{children:I==null||(g=I.owner)===null||g===void 0?void 0:g.nickname})})}},{title:"\u6765\u6E90",dataIndex:"client",hideInSearch:!0},{title:(0,f.jsx)(p.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0}],ae=function(ee){var I=ee.type,g=(0,p.useIntl)(),e=(0,ne.useRef)(),s=(0,V.u)(function(b){return b.currentOrg}),d=(0,K.Z)(),n=d.translateString,r=l.Z.useModal(),x=A()(r,2),h=x[0],$=x[1],R=function(_){var o;h.confirm({title:g.formatMessage({id:"closeTip",defaultMessage:"Close Tip"}),icon:(0,f.jsx)(G.Z,{}),content:"".concat(g.formatMessage({id:"closeASure",defaultMessage:"closeASure"}),"\u3010").concat(n(_==null||(o=_.user)===null||o===void 0?void 0:o.nickname),"\u3011\uFF1F"),onOk:function(){Z(_)},onCancel:function(){},okText:g.formatMessage({id:"ok"}),cancelText:g.formatMessage({id:"cancel"})})},N=[].concat(X,[{title:g.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:50,render:function(_,o,T,y){return[!B(o)&&(0,f.jsx)("a",{onClick:function(){R(o)},children:"\u5173\u95ED"},"editable")]}}]),B=function(_){return _.status.indexOf("CLOSED")>-1},Z=function(){var b=M()(u()().mark(function _(o){var T,y;return u()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return console.log("handleCloseThread:",o),E.yw.loading(g.formatMessage({id:"closing",defaultMessage:"Closing"})),S.next=4,(0,H.Nm)(o);case 4:T=S.sent,console.log("handleCloseThread response:",o,T),T.code===200?(E.yw.destroy(),E.yw.success(g.formatMessage({id:"close.success",defaultMessage:"Close Success"})),(y=e.current)===null||y===void 0||y.reload()):(E.yw.destroy(),E.yw.error(T.message));case 7:case"end":return S.stop()}},_)}));return function(o){return b.apply(this,arguments)}}(),L=function(){var b=M()(u()().mark(function _(){var o;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:console.log("handleExportExcel"),o=localStorage.getItem(z.LA8),window.open("/api/v1/thread/export?uid="+s.uid+"&pageNumber=0&pageSize=20&accessToken="+o);case 3:case"end":return y.stop()}},_)}));return function(){return b.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.Z,{columns:N,actionRef:e,cardBordered:!0,request:function(){var b=M()(u()().mark(function _(o,T,y){var Y,S,J,U;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("request:",o,T,y),Y=o.current,S=P()(o,re),J=c()({pageNumber:o.current-1,orgUid:s.uid},S),v.next=5,(0,H.fk)(J);case 5:return U=v.sent,console.log("getAllThreads response:",U,J),U.code===200||E.yw.error(U.message),v.abrupt("return",{data:U.data.content,success:!0,total:U.data.totalElements});case 9:case"end":return v.stop()}},_)}));return function(_,o,T){return b.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(_){console.log("page:",_)}},dateFormatter:"string",headerTitle:g.formatMessage({id:"thread",defaultMessage:"Thread"}),toolBarRender:function(){return[(0,f.jsx)(te.ZP,{icon:(0,f.jsx)(W.Z,{}),type:"primary",onClick:L,children:g.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}}),$]})};D.Z=ae},73803:function(F,D,t){var a=t(85615),c=t(66419),C=t(86745);function P(){var O=(0,C.useIntl)(),u=function(i){return i&&i.startsWith(a.VoP)?O.formatMessage({id:i,defaultMessage:i}):i},j=function(i){return i!=null&&i.startsWith(a.VoP)?(0,c.aS)(O.formatMessage({id:i}),10):(0,c.aS)(i,10)};return{translateString:u,translateStringTranct:j}}D.Z=P},87676:function(F,D,t){t.d(D,{u:function(){return O}});var a=t(85615),c=t(73445),C=t(782),P=t(18753),O=(0,c.Ue)()((0,C.mW)((0,C.tJ)((0,P.n)(function(u,j){return{currentOrg:{uid:"",name:"",description:""},setCurrentOrg:function(i){u({currentOrg:i})},deleteOrg:function(){return u({},!0)}}}),{name:a.eRd})))},66309:function(F,D,t){t.d(D,{Z:function(){return g}});var a=t(67294),c=t(93967),C=t.n(c),P=t(98423),O=t(98787),u=t(69760),j=t(96159),M=t(45353),i=t(53124),A=t(85982),E=t(10274),H=t(14747),K=t(45503),V=t(27036);const z=e=>{const{paddingXXS:s,lineWidth:d,tagPaddingHorizontal:n,componentCls:r,calc:x}=e,h=x(n).sub(d).equal(),$=x(s).sub(d).equal();return{[r]:Object.assign(Object.assign({},(0,H.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:h,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,A.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:$,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:h}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},G=e=>{const{lineWidth:s,fontSizeIcon:d,calc:n}=e,r=e.fontSizeSM;return(0,K.TS)(e,{tagFontSize:r,tagLineHeight:(0,A.bf)(n(e.lineHeightSM).mul(r).equal()),tagIconSize:n(d).sub(n(s).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},W=e=>({defaultBg:new E.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var m=(0,V.I$)("Tag",e=>{const s=G(e);return z(s)},W),p=function(e,s){var d={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(d[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)s.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(d[n[r]]=e[n[r]]);return d},l=a.forwardRef((e,s)=>{const{prefixCls:d,style:n,className:r,checked:x,onChange:h,onClick:$}=e,R=p(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:N,tag:B}=a.useContext(i.E_),Z=y=>{h==null||h(!x),$==null||$(y)},L=N("tag",d),[b,_,o]=m(L),T=C()(L,`${L}-checkable`,{[`${L}-checkable-checked`]:x},B==null?void 0:B.className,r,_,o);return b(a.createElement("span",Object.assign({},R,{ref:s,style:Object.assign(Object.assign({},n),B==null?void 0:B.style),className:T,onClick:Z})))}),te=t(98719);const ne=e=>(0,te.Z)(e,(s,d)=>{let{textColor:n,lightBorderColor:r,lightColor:x,darkColor:h}=d;return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:n,background:x,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:h,borderColor:h},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var f=(0,V.bk)(["Tag","preset"],e=>{const s=G(e);return ne(s)},W);function re(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const X=(e,s,d)=>{const n=re(d);return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:e[`color${d}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var ae=(0,V.bk)(["Tag","status"],e=>{const s=G(e);return[X(s,"success","Success"),X(s,"processing","Info"),X(s,"error","Error"),X(s,"warning","Warning")]},W),q=function(e,s){var d={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(d[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)s.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(d[n[r]]=e[n[r]]);return d};const I=a.forwardRef((e,s)=>{const{prefixCls:d,className:n,rootClassName:r,style:x,children:h,icon:$,color:R,onClose:N,bordered:B=!0,visible:Z}=e,L=q(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:b,direction:_,tag:o}=a.useContext(i.E_),[T,y]=a.useState(!0),Y=(0,P.Z)(L,["closeIcon","closable"]);a.useEffect(()=>{Z!==void 0&&y(Z)},[Z]);const S=(0,O.o2)(R),J=(0,O.yT)(R),U=S||J,oe=Object.assign(Object.assign({backgroundColor:R&&!U?R:void 0},o==null?void 0:o.style),x),v=b("tag",d),[_e,ce,me]=m(v),ge=C()(v,o==null?void 0:o.className,{[`${v}-${R}`]:U,[`${v}-has-color`]:R&&!U,[`${v}-hidden`]:!T,[`${v}-rtl`]:_==="rtl",[`${v}-borderless`]:!B},n,r,ce,me),le=Q=>{Q.stopPropagation(),N==null||N(Q),!Q.defaultPrevented&&y(!1)},[,pe]=(0,u.Z)((0,u.w)(e),(0,u.w)(o),{closable:!1,closeIconRender:Q=>{const he=a.createElement("span",{className:`${v}-close-icon`,onClick:le},Q);return(0,j.wm)(Q,he,w=>({onClick:ue=>{var se;(se=w==null?void 0:w.onClick)===null||se===void 0||se.call(w,ue),le(ue)},className:C()(w==null?void 0:w.className,`${v}-close-icon`)}))}}),ve=typeof L.onClick=="function"||h&&h.type==="a",ie=$||null,fe=ie?a.createElement(a.Fragment,null,ie,h&&a.createElement("span",null,h)):h,de=a.createElement("span",Object.assign({},Y,{ref:s,className:ge,style:oe}),fe,pe,S&&a.createElement(f,{key:"preset",prefixCls:v}),J&&a.createElement(ae,{key:"status",prefixCls:v}));return _e(ve?a.createElement(M.Z,{component:"Tag"},de):de)});I.CheckableTag=l;var g=I}}]);