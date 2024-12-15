"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5488],{71018:function(e,t,n){n.d(t,{Az:function(){return d},Xc:function(){return v},jX:function(){return y},tu:function(){return g}});var r=n(90819),o=n.n(r),i=n(73193),c=n.n(i),u=n(89933),a=n.n(u),l=n(77667),s=n(7206);function d(e){return f.apply(this,arguments)}function f(){return(f=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/query/org",{method:"GET",params:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return p.apply(this,arguments)}function p(){return(p=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/create",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/update",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return(h=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/delete",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},47227:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(90819),o=n.n(r),i=n(89933),c=n.n(i),u=n(45332),a=n.n(u),l=n(50484),s=n(83730),d=n(80093),f=n(12265),g=n(38227),p=n(40751),v=n(56913),m=n(44194),y=n(72272),h=n(40431),x=n(89756),w=n(26305),k=n(1780),C=n(7206),Z=n(57024),j=n(31549),b=function(e){var t=e.type,n=(0,C.useIntl)(),r=(0,m.useState)(!0),i=a()(r,2),u=i[0],b=i[1],A=(0,h.u)((function(e){return e.currentOrg})),M=(0,Z.j)((function(e){return e.currentKbase})),S=(0,m.useState)(!1),P=a()(S,2),R=P[0],U=P[1],E=(0,w.v)((function(e){return{categoryTreeOptions:e.categoryTreeOptions,setCategoryResult:e.setCategoryResult,currentCategory:e.currentCategory,setCurrentCategoryUid:e.setCurrentCategoryUid}})),O=E.categoryTreeOptions,T=E.setCategoryResult,I=E.currentCategory,V=E.setCurrentCategoryUid,z=(0,k.Z)(),q=z.translateString,H=z.translateStringTranct,L=s.Z.useModal(),X=a()(L,2),B=X[0],D=X[1],F=function(){var e=c()(o()().mark((function e(t){var r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("handleSubmit: ",t),u?x.yw.loading(n.formatMessage({id:"updating"})):x.yw.loading(n.formatMessage({id:"creating"})),!u){e.next=8;break}return e.next=5,(0,y.yr)(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,(0,y.k4)(t);case 10:e.t0=e.sent;case 11:r=e.t0,console.log("createCategory response: ",r),200===r.code?(x.yw.destroy(),u?x.yw.success(n.formatMessage({id:"update.success"})):x.yw.success(n.formatMessage({id:"create.success"})),U(!1),K()):(x.yw.destroy(),x.yw.error(r.message));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=c()(o()().mark((function e(){var r,i;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getCategories"),x.yw.success(n.formatMessage({id:"loading"})),r={pageNumber:0,pageSize:50,type:t,kbUid:null==M?void 0:M.uid,orgUid:null==A?void 0:A.uid},e.next=5,(0,y.XS)(r);case 5:i=e.sent,console.log("queryCategories response: ",i),200===i.code?(T(i),x.yw.destroy()):(x.yw.destroy(),x.yw.error(i.message));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=c()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleEditCategory: ",I),b(!0),U(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleDeleteCategory: ",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,m.useEffect)((function(){K()}),[M]);return(0,j.jsxs)("div",{children:[(0,j.jsxs)(d.Z,{gap:"small",wrap:"wrap",style:{marginBottom:5},children:[(0,j.jsx)(f.ZP,{type:"primary",size:"small",onClick:function(){b(!1),U(!0)},disabled:(null==M?void 0:M.type)!=t,children:n.formatMessage({id:"create"})}),""!==(null==I?void 0:I.uid)&&"all"!==(null==I?void 0:I.uid)&&(0,j.jsx)(f.ZP,{size:"small",onClick:N,children:n.formatMessage({id:"edit"})}),""!==(null==I?void 0:I.uid)&&"all"!==(null==I?void 0:I.uid)&&(0,j.jsx)(f.ZP,{onClick:function(){return function(e){B.confirm({title:n.formatMessage({id:"deleteTip"}),icon:(0,j.jsx)(l.Z,{}),content:"".concat(n.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(q(e.name),"】？"),onOk:function(){G(e)},onCancel:function(){},okText:n.formatMessage({id:"ok"}),cancelText:n.formatMessage({id:"cancel"})})}(I)},size:"small",style:{float:"right"},danger:!0,children:n.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,j.jsx)(g.Z,{defaultSelectedKeys:[null==I?void 0:I.uid],onSelect:function(e,t){console.log("selected",e,t),0!==e.length&&V(e[0].toString())},treeData:O,blockNode:!0,titleRender:function(e){return(0,j.jsx)(p.Z,{title:q(e.title),children:H(e.title)})}}),R&&(0,j.jsx)(v.Z,{open:R,type:t,isEdit:u,onCancel:function(){U(!1)},onSubmit:F}),D]})}},90810:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(78386),o=n(93139),i=n(64476),c=n(44194),u=n(47227),a=n(77667),l=n(95772),s=n(89756),d=n(90819),f=n.n(d),g=n(89933),p=n.n(g),v=n(71018),m=n(74145),y=n(1780),h=n(73193),x=n.n(h),w=n(76711),k=n.n(w),C=n(39701),Z=n(83642),j=n(41617),b=(0,C.Ue)()((0,Z.mW)((0,Z.tJ)((0,j.n)((function(e,t){return{currentArticle:{uid:"",orgUid:""},articleResult:{data:{content:[]}},insertArticle:function(t){e((function(e){e.articleResult.data.content.unshift(t)}))},updateArticle:function(t){e((function(e){var n=e.articleResult.data.content,r=n.findIndex((function(e){return e.uid===t.uid}));-1!==r?n[r]=t:console.warn("Article with uid ".concat(t.uid," not found."))}))},setArticleResult:function(n){var r;(e({articleResult:n}),""===t().currentArticle.uid)&&((null===(r=n.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentArticle:n.data.content[0]}))},setCurrentArticle:function(n){var r=t().articleResult.data.content,o=r.findIndex((function(e){return e.uid===n.uid}));if(-1!==o){var i=[].concat(k()(r.slice(0,o)),[n],k()(r.slice(o+1))),c=x()(x()({},t().articleResult),{},{data:{content:i}});e({articleResult:c,currentArticle:n})}else console.warn("Article with the specified uid not found."),e({currentArticle:n})},removeArticle:function(n){var r=t().articleResult.data.content,o=r.findIndex((function(e){return e.uid===n}));-1!==o?e({articleResult:x()(x()({},t().articleResult),{},{data:{content:[].concat(k()(r.slice(0,o)),k()(r.slice(o+1)))}})}):console.warn("Article not found in cache:",n),t().currentArticle.uid===n&&e({currentArticle:{uid:"",orgUid:""}})},deleteArticleCache:function(){return e({},!0)}}})),{name:a.SsI}))),A=n(26305),M=n(57024),S=n(40431),P=n(83691),R=n(90136),U=n(31549),E=function(){var e=(0,m.Z)().isDarkMode,t=(0,c.useRef)(!1),n=(0,y.Z)().translateString,r=(0,S.u)((function(e){return e.currentOrg})),o=(0,M.j)((function(e){return e.currentKbase})),i=(0,A.v)((function(e){return e.currentCategory})),u=b((function(e){return{currentArticle:e.currentArticle,articleResult:e.articleResult,setCurrentArticle:e.setCurrentArticle,setArticleResult:e.setArticleResult}})),l=u.currentArticle,s=u.articleResult,d=u.setCurrentArticle,g=u.setArticleResult,h=function(){var e=p()(f()().mark((function e(){var n,c;return f()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=3;break}return console.log("isLoading: 1",t.current),e.abrupt("return");case 3:return t.current=!0,P.ZP.loading("loading"),n={pageNumber:0,pageSize:50,type:a.VX,categoryUid:"all"===(null==i?void 0:i.uid)?"":null==i?void 0:i.uid,kbUid:null==o?void 0:o.uid,orgUid:null==r?void 0:r.uid},e.next=8,(0,v.Az)(n);case 8:c=e.sent,console.log("queryArticlesByOrg: ",c),200===c.code?(P.ZP.destroy(),g(c)):(P.ZP.destroy(),P.ZP.error(c.message)),t.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){console.log("useEffect"),h()}),[o,i]);return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(R.Z,{itemLayout:"horizontal",dataSource:s.data.content,renderItem:function(t,r){return(0,U.jsx)(R.Z.Item,{style:l.uid===t.uid?{backgroundColor:e?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){d(t)},children:(0,U.jsx)(R.Z.Item.Meta,{style:{marginLeft:"10px",color:e?"#ffffff":"#000000"},title:n(t.title)})})}})})},O=n(45332),T=n.n(O),I=n(80093),V=n(19140),z=n(73668),q=n(12265),H=n(66982),L=n(84176),X=n.n(L),B=n(7206),D=n(72909),F=(n(79520),["placeholder","defaultValue","value","onChange","options"]),K=function(e){var t=e.placeholder,n=e.defaultValue,r=e.value,o=e.onChange,i=(e.options,X()(e,F)),u=(0,B.useIntl)(),a=(0,c.useRef)(null),l=(0,c.useRef)(null);return(0,c.useEffect)((function(){if(a.current){if(!l.current){var e=new D.cW({element:a.current,placeholder:t,content:n,image:{uploaderEvent:{onUploadBefore:function(e,t,n){s.yw.warning(u.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},video:{uploaderEvent:{onUploadBefore:function(e,t,n){s.yw.warning(u.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},attachment:{uploaderEvent:{onUploadBefore:function(e,t,n){s.yw.warning(u.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},onChange:function(e){"function"==typeof o&&o(e.getHtml(),e.getMarkdown())}});l.current=e}return function(){l.current&&(l.current.destroy(),l.current=null)}}}),[]),(0,c.useEffect)((function(){l.current&&r!==l.current.getHtml()&&l.current.setContent(r||"")}),[r]),(0,U.jsx)(U.Fragment,{children:(0,U.jsx)("div",x()(x()({ref:a},i),{},{style:{height:"100%"}}))})},N=n(31816),G=n(81916),W=n(4391),J=n(33934),Q=function(){var e=(0,B.useIntl)(),t=(0,m.Z)().isDarkMode,n=(0,c.useState)(!1),r=T()(n,2),o=r[0],i=r[1],u=(0,c.useState)(""),l=T()(u,2),s=l[0],d=l[1],g=(0,c.useState)(""),y=T()(g,2),h=y[0],w=y[1],k=(0,c.useState)(""),C=T()(k,2),Z=C[0],j=C[1],R=(0,c.useRef)(!1),E=(0,S.u)((function(e){return e.currentOrg})),O=(0,M.j)((function(e){return e.currentKbase})),L=(0,A.v)((function(e){return e.currentCategory})),X=b((function(e){return{currentArticle:e.currentArticle,insertArticle:e.insertArticle,setCurrentArticle:e.setCurrentArticle,updateLocalArticle:e.updateArticle}})),D=X.currentArticle,F=X.insertArticle,Q=X.setCurrentArticle,Y=X.updateLocalArticle;(0,c.useEffect)((function(){(null==D?void 0:D.kbUid)===(null==O?void 0:O.uid)&&(d(null==D?void 0:D.title),w(null==D?void 0:D.contentHtml),j(null==D?void 0:D.contentMarkdown))}),[D]);var $=function(){var t=p()(f()().mark((function t(){var n,r;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("create"),!R.current){t.next=4;break}return console.log("isLoading: 1",R.current),t.abrupt("return");case 4:return R.current=!0,P.ZP.loading(e.formatMessage({id:"creating"})),n={uid:null==D?void 0:D.uid,title:"new article",summary:"new article summary",contentHtml:"new article content",contentMarkdown:"new article content",type:a.VX,tags:["tag1","tag2"],markdown:o,published:!1,categoryUid:null==L?void 0:L.uid,kbUid:null==O?void 0:O.uid,orgUid:null==E?void 0:E.uid},console.log("create articleObject",n),t.next=10,(0,v.tu)(n);case 10:r=t.sent,console.log("createArticle response",r),200===r.code?(P.ZP.destroy(),P.ZP.info(e.formatMessage({id:"create.success"})),F(r.data),Q(r.data)):(P.ZP.destroy(),P.ZP.error(r.message)),R.current=!1;case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=p()(f()().mark((function t(){var n,r;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("save",s,h),""!==s&&""!==h){t.next=4;break}return P.ZP.error("标题或内容不能为空！"),t.abrupt("return");case 4:if(!R.current){t.next=7;break}return console.log("isLoading: 1",R.current),t.abrupt("return");case 7:return R.current=!0,P.ZP.loading(e.formatMessage({id:"updating"})),n={uid:null==D?void 0:D.uid,title:s,summary:null==D?void 0:D.summary,contentHtml:h,contentMarkdown:Z,type:null==D?void 0:D.type,tags:["tag1","tag2"],markdown:null==D?void 0:D.markdown,published:null==D?void 0:D.published,categoryUid:null==D?void 0:D.categoryUid,kbUid:null==D?void 0:D.kbUid,orgUid:null==D?void 0:D.orgUid},console.log("update articleObject",n),t.next=13,(0,v.Xc)(n);case 13:r=t.sent,console.log("updateArticle response",r),200===r.code?(P.ZP.destroy(),P.ZP.info(e.formatMessage({id:"update.success"})),Y(r.data)):(P.ZP.destroy(),P.ZP.error(r.message)),R.current=!1;case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=x()(x()({},D),{},{title:s,contentHtml:h,contentMarkdown:Z});Y(e)}),[s,h,Z]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("div",{children:(0,U.jsxs)(I.Z,{gap:10,style:{marginBottom:10,marginTop:5},children:[(0,U.jsx)(V.Z,{size:"large",placeholder:"title",value:s,style:{background:t?"#141414":"#f5f5f5"},onChange:function(e){console.log("title onChange:",e.target.value),d(e.target.value)}}),(0,U.jsx)(z.Z,{checkedChildren:"Markdown",unCheckedChildren:"Html",onChange:function(e){console.log("switch to ".concat(e)),i(e)},defaultValue:o}),(0,U.jsx)(q.ZP,{type:"primary",icon:(0,U.jsx)(N.Z,{}),onClick:$,children:"新建"}),(0,U.jsx)(q.ZP,{type:"default",icon:(0,U.jsx)(G.Z,{}),onClick:_,children:"保存"}),(0,U.jsx)(q.ZP,{type:"default",icon:(0,U.jsx)(W.Z,{}),onClick:function(){console.log("handlePreviewArticle",D),window.open("".concat((0,J.kG)(),"/kb/").concat(null==O?void 0:O.uid,"/").concat(null==D?void 0:D.uid))},children:"预览"})]})}),o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(H.ZP,{style:{height:"100%"},value:Z,enablePreview:!0,onChange:function(e,t){console.log("markdown onChange value",e,t),j(e),w(e)}})}),!o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(K,{placeholder:"article content..",value:h,onChange:function(e,t){console.log("aiEditor onChange value",e,t),w(e),j(t)}})})]})},Y=i.Z.Sider,$=i.Z.Content,_=function(){var e=(0,o.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(l.w,{children:(0,U.jsxs)(r.Z,{children:[(0,U.jsx)(s.ZP,{}),(0,U.jsxs)(i.Z,{children:[(0,U.jsx)(Y,{style:t,children:(0,U.jsx)(u.Z,{type:a.VX})}),(0,U.jsx)(Y,{style:t,children:(0,U.jsx)(E,{})}),(0,U.jsx)(i.Z,{children:(0,U.jsx)($,{style:n,children:(0,U.jsx)(Q,{})})})]})]})})})}}}]);