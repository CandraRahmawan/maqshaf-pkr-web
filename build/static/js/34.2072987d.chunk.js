(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [34],
  {
    369: function (e, t, a) {
      'use strict';
      a.r(t);
      var c = a(130),
        n = a(0),
        s = a(367),
        r = a(159),
        j = a(185),
        i = a(190),
        b = a(189),
        d = a(260),
        o = a(331),
        l = a(261),
        x = a(338),
        h = a(63),
        O = a(329),
        m = a(330),
        u = a(332),
        p = a(333),
        f = a(334),
        w = a(335),
        k = a(222),
        g = a(336),
        y = a(337),
        M = a(339),
        v = a(340),
        _ = a(341),
        C = a(123),
        N = a(55),
        D = a(110),
        S = Object(D.a)(function (e) {
          return {
            drawer: {
              width: 240,
              flexShrink: 0,
              '& a': {
                color: e.color.black,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'none' },
              },
            },
            drawer_paper: { width: 240 },
            drawer_header: Object(N.a)(
              Object(N.a)(
                { display: 'flex', alignItems: 'center', padding: e.spacing(0, 1) },
                e.mixins.toolbar
              ),
              {},
              { justifyContent: 'flex-end' }
            ),
            menu_title_wrapper: {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              '& h5': { marginLeft: 12, alignItems: 'center', alignSelf: 'center' },
            },
            nested: { paddingLeft: e.spacing(4) },
          };
        }),
        q = a(4);
      t.default = function (e) {
        var t = S(),
          a = Object(C.a)(),
          N = e.open,
          D = e.handleDrawerClose,
          I = e.t,
          J = Object(n.useState)(!1),
          L = Object(c.a)(J, 2),
          B = L[0],
          E = L[1];
        return Object(q.jsxs)(s.a, {
          className: t.drawer,
          variant: 'persistent',
          anchor: 'left',
          open: N,
          classes: { paper: t.drawer_paper },
          children: [
            Object(q.jsxs)('div', {
              className: t.drawer_header,
              children: [
                Object(q.jsxs)('div', {
                  className: t.menu_title_wrapper,
                  children: [
                    Object(q.jsx)('img', { src: '/assets/logo192.png', width: 30, height: 30 }),
                    Object(q.jsx)(r.a, { variant: 'h5', children: I('common:leftMenu.menu') }),
                  ],
                }),
                Object(q.jsx)(j.a, {
                  onClick: D,
                  children: 'ltr' === a.direction ? Object(q.jsx)(O.a, {}) : Object(q.jsx)(m.a, {}),
                }),
              ],
            }),
            Object(q.jsx)(i.a, {}),
            Object(q.jsxs)(b.a, {
              children: [
                Object(q.jsx)(h.b, {
                  to: '/dashboard',
                  children: Object(q.jsxs)(
                    d.a,
                    {
                      button: !0,
                      children: [
                        Object(q.jsx)(o.a, { children: Object(q.jsx)(u.a, {}) }),
                        Object(q.jsx)(l.a, { primary: I('common:leftMenu.dashboard') }),
                      ],
                    },
                    'dashboard'
                  ),
                }),
                Object(q.jsx)(h.b, {
                  to: '/dashboard/produk',
                  children: Object(q.jsxs)(
                    d.a,
                    {
                      button: !0,
                      children: [
                        Object(q.jsx)(o.a, { children: Object(q.jsx)(p.a, {}) }),
                        Object(q.jsx)(l.a, { primary: I('common:leftMenu.product') }),
                      ],
                    },
                    'product'
                  ),
                }),
                Object(q.jsx)(h.b, {
                  to: '/dashboard/santri',
                  children: Object(q.jsxs)(
                    d.a,
                    {
                      button: !0,
                      children: [
                        Object(q.jsx)(o.a, { children: Object(q.jsx)(f.a, {}) }),
                        Object(q.jsx)(l.a, { primary: I('common:leftMenu.user') }),
                      ],
                    },
                    'user'
                  ),
                }),
                Object(q.jsx)(h.b, {
                  to: '/dashboard/administrator',
                  children: Object(q.jsxs)(
                    d.a,
                    {
                      button: !0,
                      children: [
                        Object(q.jsx)(o.a, { children: Object(q.jsx)(w.a, {}) }),
                        Object(q.jsx)(l.a, { primary: I('common:leftMenu.admin') }),
                      ],
                    },
                    'administrator'
                  ),
                }),
                Object(q.jsxs)(
                  d.a,
                  {
                    button: !0,
                    onClick: function () {
                      E(!B);
                    },
                    children: [
                      Object(q.jsx)(o.a, { children: Object(q.jsx)(k.a, {}) }),
                      Object(q.jsx)(l.a, { primary: I('common:leftMenu.transaction') }),
                      B ? Object(q.jsx)(g.a, {}) : Object(q.jsx)(y.a, {}),
                    ],
                  },
                  'transaction'
                ),
                Object(q.jsx)(x.a, {
                  in: B,
                  timeout: 'auto',
                  unmountOnExit: !0,
                  children: Object(q.jsxs)(b.a, {
                    component: 'div',
                    disablePadding: !0,
                    children: [
                      Object(q.jsx)(h.b, {
                        to: '/dashboard/transaksi/masuk',
                        children: Object(q.jsxs)(d.a, {
                          button: !0,
                          className: t.nested,
                          children: [
                            Object(q.jsx)(o.a, { children: Object(q.jsx)(M.a, {}) }),
                            Object(q.jsx)(l.a, { primary: I('common:leftMenu.in') }),
                          ],
                        }),
                      }),
                      Object(q.jsx)(h.b, {
                        to: '/dashboard/transaksi/keluar',
                        children: Object(q.jsxs)(d.a, {
                          button: !0,
                          className: t.nested,
                          children: [
                            Object(q.jsx)(o.a, { children: Object(q.jsx)(v.a, {}) }),
                            Object(q.jsx)(l.a, { primary: I('common:leftMenu.out') }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                Object(q.jsx)(h.b, {
                  to: '/dashboard/cek-saldo',
                  children: Object(q.jsxs)(
                    d.a,
                    {
                      button: !0,
                      children: [
                        Object(q.jsx)(o.a, { children: Object(q.jsx)(_.a, {}) }),
                        Object(q.jsx)(l.a, { primary: I('common:leftMenu.checkBalanced') }),
                      ],
                    },
                    'balanced'
                  ),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=34.2072987d.chunk.js.map
