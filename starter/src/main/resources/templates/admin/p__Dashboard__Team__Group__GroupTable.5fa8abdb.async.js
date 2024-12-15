"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[7139],{47719:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(17082),o=n(44194),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},l=n(64423),c=function(e,r){return o.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:r,icon:a}))};var i=o.forwardRef(c)},96066:function(e,r,n){n.d(r,{V3:function(){return u}});var t=n(90819),o=n.n(t),a=n(73193),l=n.n(a),c=n(89933),i=n.n(c),s=n(77667),d=n(7206);function u(e){return g.apply(this,arguments)}function g(){return(g=i()(o()().mark((function e(r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/group/query/org",{method:"GET",params:l()(l()({},r),{},{client:s.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},12794:function(e,r,n){n.r(r);var t=n(90819),o=n.n(t),a=n(73193),l=n.n(a),c=n(84176),i=n.n(c),s=n(89933),d=n.n(s),u=n(89756),g=n(96066),p=n(40431),f=n(47719),m=n(52519),h=n(7206),b=n(95943),y=n(46639),v=n(12265),C=n(44194),x=n(31549),k=["current"];r.default=function(){var e=(0,h.useIntl)(),r=(0,C.useRef)(),n=(0,p.u)((function(e){return e.currentOrg})),t=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,x.jsx)(h.FormattedMessage,{id:"name",defaultMessage:"Name"}),dataIndex:"name",copyable:!0},{title:"状态",dataIndex:"status",hideInSearch:!0},{title:"管理员",dataIndex:"admins",hideInSearch:!0,render:function(e,r){if(null==r||!r.admins)return null;var n=r.admins.slice(0,2).map((function(e){return(0,x.jsx)(b.Z,{children:e.nickname},e.uid)}));return r.admins.length>2&&n.push((0,x.jsx)("span",{children:"..."},"ellipsis")),(0,x.jsx)(x.Fragment,{children:n})}},{title:"成员",dataIndex:"members",hideInSearch:!0,render:function(e,r){if(null==r||!r.members)return null;var n=r.members.slice(0,2).map((function(e){return(0,x.jsx)(b.Z,{children:e.nickname},e.uid)}));return r.members.length>2&&n.push((0,x.jsx)("span",{children:"..."},"ellipsis")),(0,x.jsx)(x.Fragment,{children:n})}},{title:(0,x.jsx)(h.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0,hideInSearch:!0},{title:"创建人",dataIndex:"creator",hideInSearch:!0,render:function(e,r){var n;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(b.Z,{children:null==r||null===(n=r.creator)||void 0===n?void 0:n.nickname})})}},{title:(0,x.jsx)(h.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(r,n,t,o){return[(0,x.jsx)("a",{onClick:function(){var e;e=n,console.log("edit",e),u.yw.warning("TODO: 即将上线，敬请期待")},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable"),(0,x.jsx)(y.Z,{title:"解散确认",description:"确定要解散该群?",onConfirm:function(){return e=n,console.log("dismiss",e),void u.yw.warning("TODO: 即将上线，敬请期待");var e},okText:"确定",cancelText:"取消",children:(0,x.jsx)(v.ZP,{type:"link",danger:!0,children:"解散"})},"dismiss")]}}],a=function(){console.log("handleExportExcel"),u.yw.warning("TODO: 即将上线，敬请期待")};return(0,x.jsx)(m.Z,{columns:t,actionRef:r,cardBordered:!0,request:function(){var e=d()(o()().mark((function e(r,t,a){var c,s,d;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.current,c=i()(r,k),s=l()({pageNumber:r.current-1,orgUid:n.uid},c),e.next=4,(0,g.V3)(s);case 4:return d=e.sent,console.log("queryGroupsByOrgUid response:",d,s),200===d.code||u.yw.error(d.message),e.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 8:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"群组",toolBarRender:function(){return[(0,x.jsx)(v.ZP,{icon:(0,x.jsx)(f.Z,{}),type:"primary",onClick:a,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}},95943:function(e,r,n){n.d(r,{Z:function(){return E}});var t=n(44194),o=n(51865),a=n.n(o),l=n(82252),c=n(86834),i=n(76294),s=n(65441),d=n(51240),u=n(19735),g=n(29664),p=n(66671),f=n(35912),m=n(53681),h=n(2645);const b=e=>{const{lineWidth:r,fontSizeIcon:n,calc:t}=e,o=e.fontSizeSM;return(0,m.IX)(e,{tagFontSize:o,tagLineHeight:(0,g.bf)(t(e.lineHeightSM).mul(o).equal()),tagIconSize:t(n).sub(t(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},y=e=>({defaultBg:new p.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var v=(0,h.I$)("Tag",(e=>(e=>{const{paddingXXS:r,lineWidth:n,tagPaddingHorizontal:t,componentCls:o,calc:a}=e,l=a(t).sub(n).equal(),c=a(r).sub(n).equal();return{[o]:Object.assign(Object.assign({},(0,f.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(b(e))),y),C=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n};const x=t.forwardRef(((e,r)=>{const{prefixCls:n,style:o,className:l,checked:c,onChange:i,onClick:s}=e,d=C(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:p}=t.useContext(u.E_),f=g("tag",n),[m,h,b]=v(f),y=a()(f,`${f}-checkable`,{[`${f}-checkable-checked`]:c},null==p?void 0:p.className,l,h,b);return m(t.createElement("span",Object.assign({},d,{ref:r,style:Object.assign(Object.assign({},o),null==p?void 0:p.style),className:y,onClick:e=>{null==i||i(!c),null==s||s(e)}})))}));var k=x,$=n(43561);var O=(0,h.bk)(["Tag","preset"],(e=>(e=>(0,$.Z)(e,((r,n)=>{let{textColor:t,lightBorderColor:o,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:t,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(b(e))),y);const j=(e,r,n)=>{const t="string"!=typeof(o=n)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${n}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var w=(0,h.bk)(["Tag","status"],(e=>{const r=b(e);return[j(r,"success","Success"),j(r,"processing","Info"),j(r,"error","Error"),j(r,"warning","Warning")]}),y),S=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n};const I=t.forwardRef(((e,r)=>{const{prefixCls:n,className:o,rootClassName:g,style:p,children:f,icon:m,color:h,onClose:b,bordered:y=!0,visible:C}=e,x=S(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:k,direction:$,tag:j}=t.useContext(u.E_),[I,T]=t.useState(!0),E=(0,l.Z)(x,["closeIcon","closable"]);t.useEffect((()=>{void 0!==C&&T(C)}),[C]);const M=(0,c.o2)(h),B=(0,c.yT)(h),P=M||B,Z=Object.assign(Object.assign({backgroundColor:h&&!P?h:void 0},null==j?void 0:j.style),p),N=k("tag",n),[z,F,H]=v(N),R=a()(N,null==j?void 0:j.className,{[`${N}-${h}`]:P,[`${N}-has-color`]:h&&!P,[`${N}-hidden`]:!I,[`${N}-rtl`]:"rtl"===$,[`${N}-borderless`]:!y},o,g,F,H),q=e=>{e.stopPropagation(),null==b||b(e),e.defaultPrevented||T(!1)},[,A]=(0,i.Z)((0,i.w)(e),(0,i.w)(j),{closable:!1,closeIconRender:e=>{const r=t.createElement("span",{className:`${N}-close-icon`,onClick:q},e);return(0,s.wm)(e,r,(e=>({onClick:r=>{var n;null===(n=null==e?void 0:e.onClick)||void 0===n||n.call(e,r),q(r)},className:a()(null==e?void 0:e.className,`${N}-close-icon`)})))}}),D="function"==typeof x.onClick||f&&"a"===f.type,W=m||null,L=W?t.createElement(t.Fragment,null,W,f&&t.createElement("span",null,f)):f,V=t.createElement("span",Object.assign({},E,{ref:r,className:R,style:Z}),L,A,M&&t.createElement(O,{key:"preset",prefixCls:N}),B&&t.createElement(w,{key:"status",prefixCls:N}));return z(D?t.createElement(d.Z,{component:"Tag"},V):V)})),T=I;T.CheckableTag=k;var E=T}}]);