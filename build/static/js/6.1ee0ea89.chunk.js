(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    127: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var c = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          n = e.toString().split("").reverse().join(""),
          c = n.match(/\d{1,3}/g);
        return ""
          .concat(t, ". ")
          .concat(c.join(".").split("").reverse().join(""));
      };
    },
    173: function (e, t) {},
    234: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(159),
        r = n(239),
        a = n(134),
        o = n(0),
        i = n(29),
        s = n(215),
        l = n(232),
        d = n(217),
        j = n(107),
        u = n(219),
        b = n(220),
        h = n(241),
        m = n(222),
        g = n(210),
        O = n(214),
        p = n(224),
        x = n(216),
        f = n(225),
        y = n(226),
        v = n(227),
        C = n(228),
        w = n(233),
        T = n(229),
        k = n(212),
        N = n(55),
        I = n(218),
        M = n(221),
        S = n(223),
        z = n(37),
        B = n(238),
        L = n(162),
        P = n.n(L),
        q = n(163),
        G = n.n(q),
        _ = function (e) {
          return "GET" === e;
        },
        E = function (e, t, n) {
          return fetch(
            (function (e, t, n) {
              return P()(e, n) + (_(t) ? "?".concat(G.a.stringify(n)) : "");
            })(
              "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com" + e,
              t,
              n
            ),
            { method: t, body: _(t) ? void 0 : JSON.stringify(n) }
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              if (200 !== (null === e || void 0 === e ? void 0 : e.code)) {
                var t = e.code,
                  n = e.message,
                  c = e.data,
                  r = new Error(n);
                throw ((r.code = t), (r.message = n), (r.data = c), r);
              }
              return e;
            });
        },
        F = function () {
          var e = Object(o.useState)(""),
            t = Object(a.a)(e, 2),
            n = t[0],
            c = t[1],
            r = Object(B.a)(["listProduct", n], function () {
              return E("/mastergood/search", "GET", { name: n });
            });
          return { goodList: r.data, isLoading: r.isLoading, setKeyword: c };
        },
        H = n(59),
        J = n(127),
        R = function (e) {
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
            listModalImage: {
              marginRight: 12,
              "& img": { width: 50, height: 50 },
            },
            listModalText: { color: e.blackColor },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
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
        A = n(4),
        K = Object(i.a)(R)(function (e) {
          var t,
            n = e.classes,
            c = e.t,
            r = Object(N.b)(),
            i = Object(o.useState)(!1),
            B = Object(a.a)(i, 2),
            L = B[0],
            P = B[1],
            q = F(),
            G = q.goodList,
            _ = q.isLoading,
            E = q.setKeyword,
            R = Object(N.c)(function (e) {
              return e.cartSelected;
            }),
            K = R.items,
            D = R.total,
            Q = function () {
              P(!0);
            },
            U = function () {
              P(!1);
            },
            V = function (e) {
              r(Object(H.c)({ items: e }));
            };
          return Object(A.jsxs)("div", {
            className: n.root,
            children: [
              Object(A.jsx)("div", {
                className: n.wrapperHeader,
                children: Object(A.jsxs)(s.a, {
                  children: [
                    Object(A.jsx)("h2", { children: c("greeting") }),
                    Object(A.jsx)("h4", { children: c("subGreeting") }),
                    Object(A.jsx)(l.a, {
                      onChange: function (e) {
                        return E(e.target.value);
                      },
                      size: "medium",
                      variant: "outlined",
                      className: n.search,
                      placeholder: c("searchPlaceholder"),
                      InputProps: {
                        startAdornment: Object(A.jsx)(d.a, {
                          position: "start",
                          children: Object(A.jsx)(I.a, { color: "white" }),
                        }),
                      },
                    }),
                  ],
                }),
              }),
              Object(A.jsx)(s.a, {
                className: n.listProduct,
                children: Object(A.jsx)(j.a, {
                  container: !0,
                  className: n.root,
                  spacing: 2,
                  children: Object(A.jsx)(j.a, {
                    item: !0,
                    xs: 12,
                    children: _
                      ? Object(A.jsx)(z.b, { label: c("common:loading") })
                      : Object(A.jsx)(j.a, {
                          container: !0,
                          justifyContent: "center",
                          spacing: 2,
                          children:
                            null === G ||
                            void 0 === G ||
                            null === (t = G.data) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (e) {
                                  return Object(A.jsx)(
                                    j.a,
                                    {
                                      item: !0,
                                      children: Object(A.jsx)(z.a, {
                                        t: c,
                                        image: e.image,
                                        title: e.name,
                                        price: e.price,
                                        currency: e.currency,
                                        category: e.category,
                                        openModal: Q,
                                        addCartAction: V,
                                        selectedItems: K,
                                      }),
                                    },
                                    e.masterGoodsId
                                  );
                                }),
                        }),
                  }),
                }),
              }),
              Object(A.jsx)(u.a, {
                className: n.badge,
                badgeContent: K.length > 0 ? K.length : null,
                color: "secondary",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                children: Object(A.jsx)(b.a, {
                  "aria-label": "test",
                  onClick: function () {
                    return K.length > 0 && Q();
                  },
                  className: n.fab,
                  children: Object(A.jsx)(M.a, {}),
                }),
              }),
              Object(A.jsxs)(h.a, {
                fullScreen: !0,
                open: L,
                "aria-labelledby": "form-dialog-title",
                onClose: U,
                children: [
                  Object(A.jsxs)(m.a, {
                    disableTypography: !0,
                    children: [
                      Object(A.jsx)(g.a, {
                        variant: "h6",
                        children: c("search_product:modalTotalSummaryTitle"),
                      }),
                      Object(A.jsx)(O.a, {
                        "aria-label": "close",
                        className: n.closeButton,
                        onClick: U,
                        children: Object(A.jsx)(S.a, {}),
                      }),
                    ],
                  }),
                  Object(A.jsxs)(p.a, {
                    children: [
                      Object(A.jsx)("p", {
                        children: c("search_product:modalTotalSummaryInfo"),
                      }),
                      Object(A.jsx)(x.a, {
                        children: K.map(function (e) {
                          return Object(A.jsxs)(A.Fragment, {
                            children: [
                              Object(A.jsxs)(f.a, {
                                children: [
                                  Object(A.jsx)(y.a, {
                                    className: n.listModalImage,
                                    children: Object(A.jsx)("img", {
                                      src: e.image,
                                      alt: e.name,
                                    }),
                                  }),
                                  Object(A.jsx)(v.a, {
                                    className: n.listModalText,
                                    primary: e.name,
                                    secondary: Object(J.a)(e.price, e.currency),
                                  }),
                                ],
                              }),
                              Object(A.jsx)(C.a, {}),
                            ],
                          });
                        }),
                      }),
                      Object(A.jsxs)(w.a, {
                        display: "flex",
                        justifyContent: "space-between",
                        children: [
                          Object(A.jsx)("div", {
                            children: Object(A.jsx)(g.a, {
                              variant: "subtitle1",
                              color: "disabled",
                              children: c("search_product:modalTotalBuy"),
                            }),
                          }),
                          Object(A.jsx)("div", {
                            children: Object(A.jsx)(g.a, {
                              variant: "subtitle1",
                              children: Object(J.a)(D),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(A.jsxs)(T.a, {
                    children: [
                      Object(A.jsx)(k.a, {
                        onClick: function () {
                          r(Object(H.a)()), U();
                        },
                        color: "primary",
                        children: c("common:cancel"),
                      }),
                      Object(A.jsx)(k.a, {
                        onClick: U,
                        color: "primary",
                        children: c("common:pay"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        D = n(105),
        Q = Object(o.lazy)(function () {
          return n.e(8).then(n.bind(null, 231));
        }),
        U = Object(D.a)(function (e) {
          return { root: {} };
        }),
        V = function (e) {
          var t = e.children,
            n = e.t,
            c = U();
          return Object(A.jsxs)("div", {
            className: c.root,
            children: [t, Object(A.jsx)(Q, { t: n })],
          });
        };
      t.default = Object(r.a)(["search_product", "glossary"])(function (e) {
        var t = e.t,
          n = e.history,
          r = e.location;
        return Object(A.jsxs)(A.Fragment, {
          children: [
            Object(A.jsxs)(c.a, {
              children: [
                Object(A.jsx)("title", { children: t("metaTitle") }),
                Object(A.jsx)("meta", {
                  name: "description",
                  content: t("metaTitle"),
                }),
              ],
            }),
            Object(A.jsx)(V, {
              t: t,
              children: Object(A.jsx)(K, { t: t, history: n, location: r }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=6.1ee0ea89.chunk.js.map
