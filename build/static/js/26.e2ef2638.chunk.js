(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[26],{156:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=n(479),o=function(t){return(null===t||void 0===t?void 0:t.code)===r.a.OK},i=function(t){return(null===t||void 0===t?void 0:t.code)===r.a.UNAUTHORIZED}},169:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(59),o=n(256),i=n.n(o),a=n(257),c=n.n(a),s=n(156),u=n(144),d=function(t){return"GET"===t},l=function(t,e,n,o){var a;return fetch(function(t,e,n){return i()(t,n)+(d(e)?"?".concat(c.a.stringify(n)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,n),{method:e,headers:Object(r.a)({api_token:null===(a=Object(u.a)())||void 0===a?void 0:a.token},!o&&{"Content-Type":"application/json"}),body:d(e)?void 0:o?n:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(Object(s.b)(t)&&Object(u.b)(),!Object(s.a)(t)){var e=t.code,n=t.message,r=t.data,o=new Error(n);throw o.code=e,o.message=n,o.data=r,o}return t}))}},181:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(51),o=n.n(r),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp";if(t){var n=t.toString().split("").reverse().join(""),r=n.match(/\d{1,3}/g);return"".concat(e,". ").concat(r.join(".").split("").reverse().join(""))}return t},a=function(t){return o()(t).format("DD MMM YYYY, HH:mm")}},258:function(t,e){},391:function(t,e,n){"use strict";var r=n(392),o=n.n(r),i=n(398),a=n.n(i)()(o.a),c={success:function(t){return a.fire({title:t.title,icon:"success",text:t.text}).then((function(){return t.href&&(window.location.href=t.href),Promise.resolve()}))},error:function(t){return a.fire({title:t.title,icon:"error",text:t.text}).then((function(){return t.href&&(window.location.href=t.href),Promise.resolve()}))}};e.a=c},402:function(t,e,n){"use strict";var r=n(123),o=Object(r.a)((function(t){return{list_modal_image:{marginRight:12,"& img":{width:50,height:50}},list_modal_text:{color:t.color.black},button_progress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},input_pin:{width:"100%"}}}));e.a=o},424:function(t,e,n){"use strict";var r=n(0),o=n(369),i=n(69),a=n(169),c=n(71),s=n(391);e.a=function(t,e,n){var u=Object(i.b)(),d=Object(o.a)((function(t){return Object(a.a)("/transactions/buy/{userId}","POST",t)})),l=d.data,b=d.error,j=d.isLoading,f=d.mutate,v=Object(o.a)((function(t){return Object(a.a)("/deposit/debet/{userId}","POST",t)})),O=v.data,h=v.error,m=v.isLoading,p=v.mutate;return Object(r.useEffect)((function(){if(null===l||void 0===l?void 0:l.data){var n=null===l||void 0===l?void 0:l.data;u(Object(c.b)(n)),t.push("/pin")}b&&e(!0)}),[l,b]),Object(r.useEffect)((function(){O&&s.a.success({title:n("search_product:alert.successPay"),text:null===O||void 0===O?void 0:O.message,href:"/"}),h&&e(!0)}),[O,h]),{errorMutationBuy:b,isLoadingMutationBuy:j,mutateBuy:f,mutateDebit:p,dataMutationDebit:O,errorMutationDebit:h,isLoadingMutationDebit:m}}},537:function(t,e,n){"use strict";n.r(e);var r=n(49),o=n(0),i=n(388),a=n(342),c=n(385),s=n(504),u=n(461),d=n(428),l=n(389),b=n(128),j=n(127),f=n(460),v=n(429),O=n(255),h=n.n(O),m=n(370),p=n.n(m),g=n(69),x=n(70),y=n(355),w=n(169),M=function(t,e){var n=Object(y.a)(["getUserByQrCode",t],(function(){return Object(w.a)("/user/saldo","GET",{nis:t})}),{enabled:!!t}),r=n.data,i=n.error,a=n.isLoading;return Object(o.useEffect)((function(){i&&e(!0)}),[i]),{user:r,errorUser:i,isLoading:a}},k=n(39),L=n(181),_=n(424),E=n(402),S=n(3);e.default=function(t){var e,n,O,m,y=Object(E.a)(),w=Object(g.b)(),B=t.t,D=t.handleCloseModal,T=t.history,q=t.items,U=t.qty,C=t.total,I=Object(o.useState)(),P=Object(r.a)(I,2),N=P[0],Y=P[1],A=Object(o.useState)(!1),F=Object(r.a)(A,2),H=F[0],J=F[1],R=M(N,J),z=R.user,G=R.errorUser,K=R.isLoading,Q=h()(z,"data",{}),Z=Object(_.a)(T,J,B),V=Z.isLoadingMutationBuy,W=Z.mutateBuy,X=Z.errorMutationBuy;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(i.a,{children:[!z&&Object(S.jsx)(p.a,{delay:300,onError:function(){J(!0)},onScan:function(t){t&&Y(t)},style:{width:"100%"}}),K?Object(S.jsx)(k.h,{label:B("common:loading")}):!G&&Object(S.jsxs)(a.a,{children:[Object(S.jsxs)(c.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(u.a,{children:Object(S.jsx)(f.a,{})})}),Object(S.jsx)(d.a,{primary:null===Q||void 0===Q||null===(e=Q.user)||void 0===e?void 0:e.nis,secondary:"".concat(null===Q||void 0===Q||null===(n=Q.user)||void 0===n?void 0:n.fullName," - ").concat(null===Q||void 0===Q||null===(O=Q.user)||void 0===O?void 0:O.class)})]},"user"),Object(S.jsxs)(c.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(u.a,{children:Object(S.jsx)(v.a,{})})}),Object(S.jsx)(d.a,{primary:B("common:balance"),secondary:Object(L.b)(null===Q||void 0===Q||null===(m=Q.deposit)||void 0===m?void 0:m.saldo)})]},"saldo")]})]}),Object(S.jsxs)(l.a,{children:[Object(S.jsx)(b.a,{onClick:function(){w(Object(x.a)()),D()},color:"primary",children:B("common:cancel")}),Object(S.jsxs)(b.a,{onClick:function(){var t;W({userId:null===Q||void 0===Q||null===(t=Q.user)||void 0===t?void 0:t.userId,total:C,qty:U,items:q})},color:"primary",disabled:V,children:[B("common:pay"),V&&Object(S.jsx)(j.a,{size:18,className:y.button_progress})]})]}),Object(S.jsx)(k.a.Floating,{severity:"error",showAlert:H,setShowAlert:J,text:(null===G||void 0===G?void 0:G.message)||(null===X||void 0===X?void 0:X.message)||B("glossary:notFoundUser")})]})}}}]);
//# sourceMappingURL=26.e2ef2638.chunk.js.map