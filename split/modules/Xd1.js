// Module: Xd1
// Dependencies: Od1, yb, UE, sHA, Li, YJA, qO, PkA, aHA, j5
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xd1 = k(() => {
  __$.Od1();
  __$.Od1();
  __$.yb();
  __$.UE();
  __$.sHA();
  __$.Li();
  __$.YJA = class YJA extends __$.qO {
    constructor() {
      super(...arguments);
      this.versions = new __$.PkA(this._client);
    }
    create(A = {}, K) {
      let {
        betas: q,
        ...Y
      } = A ?? {};
      return this._client.post("/v1/skills?beta=true", __$.aHA({
        body: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "skills-2025-10-02"].toString()
        }, K?.headers])
      }, this._client));
    }
    retrieve(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.get(__$.ZJ`/v1/skills/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      });
    }
    list(A = {}, K) {
      let {
        betas: q,
        ...Y
      } = A ?? {};
      return this._client.getAPIList("/v1/skills?beta=true", __$.zkA, {
        query: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "skills-2025-10-02"].toString()
        }, K?.headers])
      });
    }
    delete(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.delete(__$.ZJ`/v1/skills/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      });
    }
  };
  __$.YJA.Versions = __$.PkA;
});

// Register to shared state
__$.Xd1 = Xd1;
