(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [9],
  {
    33: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return b;
      }),
        n.d(t, 'f', function () {
          return s;
        }),
        n.d(t, 'a', function () {
          return u;
        }),
        n.d(t, 'e', function () {
          return d;
        }),
        n.d(t, 'd', function () {
          return h;
        }),
        n.d(t, 'b', function () {
          return f;
        });
      var a = n(0),
        r = n(112),
        c = n(114),
        o = n(110),
        i = n(4),
        l = Object(o.a)({
          root: { textAlign: 'center', marginTop: '30%', '& p': { color: '#000' } },
        }),
        s = function (e) {
          var t = e.label,
            n = l();
          return Object(i.jsx)(r.a, {
            container: !0,
            children: Object(i.jsxs)(r.a, {
              className: n.root,
              item: !0,
              xs: 12,
              children: [Object(i.jsx)(c.a, {}), Object(i.jsx)('p', { children: t })],
            }),
          });
        },
        u = {
          Floating: Object(a.lazy)(function () {
            return Promise.all([n.e(2), n.e(3), n.e(7), n.e(35)]).then(n.bind(null, 326));
          }),
        },
        d = {
          DataTable: Object(a.lazy)(function () {
            return n.e(24).then(n.bind(null, 364));
          }),
        },
        b = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(3), n.e(7), n.e(17), n.e(33)]).then(n.bind(null, 362));
        }),
        h = Object(a.lazy)(function () {
          return n.e(22).then(n.bind(null, 355));
        }),
        f = Object(a.lazy)(function () {
          return Promise.all([n.e(2), n.e(32)]).then(n.bind(null, 363));
        });
    },
    56: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return o;
      }),
        n.d(t, 'a', function () {
          return i;
        });
      var a = n(26),
        r = Object(a.b)({
          name: 'cartSelected',
          initialState: { total: 0, qty: 0, items: [] },
          reducers: {
            selectCart: function (e, t) {
              var n = t.payload.items;
              (e.total = n
                .map(function (e) {
                  return e.price * e.qty;
                })
                .reduce(function (e, t) {
                  return e + t;
                })),
                (e.qty = n
                  .map(function (e) {
                    return e.qty;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  })),
                (e.items = n);
            },
            clearCart: function (e) {
              (e.total = 0), (e.qty = 0), (e.items = []);
            },
          },
        }),
        c = r.actions,
        o = c.selectCart,
        i = c.clearCart;
      t.b = r.reducer;
    },
    61: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return c;
      });
      var a = n(26),
        r = Object(a.b)({
          name: 'setTransaction',
          initialState: {
            transactionCode: 0,
            transactionId: 0,
            transactionDate: '',
            qty: 0,
            saldo: 0,
            total: 0,
            userId: 0,
            items: [],
          },
          reducers: {
            setTransaction: function (e, t) {
              var n = t.payload,
                a = n.items,
                r = n.qty,
                c = n.saldo,
                o = n.transactionCode,
                i = n.transactionId,
                l = n.transactionDate,
                s = n.total,
                u = n.userId;
              (e.transactionCode = o),
                (e.transactionId = i),
                (e.transactionDate = l),
                (e.qty = r),
                (e.saldo = c),
                (e.total = s),
                (e.userId = u),
                (e.items = a);
            },
          },
        }),
        c = r.actions.setTransaction;
      t.a = r.reducer;
    },
    89: function (e, t, n) {},
    91: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(31),
        o = n.n(c),
        i = n(115),
        l = n(44),
        s = n.n(l),
        u = n(109),
        d = n(75),
        b = n(4),
        h = Object(d.a)({
          primaryColor: '#00a8ff',
          orangeColor: '#ff9100',
          whiteColor: '#fff',
          color: { white: '#fff', black: '#000' },
        }),
        f = function (e) {
          var t = e.children;
          return Object(b.jsx)(u.a, { theme: h, children: t });
        },
        j = n(116),
        m = n(98),
        p = n(70);
      function O(e) {
        var t = e.children,
          n = new j.a({
            defaultOptions: {
              queries: { refetchOnMount: !1, refetchOnWindowFocus: !1, retry: !1 },
            },
          });
        return Object(b.jsxs)(m.a, {
          client: n,
          children: [t, Object(b.jsx)(p.ReactQueryDevtools, { initialIsOpen: false })],
        });
      }
      var x = n(54),
        y = n(26),
        g = n(56),
        v = n(61),
        k = Object(y.a)({
          reducer: { cartSelected: g.b, transaction: v.a },
          devTools: Boolean(localStorage.getItem('redux-debug')),
        });
      function w(e) {
        var t = e.children;
        return Object(b.jsx)(x.a, { store: k, children: t });
      }
      var z = n(33),
        P = n(48),
        C = n(66),
        S = n(71);
      P.a
        .use(S.a)
        .use(C.e)
        .init({
          fallbackLng: 'id',
          lng: 'id',
          interpolation: { escapeValue: !1 },
          ns: ['common'],
          defaultNS: 'common',
        });
      var q = P.a,
        I = n(55),
        T = n(63),
        D = n(7),
        F = [
          {
            path: '/:action(identitas|pin)?',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(2), n.e(0), n.e(1), n.e(3), n.e(15)]).then(n.bind(null, 352));
            }),
          },
          {
            path: '/dashboard',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(1), n.e(28)]).then(n.bind(null, 365));
            }),
          },
          {
            path: '/dashboard/login',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(3), n.e(8), n.e(14)]).then(n.bind(null, 353));
            }),
          },
          {
            path: '/dashboard/produk',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(25), n.e(19)]).then(n.bind(null, 357));
            }),
          },
          {
            path: '/dashboard/santri',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(6), n.e(5)]).then(n.bind(null, 358));
            }),
          },
          {
            path: '/dashboard/administrator',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(26), n.e(18)]).then(n.bind(null, 359));
            }),
          },
          {
            path: '/dashboard/transaksi/masuk',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(6), n.e(5)]).then(n.bind(null, 358));
            }),
          },
          {
            path: '/dashboard/transaksi/keluar',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(0), n.e(1), n.e(6), n.e(5)]).then(n.bind(null, 358));
            }),
          },
          {
            path: '/dashboard/cek-saldo',
            exact: !0,
            component: Object(a.lazy)(function () {
              return Promise.all([n.e(1), n.e(27)]).then(n.bind(null, 366));
            }),
          },
        ];
      function B() {
        return Object(b.jsx)(T.a, {
          children: Object(b.jsx)(D.c, {
            children: F.map(function (e, t) {
              var n = e.path,
                r = e.exact,
                c = e.component;
              return Object(b.jsx)(
                D.a,
                {
                  path: n,
                  exact: r,
                  render: function (e) {
                    return Object(b.jsx)(a.Suspense, {
                      fallback: Object(b.jsx)(z.f, { label: 'Sedang memuat data...' }),
                      children: Object(b.jsx)(c, Object(I.a)({}, e)),
                    });
                  },
                },
                t
              );
            }),
          }),
        });
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      var L = function (e) {
        e &&
          e instanceof Function &&
          n
            .e(36)
            .then(n.bind(null, 328))
            .then(function (t) {
              var n = t.getCLS,
                a = t.getFID,
                r = t.getFCP,
                c = t.getLCP,
                o = t.getTTFB;
              n(e), a(e), r(e), c(e), o(e);
            });
      };
      n(88), n(89), n(90);
      s.a.locale('id'),
        o.a.render(
          Object(b.jsx)(r.a.StrictMode, {
            children: Object(b.jsx)(a.Suspense, {
              fallback: Object(b.jsx)(z.f, { label: 'Sedang memnuat halaman...' }),
              children: Object(b.jsx)(i.a, {
                i18n: q,
                children: Object(b.jsx)(w, {
                  children: Object(b.jsx)(f, {
                    children: Object(b.jsx)(O, { children: Object(b.jsx)(B, {}) }),
                  }),
                }),
              }),
            }),
          }),
          document.getElementById('root')
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            }),
        L();
    },
  },
  [[91, 10, 11]],
]);
//# sourceMappingURL=main.32ea1d04.chunk.js.map
