// Module: Hd1
// Dependencies: yb, UE, wd1, y6A, Li, MkA, qO, j5, ZJ, QR
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hd1 = k(() => {
  __$.yb();
  __$.UE();
  __$.wd1();
  __$.y6A();
  __$.Li();
  __$.MkA = class MkA extends __$.qO {
    create(A, K) {
      let {
        betas: q,
        ...Y
      } = A;
      return this._client.post("/v1/messages/batches?beta=true", {
        body: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "message-batches-2024-09-24"].toString()
        }, K?.headers])
      });
    }
    retrieve(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.get(__$.ZJ`/v1/messages/batches/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "message-batches-2024-09-24"].toString()
        }, q?.headers])
      });
    }
    list(A = {}, K) {
      let {
        betas: q,
        ...Y
      } = A ?? {};
      return this._client.getAPIList("/v1/messages/batches?beta=true", __$.QR, {
        query: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "message-batches-2024-09-24"].toString()
        }, K?.headers])
      });
    }
    delete(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.delete(__$.ZJ`/v1/messages/batches/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "message-batches-2024-09-24"].toString()
        }, q?.headers])
      });
    }
    cancel(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.post(__$.ZJ`/v1/messages/batches/${A}/cancel?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "message-batches-2024-09-24"].toString()
        }, q?.headers])
      });
    }
    async results(A, K = {}, q) {
      let Y = await this.retrieve(A);
      if (!Y.results_url) throw new __$.O7(`No batch \`results_url\`; Has it finished processing? ${Y.processing_status} - ${Y.id}`);
      let {
        betas: z
      } = K ?? {};
      return this._client.get(Y.results_url, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(z ?? []), "message-batches-2024-09-24"].toString(),
          Accept: "application/binary"
        }, q?.headers]),
        stream: !0,
        __binaryResponse: !0
      })._thenUnwrap((w, H) => __$.qJA.fromResponse(H.response, H.controller));
    }
  };
});

// Register to shared state
__$.Hd1 = Hd1;
