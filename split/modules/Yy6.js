// Module: Yy6
// Dependencies: eR6, Ay6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yy6 = v(g1K => {
  Object.defineProperty(g1K, "__esModule", {
    value: !0
  });
  g1K.validateEvent = g1K.assertTraits = g1K.assertTrackEventProperties = g1K.assertTrackEventName = g1K.assertEventType = g1K.assertEventExists = g1K.assertUserIdentity = void 0;
  var yt = __$.eR6(),
    M3A = __$.Ay6(),
    Ky6 = "is not a string",
    qy6 = "is not an object",
    S1K = "is nil";
  function h1K(A) {
    var K = ".userId/anonymousId/previousId/groupId",
      q = function (z) {
        var w, H, J;
        return (J = (H = (w = z.userId) !== null && w !== void 0 ? w : z.anonymousId) !== null && H !== void 0 ? H : z.groupId) !== null && J !== void 0 ? J : z.previousId;
      },
      Y = q(A);
    if (!(0, M3A.exists)(Y)) throw new yt.ValidationError(K, S1K);else if (!(0, M3A.isString)(Y)) throw new yt.ValidationError(K, Ky6);
  }
  g1K.assertUserIdentity = h1K;
  function b1K(A) {
    if (!(0, M3A.exists)(A)) throw new yt.ValidationError("Event", S1K);
    if (typeof A !== "object") throw new yt.ValidationError("Event", qy6);
  }
  g1K.assertEventExists = b1K;
  function x1K(A) {
    if (!(0, M3A.isString)(A.type)) throw new yt.ValidationError(".type", Ky6);
  }
  g1K.assertEventType = x1K;
  function u1K(A) {
    if (!(0, M3A.isString)(A.event)) throw new yt.ValidationError(".event", Ky6);
  }
  g1K.assertTrackEventName = u1K;
  function B1K(A) {
    if (!(0, M3A.isPlainObject)(A.properties)) throw new yt.ValidationError(".properties", qy6);
  }
  g1K.assertTrackEventProperties = B1K;
  function m1K(A) {
    if (!(0, M3A.isPlainObject)(A.traits)) throw new yt.ValidationError(".traits", qy6);
  }
  g1K.assertTraits = m1K;
  function tG2(A) {
    if (b1K(A), x1K(A), A.type === "track") u1K(A), B1K(A);
    if (["group", "identify"].includes(A.type)) m1K(A);
    h1K(A);
  }
  g1K.validateEvent = tG2;
});

// Register to shared state
__$.Yy6 = Yy6;
