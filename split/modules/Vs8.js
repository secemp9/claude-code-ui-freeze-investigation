// Module: Vs8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vs8 = v(Ms8 => {
  Object.defineProperty(Ms8, "__esModule", {
    value: !0
  });
  Ms8.ruleSet = void 0;
  var Ws8 = "required",
    ob = "fn",
    ab = "argv",
    gOA = "ref",
    zs8 = !0,
    ws8 = "isSet",
    vLA = "booleanEquals",
    mOA = "error",
    TLA = "endpoint",
    KM = "tree",
    Is1 = "PartitionResult",
    Hs8 = {
      [Ws8]: !1,
      type: "string"
    },
    Js8 = {
      [Ws8]: !0,
      default: !1,
      type: "boolean"
    },
    Os8 = {
      [gOA]: "Endpoint"
    },
    Ds8 = {
      [ob]: vLA,
      [ab]: [{
        [gOA]: "UseFIPS"
      }, !0]
    },
    js8 = {
      [ob]: vLA,
      [ab]: [{
        [gOA]: "UseDualStack"
      }, !0]
    },
    rb = {},
    Xs8 = {
      [ob]: "getAttr",
      [ab]: [{
        [gOA]: Is1
      }, "supportsFIPS"]
    },
    $s8 = {
      [ob]: vLA,
      [ab]: [!0, {
        [ob]: "getAttr",
        [ab]: [{
          [gOA]: Is1
        }, "supportsDualStack"]
      }]
    },
    _s8 = [Ds8],
    Gs8 = [js8],
    Zs8 = [{
      [gOA]: "Region"
    }],
    rn5 = {
      version: "1.0",
      parameters: {
        Region: Hs8,
        UseDualStack: Js8,
        UseFIPS: Js8,
        Endpoint: Hs8
      },
      rules: [{
        conditions: [{
          [ob]: ws8,
          [ab]: [Os8]
        }],
        rules: [{
          conditions: _s8,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: mOA
        }, {
          rules: [{
            conditions: Gs8,
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: mOA
          }, {
            endpoint: {
              url: Os8,
              properties: rb,
              headers: rb
            },
            type: TLA
          }],
          type: KM
        }],
        type: KM
      }, {
        rules: [{
          conditions: [{
            [ob]: ws8,
            [ab]: Zs8
          }],
          rules: [{
            conditions: [{
              [ob]: "aws.partition",
              [ab]: Zs8,
              assign: Is1
            }],
            rules: [{
              conditions: [Ds8, js8],
              rules: [{
                conditions: [{
                  [ob]: vLA,
                  [ab]: [zs8, Xs8]
                }, $s8],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: rb,
                      headers: rb
                    },
                    type: TLA
                  }],
                  type: KM
                }],
                type: KM
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                type: mOA
              }],
              type: KM
            }, {
              conditions: _s8,
              rules: [{
                conditions: [{
                  [ob]: vLA,
                  [ab]: [Xs8, zs8]
                }],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}",
                      properties: rb,
                      headers: rb
                    },
                    type: TLA
                  }],
                  type: KM
                }],
                type: KM
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                type: mOA
              }],
              type: KM
            }, {
              conditions: Gs8,
              rules: [{
                conditions: [$s8],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: rb,
                      headers: rb
                    },
                    type: TLA
                  }],
                  type: KM
                }],
                type: KM
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                type: mOA
              }],
              type: KM
            }, {
              rules: [{
                endpoint: {
                  url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}",
                  properties: rb,
                  headers: rb
                },
                type: TLA
              }],
              type: KM
            }],
            type: KM
          }],
          type: KM
        }, {
          error: "Invalid Configuration: Missing Region",
          type: mOA
        }],
        type: KM
      }]
    };
  Ms8.ruleSet = rn5;
});

// Register to shared state
__$.Vs8 = Vs8;
