(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[33],{181:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return i}));var n=c(51),a=c.n(n),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp";if(t){var c=t.toString().split("").reverse().join(""),n=c.match(/\d{1,3}/g);return"".concat(e,". ").concat(n.join(".").split("").reverse().join(""))}return t},i=function(t){return a()(t).format("DD MMM YYYY, HH:mm")}},402:function(t,e,c){"use strict";var n=c(123),a=Object(n.a)((function(t){return{list_modal_image:{marginRight:12,"& img":{width:50,height:50}},list_modal_text:{color:t.color.black},button_progress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},input_pin:{width:"100%"}}}));e.a=a},503:function(t,e,c){"use strict";c.r(e);var n=c(59),a=c(388),r=c(342),i=c(385),s=c(504),o=c(428),l=c(130),j=c(262),d=c(384),b=c(222),u=c(389),m=c(128),p=c(505),h=c(506),O=c(69),f=c(181),x=c(70),y=c(402),g=c(218),v=c(3);e.default=function(t){var e=Object(y.a)(),c=Object(O.b)(),_=t.t,k=t.handleCloseModal,q=t.items,w=t.history,C=t.total,I=function(t,e){var a=q.map((function(t){return t})),r=a.findIndex((function(e){return e.masterGoodsId===t.masterGoodsId}));if("ADD"===e){var i=Object(n.a)(Object(n.a)({},a[r]),{},{qty:a[r].qty+1});a[r]=i}else if(a[r].qty>1){var s=Object(n.a)(Object(n.a)({},a[r]),{},{qty:a[r].qty-1});a[r]=s}else{var o=a.filter((function(e){return e.masterGoodsId!==t.masterGoodsId}));a=o}Object(g.isEmpty)(a)?c(Object(x.a)()):c(Object(x.c)({items:a}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(a.a,{children:[Object(v.jsx)("p",{children:_("search_product:dialogTotalSummaryInfo")}),Object(v.jsx)(r.a,{children:q.map((function(t,c){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(i.a,{children:[Object(v.jsx)(s.a,{className:e.list_modal_image,children:Object(v.jsx)("img",{src:t.image,alt:t.name})}),Object(v.jsx)(o.a,{className:e.list_modal_text,primary:t.name,secondary:Object(v.jsxs)(l.a,{children:[Object(f.b)(t.price,t.currency),Object(v.jsxs)(l.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["Qty:",Object(v.jsxs)(l.a,{children:[Object(v.jsx)(j.a,{onClick:function(){return I(t,"REMOVE")},color:"primary","aria-label":"upload picture",component:"span",children:Object(v.jsx)(p.a,{})}),t.qty,Object(v.jsx)(j.a,{onClick:function(){return I(t,"ADD")},color:"primary","aria-label":"upload picture",component:"span",children:Object(v.jsx)(h.a,{})})]})]})]})})]},c),Object(v.jsx)(d.a,{})]})}))}),0===q.length?Object(v.jsx)(l.a,{display:"flex",children:Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"subtitle1",color:"disabled",children:_("search_product:dialogEmptyBuy")})})}):Object(v.jsxs)(l.a,{display:"flex",justifyContent:"space-between",children:[Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"subtitle1",color:"disabled",children:_("search_product:dialogTotalBuy")})}),Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(f.b)(C)})})]})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)(m.a,{onClick:function(){c(Object(x.a)()),k()},color:"primary",children:_("common:cancel")}),Object(v.jsx)(m.a,{disabled:0===q.length,onClick:function(){return w.push("/identitas")},color:"primary",children:_("common:next")})]})]})}}}]);
//# sourceMappingURL=33.648a2cb9.chunk.js.map