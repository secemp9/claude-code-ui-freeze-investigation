// Module: A84
// Dependencies: gLA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A84 = v(BT3 => {
  var bT3 = __$.gLA(),
    A71 = CA("stream");
  class t64 extends A71.Transform {
    priorSignature;
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(A) {
      super({
        autoDestroy: !0,
        readableObjectMode: !0,
        writableObjectMode: !0,
        ...A
      });
      this.priorSignature = A.priorSignature, this.eventStreamCodec = A.eventStreamCodec, this.messageSigner = A.messageSigner, this.systemClockOffsetProvider = A.systemClockOffsetProvider;
    }
    async _transform(A, K, q) {
      try {
        let Y = new Date(Date.now() + (await this.systemClockOffsetProvider())),
          z = {
            ":date": {
              type: "timestamp",
              value: Y
            }
          },
          w = await this.messageSigner.sign({
            message: {
              body: A,
              headers: z
            },
            priorSignature: this.priorSignature
          }, {
            signingDate: Y
          });
        this.priorSignature = w.signature;
        let H = this.eventStreamCodec.encode({
          headers: {
            ...z,
            ":chunk-signature": {
              type: "binary",
              value: xT3(w.signature)
            }
          },
          body: A
        });
        return this.push(H), q();
      } catch (Y) {
        q(Y);
      }
    }
  }
  function xT3(A) {
    let K = Buffer.from(A, "hex");
    return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  class e64 {
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(A) {
      this.messageSigner = A.messageSigner, this.eventStreamCodec = new bT3.EventStreamCodec(A.utf8Encoder, A.utf8Decoder), this.systemClockOffsetProvider = async () => A.systemClockOffset ?? 0;
    }
    async handle(A, K, q = {}) {
      let Y = K.request,
        {
          body: z,
          query: w
        } = Y;
      if (!(z instanceof A71.Readable)) throw Error("Eventstream payload must be a Readable stream.");
      let H = z;
      Y.body = new A71.PassThrough({
        objectMode: !0
      });
      let O = Y.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ?? w?.["X-Amz-Signature"] ?? "",
        X = new t64({
          priorSignature: O,
          eventStreamCodec: this.eventStreamCodec,
          messageSigner: await this.messageSigner(),
          systemClockOffsetProvider: this.systemClockOffsetProvider
        });
      A71.pipeline(H, X, Y.body, _ => {
        if (_) throw _;
      });
      let $;
      try {
        $ = await A(K);
      } catch (_) {
        throw Y.body.end(), _;
      }
      return $;
    }
  }
  var uT3 = A => new e64(A);
  BT3.eventStreamPayloadHandlerProvider = uT3;
});

// Register to shared state
__$.A84 = A84;
