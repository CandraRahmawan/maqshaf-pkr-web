(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [0],
  {
    23: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      }),
        t.d(n, "b", function () {
          return s;
        });
      var a = t(0),
        c = t(89),
        r = t(91),
        o = t(87),
        i = t(2),
        l = Object(o.a)({ root: { textAlign: "center", marginTop: "30%" } }),
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
                Object(i.jsx)(r.a, {}),
                Object(i.jsx)("p", { children: n }),
              ],
            }),
          });
        },
        u = Object(a.lazy)(function () {
          return Promise.all([t.e(4), t.e(5)]).then(t.bind(null, 170));
        });
    },
    69: function (e, n, t) {},
    70: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        c = t.n(a),
        r = t(36),
        o = t.n(r),
        i = t(92),
        l = t(86),
        s = t(56),
        u = t(2),
        j = Object(s.a)({
          primaryColor: "#00a8ff",
          whiteColor: "#fff",
          color: { white: "#fff" },
        }),
        b = function (e) {
          var n = e.children;
          return Object(u.jsx)(l.a, { theme: j, children: n });
        },
        h = t(23),
        d = t(34),
        f = t(44),
        m = t(50);
      d.a
        .use(m.a)
        .use(f.e)
        .init({
          fallbackLng: "id",
          lng: "id",
          interpolation: { escapeValue: !1 },
          ns: ["common"],
          defaultNS: "common",
        });
      var x = d.a,
        O = t(54),
        p = t(55),
        g = t(4),
        v = [
          {
            path: "/",
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([t.e(3), t.e(6)]).then(t.bind(null, 183));
            }),
          },
        ];
      function w() {
        return Object(u.jsx)(p.a, {
          children: Object(u.jsx)(g.c, {
            children: v.map(function (e, n) {
              var t = e.path,
                c = e.exact,
                r = e.component;
              return Object(u.jsx)(
                g.a,
                {
                  path: t,
                  exact: c,
                  render: function (e) {
                    return Object(u.jsx)(a.Suspense, {
                      fallback: Object(u.jsx)(h.b, {
                        label: "Sedang memuat data...",
                      }),
                      children: Object(u.jsx)(r, Object(O.a)({}, e)),
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
      var k = function (e) {
        e &&
          e instanceof Function &&
          t
            .e(7)
            .then(t.bind(null, 180))
            .then(function (n) {
              var t = n.getCLS,
                a = n.getFID,
                c = n.getFCP,
                r = n.getLCP,
                o = n.getTTFB;
              t(e), a(e), c(e), r(e), o(e);
            });
      };
      t(69);
      o.a.render(
        Object(u.jsx)(c.a.StrictMode, {
          children: Object(u.jsx)(a.Suspense, {
            fallback: Object(u.jsx)(h.b, {
              label: "Sedang memnuat halaman...",
            }),
            children: Object(u.jsx)(i.a, {
              i18n: x,
              children: Object(u.jsx)(b, { children: Object(u.jsx)(w, {}) }),
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
        k();
    },
  },
  [[70, 1, 2]],
]);
//# sourceMappingURL=main.cb9f62aa.chunk.js.map
