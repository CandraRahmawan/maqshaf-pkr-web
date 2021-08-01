(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [10],
  {
    118: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return i;
      });
      var i = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          a = t.toString().split("").reverse().join(""),
          i = a.match(/\d{1,3}/g);
        return ""
          .concat(e, ". ")
          .concat(i.join(".").split("").reverse().join(""));
      };
    },
    128: function (t, e, a) {
      "use strict";
      var i = a(108),
        n = Object(i.a)(function (t) {
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
      e.a = n;
    },
    152: function (t, e, a) {
      "use strict";
      var i = a(0),
        n = a(329),
        r = a(50),
        o = a(135),
        c = a(57),
        s = a(168),
        l = a.n(s),
        u = a(176),
        d = a.n(u)()(l.a),
        b = {
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
      e.a = function (t, e, a) {
        var s = Object(r.b)(),
          l = Object(n.a)(function (t) {
            return Object(o.a)("/transactions/buy/{userId}", "POST", t);
          }),
          u = l.data,
          d = l.error,
          j = l.isLoading,
          h = l.mutate,
          m = Object(n.a)(function (t) {
            return Object(o.a)("/deposit/debet/{userId}", "POST", t);
          }),
          O = m.data,
          f = m.error,
          g = m.isLoading,
          p = m.mutate;
        return (
          Object(i.useEffect)(
            function () {
              if (null === u || void 0 === u ? void 0 : u.data) {
                var a = null === u || void 0 === u ? void 0 : u.data[0];
                s(Object(c.b)(a)), t.push("/pin");
              }
              d && e(!0);
            },
            [u, d]
          ),
          Object(i.useEffect)(
            function () {
              O &&
                b.success({
                  title: a("search_product:alert.successPay"),
                  text: null === O || void 0 === O ? void 0 : O.message,
                  href: "/",
                }),
                f && e(!0);
            },
            [O, f]
          ),
          {
            errorMutationBuy: d,
            isLoadingMutationBuy: j,
            mutateBuy: h,
            mutateDebit: p,
            dataMutationDebit: O,
            errorMutationDebit: f,
            isLoadingMutationDebit: g,
          }
        );
      };
    },
    214: function (t, e, a) {
      "use strict";
      var i = a(1),
        n = a(5),
        r = a(0),
        o = (a(12), a(28)),
        c = a(30),
        s = a(32),
        l = r.forwardRef(function (t, e) {
          var a = t.absolute,
            c = void 0 !== a && a,
            s = t.classes,
            l = t.className,
            u = t.component,
            d = void 0 === u ? "hr" : u,
            b = t.flexItem,
            j = void 0 !== b && b,
            h = t.light,
            m = void 0 !== h && h,
            O = t.orientation,
            f = void 0 === O ? "horizontal" : O,
            g = t.role,
            p = void 0 === g ? ("hr" !== d ? "separator" : void 0) : g,
            v = t.variant,
            x = void 0 === v ? "fullWidth" : v,
            y = Object(n.a)(t, [
              "absolute",
              "classes",
              "className",
              "component",
              "flexItem",
              "light",
              "orientation",
              "role",
              "variant",
            ]);
          return r.createElement(
            d,
            Object(i.a)(
              {
                className: Object(o.a)(
                  s.root,
                  l,
                  "fullWidth" !== x && s[x],
                  c && s.absolute,
                  j && s.flexItem,
                  m && s.light,
                  "vertical" === f && s.vertical
                ),
                role: p,
                ref: e,
              },
              y
            )
          );
        });
      e.a = Object(c.a)(
        function (t) {
          return {
            root: {
              height: 1,
              margin: 0,
              border: "none",
              flexShrink: 0,
              backgroundColor: t.palette.divider,
            },
            absolute: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
            },
            inset: { marginLeft: 72 },
            light: { backgroundColor: Object(s.a)(t.palette.divider, 0.08) },
            middle: { marginLeft: t.spacing(2), marginRight: t.spacing(2) },
            vertical: { height: "100%", width: 1 },
            flexItem: { alignSelf: "stretch", height: "auto" },
          };
        },
        { name: "MuiDivider" }
      )(l);
    },
    318: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(121),
        n = a(0),
        r = a(311),
        o = a(300),
        c = a(312),
        s = a(313),
        l = a(330),
        u = a(314),
        d = a(214),
        b = a(319),
        j = a(315),
        h = a(185),
        m = a(112),
        O = a(50),
        f = a(316),
        g = a(317),
        p = a(118),
        v = a(52),
        x = a(152),
        y = a(36),
        w = a(128),
        k = a(4);
      e.default = function (t) {
        var e = Object(w.a)(),
          a = Object(O.b)(),
          I = Object(O.c)(function (t) {
            return t.transaction;
          }),
          D = I.total,
          M = I.saldo,
          S = I.transactionCode,
          _ = I.userId,
          C = I.transactionId,
          L = t.t,
          B = t.handleCloseModal,
          N = t.history,
          P = Object(n.useState)(!1),
          R = Object(i.a)(P, 2),
          E = R[0],
          T = R[1],
          q = Object(n.useState)(),
          z = Object(i.a)(q, 2),
          A = z[0],
          F = z[1],
          J = Object(x.a)(N, T, L),
          W = J.mutateDebit,
          G = J.errorMutationDebit,
          H = J.isLoadingMutationDebit;
        return Object(k.jsxs)(k.Fragment, {
          children: [
            Object(k.jsxs)(r.a, {
              children: [
                Object(k.jsxs)(o.a, {
                  children: [
                    Object(k.jsxs)(
                      c.a,
                      {
                        children: [
                          Object(k.jsx)(s.a, {
                            children: Object(k.jsx)(l.a, {
                              children: Object(k.jsx)(f.a, {}),
                            }),
                          }),
                          Object(k.jsx)(u.a, {
                            primary: L("common:label.transactionCode"),
                            secondary: S,
                          }),
                        ],
                      },
                      "user"
                    ),
                    Object(k.jsx)(d.a, {}),
                    Object(k.jsxs)(
                      c.a,
                      {
                        children: [
                          Object(k.jsx)(s.a, {
                            children: Object(k.jsx)(l.a, {
                              children: Object(k.jsx)(g.a, {}),
                            }),
                          }),
                          Object(k.jsx)(u.a, {
                            primary: L("common:balance"),
                            secondary: Object(p.a)(M),
                          }),
                        ],
                      },
                      "saldo"
                    ),
                    Object(k.jsx)(d.a, {}),
                    Object(k.jsxs)(
                      c.a,
                      {
                        children: [
                          Object(k.jsx)(s.a, {
                            children: Object(k.jsx)(l.a, {
                              children: Object(k.jsx)(g.a, {}),
                            }),
                          }),
                          Object(k.jsx)(u.a, {
                            primary: L("common:label.totalBuy"),
                            secondary: Object(p.a)(D),
                          }),
                        ],
                      },
                      "total"
                    ),
                    Object(k.jsx)(d.a, {}),
                  ],
                }),
                Object(k.jsx)(b.a, {
                  onChange: function (t) {
                    return F(t.target.value);
                  },
                  label: L("common:label.enterPin"),
                  type: "password",
                  className: e.input_pin,
                }),
              ],
            }),
            Object(k.jsxs)(j.a, {
              children: [
                Object(k.jsx)(h.a, {
                  onClick: function () {
                    a(Object(v.a)()), B();
                  },
                  color: "primary",
                  children: L("common:cancel"),
                }),
                Object(k.jsxs)(h.a, {
                  onClick: function () {
                    return W({
                      totalBayar: D,
                      updatedBy: _.toString(),
                      userId: _,
                      pin: A,
                      transactionId: C,
                    });
                  },
                  color: "primary",
                  disabled: H,
                  children: [
                    L("common:confirmation"),
                    H &&
                      Object(k.jsx)(m.a, {
                        size: 18,
                        className: e.button_progress,
                      }),
                  ],
                }),
              ],
            }),
            Object(k.jsx)(y.a.Floating, {
              severity: "error",
              showAlert: E,
              setShowAlert: T,
              text:
                (null === G || void 0 === G ? void 0 : G.message) ||
                L("glossary:failedDebit"),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=10.944d692b.chunk.js.map
