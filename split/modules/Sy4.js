// Module: Sy4
// Dependencies: u36, m36, g36, By, lG9, cQ, dG9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sy4 = k(() => {
  __$.u36();
  __$.m36();
  __$.g36 = {
    fromJSON(A) {
      return {
        event_id: __$.By(A.event_id) ? globalThis.String(A.event_id) : "",
        timestamp: __$.By(A.timestamp) ? __$.lG9(A.timestamp) : void 0,
        experiment_id: __$.By(A.experiment_id) ? globalThis.String(A.experiment_id) : "",
        variation_id: __$.By(A.variation_id) ? globalThis.Number(A.variation_id) : 0,
        environment: __$.By(A.environment) ? globalThis.String(A.environment) : "",
        user_attributes: __$.By(A.user_attributes) ? globalThis.String(A.user_attributes) : "",
        experiment_metadata: __$.By(A.experiment_metadata) ? globalThis.String(A.experiment_metadata) : "",
        device_id: __$.By(A.device_id) ? globalThis.String(A.device_id) : "",
        auth: __$.By(A.auth) ? __$.cQ.fromJSON(A.auth) : void 0,
        session_id: __$.By(A.session_id) ? globalThis.String(A.session_id) : "",
        event_metadata_vars: __$.By(A.event_metadata_vars) ? globalThis.String(A.event_metadata_vars) : ""
      };
    },
    toJSON(A) {
      let K = {};
      if (A.event_id !== void 0) K.event_id = A.event_id;
      if (A.timestamp !== void 0) K.timestamp = A.timestamp.toISOString();
      if (A.experiment_id !== void 0) K.experiment_id = A.experiment_id;
      if (A.variation_id !== void 0) K.variation_id = Math.round(A.variation_id);
      if (A.environment !== void 0) K.environment = A.environment;
      if (A.user_attributes !== void 0) K.user_attributes = A.user_attributes;
      if (A.experiment_metadata !== void 0) K.experiment_metadata = A.experiment_metadata;
      if (A.device_id !== void 0) K.device_id = A.device_id;
      if (A.auth !== void 0) K.auth = __$.cQ.toJSON(A.auth);
      if (A.session_id !== void 0) K.session_id = A.session_id;
      if (A.event_metadata_vars !== void 0) K.event_metadata_vars = A.event_metadata_vars;
      return K;
    },
    create(A) {
      return __$.g36.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.dG9();
      return K.event_id = A.event_id ?? "", K.timestamp = A.timestamp ?? void 0, K.experiment_id = A.experiment_id ?? "", K.variation_id = A.variation_id ?? 0, K.environment = A.environment ?? "", K.user_attributes = A.user_attributes ?? "", K.experiment_metadata = A.experiment_metadata ?? "", K.device_id = A.device_id ?? "", K.auth = A.auth !== void 0 && A.auth !== null ? __$.cQ.fromPartial(A.auth) : void 0, K.session_id = A.session_id ?? "", K.event_metadata_vars = A.event_metadata_vars ?? "", K;
    }
  };
});

// Register to shared state
__$.Sy4 = Sy4;
