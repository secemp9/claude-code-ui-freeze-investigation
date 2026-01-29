// Module: iD6
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iD6 = v((M4H, I_7) => {
  var tu = __$.m3();
  __$.bY();
  var oX1 = null;
  if (tu.util.isNodejs && !tu.options.usePureJavaScript && !process.versions["node-webkit"]) oX1 = CA("crypto");
  var hNY = I_7.exports = tu.prng = tu.prng || {};
  hNY.create = function (A) {
    var K = {
        plugin: A,
        key: null,
        seed: null,
        time: null,
        reseeds: 0,
        generated: 0,
        keyBytes: ""
      },
      q = A.md,
      Y = Array(32);
    for (var z = 0; z < 32; ++z) Y[z] = q.create();
    K.pools = Y, K.pool = 0, K.generate = function (X, $) {
      if (!$) return K.generateSync(X);
      var _ = K.plugin.cipher,
        G = K.plugin.increment,
        Z = K.plugin.formatKey,
        W = K.plugin.formatSeed,
        D = tu.util.createBuffer();
      K.key = null, j();
      function j(M) {
        if (M) return $(M);
        if (D.length() >= X) return $(null, D.getBytes(X));
        if (K.generated > 1048575) K.key = null;
        if (K.key === null) return tu.util.nextTick(function () {
          w(j);
        });
        var P = _(K.key, K.seed);
        K.generated += P.length, D.putBytes(P), K.key = Z(_(K.key, G(K.seed))), K.seed = W(_(K.key, K.seed)), tu.util.setImmediate(j);
      }
    }, K.generateSync = function (X) {
      var $ = K.plugin.cipher,
        _ = K.plugin.increment,
        G = K.plugin.formatKey,
        Z = K.plugin.formatSeed;
      K.key = null;
      var W = tu.util.createBuffer();
      while (W.length() < X) {
        if (K.generated > 1048575) K.key = null;
        if (K.key === null) H();
        var D = $(K.key, K.seed);
        K.generated += D.length, W.putBytes(D), K.key = G($(K.key, _(K.seed))), K.seed = Z($(K.key, K.seed));
      }
      return W.getBytes(X);
    };
    function w(X) {
      if (K.pools[0].messageLength >= 32) return J(), X();
      var $ = 32 - K.pools[0].messageLength << 5;
      K.seedFile($, function (_, G) {
        if (_) return X(_);
        K.collect(G), J(), X();
      });
    }
    function H() {
      if (K.pools[0].messageLength >= 32) return J();
      var X = 32 - K.pools[0].messageLength << 5;
      K.collect(K.seedFileSync(X)), J();
    }
    function J() {
      K.reseeds = K.reseeds === 4294967295 ? 0 : K.reseeds + 1;
      var X = K.plugin.md.create();
      X.update(K.keyBytes);
      var $ = 1;
      for (var _ = 0; _ < 32; ++_) {
        if (K.reseeds % $ === 0) X.update(K.pools[_].digest().getBytes()), K.pools[_].start();
        $ = $ << 1;
      }
      K.keyBytes = X.digest().getBytes(), X.start(), X.update(K.keyBytes);
      var G = X.digest().getBytes();
      K.key = K.plugin.formatKey(K.keyBytes), K.seed = K.plugin.formatSeed(G), K.generated = 0;
    }
    function O(X) {
      var $ = null,
        _ = tu.util.globalScope,
        G = _.crypto || _.msCrypto;
      if (G && G.getRandomValues) $ = function (T) {
        return G.getRandomValues(T);
      };
      var Z = tu.util.createBuffer();
      if ($) while (Z.length() < X) {
        var W = Math.max(1, Math.min(X - Z.length(), 65536) / 4),
          D = new Uint32Array(Math.floor(W));
        try {
          $(D);
          for (var j = 0; j < D.length; ++j) Z.putInt32(D[j]);
        } catch (T) {
          if (!(typeof QuotaExceededError < "u" && T instanceof QuotaExceededError)) throw T;
        }
      }
      if (Z.length() < X) {
        var M,
          P,
          f,
          N = Math.floor(Math.random() * 65536);
        while (Z.length() < X) {
          P = 16807 * (N & 65535), M = 16807 * (N >> 16), P += (M & 32767) << 16, P += M >> 15, P = (P & 2147483647) + (P >> 31), N = P & 4294967295;
          for (var j = 0; j < 3; ++j) f = N >>> (j << 3), f ^= Math.floor(Math.random() * 256), Z.putByte(f & 255);
        }
      }
      return Z.getBytes(X);
    }
    if (oX1) K.seedFile = function (X, $) {
      oX1.randomBytes(X, function (_, G) {
        if (_) return $(_);
        $(null, G.toString());
      });
    }, K.seedFileSync = function (X) {
      return oX1.randomBytes(X).toString();
    };else K.seedFile = function (X, $) {
      try {
        $(null, O(X));
      } catch (_) {
        $(_);
      }
    }, K.seedFileSync = O;
    return K.collect = function (X) {
      var $ = X.length;
      for (var _ = 0; _ < $; ++_) K.pools[K.pool].update(X.substr(_, 1)), K.pool = K.pool === 31 ? 0 : K.pool + 1;
    }, K.collectInt = function (X, $) {
      var _ = "";
      for (var G = 0; G < $; G += 8) _ += String.fromCharCode(X >> G & 255);
      K.collect(_);
    }, K.registerWorker = function (X) {
      if (X === self) K.seedFile = function (_, G) {
        function Z(W) {
          var D = W.data;
          if (D.forge && D.forge.prng) self.removeEventListener("message", Z), G(D.forge.prng.err, D.forge.prng.bytes);
        }
        self.addEventListener("message", Z), self.postMessage({
          forge: {
            prng: {
              needed: _
            }
          }
        });
      };else {
        var $ = function (_) {
          var G = _.data;
          if (G.forge && G.forge.prng) K.seedFile(G.forge.prng.needed, function (Z, W) {
            X.postMessage({
              forge: {
                prng: {
                  err: Z,
                  bytes: W
                }
              }
            });
          });
        };
        X.addEventListener("message", $);
      }
    }, K;
  };
});

// Register to shared state
__$.iD6 = iD6;
