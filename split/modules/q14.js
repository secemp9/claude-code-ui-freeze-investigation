// Module: q14
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q14 = v(XA6 => {
  var Fs8 = __$.BF(),
    hr5 = __$.mF(),
    br5 = __$.gF(),
    Qs8 = __$.Ub(),
    xr5 = __$.l0(),
    cX = __$.Gz(),
    Jk = __$.DJ(),
    ur5 = __$.rF(),
    i8 = __$.qy(),
    Us8 = __$.kZ(),
    g8 = __$.oCA(),
    ps8 = __$.er1(),
    Br5 = __$.xs8(),
    ds8 = __$.Yy(),
    cs8 = __$.gs8(),
    mr5 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "bedrock"
      });
    },
    o8 = {
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
    gr5 = A => {
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
    Fr5 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials(),
        token: A.token()
      };
    },
    Qr5 = (A, K) => {
      let q = Object.assign(ds8.getAwsRegionExtensionConfiguration(A), g8.getDefaultExtensionConfiguration(A), cs8.getHttpHandlerExtensionConfiguration(A), gr5(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, ds8.resolveAwsRegionExtensionConfiguration(q), g8.resolveDefaultRuntimeConfig(q), cs8.resolveHttpHandlerRuntimeConfig(q), Fr5(q));
    };
  class iX extends g8.Client {
    config;
    constructor(...[A]) {
      let K = Br5.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = mr5(K),
        Y = Qs8.resolveUserAgentConfig(q),
        z = Us8.resolveRetryConfig(Y),
        w = xr5.resolveRegionConfig(z),
        H = Fs8.resolveHostHeaderConfig(w),
        J = i8.resolveEndpointConfig(H),
        O = ps8.resolveHttpAuthSchemeConfig(J),
        X = Qr5(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use(Jk.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Qs8.getUserAgentPlugin(this.config)), this.middlewareStack.use(Us8.getRetryPlugin(this.config)), this.middlewareStack.use(ur5.getContentLengthPlugin(this.config)), this.middlewareStack.use(Fs8.getHostHeaderPlugin(this.config)), this.middlewareStack.use(hr5.getLoggerPlugin(this.config)), this.middlewareStack.use(br5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(cX.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: ps8.defaultBedrockHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new cX.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials,
          "smithy.api#httpBearerAuth": $.token
        })
      })), this.middlewareStack.use(cX.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var Ok = class A extends g8.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Gt8 = class A extends Ok {
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
    Zt8 = class A extends Ok {
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
    Wt8 = class A extends Ok {
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
    Dt8 = class A extends Ok {
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
    jt8 = class A extends Ok {
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
    Mt8 = class A extends Ok {
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
    Pt8 = class A extends Ok {
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
    Vt8 = class A extends Ok {
      name = "TooManyTagsException";
      $fault = "client";
      resourceName;
      constructor(K) {
        super({
          name: "TooManyTagsException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.resourceName = K.resourceName;
      }
    },
    ft8 = class A extends Ok {
      name = "ResourceInUseException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ResourceInUseException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Nt8 = class A extends Ok {
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
    Ur5 = "AgreementAvailability",
    pr5 = "AccessDeniedException",
    dr5 = "AutomatedEvaluationConfig",
    cr5 = "AutomatedEvaluationCustomMetrics",
    lr5 = "AutomatedEvaluationCustomMetricConfig",
    ir5 = "AutomatedEvaluationCustomMetricSource",
    nr5 = "AutomatedReasoningCheckDifferenceScenarioList",
    rr5 = "AutomatedReasoningCheckFinding",
    or5 = "AutomatedReasoningCheckFindingList",
    ar5 = "AutomatedReasoningCheckImpossibleFinding",
    sr5 = "AutomatedReasoningCheckInvalidFinding",
    tr5 = "AutomatedReasoningCheckInputTextReference",
    er5 = "AutomatedReasoningCheckInputTextReferenceList",
    Ao5 = "AutomatedReasoningCheckLogicWarning",
    Ko5 = "AutomatedReasoningCheckNoTranslationsFinding",
    qo5 = "AutomatedReasoningCheckRule",
    Yo5 = "AutomatedReasoningCheckRuleList",
    zo5 = "AutomatedReasoningCheckScenario",
    wo5 = "AutomatedReasoningCheckSatisfiableFinding",
    Ho5 = "AutomatedReasoningCheckTranslation",
    Jo5 = "AutomatedReasoningCheckTranslationAmbiguousFinding",
    Oo5 = "AutomatedReasoningCheckTooComplexFinding",
    Xo5 = "AutomatedReasoningCheckTranslationList",
    $o5 = "AutomatedReasoningCheckTranslationOption",
    _o5 = "AutomatedReasoningCheckTranslationOptionList",
    Go5 = "AutomatedReasoningCheckValidFinding",
    Zo5 = "AutomatedReasoningLogicStatement",
    Wo5 = "AutomatedReasoningLogicStatementContent",
    Do5 = "AutomatedReasoningLogicStatementList",
    jo5 = "AutomatedReasoningNaturalLanguageStatementContent",
    Mo5 = "AutomatedReasoningPolicyAnnotation",
    Po5 = "AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage",
    Vo5 = "AutomatedReasoningPolicyAnnotationIngestContent",
    fo5 = "AutomatedReasoningPolicyAnnotationList",
    No5 = "AutomatedReasoningPolicyAddRuleAnnotation",
    To5 = "AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation",
    vo5 = "AutomatedReasoningPolicyAddRuleMutation",
    Eo5 = "AutomatedReasoningPolicyAnnotationRuleNaturalLanguage",
    ko5 = "AutomatedReasoningPolicyAddTypeAnnotation",
    Co5 = "AutomatedReasoningPolicyAddTypeMutation",
    Lo5 = "AutomatedReasoningPolicyAddTypeValue",
    Ro5 = "AutomatedReasoningPolicyAddVariableAnnotation",
    yo5 = "AutomatedReasoningPolicyAddVariableMutation",
    Io5 = "AutomatedReasoningPolicyBuildDocumentBlob",
    So5 = "AutomatedReasoningPolicyBuildDocumentDescription",
    ho5 = "AutomatedReasoningPolicyBuildDocumentName",
    bo5 = "AutomatedReasoningPolicyBuildLog",
    xo5 = "AutomatedReasoningPolicyBuildLogEntry",
    uo5 = "AutomatedReasoningPolicyBuildLogEntryList",
    Bo5 = "AutomatedReasoningPolicyBuildResultAssets",
    mo5 = "AutomatedReasoningPolicyBuildStep",
    go5 = "AutomatedReasoningPolicyBuildStepContext",
    Fo5 = "AutomatedReasoningPolicyBuildStepList",
    Qo5 = "AutomatedReasoningPolicyBuildStepMessage",
    Uo5 = "AutomatedReasoningPolicyBuildStepMessageList",
    po5 = "AutomatedReasoningPolicyBuildWorkflowDocument",
    do5 = "AutomatedReasoningPolicyBuildWorkflowDocumentList",
    co5 = "AutomatedReasoningPolicyBuildWorkflowRepairContent",
    lo5 = "AutomatedReasoningPolicyBuildWorkflowSource",
    io5 = "AutomatedReasoningPolicyBuildWorkflowSummary",
    no5 = "AutomatedReasoningPolicyBuildWorkflowSummaries",
    ro5 = "AutomatedReasoningPolicyDescription",
    oo5 = "AutomatedReasoningPolicyDefinitionElement",
    ao5 = "AutomatedReasoningPolicyDefinitionQualityReport",
    so5 = "AutomatedReasoningPolicyDefinitionRule",
    to5 = "AutomatedReasoningPolicyDeleteRuleAnnotation",
    eo5 = "AutomatedReasoningPolicyDefinitionRuleAlternateExpression",
    Aa5 = "AutomatedReasoningPolicyDefinitionRuleExpression",
    Ka5 = "AutomatedReasoningPolicyDefinitionRuleList",
    qa5 = "AutomatedReasoningPolicyDeleteRuleMutation",
    Ya5 = "AutomatedReasoningPolicyDisjointRuleSet",
    za5 = "AutomatedReasoningPolicyDisjointRuleSetList",
    wa5 = "AutomatedReasoningPolicyDefinitionType",
    Ha5 = "AutomatedReasoningPolicyDeleteTypeAnnotation",
    Ja5 = "AutomatedReasoningPolicyDefinitionTypeDescription",
    Oa5 = "AutomatedReasoningPolicyDefinitionTypeList",
    Xa5 = "AutomatedReasoningPolicyDeleteTypeMutation",
    $a5 = "AutomatedReasoningPolicyDefinitionTypeName",
    _a5 = "AutomatedReasoningPolicyDefinitionTypeNameList",
    Ga5 = "AutomatedReasoningPolicyDefinitionTypeValue",
    Za5 = "AutomatedReasoningPolicyDefinitionTypeValueDescription",
    Wa5 = "AutomatedReasoningPolicyDefinitionTypeValueList",
    Da5 = "AutomatedReasoningPolicyDefinitionTypeValuePair",
    ja5 = "AutomatedReasoningPolicyDefinitionTypeValuePairList",
    Ma5 = "AutomatedReasoningPolicyDeleteTypeValue",
    Pa5 = "AutomatedReasoningPolicyDefinitionVariable",
    Va5 = "AutomatedReasoningPolicyDeleteVariableAnnotation",
    fa5 = "AutomatedReasoningPolicyDefinitionVariableDescription",
    Na5 = "AutomatedReasoningPolicyDefinitionVariableList",
    Ta5 = "AutomatedReasoningPolicyDeleteVariableMutation",
    va5 = "AutomatedReasoningPolicyDefinitionVariableName",
    Ea5 = "AutomatedReasoningPolicyDefinitionVariableNameList",
    ka5 = "AutomatedReasoningPolicyDefinition",
    Ca5 = "AutomatedReasoningPolicyGeneratedTestCase",
    La5 = "AutomatedReasoningPolicyGeneratedTestCaseList",
    Ra5 = "AutomatedReasoningPolicyGeneratedTestCases",
    ya5 = "AutomatedReasoningPolicyIngestContentAnnotation",
    Ia5 = "AutomatedReasoningPolicyMutation",
    Sa5 = "AutomatedReasoningPolicyName",
    ha5 = "AutomatedReasoningPolicyPlanning",
    ba5 = "AutomatedReasoningPolicyScenario",
    xa5 = "AutomatedReasoningPolicyScenarioAlternateExpression",
    ua5 = "AutomatedReasoningPolicyScenarioExpression",
    Ba5 = "AutomatedReasoningPolicySummary",
    ma5 = "AutomatedReasoningPolicySummaries",
    ga5 = "AutomatedReasoningPolicyTestCase",
    Fa5 = "AutomatedReasoningPolicyTestCaseList",
    Qa5 = "AutomatedReasoningPolicyTestGuardContent",
    Ua5 = "AutomatedReasoningPolicyTestList",
    pa5 = "AutomatedReasoningPolicyTestQueryContent",
    da5 = "AutomatedReasoningPolicyTestResult",
    ca5 = "AutomatedReasoningPolicyTypeValueAnnotation",
    la5 = "AutomatedReasoningPolicyTypeValueAnnotationList",
    ia5 = "AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation",
    na5 = "AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation",
    ra5 = "AutomatedReasoningPolicyUpdateRuleAnnotation",
    oa5 = "AutomatedReasoningPolicyUpdateRuleMutation",
    aa5 = "AutomatedReasoningPolicyUpdateTypeAnnotation",
    sa5 = "AutomatedReasoningPolicyUpdateTypeMutation",
    ta5 = "AutomatedReasoningPolicyUpdateTypeValue",
    ea5 = "AutomatedReasoningPolicyUpdateVariableAnnotation",
    As5 = "AutomatedReasoningPolicyUpdateVariableMutation",
    Ks5 = "AutomatedReasoningPolicyWorkflowTypeContent",
    qs5 = "ByteContentBlob",
    Ys5 = "ByteContentDoc",
    zs5 = "BatchDeleteEvaluationJob",
    ws5 = "BatchDeleteEvaluationJobError",
    Hs5 = "BatchDeleteEvaluationJobErrors",
    Js5 = "BatchDeleteEvaluationJobItem",
    Os5 = "BatchDeleteEvaluationJobItems",
    Xs5 = "BatchDeleteEvaluationJobRequest",
    $s5 = "BatchDeleteEvaluationJobResponse",
    _s5 = "BedrockEvaluatorModel",
    Gs5 = "BedrockEvaluatorModels",
    Zs5 = "CreateAutomatedReasoningPolicy",
    Ws5 = "CancelAutomatedReasoningPolicyBuildWorkflow",
    Ds5 = "CancelAutomatedReasoningPolicyBuildWorkflowRequest",
    js5 = "CancelAutomatedReasoningPolicyBuildWorkflowResponse",
    Ms5 = "CreateAutomatedReasoningPolicyRequest",
    Ps5 = "CreateAutomatedReasoningPolicyResponse",
    Vs5 = "CreateAutomatedReasoningPolicyTestCase",
    fs5 = "CreateAutomatedReasoningPolicyTestCaseRequest",
    Ns5 = "CreateAutomatedReasoningPolicyTestCaseResponse",
    Ts5 = "CreateAutomatedReasoningPolicyVersion",
    vs5 = "CreateAutomatedReasoningPolicyVersionRequest",
    Es5 = "CreateAutomatedReasoningPolicyVersionResponse",
    ks5 = "CustomizationConfig",
    Cs5 = "CreateCustomModel",
    Ls5 = "CreateCustomModelDeployment",
    Rs5 = "CreateCustomModelDeploymentRequest",
    ys5 = "CreateCustomModelDeploymentResponse",
    Is5 = "CreateCustomModelRequest",
    Ss5 = "CreateCustomModelResponse",
    hs5 = "ConflictException",
    bs5 = "CreateEvaluationJob",
    xs5 = "CreateEvaluationJobRequest",
    us5 = "CreateEvaluationJobResponse",
    Bs5 = "CreateFoundationModelAgreement",
    ms5 = "CreateFoundationModelAgreementRequest",
    gs5 = "CreateFoundationModelAgreementResponse",
    Fs5 = "CreateGuardrail",
    Qs5 = "CreateGuardrailRequest",
    Us5 = "CreateGuardrailResponse",
    ps5 = "CreateGuardrailVersion",
    ds5 = "CreateGuardrailVersionRequest",
    cs5 = "CreateGuardrailVersionResponse",
    ls5 = "CreateInferenceProfile",
    is5 = "CreateInferenceProfileRequest",
    ns5 = "CreateInferenceProfileResponse",
    rs5 = "CustomMetricBedrockEvaluatorModel",
    os5 = "CustomMetricBedrockEvaluatorModels",
    as5 = "CreateModelCopyJob",
    ss5 = "CreateModelCopyJobRequest",
    ts5 = "CreateModelCopyJobResponse",
    es5 = "CreateModelCustomizationJobRequest",
    At5 = "CreateModelCustomizationJobResponse",
    Kt5 = "CreateModelCustomizationJob",
    qt5 = "CustomMetricDefinition",
    Yt5 = "CustomModelDeploymentSummary",
    zt5 = "CustomModelDeploymentSummaryList",
    wt5 = "CustomMetricEvaluatorModelConfig",
    Ht5 = "CreateModelImportJob",
    Jt5 = "CreateModelImportJobRequest",
    Ot5 = "CreateModelImportJobResponse",
    Xt5 = "CreateModelInvocationJobRequest",
    $t5 = "CreateModelInvocationJobResponse",
    _t5 = "CreateModelInvocationJob",
    Gt5 = "CreateMarketplaceModelEndpoint",
    Zt5 = "CreateMarketplaceModelEndpointRequest",
    Wt5 = "CreateMarketplaceModelEndpointResponse",
    Dt5 = "CustomModelSummary",
    jt5 = "CustomModelSummaryList",
    Mt5 = "CustomModelUnits",
    Pt5 = "CreateProvisionedModelThroughput",
    Vt5 = "CreateProvisionedModelThroughputRequest",
    ft5 = "CreateProvisionedModelThroughputResponse",
    Nt5 = "CreatePromptRouter",
    Tt5 = "CreatePromptRouterRequest",
    vt5 = "CreatePromptRouterResponse",
    Et5 = "CloudWatchConfig",
    kt5 = "DeleteAutomatedReasoningPolicy",
    Ct5 = "DeleteAutomatedReasoningPolicyBuildWorkflow",
    Lt5 = "DeleteAutomatedReasoningPolicyBuildWorkflowRequest",
    Rt5 = "DeleteAutomatedReasoningPolicyBuildWorkflowResponse",
    yt5 = "DeleteAutomatedReasoningPolicyRequest",
    It5 = "DeleteAutomatedReasoningPolicyResponse",
    St5 = "DeleteAutomatedReasoningPolicyTestCase",
    ht5 = "DeleteAutomatedReasoningPolicyTestCaseRequest",
    bt5 = "DeleteAutomatedReasoningPolicyTestCaseResponse",
    xt5 = "DistillationConfig",
    ut5 = "DeleteCustomModel",
    Bt5 = "DeleteCustomModelDeployment",
    mt5 = "DeleteCustomModelDeploymentRequest",
    gt5 = "DeleteCustomModelDeploymentResponse",
    Ft5 = "DeleteCustomModelRequest",
    Qt5 = "DeleteCustomModelResponse",
    Ut5 = "DeleteFoundationModelAgreement",
    pt5 = "DeleteFoundationModelAgreementRequest",
    dt5 = "DeleteFoundationModelAgreementResponse",
    ct5 = "DeleteGuardrail",
    lt5 = "DeleteGuardrailRequest",
    it5 = "DeleteGuardrailResponse",
    nt5 = "DeleteImportedModel",
    rt5 = "DeleteImportedModelRequest",
    ot5 = "DeleteImportedModelResponse",
    at5 = "DeleteInferenceProfile",
    st5 = "DeleteInferenceProfileRequest",
    tt5 = "DeleteInferenceProfileResponse",
    et5 = "DeleteModelInvocationLoggingConfiguration",
    Ae5 = "DeleteModelInvocationLoggingConfigurationRequest",
    Ke5 = "DeleteModelInvocationLoggingConfigurationResponse",
    qe5 = "DeleteMarketplaceModelEndpoint",
    Ye5 = "DeleteMarketplaceModelEndpointRequest",
    ze5 = "DeleteMarketplaceModelEndpointResponse",
    we5 = "DeregisterMarketplaceModelEndpointRequest",
    He5 = "DeregisterMarketplaceModelEndpointResponse",
    Je5 = "DeregisterMarketplaceModelEndpoint",
    Oe5 = "DataProcessingDetails",
    Xe5 = "DeleteProvisionedModelThroughput",
    $e5 = "DeleteProvisionedModelThroughputRequest",
    _e5 = "DeleteProvisionedModelThroughputResponse",
    Ge5 = "DimensionalPriceRate",
    Ze5 = "DeletePromptRouterRequest",
    We5 = "DeletePromptRouterResponse",
    De5 = "DeletePromptRouter",
    je5 = "ExportAutomatedReasoningPolicyVersion",
    Me5 = "ExportAutomatedReasoningPolicyVersionRequest",
    Pe5 = "ExportAutomatedReasoningPolicyVersionResponse",
    Ve5 = "EvaluationBedrockModel",
    fe5 = "EndpointConfig",
    Ne5 = "EvaluationConfig",
    Te5 = "EvaluationDataset",
    ve5 = "EvaluationDatasetLocation",
    Ee5 = "EvaluationDatasetMetricConfig",
    ke5 = "EvaluationDatasetMetricConfigs",
    Ce5 = "EvaluationDatasetName",
    Le5 = "EvaluationInferenceConfig",
    Re5 = "EvaluationInferenceConfigSummary",
    ye5 = "EvaluationJobDescription",
    Ie5 = "EvaluationJobIdentifier",
    Se5 = "EvaluationJobIdentifiers",
    he5 = "EvaluationModelConfigs",
    be5 = "EvaluationModelConfigSummary",
    xe5 = "EvaluationModelConfig",
    ue5 = "EvaluatorModelConfig",
    Be5 = "EvaluationMetricDescription",
    me5 = "EvaluationModelInferenceParams",
    ge5 = "EvaluationMetricName",
    Fe5 = "EvaluationMetricNames",
    Qe5 = "EvaluationOutputDataConfig",
    Ue5 = "EvaluationPrecomputedInferenceSource",
    pe5 = "EvaluationPrecomputedRetrieveAndGenerateSourceConfig",
    de5 = "EvaluationPrecomputedRetrieveSourceConfig",
    ce5 = "EvaluationPrecomputedRagSourceConfig",
    le5 = "EvaluationRagConfigSummary",
    ie5 = "EvaluationSummary",
    ne5 = "ExternalSourcesGenerationConfiguration",
    re5 = "ExternalSourcesRetrieveAndGenerateConfiguration",
    oe5 = "EvaluationSummaries",
    ae5 = "ExternalSource",
    se5 = "ExternalSources",
    te5 = "FilterAttribute",
    ee5 = "FieldForReranking",
    AA3 = "FieldsForReranking",
    KA3 = "FoundationModelDetails",
    qA3 = "FoundationModelLifecycle",
    YA3 = "FoundationModelSummary",
    zA3 = "FoundationModelSummaryList",
    wA3 = "GuardrailAutomatedReasoningPolicy",
    HA3 = "GetAutomatedReasoningPolicyAnnotations",
    JA3 = "GetAutomatedReasoningPolicyAnnotationsRequest",
    OA3 = "GetAutomatedReasoningPolicyAnnotationsResponse",
    XA3 = "GetAutomatedReasoningPolicyBuildWorkflow",
    $A3 = "GetAutomatedReasoningPolicyBuildWorkflowRequest",
    _A3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssets",
    GA3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest",
    ZA3 = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse",
    WA3 = "GetAutomatedReasoningPolicyBuildWorkflowResponse",
    DA3 = "GuardrailAutomatedReasoningPolicyConfig",
    jA3 = "GetAutomatedReasoningPolicyNextScenario",
    MA3 = "GetAutomatedReasoningPolicyNextScenarioRequest",
    PA3 = "GetAutomatedReasoningPolicyNextScenarioResponse",
    VA3 = "GetAutomatedReasoningPolicyRequest",
    fA3 = "GetAutomatedReasoningPolicyResponse",
    NA3 = "GetAutomatedReasoningPolicyTestCase",
    TA3 = "GetAutomatedReasoningPolicyTestCaseRequest",
    vA3 = "GetAutomatedReasoningPolicyTestCaseResponse",
    EA3 = "GetAutomatedReasoningPolicyTestResult",
    kA3 = "GetAutomatedReasoningPolicyTestResultRequest",
    CA3 = "GetAutomatedReasoningPolicyTestResultResponse",
    LA3 = "GetAutomatedReasoningPolicy",
    RA3 = "GuardrailBlockedMessaging",
    yA3 = "GenerationConfiguration",
    IA3 = "GuardrailContentFilter",
    SA3 = "GuardrailContentFilterAction",
    hA3 = "GuardrailContentFilterConfig",
    bA3 = "GuardrailContentFiltersConfig",
    xA3 = "GuardrailContentFiltersTier",
    uA3 = "GuardrailContentFiltersTierConfig",
    BA3 = "GuardrailContentFiltersTierName",
    mA3 = "GuardrailContentFilters",
    gA3 = "GuardrailContextualGroundingAction",
    FA3 = "GuardrailContextualGroundingFilter",
    QA3 = "GuardrailContextualGroundingFilterConfig",
    UA3 = "GuardrailContextualGroundingFiltersConfig",
    pA3 = "GuardrailContextualGroundingFilters",
    dA3 = "GuardrailContextualGroundingPolicy",
    cA3 = "GuardrailContextualGroundingPolicyConfig",
    lA3 = "GetCustomModel",
    iA3 = "GetCustomModelDeployment",
    nA3 = "GetCustomModelDeploymentRequest",
    rA3 = "GetCustomModelDeploymentResponse",
    oA3 = "GetCustomModelRequest",
    aA3 = "GetCustomModelResponse",
    sA3 = "GuardrailContentPolicy",
    tA3 = "GuardrailContentPolicyConfig",
    eA3 = "GuardrailCrossRegionConfig",
    A13 = "GuardrailCrossRegionDetails",
    K13 = "GuardrailConfiguration",
    q13 = "GuardrailDescription",
    Y13 = "GetEvaluationJob",
    z13 = "GetEvaluationJobRequest",
    w13 = "GetEvaluationJobResponse",
    H13 = "GetFoundationModel",
    J13 = "GetFoundationModelAvailability",
    O13 = "GetFoundationModelAvailabilityRequest",
    X13 = "GetFoundationModelAvailabilityResponse",
    $13 = "GetFoundationModelRequest",
    _13 = "GetFoundationModelResponse",
    G13 = "GuardrailFailureRecommendation",
    Z13 = "GuardrailFailureRecommendations",
    W13 = "GetGuardrail",
    D13 = "GetGuardrailRequest",
    j13 = "GetGuardrailResponse",
    M13 = "GetImportedModel",
    P13 = "GetImportedModelRequest",
    V13 = "GetImportedModelResponse",
    f13 = "GetInferenceProfile",
    N13 = "GetInferenceProfileRequest",
    T13 = "GetInferenceProfileResponse",
    v13 = "GuardrailModality",
    E13 = "GetModelCopyJob",
    k13 = "GetModelCopyJobRequest",
    C13 = "GetModelCopyJobResponse",
    L13 = "GetModelCustomizationJobRequest",
    R13 = "GetModelCustomizationJobResponse",
    y13 = "GetModelCustomizationJob",
    I13 = "GetModelImportJob",
    S13 = "GetModelImportJobRequest",
    h13 = "GetModelImportJobResponse",
    b13 = "GetModelInvocationJobRequest",
    x13 = "GetModelInvocationJobResponse",
    u13 = "GetModelInvocationJob",
    B13 = "GetModelInvocationLoggingConfiguration",
    m13 = "GetModelInvocationLoggingConfigurationRequest",
    g13 = "GetModelInvocationLoggingConfigurationResponse",
    F13 = "GetMarketplaceModelEndpoint",
    Q13 = "GetMarketplaceModelEndpointRequest",
    U13 = "GetMarketplaceModelEndpointResponse",
    p13 = "GuardrailManagedWords",
    d13 = "GuardrailManagedWordsConfig",
    c13 = "GuardrailManagedWordLists",
    l13 = "GuardrailManagedWordListsConfig",
    i13 = "GuardrailModalities",
    n13 = "GuardrailName",
    r13 = "GuardrailPiiEntity",
    o13 = "GuardrailPiiEntityConfig",
    a13 = "GuardrailPiiEntitiesConfig",
    s13 = "GuardrailPiiEntities",
    t13 = "GetProvisionedModelThroughput",
    e13 = "GetProvisionedModelThroughputRequest",
    A63 = "GetProvisionedModelThroughputResponse",
    K63 = "GetPromptRouter",
    q63 = "GetPromptRouterRequest",
    Y63 = "GetPromptRouterResponse",
    z63 = "GuardrailRegex",
    w63 = "GuardrailRegexConfig",
    H63 = "GuardrailRegexesConfig",
    J63 = "GuardrailRegexes",
    O63 = "GuardrailSummary",
    X63 = "GuardrailSensitiveInformationPolicy",
    $63 = "GuardrailSensitiveInformationPolicyConfig",
    _63 = "GuardrailStatusReason",
    G63 = "GuardrailStatusReasons",
    Z63 = "GuardrailSummaries",
    W63 = "GuardrailTopic",
    D63 = "GuardrailTopicAction",
    j63 = "GuardrailTopicConfig",
    M63 = "GuardrailTopicsConfig",
    P63 = "GuardrailTopicDefinition",
    V63 = "GuardrailTopicExample",
    f63 = "GuardrailTopicExamples",
    N63 = "GuardrailTopicName",
    T63 = "GuardrailTopicPolicy",
    v63 = "GuardrailTopicPolicyConfig",
    E63 = "GuardrailTopicsTier",
    k63 = "GuardrailTopicsTierConfig",
    C63 = "GuardrailTopicsTierName",
    L63 = "GuardrailTopics",
    R63 = "GetUseCaseForModelAccess",
    y63 = "GetUseCaseForModelAccessRequest",
    I63 = "GetUseCaseForModelAccessResponse",
    S63 = "GuardrailWord",
    h63 = "GuardrailWordAction",
    b63 = "GuardrailWordConfig",
    x63 = "GuardrailWordsConfig",
    u63 = "GuardrailWordPolicy",
    B63 = "GuardrailWordPolicyConfig",
    m63 = "GuardrailWords",
    g63 = "HumanEvaluationConfig",
    F63 = "HumanEvaluationCustomMetric",
    Q63 = "HumanEvaluationCustomMetrics",
    U63 = "HumanTaskInstructions",
    p63 = "HumanWorkflowConfig",
    d63 = "Identifier",
    c63 = "ImplicitFilterConfiguration",
    l63 = "InvocationLogsConfig",
    i63 = "InvocationLogSource",
    n63 = "ImportedModelSummary",
    r63 = "ImportedModelSummaryList",
    o63 = "InferenceProfileDescription",
    a63 = "InferenceProfileModel",
    s63 = "InferenceProfileModelSource",
    t63 = "InferenceProfileModels",
    e63 = "InferenceProfileSummary",
    A83 = "InferenceProfileSummaries",
    K83 = "InternalServerException",
    q83 = "KnowledgeBaseConfig",
    Y83 = "KnowledgeBaseRetrieveAndGenerateConfiguration",
    z83 = "KnowledgeBaseRetrievalConfiguration",
    w83 = "KnowledgeBaseVectorSearchConfiguration",
    H83 = "KbInferenceConfig",
    J83 = "ListAutomatedReasoningPolicies",
    O83 = "ListAutomatedReasoningPolicyBuildWorkflows",
    X83 = "ListAutomatedReasoningPolicyBuildWorkflowsRequest",
    $83 = "ListAutomatedReasoningPolicyBuildWorkflowsResponse",
    _83 = "ListAutomatedReasoningPoliciesRequest",
    G83 = "ListAutomatedReasoningPoliciesResponse",
    Z83 = "ListAutomatedReasoningPolicyTestCases",
    W83 = "ListAutomatedReasoningPolicyTestCasesRequest",
    D83 = "ListAutomatedReasoningPolicyTestCasesResponse",
    j83 = "ListAutomatedReasoningPolicyTestResults",
    M83 = "ListAutomatedReasoningPolicyTestResultsRequest",
    P83 = "ListAutomatedReasoningPolicyTestResultsResponse",
    V83 = "LoggingConfig",
    f83 = "ListCustomModels",
    N83 = "ListCustomModelDeployments",
    T83 = "ListCustomModelDeploymentsRequest",
    v83 = "ListCustomModelDeploymentsResponse",
    E83 = "ListCustomModelsRequest",
    k83 = "ListCustomModelsResponse",
    C83 = "ListEvaluationJobs",
    L83 = "ListEvaluationJobsRequest",
    R83 = "ListEvaluationJobsResponse",
    y83 = "ListFoundationModels",
    I83 = "ListFoundationModelAgreementOffers",
    S83 = "ListFoundationModelAgreementOffersRequest",
    h83 = "ListFoundationModelAgreementOffersResponse",
    b83 = "ListFoundationModelsRequest",
    x83 = "ListFoundationModelsResponse",
    u83 = "ListGuardrails",
    B83 = "ListGuardrailsRequest",
    m83 = "ListGuardrailsResponse",
    g83 = "ListImportedModels",
    F83 = "ListImportedModelsRequest",
    Q83 = "ListImportedModelsResponse",
    U83 = "ListInferenceProfiles",
    p83 = "ListInferenceProfilesRequest",
    d83 = "ListInferenceProfilesResponse",
    c83 = "ListModelCopyJobs",
    l83 = "ListModelCopyJobsRequest",
    i83 = "ListModelCopyJobsResponse",
    n83 = "ListModelCustomizationJobsRequest",
    r83 = "ListModelCustomizationJobsResponse",
    o83 = "ListModelCustomizationJobs",
    a83 = "ListModelImportJobs",
    s83 = "ListModelImportJobsRequest",
    t83 = "ListModelImportJobsResponse",
    e83 = "ListModelInvocationJobsRequest",
    A43 = "ListModelInvocationJobsResponse",
    K43 = "ListModelInvocationJobs",
    q43 = "ListMarketplaceModelEndpoints",
    Y43 = "ListMarketplaceModelEndpointsRequest",
    z43 = "ListMarketplaceModelEndpointsResponse",
    w43 = "ListProvisionedModelThroughputs",
    H43 = "ListProvisionedModelThroughputsRequest",
    J43 = "ListProvisionedModelThroughputsResponse",
    O43 = "ListPromptRouters",
    X43 = "ListPromptRoutersRequest",
    $43 = "ListPromptRoutersResponse",
    _43 = "LegalTerm",
    G43 = "ListTagsForResource",
    Z43 = "ListTagsForResourceRequest",
    W43 = "ListTagsForResourceResponse",
    D43 = "Message",
    j43 = "MetadataAttributeSchema",
    M43 = "MetadataAttributeSchemaList",
    P43 = "MetadataConfigurationForReranking",
    V43 = "ModelCopyJobSummary",
    f43 = "ModelCustomizationJobSummary",
    N43 = "ModelCopyJobSummaries",
    T43 = "ModelCustomizationJobSummaries",
    v43 = "ModelDataSource",
    E43 = "ModelInvocationJobInputDataConfig",
    k43 = "ModelInvocationJobOutputDataConfig",
    C43 = "ModelImportJobSummary",
    L43 = "ModelInvocationJobS3InputDataConfig",
    R43 = "ModelInvocationJobS3OutputDataConfig",
    y43 = "ModelInvocationJobSummary",
    I43 = "ModelImportJobSummaries",
    S43 = "ModelInvocationJobSummaries",
    h43 = "MarketplaceModelEndpoint",
    b43 = "MarketplaceModelEndpointSummary",
    x43 = "MarketplaceModelEndpointSummaries",
    u43 = "MetricName",
    B43 = "Offer",
    m43 = "OrchestrationConfiguration",
    g43 = "OutputDataConfig",
    F43 = "Offers",
    Q43 = "PerformanceConfiguration",
    U43 = "PutModelInvocationLoggingConfiguration",
    p43 = "PutModelInvocationLoggingConfigurationRequest",
    d43 = "PutModelInvocationLoggingConfigurationResponse",
    c43 = "ProvisionedModelSummary",
    l43 = "ProvisionedModelSummaries",
    i43 = "PromptRouterDescription",
    n43 = "PromptRouterSummary",
    r43 = "PromptRouterSummaries",
    o43 = "PromptRouterTargetModel",
    a43 = "PromptRouterTargetModels",
    s43 = "PricingTerm",
    t43 = "PromptTemplate",
    e43 = "PutUseCaseForModelAccess",
    A73 = "PutUseCaseForModelAccessRequest",
    K73 = "PutUseCaseForModelAccessResponse",
    q73 = "QueryTransformationConfiguration",
    Y73 = "RetrieveAndGenerateConfiguration",
    z73 = "RAGConfig",
    w73 = "RetrieveConfig",
    H73 = "RagConfigs",
    J73 = "RateCard",
    O73 = "RoutingCriteria",
    X73 = "RetrievalFilter",
    $73 = "RetrievalFilterList",
    _73 = "ResourceInUseException",
    G73 = "RequestMetadataBaseFilters",
    Z73 = "RequestMetadataFilters",
    W73 = "RequestMetadataFiltersList",
    D73 = "RequestMetadataMap",
    j73 = "RegisterMarketplaceModelEndpoint",
    M73 = "RegisterMarketplaceModelEndpointRequest",
    P73 = "RegisterMarketplaceModelEndpointResponse",
    V73 = "RerankingMetadataSelectiveModeConfiguration",
    f73 = "ResourceNotFoundException",
    N73 = "RatingScale",
    T73 = "RatingScaleItem",
    v73 = "RatingScaleItemValue",
    E73 = "StartAutomatedReasoningPolicyBuildWorkflow",
    k73 = "StartAutomatedReasoningPolicyBuildWorkflowRequest",
    C73 = "StartAutomatedReasoningPolicyBuildWorkflowResponse",
    L73 = "StartAutomatedReasoningPolicyTestWorkflow",
    R73 = "StartAutomatedReasoningPolicyTestWorkflowRequest",
    y73 = "StartAutomatedReasoningPolicyTestWorkflowResponse",
    I73 = "S3Config",
    S73 = "StatusDetails",
    h73 = "S3DataSource",
    b73 = "StopEvaluationJob",
    x73 = "StopEvaluationJobRequest",
    u73 = "StopEvaluationJobResponse",
    B73 = "StopModelCustomizationJob",
    m73 = "StopModelCustomizationJobRequest",
    g73 = "StopModelCustomizationJobResponse",
    F73 = "SageMakerEndpoint",
    Q73 = "StopModelInvocationJob",
    U73 = "StopModelInvocationJobRequest",
    p73 = "StopModelInvocationJobResponse",
    d73 = "S3ObjectDoc",
    c73 = "ServiceQuotaExceededException",
    l73 = "SupportTerm",
    i73 = "ServiceUnavailableException",
    n73 = "Tag",
    r73 = "TermDetails",
    o73 = "TrainingDataConfig",
    a73 = "TrainingDetails",
    s73 = "ThrottlingException",
    t73 = "TextInferenceConfig",
    e73 = "TagList",
    AK3 = "TrainingMetrics",
    KK3 = "TeacherModelConfig",
    qK3 = "TooManyTagsException",
    YK3 = "TextPromptTemplate",
    zK3 = "TagResource",
    wK3 = "TagResourceRequest",
    HK3 = "TagResourceResponse",
    JK3 = "UpdateAutomatedReasoningPolicy",
    OK3 = "UpdateAutomatedReasoningPolicyAnnotations",
    XK3 = "UpdateAutomatedReasoningPolicyAnnotationsRequest",
    $K3 = "UpdateAutomatedReasoningPolicyAnnotationsResponse",
    _K3 = "UpdateAutomatedReasoningPolicyRequest",
    GK3 = "UpdateAutomatedReasoningPolicyResponse",
    ZK3 = "UpdateAutomatedReasoningPolicyTestCase",
    WK3 = "UpdateAutomatedReasoningPolicyTestCaseRequest",
    DK3 = "UpdateAutomatedReasoningPolicyTestCaseResponse",
    jK3 = "UpdateGuardrail",
    MK3 = "UpdateGuardrailRequest",
    PK3 = "UpdateGuardrailResponse",
    VK3 = "UpdateMarketplaceModelEndpoint",
    fK3 = "UpdateMarketplaceModelEndpointRequest",
    NK3 = "UpdateMarketplaceModelEndpointResponse",
    TK3 = "UpdateProvisionedModelThroughput",
    vK3 = "UpdateProvisionedModelThroughputRequest",
    EK3 = "UpdateProvisionedModelThroughputResponse",
    kK3 = "UntagResource",
    CK3 = "UntagResourceRequest",
    LK3 = "UntagResourceResponse",
    RK3 = "Validator",
    yK3 = "VpcConfig",
    IK3 = "ValidationDetails",
    SK3 = "ValidationDataConfig",
    hK3 = "ValidationException",
    bK3 = "ValidatorMetric",
    xK3 = "ValidationMetrics",
    uK3 = "VectorSearchBedrockRerankingConfiguration",
    BK3 = "VectorSearchBedrockRerankingModelConfiguration",
    mK3 = "VectorSearchRerankingConfiguration",
    gK3 = "ValidityTerm",
    FK3 = "Validators",
    QK3 = "annotation",
    UK3 = "agreementAvailability",
    Tt8 = "andAll",
    pK3 = "agreementDuration",
    vt8 = "alternateExpression",
    dK3 = "acceptEula",
    bs1 = "additionalModelRequestFields",
    Et8 = "addRule",
    cK3 = "addRuleFromNaturalLanguage",
    lK3 = "automatedReasoningPolicy",
    iK3 = "automatedReasoningPolicyBuildWorkflowSummaries",
    kt8 = "automatedReasoningPolicyConfig",
    nK3 = "automatedReasoningPolicySummaries",
    rK3 = "authorizationStatus",
    Ct8 = "annotationSetHash",
    xs1 = "applicationType",
    ls8 = "applicationTypeEquals",
    oK3 = "aggregatedTestFindingsResult",
    aK3 = "addTypeValue",
    Lt8 = "addType",
    is8 = "assetType",
    Rt8 = "addVariable",
    UOA = "action",
    us1 = "annotations",
    sK3 = "arn",
    tK3 = "automated",
    eK3 = "byteContent",
    ns8 = "byCustomizationType",
    yt8 = "bedrockEvaluatorModels",
    Bs1 = "blockedInputMessaging",
    rs8 = "byInferenceType",
    Aq3 = "bedrockKnowledgeBaseIdentifiers",
    Kq3 = "buildLog",
    qq3 = "bedrockModel",
    O41 = "baseModelArn",
    os8 = "baseModelArnEquals",
    Yq3 = "baseModelIdentifier",
    zq3 = "bedrockModelIdentifiers",
    wq3 = "baseModelName",
    Hq3 = "bucketName",
    ms1 = "blockedOutputsMessaging",
    as8 = "byOutputModality",
    ss8 = "byProvider",
    Jq3 = "bedrockRerankingConfiguration",
    Oq3 = "buildSteps",
    Xq3 = "buildWorkflowAssets",
    ND = "buildWorkflowId",
    gs1 = "buildWorkflowType",
    Wn = "client",
    KG = "createdAt",
    ts8 = "createdAfter",
    es8 = "createdBefore",
    Fs1 = "customizationConfig",
    Qs1 = "commitmentDuration",
    It8 = "customerEncryptionKeyId",
    St8 = "commitmentExpirationTime",
    $q3 = "copyFrom",
    _q3 = "claimsFalseScenario",
    Gq3 = "contextualGroundingPolicy",
    ht8 = "contextualGroundingPolicyConfig",
    bt8 = "customMetrics",
    Zq3 = "customModelArn",
    Wq3 = "customMetricConfig",
    Dq3 = "customMetricDefinition",
    Us1 = "customModelDeploymentArn",
    xt8 = "customModelDeploymentIdentifier",
    jq3 = "customModelDeploymentName",
    Mq3 = "customMetricsEvaluatorModelIdentifiers",
    Pq3 = "customModelKmsKeyId",
    ut8 = "customModelName",
    Vq3 = "customModelTags",
    fq3 = "customModelUnits",
    Nq3 = "customModelUnitsPerModelCopy",
    Tq3 = "customModelUnitsVersion",
    vq3 = "contentPolicy",
    Bt8 = "contentPolicyConfig",
    mt8 = "contradictingRules",
    gt8 = "crossRegionConfig",
    Ft8 = "crossRegionDetails",
    JO = "clientRequestToken",
    Eq3 = "conflictingRules",
    Qt8 = "customizationsSupported",
    CLA = "confidenceThreshold",
    TV = "creationTimeAfter",
    vV = "creationTimeBefore",
    Ut8 = "claimsTrueScenario",
    kq3 = "contentType",
    yZ = "creationTime",
    LLA = "customizationType",
    Cq3 = "cloudWatchConfig",
    pt8 = "claims",
    Lq3 = "confidence",
    Rq3 = "code",
    yq3 = "context",
    Iq3 = "content",
    RY = "description",
    Sq3 = "distillationConfig",
    dt8 = "documentContentType",
    ct8 = "documentDescription",
    X41 = "definitionHash",
    hq3 = "datasetLocation",
    lt8 = "desiredModelArn",
    it8 = "datasetMetricConfigs",
    bq3 = "desiredModelId",
    nt8 = "desiredModelUnits",
    rt8 = "documentName",
    xq3 = "dataProcessingDetails",
    uq3 = "desiredProvisionedModelName",
    ot8 = "deleteRule",
    Bq3 = "disjointRuleSets",
    mq3 = "differenceScenarios",
    at8 = "deleteType",
    gq3 = "deleteTypeValue",
    st8 = "deleteVariable",
    Fq3 = "data",
    Qq3 = "dataset",
    ps1 = "definition",
    Uq3 = "dimension",
    pq3 = "document",
    dq3 = "documents",
    tb = "error",
    pOA = "endpointArn",
    $41 = "expectedAggregatedFindingsResult",
    cq3 = "entitlementAvailability",
    tt8 = "evaluationConfig",
    ds1 = "endpointConfig",
    lq3 = "embeddingDataDeliveryEnabled",
    iq3 = "endpointIdentifier",
    nq3 = "evaluationJobs",
    rq3 = "errorMessage",
    et8 = "evaluatorModelConfig",
    oq3 = "evaluatorModelIdentifiers",
    aq3 = "endpointName",
    sq3 = "expectedResult",
    tq3 = "executionRole",
    eq3 = "endpointStatus",
    A53 = "externalSourcesConfiguration",
    K53 = "endpointStatusMessage",
    dOA = "endTime",
    q53 = "evaluationTaskTypes",
    Y53 = "entries",
    Ae8 = "enabled",
    cs1 = "equals",
    z53 = "errors",
    _41 = "expression",
    Ke8 = "examples",
    qe8 = "feedback",
    Ye8 = "filtersConfig",
    ze8 = "formData",
    w53 = "flowDefinitionArn",
    ls1 = "fallbackModel",
    we8 = "foundationModelArn",
    At8 = "foundationModelArnEquals",
    Dn = "failureMessage",
    H53 = "failureMessages",
    J53 = "fieldName",
    O53 = "failureRecommendations",
    X53 = "fieldsToExclude",
    $53 = "fieldsToInclude",
    _53 = "floatValue",
    He8 = "filters",
    G53 = "filter",
    Kt8 = "force",
    Z53 = "guardrails",
    is1 = "guardrailArn",
    G41 = "guardContent",
    Je8 = "generationConfiguration",
    Oe8 = "guardrailConfiguration",
    RLA = "guardrailId",
    FOA = "guardrailIdentifier",
    W53 = "guardrailProfileArn",
    D53 = "guardrailProfileIdentifier",
    j53 = "guardrailProfileId",
    M53 = "greaterThan",
    Xe8 = "generatedTestCases",
    P53 = "greaterThanOrEquals",
    ELA = "guardrailVersion",
    V53 = "human",
    eb = "httpError",
    f53 = "httpHeader",
    ns1 = "hyperParameters",
    P8 = "httpQuery",
    N53 = "humanWorkflowConfig",
    a8 = "http",
    Z41 = "id",
    Xk = "inputAction",
    $e8 = "inferenceConfig",
    T53 = "inferenceConfigSummary",
    v53 = "ingestContent",
    rs1 = "inputDataConfig",
    E53 = "imageDataDeliveryEnabled",
    $k = "inputEnabled",
    k53 = "implicitFilterConfiguration",
    C53 = "initialInstanceCount",
    L53 = "invocationJobSummaries",
    R53 = "invocationLogsConfig",
    y53 = "invocationLogSource",
    W41 = "inputModalities",
    _e8 = "importedModelArn",
    I53 = "importedModelKmsKeyArn",
    S53 = "importedModelKmsKeyId",
    os1 = "importedModelName",
    h53 = "importedModelTags",
    qt8 = "isOwned",
    b53 = "inferenceParams",
    as1 = "inferenceProfileArn",
    Ge8 = "inferenceProfileIdentifier",
    Ze8 = "inferenceProfileId",
    ss1 = "inferenceProfileName",
    x53 = "inferenceProfileSummaries",
    We8 = "instructSupported",
    u53 = "inferenceSourceIdentifier",
    De8 = "inputStrength",
    B53 = "instanceType",
    je8 = "inferenceTypesSupported",
    m53 = "idempotencyToken",
    g53 = "identifier",
    F53 = "impossible",
    Me8 = "instructions",
    Q53 = "in",
    U53 = "invalid",
    qG = "jobArn",
    Pe8 = "jobDescription",
    Ve8 = "jobExpirationTime",
    HQ = "jobIdentifier",
    p53 = "jobIdentifiers",
    kV = "jobName",
    d53 = "jobStatus",
    c53 = "jobSummaries",
    ts1 = "jobTags",
    fe8 = "jobType",
    es1 = "key",
    l53 = "knowledgeBaseConfiguration",
    i53 = "knowledgeBaseConfig",
    Ne8 = "knowledgeBaseId",
    n53 = "knowledgeBaseRetrievalConfiguration",
    r53 = "kmsEncryptionKey",
    Te8 = "kbInferenceConfig",
    ve8 = "kmsKeyArn",
    At1 = "kmsKeyId",
    o53 = "keyPrefix",
    a53 = "logic",
    Ee8 = "loggingConfig",
    s53 = "listContains",
    t53 = "largeDataDeliveryS3Config",
    e53 = "logGroupName",
    _k = "lastModifiedTime",
    A33 = "legalTerm",
    K33 = "lessThanOrEquals",
    q33 = "lessThan",
    yLA = "lastUpdatedAt",
    Y33 = "lastUpdatedAnnotationSetHash",
    z33 = "lastUpdatedDefinitionHash",
    D41 = "logicWarning",
    w33 = "latency",
    CV = "message",
    YG = "modelArn",
    K41 = "modelArnEquals",
    H33 = "metadataAttributes",
    ke8 = "modelArchitecture",
    J33 = "modelConfiguration",
    O33 = "modelCopyJobSummaries",
    X33 = "modelCustomizationJobSummaries",
    $33 = "modelConfigSummary",
    _33 = "metadataConfiguration",
    G33 = "modelDetails",
    Ce8 = "modelDeploymentName",
    Kt1 = "modelDataSource",
    Z33 = "modelDeploymentSummaries",
    jn = "modelIdentifier",
    W33 = "modelImportJobSummaries",
    $T = "modelId",
    D33 = "modelIdentifiers",
    qt1 = "modelKmsKeyArn",
    j33 = "modelKmsKeyId",
    Le8 = "modelLifecycle",
    j41 = "marketplaceModelEndpoint",
    M33 = "marketplaceModelEndpoints",
    M8A = "modelName",
    P33 = "metricNames",
    GY = "maxResults",
    V33 = "maxResponseLengthForInference",
    f33 = "modelSource",
    N33 = "modelSourceConfig",
    T33 = "modelSourceEquals",
    ILA = "modelSourceIdentifier",
    q41 = "modelStatus",
    Yt1 = "modelSummaries",
    v33 = "messageType",
    E33 = "maxTokens",
    k33 = "modelTags",
    zt1 = "modelUnits",
    C33 = "managedWordLists",
    L33 = "managedWordListsConfig",
    R33 = "messages",
    cOA = "models",
    y33 = "mutation",
    Dz = "name",
    fD = "nameContains",
    wt1 = "notEquals",
    I33 = "notIn",
    Re8 = "naturalLanguage",
    ye8 = "newName",
    S33 = "numberOfResults",
    h33 = "numberOfRerankedResults",
    Zq = "nextToken",
    b33 = "noTranslations",
    x33 = "newValue",
    u33 = "options",
    Gk = "outputAction",
    B33 = "ownerAccountId",
    Ie8 = "orAll",
    m33 = "orchestrationConfiguration",
    Mn = "outputDataConfig",
    Zk = "outputEnabled",
    g33 = "offerId",
    M41 = "outputModalities",
    F33 = "outputModelArn",
    Q33 = "outputModelKmsKeyArn",
    U33 = "outputModelName",
    p33 = "outputModelNameContains",
    Se8 = "outputStrength",
    d33 = "overrideSearchType",
    he8 = "offerToken",
    Yt8 = "offerType",
    c33 = "offers",
    be8 = "premises",
    f3 = "policyArn",
    l33 = "performanceConfig",
    SLA = "policyDefinition",
    i33 = "policyDefinitionRule",
    n33 = "policyDefinitionType",
    r33 = "policyDefinitionVariable",
    o33 = "priorElement",
    a33 = "piiEntitiesConfig",
    s33 = "piiEntities",
    xe8 = "policyId",
    t33 = "precomputedInferenceSource",
    e33 = "precomputedInferenceSourceIdentifiers",
    Ht1 = "provisionedModelArn",
    Jt1 = "provisionedModelId",
    Ot1 = "provisionedModelName",
    A93 = "provisionedModelSummaries",
    ue8 = "providerName",
    hLA = "promptRouterArn",
    K93 = "policyRepairAssets",
    Xt1 = "promptRouterName",
    q93 = "promptRouterSummaries",
    Y93 = "precomputedRagSourceConfig",
    z93 = "precomputedRagSourceIdentifiers",
    Be8 = "promptTemplate",
    w93 = "policyVersionArn",
    me8 = "pattern",
    H93 = "planning",
    ge8 = "policies",
    J93 = "price",
    P41 = "queryContent",
    O93 = "qualityReport",
    X93 = "queryTransformationConfiguration",
    Fe8 = "rule",
    $y = "roleArn",
    $93 = "retrieveAndGenerateConfig",
    _93 = "retrieveAndGenerateSourceConfig",
    $t1 = "resourceARN",
    G93 = "regionAvailability",
    Z93 = "ruleCount",
    W93 = "ragConfigSummary",
    D93 = "rateCard",
    j93 = "ragConfigs",
    M93 = "regexesConfig",
    P93 = "rerankingConfiguration",
    V93 = "retrievalConfiguration",
    f93 = "retrieveConfig",
    _t1 = "routingCriteria",
    Qe8 = "ruleId",
    N93 = "ragIdentifiers",
    Gt1 = "ruleIds",
    T93 = "ratingMethod",
    v93 = "requestMetadataFilters",
    E93 = "resourceName",
    k93 = "refundPolicyDescription",
    C93 = "responseQualityDifference",
    L93 = "ratingScale",
    R93 = "retrieveSourceConfig",
    Ue8 = "ragSourceIdentifier",
    pe8 = "responseStreamingSupported",
    y93 = "regexes",
    de8 = "rules",
    $2 = "status",
    zt8 = "sourceAccountEquals",
    ce8 = "sourceAccountId",
    e_ = "sortBy",
    le8 = "s3BucketOwner",
    I93 = "s3Config",
    S93 = "sourceContent",
    h93 = "stringContains",
    ie8 = "statusDetails",
    b93 = "s3DataSource",
    x93 = "scenarioExpression",
    u93 = "s3EncryptionKeyId",
    EV = "statusEquals",
    B93 = "securityGroupIds",
    m93 = "subnetIds",
    g93 = "s3InputDataConfig",
    F93 = "s3InputFormat",
    Q93 = "sensitiveInformationPolicy",
    ne8 = "sensitiveInformationPolicyConfig",
    U93 = "s3Location",
    re8 = "statusMessage",
    Zt1 = "sourceModelArn",
    wt8 = "sourceModelArnEquals",
    p93 = "selectiveModeConfiguration",
    oe8 = "sourceModelName",
    d93 = "sageMaker",
    c93 = "selectionMode",
    AG = "sortOrder",
    l93 = "s3OutputDataConfig",
    i93 = "supportingRules",
    n93 = "statusReasons",
    r93 = "stopSequences",
    o93 = "sourceType",
    Ht8 = "submitTimeAfter",
    Jt8 = "submitTimeBefore",
    ae8 = "submitTime",
    a93 = "supportTerm",
    JQ = "s3Uri",
    s93 = "stringValue",
    t93 = "startsWith",
    e93 = "satisfiable",
    AY3 = "scenario",
    se8 = "server",
    te8 = "smithy.ts.sdk.synthetic.com.amazonaws.bedrock",
    KY3 = "sources",
    qY3 = "statements",
    V41 = "translation",
    YY3 = "translationAmbiguous",
    zY3 = "typeCount",
    P8A = "testCaseId",
    wY3 = "testCaseIds",
    ee8 = "testCase",
    HY3 = "testCases",
    AA4 = "tierConfig",
    JY3 = "topicsConfig",
    OY3 = "tooComplex",
    XY3 = "termDetails",
    Wt1 = "trainingDataConfig",
    $Y3 = "textDataDeliveryEnabled",
    Dt1 = "timeoutDurationInHours",
    _Y3 = "trainingDetails",
    GY3 = "typeEquals",
    ZY3 = "testFindings",
    WY3 = "textInferenceConfig",
    DY3 = "tagKeys",
    jY3 = "trainingLoss",
    KA4 = "trainingMetrics",
    qA4 = "targetModelArn",
    MY3 = "teacherModelConfig",
    PY3 = "teacherModelIdentifier",
    YA4 = "targetModelKmsKeyArn",
    jt1 = "targetModelName",
    VY3 = "targetModelNameContains",
    Mt1 = "targetModelTags",
    fY3 = "typeName",
    f41 = "tierName",
    NY3 = "topicPolicy",
    zA4 = "topicPolicyConfig",
    TY3 = "textPromptTemplate",
    vY3 = "topP",
    EY3 = "testResult",
    kY3 = "testRunResult",
    CY3 = "testRunStatus",
    LY3 = "testResults",
    RY3 = "taskType",
    _y = "tags",
    Pt1 = "text",
    yY3 = "temperature",
    wA4 = "threshold",
    HA4 = "tier",
    IY3 = "topics",
    SY3 = "translations",
    sw = "type",
    hY3 = "types",
    bY3 = "unit",
    i0 = "updatedAt",
    xY3 = "usageBasedPricingTerm",
    uY3 = "untranslatedClaims",
    BY3 = "updateFromRulesFeedback",
    mY3 = "updateFromScenarioFeedback",
    gY3 = "untranslatedPremises",
    FY3 = "usePromptResponse",
    JA4 = "updateRule",
    QY3 = "unusedTypes",
    UY3 = "unusedTypeValues",
    pY3 = "updateTypeValue",
    OA4 = "updateType",
    dY3 = "unusedVariables",
    XA4 = "updateVariable",
    cY3 = "url",
    lY3 = "uri",
    Vt1 = "values",
    iY3 = "variableCount",
    V8A = "vpcConfig",
    nY3 = "validationDetails",
    ft1 = "validationDataConfig",
    rY3 = "videoDataDeliveryEnabled",
    oY3 = "validationLoss",
    $A4 = "validationMetrics",
    aY3 = "valueName",
    sY3 = "vectorSearchConfiguration",
    tY3 = "validityTerm",
    f8A = "value",
    eY3 = "validators",
    A23 = "valid",
    _A4 = "variable",
    GA4 = "variables",
    Ax = "version",
    K23 = "vpc",
    q23 = "words",
    Y23 = "workflowContent",
    z23 = "wordsConfig",
    w23 = "wordPolicy",
    ZA4 = "wordPolicyConfig",
    H23 = "x-amz-client-token",
    WA = "com.amazonaws.bedrock",
    J23 = [0, WA, Wo5, 8, 0],
    WA4 = [0, WA, jo5, 8, 0],
    DA4 = [0, WA, Po5, 8, 0],
    O23 = [0, WA, Vo5, 8, 0],
    X23 = [0, WA, Eo5, 8, 0],
    $23 = [0, WA, Io5, 8, 21],
    jA4 = [0, WA, So5, 8, 0],
    MA4 = [0, WA, ho5, 8, 0],
    _23 = [0, WA, eo5, 8, 0],
    Nt1 = [0, WA, Aa5, 8, 0],
    Tt1 = [0, WA, Ja5, 8, 0],
    sb = [0, WA, $a5, 8, 0],
    vt1 = [0, WA, Za5, 8, 0],
    Et1 = [0, WA, fa5, 8, 0],
    j8A = [0, WA, va5, 8, 0],
    lOA = [0, WA, ro5, 8, 0],
    Pn = [0, WA, Sa5, 8, 0],
    G23 = [0, WA, xa5, 8, 0],
    PA4 = [0, WA, ua5, 8, 0],
    N41 = [0, WA, Qa5, 8, 0],
    T41 = [0, WA, pa5, 8, 0],
    Z23 = [0, WA, qs5, 8, 21],
    W23 = [0, WA, Ce5, 8, 0],
    VA4 = [0, WA, ye5, 8, 0],
    bLA = [0, WA, Ie5, 8, 0],
    D23 = [0, WA, Be5, 8, 0],
    fA4 = [0, WA, ge5, 8, 0],
    j23 = [0, WA, me5, 8, 0],
    QOA = [0, WA, RA3, 8, 0],
    Y41 = [0, WA, SA3, 8, 0],
    NA4 = [0, WA, BA3, 8, 0],
    TA4 = [0, WA, gA3, 8, 0],
    xLA = [0, WA, q13, 8, 0],
    M23 = [0, WA, G13, 8, 0],
    P23 = [0, WA, v13, 8, 0],
    v41 = [0, WA, n13, 8, 0],
    V23 = [0, WA, _63, 8, 0],
    z41 = [0, WA, D63, 8, 0],
    vA4 = [0, WA, P63, 8, 0],
    f23 = [0, WA, V63, 8, 0],
    EA4 = [0, WA, N63, 8, 0],
    kA4 = [0, WA, C63, 8, 0],
    Zn = [0, WA, h63, 8, 0],
    N23 = [0, WA, U63, 8, 0],
    T23 = [0, WA, d63, 8, 0],
    kt1 = [0, WA, o63, 8, 0],
    CA4 = [0, WA, D43, 8, 0],
    v23 = [0, WA, u43, 8, 0],
    Ct1 = [0, WA, i43, 8, 0],
    E23 = [0, WA, YK3, 8, 0],
    k23 = [-3, WA, pr5, {
      [tb]: Wn,
      [eb]: 403
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(k23, Gt8);
  var C23 = [3, WA, Ur5, 0, [$2, rq3], [0, 0]],
    L23 = [3, WA, dr5, 0, [it8, et8, Wq3], [[() => rA4, 0], () => R$3, [() => R23, 0]]],
    R23 = [3, WA, lr5, 0, [bt8, et8], [[() => wX3, 0], () => fw3]],
    y23 = [3, WA, ar5, 0, [V41, mt8, D41], [[() => uLA, 0], () => ht1, [() => E41, 0]]],
    I23 = [3, WA, tr5, 0, [Pt1], [[() => WA4, 0]]],
    S23 = [3, WA, sr5, 0, [V41, mt8, D41], [[() => uLA, 0], () => ht1, [() => E41, 0]]],
    E41 = [3, WA, Ao5, 0, [sw, be8, pt8], [0, [() => kLA, 0], [() => kLA, 0]]],
    h23 = [3, WA, Ko5, 0, [], []],
    b23 = [3, WA, qo5, 0, [Z41, w93], [0, 0]],
    x23 = [3, WA, wo5, 0, [V41, Ut8, _q3, D41], [[() => uLA, 0], [() => w41, 0], [() => w41, 0], [() => E41, 0]]],
    w41 = [3, WA, zo5, 0, [qY3], [[() => kLA, 0]]],
    u23 = [3, WA, Oo5, 0, [], []],
    uLA = [3, WA, Ho5, 0, [be8, pt8, gY3, uY3, Lq3], [[() => kLA, 0], [() => kLA, 0], [() => Ot8, 0], [() => Ot8, 0], 1]],
    B23 = [3, WA, Jo5, 0, [u33, mq3], [[() => XX3, 0], [() => HX3, 0]]],
    m23 = [3, WA, $o5, 0, [SY3], [[() => OX3, 0]]],
    g23 = [3, WA, Go5, 0, [V41, Ut8, i93, D41], [[() => uLA, 0], [() => w41, 0], () => ht1, [() => E41, 0]]],
    F23 = [3, WA, Zo5, 0, [a53, Re8], [[() => J23, 0], [() => WA4, 0]]],
    Q23 = [3, WA, No5, 0, [_41], [[() => Nt1, 0]]],
    U23 = [3, WA, To5, 0, [Re8], [[() => X23, 0]]],
    p23 = [3, WA, vo5, 0, [Fe8], [[() => k41, 0]]],
    d23 = [3, WA, ko5, 0, [Dz, RY, Vt1], [[() => sb, 0], [() => Tt1, 0], [() => iA4, 0]]],
    c23 = [3, WA, Co5, 0, [sw], [[() => C41, 0]]],
    l23 = [3, WA, Lo5, 0, [f8A, RY], [0, [() => vt1, 0]]],
    i23 = [3, WA, Ro5, 0, [Dz, sw, RY], [[() => j8A, 0], [() => sb, 0], [() => Et1, 0]]],
    n23 = [3, WA, yo5, 0, [_A4], [[() => L41, 0]]],
    r23 = [3, WA, bo5, 0, [Y53], [[() => $X3, 0]]],
    o23 = [3, WA, xo5, 0, [QK3, $2, Oq3], [[() => tA4, 0], 0, [() => _X3, 0]]],
    a23 = [3, WA, mo5, 0, [yq3, o33, R33], [[() => f$3, 0], [() => N$3, 0], () => GX3]],
    s23 = [3, WA, Qo5, 0, [CV, v33], [0, 0]],
    t23 = [3, WA, po5, 0, [pq3, dt8, rt8, ct8], [[() => $23, 0], 0, [() => MA4, 0], [() => jA4, 0]]],
    e23 = [3, WA, co5, 0, [us1], [[() => bt1, 0]]],
    Az3 = [3, WA, lo5, 0, [SLA, Y23], [[() => BLA, 0], [() => E$3, 0]]],
    Kz3 = [3, WA, io5, 0, [f3, ND, $2, gs1, KG, i0], [0, 0, 0, 0, 5, 5]],
    BLA = [3, WA, ka5, 0, [Ax, hY3, de8, GA4], [0, [() => jX3, 0], [() => DX3, 0], [() => VX3, 0]]],
    qz3 = [3, WA, ao5, 0, [zY3, iY3, Z93, QY3, UY3, dY3, Eq3, Bq3], [1, 1, 1, [() => MX3, 0], [() => PX3, 0], [() => nA4, 0], 64, [() => fX3, 0]]],
    k41 = [3, WA, so5, 0, [Z41, _41, vt8], [0, [() => Nt1, 0], [() => _23, 0]]],
    C41 = [3, WA, wa5, 0, [Dz, RY, Vt1], [[() => sb, 0], [() => Tt1, 0], [() => iA4, 0]]],
    Yz3 = [3, WA, Ga5, 0, [f8A, RY], [0, [() => vt1, 0]]],
    zz3 = [3, WA, Da5, 0, [fY3, aY3], [[() => sb, 0], 0]],
    L41 = [3, WA, Pa5, 0, [Dz, sw, RY], [[() => j8A, 0], [() => sb, 0], [() => Et1, 0]]],
    wz3 = [3, WA, to5, 0, [Qe8], [0]],
    Hz3 = [3, WA, qa5, 0, [Z41], [0]],
    Jz3 = [3, WA, Ha5, 0, [Dz], [[() => sb, 0]]],
    Oz3 = [3, WA, Xa5, 0, [Dz], [[() => sb, 0]]],
    Xz3 = [3, WA, Ma5, 0, [f8A], [0]],
    $z3 = [3, WA, Va5, 0, [Dz], [[() => j8A, 0]]],
    _z3 = [3, WA, Ta5, 0, [Dz], [[() => j8A, 0]]],
    Gz3 = [3, WA, Ya5, 0, [GA4, de8], [[() => nA4, 0], 64]],
    Zz3 = [3, WA, Ca5, 0, [P41, G41, $41], [[() => T41, 0], [() => N41, 0], 0]],
    Wz3 = [3, WA, Ra5, 0, [Xe8], [[() => NX3, 0]]],
    Dz3 = [3, WA, ya5, 0, [Iq3], [[() => O23, 0]]],
    jz3 = [3, WA, ha5, 0, [], []],
    Mz3 = [3, WA, ba5, 0, [_41, vt8, Gt1, sq3], [[() => PA4, 0], [() => G23, 0], 64, 0]],
    Pz3 = [3, WA, Ba5, 0, [f3, Dz, RY, Ax, xe8, KG, i0], [0, [() => Pn, 0], [() => lOA, 0], 0, 0, 5, 5]],
    Lt1 = [3, WA, ga5, 0, [P8A, G41, P41, $41, KG, i0, CLA], [0, [() => N41, 0], [() => T41, 0], 0, 5, 5, 1]],
    LA4 = [3, WA, da5, 0, [ee8, f3, CY3, ZY3, kY3, oK3, i0], [[() => Lt1, 0], 0, 0, [() => JX3, 0], 0, 0, 5]],
    Vz3 = [3, WA, ia5, 0, [Gt1, qe8], [64, [() => DA4, 0]]],
    fz3 = [3, WA, na5, 0, [Gt1, x93, qe8], [64, [() => PA4, 0], [() => DA4, 0]]],
    Nz3 = [3, WA, ra5, 0, [Qe8, _41], [0, [() => Nt1, 0]]],
    Tz3 = [3, WA, oa5, 0, [Fe8], [[() => k41, 0]]],
    vz3 = [3, WA, aa5, 0, [Dz, ye8, RY, Vt1], [[() => sb, 0], [() => sb, 0], [() => Tt1, 0], [() => kX3, 0]]],
    Ez3 = [3, WA, sa5, 0, [sw], [[() => C41, 0]]],
    kz3 = [3, WA, ta5, 0, [f8A, x33, RY], [0, 0, [() => vt1, 0]]],
    Cz3 = [3, WA, ea5, 0, [Dz, ye8, RY], [[() => j8A, 0], [() => j8A, 0], [() => Et1, 0]]],
    Lz3 = [3, WA, As5, 0, [_A4], [[() => L41, 0]]],
    Rz3 = [3, WA, ws5, 0, [HQ, Rq3, CV], [[() => bLA, 0], 0, 0]],
    yz3 = [3, WA, Js5, 0, [HQ, d53], [[() => bLA, 0], 0]],
    Iz3 = [3, WA, Xs5, 0, [p53], [[() => hX3, 0]]],
    Sz3 = [3, WA, $s5, 0, [z53, nq3], [[() => CX3, 0], [() => LX3, 0]]],
    hz3 = [3, WA, _s5, 0, [jn], [0]],
    bz3 = [3, WA, Ys5, 0, [g53, kq3, Fq3], [[() => T23, 0], 0, [() => Z23, 0]]],
    xz3 = [3, WA, Ds5, 0, [f3, ND], [[0, 1], [0, 1]]],
    uz3 = [3, WA, js5, 0, [], []],
    Bz3 = [3, WA, Et5, 0, [e53, $y, t53], [0, 0, () => dA4]],
    mz3 = [-3, WA, hs5, {
      [tb]: Wn,
      [eb]: 400
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(mz3, Mt8);
  var gz3 = [3, WA, Ms5, 0, [Dz, RY, JO, SLA, At1, _y], [[() => Pn, 0], [() => lOA, 0], [0, 4], [() => BLA, 0], 0, () => lX]],
    Fz3 = [3, WA, Ps5, 0, [f3, Ax, Dz, RY, X41, KG, i0], [0, 0, [() => Pn, 0], [() => lOA, 0], 0, 5, 5]],
    Qz3 = [3, WA, fs5, 0, [f3, G41, P41, $41, JO, CLA], [[0, 1], [() => N41, 0], [() => T41, 0], 0, [0, 4], 1]],
    Uz3 = [3, WA, Ns5, 0, [f3, P8A], [0, 0]],
    pz3 = [3, WA, vs5, 0, [f3, JO, z33, _y], [[0, 1], [0, 4], 0, () => lX]],
    dz3 = [3, WA, Es5, 0, [f3, Ax, Dz, RY, X41, KG], [0, 0, [() => Pn, 0], [() => lOA, 0], 0, 5]],
    cz3 = [3, WA, Rs5, 0, [Ce8, YG, RY, _y, JO], [0, 0, 0, () => lX, [0, 4]]],
    lz3 = [3, WA, ys5, 0, [Us1], [0]],
    iz3 = [3, WA, Is5, 0, [M8A, N33, qt1, $y, k33, JO], [0, () => I41, 0, 0, () => lX, [0, 4]]],
    nz3 = [3, WA, Ss5, 0, [YG], [0]],
    rz3 = [3, WA, xs5, 0, [kV, Pe8, JO, $y, It8, ts1, xs1, tt8, $e8, Mn], [0, [() => VA4, 0], [0, 4], 0, 0, () => lX, 0, [() => eA4, 0], [() => A14, 0], () => RA4]],
    oz3 = [3, WA, us5, 0, [qG], [0]],
    az3 = [3, WA, ms5, 0, [he8, $T], [0, 0]],
    sz3 = [3, WA, gs5, 0, [$T], [0]],
    tz3 = [3, WA, Qs5, 0, [Dz, RY, zA4, Bt8, ZA4, ne8, ht8, kt8, gt8, Bs1, ms1, At1, _y, JO], [[() => v41, 0], [() => xLA, 0], [() => mA4, 0], [() => hA4, 0], [() => gA4, 0], () => BA4, [() => bA4, 0], () => IA4, () => xA4, [() => QOA, 0], [() => QOA, 0], 0, () => lX, [0, 4]]],
    ez3 = [3, WA, Us5, 0, [RLA, is1, Ax, KG], [0, 0, 0, 5]],
    Aw3 = [3, WA, ds5, 0, [FOA, RY, JO], [[0, 1], [() => xLA, 0], [0, 4]]],
    Kw3 = [3, WA, cs5, 0, [RLA, Ax], [0, 0]],
    qw3 = [3, WA, is5, 0, [ss1, RY, JO, f33, _y], [0, [() => kt1, 0], [0, 4], () => y$3, () => lX]],
    Yw3 = [3, WA, ns5, 0, [as1, $2], [0, 0]],
    zw3 = [3, WA, Zt5, 0, [ILA, ds1, dK3, aq3, JO, _y], [0, () => Bt1, 2, 0, [0, 4], () => lX]],
    ww3 = [3, WA, Wt5, 0, [j41], [() => R41]],
    Hw3 = [3, WA, ss5, 0, [Zt1, jt1, j33, Mt1, JO], [0, 0, 0, () => lX, [0, 4]]],
    Jw3 = [3, WA, ts5, 0, [qG], [0]],
    Ow3 = [3, WA, es5, 0, [kV, ut8, $y, JO, Yq3, LLA, Pq3, ts1, Vq3, Wt1, ft1, Mn, ns1, V8A, Fs1], [0, 0, 0, [0, 4], 0, 0, 0, () => lX, () => lX, [() => It1, 0], () => St1, () => Rt1, 128, () => Vn, () => ut1]],
    Xw3 = [3, WA, At5, 0, [qG], [0]],
    $w3 = [3, WA, Jt5, 0, [kV, os1, $y, Kt1, ts1, h53, JO, V8A, S53], [0, 0, 0, () => I41, () => lX, () => lX, 0, () => Vn, 0]],
    _w3 = [3, WA, Ot5, 0, [qG], [0]],
    Gw3 = [3, WA, Xt5, 0, [kV, $y, JO, $T, rs1, Mn, V8A, Dt1, _y], [0, 0, [0, 4], 0, () => mt1, () => gt1, () => Vn, 1, () => lX]],
    Zw3 = [3, WA, $t5, 0, [qG], [0]],
    Ww3 = [3, WA, Tt5, 0, [JO, Xt1, cOA, RY, _t1, ls1, _y], [[0, 4], 0, () => xt1, [() => Ct1, 0], () => yt1, () => y41, () => lX]],
    Dw3 = [3, WA, vt5, 0, [hLA], [0]],
    jw3 = [3, WA, Vt5, 0, [JO, zt1, Ot1, $T, Qs1, _y], [[0, 4], 1, 0, 0, 0, () => lX]],
    Mw3 = [3, WA, ft5, 0, [Ht1], [0]],
    Pw3 = [3, WA, rs5, 0, [jn], [0]],
    Vw3 = [3, WA, qt5, 8, [Dz, Me8, L93], [[() => v23, 0], 0, () => D$3]],
    fw3 = [3, WA, wt5, 0, [yt8], [() => yX3]],
    Nw3 = [3, WA, Yt5, 0, [Us1, jq3, YG, KG, $2, yLA, Dn], [0, 0, 0, 5, 0, 5, 0]],
    Tw3 = [3, WA, Dt5, 0, [YG, M8A, yZ, O41, wq3, LLA, B33, q41], [0, 0, 5, 0, 0, 0, 0, 0]],
    vw3 = [3, WA, Mt5, 0, [Nq3, Tq3], [1, 0]],
    Ew3 = [3, WA, Oe5, 0, [$2, yZ, _k], [0, 5, 5]],
    kw3 = [3, WA, Lt5, 0, [f3, ND, yLA], [[0, 1], [0, 1], [5, {
      [P8]: i0
    }]]],
    Cw3 = [3, WA, Rt5, 0, [], []],
    Lw3 = [3, WA, yt5, 0, [f3, Kt8], [[0, 1], [2, {
      [P8]: Kt8
    }]]],
    Rw3 = [3, WA, It5, 0, [], []],
    yw3 = [3, WA, ht5, 0, [f3, P8A, yLA], [[0, 1], [0, 1], [5, {
      [P8]: i0
    }]]],
    Iw3 = [3, WA, bt5, 0, [], []],
    Sw3 = [3, WA, mt5, 0, [xt8], [[0, 1]]],
    hw3 = [3, WA, gt5, 0, [], []],
    bw3 = [3, WA, Ft5, 0, [jn], [[0, 1]]],
    xw3 = [3, WA, Qt5, 0, [], []],
    uw3 = [3, WA, pt5, 0, [$T], [0]],
    Bw3 = [3, WA, dt5, 0, [], []],
    mw3 = [3, WA, lt5, 0, [FOA, ELA], [[0, 1], [0, {
      [P8]: ELA
    }]]],
    gw3 = [3, WA, it5, 0, [], []],
    Fw3 = [3, WA, rt5, 0, [jn], [[0, 1]]],
    Qw3 = [3, WA, ot5, 0, [], []],
    Uw3 = [3, WA, st5, 0, [Ge8], [[0, 1]]],
    pw3 = [3, WA, tt5, 0, [], []],
    dw3 = [3, WA, Ye5, 0, [pOA], [[0, 1]]],
    cw3 = [3, WA, ze5, 0, [], []],
    lw3 = [3, WA, Ae5, 0, [], []],
    iw3 = [3, WA, Ke5, 0, [], []],
    nw3 = [3, WA, Ze5, 0, [hLA], [[0, 1]]],
    rw3 = [3, WA, We5, 0, [], []],
    ow3 = [3, WA, $e5, 0, [Jt1], [[0, 1]]],
    aw3 = [3, WA, _e5, 0, [], []],
    sw3 = [3, WA, we5, 0, [pOA], [[0, 1]]],
    tw3 = [3, WA, He5, 0, [], []],
    ew3 = [3, WA, Ge5, 0, [Uq3, J93, RY, bY3], [0, 0, 0, 0]],
    AH3 = [3, WA, xt5, 0, [MY3], [() => I03]],
    KH3 = [3, WA, Ve5, 0, [jn, b53, l33], [0, [() => j23, 0], () => rO3]],
    qH3 = [3, WA, Te5, 0, [Dz, hq3], [[() => W23, 0], () => k$3]],
    YH3 = [3, WA, Ee5, 0, [RY3, Qq3, P33], [0, [() => qH3, 0], [() => bX3, 0]]],
    zH3 = [3, WA, Re5, 0, [$33, W93], [() => wH3, () => XH3]],
    wH3 = [3, WA, be5, 0, [zq3, e33], [64, 64]],
    RA4 = [3, WA, Qe5, 0, [JQ], [0]],
    HH3 = [3, WA, Ue5, 0, [u53], [0]],
    JH3 = [3, WA, pe5, 0, [Ue8], [0]],
    OH3 = [3, WA, de5, 0, [Ue8], [0]],
    XH3 = [3, WA, le5, 0, [Aq3, z93], [64, 64]],
    $H3 = [3, WA, ie5, 0, [qG, kV, $2, yZ, fe8, q53, D33, N93, oq3, Mq3, T53, xs1], [0, 0, 0, 5, 0, 64, 64, 64, 64, 64, () => zH3, 0]],
    _H3 = [3, WA, Me5, 0, [f3], [[0, 1]]],
    GH3 = [3, WA, Pe5, 0, [SLA], [[() => BLA, 16]]],
    ZH3 = [3, WA, ae5, 0, [o93, U93, eK3], [0, () => G03, [() => bz3, 0]]],
    WH3 = [3, WA, ne5, 0, [Be8, Oe8, Te8, bs1], [[() => pA4, 0], () => SA4, () => FA4, 143]],
    DH3 = [3, WA, re5, 0, [YG, KY3, Je8], [0, [() => BX3, 0], [() => WH3, 0]]],
    jH3 = [3, WA, ee5, 0, [J53], [0]],
    Xy = [3, WA, te5, 0, [es1, f8A], [0, 15]],
    MH3 = [3, WA, KA3, 0, [YG, $T, M8A, ue8, W41, M41, pe8, Qt8, je8, Le8], [0, 0, 0, 0, 64, 64, 2, 64, 64, () => yA4]],
    yA4 = [3, WA, qA3, 0, [$2], [0]],
    PH3 = [3, WA, YA3, 0, [YG, $T, M8A, ue8, W41, M41, pe8, Qt8, je8, Le8], [0, 0, 0, 0, 64, 64, 2, 64, 64, () => yA4]],
    VH3 = [3, WA, yA3, 0, [Be8, Oe8, Te8, bs1], [[() => pA4, 0], () => SA4, () => FA4, 143]],
    fH3 = [3, WA, JA3, 0, [f3, ND], [[0, 1], [0, 1]]],
    NH3 = [3, WA, OA3, 0, [f3, Dz, ND, us1, Ct8, i0], [0, [() => Pn, 0], 0, [() => bt1, 0], 0, 5]],
    TH3 = [3, WA, $A3, 0, [f3, ND], [[0, 1], [0, 1]]],
    vH3 = [3, WA, WA3, 0, [f3, ND, $2, gs1, rt8, dt8, ct8, KG, i0], [0, 0, 0, 0, [() => MA4, 0], 0, [() => jA4, 0], 5, 5]],
    EH3 = [3, WA, GA3, 0, [f3, ND, is8], [[0, 1], [0, 1], [0, {
      [P8]: is8
    }]]],
    kH3 = [3, WA, ZA3, 0, [f3, ND, Xq3], [0, 0, [() => V$3, 0]]],
    CH3 = [3, WA, MA3, 0, [f3, ND], [[0, 1], [0, 1]]],
    LH3 = [3, WA, PA3, 0, [f3, AY3], [0, [() => Mz3, 0]]],
    RH3 = [3, WA, VA3, 0, [f3], [[0, 1]]],
    yH3 = [3, WA, fA3, 0, [f3, Dz, Ax, xe8, RY, X41, ve8, KG, i0], [0, [() => Pn, 0], 0, 0, [() => lOA, 0], 0, 0, 5, 5]],
    IH3 = [3, WA, TA3, 0, [f3, P8A], [[0, 1], [0, 1]]],
    SH3 = [3, WA, vA3, 0, [f3, ee8], [0, [() => Lt1, 0]]],
    hH3 = [3, WA, kA3, 0, [f3, ND, P8A], [[0, 1], [0, 1], [0, 1]]],
    bH3 = [3, WA, CA3, 0, [EY3], [[() => LA4, 0]]],
    xH3 = [3, WA, nA3, 0, [xt8], [[0, 1]]],
    uH3 = [3, WA, rA3, 0, [Us1, Ce8, YG, KG, $2, RY, Dn, yLA], [0, 0, 0, 5, 0, 0, 0, 5]],
    BH3 = [3, WA, oA3, 0, [jn], [[0, 1]]],
    mH3 = [3, WA, aA3, 0, [YG, M8A, kV, qG, O41, LLA, qt1, ns1, Wt1, ft1, Mn, KA4, $A4, yZ, Fs1, q41, Dn], [0, 0, 0, 0, 0, 0, 0, 128, [() => It1, 0], () => St1, () => Rt1, () => lA4, () => sA4, 5, () => ut1, 0, 0]],
    gH3 = [3, WA, z13, 0, [HQ], [[() => bLA, 1]]],
    FH3 = [3, WA, w13, 0, [kV, $2, qG, Pe8, $y, It8, fe8, xs1, tt8, $e8, Mn, yZ, _k, H53], [0, 0, 0, [() => VA4, 0], 0, 0, 0, 0, [() => eA4, 0], [() => A14, 0], () => RA4, 5, 5, 64]],
    QH3 = [3, WA, O13, 0, [$T], [[0, 1]]],
    UH3 = [3, WA, X13, 0, [$T, UK3, rK3, cq3, G93], [0, () => C23, 0, 0, 0]],
    pH3 = [3, WA, $13, 0, [jn], [[0, 1]]],
    dH3 = [3, WA, _13, 0, [G33], [() => MH3]],
    cH3 = [3, WA, D13, 0, [FOA, ELA], [[0, 1], [0, {
      [P8]: ELA
    }]]],
    lH3 = [3, WA, j13, 0, [Dz, RY, RLA, is1, Ax, $2, NY3, vq3, w23, Q93, Gq3, lK3, Ft8, KG, i0, n93, O53, Bs1, ms1, ve8], [[() => v41, 0], [() => xLA, 0], 0, 0, 0, 0, [() => bJ3, 0], [() => VJ3, 0], [() => gJ3, 0], () => yJ3, [() => TJ3, 0], () => WJ3, () => uA4, 5, 5, [() => oX3, 0], [() => pX3, 0], [() => QOA, 0], [() => QOA, 0], 0]],
    iH3 = [3, WA, P13, 0, [jn], [[0, 1]]],
    nH3 = [3, WA, V13, 0, [YG, M8A, kV, qG, Kt1, yZ, ke8, qt1, We8, fq3], [0, 0, 0, 0, () => I41, 5, 0, 0, 2, () => vw3]],
    rH3 = [3, WA, N13, 0, [Ge8], [[0, 1]]],
    oH3 = [3, WA, T13, 0, [ss1, RY, KG, i0, as1, cOA, Ze8, $2, sw], [0, [() => kt1, 0], 5, 5, 0, () => aA4, 0, 0, 0]],
    aH3 = [3, WA, Q13, 0, [pOA], [[0, 1]]],
    sH3 = [3, WA, U13, 0, [j41], [() => R41]],
    tH3 = [3, WA, k13, 0, [qG], [[0, 1]]],
    eH3 = [3, WA, C13, 0, [qG, $2, yZ, qA4, jt1, ce8, Zt1, YA4, Mt1, Dn, oe8], [0, 0, 5, 0, 0, 0, 0, 0, () => lX, 0, 0]],
    AJ3 = [3, WA, L13, 0, [HQ], [[0, 1]]],
    KJ3 = [3, WA, R13, 0, [qG, kV, U33, F33, JO, $y, $2, ie8, Dn, yZ, _k, dOA, O41, ns1, Wt1, ft1, Mn, LLA, Q33, KA4, $A4, V8A, Fs1], [0, 0, 0, 0, 0, 0, 0, () => cA4, 0, 5, 5, 5, 0, 128, [() => It1, 0], () => St1, () => Rt1, 0, 0, () => lA4, () => sA4, () => Vn, () => ut1]],
    qJ3 = [3, WA, S13, 0, [HQ], [[0, 1]]],
    YJ3 = [3, WA, h13, 0, [qG, kV, os1, _e8, $y, Kt1, $2, Dn, yZ, _k, dOA, V8A, I53], [0, 0, 0, 0, 0, () => I41, 0, 0, 5, 5, 5, () => Vn, 0]],
    zJ3 = [3, WA, b13, 0, [HQ], [[0, 1]]],
    wJ3 = [3, WA, x13, 0, [qG, kV, $T, JO, $y, $2, CV, ae8, _k, dOA, rs1, Mn, V8A, Dt1, Ve8], [0, 0, 0, 0, 0, 0, [() => CA4, 0], 5, 5, 5, () => mt1, () => gt1, () => Vn, 1, 5]],
    HJ3 = [3, WA, m13, 0, [], []],
    JJ3 = [3, WA, g13, 0, [Ee8], [() => UA4]],
    OJ3 = [3, WA, q63, 0, [hLA], [[0, 1]]],
    XJ3 = [3, WA, Y63, 0, [Xt1, _t1, RY, KG, i0, hLA, cOA, ls1, $2, sw], [0, () => yt1, [() => Ct1, 0], 5, 5, 0, () => xt1, () => y41, 0, 0]],
    $J3 = [3, WA, e13, 0, [Jt1], [[0, 1]]],
    _J3 = [3, WA, A63, 0, [zt1, nt8, Ot1, Ht1, YG, lt8, we8, $2, yZ, _k, Dn, Qs1, St8], [1, 1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5]],
    GJ3 = [3, WA, y63, 0, [], []],
    ZJ3 = [3, WA, I63, 0, [ze8], [21]],
    WJ3 = [3, WA, wA3, 0, [ge8, CLA], [64, 1]],
    IA4 = [3, WA, DA3, 0, [ge8, CLA], [64, 1]],
    SA4 = [3, WA, K13, 0, [RLA, ELA], [0, 0]],
    DJ3 = [3, WA, IA3, 0, [sw, De8, Se8, W41, M41, Xk, Gk, $k, Zk], [0, 0, 0, [() => H41, 0], [() => H41, 0], [() => Y41, 0], [() => Y41, 0], 2, 2]],
    jJ3 = [3, WA, hA3, 0, [sw, De8, Se8, W41, M41, Xk, Gk, $k, Zk], [0, 0, 0, [() => H41, 0], [() => H41, 0], [() => Y41, 0], [() => Y41, 0], 2, 2]],
    MJ3 = [3, WA, xA3, 0, [f41], [[() => NA4, 0]]],
    PJ3 = [3, WA, uA3, 0, [f41], [[() => NA4, 0]]],
    VJ3 = [3, WA, sA3, 0, [He8, HA4], [[() => gX3, 0], [() => MJ3, 0]]],
    hA4 = [3, WA, tA3, 0, [Ye8, AA4], [[() => FX3, 0], [() => PJ3, 0]]],
    fJ3 = [3, WA, FA3, 0, [sw, wA4, UOA, Ae8], [0, 1, [() => TA4, 0], 2]],
    NJ3 = [3, WA, QA3, 0, [sw, wA4, UOA, Ae8], [0, 1, [() => TA4, 0], 2]],
    TJ3 = [3, WA, dA3, 0, [He8], [[() => QX3, 0]]],
    bA4 = [3, WA, cA3, 0, [Ye8], [[() => UX3, 0]]],
    xA4 = [3, WA, eA3, 0, [D53], [0]],
    uA4 = [3, WA, A13, 0, [j53, W53], [0, 0]],
    vJ3 = [3, WA, p13, 0, [sw, Xk, Gk, $k, Zk], [0, [() => Zn, 0], [() => Zn, 0], 2, 2]],
    EJ3 = [3, WA, d13, 0, [sw, Xk, Gk, $k, Zk], [0, [() => Zn, 0], [() => Zn, 0], 2, 2]],
    kJ3 = [3, WA, r13, 0, [sw, UOA, Xk, Gk, $k, Zk], [0, 0, 0, 0, 2, 2]],
    CJ3 = [3, WA, o13, 0, [sw, UOA, Xk, Gk, $k, Zk], [0, 0, 0, 0, 2, 2]],
    LJ3 = [3, WA, z63, 0, [Dz, RY, me8, UOA, Xk, Gk, $k, Zk], [0, 0, 0, 0, 0, 0, 2, 2]],
    RJ3 = [3, WA, w63, 0, [Dz, RY, me8, UOA, Xk, Gk, $k, Zk], [0, 0, 0, 0, 0, 0, 2, 2]],
    yJ3 = [3, WA, X63, 0, [s33, y93], [() => lX3, () => nX3]],
    BA4 = [3, WA, $63, 0, [a33, M93], [() => iX3, () => rX3]],
    IJ3 = [3, WA, O63, 0, [Z41, sK3, $2, Dz, RY, Ax, KG, i0, Ft8], [0, 0, 0, [() => v41, 0], [() => xLA, 0], 0, 5, 5, () => uA4]],
    SJ3 = [3, WA, W63, 0, [Dz, ps1, Ke8, sw, Xk, Gk, $k, Zk], [[() => EA4, 0], [() => vA4, 0], [() => oA4, 0], 0, [() => z41, 0], [() => z41, 0], 2, 2]],
    hJ3 = [3, WA, j63, 0, [Dz, ps1, Ke8, sw, Xk, Gk, $k, Zk], [[() => EA4, 0], [() => vA4, 0], [() => oA4, 0], 0, [() => z41, 0], [() => z41, 0], 2, 2]],
    bJ3 = [3, WA, T63, 0, [IY3, HA4], [[() => sX3, 0], [() => xJ3, 0]]],
    mA4 = [3, WA, v63, 0, [JY3, AA4], [[() => tX3, 0], [() => uJ3, 0]]],
    xJ3 = [3, WA, E63, 0, [f41], [[() => kA4, 0]]],
    uJ3 = [3, WA, k63, 0, [f41], [[() => kA4, 0]]],
    BJ3 = [3, WA, S63, 0, [Pt1, Xk, Gk, $k, Zk], [0, [() => Zn, 0], [() => Zn, 0], 2, 2]],
    mJ3 = [3, WA, b63, 0, [Pt1, Xk, Gk, $k, Zk], [0, [() => Zn, 0], [() => Zn, 0], 2, 2]],
    gJ3 = [3, WA, u63, 0, [q23, C33], [[() => eX3, 0], [() => dX3, 0]]],
    gA4 = [3, WA, B63, 0, [z23, L33], [[() => A$3, 0], [() => cX3, 0]]],
    FJ3 = [3, WA, g63, 0, [N53, bt8, it8], [[() => UJ3, 0], [() => K$3, 0], [() => rA4, 0]]],
    QJ3 = [3, WA, F63, 0, [Dz, RY, T93], [[() => fA4, 0], [() => D23, 0], 0]],
    UJ3 = [3, WA, p63, 0, [w53, Me8], [0, [() => N23, 0]]],
    pJ3 = [3, WA, c63, 0, [H33, YG], [[() => w$3, 0], 0]],
    dJ3 = [3, WA, n63, 0, [YG, M8A, yZ, We8, ke8], [0, 0, 5, 2, 0]],
    cJ3 = [3, WA, a63, 0, [YG], [0]],
    lJ3 = [3, WA, e63, 0, [ss1, RY, KG, i0, as1, cOA, Ze8, $2, sw], [0, [() => kt1, 0], 5, 5, 0, () => aA4, 0, 0, 0]],
    iJ3 = [-3, WA, K83, {
      [tb]: se8,
      [eb]: 500
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(iJ3, Zt8);
  var nJ3 = [3, WA, l63, 0, [FY3, y53, v93], [2, () => I$3, [() => x$3, 0]]],
    FA4 = [3, WA, H83, 0, [WY3], [() => h03]],
    QA4 = [3, WA, z83, 0, [sY3], [[() => oJ3, 0]]],
    rJ3 = [3, WA, Y83, 0, [Ne8, YG, V93, Je8, m33], [0, 0, [() => QA4, 0], [() => VH3, 0], () => nO3]],
    oJ3 = [3, WA, w83, 0, [S33, d33, G53, k53, P93], [1, 0, [() => K14, 0], [() => pJ3, 0], [() => YX3, 0]]],
    aJ3 = [3, WA, _43, 0, [cY3], [0]],
    sJ3 = [3, WA, _83, 0, [f3, Zq, GY], [[0, {
      [P8]: f3
    }], [0, {
      [P8]: Zq
    }], [1, {
      [P8]: GY
    }]]],
    tJ3 = [3, WA, G83, 0, [nK3, Zq], [[() => TX3, 0], 0]],
    eJ3 = [3, WA, X83, 0, [f3, Zq, GY], [[0, 1], [0, {
      [P8]: Zq
    }], [1, {
      [P8]: GY
    }]]],
    AO3 = [3, WA, $83, 0, [iK3, Zq], [() => WX3, 0]],
    KO3 = [3, WA, W83, 0, [f3, Zq, GY], [[0, 1], [0, {
      [P8]: Zq
    }], [1, {
      [P8]: GY
    }]]],
    qO3 = [3, WA, D83, 0, [HY3, Zq], [[() => vX3, 0], 0]],
    YO3 = [3, WA, M83, 0, [f3, ND, Zq, GY], [[0, 1], [0, 1], [0, {
      [P8]: Zq
    }], [1, {
      [P8]: GY
    }]]],
    zO3 = [3, WA, P83, 0, [LY3, Zq], [[() => EX3, 0], 0]],
    wO3 = [3, WA, T83, 0, [es8, ts8, fD, GY, Zq, e_, AG, EV, K41], [[5, {
      [P8]: es8
    }], [5, {
      [P8]: ts8
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: K41
    }]]],
    HO3 = [3, WA, v83, 0, [Zq, Z33], [0, () => IX3]],
    JO3 = [3, WA, E83, 0, [vV, TV, fD, os8, At8, GY, Zq, e_, AG, qt8, q41], [[5, {
      [P8]: vV
    }], [5, {
      [P8]: TV
    }], [0, {
      [P8]: fD
    }], [0, {
      [P8]: os8
    }], [0, {
      [P8]: At8
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }], [2, {
      [P8]: qt8
    }], [0, {
      [P8]: q41
    }]]],
    OO3 = [3, WA, k83, 0, [Zq, Yt1], [0, () => SX3]],
    XO3 = [3, WA, L83, 0, [TV, vV, EV, ls8, fD, GY, Zq, e_, AG], [[5, {
      [P8]: TV
    }], [5, {
      [P8]: vV
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: ls8
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    $O3 = [3, WA, R83, 0, [Zq, c53], [0, () => uX3]],
    _O3 = [3, WA, S83, 0, [$T, Yt8], [[0, 1], [0, {
      [P8]: Yt8
    }]]],
    GO3 = [3, WA, h83, 0, [$T, c33], [0, () => $$3]],
    ZO3 = [3, WA, b83, 0, [ss8, ns8, as8, rs8], [[0, {
      [P8]: ss8
    }], [0, {
      [P8]: ns8
    }], [0, {
      [P8]: as8
    }], [0, {
      [P8]: rs8
    }]]],
    WO3 = [3, WA, x83, 0, [Yt1], [() => mX3]],
    DO3 = [3, WA, B83, 0, [FOA, GY, Zq], [[0, {
      [P8]: FOA
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }]]],
    jO3 = [3, WA, m83, 0, [Z53, Zq], [[() => aX3, 0], 0]],
    MO3 = [3, WA, F83, 0, [vV, TV, fD, GY, Zq, e_, AG], [[5, {
      [P8]: vV
    }], [5, {
      [P8]: TV
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    PO3 = [3, WA, Q83, 0, [Zq, Yt1], [0, () => q$3]],
    VO3 = [3, WA, p83, 0, [GY, Zq, GY3], [[1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: sw
    }]]],
    fO3 = [3, WA, d83, 0, [x53, Zq], [[() => Y$3, 0], 0]],
    NO3 = [3, WA, Y43, 0, [GY, Zq, T33], [[1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: ILA
    }]]],
    TO3 = [3, WA, z43, 0, [M33, Zq], [() => z$3, 0]],
    vO3 = [3, WA, l83, 0, [TV, vV, EV, zt8, wt8, VY3, GY, Zq, e_, AG], [[5, {
      [P8]: TV
    }], [5, {
      [P8]: vV
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: zt8
    }], [0, {
      [P8]: wt8
    }], [0, {
      [P8]: p33
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    EO3 = [3, WA, i83, 0, [Zq, O33], [0, () => H$3]],
    kO3 = [3, WA, n83, 0, [TV, vV, EV, fD, GY, Zq, e_, AG], [[5, {
      [P8]: TV
    }], [5, {
      [P8]: vV
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    CO3 = [3, WA, r83, 0, [Zq, X33], [0, () => J$3]],
    LO3 = [3, WA, s83, 0, [TV, vV, EV, fD, GY, Zq, e_, AG], [[5, {
      [P8]: TV
    }], [5, {
      [P8]: vV
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    RO3 = [3, WA, t83, 0, [Zq, W33], [0, () => O$3]],
    yO3 = [3, WA, e83, 0, [Ht8, Jt8, EV, fD, GY, Zq, e_, AG], [[5, {
      [P8]: Ht8
    }], [5, {
      [P8]: Jt8
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    IO3 = [3, WA, A43, 0, [Zq, L53], [0, [() => X$3, 0]]],
    SO3 = [3, WA, X43, 0, [GY, Zq, sw], [[1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: sw
    }]]],
    hO3 = [3, WA, $43, 0, [q93, Zq], [[() => _$3, 0], 0]],
    bO3 = [3, WA, H43, 0, [TV, vV, EV, K41, fD, GY, Zq, e_, AG], [[5, {
      [P8]: TV
    }], [5, {
      [P8]: vV
    }], [0, {
      [P8]: EV
    }], [0, {
      [P8]: K41
    }], [0, {
      [P8]: fD
    }], [1, {
      [P8]: GY
    }], [0, {
      [P8]: Zq
    }], [0, {
      [P8]: e_
    }], [0, {
      [P8]: AG
    }]]],
    xO3 = [3, WA, J43, 0, [Zq, A93], [0, () => G$3]],
    uO3 = [3, WA, Z43, 0, [$t1], [0]],
    BO3 = [3, WA, W43, 0, [_y], [() => lX]],
    UA4 = [3, WA, V83, 0, [Cq3, I93, $Y3, E53, lq3, rY3], [() => Bz3, () => dA4, 2, 2, 2, 2]],
    R41 = [3, WA, h43, 0, [pOA, ILA, $2, re8, KG, i0, ds1, eq3, K53], [0, 0, 0, 0, 5, 5, () => Bt1, 0, 0]],
    mO3 = [3, WA, b43, 0, [pOA, ILA, $2, re8, KG, i0], [0, 0, 0, 0, 5, 5]],
    gO3 = [3, WA, j43, 8, [es1, sw, RY], [0, 0, 0]],
    FO3 = [3, WA, P43, 0, [c93, p93], [0, [() => u$3, 0]]],
    QO3 = [3, WA, V43, 0, [qG, $2, yZ, qA4, jt1, ce8, Zt1, YA4, Mt1, Dn, oe8], [0, 0, 5, 0, 0, 0, 0, 0, () => lX, 0, 0]],
    UO3 = [3, WA, f43, 0, [qG, O41, kV, $2, ie8, _k, yZ, dOA, Zq3, ut8, LLA], [0, 0, 0, 0, () => cA4, 5, 5, 5, 0, 0, 0]],
    pO3 = [3, WA, C43, 0, [qG, kV, $2, _k, yZ, dOA, _e8, os1], [0, 0, 0, 5, 5, 5, 0, 0]],
    dO3 = [3, WA, L43, 0, [F93, JQ, le8], [0, 0, 0]],
    cO3 = [3, WA, R43, 0, [JQ, u93, le8], [0, 0, 0]],
    lO3 = [3, WA, y43, 0, [qG, kV, $T, JO, $y, $2, CV, ae8, _k, dOA, rs1, Mn, V8A, Dt1, Ve8], [0, 0, 0, 0, 0, 0, [() => CA4, 0], 5, 5, 5, () => mt1, () => gt1, () => Vn, 1, 5]],
    iO3 = [3, WA, B43, 0, [g33, he8, XY3], [0, 0, () => S03]],
    nO3 = [3, WA, m43, 0, [X93], [() => q03]],
    Rt1 = [3, WA, g43, 0, [JQ], [0]],
    rO3 = [3, WA, Q43, 0, [w33], [0]],
    oO3 = [3, WA, s43, 0, [D93], [() => W$3]],
    aO3 = [3, WA, n43, 0, [Xt1, _t1, RY, KG, i0, hLA, cOA, ls1, $2, sw], [0, () => yt1, [() => Ct1, 0], 5, 5, 0, () => xt1, () => y41, 0, 0]],
    y41 = [3, WA, o43, 0, [YG], [0]],
    pA4 = [3, WA, t43, 0, [TY3], [[() => E23, 0]]],
    sO3 = [3, WA, c43, 0, [Ot1, Ht1, YG, lt8, we8, zt1, nt8, $2, Qs1, St8, yZ, _k], [0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 5, 5]],
    tO3 = [3, WA, p43, 0, [Ee8], [() => UA4]],
    eO3 = [3, WA, d43, 0, [], []],
    A03 = [3, WA, A73, 0, [ze8], [21]],
    K03 = [3, WA, K73, 0, [], []],
    q03 = [3, WA, q73, 0, [sw], [0]],
    Y03 = [3, WA, T73, 0, [ps1, f8A], [0, () => b$3]],
    z03 = [3, WA, M73, 0, [iq3, ILA], [[0, 1], 0]],
    w03 = [3, WA, P73, 0, [j41], [() => R41]],
    H03 = [3, WA, G73, 0, [cs1, wt1], [[() => J41, 0], [() => J41, 0]]],
    J03 = [-3, WA, _73, {
      [tb]: Wn,
      [eb]: 400
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(J03, ft8);
  var O03 = [-3, WA, f73, {
    [tb]: Wn,
    [eb]: 404
  }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(O03, Wt8);
  var X03 = [3, WA, Y73, 0, [sw, l53, A53], [0, [() => rJ3, 0], [() => DH3, 0]]],
    $03 = [3, WA, w73, 0, [Ne8, n53], [0, [() => QA4, 0]]],
    yt1 = [3, WA, O73, 0, [C93], [1]],
    dA4 = [3, WA, I73, 0, [Hq3, o53], [0, 0]],
    _03 = [3, WA, h73, 0, [JQ], [0]],
    G03 = [3, WA, d73, 0, [lY3], [0]],
    Z03 = [3, WA, F73, 0, [C53, B53, tq3, r53, K23], [1, 0, 0, 0, () => Vn]],
    W03 = [-3, WA, c73, {
      [tb]: Wn,
      [eb]: 400
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(W03, Pt8);
  var D03 = [-3, WA, i73, {
    [tb]: se8,
    [eb]: 503
  }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(D03, Nt8);
  var j03 = [3, WA, k73, 0, [f3, gs1, JO, S93], [[0, 1], [0, 1], [0, {
      [f53]: H23,
      [m53]: 1
    }], [() => Az3, 16]]],
    M03 = [3, WA, C73, 0, [f3, ND], [0, 0]],
    P03 = [3, WA, R73, 0, [f3, ND, wY3, JO], [[0, 1], [0, 1], 64, [0, 4]]],
    V03 = [3, WA, y73, 0, [f3], [0]],
    cA4 = [3, WA, S73, 0, [nY3, xq3, _Y3], [() => a03, () => Ew3, () => u03]],
    f03 = [3, WA, x73, 0, [HQ], [[() => bLA, 1]]],
    N03 = [3, WA, u73, 0, [], []],
    T03 = [3, WA, m73, 0, [HQ], [[0, 1]]],
    v03 = [3, WA, g73, 0, [], []],
    E03 = [3, WA, U73, 0, [HQ], [[0, 1]]],
    k03 = [3, WA, p73, 0, [], []],
    C03 = [3, WA, l73, 0, [k93], [0]],
    L03 = [3, WA, n73, 0, [es1, f8A], [0, 0]],
    R03 = [3, WA, wK3, 0, [$t1, _y], [0, () => lX]],
    y03 = [3, WA, HK3, 0, [], []],
    I03 = [3, WA, KK3, 0, [PY3, V33], [0, 1]],
    S03 = [3, WA, r73, 0, [xY3, A33, a93, tY3], [() => oO3, () => aJ3, () => C03, () => AX3]],
    h03 = [3, WA, t73, 0, [yY3, vY3, E33, r93], [1, 1, 1, 64]],
    b03 = [-3, WA, s73, {
      [tb]: Wn,
      [eb]: 429
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(b03, Dt8);
  var x03 = [-3, WA, qK3, {
    [tb]: Wn,
    [eb]: 400
  }, [CV, E93], [0, 0]];
  Jk.TypeRegistry.for(WA).registerError(x03, Vt8);
  var It1 = [3, WA, o73, 0, [JQ, R53], [0, [() => nJ3, 0]]],
    u03 = [3, WA, a73, 0, [$2, yZ, _k], [0, 5, 5]],
    lA4 = [3, WA, AK3, 0, [jY3], [1]],
    B03 = [3, WA, CK3, 0, [$t1, DY3], [0, 64]],
    m03 = [3, WA, LK3, 0, [], []],
    g03 = [3, WA, XK3, 0, [f3, ND, us1, Y33], [[0, 1], [0, 1], [() => bt1, 0], 0]],
    F03 = [3, WA, $K3, 0, [f3, ND, Ct8, i0], [0, 0, 0, 5]],
    Q03 = [3, WA, _K3, 0, [f3, SLA, Dz, RY], [[0, 1], [() => BLA, 0], [() => Pn, 0], [() => lOA, 0]]],
    U03 = [3, WA, GK3, 0, [f3, Dz, X41, i0], [0, [() => Pn, 0], 0, 5]],
    p03 = [3, WA, WK3, 0, [f3, P8A, G41, P41, yLA, $41, CLA, JO], [[0, 1], [0, 1], [() => N41, 0], [() => T41, 0], 5, 0, 1, [0, 4]]],
    d03 = [3, WA, DK3, 0, [f3, P8A], [0, 0]],
    c03 = [3, WA, MK3, 0, [FOA, Dz, RY, zA4, Bt8, ZA4, ne8, ht8, kt8, gt8, Bs1, ms1, At1], [[0, 1], [() => v41, 0], [() => xLA, 0], [() => mA4, 0], [() => hA4, 0], [() => gA4, 0], () => BA4, [() => bA4, 0], () => IA4, () => xA4, [() => QOA, 0], [() => QOA, 0], 0]],
    l03 = [3, WA, PK3, 0, [RLA, is1, Ax, i0], [0, 0, 0, 5]],
    i03 = [3, WA, fK3, 0, [pOA, ds1, JO], [[0, 1], () => Bt1, [0, 4]]],
    n03 = [3, WA, NK3, 0, [j41], [() => R41]],
    r03 = [3, WA, vK3, 0, [Jt1, uq3, bq3], [[0, 1], 0, 0]],
    o03 = [3, WA, EK3, 0, [], []],
    St1 = [3, WA, SK3, 0, [eY3], [() => j$3]],
    a03 = [3, WA, IK3, 0, [$2, yZ, _k], [0, 5, 5]],
    s03 = [-3, WA, hK3, {
      [tb]: Wn,
      [eb]: 400
    }, [CV], [0]];
  Jk.TypeRegistry.for(WA).registerError(s03, jt8);
  var t03 = [3, WA, RK3, 0, [JQ], [0]],
    e03 = [3, WA, bK3, 0, [oY3], [1]],
    AX3 = [3, WA, gK3, 0, [pK3], [0]],
    KX3 = [3, WA, uK3, 0, [J33, h33, _33], [() => qX3, 1, [() => FO3, 0]]],
    qX3 = [3, WA, BK3, 0, [YG, bs1], [0, 143]],
    YX3 = [3, WA, mK3, 0, [sw, Jq3], [0, [() => KX3, 0]]],
    Vn = [3, WA, yK3, 0, [m93, B93], [64, 64]],
    zX3 = [-3, te8, "BedrockServiceException", 0, [], []];
  Jk.TypeRegistry.for(te8).registerError(zX3, Ok);
  var wX3 = [1, WA, cr5, 0, [() => M$3, 0]],
    HX3 = [1, WA, nr5, 0, [() => w41, 0]],
    JX3 = [1, WA, or5, 0, [() => P$3, 0]],
    Ot8 = [1, WA, er5, 0, [() => I23, 0]],
    ht1 = [1, WA, Yo5, 0, () => b23],
    OX3 = [1, WA, Xo5, 0, [() => uLA, 0]],
    XX3 = [1, WA, _o5, 0, [() => m23, 0]],
    kLA = [1, WA, Do5, 0, [() => F23, 0]],
    bt1 = [1, WA, fo5, 0, [() => tA4, 0]],
    $X3 = [1, WA, uo5, 0, [() => o23, 0]],
    _X3 = [1, WA, Fo5, 0, [() => a23, 0]],
    GX3 = [1, WA, Uo5, 0, () => s23],
    ZX3 = [1, WA, do5, 0, [() => t23, 0]],
    WX3 = [1, WA, no5, 0, () => Kz3],
    DX3 = [1, WA, Ka5, 0, [() => k41, 0]],
    jX3 = [1, WA, Oa5, 0, [() => C41, 0]],
    MX3 = [1, WA, _a5, 0, [() => sb, 0]],
    iA4 = [1, WA, Wa5, 0, [() => Yz3, 0]],
    PX3 = [1, WA, ja5, 0, [() => zz3, 0]],
    VX3 = [1, WA, Na5, 0, [() => L41, 0]],
    nA4 = [1, WA, Ea5, 0, [() => j8A, 0]],
    fX3 = [1, WA, za5, 0, [() => Gz3, 0]],
    NX3 = [1, WA, La5, 0, [() => Zz3, 0]],
    TX3 = [1, WA, ma5, 0, [() => Pz3, 0]],
    vX3 = [1, WA, Fa5, 0, [() => Lt1, 0]],
    EX3 = [1, WA, Ua5, 0, [() => LA4, 0]],
    kX3 = [1, WA, la5, 0, [() => v$3, 0]],
    CX3 = [1, WA, Hs5, 0, [() => Rz3, 0]],
    LX3 = [1, WA, Os5, 0, [() => yz3, 0]],
    RX3 = [1, WA, Gs5, 0, () => hz3],
    yX3 = [1, WA, os5, 0, () => Pw3],
    IX3 = [1, WA, zt5, 0, () => Nw3],
    SX3 = [1, WA, jt5, 0, () => Tw3],
    rA4 = [1, WA, ke5, 0, [() => YH3, 0]],
    hX3 = [1, WA, Se5, 0, [() => bLA, 0]],
    bX3 = [1, WA, Fe5, 0, [() => fA4, 0]],
    xX3 = [1, WA, he5, 0, [() => C$3, 0]],
    uX3 = [1, WA, oe5, 0, () => $H3],
    BX3 = [1, WA, se5, 0, [() => ZH3, 0]],
    Xt8 = [1, WA, AA3, 8, () => jH3],
    mX3 = [1, WA, zA3, 0, () => PH3],
    gX3 = [1, WA, mA3, 0, [() => DJ3, 0]],
    FX3 = [1, WA, bA3, 0, [() => jJ3, 0]],
    QX3 = [1, WA, pA3, 0, [() => fJ3, 0]],
    UX3 = [1, WA, UA3, 0, [() => NJ3, 0]],
    pX3 = [1, WA, Z13, 0, [() => M23, 0]],
    dX3 = [1, WA, c13, 0, [() => vJ3, 0]],
    cX3 = [1, WA, l13, 0, [() => EJ3, 0]],
    H41 = [1, WA, i13, 0, [() => P23, 0]],
    lX3 = [1, WA, s13, 0, () => kJ3],
    iX3 = [1, WA, a13, 0, () => CJ3],
    nX3 = [1, WA, J63, 0, () => LJ3],
    rX3 = [1, WA, H63, 0, () => RJ3],
    oX3 = [1, WA, G63, 0, [() => V23, 0]],
    aX3 = [1, WA, Z63, 0, [() => IJ3, 0]],
    oA4 = [1, WA, f63, 0, [() => f23, 0]],
    sX3 = [1, WA, L63, 0, [() => SJ3, 0]],
    tX3 = [1, WA, M63, 0, [() => hJ3, 0]],
    eX3 = [1, WA, m63, 0, [() => BJ3, 0]],
    A$3 = [1, WA, x63, 0, [() => mJ3, 0]],
    K$3 = [1, WA, Q63, 0, [() => QJ3, 0]],
    q$3 = [1, WA, r63, 0, () => dJ3],
    aA4 = [1, WA, t63, 0, () => cJ3],
    Y$3 = [1, WA, A83, 0, [() => lJ3, 0]],
    z$3 = [1, WA, x43, 0, () => mO3],
    w$3 = [1, WA, M43, 0, [() => gO3, 0]],
    H$3 = [1, WA, N43, 0, () => QO3],
    J$3 = [1, WA, T43, 0, () => UO3],
    O$3 = [1, WA, I43, 0, () => pO3],
    X$3 = [1, WA, S43, 0, [() => lO3, 0]],
    $$3 = [1, WA, F43, 0, () => iO3],
    _$3 = [1, WA, r43, 0, [() => aO3, 0]],
    xt1 = [1, WA, a43, 0, () => y41],
    G$3 = [1, WA, l43, 0, () => sO3],
    Z$3 = [1, WA, H73, 0, [() => h$3, 0]],
    W$3 = [1, WA, J73, 0, () => ew3],
    D$3 = [1, WA, N73, 0, () => Y03],
    $t8 = [1, WA, W73, 0, [() => H03, 0]],
    _t8 = [1, WA, $73, 0, [() => K14, 0]],
    lX = [1, WA, e73, 0, () => L03],
    sA4 = [1, WA, xK3, 0, () => e03],
    j$3 = [1, WA, FK3, 0, () => t03],
    J41 = [2, WA, D73, 8, 0, 0],
    M$3 = [3, WA, ir5, 0, [Dq3], [[() => Vw3, 0]]],
    P$3 = [3, WA, rr5, 0, [A23, U53, e93, F53, YY3, OY3, b33], [[() => g23, 0], [() => S23, 0], [() => x23, 0], [() => y23, 0], [() => B23, 0], () => u23, () => h23]],
    tA4 = [3, WA, Mo5, 0, [Lt8, OA4, at8, Rt8, XA4, st8, Et8, JA4, ot8, cK3, BY3, mY3, v53], [[() => d23, 0], [() => vz3, 0], [() => Jz3, 0], [() => i23, 0], [() => Cz3, 0], [() => $z3, 0], [() => Q23, 0], [() => Nz3, 0], () => wz3, [() => U23, 0], [() => Vz3, 0], [() => fz3, 0], [() => Dz3, 0]]],
    V$3 = [3, WA, Bo5, 0, [SLA, O93, Kq3, Xe8], [[() => BLA, 0], [() => qz3, 0], [() => r23, 0], [() => Wz3, 0]]],
    f$3 = [3, WA, go5, 0, [H93, y33], [() => jz3, [() => T$3, 0]]],
    N$3 = [3, WA, oo5, 0, [r33, n33, i33], [[() => L41, 0], [() => C41, 0], [() => k41, 0]]],
    T$3 = [3, WA, Ia5, 0, [Lt8, OA4, at8, Rt8, XA4, st8, Et8, JA4, ot8], [[() => c23, 0], [() => Ez3, 0], [() => Oz3, 0], [() => n23, 0], [() => Lz3, 0], [() => _z3, 0], [() => p23, 0], [() => Tz3, 0], () => Hz3]],
    v$3 = [3, WA, ca5, 0, [aK3, pY3, gq3], [[() => l23, 0], [() => kz3, 0], () => Xz3]],
    E$3 = [3, WA, Ks5, 0, [dq3, K93], [[() => ZX3, 0], [() => e23, 0]]],
    ut1 = [3, WA, ks5, 0, [Sq3], [() => AH3]],
    Bt1 = [3, WA, fe5, 0, [d93], [() => Z03]],
    eA4 = [3, WA, Ne5, 0, [tK3, V53], [[() => L23, 0], [() => FJ3, 0]]],
    k$3 = [3, WA, ve5, 0, [JQ], [0]],
    A14 = [3, WA, Le5, 0, [cOA, j93], [[() => xX3, 0], [() => Z$3, 0]]],
    C$3 = [3, WA, xe5, 0, [qq3, t33], [[() => KH3, 0], () => HH3]],
    L$3 = [3, WA, ce5, 0, [R93, _93], [() => OH3, () => JH3]],
    R$3 = [3, WA, ue5, 0, [yt8], [() => RX3]],
    y$3 = [3, WA, s63, 0, [$q3], [0]],
    I$3 = [3, WA, i63, 0, [JQ], [0]],
    S$3 = [3, WA, q83, 0, [f93, $93], [[() => $03, 0], [() => X03, 0]]],
    I41 = [3, WA, v43, 0, [b93], [() => _03]],
    mt1 = [3, WA, E43, 0, [g93], [() => dO3]],
    gt1 = [3, WA, k43, 0, [l93], [() => cO3]],
    h$3 = [3, WA, z73, 0, [i53, Y93], [[() => S$3, 0], () => L$3]],
    b$3 = [3, WA, v73, 0, [s93, _53], [0, 1]],
    x$3 = [3, WA, Z73, 0, [cs1, wt1, Tt8, Ie8], [[() => J41, 0], [() => J41, 0], [() => $t8, 0], [() => $t8, 0]]],
    u$3 = [3, WA, V73, 0, [$53, X53], [[() => Xt8, 0], [() => Xt8, 0]]],
    K14 = [3, WA, X73, 8, [cs1, wt1, M53, P53, q33, K33, Q53, I33, t93, s53, h93, Tt8, Ie8], [() => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, () => Xy, [() => _t8, 0], [() => _t8, 0]]],
    B$3 = [9, WA, zs5, {
      [a8]: ["POST", "/evaluation-jobs/batch-delete", 202]
    }, () => Iz3, () => Sz3],
    m$3 = [9, WA, Ws5, {
      [a8]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/cancel", 202]
    }, () => xz3, () => uz3],
    g$3 = [9, WA, Zs5, {
      [a8]: ["POST", "/automated-reasoning-policies", 200]
    }, () => gz3, () => Fz3],
    F$3 = [9, WA, Vs5, {
      [a8]: ["POST", "/automated-reasoning-policies/{policyArn}/test-cases", 200]
    }, () => Qz3, () => Uz3],
    Q$3 = [9, WA, Ts5, {
      [a8]: ["POST", "/automated-reasoning-policies/{policyArn}/versions", 200]
    }, () => pz3, () => dz3],
    U$3 = [9, WA, Cs5, {
      [a8]: ["POST", "/custom-models/create-custom-model", 202]
    }, () => iz3, () => nz3],
    p$3 = [9, WA, Ls5, {
      [a8]: ["POST", "/model-customization/custom-model-deployments", 202]
    }, () => cz3, () => lz3],
    d$3 = [9, WA, bs5, {
      [a8]: ["POST", "/evaluation-jobs", 202]
    }, () => rz3, () => oz3],
    c$3 = [9, WA, Bs5, {
      [a8]: ["POST", "/create-foundation-model-agreement", 202]
    }, () => az3, () => sz3],
    l$3 = [9, WA, Fs5, {
      [a8]: ["POST", "/guardrails", 202]
    }, () => tz3, () => ez3],
    i$3 = [9, WA, ps5, {
      [a8]: ["POST", "/guardrails/{guardrailIdentifier}", 202]
    }, () => Aw3, () => Kw3],
    n$3 = [9, WA, ls5, {
      [a8]: ["POST", "/inference-profiles", 201]
    }, () => qw3, () => Yw3],
    r$3 = [9, WA, Gt5, {
      [a8]: ["POST", "/marketplace-model/endpoints", 200]
    }, () => zw3, () => ww3],
    o$3 = [9, WA, as5, {
      [a8]: ["POST", "/model-copy-jobs", 201]
    }, () => Hw3, () => Jw3],
    a$3 = [9, WA, Kt5, {
      [a8]: ["POST", "/model-customization-jobs", 201]
    }, () => Ow3, () => Xw3],
    s$3 = [9, WA, Ht5, {
      [a8]: ["POST", "/model-import-jobs", 201]
    }, () => $w3, () => _w3],
    t$3 = [9, WA, _t5, {
      [a8]: ["POST", "/model-invocation-job", 200]
    }, () => Gw3, () => Zw3],
    e$3 = [9, WA, Nt5, {
      [a8]: ["POST", "/prompt-routers", 200]
    }, () => Ww3, () => Dw3],
    A_3 = [9, WA, Pt5, {
      [a8]: ["POST", "/provisioned-model-throughput", 201]
    }, () => jw3, () => Mw3],
    K_3 = [9, WA, kt5, {
      [a8]: ["DELETE", "/automated-reasoning-policies/{policyArn}", 202]
    }, () => Lw3, () => Rw3],
    q_3 = [9, WA, Ct5, {
      [a8]: ["DELETE", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 202]
    }, () => kw3, () => Cw3],
    Y_3 = [9, WA, St5, {
      [a8]: ["DELETE", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 202]
    }, () => yw3, () => Iw3],
    z_3 = [9, WA, ut5, {
      [a8]: ["DELETE", "/custom-models/{modelIdentifier}", 200]
    }, () => bw3, () => xw3],
    w_3 = [9, WA, Bt5, {
      [a8]: ["DELETE", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200]
    }, () => Sw3, () => hw3],
    H_3 = [9, WA, Ut5, {
      [a8]: ["POST", "/delete-foundation-model-agreement", 202]
    }, () => uw3, () => Bw3],
    J_3 = [9, WA, ct5, {
      [a8]: ["DELETE", "/guardrails/{guardrailIdentifier}", 202]
    }, () => mw3, () => gw3],
    O_3 = [9, WA, nt5, {
      [a8]: ["DELETE", "/imported-models/{modelIdentifier}", 200]
    }, () => Fw3, () => Qw3],
    X_3 = [9, WA, at5, {
      [a8]: ["DELETE", "/inference-profiles/{inferenceProfileIdentifier}", 200]
    }, () => Uw3, () => pw3],
    $_3 = [9, WA, qe5, {
      [a8]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}", 200]
    }, () => dw3, () => cw3],
    __3 = [9, WA, et5, {
      [a8]: ["DELETE", "/logging/modelinvocations", 200]
    }, () => lw3, () => iw3],
    G_3 = [9, WA, De5, {
      [a8]: ["DELETE", "/prompt-routers/{promptRouterArn}", 200]
    }, () => nw3, () => rw3],
    Z_3 = [9, WA, Xe5, {
      [a8]: ["DELETE", "/provisioned-model-throughput/{provisionedModelId}", 200]
    }, () => ow3, () => aw3],
    W_3 = [9, WA, Je5, {
      [a8]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}/registration", 200]
    }, () => sw3, () => tw3],
    D_3 = [9, WA, je5, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/export", 200]
    }, () => _H3, () => GH3],
    j_3 = [9, WA, LA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}", 200]
    }, () => RH3, () => yH3],
    M_3 = [9, WA, HA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200]
    }, () => fH3, () => NH3],
    P_3 = [9, WA, XA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 200]
    }, () => TH3, () => vH3],
    V_3 = [9, WA, _A3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/result-assets", 200]
    }, () => EH3, () => kH3],
    f_3 = [9, WA, jA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/scenarios", 200]
    }, () => CH3, () => LH3],
    N_3 = [9, WA, NA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200]
    }, () => IH3, () => SH3],
    T_3 = [9, WA, EA3, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-cases/{testCaseId}/test-results", 200]
    }, () => hH3, () => bH3],
    v_3 = [9, WA, lA3, {
      [a8]: ["GET", "/custom-models/{modelIdentifier}", 200]
    }, () => BH3, () => mH3],
    E_3 = [9, WA, iA3, {
      [a8]: ["GET", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200]
    }, () => xH3, () => uH3],
    k_3 = [9, WA, Y13, {
      [a8]: ["GET", "/evaluation-jobs/{jobIdentifier}", 200]
    }, () => gH3, () => FH3],
    C_3 = [9, WA, H13, {
      [a8]: ["GET", "/foundation-models/{modelIdentifier}", 200]
    }, () => pH3, () => dH3],
    L_3 = [9, WA, J13, {
      [a8]: ["GET", "/foundation-model-availability/{modelId}", 200]
    }, () => QH3, () => UH3],
    R_3 = [9, WA, W13, {
      [a8]: ["GET", "/guardrails/{guardrailIdentifier}", 200]
    }, () => cH3, () => lH3],
    y_3 = [9, WA, M13, {
      [a8]: ["GET", "/imported-models/{modelIdentifier}", 200]
    }, () => iH3, () => nH3],
    I_3 = [9, WA, f13, {
      [a8]: ["GET", "/inference-profiles/{inferenceProfileIdentifier}", 200]
    }, () => rH3, () => oH3],
    S_3 = [9, WA, F13, {
      [a8]: ["GET", "/marketplace-model/endpoints/{endpointArn}", 200]
    }, () => aH3, () => sH3],
    h_3 = [9, WA, E13, {
      [a8]: ["GET", "/model-copy-jobs/{jobArn}", 200]
    }, () => tH3, () => eH3],
    b_3 = [9, WA, y13, {
      [a8]: ["GET", "/model-customization-jobs/{jobIdentifier}", 200]
    }, () => AJ3, () => KJ3],
    x_3 = [9, WA, I13, {
      [a8]: ["GET", "/model-import-jobs/{jobIdentifier}", 200]
    }, () => qJ3, () => YJ3],
    u_3 = [9, WA, u13, {
      [a8]: ["GET", "/model-invocation-job/{jobIdentifier}", 200]
    }, () => zJ3, () => wJ3],
    B_3 = [9, WA, B13, {
      [a8]: ["GET", "/logging/modelinvocations", 200]
    }, () => HJ3, () => JJ3],
    m_3 = [9, WA, K63, {
      [a8]: ["GET", "/prompt-routers/{promptRouterArn}", 200]
    }, () => OJ3, () => XJ3],
    g_3 = [9, WA, t13, {
      [a8]: ["GET", "/provisioned-model-throughput/{provisionedModelId}", 200]
    }, () => $J3, () => _J3],
    F_3 = [9, WA, R63, {
      [a8]: ["GET", "/use-case-for-model-access", 200]
    }, () => GJ3, () => ZJ3],
    Q_3 = [9, WA, J83, {
      [a8]: ["GET", "/automated-reasoning-policies", 200]
    }, () => sJ3, () => tJ3],
    U_3 = [9, WA, O83, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows", 200]
    }, () => eJ3, () => AO3],
    p_3 = [9, WA, Z83, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases", 200]
    }, () => KO3, () => qO3],
    d_3 = [9, WA, j83, {
      [a8]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-results", 200]
    }, () => YO3, () => zO3],
    c_3 = [9, WA, N83, {
      [a8]: ["GET", "/model-customization/custom-model-deployments", 200]
    }, () => wO3, () => HO3],
    l_3 = [9, WA, f83, {
      [a8]: ["GET", "/custom-models", 200]
    }, () => JO3, () => OO3],
    i_3 = [9, WA, C83, {
      [a8]: ["GET", "/evaluation-jobs", 200]
    }, () => XO3, () => $O3],
    n_3 = [9, WA, I83, {
      [a8]: ["GET", "/list-foundation-model-agreement-offers/{modelId}", 200]
    }, () => _O3, () => GO3],
    r_3 = [9, WA, y83, {
      [a8]: ["GET", "/foundation-models", 200]
    }, () => ZO3, () => WO3],
    o_3 = [9, WA, u83, {
      [a8]: ["GET", "/guardrails", 200]
    }, () => DO3, () => jO3],
    a_3 = [9, WA, g83, {
      [a8]: ["GET", "/imported-models", 200]
    }, () => MO3, () => PO3],
    s_3 = [9, WA, U83, {
      [a8]: ["GET", "/inference-profiles", 200]
    }, () => VO3, () => fO3],
    t_3 = [9, WA, q43, {
      [a8]: ["GET", "/marketplace-model/endpoints", 200]
    }, () => NO3, () => TO3],
    e_3 = [9, WA, c83, {
      [a8]: ["GET", "/model-copy-jobs", 200]
    }, () => vO3, () => EO3],
    AG3 = [9, WA, o83, {
      [a8]: ["GET", "/model-customization-jobs", 200]
    }, () => kO3, () => CO3],
    KG3 = [9, WA, a83, {
      [a8]: ["GET", "/model-import-jobs", 200]
    }, () => LO3, () => RO3],
    qG3 = [9, WA, K43, {
      [a8]: ["GET", "/model-invocation-jobs", 200]
    }, () => yO3, () => IO3],
    YG3 = [9, WA, O43, {
      [a8]: ["GET", "/prompt-routers", 200]
    }, () => SO3, () => hO3],
    zG3 = [9, WA, w43, {
      [a8]: ["GET", "/provisioned-model-throughputs", 200]
    }, () => bO3, () => xO3],
    wG3 = [9, WA, G43, {
      [a8]: ["POST", "/listTagsForResource", 200]
    }, () => uO3, () => BO3],
    HG3 = [9, WA, U43, {
      [a8]: ["PUT", "/logging/modelinvocations", 200]
    }, () => tO3, () => eO3],
    JG3 = [9, WA, e43, {
      [a8]: ["POST", "/use-case-for-model-access", 201]
    }, () => A03, () => K03],
    OG3 = [9, WA, j73, {
      [a8]: ["POST", "/marketplace-model/endpoints/{endpointIdentifier}/registration", 200]
    }, () => z03, () => w03],
    XG3 = [9, WA, E73, {
      [a8]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowType}/start", 200]
    }, () => j03, () => M03],
    $G3 = [9, WA, L73, {
      [a8]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-workflows", 200]
    }, () => P03, () => V03],
    _G3 = [9, WA, b73, {
      [a8]: ["POST", "/evaluation-job/{jobIdentifier}/stop", 200]
    }, () => f03, () => N03],
    GG3 = [9, WA, B73, {
      [a8]: ["POST", "/model-customization-jobs/{jobIdentifier}/stop", 200]
    }, () => T03, () => v03],
    ZG3 = [9, WA, Q73, {
      [a8]: ["POST", "/model-invocation-job/{jobIdentifier}/stop", 200]
    }, () => E03, () => k03],
    WG3 = [9, WA, zK3, {
      [a8]: ["POST", "/tagResource", 200]
    }, () => R03, () => y03],
    DG3 = [9, WA, kK3, {
      [a8]: ["POST", "/untagResource", 200]
    }, () => B03, () => m03],
    jG3 = [9, WA, JK3, {
      [a8]: ["PATCH", "/automated-reasoning-policies/{policyArn}", 200]
    }, () => Q03, () => U03],
    MG3 = [9, WA, OK3, {
      [a8]: ["PATCH", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200]
    }, () => g03, () => F03],
    PG3 = [9, WA, ZK3, {
      [a8]: ["PATCH", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200]
    }, () => p03, () => d03],
    VG3 = [9, WA, jK3, {
      [a8]: ["PUT", "/guardrails/{guardrailIdentifier}", 202]
    }, () => c03, () => l03],
    fG3 = [9, WA, VK3, {
      [a8]: ["PATCH", "/marketplace-model/endpoints/{endpointArn}", 200]
    }, () => i03, () => n03],
    NG3 = [9, WA, TK3, {
      [a8]: ["PATCH", "/provisioned-model-throughput/{provisionedModelId}", 200]
    }, () => r03, () => o03];
  class Ft1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "BatchDeleteEvaluationJob", {}).n("BedrockClient", "BatchDeleteEvaluationJobCommand").sc(B$3).build() {}
  class Qt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CancelAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "CancelAutomatedReasoningPolicyBuildWorkflowCommand").sc(m$3).build() {}
  class Ut1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicy", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyCommand").sc(g$3).build() {}
  class pt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyTestCaseCommand").sc(F$3).build() {}
  class dt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicyVersion", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyVersionCommand").sc(Q$3).build() {}
  class ct1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateCustomModel", {}).n("BedrockClient", "CreateCustomModelCommand").sc(U$3).build() {}
  class lt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateCustomModelDeployment", {}).n("BedrockClient", "CreateCustomModelDeploymentCommand").sc(p$3).build() {}
  class it1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {}).n("BedrockClient", "CreateEvaluationJobCommand").sc(d$3).build() {}
  class nt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateFoundationModelAgreement", {}).n("BedrockClient", "CreateFoundationModelAgreementCommand").sc(c$3).build() {}
  class rt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateGuardrail", {}).n("BedrockClient", "CreateGuardrailCommand").sc(l$3).build() {}
  class ot1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateGuardrailVersion", {}).n("BedrockClient", "CreateGuardrailVersionCommand").sc(i$3).build() {}
  class at1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {}).n("BedrockClient", "CreateInferenceProfileCommand").sc(n$3).build() {}
  class st1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateMarketplaceModelEndpoint", {}).n("BedrockClient", "CreateMarketplaceModelEndpointCommand").sc(r$3).build() {}
  class tt1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {}).n("BedrockClient", "CreateModelCopyJobCommand").sc(o$3).build() {}
  class et1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelCustomizationJob", {}).n("BedrockClient", "CreateModelCustomizationJobCommand").sc(a$3).build() {}
  class Ae1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelImportJob", {}).n("BedrockClient", "CreateModelImportJobCommand").sc(s$3).build() {}
  class Ke1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {}).n("BedrockClient", "CreateModelInvocationJobCommand").sc(t$3).build() {}
  class qe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreatePromptRouter", {}).n("BedrockClient", "CreatePromptRouterCommand").sc(e$3).build() {}
  class Ye1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateProvisionedModelThroughput", {}).n("BedrockClient", "CreateProvisionedModelThroughputCommand").sc(A_3).build() {}
  class ze1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyBuildWorkflowCommand").sc(q_3).build() {}
  class we1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicy", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyCommand").sc(K_3).build() {}
  class He1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyTestCaseCommand").sc(Y_3).build() {}
  class Je1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {}).n("BedrockClient", "DeleteCustomModelCommand").sc(z_3).build() {}
  class Oe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteCustomModelDeployment", {}).n("BedrockClient", "DeleteCustomModelDeploymentCommand").sc(w_3).build() {}
  class Xe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteFoundationModelAgreement", {}).n("BedrockClient", "DeleteFoundationModelAgreementCommand").sc(H_3).build() {}
  class $e1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {}).n("BedrockClient", "DeleteGuardrailCommand").sc(J_3).build() {}
  class _e1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteImportedModel", {}).n("BedrockClient", "DeleteImportedModelCommand").sc(O_3).build() {}
  class Ge1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteInferenceProfile", {}).n("BedrockClient", "DeleteInferenceProfileCommand").sc(X_3).build() {}
  class Ze1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteMarketplaceModelEndpoint", {}).n("BedrockClient", "DeleteMarketplaceModelEndpointCommand").sc($_3).build() {}
  class We1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteModelInvocationLoggingConfiguration", {}).n("BedrockClient", "DeleteModelInvocationLoggingConfigurationCommand").sc(__3).build() {}
  class De1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeletePromptRouter", {}).n("BedrockClient", "DeletePromptRouterCommand").sc(G_3).build() {}
  class je1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteProvisionedModelThroughput", {}).n("BedrockClient", "DeleteProvisionedModelThroughputCommand").sc(Z_3).build() {}
  class Me1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeregisterMarketplaceModelEndpoint", {}).n("BedrockClient", "DeregisterMarketplaceModelEndpointCommand").sc(W_3).build() {}
  class Pe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ExportAutomatedReasoningPolicyVersion", {}).n("BedrockClient", "ExportAutomatedReasoningPolicyVersionCommand").sc(D_3).build() {}
  class Ve1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyAnnotations", {}).n("BedrockClient", "GetAutomatedReasoningPolicyAnnotationsCommand").sc(M_3).build() {}
  class fe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "GetAutomatedReasoningPolicyBuildWorkflowCommand").sc(P_3).build() {}
  class Ne1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyBuildWorkflowResultAssets", {}).n("BedrockClient", "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand").sc(V_3).build() {}
  class Te1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicy", {}).n("BedrockClient", "GetAutomatedReasoningPolicyCommand").sc(j_3).build() {}
  class ve1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyNextScenario", {}).n("BedrockClient", "GetAutomatedReasoningPolicyNextScenarioCommand").sc(f_3).build() {}
  class Ee1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "GetAutomatedReasoningPolicyTestCaseCommand").sc(N_3).build() {}
  class ke1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyTestResult", {}).n("BedrockClient", "GetAutomatedReasoningPolicyTestResultCommand").sc(T_3).build() {}
  class Ce1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetCustomModel", {}).n("BedrockClient", "GetCustomModelCommand").sc(v_3).build() {}
  class Le1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetCustomModelDeployment", {}).n("BedrockClient", "GetCustomModelDeploymentCommand").sc(E_3).build() {}
  class Re1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetEvaluationJob", {}).n("BedrockClient", "GetEvaluationJobCommand").sc(k_3).build() {}
  class ye1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {}).n("BedrockClient", "GetFoundationModelAvailabilityCommand").sc(L_3).build() {}
  class Ie1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModel", {}).n("BedrockClient", "GetFoundationModelCommand").sc(C_3).build() {}
  class Se1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetGuardrail", {}).n("BedrockClient", "GetGuardrailCommand").sc(R_3).build() {}
  class he1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetImportedModel", {}).n("BedrockClient", "GetImportedModelCommand").sc(y_3).build() {}
  class be1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(I_3).build() {}
  class xe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetMarketplaceModelEndpoint", {}).n("BedrockClient", "GetMarketplaceModelEndpointCommand").sc(S_3).build() {}
  class ue1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelCopyJob", {}).n("BedrockClient", "GetModelCopyJobCommand").sc(h_3).build() {}
  class Be1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelCustomizationJob", {}).n("BedrockClient", "GetModelCustomizationJobCommand").sc(b_3).build() {}
  class me1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelImportJob", {}).n("BedrockClient", "GetModelImportJobCommand").sc(x_3).build() {}
  class ge1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelInvocationJob", {}).n("BedrockClient", "GetModelInvocationJobCommand").sc(u_3).build() {}
  class Fe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelInvocationLoggingConfiguration", {}).n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand").sc(B_3).build() {}
  class Qe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetPromptRouter", {}).n("BedrockClient", "GetPromptRouterCommand").sc(m_3).build() {}
  class Ue1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetProvisionedModelThroughput", {}).n("BedrockClient", "GetProvisionedModelThroughputCommand").sc(g_3).build() {}
  class pe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetUseCaseForModelAccess", {}).n("BedrockClient", "GetUseCaseForModelAccessCommand").sc(F_3).build() {}
  class S41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicies", {}).n("BedrockClient", "ListAutomatedReasoningPoliciesCommand").sc(Q_3).build() {}
  class h41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyBuildWorkflows", {}).n("BedrockClient", "ListAutomatedReasoningPolicyBuildWorkflowsCommand").sc(U_3).build() {}
  class b41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyTestCases", {}).n("BedrockClient", "ListAutomatedReasoningPolicyTestCasesCommand").sc(p_3).build() {}
  class x41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyTestResults", {}).n("BedrockClient", "ListAutomatedReasoningPolicyTestResultsCommand").sc(d_3).build() {}
  class u41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListCustomModelDeployments", {}).n("BedrockClient", "ListCustomModelDeploymentsCommand").sc(c_3).build() {}
  class B41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListCustomModels", {}).n("BedrockClient", "ListCustomModelsCommand").sc(l_3).build() {}
  class m41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {}).n("BedrockClient", "ListEvaluationJobsCommand").sc(i_3).build() {}
  class de1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListFoundationModelAgreementOffers", {}).n("BedrockClient", "ListFoundationModelAgreementOffersCommand").sc(n_3).build() {}
  class ce1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListFoundationModels", {}).n("BedrockClient", "ListFoundationModelsCommand").sc(r_3).build() {}
  class g41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListGuardrails", {}).n("BedrockClient", "ListGuardrailsCommand").sc(o_3).build() {}
  class F41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListImportedModels", {}).n("BedrockClient", "ListImportedModelsCommand").sc(a_3).build() {}
  class Q41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").sc(s_3).build() {}
  class U41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListMarketplaceModelEndpoints", {}).n("BedrockClient", "ListMarketplaceModelEndpointsCommand").sc(t_3).build() {}
  class p41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelCopyJobs", {}).n("BedrockClient", "ListModelCopyJobsCommand").sc(e_3).build() {}
  class d41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {}).n("BedrockClient", "ListModelCustomizationJobsCommand").sc(AG3).build() {}
  class c41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelImportJobs", {}).n("BedrockClient", "ListModelImportJobsCommand").sc(KG3).build() {}
  class l41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelInvocationJobs", {}).n("BedrockClient", "ListModelInvocationJobsCommand").sc(qG3).build() {}
  class i41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListPromptRouters", {}).n("BedrockClient", "ListPromptRoutersCommand").sc(YG3).build() {}
  class n41 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListProvisionedModelThroughputs", {}).n("BedrockClient", "ListProvisionedModelThroughputsCommand").sc(zG3).build() {}
  class le1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListTagsForResource", {}).n("BedrockClient", "ListTagsForResourceCommand").sc(wG3).build() {}
  class ie1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutModelInvocationLoggingConfiguration", {}).n("BedrockClient", "PutModelInvocationLoggingConfigurationCommand").sc(HG3).build() {}
  class ne1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutUseCaseForModelAccess", {}).n("BedrockClient", "PutUseCaseForModelAccessCommand").sc(JG3).build() {}
  class re1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "RegisterMarketplaceModelEndpoint", {}).n("BedrockClient", "RegisterMarketplaceModelEndpointCommand").sc(OG3).build() {}
  class oe1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StartAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "StartAutomatedReasoningPolicyBuildWorkflowCommand").sc(XG3).build() {}
  class ae1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StartAutomatedReasoningPolicyTestWorkflow", {}).n("BedrockClient", "StartAutomatedReasoningPolicyTestWorkflowCommand").sc($G3).build() {}
  class se1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {}).n("BedrockClient", "StopEvaluationJobCommand").sc(_G3).build() {}
  class te1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {}).n("BedrockClient", "StopModelCustomizationJobCommand").sc(GG3).build() {}
  class ee1 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {}).n("BedrockClient", "StopModelInvocationJobCommand").sc(ZG3).build() {}
  class AA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "TagResource", {}).n("BedrockClient", "TagResourceCommand").sc(WG3).build() {}
  class KA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UntagResource", {}).n("BedrockClient", "UntagResourceCommand").sc(DG3).build() {}
  class qA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicyAnnotations", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyAnnotationsCommand").sc(MG3).build() {}
  class YA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicy", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyCommand").sc(jG3).build() {}
  class zA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyTestCaseCommand").sc(PG3).build() {}
  class wA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateGuardrail", {}).n("BedrockClient", "UpdateGuardrailCommand").sc(VG3).build() {}
  class HA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateMarketplaceModelEndpoint", {}).n("BedrockClient", "UpdateMarketplaceModelEndpointCommand").sc(fG3).build() {}
  class JA6 extends g8.Command.classBuilder().ep(o8).m(function (A, K, q, Y) {
    return [i8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateProvisionedModelThroughput", {}).n("BedrockClient", "UpdateProvisionedModelThroughputCommand").sc(NG3).build() {}
  var TG3 = {
    BatchDeleteEvaluationJobCommand: Ft1,
    CancelAutomatedReasoningPolicyBuildWorkflowCommand: Qt1,
    CreateAutomatedReasoningPolicyCommand: Ut1,
    CreateAutomatedReasoningPolicyTestCaseCommand: pt1,
    CreateAutomatedReasoningPolicyVersionCommand: dt1,
    CreateCustomModelCommand: ct1,
    CreateCustomModelDeploymentCommand: lt1,
    CreateEvaluationJobCommand: it1,
    CreateFoundationModelAgreementCommand: nt1,
    CreateGuardrailCommand: rt1,
    CreateGuardrailVersionCommand: ot1,
    CreateInferenceProfileCommand: at1,
    CreateMarketplaceModelEndpointCommand: st1,
    CreateModelCopyJobCommand: tt1,
    CreateModelCustomizationJobCommand: et1,
    CreateModelImportJobCommand: Ae1,
    CreateModelInvocationJobCommand: Ke1,
    CreatePromptRouterCommand: qe1,
    CreateProvisionedModelThroughputCommand: Ye1,
    DeleteAutomatedReasoningPolicyCommand: we1,
    DeleteAutomatedReasoningPolicyBuildWorkflowCommand: ze1,
    DeleteAutomatedReasoningPolicyTestCaseCommand: He1,
    DeleteCustomModelCommand: Je1,
    DeleteCustomModelDeploymentCommand: Oe1,
    DeleteFoundationModelAgreementCommand: Xe1,
    DeleteGuardrailCommand: $e1,
    DeleteImportedModelCommand: _e1,
    DeleteInferenceProfileCommand: Ge1,
    DeleteMarketplaceModelEndpointCommand: Ze1,
    DeleteModelInvocationLoggingConfigurationCommand: We1,
    DeletePromptRouterCommand: De1,
    DeleteProvisionedModelThroughputCommand: je1,
    DeregisterMarketplaceModelEndpointCommand: Me1,
    ExportAutomatedReasoningPolicyVersionCommand: Pe1,
    GetAutomatedReasoningPolicyCommand: Te1,
    GetAutomatedReasoningPolicyAnnotationsCommand: Ve1,
    GetAutomatedReasoningPolicyBuildWorkflowCommand: fe1,
    GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand: Ne1,
    GetAutomatedReasoningPolicyNextScenarioCommand: ve1,
    GetAutomatedReasoningPolicyTestCaseCommand: Ee1,
    GetAutomatedReasoningPolicyTestResultCommand: ke1,
    GetCustomModelCommand: Ce1,
    GetCustomModelDeploymentCommand: Le1,
    GetEvaluationJobCommand: Re1,
    GetFoundationModelCommand: Ie1,
    GetFoundationModelAvailabilityCommand: ye1,
    GetGuardrailCommand: Se1,
    GetImportedModelCommand: he1,
    GetInferenceProfileCommand: be1,
    GetMarketplaceModelEndpointCommand: xe1,
    GetModelCopyJobCommand: ue1,
    GetModelCustomizationJobCommand: Be1,
    GetModelImportJobCommand: me1,
    GetModelInvocationJobCommand: ge1,
    GetModelInvocationLoggingConfigurationCommand: Fe1,
    GetPromptRouterCommand: Qe1,
    GetProvisionedModelThroughputCommand: Ue1,
    GetUseCaseForModelAccessCommand: pe1,
    ListAutomatedReasoningPoliciesCommand: S41,
    ListAutomatedReasoningPolicyBuildWorkflowsCommand: h41,
    ListAutomatedReasoningPolicyTestCasesCommand: b41,
    ListAutomatedReasoningPolicyTestResultsCommand: x41,
    ListCustomModelDeploymentsCommand: u41,
    ListCustomModelsCommand: B41,
    ListEvaluationJobsCommand: m41,
    ListFoundationModelAgreementOffersCommand: de1,
    ListFoundationModelsCommand: ce1,
    ListGuardrailsCommand: g41,
    ListImportedModelsCommand: F41,
    ListInferenceProfilesCommand: Q41,
    ListMarketplaceModelEndpointsCommand: U41,
    ListModelCopyJobsCommand: p41,
    ListModelCustomizationJobsCommand: d41,
    ListModelImportJobsCommand: c41,
    ListModelInvocationJobsCommand: l41,
    ListPromptRoutersCommand: i41,
    ListProvisionedModelThroughputsCommand: n41,
    ListTagsForResourceCommand: le1,
    PutModelInvocationLoggingConfigurationCommand: ie1,
    PutUseCaseForModelAccessCommand: ne1,
    RegisterMarketplaceModelEndpointCommand: re1,
    StartAutomatedReasoningPolicyBuildWorkflowCommand: oe1,
    StartAutomatedReasoningPolicyTestWorkflowCommand: ae1,
    StopEvaluationJobCommand: se1,
    StopModelCustomizationJobCommand: te1,
    StopModelInvocationJobCommand: ee1,
    TagResourceCommand: AA6,
    UntagResourceCommand: KA6,
    UpdateAutomatedReasoningPolicyCommand: YA6,
    UpdateAutomatedReasoningPolicyAnnotationsCommand: qA6,
    UpdateAutomatedReasoningPolicyTestCaseCommand: zA6,
    UpdateGuardrailCommand: wA6,
    UpdateMarketplaceModelEndpointCommand: HA6,
    UpdateProvisionedModelThroughputCommand: JA6
  };
  class OA6 extends iX {}
  g8.createAggregatedClient(TG3, OA6);
  var vG3 = cX.createPaginator(iX, S41, "nextToken", "nextToken", "maxResults"),
    EG3 = cX.createPaginator(iX, h41, "nextToken", "nextToken", "maxResults"),
    kG3 = cX.createPaginator(iX, b41, "nextToken", "nextToken", "maxResults"),
    CG3 = cX.createPaginator(iX, x41, "nextToken", "nextToken", "maxResults"),
    LG3 = cX.createPaginator(iX, u41, "nextToken", "nextToken", "maxResults"),
    RG3 = cX.createPaginator(iX, B41, "nextToken", "nextToken", "maxResults"),
    yG3 = cX.createPaginator(iX, m41, "nextToken", "nextToken", "maxResults"),
    IG3 = cX.createPaginator(iX, g41, "nextToken", "nextToken", "maxResults"),
    SG3 = cX.createPaginator(iX, F41, "nextToken", "nextToken", "maxResults"),
    hG3 = cX.createPaginator(iX, Q41, "nextToken", "nextToken", "maxResults"),
    bG3 = cX.createPaginator(iX, U41, "nextToken", "nextToken", "maxResults"),
    xG3 = cX.createPaginator(iX, p41, "nextToken", "nextToken", "maxResults"),
    uG3 = cX.createPaginator(iX, d41, "nextToken", "nextToken", "maxResults"),
    BG3 = cX.createPaginator(iX, c41, "nextToken", "nextToken", "maxResults"),
    mG3 = cX.createPaginator(iX, l41, "nextToken", "nextToken", "maxResults"),
    gG3 = cX.createPaginator(iX, i41, "nextToken", "nextToken", "maxResults"),
    FG3 = cX.createPaginator(iX, n41, "nextToken", "nextToken", "maxResults"),
    QG3 = {
      AVAILABLE: "AVAILABLE",
      ERROR: "ERROR",
      NOT_AVAILABLE: "NOT_AVAILABLE",
      PENDING: "PENDING"
    },
    UG3 = {
      IMPOSSIBLE: "IMPOSSIBLE",
      INVALID: "INVALID",
      NO_TRANSLATION: "NO_TRANSLATION",
      SATISFIABLE: "SATISFIABLE",
      TOO_COMPLEX: "TOO_COMPLEX",
      TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
      VALID: "VALID"
    },
    pG3 = {
      IMPORT_POLICY: "IMPORT_POLICY",
      INGEST_CONTENT: "INGEST_CONTENT",
      REFINE_POLICY: "REFINE_POLICY"
    },
    dG3 = {
      PDF: "pdf",
      TEXT: "txt"
    },
    cG3 = {
      BUILDING: "BUILDING",
      CANCELLED: "CANCELLED",
      CANCEL_REQUESTED: "CANCEL_REQUESTED",
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      PREPROCESSING: "PREPROCESSING",
      SCHEDULED: "SCHEDULED",
      TESTING: "TESTING"
    },
    lG3 = {
      BUILD_LOG: "BUILD_LOG",
      GENERATED_TEST_CASES: "GENERATED_TEST_CASES",
      POLICY_DEFINITION: "POLICY_DEFINITION",
      QUALITY_REPORT: "QUALITY_REPORT"
    },
    iG3 = {
      ERROR: "ERROR",
      INFO: "INFO",
      WARNING: "WARNING"
    },
    nG3 = {
      APPLIED: "APPLIED",
      FAILED: "FAILED"
    },
    rG3 = {
      ALWAYS_FALSE: "ALWAYS_FALSE",
      ALWAYS_TRUE: "ALWAYS_TRUE"
    },
    oG3 = {
      FAILED: "FAILED",
      PASSED: "PASSED"
    },
    aG3 = {
      COMPLETED: "COMPLETED",
      FAILED: "FAILED",
      IN_PROGRESS: "IN_PROGRESS",
      NOT_STARTED: "NOT_STARTED",
      SCHEDULED: "SCHEDULED"
    },
    sG3 = {
      INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
      REGISTERED: "REGISTERED"
    },
    tG3 = {
      ACTIVE: "Active",
      CREATING: "Creating",
      FAILED: "Failed"
    },
    eG3 = {
      CREATION_TIME: "CreationTime"
    },
    AZ3 = {
      ASCENDING: "Ascending",
      DESCENDING: "Descending"
    },
    KZ3 = {
      CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
      DISTILLATION: "DISTILLATION",
      FINE_TUNING: "FINE_TUNING",
      IMPORTED: "IMPORTED"
    },
    qZ3 = {
      ACTIVE: "Active",
      CREATING: "Creating",
      FAILED: "Failed"
    },
    YZ3 = {
      COMPLETED: "Completed",
      DELETING: "Deleting",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping"
    },
    zZ3 = {
      MODEL_EVALUATION: "ModelEvaluation",
      RAG_EVALUATION: "RagEvaluation"
    },
    wZ3 = {
      CLASSIFICATION: "Classification",
      CUSTOM: "Custom",
      GENERATION: "Generation",
      QUESTION_AND_ANSWER: "QuestionAndAnswer",
      SUMMARIZATION: "Summarization"
    },
    HZ3 = {
      OPTIMIZED: "optimized",
      STANDARD: "standard"
    },
    JZ3 = {
      BYTE_CONTENT: "BYTE_CONTENT",
      S3: "S3"
    },
    OZ3 = {
      QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION"
    },
    XZ3 = {
      BOOLEAN: "BOOLEAN",
      NUMBER: "NUMBER",
      STRING: "STRING",
      STRING_LIST: "STRING_LIST"
    },
    $Z3 = {
      HYBRID: "HYBRID",
      SEMANTIC: "SEMANTIC"
    },
    _Z3 = {
      ALL: "ALL",
      SELECTIVE: "SELECTIVE"
    },
    GZ3 = {
      BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL"
    },
    ZZ3 = {
      EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
      KNOWLEDGE_BASE: "KNOWLEDGE_BASE"
    },
    WZ3 = {
      AUTOMATED: "Automated",
      HUMAN: "Human"
    },
    DZ3 = {
      CREATION_TIME: "CreationTime"
    },
    jZ3 = {
      BLOCK: "BLOCK",
      NONE: "NONE"
    },
    MZ3 = {
      IMAGE: "IMAGE",
      TEXT: "TEXT"
    },
    PZ3 = {
      HIGH: "HIGH",
      LOW: "LOW",
      MEDIUM: "MEDIUM",
      NONE: "NONE"
    },
    VZ3 = {
      HATE: "HATE",
      INSULTS: "INSULTS",
      MISCONDUCT: "MISCONDUCT",
      PROMPT_ATTACK: "PROMPT_ATTACK",
      SEXUAL: "SEXUAL",
      VIOLENCE: "VIOLENCE"
    },
    fZ3 = {
      CLASSIC: "CLASSIC",
      STANDARD: "STANDARD"
    },
    NZ3 = {
      BLOCK: "BLOCK",
      NONE: "NONE"
    },
    TZ3 = {
      GROUNDING: "GROUNDING",
      RELEVANCE: "RELEVANCE"
    },
    vZ3 = {
      ANONYMIZE: "ANONYMIZE",
      BLOCK: "BLOCK",
      NONE: "NONE"
    },
    EZ3 = {
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
    kZ3 = {
      CLASSIC: "CLASSIC",
      STANDARD: "STANDARD"
    },
    CZ3 = {
      BLOCK: "BLOCK",
      NONE: "NONE"
    },
    LZ3 = {
      DENY: "DENY"
    },
    RZ3 = {
      BLOCK: "BLOCK",
      NONE: "NONE"
    },
    yZ3 = {
      PROFANITY: "PROFANITY"
    },
    IZ3 = {
      CREATING: "CREATING",
      DELETING: "DELETING",
      FAILED: "FAILED",
      READY: "READY",
      UPDATING: "UPDATING",
      VERSIONING: "VERSIONING"
    },
    SZ3 = {
      ACTIVE: "ACTIVE"
    },
    hZ3 = {
      APPLICATION: "APPLICATION",
      SYSTEM_DEFINED: "SYSTEM_DEFINED"
    },
    bZ3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress"
    },
    xZ3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress"
    },
    uZ3 = {
      JSONL: "JSONL"
    },
    BZ3 = {
      COMPLETED: "Completed",
      EXPIRED: "Expired",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      PARTIALLY_COMPLETED: "PartiallyCompleted",
      SCHEDULED: "Scheduled",
      STOPPED: "Stopped",
      STOPPING: "Stopping",
      SUBMITTED: "Submitted",
      VALIDATING: "Validating"
    },
    mZ3 = {
      CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
      DISTILLATION: "DISTILLATION",
      FINE_TUNING: "FINE_TUNING"
    },
    gZ3 = {
      ON_DEMAND: "ON_DEMAND",
      PROVISIONED: "PROVISIONED"
    },
    FZ3 = {
      EMBEDDING: "EMBEDDING",
      IMAGE: "IMAGE",
      TEXT: "TEXT"
    },
    QZ3 = {
      ACTIVE: "ACTIVE",
      LEGACY: "LEGACY"
    },
    UZ3 = {
      AVAILABLE: "AVAILABLE"
    },
    pZ3 = {
      CUSTOM: "custom",
      DEFAULT: "default"
    },
    dZ3 = {
      ONE_MONTH: "OneMonth",
      SIX_MONTHS: "SixMonths"
    },
    cZ3 = {
      CREATING: "Creating",
      FAILED: "Failed",
      IN_SERVICE: "InService",
      UPDATING: "Updating"
    },
    lZ3 = {
      CREATION_TIME: "CreationTime"
    },
    iZ3 = {
      AUTHORIZED: "AUTHORIZED",
      NOT_AUTHORIZED: "NOT_AUTHORIZED"
    },
    nZ3 = {
      AVAILABLE: "AVAILABLE",
      NOT_AVAILABLE: "NOT_AVAILABLE"
    },
    rZ3 = {
      AVAILABLE: "AVAILABLE",
      NOT_AVAILABLE: "NOT_AVAILABLE"
    },
    oZ3 = {
      ALL: "ALL",
      PUBLIC: "PUBLIC"
    },
    aZ3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping"
    },
    sZ3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      NOT_STARTED: "NotStarted",
      STOPPED: "Stopped",
      STOPPING: "Stopping"
    },
    tZ3 = {
      COMPLETED: "Completed",
      FAILED: "Failed",
      IN_PROGRESS: "InProgress",
      STOPPED: "Stopped",
      STOPPING: "Stopping"
    };
  Object.defineProperty(XA6, "$Command", {
    enumerable: !0,
    get: function () {
      return g8.Command;
    }
  });
  Object.defineProperty(XA6, "__Client", {
    enumerable: !0,
    get: function () {
      return g8.Client;
    }
  });
  XA6.AccessDeniedException = Gt8;
  XA6.AgreementStatus = QG3;
  XA6.ApplicationType = zZ3;
  XA6.AttributeType = XZ3;
  XA6.AuthorizationStatus = iZ3;
  XA6.AutomatedReasoningCheckLogicWarningType = rG3;
  XA6.AutomatedReasoningCheckResult = UG3;
  XA6.AutomatedReasoningPolicyAnnotationStatus = nG3;
  XA6.AutomatedReasoningPolicyBuildDocumentContentType = dG3;
  XA6.AutomatedReasoningPolicyBuildMessageType = iG3;
  XA6.AutomatedReasoningPolicyBuildResultAssetType = lG3;
  XA6.AutomatedReasoningPolicyBuildWorkflowStatus = cG3;
  XA6.AutomatedReasoningPolicyBuildWorkflowType = pG3;
  XA6.AutomatedReasoningPolicyTestRunResult = oG3;
  XA6.AutomatedReasoningPolicyTestRunStatus = aG3;
  XA6.BatchDeleteEvaluationJobCommand = Ft1;
  XA6.Bedrock = OA6;
  XA6.BedrockClient = iX;
  XA6.BedrockServiceException = Ok;
  XA6.CancelAutomatedReasoningPolicyBuildWorkflowCommand = Qt1;
  XA6.CommitmentDuration = dZ3;
  XA6.ConflictException = Mt8;
  XA6.CreateAutomatedReasoningPolicyCommand = Ut1;
  XA6.CreateAutomatedReasoningPolicyTestCaseCommand = pt1;
  XA6.CreateAutomatedReasoningPolicyVersionCommand = dt1;
  XA6.CreateCustomModelCommand = ct1;
  XA6.CreateCustomModelDeploymentCommand = lt1;
  XA6.CreateEvaluationJobCommand = it1;
  XA6.CreateFoundationModelAgreementCommand = nt1;
  XA6.CreateGuardrailCommand = rt1;
  XA6.CreateGuardrailVersionCommand = ot1;
  XA6.CreateInferenceProfileCommand = at1;
  XA6.CreateMarketplaceModelEndpointCommand = st1;
  XA6.CreateModelCopyJobCommand = tt1;
  XA6.CreateModelCustomizationJobCommand = et1;
  XA6.CreateModelImportJobCommand = Ae1;
  XA6.CreateModelInvocationJobCommand = Ke1;
  XA6.CreatePromptRouterCommand = qe1;
  XA6.CreateProvisionedModelThroughputCommand = Ye1;
  XA6.CustomModelDeploymentStatus = tG3;
  XA6.CustomizationType = KZ3;
  XA6.DeleteAutomatedReasoningPolicyBuildWorkflowCommand = ze1;
  XA6.DeleteAutomatedReasoningPolicyCommand = we1;
  XA6.DeleteAutomatedReasoningPolicyTestCaseCommand = He1;
  XA6.DeleteCustomModelCommand = Je1;
  XA6.DeleteCustomModelDeploymentCommand = Oe1;
  XA6.DeleteFoundationModelAgreementCommand = Xe1;
  XA6.DeleteGuardrailCommand = $e1;
  XA6.DeleteImportedModelCommand = _e1;
  XA6.DeleteInferenceProfileCommand = Ge1;
  XA6.DeleteMarketplaceModelEndpointCommand = Ze1;
  XA6.DeleteModelInvocationLoggingConfigurationCommand = We1;
  XA6.DeletePromptRouterCommand = De1;
  XA6.DeleteProvisionedModelThroughputCommand = je1;
  XA6.DeregisterMarketplaceModelEndpointCommand = Me1;
  XA6.EntitlementAvailability = nZ3;
  XA6.EvaluationJobStatus = YZ3;
  XA6.EvaluationJobType = WZ3;
  XA6.EvaluationTaskType = wZ3;
  XA6.ExportAutomatedReasoningPolicyVersionCommand = Pe1;
  XA6.ExternalSourceType = JZ3;
  XA6.FineTuningJobStatus = tZ3;
  XA6.FoundationModelLifecycleStatus = QZ3;
  XA6.GetAutomatedReasoningPolicyAnnotationsCommand = Ve1;
  XA6.GetAutomatedReasoningPolicyBuildWorkflowCommand = fe1;
  XA6.GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand = Ne1;
  XA6.GetAutomatedReasoningPolicyCommand = Te1;
  XA6.GetAutomatedReasoningPolicyNextScenarioCommand = ve1;
  XA6.GetAutomatedReasoningPolicyTestCaseCommand = Ee1;
  XA6.GetAutomatedReasoningPolicyTestResultCommand = ke1;
  XA6.GetCustomModelCommand = Ce1;
  XA6.GetCustomModelDeploymentCommand = Le1;
  XA6.GetEvaluationJobCommand = Re1;
  XA6.GetFoundationModelAvailabilityCommand = ye1;
  XA6.GetFoundationModelCommand = Ie1;
  XA6.GetGuardrailCommand = Se1;
  XA6.GetImportedModelCommand = he1;
  XA6.GetInferenceProfileCommand = be1;
  XA6.GetMarketplaceModelEndpointCommand = xe1;
  XA6.GetModelCopyJobCommand = ue1;
  XA6.GetModelCustomizationJobCommand = Be1;
  XA6.GetModelImportJobCommand = me1;
  XA6.GetModelInvocationJobCommand = ge1;
  XA6.GetModelInvocationLoggingConfigurationCommand = Fe1;
  XA6.GetPromptRouterCommand = Qe1;
  XA6.GetProvisionedModelThroughputCommand = Ue1;
  XA6.GetUseCaseForModelAccessCommand = pe1;
  XA6.GuardrailContentFilterAction = jZ3;
  XA6.GuardrailContentFilterType = VZ3;
  XA6.GuardrailContentFiltersTierName = fZ3;
  XA6.GuardrailContextualGroundingAction = NZ3;
  XA6.GuardrailContextualGroundingFilterType = TZ3;
  XA6.GuardrailFilterStrength = PZ3;
  XA6.GuardrailManagedWordsType = yZ3;
  XA6.GuardrailModality = MZ3;
  XA6.GuardrailPiiEntityType = EZ3;
  XA6.GuardrailSensitiveInformationAction = vZ3;
  XA6.GuardrailStatus = IZ3;
  XA6.GuardrailTopicAction = CZ3;
  XA6.GuardrailTopicType = LZ3;
  XA6.GuardrailTopicsTierName = kZ3;
  XA6.GuardrailWordAction = RZ3;
  XA6.InferenceProfileStatus = SZ3;
  XA6.InferenceProfileType = hZ3;
  XA6.InferenceType = gZ3;
  XA6.InternalServerException = Zt8;
  XA6.JobStatusDetails = sZ3;
  XA6.ListAutomatedReasoningPoliciesCommand = S41;
  XA6.ListAutomatedReasoningPolicyBuildWorkflowsCommand = h41;
  XA6.ListAutomatedReasoningPolicyTestCasesCommand = b41;
  XA6.ListAutomatedReasoningPolicyTestResultsCommand = x41;
  XA6.ListCustomModelDeploymentsCommand = u41;
  XA6.ListCustomModelsCommand = B41;
  XA6.ListEvaluationJobsCommand = m41;
  XA6.ListFoundationModelAgreementOffersCommand = de1;
  XA6.ListFoundationModelsCommand = ce1;
  XA6.ListGuardrailsCommand = g41;
  XA6.ListImportedModelsCommand = F41;
  XA6.ListInferenceProfilesCommand = Q41;
  XA6.ListMarketplaceModelEndpointsCommand = U41;
  XA6.ListModelCopyJobsCommand = p41;
  XA6.ListModelCustomizationJobsCommand = d41;
  XA6.ListModelImportJobsCommand = c41;
  XA6.ListModelInvocationJobsCommand = l41;
  XA6.ListPromptRoutersCommand = i41;
  XA6.ListProvisionedModelThroughputsCommand = n41;
  XA6.ListTagsForResourceCommand = le1;
  XA6.ModelCopyJobStatus = bZ3;
  XA6.ModelCustomization = mZ3;
  XA6.ModelCustomizationJobStatus = aZ3;
  XA6.ModelImportJobStatus = xZ3;
  XA6.ModelInvocationJobStatus = BZ3;
  XA6.ModelModality = FZ3;
  XA6.ModelStatus = qZ3;
  XA6.OfferType = oZ3;
  XA6.PerformanceConfigLatency = HZ3;
  XA6.PromptRouterStatus = UZ3;
  XA6.PromptRouterType = pZ3;
  XA6.ProvisionedModelStatus = cZ3;
  XA6.PutModelInvocationLoggingConfigurationCommand = ie1;
  XA6.PutUseCaseForModelAccessCommand = ne1;
  XA6.QueryTransformationType = OZ3;
  XA6.RegionAvailability = rZ3;
  XA6.RegisterMarketplaceModelEndpointCommand = re1;
  XA6.RerankingMetadataSelectionMode = _Z3;
  XA6.ResourceInUseException = ft8;
  XA6.ResourceNotFoundException = Wt8;
  XA6.RetrieveAndGenerateType = ZZ3;
  XA6.S3InputFormat = uZ3;
  XA6.SearchType = $Z3;
  XA6.ServiceQuotaExceededException = Pt8;
  XA6.ServiceUnavailableException = Nt8;
  XA6.SortByProvisionedModels = lZ3;
  XA6.SortJobsBy = DZ3;
  XA6.SortModelsBy = eG3;
  XA6.SortOrder = AZ3;
  XA6.StartAutomatedReasoningPolicyBuildWorkflowCommand = oe1;
  XA6.StartAutomatedReasoningPolicyTestWorkflowCommand = ae1;
  XA6.Status = sG3;
  XA6.StopEvaluationJobCommand = se1;
  XA6.StopModelCustomizationJobCommand = te1;
  XA6.StopModelInvocationJobCommand = ee1;
  XA6.TagResourceCommand = AA6;
  XA6.ThrottlingException = Dt8;
  XA6.TooManyTagsException = Vt8;
  XA6.UntagResourceCommand = KA6;
  XA6.UpdateAutomatedReasoningPolicyAnnotationsCommand = qA6;
  XA6.UpdateAutomatedReasoningPolicyCommand = YA6;
  XA6.UpdateAutomatedReasoningPolicyTestCaseCommand = zA6;
  XA6.UpdateGuardrailCommand = wA6;
  XA6.UpdateMarketplaceModelEndpointCommand = HA6;
  XA6.UpdateProvisionedModelThroughputCommand = JA6;
  XA6.ValidationException = jt8;
  XA6.VectorSearchRerankingConfigurationType = GZ3;
  XA6.paginateListAutomatedReasoningPolicies = vG3;
  XA6.paginateListAutomatedReasoningPolicyBuildWorkflows = EG3;
  XA6.paginateListAutomatedReasoningPolicyTestCases = kG3;
  XA6.paginateListAutomatedReasoningPolicyTestResults = CG3;
  XA6.paginateListCustomModelDeployments = LG3;
  XA6.paginateListCustomModels = RG3;
  XA6.paginateListEvaluationJobs = yG3;
  XA6.paginateListGuardrails = IG3;
  XA6.paginateListImportedModels = SG3;
  XA6.paginateListInferenceProfiles = hG3;
  XA6.paginateListMarketplaceModelEndpoints = bG3;
  XA6.paginateListModelCopyJobs = xG3;
  XA6.paginateListModelCustomizationJobs = uG3;
  XA6.paginateListModelImportJobs = BG3;
  XA6.paginateListModelInvocationJobs = mG3;
  XA6.paginateListPromptRouters = gG3;
  XA6.paginateListProvisionedModelThroughputs = FG3;
});

// Register to shared state
__$.q14 = q14;
