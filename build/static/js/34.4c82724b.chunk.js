(this["webpackJsonpmaqshaf-pkr-web"]=this["webpackJsonpmaqshaf-pkr-web"]||[]).push([[34],{162:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return i}));var n=c(51),a=c.n(n),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Rp",c=t.toString().split("").reverse().join(""),n=c.match(/\d{1,3}/g);return"".concat(e,". ").concat(n.join(".").split("").reverse().join(""))},i=function(t){return a()(t).format("MM MMM YYYY, HH:mm")}},370:function(t,e,c){"use strict";var n=c(123),a=Object(n.a)((function(t){return{list_modal_image:{marginRight:12,"& img":{width:50,height:50}},list_modal_text:{color:t.color.black},button_progress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},input_pin:{width:"100%"}}}));e.a=a},493:function(t,e,c){"use strict";c.r(e);var n=c(58),a=c(356),r=c(390),i=c(350),s=c(445),o=c(408),l=c(130),j=c(215),d=c(349),b=c(214),u=c(357),m=c(128),p=c(494),O=c(495),h=c(68),f=c(162),x=c(70),y=c(370),g=c(190),v=c(3);e.default=function(t){var e=Object(y.a)(),c=Object(h.b)(),_=t.t,k=t.handleCloseModal,q=t.items,w=t.history,C=t.total,I=function(t,e){var a=q.map((function(t){return t})),r=a.findIndex((function(e){return e.masterGoodsId===t.masterGoodsId}));if("ADD"===e){var i=Object(n.a)(Object(n.a)({},a[r]),{},{qty:a[r].qty+1});a[r]=i}else if(a[r].qty>1){var s=Object(n.a)(Object(n.a)({},a[r]),{},{qty:a[r].qty-1});a[r]=s}else{var o=a.filter((function(e){return e.masterGoodsId!==t.masterGoodsId}));a=o}Object(g.isEmpty)(a)?c(Object(x.a)()):c(Object(x.c)({items:a}))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(a.a,{children:[Object(v.jsx)("p",{children:_("search_product:dialogTotalSummaryInfo")}),Object(v.jsx)(r.a,{children:q.map((function(t,c){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(i.a,{children:[Object(v.jsx)(s.a,{className:e.list_modal_image,children:Object(v.jsx)("img",{src:t.image,alt:t.name})}),Object(v.jsx)(o.a,{className:e.list_modal_text,primary:t.name,secondary:Object(v.jsxs)(l.a,{children:[Object(f.b)(t.price,t.currency),Object(v.jsxs)(l.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["Qty:",Object(v.jsxs)(l.a,{children:[Object(v.jsx)(j.a,{onClick:function(){return I(t,"REMOVE")},color:"primary","aria-label":"upload picture",component:"span",children:Object(v.jsx)(p.a,{})}),t.qty,Object(v.jsx)(j.a,{onClick:function(){return I(t,"ADD")},color:"primary","aria-label":"upload picture",component:"span",children:Object(v.jsx)(O.a,{})})]})]})]})})]},c),Object(v.jsx)(d.a,{})]})}))}),Object(v.jsxs)(l.a,{display:"flex",justifyContent:"space-between",children:[Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"subtitle1",color:"disabled",children:_("search_product:dialogTotalBuy")})}),Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(f.b)(C)})})]})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)(m.a,{onClick:function(){c(Object(x.a)()),k()},color:"primary",children:_("common:cancel")}),Object(v.jsx)(m.a,{onClick:function(){return w.push("/identitas")},color:"primary",children:_("common:next")})]})]})}}}]);
//# sourceMappingURL=34.4c82724b.chunk.js.map