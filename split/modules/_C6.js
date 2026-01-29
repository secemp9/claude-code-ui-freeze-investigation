// Module: _C6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _C6 = v(Bl7 => {
  Object.defineProperty(Bl7, "__esModule", {
    value: !0
  });
  Bl7.StreamDecoder = void 0;
  var QB;
  (function (A) {
    A[A.NO_DATA = 0] = "NO_DATA", A[A.READING_SIZE = 1] = "READING_SIZE", A[A.READING_MESSAGE = 2] = "READING_MESSAGE";
  })(QB || (QB = {}));
  class ul7 {
    constructor(A) {
      this.maxReadMessageLength = A, this.readState = QB.NO_DATA, this.readCompressFlag = Buffer.alloc(1), this.readPartialSize = Buffer.alloc(4), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readPartialMessage = [], this.readMessageRemaining = 0;
    }
    write(A) {
      let K = 0,
        q,
        Y = [];
      while (K < A.length) switch (this.readState) {
        case QB.NO_DATA:
          this.readCompressFlag = A.slice(K, K + 1), K += 1, this.readState = QB.READING_SIZE, this.readPartialSize.fill(0), this.readSizeRemaining = 4, this.readMessageSize = 0, this.readMessageRemaining = 0, this.readPartialMessage = [];
          break;
        case QB.READING_SIZE:
          if (q = Math.min(A.length - K, this.readSizeRemaining), A.copy(this.readPartialSize, 4 - this.readSizeRemaining, K, K + q), this.readSizeRemaining -= q, K += q, this.readSizeRemaining === 0) {
            if (this.readMessageSize = this.readPartialSize.readUInt32BE(0), this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) throw Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
            if (this.readMessageRemaining = this.readMessageSize, this.readMessageRemaining > 0) this.readState = QB.READING_MESSAGE;else {
              let z = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
              this.readState = QB.NO_DATA, Y.push(z);
            }
          }
          break;
        case QB.READING_MESSAGE:
          if (q = Math.min(A.length - K, this.readMessageRemaining), this.readPartialMessage.push(A.slice(K, K + q)), this.readMessageRemaining -= q, K += q, this.readMessageRemaining === 0) {
            let z = [this.readCompressFlag, this.readPartialSize].concat(this.readPartialMessage),
              w = Buffer.concat(z, this.readMessageSize + 5);
            this.readState = QB.NO_DATA, Y.push(w);
          }
          break;
        default:
          throw Error("Unexpected read state");
      }
      return Y;
    }
  }
  Bl7.StreamDecoder = ul7;
});

// Register to shared state
__$._C6 = _C6;
