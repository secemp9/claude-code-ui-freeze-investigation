// Module: an7
// Dependencies: r5A, K9, UG, jS, mf, zP, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var an7 = v(on7 => {
  Object.defineProperty(on7, "__esModule", {
    value: !0
  });
  on7.setup = WJ2;
  var cn7 = CA("net"),
    ln7 = __$.r5A(),
    Bj1 = __$.K9(),
    pC6 = __$.UG(),
    in7 = __$.jS(),
    $J2 = __$.mf(),
    nn7 = __$.zP(),
    _J2 = __$.Lw(),
    GJ2 = "ip_resolver";
  function rn7(A) {
    _J2.trace(Bj1.LogVerbosity.DEBUG, GJ2, A);
  }
  var dC6 = "ipv4",
    cC6 = "ipv6",
    ZJ2 = 443;
  class lC6 {
    constructor(A, K, q) {
      var Y;
      this.listener = K, this.endpoints = [], this.error = null, this.hasReturnedResult = !1, rn7("Resolver constructed for target " + (0, nn7.uriToString)(A));
      let z = [];
      if (!(A.scheme === dC6 || A.scheme === cC6)) {
        this.error = {
          code: Bj1.Status.UNAVAILABLE,
          details: `Unrecognized scheme ${A.scheme} in IP resolver`,
          metadata: new pC6.Metadata()
        };
        return;
      }
      let w = A.path.split(",");
      for (let H of w) {
        let J = (0, nn7.splitHostPort)(H);
        if (J === null) {
          this.error = {
            code: Bj1.Status.UNAVAILABLE,
            details: `Failed to parse ${A.scheme} address ${H}`,
            metadata: new pC6.Metadata()
          };
          return;
        }
        if (A.scheme === dC6 && !(0, cn7.isIPv4)(J.host) || A.scheme === cC6 && !(0, cn7.isIPv6)(J.host)) {
          this.error = {
            code: Bj1.Status.UNAVAILABLE,
            details: `Failed to parse ${A.scheme} address ${H}`,
            metadata: new pC6.Metadata()
          };
          return;
        }
        z.push({
          host: J.host,
          port: (Y = J.port) !== null && Y !== void 0 ? Y : ZJ2
        });
      }
      this.endpoints = z.map(H => ({
        addresses: [H]
      })), rn7("Parsed " + A.scheme + " address list " + z.map($J2.subchannelAddressToString));
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(() => {
        if (this.error) this.listener((0, ln7.statusOrFromError)(this.error), {}, null, "");else this.listener((0, ln7.statusOrFromValue)(this.endpoints), {}, null, "");
      });
    }
    destroy() {
      this.hasReturnedResult = !1;
    }
    static getDefaultAuthority(A) {
      return A.path.split(",")[0];
    }
  }
  function WJ2() {
    (0, in7.registerResolver)(dC6, lC6), (0, in7.registerResolver)(cC6, lC6);
  }
});

// Register to shared state
__$.an7 = an7;
