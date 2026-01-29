// Module: hd8
// Dependencies: dX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hd8 = v(Id8 => {
  Object.defineProperty(Id8, "__esModule", {
    value: !0
  });
  Id8.checkUrl = void 0;
  var YS5 = __$.dX(),
    zS5 = "169.254.170.2",
    wS5 = "169.254.170.23",
    HS5 = "[fd00:ec2::23]",
    JS5 = (A, K) => {
      if (A.protocol === "https:") return;
      if (A.hostname === zS5 || A.hostname === wS5 || A.hostname === HS5) return;
      if (A.hostname.includes("[")) {
        if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return;
      } else {
        if (A.hostname === "localhost") return;
        let q = A.hostname.split("."),
          Y = z => {
            let w = parseInt(z, 10);
            return 0 <= w && w <= 255;
          };
        if (q[0] === "127" && Y(q[1]) && Y(q[2]) && Y(q[3]) && q.length === 4) return;
      }
      throw new YS5.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
        logger: K
      });
    };
  Id8.checkUrl = JS5;
});

// Register to shared state
__$.hd8 = hd8;
