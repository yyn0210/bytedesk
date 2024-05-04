"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[325],{42110:function(x,d){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};d.Z=e},77154:function(x,d,e){var S=e(39825);function p(){var f=(0,S.Z)(),s=f.isDarkMode,g={borderRight:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#eee",width:260},C={background:s?"#141414":"#fff"},R={borderLeft:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#eee"},T={minHeight:120};return{leftSiderStyle:g,headerStyle:C,rightSiderStyle:R,contentStyle:T}}d.Z=p},31317:function(x,d,e){e.r(d),e.d(d,{default:function(){return W}});var S=e(77154),p=e(15009),f=e.n(p),s=e(99289),g=e.n(s),C=e(97857),R=e.n(C),T=e(86745);function E(r){return b.apply(this,arguments)}function b(){return b=g()(f()().mark(function r(l){return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.request)("/api/v1/role/query",{method:"GET",params:R()(R()({},l),{},{client:"web"})}));case 1:case"end":return t.stop()}},r)})),b.apply(this,arguments)}function F(r,l){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function r(l,u){return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",request("/api/v1/role/query",{method:"GET",params:{pageNumber:l,pageSize:u,client:"web"}}));case 1:case"end":return o.stop()}},r)})),j.apply(this,arguments)}var P=e(64529),Z=e(782),D=e(71381),G=(0,P.Ue)()((0,Z.mW)((0,Z.tJ)((0,D.n)(function(r,l){return{roles:[],currentRole:{label:"",key:""},setCurrentRole:function(t){var o=l().roles.find(function(n){return n.key===t});r(function(n){n.currentRole=o})},getRoles:function(){var u=g()(f()().mark(function o(){var n,i,h,m;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,E({pageNumber:0,pageSize:20});case 2:for(n=c.sent,console.log("queryRoles:",n),i=[],h=0;h<n.data.content.length;h++)m=n.data.content[h],i.push({label:m.name,key:m.value});i.length>0&&r({roles:i,currentRole:i[0]});case 7:case"end":return c.stop()}},o)}));function t(){return u.apply(this,arguments)}return t}(),deleteRoleCache:function(){return r({},!0)}}}),{name:"ROLE_STORE"}))),y=e(21612),O=e(68508),z=e(67294),B=e(48096),a=e(85893),N=function(l){console.log(l)},L=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],$=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(B.Z,{defaultActiveKey:"1",items:L,onChange:N})})},A=$,H=e(39825),I=y.Z.Sider,K=y.Z.Content,U=function(){var l=(0,H.Z)(),u=l.themeName,t=(0,S.Z)(),o=t.leftSiderStyle,n=G(function(v){return{roles:v.roles,currentRole:v.currentRole,setCurrentRole:v.setCurrentRole,getRoles:v.getRoles}}),i=n.roles,h=n.currentRole,m=n.setCurrentRole,M=n.getRoles;(0,z.useEffect)(function(){M()},[]);var c=function(k){console.log("menu click ",k.key),m(k.key)};return(0,a.jsxs)(y.Z,{children:[(0,a.jsx)(I,{theme:u,children:(0,a.jsx)(O.Z,{mode:"inline",onClick:c,items:i})}),(0,a.jsx)(y.Z,{children:(0,a.jsx)(K,{children:(0,a.jsx)(A,{})})})]})},W=U}}]);
