"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9559],{99559:function(je,D,C){C.d(D,{Z:function(){return Se}});var G=C(93967),m=C.n(G),i=C(67294),v=C(53124),P=C(98423),j=e=>{const{prefixCls:t,className:s,style:n,size:a,shape:r}=e,c=m()({[`${t}-lg`]:a==="large",[`${t}-sm`]:a==="small"}),l=m()({[`${t}-circle`]:r==="circle",[`${t}-square`]:r==="square",[`${t}-round`]:r==="round"}),o=i.useMemo(()=>typeof a=="number"?{width:a,height:a,lineHeight:`${a}px`}:{},[a]);return i.createElement("span",{className:m()(t,c,l,s),style:Object.assign(Object.assign({},o),n)})},T=C(6731),Z=C(91945),W=C(45503);const X=new T.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),x=e=>({height:e,lineHeight:(0,T.bf)(e)}),f=e=>Object.assign({width:e},x(e)),J=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:X,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),I=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},x(e)),K=e=>{const{skeletonAvatarCls:t,gradientFromColor:s,controlHeight:n,controlHeightLG:a,controlHeightSM:r}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:s},f(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(a)),[`${t}${t}-sm`]:Object.assign({},f(r))}},Q=e=>{const{controlHeight:t,borderRadiusSM:s,skeletonInputCls:n,controlHeightLG:a,controlHeightSM:r,gradientFromColor:c,calc:l}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:s},I(t,l)),[`${n}-lg`]:Object.assign({},I(a,l)),[`${n}-sm`]:Object.assign({},I(r,l))}},L=e=>Object.assign({width:e},x(e)),U=e=>{const{skeletonImageCls:t,imageSizeBase:s,gradientFromColor:n,borderRadiusSM:a,calc:r}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:a},L(r(s).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},L(s)),{maxWidth:r(s).mul(4).equal(),maxHeight:r(s).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},z=(e,t,s)=>{const{skeletonButtonCls:n}=e;return{[`${s}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${s}${n}-round`]:{borderRadius:t}}},B=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},x(e)),Y=e=>{const{borderRadiusSM:t,skeletonButtonCls:s,controlHeight:n,controlHeightLG:a,controlHeightSM:r,gradientFromColor:c,calc:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${s}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:l(n).mul(2).equal(),minWidth:l(n).mul(2).equal()},B(n,l))},z(e,n,s)),{[`${s}-lg`]:Object.assign({},B(a,l))}),z(e,a,`${s}-lg`)),{[`${s}-sm`]:Object.assign({},B(r,l))}),z(e,r,`${s}-sm`))},_=e=>{const{componentCls:t,skeletonAvatarCls:s,skeletonTitleCls:n,skeletonParagraphCls:a,skeletonButtonCls:r,skeletonInputCls:c,skeletonImageCls:l,controlHeight:o,controlHeightLG:d,controlHeightSM:u,gradientFromColor:g,padding:$,marginSM:p,borderRadius:b,titleHeight:h,blockRadius:E,paragraphLiHeight:A,controlHeightXS:R,paragraphMarginTop:O}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:$,verticalAlign:"top",[`${s}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},f(o)),[`${s}-circle`]:{borderRadius:"50%"},[`${s}-lg`]:Object.assign({},f(d)),[`${s}-sm`]:Object.assign({},f(u))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:h,background:g,borderRadius:E,[`+ ${a}`]:{marginBlockStart:u}},[`${a}`]:{padding:0,"> li":{width:"100%",height:A,listStyle:"none",background:g,borderRadius:E,"+ li":{marginBlockStart:R}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${a} > li`]:{borderRadius:b}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:p,[`+ ${a}`]:{marginBlockStart:O}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Y(e)),K(e)),Q(e)),U(e)),[`${t}${t}-block`]:{width:"100%",[`${r}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${a} > li,
        ${s},
        ${r},
        ${c},
        ${l}
      `]:Object.assign({},J(e))}}},ee=e=>{const{colorFillContent:t,colorFill:s}=e,n=t,a=s;return{color:n,colorGradientEnd:a,gradientFromColor:n,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}};var k=(0,Z.I$)("Skeleton",e=>{const{componentCls:t,calc:s}=e,n=(0,W.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:s(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[_(n)]},ee,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),te=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,shape:r="circle",size:c="default"}=e,{getPrefixCls:l}=i.useContext(v.E_),o=l("skeleton",t),[d,u,g]=k(o),$=(0,P.Z)(e,["prefixCls","className"]),p=m()(o,`${o}-element`,{[`${o}-active`]:a},s,n,u,g);return d(i.createElement("div",{className:p},i.createElement(j,Object.assign({prefixCls:`${o}-avatar`,shape:r,size:c},$))))},se=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:r=!1,size:c="default"}=e,{getPrefixCls:l}=i.useContext(v.E_),o=l("skeleton",t),[d,u,g]=k(o),$=(0,P.Z)(e,["prefixCls"]),p=m()(o,`${o}-element`,{[`${o}-active`]:a,[`${o}-block`]:r},s,n,u,g);return d(i.createElement("div",{className:p},i.createElement(j,Object.assign({prefixCls:`${o}-button`,size:c},$))))};const ne="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var ae=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:r}=e,{getPrefixCls:c}=i.useContext(v.E_),l=c("skeleton",t),[o,d,u]=k(l),g=m()(l,`${l}-element`,{[`${l}-active`]:r},s,n,d,u);return o(i.createElement("div",{className:g},i.createElement("div",{className:m()(`${l}-image`,s),style:a},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${l}-image-svg`},i.createElement("path",{d:ne,className:`${l}-image-path`})))))},le=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:r,size:c="default"}=e,{getPrefixCls:l}=i.useContext(v.E_),o=l("skeleton",t),[d,u,g]=k(o),$=(0,P.Z)(e,["prefixCls"]),p=m()(o,`${o}-element`,{[`${o}-active`]:a,[`${o}-block`]:r},s,n,u,g);return d(i.createElement("div",{className:p},i.createElement(j,Object.assign({prefixCls:`${o}-input`,size:c},$))))},oe=C(87462),ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},re=ie,ce=C(93771),ge=function(t,s){return i.createElement(ce.Z,(0,oe.Z)({},t,{ref:s,icon:re}))},de=i.forwardRef(ge),ue=de,me=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:r,children:c}=e,{getPrefixCls:l}=i.useContext(v.E_),o=l("skeleton",t),[d,u,g]=k(o),$=m()(o,`${o}-element`,{[`${o}-active`]:r},u,s,n,g),p=c!=null?c:i.createElement(ue,null);return d(i.createElement("div",{className:$},i.createElement("div",{className:m()(`${o}-image`,s),style:a},p)))},he=C(74902);const Ce=(e,t)=>{const{width:s,rows:n=2}=t;if(Array.isArray(s))return s[e];if(n-1===e)return s};var $e=e=>{const{prefixCls:t,className:s,style:n,rows:a}=e,r=(0,he.Z)(Array(a)).map((c,l)=>i.createElement("li",{key:l,style:{width:Ce(l,e)}}));return i.createElement("ul",{className:m()(t,s),style:n},r)},pe=e=>{let{prefixCls:t,className:s,width:n,style:a}=e;return i.createElement("h3",{className:m()(t,s),style:Object.assign({width:n},a)})};function H(e){return e&&typeof e=="object"?e:{}}function be(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function ve(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function fe(e,t){const s={};return(!e||!t)&&(s.width="61%"),!e&&t?s.rows=3:s.rows=2,s}const S=e=>{const{prefixCls:t,loading:s,className:n,rootClassName:a,style:r,children:c,avatar:l=!1,title:o=!0,paragraph:d=!0,active:u,round:g}=e,{getPrefixCls:$,direction:p,skeleton:b}=i.useContext(v.E_),h=$("skeleton",t),[E,A,R]=k(h);if(s||!("loading"in e)){const O=!!l,N=!!o,y=!!d;let V;if(O){const w=Object.assign(Object.assign({prefixCls:`${h}-avatar`},be(N,y)),H(l));V=i.createElement("div",{className:`${h}-header`},i.createElement(j,Object.assign({},w)))}let F;if(N||y){let w;if(N){const M=Object.assign(Object.assign({prefixCls:`${h}-title`},ve(O,y)),H(o));w=i.createElement(pe,Object.assign({},M))}let q;if(y){const M=Object.assign(Object.assign({prefixCls:`${h}-paragraph`},fe(O,N)),H(d));q=i.createElement($e,Object.assign({},M))}F=i.createElement("div",{className:`${h}-content`},w,q)}const Oe=m()(h,{[`${h}-with-avatar`]:O,[`${h}-active`]:u,[`${h}-rtl`]:p==="rtl",[`${h}-round`]:g},b==null?void 0:b.className,n,a,A,R);return E(i.createElement("div",{className:Oe,style:Object.assign(Object.assign({},b==null?void 0:b.style),r)},V,F))}return c!=null?c:null};S.Button=se,S.Avatar=te,S.Input=le,S.Image=ae,S.Node=me;var ke=S,Se=ke}}]);