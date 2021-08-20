(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [29],
  {
    203: function (r, e, t) {
      'use strict';
      var o = t(51),
        n = t(110),
        p = Object(n.a)(function (r) {
          return {
            root: { display: 'flex' },
            app_bar: {
              transition: r.transitions.create(['margin', 'width'], {
                easing: r.transitions.easing.sharp,
                duration: r.transitions.duration.leavingscreen,
              }),
            },
            app_bar_shift: {
              width: 'calc(100% - 240px)',
              marginLeft: 240,
              transition: r.transitions.create(['margin', 'width'], {
                easing: r.transitions.easing.easeout,
                duration: r.transitions.duration.enteringscreen,
              }),
            },
            hide: { display: 'none' },
            menu_button: { marginRight: r.spacing(2) },
            header_login_wrapper: {
              padding: '8px 0',
              backgroundColor: '#e3f2fd',
              borderBottom: '8px solid '.concat(r.primaryColor),
              '& img': Object(o.a)(
                { marginRight: 15, width: 50, height: 50 },
                r.breakpoints.down('xs'),
                { height: 35, width: 35 }
              ),
              '& h2': Object(o.a)({ margin: 0 }, r.breakpoints.down('xs'), { fontSize: 18 }),
            },
          };
        });
      e.a = p;
    },
    229: function (r, e, t) {
      'use strict';
      var o = t(34),
        n = t(1),
        p = (t(12), t(35));
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
            ? Object(n.a)(
                {},
                Object(p.a)(t, r(Object(n.a)({ theme: e.theme }, e.css))),
                a(e.css, [r.filterProps])
              )
            : e.sx
            ? Object(n.a)(
                {},
                Object(p.a)(t, r(Object(n.a)({ theme: e.theme }, e.sx))),
                a(e.sx, [r.filterProps])
              )
            : t;
        };
        return (
          (e.propTypes = {}), (e.filterProps = ['css', 'sx'].concat(Object(o.a)(r.filterProps))), e
        );
      }
      var s = i;
      var c = function () {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
          var o = function (r) {
            return e.reduce(function (e, t) {
              var o = t(r);
              return o ? Object(p.a)(e, o) : e;
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
        f = t(19),
        l = t(58);
      function u(r, e) {
        return e && 'string' === typeof e
          ? e.split('.').reduce(function (r, e) {
              return r && r[e] ? r[e] : null;
            }, r)
          : null;
      }
      var m = function (r) {
        var e = r.prop,
          t = r.cssProperty,
          o = void 0 === t ? r.prop : t,
          n = r.themeKey,
          p = r.transform,
          a = function (r) {
            if (null == r[e]) return null;
            var t = r[e],
              a = u(r.theme, n) || {};
            return Object(l.a)(r, t, function (r) {
              var e;
              return (
                'function' === typeof a
                  ? (e = a(r))
                  : Array.isArray(a)
                  ? (e = a[r] || r)
                  : ((e = u(a, r) || r), p && (e = p(e))),
                !1 === o ? e : Object(f.a)({}, o, e)
              );
            });
          };
        return (a.propTypes = {}), (a.filterProps = [e]), a;
      };
      function d(r) {
        return 'number' !== typeof r ? r : ''.concat(r, 'px solid');
      }
      var h = c(
          m({ prop: 'border', themeKey: 'borders', transform: d }),
          m({ prop: 'borderTop', themeKey: 'borders', transform: d }),
          m({ prop: 'borderRight', themeKey: 'borders', transform: d }),
          m({ prop: 'borderBottom', themeKey: 'borders', transform: d }),
          m({ prop: 'borderLeft', themeKey: 'borders', transform: d }),
          m({ prop: 'borderColor', themeKey: 'palette' }),
          m({ prop: 'borderRadius', themeKey: 'shape' })
        ),
        b = c(
          m({
            prop: 'displayPrint',
            cssProperty: !1,
            transform: function (r) {
              return { '@media print': { display: r } };
            },
          }),
          m({ prop: 'display' }),
          m({ prop: 'overflow' }),
          m({ prop: 'textOverflow' }),
          m({ prop: 'visibility' }),
          m({ prop: 'whiteSpace' })
        ),
        g = c(
          m({ prop: 'flexBasis' }),
          m({ prop: 'flexDirection' }),
          m({ prop: 'flexWrap' }),
          m({ prop: 'justifyContent' }),
          m({ prop: 'alignItems' }),
          m({ prop: 'alignContent' }),
          m({ prop: 'order' }),
          m({ prop: 'flex' }),
          m({ prop: 'flexGrow' }),
          m({ prop: 'flexShrink' }),
          m({ prop: 'alignSelf' }),
          m({ prop: 'justifyItems' }),
          m({ prop: 'justifySelf' })
        ),
        y = c(
          m({ prop: 'gridGap' }),
          m({ prop: 'gridColumnGap' }),
          m({ prop: 'gridRowGap' }),
          m({ prop: 'gridColumn' }),
          m({ prop: 'gridRow' }),
          m({ prop: 'gridAutoFlow' }),
          m({ prop: 'gridAutoColumns' }),
          m({ prop: 'gridAutoRows' }),
          m({ prop: 'gridTemplateColumns' }),
          m({ prop: 'gridTemplateRows' }),
          m({ prop: 'gridTemplateAreas' }),
          m({ prop: 'gridArea' })
        ),
        j = c(
          m({ prop: 'position' }),
          m({ prop: 'zIndex', themeKey: 'zIndex' }),
          m({ prop: 'top' }),
          m({ prop: 'right' }),
          m({ prop: 'bottom' }),
          m({ prop: 'left' })
        ),
        x = c(
          m({ prop: 'color', themeKey: 'palette' }),
          m({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette' })
        ),
        O = m({ prop: 'boxShadow', themeKey: 'shadows' });
      function v(r) {
        return r <= 1 ? ''.concat(100 * r, '%') : r;
      }
      var w = m({ prop: 'width', transform: v }),
        P = m({ prop: 'maxWidth', transform: v }),
        K = m({ prop: 'minWidth', transform: v }),
        C = m({ prop: 'height', transform: v }),
        k = m({ prop: 'maxHeight', transform: v }),
        S = m({ prop: 'minHeight', transform: v }),
        T =
          (m({ prop: 'size', cssProperty: 'width', transform: v }),
          m({ prop: 'size', cssProperty: 'height', transform: v }),
          c(w, P, K, C, k, S, m({ prop: 'boxSizing' }))),
        N = t(117),
        A = c(
          m({ prop: 'fontFamily', themeKey: 'typography' }),
          m({ prop: 'fontSize', themeKey: 'typography' }),
          m({ prop: 'fontStyle', themeKey: 'typography' }),
          m({ prop: 'fontWeight', themeKey: 'typography' }),
          m({ prop: 'letterSpacing' }),
          m({ prop: 'lineHeight' }),
          m({ prop: 'textAlign' })
        ),
        R = t(5),
        _ = t(0),
        z = t.n(_),
        B = t(28),
        E = t(23),
        G = t.n(E),
        I = t(94);
      function W(r, e) {
        var t = {};
        return (
          Object.keys(r).forEach(function (o) {
            -1 === e.indexOf(o) && (t[o] = r[o]);
          }),
          t
        );
      }
      var H = t(37),
        q = function (r) {
          var e = (function (r) {
            return function (e) {
              var t,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                p = o.name,
                a = Object(R.a)(o, ['name']),
                i = p,
                s =
                  'function' === typeof e
                    ? function (r) {
                        return {
                          root: function (t) {
                            return e(Object(n.a)({ theme: r }, t));
                          },
                        };
                      }
                    : { root: e },
                c = Object(I.a)(
                  s,
                  Object(n.a)({ Component: r, name: p || r.displayName, classNamePrefix: i }, a)
                );
              e.filterProps && ((t = e.filterProps), delete e.filterProps),
                e.propTypes && (e.propTypes, delete e.propTypes);
              var f = z.a.forwardRef(function (e, o) {
                var p = e.children,
                  a = e.className,
                  i = e.clone,
                  s = e.component,
                  f = Object(R.a)(e, ['children', 'className', 'clone', 'component']),
                  l = c(e),
                  u = Object(B.a)(l.root, a),
                  m = f;
                if ((t && (m = W(m, t)), i))
                  return z.a.cloneElement(
                    p,
                    Object(n.a)({ className: Object(B.a)(p.props.className, u) }, m)
                  );
                if ('function' === typeof p) return p(Object(n.a)({ className: u }, m));
                var d = s || r;
                return z.a.createElement(d, Object(n.a)({ ref: o, className: u }, m), p);
              });
              return G()(f, r), f;
            };
          })(r);
          return function (r, t) {
            return e(r, Object(n.a)({ defaultTheme: H.a }, t));
          };
        },
        F = s(c(h, b, g, y, j, x, O, T, N.b, A)),
        J = q('div')(F, { name: 'MuiBox' });
      e.a = J;
    },
    352: function (r, e, t) {
      'use strict';
      t.r(e);
      var o = t(229),
        n = t(203),
        p = t(4);
      e.default = function (r) {
        var e = r.t,
          t = Object(n.a)();
        return Object(p.jsx)('header', {
          className: t.header_login_wrapper,
          children: Object(p.jsxs)(o.a, {
            display: 'flex',
            justifyContent: 'center',
            children: [
              Object(p.jsx)('div', {
                children: Object(p.jsx)('img', { src: '/assets/logo192.png' }),
              }),
              Object(p.jsx)(o.a, {
                alignSelf: 'center',
                children: Object(p.jsx)('h2', { children: e('glossary:companyName') }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=29.7aa05730.chunk.js.map
