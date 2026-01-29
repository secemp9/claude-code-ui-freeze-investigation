// Module: Mk6
// Dependencies: VS, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mk6 = v((OEH, Cd7) => {
  Cd7.exports = r32;
  var i32 = __$.VS(),
    Dk6 = __$.pG();
  function $L(A, K) {
    return A.name + ": " + K + (A.repeated && K !== "array" ? "[]" : A.map && K !== "object" ? "{k:" + A.keyType + "}" : "") + " expected";
  }
  function jk6(A, K, q, Y) {
    if (K.resolvedType) {
      if (K.resolvedType instanceof i32) {
        A("switch(%s){", Y)("default:")("return%j", $L(K, "enum value"));
        for (var z = Object.keys(K.resolvedType.values), w = 0; w < z.length; ++w) A("case %i:", K.resolvedType.values[z[w]]);
        A("break")("}");
      } else A("{")("var e=types[%i].verify(%s);", q, Y)("if(e)")("return%j+e", K.name + ".")("}");
    } else switch (K.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        A("if(!util.isInteger(%s))", Y)("return%j", $L(K, "integer"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        A("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", Y, Y, Y, Y)("return%j", $L(K, "integer|Long"));
        break;
      case "float":
      case "double":
        A('if(typeof %s!=="number")', Y)("return%j", $L(K, "number"));
        break;
      case "bool":
        A('if(typeof %s!=="boolean")', Y)("return%j", $L(K, "boolean"));
        break;
      case "string":
        A("if(!util.isString(%s))", Y)("return%j", $L(K, "string"));
        break;
      case "bytes":
        A('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', Y, Y, Y)("return%j", $L(K, "buffer"));
        break;
    }
    return A;
  }
  function n32(A, K, q) {
    switch (K.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        A("if(!util.key32Re.test(%s))", q)("return%j", $L(K, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        A("if(!util.key64Re.test(%s))", q)("return%j", $L(K, "integer|Long key"));
        break;
      case "bool":
        A("if(!util.key2Re.test(%s))", q)("return%j", $L(K, "boolean key"));
        break;
    }
    return A;
  }
  function r32(A) {
    var K = Dk6.codegen(["m"], A.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
      q = A.oneofsArray,
      Y = {};
    if (q.length) K("var p={}");
    for (var z = 0; z < A.fieldsArray.length; ++z) {
      var w = A._fieldsArray[z].resolve(),
        H = "m" + Dk6.safeProp(w.name);
      if (w.optional) K("if(%s!=null&&m.hasOwnProperty(%j)){", H, w.name);
      if (w.map) K("if(!util.isObject(%s))", H)("return%j", $L(w, "object"))("var k=Object.keys(%s)", H)("for(var i=0;i<k.length;++i){"), n32(K, w, "k[i]"), jk6(K, w, z, H + "[k[i]]")("}");else if (w.repeated) K("if(!Array.isArray(%s))", H)("return%j", $L(w, "array"))("for(var i=0;i<%s.length;++i){", H), jk6(K, w, z, H + "[i]")("}");else {
        if (w.partOf) {
          var J = Dk6.safeProp(w.partOf.name);
          if (Y[w.partOf.name] === 1) K("if(p%s===1)", J)("return%j", w.partOf.name + ": multiple values");
          Y[w.partOf.name] = 1, K("p%s=1", J);
        }
        jk6(K, w, z, H);
      }
      if (w.optional) K("}");
    }
    return K("return null");
  }
});

// Register to shared state
__$.Mk6 = Mk6;
