// Module: uz
// Dependencies: l6, hZq, SZq, Tb1, Ab, G28, X28, xZq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uz = k(() => {
  __$.l6();
  __$.hZq = [__$.SZq, "user:profile"], __$.Tb1 = ["user:profile", __$.Ab, "user:sessions:claude_code", "user:mcp_servers"], __$.G28 = Array.from(new Set([...__$.hZq, ...__$.Tb1])), __$.X28 = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.ai/oauth/authorize",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    OAUTH_FILE_SUFFIX: "",
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
  }, __$.xZq = {
    BASE_API_URL: "http://localhost:3000",
    CONSOLE_AUTHORIZE_URL: "http://localhost:3000/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "http://localhost:4000/oauth/authorize",
    TOKEN_URL: "http://localhost:3000/v1/oauth/token",
    API_KEY_URL: "http://localhost:3000/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "http://localhost:3000/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "http://localhost:3000/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "http://localhost:3000/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://console.staging.ant.dev/oauth/code/callback",
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
  };
});

// Register to shared state
__$.uz = uz;
