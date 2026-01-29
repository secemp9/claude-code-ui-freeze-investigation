// Module: RB1
// Dependencies: H8, FX, qV, lsA, rsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RB1 = v(WP8 => {
  Object.defineProperty(WP8, "__esModule", {
    value: !0
  });
  var wD = __$.H8(),
    YV = __$.FX(),
    osA = __$.qV(),
    _Fq = __$.lsA(),
    GFq = __$.rsA(),
    asA = {
      idleTimeout: 1000,
      finalTimeout: 30000,
      heartbeatInterval: 5000
    },
    ZFq = "finishReason",
    MHA = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
  class LB1 extends _Fq.SpanRecorder {
    constructor(A, K, q, Y) {
      super(Y);
      this._pushActivity = A, this._popActivity = K, this.transactionSpanId = q;
    }
    add(A) {
      if (A.spanContext().spanId !== this.transactionSpanId) {
        let K = A.end;
        if (A.end = (...q) => {
          return this._popActivity(A.spanContext().spanId), K.apply(A, q);
        }, osA.spanToJSON(A).timestamp === void 0) this._pushActivity(A.spanContext().spanId);
      }
      super.add(A);
    }
  }
  class ZP8 extends GFq.Transaction {
    constructor(A, K, q = asA.idleTimeout, Y = asA.finalTimeout, z = asA.heartbeatInterval, w = !1, H = !1) {
      super(A, K);
      if (this._idleHub = K, this._idleTimeout = q, this._finalTimeout = Y, this._heartbeatInterval = z, this._onScope = w, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = MHA[4], this._autoFinishAllowed = !H, w) YV.DEBUG_BUILD && wD.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), K.getScope().setSpan(this);
      if (!H) this._restartIdleTimeout();
      setTimeout(() => {
        if (!this._finished) this.setStatus("deadline_exceeded"), this._finishReason = MHA[3], this.end();
      }, this._finalTimeout);
    }
    end(A) {
      let K = osA.spanTimeInputToSeconds(A);
      if (this._finished = !0, this.activities = {}, this.op === "ui.action.click") this.setAttribute(ZFq, this._finishReason);
      if (this.spanRecorder) {
        YV.DEBUG_BUILD && wD.logger.log("[Tracing] finishing IdleTransaction", new Date(K * 1000).toISOString(), this.op);
        for (let q of this._beforeFinishCallbacks) q(this, K);
        this.spanRecorder.spans = this.spanRecorder.spans.filter(q => {
          if (q.spanContext().spanId === this.spanContext().spanId) return !0;
          if (!osA.spanToJSON(q).timestamp) q.setStatus("cancelled"), q.end(K), YV.DEBUG_BUILD && wD.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(q, void 0, 2));
          let {
              start_timestamp: Y,
              timestamp: z
            } = osA.spanToJSON(q),
            w = Y && Y < K,
            H = (this._finalTimeout + this._idleTimeout) / 1000,
            J = z && Y && z - Y < H;
          if (YV.DEBUG_BUILD) {
            let O = JSON.stringify(q, void 0, 2);
            if (!w) wD.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", O);else if (!J) wD.logger.log("[Tracing] discarding Span since it finished after Transaction final timeout", O);
          }
          return w && J;
        }), YV.DEBUG_BUILD && wD.logger.log("[Tracing] flushing IdleTransaction");
      } else YV.DEBUG_BUILD && wD.logger.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        let q = this._idleHub.getScope();
        if (q.getTransaction() === this) q.setSpan(void 0);
      }
      return super.end(A);
    }
    registerBeforeFinishCallback(A) {
      this._beforeFinishCallbacks.push(A);
    }
    initSpanRecorder(A) {
      if (!this.spanRecorder) {
        let K = Y => {
            if (this._finished) return;
            this._pushActivity(Y);
          },
          q = Y => {
            if (this._finished) return;
            this._popActivity(Y);
          };
        this.spanRecorder = new LB1(K, q, this.spanContext().spanId, A), YV.DEBUG_BUILD && wD.logger.log("Starting heartbeat"), this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }
    cancelIdleTimeout(A, {
      restartOnChildSpanChange: K
    } = {
      restartOnChildSpanChange: !0
    }) {
      if (this._idleTimeoutCanceledPermanently = K === !1, this._idleTimeoutID) {
        if (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) this._finishReason = MHA[5], this.end(A);
      }
    }
    setFinishReason(A) {
      this._finishReason = A;
    }
    sendAutoFinishSignal() {
      if (!this._autoFinishAllowed) YV.DEBUG_BUILD && wD.logger.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0;
    }
    _restartIdleTimeout(A) {
      this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0) this._finishReason = MHA[1], this.end(A);
      }, this._idleTimeout);
    }
    _pushActivity(A) {
      this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
      }), YV.DEBUG_BUILD && wD.logger.log(`[Tracing] pushActivity: ${A}`), this.activities[A] = !0, YV.DEBUG_BUILD && wD.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    _popActivity(A) {
      if (this.activities[A]) YV.DEBUG_BUILD && wD.logger.log(`[Tracing] popActivity ${A}`), delete this.activities[A], YV.DEBUG_BUILD && wD.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
      if (Object.keys(this.activities).length === 0) {
        let K = wD.timestampInSeconds();
        if (this._idleTimeoutCanceledPermanently) {
          if (this._autoFinishAllowed) this._finishReason = MHA[5], this.end(K);
        } else this._restartIdleTimeout(K + this._idleTimeout / 1000);
      }
    }
    _beat() {
      if (this._finished) return;
      let A = Object.keys(this.activities).join("");
      if (A === this._prevHeartbeatString) this._heartbeatCounter++;else this._heartbeatCounter = 1;
      if (this._prevHeartbeatString = A, this._heartbeatCounter >= 3) {
        if (this._autoFinishAllowed) YV.DEBUG_BUILD && wD.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = MHA[0], this.end();
      } else this._pingHeartbeat();
    }
    _pingHeartbeat() {
      YV.DEBUG_BUILD && wD.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
    }
  }
  WP8.IdleTransaction = ZP8;
  WP8.IdleTransactionSpanRecorder = LB1;
  WP8.TRACING_DEFAULTS = asA;
});

// Register to shared state
__$.RB1 = RB1;
