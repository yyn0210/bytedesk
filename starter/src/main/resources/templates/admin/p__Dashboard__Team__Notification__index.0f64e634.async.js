"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1531],{93139:function(e,t,i){var n=i(74145);t.Z=function(){var e=(0,n.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"}}}},70846:function(e,t,i){i.r(t);var n=i(93139),a=i(82045),d=i(64476),l=i(32423),o=(i(44194),i(45516)),r=i(31549),c=(d.Z.Header,d.Z.Footer,d.Z.Sider),s=d.Z.Content,f=[{label:(0,r.jsx)(a.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"}];t.default=function(){var e=(0,o.s0)(),t=(0,n.Z)(),i=t.leftSiderStyle,a=t.contentStyle;return(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(c,{style:i,children:(0,r.jsx)(l.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/team/notification/"+t.key)},defaultSelectedKeys:["data"],defaultOpenKeys:["data","statistic"],items:f})}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(s,{style:a,children:(0,r.jsx)(o.j3,{})})})]})}}}]);