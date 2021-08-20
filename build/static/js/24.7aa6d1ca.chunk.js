(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [24],
  {
    121: function (n, e, t) {
      'use strict';
      t.d(e, 'b', function () {
        return a;
      }),
        t.d(e, 'a', function () {
          return r;
        });
      var a = function (n) {
          localStorage.setItem(
            'maqshaf-user',
            JSON.stringify(null === n || void 0 === n ? void 0 : n.data)
          );
        },
        r = function () {
          try {
            return JSON.parse(localStorage.getItem('maqshaf-user'));
          } catch (n) {
            return console.error(n), null;
          }
        };
    },
    126: function (n, e, t) {
      'use strict';
      t.d(e, 'a', function () {
        return c;
      }),
        t.d(e, 'c', function () {
          return r;
        }),
        t.d(e, 'b', function () {
          return i;
        }),
        t.d(e, 'd', function () {
          return o;
        });
      var a = t(0),
        r = {
          SummaryDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(4), t.e(23)]).then(t.bind(null, 343));
          }),
          IdentityDataDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(4), t.e(12), t.e(20)]).then(t.bind(null, 372));
          }),
          ConfirmationPinDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(3), t.e(4), t.e(13)]).then(t.bind(null, 347));
          }),
        },
        i = {
          Dashboard: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(21), t.e(31)]).then(t.bind(null, 348));
          }),
          Login: Object(a.lazy)(function () {
            return t.e(29).then(t.bind(null, 352));
          }),
        },
        c = Object(a.lazy)(function () {
          return t.e(30).then(t.bind(null, 369));
        }),
        o = Object(a.lazy)(function () {
          return Promise.all([t.e(2), t.e(3), t.e(8), t.e(16), t.e(34)]).then(t.bind(null, 370));
        });
    },
    140: function (n, e, t) {
      'use strict';
      var a = t(51),
        r = t(130),
        i = t(55),
        c = t(0),
        o = t(28),
        s = t(110),
        l = t(126),
        u = t(121),
        d = t(4),
        b = Object(s.a)(function (n) {
          return {
            drawer_header: Object(i.a)(
              Object(i.a)(
                { display: 'flex', alignItems: 'center', padding: n.spacing(0, 1) },
                n.mixins.toolbar
              ),
              {},
              { justifyContent: 'flex-end' }
            ),
            main_wrapper: { flexGrow: 1, padding: n.spacing(3) },
            content: {
              flexGrow: 1,
              padding: n.spacing(3),
              transition: n.transitions.create('margin', {
                easing: n.transitions.easing.sharp,
                duration: n.transitions.duration.leavingscreen,
              }),
            },
            content_shift: {
              transition: n.transitions.create('margin', {
                easing: n.transitions.easing.easeout,
                duration: n.transitions.duration.enteringscreen,
              }),
              marginLeft: 0,
            },
          };
        });
      e.a = function (n) {
        var e = n.children,
          t = n.t,
          i = n.history,
          s = b(),
          f = Object(c.useState)(!1),
          h = Object(r.a)(f, 2),
          j = h[0],
          g = h[1];
        return (
          Object(c.useEffect)(function () {
            Object(u.a)() || i.replace('/dashboard/login');
          }, []),
          Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(l.b.Dashboard, {
                t: t,
                open: j,
                handleDrawerOpen: function () {
                  return g(!0);
                },
              }),
              Object(d.jsx)(l.d, {
                t: t,
                open: j,
                handleDrawerClose: function () {
                  return g(!1);
                },
              }),
              Object(d.jsxs)('main', {
                className: Object(o.a)(s.content, Object(a.a)({}, s.content_shift, j)),
                children: [Object(d.jsx)('div', { className: s.drawer_header }), e],
              }),
              Object(d.jsx)(l.a, { t: t }),
            ],
          })
        );
      };
    },
    190: function (n, e, t) {
      'use strict';
      e.a = function (n) {
        return {
          button_login: { marginTop: 16 },
          login_box: { padding: 16 },
          login_root: { margin: '0 auto', marginTop: '10%' },
          form: { width: '100%', marginTop: 24 },
          margin: { margin: n.spacing(2) },
          logo_login_wrapper: { paddingBottom: 16, margin: '0 auto', textAlign: 'center' },
        };
      };
    },
    367: function (n, e, t) {
      'use strict';
      t.r(e);
      var a = t(151),
        r = t(361),
        i = t(112),
        c = t(30),
        o = t(190),
        s = t(4),
        l = Object(c.a)(o.a)(function () {
          return Object(s.jsx)(i.a, { children: 'Check Balanced' });
        }),
        u = t(140);
      e.default = Object(r.a)(['dashboard_check_balanced', 'glossary'])(function (n) {
        var e = n.t,
          t = n.history,
          r = n.location;
        return Object(s.jsxs)(s.Fragment, {
          children: [
            Object(s.jsxs)(a.a, {
              children: [
                Object(s.jsx)('title', { children: e('dashboard_check_balanced:metaTitle') }),
                Object(s.jsx)('meta', {
                  name: 'description',
                  content: e('dashboard_check_balanced:metaDescription'),
                }),
              ],
            }),
            Object(s.jsx)(u.a, {
              t: e,
              history: t,
              children: Object(s.jsx)(l, { t: e, history: t, location: r }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=24.7aa6d1ca.chunk.js.map
