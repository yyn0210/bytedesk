"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3186],{21544:function(e,t,i){var s=i(93454);t.Z=function(){var e=(0,s.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},99555:function(e,t,i){i.r(t);var s=i(21544),r=i(43650),d=i(94031),n=(i(75271),i(5791)),l=i(18735),c=i(52676),o=r.Z.Sider,a=r.Z.Content,f=[{label:(0,c.jsx)(l.FormattedMessage,{id:"visitor",defaultMessage:"Visitor"}),key:"visitor/data"},{label:(0,c.jsx)(l.FormattedMessage,{id:"customer",defaultMessage:"Customer"}),key:"customer/data"}];t.default=function(){var e=(0,n.s0)(),t=(0,s.Z)(),i=t.leftSiderStyle,l=t.contentStyle;return(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(o,{style:i,children:(0,c.jsx)(d.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/cs/crm/"+t.key)},defaultSelectedKeys:["visitor/data"],items:f})}),(0,c.jsx)(r.Z,{children:(0,c.jsx)(a,{style:l,children:(0,c.jsx)(n.j3,{})})})]})}}}]);