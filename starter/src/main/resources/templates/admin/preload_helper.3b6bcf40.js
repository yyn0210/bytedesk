!function(){"use strict";var t="/admin/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"admin","b":"webpack","f":[["p__Dashboard__Service__Quality__QualityStatistic.d15dcb00.async.js",13],["p__Dashboard__Robot__Thread__index.95fb529f.async.js",49],["p__Dashboard__Service__Visitor__VisitorTable.2e05ed3a.async.js",58],["p__Dashboard__Knowledge__Faq__FaqData.f9c908ef.chunk.css",79],["p__Dashboard__Knowledge__Faq__FaqData.32adf370.async.js",79],["p__Dashboard__Service__Black__BlackStatistic.80674ec5.async.js",210],["274.666c7fa6.async.js",274],["p__Dashboard__Admin__Push__PushData.919bf3a8.async.js",275],["p__Dashboard__Robot__Message__index.56095c2f.async.js",294],["p__Dashboard__Service__Monitor__index.08cce90a.async.js",296],["p__Dashboard__Knowledge__Taboo__TabooStatistic.e98d7630.async.js",319],["p__Dashboard__Knowledge__index.02672e02.async.js",363],["p__Dashboard__Team__Notice__index.d35af911.async.js",589],["660.59175bea.async.js",660],["p__Dashboard__Service__Transfer__TransferTable.55ac24ec.async.js",1048],["p__Dashboard__Team__Channel__ChannelStatistic.7ac9c416.async.js",1089],["p__Dashboard__Feedback__index.09672d56.async.js",1179],["1388.86e7f649.async.js",1388],["p__Dashboard__Team__Message__MessageTable.836ab81a.async.js",1398],["1440.2ab5b331.async.js",1440],["p__Dashboard__Service__Queue__QueueStatistic.087b11a5.async.js",1488],["p__Dashboard__Team__Upload__UploadTable.c3c4231f.async.js",1510],["p__Dashboard__Setting__Money__index.4e8c5964.async.js",1589],["p__Dashboard__Service__Agent__index.7ef6c8e8.async.js",1642],["1675.3621c095.async.js",1675],["p__Auth__Register__index.0e312980.async.js",1730],["p__Dashboard__Liangshibao__Course__index.4c3d84b8.async.js",1742],["p__Dashboard__Service__Transfer__TransferStatistic.e952f2f4.async.js",2001],["p__Dashboard__Ticket__index.f88edd74.async.js",2005],["p__Dashboard__Service__Quality__QualityTable.73d2ac29.async.js",2034],["p__Dashboard__Service__Thread__ThreadStatistic.253ae622.async.js",2097],["p__Dashboard__Service__Thread__index.b9f67632.async.js",2148],["2328.82eefe9a.async.js",2328],["p__Dashboard__Team__Thread__ThreadMonitor.3c372991.async.js",2375],["p__Dashboard__Team__Notice__NoticeStatistic.cdad6db0.async.js",2386],["p__Dashboard__Plugins__index.0630c216.async.js",2494],["p__Dashboard__Robot__LlmModel__index.d4c71695.async.js",2520],["p__404.26960da8.async.js",2571],["p__Dashboard__Team__Thread__ThreadSummary.4adc695e.async.js",2618],["p__Dashboard__Team__Action__ActionStatistic.b31912d2.async.js",2658],["p__Dashboard__Service__Tag__TagTable.c51d7fdd.async.js",2701],["p__Dashboard__Team__Thread__index.00b2daa8.async.js",2708],["p__Dashboard__Team__Notice__NoticeTable.cab15d76.async.js",2874],["p__Dashboard__Knowledge__AutoReply__AutoReplyStatistic.4c693154.async.js",2930],["p__Dashboard__Service__Message__index.eafd8f1b.async.js",2949],["p__Dashboard__Team__Message__MessageStatistic.db748dfc.async.js",2992],["p__Dashboard__Robot__Thread__ThreadStatistic.3e387168.async.js",3031],["3082.dd344fa0.async.js",3082],["3123.83887dfa.async.js",3123],["p__Dashboard__Marketing__Email__EmailStatistic.66834eeb.async.js",3151],["p__Dashboard__Liangshibao__Media__index.017c4299.async.js",3165],["p__Dashboard__Team__Channel__ChannelTable.974d1691.async.js",3231],["3315.952a5838.async.js",3315],["p__Dashboard__Knowledge__Keyword__KeywordData.f9c908ef.chunk.css",3340],["p__Dashboard__Knowledge__Keyword__KeywordData.29a84cee.async.js",3340],["p__Dashboard__Robot__Thread__ThreadTable.de40b467.async.js",3398],["p__Dashboard__Service__Thread__ThreadTable.5de14e03.async.js",3537],["p__Dashboard__Service__LeaveMsg__index.994027e5.async.js",3621],["3624.b953e560.async.js",3624],["p__Dashboard__Knowledge__QuickReply__QuickReplyStatistic.9bc2a0e9.async.js",3656],["p__Dashboard__Service__Visitor__index.51f9ad57.async.js",3675],["p__Dashboard__Setting__Notice__index.abb3fa4f.async.js",3703],["p__Dashboard__Quartz__index.2f2871f6.chunk.css",3848],["p__Dashboard__Quartz__index.c3182cbc.async.js",3848],["3861.b40d886e.async.js",3861],["p__Dashboard__Team__Upload__index.9666aa17.async.js",3872],["3874.7a3e125b.async.js",3874],["3933.85131e8f.async.js",3933],["4153.ac98d892.async.js",4153],["p__Dashboard__Knowledge__Llm__LlmData.f9c908ef.chunk.css",4167],["p__Dashboard__Knowledge__Llm__LlmData.a6ba4734.async.js",4167],["p__Dashboard__Team__Role__index.eba7bbc1.async.js",4325],["4344.84e6cdb7.chunk.css",4344],["4344.d5419258.async.js",4344],["p__Dashboard__Team__Action__ActionTable.24ef317a.async.js",4376],["p__Dashboard__Knowledge__Llm__LlmStatistic.637a6add.async.js",4422],["p__Dashboard__Team__Upload__UploadStatistic.ca8a16ba.async.js",4443],["4455.23922333.async.js",4455],["p__Dashboard__Service__Message__MessageStatistic.9ce4eae3.async.js",4460],["p__Dashboard__Admin__User__UserStatistic.5db2837c.async.js",4523],["4542.5e3a7ef5.async.js",4542],["4575.06da2da4.async.js",4575],["p__Dashboard__Crm__VisitorTable.a36162a8.async.js",4580],["p__Dashboard__Admin__Push__PushStatistic.c07420c1.async.js",4586],["4604.10a00896.async.js",4604],["4643.c8ea1932.async.js",4643],["p__Dashboard__Team__Channel__index.af98282a.async.js",4656],["p__Dashboard__Admin__Pay__index.958ca7c8.async.js",4657],["p__Dashboard__Team__Company__index.bc1304ff.async.js",4747],["4921.cd265768.async.js",4921],["p__Dashboard__Service__Channel__index.e52660ed.async.js",5131],["5139.8613a7c6.async.js",5139],["5161.2dfff018.async.js",5161],["p__Dashboard__Service__Visitor__VisitorStatistic.fae62ea1.async.js",5206],["p__Dashboard__Crm__index.8c224145.async.js",5230],["5248.a6211386.async.js",5248],["p__OAuth__Google.623669b1.async.js",5279],["p__Dashboard__Meiyu__index.14222956.async.js",5306],["p__Dashboard__Service__Tag__index.65f8f7bb.async.js",5387],["p__Dashboard__Doceditor__index.f9c908ef.chunk.css",5488],["p__Dashboard__Doceditor__index.f2450ee5.async.js",5488],["p__Dashboard__Crm__CrmStatistic.495a2254.async.js",5520],["p__Dashboard__Liangshibao__Category__index.8fea9553.async.js",5522],["5597.7dbdede5.async.js",5597],["5666.c393348f.async.js",5666],["p__Dashboard__Service__Rate__index.c55cd70d.async.js",5684],["p__Dashboard__Knowledge__Keyword__index.1b2b2d18.async.js",5847],["p__Dashboard__Admin__Pay__PayStatistic.07895515.async.js",5851],["p__Dashboard__Service__Transfer__index.7bf06eaf.async.js",5906],["p__Dashboard__Knowledge__Article__ArticleData.f9c908ef.chunk.css",5957],["p__Dashboard__Knowledge__Article__ArticleData.55d3e2a3.async.js",5957],["p__Dashboard__Knowledge__QuickReply__index.1177a871.async.js",6037],["p__Dashboard__Knowledge__AutoReply__AutoReplyData.f9c908ef.chunk.css",6130],["p__Dashboard__Knowledge__AutoReply__AutoReplyData.5d4cae92.async.js",6130],["t__plugin-layout__Layout.5012e1ab.chunk.css",6301],["t__plugin-layout__Layout.4b2bcd2d.async.js",6301],["6610.8e947401.async.js",6610],["p__Dashboard__Service__Queue__QueueTable.fdad9b81.async.js",6668],["p__Dashboard__Setting__Server__index.c508d60a.async.js",6676],["p__Dashboard__Robot__index.cb670aa5.chunk.css",6693],["p__Dashboard__Robot__index.44f606d2.async.js",6693],["p__Dashboard__Setting__Basic__index.0183860c.async.js",6766],["p__Dashboard__Team__Thread__ThreadStatistic.5787d2c9.async.js",6771],["p__Dashboard__Knowledge__AutoReply__index.c0a565d4.async.js",6778],["p__Dashboard__Service__Rate__RateTable.7b1ab76d.async.js",6900],["p__Dashboard__Knowledge__Article__ArticleStatistic.0952bd46.async.js",6906],["p__Dashboard__Service__Tag__TagStatistic.73283f63.async.js",7080],["7100.862cadf6.async.js",7100],["p__Dashboard__Team__Group__GroupTable.7f5a3f6c.async.js",7139],["p__Dashboard__Service__Thread__ThreadMonitor.28ca746e.async.js",7270],["p__Dashboard__Knowledge__Taboo__TabooData.f9c908ef.chunk.css",7445],["p__Dashboard__Knowledge__Taboo__TabooData.a535d1c4.async.js",7445],["p__Dashboard__Setting__index.5bd01026.async.js",7469],["p__Dashboard__Admin__User__UserData.65f4b7ef.async.js",7586],["7671.0332deb5.async.js",7671],["p__Dashboard__Service__Message__MessageTable.e0f7f596.async.js",7788],["p__Dashboard__Robot__Template__index.032045ef.async.js",7861],["p__Dashboard__Team__Member__index.f9c908ef.chunk.css",7960],["p__Dashboard__Team__Member__index.fbd9089b.async.js",7960],["p__Dashboard__Knowledge__Faq__FaqStatistic.f3420e78.async.js",8041],["8095.d7efdb9a.async.js",8095],["p__Dashboard__Admin__Push__index.36eca4c4.async.js",8152],["p__Dashboard__Knowledge__Taboo__index.88114594.async.js",8158],["p__Dashboard__Marketing__index.1f07f909.async.js",8164],["p__Welcome.5470fbc4.async.js",8185],["p__OAuth__Github.f024950c.async.js",8250],["p__Dashboard__Service__LeaveMsg__LeaveMsgTable.8aeec4b7.async.js",8326],["p__Dashboard__Zhaobiao__index.8fec0022.async.js",8327],["p__Dashboard__Service__Thread__ThreadSummary.6a1af985.async.js",8390],["p__Dashboard__Service__LeaveMsg__LeaveMsgStatistic.f7f8eb3c.async.js",8412],["p__Dashboard__Tiku__index.ad56837a.async.js",8455],["p__Dashboard__Team__Action__index.4029be81.async.js",8483],["p__Dashboard__Team__Message__index.b2a02a4e.async.js",8491],["p__Dashboard__Robot__Message__MessageStatistic.9d17a865.async.js",8523],["p__Dashboard__Knowledge__Article__index.4e48462c.async.js",8587],["p__Dashboard__Admin__Pay__PayData.f6183a0b.async.js",8726],["p__Dashboard__Knowledge__Faq__index.5bd6b274.async.js",8801],["p__Dashboard__Marketing__Email__index.f1d4056b.async.js",8873],["p__Dashboard__Service__Black__BlackTable.7d2e2c9c.async.js",8956],["p__Dashboard__Service__Rate__RateStatistic.ce076cdd.async.js",9043],["p__Dashboard__Team__Thread__ThreadTable.6ddbd6eb.async.js",9077],["9079.cf7264ff.async.js",9079],["9132.1b233c0d.async.js",9132],["p__Dashboard__Robot__Message__MessageTable.03801598.async.js",9199],["p__Dashboard__Admin__User__index.28a42cb1.async.js",9234],["p__Dashboard__Setting__Profile__index.c91ac5c6.async.js",9290],["p__Dashboard__Team__Group__GroupStatistic.48c4e39b.async.js",9346],["p__Auth__Login__index.f8b43fac.async.js",9368],["p__Dashboard__Knowledge__Keyword__KeywordStatistic.e08c4b3a.async.js",9397],["p__Dashboard__Setting__Certification__index.7381bad6.async.js",9400],["p__Dashboard__Knowledge__Llm__index.7be9a2a4.async.js",9450],["9451.af7ed167.async.js",9451],["9485.32bb9ca6.async.js",9485],["p__Dashboard__Service__Quality__index.74d50655.async.js",9505],["p__Dashboard__Knowledge__QuickReply__QuickReplyData.f9c908ef.chunk.css",9584],["p__Dashboard__Knowledge__QuickReply__QuickReplyData.721e45ec.async.js",9584],["p__Dashboard__Marketing__Email__EmailData.f9c908ef.chunk.css",9590],["p__Dashboard__Marketing__Email__EmailData.d7ef15e8.async.js",9590],["p__Dashboard__Service__Queue__index.fd3fd033.async.js",9614],["p__Dashboard__Service__Black__index.bb87d214.async.js",9639],["p__Dashboard__Crm__CrmTable.ebbf9a52.async.js",9710],["p__Dashboard__Team__Company__CompanyInfo.c323c79a.async.js",9814],["p__Dashboard__Service__Workgroup__index.08c17f90.async.js",9828],["p__Dashboard__Team__Group__index.24dc0d48.async.js",9870],["p__Dashboard__Service__Statistic__index.dd1bcec5.async.js",9967]],"r":{"/*":[37,104],"/":[17,81,104,114,115,162],"/welcome":[13,48,80,84,91,127,134,140,144,17,81,104,114,115,162],"/kb":[11,17,81,104,114,115,162],"/ticket":[28,17,81,104,114,115,162],"/feedback":[16,17,81,104,114,115,162],"/marketing":[143,17,81,104,114,115,162],"/crm":[94,17,81,104,114,115,162],"/plugins":[35,17,81,104,114,115,162],"/meiyu":[13,17,48,58,77,84,91,92,95,97,104,127,134,140,162,81,114,115],"/tiku":[13,17,48,58,84,91,92,95,104,127,134,140,150,162,81,114,115],"/zhaobiao":[13,17,48,58,84,91,92,95,104,127,134,140,147,162,81,114,115],"/quartz":[13,17,48,58,62,63,84,91,92,95,104,127,134,140,162,81,114,115],"/setting":[132,17,81,104,114,115,162],"/doceditor":[13,48,58,72,73,77,89,91,99,100,127,134,162,171],"/auth/login":[13,32,58,84,91,127,134,162,167,172],"/auth/register":[13,25,32,58,91,127,134,162],"/oauth/github":[145],"/oauth/google":[96],"/team/member":[13,17,48,58,84,91,92,95,104,127,134,137,138,140,162,81,114,115],"/team/role":[71,84,17,81,104,114,115,162],"/team/group":[183,17,81,104,114,115,162],"/team/thread":[41,17,81,104,114,115,162],"/team/message":[152,17,81,104,114,115,162],"/team/action":[151,17,81,104,114,115,162],"/team/notice":[12,17,81,104,114,115,162],"/team/channel":[86,17,81,104,114,115,162],"/team/upload":[65,17,81,104,114,115,162],"/team/company":[88,17,81,104,114,115,162],"/cs/agent":[6,13,19,23,47,48,58,64,67,68,77,84,91,116,127,134,162,17,81,104,114,115],"/cs/wgroup":[6,13,19,47,48,58,64,67,68,77,84,91,127,134,162,182,17,81,104,114,115],"/cs/queue":[178,17,81,104,114,115,162],"/cs/thread":[31,17,81,104,114,115,162],"/cs/message":[44,17,81,104,114,115,162],"/cs/leavemsg":[57,17,81,104,114,115,162],"/cs/rate":[105,17,81,104,114,115,162],"/cs/tag":[98,17,81,104,114,115,162],"/cs/channel":[47,48,52,67,77,84,90,91,95,127,134,17,81,104,114,115,162],"/cs/transfer":[108,17,81,104,114,115,162],"/cs/monitor":[9,17,81,104,114,115,162],"/cs/quality":[173,17,81,104,114,115,162],"/cs/visitor":[60,17,81,104,114,115,162],"/cs/black":[179,17,81,104,114,115,162],"/cs/statistic":[184,17,81,104,114,115,162],"/ai/robot":[6,13,19,47,48,58,64,77,84,91,119,120,127,134,162,17,81,104,114,115],"/ai/model":[36,48,77,85,91,95,127,162,17,81,104,114,115],"/ai/template":[84,136,17,81,104,114,115,162],"/ai/thread":[1,17,81,104,114,115,162],"/ai/message":[8,17,81,104,114,115,162],"/kb/article":[13,48,58,66,77,91,127,134,154,162,11,17,81,104,114,115],"/kb/llm":[13,48,58,66,77,91,127,134,162,170,11,17,81,104,114,115],"/kb/keyword":[13,48,58,66,77,91,106,127,134,162,11,17,81,104,114,115],"/kb/faq":[13,48,58,66,77,91,127,134,156,162,11,17,81,104,114,115],"/kb/autoreply":[13,48,58,66,77,91,123,127,134,162,11,17,81,104,114,115],"/kb/quickreply":[13,48,58,66,77,91,111,127,134,162,11,17,81,104,114,115],"/kb/taboo":[13,48,58,66,77,91,127,134,142,162,11,17,81,104,114,115],"/marketing/email":[13,48,58,66,77,91,127,134,157,162,143,17,81,104,114,115],"/crm/customer":[13,17,48,58,84,91,92,95,104,127,134,140,162,180,94,81,114,115],"/crm/visitor":[13,17,48,58,82,84,91,92,95,104,127,134,140,162,94,81,114,115],"/crm/statistic":[101,94,17,81,104,114,115,162],"/liangshibao/category":[13,17,48,58,84,91,92,95,102,104,127,134,140,162,81,114,115],"/liangshibao/course":[13,17,26,48,58,84,91,92,95,104,127,134,140,162,81,114,115],"/liangshibao/media":[13,17,48,50,58,84,91,92,95,104,127,134,140,162,81,114,115],"/setting/profile":[6,13,58,91,127,134,162,165,132,17,81,104,114,115],"/setting/basic":[121,134,132,17,81,104,114,115,162],"/setting/certification":[13,58,84,91,127,134,162,169,132,17,81,104,114,115],"/setting/money":[22,84,132,17,81,104,114,115,162],"/setting/server":[91,118,172,132,17,81,104,114,115,162],"/setting/notice":[61,132,17,81,104,114,115,162],"/admin/user":[164,17,81,104,114,115,162],"/admin/pay":[87,17,81,104,114,115,162],"/admin/push":[141,17,81,104,114,115,162],"/team/group/data":[13,17,48,58,84,91,92,95,104,127,128,134,140,162,183,81,114,115],"/team/group/statistic":[166,183,17,81,104,114,115,162],"/team/thread/data":[13,17,48,58,84,91,92,95,103,104,127,134,140,160,162,41,81,114,115],"/team/thread/monitor":[33,41,17,81,104,114,115,162],"/team/thread/statistic":[122,41,17,81,104,114,115,162],"/team/thread/summary":[13,17,38,48,58,84,91,92,95,104,127,134,140,162,41,81,114,115],"/team/message/data":[13,17,18,48,58,84,91,92,95,104,127,134,140,162,152,81,114,115],"/team/message/statistic":[45,152,17,81,104,114,115,162],"/team/action/data":[13,17,48,58,74,84,91,92,95,104,127,134,140,162,151,81,114,115],"/team/action/statistic":[39,151,17,81,104,114,115,162],"/team/notice/data":[13,17,42,48,58,84,91,92,95,104,127,134,140,162,12,81,114,115],"/team/notice/statistic":[34,12,17,81,104,114,115,162],"/team/channel/data":[13,17,48,51,58,84,91,92,95,104,127,134,140,162,86,81,114,115],"/team/channel/statistic":[15,86,17,81,104,114,115,162],"/team/upload/data":[13,17,21,48,58,84,91,92,95,104,127,134,140,162,65,81,114,115],"/team/upload/statistic":[76,65,17,81,104,114,115,162],"/team/company/info":[6,13,58,91,127,134,162,172,181,88,17,81,104,114,115],"/cs/queue/data":[13,17,48,58,84,91,92,95,104,117,127,134,140,162,178,81,114,115],"/cs/queue/statistic":[20,178,17,81,104,114,115,162],"/cs/thread/data":[13,17,48,56,58,84,91,92,95,103,104,127,134,140,162,31,81,114,115],"/cs/thread/monitor":[129,31,17,81,104,114,115,162],"/cs/thread/statistic":[30,31,17,81,104,114,115,162],"/cs/thread/summary":[13,17,48,58,84,91,92,95,104,127,134,140,148,162,31,81,114,115],"/cs/message/data":[13,17,48,58,84,91,92,95,104,127,134,135,140,162,44,81,114,115],"/cs/message/statistic":[78,44,17,81,104,114,115,162],"/cs/leavemsg/data":[13,17,48,58,84,91,92,95,104,127,134,140,146,162,57,81,114,115],"/cs/leavemsg/statistic":[149,57,17,81,104,114,115,162],"/cs/rate/data":[13,17,48,58,84,91,92,95,104,124,127,134,140,162,105,81,114,115],"/cs/rate/statistic":[159,105,17,81,104,114,115,162],"/cs/tag/data":[13,17,40,48,58,84,91,92,95,104,127,134,140,162,98,81,114,115],"/cs/tag/statistic":[126,98,17,81,104,114,115,162],"/cs/transfer/data":[13,14,17,48,58,84,91,92,95,104,127,134,140,162,108,81,114,115],"/cs/transfer/statistic":[27,108,17,81,104,114,115,162],"/cs/quality/data":[13,17,29,48,58,84,91,92,95,104,127,134,140,162,173,81,114,115],"/cs/quality/statistic":[0,173,17,81,104,114,115,162],"/cs/visitor/data":[2,13,17,48,58,84,91,92,95,104,127,134,140,162,60,81,114,115],"/cs/visitor/statistic":[93,60,17,81,104,114,115,162],"/cs/black/data":[13,17,48,58,84,91,92,95,104,127,134,140,158,162,179,81,114,115],"/cs/black/statistic":[5,179,17,81,104,114,115,162],"/ai/thread/data":[13,17,48,55,58,84,91,92,95,103,104,127,134,140,162,1,81,114,115],"/ai/thread/statistic":[46,1,17,81,104,114,115,162],"/ai/message/data":[13,17,48,58,84,91,92,95,104,127,134,140,162,163,8,81,114,115],"/ai/message/statistic":[153,8,17,81,104,114,115,162],"/kb/article/data":[13,17,48,58,84,91,92,95,104,109,110,127,134,140,162,171,66,77,154,11,81,114,115],"/kb/article/statistic":[125,13,48,58,66,77,91,127,134,154,162,11,17,81,104,114,115],"/kb/llm/data":[6,13,17,48,58,69,70,84,91,92,95,104,127,134,140,162,171,66,77,170,11,81,114,115],"/kb/llm/statistic":[75,13,48,58,66,77,91,127,134,162,170,11,17,81,104,114,115],"/kb/keyword/data":[6,13,17,19,24,48,53,54,58,84,89,91,92,95,104,127,134,140,162,171,66,77,106,11,81,114,115],"/kb/keyword/statistic":[168,13,48,58,66,77,91,106,127,134,162,11,17,81,104,114,115],"/kb/faq/data":[3,4,6,13,17,48,58,84,91,92,95,104,127,134,140,162,171,66,77,156,11,81,114,115],"/kb/faq/statistic":[139,13,48,58,66,77,91,127,134,156,162,11,17,81,104,114,115],"/kb/autoreply/data":[6,13,17,48,58,84,91,92,95,104,112,113,127,134,140,162,171,66,77,123,11,81,114,115],"/kb/autoreply/statistic":[43,13,48,58,66,77,91,123,127,134,162,11,17,81,104,114,115],"/kb/quickreply/data":[6,13,17,48,58,84,91,92,95,104,127,134,140,162,171,174,175,66,77,111,11,81,114,115],"/kb/quickreply/statistic":[59,13,48,58,66,77,91,111,127,134,162,11,17,81,104,114,115],"/kb/taboo/data":[6,13,17,48,58,84,91,92,95,104,127,130,131,134,140,162,171,66,77,142,11,81,114,115],"/kb/taboo/statistic":[10,13,48,58,66,77,91,127,134,142,162,11,17,81,104,114,115],"/marketing/email/data":[13,17,48,58,84,91,92,95,104,127,134,140,162,171,176,177,66,77,157,143,81,114,115],"/marketing/email/statistic":[49,13,48,58,66,77,91,127,134,157,162,143,17,81,104,114,115],"/admin/user/data":[13,17,48,58,84,91,92,95,104,127,133,134,140,162,164,81,114,115],"/admin/user/statistic":[79,164,17,81,104,114,115,162],"/admin/pay/data":[13,17,48,58,84,91,92,95,104,127,134,140,155,162,87,81,114,115],"/admin/pay/statistic":[107,87,17,81,104,114,115,162],"/admin/push/data":[7,13,17,48,58,84,91,92,95,104,127,134,140,162,141,81,114,115],"/admin/push/statistic":[83,141,17,81,104,114,115,162]}},{publicPath:"/admin/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();