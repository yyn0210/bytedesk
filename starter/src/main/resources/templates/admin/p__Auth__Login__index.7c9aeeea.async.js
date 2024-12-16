"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9368],{94546:function(e,t){t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"}},1641:function(e,t,n){var r=n(11757),a=n(44194),s=n(94546),o=n(63837),i=function(e,t){return a.createElement(o.Z,(0,r.Z)({},e,{ref:t,icon:s.Z}))},c=a.forwardRef(i);t.Z=c},2724:function(e,t,n){var r=n(17082),a=n(51190),s=n(19753),o=n(19421),i=n(44194),c=n(79379),l=n(93288),u=n(31549),d=["options","fieldProps","proFieldProps","valueEnum"],g=i.forwardRef((function(e,t){var n=e.options,o=e.fieldProps,i=e.proFieldProps,c=e.valueEnum,g=(0,a.Z)(e,d);return(0,u.jsx)(l.Z,(0,r.Z)({ref:t,valueType:"checkbox",valueEnum:(0,s.h)(c,void 0),fieldProps:(0,r.Z)({options:n},o),lightProps:(0,r.Z)({labelFormatter:function(){return(0,u.jsx)(l.Z,(0,r.Z)({ref:t,valueType:"checkbox",mode:"read",valueEnum:(0,s.h)(c,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:n},o),proFieldProps:i},g))}},g.lightProps),proFieldProps:i},g))})),f=i.forwardRef((function(e,t){var n=e.fieldProps,a=e.children;return(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({ref:t},n),{},{children:a}))})),p=(0,c.G)(f,{valuePropName:"checked"});p.Group=g,t.Z=p},85768:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(90819),a=n.n(r),s=n(89933),o=n.n(s),i=n(45332),c=n.n(i),l=n(77667),u=n(7206);function d(){return g.apply(this,arguments)}function g(){return(g=o()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/get",{method:"GET",params:{client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return p.apply(this,arguments)}function p(){return(p=o()(a()().mark((function e(t,n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/check",{method:"POST",data:{captchaUid:t,captchaCode:n,client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(69560),m=n(19140),v=n(44194),x=n(31549),w=function(e){var t=e.onKaptchaChange,n=e.onKaptchaCheck,r=(0,u.useIntl)(),s=(0,v.useState)(),i=c()(s,2),l=i[0],g=i[1],p=(0,v.useState)(),w=c()(p,2),k=w[0],y=w[1],b=function(){var e=o()(a()().mark((function e(){var t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:200===(t=e.sent).code&&(g(t.data.captchaUid),y(t.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=o()(a()().mark((function e(t,r){var s;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,r);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?n&&n(!0):n&&n(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){b()}),[]);return(0,x.jsx)(x.Fragment,{children:k&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{onChange:function(e){t&&(t(l,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?M(l,e.target.value):n&&n(!1))},prefix:(0,x.jsx)(h.Z,{}),placeholder:r.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40},allowClear:!0}),(0,x.jsx)("img",{src:k,alt:"captcha",onClick:b})]})})}},57374:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(73193),a=n.n(r),s=n(90819),o=n.n(s),i=n(89933),c=n.n(i),l=n(45332),u=n.n(l),d=n(90351),g=n(5728),f=n(75625),p=n(90774),h=n(28311),m=n(34757),v=n(7206),x=n(48974),w=n(50571),k=n(12265),y=n(40881),b=n(78386),M=n(44194),j=n(56321),C=n(22509),Z=n(89756),S=n(46465),U=n(74145),F=n(77667),I=n(85768),P=n(97146),T=n(98652),L=n(43688),D=n(31549),E=function(e){var t=e.loginType,n=e.onKaptchaChange,r=e.onKaptchaCheck,a=(0,v.useIntl)(),s=function(){var e=c()(o()().mark((function e(t,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n(t,r);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&r(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsx)(D.Fragment,{children:"account"===t&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L.Z,{name:"username",fieldProps:{size:"large",prefix:(0,D.jsx)(P.Z,{})},placeholder:a.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"用户名/邮箱"}),rules:[{required:!0,message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"请输入用户名/邮箱!"})}]}),(0,D.jsx)(L.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,D.jsx)(T.Z,{})},placeholder:a.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"密码"}),rules:[{required:!0,message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"请输入密码！"})}]}),(0,D.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:a.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,D.jsx)(I.Z,{onKaptchaChange:s,onKaptchaCheck:i})})]})})},K=n(74828),q=n(50784),A=n(46017),R=n(93982),V=function(e){var t=e.loginType,n=e.onKaptchaChange,r=e.onKaptchaCheck,a=(0,v.useIntl)(),s=(0,M.useRef)(),i=(0,M.useState)(""),l=u()(i,2),f=l[0],p=l[1],h=(0,M.useState)(""),m=u()(h,2),x=m[0],w=m[1],k=(0,M.useState)(!1),y=u()(k,2),b=y[0],j=y[1],S=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),U=S.deviceUid,P=S.setDeviceUid,E=function(){var e=c()(o()().mark((function e(t,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(t),w(r),n&&n(t,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t),r&&r(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,M.useEffect)((function(){void 0!==U&&""!==U||P((0,K.Zx)())}),[]),(0,D.jsx)(D.Fragment,{children:"mobile"===t&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L.Z,{fieldProps:{size:"large",prefix:(0,D.jsx)(q.Z,{})},name:"mobile",placeholder:a.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,D.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:a.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,D.jsx)(I.Z,{onKaptchaChange:E,onKaptchaCheck:V})}),(0,D.jsx)(A.Z,{fieldProps:{size:"large",prefix:(0,D.jsx)(T.Z,{})},captchaProps:{size:"large",disabled:!b},placeholder:a.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,t){return e?"".concat(t," ").concat(a.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):a.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=c()(o()().mark((function e(t){var n,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",t),!t||11!==t.length){e.next=13;break}return n={mobile:t,type:F.UUF,captchaUid:f,captchaCode:x,deviceUid:U,platform:F.iw8},e.next=5,(0,d.Y7)(n);case 5:if(200===(r=e.sent).code){e.next=10;break}return Z.yw.error(a.formatMessage({id:r.message,defaultMessage:r.message})),setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=s.current)||void 0===e||e.endTiming()}),2),e.abrupt("return");case 10:Z.yw.success(a.formatMessage({id:r.message,defaultMessage:r.message})),e.next=14;break;case 13:Z.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,D.jsx)(R.Z,{message:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.auto.register",defaultMessage:"Mobile will auto register"}),type:"info"})]})})},z=n(88183),N=function(e){var t=e.loginType,n=(0,v.useIntl)(),r=(0,S.t)((function(e){return e.setAccessToken})),s=(0,C.L)((function(e){return e.setUserInfo})),i=(0,v.useModel)("@@initialState").setInitialState,l=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),g=l.deviceUid,f=l.setDeviceUid,p=(0,M.useState)("login"),h=u()(p,2),m=h[0],x=h[1],w=(0,M.useState)("loading"),k=u()(w,2),y=k[0],b=k[1],U=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){i((function(e){return a()(a()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=c()(o()().mark((function e(t){var i,c,l;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleScanLogin values: ",t),Z.yw.loading(n.formatMessage({id:"logging",defaultMessage:"logging..."})),e.next=4,(0,d.kZ)(a()({},t));case 4:i=e.sent,console.log("LoginMobileResult scanLogin:",i.data),200===i.code?(Z.yw.destroy(),Z.yw.success(n.formatMessage({id:"login.success",defaultMessage:"login success"})),r(null==i?void 0:i.data.accessToken),U(null==i||null===(c=i.data)||void 0===c?void 0:c.user),s(null==i||null===(l=i.data)||void 0===l?void 0:l.user),v.history.push("/")):(Z.yw.destroy(),Z.yw.error(i.message));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=c()(o()().mark((function e(n){var r,a,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("scan"==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.Tm)(g,n);case 4:if(200!==(r=e.sent).code){e.next=30;break}if(a=r.data,console.log("handleScanQuery status: ",a.status),a.status!==F.C20){e.next=13;break}b("active"),x("deviceUid="+a.deviceUid+"&code="+a.content),e.next=28;break;case 13:if(a.status!==F.FM$){e.next=17;break}b("scanned"),e.next=28;break;case 17:if(a.status!==F.PhI){e.next=21;break}b("expired"),e.next=28;break;case 21:if(a.status!==F.Cml){e.next=28;break}if(void 0!==a.receiver&&""!==a.receiver){e.next=24;break}return e.abrupt("return");case 24:return s={mobile:a.receiver,code:a.content,platform:F.iw8},console.log("login scan info:",s),e.next=28,I(s);case 28:e.next=31;break;case 30:Z.yw.error(r.message);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,M.useEffect)((function(){console.log("scan deviceUid:",g),void 0!==g&&""!==g||f((0,K.Zx)()),P(!1);var e=setInterval((function(){P(!1)}),3e3);return function(){clearInterval(e)}}),[t,g]),(0,D.jsx)(D.Fragment,{children:"scan"===t&&(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(z.Z,{style:{margin:"auto"},value:m,status:y,onRefresh:function(){console.log("onRefresh"),P(!0)}})})})},B=n(95772),Q=n(33934),G=n(19421),H=n(17082),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Y=n(64423),$=function(e,t){return M.createElement(Y.Z,(0,H.Z)((0,H.Z)({},e),{},{ref:t,icon:W}))};var O=M.forwardRef($),X=n(2724),_=function(){var e=x.Z.useToken().token,t=(0,M.useContext)(B.I),n=t.isCustomServer,r=t.setIsCustomServer,a=g.A.useForm(),s=u()(a,1)[0],o=(0,M.useState)(!1),i=u()(o,2),c=i[0],l=i[1],d=(0,M.useState)(""),f=u()(d,2),p=f[0],h=f[1],m=(0,M.useState)(""),v=u()(m,2),w=(v[0],v[1]);(0,M.useEffect)((function(){p&&p.length>0&&(s.setFieldsValue({apiUrl:p}),console.log("apiUrl:",p))}),[p]),(0,M.useEffect)((function(){if(n){var e=localStorage.getItem(F.Ss2);"true"===e&&(l(!0),s.setFieldsValue({isCustomServerEnabled:!0})),console.log("isCustomServer customEnabled:",e);var t=localStorage.getItem(F.DuM);t&&s.setFieldsValue({apiUrl:(0,K.Qj)(t)});var r=localStorage.getItem(F.sZT);r&&s.setFieldsValue({websocketUrl:(0,K.Qj)(r)})}}),[n]);return(0,D.jsx)("div",{className:"ant-pro-form-server-container",style:{backgroundColor:e.colorBgContainer,display:"flex",justifyContent:"center",flexDirection:"column",height:"100%",width:"80%",marginLeft:"10%"},children:(0,D.jsxs)(g.A,{className:"ant-pro-form-server-main",form:s,submitter:{render:function(e,t){return console.log("props:",e,t),(0,D.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"8px"},children:[(0,D.jsx)(k.ZP,{icon:(0,D.jsx)(O,{}),onClick:function(){console.log("switch server"),r((function(e){return!e}))},children:"返回"},"back"),(0,D.jsx)(k.ZP,{type:"primary",onClick:function(){var t=e.form.getFieldValue("apiUrl");t=(0,K.Qj)(t.trim());var n=e.form.getFieldValue("websocketUrl");n=(0,K.Qj)(n.trim()),t&&t.trim().length>0&&n&&n.trim().length>0?(localStorage.setItem(F.DuM,t),localStorage.setItem(F.sZT,n),localStorage.setItem(F.Ss2,"true"),Z.yw.success("保存成功")):Z.yw.error("请输入正确的服务器地址")},children:"保存"},"submit"),(0,D.jsx)(k.ZP,{onClick:function(){var t;null===(t=e.form)||void 0===t||t.resetFields(),h(""),localStorage.setItem(F.Ss2,"false"),localStorage.setItem(F.DuM,""),localStorage.setItem(F.sZT,""),Z.yw.success("重置成功，已恢复默认云服务器")},children:"重置"},"reset"),(0,D.jsx)(k.ZP,{onClick:function(){window.open("https://www.weiyuai.cn/docs/zh-CN/docs/manual/agent/auth/login")},children:"帮助"},"help")]})}},children:[(0,D.jsx)(X.Z,{name:"isCustomServerEnabled",fieldProps:{onChange:function(e){console.log("e:",e),function(e){if(console.log("handleCustomServerChange e:",e),l(e.target.checked),e.target.checked){var t=localStorage.getItem(F.DuM);t&&s.setFieldsValue({apiUrl:(0,K.Qj)(t)});var n=localStorage.getItem(F.sZT);n&&s.setFieldsValue({websocketUrl:(0,K.Qj)(n)}),console.log("initData apiUrl:",t,"websocketUrl:",n)}else localStorage.setItem(F.Ss2,"false")}(e)}},children:"是否启用自定义服务器"}),c&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(L.Z,{name:"apiUrl",label:"API 服务器地址",fieldProps:{disabled:!c,placeholder:"http://127.0.0.1:9003",onChange:function(e){return h(e.target.value)}}}),(0,D.jsx)(L.Z,{name:"websocketUrl",label:"WebSocket 服务器地址",fieldProps:{disabled:!c,placeholder:"ws://127.0.0.1:9885/websocket",onChange:function(e){return w(e.target.value)}}})]})]})})},J=x.Z.defaultAlgorithm,ee=x.Z.darkAlgorithm,te=function(){var e=(0,m.l)((function(e){var t=e.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:t.borderRadius,":hover":{backgroundColor:t.colorBgTextHover}}}));return(0,D.jsx)("div",{className:e,"data-lang":!0,children:v.SelectLang&&(0,D.jsx)(v.SelectLang,{})})},ne=function(){var e=(0,K.lk)();return(0,D.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},re=function(){var e=(0,K.z)();return(0,D.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},ae=function(){var e=(0,v.useIntl)(),t=g.A.useForm(),n=u()(t,1)[0],r=x.Z.useToken().token,s=(0,U.Z)().isDarkMode,i=(0,S.t)((function(e){return e.setAccessToken})),l=(0,M.useContext)(B.I),m=l.isCustomServer,y=l.setIsCustomServer,b=(0,M.useState)("mobile"),I=u()(b,2),P=I[0],T=I[1],L=(0,v.useModel)("@@initialState").setInitialState,q=(0,M.useState)(!1),A=u()(q,2),R=A[0],z=A[1],H=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid,setUserInfo:e.setUserInfo}})),W=H.deviceUid,Y=H.setDeviceUid,$=H.setUserInfo,O=(0,M.useState)(!1),X=u()(O,2),J=X[0],ee=X[1],ae=(0,M.useState)(""),se=u()(ae,2),oe=se[0],ie=se[1],ce=function(){var e=c()(o()().mark((function e(t,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(t),n.setFieldValue("captchaCode",r);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleKaptchaCheck:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=[{key:"account",label:e.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"账户密码登录"}),children:(0,D.jsx)(E,{loginType:P,onKaptchaChange:ce,onKaptchaCheck:le})},{key:"mobile",label:e.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"手机号登录"}),children:(0,D.jsx)(V,{loginType:P,onKaptchaChange:ce,onKaptchaCheck:le})},{key:"scan",label:e.formatMessage({id:"pages.login.scanLogin.tab",defaultMessage:"扫码登录"}),children:(0,D.jsx)(N,{loginType:P})}];(0,f.uK)(r.colorTextBase,.2);(0,M.useEffect)((function(){void 0!==W&&""!==W||Y((0,K.Zx)()),(0,Q.ME)(),(0,K.Bc)()&&z(!0),(0,K.pr)()}),[]);var de,ge=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){L((function(e){return a()(a()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var t=c()(o()().mark((function t(n){var r;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,J){t.next=4;break}return Z.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return Z.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),t.next=7,(0,d.x4)(a()({},n));case 7:r=t.sent,console.log("LoginResult:",r),200===r.code?(Z.yw.destroy(),Z.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),i(r.data.accessToken),ge(r.data.user),$(r.data.user),v.history.push("/")):(Z.yw.destroy(),Z.yw.error(e.formatMessage({id:r.message,defaultMessage:r.message}))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),Z.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),pe=function(){var t=c()(o()().mark((function t(n){var r,s,c;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,J){t.next=4;break}return Z.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return Z.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),t.next=7,(0,d.N9)(a()({},n));case 7:r=t.sent,console.log("LoginMobileResult:",r),200===r.code?(Z.yw.destroy(),Z.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),i(null==r?void 0:r.data.accessToken),ge(null==r||null===(s=r.data)||void 0===s?void 0:s.user),$(null==r||null===(c=r.data)||void 0===c?void 0:c.user),v.history.push("/")):(Z.yw.destroy(),Z.yw.error(e.formatMessage({id:r.message,defaultMessage:r.message}))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),Z.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,D.jsxs)(p._Y,{hashed:!1,dark:s,children:[(0,D.jsx)(te,{}),(0,D.jsxs)("div",{style:{backgroundColor:r.colorBgContainer,textAlign:"center",height:"100%",backgroundImage:"url('/admin/assets/images/bg-wide.png')"},children:[!m&&(0,D.jsxs)(h.U,{form:n,contentStyle:{minWidth:450,maxWidth:"75vw"},logo:(de=(0,K.hX)(),(0,D.jsx)("img",{alt:"logo",src:de})),title:ne(),subTitle:re(),actions:R&&!1,onFinish:function(){var e=c()(o()().mark((function e(t){var n,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("login values:",t),"account"!==P){e.next=8;break}return n={username:t.username,password:t.password,captchaUid:oe,captchaCode:t.captchaCode,deviceUid:W,platform:F.iw8},console.log("login info:",n),e.next=6,fe(n);case 6:e.next=12;break;case 8:return r={mobile:t.mobile,code:t.code,captchaUid:oe,captchaCode:t.captchaCode,deviceUid:W,platform:F.iw8},console.log("login mobile info:",r),e.next=12,pe(r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[(0,D.jsx)(w.Z,{activeKey:P,onChange:T,centered:!0,items:ue}),(0,D.jsx)("div",{style:{marginTop:14,marginBottom:14},children:(0,D.jsxs)("div",{style:{float:"right",marginBottom:24},children:[(0,D.jsx)(G.Z,{onChange:function(e){console.log("checked = ".concat(e.target.checked)),ee(e.target.checked)},children:(0,D.jsx)(k.ZP,{size:"small",type:"link",onClick:function(){window.open("https://www.weiyuai.cn/protocol.html")},children:"同意《用户隐私&协议》"})}),R&&(0,D.jsx)(v.Link,{to:"/auth/register",children:(0,D.jsx)(v.FormattedMessage,{id:"pages.login.registerAccount",defaultMessage:"注册 "})}),(0,D.jsx)(k.ZP,{type:"link",style:{float:"right"},onClick:function(){console.log("switch server"),y((function(e){return!e}))},children:"切换服务器"})]})})]}),m&&(0,D.jsx)(_,{})]})]})},se=function(){var e=(0,U.Z)().isDarkMode;return(0,D.jsx)(B.w,{children:(0,D.jsx)(y.ZP,{theme:{algorithm:e?ee:J},children:(0,D.jsxs)(b.Z,{style:{height:"100%"},children:[(0,D.jsx)(Z.ZP,{}),(0,D.jsx)(ae,{})]})})})}}}]);