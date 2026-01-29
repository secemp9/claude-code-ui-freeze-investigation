// Module: Wk6
// Dependencies: VS, t5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wk6 = v((JEH, kd7) => {
  kd7.exports = l32;
  var d32 = __$.VS(),
    qd = __$.t5A(),
    Ed7 = __$.pG();
  function c32(A) {
    return "missing required '" + A.name + "'";
  }
  function l32(A) {
    var K = Ed7.codegen(["r", "l", "e"], A.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (A.fieldsArray.filter(function (J) {
        return J.map;
      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"),
      q = 0;
    for (; q < A.fieldsArray.length; ++q) {
      var Y = A._fieldsArray[q].resolve(),
        z = Y.resolvedType instanceof d32 ? "int32" : Y.type,
        w = "m" + Ed7.safeProp(Y.name);
      if (K("case %i: {", Y.id), Y.map) {
        if (K("if(%s===util.emptyObject)", w)("%s={}", w)("var c2 = r.uint32()+r.pos"), qd.defaults[Y.keyType] !== void 0) K("k=%j", qd.defaults[Y.keyType]);else K("k=null");
        if (qd.defaults[z] !== void 0) K("value=%j", qd.defaults[z]);else K("value=null");
        if (K("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", Y.keyType)("case 2:"), qd.basic[z] === void 0) K("value=types[%i].decode(r,r.uint32())", q);else K("value=r.%s()", z);
        if (K("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), qd.long[Y.keyType] !== void 0) K('%s[typeof k==="object"?util.longToHash(k):k]=value', w);else K("%s[k]=value", w);
      } else if (Y.repeated) {
        if (K("if(!(%s&&%s.length))", w, w)("%s=[]", w), qd.packed[z] !== void 0) K("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", w, z)("}else");
        if (qd.basic[z] === void 0) K(Y.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))" : "%s.push(types[%i].decode(r,r.uint32()))", w, q);else K("%s.push(r.%s())", w, z);
      } else if (qd.basic[z] === void 0) K(Y.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4))" : "%s=types[%i].decode(r,r.uint32())", w, q);else K("%s=r.%s()", w, z);
      K("break")("}");
    }
    K("default:")("r.skipType(t&7)")("break")("}")("}");
    for (q = 0; q < A._fieldsArray.length; ++q) {
      var H = A._fieldsArray[q];
      if (H.required) K("if(!m.hasOwnProperty(%j))", H.name)("throw util.ProtocolError(%j,{instance:m})", c32(H));
    }
    return K("return m");
  }
});

// Register to shared state
__$.Wk6 = Wk6;
