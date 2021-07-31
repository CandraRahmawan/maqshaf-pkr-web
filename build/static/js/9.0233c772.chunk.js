(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [9],
  {
    116: function (e, t, c) {
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
    126: function (e, t, c) {
      "use strict";
      var a = c(106),
        r = Object(a.a)(function (e) {
          return {
            list_modal_image: {
              marginRight: 12,
              "& img": { width: 50, height: 50 },
            },
            list_modal_text: { color: e.color.black },
            button_progress: {
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12,
              marginLeft: -12,
            },
            input_pin: { width: "100%" },
          };
        });
      t.a = r;
    },
    249: function (e, t, c) {
      "use strict";
      var a = c(0),
        r = c(128);
      t.a = Object(r.a)(
        a.createElement("path", {
          d: "M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z",
        }),
        "AccountBox"
      );
    },
    250: function (e, t, c) {
      "use strict";
      var a = c(0),
        r = c(128);
      t.a = Object(r.a)(
        a.createElement("path", {
          d: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
        }),
        "AccountBalanceWallet"
      );
    },
    254: function (e, t, c) {
      "use strict";
      var a = c(1),
        r = c(5),
        n = c(0),
        s = (c(12), c(27)),
        o = c(29),
        i = c(128),
        l = Object(i.a)(
          n.createElement("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
          }),
          "Person"
        );
      var u = n.forwardRef(function (e, t) {
        var c = e.alt,
          o = e.children,
          i = e.classes,
          u = e.className,
          d = e.component,
          j = void 0 === d ? "div" : d,
          m = e.imgProps,
          h = e.sizes,
          b = e.src,
          p = e.srcSet,
          f = e.variant,
          O = void 0 === f ? "circular" : f,
          v = Object(r.a)(e, [
            "alt",
            "children",
            "classes",
            "className",
            "component",
            "imgProps",
            "sizes",
            "src",
            "srcSet",
            "variant",
          ]),
          g = null,
          x = (function (e) {
            var t = e.src,
              c = e.srcSet,
              a = n.useState(!1),
              r = a[0],
              s = a[1];
            return (
              n.useEffect(
                function () {
                  if (t || c) {
                    s(!1);
                    var e = !0,
                      a = new Image();
                    return (
                      (a.src = t),
                      (a.srcSet = c),
                      (a.onload = function () {
                        e && s("loaded");
                      }),
                      (a.onerror = function () {
                        e && s("error");
                      }),
                      function () {
                        e = !1;
                      }
                    );
                  }
                },
                [t, c]
              ),
              r
            );
          })({ src: b, srcSet: p }),
          y = b || p,
          w = y && "error" !== x;
        return (
          (g = w
            ? n.createElement(
                "img",
                Object(a.a)(
                  { alt: c, src: b, srcSet: p, sizes: h, className: i.img },
                  m
                )
              )
            : null != o
            ? o
            : y && c
            ? c[0]
            : n.createElement(l, { className: i.fallback })),
          n.createElement(
            j,
            Object(a.a)(
              {
                className: Object(s.a)(
                  i.root,
                  i.system,
                  i[O],
                  u,
                  !w && i.colorDefault
                ),
                ref: t,
              },
              v
            ),
            g
          )
        );
      });
      t.a = Object(o.a)(
        function (e) {
          return {
            root: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 40,
              height: 40,
              fontFamily: e.typography.fontFamily,
              fontSize: e.typography.pxToRem(20),
              lineHeight: 1,
              borderRadius: "50%",
              overflow: "hidden",
              userSelect: "none",
            },
            colorDefault: {
              color: e.palette.background.default,
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.grey[400]
                  : e.palette.grey[600],
            },
            circle: {},
            circular: {},
            rounded: { borderRadius: e.shape.borderRadius },
            square: { borderRadius: 0 },
            img: {
              width: "100%",
              height: "100%",
              textAlign: "center",
              objectFit: "cover",
              color: "transparent",
              textIndent: 1e4,
            },
            fallback: { width: "75%", height: "75%" },
          };
        },
        { name: "MuiAvatar" }
      )(u);
    },
    299: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(294),
        r = c(284),
        n = c(295),
        s = c(296),
        o = c(254),
        i = c(297),
        l = c(300),
        u = c(298),
        d = c(172),
        j = c(51),
        m = (c(116), c(52)),
        h = c(126),
        b = c(249),
        p = c(250),
        f = c(4);
      t.default = function (e) {
        var t = Object(h.a)(),
          c = Object(j.b)(),
          O = e.t,
          v = e.handleCloseModal,
          g = (e.items, e.history);
        e.total;
        return Object(f.jsxs)(f.Fragment, {
          children: [
            Object(f.jsxs)(a.a, {
              children: [
                Object(f.jsxs)(r.a, {
                  children: [
                    Object(f.jsxs)(
                      n.a,
                      {
                        children: [
                          Object(f.jsx)(s.a, {
                            children: Object(f.jsx)(o.a, {
                              children: Object(f.jsx)(b.a, {}),
                            }),
                          }),
                          Object(f.jsx)(i.a, {
                            primary: O("common:label.transactionCode"),
                            secondary: "123123",
                          }),
                        ],
                      },
                      "user"
                    ),
                    Object(f.jsxs)(
                      n.a,
                      {
                        children: [
                          Object(f.jsx)(s.a, {
                            children: Object(f.jsx)(o.a, {
                              children: Object(f.jsx)(p.a, {}),
                            }),
                          }),
                          Object(f.jsx)(i.a, {
                            primary: O("common:balance"),
                            secondary: "45555",
                          }),
                        ],
                      },
                      "saldo"
                    ),
                    Object(f.jsxs)(
                      n.a,
                      {
                        children: [
                          Object(f.jsx)(s.a, {
                            children: Object(f.jsx)(o.a, {
                              children: Object(f.jsx)(p.a, {}),
                            }),
                          }),
                          Object(f.jsx)(i.a, {
                            primary: O("common:label.totalBuy"),
                            secondary: "2000",
                          }),
                        ],
                      },
                      "total"
                    ),
                  ],
                }),
                Object(f.jsx)(l.a, {
                  label: O("common:label.enterPin"),
                  type: "password",
                  className: t.input_pin,
                }),
              ],
            }),
            Object(f.jsxs)(u.a, {
              children: [
                Object(f.jsx)(d.a, {
                  onClick: function () {
                    c(Object(m.a)()), v();
                  },
                  color: "primary",
                  children: O("common:cancel"),
                }),
                Object(f.jsx)(d.a, {
                  onClick: function () {
                    return g.push("/identitas");
                  },
                  color: "primary",
                  children: O("common:confirmation"),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=9.0233c772.chunk.js.map
