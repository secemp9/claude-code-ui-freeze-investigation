// Module: xFA
// Dependencies: aQ7, bFA, Sr7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xFA = v(br7 => {
  Object.defineProperty(br7, "__esModule", {
    value: !0
  });
  br7.createOtlpGrpcExporterTransport = br7.GrpcExporterTransport = br7.createEmptyMetadata = br7.createSslCredentials = br7.createInsecureCredentials = void 0;
  var yO2 = __$.aQ7(),
    hr7 = `OTel-OTLP-Exporter-JavaScript/${yO2.VERSION}`;
  function IO2(A) {
    if (A) return `${A} ${hr7}`;
    return hr7;
  }
  var SO2 = 0,
    hO2 = 2;
  function bO2(A) {
    return A === "gzip" ? hO2 : SO2;
  }
  function xO2() {
    let {
      credentials: A
    } = __$.bFA();
    return A.createInsecure();
  }
  br7.createInsecureCredentials = xO2;
  function uO2(A, K, q) {
    let {
      credentials: Y
    } = __$.bFA();
    return Y.createSsl(A, K, q);
  }
  br7.createSslCredentials = uO2;
  function BO2() {
    let {
      Metadata: A
    } = __$.bFA();
    return new A();
  }
  br7.createEmptyMetadata = BO2;
  class wL6 {
    _parameters;
    _client;
    _metadata;
    constructor(A) {
      this._parameters = A;
    }
    shutdown() {
      this._client?.close();
    }
    send(A, K) {
      let q = Buffer.from(A);
      if (this._client == null) {
        let {
          createServiceClientConstructor: Y
        } = __$.Sr7();
        try {
          this._metadata = this._parameters.metadata();
        } catch (w) {
          return Promise.resolve({
            status: "failure",
            error: w
          });
        }
        let z = Y(this._parameters.grpcPath, this._parameters.grpcName);
        try {
          this._client = new z(this._parameters.address, this._parameters.credentials(), {
            "grpc.default_compression_algorithm": bO2(this._parameters.compression),
            "grpc.primary_user_agent": IO2(this._parameters.userAgent)
          });
        } catch (w) {
          return Promise.resolve({
            status: "failure",
            error: w
          });
        }
      }
      return new Promise(Y => {
        let z = Date.now() + K;
        if (this._metadata == null) return Y({
          error: Error("metadata was null"),
          status: "failure"
        });
        this._client.export(q, this._metadata, {
          deadline: z
        }, (w, H) => {
          if (w) Y({
            status: "failure",
            error: w
          });else Y({
            data: H,
            status: "success"
          });
        });
      });
    }
  }
  br7.GrpcExporterTransport = wL6;
  function mO2(A) {
    return new wL6(A);
  }
  br7.createOtlpGrpcExporterTransport = mO2;
});

// Register to shared state
__$.xFA = xFA;
