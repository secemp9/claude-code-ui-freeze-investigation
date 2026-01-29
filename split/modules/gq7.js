// Module: gq7
// Dependencies: z_6, YX, R2Y, tY, mq7, w_6, nKA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gq7 = k(() => {
  __$.z_6();
  __$.YX();
  __$.R2Y = __$.tY(__$.mq7), __$.w_6 = {
    name: "tokenExchangeMsi",
    async isAvailable(A) {
      let K = process.env,
        q = Boolean((A || K.AZURE_CLIENT_ID) && K.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
      if (!q) __$.R2Y.info(`${__$.mq7}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
      return q;
    },
    async getToken(A, K = {}) {
      let {
          scopes: q,
          clientId: Y
        } = A,
        z = {};
      return new __$.nKA(Object.assign(Object.assign({
        clientId: Y,
        tenantId: process.env.AZURE_TENANT_ID,
        tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE
      }, z), {
        disableInstanceDiscovery: !0
      })).getToken(q, K);
    }
  };
});

// Register to shared state
__$.gq7 = gq7;
