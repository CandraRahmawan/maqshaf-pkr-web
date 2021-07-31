(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [13],
  {
    251: function (r, e, t) {
      "use strict";
      var o = t(33),
        p = t(1),
        n = (t(12), t(32));
      function a(r, e) {
        var t = {};
        return (
          Object.keys(r).forEach(function (o) {
            -1 === e.indexOf(o) && (t[o] = r[o]);
          }),
          t
        );
      }
      function i(r) {
        var e = function (e) {
          var t = r(e);
          return e.css
            ? Object(p.a)(
                {},
                Object(n.a)(t, r(Object(p.a)({ theme: e.theme }, e.css))),
                a(e.css, [r.filterProps])
              )
            : e.sx
            ? Object(p.a)(
                {},
                Object(n.a)(t, r(Object(p.a)({ theme: e.theme }, e.sx))),
                a(e.sx, [r.filterProps])
              )
            : t;
        };
        return (
          (e.propTypes = {}),
          (e.filterProps = ["css", "sx"].concat(Object(o.a)(r.filterProps))),
          e
        );
      }
      var s = i;
      var c = function () {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          var o = function (r) {
            return e.reduce(function (e, t) {
              var o = t(r);
              return o ? Object(n.a)(e, o) : e;
            }, {});
          };
          return (
            (o.propTypes = {}),
            (o.filterProps = e.reduce(function (r, e) {
              return r.concat(e.filterProps);
            }, [])),
            o
          );
        },
        l = t(19),
        f = t(56);
      function m(r, e) {
        return e && "string" === typeof e
          ? e.split(".").reduce(function (r, e) {
              return r && r[e] ? r[e] : null;
            }, r)
          : null;
      }
      var u = function (r) {
        var e = r.prop,
          t = r.cssProperty,
          o = void 0 === t ? r.prop : t,
          p = r.themeKey,
          n = r.transform,
          a = function (r) {
            if (null == r[e]) return null;
            var t = r[e],
              a = m(r.theme, p) || {};
            return Object(f.a)(r, t, function (r) {
              var e;
              return (
                "function" === typeof a
                  ? (e = a(r))
                  : Array.isArray(a)
                  ? (e = a[r] || r)
                  : ((e = m(a, r) || r), n && (e = n(e))),
                !1 === o ? e : Object(l.a)({}, o, e)
              );
            });
          };
        return (a.propTypes = {}), (a.filterProps = [e]), a;
      };
      function d(r) {
        return "number" !== typeof r ? r : "".concat(r, "px solid");
      }
      var h = c(
          u({ prop: "border", themeKey: "borders", transform: d }),
          u({ prop: "borderTop", themeKey: "borders", transform: d }),
          u({ prop: "borderRight", themeKey: "borders", transform: d }),
          u({ prop: "borderBottom", themeKey: "borders", transform: d }),
          u({ prop: "borderLeft", themeKey: "borders", transform: d }),
          u({ prop: "borderColor", themeKey: "palette" }),
          u({ prop: "borderRadius", themeKey: "shape" })
        ),
        b = c(
          u({
            prop: "displayPrint",
            cssProperty: !1,
            transform: function (r) {
              return { "@media print": { display: r } };
            },
          }),
          u({ prop: "display" }),
          u({ prop: "overflow" }),
          u({ prop: "textOverflow" }),
          u({ prop: "visibility" }),
          u({ prop: "whiteSpace" })
        ),
        y = c(
          u({ prop: "flexBasis" }),
          u({ prop: "flexDirection" }),
          u({ prop: "flexWrap" }),
          u({ prop: "justifyContent" }),
          u({ prop: "alignItems" }),
          u({ prop: "alignContent" }),
          u({ prop: "order" }),
          u({ prop: "flex" }),
          u({ prop: "flexGrow" }),
          u({ prop: "flexShrink" }),
          u({ prop: "alignSelf" }),
          u({ prop: "justifyItems" }),
          u({ prop: "justifySelf" })
        ),
        g = c(
          u({ prop: "gridGap" }),
          u({ prop: "gridColumnGap" }),
          u({ prop: "gridRowGap" }),
          u({ prop: "gridColumn" }),
          u({ prop: "gridRow" }),
          u({ prop: "gridAutoFlow" }),
          u({ prop: "gridAutoColumns" }),
          u({ prop: "gridAutoRows" }),
          u({ prop: "gridTemplateColumns" }),
          u({ prop: "gridTemplateRows" }),
          u({ prop: "gridTemplateAreas" }),
          u({ prop: "gridArea" })
        ),
        j = c(
          u({ prop: "position" }),
          u({ prop: "zIndex", themeKey: "zIndex" }),
          u({ prop: "top" }),
          u({ prop: "right" }),
          u({ prop: "bottom" }),
          u({ prop: "left" })
        ),
        x = c(
          u({ prop: "color", themeKey: "palette" }),
          u({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
          })
        ),
        O = u({ prop: "boxShadow", themeKey: "shadows" });
      function v(r) {
        return r <= 1 ? "".concat(100 * r, "%") : r;
      }
      var w = u({ prop: "width", transform: v }),
        P = u({ prop: "maxWidth", transform: v }),
        K = u({ prop: "minWidth", transform: v }),
        k = u({ prop: "height", transform: v }),
        T = u({ prop: "maxHeight", transform: v }),
        C = u({ prop: "minHeight", transform: v }),
        N =
          (u({ prop: "size", cssProperty: "width", transform: v }),
          u({ prop: "size", cssProperty: "height", transform: v }),
          c(w, P, K, k, T, C, u({ prop: "boxSizing" }))),
        S = t(113),
        A = c(
          u({ prop: "fontFamily", themeKey: "typography" }),
          u({ prop: "fontSize", themeKey: "typography" }),
          u({ prop: "fontStyle", themeKey: "typography" }),
          u({ prop: "fontWeight", themeKey: "typography" }),
          u({ prop: "letterSpacing" }),
          u({ prop: "lineHeight" }),
          u({ prop: "textAlign" })
        ),
        z = t(5),
        R = t(0),
        B = t.n(R),
        E = t(27),
        G = t(23),
        I = t.n(G),
        W = t(90);
      function H(r, e) {
        var t = {};
        return (
          Object.keys(r).forEach(function (o) {
            -1 === e.indexOf(o) && (t[o] = r[o]);
          }),
          t
        );
      }
      var q = t(34),
        F = function (r) {
          var e = (function (r) {
            return function (e) {
              var t,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = o.name,
                a = Object(z.a)(o, ["name"]),
                i = n,
                s =
                  "function" === typeof e
                    ? function (r) {
                        return {
                          root: function (t) {
                            return e(Object(p.a)({ theme: r }, t));
                          },
                        };
                      }
                    : { root: e },
                c = Object(W.a)(
                  s,
                  Object(p.a)(
                    {
                      Component: r,
                      name: n || r.displayName,
                      classNamePrefix: i,
                    },
                    a
                  )
                );
              e.filterProps && ((t = e.filterProps), delete e.filterProps),
                e.propTypes && (e.propTypes, delete e.propTypes);
              var l = B.a.forwardRef(function (e, o) {
                var n = e.children,
                  a = e.className,
                  i = e.clone,
                  s = e.component,
                  l = Object(z.a)(e, [
                    "children",
                    "className",
                    "clone",
                    "component",
                  ]),
                  f = c(e),
                  m = Object(E.a)(f.root, a),
                  u = l;
                if ((t && (u = H(u, t)), i))
                  return B.a.cloneElement(
                    n,
                    Object(p.a)(
                      { className: Object(E.a)(n.props.className, m) },
                      u
                    )
                  );
                if ("function" === typeof n)
                  return n(Object(p.a)({ className: m }, u));
                var d = s || r;
                return B.a.createElement(
                  d,
                  Object(p.a)({ ref: o, className: m }, u),
                  n
                );
              });
              return I()(l, r), l;
            };
          })(r);
          return function (r, t) {
            return e(r, Object(p.a)({ defaultTheme: q.a }, t));
          };
        },
        J = s(c(h, b, y, g, j, x, O, N, S.b, A)),
        D = F("div")(J, { name: "MuiBox" });
      e.a = D;
    },
    293: function (r, e, t) {
      "use strict";
      t.r(e);
      var o = t(50),
        p = t(108),
        n = t(283),
        a = t(251),
        i = t(106),
        s = t(4),
        c = Object(i.a)(function (r) {
          var e;
          return {
            root: {
              backgroundColor: "#e3f2fd",
              borderTop: "2px solid #1a237e",
              marginTop: 30,
              textAlign: "center",
              position: "relative",
            },
            container:
              ((e = { margin: "12px auto 8px auto", textAlign: "center" }),
              Object(o.a)(e, r.breakpoints.down("xs"), { margin: "8px auto" }),
              Object(o.a)(
                e,
                "& img",
                Object(o.a)(
                  { marginRight: 15, width: 50, height: 50 },
                  r.breakpoints.down("xs"),
                  { height: 35, width: 35 }
                )
              ),
              Object(o.a)(
                e,
                "& h2",
                Object(o.a)({ margin: 0 }, r.breakpoints.down("xs"), {
                  fontSize: 18,
                })
              ),
              e),
            bottom: {
              backgroundColor: "#1a237e",
              "& h4": Object(o.a)(
                {
                  marginTop: 0,
                  marginBottom: 0,
                  padding: "16px 0",
                  color: r.color.white,
                },
                r.breakpoints.down("xs"),
                { fontSize: 12, padding: "12px 0" }
              ),
            },
          };
        });
      e.default = function (r) {
        var e = r.t,
          t = c();
        return Object(s.jsx)(p.a, {
          container: !0,
          children: Object(s.jsxs)(p.a, {
            className: t.root,
            item: !0,
            xs: 12,
            children: [
              Object(s.jsx)(n.a, {
                className: t.container,
                children: Object(s.jsxs)(a.a, {
                  display: "flex",
                  justifyContent: "center",
                  children: [
                    Object(s.jsx)("div", {
                      children: Object(s.jsx)("img", {
                        src: "/assets/logo192.png",
                      }),
                    }),
                    Object(s.jsx)(a.a, {
                      alignSelf: "center",
                      children: Object(s.jsx)("h2", {
                        children: e("glossary:companyName"),
                      }),
                    }),
                  ],
                }),
              }),
              Object(s.jsx)("div", {
                className: t.bottom,
                children: Object(s.jsx)(n.a, {
                  children: Object(s.jsx)("h4", {
                    children: e("glossary:copyright"),
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
//# sourceMappingURL=13.86b68811.chunk.js.map
