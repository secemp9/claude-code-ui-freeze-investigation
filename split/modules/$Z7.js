// Module: $Z7
// Dependencies: akA, XZ7, KT, m8, dO, sR, eEY, AkY, KkY, qkY
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $Z7 = k(() => {
  __$.akA();
  __$.XZ7 = __$.KT({
    command: __$.m8(),
    args: __$.dO(__$.m8()).optional(),
    env: __$.sR(__$.m8(), __$.m8()).optional()
  }), __$.eEY = __$.KT({
    name: __$.m8(),
    email: __$.m8().email().optional(),
    url: __$.m8().url().optional()
  }), __$.AkY = __$.KT({
    type: __$.m8(),
    url: __$.m8().url()
  }), __$.KkY = __$.XZ7.partial(), __$.qkY = __$.XZ7.extend({
    platform_overrides: __$.sR(__$.m8(), __$.KkY).optional()
  }), __$.YkY = __$.KT({
    type: __$.tR(["python", "node", "binary"]),
    entry_point: __$.m8(),
    mcp_config: __$.qkY
  }), __$.zkY = __$.KT({
    claude_desktop: __$.m8().optional(),
    platforms: __$.dO(__$.tR(["darwin", "win32", "linux"])).optional(),
    runtimes: __$.KT({
      python: __$.m8().optional(),
      node: __$.m8().optional()
    }).optional()
  }).passthrough(), __$.wkY = __$.KT({
    name: __$.m8(),
    description: __$.m8().optional()
  }), __$.HkY = __$.KT({
    name: __$.m8(),
    description: __$.m8().optional(),
    arguments: __$.dO(__$.m8()).optional(),
    text: __$.m8()
  }), __$.JkY = __$.KT({
    type: __$.tR(["string", "number", "boolean", "directory", "file"]),
    title: __$.m8(),
    description: __$.m8(),
    required: __$.o_().optional(),
    default: __$.U6A([__$.m8(), __$.nE(), __$.o_(), __$.dO(__$.m8())]).optional(),
    multiple: __$.o_().optional(),
    sensitive: __$.o_().optional(),
    min: __$.nE().optional(),
    max: __$.nE().optional()
  }), __$.e4H = __$.sR(__$.m8(), __$.U6A([__$.m8(), __$.nE(), __$.o_(), __$.dO(__$.m8())])), __$.OkY = __$.KT({
    $schema: __$.m8().optional(),
    dxt_version: __$.m8().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: __$.m8().optional(),
    name: __$.m8(),
    display_name: __$.m8().optional(),
    version: __$.m8(),
    description: __$.m8(),
    long_description: __$.m8().optional(),
    author: __$.eEY,
    repository: __$.AkY.optional(),
    homepage: __$.m8().url().optional(),
    documentation: __$.m8().url().optional(),
    support: __$.m8().url().optional(),
    icon: __$.m8().optional(),
    screenshots: __$.dO(__$.m8()).optional(),
    server: __$.YkY,
    tools: __$.dO(__$.wkY).optional(),
    tools_generated: __$.o_().optional(),
    prompts: __$.dO(__$.HkY).optional(),
    prompts_generated: __$.o_().optional(),
    keywords: __$.dO(__$.m8()).optional(),
    license: __$.m8().optional(),
    compatibility: __$.zkY.optional(),
    user_config: __$.sR(__$.m8(), __$.JkY).optional()
  }).refine(A => !!(A.dxt_version || A.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }), __$.A7H = __$.KT({
    status: __$.tR(["signed", "unsigned", "self-signed"]),
    publisher: __$.m8().optional(),
    issuer: __$.m8().optional(),
    valid_from: __$.m8().optional(),
    valid_to: __$.m8().optional(),
    fingerprint: __$.m8().optional()
  });
});

// Register to shared state
__$.$Z7 = $Z7;
