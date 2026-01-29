// Module: Vq7
// Dependencies: n$6, tYY, Pq7, sYY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vq7 = k(() => {
  __$.n$6();
  __$.n$6();
  __$.tYY = (() => {
    let K;
    return async function () {
      if (K) return K;
      let q = "/etc/wsl.conf",
        Y = !1;
      try {
        await __$.Pq7.access(q, __$.sYY.F_OK), Y = !0;
      } catch {}
      if (!Y) return "/mnt/";
      let z = await __$.Pq7.readFile(q, {
          encoding: "utf8"
        }),
        w = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(z);
      if (!w) return "/mnt/";
      return K = w.groups.mountPoint.trim(), K = K.endsWith("/") ? K : `${K}/`, K;
    };
  })();
});

// Register to shared state
__$.Vq7 = Vq7;
