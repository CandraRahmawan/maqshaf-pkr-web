(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [30],
  {
    249: function (t, a, e) {
      'use strict';
      var i = e(1),
        s = e(5),
        n = e(19),
        o = e(0),
        r = (e(12), e(28)),
        d = e(30),
        c = e(49),
        p = o.forwardRef(function (t, a) {
          var e = t.classes,
            n = t.className,
            d = t.component,
            p = void 0 === d ? 'div' : d,
            b = t.disableGutters,
            m = void 0 !== b && b,
            l = t.fixed,
            u = void 0 !== l && l,
            x = t.maxWidth,
            h = void 0 === x ? 'lg' : x,
            g = Object(s.a)(t, [
              'classes',
              'className',
              'component',
              'disableGutters',
              'fixed',
              'maxWidth',
            ]);
          return o.createElement(
            p,
            Object(i.a)(
              {
                className: Object(r.a)(
                  e.root,
                  n,
                  u && e.fixed,
                  m && e.disableGutters,
                  !1 !== h && e['maxWidth'.concat(Object(c.a)(String(h)))]
                ),
                ref: a,
              },
              g
            )
          );
        });
      a.a = Object(d.a)(
        function (t) {
          return {
            root: Object(n.a)(
              {
                width: '100%',
                marginLeft: 'auto',
                boxSizing: 'border-box',
                marginRight: 'auto',
                paddingLeft: t.spacing(2),
                paddingRight: t.spacing(2),
                display: 'block',
              },
              t.breakpoints.up('sm'),
              { paddingLeft: t.spacing(3), paddingRight: t.spacing(3) }
            ),
            disableGutters: { paddingLeft: 0, paddingRight: 0 },
            fixed: Object.keys(t.breakpoints.values).reduce(function (a, e) {
              var i = t.breakpoints.values[e];
              return 0 !== i && (a[t.breakpoints.up(e)] = { maxWidth: i }), a;
            }, {}),
            maxWidthXs: Object(n.a)({}, t.breakpoints.up('xs'), {
              maxWidth: Math.max(t.breakpoints.values.xs, 444),
            }),
            maxWidthSm: Object(n.a)({}, t.breakpoints.up('sm'), {
              maxWidth: t.breakpoints.values.sm,
            }),
            maxWidthMd: Object(n.a)({}, t.breakpoints.up('md'), {
              maxWidth: t.breakpoints.values.md,
            }),
            maxWidthLg: Object(n.a)({}, t.breakpoints.up('lg'), {
              maxWidth: t.breakpoints.values.lg,
            }),
            maxWidthXl: Object(n.a)({}, t.breakpoints.up('xl'), {
              maxWidth: t.breakpoints.values.xl,
            }),
          };
        },
        { name: 'MuiContainer' }
      )(p);
    },
    368: function (t, a, e) {
      'use strict';
      e.r(a);
      var i = e(112),
        s = e(249),
        n = e(51),
        o = e(110),
        r = Object(o.a)(function (t) {
          return {
            root: {
              borderTop: '2px solid #1a237e',
              marginTop: 30,
              textAlign: 'center',
              position: 'relative',
            },
            bottom: {
              backgroundColor: '#1a237e',
              '& h4': Object(n.a)(
                { marginTop: 0, marginBottom: 0, padding: '16px 0', color: t.color.white },
                t.breakpoints.down('xs'),
                { fontSize: 12, padding: '12px 0' }
              ),
            },
          };
        }),
        d = e(4);
      a.default = function (t) {
        var a = t.t,
          e = r();
        return Object(d.jsx)(i.a, {
          container: !0,
          children: Object(d.jsx)(i.a, {
            className: e.root,
            item: !0,
            xs: 12,
            children: Object(d.jsx)('div', {
              className: e.bottom,
              children: Object(d.jsx)(s.a, {
                children: Object(d.jsx)('h4', { children: a('glossary:copyright') }),
              }),
            }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=30.f4a4ce9d.chunk.js.map
