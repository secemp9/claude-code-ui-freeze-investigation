// Module: _F
// Dependencies: sq, gT8, Em1, Lm1, Qm1, H8, LE8, Fm1, uE8, cE8
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _F = v(mC8 => {
  Object.defineProperty(mC8, "__esModule", {
    value: !0
  });
  var d7 = __$.sq(),
    g85 = __$.gT8(),
    F85 = __$.Em1(),
    Q85 = __$.Lm1(),
    tvA = __$.Qm1(),
    om1 = __$.H8(),
    U85 = __$.LE8(),
    bC8 = __$.Fm1(),
    p85 = __$.uE8(),
    d85 = __$.cE8(),
    c85 = __$.eE8(),
    l85 = __$.Kk8(),
    Vi = __$.NC8(),
    i85 = __$.btA(),
    n85 = __$.ctA(),
    r85 = __$.itA(),
    o85 = __$.UtA(),
    a85 = __$.BtA(),
    s85 = __$.xtA(),
    t85 = __$.QtA(),
    e85 = __$.ntA(),
    A45 = __$.ttA(),
    xC8 = __$.lm1(),
    uC8 = __$.otA(),
    BC8 = __$.mtA(),
    K45 = __$.cm1(),
    q45 = __$.LC8(),
    Y45 = __$.IC8(),
    z45 = __$.hC8(),
    w45 = bC8.createGetModuleFromFilename(),
    H45 = {
      ...d7.Integrations,
      ...c85,
      ...l85
    },
    J45 = {
      instrumentCron: q45.instrumentCron,
      instrumentNodeCron: Y45.instrumentNodeCron,
      instrumentNodeSchedule: z45.instrumentNodeSchedule
    };
  mC8.Hub = d7.Hub;
  mC8.SDK_VERSION = d7.SDK_VERSION;
  mC8.SEMANTIC_ATTRIBUTE_SENTRY_OP = d7.SEMANTIC_ATTRIBUTE_SENTRY_OP;
  mC8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = d7.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
  mC8.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = d7.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  mC8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = d7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
  mC8.Scope = d7.Scope;
  mC8.addBreadcrumb = d7.addBreadcrumb;
  mC8.addEventProcessor = d7.addEventProcessor;
  mC8.addGlobalEventProcessor = d7.addGlobalEventProcessor;
  mC8.addIntegration = d7.addIntegration;
  mC8.captureCheckIn = d7.captureCheckIn;
  mC8.captureEvent = d7.captureEvent;
  mC8.captureException = d7.captureException;
  mC8.captureMessage = d7.captureMessage;
  mC8.captureSession = d7.captureSession;
  mC8.close = d7.close;
  mC8.configureScope = d7.configureScope;
  mC8.continueTrace = d7.continueTrace;
  mC8.createTransport = d7.createTransport;
  mC8.endSession = d7.endSession;
  mC8.extractTraceparentData = d7.extractTraceparentData;
  mC8.flush = d7.flush;
  mC8.functionToStringIntegration = d7.functionToStringIntegration;
  mC8.getActiveSpan = d7.getActiveSpan;
  mC8.getActiveTransaction = d7.getActiveTransaction;
  mC8.getClient = d7.getClient;
  mC8.getCurrentHub = d7.getCurrentHub;
  mC8.getCurrentScope = d7.getCurrentScope;
  mC8.getGlobalScope = d7.getGlobalScope;
  mC8.getHubFromCarrier = d7.getHubFromCarrier;
  mC8.getIsolationScope = d7.getIsolationScope;
  mC8.getSpanStatusFromHttpCode = d7.getSpanStatusFromHttpCode;
  mC8.inboundFiltersIntegration = d7.inboundFiltersIntegration;
  mC8.isInitialized = d7.isInitialized;
  mC8.lastEventId = d7.lastEventId;
  mC8.linkedErrorsIntegration = d7.linkedErrorsIntegration;
  mC8.makeMain = d7.makeMain;
  mC8.metrics = d7.metrics;
  mC8.parameterize = d7.parameterize;
  mC8.requestDataIntegration = d7.requestDataIntegration;
  mC8.runWithAsyncContext = d7.runWithAsyncContext;
  mC8.setContext = d7.setContext;
  mC8.setCurrentClient = d7.setCurrentClient;
  mC8.setExtra = d7.setExtra;
  mC8.setExtras = d7.setExtras;
  mC8.setHttpStatus = d7.setHttpStatus;
  mC8.setMeasurement = d7.setMeasurement;
  mC8.setTag = d7.setTag;
  mC8.setTags = d7.setTags;
  mC8.setUser = d7.setUser;
  mC8.spanStatusfromHttpCode = d7.spanStatusfromHttpCode;
  mC8.startActiveSpan = d7.startActiveSpan;
  mC8.startInactiveSpan = d7.startInactiveSpan;
  mC8.startSession = d7.startSession;
  mC8.startSpan = d7.startSpan;
  mC8.startSpanManual = d7.startSpanManual;
  mC8.startTransaction = d7.startTransaction;
  mC8.trace = d7.trace;
  mC8.withActiveSpan = d7.withActiveSpan;
  mC8.withIsolationScope = d7.withIsolationScope;
  mC8.withMonitor = d7.withMonitor;
  mC8.withScope = d7.withScope;
  mC8.autoDiscoverNodePerformanceMonitoringIntegrations = g85.autoDiscoverNodePerformanceMonitoringIntegrations;
  mC8.NodeClient = F85.NodeClient;
  mC8.makeNodeTransport = Q85.makeNodeTransport;
  mC8.defaultIntegrations = tvA.defaultIntegrations;
  mC8.defaultStackParser = tvA.defaultStackParser;
  mC8.getDefaultIntegrations = tvA.getDefaultIntegrations;
  mC8.getSentryRelease = tvA.getSentryRelease;
  mC8.init = tvA.init;
  mC8.DEFAULT_USER_INCLUDES = om1.DEFAULT_USER_INCLUDES;
  mC8.addRequestDataToEvent = om1.addRequestDataToEvent;
  mC8.extractRequestData = om1.extractRequestData;
  mC8.deepReadDirSync = U85.deepReadDirSync;
  mC8.createGetModuleFromFilename = bC8.createGetModuleFromFilename;
  mC8.enableAnrDetection = p85.enableAnrDetection;
  mC8.Handlers = d85;
  mC8.captureConsoleIntegration = Vi.captureConsoleIntegration;
  mC8.debugIntegration = Vi.debugIntegration;
  mC8.dedupeIntegration = Vi.dedupeIntegration;
  mC8.extraErrorDataIntegration = Vi.extraErrorDataIntegration;
  mC8.httpClientIntegration = Vi.httpClientIntegration;
  mC8.reportingObserverIntegration = Vi.reportingObserverIntegration;
  mC8.rewriteFramesIntegration = Vi.rewriteFramesIntegration;
  mC8.sessionTimingIntegration = Vi.sessionTimingIntegration;
  mC8.consoleIntegration = i85.consoleIntegration;
  mC8.onUncaughtExceptionIntegration = n85.onUncaughtExceptionIntegration;
  mC8.onUnhandledRejectionIntegration = r85.onUnhandledRejectionIntegration;
  mC8.modulesIntegration = o85.modulesIntegration;
  mC8.contextLinesIntegration = a85.contextLinesIntegration;
  mC8.nodeContextIntegration = s85.nodeContextIntegration;
  mC8.localVariablesIntegration = t85.localVariablesIntegration;
  mC8.spotlightIntegration = e85.spotlightIntegration;
  mC8.anrIntegration = A45.anrIntegration;
  mC8.hapiErrorPlugin = xC8.hapiErrorPlugin;
  mC8.hapiIntegration = xC8.hapiIntegration;
  mC8.Undici = uC8.Undici;
  mC8.nativeNodeFetchintegration = uC8.nativeNodeFetchintegration;
  mC8.Http = BC8.Http;
  mC8.httpIntegration = BC8.httpIntegration;
  mC8.trpcMiddleware = K45.trpcMiddleware;
  mC8.Integrations = H45;
  mC8.cron = J45;
  mC8.getModuleFromFilename = w45;
});

// Register to shared state
__$._F = _F;
