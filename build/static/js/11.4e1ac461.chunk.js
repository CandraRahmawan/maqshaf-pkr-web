(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [11],
  {
    135: function (t, e, n) {
      "use strict";
      var c = n(105),
        a = Object(c.a)(function (t) {
          return {
            listmodalimage: {
              marginRight: 12,
              "& img": { width: 50, height: 50 },
            },
            listmodaltext: { color: t.blackcolor },
          };
        });
      e.a = a;
    },
    255: function (t, e, n) {
      "use strict";
      n.r(e);
      var c = n(127),
        a = n(0),
        r = n(187),
        i = n(188),
        o = n(146),
        s = n(189),
        l = n.n(s),
        d = n(51),
        j = n(54),
        u = n(249),
        b = n(148),
        h = function (t) {
          var e = Object(u.a)(["getUserByQrCode", t], function () {
            return Object(b.a)(
              "/user/saldo",
              "GET",
              { nis: t },
              { enabled: !!t }
            );
          });
          return { user: e.data, isLoading: e.isLoading };
        },
        O = n(135),
        f = n(4);
      e.default = function (t) {
        Object(O.a)();
        var e = Object(d.b)(),
          n = t.t,
          s = t.handleCloseModal,
          u = t.history,
          b = Object(a.useState)(),
          m = Object(c.a)(b, 2),
          p = m[0],
          g = m[1],
          x = h(p),
          y = x.user,
          k = x.isLoading;
        return Object(f.jsxs)(f.Fragment, {
          children: [
            Object(f.jsxs)(r.a, {
              children: [
                Object(f.jsx)(l.a, {
                  delay: 300,
                  onError: function (t) {
                    console.error(t);
                  },
                  onScan: function (t) {
                    t && g(t);
                  },
                  style: { width: "100%" },
                }),
                Object(f.jsx)("p", { children: "code: ".concat(p || "") }),
                Object(f.jsx)("p", {
                  children: k ? "loading data" : JSON.stringify(y || {}),
                }),
              ],
            }),
            Object(f.jsxs)(i.a, {
              children: [
                Object(f.jsx)(o.a, {
                  onClick: function () {
                    e(Object(j.a)()), s();
                  },
                  color: "primary",
                  children: n("common:cancel"),
                }),
                Object(f.jsx)(o.a, {
                  onClick: function () {
                    return u.push("/identitas");
                  },
                  color: "primary",
                  children: n("common:pay"),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=11.4e1ac461.chunk.js.map
