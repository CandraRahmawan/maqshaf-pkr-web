(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    177: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(102),
        n = r(178),
        o = r(132),
        a = r(0),
        c = r(105),
        s = r.n(c),
        l = r(71),
        d = r(174),
        u = r(162),
        j = r(164),
        p = Object(a.lazy)(function () {
          return Promise.all([r.e(4), r.e(5)]).then(r.bind(null, 166));
        }),
        h = function (t) {
          return {
            root: { color: t.whiteColor },
            wrapperHeader: {
              padding: "16px",
              color: t.whiteColor,
              backgroundColor: t.primaryColor,
              "& h4": { marginTop: "4px", marginBottom: "32px" },
              "& h2": { marginTop: "0", marginBottom: "4px" },
              "& .MuiInputBase-root": { color: "inherit" },
              "& .MuiFormLabel-root": { color: "inherit" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiOutlinedInput-input": {
                padding: "12px",
                fontSize: "22px",
              },
            },
            search: { width: "100%", backgroundColor: "#2196f3" },
          };
        },
        b = r(3),
        m = Object(l.a)(h)(function (t) {
          var e = t.classes,
            r = t.t,
            i = Object(a.useState)([]),
            n = Object(o.a)(i, 2),
            c = n[0],
            l = n[1];
          return (
            Object(a.useEffect)(function () {
              s()(
                "".concat(
                  "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com",
                  "/mastergood/all"
                )
              ).then(function (t) {
                return l(t.data.data);
              });
            }, []),
            Object(b.jsxs)("div", {
              className: e.root,
              children: [
                Object(b.jsxs)("div", {
                  className: e.wrapperHeader,
                  children: [
                    Object(b.jsx)("h2", { children: r("greeting") }),
                    Object(b.jsx)("h4", { children: r("subGreeting") }),
                    Object(b.jsx)("form", {
                      oValidate: !0,
                      autoComplete: "off",
                      children: Object(b.jsx)(d.a, {
                        size: "medium",
                        variant: "outlined",
                        className: e.search,
                        InputProps: {
                          startAdornment: Object(b.jsx)(u.a, {
                            position: "start",
                            children: Object(b.jsx)(j.a, { color: "white" }),
                          }),
                        },
                      }),
                    }),
                  ],
                }),
                Object(b.jsx)("div", {
                  children:
                    null === c || void 0 === c
                      ? void 0
                      : c.map(function (t) {
                          return Object(b.jsx)("div", {
                            children: Object(b.jsx)(p, {
                              image: t.image,
                              title: t.name,
                              description: t.description,
                            }),
                          });
                        }),
                }),
              ],
            })
          );
        });
      e.default = Object(n.a)("search_product")(function (t) {
        var e = t.t,
          r = t.history,
          n = t.location;
        return Object(b.jsxs)(b.Fragment, {
          children: [
            Object(b.jsxs)(i.a, {
              children: [
                Object(b.jsx)("title", { children: e("metaTitle") }),
                Object(b.jsx)("meta", {
                  name: "description",
                  content: e("metaTitle"),
                }),
              ],
            }),
            Object(b.jsx)(m, { t: e, history: r, location: n }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=6.90044835.chunk.js.map
