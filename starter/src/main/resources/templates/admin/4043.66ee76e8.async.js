"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[4043],{1977:function(B,h,e){e.d(h,{n:function(){return l}});var t=e(97685),p=e(71002),c=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,m=function(n){return n==="*"||n==="x"||n==="X"},P=function(n){var r=parseInt(n,10);return isNaN(r)?n:r},S=function(n,r){return(0,p.Z)(n)!==(0,p.Z)(r)?[String(n),String(r)]:[n,r]},C=function(n,r){if(m(n)||m(r))return 0;var o=S(P(n),P(r)),a=(0,t.Z)(o,2),i=a[0],v=a[1];return i>v?1:i<v?-1:0},d=function(n,r){for(var o=0;o<Math.max(n.length,r.length);o++){var a=C(n[o]||"0",r[o]||"0");if(a!==0)return a}return 0},s=function(n){var r,o=n.match(c);return o==null||(r=o.shift)===null||r===void 0||r.call(o),o},l=function(n,r){var o=s(n),a=s(r),i=o.pop(),v=a.pop(),g=d(o,a);return g!==0?g:i||v?i?-1:1:0}},73177:function(B,h,e){e.d(h,{X:function(){return S},b:function(){return P}});var t=e(67159),p=e(51812),c=e(1977),m=e(34155),P=function(){var d;return typeof m=="undefined"?t.Z:((d=m)===null||m===void 0||(m={NODE_ENV:"production",UMI_APP_TITLE:"MY APP TITLE",UMI_APP_SERVER_MODE:"development",UMI_APP_BASE_URL:"http=//127.0.0.1:9003",UMI_APP_UPLOAD_FILE_URL:"http=//127.0.0.1=9003/api/v1/upload/file",UMI_APP_UPLOAD_AVATAR_URL:"http=//127.0.0.1=9003/api/v1/upload/file",UMI_APP_IS_DEBUG:"true",UMI_APP_CS_CHAT_URL:"http=//127.0.0.1=9006/chat",UMI_APP_CS_FRAME_URL:"http=//127.0.0.1=9006/frame",UMI_APP_CS_FLOAT_URL:"http=//127.0.0.1=9006/float",UMI_APP_CS_FLOAT_JS_URL:"http=//127.0.0.1=9006/assets/js/float/index.min.js",UMI_APP_AGENT_CLIENT_URL:"http=//127.0.0.1=9003/agent",PUBLIC_PATH:"/admin/"})===null||m===void 0?void 0:m.ANTD_VERSION)||t.Z},S=function(d,s){var l=(0,c.n)(P(),"4.23.0")>-1?{open:d,onOpenChange:s}:{visible:d,onVisibleChange:s};return(0,p.Y)(l)}},10178:function(B,h,e){e.d(h,{D:function(){return P}});var t=e(74165),p=e(15861),c=e(67294),m=e(48171);function P(S,C){var d=(0,m.J)(S),s=(0,c.useRef)(),l=(0,c.useCallback)(function(){s.current&&(clearTimeout(s.current),s.current=null)},[]),u=(0,c.useCallback)((0,p.Z)((0,t.Z)().mark(function n(){var r,o,a,i=arguments;return(0,t.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:for(r=i.length,o=new Array(r),a=0;a<r;a++)o[a]=i[a];if(!(C===0||C===void 0)){g.next=3;break}return g.abrupt("return",d.apply(void 0,o));case 3:return l(),g.abrupt("return",new Promise(function(D){s.current=setTimeout((0,p.Z)((0,t.Z)().mark(function _(){return(0,t.Z)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.t0=D,b.next=3,d.apply(void 0,o);case 3:return b.t1=b.sent,(0,b.t0)(b.t1),b.abrupt("return");case 6:case"end":return b.stop()}},_)})),C)}));case 5:case"end":return g.stop()}},n)})),[d,l,C]);return(0,c.useEffect)(function(){return l},[l]),{run:u,cancel:l}}},48171:function(B,h,e){e.d(h,{J:function(){return c}});var t=e(74902),p=e(67294),c=function(P){var S=(0,p.useRef)(null);return S.current=P,(0,p.useCallback)(function(){for(var C,d=arguments.length,s=new Array(d),l=0;l<d;l++)s[l]=arguments[l];return(C=S.current)===null||C===void 0?void 0:C.call.apply(C,[S].concat((0,t.Z)(s)))},[])}},51812:function(B,h,e){e.d(h,{Y:function(){return t}});var t=function(c){var m={};if(Object.keys(c||{}).forEach(function(P){c[P]!==void 0&&(m[P]=c[P])}),!(Object.keys(m).length<1))return m}},81643:function(B,h,e){e.d(h,{Z:function(){return t}});const t=p=>p?typeof p=="function"?p():p:null},57838:function(B,h,e){e.d(h,{Z:function(){return p}});var t=e(67294);function p(){const[,c]=t.useReducer(m=>m+1,0);return c}},74443:function(B,h,e){e.d(h,{ZP:function(){return S},c4:function(){return c}});var t=e(67294),p=e(29691);const c=["xxl","xl","lg","md","sm","xs"],m=d=>({xs:`(max-width: ${d.screenXSMax}px)`,sm:`(min-width: ${d.screenSM}px)`,md:`(min-width: ${d.screenMD}px)`,lg:`(min-width: ${d.screenLG}px)`,xl:`(min-width: ${d.screenXL}px)`,xxl:`(min-width: ${d.screenXXL}px)`}),P=d=>{const s=d,l=[].concat(c).reverse();return l.forEach((u,n)=>{const r=u.toUpperCase(),o=`screen${r}Min`,a=`screen${r}`;if(!(s[o]<=s[a]))throw new Error(`${o}<=${a} fails : !(${s[o]}<=${s[a]})`);if(n<l.length-1){const i=`screen${r}Max`;if(!(s[a]<=s[i]))throw new Error(`${a}<=${i} fails : !(${s[a]}<=${s[i]})`);const g=`screen${l[n+1].toUpperCase()}Min`;if(!(s[i]<=s[g]))throw new Error(`${i}<=${g} fails : !(${s[i]}<=${s[g]})`)}}),d};function S(){const[,d]=(0,p.ZP)(),s=m(P(d));return t.useMemo(()=>{const l=new Map;let u=-1,n={};return{matchHandlers:{},dispatch(r){return n=r,l.forEach(o=>o(n)),l.size>=1},subscribe(r){return l.size||this.register(),u+=1,l.set(u,r),r(n),u},unsubscribe(r){l.delete(r),l.size||this.unregister()},unregister(){Object.keys(s).forEach(r=>{const o=s[r],a=this.matchHandlers[o];a==null||a.mql.removeListener(a==null?void 0:a.listener)}),l.clear()},register(){Object.keys(s).forEach(r=>{const o=s[r],a=v=>{let{matches:g}=v;this.dispatch(Object.assign(Object.assign({},n),{[r]:g}))},i=window.matchMedia(o);i.addListener(a),this.matchHandlers[o]={mql:i,listener:a},a(i)})},responsiveMap:s}},[d])}const C=(d,s)=>{if(s&&typeof s=="object")for(let l=0;l<c.length;l++){const u=c[l];if(d[u]&&s[u]!==void 0)return s[u]}}},7134:function(B,h,e){e.d(h,{C:function(){return ue}});var t=e(67294),p=e(93967),c=e.n(p),m=e(9220),P=e(42550),S=e(74443),C=e(53124),d=e(35792),s=e(98675),l=e(25378),n=t.createContext({}),r=e(85982),o=e(14747),a=e(27036),i=e(45503);const v=f=>{const{antCls:O,componentCls:M,iconCls:E,avatarBg:A,avatarColor:V,containerSize:K,containerSizeLG:N,containerSizeSM:z,textFontSize:$,textFontSizeLG:F,textFontSizeSM:te,borderRadius:x,borderRadiusLG:T,borderRadiusSM:Z,lineWidth:se,lineType:ie}=f,y=(w,j,ne)=>({width:w,height:w,borderRadius:"50%",[`&${M}-square`]:{borderRadius:ne},[`&${M}-icon`]:{fontSize:j,[`> ${E}`]:{margin:0}}});return{[M]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,o.Wf)(f)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:V,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:A,border:`${(0,r.bf)(se)} ${ie} transparent`,"&-image":{background:"transparent"},[`${O}-image-img`]:{display:"block"}}),y(K,$,x)),{"&-lg":Object.assign({},y(N,F,T)),"&-sm":Object.assign({},y(z,te,Z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},g=f=>{const{componentCls:O,groupBorderColor:M,groupOverlapping:E,groupSpace:A}=f;return{[`${O}-group`]:{display:"inline-flex",[`${O}`]:{borderColor:M},"> *:not(:first-child)":{marginInlineStart:E}},[`${O}-group-popover`]:{[`${O} + ${O}`]:{marginInlineStart:A}}}},D=f=>{const{controlHeight:O,controlHeightLG:M,controlHeightSM:E,fontSize:A,fontSizeLG:V,fontSizeXL:K,fontSizeHeading3:N,marginXS:z,marginXXS:$,colorBorderBg:F}=f;return{containerSize:O,containerSizeLG:M,containerSizeSM:E,textFontSize:Math.round((V+K)/2),textFontSizeLG:N,textFontSizeSM:A,groupSpace:$,groupOverlapping:-z,groupBorderColor:F}};var _=(0,a.I$)("Avatar",f=>{const{colorTextLightSolid:O,colorTextPlaceholder:M}=f,E=(0,i.TS)(f,{avatarBg:M,avatarColor:O});return[v(E),g(E)]},D),L=function(f,O){var M={};for(var E in f)Object.prototype.hasOwnProperty.call(f,E)&&O.indexOf(E)<0&&(M[E]=f[E]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,E=Object.getOwnPropertySymbols(f);A<E.length;A++)O.indexOf(E[A])<0&&Object.prototype.propertyIsEnumerable.call(f,E[A])&&(M[E[A]]=f[E[A]]);return M};const b=(f,O)=>{const[M,E]=t.useState(1),[A,V]=t.useState(!1),[K,N]=t.useState(!0),z=t.useRef(null),$=t.useRef(null),F=(0,P.sQ)(O,z),{getPrefixCls:te,avatar:x}=t.useContext(C.E_),T=t.useContext(n),Z=()=>{if(!$.current||!z.current)return;const R=$.current.offsetWidth,I=z.current.offsetWidth;if(R!==0&&I!==0){const{gap:X=4}=f;X*2<I&&E(I-X*2<R?(I-X*2)/R:1)}};t.useEffect(()=>{V(!0)},[]),t.useEffect(()=>{N(!0),E(1)},[f.src]),t.useEffect(Z,[f.gap]);const se=()=>{const{onError:R}=f;(R==null?void 0:R())!==!1&&N(!1)},{prefixCls:ie,shape:y,size:w,src:j,srcSet:ne,icon:k,className:me,rootClassName:pe,alt:ve,draggable:re,children:G,crossOrigin:le}=f,H=L(f,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),U=(0,s.Z)(R=>{var I,X;return(X=(I=w!=null?w:T==null?void 0:T.size)!==null&&I!==void 0?I:R)!==null&&X!==void 0?X:"default"}),ge=Object.keys(typeof U=="object"?U||{}:{}).some(R=>["xs","sm","md","lg","xl","xxl"].includes(R)),fe=(0,l.Z)(ge),_e=t.useMemo(()=>{if(typeof U!="object")return{};const R=S.c4.find(X=>fe[X]),I=U[R];return I?{width:I,height:I,fontSize:I&&(k||G)?I/2:18}:{}},[fe,U]),W=te("avatar",ie),Pe=(0,d.Z)(W),[Oe,Ce,Me]=_(W,Pe),ye=c()({[`${W}-lg`]:U==="large",[`${W}-sm`]:U==="small"}),he=t.isValidElement(j),Se=y||(T==null?void 0:T.shape)||"circle",xe=c()(W,ye,x==null?void 0:x.className,`${W}-${Se}`,{[`${W}-image`]:he||j&&K,[`${W}-icon`]:!!k},Me,Pe,me,pe,Ce),De=typeof U=="number"?{width:U,height:U,fontSize:k?U/2:18}:{};let oe;if(typeof j=="string"&&K)oe=t.createElement("img",{src:j,draggable:re,srcSet:ne,onError:se,alt:ve,crossOrigin:le});else if(he)oe=j;else if(k)oe=k;else if(A||M!==1){const R=`scale(${M})`,I={msTransform:R,WebkitTransform:R,transform:R};oe=t.createElement(m.Z,{onResize:Z},t.createElement("span",{className:`${W}-string`,ref:$,style:Object.assign({},I)},G))}else oe=t.createElement("span",{className:`${W}-string`,style:{opacity:0},ref:$},G);return delete H.onError,delete H.gap,Oe(t.createElement("span",Object.assign({},H,{style:Object.assign(Object.assign(Object.assign(Object.assign({},De),_e),x==null?void 0:x.style),H.style),className:xe,ref:F}),oe))};var J=t.forwardRef(b),q=e(50344),Q=e(96159),ee=e(55241);const ce=f=>{const{size:O,shape:M}=t.useContext(n),E=t.useMemo(()=>({size:f.size||O,shape:f.shape||M}),[f.size,f.shape,O,M]);return t.createElement(n.Provider,{value:E},f.children)};var ae=f=>{var O,M,E;const{getPrefixCls:A,direction:V}=t.useContext(C.E_),{prefixCls:K,className:N,rootClassName:z,style:$,maxCount:F,maxStyle:te,size:x,shape:T,maxPopoverPlacement:Z,maxPopoverTrigger:se,children:ie,max:y}=f,w=A("avatar",K),j=`${w}-group`,ne=(0,d.Z)(w),[k,me,pe]=_(w,ne),ve=c()(j,{[`${j}-rtl`]:V==="rtl"},pe,ne,N,z,me),re=(0,q.Z)(ie).map((H,U)=>(0,Q.Tm)(H,{key:`avatar-key-${U}`})),G=(y==null?void 0:y.count)||F,le=re.length;if(G&&G<le){const H=re.slice(0,G),U=re.slice(G,le),ge=(y==null?void 0:y.style)||te,fe=((O=y==null?void 0:y.popover)===null||O===void 0?void 0:O.trigger)||se||"hover",_e=((M=y==null?void 0:y.popover)===null||M===void 0?void 0:M.placement)||Z||"top",W=Object.assign(Object.assign({content:U},y==null?void 0:y.popover),{overlayClassName:c()(`${j}-popover`,(E=y==null?void 0:y.popover)===null||E===void 0?void 0:E.overlayClassName),placement:_e,trigger:fe});return H.push(t.createElement(ee.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},W),t.createElement(J,{style:ge},`+${le-G}`))),k(t.createElement(ce,{shape:T,size:x},t.createElement("div",{className:ve,style:$},H)))}return k(t.createElement(ce,{shape:T,size:x},t.createElement("div",{className:ve,style:$},re)))};const de=J;de.Group=ae;var ue=de},25378:function(B,h,e){var t=e(67294),p=e(8410),c=e(57838),m=e(74443);function P(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const C=(0,t.useRef)({}),d=(0,c.Z)(),s=(0,m.ZP)();return(0,p.Z)(()=>{const l=s.subscribe(u=>{C.current=u,S&&d()});return()=>s.unsubscribe(l)},[]),C.current}h.Z=P},66330:function(B,h,e){var t=e(67294),p=e(93967),c=e.n(p),m=e(92419),P=e(81643),S=e(53124),C=e(20136),d=function(n,r){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(o[a[i]]=n[a[i]]);return o};const s=(n,r,o)=>!r&&!o?null:t.createElement(t.Fragment,null,r&&t.createElement("div",{className:`${n}-title`},(0,P.Z)(r)),t.createElement("div",{className:`${n}-inner-content`},(0,P.Z)(o))),l=n=>{const{hashId:r,prefixCls:o,className:a,style:i,placement:v="top",title:g,content:D,children:_}=n;return t.createElement("div",{className:c()(r,o,`${o}-pure`,`${o}-placement-${v}`,a),style:i},t.createElement("div",{className:`${o}-arrow`}),t.createElement(m.G,Object.assign({},n,{className:r,prefixCls:o}),_||s(o,g,D)))},u=n=>{const{prefixCls:r,className:o}=n,a=d(n,["prefixCls","className"]),{getPrefixCls:i}=t.useContext(S.E_),v=i("popover",r),[g,D,_]=(0,C.Z)(v);return g(t.createElement(l,Object.assign({},a,{prefixCls:v,hashId:D,className:c()(o,_)})))};h.ZP=u},55241:function(B,h,e){var t=e(67294),p=e(93967),c=e.n(p),m=e(21770),P=e(15105),S=e(81643),C=e(33603),d=e(96159),s=e(53124),l=e(83062),u=e(66330),n=e(20136),r=function(v,g){var D={};for(var _ in v)Object.prototype.hasOwnProperty.call(v,_)&&g.indexOf(_)<0&&(D[_]=v[_]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,_=Object.getOwnPropertySymbols(v);L<_.length;L++)g.indexOf(_[L])<0&&Object.prototype.propertyIsEnumerable.call(v,_[L])&&(D[_[L]]=v[_[L]]);return D};const o=v=>{let{title:g,content:D,prefixCls:_}=v;return t.createElement(t.Fragment,null,g&&t.createElement("div",{className:`${_}-title`},(0,S.Z)(g)),t.createElement("div",{className:`${_}-inner-content`},(0,S.Z)(D)))},i=t.forwardRef((v,g)=>{var D,_;const{prefixCls:L,title:b,content:Y,overlayClassName:J,placement:q="top",trigger:Q="hover",children:ee,mouseEnterDelay:ce=.1,mouseLeaveDelay:Ee=.1,onOpenChange:ae,overlayStyle:de={}}=v,ue=r(v,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:f}=t.useContext(s.E_),O=f("popover",L),[M,E,A]=(0,n.Z)(O),V=f(),K=c()(J,E,A),[N,z]=(0,m.Z)(!1,{value:(D=v.open)!==null&&D!==void 0?D:v.visible,defaultValue:(_=v.defaultOpen)!==null&&_!==void 0?_:v.defaultVisible}),$=(x,T)=>{z(x,!0),ae==null||ae(x,T)},F=x=>{x.keyCode===P.Z.ESC&&$(!1,x)},te=x=>{$(x)};return M(t.createElement(l.Z,Object.assign({placement:q,trigger:Q,mouseEnterDelay:ce,mouseLeaveDelay:Ee,overlayStyle:de},ue,{prefixCls:O,overlayClassName:K,ref:g,open:N,onOpenChange:te,overlay:b||Y?t.createElement(o,{prefixCls:O,title:b,content:Y}):null,transitionName:(0,C.m)(V,"zoom-big",ue.transitionName),"data-popover-inject":!0}),(0,d.Tm)(ee,{onKeyDown:x=>{var T,Z;t.isValidElement(ee)&&((Z=ee==null?void 0:(T=ee.props).onKeyDown)===null||Z===void 0||Z.call(T,x)),F(x)}})))});i._InternalPanelDoNotUseOrYouWillBeFired=u.ZP,h.Z=i},20136:function(B,h,e){var t=e(14747),p=e(50438),c=e(97414),m=e(79511),P=e(8796),S=e(27036),C=e(45503);const d=u=>{const{componentCls:n,popoverColor:r,titleMinWidth:o,fontWeightStrong:a,innerPadding:i,boxShadowSecondary:v,colorTextHeading:g,borderRadiusLG:D,zIndexPopup:_,titleMarginBottom:L,colorBgElevated:b,popoverBg:Y,titleBorderBottom:J,innerContentPadding:q,titlePadding:Q}=u;return[{[n]:Object.assign(Object.assign({},(0,t.Wf)(u)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:_,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":b,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:Y,backgroundClip:"padding-box",borderRadius:D,boxShadow:v,padding:i},[`${n}-title`]:{minWidth:o,marginBottom:L,color:g,fontWeight:a,borderBottom:J,padding:Q},[`${n}-inner-content`]:{color:r,padding:q}})},(0,c.ZP)(u,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:u.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},s=u=>{const{componentCls:n}=u;return{[n]:P.i.map(r=>{const o=u[`${r}6`];return{[`&${n}-${r}`]:{"--antd-arrow-background-color":o,[`${n}-inner`]:{backgroundColor:o},[`${n}-arrow`]:{background:"transparent"}}}})}},l=u=>{const{lineWidth:n,controlHeight:r,fontHeight:o,padding:a,wireframe:i,zIndexPopupBase:v,borderRadiusLG:g,marginXS:D,lineType:_,colorSplit:L,paddingSM:b}=u,Y=r-o,J=Y/2,q=Y/2-n,Q=a;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:v+30},(0,m.w)(u)),(0,c.wZ)({contentRadius:g,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:D,titlePadding:i?`${J}px ${Q}px ${q}px`:0,titleBorderBottom:i?`${n}px ${_} ${L}`:"none",innerContentPadding:i?`${b}px ${Q}px`:0})};h.Z=(0,S.I$)("Popover",u=>{const{colorBgElevated:n,colorText:r}=u,o=(0,C.TS)(u,{popoverBg:n,popoverColor:r});return[d(o),s(o),(0,p._y)(o,"zoom-big")]},l,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})},97435:function(B,h){function e(t,p){for(var c=Object.assign({},t),m=0;m<p.length;m+=1){var P=p[m];delete c[P]}return c}h.Z=e}}]);