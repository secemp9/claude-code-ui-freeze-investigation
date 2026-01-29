// Module: Gt
// Dependencies: $p7, wP, K9, mf, uD1, mD1, ik6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gt = v(ic7 => {
  var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2157/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(ic7, "__esModule", {
    value: !0
  });
  ic7.registerChannelzSocket = ic7.registerChannelzServer = ic7.registerChannelzSubchannel = ic7.registerChannelzChannel = ic7.ChannelzCallTrackerStub = ic7.ChannelzCallTracker = ic7.ChannelzChildrenTrackerStub = ic7.ChannelzChildrenTracker = ic7.ChannelzTrace = ic7.ChannelzTraceStub = void 0;
  ic7.unregisterChannelzRef = mY2;
  ic7.getChannelzHandlers = cc7;
  ic7.getChannelzServiceDefinition = lc7;
  ic7.setup = rY2;
  var Xj1 = CA("net"),
    A3A = __$.$p7(),
    GFA = __$.wP(),
    ZFA = __$.K9(),
    bY2 = __$.mf(),
    xY2 = __$.uD1(),
    uY2 = __$.mD1();
  function nk6(A) {
    return {
      channel_id: A.id,
      name: A.name
    };
  }
  function rk6(A) {
    return {
      subchannel_id: A.id,
      name: A.name
    };
  }
  function BY2(A) {
    return {
      server_id: A.id
    };
  }
  function $j1(A) {
    return {
      socket_id: A.id,
      name: A.name
    };
  }
  var bc7 = 32,
    ok6 = 100;
  class mc7 {
    constructor() {
      this.events = [], this.creationTimestamp = new Date(), this.eventsLogged = 0;
    }
    addTrace() {}
    getTraceMessage() {
      return {
        creation_timestamp: BB(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: []
      };
    }
  }
  ic7.ChannelzTraceStub = mc7;
  class gc7 {
    constructor() {
      this.events = [], this.eventsLogged = 0, this.creationTimestamp = new Date();
    }
    addTrace(A, K, q) {
      let Y = new Date();
      if (this.events.push({
        description: K,
        severity: A,
        timestamp: Y,
        childChannel: (q === null || q === void 0 ? void 0 : q.kind) === "channel" ? q : void 0,
        childSubchannel: (q === null || q === void 0 ? void 0 : q.kind) === "subchannel" ? q : void 0
      }), this.events.length >= bc7 * 2) this.events = this.events.slice(bc7);
      this.eventsLogged += 1;
    }
    getTraceMessage() {
      return {
        creation_timestamp: BB(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: this.events.map(A => {
          return {
            description: A.description,
            severity: A.severity,
            timestamp: BB(A.timestamp),
            channel_ref: A.childChannel ? nk6(A.childChannel) : null,
            subchannel_ref: A.childSubchannel ? rk6(A.childSubchannel) : null
          };
        })
      };
    }
  }
  ic7.ChannelzTrace = gc7;
  class ak6 {
    constructor() {
      this.channelChildren = new A3A.OrderedMap(), this.subchannelChildren = new A3A.OrderedMap(), this.socketChildren = new A3A.OrderedMap(), this.trackerMap = {
        ["channel"]: this.channelChildren,
        ["subchannel"]: this.subchannelChildren,
        ["socket"]: this.socketChildren
      };
    }
    refChild(A) {
      let K = this.trackerMap[A.kind],
        q = K.find(A.id);
      if (q.equals(K.end())) K.setElement(A.id, {
        ref: A,
        count: 1
      }, q);else q.pointer[1].count += 1;
    }
    unrefChild(A) {
      let K = this.trackerMap[A.kind],
        q = K.getElementByKey(A.id);
      if (q !== void 0) {
        if (q.count -= 1, q.count === 0) K.eraseElementByKey(A.id);
      }
    }
    getChildLists() {
      return {
        channels: this.channelChildren,
        subchannels: this.subchannelChildren,
        sockets: this.socketChildren
      };
    }
  }
  ic7.ChannelzChildrenTracker = ak6;
  class Fc7 extends ak6 {
    refChild() {}
    unrefChild() {}
  }
  ic7.ChannelzChildrenTrackerStub = Fc7;
  class sk6 {
    constructor() {
      this.callsStarted = 0, this.callsSucceeded = 0, this.callsFailed = 0, this.lastCallStartedTimestamp = null;
    }
    addCallStarted() {
      this.callsStarted += 1, this.lastCallStartedTimestamp = new Date();
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  }
  ic7.ChannelzCallTracker = sk6;
  class Qc7 extends sk6 {
    addCallStarted() {}
    addCallSucceeded() {}
    addCallFailed() {}
  }
  ic7.ChannelzCallTrackerStub = Qc7;
  var wd = {
      ["channel"]: new A3A.OrderedMap(),
      ["subchannel"]: new A3A.OrderedMap(),
      ["server"]: new A3A.OrderedMap(),
      ["socket"]: new A3A.OrderedMap()
    },
    _j1 = A => {
      let K = 1;
      function q() {
        return K++;
      }
      let Y = wd[A];
      return (z, w, H) => {
        let J = q(),
          O = {
            id: J,
            name: z,
            kind: A
          };
        if (H) Y.setElement(J, {
          ref: O,
          getInfo: w
        });
        return O;
      };
    };
  ic7.registerChannelzChannel = _j1("channel");
  ic7.registerChannelzSubchannel = _j1("subchannel");
  ic7.registerChannelzServer = _j1("server");
  ic7.registerChannelzSocket = _j1("socket");
  function mY2(A) {
    wd[A.kind].eraseElementByKey(A.id);
  }
  function gY2(A) {
    let K = Number.parseInt(A, 16);
    return [K / 256 | 0, K % 256];
  }
  function xc7(A) {
    if (A === "") return [];
    let K = A.split(":").map(Y => gY2(Y));
    return [].concat(...K);
  }
  function FY2(A) {
    return (0, Xj1.isIPv6)(A) && A.toLowerCase().startsWith("::ffff:") && (0, Xj1.isIPv4)(A.substring(7));
  }
  function uc7(A) {
    return Buffer.from(Uint8Array.from(A.split(".").map(K => Number.parseInt(K))));
  }
  function QY2(A) {
    if ((0, Xj1.isIPv4)(A)) return uc7(A);else if (FY2(A)) return uc7(A.substring(7));else if ((0, Xj1.isIPv6)(A)) {
      let K,
        q,
        Y = A.indexOf("::");
      if (Y === -1) K = A, q = "";else K = A.substring(0, Y), q = A.substring(Y + 2);
      let z = Buffer.from(xc7(K)),
        w = Buffer.from(xc7(q)),
        H = Buffer.alloc(16 - z.length - w.length, 0);
      return Buffer.concat([z, H, w]);
    } else return null;
  }
  function Uc7(A) {
    switch (A) {
      case GFA.ConnectivityState.CONNECTING:
        return {
          state: "CONNECTING"
        };
      case GFA.ConnectivityState.IDLE:
        return {
          state: "IDLE"
        };
      case GFA.ConnectivityState.READY:
        return {
          state: "READY"
        };
      case GFA.ConnectivityState.SHUTDOWN:
        return {
          state: "SHUTDOWN"
        };
      case GFA.ConnectivityState.TRANSIENT_FAILURE:
        return {
          state: "TRANSIENT_FAILURE"
        };
      default:
        return {
          state: "UNKNOWN"
        };
    }
  }
  function BB(A) {
    if (!A) return null;
    let K = A.getTime();
    return {
      seconds: K / 1000 | 0,
      nanos: K % 1000 * 1e6
    };
  }
  function pc7(A) {
    let K = A.getInfo(),
      q = [],
      Y = [];
    return K.children.channels.forEach(z => {
      q.push(nk6(z[1].ref));
    }), K.children.subchannels.forEach(z => {
      Y.push(rk6(z[1].ref));
    }), {
      ref: nk6(A.ref),
      data: {
        target: K.target,
        state: Uc7(K.state),
        calls_started: K.callTracker.callsStarted,
        calls_succeeded: K.callTracker.callsSucceeded,
        calls_failed: K.callTracker.callsFailed,
        last_call_started_timestamp: BB(K.callTracker.lastCallStartedTimestamp),
        trace: K.trace.getTraceMessage()
      },
      channel_ref: q,
      subchannel_ref: Y
    };
  }
  function UY2(A, K) {
    let q = parseInt(A.request.channel_id, 10),
      Y = wd.channel.getElementByKey(q);
    if (Y === void 0) {
      K({
        code: ZFA.Status.NOT_FOUND,
        details: "No channel data found for id " + q
      });
      return;
    }
    K(null, {
      channel: pc7(Y)
    });
  }
  function pY2(A, K) {
    let q = parseInt(A.request.max_results, 10) || ok6,
      Y = [],
      z = parseInt(A.request.start_channel_id, 10),
      w = wd.channel,
      H;
    for (H = w.lowerBound(z); !H.equals(w.end()) && Y.length < q; H = H.next()) Y.push(pc7(H.pointer[1]));
    K(null, {
      channel: Y,
      end: H.equals(w.end())
    });
  }
  function dc7(A) {
    let K = A.getInfo(),
      q = [];
    return K.listenerChildren.sockets.forEach(Y => {
      q.push($j1(Y[1].ref));
    }), {
      ref: BY2(A.ref),
      data: {
        calls_started: K.callTracker.callsStarted,
        calls_succeeded: K.callTracker.callsSucceeded,
        calls_failed: K.callTracker.callsFailed,
        last_call_started_timestamp: BB(K.callTracker.lastCallStartedTimestamp),
        trace: K.trace.getTraceMessage()
      },
      listen_socket: q
    };
  }
  function dY2(A, K) {
    let q = parseInt(A.request.server_id, 10),
      z = wd.server.getElementByKey(q);
    if (z === void 0) {
      K({
        code: ZFA.Status.NOT_FOUND,
        details: "No server data found for id " + q
      });
      return;
    }
    K(null, {
      server: dc7(z)
    });
  }
  function cY2(A, K) {
    let q = parseInt(A.request.max_results, 10) || ok6,
      Y = parseInt(A.request.start_server_id, 10),
      z = wd.server,
      w = [],
      H;
    for (H = z.lowerBound(Y); !H.equals(z.end()) && w.length < q; H = H.next()) w.push(dc7(H.pointer[1]));
    K(null, {
      server: w,
      end: H.equals(z.end())
    });
  }
  function lY2(A, K) {
    let q = parseInt(A.request.subchannel_id, 10),
      Y = wd.subchannel.getElementByKey(q);
    if (Y === void 0) {
      K({
        code: ZFA.Status.NOT_FOUND,
        details: "No subchannel data found for id " + q
      });
      return;
    }
    let z = Y.getInfo(),
      w = [];
    z.children.sockets.forEach(J => {
      w.push($j1(J[1].ref));
    });
    let H = {
      ref: rk6(Y.ref),
      data: {
        target: z.target,
        state: Uc7(z.state),
        calls_started: z.callTracker.callsStarted,
        calls_succeeded: z.callTracker.callsSucceeded,
        calls_failed: z.callTracker.callsFailed,
        last_call_started_timestamp: BB(z.callTracker.lastCallStartedTimestamp),
        trace: z.trace.getTraceMessage()
      },
      socket_ref: w
    };
    K(null, {
      subchannel: H
    });
  }
  function Bc7(A) {
    var K;
    if ((0, bY2.isTcpSubchannelAddress)(A)) return {
      address: "tcpip_address",
      tcpip_address: {
        ip_address: (K = QY2(A.host)) !== null && K !== void 0 ? K : void 0,
        port: A.port
      }
    };else return {
      address: "uds_address",
      uds_address: {
        filename: A.path
      }
    };
  }
  function iY2(A, K) {
    var q, Y, z, w, H;
    let J = parseInt(A.request.socket_id, 10),
      O = wd.socket.getElementByKey(J);
    if (O === void 0) {
      K({
        code: ZFA.Status.NOT_FOUND,
        details: "No socket data found for id " + J
      });
      return;
    }
    let X = O.getInfo(),
      $ = X.security ? {
        model: "tls",
        tls: {
          cipher_suite: X.security.cipherSuiteStandardName ? "standard_name" : "other_name",
          standard_name: (q = X.security.cipherSuiteStandardName) !== null && q !== void 0 ? q : void 0,
          other_name: (Y = X.security.cipherSuiteOtherName) !== null && Y !== void 0 ? Y : void 0,
          local_certificate: (z = X.security.localCertificate) !== null && z !== void 0 ? z : void 0,
          remote_certificate: (w = X.security.remoteCertificate) !== null && w !== void 0 ? w : void 0
        }
      } : null,
      _ = {
        ref: $j1(O.ref),
        local: X.localAddress ? Bc7(X.localAddress) : null,
        remote: X.remoteAddress ? Bc7(X.remoteAddress) : null,
        remote_name: (H = X.remoteName) !== null && H !== void 0 ? H : void 0,
        security: $,
        data: {
          keep_alives_sent: X.keepAlivesSent,
          streams_started: X.streamsStarted,
          streams_succeeded: X.streamsSucceeded,
          streams_failed: X.streamsFailed,
          last_local_stream_created_timestamp: BB(X.lastLocalStreamCreatedTimestamp),
          last_remote_stream_created_timestamp: BB(X.lastRemoteStreamCreatedTimestamp),
          messages_received: X.messagesReceived,
          messages_sent: X.messagesSent,
          last_message_received_timestamp: BB(X.lastMessageReceivedTimestamp),
          last_message_sent_timestamp: BB(X.lastMessageSentTimestamp),
          local_flow_control_window: X.localFlowControlWindow ? {
            value: X.localFlowControlWindow
          } : null,
          remote_flow_control_window: X.remoteFlowControlWindow ? {
            value: X.remoteFlowControlWindow
          } : null
        }
      };
    K(null, {
      socket: _
    });
  }
  function nY2(A, K) {
    let q = parseInt(A.request.server_id, 10),
      Y = wd.server.getElementByKey(q);
    if (Y === void 0) {
      K({
        code: ZFA.Status.NOT_FOUND,
        details: "No server data found for id " + q
      });
      return;
    }
    let z = parseInt(A.request.start_socket_id, 10),
      w = parseInt(A.request.max_results, 10) || ok6,
      J = Y.getInfo().sessionChildren.sockets,
      O = [],
      X;
    for (X = J.lowerBound(z); !X.equals(J.end()) && O.length < w; X = X.next()) O.push($j1(X.pointer[1].ref));
    K(null, {
      socket_ref: O,
      end: X.equals(J.end())
    });
  }
  function cc7() {
    return {
      GetChannel: UY2,
      GetTopChannels: pY2,
      GetServer: dY2,
      GetServers: cY2,
      GetSubchannel: lY2,
      GetSocket: iY2,
      GetServerSockets: nY2
    };
  }
  var Oj1 = null;
  function lc7() {
    if (Oj1) return Oj1;
    let A = __$.ik6().loadSync,
      K = A("channelz.proto", {
        keepCase: !0,
        longs: String,
        enums: String,
        defaults: !0,
        oneofs: !0,
        includeDirs: [`${__dirname}/../../proto`]
      });
    return Oj1 = (0, uY2.loadPackageDefinition)(K).grpc.channelz.v1.Channelz.service, Oj1;
  }
  function rY2() {
    (0, xY2.registerAdminService)(lc7, cc7);
  }
});

// Register to shared state
__$.Gt = Gt;
