// Module: iv8
// Dependencies: H8, sq, z6A, Uv8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iv8 = v(lv8 => {
  var {
    _optionalChain: QO
  } = __$.H8();
  Object.defineProperty(lv8, "__esModule", {
    value: !0
  });
  var xm1 = __$.sq(),
    gtA = __$.H8(),
    gtq = __$.z6A(),
    FtA = __$.Uv8();
  function um1(A) {
    let K = [],
      q = !1;
    function Y(H) {
      if (K = [], q) return;
      q = !0, A(H);
    }
    K.push(Y);
    function z(H) {
      K.push(H);
    }
    function w(H) {
      let J = K.pop() || Y;
      try {
        J(H);
      } catch (O) {
        Y(H);
      }
    }
    return {
      add: z,
      next: w
    };
  }
  class pv8 {
    constructor() {
      let {
        Session: A
      } = CA("inspector");
      this._session = new A();
    }
    configureAndConnect(A, K) {
      this._session.connect(), this._session.on("Debugger.paused", q => {
        A(q, () => {
          this._session.post("Debugger.resume");
        });
      }), this._session.post("Debugger.enable"), this._session.post("Debugger.setPauseOnExceptions", {
        state: K ? "all" : "uncaught"
      });
    }
    setPauseOnExceptions(A) {
      this._session.post("Debugger.setPauseOnExceptions", {
        state: A ? "all" : "uncaught"
      });
    }
    getLocalVariables(A, K) {
      this._getProperties(A, q => {
        let {
          add: Y,
          next: z
        } = um1(K);
        for (let w of q) if (QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.objectId]) && QO([w, "optionalAccess", H => H.value, "access", H => H.className]) === "Array") {
          let H = w.value.objectId;
          Y(J => this._unrollArray(H, w.name, J, z));
        } else if (QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.objectId]) && QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.className]) === "Object") {
          let H = w.value.objectId;
          Y(J => this._unrollObject(H, w.name, J, z));
        } else if (QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.value]) != null || QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.description]) != null) Y(H => this._unrollOther(w, H, z));
        z({});
      });
    }
    _getProperties(A, K) {
      this._session.post("Runtime.getProperties", {
        objectId: A,
        ownProperties: !0
      }, (q, Y) => {
        if (q) K([]);else K(Y.result);
      });
    }
    _unrollArray(A, K, q, Y) {
      this._getProperties(A, z => {
        q[K] = z.filter(w => w.name !== "length" && !isNaN(parseInt(w.name, 10))).sort((w, H) => parseInt(w.name, 10) - parseInt(H.name, 10)).map(w => QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.value])), Y(q);
      });
    }
    _unrollObject(A, K, q, Y) {
      this._getProperties(A, z => {
        q[K] = z.map(w => [w.name, QO([w, "optionalAccess", H => H.value, "optionalAccess", H => H.value])]).reduce((w, [H, J]) => {
          return w[H] = J, w;
        }, {}), Y(q);
      });
    }
    _unrollOther(A, K, q) {
      if (QO([A, "optionalAccess", Y => Y.value, "optionalAccess", Y => Y.value]) != null) K[A.name] = A.value.value;else if (QO([A, "optionalAccess", Y => Y.value, "optionalAccess", Y => Y.description]) != null && QO([A, "optionalAccess", Y => Y.value, "optionalAccess", Y => Y.type]) !== "function") K[A.name] = `<${A.value.description}>`;
      q(K);
    }
  }
  function Ftq() {
    try {
      return new pv8();
    } catch (A) {
      return;
    }
  }
  var dv8 = "LocalVariables",
    Qtq = (A = {}, K = Ftq()) => {
      let q = new gtA.LRUMap(20),
        Y,
        z = !1;
      function w(O, {
        params: {
          reason: X,
          data: $,
          callFrames: _
        }
      }, G) {
        if (X !== "exception" && X !== "promiseRejection") {
          G();
          return;
        }
        QO([Y, "optionalCall", j => j()]);
        let Z = FtA.hashFromStack(O, QO([$, "optionalAccess", j => j.description]));
        if (Z == null) {
          G();
          return;
        }
        let {
          add: W,
          next: D
        } = um1(j => {
          q.set(Z, j), G();
        });
        for (let j = 0; j < Math.min(_.length, 5); j++) {
          let {
              scopeChain: M,
              functionName: P,
              this: f
            } = _[j],
            N = M.find(C => C.type === "local"),
            T = f.className === "global" || !f.className ? P : `${f.className}.${P}`;
          if (QO([N, "optionalAccess", C => C.object, "access", C => C.objectId]) === void 0) W(C => {
            C[j] = {
              function: T
            }, D(C);
          });else {
            let C = N.object.objectId;
            W(R => QO([K, "optionalAccess", x => x.getLocalVariables, "call", x => x(C, y => {
              R[j] = {
                function: T,
                vars: y
              }, D(R);
            })]));
          }
        }
        D([]);
      }
      function H(O) {
        let X = FtA.hashFrames(QO([O, "optionalAccess", G => G.stacktrace, "optionalAccess", G => G.frames]));
        if (X === void 0) return;
        let $ = q.remove(X);
        if ($ === void 0) return;
        let _ = (QO([O, "access", G => G.stacktrace, "optionalAccess", G => G.frames]) || []).filter(G => G.function !== "new Promise");
        for (let G = 0; G < _.length; G++) {
          let Z = _.length - G - 1;
          if (!_[Z] || !$[G]) break;
          if ($[G].vars === void 0 || _[Z].in_app === !1 || !FtA.functionNamesMatch(_[Z].function, $[G].function)) continue;
          _[Z].vars = $[G].vars;
        }
      }
      function J(O) {
        for (let X of QO([O, "optionalAccess", $ => $.exception, "optionalAccess", $ => $.values]) || []) H(X);
        return O;
      }
      return {
        name: dv8,
        setupOnce() {
          let O = xm1.getClient(),
            X = QO([O, "optionalAccess", $ => $.getOptions, "call", $ => $()]);
          if (K && QO([X, "optionalAccess", $ => $.includeLocalVariables])) {
            if (gtq.NODE_VERSION.major < 18) {
              gtA.logger.log("The `LocalVariables` integration is only supported on Node >= v18.");
              return;
            }
            let _ = A.captureAllExceptions !== !1;
            if (K.configureAndConnect((G, Z) => w(X.stackParser, G, Z), _), _) {
              let G = A.maxExceptionsPerSecond || 50;
              Y = FtA.createRateLimiter(G, () => {
                gtA.logger.log("Local variables rate-limit lifted."), QO([K, "optionalAccess", Z => Z.setPauseOnExceptions, "call", Z => Z(!0)]);
              }, Z => {
                gtA.logger.log(`Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${Z} seconds.`), QO([K, "optionalAccess", W => W.setPauseOnExceptions, "call", W => W(!1)]);
              });
            }
            z = !0;
          }
        },
        processEvent(O) {
          if (z) return J(O);
          return O;
        },
        _getCachedFramesCount() {
          return q.size;
        },
        _getFirstCachedFrame() {
          return q.values()[0];
        }
      };
    },
    cv8 = xm1.defineIntegration(Qtq),
    Utq = xm1.convertIntegrationFnToClass(dv8, cv8);
  lv8.LocalVariablesSync = Utq;
  lv8.createCallbackList = um1;
  lv8.localVariablesSyncIntegration = cv8;
});

// Register to shared state
__$.iv8 = iv8;
