"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2949],{93139:function(e,t,a){var d=a(74145);t.Z=function(){var e=(0,d.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh",overflow:"auto"}}}},45717:function(e,t,a){a.r(t);var d=a(93139),i=a(7206),n=a(64476),l=a(32423),r=(a(44194),a(45516)),s=a(31549),o=(n.Z.Header,n.Z.Footer,n.Z.Sider),c=n.Z.Content,f=[{label:(0,s.jsx)(i.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"}];t.default=function(){var e=(0,r.s0)(),t=(0,d.Z)(),a=t.leftSiderStyle,i=t.contentStyle;return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(o,{style:a,children:(0,s.jsx)(l.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/cs/message/"+t.key)},defaultSelectedKeys:["data"],defaultOpenKeys:["data","statistic"],items:f})}),(0,s.jsx)(n.Z,{children:(0,s.jsx)(c,{style:i,children:(0,s.jsx)(r.j3,{})})})]})}}}]);