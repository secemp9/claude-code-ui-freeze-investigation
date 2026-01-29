// Module: Ik8
// Dependencies: H8, Rk8, ovA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ik8 = v(yk8 => {
  Object.defineProperty(yk8, "__esModule", {
    value: !0
  });
  var Tb = __$.H8(),
    D65 = __$.Rk8(),
    Z6A = __$.ovA(),
    Pi = Tb.GLOBAL_OBJ;
  class avA {
    static __initStatic() {
      this.id = "Offline";
    }
    constructor(A = {}) {
      this.name = avA.id, this.maxStoredEvents = A.maxStoredEvents || 30, this.offlineEventStore = D65.createInstance({
        name: "sentry/offlineEventStore"
      });
    }
    setupOnce(A, K) {
      if (this.hub = K(), "addEventListener" in Pi) Pi.addEventListener("online", () => {
        this._sendEvents().catch(() => {
          Z6A.DEBUG_BUILD && Tb.logger.warn("could not send cached events");
        });
      });
      let q = Y => {
        if (this.hub && this.hub.getIntegration(avA)) {
          if ("navigator" in Pi && "onLine" in Pi.navigator && !Pi.navigator.onLine) return Z6A.DEBUG_BUILD && Tb.logger.log("Event dropped due to being a offline - caching instead"), this._cacheEvent(Y).then(z => this._enforceMaxEvents()).catch(z => {
            Z6A.DEBUG_BUILD && Tb.logger.warn("could not cache event while offline");
          }), null;
        }
        return Y;
      };
      if (q.id = this.name, A(q), "navigator" in Pi && "onLine" in Pi.navigator && Pi.navigator.onLine) this._sendEvents().catch(() => {
        Z6A.DEBUG_BUILD && Tb.logger.warn("could not send cached events");
      });
    }
    async _cacheEvent(A) {
      return this.offlineEventStore.setItem(Tb.uuid4(), Tb.normalize(A));
    }
    async _enforceMaxEvents() {
      let A = [];
      return this.offlineEventStore.iterate((K, q, Y) => {
        A.push({
          cacheKey: q,
          event: K
        });
      }).then(() => this._purgeEvents(A.sort((K, q) => (q.event.timestamp || 0) - (K.event.timestamp || 0)).slice(this.maxStoredEvents < A.length ? this.maxStoredEvents : A.length).map(K => K.cacheKey))).catch(K => {
        Z6A.DEBUG_BUILD && Tb.logger.warn("could not enforce max events");
      });
    }
    async _purgeEvent(A) {
      return this.offlineEventStore.removeItem(A);
    }
    async _purgeEvents(A) {
      return Promise.all(A.map(K => this._purgeEvent(K))).then();
    }
    async _sendEvents() {
      return this.offlineEventStore.iterate((A, K, q) => {
        if (this.hub) this.hub.captureEvent(A), this._purgeEvent(K).catch(Y => {
          Z6A.DEBUG_BUILD && Tb.logger.warn("could not purge event from cache");
        });else Z6A.DEBUG_BUILD && Tb.logger.warn("no hub found - could not send cached event");
      });
    }
  }
  avA.__initStatic();
  yk8.Offline = avA;
});

// Register to shared state
__$.Ik8 = Ik8;
