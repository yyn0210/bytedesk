"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9234],{77154:function(e,t,a){var i=a(39825);t.Z=function(){var e=(0,i.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},349:function(e,t,a){a.r(t);var i=a(77154),d=a(86745),s=a(21612),n=a(50136),l=(a(67294),a(96974)),r=a(85893),c=(s.Z.Header,s.Z.Footer,s.Z.Sider),f=s.Z.Content,o=[{label:(0,r.jsx)(d.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"},{label:(0,r.jsx)(d.FormattedMessage,{id:"statistic",defaultMessage:"Statistic"}),key:"statistic"}];t.default=function(){var e=(0,l.s0)(),t=(0,i.Z)(),a=t.leftSiderStyle,d=t.contentStyle;return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c,{style:a,children:(0,r.jsx)(n.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/admin/user/"+t.key)},defaultSelectedKeys:["data"],defaultOpenKeys:["data"],items:o})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(f,{style:d,children:(0,r.jsx)(l.j3,{})})})]})}}}]);