(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [5],
  {
    185: function (r, e, t) {
      "use strict";
      t.r(e);
      var o = t(41),
        p = t(91),
        n = t(180),
        a = t(21),
        i = t(1),
        s = (t(11), t(22));
      function c(r, e) {
        var t = {};
        return (
          Object.keys(r).forEach(function (o) {
            -1 === e.indexOf(o) && (t[o] = r[o]);
          }),
          t
        );
      }
      function l(r) {
        var e = function (e) {
          var t = r(e);
          return e.css
            ? Object(i.a)(
                {},
                Object(s.a)(t, r(Object(i.a)({ theme: e.theme }, e.css))),
                c(e.css, [r.filterProps])
              )
            : e.sx
            ? Object(i.a)(
                {},
                Object(s.a)(t, r(Object(i.a)({ theme: e.theme }, e.sx))),
                c(e.sx, [r.filterProps])
              )
            : t;
        };
        return (
          (e.propTypes = {}),
          (e.filterProps = ["css", "sx"].concat(Object(a.a)(r.filterProps))),
          e
        );
      }
      var f = l;
      var m = function () {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          var o = function (r) {
            return e.reduce(function (e, t) {
              var o = t(r);
              return o ? Object(s.a)(e, o) : e;
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
        u = t(16),
        d = t(44);
      function h(r, e) {
        return e && "string" === typeof e
          ? e.split(".").reduce(function (r, e) {
              return r && r[e] ? r[e] : null;
            }, r)
          : null;
      }
      var b = function (r) {
        var e = r.prop,
          t = r.cssProperty,
          o = void 0 === t ? r.prop : t,
          p = r.themeKey,
          n = r.transform,
          a = function (r) {
            if (null == r[e]) return null;
            var t = r[e],
              a = h(r.theme, p) || {};
            return Object(d.a)(r, t, function (r) {
              var e;
              return (
                "function" === typeof a
                  ? (e = a(r))
                  : Array.isArray(a)
                  ? (e = a[r] || r)
                  : ((e = h(a, r) || r), n && (e = n(e))),
                !1 === o ? e : Object(u.a)({}, o, e)
              );
            });
          };
        return (a.propTypes = {}), (a.filterProps = [e]), a;
      };
      function y(r) {
        return "number" !== typeof r ? r : "".concat(r, "px solid");
      }
      var g = m(
          b({ prop: "border", themeKey: "borders", transform: y }),
          b({ prop: "borderTop", themeKey: "borders", transform: y }),
          b({ prop: "borderRight", themeKey: "borders", transform: y }),
          b({ prop: "borderBottom", themeKey: "borders", transform: y }),
          b({ prop: "borderLeft", themeKey: "borders", transform: y }),
          b({ prop: "borderColor", themeKey: "palette" }),
          b({ prop: "borderRadius", themeKey: "shape" })
        ),
        j = m(
          b({
            prop: "displayPrint",
            cssProperty: !1,
            transform: function (r) {
              return { "@media print": { display: r } };
            },
          }),
          b({ prop: "display" }),
          b({ prop: "overflow" }),
          b({ prop: "textOverflow" }),
          b({ prop: "visibility" }),
          b({ prop: "whiteSpace" })
        ),
        x = m(
          b({ prop: "flexBasis" }),
          b({ prop: "flexDirection" }),
          b({ prop: "flexWrap" }),
          b({ prop: "justifyContent" }),
          b({ prop: "alignItems" }),
          b({ prop: "alignContent" }),
          b({ prop: "order" }),
          b({ prop: "flex" }),
          b({ prop: "flexGrow" }),
          b({ prop: "flexShrink" }),
          b({ prop: "alignSelf" }),
          b({ prop: "justifyItems" }),
          b({ prop: "justifySelf" })
        ),
        O = m(
          b({ prop: "gridGap" }),
          b({ prop: "gridColumnGap" }),
          b({ prop: "gridRowGap" }),
          b({ prop: "gridColumn" }),
          b({ prop: "gridRow" }),
          b({ prop: "gridAutoFlow" }),
          b({ prop: "gridAutoColumns" }),
          b({ prop: "gridAutoRows" }),
          b({ prop: "gridTemplateColumns" }),
          b({ prop: "gridTemplateRows" }),
          b({ prop: "gridTemplateAreas" }),
          b({ prop: "gridArea" })
        ),
        v = m(
          b({ prop: "position" }),
          b({ prop: "zIndex", themeKey: "zIndex" }),
          b({ prop: "top" }),
          b({ prop: "right" }),
          b({ prop: "bottom" }),
          b({ prop: "left" })
        ),
        w = m(
          b({ prop: "color", themeKey: "palette" }),
          b({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
          })
        ),
        P = b({ prop: "boxShadow", themeKey: "shadows" });
      function K(r) {
        return r <= 1 ? "".concat(100 * r, "%") : r;
      }
      var k = b({ prop: "width", transform: K }),
        T = b({ prop: "maxWidth", transform: K }),
        C = b({ prop: "minWidth", transform: K }),
        N = b({ prop: "height", transform: K }),
        S = b({ prop: "maxHeight", transform: K }),
        A = b({ prop: "minHeight", transform: K }),
        z =
          (b({ prop: "size", cssProperty: "width", transform: K }),
          b({ prop: "size", cssProperty: "height", transform: K }),
          m(k, T, C, N, S, A, b({ prop: "boxSizing" }))),
        R = t(95),
        B = m(
          b({ prop: "fontFamily", themeKey: "typography" }),
          b({ prop: "fontSize", themeKey: "typography" }),
          b({ prop: "fontStyle", themeKey: "typography" }),
          b({ prop: "fontWeight", themeKey: "typography" }),
          b({ prop: "letterSpacing" }),
          b({ prop: "lineHeight" }),
          b({ prop: "textAlign" })
        ),
        E = t(3),
        G = t(0),
        I = t.n(G),
        W = t(18),
        H = t(24),
        q = t.n(H),
        F = t(75);
      function J(r, e) {
        var t = {};
        return (
          Object.keys(r).forEach(function (o) {
            -1 === e.indexOf(o) && (t[o] = r[o]);
          }),
          t
        );
      }
      var D = t(23),
        L = function (r) {
          var e = (function (r) {
            return function (e) {
              var t,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                p = o.name,
                n = Object(E.a)(o, ["name"]),
                a = p,
                s =
                  "function" === typeof e
                    ? function (r) {
                        return {
                          root: function (t) {
                            return e(Object(i.a)({ theme: r }, t));
                          },
                        };
                      }
                    : { root: e },
                c = Object(F.a)(
                  s,
                  Object(i.a)(
                    {
                      Component: r,
                      name: p || r.displayName,
                      classNamePrefix: a,
                    },
                    n
                  )
                );
              e.filterProps && ((t = e.filterProps), delete e.filterProps),
                e.propTypes && (e.propTypes, delete e.propTypes);
              var l = I.a.forwardRef(function (e, o) {
                var p = e.children,
                  n = e.className,
                  a = e.clone,
                  s = e.component,
                  l = Object(E.a)(e, [
                    "children",
                    "className",
                    "clone",
                    "component",
                  ]),
                  f = c(e),
                  m = Object(W.a)(f.root, n),
                  u = l;
                if ((t && (u = J(u, t)), a))
                  return I.a.cloneElement(
                    p,
                    Object(i.a)(
                      { className: Object(W.a)(p.props.className, m) },
                      u
                    )
                  );
                if ("function" === typeof p)
                  return p(Object(i.a)({ className: m }, u));
                var d = s || r;
                return I.a.createElement(
                  d,
                  Object(i.a)({ ref: o, className: m }, u),
                  p
                );
              });
              return q()(l, r), l;
            };
          })(r);
          return function (r, t) {
            return e(r, Object(i.a)({ defaultTheme: D.a }, t));
          };
        },
        M = f(m(g, j, x, O, v, w, P, z, R.b, B)),
        Q = L("div")(M, { name: "MuiBox" }),
        U = t(89),
        V = t(2),
        X = Object(U.a)(function (r) {
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
              ((e = { margin: "12px 0 8px 0", textAlign: "center" }),
              Object(o.a)(e, r.breakpoints.down("xs"), { margin: "8px 0" }),
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
          t = X();
        return Object(V.jsx)(p.a, {
          container: !0,
          children: Object(V.jsxs)(p.a, {
            className: t.root,
            item: !0,
            xs: 12,
            children: [
              Object(V.jsx)(n.a, {
                className: t.container,
                children: Object(V.jsxs)(Q, {
                  display: "flex",
                  justifyContent: "center",
                  children: [
                    Object(V.jsx)("div", {
                      children: Object(V.jsx)("img", {
                        src: "/assets/logo192.png",
                      }),
                    }),
                    Object(V.jsx)(Q, {
                      alignSelf: "center",
                      children: Object(V.jsx)("h2", {
                        children: e("glossary:companyName"),
                      }),
                    }),
                  ],
                }),
              }),
              Object(V.jsx)("div", {
                className: t.bottom,
                children: Object(V.jsx)(n.a, {
                  children: Object(V.jsx)("h4", {
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
//# sourceMappingURL=5.24d85d53.chunk.js.map
