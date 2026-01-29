// Module: Dc7
// Dependencies: zj1, gk6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dc7 = v((F3, Wc7) => {
  var Xv = __$.zj1();
  Wc7.exports = F3 = Xv.descriptor = Xv.Root.fromJSON(__$.gk6()).lookup(".google.protobuf");
  var {
    Namespace: Xc7,
    Root: XFA,
    Enum: zd,
    Type: xB,
    Field: _t,
    MapField: l92,
    OneOf: wj1,
    Service: $FA,
    Method: Hj1
  } = Xv;
  XFA.fromDescriptor = function (K) {
    if (typeof K.length === "number") K = F3.FileDescriptorSet.decode(K);
    var q = new XFA();
    if (K.file) {
      var Y, z;
      for (var w = 0, H; w < K.file.length; ++w) {
        if (z = q, (Y = K.file[w]).package && Y.package.length) z = q.define(Y.package);
        var J = KY2(Y);
        if (Y.name && Y.name.length) q.files.push(z.filename = Y.name);
        if (Y.messageType) for (H = 0; H < Y.messageType.length; ++H) z.add(xB.fromDescriptor(Y.messageType[H], J));
        if (Y.enumType) for (H = 0; H < Y.enumType.length; ++H) z.add(zd.fromDescriptor(Y.enumType[H], J));
        if (Y.extension) for (H = 0; H < Y.extension.length; ++H) z.add(_t.fromDescriptor(Y.extension[H], J));
        if (Y.service) for (H = 0; H < Y.service.length; ++H) z.add($FA.fromDescriptor(Y.service[H], J));
        var O = GjA(Y.options, F3.FileOptions);
        if (O) {
          var X = Object.keys(O);
          for (H = 0; H < X.length; ++H) z.setOption(X[H], O[X[H]]);
        }
      }
    }
    return q.resolveAll();
  };
  XFA.prototype.toDescriptor = function (K) {
    var q = F3.FileDescriptorSet.create();
    return $c7(this, q.file, K), q;
  };
  function $c7(A, K, q) {
    var Y = F3.FileDescriptorProto.create({
      name: A.filename || (A.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto"
    });
    if (qY2(q, Y), !(A instanceof XFA)) Y.package = A.fullName.substring(1);
    for (var z = 0, w; z < A.nestedArray.length; ++z) if ((w = A._nestedArray[z]) instanceof xB) Y.messageType.push(w.toDescriptor(q));else if (w instanceof zd) Y.enumType.push(w.toDescriptor());else if (w instanceof _t) Y.extension.push(w.toDescriptor(q));else if (w instanceof $FA) Y.service.push(w.toDescriptor());else if (w instanceof Xc7) $c7(w, K, q);
    if (Y.options = ZjA(A.options, F3.FileOptions), Y.messageType.length + Y.enumType.length + Y.extension.length + Y.service.length) K.push(Y);
  }
  var i92 = 0;
  xB.fromDescriptor = function (K, q, Y) {
    if (typeof K.length === "number") K = F3.DescriptorProto.decode(K);
    var z = new xB(K.name.length ? K.name : "Type" + i92++, GjA(K.options, F3.MessageOptions)),
      w;
    if (!Y) z._edition = q;
    if (K.oneofDecl) for (w = 0; w < K.oneofDecl.length; ++w) z.add(wj1.fromDescriptor(K.oneofDecl[w]));
    if (K.field) for (w = 0; w < K.field.length; ++w) {
      var H = _t.fromDescriptor(K.field[w], q, !0);
      if (z.add(H), K.field[w].hasOwnProperty("oneofIndex")) z.oneofsArray[K.field[w].oneofIndex].add(H);
    }
    if (K.extension) for (w = 0; w < K.extension.length; ++w) z.add(_t.fromDescriptor(K.extension[w], q, !0));
    if (K.nestedType) {
      for (w = 0; w < K.nestedType.length; ++w) if (z.add(xB.fromDescriptor(K.nestedType[w], q, !0)), K.nestedType[w].options && K.nestedType[w].options.mapEntry) z.setOption("map_entry", !0);
    }
    if (K.enumType) for (w = 0; w < K.enumType.length; ++w) z.add(zd.fromDescriptor(K.enumType[w], q, !0));
    if (K.extensionRange && K.extensionRange.length) {
      z.extensions = [];
      for (w = 0; w < K.extensionRange.length; ++w) z.extensions.push([K.extensionRange[w].start, K.extensionRange[w].end]);
    }
    if (K.reservedRange && K.reservedRange.length || K.reservedName && K.reservedName.length) {
      if (z.reserved = [], K.reservedRange) for (w = 0; w < K.reservedRange.length; ++w) z.reserved.push([K.reservedRange[w].start, K.reservedRange[w].end]);
      if (K.reservedName) for (w = 0; w < K.reservedName.length; ++w) z.reserved.push(K.reservedName[w]);
    }
    return z;
  };
  xB.prototype.toDescriptor = function (K) {
    var q = F3.DescriptorProto.create({
        name: this.name
      }),
      Y;
    for (Y = 0; Y < this.fieldsArray.length; ++Y) {
      var z;
      if (q.field.push(z = this._fieldsArray[Y].toDescriptor(K)), this._fieldsArray[Y] instanceof l92) {
        var w = Fk6(this._fieldsArray[Y].keyType, this._fieldsArray[Y].resolvedKeyType, !1),
          H = Fk6(this._fieldsArray[Y].type, this._fieldsArray[Y].resolvedType, !1),
          J = H === 11 || H === 14 ? this._fieldsArray[Y].resolvedType && Zc7(this.parent, this._fieldsArray[Y].resolvedType) || this._fieldsArray[Y].type : void 0;
        q.nestedType.push(F3.DescriptorProto.create({
          name: z.typeName,
          field: [F3.FieldDescriptorProto.create({
            name: "key",
            number: 1,
            label: 1,
            type: w
          }), F3.FieldDescriptorProto.create({
            name: "value",
            number: 2,
            label: 1,
            type: H,
            typeName: J
          })],
          options: F3.MessageOptions.create({
            mapEntry: !0
          })
        }));
      }
    }
    for (Y = 0; Y < this.oneofsArray.length; ++Y) q.oneofDecl.push(this._oneofsArray[Y].toDescriptor());
    for (Y = 0; Y < this.nestedArray.length; ++Y) if (this._nestedArray[Y] instanceof _t) q.field.push(this._nestedArray[Y].toDescriptor(K));else if (this._nestedArray[Y] instanceof xB) q.nestedType.push(this._nestedArray[Y].toDescriptor(K));else if (this._nestedArray[Y] instanceof zd) q.enumType.push(this._nestedArray[Y].toDescriptor());
    if (this.extensions) for (Y = 0; Y < this.extensions.length; ++Y) q.extensionRange.push(F3.DescriptorProto.ExtensionRange.create({
      start: this.extensions[Y][0],
      end: this.extensions[Y][1]
    }));
    if (this.reserved) for (Y = 0; Y < this.reserved.length; ++Y) if (typeof this.reserved[Y] === "string") q.reservedName.push(this.reserved[Y]);else q.reservedRange.push(F3.DescriptorProto.ReservedRange.create({
      start: this.reserved[Y][0],
      end: this.reserved[Y][1]
    }));
    return q.options = ZjA(this.options, F3.MessageOptions), q;
  };
  var n92 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  _t.fromDescriptor = function (K, q, Y) {
    if (typeof K.length === "number") K = F3.DescriptorProto.decode(K);
    if (typeof K.number !== "number") throw Error("missing field id");
    var z;
    if (K.typeName && K.typeName.length) z = K.typeName;else z = t92(K.type);
    var w;
    switch (K.label) {
      case 1:
        w = void 0;
        break;
      case 2:
        w = "required";
        break;
      case 3:
        w = "repeated";
        break;
      default:
        throw Error("illegal label: " + K.label);
    }
    var H = K.extendee;
    if (K.extendee !== void 0) H = H.length ? H : void 0;
    var J = new _t(K.name.length ? K.name : "field" + K.number, K.number, z, w, H);
    if (!Y) J._edition = q;
    if (J.options = GjA(K.options, F3.FieldOptions), K.proto3_optional) J.options.proto3_optional = !0;
    if (K.defaultValue && K.defaultValue.length) {
      var O = K.defaultValue;
      switch (O) {
        case "true":
        case "TRUE":
          O = !0;
          break;
        case "false":
        case "FALSE":
          O = !1;
          break;
        default:
          var X = n92.exec(O);
          if (X) O = parseInt(O);
          break;
      }
      J.setOption("default", O);
    }
    if (e92(K.type)) {
      if (q === "proto3") {
        if (K.options && !K.options.packed) J.setOption("packed", !1);
      } else if ((!q || q === "proto2") && K.options && K.options.packed) J.setOption("packed", !0);
    }
    return J;
  };
  _t.prototype.toDescriptor = function (K) {
    var q = F3.FieldDescriptorProto.create({
      name: this.name,
      number: this.id
    });
    if (this.map) q.type = 11, q.typeName = Xv.util.ucFirst(this.name), q.label = 3;else {
      switch (q.type = Fk6(this.type, this.resolve().resolvedType, this.delimited)) {
        case 10:
        case 11:
        case 14:
          q.typeName = this.resolvedType ? Zc7(this.parent, this.resolvedType) : this.type;
          break;
      }
      if (this.rule === "repeated") q.label = 3;else if (this.required && K === "proto2") q.label = 2;else q.label = 1;
    }
    if (q.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend, this.partOf) {
      if ((q.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0) throw Error("missing oneof");
    }
    if (this.options) {
      if (q.options = ZjA(this.options, F3.FieldOptions), this.options.default != null) q.defaultValue = String(this.options.default);
      if (this.options.proto3_optional) q.proto3_optional = !0;
    }
    if (K === "proto3") {
      if (!this.packed) (q.options || (q.options = F3.FieldOptions.create())).packed = !1;
    } else if ((!K || K === "proto2") && this.packed) (q.options || (q.options = F3.FieldOptions.create())).packed = !0;
    return q;
  };
  var r92 = 0;
  zd.fromDescriptor = function (K, q, Y) {
    if (typeof K.length === "number") K = F3.EnumDescriptorProto.decode(K);
    var z = {};
    if (K.value) for (var w = 0; w < K.value.length; ++w) {
      var H = K.value[w].name,
        J = K.value[w].number || 0;
      z[H && H.length ? H : "NAME" + J] = J;
    }
    var O = new zd(K.name && K.name.length ? K.name : "Enum" + r92++, z, GjA(K.options, F3.EnumOptions));
    if (!Y) O._edition = q;
    return O;
  };
  zd.prototype.toDescriptor = function () {
    var K = [];
    for (var q = 0, Y = Object.keys(this.values); q < Y.length; ++q) K.push(F3.EnumValueDescriptorProto.create({
      name: Y[q],
      number: this.values[Y[q]]
    }));
    return F3.EnumDescriptorProto.create({
      name: this.name,
      value: K,
      options: ZjA(this.options, F3.EnumOptions)
    });
  };
  var o92 = 0;
  wj1.fromDescriptor = function (K) {
    if (typeof K.length === "number") K = F3.OneofDescriptorProto.decode(K);
    return new wj1(K.name && K.name.length ? K.name : "oneof" + o92++);
  };
  wj1.prototype.toDescriptor = function () {
    return F3.OneofDescriptorProto.create({
      name: this.name
    });
  };
  var a92 = 0;
  $FA.fromDescriptor = function (K, q, Y) {
    if (typeof K.length === "number") K = F3.ServiceDescriptorProto.decode(K);
    var z = new $FA(K.name && K.name.length ? K.name : "Service" + a92++, GjA(K.options, F3.ServiceOptions));
    if (!Y) z._edition = q;
    if (K.method) for (var w = 0; w < K.method.length; ++w) z.add(Hj1.fromDescriptor(K.method[w]));
    return z;
  };
  $FA.prototype.toDescriptor = function () {
    var K = [];
    for (var q = 0; q < this.methodsArray.length; ++q) K.push(this._methodsArray[q].toDescriptor());
    return F3.ServiceDescriptorProto.create({
      name: this.name,
      method: K,
      options: ZjA(this.options, F3.ServiceOptions)
    });
  };
  var s92 = 0;
  Hj1.fromDescriptor = function (K) {
    if (typeof K.length === "number") K = F3.MethodDescriptorProto.decode(K);
    return new Hj1(K.name && K.name.length ? K.name : "Method" + s92++, "rpc", K.inputType, K.outputType, Boolean(K.clientStreaming), Boolean(K.serverStreaming), GjA(K.options, F3.MethodOptions));
  };
  Hj1.prototype.toDescriptor = function () {
    return F3.MethodDescriptorProto.create({
      name: this.name,
      inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
      outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
      clientStreaming: this.requestStream,
      serverStreaming: this.responseStream,
      options: ZjA(this.options, F3.MethodOptions)
    });
  };
  function t92(A) {
    switch (A) {
      case 1:
        return "double";
      case 2:
        return "float";
      case 3:
        return "int64";
      case 4:
        return "uint64";
      case 5:
        return "int32";
      case 6:
        return "fixed64";
      case 7:
        return "fixed32";
      case 8:
        return "bool";
      case 9:
        return "string";
      case 12:
        return "bytes";
      case 13:
        return "uint32";
      case 15:
        return "sfixed32";
      case 16:
        return "sfixed64";
      case 17:
        return "sint32";
      case 18:
        return "sint64";
    }
    throw Error("illegal type: " + A);
  }
  function e92(A) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return !0;
    }
    return !1;
  }
  function Fk6(A, K, q) {
    switch (A) {
      case "double":
        return 1;
      case "float":
        return 2;
      case "int64":
        return 3;
      case "uint64":
        return 4;
      case "int32":
        return 5;
      case "fixed64":
        return 6;
      case "fixed32":
        return 7;
      case "bool":
        return 8;
      case "string":
        return 9;
      case "bytes":
        return 12;
      case "uint32":
        return 13;
      case "sfixed32":
        return 15;
      case "sfixed64":
        return 16;
      case "sint32":
        return 17;
      case "sint64":
        return 18;
    }
    if (K instanceof zd) return 14;
    if (K instanceof xB) return q ? 10 : 11;
    throw Error("illegal type: " + A);
  }
  function _c7(A, K) {
    var q = {};
    for (var Y = 0, z, w; Y < K.fieldsArray.length; ++Y) {
      if ((w = (z = K._fieldsArray[Y]).name) === "uninterpretedOption") continue;
      if (!Object.prototype.hasOwnProperty.call(A, w)) continue;
      var H = AY2(w);
      if (z.resolvedType instanceof xB) q[H] = _c7(A[w], z.resolvedType);else if (z.resolvedType instanceof zd) q[H] = z.resolvedType.valuesById[A[w]];else q[H] = A[w];
    }
    return q;
  }
  function GjA(A, K) {
    if (!A) return;
    return _c7(K.toObject(A), K);
  }
  function Gc7(A, K) {
    var q = {},
      Y = Object.keys(A);
    for (var z = 0; z < Y.length; ++z) {
      var w = Y[z],
        H = Xv.util.camelCase(w);
      if (!Object.prototype.hasOwnProperty.call(K.fields, H)) continue;
      var J = K.fields[H];
      if (J.resolvedType instanceof xB) q[H] = Gc7(A[w], J.resolvedType);else q[H] = A[w];
      if (J.repeated && !Array.isArray(q[H])) q[H] = [q[H]];
    }
    return q;
  }
  function ZjA(A, K) {
    if (!A) return;
    return K.fromObject(Gc7(A, K));
  }
  function Zc7(A, K) {
    var q = A.fullName.split("."),
      Y = K.fullName.split("."),
      z = 0,
      w = 0,
      H = Y.length - 1;
    if (!(A instanceof XFA) && K instanceof Xc7) while (z < q.length && w < H && q[z] === Y[w]) {
      var J = K.lookup(q[z++], !0);
      if (J !== null && J !== K) break;
      ++w;
    } else for (; z < q.length && w < H && q[z] === Y[w]; ++z, ++w);
    return Y.slice(w).join(".");
  }
  function AY2(A) {
    return A.substring(0, 1) + A.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function (K, q) {
      return "_" + q.toLowerCase();
    });
  }
  function KY2(A) {
    if (A.syntax === "editions") switch (A.edition) {
      case F3.Edition.EDITION_2023:
        return "2023";
      default:
        throw Error("Unsupported edition " + A.edition);
    }
    if (A.syntax === "proto3") return "proto3";
    return "proto2";
  }
  function qY2(A, K) {
    if (!A) return;
    if (A === "proto2" || A === "proto3") K.syntax = A;else switch (K.syntax = "editions", A) {
      case "2023":
        K.edition = F3.Edition.EDITION_2023;
        break;
      default:
        throw Error("Unsupported edition " + A);
    }
  }
});

// Register to shared state
__$.Dc7 = Dc7;
