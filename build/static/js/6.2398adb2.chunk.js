(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    173: function (t, a, e) {
      "use strict";
      e.r(a);
      var c = e(41),
        r = e(89),
        i = e(174),
        n = e(175),
        o = e(176),
        s = e(177),
        h = e(122),
        b = e(178),
        d = e(179),
        j = e(2),
        l = Object(r.a)(function (t) {
          var a;
          return {
            root:
              ((a = { borderRadius: 10 }),
              Object(c.a)(a, t.breakpoints.down("xs"), { width: 300 }),
              Object(c.a)(
                a,
                "& .MuiTypography-h5",
                Object(c.a)(
                  { width: 200, height: 60, fontSize: 20 },
                  t.breakpoints.down("xs"),
                  { width: "auto", height: "auto" }
                )
              ),
              Object(c.a)(a, "& .MuiTypography-h6", { fontWeight: 400 }),
              a),
            media: { height: 140, backgroundSize: "contain", margin: 16 },
            content_background: { backgroundColor: "#f5f5f5" },
          };
        });
      a.default = function (t) {
        var a = t.image,
          e = t.title,
          c = t.price,
          r = l();
        return Object(j.jsxs)(
          i.a,
          {
            className: r.root,
            children: [
              Object(j.jsx)(n.a, {
                className: r.content_background,
                children: Object(j.jsx)(o.a, {
                  className: r.media,
                  image: a,
                  title: e,
                }),
              }),
              Object(j.jsxs)(s.a, {
                children: [
                  Object(j.jsx)(h.a, {
                    color: "textSecondary",
                    variant: "p",
                    children: "minuman",
                  }),
                  Object(j.jsx)(h.a, {
                    gutterBottom: !0,
                    variant: "h5",
                    children: e,
                  }),
                  Object(j.jsx)(h.a, {
                    color: "textSecondary",
                    variant: "h6",
                    children: "Rp. ".concat(c),
                  }),
                ],
              }),
              Object(j.jsx)(b.a, {
                children: Object(j.jsx)(d.a, {
                  size: "small",
                  color: "primary",
                  children: "Beli",
                }),
              }),
            ],
          },
          e
        );
      };
    },
  },
]);
//# sourceMappingURL=6.2398adb2.chunk.js.map
