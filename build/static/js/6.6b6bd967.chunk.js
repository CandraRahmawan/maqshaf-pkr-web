(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [6],
  {
    173: function (a, e, t) {
      "use strict";
      t.r(e);
      var c = t(41),
        r = t(89),
        i = t(174),
        n = t(175),
        o = t(176),
        s = t(177),
        h = t(122),
        b = t(178),
        d = t(179),
        j = t(2),
        l = Object(r.a)(function (a) {
          var e;
          return {
            root:
              ((e = { borderRadius: 10 }),
              Object(c.a)(e, a.breakpoints.down("xs"), { width: 300 }),
              Object(c.a)(e, "& .MuiTypography-h5", {
                width: 200,
                height: 60,
                fontSize: 20,
              }),
              Object(c.a)(e, "& .MuiTypography-h6", { fontWeight: 400 }),
              e),
            media: { height: 140, backgroundSize: "contain", margin: 16 },
            contentbackground: { backgroundColor: "#f5f5f5" },
          };
        });
      e.default = function (a) {
        var e = a.image,
          t = a.title,
          c = a.price,
          r = l();
        return Object(j.jsxs)(
          i.a,
          {
            className: r.root,
            children: [
              Object(j.jsx)(n.a, {
                className: r.contentBackground,
                children: Object(j.jsx)(o.a, {
                  className: r.media,
                  image: e,
                  title: t,
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
                    children: t,
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
          t
        );
      };
    },
  },
]);
//# sourceMappingURL=6.6b6bd967.chunk.js.map
