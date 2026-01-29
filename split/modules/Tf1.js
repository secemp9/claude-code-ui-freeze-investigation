// Module: Tf1
// Dependencies: cA, z7, mA, Eq, hf, n_, NO, $A, LE2, U
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tf1 = k(() => {
  __$.cA();
  __$.z7();
  __$.mA();
  __$.Eq();
  __$.hf();
  __$.n_();
  __$.NO = o(__$.$A(), 1), __$.LE2 = __$.U.object({
    label: __$.U.string().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
    description: __$.U.string().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications.")
  }), __$.zzK = __$.U.object({
    question: __$.U.string().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
    header: __$.U.string().describe(`Very short label displayed as a chip/tag (max ${__$.By7} chars). Examples: "Auth method", "Library", "Approach".`),
    options: __$.U.array(__$.LE2).min(2).max(4).describe("The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
    multiSelect: __$.U.boolean().default(!1).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
  }), __$.pb6 = __$.U.strictObject({
    questions: __$.U.array(__$.zzK).min(1).max(4).describe("Questions to ask the user (1-4 questions)"),
    answers: __$.U.record(__$.U.string(), __$.U.string()).optional().describe("User answers collected by the permission component"),
    metadata: __$.U.object({
      source: __$.U.string().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
    }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
  }).refine(A => {
    let K = A.questions.map(q => q.question);
    if (K.length !== new Set(K).size) return !1;
    for (let q of A.questions) {
      let Y = q.options.map(z => z.label);
      if (Y.length !== new Set(Y).size) return !1;
    }
    return !0;
  }, {
    message: "Question texts must be unique, option labels must be unique within each question"
  }), __$.x1J = __$.U.object({
    questions: __$.U.array(__$.zzK).describe("The questions that were asked"),
    answers: __$.U.record(__$.U.string(), __$.U.string()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)")
  });
  __$.Nf1 = {
    name: __$.bJ,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.my7;
    },
    async prompt() {
      return __$.gy7;
    },
    inputSchema: __$.pb6,
    userFacingName() {
      return "";
    },
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    requiresUserInteraction() {
      return !0;
    },
    async checkPermissions(A) {
      return {
        behavior: "ask",
        message: "Answer questions?",
        updatedInput: A
      };
    },
    renderToolUseMessage() {
      return null;
    },
    renderToolUseProgressMessage() {
      return null;
    },
    renderToolResultMessage({
      answers: A
    }, K) {
      return __$.NO.createElement(__$.RE2, {
        answers: A
      });
    },
    renderToolUseRejectedMessage() {
      return __$.NO.createElement(__$.S, {
        flexDirection: "row",
        marginTop: 1
      }, __$.NO.createElement(__$.V, {
        color: __$.OD("default")
      }, __$.uY, " "), __$.NO.createElement(__$.V, null, "User declined to answer questions"));
    },
    renderToolUseErrorMessage() {
      return null;
    },
    async call({
      questions: A,
      answers: K = {}
    }, q) {
      return {
        data: {
          questions: A,
          answers: K
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      answers: A
    }, K) {
      return {
        type: "tool_result",
        content: `User has answered your questions: ${Object.entries(A).map(([Y, z]) => `"${Y}"="${z}"`).join(", ")}. You can now continue with the user's answers in mind.`,
        tool_use_id: K
      };
    }
  };
});

// Register to shared state
__$.Tf1 = Tf1;
