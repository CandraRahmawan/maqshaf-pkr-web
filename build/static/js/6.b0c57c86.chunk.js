(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    167: function (e, t) {},
    212: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(153),
        i = n(216),
        o = n(142),
        a = n(0),
        c = n(29),
        s = n(198),
        l = n(209),
        d = n(199),
        u = n(107),
        j = n(201),
        b = n(202),
        h = n(217),
        m = n(204),
        g = n(205),
        O = n(206),
        p = n(207),
        f = n(197),
        x = n(55),
        y = n(200),
        v = n(203),
        w = n(36),
        C = n(215),
        k = n(156),
        N = n.n(k),
        T = n(157),
        S = n.n(T),
        z = function (e) {
          return "GET" === e;
        },
        I = function (e, t, n) {
          return fetch(
            (function (e, t, n) {
              return N()(e, n) + (z(t) ? "?".concat(S.a.stringify(n)) : "");
            })(
              "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com" + e,
              t,
              n
            ),
            { method: t, body: z(t) ? void 0 : JSON.stringify(n) }
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              if (200 !== (null === e || void 0 === e ? void 0 : e.code)) {
                var t = e.code,
                  n = e.message,
                  r = e.data,
                  i = new Error(n);
                throw ((i.code = t), (i.message = n), (i.data = r), i);
              }
              return e;
            });
        },
        L = function () {
          var e = Object(a.useState)(""),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1],
            i = Object(C.a)(["listProduct", n], function () {
              return I("/mastergood/search", "GET", { name: n });
            });
          return { goodList: i.data, isLoading: i.isLoading, setKeyword: r };
        },
        M = n(59),
        P = function (e) {
          return {
            root: { color: e.whiteColor },
            fab: {
              position: "fixed",
              bottom: e.spacing(2),
              right: e.spacing(2),
              backgroundColor: e.orangeColor,
              color: e.whiteColor,
            },
            badge: {
              position: "fixed",
              bottom: e.spacing(8),
              right: e.spacing(3),
              zIndex: 1,
            },
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
        q = n(4),
        E = Object(c.a)(P)(function (e) {
          var t,
            n = e.classes,
            r = e.t,
            i = Object(x.b)(),
            c = Object(a.useState)(!1),
            C = Object(o.a)(c, 2),
            k = C[0],
            N = C[1],
            T = L(),
            S = T.goodList,
            z = T.isLoading,
            I = T.setKeyword,
            P = Object(x.c)(function (e) {
              return e.cartSelected;
            }).items,
            E = function () {
              N(!0);
            },
            G = function () {
              N(!1);
            },
            A = function (e) {
              i(Object(M.b)({ items: [e] }));
            };
          return Object(q.jsxs)("div", {
            className: n.root,
            children: [
              Object(q.jsx)("div", {
                className: n.wrapperHeader,
                children: Object(q.jsxs)(s.a, {
                  children: [
                    Object(q.jsx)("h2", { children: r("greeting") }),
                    Object(q.jsx)("h4", { children: r("subGreeting") }),
                    Object(q.jsx)(l.a, {
                      onChange: function (e) {
                        return I(e.target.value);
                      },
                      size: "medium",
                      variant: "outlined",
                      className: n.search,
                      placeholder: r("searchPlaceholder"),
                      InputProps: {
                        startAdornment: Object(q.jsx)(d.a, {
                          position: "start",
                          children: Object(q.jsx)(y.a, { color: "white" }),
                        }),
                      },
                    }),
                  ],
                }),
              }),
              Object(q.jsx)(s.a, {
                className: n.listProduct,
                children: Object(q.jsx)(u.a, {
                  container: !0,
                  className: n.root,
                  spacing: 2,
                  children: Object(q.jsx)(u.a, {
                    item: !0,
                    xs: 12,
                    children: z
                      ? Object(q.jsx)(w.b, { label: r("common:loading") })
                      : Object(q.jsx)(u.a, {
                          container: !0,
                          justifyContent: "center",
                          spacing: 2,
                          children:
                            null === S ||
                            void 0 === S ||
                            null === (t = S.data) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (e) {
                                  return Object(q.jsx)(
                                    u.a,
                                    {
                                      item: !0,
                                      children: Object(q.jsx)(w.a, {
                                        t: r,
                                        image: e.image,
                                        title: e.name,
                                        price: e.price,
                                        currency: e.currency,
                                        category: e.category,
                                        openModal: E,
                                        addCartAction: A,
                                      }),
                                    },
                                    e.masterGoodsId
                                  );
                                }),
                        }),
                  }),
                }),
              }),
              Object(q.jsx)(j.a, {
                className: n.badge,
                badgeContent: P.length > 0 ? P.length : null,
                color: "secondary",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                children: Object(q.jsx)(b.a, {
                  "aria-label": "test",
                  className: n.fab,
                  children: Object(q.jsx)(v.a, {}),
                }),
              }),
              Object(q.jsxs)(h.a, {
                open: k,
                "aria-labelledby": "form-dialog-title",
                children: [
                  Object(q.jsx)(m.a, {
                    id: "form-dialog-title",
                    children: "Subscribe",
                  }),
                  Object(q.jsxs)(g.a, {
                    children: [
                      Object(q.jsx)(O.a, {
                        children:
                          "To subscribe to this website, please enter your email address here. We will send updates occasionally.",
                      }),
                      Object(q.jsx)(l.a, {
                        autoFocus: !0,
                        margin: "dense",
                        id: "name",
                        label: "Email Address",
                        type: "email",
                        fullWidth: !0,
                      }),
                    ],
                  }),
                  Object(q.jsxs)(p.a, {
                    children: [
                      Object(q.jsx)(f.a, {
                        onClick: G,
                        color: "primary",
                        children: "Cancel",
                      }),
                      Object(q.jsx)(f.a, {
                        onClick: G,
                        color: "primary",
                        children: "Subscribe",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        G = n(105),
        A = Object(a.lazy)(function () {
          return n.e(7).then(n.bind(null, 210));
        }),
        B = Object(G.a)(function (e) {
          return { root: {} };
        }),
        F = function (e) {
          var t = e.children,
            n = e.t,
            r = B();
          return Object(q.jsxs)("div", {
            className: r.root,
            children: [t, Object(q.jsx)(A, { t: n })],
          });
        };
      t.default = Object(i.a)(["search_product", "glossary"])(function (e) {
        var t = e.t,
          n = e.history,
          i = e.location;
        return Object(q.jsxs)(q.Fragment, {
          children: [
            Object(q.jsxs)(r.a, {
              children: [
                Object(q.jsx)("title", { children: t("metaTitle") }),
                Object(q.jsx)("meta", {
                  name: "description",
                  content: t("metaTitle"),
                }),
              ],
            }),
            Object(q.jsx)(F, {
              t: t,
              children: Object(q.jsx)(E, { t: t, history: n, location: i }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=6.b0c57c86.chunk.js.map
