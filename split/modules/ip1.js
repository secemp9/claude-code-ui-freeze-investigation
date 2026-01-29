// Module: ip1
// Dependencies: yb, UE, sHA, Li, HkA, qO, QR, j5, ZJ, aHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ip1 = k(() => {
  __$.yb();
  __$.UE();
  __$.sHA();
  __$.Li();
  __$.HkA = class HkA extends __$.qO {
    list(A = {}, K) {
      let {
        betas: q,
        ...Y
      } = A ?? {};
      return this._client.getAPIList("/v1/files", __$.QR, {
        query: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "files-api-2025-04-14"].toString()
        }, K?.headers])
      });
    }
    delete(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.delete(__$.ZJ`/v1/files/${A}`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString()
        }, q?.headers])
      });
    }
    download(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.get(__$.ZJ`/v1/files/${A}/content`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString(),
          Accept: "application/binary"
        }, q?.headers]),
        __binaryResponse: !0
      });
    }
    retrieveMetadata(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.get(__$.ZJ`/v1/files/${A}`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "files-api-2025-04-14"].toString()
        }, q?.headers])
      });
    }
    upload(A, K) {
      let {
        betas: q,
        ...Y
      } = A;
      return this._client.post("/v1/files", __$.aHA({
        body: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "files-api-2025-04-14"].toString()
        }, K?.headers])
      }, this._client));
    }
  };
});

// Register to shared state
__$.ip1 = ip1;
