// Module: ST8
// Dependencies: sq, H8, pg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ST8 = v((IT8, cvA) => {
  Object.defineProperty(IT8, "__esModule", {
    value: !0
  });
  var yT8 = __$.sq(),
    RHA = __$.H8();
  function poq() {
    let A = yT8.getMainCarrier();
    if (!A.__SENTRY__) return;
    let K = {
        mongodb() {
          return new (RHA.dynamicRequire(cvA, "./node/integrations/mongo").Mongo)();
        },
        mongoose() {
          return new (RHA.dynamicRequire(cvA, "./node/integrations/mongo").Mongo)();
        },
        mysql() {
          return new (RHA.dynamicRequire(cvA, "./node/integrations/mysql").Mysql)();
        },
        pg() {
          return new (RHA.dynamicRequire(cvA, "./node/integrations/postgres").Postgres)();
        }
      },
      q = Object.keys(K).filter(Y => !!RHA.loadModule(Y)).map(Y => {
        try {
          return K[Y]();
        } catch (z) {
          return;
        }
      }).filter(Y => Y);
    if (q.length > 0) A.__SENTRY__.integrations = [...(A.__SENTRY__.integrations || []), ...q];
  }
  function doq() {
    if (yT8.addTracingExtensions(), RHA.isNodeEnv()) poq();
  }
  IT8.addExtensionMethods = doq;
});

// Register to shared state
__$.ST8 = ST8;
