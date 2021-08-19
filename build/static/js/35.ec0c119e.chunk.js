(this['webpackJsonpmaqshaf-pkr-web'] = this['webpackJsonpmaqshaf-pkr-web'] || []).push([
  [35],
  {
    326: function (e, t, s) {
      'use strict';
      s.r(t);
      var r = s(356),
        a = s(361),
        n = s(4),
        i = function (e) {
          var t = e.showAlert,
            s = e.setShowAlert,
            i = e.text,
            o = e.severity;
          return Object(n.jsx)(a.a, {
            open: t,
            autoHideDuration: 2e3,
            onClose: function () {
              return s(!1);
            },
            children: Object(n.jsx)(r.a, { severity: o, variant: 'filled', children: i }),
          });
        };
      (i.defaultProps = { severity: 'success' }), (t.default = i);
    },
  },
]);
//# sourceMappingURL=35.ec0c119e.chunk.js.map
