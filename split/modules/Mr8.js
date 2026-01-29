// Module: Mr8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mr8 = v(Dr8 => {
  Object.defineProperty(Dr8, "__esModule", {
    value: !0
  });
  Dr8.ruleSet = void 0;
  var Wr8 = "required",
    MD = "fn",
    PD = "argv",
    YQ = "ref",
    Hr8 = !0,
    Jr8 = "isSet",
    H8A = "booleanEquals",
    bOA = "error",
    Hn = "endpoint",
    Oy = "tree",
    p81 = "PartitionResult",
    pa1 = "stringEquals",
    Or8 = {
      [Wr8]: !0,
      default: !1,
      type: "boolean"
    },
    Xr8 = {
      [Wr8]: !1,
      type: "string"
    },
    $r8 = {
      [YQ]: "Endpoint"
    },
    da1 = {
      [MD]: H8A,
      [PD]: [{
        [YQ]: "UseFIPS"
      }, !0]
    },
    ca1 = {
      [MD]: H8A,
      [PD]: [{
        [YQ]: "UseDualStack"
      }, !0]
    },
    jD = {},
    la1 = {
      [MD]: "getAttr",
      [PD]: [{
        [YQ]: p81
      }, "name"]
    },
    Q81 = {
      [MD]: H8A,
      [PD]: [{
        [YQ]: "UseFIPS"
      }, !1]
    },
    U81 = {
      [MD]: H8A,
      [PD]: [{
        [YQ]: "UseDualStack"
      }, !1]
    },
    _r8 = {
      [MD]: "getAttr",
      [PD]: [{
        [YQ]: p81
      }, "supportsFIPS"]
    },
    Gr8 = {
      [MD]: H8A,
      [PD]: [!0, {
        [MD]: "getAttr",
        [PD]: [{
          [YQ]: p81
        }, "supportsDualStack"]
      }]
    },
    Zr8 = [{
      [YQ]: "Region"
    }],
    np5 = {
      version: "1.0",
      parameters: {
        UseDualStack: Or8,
        UseFIPS: Or8,
        Endpoint: Xr8,
        Region: Xr8
      },
      rules: [{
        conditions: [{
          [MD]: Jr8,
          [PD]: [$r8]
        }],
        rules: [{
          conditions: [da1],
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: bOA
        }, {
          rules: [{
            conditions: [ca1],
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: bOA
          }, {
            endpoint: {
              url: $r8,
              properties: jD,
              headers: jD
            },
            type: Hn
          }],
          type: Oy
        }],
        type: Oy
      }, {
        rules: [{
          conditions: [{
            [MD]: Jr8,
            [PD]: Zr8
          }],
          rules: [{
            conditions: [{
              [MD]: "aws.partition",
              [PD]: Zr8,
              assign: p81
            }],
            rules: [{
              conditions: [{
                [MD]: pa1,
                [PD]: [la1, "aws"]
              }, Q81, U81],
              endpoint: {
                url: "https://{Region}.signin.aws.amazon.com",
                properties: jD,
                headers: jD
              },
              type: Hn
            }, {
              conditions: [{
                [MD]: pa1,
                [PD]: [la1, "aws-cn"]
              }, Q81, U81],
              endpoint: {
                url: "https://{Region}.signin.amazonaws.cn",
                properties: jD,
                headers: jD
              },
              type: Hn
            }, {
              conditions: [{
                [MD]: pa1,
                [PD]: [la1, "aws-us-gov"]
              }, Q81, U81],
              endpoint: {
                url: "https://{Region}.signin.amazonaws-us-gov.com",
                properties: jD,
                headers: jD
              },
              type: Hn
            }, {
              conditions: [da1, ca1],
              rules: [{
                conditions: [{
                  [MD]: H8A,
                  [PD]: [Hr8, _r8]
                }, Gr8],
                rules: [{
                  endpoint: {
                    url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: jD,
                    headers: jD
                  },
                  type: Hn
                }],
                type: Oy
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                type: bOA
              }],
              type: Oy
            }, {
              conditions: [da1, U81],
              rules: [{
                conditions: [{
                  [MD]: H8A,
                  [PD]: [_r8, Hr8]
                }],
                rules: [{
                  endpoint: {
                    url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                    properties: jD,
                    headers: jD
                  },
                  type: Hn
                }],
                type: Oy
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                type: bOA
              }],
              type: Oy
            }, {
              conditions: [Q81, ca1],
              rules: [{
                conditions: [Gr8],
                rules: [{
                  endpoint: {
                    url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: jD,
                    headers: jD
                  },
                  type: Hn
                }],
                type: Oy
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                type: bOA
              }],
              type: Oy
            }, {
              endpoint: {
                url: "https://signin.{Region}.{PartitionResult#dnsSuffix}",
                properties: jD,
                headers: jD
              },
              type: Hn
            }],
            type: Oy
          }],
          type: Oy
        }, {
          error: "Invalid Configuration: Missing Region",
          type: bOA
        }],
        type: Oy
      }]
    };
  Dr8.ruleSet = np5;
});

// Register to shared state
__$.Mr8 = Mr8;
