// Module: Nv
// Dependencies: z7, AG6, b1, BP1, CK, y4, _H, a7K, W2, qKK
//   ... and 23 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nv = k(() => {
  __$.z7();
  __$.AG6();
  __$.b1();
  __$.BP1();
  __$.CK();
  __$.y4();
  __$._H();
  __$.a7K();
  __$.W2();
  __$.qKK();
  __$.VJ();
  __$.Z1();
  __$.q6();
  __$.K7();
  __$.b1();
  __$.t9();
  __$.zKK = __$.U.strictObject({
    operation: __$.U.enum(["spawnTeam", "cleanup", "discoverTeams", "requestJoin", "approveJoin", "rejectJoin"]).describe("Operation: spawnTeam to create a team, cleanup to remove team and task directories, discoverTeams to list available teams to join, requestJoin to request joining a team, approveJoin to approve a join request from another agent, rejectJoin to reject a join request from another agent."),
    target_agent_id: __$.U.string().optional().describe("Agent name/ID of the target (required for approveJoin/rejectJoin operations)"),
    agent_type: __$.U.string().optional().describe('Type/role of the team lead (e.g., "researcher", "test-runner"). Used for team file and inter-agent coordination.'),
    team_name: __$.U.string().optional().describe("Name for the new team to create (required for spawnTeam)."),
    description: __$.U.string().optional().describe("Team description/purpose (only used with spawnTeam)."),
    reason: __$.U.string().optional().describe("Reason for the operation (optional for rejectJoin)."),
    request_id: __$.U.string().optional().describe("Request ID for join operations. For approveJoin/rejectJoin: ID of the join request."),
    assigned_name: __$.U.string().optional().describe("Name to assign to the joining agent (optional for approveJoin, defaults to their proposed_name)"),
    proposed_name: __$.U.string().optional().describe("Proposed name when joining a team (defaults to generated slug)"),
    capabilities: __$.U.string().optional().describe("Description of what you can help with when joining a team"),
    timeout_ms: __$.U.number().optional().describe("Timeout in milliseconds for requestJoin to wait for leader response (default: 60000)")
  });
  __$.sj2 = {
    name: __$.OgA,
    maxResultSizeChars: 1e5,
    userFacingName() {
      return "";
    },
    inputSchema: __$.zKK,
    isEnabled() {
      return __$.b8();
    },
    isConcurrencySafe(A) {
      return !1;
    },
    isReadOnly(A) {
      return !1;
    },
    async checkPermissions(A, K) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    async validateInput(A, K) {
      if (A.operation === "spawnTeam") {
        if (!A.team_name || A.team_name.trim().length === 0) return {
          result: !1,
          message: "team_name is required for spawnTeam operation",
          errorCode: 9
        };
      }
      if (A.operation === "requestJoin") {
        if (!A.team_name || A.team_name.trim().length === 0) return {
          result: !1,
          message: "team_name is required for requestJoin operation",
          errorCode: 17
        };
        if (!A.proposed_name || A.proposed_name.trim().length === 0) return {
          result: !1,
          message: "proposed_name is required for requestJoin operation. Please provide a name to join the team.",
          errorCode: 19
        };
      }
      if (A.operation === "approveJoin" || A.operation === "rejectJoin") {
        if (!A.request_id || A.request_id.trim().length === 0) return {
          result: !1,
          message: "request_id is required for approveJoin/rejectJoin operations",
          errorCode: 18
        };
      }
      return {
        result: !0
      };
    },
    async description() {
      return "Spawn teammates and coordinate with other agents running in parallel";
    },
    async prompt() {
      return __$.r7K();
    },
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: [{
          type: "text",
          text: __$.UA(A, null, 2)
        }]
      };
    },
    async call(A, K) {
      if (A.operation === "spawnTeam") return __$.ij2(A, K);
      if (A.operation === "cleanup") return __$.lj2(A, K);
      if (A.operation === "discoverTeams") return __$.aj2(A, K);
      if (A.operation === "requestJoin") return __$.nj2(A, K);
      if (A.operation === "approveJoin") return __$.rj2(A, K);
      if (A.operation === "rejectJoin") return __$.oj2(A, K);
      throw Error(`Unknown operation: ${A.operation}`);
    },
    renderToolUseMessage: __$.s7K,
    renderToolUseProgressMessage: __$.t7K,
    renderToolUseRejectedMessage: __$.e7K,
    renderToolUseErrorMessage: __$.AKK,
    renderToolResultMessage: __$.KKK
  };
});

// Register to shared state
__$.Nv = Nv;
