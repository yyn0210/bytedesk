(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3119],{93119:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ce}});var o=n(44194),r=n(11757),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},i=n(63837),a=function(e,t){return o.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:l}))};var c=o.forwardRef(a),s=n(51865),u=n.n(s),d=n(12320),p=n(2770),f=n(16713),m=n(66744),g=n(82252),b=n(38726),y=n(82691),v=n(19735),h=n(52143),x=n(40751),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},E=function(e,t){return o.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:O}))};var w=o.forwardRef(E),C=n(11120),S=n(65441),j=n(33078),k=n(35912),$=n(2645),R=n(38774),T=n(29664);const I=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:r,fontWeightStrong:l}=o;return{marginBottom:r,color:n,fontWeight:l,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},D=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,k.Nd)(e)),{userSelect:"text",[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Z=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:R.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),M=e=>{const{componentCls:t,paddingSM:n}=e,o=n;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(o).mul(-1).equal(),marginBottom:`calc(1em - ${(0,T.bf)(o)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},P=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),B=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},I(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),Z(e)),D(e)),{[`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,k.Nd)(e)),{marginInlineStart:e.marginXXS})}),M(e)),P(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}};var N=(0,$.I$)("Typography",(e=>[B(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})));var z=e=>{const{prefixCls:t,"aria-label":n,className:r,style:l,direction:i,maxLength:a,autoSize:c=!0,value:s,onSave:d,onCancel:p,onEnd:f,component:m,enterIcon:g=o.createElement(w,null)}=e,b=o.useRef(null),y=o.useRef(!1),v=o.useRef(),[h,x]=o.useState(s);o.useEffect((()=>{x(s)}),[s]),o.useEffect((()=>{var e;if(null===(e=b.current)||void 0===e?void 0:e.resizableTextArea){const{textArea:e}=b.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const O=()=>{d(h.trim())},[E,k,$]=N(t),R=u()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===i,[`${t}-${m}`]:!!m},r,k,$);return E(o.createElement("div",{className:R,style:l},o.createElement(j.Z,{ref:b,maxLength:a,value:h,onChange:e=>{let{target:t}=e;x(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;y.current||(v.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:r,shiftKey:l}=e;v.current!==t||y.current||n||o||r||l||(t===C.Z.ENTER?(O(),null==f||f()):t===C.Z.ESC&&p())},onCompositionStart:()=>{y.current=!0},onCompositionEnd:()=>{y.current=!1},onBlur:()=>{O()},"aria-label":n,rows:1,autoSize:c}),null!==g?(0,S.Tm)(g,{className:`${t}-edit-content-confirm`}):null))},H=n(86724),L=n.n(H),W=n(81446);var A=function(e,t,n,o){return new(n||(n=Promise))((function(r,l){function i(e){try{c(o.next(e))}catch(e){l(e)}}function a(e){try{c(o.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};var F=e=>{let{copyConfig:t,children:n}=e;const[r,l]=o.useState(!1),[i,a]=o.useState(!1),c=o.useRef(null),s=()=>{c.current&&clearTimeout(c.current)},u={};t.format&&(u.format=t.format),o.useEffect((()=>s),[]);const d=(0,W.Z)((e=>A(void 0,void 0,void 0,(function*(){var o;null==e||e.preventDefault(),null==e||e.stopPropagation(),a(!0);try{const r="function"==typeof t.text?yield t.text():t.text;L()(r||function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&null==e?[]:Array.isArray(e)?e:[e]}(n,!0).join("")||"",u),a(!1),l(!0),s(),c.current=setTimeout((()=>{l(!1)}),3e3),null===(o=t.onCopy)||void 0===o||o.call(t,e)}catch(e){throw a(!1),e}}))));return{copied:r,copyLoading:i,onClick:d}};function U(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"==typeof e?e:null)]}),[e])}var K=e=>{const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current};var q=(e,t,n)=>(0,o.useMemo)((()=>!0===e?{title:null!=t?t:n}:(0,o.isValidElement)(e)?{title:e}:"object"==typeof e?Object.assign({title:null!=t?t:n},e):{title:e}),[e,t,n]),X=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const V=o.forwardRef(((e,t)=>{const{prefixCls:n,component:r="article",className:l,rootClassName:i,setContentRef:a,children:c,direction:s,style:d}=e,p=X(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:m,typography:g}=o.useContext(v.E_),y=null!=s?s:m,h=a?(0,b.sQ)(t,a):t,x=f("typography",n);const[O,E,w]=N(x),C=u()(x,null==g?void 0:g.className,{[`${x}-rtl`]:"rtl"===y},l,i,E,w),S=Object.assign(Object.assign({},null==g?void 0:g.style),d);return O(o.createElement(r,Object.assign({className:C,style:S,ref:h},p),c))}));var _=V,G=n(95040),Q=n(95513),J=n(47155);function Y(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}function ee(e,t,n){return!0===e||void 0===e?t:e||n&&t}const te=e=>["string","number"].includes(typeof e);var ne=e=>{let{prefixCls:t,copied:n,locale:r,iconOnly:l,tooltips:i,icon:a,tabIndex:c,onCopy:s,loading:d}=e;const p=Y(i),f=Y(a),{copied:m,copy:g}=null!=r?r:{},b=n?m:g,y=ee(p[n?1:0],b),v="string"==typeof y?y:b;return o.createElement(x.Z,{title:y},o.createElement("button",{type:"button",className:u()(`${t}-copy`,{[`${t}-copy-success`]:n,[`${t}-copy-icon-only`]:l}),onClick:s,"aria-label":v,tabIndex:c},n?ee(f[1],o.createElement(G.Z,null),!0):ee(f[0],d?o.createElement(J.Z,null):o.createElement(Q.Z,null),!0)))},oe=n(56299);const re=o.forwardRef(((e,t)=>{let{style:n,children:r}=e;const l=o.useRef(null);return o.useImperativeHandle(t,(()=>({isExceed:()=>{const e=l.current;return e.scrollHeight>e.clientHeight},getHeight:()=>l.current.clientHeight}))),o.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},n)},r)}));function le(e,t){let n=0;const o=[];for(let r=0;r<e.length;r+=1){if(n===t)return o;const l=e[r],i=n+(te(l)?String(l).length:1);if(i>t){const e=t-n;return o.push(String(l).slice(0,e)),o}o.push(l),n=i}return e}const ie=0,ae=4,ce={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function se(e){const{enableMeasure:t,width:n,text:r,children:l,rows:i,expanded:a,miscDeps:c,onEllipsis:s}=e,u=o.useMemo((()=>(0,p.Z)(r)),[r]),d=o.useMemo((()=>(e=>e.reduce(((e,t)=>e+(te(t)?String(t).length:1)),0))(u)),[r]),m=o.useMemo((()=>l(u,!1)),[r]),[g,b]=o.useState(null),y=o.useRef(null),v=o.useRef(null),h=o.useRef(null),x=o.useRef(null),O=o.useRef(null),[E,w]=o.useState(!1),[C,S]=o.useState(ie),[j,k]=o.useState(0),[$,R]=o.useState(null);(0,f.Z)((()=>{S(t&&n&&d?1:ie)}),[n,r,i,t,u]),(0,f.Z)((()=>{var e,t,n,o;if(1===C){S(2);const e=v.current&&getComputedStyle(v.current).whiteSpace;R(e)}else if(2===C){const r=!!(null===(e=h.current)||void 0===e?void 0:e.isExceed());S(r?3:ae),b(r?[0,d]:null),w(r);const l=(null===(t=h.current)||void 0===t?void 0:t.getHeight())||0,a=1===i?0:(null===(n=x.current)||void 0===n?void 0:n.getHeight())||0,c=(null===(o=O.current)||void 0===o?void 0:o.getHeight())||0,u=Math.max(l,a+c);k(u+1),s(r)}}),[C]);const T=g?Math.ceil((g[0]+g[1])/2):0;(0,f.Z)((()=>{var e;const[t,n]=g||[0,0];if(t!==n){const o=((null===(e=y.current)||void 0===e?void 0:e.getHeight())||0)>j;let r=T;n-t==1&&(r=o?t:n),b(o?[t,r]:[r,n])}}),[g,T]);const I=o.useMemo((()=>{if(!t)return l(u,!1);if(3!==C||!g||g[0]!==g[1]){const e=l(u,!1);return[ae,ie].includes(C)?e:o.createElement("span",{style:Object.assign(Object.assign({},ce),{WebkitLineClamp:i})},e)}return l(a?u:le(u,g[0]),E)}),[a,C,g,u].concat((0,oe.Z)(c))),D={width:n,margin:0,padding:0,whiteSpace:"nowrap"===$?"normal":"inherit"};return o.createElement(o.Fragment,null,I,2===C&&o.createElement(o.Fragment,null,o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},D),ce),{WebkitLineClamp:i}),ref:h},m),o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},D),ce),{WebkitLineClamp:i-1}),ref:x},m),o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},D),ce),{WebkitLineClamp:1}),ref:O},l([],!0))),3===C&&g&&g[0]!==g[1]&&o.createElement(re,{style:Object.assign(Object.assign({},D),{top:400}),ref:y},l(le(u,T),!0)),1===C&&o.createElement("span",{style:{whiteSpace:"inherit"},ref:v}))}var ue=e=>{let{enableEllipsis:t,isEllipsis:n,children:r,tooltipProps:l}=e;return(null==l?void 0:l.title)&&t?o.createElement(x.Z,Object.assign({open:!!n&&void 0},l),r):r},de=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const pe=o.forwardRef(((e,t)=>{var n;const{prefixCls:r,className:l,style:i,type:a,disabled:s,children:O,ellipsis:E,editable:w,copyable:C,component:S,title:j}=e,k=de(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:$,direction:R}=o.useContext(v.E_),[T]=(0,h.Z)("Text"),I=o.useRef(null),D=o.useRef(null),Z=$("typography",r),M=(0,g.Z)(k,["mark","code","delete","underline","strong","keyboard","italic"]),[P,B]=U(w),[N,H]=(0,m.Z)(!1,{value:B.editing}),{triggerType:L=["icon"]}=B,W=e=>{var t;e&&(null===(t=B.onStart)||void 0===t||t.call(B)),H(e)},A=K(N);(0,f.Z)((()=>{var e;!N&&A&&(null===(e=D.current)||void 0===e||e.focus())}),[N]);const X=e=>{null==e||e.preventDefault(),W(!0)},V=e=>{var t;null===(t=B.onChange)||void 0===t||t.call(B,e),W(!1)},G=()=>{var e;null===(e=B.onCancel)||void 0===e||e.call(B),W(!1)},[Q,J]=U(C),{copied:Y,copyLoading:ee,onClick:oe}=F({copyConfig:J,children:O}),[re,le]=o.useState(!1),[ie,ae]=o.useState(!1),[ce,pe]=o.useState(!1),[fe,me]=o.useState(!1),[ge,be]=o.useState(!0),[ye,ve]=U(E,{expandable:!1,symbol:e=>e?null==T?void 0:T.collapse:null==T?void 0:T.expand}),[he,xe]=(0,m.Z)(ve.defaultExpanded||!1,{value:ve.expanded}),Oe=ye&&(!he||"collapsible"===ve.expandable),{rows:Ee=1}=ve,we=o.useMemo((()=>Oe&&(void 0!==ve.suffix||ve.onEllipsis||ve.expandable||P||Q)),[Oe,ve,P,Q]);(0,f.Z)((()=>{ye&&!we&&(le((0,y.G)("webkitLineClamp")),ae((0,y.G)("textOverflow")))}),[we,ye]);const[Ce,Se]=o.useState(Oe),je=o.useMemo((()=>!we&&(1===Ee?ie:re)),[we,ie,re]);(0,f.Z)((()=>{Se(je&&Oe)}),[je,Oe]);const ke=Oe&&(Ce?fe:ce),$e=Oe&&1===Ee&&Ce,Re=Oe&&Ee>1&&Ce,[Te,Ie]=o.useState(0),De=e=>{var t;pe(e),ce!==e&&(null===(t=ve.onEllipsis)||void 0===t||t.call(ve,e))};o.useEffect((()=>{const e=I.current;if(ye&&Ce&&e){const t=function(e){const t=document.createElement("em");e.appendChild(t);const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return e.removeChild(t),n.left>o.left||o.right>n.right||n.top>o.top||o.bottom>n.bottom}(e);fe!==t&&me(t)}}),[ye,Ce,O,Re,ge,Te]),o.useEffect((()=>{const e=I.current;if("undefined"==typeof IntersectionObserver||!e||!Ce||!Oe)return;const t=new IntersectionObserver((()=>{be(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[Ce,Oe]);const Ze=q(ve.tooltip,B.text,O),Me=o.useMemo((()=>{if(ye&&!Ce)return[B.text,O,j,Ze.title].find(te)}),[ye,Ce,j,Ze.title,ke]);if(N)return o.createElement(z,{value:null!==(n=B.text)&&void 0!==n?n:"string"==typeof O?O:"",onSave:V,onCancel:G,onEnd:B.onEnd,prefixCls:Z,className:l,style:i,direction:R,component:S,maxLength:B.maxLength,autoSize:B.autoSize,enterIcon:B.enterIcon});const Pe=()=>{const{expandable:e,symbol:t}=ve;return e?o.createElement("button",{type:"button",key:"expand",className:`${Z}-${he?"collapse":"expand"}`,onClick:e=>((e,t)=>{var n;xe(t.expanded),null===(n=ve.onExpand)||void 0===n||n.call(ve,e,t)})(e,{expanded:!he}),"aria-label":he?T.collapse:null==T?void 0:T.expand},"function"==typeof t?t(he):t):null},Be=()=>{if(!P)return;const{icon:e,tooltip:t,tabIndex:n}=B,r=(0,p.Z)(t)[0]||(null==T?void 0:T.edit),l="string"==typeof r?r:"";return L.includes("icon")?o.createElement(x.Z,{key:"edit",title:!1===t?"":r},o.createElement("button",{type:"button",ref:D,className:`${Z}-edit`,onClick:X,"aria-label":l,tabIndex:n},e||o.createElement(c,{role:"button"}))):null},Ne=e=>[e&&Pe(),Be(),Q?o.createElement(ne,Object.assign({key:"copy"},J,{prefixCls:Z,copied:Y,locale:T,onCopy:oe,loading:ee,iconOnly:null==O})):null];return o.createElement(d.Z,{onResize:e=>{let{offsetWidth:t}=e;Ie(t)},disabled:!Oe},(n=>o.createElement(ue,{tooltipProps:Ze,enableEllipsis:Oe,isEllipsis:ke},o.createElement(_,Object.assign({className:u()({[`${Z}-${a}`]:a,[`${Z}-disabled`]:s,[`${Z}-ellipsis`]:ye,[`${Z}-ellipsis-single-line`]:$e,[`${Z}-ellipsis-multiple-line`]:Re},l),prefixCls:r,style:Object.assign(Object.assign({},i),{WebkitLineClamp:Re?Ee:void 0}),component:S,ref:(0,b.sQ)(n,I,t),direction:R,onClick:L.includes("text")?X:void 0,"aria-label":null==Me?void 0:Me.toString(),title:j},M),o.createElement(se,{enableMeasure:Oe&&!Ce,text:O,rows:Ee,width:Te,onEllipsis:De,expanded:he,miscDeps:[Y,he,ee,P,Q,T]},((t,n)=>function(e,t){let{mark:n,code:r,underline:l,delete:i,strong:a,keyboard:c,italic:s}=e,u=t;function d(e,t){t&&(u=o.createElement(e,{},u))}return d("strong",a),d("u",l),d("del",i),d("code",r),d("mark",n),d("kbd",c),d("i",s),u}(e,o.createElement(o.Fragment,null,t.length>0&&n&&!he&&Me?o.createElement("span",{key:"show-content","aria-hidden":!0},t):t,(e=>[e&&!he&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),ve.suffix,Ne(e)])(n)))))))))}));var fe=pe,me=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var ge=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:r}=e,l=me(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},l),{rel:void 0===r&&"_blank"===l.target?"noopener noreferrer":r});return delete i.navigate,o.createElement(fe,Object.assign({},i,{ref:t,ellipsis:!!n,component:"a"}))}));var be=o.forwardRef(((e,t)=>o.createElement(fe,Object.assign({ref:t},e,{component:"div"})))),ye=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const ve=(e,t)=>{var{ellipsis:n}=e,r=ye(e,["ellipsis"]);const l=o.useMemo((()=>n&&"object"==typeof n?(0,g.Z)(n,["expandable","rows"]):n),[n]);return o.createElement(fe,Object.assign({ref:t},r,{ellipsis:l,component:"span"}))};var he=o.forwardRef(ve),xe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Oe=[1,2,3,4,5];var Ee=o.forwardRef(((e,t)=>{const{level:n=1}=e,r=xe(e,["level"]);const l=Oe.includes(n)?`h${n}`:"h1";return o.createElement(fe,Object.assign({ref:t},r,{component:l}))}));const we=_;we.Text=he,we.Link=ge,we.Title=Ee,we.Paragraph=be;var Ce=we},86724:function(e,t,n){"use strict";var o=n(80480),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,i,a,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),a=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=r[t.format]||r.default;window.clipboardData.setData(l,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),a.selectNodeContents(s),c.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},80480:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);