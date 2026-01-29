// Module: _L6
// Dependencies: RK, ss, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _L6 = v(_o7 => {
  Object.defineProperty(_o7, "__esModule", {
    value: !0
  });
  _o7.PrometheusSerializer = void 0;
  var P02 = __$.RK(),
    H3A = __$.ss(),
    Oo7 = __$.P9();
  function rj1(A) {
    return A.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  }
  function Xo7(A = "") {
    if (typeof A !== "string") A = JSON.stringify(A);
    return rj1(A).replace(/"/g, "\\\"");
  }
  var V02 = /[^a-z0-9_]/gi,
    f02 = /_{2,}/g;
  function $L6(A) {
    return A.replace(V02, "_").replace(f02, "_");
  }
  function XL6(A, K) {
    if (!A.endsWith("_total") && K.dataPointType === H3A.DataPointType.SUM && K.isMonotonic) A = A + "_total";
    return A;
  }
  function N02(A) {
    if (A === 1 / 0) return "+Inf";else if (A === -1 / 0) return "-Inf";else return `${A}`;
  }
  function T02(A) {
    switch (A.dataPointType) {
      case H3A.DataPointType.SUM:
        if (A.isMonotonic) return "counter";
        return "gauge";
      case H3A.DataPointType.GAUGE:
        return "gauge";
      case H3A.DataPointType.HISTOGRAM:
        return "histogram";
      default:
        return "untyped";
    }
  }
  function nj1(A, K, q, Y, z) {
    let w = !1,
      H = "";
    for (let [J, O] of Object.entries(K)) {
      let X = $L6(J);
      w = !0, H += `${H.length > 0 ? "," : ""}${X}="${Xo7(O)}"`;
    }
    if (z) for (let [J, O] of Object.entries(z)) {
      let X = $L6(J);
      w = !0, H += `${H.length > 0 ? "," : ""}${X}="${Xo7(O)}"`;
    }
    if (w) A += `{${H}}`;
    return `${A} ${N02(q)}${Y !== void 0 ? " " + String(Y) : ""}
`;
  }
  var v02 = "# no registered metrics";
  class $o7 {
    _prefix;
    _appendTimestamp;
    _additionalAttributes;
    _withResourceConstantLabels;
    _withoutTargetInfo;
    constructor(A, K = !1, q, Y) {
      if (A) this._prefix = A + "_";
      this._appendTimestamp = K, this._withResourceConstantLabels = q, this._withoutTargetInfo = !!Y;
    }
    serialize(A) {
      let K = "";
      this._additionalAttributes = this._filterResourceConstantLabels(A.resource.attributes, this._withResourceConstantLabels);
      for (let q of A.scopeMetrics) K += this._serializeScopeMetrics(q);
      if (K === "") K += v02;
      return this._serializeResource(A.resource) + K;
    }
    _filterResourceConstantLabels(A, K) {
      if (K) {
        let q = {};
        for (let [Y, z] of Object.entries(A)) if (Y.match(K)) q[Y] = z;
        return q;
      }
      return;
    }
    _serializeScopeMetrics(A) {
      let K = "";
      for (let q of A.metrics) K += this._serializeMetricData(q) + `
`;
      return K;
    }
    _serializeMetricData(A) {
      let K = $L6(rj1(A.descriptor.name));
      if (this._prefix) K = `${this._prefix}${K}`;
      let q = A.dataPointType;
      K = XL6(K, A);
      let Y = `# HELP ${K} ${rj1(A.descriptor.description || "description missing")}`,
        z = A.descriptor.unit ? `
# UNIT ${K} ${rj1(A.descriptor.unit)}` : "",
        w = `# TYPE ${K} ${T02(A)}`,
        H = "";
      switch (q) {
        case H3A.DataPointType.SUM:
        case H3A.DataPointType.GAUGE:
          {
            H = A.dataPoints.map(J => this._serializeSingularDataPoint(K, A, J)).join("");
            break;
          }
        case H3A.DataPointType.HISTOGRAM:
          {
            H = A.dataPoints.map(J => this._serializeHistogramDataPoint(K, A, J)).join("");
            break;
          }
        default:
          P02.diag.error(`Unrecognizable DataPointType: ${q} for metric "${K}"`);
      }
      return `${Y}${z}
${w}
${H}`.trim();
    }
    _serializeSingularDataPoint(A, K, q) {
      let Y = "";
      A = XL6(A, K);
      let {
          value: z,
          attributes: w
        } = q,
        H = (0, Oo7.hrTimeToMilliseconds)(q.endTime);
      return Y += nj1(A, w, z, this._appendTimestamp ? H : void 0, this._additionalAttributes), Y;
    }
    _serializeHistogramDataPoint(A, K, q) {
      let Y = "";
      A = XL6(A, K);
      let {
          attributes: z,
          value: w
        } = q,
        H = (0, Oo7.hrTimeToMilliseconds)(q.endTime);
      for (let $ of ["count", "sum"]) {
        let _ = w[$];
        if (_ != null) Y += nj1(A + "_" + $, z, _, this._appendTimestamp ? H : void 0, this._additionalAttributes);
      }
      let J = 0,
        O = w.buckets.counts.entries(),
        X = !1;
      for (let [$, _] of O) {
        J += _;
        let G = w.buckets.boundaries[$];
        if (G === void 0 && X) break;
        if (G === 1 / 0) X = !0;
        Y += nj1(A + "_bucket", z, J, this._appendTimestamp ? H : void 0, Object.assign({}, this._additionalAttributes ?? {}, {
          le: G === void 0 || G === 1 / 0 ? "+Inf" : String(G)
        }));
      }
      return Y;
    }
    _serializeResource(A) {
      if (this._withoutTargetInfo === !0) return "";
      let K = "target_info",
        q = `# HELP ${K} Target metadata`,
        Y = `# TYPE ${K} gauge`,
        z = nj1(K, A.attributes, 1).trim();
      return `${q}
${Y}
${z}
`;
    }
  }
  _o7.PrometheusSerializer = $o7;
});

// Register to shared state
__$._L6 = _L6;
