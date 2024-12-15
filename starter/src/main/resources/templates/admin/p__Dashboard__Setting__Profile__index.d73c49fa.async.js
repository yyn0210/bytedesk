"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9290],{98652:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(17082),a=r(44194),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},o=r(64423),i=function(e,n){return a.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:s}))};var c=a.forwardRef(i)},50784:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(17082),a=r(44194),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},o=r(64423),i=function(e,n){return a.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:s}))};var c=a.forwardRef(i)},69957:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(17082),a=r(44194),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},o=r(64423),i=function(e,n){return a.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:s}))};var c=a.forwardRef(i)},46017:function(e,n,r){var t=r(17082),a=r(72298),s=r(48921),o=r(51190),i=r(42601),c=r(47807),l=r(19140),u=r(12265),f=r(44194),d=r(79379),p=r(31549),m=["rules","name","phoneName","fieldProps","onTiming","captchaTextRender","captchaProps"],g=f.forwardRef((function(e,n){var r=c.Z.useFormInstance(),d=(0,f.useState)(e.countDown||60),g=(0,i.Z)(d,2),h=g[0],v=g[1],x=(0,f.useState)(!1),w=(0,i.Z)(x,2),b=w[0],Z=w[1],y=(0,f.useState)(),M=(0,i.Z)(y,2),k=M[0],j=M[1],P=(e.rules,e.name,e.phoneName),C=e.fieldProps,I=e.onTiming,S=e.captchaTextRender,F=void 0===S?function(e,n){return e?"".concat(n," 秒后重新获取"):"获取验证码"}:S,U=e.captchaProps,V=(0,o.Z)(e,m),E=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,V.onGetCaptcha(n);case 4:j(!1),Z(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),Z(!1),j(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,f.useImperativeHandle)(n,(function(){return{startTiming:function(){return Z(!0)},endTiming:function(){return Z(!1)}}})),(0,f.useEffect)((function(){var n=0,r=e.countDown;return b&&(n=window.setInterval((function(){v((function(e){return e<=1?(Z(!1),clearInterval(n),r||60):e-1}))}),1e3)),function(){return clearInterval(n)}}),[b]),(0,f.useEffect)((function(){I&&I(h)}),[h,I]),(0,p.jsxs)("div",{style:(0,t.Z)((0,t.Z)({},null==C?void 0:C.style),{},{display:"flex",alignItems:"center"}),ref:n,children:[(0,p.jsx)(l.Z,(0,t.Z)((0,t.Z)({},C),{},{style:(0,t.Z)({flex:1,transition:"width .3s",marginRight:8},null==C?void 0:C.style)})),(0,p.jsx)(u.ZP,(0,t.Z)((0,t.Z)({style:{display:"block"},disabled:b,loading:k},U),{},{onClick:(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!P){e.next=9;break}return e.next=4,r.validateFields([P].flat(1));case 4:return n=r.getFieldValue([P].flat(1)),e.next=7,E(n);case 7:e.next=11;break;case 9:return e.next=11,E("");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:F(b,h)}))]})})),h=(0,d.G)(g);n.Z=h},11607:function(e,n,r){var t=r(17082),a=r(51190),s=r(44194),o=r(93288),i=r(31549),c=["fieldProps","proFieldProps"],l=function(e,n){var r=e.fieldProps,s=e.proFieldProps,l=(0,a.Z)(e,c);return(0,i.jsx)(o.Z,(0,t.Z)({ref:n,valueType:"textarea",fieldProps:r,proFieldProps:s},l))};n.Z=s.forwardRef(l)},85768:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(90819),a=r.n(t),s=r(89933),o=r.n(s),i=r(45332),c=r.n(i),l=r(77667),u=r(7206);function f(){return d.apply(this,arguments)}function d(){return(d=o()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/get",{method:"GET",params:{client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,n){return m.apply(this,arguments)}function m(){return(m=o()(a()().mark((function e(n,r){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/check",{method:"POST",data:{captchaUid:n,captchaCode:r,client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=r(69560),h=r(19140),v=r(44194),x=r(31549),w=function(e){var n=e.onKaptchaChange,r=e.onKaptchaCheck,t=(0,u.useIntl)(),s=(0,v.useState)(),i=c()(s,2),l=i[0],d=i[1],m=(0,v.useState)(),w=c()(m,2),b=w[0],Z=w[1],y=function(){var e=o()(a()().mark((function e(){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:200===(n=e.sent).code&&(d(n.data.captchaUid),Z(n.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=o()(a()().mark((function e(n,t){var s;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n,t);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?r&&r(!0):r&&r(!1);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){y()}),[]);return(0,x.jsx)(x.Fragment,{children:b&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{onChange:function(e){n&&(n(l,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?M(l,e.target.value):r&&r(!1))},prefix:(0,x.jsx)(g.Z,{}),placeholder:t.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40},allowClear:!0}),(0,x.jsx)("img",{src:b,alt:"captcha",onClick:y})]})})}},92349:function(e,n,r){r.d(n,{G:function(){return d}});var t=r(73193),a=r.n(t),s=(r(44194),r(17433)),o=r(77667),i=r(28977),c=r.n(i),l=r(89756),u=r(33934),f=r(31549),d=function(e){var n=e.children,r=e.onSuccess,t=e.onError,i={file:null,file_name:"test.png",file_type:"image/png",is_avatar:"true",kb_type:o.IrL,category_uid:"",kb_uid:"",client:o.bVn},d={name:"file",accept:"image/*",action:(0,u.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(o.LA8)},data:i,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload",e);var n=c()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;i.file=e,i.file_name=n,i.file_type=e.type,console.log("beforeUpload",i)},onChange:function(e){if("uploading"!==e.file.status&&console.log("not uploading:",e.file),"done"===e.file.status)if(console.log("response: ",e.file.response),200===e.file.response.code){var n=e.file.response.data;r(n),l.yw.success("".concat(e.file.name," 上传成功"))}else t(e.file),l.yw.error("".concat(e.file.name," 上传失败"));else"error"===e.file.status&&(l.yw.error("".concat(e.file.name," 上传失败")),t(e.file))}};return(0,f.jsx)(s.Z,a()(a()({},d),{},{children:n}))}},1780:function(e,n,r){var t=r(77667),a=r(74828),s=r(7206);n.Z=function(){var e=(0,s.useIntl)();return{translateString:function(n){return n&&n.startsWith(t.VoP)?e.formatMessage({id:n,defaultMessage:n}):n},translateStringTranct:function(n){return null!=n&&n.startsWith(t.VoP)||null!=n&&n.startsWith("ROLE_")?(0,a.aS)(e.formatMessage({id:n,defaultMessage:n}),10):(0,a.aS)(n,10)}}}},27291:function(e,n,r){r.r(n),r.d(n,{default:function(){return R}});var t=r(90819),a=r.n(t),s=r(73193),o=r.n(s),i=r(89933),c=r.n(i),l=r(45332),u=r.n(l),f=r(44194),d=r(21276),p=r(12265),m=r(5728),g=r(43688),h=r(11607),v=r(7206),x=r(69957),w=r(22509),b=r(29270),Z=r(89756),y=r(92349),M=r(1780),k=r(74828),j=r(83730),P=r(31549),C=function(e){var n=e.open,r=e.onClose,t=(0,v.useIntl)(),s=(0,M.Z)().translateString;return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(j.Z,{title:t.formatMessage({id:"pages.settings.reset.password",defaultMessage:"重置密码"}),forceRender:!0,open:n,footer:null,onCancel:function(){r()},children:(0,P.jsxs)(m.A,{initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},onFinish:function(){var e=c()(a()().mark((function e(n){var t,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("changePassword:",n),!(n.newPassword.trim().length<6)){e.next=4;break}return Z.yw.error("密码最小长度不能小于6"),e.abrupt("return");case 4:if(n.newPassword===n.confirmPassword){e.next=7;break}return Z.yw.error("两次输入密码不一致"),e.abrupt("return");case 7:return t={oldPassword:n.oldPassword,newPassword:n.newPassword},e.next=10,(0,b.Cp)(t);case 10:o=e.sent,console.log("changePassword response:",o),200===o.code?(Z.yw.success("Password changed successfully!"),r()):Z.yw.error(s(o.message));case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,P.jsx)(g.Z.Password,{name:"oldPassword",label:"原密码(手机号直接登录用户，可以留空)"}),(0,P.jsx)(g.Z.Password,{name:"newPassword",label:"新密码"}),(0,P.jsx)(g.Z.Password,{name:"confirmPassword",label:"确认密码"})]})})})},I=r(90351),S=r(85768),F=r(40431),U=r(77667),V=r(50784),E=r(98652),A=r(46017),z=function(e){var n=e.open,r=e.onSubmit,t=e.onClose,s=(0,v.useIntl)(),o=m.A.useForm(),i=u()(o,1)[0],l=(0,M.Z)().translateString,d=(0,w.L)((function(e){return{userInfo:e.userInfo,deviceUid:e.deviceUid}})),p=d.userInfo,h=d.deviceUid,x=(0,F.u)((function(e){return e.currentOrg})),y=(0,f.useRef)(),k=(0,f.useState)(""),C=u()(k,2),z=C[0],T=C[1],O=(0,f.useState)(""),R=u()(O,2),q=R[0],N=R[1],_=(0,f.useState)(!1),L=u()(_,2),H=L[0],G=L[1],$=function(){var e=c()(a()().mark((function e(n,r){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captchaUid",n," captchaValue",r),T(n),N(r);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),D=function(){var e=c()(a()().mark((function e(n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captcha check result",n),G(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=c()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.validateFields().then(function(){var e=c()(a()().mark((function e(n){var s,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("changeEmail:",n),(null==p?void 0:p.email)!==n.email){e.next=4;break}return Z.yw.error("Email is not changed!"),e.abrupt("return");case 4:return s={email:n.email,code:n.code,platform:U.iw8},e.next=7,(0,b.Uk)(s);case 7:o=e.sent,console.log("changeEmail response:",o),200===o.code?(Z.yw.success("Email changed successfully!"),r(n.email),t()):Z.yw.error(l(o.message));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=y.current)||void 0===e||e.endTiming()}),2)};return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(j.Z,{title:s.formatMessage({id:"pages.settings.reset.email",defaultMessage:"重置邮箱"}),forceRender:!0,open:n,footer:null,onCancel:function(){t()},children:(0,P.jsxs)(m.A,{form:i,onFinish:function(){var e=c()(a()().mark((function e(n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("changeEmail:",n),K();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,P.jsx)(g.Z,{fieldProps:{size:"large",prefix:(0,P.jsx)(V.Z,{})},name:"email",placeholder:s.formatMessage({id:"pages.login.email.placeholder",defaultMessage:"邮箱"}),rules:[{required:!0,message:(0,P.jsx)(v.FormattedMessage,{id:"pages.login.email.required",defaultMessage:"请输入邮箱！"})},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"邮箱格式不正确"},{max:50,message:"邮箱不得超过50字符"}]}),(0,P.jsx)(m.A.Item,{name:"captchaCode",rules:[],children:(0,P.jsx)(S.Z,{onKaptchaChange:$,onKaptchaCheck:D})}),(0,P.jsx)(A.Z,{fieldProps:{size:"large",prefix:(0,P.jsx)(E.Z,{})},captchaProps:{size:"large",disabled:!H},placeholder:s.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,n){return e?"".concat(n," ").concat(s.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):s.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"email",name:"code",rules:[{required:!0,message:(0,P.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:y,onGetCaptcha:function(){var e=c()(a()().mark((function e(n){var r,t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("email:",n),!n){e.next=18;break}if((null==p?void 0:p.email)!==n){e.next=6;break}return Z.yw.error("Email is not changed!"),B(),e.abrupt("return");case 6:return r={email:n,type:U.Iju,captchaUid:z,captchaCode:q,deviceUid:h,userUid:null==p?void 0:p.uid,orgUid:x.uid,platform:U.iw8},e.next=9,(0,I.O8)(r);case 9:if(t=e.sent,console.log("sendEmailCode",t),200===t.code){e.next=15;break}return Z.yw.error(t.message),B(),e.abrupt("return");case 15:Z.yw.success(t.message),e.next=19;break;case 18:Z.yw.error("手机号格式错误");case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})})})},T=function(e){var n=e.open,r=e.onSubmit,t=e.onClose,s=(0,v.useIntl)(),o=m.A.useForm(),i=u()(o,1)[0],l=(0,M.Z)().translateString,d=(0,w.L)((function(e){return{userInfo:e.userInfo,deviceUid:e.deviceUid}})),p=d.userInfo,h=d.deviceUid,x=(0,F.u)((function(e){return e.currentOrg})),y=(0,f.useRef)(),k=(0,f.useState)(""),C=u()(k,2),z=C[0],T=C[1],O=(0,f.useState)(""),R=u()(O,2),q=R[0],N=R[1],_=(0,f.useState)(!1),L=u()(_,2),H=L[0],G=L[1],$=function(){var e=c()(a()().mark((function e(n,r){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captchaUid",n," captchaValue",r),T(n),N(r);case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),D=function(){var e=c()(a()().mark((function e(n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captcha check result",n),G(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=c()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.validateFields().then(function(){var e=c()(a()().mark((function e(n){var s,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("changeMobile:",n),(null==p?void 0:p.mobile)!==n.mobile){e.next=4;break}return Z.yw.error("mobile is not changed"),e.abrupt("return");case 4:return s={mobile:n.mobile,code:n.code,platform:U.iw8},e.next=7,(0,b.KF)(s);case 7:o=e.sent,console.log("changeMobile response:",o),200===o.code?(Z.yw.success("Mobile changed successfully!"),r(n.mobile),t()):Z.yw.error(l(o.message));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=y.current)||void 0===e||e.endTiming()}),2)};return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(j.Z,{title:s.formatMessage({id:"pages.settings.reset.mobile",defaultMessage:"重置手机号"}),forceRender:!0,open:n,footer:null,onCancel:function(){t()},children:(0,P.jsxs)(m.A,{form:i,onFinish:function(){var e=c()(a()().mark((function e(n){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("changeMobile:",n),K();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,P.jsx)(g.Z,{fieldProps:{size:"large",prefix:(0,P.jsx)(V.Z,{})},name:"mobile",placeholder:s.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,P.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,P.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,P.jsx)(m.A.Item,{name:"captchaCode",rules:[],children:(0,P.jsx)(S.Z,{onKaptchaChange:$,onKaptchaCheck:D})}),(0,P.jsx)(A.Z,{fieldProps:{size:"large",prefix:(0,P.jsx)(E.Z,{})},captchaProps:{size:"large",disabled:!H},placeholder:s.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,n){return e?"".concat(n," ").concat(s.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):s.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,P.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:y,onGetCaptcha:function(){var e=c()(a()().mark((function e(n){var r,t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",n),!n||11!==n.length){e.next=18;break}if((null==p?void 0:p.mobile)!==n){e.next=6;break}return Z.yw.error("mobile is not changed"),B(),e.abrupt("return");case 6:return r={mobile:n,type:U.BG8,captchaUid:z,captchaCode:q,deviceUid:h,userUid:null==p?void 0:p.uid,orgUid:x.uid,platform:U.iw8},e.next=9,(0,I.Y7)(r);case 9:if(t=e.sent,console.log("sendMobileCode",t),200===t.code){e.next=15;break}return Z.yw.error(t.message),B(),e.abrupt("return");case 15:Z.yw.success(t.message),e.next=19;break;case 18:Z.yw.error("手机号格式错误");case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})})})},O={labelCol:{span:8},wrapperCol:{span:8}},R=function(){var e=(0,v.useIntl)(),n=m.A.useForm(),r=u()(n,1)[0],t=(0,M.Z)().translateString,s=(0,w.L)((function(e){return{userInfo:e.userInfo,setUserInfo:e.setUserInfo}})),i=s.userInfo,l=s.setUserInfo,j=(0,f.useState)(""),I=u()(j,2),S=I[0],F=I[1],U=(0,f.useState)(!1),V=u()(U,2),E=V[0],A=V[1],R=(0,f.useState)(!1),q=u()(R,2),N=q[0],_=q[1],L=(0,f.useState)(!1),H=u()(L,2),G=H[0],$=H[1],D=function(){var n=c()(a()().mark((function n(s){var c,u;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=o()(o()(o()({},i),s),{},{avatar:S}),console.log(c),n.next=4,(0,b.ck)(c);case 4:u=n.sent,console.log("updateProfile response:",u),200===u.code?(Z.yw.success(e.formatMessage({id:"update.success"})),u.data.username!==i.username?(0,k.NZ)():(l(u.data),r.setFieldsValue({uid:u.data.uid,username:u.data.username,nickname:t(u.data.nickname),email:u.data.email,mobile:u.data.mobile,description:t(u.data.description)}))):Z.yw.error(u.message);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();(0,f.useEffect)((function(){i&&F(i.avatar)}),[i]);var K=function(){var e=c()(a()().mark((function e(){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Ai)();case 2:n=e.sent,console.log("handleRefreshProfile getProfile response:",n),200===n.code?(l(n.data),r.setFieldsValue({uid:n.data.uid,username:n.data.username,nickname:t(n.data.nickname),email:n.data.email,mobile:n.data.mobile,description:t(n.data.description)})):Z.yw.error(n.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){K()}),[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(m.A,o()(o()({},O),{},{form:r,onFinish:D,children:[(0,P.jsx)(g.Z,{name:"uid",label:"Uid",rules:[{required:!0}],readonly:!0}),(0,P.jsx)(m.A.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},label:e.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,P.jsxs)(y.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),F(e)},onError:function(e){console.log("handleUploadError:",e)},children:[(0,P.jsx)(d.C,{src:S}),(0,P.jsx)(p.ZP,{icon:(0,P.jsx)(x.Z,{}),children:e.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,P.jsx)(g.Z,{name:"username",label:e.formatMessage({id:"username.change.tip",defaultMessage:"Username"}),rules:[{required:!0}]}),(0,P.jsx)(p.ZP,{onClick:function(){A(!0)},children:e.formatMessage({id:"pages.settings.reset.password",defaultMessage:"重置密码"})}),(0,P.jsx)(g.Z,{name:"nickname",label:e.formatMessage({id:"nickname",defaultMessage:"Nickname"}),rules:[{required:!0}]}),(0,P.jsx)(g.Z,{name:"email",label:i.emailVerified?e.formatMessage({id:"email.verified",defaultMessage:"Email Verified"}):e.formatMessage({id:"email.unverified",defaultMessage:"email unverified"}),rules:[{type:"email"}],readonly:!0}),(0,P.jsx)(p.ZP,{onClick:function(){_(!0)},children:e.formatMessage({id:"pages.settings.reset.email",defaultMessage:"重置邮箱"})}),(0,P.jsx)(g.Z,{name:"mobile",label:i.mobileVerified?e.formatMessage({id:"mobile.verified",defaultMessage:"Mobile Verified"}):e.formatMessage({id:"mobile.unverified",defaultMessage:"mobile unverified"}),readonly:!0}),(0,P.jsx)(p.ZP,{onClick:function(){$(!0)},children:e.formatMessage({id:"pages.settings.reset.mobile",defaultMessage:"重置手机号"})}),(0,P.jsx)(h.Z,{name:"description",label:e.formatMessage({id:"description",defaultMessage:"Description"})})]})),E&&(0,P.jsx)(C,{open:E,onClose:function(){A(!1)}}),N&&(0,P.jsx)(z,{open:N,onSubmit:function(e){_(!1),i.email=e,l(i),r.setFieldValue("email",e)},onClose:function(){_(!1)}}),G&&(0,P.jsx)(T,{open:G,onSubmit:function(e){$(!1),i.mobile=e,l(i),r.setFieldValue("mobile",e)},onClose:function(){$(!1)}})]})}},83730:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(62347),a=r(75286),s=r(20908),o=r(44194),i=r(51865),c=r.n(i),l=r(24255),u=r(95244),f=r(19735),d=r(54353),p=r(23482),m=r(5616),g=r(21979),h=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r};var v=(0,u.i)((e=>{const{prefixCls:n,className:r,closeIcon:t,closable:a,type:s,title:i,children:u,footer:v}=e,x=h(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:w}=o.useContext(f.E_),b=w(),Z=n||w("modal"),y=(0,d.Z)(b),[M,k,j]=(0,g.ZP)(Z,y),P=`${Z}-confirm`;let C={};return C=s?{closable:null!=a&&a,title:"",footer:"",children:o.createElement(p.O,Object.assign({},e,{prefixCls:Z,confirmPrefixCls:P,rootPrefixCls:b,content:u}))}:{closable:null==a||a,title:i,footer:null!==v&&o.createElement(m.$,Object.assign({},e)),children:u},M(o.createElement(l.s,Object.assign({prefixCls:Z,className:c()(k,`${Z}-pure-panel`,s&&P,s&&`${P}-${s}`,r,j,y)},x,{closeIcon:(0,m.b)(Z,t),closable:a},C)))})),x=r(93703);function w(e){return(0,t.ZP)((0,t.uW)(e))}const b=s.Z;b.useModal=x.Z,b.info=function(e){return(0,t.ZP)((0,t.cw)(e))},b.success=function(e){return(0,t.ZP)((0,t.vq)(e))},b.error=function(e){return(0,t.ZP)((0,t.AQ)(e))},b.warning=w,b.warn=w,b.confirm=function(e){return(0,t.ZP)((0,t.Au)(e))},b.destroyAll=function(){for(;a.Z.length;){const e=a.Z.pop();e&&e()}},b.config=t.ai,b._InternalPanelDoNotUseOrYouWillBeFired=v;var Z=b}}]);