"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9368],{94546:function(e,t){t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"}},1641:function(e,t,n){var a=n(11757),r=n(44194),s=n(94546),o=n(63837),c=function(e,t){return r.createElement(o.Z,(0,a.Z)({},e,{ref:t,icon:s.Z}))},i=r.forwardRef(c);t.Z=i},60203:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(90819),r=n.n(a),s=n(89933),o=n.n(s),c=n(45332),i=n.n(c),u=n(18850),l=n(79434);function d(){return g.apply(this,arguments)}function g(){return(g=o()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/kaptcha/api/v1/get",{method:"GET",params:{client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return p.apply(this,arguments)}function p(){return(p=o()(r()().mark((function e(t,n){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/kaptcha/api/v1/check",{method:"POST",data:{captchaUid:t,captchaCode:n,client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(69560),m=n(19140),v=n(44194),x=n(31549),w=function(e){var t=e.onKaptchaChange,n=e.onKaptchaCheck,a=(0,l.useIntl)(),s=(0,v.useState)(),c=i()(s,2),u=c[0],g=c[1],p=(0,v.useState)(),w=i()(p,2),k=w[0],y=w[1],M=function(){var e=o()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:200===(t=e.sent).code&&(g(t.data.captchaUid),y(t.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=o()(r()().mark((function e(t,a){var s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,a);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?n&&n(!0):n&&n(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){M()}),[]);return(0,x.jsx)(x.Fragment,{children:k&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{onChange:function(e){t&&(t(u,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?b(u,e.target.value):n&&n(!1))},prefix:(0,x.jsx)(h.Z,{}),placeholder:a.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40},allowClear:!0}),(0,x.jsx)("img",{src:k,alt:"captcha",onClick:M})]})})}},49701:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(73193),r=n.n(a),s=n(90819),o=n.n(s),c=n(89933),i=n.n(c),u=n(45332),l=n.n(u),d=n(40313),g=n(5728),f=n(75625),p=n(90774),h=n(28311),m=n(34757),v=n(79434),x=n(48974),w=n(50571),k=n(12265),y=n(40881),M=n(78386),b=n(44194),j=n(56321),C=n(49189),U=n(32078),Z=n(12339),S=n(39522),T=n(18850),F=n(60203),I=n(97146),L=n(98652),K=n(43688),q=n(31549),P=function(e){var t=e.loginType,n=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,v.useIntl)(),s=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&a(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,q.jsx)(q.Fragment,{children:"account"===t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(K.Z,{name:"username",fieldProps:{size:"large",prefix:(0,q.jsx)(I.Z,{})},placeholder:r.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"用户名/邮箱"}),rules:[{required:!0,message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"请输入用户名/邮箱!"})}]}),(0,q.jsx)(K.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,q.jsx)(L.Z,{})},placeholder:r.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"密码"}),rules:[{required:!0,message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"请输入密码！"})}]}),(0,q.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,q.jsx)(F.Z,{onKaptchaChange:s,onKaptchaCheck:c})})]})})},A=n(23836),D=n(50784),R=n(46017),z=n(93982),B=function(e){var t=e.loginType,n=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,v.useIntl)(),s=(0,b.useRef)(),c=(0,b.useState)(""),u=l()(c,2),f=u[0],p=u[1],h=(0,b.useState)(""),m=l()(h,2),x=m[0],w=m[1],k=(0,b.useState)(!1),y=l()(k,2),M=y[0],j=y[1],Z=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),S=Z.deviceUid,I=Z.setDeviceUid,P=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(t),w(a),n&&n(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t),a&&a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.useEffect)((function(){void 0!==S&&""!==S||I((0,A.Zx)())}),[]),(0,q.jsx)(q.Fragment,{children:"mobile"===t&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(K.Z,{fieldProps:{size:"large",prefix:(0,q.jsx)(D.Z,{})},name:"mobile",placeholder:r.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,q.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,q.jsx)(F.Z,{onKaptchaChange:P,onKaptchaCheck:B})}),(0,q.jsx)(R.Z,{fieldProps:{size:"large",prefix:(0,q.jsx)(L.Z,{})},captchaProps:{size:"large",disabled:!M},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,t){return e?"".concat(t," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=i()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",t),!t||11!==t.length){e.next=13;break}return n={mobile:t,type:T.UUF,captchaUid:f,captchaCode:x,deviceUid:S,platform:T.iw8},e.next=5,(0,d.Y7)(n);case 5:if(200===(a=e.sent).code){e.next=10;break}return U.yw.error(a.message),setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=s.current)||void 0===e||e.endTiming()}),2),e.abrupt("return");case 10:U.yw.success(a.message),e.next=14;break;case 13:U.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,q.jsx)(z.Z,{message:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.auto.register",defaultMessage:"Mobile will auto register"}),type:"info"})]})})},E=n(88183),N=function(e){var t=e.loginType,n=(0,v.useIntl)(),a=(0,Z.t)((function(e){return e.setAccessToken})),s=(0,C.L)((function(e){return e.setUserInfo})),c=(0,v.useModel)("@@initialState").setInitialState,u=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),g=u.deviceUid,f=u.setDeviceUid,p=(0,b.useState)("login"),h=l()(p,2),m=h[0],x=h[1],w=(0,b.useState)("loading"),k=l()(w,2),y=k[0],M=k[1],S=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){c((function(e){return r()(r()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=i()(o()().mark((function e(t){var c,i,u;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleScanLogin values: ",t),U.yw.loading(n.formatMessage({id:"logging",defaultMessage:"logging..."})),e.next=4,(0,d.kZ)(r()({},t));case 4:c=e.sent,console.log("LoginMobileResult scanLogin:",c.data),200===c.code?(U.yw.destroy(),U.yw.success(n.formatMessage({id:"login.success",defaultMessage:"login success"})),a(null==c?void 0:c.data.accessToken),S(null==c||null===(i=c.data)||void 0===i?void 0:i.user),s(null==c||null===(u=c.data)||void 0===u?void 0:u.user),v.history.push("/")):(U.yw.destroy(),U.yw.error(c.message));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=i()(o()().mark((function e(n){var a,r,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("scan"==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.Tm)(g,n);case 4:if(200!==(a=e.sent).code){e.next=30;break}if(r=a.data,console.log("handleScanQuery status: ",r.status),r.status!==T.C20){e.next=13;break}M("active"),x("deviceUid="+r.deviceUid+"&code="+r.content),e.next=28;break;case 13:if(r.status!==T.FM$){e.next=17;break}M("scanned"),e.next=28;break;case 17:if(r.status!==T.PhI){e.next=21;break}M("expired"),e.next=28;break;case 21:if(r.status!==T.Cml){e.next=28;break}if(void 0!==r.receiver&&""!==r.receiver){e.next=24;break}return e.abrupt("return");case 24:return s={mobile:r.receiver,code:r.content,platform:T.iw8},console.log("login scan info:",s),e.next=28,F(s);case 28:e.next=31;break;case 30:U.yw.error(a.message);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.useEffect)((function(){console.log("scan deviceUid:",g),void 0!==g&&""!==g||f((0,A.Zx)()),I(!1);var e=setInterval((function(){I(!1)}),3e3);return function(){clearInterval(e)}}),[t,g]),(0,q.jsx)(q.Fragment,{children:"scan"===t&&(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(E.Z,{style:{margin:"auto"},value:m,status:y,onRefresh:function(){console.log("onRefresh"),I(!0)}})})})},V=n(95028),G=n(66393),H=n(19421),W=x.Z.defaultAlgorithm,Y=x.Z.darkAlgorithm,$=function(){var e=(0,m.l)((function(e){var t=e.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:t.borderRadius,":hover":{backgroundColor:t.colorBgTextHover}}}));return(0,q.jsx)("div",{className:e,"data-lang":!0,children:v.SelectLang&&(0,q.jsx)(v.SelectLang,{})})},_=function(){var e=(0,A.lk)();return(0,q.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},O=function(){var e=(0,A.z)();return(0,q.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},Q=function(){var e=(0,v.useIntl)(),t=g.A.useForm(),n=l()(t,1)[0],a=x.Z.useToken().token,s=(0,S.Z)().isDarkMode,c=(0,Z.t)((function(e){return e.setAccessToken})),u=(0,b.useState)("mobile"),m=l()(u,2),y=m[0],M=m[1],F=(0,v.useModel)("@@initialState").setInitialState,I=(0,b.useState)(!1),L=l()(I,2),K=L[0],D=L[1],R=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid,setUserInfo:e.setUserInfo}})),z=R.deviceUid,E=R.setDeviceUid,V=R.setUserInfo,W=(0,b.useState)(!1),Y=l()(W,2),Q=Y[0],X=Y[1],J=(0,b.useState)(""),ee=l()(J,2),te=ee[0],ne=ee[1],ae=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(t),n.setFieldValue("captchaCode",a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleKaptchaCheck:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=[{key:"account",label:e.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"账户密码登录"}),children:(0,q.jsx)(P,{loginType:y,onKaptchaChange:ae,onKaptchaCheck:re})},{key:"mobile",label:e.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"手机号登录"}),children:(0,q.jsx)(B,{loginType:y,onKaptchaChange:ae,onKaptchaCheck:re})},{key:"scan",label:e.formatMessage({id:"pages.login.scanLogin.tab",defaultMessage:"扫码登录"}),children:(0,q.jsx)(N,{loginType:y})}];(0,f.uK)(a.colorTextBase,.2);(0,b.useEffect)((function(){void 0!==z&&""!==z||E((0,A.Zx)()),(0,G.ME)(),(0,A.Bc)()&&D(!0),(0,A.pr)()}),[]);var oe,ce=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){F((function(e){return r()(r()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var t=i()(o()().mark((function t(n){var a;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Q){t.next=4;break}return U.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return U.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),t.next=7,(0,d.x4)(r()({},n));case 7:a=t.sent,console.log("LoginResult:",a),200===a.code?(U.yw.destroy(),U.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),c(a.data.accessToken),ce(a.data.user),V(a.data.user),v.history.push("/")):(U.yw.destroy(),U.yw.error(a.message)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),U.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),ue=function(){var t=i()(o()().mark((function t(n){var a,s,i;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Q){t.next=4;break}return U.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return U.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),t.next=7,(0,d.N9)(r()({},n));case 7:a=t.sent,console.log("LoginMobileResult:",a),200===a.code?(U.yw.destroy(),U.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),c(null==a?void 0:a.data.accessToken),ce(null==a||null===(s=a.data)||void 0===s?void 0:s.user),V(null==a||null===(i=a.data)||void 0===i?void 0:i.user),v.history.push("/")):(U.yw.destroy(),U.yw.error(a.message)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),U.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,q.jsxs)(p._Y,{hashed:!1,dark:s,children:[(0,q.jsx)($,{}),(0,q.jsx)("div",{style:{backgroundColor:a.colorBgContainer,textAlign:"center",height:"100%",backgroundImage:"url('/admin/assets/images/bg-wide.png')"},children:(0,q.jsxs)(h.U,{form:n,contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(oe=(0,A.hX)(),(0,q.jsx)("img",{alt:"logo",src:oe})),title:_(),subTitle:O(),actions:K&&!1,onFinish:function(){var e=i()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("login values:",t),"account"!==y){e.next=8;break}return n={username:t.username,password:t.password,captchaUid:te,captchaCode:t.captchaCode,deviceUid:z,platform:T.iw8},console.log("login info:",n),e.next=6,ie(n);case 6:e.next=12;break;case 8:return a={mobile:t.mobile,code:t.code,captchaUid:te,captchaCode:t.captchaCode,deviceUid:z,platform:T.iw8},console.log("login mobile info:",a),e.next=12,ue(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[(0,q.jsx)(w.Z,{activeKey:y,onChange:M,centered:!0,items:se}),(0,q.jsx)("div",{style:{marginTop:14,marginBottom:14},children:(0,q.jsxs)("div",{style:{float:"right",marginBottom:24},children:[(0,q.jsx)(H.Z,{onChange:function(e){console.log("checked = ".concat(e.target.checked)),X(e.target.checked)},children:(0,q.jsx)(k.ZP,{size:"small",type:"link",onClick:function(){window.open("https://www.weiyuai.cn/protocol.html")},children:"同意《用户隐私&协议》"})}),K&&(0,q.jsx)(v.Link,{to:"/auth/register",children:(0,q.jsx)(v.FormattedMessage,{id:"pages.login.registerAccount",defaultMessage:"注册 "})}),(0,q.jsx)(v.Link,{style:{marginLeft:10},to:T.VPj,target:"_blank",children:"帮助中心"})]})})]})})]})},X=function(){var e=(0,S.Z)().isDarkMode;return(0,q.jsx)(V.w,{children:(0,q.jsx)(y.ZP,{theme:{algorithm:e?Y:W},children:(0,q.jsxs)(M.Z,{style:{height:"100%"},children:[(0,q.jsx)(U.ZP,{}),(0,q.jsx)(Q,{})]})})})}}}]);