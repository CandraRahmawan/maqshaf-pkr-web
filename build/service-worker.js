!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"),
    r((r.s = 7));
})([
  function (e, t, r) {
    e.exports = r(6);
  },
  function (e, t, r) {
    "use strict";
    try {
      self["workbox:core:5.1.4"] && _();
    } catch (n) {}
  },
  function (e, t, r) {
    "use strict";
    try {
      self["workbox:precaching:5.1.4"] && _();
    } catch (n) {}
  },
  function (e, t, r) {
    "use strict";
    try {
      self["workbox:routing:5.1.4"] && _();
    } catch (n) {}
  },
  function (e, t, r) {
    "use strict";
    try {
      self["workbox:strategies:5.1.4"] && _();
    } catch (n) {}
  },
  function (e, t, r) {
    "use strict";
    try {
      self["workbox:expiration:5.1.4"] && _();
    } catch (n) {}
  },
  function (e, t, r) {
    var n = (function (e) {
      "use strict";
      var t,
        r = Object.prototype,
        n = r.hasOwnProperty,
        a = "function" === typeof Symbol ? Symbol : {},
        i = a.iterator || "@@iterator",
        c = a.asyncIterator || "@@asyncIterator",
        s = a.toStringTag || "@@toStringTag";
      function o(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        o({}, "");
      } catch (U) {
        o = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function u(e, t, r, n) {
        var a = t && t.prototype instanceof y ? t : y,
          i = Object.create(a.prototype),
          c = new E(n || []);
        return (
          (i._invoke = (function (e, t, r) {
            var n = h;
            return function (a, i) {
              if (n === p) throw new Error("Generator is already running");
              if (n === d) {
                if ("throw" === a) throw i;
                return T();
              }
              for (r.method = a, r.arg = i; ; ) {
                var c = r.delegate;
                if (c) {
                  var s = q(c, r);
                  if (s) {
                    if (s === v) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (n === h) throw ((n = d), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = p;
                var o = f(e, t, r);
                if ("normal" === o.type) {
                  if (((n = r.done ? d : l), o.arg === v)) continue;
                  return { value: o.arg, done: r.done };
                }
                "throw" === o.type &&
                  ((n = d), (r.method = "throw"), (r.arg = o.arg));
              }
            };
          })(e, r, c)),
          i
        );
      }
      function f(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (U) {
          return { type: "throw", arg: U };
        }
      }
      e.wrap = u;
      var h = "suspendedStart",
        l = "suspendedYield",
        p = "executing",
        d = "completed",
        v = {};
      function y() {}
      function m() {}
      function g() {}
      var x = {};
      x[i] = function () {
        return this;
      };
      var b = Object.getPrototypeOf,
        w = b && b(b(O([])));
      w && w !== r && n.call(w, i) && (x = w);
      var k = (g.prototype = y.prototype = Object.create(x));
      function _(e) {
        ["next", "throw", "return"].forEach(function (t) {
          o(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function R(e, t) {
        function r(a, i, c, s) {
          var o = f(e[a], e, i);
          if ("throw" !== o.type) {
            var u = o.arg,
              h = u.value;
            return h && "object" === typeof h && n.call(h, "__await")
              ? t.resolve(h.__await).then(
                  function (e) {
                    r("next", e, c, s);
                  },
                  function (e) {
                    r("throw", e, c, s);
                  }
                )
              : t.resolve(h).then(
                  function (e) {
                    (u.value = e), c(u);
                  },
                  function (e) {
                    return r("throw", e, c, s);
                  }
                );
          }
          s(o.arg);
        }
        var a;
        this._invoke = function (e, n) {
          function i() {
            return new t(function (t, a) {
              r(e, n, t, a);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function q(e, r) {
        var n = e.iterator[r.method];
        if (n === t) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              q(e, r),
              "throw" === r.method)
            )
              return v;
            (r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return v;
        }
        var a = f(n, e.iterator, r.arg);
        if ("throw" === a.type)
          return (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), v;
        var i = a.arg;
        return i
          ? i.done
            ? ((r[e.resultName] = i.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              v)
            : i
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            v);
      }
      function j(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(j, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var r = e[i];
          if (r) return r.call(e);
          if ("function" === typeof e.next) return e;
          if (!isNaN(e.length)) {
            var a = -1,
              c = function r() {
                for (; ++a < e.length; )
                  if (n.call(e, a)) return (r.value = e[a]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (c.next = c);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: t, done: !0 };
      }
      return (
        (m.prototype = k.constructor = g),
        (g.constructor = m),
        (m.displayName = o(g, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" === typeof e && e.constructor;
          return (
            !!t &&
            (t === m || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, g)
              : ((e.__proto__ = g), o(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(k)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        _(R.prototype),
        (R.prototype[c] = function () {
          return this;
        }),
        (e.AsyncIterator = R),
        (e.async = function (t, r, n, a, i) {
          void 0 === i && (i = Promise);
          var c = new R(u(t, r, n, a), i);
          return e.isGeneratorFunction(r)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        _(k),
        o(k, s, "Generator"),
        (k[i] = function () {
          return this;
        }),
        (k.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = O),
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function a(n, a) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (r.next = n),
                a && ((r.method = "next"), (r.arg = t)),
                !!a
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var c = this.tryEntries[i],
                s = c.completion;
              if ("root" === c.tryLoc) return a("end");
              if (c.tryLoc <= this.prev) {
                var o = n.call(c, "catchLoc"),
                  u = n.call(c, "finallyLoc");
                if (o && u) {
                  if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
                  if (this.prev < c.finallyLoc) return a(c.finallyLoc);
                } else if (o) {
                  if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < c.finallyLoc) return a(c.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r];
              if (
                a.tryLoc <= this.prev &&
                n.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var i = a;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var c = i ? i.completion : {};
            return (
              (c.type = e),
              (c.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                : this.complete(c)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              v
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), L(r), v;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  L(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: O(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              v
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = n;
    } catch (a) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function a(e, t) {
      if (e) {
        if ("string" === typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(e, t)
            : void 0
        );
      }
    }
    function i(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return n(e);
        })(e) ||
        (function (e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        a(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    r.r(t);
    r(1);
    function c(e, t) {
      var r;
      if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (r = a(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          r && (e = r);
          var n = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var c,
        s = !0,
        o = !1;
      return {
        s: function () {
          r = e[Symbol.iterator]();
        },
        n: function () {
          var e = r.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (o = !0), (c = e);
        },
        f: function () {
          try {
            s || null == r.return || r.return();
          } finally {
            if (o) throw c;
          }
        },
      };
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      return (o =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function u(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && o(e, t);
    }
    function f(e) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function h() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function l(e) {
      return (l =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function p(e, t) {
      return !t || ("object" !== l(t) && "function" !== typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function d(e) {
      var t = h();
      return function () {
        var r,
          n = f(e);
        if (t) {
          var a = f(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return p(this, r);
      };
    }
    function v(e, t, r) {
      return (v = h()
        ? Reflect.construct
        : function (e, t, r) {
            var n = [null];
            n.push.apply(n, t);
            var a = new (Function.bind.apply(e, n))();
            return r && o(a, r.prototype), a;
          }).apply(null, arguments);
    }
    function y(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (y = function (e) {
        if (
          null === e ||
          ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
        )
          return e;
        var r;
        if ("function" !== typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if ("undefined" !== typeof t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }
        function n() {
          return v(e, arguments, f(this).constructor);
        }
        return (
          (n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          o(n, e)
        );
      })(e);
    }
    var m = function (e) {
        for (
          var t = e,
            r = arguments.length,
            n = new Array(r > 1 ? r - 1 : 0),
            a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return n.length > 0 && (t += " :: ".concat(JSON.stringify(n))), t;
      },
      g = (function (e) {
        u(r, e);
        var t = d(r);
        function r(e, n) {
          var a;
          s(this, r);
          var i = m(e, n);
          return ((a = t.call(this, i)).name = e), (a.details = n), a;
        }
        return r;
      })(y(Error)),
      x = new Set();
    function b(e) {
      x.add(e);
    }
    var w = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" !== typeof registration ? registration.scope : "",
      },
      k = function (e) {
        return [w.prefix, e, w.suffix]
          .filter(function (e) {
            return e && e.length > 0;
          })
          .join("-");
      },
      _ = function (e) {
        return e || k(w.precache);
      },
      R = function (e) {
        return e || k(w.runtime);
      },
      q = r(0),
      j = r.n(q);
    function L(e, t, r, n, a, i, c) {
      try {
        var s = e[i](c),
          o = s.value;
      } catch (u) {
        return void r(u);
      }
      s.done ? t(o) : Promise.resolve(o).then(n, a);
    }
    function E(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = e.apply(t, r);
          function c(e) {
            L(i, n, a, c, s, "next", e);
          }
          function s(e) {
            L(i, n, a, c, s, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function O() {
      return T.apply(this, arguments);
    }
    function T() {
      return (T = E(
        j.a.mark(function e() {
          var t, r, n;
          return j.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    0, (t = c(x)), (e.prev = 2), t.s();
                  case 4:
                    if ((r = t.n()).done) {
                      e.next = 11;
                      break;
                    }
                    return (n = r.value), (e.next = 8), n();
                  case 8:
                    0;
                  case 9:
                    e.next = 4;
                    break;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(2)), t.e(e.t0);
                  case 16:
                    return (e.prev = 16), t.f(), e.finish(16);
                  case 19:
                    0;
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 13, 16, 19]]
          );
        })
      )).apply(this, arguments);
    }
    var U,
      S = function (e) {
        return new URL(String(e), location.href).href.replace(
          new RegExp("^".concat(location.origin)),
          ""
        );
      },
      N = function (e, t) {
        return e.filter(function (e) {
          return t in e;
        });
      },
      A = (function () {
        var e = E(
          j.a.mark(function e(t) {
            var r, n, a, i, s, o, u, f;
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = t.request),
                        (n = t.mode),
                        (a = t.plugins),
                        (i = N(void 0 === a ? [] : a, "cacheKeyWillBeUsed")),
                        (s = r),
                        (o = c(i)),
                        (e.prev = 4),
                        o.s();
                    case 6:
                      if ((u = o.n()).done) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (f = u.value),
                        (e.next = 10),
                        f.cacheKeyWillBeUsed.call(f, { mode: n, request: s })
                      );
                    case 10:
                      "string" === typeof (s = e.sent) && (s = new Request(s));
                    case 13:
                      e.next = 6;
                      break;
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(4)), o.e(e.t0);
                    case 20:
                      return (e.prev = 20), o.f(), e.finish(20);
                    case 23:
                      return e.abrupt("return", s);
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 17, 20, 23]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      M = (function () {
        var e = E(
          j.a.mark(function e(t) {
            var r, n, a, i, s, o, u, f, h, l;
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = t.request),
                        (n = t.response),
                        (a = t.event),
                        (i = t.plugins),
                        (s = n),
                        (o = !1),
                        (u = c(void 0 === i ? [] : i)),
                        (e.prev = 4),
                        u.s();
                    case 6:
                      if ((f = u.n()).done) {
                        e.next = 19;
                        break;
                      }
                      if (!("cacheWillUpdate" in (h = f.value))) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (o = !0),
                        (l = h.cacheWillUpdate),
                        (e.next = 13),
                        l.call(h, { request: r, response: s, event: a })
                      );
                    case 13:
                      if ((s = e.sent)) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt("break", 19);
                    case 17:
                      e.next = 6;
                      break;
                    case 19:
                      e.next = 24;
                      break;
                    case 21:
                      (e.prev = 21), (e.t0 = e.catch(4)), u.e(e.t0);
                    case 24:
                      return (e.prev = 24), u.f(), e.finish(24);
                    case 27:
                      return (
                        o || (s = s && 200 === s.status ? s : void 0),
                        e.abrupt("return", s || null)
                      );
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 21, 24, 27]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      C = (function () {
        var e = E(
          j.a.mark(function e(t) {
            var r, n, a, i, s, o, u, f, h, l, p, d, v;
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.cacheName),
                        (n = t.request),
                        (a = t.event),
                        (i = t.matchOptions),
                        (s = t.plugins),
                        (o = void 0 === s ? [] : s),
                        (e.next = 3),
                        self.caches.open(r)
                      );
                    case 3:
                      return (
                        (u = e.sent),
                        (e.next = 6),
                        A({ plugins: o, request: n, mode: "read" })
                      );
                    case 6:
                      return (f = e.sent), (e.next = 9), u.match(f, i);
                    case 9:
                      (h = e.sent), (l = c(o)), (e.prev = 12), l.s();
                    case 14:
                      if ((p = l.n()).done) {
                        e.next = 24;
                        break;
                      }
                      if (!("cachedResponseWillBeUsed" in (d = p.value))) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (v = d.cachedResponseWillBeUsed),
                        (e.next = 20),
                        v.call(d, {
                          cacheName: r,
                          event: a,
                          matchOptions: i,
                          cachedResponse: h,
                          request: f,
                        })
                      );
                    case 20:
                      h = e.sent;
                    case 22:
                      e.next = 14;
                      break;
                    case 24:
                      e.next = 29;
                      break;
                    case 26:
                      (e.prev = 26), (e.t0 = e.catch(12)), l.e(e.t0);
                    case 29:
                      return (e.prev = 29), l.f(), e.finish(29);
                    case 32:
                      return e.abrupt("return", h);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[12, 26, 29, 32]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      P = {
        put: (function () {
          var e = E(
            j.a.mark(function e(t) {
              var r, n, a, i, s, o, u, f, h, l, p, d, v, y, m;
              return j.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = t.cacheName),
                          (n = t.request),
                          (a = t.response),
                          (i = t.event),
                          (s = t.plugins),
                          (o = void 0 === s ? [] : s),
                          (u = t.matchOptions),
                          (e.next = 4);
                        break;
                      case 4:
                        return (
                          (e.next = 6),
                          A({ plugins: o, request: n, mode: "write" })
                        );
                      case 6:
                        if (((f = e.sent), a)) {
                          e.next = 10;
                          break;
                        }
                        throw new g("cache-put-with-no-response", {
                          url: S(f.url),
                        });
                      case 10:
                        return (
                          (e.next = 12),
                          M({ event: i, plugins: o, response: a, request: f })
                        );
                      case 12:
                        if ((h = e.sent)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("return");
                      case 16:
                        return (e.next = 18), self.caches.open(r);
                      case 18:
                        if (
                          ((l = e.sent),
                          !((p = N(o, "cacheDidUpdate")).length > 0))
                        ) {
                          e.next = 26;
                          break;
                        }
                        return (
                          (e.next = 23),
                          C({ cacheName: r, matchOptions: u, request: f })
                        );
                      case 23:
                        (e.t0 = e.sent), (e.next = 27);
                        break;
                      case 26:
                        e.t0 = null;
                      case 27:
                        return (
                          (d = e.t0), (e.prev = 29), (e.next = 32), l.put(f, h)
                        );
                      case 32:
                        e.next = 40;
                        break;
                      case 34:
                        if (
                          ((e.prev = 34),
                          (e.t1 = e.catch(29)),
                          "QuotaExceededError" !== e.t1.name)
                        ) {
                          e.next = 39;
                          break;
                        }
                        return (e.next = 39), O();
                      case 39:
                        throw e.t1;
                      case 40:
                        (v = c(p)), (e.prev = 41), v.s();
                      case 43:
                        if ((y = v.n()).done) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (m = y.value),
                          (e.next = 47),
                          m.cacheDidUpdate.call(m, {
                            cacheName: r,
                            event: i,
                            oldResponse: d,
                            newResponse: h,
                            request: f,
                          })
                        );
                      case 47:
                        e.next = 43;
                        break;
                      case 49:
                        e.next = 54;
                        break;
                      case 51:
                        (e.prev = 51), (e.t2 = e.catch(41)), v.e(e.t2);
                      case 54:
                        return (e.prev = 54), v.f(), e.finish(54);
                      case 57:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [29, 34],
                  [41, 51, 54, 57],
                ]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        match: C,
      };
    function K() {
      if (void 0 === U) {
        var e = new Response("");
        if ("body" in e)
          try {
            new Response(e.body), (U = !0);
          } catch (t) {
            U = !1;
          }
        U = !1;
      }
      return U;
    }
    function I(e) {
      e.then(function () {});
    }
    function D(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
            var r = [],
              n = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var c, s = e[Symbol.iterator]();
                !(n = (c = s.next()).done) &&
                (r.push(c.value), !t || r.length !== t);
                n = !0
              );
            } catch (o) {
              (a = !0), (i = o);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (a) throw i;
              }
            }
            return r;
          }
        })(e, t) ||
        a(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function W(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function F(e, t, r) {
      return t && W(e.prototype, t), r && W(e, r), e;
    }
    var H = (function () {
      function e(t, r) {
        var n = this,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = a.onupgradeneeded,
          c = a.onversionchange;
        s(this, e),
          (this._db = null),
          (this._name = t),
          (this._version = r),
          (this._onupgradeneeded = i),
          (this._onversionchange =
            c ||
            function () {
              return n.close();
            });
      }
      return (
        F(e, [
          {
            key: "db",
            get: function () {
              return this._db;
            },
          },
          {
            key: "open",
            value: (function () {
              var e = E(
                j.a.mark(function e() {
                  var t = this;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this._db) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.next = 4),
                              new Promise(function (e, r) {
                                var n = !1;
                                setTimeout(function () {
                                  (n = !0),
                                    r(
                                      new Error(
                                        "The open request was blocked and timed out"
                                      )
                                    );
                                }, t.OPEN_TIMEOUT);
                                var a = indexedDB.open(t._name, t._version);
                                (a.onerror = function () {
                                  return r(a.error);
                                }),
                                  (a.onupgradeneeded = function (e) {
                                    n
                                      ? (a.transaction.abort(),
                                        a.result.close())
                                      : "function" ===
                                          typeof t._onupgradeneeded &&
                                        t._onupgradeneeded(e);
                                  }),
                                  (a.onsuccess = function () {
                                    var r = a.result;
                                    n
                                      ? r.close()
                                      : ((r.onversionchange =
                                          t._onversionchange.bind(t)),
                                        e(r));
                                  });
                              })
                            );
                          case 4:
                            return (
                              (this._db = e.sent), e.abrupt("return", this)
                            );
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getKey",
            value: (function () {
              var e = E(
                j.a.mark(function e(t, r) {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.getAllKeys(t, r, 1);
                          case 2:
                            return e.abrupt("return", e.sent[0]);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAll",
            value: (function () {
              var e = E(
                j.a.mark(function e(t, r, n) {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              this.getAllMatching(t, { query: r, count: n })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAllKeys",
            value: (function () {
              var e = E(
                j.a.mark(function e(t, r, n) {
                  var a;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              this.getAllMatching(t, {
                                query: r,
                                count: n,
                                includeKeys: !0,
                              })
                            );
                          case 2:
                            return (
                              (a = e.sent),
                              e.abrupt(
                                "return",
                                a.map(function (e) {
                                  return e.key;
                                })
                              )
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "getAllMatching",
            value: (function () {
              var e = E(
                j.a.mark(function e(t) {
                  var r,
                    n,
                    a,
                    i,
                    c,
                    s,
                    o,
                    u,
                    f,
                    h = arguments;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = h.length > 1 && void 0 !== h[1] ? h[1] : {}),
                              (n = r.index),
                              (a = r.query),
                              (i = void 0 === a ? null : a),
                              (c = r.direction),
                              (s = void 0 === c ? "next" : c),
                              (o = r.count),
                              (u = r.includeKeys),
                              (f = void 0 !== u && u),
                              (e.next = 3),
                              this.transaction(
                                [t],
                                "readonly",
                                function (e, r) {
                                  var a = e.objectStore(t),
                                    c = n ? a.index(n) : a,
                                    u = [],
                                    h = c.openCursor(i, s);
                                  h.onsuccess = function () {
                                    var e = h.result;
                                    e
                                      ? (u.push(f ? e : e.value),
                                        o && u.length >= o
                                          ? r(u)
                                          : e.continue())
                                      : r(u);
                                  };
                                }
                              )
                            );
                          case 3:
                            return e.abrupt("return", e.sent);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "transaction",
            value: (function () {
              var e = E(
                j.a.mark(function e(t, r, n) {
                  var a = this;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.open();
                          case 2:
                            return (
                              (e.next = 4),
                              new Promise(function (e, i) {
                                var c = a._db.transaction(t, r);
                                (c.onabort = function () {
                                  return i(c.error);
                                }),
                                  (c.oncomplete = function () {
                                    return e();
                                  }),
                                  n(c, function (t) {
                                    return e(t);
                                  });
                              })
                            );
                          case 4:
                            return e.abrupt("return", e.sent);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_call",
            value: (function () {
              var e = E(
                j.a.mark(function e(t, r, n) {
                  var a,
                    i,
                    c,
                    s,
                    o = arguments;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              a = o.length,
                                i = new Array(a > 3 ? a - 3 : 0),
                                c = 3;
                              c < a;
                              c++
                            )
                              i[c - 3] = o[c];
                            return (
                              (s = function (e, n) {
                                var a = e.objectStore(r),
                                  c = a[t].apply(a, i);
                                c.onsuccess = function () {
                                  return n(c.result);
                                };
                              }),
                              (e.next = 4),
                              this.transaction([r], n, s)
                            );
                          case 4:
                            return e.abrupt("return", e.sent);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function (t, r, n) {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "close",
            value: function () {
              this._db && (this._db.close(), (this._db = null));
            },
          },
        ]),
        e
      );
    })();
    H.prototype.OPEN_TIMEOUT = 2e3;
    for (
      var B = function () {
          var e,
            t = D(Q[G], 2),
            r = t[0],
            n = c(t[1]);
          try {
            var a = function () {
              var t = e.value;
              (t in IDBObjectStore.prototype) &&
                (H.prototype[t] = (function () {
                  var e = E(
                    j.a.mark(function e(n) {
                      var a,
                        i,
                        c,
                        s = arguments;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  a = s.length,
                                    i = new Array(a > 1 ? a - 1 : 0),
                                    c = 1;
                                  c < a;
                                  c++
                                )
                                  i[c - 1] = s[c];
                                return (
                                  (e.next = 3),
                                  this._call.apply(this, [t, n, r].concat(i))
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })());
            };
            for (n.s(); !(e = n.n()).done; ) a();
          } catch (i) {
            n.e(i);
          } finally {
            n.f();
          }
        },
        G = 0,
        Q = Object.entries({
          readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
          readwrite: ["add", "put", "clear", "delete"],
        });
      G < Q.length;
      G++
    )
      B();
    var Y = (function () {
        var e = E(
          j.a.mark(function e(t) {
            return j.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e, r) {
                        var n = indexedDB.deleteDatabase(t);
                        (n.onerror = function () {
                          r(n.error);
                        }),
                          (n.onblocked = function () {
                            r(new Error("Delete blocked"));
                          }),
                          (n.onsuccess = function () {
                            e();
                          });
                      })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      $ = {
        fetch: (function () {
          var e = E(
            j.a.mark(function e(t) {
              var r, n, a, i, s, o, u, f, h, l, p, d, v, y, m, x, b, w, k, _, R;
              return j.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.request),
                          (n = t.fetchOptions),
                          (a = t.event),
                          (i = t.plugins),
                          (s = void 0 === i ? [] : i),
                          "string" === typeof r && (r = new Request(r)),
                          !(a instanceof FetchEvent && a.preloadResponse))
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 5), a.preloadResponse;
                      case 5:
                        if (!(o = e.sent)) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", o);
                      case 9:
                        0,
                          (u = N(s, "fetchDidFail")),
                          (f = u.length > 0 ? r.clone() : null),
                          (e.prev = 12),
                          (h = c(s)),
                          (e.prev = 14),
                          h.s();
                      case 16:
                        if ((l = h.n()).done) {
                          e.next = 27;
                          break;
                        }
                        if (!("requestWillFetch" in (p = l.value))) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (d = p.requestWillFetch),
                          (v = r.clone()),
                          (e.next = 23),
                          d.call(p, { request: v, event: a })
                        );
                      case 23:
                        r = e.sent;
                      case 25:
                        e.next = 16;
                        break;
                      case 27:
                        e.next = 32;
                        break;
                      case 29:
                        (e.prev = 29), (e.t0 = e.catch(14)), h.e(e.t0);
                      case 32:
                        return (e.prev = 32), h.f(), e.finish(32);
                      case 35:
                        e.next = 40;
                        break;
                      case 37:
                        throw (
                          ((e.prev = 37),
                          (e.t1 = e.catch(12)),
                          new g("plugin-error-request-will-fetch", {
                            thrownError: e.t1,
                          }))
                        );
                      case 40:
                        if (
                          ((y = r.clone()),
                          (e.prev = 41),
                          "navigate" !== r.mode)
                        ) {
                          e.next = 48;
                          break;
                        }
                        return (e.next = 45), fetch(r);
                      case 45:
                        (m = e.sent), (e.next = 51);
                        break;
                      case 48:
                        return (e.next = 50), fetch(r, n);
                      case 50:
                        m = e.sent;
                      case 51:
                        0, (x = c(s)), (e.prev = 53), x.s();
                      case 55:
                        if ((b = x.n()).done) {
                          e.next = 64;
                          break;
                        }
                        if (!("fetchDidSucceed" in (w = b.value))) {
                          e.next = 62;
                          break;
                        }
                        return (
                          (e.next = 60),
                          w.fetchDidSucceed.call(w, {
                            event: a,
                            request: y,
                            response: m,
                          })
                        );
                      case 60:
                        m = e.sent;
                      case 62:
                        e.next = 55;
                        break;
                      case 64:
                        e.next = 69;
                        break;
                      case 66:
                        (e.prev = 66), (e.t2 = e.catch(53)), x.e(e.t2);
                      case 69:
                        return (e.prev = 69), x.f(), e.finish(69);
                      case 72:
                        return e.abrupt("return", m);
                      case 75:
                        (e.prev = 75),
                          (e.t3 = e.catch(41)),
                          (k = c(u)),
                          (e.prev = 79),
                          k.s();
                      case 81:
                        if ((_ = k.n()).done) {
                          e.next = 87;
                          break;
                        }
                        return (
                          (R = _.value),
                          (e.next = 85),
                          R.fetchDidFail.call(R, {
                            error: e.t3,
                            event: a,
                            originalRequest: f.clone(),
                            request: y.clone(),
                          })
                        );
                      case 85:
                        e.next = 81;
                        break;
                      case 87:
                        e.next = 92;
                        break;
                      case 89:
                        (e.prev = 89), (e.t4 = e.catch(79)), k.e(e.t4);
                      case 92:
                        return (e.prev = 92), k.f(), e.finish(92);
                      case 95:
                        throw e.t3;
                      case 96:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [12, 37],
                  [14, 29, 32, 35],
                  [41, 75],
                  [53, 66, 69, 72],
                  [79, 89, 92, 95],
                ]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      };
    function J(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (V = E(
        j.a.mark(function e(t, r) {
          var n, a, i, c;
          return j.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((n = t.clone()),
                    (a = {
                      headers: new Headers(n.headers),
                      status: n.status,
                      statusText: n.statusText,
                    }),
                    (i = r ? r(a) : a),
                    !K())
                  ) {
                    e.next = 7;
                    break;
                  }
                  (e.t0 = n.body), (e.next = 10);
                  break;
                case 7:
                  return (e.next = 9), n.blob();
                case 9:
                  e.t0 = e.sent;
                case 10:
                  return (c = e.t0), e.abrupt("return", new Response(c, i));
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    r(5);
    var z = "cache-entries",
      X = function (e) {
        var t = new URL(e, location.href);
        return (t.hash = ""), t.href;
      },
      Z = (function () {
        function e(t) {
          var r = this;
          s(this, e),
            (this._cacheName = t),
            (this._db = new H("workbox-expiration", 1, {
              onupgradeneeded: function (e) {
                return r._handleUpgrade(e);
              },
            }));
        }
        return (
          F(e, [
            {
              key: "_handleUpgrade",
              value: function (e) {
                var t = e.target.result.createObjectStore(z, { keyPath: "id" });
                t.createIndex("cacheName", "cacheName", { unique: !1 }),
                  t.createIndex("timestamp", "timestamp", { unique: !1 }),
                  Y(this._cacheName);
              },
            },
            {
              key: "setTimestamp",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t, r) {
                    var n;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = X(t)),
                                (n = {
                                  url: t,
                                  timestamp: r,
                                  cacheName: this._cacheName,
                                  id: this._getId(t),
                                }),
                                (e.next = 4),
                                this._db.put(z, n)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTimestamp",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this._db.get(z, this._getId(t))
                              );
                            case 2:
                              return (
                                (r = e.sent), e.abrupt("return", r.timestamp)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "expireEntries",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t, r) {
                    var n,
                      a,
                      i,
                      s,
                      o,
                      u = this;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this._db.transaction(
                                  z,
                                  "readwrite",
                                  function (e, n) {
                                    var a = e
                                        .objectStore(z)
                                        .index("timestamp")
                                        .openCursor(null, "prev"),
                                      i = [],
                                      c = 0;
                                    a.onsuccess = function () {
                                      var e = a.result;
                                      if (e) {
                                        var s = e.value;
                                        s.cacheName === u._cacheName &&
                                          ((t && s.timestamp < t) ||
                                          (r && c >= r)
                                            ? i.push(e.value)
                                            : c++),
                                          e.continue();
                                      } else n(i);
                                    };
                                  }
                                )
                              );
                            case 2:
                              (n = e.sent),
                                (a = []),
                                (i = c(n)),
                                (e.prev = 5),
                                i.s();
                            case 7:
                              if ((s = i.n()).done) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (o = s.value),
                                (e.next = 11),
                                this._db.delete(z, o.id)
                              );
                            case 11:
                              a.push(o.url);
                            case 12:
                              e.next = 7;
                              break;
                            case 14:
                              e.next = 19;
                              break;
                            case 16:
                              (e.prev = 16), (e.t0 = e.catch(5)), i.e(e.t0);
                            case 19:
                              return (e.prev = 19), i.f(), e.finish(19);
                            case 22:
                              return e.abrupt("return", a);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[5, 16, 19, 22]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getId",
              value: function (e) {
                return this._cacheName + "|" + X(e);
              },
            },
          ]),
          e
        );
      })(),
      ee = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          s(this, e),
            (this._isRunning = !1),
            (this._rerunRequested = !1),
            (this._maxEntries = r.maxEntries),
            (this._maxAgeSeconds = r.maxAgeSeconds),
            (this._cacheName = t),
            (this._timestampModel = new Z(t));
        }
        return (
          F(e, [
            {
              key: "expireEntries",
              value: (function () {
                var e = E(
                  j.a.mark(function e() {
                    var t, r, n, a, i, s;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isRunning) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (this._rerunRequested = !0), e.abrupt("return")
                              );
                            case 3:
                              return (
                                (this._isRunning = !0),
                                (t = this._maxAgeSeconds
                                  ? Date.now() - 1e3 * this._maxAgeSeconds
                                  : 0),
                                (e.next = 7),
                                this._timestampModel.expireEntries(
                                  t,
                                  this._maxEntries
                                )
                              );
                            case 7:
                              return (
                                (r = e.sent),
                                (e.next = 10),
                                self.caches.open(this._cacheName)
                              );
                            case 10:
                              (n = e.sent), (a = c(r)), (e.prev = 12), a.s();
                            case 14:
                              if ((i = a.n()).done) {
                                e.next = 20;
                                break;
                              }
                              return (s = i.value), (e.next = 18), n.delete(s);
                            case 18:
                              e.next = 14;
                              break;
                            case 20:
                              e.next = 25;
                              break;
                            case 22:
                              (e.prev = 22), (e.t0 = e.catch(12)), a.e(e.t0);
                            case 25:
                              return (e.prev = 25), a.f(), e.finish(25);
                            case 28:
                              0,
                                (this._isRunning = !1),
                                this._rerunRequested &&
                                  ((this._rerunRequested = !1),
                                  I(this.expireEntries()));
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 22, 25, 28]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "updateTimestamp",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 3),
                                this._timestampModel.setTimestamp(t, Date.now())
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isURLExpired",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r, n;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._maxAgeSeconds) {
                                e.next = 6;
                                break;
                              }
                              e.next = 3;
                              break;
                            case 3:
                              return e.abrupt("return", !1);
                            case 6:
                              return (
                                (e.next = 8),
                                this._timestampModel.getTimestamp(t)
                              );
                            case 8:
                              return (
                                (r = e.sent),
                                (n = Date.now() - 1e3 * this._maxAgeSeconds),
                                e.abrupt("return", r < n)
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "delete",
              value: (function () {
                var e = E(
                  j.a.mark(function e() {
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._rerunRequested = !1),
                                (e.next = 3),
                                this._timestampModel.expireEntries(1 / 0)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      te = (function () {
        function e() {
          var t = this,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          s(this, e),
            (this.cachedResponseWillBeUsed = (function () {
              var e = E(
                j.a.mark(function e(r) {
                  var n, a, i, c, s, o, u;
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = r.event),
                            (a = r.request),
                            (i = r.cacheName),
                            (c = r.cachedResponse))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", null);
                        case 3:
                          if (
                            ((s = t._isResponseDateFresh(c)),
                            I((o = t._getCacheExpiration(i)).expireEntries()),
                            (u = o.updateTimestamp(a.url)),
                            n)
                          )
                            try {
                              n.waitUntil(u);
                            } catch (f) {
                              0;
                            }
                          return e.abrupt("return", s ? c : null);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.cacheDidUpdate = (function () {
              var e = E(
                j.a.mark(function e(r) {
                  var n, a, i;
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = r.cacheName),
                            (a = r.request),
                            (i = t._getCacheExpiration(n)),
                            (e.next = 5),
                            i.updateTimestamp(a.url)
                          );
                        case 5:
                          return (e.next = 7), i.expireEntries();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this._config = r),
            (this._maxAgeSeconds = r.maxAgeSeconds),
            (this._cacheExpirations = new Map()),
            r.purgeOnQuotaError &&
              b(function () {
                return t.deleteCacheAndMetadata();
              });
        }
        return (
          F(e, [
            {
              key: "_getCacheExpiration",
              value: function (e) {
                if (e === R()) throw new g("expire-custom-caches-only");
                var t = this._cacheExpirations.get(e);
                return (
                  t ||
                    ((t = new ee(e, this._config)),
                    this._cacheExpirations.set(e, t)),
                  t
                );
              },
            },
            {
              key: "_isResponseDateFresh",
              value: function (e) {
                if (!this._maxAgeSeconds) return !0;
                var t = this._getDateHeaderTimestamp(e);
                return (
                  null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                );
              },
            },
            {
              key: "_getDateHeaderTimestamp",
              value: function (e) {
                if (!e.headers.has("date")) return null;
                var t = e.headers.get("date"),
                  r = new Date(t).getTime();
                return isNaN(r) ? null : r;
              },
            },
            {
              key: "deleteCacheAndMetadata",
              value: (function () {
                var e = E(
                  j.a.mark(function e() {
                    var t, r, n, a, i;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = c(this._cacheExpirations)),
                                (e.prev = 1),
                                t.s();
                            case 3:
                              if ((r = t.n()).done) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (n = D(r.value, 2)),
                                (a = n[0]),
                                (i = n[1]),
                                (e.next = 7),
                                self.caches.delete(a)
                              );
                            case 7:
                              return (e.next = 9), i.delete();
                            case 9:
                              e.next = 3;
                              break;
                            case 11:
                              e.next = 16;
                              break;
                            case 13:
                              (e.prev = 13), (e.t0 = e.catch(1)), t.e(e.t0);
                            case 16:
                              return (e.prev = 16), t.f(), e.finish(16);
                            case 19:
                              this._cacheExpirations = new Map();
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 13, 16, 19]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      re = (r(2), []),
      ne = function () {
        return re;
      };
    function ae(e) {
      if (!e) throw new g("add-to-cache-list-unexpected-type", { entry: e });
      if ("string" === typeof e) {
        var t = new URL(e, location.href);
        return { cacheKey: t.href, url: t.href };
      }
      var r = e.revision,
        n = e.url;
      if (!n) throw new g("add-to-cache-list-unexpected-type", { entry: e });
      if (!r) {
        var a = new URL(n, location.href);
        return { cacheKey: a.href, url: a.href };
      }
      var i = new URL(n, location.href),
        c = new URL(n, location.href);
      return (
        i.searchParams.set("__WB_REVISION__", r),
        { cacheKey: i.href, url: c.href }
      );
    }
    var ie,
      ce = (function () {
        function e(t) {
          s(this, e),
            (this._cacheName = _(t)),
            (this._urlsToCacheKeys = new Map()),
            (this._urlsToCacheModes = new Map()),
            (this._cacheKeysToIntegrities = new Map());
        }
        return (
          F(e, [
            {
              key: "addToCacheList",
              value: function (e) {
                var t,
                  r = [],
                  n = c(e);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value;
                    "string" === typeof a
                      ? r.push(a)
                      : a && void 0 === a.revision && r.push(a.url);
                    var i = ae(a),
                      s = i.cacheKey,
                      o = i.url,
                      u =
                        "string" !== typeof a && a.revision
                          ? "reload"
                          : "default";
                    if (
                      this._urlsToCacheKeys.has(o) &&
                      this._urlsToCacheKeys.get(o) !== s
                    )
                      throw new g("add-to-cache-list-conflicting-entries", {
                        firstEntry: this._urlsToCacheKeys.get(o),
                        secondEntry: s,
                      });
                    if ("string" !== typeof a && a.integrity) {
                      if (
                        this._cacheKeysToIntegrities.has(s) &&
                        this._cacheKeysToIntegrities.get(s) !== a.integrity
                      )
                        throw new g(
                          "add-to-cache-list-conflicting-integrities",
                          { url: o }
                        );
                      this._cacheKeysToIntegrities.set(s, a.integrity);
                    }
                    if (
                      (this._urlsToCacheKeys.set(o, s),
                      this._urlsToCacheModes.set(o, u),
                      r.length > 0)
                    ) {
                      var f =
                        "Workbox is precaching URLs without revision " +
                        "info: ".concat(
                          r.join(", "),
                          "\nThis is generally NOT safe. "
                        ) +
                        "Learn more at https://bit.ly/wb-precache";
                      console.warn(f);
                    }
                  }
                } catch (h) {
                  n.e(h);
                } finally {
                  n.f();
                }
              },
            },
            {
              key: "install",
              value: (function () {
                var e = E(
                  j.a.mark(function e() {
                    var t,
                      r,
                      n,
                      a,
                      i,
                      s,
                      o,
                      u,
                      f,
                      h,
                      l,
                      p,
                      d,
                      v,
                      y,
                      m = this,
                      g = arguments;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t =
                                  g.length > 0 && void 0 !== g[0] ? g[0] : {}),
                                (r = t.event),
                                (n = t.plugins),
                                (a = []),
                                (i = []),
                                (e.next = 6),
                                self.caches.open(this._cacheName)
                              );
                            case 6:
                              return (s = e.sent), (e.next = 9), s.keys();
                            case 9:
                              (o = e.sent),
                                (u = new Set(
                                  o.map(function (e) {
                                    return e.url;
                                  })
                                )),
                                (f = c(this._urlsToCacheKeys));
                              try {
                                for (f.s(); !(h = f.n()).done; )
                                  (l = D(h.value, 2)),
                                    (p = l[0]),
                                    (d = l[1]),
                                    u.has(d)
                                      ? i.push(p)
                                      : a.push({ cacheKey: d, url: p });
                              } catch (x) {
                                f.e(x);
                              } finally {
                                f.f();
                              }
                              return (
                                (v = a.map(function (e) {
                                  var t = e.cacheKey,
                                    a = e.url,
                                    i = m._cacheKeysToIntegrities.get(t),
                                    c = m._urlsToCacheModes.get(a);
                                  return m._addURLToCache({
                                    cacheKey: t,
                                    cacheMode: c,
                                    event: r,
                                    integrity: i,
                                    plugins: n,
                                    url: a,
                                  });
                                })),
                                (e.next = 16),
                                Promise.all(v)
                              );
                            case 16:
                              return (
                                (y = a.map(function (e) {
                                  return e.url;
                                })),
                                e.abrupt("return", {
                                  updatedURLs: y,
                                  notUpdatedURLs: i,
                                })
                              );
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "activate",
              value: (function () {
                var e = E(
                  j.a.mark(function e() {
                    var t, r, n, a, i, s, o;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), self.caches.open(this._cacheName)
                              );
                            case 2:
                              return (t = e.sent), (e.next = 5), t.keys();
                            case 5:
                              (r = e.sent),
                                (n = new Set(this._urlsToCacheKeys.values())),
                                (a = []),
                                (i = c(r)),
                                (e.prev = 9),
                                i.s();
                            case 11:
                              if ((s = i.n()).done) {
                                e.next = 19;
                                break;
                              }
                              if (((o = s.value), n.has(o.url))) {
                                e.next = 17;
                                break;
                              }
                              return (e.next = 16), t.delete(o);
                            case 16:
                              a.push(o.url);
                            case 17:
                              e.next = 11;
                              break;
                            case 19:
                              e.next = 24;
                              break;
                            case 21:
                              (e.prev = 21), (e.t0 = e.catch(9)), i.e(e.t0);
                            case 24:
                              return (e.prev = 24), i.f(), e.finish(24);
                            case 27:
                              return e.abrupt("return", { deletedURLs: a });
                            case 29:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[9, 21, 24, 27]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_addURLToCache",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r, n, a, i, s, o, u, f, h, l, p, d;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.cacheKey),
                                (n = t.url),
                                (a = t.cacheMode),
                                (i = t.event),
                                (s = t.plugins),
                                (o = t.integrity),
                                (u = new Request(n, {
                                  integrity: o,
                                  cache: a,
                                  credentials: "same-origin",
                                })),
                                (e.next = 4),
                                $.fetch({ event: i, plugins: s, request: u })
                              );
                            case 4:
                              (f = e.sent), (l = c(s || []));
                              try {
                                for (l.s(); !(p = l.n()).done; )
                                  "cacheWillUpdate" in (d = p.value) && (h = d);
                              } catch (v) {
                                l.e(v);
                              } finally {
                                l.f();
                              }
                              if (!h) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 10),
                                h.cacheWillUpdate({
                                  event: i,
                                  request: u,
                                  response: f,
                                })
                              );
                            case 10:
                              (e.t0 = e.sent), (e.next = 14);
                              break;
                            case 13:
                              e.t0 = f.status < 400;
                            case 14:
                              if (e.t0) {
                                e.next = 17;
                                break;
                              }
                              throw new g("bad-precaching-response", {
                                url: n,
                                status: f.status,
                              });
                            case 17:
                              if (!f.redirected) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 20), J(f);
                            case 20:
                              f = e.sent;
                            case 21:
                              return (
                                (e.next = 23),
                                P.put({
                                  event: i,
                                  plugins: s,
                                  response: f,
                                  request: r === n ? u : new Request(r),
                                  cacheName: this._cacheName,
                                  matchOptions: { ignoreSearch: !0 },
                                })
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getURLsToCacheKeys",
              value: function () {
                return this._urlsToCacheKeys;
              },
            },
            {
              key: "getCachedURLs",
              value: function () {
                return i(this._urlsToCacheKeys.keys());
              },
            },
            {
              key: "getCacheKeyForURL",
              value: function (e) {
                var t = new URL(e, location.href);
                return this._urlsToCacheKeys.get(t.href);
              },
            },
            {
              key: "matchPrecache",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r, n, a;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = t instanceof Request ? t.url : t),
                                !(n = this.getCacheKeyForURL(r)))
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 5), self.caches.open(this._cacheName)
                              );
                            case 5:
                              return (
                                (a = e.sent), e.abrupt("return", a.match(n))
                              );
                            case 7:
                              return e.abrupt("return", void 0);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "createHandler",
              value: function () {
                var e = this,
                  t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                return (function () {
                  var r = E(
                    j.a.mark(function r(n) {
                      var a, i;
                      return j.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (a = n.request),
                                  (r.prev = 1),
                                  (r.next = 4),
                                  e.matchPrecache(a)
                                );
                              case 4:
                                if (!(i = r.sent)) {
                                  r.next = 7;
                                  break;
                                }
                                return r.abrupt("return", i);
                              case 7:
                                throw new g("missing-precache-entry", {
                                  cacheName: e._cacheName,
                                  url: a instanceof Request ? a.url : a,
                                });
                              case 10:
                                if (((r.prev = 10), (r.t0 = r.catch(1)), !t)) {
                                  r.next = 15;
                                  break;
                                }
                                return r.abrupt("return", fetch(a));
                              case 15:
                                throw r.t0;
                              case 16:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[1, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })();
              },
            },
            {
              key: "createHandlerBoundToURL",
              value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = this.getCacheKeyForURL(e);
                if (!r) throw new g("non-precached-url", { url: e });
                var n = this.createHandler(t),
                  a = new Request(e);
                return function () {
                  return n({ request: a });
                };
              },
            },
          ]),
          e
        );
      })(),
      se = function () {
        return ie || (ie = new ce()), ie;
      };
    function oe(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = function () {
            var r = a[n];
            t.some(function (e) {
              return e.test(r);
            }) && e.searchParams.delete(r);
          },
          n = 0,
          a = i(e.searchParams.keys());
        n < a.length;
        n++
      )
        r();
      return e;
    }
    var ue = j.a.mark(fe);
    function fe(e) {
      var t,
        r,
        n,
        a,
        i,
        s,
        o,
        u,
        f,
        h,
        l,
        p,
        d,
        v = arguments;
      return j.a.wrap(
        function (y) {
          for (;;)
            switch ((y.prev = y.next)) {
              case 0:
                return (
                  (t = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                  (r = t.ignoreURLParametersMatching),
                  (n = t.directoryIndex),
                  (a = t.cleanURLs),
                  (i = t.urlManipulation),
                  ((s = new URL(e, location.href)).hash = ""),
                  (y.next = 5),
                  s.href
                );
              case 5:
                return (o = oe(s, r)), (y.next = 8), o.href;
              case 8:
                if (!n || !o.pathname.endsWith("/")) {
                  y.next = 13;
                  break;
                }
                return (
                  ((u = new URL(o.href)).pathname += n), (y.next = 13), u.href
                );
              case 13:
                if (!a) {
                  y.next = 18;
                  break;
                }
                return (
                  ((f = new URL(o.href)).pathname += ".html"),
                  (y.next = 18),
                  f.href
                );
              case 18:
                if (!i) {
                  y.next = 37;
                  break;
                }
                (h = i({ url: s })), (l = c(h)), (y.prev = 21), l.s();
              case 23:
                if ((p = l.n()).done) {
                  y.next = 29;
                  break;
                }
                return (d = p.value), (y.next = 27), d.href;
              case 27:
                y.next = 23;
                break;
              case 29:
                y.next = 34;
                break;
              case 31:
                (y.prev = 31), (y.t0 = y.catch(21)), l.e(y.t0);
              case 34:
                return (y.prev = 34), l.f(), y.finish(34);
              case 37:
              case "end":
                return y.stop();
            }
        },
        ue,
        null,
        [[21, 31, 34, 37]]
      );
    }
    var he = function (e, t) {
        var r,
          n = se().getURLsToCacheKeys(),
          a = c(fe(e, t));
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var i = r.value,
              s = n.get(i);
            if (s) return s;
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
      },
      le = !1;
    function pe(e) {
      le ||
        (!(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ignoreURLParametersMatching,
            r = void 0 === t ? [/^utm_/] : t,
            n = e.directoryIndex,
            a = void 0 === n ? "index.html" : n,
            i = e.cleanURLs,
            c = void 0 === i || i,
            s = e.urlManipulation,
            o = _();
          self.addEventListener("fetch", function (e) {
            var t = he(e.request.url, {
              cleanURLs: c,
              directoryIndex: a,
              ignoreURLParametersMatching: r,
              urlManipulation: s,
            });
            if (t) {
              var n = self.caches
                .open(o)
                .then(function (e) {
                  return e.match(t);
                })
                .then(function (e) {
                  return e || fetch(t);
                });
              e.respondWith(n);
            }
          });
        })(e),
        (le = !0));
    }
    var de = function (e) {
        var t = se(),
          r = ne();
        e.waitUntil(
          t.install({ event: e, plugins: r }).catch(function (e) {
            throw e;
          })
        );
      },
      ve = function (e) {
        var t = se();
        e.waitUntil(t.activate());
      };
    r(3);
    var ye,
      me = function (e) {
        return e && "object" === typeof e ? e : { handle: e };
      },
      ge = function e(t, r) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "GET";
        s(this, e), (this.handler = me(r)), (this.match = t), (this.method = n);
      },
      xe = (function (e) {
        u(r, e);
        var t = d(r);
        function r(e, n, a) {
          s(this, r);
          return t.call(
            this,
            function (t) {
              var r = t.url,
                n = e.exec(r.href);
              if (n && (r.origin === location.origin || 0 === n.index))
                return n.slice(1);
            },
            n,
            a
          );
        }
        return r;
      })(ge),
      be = (function () {
        function e() {
          s(this, e), (this._routes = new Map());
        }
        return (
          F(e, [
            {
              key: "routes",
              get: function () {
                return this._routes;
              },
            },
            {
              key: "addFetchListener",
              value: function () {
                var e = this;
                self.addEventListener("fetch", function (t) {
                  var r = t.request,
                    n = e.handleRequest({ request: r, event: t });
                  n && t.respondWith(n);
                });
              },
            },
            {
              key: "addCacheListener",
              value: function () {
                var e = this;
                self.addEventListener("message", function (t) {
                  if (t.data && "CACHE_URLS" === t.data.type) {
                    var r = t.data.payload;
                    0;
                    var n = Promise.all(
                      r.urlsToCache.map(function (t) {
                        "string" === typeof t && (t = [t]);
                        var r = v(Request, i(t));
                        return e.handleRequest({ request: r });
                      })
                    );
                    t.waitUntil(n),
                      t.ports &&
                        t.ports[0] &&
                        n.then(function () {
                          return t.ports[0].postMessage(!0);
                        });
                  }
                });
              },
            },
            {
              key: "handleRequest",
              value: function (e) {
                var t = this,
                  r = e.request,
                  n = e.event;
                var a = new URL(r.url, location.href);
                if (a.protocol.startsWith("http")) {
                  var i = this.findMatchingRoute({
                      url: a,
                      request: r,
                      event: n,
                    }),
                    c = i.params,
                    s = i.route,
                    o = s && s.handler;
                  if (
                    (!o && this._defaultHandler && (o = this._defaultHandler),
                    o)
                  ) {
                    var u;
                    0;
                    try {
                      u = o.handle({ url: a, request: r, event: n, params: c });
                    } catch (f) {
                      u = Promise.reject(f);
                    }
                    return (
                      u instanceof Promise &&
                        this._catchHandler &&
                        (u = u.catch(function (e) {
                          return t._catchHandler.handle({
                            url: a,
                            request: r,
                            event: n,
                          });
                        })),
                      u
                    );
                  }
                }
              },
            },
            {
              key: "findMatchingRoute",
              value: function (e) {
                var t = e.url,
                  r = e.request,
                  n = e.event;
                var a,
                  i = c(this._routes.get(r.method) || []);
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var s = a.value,
                      o = void 0,
                      u = s.match({ url: t, request: r, event: n });
                    if (u)
                      return (
                        (o = u),
                        ((Array.isArray(u) && 0 === u.length) ||
                          (u.constructor === Object &&
                            0 === Object.keys(u).length) ||
                          "boolean" === typeof u) &&
                          (o = void 0),
                        { route: s, params: o }
                      );
                  }
                } catch (f) {
                  i.e(f);
                } finally {
                  i.f();
                }
                return {};
              },
            },
            {
              key: "setDefaultHandler",
              value: function (e) {
                this._defaultHandler = me(e);
              },
            },
            {
              key: "setCatchHandler",
              value: function (e) {
                this._catchHandler = me(e);
              },
            },
            {
              key: "registerRoute",
              value: function (e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                  this._routes.get(e.method).push(e);
              },
            },
            {
              key: "unregisterRoute",
              value: function (e) {
                if (!this._routes.has(e.method))
                  throw new g("unregister-route-but-not-found-with-method", {
                    method: e.method,
                  });
                var t = this._routes.get(e.method).indexOf(e);
                if (!(t > -1))
                  throw new g("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(t, 1);
              },
            },
          ]),
          e
        );
      })(),
      we = function () {
        return (
          ye || ((ye = new be()).addFetchListener(), ye.addCacheListener()), ye
        );
      };
    function ke(e, t, r) {
      var n;
      if ("string" === typeof e) {
        var a = new URL(e, location.href);
        n = new ge(
          function (e) {
            return e.url.href === a.href;
          },
          t,
          r
        );
      } else if (e instanceof RegExp) n = new xe(e, t, r);
      else if ("function" === typeof e) n = new ge(e, t, r);
      else {
        if (!(e instanceof ge))
          throw new g("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture",
          });
        n = e;
      }
      return we().registerRoute(n), n;
    }
    r(4);
    var _e,
      Re = {
        cacheWillUpdate: (function () {
          var e = E(
            j.a.mark(function e(t) {
              var r;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (200 !== (r = t.response).status && 0 !== r.status) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", r);
                    case 3:
                      return e.abrupt("return", null);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      },
      qe = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (
            (s(this, e),
            (this._cacheName = R(t.cacheName)),
            (this._plugins = t.plugins || []),
            t.plugins)
          ) {
            var r = t.plugins.some(function (e) {
              return !!e.cacheWillUpdate;
            });
            this._plugins = r ? t.plugins : [Re].concat(i(t.plugins));
          } else this._plugins = [Re];
          (this._fetchOptions = t.fetchOptions),
            (this._matchOptions = t.matchOptions);
        }
        return (
          F(e, [
            {
              key: "handle",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r, n, a, i, c;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.event),
                                (n = t.request),
                                [],
                                "string" === typeof n && (n = new Request(n)),
                                (a = this._getFromNetwork({
                                  request: n,
                                  event: r,
                                })),
                                (e.next = 7),
                                P.match({
                                  cacheName: this._cacheName,
                                  request: n,
                                  event: r,
                                  matchOptions: this._matchOptions,
                                  plugins: this._plugins,
                                })
                              );
                            case 7:
                              if (!(i = e.sent)) {
                                e.next = 13;
                                break;
                              }
                              if (r)
                                try {
                                  r.waitUntil(a);
                                } catch (c) {
                                  0;
                                }
                              e.next = 23;
                              break;
                            case 13:
                              return (e.prev = 14), (e.next = 17), a;
                            case 17:
                              (i = e.sent), (e.next = 23);
                              break;
                            case 20:
                              (e.prev = 20), (e.t0 = e.catch(14)), (c = e.t0);
                            case 23:
                              if (i) {
                                e.next = 26;
                                break;
                              }
                              throw new g("no-response", {
                                url: n.url,
                                error: c,
                              });
                            case 26:
                              return e.abrupt("return", i);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[14, 20]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getFromNetwork",
              value: (function () {
                var e = E(
                  j.a.mark(function e(t) {
                    var r, n, a, i;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.request),
                                (n = t.event),
                                (e.next = 3),
                                $.fetch({
                                  request: r,
                                  event: n,
                                  fetchOptions: this._fetchOptions,
                                  plugins: this._plugins,
                                })
                              );
                            case 3:
                              if (
                                ((a = e.sent),
                                (i = P.put({
                                  cacheName: this._cacheName,
                                  request: r,
                                  response: a.clone(),
                                  event: n,
                                  plugins: this._plugins,
                                })),
                                n)
                              )
                                try {
                                  n.waitUntil(i);
                                } catch (c) {
                                  0;
                                }
                              return e.abrupt("return", a);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    self.addEventListener("activate", function () {
      return self.clients.claim();
    }),
      (function (e) {
        se().addToCacheList(e),
          e.length > 0 &&
            (self.addEventListener("install", de),
            self.addEventListener("activate", ve));
      })([
        { revision: "0b1510416c7e81bf017b5fb895c6c9bc", url: "/index.html" },
        { revision: null, url: "/static/css/main.5273e165.chunk.css" },
        { revision: null, url: "/static/js/0.aa797155.chunk.js" },
        { revision: null, url: "/static/js/3.2d4744d0.chunk.js" },
        { revision: null, url: "/static/js/4.3fc9192c.chunk.js" },
        { revision: null, url: "/static/js/5.7856944a.chunk.js" },
        { revision: null, url: "/static/js/6.1ee0ea89.chunk.js" },
        { revision: null, url: "/static/js/7.6681e646.chunk.js" },
        { revision: null, url: "/static/js/8.ea149612.chunk.js" },
        { revision: null, url: "/static/js/9.745bfe25.chunk.js" },
        { revision: null, url: "/static/js/main.912774a6.chunk.js" },
        { revision: null, url: "/static/js/runtime-main.2a3449c5.js" },
        { revision: null, url: "/static/media/getFetch.582d29c4.cjs" },
      ]),
      pe(_e);
    var je,
      Le = new RegExp("/[^/?]+\\.[^/]+$");
    function Ee(e) {
      (qrcode.width = e.width),
        (qrcode.height = e.height),
        (qrcode.imagedata = e.imageData);
      var t = !1;
      try {
        t = qrcode.process();
      } catch (r) {}
      postMessage(t);
    }
    ke(function (e) {
      var t = e.request,
        r = e.url;
      return (
        "navigate" === t.mode &&
        !r.pathname.startsWith("/_") &&
        !r.pathname.match(Le)
      );
    }, ((je = Ee.env.PUBLIC_URL + "/index.html"),
    se().createHandlerBoundToURL(je))),
      ke(function (e) {
        var t = e.url;
        return t.origin === self.location.origin && t.pathname.endsWith(".png");
      }, new qe({
        cacheName: "images",
        plugins: [new te({ maxEntries: 50 })],
      })),
      self.addEventListener("message", function (e) {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
        var t = evente.data;
        switch (t.cmd) {
          case "init":
            self.importScripts(
              "lib/jsqrcode/grid.js",
              "lib/jsqrcode/version.js",
              "lib/jsqrcode/detector.js",
              "lib/jsqrcode/formatinf.js",
              "lib/jsqrcode/errorlevel.js",
              "lib/jsqrcode/bitmat.js",
              "lib/jsqrcode/datablock.js",
              "lib/jsqrcode/bmparser.js",
              "lib/jsqrcode/datamask.js",
              "lib/jsqrcode/rsdecoder.js",
              "lib/jsqrcode/gf256poly.js",
              "lib/jsqrcode/gf256.js",
              "lib/jsqrcode/decoder.js",
              "lib/jsqrcode/qrcode.js",
              "lib/jsqrcode/findpat.js",
              "lib/jsqrcode/alignpat.js",
              "lib/jsqrcode/databr.js"
            );
            break;
          case "process":
            Ee(t);
            break;
          default:
            console.log("Unknown command for QRCode worker.");
        }
      });
  },
]);
//# sourceMappingURL=service-worker.js.map
