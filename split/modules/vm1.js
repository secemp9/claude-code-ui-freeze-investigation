// Module: vm1
// Dependencies: sq, H8, pf8, cf8, if8, of8, tf8, KN8, zN8, HN8
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vm1 = v(BT8 => {
  Object.defineProperty(BT8, "__esModule", {
    value: !0
  });
  var OF = __$.sq(),
    hT8 = __$.H8(),
    loq = __$.pf8(),
    ioq = __$.cf8(),
    noq = __$.if8(),
    roq = __$.of8(),
    ooq = __$.tf8(),
    aoq = __$.KN8(),
    soq = __$.zN8(),
    toq = __$.HN8(),
    bT8 = __$.fT8(),
    Tm1 = __$.RT8(),
    xT8 = __$.RtA(),
    ytA = __$.LHA(),
    uT8 = __$.Pm1(),
    eoq = __$.ST8();
  BT8.IdleTransaction = OF.IdleTransaction;
  BT8.Span = OF.Span;
  BT8.SpanStatus = OF.SpanStatus;
  BT8.Transaction = OF.Transaction;
  BT8.extractTraceparentData = OF.extractTraceparentData;
  BT8.getActiveTransaction = OF.getActiveTransaction;
  BT8.hasTracingEnabled = OF.hasTracingEnabled;
  BT8.spanStatusfromHttpCode = OF.spanStatusfromHttpCode;
  BT8.startIdleTransaction = OF.startIdleTransaction;
  BT8.TRACEPARENT_REGEXP = hT8.TRACEPARENT_REGEXP;
  BT8.stripUrlQueryAndFragment = hT8.stripUrlQueryAndFragment;
  BT8.Express = loq.Express;
  BT8.Postgres = ioq.Postgres;
  BT8.Mysql = noq.Mysql;
  BT8.Mongo = roq.Mongo;
  BT8.Prisma = ooq.Prisma;
  BT8.GraphQL = aoq.GraphQL;
  BT8.Apollo = soq.Apollo;
  BT8.lazyLoadedNodePerformanceMonitoringIntegrations = toq.lazyLoadedNodePerformanceMonitoringIntegrations;
  BT8.BROWSER_TRACING_INTEGRATION_ID = bT8.BROWSER_TRACING_INTEGRATION_ID;
  BT8.BrowserTracing = bT8.BrowserTracing;
  BT8.browserTracingIntegration = Tm1.browserTracingIntegration;
  BT8.startBrowserTracingNavigationSpan = Tm1.startBrowserTracingNavigationSpan;
  BT8.startBrowserTracingPageLoadSpan = Tm1.startBrowserTracingPageLoadSpan;
  BT8.defaultRequestInstrumentationOptions = xT8.defaultRequestInstrumentationOptions;
  BT8.instrumentOutgoingRequests = xT8.instrumentOutgoingRequests;
  BT8.addClsInstrumentationHandler = ytA.addClsInstrumentationHandler;
  BT8.addFidInstrumentationHandler = ytA.addFidInstrumentationHandler;
  BT8.addLcpInstrumentationHandler = ytA.addLcpInstrumentationHandler;
  BT8.addPerformanceInstrumentationHandler = ytA.addPerformanceInstrumentationHandler;
  BT8.addTracingHeadersToFetchRequest = uT8.addTracingHeadersToFetchRequest;
  BT8.instrumentFetchRequest = uT8.instrumentFetchRequest;
  BT8.addExtensionMethods = eoq.addExtensionMethods;
});

// Register to shared state
__$.vm1 = vm1;
