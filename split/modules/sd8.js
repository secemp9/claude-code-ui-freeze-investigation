// Module: sd8
// Dependencies: dX, Bd8, od8, sl1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sd8 = v(ad8 => {
  Object.defineProperty(ad8, "__esModule", {
    value: !0
  });
  ad8.createGetRequest = Eh5;
  ad8.getCredentials = kh5;
  var Vo1 = __$.dX(),
    Nh5 = __$.Bd8(),
    Th5 = __$.od8(),
    vh5 = __$.sl1();
  function Eh5(A) {
    return new Nh5.HttpRequest({
      protocol: A.protocol,
      hostname: A.hostname,
      port: Number(A.port),
      path: A.pathname,
      query: Array.from(A.searchParams.entries()).reduce((K, [q, Y]) => {
        return K[q] = Y, K;
      }, {}),
      fragment: A.hash
    });
  }
  async function kh5(A, K) {
    let Y = await (0, vh5.sdkStreamMixin)(A.body).transformToString();
    if (A.statusCode === 200) {
      let z = JSON.parse(Y);
      if (typeof z.AccessKeyId !== "string" || typeof z.SecretAccessKey !== "string" || typeof z.Token !== "string" || typeof z.Expiration !== "string") throw new Vo1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
        logger: K
      });
      return {
        accessKeyId: z.AccessKeyId,
        secretAccessKey: z.SecretAccessKey,
        sessionToken: z.Token,
        expiration: (0, Th5.parseRfc3339DateTime)(z.Expiration)
      };
    }
    if (A.statusCode >= 400 && A.statusCode < 500) {
      let z = {};
      try {
        z = JSON.parse(Y);
      } catch (w) {}
      throw Object.assign(new Vo1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
        logger: K
      }), {
        Code: z.Code,
        Message: z.Message
      });
    }
    throw new Vo1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
      logger: K
    });
  }
});

// Register to shared state
__$.sd8 = sd8;
