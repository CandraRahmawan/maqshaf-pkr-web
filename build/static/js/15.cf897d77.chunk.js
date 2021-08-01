(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [15],
  {
    118: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var a = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          n = t.toString().split("").reverse().join(""),
          a = n.match(/\d{1,3}/g);
        return ""
          .concat(e, ". ")
          .concat(a.join(".").split("").reverse().join(""));
      };
    },
    328: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(270),
        c = n(121),
        r = n(289),
        o = n(290),
        i = n(292),
        s = n(293),
        d = n(294),
        b = n(184),
        j = n(295),
        u = n(185),
        h = n(326),
        l = n(322),
        p = n(186),
        O = n.n(p),
        f = n(118),
        g = n(51),
        x = n(108),
        m = Object(x.a)(function (t) {
          var e;
          return {
            root:
              ((e = { borderRadius: 10 }),
              Object(g.a)(e, t.breakpoints.down("xs"), { minWidth: 150 }),
              Object(g.a)(
                e,
                "& .MuiCardContent-root",
                Object(g.a)({}, t.breakpoints.down("xs"), { paddingBottom: 0 })
              ),
              Object(g.a)(
                e,
                "& .MuiTypography-h5",
                Object(g.a)(
                  { width: 200, height: 50, fontSize: 20 },
                  t.breakpoints.down("xs"),
                  { width: "auto", height: 40, fontSize: 16 }
                )
              ),
              Object(g.a)(
                e,
                "& .MuiTypography-h6",
                Object(g.a)({ fontWeight: 400 }, t.breakpoints.down("xs"), {
                  fontSize: 16,
                })
              ),
              Object(g.a)(
                e,
                "& span.MuiTypography-colorTextSecondary",
                Object(g.a)({}, t.breakpoints.down("xs"), { fontSize: 12 })
              ),
              Object(g.a)(e, "& button", { width: "100%" }),
              e),
            media: { height: 140, backgroundSize: "contain", margin: 16 },
            content_background: { backgroundColor: "#f5f5f5" },
          };
        }),
        k = n(0),
        y = n(4);
      e.default = function (t) {
        var e = t.image,
          n = t.title,
          p = t.price,
          g = t.currency,
          x = t.category,
          v = t.t,
          w = t.openModal,
          C = t.addCartAction,
          S = t.selectedItems,
          z = Object(k.useState)(!1),
          M = Object(c.a)(z, 2),
          T = M[0],
          q = M[1],
          _ = m(),
          N = Object(r.a)(function (t) {
            return t.breakpoints.down("xs");
          }),
          A = function () {
            return q(!0);
          };
        return Object(y.jsxs)(
          o.a,
          {
            className: _.root,
            children: [
              Object(y.jsx)(i.a, {
                className: _.content_background,
                onClick: function () {
                  w(),
                    C([{ qty: 1, price: p, currency: g, name: n, image: e }]);
                },
                children: Object(y.jsx)(s.a, {
                  className: _.media,
                  image: e,
                  title: n,
                }),
              }),
              Object(y.jsxs)(d.a, {
                children: [
                  Object(y.jsx)(b.a, {
                    color: "textSecondary",
                    variant: "p",
                    children: x,
                  }),
                  Object(y.jsx)(b.a, {
                    gutterBottom: !0,
                    variant: "h5",
                    children: n,
                  }),
                  Object(y.jsx)(b.a, {
                    color: "textSecondary",
                    variant: "h6",
                    children: Object(f.a)(p, g),
                  }),
                ],
              }),
              Object(y.jsx)(j.a, {
                children: Object(y.jsx)(u.a, {
                  size: "small",
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return C(
                      [].concat(Object(a.a)(S), [
                        { image: e, qty: 1, currency: g, price: p, name: n },
                      ])
                    );
                  },
                  children: N
                    ? Object(y.jsx)(O.a, { onClick: A })
                    : Object(y.jsxs)("span", {
                        onClick: A,
                        children: [v("search_product:addToCart"), "}"],
                      }),
                }),
              }),
              Object(y.jsx)(h.a, {
                open: T,
                autoHideDuration: 2e3,
                onClose: function () {
                  return q(!1);
                },
                children: Object(y.jsx)(l.a, {
                  severity: "success",
                  variant: "filled",
                  children: v("search_product:alert.successAddCart"),
                }),
              }),
            ],
          },
          n
        );
      };
    },
  },
]);
//# sourceMappingURL=15.cf897d77.chunk.js.map