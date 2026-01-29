// Module: UtA
// Dependencies: sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UtA = v(AE8 => {
  Object.defineProperty(AE8, "__esModule", {
    value: !0
  });
  var ov8 = CA("fs"),
    av8 = CA("path"),
    sv8 = __$.sq(),
    Bm1,
    tv8 = "Modules";
  function otq() {
    try {
      return CA.cache ? Object.keys(CA.cache) : [];
    } catch (A) {
      return [];
    }
  }
  function atq() {
    let A = CA.main && CA.main.paths || [],
      K = otq(),
      q = {},
      Y = {};
    return K.forEach(z => {
      let w = z,
        H = () => {
          let J = w;
          if (w = av8.dirname(J), !w || J === w || Y[J]) return;
          if (A.indexOf(w) < 0) return H();
          let O = av8.join(J, "package.json");
          if (Y[J] = !0, !ov8.existsSync(O)) return H();
          try {
            let X = JSON.parse(ov8.readFileSync(O, "utf8"));
            q[X.name] = X.version;
          } catch (X) {}
        };
      H();
    }), q;
  }
  function stq() {
    if (!Bm1) Bm1 = atq();
    return Bm1;
  }
  var ttq = () => {
      return {
        name: tv8,
        setupOnce() {},
        processEvent(A) {
          return A.modules = {
            ...A.modules,
            ...stq()
          }, A;
        }
      };
    },
    ev8 = sv8.defineIntegration(ttq),
    etq = sv8.convertIntegrationFnToClass(tv8, ev8);
  AE8.Modules = etq;
  AE8.modulesIntegration = ev8;
});

// Register to shared state
__$.UtA = UtA;
