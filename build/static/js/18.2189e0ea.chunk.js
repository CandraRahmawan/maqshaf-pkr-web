(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [18],
  {
    121: function (n, t, e) {
      'use strict';
      e.d(t, 'b', function () {
        return a;
      }),
        e.d(t, 'a', function () {
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
    124: function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return l;
      });
      var a = e(152),
        r = e.n(a),
        i = e(153),
        o = e.n(i),
        c = e(125),
        s = e(121),
        u = function (n) {
          return 'GET' === n;
        },
        l = function (n, t, e) {
          return fetch(
            (function (n, t, e) {
              return r()(n, e) + (u(t) ? '?'.concat(o.a.stringify(e)) : '');
            })('https://maqshaf-api-dev.pesantrenkhoirurrooziqiin.com' + n, t, e),
            {
              method: t,
              headers: { api_token: Object(s.a)().token, 'Content-Type': 'application/json' },
              body: u(t) ? void 0 : JSON.stringify(e),
            }
          )
            .then(function (n) {
              return n.json();
            })
            .then(function (n) {
              if (
                (Object(c.b)(n) && window.location.replace('/dashboard/login'), !Object(c.a)(n))
              ) {
                var t = n.code,
                  e = n.message,
                  a = n.data,
                  r = new Error(e);
                throw ((r.code = t), (r.message = e), (r.data = a), r);
              }
              return n;
            });
        };
    },
    125: function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return r;
      }),
        e.d(t, 'b', function () {
          return i;
        });
      var a = e(327),
        r = function (n) {
          return (null === n || void 0 === n ? void 0 : n.code) === a.a.OK;
        },
        i = function (n) {
          return (null === n || void 0 === n ? void 0 : n.code) === a.a.UNAUTHORIZED;
        };
    },
    126: function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return o;
      }),
        e.d(t, 'c', function () {
          return r;
        }),
        e.d(t, 'b', function () {
          return i;
        }),
        e.d(t, 'd', function () {
          return c;
        });
      var a = e(0),
        r = {
          SummaryDialog: Object(a.lazy)(function () {
            return Promise.all([e.e(2), e.e(4), e.e(23)]).then(e.bind(null, 342));
          }),
          IdentityDataDialog: Object(a.lazy)(function () {
            return Promise.all([e.e(2), e.e(0), e.e(4), e.e(12), e.e(20)]).then(e.bind(null, 371));
          }),
          ConfirmationPinDialog: Object(a.lazy)(function () {
            return Promise.all([e.e(2), e.e(0), e.e(3), e.e(4), e.e(13)]).then(e.bind(null, 346));
          }),
        },
        i = {
          Dashboard: Object(a.lazy)(function () {
            return Promise.all([e.e(2), e.e(21), e.e(31)]).then(e.bind(null, 347));
          }),
          Login: Object(a.lazy)(function () {
            return e.e(29).then(e.bind(null, 351));
          }),
        },
        o = Object(a.lazy)(function () {
          return e.e(30).then(e.bind(null, 368));
        }),
        c = Object(a.lazy)(function () {
          return Promise.all([e.e(2), e.e(3), e.e(8), e.e(16), e.e(34)]).then(e.bind(null, 369));
        });
    },
    127: function (n, t, e) {
      'use strict';
      e.d(t, 'b', function () {
        return i;
      }),
        e.d(t, 'a', function () {
          return o;
        });
      var a = e(44),
        r = e.n(a),
        i = function (n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'Rp',
            e = n.toString().split('').reverse().join(''),
            a = e.match(/\d{1,3}/g);
          return ''.concat(t, '. ').concat(a.join('.').split('').reverse().join(''));
        },
        o = function (n) {
          return r()(n).format('MM MMM YYYY, HH:mm');
        };
    },
    140: function (n, t, e) {
      'use strict';
      var a = e(51),
        r = e(130),
        i = e(55),
        o = e(0),
        c = e(28),
        s = e(110),
        u = e(126),
        l = e(121),
        d = e(4),
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
      t.a = function (n) {
        var t = n.children,
          e = n.t,
          i = n.history,
          s = b(),
          f = Object(o.useState)(!1),
          j = Object(r.a)(f, 2),
          m = j[0],
          h = j[1];
        return (
          Object(o.useEffect)(function () {
            Object(l.a)() || i.replace('/dashboard/login');
          }, []),
          Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(u.b.Dashboard, {
                t: e,
                open: m,
                handleDrawerOpen: function () {
                  return h(!0);
                },
              }),
              Object(d.jsx)(u.d, {
                t: e,
                open: m,
                handleDrawerClose: function () {
                  return h(!1);
                },
              }),
              Object(d.jsxs)('main', {
                className: Object(c.a)(s.content, Object(a.a)({}, s.content_shift, m)),
                children: [Object(d.jsx)('div', { className: s.drawer_header }), t],
              }),
              Object(d.jsx)(u.a, { t: e }),
            ],
          })
        );
      };
    },
    154: function (n, t) {},
    359: function (n, t, e) {
      'use strict';
      e.r(t);
      var a = e(151),
        r = e(360),
        i = e(174),
        o = e(175),
        c = e(30),
        s = e(33),
        u = e(127),
        l = e(179),
        d = e(124),
        b = function () {
          var n = Object(l.a)('listAllAdministrator', function () {
            return Object(d.a)('/administrator/all', 'GET');
          });
          return { data: n.data, isLoading: n.isLoading };
        },
        f = function (n) {
          return {};
        },
        j = e(4),
        m = function (n) {
          return [
            { name: 'number', label: n('common:label.no') },
            { name: 'id', label: n('dashboard_administrator:table.header.id') },
            { name: 'username', label: n('dashboard_administrator:table.header.username') },
            { name: 'fullName', label: n('common:label.fullName') },
            { name: 'createdAt', label: n('common:label.createdAt') },
            { name: 'action', label: n('common:label.action') },
          ];
        },
        h = Object(c.a)(f)(function (n) {
          var t,
            e = n.t,
            a = b(),
            r = a.data,
            c = a.isLoading;
          return Object(j.jsx)(s.d, {
            isLoading: c,
            headers: m(e),
            children:
              null === r || void 0 === r || null === (t = r.data) || void 0 === t
                ? void 0
                : t.map(function (n, t) {
                    return Object(j.jsxs)(
                      i.a,
                      {
                        children: [
                          Object(j.jsx)(o.a, { component: 'th', scope: 'row', children: t + 1 }),
                          Object(j.jsx)(o.a, { children: n.administratorId }),
                          Object(j.jsx)(o.a, { children: n.username }),
                          Object(j.jsx)(o.a, { children: n.fullName }),
                          Object(j.jsx)(o.a, { children: Object(u.a)(n.createdAt) }),
                          Object(j.jsx)(o.a, { children: '-' }),
                        ],
                      },
                      n.id
                    );
                  }),
          });
        }),
        O = e(140);
      t.default = Object(r.a)(['dashboard_administrator', 'glossary'])(function (n) {
        var t = n.t,
          e = n.history,
          r = n.location;
        return Object(j.jsxs)(j.Fragment, {
          children: [
            Object(j.jsxs)(a.a, {
              children: [
                Object(j.jsx)('title', { children: t('dashboard_administrator:metaTitle') }),
                Object(j.jsx)('meta', {
                  name: 'description',
                  content: t('dashboard_administrator:metaDescription'),
                }),
              ],
            }),
            Object(j.jsx)(O.a, {
              t: t,
              history: e,
              children: Object(j.jsx)(h, { t: t, history: e, location: r }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=18.2189e0ea.chunk.js.map
