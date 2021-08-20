(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [28],
  {
    121: function (n, e, t) {
      'use strict';
      t.d(e, 'b', function () {
        return r;
      }),
        t.d(e, 'a', function () {
          return a;
        });
      var r = function (n) {
          localStorage.setItem(
            'maqshaf-user',
            JSON.stringify(null === n || void 0 === n ? void 0 : n.data)
          );
        },
        a = function () {
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
        return s;
      }),
        t.d(e, 'c', function () {
          return a;
        }),
        t.d(e, 'b', function () {
          return i;
        }),
        t.d(e, 'd', function () {
          return c;
        });
      var r = t(0),
        a = {
          SummaryDialog: Object(r.lazy)(function () {
            return Promise.all([t.e(2), t.e(4), t.e(23)]).then(t.bind(null, 343));
          }),
          IdentityDataDialog: Object(r.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(4), t.e(12), t.e(20)]).then(t.bind(null, 372));
          }),
          ConfirmationPinDialog: Object(r.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(3), t.e(4), t.e(13)]).then(t.bind(null, 347));
          }),
        },
        i = {
          Dashboard: Object(r.lazy)(function () {
            return Promise.all([t.e(2), t.e(21), t.e(31)]).then(t.bind(null, 348));
          }),
          Login: Object(r.lazy)(function () {
            return t.e(29).then(t.bind(null, 352));
          }),
        },
        s = Object(r.lazy)(function () {
          return t.e(30).then(t.bind(null, 369));
        }),
        c = Object(r.lazy)(function () {
          return Promise.all([t.e(2), t.e(3), t.e(8), t.e(16), t.e(34)]).then(t.bind(null, 370));
        });
    },
    140: function (n, e, t) {
      'use strict';
      var r = t(51),
        a = t(130),
        i = t(55),
        s = t(0),
        c = t(28),
        o = t(110),
        u = t(126),
        l = t(121),
        d = t(4),
        b = Object(o.a)(function (n) {
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
          o = b(),
          j = Object(s.useState)(!1),
          f = Object(a.a)(j, 2),
          h = f[0],
          O = f[1];
        return (
          Object(s.useEffect)(function () {
            Object(l.a)() || i.replace('/dashboard/login');
          }, []),
          Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(u.b.Dashboard, {
                t: t,
                open: h,
                handleDrawerOpen: function () {
                  return O(!0);
                },
              }),
              Object(d.jsx)(u.d, {
                t: t,
                open: h,
                handleDrawerClose: function () {
                  return O(!1);
                },
              }),
              Object(d.jsxs)('main', {
                className: Object(c.a)(o.content, Object(r.a)({}, o.content_shift, h)),
                children: [Object(d.jsx)('div', { className: o.drawer_header }), e],
              }),
              Object(d.jsx)(u.a, { t: t }),
            ],
          })
        );
      };
    },
    366: function (n, e, t) {
      'use strict';
      t.r(e);
      var r = t(151),
        a = t(361),
        i = t(4),
        s = function () {
          return Object(i.jsx)('div', { children: 'Dashbaord' });
        },
        c = t(140);
      e.default = Object(a.a)(['dashboard', 'glossary'])(function (n) {
        var e = n.t,
          t = n.history,
          a = n.location;
        return Object(i.jsxs)(i.Fragment, {
          children: [
            Object(i.jsxs)(r.a, {
              children: [
                Object(i.jsx)('title', { children: e('dashboard:metaTitle') }),
                Object(i.jsx)('meta', {
                  name: 'description',
                  content: e('dashboard:metaDescription'),
                }),
              ],
            }),
            Object(i.jsx)(c.a, {
              t: e,
              history: t,
              children: Object(i.jsx)(s, { t: e, history: t, location: a }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=28.e99deb1f.chunk.js.map
