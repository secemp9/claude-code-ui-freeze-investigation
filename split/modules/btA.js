// Module: btA
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var btA = v(Wv8 => {
  Object.defineProperty(Wv8, "__esModule", {
    value: !0
  });
  var Rsq = CA("util"),
    htA = __$.sq(),
    _v8 = __$.H8(),
    Gv8 = "Console",
    ysq = () => {
      return {
        name: Gv8,
        setupOnce() {},
        setup(A) {
          _v8.addConsoleInstrumentationHandler(({
            args: K,
            level: q
          }) => {
            if (htA.getClient() !== A) return;
            htA.addBreadcrumb({
              category: "console",
              level: _v8.severityLevelFromString(q),
              message: Rsq.format.apply(void 0, K)
            }, {
              input: [...K],
              level: q
            });
          });
        }
      };
    },
    Zv8 = htA.defineIntegration(ysq),
    Isq = htA.convertIntegrationFnToClass(Gv8, Zv8);
  Wv8.Console = Isq;
  Wv8.consoleIntegration = Zv8;
});

// Register to shared state
__$.btA = btA;
