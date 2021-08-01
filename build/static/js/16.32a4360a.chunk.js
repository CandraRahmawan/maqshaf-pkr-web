(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [16],
  {
    298: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(322),
        a = s(326),
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
            children: Object(n.jsx)(r.a, {
              severity: o,
              variant: "filled",
              children: i,
            }),
          });
        };
      (i.defaultProps = { severity: "success" }), (t.default = i);
    },
  },
]);
//# sourceMappingURL=16.32a4360a.chunk.js.map
