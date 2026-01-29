// Module: SV8
// Dependencies: H8, KF, kV8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SV8 = v(IV8 => {
  Object.defineProperty(IV8, "__esModule", {
    value: !0
  });
  var Ppq = __$.H8(),
    LV8 = __$.KF(),
    CV8 = __$.kV8(),
    RV8 = "ModuleMetadata",
    Vpq = () => {
      return {
        name: RV8,
        setupOnce() {},
        setup(A) {
          if (typeof A.on !== "function") return;
          A.on("beforeEnvelope", K => {
            Ppq.forEachEnvelopeItem(K, (q, Y) => {
              if (Y === "event") {
                let z = Array.isArray(q) ? q[1] : void 0;
                if (z) CV8.stripMetadataFromStackFrames(z), q[1] = z;
              }
            });
          });
        },
        processEvent(A, K, q) {
          let Y = q.getOptions().stackParser;
          return CV8.addMetadataToStackFrames(Y, A), A;
        }
      };
    },
    yV8 = LV8.defineIntegration(Vpq),
    fpq = LV8.convertIntegrationFnToClass(RV8, yV8);
  IV8.ModuleMetadata = fpq;
  IV8.moduleMetadataIntegration = yV8;
});

// Register to shared state
__$.SV8 = SV8;
