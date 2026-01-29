// Module: Nk6
// Dependencies: iD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nk6 = v(yd7 => {
  var o32 = yd7,
    a32 = __$.iD1();
  o32[".google.protobuf.Any"] = {
    fromObject: function (A) {
      if (A && A["@type"]) {
        var K = A["@type"].substring(A["@type"].lastIndexOf("/") + 1),
          q = this.lookup(K);
        if (q) {
          var Y = A["@type"].charAt(0) === "." ? A["@type"].slice(1) : A["@type"];
          if (Y.indexOf("/") === -1) Y = "/" + Y;
          return this.create({
            type_url: Y,
            value: q.encode(q.fromObject(A)).finish()
          });
        }
      }
      return this.fromObject(A);
    },
    toObject: function (A, K) {
      var q = "type.googleapis.com/",
        Y = "",
        z = "";
      if (K && K.json && A.type_url && A.value) {
        z = A.type_url.substring(A.type_url.lastIndexOf("/") + 1), Y = A.type_url.substring(0, A.type_url.lastIndexOf("/") + 1);
        var w = this.lookup(z);
        if (w) A = w.decode(A.value);
      }
      if (!(A instanceof this.ctor) && A instanceof a32) {
        var H = A.$type.toObject(A, K),
          J = A.$type.fullName[0] === "." ? A.$type.fullName.slice(1) : A.$type.fullName;
        if (Y === "") Y = q;
        return z = Y + J, H["@type"] = z, H;
      }
      return this.toObject(A, K);
    }
  };
});

// Register to shared state
__$.Nk6 = Nk6;
