(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [7],
  {
    204: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(188),
        o = a(189),
        r = a(190),
        c = a(191),
        i = a(192),
        s = a(139),
        b = a(193),
        d = a(194),
        j = a(140),
        h = a.n(j),
        p = a(50),
        u = a(101),
        l = Object(u.a)(function (t) {
          var e;
          return {
            root:
              ((e = { borderRadius: 10 }),
              Object(p.a)(e, t.breakpoints.down("xs"), { width: 150 }),
              Object(p.a)(
                e,
                "& .MuiCardContent-root",
                Object(p.a)({}, t.breakpoints.down("xs"), { paddingBottom: 0 })
              ),
              Object(p.a)(
                e,
                "& .MuiTypography-h5",
                Object(p.a)(
                  { width: 200, height: 50, fontSize: 20 },
                  t.breakpoints.down("xs"),
                  { width: "auto", height: 40, fontSize: 16 }
                )
              ),
              Object(p.a)(
                e,
                "& .MuiTypography-h6",
                Object(p.a)({ fontWeight: 400 }, t.breakpoints.down("xs"), {
                  fontSize: 16,
                })
              ),
              Object(p.a)(
                e,
                "& span.MuiTypography-colorTextSecondary",
                Object(p.a)({}, t.breakpoints.down("xs"), { fontSize: 12 })
              ),
              Object(p.a)(e, "& button", { width: "100%" }),
              e),
            media: { height: 140, backgroundSize: "contain", margin: 16 },
            content_background: { backgroundColor: "#f5f5f5" },
          };
        }),
        O = a(4);
      e.default = function (t) {
        var e,
          a = t.image,
          j = t.title,
          p = t.price,
          u = t.currency,
          g = t.category,
          x = t.t,
          f = l(),
          m = Object(n.a)(function (t) {
            return t.breakpoints.down("xs");
          });
        return Object(O.jsxs)(
          o.a,
          {
            className: f.root,
            children: [
              Object(O.jsx)(r.a, {
                className: f.content_background,
                children: Object(O.jsx)(c.a, {
                  className: f.media,
                  image: a,
                  title: j,
                }),
              }),
              Object(O.jsxs)(i.a, {
                children: [
                  Object(O.jsx)(s.a, {
                    color: "textSecondary",
                    variant: "p",
                    children: g,
                  }),
                  Object(O.jsx)(s.a, {
                    gutterBottom: !0,
                    variant: "h5",
                    children: j,
                  }),
                  Object(O.jsx)(s.a, {
                    color: "textSecondary",
                    variant: "h6",
                    children: "".concat(u, ". ").concat(
                      ((e = p),
                      e
                        .toString()
                        .split("")
                        .reverse()
                        .join("")
                        .match(/\d{1,3}/g)
                        .join(".")
                        .split("")
                        .reverse()
                        .join(""))
                    ),
                  }),
                ],
              }),
              Object(O.jsx)(b.a, {
                children: Object(O.jsx)(d.a, {
                  size: "small",
                  color: "primary",
                  variant: "contained",
                  children: m
                    ? Object(O.jsx)(h.a, {})
                    : x("search_product:addToCart"),
                }),
              }),
            ],
          },
          j
        );
      };
    },
  },
]);
//# sourceMappingURL=7.2dfe1611.chunk.js.map
