(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[26],{138:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var o=n(457),r=function(t){return(null===t||void 0===t?void 0:t.code)===o.a.OK},i=function(t){return(null===t||void 0===t?void 0:t.code)===o.a.UNAUTHORIZED}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(58),r=n(180),i=n.n(r),a=n(181),c=n.n(a),s=n(138),u=n(134),d=function(t){return"GET"===t},l=function(t,e,n,r){var a;return fetch(function(t,e,n){return i()(t,n)+(d(e)?"?".concat(c.a.stringify(n)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,n),{method:e,headers:Object(o.a)({api_token:null===(a=Object(u.a)())||void 0===a?void 0:a.token},!r&&{"Content-Type":"application/json"}),body:d(e)?void 0:r?n:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(Object(s.b)(t)&&Object(u.b)(),!Object(s.a)(t)){var e=t.code,n=t.message,o=t.data,r=new Error(n);throw r.code=e,r.message=n,r.data=o,r}return t}))}},154:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var o=n(50),r=n.n(o),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp",n=t.toString().split("").reverse().join(""),o=n.match(/\d{1,3}/g);return"".concat(e,". ").concat(o.join(".").split("").reverse().join(""))},a=function(t){return r()(t).format("MM MMM YYYY, HH:mm")}},182:function(t,e){},339:function(t,e,n){"use strict";var o=n(123),r=Object(o.a)((function(t){return{list_modal_image:{marginRight:12,"& img":{width:50,height:50}},list_modal_text:{color:t.color.black},button_progress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},input_pin:{width:"100%"}}}));e.a=r},375:function(t,e,n){"use strict";var o=n(0),r=n(258),i=n(68),a=n(140),c=n(71),s=n(385),u=n.n(s),d=n(393),l=n.n(d)()(u.a),b={success:function(t){return l.fire({title:t.title,icon:"success",text:t.text}).then((function(){return t.href&&(window.location.href=t.href),Promise.resolve()}))}};e.a=function(t,e,n){var s=Object(i.b)(),u=Object(r.a)((function(t){return Object(a.a)("/transactions/buy/{userId}","POST",t)})),d=u.data,l=u.error,j=u.isLoading,f=u.mutate,v=Object(r.a)((function(t){return Object(a.a)("/deposit/debet/{userId}","POST",t)})),O=v.data,h=v.error,m=v.isLoading,p=v.mutate;return Object(o.useEffect)((function(){if(null===d||void 0===d?void 0:d.data){var n=null===d||void 0===d?void 0:d.data;s(Object(c.b)(n)),t.push("/pin")}l&&e(!0)}),[d,l]),Object(o.useEffect)((function(){O&&b.success({title:n("search_product:alert.successPay"),text:null===O||void 0===O?void 0:O.message,href:"/"}),h&&e(!0)}),[O,h]),{errorMutationBuy:l,isLoadingMutationBuy:j,mutateBuy:f,mutateDebit:p,dataMutationDebit:O,errorMutationDebit:h,isLoadingMutationDebit:m}}},512:function(t,e,n){"use strict";n.r(e);var o=n(49),r=n(0),i=n(353),a=n(360),c=n(363),s=n(426),u=n(509),d=n(384),l=n(354),b=n(128),j=n(127),f=n(478),v=n(425),O=n(249),h=n.n(O),m=n(365),p=n.n(m),g=n(68),y=n(69),x=n(201),w=n(140),M=function(t,e){var n=Object(x.a)(["getUserByQrCode",t],(function(){return Object(w.a)("/user/saldo","GET",{nis:t},{enabled:!!t})})),o=n.data,i=n.error,a=n.isLoading;return Object(r.useEffect)((function(){i&&e(!0)}),[i]),{user:o,errorUser:i,isLoading:a}},k=n(39),L=n(154),_=n(375),E=n(339),S=n(3);e.default=function(t){var e,n,O,m,x=Object(E.a)(),w=Object(g.b)(),B=t.t,T=t.handleCloseModal,q=t.history,U=t.items,C=t.qty,D=t.total,I=Object(r.useState)(),N=Object(o.a)(I,2),P=N[0],Y=N[1],A=Object(r.useState)(!1),F=Object(o.a)(A,2),H=F[0],J=F[1],R=M(P,J),z=R.user,G=R.errorUser,K=R.isLoading,Q=h()(z,"data",{}),Z=Object(_.a)(q,J,B),V=Z.isLoadingMutationBuy,W=Z.mutateBuy,X=Z.errorMutationBuy;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(i.a,{children:[!z&&Object(S.jsx)(p.a,{delay:300,onError:function(){J(!0)},onScan:function(t){t&&Y(t)},style:{width:"100%"}}),K?Object(S.jsx)(k.h,{label:B("common:loading")}):!G&&Object(S.jsxs)(a.a,{children:[Object(S.jsxs)(c.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(u.a,{children:Object(S.jsx)(f.a,{})})}),Object(S.jsx)(d.a,{primary:null===Q||void 0===Q||null===(e=Q.user)||void 0===e?void 0:e.nis,secondary:"".concat(null===Q||void 0===Q||null===(n=Q.user)||void 0===n?void 0:n.fullName," - ").concat(null===Q||void 0===Q||null===(O=Q.user)||void 0===O?void 0:O.class)})]},"user"),Object(S.jsxs)(c.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(u.a,{children:Object(S.jsx)(v.a,{})})}),Object(S.jsx)(d.a,{primary:B("common:balance"),secondary:Object(L.b)(null===Q||void 0===Q||null===(m=Q.deposit)||void 0===m?void 0:m.saldo)})]},"saldo")]})]}),Object(S.jsxs)(l.a,{children:[Object(S.jsx)(b.a,{onClick:function(){w(Object(y.a)()),T()},color:"primary",children:B("common:cancel")}),Object(S.jsxs)(b.a,{onClick:function(){var t;W({userId:null===Q||void 0===Q||null===(t=Q.user)||void 0===t?void 0:t.userId,total:D,qty:C,items:U})},color:"primary",disabled:V,children:[B("common:pay"),V&&Object(S.jsx)(j.a,{size:18,className:x.button_progress})]})]}),Object(S.jsx)(k.a.Floating,{severity:"error",showAlert:H,setShowAlert:J,text:(null===G||void 0===G?void 0:G.message)||(null===X||void 0===X?void 0:X.message)||B("glossary:notFoundUser")})]})}}}]);
//# sourceMappingURL=26.6cc1449e.chunk.js.map