// Module: p1K
// Dependencies: Uz, sR6, tR6, C1K, Yy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var p1K = v(zy6 => {
  Object.defineProperty(zy6, "__esModule", {
    value: !0
  });
  zy6.EventFactory = void 0;
  var f9 = __$.Uz();
  f9.__exportStar(__$.sR6(), zy6);
  var Q1K = __$.tR6(),
    wZ2 = __$.C1K(),
    HZ2 = __$.Yy6(),
    JZ2 = function () {
      function A(K) {
        this.user = K.user, this.createMessageId = K.createMessageId;
      }
      return A.prototype.track = function (K, q, Y, z) {
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), {
          event: K,
          type: "track",
          properties: q !== null && q !== void 0 ? q : {},
          options: f9.__assign({}, Y),
          integrations: f9.__assign({}, z)
        }));
      }, A.prototype.page = function (K, q, Y, z, w) {
        var H,
          J = {
            type: "page",
            properties: f9.__assign({}, Y),
            options: f9.__assign({}, z),
            integrations: f9.__assign({}, w)
          };
        if (K !== null) J.category = K, J.properties = (H = J.properties) !== null && H !== void 0 ? H : {}, J.properties.category = K;
        if (q !== null) J.name = q;
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), J));
      }, A.prototype.screen = function (K, q, Y, z, w) {
        var H = {
          type: "screen",
          properties: f9.__assign({}, Y),
          options: f9.__assign({}, z),
          integrations: f9.__assign({}, w)
        };
        if (K !== null) H.category = K;
        if (q !== null) H.name = q;
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), H));
      }, A.prototype.identify = function (K, q, Y, z) {
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), {
          type: "identify",
          userId: K,
          traits: q !== null && q !== void 0 ? q : {},
          options: f9.__assign({}, Y),
          integrations: z
        }));
      }, A.prototype.group = function (K, q, Y, z) {
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), {
          type: "group",
          traits: q !== null && q !== void 0 ? q : {},
          options: f9.__assign({}, Y),
          integrations: f9.__assign({}, z),
          groupId: K
        }));
      }, A.prototype.alias = function (K, q, Y, z) {
        var w = {
          userId: K,
          type: "alias",
          options: f9.__assign({}, Y),
          integrations: f9.__assign({}, z)
        };
        if (q !== null) w.previousId = q;
        if (K === void 0) return this.normalize(f9.__assign(f9.__assign({}, w), this.baseEvent()));
        return this.normalize(f9.__assign(f9.__assign({}, this.baseEvent()), w));
      }, A.prototype.baseEvent = function () {
        var K = {
          integrations: {},
          options: {}
        };
        if (!this.user) return K;
        var q = this.user;
        if (q.id()) K.userId = q.id();
        if (q.anonymousId()) K.anonymousId = q.anonymousId();
        return K;
      }, A.prototype.context = function (K) {
        var q,
          Y = ["userId", "anonymousId", "timestamp"];
        delete K.integrations;
        var z = Object.keys(K),
          w = (q = K.context) !== null && q !== void 0 ? q : {},
          H = {};
        return z.forEach(function (J) {
          if (J === "context") return;
          if (Y.includes(J)) (0, Q1K.dset)(H, J, K[J]);else (0, Q1K.dset)(w, J, K[J]);
        }), [w, H];
      }, A.prototype.normalize = function (K) {
        var q,
          Y,
          z = Object.keys((q = K.integrations) !== null && q !== void 0 ? q : {}).reduce(function (Z, W) {
            var D, j;
            return f9.__assign(f9.__assign({}, Z), (D = {}, D[W] = Boolean((j = K.integrations) === null || j === void 0 ? void 0 : j[W]), D));
          }, {});
        K.options = (0, wZ2.pickBy)(K.options || {}, function (Z, W) {
          return W !== void 0;
        });
        var w = f9.__assign(f9.__assign({}, z), (Y = K.options) === null || Y === void 0 ? void 0 : Y.integrations),
          H = K.options ? this.context(K.options) : [],
          J = H[0],
          O = H[1],
          X = K.options,
          $ = f9.__rest(K, ["options"]),
          _ = f9.__assign(f9.__assign(f9.__assign({
            timestamp: new Date()
          }, $), {
            integrations: w,
            context: J
          }), O),
          G = f9.__assign(f9.__assign({}, _), {
            messageId: this.createMessageId()
          });
        return (0, HZ2.validateEvent)(G), G;
      }, A;
    }();
  zy6.EventFactory = JZ2;
});

// Register to shared state
__$.p1K = p1K;
