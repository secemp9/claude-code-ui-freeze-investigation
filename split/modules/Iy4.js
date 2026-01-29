// Module: Iy4
// Dependencies: u36, m36, P91, tK, FG9, V91, QG9, f91, yy4, cQ
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iy4 = k(() => {
  __$.u36();
  __$.m36();
  __$.P91 = {
    fromJSON(A) {
      return {
        actor_id: __$.tK(A.actor_id) ? globalThis.String(A.actor_id) : "",
        repository_id: __$.tK(A.repository_id) ? globalThis.String(A.repository_id) : "",
        repository_owner_id: __$.tK(A.repository_owner_id) ? globalThis.String(A.repository_owner_id) : ""
      };
    },
    toJSON(A) {
      let K = {};
      if (A.actor_id !== void 0) K.actor_id = A.actor_id;
      if (A.repository_id !== void 0) K.repository_id = A.repository_id;
      if (A.repository_owner_id !== void 0) K.repository_owner_id = A.repository_owner_id;
      return K;
    },
    create(A) {
      return __$.P91.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.FG9();
      return K.actor_id = A.actor_id ?? "", K.repository_id = A.repository_id ?? "", K.repository_owner_id = A.repository_owner_id ?? "", K;
    }
  };
  __$.V91 = {
    fromJSON(A) {
      return {
        platform: __$.tK(A.platform) ? globalThis.String(A.platform) : "",
        node_version: __$.tK(A.node_version) ? globalThis.String(A.node_version) : "",
        terminal: __$.tK(A.terminal) ? globalThis.String(A.terminal) : "",
        package_managers: __$.tK(A.package_managers) ? globalThis.String(A.package_managers) : "",
        runtimes: __$.tK(A.runtimes) ? globalThis.String(A.runtimes) : "",
        is_running_with_bun: __$.tK(A.is_running_with_bun) ? globalThis.Boolean(A.is_running_with_bun) : !1,
        is_ci: __$.tK(A.is_ci) ? globalThis.Boolean(A.is_ci) : !1,
        is_claubbit: __$.tK(A.is_claubbit) ? globalThis.Boolean(A.is_claubbit) : !1,
        is_github_action: __$.tK(A.is_github_action) ? globalThis.Boolean(A.is_github_action) : !1,
        is_claude_code_action: __$.tK(A.is_claude_code_action) ? globalThis.Boolean(A.is_claude_code_action) : !1,
        is_claude_ai_auth: __$.tK(A.is_claude_ai_auth) ? globalThis.Boolean(A.is_claude_ai_auth) : !1,
        version: __$.tK(A.version) ? globalThis.String(A.version) : "",
        github_event_name: __$.tK(A.github_event_name) ? globalThis.String(A.github_event_name) : "",
        github_actions_runner_environment: __$.tK(A.github_actions_runner_environment) ? globalThis.String(A.github_actions_runner_environment) : "",
        github_actions_runner_os: __$.tK(A.github_actions_runner_os) ? globalThis.String(A.github_actions_runner_os) : "",
        github_action_ref: __$.tK(A.github_action_ref) ? globalThis.String(A.github_action_ref) : "",
        wsl_version: __$.tK(A.wsl_version) ? globalThis.String(A.wsl_version) : "",
        github_actions_metadata: __$.tK(A.github_actions_metadata) ? __$.P91.fromJSON(A.github_actions_metadata) : void 0,
        arch: __$.tK(A.arch) ? globalThis.String(A.arch) : "",
        is_claude_code_remote: __$.tK(A.is_claude_code_remote) ? globalThis.Boolean(A.is_claude_code_remote) : !1,
        remote_environment_type: __$.tK(A.remote_environment_type) ? globalThis.String(A.remote_environment_type) : "",
        claude_code_container_id: __$.tK(A.claude_code_container_id) ? globalThis.String(A.claude_code_container_id) : "",
        claude_code_remote_session_id: __$.tK(A.claude_code_remote_session_id) ? globalThis.String(A.claude_code_remote_session_id) : "",
        tags: globalThis.Array.isArray(A?.tags) ? A.tags.map(K => globalThis.String(K)) : [],
        deployment_environment: __$.tK(A.deployment_environment) ? globalThis.String(A.deployment_environment) : "",
        is_conductor: __$.tK(A.is_conductor) ? globalThis.Boolean(A.is_conductor) : !1,
        version_base: __$.tK(A.version_base) ? globalThis.String(A.version_base) : ""
      };
    },
    toJSON(A) {
      let K = {};
      if (A.platform !== void 0) K.platform = A.platform;
      if (A.node_version !== void 0) K.node_version = A.node_version;
      if (A.terminal !== void 0) K.terminal = A.terminal;
      if (A.package_managers !== void 0) K.package_managers = A.package_managers;
      if (A.runtimes !== void 0) K.runtimes = A.runtimes;
      if (A.is_running_with_bun !== void 0) K.is_running_with_bun = A.is_running_with_bun;
      if (A.is_ci !== void 0) K.is_ci = A.is_ci;
      if (A.is_claubbit !== void 0) K.is_claubbit = A.is_claubbit;
      if (A.is_github_action !== void 0) K.is_github_action = A.is_github_action;
      if (A.is_claude_code_action !== void 0) K.is_claude_code_action = A.is_claude_code_action;
      if (A.is_claude_ai_auth !== void 0) K.is_claude_ai_auth = A.is_claude_ai_auth;
      if (A.version !== void 0) K.version = A.version;
      if (A.github_event_name !== void 0) K.github_event_name = A.github_event_name;
      if (A.github_actions_runner_environment !== void 0) K.github_actions_runner_environment = A.github_actions_runner_environment;
      if (A.github_actions_runner_os !== void 0) K.github_actions_runner_os = A.github_actions_runner_os;
      if (A.github_action_ref !== void 0) K.github_action_ref = A.github_action_ref;
      if (A.wsl_version !== void 0) K.wsl_version = A.wsl_version;
      if (A.github_actions_metadata !== void 0) K.github_actions_metadata = __$.P91.toJSON(A.github_actions_metadata);
      if (A.arch !== void 0) K.arch = A.arch;
      if (A.is_claude_code_remote !== void 0) K.is_claude_code_remote = A.is_claude_code_remote;
      if (A.remote_environment_type !== void 0) K.remote_environment_type = A.remote_environment_type;
      if (A.claude_code_container_id !== void 0) K.claude_code_container_id = A.claude_code_container_id;
      if (A.claude_code_remote_session_id !== void 0) K.claude_code_remote_session_id = A.claude_code_remote_session_id;
      if (A.tags?.length) K.tags = A.tags;
      if (A.deployment_environment !== void 0) K.deployment_environment = A.deployment_environment;
      if (A.is_conductor !== void 0) K.is_conductor = A.is_conductor;
      if (A.version_base !== void 0) K.version_base = A.version_base;
      return K;
    },
    create(A) {
      return __$.V91.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.QG9();
      return K.platform = A.platform ?? "", K.node_version = A.node_version ?? "", K.terminal = A.terminal ?? "", K.package_managers = A.package_managers ?? "", K.runtimes = A.runtimes ?? "", K.is_running_with_bun = A.is_running_with_bun ?? !1, K.is_ci = A.is_ci ?? !1, K.is_claubbit = A.is_claubbit ?? !1, K.is_github_action = A.is_github_action ?? !1, K.is_claude_code_action = A.is_claude_code_action ?? !1, K.is_claude_ai_auth = A.is_claude_ai_auth ?? !1, K.version = A.version ?? "", K.github_event_name = A.github_event_name ?? "", K.github_actions_runner_environment = A.github_actions_runner_environment ?? "", K.github_actions_runner_os = A.github_actions_runner_os ?? "", K.github_action_ref = A.github_action_ref ?? "", K.wsl_version = A.wsl_version ?? "", K.github_actions_metadata = A.github_actions_metadata !== void 0 && A.github_actions_metadata !== null ? __$.P91.fromPartial(A.github_actions_metadata) : void 0, K.arch = A.arch ?? "", K.is_claude_code_remote = A.is_claude_code_remote ?? !1, K.remote_environment_type = A.remote_environment_type ?? "", K.claude_code_container_id = A.claude_code_container_id ?? "", K.claude_code_remote_session_id = A.claude_code_remote_session_id ?? "", K.tags = A.tags?.map(q => q) || [], K.deployment_environment = A.deployment_environment ?? "", K.is_conductor = A.is_conductor ?? !1, K.version_base = A.version_base ?? "", K;
    }
  };
  __$.f91 = {
    fromJSON(A) {
      return {
        event_name: __$.tK(A.event_name) ? globalThis.String(A.event_name) : "",
        client_timestamp: __$.tK(A.client_timestamp) ? __$.yy4(A.client_timestamp) : void 0,
        model: __$.tK(A.model) ? globalThis.String(A.model) : "",
        session_id: __$.tK(A.session_id) ? globalThis.String(A.session_id) : "",
        user_type: __$.tK(A.user_type) ? globalThis.String(A.user_type) : "",
        betas: __$.tK(A.betas) ? globalThis.String(A.betas) : "",
        env: __$.tK(A.env) ? __$.V91.fromJSON(A.env) : void 0,
        entrypoint: __$.tK(A.entrypoint) ? globalThis.String(A.entrypoint) : "",
        agent_sdk_version: __$.tK(A.agent_sdk_version) ? globalThis.String(A.agent_sdk_version) : "",
        is_interactive: __$.tK(A.is_interactive) ? globalThis.Boolean(A.is_interactive) : !1,
        client_type: __$.tK(A.client_type) ? globalThis.String(A.client_type) : "",
        process: __$.tK(A.process) ? globalThis.String(A.process) : "",
        additional_metadata: __$.tK(A.additional_metadata) ? globalThis.String(A.additional_metadata) : "",
        auth: __$.tK(A.auth) ? __$.cQ.fromJSON(A.auth) : void 0,
        server_timestamp: __$.tK(A.server_timestamp) ? __$.yy4(A.server_timestamp) : void 0,
        event_id: __$.tK(A.event_id) ? globalThis.String(A.event_id) : "",
        device_id: __$.tK(A.device_id) ? globalThis.String(A.device_id) : "",
        swe_bench_run_id: __$.tK(A.swe_bench_run_id) ? globalThis.String(A.swe_bench_run_id) : "",
        swe_bench_instance_id: __$.tK(A.swe_bench_instance_id) ? globalThis.String(A.swe_bench_instance_id) : "",
        swe_bench_task_id: __$.tK(A.swe_bench_task_id) ? globalThis.String(A.swe_bench_task_id) : "",
        email: __$.tK(A.email) ? globalThis.String(A.email) : "",
        agent_id: __$.tK(A.agent_id) ? globalThis.String(A.agent_id) : "",
        parent_session_id: __$.tK(A.parent_session_id) ? globalThis.String(A.parent_session_id) : "",
        agent_type: __$.tK(A.agent_type) ? globalThis.String(A.agent_type) : ""
      };
    },
    toJSON(A) {
      let K = {};
      if (A.event_name !== void 0) K.event_name = A.event_name;
      if (A.client_timestamp !== void 0) K.client_timestamp = A.client_timestamp.toISOString();
      if (A.model !== void 0) K.model = A.model;
      if (A.session_id !== void 0) K.session_id = A.session_id;
      if (A.user_type !== void 0) K.user_type = A.user_type;
      if (A.betas !== void 0) K.betas = A.betas;
      if (A.env !== void 0) K.env = __$.V91.toJSON(A.env);
      if (A.entrypoint !== void 0) K.entrypoint = A.entrypoint;
      if (A.agent_sdk_version !== void 0) K.agent_sdk_version = A.agent_sdk_version;
      if (A.is_interactive !== void 0) K.is_interactive = A.is_interactive;
      if (A.client_type !== void 0) K.client_type = A.client_type;
      if (A.process !== void 0) K.process = A.process;
      if (A.additional_metadata !== void 0) K.additional_metadata = A.additional_metadata;
      if (A.auth !== void 0) K.auth = __$.cQ.toJSON(A.auth);
      if (A.server_timestamp !== void 0) K.server_timestamp = A.server_timestamp.toISOString();
      if (A.event_id !== void 0) K.event_id = A.event_id;
      if (A.device_id !== void 0) K.device_id = A.device_id;
      if (A.swe_bench_run_id !== void 0) K.swe_bench_run_id = A.swe_bench_run_id;
      if (A.swe_bench_instance_id !== void 0) K.swe_bench_instance_id = A.swe_bench_instance_id;
      if (A.swe_bench_task_id !== void 0) K.swe_bench_task_id = A.swe_bench_task_id;
      if (A.email !== void 0) K.email = A.email;
      if (A.agent_id !== void 0) K.agent_id = A.agent_id;
      if (A.parent_session_id !== void 0) K.parent_session_id = A.parent_session_id;
      if (A.agent_type !== void 0) K.agent_type = A.agent_type;
      return K;
    },
    create(A) {
      return __$.f91.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.UG9();
      return K.event_name = A.event_name ?? "", K.client_timestamp = A.client_timestamp ?? void 0, K.model = A.model ?? "", K.session_id = A.session_id ?? "", K.user_type = A.user_type ?? "", K.betas = A.betas ?? "", K.env = A.env !== void 0 && A.env !== null ? __$.V91.fromPartial(A.env) : void 0, K.entrypoint = A.entrypoint ?? "", K.agent_sdk_version = A.agent_sdk_version ?? "", K.is_interactive = A.is_interactive ?? !1, K.client_type = A.client_type ?? "", K.process = A.process ?? "", K.additional_metadata = A.additional_metadata ?? "", K.auth = A.auth !== void 0 && A.auth !== null ? __$.cQ.fromPartial(A.auth) : void 0, K.server_timestamp = A.server_timestamp ?? void 0, K.event_id = A.event_id ?? "", K.device_id = A.device_id ?? "", K.swe_bench_run_id = A.swe_bench_run_id ?? "", K.swe_bench_instance_id = A.swe_bench_instance_id ?? "", K.swe_bench_task_id = A.swe_bench_task_id ?? "", K.email = A.email ?? "", K.agent_id = A.agent_id ?? "", K.parent_session_id = A.parent_session_id ?? "", K.agent_type = A.agent_type ?? "", K;
    }
  };
});

// Register to shared state
__$.Iy4 = Iy4;
