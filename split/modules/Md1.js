// Module: Md1
// Dependencies: yb, UE, wd1, y6A, Li, kkA, qO, ZJ, QR, O7
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Md1 = k(() => {
  __$.yb();
  __$.UE();
  __$.wd1();
  __$.y6A();
  __$.Li();
  __$.kkA = class kkA extends __$.qO {
    create(A, K) {
      return this._client.post("/v1/messages/batches", {
        body: A,
        ...K
      });
    }
    retrieve(A, K) {
      return this._client.get(__$.ZJ`/v1/messages/batches/${A}`, K);
    }
    list(A = {}, K) {
      return this._client.getAPIList("/v1/messages/batches", __$.QR, {
        query: A,
        ...K
      });
    }
    delete(A, K) {
      return this._client.delete(__$.ZJ`/v1/messages/batches/${A}`, K);
    }
    cancel(A, K) {
      return this._client.post(__$.ZJ`/v1/messages/batches/${A}/cancel`, K);
    }
    async results(A, K) {
      let q = await this.retrieve(A);
      if (!q.results_url) throw new __$.O7(`No batch \`results_url\`; Has it finished processing? ${q.processing_status} - ${q.id}`);
      return this._client.get(q.results_url, {
        ...K,
        headers: __$.j5([{
          Accept: "application/binary"
        }, K?.headers]),
        stream: !0,
        __binaryResponse: !0
      })._thenUnwrap((Y, z) => __$.qJA.fromResponse(z.response, z.controller));
    }
  };
});

// Register to shared state
__$.Md1 = Md1;
