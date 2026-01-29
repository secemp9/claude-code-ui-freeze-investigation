// Module: bFA
// Dependencies: kD1, Ak6, tk6, wP, qjA, eE6, K9, Lw, mD1, UG
//   ... and 16 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bFA = v(vz => {
  Object.defineProperty(vz, "__esModule", {
    value: !0
  });
  vz.experimental = vz.ServerMetricRecorder = vz.ServerInterceptingCall = vz.ResponderBuilder = vz.ServerListenerBuilder = vz.addAdminServicesToServer = vz.getChannelzHandlers = vz.getChannelzServiceDefinition = vz.InterceptorConfigurationError = vz.InterceptingCall = vz.RequesterBuilder = vz.ListenerBuilder = vz.StatusBuilder = vz.getClientChannel = vz.ServerCredentials = vz.Server = vz.setLogVerbosity = vz.setLogger = vz.load = vz.loadObject = vz.CallCredentials = vz.ChannelCredentials = vz.waitForClientReady = vz.closeClient = vz.Channel = vz.makeGenericClientConstructor = vz.makeClientConstructor = vz.loadPackageDefinition = vz.Client = vz.compressionAlgorithms = vz.propagate = vz.connectivityState = vz.status = vz.logVerbosity = vz.Metadata = vz.credentials = void 0;
  var pj1 = __$.kD1();
  Object.defineProperty(vz, "CallCredentials", {
    enumerable: !0,
    get: function () {
      return pj1.CallCredentials;
    }
  });
  var rJ2 = __$.Ak6();
  Object.defineProperty(vz, "Channel", {
    enumerable: !0,
    get: function () {
      return rJ2.ChannelImplementation;
    }
  });
  var oJ2 = __$.tk6();
  Object.defineProperty(vz, "compressionAlgorithms", {
    enumerable: !0,
    get: function () {
      return oJ2.CompressionAlgorithms;
    }
  });
  var aJ2 = __$.wP();
  Object.defineProperty(vz, "connectivityState", {
    enumerable: !0,
    get: function () {
      return aJ2.ConnectivityState;
    }
  });
  var dj1 = __$.qjA();
  Object.defineProperty(vz, "ChannelCredentials", {
    enumerable: !0,
    get: function () {
      return dj1.ChannelCredentials;
    }
  });
  var kr7 = __$.eE6();
  Object.defineProperty(vz, "Client", {
    enumerable: !0,
    get: function () {
      return kr7.Client;
    }
  });
  var qL6 = __$.K9();
  Object.defineProperty(vz, "logVerbosity", {
    enumerable: !0,
    get: function () {
      return qL6.LogVerbosity;
    }
  });
  Object.defineProperty(vz, "status", {
    enumerable: !0,
    get: function () {
      return qL6.Status;
    }
  });
  Object.defineProperty(vz, "propagate", {
    enumerable: !0,
    get: function () {
      return qL6.Propagate;
    }
  });
  var Cr7 = __$.Lw(),
    YL6 = __$.mD1();
  Object.defineProperty(vz, "loadPackageDefinition", {
    enumerable: !0,
    get: function () {
      return YL6.loadPackageDefinition;
    }
  });
  Object.defineProperty(vz, "makeClientConstructor", {
    enumerable: !0,
    get: function () {
      return YL6.makeClientConstructor;
    }
  });
  Object.defineProperty(vz, "makeGenericClientConstructor", {
    enumerable: !0,
    get: function () {
      return YL6.makeClientConstructor;
    }
  });
  var sJ2 = __$.UG();
  Object.defineProperty(vz, "Metadata", {
    enumerable: !0,
    get: function () {
      return sJ2.Metadata;
    }
  });
  var tJ2 = __$.Pn7();
  Object.defineProperty(vz, "Server", {
    enumerable: !0,
    get: function () {
      return tJ2.Server;
    }
  });
  var eJ2 = __$.Lj1();
  Object.defineProperty(vz, "ServerCredentials", {
    enumerable: !0,
    get: function () {
      return eJ2.ServerCredentials;
    }
  });
  var AO2 = __$.Tn7();
  Object.defineProperty(vz, "StatusBuilder", {
    enumerable: !0,
    get: function () {
      return AO2.StatusBuilder;
    }
  });
  vz.credentials = {
    combineChannelCredentials: (A, ...K) => {
      return K.reduce((q, Y) => q.compose(Y), A);
    },
    combineCallCredentials: (A, ...K) => {
      return K.reduce((q, Y) => q.compose(Y), A);
    },
    createInsecure: dj1.ChannelCredentials.createInsecure,
    createSsl: dj1.ChannelCredentials.createSsl,
    createFromSecureContext: dj1.ChannelCredentials.createFromSecureContext,
    createFromMetadataGenerator: pj1.CallCredentials.createFromMetadataGenerator,
    createFromGoogleCredential: pj1.CallCredentials.createFromGoogleCredential,
    createEmpty: pj1.CallCredentials.createEmpty
  };
  var KO2 = A => A.close();
  vz.closeClient = KO2;
  var qO2 = (A, K, q) => A.waitForReady(K, q);
  vz.waitForClientReady = qO2;
  var YO2 = (A, K) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  vz.loadObject = YO2;
  var zO2 = (A, K, q) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  vz.load = zO2;
  var wO2 = A => {
    Cr7.setLogger(A);
  };
  vz.setLogger = wO2;
  var HO2 = A => {
    Cr7.setLoggerVerbosity(A);
  };
  vz.setLogVerbosity = HO2;
  var JO2 = A => {
    return kr7.Client.prototype.getChannel.call(A);
  };
  vz.getClientChannel = JO2;
  var cj1 = __$.sE6();
  Object.defineProperty(vz, "ListenerBuilder", {
    enumerable: !0,
    get: function () {
      return cj1.ListenerBuilder;
    }
  });
  Object.defineProperty(vz, "RequesterBuilder", {
    enumerable: !0,
    get: function () {
      return cj1.RequesterBuilder;
    }
  });
  Object.defineProperty(vz, "InterceptingCall", {
    enumerable: !0,
    get: function () {
      return cj1.InterceptingCall;
    }
  });
  Object.defineProperty(vz, "InterceptorConfigurationError", {
    enumerable: !0,
    get: function () {
      return cj1.InterceptorConfigurationError;
    }
  });
  var Lr7 = __$.Gt();
  Object.defineProperty(vz, "getChannelzServiceDefinition", {
    enumerable: !0,
    get: function () {
      return Lr7.getChannelzServiceDefinition;
    }
  });
  Object.defineProperty(vz, "getChannelzHandlers", {
    enumerable: !0,
    get: function () {
      return Lr7.getChannelzHandlers;
    }
  });
  var OO2 = __$.uD1();
  Object.defineProperty(vz, "addAdminServicesToServer", {
    enumerable: !0,
    get: function () {
      return OO2.addAdminServicesToServer;
    }
  });
  var zL6 = __$.bC6();
  Object.defineProperty(vz, "ServerListenerBuilder", {
    enumerable: !0,
    get: function () {
      return zL6.ServerListenerBuilder;
    }
  });
  Object.defineProperty(vz, "ResponderBuilder", {
    enumerable: !0,
    get: function () {
      return zL6.ResponderBuilder;
    }
  });
  Object.defineProperty(vz, "ServerInterceptingCall", {
    enumerable: !0,
    get: function () {
      return zL6.ServerInterceptingCall;
    }
  });
  var XO2 = __$.yj1();
  Object.defineProperty(vz, "ServerMetricRecorder", {
    enumerable: !0,
    get: function () {
      return XO2.ServerMetricRecorder;
    }
  });
  var $O2 = __$.UC6();
  vz.experimental = $O2;
  var _O2 = __$.XC6(),
    GO2 = __$.dn7(),
    ZO2 = __$.an7(),
    WO2 = __$.LFA(),
    DO2 = __$.Yr7(),
    jO2 = __$._r7(),
    MO2 = __$.Er7(),
    PO2 = __$.Gt();
  (() => {
    _O2.setup(), GO2.setup(), ZO2.setup(), WO2.setup(), DO2.setup(), jO2.setup(), MO2.setup(), PO2.setup();
  })();
});

// Register to shared state
__$.bFA = bFA;
