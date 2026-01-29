// Module: cF4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cF4 = v(pF4 => {
  Object.defineProperty(pF4, "__esModule", {
    value: !0
  });
  pF4.ruleSet = void 0;
  var gF4 = "required",
    bD = "fn",
    xD = "argv",
    n$A = "ref",
    RF4 = !0,
    yF4 = "isSet",
    pSA = "booleanEquals",
    i$A = "error",
    zu = "endpoint",
    JU = "tree",
    Yz6 = "PartitionResult",
    zz6 = "getAttr",
    QSA = "stringEquals",
    IF4 = {
      [gF4]: !1,
      type: "string"
    },
    SF4 = {
      [gF4]: !0,
      default: !1,
      type: "boolean"
    },
    hF4 = {
      [n$A]: "Endpoint"
    },
    FF4 = {
      [bD]: pSA,
      [xD]: [{
        [n$A]: "UseFIPS"
      }, !0]
    },
    QF4 = {
      [bD]: pSA,
      [xD]: [{
        [n$A]: "UseDualStack"
      }, !0]
    },
    w$ = {},
    USA = {
      [n$A]: "Region"
    },
    bF4 = {
      [bD]: zz6,
      [xD]: [{
        [n$A]: Yz6
      }, "supportsFIPS"]
    },
    UF4 = {
      [n$A]: Yz6
    },
    xF4 = {
      [bD]: pSA,
      [xD]: [!0, {
        [bD]: zz6,
        [xD]: [UF4, "supportsDualStack"]
      }]
    },
    uF4 = [FF4],
    BF4 = [QF4],
    mF4 = [USA],
    Kx9 = {
      version: "1.0",
      parameters: {
        Region: IF4,
        UseDualStack: SF4,
        UseFIPS: SF4,
        Endpoint: IF4
      },
      rules: [{
        conditions: [{
          [bD]: yF4,
          [xD]: [hF4]
        }],
        rules: [{
          conditions: uF4,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: i$A
        }, {
          conditions: BF4,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: i$A
        }, {
          endpoint: {
            url: hF4,
            properties: w$,
            headers: w$
          },
          type: zu
        }],
        type: JU
      }, {
        conditions: [{
          [bD]: yF4,
          [xD]: mF4
        }],
        rules: [{
          conditions: [{
            [bD]: "aws.partition",
            [xD]: mF4,
            assign: Yz6
          }],
          rules: [{
            conditions: [FF4, QF4],
            rules: [{
              conditions: [{
                [bD]: pSA,
                [xD]: [RF4, bF4]
              }, xF4],
              rules: [{
                conditions: [{
                  [bD]: QSA,
                  [xD]: [USA, "us-east-1"]
                }],
                endpoint: {
                  url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }, {
                conditions: [{
                  [bD]: QSA,
                  [xD]: [USA, "us-east-2"]
                }],
                endpoint: {
                  url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }, {
                conditions: [{
                  [bD]: QSA,
                  [xD]: [USA, "us-west-1"]
                }],
                endpoint: {
                  url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }, {
                conditions: [{
                  [bD]: QSA,
                  [xD]: [USA, "us-west-2"]
                }],
                endpoint: {
                  url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }, {
                endpoint: {
                  url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }],
              type: JU
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: i$A
            }],
            type: JU
          }, {
            conditions: uF4,
            rules: [{
              conditions: [{
                [bD]: pSA,
                [xD]: [bF4, RF4]
              }],
              rules: [{
                endpoint: {
                  url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }],
              type: JU
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: i$A
            }],
            type: JU
          }, {
            conditions: BF4,
            rules: [{
              conditions: [xF4],
              rules: [{
                conditions: [{
                  [bD]: QSA,
                  [xD]: ["aws", {
                    [bD]: zz6,
                    [xD]: [UF4, "name"]
                  }]
                }],
                endpoint: {
                  url: "https://cognito-identity.{Region}.amazonaws.com",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }, {
                endpoint: {
                  url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: w$,
                  headers: w$
                },
                type: zu
              }],
              type: JU
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: i$A
            }],
            type: JU
          }, {
            endpoint: {
              url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
              properties: w$,
              headers: w$
            },
            type: zu
          }],
          type: JU
        }],
        type: JU
      }, {
        error: "Invalid Configuration: Missing Region",
        type: i$A
      }]
    };
  pF4.ruleSet = Kx9;
});

// Register to shared state
__$.cF4 = cF4;
