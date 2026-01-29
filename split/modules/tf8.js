// Module: tf8
// Dependencies: sq, H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tf8 = v(sf8 => {
  Object.defineProperty(sf8, "__esModule", {
    value: !0
  });
  var Hm1 = __$.sq(),
    af8 = __$.H8(),
    Riq = __$.wV(),
    yiq = __$.Gi();
  function Iiq(A) {
    return !!A && !!A.$use;
  }
  class jtA {
    static __initStatic() {
      this.id = "Prisma";
    }
    constructor(A = {}) {
      if (this.name = jtA.id, Iiq(A.client) && !A.client._sentryInstrumented) {
        af8.addNonEnumerableProperty(A.client, "_sentryInstrumented", !0);
        let K = {};
        try {
          let q = A.client._engineConfig;
          if (q) {
            let {
              activeProvider: Y,
              clientVersion: z
            } = q;
            if (Y) K["db.system"] = Y;
            if (z) K["db.prisma.version"] = z;
          }
        } catch (q) {}
        A.client.$use((q, Y) => {
          if (yiq.shouldDisableAutoInstrumentation(Hm1.getCurrentHub)) return Y(q);
          let {
            action: z,
            model: w
          } = q;
          return Hm1.startSpan({
            name: w ? `${w} ${z}` : z,
            onlyIfParent: !0,
            op: "db.prisma",
            attributes: {
              [Hm1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.prisma"
            },
            data: {
              ...K,
              "db.operation": z
            }
          }, () => Y(q));
        });
      } else Riq.DEBUG_BUILD && af8.logger.warn("Unsupported Prisma client provided to PrismaIntegration. Provided client:", A.client);
    }
    setupOnce() {}
  }
  jtA.__initStatic();
  sf8.Prisma = jtA;
});

// Register to shared state
__$.tf8 = tf8;
