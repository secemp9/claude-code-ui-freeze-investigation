// Module: bV7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bV7 = v(SV7 => {
  Object.defineProperty(SV7, "__esModule", {
    value: !0
  });
  SV7.ruleSet = void 0;
  var NV7 = "required",
    R3 = "type",
    A2 = "fn",
    K2 = "argv",
    Hs = "ref",
    $V7 = !1,
    OV6 = !0,
    ws = "booleanEquals",
    XW = "stringEquals",
    TV7 = "sigv4",
    vV7 = "sts",
    EV7 = "us-east-1",
    SJ = "endpoint",
    _V7 = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    ZB = "tree",
    yWA = "error",
    $V6 = "getAttr",
    GV7 = {
      [NV7]: !1,
      [R3]: "string"
    },
    XV6 = {
      [NV7]: !0,
      default: !1,
      [R3]: "boolean"
    },
    kV7 = {
      [Hs]: "Endpoint"
    },
    ZV7 = {
      [A2]: "isSet",
      [K2]: [{
        [Hs]: "Region"
      }]
    },
    $W = {
      [Hs]: "Region"
    },
    WV7 = {
      [A2]: "aws.partition",
      [K2]: [$W],
      assign: "PartitionResult"
    },
    CV7 = {
      [Hs]: "UseFIPS"
    },
    LV7 = {
      [Hs]: "UseDualStack"
    },
    tD = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: TV7,
          signingName: vV7,
          signingRegion: EV7
        }]
      },
      headers: {}
    },
    eT = {},
    DV7 = {
      conditions: [{
        [A2]: XW,
        [K2]: [$W, "aws-global"]
      }],
      [SJ]: tD,
      [R3]: SJ
    },
    RV7 = {
      [A2]: ws,
      [K2]: [CV7, !0]
    },
    yV7 = {
      [A2]: ws,
      [K2]: [LV7, !0]
    },
    jV7 = {
      [A2]: $V6,
      [K2]: [{
        [Hs]: "PartitionResult"
      }, "supportsFIPS"]
    },
    IV7 = {
      [Hs]: "PartitionResult"
    },
    MV7 = {
      [A2]: ws,
      [K2]: [!0, {
        [A2]: $V6,
        [K2]: [IV7, "supportsDualStack"]
      }]
    },
    PV7 = [{
      [A2]: "isSet",
      [K2]: [kV7]
    }],
    VV7 = [RV7],
    fV7 = [yV7],
    DSY = {
      version: "1.0",
      parameters: {
        Region: GV7,
        UseDualStack: XV6,
        UseFIPS: XV6,
        Endpoint: GV7,
        UseGlobalEndpoint: XV6
      },
      rules: [{
        conditions: [{
          [A2]: ws,
          [K2]: [{
            [Hs]: "UseGlobalEndpoint"
          }, OV6]
        }, {
          [A2]: "not",
          [K2]: PV7
        }, ZV7, WV7, {
          [A2]: ws,
          [K2]: [CV7, $V7]
        }, {
          [A2]: ws,
          [K2]: [LV7, $V7]
        }],
        rules: [{
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "ap-northeast-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "ap-south-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "ap-southeast-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "ap-southeast-2"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, DV7, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "ca-central-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "eu-central-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "eu-north-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "eu-west-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "eu-west-2"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "eu-west-3"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "sa-east-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, EV7]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "us-east-2"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "us-west-1"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          conditions: [{
            [A2]: XW,
            [K2]: [$W, "us-west-2"]
          }],
          endpoint: tD,
          [R3]: SJ
        }, {
          endpoint: {
            url: _V7,
            properties: {
              authSchemes: [{
                name: TV7,
                signingName: vV7,
                signingRegion: "{Region}"
              }]
            },
            headers: eT
          },
          [R3]: SJ
        }],
        [R3]: ZB
      }, {
        conditions: PV7,
        rules: [{
          conditions: VV7,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [R3]: yWA
        }, {
          conditions: fV7,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          [R3]: yWA
        }, {
          endpoint: {
            url: kV7,
            properties: eT,
            headers: eT
          },
          [R3]: SJ
        }],
        [R3]: ZB
      }, {
        conditions: [ZV7],
        rules: [{
          conditions: [WV7],
          rules: [{
            conditions: [RV7, yV7],
            rules: [{
              conditions: [{
                [A2]: ws,
                [K2]: [OV6, jV7]
              }, MV7],
              rules: [{
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: eT,
                  headers: eT
                },
                [R3]: SJ
              }],
              [R3]: ZB
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              [R3]: yWA
            }],
            [R3]: ZB
          }, {
            conditions: VV7,
            rules: [{
              conditions: [{
                [A2]: ws,
                [K2]: [jV7, OV6]
              }],
              rules: [{
                conditions: [{
                  [A2]: XW,
                  [K2]: [{
                    [A2]: $V6,
                    [K2]: [IV7, "name"]
                  }, "aws-us-gov"]
                }],
                endpoint: {
                  url: "https://sts.{Region}.amazonaws.com",
                  properties: eT,
                  headers: eT
                },
                [R3]: SJ
              }, {
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: eT,
                  headers: eT
                },
                [R3]: SJ
              }],
              [R3]: ZB
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              [R3]: yWA
            }],
            [R3]: ZB
          }, {
            conditions: fV7,
            rules: [{
              conditions: [MV7],
              rules: [{
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: eT,
                  headers: eT
                },
                [R3]: SJ
              }],
              [R3]: ZB
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              [R3]: yWA
            }],
            [R3]: ZB
          }, DV7, {
            endpoint: {
              url: _V7,
              properties: eT,
              headers: eT
            },
            [R3]: SJ
          }],
          [R3]: ZB
        }],
        [R3]: ZB
      }, {
        error: "Invalid Configuration: Missing Region",
        [R3]: yWA
      }]
    };
  SV7.ruleSet = DSY;
});

// Register to shared state
__$.bV7 = bV7;
