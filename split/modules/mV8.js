// Module: mV8
// Dependencies: H8, KF, qV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mV8 = v(BV8 => {
  Object.defineProperty(BV8, "__esModule", {
    value: !0
  });
  var hV8 = __$.H8(),
    bV8 = __$.KF(),
    vpq = __$.qV(),
    aB1 = {
      include: {
        cookies: !0,
        data: !0,
        headers: !0,
        ip: !1,
        query_string: !0,
        url: !0,
        user: {
          id: !0,
          username: !0,
          email: !0
        }
      },
      transactionNamingScheme: "methodPath"
    },
    xV8 = "RequestData",
    Epq = (A = {}) => {
      let K = hV8.addRequestDataToEvent,
        q = {
          ...aB1,
          ...A,
          include: {
            method: !0,
            ...aB1.include,
            ...A.include,
            user: A.include && typeof A.include.user === "boolean" ? A.include.user : {
              ...aB1.include.user,
              ...(A.include || {}).user
            }
          }
        };
      return {
        name: xV8,
        setupOnce() {},
        processEvent(Y, z, w) {
          let {
              transactionNamingScheme: H
            } = q,
            {
              sdkProcessingMetadata: J = {}
            } = Y,
            O = J.request;
          if (!O) return Y;
          let X = J.requestDataOptionsFromExpressHandler || J.requestDataOptionsFromGCPWrapper || Cpq(q),
            $ = K(Y, O, X);
          if (Y.type === "transaction" || H === "handler") return $;
          let G = O._sentryTransaction;
          if (G) {
            let Z = vpq.spanToJSON(G).description || "",
              W = Lpq(w) === "sentry.javascript.nextjs" ? Z.startsWith("/api") : H !== "path",
              [D] = hV8.extractPathForTransaction(O, {
                path: !0,
                method: W,
                customRoute: Z
              });
            $.transaction = D;
          }
          return $;
        }
      };
    },
    uV8 = bV8.defineIntegration(Epq),
    kpq = bV8.convertIntegrationFnToClass(xV8, uV8);
  function Cpq(A) {
    let {
        transactionNamingScheme: K,
        include: {
          ip: q,
          user: Y,
          ...z
        }
      } = A,
      w = [];
    for (let [J, O] of Object.entries(z)) if (O) w.push(J);
    let H;
    if (Y === void 0) H = !0;else if (typeof Y === "boolean") H = Y;else {
      let J = [];
      for (let [O, X] of Object.entries(Y)) if (X) J.push(O);
      H = J;
    }
    return {
      include: {
        ip: q,
        user: H,
        request: w.length !== 0 ? w : void 0,
        transaction: K
      }
    };
  }
  function Lpq(A) {
    try {
      return A.getOptions()._metadata.sdk.name;
    } catch (K) {
      return;
    }
  }
  BV8.RequestData = kpq;
  BV8.requestDataIntegration = uV8;
});

// Register to shared state
__$.mV8 = mV8;
