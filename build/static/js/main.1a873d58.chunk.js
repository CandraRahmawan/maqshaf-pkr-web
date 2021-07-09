(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [0],
  {
    59: function (e, n, t) {},
    60: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(0),
        a = t.n(c),
        o = t(28),
        r = t.n(o),
        i = t(69),
        s = t(68),
        l = t(64),
        h = t(3),
        u = Object(l.a)({
          primaryColor: "#00a8ff",
          whiteColor: "#fff",
          color: { white: "#fff" },
        }),
        f = function (e) {
          var n = e.children;
          return Object(h.jsx)(s.a, { theme: u, children: n });
        },
        d = t(27),
        j = t(35),
        b = t(42);
      d.a
        .use(b.a)
        .use(j.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var m = d.a,
        p = t(47),
        g = t(46),
        x = t(2),
        O = [
          {
            path: "/",
            exact: !0,
            component: Object(c.lazy)(function () {
              return Promise.all([t.e(2), t.e(6)]).then(t.bind(null, 177));
            }),
          },
        ];
      function w() {
        return Object(h.jsx)(g.a, {
          children: Object(h.jsx)(x.c, {
            children: O.map(function (e, n) {
              var t = e.path,
                a = e.exact,
                o = e.component;
              return Object(h.jsx)(
                x.a,
                {
                  path: t,
                  exact: a,
                  render: function (e) {
                    return Object(h.jsx)(c.Suspense, {
                      fallback: "loading...",
                      children: Object(h.jsx)(o, Object(p.a)({}, e)),
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
      var v = function (e) {
        e &&
          e instanceof Function &&
          t
            .e(7)
            .then(t.bind(null, 165))
            .then(function (n) {
              var t = n.getCLS,
                c = n.getFID,
                a = n.getFCP,
                o = n.getLCP,
                r = n.getTTFB;
              t(e), c(e), a(e), o(e), r(e);
            });
      };
      t(59);
      r.a.render(
        Object(h.jsx)(a.a.StrictMode, {
          children: Object(h.jsx)(c.Suspense, {
            fallback: "loading...",
            children: Object(h.jsx)(i.a, {
              i18n: m,
              children: Object(h.jsx)(f, { children: Object(h.jsx)(w, {}) }),
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
        v();
    },
  },
  [[60, 1, 3]],
]);
//# sourceMappingURL=main.1a873d58.chunk.js.map
