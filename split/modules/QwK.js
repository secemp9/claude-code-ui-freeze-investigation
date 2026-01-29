// Module: QwK
// Dependencies: z7, BwK, _H, W2, sS6, Z1, t9, Sw, zm, b1
//   ... and 20 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QwK = k(() => {
  __$.z7();
  __$.BwK();
  __$._H();
  __$.W2();
  __$.sS6();
  __$.Z1();
  __$.t9();
  __$.Sw();
  __$.zm();
  __$.b1();
  __$.mwK = __$.U.strictObject({
    type: __$.U.enum(["message", "broadcast", "request", "response"]).describe('Message type: "message" for DMs, "broadcast" to all teammates, "request" for protocol requests (shutdown, plan approval), "response" for protocol responses'),
    recipient: __$.U.string().optional().describe("Agent name of the recipient (required for message and request types)"),
    content: __$.U.string().optional().describe("Message text, reason, or feedback"),
    subtype: __$.U.enum(["shutdown", "plan_approval"]).optional().describe("Protocol subtype (required for request and response types)"),
    request_id: __$.U.string().optional().describe("Request ID to respond to (required for response type)"),
    approve: __$.U.boolean().optional().describe("Whether to approve the request (required for response type)")
  });
  __$.vk2 = {
    name: __$.XgA,
    maxResultSizeChars: 1e5,
    userFacingName() {
      if (__$.b8()) return "";
      return "SendMessage";
    },
    inputSchema: __$.mwK,
    isEnabled() {
      return __$.b8();
    },
    isConcurrencySafe(A) {
      return !1;
    },
    isReadOnly(A) {
      return A.type === "message" || A.type === "broadcast";
    },
    async checkPermissions(A, K) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    async validateInput(A, K) {
      if (A.type === "message") {
        if (!A.recipient || A.recipient.trim().length === 0) return {
          result: !1,
          message: "recipient is required for message type",
          errorCode: 1
        };
        if (!A.content || A.content.trim().length === 0) return {
          result: !1,
          message: "content is required for message type",
          errorCode: 2
        };
      }
      if (A.type === "broadcast") {
        if (!A.content || A.content.trim().length === 0) return {
          result: !1,
          message: "content is required for broadcast type",
          errorCode: 3
        };
      }
      if (A.type === "request") {
        if (!A.subtype) return {
          result: !1,
          message: "subtype is required for request type",
          errorCode: 4
        };
        if (!A.recipient || A.recipient.trim().length === 0) return {
          result: !1,
          message: "recipient is required for request type",
          errorCode: 5
        };
      }
      if (A.type === "response") {
        if (!A.subtype) return {
          result: !1,
          message: "subtype is required for response type",
          errorCode: 6
        };
        if (!A.request_id || A.request_id.trim().length === 0) return {
          result: !1,
          message: "request_id is required for response type",
          errorCode: 7
        };
        if (A.approve === void 0) return {
          result: !1,
          message: "approve is required for response type",
          errorCode: 8
        };
        if (A.subtype === "shutdown" && !A.approve && (!A.content || A.content.trim().length === 0)) return {
          result: !1,
          message: "content (reason) is required when rejecting a shutdown request",
          errorCode: 9
        };
        if (A.subtype === "plan_approval" && (!A.recipient || A.recipient.trim().length === 0)) return {
          result: !1,
          message: "recipient is required for plan approval/rejection responses",
          errorCode: 10
        };
      }
      return {
        result: !0
      };
    },
    async description() {
      return __$.ywK;
    },
    async prompt() {
      return __$.IwK();
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
      if (A.type === "message") return __$.jk2(A, K);
      if (A.type === "broadcast") return __$.Mk2(A, K);
      if (A.type === "request") {
        if (A.subtype === "shutdown") return __$.Pk2(A, K);
        throw Error(`Unsupported request subtype: ${A.subtype}. Use "shutdown" for shutdown requests.`);
      }
      if (A.type === "response") {
        if (A.subtype === "shutdown") {
          if (A.approve) return __$.Vk2(A, K);
          return __$.fk2(A);
        }
        if (A.subtype === "plan_approval") {
          if (A.approve) return __$.Nk2(A, K);
          return __$.Tk2(A, K);
        }
        throw Error(`Unsupported response subtype: ${A.subtype}. Use "shutdown" or "plan_approval".`);
      }
      throw Error(`Unknown message type: ${A.type}`);
    },
    renderToolUseMessage: __$.SwK,
    renderToolUseProgressMessage: __$.hwK,
    renderToolUseRejectedMessage: __$.bwK,
    renderToolUseErrorMessage: __$.xwK,
    renderToolResultMessage: __$.uwK
  };
});

// Register to shared state
__$.QwK = QwK;
