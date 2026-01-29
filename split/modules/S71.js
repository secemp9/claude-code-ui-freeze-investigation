// Module: S71
// Dependencies: Z14, BF, mF, gF, Ub, u64, l0, Gz, DJ, B64
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S71 = v(t16 => {
  var J44 = __$.Z14(),
    r84 = __$.BF(),
    tv3 = __$.mF(),
    ev3 = __$.gF(),
    o84 = __$.Ub(),
    O44 = __$.u64(),
    AE3 = __$.l0(),
    Y71 = __$.Gz(),
    LV = __$.DJ(),
    KE3 = __$.B64(),
    qE3 = __$.rF(),
    Gy = __$.qy(),
    a84 = __$.kZ(),
    IZ = __$.dLA(),
    s84 = __$.q16(),
    YE3 = __$.d84(),
    t84 = __$.Yy(),
    e84 = __$.n84(),
    zE3 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "bedrock"
      });
    },
    zx = {
      UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
      },
      Endpoint: {
        type: "builtInParams",
        name: "endpoint"
      },
      Region: {
        type: "builtInParams",
        name: "region"
      },
      UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
      }
    },
    wE3 = A => {
      let {
        httpAuthSchemes: K,
        httpAuthSchemeProvider: q,
        credentials: Y,
        token: z
      } = A;
      return {
        setHttpAuthScheme(w) {
          let H = K.findIndex(J => J.schemeId === w.schemeId);
          if (H === -1) K.push(w);else K.splice(H, 1, w);
        },
        httpAuthSchemes() {
          return K;
        },
        setHttpAuthSchemeProvider(w) {
          q = w;
        },
        httpAuthSchemeProvider() {
          return q;
        },
        setCredentials(w) {
          Y = w;
        },
        credentials() {
          return Y;
        },
        setToken(w) {
          z = w;
        },
        token() {
          return z;
        }
      };
    },
    HE3 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
        token: A.token()
      };
    },
    JE3 = (A, K) => {
      let q = Object.assign(t84.getAwsRegionExtensionConfiguration(A), IZ.getDefaultExtensionConfiguration(A), e84.getHttpHandlerExtensionConfiguration(A), wE3(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, t84.resolveAwsRegionExtensionConfiguration(q), IZ.resolveDefaultRuntimeConfig(q), e84.resolveHttpHandlerRuntimeConfig(q), HE3(q));
    };
  class w71 extends IZ.Client {
    config;
    constructor(...[A]) {
      let K = YE3.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = zE3(K),
        Y = o84.resolveUserAgentConfig(q),
        z = a84.resolveRetryConfig(Y),
        w = AE3.resolveRegionConfig(z),
        H = r84.resolveHostHeaderConfig(w),
        J = Gy.resolveEndpointConfig(H),
        O = KE3.resolveEventStreamSerdeConfig(J),
        X = s84.resolveHttpAuthSchemeConfig(O),
        $ = J44.resolveEventStreamConfig(X),
        _ = O44.resolveWebSocketConfig($),
        G = JE3(_, A?.extensions || []);
      this.config = G, this.middlewareStack.use(LV.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(o84.getUserAgentPlugin(this.config)), this.middlewareStack.use(a84.getRetryPlugin(this.config)), this.middlewareStack.use(qE3.getContentLengthPlugin(this.config)), this.middlewareStack.use(r84.getHostHeaderPlugin(this.config)), this.middlewareStack.use(tv3.getLoggerPlugin(this.config)), this.middlewareStack.use(ev3.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(Y71.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: s84.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async Z => new Y71.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": Z.credentials,
          "smithy.api#httpBearerAuth": Z.token
        })
      })), this.middlewareStack.use(Y71.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var RV = class A extends IZ.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    X44 = class A extends RV {
      name = "AccessDeniedException";
      $fault = "client";
      constructor(K) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    $44 = class A extends RV {
      name = "InternalServerException";
      $fault = "server";
      constructor(K) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    _44 = class A extends RV {
      name = "ThrottlingException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ThrottlingException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    G44 = class A extends RV {
      name = "ValidationException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Z44 = class A extends RV {
      name = "ConflictException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ConflictException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    W44 = class A extends RV {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    D44 = class A extends RV {
      name = "ServiceQuotaExceededException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ServiceQuotaExceededException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    j44 = class A extends RV {
      name = "ServiceUnavailableException";
      $fault = "server";
      constructor(K) {
        super({
          name: "ServiceUnavailableException",
          $fault: "server",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    M44 = class A extends RV {
      name = "ModelErrorException";
      $fault = "client";
      originalStatusCode;
      resourceName;
      constructor(K) {
        super({
          name: "ModelErrorException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.originalStatusCode = K.originalStatusCode, this.resourceName = K.resourceName;
      }
    },
    P44 = class A extends RV {
      name = "ModelNotReadyException";
      $fault = "client";
      $retryable = {};
      constructor(K) {
        super({
          name: "ModelNotReadyException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    V44 = class A extends RV {
      name = "ModelTimeoutException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ModelTimeoutException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    f44 = class A extends RV {
      name = "ModelStreamErrorException";
      $fault = "client";
      originalStatusCode;
      originalMessage;
      constructor(K) {
        super({
          name: "ModelStreamErrorException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.originalStatusCode = K.originalStatusCode, this.originalMessage = K.originalMessage;
      }
    },
    OE3 = "Accept",
    XE3 = "AccessDeniedException",
    $E3 = "ApplyGuardrail",
    _E3 = "ApplyGuardrailRequest",
    GE3 = "ApplyGuardrailResponse",
    ZE3 = "AsyncInvokeMessage",
    WE3 = "AsyncInvokeOutputDataConfig",
    DE3 = "AsyncInvokeSummary",
    jE3 = "AsyncInvokeS3OutputDataConfig",
    ME3 = "AsyncInvokeSummaries",
    PE3 = "AnyToolChoice",
    VE3 = "AutoToolChoice",
    fE3 = "Body",
    NE3 = "BidirectionalInputPayloadPart",
    TE3 = "BidirectionalOutputPayloadPart",
    vE3 = "Citation",
    EE3 = "ContentBlocks",
    kE3 = "ContentBlockDelta",
    CE3 = "ContentBlockDeltaEvent",
    LE3 = "ContentBlockStart",
    RE3 = "ContentBlockStartEvent",
    yE3 = "ContentBlockStopEvent",
    IE3 = "ContentBlock",
    SE3 = "CitationsConfig",
    hE3 = "CitationsContentBlock",
    bE3 = "CitationsDelta",
    xE3 = "ConflictException",
    uE3 = "CitationGeneratedContent",
    BE3 = "CitationGeneratedContentList",
    mE3 = "CitationLocation",
    gE3 = "ConverseMetrics",
    FE3 = "ConverseOutput",
    QE3 = "CachePointBlock",
    UE3 = "ConverseRequest",
    pE3 = "ConverseResponse",
    dE3 = "ConverseStream",
    cE3 = "CitationSourceContent",
    lE3 = "CitationSourceContentDelta",
    iE3 = "CitationSourceContentList",
    nE3 = "CitationSourceContentListDelta",
    rE3 = "ConverseStreamMetrics",
    oE3 = "ConverseStreamMetadataEvent",
    aE3 = "ConverseStreamOutput",
    sE3 = "ConverseStreamRequest",
    tE3 = "ConverseStreamResponse",
    eE3 = "ConverseStreamTrace",
    Ak3 = "ConverseTrace",
    Kk3 = "CountTokensInput",
    qk3 = "ConverseTokensRequest",
    Yk3 = "CountTokensRequest",
    zk3 = "CountTokensResponse",
    _16 = "Content-Type",
    wk3 = "CountTokens",
    Hk3 = "Citations",
    Jk3 = "Converse",
    Ok3 = "DocumentBlock",
    Xk3 = "DocumentContentBlocks",
    $k3 = "DocumentContentBlock",
    _k3 = "DocumentCharLocation",
    Gk3 = "DocumentChunkLocation",
    Zk3 = "DocumentPageLocation",
    Wk3 = "DocumentSource",
    Dk3 = "GuardrailAssessment",
    jk3 = "GetAsyncInvoke",
    Mk3 = "GetAsyncInvokeRequest",
    Pk3 = "GetAsyncInvokeResponse",
    Vk3 = "GuardrailAssessmentList",
    fk3 = "GuardrailAssessmentListMap",
    Nk3 = "GuardrailAssessmentMap",
    Tk3 = "GuardrailAutomatedReasoningDifferenceScenarioList",
    vk3 = "GuardrailAutomatedReasoningFinding",
    Ek3 = "GuardrailAutomatedReasoningFindingList",
    kk3 = "GuardrailAutomatedReasoningImpossibleFinding",
    Ck3 = "GuardrailAutomatedReasoningInvalidFinding",
    Lk3 = "GuardrailAutomatedReasoningInputTextReference",
    Rk3 = "GuardrailAutomatedReasoningInputTextReferenceList",
    yk3 = "GuardrailAutomatedReasoningLogicWarning",
    Ik3 = "GuardrailAutomatedReasoningNoTranslationsFinding",
    Sk3 = "GuardrailAutomatedReasoningPolicyAssessment",
    hk3 = "GuardrailAutomatedReasoningRule",
    bk3 = "GuardrailAutomatedReasoningRuleList",
    xk3 = "GuardrailAutomatedReasoningScenario",
    uk3 = "GuardrailAutomatedReasoningSatisfiableFinding",
    Bk3 = "GuardrailAutomatedReasoningStatementList",
    mk3 = "GuardrailAutomatedReasoningStatementLogicContent",
    gk3 = "GuardrailAutomatedReasoningStatementNaturalLanguageContent",
    Fk3 = "GuardrailAutomatedReasoningStatement",
    Qk3 = "GuardrailAutomatedReasoningTranslation",
    Uk3 = "GuardrailAutomatedReasoningTranslationAmbiguousFinding",
    pk3 = "GuardrailAutomatedReasoningTooComplexFinding",
    dk3 = "GuardrailAutomatedReasoningTranslationList",
    ck3 = "GuardrailAutomatedReasoningTranslationOption",
    lk3 = "GuardrailAutomatedReasoningTranslationOptionList",
    ik3 = "GuardrailAutomatedReasoningValidFinding",
    nk3 = "GuardrailConfiguration",
    rk3 = "GuardrailContentBlock",
    ok3 = "GuardrailContentBlockList",
    ak3 = "GuardrailConverseContentBlock",
    sk3 = "GuardrailContentFilter",
    tk3 = "GuardrailContentFilterList",
    ek3 = "GuardrailContextualGroundingFilter",
    AC3 = "GuardrailContextualGroundingFilters",
    KC3 = "GuardrailContextualGroundingPolicyAssessment",
    qC3 = "GuardrailConverseImageBlock",
    YC3 = "GuardrailConverseImageSource",
    zC3 = "GuardrailContentPolicyAssessment",
    wC3 = "GuardrailConverseTextBlock",
    HC3 = "GuardrailCustomWord",
    JC3 = "GuardrailCustomWordList",
    OC3 = "GuardrailCoverage",
    XC3 = "GuardrailImageBlock",
    $C3 = "GuardrailImageCoverage",
    _C3 = "GuardrailInvocationMetrics",
    GC3 = "GuardrailImageSource",
    ZC3 = "GuardrailManagedWord",
    WC3 = "GuardrailManagedWordList",
    DC3 = "GuardrailOutputContent",
    jC3 = "GuardrailOutputContentList",
    MC3 = "GuardrailPiiEntityFilter",
    PC3 = "GuardrailPiiEntityFilterList",
    VC3 = "GuardrailRegexFilter",
    fC3 = "GuardrailRegexFilterList",
    NC3 = "GuardrailStreamConfiguration",
    TC3 = "GuardrailSensitiveInformationPolicyAssessment",
    vC3 = "GuardrailTopic",
    EC3 = "GuardrailTraceAssessment",
    kC3 = "GuardrailTextBlock",
    CC3 = "GuardrailTextCharactersCoverage",
    LC3 = "GuardrailTopicList",
    RC3 = "GuardrailTopicPolicyAssessment",
    yC3 = "GuardrailUsage",
    IC3 = "GuardrailWordPolicyAssessment",
    SC3 = "ImageBlock",
    hC3 = "InferenceConfiguration",
    bC3 = "InvokeModel",
    xC3 = "InvokeModelRequest",
    uC3 = "InvokeModelResponse",
    BC3 = "InvokeModelTokensRequest",
    mC3 = "InvokeModelWithBidirectionalStream",
    gC3 = "InvokeModelWithBidirectionalStreamInput",
    FC3 = "InvokeModelWithBidirectionalStreamOutput",
    QC3 = "InvokeModelWithBidirectionalStreamRequest",
    UC3 = "InvokeModelWithBidirectionalStreamResponse",
    pC3 = "InvokeModelWithResponseStream",
    dC3 = "InvokeModelWithResponseStreamRequest",
    cC3 = "InvokeModelWithResponseStreamResponse",
    lC3 = "ImageSource",
    iC3 = "InternalServerException",
    nC3 = "ListAsyncInvokes",
    rC3 = "ListAsyncInvokesRequest",
    oC3 = "ListAsyncInvokesResponse",
    aC3 = "Message",
    sC3 = "ModelErrorException",
    tC3 = "ModelInputPayload",
    eC3 = "ModelNotReadyException",
    AL3 = "MessageStartEvent",
    KL3 = "ModelStreamErrorException",
    qL3 = "MessageStopEvent",
    YL3 = "ModelTimeoutException",
    zL3 = "Messages",
    wL3 = "PartBody",
    HL3 = "PerformanceConfiguration",
    JL3 = "PayloadPart",
    OL3 = "PromptRouterTrace",
    XL3 = "PromptVariableMap",
    $L3 = "PromptVariableValues",
    _L3 = "ReasoningContentBlock",
    GL3 = "ReasoningContentBlockDelta",
    ZL3 = "RequestMetadata",
    WL3 = "ResourceNotFoundException",
    DL3 = "ResponseStream",
    jL3 = "ReasoningTextBlock",
    ML3 = "StartAsyncInvoke",
    PL3 = "StartAsyncInvokeRequest",
    VL3 = "StartAsyncInvokeResponse",
    fL3 = "SystemContentBlocks",
    NL3 = "SystemContentBlock",
    TL3 = "S3Location",
    vL3 = "ServiceQuotaExceededException",
    EL3 = "SearchResultBlock",
    kL3 = "SearchResultContentBlock",
    CL3 = "SearchResultContentBlocks",
    LL3 = "SearchResultLocation",
    RL3 = "ServiceTier",
    yL3 = "SpecificToolChoice",
    IL3 = "SystemTool",
    SL3 = "ServiceUnavailableException",
    hL3 = "Tag",
    bL3 = "ToolConfiguration",
    xL3 = "ToolChoice",
    uL3 = "ThrottlingException",
    BL3 = "ToolInputSchema",
    mL3 = "TagList",
    gL3 = "ToolResultBlock",
    FL3 = "ToolResultBlocksDelta",
    QL3 = "ToolResultBlockDelta",
    UL3 = "ToolResultBlockStart",
    pL3 = "ToolResultContentBlocks",
    dL3 = "ToolResultContentBlock",
    cL3 = "ToolSpecification",
    lL3 = "TokenUsage",
    iL3 = "ToolUseBlock",
    nL3 = "ToolUseBlockDelta",
    rL3 = "ToolUseBlockStart",
    oL3 = "Tools",
    aL3 = "Tool",
    sL3 = "VideoBlock",
    tL3 = "ValidationException",
    eL3 = "VideoSource",
    AR3 = "WebLocation",
    KR3 = "X-Amzn-Bedrock-Accept",
    qR3 = "X-Amzn-Bedrock-Content-Type",
    N44 = "X-Amzn-Bedrock-GuardrailIdentifier",
    T44 = "X-Amzn-Bedrock-GuardrailVersion",
    H71 = "X-Amzn-Bedrock-PerformanceConfig-Latency",
    J71 = "X-Amzn-Bedrock-Service-Tier",
    v44 = "X-Amzn-Bedrock-Trace",
    Nn = "action",
    YR3 = "asyncInvokeSummaries",
    G16 = "additionalModelRequestFields",
    E44 = "additionalModelResponseFieldPaths",
    k44 = "additionalModelResponseFields",
    C44 = "actionReason",
    zR3 = "automatedReasoningPolicy",
    wR3 = "automatedReasoningPolicyUnits",
    HR3 = "automatedReasoningPolicies",
    L44 = "accept",
    JR3 = "any",
    OR3 = "assessments",
    XR3 = "auto",
    Tn = "bytes",
    R44 = "bucketOwner",
    C8A = "body",
    wx = "client",
    $R3 = "contentBlockDelta",
    Z16 = "contentBlockIndex",
    _R3 = "contentBlockStart",
    GR3 = "contentBlockStop",
    ZR3 = "citationsContent",
    WR3 = "claimsFalseScenario",
    DR3 = "contextualGroundingPolicy",
    jR3 = "contextualGroundingPolicyUnits",
    MR3 = "contentPolicy",
    PR3 = "contentPolicyImageUnits",
    VR3 = "contentPolicyUnits",
    W16 = "cachePoint",
    y44 = "contradictingRules",
    fR3 = "cacheReadInputTokens",
    D16 = "clientRequestToken",
    O71 = "contentType",
    I44 = "claimsTrueScenario",
    NR3 = "customWords",
    TR3 = "cacheWriteInputTokens",
    j16 = "chunk",
    M16 = "citations",
    vR3 = "citation",
    S44 = "claims",
    tOA = "content",
    ER3 = "context",
    h44 = "confidence",
    kR3 = "converse",
    CR3 = "delta",
    LR3 = "documentChar",
    RR3 = "documentChunk",
    P16 = "documentIndex",
    yR3 = "documentPage",
    IR3 = "differenceScenarios",
    L8A = "detected",
    SR3 = "description",
    hR3 = "domain",
    b44 = "document",
    Wk = "error",
    x44 = "endTime",
    bR3 = "enabled",
    X71 = "end",
    oLA = "format",
    u44 = "failureMessage",
    xR3 = "filterStrength",
    uR3 = "findings",
    B44 = "filters",
    m44 = "guardrail",
    g44 = "guardrailCoverage",
    F44 = "guardrailConfig",
    Q44 = "guardContent",
    aLA = "guardrailIdentifier",
    BR3 = "guardrailProcessingLatency",
    sLA = "guardrailVersion",
    U44 = "guarded",
    Hx = "http",
    Dk = "httpError",
    nX = "httpHeader",
    k8A = "httpQuery",
    V16 = "input",
    $71 = "invocationArn",
    mR3 = "inputAssessment",
    p44 = "inferenceConfig",
    gR3 = "invocationMetrics",
    FR3 = "invokedModelId",
    QR3 = "invokeModel",
    UR3 = "inputSchema",
    f16 = "internalServerException",
    d44 = "inputTokens",
    pR3 = "identifier",
    dR3 = "images",
    _71 = "image",
    cR3 = "impossible",
    lR3 = "invalid",
    c44 = "json",
    iR3 = "key",
    nR3 = "kmsKeyId",
    l44 = "location",
    i44 = "latencyMs",
    n44 = "lastModifiedTime",
    G71 = "logicWarning",
    rR3 = "latency",
    oR3 = "logic",
    _T = "message",
    r44 = "modelArn",
    R8A = "modelId",
    aR3 = "modelInput",
    sR3 = "modelOutput",
    A44 = "maxResults",
    tR3 = "messageStart",
    N16 = "modelStreamErrorException",
    eR3 = "messageStop",
    Ay3 = "maxTokens",
    o44 = "modelTimeoutException",
    Ky3 = "managedWordLists",
    Z71 = "match",
    T16 = "messages",
    a44 = "metrics",
    qy3 = "metadata",
    vn = "name",
    Yy3 = "naturalLanguage",
    $16 = "nextToken",
    zy3 = "noTranslations",
    wy3 = "outputs",
    Hy3 = "outputAssessments",
    v16 = "outputDataConfig",
    Jy3 = "originalMessage",
    Oy3 = "outputScope",
    s44 = "originalStatusCode",
    Xy3 = "outputTokens",
    $y3 = "options",
    _y3 = "output",
    t44 = "premises",
    W71 = "performanceConfig",
    D71 = "performanceConfigLatency",
    Gy3 = "piiEntities",
    e44 = "promptRouter",
    A74 = "promptVariables",
    Zy3 = "policyVersionArn",
    K74 = "qualifiers",
    Wy3 = "regex",
    q74 = "reasoningContent",
    Y74 = "redactedContent",
    z74 = "requestMetadata",
    Dy3 = "resourceName",
    jy3 = "reasoningText",
    My3 = "regexes",
    w74 = "role",
    OQ = "source",
    K44 = "sortBy",
    H74 = "sourceContent",
    q44 = "statusEquals",
    Py3 = "sensitiveInformationPolicy",
    Vy3 = "sensitiveInformationPolicyFreeUnits",
    fy3 = "sensitiveInformationPolicyUnits",
    E16 = "s3Location",
    Y44 = "sortOrder",
    Ny3 = "s3OutputDataConfig",
    Ty3 = "streamProcessingMode",
    J74 = "stopReason",
    vy3 = "searchResultIndex",
    Ey3 = "searchResultLocation",
    O74 = "searchResult",
    ky3 = "supportingRules",
    Cy3 = "stopSequences",
    X74 = "submitTime",
    z44 = "submitTimeAfter",
    w44 = "submitTimeBefore",
    En = "serviceTier",
    Ly3 = "systemTool",
    Ry3 = "s3Uri",
    k16 = "serviceUnavailableException",
    yy3 = "satisfiable",
    Iy3 = "score",
    $74 = "server",
    _74 = "signature",
    G74 = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime",
    j71 = "status",
    tLA = "start",
    Sy3 = "statements",
    hy3 = "stream",
    M71 = "streaming",
    C16 = "system",
    jk = "type",
    by3 = "translationAmbiguous",
    L16 = "toolConfig",
    xy3 = "textCharacters",
    uy3 = "toolChoice",
    By3 = "tooComplex",
    R16 = "throttlingException",
    my3 = "topicPolicy",
    gy3 = "topicPolicyUnits",
    Fy3 = "topP",
    y16 = "toolResult",
    Qy3 = "toolSpec",
    Uy3 = "totalTokens",
    I16 = "toolUse",
    P71 = "toolUseId",
    py3 = "tags",
    rX = "text",
    dy3 = "temperature",
    cy3 = "threshold",
    S16 = "title",
    Z74 = "total",
    ly3 = "tools",
    iy3 = "tool",
    ny3 = "topics",
    eOA = "trace",
    V71 = "translation",
    ry3 = "translations",
    f71 = "usage",
    oy3 = "untranslatedClaims",
    ay3 = "untranslatedPremises",
    sy3 = "uri",
    ty3 = "url",
    ey3 = "value",
    h16 = "validationException",
    AI3 = "valid",
    W74 = "video",
    KI3 = "web",
    qI3 = "wordPolicy",
    YI3 = "wordPolicyUnits",
    S1 = "com.amazonaws.bedrockruntime",
    D74 = [0, S1, ZE3, 8, 0],
    N71 = [0, S1, fE3, 8, 21],
    zI3 = [0, S1, mk3, 8, 0],
    j74 = [0, S1, gk3, 8, 0],
    wI3 = [0, S1, tC3, 8, 15],
    b16 = [0, S1, wL3, 8, 21],
    HI3 = [-3, S1, XE3, {
      [Wk]: wx,
      [Dk]: 403
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(HI3, X44);
  var JI3 = [3, S1, PE3, 0, [], []],
    OI3 = [3, S1, _E3, 0, [aLA, sLA, OQ, tOA, Oy3], [[0, 1], [0, 1], 0, [() => Xh3, 0], 0]],
    XI3 = [3, S1, GE3, 0, [f71, Nn, C44, wy3, OR3, g44], [() => T74, 0, 0, () => Wh3, [() => I74, 0], () => f74]],
    $I3 = [3, S1, jE3, 0, [Ry3, nR3, R44], [0, 0, 0]],
    _I3 = [3, S1, DE3, 0, [$71, r44, D16, j71, u44, X74, n44, x44, v16], [0, 0, 0, 0, [() => D74, 0], 5, 5, 5, () => U16]],
    GI3 = [3, S1, VE3, 0, [], []],
    ZI3 = [3, S1, NE3, 8, [Tn], [[() => b16, 0]]],
    WI3 = [3, S1, TE3, 8, [Tn], [[() => b16, 0]]],
    x16 = [3, S1, QE3, 0, [jk], [0]],
    DI3 = [3, S1, vE3, 0, [S16, OQ, H74, l44], [0, 0, () => Kh3, () => b74]],
    M74 = [3, S1, SE3, 0, [bR3], [2]],
    jI3 = [3, S1, hE3, 0, [tOA, M16], [() => eS3, () => Ah3]],
    MI3 = [3, S1, bE3, 0, [S16, OQ, H74, l44], [0, 0, () => qh3, () => b74]],
    PI3 = [3, S1, lE3, 0, [rX], [0]],
    VI3 = [-3, S1, xE3, {
      [Wk]: wx,
      [Dk]: 400
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(VI3, Z44);
  var fI3 = [3, S1, CE3, 0, [CR3, Z16], [[() => Rh3, 0], 1]],
    NI3 = [3, S1, RE3, 0, [tLA, Z16], [() => yh3, 1]],
    TI3 = [3, S1, yE3, 0, [Z16], [1]],
    vI3 = [3, S1, gE3, 0, [i44], [1]],
    EI3 = [3, S1, UE3, 0, [R8A, T16, C16, p44, L16, F44, G16, A74, E44, z74, W71, En], [[0, 1], [() => F16, 0], [() => Q16, 0], () => E74, () => m16, () => tI3, 15, [() => S74, 0], 64, [() => h74, 0], () => k71, () => C71]],
    kI3 = [3, S1, pE3, 0, [_y3, J74, f71, a44, k44, eOA, W71, En], [[() => Ih3, 0], 0, () => R74, () => vI3, 15, [() => hI3, 0], () => k71, () => C71]],
    CI3 = [3, S1, oE3, 0, [f71, a44, eOA, W71, En], [() => R74, () => LI3, [() => II3, 0], () => k71, () => C71]],
    LI3 = [3, S1, rE3, 0, [i44], [1]],
    RI3 = [3, S1, sE3, 0, [R8A, T16, C16, p44, L16, F44, G16, A74, E44, z74, W71, En], [[0, 1], [() => F16, 0], [() => Q16, 0], () => E74, () => m16, () => WS3, 15, [() => S74, 0], 64, [() => h74, 0], () => k71, () => C71]],
    yI3 = [3, S1, tE3, 0, [hy3], [[() => Sh3, 16]]],
    II3 = [3, S1, eE3, 0, [m44, e44], [[() => N74, 0], () => C74]],
    SI3 = [3, S1, qk3, 0, [T16, C16, L16, G16], [[() => F16, 0], [() => Q16, 0], () => m16, 15]],
    hI3 = [3, S1, Ak3, 0, [m44, e44], [[() => N74, 0], () => C74]],
    bI3 = [3, S1, Yk3, 0, [R8A, V16], [[0, 1], [() => hh3, 0]]],
    xI3 = [3, S1, zk3, 0, [d44], [1]],
    P74 = [3, S1, Ok3, 0, [oLA, vn, OQ, ER3, M16], [0, 0, () => xh3, 0, () => M74]],
    uI3 = [3, S1, _k3, 0, [P16, tLA, X71], [1, 1, 1]],
    BI3 = [3, S1, Gk3, 0, [P16, tLA, X71], [1, 1, 1]],
    mI3 = [3, S1, Zk3, 0, [P16, tLA, X71], [1, 1, 1]],
    gI3 = [3, S1, Mk3, 0, [$71], [[0, 1]]],
    FI3 = [3, S1, Pk3, 0, [$71, r44, D16, j71, u44, X74, n44, x44, v16], [0, 0, 0, 0, [() => D74, 0], 5, 5, 5, () => U16]],
    V74 = [3, S1, Dk3, 0, [my3, MR3, qI3, Py3, DR3, zR3, gR3], [() => PS3, () => AS3, () => VS3, () => ZS3, () => qS3, [() => cI3, 0], () => OS3]],
    QI3 = [3, S1, kk3, 0, [V71, y44, G71], [[() => eLA, 0], () => g16, [() => T71, 0]]],
    UI3 = [3, S1, Lk3, 0, [rX], [[() => j74, 0]]],
    pI3 = [3, S1, Ck3, 0, [V71, y44, G71], [[() => eLA, 0], () => g16, [() => T71, 0]]],
    T71 = [3, S1, yk3, 0, [jk, t44, S44], [0, [() => rLA, 0], [() => rLA, 0]]],
    dI3 = [3, S1, Ik3, 0, [], []],
    cI3 = [3, S1, Sk3, 0, [uR3], [[() => Hh3, 0]]],
    lI3 = [3, S1, hk3, 0, [pR3, Zy3], [0, 0]],
    iI3 = [3, S1, uk3, 0, [V71, I44, WR3, G71], [[() => eLA, 0], [() => z71, 0], [() => z71, 0], [() => T71, 0]]],
    z71 = [3, S1, xk3, 0, [Sy3], [[() => rLA, 0]]],
    nI3 = [3, S1, Fk3, 0, [oR3, Yy3], [[() => zI3, 0], [() => j74, 0]]],
    rI3 = [3, S1, pk3, 0, [], []],
    eLA = [3, S1, Qk3, 0, [t44, S44, ay3, oy3, h44], [[() => rLA, 0], [() => rLA, 0], [() => H44, 0], [() => H44, 0], 1]],
    oI3 = [3, S1, Uk3, 0, [$y3, IR3], [[() => Oh3, 0], [() => wh3, 0]]],
    aI3 = [3, S1, ck3, 0, [ry3], [[() => Jh3, 0]]],
    sI3 = [3, S1, ik3, 0, [V71, I44, ky3, G71], [[() => eLA, 0], [() => z71, 0], () => g16, [() => T71, 0]]],
    tI3 = [3, S1, nk3, 0, [aLA, sLA, eOA], [0, 0, 0]],
    eI3 = [3, S1, sk3, 0, [jk, h44, xR3, Nn, L8A], [0, 0, 0, 0, 2]],
    AS3 = [3, S1, zC3, 0, [B44], [() => $h3]],
    KS3 = [3, S1, ek3, 0, [jk, cy3, Iy3, Nn, L8A], [0, 1, 1, 0, 2]],
    qS3 = [3, S1, KC3, 0, [B44], [() => _h3]],
    YS3 = [3, S1, qC3, 8, [oLA, OQ], [0, [() => mh3, 0]]],
    zS3 = [3, S1, wC3, 0, [rX, K74], [0, 64]],
    f74 = [3, S1, OC3, 0, [xy3, dR3], [() => jS3, () => JS3]],
    wS3 = [3, S1, HC3, 0, [Z71, Nn, L8A], [0, 0, 2]],
    HS3 = [3, S1, XC3, 8, [oLA, OQ], [0, [() => gh3, 0]]],
    JS3 = [3, S1, $C3, 0, [U44, Z74], [1, 1]],
    OS3 = [3, S1, _C3, 0, [BR3, f71, g44], [1, () => T74, () => f74]],
    XS3 = [3, S1, ZC3, 0, [Z71, jk, Nn, L8A], [0, 0, 0, 2]],
    $S3 = [3, S1, DC3, 0, [rX], [0]],
    _S3 = [3, S1, MC3, 0, [Z71, jk, Nn, L8A], [0, 0, 0, 2]],
    GS3 = [3, S1, VC3, 0, [vn, Z71, Wy3, Nn, L8A], [0, 0, 0, 0, 2]],
    ZS3 = [3, S1, TC3, 0, [Gy3, My3], [() => Dh3, () => jh3]],
    WS3 = [3, S1, NC3, 0, [aLA, sLA, eOA, Ty3], [0, 0, 0, 0]],
    DS3 = [3, S1, kC3, 0, [rX, K74], [0, 64]],
    jS3 = [3, S1, CC3, 0, [U44, Z74], [1, 1]],
    MS3 = [3, S1, vC3, 0, [vn, jk, Nn, L8A], [0, 0, 0, 2]],
    PS3 = [3, S1, RC3, 0, [ny3], [() => Mh3]],
    N74 = [3, S1, EC3, 0, [sR3, mR3, Hy3, C44], [64, [() => Eh3, 0], [() => vh3, 0], 0]],
    T74 = [3, S1, yC3, 0, [gy3, VR3, YI3, fy3, Vy3, jR3, PR3, wR3, HR3], [1, 1, 1, 1, 1, 1, 1, 1, 1]],
    VS3 = [3, S1, IC3, 0, [NR3, Ky3], [() => Gh3, () => Zh3]],
    v74 = [3, S1, SC3, 0, [oLA, OQ], [0, () => Fh3]],
    E74 = [3, S1, hC3, 0, [Ay3, dy3, Fy3, Cy3], [1, 1, 1, 64]],
    v71 = [-3, S1, iC3, {
      [Wk]: $74,
      [Dk]: 500
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(v71, $44);
  var fS3 = [3, S1, xC3, 0, [C8A, O71, L44, R8A, eOA, aLA, sLA, D71, En], [[() => N71, 16], [0, {
      [nX]: _16
    }], [0, {
      [nX]: OE3
    }], [0, 1], [0, {
      [nX]: v44
    }], [0, {
      [nX]: N44
    }], [0, {
      [nX]: T44
    }], [0, {
      [nX]: H71
    }], [0, {
      [nX]: J71
    }]]],
    NS3 = [3, S1, uC3, 0, [C8A, O71, D71, En], [[() => N71, 16], [0, {
      [nX]: _16
    }], [0, {
      [nX]: H71
    }], [0, {
      [nX]: J71
    }]]],
    TS3 = [3, S1, BC3, 0, [C8A], [[() => N71, 0]]],
    vS3 = [3, S1, QC3, 0, [R8A, C8A], [[0, 1], [() => Qh3, 16]]],
    ES3 = [3, S1, UC3, 0, [C8A], [[() => Uh3, 16]]],
    kS3 = [3, S1, dC3, 0, [C8A, O71, L44, R8A, eOA, aLA, sLA, D71, En], [[() => N71, 16], [0, {
      [nX]: _16
    }], [0, {
      [nX]: KR3
    }], [0, 1], [0, {
      [nX]: v44
    }], [0, {
      [nX]: N44
    }], [0, {
      [nX]: T44
    }], [0, {
      [nX]: H71
    }], [0, {
      [nX]: J71
    }]]],
    CS3 = [3, S1, cC3, 0, [C8A, O71, D71, En], [[() => lh3, 16], [0, {
      [nX]: qR3
    }], [0, {
      [nX]: H71
    }], [0, {
      [nX]: J71
    }]]],
    LS3 = [3, S1, rC3, 0, [z44, w44, q44, A44, $16, K44, Y44], [[5, {
      [k8A]: z44
    }], [5, {
      [k8A]: w44
    }], [0, {
      [k8A]: q44
    }], [1, {
      [k8A]: A44
    }], [0, {
      [k8A]: $16
    }], [0, {
      [k8A]: K44
    }], [0, {
      [k8A]: Y44
    }]]],
    RS3 = [3, S1, oC3, 0, [$16, YR3], [0, [() => tS3, 0]]],
    k74 = [3, S1, aC3, 0, [w74, tOA], [0, [() => Yh3, 0]]],
    yS3 = [3, S1, AL3, 0, [w74], [0]],
    IS3 = [3, S1, qL3, 0, [J74, k44], [0, 15]],
    SS3 = [-3, S1, sC3, {
      [Wk]: wx,
      [Dk]: 424
    }, [_T, s44, Dy3], [0, 1, 0]];
  LV.TypeRegistry.for(S1).registerError(SS3, M44);
  var hS3 = [-3, S1, eC3, {
    [Wk]: wx,
    [Dk]: 429
  }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(hS3, P44);
  var E71 = [-3, S1, KL3, {
    [Wk]: wx,
    [Dk]: 424
  }, [_T, s44, Jy3], [0, 1, 0]];
  LV.TypeRegistry.for(S1).registerError(E71, f44);
  var u16 = [-3, S1, YL3, {
    [Wk]: wx,
    [Dk]: 408
  }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(u16, V44);
  var bS3 = [3, S1, JL3, 8, [Tn], [[() => b16, 0]]],
    k71 = [3, S1, HL3, 0, [rR3], [0]],
    C74 = [3, S1, OL3, 0, [FR3], [0]],
    xS3 = [3, S1, jL3, 8, [rX, _74], [0, 0]],
    uS3 = [-3, S1, WL3, {
      [Wk]: wx,
      [Dk]: 404
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(uS3, W44);
  var B16 = [3, S1, TL3, 0, [sy3, R44], [0, 0]],
    L74 = [3, S1, EL3, 0, [OQ, S16, tOA, M16], [0, 0, () => Ph3, () => M74]],
    BS3 = [3, S1, kL3, 0, [rX], [0]],
    mS3 = [3, S1, LL3, 0, [vy3, tLA, X71], [1, 1, 1]],
    gS3 = [-3, S1, vL3, {
      [Wk]: wx,
      [Dk]: 400
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(gS3, D44);
  var C71 = [3, S1, RL3, 0, [jk], [0]],
    L71 = [-3, S1, SL3, {
      [Wk]: $74,
      [Dk]: 503
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(L71, j44);
  var FS3 = [3, S1, yL3, 0, [vn], [0]],
    QS3 = [3, S1, PL3, 0, [D16, R8A, aR3, v16, py3], [[0, 4], 0, [() => wI3, 0], () => U16, () => Vh3]],
    US3 = [3, S1, VL3, 0, [$71], [0]],
    pS3 = [3, S1, IL3, 0, [vn], [0]],
    dS3 = [3, S1, hL3, 0, [iR3, ey3], [0, 0]],
    R71 = [-3, S1, uL3, {
      [Wk]: wx,
      [Dk]: 429
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(R71, _44);
  var R74 = [3, S1, lL3, 0, [d44, Xy3, Uy3, fR3, TR3], [1, 1, 1, 1, 1]],
    m16 = [3, S1, bL3, 0, [ly3, uy3], [() => Th3, () => rh3]],
    cS3 = [3, S1, gL3, 0, [P71, tOA, j71, jk], [0, () => Nh3, 0, 0]],
    lS3 = [3, S1, UL3, 0, [P71, jk, j71], [0, 0, 0]],
    iS3 = [3, S1, cL3, 0, [vn, SR3, UR3], [0, 0, () => oh3]],
    nS3 = [3, S1, iL3, 0, [P71, vn, V16, jk], [0, 0, 15, 0]],
    rS3 = [3, S1, nL3, 0, [V16], [0]],
    oS3 = [3, S1, rL3, 0, [P71, vn, jk], [0, 0, 0]],
    y71 = [-3, S1, tL3, {
      [Wk]: wx,
      [Dk]: 400
    }, [_T], [0]];
  LV.TypeRegistry.for(S1).registerError(y71, G44);
  var y74 = [3, S1, sL3, 0, [oLA, OQ], [0, () => th3]],
    aS3 = [3, S1, AR3, 0, [ty3, hR3], [0, 0]],
    sS3 = [-3, G74, "BedrockRuntimeServiceException", 0, [], []];
  LV.TypeRegistry.for(G74).registerError(sS3, RV);
  var tS3 = [1, S1, ME3, 0, [() => _I3, 0]],
    eS3 = [1, S1, BE3, 0, () => kh3],
    Ah3 = [1, S1, Hk3, 0, () => DI3],
    Kh3 = [1, S1, iE3, 0, () => Ch3],
    qh3 = [1, S1, nE3, 0, () => PI3],
    Yh3 = [1, S1, EE3, 0, [() => Lh3, 0]],
    zh3 = [1, S1, Xk3, 0, () => bh3],
    I74 = [1, S1, Vk3, 0, [() => V74, 0]],
    wh3 = [1, S1, Tk3, 0, [() => z71, 0]],
    Hh3 = [1, S1, Ek3, 0, [() => uh3, 0]],
    H44 = [1, S1, Rk3, 0, [() => UI3, 0]],
    g16 = [1, S1, bk3, 0, () => lI3],
    rLA = [1, S1, Bk3, 0, [() => nI3, 0]],
    Jh3 = [1, S1, dk3, 0, [() => eLA, 0]],
    Oh3 = [1, S1, lk3, 0, [() => aI3, 0]],
    Xh3 = [1, S1, ok3, 0, [() => Bh3, 0]],
    $h3 = [1, S1, tk3, 0, () => eI3],
    _h3 = [1, S1, AC3, 0, () => KS3],
    Gh3 = [1, S1, JC3, 0, () => wS3],
    Zh3 = [1, S1, WC3, 0, () => XS3],
    Wh3 = [1, S1, jC3, 0, () => $S3],
    Dh3 = [1, S1, PC3, 0, () => _S3],
    jh3 = [1, S1, fC3, 0, () => GS3],
    Mh3 = [1, S1, LC3, 0, () => MS3],
    F16 = [1, S1, zL3, 0, [() => k74, 0]],
    Ph3 = [1, S1, CL3, 0, () => BS3],
    Q16 = [1, S1, fL3, 0, [() => ih3, 0]],
    Vh3 = [1, S1, mL3, 0, () => dS3],
    fh3 = [1, S1, FL3, 0, () => ah3],
    Nh3 = [1, S1, pL3, 0, () => sh3],
    Th3 = [1, S1, oL3, 0, () => nh3],
    vh3 = [2, S1, fk3, 0, [0, 0], [() => I74, 0]],
    Eh3 = [2, S1, Nk3, 0, [0, 0], [() => V74, 0]],
    S74 = [2, S1, XL3, 8, 0, () => ph3],
    h74 = [2, S1, ZL3, 8, 0, 0],
    U16 = [3, S1, WE3, 0, [Ny3], [() => $I3]],
    kh3 = [3, S1, uE3, 0, [rX], [0]],
    b74 = [3, S1, mE3, 0, [KI3, LR3, yR3, RR3, Ey3], [() => aS3, () => uI3, () => mI3, () => BI3, () => mS3]],
    Ch3 = [3, S1, cE3, 0, [rX], [0]],
    Lh3 = [3, S1, IE3, 0, [rX, _71, b44, W74, I16, y16, Q44, W16, q74, ZR3, O74], [0, () => v74, () => P74, () => y74, () => nS3, () => cS3, [() => x74, 0], () => x16, [() => dh3, 0], () => jI3, () => L74]],
    Rh3 = [3, S1, kE3, 0, [rX, I16, y16, q74, vR3], [0, () => rS3, () => fh3, [() => ch3, 0], () => MI3]],
    yh3 = [3, S1, LE3, 0, [I16, y16], [() => oS3, () => lS3]],
    Ih3 = [3, S1, FE3, 0, [_T], [[() => k74, 0]]],
    Sh3 = [3, S1, aE3, {
      [M71]: 1
    }, [tR3, _R3, $R3, GR3, eR3, qy3, f16, N16, h16, R16, k16], [() => yS3, () => NI3, [() => fI3, 0], () => TI3, () => IS3, [() => CI3, 0], [() => v71, 0], [() => E71, 0], [() => y71, 0], [() => R71, 0], [() => L71, 0]]],
    hh3 = [3, S1, Kk3, 0, [QR3, kR3], [[() => TS3, 0], [() => SI3, 0]]],
    bh3 = [3, S1, $k3, 0, [rX], [0]],
    xh3 = [3, S1, Wk3, 0, [Tn, E16, rX, tOA], [21, () => B16, 0, () => zh3]],
    uh3 = [3, S1, vk3, 0, [AI3, lR3, yy3, cR3, by3, By3, zy3], [[() => sI3, 0], [() => pI3, 0], [() => iI3, 0], [() => QI3, 0], [() => oI3, 0], () => rI3, () => dI3]],
    Bh3 = [3, S1, rk3, 0, [rX, _71], [() => DS3, [() => HS3, 0]]],
    x74 = [3, S1, ak3, 0, [rX, _71], [() => zS3, [() => YS3, 0]]],
    mh3 = [3, S1, YC3, 8, [Tn], [21]],
    gh3 = [3, S1, GC3, 8, [Tn], [21]],
    Fh3 = [3, S1, lC3, 0, [Tn, E16], [21, () => B16]],
    Qh3 = [3, S1, gC3, {
      [M71]: 1
    }, [j16], [[() => ZI3, 0]]],
    Uh3 = [3, S1, FC3, {
      [M71]: 1
    }, [j16, f16, N16, h16, R16, o44, k16], [[() => WI3, 0], [() => v71, 0], [() => E71, 0], [() => y71, 0], [() => R71, 0], [() => u16, 0], [() => L71, 0]]],
    ph3 = [3, S1, $L3, 0, [rX], [0]],
    dh3 = [3, S1, _L3, 8, [jy3, Y74], [[() => xS3, 0], 21]],
    ch3 = [3, S1, GL3, 8, [rX, Y74, _74], [0, 21, 0]],
    lh3 = [3, S1, DL3, {
      [M71]: 1
    }, [j16, f16, N16, h16, R16, o44, k16], [[() => bS3, 0], [() => v71, 0], [() => E71, 0], [() => y71, 0], [() => R71, 0], [() => u16, 0], [() => L71, 0]]],
    ih3 = [3, S1, NL3, 0, [rX, Q44, W16], [0, [() => x74, 0], () => x16]],
    nh3 = [3, S1, aL3, 0, [Qy3, Ly3, W16], [() => iS3, () => pS3, () => x16]],
    rh3 = [3, S1, xL3, 0, [XR3, JR3, iy3], [() => GI3, () => JI3, () => FS3]],
    oh3 = [3, S1, BL3, 0, [c44], [15]],
    ah3 = [3, S1, QL3, 0, [rX], [0]],
    sh3 = [3, S1, dL3, 0, [c44, rX, _71, b44, W74, O74], [15, 0, () => v74, () => P74, () => y74, () => L74]],
    th3 = [3, S1, eL3, 0, [Tn, E16], [21, () => B16]],
    eh3 = [9, S1, $E3, {
      [Hx]: ["POST", "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply", 200]
    }, () => OI3, () => XI3],
    Ab3 = [9, S1, Jk3, {
      [Hx]: ["POST", "/model/{modelId}/converse", 200]
    }, () => EI3, () => kI3],
    Kb3 = [9, S1, dE3, {
      [Hx]: ["POST", "/model/{modelId}/converse-stream", 200]
    }, () => RI3, () => yI3],
    qb3 = [9, S1, wk3, {
      [Hx]: ["POST", "/model/{modelId}/count-tokens", 200]
    }, () => bI3, () => xI3],
    Yb3 = [9, S1, jk3, {
      [Hx]: ["GET", "/async-invoke/{invocationArn}", 200]
    }, () => gI3, () => FI3],
    zb3 = [9, S1, bC3, {
      [Hx]: ["POST", "/model/{modelId}/invoke", 200]
    }, () => fS3, () => NS3],
    wb3 = [9, S1, mC3, {
      [Hx]: ["POST", "/model/{modelId}/invoke-with-bidirectional-stream", 200]
    }, () => vS3, () => ES3],
    Hb3 = [9, S1, pC3, {
      [Hx]: ["POST", "/model/{modelId}/invoke-with-response-stream", 200]
    }, () => kS3, () => CS3],
    Jb3 = [9, S1, nC3, {
      [Hx]: ["GET", "/async-invoke", 200]
    }, () => LS3, () => RS3],
    Ob3 = [9, S1, ML3, {
      [Hx]: ["POST", "/async-invoke", 200]
    }, () => QS3, () => US3];
  class p16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ApplyGuardrail", {}).n("BedrockRuntimeClient", "ApplyGuardrailCommand").sc(eh3).build() {}
  class d16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "Converse", {}).n("BedrockRuntimeClient", "ConverseCommand").sc(Ab3).build() {}
  class c16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ConverseStream", {
    eventStream: {
      output: !0
    }
  }).n("BedrockRuntimeClient", "ConverseStreamCommand").sc(Kb3).build() {}
  class l16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(qb3).build() {}
  class i16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "GetAsyncInvoke", {}).n("BedrockRuntimeClient", "GetAsyncInvokeCommand").sc(Yb3).build() {}
  class n16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "InvokeModel", {}).n("BedrockRuntimeClient", "InvokeModelCommand").sc(zb3).build() {}
  class r16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions()), J44.getEventStreamPlugin(q), O44.getWebSocketPlugin(q, {
      headerPrefix: "x-amz-bedrock-"
    })];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
    eventStream: {
      input: !0,
      output: !0
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").sc(wb3).build() {}
  class o16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
    eventStream: {
      output: !0
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").sc(Hb3).build() {}
  class I71 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ListAsyncInvokes", {}).n("BedrockRuntimeClient", "ListAsyncInvokesCommand").sc(Jb3).build() {}
  class a16 extends IZ.Command.classBuilder().ep(zx).m(function (A, K, q, Y) {
    return [Gy.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "StartAsyncInvoke", {}).n("BedrockRuntimeClient", "StartAsyncInvokeCommand").sc(Ob3).build() {}
  var Xb3 = {
    ApplyGuardrailCommand: p16,
    ConverseCommand: d16,
    ConverseStreamCommand: c16,
    CountTokensCommand: l16,
    GetAsyncInvokeCommand: i16,
    InvokeModelCommand: n16,
    InvokeModelWithBidirectionalStreamCommand: r16,
    InvokeModelWithResponseStreamCommand: o16,
    ListAsyncInvokesCommand: I71,
    StartAsyncInvokeCommand: a16
  };
  class s16 extends w71 {}
  IZ.createAggregatedClient(Xb3, s16);
  var $b3 = Y71.createPaginator(w71, I71, "nextToken", "nextToken", "maxResults"),
    _b3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress"
    },
    Gb3 = {
      SUBMISSION_TIME: "SubmissionTime"
    },
    Zb3 = {
      ASCENDING: "Ascending",
      DESCENDING: "Descending"
    },
    Wb3 = {
      JPEG: "jpeg",
      PNG: "png"
    },
    Db3 = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query"
    },
    jb3 = {
      FULL: "FULL",
      INTERVENTIONS: "INTERVENTIONS"
    },
    Mb3 = {
      INPUT: "INPUT",
      OUTPUT: "OUTPUT"
    },
    Pb3 = {
      GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
      NONE: "NONE"
    },
    Vb3 = {
      ALWAYS_FALSE: "ALWAYS_FALSE",
      ALWAYS_TRUE: "ALWAYS_TRUE"
    },
    fb3 = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    },
    Nb3 = {
      HIGH: "HIGH",
      LOW: "LOW",
      MEDIUM: "MEDIUM",
      NONE: "NONE"
    },
    Tb3 = {
      HIGH: "HIGH",
      LOW: "LOW",
      MEDIUM: "MEDIUM",
      NONE: "NONE"
    },
    vb3 = {
      HATE: "HATE",
      INSULTS: "INSULTS",
      MISCONDUCT: "MISCONDUCT",
      PROMPT_ATTACK: "PROMPT_ATTACK",
      SEXUAL: "SEXUAL",
      VIOLENCE: "VIOLENCE"
    },
    Eb3 = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    },
    kb3 = {
      GROUNDING: "GROUNDING",
      RELEVANCE: "RELEVANCE"
    },
    Cb3 = {
      ANONYMIZED: "ANONYMIZED",
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    },
    Lb3 = {
      ADDRESS: "ADDRESS",
      AGE: "AGE",
      AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
      AWS_SECRET_KEY: "AWS_SECRET_KEY",
      CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
      CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
      CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
      CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
      CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
      DRIVER_ID: "DRIVER_ID",
      EMAIL: "EMAIL",
      INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
      IP_ADDRESS: "IP_ADDRESS",
      LICENSE_PLATE: "LICENSE_PLATE",
      MAC_ADDRESS: "MAC_ADDRESS",
      NAME: "NAME",
      PASSWORD: "PASSWORD",
      PHONE: "PHONE",
      PIN: "PIN",
      SWIFT_CODE: "SWIFT_CODE",
      UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
      UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
      UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
      URL: "URL",
      USERNAME: "USERNAME",
      US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
      US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
      US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
      US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
      US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
      VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
    },
    Rb3 = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    },
    yb3 = {
      DENY: "DENY"
    },
    Ib3 = {
      BLOCKED: "BLOCKED",
      NONE: "NONE"
    },
    Sb3 = {
      PROFANITY: "PROFANITY"
    },
    hb3 = {
      DISABLED: "disabled",
      ENABLED: "enabled",
      ENABLED_FULL: "enabled_full"
    },
    bb3 = {
      DEFAULT: "default"
    },
    xb3 = {
      CSV: "csv",
      DOC: "doc",
      DOCX: "docx",
      HTML: "html",
      MD: "md",
      PDF: "pdf",
      TXT: "txt",
      XLS: "xls",
      XLSX: "xlsx"
    },
    ub3 = {
      JPEG: "jpeg",
      PNG: "png"
    },
    Bb3 = {
      GROUNDING_SOURCE: "grounding_source",
      GUARD_CONTENT: "guard_content",
      QUERY: "query"
    },
    mb3 = {
      GIF: "gif",
      JPEG: "jpeg",
      PNG: "png",
      WEBP: "webp"
    },
    gb3 = {
      FLV: "flv",
      MKV: "mkv",
      MOV: "mov",
      MP4: "mp4",
      MPEG: "mpeg",
      MPG: "mpg",
      THREE_GP: "three_gp",
      WEBM: "webm",
      WMV: "wmv"
    },
    Fb3 = {
      ERROR: "error",
      SUCCESS: "success"
    },
    Qb3 = {
      SERVER_TOOL_USE: "server_tool_use"
    },
    Ub3 = {
      ASSISTANT: "assistant",
      USER: "user"
    },
    pb3 = {
      OPTIMIZED: "optimized",
      STANDARD: "standard"
    },
    db3 = {
      DEFAULT: "default",
      FLEX: "flex",
      PRIORITY: "priority"
    },
    cb3 = {
      CONTENT_FILTERED: "content_filtered",
      END_TURN: "end_turn",
      GUARDRAIL_INTERVENED: "guardrail_intervened",
      MAX_TOKENS: "max_tokens",
      MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
      STOP_SEQUENCE: "stop_sequence",
      TOOL_USE: "tool_use"
    },
    lb3 = {
      ASYNC: "async",
      SYNC: "sync"
    },
    ib3 = {
      DISABLED: "DISABLED",
      ENABLED: "ENABLED",
      ENABLED_FULL: "ENABLED_FULL"
    };
  Object.defineProperty(t16, "$Command", {
    enumerable: !0,
    get: function () {
      return IZ.Command;
    }
  });
  Object.defineProperty(t16, "__Client", {
    enumerable: !0,
    get: function () {
      return IZ.Client;
    }
  });
  t16.AccessDeniedException = X44;
  t16.ApplyGuardrailCommand = p16;
  t16.AsyncInvokeStatus = _b3;
  t16.BedrockRuntime = s16;
  t16.BedrockRuntimeClient = w71;
  t16.BedrockRuntimeServiceException = RV;
  t16.CachePointType = bb3;
  t16.ConflictException = Z44;
  t16.ConversationRole = Ub3;
  t16.ConverseCommand = d16;
  t16.ConverseStreamCommand = c16;
  t16.CountTokensCommand = l16;
  t16.DocumentFormat = xb3;
  t16.GetAsyncInvokeCommand = i16;
  t16.GuardrailAction = Pb3;
  t16.GuardrailAutomatedReasoningLogicWarningType = Vb3;
  t16.GuardrailContentFilterConfidence = Nb3;
  t16.GuardrailContentFilterStrength = Tb3;
  t16.GuardrailContentFilterType = vb3;
  t16.GuardrailContentPolicyAction = fb3;
  t16.GuardrailContentQualifier = Db3;
  t16.GuardrailContentSource = Mb3;
  t16.GuardrailContextualGroundingFilterType = kb3;
  t16.GuardrailContextualGroundingPolicyAction = Eb3;
  t16.GuardrailConverseContentQualifier = Bb3;
  t16.GuardrailConverseImageFormat = ub3;
  t16.GuardrailImageFormat = Wb3;
  t16.GuardrailManagedWordType = Sb3;
  t16.GuardrailOutputScope = jb3;
  t16.GuardrailPiiEntityType = Lb3;
  t16.GuardrailSensitiveInformationPolicyAction = Cb3;
  t16.GuardrailStreamProcessingMode = lb3;
  t16.GuardrailTopicPolicyAction = Rb3;
  t16.GuardrailTopicType = yb3;
  t16.GuardrailTrace = hb3;
  t16.GuardrailWordPolicyAction = Ib3;
  t16.ImageFormat = mb3;
  t16.InternalServerException = $44;
  t16.InvokeModelCommand = n16;
  t16.InvokeModelWithBidirectionalStreamCommand = r16;
  t16.InvokeModelWithResponseStreamCommand = o16;
  t16.ListAsyncInvokesCommand = I71;
  t16.ModelErrorException = M44;
  t16.ModelNotReadyException = P44;
  t16.ModelStreamErrorException = f44;
  t16.ModelTimeoutException = V44;
  t16.PerformanceConfigLatency = pb3;
  t16.ResourceNotFoundException = W44;
  t16.ServiceQuotaExceededException = D44;
  t16.ServiceTierType = db3;
  t16.ServiceUnavailableException = j44;
  t16.SortAsyncInvocationBy = Gb3;
  t16.SortOrder = Zb3;
  t16.StartAsyncInvokeCommand = a16;
  t16.StopReason = cb3;
  t16.ThrottlingException = _44;
  t16.ToolResultStatus = Fb3;
  t16.ToolUseType = Qb3;
  t16.Trace = ib3;
  t16.ValidationException = G44;
  t16.VideoFormat = gb3;
  t16.paginateListAsyncInvokes = $b3;
});

// Register to shared state
__$.S71 = S71;
