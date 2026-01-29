// Module: iU7
// Dependencies: wt, lE6, wP, jS, tp, YjA, K9, UG, Lw, zP
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iU7 = v(cU7 => {
  Object.defineProperty(cU7, "__esModule", {
    value: !0
  });
  cU7.ResolvingLoadBalancer = void 0;
  var mq2 = __$.wt(),
    gq2 = __$.lE6(),
    Bf = __$.wP(),
    UU7 = __$.jS(),
    igA = __$.tp(),
    Fq2 = __$.YjA(),
    iE6 = __$.K9(),
    Qq2 = __$.UG(),
    Uq2 = __$.Lw(),
    pq2 = __$.K9(),
    dq2 = __$.zP(),
    cq2 = __$.bD1(),
    lq2 = "resolving_load_balancer";
  function pU7(A) {
    Uq2.trace(pq2.LogVerbosity.DEBUG, lq2, A);
  }
  var iq2 = ["SERVICE_AND_METHOD", "SERVICE", "EMPTY"];
  function nq2(A, K, q, Y) {
    for (let z of q.name) switch (Y) {
      case "EMPTY":
        if (!z.service && !z.method) return !0;
        break;
      case "SERVICE":
        if (z.service === A && !z.method) return !0;
        break;
      case "SERVICE_AND_METHOD":
        if (z.service === A && z.method === K) return !0;
    }
    return !1;
  }
  function rq2(A, K, q, Y) {
    for (let z of q) if (nq2(A, K, z, Y)) return z;
    return null;
  }
  function oq2(A) {
    return {
      invoke(K, q) {
        var Y, z;
        let w = K.split("/").filter(O => O.length > 0),
          H = (Y = w[0]) !== null && Y !== void 0 ? Y : "",
          J = (z = w[1]) !== null && z !== void 0 ? z : "";
        if (A && A.methodConfig) for (let O of iq2) {
          let X = rq2(H, J, A.methodConfig, O);
          if (X) return {
            methodConfig: X,
            pickInformation: {},
            status: iE6.Status.OK,
            dynamicFilterFactories: []
          };
        }
        return {
          methodConfig: {
            name: []
          },
          pickInformation: {},
          status: iE6.Status.OK,
          dynamicFilterFactories: []
        };
      },
      unref() {}
    };
  }
  class dU7 {
    constructor(A, K, q, Y, z) {
      if (this.target = A, this.channelControlHelper = K, this.channelOptions = q, this.onSuccessfulResolution = Y, this.onFailedResolution = z, this.latestChildState = Bf.ConnectivityState.IDLE, this.latestChildPicker = new igA.QueuePicker(this), this.latestChildErrorMessage = null, this.currentState = Bf.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = !1, q["grpc.service_config"]) this.defaultServiceConfig = (0, gq2.validateServiceConfig)(JSON.parse(q["grpc.service_config"]));else this.defaultServiceConfig = {
        loadBalancingConfig: [],
        methodConfig: []
      };
      this.updateState(Bf.ConnectivityState.IDLE, new igA.QueuePicker(this), null), this.childLoadBalancer = new cq2.ChildLoadBalancerHandler({
        createSubchannel: K.createSubchannel.bind(K),
        requestReresolution: () => {
          if (this.backoffTimeout.isRunning()) pU7("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString()), this.continueResolving = !0;else this.updateResolution();
        },
        updateState: (H, J, O) => {
          this.latestChildState = H, this.latestChildPicker = J, this.latestChildErrorMessage = O, this.updateState(H, J, O);
        },
        addChannelzChild: K.addChannelzChild.bind(K),
        removeChannelzChild: K.removeChannelzChild.bind(K)
      }), this.innerResolver = (0, UU7.createResolver)(A, this.handleResolverResult.bind(this), q);
      let w = {
        initialDelay: q["grpc.initial_reconnect_backoff_ms"],
        maxDelay: q["grpc.max_reconnect_backoff_ms"]
      };
      this.backoffTimeout = new Fq2.BackoffTimeout(() => {
        if (this.continueResolving) this.updateResolution(), this.continueResolving = !1;else this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
      }, w), this.backoffTimeout.unref();
    }
    handleResolverResult(A, K, q, Y) {
      var z, w;
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
      let H = !0,
        J = null;
      if (q === null) J = this.defaultServiceConfig;else if (q.ok) J = q.value;else if (this.previousServiceConfig !== null) J = this.previousServiceConfig;else H = !1, this.handleResolutionFailure(q.error);
      if (J !== null) {
        let O = (z = J === null || J === void 0 ? void 0 : J.loadBalancingConfig) !== null && z !== void 0 ? z : [],
          X = (0, mq2.selectLbConfigFromList)(O, !0);
        if (X === null) H = !1, this.handleResolutionFailure({
          code: iE6.Status.UNAVAILABLE,
          details: "All load balancer options in service config are not compatible",
          metadata: new Qq2.Metadata()
        });else H = this.childLoadBalancer.updateAddressList(A, X, Object.assign(Object.assign({}, this.channelOptions), K), Y);
      }
      if (H) this.onSuccessfulResolution(J, (w = K[UU7.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && w !== void 0 ? w : oq2(J));
      return H;
    }
    updateResolution() {
      if (this.innerResolver.updateResolution(), this.currentState === Bf.ConnectivityState.IDLE) this.updateState(Bf.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
      this.backoffTimeout.runOnce();
    }
    updateState(A, K, q) {
      if (pU7((0, dq2.uriToString)(this.target) + " " + Bf.ConnectivityState[this.currentState] + " -> " + Bf.ConnectivityState[A]), A === Bf.ConnectivityState.IDLE) K = new igA.QueuePicker(this, K);
      this.currentState = A, this.channelControlHelper.updateState(A, K, q);
    }
    handleResolutionFailure(A) {
      if (this.latestChildState === Bf.ConnectivityState.IDLE) this.updateState(Bf.ConnectivityState.TRANSIENT_FAILURE, new igA.UnavailablePicker(A), A.details), this.onFailedResolution(A);
    }
    exitIdle() {
      if (this.currentState === Bf.ConnectivityState.IDLE || this.currentState === Bf.ConnectivityState.TRANSIENT_FAILURE) if (this.backoffTimeout.isRunning()) this.continueResolving = !0;else this.updateResolution();
      this.childLoadBalancer.exitIdle();
    }
    updateAddressList(A, K) {
      throw Error("updateAddressList not supported on ResolvingLoadBalancer");
    }
    resetBackoff() {
      this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff();
    }
    destroy() {
      this.childLoadBalancer.destroy(), this.innerResolver.destroy(), this.backoffTimeout.reset(), this.backoffTimeout.stop(), this.latestChildState = Bf.ConnectivityState.IDLE, this.latestChildPicker = new igA.QueuePicker(this), this.currentState = Bf.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = !1;
    }
    getTypeName() {
      return "resolving_load_balancer";
    }
  }
  cU7.ResolvingLoadBalancer = dU7;
});

// Register to shared state
__$.iU7 = iU7;
