"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2148],{77154:function(f,r,t){var n=t(39825);function a(){var i=(0,n.Z)(),d=i.isDarkMode,l=250,s={borderRight:d?"1px solid #333":"1px solid #ccc",background:d?"#141414":"#f5f5f5"},e={background:d?"#141414":"#fff"},o={borderLeft:d?"1px solid #333":"1px solid #ccc",background:d?"#141414":"#f5f5f5"},u={minHeight:120,background:d?"#141414":"#f5f5f5"};return{leftSiderStyle:s,leftSiderWidth:l,headerStyle:e,rightSiderStyle:o,contentStyle:u}}r.Z=a},45966:function(f,r,t){t.r(r);var n=t(77154),a=t(21612),i=t(50136),d=t(67294),l=t(96974),s=t(86745),e=t(85893),o=a.Z.Header,u=a.Z.Footer,M=a.Z.Sider,y=a.Z.Content,S=[{label:(0,e.jsx)(s.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"},{label:(0,e.jsx)(s.FormattedMessage,{id:"monitor",defaultMessage:"Monitor"}),key:"monitor"},{label:(0,e.jsx)(s.FormattedMessage,{id:"statistic",defaultMessage:"Statistic"}),key:"statistic"},{label:(0,e.jsx)(s.FormattedMessage,{id:"summary",defaultMessage:"Summary"}),key:"summary"}],m=function(){var E=(0,l.s0)(),c=(0,n.Z)(),h=c.leftSiderStyle,v=c.contentStyle,D=function(_){console.log("menu click ",_.key),E("/cs/thread/"+_.key)};return(0,e.jsxs)(a.Z,{children:[(0,e.jsx)(M,{style:h,children:(0,e.jsx)(i.Z,{mode:"inline",onClick:D,defaultSelectedKeys:["data"],defaultOpenKeys:["data","statistic"],items:S})}),(0,e.jsx)(a.Z,{children:(0,e.jsx)(y,{style:v,children:(0,e.jsx)(l.j3,{})})})]})};r.default=m}}]);
