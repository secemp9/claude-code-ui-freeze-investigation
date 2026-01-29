// Module: fy6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fy6 = v($8K => {
  Object.defineProperty($8K, "__esModule", {
    value: !0
  });
  $8K.detectRuntime = void 0;
  var ZW2 = () => {
    if (typeof process === "object" && process && typeof process.env === "object" && process.env && typeof process.version === "string") return "node";
    if (typeof window === "object") return "browser";
    if (typeof WebSocketPair < "u") return "cloudflare-worker";
    if (typeof EdgeRuntime === "string") return "vercel-edge";
    if (typeof WorkerGlobalScope < "u" && typeof importScripts === "function") return "web-worker";
    return "unknown";
  };
  $8K.detectRuntime = ZW2;
});

// Register to shared state
__$.fy6 = fy6;
