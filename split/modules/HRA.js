// Module: HRA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HRA = v((w6w, uq4) => {
  var Rq4 = ["GET", "HEAD", "POST"],
    sB3 = new Set(Rq4),
    tB3 = [101, 204, 205, 304],
    yq4 = [301, 302, 303, 307, 308],
    eB3 = new Set(yq4),
    Iq4 = ["1", "7", "9", "11", "13", "15", "17", "19", "20", "21", "22", "23", "25", "37", "42", "43", "53", "69", "77", "79", "87", "95", "101", "102", "103", "104", "109", "110", "111", "113", "115", "117", "119", "123", "135", "137", "139", "143", "161", "179", "389", "427", "465", "512", "513", "514", "515", "526", "530", "531", "532", "540", "548", "554", "556", "563", "587", "601", "636", "989", "990", "993", "995", "1719", "1720", "1723", "2049", "3659", "4045", "4190", "5060", "5061", "6000", "6566", "6665", "6666", "6667", "6668", "6669", "6679", "6697", "10080"],
    Am3 = new Set(Iq4),
    Sq4 = ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"],
    Km3 = new Set(Sq4),
    qm3 = ["follow", "manual", "error"],
    hq4 = ["GET", "HEAD", "OPTIONS", "TRACE"],
    Ym3 = new Set(hq4),
    zm3 = ["navigate", "same-origin", "no-cors", "cors"],
    wm3 = ["omit", "same-origin", "include"],
    Hm3 = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"],
    Jm3 = ["content-encoding", "content-language", "content-location", "content-type", "content-length"],
    Om3 = ["half"],
    bq4 = ["CONNECT", "TRACE", "TRACK"],
    Xm3 = new Set(bq4),
    xq4 = ["audio", "audioworklet", "font", "image", "manifest", "paintworklet", "script", "style", "track", "video", "xslt", ""],
    $m3 = new Set(xq4);
  uq4.exports = {
    subresource: xq4,
    forbiddenMethods: bq4,
    requestBodyHeader: Jm3,
    referrerPolicy: Sq4,
    requestRedirect: qm3,
    requestMode: zm3,
    requestCredentials: wm3,
    requestCache: Hm3,
    redirectStatus: yq4,
    corsSafeListedMethods: Rq4,
    nullBodyStatus: tB3,
    safeMethods: hq4,
    badPorts: Iq4,
    requestDuplex: Om3,
    subresourceSet: $m3,
    badPortsSet: Am3,
    redirectStatusSet: eB3,
    corsSafeListedMethodsSet: sB3,
    safeMethodsSet: Ym3,
    forbiddenMethodsSet: Xm3,
    referrerPolicySet: Km3
  };
});

// Register to shared state
__$.HRA = HRA;
