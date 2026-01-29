// Module: Du
// Dependencies: oy, GhA, _o

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Du = v(Lo4 => {
  Object.defineProperty(Lo4, "__esModule", {
    value: !0
  });
  Lo4.AuthClient = Lo4.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = Lo4.DEFAULT_UNIVERSE = void 0;
  var ms9 = CA("events"),
    Eo4 = __$.oy(),
    ko4 = __$.GhA(),
    gs9 = __$._o();
  Lo4.DEFAULT_UNIVERSE = "googleapis.com";
  Lo4.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;
  class Co4 extends ms9.EventEmitter {
    constructor(A = {}) {
      var K, q, Y, z, w;
      super();
      this.credentials = {}, this.eagerRefreshThresholdMillis = Lo4.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS, this.forceRefreshOnFailure = !1, this.universeDomain = Lo4.DEFAULT_UNIVERSE;
      let H = (0, gs9.originalOrCamelOptions)(A);
      if (this.apiKey = A.apiKey, this.projectId = (K = H.get("project_id")) !== null && K !== void 0 ? K : null, this.quotaProjectId = H.get("quota_project_id"), this.credentials = (q = H.get("credentials")) !== null && q !== void 0 ? q : {}, this.universeDomain = (Y = H.get("universe_domain")) !== null && Y !== void 0 ? Y : Lo4.DEFAULT_UNIVERSE, this.transporter = (z = A.transporter) !== null && z !== void 0 ? z : new ko4.DefaultTransporter(), A.transporterOptions) this.transporter.defaults = A.transporterOptions;
      if (A.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = A.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = (w = A.forceRefreshOnFailure) !== null && w !== void 0 ? w : !1;
    }
    get gaxios() {
      if (this.transporter instanceof Eo4.Gaxios) return this.transporter;else if (this.transporter instanceof ko4.DefaultTransporter) return this.transporter.instance;else if ("instance" in this.transporter && this.transporter.instance instanceof Eo4.Gaxios) return this.transporter.instance;
      return null;
    }
    setCredentials(A) {
      this.credentials = A;
    }
    addSharedMetadataHeaders(A) {
      if (!A["x-goog-user-project"] && this.quotaProjectId) A["x-goog-user-project"] = this.quotaProjectId;
      return A;
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      };
    }
  }
  Lo4.AuthClient = Co4;
});

// Register to shared state
__$.Du = Du;
