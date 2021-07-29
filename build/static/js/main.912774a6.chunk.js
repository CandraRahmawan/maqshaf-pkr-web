(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [1],
  {
    37: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      }),
        t.d(n, "b", function () {
          return s;
        });
      var r = t(0),
        c = t(107),
        o = t(109),
        a = t(105),
        i = t(4),
        l = Object(a.a)({
          root: {
            textAlign: "center",
            marginTop: "30%",
            "& p": { color: "#000" },
          },
        }),
        s = function (e) {
          var n = e.label,
            t = l();
          return Object(i.jsx)(c.a, {
            container: !0,
            children: Object(i.jsxs)(c.a, {
              className: t.root,
              item: !0,
              xs: 12,
              children: [
                Object(i.jsx)(o.a, {}),
                Object(i.jsx)("p", { children: n }),
              ],
            }),
          });
        },
        u = Object(r.lazy)(function () {
          return Promise.all([t.e(0), t.e(5), t.e(7)]).then(t.bind(null, 242));
        });
    },
    59: function (e, n, t) {
      "use strict";
      t.d(n, "c", function () {
        return a;
      }),
        t.d(n, "a", function () {
          return i;
        });
      var r = t(42),
        c = Object(r.b)({
          name: "cartSelected",
          initialState: { total: 0, qty: 0, items: [] },
          reducers: {
            selectCart: function (e, n) {
              var t = n.payload.items;
              (e.total = t
                .map(function (e) {
                  return e.price * e.qty;
                })
                .reduce(function (e, n) {
                  return e + n;
                })),
                (e.qty = t
                  .map(function (e) {
                    return e.qty;
                  })
                  .reduce(function (e, n) {
                    return e + n;
                  })),
                (e.items = t);
            },
            clearCart: function (e) {
              (e.total = 0), (e.qty = 0), (e.items = []);
            },
          },
        }),
        o = c.actions,
        a = o.selectCart,
        i = o.clearCart;
      n.b = c.reducer;
    },
    85: function (e, n, t) {},
    86: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(0),
        c = t.n(r),
        o = t(30),
        a = t.n(o),
        i = t(110),
        l = t(104),
        s = t(72),
        u = t(4),
        d = Object(s.a)({
          primaryColor: "#00a8ff",
          orangeColor: "#ff9100",
          whiteColor: "#fff",
          blackColor: "#000",
          color: { white: "#fff" },
        }),
        f = function (e) {
          var n = e.children;
          return Object(u.jsx)(l.a, { theme: d, children: n });
        },
        h = t(111),
        b = t(97),
        j = t(65),
        p = !1;
      function v(e) {
        var n = e.children,
          t = new h.a({
            defaultOptions: {
              queries: {
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                retry: !1,
              },
            },
          });
        return Object(u.jsxs)(b.a, {
          client: t,
          children: [
            n,
            Object(u.jsx)(j.ReactQueryDevtools, { initialIsOpen: p }),
          ],
        });
      }
      var g = t(55),
        m = t(42),
        O = t(59),
        w = Object(m.a)({
          reducer: { cartSelected: O.b },
          devTools: Boolean(localStorage.getItem("redux-debug")),
        });
      function x(e) {
        var n = e.children;
        return Object(u.jsx)(g.a, { store: w, children: n });
      }
      var k = t(37),
        y = t(47),
        S = t(61),
        C = t(66);
      y.a
        .use(C.a)
        .use(S.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var W = y.a,
        q = t(70),
        P = t(71),
        T = t(6),
        F = [
          {
            path: "/",
            exact: !0,
            component: Object(r.lazy)(function () {
              return Promise.all([t.e(0), t.e(4), t.e(6)]).then(
                t.bind(null, 234)
              );
            }),
          },
        ];
      function L() {
        return Object(u.jsx)(P.a, {
          children: Object(u.jsx)(T.c, {
            children: F.map(function (e, n) {
              var t = e.path,
                c = e.exact,
                o = e.component;
              return Object(u.jsx)(
                T.a,
                {
                  path: t,
                  exact: c,
                  render: function (e) {
                    return Object(u.jsx)(r.Suspense, {
                      fallback: Object(u.jsx)(k.b, {
                        label: "Sedang memuat data...",
                      }),
                      children: Object(u.jsx)(o, Object(q.a)({}, e)),
                    });
                  },
                },
                n
              );
            }),
          }),
        });
      }
      var A = Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function B(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function () {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var I = function (e) {
        e &&
          e instanceof Function &&
          t
            .e(9)
            .then(t.bind(null, 230))
            .then(function (n) {
              var t = n.getCLS,
                r = n.getFID,
                c = n.getFCP,
                o = n.getLCP,
                a = n.getTTFB;
              t(e), r(e), c(e), o(e), a(e);
            });
      };
      t(85);
      a.a.render(
        Object(u.jsx)(c.a.StrictMode, {
          children: Object(u.jsx)(r.Suspense, {
            fallback: Object(u.jsx)(k.b, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: W,
              children: Object(u.jsx)(x, {
                children: Object(u.jsx)(f, {
                  children: Object(u.jsx)(v, {
                    children: Object(u.jsx)(L, {}),
                  }),
                }),
              }),
            }),
          }),
        }),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var n = "".concat("", "/service-worker.js");
              A
                ? (!(function (e, n) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (t) {
                        var r = t.headers.get("content-type");
                        404 === t.status ||
                        (null != r && -1 === r.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : B(e, n);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : B(n, e);
            });
          }
        })(),
        I();
    },
  },
  [[86, 2, 3]],
]);
//# sourceMappingURL=main.912774a6.chunk.js.map
