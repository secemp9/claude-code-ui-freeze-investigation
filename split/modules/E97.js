// Module: E97
// Dependencies: RO1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E97 = v((Mow, v97) => {
  var jow = __$.RO1(),
    {
      Duplex: $HY
    } = CA("stream");
  function N97(A) {
    A.emit("close");
  }
  function _HY() {
    if (!this.destroyed && this._writableState.finished) this.destroy();
  }
  function T97(A) {
    if (this.removeListener("error", T97), this.destroy(), this.listenerCount("error") === 0) this.emit("error", A);
  }
  function GHY(A, K) {
    let q = !0,
      Y = new $HY({
        ...K,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1
      });
    return A.on("message", function (w, H) {
      let J = !H && Y._readableState.objectMode ? w.toString() : w;
      if (!Y.push(J)) A.pause();
    }), A.once("error", function (w) {
      if (Y.destroyed) return;
      q = !1, Y.destroy(w);
    }), A.once("close", function () {
      if (Y.destroyed) return;
      Y.push(null);
    }), Y._destroy = function (z, w) {
      if (A.readyState === A.CLOSED) {
        w(z), process.nextTick(N97, Y);
        return;
      }
      let H = !1;
      if (A.once("error", function (O) {
        H = !0, w(O);
      }), A.once("close", function () {
        if (!H) w(z);
        process.nextTick(N97, Y);
      }), q) A.terminate();
    }, Y._final = function (z) {
      if (A.readyState === A.CONNECTING) {
        A.once("open", function () {
          Y._final(z);
        });
        return;
      }
      if (A._socket === null) return;
      if (A._socket._writableState.finished) {
        if (z(), Y._readableState.endEmitted) Y.destroy();
      } else A._socket.once("finish", function () {
        z();
      }), A.close();
    }, Y._read = function () {
      if (A.isPaused) A.resume();
    }, Y._write = function (z, w, H) {
      if (A.readyState === A.CONNECTING) {
        A.once("open", function () {
          Y._write(z, w, H);
        });
        return;
      }
      A.send(z, H);
    }, Y.on("end", _HY), Y.on("error", T97), Y;
  }
  v97.exports = GHY;
});

// Register to shared state
__$.E97 = E97;
