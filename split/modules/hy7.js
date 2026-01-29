// Module: hy7
// Dependencies: CL7, fN6, _y7, Dy7, Py7, vy7, wL, wS, Ry7, hs

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hy7 = v((kDH, fB) => {
  var Sy7 = __$.CL7(),
    orY = __$.fN6(),
    pZ1 = __$._y7(),
    arY = __$.Dy7(),
    srY = __$.Py7(),
    trY = __$.vy7(),
    GDA = __$.wL(),
    {
      JSONParserError: erY,
      InvalidPointerError: AoY,
      MissingPointerError: KoY,
      ResolverError: qoY,
      ParserError: YoY,
      UnmatchedParserError: zoY,
      UnmatchedResolverError: woY,
      isHandledError: HoY,
      JSONParserErrorGroup: yy7
    } = __$.wS(),
    JS = __$.Ry7(),
    {
      ono: Iy7
    } = __$.hs();
  fB.exports = VB;
  fB.exports.default = VB;
  fB.exports.JSONParserError = erY;
  fB.exports.InvalidPointerError = AoY;
  fB.exports.MissingPointerError = KoY;
  fB.exports.ResolverError = qoY;
  fB.exports.ParserError = YoY;
  fB.exports.UnmatchedParserError = zoY;
  fB.exports.UnmatchedResolverError = woY;
  function VB() {
    this.schema = null, this.$refs = new Sy7();
  }
  VB.parse = function (K, q, Y, z) {
    let H = new this();
    return H.parse.apply(H, arguments);
  };
  VB.prototype.parse = async function (K, q, Y, z) {
    let w = pZ1(arguments),
      H;
    if (!w.path && !w.schema) {
      let X = Iy7(`Expected a file path, URL, or object. Got ${w.path || w.schema}`);
      return JS(w.callback, Promise.reject(X));
    }
    this.schema = null, this.$refs = new Sy7();
    let J = "http";
    if (GDA.isFileSystemPath(w.path)) w.path = GDA.fromFileSystemPath(w.path), J = "file";
    if (w.path = GDA.resolve(GDA.cwd(), w.path), w.schema && typeof w.schema === "object") {
      let X = this.$refs._add(w.path);
      X.value = w.schema, X.pathType = J, H = Promise.resolve(w.schema);
    } else H = orY(w.path, this.$refs, w.options);
    let O = this;
    try {
      let X = await H;
      if (X !== null && typeof X === "object" && !Buffer.isBuffer(X)) return O.schema = X, JS(w.callback, Promise.resolve(O.schema));else if (w.options.continueOnError) return O.schema = null, JS(w.callback, Promise.resolve(O.schema));else throw Iy7.syntax(`"${O.$refs._root$Ref.path || X}" is not a valid JSON Schema`);
    } catch (X) {
      if (!w.options.continueOnError || !HoY(X)) return JS(w.callback, Promise.reject(X));
      if (this.$refs._$refs[GDA.stripHash(w.path)]) this.$refs._$refs[GDA.stripHash(w.path)].addError(X);
      return JS(w.callback, Promise.resolve(null));
    }
  };
  VB.resolve = function (K, q, Y, z) {
    let H = new this();
    return H.resolve.apply(H, arguments);
  };
  VB.prototype.resolve = async function (K, q, Y, z) {
    let w = this,
      H = pZ1(arguments);
    try {
      return await this.parse(H.path, H.schema, H.options), await arY(w, H.options), JT6(w), JS(H.callback, Promise.resolve(w.$refs));
    } catch (J) {
      return JS(H.callback, Promise.reject(J));
    }
  };
  VB.bundle = function (K, q, Y, z) {
    let H = new this();
    return H.bundle.apply(H, arguments);
  };
  VB.prototype.bundle = async function (K, q, Y, z) {
    let w = this,
      H = pZ1(arguments);
    try {
      return await this.resolve(H.path, H.schema, H.options), srY(w, H.options), JT6(w), JS(H.callback, Promise.resolve(w.schema));
    } catch (J) {
      return JS(H.callback, Promise.reject(J));
    }
  };
  VB.dereference = function (K, q, Y, z) {
    let H = new this();
    return H.dereference.apply(H, arguments);
  };
  VB.prototype.dereference = async function (K, q, Y, z) {
    let w = this,
      H = pZ1(arguments);
    try {
      return await this.resolve(H.path, H.schema, H.options), trY(w, H.options), JT6(w), JS(H.callback, Promise.resolve(w.schema));
    } catch (J) {
      return JS(H.callback, Promise.reject(J));
    }
  };
  function JT6(A) {
    if (yy7.getParserErrors(A).length > 0) throw new yy7(A);
  }
});

// Register to shared state
__$.hy7 = hy7;
