(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [7],
  {
    187: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(123),
        i = r(188),
        c = r(153),
        o = r(0),
        a = r(126),
        s = r.n(a),
        l = r(20),
        d = r(180),
        j = r(184),
        h = r(181),
        u = r(91),
        b = r(182),
        m = r(25),
        p = function (e) {
          return {
            root: { color: e.whiteColor },
            wrapperHeader: {
              padding: "16px 0",
              color: e.whiteColor,
              backgroundColor: e.primaryColor,
              "& h4": { marginTop: 4, marginBottom: 32 },
              "& h2": { marginTop: 0, marginBottom: 4 },
              "& .MuiInputBase-root": { color: "inherit" },
              "& .MuiFormLabel-root": { color: "inherit" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiOutlinedInput-input": { padding: 12, fontSize: 22 },
            },
            search: {
              width: "100%",
              backgroundColor: "#2196f3",
              borderRadius: 10,
            },
            listProduct: { marginTop: 32, minHeight: 300 },
          };
        },
        O = r(2),
        x = Object(l.a)(p)(function (e) {
          var t = e.classes,
            r = e.t,
            n = Object(o.useState)([]),
            i = Object(c.a)(n, 2),
            a = i[0],
            l = i[1];
          return (
            Object(o.useEffect)(function () {
              s()(
                "".concat(
                  "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com",
                  "/mastergood/all"
                )
              ).then(function (e) {
                return l(e.data.data);
              });
            }, []),
            Object(O.jsxs)("div", {
              className: t.root,
              children: [
                Object(O.jsx)("div", {
                  className: t.wrapperHeader,
                  children: Object(O.jsxs)(d.a, {
                    children: [
                      Object(O.jsx)("h2", { children: r("greeting") }),
                      Object(O.jsx)("h4", { children: r("subGreeting") }),
                      Object(O.jsx)("form", {
                        autoComplete: "off",
                        children: Object(O.jsx)(j.a, {
                          size: "medium",
                          variant: "outlined",
                          className: t.search,
                          placeholder: r("searchPlaceholder"),
                          InputProps: {
                            startAdornment: Object(O.jsx)(h.a, {
                              position: "start",
                              children: Object(O.jsx)(b.a, { color: "white" }),
                            }),
                          },
                        }),
                      }),
                    ],
                  }),
                }),
                Object(O.jsx)(d.a, {
                  className: t.listProduct,
                  children: Object(O.jsx)(u.a, {
                    container: !0,
                    className: t.root,
                    spacing: 2,
                    children: Object(O.jsx)(u.a, {
                      item: !0,
                      xs: 12,
                      children: Object(O.jsx)(u.a, {
                        container: !0,
                        justifyContent: "center",
                        spacing: 2,
                        children:
                          null === a || void 0 === a
                            ? void 0
                            : a.map(function (e) {
                                return Object(O.jsx)(
                                  u.a,
                                  {
                                    item: !0,
                                    children: Object(O.jsx)(m.a, {
                                      image: e.image,
                                      title: e.name,
                                      price: e.price,
                                    }),
                                  },
                                  e.masterGoodsId
                                );
                              }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        }),
        f = r(89),
        g = Object(o.lazy)(function () {
          return r.e(5).then(r.bind(null, 185));
        }),
        v = Object(f.a)(function (e) {
          return { root: { backgroundColor: "#eee", height: "100vh" } };
        }),
        w = function (e) {
          var t = e.children,
            r = e.t,
            n = v();
          return Object(O.jsxs)("div", {
            className: n.root,
            children: [t, Object(O.jsx)(g, { t: r })],
          });
        };
      t.default = Object(i.a)(["search_product", "glossary"])(function (e) {
        var t = e.t,
          r = e.history,
          i = e.location;
        return Object(O.jsxs)(O.Fragment, {
          children: [
            Object(O.jsxs)(n.a, {
              children: [
                Object(O.jsx)("title", { children: t("metaTitle") }),
                Object(O.jsx)("meta", {
                  name: "description",
                  content: t("metaTitle"),
                }),
              ],
            }),
            Object(O.jsx)(w, {
              t: t,
              children: Object(O.jsx)(x, { t: t, history: r, location: i }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=7.29fe32fa.chunk.js.map
