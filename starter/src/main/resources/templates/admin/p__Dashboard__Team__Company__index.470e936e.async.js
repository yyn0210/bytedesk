"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[4747],{66964:function(e,t,n){var i=n(39522);t.Z=function(){var e=(0,i.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"}}}},94087:function(e,t,n){n.r(t);var i=n(66964),o=n(64476),l=n(32423),r=(n(44194),n(79434)),f=n(31549),d=(o.Z.Header,o.Z.Footer,o.Z.Sider),c=o.Z.Content,a=[{label:(0,f.jsx)(r.FormattedMessage,{id:"info",defaultMessage:"Info"}),key:"info"}];t.default=function(){var e=(0,r.useNavigate)(),t=(0,i.Z)(),n=t.leftSiderStyle,s=t.contentStyle;return(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(d,{style:n,children:(0,f.jsx)(l.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/team/company/".concat(t.key))},defaultSelectedKeys:["info"],defaultOpenKeys:["info"],items:a})}),(0,f.jsx)(o.Z,{children:(0,f.jsx)(c,{style:s,children:(0,f.jsx)(r.Outlet,{})})})]})}}}]);