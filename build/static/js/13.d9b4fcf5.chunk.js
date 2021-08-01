(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [13],
  {
    135: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var o = n(193),
        i = n.n(o),
        a = n(194),
        r = n.n(a),
        c = function (t) {
          return "GET" === t;
        },
        s = function (t, e, n) {
          return fetch(
            (function (t, e, n) {
              return i()(t, n) + (c(e) ? "?".concat(r.a.stringify(n)) : "");
            })("https://maqshaf-api.pesantrenkhoirurrooziqiin.com" + t, e, n),
            {
              method: e,
              headers: { "Content-Type": "application/json" },
              body: c(e) ? void 0 : JSON.stringify(n),
            }
          )
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              if (200 !== (null === t || void 0 === t ? void 0 : t.code)) {
                var e = t.code,
                  n = t.message,
                  o = t.data,
                  i = new Error(n);
                throw ((i.code = e), (i.message = n), (i.data = o), i);
              }
              return t;
            });
        };
    },
    204: function (t, e) {},
    320: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(190),
        i = n(325),
        a = n(121),
        r = n(0),
        c = n(30),
        s = n(6),
        l = n(299),
        d = n(319),
        u = n(301),
        j = n(110),
        h = n(303),
        b = n(304),
        g = n(327),
        m = n(306),
        p = n(184),
        O = n(297),
        f = n(50),
        x = n(302),
        y = n(305),
        C = n(307),
        v = n(36),
        w = {
          SummaryDialog: Object(r.lazy)(function () {
            return Promise.all([n.e(1), n.e(11)]).then(n.bind(null, 310));
          }),
          IdentityDataDialog: Object(r.lazy)(function () {
            return Promise.all([n.e(1), n.e(2), n.e(7), n.e(12)]).then(
              n.bind(null, 332)
            );
          }),
          ConfirmationPinDialog: Object(r.lazy)(function () {
            return Promise.all([n.e(1), n.e(2), n.e(10)]).then(
              n.bind(null, 318)
            );
          }),
        },
        T = Object(r.lazy)(function () {
          return n.e(14).then(n.bind(null, 309));
        }),
        P = n(324),
        k = n(135),
        I = function () {
          var t = Object(r.useState)(""),
            e = Object(a.a)(t, 2),
            n = e[0],
            o = e[1],
            i = Object(P.a)(["listProduct", n], function () {
              return Object(k.a)("/mastergood/search", "GET", { name: n });
            });
          return { goodList: i.data, isLoading: i.isLoading, setKeyword: o };
        },
        N = n(52),
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
        S = Object(c.a)(z)(function (t) {
          var e,
            n = t.classes,
            o = t.t,
            i = t.history,
            c = Object(f.b)(),
            T = Object(r.useState)(!1),
            P = Object(a.a)(T, 2),
            k = P[0],
            z = P[1],
            S = I(),
            M = S.goodList,
            q = S.isLoading,
            L = S.setKeyword,
            B = Object(f.c)(function (t) {
              return t.cartSelected;
            }),
            G = B.items,
            _ = B.total,
            E = B.qty,
            H = Object(s.f)().action,
            J = "identitas" === H,
            A = "pin" === H,
            F = function () {
              z(!0);
            },
            K = function () {
              i.replace("/"), z(!1);
            },
            R = function (t) {
              c(Object(N.c)({ items: t }));
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
                        return L(t.target.value);
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
                    children: q
                      ? Object(D.jsx)(v.c, { label: o("common:loading") })
                      : Object(D.jsx)(j.a, {
                          container: !0,
                          justifyContent: "center",
                          spacing: 2,
                          children:
                            null === M ||
                            void 0 === M ||
                            null === (e = M.data) ||
                            void 0 === e
                              ? void 0
                              : e.map(function (t) {
                                  return Object(D.jsx)(
                                    j.a,
                                    {
                                      item: !0,
                                      children: Object(D.jsx)(v.b, {
                                        t: o,
                                        image: t.image,
                                        title: t.name,
                                        price: t.price,
                                        currency: t.currency,
                                        category: t.category,
                                        openModal: F,
                                        addCartAction: R,
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
              Object(D.jsx)(h.a, {
                className: n.badge,
                badgeContent: G.length > 0 ? G.length : null,
                color: "secondary",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                children: Object(D.jsx)(b.a, {
                  "aria-label": "test",
                  onClick: function () {
                    return G.length > 0 && F();
                  },
                  className: n.fab,
                  children: Object(D.jsx)(y.a, {}),
                }),
              }),
              Object(D.jsxs)(g.a, {
                fullScreen: !0,
                open: k,
                "aria-labelledby": "form-dialog-title",
                onClose: K,
                children: [
                  Object(D.jsxs)(m.a, {
                    disableTypography: !0,
                    children: [
                      Object(D.jsx)(p.a, {
                        variant: "h6",
                        children: o(
                          J
                            ? "search_product:dialogIdentityDataTitle"
                            : A
                            ? "search_product:dialogConfirmationPin"
                            : "search_product:dialogTotalSummaryTitle"
                        ),
                      }),
                      Object(D.jsx)(O.a, {
                        "aria-label": "close",
                        className: n.closeButton,
                        onClick: K,
                        children: Object(D.jsx)(C.a, {}),
                      }),
                    ],
                  }),
                  J
                    ? Object(D.jsx)(w.IdentityDataDialog, {
                        t: o,
                        handleCloseModal: K,
                        history: i,
                        items: G,
                        total: _,
                        qty: E,
                      })
                    : A
                    ? Object(D.jsx)(w.ConfirmationPinDialog, {
                        t: o,
                        handleCloseModal: K,
                        history: i,
                      })
                    : Object(D.jsx)(w.SummaryDialog, {
                        t: o,
                        handleCloseModal: K,
                        items: G,
                        history: i,
                        total: _,
                      }),
                ],
              }),
            ],
          });
        }),
        M = n(108),
        q = Object(M.a)(function (t) {
          return { root: {} };
        }),
        L = function (t) {
          var e = t.children,
            n = t.t,
            o = q();
          return Object(D.jsxs)("div", {
            className: o.root,
            children: [e, Object(D.jsx)(T, { t: n })],
          });
        };
      e.default = Object(i.a)(["search_product", "glossary"])(function (t) {
        var e = t.t,
          n = t.history,
          i = t.location;
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
            Object(D.jsx)(L, {
              t: e,
              children: Object(D.jsx)(S, { t: e, history: n, location: i }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=13.d9b4fcf5.chunk.js.map
