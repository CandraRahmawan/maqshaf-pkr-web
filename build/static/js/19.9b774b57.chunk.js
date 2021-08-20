(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [19],
  {
    121: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return a;
      }),
        n.d(t, 'a', function () {
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
    124: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var a = n(152),
        r = n.n(a),
        i = n(153),
        c = n.n(i),
        o = n(125),
        s = n(121),
        d = function (e) {
          return 'GET' === e;
        },
        u = function (e, t, n) {
          var a;
          return fetch(
            (function (e, t, n) {
              return r()(e, n) + (d(t) ? '?'.concat(c.a.stringify(n)) : '');
            })('https://maqshaf-api.pesantrenkhoirurrooziqiin.com' + e, t, n),
            {
              method: t,
              headers: {
                api_token: null === (a = Object(s.a)()) || void 0 === a ? void 0 : a.token,
                'Content-Type': 'application/json',
              },
              body: d(t) ? void 0 : JSON.stringify(n),
            }
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              if (
                (Object(o.b)(e) && window.location.replace('/dashboard/login'), !Object(o.a)(e))
              ) {
                var t = e.code,
                  n = e.message,
                  a = e.data,
                  r = new Error(n);
                throw ((r.code = t), (r.message = n), (r.data = a), r);
              }
              return e;
            });
        };
    },
    125: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return i;
        });
      var a = n(328),
        r = function (e) {
          return (null === e || void 0 === e ? void 0 : e.code) === a.a.OK;
        },
        i = function (e) {
          return (null === e || void 0 === e ? void 0 : e.code) === a.a.UNAUTHORIZED;
        };
    },
    126: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      }),
        n.d(t, 'c', function () {
          return r;
        }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'd', function () {
          return o;
        });
      var a = n(0),
        r = {
          SummaryDialog: Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(4), n.e(23)]).then(n.bind(null, 343));
          }),
          IdentityDataDialog: Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(0), n.e(4), n.e(12), n.e(20)]).then(n.bind(null, 372));
          }),
          ConfirmationPinDialog: Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(0), n.e(3), n.e(4), n.e(13)]).then(n.bind(null, 347));
          }),
        },
        i = {
          Dashboard: Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(21), n.e(31)]).then(n.bind(null, 348));
          }),
          Login: Object(a.lazy)(function () {
            return n.e(29).then(n.bind(null, 352));
          }),
        },
        c = Object(a.lazy)(function () {
          return n.e(30).then(n.bind(null, 369));
        }),
        o = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(3), n.e(8), n.e(16), n.e(34)]).then(n.bind(null, 370));
        });
    },
    127: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'a', function () {
          return c;
        });
      var a = n(44),
        r = n.n(a),
        i = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'Rp',
            n = e.toString().split('').reverse().join(''),
            a = n.match(/\d{1,3}/g);
          return ''.concat(t, '. ').concat(a.join('.').split('').reverse().join(''));
        },
        c = function (e) {
          return r()(e).format('MM MMM YYYY, HH:mm');
        };
    },
    140: function (e, t, n) {
      'use strict';
      var a = n(51),
        r = n(130),
        i = n(55),
        c = n(0),
        o = n(28),
        s = n(110),
        d = n(126),
        u = n(121),
        l = n(4),
        b = Object(s.a)(function (e) {
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
      t.a = function (e) {
        var t = e.children,
          n = e.t,
          i = e.history,
          s = b(),
          h = Object(c.useState)(!1),
          j = Object(r.a)(h, 2),
          f = j[0],
          m = j[1];
        return (
          Object(c.useEffect)(function () {
            Object(u.a)() || i.replace('/dashboard/login');
          }, []),
          Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(d.b.Dashboard, {
                t: n,
                open: f,
                handleDrawerOpen: function () {
                  return m(!0);
                },
              }),
              Object(l.jsx)(d.d, {
                t: n,
                open: f,
                handleDrawerClose: function () {
                  return m(!1);
                },
              }),
              Object(l.jsxs)('main', {
                className: Object(o.a)(s.content, Object(a.a)({}, s.content_shift, f)),
                children: [Object(l.jsx)('div', { className: s.drawer_header }), t],
              }),
              Object(l.jsx)(d.a, { t: n }),
            ],
          })
        );
      };
    },
    154: function (e, t) {},
    358: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(151),
        r = n(361),
        i = n(174),
        c = n(175),
        o = n(30),
        s = n(33),
        d = n(179),
        u = n(124),
        l = function () {
          var e = Object(d.a)('listAllProduct', function () {
            return Object(u.a)('/mastergood/all', 'GET');
          });
          return { data: e.data, isLoading: e.isLoading };
        },
        b = n(127),
        h = function (e) {
          return {};
        },
        j = n(4),
        f = function (e) {
          return [
            { name: 'number', label: e('common:label.no') },
            { name: 'image', label: e('dashboard_product:table.header.image') },
            { name: 'code', label: e('dashboard_product:table.header.code') },
            { name: 'name', label: e('dashboard_product:table.header.name') },
            { name: 'createdAt', label: e('common:label.createdAt') },
            { name: 'price', label: e('dashboard_product:table.header.price') },
            { name: 'category', label: e('dashboard_product:table.header.category') },
            { name: 'status', label: e('dashboard_product:table.header.status') },
            { name: 'action', label: e('common:label.action') },
          ];
        },
        m = Object(o.a)(h)(function (e) {
          var t,
            n = e.t,
            a = (e.classes, l()),
            r = a.data,
            o = a.isLoading;
          return Object(j.jsx)(s.d, {
            isLoading: o,
            headers: f(n),
            children:
              null === r || void 0 === r || null === (t = r.data) || void 0 === t
                ? void 0
                : t.map(function (e, t) {
                    return Object(j.jsxs)(
                      i.a,
                      {
                        children: [
                          Object(j.jsx)(c.a, { component: 'th', scope: 'row', children: t + 1 }),
                          Object(j.jsx)(c.a, {
                            align: 'right',
                            children: Object(j.jsx)('img', { src: e.image, width: 50, height: 50 }),
                          }),
                          Object(j.jsx)(c.a, { children: e.code }),
                          Object(j.jsx)(c.a, { children: e.name }),
                          Object(j.jsx)(c.a, { children: Object(b.a)(e.createdAt) }),
                          Object(j.jsx)(c.a, { children: Object(b.b)(e.price) }),
                          Object(j.jsx)(c.a, { children: e.category }),
                          Object(j.jsx)(c.a, { children: e.isActive }),
                          Object(j.jsx)(c.a, {}),
                        ],
                      },
                      e.id
                    );
                  }),
          });
        }),
        O = n(140);
      t.default = Object(r.a)(['dashboard_product', 'glossary'])(function (e) {
        var t = e.t,
          n = e.history,
          r = e.location;
        return Object(j.jsxs)(j.Fragment, {
          children: [
            Object(j.jsxs)(a.a, {
              children: [
                Object(j.jsx)('title', { children: t('dashboard_product:metaTitle') }),
                Object(j.jsx)('meta', {
                  name: 'description',
                  content: t('dashboard_product:metaDescription'),
                }),
              ],
            }),
            Object(j.jsx)(O.a, {
              t: t,
              history: n,
              children: Object(j.jsx)(m, { t: t, history: n, location: r }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=19.9b774b57.chunk.js.map
