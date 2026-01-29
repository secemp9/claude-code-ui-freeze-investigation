// Module: iw4
// Dependencies: T46

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iw4 = v((L8w, lw4) => {
  var {
      Transform: Jr3
    } = CA("node:stream"),
    {
      isASCIINumber: pw4,
      isValidLastEventId: dw4
    } = __$.T46(),
    fQ = [239, 187, 191];
  class cw4 extends Jr3 {
    state = null;
    checkBOM = !0;
    crlfCheck = !1;
    eventEndCheck = !1;
    buffer = null;
    pos = 0;
    event = {
      data: void 0,
      event: void 0,
      id: void 0,
      retry: void 0
    };
    constructor(A = {}) {
      A.readableObjectMode = !0;
      super(A);
      if (this.state = A.eventSourceSettings || {}, A.push) this.push = A.push;
    }
    _transform(A, K, q) {
      if (A.length === 0) {
        q();
        return;
      }
      if (this.buffer) this.buffer = Buffer.concat([this.buffer, A]);else this.buffer = A;
      if (this.checkBOM) switch (this.buffer.length) {
        case 1:
          if (this.buffer[0] === fQ[0]) {
            q();
            return;
          }
          this.checkBOM = !1, q();
          return;
        case 2:
          if (this.buffer[0] === fQ[0] && this.buffer[1] === fQ[1]) {
            q();
            return;
          }
          this.checkBOM = !1;
          break;
        case 3:
          if (this.buffer[0] === fQ[0] && this.buffer[1] === fQ[1] && this.buffer[2] === fQ[2]) {
            this.buffer = Buffer.alloc(0), this.checkBOM = !1, q();
            return;
          }
          this.checkBOM = !1;
          break;
        default:
          if (this.buffer[0] === fQ[0] && this.buffer[1] === fQ[1] && this.buffer[2] === fQ[2]) this.buffer = this.buffer.subarray(3);
          this.checkBOM = !1;
          break;
      }
      while (this.pos < this.buffer.length) {
        if (this.eventEndCheck) {
          if (this.crlfCheck) {
            if (this.buffer[this.pos] === 10) {
              this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.crlfCheck = !1;
              continue;
            }
            this.crlfCheck = !1;
          }
          if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
            if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
            if (this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.event.data !== void 0 || this.event.event || this.event.id || this.event.retry) this.processEvent(this.event);
            this.clearEvent();
            continue;
          }
          this.eventEndCheck = !1;
          continue;
        }
        if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
          if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
          this.parseLine(this.buffer.subarray(0, this.pos), this.event), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.eventEndCheck = !0;
          continue;
        }
        this.pos++;
      }
      q();
    }
    parseLine(A, K) {
      if (A.length === 0) return;
      let q = A.indexOf(58);
      if (q === 0) return;
      let Y = "",
        z = "";
      if (q !== -1) {
        Y = A.subarray(0, q).toString("utf8");
        let w = q + 1;
        if (A[w] === 32) ++w;
        z = A.subarray(w).toString("utf8");
      } else Y = A.toString("utf8"), z = "";
      switch (Y) {
        case "data":
          if (K[Y] === void 0) K[Y] = z;else K[Y] += `
${z}`;
          break;
        case "retry":
          if (pw4(z)) K[Y] = z;
          break;
        case "id":
          if (dw4(z)) K[Y] = z;
          break;
        case "event":
          if (z.length > 0) K[Y] = z;
          break;
      }
    }
    processEvent(A) {
      if (A.retry && pw4(A.retry)) this.state.reconnectionTime = parseInt(A.retry, 10);
      if (A.id && dw4(A.id)) this.state.lastEventId = A.id;
      if (A.data !== void 0) this.push({
        type: A.event || "message",
        options: {
          data: A.data,
          lastEventId: this.state.lastEventId,
          origin: this.state.origin
        }
      });
    }
    clearEvent() {
      this.event = {
        data: void 0,
        event: void 0,
        id: void 0,
        retry: void 0
      };
    }
  }
  lw4.exports = {
    EventSourceStream: cw4
  };
});

// Register to shared state
__$.iw4 = iw4;
