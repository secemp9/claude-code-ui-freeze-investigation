// Module: wt
// Dependencies: Lw, K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wt = v(kU7 => {
  Object.defineProperty(kU7, "__esModule", {
    value: !0
  });
  kU7.createChildChannelControlHelper = rK2;
  kU7.registerLoadBalancerType = oK2;
  kU7.registerDefaultLoadBalancerType = aK2;
  kU7.createLoadBalancer = sK2;
  kU7.isLoadBalancerNameRegistered = tK2;
  kU7.parseLoadBalancingConfig = EU7;
  kU7.getDefaultConfig = eK2;
  kU7.selectLbConfigFromList = Aq2;
  var iK2 = __$.Lw(),
    nK2 = __$.K9();
  function rK2(A, K) {
    var q, Y, z, w, H, J, O, X, $, _;
    return {
      createSubchannel: (Y = (q = K.createSubchannel) === null || q === void 0 ? void 0 : q.bind(K)) !== null && Y !== void 0 ? Y : A.createSubchannel.bind(A),
      updateState: (w = (z = K.updateState) === null || z === void 0 ? void 0 : z.bind(K)) !== null && w !== void 0 ? w : A.updateState.bind(A),
      requestReresolution: (J = (H = K.requestReresolution) === null || H === void 0 ? void 0 : H.bind(K)) !== null && J !== void 0 ? J : A.requestReresolution.bind(A),
      addChannelzChild: (X = (O = K.addChannelzChild) === null || O === void 0 ? void 0 : O.bind(K)) !== null && X !== void 0 ? X : A.addChannelzChild.bind(A),
      removeChannelzChild: (_ = ($ = K.removeChannelzChild) === null || $ === void 0 ? void 0 : $.bind(K)) !== null && _ !== void 0 ? _ : A.removeChannelzChild.bind(A)
    };
  }
  var zt = {},
    lgA = null;
  function oK2(A, K, q) {
    zt[A] = {
      LoadBalancer: K,
      LoadBalancingConfig: q
    };
  }
  function aK2(A) {
    lgA = A;
  }
  function sK2(A, K) {
    let q = A.getLoadBalancerName();
    if (q in zt) return new zt[q].LoadBalancer(K);else return null;
  }
  function tK2(A) {
    return A in zt;
  }
  function EU7(A) {
    let K = Object.keys(A);
    if (K.length !== 1) throw Error("Provided load balancing config has multiple conflicting entries");
    let q = K[0];
    if (q in zt) try {
      return zt[q].LoadBalancingConfig.createFromJson(A[q]);
    } catch (Y) {
      throw Error(`${q}: ${Y.message}`);
    } else throw Error(`Unrecognized load balancing config name ${q}`);
  }
  function eK2() {
    if (!lgA) throw Error("No default load balancer type registered");
    return new zt[lgA].LoadBalancingConfig();
  }
  function Aq2(A, K = !1) {
    for (let q of A) try {
      return EU7(q);
    } catch (Y) {
      (0, iK2.log)(nK2.LogVerbosity.DEBUG, "Config parsing failed with error", Y.message);
      continue;
    }
    if (K) {
      if (lgA) return new zt[lgA].LoadBalancingConfig();else return null;
    } else return null;
  }
});

// Register to shared state
__$.wt = wt;
