// Module: gV6
// Dependencies: SWA, is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gV6 = v(BN7 => {
  Object.defineProperty(BN7, "__esModule", {
    value: !0
  });
  BN7.Message = BN7.NotificationType9 = BN7.NotificationType8 = BN7.NotificationType7 = BN7.NotificationType6 = BN7.NotificationType5 = BN7.NotificationType4 = BN7.NotificationType3 = BN7.NotificationType2 = BN7.NotificationType1 = BN7.NotificationType0 = BN7.NotificationType = BN7.RequestType9 = BN7.RequestType8 = BN7.RequestType7 = BN7.RequestType6 = BN7.RequestType5 = BN7.RequestType4 = BN7.RequestType3 = BN7.RequestType2 = BN7.RequestType1 = BN7.RequestType = BN7.RequestType0 = BN7.AbstractMessageSignature = BN7.ParameterStructures = BN7.ResponseError = BN7.ErrorCodes = void 0;
  var z5A = __$.SWA(),
    BV6;
  (function (A) {
    A.ParseError = -32700, A.InvalidRequest = -32600, A.MethodNotFound = -32601, A.InvalidParams = -32602, A.InternalError = -32603, A.jsonrpcReservedErrorRangeStart = -32099, A.serverErrorStart = -32099, A.MessageWriteError = -32099, A.MessageReadError = -32098, A.PendingResponseRejected = -32097, A.ConnectionInactive = -32096, A.ServerNotInitialized = -32002, A.UnknownErrorCode = -32001, A.jsonrpcReservedErrorRangeEnd = -32000, A.serverErrorEnd = -32000;
  })(BV6 || (BN7.ErrorCodes = BV6 = {}));
  class mV6 extends Error {
    constructor(A, K, q) {
      super(K);
      this.code = z5A.number(A) ? A : BV6.UnknownErrorCode, this.data = q, Object.setPrototypeOf(this, mV6.prototype);
    }
    toJson() {
      let A = {
        code: this.code,
        message: this.message
      };
      if (this.data !== void 0) A.data = this.data;
      return A;
    }
  }
  BN7.ResponseError = mV6;
  class eD {
    constructor(A) {
      this.kind = A;
    }
    static is(A) {
      return A === eD.auto || A === eD.byName || A === eD.byPosition;
    }
    toString() {
      return this.kind;
    }
  }
  BN7.ParameterStructures = eD;
  eD.auto = new eD("auto");
  eD.byPosition = new eD("byPosition");
  eD.byName = new eD("byName");
  class hJ {
    constructor(A, K) {
      this.method = A, this.numberOfParams = K;
    }
    get parameterStructures() {
      return eD.auto;
    }
  }
  BN7.AbstractMessageSignature = hJ;
  class WN7 extends hJ {
    constructor(A) {
      super(A, 0);
    }
  }
  BN7.RequestType0 = WN7;
  class DN7 extends hJ {
    constructor(A, K = eD.auto) {
      super(A, 1);
      this._parameterStructures = K;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  BN7.RequestType = DN7;
  class jN7 extends hJ {
    constructor(A, K = eD.auto) {
      super(A, 1);
      this._parameterStructures = K;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  BN7.RequestType1 = jN7;
  class MN7 extends hJ {
    constructor(A) {
      super(A, 2);
    }
  }
  BN7.RequestType2 = MN7;
  class PN7 extends hJ {
    constructor(A) {
      super(A, 3);
    }
  }
  BN7.RequestType3 = PN7;
  class VN7 extends hJ {
    constructor(A) {
      super(A, 4);
    }
  }
  BN7.RequestType4 = VN7;
  class fN7 extends hJ {
    constructor(A) {
      super(A, 5);
    }
  }
  BN7.RequestType5 = fN7;
  class NN7 extends hJ {
    constructor(A) {
      super(A, 6);
    }
  }
  BN7.RequestType6 = NN7;
  class TN7 extends hJ {
    constructor(A) {
      super(A, 7);
    }
  }
  BN7.RequestType7 = TN7;
  class vN7 extends hJ {
    constructor(A) {
      super(A, 8);
    }
  }
  BN7.RequestType8 = vN7;
  class EN7 extends hJ {
    constructor(A) {
      super(A, 9);
    }
  }
  BN7.RequestType9 = EN7;
  class kN7 extends hJ {
    constructor(A, K = eD.auto) {
      super(A, 1);
      this._parameterStructures = K;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  BN7.NotificationType = kN7;
  class CN7 extends hJ {
    constructor(A) {
      super(A, 0);
    }
  }
  BN7.NotificationType0 = CN7;
  class LN7 extends hJ {
    constructor(A, K = eD.auto) {
      super(A, 1);
      this._parameterStructures = K;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  BN7.NotificationType1 = LN7;
  class RN7 extends hJ {
    constructor(A) {
      super(A, 2);
    }
  }
  BN7.NotificationType2 = RN7;
  class yN7 extends hJ {
    constructor(A) {
      super(A, 3);
    }
  }
  BN7.NotificationType3 = yN7;
  class IN7 extends hJ {
    constructor(A) {
      super(A, 4);
    }
  }
  BN7.NotificationType4 = IN7;
  class SN7 extends hJ {
    constructor(A) {
      super(A, 5);
    }
  }
  BN7.NotificationType5 = SN7;
  class hN7 extends hJ {
    constructor(A) {
      super(A, 6);
    }
  }
  BN7.NotificationType6 = hN7;
  class bN7 extends hJ {
    constructor(A) {
      super(A, 7);
    }
  }
  BN7.NotificationType7 = bN7;
  class xN7 extends hJ {
    constructor(A) {
      super(A, 8);
    }
  }
  BN7.NotificationType8 = xN7;
  class uN7 extends hJ {
    constructor(A) {
      super(A, 9);
    }
  }
  BN7.NotificationType9 = uN7;
  var ZN7;
  (function (A) {
    function K(z) {
      let w = z;
      return w && z5A.string(w.method) && (z5A.string(w.id) || z5A.number(w.id));
    }
    A.isRequest = K;
    function q(z) {
      let w = z;
      return w && z5A.string(w.method) && z.id === void 0;
    }
    A.isNotification = q;
    function Y(z) {
      let w = z;
      return w && (w.result !== void 0 || !!w.error) && (z5A.string(w.id) || z5A.number(w.id) || w.id === null);
    }
    A.isResponse = Y;
  })(ZN7 || (BN7.Message = ZN7 = {}));
});

// Register to shared state
__$.gV6 = gV6;
