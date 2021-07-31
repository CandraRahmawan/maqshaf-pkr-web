(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [3],
  {
    35: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return u;
        });
      var c = n(0),
        r = n(108),
        a = n(110),
        o = n(106),
        i = n(4),
        l = Object(o.a)({
          root: {
            textAlign: "center",
            marginTop: "30%",
            "& p": { color: "#000" },
          },
        }),
        s = function (e) {
          var t = e.label,
            n = l();
          return Object(i.jsx)(r.a, {
            container: !0,
            children: Object(i.jsxs)(r.a, {
              className: n.root,
              item: !0,
              xs: 12,
              children: [
                Object(i.jsx)(a.a, {}),
                Object(i.jsx)("p", { children: t }),
              ],
            }),
          });
        },
        u = {
          Floating: Object(c.lazy)(function () {
            return Promise.all([n.e(0), n.e(2), n.e(15)]).then(
              n.bind(null, 282)
            );
          }),
        },
        d = Object(c.lazy)(function () {
          return Promise.all([n.e(0), n.e(2), n.e(8), n.e(14)]).then(
            n.bind(null, 310)
          );
        });
    },
    52: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var c = n(42),
        r = Object(c.b)({
          name: "cartSelected",
          initialState: { total: 0, qty: 0, items: [] },
          reducers: {
            selectCart: function (e, t) {
              var n = t.payload.items;
              (e.total = n
                .map(function (e) {
                  return e.price * e.qty;
                })
                .reduce(function (e, t) {
                  return e + t;
                })),
                (e.qty = n
                  .map(function (e) {
                    return e.qty;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  })),
                (e.items = n);
            },
            clearCart: function (e) {
              (e.total = 0), (e.qty = 0), (e.items = []);
            },
          },
        }),
        a = r.actions,
        o = a.selectCart,
        i = a.clearCart;
      t.b = r.reducer;
    },
    86: function (e, t, n) {},
    87: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        r = n.n(c),
        a = n(30),
        o = n.n(a),
        i = n(111),
        l = n(105),
        s = n(73),
        u = n(4),
        d = Object(s.a)({
          primaryColor: "#00a8ff",
          orangeColor: "#ff9100",
          whiteColor: "#fff",
          color: { white: "#fff", black: "#000" },
        }),
        j = function (e) {
          var t = e.children;
          return Object(u.jsx)(l.a, { theme: d, children: t });
        },
        b = n(112),
        f = n(98),
        h = n(67);
      function m(e) {
        var t = e.children,
          n = new b.a({
            defaultOptions: {
              queries: {
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                retry: !1,
              },
            },
          });
        return Object(u.jsxs)(f.a, {
          client: n,
          children: [
            t,
            Object(u.jsx)(h.ReactQueryDevtools, { initialIsOpen: false }),
          ],
        });
      }
      var O = n(51),
        p = n(42),
        x = n(52),
        g = Object(p.a)({
          reducer: { cartSelected: x.b },
          devTools: Boolean(localStorage.getItem("redux-debug")),
        });
      function v(e) {
        var t = e.children;
        return Object(u.jsx)(O.a, { store: g, children: t });
      }
      var w = n(35),
        y = n(47),
        S = n(62),
        k = n(68);
      y.a
        .use(k.a)
        .use(S.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var C = y.a,
        q = n(72),
        F = n(63),
        P = n(6),
        B = [
          {
            path: "/:action(identitas|pin)?",
            exact: !0,
            component: Object(c.lazy)(function () {
              return Promise.all([n.e(0), n.e(7), n.e(12)]).then(
                n.bind(null, 301)
              );
            }),
          },
        ];
      function I() {
        return Object(u.jsx)(F.a, {
          children: Object(u.jsx)(P.c, {
            children: B.map(function (e, t) {
              var n = e.path,
                r = e.exact,
                a = e.component;
              return Object(u.jsx)(
                P.a,
                {
                  path: n,
                  exact: r,
                  render: function (e) {
                    return Object(u.jsx)(c.Suspense, {
                      fallback: Object(u.jsx)(w.c, {
                        label: "Sedang memuat data...",
                      }),
                      children: Object(u.jsx)(a, Object(q.a)({}, e)),
                    });
                  },
                },
                t
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
      var T = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(16)
            .then(n.bind(null, 292))
            .then(function (t) {
              var n = t.getCLS,
                c = t.getFID,
                r = t.getFCP,
                a = t.getLCP,
                o = t.getTTFB;
              n(e), c(e), r(e), a(e), o(e);
            });
      };
      n(86);
      o.a.render(
        Object(u.jsx)(r.a.StrictMode, {
          children: Object(u.jsx)(c.Suspense, {
            fallback: Object(u.jsx)(w.c, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: C,
              children: Object(u.jsx)(v, {
                children: Object(u.jsx)(j, {
                  children: Object(u.jsx)(m, {
                    children: Object(u.jsx)(I, {}),
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
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            }),
        T();
    },
  },
  [[87, 4, 5]],
]);
//# sourceMappingURL=main.49160842.chunk.js.map
