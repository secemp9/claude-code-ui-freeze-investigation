// Module: Cl8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cl8 = v(El8 => {
  Object.defineProperty(El8, "__esModule", {
    value: !0
  });
  El8.ruleSet = void 0;
  var fl8 = "required",
    qk = "fn",
    Yk = "argv",
    kOA = "ref",
    $l8 = !0,
    _l8 = "isSet",
    YLA = "booleanEquals",
    vOA = "error",
    EOA = "endpoint",
    AQ = "tree",
    to1 = "PartitionResult",
    eo1 = "getAttr",
    Gl8 = {
      [fl8]: !1,
      type: "string"
    },
    Zl8 = {
      [fl8]: !0,
      default: !1,
      type: "boolean"
    },
    Wl8 = {
      [kOA]: "Endpoint"
    },
    Nl8 = {
      [qk]: YLA,
      [Yk]: [{
        [kOA]: "UseFIPS"
      }, !0]
    },
    Tl8 = {
      [qk]: YLA,
      [Yk]: [{
        [kOA]: "UseDualStack"
      }, !0]
    },
    Kk = {},
    Dl8 = {
      [qk]: eo1,
      [Yk]: [{
        [kOA]: to1
      }, "supportsFIPS"]
    },
    vl8 = {
      [kOA]: to1
    },
    jl8 = {
      [qk]: YLA,
      [Yk]: [!0, {
        [qk]: eo1,
        [Yk]: [vl8, "supportsDualStack"]
      }]
    },
    Ml8 = [Nl8],
    Pl8 = [Tl8],
    Vl8 = [{
      [kOA]: "Region"
    }],
    Fu5 = {
      version: "1.0",
      parameters: {
        Region: Gl8,
        UseDualStack: Zl8,
        UseFIPS: Zl8,
        Endpoint: Gl8
      },
      rules: [{
        conditions: [{
          [qk]: _l8,
          [Yk]: [Wl8]
        }],
        rules: [{
          conditions: Ml8,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: vOA
        }, {
          conditions: Pl8,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: vOA
        }, {
          endpoint: {
            url: Wl8,
            properties: Kk,
            headers: Kk
          },
          type: EOA
        }],
        type: AQ
      }, {
        conditions: [{
          [qk]: _l8,
          [Yk]: Vl8
        }],
        rules: [{
          conditions: [{
            [qk]: "aws.partition",
            [Yk]: Vl8,
            assign: to1
          }],
          rules: [{
            conditions: [Nl8, Tl8],
            rules: [{
              conditions: [{
                [qk]: YLA,
                [Yk]: [$l8, Dl8]
              }, jl8],
              rules: [{
                endpoint: {
                  url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: Kk,
                  headers: Kk
                },
                type: EOA
              }],
              type: AQ
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: vOA
            }],
            type: AQ
          }, {
            conditions: Ml8,
            rules: [{
              conditions: [{
                [qk]: YLA,
                [Yk]: [Dl8, $l8]
              }],
              rules: [{
                conditions: [{
                  [qk]: "stringEquals",
                  [Yk]: [{
                    [qk]: eo1,
                    [Yk]: [vl8, "name"]
                  }, "aws-us-gov"]
                }],
                endpoint: {
                  url: "https://oidc.{Region}.amazonaws.com",
                  properties: Kk,
                  headers: Kk
                },
                type: EOA
              }, {
                endpoint: {
                  url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: Kk,
                  headers: Kk
                },
                type: EOA
              }],
              type: AQ
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: vOA
            }],
            type: AQ
          }, {
            conditions: Pl8,
            rules: [{
              conditions: [jl8],
              rules: [{
                endpoint: {
                  url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: Kk,
                  headers: Kk
                },
                type: EOA
              }],
              type: AQ
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: vOA
            }],
            type: AQ
          }, {
            endpoint: {
              url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
              properties: Kk,
              headers: Kk
            },
            type: EOA
          }],
          type: AQ
        }],
        type: AQ
      }, {
        error: "Invalid Configuration: Missing Region",
        type: vOA
      }]
    };
  El8.ruleSet = Fu5;
});

// Register to shared state
__$.Cl8 = Cl8;
