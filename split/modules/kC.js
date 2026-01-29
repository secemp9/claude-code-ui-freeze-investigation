// Module: kC
// Dependencies: p7, z7, l1, Z1, nQ, C1, aQ, K7, aZ, B57
//   ... and 28 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kC = k(() => {
  __$.p7();
  __$.z7();
  __$.l1();
  __$.Z1();
  __$.nQ();
  __$.C1();
  __$.aQ();
  __$.K7();
  __$.aZ();
  __$.B57();
  __$.rU();
  __$.bxA();
  __$.n_();
  __$.H7A();
  __$.b1();
  __$.xxA();
  __$.jV();
  __$.cO();
  __$.Q57 = __$.U.union([__$.U.string(), __$.U.record(__$.U.string(), __$.dx)]), __$.U57 = __$.U.object({
    description: __$.U.string().min(1, "Description cannot be empty"),
    tools: __$.U.array(__$.U.string()).optional(),
    disallowedTools: __$.U.array(__$.U.string()).optional(),
    prompt: __$.U.string().min(1, "Prompt cannot be empty"),
    model: __$.U.enum(__$.YXA).optional(),
    permissionMode: __$.U.enum(__$.Ei).optional(),
    mcpServers: __$.U.array(__$.Q57).optional(),
    hooks: __$.U.lazy(() => __$.ek).optional(),
    maxTurns: __$.U.number().int().positive().optional(),
    skills: __$.U.array(__$.U.string()).optional(),
    memory: __$.U.enum(["user", "project", "local"]).optional()
  }), __$.jzY = __$.U.record(__$.U.string(), __$.U57);
  __$.d57 = __$.z6(async A => {
    try {
      let K = await __$.oQ("agents", A),
        q = [],
        Y = K.map(({
          filePath: O,
          baseDir: X,
          frontmatter: $,
          content: _,
          source: G
        }) => {
          let Z = __$.fzY(O, X, $, _, G);
          if (!Z) {
            let W = __$.MzY($);
            return q.push({
              path: O,
              error: W
            }), __$.h(`Failed to parse agent from ${O}: ${W}`), __$.n("tengu_agent_parse_error", {
              error: W,
              location: G
            }), null;
          }
          return Z;
        }).filter(O => O !== null),
        z = await __$.rKA(),
        H = [...__$.I_6(), ...z, ...Y],
        J = __$.nU(H);
      for (let O of J) if (O.color) __$.EGA(O.agentType, O.color);
      return {
        activeAgents: J,
        allAgents: H,
        failedFiles: q.length > 0 ? q : void 0
      };
    } catch (K) {
      let q = K instanceof Error ? K.message : String(K);
      __$.h(`Error loading agent definitions: ${q}`), __$.KA(K instanceof Error ? K : Error(String(K)));
      let Y = __$.I_6();
      return {
        activeAgents: Y,
        allAgents: Y,
        failedFiles: [{
          path: "unknown",
          error: q
        }]
      };
    }
  });
});

// Register to shared state
__$.kC = kC;
