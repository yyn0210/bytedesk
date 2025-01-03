"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5488],{71018:function(e,t,n){n.d(t,{Az:function(){return d},Xc:function(){return y},jX:function(){return m},tu:function(){return g}});var r=n(90819),o=n.n(r),i=n(73193),c=n.n(i),u=n(89933),a=n.n(u),l=n(77667),s=n(82045);function d(e){return f.apply(this,arguments)}function f(){return(f=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/query/org",{method:"GET",params:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return p.apply(this,arguments)}function p(){return(p=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/create",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/update",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=a()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/v1/article/delete",{method:"POST",data:c()(c()({},t),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},60029:function(e,t,n){var r=n(73193),o=n.n(r),i=n(84176),c=n.n(i),u=n(89756),a=n(74145),l=n(82045),s=n(72909),d=(n(79520),n(44194)),f=n(31549),g=["placeholder","defaultValue","value","style","toolbarKeys","onChange","options"];t.Z=function(e){var t=e.placeholder,n=e.defaultValue,r=e.value,i=e.style,p=e.toolbarKeys,y=e.onChange,v=(e.options,c()(e,g)),m=(0,l.useIntl)(),h=(0,a.Z)().isDarkMode,x=(0,d.useRef)(null),w=(0,d.useRef)(null);return(0,d.useEffect)((function(){if(x.current){if(!w.current){var e=new s.cW({element:x.current,theme:h?"dark":"light",placeholder:t,content:n,toolbarKeys:p,image:{uploaderEvent:{onUploadBefore:function(e,t,n){u.yw.warning(m.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},video:{uploaderEvent:{onUploadBefore:function(e,t,n){u.yw.warning(m.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},attachment:{uploaderEvent:{onUploadBefore:function(e,t,n){u.yw.warning(m.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},onChange:function(e){"function"==typeof y&&y(e.getHtml(),e.getMarkdown())}});w.current=e}return function(){w.current&&(w.current.destroy(),w.current=null)}}}),[]),(0,d.useEffect)((function(){w.current&&r!==w.current.getHtml()&&w.current.setContent(r||"")}),[r]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",o()(o()({ref:x},v),{},{style:o()({height:"100%"},i)}))})}},47227:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(90819),o=n.n(r),i=n(89933),c=n.n(i),u=n(45332),a=n.n(u),l=n(50484),s=n(83730),d=n(80093),f=n(12265),g=n(38227),p=n(40751),y=n(56913),v=n(44194),m=n(72272),h=n(40431),x=n(89756),w=n(26305),k=n(1780),C=n(82045),Z=n(57024),b=n(31549),j=function(e){var t=e.type,n=(0,C.useIntl)(),r=(0,v.useState)(!0),i=a()(r,2),u=i[0],j=i[1],A=(0,h.u)((function(e){return e.currentOrg})),M=(0,Z.j)((function(e){return e.currentKbase})),S=(0,v.useState)(!1),P=a()(S,2),R=P[0],U=P[1],E=(0,w.v)((function(e){return{categoryTreeOptions:e.categoryTreeOptions,setCategoryResult:e.setCategoryResult,currentCategory:e.currentCategory,setCurrentCategoryUid:e.setCurrentCategoryUid}})),O=E.categoryTreeOptions,T=E.setCategoryResult,I=E.currentCategory,V=E.setCurrentCategoryUid,z=(0,k.Z)(),q=z.translateString,D=z.translateStringTranct,H=s.Z.useModal(),K=a()(H,2),L=K[0],X=K[1],B=function(){var e=c()(o()().mark((function e(t){var r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("handleSubmit: ",t),u?x.yw.loading(n.formatMessage({id:"updating"})):x.yw.loading(n.formatMessage({id:"creating"})),!u){e.next=8;break}return e.next=5,(0,m.yr)(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,(0,m.k4)(t);case 10:e.t0=e.sent;case 11:r=e.t0,console.log("createCategory response: ",r),200===r.code?(x.yw.destroy(),u?x.yw.success(n.formatMessage({id:"update.success"})):x.yw.success(n.formatMessage({id:"create.success"})),U(!1),F()):(x.yw.destroy(),x.yw.error(r.message));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=c()(o()().mark((function e(){var r,i;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getCategories"),x.yw.success(n.formatMessage({id:"loading"})),r={pageNumber:0,pageSize:50,type:t,kbUid:null==M?void 0:M.uid,orgUid:null==A?void 0:A.uid},e.next=5,(0,m.XS)(r);case 5:i=e.sent,console.log("queryCategories response: ",i),200===i.code?(T(i),x.yw.destroy()):(x.yw.destroy(),x.yw.error(i.message));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=c()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleEditCategory: ",I),j(!0),U(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleDeleteCategory: ",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){F()}),[M]);return(0,b.jsxs)("div",{children:[(0,b.jsxs)(d.Z,{gap:"small",wrap:"wrap",style:{marginBottom:5},children:[(0,b.jsx)(f.ZP,{type:"primary",size:"small",onClick:function(){j(!1),U(!0)},disabled:(null==M?void 0:M.type)!=t,children:n.formatMessage({id:"create"})}),""!==(null==I?void 0:I.uid)&&"all"!==(null==I?void 0:I.uid)&&(0,b.jsx)(f.ZP,{size:"small",onClick:N,children:n.formatMessage({id:"edit"})}),""!==(null==I?void 0:I.uid)&&"all"!==(null==I?void 0:I.uid)&&(0,b.jsx)(f.ZP,{onClick:function(){return function(e){L.confirm({title:n.formatMessage({id:"deleteTip"}),icon:(0,b.jsx)(l.Z,{}),content:"".concat(n.formatMessage({id:"deleteAffirm",defaultMessage:"Delete"}),"【").concat(q(e.name),"】？"),onOk:function(){G(e)},onCancel:function(){},okText:n.formatMessage({id:"ok"}),cancelText:n.formatMessage({id:"cancel"})})}(I)},size:"small",style:{float:"right"},danger:!0,children:n.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,b.jsx)(g.Z,{defaultSelectedKeys:[null==I?void 0:I.uid],onSelect:function(e,t){console.log("selected",e,t),0!==e.length&&V(e[0].toString())},treeData:O,blockNode:!0,titleRender:function(e){return(0,b.jsx)(p.Z,{title:q(e.title),children:D(e.title)})}}),R&&(0,b.jsx)(y.Z,{open:R,type:t,isEdit:u,onCancel:function(){U(!1)},onSubmit:B}),X]})}},94438:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(78386),o=n(93139),i=n(64476),c=n(44194),u=n(47227),a=n(77667),l=n(95772),s=n(89756),d=n(90819),f=n.n(d),g=n(89933),p=n.n(g),y=n(71018),v=n(74145),m=n(1780),h=n(73193),x=n.n(h),w=n(76711),k=n.n(w),C=n(39701),Z=n(83642),b=n(41617),j=(0,C.Ue)()((0,Z.mW)((0,Z.tJ)((0,b.n)((function(e,t){return{currentArticle:{uid:"",orgUid:""},articleResult:{data:{content:[]}},insertArticle:function(t){e((function(e){e.articleResult.data.content.unshift(t)}))},updateArticle:function(t){e((function(e){var n=e.articleResult.data.content,r=n.findIndex((function(e){return e.uid===t.uid}));-1!==r?n[r]=t:console.warn("Article with uid ".concat(t.uid," not found."))}))},setArticleResult:function(n){var r;(e({articleResult:n}),""===t().currentArticle.uid)&&((null===(r=n.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentArticle:n.data.content[0]}))},setCurrentArticle:function(n){var r=t().articleResult.data.content,o=r.findIndex((function(e){return e.uid===n.uid}));if(-1!==o){var i=[].concat(k()(r.slice(0,o)),[n],k()(r.slice(o+1))),c=x()(x()({},t().articleResult),{},{data:{content:i}});e({articleResult:c,currentArticle:n})}else console.warn("Article with the specified uid not found."),e({currentArticle:n})},removeArticle:function(n){var r=t().articleResult.data.content,o=r.findIndex((function(e){return e.uid===n}));-1!==o?e({articleResult:x()(x()({},t().articleResult),{},{data:{content:[].concat(k()(r.slice(0,o)),k()(r.slice(o+1)))}})}):console.warn("Article not found in cache:",n),t().currentArticle.uid===n&&e({currentArticle:{uid:"",orgUid:""}})},deleteArticleCache:function(){return e({},!0)}}})),{name:a.SsI}))),A=n(26305),M=n(57024),S=n(40431),P=n(83691),R=n(90136),U=n(31549),E=function(){var e=(0,v.Z)().isDarkMode,t=(0,c.useRef)(!1),n=(0,m.Z)().translateString,r=(0,S.u)((function(e){return e.currentOrg})),o=(0,M.j)((function(e){return e.currentKbase})),i=(0,A.v)((function(e){return e.currentCategory})),u=j((function(e){return{currentArticle:e.currentArticle,articleResult:e.articleResult,setCurrentArticle:e.setCurrentArticle,setArticleResult:e.setArticleResult}})),l=u.currentArticle,s=u.articleResult,d=u.setCurrentArticle,g=u.setArticleResult,h=function(){var e=p()(f()().mark((function e(){var n,c;return f()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=3;break}return console.log("isLoading: 1",t.current),e.abrupt("return");case 3:return t.current=!0,P.ZP.loading("loading"),n={pageNumber:0,pageSize:50,type:a.VX,categoryUid:"all"===(null==i?void 0:i.uid)?"":null==i?void 0:i.uid,kbUid:null==o?void 0:o.uid,orgUid:null==r?void 0:r.uid},e.next=8,(0,y.Az)(n);case 8:c=e.sent,console.log("queryArticlesByOrg: ",c),200===c.code?(P.ZP.destroy(),g(c)):(P.ZP.destroy(),P.ZP.error(c.message)),t.current=!1;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){console.log("useEffect"),h()}),[o,i]);return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(R.Z,{itemLayout:"horizontal",dataSource:s.data.content,renderItem:function(t,r){return(0,U.jsx)(R.Z.Item,{style:l.uid===t.uid?{backgroundColor:e?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){d(t)},children:(0,U.jsx)(R.Z.Item.Meta,{style:{marginLeft:"10px",color:e?"#ffffff":"#000000"},title:n(t.title)})})}})})},O=n(45332),T=n.n(O),I=n(80093),V=n(19140),z=n(73668),q=n(12265),D=n(66982),H=n(60029),K=n(82045),L=n(31816),X=n(81916),B=n(4391),F=n(33934),N=function(){var e=(0,K.useIntl)(),t=(0,v.Z)().isDarkMode,n=(0,c.useState)(!1),r=T()(n,2),o=r[0],i=r[1],u=(0,c.useState)(""),l=T()(u,2),s=l[0],d=l[1],g=(0,c.useState)(""),m=T()(g,2),h=m[0],w=m[1],k=(0,c.useState)(""),C=T()(k,2),Z=C[0],b=C[1],R=(0,c.useRef)(!1),E=(0,S.u)((function(e){return e.currentOrg})),O=(0,M.j)((function(e){return e.currentKbase})),N=(0,A.v)((function(e){return e.currentCategory})),G=j((function(e){return{currentArticle:e.currentArticle,insertArticle:e.insertArticle,setCurrentArticle:e.setCurrentArticle,updateLocalArticle:e.updateArticle}})),W=G.currentArticle,J=G.insertArticle,Q=G.setCurrentArticle,Y=G.updateLocalArticle;(0,c.useEffect)((function(){(null==W?void 0:W.kbUid)===(null==O?void 0:O.uid)&&(d(null==W?void 0:W.title),w(null==W?void 0:W.contentHtml),b(null==W?void 0:W.contentMarkdown))}),[W]);var $=function(){var t=p()(f()().mark((function t(){var n,r;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("create"),!R.current){t.next=4;break}return console.log("isLoading: 1",R.current),t.abrupt("return");case 4:return R.current=!0,P.ZP.loading(e.formatMessage({id:"creating"})),n={uid:null==W?void 0:W.uid,title:"new article",summary:"new article summary",contentHtml:"new article content",contentMarkdown:"new article content",type:a.VX,tags:["tag1","tag2"],markdown:o,published:!1,categoryUid:null==N?void 0:N.uid,kbUid:null==O?void 0:O.uid,orgUid:null==E?void 0:E.uid},console.log("create articleObject",n),t.next=10,(0,y.tu)(n);case 10:r=t.sent,console.log("createArticle response",r),200===r.code?(P.ZP.destroy(),P.ZP.info(e.formatMessage({id:"create.success"})),J(r.data),Q(r.data)):(P.ZP.destroy(),P.ZP.error(r.message)),R.current=!1;case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=p()(f()().mark((function t(){var n,r;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("save",s,h),""!==s&&""!==h){t.next=4;break}return P.ZP.error("标题或内容不能为空！"),t.abrupt("return");case 4:if(!R.current){t.next=7;break}return console.log("isLoading: 1",R.current),t.abrupt("return");case 7:return R.current=!0,P.ZP.loading(e.formatMessage({id:"updating"})),n={uid:null==W?void 0:W.uid,title:s,summary:null==W?void 0:W.summary,contentHtml:h,contentMarkdown:Z,type:null==W?void 0:W.type,tags:["tag1","tag2"],markdown:null==W?void 0:W.markdown,published:null==W?void 0:W.published,categoryUid:null==W?void 0:W.categoryUid,kbUid:null==W?void 0:W.kbUid,orgUid:null==W?void 0:W.orgUid},console.log("update articleObject",n),t.next=13,(0,y.Xc)(n);case 13:r=t.sent,console.log("updateArticle response",r),200===r.code?(P.ZP.destroy(),P.ZP.info(e.formatMessage({id:"update.success"})),Y(r.data)):(P.ZP.destroy(),P.ZP.error(r.message)),R.current=!1;case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=x()(x()({},W),{},{title:s,contentHtml:h,contentMarkdown:Z});Y(e)}),[s,h,Z]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("div",{children:(0,U.jsxs)(I.Z,{gap:10,style:{marginBottom:10,marginTop:5},children:[(0,U.jsx)(V.Z,{size:"large",placeholder:"title",value:s,style:{background:t?"#141414":"#f5f5f5"},onChange:function(e){console.log("title onChange:",e.target.value),d(e.target.value)}}),(0,U.jsx)(z.Z,{checkedChildren:"Markdown",unCheckedChildren:"Html",onChange:function(e){console.log("switch to ".concat(e)),i(e)},defaultValue:o}),(0,U.jsx)(q.ZP,{type:"primary",icon:(0,U.jsx)(L.Z,{}),onClick:$,children:"新建"}),(0,U.jsx)(q.ZP,{type:"default",icon:(0,U.jsx)(X.Z,{}),onClick:_,children:"保存"}),(0,U.jsx)(q.ZP,{type:"default",icon:(0,U.jsx)(B.Z,{}),onClick:function(){console.log("handlePreviewArticle",W),window.open("".concat((0,F.kG)(),"/kb/").concat(null==O?void 0:O.uid,"/").concat(null==W?void 0:W.uid))},children:"预览"})]})}),o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(D.ZP,{style:{height:"100%"},value:Z,enablePreview:!0,onChange:function(e,t){console.log("markdown onChange value",e,t),b(e),w(e)}})}),!o&&(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(H.Z,{placeholder:"article content..",value:h,onChange:function(e,t){console.log("aiEditor onChange value",e,t),w(e),b(t)}})})]})},G=i.Z.Sider,W=i.Z.Content,J=function(){var e=(0,o.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(l.w,{children:(0,U.jsxs)(r.Z,{children:[(0,U.jsx)(s.ZP,{}),(0,U.jsxs)(i.Z,{children:[(0,U.jsx)(G,{style:t,children:(0,U.jsx)(u.Z,{type:a.VX})}),(0,U.jsx)(G,{style:t,children:(0,U.jsx)(E,{})}),(0,U.jsx)(i.Z,{children:(0,U.jsx)(W,{style:n,children:(0,U.jsx)(N,{})})})]})]})})})}}}]);