// Module: ho8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ho8 = v(Io8 => {
  Object.defineProperty(Io8, "__esModule", {
    value: !0
  });
  Io8.ruleSet = void 0;
  var fo8 = "required",
    V3 = "type",
    rY = "fn",
    oY = "argv",
    _n = "ref",
    Xo8 = !1,
    Xs1 = !0,
    $n = "booleanEquals",
    LZ = "stringEquals",
    No8 = "sigv4",
    To8 = "sts",
    vo8 = "us-east-1",
    jJ = "endpoint",
    $o8 = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    ib = "tree",
    BOA = "error",
    _s1 = "getAttr",
    _o8 = {
      [fo8]: !1,
      [V3]: "string"
    },
    $s1 = {
      [fo8]: !0,
      default: !1,
      [V3]: "boolean"
    },
    Eo8 = {
      [_n]: "Endpoint"
    },
    Go8 = {
      [rY]: "isSet",
      [oY]: [{
        [_n]: "Region"
      }]
    },
    RZ = {
      [_n]: "Region"
    },
    Zo8 = {
      [rY]: "aws.partition",
      [oY]: [RZ],
      assign: "PartitionResult"
    },
    ko8 = {
      [_n]: "UseFIPS"
    },
    Co8 = {
      [_n]: "UseDualStack"
    },
    VD = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: No8,
          signingName: To8,
          signingRegion: vo8
        }]
      },
      headers: {}
    },
    XT = {},
    Wo8 = {
      conditions: [{
        [rY]: LZ,
        [oY]: [RZ, "aws-global"]
      }],
      [jJ]: VD,
      [V3]: jJ
    },
    Lo8 = {
      [rY]: $n,
      [oY]: [ko8, !0]
    },
    Ro8 = {
      [rY]: $n,
      [oY]: [Co8, !0]
    },
    Do8 = {
      [rY]: _s1,
      [oY]: [{
        [_n]: "PartitionResult"
      }, "supportsFIPS"]
    },
    yo8 = {
      [_n]: "PartitionResult"
    },
    jo8 = {
      [rY]: $n,
      [oY]: [!0, {
        [rY]: _s1,
        [oY]: [yo8, "supportsDualStack"]
      }]
    },
    Mo8 = [{
      [rY]: "isSet",
      [oY]: [Eo8]
    }],
    Po8 = [Lo8],
    Vo8 = [Ro8],
    Rc5 = {
      version: "1.0",
      parameters: {
        Region: _o8,
        UseDualStack: $s1,
        UseFIPS: $s1,
        Endpoint: _o8,
        UseGlobalEndpoint: $s1
      },
      rules: [{
        conditions: [{
          [rY]: $n,
          [oY]: [{
            [_n]: "UseGlobalEndpoint"
          }, Xs1]
        }, {
          [rY]: "not",
          [oY]: Mo8
        }, Go8, Zo8, {
          [rY]: $n,
          [oY]: [ko8, Xo8]
        }, {
          [rY]: $n,
          [oY]: [Co8, Xo8]
        }],
        rules: [{
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "ap-northeast-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "ap-south-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "ap-southeast-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "ap-southeast-2"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, Wo8, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "ca-central-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "eu-central-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "eu-north-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "eu-west-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "eu-west-2"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "eu-west-3"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "sa-east-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, vo8]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "us-east-2"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "us-west-1"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          conditions: [{
            [rY]: LZ,
            [oY]: [RZ, "us-west-2"]
          }],
          endpoint: VD,
          [V3]: jJ
        }, {
          endpoint: {
            url: $o8,
            properties: {
              authSchemes: [{
                name: No8,
                signingName: To8,
                signingRegion: "{Region}"
              }]
            },
            headers: XT
          },
          [V3]: jJ
        }],
        [V3]: ib
      }, {
        conditions: Mo8,
        rules: [{
          conditions: Po8,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [V3]: BOA
        }, {
          conditions: Vo8,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          [V3]: BOA
        }, {
          endpoint: {
            url: Eo8,
            properties: XT,
            headers: XT
          },
          [V3]: jJ
        }],
        [V3]: ib
      }, {
        conditions: [Go8],
        rules: [{
          conditions: [Zo8],
          rules: [{
            conditions: [Lo8, Ro8],
            rules: [{
              conditions: [{
                [rY]: $n,
                [oY]: [Xs1, Do8]
              }, jo8],
              rules: [{
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: XT,
                  headers: XT
                },
                [V3]: jJ
              }],
              [V3]: ib
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              [V3]: BOA
            }],
            [V3]: ib
          }, {
            conditions: Po8,
            rules: [{
              conditions: [{
                [rY]: $n,
                [oY]: [Do8, Xs1]
              }],
              rules: [{
                conditions: [{
                  [rY]: LZ,
                  [oY]: [{
                    [rY]: _s1,
                    [oY]: [yo8, "name"]
                  }, "aws-us-gov"]
                }],
                endpoint: {
                  url: "https://sts.{Region}.amazonaws.com",
                  properties: XT,
                  headers: XT
                },
                [V3]: jJ
              }, {
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: XT,
                  headers: XT
                },
                [V3]: jJ
              }],
              [V3]: ib
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              [V3]: BOA
            }],
            [V3]: ib
          }, {
            conditions: Vo8,
            rules: [{
              conditions: [jo8],
              rules: [{
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: XT,
                  headers: XT
                },
                [V3]: jJ
              }],
              [V3]: ib
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              [V3]: BOA
            }],
            [V3]: ib
          }, Wo8, {
            endpoint: {
              url: $o8,
              properties: XT,
              headers: XT
            },
            [V3]: jJ
          }],
          [V3]: ib
        }],
        [V3]: ib
      }, {
        error: "Invalid Configuration: Missing Region",
        [V3]: BOA
      }]
    };
  Io8.ruleSet = Rc5;
});

// Register to shared state
__$.ho8 = ho8;
