// Module: fk6
// Dependencies: VS, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fk6 = v(Rd7 => {
  var Ld7 = Rd7,
    qFA = __$.VS(),
    SB = __$.pG();
  function Pk6(A, K, q, Y) {
    var z = !1;
    if (K.resolvedType) {
      if (K.resolvedType instanceof qFA) {
        A("switch(d%s){", Y);
        for (var w = K.resolvedType.values, H = Object.keys(w), J = 0; J < H.length; ++J) {
          if (w[H[J]] === K.typeDefault && !z) {
            if (A("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', Y, Y, Y), !K.repeated) A("break");
            z = !0;
          }
          A("case%j:", H[J])("case %i:", w[H[J]])("m%s=%j", Y, w[H[J]])("break");
        }
        A("}");
      } else A('if(typeof d%s!=="object")', Y)("throw TypeError(%j)", K.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", Y, q, Y);
    } else {
      var O = !1;
      switch (K.type) {
        case "double":
        case "float":
          A("m%s=Number(d%s)", Y, Y);
          break;
        case "uint32":
        case "fixed32":
          A("m%s=d%s>>>0", Y, Y);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          A("m%s=d%s|0", Y, Y);
          break;
        case "uint64":
          O = !0;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          A("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", Y, Y, O)('else if(typeof d%s==="string")', Y)("m%s=parseInt(d%s,10)", Y, Y)('else if(typeof d%s==="number")', Y)("m%s=d%s", Y, Y)('else if(typeof d%s==="object")', Y)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", Y, Y, Y, O ? "true" : "");
          break;
        case "bytes":
          A('if(typeof d%s==="string")', Y)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", Y, Y, Y)("else if(d%s.length >= 0)", Y)("m%s=d%s", Y, Y);
          break;
        case "string":
          A("m%s=String(d%s)", Y, Y);
          break;
        case "bool":
          A("m%s=Boolean(d%s)", Y, Y);
          break;
      }
    }
    return A;
  }
  Ld7.fromObject = function (K) {
    var q = K.fieldsArray,
      Y = SB.codegen(["d"], K.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!q.length) return Y("return new this.ctor");
    Y("var m=new this.ctor");
    for (var z = 0; z < q.length; ++z) {
      var w = q[z].resolve(),
        H = SB.safeProp(w.name);
      if (w.map) Y("if(d%s){", H)('if(typeof d%s!=="object")', H)("throw TypeError(%j)", w.fullName + ": object expected")("m%s={}", H)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", H), Pk6(Y, w, z, H + "[ks[i]]")("}")("}");else if (w.repeated) Y("if(d%s){", H)("if(!Array.isArray(d%s))", H)("throw TypeError(%j)", w.fullName + ": array expected")("m%s=[]", H)("for(var i=0;i<d%s.length;++i){", H), Pk6(Y, w, z, H + "[i]")("}")("}");else {
        if (!(w.resolvedType instanceof qFA)) Y("if(d%s!=null){", H);
        if (Pk6(Y, w, z, H), !(w.resolvedType instanceof qFA)) Y("}");
      }
    }
    return Y("return m");
  };
  function Vk6(A, K, q, Y) {
    if (K.resolvedType) {
      if (K.resolvedType instanceof qFA) A("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", Y, q, Y, Y, q, Y, Y);else A("d%s=types[%i].toObject(m%s,o)", Y, q, Y);
    } else {
      var z = !1;
      switch (K.type) {
        case "double":
        case "float":
          A("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", Y, Y, Y, Y);
          break;
        case "uint64":
          z = !0;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          A('if(typeof m%s==="number")', Y)("d%s=o.longs===String?String(m%s):m%s", Y, Y, Y)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", Y, Y, Y, Y, z ? "true" : "", Y);
          break;
        case "bytes":
          A("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", Y, Y, Y, Y, Y);
          break;
        default:
          A("d%s=m%s", Y, Y);
          break;
      }
    }
    return A;
  }
  Ld7.toObject = function (K) {
    var q = K.fieldsArray.slice().sort(SB.compareFieldsById);
    if (!q.length) return SB.codegen()("return {}");
    var Y = SB.codegen(["m", "o"], K.name + "$toObject")("if(!o)")("o={}")("var d={}"),
      z = [],
      w = [],
      H = [],
      J = 0;
    for (; J < q.length; ++J) if (!q[J].partOf) (q[J].resolve().repeated ? z : q[J].map ? w : H).push(q[J]);
    if (z.length) {
      Y("if(o.arrays||o.defaults){");
      for (J = 0; J < z.length; ++J) Y("d%s=[]", SB.safeProp(z[J].name));
      Y("}");
    }
    if (w.length) {
      Y("if(o.objects||o.defaults){");
      for (J = 0; J < w.length; ++J) Y("d%s={}", SB.safeProp(w[J].name));
      Y("}");
    }
    if (H.length) {
      Y("if(o.defaults){");
      for (J = 0; J < H.length; ++J) {
        var O = H[J],
          X = SB.safeProp(O.name);
        if (O.resolvedType instanceof qFA) Y("d%s=o.enums===String?%j:%j", X, O.resolvedType.valuesById[O.typeDefault], O.typeDefault);else if (O.long) Y("if(util.Long){")("var n=new util.Long(%i,%i,%j)", O.typeDefault.low, O.typeDefault.high, O.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", X)("}else")("d%s=o.longs===String?%j:%i", X, O.typeDefault.toString(), O.typeDefault.toNumber());else if (O.bytes) {
          var $ = "[" + Array.prototype.slice.call(O.typeDefault).join(",") + "]";
          Y("if(o.bytes===String)d%s=%j", X, String.fromCharCode.apply(String, O.typeDefault))("else{")("d%s=%s", X, $)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", X, X)("}");
        } else Y("d%s=%j", X, O.typeDefault);
      }
      Y("}");
    }
    var _ = !1;
    for (J = 0; J < q.length; ++J) {
      var O = q[J],
        G = K._fieldsArray.indexOf(O),
        X = SB.safeProp(O.name);
      if (O.map) {
        if (!_) _ = !0, Y("var ks2");
        Y("if(m%s&&(ks2=Object.keys(m%s)).length){", X, X)("d%s={}", X)("for(var j=0;j<ks2.length;++j){"), Vk6(Y, O, G, X + "[ks2[j]]")("}");
      } else if (O.repeated) Y("if(m%s&&m%s.length){", X, X)("d%s=[]", X)("for(var j=0;j<m%s.length;++j){", X), Vk6(Y, O, G, X + "[j]")("}");else if (Y("if(m%s!=null&&m.hasOwnProperty(%j)){", X, O.name), Vk6(Y, O, G, X), O.partOf) Y("if(o.oneofs)")("d%s=%j", SB.safeProp(O.partOf.name), O.name);
      Y("}");
    }
    return Y("return d");
  };
});

// Register to shared state
__$.fk6 = fk6;
