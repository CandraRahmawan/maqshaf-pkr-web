(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [9],
  {
    148: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var o = n(166),
        a = n.n(o),
        r = n(167),
        i = n.n(r),
        c = function (t) {
          return "GET" === t;
        },
        s = function (t, e, n) {
          return fetch(
            (function (t, e, n) {
              return a()(t, n) + (c(e) ? "?".concat(i.a.stringify(n)) : "");
            })(
              "https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com" + t,
              e,
              n
            ),
            { method: e, body: c(e) ? void 0 : JSON.stringify(n) }
          )
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              if (200 !== (null === t || void 0 === t ? void 0 : t.code)) {
                var e = t.code,
                  n = t.message,
                  o = t.data,
                  a = new Error(n);
                throw ((a.code = e), (a.message = n), (a.data = o), a);
              }
              return t;
            });
        };
    },
    177: function (t, e) {},
    245: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(163),
        a = n(250),
        r = n(127),
        i = n(0),
        c = n(29),
        s = n(6),
        l = n(228),
        d = n(244),
        u = n(230),
        j = n(107),
        b = n(232),
        h = n(233),
        g = n(252),
        m = n(235),
        p = n(224),
        O = n(227),
        f = n(51),
        x = n(231),
        y = n(234),
        v = n(236),
        C = n(37),
        w = {
          SummaryDialog: Object(i.lazy)(function () {
            return Promise.all([n.e(7), n.e(8)]).then(n.bind(null, 239));
          }),
          IdentityDataDialog: Object(i.lazy)(function () {
            return Promise.all([n.e(6), n.e(11)]).then(n.bind(null, 255));
          }),
        },
        T = Object(i.lazy)(function () {
          return n.e(10).then(n.bind(null, 238));
        }),
        k = n(249),
        I = n(148),
        N = function () {
          var t = Object(i.useState)(""),
            e = Object(r.a)(t, 2),
            n = e[0],
            o = e[1],
            a = Object(k.a)(["listProduct", n], function () {
              return Object(I.a)("/mastergood/search", "GET", { name: n });
            });
          return { goodList: a.data, isLoading: a.isLoading, setKeyword: o };
        },
        S = n(54),
        z = function (t) {
          return {
            root: { color: t.whiteColor },
            fab: {
              position: "fixed",
              bottom: t.spacing(2),
              right: t.spacing(2),
              backgroundColor: t.orangeColor,
              color: t.whiteColor,
            },
            badge: {
              position: "fixed",
              bottom: t.spacing(8),
              right: t.spacing(3),
              zIndex: 1,
            },
            closeButton: {
              position: "absolute",
              right: t.spacing(1),
              top: t.spacing(1),
              color: t.palette.grey[500],
            },
            wrapperHeader: {
              padding: "16px 0",
              color: t.whiteColor,
              backgroundColor: t.primaryColor,
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
        D = n(4),
        M = Object(c.a)(z)(function (t) {
          var e,
            n = t.classes,
            o = t.t,
            a = t.history,
            c = Object(f.b)(),
            T = Object(i.useState)(!1),
            k = Object(r.a)(T, 2),
            I = k[0],
            z = k[1],
            M = N(),
            P = M.goodList,
            L = M.isLoading,
            B = M.setKeyword,
            q = Object(f.c)(function (t) {
              return t.cartSelected;
            }),
            G = q.items,
            E = q.total,
            H = "identitas" === Object(s.f)().action,
            J = function () {
              z(!0);
            },
            _ = function () {
              a.replace("/"), z(!1);
            },
            A = function (t) {
              c(Object(S.c)({ items: t }));
            };
          return Object(D.jsxs)("div", {
            className: n.root,
            children: [
              Object(D.jsx)("div", {
                className: n.wrapperHeader,
                children: Object(D.jsxs)(l.a, {
                  children: [
                    Object(D.jsx)("h2", { children: o("greeting") }),
                    Object(D.jsx)("h4", { children: o("subGreeting") }),
                    Object(D.jsx)(d.a, {
                      onChange: function (t) {
                        return B(t.target.value);
                      },
                      size: "medium",
                      variant: "outlined",
                      className: n.search,
                      placeholder: o("searchPlaceholder"),
                      InputProps: {
                        startAdornment: Object(D.jsx)(u.a, {
                          position: "start",
                          children: Object(D.jsx)(x.a, { color: "white" }),
                        }),
                      },
                    }),
                  ],
                }),
              }),
              Object(D.jsx)(l.a, {
                className: n.listProduct,
                children: Object(D.jsx)(j.a, {
                  container: !0,
                  className: n.root,
                  spacing: 2,
                  children: Object(D.jsx)(j.a, {
                    item: !0,
                    xs: 12,
                    children: L
                      ? Object(D.jsx)(C.b, { label: o("common:loading") })
                      : Object(D.jsx)(j.a, {
                          container: !0,
                          justifyContent: "center",
                          spacing: 2,
                          children:
                            null === P ||
                            void 0 === P ||
                            null === (e = P.data) ||
                            void 0 === e
                              ? void 0
                              : e.map(function (t) {
                                  return Object(D.jsx)(
                                    j.a,
                                    {
                                      item: !0,
                                      children: Object(D.jsx)(C.a, {
                                        t: o,
                                        image: t.image,
                                        title: t.name,
                                        price: t.price,
                                        currency: t.currency,
                                        category: t.category,
                                        openModal: J,
                                        addCartAction: A,
                                        selectedItems: G,
                                      }),
                                    },
                                    t.masterGoodsId
                                  );
                                }),
                        }),
                  }),
                }),
              }),
              Object(D.jsx)(b.a, {
                className: n.badge,
                badgeContent: G.length > 0 ? G.length : null,
                color: "secondary",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                children: Object(D.jsx)(h.a, {
                  "aria-label": "test",
                  onClick: function () {
                    return G.length > 0 && J();
                  },
                  className: n.fab,
                  children: Object(D.jsx)(y.a, {}),
                }),
              }),
              Object(D.jsxs)(g.a, {
                fullScreen: !0,
                open: I,
                "aria-labelledby": "form-dialog-title",
                onClose: _,
                children: [
                  Object(D.jsxs)(m.a, {
                    disableTypography: !0,
                    children: [
                      Object(D.jsx)(p.a, {
                        variant: "h6",
                        children: o(
                          H
                            ? "search_product:dialogIdentityDataTitle"
                            : "search_product:dialogTotalSummaryTitle"
                        ),
                      }),
                      Object(D.jsx)(O.a, {
                        "aria-label": "close",
                        className: n.closeButton,
                        onClick: _,
                        children: Object(D.jsx)(v.a, {}),
                      }),
                    ],
                  }),
                  H
                    ? Object(D.jsx)(w.IdentityDataDialog, {
                        t: o,
                        handleCloseModal: _,
                        history: a,
                      })
                    : Object(D.jsx)(w.SummaryDialog, {
                        t: o,
                        handleCloseModal: _,
                        items: G,
                        history: a,
                        total: E,
                      }),
                ],
              }),
            ],
          });
        }),
        P = n(105),
        L = Object(P.a)(function (t) {
          return { root: {} };
        }),
        B = function (t) {
          var e = t.children,
            n = t.t,
            o = L();
          return Object(D.jsxs)("div", {
            className: o.root,
            children: [e, Object(D.jsx)(T, { t: n })],
          });
        };
      e.default = Object(a.a)(["search_product", "glossary"])(function (t) {
        var e = t.t,
          n = t.history,
          a = t.location;
        return Object(D.jsxs)(D.Fragment, {
          children: [
            Object(D.jsxs)(o.a, {
              children: [
                Object(D.jsx)("title", { children: e("metaTitle") }),
                Object(D.jsx)("meta", {
                  name: "description",
                  content: e("metaTitle"),
                }),
              ],
            }),
            Object(D.jsx)(B, {
              t: e,
              children: Object(D.jsx)(M, { t: e, history: n, location: a }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=9.2f53faac.chunk.js.map
