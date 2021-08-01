(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [4],
  {
    36: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return u;
        });
      var a = n(0),
        r = n(110),
        c = n(112),
        o = n(108),
        i = n(4),
        s = Object(o.a)({
          root: {
            textAlign: "center",
            marginTop: "30%",
            "& p": { color: "#000" },
          },
        }),
        l = function (t) {
          var e = t.label,
            n = s();
          return Object(i.jsx)(r.a, {
            container: !0,
            children: Object(i.jsxs)(r.a, {
              className: n.root,
              item: !0,
              xs: 12,
              children: [
                Object(i.jsx)(c.a, {}),
                Object(i.jsx)("p", { children: e }),
              ],
            }),
          });
        },
        u = {
          Floating: Object(a.lazy)(function () {
            return Promise.all([n.e(0), n.e(3), n.e(16)]).then(
              n.bind(null, 298)
            );
          }),
        },
        d = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(9), n.e(15)]).then(
            n.bind(null, 328)
          );
        });
    },
    52: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        });
      var a = n(26),
        r = Object(a.b)({
          name: "cartSelected",
          initialState: { total: 0, qty: 0, items: [] },
          reducers: {
            selectCart: function (t, e) {
              var n = e.payload.items;
              (t.total = n
                .map(function (t) {
                  return t.price * t.qty;
                })
                .reduce(function (t, e) {
                  return t + e;
                })),
                (t.qty = n
                  .map(function (t) {
                    return t.qty;
                  })
                  .reduce(function (t, e) {
                    return t + e;
                  })),
                (t.items = n);
            },
            clearCart: function (t) {
              (t.total = 0), (t.qty = 0), (t.items = []);
            },
          },
        }),
        c = r.actions,
        o = c.selectCart,
        i = c.clearCart;
      e.b = r.reducer;
    },
    57: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      });
      var a = n(26),
        r = Object(a.b)({
          name: "setTransaction",
          initialState: {
            transactionCode: 0,
            transactionId: 0,
            transactionDate: "",
            qty: 0,
            saldo: 0,
            total: 0,
            userId: 0,
            items: [],
          },
          reducers: {
            setTransaction: function (t, e) {
              var n = e.payload,
                a = n.items,
                r = n.qty,
                c = n.saldo,
                o = n.transactionCode,
                i = n.transactionId,
                s = n.transactionDate,
                l = n.total,
                u = n.userId;
              (t.transactionCode = o),
                (t.transactionId = i),
                (t.transactionDate = s),
                (t.qty = r),
                (t.saldo = c),
                (t.total = l),
                (t.userId = u),
                (t.items = a);
            },
          },
        }),
        c = r.actions.setTransaction;
      e.a = r.reducer;
    },
    87: function (t, e, n) {},
    89: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(0),
        r = n.n(a),
        c = n(31),
        o = n.n(c),
        i = n(113),
        s = n(107),
        l = n(74),
        u = n(4),
        d = Object(l.a)({
          primaryColor: "#00a8ff",
          orangeColor: "#ff9100",
          whiteColor: "#fff",
          color: { white: "#fff", black: "#000" },
        }),
        b = function (t) {
          var e = t.children;
          return Object(u.jsx)(s.a, { theme: d, children: e });
        },
        f = n(114),
        j = n(100),
        h = n(68);
      function m(t) {
        var e = t.children,
          n = new f.a({
            defaultOptions: {
              queries: {
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                retry: !1,
              },
            },
          });
        return Object(u.jsxs)(j.a, {
          client: n,
          children: [
            e,
            Object(u.jsx)(h.ReactQueryDevtools, { initialIsOpen: false }),
          ],
        });
      }
      var O = n(50),
        p = n(26),
        x = n(52),
        v = n(57),
        g = Object(p.a)({
          reducer: { cartSelected: x.b, transaction: v.a },
          devTools: Boolean(localStorage.getItem("redux-debug")),
        });
      function y(t) {
        var e = t.children;
        return Object(u.jsx)(O.a, { store: g, children: e });
      }
      var w = n(36),
        C = n(47),
        S = n(63),
        q = n(69);
      C.a
        .use(q.a)
        .use(S.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var k = C.a,
        I = n(73),
        T = n(64),
        F = n(6),
        D = [
          {
            path: "/:action(identitas|pin)?",
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(8), n.e(13)]).then(
                n.bind(null, 320)
              );
            }),
          },
        ];
      function P() {
        return Object(u.jsx)(T.a, {
          children: Object(u.jsx)(F.c, {
            children: D.map(function (t, e) {
              var n = t.path,
                r = t.exact,
                c = t.component;
              return Object(u.jsx)(
                F.a,
                {
                  path: n,
                  exact: r,
                  render: function (t) {
                    return Object(u.jsx)(a.Suspense, {
                      fallback: Object(u.jsx)(w.c, {
                        label: "Sedang memuat data...",
                      }),
                      children: Object(u.jsx)(c, Object(I.a)({}, t)),
                    });
                  },
                },
                e
              );
            }),
          }),
        });
      }
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var B = function (t) {
        t &&
          t instanceof Function &&
          n
            .e(17)
            .then(n.bind(null, 308))
            .then(function (e) {
              var n = e.getCLS,
                a = e.getFID,
                r = e.getFCP,
                c = e.getLCP,
                o = e.getTTFB;
              n(t), a(t), r(t), c(t), o(t);
            });
      };
      n(87), n(88);
      o.a.render(
        Object(u.jsx)(r.a.StrictMode, {
          children: Object(u.jsx)(a.Suspense, {
            fallback: Object(u.jsx)(w.c, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: k,
              children: Object(u.jsx)(y, {
                children: Object(u.jsx)(b, {
                  children: Object(u.jsx)(m, {
                    children: Object(u.jsx)(P, {}),
                  }),
                }),
              }),
            }),
          }),
        }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (t) {
              t.unregister();
            })
            .catch(function (t) {
              console.error(t.message);
            }),
        B();
    },
  },
  [[89, 5, 6]],
]);
//# sourceMappingURL=main.1a380c7b.chunk.js.map
