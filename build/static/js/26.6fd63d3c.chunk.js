(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[26],{138:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=function(t){localStorage.setItem("maqshaf-user",JSON.stringify(null===t||void 0===t?void 0:t.data))},r=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(t){return console.error(t),null}},i=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=n(470),r=function(t){return(null===t||void 0===t?void 0:t.code)===a.a.OK},i=function(t){return(null===t||void 0===t?void 0:t.code)===a.a.UNAUTHORIZED}},148:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(58),r=n(210),i=n.n(r),o=n(211),c=n.n(o),s=n(139),l=n(138),u=function(t){return"GET"===t},d=function(t,e,n,r){var o;return fetch(function(t,e,n){return i()(t,n)+(u(e)?"?".concat(c.a.stringify(n)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,n),{method:e,headers:Object(a.a)({api_token:null===(o=Object(l.a)())||void 0===o?void 0:o.token},!r&&{"Content-Type":"application/json"}),body:u(e)?void 0:r?n:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(Object(s.b)(t)&&Object(l.b)(),!Object(s.a)(t)){var e=t.code,n=t.message,a=t.data,r=new Error(n);throw r.code=e,r.message=n,r.data=a,r}return t}))}},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return s}));var a=n(0),r={SummaryDialog:Object(a.lazy)((function(){return Promise.all([n.e(6),n.e(24),n.e(34)]).then(n.bind(null,493))})),IdentityDataDialog:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(15),n.e(28)]).then(n.bind(null,530))})),ConfirmationPinDialog:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(27)]).then(n.bind(null,497))}))},i={Dashboard:Object(a.lazy)((function(){return Promise.all([n.e(30),n.e(36)]).then(n.bind(null,498))})),Login:Object(a.lazy)((function(){return n.e(37).then(n.bind(null,502))}))},o=Object(a.lazy)((function(){return n.e(35).then(n.bind(null,528))})),c=Object(a.lazy)((function(){return Promise.all([n.e(21),n.e(39)]).then(n.bind(null,476))})),s=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(19),n.e(40)]).then(n.bind(null,529))}))},162:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var a=n(51),r=n.n(a),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp",n=t.toString().split("").reverse().join(""),a=n.match(/\d{1,3}/g);return"".concat(e,". ").concat(a.join(".").split("").reverse().join(""))},o=function(t){return r()(t).format("MM MMM YYYY, HH:mm")}},177:function(t,e,n){"use strict";var a=n(59),r=n(49),i=n(58),o=n(0),c=n(8),s=n(123),l=n(155),u=n(138),d=n(3),b=Object(s.a)((function(t){return{drawer_header:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"}),main_wrapper:{flexGrow:1,padding:t.spacing(3)},content:{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingscreen})},content_shift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeout,duration:t.transitions.duration.enteringscreen}),marginLeft:0}}}));e.a=function(t){var e=t.children,n=t.t,i=t.history,s=b(),m=Object(o.useState)(!1),j=Object(r.a)(m,2),f=j[0],h=j[1];return Object(o.useEffect)((function(){Object(u.a)()||i.replace("/dashboard/login")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.c.Dashboard,{t:n,open:f,handleDrawerOpen:function(){return h(!0)}}),Object(d.jsx)(l.e,{t:n,open:f,handleDrawerClose:function(){return h(!1)}}),Object(d.jsxs)("main",{className:Object(c.a)(s.content,Object(a.a)({},s.content_shift,f)),children:[Object(d.jsx)("div",{className:s.drawer_header}),e]}),Object(d.jsx)(l.a,{t:n})]})}},212:function(t,e){},330:function(t,e,n){"use strict";var a=n(59),r=n(58),i=n(49),o=n(0),c=n(190),s={page:1,limit:10,total:0};e.a=function(t,e){var n=Object(o.useState)({}),l=Object(i.a)(n,2),u=l[0],d=l[1],b=Object(o.useState)(s),m=Object(i.a)(b,2),j=m[0],f=m[1];Object(o.useEffect)((function(){(null===t||void 0===t?void 0:t.data)&&Object(c.isEmpty)(u)&&f(Object(r.a)(Object(r.a)({},j),{},{total:t.pageSummary.total,page:t.pageSummary.current_page}))}),[null===t||void 0===t?void 0:t.data]);return{pageSummary:j,searchValue:u,handleSearch:function(t){"Enter"===t.key&&(f(s),setTimeout((function(){e()}),0),t.preventDefault())},handleChange:function(t,e){var n=t.currentTarget.value||t.target.value;if(n)d(Object(r.a)(Object(r.a)({},u),{},Object(a.a)({},e,n)));else{var i=Object(c.omit)(u,e);d(i)}},getPaginationTotal:function(){if(j.total<j.limit)return 1;var t=j.total%j.limit===0?0:1,e=j.total/j.limit;return Math.floor(e+t)},handleChangePage:function(t,n){f(Object(r.a)(Object(r.a)({},j),{},{page:n})),setTimeout((function(){e()}),0)},setSearchValue:d}}},397:function(t,e,n){"use strict";e.a=function(t){return{button_tambah:{marginBottom:20,marginTop:20},title_divider:{marginBottom:20},paper_form:{padding:20}}}},514:function(t,e,n){"use strict";n.r(e);var a=n(216),r=n(510),i=n(130),o=n(128),c=n(345),s=n(346),l=n(342),u=n(377),d=n(215),b=n(7),m=n(369),j=n.n(m),f=n(396),h=n.n(f),O=n(368),g=n.n(O),p=n(20),v=n(39),y=n(162),x=n(58),S=n(49),w=n(0),_=n(148),T=n(255),C=n(343),P=n(139),D=n(330),E=function(t){var e=Object(w.useState)({isShow:!1,type:"success",message:"common:alert.success"}),n=Object(S.a)(e,2),a=n[0],r=n[1],i=Object(T.a)("listAllAdministrator",(function(){return Object(_.a)("/administrator/all","GET",{limit:j.limit,page:j.page})}),{refetchOnMount:"always"}),o=i.data,c=i.isLoading,s=i.refetch,l=Object(C.a)("administratorMutationUpdate",(function(t){return Object(_.a)("/administrator/delete/".concat(t),"DELETE",{})})),u=l.data,d=l.mutate,b=l.error;Object(w.useEffect)((function(){var e;(null===(e=t.location.state)||void 0===e?void 0:e.success)&&(t.replace("/dashboard/administrator"),r({isShow:!0,type:"success",message:"common:alert.success"}))}),[t.location.state]),Object(w.useEffect)((function(){a.isShow&&setTimeout((function(){r(Object(x.a)(Object(x.a)({},a),{},{isShow:!1}))}),3e3)}),[a]);var m=Object(D.a)(o,s),j=m.pageSummary,f=m.handleChangePage,h=m.getPaginationTotal;return Object(w.useEffect)((function(){Object(P.a)(u)&&(s(),r({isShow:!0,type:"success",message:"common:alert.success"})),b&&r({isShow:!0,type:"error",message:"common:alert.failed"})}),[u,b]),{alert:a,data:o,isLoading:c,refetch:s,handleDelete:function(t){d(t)},pageSummary:j,getPaginationTotal:h,handleChangePage:f}},N=n(397),k=n(3),z=function(t){return[{name:"number",label:t("common:label.no")},{name:"id",label:t("dashboard_administrator:table.header.id")},{name:"username",label:t("dashboard_administrator:table.header.username")},{name:"fullName",label:t("common:label.fullName")},{name:"createdAt",label:t("common:label.createdAt")},{name:"action",label:t("common:label.action")}]},I=Object(p.a)(N.a)((function(t){var e,n=t.classes,a=t.t,r=Object(b.f)(),m=E(r),f=m.alert,O=m.data,p=m.isLoading,x=m.handleDelete,S=m.getPaginationTotal,w=m.handleChangePage,_=m.pageSummary;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(i.a,{display:"flex",justifyContent:"center",className:n.logo_login_wrapper,children:Object(k.jsx)(i.a,{alignSelf:"center",children:Object(k.jsx)("h2",{children:a("dashboard_administrator:table.title")})})}),f.isShow&&Object(k.jsx)(i.a,{marginBottom:2,children:Object(k.jsx)(l.a,{severity:f.type,children:a(f.message)})}),Object(k.jsx)(o.a,{startIcon:Object(k.jsx)(g.a,{}),variant:"contained",color:"primary",className:n.button_tambah,onClick:function(){return r.push("/dashboard/administrator/add")},children:a("dashboard_administrator:button.add")}),Object(k.jsx)(v.d,{isLoading:p,headers:z(a),children:null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.map((function(t,e){return Object(k.jsxs)(c.a,{children:[Object(k.jsx)(s.a,{component:"th",scope:"row",children:e+1}),Object(k.jsx)(s.a,{children:t.administratorId}),Object(k.jsx)(s.a,{children:t.username}),Object(k.jsx)(s.a,{children:t.fullName}),Object(k.jsx)(s.a,{children:Object(y.a)(t.createdAt)}),Object(k.jsxs)(s.a,{children:[Object(k.jsx)(d.a,{title:"Ubah","aria-label":"edit",color:"primary",onClick:function(){return r.push("/dashboard/administrator/"+t.administratorId)},children:Object(k.jsx)(j.a,{fontSize:"small"})}),Object(k.jsx)(d.a,{title:"Hapus","aria-label":"delete",color:"secondary",onClick:function(){return x(t.administratorId)},children:Object(k.jsx)(h.a,{fontSize:"small"})})]})]},t.administratorId)}))}),Object(k.jsx)(i.a,{marginTop:2,display:"flex",justifyContent:"flex-end",children:Object(k.jsx)(u.a,{count:S(),onChange:w,page:Number(_.page),color:"primary"})})]})})),M=n(177);e.default=Object(r.a)(["dashboard_administrator","glossary"])((function(t){var e=t.t,n=t.history,r=t.location;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(a.a,{children:[Object(k.jsx)("title",{children:e("dashboard_administrator:metaTitle")}),Object(k.jsx)("meta",{name:"description",content:e("dashboard_administrator:metaDescription")})]}),Object(k.jsx)(M.a,{t:e,history:n,children:Object(k.jsx)(I,{t:e,history:n,location:r})})]})}))}}]);
//# sourceMappingURL=26.6fd63d3c.chunk.js.map