(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[26],{120:function(n,t,e){"use strict";e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var a=function(n){localStorage.setItem("maqshaf-user",JSON.stringify(null===n||void 0===n?void 0:n.data))},r=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(n){return console.error(n),null}},i=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},132:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return i})),e.d(t,"d",(function(){return o}));var a=e(0),r={SummaryDialog:Object(a.lazy)((function(){return Promise.all([e.e(0),e.e(6),e.e(24)]).then(e.bind(null,459))})),IdentityDataDialog:Object(a.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(6),e.e(12),e.e(21)]).then(e.bind(null,486))})),ConfirmationPinDialog:Object(a.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(3),e.e(6),e.e(13)]).then(e.bind(null,461))}))},i={Dashboard:Object(a.lazy)((function(){return Promise.all([e.e(0),e.e(23),e.e(33)]).then(e.bind(null,462))})),Login:Object(a.lazy)((function(){return e.e(31).then(e.bind(null,466))}))},c=Object(a.lazy)((function(){return e.e(32).then(e.bind(null,484))})),o=Object(a.lazy)((function(){return Promise.all([e.e(0),e.e(3),e.e(14),e.e(36)]).then(e.bind(null,485))}))},147:function(n,t,e){"use strict";var a=e(51),r=e(127),i=e(55),c=e(0),o=e(28),s=e(110),l=e(132),u=e(120),d=e(4),b=Object(s.a)((function(n){return{drawer_header:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:n.spacing(0,1)},n.mixins.toolbar),{},{justifyContent:"flex-end"}),main_wrapper:{flexGrow:1,padding:n.spacing(3)},content:{flexGrow:1,padding:n.spacing(3),transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingscreen})},content_shift:{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeout,duration:n.transitions.duration.enteringscreen}),marginLeft:0}}}));t.a=function(n){var t=n.children,e=n.t,i=n.history,s=b(),f=Object(c.useState)(!1),g=Object(r.a)(f,2),h=g[0],j=g[1];return Object(c.useEffect)((function(){Object(u.a)()||i.replace("/dashboard/login")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b.Dashboard,{t:e,open:h,handleDrawerOpen:function(){return j(!0)}}),Object(d.jsx)(l.d,{t:e,open:h,handleDrawerClose:function(){return j(!1)}}),Object(d.jsxs)("main",{className:Object(o.a)(s.content,Object(a.a)({},s.content_shift,h)),children:[Object(d.jsx)("div",{className:s.drawer_header}),t]}),Object(d.jsx)(l.a,{t:e})]})}},232:function(n,t,e){"use strict";t.a=function(n){return{button_login:{marginTop:16},login_box:{padding:16},login_root:{margin:"0 auto",marginTop:"10%"},form:{width:"100%",marginTop:24},margin:{margin:n.spacing(2)},logo_login_wrapper:{paddingBottom:16,margin:"0 auto",textAlign:"center"}}}},482:function(n,t,e){"use strict";e.r(t);var a=e(158),r=e(475),i=e(112),c=e(30),o=e(232),s=e(4),l=Object(c.a)(o.a)((function(){return Object(s.jsx)(i.a,{children:"Check Balanced"})})),u=e(147);t.default=Object(r.a)(["dashboard_check_balanced","glossary"])((function(n){var t=n.t,e=n.history,r=n.location;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(a.a,{children:[Object(s.jsx)("title",{children:t("dashboard_check_balanced:metaTitle")}),Object(s.jsx)("meta",{name:"description",content:t("dashboard_check_balanced:metaDescription")})]}),Object(s.jsx)(u.a,{t:t,history:e,children:Object(s.jsx)(l,{t:t,history:e,location:r})})]})}))}}]);
//# sourceMappingURL=26.04657995.chunk.js.map