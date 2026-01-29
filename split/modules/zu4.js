// Module: zu4
// Dependencies: TY1, ox, IY6, MSA, RY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zu4 = v((sjw, Yu4) => {
  var qL9 = CA("node:events"),
    FY1 = __$.TY1(),
    AC = __$.ox(),
    {
      runtimePlatformArch: YL9
    } = __$.IY6(),
    WM = __$.MSA(),
    Ku4 = YL9(),
    dY6 = WM.libvipsVersion(),
    or = WM.format();
  or.heif.output.alias = ["avif", "heic"];
  or.jpeg.output.alias = ["jpe", "jpg"];
  or.tiff.output.alias = ["tif"];
  or.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
  var zL9 = {
      nearest: "nearest",
      bilinear: "bilinear",
      bicubic: "bicubic",
      locallyBoundedBicubic: "lbb",
      nohalo: "nohalo",
      vertexSplitQuadraticBasisSpline: "vsqbs"
    },
    b$A = {
      vips: dY6.semver
    };
  if (!dY6.isGlobal) if (!dY6.isWasm) try {
    b$A = CA(`@img/sharp-${Ku4}/versions`);
  } catch (A) {
    try {
      b$A = CA(`@img/sharp-libvips-${Ku4}/versions`);
    } catch (K) {}
  } else try {
    b$A = (() => {
      throw new Error("Cannot require module " + "@img/sharp-wasm32/versions");
    })();
  } catch (A) {}
  b$A.sharp = __$.RY6().version;
  if (b$A.heif && or.heif) or.heif.input.fileSuffix = [".avif"], or.heif.output.alias = ["avif"];
  function qu4(A) {
    if (AC.bool(A)) {
      if (A) return WM.cache(50, 20, 100);else return WM.cache(0, 0, 0);
    } else if (AC.object(A)) return WM.cache(A.memory, A.files, A.items);else return WM.cache();
  }
  qu4(!0);
  function wL9(A) {
    return WM.concurrency(AC.integer(A) ? A : null);
  }
  if (FY1.familySync() === FY1.GLIBC && !WM._isUsingJemalloc()) WM.concurrency(1);else if (FY1.familySync() === FY1.MUSL && WM.concurrency() === 1024) WM.concurrency(CA("node:os").availableParallelism());
  var HL9 = new qL9.EventEmitter();
  function JL9() {
    return WM.counters();
  }
  function OL9(A) {
    return WM.simd(AC.bool(A) ? A : null);
  }
  function XL9(A) {
    if (AC.object(A)) {
      if (Array.isArray(A.operation) && A.operation.every(AC.string)) WM.block(A.operation, !0);else throw AC.invalidParameterError("operation", "Array<string>", A.operation);
    } else throw AC.invalidParameterError("options", "object", A);
  }
  function $L9(A) {
    if (AC.object(A)) {
      if (Array.isArray(A.operation) && A.operation.every(AC.string)) WM.block(A.operation, !1);else throw AC.invalidParameterError("operation", "Array<string>", A.operation);
    } else throw AC.invalidParameterError("options", "object", A);
  }
  Yu4.exports = function (A) {
    A.cache = qu4, A.concurrency = wL9, A.counters = JL9, A.simd = OL9, A.format = or, A.interpolators = zL9, A.versions = b$A, A.queue = HL9, A.block = XL9, A.unblock = $L9;
  };
});

// Register to shared state
__$.zu4 = zu4;
