!function(){"use strict";var t="/admin/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"admin","b":"webpack","f":[["p__Dashboard__Robot__Thread__index.670b9a6d.async.js",49],["p__Dashboard__Knowledge__Faq__FaqData.f9c908ef.chunk.css",79],["p__Dashboard__Knowledge__Faq__FaqData.b95dc51e.async.js",79],["119.a540b8d7.async.js",119],["p__Dashboard__Knowledge__Robotkb__RobotkbStatistic.c55dba5a.async.js",130],["238.c754a86a.chunk.css",238],["241.be550360.async.js",241],["p__Dashboard__Service__Crm__CrmTable.b00795f4.async.js",264],["p__Dashboard__Robot__Message__index.9dcfa535.async.js",294],["p__Dashboard__Service__Monitor__index.1f9f4c11.async.js",296],["p__Dashboard__Knowledge__index.7d9d31c0.async.js",363],["397.2c1d4bee.async.js",397],["p__Dashboard__Marketing__Blog__BlogStatistic.8af44d76.async.js",510],["p__Dashboard__Team__Notice__index.77ea4401.async.js",589],["1012.15fca1cd.async.js",1012],["p__Dashboard__Service__Transfer__TransferTable.9fa91203.async.js",1048],["p__Dashboard__Marketing__Blog__index.c5b8e170.async.js",1312],["p__Dashboard__Team__Message__MessageTable.fba3e07c.async.js",1398],["p__Dashboard__Service__Queue__QueueStatistic.a3b084d1.async.js",1488],["p__Dashboard__Knowledge__QuickButton__index.0c55ebba.async.js",1608],["p__Dashboard__Service__Agent__index.f4b2738a.async.js",1642],["p__Auth__Register__index.6d85df4e.async.js",1730],["p__Dashboard__Liangshibao__Course__index.cda9ae4e.async.js",1742],["p__Dashboard__Knowledge__QuickReply__QuickData.f9c908ef.chunk.css",1929],["p__Dashboard__Knowledge__QuickReply__QuickData.e78e51d0.async.js",1929],["p__Dashboard__Service__Transfer__TransferStatistic.1e62767a.async.js",2001],["p__Dashboard__Ticket__index.9b3a4903.async.js",2005],["p__Dashboard__Knowledge__Robotkb__index.9973a88a.async.js",2091],["p__Dashboard__Service__Thread__ThreadStatistic.c9adf062.async.js",2097],["p__Dashboard__Service__Thread__index.c57a550b.async.js",2148],["p__Dashboard__Knowledge__QuickButton__QuickTable.b07f15b0.async.js",2157],["p__Dashboard__Knowledge__QuickReply__QuickStatistic.bc99db4b.async.js",2163],["p__Dashboard__Team__Thread__ThreadMonitor.c9030710.async.js",2375],["p__Dashboard__Team__Notice__NoticeStatistic.91568987.async.js",2386],["2487.7a0980cc.async.js",2487],["p__404.82f2bc17.async.js",2571],["p__Dashboard__Team__Thread__ThreadSummary.59a32ddf.async.js",2618],["p__Dashboard__Marketing__Blog__BlogData.f9c908ef.chunk.css",2647],["p__Dashboard__Marketing__Blog__BlogData.8685ffc3.async.js",2647],["p__Dashboard__Team__Action__ActionStatistic.59147b9d.async.js",2658],["p__Dashboard__Team__Company__index.2e331655.async.js",2701],["p__Dashboard__Team__Thread__index.eafe87d4.async.js",2708],["p__Dashboard__Team__Notice__NoticeTable.a38de5c9.async.js",2874],["2882.14e4cd07.async.js",2882],["p__Dashboard__Service__Message__index.190ff3fc.async.js",2949],["p__Dashboard__Team__Message__MessageStatistic.6249f0d8.async.js",2992],["p__Dashboard__Robot__Thread__ThreadStatistic.e0fe4455.async.js",3031],["3083.9577d8b6.async.js",3083],["p__Dashboard__Knowledge__Helpdoc__HelpdocStatistic.7c2c36b8.async.js",3109],["p__Dashboard__Marketing__Email__EmailStatistic.0ead91a5.async.js",3151],["p__Dashboard__Liangshibao__Media__index.856838f2.async.js",3165],["p__Dashboard__Service__Crm__index.d43f982a.async.js",3186],["p__Dashboard__Knowledge__Helpdoc__index.0eaa0d64.async.js",3364],["p__Dashboard__Robot__Thread__ThreadTable.90738549.async.js",3398],["p__Dashboard__Service__Thread__ThreadTable.1434f560.async.js",3537],["p__Dashboard__Service__LeaveMsg__index.228ab0c9.async.js",3621],["3719.4d02ce59.async.js",3719],["p__Dashboard__Quartz__index.2f2871f6.chunk.css",3848],["p__Dashboard__Quartz__index.5d334316.async.js",3848],["3904.41f5eeac.async.js",3904],["p__Auth__Forget__index.f838d730.async.js",3915],["4043.66ee76e8.async.js",4043],["4069.71097ccf.async.js",4069],["p__Dashboard__Service__Taboo__TabooStatistic.16fae02b.async.js",4226],["p__Dashboard__Team__Role__index.10c38d30.async.js",4325],["p__Dashboard__Team__Action__ActionTable.9ca52b6e.async.js",4376],["p__Dashboard__Service__Message__MessageStatistic.dd3d1a3d.async.js",4460],["p__Dashboard__Admin__User__UserStatistic.7f6fd88e.async.js",4523],["p__Dashboard__Knowledge__QuickButton__QuickStatistic.280c8013.async.js",4721],["4841.f39e9570.async.js",4841],["5102.13d90ef6.async.js",5102],["p__Dashboard__Crm__index.1d094d76.async.js",5230],["p__Dashboard__Meiyu__index.051070ab.async.js",5306],["5309.cb843f6d.async.js",5309],["p__Dashboard__Doceditor__index.3d1ac2a1.async.js",5488],["p__Dashboard__Crm__CrmStatistic.27b8c392.async.js",5520],["p__Dashboard__Liangshibao__Category__index.6204ea41.async.js",5522],["p__Dashboard__Service__Rate__index.8c6827f7.async.js",5684],["p__Dashboard__Admin__Pay__PayStatistic.b337e8de.async.js",5851],["p__Dashboard__Service__Transfer__index.dbc4c16c.async.js",5906],["p__Dashboard__Knowledge__QuickReply__index.ca230492.async.js",6037],["6129.3c4cffaa.async.js",6129],["t__plugin-layout__Layout.5012e1ab.chunk.css",6301],["t__plugin-layout__Layout.a7082c08.async.js",6301],["6390.003dda2b.async.js",6390],["p__Dashboard__Service__Queue__QueueTable.72e34165.async.js",6668],["p__Dashboard__Setting__Server__index.8c92f720.async.js",6676],["p__Dashboard__Robot__index.7416ad8a.chunk.css",6693],["p__Dashboard__Robot__index.b71bce5a.async.js",6693],["p__Dashboard__Setting__Basic__index.14658bc0.async.js",6766],["p__Dashboard__Team__Thread__ThreadStatistic.2a71737d.async.js",6771],["p__Dashboard__Service__Rate__RateTable.e38b2dab.async.js",6900],["p__Dashboard__Team__Group__GroupTable.bc36f292.async.js",7139],["p__Dashboard__Knowledge__Helpdoc__HelpdocData.f9c908ef.chunk.css",7235],["p__Dashboard__Knowledge__Helpdoc__HelpdocData.e066659f.async.js",7235],["p__Dashboard__Service__Thread__ThreadMonitor.27e1ff1a.async.js",7270],["p__Dashboard__Setting__index.9a9ca067.async.js",7469],["p__Dashboard__Admin__User__UserData.97d70450.async.js",7586],["p__Dashboard__Service__Message__MessageTable.a1ee0414.async.js",7788],["p__Dashboard__Service__Taboo__TabooTable.662387a7.async.js",7824],["p__Dashboard__Service__Crm__CrmStatistic.35d9d7a8.async.js",7849],["p__Dashboard__Team__Member__index.f9c908ef.chunk.css",7960],["p__Dashboard__Team__Member__index.e8b8e8df.async.js",7960],["p__Dashboard__Knowledge__Faq__FaqStatistic.641f1022.async.js",8041],["8045.012680bf.async.js",8045],["8096.003d9ae5.async.js",8096],["p__Dashboard__Marketing__index.aa330265.async.js",8164],["p__Welcome.5d2542e9.async.js",8185],["p__Dashboard__Service__LeaveMsg__LeaveMsgTable.e7427418.async.js",8326],["p__Dashboard__Zhaobiao__index.e4608465.async.js",8327],["p__Dashboard__Service__Thread__ThreadSummary.6fe1d43b.async.js",8390],["p__Dashboard__Service__LeaveMsg__LeaveMsgStatistic.2e95a860.async.js",8412],["p__Dashboard__Tiku__index.51bd8081.async.js",8455],["p__Dashboard__Team__Action__index.674645df.async.js",8483],["p__Dashboard__Team__Message__index.df969e86.async.js",8491],["p__Dashboard__Robot__Message__MessageStatistic.97654ef5.async.js",8523],["8541.cfb77053.async.js",8541],["p__Dashboard__Admin__Pay__PayData.3499abc4.async.js",8726],["p__Dashboard__Knowledge__Faq__index.88565200.async.js",8801],["p__Dashboard__Marketing__Email__index.46b2f710.async.js",8873],["p__Dashboard__Service__Rate__RateStatistic.ffa71ffe.async.js",9043],["p__Dashboard__Team__Thread__ThreadTable.2df2357e.async.js",9077],["p__Dashboard__Robot__Message__MessageTable.a7853cad.async.js",9199],["p__Dashboard__Admin__User__index.78ff16ec.async.js",9234],["p__Dashboard__Setting__Profile__index.aad8c675.async.js",9290],["p__Dashboard__Team__Group__GroupStatistic.7901dfd5.async.js",9346],["p__Auth__Login__index.3198259b.async.js",9368],["p__Dashboard__Service__Taboo__index.52ddd449.async.js",9545],["p__Dashboard__Marketing__Email__EmailData.f9c908ef.chunk.css",9590],["p__Dashboard__Marketing__Email__EmailData.47a2f5b4.async.js",9590],["p__Dashboard__Service__Queue__index.7038b8d4.async.js",9614],["p__Dashboard__Knowledge__Robotkb__RobotkbData.f9c908ef.chunk.css",9702],["p__Dashboard__Knowledge__Robotkb__RobotkbData.0ae0d94f.async.js",9702],["p__Dashboard__Crm__CrmTable.30c826b5.async.js",9710],["9781.f44b25f8.async.js",9781],["p__Dashboard__Service__Workgroup__index.1c9c276d.async.js",9828],["p__Dashboard__Team__Group__index.be550bb1.async.js",9870],["9905.bc6718db.async.js",9905]],"r":{"/*":[35,137],"/":[6,59,61,82,83,137],"/welcome":[107,6,59,61,82,83,137],"/kb":[10,6,59,61,82,83,137],"/tiket":[26,6,59,61,82,83,137],"/marketing":[106,6,59,61,82,83,137],"/crm":[71,6,59,61,82,83,137],"/meiyu":[14,34,56,59,61,62,70,72,104,105,137,6,82,83],"/tiku":[14,56,59,61,62,70,104,105,112,116,137,6,82,83],"/zhaobiao":[14,56,59,61,62,70,104,105,109,116,137,6,82,83],"/quartz":[14,56,57,58,59,61,62,70,104,105,137,6,82,83],"/setting":[96,6,59,61,82,83,137],"/doceditor":[5,70,74],"/auth/login":[11,14,61,62,70,73,105,126],"/auth/register":[14,21,61,62,70,73],"/auth/forget":[60],"/team/member":[14,56,59,61,62,70,101,102,104,105,137,6,82,83],"/team/role":[64,105,6,59,61,82,83,137],"/team/group":[136,6,59,61,82,83,137],"/team/thread":[41,6,59,61,82,83,137],"/team/message":[114,6,59,61,82,83,137],"/team/action":[113,6,59,61,82,83,137],"/team/notice":[13,6,59,61,82,83,137],"/team/company":[14,40,61,62,70,134,6,59,82,83,137],"/cs/agent":[14,20,34,47,61,62,70,81,104,105,134,6,59,82,83,137],"/cs/wgroup":[14,34,47,61,62,70,81,104,105,134,135,6,59,82,83,137],"/cs/queue":[130,6,59,61,82,83,137],"/cs/thread":[29,6,59,61,82,83,137],"/cs/message":[44,6,59,61,82,83,137],"/cs/leavemsg":[55,6,59,61,82,83,137],"/cs/crm":[51,6,59,61,82,83,137],"/cs/rate":[77,6,59,61,82,83,137],"/cs/transfer":[79,6,59,61,82,83,137],"/cs/taboo":[127,6,59,61,82,83,137],"/cs/monitor":[9,6,59,61,82,83,137],"/ai/robot":[14,34,43,47,56,59,61,62,70,81,87,88,104,105,134,137,6,82,83],"/ai/thread":[0,6,59,61,82,83,137],"/ai/message":[8,6,59,61,82,83,137],"/kb/helpdoc":[52,10,6,59,61,82,83,137],"/kb/robot":[27,10,6,59,61,82,83,137],"/kb/faq":[118,10,6,59,61,82,83,137],"/kb/quickbutton":[19,10,6,59,61,82,83,137],"/kb/quickreply":[80,10,6,59,61,82,83,137],"/marketing/blog":[16,106,6,59,61,82,83,137],"/marketing/email":[119,106,6,59,61,82,83,137],"/crm/data":[14,56,59,61,62,70,104,105,116,133,137,71,6,82,83],"/crm/statistic":[75,71,6,59,61,82,83,137],"/liangshibao/category":[14,56,59,61,62,70,76,104,105,137,6,82,83],"/liangshibao/course":[14,22,56,59,61,62,70,104,105,137,6,82,83],"/liangshibao/media":[14,50,56,59,61,62,70,104,105,137,6,82,83],"/setting/profile":[14,61,62,70,124,134,96,6,59,82,83,137],"/setting/basic":[62,89,96,6,59,61,82,83,137],"/setting/server":[11,70,86,96,6,59,61,82,83,137],"/admin/user":[123,6,59,61,82,83,137],"/admin/pay":[123,6,59,61,82,83,137],"/team/group/data":[14,56,59,61,62,70,92,104,105,137,136,6,82,83],"/team/group/statistic":[125,136,6,59,61,82,83,137],"/team/thread/data":[3,14,56,59,61,62,70,104,105,121,137,41,6,82,83],"/team/thread/monitor":[32,41,6,59,61,82,83,137],"/team/thread/statistic":[90,41,6,59,61,82,83,137],"/team/thread/summary":[14,36,56,59,61,62,70,104,105,137,41,6,82,83],"/team/message/data":[14,17,56,59,61,62,70,104,105,116,137,114,6,82,83],"/team/message/statistic":[45,114,6,59,61,82,83,137],"/team/action/data":[14,56,59,61,62,65,70,104,105,137,113,6,82,83],"/team/action/statistic":[39,113,6,59,61,82,83,137],"/team/notice/data":[14,42,56,59,61,62,70,104,105,116,137,13,6,82,83],"/team/notice/statistic":[33,13,6,59,61,82,83,137],"/cs/queue/data":[14,56,59,61,62,70,85,104,105,137,130,6,82,83],"/cs/queue/statistic":[18,130,6,59,61,82,83,137],"/cs/thread/data":[3,14,54,56,59,61,62,70,104,105,137,29,6,82,83],"/cs/thread/monitor":[95,29,6,59,61,82,83,137],"/cs/thread/statistic":[28,29,6,59,61,82,83,137],"/cs/thread/summary":[14,56,59,61,62,70,104,105,110,137,29,6,82,83],"/cs/message/data":[14,56,59,61,62,70,98,104,105,116,137,44,6,82,83],"/cs/message/statistic":[66,44,6,59,61,82,83,137],"/cs/leavemsg/data":[14,56,59,61,62,70,104,105,108,137,55,6,82,83],"/cs/leavemsg/statistic":[111,55,6,59,61,82,83,137],"/cs/crm/data":[7,14,56,59,61,62,70,104,105,137,51,6,82,83],"/cs/crm/statistic":[100,51,6,59,61,82,83,137],"/cs/rate/data":[14,56,59,61,62,70,91,104,105,137,77,6,82,83],"/cs/rate/statistic":[120,77,6,59,61,82,83,137],"/cs/transfer/data":[14,15,56,59,61,62,70,104,105,137,79,6,82,83],"/cs/transfer/statistic":[25,79,6,59,61,82,83,137],"/cs/taboo/data":[14,56,59,61,62,70,99,104,105,137,127,6,82,83],"/cs/taboo/statistic":[63,127,6,59,61,82,83,137],"/ai/thread/data":[3,14,53,56,59,61,62,70,104,105,137,0,6,82,83],"/ai/thread/statistic":[46,0,6,59,61,82,83,137],"/ai/message/data":[14,56,59,61,62,70,104,105,116,122,137,8,6,82,83],"/ai/message/statistic":[115,8,6,59,61,82,83,137],"/kb/helpdoc/data":[14,56,59,61,62,69,70,93,94,104,105,137,52,10,6,82,83],"/kb/helpdoc/statistic":[48,52,10,6,59,61,82,83,137],"/kb/robot/data":[14,56,59,61,62,69,70,104,105,131,132,137,27,10,6,82,83],"/kb/robot/statistic":[4,27,10,6,59,61,82,83,137],"/kb/faq/data":[1,2,14,56,59,61,62,69,70,104,105,137,118,10,6,82,83],"/kb/faq/statistic":[103,118,10,6,59,61,82,83,137],"/kb/quickbutton/data":[14,30,56,59,61,62,70,104,105,137,19,10,6,82,83],"/kb/quickbutton/statistic":[68,19,10,6,59,61,82,83,137],"/kb/quickreply/data":[14,23,24,56,59,61,62,69,70,104,105,137,80,10,6,82,83],"/kb/quickreply/statistic":[31,80,10,6,59,61,82,83,137],"/marketing/blog/data":[14,37,38,56,59,61,62,69,70,104,105,137,16,106,6,82,83],"/marketing/blog/statistic":[12,16,106,6,59,61,82,83,137],"/marketing/email/data":[14,56,59,61,62,69,70,104,105,128,129,137,119,106,6,82,83],"/marketing/email/statistic":[49,119,106,6,59,61,82,83,137],"/admin/user/data":[14,56,59,61,62,70,97,104,105,137,123,6,82,83],"/admin/user/statistic":[67,123,6,59,61,82,83,137],"/admin/pay/data":[14,56,59,61,62,70,104,105,117,137,123,6,82,83],"/admin/pay/statistic":[78,123,6,59,61,82,83,137]}},{publicPath:"/admin/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();