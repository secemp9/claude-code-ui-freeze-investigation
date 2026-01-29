// Module: G_
// Dependencies: z7, SO1, Ha, mu, kp1, U97, gz, U1, iY, p97
//   ... and 166 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G_ = k(() => {
  __$.z7();
  __$.SO1 = [__$.Ha, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], __$.mu = __$.kp1(A => A !== null && (typeof A === "object" || typeof A === "function")), __$.U97 = __$.gz([__$.U1(), __$.iY().int()]), __$.p97 = __$.U1(), __$.IHY = __$.NZ({
    ttl: __$.gz([__$.iY(), __$.QEA()]).optional(),
    pollInterval: __$.iY().optional()
  }), __$.jG6 = __$.NZ({
    taskId: __$.U1()
  }), __$.SHY = __$.NZ({
    progressToken: __$.U97.optional(),
    [__$.gu]: __$.jG6.optional()
  }), __$.Jf = __$.NZ({
    task: __$.IHY.optional(),
    _meta: __$.SHY.optional()
  }), __$.eZ = __$.w4({
    method: __$.U1(),
    params: __$.Jf.optional()
  }), __$.qqA = __$.NZ({
    _meta: __$.w4({
      [__$.gu]: __$.GK(__$.jG6)
    }).passthrough().optional()
  }), __$.LC = __$.w4({
    method: __$.U1(),
    params: __$.qqA.optional()
  }), __$.pD = __$.NZ({
    _meta: __$.NZ({
      [__$.gu]: __$.jG6.optional()
    }).optional()
  }), __$.bO1 = __$.gz([__$.U1(), __$.iY().int()]), __$.d97 = __$.w4({
    jsonrpc: __$.AK(__$.hO1),
    id: __$.bO1,
    ...__$.eZ.shape
  }).strict(), __$.c97 = __$.w4({
    jsonrpc: __$.AK(__$.hO1),
    ...__$.LC.shape
  }).strict(), __$.i97 = __$.w4({
    jsonrpc: __$.AK(__$.hO1),
    id: __$.bO1,
    result: __$.pD
  }).strict();
  (function (A) {
    A[A.ConnectionClosed = -32000] = "ConnectionClosed", A[A.RequestTimeout = -32001] = "RequestTimeout", A[A.ParseError = -32700] = "ParseError", A[A.InvalidRequest = -32600] = "InvalidRequest", A[A.MethodNotFound = -32601] = "MethodNotFound", A[A.InvalidParams = -32602] = "InvalidParams", A[A.InternalError = -32603] = "InternalError", A[A.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
  })(__$.Hq || (__$.Hq = {}));
  __$.n97 = __$.w4({
    jsonrpc: __$.AK(__$.hO1),
    id: __$.bO1,
    error: __$.w4({
      code: __$.iY().int(),
      message: __$.U1(),
      data: __$.GK(__$.p0())
    })
  }).strict(), __$.Fu = __$.gz([__$.d97, __$.c97, __$.i97, __$.n97]), __$.qp = __$.pD.strict(), __$.hHY = __$.qqA.extend({
    requestId: __$.bO1,
    reason: __$.U1().optional()
  }), __$.xO1 = __$.LC.extend({
    method: __$.AK("notifications/cancelled"),
    params: __$.hHY
  }), __$.bHY = __$.w4({
    src: __$.U1(),
    mimeType: __$.U1().optional(),
    sizes: __$.b4(__$.U1()).optional()
  }), __$.exA = __$.w4({
    icons: __$.b4(__$.bHY).optional()
  }), __$.UGA = __$.w4({
    name: __$.U1(),
    title: __$.U1().optional()
  }), __$.o97 = __$.UGA.extend({
    ...__$.UGA.shape,
    ...__$.exA.shape,
    version: __$.U1(),
    websiteUrl: __$.U1().optional()
  }), __$.xHY = __$.UEA(__$.w4({
    applyDefaults: __$.mz().optional()
  }), __$.UO(__$.U1(), __$.p0())), __$.uHY = __$.HA1(A => {
    if (A && typeof A === "object" && !Array.isArray(A)) {
      if (Object.keys(A).length === 0) return {
        form: {}
      };
    }
    return A;
  }, __$.UEA(__$.w4({
    form: __$.xHY.optional(),
    url: __$.mu.optional()
  }), __$.UO(__$.U1(), __$.p0()).optional())), __$.BHY = __$.w4({
    list: __$.GK(__$.w4({}).passthrough()),
    cancel: __$.GK(__$.w4({}).passthrough()),
    requests: __$.GK(__$.w4({
      sampling: __$.GK(__$.w4({
        createMessage: __$.GK(__$.w4({}).passthrough())
      }).passthrough()),
      elicitation: __$.GK(__$.w4({
        create: __$.GK(__$.w4({}).passthrough())
      }).passthrough())
    }).passthrough())
  }).passthrough(), __$.mHY = __$.w4({
    list: __$.GK(__$.w4({}).passthrough()),
    cancel: __$.GK(__$.w4({}).passthrough()),
    requests: __$.GK(__$.w4({
      tools: __$.GK(__$.w4({
        call: __$.GK(__$.w4({}).passthrough())
      }).passthrough())
    }).passthrough())
  }).passthrough(), __$.gHY = __$.w4({
    experimental: __$.UO(__$.U1(), __$.mu).optional(),
    sampling: __$.w4({
      context: __$.mu.optional(),
      tools: __$.mu.optional()
    }).optional(),
    elicitation: __$.uHY.optional(),
    roots: __$.w4({
      listChanged: __$.mz().optional()
    }).optional(),
    tasks: __$.GK(__$.BHY)
  }), __$.FHY = __$.Jf.extend({
    protocolVersion: __$.U1(),
    capabilities: __$.gHY,
    clientInfo: __$.o97
  }), __$.MG6 = __$.eZ.extend({
    method: __$.AK("initialize"),
    params: __$.FHY
  }), __$.QHY = __$.w4({
    experimental: __$.UO(__$.U1(), __$.mu).optional(),
    logging: __$.mu.optional(),
    completions: __$.mu.optional(),
    prompts: __$.GK(__$.w4({
      listChanged: __$.GK(__$.mz())
    })),
    resources: __$.w4({
      subscribe: __$.mz().optional(),
      listChanged: __$.mz().optional()
    }).optional(),
    tools: __$.w4({
      listChanged: __$.mz().optional()
    }).optional(),
    tasks: __$.GK(__$.mHY)
  }).passthrough(), __$.PG6 = __$.pD.extend({
    protocolVersion: __$.U1(),
    capabilities: __$.QHY,
    serverInfo: __$.o97,
    instructions: __$.U1().optional()
  }), __$.uO1 = __$.LC.extend({
    method: __$.AK("notifications/initialized")
  }), __$.BO1 = __$.eZ.extend({
    method: __$.AK("ping")
  }), __$.UHY = __$.w4({
    progress: __$.iY(),
    total: __$.GK(__$.iY()),
    message: __$.GK(__$.U1())
  }), __$.pHY = __$.w4({
    ...__$.qqA.shape,
    ...__$.UHY.shape,
    progressToken: __$.U97
  }), __$.mO1 = __$.LC.extend({
    method: __$.AK("notifications/progress"),
    params: __$.pHY
  }), __$.dHY = __$.Jf.extend({
    cursor: __$.p97.optional()
  }), __$.AuA = __$.eZ.extend({
    params: __$.dHY.optional()
  }), __$.KuA = __$.pD.extend({
    nextCursor: __$.GK(__$.p97)
  }), __$.quA = __$.w4({
    taskId: __$.U1(),
    status: __$.i_(["working", "input_required", "completed", "failed", "cancelled"]),
    ttl: __$.gz([__$.iY(), __$.QEA()]),
    createdAt: __$.U1(),
    lastUpdatedAt: __$.U1(),
    pollInterval: __$.GK(__$.iY()),
    statusMessage: __$.GK(__$.U1())
  }), __$.Yp = __$.pD.extend({
    task: __$.quA
  }), __$.cHY = __$.qqA.merge(__$.quA), __$.YuA = __$.LC.extend({
    method: __$.AK("notifications/tasks/status"),
    params: __$.cHY
  }), __$.gO1 = __$.eZ.extend({
    method: __$.AK("tasks/get"),
    params: __$.Jf.extend({
      taskId: __$.U1()
    })
  }), __$.FO1 = __$.pD.merge(__$.quA), __$.QO1 = __$.eZ.extend({
    method: __$.AK("tasks/result"),
    params: __$.Jf.extend({
      taskId: __$.U1()
    })
  }), __$.UO1 = __$.AuA.extend({
    method: __$.AK("tasks/list")
  }), __$.pO1 = __$.KuA.extend({
    tasks: __$.b4(__$.quA)
  }), __$.s97 = __$.eZ.extend({
    method: __$.AK("tasks/cancel"),
    params: __$.Jf.extend({
      taskId: __$.U1()
    })
  }), __$.t97 = __$.pD.merge(__$.quA), __$.e97 = __$.w4({
    uri: __$.U1(),
    mimeType: __$.GK(__$.U1()),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.AY7 = __$.e97.extend({
    text: __$.U1()
  }), __$.VG6 = __$.U1().refine(A => {
    try {
      return atob(A), !0;
    } catch (K) {
      return !1;
    }
  }, {
    message: "Invalid Base64 string"
  }), __$.KY7 = __$.e97.extend({
    blob: __$.VG6
  }), __$.pGA = __$.w4({
    audience: __$.b4(__$.i_(["user", "assistant"])).optional(),
    priority: __$.iY().min(0).max(1).optional(),
    lastModified: __$.iHA.datetime({
      offset: !0
    }).optional()
  }), __$.qY7 = __$.w4({
    ...__$.UGA.shape,
    ...__$.exA.shape,
    uri: __$.U1(),
    description: __$.GK(__$.U1()),
    mimeType: __$.GK(__$.U1()),
    annotations: __$.pGA.optional(),
    _meta: __$.GK(__$.NZ({}))
  }), __$.lHY = __$.w4({
    ...__$.UGA.shape,
    ...__$.exA.shape,
    uriTemplate: __$.U1(),
    description: __$.GK(__$.U1()),
    mimeType: __$.GK(__$.U1()),
    annotations: __$.pGA.optional(),
    _meta: __$.GK(__$.NZ({}))
  }), __$.iHY = __$.AuA.extend({
    method: __$.AK("resources/list")
  }), __$.zqA = __$.KuA.extend({
    resources: __$.b4(__$.qY7)
  }), __$.nHY = __$.AuA.extend({
    method: __$.AK("resources/templates/list")
  }), __$.fG6 = __$.KuA.extend({
    resourceTemplates: __$.b4(__$.lHY)
  }), __$.NG6 = __$.Jf.extend({
    uri: __$.U1()
  }), __$.rHY = __$.NG6, __$.oHY = __$.eZ.extend({
    method: __$.AK("resources/read"),
    params: __$.rHY
  }), __$.wqA = __$.pD.extend({
    contents: __$.b4(__$.gz([__$.AY7, __$.KY7]))
  }), __$.TG6 = __$.LC.extend({
    method: __$.AK("notifications/resources/list_changed")
  }), __$.aHY = __$.NG6, __$.sHY = __$.eZ.extend({
    method: __$.AK("resources/subscribe"),
    params: __$.aHY
  }), __$.tHY = __$.NG6, __$.eHY = __$.eZ.extend({
    method: __$.AK("resources/unsubscribe"),
    params: __$.tHY
  }), __$.AJY = __$.qqA.extend({
    uri: __$.U1()
  }), __$.KJY = __$.LC.extend({
    method: __$.AK("notifications/resources/updated"),
    params: __$.AJY
  }), __$.qJY = __$.w4({
    name: __$.U1(),
    description: __$.GK(__$.U1()),
    required: __$.GK(__$.mz())
  }), __$.YJY = __$.w4({
    ...__$.UGA.shape,
    ...__$.exA.shape,
    description: __$.GK(__$.U1()),
    arguments: __$.GK(__$.b4(__$.qJY)),
    _meta: __$.GK(__$.NZ({}))
  }), __$.zJY = __$.AuA.extend({
    method: __$.AK("prompts/list")
  }), __$.zuA = __$.KuA.extend({
    prompts: __$.b4(__$.YJY)
  }), __$.wJY = __$.Jf.extend({
    name: __$.U1(),
    arguments: __$.UO(__$.U1(), __$.U1()).optional()
  }), __$.HJY = __$.eZ.extend({
    method: __$.AK("prompts/get"),
    params: __$.wJY
  }), __$.vG6 = __$.w4({
    type: __$.AK("text"),
    text: __$.U1(),
    annotations: __$.pGA.optional(),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.EG6 = __$.w4({
    type: __$.AK("image"),
    data: __$.VG6,
    mimeType: __$.U1(),
    annotations: __$.pGA.optional(),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.kG6 = __$.w4({
    type: __$.AK("audio"),
    data: __$.VG6,
    mimeType: __$.U1(),
    annotations: __$.pGA.optional(),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.JJY = __$.w4({
    type: __$.AK("tool_use"),
    name: __$.U1(),
    id: __$.U1(),
    input: __$.w4({}).passthrough(),
    _meta: __$.GK(__$.w4({}).passthrough())
  }).passthrough(), __$.OJY = __$.w4({
    type: __$.AK("resource"),
    resource: __$.gz([__$.AY7, __$.KY7]),
    annotations: __$.pGA.optional(),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.XJY = __$.qY7.extend({
    type: __$.AK("resource_link")
  }), __$.CG6 = __$.gz([__$.vG6, __$.EG6, __$.kG6, __$.XJY, __$.OJY]), __$.$JY = __$.w4({
    role: __$.i_(["user", "assistant"]),
    content: __$.CG6
  }), __$.LG6 = __$.pD.extend({
    description: __$.GK(__$.U1()),
    messages: __$.b4(__$.$JY)
  }), __$.RG6 = __$.LC.extend({
    method: __$.AK("notifications/prompts/list_changed")
  }), __$._JY = __$.w4({
    title: __$.U1().optional(),
    readOnlyHint: __$.mz().optional(),
    destructiveHint: __$.mz().optional(),
    idempotentHint: __$.mz().optional(),
    openWorldHint: __$.mz().optional()
  }), __$.GJY = __$.w4({
    taskSupport: __$.i_(["required", "optional", "forbidden"]).optional()
  }), __$.YY7 = __$.w4({
    ...__$.UGA.shape,
    ...__$.exA.shape,
    description: __$.U1().optional(),
    inputSchema: __$.w4({
      type: __$.AK("object"),
      properties: __$.UO(__$.U1(), __$.mu).optional(),
      required: __$.b4(__$.U1()).optional()
    }).catchall(__$.p0()),
    outputSchema: __$.w4({
      type: __$.AK("object"),
      properties: __$.UO(__$.U1(), __$.mu).optional(),
      required: __$.b4(__$.U1()).optional()
    }).catchall(__$.p0()).optional(),
    annotations: __$.GK(__$._JY),
    execution: __$.GK(__$.GJY),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.wuA = __$.AuA.extend({
    method: __$.AK("tools/list")
  }), __$.HuA = __$.KuA.extend({
    tools: __$.b4(__$.YY7)
  }), __$.mM = __$.pD.extend({
    content: __$.b4(__$.CG6).default([]),
    structuredContent: __$.UO(__$.U1(), __$.p0()).optional(),
    isError: __$.GK(__$.mz())
  }), __$.uow = __$.mM.or(__$.pD.extend({
    toolResult: __$.p0()
  })), __$.ZJY = __$.Jf.extend({
    name: __$.U1(),
    arguments: __$.GK(__$.UO(__$.U1(), __$.p0()))
  }), __$.HqA = __$.eZ.extend({
    method: __$.AK("tools/call"),
    params: __$.ZJY
  }), __$.yG6 = __$.LC.extend({
    method: __$.AK("notifications/tools/list_changed")
  }), __$.JuA = __$.i_(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), __$.WJY = __$.Jf.extend({
    level: __$.JuA
  }), __$.IG6 = __$.eZ.extend({
    method: __$.AK("logging/setLevel"),
    params: __$.WJY
  }), __$.DJY = __$.qqA.extend({
    level: __$.JuA,
    logger: __$.U1().optional(),
    data: __$.p0()
  }), __$.jJY = __$.LC.extend({
    method: __$.AK("notifications/message"),
    params: __$.DJY
  }), __$.MJY = __$.w4({
    name: __$.U1().optional()
  }), __$.PJY = __$.w4({
    hints: __$.GK(__$.b4(__$.MJY)),
    costPriority: __$.GK(__$.iY().min(0).max(1)),
    speedPriority: __$.GK(__$.iY().min(0).max(1)),
    intelligencePriority: __$.GK(__$.iY().min(0).max(1))
  }), __$.VJY = __$.w4({
    mode: __$.GK(__$.i_(["auto", "required", "none"]))
  }), __$.fJY = __$.w4({
    type: __$.AK("tool_result"),
    toolUseId: __$.U1().describe("The unique identifier for the corresponding tool call."),
    content: __$.b4(__$.CG6).default([]),
    structuredContent: __$.w4({}).passthrough().optional(),
    isError: __$.GK(__$.mz()),
    _meta: __$.GK(__$.w4({}).passthrough())
  }).passthrough(), __$.NJY = __$.zA1("type", [__$.vG6, __$.EG6, __$.kG6]), __$.IO1 = __$.zA1("type", [__$.vG6, __$.EG6, __$.kG6, __$.JJY, __$.fJY]), __$.TJY = __$.w4({
    role: __$.i_(["user", "assistant"]),
    content: __$.gz([__$.IO1, __$.b4(__$.IO1)]),
    _meta: __$.GK(__$.w4({}).passthrough())
  }).passthrough(), __$.vJY = __$.Jf.extend({
    messages: __$.b4(__$.TJY),
    modelPreferences: __$.PJY.optional(),
    systemPrompt: __$.U1().optional(),
    includeContext: __$.i_(["none", "thisServer", "allServers"]).optional(),
    temperature: __$.iY().optional(),
    maxTokens: __$.iY().int(),
    stopSequences: __$.b4(__$.U1()).optional(),
    metadata: __$.mu.optional(),
    tools: __$.GK(__$.b4(__$.YY7)),
    toolChoice: __$.GK(__$.VJY)
  }), __$.SG6 = __$.eZ.extend({
    method: __$.AK("sampling/createMessage"),
    params: __$.vJY
  }), __$.OuA = __$.pD.extend({
    model: __$.U1(),
    stopReason: __$.GK(__$.i_(["endTurn", "stopSequence", "maxTokens"]).or(__$.U1())),
    role: __$.i_(["user", "assistant"]),
    content: __$.NJY
  }), __$.hG6 = __$.pD.extend({
    model: __$.U1(),
    stopReason: __$.GK(__$.i_(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(__$.U1())),
    role: __$.i_(["user", "assistant"]),
    content: __$.gz([__$.IO1, __$.b4(__$.IO1)])
  }), __$.EJY = __$.w4({
    type: __$.AK("boolean"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    default: __$.mz().optional()
  }), __$.kJY = __$.w4({
    type: __$.AK("string"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    minLength: __$.iY().optional(),
    maxLength: __$.iY().optional(),
    format: __$.i_(["email", "uri", "date", "date-time"]).optional(),
    default: __$.U1().optional()
  }), __$.CJY = __$.w4({
    type: __$.i_(["number", "integer"]),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    minimum: __$.iY().optional(),
    maximum: __$.iY().optional(),
    default: __$.iY().optional()
  }), __$.LJY = __$.w4({
    type: __$.AK("string"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    enum: __$.b4(__$.U1()),
    default: __$.U1().optional()
  }), __$.RJY = __$.w4({
    type: __$.AK("string"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    oneOf: __$.b4(__$.w4({
      const: __$.U1(),
      title: __$.U1()
    })),
    default: __$.U1().optional()
  }), __$.yJY = __$.w4({
    type: __$.AK("string"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    enum: __$.b4(__$.U1()),
    enumNames: __$.b4(__$.U1()).optional(),
    default: __$.U1().optional()
  }), __$.IJY = __$.gz([__$.LJY, __$.RJY]), __$.SJY = __$.w4({
    type: __$.AK("array"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    minItems: __$.iY().optional(),
    maxItems: __$.iY().optional(),
    items: __$.w4({
      type: __$.AK("string"),
      enum: __$.b4(__$.U1())
    }),
    default: __$.b4(__$.U1()).optional()
  }), __$.hJY = __$.w4({
    type: __$.AK("array"),
    title: __$.U1().optional(),
    description: __$.U1().optional(),
    minItems: __$.iY().optional(),
    maxItems: __$.iY().optional(),
    items: __$.w4({
      anyOf: __$.b4(__$.w4({
        const: __$.U1(),
        title: __$.U1()
      }))
    }),
    default: __$.b4(__$.U1()).optional()
  }), __$.bJY = __$.gz([__$.SJY, __$.hJY]), __$.xJY = __$.gz([__$.yJY, __$.IJY, __$.bJY]), __$.uJY = __$.gz([__$.xJY, __$.EJY, __$.kJY, __$.CJY]), __$.BJY = __$.Jf.extend({
    mode: __$.AK("form").optional(),
    message: __$.U1(),
    requestedSchema: __$.w4({
      type: __$.AK("object"),
      properties: __$.UO(__$.U1(), __$.uJY),
      required: __$.b4(__$.U1()).optional()
    })
  }), __$.mJY = __$.Jf.extend({
    mode: __$.AK("url"),
    message: __$.U1(),
    elicitationId: __$.U1(),
    url: __$.U1().url()
  }), __$.gJY = __$.gz([__$.BJY, __$.mJY]), __$.dO1 = __$.eZ.extend({
    method: __$.AK("elicitation/create"),
    params: __$.gJY
  }), __$.FJY = __$.qqA.extend({
    elicitationId: __$.U1()
  }), __$.QJY = __$.LC.extend({
    method: __$.AK("notifications/elicitation/complete"),
    params: __$.FJY
  }), __$.dGA = __$.pD.extend({
    action: __$.i_(["accept", "decline", "cancel"]),
    content: __$.HA1(A => A === null ? void 0 : A, __$.UO(__$.U1(), __$.gz([__$.U1(), __$.iY(), __$.mz(), __$.b4(__$.U1())])).optional())
  }), __$.UJY = __$.w4({
    type: __$.AK("ref/resource"),
    uri: __$.U1()
  }), __$.pJY = __$.w4({
    type: __$.AK("ref/prompt"),
    name: __$.U1()
  }), __$.dJY = __$.Jf.extend({
    ref: __$.gz([__$.pJY, __$.UJY]),
    argument: __$.w4({
      name: __$.U1(),
      value: __$.U1()
    }),
    context: __$.w4({
      arguments: __$.UO(__$.U1(), __$.U1()).optional()
    }).optional()
  }), __$.cJY = __$.eZ.extend({
    method: __$.AK("completion/complete"),
    params: __$.dJY
  }), __$.bG6 = __$.pD.extend({
    completion: __$.NZ({
      values: __$.b4(__$.U1()).max(100),
      total: __$.GK(__$.iY().int()),
      hasMore: __$.GK(__$.mz())
    })
  }), __$.lJY = __$.w4({
    uri: __$.U1().startsWith("file://"),
    name: __$.U1().optional(),
    _meta: __$.UO(__$.U1(), __$.p0()).optional()
  }), __$.xG6 = __$.eZ.extend({
    method: __$.AK("roots/list")
  }), __$.uG6 = __$.pD.extend({
    roots: __$.b4(__$.lJY)
  }), __$.iJY = __$.LC.extend({
    method: __$.AK("notifications/roots/list_changed")
  }), __$.Bow = __$.gz([__$.BO1, __$.MG6, __$.cJY, __$.IG6, __$.HJY, __$.zJY, __$.iHY, __$.nHY, __$.oHY, __$.sHY, __$.eHY, __$.HqA, __$.wuA, __$.gO1, __$.QO1, __$.UO1]), __$.mow = __$.gz([__$.xO1, __$.mO1, __$.uO1, __$.iJY, __$.YuA]), __$.gow = __$.gz([__$.qp, __$.OuA, __$.hG6, __$.dGA, __$.uG6, __$.FO1, __$.pO1, __$.Yp]), __$.Fow = __$.gz([__$.BO1, __$.SG6, __$.dO1, __$.xG6, __$.gO1, __$.QO1, __$.UO1]), __$.Qow = __$.gz([__$.xO1, __$.mO1, __$.jJY, __$.KJY, __$.TG6, __$.yG6, __$.RG6, __$.YuA, __$.QJY]), __$.Uow = __$.gz([__$.qp, __$.PG6, __$.bG6, __$.LG6, __$.zuA, __$.zqA, __$.fG6, __$.wqA, __$.mM, __$.HuA, __$.FO1, __$.pO1, __$.Yp]);
  __$.MK = class MK extends Error {
    constructor(A, K, q) {
      super(`MCP error ${A}: ${K}`);
      this.code = A, this.data = q, this.name = "McpError";
    }
    static fromError(A, K, q) {
      if (A === __$.Hq.UrlElicitationRequired && q) {
        let Y = q;
        if (Y.elicitations) return new __$.zY7(Y.elicitations, K);
      }
      return new __$.MK(A, K, q);
    }
  };
  __$.zY7 = class zY7 extends __$.MK {
    constructor(A, K = `URL elicitation${A.length > 1 ? "s" : ""} required`) {
      super(__$.Hq.UrlElicitationRequired, K, {
        elicitations: A
      });
    }
    get elicitations() {
      var A, K;
      return (K = (A = this.data) === null || A === void 0 ? void 0 : A.elicitations) !== null && K !== void 0 ? K : [];
    }
  };
});

// Register to shared state
__$.G_ = G_;
