// Module: ykK
// Dependencies: BU6, xVA, u5, Vf, i6, ns, l1, sO, z7, n3
//   ... and 42 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ykK = k(() => {
  __$.BU6();
  __$.xVA();
  __$.u5();
  __$.Vf();
  __$.i6();
  __$.ns();
  __$.l1();
  __$.sO();
  __$.z7();
  __$.n3();
  __$.mU6();
  __$.gU6();
  __$.FU6();
  __$.QU6();
  __$.UU6();
  __$.pU6();
  __$.G_();
  __$.IG();
  __$.IcA();
  __$.b1();
  __$.ScA = class ScA extends Error {
    constructor(A) {
      super(A);
      this.name = "ConnectionFailedError";
    }
  };
  __$.KAA = new __$.cE1().name("mcp-cli").description("Interact with MCP servers and tools").version("1.0.0");
  __$.KAA.command("servers").description("List all connected MCP servers").option("--json", "Output in JSON format").action(async A => {
    let K = await __$.hcA("servers", async () => {
      return __$.Rj() ? await __$.DYA(__$.PkK, {
        command: "servers"
      }) : __$.lE1(__$.AAA().clients);
    }, Y => ({
      server_count: Y.length
    }));
    if (!K.success) process.exit(1);
    let q = K.data;
    if (A.json) console.log(__$.UA(q));else q.forEach(Y => {
      let z = Y.type === "connected" ? __$.O1.green("connected") : Y.type === "failed" ? __$.O1.red("failed") : __$.O1.yellow(Y.type),
        w = "";
      if (Y.type === "connected") {
        let H = [];
        if (Y.hasTools) H.push("tools");
        if (Y.hasResources) H.push("resources");
        if (Y.hasPrompts) H.push("prompts");
        if (H.length > 0) w = ` (${H.join(", ")})`;
      }
      console.log(`${Y.name} - ${z}${w}`);
    });
  });
  __$.KAA.command("tools").description("List all available tools").argument("[server]", "Filter by server name").option("--json", "Output in JSON format").action(async (A, K) => {
    let q = {
        server: A
      },
      Y = await __$.hcA("tools", async () => {
        return __$.Rj() ? await __$.DYA(__$.VkK, {
          command: "tools",
          params: q
        }) : __$.iE1(__$.AAA().tools, q);
      }, w => ({
        tool_count: w.length,
        filtered: !!A
      }));
    if (!Y.success) process.exit(1);
    let z = Y.data;
    if (K.json) console.log(__$.UA(z));else if (A) z.forEach(w => console.log(w.name));else z.forEach(w => console.log(`${w.server}/${w.name}`));
  });
  __$.KAA.command("info").description("Get detailed information about a tool").argument("<tool>", "Tool identifier in format <server>/<tool>").option("--json", "Output in JSON format").action(async (A, K) => {
    let q = await __$.hcA("info", async () => {
      let {
          server: z,
          tool: w
        } = __$.lU6(A),
        H = {
          server: z,
          toolName: w
        };
      if (__$.Rj()) return await __$.DYA(__$.fkK, {
        command: "info",
        params: H
      });
      let J = __$.AAA(),
        O = await __$.nE1(J.tools, H);
      if (!O) {
        let X = __$.mVA(J.clients, z, J.normalizedNames),
          $ = __$.WYA(z, X?.type);
        if ($) throw $;
        throw Error(`Tool '${w}' not found on server '${z}'`);
      }
      return O;
    }, () => ({
      tool_found: !0
    }), {
      tool_found: !1
    });
    if (!q.success) process.exit(1);
    let Y = q.data;
    if (K.json) console.log(__$.UA(Y));else {
      if (console.log(__$.O1.bold(`Tool: ${A}`)), console.log(__$.O1.dim(`Server: ${Y.server}`)), Y.description) console.log(__$.O1.dim(`Description: ${Y.description}`));
      console.log(), console.log(__$.O1.bold("Input Schema:")), console.log(__$.UA(Y.inputSchema, null, 2));
    }
  });
  __$.KAA.command("call").description("Invoke an MCP tool").argument("<tool>", "Tool identifier in format <server>/<tool>").argument("<args>", 'Tool arguments as JSON string or "-" for stdin').option("--json", "Output in JSON format").option("--timeout <ms>", "Timeout in milliseconds (default: MCP_TOOL_TIMEOUT env var or effectively infinite)").option("--debug", "Show debug output").action(async (A, K, q) => {
    let {
      server: Y,
      tool: z
    } = __$.lU6(A);
    if (K === "-") {
      let O = [];
      for await (let X of process.stdin) O.push(X);
      K = Buffer.concat(O).toString("utf-8").trim();
    }
    let w;
    try {
      w = __$.G6(K);
    } catch (O) {
      console.error(__$.O1.red("Error: Invalid JSON arguments")), console.error(String(O)), process.exit(1);
    }
    let H = `mcp__${__$.w3(Y)}__${__$.w3(z)}`,
      J = Date.now();
    try {
      let O = parseInt(q.timeout || "", 10) || __$.FqA(),
        X = {
          server: Y,
          tool: z,
          args: w,
          timeoutMs: O
        },
        $ = __$.Rj() ? await __$.DYA(__$.mM, {
          command: "call",
          params: X
        }, O) : await __$.rt2(z, Y, w, q),
        _ = q.json ? __$.UA($) : typeof $ === "string" ? $ : __$.UA($, null, 2);
      if (await new Promise(G => {
        process.stdout.write(_ + `
`, () => G());
      }), !__$.Rj()) await __$.Ll("tengu_mcp_cli_command_executed", {
        command: "call",
        tool_name: __$.jK(H),
        success: !0,
        duration_ms: Date.now() - J
      });
      process.exit(0);
    } catch (O) {
      console.error(__$.O1.red("Error calling tool:"), String(O));
      let X = Date.now() - J,
        $ = String(O).slice(0, 2000);
      if (!__$.Rj()) await __$.Ll("tengu_tool_use_error", {
        toolName: __$.jK(H),
        isMcp: !0,
        error: $,
        durationMs: X
      }), await __$.Ll("tengu_mcp_cli_command_executed", {
        command: "call",
        tool_name: __$.jK(H),
        success: !1,
        error_type: O instanceof __$.ScA ? "connection_failed" : "tool_execution_failed",
        duration_ms: Date.now() - J
      });
      process.exit(1);
    }
  });
  __$.KAA.command("grep").description("Search tool names and descriptions using regex patterns").argument("<pattern>", "Regex pattern to search for").option("--json", "Output in JSON format").option("-i, --ignore-case", "Case insensitive search (default: true)", !0).action(async (A, K) => {
    let q = await __$.hcA("grep", async () => {
      try {
        new RegExp(A, K.ignoreCase ? "i" : "");
      } catch (w) {
        throw Error(`Invalid regex pattern: ${w instanceof Error ? w.message : String(w)}`);
      }
      let z = {
        pattern: A,
        ignoreCase: K.ignoreCase
      };
      return __$.Rj() ? await __$.DYA(__$.NkK, {
        command: "grep",
        params: z
      }) : __$.rE1(__$.AAA().tools, z);
    }, z => ({
      match_count: z.length
    }));
    if (!q.success) process.exit(1);
    let Y = q.data;
    if (K.json) console.log(__$.UA(Y));else if (Y.length === 0) console.log(__$.O1.yellow("No tools found matching pattern"));else Y.forEach(z => {
      if (console.log(__$.O1.bold(`${z.server}/${z.name}`)), z.description) {
        let w = z.description.length > 100 ? z.description.slice(0, 100) + "..." : z.description;
        console.log(__$.O1.dim(`  ${w}`));
      }
      console.log();
    });
  });
  __$.KAA.command("resources").description("List MCP resources").argument("[server]", "Filter by server name").option("--json", "Output in JSON format").action(async (A, K) => {
    let q = {
        server: A
      },
      Y = await __$.hcA("resources", async () => {
        if (__$.Rj()) return await __$.DYA(__$.TkK, {
          command: "resources",
          params: q
        });else {
          let w = __$.AAA();
          return __$.oE1(w.resources, q, w.normalizedNames);
        }
      }, w => ({
        resource_count: w.length,
        filtered: !!A
      }));
    if (!Y.success) process.exit(1);
    let z = Y.data;
    if (K.json) console.log(__$.UA(z));else z.forEach(w => {
      console.log(`${w.server}/${w.name || w.uri}`);
    });
  });
  __$.KAA.command("read").description("Read an MCP resource").argument("<resource>", "Resource identifier in format <server>/<resource> or <server> <uri>").argument("[uri]", "Optional: Direct resource URI (file://, https://, etc.)").option("--json", "Output in JSON format").option("--timeout <ms>", "Timeout in milliseconds (default: MCP_TOOL_TIMEOUT env var or effectively infinite)").option("--debug", "Show debug output").action(async (A, K, q) => {
    let Y, z, w;
    if (K) Y = A, w = K;else {
      let O = __$.lU6(A);
      Y = O.server, z = O.tool;
    }
    let H;
    if (w) {
      if (H = w, q.debug) console.log(`Using direct URI: ${H}`);
    } else {
      let O = __$.AAA(),
        $ = __$.nt2(O, Y).find(_ => _.name === z || _.uri === z);
      if (!$) console.error(__$.O1.red(`Error: Resource '${z}' not found on server '${Y}'`)), process.exit(1);
      H = $.uri;
    }
    let J = Date.now();
    try {
      let O = parseInt(q.timeout || "", 10) || __$.FqA(),
        X = {
          server: Y,
          uri: H,
          timeoutMs: O
        },
        $ = __$.Rj() ? await __$.DYA(__$.wqA, {
          command: "read",
          params: X
        }, O) : await __$.ot2(Y, H, q);
      if (q.json) console.log(__$.UA($));else if ($.contents && Array.isArray($.contents)) $.contents.forEach(_ => {
        if (_ && typeof _ === "object") {
          if ("text" in _) console.log(_.text);else if ("blob" in _) {
            console.log(__$.O1.yellow("[Binary blob content]"));
            let G = "mimeType" in _ ? _.mimeType : void 0;
            console.log(__$.O1.dim(`MIME type: ${G || "unknown"}`));
          }
        }
      });else console.log(__$.UA($, null, 2));
      if (!__$.Rj()) await __$.Ll("tengu_mcp_cli_command_executed", {
        command: "read",
        success: !0,
        duration_ms: Date.now() - J
      });
      process.exit(0);
    } catch (O) {
      if (console.error(__$.O1.red("Error reading resource:"), String(O)), !__$.Rj()) await __$.Ll("tengu_mcp_cli_command_executed", {
        command: "read",
        success: !1,
        error_type: O instanceof __$.ScA ? "connection_failed" : "read_failed",
        duration_ms: Date.now() - J
      });
      process.exit(1);
    }
  });
});

// Register to shared state
__$.ykK = ykK;
