// Module: Ll1
// Dependencies: Zu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ll1 = v(gX5 => {
  var BX5 = __$.Zu8(),
    Wu8 = (A, K) => (q, Y) => async z => {
      let {
        response: w
      } = await q(z);
      try {
        let H = await K(w, A);
        return {
          response: w,
          output: H
        };
      } catch (H) {
        if (Object.defineProperty(H, "$response", {
          value: w,
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), !("$metadata" in H)) {
          try {
            H.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          } catch (O) {
            if (!Y.logger || Y.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");else Y.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
          }
          if (typeof H.$responseBodyText < "u") {
            if (H.$response) H.$response.body = H.$responseBodyText;
          }
          try {
            if (BX5.HttpResponse.isInstance(w)) {
              let {
                  headers: O = {}
                } = w,
                X = Object.entries(O);
              H.$metadata = {
                httpStatusCode: w.statusCode,
                requestId: Cl1(/^x-[\w-]+-request-?id$/, X),
                extendedRequestId: Cl1(/^x-[\w-]+-id-2$/, X),
                cfId: Cl1(/^x-[\w-]+-cf-id$/, X)
              };
            }
          } catch (O) {}
        }
        throw H;
      }
    },
    Cl1 = (A, K) => {
      return (K.find(([q]) => {
        return q.match(A);
      }) || [void 0, void 0])[1];
    },
    Du8 = (A, K) => (q, Y) => async z => {
      let w = A,
        H = Y.endpointV2?.url && w.urlParser ? async () => w.urlParser(Y.endpointV2.url) : w.endpoint;
      if (!H) throw Error("No valid endpoint provider available.");
      let J = await K(z.input, {
        ...A,
        endpoint: H
      });
      return q({
        ...z,
        request: J
      });
    },
    ju8 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0
    },
    Mu8 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: !0
    };
  function mX5(A, K, q) {
    return {
      applyToStack: Y => {
        Y.add(Wu8(A, q), ju8), Y.add(Du8(A, K), Mu8);
      }
    };
  }
  gX5.deserializerMiddleware = Wu8;
  gX5.deserializerMiddlewareOption = ju8;
  gX5.getSerdePlugin = mX5;
  gX5.serializerMiddleware = Du8;
  gX5.serializerMiddlewareOption = Mu8;
});

// Register to shared state
__$.Ll1 = Ll1;
