(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[18,30],{119:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var n=function(t){localStorage.setItem("maqshaf-user",JSON.stringify(null===t||void 0===t?void 0:t.data))},i=function(){try{return JSON.parse(localStorage.getItem("maqshaf-user"))}catch(t){return console.error(t),null}},o=function(){localStorage.clear(),window.location.replace("/dashboard/login")}},128:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var n=r(440),i=function(t){return(null===t||void 0===t?void 0:t.code)===n.a.OK},o=function(t){return(null===t||void 0===t?void 0:t.code)===n.a.UNAUTHORIZED}},132:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(168),i=r.n(n),o=r(169),a=r.n(o),s=r(128),c=r(119),u=function(t){return"GET"===t},l=function(t,e,r){var n;return fetch(function(t,e,r){return i()(t,r)+(u(e)?"?".concat(a.a.stringify(r)):"")}("https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com"+t,e,r),{method:e,headers:{api_token:null===(n=Object(c.a)())||void 0===n?void 0:n.token,"Content-Type":"application/json"},body:u(e)?void 0:JSON.stringify(r)}).then((function(t){return t.json()})).then((function(t){if(Object(s.b)(t)&&Object(c.b)(),!Object(s.a)(t)){var e=t.code,r=t.message,n=t.data,i=new Error(r);throw i.code=e,i.message=r,i.data=n,i}return t}))}},134:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return s}));var n=r(0),i={SummaryDialog:Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(6),r.e(26)]).then(r.bind(null,458))})),IdentityDataDialog:Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(6),r.e(13),r.e(22)]).then(r.bind(null,486))})),ConfirmationPinDialog:Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(6),r.e(14)]).then(r.bind(null,460))}))},o={Dashboard:Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(24),r.e(34)]).then(r.bind(null,461))})),Login:Object(n.lazy)((function(){return r.e(32).then(r.bind(null,465))}))},a=Object(n.lazy)((function(){return r.e(33).then(r.bind(null,484))})),s=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(3),r.e(15),r.e(36)]).then(r.bind(null,485))}))},137:function(t,e,r){"use strict";var n=r(0),i=n.createContext();e.a=i},147:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));var n=r(44),i=r.n(n),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp",r=t.toString().split("").reverse().join(""),n=r.match(/\d{1,3}/g);return"".concat(e,". ").concat(n.join(".").split("").reverse().join(""))},a=function(t){return i()(t).format("MM MMM YYYY, HH:mm")}},148:function(t,e,r){"use strict";var n=r(51),i=r(127),o=r(55),a=r(0),s=r(28),c=r(110),u=r(134),l=r(119),d=r(4),p=Object(c.a)((function(t){return{drawer_header:Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"}),main_wrapper:{flexGrow:1,padding:t.spacing(3)},content:{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingscreen})},content_shift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeout,duration:t.transitions.duration.enteringscreen}),marginLeft:0}}}));e.a=function(t){var e=t.children,r=t.t,o=t.history,c=p(),h=Object(a.useState)(!1),f=Object(i.a)(h,2),b=f[0],m=f[1];return Object(a.useEffect)((function(){Object(l.a)()||o.replace("/dashboard/login")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.b.Dashboard,{t:r,open:b,handleDrawerOpen:function(){return m(!0)}}),Object(d.jsx)(u.d,{t:r,open:b,handleDrawerClose:function(){return m(!1)}}),Object(d.jsxs)("main",{className:Object(s.a)(c.content,Object(n.a)({},c.content_shift,b)),children:[Object(d.jsx)("div",{className:c.drawer_header}),e]}),Object(d.jsx)(u.a,{t:r})]})}},161:function(t,e,r){"use strict";var n=r(0),i=n.createContext();e.a=i},170:function(t,e){},203:function(t,e,r){"use strict";var n=r(36),i=r(1),o=(r(12),r(33));function a(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}function s(t){var e=function(e){var r=t(e);return e.css?Object(i.a)({},Object(o.a)(r,t(Object(i.a)({theme:e.theme},e.css))),a(e.css,[t.filterProps])):e.sx?Object(i.a)({},Object(o.a)(r,t(Object(i.a)({theme:e.theme},e.sx))),a(e.sx,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css","sx"].concat(Object(n.a)(t.filterProps)),e}var c=s;var u=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce((function(e,r){var n=r(t);return n?Object(o.a)(e,n):e}),{})};return n.propTypes={},n.filterProps=e.reduce((function(t,e){return t.concat(e.filterProps)}),[]),n},l=r(19),d=r(56);function p(t,e){return e&&"string"===typeof e?e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:null}),t):null}var h=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,i=t.themeKey,o=t.transform,a=function(t){if(null==t[e])return null;var r=t[e],a=p(t.theme,i)||{};return Object(d.a)(t,r,(function(t){var e;return"function"===typeof a?e=a(t):Array.isArray(a)?e=a[t]||t:(e=p(a,t)||t,o&&(e=o(e))),!1===n?e:Object(l.a)({},n,e)}))};return a.propTypes={},a.filterProps=[e],a};function f(t){return"number"!==typeof t?t:"".concat(t,"px solid")}var b=u(h({prop:"border",themeKey:"borders",transform:f}),h({prop:"borderTop",themeKey:"borders",transform:f}),h({prop:"borderRight",themeKey:"borders",transform:f}),h({prop:"borderBottom",themeKey:"borders",transform:f}),h({prop:"borderLeft",themeKey:"borders",transform:f}),h({prop:"borderColor",themeKey:"palette"}),h({prop:"borderRadius",themeKey:"shape"})),m=u(h({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),h({prop:"display"}),h({prop:"overflow"}),h({prop:"textOverflow"}),h({prop:"visibility"}),h({prop:"whiteSpace"})),v=u(h({prop:"flexBasis"}),h({prop:"flexDirection"}),h({prop:"flexWrap"}),h({prop:"justifyContent"}),h({prop:"alignItems"}),h({prop:"alignContent"}),h({prop:"order"}),h({prop:"flex"}),h({prop:"flexGrow"}),h({prop:"flexShrink"}),h({prop:"alignSelf"}),h({prop:"justifyItems"}),h({prop:"justifySelf"})),y=u(h({prop:"gridGap"}),h({prop:"gridColumnGap"}),h({prop:"gridRowGap"}),h({prop:"gridColumn"}),h({prop:"gridRow"}),h({prop:"gridAutoFlow"}),h({prop:"gridAutoColumns"}),h({prop:"gridAutoRows"}),h({prop:"gridTemplateColumns"}),h({prop:"gridTemplateRows"}),h({prop:"gridTemplateAreas"}),h({prop:"gridArea"})),O=u(h({prop:"position"}),h({prop:"zIndex",themeKey:"zIndex"}),h({prop:"top"}),h({prop:"right"}),h({prop:"bottom"}),h({prop:"left"})),g=u(h({prop:"color",themeKey:"palette"}),h({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),j=h({prop:"boxShadow",themeKey:"shadows"});function x(t){return t<=1?"".concat(100*t,"%"):t}var R=h({prop:"width",transform:x}),S=h({prop:"maxWidth",transform:x}),C=h({prop:"minWidth",transform:x}),w=h({prop:"height",transform:x}),E=h({prop:"maxHeight",transform:x}),T=h({prop:"minHeight",transform:x}),I=(h({prop:"size",cssProperty:"width",transform:x}),h({prop:"size",cssProperty:"height",transform:x}),u(R,S,C,w,E,T,h({prop:"boxSizing"}))),k=r(117),P=u(h({prop:"fontFamily",themeKey:"typography"}),h({prop:"fontSize",themeKey:"typography"}),h({prop:"fontStyle",themeKey:"typography"}),h({prop:"fontWeight",themeKey:"typography"}),h({prop:"letterSpacing"}),h({prop:"lineHeight"}),h({prop:"textAlign"})),M=r(5),Q=r(0),A=r.n(Q),D=r(28),z=r(23),N=r.n(z),U=r(94);function _(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}var F=r(35),L=function(t){var e=function(t){return function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.name,a=Object(M.a)(n,["name"]),s=o,c="function"===typeof e?function(t){return{root:function(r){return e(Object(i.a)({theme:t},r))}}}:{root:e},u=Object(U.a)(c,Object(i.a)({Component:t,name:o||t.displayName,classNamePrefix:s},a));e.filterProps&&(r=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var l=A.a.forwardRef((function(e,n){var o=e.children,a=e.className,s=e.clone,c=e.component,l=Object(M.a)(e,["children","className","clone","component"]),d=u(e),p=Object(D.a)(d.root,a),h=l;if(r&&(h=_(h,r)),s)return A.a.cloneElement(o,Object(i.a)({className:Object(D.a)(o.props.className,p)},h));if("function"===typeof o)return o(Object(i.a)({className:p},h));var f=c||t;return A.a.createElement(f,Object(i.a)({ref:n,className:p},h),o)}));return N()(l,t),l}}(t);return function(t,r){return e(t,Object(i.a)({defaultTheme:F.a},r))}},K=c(u(b,m,v,y,O,g,j,I,k.b,P)),H=L("div")(K,{name:"MuiBox"});e.a=H},204:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var n=r(3),i=r(22),o=r(2),a=r(6),s=r(25),c=r(21),u=r(37),l=r(17),d=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(i.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),p(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&h(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(o.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!o.e&&!this.currentResult.isStale&&Object(o.f)(this.options.staleTime)){var e=Object(o.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!o.e&&!1!==this.options.enabled&&Object(o.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||s.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,i=this.options,a=this.currentResult,s=this.currentResultState,c=this.currentResultOptions,l=t!==n,d=l?t.state:this.currentQueryInitialState,b=l?this.currentResult:this.previousQueryResult,m=t.state,v=m.dataUpdatedAt,y=m.error,O=m.errorUpdatedAt,g=m.isFetching,j=m.status,x=!1,R=!1;if(e.optimisticResults){var S=this.hasListeners(),C=!S&&p(t,e),w=S&&h(t,n,e,i);(C||w)&&(g=!0,v||(j="loading"))}if(e.keepPreviousData&&!m.dataUpdateCount&&(null==b?void 0:b.isSuccess)&&"error"!==j)r=b.data,v=b.dataUpdatedAt,j=b.status,x=!0;else if(e.select&&"undefined"!==typeof m.data)if(a&&m.data===(null==s?void 0:s.data)&&e.select===(null==c?void 0:c.select)&&!this.previousSelectError)r=a.data;else try{r=e.select(m.data),!1!==e.structuralSharing&&(r=Object(o.n)(null==a?void 0:a.data,r)),this.previousSelectError=null}catch(T){Object(u.a)().error(T),y=T,this.previousSelectError=T,O=Date.now(),j="error"}else r=m.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===j){var E;if((null==a?void 0:a.isPlaceholderData)&&e.placeholderData===(null==c?void 0:c.placeholderData))E=a.data;else if(E="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof E)try{E=e.select(E),!1!==e.structuralSharing&&(E=Object(o.n)(null==a?void 0:a.data,E)),this.previousSelectError=null}catch(T){Object(u.a)().error(T),y=T,this.previousSelectError=T,O=Date.now(),j="error"}"undefined"!==typeof E&&(j="success",r=E,R=!0)}return{status:j,isLoading:"loading"===j,isSuccess:"success"===j,isError:"error"===j,isIdle:"idle"===j,data:r,dataUpdatedAt:v,error:y,errorUpdatedAt:O,failureCount:m.fetchFailureCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>d.dataUpdateCount||m.errorUpdateCount>d.errorUpdateCount,isFetching:g,isLoadingError:"error"===j&&0===m.dataUpdatedAt,isPlaceholderData:R,isPreviousData:x,isRefetchError:"error"===j&&0!==m.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,i=r.notifyOnChangePropsExclusions;if(!n&&!i)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var o="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,a=t[n]!==e[n],s=null==o?void 0:o.some((function(t){return t===r})),c=null==i?void 0:i.some((function(t){return t===r}));return a&&!c&&(!o||s)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(o.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;a.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(c.a);function p(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function h(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&f(t,r)}function f(t,e){return t.isStaleByTime(e.staleTime)}var b=r(0),m=r.n(b);function v(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var y=m.a.createContext(v()),O=r(97);function g(t,e){var r=m.a.useRef(!1),n=m.a.useState(0)[1],i=Object(O.b)(),o=m.a.useContext(y),s=i.defaultQueryObserverOptions(t);s.optimisticResults=!0,s.onError&&(s.onError=a.a.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=a.a.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=a.a.batchCalls(s.onSettled)),s.suspense&&"number"!==typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&(o.isReset()||(s.retryOnMount=!1));var c=m.a.useState((function(){return new e(i,s)}))[0],u=c.getOptimisticResult(s);if(m.a.useEffect((function(){r.current=!0,o.clearReset();var t=c.subscribe(a.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return c.updateResult(),function(){r.current=!1,t()}}),[o,c]),m.a.useEffect((function(){c.setOptions(s,{listeners:!1})}),[s,c]),s.suspense&&u.isLoading)throw c.fetchOptimistic(s).then((function(t){var e=t.data;null==s.onSuccess||s.onSuccess(e),null==s.onSettled||s.onSettled(e,null)})).catch((function(t){o.clearReset(),null==s.onError||s.onError(t),null==s.onSettled||s.onSettled(void 0,t)}));if((s.suspense||s.useErrorBoundary)&&u.isError&&!u.isFetching)throw u.error;return"tracked"===s.notifyOnChangeProps&&(u=c.trackResult(u)),u}function j(t,e,r){return g(Object(o.l)(t,e,r),d)}},265:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r(3),i=r(0),o=r.n(i),a=r(6),s=r(2),c=r(22),u=r(58),l=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.setOptions(r),n.bindMethods(),n.updateResult(),n}Object(c.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},r.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},r.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},r.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},r.getCurrentResult=function(){return this.currentResult},r.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},r.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(n.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},r.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(u.b)();this.currentResult=Object(n.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},r.notify=function(t){var e=this;a.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(r(21).a),d=r(97);function p(t,e,r){var i=o.a.useRef(!1),c=o.a.useState(0)[1],u=Object(s.k)(t,e,r),p=Object(d.b)(),h=o.a.useRef();h.current?h.current.setOptions(u):h.current=new l(p,u);var f=h.current.getCurrentResult();o.a.useEffect((function(){i.current=!0;var t=h.current.subscribe(a.a.batchCalls((function(){i.current&&c((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var b=o.a.useCallback((function(t,e){h.current.mutate(t,e).catch(s.i)}),[]);if(f.error&&h.current.options.useErrorBoundary)throw f.error;return Object(n.a)({},f,{mutate:b,mutateAsync:f.mutate})}},279:function(t,e,r){"use strict";var n=r(1),i=r(5),o=r(0),a=(r(12),r(28)),s=r(30),c=r(137),u=r(32),l=o.forwardRef((function(t,e){var r=t.classes,s=t.className,u=t.component,l=void 0===u?"tr":u,d=t.hover,p=void 0!==d&&d,h=t.selected,f=void 0!==h&&h,b=Object(i.a)(t,["classes","className","component","hover","selected"]),m=o.useContext(c.a);return o.createElement(l,Object(n.a)({ref:e,className:Object(a.a)(r.root,s,m&&{head:r.head,footer:r.footer}[m.variant],p&&r.hover,f&&r.selected),role:"tr"===l?null:"row"},b))}));e.a=Object(s.a)((function(t){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:t.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(u.a)(t.palette.secondary.main,t.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(l)},280:function(t,e,r){"use strict";var n=r(5),i=r(1),o=r(0),a=(r(12),r(28)),s=r(30),c=r(49),u=r(32),l=r(161),d=r(137),p=o.forwardRef((function(t,e){var r,s,u=t.align,p=void 0===u?"inherit":u,h=t.classes,f=t.className,b=t.component,m=t.padding,v=t.scope,y=t.size,O=t.sortDirection,g=t.variant,j=Object(n.a)(t,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.useContext(l.a),R=o.useContext(d.a),S=R&&"head"===R.variant;b?(s=b,r=S?"columnheader":"cell"):s=S?"th":"td";var C=v;!C&&S&&(C="col");var w=m||(x&&x.padding?x.padding:"normal"),E=y||(x&&x.size?x.size:"medium"),T=g||R&&R.variant,I=null;return O&&(I="asc"===O?"ascending":"descending"),o.createElement(s,Object(i.a)({ref:e,className:Object(a.a)(h.root,h[T],f,"inherit"!==p&&h["align".concat(Object(c.a)(p))],"normal"!==w&&h["padding".concat(Object(c.a)(w))],"medium"!==E&&h["size".concat(Object(c.a)(E))],"head"===T&&x&&x.stickyHeader&&h.stickyHeader),"aria-sort":I,role:r,scope:C},j))}));e.a=Object(s.a)((function(t){return{root:Object(i.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.type?Object(u.e)(Object(u.a)(t.palette.divider,1),.88):Object(u.b)(Object(u.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},body:{color:t.palette.text.primary},footer:{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:t.palette.background.default}}}),{name:"MuiTableCell"})(p)},292:function(t,e,r){"use strict";var n=r(183),i=r(184);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(r(0)),a=(0,n(r(185)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.default=a},293:function(t,e,r){"use strict";var n=r(183),i=r(184);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(r(0)),a=(0,n(r(185)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.default=a},377:function(t,e,r){"use strict";e.a=function(t){return{button_tambah:{marginBottom:20},title_divider:{marginBottom:20},paper_form:{padding:20}}}},425:function(t,e,r){"use strict";var n=r(183),i=r(184);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(r(0)),a=(0,n(r(185)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.default=a},476:function(t,e,r){"use strict";r.r(e);var n=r(167),i=r(474),o=r(203),a=r(286),s=r(279),c=r(280),u=r(201),l=r(7),d=r(293),p=r.n(d),h=r(425),f=r.n(h),b=r(292),m=r.n(b),v=r(30),y=r(34),O=r(147),g=r(204),j=r(265),x=r(132),R=function(){var t=Object(g.a)("listAllAdministrator",(function(){return Object(x.a)("/administrator/all","GET")})),e=t.data,r=t.isLoading,n=t.refetch,i=Object(j.a)("administratorMutationUpdate",(function(t){return Object(x.a)("/administrator/delete/".concat(t),"DELETE",{})})).mutate;return{data:e,isLoading:r,refetch:n,handleDelete:function(t){i(t),setTimeout((function(){n()}),0)}}},S=r(377),C=r(4),w=function(t){return[{name:"number",label:t("common:label.no")},{name:"id",label:t("dashboard_administrator:table.header.id")},{name:"username",label:t("dashboard_administrator:table.header.username")},{name:"fullName",label:t("common:label.fullName")},{name:"createdAt",label:t("common:label.createdAt")},{name:"action",label:t("common:label.action")}]},E=Object(v.a)(S.a)((function(t){var e,r=t.classes,n=t.t,i=Object(l.f)(),d=R(),h=d.data,b=d.isLoading,v=d.handleDelete;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(o.a,{display:"flex",justifyContent:"center",className:r.logo_login_wrapper,children:Object(C.jsx)(o.a,{alignSelf:"center",children:Object(C.jsx)("h2",{children:n("dashboard_administrator:table.title")})})}),Object(C.jsx)(a.a,{startIcon:Object(C.jsx)(m.a,{}),variant:"contained",color:"primary",className:r.button_tambah,onClick:function(){return i.push("/dashboard/administrator/add")},children:n("dashboard_administrator:button.add")}),Object(C.jsx)(y.d,{isLoading:b,headers:w(n),children:null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.map((function(t,e){return Object(C.jsxs)(s.a,{children:[Object(C.jsx)(c.a,{component:"th",scope:"row",children:e+1}),Object(C.jsx)(c.a,{children:t.administratorId}),Object(C.jsx)(c.a,{children:t.username}),Object(C.jsx)(c.a,{children:t.fullName}),Object(C.jsx)(c.a,{children:Object(O.a)(t.createdAt)}),Object(C.jsxs)(c.a,{children:[Object(C.jsx)(u.a,{title:"Ubah","aria-label":"edit",color:"primary",onClick:function(){return i.push("/dashboard/administrator/"+t.administratorId)},children:Object(C.jsx)(p.a,{fontSize:"small"})}),Object(C.jsx)(u.a,{title:"Hapus","aria-label":"delete",color:"secondary",onClick:function(){return v(t.administratorId)},children:Object(C.jsx)(f.a,{fontSize:"small"})})]})]},t.administratorId)}))})]})})),T=r(148);e.default=Object(i.a)(["dashboard_administrator","glossary"])((function(t){var e=t.t,r=t.history,i=t.location;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(n.a,{children:[Object(C.jsx)("title",{children:e("dashboard_administrator:metaTitle")}),Object(C.jsx)("meta",{name:"description",content:e("dashboard_administrator:metaDescription")})]}),Object(C.jsx)(T.a,{t:e,history:r,children:Object(C.jsx)(E,{t:e,history:r,location:i})})]})}))}}]);
//# sourceMappingURL=18.e5c54ecb.chunk.js.map