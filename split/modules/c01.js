// Module: c01
// Dependencies: z7, qW, Ap1, Cp1, AEA, YJ7, NZ, U1, b4, mz
//   ... and 16 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c01 = k(() => {
  __$.z7();
  __$.qW = __$.Ap1().superRefine((A, K) => {
    if (!URL.canParse(A)) return K.addIssue({
      code: __$.Cp1.custom,
      message: "URL must be parseable",
      fatal: !0
    }), __$.AEA;
  }).refine(A => {
    let K = new URL(A);
    return K.protocol !== "javascript:" && K.protocol !== "data:" && K.protocol !== "vbscript:";
  }, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
  }), __$.YJ7 = __$.NZ({
    resource: __$.U1().url(),
    authorization_servers: __$.b4(__$.qW).optional(),
    jwks_uri: __$.U1().url().optional(),
    scopes_supported: __$.b4(__$.U1()).optional(),
    bearer_methods_supported: __$.b4(__$.U1()).optional(),
    resource_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    resource_name: __$.U1().optional(),
    resource_documentation: __$.U1().optional(),
    resource_policy_uri: __$.U1().url().optional(),
    resource_tos_uri: __$.U1().url().optional(),
    tls_client_certificate_bound_access_tokens: __$.mz().optional(),
    authorization_details_types_supported: __$.b4(__$.U1()).optional(),
    dpop_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    dpop_bound_access_tokens_required: __$.mz().optional()
  }), __$.RW6 = __$.NZ({
    issuer: __$.U1(),
    authorization_endpoint: __$.qW,
    token_endpoint: __$.qW,
    registration_endpoint: __$.qW.optional(),
    scopes_supported: __$.b4(__$.U1()).optional(),
    response_types_supported: __$.b4(__$.U1()),
    response_modes_supported: __$.b4(__$.U1()).optional(),
    grant_types_supported: __$.b4(__$.U1()).optional(),
    token_endpoint_auth_methods_supported: __$.b4(__$.U1()).optional(),
    token_endpoint_auth_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    service_documentation: __$.qW.optional(),
    revocation_endpoint: __$.qW.optional(),
    revocation_endpoint_auth_methods_supported: __$.b4(__$.U1()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    introspection_endpoint: __$.U1().optional(),
    introspection_endpoint_auth_methods_supported: __$.b4(__$.U1()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    code_challenge_methods_supported: __$.b4(__$.U1()).optional(),
    client_id_metadata_document_supported: __$.mz().optional()
  }), __$.NDY = __$.NZ({
    issuer: __$.U1(),
    authorization_endpoint: __$.qW,
    token_endpoint: __$.qW,
    userinfo_endpoint: __$.qW.optional(),
    jwks_uri: __$.qW,
    registration_endpoint: __$.qW.optional(),
    scopes_supported: __$.b4(__$.U1()).optional(),
    response_types_supported: __$.b4(__$.U1()),
    response_modes_supported: __$.b4(__$.U1()).optional(),
    grant_types_supported: __$.b4(__$.U1()).optional(),
    acr_values_supported: __$.b4(__$.U1()).optional(),
    subject_types_supported: __$.b4(__$.U1()),
    id_token_signing_alg_values_supported: __$.b4(__$.U1()),
    id_token_encryption_alg_values_supported: __$.b4(__$.U1()).optional(),
    id_token_encryption_enc_values_supported: __$.b4(__$.U1()).optional(),
    userinfo_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    userinfo_encryption_alg_values_supported: __$.b4(__$.U1()).optional(),
    userinfo_encryption_enc_values_supported: __$.b4(__$.U1()).optional(),
    request_object_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    request_object_encryption_alg_values_supported: __$.b4(__$.U1()).optional(),
    request_object_encryption_enc_values_supported: __$.b4(__$.U1()).optional(),
    token_endpoint_auth_methods_supported: __$.b4(__$.U1()).optional(),
    token_endpoint_auth_signing_alg_values_supported: __$.b4(__$.U1()).optional(),
    display_values_supported: __$.b4(__$.U1()).optional(),
    claim_types_supported: __$.b4(__$.U1()).optional(),
    claims_supported: __$.b4(__$.U1()).optional(),
    service_documentation: __$.U1().optional(),
    claims_locales_supported: __$.b4(__$.U1()).optional(),
    ui_locales_supported: __$.b4(__$.U1()).optional(),
    claims_parameter_supported: __$.mz().optional(),
    request_parameter_supported: __$.mz().optional(),
    request_uri_parameter_supported: __$.mz().optional(),
    require_request_uri_registration: __$.mz().optional(),
    op_policy_uri: __$.qW.optional(),
    op_tos_uri: __$.qW.optional(),
    client_id_metadata_document_supported: __$.mz().optional()
  }), __$.zJ7 = __$.w4({
    ...__$.NDY.shape,
    ...__$.RW6.pick({
      code_challenge_methods_supported: !0
    }).shape
  }), __$.wJ7 = __$.w4({
    access_token: __$.U1(),
    id_token: __$.U1().optional(),
    token_type: __$.U1(),
    expires_in: __$.pEA.number().optional(),
    scope: __$.U1().optional(),
    refresh_token: __$.U1().optional()
  }).strip(), __$.d01 = __$.w4({
    error: __$.U1(),
    error_description: __$.U1().optional(),
    error_uri: __$.U1().optional()
  }), __$.qJ7 = __$.qW.optional().or(__$.AK("").transform(() => {
    return;
  })), __$.TDY = __$.w4({
    redirect_uris: __$.b4(__$.qW),
    token_endpoint_auth_method: __$.U1().optional(),
    grant_types: __$.b4(__$.U1()).optional(),
    response_types: __$.b4(__$.U1()).optional(),
    client_name: __$.U1().optional(),
    client_uri: __$.qW.optional(),
    logo_uri: __$.qJ7,
    scope: __$.U1().optional(),
    contacts: __$.b4(__$.U1()).optional(),
    tos_uri: __$.qJ7,
    policy_uri: __$.U1().optional(),
    jwks_uri: __$.qW.optional(),
    jwks: __$.Mp1().optional(),
    software_id: __$.U1().optional(),
    software_version: __$.U1().optional(),
    software_statement: __$.U1().optional()
  }).strip(), __$.vDY = __$.w4({
    client_id: __$.U1(),
    client_secret: __$.U1().optional(),
    client_id_issued_at: __$.iY().optional(),
    client_secret_expires_at: __$.iY().optional()
  }).strip(), __$.HJ7 = __$.TDY.merge(__$.vDY), __$.y1H = __$.w4({
    error: __$.U1(),
    error_description: __$.U1().optional()
  }).strip(), __$.I1H = __$.w4({
    token: __$.U1(),
    token_type_hint: __$.U1().optional()
  }).strip();
});

// Register to shared state
__$.c01 = c01;
