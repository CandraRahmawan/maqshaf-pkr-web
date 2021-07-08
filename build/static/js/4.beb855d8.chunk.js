(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [4],
  {
    132: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = r(97),
        c = r(0),
        a = r(76),
        s = r.n(a),
        i = r(55),
        n = r(131),
        l = r(133),
        d = r(129),
        p = function (e) {
          return {
            rootStyle: { backgroundColor: e.primaryColor, color: e.whiteColor },
            wrapperStyle: { padding: "16px 32px", color: e.whiteColor },
            searchStyle: {
              width: "100%",
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid #fff",
              },
            },
          };
        },
        j = r(3);
      t.default = Object(i.a)(p)(function (e) {
        var t = e.classes,
          r = Object(c.useState)([]),
          a = Object(o.a)(r, 2),
          i = a[0],
          p = a[1],
          h = t.rootStyle,
          u = t.wrapperStyle,
          b = t.searchStyle;
        return (
          Object(c.useEffect)(function () {
            s()(
              "".concat(
                "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com",
                "/mastergood/all"
              )
            ).then(function (e) {
              return p(e.data.data);
            });
          }, []),
          console.log("goods", i),
          Object(j.jsx)("div", {
            className: h,
            children: Object(j.jsxs)("div", {
              className: u,
              children: [
                Object(j.jsx)("form", {
                  oValidate: !0,
                  autoComplete: "off",
                  children: Object(j.jsx)(n.a, {
                    className: b,
                    InputProps: {
                      startAdornment: Object(j.jsx)(l.a, {
                        position: "start",
                        children: Object(j.jsx)(d.a, { color: "white" }),
                      }),
                    },
                  }),
                }),
                Object(j.jsx)("div", {
                  children:
                    null === i || void 0 === i
                      ? void 0
                      : i.map(function (e) {
                          return Object(j.jsxs)("div", {
                            children: [
                              Object(j.jsx)("h3", { children: e.name }),
                              Object(j.jsx)("img", {
                                src: e.image,
                                width: "60",
                              }),
                              Object(j.jsx)("p", { children: e.price }),
                            ],
                          });
                        }),
                }),
              ],
            }),
          })
        );
      });
    },
  },
]);
//# sourceMappingURL=4.beb855d8.chunk.js.map
