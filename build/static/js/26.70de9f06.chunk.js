(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[26],{138:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=function(t){localStorage.setItem("maqshaf-user",JSON.stringify(null===t||void 0===t?void 0:t.data))},i=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(t){return console.error(t),null}},a=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},139:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=n(471),i=function(t){return(null===t||void 0===t?void 0:t.code)===r.a.OK},a=function(t){return(null===t||void 0===t?void 0:t.code)===r.a.UNAUTHORIZED}},150:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(58),i=n(211),a=n.n(i),o=n(212),s=n.n(o),c=n(139),l=n(138),u=function(t){return"GET"===t},d=function(t,e,n,i){var o;return fetch(function(t,e,n){return a()(t,n)+(u(e)?"?".concat(s.a.stringify(n)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,n),{method:e,headers:Object(r.a)({api_token:null===(o=Object(l.a)())||void 0===o?void 0:o.token},!i&&{"Content-Type":"application/json"}),body:u(e)?void 0:i?n:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(Object(c.b)(t)&&Object(l.b)(),!Object(c.a)(t)){var e=t.code,n=t.message,r=t.data,i=new Error(n);throw i.code=e,i.message=n,i.data=r,i}return t}))}},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return c}));var r=n(0),i={SummaryDialog:Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(25),n.e(35)]).then(n.bind(null,496))})),IdentityDataDialog:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(15),n.e(29)]).then(n.bind(null,534))})),ConfirmationPinDialog:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(28)]).then(n.bind(null,500))}))},a={Dashboard:Object(r.lazy)((function(){return Promise.all([n.e(31),n.e(37)]).then(n.bind(null,501))})),Login:Object(r.lazy)((function(){return n.e(38).then(n.bind(null,505))}))},o=Object(r.lazy)((function(){return n.e(36).then(n.bind(null,532))})),s=Object(r.lazy)((function(){return Promise.all([n.e(21),n.e(40)]).then(n.bind(null,478))})),c=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(19),n.e(41)]).then(n.bind(null,533))}))},213:function(t,e){},215:function(t,e,n){"use strict";var r=n(1),i=n(5),a=n(0),o=(n(9),n(8)),s=n(20),c=n(26),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(t,e){var n=t.align,s=void 0===n?"inherit":n,u=t.classes,d=t.className,h=t.color,p=void 0===h?"initial":h,b=t.component,m=t.display,f=void 0===m?"initial":m,g=t.gutterBottom,v=void 0!==g&&g,j=t.noWrap,O=void 0!==j&&j,y=t.paragraph,x=void 0!==y&&y,S=t.variant,w=void 0===S?"body1":S,R=t.variantMapping,E=void 0===R?l:R,M=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=b||(x?"p":E[w]||l[w])||"span";return a.createElement(N,Object(r.a)({className:Object(o.a)(u.root,d,"inherit"!==w&&u[w],"initial"!==p&&u["color".concat(Object(c.a)(p))],O&&u.noWrap,v&&u.gutterBottom,x&&u.paragraph,"inherit"!==s&&u["align".concat(Object(c.a)(s))],"initial"!==f&&u["display".concat(Object(c.a)(f))]),ref:e},M))}));e.a=Object(s.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},344:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(4),i=n(0),a=n.n(i),o=n(6),s=n(2),c=n(29),l=n(66),u=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(l.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;o.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(28).a),d=n(113);function h(t,e,n){var i=a.a.useRef(!1),c=a.a.useState(0)[1],l=Object(s.k)(t,e,n),h=Object(d.b)(),p=a.a.useRef();p.current?p.current.setOptions(l):p.current=new u(h,l);var b=p.current.getCurrentResult();a.a.useEffect((function(){i.current=!0;var t=p.current.subscribe(o.a.batchCalls((function(){i.current&&c((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var m=a.a.useCallback((function(t,e){p.current.mutate(t,e).catch(s.i)}),[]);if(b.error&&p.current.options.useErrorBoundary)throw b.error;return Object(r.a)({},b,{mutate:m,mutateAsync:b.mutate})}},351:function(t,e,n){"use strict";var r=n(1),i=n(5),a=n(0),o=(n(9),n(8)),s=n(20),c=n(15),l=a.forwardRef((function(t,e){var n=t.absolute,s=void 0!==n&&n,c=t.classes,l=t.className,u=t.component,d=void 0===u?"hr":u,h=t.flexItem,p=void 0!==h&&h,b=t.light,m=void 0!==b&&b,f=t.orientation,g=void 0===f?"horizontal":f,v=t.role,j=void 0===v?"hr"!==d?"separator":void 0:v,O=t.variant,y=void 0===O?"fullWidth":O,x=Object(i.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(d,Object(r.a)({className:Object(o.a)(c.root,l,"fullWidth"!==y&&c[y],s&&c.absolute,p&&c.flexItem,m&&c.light,"vertical"===g&&c.vertical),role:j,ref:e},x))}));e.a=Object(s.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.a)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},391:function(t,e,n){"use strict";var r=n(1),i=n(5),a=n(0),o=(n(9),n(8)),s=n(215),c=n(20),l=n(340),u=a.forwardRef((function(t,e){var n=t.children,c=t.classes,u=t.className,d=t.component,h=void 0===d?"div":d,p=t.disablePointerEvents,b=void 0!==p&&p,m=t.disableTypography,f=void 0!==m&&m,g=t.position,v=t.variant,j=Object(i.a)(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(l.b)()||{},y=v;return v&&O.variant,O&&!y&&(y=O.variant),a.createElement(l.a.Provider,{value:null},a.createElement(h,Object(r.a)({className:Object(o.a)(c.root,u,"end"===g?c.positionEnd:c.positionStart,b&&c.disablePointerEvents,O.hiddenLabel&&c.hiddenLabel,"filled"===y&&c.filled,"dense"===O.margin&&c.marginDense),ref:e},j),"string"!==typeof n||f?n:a.createElement(s.a,{color:"textSecondary"},n)))}));e.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},392:function(t,e,n){"use strict";e.a=function(t){return{button_login:{marginTop:16},login_box:{padding:16},login_root:{margin:"0 auto",marginTop:"10%"},form:{width:"100%",marginTop:24},margin:{margin:t.spacing(2)},logo_login_wrapper:{paddingBottom:16,margin:"0 auto",textAlign:"center"}}}},510:function(t,e,n){"use strict";n.r(e);var r=n(210),i=n(513),a=n(125),o=n(353),s=n(130),c=n(351),l=n(522),u=n(391),d=n(0),h=n(156),p=Object(h.a)(d.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle"),b=Object(h.a)(d.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock"),m=n(20),f=n(39),g=n(49),v=n(344),j=n(150),O=n(139),y=n(138),x=function(t){var e=Object(d.useState)(!1),n=Object(g.a)(e,2),r=n[0],i=n[1],a=Object(v.a)("listAllUser",(function(t){return Object(j.a)("/administrator/login","POST",t)})),o=a.data,s=a.error,c=a.isLoading,l=a.mutate;return Object(d.useEffect)((function(){Object(O.a)(o)&&(Object(y.c)(o),t.replace("/dashboard")),s&&i(!0)}),[o,s]),{error:s,isLoading:c,handleSubmit:function(t){t.preventDefault();var e=t.target[0].value,n=t.target[1].value;l({username:e,password:n})},showAlert:r,setShowAlert:i}},S=n(392),w=n(3),R=Object(m.a)(S.a)((function(t){var e=t.classes,n=t.t,r=t.history,i=x(r),d=i.error,h=i.isLoading,m=i.handleSubmit,g=i.showAlert,v=i.setShowAlert;return Object(w.jsxs)(a.a,{className:e.login_root,item:!0,xs:12,md:6,lg:4,children:[Object(w.jsxs)(o.a,{variant:"outlined",className:e.login_box,children:[Object(w.jsx)(s.a,{display:"flex",justifyContent:"center",className:e.logo_login_wrapper,children:Object(w.jsx)(s.a,{alignSelf:"center",children:Object(w.jsx)("h2",{children:"Login Administrator"})})}),Object(w.jsx)(c.a,{}),Object(w.jsx)("form",{onSubmit:m,className:e.form,children:Object(w.jsxs)(s.a,{display:"flex",flexDirection:"column",children:[Object(w.jsx)(l.a,{className:e.margin,placeholder:n("dashboard_login:placeholderUsername"),InputProps:{startAdornment:Object(w.jsx)(u.a,{position:"start",children:Object(w.jsx)(p,{})})}}),Object(w.jsx)(l.a,{type:"password",className:e.margin,placeholder:n("dashboard_login:placeholderPassword"),InputProps:{startAdornment:Object(w.jsx)(u.a,{position:"start",children:Object(w.jsx)(b,{})})}}),Object(w.jsx)(f.b,{type:"submit",className:e.button_login,isLoading:h,children:n("dashboard_login:loginLabel")})]})})]}),Object(w.jsx)(f.a.Floating,{severity:"error",showAlert:g,setShowAlert:v,text:null===d||void 0===d?void 0:d.message})]})})),E=n(123),M=n(155),N=Object(E.a)((function(t){return{root:{"& main":{padding:t.spacing(3)}}}})),A=function(t){var e=t.children,n=t.t,r=t.history,i=N();return Object(d.useEffect)((function(){Object(y.a)()&&r.replace("/dashboard")}),[]),Object(w.jsxs)("div",{className:i.root,children:[Object(w.jsx)(M.c.Login,{t:n}),Object(w.jsx)("main",{children:e}),Object(w.jsx)(M.a,{t:n})]})};e.default=Object(i.a)(["dashboard_login","glossary"])((function(t){var e=t.t,n=t.history,i=t.location;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(r.a,{children:[Object(w.jsx)("title",{children:e("dashboard_login:metaTitle")}),Object(w.jsx)("meta",{name:"description",content:e("dashboard_login:metaDescription")})]}),Object(w.jsx)(A,{t:e,history:n,children:Object(w.jsx)(R,{t:e,history:n,location:i})})]})}))}}]);
//# sourceMappingURL=26.70de9f06.chunk.js.map