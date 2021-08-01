(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [12],
  {
    118: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var i = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          n = t.toString().split("").reverse().join(""),
          i = n.match(/\d{1,3}/g);
        return ""
          .concat(e, ". ")
          .concat(i.join(".").split("").reverse().join(""));
      };
    },
    128: function (t, e, n) {
      "use strict";
      var i = n(108),
        o = Object(i.a)(function (t) {
          return {
            list_modal_image: {
              marginRight: 12,
              "& img": { width: 50, height: 50 },
            },
            list_modal_text: { color: t.color.black },
            button_progress: {
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12,
              marginLeft: -12,
            },
            input_pin: { width: "100%" },
          };
        });
      e.a = o;
    },
    152: function (t, e, n) {
      "use strict";
      var i = n(0),
        o = n(329),
        r = n(50),
        a = n(135),
        s = n(57),
        c = n(168),
        u = n.n(c),
        l = n(176),
        d = n.n(l)()(u.a),
        j = {
          success: function (t) {
            return d
              .fire({ title: t.title, icon: "success", text: t.text })
              .then(function () {
                return (
                  t.href && (window.location.href = t.href), Promise.resolve()
                );
              });
          },
        };
      e.a = function (t, e, n) {
        var c = Object(r.b)(),
          u = Object(o.a)(function (t) {
            return Object(a.a)("/transactions/buy/{userId}", "POST", t);
          }),
          l = u.data,
          d = u.error,
          b = u.isLoading,
          O = u.mutate,
          f = Object(o.a)(function (t) {
            return Object(a.a)("/deposit/debet/{userId}", "POST", t);
          }),
          v = f.data,
          h = f.error,
          m = f.isLoading,
          g = f.mutate;
        return (
          Object(i.useEffect)(
            function () {
              if (null === l || void 0 === l ? void 0 : l.data) {
                var n = null === l || void 0 === l ? void 0 : l.data[0];
                c(Object(s.b)(n)), t.push("/pin");
              }
              d && e(!0);
            },
            [l, d]
          ),
          Object(i.useEffect)(
            function () {
              v &&
                j.success({
                  title: n("search_product:alert.successPay"),
                  text: null === v || void 0 === v ? void 0 : v.message,
                  href: "/",
                }),
                h && e(!0);
            },
            [v, h]
          ),
          {
            errorMutationBuy: d,
            isLoadingMutationBuy: b,
            mutateBuy: O,
            mutateDebit: g,
            dataMutationDebit: v,
            errorMutationDebit: h,
            isLoadingMutationDebit: m,
          }
        );
      };
    },
    332: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(121),
        o = n(0),
        r = n(311),
        a = n(300),
        s = n(312),
        c = n(313),
        u = n(330),
        l = n(314),
        d = n(315),
        j = n(185),
        b = n(112),
        O = n(316),
        f = n(317),
        v = n(215),
        h = n.n(v),
        m = n(257),
        g = n.n(m),
        p = n(50),
        x = n(52),
        y = n(324),
        w = n(135),
        L = function (t, e) {
          var n = Object(y.a)(["getUserByQrCode", t], function () {
              return Object(w.a)(
                "/user/saldo",
                "GET",
                { nis: t },
                { enabled: !!t }
              );
            }),
            i = n.data,
            r = n.error,
            a = n.isLoading;
          return (
            Object(o.useEffect)(
              function () {
                r && e(!0);
              },
              [r]
            ),
            { user: i, errorUser: r, isLoading: a }
          );
        },
        M = n(36),
        _ = n(118),
        k = n(152),
        B = n(128),
        S = n(4);
      e.default = function (t) {
        var e,
          n,
          v,
          m,
          y = Object(B.a)(),
          w = Object(p.b)(),
          E = t.t,
          q = t.handleCloseModal,
          C = t.history,
          D = t.items,
          I = t.qty,
          P = t.total,
          T = Object(o.useState)(),
          U = Object(i.a)(T, 2),
          F = U[0],
          A = U[1],
          J = Object(o.useState)(!1),
          N = Object(i.a)(J, 2),
          R = N[0],
          z = N[1],
          G = L(F, z),
          Q = G.user,
          H = G.errorUser,
          K = G.isLoading,
          V = h()(Q, "data", {}),
          W = Object(k.a)(C, z, E),
          X = W.isLoadingMutationBuy,
          Y = W.mutateBuy,
          Z = W.errorMutationBuy;
        return Object(S.jsxs)(S.Fragment, {
          children: [
            Object(S.jsxs)(r.a, {
              children: [
                !Q &&
                  Object(S.jsx)(g.a, {
                    delay: 300,
                    onError: function () {
                      z(!0);
                    },
                    onScan: function (t) {
                      t && A(t);
                    },
                    style: { width: "100%" },
                  }),
                K
                  ? Object(S.jsx)(M.c, { label: E("common:loading") })
                  : !H &&
                    Object(S.jsxs)(a.a, {
                      children: [
                        Object(S.jsxs)(
                          s.a,
                          {
                            children: [
                              Object(S.jsx)(c.a, {
                                children: Object(S.jsx)(u.a, {
                                  children: Object(S.jsx)(O.a, {}),
                                }),
                              }),
                              Object(S.jsx)(l.a, {
                                primary:
                                  null === V ||
                                  void 0 === V ||
                                  null === (e = V.user) ||
                                  void 0 === e
                                    ? void 0
                                    : e.nis,
                                secondary: ""
                                  .concat(
                                    null === V ||
                                      void 0 === V ||
                                      null === (n = V.user) ||
                                      void 0 === n
                                      ? void 0
                                      : n.fullName,
                                    " - "
                                  )
                                  .concat(
                                    null === V ||
                                      void 0 === V ||
                                      null === (v = V.user) ||
                                      void 0 === v
                                      ? void 0
                                      : v.class
                                  ),
                              }),
                            ],
                          },
                          "user"
                        ),
                        Object(S.jsxs)(
                          s.a,
                          {
                            children: [
                              Object(S.jsx)(c.a, {
                                children: Object(S.jsx)(u.a, {
                                  children: Object(S.jsx)(f.a, {}),
                                }),
                              }),
                              Object(S.jsx)(l.a, {
                                primary: E("common:balance"),
                                secondary: Object(_.a)(
                                  null === V ||
                                    void 0 === V ||
                                    null === (m = V.deposit) ||
                                    void 0 === m
                                    ? void 0
                                    : m.saldo
                                ),
                              }),
                            ],
                          },
                          "saldo"
                        ),
                      ],
                    }),
              ],
            }),
            Object(S.jsxs)(d.a, {
              children: [
                Object(S.jsx)(j.a, {
                  onClick: function () {
                    w(Object(x.a)()), q();
                  },
                  color: "primary",
                  children: E("common:cancel"),
                }),
                Object(S.jsxs)(j.a, {
                  onClick: function () {
                    var t;
                    Y({
                      userId:
                        null === V ||
                        void 0 === V ||
                        null === (t = V.user) ||
                        void 0 === t
                          ? void 0
                          : t.userId,
                      total: P,
                      qty: I,
                      items: D,
                    });
                  },
                  color: "primary",
                  disabled: X,
                  children: [
                    E("common:pay"),
                    X &&
                      Object(S.jsx)(b.a, {
                        size: 18,
                        className: y.button_progress,
                      }),
                  ],
                }),
              ],
            }),
            Object(S.jsx)(M.a.Floating, {
              severity: "error",
              showAlert: R,
              setShowAlert: z,
              text:
                (null === H || void 0 === H ? void 0 : H.message) ||
                (null === Z || void 0 === Z ? void 0 : Z.message) ||
                E("glossary:notFoundUser"),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=12.700aa767.chunk.js.map
