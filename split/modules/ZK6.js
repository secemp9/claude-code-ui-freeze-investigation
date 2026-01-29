// Module: ZK6
// Dependencies: mJ4, Yr, OK6, A04, Y04, BJ4, _K6, u76, $r, P51
//   ... and 14 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZK6 = k(() => {
  __$.mJ4();
  __$.Yr();
  __$.OK6();
  __$.A04();
  __$.Y04 = o(__$.BJ4(), 1), __$._K6 = __$.u76, __$.$r = __$.Y04.default({
    getRootHostContext: () => ({
      isInsideText: !1
    }),
    prepareForCommit: () => null,
    preparePortalMount: () => null,
    clearContainer: () => !1,
    resetAfterCommit(A) {
      if (typeof A.onComputeLayout === "function") A.onComputeLayout();
      if (A.isStaticDirty) {
        if (A.isStaticDirty = !1, typeof A.onImmediateRender === "function") A.onImmediateRender();
        return;
      }
      A.onRender?.();
    },
    getChildHostContext(A, K) {
      let q = A.isInsideText,
        Y = K === "ink-text" || K === "ink-virtual-text" || K === "ink-link";
      if (q === Y) return A;
      return {
        isInsideText: Y
      };
    },
    shouldSetTextContent: () => !1,
    createInstance(A, K, q, Y) {
      if (Y.isInsideText && A === "ink-box") throw Error("<Box> can't be nested inside <Text> component");
      let z = A === "ink-text" && Y.isInsideText ? "ink-virtual-text" : A,
        w = __$.P51(z);
      for (let [H, J] of Object.entries(K)) {
        if (H === "children") continue;
        if (H === "style") {
          if (__$.JK6(w, J), w.yogaNode) __$.XK6(w.yogaNode, J);
          continue;
        }
        if (H === "textStyles") {
          w.textStyles = J;
          continue;
        }
        if (H === "internal_static") {
          w.internal_static = !0;
          continue;
        }
        __$.HK6(w, H, J);
      }
      return w;
    },
    createTextInstance(A, K, q) {
      if (!q.isInsideText) throw Error(`Text string "${A}" must be rendered inside <Text> component`);
      return __$.eO4(A);
    },
    resetTextContent() {},
    hideTextInstance(A) {
      __$.byA(A, "");
    },
    unhideTextInstance(A, K) {
      __$.byA(A, K);
    },
    getPublicInstance: A => A,
    hideInstance(A) {
      A.yogaNode?.setDisplay(__$.BV.None);
    },
    unhideInstance(A) {
      A.yogaNode?.setDisplay(__$.BV.Flex);
    },
    appendInitialChild: __$.V51,
    appendChild(A, K) {
      if (__$.V51(A, K), K.internal_static) {
        let q = __$.$K6(A);
        q.isStaticDirty = !0, q.staticNode = K;
      }
    },
    insertBefore(A, K, q) {
      if (__$.wK6(A, K, q), K.internal_static) {
        let Y = __$.$K6(A);
        Y.isStaticDirty = !0, Y.staticNode = K;
      }
    },
    finalizeInitialChildren() {
      return !1;
    },
    isPrimaryRenderer: !0,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    getCurrentUpdatePriority: () => __$._K6,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    getInstanceFromNode: () => null,
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    appendChildToContainer(A, K) {
      __$.V51(A, K);
      let q = __$.GK6(K);
      if (q) A.isStaticDirty = !0, A.staticNode = q;
    },
    insertInContainerBefore(A, K, q) {
      __$.wK6(A, K, q);
      let Y = __$.GK6(K);
      if (Y) A.isStaticDirty = !0, A.staticNode = Y;
    },
    removeChildFromContainer(A, K) {
      __$.hyA(A, K), __$.q04(K);
    },
    commitUpdate(A, K, q, Y) {
      if (A.internal_static) {
        let H = __$.$K6(A);
        H.isStaticDirty = !0;
      }
      let z = __$.K04(q, Y),
        w = __$.K04(q.style, Y.style);
      if (z) for (let [H, J] of Object.entries(z)) {
        if (H === "style") {
          __$.JK6(A, J);
          continue;
        }
        if (H === "textStyles") {
          A.textStyles = J, __$.IQ(A);
          continue;
        }
        if (H === "internal_static") {
          A.internal_static = !0;
          continue;
        }
        __$.HK6(A, H, J);
      }
      if (w && A.yogaNode) __$.XK6(A.yogaNode, w, Y.style);
    },
    commitTextUpdate(A, K, q) {
      __$.byA(A, q);
    },
    removeChild(A, K) {
      __$.hyA(A, K), __$.q04(K);
    },
    maySuspendCommit() {
      return !1;
    },
    preloadInstance() {
      return !0;
    },
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady() {
      return null;
    },
    NotPendingTransition: null,
    HostTransitionContext: {
      $$typeof: Symbol.for("react.context"),
      _currentValue: null
    },
    setCurrentUpdatePriority(A) {
      __$._K6 = A;
    },
    resolveUpdatePriority() {
      return __$._K6;
    },
    resetFormInstance() {},
    requestPostPaintCallback() {},
    shouldAttemptEagerTransition() {
      return !1;
    },
    trackSchedulerEvent() {},
    resolveEventType() {
      return null;
    },
    resolveEventTimeStamp() {
      return -1.1;
    }
  });
});

// Register to shared state
__$.ZK6 = ZK6;
