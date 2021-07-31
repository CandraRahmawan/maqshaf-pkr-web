(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [11],
  {
    116: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var o = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          n = t.toString().split("").reverse().join(""),
          o = n.match(/\d{1,3}/g);
        return ""
          .concat(e, ". ")
          .concat(o.join(".").split("").reverse().join(""));
      };
    },
    126: function (t, e, n) {
      "use strict";
      var o = n(106),
        a = Object(o.a)(function (t) {
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
      e.a = a;
    },
    309: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(127),
        a = n(0),
        r = n(294),
        i = n(284),
        s = n(295),
        c = n(296),
        u = n(254),
        l = n(297),
        d = n(298),
        j = n(172),
        b = n(110),
        O = n(249),
        m = n(250),
        v = n(201),
        h = n.n(v),
        f = n(243),
        g = n.n(f),
        p = n(51),
        y = n(52),
        x = n(305),
        w = n(140),
        B = function (t, e) {
          var n = Object(x.a)(["getUserByQrCode", t], function () {
              return Object(w.a)(
                "/user/saldo",
                "GET",
                { nis: t },
                { enabled: !!t }
              );
            }),
            o = n.data,
            r = n.error,
            i = n.isLoading;
          return (
            Object(a.useEffect)(
              function () {
                r && e(!0);
              },
              [r]
            ),
            { user: o, errorUser: r, isLoading: i }
          );
        },
        k = n(35),
        L = n(116),
        _ = n(311),
        M = function (t, e) {
          var n = Object(_.a)(function (t) {
              return Object(w.a)("/transactions/buy/{userId}", "POST", t);
            }),
            o = n.data,
            r = n.error,
            i = n.isLoading,
            s = n.mutate;
          return (
            Object(a.useEffect)(
              function () {
                o && t.push("/pin"), r && e(!0);
              },
              [o, r]
            ),
            {
              dataMutationBuy: o,
              errorMutationBuy: r,
              isLoadingMutationBuy: i,
              mutateBuy: s,
            }
          );
        },
        S = n(126),
        q = n(4);
      e.default = function (t) {
        var e,
          n,
          v,
          f,
          x = Object(S.a)(),
          w = Object(p.b)(),
          _ = t.t,
          C = t.handleCloseModal,
          E = t.history,
          U = t.items,
          F = t.qty,
          I = t.total,
          T = Object(a.useState)(),
          A = Object(o.a)(T, 2),
          J = A[0],
          N = A[1],
          R = Object(a.useState)(!1),
          z = Object(o.a)(R, 2),
          G = z[0],
          P = z[1],
          Q = B(J, P),
          D = Q.user,
          H = Q.errorUser,
          K = Q.isLoading,
          V = h()(D, "data", {}),
          W = M(E, P),
          X = W.isLoadingMutationBuy,
          Y = W.mutateBuy,
          Z = W.errorMutationBuy;
        return Object(q.jsxs)(q.Fragment, {
          children: [
            Object(q.jsxs)(r.a, {
              children: [
                !D &&
                  Object(q.jsx)(g.a, {
                    delay: 300,
                    onError: function () {
                      P(!0);
                    },
                    onScan: function (t) {
                      t && N(t);
                    },
                    style: { width: "100%" },
                  }),
                K
                  ? Object(q.jsx)(k.c, { label: _("common:loading") })
                  : !H &&
                    Object(q.jsxs)(i.a, {
                      children: [
                        Object(q.jsxs)(
                          s.a,
                          {
                            children: [
                              Object(q.jsx)(c.a, {
                                children: Object(q.jsx)(u.a, {
                                  children: Object(q.jsx)(O.a, {}),
                                }),
                              }),
                              Object(q.jsx)(l.a, {
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
                        Object(q.jsxs)(
                          s.a,
                          {
                            children: [
                              Object(q.jsx)(c.a, {
                                children: Object(q.jsx)(u.a, {
                                  children: Object(q.jsx)(m.a, {}),
                                }),
                              }),
                              Object(q.jsx)(l.a, {
                                primary: _("common:balance"),
                                secondary: Object(L.a)(
                                  null === V ||
                                    void 0 === V ||
                                    null === (f = V.deposit) ||
                                    void 0 === f
                                    ? void 0
                                    : f.saldo
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
            Object(q.jsxs)(d.a, {
              children: [
                Object(q.jsx)(j.a, {
                  onClick: function () {
                    w(Object(y.a)()), C();
                  },
                  color: "primary",
                  children: _("common:cancel"),
                }),
                Object(q.jsxs)(j.a, {
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
                      total: I,
                      qty: F,
                      items: U,
                    });
                  },
                  color: "primary",
                  disabled: X,
                  children: [
                    _("common:pay"),
                    X &&
                      Object(q.jsx)(b.a, {
                        size: 18,
                        className: x.button_progress,
                      }),
                  ],
                }),
              ],
            }),
            Object(q.jsx)(k.a.Floating, {
              severity: "error",
              showAlert: G,
              setShowAlert: P,
              text:
                (null === H || void 0 === H ? void 0 : H.message) ||
                (null === Z || void 0 === Z ? void 0 : Z.message) ||
                _("glossary:notFoundUser"),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=11.457dd324.chunk.js.map
