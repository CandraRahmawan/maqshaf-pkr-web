(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [0],
  {
    34: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      }),
        t.d(n, "b", function () {
          return s;
        });
      var c = t(0),
        a = t(103),
        r = t(105),
        o = t(101),
        i = t(4),
        l = Object(o.a)({
          root: {
            textAlign: "center",
            marginTop: "30%",
            "& p": { color: "#000" },
          },
        }),
        s = function (e) {
          var n = e.label,
            t = l();
          return Object(i.jsx)(a.a, {
            container: !0,
            children: Object(i.jsxs)(a.a, {
              className: t.root,
              item: !0,
              xs: 12,
              children: [
                Object(i.jsx)(r.a, {}),
                Object(i.jsx)("p", { children: n }),
              ],
            }),
          });
        },
        u = Object(c.lazy)(function () {
          return Promise.all([t.e(4), t.e(7)]).then(t.bind(null, 204));
        });
    },
    81: function (e, n, t) {},
    82: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(0),
        a = t.n(c),
        r = t(46),
        o = t.n(r),
        i = t(106),
        l = t(100),
        s = t(68),
        u = t(4),
        j = Object(s.a)({
          primaryColor: "#00a8ff",
          whiteColor: "#fff",
          color: { white: "#fff" },
        }),
        b = function (e) {
          var n = e.children;
          return Object(u.jsx)(l.a, { theme: j, children: n });
        },
        h = t(107),
        d = t(93),
        f = t(61);
      function O(e) {
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
        return Object(u.jsxs)(d.a, {
          client: t,
          children: [
            n,
            Object(u.jsx)(f.ReactQueryDevtools, { initialIsOpen: false }),
          ],
        });
      }
      var m = t(34),
        x = t(44),
        p = t(57),
        g = t(62);
      x.a
        .use(g.a)
        .use(p.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var v = x.a,
        w = t(66),
        k = t(67),
        y = t(6),
        S = [
          {
            path: "/",
            exact: !0,
            component: Object(c.lazy)(function () {
              return Promise.all([t.e(3), t.e(5)]).then(t.bind(null, 201));
            }),
          },
        ];
      function C() {
        return Object(u.jsx)(k.a, {
          children: Object(u.jsx)(y.c, {
            children: S.map(function (e, n) {
              var t = e.path,
                a = e.exact,
                r = e.component;
              return Object(u.jsx)(
                y.a,
                {
                  path: t,
                  exact: a,
                  render: function (e) {
                    return Object(u.jsx)(c.Suspense, {
                      fallback: Object(u.jsx)(m.b, {
                        label: "Sedang memuat data...",
                      }),
                      children: Object(u.jsx)(r, Object(w.a)({}, e)),
                    });
                  },
                },
                n
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
      var F = function (e) {
        e &&
          e instanceof Function &&
          t
            .e(8)
            .then(t.bind(null, 198))
            .then(function (n) {
              var t = n.getCLS,
                c = n.getFID,
                a = n.getFCP,
                r = n.getLCP,
                o = n.getTTFB;
              t(e), c(e), a(e), r(e), o(e);
            });
      };
      t(81);
      o.a.render(
        Object(u.jsx)(a.a.StrictMode, {
          children: Object(u.jsx)(c.Suspense, {
            fallback: Object(u.jsx)(m.b, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: v,
              children: Object(u.jsx)(b, {
                children: Object(u.jsx)(O, { children: Object(u.jsx)(C, {}) }),
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
        F();
    },
  },
  [[82, 1, 2]],
]);
//# sourceMappingURL=main.39c8deef.chunk.js.map
