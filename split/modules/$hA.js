// Module: $hA
// Dependencies: oy, Ir4, TH6, nr4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $hA = v(Sq => {
  var Ua9 = Sq && Sq.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    pa9 = Sq && Sq.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) Ua9(K, A, q);
    };
  Object.defineProperty(Sq, "__esModule", {
    value: !0
  });
  Sq.gcpResidencyCache = Sq.METADATA_SERVER_DETECTION = Sq.HEADERS = Sq.HEADER_VALUE = Sq.HEADER_NAME = Sq.SECONDARY_HOST_ADDRESS = Sq.HOST_ADDRESS = Sq.BASE_PATH = void 0;
  Sq.instance = ra9;
  Sq.project = oa9;
  Sq.universe = aa9;
  Sq.bulk = sa9;
  Sq.isAvailable = ea9;
  Sq.resetIsAvailableCache = As9;
  Sq.getGCPResidency = RH6;
  Sq.setGCPResidency = or4;
  Sq.requestTimeout = ar4;
  var CH6 = __$.oy(),
    da9 = __$.Ir4(),
    ca9 = __$.TH6(),
    la9 = __$.nr4();
  Sq.BASE_PATH = "/computeMetadata/v1";
  Sq.HOST_ADDRESS = "http://169.254.169.254";
  Sq.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  Sq.HEADER_NAME = "Metadata-Flavor";
  Sq.HEADER_VALUE = "Google";
  Sq.HEADERS = Object.freeze({
    [Sq.HEADER_NAME]: Sq.HEADER_VALUE
  });
  var rr4 = la9.log("gcp metadata");
  Sq.METADATA_SERVER_DETECTION = Object.freeze({
    "assume-present": "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    "ping-only": "skip the BIOS probe, and go straight to pinging"
  });
  function LH6(A) {
    if (!A) A = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || Sq.HOST_ADDRESS;
    if (!/^https?:\/\//.test(A)) A = `http://${A}`;
    return new URL(Sq.BASE_PATH, A).href;
  }
  function ia9(A) {
    Object.keys(A).forEach(K => {
      switch (K) {
        case "params":
        case "property":
        case "headers":
          break;
        case "qs":
          throw Error("'qs' is not a valid configuration option. Please use 'params' instead.");
        default:
          throw Error(`'${K}' is not a valid configuration option.`);
      }
    });
  }
  async function XhA(A, K = {}, q = 3, Y = !1) {
    let z = "",
      w = {},
      H = {};
    if (typeof A === "object") {
      let $ = A;
      z = $.metadataKey, w = $.params || w, H = $.headers || H, q = $.noResponseRetries || q, Y = $.fastFail || Y;
    } else z = A;
    if (typeof K === "string") z += `/${K}`;else {
      if (ia9(K), K.property) z += `/${K.property}`;
      H = K.headers || H, w = K.params || w;
    }
    let J = Y ? na9 : CH6.request,
      O = {
        url: `${LH6()}/${z}`,
        headers: {
          ...Sq.HEADERS,
          ...H
        },
        retryConfig: {
          noResponseRetries: q
        },
        params: w,
        responseType: "text",
        timeout: ar4()
      };
    rr4.info("instance request %j", O);
    let X = await J(O);
    if (rr4.info("instance metadata is %s", X.data), X.headers[Sq.HEADER_NAME.toLowerCase()] !== Sq.HEADER_VALUE) throw Error(`Invalid response from metadata service: incorrect ${Sq.HEADER_NAME} header. Expected '${Sq.HEADER_VALUE}', got ${X.headers[Sq.HEADER_NAME.toLowerCase()] ? `'${X.headers[Sq.HEADER_NAME.toLowerCase()]}'` : "no header"}`);
    if (typeof X.data === "string") try {
      return da9.parse(X.data);
    } catch ($) {}
    return X.data;
  }
  async function na9(A) {
    var K;
    let q = {
        ...A,
        url: (K = A.url) === null || K === void 0 ? void 0 : K.toString().replace(LH6(), LH6(Sq.SECONDARY_HOST_ADDRESS))
      },
      Y = !1,
      z = (0, CH6.request)(A).then(H => {
        return Y = !0, H;
      }).catch(H => {
        if (Y) return w;else throw Y = !0, H;
      }),
      w = (0, CH6.request)(q).then(H => {
        return Y = !0, H;
      }).catch(H => {
        if (Y) return z;else throw Y = !0, H;
      });
    return Promise.race([z, w]);
  }
  function ra9(A) {
    return XhA("instance", A);
  }
  function oa9(A) {
    return XhA("project", A);
  }
  function aa9(A) {
    return XhA("universe", A);
  }
  async function sa9(A) {
    let K = {};
    return await Promise.all(A.map(q => {
      return (async () => {
        let Y = await XhA(q),
          z = q.metadataKey;
        K[z] = Y;
      })();
    })), K;
  }
  function ta9() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
  }
  var oz1;
  async function ea9() {
    if (process.env.METADATA_SERVER_DETECTION) {
      let A = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(A in Sq.METADATA_SERVER_DETECTION)) throw RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${A}\`, but it should be \`${Object.keys(Sq.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
      switch (A) {
        case "assume-present":
          return !0;
        case "none":
          return !1;
        case "bios-only":
          return RH6();
        case "ping-only":
      }
    }
    try {
      if (oz1 === void 0) oz1 = XhA("instance", void 0, ta9(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
      return await oz1, !0;
    } catch (A) {
      let K = A;
      if (process.env.DEBUG_AUTH) console.info(K);
      if (K.type === "request-timeout") return !1;
      if (K.response && K.response.status === 404) return !1;else {
        if (!(K.response && K.response.status === 404) && (!K.code || !["EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED"].includes(K.code))) {
          let q = "UNKNOWN";
          if (K.code) q = K.code;
          process.emitWarning(`received unexpected error = ${K.message} code = ${q}`, "MetadataLookupWarning");
        }
        return !1;
      }
    }
  }
  function As9() {
    oz1 = void 0;
  }
  Sq.gcpResidencyCache = null;
  function RH6() {
    if (Sq.gcpResidencyCache === null) or4();
    return Sq.gcpResidencyCache;
  }
  function or4(A = null) {
    Sq.gcpResidencyCache = A !== null ? A : (0, ca9.detectGCPResidency)();
  }
  function ar4() {
    return RH6() ? 0 : 3000;
  }
  pa9(__$.TH6(), Sq);
});

// Register to shared state
__$.$hA = $hA;
