// Module: kk6
// Dependencies: VS, t5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kk6 = v((VEH, nd7) => {
  nd7.exports = P92;
  var M92 = __$.VS(),
    bk6 = __$.t5A(),
    xk6 = __$.pG();
  function id7(A, K, q, Y) {
    return K.delimited ? A("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", q, Y, (K.id << 3 | 3) >>> 0, (K.id << 3 | 4) >>> 0) : A("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", q, Y, (K.id << 3 | 2) >>> 0);
  }
  function P92(A) {
    var K = xk6.codegen(["m", "w"], A.name + "$encode")("if(!w)")("w=Writer.create()"),
      q,
      Y,
      z = A.fieldsArray.slice().sort(xk6.compareFieldsById);
    for (var q = 0; q < z.length; ++q) {
      var w = z[q].resolve(),
        H = A._fieldsArray.indexOf(w),
        J = w.resolvedType instanceof M92 ? "int32" : w.type,
        O = bk6.basic[J];
      if (Y = "m" + xk6.safeProp(w.name), w.map) {
        if (K("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", Y, w.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", Y)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (w.id << 3 | 2) >>> 0, 8 | bk6.mapKey[w.keyType], w.keyType), O === void 0) K("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", H, Y);else K(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | O, J, Y);
        K("}")("}");
      } else if (w.repeated) {
        if (K("if(%s!=null&&%s.length){", Y, Y), w.packed && bk6.packed[J] !== void 0) K("w.uint32(%i).fork()", (w.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", Y)("w.%s(%s[i])", J, Y)("w.ldelim()");else if (K("for(var i=0;i<%s.length;++i)", Y), O === void 0) id7(K, w, H, Y + "[i]");else K("w.uint32(%i).%s(%s[i])", (w.id << 3 | O) >>> 0, J, Y);
        K("}");
      } else {
        if (w.optional) K("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", Y, w.name);
        if (O === void 0) id7(K, w, H, Y);else K("w.uint32(%i).%s(%s)", (w.id << 3 | O) >>> 0, J, Y);
      }
    }
    return K("return w");
  }
});

// Register to shared state
__$.kk6 = kk6;
