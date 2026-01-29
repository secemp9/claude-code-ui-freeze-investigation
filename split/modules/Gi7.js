// Module: Gi7
// Dependencies: K9, MjA, UG, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gi7 = v($i7 => {
  Object.defineProperty($i7, "__esModule", {
    value: !0
  });
  $i7.RetryingCall = $i7.MessageBufferTracker = $i7.RetryThrottler = void 0;
  var vj1 = __$.K9(),
    tz2 = __$.MjA(),
    ez2 = __$.UG(),
    Aw2 = __$.Lw(),
    Kw2 = "retrying_call";
  class Ji7 {
    constructor(A, K, q) {
      if (this.maxTokens = A, this.tokenRatio = K, q) this.tokens = q.tokens * (A / q.maxTokens);else this.tokens = A;
    }
    addCallSucceeded() {
      this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
    }
    addCallFailed() {
      this.tokens = Math.max(this.tokens - 1, 0);
    }
    canRetryCall() {
      return this.tokens > this.maxTokens / 2;
    }
  }
  $i7.RetryThrottler = Ji7;
  class Oi7 {
    constructor(A, K) {
      this.totalLimit = A, this.limitPerCall = K, this.totalAllocated = 0, this.allocatedPerCall = new Map();
    }
    allocate(A, K) {
      var q;
      let Y = (q = this.allocatedPerCall.get(K)) !== null && q !== void 0 ? q : 0;
      if (this.limitPerCall - Y < A || this.totalLimit - this.totalAllocated < A) return !1;
      return this.allocatedPerCall.set(K, Y + A), this.totalAllocated += A, !0;
    }
    free(A, K) {
      var q;
      if (this.totalAllocated < A) throw Error(`Invalid buffer allocation state: call ${K} freed ${A} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= A;
      let Y = (q = this.allocatedPerCall.get(K)) !== null && q !== void 0 ? q : 0;
      if (Y < A) throw Error(`Invalid buffer allocation state: call ${K} freed ${A} > allocated for call ${Y}`);
      this.allocatedPerCall.set(K, Y - A);
    }
    freeAll(A) {
      var K;
      let q = (K = this.allocatedPerCall.get(A)) !== null && K !== void 0 ? K : 0;
      if (this.totalAllocated < q) throw Error(`Invalid buffer allocation state: call ${A} allocated ${q} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= q, this.allocatedPerCall.delete(A);
    }
  }
  $i7.MessageBufferTracker = Oi7;
  var jC6 = "grpc-previous-rpc-attempts",
    qw2 = 5;
  class Xi7 {
    constructor(A, K, q, Y, z, w, H, J, O) {
      var X;
      this.channel = A, this.callConfig = K, this.methodName = q, this.host = Y, this.credentials = z, this.deadline = w, this.callNumber = H, this.bufferTracker = J, this.retryThrottler = O, this.listener = null, this.initialMetadata = null, this.underlyingCalls = [], this.writeBuffer = [], this.writeBufferOffset = 0, this.readStarted = !1, this.transparentRetryUsed = !1, this.attempts = 0, this.hedgingTimer = null, this.committedCallIndex = null, this.initialRetryBackoffSec = 0, this.nextRetryBackoffSec = 0;
      let $ = (X = A.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && X !== void 0 ? X : qw2;
      if (A.getOptions()["grpc.enable_retries"] === 0) this.state = "NO_RETRY", this.maxAttempts = 1;else if (K.methodConfig.retryPolicy) {
        this.state = "RETRY";
        let _ = K.methodConfig.retryPolicy;
        this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(_.initialBackoff.substring(0, _.initialBackoff.length - 1)), this.maxAttempts = Math.min(_.maxAttempts, $);
      } else if (K.methodConfig.hedgingPolicy) this.state = "HEDGING", this.maxAttempts = Math.min(K.methodConfig.hedgingPolicy.maxAttempts, $);else this.state = "TRANSPARENT_ONLY", this.maxAttempts = 1;
      this.startTime = new Date();
    }
    getDeadlineInfo() {
      if (this.underlyingCalls.length === 0) return [];
      let A = [],
        K = this.underlyingCalls[this.underlyingCalls.length - 1];
      if (this.underlyingCalls.length > 1) A.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
      if (K.startTime > this.startTime) A.push(`time to current attempt start: ${(0, tz2.formatDateDifference)(this.startTime, K.startTime)}`);
      return A.push(...K.call.getDeadlineInfo()), A;
    }
    getCallNumber() {
      return this.callNumber;
    }
    trace(A) {
      Aw2.trace(vj1.LogVerbosity.DEBUG, Kw2, "[" + this.callNumber + "] " + A);
    }
    reportStatus(A) {
      this.trace("ended with status: code=" + A.code + ' details="' + A.details + '" start time=' + this.startTime.toISOString()), this.bufferTracker.freeAll(this.callNumber), this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length, this.writeBuffer = [], process.nextTick(() => {
        var K;
        (K = this.listener) === null || K === void 0 || K.onReceiveStatus({
          code: A.code,
          details: A.details,
          metadata: A.metadata
        });
      });
    }
    cancelWithStatus(A, K) {
      this.trace("cancelWithStatus code: " + A + ' details: "' + K + '"'), this.reportStatus({
        code: A,
        details: K,
        metadata: new ez2.Metadata()
      });
      for (let {
        call: q
      } of this.underlyingCalls) q.cancelWithStatus(A, K);
    }
    getPeer() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getPeer();else return "unknown";
    }
    getBufferEntry(A) {
      var K;
      return (K = this.writeBuffer[A - this.writeBufferOffset]) !== null && K !== void 0 ? K : {
        entryType: "FREED",
        allocated: !1
      };
    }
    getNextBufferIndex() {
      return this.writeBufferOffset + this.writeBuffer.length;
    }
    clearSentMessages() {
      if (this.state !== "COMMITTED") return;
      let A;
      if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") A = this.getNextBufferIndex();else A = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
      for (let K = this.writeBufferOffset; K < A; K++) {
        let q = this.getBufferEntry(K);
        if (q.allocated) this.bufferTracker.free(q.message.message.length, this.callNumber);
      }
      this.writeBuffer = this.writeBuffer.slice(A - this.writeBufferOffset), this.writeBufferOffset = A;
    }
    commitCall(A) {
      var K, q;
      if (this.state === "COMMITTED") return;
      this.trace("Committing call [" + this.underlyingCalls[A].call.getCallNumber() + "] at index " + A), this.state = "COMMITTED", (q = (K = this.callConfig).onCommitted) === null || q === void 0 || q.call(K), this.committedCallIndex = A;
      for (let Y = 0; Y < this.underlyingCalls.length; Y++) {
        if (Y === A) continue;
        if (this.underlyingCalls[Y].state === "COMPLETED") continue;
        this.underlyingCalls[Y].state = "COMPLETED", this.underlyingCalls[Y].call.cancelWithStatus(vj1.Status.CANCELLED, "Discarded in favor of other hedged attempt");
      }
      this.clearSentMessages();
    }
    commitCallWithMostMessages() {
      if (this.state === "COMMITTED") return;
      let A = -1,
        K = -1;
      for (let [q, Y] of this.underlyingCalls.entries()) if (Y.state === "ACTIVE" && Y.nextMessageToSend > A) A = Y.nextMessageToSend, K = q;
      if (K === -1) this.state = "TRANSPARENT_ONLY";else this.commitCall(K);
    }
    isStatusCodeInList(A, K) {
      return A.some(q => {
        var Y;
        return q === K || q.toString().toLowerCase() === ((Y = vj1.Status[K]) === null || Y === void 0 ? void 0 : Y.toLowerCase());
      });
    }
    getNextRetryJitter() {
      return Math.random() * 0.3999999999999999 + 0.8;
    }
    getNextRetryBackoffMs() {
      var A;
      let K = (A = this.callConfig) === null || A === void 0 ? void 0 : A.methodConfig.retryPolicy;
      if (!K) return 0;
      let Y = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1000,
        z = Number(K.maxBackoff.substring(0, K.maxBackoff.length - 1));
      return this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * K.backoffMultiplier, z), Y;
    }
    maybeRetryCall(A, K) {
      if (this.state !== "RETRY") {
        K(!1);
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        K(!1);
        return;
      }
      let q;
      if (A === null) q = this.getNextRetryBackoffMs();else if (A < 0) {
        this.state = "TRANSPARENT_ONLY", K(!1);
        return;
      } else q = A, this.nextRetryBackoffSec = this.initialRetryBackoffSec;
      setTimeout(() => {
        var Y, z;
        if (this.state !== "RETRY") {
          K(!1);
          return;
        }
        if ((z = (Y = this.retryThrottler) === null || Y === void 0 ? void 0 : Y.canRetryCall()) !== null && z !== void 0 ? z : !0) K(!0), this.attempts += 1, this.startNewAttempt();else this.trace("Retry attempt denied by throttling policy"), K(!1);
      }, q);
    }
    countActiveCalls() {
      let A = 0;
      for (let K of this.underlyingCalls) if ((K === null || K === void 0 ? void 0 : K.state) === "ACTIVE") A += 1;
      return A;
    }
    handleProcessedStatus(A, K, q) {
      var Y, z, w;
      switch (this.state) {
        case "COMMITTED":
        case "NO_RETRY":
        case "TRANSPARENT_ONLY":
          this.commitCall(K), this.reportStatus(A);
          break;
        case "HEDGING":
          if (this.isStatusCodeInList((Y = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && Y !== void 0 ? Y : [], A.code)) {
            (z = this.retryThrottler) === null || z === void 0 || z.addCallFailed();
            let H;
            if (q === null) H = 0;else if (q < 0) {
              this.state = "TRANSPARENT_ONLY", this.commitCall(K), this.reportStatus(A);
              return;
            } else H = q;
            setTimeout(() => {
              if (this.maybeStartHedgingAttempt(), this.countActiveCalls() === 0) this.commitCall(K), this.reportStatus(A);
            }, H);
          } else this.commitCall(K), this.reportStatus(A);
          break;
        case "RETRY":
          if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, A.code)) (w = this.retryThrottler) === null || w === void 0 || w.addCallFailed(), this.maybeRetryCall(q, H => {
            if (!H) this.commitCall(K), this.reportStatus(A);
          });else this.commitCall(K), this.reportStatus(A);
          break;
      }
    }
    getPushback(A) {
      let K = A.get("grpc-retry-pushback-ms");
      if (K.length === 0) return null;
      try {
        return parseInt(K[0]);
      } catch (q) {
        return -1;
      }
    }
    handleChildStatus(A, K) {
      var q;
      if (this.underlyingCalls[K].state === "COMPLETED") return;
      if (this.trace("state=" + this.state + " handling status with progress " + A.progress + " from child [" + this.underlyingCalls[K].call.getCallNumber() + "] in state " + this.underlyingCalls[K].state), this.underlyingCalls[K].state = "COMPLETED", A.code === vj1.Status.OK) {
        (q = this.retryThrottler) === null || q === void 0 || q.addCallSucceeded(), this.commitCall(K), this.reportStatus(A);
        return;
      }
      if (this.state === "NO_RETRY") {
        this.commitCall(K), this.reportStatus(A);
        return;
      }
      if (this.state === "COMMITTED") {
        this.reportStatus(A);
        return;
      }
      let Y = this.getPushback(A.metadata);
      switch (A.progress) {
        case "NOT_STARTED":
          this.startNewAttempt();
          break;
        case "REFUSED":
          if (this.transparentRetryUsed) this.handleProcessedStatus(A, K, Y);else this.transparentRetryUsed = !0, this.startNewAttempt();
          break;
        case "DROP":
          this.commitCall(K), this.reportStatus(A);
          break;
        case "PROCESSED":
          this.handleProcessedStatus(A, K, Y);
          break;
      }
    }
    maybeStartHedgingAttempt() {
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      if (this.attempts >= this.maxAttempts) return;
      this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    maybeStartHedgingTimer() {
      var A, K, q;
      if (this.hedgingTimer) clearTimeout(this.hedgingTimer);
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      let Y = this.callConfig.methodConfig.hedgingPolicy;
      if (this.attempts >= this.maxAttempts) return;
      let z = (A = Y.hedgingDelay) !== null && A !== void 0 ? A : "0s",
        w = Number(z.substring(0, z.length - 1));
      this.hedgingTimer = setTimeout(() => {
        this.maybeStartHedgingAttempt();
      }, w * 1000), (q = (K = this.hedgingTimer).unref) === null || q === void 0 || q.call(K);
    }
    startNewAttempt() {
      let A = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
      this.trace("Created child call [" + A.getCallNumber() + "] for attempt " + this.attempts);
      let K = this.underlyingCalls.length;
      this.underlyingCalls.push({
        state: "ACTIVE",
        call: A,
        nextMessageToSend: 0,
        startTime: new Date()
      });
      let q = this.attempts - 1,
        Y = this.initialMetadata.clone();
      if (q > 0) Y.set(jC6, `${q}`);
      let z = !1;
      if (A.start(Y, {
        onReceiveMetadata: w => {
          if (this.trace("Received metadata from child [" + A.getCallNumber() + "]"), this.commitCall(K), z = !0, q > 0) w.set(jC6, `${q}`);
          if (this.underlyingCalls[K].state === "ACTIVE") this.listener.onReceiveMetadata(w);
        },
        onReceiveMessage: w => {
          if (this.trace("Received message from child [" + A.getCallNumber() + "]"), this.commitCall(K), this.underlyingCalls[K].state === "ACTIVE") this.listener.onReceiveMessage(w);
        },
        onReceiveStatus: w => {
          if (this.trace("Received status from child [" + A.getCallNumber() + "]"), !z && q > 0) w.metadata.set(jC6, `${q}`);
          this.handleChildStatus(w, K);
        }
      }), this.sendNextChildMessage(K), this.readStarted) A.startRead();
    }
    start(A, K) {
      this.trace("start called"), this.listener = K, this.initialMetadata = A, this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    handleChildWriteCompleted(A) {
      var K, q;
      let Y = this.underlyingCalls[A],
        z = Y.nextMessageToSend;
      (q = (K = this.getBufferEntry(z)).callback) === null || q === void 0 || q.call(K), this.clearSentMessages(), Y.nextMessageToSend += 1, this.sendNextChildMessage(A);
    }
    sendNextChildMessage(A) {
      let K = this.underlyingCalls[A];
      if (K.state === "COMPLETED") return;
      if (this.getBufferEntry(K.nextMessageToSend)) {
        let q = this.getBufferEntry(K.nextMessageToSend);
        switch (q.entryType) {
          case "MESSAGE":
            K.call.sendMessageWithContext({
              callback: Y => {
                this.handleChildWriteCompleted(A);
              }
            }, q.message.message);
            break;
          case "HALF_CLOSE":
            K.nextMessageToSend += 1, K.call.halfClose();
            break;
          case "FREED":
            break;
        }
      }
    }
    sendMessageWithContext(A, K) {
      var q;
      this.trace("write() called with message of length " + K.length);
      let Y = {
          message: K,
          flags: A.flags
        },
        z = this.getNextBufferIndex(),
        w = {
          entryType: "MESSAGE",
          message: Y,
          allocated: this.bufferTracker.allocate(K.length, this.callNumber)
        };
      if (this.writeBuffer.push(w), w.allocated) {
        (q = A.callback) === null || q === void 0 || q.call(A);
        for (let [H, J] of this.underlyingCalls.entries()) if (J.state === "ACTIVE" && J.nextMessageToSend === z) J.call.sendMessageWithContext({
          callback: O => {
            this.handleChildWriteCompleted(H);
          }
        }, K);
      } else {
        if (this.commitCallWithMostMessages(), this.committedCallIndex === null) return;
        let H = this.underlyingCalls[this.committedCallIndex];
        if (w.callback = A.callback, H.state === "ACTIVE" && H.nextMessageToSend === z) H.call.sendMessageWithContext({
          callback: J => {
            this.handleChildWriteCompleted(this.committedCallIndex);
          }
        }, K);
      }
    }
    startRead() {
      this.trace("startRead called"), this.readStarted = !0;
      for (let A of this.underlyingCalls) if ((A === null || A === void 0 ? void 0 : A.state) === "ACTIVE") A.call.startRead();
    }
    halfClose() {
      this.trace("halfClose called");
      let A = this.getNextBufferIndex();
      this.writeBuffer.push({
        entryType: "HALF_CLOSE",
        allocated: !1
      });
      for (let K of this.underlyingCalls) if ((K === null || K === void 0 ? void 0 : K.state) === "ACTIVE" && K.nextMessageToSend === A) K.nextMessageToSend += 1, K.call.halfClose();
    }
    setCredentials(A) {
      throw Error("Method not implemented.");
    }
    getMethod() {
      return this.methodName;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getAuthContext();else return null;
    }
  }
  $i7.RetryingCall = Xi7;
});

// Register to shared state
__$.Gi7 = Gi7;
