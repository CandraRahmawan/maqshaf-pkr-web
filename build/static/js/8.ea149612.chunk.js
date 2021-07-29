(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [8],
  {
    231: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(54),
        i = a(107),
        o = a(215),
        r = a(233),
        c = a(105),
        s = a(4),
        b = Object(c.a)(function (e) {
          var t;
          return {
            root: {
              backgroundColor: "#e3f2fd",
              borderTop: "2px solid #1a237e",
              marginTop: 30,
              textAlign: "center",
              position: "relative",
            },
            container:
              ((t = { margin: "12px auto 8px auto", textAlign: "center" }),
              Object(n.a)(t, e.breakpoints.down("xs"), { margin: "8px auto" }),
              Object(n.a)(
                t,
                "& img",
                Object(n.a)(
                  { marginRight: 15, width: 50, height: 50 },
                  e.breakpoints.down("xs"),
                  { height: 35, width: 35 }
                )
              ),
              Object(n.a)(
                t,
                "& h2",
                Object(n.a)({ margin: 0 }, e.breakpoints.down("xs"), {
                  fontSize: 18,
                })
              ),
              t),
            bottom: {
              backgroundColor: "#1a237e",
              "& h4": Object(n.a)(
                {
                  marginTop: 0,
                  marginBottom: 0,
                  padding: "16px 0",
                  color: e.color.white,
                },
                e.breakpoints.down("xs"),
                { fontSize: 12, padding: "12px 0" }
              ),
            },
          };
        });
      t.default = function (e) {
        var t = e.t,
          a = b();
        return Object(s.jsx)(i.a, {
          container: !0,
          children: Object(s.jsxs)(i.a, {
            className: a.root,
            item: !0,
            xs: 12,
            children: [
              Object(s.jsx)(o.a, {
                className: a.container,
                children: Object(s.jsxs)(r.a, {
                  display: "flex",
                  justifyContent: "center",
                  children: [
                    Object(s.jsx)("div", {
                      children: Object(s.jsx)("img", {
                        src: "/assets/logo192.png",
                      }),
                    }),
                    Object(s.jsx)(r.a, {
                      alignSelf: "center",
                      children: Object(s.jsx)("h2", {
                        children: t("glossary:companyName"),
                      }),
                    }),
                  ],
                }),
              }),
              Object(s.jsx)("div", {
                className: a.bottom,
                children: Object(s.jsx)(o.a, {
                  children: Object(s.jsx)("h4", {
                    children: t("glossary:copyright"),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=8.ea149612.chunk.js.map
