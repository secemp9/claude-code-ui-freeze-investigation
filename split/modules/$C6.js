// Module: $C6
// Dependencies: Lw, K9, mf, zP, XC6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $C6 = v(xl7 => {
  Object.defineProperty(xl7, "__esModule", {
    value: !0
  });
  xl7.parseCIDR = hl7;
  xl7.mapProxyName = Oz2;
  xl7.getProxiedConnection = Xz2;
  var PFA = __$.Lw(),
    VjA = __$.K9(),
    Sl7 = CA("net"),
    e22 = CA("http"),
    Az2 = __$.Lw(),
    Il7 = __$.mf(),
    VFA = __$.zP(),
    Kz2 = CA("url"),
    qz2 = __$.XC6(),
    Yz2 = "proxy";
  function fjA(A) {
    Az2.trace(VjA.LogVerbosity.DEBUG, Yz2, A);
  }
  function zz2() {
    let A = "",
      K = "";
    if (process.env.grpc_proxy) K = "grpc_proxy", A = process.env.grpc_proxy;else if (process.env.https_proxy) K = "https_proxy", A = process.env.https_proxy;else if (process.env.http_proxy) K = "http_proxy", A = process.env.http_proxy;else return {};
    let q;
    try {
      q = new Kz2.URL(A);
    } catch (J) {
      return (0, PFA.log)(VjA.LogVerbosity.ERROR, `cannot parse value of "${K}" env var`), {};
    }
    if (q.protocol !== "http:") return (0, PFA.log)(VjA.LogVerbosity.ERROR, `"${q.protocol}" scheme not supported in proxy URI`), {};
    let Y = null;
    if (q.username) if (q.password) (0, PFA.log)(VjA.LogVerbosity.INFO, "userinfo found in proxy URI"), Y = decodeURIComponent(`${q.username}:${q.password}`);else Y = q.username;
    let {
      hostname: z,
      port: w
    } = q;
    if (w === "") w = "80";
    let H = {
      address: `${z}:${w}`
    };
    if (Y) H.creds = Y;
    return fjA("Proxy server " + H.address + " set by environment variable " + K), H;
  }
  function wz2() {
    let A = process.env.no_grpc_proxy,
      K = "no_grpc_proxy";
    if (!A) A = process.env.no_proxy, K = "no_proxy";
    if (A) return fjA("No proxy server list set by environment variable " + K), A.split(",");else return [];
  }
  function hl7(A) {
    let K = A.split("/");
    if (K.length !== 2) return null;
    let q = parseInt(K[1], 10);
    if (!(0, Sl7.isIPv4)(K[0]) || Number.isNaN(q) || q < 0 || q > 32) return null;
    return {
      ip: bl7(K[0]),
      prefixLength: q
    };
  }
  function bl7(A) {
    return A.split(".").reduce((K, q) => (K << 8) + parseInt(q, 10), 0);
  }
  function Hz2(A, K) {
    let q = A.ip,
      Y = -1 << 32 - A.prefixLength;
    return (bl7(K) & Y) === (q & Y);
  }
  function Jz2(A) {
    for (let K of wz2()) {
      let q = hl7(K);
      if ((0, Sl7.isIPv4)(A) && q && Hz2(q, A)) return !0;else if (A.endsWith(K)) return !0;
    }
    return !1;
  }
  function Oz2(A, K) {
    var q;
    let Y = {
      target: A,
      extraOptions: {}
    };
    if (((q = K["grpc.enable_http_proxy"]) !== null && q !== void 0 ? q : 1) === 0) return Y;
    if (A.scheme === "unix") return Y;
    let z = zz2();
    if (!z.address) return Y;
    let w = (0, VFA.splitHostPort)(A.path);
    if (!w) return Y;
    let H = w.host;
    if (Jz2(H)) return fjA("Not using proxy for target in no_proxy list: " + (0, VFA.uriToString)(A)), Y;
    let J = {
      "grpc.http_connect_target": (0, VFA.uriToString)(A)
    };
    if (z.creds) J["grpc.http_connect_creds"] = z.creds;
    return {
      target: {
        scheme: "dns",
        path: z.address
      },
      extraOptions: J
    };
  }
  function Xz2(A, K) {
    var q;
    if (!("grpc.http_connect_target" in K)) return Promise.resolve(null);
    let Y = K["grpc.http_connect_target"],
      z = (0, VFA.parseUri)(Y);
    if (z === null) return Promise.resolve(null);
    let w = (0, VFA.splitHostPort)(z.path);
    if (w === null) return Promise.resolve(null);
    let H = `${w.host}:${(q = w.port) !== null && q !== void 0 ? q : qz2.DEFAULT_PORT}`,
      J = {
        method: "CONNECT",
        path: H
      },
      O = {
        Host: H
      };
    if ((0, Il7.isTcpSubchannelAddress)(A)) J.host = A.host, J.port = A.port;else J.socketPath = A.path;
    if ("grpc.http_connect_creds" in K) O["Proxy-Authorization"] = "Basic " + Buffer.from(K["grpc.http_connect_creds"]).toString("base64");
    J.headers = O;
    let X = (0, Il7.subchannelAddressToString)(A);
    return fjA("Using proxy " + X + " to connect to " + J.path), new Promise(($, _) => {
      let G = e22.request(J);
      G.once("connect", (Z, W, D) => {
        if (G.removeAllListeners(), W.removeAllListeners(), Z.statusCode === 200) {
          if (fjA("Successfully connected to " + J.path + " through proxy " + X), D.length > 0) W.unshift(D);
          fjA("Successfully established a plaintext connection to " + J.path + " through proxy " + X), $(W);
        } else (0, PFA.log)(VjA.LogVerbosity.ERROR, "Failed to connect to " + J.path + " through proxy " + X + " with status " + Z.statusCode), _();
      }), G.once("error", Z => {
        G.removeAllListeners(), (0, PFA.log)(VjA.LogVerbosity.ERROR, "Failed to connect to proxy " + X + " with error " + Z.message), _();
      }), G.end();
    });
  }
});

// Register to shared state
__$.$C6 = $C6;
