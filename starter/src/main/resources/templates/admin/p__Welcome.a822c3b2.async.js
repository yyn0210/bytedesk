"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8185],{97986:function(e,n,t){t.d(n,{Kq:function(){return u},RL:function(){return j}});var i=t(90228),r=t.n(i),l=t(26068),s=t.n(l),a=t(87999),c=t.n(a),o=t(64453),d=t(45234);function u(e){return x.apply(this,arguments)}function x(){return(x=c()(r()().mark((function e(n){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/org/create",{method:"POST",data:s()(s()({},n),{},{client:o.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=c()(r()().mark((function e(n){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/org/update",{method:"POST",data:s()(s()({},n),{},{client:o.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},84114:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var i=t(90228),r=t.n(i),l=t(87999),s=t.n(l),a=t(37240),c=t(97986),o=t(65098),d=t(64453),u=t(74592),x=t(45234),j=t(16242),h=t(75271),Z=t(14604),f=t(26068),p=t.n(f),g=t(48305),v=t.n(g),m=t(7283),y=t(6347),b=t(14354),k=t(1088),w=t(89297),F=t(80652),A=t(52676),O=function(){var e=(0,x.useAccess)(),n=(0,h.useState)([]),t=v()(n,2),i=t[0],r=t[1];(0,h.useEffect)((function(){l()}),[]);var l=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){console.log("fetch data failed",e)}))},s={data:i,xField:"date",yField:"value",colorField:"type",axis:{y:{labelFormatter:function(e){return"".concat(e).replace(/\d{1,3}(?=(\d{3})+$)/g,(function(e){return"".concat(e,",")}))}}},scale:{color:{range:["#30BF78","#F4664A","#FAAD14"]}},style:{lineWidth:2,lineDash:function(e){if("register"===e[0].type)return[4,4]},opacity:function(e){if("register"!==e[0].type)return.5}}};return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(x.Access,{accessible:e.canDebug(),fallback:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.FormattedMessage,{id:d.h5w})}),children:[(0,A.jsx)(m.Z,{orientation:"left",children:"人工会话数据"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"正在排队人数",children:(0,A.jsx)(w.Z,{title:"正在排队人数",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"人工正在接待人数",children:(0,A.jsx)(w.Z,{title:"人工正在接待人数",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"人工已接待人数",children:(0,A.jsx)(w.Z,{title:"人工已接待人数",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"人工已接待会话数",children:(0,A.jsx)(w.Z,{title:"人工已接待会话数",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"预警会话量",children:(0,A.jsx)(w.Z,{title:"预警会话量",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"待处理留言量",children:(0,A.jsx)(w.Z,{title:"待处理留言量",value:0})})})]}),(0,A.jsx)(y.Z,{children:(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"当前在线接待客服数",children:(0,A.jsx)(w.Z,{title:"当前在线接待客服数",value:0})})})}),(0,A.jsx)(m.Z,{orientation:"left",children:"机器人会话数据"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"机器人接待人次",children:(0,A.jsx)(w.Z,{title:"机器人接待人次",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"机器人接待会话量",children:(0,A.jsx)(w.Z,{title:"机器人接待会话量",value:0})})})]}),(0,A.jsx)(m.Z,{orientation:"left",children:"绩效考核指标"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"3分钟人工回复率",children:(0,A.jsx)(w.Z,{title:"3分钟人工回复率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"平均人工首次响应时长",children:(0,A.jsx)(w.Z,{title:"平均人工首次响应时长",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"平均人工响应时长",children:(0,A.jsx)(w.Z,{title:"平均人工响应时长",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"平均人工服务时长",children:(0,A.jsx)(w.Z,{title:"平均人工服务时长",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"平均排队等待时长",children:(0,A.jsx)(w.Z,{title:"平均排队等待时长",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"评价满意率",children:(0,A.jsx)(w.Z,{title:"评价满意率",value:0})})})]}),(0,A.jsx)(m.Z,{orientation:"left",children:"工单数据"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"待分配工单",children:(0,A.jsx)(w.Z,{title:"待分配工单",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"处理中工单",children:(0,A.jsx)(w.Z,{title:"处理中工单",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"处理结束工单",children:(0,A.jsx)(w.Z,{title:"处理结束工单",value:0})})})]}),!1,(0,A.jsx)(m.Z,{orientation:"left",children:"接待分布时间折线图"}),(0,A.jsx)(F.Z,p()({},s))]})})},C=t(85185),M=t(78677),S=function(){var e=(0,x.useAccess)(),n=((0,h.useMemo)((function(){return!0}),[]),{data:{type:"fetch",value:"https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json"},xField:"月份",yField:"月均降雨量",colorField:"name",group:!0,style:{inset:5}});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(x.Access,{accessible:e.canDebug(),fallback:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.FormattedMessage,{id:d.h5w})}),children:[(0,A.jsx)(C.default,{onChange:function(e,n){console.log(e,n)}}),(0,A.jsx)(m.Z,{orientation:"left",children:"绩效考核数据"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"30秒应答率",children:(0,A.jsx)(w.Z,{title:"30秒应答率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"3分钟人工回复率",children:(0,A.jsx)(w.Z,{title:"3分钟人工回复率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"评价满意率",children:(0,A.jsx)(w.Z,{title:"评价满意率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"平均人工响应时长",children:(0,A.jsx)(w.Z,{title:"平均人工响应时长",value:0})})})]}),(0,A.jsx)(m.Z,{orientation:"left",children:"人工接待数据"}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"接待人次",children:(0,A.jsx)(w.Z,{title:"接待人次",value:0})})}),(0,A.jsx)(m.Z,{orientation:"left",children:"机器人接待数据"}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"接待人次",children:(0,A.jsx)(w.Z,{title:"接待人次",value:0})})}),(0,A.jsx)(m.Z,{orientation:"left",children:"工单数据"}),(0,A.jsx)(y.Z,{children:(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"处理数量",children:(0,A.jsx)(w.Z,{title:"处理数量",value:0})})})}),(0,A.jsx)(m.Z,{orientation:"left",children:"客服分布"}),(0,A.jsx)(M.Z,p()({},n)),(0,A.jsx)(m.Z,{orientation:"left",children:"渠道分布"}),(0,A.jsx)(M.Z,p()({},n)),(0,A.jsx)(m.Z,{orientation:"left",children:"地理位置分布"}),(0,A.jsx)(M.Z,p()({},n))]})})},z=t(71275),P=t(23942),D=t(98095),I=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return(0,A.jsx)("a",{children:e})}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e,n){var t=n.tags;return(0,A.jsx)(A.Fragment,{children:t.map((function(e){var n=e.length>5?"geekblue":"green";return"loser"===e&&(n="volcano"),(0,A.jsx)(z.Z,{color:n,children:e.toUpperCase()},e)}))})}},{title:"Action",key:"action",render:function(e,n){return(0,A.jsxs)(P.Z,{size:"middle",children:[(0,A.jsxs)("a",{children:["Invite ",n.name]}),(0,A.jsx)("a",{children:"Delete"})]})}}],L=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}],N=function(){var e=(0,x.useAccess)();(0,h.useMemo)((function(){return!0}),[]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(x.Access,{accessible:e.canDebug(),fallback:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.FormattedMessage,{id:d.h5w})}),children:[(0,A.jsx)(m.Z,{orientation:"left",children:"绩效考核数据"}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"首响超时率",children:(0,A.jsx)(w.Z,{title:"首响超时率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"应答超时率",children:(0,A.jsx)(w.Z,{title:"应答超时率",value:0})})}),(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"评价不满意率",children:(0,A.jsx)(w.Z,{title:"评价不满意率",value:0})})})]}),(0,A.jsx)(m.Z,{orientation:"left",children:"工单数据"}),(0,A.jsx)(y.Z,{children:(0,A.jsx)(b.Z,{span:4,children:(0,A.jsx)(k.Z,{title:"超时",children:(0,A.jsx)(w.Z,{title:"超时",value:0})})})}),(0,A.jsx)(m.Z,{orientation:"left",children:"预警明细"}),(0,A.jsx)(D.Z,{columns:I,dataSource:L})]})})},q=j.Z.Content,B=function(e){console.log(e)},J=[{key:"today",label:"今日实时",children:(0,A.jsx)(O,{})},{key:"history",label:"历史数据",children:(0,A.jsx)(S,{})},{key:"warn",label:"预警数据",children:(0,A.jsx)(N,{})}],T={marginLeft:20,marginTop:10,marginRight:20},K=function(){var e=((0,x.useModel)("@@initialState").initialState||{}).userInfo,n=(0,o.u)((function(e){return e.setCurrentOrg})),t=function(){var t=s()(r()().mark((function t(){var i,l,s;return r()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&void 0!==e){t.next=3;break}return console.log("before getProfile",e),t.abrupt("return");case 3:if(null!=(null==e?void 0:e.currentOrganization)&&void 0!==(null==e?void 0:e.currentOrganization)){t.next=15;break}if(console.log("before initOrganization",e),(null==e?void 0:e.platform)!==d.Ogg){t.next=14;break}return a.yw.loading("首次登录，创建组织中，请稍后..."),i=null!=e&&e.mobile?null==e?void 0:e.mobile:null==e?void 0:e.email,l={name:"MyCompany"+i,code:i,logo:"https://chainsnow.oss-cn-shenzhen.aliyuncs.com/avatars/admin_default_avatar.png",description:"MyCompany description"},t.next=11,(0,c.Kq)(l);case 11:s=t.sent,console.log("createOrg response:",s),200===s.code?(n(s.data),a.yw.destroy(),a.yw.success("创建组织成功"),window.location.reload()):(a.yw.destroy(),a.yw.error(s.message));case 14:return t.abrupt("return");case 15:console.log("after initOrganization"),n(null==e?void 0:e.currentOrganization);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,h.useEffect)((function(){t(),(0,u.Bc)()&&console.log("weiyuaiSaas")}),[e]),(0,A.jsx)(j.Z,{children:(0,A.jsx)(q,{style:T,children:(0,A.jsx)(Z.Z,{defaultActiveKey:"today",items:J,onChange:B})})})}}}]);