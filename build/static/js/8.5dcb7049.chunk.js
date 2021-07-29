(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [8],
  {
    128: function (e, t, c) {
      "use strict";
      c.d(t, "a", function () {
        return a;
      });
      var a = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Rp",
          c = e.toString().split("").reverse().join(""),
          a = c.match(/\d{1,3}/g);
        return ""
          .concat(t, ". ")
          .concat(a.join(".").split("").reverse().join(""));
      };
    },
    135: function (e, t, c) {
      "use strict";
      var a = c(105),
        i = Object(a.a)(function (e) {
          return {
            listmodalimage: {
              marginRight: 12,
              "& img": { width: 50, height: 50 },
            },
            listmodaltext: { color: e.blackcolor },
          };
        });
      t.a = i;
    },
    239: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(187),
        i = c(229),
        n = c(240),
        r = c(241),
        s = c(242),
        l = c(243),
        o = c(195),
        j = c(224),
        d = c(188),
        b = c(146),
        h = c(51),
        u = c(128),
        m = c(54),
        O = c(135),
        p = c(4);
      t.default = function (e) {
        var t = Object(O.a)(),
          c = Object(h.b)(),
          x = e.t,
          f = e.handleCloseModal,
          g = e.items,
          v = e.history,
          y = e.total;
        return Object(p.jsxs)(p.Fragment, {
          children: [
            Object(p.jsxs)(a.a, {
              children: [
                Object(p.jsx)("p", {
                  children: x("search_product:dialogTotalSummaryInfo"),
                }),
                Object(p.jsx)(i.a, {
                  children: g.map(function (e, c) {
                    return Object(p.jsxs)(p.Fragment, {
                      children: [
                        Object(p.jsxs)(
                          n.a,
                          {
                            children: [
                              Object(p.jsx)(r.a, {
                                className: t.listModalImage,
                                children: Object(p.jsx)("img", {
                                  src: e.image,
                                  alt: e.name,
                                }),
                              }),
                              Object(p.jsx)(s.a, {
                                className: t.listModalText,
                                primary: e.name,
                                secondary: Object(u.a)(e.price, e.currency),
                              }),
                            ],
                          },
                          c
                        ),
                        Object(p.jsx)(l.a, {}),
                      ],
                    });
                  }),
                }),
                Object(p.jsxs)(o.a, {
                  display: "flex",
                  justifyContent: "space-between",
                  children: [
                    Object(p.jsx)("div", {
                      children: Object(p.jsx)(j.a, {
                        variant: "subtitle1",
                        color: "disabled",
                        children: x("search_product:dialogTotalBuy"),
                      }),
                    }),
                    Object(p.jsx)("div", {
                      children: Object(p.jsx)(j.a, {
                        variant: "subtitle1",
                        children: Object(u.a)(y),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            Object(p.jsxs)(d.a, {
              children: [
                Object(p.jsx)(b.a, {
                  onClick: function () {
                    c(Object(m.a)()), f();
                  },
                  color: "primary",
                  children: x("common:cancel"),
                }),
                Object(p.jsx)(b.a, {
                  onClick: function () {
                    return v.push("/identitas");
                  },
                  color: "primary",
                  children: x("common:pay"),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8.5dcb7049.chunk.js.map
