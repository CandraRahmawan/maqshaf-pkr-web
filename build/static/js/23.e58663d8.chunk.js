(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[23],{135:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var n=function(t){localStorage.setItem("maqshaf-user",JSON.stringify(null===t||void 0===t?void 0:t.data))},r=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(t){return console.error(t),null}},i=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},137:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var n=a(458),r=function(t){return(null===t||void 0===t?void 0:t.code)===n.a.OK},i=function(t){return(null===t||void 0===t?void 0:t.code)===n.a.UNAUTHORIZED}},139:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(58),r=a(178),i=a.n(r),o=a(179),c=a.n(o),l=a(137),s=a(135),d=function(t){return"GET"===t},u=function(t,e,a,r){var o;return fetch(function(t,e,a){return i()(t,a)+(d(e)?"?".concat(c.a.stringify(a)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,a),{method:e,headers:Object(n.a)({api_token:null===(o=Object(s.a)())||void 0===o?void 0:o.token},!r&&{"Content-Type":"application/json"}),body:d(e)?void 0:r?a:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(t){if(Object(l.b)(t)&&Object(s.b)(),!Object(l.a)(t)){var e=t.code,a=t.message,n=t.data,r=new Error(a);throw r.code=e,r.message=a,r.data=n,r}return t}))}},141:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return c}));var n=a(0),r={SummaryDialog:Object(n.lazy)((function(){return Promise.all([a.e(24),a.e(32)]).then(a.bind(null,478))})),IdentityDataDialog:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(12),a.e(27)]).then(a.bind(null,513))})),ConfirmationPinDialog:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(25)]).then(a.bind(null,480))}))},i={Dashboard:Object(n.lazy)((function(){return Promise.all([a.e(28),a.e(34)]).then(a.bind(null,481))})),Login:Object(n.lazy)((function(){return a.e(35).then(a.bind(null,485))}))},o=Object(n.lazy)((function(){return a.e(33).then(a.bind(null,511))})),c=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(17),a.e(37)]).then(a.bind(null,512))}))},147:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(50),r=a.n(n),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp",a=t.toString().split("").reverse().join(""),n=a.match(/\d{1,3}/g);return"".concat(e,". ").concat(n.join(".").split("").reverse().join(""))},o=function(t){return r()(t).format("MM MMM YYYY, HH:mm")}},148:function(t,e,a){"use strict";var n=a(59),r=a(49),i=a(58),o=a(0),c=a(8),l=a(123),s=a(141),d=a(135),u=a(3),b=Object(l.a)((function(t){return{drawer_header:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"}),main_wrapper:{flexGrow:1,padding:t.spacing(3)},content:{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingscreen})},content_shift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeout,duration:t.transitions.duration.enteringscreen}),marginLeft:0}}}));e.a=function(t){var e=t.children,a=t.t,i=t.history,l=b(),m=Object(o.useState)(!1),j=Object(r.a)(m,2),f=j[0],h=j[1];return Object(o.useEffect)((function(){Object(d.a)()||i.replace("/dashboard/login")}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.b.Dashboard,{t:a,open:f,handleDrawerOpen:function(){return h(!0)}}),Object(u.jsx)(s.d,{t:a,open:f,handleDrawerClose:function(){return h(!1)}}),Object(u.jsxs)("main",{className:Object(c.a)(l.content,Object(n.a)({},l.content_shift,f)),children:[Object(u.jsx)("div",{className:l.drawer_header}),e]}),Object(u.jsx)(s.a,{t:a})]})}},180:function(t,e){},204:function(t,e,a){"use strict";var n=a(59),r=a(58),i=a(49),o=a(0),c=a(161),l={page:1,limit:10,total:0};e.a=function(t,e){var a=Object(o.useState)({}),s=Object(i.a)(a,2),d=s[0],u=s[1],b=Object(o.useState)(l),m=Object(i.a)(b,2),j=m[0],f=m[1],h=Object(o.useState)(!1),O=Object(i.a)(h,2),g=O[0],p=O[1],v=Object(o.useState)([]),y=Object(i.a)(v,2),x=y[0],S=y[1],_=Object(o.useState)([]),w=Object(i.a)(_,2),T=w[0],D=w[1];Object(o.useEffect)((function(){var a,n,i,o;((null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data)&&Object(c.isEmpty)(d)&&(f(Object(r.a)(Object(r.a)({},j),{},{total:null===t||void 0===t?void 0:t.data.pageSummary.total,page:null===t||void 0===t?void 0:t.data.pageSummary.current_page})),S(null===t||void 0===t?void 0:t.data)),(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data)&&!Object(c.isEmpty)(d))&&(f(Object(r.a)(Object(r.a)({},j),{},{total:Number(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.pageSummary.total),page:Number(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.pageSummary.current_page)})),D(null===e||void 0===e?void 0:e.data))}),[null===t||void 0===t?void 0:t.data,null===e||void 0===e?void 0:e.data]);return{pageSummary:j,searchValue:d,responseData:!g||Object(c.isEmpty)(d)?x:T,handleSearch:function(a){"Enter"===a.key?(D(x),f(l),setTimeout((function(){Object(c.isEmpty)(d)?t.refetch():e.refetch()}),0),p(!0),a.preventDefault()):p(!1)},handleChange:function(t,e){var a=t.currentTarget.value;if(a)u(Object(r.a)(Object(r.a)({},d),{},Object(n.a)({},e,a)));else{var i=Object(c.omit)(d,e);u(i)}},getPaginationTotal:function(){if(j.total<j.limit)return 1;var t=j.total%j.limit===0?0:1,e=j.total/j.limit;return Math.floor(e+t)},handleChangePage:function(a,n){f(Object(r.a)(Object(r.a)({},j),{},{page:n})),setTimeout((function(){Object(c.isEmpty)(d)?t.refetch():e.refetch()}),0)}}}},376:function(t,e,a){"use strict";e.a=function(t){return{button_tambah:{marginBottom:20,marginTop:20},title_divider:{marginBottom:20},paper_form:{padding:20}}}},496:function(t,e,a){"use strict";a.r(e);var n=a(186),r=a(492),i=a(130),o=a(128),c=a(259),l=a(260),s=a(264),d=a(360),u=a(196),b=a(7),m=a(268),j=a.n(m),f=a(375),h=a.n(f),O=a(267),g=a.n(O),p=a(20),v=a(39),y=a(147),x=a(0),S=a(139),_=a(203),w=a(265),T=a(204),D=function(t){var e=Object(_.a)("listAllAdministrator",(function(){return Object(S.a)("/administrator/all","GET",{limit:l.limit,page:l.page})}),{refetchOnMount:"always"}),a=e.data,n=e.isLoading,r=e.refetch,i=Object(w.a)("administratorMutationUpdate",(function(t){return Object(S.a)("/administrator/delete/".concat(t),"DELETE",{})})).mutate;Object(x.useEffect)((function(){t.location.search&&setTimeout((function(){t.replace("/dashboard/administrator")}),2500)}),[t.location.search]);var o=Object(T.a)({data:a,refetch:r}),c=o.responseData,l=o.pageSummary,s=o.handleChangePage,d=o.getPaginationTotal;return{data:c,isLoading:n,refetch:r,handleDelete:function(t){i(t),setTimeout((function(){r()}),0)},pageSummary:l,getPaginationTotal:d,handleChangePage:s}},E=a(376),C=a(3),N=function(t){return[{name:"number",label:t("common:label.no")},{name:"id",label:t("dashboard_administrator:table.header.id")},{name:"username",label:t("dashboard_administrator:table.header.username")},{name:"fullName",label:t("common:label.fullName")},{name:"createdAt",label:t("common:label.createdAt")},{name:"action",label:t("common:label.action")}]},P=Object(p.a)(E.a)((function(t){var e,a=t.classes,n=t.t,r=Object(b.f)(),m=D(r),f=m.data,O=m.isLoading,p=m.handleDelete,x=m.getPaginationTotal,S=m.handleChangePage,_=m.pageSummary;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.a,{display:"flex",justifyContent:"center",className:a.logo_login_wrapper,children:Object(C.jsx)(i.a,{alignSelf:"center",children:Object(C.jsx)("h2",{children:n("dashboard_administrator:table.title")})})}),r.location.search&&Object(C.jsx)(s.a,{severity:"success",children:n("common:alert.success")}),Object(C.jsx)(o.a,{startIcon:Object(C.jsx)(g.a,{}),variant:"contained",color:"primary",className:a.button_tambah,onClick:function(){return r.push("/dashboard/administrator/add")},children:n("dashboard_administrator:button.add")}),Object(C.jsx)(v.d,{isLoading:O,headers:N(n),children:null===f||void 0===f||null===(e=f.data)||void 0===e?void 0:e.map((function(t,e){return Object(C.jsxs)(c.a,{children:[Object(C.jsx)(l.a,{component:"th",scope:"row",children:e+1}),Object(C.jsx)(l.a,{children:t.administratorId}),Object(C.jsx)(l.a,{children:t.username}),Object(C.jsx)(l.a,{children:t.fullName}),Object(C.jsx)(l.a,{children:Object(y.a)(t.createdAt)}),Object(C.jsxs)(l.a,{children:[Object(C.jsx)(u.a,{title:"Ubah","aria-label":"edit",color:"primary",onClick:function(){return r.push("/dashboard/administrator/"+t.administratorId)},children:Object(C.jsx)(j.a,{fontSize:"small"})}),Object(C.jsx)(u.a,{title:"Hapus","aria-label":"delete",color:"secondary",onClick:function(){return p(t.administratorId)},children:Object(C.jsx)(h.a,{fontSize:"small"})})]})]},t.administratorId)}))}),Object(C.jsx)(i.a,{marginTop:2,display:"flex",justifyContent:"flex-end",children:Object(C.jsx)(d.a,{count:x(),onChange:S,page:Number(_.page),color:"primary"})})]})})),k=a(148);e.default=Object(r.a)(["dashboard_administrator","glossary"])((function(t){var e=t.t,a=t.history,r=t.location;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(n.a,{children:[Object(C.jsx)("title",{children:e("dashboard_administrator:metaTitle")}),Object(C.jsx)("meta",{name:"description",content:e("dashboard_administrator:metaDescription")})]}),Object(C.jsx)(k.a,{t:e,history:a,children:Object(C.jsx)(P,{t:e,history:a,location:r})})]})}))}}]);
//# sourceMappingURL=23.e58663d8.chunk.js.map