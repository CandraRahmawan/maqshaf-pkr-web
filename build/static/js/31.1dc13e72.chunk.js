(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[31],{135:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return i}));var r=function(n){localStorage.setItem("maqshaf-user",JSON.stringify(null===n||void 0===n?void 0:n.data))},a=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(n){return console.error(n),null}},i=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},141:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"b",(function(){return i})),e.d(t,"d",(function(){return o}));var r=e(0),a={SummaryDialog:Object(r.lazy)((function(){return Promise.all([e.e(24),e.e(32)]).then(e.bind(null,478))})),IdentityDataDialog:Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(4),e.e(12),e.e(27)]).then(e.bind(null,513))})),ConfirmationPinDialog:Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(3),e.e(4),e.e(25)]).then(e.bind(null,480))}))},i={Dashboard:Object(r.lazy)((function(){return Promise.all([e.e(28),e.e(34)]).then(e.bind(null,481))})),Login:Object(r.lazy)((function(){return e.e(35).then(e.bind(null,485))}))},c=Object(r.lazy)((function(){return e.e(33).then(e.bind(null,511))})),o=Object(r.lazy)((function(){return Promise.all([e.e(1),e.e(17),e.e(37)]).then(e.bind(null,512))}))},148:function(n,t,e){"use strict";var r=e(59),a=e(49),i=e(58),c=e(0),o=e(8),s=e(123),l=e(141),u=e(135),d=e(3),b=Object(s.a)((function(n){return{drawer_header:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:n.spacing(0,1)},n.mixins.toolbar),{},{justifyContent:"flex-end"}),main_wrapper:{flexGrow:1,padding:n.spacing(3)},content:{flexGrow:1,padding:n.spacing(3),transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingscreen})},content_shift:{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeout,duration:n.transitions.duration.enteringscreen}),marginLeft:0}}}));t.a=function(n){var t=n.children,e=n.t,i=n.history,s=b(),f=Object(c.useState)(!1),j=Object(a.a)(f,2),h=j[0],O=j[1];return Object(c.useEffect)((function(){Object(u.a)()||i.replace("/dashboard/login")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b.Dashboard,{t:e,open:h,handleDrawerOpen:function(){return O(!0)}}),Object(d.jsx)(l.d,{t:e,open:h,handleDrawerClose:function(){return O(!1)}}),Object(d.jsxs)("main",{className:Object(o.a)(s.content,Object(r.a)({},s.content_shift,h)),children:[Object(d.jsx)("div",{className:s.drawer_header}),t]}),Object(d.jsx)(l.a,{t:e})]})}},506:function(n,t,e){"use strict";e.r(t);var r=e(186),a=e(492),i=e(3),c=function(){return Object(i.jsx)("div",{children:"Dashbaord"})},o=e(148);t.default=Object(a.a)(["dashboard","glossary"])((function(n){var t=n.t,e=n.history,a=n.location;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(r.a,{children:[Object(i.jsx)("title",{children:t("dashboard:metaTitle")}),Object(i.jsx)("meta",{name:"description",content:t("dashboard:metaDescription")})]}),Object(i.jsx)(o.a,{t:t,history:e,children:Object(i.jsx)(c,{t:t,history:e,location:a})})]})}))}}]);
//# sourceMappingURL=31.1dc13e72.chunk.js.map