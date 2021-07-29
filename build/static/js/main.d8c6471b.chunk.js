(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [1],
  {
    37: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n(0),
        c = n(107),
        a = n(109),
        o = n(105),
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
          return Object(i.jsx)(c.a, {
            container: !0,
            children: Object(i.jsxs)(c.a, {
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
        u = Object(r.lazy)(function () {
          return Promise.all([n.e(0), n.e(5), n.e(12)]).then(n.bind(null, 253));
        });
    },
    54: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = n(42),
        c = Object(r.b)({
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
        a = c.actions,
        o = a.selectCart,
        i = a.clearCart;
      t.b = c.reducer;
    },
    85: function (e, t, n) {},
    86: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        c = n.n(r),
        a = n(30),
        o = n.n(a),
        i = n(110),
        l = n(104),
        s = n(72),
        u = n(4),
        d = Object(s.a)({
          primaryColor: "#00a8ff",
          orangeColor: "#ff9100",
          whiteColor: "#fff",
          blackColor: "#000",
          color: { white: "#fff" },
        }),
        j = function (e) {
          var t = e.children;
          return Object(u.jsx)(l.a, { theme: d, children: t });
        },
        b = n(111),
        f = n(97),
        h = n(66);
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
        x = n(54),
        g = Object(p.a)({
          reducer: { cartSelected: x.b },
          devTools: Boolean(localStorage.getItem("redux-debug")),
        });
      function v(e) {
        var t = e.children;
        return Object(u.jsx)(O.a, { store: g, children: t });
      }
      var w = n(37),
        y = n(47),
        C = n(61),
        S = n(67);
      y.a
        .use(S.a)
        .use(C.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var k = y.a,
        q = n(71),
        F = n(62),
        B = n(6),
        I = [
          {
            path: "/:action(identitas|pin)?",
            exact: !0,
            component: Object(r.lazy)(function () {
              return Promise.all([n.e(0), n.e(4), n.e(9)]).then(
                n.bind(null, 245)
              );
            }),
          },
        ];
      function P() {
        return Object(u.jsx)(F.a, {
          children: Object(u.jsx)(B.c, {
            children: I.map(function (e, t) {
              var n = e.path,
                c = e.exact,
                a = e.component;
              return Object(u.jsx)(
                B.a,
                {
                  path: n,
                  exact: c,
                  render: function (e) {
                    return Object(u.jsx)(r.Suspense, {
                      fallback: Object(u.jsx)(w.b, {
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
            .e(13)
            .then(n.bind(null, 237))
            .then(function (t) {
              var n = t.getCLS,
                r = t.getFID,
                c = t.getFCP,
                a = t.getLCP,
                o = t.getTTFB;
              n(e), r(e), c(e), a(e), o(e);
            });
      };
      n(85);
      o.a.render(
        Object(u.jsx)(c.a.StrictMode, {
          children: Object(u.jsx)(r.Suspense, {
            fallback: Object(u.jsx)(w.b, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: k,
              children: Object(u.jsx)(v, {
                children: Object(u.jsx)(j, {
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
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            }),
        T();
    },
  },
  [[86, 2, 3]],
]);
//# sourceMappingURL=main.d8c6471b.chunk.js.map
