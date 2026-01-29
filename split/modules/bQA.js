// Module: bQA
// Dependencies: sN, C1, Z1, IH, l1, ea, Ys, q6, cT, aU
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bQA = k(() => {
  __$.sN();
  __$.C1();
  __$.Z1();
  __$.IH();
  __$.l1();
  __$.ea();
  __$.Ys();
  __$.q6();
  __$.cT();
  __$.aU();
  __$.Gj2 = {
    litellm: {
      prefixes: ["x-litellm-"]
    },
    helicone: {
      prefixes: ["helicone-"]
    },
    portkey: {
      prefixes: ["x-portkey-"]
    },
    "cloudflare-ai-gateway": {
      prefixes: ["cf-aig-"]
    }
  };
  __$.lf = {
    input_tokens: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 0,
    server_tool_use: {
      web_search_requests: 0,
      web_fetch_requests: 0
    },
    service_tier: "standard",
    cache_creation: {
      ephemeral_1h_input_tokens: 0,
      ephemeral_5m_input_tokens: 0
    }
  };
});

// Register to shared state
__$.bQA = bQA;
