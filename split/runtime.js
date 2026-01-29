// Runtime helpers - auto-detected, must be loaded first
import { __$ } from "./state.js";

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.23

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
import { createRequire as IcK } from "node:module";
var LcK = Object.create;
var {
    getPrototypeOf: RcK,
    defineProperty: GNA,
    getOwnPropertyNames: ac6,
    getOwnPropertyDescriptor: ycK
  } = Object,
  sc6 = Object.prototype.hasOwnProperty;
var o = (A, K, q) => {
    q = A != null ? LcK(RcK(A)) : {};
    let Y = K || !A || !A.__esModule ? GNA(q, "default", {
      value: A,
      enumerable: !0
    }) : q;
    for (let z of ac6(A)) if (!sc6.call(Y, z)) GNA(Y, z, {
      get: () => A[z],
      enumerable: !0
    });
    return Y;
  },
  oc6 = new WeakMap(),
  Rg = A => {
    var K = oc6.get(A),
      q;
    if (K) return K;
    if (K = GNA({}, "__esModule", {
      value: !0
    }), A && typeof A === "object" || typeof A === "function") ac6(A).map(Y => !sc6.call(K, Y) && GNA(K, Y, {
      get: () => A[Y],
      enumerable: !(q = ycK(A, Y)) || q.enumerable
    }));
    return oc6.set(A, K), K;
  },
  v = (A, K) => () => (K || A((K = {
    exports: {}
  }).exports, K), K.exports);
var _q = (A, K) => {
  for (var q in K) GNA(A, q, {
    get: K[q],
    enumerable: !0,
    configurable: !0,
    set: Y => K[q] = () => Y
  });
};
var k = (A, K) => () => (A && (K = A(A = 0)), K);
var CA = IcK(import.meta.url);
var ScK, BiA;

// Register runtime to shared state
if (typeof IcK !== 'undefined') __$.IcK = IcK;
if (typeof LcK !== 'undefined') __$.LcK = LcK;
if (typeof sc6 !== 'undefined') __$.sc6 = sc6;
if (typeof o !== 'undefined') __$.o = o;
if (typeof oc6 !== 'undefined') __$.oc6 = oc6;
if (typeof Rg !== 'undefined') __$.Rg = Rg;
if (typeof v !== 'undefined') __$.v = v;
if (typeof _q !== 'undefined') __$._q = _q;
if (typeof k !== 'undefined') __$.k = k;
if (typeof CA !== 'undefined') __$.CA = CA;
if (typeof ScK !== 'undefined') __$.ScK = ScK;
if (typeof BiA !== 'undefined') __$.BiA = BiA;

export { LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA };
