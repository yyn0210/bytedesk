"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3034],{66964:function(e,t,a){var i=a(39522);t.Z=function(){var e=(0,i.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"}}}},12809:function(e,t,a){a.r(t);var i=a(66964),d=a(79434),l=a(64476),s=a(32423),n=(a(44194),a(45516)),r=a(31549),o=(l.Z.Header,l.Z.Footer,l.Z.Sider),c=l.Z.Content,f=[{label:(0,r.jsx)(d.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"},{label:(0,r.jsx)(d.FormattedMessage,{id:"statistic",defaultMessage:"Statistic"}),key:"statistic"}];t.default=function(){var e=(0,n.s0)(),t=(0,i.Z)(),a=t.leftSiderStyle,d=t.contentStyle;return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o,{style:a,children:(0,r.jsx)(s.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/marketing/blog/"+t.key)},defaultSelectedKeys:["data"],defaultOpenKeys:["data"],items:f})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(c,{style:d,children:(0,r.jsx)(n.j3,{})})})]})}}}]);