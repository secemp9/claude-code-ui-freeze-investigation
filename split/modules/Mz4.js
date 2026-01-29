// Module: Mz4
// Dependencies: X46, Jz4, Xz4, IV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mz4 = v((H8w, jz4) => {
  var {
      kState: B0A,
      kError: $46,
      kResult: $z4,
      kAborted: cRA,
      kLastProgressEventFired: _46
    } = __$.X46(),
    {
      ProgressEvent: rl3
    } = __$.Jz4(),
    {
      getEncoding: _z4
    } = __$.Xz4(),
    {
      serializeAMimeType: ol3,
      parseMIMEType: Gz4
    } = __$.IV(),
    {
      types: al3
    } = CA("node:util"),
    {
      StringDecoder: Zz4
    } = CA("string_decoder"),
    {
      btoa: Wz4
    } = CA("node:buffer"),
    sl3 = {
      enumerable: !0,
      writable: !1,
      configurable: !1
    };
  function tl3(A, K, q, Y) {
    if (A[B0A] === "loading") throw new DOMException("Invalid state", "InvalidStateError");
    A[B0A] = "loading", A[$z4] = null, A[$46] = null;
    let w = K.stream().getReader(),
      H = [],
      J = w.read(),
      O = !0;
    (async () => {
      while (!A[cRA]) try {
        let {
          done: X,
          value: $
        } = await J;
        if (O && !A[cRA]) queueMicrotask(() => {
          mn("loadstart", A);
        });
        if (O = !1, !X && al3.isUint8Array($)) {
          if (H.push($), (A[_46] === void 0 || Date.now() - A[_46] >= 50) && !A[cRA]) A[_46] = Date.now(), queueMicrotask(() => {
            mn("progress", A);
          });
          J = w.read();
        } else if (X) {
          queueMicrotask(() => {
            A[B0A] = "done";
            try {
              let _ = el3(H, q, K.type, Y);
              if (A[cRA]) return;
              A[$z4] = _, mn("load", A);
            } catch (_) {
              A[$46] = _, mn("error", A);
            }
            if (A[B0A] !== "loading") mn("loadend", A);
          });
          break;
        }
      } catch (X) {
        if (A[cRA]) return;
        queueMicrotask(() => {
          if (A[B0A] = "done", A[$46] = X, mn("error", A), A[B0A] !== "loading") mn("loadend", A);
        });
        break;
      }
    })();
  }
  function mn(A, K) {
    let q = new rl3(A, {
      bubbles: !1,
      cancelable: !1
    });
    K.dispatchEvent(q);
  }
  function el3(A, K, q, Y) {
    switch (K) {
      case "DataURL":
        {
          let z = "data:",
            w = Gz4(q || "application/octet-stream");
          if (w !== "failure") z += ol3(w);
          z += ";base64,";
          let H = new Zz4("latin1");
          for (let J of A) z += Wz4(H.write(J));
          return z += Wz4(H.end()), z;
        }
      case "Text":
        {
          let z = "failure";
          if (Y) z = _z4(Y);
          if (z === "failure" && q) {
            let w = Gz4(q);
            if (w !== "failure") z = _z4(w.parameters.get("charset"));
          }
          if (z === "failure") z = "UTF-8";
          return Ai3(A, z);
        }
      case "ArrayBuffer":
        return Dz4(A).buffer;
      case "BinaryString":
        {
          let z = "",
            w = new Zz4("latin1");
          for (let H of A) z += w.write(H);
          return z += w.end(), z;
        }
    }
  }
  function Ai3(A, K) {
    let q = Dz4(A),
      Y = Ki3(q),
      z = 0;
    if (Y !== null) K = Y, z = Y === "UTF-8" ? 3 : 2;
    let w = q.slice(z);
    return new TextDecoder(K).decode(w);
  }
  function Ki3(A) {
    let [K, q, Y] = A;
    if (K === 239 && q === 187 && Y === 191) return "UTF-8";else if (K === 254 && q === 255) return "UTF-16BE";else if (K === 255 && q === 254) return "UTF-16LE";
    return null;
  }
  function Dz4(A) {
    let K = A.reduce((Y, z) => {
        return Y + z.byteLength;
      }, 0),
      q = 0;
    return A.reduce((Y, z) => {
      return Y.set(z, q), q += z.byteLength, Y;
    }, new Uint8Array(K));
  }
  jz4.exports = {
    staticPropertyDescriptors: sl3,
    readOperation: tl3,
    fireAProgressEvent: mn
  };
});

// Register to shared state
__$.Mz4 = Mz4;
