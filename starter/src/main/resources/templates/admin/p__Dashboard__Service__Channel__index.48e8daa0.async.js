"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5131],{66831:function(e,n,t){t.r(n),t.d(n,{default:function(){return Zt}});var r=t(93139),i=t(64476),a=t(45332),l=t.n(a),c=t(74145),o=t(73193),s=t.n(o),u=t(76711),d=t.n(u),h=t(77667),f=t(39701),p=t(83642),x=t(41617),m=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{llmproviderResult:{data:{content:[]}},currentChannel:{name:"web",nickname:"网站/H5"},currentType:h.aZD,insertChannel:function(n){e((function(e){e.llmproviderResult.data.content.unshift(n)}))},setChannelResult:function(t){e({llmproviderResult:t});var r,i=n().currentChannel;""!==i.uid&&void 0!==i||(null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentChannel:t.data.content[0]})},setCurrentChannel:function(t){var r=n().llmproviderResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),l=s()(s()({},n().llmproviderResult),{},{data:{content:a}});e({llmproviderResult:l,currentChannel:t})}else e({currentChannel:t})},setCurrentType:function(n){e({currentType:n})},deleteCurrentChannel:function(t){var r=n().llmproviderResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({llmproviderResult:s()(s()({},n().llmproviderResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("Channel not found in cache:",t),n().currentChannel.uid===t&&e({currentChannel:{uid:""}})},deleteChannelCache:function(){return e({},!0)}}})),{name:h.uCV}))),g=t(90136),v=t(44194),j=t(31549),y=[{name:"web",nickname:"网站/H5"},{name:"react",nickname:"React"},{name:"vue",nickname:"Vue"},{name:"svelte",nickname:"Svelte"},{name:"vanilla",nickname:"Vanilla"},{name:"ios",nickname:"iOS"},{name:"android",nickname:"安卓"},{name:"uniapp",nickname:"Uniapp"},{name:"flutter",nickname:"Flutter"},{name:"wechat-mp",nickname:"微信公众号"},{name:"wechat-mini",nickname:"微信小程序"}],Z=function(){var e=(0,c.Z)().isDarkMode,n=(0,v.useState)([]),t=l()(n,2),r=t[0],i=t[1],a=m((function(e){return{currentChannel:e.currentChannel,setCurrentChannel:e.setCurrentChannel}})),o=a.currentChannel,s=a.setCurrentChannel;return(0,v.useEffect)((function(){var e=[].concat(y);i(e)}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{itemLayout:"horizontal",dataSource:r,renderItem:function(n,t){return(0,j.jsx)(g.Z.Item,{style:(null==o?void 0:o.name)===n.name?{backgroundColor:e?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){s(n)},children:(0,j.jsx)(g.Z.Item.Meta,{title:(0,j.jsx)("div",{style:{marginLeft:10},children:n.nickname})})})}})})},b=t(93119),w=t(50571),M=t(90819),C=t.n(M),T=t(89933),k=t.n(T),W=t(89756),S=t(81153),A=t(43314),R=t(1780),D=t(85702),I=t(40431),P=t(61017),F=t(33959),E=t(72434),U=t(2748),K=t(42685),z=t(41956),L=t(76457),q=t(20988),N=t(48764),V=t(9579),O=t(15192),B=t(64352),G=t(60992),X=t(68925),J=t(81951),_=t(20924),H=t(302),$=t(81167),Q=b.Z.Title,Y=b.Z.Text,ee=function(){var e=(0,v.useRef)(!1),n=(0,R.Z)().translateString,t=m((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType,setCurrentType:e.setCurrentType}})),r=t.currentChannel,i=t.currentType,a=t.setCurrentType,c=(0,I.u)((function(e){return e.currentOrg})),o=[{label:"一对一",value:h.Njn},{label:"技能组",value:h.aZD}],s=(0,D.E)((function(e){return{agentResult:e.agentResult,currentAgent:e.currentAgent,setAgentResult:e.setAgentResult,setCurrentAgent:e.setCurrentAgent}})),u=s.agentResult,d=s.currentAgent,f=s.setAgentResult,p=s.setCurrentAgent,x=(0,v.useState)([]),g=l()(x,2),y=g[0],Z=g[1],b=(0,P.$)((function(e){return{workgroupResult:e.workgroupResult,currentWorkgroup:e.currentWorkgroup,setWorkgroupResult:e.setWorkgroupResult,setCurrentWorkgroup:e.setCurrentWorkgroup}})),w=b.workgroupResult,M=b.currentWorkgroup,T=b.setWorkgroupResult,ee=b.setCurrentWorkgroup,ne=(0,v.useState)(null==d?void 0:d.uid),te=l()(ne,2),re=te[0],ie=te[1],ae=(0,v.useState)(null==M?void 0:M.uid),le=l()(ae,2),ce=le[0],oe=le[1],se=(0,v.useState)([]),ue=l()(se,2),de=ue[0],he=ue[1],fe=function(){var t=k()(C()().mark((function t(){var r,i,a;return C()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=3;break}return console.log("isLoading: 1",e.current),t.abrupt("return");case 3:return e.current=!0,W.yw.loading("loading"),r={pageNumber:0,pageSize:50,orgUid:null==c?void 0:c.uid},t.next=8,(0,S._t)(r);case 8:i=t.sent,console.log("queryAgentsByOrg: ",i),200===i.code?(W.yw.destroy(),f(i),i.data.content.length>0&&(p(i.data.content[0]),ie(i.data.content[0].uid)),a=[],i.data.content.forEach((function(e){var t={label:n(e.nickname),value:e.uid};a.push(t)})),Z(a)):(W.yw.destroy(),W.yw.error(i.message)),e.current=!1;case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),pe=function(){var t=k()(C()().mark((function t(){var r,i,a;return C()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=3;break}return console.log("isLoading: 1",e.current),t.abrupt("return");case 3:return e.current=!0,W.yw.loading("loading"),r={pageNumber:0,pageSize:50,orgUid:null==c?void 0:c.uid},t.next=8,(0,A.u7)(r);case 8:i=t.sent,console.log("getWorkgroups",i),200===i.code?(W.yw.destroy(),T(i),i.data.content.length>0&&(ee(i.data.content[0]),oe(i.data.content[0].uid)),a=[],i.data.content.forEach((function(e){var t={label:n(e.nickname),value:e.uid};a.push(t)})),he(a)):(W.yw.destroy(),W.yw.error(i.message)),e.current=!1;case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,v.useEffect)((function(){i===h.Njn?fe():i===h.aZD?pe():console.log("error type")}),[i]),(0,v.useEffect)((function(){console.log("currentAgent",d),null!=d&&d.uid&&ie(d.uid)}),[d]),(0,v.useEffect)((function(){console.log("currentWorkgroup",M),null!=M&&M.uid&&oe(M.uid)}),[M]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(F.ZP.Group,{onChange:function(e){console.log("radio type checked:".concat(e.target.value)),a(e.target.value)},options:o,defaultValue:i,optionType:"button",buttonStyle:"solid"}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),i===h.Njn&&(null==d?void 0:d.uid)&&(0,j.jsx)(F.ZP.Group,{onChange:function(e){console.log("radio agent checked:".concat(e.target.value));var n=u.data.content.find((function(n){return n.uid===e.target.value}));p(n)},options:y,defaultValue:re,optionType:"button",buttonStyle:"solid"}),i===h.aZD&&(null==d?void 0:d.uid)&&(0,j.jsx)(F.ZP.Group,{onChange:function(e){console.log("radio workgroup checked:".concat(e.target.value));var n=w.data.content.find((function(n){return n.uid===e.target.value}));ee(n)},options:de,defaultValue:ce,optionType:"button",buttonStyle:"solid"}),(0,j.jsx)(E.Z,{}),(0,j.jsx)(Q,{level:5,children:"组织orgUid"}),(0,j.jsx)(Y,{code:!0,copyable:!0,children:null==c?void 0:c.uid}),(0,j.jsx)(Q,{level:5,children:"一对一当前客服Uid"}),(0,j.jsx)(Y,{code:!0,copyable:!0,children:null==d?void 0:d.uid}),(0,j.jsx)(Q,{level:5,children:"当前技能组Uid"}),(0,j.jsx)(Y,{code:!0,copyable:!0,children:null==M?void 0:M.uid}),(0,j.jsx)(E.Z,{}),"douyin"===(null==r?void 0:r.name)&&(0,j.jsx)(U.Z,{}),"xiaohongshu"===(null==r?void 0:r.name)&&(0,j.jsx)(K.Z,{}),"baidu"===(null==r?void 0:r.name)&&(0,j.jsx)(z.Z,{}),"weibo"===(null==r?void 0:r.name)&&(0,j.jsx)(L.Z,{}),"bilibili"===(null==r?void 0:r.name)&&(0,j.jsx)(q.Z,{}),"zhihu"===(null==r?void 0:r.name)&&(0,j.jsx)(N.Z,{}),"pdd"===(null==r?void 0:r.name)&&(0,j.jsx)(V.Z,{}),"jd"===(null==r?void 0:r.name)&&(0,j.jsx)(O.Z,{}),"qianniu"===(null==r?void 0:r.name)&&(0,j.jsx)(B.Z,{}),"doudian"===(null==r?void 0:r.name)&&(0,j.jsx)(G.Z,{}),"whatsapp"===(null==r?void 0:r.name)&&(0,j.jsx)(X.Z,{}),"telegram"===(null==r?void 0:r.name)&&(0,j.jsx)(J.Z,{}),"line"===(null==r?void 0:r.name)&&(0,j.jsx)(_.Z,{}),"shopify"===(null==r?void 0:r.name)&&(0,j.jsx)(H.Z,{}),"lazada"===(null==r?void 0:r.name)&&(0,j.jsx)($.Z,{})]})},ne=t(83440),te=t(33067),re=t(82980),ie=t(53499),ae=t(8401),le=t(26727),ce=t(34077),oe=t(96144),se=t(45831),ue=function(){var e=m((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType}})),n=e.currentChannel,t=e.currentType;return(0,j.jsxs)(j.Fragment,{children:["web"===(null==n?void 0:n.name)&&(0,j.jsx)(se.Z,{type:h._X4}),"react"===(null==n?void 0:n.name)&&(0,j.jsx)(ie.Z,{type:t}),"vue"===(null==n?void 0:n.name)&&(0,j.jsx)(oe.Z,{type:t}),"angular"===(null==n?void 0:n.name)&&(0,j.jsx)(ie.Z,{type:t}),"svelte"===(null==n?void 0:n.name)&&(0,j.jsx)(ae.Z,{type:t}),"vanilla"===(null==n?void 0:n.name)&&(0,j.jsx)(ce.Z,{type:t}),"ios"===(null==n?void 0:n.name)&&(0,j.jsx)(re.Z,{type:t}),"android"===(null==n?void 0:n.name)&&(0,j.jsx)(ne.Z,{type:t}),"uniapp"===(null==n?void 0:n.name)&&(0,j.jsx)(le.Z,{type:t}),"flutter"===(null==n?void 0:n.name)&&(0,j.jsx)(te.Z,{type:t})]})},de=t(56746),he=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{wechatMpResult:{data:{content:[]}},currentWechatMp:{uid:"",nickname:"",avatar:"",description:""},insertWechatMp:function(n){e((function(e){e.wechatMpResult.data.content.unshift(n)}))},updateWechatMp:function(n){e((function(e){var t=e.wechatMpResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t[r]=n:console.warn("WechatMp with uid ".concat(n.uid," not found."))}))},deleteWechatMp:function(n){e((function(e){var t=e.wechatMpResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t.splice(r,1):console.warn("WechatMp with uid ".concat(n.uid," not found."))}))},setWechatMpResult:function(t){var r;(e({wechatMpResult:t}),""===n().currentWechatMp.uid)&&((null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentWechatMp:t.data.content[0]}))},setCurrentWechatMp:function(t){var r=n().wechatMpResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),l=s()(s()({},n().wechatMpResult),{},{data:{content:a}});e({wechatMpResult:l,currentWechatMp:t})}else console.warn("WechatMp with the specified uid not found."),e({currentWechatMp:t})},deleteCurrentWechatMp:function(t){var r=n().wechatMpResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({wechatMpResult:s()(s()({},n().wechatMpResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("WechatMp not found in cache:",t),n().currentWechatMp.uid===t&&e({currentWechatMp:{uid:""}})},deleteWechatMpCache:function(){return e({},!0)}}})),{name:h._SZ}))),fe=t(50484),pe=t(70458),xe=t(82045),me=t(83730),ge=t(80093),ve=t(12265),je=t(51444),ye=function(){var e=(0,xe.useIntl)(),n=(0,v.useRef)(!1),t=(0,R.Z)().translateStringTranct,r=(0,c.Z)().isDarkMode,i=(0,v.useState)(!1),a=l()(i,2),o=a[0],s=a[1],u=(0,v.useState)(!1),d=l()(u,2),h=d[0],f=d[1],p=(0,I.u)((function(e){return e.currentOrg})),x=he((function(e){return{wechatMpResult:e.wechatMpResult,currentWechatMp:e.currentWechatMp,setWechatMpResult:e.setWechatMpResult,insertWechatMp:e.insertWechatMp,setCurrentWechatMp:e.setCurrentWechatMp,deleteCurrentWechatMp:e.deleteCurrentWechatMp}})),m=x.wechatMpResult,y=x.currentWechatMp,Z=x.setWechatMpResult,b=x.insertWechatMp,w=x.setCurrentWechatMp,M=x.deleteCurrentWechatMp,T=me.Z.useModal(),S=l()(T,2),A=S[0],D=S[1],P=function(){var n=k()(C()().mark((function n(t){var r;return C()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete wechatMp",t),W.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),n.next=4,(0,de.ul)(t);case 4:r=n.sent,console.log("delete wechatMp response",r),200===r.code?(W.yw.destroy(),W.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),M(t.uid)):(W.yw.destroy(),W.yw.error(r.message));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){var e=k()(C()().mark((function e(){var t,r;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.current){e.next=3;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 3:return n.current=!0,W.yw.loading("loading"),t={pageNumber:0,pageSize:50,orgUid:p.uid},e.next=8,(0,de.aq)(t);case 8:r=e.sent,console.log("getWechatMps",r),200===r.code?(W.yw.destroy(),Z(r)):(W.yw.destroy(),W.yw.error(r.message)),n.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){F()}),[]);var E=function(){var e=k()(C()().mark((function e(n){var t;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,de._Z)(n);case 2:t=e.sent,console.log("handleCreateWechatMp response:",t),200===t.code?(b(t.data),s(!1)):W.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=k()(C()().mark((function e(n){var t;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.uid=null==y?void 0:y.uid,e.next=3,(0,de.sS)(n);case 3:t=e.sent,console.log("handleUpdateWechatMp response:",t),200===t.code?(w(t.data),s(!1)):W.yw.error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(ge.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,j.jsx)(ve.ZP,{size:"small",type:"primary",icon:(0,j.jsx)(pe.Z,{}),onClick:function(){s(!0),f(!1)},children:e.formatMessage({id:"bind",defaultMessage:"Bind"})}),(0,j.jsx)(ve.ZP,{size:"small",onClick:function(){f(!0),s(!0)},disabled:y&&""===y.uid,children:e.formatMessage({id:"edit",defaultMessage:"Edit"})}),(0,j.jsx)(ve.ZP,{size:"small",danger:!0,onClick:function(){return n=y,void A.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,j.jsx)(fe.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(n.name,"】？"),onOk:function(){P(n)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})});var n},disabled:y&&""===y.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,j.jsx)(g.Z,{itemLayout:"horizontal",dataSource:m.data.content,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{style:y.uid===e.uid?{backgroundColor:r?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){w(e)},children:(0,j.jsx)(g.Z.Item.Meta,{style:{marginLeft:"10px"},title:(0,j.jsx)(j.Fragment,{children:t(e.name)}),description:t(e.description)})})}}),o&&(0,j.jsx)(je.Z,{isEdit:h,open:o,wechatmp:y,onClose:function(){s(!1)},onSubmit:function(e){console.log("onDrawerSubmit:",e),h?U(e):E(e)}}),D]})},Ze=function(){var e=he((function(e){return{currentWechatMp:e.currentWechatMp}})).currentWechatMp;return(0,j.jsx)(j.Fragment,{children:""!==(null==e?void 0:e.uid)&&(0,j.jsxs)("div",{className:"flex items-center justify-end",children:[(0,j.jsxs)("p",{children:["URL: ",e.url,(0,j.jsx)(ve.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.url),W.yw.success("URL已复制")},children:"复制"})]}),(0,j.jsxs)("p",{children:["Token: ",e.token,(0,j.jsx)(ve.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.token),W.yw.success("Token已复制")},children:"复制"})]})]})})},be=function(e){console.log(e)},we=[{key:"agent",label:"客服管理",children:(0,j.jsx)(Ze,{})}],Me=function(){var e=(0,v.useState)([]),n=l()(e,2),t=n[0],r=n[1];return(0,v.useEffect)((function(){var e=[].concat(we);r(e)}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"agent",items:t,onChange:be})})},Ce=i.Z.Sider,Te=i.Z.Content,ke=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(Ce,{width:t,style:n,children:(0,j.jsx)(ye,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Te,{children:(0,j.jsx)(Me,{})})})]})},We=t(21276),Se=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Ae=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:Se,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},Re=function(e){console.log(e)},De=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Ie=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:De,onChange:Re})})},Pe=i.Z.Sider,Fe=i.Z.Content,Ee=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(Pe,{width:t,style:n,children:(0,j.jsx)(Ae,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Fe,{children:(0,j.jsx)(Ie,{})})})]})};function Ue(e){return Ke.apply(this,arguments)}function Ke(){return(Ke=k()(C()().mark((function e(n){return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,xe.request)("/api/v1/wechat/mini/create",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ze(e){return Le.apply(this,arguments)}function Le(){return(Le=k()(C()().mark((function e(n){return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,xe.request)("/api/v1/wechat/mini/update",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qe(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=k()(C()().mark((function e(n){return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,xe.request)("/api/v1/wechat/mini/delete",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=k()(C()().mark((function e(n){return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,xe.request)("/api/v1/wechat/mini/query/org",{method:"GET",params:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Be=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{wechatMiniResult:{data:{content:[]}},currentWechatMini:{uid:"",nickname:"",avatar:"",description:""},insertWechatMini:function(n){e((function(e){e.wechatMiniResult.data.content.unshift(n)}))},updateWechatMini:function(n){e((function(e){var t=e.wechatMiniResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t[r]=n:console.warn("WechatMini with uid ".concat(n.uid," not found."))}))},deleteWechatMini:function(n){e((function(e){var t=e.wechatMiniResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t.splice(r,1):console.warn("WechatMini with uid ".concat(n.uid," not found."))}))},setWechatMiniResult:function(t){var r;(e({wechatMiniResult:t}),""===n().currentWechatMini.uid)&&((null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentWechatMini:t.data.content[0]}))},setCurrentWechatMini:function(t){var r=n().wechatMiniResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),l=s()(s()({},n().wechatMiniResult),{},{data:{content:a}});e({wechatMiniResult:l,currentWechatMini:t})}else console.warn("WechatMini with the specified uid not found."),e({currentWechatMini:t})},deleteCurrentWechatMini:function(t){var r=n().wechatMiniResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({wechatMiniResult:s()(s()({},n().wechatMiniResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("WechatMini not found in cache:",t),n().currentWechatMini.uid===t&&e({currentWechatMini:{uid:""}})},deleteWechatMiniCache:function(){return e({},!0)}}})),{name:h.I5N}))),Ge=t(5728),Xe=t(43688),Je=t(8091),_e=t(61411),He=t(62599),$e=function(e){var n,t=e.isEdit,r=e.wechatmini,i=e.open,a=e.onClose,c=e.onSubmit,o=Ge.A.useForm(),u=l()(o,1)[0],d=(0,R.Z)().translateStringTranct,h=(0,I.u)((function(e){return e.currentOrg})),f=(0,P.$)((function(e){return{workgroupResult:e.workgroupResult,setWorkgroupResult:e.setWorkgroupResult}})),p=f.workgroupResult,x=f.setWorkgroupResult;(0,v.useEffect)((function(){t?u.setFieldsValue({name:null==r?void 0:r.name,appId:null==r?void 0:r.appId,appSecret:null==r?void 0:r.appSecret,encodingAesKey:null==r?void 0:r.encodingAesKey,encryptMode:null==r?void 0:r.encryptMode,dataType:null==r?void 0:r.dataType,workgroupUid:null==r?void 0:r.workgroupUid}):u.setFieldsValue({name:"",appId:"",appSecret:"",encodingAesKey:"",encryptMode:"PLAINTEXT",dataType:"xml",workgroupUid:""})}),[t,r,u]);var m=function(){var e=k()(C()().mark((function e(){var n,t;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W.yw.loading("loading"),n={pageNumber:0,pageSize:50,orgUid:h.uid},e.next=4,(0,A.u7)(n);case 4:t=e.sent,console.log("getWorkgroups",t),200===t.code?(W.yw.destroy(),x(t)):(W.yw.destroy(),W.yw.error(t.message));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){m()}),[]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(_e.Z,{title:"微信小程序",onClose:a,open:i,children:(0,j.jsxs)(Ge.A,{form:u,name:"wechatMiniForm",onFinish:function(){console.log("handleSubmit"),u.validateFields().then((function(e){var n=s()(s()({},e),{},{orgUid:null==h?void 0:h.uid});console.log("submit",n),c(n)}))},children:[(0,j.jsx)(Xe.Z,{label:"名称",name:"name",rules:[{required:!0}]}),(0,j.jsx)(Xe.Z,{label:"appId",name:"appId",rules:[{required:!0}]}),(0,j.jsx)(Xe.Z,{label:"appSecret",name:"appSecret",rules:[{required:!0}]}),(0,j.jsx)(Xe.Z,{label:"EncodingAESKey",name:"encodingAesKey",rules:[{required:!0}]}),(0,j.jsxs)(He.Z,{children:[(0,j.jsx)(ve.ZP,{onClick:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",t=0;t<43;t++){var r=Math.floor(Math.random()*e.length);n+=e.charAt(r)}u.setFieldsValue({encodingAesKey:n})},children:"随机生成"}),(0,j.jsx)(ve.ZP,{onClick:function(){var e=u.getFieldValue("encodingAesKey");if(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),W.yw.success("已复制到剪切板")}},children:"复制"})]}),(0,j.jsx)(Je.Z,{label:"消息加解密方式",name:"encryptMode",options:[{label:"明文模式",value:"PLAINTEXT"},{label:"兼容模式",value:"COMPATIBLE"},{label:"安全模式",value:"SAFE"}],fieldProps:{defaultValue:"PLAINTEXT",allowClear:!0},rules:[{required:!0}]}),(0,j.jsx)(Xe.Z,{label:"数据格式",name:"dataType",rules:[{required:!0}],disabled:!0}),(0,j.jsx)(Je.Z,{label:"客服技能组",name:"workgroupUid",options:null==p||null===(n=p.data)||void 0===n||null===(n=n.content)||void 0===n?void 0:n.map((function(e){return{label:d(e.nickname),value:e.uid}})),fieldProps:{allowClear:!0},rules:[{required:!0}]}),(0,j.jsx)("p",{children:"注：微信公众号-》设置与开发-》开发接口管理-》基本设置 获取相关信息"})]})})})},Qe=function(){var e=(0,xe.useIntl)(),n=(0,v.useRef)(!1),t=(0,R.Z)().translateStringTranct,r=(0,c.Z)().isDarkMode,i=(0,v.useState)(!1),a=l()(i,2),o=a[0],s=a[1],u=(0,v.useState)(!1),d=l()(u,2),h=d[0],f=d[1],p=(0,I.u)((function(e){return e.currentOrg})),x=Be((function(e){return{wechatMiniResult:e.wechatMiniResult,currentWechatMini:e.currentWechatMini,setWechatMiniResult:e.setWechatMiniResult,insertWechatMini:e.insertWechatMini,setCurrentWechatMini:e.setCurrentWechatMini,deleteCurrentWechatMini:e.deleteCurrentWechatMini}})),m=x.wechatMiniResult,y=x.currentWechatMini,Z=x.setWechatMiniResult,b=x.insertWechatMini,w=x.setCurrentWechatMini,M=x.deleteCurrentWechatMini,T=me.Z.useModal(),S=l()(T,2),A=S[0],D=S[1],P=function(){var n=k()(C()().mark((function n(t){var r;return C()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete wechatMini",t),W.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),n.next=4,qe(t);case 4:r=n.sent,console.log("delete wechatMini response",r),200===r.code?(W.yw.destroy(),W.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),M(t.uid)):(W.yw.destroy(),W.yw.error(r.message));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){var e=k()(C()().mark((function e(){var t,r;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.current){e.next=3;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 3:return n.current=!0,W.yw.loading("loading"),t={pageNumber:0,pageSize:50,orgUid:p.uid},e.next=8,Ve(t);case 8:r=e.sent,console.log("getWechatMinis",r),200===r.code?(W.yw.destroy(),Z(r)):(W.yw.destroy(),W.yw.error(r.message)),n.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){F()}),[]);var E=function(){var e=k()(C()().mark((function e(n){var t;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(n);case 2:t=e.sent,console.log("handleCreateWechatMini response:",t),200===t.code?(b(t.data),s(!1)):W.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=k()(C()().mark((function e(n){var t;return C()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.uid=null==y?void 0:y.uid,e.next=3,ze(n);case 3:t=e.sent,console.log("handleUpdateWechatMini response:",t),200===t.code?(w(t.data),s(!1)):W.yw.error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(ge.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,j.jsx)(ve.ZP,{size:"small",type:"primary",icon:(0,j.jsx)(pe.Z,{}),onClick:function(){s(!0),f(!1)},children:e.formatMessage({id:"bind",defaultMessage:"Bind"})}),(0,j.jsx)(ve.ZP,{size:"small",onClick:function(){f(!0),s(!0)},disabled:y&&""===y.uid,children:e.formatMessage({id:"edit",defaultMessage:"Edit"})}),(0,j.jsx)(ve.ZP,{size:"small",danger:!0,onClick:function(){return n=y,void A.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,j.jsx)(fe.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(n.name,"】？"),onOk:function(){P(n)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})});var n},disabled:y&&""===y.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,j.jsx)(g.Z,{itemLayout:"horizontal",dataSource:m.data.content,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{style:y.uid===e.uid?{backgroundColor:r?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){w(e)},children:(0,j.jsx)(g.Z.Item.Meta,{style:{marginLeft:"10px"},title:(0,j.jsx)(j.Fragment,{children:t(e.name)}),description:t(e.description)})})}}),o&&(0,j.jsx)($e,{isEdit:h,open:o,wechatmini:y,onClose:function(){s(!1)},onSubmit:function(e){console.log("onDrawerSubmit:",e),h?U(e):E(e)}}),D]})},Ye=function(){var e=Be((function(e){return{currentWechatMini:e.currentWechatMini}})).currentWechatMini;return(0,j.jsx)(j.Fragment,{children:""!==(null==e?void 0:e.uid)&&(0,j.jsxs)("div",{className:"flex items-center justify-end",children:[(0,j.jsxs)("p",{children:["URL: ",e.url,(0,j.jsx)(ve.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.url),W.yw.success("URL已复制")},children:"复制"})]}),(0,j.jsxs)("p",{className:"ml-2",children:["Token: ",e.token,(0,j.jsx)(ve.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.token),W.yw.success("Token已复制")},children:"复制"})]})]})})},en=function(e){console.log(e)},nn=[{key:"agent",label:"客服管理",children:(0,j.jsx)(Ye,{})}],tn=function(){var e=(0,v.useState)([]),n=l()(e,2),t=n[0],r=n[1];return(0,v.useEffect)((function(){var e=[].concat(nn);r(e)}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"agent",items:t,onChange:en})})},rn=i.Z.Sider,an=i.Z.Content,ln=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(rn,{width:t,style:n,children:(0,j.jsx)(Qe,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(an,{children:(0,j.jsx)(tn,{})})})]})},cn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],on=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:cn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},sn=function(e){console.log(e)},un=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],dn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:un,onChange:sn})})},hn=i.Z.Sider,fn=i.Z.Content,pn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(hn,{width:t,style:n,children:(0,j.jsx)(on,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(fn,{children:(0,j.jsx)(dn,{})})})]})},xn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],mn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:xn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},gn=function(e){console.log(e)},vn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],jn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:vn,onChange:gn})})},yn=i.Z.Sider,Zn=i.Z.Content,bn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(yn,{width:t,style:n,children:(0,j.jsx)(mn,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Zn,{children:(0,j.jsx)(jn,{})})})]})},wn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Mn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:wn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},Cn=function(e){console.log(e)},Tn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],kn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:Tn,onChange:Cn})})},Wn=i.Z.Sider,Sn=i.Z.Content,An=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(Wn,{width:t,style:n,children:(0,j.jsx)(Mn,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Sn,{children:(0,j.jsx)(kn,{})})})]})},Rn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Dn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:Rn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},In=function(e){console.log(e)},Pn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Fn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:Pn,onChange:In})})},En=i.Z.Sider,Un=i.Z.Content,Kn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(En,{width:t,style:n,children:(0,j.jsx)(Dn,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Un,{children:(0,j.jsx)(Fn,{})})})]})},zn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Ln=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:zn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},qn=function(e){console.log(e)},Nn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Vn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:Nn,onChange:qn})})},On=i.Z.Sider,Bn=i.Z.Content,Gn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(On,{width:t,style:n,children:(0,j.jsx)(Ln,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Bn,{children:(0,j.jsx)(Vn,{})})})]})},Xn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Jn=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:Xn,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},_n=function(e){console.log(e)},Hn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],$n=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:Hn,onChange:_n})})},Qn=i.Z.Sider,Yn=i.Z.Content,et=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(Qn,{width:t,style:n,children:(0,j.jsx)(Jn,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(Yn,{children:(0,j.jsx)($n,{})})})]})},nt=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],tt=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:nt,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},rt=function(e){console.log(e)},it=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],at=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:it,onChange:rt})})},lt=i.Z.Sider,ct=i.Z.Content,ot=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(lt,{width:t,style:n,children:(0,j.jsx)(tt,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(ct,{children:(0,j.jsx)(at,{})})})]})},st=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],ut=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{dataSource:st,renderItem:function(e,n){return(0,j.jsx)(g.Z.Item,{children:(0,j.jsx)(g.Z.Item.Meta,{avatar:(0,j.jsx)(We.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,j.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},dt=function(e){console.log(e)},ht=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],ft=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:ht,onChange:dt})})},pt=i.Z.Sider,xt=i.Z.Content,mt=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(pt,{width:t,style:n,children:(0,j.jsx)(ut,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(xt,{children:(0,j.jsx)(ft,{})})})]})},gt=t(85401),vt=(b.Z.Title,b.Z.Text,function(){var e=m((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType}})),n=e.currentChannel,t=(e.currentType,(0,v.useState)([])),r=l()(t,2),i=r[0],a=r[1],c=(0,v.useState)(!0),o=l()(c,2),s=o[0],u=o[1],d=[];return(0,v.useEffect)((function(){var e=[].concat(d);"web"===(null==n?void 0:n.name)||"react"===(null==n?void 0:n.name)||"vue"===(null==n?void 0:n.name)||"angular"===(null==n?void 0:n.name)||"svelte"===(null==n?void 0:n.name)||"vanilla"===(null==n?void 0:n.name)||"flutter"===(null==n?void 0:n.name)?(u(!0),e.push({key:"info",label:"基本信息",children:(0,j.jsx)(ee,{})},{key:"code",label:"客服代码",children:(0,j.jsx)(ue,{})})):u(!1),a(e)}),[n]),(0,j.jsxs)(j.Fragment,{children:[s&&(0,j.jsx)(w.Z,{defaultActiveKey:"1",items:i,onChange:function(e){console.log(e)}}),"wechat"===(null==n?void 0:n.name)&&(0,j.jsx)(Ee,{}),"wechat-mp"===(null==n?void 0:n.name)&&(0,j.jsx)(ke,{}),"wechat-mini"===(null==n?void 0:n.name)&&(0,j.jsx)(ln,{}),"wechat-work"===(null==n?void 0:n.name)&&(0,j.jsx)(pn,{}),"wechat-kefu"===(null==n?void 0:n.name)&&(0,j.jsx)(bn,{}),"douyin"===(null==n?void 0:n.name)&&(0,j.jsx)(Kn,{}),"xiaohongshu"===(null==n?void 0:n.name)&&(0,j.jsx)(et,{}),"baidu"===(null==n?void 0:n.name)&&(0,j.jsx)(An,{}),"weibo"===(null==n?void 0:n.name)&&(0,j.jsx)(Gn,{}),"bilibili"===(null==n?void 0:n.name)&&(0,j.jsx)(mt,{}),"zhihu"===(null==n?void 0:n.name)&&(0,j.jsx)(ot,{}),"pdd"===(null==n?void 0:n.name)&&(0,j.jsx)(V.Z,{}),"qianniu"===(null==n?void 0:n.name)&&(0,j.jsx)(B.Z,{}),"doudian"===(null==n?void 0:n.name)&&(0,j.jsx)(G.Z,{}),"whatsapp"===(null==n?void 0:n.name)&&(0,j.jsx)(X.Z,{}),"telegram"===(null==n?void 0:n.name)&&(0,j.jsx)(J.Z,{}),"facebook"===(null==n?void 0:n.name)&&(0,j.jsx)(gt.Z,{}),"shopify"===(null==n?void 0:n.name)&&(0,j.jsx)(H.Z,{}),"lazada"===(null==n?void 0:n.name)&&(0,j.jsx)($.Z,{})]})}),jt=i.Z.Sider,yt=i.Z.Content,Zt=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.contentStyle;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(jt,{style:n,children:(0,j.jsx)(Z,{})}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(yt,{style:t,children:(0,j.jsx)(vt,{})})})]})})}}}]);