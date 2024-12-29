"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9368],{94546:function(e,a){a.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"}},1641:function(e,a,t){var n=t(11757),r=t(44194),s=t(94546),o=t(63837),i=function(e,a){return r.createElement(o.Z,(0,n.Z)({},e,{ref:a,icon:s.Z}))},c=r.forwardRef(i);a.Z=c},2724:function(e,a,t){var n=t(17082),r=t(51190),s=t(19753),o=t(19421),i=t(44194),c=t(79379),l=t(93288),u=t(31549),d=["options","fieldProps","proFieldProps","valueEnum"],g=i.forwardRef((function(e,a){var t=e.options,o=e.fieldProps,i=e.proFieldProps,c=e.valueEnum,g=(0,r.Z)(e,d);return(0,u.jsx)(l.Z,(0,n.Z)({ref:a,valueType:"checkbox",valueEnum:(0,s.h)(c,void 0),fieldProps:(0,n.Z)({options:t},o),lightProps:(0,n.Z)({labelFormatter:function(){return(0,u.jsx)(l.Z,(0,n.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,s.h)(c,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:t},o),proFieldProps:i},g))}},g.lightProps),proFieldProps:i},g))})),p=i.forwardRef((function(e,a){var t=e.fieldProps,r=e.children;return(0,u.jsx)(o.Z,(0,n.Z)((0,n.Z)({ref:a},t),{},{children:r}))})),f=(0,c.G)(p,{valuePropName:"checked"});f.Group=g,a.Z=f},8091:function(e,a,t){var n=t(17082),r=t(51190),s=t(19753),o=t(44194),i=t(84686),c=t(93288),l=t(31549),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=function(e,a){var t=e.fieldProps,d=e.children,g=e.params,p=e.proFieldProps,f=e.mode,h=e.valueEnum,m=e.request,v=e.showSearch,x=e.options,y=(0,r.Z)(e,u),w=(0,o.useContext)(i.Z);return(0,l.jsx)(c.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,s.h)(h),request:m,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:x,mode:f,showSearch:v,getPopupContainer:w.getPopupContainer},t),ref:a,proFieldProps:p},y),{},{children:d}))},p=o.forwardRef((function(e,a){var t=e.fieldProps,u=e.children,g=e.params,p=e.proFieldProps,f=e.mode,h=e.valueEnum,m=e.request,v=e.options,x=(0,r.Z)(e,d),y=(0,n.Z)({options:v,mode:f||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},t),w=(0,o.useContext)(i.Z);return(0,l.jsx)(c.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,s.h)(h),request:m,params:g,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({getPopupContainer:w.getPopupContainer},y),ref:a,proFieldProps:p},x),{},{children:u}))})),f=o.forwardRef(g);f.SearchSelect=p,f.displayName="ProFormComponent",a.Z=f},85768:function(e,a,t){t.d(a,{Z:function(){return y}});var n=t(90819),r=t.n(n),s=t(89933),o=t.n(s),i=t(45332),c=t.n(i),l=t(77667),u=t(82045);function d(){return g.apply(this,arguments)}function g(){return(g=o()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/get",{method:"GET",params:{client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a){return f.apply(this,arguments)}function f(){return(f=o()(r()().mark((function e(a,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/kaptcha/api/v1/check",{method:"POST",data:{captchaUid:a,captchaCode:t,client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=t(69560),m=t(19140),v=t(44194),x=t(31549),y=function(e){var a=e.onKaptchaChange,t=e.onKaptchaCheck,n=(0,u.useIntl)(),s=(0,v.useState)(),i=c()(s,2),l=i[0],g=i[1],f=(0,v.useState)(),y=c()(f,2),w=y[0],b=y[1],M=function(){var e=o()(r()().mark((function e(){var a;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:200===(a=e.sent).code&&(g(a.data.captchaUid),b(a.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=o()(r()().mark((function e(a,n){var s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a,n);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?t&&t(!0):t&&t(!1);case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){M()}),[]);return(0,x.jsx)(x.Fragment,{children:w&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{onChange:function(e){a&&(a(l,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?k(l,e.target.value):t&&t(!1))},prefix:(0,x.jsx)(h.Z,{}),placeholder:n.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40},allowClear:!0}),(0,x.jsx)("img",{src:w,alt:"captcha",onClick:M})]})})}},57374:function(e,a,t){t.r(a),t.d(a,{default:function(){return ce}});var n=t(73193),r=t.n(n),s=t(90819),o=t.n(s),i=t(89933),c=t.n(i),l=t(45332),u=t.n(l),d=t(90351),g=t(5728),p=t(75625),f=t(90774),h=t(28311),m=t(34757),v=t(82045),x=t(48974),y=t(50571),w=t(12265),b=t(40881),M=t(78386),k=t(44194),j=t(56321),Z=t(22509),C=t(89756),S=t(46465),P=t(74145),U=t(77667),F=t(85768),I=t(97146),T=t(98652),E=t(43688),L=t(31549),R=function(e){var a=e.loginType,t=e.onKaptchaChange,n=e.onKaptchaCheck,r=(0,v.useIntl)(),s=function(){var e=c()(o()().mark((function e(a,n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t(a,n);case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),i=function(){var e=c()(o()().mark((function e(a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,L.jsx)(L.Fragment,{children:"account"===a&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Z,{name:"username",fieldProps:{size:"large",prefix:(0,L.jsx)(I.Z,{})},placeholder:r.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"用户名/邮箱"}),rules:[{required:!0,message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"请输入用户名/邮箱!"})}]}),(0,L.jsx)(E.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,L.jsx)(T.Z,{})},placeholder:r.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"密码"}),rules:[{required:!0,message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"请输入密码！"})}]}),(0,L.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,L.jsx)(F.Z,{onKaptchaChange:s,onKaptchaCheck:i})})]})})},q=t(74828),D=t(50784),K=t(8091),A=t(46017),V=t(50477),N=t(82835),z=t(93982),B=function(e){var a=e.loginType,t=e.onKaptchaChange,n=e.onKaptchaCheck,r=(0,v.useIntl)(),s=(0,k.useRef)(),i=(0,k.useState)(""),l=u()(i,2),p=l[0],f=l[1],h=(0,k.useState)(""),m=u()(h,2),x=m[0],y=m[1],w=(0,k.useState)(!1),b=u()(w,2),M=b[0],j=b[1],S=(0,Z.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),P=S.deviceUid,I=S.setDeviceUid,R=function(){var e=c()(o()().mark((function e(a,n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(a),y(n),t&&t(a,n);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),B=function(){var e=c()(o()().mark((function e(a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(a),n&&n(a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();(0,k.useEffect)((function(){void 0!==P&&""!==P||I((0,q.Zx)())}),[]);var H=[{label:r.formatMessage({id:"pages.login.country.china"}),value:"86",icon:"🇨🇳",code:"CN"},{label:r.formatMessage({id:"pages.login.country.hongkong"}),value:"852",icon:"🇭🇰",code:"HK"},{label:r.formatMessage({id:"pages.login.country.taiwan"}),value:"886",icon:"🇹🇼",code:"TW"},{label:r.formatMessage({id:"pages.login.country.macao"}),value:"853",icon:"🇲🇴",code:"MO"},{label:r.formatMessage({id:"pages.login.country.japan"}),value:"81",icon:"🇯🇵",code:"JP"},{label:r.formatMessage({id:"pages.login.country.korea"}),value:"82",icon:"🇰🇷",code:"KR"},{label:r.formatMessage({id:"pages.login.country.singapore"}),value:"65",icon:"🇸🇬",code:"SG"},{label:r.formatMessage({id:"pages.login.country.malaysia"}),value:"60",icon:"🇲🇾",code:"MY"},{label:r.formatMessage({id:"pages.login.country.thailand"}),value:"66",icon:"🇹🇭",code:"TH"},{label:r.formatMessage({id:"pages.login.country.vietnam"}),value:"84",icon:"🇻🇳",code:"VN"},{label:r.formatMessage({id:"pages.login.country.philippines"}),value:"63",icon:"🇵🇭",code:"PH"},{label:r.formatMessage({id:"pages.login.country.indonesia"}),value:"62",icon:"🇮🇩",code:"ID"},{label:r.formatMessage({id:"pages.login.country.usa"}),value:"1-us",icon:"🇺🇸",code:"US"},{label:r.formatMessage({id:"pages.login.country.canada"}),value:"1-ca",icon:"🇨🇦",code:"CA"},{label:r.formatMessage({id:"pages.login.country.uk"}),value:"44",icon:"🇬🇧",code:"GB"},{label:r.formatMessage({id:"pages.login.country.germany"}),value:"49",icon:"🇩🇪",code:"DE"},{label:r.formatMessage({id:"pages.login.country.france"}),value:"33",icon:"🇫🇷",code:"FR"},{label:r.formatMessage({id:"pages.login.country.italy"}),value:"39",icon:"🇮🇹",code:"IT"},{label:r.formatMessage({id:"pages.login.country.spain"}),value:"34",icon:"🇪🇸",code:"ES"},{label:r.formatMessage({id:"pages.login.country.russia"}),value:"7",icon:"🇷🇺",code:"RU"},{label:r.formatMessage({id:"pages.login.country.australia"}),value:"61",icon:"🇦🇺",code:"AU"},{label:r.formatMessage({id:"pages.login.country.newzealand"}),value:"64",icon:"🇳🇿",code:"NZ"}];return(0,L.jsx)(L.Fragment,{children:"mobile"===a&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(V.Z,{gutter:16,children:[(0,L.jsx)(N.Z,{span:10,children:(0,L.jsx)(K.Z,{name:"country",options:H,fieldProps:{size:"large",placeholder:r.formatMessage({id:"pages.login.country.placeholder",defaultMessage:"选择国家/地区"}),optionLabelProp:"label",optionItemRender:function(e){var a=e.value.includes("-")?e.value.split("-")[0]:e.value;return(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{role:"img","aria-label":e.label,style:{marginRight:8},children:e.icon}),e.label," (+",a,")"]})}},initialValue:"86"})}),(0,L.jsx)(N.Z,{span:14,children:(0,L.jsx)(E.Z,{fieldProps:{size:"large",prefix:(0,L.jsx)(D.Z,{})},name:"mobile",placeholder:r.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]})})]}),(0,L.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,L.jsx)(F.Z,{onKaptchaChange:R,onKaptchaCheck:B})}),(0,L.jsx)(A.Z,{fieldProps:{size:"large",prefix:(0,L.jsx)(T.Z,{})},captchaProps:{size:"large",disabled:!M},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,a){return e?"".concat(a," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=c()(o()().mark((function e(a){var t,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",a),!a||11!==a.length){e.next=13;break}return t={mobile:a,type:U.UUF,captchaUid:p,captchaCode:x,deviceUid:P,platform:U.iw8},e.next=5,(0,d.Y7)(t);case 5:if(200===(n=e.sent).code){e.next=10;break}return C.yw.error(r.formatMessage({id:n.message,defaultMessage:n.message})),setTimeout((function(){var e;console.log("endCaptchaTiming"),null===(e=s.current)||void 0===e||e.endTiming()}),2),e.abrupt("return");case 10:C.yw.success(r.formatMessage({id:n.message,defaultMessage:n.message})),e.next=14;break;case 13:C.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}),(0,L.jsx)(z.Z,{message:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.auto.register",defaultMessage:"Mobile will auto register"}),type:"info"})]})})},H=t(88183),Q=function(e){var a=e.loginType,t=(0,v.useIntl)(),n=(0,S.t)((function(e){return e.setAccessToken})),s=(0,Z.L)((function(e){return e.setUserInfo})),i=(0,v.useModel)("@@initialState").setInitialState,l=(0,Z.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),g=l.deviceUid,p=l.setDeviceUid,f=(0,k.useState)("login"),h=u()(f,2),m=h[0],x=h[1],y=(0,k.useState)("loading"),w=u()(y,2),b=w[0],M=w[1],P=function(){var e=c()(o()().mark((function e(a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&(0,j.flushSync)((function(){i((function(e){return r()(r()({},e),{},{userInfo:a})}))}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=c()(o()().mark((function e(a){var i,c,l;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleScanLogin values: ",a),C.yw.loading(t.formatMessage({id:"logging",defaultMessage:"logging..."})),e.next=4,(0,d.kZ)(r()({},a));case 4:i=e.sent,console.log("LoginMobileResult scanLogin:",i.data),200===i.code?(C.yw.destroy(),C.yw.success(t.formatMessage({id:"login.success",defaultMessage:"login success"})),n(null==i?void 0:i.data.accessToken),P(null==i||null===(c=i.data)||void 0===c?void 0:c.user),s(null==i||null===(l=i.data)||void 0===l?void 0:l.user),v.history.push("/")):(C.yw.destroy(),C.yw.error(i.message));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),I=function(){var e=c()(o()().mark((function e(t){var n,r,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("scan"==a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.Tm)(g,t);case 4:if(200!==(n=e.sent).code){e.next=30;break}if(r=n.data,console.log("handleScanQuery status: ",r.status),r.status!==U.C20){e.next=13;break}M("active"),x("deviceUid="+r.deviceUid+"&code="+r.content),e.next=28;break;case 13:if(r.status!==U.FM$){e.next=17;break}M("scanned"),e.next=28;break;case 17:if(r.status!==U.PhI){e.next=21;break}M("expired"),e.next=28;break;case 21:if(r.status!==U.Cml){e.next=28;break}if(void 0!==r.receiver&&""!==r.receiver){e.next=24;break}return e.abrupt("return");case 24:return s={mobile:r.receiver,code:r.content,platform:U.iw8},console.log("login scan info:",s),e.next=28,F(s);case 28:e.next=31;break;case 30:C.yw.error(n.message);case 31:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,k.useEffect)((function(){console.log("scan deviceUid:",g),void 0!==g&&""!==g||p((0,q.Zx)()),I(!1);var e=setInterval((function(){I(!1)}),3e3);return function(){clearInterval(e)}}),[a,g]),(0,L.jsx)(L.Fragment,{children:"scan"===a&&(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(H.Z,{style:{margin:"auto"},value:m,status:b,onRefresh:function(){console.log("onRefresh"),I(!0)}})})})},G=t(95772),W=t(33934),Y=t(19421),O=t(17082),$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},J=t(64423),X=function(e,a){return k.createElement(J.Z,(0,O.Z)((0,O.Z)({},e),{},{ref:a,icon:$}))};var _=k.forwardRef(X),ee=t(2724),ae=function(){var e=x.Z.useToken().token,a=(0,k.useContext)(G.I),t=a.isCustomServer,n=a.setIsCustomServer,r=g.A.useForm(),s=u()(r,1)[0],o=(0,k.useState)(!1),i=u()(o,2),c=i[0],l=i[1],d=(0,k.useState)(""),p=u()(d,2),f=p[0],h=p[1],m=(0,k.useState)(""),v=u()(m,2),y=(v[0],v[1]);(0,k.useEffect)((function(){f&&f.length>0&&(s.setFieldsValue({apiUrl:f}),console.log("apiUrl:",f))}),[f]),(0,k.useEffect)((function(){if(t){var e=localStorage.getItem(U.Ss2);"true"===e&&(l(!0),s.setFieldsValue({isCustomServerEnabled:!0})),console.log("isCustomServer customEnabled:",e);var a=localStorage.getItem(U.DuM);a&&s.setFieldsValue({apiUrl:(0,q.Qj)(a)});var n=localStorage.getItem(U.sZT);n&&s.setFieldsValue({websocketUrl:(0,q.Qj)(n)})}}),[t]);return(0,L.jsx)("div",{className:"ant-pro-form-server-container",style:{backgroundColor:e.colorBgContainer,display:"flex",justifyContent:"center",flexDirection:"column",height:"100%",width:"80%",marginLeft:"10%"},children:(0,L.jsxs)(g.A,{className:"ant-pro-form-server-main",form:s,submitter:{render:function(e,a){return console.log("props:",e,a),(0,L.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"8px"},children:[(0,L.jsx)(w.ZP,{icon:(0,L.jsx)(_,{}),onClick:function(){console.log("switch server"),n((function(e){return!e}))},children:"返回"},"back"),(0,L.jsx)(w.ZP,{type:"primary",onClick:function(){var a=e.form.getFieldValue("apiUrl");a=(0,q.Qj)(a.trim());var t=e.form.getFieldValue("websocketUrl");t=(0,q.Qj)(t.trim()),a&&a.trim().length>0&&t&&t.trim().length>0?(localStorage.setItem(U.DuM,a),localStorage.setItem(U.sZT,t),localStorage.setItem(U.Ss2,"true"),C.yw.success("保存成功")):C.yw.error("请输入正确的服务器地址")},children:"保存"},"submit"),(0,L.jsx)(w.ZP,{onClick:function(){var a;null===(a=e.form)||void 0===a||a.resetFields(),h(""),localStorage.setItem(U.Ss2,"false"),localStorage.setItem(U.DuM,""),localStorage.setItem(U.sZT,""),C.yw.success("重置成功，已恢复默认云服务器")},children:"重置"},"reset"),(0,L.jsx)(w.ZP,{onClick:function(){window.open("https://www.weiyuai.cn/docs/zh-CN/docs/manual/agent/auth/login")},children:"帮助"},"help")]})}},children:[(0,L.jsx)(ee.Z,{name:"isCustomServerEnabled",fieldProps:{onChange:function(e){console.log("e:",e),function(e){if(console.log("handleCustomServerChange e:",e),l(e.target.checked),e.target.checked){var a=localStorage.getItem(U.DuM);a&&s.setFieldsValue({apiUrl:(0,q.Qj)(a)});var t=localStorage.getItem(U.sZT);t&&s.setFieldsValue({websocketUrl:(0,q.Qj)(t)}),console.log("initData apiUrl:",a,"websocketUrl:",t)}else localStorage.setItem(U.Ss2,"false")}(e)}},children:"是否启用自定义服务器"}),c&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Z,{name:"apiUrl",label:"API 服务器地址",fieldProps:{disabled:!c,placeholder:"http://127.0.0.1:9003",onChange:function(e){return h(e.target.value)}}}),(0,L.jsx)(E.Z,{name:"websocketUrl",label:"WebSocket 服务器地址",fieldProps:{disabled:!c,placeholder:"ws://127.0.0.1:9885/websocket",onChange:function(e){return y(e.target.value)}}})]})]})})},te=x.Z.defaultAlgorithm,ne=x.Z.darkAlgorithm,re=function(){var e=(0,m.l)((function(e){var a=e.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:a.borderRadius,":hover":{backgroundColor:a.colorBgTextHover}}}));return(0,L.jsx)("div",{className:e,"data-lang":!0,children:v.SelectLang&&(0,L.jsx)(v.SelectLang,{})})},se=function(){var e=(0,q.lk)();return(0,L.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},oe=function(){var e=(0,q.z)();return(0,L.jsx)(v.FormattedMessage,{id:e,defaultMessage:"微语"})},ie=function(){var e=(0,v.useIntl)(),a=g.A.useForm(),t=u()(a,1)[0],n=x.Z.useToken().token,s=(0,P.Z)().isDarkMode,i=(0,S.t)((function(e){return e.setAccessToken})),l=(0,k.useContext)(G.I),m=l.isCustomServer,b=l.setIsCustomServer,M=(0,k.useState)("mobile"),F=u()(M,2),I=F[0],T=F[1],E=(0,v.useModel)("@@initialState").setInitialState,D=(0,k.useState)(!1),K=u()(D,2),A=K[0],V=K[1],N=(0,Z.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid,setUserInfo:e.setUserInfo}})),z=N.deviceUid,H=N.setDeviceUid,O=N.setUserInfo,$=(0,k.useState)(!1),J=u()($,2),X=J[0],_=J[1],ee=(0,k.useState)(""),te=u()(ee,2),ne=te[0],ie=te[1],ce=function(){var e=c()(o()().mark((function e(a,n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(a),t.setFieldValue("captchaCode",n);case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),le=function(){var e=c()(o()().mark((function e(a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleKaptchaCheck:",a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ue=[{key:"account",label:e.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"账户密码登录"}),children:(0,L.jsx)(R,{loginType:I,onKaptchaChange:ce,onKaptchaCheck:le})},{key:"mobile",label:e.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"手机号登录"}),children:(0,L.jsx)(B,{loginType:I,onKaptchaChange:ce,onKaptchaCheck:le})},{key:"scan",label:e.formatMessage({id:"pages.login.scanLogin.tab",defaultMessage:"扫码登录"}),children:(0,L.jsx)(Q,{loginType:I})}];(0,p.uK)(n.colorTextBase,.2);(0,k.useEffect)((function(){void 0!==z&&""!==z||H((0,q.Zx)()),(0,W.ME)(),(0,q.Bc)()&&V(!0),(0,q.pr)()}),[]);var de,ge=function(){var e=c()(o()().mark((function e(a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&(0,j.flushSync)((function(){E((function(e){return r()(r()({},e),{},{userInfo:a})}))}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),pe=function(){var a=c()(o()().mark((function a(t){var n;return o()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,X){a.next=4;break}return C.yw.error("请阅读并同意隐私协议"),a.abrupt("return");case 4:return C.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),a.next=7,(0,d.x4)(r()({},t));case 7:n=a.sent,console.log("LoginResult:",n),200===n.code?(C.yw.destroy(),C.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),i(n.data.accessToken),ge(n.data.user),O(n.data.user),v.history.push("/")):(C.yw.destroy(),C.yw.error(e.formatMessage({id:n.message,defaultMessage:n.message}))),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0),C.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}(),fe=function(){var a=c()(o()().mark((function a(t){var n,s,c;return o()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,X){a.next=4;break}return C.yw.error("请阅读并同意隐私协议"),a.abrupt("return");case 4:return C.yw.loading(e.formatMessage({id:"logging",defaultMessage:"logging..."})),a.next=7,(0,d.N9)(r()({},t));case 7:n=a.sent,console.log("LoginMobileResult:",n),200===n.code?(C.yw.destroy(),C.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),i(null==n?void 0:n.data.accessToken),ge(null==n||null===(s=n.data)||void 0===s?void 0:s.user),O(null==n||null===(c=n.data)||void 0===c?void 0:c.user),v.history.push("/")):(C.yw.destroy(),C.yw.error(e.formatMessage({id:n.message,defaultMessage:n.message}))),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0),C.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}();return(0,L.jsxs)(f._Y,{hashed:!1,dark:s,children:[(0,L.jsx)(re,{}),(0,L.jsxs)("div",{style:{backgroundColor:n.colorBgContainer,textAlign:"center",height:"100%",backgroundImage:"url('/admin/assets/images/bg-wide.png')"},children:[!m&&(0,L.jsxs)(h.U,{form:t,contentStyle:{minWidth:400,maxWidth:"75vw"},logo:(de=(0,q.hX)(),(0,L.jsx)("img",{alt:"logo",src:de})),title:se(),subTitle:oe(),actions:A&&!1,onFinish:function(){var e=c()(o()().mark((function e(a){var t,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("login values:",a),"account"!==I){e.next=8;break}return t={username:a.username,password:a.password,captchaUid:ne,captchaCode:a.captchaCode,deviceUid:z,platform:U.iw8},console.log("login info:",t),e.next=6,pe(t);case 6:e.next=12;break;case 8:return n={mobile:a.mobile,code:a.code,captchaUid:ne,captchaCode:a.captchaCode,deviceUid:z,platform:U.iw8},console.log("login mobile info:",n),e.next=12,fe(n);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),children:[(0,L.jsx)(y.Z,{activeKey:I,onChange:T,centered:!0,items:ue}),(0,L.jsx)("div",{style:{marginTop:14,marginBottom:14},children:(0,L.jsxs)("div",{style:{float:"right",marginBottom:24},children:[(0,L.jsx)(Y.Z,{onChange:function(e){console.log("checked = ".concat(e.target.checked)),_(e.target.checked)},children:(0,L.jsx)(w.ZP,{size:"small",type:"link",onClick:function(){window.open("https://www.weiyuai.cn/protocol.html")},children:"同意《用户隐私&协议》"})}),A&&(0,L.jsx)(v.Link,{to:"/auth/register",children:(0,L.jsx)(v.FormattedMessage,{id:"pages.login.registerAccount",defaultMessage:"注册 "})}),(0,L.jsx)(w.ZP,{type:"link",style:{float:"right"},onClick:function(){console.log("switch server"),b((function(e){return!e}))},children:"切换服务器"})]})})]}),m&&(0,L.jsx)(ae,{})]})]})},ce=function(){var e=(0,P.Z)().isDarkMode;return(0,L.jsx)(G.w,{children:(0,L.jsx)(b.ZP,{theme:{algorithm:e?ne:te},children:(0,L.jsxs)(M.Z,{style:{height:"100%"},children:[(0,L.jsx)(C.ZP,{}),(0,L.jsx)(ie,{})]})})})}}}]);