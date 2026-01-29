// Module: fV
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fV = v(qV5 => {
  var ai1 = {
      warningEmitted: !1
    },
    tP5 = A => {
      if (A && !ai1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) ai1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
    };
  function eP5(A, K, q) {
    if (!A.$source) A.$source = {};
    return A.$source[K] = q, A;
  }
  function AV5(A, K, q) {
    if (!A.__aws_sdk_context) A.__aws_sdk_context = {
      features: {}
    };else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
    A.__aws_sdk_context.features[K] = q;
  }
  function KV5(A, K, q) {
    if (!A.$source) A.$source = {};
    return A.$source[K] = q, A;
  }
  qV5.emitWarningIfUnsupportedVersion = tP5;
  qV5.setCredentialFeature = eP5;
  qV5.setFeature = AV5;
  qV5.setTokenFeature = KV5;
  qV5.state = ai1;
});

// Register to shared state
__$.fV = fV;
