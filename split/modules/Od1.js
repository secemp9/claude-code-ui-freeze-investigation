// Module: Od1
// Dependencies: yb, UE, sHA, Li, PkA, qO, ZJ, aHA, j5, zkA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Od1 = k(() => {
  __$.yb();
  __$.UE();
  __$.sHA();
  __$.Li();
  __$.PkA = class PkA extends __$.qO {
    create(A, K = {}, q) {
      let {
        betas: Y,
        ...z
      } = K ?? {};
      return this._client.post(__$.ZJ`/v1/skills/${A}/versions?beta=true`, __$.aHA({
        body: z,
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      }, this._client));
    }
    retrieve(A, K, q) {
      let {
        skill_id: Y,
        betas: z
      } = K;
      return this._client.get(__$.ZJ`/v1/skills/${Y}/versions/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(z ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      });
    }
    list(A, K = {}, q) {
      let {
        betas: Y,
        ...z
      } = K ?? {};
      return this._client.getAPIList(__$.ZJ`/v1/skills/${A}/versions?beta=true`, __$.zkA, {
        query: z,
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(Y ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      });
    }
    delete(A, K, q) {
      let {
        skill_id: Y,
        betas: z
      } = K;
      return this._client.delete(__$.ZJ`/v1/skills/${Y}/versions/${A}?beta=true`, {
        ...q,
        headers: __$.j5([{
          "anthropic-beta": [...(z ?? []), "skills-2025-10-02"].toString()
        }, q?.headers])
      });
    }
  };
});

// Register to shared state
__$.Od1 = Od1;
