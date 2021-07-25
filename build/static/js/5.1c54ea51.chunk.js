(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [5],
  {
    158: function (e, t) {},
    201: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(144),
        o = n(205),
        i = n(28),
        a = n(195),
        c = n(199),
        s = n(196),
        d = n(103),
        l = n(197),
        u = n(34),
        j = n(168),
        h = n(0),
        b = n(203),
        m = n(147),
        p = n.n(m),
        g = n(148),
        O = n.n(g),
        f = function (e) {
          return "GET" === e;
        },
        x = function (e, t, n) {
          return fetch(
            (function (e, t, n) {
              return p()(e, n) + (f(t) ? "?".concat(O.a.stringify(n)) : "");
            })(
              "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com" + e,
              t,
              n
            ),
            { method: t, body: f(t) ? void 0 : JSON.stringify(n) }
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              if (200 !== (null === e || void 0 === e ? void 0 : e.code)) {
                var t = e.code,
                  n = e.message,
                  r = e.data,
                  o = new Error(n);
                throw ((o.code = t), (o.message = n), (o.data = r), o);
              }
              return e;
            });
        },
        v = function () {
          var e = Object(h.useState)(""),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1],
            o = Object(b.a)(
              ["listProduct", n],
              function () {
                return x("/mastergood/search", "GET", { name: n });
              },
              { enabled: !!n }
            );
          return { goodList: o.data, isLoading: o.isLoading, setKeyword: r };
        },
        y = function (e) {
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
        w = n(4),
        k = Object(i.a)(y)(function (e) {
          var t,
            n = e.classes,
            r = e.t,
            o = v(),
            i = o.goodList,
            j = o.isLoading,
            h = o.setKeyword;
          return Object(w.jsxs)("div", {
            className: n.root,
            children: [
              Object(w.jsx)("div", {
                className: n.wrapperHeader,
                children: Object(w.jsxs)(a.a, {
                  children: [
                    Object(w.jsx)("h2", { children: r("greeting") }),
                    Object(w.jsx)("h4", { children: r("subGreeting") }),
                    Object(w.jsx)(c.a, {
                      onChange: function (e) {
                        return h(e.target.value);
                      },
                      size: "medium",
                      variant: "outlined",
                      className: n.search,
                      placeholder: r("searchPlaceholder"),
                      InputProps: {
                        startAdornment: Object(w.jsx)(s.a, {
                          position: "start",
                          children: Object(w.jsx)(l.a, { color: "white" }),
                        }),
                      },
                    }),
                  ],
                }),
              }),
              Object(w.jsx)(a.a, {
                className: n.listProduct,
                children: Object(w.jsx)(d.a, {
                  container: !0,
                  className: n.root,
                  spacing: 2,
                  children: Object(w.jsx)(d.a, {
                    item: !0,
                    xs: 12,
                    children: j
                      ? Object(w.jsx)(u.b, { label: r("common:loading") })
                      : Object(w.jsx)(d.a, {
                          container: !0,
                          justifyContent: "center",
                          spacing: 2,
                          children:
                            null === i ||
                            void 0 === i ||
                            null === (t = i.data) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (e) {
                                  return Object(w.jsx)(
                                    d.a,
                                    {
                                      item: !0,
                                      children: Object(w.jsx)(u.a, {
                                        t: r,
                                        image: e.image,
                                        title: e.name,
                                        price: e.price,
                                        currency: e.currency,
                                        category: e.category,
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
          });
        }),
        C = n(101),
        N = Object(h.lazy)(function () {
          return n.e(6).then(n.bind(null, 200));
        }),
        T = Object(C.a)(function (e) {
          return { root: {} };
        }),
        L = function (e) {
          var t = e.children,
            n = e.t,
            r = T();
          return Object(w.jsxs)("div", {
            className: r.root,
            children: [t, Object(w.jsx)(N, { t: n })],
          });
        };
      t.default = Object(o.a)(["search_product", "glossary"])(function (e) {
        var t = e.t,
          n = e.history,
          o = e.location;
        return Object(w.jsxs)(w.Fragment, {
          children: [
            Object(w.jsxs)(r.a, {
              children: [
                Object(w.jsx)("title", { children: t("metaTitle") }),
                Object(w.jsx)("meta", {
                  name: "description",
                  content: t("metaTitle"),
                }),
              ],
            }),
            Object(w.jsx)(L, {
              t: t,
              children: Object(w.jsx)(k, { t: t, history: n, location: o }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=5.1c54ea51.chunk.js.map
