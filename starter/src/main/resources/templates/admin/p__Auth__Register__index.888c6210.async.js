"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1730],{85768:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(90819),s=a.n(r),n=a(89933),o=a.n(n),i=a(45332),c=a.n(i),u=a(77667),l=a(7206);function d(){return g.apply(this,arguments)}function g(){return(g=o()(s()().mark((function e(){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/kaptcha/api/v1/get",{method:"GET",params:{client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=o()(s()().mark((function e(t,a){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/kaptcha/api/v1/check",{method:"POST",data:{captchaUid:t,captchaCode:a,client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=a(69560),m=a(19140),x=a(44194),v=a(31549),w=function(e){var t=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,l.useIntl)(),n=(0,x.useState)(),i=c()(n,2),u=i[0],g=i[1],f=(0,x.useState)(),w=c()(f,2),M=w[0],y=w[1],j=function(){var e=o()(s()().mark((function e(){var t;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:200===(t=e.sent).code&&(g(t.data.captchaUid),y(t.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=o()(s()().mark((function e(t,r){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,r);case 2:n=e.sent,console.log("checkCaptcha response",n),200===n.code?a&&a(!0):a&&a(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();(0,x.useEffect)((function(){j()}),[]);return(0,v.jsx)(v.Fragment,{children:M&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{onChange:function(e){t&&(t(u,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?k(u,e.target.value):a&&a(!1))},prefix:(0,v.jsx)(h.Z,{}),placeholder:r.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40},allowClear:!0}),(0,v.jsx)("img",{src:M,alt:"captcha",onClick:j})]})})}},29554:function(e,t,a){a.r(t);var r=a(73193),s=a.n(r),n=a(90819),o=a.n(n),i=a(89933),c=a.n(i),u=a(45332),l=a.n(u),d=a(90351),g=a(53665),p=a(97146),f=a(98652),h=a(50784),m=a(5728),x=a(90774),v=a(28311),w=a(43688),M=a(46017),y=a(34757),j=a(7206),k=a(48974),b=a(93982),C=a(38923),Z=a(12265),S=a(40881),q=a(78386),T=a(44194),A=a(74145),F=a(89756),z=a(77667),P=a(46465),I=a(56321),L=a(22509),R=a(74828),U=a(85768),B=a(33934),N=a(31549),V=k.Z.defaultAlgorithm,E=k.Z.darkAlgorithm,K=function(){var e=(0,y.l)((function(e){var t=e.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:t.borderRadius,":hover":{backgroundColor:t.colorBgTextHover}}}));return(0,N.jsx)("div",{className:e,"data-lang":!0,children:j.SelectLang&&(0,N.jsx)(j.SelectLang,{})})},$=function(e){var t=e.content;return(0,N.jsx)(b.Z,{style:{marginBottom:24},message:t,type:"error",showIcon:!0})},_=function(){var e=m.A.useForm(),t=l()(e,1)[0],a=k.Z.useToken().token,r=(0,A.Z)().isDarkMode,n=(0,T.useRef)(),i=(0,T.useState)(!1),u=l()(i,2),y=u[0],b=u[1],S=(0,j.useModel)("@@initialState"),q=(S.initialState,S.loading,S.refresh,S.setInitialState),V=(0,T.useState)(!1),E=l()(V,2),_=E[0],D=E[1],G=(0,P.t)((function(e){return e.setAccessToken})),H=(0,L.L)((function(e){return e.setUserInfo})),W=(0,j.getLocale)();console.log("register page locale:",W);var Y=(0,j.useIntl)(),O=(0,T.useState)(""),J=l()(O,2),Q=J[0],X=J[1],ee=(0,T.useState)(""),te=l()(ee,2),ae=te[0],re=te[1],se=function(){var e=c()(o()().mark((function e(a,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(a),re(r),t.setFieldValue("captchaCode",r);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ne=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,T.useEffect)((function(){(0,B.ME)(),(0,R.Bc)()&&D(!0),(0,R.pr)()}),[]);var oe=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,I.flushSync)((function(){q((function(e){return s()(s()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=c()(o()().mark((function e(t){var a,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("values:",t),F.yw.loading(Y.formatMessage({id:"registering",defaultMessage:"registering..."})),e.next=5,(0,d.z2)(s()({},t));case 5:if(a=e.sent,console.log("registerResult:",a),200!==a.code){e.next=15;break}return F.yw.destroy(),F.yw.success(a.message),r={username:t.email,password:t.password,captchaUid:Q,captchaCode:t.captchaCode,platform:z.iw8},ce(r),e.abrupt("return");case 15:F.yw.destroy(),F.yw.error(a.message);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0),F.yw.error(Y.formatMessage({id:"register.error",defaultMessage:"register failed"}));case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=c()(o()().mark((function e(t){var a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("handleSubmit values: ",t),F.yw.loading(Y.formatMessage({id:"logging",defaultMessage:"logging..."})),e.next=5,(0,d.x4)(s()({},t));case 5:a=e.sent,console.log("LoginResult:",a),200===a.code?(F.yw.destroy(),F.yw.success(Y.formatMessage({id:"login.success",defaultMessage:"login success"})),oe(a.data.user),H(a.data.user),G(a.data.accessToken),j.history.push("/")):(F.yw.destroy(),F.yw.error(a.message)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),F.yw.error(Y.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,N.jsxs)(x._Y,{hashed:!1,dark:r,children:[(0,N.jsx)(K,{}),(0,N.jsx)("div",{style:{backgroundColor:a.colorBgContainer,textAlign:"center",height:"100vh",backgroundImage:"url('/admin/assets/images/bg-wide.png')"},children:_?(0,N.jsxs)(v.U,{form:t,contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,N.jsx)("img",{alt:"logo",src:"/admin/icons/logo.png"}),title:(0,N.jsx)(j.FormattedMessage,{id:"app.title"}),subTitle:Y.formatMessage({id:"pages.login.registerAccount"}),initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:Y.formatMessage({id:"pages.login.register"})}},onFinish:function(){var e=c()(o()().mark((function e(t){var a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("login values:",t),a={email:t.username,password:t.password,mobile:t.mobile,code:t.code,captchaUid:Q,captchaCode:t.captchaCode,platform:z.iw8},console.log("register info:",a),e.next=5,ie(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:["error"===status&&(0,N.jsx)($,{content:Y.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"账户或密码错误"})}),(0,N.jsx)(w.Z,{name:"username",fieldProps:{size:"large",prefix:(0,N.jsx)(p.Z,{})},placeholder:Y.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"邮箱"}),rules:[{required:!0,message:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"请输入邮箱!"})},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"邮箱格式不正确"},{max:50,message:"邮箱不得超过50字符"}]}),(0,N.jsx)(w.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,N.jsx)(f.Z,{})},placeholder:Y.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"密码"}),rules:[{required:!0,message:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"请输入密码！"})}]}),(0,N.jsx)(w.Z,{fieldProps:{size:"large",prefix:(0,N.jsx)(h.Z,{})},name:"mobile",placeholder:Y.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,N.jsx)(m.A.Item,{name:"captchaCode",rules:[{required:!0,message:Y.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,N.jsx)(U.Z,{onKaptchaChange:se,onKaptchaCheck:ne})}),(0,N.jsx)(M.Z,{fieldProps:{size:"large",prefix:(0,N.jsx)(f.Z,{})},captchaProps:{size:"large",disabled:!y},placeholder:Y.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,t){return e?"".concat(t," ").concat(Y.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):Y.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:n,onGetCaptcha:function(){var e=c()(o()().mark((function e(t){var a,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||11!==t.length){e.next=13;break}return a={mobile:t,type:z.zgb,captchaUid:Q,captchaCode:ae,platform:z.iw8},e.next=4,(0,d.Y7)(a);case 4:if(r=e.sent,console.log("sendMobileCodeResult:",r),200===r.code){e.next=10;break}return F.yw.error(r.message),setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=n.current)||void 0===e||e.endTiming()}),2),e.abrupt("return");case 10:F.yw.success(r.message),e.next=14;break;case 13:F.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),"error"===status&&(0,N.jsx)($,{content:"验证码错误"}),(0,N.jsx)("div",{style:{marginBottom:64},children:(0,N.jsx)("div",{style:{float:"right"},children:(0,N.jsx)(j.Link,{to:"/auth/login",children:(0,N.jsx)(j.FormattedMessage,{id:"pages.login.submit",defaultMessage:"登录 "})})})})]}):(0,N.jsx)("div",{style:{textAlign:"center",margin:"0 auto"},children:(0,N.jsx)(C.Z,{description:"only for vip users, please contact: 270580156@qq.com",children:(0,N.jsx)(Z.ZP,{type:"primary",onClick:function(){window.open("https://www.weiyuai.cn")},children:"open weiyuai.cn"})})})}),(0,N.jsx)(g.$_,{})]})};t.default=function(){var e=(0,A.Z)().isDarkMode;return(0,N.jsx)(S.ZP,{theme:{algorithm:e?E:V},children:(0,N.jsxs)(q.Z,{children:[(0,N.jsx)(F.ZP,{}),(0,N.jsx)(_,{})]})})}}}]);