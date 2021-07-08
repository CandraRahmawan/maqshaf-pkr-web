(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [4],
  {
    132: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = r(97),
        c = r(0),
        s = r(76),
        a = r.n(s),
        n = r(55),
        i = r(131),
        l = r(133),
        d = r(129),
        j = function (e) {
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
        p = r(3);
      t.default = Object(n.a)(j)(function (e) {
        var t = e.classes,
          r = Object(c.useState)([]),
          s = Object(o.a)(r, 2),
          n = s[0],
          j = s[1],
          b = t.rootStyle,
          h = t.wrapperStyle,
          u = t.searchStyle;
        return (
          Object(c.useEffect)(function () {
            a()("/mastergood/all").then(function (e) {
              return j(e.data.data);
            });
          }, []),
          console.log("goods", n),
          Object(p.jsx)("div", {
            className: b,
            children: Object(p.jsxs)("div", {
              className: h,
              children: [
                Object(p.jsx)("form", {
                  oValidate: !0,
                  autoComplete: "off",
                  children: Object(p.jsx)(i.a, {
                    className: u,
                    InputProps: {
                      startAdornment: Object(p.jsx)(l.a, {
                        position: "start",
                        children: Object(p.jsx)(d.a, { color: "white" }),
                      }),
                    },
                  }),
                }),
                Object(p.jsx)("div", {
                  children:
                    null === n || void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          return Object(p.jsxs)("div", {
                            children: [
                              Object(p.jsx)("h3", { children: e.name }),
                              Object(p.jsx)("img", {
                                src: e.image,
                                width: "60",
                              }),
                              Object(p.jsx)("p", { children: e.price }),
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
//# sourceMappingURL=4.cd0c00ed.chunk.js.map
