// Module: gb
// Dependencies: Ky, tE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gb = v(y61 => {
  var qOA = __$.Ky(),
    mM5 = __$.tE(),
    qF8 = (A, K = !1) => {
      if (K) {
        for (let q of A.split(".")) if (!qF8(q)) return !1;
        return !0;
      }
      if (!qOA.isValidHostLabel(A)) return !1;
      if (A.length < 3 || A.length > 63) return !1;
      if (A !== A.toLowerCase()) return !1;
      if (qOA.isIpAddress(A)) return !1;
      return !0;
    },
    KF8 = ":",
    gM5 = "/",
    FM5 = A => {
      let K = A.split(KF8);
      if (K.length < 6) return null;
      let [q, Y, z, w, H, ...J] = K;
      if (q !== "arn" || Y === "" || z === "" || J.join(KF8) === "") return null;
      let O = J.map(X => X.split(gM5)).flat();
      return {
        partition: Y,
        service: z,
        region: w,
        accountId: H,
        resourceId: O
      };
    },
    QM5 = [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-east-1",
        name: "aws",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": {
          description: "Africa (Cape Town)"
        },
        "ap-east-1": {
          description: "Asia Pacific (Hong Kong)"
        },
        "ap-east-2": {
          description: "Asia Pacific (Taipei)"
        },
        "ap-northeast-1": {
          description: "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          description: "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          description: "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          description: "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          description: "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          description: "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          description: "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          description: "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          description: "Asia Pacific (Melbourne)"
        },
        "ap-southeast-5": {
          description: "Asia Pacific (Malaysia)"
        },
        "ap-southeast-6": {
          description: "Asia Pacific (New Zealand)"
        },
        "ap-southeast-7": {
          description: "Asia Pacific (Thailand)"
        },
        "aws-global": {
          description: "aws global region"
        },
        "ca-central-1": {
          description: "Canada (Central)"
        },
        "ca-west-1": {
          description: "Canada West (Calgary)"
        },
        "eu-central-1": {
          description: "Europe (Frankfurt)"
        },
        "eu-central-2": {
          description: "Europe (Zurich)"
        },
        "eu-north-1": {
          description: "Europe (Stockholm)"
        },
        "eu-south-1": {
          description: "Europe (Milan)"
        },
        "eu-south-2": {
          description: "Europe (Spain)"
        },
        "eu-west-1": {
          description: "Europe (Ireland)"
        },
        "eu-west-2": {
          description: "Europe (London)"
        },
        "eu-west-3": {
          description: "Europe (Paris)"
        },
        "il-central-1": {
          description: "Israel (Tel Aviv)"
        },
        "me-central-1": {
          description: "Middle East (UAE)"
        },
        "me-south-1": {
          description: "Middle East (Bahrain)"
        },
        "mx-central-1": {
          description: "Mexico (Central)"
        },
        "sa-east-1": {
          description: "South America (Sao Paulo)"
        },
        "us-east-1": {
          description: "US East (N. Virginia)"
        },
        "us-east-2": {
          description: "US East (Ohio)"
        },
        "us-west-1": {
          description: "US West (N. California)"
        },
        "us-west-2": {
          description: "US West (Oregon)"
        }
      }
    }, {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        implicitGlobalRegion: "cn-northwest-1",
        name: "aws-cn",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": {
          description: "aws-cn global region"
        },
        "cn-north-1": {
          description: "China (Beijing)"
        },
        "cn-northwest-1": {
          description: "China (Ningxia)"
        }
      }
    }, {
      id: "aws-eusc",
      outputs: {
        dnsSuffix: "amazonaws.eu",
        dualStackDnsSuffix: "api.amazonwebservices.eu",
        implicitGlobalRegion: "eusc-de-east-1",
        name: "aws-eusc",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
      regions: {
        "eusc-de-east-1": {
          description: "EU (Germany)"
        }
      }
    }, {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "api.aws.ic.gov",
        implicitGlobalRegion: "us-iso-east-1",
        name: "aws-iso",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": {
          description: "aws-iso global region"
        },
        "us-iso-east-1": {
          description: "US ISO East"
        },
        "us-iso-west-1": {
          description: "US ISO WEST"
        }
      }
    }, {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "api.aws.scloud",
        implicitGlobalRegion: "us-isob-east-1",
        name: "aws-iso-b",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": {
          description: "aws-iso-b global region"
        },
        "us-isob-east-1": {
          description: "US ISOB East (Ohio)"
        },
        "us-isob-west-1": {
          description: "US ISOB West"
        }
      }
    }, {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
        implicitGlobalRegion: "eu-isoe-west-1",
        name: "aws-iso-e",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-e-global": {
          description: "aws-iso-e global region"
        },
        "eu-isoe-west-1": {
          description: "EU ISOE West"
        }
      }
    }, {
      id: "aws-iso-f",
      outputs: {
        dnsSuffix: "csp.hci.ic.gov",
        dualStackDnsSuffix: "api.aws.hci.ic.gov",
        implicitGlobalRegion: "us-isof-south-1",
        name: "aws-iso-f",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-f-global": {
          description: "aws-iso-f global region"
        },
        "us-isof-east-1": {
          description: "US ISOF EAST"
        },
        "us-isof-south-1": {
          description: "US ISOF SOUTH"
        }
      }
    }, {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-gov-west-1",
        name: "aws-us-gov",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": {
          description: "aws-us-gov global region"
        },
        "us-gov-east-1": {
          description: "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          description: "AWS GovCloud (US-West)"
        }
      }
    }],
    UM5 = "1.1",
    YF8 = {
      partitions: QM5,
      version: UM5
    },
    zF8 = YF8,
    wF8 = "",
    HF8 = A => {
      let {
        partitions: K
      } = zF8;
      for (let Y of K) {
        let {
          regions: z,
          outputs: w
        } = Y;
        for (let [H, J] of Object.entries(z)) if (H === A) return {
          ...w,
          ...J
        };
      }
      for (let Y of K) {
        let {
          regionRegex: z,
          outputs: w
        } = Y;
        if (new RegExp(z).test(A)) return {
          ...w
        };
      }
      let q = K.find(Y => Y.id === "aws");
      if (!q) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      return {
        ...q.outputs
      };
    },
    JF8 = (A, K = "") => {
      zF8 = A, wF8 = K;
    },
    pM5 = () => {
      JF8(YF8, "");
    },
    dM5 = () => wF8,
    OF8 = {
      isVirtualHostableS3Bucket: qF8,
      parseArn: FM5,
      partition: HF8
    };
  qOA.customEndpointFunctions.aws = OF8;
  var cM5 = A => {
      if (typeof A.endpointProvider !== "function") throw Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
      let {
        endpoint: K
      } = A;
      if (K === void 0) A.endpoint = async () => {
        return XF8(A.endpointProvider({
          Region: typeof A.region === "function" ? await A.region() : A.region,
          UseDualStack: typeof A.useDualstackEndpoint === "function" ? await A.useDualstackEndpoint() : A.useDualstackEndpoint,
          UseFIPS: typeof A.useFipsEndpoint === "function" ? await A.useFipsEndpoint() : A.useFipsEndpoint,
          Endpoint: void 0
        }, {
          logger: A.logger
        }));
      };
      return A;
    },
    XF8 = A => mM5.parseUrl(A.url);
  Object.defineProperty(y61, "EndpointError", {
    enumerable: !0,
    get: function () {
      return qOA.EndpointError;
    }
  });
  Object.defineProperty(y61, "isIpAddress", {
    enumerable: !0,
    get: function () {
      return qOA.isIpAddress;
    }
  });
  Object.defineProperty(y61, "resolveEndpoint", {
    enumerable: !0,
    get: function () {
      return qOA.resolveEndpoint;
    }
  });
  y61.awsEndpointFunctions = OF8;
  y61.getUserAgentPrefix = dM5;
  y61.partition = HF8;
  y61.resolveDefaultAwsRegionalEndpointsConfig = cM5;
  y61.setPartitionInfo = JF8;
  y61.toEndpointV1 = XF8;
  y61.useDefaultPartitionInfo = pM5;
});

// Register to shared state
__$.gb = gb;
