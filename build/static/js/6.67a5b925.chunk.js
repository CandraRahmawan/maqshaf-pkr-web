(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    183: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(120),
        o = r(184),
        c = r(150),
        i = r(0),
        a = r(123),
        s = r.n(a),
        l = r(20),
        d = r(177),
        j = r(181),
        u = r(178),
        h = r(89),
        b = r(179),
        m = r(23),
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
            listProduct: { marginTop: 16 },
          };
        },
        O = r(2),
        x = Object(l.a)(p)(function (e) {
          var t = e.classes,
            r = e.t,
            n = Object(i.useState)([]),
            o = Object(c.a)(n, 2),
            a = o[0],
            l = o[1];
          return (
            Object(i.useEffect)(function () {
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
                            startAdornment: Object(O.jsx)(u.a, {
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
                  children: Object(O.jsx)(h.a, {
                    container: !0,
                    className: t.root,
                    spacing: 2,
                    children: Object(O.jsx)(h.a, {
                      item: !0,
                      xs: 12,
                      children: Object(O.jsx)(h.a, {
                        container: !0,
                        justifyContent: "center",
                        spacing: 2,
                        children:
                          null === a || void 0 === a
                            ? void 0
                            : a.map(function (e) {
                                return Object(O.jsx)(
                                  h.a,
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
        f = r(87),
        g = Object(f.a)(function (e) {
          return { root: { backgroundColor: "#eee" } };
        }),
        v = function (e) {
          var t = e.children,
            r = g();
          return Object(O.jsx)("div", { className: r.root, children: t });
        };
      t.default = Object(o.a)("search_product")(function (e) {
        var t = e.t,
          r = e.history,
          o = e.location;
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
            Object(O.jsx)(v, {
              children: Object(O.jsx)(x, { t: t, history: r, location: o }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=6.67a5b925.chunk.js.map
