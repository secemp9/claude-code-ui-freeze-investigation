// Module: Ki7
// Dependencies: wP, K9, MjA, UG, tp, zP, Lw, DFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ki7 = v(el7 => {
  Object.defineProperty(el7, "__esModule", {
    value: !0
  });
  el7.LoadBalancingCall = void 0;
  var al7 = __$.wP(),
    Nj1 = __$.K9(),
    sl7 = __$.MjA(),
    Tj1 = __$.UG(),
    NFA = __$.tp(),
    cz2 = __$.zP(),
    lz2 = __$.Lw(),
    DC6 = __$.DFA(),
    iz2 = CA("http2"),
    nz2 = "load_balancing_call";
  class tl7 {
    constructor(A, K, q, Y, z, w, H) {
      var J, O;
      this.channel = A, this.callConfig = K, this.methodName = q, this.host = Y, this.credentials = z, this.deadline = w, this.callNumber = H, this.child = null, this.readPending = !1, this.pendingMessage = null, this.pendingHalfClose = !1, this.ended = !1, this.metadata = null, this.listener = null, this.onCallEnded = null, this.childStartTime = null;
      let X = this.methodName.split("/"),
        $ = "";
      if (X.length >= 2) $ = X[1];
      let _ = (O = (J = (0, cz2.splitHostPort)(this.host)) === null || J === void 0 ? void 0 : J.host) !== null && O !== void 0 ? O : "localhost";
      this.serviceUrl = `https://${_}/${$}`, this.startTime = new Date();
    }
    getDeadlineInfo() {
      var A, K;
      let q = [];
      if (this.childStartTime) {
        if (this.childStartTime > this.startTime) {
          if ((A = this.metadata) === null || A === void 0 ? void 0 : A.getOptions().waitForReady) q.push("wait_for_ready");
          q.push(`LB pick: ${(0, sl7.formatDateDifference)(this.startTime, this.childStartTime)}`);
        }
        return q.push(...this.child.getDeadlineInfo()), q;
      } else {
        if ((K = this.metadata) === null || K === void 0 ? void 0 : K.getOptions().waitForReady) q.push("wait_for_ready");
        q.push("Waiting for LB pick");
      }
      return q;
    }
    trace(A) {
      lz2.trace(Nj1.LogVerbosity.DEBUG, nz2, "[" + this.callNumber + "] " + A);
    }
    outputStatus(A, K) {
      var q, Y;
      if (!this.ended) {
        this.ended = !0, this.trace("ended with status: code=" + A.code + ' details="' + A.details + '" start time=' + this.startTime.toISOString());
        let z = Object.assign(Object.assign({}, A), {
          progress: K
        });
        (q = this.listener) === null || q === void 0 || q.onReceiveStatus(z), (Y = this.onCallEnded) === null || Y === void 0 || Y.call(this, z.code, z.details, z.metadata);
      }
    }
    doPick() {
      var A, K;
      if (this.ended) return;
      if (!this.metadata) throw Error("doPick called before start");
      this.trace("Pick called");
      let q = this.metadata.clone(),
        Y = this.channel.doPick(q, this.callConfig.pickInformation),
        z = Y.subchannel ? "(" + Y.subchannel.getChannelzRef().id + ") " + Y.subchannel.getAddress() : "" + Y.subchannel;
      switch (this.trace("Pick result: " + NFA.PickResultType[Y.pickResultType] + " subchannel: " + z + " status: " + ((A = Y.status) === null || A === void 0 ? void 0 : A.code) + " " + ((K = Y.status) === null || K === void 0 ? void 0 : K.details)), Y.pickResultType) {
        case NFA.PickResultType.COMPLETE:
          this.credentials.compose(Y.subchannel.getCallCredentials()).generateMetadata({
            method_name: this.methodName,
            service_url: this.serviceUrl
          }).then(O => {
            var X;
            if (this.ended) {
              this.trace("Credentials metadata generation finished after call ended");
              return;
            }
            if (q.merge(O), q.get("authorization").length > 1) this.outputStatus({
              code: Nj1.Status.INTERNAL,
              details: '"authorization" metadata cannot have multiple values',
              metadata: new Tj1.Metadata()
            }, "PROCESSED");
            if (Y.subchannel.getConnectivityState() !== al7.ConnectivityState.READY) {
              this.trace("Picked subchannel " + z + " has state " + al7.ConnectivityState[Y.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick"), this.doPick();
              return;
            }
            if (this.deadline !== 1 / 0) q.set("grpc-timeout", (0, sl7.getDeadlineTimeoutString)(this.deadline));
            try {
              this.child = Y.subchannel.getRealSubchannel().createCall(q, this.host, this.methodName, {
                onReceiveMetadata: $ => {
                  this.trace("Received metadata"), this.listener.onReceiveMetadata($);
                },
                onReceiveMessage: $ => {
                  this.trace("Received message"), this.listener.onReceiveMessage($);
                },
                onReceiveStatus: $ => {
                  if (this.trace("Received status"), $.rstCode === iz2.constants.NGHTTP2_REFUSED_STREAM) this.outputStatus($, "REFUSED");else this.outputStatus($, "PROCESSED");
                }
              }), this.childStartTime = new Date();
            } catch ($) {
              this.trace("Failed to start call on picked subchannel " + z + " with error " + $.message), this.outputStatus({
                code: Nj1.Status.INTERNAL,
                details: "Failed to start HTTP/2 stream with error " + $.message,
                metadata: new Tj1.Metadata()
              }, "NOT_STARTED");
              return;
            }
            if ((X = Y.onCallStarted) === null || X === void 0 || X.call(Y), this.onCallEnded = Y.onCallEnded, this.trace("Created child call [" + this.child.getCallNumber() + "]"), this.readPending) this.child.startRead();
            if (this.pendingMessage) this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
            if (this.pendingHalfClose) this.child.halfClose();
          }, O => {
            let {
              code: X,
              details: $
            } = (0, DC6.restrictControlPlaneStatusCode)(typeof O.code === "number" ? O.code : Nj1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${O.message}`);
            this.outputStatus({
              code: X,
              details: $,
              metadata: new Tj1.Metadata()
            }, "PROCESSED");
          });
          break;
        case NFA.PickResultType.DROP:
          let {
            code: H,
            details: J
          } = (0, DC6.restrictControlPlaneStatusCode)(Y.status.code, Y.status.details);
          setImmediate(() => {
            this.outputStatus({
              code: H,
              details: J,
              metadata: Y.status.metadata
            }, "DROP");
          });
          break;
        case NFA.PickResultType.TRANSIENT_FAILURE:
          if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this);else {
            let {
              code: O,
              details: X
            } = (0, DC6.restrictControlPlaneStatusCode)(Y.status.code, Y.status.details);
            setImmediate(() => {
              this.outputStatus({
                code: O,
                details: X,
                metadata: Y.status.metadata
              }, "PROCESSED");
            });
          }
          break;
        case NFA.PickResultType.QUEUE:
          this.channel.queueCallForPick(this);
      }
    }
    cancelWithStatus(A, K) {
      var q;
      this.trace("cancelWithStatus code: " + A + ' details: "' + K + '"'), (q = this.child) === null || q === void 0 || q.cancelWithStatus(A, K), this.outputStatus({
        code: A,
        details: K,
        metadata: new Tj1.Metadata()
      }, "PROCESSED");
    }
    getPeer() {
      var A, K;
      return (K = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : this.channel.getTarget();
    }
    start(A, K) {
      this.trace("start called"), this.listener = K, this.metadata = A, this.doPick();
    }
    sendMessageWithContext(A, K) {
      if (this.trace("write() called with message of length " + K.length), this.child) this.child.sendMessageWithContext(A, K);else this.pendingMessage = {
        context: A,
        message: K
      };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead();else this.readPending = !0;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child) this.child.halfClose();else this.pendingHalfClose = !0;
    }
    setCredentials(A) {
      throw Error("Method not implemented.");
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext();else return null;
    }
  }
  el7.LoadBalancingCall = tl7;
});

// Register to shared state
__$.Ki7 = Ki7;
