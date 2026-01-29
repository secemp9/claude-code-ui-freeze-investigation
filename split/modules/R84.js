// Module: R84
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R84 = v(C84 => {
  Object.defineProperty(C84, "__esModule", {
    value: !0
  });
  C84.ruleSet = void 0;
  var v84 = "required",
    qx = "fn",
    Yx = "argv",
    sOA = "ref",
    Z84 = !0,
    W84 = "isSet",
    nLA = "booleanEquals",
    aOA = "error",
    iLA = "endpoint",
    qM = "tree",
    J16 = "PartitionResult",
    D84 = {
      [v84]: !1,
      type: "string"
    },
    j84 = {
      [v84]: !0,
      default: !1,
      type: "boolean"
    },
    M84 = {
      [sOA]: "Endpoint"
    },
    E84 = {
      [qx]: nLA,
      [Yx]: [{
        [sOA]: "UseFIPS"
      }, !0]
    },
    k84 = {
      [qx]: nLA,
      [Yx]: [{
        [sOA]: "UseDualStack"
      }, !0]
    },
    Kx = {},
    P84 = {
      [qx]: "getAttr",
      [Yx]: [{
        [sOA]: J16
      }, "supportsFIPS"]
    },
    V84 = {
      [qx]: nLA,
      [Yx]: [!0, {
        [qx]: "getAttr",
        [Yx]: [{
          [sOA]: J16
        }, "supportsDualStack"]
      }]
    },
    f84 = [E84],
    N84 = [k84],
    T84 = [{
      [sOA]: "Region"
    }],
    Gv3 = {
      version: "1.0",
      parameters: {
        Region: D84,
        UseDualStack: j84,
        UseFIPS: j84,
        Endpoint: D84
      },
      rules: [{
        conditions: [{
          [qx]: W84,
          [Yx]: [M84]
        }],
        rules: [{
          conditions: f84,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: aOA
        }, {
          rules: [{
            conditions: N84,
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: aOA
          }, {
            endpoint: {
              url: M84,
              properties: Kx,
              headers: Kx
            },
            type: iLA
          }],
          type: qM
        }],
        type: qM
      }, {
        rules: [{
          conditions: [{
            [qx]: W84,
            [Yx]: T84
          }],
          rules: [{
            conditions: [{
              [qx]: "aws.partition",
              [Yx]: T84,
              assign: J16
            }],
            rules: [{
              conditions: [E84, k84],
              rules: [{
                conditions: [{
                  [qx]: nLA,
                  [Yx]: [Z84, P84]
                }, V84],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: Kx,
                      headers: Kx
                    },
                    type: iLA
                  }],
                  type: qM
                }],
                type: qM
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                type: aOA
              }],
              type: qM
            }, {
              conditions: f84,
              rules: [{
                conditions: [{
                  [qx]: nLA,
                  [Yx]: [P84, Z84]
                }],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                      properties: Kx,
                      headers: Kx
                    },
                    type: iLA
                  }],
                  type: qM
                }],
                type: qM
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                type: aOA
              }],
              type: qM
            }, {
              conditions: N84,
              rules: [{
                conditions: [V84],
                rules: [{
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: Kx,
                      headers: Kx
                    },
                    type: iLA
                  }],
                  type: qM
                }],
                type: qM
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                type: aOA
              }],
              type: qM
            }, {
              rules: [{
                endpoint: {
                  url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                  properties: Kx,
                  headers: Kx
                },
                type: iLA
              }],
              type: qM
            }],
            type: qM
          }],
          type: qM
        }, {
          error: "Invalid Configuration: Missing Region",
          type: aOA
        }],
        type: qM
      }]
    };
  C84.ruleSet = Gv3;
});

// Register to shared state
__$.R84 = R84;
