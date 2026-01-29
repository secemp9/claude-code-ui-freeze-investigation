// Module: Au4
// Dependencies: ox, MSA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Au4 = v((ajw, ex4) => {
  var pY6 = CA("node:path"),
    X1 = __$.ox(),
    h$A = __$.MSA(),
    ox4 = new Map([["heic", "heif"], ["heif", "heif"], ["avif", "avif"], ["jpeg", "jpeg"], ["jpg", "jpeg"], ["jpe", "jpeg"], ["tile", "tile"], ["dz", "tile"], ["png", "png"], ["raw", "raw"], ["tiff", "tiff"], ["tif", "tiff"], ["webp", "webp"], ["gif", "gif"], ["jp2", "jp2"], ["jpx", "jp2"], ["j2k", "jp2"], ["j2c", "jp2"], ["jxl", "jxl"]]),
    yC9 = /\.(jp[2x]|j2[kc])$/i,
    ax4 = () => Error("JP2 output requires libvips with support for OpenJPEG"),
    sx4 = A => 1 << 31 - Math.clz32(Math.ceil(Math.log2(A)));
  function IC9(A, K) {
    let q;
    if (!X1.string(A)) q = Error("Missing output file path");else if (X1.string(this.options.input.file) && pY6.resolve(this.options.input.file) === pY6.resolve(A)) q = Error("Cannot use same file for input and output");else if (yC9.test(pY6.extname(A)) && !this.constructor.format.jp2k.output.file) q = ax4();
    if (q) {
      if (X1.fn(K)) K(q);else return Promise.reject(q);
    } else {
      this.options.fileOut = A;
      let Y = Error();
      return this._pipeline(K, Y);
    }
    return this;
  }
  function SC9(A, K) {
    if (X1.object(A)) this._setBooleanOption("resolveWithObject", A.resolveWithObject);else if (this.options.resolveWithObject) this.options.resolveWithObject = !1;
    this.options.fileOut = "";
    let q = Error();
    return this._pipeline(X1.fn(A) ? A : K, q);
  }
  function hC9() {
    return this.options.keepMetadata |= 1, this;
  }
  function bC9(A) {
    if (X1.object(A)) {
      for (let [K, q] of Object.entries(A)) if (X1.object(q)) {
        for (let [Y, z] of Object.entries(q)) if (X1.string(z)) this.options.withExif[`exif-${K.toLowerCase()}-${Y}`] = z;else throw X1.invalidParameterError(`${K}.${Y}`, "string", z);
      } else throw X1.invalidParameterError(K, "object", q);
    } else throw X1.invalidParameterError("exif", "object", A);
    return this.options.withExifMerge = !1, this.keepExif();
  }
  function xC9(A) {
    return this.withExif(A), this.options.withExifMerge = !0, this;
  }
  function uC9() {
    return this.options.keepMetadata |= 8, this;
  }
  function BC9(A, K) {
    if (X1.string(A)) this.options.withIccProfile = A;else throw X1.invalidParameterError("icc", "string", A);
    if (this.keepIccProfile(), X1.object(K)) {
      if (X1.defined(K.attach)) if (X1.bool(K.attach)) {
        if (!K.attach) this.options.keepMetadata &= -9;
      } else throw X1.invalidParameterError("attach", "boolean", K.attach);
    }
    return this;
  }
  function mC9() {
    return this.options.keepMetadata = 31, this;
  }
  function gC9(A) {
    if (this.keepMetadata(), this.withIccProfile("srgb"), X1.object(A)) {
      if (X1.defined(A.orientation)) if (X1.integer(A.orientation) && X1.inRange(A.orientation, 1, 8)) this.options.withMetadataOrientation = A.orientation;else throw X1.invalidParameterError("orientation", "integer between 1 and 8", A.orientation);
      if (X1.defined(A.density)) if (X1.number(A.density) && A.density > 0) this.options.withMetadataDensity = A.density;else throw X1.invalidParameterError("density", "positive number", A.density);
      if (X1.defined(A.icc)) this.withIccProfile(A.icc);
      if (X1.defined(A.exif)) this.withExifMerge(A.exif);
    }
    return this;
  }
  function FC9(A, K) {
    let q = ox4.get((X1.object(A) && X1.string(A.id) ? A.id : A).toLowerCase());
    if (!q) throw X1.invalidParameterError("format", `one of: ${[...ox4.keys()].join(", ")}`, A);
    return this[q](K);
  }
  function QC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.jpegQuality = A.quality;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      if (X1.defined(A.progressive)) this._setBooleanOption("jpegProgressive", A.progressive);
      if (X1.defined(A.chromaSubsampling)) if (X1.string(A.chromaSubsampling) && X1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jpegChromaSubsampling = A.chromaSubsampling;else throw X1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling);
      let K = X1.bool(A.optimizeCoding) ? A.optimizeCoding : A.optimiseCoding;
      if (X1.defined(K)) this._setBooleanOption("jpegOptimiseCoding", K);
      if (X1.defined(A.mozjpeg)) if (X1.bool(A.mozjpeg)) {
        if (A.mozjpeg) this.options.jpegTrellisQuantisation = !0, this.options.jpegOvershootDeringing = !0, this.options.jpegOptimiseScans = !0, this.options.jpegProgressive = !0, this.options.jpegQuantisationTable = 3;
      } else throw X1.invalidParameterError("mozjpeg", "boolean", A.mozjpeg);
      let q = X1.bool(A.trellisQuantization) ? A.trellisQuantization : A.trellisQuantisation;
      if (X1.defined(q)) this._setBooleanOption("jpegTrellisQuantisation", q);
      if (X1.defined(A.overshootDeringing)) this._setBooleanOption("jpegOvershootDeringing", A.overshootDeringing);
      let Y = X1.bool(A.optimizeScans) ? A.optimizeScans : A.optimiseScans;
      if (X1.defined(Y)) {
        if (this._setBooleanOption("jpegOptimiseScans", Y), Y) this.options.jpegProgressive = !0;
      }
      let z = X1.number(A.quantizationTable) ? A.quantizationTable : A.quantisationTable;
      if (X1.defined(z)) if (X1.integer(z) && X1.inRange(z, 0, 8)) this.options.jpegQuantisationTable = z;else throw X1.invalidParameterError("quantisationTable", "integer between 0 and 8", z);
    }
    return this._updateFormatOut("jpeg", A);
  }
  function UC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.progressive)) this._setBooleanOption("pngProgressive", A.progressive);
      if (X1.defined(A.compressionLevel)) if (X1.integer(A.compressionLevel) && X1.inRange(A.compressionLevel, 0, 9)) this.options.pngCompressionLevel = A.compressionLevel;else throw X1.invalidParameterError("compressionLevel", "integer between 0 and 9", A.compressionLevel);
      if (X1.defined(A.adaptiveFiltering)) this._setBooleanOption("pngAdaptiveFiltering", A.adaptiveFiltering);
      let K = A.colours || A.colors;
      if (X1.defined(K)) if (X1.integer(K) && X1.inRange(K, 2, 256)) this.options.pngBitdepth = sx4(K);else throw X1.invalidParameterError("colours", "integer between 2 and 256", K);
      if (X1.defined(A.palette)) this._setBooleanOption("pngPalette", A.palette);else if ([A.quality, A.effort, A.colours, A.colors, A.dither].some(X1.defined)) this._setBooleanOption("pngPalette", !0);
      if (this.options.pngPalette) {
        if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 0, 100)) this.options.pngQuality = A.quality;else throw X1.invalidParameterError("quality", "integer between 0 and 100", A.quality);
        if (X1.defined(A.effort)) if (X1.integer(A.effort) && X1.inRange(A.effort, 1, 10)) this.options.pngEffort = A.effort;else throw X1.invalidParameterError("effort", "integer between 1 and 10", A.effort);
        if (X1.defined(A.dither)) if (X1.number(A.dither) && X1.inRange(A.dither, 0, 1)) this.options.pngDither = A.dither;else throw X1.invalidParameterError("dither", "number between 0.0 and 1.0", A.dither);
      }
    }
    return this._updateFormatOut("png", A);
  }
  function pC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.webpQuality = A.quality;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      if (X1.defined(A.alphaQuality)) if (X1.integer(A.alphaQuality) && X1.inRange(A.alphaQuality, 0, 100)) this.options.webpAlphaQuality = A.alphaQuality;else throw X1.invalidParameterError("alphaQuality", "integer between 0 and 100", A.alphaQuality);
      if (X1.defined(A.lossless)) this._setBooleanOption("webpLossless", A.lossless);
      if (X1.defined(A.nearLossless)) this._setBooleanOption("webpNearLossless", A.nearLossless);
      if (X1.defined(A.smartSubsample)) this._setBooleanOption("webpSmartSubsample", A.smartSubsample);
      if (X1.defined(A.preset)) if (X1.string(A.preset) && X1.inArray(A.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) this.options.webpPreset = A.preset;else throw X1.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", A.preset);
      if (X1.defined(A.effort)) if (X1.integer(A.effort) && X1.inRange(A.effort, 0, 6)) this.options.webpEffort = A.effort;else throw X1.invalidParameterError("effort", "integer between 0 and 6", A.effort);
      if (X1.defined(A.minSize)) this._setBooleanOption("webpMinSize", A.minSize);
      if (X1.defined(A.mixed)) this._setBooleanOption("webpMixed", A.mixed);
    }
    return tx4(A, this.options), this._updateFormatOut("webp", A);
  }
  function dC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.reuse)) this._setBooleanOption("gifReuse", A.reuse);
      if (X1.defined(A.progressive)) this._setBooleanOption("gifProgressive", A.progressive);
      let K = A.colours || A.colors;
      if (X1.defined(K)) if (X1.integer(K) && X1.inRange(K, 2, 256)) this.options.gifBitdepth = sx4(K);else throw X1.invalidParameterError("colours", "integer between 2 and 256", K);
      if (X1.defined(A.effort)) if (X1.number(A.effort) && X1.inRange(A.effort, 1, 10)) this.options.gifEffort = A.effort;else throw X1.invalidParameterError("effort", "integer between 1 and 10", A.effort);
      if (X1.defined(A.dither)) if (X1.number(A.dither) && X1.inRange(A.dither, 0, 1)) this.options.gifDither = A.dither;else throw X1.invalidParameterError("dither", "number between 0.0 and 1.0", A.dither);
      if (X1.defined(A.interFrameMaxError)) if (X1.number(A.interFrameMaxError) && X1.inRange(A.interFrameMaxError, 0, 32)) this.options.gifInterFrameMaxError = A.interFrameMaxError;else throw X1.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", A.interFrameMaxError);
      if (X1.defined(A.interPaletteMaxError)) if (X1.number(A.interPaletteMaxError) && X1.inRange(A.interPaletteMaxError, 0, 256)) this.options.gifInterPaletteMaxError = A.interPaletteMaxError;else throw X1.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", A.interPaletteMaxError);
    }
    return tx4(A, this.options), this._updateFormatOut("gif", A);
  }
  function cC9(A) {
    if (!this.constructor.format.jp2k.output.buffer) throw ax4();
    if (X1.object(A)) {
      if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.jp2Quality = A.quality;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      if (X1.defined(A.lossless)) if (X1.bool(A.lossless)) this.options.jp2Lossless = A.lossless;else throw X1.invalidParameterError("lossless", "boolean", A.lossless);
      if (X1.defined(A.tileWidth)) if (X1.integer(A.tileWidth) && X1.inRange(A.tileWidth, 1, 32768)) this.options.jp2TileWidth = A.tileWidth;else throw X1.invalidParameterError("tileWidth", "integer between 1 and 32768", A.tileWidth);
      if (X1.defined(A.tileHeight)) if (X1.integer(A.tileHeight) && X1.inRange(A.tileHeight, 1, 32768)) this.options.jp2TileHeight = A.tileHeight;else throw X1.invalidParameterError("tileHeight", "integer between 1 and 32768", A.tileHeight);
      if (X1.defined(A.chromaSubsampling)) if (X1.string(A.chromaSubsampling) && X1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jp2ChromaSubsampling = A.chromaSubsampling;else throw X1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling);
    }
    return this._updateFormatOut("jp2", A);
  }
  function tx4(A, K) {
    if (X1.object(A) && X1.defined(A.loop)) if (X1.integer(A.loop) && X1.inRange(A.loop, 0, 65535)) K.loop = A.loop;else throw X1.invalidParameterError("loop", "integer between 0 and 65535", A.loop);
    if (X1.object(A) && X1.defined(A.delay)) if (X1.integer(A.delay) && X1.inRange(A.delay, 0, 65535)) K.delay = [A.delay];else if (Array.isArray(A.delay) && A.delay.every(X1.integer) && A.delay.every(q => X1.inRange(q, 0, 65535))) K.delay = A.delay;else throw X1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", A.delay);
  }
  function lC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.tiffQuality = A.quality;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      if (X1.defined(A.bitdepth)) if (X1.integer(A.bitdepth) && X1.inArray(A.bitdepth, [1, 2, 4, 8])) this.options.tiffBitdepth = A.bitdepth;else throw X1.invalidParameterError("bitdepth", "1, 2, 4 or 8", A.bitdepth);
      if (X1.defined(A.tile)) this._setBooleanOption("tiffTile", A.tile);
      if (X1.defined(A.tileWidth)) if (X1.integer(A.tileWidth) && A.tileWidth > 0) this.options.tiffTileWidth = A.tileWidth;else throw X1.invalidParameterError("tileWidth", "integer greater than zero", A.tileWidth);
      if (X1.defined(A.tileHeight)) if (X1.integer(A.tileHeight) && A.tileHeight > 0) this.options.tiffTileHeight = A.tileHeight;else throw X1.invalidParameterError("tileHeight", "integer greater than zero", A.tileHeight);
      if (X1.defined(A.miniswhite)) this._setBooleanOption("tiffMiniswhite", A.miniswhite);
      if (X1.defined(A.pyramid)) this._setBooleanOption("tiffPyramid", A.pyramid);
      if (X1.defined(A.xres)) if (X1.number(A.xres) && A.xres > 0) this.options.tiffXres = A.xres;else throw X1.invalidParameterError("xres", "number greater than zero", A.xres);
      if (X1.defined(A.yres)) if (X1.number(A.yres) && A.yres > 0) this.options.tiffYres = A.yres;else throw X1.invalidParameterError("yres", "number greater than zero", A.yres);
      if (X1.defined(A.compression)) if (X1.string(A.compression) && X1.inArray(A.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) this.options.tiffCompression = A.compression;else throw X1.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", A.compression);
      if (X1.defined(A.predictor)) if (X1.string(A.predictor) && X1.inArray(A.predictor, ["none", "horizontal", "float"])) this.options.tiffPredictor = A.predictor;else throw X1.invalidParameterError("predictor", "one of: none, horizontal, float", A.predictor);
      if (X1.defined(A.resolutionUnit)) if (X1.string(A.resolutionUnit) && X1.inArray(A.resolutionUnit, ["inch", "cm"])) this.options.tiffResolutionUnit = A.resolutionUnit;else throw X1.invalidParameterError("resolutionUnit", "one of: inch, cm", A.resolutionUnit);
    }
    return this._updateFormatOut("tiff", A);
  }
  function iC9(A) {
    return this.heif({
      ...A,
      compression: "av1"
    });
  }
  function nC9(A) {
    if (X1.object(A)) {
      if (X1.string(A.compression) && X1.inArray(A.compression, ["av1", "hevc"])) this.options.heifCompression = A.compression;else throw X1.invalidParameterError("compression", "one of: av1, hevc", A.compression);
      if (X1.defined(A.quality)) if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.heifQuality = A.quality;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      if (X1.defined(A.lossless)) if (X1.bool(A.lossless)) this.options.heifLossless = A.lossless;else throw X1.invalidParameterError("lossless", "boolean", A.lossless);
      if (X1.defined(A.effort)) if (X1.integer(A.effort) && X1.inRange(A.effort, 0, 9)) this.options.heifEffort = A.effort;else throw X1.invalidParameterError("effort", "integer between 0 and 9", A.effort);
      if (X1.defined(A.chromaSubsampling)) if (X1.string(A.chromaSubsampling) && X1.inArray(A.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.heifChromaSubsampling = A.chromaSubsampling;else throw X1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", A.chromaSubsampling);
      if (X1.defined(A.bitdepth)) if (X1.integer(A.bitdepth) && X1.inArray(A.bitdepth, [8, 10, 12])) {
        if (A.bitdepth !== 8 && this.constructor.versions.heif) throw X1.invalidParameterError("bitdepth when using prebuilt binaries", 8, A.bitdepth);
        this.options.heifBitdepth = A.bitdepth;
      } else throw X1.invalidParameterError("bitdepth", "8, 10 or 12", A.bitdepth);
    } else throw X1.invalidParameterError("options", "Object", A);
    return this._updateFormatOut("heif", A);
  }
  function rC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.quality)) {
        if (X1.integer(A.quality) && X1.inRange(A.quality, 1, 100)) this.options.jxlDistance = A.quality >= 30 ? 0.1 + (100 - A.quality) * 0.09 : 0.017666666666666667 * A.quality * A.quality - 1.15 * A.quality + 25;else throw X1.invalidParameterError("quality", "integer between 1 and 100", A.quality);
      } else if (X1.defined(A.distance)) if (X1.number(A.distance) && X1.inRange(A.distance, 0, 15)) this.options.jxlDistance = A.distance;else throw X1.invalidParameterError("distance", "number between 0.0 and 15.0", A.distance);
      if (X1.defined(A.decodingTier)) if (X1.integer(A.decodingTier) && X1.inRange(A.decodingTier, 0, 4)) this.options.jxlDecodingTier = A.decodingTier;else throw X1.invalidParameterError("decodingTier", "integer between 0 and 4", A.decodingTier);
      if (X1.defined(A.lossless)) if (X1.bool(A.lossless)) this.options.jxlLossless = A.lossless;else throw X1.invalidParameterError("lossless", "boolean", A.lossless);
      if (X1.defined(A.effort)) if (X1.integer(A.effort) && X1.inRange(A.effort, 3, 9)) this.options.jxlEffort = A.effort;else throw X1.invalidParameterError("effort", "integer between 3 and 9", A.effort);
    }
    return this._updateFormatOut("jxl", A);
  }
  function oC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.depth)) if (X1.string(A.depth) && X1.inArray(A.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) this.options.rawDepth = A.depth;else throw X1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", A.depth);
    }
    return this._updateFormatOut("raw");
  }
  function aC9(A) {
    if (X1.object(A)) {
      if (X1.defined(A.size)) if (X1.integer(A.size) && X1.inRange(A.size, 1, 8192)) this.options.tileSize = A.size;else throw X1.invalidParameterError("size", "integer between 1 and 8192", A.size);
      if (X1.defined(A.overlap)) if (X1.integer(A.overlap) && X1.inRange(A.overlap, 0, 8192)) {
        if (A.overlap > this.options.tileSize) throw X1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, A.overlap);
        this.options.tileOverlap = A.overlap;
      } else throw X1.invalidParameterError("overlap", "integer between 0 and 8192", A.overlap);
      if (X1.defined(A.container)) if (X1.string(A.container) && X1.inArray(A.container, ["fs", "zip"])) this.options.tileContainer = A.container;else throw X1.invalidParameterError("container", "one of: fs, zip", A.container);
      if (X1.defined(A.layout)) if (X1.string(A.layout) && X1.inArray(A.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) this.options.tileLayout = A.layout;else throw X1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", A.layout);
      if (X1.defined(A.angle)) if (X1.integer(A.angle) && !(A.angle % 90)) this.options.tileAngle = A.angle;else throw X1.invalidParameterError("angle", "positive/negative multiple of 90", A.angle);
      if (this._setBackgroundColourOption("tileBackground", A.background), X1.defined(A.depth)) if (X1.string(A.depth) && X1.inArray(A.depth, ["onepixel", "onetile", "one"])) this.options.tileDepth = A.depth;else throw X1.invalidParameterError("depth", "one of: onepixel, onetile, one", A.depth);
      if (X1.defined(A.skipBlanks)) {
        if (X1.integer(A.skipBlanks) && X1.inRange(A.skipBlanks, -1, 65535)) this.options.tileSkipBlanks = A.skipBlanks;else throw X1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", A.skipBlanks);
      } else if (X1.defined(A.layout) && A.layout === "google") this.options.tileSkipBlanks = 5;
      let K = X1.bool(A.center) ? A.center : A.centre;
      if (X1.defined(K)) this._setBooleanOption("tileCentre", K);
      if (X1.defined(A.id)) if (X1.string(A.id)) this.options.tileId = A.id;else throw X1.invalidParameterError("id", "string", A.id);
      if (X1.defined(A.basename)) if (X1.string(A.basename)) this.options.tileBasename = A.basename;else throw X1.invalidParameterError("basename", "string", A.basename);
    }
    if (X1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) this.options.tileFormat = this.options.formatOut;else if (this.options.formatOut !== "input") throw X1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
    return this._updateFormatOut("dz");
  }
  function sC9(A) {
    if (!X1.plainObject(A)) throw X1.invalidParameterError("options", "object", A);
    if (X1.integer(A.seconds) && X1.inRange(A.seconds, 0, 3600)) this.options.timeoutSeconds = A.seconds;else throw X1.invalidParameterError("seconds", "integer between 0 and 3600", A.seconds);
    return this;
  }
  function tC9(A, K) {
    if (!(X1.object(K) && K.force === !1)) this.options.formatOut = A;
    return this;
  }
  function eC9(A, K) {
    if (X1.bool(K)) this.options[A] = K;else throw X1.invalidParameterError(A, "boolean", K);
  }
  function AL9() {
    if (!this.options.streamOut) {
      this.options.streamOut = !0;
      let A = Error();
      this._pipeline(void 0, A);
    }
  }
  function KL9(A, K) {
    if (typeof A === "function") {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), h$A.pipeline(this.options, (q, Y, z) => {
          if (q) A(X1.nativeError(q, K));else A(null, Y, z);
        });
      });else h$A.pipeline(this.options, (q, Y, z) => {
        if (q) A(X1.nativeError(q, K));else A(null, Y, z);
      });
      return this;
    } else if (this.options.streamOut) {
      if (this._isStreamInput()) {
        if (this.once("finish", () => {
          this._flattenBufferIn(), h$A.pipeline(this.options, (q, Y, z) => {
            if (q) this.emit("error", X1.nativeError(q, K));else this.emit("info", z), this.push(Y);
            this.push(null), this.on("end", () => this.emit("close"));
          });
        }), this.streamInFinished) this.emit("finish");
      } else h$A.pipeline(this.options, (q, Y, z) => {
        if (q) this.emit("error", X1.nativeError(q, K));else this.emit("info", z), this.push(Y);
        this.push(null), this.on("end", () => this.emit("close"));
      });
      return this;
    } else if (this._isStreamInput()) return new Promise((q, Y) => {
      this.once("finish", () => {
        this._flattenBufferIn(), h$A.pipeline(this.options, (z, w, H) => {
          if (z) Y(X1.nativeError(z, K));else if (this.options.resolveWithObject) q({
            data: w,
            info: H
          });else q(w);
        });
      });
    });else return new Promise((q, Y) => {
      h$A.pipeline(this.options, (z, w, H) => {
        if (z) Y(X1.nativeError(z, K));else if (this.options.resolveWithObject) q({
          data: w,
          info: H
        });else q(w);
      });
    });
  }
  ex4.exports = function (A) {
    Object.assign(A.prototype, {
      toFile: IC9,
      toBuffer: SC9,
      keepExif: hC9,
      withExif: bC9,
      withExifMerge: xC9,
      keepIccProfile: uC9,
      withIccProfile: BC9,
      keepMetadata: mC9,
      withMetadata: gC9,
      toFormat: FC9,
      jpeg: QC9,
      jp2: cC9,
      png: UC9,
      webp: pC9,
      tiff: lC9,
      avif: iC9,
      heif: nC9,
      jxl: rC9,
      gif: dC9,
      raw: oC9,
      tile: aC9,
      timeout: sC9,
      _updateFormatOut: tC9,
      _setBooleanOption: eC9,
      _read: AL9,
      _pipeline: KL9
    });
  };
});

// Register to shared state
__$.Au4 = Au4;
