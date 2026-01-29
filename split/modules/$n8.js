// Module: $n8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $n8 = v(On8 => {
  Object.defineProperty(On8, "__esModule", {
    value: !0
  });
  On8.ruleSet = void 0;
  var zn8 = "required",
    wk = "fn",
    Hk = "argv",
    IOA = "ref",
    ri8 = !0,
    oi8 = "isSet",
    XLA = "booleanEquals",
    ROA = "error",
    yOA = "endpoint",
    qQ = "tree",
    Ca1 = "PartitionResult",
    La1 = "getAttr",
    ai8 = {
      [zn8]: !1,
      type: "string"
    },
    si8 = {
      [zn8]: !0,
      default: !1,
      type: "boolean"
    },
    ti8 = {
      [IOA]: "Endpoint"
    },
    wn8 = {
      [wk]: XLA,
      [Hk]: [{
        [IOA]: "UseFIPS"
      }, !0]
    },
    Hn8 = {
      [wk]: XLA,
      [Hk]: [{
        [IOA]: "UseDualStack"
      }, !0]
    },
    zk = {},
    ei8 = {
      [wk]: La1,
      [Hk]: [{
        [IOA]: Ca1
      }, "supportsFIPS"]
    },
    Jn8 = {
      [IOA]: Ca1
    },
    An8 = {
      [wk]: XLA,
      [Hk]: [!0, {
        [wk]: La1,
        [Hk]: [Jn8, "supportsDualStack"]
      }]
    },
    Kn8 = [wn8],
    qn8 = [Hn8],
    Yn8 = [{
      [IOA]: "Region"
    }],
    KQ5 = {
      version: "1.0",
      parameters: {
        Region: ai8,
        UseDualStack: si8,
        UseFIPS: si8,
        Endpoint: ai8
      },
      rules: [{
        conditions: [{
          [wk]: oi8,
          [Hk]: [ti8]
        }],
        rules: [{
          conditions: Kn8,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: ROA
        }, {
          conditions: qn8,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: ROA
        }, {
          endpoint: {
            url: ti8,
            properties: zk,
            headers: zk
          },
          type: yOA
        }],
        type: qQ
      }, {
        conditions: [{
          [wk]: oi8,
          [Hk]: Yn8
        }],
        rules: [{
          conditions: [{
            [wk]: "aws.partition",
            [Hk]: Yn8,
            assign: Ca1
          }],
          rules: [{
            conditions: [wn8, Hn8],
            rules: [{
              conditions: [{
                [wk]: XLA,
                [Hk]: [ri8, ei8]
              }, An8],
              rules: [{
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: zk,
                  headers: zk
                },
                type: yOA
              }],
              type: qQ
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: ROA
            }],
            type: qQ
          }, {
            conditions: Kn8,
            rules: [{
              conditions: [{
                [wk]: XLA,
                [Hk]: [ei8, ri8]
              }],
              rules: [{
                conditions: [{
                  [wk]: "stringEquals",
                  [Hk]: [{
                    [wk]: La1,
                    [Hk]: [Jn8, "name"]
                  }, "aws-us-gov"]
                }],
                endpoint: {
                  url: "https://portal.sso.{Region}.amazonaws.com",
                  properties: zk,
                  headers: zk
                },
                type: yOA
              }, {
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: zk,
                  headers: zk
                },
                type: yOA
              }],
              type: qQ
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: ROA
            }],
            type: qQ
          }, {
            conditions: qn8,
            rules: [{
              conditions: [An8],
              rules: [{
                endpoint: {
                  url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: zk,
                  headers: zk
                },
                type: yOA
              }],
              type: qQ
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: ROA
            }],
            type: qQ
          }, {
            endpoint: {
              url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
              properties: zk,
              headers: zk
            },
            type: yOA
          }],
          type: qQ
        }],
        type: qQ
      }, {
        error: "Invalid Configuration: Missing Region",
        type: ROA
      }]
    };
  On8.ruleSet = KQ5;
});

// Register to shared state
__$.$n8 = $n8;
