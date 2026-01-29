// Module: iuA
// Dependencies: akA, IJ7, qT, m8, dO, sR, GjY, ZjY, WjY, DjY
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iuA = k(() => {
  __$.akA();
  __$.IJ7 = __$.qT({
    command: __$.m8(),
    args: __$.dO(__$.m8()).optional(),
    env: __$.sR(__$.m8(), __$.m8()).optional()
  }), __$.GjY = __$.qT({
    name: __$.m8(),
    email: __$.m8().email().optional(),
    url: __$.m8().url().optional()
  }), __$.ZjY = __$.qT({
    type: __$.m8(),
    url: __$.m8().url()
  }), __$.WjY = __$.IJ7.partial(), __$.DjY = __$.IJ7.extend({
    platform_overrides: __$.sR(__$.m8(), __$.WjY).optional()
  }), __$.jjY = __$.qT({
    type: __$.tR(["python", "node", "binary"]),
    entry_point: __$.m8(),
    mcp_config: __$.DjY
  }), __$.MjY = __$.qT({
    claude_desktop: __$.m8().optional(),
    platforms: __$.dO(__$.tR(["darwin", "win32", "linux"])).optional(),
    runtimes: __$.qT({
      python: __$.m8().optional(),
      node: __$.m8().optional()
    }).optional()
  }).passthrough(), __$.PjY = __$.qT({
    name: __$.m8(),
    description: __$.m8().optional()
  }), __$.VjY = __$.qT({
    name: __$.m8(),
    description: __$.m8().optional(),
    arguments: __$.dO(__$.m8()).optional(),
    text: __$.m8()
  }), __$.fjY = __$.qT({
    type: __$.tR(["string", "number", "boolean", "directory", "file"]),
    title: __$.m8(),
    description: __$.m8(),
    required: __$.o_().optional(),
    default: __$.U6A([__$.m8(), __$.nE(), __$.o_(), __$.dO(__$.m8())]).optional(),
    multiple: __$.o_().optional(),
    sensitive: __$.o_().optional(),
    min: __$.nE().optional(),
    max: __$.nE().optional()
  }), __$.u6H = __$.sR(__$.m8(), __$.U6A([__$.m8(), __$.nE(), __$.o_(), __$.dO(__$.m8())])), __$.WX1 = __$.qT({
    $schema: __$.m8().optional(),
    dxt_version: __$.m8().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: __$.m8().optional(),
    name: __$.m8(),
    display_name: __$.m8().optional(),
    version: __$.m8(),
    description: __$.m8(),
    long_description: __$.m8().optional(),
    author: __$.GjY,
    repository: __$.ZjY.optional(),
    homepage: __$.m8().url().optional(),
    documentation: __$.m8().url().optional(),
    support: __$.m8().url().optional(),
    icon: __$.m8().optional(),
    screenshots: __$.dO(__$.m8()).optional(),
    server: __$.jjY,
    tools: __$.dO(__$.PjY).optional(),
    tools_generated: __$.o_().optional(),
    prompts: __$.dO(__$.VjY).optional(),
    prompts_generated: __$.o_().optional(),
    keywords: __$.dO(__$.m8()).optional(),
    license: __$.m8().optional(),
    privacy_policies: __$.dO(__$.m8()).optional(),
    compatibility: __$.MjY.optional(),
    user_config: __$.sR(__$.m8(), __$.fjY).optional()
  }).refine(A => !!(A.dxt_version || A.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }), __$.B6H = __$.qT({
    status: __$.tR(["signed", "unsigned", "self-signed"]),
    publisher: __$.m8().optional(),
    issuer: __$.m8().optional(),
    valid_from: __$.m8().optional(),
    valid_to: __$.m8().optional(),
    fingerprint: __$.m8().optional()
  });
});

// Register to shared state
__$.iuA = iuA;
