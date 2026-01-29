// Module: mf6
// Dependencies: Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mf6 = v(xFY => {
  var {
      DOCUMENT_MODE: dWA
    } = __$.Ts(),
    oE7 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
    SFY = oE7.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]),
    hFY = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"],
    aE7 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
    bFY = aE7.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);
  function nE7(A) {
    let K = A.indexOf('"') !== -1 ? "'" : '"';
    return K + A + K;
  }
  function rE7(A, K) {
    for (let q = 0; q < K.length; q++) if (A.indexOf(K[q]) === 0) return !0;
    return !1;
  }
  xFY.isConforming = function (A) {
    return A.name === "html" && A.publicId === null && (A.systemId === null || A.systemId === "about:legacy-compat");
  };
  xFY.getDocumentMode = function (A) {
    if (A.name !== "html") return dWA.QUIRKS;
    let K = A.systemId;
    if (K && K.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") return dWA.QUIRKS;
    let q = A.publicId;
    if (q !== null) {
      if (q = q.toLowerCase(), hFY.indexOf(q) > -1) return dWA.QUIRKS;
      let Y = K === null ? SFY : oE7;
      if (rE7(q, Y)) return dWA.QUIRKS;
      if (Y = K === null ? aE7 : bFY, rE7(q, Y)) return dWA.LIMITED_QUIRKS;
    }
    return dWA.NO_QUIRKS;
  };
  xFY.serializeContent = function (A, K, q) {
    let Y = "!DOCTYPE ";
    if (A) Y += A;
    if (K) Y += " PUBLIC " + nE7(K);else if (q) Y += " SYSTEM";
    if (q !== null) Y += " " + nE7(q);
    return Y;
  };
});

// Register to shared state
__$.mf6 = mf6;
