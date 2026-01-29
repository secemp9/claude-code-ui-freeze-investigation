// Module: GW1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GW1 = v(QI7 => {
  Object.defineProperty(QI7, "__esModule", {
    value: !0
  });
  QI7.Diagnostics = void 0;
  var _W1 = new Map(),
    IT6 = "start",
    ST6 = "end",
    UoY = "statsig::diagnostics";
  QI7.Diagnostics = {
    _getMarkers: A => {
      return _W1.get(A);
    },
    _markInitOverallStart: A => {
      kDA(A, EDA({}, IT6, "overall"));
    },
    _markInitOverallEnd: (A, K, q) => {
      kDA(A, EDA({
        success: K,
        error: K ? void 0 : {
          name: "InitializeError",
          message: "Failed to initialize"
        },
        evaluationDetails: q
      }, ST6, "overall"));
    },
    _markInitNetworkReqStart: (A, K) => {
      kDA(A, EDA(K, IT6, "initialize", "network_request"));
    },
    _markInitNetworkReqEnd: (A, K) => {
      kDA(A, EDA(K, ST6, "initialize", "network_request"));
    },
    _markInitProcessStart: A => {
      kDA(A, EDA({}, IT6, "initialize", "process"));
    },
    _markInitProcessEnd: (A, K) => {
      kDA(A, EDA(K, ST6, "initialize", "process"));
    },
    _clearMarkers: A => {
      _W1.delete(A);
    },
    _formatError(A) {
      if (!(A && typeof A === "object")) return;
      return {
        code: hT6(A, "code"),
        name: hT6(A, "name"),
        message: hT6(A, "message")
      };
    },
    _getDiagnosticsData(A, K, q, Y) {
      var z;
      return {
        success: (A === null || A === void 0 ? void 0 : A.ok) === !0,
        statusCode: A === null || A === void 0 ? void 0 : A.status,
        sdkRegion: (z = A === null || A === void 0 ? void 0 : A.headers) === null || z === void 0 ? void 0 : z.get("x-statsig-region"),
        isDelta: q.includes('"is_delta":true') === !0 ? !0 : void 0,
        attempt: K,
        error: QI7.Diagnostics._formatError(Y)
      };
    },
    _enqueueDiagnosticsEvent(A, K, q, Y) {
      let z = QI7.Diagnostics._getMarkers(q);
      if (z == null || z.length <= 0) return -1;
      let w = z[z.length - 1].timestamp - z[0].timestamp;
      QI7.Diagnostics._clearMarkers(q);
      let H = poY(A, {
        context: "initialize",
        markers: z.slice(),
        statsigOptions: Y
      });
      return K.enqueue(H), w;
    }
  };
  function EDA(A, K, q, Y) {
    return Object.assign({
      key: q,
      action: K,
      step: Y,
      timestamp: Date.now()
    }, A);
  }
  function poY(A, K) {
    return {
      eventName: UoY,
      user: A,
      value: null,
      metadata: K,
      time: Date.now()
    };
  }
  function kDA(A, K) {
    var q;
    let Y = (q = _W1.get(A)) !== null && q !== void 0 ? q : [];
    Y.push(K), _W1.set(A, Y);
  }
  function hT6(A, K) {
    if (K in A) return A[K];
    return;
  }
});

// Register to shared state
__$.GW1 = GW1;
