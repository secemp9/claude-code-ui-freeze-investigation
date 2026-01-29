// Module: mT7
// Dependencies: $s, SWA, gV6, QV6, hWA, IG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mT7 = v(hT7 => {
  Object.defineProperty(hT7, "__esModule", {
    value: !0
  });
  hT7.createMessageConnection = hT7.ConnectionOptions = hT7.MessageStrategy = hT7.CancellationStrategy = hT7.CancellationSenderStrategy = hT7.CancellationReceiverStrategy = hT7.RequestCancellationReceiverStrategy = hT7.IdCancellationReceiverStrategy = hT7.ConnectionStrategy = hT7.ConnectionError = hT7.ConnectionErrors = hT7.LogTraceNotification = hT7.SetTraceNotification = hT7.TraceFormat = hT7.TraceValues = hT7.Trace = hT7.NullLogger = hT7.ProgressType = hT7.ProgressToken = void 0;
  var LT7 = __$.$s(),
    jO = __$.SWA(),
    bq = __$.gV6(),
    RT7 = __$.QV6(),
    RmA = __$.hWA(),
    tV6 = __$.IG1(),
    SmA;
  (function (A) {
    A.type = new bq.NotificationType("$/cancelRequest");
  })(SmA || (SmA = {}));
  var eV6;
  (function (A) {
    function K(q) {
      return typeof q === "string" || typeof q === "number";
    }
    A.is = K;
  })(eV6 || (hT7.ProgressToken = eV6 = {}));
  var ymA;
  (function (A) {
    A.type = new bq.NotificationType("$/progress");
  })(ymA || (ymA = {}));
  class ST7 {
    constructor() {}
  }
  hT7.ProgressType = ST7;
  var Af6;
  (function (A) {
    function K(q) {
      return jO.func(q);
    }
    A.is = K;
  })(Af6 || (Af6 = {}));
  hT7.NullLogger = Object.freeze({
    error: () => {},
    warn: () => {},
    info: () => {},
    log: () => {}
  });
  var j2;
  (function (A) {
    A[A.Off = 0] = "Off", A[A.Messages = 1] = "Messages", A[A.Compact = 2] = "Compact", A[A.Verbose = 3] = "Verbose";
  })(j2 || (hT7.Trace = j2 = {}));
  var yT7;
  (function (A) {
    A.Off = "off", A.Messages = "messages", A.Compact = "compact", A.Verbose = "verbose";
  })(yT7 || (hT7.TraceValues = yT7 = {}));
  (function (A) {
    function K(Y) {
      if (!jO.string(Y)) return A.Off;
      switch (Y = Y.toLowerCase(), Y) {
        case "off":
          return A.Off;
        case "messages":
          return A.Messages;
        case "compact":
          return A.Compact;
        case "verbose":
          return A.Verbose;
        default:
          return A.Off;
      }
    }
    A.fromString = K;
    function q(Y) {
      switch (Y) {
        case A.Off:
          return "off";
        case A.Messages:
          return "messages";
        case A.Compact:
          return "compact";
        case A.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    A.toString = q;
  })(j2 || (hT7.Trace = j2 = {}));
  var Kv;
  (function (A) {
    A.Text = "text", A.JSON = "json";
  })(Kv || (hT7.TraceFormat = Kv = {}));
  (function (A) {
    function K(q) {
      if (!jO.string(q)) return A.Text;
      if (q = q.toLowerCase(), q === "json") return A.JSON;else return A.Text;
    }
    A.fromString = K;
  })(Kv || (hT7.TraceFormat = Kv = {}));
  var Kf6;
  (function (A) {
    A.type = new bq.NotificationType("$/setTrace");
  })(Kf6 || (hT7.SetTraceNotification = Kf6 = {}));
  var SG1;
  (function (A) {
    A.type = new bq.NotificationType("$/logTrace");
  })(SG1 || (hT7.LogTraceNotification = SG1 = {}));
  var ImA;
  (function (A) {
    A[A.Closed = 1] = "Closed", A[A.Disposed = 2] = "Disposed", A[A.AlreadyListening = 3] = "AlreadyListening";
  })(ImA || (hT7.ConnectionErrors = ImA = {}));
  class xWA extends Error {
    constructor(A, K) {
      super(K);
      this.code = A, Object.setPrototypeOf(this, xWA.prototype);
    }
  }
  hT7.ConnectionError = xWA;
  var qf6;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && jO.func(Y.cancelUndispatched);
    }
    A.is = K;
  })(qf6 || (hT7.ConnectionStrategy = qf6 = {}));
  var hG1;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && (Y.kind === void 0 || Y.kind === "id") && jO.func(Y.createCancellationTokenSource) && (Y.dispose === void 0 || jO.func(Y.dispose));
    }
    A.is = K;
  })(hG1 || (hT7.IdCancellationReceiverStrategy = hG1 = {}));
  var Yf6;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && Y.kind === "request" && jO.func(Y.createCancellationTokenSource) && (Y.dispose === void 0 || jO.func(Y.dispose));
    }
    A.is = K;
  })(Yf6 || (hT7.RequestCancellationReceiverStrategy = Yf6 = {}));
  var bG1;
  (function (A) {
    A.Message = Object.freeze({
      createCancellationTokenSource(q) {
        return new tV6.CancellationTokenSource();
      }
    });
    function K(q) {
      return hG1.is(q) || Yf6.is(q);
    }
    A.is = K;
  })(bG1 || (hT7.CancellationReceiverStrategy = bG1 = {}));
  var xG1;
  (function (A) {
    A.Message = Object.freeze({
      sendCancellation(q, Y) {
        return q.sendNotification(SmA.type, {
          id: Y
        });
      },
      cleanup(q) {}
    });
    function K(q) {
      let Y = q;
      return Y && jO.func(Y.sendCancellation) && jO.func(Y.cleanup);
    }
    A.is = K;
  })(xG1 || (hT7.CancellationSenderStrategy = xG1 = {}));
  var uG1;
  (function (A) {
    A.Message = Object.freeze({
      receiver: bG1.Message,
      sender: xG1.Message
    });
    function K(q) {
      let Y = q;
      return Y && bG1.is(Y.receiver) && xG1.is(Y.sender);
    }
    A.is = K;
  })(uG1 || (hT7.CancellationStrategy = uG1 = {}));
  var BG1;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && jO.func(Y.handleMessage);
    }
    A.is = K;
  })(BG1 || (hT7.MessageStrategy = BG1 = {}));
  var IT7;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && (uG1.is(Y.cancellationStrategy) || qf6.is(Y.connectionStrategy) || BG1.is(Y.messageStrategy));
    }
    A.is = K;
  })(IT7 || (hT7.ConnectionOptions = IT7 = {}));
  var aI;
  (function (A) {
    A[A.New = 1] = "New", A[A.Listening = 2] = "Listening", A[A.Closed = 3] = "Closed", A[A.Disposed = 4] = "Disposed";
  })(aI || (aI = {}));
  function UBY(A, K, q, Y) {
    let z = q !== void 0 ? q : hT7.NullLogger,
      w = 0,
      H = 0,
      J = 0,
      O = "2.0",
      X = void 0,
      $ = new Map(),
      _ = void 0,
      G = new Map(),
      Z = new Map(),
      W,
      D = new RT7.LinkedMap(),
      j = new Map(),
      M = new Set(),
      P = new Map(),
      f = j2.Off,
      N = Kv.Text,
      T,
      C = aI.New,
      R = new RmA.Emitter(),
      x = new RmA.Emitter(),
      y = new RmA.Emitter(),
      B = new RmA.Emitter(),
      b = new RmA.Emitter(),
      F = Y && Y.cancellationStrategy ? Y.cancellationStrategy : uG1.Message;
    function Q(w1) {
      if (w1 === null) throw Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + w1.toString();
    }
    function u(w1) {
      if (w1 === null) return "res-unknown-" + (++J).toString();else return "res-" + w1.toString();
    }
    function d() {
      return "not-" + (++H).toString();
    }
    function r(w1, $1) {
      if (bq.Message.isRequest($1)) w1.set(Q($1.id), $1);else if (bq.Message.isResponse($1)) w1.set(u($1.id), $1);else w1.set(d(), $1);
    }
    function c(w1) {
      return;
    }
    function YA() {
      return C === aI.Listening;
    }
    function e() {
      return C === aI.Closed;
    }
    function qA() {
      return C === aI.Disposed;
    }
    function HA() {
      if (C === aI.New || C === aI.Listening) C = aI.Closed, x.fire(void 0);
    }
    function _A(w1) {
      R.fire([w1, void 0, void 0]);
    }
    function a(w1) {
      R.fire(w1);
    }
    A.onClose(HA), A.onError(_A), K.onClose(HA), K.onError(a);
    function JA() {
      if (W || D.size === 0) return;
      W = (0, LT7.default)().timer.setImmediate(() => {
        W = void 0, MA();
      });
    }
    function jA(w1) {
      if (bq.Message.isRequest(w1)) yA(w1);else if (bq.Message.isNotification(w1)) wA(w1);else if (bq.Message.isResponse(w1)) AA(w1);else GA(w1);
    }
    function MA() {
      if (D.size === 0) return;
      let w1 = D.shift();
      try {
        let $1 = Y?.messageStrategy;
        if (BG1.is($1)) $1.handleMessage(w1, jA);else jA(w1);
      } finally {
        JA();
      }
    }
    let hA = w1 => {
      try {
        if (bq.Message.isNotification(w1) && w1.method === SmA.type.method) {
          let $1 = w1.params.id,
            N1 = Q($1),
            A6 = D.get(N1);
          if (bq.Message.isRequest(A6)) {
            let w6 = Y?.connectionStrategy,
              DA = w6 && w6.cancelUndispatched ? w6.cancelUndispatched(A6, c) : c(A6);
            if (DA && (DA.error !== void 0 || DA.result !== void 0)) {
              D.delete(N1), P.delete($1), DA.id = A6.id, VA(DA, w1.method, Date.now()), K.write(DA).catch(() => z.error("Sending response for canceled message failed."));
              return;
            }
          }
          let c1 = P.get($1);
          if (c1 !== void 0) {
            c1.cancel(), RA(w1);
            return;
          } else M.add($1);
        }
        r(D, w1);
      } finally {
        JA();
      }
    };
    function yA(w1) {
      if (qA()) return;
      function $1(rA, J1, aA) {
        let z1 = {
          jsonrpc: O,
          id: w1.id
        };
        if (rA instanceof bq.ResponseError) z1.error = rA.toJson();else z1.result = rA === void 0 ? null : rA;
        VA(z1, J1, aA), K.write(z1).catch(() => z.error("Sending response failed."));
      }
      function N1(rA, J1, aA) {
        let z1 = {
          jsonrpc: O,
          id: w1.id,
          error: rA.toJson()
        };
        VA(z1, J1, aA), K.write(z1).catch(() => z.error("Sending response failed."));
      }
      function A6(rA, J1, aA) {
        if (rA === void 0) rA = null;
        let z1 = {
          jsonrpc: O,
          id: w1.id,
          result: rA
        };
        VA(z1, J1, aA), K.write(z1).catch(() => z.error("Sending response failed."));
      }
      vA(w1);
      let c1 = $.get(w1.method),
        w6,
        DA;
      if (c1) w6 = c1.type, DA = c1.handler;
      let EA = Date.now();
      if (DA || X) {
        let rA = w1.id ?? String(Date.now()),
          J1 = hG1.is(F.receiver) ? F.receiver.createCancellationTokenSource(rA) : F.receiver.createCancellationTokenSource(w1);
        if (w1.id !== null && M.has(w1.id)) J1.cancel();
        if (w1.id !== null) P.set(rA, J1);
        try {
          let aA;
          if (DA) {
            if (w1.params === void 0) {
              if (w6 !== void 0 && w6.numberOfParams !== 0) {
                N1(new bq.ResponseError(bq.ErrorCodes.InvalidParams, `Request ${w1.method} defines ${w6.numberOfParams} params but received none.`), w1.method, EA);
                return;
              }
              aA = DA(J1.token);
            } else if (Array.isArray(w1.params)) {
              if (w6 !== void 0 && w6.parameterStructures === bq.ParameterStructures.byName) {
                N1(new bq.ResponseError(bq.ErrorCodes.InvalidParams, `Request ${w1.method} defines parameters by name but received parameters by position`), w1.method, EA);
                return;
              }
              aA = DA(...w1.params, J1.token);
            } else {
              if (w6 !== void 0 && w6.parameterStructures === bq.ParameterStructures.byPosition) {
                N1(new bq.ResponseError(bq.ErrorCodes.InvalidParams, `Request ${w1.method} defines parameters by position but received parameters by name`), w1.method, EA);
                return;
              }
              aA = DA(w1.params, J1.token);
            }
          } else if (X) aA = X(w1.method, w1.params, J1.token);
          let z1 = aA;
          if (!aA) P.delete(rA), A6(aA, w1.method, EA);else if (z1.then) z1.then(f1 => {
            P.delete(rA), $1(f1, w1.method, EA);
          }, f1 => {
            if (P.delete(rA), f1 instanceof bq.ResponseError) N1(f1, w1.method, EA);else if (f1 && jO.string(f1.message)) N1(new bq.ResponseError(bq.ErrorCodes.InternalError, `Request ${w1.method} failed with message: ${f1.message}`), w1.method, EA);else N1(new bq.ResponseError(bq.ErrorCodes.InternalError, `Request ${w1.method} failed unexpectedly without providing any details.`), w1.method, EA);
          });else P.delete(rA), $1(aA, w1.method, EA);
        } catch (aA) {
          if (P.delete(rA), aA instanceof bq.ResponseError) $1(aA, w1.method, EA);else if (aA && jO.string(aA.message)) N1(new bq.ResponseError(bq.ErrorCodes.InternalError, `Request ${w1.method} failed with message: ${aA.message}`), w1.method, EA);else N1(new bq.ResponseError(bq.ErrorCodes.InternalError, `Request ${w1.method} failed unexpectedly without providing any details.`), w1.method, EA);
        }
      } else N1(new bq.ResponseError(bq.ErrorCodes.MethodNotFound, `Unhandled method ${w1.method}`), w1.method, EA);
    }
    function AA(w1) {
      if (qA()) return;
      if (w1.id === null) {
        if (w1.error) z.error(`Received response message without id: Error is: 
${JSON.stringify(w1.error, void 0, 4)}`);else z.error("Received response message without id. No further error information provided.");
      } else {
        let $1 = w1.id,
          N1 = j.get($1);
        if (fA(w1, N1), N1 !== void 0) {
          j.delete($1);
          try {
            if (w1.error) {
              let A6 = w1.error;
              N1.reject(new bq.ResponseError(A6.code, A6.message, A6.data));
            } else if (w1.result !== void 0) N1.resolve(w1.result);else throw Error("Should never happen.");
          } catch (A6) {
            if (A6.message) z.error(`Response handler '${N1.method}' failed with message: ${A6.message}`);else z.error(`Response handler '${N1.method}' failed unexpectedly.`);
          }
        }
      }
    }
    function wA(w1) {
      if (qA()) return;
      let $1 = void 0,
        N1;
      if (w1.method === SmA.type.method) {
        let A6 = w1.params.id;
        M.delete(A6), RA(w1);
        return;
      } else {
        let A6 = G.get(w1.method);
        if (A6) N1 = A6.handler, $1 = A6.type;
      }
      if (N1 || _) try {
        if (RA(w1), N1) {
          if (w1.params === void 0) {
            if ($1 !== void 0) {
              if ($1.numberOfParams !== 0 && $1.parameterStructures !== bq.ParameterStructures.byName) z.error(`Notification ${w1.method} defines ${$1.numberOfParams} params but received none.`);
            }
            N1();
          } else if (Array.isArray(w1.params)) {
            let A6 = w1.params;
            if (w1.method === ymA.type.method && A6.length === 2 && eV6.is(A6[0])) N1({
              token: A6[0],
              value: A6[1]
            });else {
              if ($1 !== void 0) {
                if ($1.parameterStructures === bq.ParameterStructures.byName) z.error(`Notification ${w1.method} defines parameters by name but received parameters by position`);
                if ($1.numberOfParams !== w1.params.length) z.error(`Notification ${w1.method} defines ${$1.numberOfParams} params but received ${A6.length} arguments`);
              }
              N1(...A6);
            }
          } else {
            if ($1 !== void 0 && $1.parameterStructures === bq.ParameterStructures.byPosition) z.error(`Notification ${w1.method} defines parameters by position but received parameters by name`);
            N1(w1.params);
          }
        } else if (_) _(w1.method, w1.params);
      } catch (A6) {
        if (A6.message) z.error(`Notification handler '${w1.method}' failed with message: ${A6.message}`);else z.error(`Notification handler '${w1.method}' failed unexpectedly.`);
      } else y.fire(w1);
    }
    function GA(w1) {
      if (!w1) {
        z.error("Received empty message.");
        return;
      }
      z.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(w1, null, 4)}`);
      let $1 = w1;
      if (jO.string($1.id) || jO.number($1.id)) {
        let N1 = $1.id,
          A6 = j.get(N1);
        if (A6) A6.reject(Error("The received response has neither a result nor an error property."));
      }
    }
    function OA(w1) {
      if (w1 === void 0 || w1 === null) return;
      switch (f) {
        case j2.Verbose:
          return JSON.stringify(w1, null, 4);
        case j2.Compact:
          return JSON.stringify(w1);
        default:
          return;
      }
    }
    function t(w1) {
      if (f === j2.Off || !T) return;
      if (N === Kv.Text) {
        let $1 = void 0;
        if ((f === j2.Verbose || f === j2.Compact) && w1.params) $1 = `Params: ${OA(w1.params)}

`;
        T.log(`Sending request '${w1.method} - (${w1.id})'.`, $1);
      } else LA("send-request", w1);
    }
    function XA(w1) {
      if (f === j2.Off || !T) return;
      if (N === Kv.Text) {
        let $1 = void 0;
        if (f === j2.Verbose || f === j2.Compact) if (w1.params) $1 = `Params: ${OA(w1.params)}

`;else $1 = `No parameters provided.

`;
        T.log(`Sending notification '${w1.method}'.`, $1);
      } else LA("send-notification", w1);
    }
    function VA(w1, $1, N1) {
      if (f === j2.Off || !T) return;
      if (N === Kv.Text) {
        let A6 = void 0;
        if (f === j2.Verbose || f === j2.Compact) {
          if (w1.error && w1.error.data) A6 = `Error data: ${OA(w1.error.data)}

`;else if (w1.result) A6 = `Result: ${OA(w1.result)}

`;else if (w1.error === void 0) A6 = `No result returned.

`;
        }
        T.log(`Sending response '${$1} - (${w1.id})'. Processing request took ${Date.now() - N1}ms`, A6);
      } else LA("send-response", w1);
    }
    function vA(w1) {
      if (f === j2.Off || !T) return;
      if (N === Kv.Text) {
        let $1 = void 0;
        if ((f === j2.Verbose || f === j2.Compact) && w1.params) $1 = `Params: ${OA(w1.params)}

`;
        T.log(`Received request '${w1.method} - (${w1.id})'.`, $1);
      } else LA("receive-request", w1);
    }
    function RA(w1) {
      if (f === j2.Off || !T || w1.method === SG1.type.method) return;
      if (N === Kv.Text) {
        let $1 = void 0;
        if (f === j2.Verbose || f === j2.Compact) if (w1.params) $1 = `Params: ${OA(w1.params)}

`;else $1 = `No parameters provided.

`;
        T.log(`Received notification '${w1.method}'.`, $1);
      } else LA("receive-notification", w1);
    }
    function fA(w1, $1) {
      if (f === j2.Off || !T) return;
      if (N === Kv.Text) {
        let N1 = void 0;
        if (f === j2.Verbose || f === j2.Compact) {
          if (w1.error && w1.error.data) N1 = `Error data: ${OA(w1.error.data)}

`;else if (w1.result) N1 = `Result: ${OA(w1.result)}

`;else if (w1.error === void 0) N1 = `No result returned.

`;
        }
        if ($1) {
          let A6 = w1.error ? ` Request failed: ${w1.error.message} (${w1.error.code}).` : "";
          T.log(`Received response '${$1.method} - (${w1.id})' in ${Date.now() - $1.timerStart}ms.${A6}`, N1);
        } else T.log(`Received response ${w1.id} without active response promise.`, N1);
      } else LA("receive-response", w1);
    }
    function LA(w1, $1) {
      if (!T || f === j2.Off) return;
      let N1 = {
        isLSPMessage: !0,
        type: w1,
        message: $1,
        timestamp: Date.now()
      };
      T.log(N1);
    }
    function SA() {
      if (e()) throw new xWA(ImA.Closed, "Connection is closed.");
      if (qA()) throw new xWA(ImA.Disposed, "Connection is disposed.");
    }
    function xA() {
      if (YA()) throw new xWA(ImA.AlreadyListening, "Connection is already listening");
    }
    function iA() {
      if (!YA()) throw Error("Call listen() first.");
    }
    function lA(w1) {
      if (w1 === void 0) return null;else return w1;
    }
    function v1(w1) {
      if (w1 === null) return;else return w1;
    }
    function I1(w1) {
      return w1 !== void 0 && w1 !== null && !Array.isArray(w1) && typeof w1 === "object";
    }
    function Q1(w1, $1) {
      switch (w1) {
        case bq.ParameterStructures.auto:
          if (I1($1)) return v1($1);else return [lA($1)];
        case bq.ParameterStructures.byName:
          if (!I1($1)) throw Error("Received parameters by name but param is not an object literal.");
          return v1($1);
        case bq.ParameterStructures.byPosition:
          return [lA($1)];
        default:
          throw Error(`Unknown parameter structure ${w1.toString()}`);
      }
    }
    function B1(w1, $1) {
      let N1,
        A6 = w1.numberOfParams;
      switch (A6) {
        case 0:
          N1 = void 0;
          break;
        case 1:
          N1 = Q1(w1.parameterStructures, $1[0]);
          break;
        default:
          N1 = [];
          for (let c1 = 0; c1 < $1.length && c1 < A6; c1++) N1.push(lA($1[c1]));
          if ($1.length < A6) for (let c1 = $1.length; c1 < A6; c1++) N1.push(null);
          break;
      }
      return N1;
    }
    let C6 = {
      sendNotification: (w1, ...$1) => {
        SA();
        let N1, A6;
        if (jO.string(w1)) {
          N1 = w1;
          let w6 = $1[0],
            DA = 0,
            EA = bq.ParameterStructures.auto;
          if (bq.ParameterStructures.is(w6)) DA = 1, EA = w6;
          let rA = $1.length,
            J1 = rA - DA;
          switch (J1) {
            case 0:
              A6 = void 0;
              break;
            case 1:
              A6 = Q1(EA, $1[DA]);
              break;
            default:
              if (EA === bq.ParameterStructures.byName) throw Error(`Received ${J1} parameters for 'by Name' notification parameter structure.`);
              A6 = $1.slice(DA, rA).map(aA => lA(aA));
              break;
          }
        } else {
          let w6 = $1;
          N1 = w1.method, A6 = B1(w1, w6);
        }
        let c1 = {
          jsonrpc: O,
          method: N1,
          params: A6
        };
        return XA(c1), K.write(c1).catch(w6 => {
          throw z.error("Sending notification failed."), w6;
        });
      },
      onNotification: (w1, $1) => {
        SA();
        let N1;
        if (jO.func(w1)) _ = w1;else if ($1) if (jO.string(w1)) N1 = w1, G.set(w1, {
          type: void 0,
          handler: $1
        });else N1 = w1.method, G.set(w1.method, {
          type: w1,
          handler: $1
        });
        return {
          dispose: () => {
            if (N1 !== void 0) G.delete(N1);else _ = void 0;
          }
        };
      },
      onProgress: (w1, $1, N1) => {
        if (Z.has($1)) throw Error(`Progress handler for token ${$1} already registered`);
        return Z.set($1, N1), {
          dispose: () => {
            Z.delete($1);
          }
        };
      },
      sendProgress: (w1, $1, N1) => {
        return C6.sendNotification(ymA.type, {
          token: $1,
          value: N1
        });
      },
      onUnhandledProgress: B.event,
      sendRequest: (w1, ...$1) => {
        SA(), iA();
        let N1,
          A6,
          c1 = void 0;
        if (jO.string(w1)) {
          N1 = w1;
          let rA = $1[0],
            J1 = $1[$1.length - 1],
            aA = 0,
            z1 = bq.ParameterStructures.auto;
          if (bq.ParameterStructures.is(rA)) aA = 1, z1 = rA;
          let f1 = $1.length;
          if (tV6.CancellationToken.is(J1)) f1 = f1 - 1, c1 = J1;
          let T1 = f1 - aA;
          switch (T1) {
            case 0:
              A6 = void 0;
              break;
            case 1:
              A6 = Q1(z1, $1[aA]);
              break;
            default:
              if (z1 === bq.ParameterStructures.byName) throw Error(`Received ${T1} parameters for 'by Name' request parameter structure.`);
              A6 = $1.slice(aA, f1).map(K6 => lA(K6));
              break;
          }
        } else {
          let rA = $1;
          N1 = w1.method, A6 = B1(w1, rA);
          let J1 = w1.numberOfParams;
          c1 = tV6.CancellationToken.is(rA[J1]) ? rA[J1] : void 0;
        }
        let w6 = w++,
          DA;
        if (c1) DA = c1.onCancellationRequested(() => {
          let rA = F.sender.sendCancellation(C6, w6);
          if (rA === void 0) return z.log(`Received no promise from cancellation strategy when cancelling id ${w6}`), Promise.resolve();else return rA.catch(() => {
            z.log(`Sending cancellation messages for id ${w6} failed`);
          });
        });
        let EA = {
          jsonrpc: O,
          id: w6,
          method: N1,
          params: A6
        };
        if (t(EA), typeof F.sender.enableCancellation === "function") F.sender.enableCancellation(EA);
        return new Promise(async (rA, J1) => {
          let aA = T1 => {
              rA(T1), F.sender.cleanup(w6), DA?.dispose();
            },
            z1 = T1 => {
              J1(T1), F.sender.cleanup(w6), DA?.dispose();
            },
            f1 = {
              method: N1,
              timerStart: Date.now(),
              resolve: aA,
              reject: z1
            };
          try {
            j.set(w6, f1), await K.write(EA);
          } catch (T1) {
            throw j.delete(w6), f1.reject(new bq.ResponseError(bq.ErrorCodes.MessageWriteError, T1.message ? T1.message : "Unknown reason")), z.error("Sending request failed."), T1;
          }
        });
      },
      onRequest: (w1, $1) => {
        SA();
        let N1 = null;
        if (Af6.is(w1)) N1 = void 0, X = w1;else if (jO.string(w1)) {
          if (N1 = null, $1 !== void 0) N1 = w1, $.set(w1, {
            handler: $1,
            type: void 0
          });
        } else if ($1 !== void 0) N1 = w1.method, $.set(w1.method, {
          type: w1,
          handler: $1
        });
        return {
          dispose: () => {
            if (N1 === null) return;
            if (N1 !== void 0) $.delete(N1);else X = void 0;
          }
        };
      },
      hasPendingResponse: () => {
        return j.size > 0;
      },
      trace: async (w1, $1, N1) => {
        let A6 = !1,
          c1 = Kv.Text;
        if (N1 !== void 0) if (jO.boolean(N1)) A6 = N1;else A6 = N1.sendNotification || !1, c1 = N1.traceFormat || Kv.Text;
        if (f = w1, N = c1, f === j2.Off) T = void 0;else T = $1;
        if (A6 && !e() && !qA()) await C6.sendNotification(Kf6.type, {
          value: j2.toString(w1)
        });
      },
      onError: R.event,
      onClose: x.event,
      onUnhandledNotification: y.event,
      onDispose: b.event,
      end: () => {
        K.end();
      },
      dispose: () => {
        if (qA()) return;
        C = aI.Disposed, b.fire(void 0);
        let w1 = new bq.ResponseError(bq.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
        for (let $1 of j.values()) $1.reject(w1);
        if (j = new Map(), P = new Map(), M = new Set(), D = new RT7.LinkedMap(), jO.func(K.dispose)) K.dispose();
        if (jO.func(A.dispose)) A.dispose();
      },
      listen: () => {
        SA(), xA(), C = aI.Listening, A.listen(hA);
      },
      inspect: () => {
        (0, LT7.default)().console.log("inspect");
      }
    };
    return C6.onNotification(SG1.type, w1 => {
      if (f === j2.Off || !T) return;
      let $1 = f === j2.Verbose || f === j2.Compact;
      T.log(w1.message, $1 ? w1.verbose : void 0);
    }), C6.onNotification(ymA.type, w1 => {
      let $1 = Z.get(w1.token);
      if ($1) $1(w1.value);else B.fire(w1);
    }), C6;
  }
  hT7.createMessageConnection = UBY;
});

// Register to shared state
__$.mT7 = mT7;
