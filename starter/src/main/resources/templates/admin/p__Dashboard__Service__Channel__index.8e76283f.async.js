"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5131],{66831:function(e,n,t){t.r(n),t.d(n,{default:function(){return yt}});var r=t(93139),i=t(64476),a=t(45332),c=t.n(a),l=t(74145),o=t(73193),s=t.n(o),u=t(76711),d=t.n(u),h=t(77667),f=t(39701),p=t(83642),x=t(41617),g=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{llmproviderResult:{data:{content:[]}},currentChannel:{name:"web",nickname:"网站/H5"},currentType:h.aZD,insertChannel:function(n){e((function(e){e.llmproviderResult.data.content.unshift(n)}))},setChannelResult:function(t){e({llmproviderResult:t});var r,i=n().currentChannel;""!==i.uid&&void 0!==i||(null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentChannel:t.data.content[0]})},setCurrentChannel:function(t){var r=n().llmproviderResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),c=s()(s()({},n().llmproviderResult),{},{data:{content:a}});e({llmproviderResult:c,currentChannel:t})}else e({currentChannel:t})},setCurrentType:function(n){e({currentType:n})},deleteCurrentChannel:function(t){var r=n().llmproviderResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({llmproviderResult:s()(s()({},n().llmproviderResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("Channel not found in cache:",t),n().currentChannel.uid===t&&e({currentChannel:{uid:""}})},deleteChannelCache:function(){return e({},!0)}}})),{name:h.uCV}))),m=t(90136),j=t(44194),v=t(31549),y=[{name:"web",nickname:"网站/H5"},{name:"react",nickname:"React"},{name:"ios",nickname:"iOS"},{name:"android",nickname:"安卓"},{name:"uniapp",nickname:"Uniapp"},{name:"flutter",nickname:"Flutter"},{name:"wechat-mp",nickname:"微信公众号"},{name:"wechat-mini",nickname:"微信小程序"}],Z=function(){var e=(0,l.Z)().isDarkMode,n=(0,j.useState)([]),t=c()(n,2),r=t[0],i=t[1],a=g((function(e){return{currentChannel:e.currentChannel,setCurrentChannel:e.setCurrentChannel}})),o=a.currentChannel,s=a.setCurrentChannel;return(0,j.useEffect)((function(){var e=[].concat(y);i(e)}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{itemLayout:"horizontal",dataSource:r,renderItem:function(n,t){return(0,v.jsx)(m.Z.Item,{style:(null==o?void 0:o.name)===n.name?{backgroundColor:e?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){s(n)},children:(0,v.jsx)(m.Z.Item.Meta,{title:(0,v.jsx)("div",{style:{marginLeft:10},children:n.nickname})})})}})})},b=t(93119),w=t(95080),M=t(50571),C=t(90819),T=t.n(C),k=t(89933),W=t.n(k),S=t(89756),A=t(81153),R=t(43314),D=t(1780),I=t(85702),P=t(40431),F=t(61017),E=t(33959),U=t(72434),K=t(2748),z=t(42685),L=t(41956),q=t(76457),N=t(20988),V=t(48764),O=t(9579),B=t(15192),G=t(64352),J=t(60992),X=t(68925),H=t(81951),_=t(20924),$=t(302),Q=t(81167),Y=b.Z.Title,ee=b.Z.Text,ne=function(){var e=(0,j.useRef)(!1),n=(0,D.Z)().translateString,t=g((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType,setCurrentType:e.setCurrentType}})),r=t.currentChannel,i=t.currentType,a=t.setCurrentType,l=(0,P.u)((function(e){return e.currentOrg})),o=[{label:"一对一",value:h.Njn},{label:"技能组",value:h.aZD}],s=(0,I.E)((function(e){return{agentResult:e.agentResult,currentAgent:e.currentAgent,setAgentResult:e.setAgentResult,setCurrentAgent:e.setCurrentAgent}})),u=s.agentResult,d=s.currentAgent,f=s.setAgentResult,p=s.setCurrentAgent,x=(0,j.useState)([]),m=c()(x,2),y=m[0],Z=m[1],b=(0,F.$)((function(e){return{workgroupResult:e.workgroupResult,currentWorkgroup:e.currentWorkgroup,setWorkgroupResult:e.setWorkgroupResult,setCurrentWorkgroup:e.setCurrentWorkgroup}})),w=b.workgroupResult,M=b.currentWorkgroup,C=b.setWorkgroupResult,k=b.setCurrentWorkgroup,ne=(0,j.useState)(null==d?void 0:d.uid),te=c()(ne,2),re=te[0],ie=te[1],ae=(0,j.useState)(null==M?void 0:M.uid),ce=c()(ae,2),le=ce[0],oe=ce[1],se=(0,j.useState)([]),ue=c()(se,2),de=ue[0],he=ue[1],fe=function(){var t=W()(T()().mark((function t(){var r,i,a;return T()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=3;break}return console.log("isLoading: 1",e.current),t.abrupt("return");case 3:return e.current=!0,S.yw.loading("loading"),r={pageNumber:0,pageSize:50,orgUid:null==l?void 0:l.uid},t.next=8,(0,A._t)(r);case 8:i=t.sent,console.log("queryAgentsByOrg: ",i),200===i.code?(S.yw.destroy(),f(i),i.data.content.length>0&&(p(i.data.content[0]),ie(i.data.content[0].uid)),a=[],i.data.content.forEach((function(e){var t={label:n(e.nickname),value:e.uid};a.push(t)})),Z(a)):(S.yw.destroy(),S.yw.error(i.message)),e.current=!1;case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),pe=function(){var t=W()(T()().mark((function t(){var r,i,a;return T()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=3;break}return console.log("isLoading: 1",e.current),t.abrupt("return");case 3:return e.current=!0,S.yw.loading("loading"),r={pageNumber:0,pageSize:50,orgUid:null==l?void 0:l.uid},t.next=8,(0,R.u7)(r);case 8:i=t.sent,console.log("getWorkgroups",i),200===i.code?(S.yw.destroy(),C(i),i.data.content.length>0&&(k(i.data.content[0]),oe(i.data.content[0].uid)),a=[],i.data.content.forEach((function(e){var t={label:n(e.nickname),value:e.uid};a.push(t)})),he(a)):(S.yw.destroy(),S.yw.error(i.message)),e.current=!1;case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,j.useEffect)((function(){i===h.Njn?fe():i===h.aZD?pe():console.log("error type")}),[i]),(0,j.useEffect)((function(){console.log("currentAgent",d),null!=d&&d.uid&&ie(d.uid)}),[d]),(0,j.useEffect)((function(){console.log("currentWorkgroup",M),null!=M&&M.uid&&oe(M.uid)}),[M]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E.ZP.Group,{onChange:function(e){console.log("radio type checked:".concat(e.target.value)),a(e.target.value)},options:o,defaultValue:i,optionType:"button",buttonStyle:"solid"}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),i===h.Njn&&(null==d?void 0:d.uid)&&(0,v.jsx)(E.ZP.Group,{onChange:function(e){console.log("radio agent checked:".concat(e.target.value));var n=u.data.content.find((function(n){return n.uid===e.target.value}));p(n)},options:y,defaultValue:re,optionType:"button",buttonStyle:"solid"}),i===h.aZD&&(null==d?void 0:d.uid)&&(0,v.jsx)(E.ZP.Group,{onChange:function(e){console.log("radio workgroup checked:".concat(e.target.value));var n=w.data.content.find((function(n){return n.uid===e.target.value}));k(n)},options:de,defaultValue:le,optionType:"button",buttonStyle:"solid"}),(0,v.jsx)(U.Z,{}),(0,v.jsx)(Y,{level:5,children:"组织orgUid"}),(0,v.jsx)(ee,{code:!0,copyable:!0,children:null==l?void 0:l.uid}),(0,v.jsx)(Y,{level:5,children:"一对一当前客服Uid"}),(0,v.jsx)(ee,{code:!0,copyable:!0,children:null==d?void 0:d.uid}),(0,v.jsx)(Y,{level:5,children:"当前技能组Uid"}),(0,v.jsx)(ee,{code:!0,copyable:!0,children:null==M?void 0:M.uid}),(0,v.jsx)(U.Z,{}),"douyin"===(null==r?void 0:r.name)&&(0,v.jsx)(K.Z,{}),"xiaohongshu"===(null==r?void 0:r.name)&&(0,v.jsx)(z.Z,{}),"baidu"===(null==r?void 0:r.name)&&(0,v.jsx)(L.Z,{}),"weibo"===(null==r?void 0:r.name)&&(0,v.jsx)(q.Z,{}),"bilibili"===(null==r?void 0:r.name)&&(0,v.jsx)(N.Z,{}),"zhihu"===(null==r?void 0:r.name)&&(0,v.jsx)(V.Z,{}),"pdd"===(null==r?void 0:r.name)&&(0,v.jsx)(O.Z,{}),"jd"===(null==r?void 0:r.name)&&(0,v.jsx)(B.Z,{}),"qianniu"===(null==r?void 0:r.name)&&(0,v.jsx)(G.Z,{}),"doudian"===(null==r?void 0:r.name)&&(0,v.jsx)(J.Z,{}),"whatsapp"===(null==r?void 0:r.name)&&(0,v.jsx)(X.Z,{}),"telegram"===(null==r?void 0:r.name)&&(0,v.jsx)(H.Z,{}),"line"===(null==r?void 0:r.name)&&(0,v.jsx)(_.Z,{}),"shopify"===(null==r?void 0:r.name)&&(0,v.jsx)($.Z,{}),"lazada"===(null==r?void 0:r.name)&&(0,v.jsx)(Q.Z,{})]})},te=t(83440),re=t(33067),ie=t(82980),ae=t(19685),ce=t(26727),le=t(48543),oe=function(){var e=g((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType}})),n=e.currentChannel,t=e.currentType;return(0,v.jsxs)(v.Fragment,{children:["web"===(null==n?void 0:n.name)&&(0,v.jsx)(le.Z,{type:t}),"react"===(null==n?void 0:n.name)&&(0,v.jsx)(ae.Z,{type:t}),"ios"===(null==n?void 0:n.name)&&(0,v.jsx)(ie.Z,{type:t}),"android"===(null==n?void 0:n.name)&&(0,v.jsx)(te.Z,{type:t}),"uniapp"===(null==n?void 0:n.name)&&(0,v.jsx)(ce.Z,{type:t}),"flutter"===(null==n?void 0:n.name)&&(0,v.jsx)(re.Z,{type:t})]})},se=t(56746),ue=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{wechatMpResult:{data:{content:[]}},currentWechatMp:{uid:"",nickname:"",avatar:"",description:""},insertWechatMp:function(n){e((function(e){e.wechatMpResult.data.content.unshift(n)}))},updateWechatMp:function(n){e((function(e){var t=e.wechatMpResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t[r]=n:console.warn("WechatMp with uid ".concat(n.uid," not found."))}))},deleteWechatMp:function(n){e((function(e){var t=e.wechatMpResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t.splice(r,1):console.warn("WechatMp with uid ".concat(n.uid," not found."))}))},setWechatMpResult:function(t){var r;(e({wechatMpResult:t}),""===n().currentWechatMp.uid)&&((null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentWechatMp:t.data.content[0]}))},setCurrentWechatMp:function(t){var r=n().wechatMpResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),c=s()(s()({},n().wechatMpResult),{},{data:{content:a}});e({wechatMpResult:c,currentWechatMp:t})}else console.warn("WechatMp with the specified uid not found."),e({currentWechatMp:t})},deleteCurrentWechatMp:function(t){var r=n().wechatMpResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({wechatMpResult:s()(s()({},n().wechatMpResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("WechatMp not found in cache:",t),n().currentWechatMp.uid===t&&e({currentWechatMp:{uid:""}})},deleteWechatMpCache:function(){return e({},!0)}}})),{name:h._SZ}))),de=t(50484),he=t(70458),fe=t(7206),pe=t(83730),xe=t(80093),ge=t(12265),me=t(51444),je=function(){var e=(0,fe.useIntl)(),n=(0,j.useRef)(!1),t=(0,D.Z)().translateStringTranct,r=(0,l.Z)().isDarkMode,i=(0,j.useState)(!1),a=c()(i,2),o=a[0],s=a[1],u=(0,j.useState)(!1),d=c()(u,2),h=d[0],f=d[1],p=(0,P.u)((function(e){return e.currentOrg})),x=ue((function(e){return{wechatMpResult:e.wechatMpResult,currentWechatMp:e.currentWechatMp,setWechatMpResult:e.setWechatMpResult,insertWechatMp:e.insertWechatMp,setCurrentWechatMp:e.setCurrentWechatMp,deleteCurrentWechatMp:e.deleteCurrentWechatMp}})),g=x.wechatMpResult,y=x.currentWechatMp,Z=x.setWechatMpResult,b=x.insertWechatMp,w=x.setCurrentWechatMp,M=x.deleteCurrentWechatMp,C=pe.Z.useModal(),k=c()(C,2),A=k[0],R=k[1],I=function(){var n=W()(T()().mark((function n(t){var r;return T()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete wechatMp",t),S.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),n.next=4,(0,se.ul)(t);case 4:r=n.sent,console.log("delete wechatMp response",r),200===r.code?(S.yw.destroy(),S.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),M(t.uid)):(S.yw.destroy(),S.yw.error(r.message));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){var e=W()(T()().mark((function e(){var t,r;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.current){e.next=3;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 3:return n.current=!0,S.yw.loading("loading"),t={pageNumber:0,pageSize:50,orgUid:p.uid},e.next=8,(0,se.aq)(t);case 8:r=e.sent,console.log("getWechatMps",r),200===r.code?(S.yw.destroy(),Z(r)):(S.yw.destroy(),S.yw.error(r.message)),n.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,j.useEffect)((function(){F()}),[]);var E=function(){var e=W()(T()().mark((function e(n){var t;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,se._Z)(n);case 2:t=e.sent,console.log("handleCreateWechatMp response:",t),200===t.code?(b(t.data),s(!1)):S.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=W()(T()().mark((function e(n){var t;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.uid=null==y?void 0:y.uid,e.next=3,(0,se.sS)(n);case 3:t=e.sent,console.log("handleUpdateWechatMp response:",t),200===t.code?(w(t.data),s(!1)):S.yw.error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(xe.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,v.jsx)(ge.ZP,{size:"small",type:"primary",icon:(0,v.jsx)(he.Z,{}),onClick:function(){s(!0),f(!1)},children:e.formatMessage({id:"bind",defaultMessage:"Bind"})}),(0,v.jsx)(ge.ZP,{size:"small",onClick:function(){f(!0),s(!0)},disabled:y&&""===y.uid,children:e.formatMessage({id:"edit",defaultMessage:"Edit"})}),(0,v.jsx)(ge.ZP,{size:"small",danger:!0,onClick:function(){return n=y,void A.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,v.jsx)(de.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(n.name,"】？"),onOk:function(){I(n)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})});var n},disabled:y&&""===y.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,v.jsx)(m.Z,{itemLayout:"horizontal",dataSource:g.data.content,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{style:y.uid===e.uid?{backgroundColor:r?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){w(e)},children:(0,v.jsx)(m.Z.Item.Meta,{style:{marginLeft:"10px"},title:(0,v.jsx)(v.Fragment,{children:t(e.name)}),description:t(e.description)})})}}),o&&(0,v.jsx)(me.Z,{isEdit:h,open:o,wechatmp:y,onClose:function(){s(!1)},onSubmit:function(e){console.log("onDrawerSubmit:",e),h?U(e):E(e)}}),R]})},ve=function(){var e=ue((function(e){return{currentWechatMp:e.currentWechatMp}})).currentWechatMp;return(0,v.jsx)(v.Fragment,{children:""!==(null==e?void 0:e.uid)&&(0,v.jsxs)("div",{className:"flex items-center justify-end",children:[(0,v.jsxs)("p",{children:["URL: ",e.url,(0,v.jsx)(ge.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.url),S.yw.success("URL已复制")},children:"复制"})]}),(0,v.jsxs)("p",{children:["Token: ",e.token,(0,v.jsx)(ge.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.token),S.yw.success("Token已复制")},children:"复制"})]})]})})},ye=function(e){console.log(e)},Ze=[{key:"agent",label:"客服管理",children:(0,v.jsx)(ve,{})}],be=function(){var e=(0,j.useState)([]),n=c()(e,2),t=n[0],r=n[1];return(0,j.useEffect)((function(){var e=[].concat(Ze);r(e)}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"agent",items:t,onChange:ye})})},we=i.Z.Sider,Me=i.Z.Content,Ce=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(we,{width:t,style:n,children:(0,v.jsx)(je,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(Me,{children:(0,v.jsx)(be,{})})})]})},Te=t(21276),ke=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],We=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:ke,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},Se=function(e){console.log(e)},Ae=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Re=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:Ae,onChange:Se})})},De=i.Z.Sider,Ie=i.Z.Content,Pe=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(De,{width:t,style:n,children:(0,v.jsx)(We,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(Ie,{children:(0,v.jsx)(Re,{})})})]})};function Fe(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=W()(T()().mark((function e(n){return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,fe.request)("/api/v1/wechat/mini/create",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ue(e){return Ke.apply(this,arguments)}function Ke(){return(Ke=W()(T()().mark((function e(n){return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,fe.request)("/api/v1/wechat/mini/update",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ze(e){return Le.apply(this,arguments)}function Le(){return(Le=W()(T()().mark((function e(n){return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,fe.request)("/api/v1/wechat/mini/delete",{method:"POST",data:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qe(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=W()(T()().mark((function e(n){return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,fe.request)("/api/v1/wechat/mini/query/org",{method:"GET",params:s()(s()({},n),{},{client:h.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ve=(0,f.Ue)()((0,p.mW)((0,p.tJ)((0,x.n)((function(e,n){return{wechatMiniResult:{data:{content:[]}},currentWechatMini:{uid:"",nickname:"",avatar:"",description:""},insertWechatMini:function(n){e((function(e){e.wechatMiniResult.data.content.unshift(n)}))},updateWechatMini:function(n){e((function(e){var t=e.wechatMiniResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t[r]=n:console.warn("WechatMini with uid ".concat(n.uid," not found."))}))},deleteWechatMini:function(n){e((function(e){var t=e.wechatMiniResult.data.content,r=t.findIndex((function(e){return e.uid===n.uid}));-1!==r?t.splice(r,1):console.warn("WechatMini with uid ".concat(n.uid," not found."))}))},setWechatMiniResult:function(t){var r;(e({wechatMiniResult:t}),""===n().currentWechatMini.uid)&&((null===(r=t.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentWechatMini:t.data.content[0]}))},setCurrentWechatMini:function(t){var r=n().wechatMiniResult.data.content,i=r.findIndex((function(e){return e.uid===t.uid}));if(-1!==i){var a=[].concat(d()(r.slice(0,i)),[t],d()(r.slice(i+1))),c=s()(s()({},n().wechatMiniResult),{},{data:{content:a}});e({wechatMiniResult:c,currentWechatMini:t})}else console.warn("WechatMini with the specified uid not found."),e({currentWechatMini:t})},deleteCurrentWechatMini:function(t){var r=n().wechatMiniResult.data.content,i=r.findIndex((function(e){return e.uid===t}));-1!==i?e({wechatMiniResult:s()(s()({},n().wechatMiniResult),{},{data:{content:[].concat(d()(r.slice(0,i)),d()(r.slice(i+1)))}})}):console.warn("WechatMini not found in cache:",t),n().currentWechatMini.uid===t&&e({currentWechatMini:{uid:""}})},deleteWechatMiniCache:function(){return e({},!0)}}})),{name:h.I5N}))),Oe=t(5728),Be=t(43688),Ge=t(8091),Je=t(61411),Xe=t(62599),He=function(e){var n,t=e.isEdit,r=e.wechatmini,i=e.open,a=e.onClose,l=e.onSubmit,o=Oe.A.useForm(),u=c()(o,1)[0],d=(0,D.Z)().translateStringTranct,h=(0,P.u)((function(e){return e.currentOrg})),f=(0,F.$)((function(e){return{workgroupResult:e.workgroupResult,setWorkgroupResult:e.setWorkgroupResult}})),p=f.workgroupResult,x=f.setWorkgroupResult;(0,j.useEffect)((function(){t?u.setFieldsValue({name:null==r?void 0:r.name,appId:null==r?void 0:r.appId,appSecret:null==r?void 0:r.appSecret,encodingAesKey:null==r?void 0:r.encodingAesKey,encryptMode:null==r?void 0:r.encryptMode,dataType:null==r?void 0:r.dataType,workgroupUid:null==r?void 0:r.workgroupUid}):u.setFieldsValue({name:"",appId:"",appSecret:"",encodingAesKey:"",encryptMode:"PLAINTEXT",dataType:"xml",workgroupUid:""})}),[t,r,u]);var g=function(){var e=W()(T()().mark((function e(){var n,t;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.yw.loading("loading"),n={pageNumber:0,pageSize:50,orgUid:h.uid},e.next=4,(0,R.u7)(n);case 4:t=e.sent,console.log("getWorkgroups",t),200===t.code?(S.yw.destroy(),x(t)):(S.yw.destroy(),S.yw.error(t.message));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,j.useEffect)((function(){g()}),[]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Je.Z,{title:"微信小程序",onClose:a,open:i,children:(0,v.jsxs)(Oe.A,{form:u,name:"wechatMiniForm",onFinish:function(){console.log("handleSubmit"),u.validateFields().then((function(e){var n=s()(s()({},e),{},{orgUid:null==h?void 0:h.uid});console.log("submit",n),l(n)}))},children:[(0,v.jsx)(Be.Z,{label:"名称",name:"name",rules:[{required:!0}]}),(0,v.jsx)(Be.Z,{label:"appId",name:"appId",rules:[{required:!0}]}),(0,v.jsx)(Be.Z,{label:"appSecret",name:"appSecret",rules:[{required:!0}]}),(0,v.jsx)(Be.Z,{label:"EncodingAESKey",name:"encodingAesKey",rules:[{required:!0}]}),(0,v.jsxs)(Xe.Z,{children:[(0,v.jsx)(ge.ZP,{onClick:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",t=0;t<43;t++){var r=Math.floor(Math.random()*e.length);n+=e.charAt(r)}u.setFieldsValue({encodingAesKey:n})},children:"随机生成"}),(0,v.jsx)(ge.ZP,{onClick:function(){var e=u.getFieldValue("encodingAesKey");if(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),S.yw.success("已复制到剪切板")}},children:"复制"})]}),(0,v.jsx)(Ge.Z,{label:"消息加解密方式",name:"encryptMode",options:[{label:"明文模式",value:"PLAINTEXT"},{label:"兼容模式",value:"COMPATIBLE"},{label:"安全模式",value:"SAFE"}],fieldProps:{defaultValue:"PLAINTEXT",allowClear:!0},rules:[{required:!0}]}),(0,v.jsx)(Be.Z,{label:"数据格式",name:"dataType",rules:[{required:!0}],disabled:!0}),(0,v.jsx)(Ge.Z,{label:"客服技能组",name:"workgroupUid",options:null==p||null===(n=p.data)||void 0===n||null===(n=n.content)||void 0===n?void 0:n.map((function(e){return{label:d(e.nickname),value:e.uid}})),fieldProps:{allowClear:!0},rules:[{required:!0}]}),(0,v.jsx)("p",{children:"注：微信公众号-》设置与开发-》开发接口管理-》基本设置 获取相关信息"})]})})})},_e=function(){var e=(0,fe.useIntl)(),n=(0,j.useRef)(!1),t=(0,D.Z)().translateStringTranct,r=(0,l.Z)().isDarkMode,i=(0,j.useState)(!1),a=c()(i,2),o=a[0],s=a[1],u=(0,j.useState)(!1),d=c()(u,2),h=d[0],f=d[1],p=(0,P.u)((function(e){return e.currentOrg})),x=Ve((function(e){return{wechatMiniResult:e.wechatMiniResult,currentWechatMini:e.currentWechatMini,setWechatMiniResult:e.setWechatMiniResult,insertWechatMini:e.insertWechatMini,setCurrentWechatMini:e.setCurrentWechatMini,deleteCurrentWechatMini:e.deleteCurrentWechatMini}})),g=x.wechatMiniResult,y=x.currentWechatMini,Z=x.setWechatMiniResult,b=x.insertWechatMini,w=x.setCurrentWechatMini,M=x.deleteCurrentWechatMini,C=pe.Z.useModal(),k=c()(C,2),A=k[0],R=k[1],I=function(){var n=W()(T()().mark((function n(t){var r;return T()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete wechatMini",t),S.yw.loading(e.formatMessage({id:"deleting",defaultMessage:"Deleting"})),n.next=4,ze(t);case 4:r=n.sent,console.log("delete wechatMini response",r),200===r.code?(S.yw.destroy(),S.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),M(t.uid)):(S.yw.destroy(),S.yw.error(r.message));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){var e=W()(T()().mark((function e(){var t,r;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.current){e.next=3;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 3:return n.current=!0,S.yw.loading("loading"),t={pageNumber:0,pageSize:50,orgUid:p.uid},e.next=8,qe(t);case 8:r=e.sent,console.log("getWechatMinis",r),200===r.code?(S.yw.destroy(),Z(r)):(S.yw.destroy(),S.yw.error(r.message)),n.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,j.useEffect)((function(){F()}),[]);var E=function(){var e=W()(T()().mark((function e(n){var t;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe(n);case 2:t=e.sent,console.log("handleCreateWechatMini response:",t),200===t.code?(b(t.data),s(!1)):S.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=W()(T()().mark((function e(n){var t;return T()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.uid=null==y?void 0:y.uid,e.next=3,Ue(n);case 3:t=e.sent,console.log("handleUpdateWechatMini response:",t),200===t.code?(w(t.data),s(!1)):S.yw.error(t.message);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(xe.Z,{style:{margin:10},gap:"small",align:"flex-start",children:[(0,v.jsx)(ge.ZP,{size:"small",type:"primary",icon:(0,v.jsx)(he.Z,{}),onClick:function(){s(!0),f(!1)},children:e.formatMessage({id:"bind",defaultMessage:"Bind"})}),(0,v.jsx)(ge.ZP,{size:"small",onClick:function(){f(!0),s(!0)},disabled:y&&""===y.uid,children:e.formatMessage({id:"edit",defaultMessage:"Edit"})}),(0,v.jsx)(ge.ZP,{size:"small",danger:!0,onClick:function(){return n=y,void A.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,v.jsx)(de.Z,{}),content:"".concat(e.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(n.name,"】？"),onOk:function(){I(n)},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})});var n},disabled:y&&""===y.uid,children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,v.jsx)(m.Z,{itemLayout:"horizontal",dataSource:g.data.content,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{style:y.uid===e.uid?{backgroundColor:r?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){w(e)},children:(0,v.jsx)(m.Z.Item.Meta,{style:{marginLeft:"10px"},title:(0,v.jsx)(v.Fragment,{children:t(e.name)}),description:t(e.description)})})}}),o&&(0,v.jsx)(He,{isEdit:h,open:o,wechatmini:y,onClose:function(){s(!1)},onSubmit:function(e){console.log("onDrawerSubmit:",e),h?U(e):E(e)}}),R]})},$e=function(){var e=Ve((function(e){return{currentWechatMini:e.currentWechatMini}})).currentWechatMini;return(0,v.jsx)(v.Fragment,{children:""!==(null==e?void 0:e.uid)&&(0,v.jsxs)("div",{className:"flex items-center justify-end",children:[(0,v.jsxs)("p",{children:["URL: ",e.url,(0,v.jsx)(ge.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.url),S.yw.success("URL已复制")},children:"复制"})]}),(0,v.jsxs)("p",{className:"ml-2",children:["Token: ",e.token,(0,v.jsx)(ge.ZP,{onClick:function(){navigator.clipboard.writeText(null==e?void 0:e.token),S.yw.success("Token已复制")},children:"复制"})]})]})})},Qe=function(e){console.log(e)},Ye=[{key:"agent",label:"客服管理",children:(0,v.jsx)($e,{})}],en=function(){var e=(0,j.useState)([]),n=c()(e,2),t=n[0],r=n[1];return(0,j.useEffect)((function(){var e=[].concat(Ye);r(e)}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"agent",items:t,onChange:Qe})})},nn=i.Z.Sider,tn=i.Z.Content,rn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(nn,{width:t,style:n,children:(0,v.jsx)(_e,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(tn,{children:(0,v.jsx)(en,{})})})]})},an=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],cn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:an,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},ln=function(e){console.log(e)},on=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],sn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:on,onChange:ln})})},un=i.Z.Sider,dn=i.Z.Content,hn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(un,{width:t,style:n,children:(0,v.jsx)(cn,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(dn,{children:(0,v.jsx)(sn,{})})})]})},fn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],pn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:fn,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},xn=function(e){console.log(e)},gn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],mn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:gn,onChange:xn})})},jn=i.Z.Sider,vn=i.Z.Content,yn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(jn,{width:t,style:n,children:(0,v.jsx)(pn,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(vn,{children:(0,v.jsx)(mn,{})})})]})},Zn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],bn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:Zn,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},wn=function(e){console.log(e)},Mn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Cn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:Mn,onChange:wn})})},Tn=i.Z.Sider,kn=i.Z.Content,Wn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(Tn,{width:t,style:n,children:(0,v.jsx)(bn,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(kn,{children:(0,v.jsx)(Cn,{})})})]})},Sn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],An=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:Sn,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},Rn=function(e){console.log(e)},Dn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],In=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:Dn,onChange:Rn})})},Pn=i.Z.Sider,Fn=i.Z.Content,En=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(Pn,{width:t,style:n,children:(0,v.jsx)(An,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(Fn,{children:(0,v.jsx)(In,{})})})]})},Un=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Kn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:Un,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},zn=function(e){console.log(e)},Ln=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],qn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:Ln,onChange:zn})})},Nn=i.Z.Sider,Vn=i.Z.Content,On=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(Nn,{width:t,style:n,children:(0,v.jsx)(Kn,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(Vn,{children:(0,v.jsx)(qn,{})})})]})},Bn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],Gn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:Bn,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},Jn=function(e){console.log(e)},Xn=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],Hn=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:Xn,onChange:Jn})})},_n=i.Z.Sider,$n=i.Z.Content,Qn=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(_n,{width:t,style:n,children:(0,v.jsx)(Gn,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)($n,{children:(0,v.jsx)(Hn,{})})})]})},Yn=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],et=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:Yn,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},nt=function(e){console.log(e)},tt=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],rt=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:tt,onChange:nt})})},it=i.Z.Sider,at=i.Z.Content,ct=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(it,{width:t,style:n,children:(0,v.jsx)(et,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(at,{children:(0,v.jsx)(rt,{})})})]})},lt=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],ot=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Z,{dataSource:lt,renderItem:function(e,n){return(0,v.jsx)(m.Z.Item,{children:(0,v.jsx)(m.Z.Item.Meta,{avatar:(0,v.jsx)(Te.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(n)}),title:(0,v.jsx)("a",{children:e.title}),description:"Ant Design"})})}})})},st=function(e){console.log(e)},ut=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],dt=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:ut,onChange:st})})},ht=i.Z.Sider,ft=i.Z.Content,pt=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.leftSiderWidth;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(ht,{width:t,style:n,children:(0,v.jsx)(ot,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(ft,{children:(0,v.jsx)(dt,{})})})]})},xt=t(85401),gt=b.Z.Title,mt=(b.Z.Text,function(){var e=g((function(e){return{currentChannel:e.currentChannel,currentType:e.currentType}})),n=e.currentChannel,t=(e.currentType,(0,j.useState)([])),r=c()(t,2),i=r[0],a=r[1],l=(0,j.useState)(!0),o=c()(l,2),s=o[0],u=o[1],d=[];return(0,j.useEffect)((function(){var e=[].concat(d);"web"===(null==n?void 0:n.name)||"react"===(null==n?void 0:n.name)||"ios"===(null==n?void 0:n.name)||"android"===(null==n?void 0:n.name)||"uniapp"===(null==n?void 0:n.name)||"flutter"===(null==n?void 0:n.name)?(u(!0),e.push({key:"info",label:"基本信息",children:(0,v.jsx)(ne,{})},{key:"code",label:"客服代码",children:(0,v.jsx)(oe,{})})):u(!1),a(e)}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.Z,{offsetTop:50,children:(0,v.jsx)(gt,{children:null==n?void 0:n.nickname})}),s&&(0,v.jsx)(M.Z,{defaultActiveKey:"1",items:i,onChange:function(e){console.log(e)}}),"wechat"===(null==n?void 0:n.name)&&(0,v.jsx)(Pe,{}),"wechat-mp"===(null==n?void 0:n.name)&&(0,v.jsx)(Ce,{}),"wechat-mini"===(null==n?void 0:n.name)&&(0,v.jsx)(rn,{}),"wechat-work"===(null==n?void 0:n.name)&&(0,v.jsx)(hn,{}),"wechat-kefu"===(null==n?void 0:n.name)&&(0,v.jsx)(yn,{}),"douyin"===(null==n?void 0:n.name)&&(0,v.jsx)(En,{}),"xiaohongshu"===(null==n?void 0:n.name)&&(0,v.jsx)(Qn,{}),"baidu"===(null==n?void 0:n.name)&&(0,v.jsx)(Wn,{}),"weibo"===(null==n?void 0:n.name)&&(0,v.jsx)(On,{}),"bilibili"===(null==n?void 0:n.name)&&(0,v.jsx)(pt,{}),"zhihu"===(null==n?void 0:n.name)&&(0,v.jsx)(ct,{}),"pdd"===(null==n?void 0:n.name)&&(0,v.jsx)(O.Z,{}),"qianniu"===(null==n?void 0:n.name)&&(0,v.jsx)(G.Z,{}),"doudian"===(null==n?void 0:n.name)&&(0,v.jsx)(J.Z,{}),"whatsapp"===(null==n?void 0:n.name)&&(0,v.jsx)(X.Z,{}),"telegram"===(null==n?void 0:n.name)&&(0,v.jsx)(H.Z,{}),"facebook"===(null==n?void 0:n.name)&&(0,v.jsx)(xt.Z,{}),"shopify"===(null==n?void 0:n.name)&&(0,v.jsx)($.Z,{}),"lazada"===(null==n?void 0:n.name)&&(0,v.jsx)(Q.Z,{})]})}),jt=i.Z.Sider,vt=i.Z.Content,yt=function(){var e=(0,r.Z)(),n=e.leftSiderStyle,t=e.contentStyle;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(jt,{style:n,children:(0,v.jsx)(Z,{})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(vt,{style:t,children:(0,v.jsx)(mt,{})})})]})})}}}]);