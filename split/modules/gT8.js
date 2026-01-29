// Module: gT8
// Dependencies: vm1, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gT8 = v(mT8 => {
  Object.defineProperty(mT8, "__esModule", {
    value: !0
  });
  var baq = __$.vm1(),
    xaq = __$.H8();
  function uaq() {
    let A = baq.lazyLoadedNodePerformanceMonitoringIntegrations.map(K => {
      try {
        return K();
      } catch (q) {
        return;
      }
    }).filter(K => !!K);
    if (A.length === 0) xaq.logger.warn("Performance monitoring integrations could not be automatically loaded.");
    return A.filter(K => !!K.loadDependency());
  }
  mT8.autoDiscoverNodePerformanceMonitoringIntegrations = uaq;
});

// Register to shared state
__$.gT8 = gT8;
