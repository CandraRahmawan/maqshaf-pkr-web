(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [27],
  {
    121: function (e, n, t) {
      'use strict';
      t.d(n, 'b', function () {
        return a;
      }),
        t.d(n, 'a', function () {
          return r;
        });
      var a = function (e) {
          localStorage.setItem(
            'maqshaf-user',
            JSON.stringify(null === e || void 0 === e ? void 0 : e.data)
          );
        },
        r = function () {
          try {
            return JSON.parse(localStorage.getItem('maqshaf-user'));
          } catch (e) {
            return console.error(e), null;
          }
        };
    },
    126: function (e, n, t) {
      'use strict';
      t.d(n, 'a', function () {
        return c;
      }),
        t.d(n, 'c', function () {
          return r;
        }),
        t.d(n, 'b', function () {
          return i;
        }),
        t.d(n, 'd', function () {
          return s;
        });
      var a = t(0),
        r = {
          SummaryDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(4), t.e(23)]).then(t.bind(null, 342));
          }),
          IdentityDataDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(4), t.e(12), t.e(20)]).then(t.bind(null, 371));
          }),
          ConfirmationPinDialog: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(0), t.e(3), t.e(4), t.e(13)]).then(t.bind(null, 346));
          }),
        },
        i = {
          Dashboard: Object(a.lazy)(function () {
            return Promise.all([t.e(2), t.e(21), t.e(31)]).then(t.bind(null, 347));
          }),
          Login: Object(a.lazy)(function () {
            return t.e(29).then(t.bind(null, 351));
          }),
        },
        c = Object(a.lazy)(function () {
          return t.e(30).then(t.bind(null, 368));
        }),
        s = Object(a.lazy)(function () {
          return Promise.all([t.e(2), t.e(3), t.e(8), t.e(16), t.e(34)]).then(t.bind(null, 369));
        });
    },
    140: function (e, n, t) {
      'use strict';
      var a = t(51),
        r = t(130),
        i = t(55),
        c = t(0),
        s = t(28),
        o = t(110),
        l = t(126),
        u = t(121),
        d = t(4),
        b = Object(o.a)(function (e) {
          return {
            drawer_header: Object(i.a)(
              Object(i.a)(
                { display: 'flex', alignItems: 'center', padding: e.spacing(0, 1) },
                e.mixins.toolbar
              ),
              {},
              { justifyContent: 'flex-end' }
            ),
            main_wrapper: { flexGrow: 1, padding: e.spacing(3) },
            content: {
              flexGrow: 1,
              padding: e.spacing(3),
              transition: e.transitions.create('margin', {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingscreen,
              }),
            },
            content_shift: {
              transition: e.transitions.create('margin', {
                easing: e.transitions.easing.easeout,
                duration: e.transitions.duration.enteringscreen,
              }),
              marginLeft: 0,
            },
          };
        });
      n.a = function (e) {
        var n = e.children,
          t = e.t,
          i = e.history,
          o = b(),
          h = Object(c.useState)(!1),
          j = Object(r.a)(h, 2),
          f = j[0],
          O = j[1];
        return (
          Object(c.useEffect)(function () {
            Object(u.a)() || i.replace('/dashboard/login');
          }, []),
          Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(l.b.Dashboard, {
                t: t,
                open: f,
                handleDrawerOpen: function () {
                  return O(!0);
                },
              }),
              Object(d.jsx)(l.d, {
                t: t,
                open: f,
                handleDrawerClose: function () {
                  return O(!1);
                },
              }),
              Object(d.jsxs)('main', {
                className: Object(s.a)(o.content, Object(a.a)({}, o.content_shift, f)),
                children: [Object(d.jsx)('div', { className: o.drawer_header }), n],
              }),
              Object(d.jsx)(l.a, { t: t }),
            ],
          })
        );
      };
    },
    366: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(151),
        r = t(360),
        i = t(4),
        c = function () {
          return Object(i.jsx)('div', { children: 'Check Balanced' });
        },
        s = t(140);
      n.default = Object(r.a)(['dashboard_check_balanced', 'glossary'])(function (e) {
        var n = e.t,
          t = e.history,
          r = e.location;
        return Object(i.jsxs)(i.Fragment, {
          children: [
            Object(i.jsxs)(a.a, {
              children: [
                Object(i.jsx)('title', { children: n('dashboard_check_balanced:metaTitle') }),
                Object(i.jsx)('meta', {
                  name: 'description',
                  content: n('dashboard_check_balanced:metaDescription'),
                }),
              ],
            }),
            Object(i.jsx)(s.a, {
              t: n,
              history: t,
              children: Object(i.jsx)(c, { t: n, history: t, location: r }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=27.9ed16139.chunk.js.map
