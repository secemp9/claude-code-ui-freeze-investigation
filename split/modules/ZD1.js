// Module: ZD1
// Dependencies: wE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZD1 = v((yg7, Ig7) => {
  Object.defineProperty(yg7, "__esModule", {
    value: !0
  });
  var oK = __$.wE6(),
    $6 = oK.Reader,
    l5 = oK.Writer,
    FA = oK.util,
    uA = oK.roots.default || (oK.roots.default = {});
  uA.opentelemetry = function () {
    var A = {};
    return A.proto = function () {
      var K = {};
      return K.common = function () {
        var q = {};
        return q.v1 = function () {
          var Y = {};
          return Y.AnyValue = function () {
            function z(H) {
              if (H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.stringValue = null, z.prototype.boolValue = null, z.prototype.intValue = null, z.prototype.doubleValue = null, z.prototype.arrayValue = null, z.prototype.kvlistValue = null, z.prototype.bytesValue = null;
            var w;
            return Object.defineProperty(z.prototype, "value", {
              get: FA.oneOfGetter(w = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.stringValue != null && Object.hasOwnProperty.call(J, "stringValue")) O.uint32(10).string(J.stringValue);
              if (J.boolValue != null && Object.hasOwnProperty.call(J, "boolValue")) O.uint32(16).bool(J.boolValue);
              if (J.intValue != null && Object.hasOwnProperty.call(J, "intValue")) O.uint32(24).int64(J.intValue);
              if (J.doubleValue != null && Object.hasOwnProperty.call(J, "doubleValue")) O.uint32(33).double(J.doubleValue);
              if (J.arrayValue != null && Object.hasOwnProperty.call(J, "arrayValue")) uA.opentelemetry.proto.common.v1.ArrayValue.encode(J.arrayValue, O.uint32(42).fork()).ldelim();
              if (J.kvlistValue != null && Object.hasOwnProperty.call(J, "kvlistValue")) uA.opentelemetry.proto.common.v1.KeyValueList.encode(J.kvlistValue, O.uint32(50).fork()).ldelim();
              if (J.bytesValue != null && Object.hasOwnProperty.call(J, "bytesValue")) O.uint32(58).bytes(J.bytesValue);
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.common.v1.AnyValue();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 1:
                    {
                      _.stringValue = J.string();
                      break;
                    }
                  case 2:
                    {
                      _.boolValue = J.bool();
                      break;
                    }
                  case 3:
                    {
                      _.intValue = J.int64();
                      break;
                    }
                  case 4:
                    {
                      _.doubleValue = J.double();
                      break;
                    }
                  case 5:
                    {
                      _.arrayValue = uA.opentelemetry.proto.common.v1.ArrayValue.decode(J, J.uint32());
                      break;
                    }
                  case 6:
                    {
                      _.kvlistValue = uA.opentelemetry.proto.common.v1.KeyValueList.decode(J, J.uint32());
                      break;
                    }
                  case 7:
                    {
                      _.bytesValue = J.bytes();
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.stringValue != null && J.hasOwnProperty("stringValue")) {
                if (O.value = 1, !FA.isString(J.stringValue)) return "stringValue: string expected";
              }
              if (J.boolValue != null && J.hasOwnProperty("boolValue")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, typeof J.boolValue !== "boolean") return "boolValue: boolean expected";
              }
              if (J.intValue != null && J.hasOwnProperty("intValue")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, !FA.isInteger(J.intValue) && !(J.intValue && FA.isInteger(J.intValue.low) && FA.isInteger(J.intValue.high))) return "intValue: integer|Long expected";
              }
              if (J.doubleValue != null && J.hasOwnProperty("doubleValue")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, typeof J.doubleValue !== "number") return "doubleValue: number expected";
              }
              if (J.arrayValue != null && J.hasOwnProperty("arrayValue")) {
                if (O.value === 1) return "value: multiple values";
                O.value = 1;
                {
                  var X = uA.opentelemetry.proto.common.v1.ArrayValue.verify(J.arrayValue);
                  if (X) return "arrayValue." + X;
                }
              }
              if (J.kvlistValue != null && J.hasOwnProperty("kvlistValue")) {
                if (O.value === 1) return "value: multiple values";
                O.value = 1;
                {
                  var X = uA.opentelemetry.proto.common.v1.KeyValueList.verify(J.kvlistValue);
                  if (X) return "kvlistValue." + X;
                }
              }
              if (J.bytesValue != null && J.hasOwnProperty("bytesValue")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, !(J.bytesValue && typeof J.bytesValue.length === "number" || FA.isString(J.bytesValue))) return "bytesValue: buffer expected";
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.common.v1.AnyValue) return J;
              var O = new uA.opentelemetry.proto.common.v1.AnyValue();
              if (J.stringValue != null) O.stringValue = String(J.stringValue);
              if (J.boolValue != null) O.boolValue = Boolean(J.boolValue);
              if (J.intValue != null) {
                if (FA.Long) (O.intValue = FA.Long.fromValue(J.intValue)).unsigned = !1;else if (typeof J.intValue === "string") O.intValue = parseInt(J.intValue, 10);else if (typeof J.intValue === "number") O.intValue = J.intValue;else if (typeof J.intValue === "object") O.intValue = new FA.LongBits(J.intValue.low >>> 0, J.intValue.high >>> 0).toNumber();
              }
              if (J.doubleValue != null) O.doubleValue = Number(J.doubleValue);
              if (J.arrayValue != null) {
                if (typeof J.arrayValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                O.arrayValue = uA.opentelemetry.proto.common.v1.ArrayValue.fromObject(J.arrayValue);
              }
              if (J.kvlistValue != null) {
                if (typeof J.kvlistValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                O.kvlistValue = uA.opentelemetry.proto.common.v1.KeyValueList.fromObject(J.kvlistValue);
              }
              if (J.bytesValue != null) {
                if (typeof J.bytesValue === "string") FA.base64.decode(J.bytesValue, O.bytesValue = FA.newBuffer(FA.base64.length(J.bytesValue)), 0);else if (J.bytesValue.length >= 0) O.bytesValue = J.bytesValue;
              }
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (J.stringValue != null && J.hasOwnProperty("stringValue")) {
                if (X.stringValue = J.stringValue, O.oneofs) X.value = "stringValue";
              }
              if (J.boolValue != null && J.hasOwnProperty("boolValue")) {
                if (X.boolValue = J.boolValue, O.oneofs) X.value = "boolValue";
              }
              if (J.intValue != null && J.hasOwnProperty("intValue")) {
                if (typeof J.intValue === "number") X.intValue = O.longs === String ? String(J.intValue) : J.intValue;else X.intValue = O.longs === String ? FA.Long.prototype.toString.call(J.intValue) : O.longs === Number ? new FA.LongBits(J.intValue.low >>> 0, J.intValue.high >>> 0).toNumber() : J.intValue;
                if (O.oneofs) X.value = "intValue";
              }
              if (J.doubleValue != null && J.hasOwnProperty("doubleValue")) {
                if (X.doubleValue = O.json && !isFinite(J.doubleValue) ? String(J.doubleValue) : J.doubleValue, O.oneofs) X.value = "doubleValue";
              }
              if (J.arrayValue != null && J.hasOwnProperty("arrayValue")) {
                if (X.arrayValue = uA.opentelemetry.proto.common.v1.ArrayValue.toObject(J.arrayValue, O), O.oneofs) X.value = "arrayValue";
              }
              if (J.kvlistValue != null && J.hasOwnProperty("kvlistValue")) {
                if (X.kvlistValue = uA.opentelemetry.proto.common.v1.KeyValueList.toObject(J.kvlistValue, O), O.oneofs) X.value = "kvlistValue";
              }
              if (J.bytesValue != null && J.hasOwnProperty("bytesValue")) {
                if (X.bytesValue = O.bytes === String ? FA.base64.encode(J.bytesValue, 0, J.bytesValue.length) : O.bytes === Array ? Array.prototype.slice.call(J.bytesValue) : J.bytesValue, O.oneofs) X.value = "bytesValue";
              }
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.common.v1.AnyValue";
            }, z;
          }(), Y.ArrayValue = function () {
            function z(w) {
              if (this.values = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.values = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.values != null && H.values.length) for (var O = 0; O < H.values.length; ++O) uA.opentelemetry.proto.common.v1.AnyValue.encode(H.values[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.common.v1.ArrayValue();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.values && $.values.length)) $.values = [];
                      $.values.push(uA.opentelemetry.proto.common.v1.AnyValue.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.values != null && H.hasOwnProperty("values")) {
                if (!Array.isArray(H.values)) return "values: array expected";
                for (var J = 0; J < H.values.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.AnyValue.verify(H.values[J]);
                  if (O) return "values." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.common.v1.ArrayValue) return H;
              var J = new uA.opentelemetry.proto.common.v1.ArrayValue();
              if (H.values) {
                if (!Array.isArray(H.values)) throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                J.values = [];
                for (var O = 0; O < H.values.length; ++O) {
                  if (typeof H.values[O] !== "object") throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                  J.values[O] = uA.opentelemetry.proto.common.v1.AnyValue.fromObject(H.values[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.values = [];
              if (H.values && H.values.length) {
                O.values = [];
                for (var X = 0; X < H.values.length; ++X) O.values[X] = uA.opentelemetry.proto.common.v1.AnyValue.toObject(H.values[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.common.v1.ArrayValue";
            }, z;
          }(), Y.KeyValueList = function () {
            function z(w) {
              if (this.values = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.values = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.values != null && H.values.length) for (var O = 0; O < H.values.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.values[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.common.v1.KeyValueList();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.values && $.values.length)) $.values = [];
                      $.values.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.values != null && H.hasOwnProperty("values")) {
                if (!Array.isArray(H.values)) return "values: array expected";
                for (var J = 0; J < H.values.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.values[J]);
                  if (O) return "values." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.common.v1.KeyValueList) return H;
              var J = new uA.opentelemetry.proto.common.v1.KeyValueList();
              if (H.values) {
                if (!Array.isArray(H.values)) throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                J.values = [];
                for (var O = 0; O < H.values.length; ++O) {
                  if (typeof H.values[O] !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                  J.values[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.values[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.values = [];
              if (H.values && H.values.length) {
                O.values = [];
                for (var X = 0; X < H.values.length; ++X) O.values[X] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.values[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.common.v1.KeyValueList";
            }, z;
          }(), Y.KeyValue = function () {
            function z(w) {
              if (w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.key = null, z.prototype.value = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.key != null && Object.hasOwnProperty.call(H, "key")) J.uint32(10).string(H.key);
              if (H.value != null && Object.hasOwnProperty.call(H, "value")) uA.opentelemetry.proto.common.v1.AnyValue.encode(H.value, J.uint32(18).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.common.v1.KeyValue();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.key = H.string();
                      break;
                    }
                  case 2:
                    {
                      $.value = uA.opentelemetry.proto.common.v1.AnyValue.decode(H, H.uint32());
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.key != null && H.hasOwnProperty("key")) {
                if (!FA.isString(H.key)) return "key: string expected";
              }
              if (H.value != null && H.hasOwnProperty("value")) {
                var J = uA.opentelemetry.proto.common.v1.AnyValue.verify(H.value);
                if (J) return "value." + J;
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.common.v1.KeyValue) return H;
              var J = new uA.opentelemetry.proto.common.v1.KeyValue();
              if (H.key != null) J.key = String(H.key);
              if (H.value != null) {
                if (typeof H.value !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                J.value = uA.opentelemetry.proto.common.v1.AnyValue.fromObject(H.value);
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.defaults) O.key = "", O.value = null;
              if (H.key != null && H.hasOwnProperty("key")) O.key = H.key;
              if (H.value != null && H.hasOwnProperty("value")) O.value = uA.opentelemetry.proto.common.v1.AnyValue.toObject(H.value, J);
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.common.v1.KeyValue";
            }, z;
          }(), Y.InstrumentationScope = function () {
            function z(w) {
              if (this.attributes = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.name = null, z.prototype.version = null, z.prototype.attributes = FA.emptyArray, z.prototype.droppedAttributesCount = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.name != null && Object.hasOwnProperty.call(H, "name")) J.uint32(10).string(H.name);
              if (H.version != null && Object.hasOwnProperty.call(H, "version")) J.uint32(18).string(H.version);
              if (H.attributes != null && H.attributes.length) for (var O = 0; O < H.attributes.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.attributes[O], J.uint32(26).fork()).ldelim();
              if (H.droppedAttributesCount != null && Object.hasOwnProperty.call(H, "droppedAttributesCount")) J.uint32(32).uint32(H.droppedAttributesCount);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.common.v1.InstrumentationScope();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.name = H.string();
                      break;
                    }
                  case 2:
                    {
                      $.version = H.string();
                      break;
                    }
                  case 3:
                    {
                      if (!($.attributes && $.attributes.length)) $.attributes = [];
                      $.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  case 4:
                    {
                      $.droppedAttributesCount = H.uint32();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.name != null && H.hasOwnProperty("name")) {
                if (!FA.isString(H.name)) return "name: string expected";
              }
              if (H.version != null && H.hasOwnProperty("version")) {
                if (!FA.isString(H.version)) return "version: string expected";
              }
              if (H.attributes != null && H.hasOwnProperty("attributes")) {
                if (!Array.isArray(H.attributes)) return "attributes: array expected";
                for (var J = 0; J < H.attributes.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.attributes[J]);
                  if (O) return "attributes." + O;
                }
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) {
                if (!FA.isInteger(H.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.common.v1.InstrumentationScope) return H;
              var J = new uA.opentelemetry.proto.common.v1.InstrumentationScope();
              if (H.name != null) J.name = String(H.name);
              if (H.version != null) J.version = String(H.version);
              if (H.attributes) {
                if (!Array.isArray(H.attributes)) throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                J.attributes = [];
                for (var O = 0; O < H.attributes.length; ++O) {
                  if (typeof H.attributes[O] !== "object") throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                  J.attributes[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.attributes[O]);
                }
              }
              if (H.droppedAttributesCount != null) J.droppedAttributesCount = H.droppedAttributesCount >>> 0;
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.attributes = [];
              if (J.defaults) O.name = "", O.version = "", O.droppedAttributesCount = 0;
              if (H.name != null && H.hasOwnProperty("name")) O.name = H.name;
              if (H.version != null && H.hasOwnProperty("version")) O.version = H.version;
              if (H.attributes && H.attributes.length) {
                O.attributes = [];
                for (var X = 0; X < H.attributes.length; ++X) O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.attributes[X], J);
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) O.droppedAttributesCount = H.droppedAttributesCount;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.common.v1.InstrumentationScope";
            }, z;
          }(), Y.EntityRef = function () {
            function z(w) {
              if (this.idKeys = [], this.descriptionKeys = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.schemaUrl = null, z.prototype.type = null, z.prototype.idKeys = FA.emptyArray, z.prototype.descriptionKeys = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(10).string(H.schemaUrl);
              if (H.type != null && Object.hasOwnProperty.call(H, "type")) J.uint32(18).string(H.type);
              if (H.idKeys != null && H.idKeys.length) for (var O = 0; O < H.idKeys.length; ++O) J.uint32(26).string(H.idKeys[O]);
              if (H.descriptionKeys != null && H.descriptionKeys.length) for (var O = 0; O < H.descriptionKeys.length; ++O) J.uint32(34).string(H.descriptionKeys[O]);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.common.v1.EntityRef();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  case 2:
                    {
                      $.type = H.string();
                      break;
                    }
                  case 3:
                    {
                      if (!($.idKeys && $.idKeys.length)) $.idKeys = [];
                      $.idKeys.push(H.string());
                      break;
                    }
                  case 4:
                    {
                      if (!($.descriptionKeys && $.descriptionKeys.length)) $.descriptionKeys = [];
                      $.descriptionKeys.push(H.string());
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              if (H.type != null && H.hasOwnProperty("type")) {
                if (!FA.isString(H.type)) return "type: string expected";
              }
              if (H.idKeys != null && H.hasOwnProperty("idKeys")) {
                if (!Array.isArray(H.idKeys)) return "idKeys: array expected";
                for (var J = 0; J < H.idKeys.length; ++J) if (!FA.isString(H.idKeys[J])) return "idKeys: string[] expected";
              }
              if (H.descriptionKeys != null && H.hasOwnProperty("descriptionKeys")) {
                if (!Array.isArray(H.descriptionKeys)) return "descriptionKeys: array expected";
                for (var J = 0; J < H.descriptionKeys.length; ++J) if (!FA.isString(H.descriptionKeys[J])) return "descriptionKeys: string[] expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.common.v1.EntityRef) return H;
              var J = new uA.opentelemetry.proto.common.v1.EntityRef();
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              if (H.type != null) J.type = String(H.type);
              if (H.idKeys) {
                if (!Array.isArray(H.idKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                J.idKeys = [];
                for (var O = 0; O < H.idKeys.length; ++O) J.idKeys[O] = String(H.idKeys[O]);
              }
              if (H.descriptionKeys) {
                if (!Array.isArray(H.descriptionKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                J.descriptionKeys = [];
                for (var O = 0; O < H.descriptionKeys.length; ++O) J.descriptionKeys[O] = String(H.descriptionKeys[O]);
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.idKeys = [], O.descriptionKeys = [];
              if (J.defaults) O.schemaUrl = "", O.type = "";
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              if (H.type != null && H.hasOwnProperty("type")) O.type = H.type;
              if (H.idKeys && H.idKeys.length) {
                O.idKeys = [];
                for (var X = 0; X < H.idKeys.length; ++X) O.idKeys[X] = H.idKeys[X];
              }
              if (H.descriptionKeys && H.descriptionKeys.length) {
                O.descriptionKeys = [];
                for (var X = 0; X < H.descriptionKeys.length; ++X) O.descriptionKeys[X] = H.descriptionKeys[X];
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.common.v1.EntityRef";
            }, z;
          }(), Y;
        }(), q;
      }(), K.resource = function () {
        var q = {};
        return q.v1 = function () {
          var Y = {};
          return Y.Resource = function () {
            function z(w) {
              if (this.attributes = [], this.entityRefs = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.attributes = FA.emptyArray, z.prototype.droppedAttributesCount = null, z.prototype.entityRefs = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.attributes != null && H.attributes.length) for (var O = 0; O < H.attributes.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.attributes[O], J.uint32(10).fork()).ldelim();
              if (H.droppedAttributesCount != null && Object.hasOwnProperty.call(H, "droppedAttributesCount")) J.uint32(16).uint32(H.droppedAttributesCount);
              if (H.entityRefs != null && H.entityRefs.length) for (var O = 0; O < H.entityRefs.length; ++O) uA.opentelemetry.proto.common.v1.EntityRef.encode(H.entityRefs[O], J.uint32(26).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.resource.v1.Resource();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.attributes && $.attributes.length)) $.attributes = [];
                      $.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  case 2:
                    {
                      $.droppedAttributesCount = H.uint32();
                      break;
                    }
                  case 3:
                    {
                      if (!($.entityRefs && $.entityRefs.length)) $.entityRefs = [];
                      $.entityRefs.push(uA.opentelemetry.proto.common.v1.EntityRef.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.attributes != null && H.hasOwnProperty("attributes")) {
                if (!Array.isArray(H.attributes)) return "attributes: array expected";
                for (var J = 0; J < H.attributes.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.attributes[J]);
                  if (O) return "attributes." + O;
                }
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) {
                if (!FA.isInteger(H.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (H.entityRefs != null && H.hasOwnProperty("entityRefs")) {
                if (!Array.isArray(H.entityRefs)) return "entityRefs: array expected";
                for (var J = 0; J < H.entityRefs.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.EntityRef.verify(H.entityRefs[J]);
                  if (O) return "entityRefs." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.resource.v1.Resource) return H;
              var J = new uA.opentelemetry.proto.resource.v1.Resource();
              if (H.attributes) {
                if (!Array.isArray(H.attributes)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                J.attributes = [];
                for (var O = 0; O < H.attributes.length; ++O) {
                  if (typeof H.attributes[O] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                  J.attributes[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.attributes[O]);
                }
              }
              if (H.droppedAttributesCount != null) J.droppedAttributesCount = H.droppedAttributesCount >>> 0;
              if (H.entityRefs) {
                if (!Array.isArray(H.entityRefs)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                J.entityRefs = [];
                for (var O = 0; O < H.entityRefs.length; ++O) {
                  if (typeof H.entityRefs[O] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                  J.entityRefs[O] = uA.opentelemetry.proto.common.v1.EntityRef.fromObject(H.entityRefs[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.attributes = [], O.entityRefs = [];
              if (J.defaults) O.droppedAttributesCount = 0;
              if (H.attributes && H.attributes.length) {
                O.attributes = [];
                for (var X = 0; X < H.attributes.length; ++X) O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.attributes[X], J);
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) O.droppedAttributesCount = H.droppedAttributesCount;
              if (H.entityRefs && H.entityRefs.length) {
                O.entityRefs = [];
                for (var X = 0; X < H.entityRefs.length; ++X) O.entityRefs[X] = uA.opentelemetry.proto.common.v1.EntityRef.toObject(H.entityRefs[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.resource.v1.Resource";
            }, z;
          }(), Y;
        }(), q;
      }(), K.trace = function () {
        var q = {};
        return q.v1 = function () {
          var Y = {};
          return Y.TracesData = function () {
            function z(w) {
              if (this.resourceSpans = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resourceSpans = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resourceSpans != null && H.resourceSpans.length) for (var O = 0; O < H.resourceSpans.length; ++O) uA.opentelemetry.proto.trace.v1.ResourceSpans.encode(H.resourceSpans[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.trace.v1.TracesData();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.resourceSpans && $.resourceSpans.length)) $.resourceSpans = [];
                      $.resourceSpans.push(uA.opentelemetry.proto.trace.v1.ResourceSpans.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resourceSpans != null && H.hasOwnProperty("resourceSpans")) {
                if (!Array.isArray(H.resourceSpans)) return "resourceSpans: array expected";
                for (var J = 0; J < H.resourceSpans.length; ++J) {
                  var O = uA.opentelemetry.proto.trace.v1.ResourceSpans.verify(H.resourceSpans[J]);
                  if (O) return "resourceSpans." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.trace.v1.TracesData) return H;
              var J = new uA.opentelemetry.proto.trace.v1.TracesData();
              if (H.resourceSpans) {
                if (!Array.isArray(H.resourceSpans)) throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                J.resourceSpans = [];
                for (var O = 0; O < H.resourceSpans.length; ++O) {
                  if (typeof H.resourceSpans[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                  J.resourceSpans[O] = uA.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(H.resourceSpans[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.resourceSpans = [];
              if (H.resourceSpans && H.resourceSpans.length) {
                O.resourceSpans = [];
                for (var X = 0; X < H.resourceSpans.length; ++X) O.resourceSpans[X] = uA.opentelemetry.proto.trace.v1.ResourceSpans.toObject(H.resourceSpans[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.trace.v1.TracesData";
            }, z;
          }(), Y.ResourceSpans = function () {
            function z(w) {
              if (this.scopeSpans = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resource = null, z.prototype.scopeSpans = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resource != null && Object.hasOwnProperty.call(H, "resource")) uA.opentelemetry.proto.resource.v1.Resource.encode(H.resource, J.uint32(10).fork()).ldelim();
              if (H.scopeSpans != null && H.scopeSpans.length) for (var O = 0; O < H.scopeSpans.length; ++O) uA.opentelemetry.proto.trace.v1.ScopeSpans.encode(H.scopeSpans[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.trace.v1.ResourceSpans();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.resource = uA.opentelemetry.proto.resource.v1.Resource.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.scopeSpans && $.scopeSpans.length)) $.scopeSpans = [];
                      $.scopeSpans.push(uA.opentelemetry.proto.trace.v1.ScopeSpans.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resource != null && H.hasOwnProperty("resource")) {
                var J = uA.opentelemetry.proto.resource.v1.Resource.verify(H.resource);
                if (J) return "resource." + J;
              }
              if (H.scopeSpans != null && H.hasOwnProperty("scopeSpans")) {
                if (!Array.isArray(H.scopeSpans)) return "scopeSpans: array expected";
                for (var O = 0; O < H.scopeSpans.length; ++O) {
                  var J = uA.opentelemetry.proto.trace.v1.ScopeSpans.verify(H.scopeSpans[O]);
                  if (J) return "scopeSpans." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.trace.v1.ResourceSpans) return H;
              var J = new uA.opentelemetry.proto.trace.v1.ResourceSpans();
              if (H.resource != null) {
                if (typeof H.resource !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                J.resource = uA.opentelemetry.proto.resource.v1.Resource.fromObject(H.resource);
              }
              if (H.scopeSpans) {
                if (!Array.isArray(H.scopeSpans)) throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                J.scopeSpans = [];
                for (var O = 0; O < H.scopeSpans.length; ++O) {
                  if (typeof H.scopeSpans[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                  J.scopeSpans[O] = uA.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(H.scopeSpans[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.scopeSpans = [];
              if (J.defaults) O.resource = null, O.schemaUrl = "";
              if (H.resource != null && H.hasOwnProperty("resource")) O.resource = uA.opentelemetry.proto.resource.v1.Resource.toObject(H.resource, J);
              if (H.scopeSpans && H.scopeSpans.length) {
                O.scopeSpans = [];
                for (var X = 0; X < H.scopeSpans.length; ++X) O.scopeSpans[X] = uA.opentelemetry.proto.trace.v1.ScopeSpans.toObject(H.scopeSpans[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.trace.v1.ResourceSpans";
            }, z;
          }(), Y.ScopeSpans = function () {
            function z(w) {
              if (this.spans = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.scope = null, z.prototype.spans = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.scope != null && Object.hasOwnProperty.call(H, "scope")) uA.opentelemetry.proto.common.v1.InstrumentationScope.encode(H.scope, J.uint32(10).fork()).ldelim();
              if (H.spans != null && H.spans.length) for (var O = 0; O < H.spans.length; ++O) uA.opentelemetry.proto.trace.v1.Span.encode(H.spans[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.trace.v1.ScopeSpans();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.spans && $.spans.length)) $.spans = [];
                      $.spans.push(uA.opentelemetry.proto.trace.v1.Span.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.scope != null && H.hasOwnProperty("scope")) {
                var J = uA.opentelemetry.proto.common.v1.InstrumentationScope.verify(H.scope);
                if (J) return "scope." + J;
              }
              if (H.spans != null && H.hasOwnProperty("spans")) {
                if (!Array.isArray(H.spans)) return "spans: array expected";
                for (var O = 0; O < H.spans.length; ++O) {
                  var J = uA.opentelemetry.proto.trace.v1.Span.verify(H.spans[O]);
                  if (J) return "spans." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.trace.v1.ScopeSpans) return H;
              var J = new uA.opentelemetry.proto.trace.v1.ScopeSpans();
              if (H.scope != null) {
                if (typeof H.scope !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                J.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(H.scope);
              }
              if (H.spans) {
                if (!Array.isArray(H.spans)) throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                J.spans = [];
                for (var O = 0; O < H.spans.length; ++O) {
                  if (typeof H.spans[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                  J.spans[O] = uA.opentelemetry.proto.trace.v1.Span.fromObject(H.spans[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.spans = [];
              if (J.defaults) O.scope = null, O.schemaUrl = "";
              if (H.scope != null && H.hasOwnProperty("scope")) O.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(H.scope, J);
              if (H.spans && H.spans.length) {
                O.spans = [];
                for (var X = 0; X < H.spans.length; ++X) O.spans[X] = uA.opentelemetry.proto.trace.v1.Span.toObject(H.spans[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.trace.v1.ScopeSpans";
            }, z;
          }(), Y.Span = function () {
            function z(w) {
              if (this.attributes = [], this.events = [], this.links = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.traceId = null, z.prototype.spanId = null, z.prototype.traceState = null, z.prototype.parentSpanId = null, z.prototype.flags = null, z.prototype.name = null, z.prototype.kind = null, z.prototype.startTimeUnixNano = null, z.prototype.endTimeUnixNano = null, z.prototype.attributes = FA.emptyArray, z.prototype.droppedAttributesCount = null, z.prototype.events = FA.emptyArray, z.prototype.droppedEventsCount = null, z.prototype.links = FA.emptyArray, z.prototype.droppedLinksCount = null, z.prototype.status = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.traceId != null && Object.hasOwnProperty.call(H, "traceId")) J.uint32(10).bytes(H.traceId);
              if (H.spanId != null && Object.hasOwnProperty.call(H, "spanId")) J.uint32(18).bytes(H.spanId);
              if (H.traceState != null && Object.hasOwnProperty.call(H, "traceState")) J.uint32(26).string(H.traceState);
              if (H.parentSpanId != null && Object.hasOwnProperty.call(H, "parentSpanId")) J.uint32(34).bytes(H.parentSpanId);
              if (H.name != null && Object.hasOwnProperty.call(H, "name")) J.uint32(42).string(H.name);
              if (H.kind != null && Object.hasOwnProperty.call(H, "kind")) J.uint32(48).int32(H.kind);
              if (H.startTimeUnixNano != null && Object.hasOwnProperty.call(H, "startTimeUnixNano")) J.uint32(57).fixed64(H.startTimeUnixNano);
              if (H.endTimeUnixNano != null && Object.hasOwnProperty.call(H, "endTimeUnixNano")) J.uint32(65).fixed64(H.endTimeUnixNano);
              if (H.attributes != null && H.attributes.length) for (var O = 0; O < H.attributes.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.attributes[O], J.uint32(74).fork()).ldelim();
              if (H.droppedAttributesCount != null && Object.hasOwnProperty.call(H, "droppedAttributesCount")) J.uint32(80).uint32(H.droppedAttributesCount);
              if (H.events != null && H.events.length) for (var O = 0; O < H.events.length; ++O) uA.opentelemetry.proto.trace.v1.Span.Event.encode(H.events[O], J.uint32(90).fork()).ldelim();
              if (H.droppedEventsCount != null && Object.hasOwnProperty.call(H, "droppedEventsCount")) J.uint32(96).uint32(H.droppedEventsCount);
              if (H.links != null && H.links.length) for (var O = 0; O < H.links.length; ++O) uA.opentelemetry.proto.trace.v1.Span.Link.encode(H.links[O], J.uint32(106).fork()).ldelim();
              if (H.droppedLinksCount != null && Object.hasOwnProperty.call(H, "droppedLinksCount")) J.uint32(112).uint32(H.droppedLinksCount);
              if (H.status != null && Object.hasOwnProperty.call(H, "status")) uA.opentelemetry.proto.trace.v1.Status.encode(H.status, J.uint32(122).fork()).ldelim();
              if (H.flags != null && Object.hasOwnProperty.call(H, "flags")) J.uint32(133).fixed32(H.flags);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.trace.v1.Span();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.traceId = H.bytes();
                      break;
                    }
                  case 2:
                    {
                      $.spanId = H.bytes();
                      break;
                    }
                  case 3:
                    {
                      $.traceState = H.string();
                      break;
                    }
                  case 4:
                    {
                      $.parentSpanId = H.bytes();
                      break;
                    }
                  case 16:
                    {
                      $.flags = H.fixed32();
                      break;
                    }
                  case 5:
                    {
                      $.name = H.string();
                      break;
                    }
                  case 6:
                    {
                      $.kind = H.int32();
                      break;
                    }
                  case 7:
                    {
                      $.startTimeUnixNano = H.fixed64();
                      break;
                    }
                  case 8:
                    {
                      $.endTimeUnixNano = H.fixed64();
                      break;
                    }
                  case 9:
                    {
                      if (!($.attributes && $.attributes.length)) $.attributes = [];
                      $.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  case 10:
                    {
                      $.droppedAttributesCount = H.uint32();
                      break;
                    }
                  case 11:
                    {
                      if (!($.events && $.events.length)) $.events = [];
                      $.events.push(uA.opentelemetry.proto.trace.v1.Span.Event.decode(H, H.uint32()));
                      break;
                    }
                  case 12:
                    {
                      $.droppedEventsCount = H.uint32();
                      break;
                    }
                  case 13:
                    {
                      if (!($.links && $.links.length)) $.links = [];
                      $.links.push(uA.opentelemetry.proto.trace.v1.Span.Link.decode(H, H.uint32()));
                      break;
                    }
                  case 14:
                    {
                      $.droppedLinksCount = H.uint32();
                      break;
                    }
                  case 15:
                    {
                      $.status = uA.opentelemetry.proto.trace.v1.Status.decode(H, H.uint32());
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.traceId != null && H.hasOwnProperty("traceId")) {
                if (!(H.traceId && typeof H.traceId.length === "number" || FA.isString(H.traceId))) return "traceId: buffer expected";
              }
              if (H.spanId != null && H.hasOwnProperty("spanId")) {
                if (!(H.spanId && typeof H.spanId.length === "number" || FA.isString(H.spanId))) return "spanId: buffer expected";
              }
              if (H.traceState != null && H.hasOwnProperty("traceState")) {
                if (!FA.isString(H.traceState)) return "traceState: string expected";
              }
              if (H.parentSpanId != null && H.hasOwnProperty("parentSpanId")) {
                if (!(H.parentSpanId && typeof H.parentSpanId.length === "number" || FA.isString(H.parentSpanId))) return "parentSpanId: buffer expected";
              }
              if (H.flags != null && H.hasOwnProperty("flags")) {
                if (!FA.isInteger(H.flags)) return "flags: integer expected";
              }
              if (H.name != null && H.hasOwnProperty("name")) {
                if (!FA.isString(H.name)) return "name: string expected";
              }
              if (H.kind != null && H.hasOwnProperty("kind")) switch (H.kind) {
                default:
                  return "kind: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
              }
              if (H.startTimeUnixNano != null && H.hasOwnProperty("startTimeUnixNano")) {
                if (!FA.isInteger(H.startTimeUnixNano) && !(H.startTimeUnixNano && FA.isInteger(H.startTimeUnixNano.low) && FA.isInteger(H.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (H.endTimeUnixNano != null && H.hasOwnProperty("endTimeUnixNano")) {
                if (!FA.isInteger(H.endTimeUnixNano) && !(H.endTimeUnixNano && FA.isInteger(H.endTimeUnixNano.low) && FA.isInteger(H.endTimeUnixNano.high))) return "endTimeUnixNano: integer|Long expected";
              }
              if (H.attributes != null && H.hasOwnProperty("attributes")) {
                if (!Array.isArray(H.attributes)) return "attributes: array expected";
                for (var J = 0; J < H.attributes.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.attributes[J]);
                  if (O) return "attributes." + O;
                }
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) {
                if (!FA.isInteger(H.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (H.events != null && H.hasOwnProperty("events")) {
                if (!Array.isArray(H.events)) return "events: array expected";
                for (var J = 0; J < H.events.length; ++J) {
                  var O = uA.opentelemetry.proto.trace.v1.Span.Event.verify(H.events[J]);
                  if (O) return "events." + O;
                }
              }
              if (H.droppedEventsCount != null && H.hasOwnProperty("droppedEventsCount")) {
                if (!FA.isInteger(H.droppedEventsCount)) return "droppedEventsCount: integer expected";
              }
              if (H.links != null && H.hasOwnProperty("links")) {
                if (!Array.isArray(H.links)) return "links: array expected";
                for (var J = 0; J < H.links.length; ++J) {
                  var O = uA.opentelemetry.proto.trace.v1.Span.Link.verify(H.links[J]);
                  if (O) return "links." + O;
                }
              }
              if (H.droppedLinksCount != null && H.hasOwnProperty("droppedLinksCount")) {
                if (!FA.isInteger(H.droppedLinksCount)) return "droppedLinksCount: integer expected";
              }
              if (H.status != null && H.hasOwnProperty("status")) {
                var O = uA.opentelemetry.proto.trace.v1.Status.verify(H.status);
                if (O) return "status." + O;
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.trace.v1.Span) return H;
              var J = new uA.opentelemetry.proto.trace.v1.Span();
              if (H.traceId != null) {
                if (typeof H.traceId === "string") FA.base64.decode(H.traceId, J.traceId = FA.newBuffer(FA.base64.length(H.traceId)), 0);else if (H.traceId.length >= 0) J.traceId = H.traceId;
              }
              if (H.spanId != null) {
                if (typeof H.spanId === "string") FA.base64.decode(H.spanId, J.spanId = FA.newBuffer(FA.base64.length(H.spanId)), 0);else if (H.spanId.length >= 0) J.spanId = H.spanId;
              }
              if (H.traceState != null) J.traceState = String(H.traceState);
              if (H.parentSpanId != null) {
                if (typeof H.parentSpanId === "string") FA.base64.decode(H.parentSpanId, J.parentSpanId = FA.newBuffer(FA.base64.length(H.parentSpanId)), 0);else if (H.parentSpanId.length >= 0) J.parentSpanId = H.parentSpanId;
              }
              if (H.flags != null) J.flags = H.flags >>> 0;
              if (H.name != null) J.name = String(H.name);
              switch (H.kind) {
                default:
                  if (typeof H.kind === "number") {
                    J.kind = H.kind;
                    break;
                  }
                  break;
                case "SPAN_KIND_UNSPECIFIED":
                case 0:
                  J.kind = 0;
                  break;
                case "SPAN_KIND_INTERNAL":
                case 1:
                  J.kind = 1;
                  break;
                case "SPAN_KIND_SERVER":
                case 2:
                  J.kind = 2;
                  break;
                case "SPAN_KIND_CLIENT":
                case 3:
                  J.kind = 3;
                  break;
                case "SPAN_KIND_PRODUCER":
                case 4:
                  J.kind = 4;
                  break;
                case "SPAN_KIND_CONSUMER":
                case 5:
                  J.kind = 5;
                  break;
              }
              if (H.startTimeUnixNano != null) {
                if (FA.Long) (J.startTimeUnixNano = FA.Long.fromValue(H.startTimeUnixNano)).unsigned = !1;else if (typeof H.startTimeUnixNano === "string") J.startTimeUnixNano = parseInt(H.startTimeUnixNano, 10);else if (typeof H.startTimeUnixNano === "number") J.startTimeUnixNano = H.startTimeUnixNano;else if (typeof H.startTimeUnixNano === "object") J.startTimeUnixNano = new FA.LongBits(H.startTimeUnixNano.low >>> 0, H.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (H.endTimeUnixNano != null) {
                if (FA.Long) (J.endTimeUnixNano = FA.Long.fromValue(H.endTimeUnixNano)).unsigned = !1;else if (typeof H.endTimeUnixNano === "string") J.endTimeUnixNano = parseInt(H.endTimeUnixNano, 10);else if (typeof H.endTimeUnixNano === "number") J.endTimeUnixNano = H.endTimeUnixNano;else if (typeof H.endTimeUnixNano === "object") J.endTimeUnixNano = new FA.LongBits(H.endTimeUnixNano.low >>> 0, H.endTimeUnixNano.high >>> 0).toNumber();
              }
              if (H.attributes) {
                if (!Array.isArray(H.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                J.attributes = [];
                for (var O = 0; O < H.attributes.length; ++O) {
                  if (typeof H.attributes[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                  J.attributes[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.attributes[O]);
                }
              }
              if (H.droppedAttributesCount != null) J.droppedAttributesCount = H.droppedAttributesCount >>> 0;
              if (H.events) {
                if (!Array.isArray(H.events)) throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                J.events = [];
                for (var O = 0; O < H.events.length; ++O) {
                  if (typeof H.events[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                  J.events[O] = uA.opentelemetry.proto.trace.v1.Span.Event.fromObject(H.events[O]);
                }
              }
              if (H.droppedEventsCount != null) J.droppedEventsCount = H.droppedEventsCount >>> 0;
              if (H.links) {
                if (!Array.isArray(H.links)) throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                J.links = [];
                for (var O = 0; O < H.links.length; ++O) {
                  if (typeof H.links[O] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                  J.links[O] = uA.opentelemetry.proto.trace.v1.Span.Link.fromObject(H.links[O]);
                }
              }
              if (H.droppedLinksCount != null) J.droppedLinksCount = H.droppedLinksCount >>> 0;
              if (H.status != null) {
                if (typeof H.status !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                J.status = uA.opentelemetry.proto.trace.v1.Status.fromObject(H.status);
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.attributes = [], O.events = [], O.links = [];
              if (J.defaults) {
                if (J.bytes === String) O.traceId = "";else if (O.traceId = [], J.bytes !== Array) O.traceId = FA.newBuffer(O.traceId);
                if (J.bytes === String) O.spanId = "";else if (O.spanId = [], J.bytes !== Array) O.spanId = FA.newBuffer(O.spanId);
                if (O.traceState = "", J.bytes === String) O.parentSpanId = "";else if (O.parentSpanId = [], J.bytes !== Array) O.parentSpanId = FA.newBuffer(O.parentSpanId);
                if (O.name = "", O.kind = J.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0, FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.startTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.startTimeUnixNano = J.longs === String ? "0" : 0;
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.endTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.endTimeUnixNano = J.longs === String ? "0" : 0;
                O.droppedAttributesCount = 0, O.droppedEventsCount = 0, O.droppedLinksCount = 0, O.status = null, O.flags = 0;
              }
              if (H.traceId != null && H.hasOwnProperty("traceId")) O.traceId = J.bytes === String ? FA.base64.encode(H.traceId, 0, H.traceId.length) : J.bytes === Array ? Array.prototype.slice.call(H.traceId) : H.traceId;
              if (H.spanId != null && H.hasOwnProperty("spanId")) O.spanId = J.bytes === String ? FA.base64.encode(H.spanId, 0, H.spanId.length) : J.bytes === Array ? Array.prototype.slice.call(H.spanId) : H.spanId;
              if (H.traceState != null && H.hasOwnProperty("traceState")) O.traceState = H.traceState;
              if (H.parentSpanId != null && H.hasOwnProperty("parentSpanId")) O.parentSpanId = J.bytes === String ? FA.base64.encode(H.parentSpanId, 0, H.parentSpanId.length) : J.bytes === Array ? Array.prototype.slice.call(H.parentSpanId) : H.parentSpanId;
              if (H.name != null && H.hasOwnProperty("name")) O.name = H.name;
              if (H.kind != null && H.hasOwnProperty("kind")) O.kind = J.enums === String ? uA.opentelemetry.proto.trace.v1.Span.SpanKind[H.kind] === void 0 ? H.kind : uA.opentelemetry.proto.trace.v1.Span.SpanKind[H.kind] : H.kind;
              if (H.startTimeUnixNano != null && H.hasOwnProperty("startTimeUnixNano")) if (typeof H.startTimeUnixNano === "number") O.startTimeUnixNano = J.longs === String ? String(H.startTimeUnixNano) : H.startTimeUnixNano;else O.startTimeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.startTimeUnixNano) : J.longs === Number ? new FA.LongBits(H.startTimeUnixNano.low >>> 0, H.startTimeUnixNano.high >>> 0).toNumber() : H.startTimeUnixNano;
              if (H.endTimeUnixNano != null && H.hasOwnProperty("endTimeUnixNano")) if (typeof H.endTimeUnixNano === "number") O.endTimeUnixNano = J.longs === String ? String(H.endTimeUnixNano) : H.endTimeUnixNano;else O.endTimeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.endTimeUnixNano) : J.longs === Number ? new FA.LongBits(H.endTimeUnixNano.low >>> 0, H.endTimeUnixNano.high >>> 0).toNumber() : H.endTimeUnixNano;
              if (H.attributes && H.attributes.length) {
                O.attributes = [];
                for (var $ = 0; $ < H.attributes.length; ++$) O.attributes[$] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.attributes[$], J);
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) O.droppedAttributesCount = H.droppedAttributesCount;
              if (H.events && H.events.length) {
                O.events = [];
                for (var $ = 0; $ < H.events.length; ++$) O.events[$] = uA.opentelemetry.proto.trace.v1.Span.Event.toObject(H.events[$], J);
              }
              if (H.droppedEventsCount != null && H.hasOwnProperty("droppedEventsCount")) O.droppedEventsCount = H.droppedEventsCount;
              if (H.links && H.links.length) {
                O.links = [];
                for (var $ = 0; $ < H.links.length; ++$) O.links[$] = uA.opentelemetry.proto.trace.v1.Span.Link.toObject(H.links[$], J);
              }
              if (H.droppedLinksCount != null && H.hasOwnProperty("droppedLinksCount")) O.droppedLinksCount = H.droppedLinksCount;
              if (H.status != null && H.hasOwnProperty("status")) O.status = uA.opentelemetry.proto.trace.v1.Status.toObject(H.status, J);
              if (H.flags != null && H.hasOwnProperty("flags")) O.flags = H.flags;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.trace.v1.Span";
            }, z.SpanKind = function () {
              var w = {},
                H = Object.create(w);
              return H[w[0] = "SPAN_KIND_UNSPECIFIED"] = 0, H[w[1] = "SPAN_KIND_INTERNAL"] = 1, H[w[2] = "SPAN_KIND_SERVER"] = 2, H[w[3] = "SPAN_KIND_CLIENT"] = 3, H[w[4] = "SPAN_KIND_PRODUCER"] = 4, H[w[5] = "SPAN_KIND_CONSUMER"] = 5, H;
            }(), z.Event = function () {
              function w(H) {
                if (this.attributes = [], H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.timeUnixNano = null, w.prototype.name = null, w.prototype.attributes = FA.emptyArray, w.prototype.droppedAttributesCount = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) O.uint32(9).fixed64(J.timeUnixNano);
                if (J.name != null && Object.hasOwnProperty.call(J, "name")) O.uint32(18).string(J.name);
                if (J.attributes != null && J.attributes.length) for (var X = 0; X < J.attributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], O.uint32(26).fork()).ldelim();
                if (J.droppedAttributesCount != null && Object.hasOwnProperty.call(J, "droppedAttributesCount")) O.uint32(32).uint32(J.droppedAttributesCount);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.trace.v1.Span.Event();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.timeUnixNano = J.fixed64();
                        break;
                      }
                    case 2:
                      {
                        _.name = J.string();
                        break;
                      }
                    case 3:
                      {
                        if (!(_.attributes && _.attributes.length)) _.attributes = [];
                        _.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                        break;
                      }
                    case 4:
                      {
                        _.droppedAttributesCount = J.uint32();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                  if (!FA.isInteger(J.timeUnixNano) && !(J.timeUnixNano && FA.isInteger(J.timeUnixNano.low) && FA.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
                }
                if (J.name != null && J.hasOwnProperty("name")) {
                  if (!FA.isString(J.name)) return "name: string expected";
                }
                if (J.attributes != null && J.hasOwnProperty("attributes")) {
                  if (!Array.isArray(J.attributes)) return "attributes: array expected";
                  for (var O = 0; O < J.attributes.length; ++O) {
                    var X = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[O]);
                    if (X) return "attributes." + X;
                  }
                }
                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) {
                  if (!FA.isInteger(J.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.trace.v1.Span.Event) return J;
                var O = new uA.opentelemetry.proto.trace.v1.Span.Event();
                if (J.timeUnixNano != null) {
                  if (FA.Long) (O.timeUnixNano = FA.Long.fromValue(J.timeUnixNano)).unsigned = !1;else if (typeof J.timeUnixNano === "string") O.timeUnixNano = parseInt(J.timeUnixNano, 10);else if (typeof J.timeUnixNano === "number") O.timeUnixNano = J.timeUnixNano;else if (typeof J.timeUnixNano === "object") O.timeUnixNano = new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber();
                }
                if (J.name != null) O.name = String(J.name);
                if (J.attributes) {
                  if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                  O.attributes = [];
                  for (var X = 0; X < J.attributes.length; ++X) {
                    if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                    O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X]);
                  }
                }
                if (J.droppedAttributesCount != null) O.droppedAttributesCount = J.droppedAttributesCount >>> 0;
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.arrays || O.defaults) X.attributes = [];
                if (O.defaults) {
                  if (FA.Long) {
                    var $ = new FA.Long(0, 0, !1);
                    X.timeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                  } else X.timeUnixNano = O.longs === String ? "0" : 0;
                  X.name = "", X.droppedAttributesCount = 0;
                }
                if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) if (typeof J.timeUnixNano === "number") X.timeUnixNano = O.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;else X.timeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.timeUnixNano) : O.longs === Number ? new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
                if (J.name != null && J.hasOwnProperty("name")) X.name = J.name;
                if (J.attributes && J.attributes.length) {
                  X.attributes = [];
                  for (var _ = 0; _ < J.attributes.length; ++_) X.attributes[_] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[_], O);
                }
                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) X.droppedAttributesCount = J.droppedAttributesCount;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.trace.v1.Span.Event";
              }, w;
            }(), z.Link = function () {
              function w(H) {
                if (this.attributes = [], H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.traceId = null, w.prototype.spanId = null, w.prototype.traceState = null, w.prototype.attributes = FA.emptyArray, w.prototype.droppedAttributesCount = null, w.prototype.flags = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.traceId != null && Object.hasOwnProperty.call(J, "traceId")) O.uint32(10).bytes(J.traceId);
                if (J.spanId != null && Object.hasOwnProperty.call(J, "spanId")) O.uint32(18).bytes(J.spanId);
                if (J.traceState != null && Object.hasOwnProperty.call(J, "traceState")) O.uint32(26).string(J.traceState);
                if (J.attributes != null && J.attributes.length) for (var X = 0; X < J.attributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], O.uint32(34).fork()).ldelim();
                if (J.droppedAttributesCount != null && Object.hasOwnProperty.call(J, "droppedAttributesCount")) O.uint32(40).uint32(J.droppedAttributesCount);
                if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) O.uint32(53).fixed32(J.flags);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.trace.v1.Span.Link();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.traceId = J.bytes();
                        break;
                      }
                    case 2:
                      {
                        _.spanId = J.bytes();
                        break;
                      }
                    case 3:
                      {
                        _.traceState = J.string();
                        break;
                      }
                    case 4:
                      {
                        if (!(_.attributes && _.attributes.length)) _.attributes = [];
                        _.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                        break;
                      }
                    case 5:
                      {
                        _.droppedAttributesCount = J.uint32();
                        break;
                      }
                    case 6:
                      {
                        _.flags = J.fixed32();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.traceId != null && J.hasOwnProperty("traceId")) {
                  if (!(J.traceId && typeof J.traceId.length === "number" || FA.isString(J.traceId))) return "traceId: buffer expected";
                }
                if (J.spanId != null && J.hasOwnProperty("spanId")) {
                  if (!(J.spanId && typeof J.spanId.length === "number" || FA.isString(J.spanId))) return "spanId: buffer expected";
                }
                if (J.traceState != null && J.hasOwnProperty("traceState")) {
                  if (!FA.isString(J.traceState)) return "traceState: string expected";
                }
                if (J.attributes != null && J.hasOwnProperty("attributes")) {
                  if (!Array.isArray(J.attributes)) return "attributes: array expected";
                  for (var O = 0; O < J.attributes.length; ++O) {
                    var X = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[O]);
                    if (X) return "attributes." + X;
                  }
                }
                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) {
                  if (!FA.isInteger(J.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
                }
                if (J.flags != null && J.hasOwnProperty("flags")) {
                  if (!FA.isInteger(J.flags)) return "flags: integer expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.trace.v1.Span.Link) return J;
                var O = new uA.opentelemetry.proto.trace.v1.Span.Link();
                if (J.traceId != null) {
                  if (typeof J.traceId === "string") FA.base64.decode(J.traceId, O.traceId = FA.newBuffer(FA.base64.length(J.traceId)), 0);else if (J.traceId.length >= 0) O.traceId = J.traceId;
                }
                if (J.spanId != null) {
                  if (typeof J.spanId === "string") FA.base64.decode(J.spanId, O.spanId = FA.newBuffer(FA.base64.length(J.spanId)), 0);else if (J.spanId.length >= 0) O.spanId = J.spanId;
                }
                if (J.traceState != null) O.traceState = String(J.traceState);
                if (J.attributes) {
                  if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                  O.attributes = [];
                  for (var X = 0; X < J.attributes.length; ++X) {
                    if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                    O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X]);
                  }
                }
                if (J.droppedAttributesCount != null) O.droppedAttributesCount = J.droppedAttributesCount >>> 0;
                if (J.flags != null) O.flags = J.flags >>> 0;
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.arrays || O.defaults) X.attributes = [];
                if (O.defaults) {
                  if (O.bytes === String) X.traceId = "";else if (X.traceId = [], O.bytes !== Array) X.traceId = FA.newBuffer(X.traceId);
                  if (O.bytes === String) X.spanId = "";else if (X.spanId = [], O.bytes !== Array) X.spanId = FA.newBuffer(X.spanId);
                  X.traceState = "", X.droppedAttributesCount = 0, X.flags = 0;
                }
                if (J.traceId != null && J.hasOwnProperty("traceId")) X.traceId = O.bytes === String ? FA.base64.encode(J.traceId, 0, J.traceId.length) : O.bytes === Array ? Array.prototype.slice.call(J.traceId) : J.traceId;
                if (J.spanId != null && J.hasOwnProperty("spanId")) X.spanId = O.bytes === String ? FA.base64.encode(J.spanId, 0, J.spanId.length) : O.bytes === Array ? Array.prototype.slice.call(J.spanId) : J.spanId;
                if (J.traceState != null && J.hasOwnProperty("traceState")) X.traceState = J.traceState;
                if (J.attributes && J.attributes.length) {
                  X.attributes = [];
                  for (var $ = 0; $ < J.attributes.length; ++$) X.attributes[$] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[$], O);
                }
                if (J.droppedAttributesCount != null && J.hasOwnProperty("droppedAttributesCount")) X.droppedAttributesCount = J.droppedAttributesCount;
                if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.trace.v1.Span.Link";
              }, w;
            }(), z;
          }(), Y.Status = function () {
            function z(w) {
              if (w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.message = null, z.prototype.code = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.message != null && Object.hasOwnProperty.call(H, "message")) J.uint32(18).string(H.message);
              if (H.code != null && Object.hasOwnProperty.call(H, "code")) J.uint32(24).int32(H.code);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.trace.v1.Status();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 2:
                    {
                      $.message = H.string();
                      break;
                    }
                  case 3:
                    {
                      $.code = H.int32();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.message != null && H.hasOwnProperty("message")) {
                if (!FA.isString(H.message)) return "message: string expected";
              }
              if (H.code != null && H.hasOwnProperty("code")) switch (H.code) {
                default:
                  return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                  break;
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.trace.v1.Status) return H;
              var J = new uA.opentelemetry.proto.trace.v1.Status();
              if (H.message != null) J.message = String(H.message);
              switch (H.code) {
                default:
                  if (typeof H.code === "number") {
                    J.code = H.code;
                    break;
                  }
                  break;
                case "STATUS_CODE_UNSET":
                case 0:
                  J.code = 0;
                  break;
                case "STATUS_CODE_OK":
                case 1:
                  J.code = 1;
                  break;
                case "STATUS_CODE_ERROR":
                case 2:
                  J.code = 2;
                  break;
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.defaults) O.message = "", O.code = J.enums === String ? "STATUS_CODE_UNSET" : 0;
              if (H.message != null && H.hasOwnProperty("message")) O.message = H.message;
              if (H.code != null && H.hasOwnProperty("code")) O.code = J.enums === String ? uA.opentelemetry.proto.trace.v1.Status.StatusCode[H.code] === void 0 ? H.code : uA.opentelemetry.proto.trace.v1.Status.StatusCode[H.code] : H.code;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.trace.v1.Status";
            }, z.StatusCode = function () {
              var w = {},
                H = Object.create(w);
              return H[w[0] = "STATUS_CODE_UNSET"] = 0, H[w[1] = "STATUS_CODE_OK"] = 1, H[w[2] = "STATUS_CODE_ERROR"] = 2, H;
            }(), z;
          }(), Y.SpanFlags = function () {
            var z = {},
              w = Object.create(z);
            return w[z[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0, w[z[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255, w[z[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256, w[z[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512, w;
          }(), Y;
        }(), q;
      }(), K.collector = function () {
        var q = {};
        return q.trace = function () {
          var Y = {};
          return Y.v1 = function () {
            var z = {};
            return z.TraceService = function () {
              function w(H, J, O) {
                oK.rpc.Service.call(this, H, J, O);
              }
              return (w.prototype = Object.create(oK.rpc.Service.prototype)).constructor = w, w.create = function (J, O, X) {
                return new this(J, O, X);
              }, Object.defineProperty(w.prototype.export = function H(J, O) {
                return this.rpcCall(H, uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, J, O);
              }, "name", {
                value: "Export"
              }), w;
            }(), z.ExportTraceServiceRequest = function () {
              function w(H) {
                if (this.resourceSpans = [], H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.resourceSpans = FA.emptyArray, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.resourceSpans != null && J.resourceSpans.length) for (var X = 0; X < J.resourceSpans.length; ++X) uA.opentelemetry.proto.trace.v1.ResourceSpans.encode(J.resourceSpans[X], O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        if (!(_.resourceSpans && _.resourceSpans.length)) _.resourceSpans = [];
                        _.resourceSpans.push(uA.opentelemetry.proto.trace.v1.ResourceSpans.decode(J, J.uint32()));
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.resourceSpans != null && J.hasOwnProperty("resourceSpans")) {
                  if (!Array.isArray(J.resourceSpans)) return "resourceSpans: array expected";
                  for (var O = 0; O < J.resourceSpans.length; ++O) {
                    var X = uA.opentelemetry.proto.trace.v1.ResourceSpans.verify(J.resourceSpans[O]);
                    if (X) return "resourceSpans." + X;
                  }
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest) return J;
                var O = new uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                if (J.resourceSpans) {
                  if (!Array.isArray(J.resourceSpans)) throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                  O.resourceSpans = [];
                  for (var X = 0; X < J.resourceSpans.length; ++X) {
                    if (typeof J.resourceSpans[X] !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                    O.resourceSpans[X] = uA.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(J.resourceSpans[X]);
                  }
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.arrays || O.defaults) X.resourceSpans = [];
                if (J.resourceSpans && J.resourceSpans.length) {
                  X.resourceSpans = [];
                  for (var $ = 0; $ < J.resourceSpans.length; ++$) X.resourceSpans[$] = uA.opentelemetry.proto.trace.v1.ResourceSpans.toObject(J.resourceSpans[$], O);
                }
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest";
              }, w;
            }(), z.ExportTraceServiceResponse = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.partialSuccess = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(J.partialSuccess, O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.partialSuccess = uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(J, J.uint32());
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                  var O = uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(J.partialSuccess);
                  if (O) return "partialSuccess." + O;
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) return J;
                var O = new uA.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                if (J.partialSuccess != null) {
                  if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                  O.partialSuccess = uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(J.partialSuccess);
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) X.partialSuccess = null;
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(J.partialSuccess, O);
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse";
              }, w;
            }(), z.ExportTracePartialSuccess = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.rejectedSpans = null, w.prototype.errorMessage = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.rejectedSpans != null && Object.hasOwnProperty.call(J, "rejectedSpans")) O.uint32(8).int64(J.rejectedSpans);
                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) O.uint32(18).string(J.errorMessage);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.rejectedSpans = J.int64();
                        break;
                      }
                    case 2:
                      {
                        _.errorMessage = J.string();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.rejectedSpans != null && J.hasOwnProperty("rejectedSpans")) {
                  if (!FA.isInteger(J.rejectedSpans) && !(J.rejectedSpans && FA.isInteger(J.rejectedSpans.low) && FA.isInteger(J.rejectedSpans.high))) return "rejectedSpans: integer|Long expected";
                }
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                  if (!FA.isString(J.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess) return J;
                var O = new uA.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                if (J.rejectedSpans != null) {
                  if (FA.Long) (O.rejectedSpans = FA.Long.fromValue(J.rejectedSpans)).unsigned = !1;else if (typeof J.rejectedSpans === "string") O.rejectedSpans = parseInt(J.rejectedSpans, 10);else if (typeof J.rejectedSpans === "number") O.rejectedSpans = J.rejectedSpans;else if (typeof J.rejectedSpans === "object") O.rejectedSpans = new FA.LongBits(J.rejectedSpans.low >>> 0, J.rejectedSpans.high >>> 0).toNumber();
                }
                if (J.errorMessage != null) O.errorMessage = String(J.errorMessage);
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) {
                  if (FA.Long) {
                    var $ = new FA.Long(0, 0, !1);
                    X.rejectedSpans = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                  } else X.rejectedSpans = O.longs === String ? "0" : 0;
                  X.errorMessage = "";
                }
                if (J.rejectedSpans != null && J.hasOwnProperty("rejectedSpans")) if (typeof J.rejectedSpans === "number") X.rejectedSpans = O.longs === String ? String(J.rejectedSpans) : J.rejectedSpans;else X.rejectedSpans = O.longs === String ? FA.Long.prototype.toString.call(J.rejectedSpans) : O.longs === Number ? new FA.LongBits(J.rejectedSpans.low >>> 0, J.rejectedSpans.high >>> 0).toNumber() : J.rejectedSpans;
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess";
              }, w;
            }(), z;
          }(), Y;
        }(), q.metrics = function () {
          var Y = {};
          return Y.v1 = function () {
            var z = {};
            return z.MetricsService = function () {
              function w(H, J, O) {
                oK.rpc.Service.call(this, H, J, O);
              }
              return (w.prototype = Object.create(oK.rpc.Service.prototype)).constructor = w, w.create = function (J, O, X) {
                return new this(J, O, X);
              }, Object.defineProperty(w.prototype.export = function H(J, O) {
                return this.rpcCall(H, uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, J, O);
              }, "name", {
                value: "Export"
              }), w;
            }(), z.ExportMetricsServiceRequest = function () {
              function w(H) {
                if (this.resourceMetrics = [], H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.resourceMetrics = FA.emptyArray, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.resourceMetrics != null && J.resourceMetrics.length) for (var X = 0; X < J.resourceMetrics.length; ++X) uA.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(J.resourceMetrics[X], O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        if (!(_.resourceMetrics && _.resourceMetrics.length)) _.resourceMetrics = [];
                        _.resourceMetrics.push(uA.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(J, J.uint32()));
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.resourceMetrics != null && J.hasOwnProperty("resourceMetrics")) {
                  if (!Array.isArray(J.resourceMetrics)) return "resourceMetrics: array expected";
                  for (var O = 0; O < J.resourceMetrics.length; ++O) {
                    var X = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(J.resourceMetrics[O]);
                    if (X) return "resourceMetrics." + X;
                  }
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest) return J;
                var O = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                if (J.resourceMetrics) {
                  if (!Array.isArray(J.resourceMetrics)) throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                  O.resourceMetrics = [];
                  for (var X = 0; X < J.resourceMetrics.length; ++X) {
                    if (typeof J.resourceMetrics[X] !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                    O.resourceMetrics[X] = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(J.resourceMetrics[X]);
                  }
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.arrays || O.defaults) X.resourceMetrics = [];
                if (J.resourceMetrics && J.resourceMetrics.length) {
                  X.resourceMetrics = [];
                  for (var $ = 0; $ < J.resourceMetrics.length; ++$) X.resourceMetrics[$] = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(J.resourceMetrics[$], O);
                }
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest";
              }, w;
            }(), z.ExportMetricsServiceResponse = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.partialSuccess = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(J.partialSuccess, O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.partialSuccess = uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(J, J.uint32());
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                  var O = uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(J.partialSuccess);
                  if (O) return "partialSuccess." + O;
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse) return J;
                var O = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                if (J.partialSuccess != null) {
                  if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                  O.partialSuccess = uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(J.partialSuccess);
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) X.partialSuccess = null;
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(J.partialSuccess, O);
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse";
              }, w;
            }(), z.ExportMetricsPartialSuccess = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.rejectedDataPoints = null, w.prototype.errorMessage = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.rejectedDataPoints != null && Object.hasOwnProperty.call(J, "rejectedDataPoints")) O.uint32(8).int64(J.rejectedDataPoints);
                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) O.uint32(18).string(J.errorMessage);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.rejectedDataPoints = J.int64();
                        break;
                      }
                    case 2:
                      {
                        _.errorMessage = J.string();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.rejectedDataPoints != null && J.hasOwnProperty("rejectedDataPoints")) {
                  if (!FA.isInteger(J.rejectedDataPoints) && !(J.rejectedDataPoints && FA.isInteger(J.rejectedDataPoints.low) && FA.isInteger(J.rejectedDataPoints.high))) return "rejectedDataPoints: integer|Long expected";
                }
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                  if (!FA.isString(J.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess) return J;
                var O = new uA.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                if (J.rejectedDataPoints != null) {
                  if (FA.Long) (O.rejectedDataPoints = FA.Long.fromValue(J.rejectedDataPoints)).unsigned = !1;else if (typeof J.rejectedDataPoints === "string") O.rejectedDataPoints = parseInt(J.rejectedDataPoints, 10);else if (typeof J.rejectedDataPoints === "number") O.rejectedDataPoints = J.rejectedDataPoints;else if (typeof J.rejectedDataPoints === "object") O.rejectedDataPoints = new FA.LongBits(J.rejectedDataPoints.low >>> 0, J.rejectedDataPoints.high >>> 0).toNumber();
                }
                if (J.errorMessage != null) O.errorMessage = String(J.errorMessage);
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) {
                  if (FA.Long) {
                    var $ = new FA.Long(0, 0, !1);
                    X.rejectedDataPoints = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                  } else X.rejectedDataPoints = O.longs === String ? "0" : 0;
                  X.errorMessage = "";
                }
                if (J.rejectedDataPoints != null && J.hasOwnProperty("rejectedDataPoints")) if (typeof J.rejectedDataPoints === "number") X.rejectedDataPoints = O.longs === String ? String(J.rejectedDataPoints) : J.rejectedDataPoints;else X.rejectedDataPoints = O.longs === String ? FA.Long.prototype.toString.call(J.rejectedDataPoints) : O.longs === Number ? new FA.LongBits(J.rejectedDataPoints.low >>> 0, J.rejectedDataPoints.high >>> 0).toNumber() : J.rejectedDataPoints;
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess";
              }, w;
            }(), z;
          }(), Y;
        }(), q.logs = function () {
          var Y = {};
          return Y.v1 = function () {
            var z = {};
            return z.LogsService = function () {
              function w(H, J, O) {
                oK.rpc.Service.call(this, H, J, O);
              }
              return (w.prototype = Object.create(oK.rpc.Service.prototype)).constructor = w, w.create = function (J, O, X) {
                return new this(J, O, X);
              }, Object.defineProperty(w.prototype.export = function H(J, O) {
                return this.rpcCall(H, uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, J, O);
              }, "name", {
                value: "Export"
              }), w;
            }(), z.ExportLogsServiceRequest = function () {
              function w(H) {
                if (this.resourceLogs = [], H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.resourceLogs = FA.emptyArray, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.resourceLogs != null && J.resourceLogs.length) for (var X = 0; X < J.resourceLogs.length; ++X) uA.opentelemetry.proto.logs.v1.ResourceLogs.encode(J.resourceLogs[X], O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        if (!(_.resourceLogs && _.resourceLogs.length)) _.resourceLogs = [];
                        _.resourceLogs.push(uA.opentelemetry.proto.logs.v1.ResourceLogs.decode(J, J.uint32()));
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.resourceLogs != null && J.hasOwnProperty("resourceLogs")) {
                  if (!Array.isArray(J.resourceLogs)) return "resourceLogs: array expected";
                  for (var O = 0; O < J.resourceLogs.length; ++O) {
                    var X = uA.opentelemetry.proto.logs.v1.ResourceLogs.verify(J.resourceLogs[O]);
                    if (X) return "resourceLogs." + X;
                  }
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest) return J;
                var O = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                if (J.resourceLogs) {
                  if (!Array.isArray(J.resourceLogs)) throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                  O.resourceLogs = [];
                  for (var X = 0; X < J.resourceLogs.length; ++X) {
                    if (typeof J.resourceLogs[X] !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                    O.resourceLogs[X] = uA.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(J.resourceLogs[X]);
                  }
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.arrays || O.defaults) X.resourceLogs = [];
                if (J.resourceLogs && J.resourceLogs.length) {
                  X.resourceLogs = [];
                  for (var $ = 0; $ < J.resourceLogs.length; ++$) X.resourceLogs[$] = uA.opentelemetry.proto.logs.v1.ResourceLogs.toObject(J.resourceLogs[$], O);
                }
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest";
              }, w;
            }(), z.ExportLogsServiceResponse = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.partialSuccess = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.partialSuccess != null && Object.hasOwnProperty.call(J, "partialSuccess")) uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(J.partialSuccess, O.uint32(10).fork()).ldelim();
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.partialSuccess = uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(J, J.uint32());
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) {
                  var O = uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(J.partialSuccess);
                  if (O) return "partialSuccess." + O;
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) return J;
                var O = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                if (J.partialSuccess != null) {
                  if (typeof J.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected");
                  O.partialSuccess = uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(J.partialSuccess);
                }
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) X.partialSuccess = null;
                if (J.partialSuccess != null && J.hasOwnProperty("partialSuccess")) X.partialSuccess = uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(J.partialSuccess, O);
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse";
              }, w;
            }(), z.ExportLogsPartialSuccess = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.rejectedLogRecords = null, w.prototype.errorMessage = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.rejectedLogRecords != null && Object.hasOwnProperty.call(J, "rejectedLogRecords")) O.uint32(8).int64(J.rejectedLogRecords);
                if (J.errorMessage != null && Object.hasOwnProperty.call(J, "errorMessage")) O.uint32(18).string(J.errorMessage);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.rejectedLogRecords = J.int64();
                        break;
                      }
                    case 2:
                      {
                        _.errorMessage = J.string();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.rejectedLogRecords != null && J.hasOwnProperty("rejectedLogRecords")) {
                  if (!FA.isInteger(J.rejectedLogRecords) && !(J.rejectedLogRecords && FA.isInteger(J.rejectedLogRecords.low) && FA.isInteger(J.rejectedLogRecords.high))) return "rejectedLogRecords: integer|Long expected";
                }
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) {
                  if (!FA.isString(J.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess) return J;
                var O = new uA.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                if (J.rejectedLogRecords != null) {
                  if (FA.Long) (O.rejectedLogRecords = FA.Long.fromValue(J.rejectedLogRecords)).unsigned = !1;else if (typeof J.rejectedLogRecords === "string") O.rejectedLogRecords = parseInt(J.rejectedLogRecords, 10);else if (typeof J.rejectedLogRecords === "number") O.rejectedLogRecords = J.rejectedLogRecords;else if (typeof J.rejectedLogRecords === "object") O.rejectedLogRecords = new FA.LongBits(J.rejectedLogRecords.low >>> 0, J.rejectedLogRecords.high >>> 0).toNumber();
                }
                if (J.errorMessage != null) O.errorMessage = String(J.errorMessage);
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) {
                  if (FA.Long) {
                    var $ = new FA.Long(0, 0, !1);
                    X.rejectedLogRecords = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                  } else X.rejectedLogRecords = O.longs === String ? "0" : 0;
                  X.errorMessage = "";
                }
                if (J.rejectedLogRecords != null && J.hasOwnProperty("rejectedLogRecords")) if (typeof J.rejectedLogRecords === "number") X.rejectedLogRecords = O.longs === String ? String(J.rejectedLogRecords) : J.rejectedLogRecords;else X.rejectedLogRecords = O.longs === String ? FA.Long.prototype.toString.call(J.rejectedLogRecords) : O.longs === Number ? new FA.LongBits(J.rejectedLogRecords.low >>> 0, J.rejectedLogRecords.high >>> 0).toNumber() : J.rejectedLogRecords;
                if (J.errorMessage != null && J.hasOwnProperty("errorMessage")) X.errorMessage = J.errorMessage;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess";
              }, w;
            }(), z;
          }(), Y;
        }(), q;
      }(), K.metrics = function () {
        var q = {};
        return q.v1 = function () {
          var Y = {};
          return Y.MetricsData = function () {
            function z(w) {
              if (this.resourceMetrics = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resourceMetrics = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resourceMetrics != null && H.resourceMetrics.length) for (var O = 0; O < H.resourceMetrics.length; ++O) uA.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(H.resourceMetrics[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.MetricsData();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.resourceMetrics && $.resourceMetrics.length)) $.resourceMetrics = [];
                      $.resourceMetrics.push(uA.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resourceMetrics != null && H.hasOwnProperty("resourceMetrics")) {
                if (!Array.isArray(H.resourceMetrics)) return "resourceMetrics: array expected";
                for (var J = 0; J < H.resourceMetrics.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(H.resourceMetrics[J]);
                  if (O) return "resourceMetrics." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.MetricsData) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.MetricsData();
              if (H.resourceMetrics) {
                if (!Array.isArray(H.resourceMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                J.resourceMetrics = [];
                for (var O = 0; O < H.resourceMetrics.length; ++O) {
                  if (typeof H.resourceMetrics[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                  J.resourceMetrics[O] = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(H.resourceMetrics[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.resourceMetrics = [];
              if (H.resourceMetrics && H.resourceMetrics.length) {
                O.resourceMetrics = [];
                for (var X = 0; X < H.resourceMetrics.length; ++X) O.resourceMetrics[X] = uA.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(H.resourceMetrics[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.MetricsData";
            }, z;
          }(), Y.ResourceMetrics = function () {
            function z(w) {
              if (this.scopeMetrics = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resource = null, z.prototype.scopeMetrics = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resource != null && Object.hasOwnProperty.call(H, "resource")) uA.opentelemetry.proto.resource.v1.Resource.encode(H.resource, J.uint32(10).fork()).ldelim();
              if (H.scopeMetrics != null && H.scopeMetrics.length) for (var O = 0; O < H.scopeMetrics.length; ++O) uA.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(H.scopeMetrics[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.ResourceMetrics();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.resource = uA.opentelemetry.proto.resource.v1.Resource.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.scopeMetrics && $.scopeMetrics.length)) $.scopeMetrics = [];
                      $.scopeMetrics.push(uA.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resource != null && H.hasOwnProperty("resource")) {
                var J = uA.opentelemetry.proto.resource.v1.Resource.verify(H.resource);
                if (J) return "resource." + J;
              }
              if (H.scopeMetrics != null && H.hasOwnProperty("scopeMetrics")) {
                if (!Array.isArray(H.scopeMetrics)) return "scopeMetrics: array expected";
                for (var O = 0; O < H.scopeMetrics.length; ++O) {
                  var J = uA.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(H.scopeMetrics[O]);
                  if (J) return "scopeMetrics." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.ResourceMetrics) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.ResourceMetrics();
              if (H.resource != null) {
                if (typeof H.resource !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                J.resource = uA.opentelemetry.proto.resource.v1.Resource.fromObject(H.resource);
              }
              if (H.scopeMetrics) {
                if (!Array.isArray(H.scopeMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                J.scopeMetrics = [];
                for (var O = 0; O < H.scopeMetrics.length; ++O) {
                  if (typeof H.scopeMetrics[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                  J.scopeMetrics[O] = uA.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(H.scopeMetrics[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.scopeMetrics = [];
              if (J.defaults) O.resource = null, O.schemaUrl = "";
              if (H.resource != null && H.hasOwnProperty("resource")) O.resource = uA.opentelemetry.proto.resource.v1.Resource.toObject(H.resource, J);
              if (H.scopeMetrics && H.scopeMetrics.length) {
                O.scopeMetrics = [];
                for (var X = 0; X < H.scopeMetrics.length; ++X) O.scopeMetrics[X] = uA.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(H.scopeMetrics[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.ResourceMetrics";
            }, z;
          }(), Y.ScopeMetrics = function () {
            function z(w) {
              if (this.metrics = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.scope = null, z.prototype.metrics = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.scope != null && Object.hasOwnProperty.call(H, "scope")) uA.opentelemetry.proto.common.v1.InstrumentationScope.encode(H.scope, J.uint32(10).fork()).ldelim();
              if (H.metrics != null && H.metrics.length) for (var O = 0; O < H.metrics.length; ++O) uA.opentelemetry.proto.metrics.v1.Metric.encode(H.metrics[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.ScopeMetrics();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.metrics && $.metrics.length)) $.metrics = [];
                      $.metrics.push(uA.opentelemetry.proto.metrics.v1.Metric.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.scope != null && H.hasOwnProperty("scope")) {
                var J = uA.opentelemetry.proto.common.v1.InstrumentationScope.verify(H.scope);
                if (J) return "scope." + J;
              }
              if (H.metrics != null && H.hasOwnProperty("metrics")) {
                if (!Array.isArray(H.metrics)) return "metrics: array expected";
                for (var O = 0; O < H.metrics.length; ++O) {
                  var J = uA.opentelemetry.proto.metrics.v1.Metric.verify(H.metrics[O]);
                  if (J) return "metrics." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.ScopeMetrics) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.ScopeMetrics();
              if (H.scope != null) {
                if (typeof H.scope !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                J.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(H.scope);
              }
              if (H.metrics) {
                if (!Array.isArray(H.metrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                J.metrics = [];
                for (var O = 0; O < H.metrics.length; ++O) {
                  if (typeof H.metrics[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                  J.metrics[O] = uA.opentelemetry.proto.metrics.v1.Metric.fromObject(H.metrics[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.metrics = [];
              if (J.defaults) O.scope = null, O.schemaUrl = "";
              if (H.scope != null && H.hasOwnProperty("scope")) O.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(H.scope, J);
              if (H.metrics && H.metrics.length) {
                O.metrics = [];
                for (var X = 0; X < H.metrics.length; ++X) O.metrics[X] = uA.opentelemetry.proto.metrics.v1.Metric.toObject(H.metrics[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.ScopeMetrics";
            }, z;
          }(), Y.Metric = function () {
            function z(H) {
              if (this.metadata = [], H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.name = null, z.prototype.description = null, z.prototype.unit = null, z.prototype.gauge = null, z.prototype.sum = null, z.prototype.histogram = null, z.prototype.exponentialHistogram = null, z.prototype.summary = null, z.prototype.metadata = FA.emptyArray;
            var w;
            return Object.defineProperty(z.prototype, "data", {
              get: FA.oneOfGetter(w = ["gauge", "sum", "histogram", "exponentialHistogram", "summary"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.name != null && Object.hasOwnProperty.call(J, "name")) O.uint32(10).string(J.name);
              if (J.description != null && Object.hasOwnProperty.call(J, "description")) O.uint32(18).string(J.description);
              if (J.unit != null && Object.hasOwnProperty.call(J, "unit")) O.uint32(26).string(J.unit);
              if (J.gauge != null && Object.hasOwnProperty.call(J, "gauge")) uA.opentelemetry.proto.metrics.v1.Gauge.encode(J.gauge, O.uint32(42).fork()).ldelim();
              if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) uA.opentelemetry.proto.metrics.v1.Sum.encode(J.sum, O.uint32(58).fork()).ldelim();
              if (J.histogram != null && Object.hasOwnProperty.call(J, "histogram")) uA.opentelemetry.proto.metrics.v1.Histogram.encode(J.histogram, O.uint32(74).fork()).ldelim();
              if (J.exponentialHistogram != null && Object.hasOwnProperty.call(J, "exponentialHistogram")) uA.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(J.exponentialHistogram, O.uint32(82).fork()).ldelim();
              if (J.summary != null && Object.hasOwnProperty.call(J, "summary")) uA.opentelemetry.proto.metrics.v1.Summary.encode(J.summary, O.uint32(90).fork()).ldelim();
              if (J.metadata != null && J.metadata.length) for (var X = 0; X < J.metadata.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.metadata[X], O.uint32(98).fork()).ldelim();
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.metrics.v1.Metric();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 1:
                    {
                      _.name = J.string();
                      break;
                    }
                  case 2:
                    {
                      _.description = J.string();
                      break;
                    }
                  case 3:
                    {
                      _.unit = J.string();
                      break;
                    }
                  case 5:
                    {
                      _.gauge = uA.opentelemetry.proto.metrics.v1.Gauge.decode(J, J.uint32());
                      break;
                    }
                  case 7:
                    {
                      _.sum = uA.opentelemetry.proto.metrics.v1.Sum.decode(J, J.uint32());
                      break;
                    }
                  case 9:
                    {
                      _.histogram = uA.opentelemetry.proto.metrics.v1.Histogram.decode(J, J.uint32());
                      break;
                    }
                  case 10:
                    {
                      _.exponentialHistogram = uA.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(J, J.uint32());
                      break;
                    }
                  case 11:
                    {
                      _.summary = uA.opentelemetry.proto.metrics.v1.Summary.decode(J, J.uint32());
                      break;
                    }
                  case 12:
                    {
                      if (!(_.metadata && _.metadata.length)) _.metadata = [];
                      _.metadata.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.name != null && J.hasOwnProperty("name")) {
                if (!FA.isString(J.name)) return "name: string expected";
              }
              if (J.description != null && J.hasOwnProperty("description")) {
                if (!FA.isString(J.description)) return "description: string expected";
              }
              if (J.unit != null && J.hasOwnProperty("unit")) {
                if (!FA.isString(J.unit)) return "unit: string expected";
              }
              if (J.gauge != null && J.hasOwnProperty("gauge")) {
                O.data = 1;
                {
                  var X = uA.opentelemetry.proto.metrics.v1.Gauge.verify(J.gauge);
                  if (X) return "gauge." + X;
                }
              }
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (O.data === 1) return "data: multiple values";
                O.data = 1;
                {
                  var X = uA.opentelemetry.proto.metrics.v1.Sum.verify(J.sum);
                  if (X) return "sum." + X;
                }
              }
              if (J.histogram != null && J.hasOwnProperty("histogram")) {
                if (O.data === 1) return "data: multiple values";
                O.data = 1;
                {
                  var X = uA.opentelemetry.proto.metrics.v1.Histogram.verify(J.histogram);
                  if (X) return "histogram." + X;
                }
              }
              if (J.exponentialHistogram != null && J.hasOwnProperty("exponentialHistogram")) {
                if (O.data === 1) return "data: multiple values";
                O.data = 1;
                {
                  var X = uA.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(J.exponentialHistogram);
                  if (X) return "exponentialHistogram." + X;
                }
              }
              if (J.summary != null && J.hasOwnProperty("summary")) {
                if (O.data === 1) return "data: multiple values";
                O.data = 1;
                {
                  var X = uA.opentelemetry.proto.metrics.v1.Summary.verify(J.summary);
                  if (X) return "summary." + X;
                }
              }
              if (J.metadata != null && J.hasOwnProperty("metadata")) {
                if (!Array.isArray(J.metadata)) return "metadata: array expected";
                for (var $ = 0; $ < J.metadata.length; ++$) {
                  var X = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.metadata[$]);
                  if (X) return "metadata." + X;
                }
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.metrics.v1.Metric) return J;
              var O = new uA.opentelemetry.proto.metrics.v1.Metric();
              if (J.name != null) O.name = String(J.name);
              if (J.description != null) O.description = String(J.description);
              if (J.unit != null) O.unit = String(J.unit);
              if (J.gauge != null) {
                if (typeof J.gauge !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                O.gauge = uA.opentelemetry.proto.metrics.v1.Gauge.fromObject(J.gauge);
              }
              if (J.sum != null) {
                if (typeof J.sum !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                O.sum = uA.opentelemetry.proto.metrics.v1.Sum.fromObject(J.sum);
              }
              if (J.histogram != null) {
                if (typeof J.histogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                O.histogram = uA.opentelemetry.proto.metrics.v1.Histogram.fromObject(J.histogram);
              }
              if (J.exponentialHistogram != null) {
                if (typeof J.exponentialHistogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                O.exponentialHistogram = uA.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(J.exponentialHistogram);
              }
              if (J.summary != null) {
                if (typeof J.summary !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                O.summary = uA.opentelemetry.proto.metrics.v1.Summary.fromObject(J.summary);
              }
              if (J.metadata) {
                if (!Array.isArray(J.metadata)) throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                O.metadata = [];
                for (var X = 0; X < J.metadata.length; ++X) {
                  if (typeof J.metadata[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                  O.metadata[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.metadata[X]);
                }
              }
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (O.arrays || O.defaults) X.metadata = [];
              if (O.defaults) X.name = "", X.description = "", X.unit = "";
              if (J.name != null && J.hasOwnProperty("name")) X.name = J.name;
              if (J.description != null && J.hasOwnProperty("description")) X.description = J.description;
              if (J.unit != null && J.hasOwnProperty("unit")) X.unit = J.unit;
              if (J.gauge != null && J.hasOwnProperty("gauge")) {
                if (X.gauge = uA.opentelemetry.proto.metrics.v1.Gauge.toObject(J.gauge, O), O.oneofs) X.data = "gauge";
              }
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (X.sum = uA.opentelemetry.proto.metrics.v1.Sum.toObject(J.sum, O), O.oneofs) X.data = "sum";
              }
              if (J.histogram != null && J.hasOwnProperty("histogram")) {
                if (X.histogram = uA.opentelemetry.proto.metrics.v1.Histogram.toObject(J.histogram, O), O.oneofs) X.data = "histogram";
              }
              if (J.exponentialHistogram != null && J.hasOwnProperty("exponentialHistogram")) {
                if (X.exponentialHistogram = uA.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(J.exponentialHistogram, O), O.oneofs) X.data = "exponentialHistogram";
              }
              if (J.summary != null && J.hasOwnProperty("summary")) {
                if (X.summary = uA.opentelemetry.proto.metrics.v1.Summary.toObject(J.summary, O), O.oneofs) X.data = "summary";
              }
              if (J.metadata && J.metadata.length) {
                X.metadata = [];
                for (var $ = 0; $ < J.metadata.length; ++$) X.metadata[$] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.metadata[$], O);
              }
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.metrics.v1.Metric";
            }, z;
          }(), Y.Gauge = function () {
            function z(w) {
              if (this.dataPoints = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.dataPoints = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.dataPoints != null && H.dataPoints.length) for (var O = 0; O < H.dataPoints.length; ++O) uA.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(H.dataPoints[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.Gauge();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.dataPoints && $.dataPoints.length)) $.dataPoints = [];
                      $.dataPoints.push(uA.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.dataPoints != null && H.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(H.dataPoints)) return "dataPoints: array expected";
                for (var J = 0; J < H.dataPoints.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(H.dataPoints[J]);
                  if (O) return "dataPoints." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.Gauge) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.Gauge();
              if (H.dataPoints) {
                if (!Array.isArray(H.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                J.dataPoints = [];
                for (var O = 0; O < H.dataPoints.length; ++O) {
                  if (typeof H.dataPoints[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                  J.dataPoints[O] = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(H.dataPoints[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.dataPoints = [];
              if (H.dataPoints && H.dataPoints.length) {
                O.dataPoints = [];
                for (var X = 0; X < H.dataPoints.length; ++X) O.dataPoints[X] = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(H.dataPoints[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.Gauge";
            }, z;
          }(), Y.Sum = function () {
            function z(w) {
              if (this.dataPoints = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.dataPoints = FA.emptyArray, z.prototype.aggregationTemporality = null, z.prototype.isMonotonic = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.dataPoints != null && H.dataPoints.length) for (var O = 0; O < H.dataPoints.length; ++O) uA.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(H.dataPoints[O], J.uint32(10).fork()).ldelim();
              if (H.aggregationTemporality != null && Object.hasOwnProperty.call(H, "aggregationTemporality")) J.uint32(16).int32(H.aggregationTemporality);
              if (H.isMonotonic != null && Object.hasOwnProperty.call(H, "isMonotonic")) J.uint32(24).bool(H.isMonotonic);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.Sum();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.dataPoints && $.dataPoints.length)) $.dataPoints = [];
                      $.dataPoints.push(uA.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(H, H.uint32()));
                      break;
                    }
                  case 2:
                    {
                      $.aggregationTemporality = H.int32();
                      break;
                    }
                  case 3:
                    {
                      $.isMonotonic = H.bool();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.dataPoints != null && H.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(H.dataPoints)) return "dataPoints: array expected";
                for (var J = 0; J < H.dataPoints.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(H.dataPoints[J]);
                  if (O) return "dataPoints." + O;
                }
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) switch (H.aggregationTemporality) {
                default:
                  return "aggregationTemporality: enum value expected";
                case 0:
                case 1:
                case 2:
                  break;
              }
              if (H.isMonotonic != null && H.hasOwnProperty("isMonotonic")) {
                if (typeof H.isMonotonic !== "boolean") return "isMonotonic: boolean expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.Sum) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.Sum();
              if (H.dataPoints) {
                if (!Array.isArray(H.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                J.dataPoints = [];
                for (var O = 0; O < H.dataPoints.length; ++O) {
                  if (typeof H.dataPoints[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                  J.dataPoints[O] = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(H.dataPoints[O]);
                }
              }
              switch (H.aggregationTemporality) {
                default:
                  if (typeof H.aggregationTemporality === "number") {
                    J.aggregationTemporality = H.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  J.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  J.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  J.aggregationTemporality = 2;
                  break;
              }
              if (H.isMonotonic != null) J.isMonotonic = Boolean(H.isMonotonic);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.dataPoints = [];
              if (J.defaults) O.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0, O.isMonotonic = !1;
              if (H.dataPoints && H.dataPoints.length) {
                O.dataPoints = [];
                for (var X = 0; X < H.dataPoints.length; ++X) O.dataPoints[X] = uA.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(H.dataPoints[X], J);
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) O.aggregationTemporality = J.enums === String ? uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] === void 0 ? H.aggregationTemporality : uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] : H.aggregationTemporality;
              if (H.isMonotonic != null && H.hasOwnProperty("isMonotonic")) O.isMonotonic = H.isMonotonic;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.Sum";
            }, z;
          }(), Y.Histogram = function () {
            function z(w) {
              if (this.dataPoints = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.dataPoints = FA.emptyArray, z.prototype.aggregationTemporality = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.dataPoints != null && H.dataPoints.length) for (var O = 0; O < H.dataPoints.length; ++O) uA.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(H.dataPoints[O], J.uint32(10).fork()).ldelim();
              if (H.aggregationTemporality != null && Object.hasOwnProperty.call(H, "aggregationTemporality")) J.uint32(16).int32(H.aggregationTemporality);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.Histogram();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.dataPoints && $.dataPoints.length)) $.dataPoints = [];
                      $.dataPoints.push(uA.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(H, H.uint32()));
                      break;
                    }
                  case 2:
                    {
                      $.aggregationTemporality = H.int32();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.dataPoints != null && H.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(H.dataPoints)) return "dataPoints: array expected";
                for (var J = 0; J < H.dataPoints.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(H.dataPoints[J]);
                  if (O) return "dataPoints." + O;
                }
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) switch (H.aggregationTemporality) {
                default:
                  return "aggregationTemporality: enum value expected";
                case 0:
                case 1:
                case 2:
                  break;
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.Histogram) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.Histogram();
              if (H.dataPoints) {
                if (!Array.isArray(H.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                J.dataPoints = [];
                for (var O = 0; O < H.dataPoints.length; ++O) {
                  if (typeof H.dataPoints[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                  J.dataPoints[O] = uA.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(H.dataPoints[O]);
                }
              }
              switch (H.aggregationTemporality) {
                default:
                  if (typeof H.aggregationTemporality === "number") {
                    J.aggregationTemporality = H.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  J.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  J.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  J.aggregationTemporality = 2;
                  break;
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.dataPoints = [];
              if (J.defaults) O.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (H.dataPoints && H.dataPoints.length) {
                O.dataPoints = [];
                for (var X = 0; X < H.dataPoints.length; ++X) O.dataPoints[X] = uA.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(H.dataPoints[X], J);
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) O.aggregationTemporality = J.enums === String ? uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] === void 0 ? H.aggregationTemporality : uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] : H.aggregationTemporality;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.Histogram";
            }, z;
          }(), Y.ExponentialHistogram = function () {
            function z(w) {
              if (this.dataPoints = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.dataPoints = FA.emptyArray, z.prototype.aggregationTemporality = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.dataPoints != null && H.dataPoints.length) for (var O = 0; O < H.dataPoints.length; ++O) uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(H.dataPoints[O], J.uint32(10).fork()).ldelim();
              if (H.aggregationTemporality != null && Object.hasOwnProperty.call(H, "aggregationTemporality")) J.uint32(16).int32(H.aggregationTemporality);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogram();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.dataPoints && $.dataPoints.length)) $.dataPoints = [];
                      $.dataPoints.push(uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(H, H.uint32()));
                      break;
                    }
                  case 2:
                    {
                      $.aggregationTemporality = H.int32();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.dataPoints != null && H.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(H.dataPoints)) return "dataPoints: array expected";
                for (var J = 0; J < H.dataPoints.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(H.dataPoints[J]);
                  if (O) return "dataPoints." + O;
                }
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) switch (H.aggregationTemporality) {
                default:
                  return "aggregationTemporality: enum value expected";
                case 0:
                case 1:
                case 2:
                  break;
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.ExponentialHistogram) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogram();
              if (H.dataPoints) {
                if (!Array.isArray(H.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                J.dataPoints = [];
                for (var O = 0; O < H.dataPoints.length; ++O) {
                  if (typeof H.dataPoints[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                  J.dataPoints[O] = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(H.dataPoints[O]);
                }
              }
              switch (H.aggregationTemporality) {
                default:
                  if (typeof H.aggregationTemporality === "number") {
                    J.aggregationTemporality = H.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  J.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  J.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  J.aggregationTemporality = 2;
                  break;
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.dataPoints = [];
              if (J.defaults) O.aggregationTemporality = J.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (H.dataPoints && H.dataPoints.length) {
                O.dataPoints = [];
                for (var X = 0; X < H.dataPoints.length; ++X) O.dataPoints[X] = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(H.dataPoints[X], J);
              }
              if (H.aggregationTemporality != null && H.hasOwnProperty("aggregationTemporality")) O.aggregationTemporality = J.enums === String ? uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] === void 0 ? H.aggregationTemporality : uA.opentelemetry.proto.metrics.v1.AggregationTemporality[H.aggregationTemporality] : H.aggregationTemporality;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.ExponentialHistogram";
            }, z;
          }(), Y.Summary = function () {
            function z(w) {
              if (this.dataPoints = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.dataPoints = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.dataPoints != null && H.dataPoints.length) for (var O = 0; O < H.dataPoints.length; ++O) uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(H.dataPoints[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.Summary();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.dataPoints && $.dataPoints.length)) $.dataPoints = [];
                      $.dataPoints.push(uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.dataPoints != null && H.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(H.dataPoints)) return "dataPoints: array expected";
                for (var J = 0; J < H.dataPoints.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(H.dataPoints[J]);
                  if (O) return "dataPoints." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.Summary) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.Summary();
              if (H.dataPoints) {
                if (!Array.isArray(H.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                J.dataPoints = [];
                for (var O = 0; O < H.dataPoints.length; ++O) {
                  if (typeof H.dataPoints[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                  J.dataPoints[O] = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(H.dataPoints[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.dataPoints = [];
              if (H.dataPoints && H.dataPoints.length) {
                O.dataPoints = [];
                for (var X = 0; X < H.dataPoints.length; ++X) O.dataPoints[X] = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(H.dataPoints[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.Summary";
            }, z;
          }(), Y.AggregationTemporality = function () {
            var z = {},
              w = Object.create(z);
            return w[z[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0, w[z[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1, w[z[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2, w;
          }(), Y.DataPointFlags = function () {
            var z = {},
              w = Object.create(z);
            return w[z[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0, w[z[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1, w;
          }(), Y.NumberDataPoint = function () {
            function z(H) {
              if (this.attributes = [], this.exemplars = [], H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.attributes = FA.emptyArray, z.prototype.startTimeUnixNano = null, z.prototype.timeUnixNano = null, z.prototype.asDouble = null, z.prototype.asInt = null, z.prototype.exemplars = FA.emptyArray, z.prototype.flags = null;
            var w;
            return Object.defineProperty(z.prototype, "value", {
              get: FA.oneOfGetter(w = ["asDouble", "asInt"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) O.uint32(17).fixed64(J.startTimeUnixNano);
              if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) O.uint32(25).fixed64(J.timeUnixNano);
              if (J.asDouble != null && Object.hasOwnProperty.call(J, "asDouble")) O.uint32(33).double(J.asDouble);
              if (J.exemplars != null && J.exemplars.length) for (var X = 0; X < J.exemplars.length; ++X) uA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], O.uint32(42).fork()).ldelim();
              if (J.asInt != null && Object.hasOwnProperty.call(J, "asInt")) O.uint32(49).sfixed64(J.asInt);
              if (J.attributes != null && J.attributes.length) for (var X = 0; X < J.attributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], O.uint32(58).fork()).ldelim();
              if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) O.uint32(64).uint32(J.flags);
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.metrics.v1.NumberDataPoint();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 7:
                    {
                      if (!(_.attributes && _.attributes.length)) _.attributes = [];
                      _.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                      break;
                    }
                  case 2:
                    {
                      _.startTimeUnixNano = J.fixed64();
                      break;
                    }
                  case 3:
                    {
                      _.timeUnixNano = J.fixed64();
                      break;
                    }
                  case 4:
                    {
                      _.asDouble = J.double();
                      break;
                    }
                  case 6:
                    {
                      _.asInt = J.sfixed64();
                      break;
                    }
                  case 5:
                    {
                      if (!(_.exemplars && _.exemplars.length)) _.exemplars = [];
                      _.exemplars.push(uA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                      break;
                    }
                  case 8:
                    {
                      _.flags = J.uint32();
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.attributes != null && J.hasOwnProperty("attributes")) {
                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                for (var X = 0; X < J.attributes.length; ++X) {
                  var $ = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                  if ($) return "attributes." + $;
                }
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                if (!FA.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && FA.isInteger(J.startTimeUnixNano.low) && FA.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(J.timeUnixNano) && !(J.timeUnixNano && FA.isInteger(J.timeUnixNano.low) && FA.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                if (O.value = 1, typeof J.asDouble !== "number") return "asDouble: number expected";
              }
              if (J.asInt != null && J.hasOwnProperty("asInt")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, !FA.isInteger(J.asInt) && !(J.asInt && FA.isInteger(J.asInt.low) && FA.isInteger(J.asInt.high))) return "asInt: integer|Long expected";
              }
              if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                for (var X = 0; X < J.exemplars.length; ++X) {
                  var $ = uA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                  if ($) return "exemplars." + $;
                }
              }
              if (J.flags != null && J.hasOwnProperty("flags")) {
                if (!FA.isInteger(J.flags)) return "flags: integer expected";
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.metrics.v1.NumberDataPoint) return J;
              var O = new uA.opentelemetry.proto.metrics.v1.NumberDataPoint();
              if (J.attributes) {
                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                O.attributes = [];
                for (var X = 0; X < J.attributes.length; ++X) {
                  if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                  O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X]);
                }
              }
              if (J.startTimeUnixNano != null) {
                if (FA.Long) (O.startTimeUnixNano = FA.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;else if (typeof J.startTimeUnixNano === "string") O.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);else if (typeof J.startTimeUnixNano === "number") O.startTimeUnixNano = J.startTimeUnixNano;else if (typeof J.startTimeUnixNano === "object") O.startTimeUnixNano = new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (J.timeUnixNano != null) {
                if (FA.Long) (O.timeUnixNano = FA.Long.fromValue(J.timeUnixNano)).unsigned = !1;else if (typeof J.timeUnixNano === "string") O.timeUnixNano = parseInt(J.timeUnixNano, 10);else if (typeof J.timeUnixNano === "number") O.timeUnixNano = J.timeUnixNano;else if (typeof J.timeUnixNano === "object") O.timeUnixNano = new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber();
              }
              if (J.asDouble != null) O.asDouble = Number(J.asDouble);
              if (J.asInt != null) {
                if (FA.Long) (O.asInt = FA.Long.fromValue(J.asInt)).unsigned = !1;else if (typeof J.asInt === "string") O.asInt = parseInt(J.asInt, 10);else if (typeof J.asInt === "number") O.asInt = J.asInt;else if (typeof J.asInt === "object") O.asInt = new FA.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber();
              }
              if (J.exemplars) {
                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                O.exemplars = [];
                for (var X = 0; X < J.exemplars.length; ++X) {
                  if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                  O.exemplars[X] = uA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X]);
                }
              }
              if (J.flags != null) O.flags = J.flags >>> 0;
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (O.arrays || O.defaults) X.exemplars = [], X.attributes = [];
              if (O.defaults) {
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.startTimeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.startTimeUnixNano = O.longs === String ? "0" : 0;
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.timeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.timeUnixNano = O.longs === String ? "0" : 0;
                X.flags = 0;
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) if (typeof J.startTimeUnixNano === "number") X.startTimeUnixNano = O.longs === String ? String(J.startTimeUnixNano) : J.startTimeUnixNano;else X.startTimeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.startTimeUnixNano) : O.longs === Number ? new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber() : J.startTimeUnixNano;
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) if (typeof J.timeUnixNano === "number") X.timeUnixNano = O.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;else X.timeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.timeUnixNano) : O.longs === Number ? new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
              if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                if (X.asDouble = O.json && !isFinite(J.asDouble) ? String(J.asDouble) : J.asDouble, O.oneofs) X.value = "asDouble";
              }
              if (J.exemplars && J.exemplars.length) {
                X.exemplars = [];
                for (var _ = 0; _ < J.exemplars.length; ++_) X.exemplars[_] = uA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[_], O);
              }
              if (J.asInt != null && J.hasOwnProperty("asInt")) {
                if (typeof J.asInt === "number") X.asInt = O.longs === String ? String(J.asInt) : J.asInt;else X.asInt = O.longs === String ? FA.Long.prototype.toString.call(J.asInt) : O.longs === Number ? new FA.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber() : J.asInt;
                if (O.oneofs) X.value = "asInt";
              }
              if (J.attributes && J.attributes.length) {
                X.attributes = [];
                for (var _ = 0; _ < J.attributes.length; ++_) X.attributes[_] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[_], O);
              }
              if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.metrics.v1.NumberDataPoint";
            }, z;
          }(), Y.HistogramDataPoint = function () {
            function z(H) {
              if (this.attributes = [], this.bucketCounts = [], this.explicitBounds = [], this.exemplars = [], H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.attributes = FA.emptyArray, z.prototype.startTimeUnixNano = null, z.prototype.timeUnixNano = null, z.prototype.count = null, z.prototype.sum = null, z.prototype.bucketCounts = FA.emptyArray, z.prototype.explicitBounds = FA.emptyArray, z.prototype.exemplars = FA.emptyArray, z.prototype.flags = null, z.prototype.min = null, z.prototype.max = null;
            var w;
            return Object.defineProperty(z.prototype, "_sum", {
              get: FA.oneOfGetter(w = ["sum"]),
              set: FA.oneOfSetter(w)
            }), Object.defineProperty(z.prototype, "_min", {
              get: FA.oneOfGetter(w = ["min"]),
              set: FA.oneOfSetter(w)
            }), Object.defineProperty(z.prototype, "_max", {
              get: FA.oneOfGetter(w = ["max"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) O.uint32(17).fixed64(J.startTimeUnixNano);
              if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) O.uint32(25).fixed64(J.timeUnixNano);
              if (J.count != null && Object.hasOwnProperty.call(J, "count")) O.uint32(33).fixed64(J.count);
              if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) O.uint32(41).double(J.sum);
              if (J.bucketCounts != null && J.bucketCounts.length) {
                O.uint32(50).fork();
                for (var X = 0; X < J.bucketCounts.length; ++X) O.fixed64(J.bucketCounts[X]);
                O.ldelim();
              }
              if (J.explicitBounds != null && J.explicitBounds.length) {
                O.uint32(58).fork();
                for (var X = 0; X < J.explicitBounds.length; ++X) O.double(J.explicitBounds[X]);
                O.ldelim();
              }
              if (J.exemplars != null && J.exemplars.length) for (var X = 0; X < J.exemplars.length; ++X) uA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], O.uint32(66).fork()).ldelim();
              if (J.attributes != null && J.attributes.length) for (var X = 0; X < J.attributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], O.uint32(74).fork()).ldelim();
              if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) O.uint32(80).uint32(J.flags);
              if (J.min != null && Object.hasOwnProperty.call(J, "min")) O.uint32(89).double(J.min);
              if (J.max != null && Object.hasOwnProperty.call(J, "max")) O.uint32(97).double(J.max);
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.metrics.v1.HistogramDataPoint();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 9:
                    {
                      if (!(_.attributes && _.attributes.length)) _.attributes = [];
                      _.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                      break;
                    }
                  case 2:
                    {
                      _.startTimeUnixNano = J.fixed64();
                      break;
                    }
                  case 3:
                    {
                      _.timeUnixNano = J.fixed64();
                      break;
                    }
                  case 4:
                    {
                      _.count = J.fixed64();
                      break;
                    }
                  case 5:
                    {
                      _.sum = J.double();
                      break;
                    }
                  case 6:
                    {
                      if (!(_.bucketCounts && _.bucketCounts.length)) _.bucketCounts = [];
                      if ((G & 7) === 2) {
                        var Z = J.uint32() + J.pos;
                        while (J.pos < Z) _.bucketCounts.push(J.fixed64());
                      } else _.bucketCounts.push(J.fixed64());
                      break;
                    }
                  case 7:
                    {
                      if (!(_.explicitBounds && _.explicitBounds.length)) _.explicitBounds = [];
                      if ((G & 7) === 2) {
                        var Z = J.uint32() + J.pos;
                        while (J.pos < Z) _.explicitBounds.push(J.double());
                      } else _.explicitBounds.push(J.double());
                      break;
                    }
                  case 8:
                    {
                      if (!(_.exemplars && _.exemplars.length)) _.exemplars = [];
                      _.exemplars.push(uA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                      break;
                    }
                  case 10:
                    {
                      _.flags = J.uint32();
                      break;
                    }
                  case 11:
                    {
                      _.min = J.double();
                      break;
                    }
                  case 12:
                    {
                      _.max = J.double();
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.attributes != null && J.hasOwnProperty("attributes")) {
                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                for (var X = 0; X < J.attributes.length; ++X) {
                  var $ = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                  if ($) return "attributes." + $;
                }
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                if (!FA.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && FA.isInteger(J.startTimeUnixNano.low) && FA.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(J.timeUnixNano) && !(J.timeUnixNano && FA.isInteger(J.timeUnixNano.low) && FA.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (J.count != null && J.hasOwnProperty("count")) {
                if (!FA.isInteger(J.count) && !(J.count && FA.isInteger(J.count.low) && FA.isInteger(J.count.high))) return "count: integer|Long expected";
              }
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (O._sum = 1, typeof J.sum !== "number") return "sum: number expected";
              }
              if (J.bucketCounts != null && J.hasOwnProperty("bucketCounts")) {
                if (!Array.isArray(J.bucketCounts)) return "bucketCounts: array expected";
                for (var X = 0; X < J.bucketCounts.length; ++X) if (!FA.isInteger(J.bucketCounts[X]) && !(J.bucketCounts[X] && FA.isInteger(J.bucketCounts[X].low) && FA.isInteger(J.bucketCounts[X].high))) return "bucketCounts: integer|Long[] expected";
              }
              if (J.explicitBounds != null && J.hasOwnProperty("explicitBounds")) {
                if (!Array.isArray(J.explicitBounds)) return "explicitBounds: array expected";
                for (var X = 0; X < J.explicitBounds.length; ++X) if (typeof J.explicitBounds[X] !== "number") return "explicitBounds: number[] expected";
              }
              if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                for (var X = 0; X < J.exemplars.length; ++X) {
                  var $ = uA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                  if ($) return "exemplars." + $;
                }
              }
              if (J.flags != null && J.hasOwnProperty("flags")) {
                if (!FA.isInteger(J.flags)) return "flags: integer expected";
              }
              if (J.min != null && J.hasOwnProperty("min")) {
                if (O._min = 1, typeof J.min !== "number") return "min: number expected";
              }
              if (J.max != null && J.hasOwnProperty("max")) {
                if (O._max = 1, typeof J.max !== "number") return "max: number expected";
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.metrics.v1.HistogramDataPoint) return J;
              var O = new uA.opentelemetry.proto.metrics.v1.HistogramDataPoint();
              if (J.attributes) {
                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                O.attributes = [];
                for (var X = 0; X < J.attributes.length; ++X) {
                  if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                  O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X]);
                }
              }
              if (J.startTimeUnixNano != null) {
                if (FA.Long) (O.startTimeUnixNano = FA.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;else if (typeof J.startTimeUnixNano === "string") O.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);else if (typeof J.startTimeUnixNano === "number") O.startTimeUnixNano = J.startTimeUnixNano;else if (typeof J.startTimeUnixNano === "object") O.startTimeUnixNano = new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (J.timeUnixNano != null) {
                if (FA.Long) (O.timeUnixNano = FA.Long.fromValue(J.timeUnixNano)).unsigned = !1;else if (typeof J.timeUnixNano === "string") O.timeUnixNano = parseInt(J.timeUnixNano, 10);else if (typeof J.timeUnixNano === "number") O.timeUnixNano = J.timeUnixNano;else if (typeof J.timeUnixNano === "object") O.timeUnixNano = new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber();
              }
              if (J.count != null) {
                if (FA.Long) (O.count = FA.Long.fromValue(J.count)).unsigned = !1;else if (typeof J.count === "string") O.count = parseInt(J.count, 10);else if (typeof J.count === "number") O.count = J.count;else if (typeof J.count === "object") O.count = new FA.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber();
              }
              if (J.sum != null) O.sum = Number(J.sum);
              if (J.bucketCounts) {
                if (!Array.isArray(J.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                O.bucketCounts = [];
                for (var X = 0; X < J.bucketCounts.length; ++X) if (FA.Long) (O.bucketCounts[X] = FA.Long.fromValue(J.bucketCounts[X])).unsigned = !1;else if (typeof J.bucketCounts[X] === "string") O.bucketCounts[X] = parseInt(J.bucketCounts[X], 10);else if (typeof J.bucketCounts[X] === "number") O.bucketCounts[X] = J.bucketCounts[X];else if (typeof J.bucketCounts[X] === "object") O.bucketCounts[X] = new FA.LongBits(J.bucketCounts[X].low >>> 0, J.bucketCounts[X].high >>> 0).toNumber();
              }
              if (J.explicitBounds) {
                if (!Array.isArray(J.explicitBounds)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                O.explicitBounds = [];
                for (var X = 0; X < J.explicitBounds.length; ++X) O.explicitBounds[X] = Number(J.explicitBounds[X]);
              }
              if (J.exemplars) {
                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                O.exemplars = [];
                for (var X = 0; X < J.exemplars.length; ++X) {
                  if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                  O.exemplars[X] = uA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X]);
                }
              }
              if (J.flags != null) O.flags = J.flags >>> 0;
              if (J.min != null) O.min = Number(J.min);
              if (J.max != null) O.max = Number(J.max);
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (O.arrays || O.defaults) X.bucketCounts = [], X.explicitBounds = [], X.exemplars = [], X.attributes = [];
              if (O.defaults) {
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.startTimeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.startTimeUnixNano = O.longs === String ? "0" : 0;
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.timeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.timeUnixNano = O.longs === String ? "0" : 0;
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.count = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.count = O.longs === String ? "0" : 0;
                X.flags = 0;
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) if (typeof J.startTimeUnixNano === "number") X.startTimeUnixNano = O.longs === String ? String(J.startTimeUnixNano) : J.startTimeUnixNano;else X.startTimeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.startTimeUnixNano) : O.longs === Number ? new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber() : J.startTimeUnixNano;
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) if (typeof J.timeUnixNano === "number") X.timeUnixNano = O.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;else X.timeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.timeUnixNano) : O.longs === Number ? new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
              if (J.count != null && J.hasOwnProperty("count")) if (typeof J.count === "number") X.count = O.longs === String ? String(J.count) : J.count;else X.count = O.longs === String ? FA.Long.prototype.toString.call(J.count) : O.longs === Number ? new FA.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber() : J.count;
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (X.sum = O.json && !isFinite(J.sum) ? String(J.sum) : J.sum, O.oneofs) X._sum = "sum";
              }
              if (J.bucketCounts && J.bucketCounts.length) {
                X.bucketCounts = [];
                for (var _ = 0; _ < J.bucketCounts.length; ++_) if (typeof J.bucketCounts[_] === "number") X.bucketCounts[_] = O.longs === String ? String(J.bucketCounts[_]) : J.bucketCounts[_];else X.bucketCounts[_] = O.longs === String ? FA.Long.prototype.toString.call(J.bucketCounts[_]) : O.longs === Number ? new FA.LongBits(J.bucketCounts[_].low >>> 0, J.bucketCounts[_].high >>> 0).toNumber() : J.bucketCounts[_];
              }
              if (J.explicitBounds && J.explicitBounds.length) {
                X.explicitBounds = [];
                for (var _ = 0; _ < J.explicitBounds.length; ++_) X.explicitBounds[_] = O.json && !isFinite(J.explicitBounds[_]) ? String(J.explicitBounds[_]) : J.explicitBounds[_];
              }
              if (J.exemplars && J.exemplars.length) {
                X.exemplars = [];
                for (var _ = 0; _ < J.exemplars.length; ++_) X.exemplars[_] = uA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[_], O);
              }
              if (J.attributes && J.attributes.length) {
                X.attributes = [];
                for (var _ = 0; _ < J.attributes.length; ++_) X.attributes[_] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[_], O);
              }
              if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
              if (J.min != null && J.hasOwnProperty("min")) {
                if (X.min = O.json && !isFinite(J.min) ? String(J.min) : J.min, O.oneofs) X._min = "min";
              }
              if (J.max != null && J.hasOwnProperty("max")) {
                if (X.max = O.json && !isFinite(J.max) ? String(J.max) : J.max, O.oneofs) X._max = "max";
              }
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.metrics.v1.HistogramDataPoint";
            }, z;
          }(), Y.ExponentialHistogramDataPoint = function () {
            function z(H) {
              if (this.attributes = [], this.exemplars = [], H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.attributes = FA.emptyArray, z.prototype.startTimeUnixNano = null, z.prototype.timeUnixNano = null, z.prototype.count = null, z.prototype.sum = null, z.prototype.scale = null, z.prototype.zeroCount = null, z.prototype.positive = null, z.prototype.negative = null, z.prototype.flags = null, z.prototype.exemplars = FA.emptyArray, z.prototype.min = null, z.prototype.max = null, z.prototype.zeroThreshold = null;
            var w;
            return Object.defineProperty(z.prototype, "_sum", {
              get: FA.oneOfGetter(w = ["sum"]),
              set: FA.oneOfSetter(w)
            }), Object.defineProperty(z.prototype, "_min", {
              get: FA.oneOfGetter(w = ["min"]),
              set: FA.oneOfSetter(w)
            }), Object.defineProperty(z.prototype, "_max", {
              get: FA.oneOfGetter(w = ["max"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.attributes != null && J.attributes.length) for (var X = 0; X < J.attributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.attributes[X], O.uint32(10).fork()).ldelim();
              if (J.startTimeUnixNano != null && Object.hasOwnProperty.call(J, "startTimeUnixNano")) O.uint32(17).fixed64(J.startTimeUnixNano);
              if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) O.uint32(25).fixed64(J.timeUnixNano);
              if (J.count != null && Object.hasOwnProperty.call(J, "count")) O.uint32(33).fixed64(J.count);
              if (J.sum != null && Object.hasOwnProperty.call(J, "sum")) O.uint32(41).double(J.sum);
              if (J.scale != null && Object.hasOwnProperty.call(J, "scale")) O.uint32(48).sint32(J.scale);
              if (J.zeroCount != null && Object.hasOwnProperty.call(J, "zeroCount")) O.uint32(57).fixed64(J.zeroCount);
              if (J.positive != null && Object.hasOwnProperty.call(J, "positive")) uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(J.positive, O.uint32(66).fork()).ldelim();
              if (J.negative != null && Object.hasOwnProperty.call(J, "negative")) uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(J.negative, O.uint32(74).fork()).ldelim();
              if (J.flags != null && Object.hasOwnProperty.call(J, "flags")) O.uint32(80).uint32(J.flags);
              if (J.exemplars != null && J.exemplars.length) for (var X = 0; X < J.exemplars.length; ++X) uA.opentelemetry.proto.metrics.v1.Exemplar.encode(J.exemplars[X], O.uint32(90).fork()).ldelim();
              if (J.min != null && Object.hasOwnProperty.call(J, "min")) O.uint32(97).double(J.min);
              if (J.max != null && Object.hasOwnProperty.call(J, "max")) O.uint32(105).double(J.max);
              if (J.zeroThreshold != null && Object.hasOwnProperty.call(J, "zeroThreshold")) O.uint32(113).double(J.zeroThreshold);
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 1:
                    {
                      if (!(_.attributes && _.attributes.length)) _.attributes = [];
                      _.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                      break;
                    }
                  case 2:
                    {
                      _.startTimeUnixNano = J.fixed64();
                      break;
                    }
                  case 3:
                    {
                      _.timeUnixNano = J.fixed64();
                      break;
                    }
                  case 4:
                    {
                      _.count = J.fixed64();
                      break;
                    }
                  case 5:
                    {
                      _.sum = J.double();
                      break;
                    }
                  case 6:
                    {
                      _.scale = J.sint32();
                      break;
                    }
                  case 7:
                    {
                      _.zeroCount = J.fixed64();
                      break;
                    }
                  case 8:
                    {
                      _.positive = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(J, J.uint32());
                      break;
                    }
                  case 9:
                    {
                      _.negative = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(J, J.uint32());
                      break;
                    }
                  case 10:
                    {
                      _.flags = J.uint32();
                      break;
                    }
                  case 11:
                    {
                      if (!(_.exemplars && _.exemplars.length)) _.exemplars = [];
                      _.exemplars.push(uA.opentelemetry.proto.metrics.v1.Exemplar.decode(J, J.uint32()));
                      break;
                    }
                  case 12:
                    {
                      _.min = J.double();
                      break;
                    }
                  case 13:
                    {
                      _.max = J.double();
                      break;
                    }
                  case 14:
                    {
                      _.zeroThreshold = J.double();
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.attributes != null && J.hasOwnProperty("attributes")) {
                if (!Array.isArray(J.attributes)) return "attributes: array expected";
                for (var X = 0; X < J.attributes.length; ++X) {
                  var $ = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.attributes[X]);
                  if ($) return "attributes." + $;
                }
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) {
                if (!FA.isInteger(J.startTimeUnixNano) && !(J.startTimeUnixNano && FA.isInteger(J.startTimeUnixNano.low) && FA.isInteger(J.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(J.timeUnixNano) && !(J.timeUnixNano && FA.isInteger(J.timeUnixNano.low) && FA.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (J.count != null && J.hasOwnProperty("count")) {
                if (!FA.isInteger(J.count) && !(J.count && FA.isInteger(J.count.low) && FA.isInteger(J.count.high))) return "count: integer|Long expected";
              }
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (O._sum = 1, typeof J.sum !== "number") return "sum: number expected";
              }
              if (J.scale != null && J.hasOwnProperty("scale")) {
                if (!FA.isInteger(J.scale)) return "scale: integer expected";
              }
              if (J.zeroCount != null && J.hasOwnProperty("zeroCount")) {
                if (!FA.isInteger(J.zeroCount) && !(J.zeroCount && FA.isInteger(J.zeroCount.low) && FA.isInteger(J.zeroCount.high))) return "zeroCount: integer|Long expected";
              }
              if (J.positive != null && J.hasOwnProperty("positive")) {
                var $ = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(J.positive);
                if ($) return "positive." + $;
              }
              if (J.negative != null && J.hasOwnProperty("negative")) {
                var $ = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(J.negative);
                if ($) return "negative." + $;
              }
              if (J.flags != null && J.hasOwnProperty("flags")) {
                if (!FA.isInteger(J.flags)) return "flags: integer expected";
              }
              if (J.exemplars != null && J.hasOwnProperty("exemplars")) {
                if (!Array.isArray(J.exemplars)) return "exemplars: array expected";
                for (var X = 0; X < J.exemplars.length; ++X) {
                  var $ = uA.opentelemetry.proto.metrics.v1.Exemplar.verify(J.exemplars[X]);
                  if ($) return "exemplars." + $;
                }
              }
              if (J.min != null && J.hasOwnProperty("min")) {
                if (O._min = 1, typeof J.min !== "number") return "min: number expected";
              }
              if (J.max != null && J.hasOwnProperty("max")) {
                if (O._max = 1, typeof J.max !== "number") return "max: number expected";
              }
              if (J.zeroThreshold != null && J.hasOwnProperty("zeroThreshold")) {
                if (typeof J.zeroThreshold !== "number") return "zeroThreshold: number expected";
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint) return J;
              var O = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
              if (J.attributes) {
                if (!Array.isArray(J.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                O.attributes = [];
                for (var X = 0; X < J.attributes.length; ++X) {
                  if (typeof J.attributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                  O.attributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.attributes[X]);
                }
              }
              if (J.startTimeUnixNano != null) {
                if (FA.Long) (O.startTimeUnixNano = FA.Long.fromValue(J.startTimeUnixNano)).unsigned = !1;else if (typeof J.startTimeUnixNano === "string") O.startTimeUnixNano = parseInt(J.startTimeUnixNano, 10);else if (typeof J.startTimeUnixNano === "number") O.startTimeUnixNano = J.startTimeUnixNano;else if (typeof J.startTimeUnixNano === "object") O.startTimeUnixNano = new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (J.timeUnixNano != null) {
                if (FA.Long) (O.timeUnixNano = FA.Long.fromValue(J.timeUnixNano)).unsigned = !1;else if (typeof J.timeUnixNano === "string") O.timeUnixNano = parseInt(J.timeUnixNano, 10);else if (typeof J.timeUnixNano === "number") O.timeUnixNano = J.timeUnixNano;else if (typeof J.timeUnixNano === "object") O.timeUnixNano = new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber();
              }
              if (J.count != null) {
                if (FA.Long) (O.count = FA.Long.fromValue(J.count)).unsigned = !1;else if (typeof J.count === "string") O.count = parseInt(J.count, 10);else if (typeof J.count === "number") O.count = J.count;else if (typeof J.count === "object") O.count = new FA.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber();
              }
              if (J.sum != null) O.sum = Number(J.sum);
              if (J.scale != null) O.scale = J.scale | 0;
              if (J.zeroCount != null) {
                if (FA.Long) (O.zeroCount = FA.Long.fromValue(J.zeroCount)).unsigned = !1;else if (typeof J.zeroCount === "string") O.zeroCount = parseInt(J.zeroCount, 10);else if (typeof J.zeroCount === "number") O.zeroCount = J.zeroCount;else if (typeof J.zeroCount === "object") O.zeroCount = new FA.LongBits(J.zeroCount.low >>> 0, J.zeroCount.high >>> 0).toNumber();
              }
              if (J.positive != null) {
                if (typeof J.positive !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                O.positive = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(J.positive);
              }
              if (J.negative != null) {
                if (typeof J.negative !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                O.negative = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(J.negative);
              }
              if (J.flags != null) O.flags = J.flags >>> 0;
              if (J.exemplars) {
                if (!Array.isArray(J.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                O.exemplars = [];
                for (var X = 0; X < J.exemplars.length; ++X) {
                  if (typeof J.exemplars[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                  O.exemplars[X] = uA.opentelemetry.proto.metrics.v1.Exemplar.fromObject(J.exemplars[X]);
                }
              }
              if (J.min != null) O.min = Number(J.min);
              if (J.max != null) O.max = Number(J.max);
              if (J.zeroThreshold != null) O.zeroThreshold = Number(J.zeroThreshold);
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (O.arrays || O.defaults) X.attributes = [], X.exemplars = [];
              if (O.defaults) {
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.startTimeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.startTimeUnixNano = O.longs === String ? "0" : 0;
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.timeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.timeUnixNano = O.longs === String ? "0" : 0;
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.count = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.count = O.longs === String ? "0" : 0;
                if (X.scale = 0, FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.zeroCount = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.zeroCount = O.longs === String ? "0" : 0;
                X.positive = null, X.negative = null, X.flags = 0, X.zeroThreshold = 0;
              }
              if (J.attributes && J.attributes.length) {
                X.attributes = [];
                for (var _ = 0; _ < J.attributes.length; ++_) X.attributes[_] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.attributes[_], O);
              }
              if (J.startTimeUnixNano != null && J.hasOwnProperty("startTimeUnixNano")) if (typeof J.startTimeUnixNano === "number") X.startTimeUnixNano = O.longs === String ? String(J.startTimeUnixNano) : J.startTimeUnixNano;else X.startTimeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.startTimeUnixNano) : O.longs === Number ? new FA.LongBits(J.startTimeUnixNano.low >>> 0, J.startTimeUnixNano.high >>> 0).toNumber() : J.startTimeUnixNano;
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) if (typeof J.timeUnixNano === "number") X.timeUnixNano = O.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;else X.timeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.timeUnixNano) : O.longs === Number ? new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
              if (J.count != null && J.hasOwnProperty("count")) if (typeof J.count === "number") X.count = O.longs === String ? String(J.count) : J.count;else X.count = O.longs === String ? FA.Long.prototype.toString.call(J.count) : O.longs === Number ? new FA.LongBits(J.count.low >>> 0, J.count.high >>> 0).toNumber() : J.count;
              if (J.sum != null && J.hasOwnProperty("sum")) {
                if (X.sum = O.json && !isFinite(J.sum) ? String(J.sum) : J.sum, O.oneofs) X._sum = "sum";
              }
              if (J.scale != null && J.hasOwnProperty("scale")) X.scale = J.scale;
              if (J.zeroCount != null && J.hasOwnProperty("zeroCount")) if (typeof J.zeroCount === "number") X.zeroCount = O.longs === String ? String(J.zeroCount) : J.zeroCount;else X.zeroCount = O.longs === String ? FA.Long.prototype.toString.call(J.zeroCount) : O.longs === Number ? new FA.LongBits(J.zeroCount.low >>> 0, J.zeroCount.high >>> 0).toNumber() : J.zeroCount;
              if (J.positive != null && J.hasOwnProperty("positive")) X.positive = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(J.positive, O);
              if (J.negative != null && J.hasOwnProperty("negative")) X.negative = uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(J.negative, O);
              if (J.flags != null && J.hasOwnProperty("flags")) X.flags = J.flags;
              if (J.exemplars && J.exemplars.length) {
                X.exemplars = [];
                for (var _ = 0; _ < J.exemplars.length; ++_) X.exemplars[_] = uA.opentelemetry.proto.metrics.v1.Exemplar.toObject(J.exemplars[_], O);
              }
              if (J.min != null && J.hasOwnProperty("min")) {
                if (X.min = O.json && !isFinite(J.min) ? String(J.min) : J.min, O.oneofs) X._min = "min";
              }
              if (J.max != null && J.hasOwnProperty("max")) {
                if (X.max = O.json && !isFinite(J.max) ? String(J.max) : J.max, O.oneofs) X._max = "max";
              }
              if (J.zeroThreshold != null && J.hasOwnProperty("zeroThreshold")) X.zeroThreshold = O.json && !isFinite(J.zeroThreshold) ? String(J.zeroThreshold) : J.zeroThreshold;
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint";
            }, z.Buckets = function () {
              function H(J) {
                if (this.bucketCounts = [], J) {
                  for (var O = Object.keys(J), X = 0; X < O.length; ++X) if (J[O[X]] != null) this[O[X]] = J[O[X]];
                }
              }
              return H.prototype.offset = null, H.prototype.bucketCounts = FA.emptyArray, H.create = function (O) {
                return new H(O);
              }, H.encode = function (O, X) {
                if (!X) X = l5.create();
                if (O.offset != null && Object.hasOwnProperty.call(O, "offset")) X.uint32(8).sint32(O.offset);
                if (O.bucketCounts != null && O.bucketCounts.length) {
                  X.uint32(18).fork();
                  for (var $ = 0; $ < O.bucketCounts.length; ++$) X.uint64(O.bucketCounts[$]);
                  X.ldelim();
                }
                return X;
              }, H.encodeDelimited = function (O, X) {
                return this.encode(O, X).ldelim();
              }, H.decode = function (O, X, $) {
                if (!(O instanceof $6)) O = $6.create(O);
                var _ = X === void 0 ? O.len : O.pos + X,
                  G = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                while (O.pos < _) {
                  var Z = O.uint32();
                  if (Z === $) break;
                  switch (Z >>> 3) {
                    case 1:
                      {
                        G.offset = O.sint32();
                        break;
                      }
                    case 2:
                      {
                        if (!(G.bucketCounts && G.bucketCounts.length)) G.bucketCounts = [];
                        if ((Z & 7) === 2) {
                          var W = O.uint32() + O.pos;
                          while (O.pos < W) G.bucketCounts.push(O.uint64());
                        } else G.bucketCounts.push(O.uint64());
                        break;
                      }
                    default:
                      O.skipType(Z & 7);
                      break;
                  }
                }
                return G;
              }, H.decodeDelimited = function (O) {
                if (!(O instanceof $6)) O = new $6(O);
                return this.decode(O, O.uint32());
              }, H.verify = function (O) {
                if (typeof O !== "object" || O === null) return "object expected";
                if (O.offset != null && O.hasOwnProperty("offset")) {
                  if (!FA.isInteger(O.offset)) return "offset: integer expected";
                }
                if (O.bucketCounts != null && O.hasOwnProperty("bucketCounts")) {
                  if (!Array.isArray(O.bucketCounts)) return "bucketCounts: array expected";
                  for (var X = 0; X < O.bucketCounts.length; ++X) if (!FA.isInteger(O.bucketCounts[X]) && !(O.bucketCounts[X] && FA.isInteger(O.bucketCounts[X].low) && FA.isInteger(O.bucketCounts[X].high))) return "bucketCounts: integer|Long[] expected";
                }
                return null;
              }, H.fromObject = function (O) {
                if (O instanceof uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets) return O;
                var X = new uA.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                if (O.offset != null) X.offset = O.offset | 0;
                if (O.bucketCounts) {
                  if (!Array.isArray(O.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                  X.bucketCounts = [];
                  for (var $ = 0; $ < O.bucketCounts.length; ++$) if (FA.Long) (X.bucketCounts[$] = FA.Long.fromValue(O.bucketCounts[$])).unsigned = !0;else if (typeof O.bucketCounts[$] === "string") X.bucketCounts[$] = parseInt(O.bucketCounts[$], 10);else if (typeof O.bucketCounts[$] === "number") X.bucketCounts[$] = O.bucketCounts[$];else if (typeof O.bucketCounts[$] === "object") X.bucketCounts[$] = new FA.LongBits(O.bucketCounts[$].low >>> 0, O.bucketCounts[$].high >>> 0).toNumber(!0);
                }
                return X;
              }, H.toObject = function (O, X) {
                if (!X) X = {};
                var $ = {};
                if (X.arrays || X.defaults) $.bucketCounts = [];
                if (X.defaults) $.offset = 0;
                if (O.offset != null && O.hasOwnProperty("offset")) $.offset = O.offset;
                if (O.bucketCounts && O.bucketCounts.length) {
                  $.bucketCounts = [];
                  for (var _ = 0; _ < O.bucketCounts.length; ++_) if (typeof O.bucketCounts[_] === "number") $.bucketCounts[_] = X.longs === String ? String(O.bucketCounts[_]) : O.bucketCounts[_];else $.bucketCounts[_] = X.longs === String ? FA.Long.prototype.toString.call(O.bucketCounts[_]) : X.longs === Number ? new FA.LongBits(O.bucketCounts[_].low >>> 0, O.bucketCounts[_].high >>> 0).toNumber(!0) : O.bucketCounts[_];
                }
                return $;
              }, H.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, H.getTypeUrl = function (O) {
                if (O === void 0) O = "type.googleapis.com";
                return O + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets";
              }, H;
            }(), z;
          }(), Y.SummaryDataPoint = function () {
            function z(w) {
              if (this.attributes = [], this.quantileValues = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.attributes = FA.emptyArray, z.prototype.startTimeUnixNano = null, z.prototype.timeUnixNano = null, z.prototype.count = null, z.prototype.sum = null, z.prototype.quantileValues = FA.emptyArray, z.prototype.flags = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.startTimeUnixNano != null && Object.hasOwnProperty.call(H, "startTimeUnixNano")) J.uint32(17).fixed64(H.startTimeUnixNano);
              if (H.timeUnixNano != null && Object.hasOwnProperty.call(H, "timeUnixNano")) J.uint32(25).fixed64(H.timeUnixNano);
              if (H.count != null && Object.hasOwnProperty.call(H, "count")) J.uint32(33).fixed64(H.count);
              if (H.sum != null && Object.hasOwnProperty.call(H, "sum")) J.uint32(41).double(H.sum);
              if (H.quantileValues != null && H.quantileValues.length) for (var O = 0; O < H.quantileValues.length; ++O) uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(H.quantileValues[O], J.uint32(50).fork()).ldelim();
              if (H.attributes != null && H.attributes.length) for (var O = 0; O < H.attributes.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.attributes[O], J.uint32(58).fork()).ldelim();
              if (H.flags != null && Object.hasOwnProperty.call(H, "flags")) J.uint32(64).uint32(H.flags);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.metrics.v1.SummaryDataPoint();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 7:
                    {
                      if (!($.attributes && $.attributes.length)) $.attributes = [];
                      $.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  case 2:
                    {
                      $.startTimeUnixNano = H.fixed64();
                      break;
                    }
                  case 3:
                    {
                      $.timeUnixNano = H.fixed64();
                      break;
                    }
                  case 4:
                    {
                      $.count = H.fixed64();
                      break;
                    }
                  case 5:
                    {
                      $.sum = H.double();
                      break;
                    }
                  case 6:
                    {
                      if (!($.quantileValues && $.quantileValues.length)) $.quantileValues = [];
                      $.quantileValues.push(uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(H, H.uint32()));
                      break;
                    }
                  case 8:
                    {
                      $.flags = H.uint32();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.attributes != null && H.hasOwnProperty("attributes")) {
                if (!Array.isArray(H.attributes)) return "attributes: array expected";
                for (var J = 0; J < H.attributes.length; ++J) {
                  var O = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.attributes[J]);
                  if (O) return "attributes." + O;
                }
              }
              if (H.startTimeUnixNano != null && H.hasOwnProperty("startTimeUnixNano")) {
                if (!FA.isInteger(H.startTimeUnixNano) && !(H.startTimeUnixNano && FA.isInteger(H.startTimeUnixNano.low) && FA.isInteger(H.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (H.timeUnixNano != null && H.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(H.timeUnixNano) && !(H.timeUnixNano && FA.isInteger(H.timeUnixNano.low) && FA.isInteger(H.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (H.count != null && H.hasOwnProperty("count")) {
                if (!FA.isInteger(H.count) && !(H.count && FA.isInteger(H.count.low) && FA.isInteger(H.count.high))) return "count: integer|Long expected";
              }
              if (H.sum != null && H.hasOwnProperty("sum")) {
                if (typeof H.sum !== "number") return "sum: number expected";
              }
              if (H.quantileValues != null && H.hasOwnProperty("quantileValues")) {
                if (!Array.isArray(H.quantileValues)) return "quantileValues: array expected";
                for (var J = 0; J < H.quantileValues.length; ++J) {
                  var O = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(H.quantileValues[J]);
                  if (O) return "quantileValues." + O;
                }
              }
              if (H.flags != null && H.hasOwnProperty("flags")) {
                if (!FA.isInteger(H.flags)) return "flags: integer expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.metrics.v1.SummaryDataPoint) return H;
              var J = new uA.opentelemetry.proto.metrics.v1.SummaryDataPoint();
              if (H.attributes) {
                if (!Array.isArray(H.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                J.attributes = [];
                for (var O = 0; O < H.attributes.length; ++O) {
                  if (typeof H.attributes[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                  J.attributes[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.attributes[O]);
                }
              }
              if (H.startTimeUnixNano != null) {
                if (FA.Long) (J.startTimeUnixNano = FA.Long.fromValue(H.startTimeUnixNano)).unsigned = !1;else if (typeof H.startTimeUnixNano === "string") J.startTimeUnixNano = parseInt(H.startTimeUnixNano, 10);else if (typeof H.startTimeUnixNano === "number") J.startTimeUnixNano = H.startTimeUnixNano;else if (typeof H.startTimeUnixNano === "object") J.startTimeUnixNano = new FA.LongBits(H.startTimeUnixNano.low >>> 0, H.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (H.timeUnixNano != null) {
                if (FA.Long) (J.timeUnixNano = FA.Long.fromValue(H.timeUnixNano)).unsigned = !1;else if (typeof H.timeUnixNano === "string") J.timeUnixNano = parseInt(H.timeUnixNano, 10);else if (typeof H.timeUnixNano === "number") J.timeUnixNano = H.timeUnixNano;else if (typeof H.timeUnixNano === "object") J.timeUnixNano = new FA.LongBits(H.timeUnixNano.low >>> 0, H.timeUnixNano.high >>> 0).toNumber();
              }
              if (H.count != null) {
                if (FA.Long) (J.count = FA.Long.fromValue(H.count)).unsigned = !1;else if (typeof H.count === "string") J.count = parseInt(H.count, 10);else if (typeof H.count === "number") J.count = H.count;else if (typeof H.count === "object") J.count = new FA.LongBits(H.count.low >>> 0, H.count.high >>> 0).toNumber();
              }
              if (H.sum != null) J.sum = Number(H.sum);
              if (H.quantileValues) {
                if (!Array.isArray(H.quantileValues)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                J.quantileValues = [];
                for (var O = 0; O < H.quantileValues.length; ++O) {
                  if (typeof H.quantileValues[O] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                  J.quantileValues[O] = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(H.quantileValues[O]);
                }
              }
              if (H.flags != null) J.flags = H.flags >>> 0;
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.quantileValues = [], O.attributes = [];
              if (J.defaults) {
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.startTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.startTimeUnixNano = J.longs === String ? "0" : 0;
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.timeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.timeUnixNano = J.longs === String ? "0" : 0;
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.count = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.count = J.longs === String ? "0" : 0;
                O.sum = 0, O.flags = 0;
              }
              if (H.startTimeUnixNano != null && H.hasOwnProperty("startTimeUnixNano")) if (typeof H.startTimeUnixNano === "number") O.startTimeUnixNano = J.longs === String ? String(H.startTimeUnixNano) : H.startTimeUnixNano;else O.startTimeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.startTimeUnixNano) : J.longs === Number ? new FA.LongBits(H.startTimeUnixNano.low >>> 0, H.startTimeUnixNano.high >>> 0).toNumber() : H.startTimeUnixNano;
              if (H.timeUnixNano != null && H.hasOwnProperty("timeUnixNano")) if (typeof H.timeUnixNano === "number") O.timeUnixNano = J.longs === String ? String(H.timeUnixNano) : H.timeUnixNano;else O.timeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.timeUnixNano) : J.longs === Number ? new FA.LongBits(H.timeUnixNano.low >>> 0, H.timeUnixNano.high >>> 0).toNumber() : H.timeUnixNano;
              if (H.count != null && H.hasOwnProperty("count")) if (typeof H.count === "number") O.count = J.longs === String ? String(H.count) : H.count;else O.count = J.longs === String ? FA.Long.prototype.toString.call(H.count) : J.longs === Number ? new FA.LongBits(H.count.low >>> 0, H.count.high >>> 0).toNumber() : H.count;
              if (H.sum != null && H.hasOwnProperty("sum")) O.sum = J.json && !isFinite(H.sum) ? String(H.sum) : H.sum;
              if (H.quantileValues && H.quantileValues.length) {
                O.quantileValues = [];
                for (var $ = 0; $ < H.quantileValues.length; ++$) O.quantileValues[$] = uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(H.quantileValues[$], J);
              }
              if (H.attributes && H.attributes.length) {
                O.attributes = [];
                for (var $ = 0; $ < H.attributes.length; ++$) O.attributes[$] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.attributes[$], J);
              }
              if (H.flags != null && H.hasOwnProperty("flags")) O.flags = H.flags;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.metrics.v1.SummaryDataPoint";
            }, z.ValueAtQuantile = function () {
              function w(H) {
                if (H) {
                  for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
                }
              }
              return w.prototype.quantile = null, w.prototype.value = null, w.create = function (J) {
                return new w(J);
              }, w.encode = function (J, O) {
                if (!O) O = l5.create();
                if (J.quantile != null && Object.hasOwnProperty.call(J, "quantile")) O.uint32(9).double(J.quantile);
                if (J.value != null && Object.hasOwnProperty.call(J, "value")) O.uint32(17).double(J.value);
                return O;
              }, w.encodeDelimited = function (J, O) {
                return this.encode(J, O).ldelim();
              }, w.decode = function (J, O, X) {
                if (!(J instanceof $6)) J = $6.create(J);
                var $ = O === void 0 ? J.len : J.pos + O,
                  _ = new uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                while (J.pos < $) {
                  var G = J.uint32();
                  if (G === X) break;
                  switch (G >>> 3) {
                    case 1:
                      {
                        _.quantile = J.double();
                        break;
                      }
                    case 2:
                      {
                        _.value = J.double();
                        break;
                      }
                    default:
                      J.skipType(G & 7);
                      break;
                  }
                }
                return _;
              }, w.decodeDelimited = function (J) {
                if (!(J instanceof $6)) J = new $6(J);
                return this.decode(J, J.uint32());
              }, w.verify = function (J) {
                if (typeof J !== "object" || J === null) return "object expected";
                if (J.quantile != null && J.hasOwnProperty("quantile")) {
                  if (typeof J.quantile !== "number") return "quantile: number expected";
                }
                if (J.value != null && J.hasOwnProperty("value")) {
                  if (typeof J.value !== "number") return "value: number expected";
                }
                return null;
              }, w.fromObject = function (J) {
                if (J instanceof uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile) return J;
                var O = new uA.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                if (J.quantile != null) O.quantile = Number(J.quantile);
                if (J.value != null) O.value = Number(J.value);
                return O;
              }, w.toObject = function (J, O) {
                if (!O) O = {};
                var X = {};
                if (O.defaults) X.quantile = 0, X.value = 0;
                if (J.quantile != null && J.hasOwnProperty("quantile")) X.quantile = O.json && !isFinite(J.quantile) ? String(J.quantile) : J.quantile;
                if (J.value != null && J.hasOwnProperty("value")) X.value = O.json && !isFinite(J.value) ? String(J.value) : J.value;
                return X;
              }, w.prototype.toJSON = function () {
                return this.constructor.toObject(this, oK.util.toJSONOptions);
              }, w.getTypeUrl = function (J) {
                if (J === void 0) J = "type.googleapis.com";
                return J + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile";
              }, w;
            }(), z;
          }(), Y.Exemplar = function () {
            function z(H) {
              if (this.filteredAttributes = [], H) {
                for (var J = Object.keys(H), O = 0; O < J.length; ++O) if (H[J[O]] != null) this[J[O]] = H[J[O]];
              }
            }
            z.prototype.filteredAttributes = FA.emptyArray, z.prototype.timeUnixNano = null, z.prototype.asDouble = null, z.prototype.asInt = null, z.prototype.spanId = null, z.prototype.traceId = null;
            var w;
            return Object.defineProperty(z.prototype, "value", {
              get: FA.oneOfGetter(w = ["asDouble", "asInt"]),
              set: FA.oneOfSetter(w)
            }), z.create = function (J) {
              return new z(J);
            }, z.encode = function (J, O) {
              if (!O) O = l5.create();
              if (J.timeUnixNano != null && Object.hasOwnProperty.call(J, "timeUnixNano")) O.uint32(17).fixed64(J.timeUnixNano);
              if (J.asDouble != null && Object.hasOwnProperty.call(J, "asDouble")) O.uint32(25).double(J.asDouble);
              if (J.spanId != null && Object.hasOwnProperty.call(J, "spanId")) O.uint32(34).bytes(J.spanId);
              if (J.traceId != null && Object.hasOwnProperty.call(J, "traceId")) O.uint32(42).bytes(J.traceId);
              if (J.asInt != null && Object.hasOwnProperty.call(J, "asInt")) O.uint32(49).sfixed64(J.asInt);
              if (J.filteredAttributes != null && J.filteredAttributes.length) for (var X = 0; X < J.filteredAttributes.length; ++X) uA.opentelemetry.proto.common.v1.KeyValue.encode(J.filteredAttributes[X], O.uint32(58).fork()).ldelim();
              return O;
            }, z.encodeDelimited = function (J, O) {
              return this.encode(J, O).ldelim();
            }, z.decode = function (J, O, X) {
              if (!(J instanceof $6)) J = $6.create(J);
              var $ = O === void 0 ? J.len : J.pos + O,
                _ = new uA.opentelemetry.proto.metrics.v1.Exemplar();
              while (J.pos < $) {
                var G = J.uint32();
                if (G === X) break;
                switch (G >>> 3) {
                  case 7:
                    {
                      if (!(_.filteredAttributes && _.filteredAttributes.length)) _.filteredAttributes = [];
                      _.filteredAttributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(J, J.uint32()));
                      break;
                    }
                  case 2:
                    {
                      _.timeUnixNano = J.fixed64();
                      break;
                    }
                  case 3:
                    {
                      _.asDouble = J.double();
                      break;
                    }
                  case 6:
                    {
                      _.asInt = J.sfixed64();
                      break;
                    }
                  case 4:
                    {
                      _.spanId = J.bytes();
                      break;
                    }
                  case 5:
                    {
                      _.traceId = J.bytes();
                      break;
                    }
                  default:
                    J.skipType(G & 7);
                    break;
                }
              }
              return _;
            }, z.decodeDelimited = function (J) {
              if (!(J instanceof $6)) J = new $6(J);
              return this.decode(J, J.uint32());
            }, z.verify = function (J) {
              if (typeof J !== "object" || J === null) return "object expected";
              var O = {};
              if (J.filteredAttributes != null && J.hasOwnProperty("filteredAttributes")) {
                if (!Array.isArray(J.filteredAttributes)) return "filteredAttributes: array expected";
                for (var X = 0; X < J.filteredAttributes.length; ++X) {
                  var $ = uA.opentelemetry.proto.common.v1.KeyValue.verify(J.filteredAttributes[X]);
                  if ($) return "filteredAttributes." + $;
                }
              }
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(J.timeUnixNano) && !(J.timeUnixNano && FA.isInteger(J.timeUnixNano.low) && FA.isInteger(J.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                if (O.value = 1, typeof J.asDouble !== "number") return "asDouble: number expected";
              }
              if (J.asInt != null && J.hasOwnProperty("asInt")) {
                if (O.value === 1) return "value: multiple values";
                if (O.value = 1, !FA.isInteger(J.asInt) && !(J.asInt && FA.isInteger(J.asInt.low) && FA.isInteger(J.asInt.high))) return "asInt: integer|Long expected";
              }
              if (J.spanId != null && J.hasOwnProperty("spanId")) {
                if (!(J.spanId && typeof J.spanId.length === "number" || FA.isString(J.spanId))) return "spanId: buffer expected";
              }
              if (J.traceId != null && J.hasOwnProperty("traceId")) {
                if (!(J.traceId && typeof J.traceId.length === "number" || FA.isString(J.traceId))) return "traceId: buffer expected";
              }
              return null;
            }, z.fromObject = function (J) {
              if (J instanceof uA.opentelemetry.proto.metrics.v1.Exemplar) return J;
              var O = new uA.opentelemetry.proto.metrics.v1.Exemplar();
              if (J.filteredAttributes) {
                if (!Array.isArray(J.filteredAttributes)) throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                O.filteredAttributes = [];
                for (var X = 0; X < J.filteredAttributes.length; ++X) {
                  if (typeof J.filteredAttributes[X] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                  O.filteredAttributes[X] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(J.filteredAttributes[X]);
                }
              }
              if (J.timeUnixNano != null) {
                if (FA.Long) (O.timeUnixNano = FA.Long.fromValue(J.timeUnixNano)).unsigned = !1;else if (typeof J.timeUnixNano === "string") O.timeUnixNano = parseInt(J.timeUnixNano, 10);else if (typeof J.timeUnixNano === "number") O.timeUnixNano = J.timeUnixNano;else if (typeof J.timeUnixNano === "object") O.timeUnixNano = new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber();
              }
              if (J.asDouble != null) O.asDouble = Number(J.asDouble);
              if (J.asInt != null) {
                if (FA.Long) (O.asInt = FA.Long.fromValue(J.asInt)).unsigned = !1;else if (typeof J.asInt === "string") O.asInt = parseInt(J.asInt, 10);else if (typeof J.asInt === "number") O.asInt = J.asInt;else if (typeof J.asInt === "object") O.asInt = new FA.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber();
              }
              if (J.spanId != null) {
                if (typeof J.spanId === "string") FA.base64.decode(J.spanId, O.spanId = FA.newBuffer(FA.base64.length(J.spanId)), 0);else if (J.spanId.length >= 0) O.spanId = J.spanId;
              }
              if (J.traceId != null) {
                if (typeof J.traceId === "string") FA.base64.decode(J.traceId, O.traceId = FA.newBuffer(FA.base64.length(J.traceId)), 0);else if (J.traceId.length >= 0) O.traceId = J.traceId;
              }
              return O;
            }, z.toObject = function (J, O) {
              if (!O) O = {};
              var X = {};
              if (O.arrays || O.defaults) X.filteredAttributes = [];
              if (O.defaults) {
                if (FA.Long) {
                  var $ = new FA.Long(0, 0, !1);
                  X.timeUnixNano = O.longs === String ? $.toString() : O.longs === Number ? $.toNumber() : $;
                } else X.timeUnixNano = O.longs === String ? "0" : 0;
                if (O.bytes === String) X.spanId = "";else if (X.spanId = [], O.bytes !== Array) X.spanId = FA.newBuffer(X.spanId);
                if (O.bytes === String) X.traceId = "";else if (X.traceId = [], O.bytes !== Array) X.traceId = FA.newBuffer(X.traceId);
              }
              if (J.timeUnixNano != null && J.hasOwnProperty("timeUnixNano")) if (typeof J.timeUnixNano === "number") X.timeUnixNano = O.longs === String ? String(J.timeUnixNano) : J.timeUnixNano;else X.timeUnixNano = O.longs === String ? FA.Long.prototype.toString.call(J.timeUnixNano) : O.longs === Number ? new FA.LongBits(J.timeUnixNano.low >>> 0, J.timeUnixNano.high >>> 0).toNumber() : J.timeUnixNano;
              if (J.asDouble != null && J.hasOwnProperty("asDouble")) {
                if (X.asDouble = O.json && !isFinite(J.asDouble) ? String(J.asDouble) : J.asDouble, O.oneofs) X.value = "asDouble";
              }
              if (J.spanId != null && J.hasOwnProperty("spanId")) X.spanId = O.bytes === String ? FA.base64.encode(J.spanId, 0, J.spanId.length) : O.bytes === Array ? Array.prototype.slice.call(J.spanId) : J.spanId;
              if (J.traceId != null && J.hasOwnProperty("traceId")) X.traceId = O.bytes === String ? FA.base64.encode(J.traceId, 0, J.traceId.length) : O.bytes === Array ? Array.prototype.slice.call(J.traceId) : J.traceId;
              if (J.asInt != null && J.hasOwnProperty("asInt")) {
                if (typeof J.asInt === "number") X.asInt = O.longs === String ? String(J.asInt) : J.asInt;else X.asInt = O.longs === String ? FA.Long.prototype.toString.call(J.asInt) : O.longs === Number ? new FA.LongBits(J.asInt.low >>> 0, J.asInt.high >>> 0).toNumber() : J.asInt;
                if (O.oneofs) X.value = "asInt";
              }
              if (J.filteredAttributes && J.filteredAttributes.length) {
                X.filteredAttributes = [];
                for (var _ = 0; _ < J.filteredAttributes.length; ++_) X.filteredAttributes[_] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(J.filteredAttributes[_], O);
              }
              return X;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (J) {
              if (J === void 0) J = "type.googleapis.com";
              return J + "/opentelemetry.proto.metrics.v1.Exemplar";
            }, z;
          }(), Y;
        }(), q;
      }(), K.logs = function () {
        var q = {};
        return q.v1 = function () {
          var Y = {};
          return Y.LogsData = function () {
            function z(w) {
              if (this.resourceLogs = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resourceLogs = FA.emptyArray, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resourceLogs != null && H.resourceLogs.length) for (var O = 0; O < H.resourceLogs.length; ++O) uA.opentelemetry.proto.logs.v1.ResourceLogs.encode(H.resourceLogs[O], J.uint32(10).fork()).ldelim();
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.logs.v1.LogsData();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      if (!($.resourceLogs && $.resourceLogs.length)) $.resourceLogs = [];
                      $.resourceLogs.push(uA.opentelemetry.proto.logs.v1.ResourceLogs.decode(H, H.uint32()));
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resourceLogs != null && H.hasOwnProperty("resourceLogs")) {
                if (!Array.isArray(H.resourceLogs)) return "resourceLogs: array expected";
                for (var J = 0; J < H.resourceLogs.length; ++J) {
                  var O = uA.opentelemetry.proto.logs.v1.ResourceLogs.verify(H.resourceLogs[J]);
                  if (O) return "resourceLogs." + O;
                }
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.logs.v1.LogsData) return H;
              var J = new uA.opentelemetry.proto.logs.v1.LogsData();
              if (H.resourceLogs) {
                if (!Array.isArray(H.resourceLogs)) throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                J.resourceLogs = [];
                for (var O = 0; O < H.resourceLogs.length; ++O) {
                  if (typeof H.resourceLogs[O] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                  J.resourceLogs[O] = uA.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(H.resourceLogs[O]);
                }
              }
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.resourceLogs = [];
              if (H.resourceLogs && H.resourceLogs.length) {
                O.resourceLogs = [];
                for (var X = 0; X < H.resourceLogs.length; ++X) O.resourceLogs[X] = uA.opentelemetry.proto.logs.v1.ResourceLogs.toObject(H.resourceLogs[X], J);
              }
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.logs.v1.LogsData";
            }, z;
          }(), Y.ResourceLogs = function () {
            function z(w) {
              if (this.scopeLogs = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.resource = null, z.prototype.scopeLogs = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.resource != null && Object.hasOwnProperty.call(H, "resource")) uA.opentelemetry.proto.resource.v1.Resource.encode(H.resource, J.uint32(10).fork()).ldelim();
              if (H.scopeLogs != null && H.scopeLogs.length) for (var O = 0; O < H.scopeLogs.length; ++O) uA.opentelemetry.proto.logs.v1.ScopeLogs.encode(H.scopeLogs[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.logs.v1.ResourceLogs();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.resource = uA.opentelemetry.proto.resource.v1.Resource.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.scopeLogs && $.scopeLogs.length)) $.scopeLogs = [];
                      $.scopeLogs.push(uA.opentelemetry.proto.logs.v1.ScopeLogs.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.resource != null && H.hasOwnProperty("resource")) {
                var J = uA.opentelemetry.proto.resource.v1.Resource.verify(H.resource);
                if (J) return "resource." + J;
              }
              if (H.scopeLogs != null && H.hasOwnProperty("scopeLogs")) {
                if (!Array.isArray(H.scopeLogs)) return "scopeLogs: array expected";
                for (var O = 0; O < H.scopeLogs.length; ++O) {
                  var J = uA.opentelemetry.proto.logs.v1.ScopeLogs.verify(H.scopeLogs[O]);
                  if (J) return "scopeLogs." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.logs.v1.ResourceLogs) return H;
              var J = new uA.opentelemetry.proto.logs.v1.ResourceLogs();
              if (H.resource != null) {
                if (typeof H.resource !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                J.resource = uA.opentelemetry.proto.resource.v1.Resource.fromObject(H.resource);
              }
              if (H.scopeLogs) {
                if (!Array.isArray(H.scopeLogs)) throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                J.scopeLogs = [];
                for (var O = 0; O < H.scopeLogs.length; ++O) {
                  if (typeof H.scopeLogs[O] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                  J.scopeLogs[O] = uA.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(H.scopeLogs[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.scopeLogs = [];
              if (J.defaults) O.resource = null, O.schemaUrl = "";
              if (H.resource != null && H.hasOwnProperty("resource")) O.resource = uA.opentelemetry.proto.resource.v1.Resource.toObject(H.resource, J);
              if (H.scopeLogs && H.scopeLogs.length) {
                O.scopeLogs = [];
                for (var X = 0; X < H.scopeLogs.length; ++X) O.scopeLogs[X] = uA.opentelemetry.proto.logs.v1.ScopeLogs.toObject(H.scopeLogs[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.logs.v1.ResourceLogs";
            }, z;
          }(), Y.ScopeLogs = function () {
            function z(w) {
              if (this.logRecords = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.scope = null, z.prototype.logRecords = FA.emptyArray, z.prototype.schemaUrl = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.scope != null && Object.hasOwnProperty.call(H, "scope")) uA.opentelemetry.proto.common.v1.InstrumentationScope.encode(H.scope, J.uint32(10).fork()).ldelim();
              if (H.logRecords != null && H.logRecords.length) for (var O = 0; O < H.logRecords.length; ++O) uA.opentelemetry.proto.logs.v1.LogRecord.encode(H.logRecords[O], J.uint32(18).fork()).ldelim();
              if (H.schemaUrl != null && Object.hasOwnProperty.call(H, "schemaUrl")) J.uint32(26).string(H.schemaUrl);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.logs.v1.ScopeLogs();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.decode(H, H.uint32());
                      break;
                    }
                  case 2:
                    {
                      if (!($.logRecords && $.logRecords.length)) $.logRecords = [];
                      $.logRecords.push(uA.opentelemetry.proto.logs.v1.LogRecord.decode(H, H.uint32()));
                      break;
                    }
                  case 3:
                    {
                      $.schemaUrl = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.scope != null && H.hasOwnProperty("scope")) {
                var J = uA.opentelemetry.proto.common.v1.InstrumentationScope.verify(H.scope);
                if (J) return "scope." + J;
              }
              if (H.logRecords != null && H.hasOwnProperty("logRecords")) {
                if (!Array.isArray(H.logRecords)) return "logRecords: array expected";
                for (var O = 0; O < H.logRecords.length; ++O) {
                  var J = uA.opentelemetry.proto.logs.v1.LogRecord.verify(H.logRecords[O]);
                  if (J) return "logRecords." + J;
                }
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) {
                if (!FA.isString(H.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.logs.v1.ScopeLogs) return H;
              var J = new uA.opentelemetry.proto.logs.v1.ScopeLogs();
              if (H.scope != null) {
                if (typeof H.scope !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                J.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(H.scope);
              }
              if (H.logRecords) {
                if (!Array.isArray(H.logRecords)) throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                J.logRecords = [];
                for (var O = 0; O < H.logRecords.length; ++O) {
                  if (typeof H.logRecords[O] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                  J.logRecords[O] = uA.opentelemetry.proto.logs.v1.LogRecord.fromObject(H.logRecords[O]);
                }
              }
              if (H.schemaUrl != null) J.schemaUrl = String(H.schemaUrl);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.logRecords = [];
              if (J.defaults) O.scope = null, O.schemaUrl = "";
              if (H.scope != null && H.hasOwnProperty("scope")) O.scope = uA.opentelemetry.proto.common.v1.InstrumentationScope.toObject(H.scope, J);
              if (H.logRecords && H.logRecords.length) {
                O.logRecords = [];
                for (var X = 0; X < H.logRecords.length; ++X) O.logRecords[X] = uA.opentelemetry.proto.logs.v1.LogRecord.toObject(H.logRecords[X], J);
              }
              if (H.schemaUrl != null && H.hasOwnProperty("schemaUrl")) O.schemaUrl = H.schemaUrl;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.logs.v1.ScopeLogs";
            }, z;
          }(), Y.SeverityNumber = function () {
            var z = {},
              w = Object.create(z);
            return w[z[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0, w[z[1] = "SEVERITY_NUMBER_TRACE"] = 1, w[z[2] = "SEVERITY_NUMBER_TRACE2"] = 2, w[z[3] = "SEVERITY_NUMBER_TRACE3"] = 3, w[z[4] = "SEVERITY_NUMBER_TRACE4"] = 4, w[z[5] = "SEVERITY_NUMBER_DEBUG"] = 5, w[z[6] = "SEVERITY_NUMBER_DEBUG2"] = 6, w[z[7] = "SEVERITY_NUMBER_DEBUG3"] = 7, w[z[8] = "SEVERITY_NUMBER_DEBUG4"] = 8, w[z[9] = "SEVERITY_NUMBER_INFO"] = 9, w[z[10] = "SEVERITY_NUMBER_INFO2"] = 10, w[z[11] = "SEVERITY_NUMBER_INFO3"] = 11, w[z[12] = "SEVERITY_NUMBER_INFO4"] = 12, w[z[13] = "SEVERITY_NUMBER_WARN"] = 13, w[z[14] = "SEVERITY_NUMBER_WARN2"] = 14, w[z[15] = "SEVERITY_NUMBER_WARN3"] = 15, w[z[16] = "SEVERITY_NUMBER_WARN4"] = 16, w[z[17] = "SEVERITY_NUMBER_ERROR"] = 17, w[z[18] = "SEVERITY_NUMBER_ERROR2"] = 18, w[z[19] = "SEVERITY_NUMBER_ERROR3"] = 19, w[z[20] = "SEVERITY_NUMBER_ERROR4"] = 20, w[z[21] = "SEVERITY_NUMBER_FATAL"] = 21, w[z[22] = "SEVERITY_NUMBER_FATAL2"] = 22, w[z[23] = "SEVERITY_NUMBER_FATAL3"] = 23, w[z[24] = "SEVERITY_NUMBER_FATAL4"] = 24, w;
          }(), Y.LogRecordFlags = function () {
            var z = {},
              w = Object.create(z);
            return w[z[0] = "LOG_RECORD_FLAGS_DO_NOT_USE"] = 0, w[z[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK"] = 255, w;
          }(), Y.LogRecord = function () {
            function z(w) {
              if (this.attributes = [], w) {
                for (var H = Object.keys(w), J = 0; J < H.length; ++J) if (w[H[J]] != null) this[H[J]] = w[H[J]];
              }
            }
            return z.prototype.timeUnixNano = null, z.prototype.observedTimeUnixNano = null, z.prototype.severityNumber = null, z.prototype.severityText = null, z.prototype.body = null, z.prototype.attributes = FA.emptyArray, z.prototype.droppedAttributesCount = null, z.prototype.flags = null, z.prototype.traceId = null, z.prototype.spanId = null, z.prototype.eventName = null, z.create = function (H) {
              return new z(H);
            }, z.encode = function (H, J) {
              if (!J) J = l5.create();
              if (H.timeUnixNano != null && Object.hasOwnProperty.call(H, "timeUnixNano")) J.uint32(9).fixed64(H.timeUnixNano);
              if (H.severityNumber != null && Object.hasOwnProperty.call(H, "severityNumber")) J.uint32(16).int32(H.severityNumber);
              if (H.severityText != null && Object.hasOwnProperty.call(H, "severityText")) J.uint32(26).string(H.severityText);
              if (H.body != null && Object.hasOwnProperty.call(H, "body")) uA.opentelemetry.proto.common.v1.AnyValue.encode(H.body, J.uint32(42).fork()).ldelim();
              if (H.attributes != null && H.attributes.length) for (var O = 0; O < H.attributes.length; ++O) uA.opentelemetry.proto.common.v1.KeyValue.encode(H.attributes[O], J.uint32(50).fork()).ldelim();
              if (H.droppedAttributesCount != null && Object.hasOwnProperty.call(H, "droppedAttributesCount")) J.uint32(56).uint32(H.droppedAttributesCount);
              if (H.flags != null && Object.hasOwnProperty.call(H, "flags")) J.uint32(69).fixed32(H.flags);
              if (H.traceId != null && Object.hasOwnProperty.call(H, "traceId")) J.uint32(74).bytes(H.traceId);
              if (H.spanId != null && Object.hasOwnProperty.call(H, "spanId")) J.uint32(82).bytes(H.spanId);
              if (H.observedTimeUnixNano != null && Object.hasOwnProperty.call(H, "observedTimeUnixNano")) J.uint32(89).fixed64(H.observedTimeUnixNano);
              if (H.eventName != null && Object.hasOwnProperty.call(H, "eventName")) J.uint32(98).string(H.eventName);
              return J;
            }, z.encodeDelimited = function (H, J) {
              return this.encode(H, J).ldelim();
            }, z.decode = function (H, J, O) {
              if (!(H instanceof $6)) H = $6.create(H);
              var X = J === void 0 ? H.len : H.pos + J,
                $ = new uA.opentelemetry.proto.logs.v1.LogRecord();
              while (H.pos < X) {
                var _ = H.uint32();
                if (_ === O) break;
                switch (_ >>> 3) {
                  case 1:
                    {
                      $.timeUnixNano = H.fixed64();
                      break;
                    }
                  case 11:
                    {
                      $.observedTimeUnixNano = H.fixed64();
                      break;
                    }
                  case 2:
                    {
                      $.severityNumber = H.int32();
                      break;
                    }
                  case 3:
                    {
                      $.severityText = H.string();
                      break;
                    }
                  case 5:
                    {
                      $.body = uA.opentelemetry.proto.common.v1.AnyValue.decode(H, H.uint32());
                      break;
                    }
                  case 6:
                    {
                      if (!($.attributes && $.attributes.length)) $.attributes = [];
                      $.attributes.push(uA.opentelemetry.proto.common.v1.KeyValue.decode(H, H.uint32()));
                      break;
                    }
                  case 7:
                    {
                      $.droppedAttributesCount = H.uint32();
                      break;
                    }
                  case 8:
                    {
                      $.flags = H.fixed32();
                      break;
                    }
                  case 9:
                    {
                      $.traceId = H.bytes();
                      break;
                    }
                  case 10:
                    {
                      $.spanId = H.bytes();
                      break;
                    }
                  case 12:
                    {
                      $.eventName = H.string();
                      break;
                    }
                  default:
                    H.skipType(_ & 7);
                    break;
                }
              }
              return $;
            }, z.decodeDelimited = function (H) {
              if (!(H instanceof $6)) H = new $6(H);
              return this.decode(H, H.uint32());
            }, z.verify = function (H) {
              if (typeof H !== "object" || H === null) return "object expected";
              if (H.timeUnixNano != null && H.hasOwnProperty("timeUnixNano")) {
                if (!FA.isInteger(H.timeUnixNano) && !(H.timeUnixNano && FA.isInteger(H.timeUnixNano.low) && FA.isInteger(H.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (H.observedTimeUnixNano != null && H.hasOwnProperty("observedTimeUnixNano")) {
                if (!FA.isInteger(H.observedTimeUnixNano) && !(H.observedTimeUnixNano && FA.isInteger(H.observedTimeUnixNano.low) && FA.isInteger(H.observedTimeUnixNano.high))) return "observedTimeUnixNano: integer|Long expected";
              }
              if (H.severityNumber != null && H.hasOwnProperty("severityNumber")) switch (H.severityNumber) {
                default:
                  return "severityNumber: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                  break;
              }
              if (H.severityText != null && H.hasOwnProperty("severityText")) {
                if (!FA.isString(H.severityText)) return "severityText: string expected";
              }
              if (H.body != null && H.hasOwnProperty("body")) {
                var J = uA.opentelemetry.proto.common.v1.AnyValue.verify(H.body);
                if (J) return "body." + J;
              }
              if (H.attributes != null && H.hasOwnProperty("attributes")) {
                if (!Array.isArray(H.attributes)) return "attributes: array expected";
                for (var O = 0; O < H.attributes.length; ++O) {
                  var J = uA.opentelemetry.proto.common.v1.KeyValue.verify(H.attributes[O]);
                  if (J) return "attributes." + J;
                }
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) {
                if (!FA.isInteger(H.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (H.flags != null && H.hasOwnProperty("flags")) {
                if (!FA.isInteger(H.flags)) return "flags: integer expected";
              }
              if (H.traceId != null && H.hasOwnProperty("traceId")) {
                if (!(H.traceId && typeof H.traceId.length === "number" || FA.isString(H.traceId))) return "traceId: buffer expected";
              }
              if (H.spanId != null && H.hasOwnProperty("spanId")) {
                if (!(H.spanId && typeof H.spanId.length === "number" || FA.isString(H.spanId))) return "spanId: buffer expected";
              }
              if (H.eventName != null && H.hasOwnProperty("eventName")) {
                if (!FA.isString(H.eventName)) return "eventName: string expected";
              }
              return null;
            }, z.fromObject = function (H) {
              if (H instanceof uA.opentelemetry.proto.logs.v1.LogRecord) return H;
              var J = new uA.opentelemetry.proto.logs.v1.LogRecord();
              if (H.timeUnixNano != null) {
                if (FA.Long) (J.timeUnixNano = FA.Long.fromValue(H.timeUnixNano)).unsigned = !1;else if (typeof H.timeUnixNano === "string") J.timeUnixNano = parseInt(H.timeUnixNano, 10);else if (typeof H.timeUnixNano === "number") J.timeUnixNano = H.timeUnixNano;else if (typeof H.timeUnixNano === "object") J.timeUnixNano = new FA.LongBits(H.timeUnixNano.low >>> 0, H.timeUnixNano.high >>> 0).toNumber();
              }
              if (H.observedTimeUnixNano != null) {
                if (FA.Long) (J.observedTimeUnixNano = FA.Long.fromValue(H.observedTimeUnixNano)).unsigned = !1;else if (typeof H.observedTimeUnixNano === "string") J.observedTimeUnixNano = parseInt(H.observedTimeUnixNano, 10);else if (typeof H.observedTimeUnixNano === "number") J.observedTimeUnixNano = H.observedTimeUnixNano;else if (typeof H.observedTimeUnixNano === "object") J.observedTimeUnixNano = new FA.LongBits(H.observedTimeUnixNano.low >>> 0, H.observedTimeUnixNano.high >>> 0).toNumber();
              }
              switch (H.severityNumber) {
                default:
                  if (typeof H.severityNumber === "number") {
                    J.severityNumber = H.severityNumber;
                    break;
                  }
                  break;
                case "SEVERITY_NUMBER_UNSPECIFIED":
                case 0:
                  J.severityNumber = 0;
                  break;
                case "SEVERITY_NUMBER_TRACE":
                case 1:
                  J.severityNumber = 1;
                  break;
                case "SEVERITY_NUMBER_TRACE2":
                case 2:
                  J.severityNumber = 2;
                  break;
                case "SEVERITY_NUMBER_TRACE3":
                case 3:
                  J.severityNumber = 3;
                  break;
                case "SEVERITY_NUMBER_TRACE4":
                case 4:
                  J.severityNumber = 4;
                  break;
                case "SEVERITY_NUMBER_DEBUG":
                case 5:
                  J.severityNumber = 5;
                  break;
                case "SEVERITY_NUMBER_DEBUG2":
                case 6:
                  J.severityNumber = 6;
                  break;
                case "SEVERITY_NUMBER_DEBUG3":
                case 7:
                  J.severityNumber = 7;
                  break;
                case "SEVERITY_NUMBER_DEBUG4":
                case 8:
                  J.severityNumber = 8;
                  break;
                case "SEVERITY_NUMBER_INFO":
                case 9:
                  J.severityNumber = 9;
                  break;
                case "SEVERITY_NUMBER_INFO2":
                case 10:
                  J.severityNumber = 10;
                  break;
                case "SEVERITY_NUMBER_INFO3":
                case 11:
                  J.severityNumber = 11;
                  break;
                case "SEVERITY_NUMBER_INFO4":
                case 12:
                  J.severityNumber = 12;
                  break;
                case "SEVERITY_NUMBER_WARN":
                case 13:
                  J.severityNumber = 13;
                  break;
                case "SEVERITY_NUMBER_WARN2":
                case 14:
                  J.severityNumber = 14;
                  break;
                case "SEVERITY_NUMBER_WARN3":
                case 15:
                  J.severityNumber = 15;
                  break;
                case "SEVERITY_NUMBER_WARN4":
                case 16:
                  J.severityNumber = 16;
                  break;
                case "SEVERITY_NUMBER_ERROR":
                case 17:
                  J.severityNumber = 17;
                  break;
                case "SEVERITY_NUMBER_ERROR2":
                case 18:
                  J.severityNumber = 18;
                  break;
                case "SEVERITY_NUMBER_ERROR3":
                case 19:
                  J.severityNumber = 19;
                  break;
                case "SEVERITY_NUMBER_ERROR4":
                case 20:
                  J.severityNumber = 20;
                  break;
                case "SEVERITY_NUMBER_FATAL":
                case 21:
                  J.severityNumber = 21;
                  break;
                case "SEVERITY_NUMBER_FATAL2":
                case 22:
                  J.severityNumber = 22;
                  break;
                case "SEVERITY_NUMBER_FATAL3":
                case 23:
                  J.severityNumber = 23;
                  break;
                case "SEVERITY_NUMBER_FATAL4":
                case 24:
                  J.severityNumber = 24;
                  break;
              }
              if (H.severityText != null) J.severityText = String(H.severityText);
              if (H.body != null) {
                if (typeof H.body !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                J.body = uA.opentelemetry.proto.common.v1.AnyValue.fromObject(H.body);
              }
              if (H.attributes) {
                if (!Array.isArray(H.attributes)) throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                J.attributes = [];
                for (var O = 0; O < H.attributes.length; ++O) {
                  if (typeof H.attributes[O] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                  J.attributes[O] = uA.opentelemetry.proto.common.v1.KeyValue.fromObject(H.attributes[O]);
                }
              }
              if (H.droppedAttributesCount != null) J.droppedAttributesCount = H.droppedAttributesCount >>> 0;
              if (H.flags != null) J.flags = H.flags >>> 0;
              if (H.traceId != null) {
                if (typeof H.traceId === "string") FA.base64.decode(H.traceId, J.traceId = FA.newBuffer(FA.base64.length(H.traceId)), 0);else if (H.traceId.length >= 0) J.traceId = H.traceId;
              }
              if (H.spanId != null) {
                if (typeof H.spanId === "string") FA.base64.decode(H.spanId, J.spanId = FA.newBuffer(FA.base64.length(H.spanId)), 0);else if (H.spanId.length >= 0) J.spanId = H.spanId;
              }
              if (H.eventName != null) J.eventName = String(H.eventName);
              return J;
            }, z.toObject = function (H, J) {
              if (!J) J = {};
              var O = {};
              if (J.arrays || J.defaults) O.attributes = [];
              if (J.defaults) {
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.timeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.timeUnixNano = J.longs === String ? "0" : 0;
                if (O.severityNumber = J.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0, O.severityText = "", O.body = null, O.droppedAttributesCount = 0, O.flags = 0, J.bytes === String) O.traceId = "";else if (O.traceId = [], J.bytes !== Array) O.traceId = FA.newBuffer(O.traceId);
                if (J.bytes === String) O.spanId = "";else if (O.spanId = [], J.bytes !== Array) O.spanId = FA.newBuffer(O.spanId);
                if (FA.Long) {
                  var X = new FA.Long(0, 0, !1);
                  O.observedTimeUnixNano = J.longs === String ? X.toString() : J.longs === Number ? X.toNumber() : X;
                } else O.observedTimeUnixNano = J.longs === String ? "0" : 0;
                O.eventName = "";
              }
              if (H.timeUnixNano != null && H.hasOwnProperty("timeUnixNano")) if (typeof H.timeUnixNano === "number") O.timeUnixNano = J.longs === String ? String(H.timeUnixNano) : H.timeUnixNano;else O.timeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.timeUnixNano) : J.longs === Number ? new FA.LongBits(H.timeUnixNano.low >>> 0, H.timeUnixNano.high >>> 0).toNumber() : H.timeUnixNano;
              if (H.severityNumber != null && H.hasOwnProperty("severityNumber")) O.severityNumber = J.enums === String ? uA.opentelemetry.proto.logs.v1.SeverityNumber[H.severityNumber] === void 0 ? H.severityNumber : uA.opentelemetry.proto.logs.v1.SeverityNumber[H.severityNumber] : H.severityNumber;
              if (H.severityText != null && H.hasOwnProperty("severityText")) O.severityText = H.severityText;
              if (H.body != null && H.hasOwnProperty("body")) O.body = uA.opentelemetry.proto.common.v1.AnyValue.toObject(H.body, J);
              if (H.attributes && H.attributes.length) {
                O.attributes = [];
                for (var $ = 0; $ < H.attributes.length; ++$) O.attributes[$] = uA.opentelemetry.proto.common.v1.KeyValue.toObject(H.attributes[$], J);
              }
              if (H.droppedAttributesCount != null && H.hasOwnProperty("droppedAttributesCount")) O.droppedAttributesCount = H.droppedAttributesCount;
              if (H.flags != null && H.hasOwnProperty("flags")) O.flags = H.flags;
              if (H.traceId != null && H.hasOwnProperty("traceId")) O.traceId = J.bytes === String ? FA.base64.encode(H.traceId, 0, H.traceId.length) : J.bytes === Array ? Array.prototype.slice.call(H.traceId) : H.traceId;
              if (H.spanId != null && H.hasOwnProperty("spanId")) O.spanId = J.bytes === String ? FA.base64.encode(H.spanId, 0, H.spanId.length) : J.bytes === Array ? Array.prototype.slice.call(H.spanId) : H.spanId;
              if (H.observedTimeUnixNano != null && H.hasOwnProperty("observedTimeUnixNano")) if (typeof H.observedTimeUnixNano === "number") O.observedTimeUnixNano = J.longs === String ? String(H.observedTimeUnixNano) : H.observedTimeUnixNano;else O.observedTimeUnixNano = J.longs === String ? FA.Long.prototype.toString.call(H.observedTimeUnixNano) : J.longs === Number ? new FA.LongBits(H.observedTimeUnixNano.low >>> 0, H.observedTimeUnixNano.high >>> 0).toNumber() : H.observedTimeUnixNano;
              if (H.eventName != null && H.hasOwnProperty("eventName")) O.eventName = H.eventName;
              return O;
            }, z.prototype.toJSON = function () {
              return this.constructor.toObject(this, oK.util.toJSONOptions);
            }, z.getTypeUrl = function (H) {
              if (H === void 0) H = "type.googleapis.com";
              return H + "/opentelemetry.proto.logs.v1.LogRecord";
            }, z;
          }(), Y;
        }(), q;
      }(), K;
    }(), A;
  }();
  Ig7.exports = uA;
});

// Register to shared state
__$.ZD1 = ZD1;
