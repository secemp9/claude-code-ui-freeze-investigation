// Module: fN6
// Dependencies: hs, wL, RL7, wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fN6 = v((lWH, hL7) => {
  var {
      ono: VN6
    } = __$.hs(),
    yL7 = __$.wL(),
    ms = __$.RL7(),
    {
      ResolverError: IL7,
      ParserError: SL7,
      UnmatchedParserError: ClY,
      UnmatchedResolverError: LlY,
      isHandledError: RlY
    } = __$.wS();
  hL7.exports = ylY;
  async function ylY(A, K, q) {
    A = yL7.stripHash(A);
    let Y = K._add(A),
      z = {
        url: A,
        extension: yL7.getExtension(A)
      };
    try {
      let w = await IlY(z, q, K);
      Y.pathType = w.plugin.name, z.data = w.result;
      let H = await SlY(z, q, K);
      return Y.value = H.result, H.result;
    } catch (w) {
      if (RlY(w)) Y.value = w;
      throw w;
    }
  }
  function IlY(A, K, q) {
    return new Promise((Y, z) => {
      let w = ms.all(K.resolve);
      w = ms.filter(w, "canRead", A), ms.sort(w), ms.run(w, "read", A, q).then(Y, H);
      function H(J) {
        if (!J && K.continueOnError) z(new LlY(A.url));else if (!J || !("error" in J)) z(VN6.syntax(`Unable to resolve $ref pointer "${A.url}"`));else if (J.error instanceof IL7) z(J.error);else z(new IL7(J, A.url));
      }
    });
  }
  function SlY(A, K, q) {
    return new Promise((Y, z) => {
      let w = ms.all(K.parse),
        H = ms.filter(w, "canParse", A),
        J = H.length > 0 ? H : w;
      ms.sort(J), ms.run(J, "parse", A, q).then(O, X);
      function O($) {
        if (!$.plugin.allowEmpty && hlY($.result)) z(VN6.syntax(`Error parsing "${A.url}" as ${$.plugin.name}. 
Parsed value is empty`));else Y($);
      }
      function X($) {
        if (!$ && K.continueOnError) z(new ClY(A.url));else if (!$ || !("error" in $)) z(VN6.syntax(`Unable to parse ${A.url}`));else if ($.error instanceof SL7) z($.error);else z(new SL7($.error.message, A.url));
      }
    });
  }
  function hlY(A) {
    return A === void 0 || typeof A === "object" && Object.keys(A).length === 0 || typeof A === "string" && A.trim().length === 0 || Buffer.isBuffer(A) && A.length === 0;
  }
});

// Register to shared state
__$.fN6 = fN6;
