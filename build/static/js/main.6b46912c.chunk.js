(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [0],
  {
    44: function (e, n, t) {},
    45: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(0),
        o = t.n(c),
        r = t(20),
        a = t.n(r),
        i = t(53),
        s = t(48),
        l = t(3),
        h = Object(s.a)({
          primaryColor: "#00a8ff",
          whiteColor: "#fff",
          color: { white: "#fff" },
        }),
        u = function (e) {
          var n = e.children;
          return Object(l.jsx)(i.a, { theme: h, children: n });
        },
        f = t(32),
        j = t(30),
        b = t(2),
        d = [
          {
            path: "/",
            exact: !0,
            component: Object(c.lazy)(function () {
              return Promise.all([t.e(3), t.e(4)]).then(t.bind(null, 132));
            }),
          },
        ];
      function p() {
        return Object(l.jsx)(j.a, {
          children: Object(l.jsx)(b.c, {
            children: d.map(function (e, n) {
              var t = e.path,
                o = e.exact,
                r = e.component;
              return Object(l.jsx)(
                b.a,
                {
                  path: t,
                  exact: o,
                  render: function (e) {
                    return Object(l.jsx)(c.Suspense, {
                      fallback: "loading...",
                      children: Object(l.jsx)(r, Object(f.a)({}, e)),
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
      var m = function (e) {
        e &&
          e instanceof Function &&
          t
            .e(5)
            .then(t.bind(null, 130))
            .then(function (n) {
              var t = n.getCLS,
                c = n.getFID,
                o = n.getFCP,
                r = n.getLCP,
                a = n.getTTFB;
              t(e), c(e), o(e), r(e), a(e);
            });
      };
      t(44);
      a.a.render(
        Object(l.jsx)(o.a.StrictMode, {
          children: Object(l.jsx)(c.Suspense, {
            fallback: "loading...",
            children: Object(l.jsx)(u, { children: Object(l.jsx)(p, {}) }),
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
        m();
    },
  },
  [[45, 1, 2]],
]);
//# sourceMappingURL=main.6b46912c.chunk.js.map
