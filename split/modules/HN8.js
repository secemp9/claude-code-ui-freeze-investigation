// Module: HN8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HN8 = v((wN8, Wi) => {
  Object.defineProperty(wN8, "__esModule", {
    value: !0
  });
  var e1A = __$.H8(),
    miq = [() => {
      return new (e1A.dynamicRequire(Wi, "./apollo").Apollo)();
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./apollo").Apollo)({
        useNestjs: !0
      });
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./graphql").GraphQL)();
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./mongo").Mongo)();
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./mongo").Mongo)({
        mongoose: !0
      });
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./mysql").Mysql)();
    }, () => {
      return new (e1A.dynamicRequire(Wi, "./postgres").Postgres)();
    }];
  wN8.lazyLoadedNodePerformanceMonitoringIntegrations = miq;
});

// Register to shared state
__$.HN8 = HN8;
