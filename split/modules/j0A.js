// Module: j0A
// Dependencies: j9, ZT, _RA, kn, SZ, IV, f54

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j0A = v((W6w, R54) => {
  var GRA = __$.j9(),
    {
      ReadableStreamFrom: rg3,
      isBlobLike: N54,
      isReadableStreamLike: og3,
      readableStreamClose: ag3,
      createDeferredPromise: sg3,
      fullyReadBody: tg3,
      extractMimeType: eg3,
      utf8DecodeBytes: E54
    } = __$.ZT(),
    {
      FormData: T54
    } = __$._RA(),
    {
      kState: D0A
    } = __$.kn(),
    {
      webidl: AF3
    } = __$.SZ(),
    {
      Blob: KF3
    } = CA("node:buffer"),
    u66 = CA("node:assert"),
    {
      isErrored: k54,
      isDisturbed: qF3
    } = CA("node:stream"),
    {
      isArrayBuffer: YF3
    } = CA("node:util/types"),
    {
      serializeAMimeType: zF3
    } = __$.IV(),
    {
      multipartFormDataParser: wF3
    } = __$.f54(),
    B66;
  try {
    let A = CA("node:crypto");
    B66 = K => A.randomInt(0, K);
  } catch {
    B66 = A => Math.floor(Math.random(A));
  }
  var AK1 = new TextEncoder();
  function HF3() {}
  var m66 = globalThis.FinalizationRegistry && process.version.indexOf("v18") !== 0,
    g66;
  if (m66) g66 = new FinalizationRegistry(A => {
    let K = A.deref();
    if (K && !K.locked && !qF3(K) && !k54(K)) K.cancel("Response object has been garbage collected").catch(HF3);
  });
  function C54(A, K = !1) {
    let q = null;
    if (A instanceof ReadableStream) q = A;else if (N54(A)) q = A.stream();else q = new ReadableStream({
      async pull(O) {
        let X = typeof z === "string" ? AK1.encode(z) : z;
        if (X.byteLength) O.enqueue(X);
        queueMicrotask(() => ag3(O));
      },
      start() {},
      type: "bytes"
    });
    u66(og3(q));
    let Y = null,
      z = null,
      w = null,
      H = null;
    if (typeof A === "string") z = A, H = "text/plain;charset=UTF-8";else if (A instanceof URLSearchParams) z = A.toString(), H = "application/x-www-form-urlencoded;charset=UTF-8";else if (YF3(A)) z = new Uint8Array(A.slice());else if (ArrayBuffer.isView(A)) z = new Uint8Array(A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength));else if (GRA.isFormDataLike(A)) {
      let O = `----formdata-undici-0${`${B66(100000000000)}`.padStart(11, "0")}`,
        X = `--${O}\r
Content-Disposition: form-data`; /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
      let $ = j => j.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"),
        _ = j => j.replace(/\r?\n|\r/g, `\r
`),
        G = [],
        Z = new Uint8Array([13, 10]);
      w = 0;
      let W = !1;
      for (let [j, M] of A) if (typeof M === "string") {
        let P = AK1.encode(X + `; name="${$(_(j))}"\r
\r
${_(M)}\r
`);
        G.push(P), w += P.byteLength;
      } else {
        let P = AK1.encode(`${X}; name="${$(_(j))}"` + (M.name ? `; filename="${$(M.name)}"` : "") + `\r
Content-Type: ${M.type || "application/octet-stream"}\r
\r
`);
        if (G.push(P, M, Z), typeof M.size === "number") w += P.byteLength + M.size + Z.byteLength;else W = !0;
      }
      let D = AK1.encode(`--${O}--`);
      if (G.push(D), w += D.byteLength, W) w = null;
      z = A, Y = async function* () {
        for (let j of G) if (j.stream) yield* j.stream();else yield j;
      }, H = `multipart/form-data; boundary=${O}`;
    } else if (N54(A)) {
      if (z = A, w = A.size, A.type) H = A.type;
    } else if (typeof A[Symbol.asyncIterator] === "function") {
      if (K) throw TypeError("keepalive");
      if (GRA.isDisturbed(A) || A.locked) throw TypeError("Response body object should not be disturbed or locked");
      q = A instanceof ReadableStream ? A : rg3(A);
    }
    if (typeof z === "string" || GRA.isBuffer(z)) w = Buffer.byteLength(z);
    if (Y != null) {
      let O;
      q = new ReadableStream({
        async start() {
          O = Y(A)[Symbol.asyncIterator]();
        },
        async pull(X) {
          let {
            value: $,
            done: _
          } = await O.next();
          if (_) queueMicrotask(() => {
            X.close(), X.byobRequest?.respond(0);
          });else if (!k54(q)) {
            let G = new Uint8Array($);
            if (G.byteLength) X.enqueue(G);
          }
          return X.desiredSize > 0;
        },
        async cancel(X) {
          await O.return();
        },
        type: "bytes"
      });
    }
    return [{
      stream: q,
      source: z,
      length: w
    }, H];
  }
  function JF3(A, K = !1) {
    if (A instanceof ReadableStream) u66(!GRA.isDisturbed(A), "The body has already been consumed."), u66(!A.locked, "The stream is locked.");
    return C54(A, K);
  }
  function OF3(A, K) {
    let [q, Y] = K.stream.tee();
    if (m66) g66.register(A, new WeakRef(q));
    return K.stream = q, {
      stream: Y,
      length: K.length,
      source: K.source
    };
  }
  function XF3(A) {
    if (A.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  }
  function $F3(A) {
    return {
      blob() {
        return W0A(this, q => {
          let Y = v54(this);
          if (Y === null) Y = "";else if (Y) Y = zF3(Y);
          return new KF3([q], {
            type: Y
          });
        }, A);
      },
      arrayBuffer() {
        return W0A(this, q => {
          return new Uint8Array(q).buffer;
        }, A);
      },
      text() {
        return W0A(this, E54, A);
      },
      json() {
        return W0A(this, GF3, A);
      },
      formData() {
        return W0A(this, q => {
          let Y = v54(this);
          if (Y !== null) switch (Y.essence) {
            case "multipart/form-data":
              {
                let z = wF3(q, Y);
                if (z === "failure") throw TypeError("Failed to parse body as FormData.");
                let w = new T54();
                return w[D0A] = z, w;
              }
            case "application/x-www-form-urlencoded":
              {
                let z = new URLSearchParams(q.toString()),
                  w = new T54();
                for (let [H, J] of z) w.append(H, J);
                return w;
              }
          }
          throw TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".');
        }, A);
      },
      bytes() {
        return W0A(this, q => {
          return new Uint8Array(q);
        }, A);
      }
    };
  }
  function _F3(A) {
    Object.assign(A.prototype, $F3(A));
  }
  async function W0A(A, K, q) {
    if (AF3.brandCheck(A, q), L54(A)) throw TypeError("Body is unusable: Body has already been read");
    XF3(A[D0A]);
    let Y = sg3(),
      z = H => Y.reject(H),
      w = H => {
        try {
          Y.resolve(K(H));
        } catch (J) {
          z(J);
        }
      };
    if (A[D0A].body == null) return w(Buffer.allocUnsafe(0)), Y.promise;
    return await tg3(A[D0A].body, w, z), Y.promise;
  }
  function L54(A) {
    let K = A[D0A].body;
    return K != null && (K.stream.locked || GRA.isDisturbed(K.stream));
  }
  function GF3(A) {
    return JSON.parse(E54(A));
  }
  function v54(A) {
    let K = A[D0A].headersList,
      q = eg3(K);
    if (q === "failure") return null;
    return q;
  }
  R54.exports = {
    extractBody: C54,
    safelyExtractBody: JF3,
    cloneBody: OF3,
    mixinBody: _F3,
    streamRegistry: g66,
    hasFinalizationRegistry: m66,
    bodyUnusable: L54
  };
});

// Register to shared state
__$.j0A = j0A;
