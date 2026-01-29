// Module: Hi7
// Dependencies: kD1, K9, MjA, UG, Lw, DFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hi7 = v(zi7 => {
  Object.defineProperty(zi7, "__esModule", {
    value: !0
  });
  zi7.ResolvingCall = void 0;
  var rz2 = __$.kD1(),
    q3A = __$.K9(),
    Y3A = __$.MjA(),
    qi7 = __$.UG(),
    oz2 = __$.Lw(),
    az2 = __$.DFA(),
    sz2 = "resolving_call";
  class Yi7 {
    constructor(A, K, q, Y, z) {
      if (this.channel = A, this.method = K, this.filterStackFactory = Y, this.callNumber = z, this.child = null, this.readPending = !1, this.pendingMessage = null, this.pendingHalfClose = !1, this.ended = !1, this.readFilterPending = !1, this.writeFilterPending = !1, this.pendingChildStatus = null, this.metadata = null, this.listener = null, this.statusWatchers = [], this.deadlineTimer = setTimeout(() => {}, 0), this.filterStack = null, this.deadlineStartTime = null, this.configReceivedTime = null, this.childStartTime = null, this.credentials = rz2.CallCredentials.createEmpty(), this.deadline = q.deadline, this.host = q.host, q.parentCall) {
        if (q.flags & q3A.Propagate.CANCELLATION) q.parentCall.on("cancelled", () => {
          this.cancelWithStatus(q3A.Status.CANCELLED, "Cancelled by parent call");
        });
        if (q.flags & q3A.Propagate.DEADLINE) this.trace("Propagating deadline from parent: " + q.parentCall.getDeadline()), this.deadline = (0, Y3A.minDeadline)(this.deadline, q.parentCall.getDeadline());
      }
      this.trace("Created"), this.runDeadlineTimer();
    }
    trace(A) {
      oz2.trace(q3A.LogVerbosity.DEBUG, sz2, "[" + this.callNumber + "] " + A);
    }
    runDeadlineTimer() {
      clearTimeout(this.deadlineTimer), this.deadlineStartTime = new Date(), this.trace("Deadline: " + (0, Y3A.deadlineToString)(this.deadline));
      let A = (0, Y3A.getRelativeTimeout)(this.deadline);
      if (A !== 1 / 0) {
        this.trace("Deadline will be reached in " + A + "ms");
        let K = () => {
          if (!this.deadlineStartTime) {
            this.cancelWithStatus(q3A.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
            return;
          }
          let q = [],
            Y = new Date();
          if (q.push(`Deadline exceeded after ${(0, Y3A.formatDateDifference)(this.deadlineStartTime, Y)}`), this.configReceivedTime) {
            if (this.configReceivedTime > this.deadlineStartTime) q.push(`name resolution: ${(0, Y3A.formatDateDifference)(this.deadlineStartTime, this.configReceivedTime)}`);
            if (this.childStartTime) {
              if (this.childStartTime > this.configReceivedTime) q.push(`metadata filters: ${(0, Y3A.formatDateDifference)(this.configReceivedTime, this.childStartTime)}`);
            } else q.push("waiting for metadata filters");
          } else q.push("waiting for name resolution");
          if (this.child) q.push(...this.child.getDeadlineInfo());
          this.cancelWithStatus(q3A.Status.DEADLINE_EXCEEDED, q.join(","));
        };
        if (A <= 0) process.nextTick(K);else this.deadlineTimer = setTimeout(K, A);
      }
    }
    outputStatus(A) {
      if (!this.ended) {
        if (this.ended = !0, !this.filterStack) this.filterStack = this.filterStackFactory.createFilter();
        clearTimeout(this.deadlineTimer);
        let K = this.filterStack.receiveTrailers(A);
        this.trace("ended with status: code=" + K.code + ' details="' + K.details + '"'), this.statusWatchers.forEach(q => q(K)), process.nextTick(() => {
          var q;
          (q = this.listener) === null || q === void 0 || q.onReceiveStatus(K);
        });
      }
    }
    sendMessageOnChild(A, K) {
      if (!this.child) throw Error("sendMessageonChild called with child not populated");
      let q = this.child;
      this.writeFilterPending = !0, this.filterStack.sendMessage(Promise.resolve({
        message: K,
        flags: A.flags
      })).then(Y => {
        if (this.writeFilterPending = !1, q.sendMessageWithContext(A, Y.message), this.pendingHalfClose) q.halfClose();
      }, Y => {
        this.cancelWithStatus(Y.code, Y.details);
      });
    }
    getConfig() {
      if (this.ended) return;
      if (!this.metadata || !this.listener) throw Error("getConfig called before start");
      let A = this.channel.getConfig(this.method, this.metadata);
      if (A.type === "NONE") {
        this.channel.queueCallForConfig(this);
        return;
      } else if (A.type === "ERROR") {
        if (this.metadata.getOptions().waitForReady) this.channel.queueCallForConfig(this);else this.outputStatus(A.error);
        return;
      }
      this.configReceivedTime = new Date();
      let K = A.config;
      if (K.status !== q3A.Status.OK) {
        let {
          code: q,
          details: Y
        } = (0, az2.restrictControlPlaneStatusCode)(K.status, "Failed to route call to method " + this.method);
        this.outputStatus({
          code: q,
          details: Y,
          metadata: new qi7.Metadata()
        });
        return;
      }
      if (K.methodConfig.timeout) {
        let q = new Date();
        q.setSeconds(q.getSeconds() + K.methodConfig.timeout.seconds), q.setMilliseconds(q.getMilliseconds() + K.methodConfig.timeout.nanos / 1e6), this.deadline = (0, Y3A.minDeadline)(this.deadline, q), this.runDeadlineTimer();
      }
      this.filterStackFactory.push(K.dynamicFilterFactories), this.filterStack = this.filterStackFactory.createFilter(), this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then(q => {
        if (this.child = this.channel.createRetryingCall(K, this.method, this.host, this.credentials, this.deadline), this.trace("Created child [" + this.child.getCallNumber() + "]"), this.childStartTime = new Date(), this.child.start(q, {
          onReceiveMetadata: Y => {
            this.trace("Received metadata"), this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(Y));
          },
          onReceiveMessage: Y => {
            this.trace("Received message"), this.readFilterPending = !0, this.filterStack.receiveMessage(Y).then(z => {
              if (this.trace("Finished filtering received message"), this.readFilterPending = !1, this.listener.onReceiveMessage(z), this.pendingChildStatus) this.outputStatus(this.pendingChildStatus);
            }, z => {
              this.cancelWithStatus(z.code, z.details);
            });
          },
          onReceiveStatus: Y => {
            if (this.trace("Received status"), this.readFilterPending) this.pendingChildStatus = Y;else this.outputStatus(Y);
          }
        }), this.readPending) this.child.startRead();
        if (this.pendingMessage) this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);else if (this.pendingHalfClose) this.child.halfClose();
      }, q => {
        this.outputStatus(q);
      });
    }
    reportResolverError(A) {
      var K;
      if ((K = this.metadata) === null || K === void 0 ? void 0 : K.getOptions().waitForReady) this.channel.queueCallForConfig(this);else this.outputStatus(A);
    }
    cancelWithStatus(A, K) {
      var q;
      this.trace("cancelWithStatus code: " + A + ' details: "' + K + '"'), (q = this.child) === null || q === void 0 || q.cancelWithStatus(A, K), this.outputStatus({
        code: A,
        details: K,
        metadata: new qi7.Metadata()
      });
    }
    getPeer() {
      var A, K;
      return (K = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : this.channel.getTarget();
    }
    start(A, K) {
      this.trace("start called"), this.metadata = A.clone(), this.listener = K, this.getConfig();
    }
    sendMessageWithContext(A, K) {
      if (this.trace("write() called with message of length " + K.length), this.child) this.sendMessageOnChild(A, K);else this.pendingMessage = {
        context: A,
        message: K
      };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead();else this.readPending = !0;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child && !this.writeFilterPending) this.child.halfClose();else this.pendingHalfClose = !0;
    }
    setCredentials(A) {
      this.credentials = A;
    }
    addStatusWatcher(A) {
      this.statusWatchers.push(A);
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext();else return null;
    }
  }
  zi7.ResolvingCall = Yi7;
});

// Register to shared state
__$.Hi7 = Hi7;
