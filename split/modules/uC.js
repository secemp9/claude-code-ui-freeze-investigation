// Module: uC
// Dependencies: m3, ha, lD6, iD6, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uC = v((P4H, nD6) => {
  var RG = __$.m3();
  __$.ha();
  __$.lD6();
  __$.iD6();
  __$.bY();
  (function () {
    if (RG.random && RG.random.getBytes) {
      nD6.exports = RG.random;
      return;
    }
    (function (A) {
      var K = {},
        q = [,,,,],
        Y = RG.util.createBuffer();
      K.formatKey = function (_) {
        var G = RG.util.createBuffer(_);
        return _ = [,,,,], _[0] = G.getInt32(), _[1] = G.getInt32(), _[2] = G.getInt32(), _[3] = G.getInt32(), RG.aes._expandKey(_, !1);
      }, K.formatSeed = function (_) {
        var G = RG.util.createBuffer(_);
        return _ = [,,,,], _[0] = G.getInt32(), _[1] = G.getInt32(), _[2] = G.getInt32(), _[3] = G.getInt32(), _;
      }, K.cipher = function (_, G) {
        return RG.aes._updateBlock(_, G, q, !1), Y.putInt32(q[0]), Y.putInt32(q[1]), Y.putInt32(q[2]), Y.putInt32(q[3]), Y.getBytes();
      }, K.increment = function (_) {
        return ++_[3], _;
      }, K.md = RG.md.sha256;
      function z() {
        var _ = RG.prng.create(K);
        return _.getBytes = function (G, Z) {
          return _.generate(G, Z);
        }, _.getBytesSync = function (G) {
          return _.generate(G);
        }, _;
      }
      var w = z(),
        H = null,
        J = RG.util.globalScope,
        O = J.crypto || J.msCrypto;
      if (O && O.getRandomValues) H = function (_) {
        return O.getRandomValues(_);
      };
      if (RG.options.usePureJavaScript || !RG.util.isNodejs && !H) {
        if (typeof window > "u" || window.document === void 0) ;
        if (w.collectInt(+new Date(), 32), typeof navigator < "u") {
          var X = "";
          for (var $ in navigator) try {
            if (typeof navigator[$] == "string") X += navigator[$];
          } catch (_) {}
          w.collect(X), X = null;
        }
        if (A) A().mousemove(function (_) {
          w.collectInt(_.clientX, 16), w.collectInt(_.clientY, 16);
        }), A().keypress(function (_) {
          w.collectInt(_.charCode, 8);
        });
      }
      if (!RG.random) RG.random = w;else for (var $ in w) RG.random[$] = w[$];
      RG.random.createInstance = z, nD6.exports = RG.random;
    })(typeof jQuery < "u" ? jQuery : null);
  })();
});

// Register to shared state
__$.uC = uC;
