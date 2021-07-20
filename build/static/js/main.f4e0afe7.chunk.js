(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [0],
  {
    25: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      }),
        t.d(n, "b", function () {
          return s;
        });
      var a = t(0),
        c = t(91),
        r = t(93),
        o = t(89),
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
          return Promise.all([t.e(4), t.e(6)]).then(t.bind(null, 173));
        });
    },
    71: function (e, n, t) {},
    72: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        c = t.n(a),
        r = t(37),
        o = t.n(r),
        i = t(94),
        l = t(88),
        s = t(58),
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
        h = t(25),
        d = t(35),
        f = t(47),
        m = t(52);
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
        O = t(56),
        p = t(57),
        g = t(4),
        v = [
          {
            path: "/",
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([t.e(3), t.e(7)]).then(t.bind(null, 187));
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
            .e(8)
            .then(t.bind(null, 183))
            .then(function (n) {
              var t = n.getCLS,
                a = n.getFID,
                c = n.getFCP,
                r = n.getLCP,
                o = n.getTTFB;
              t(e), a(e), c(e), r(e), o(e);
            });
      };
      t(71);
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
  [[72, 1, 2]],
]);
//# sourceMappingURL=main.f4e0afe7.chunk.js.map
