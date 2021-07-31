(this["webpackJsonpmaqshaf-pkr-web"] =
  this["webpackJsonpmaqshaf-pkr-web"] || []).push([
  [2],
  {
    303: function (e, t, n) {
      "use strict";
      var o = n(5),
        a = n(1),
        r = n(0),
        i = (n(12), n(27)),
        c = n(31),
        l = n(29),
        s = n(275),
        u = n(128),
        d = Object(u.a)(
          r.createElement("path", {
            d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
          }),
          "SuccessOutlined"
        ),
        m = Object(u.a)(
          r.createElement("path", {
            d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
          }),
          "ReportProblemOutlined"
        ),
        f = Object(u.a)(
          r.createElement("path", {
            d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          "ErrorOutline"
        ),
        p = Object(u.a)(
          r.createElement("path", {
            d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
          }),
          "InfoOutlined"
        ),
        b = Object(u.a)(
          r.createElement("path", {
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          }),
          "Close"
        ),
        g = n(281),
        h = n(48),
        v = {
          success: r.createElement(d, { fontSize: "inherit" }),
          warning: r.createElement(m, { fontSize: "inherit" }),
          error: r.createElement(f, { fontSize: "inherit" }),
          info: r.createElement(p, { fontSize: "inherit" }),
        },
        E = r.createElement(b, { fontSize: "small" }),
        O = r.forwardRef(function (e, t) {
          var n = e.action,
            c = e.children,
            l = e.classes,
            u = e.className,
            d = e.closeText,
            m = void 0 === d ? "Close" : d,
            f = e.color,
            p = e.icon,
            b = e.iconMapping,
            O = void 0 === b ? v : b,
            j = e.onClose,
            C = e.role,
            x = void 0 === C ? "alert" : C,
            L = e.severity,
            w = void 0 === L ? "success" : L,
            y = e.variant,
            k = void 0 === y ? "standard" : y,
            M = Object(o.a)(e, [
              "action",
              "children",
              "classes",
              "className",
              "closeText",
              "color",
              "icon",
              "iconMapping",
              "onClose",
              "role",
              "severity",
              "variant",
            ]);
          return r.createElement(
            s.a,
            Object(a.a)(
              {
                role: x,
                square: !0,
                elevation: 0,
                className: Object(i.a)(
                  l.root,
                  l["".concat(k).concat(Object(h.a)(f || w))],
                  u
                ),
                ref: t,
              },
              M
            ),
            !1 !== p
              ? r.createElement("div", { className: l.icon }, p || O[w] || v[w])
              : null,
            r.createElement("div", { className: l.message }, c),
            null != n
              ? r.createElement("div", { className: l.action }, n)
              : null,
            null == n && j
              ? r.createElement(
                  "div",
                  { className: l.action },
                  r.createElement(
                    g.a,
                    {
                      size: "small",
                      "aria-label": m,
                      title: m,
                      color: "inherit",
                      onClick: j,
                    },
                    E
                  )
                )
              : null
          );
        });
      t.a = Object(l.a)(
        function (e) {
          var t = "light" === e.palette.type ? c.b : c.e,
            n = "light" === e.palette.type ? c.e : c.b;
          return {
            root: Object(a.a)({}, e.typography.body2, {
              borderRadius: e.shape.borderRadius,
              backgroundColor: "transparent",
              display: "flex",
              padding: "6px 16px",
            }),
            standardSuccess: {
              color: t(e.palette.success.main, 0.6),
              backgroundColor: n(e.palette.success.main, 0.9),
              "& $icon": { color: e.palette.success.main },
            },
            standardInfo: {
              color: t(e.palette.info.main, 0.6),
              backgroundColor: n(e.palette.info.main, 0.9),
              "& $icon": { color: e.palette.info.main },
            },
            standardWarning: {
              color: t(e.palette.warning.main, 0.6),
              backgroundColor: n(e.palette.warning.main, 0.9),
              "& $icon": { color: e.palette.warning.main },
            },
            standardError: {
              color: t(e.palette.error.main, 0.6),
              backgroundColor: n(e.palette.error.main, 0.9),
              "& $icon": { color: e.palette.error.main },
            },
            outlinedSuccess: {
              color: t(e.palette.success.main, 0.6),
              border: "1px solid ".concat(e.palette.success.main),
              "& $icon": { color: e.palette.success.main },
            },
            outlinedInfo: {
              color: t(e.palette.info.main, 0.6),
              border: "1px solid ".concat(e.palette.info.main),
              "& $icon": { color: e.palette.info.main },
            },
            outlinedWarning: {
              color: t(e.palette.warning.main, 0.6),
              border: "1px solid ".concat(e.palette.warning.main),
              "& $icon": { color: e.palette.warning.main },
            },
            outlinedError: {
              color: t(e.palette.error.main, 0.6),
              border: "1px solid ".concat(e.palette.error.main),
              "& $icon": { color: e.palette.error.main },
            },
            filledSuccess: {
              color: "#fff",
              fontWeight: e.typography.fontWeightMedium,
              backgroundColor: e.palette.success.main,
            },
            filledInfo: {
              color: "#fff",
              fontWeight: e.typography.fontWeightMedium,
              backgroundColor: e.palette.info.main,
            },
            filledWarning: {
              color: "#fff",
              fontWeight: e.typography.fontWeightMedium,
              backgroundColor: e.palette.warning.main,
            },
            filledError: {
              color: "#fff",
              fontWeight: e.typography.fontWeightMedium,
              backgroundColor: e.palette.error.main,
            },
            icon: {
              marginRight: 12,
              padding: "7px 0",
              display: "flex",
              fontSize: 22,
              opacity: 0.9,
            },
            message: { padding: "8px 0" },
            action: {
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              paddingLeft: 16,
              marginRight: -8,
            },
          };
        },
        { name: "MuiAlert" }
      )(O);
    },
    307: function (e, t, n) {
      "use strict";
      var o = n(5),
        a = n(19),
        r = n(1),
        i = n(0),
        c = (n(12), n(27)),
        l = n(29),
        s = n(55),
        u = n(30),
        d = n(115),
        m = n(114),
        f = n(117);
      function p(e) {
        return e.substring(2).toLowerCase();
      }
      var b = function (e) {
          var t = e.children,
            n = e.disableReactTree,
            o = void 0 !== n && n,
            a = e.mouseEvent,
            r = void 0 === a ? "onClick" : a,
            c = e.onClickAway,
            l = e.touchEvent,
            s = void 0 === l ? "onTouchEnd" : l,
            b = i.useRef(!1),
            g = i.useRef(null),
            h = i.useRef(!1),
            v = i.useRef(!1);
          i.useEffect(function () {
            return (
              setTimeout(function () {
                h.current = !0;
              }, 0),
              function () {
                h.current = !1;
              }
            );
          }, []);
          var E = i.useCallback(function (e) {
              g.current = u.findDOMNode(e);
            }, []),
            O = Object(m.a)(t.ref, E),
            j = Object(f.a)(function (e) {
              var t = v.current;
              if (
                ((v.current = !1),
                h.current &&
                  g.current &&
                  !(function (e) {
                    return (
                      document.documentElement.clientWidth < e.clientX ||
                      document.documentElement.clientHeight < e.clientY
                    );
                  })(e))
              )
                if (b.current) b.current = !1;
                else {
                  var n;
                  if (e.composedPath)
                    n = e.composedPath().indexOf(g.current) > -1;
                  else
                    n =
                      !Object(d.a)(g.current).documentElement.contains(
                        e.target
                      ) || g.current.contains(e.target);
                  n || (!o && t) || c(e);
                }
            }),
            C = function (e) {
              return function (n) {
                v.current = !0;
                var o = t.props[e];
                o && o(n);
              };
            },
            x = { ref: O };
          return (
            !1 !== s && (x[s] = C(s)),
            i.useEffect(
              function () {
                if (!1 !== s) {
                  var e = p(s),
                    t = Object(d.a)(g.current),
                    n = function () {
                      b.current = !0;
                    };
                  return (
                    t.addEventListener(e, j),
                    t.addEventListener("touchmove", n),
                    function () {
                      t.removeEventListener(e, j),
                        t.removeEventListener("touchmove", n);
                    }
                  );
                }
              },
              [j, s]
            ),
            !1 !== r && (x[r] = C(r)),
            i.useEffect(
              function () {
                if (!1 !== r) {
                  var e = p(r),
                    t = Object(d.a)(g.current);
                  return (
                    t.addEventListener(e, j),
                    function () {
                      t.removeEventListener(e, j);
                    }
                  );
                }
              },
              [j, r]
            ),
            i.createElement(i.Fragment, null, i.cloneElement(t, x))
          );
        },
        g = n(48),
        h = n(122),
        v = n(280),
        E = n(275),
        O = n(31),
        j = i.forwardRef(function (e, t) {
          var n = e.action,
            a = e.classes,
            l = e.className,
            s = e.message,
            u = e.role,
            d = void 0 === u ? "alert" : u,
            m = Object(o.a)(e, [
              "action",
              "classes",
              "className",
              "message",
              "role",
            ]);
          return i.createElement(
            E.a,
            Object(r.a)(
              {
                role: d,
                square: !0,
                elevation: 6,
                className: Object(c.a)(a.root, l),
                ref: t,
              },
              m
            ),
            i.createElement("div", { className: a.message }, s),
            n ? i.createElement("div", { className: a.action }, n) : null
          );
        }),
        C = Object(l.a)(
          function (e) {
            var t = "light" === e.palette.type ? 0.8 : 0.98,
              n = Object(O.c)(e.palette.background.default, t);
            return {
              root: Object(r.a)(
                {},
                e.typography.body2,
                Object(a.a)(
                  {
                    color: e.palette.getContrastText(n),
                    backgroundColor: n,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "6px 16px",
                    borderRadius: e.shape.borderRadius,
                    flexGrow: 1,
                  },
                  e.breakpoints.up("sm"),
                  { flexGrow: "initial", minWidth: 288 }
                )
              ),
              message: { padding: "8px 0" },
              action: {
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                paddingLeft: 16,
                marginRight: -8,
              },
            };
          },
          { name: "MuiSnackbarContent" }
        )(j),
        x = i.forwardRef(function (e, t) {
          var n = e.action,
            a = e.anchorOrigin,
            l = (a =
              void 0 === a ? { vertical: "bottom", horizontal: "center" } : a)
              .vertical,
            u = a.horizontal,
            d = e.autoHideDuration,
            m = void 0 === d ? null : d,
            p = e.children,
            E = e.classes,
            O = e.className,
            j = e.ClickAwayListenerProps,
            x = e.ContentProps,
            L = e.disableWindowBlurListener,
            w = void 0 !== L && L,
            y = e.message,
            k = e.onClose,
            M = e.onEnter,
            z = e.onEntered,
            R = e.onEntering,
            T = e.onExit,
            N = e.onExited,
            S = e.onExiting,
            W = e.onMouseEnter,
            A = e.onMouseLeave,
            H = e.open,
            I = e.resumeHideDuration,
            P = e.TransitionComponent,
            $ = void 0 === P ? v.a : P,
            D = e.transitionDuration,
            B =
              void 0 === D
                ? { enter: s.b.enteringScreen, exit: s.b.leavingScreen }
                : D,
            q = e.TransitionProps,
            V = Object(o.a)(e, [
              "action",
              "anchorOrigin",
              "autoHideDuration",
              "children",
              "classes",
              "className",
              "ClickAwayListenerProps",
              "ContentProps",
              "disableWindowBlurListener",
              "message",
              "onClose",
              "onEnter",
              "onEntered",
              "onEntering",
              "onExit",
              "onExited",
              "onExiting",
              "onMouseEnter",
              "onMouseLeave",
              "open",
              "resumeHideDuration",
              "TransitionComponent",
              "transitionDuration",
              "TransitionProps",
            ]),
            G = i.useRef(),
            J = i.useState(!0),
            X = J[0],
            Z = J[1],
            F = Object(f.a)(function () {
              k && k.apply(void 0, arguments);
            }),
            Y = Object(f.a)(function (e) {
              k &&
                null != e &&
                (clearTimeout(G.current),
                (G.current = setTimeout(function () {
                  F(null, "timeout");
                }, e)));
            });
          i.useEffect(
            function () {
              return (
                H && Y(m),
                function () {
                  clearTimeout(G.current);
                }
              );
            },
            [H, m, Y]
          );
          var K = function () {
              clearTimeout(G.current);
            },
            Q = i.useCallback(
              function () {
                null != m && Y(null != I ? I : 0.5 * m);
              },
              [m, I, Y]
            );
          return (
            i.useEffect(
              function () {
                if (!w && H)
                  return (
                    window.addEventListener("focus", Q),
                    window.addEventListener("blur", K),
                    function () {
                      window.removeEventListener("focus", Q),
                        window.removeEventListener("blur", K);
                    }
                  );
              },
              [w, Q, H]
            ),
            !H && X
              ? null
              : i.createElement(
                  b,
                  Object(r.a)(
                    {
                      onClickAway: function (e) {
                        k && k(e, "clickaway");
                      },
                    },
                    j
                  ),
                  i.createElement(
                    "div",
                    Object(r.a)(
                      {
                        className: Object(c.a)(
                          E.root,
                          E[
                            "anchorOrigin"
                              .concat(Object(g.a)(l))
                              .concat(Object(g.a)(u))
                          ],
                          O
                        ),
                        onMouseEnter: function (e) {
                          W && W(e), K();
                        },
                        onMouseLeave: function (e) {
                          A && A(e), Q();
                        },
                        ref: t,
                      },
                      V
                    ),
                    i.createElement(
                      $,
                      Object(r.a)(
                        {
                          appear: !0,
                          in: H,
                          onEnter: Object(h.a)(function () {
                            Z(!1);
                          }, M),
                          onEntered: z,
                          onEntering: R,
                          onExit: T,
                          onExited: Object(h.a)(function () {
                            Z(!0);
                          }, N),
                          onExiting: S,
                          timeout: B,
                          direction: "top" === l ? "down" : "up",
                        },
                        q
                      ),
                      p ||
                        i.createElement(
                          C,
                          Object(r.a)({ message: y, action: n }, x)
                        )
                    )
                  )
                )
          );
        });
      t.a = Object(l.a)(
        function (e) {
          var t = { top: 8 },
            n = { bottom: 8 },
            o = { justifyContent: "flex-end" },
            i = { justifyContent: "flex-start" },
            c = { top: 24 },
            l = { bottom: 24 },
            s = { right: 24 },
            u = { left: 24 },
            d = { left: "50%", right: "auto", transform: "translateX(-50%)" };
          return {
            root: {
              zIndex: e.zIndex.snackbar,
              position: "fixed",
              display: "flex",
              left: 8,
              right: 8,
              justifyContent: "center",
              alignItems: "center",
            },
            anchorOriginTopCenter: Object(r.a)(
              {},
              t,
              Object(a.a)({}, e.breakpoints.up("sm"), Object(r.a)({}, c, d))
            ),
            anchorOriginBottomCenter: Object(r.a)(
              {},
              n,
              Object(a.a)({}, e.breakpoints.up("sm"), Object(r.a)({}, l, d))
            ),
            anchorOriginTopRight: Object(r.a)(
              {},
              t,
              o,
              Object(a.a)(
                {},
                e.breakpoints.up("sm"),
                Object(r.a)({ left: "auto" }, c, s)
              )
            ),
            anchorOriginBottomRight: Object(r.a)(
              {},
              n,
              o,
              Object(a.a)(
                {},
                e.breakpoints.up("sm"),
                Object(r.a)({ left: "auto" }, l, s)
              )
            ),
            anchorOriginTopLeft: Object(r.a)(
              {},
              t,
              i,
              Object(a.a)(
                {},
                e.breakpoints.up("sm"),
                Object(r.a)({ right: "auto" }, c, u)
              )
            ),
            anchorOriginBottomLeft: Object(r.a)(
              {},
              n,
              i,
              Object(a.a)(
                {},
                e.breakpoints.up("sm"),
                Object(r.a)({ right: "auto" }, l, u)
              )
            ),
          };
        },
        { flip: !1, name: "MuiSnackbar" }
      )(x);
    },
  },
]);
//# sourceMappingURL=2.74363275.chunk.js.map
