// Module: b$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b$8 = v((nLz, h$8) => {
  function R$8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function iwA(A) {
    return $w("(?=", A, ")");
  }
  function $w(...A) {
    return A.map(q => R$8(q)).join("");
  }
  function cj(...A) {
    return "(" + A.map(q => R$8(q)).join("|") + ")";
  }
  var Nx1 = A => $w(/\b/, A, /\w$/.test(A) ? /\b/ : /\B/),
    k$8 = ["Protocol", "Type"].map(Nx1),
    Mx1 = ["init", "self"].map(Nx1),
    fNq = ["Any", "Self"],
    Px1 = ["associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
    C$8 = ["false", "nil", "true"],
    NNq = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
    TNq = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
    L$8 = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
    y$8 = cj(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    I$8 = cj(y$8, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    Vx1 = $w(y$8, I$8, "*"),
    S$8 = cj(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    EaA = cj(S$8, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    lg = $w(S$8, EaA, "*"),
    fx1 = $w(/[A-Z]/, EaA, "*"),
    vNq = ["autoclosure", $w(/convention\(/, cj("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", $w(/objc\(/, lg, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
    ENq = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];
  function kNq(A) {
    let K = {
        match: /\s+/,
        relevance: 0
      },
      q = A.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }),
      Y = [A.C_LINE_COMMENT_MODE, q],
      z = {
        className: "keyword",
        begin: $w(/\./, iwA(cj(...k$8, ...Mx1))),
        end: cj(...k$8, ...Mx1),
        excludeBegin: !0
      },
      w = {
        match: $w(/\./, cj(...Px1)),
        relevance: 0
      },
      H = Px1.filter(wA => typeof wA === "string").concat(["_|0"]),
      J = Px1.filter(wA => typeof wA !== "string").concat(fNq).map(Nx1),
      O = {
        variants: [{
          className: "keyword",
          match: cj(...J, ...Mx1)
        }]
      },
      X = {
        $pattern: cj(/\b\w+/, /#\w+/),
        keyword: H.concat(TNq),
        literal: C$8
      },
      $ = [z, w, O],
      _ = {
        match: $w(/\./, cj(...L$8)),
        relevance: 0
      },
      G = {
        className: "built_in",
        match: $w(/\b/, cj(...L$8), /(?=\()/)
      },
      Z = [_, G],
      W = {
        match: /->/,
        relevance: 0
      },
      D = {
        className: "operator",
        relevance: 0,
        variants: [{
          match: Vx1
        }, {
          match: `\\.(\\.|${I$8})+`
        }]
      },
      j = [W, D],
      M = "([0-9]_*)+",
      P = "([0-9a-fA-F]_*)+",
      f = {
        className: "number",
        relevance: 0,
        variants: [{
          match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: "\\b0x(([0-9a-fA-F]_*)+)(\\.(([0-9a-fA-F]_*)+))?([pP][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: /\b0o([0-7]_*)+\b/
        }, {
          match: /\b0b([01]_*)+\b/
        }]
      },
      N = (wA = "") => ({
        className: "subst",
        variants: [{
          match: $w(/\\/, wA, /[0\\tnr"']/)
        }, {
          match: $w(/\\/, wA, /u\{[0-9a-fA-F]{1,8}\}/)
        }]
      }),
      T = (wA = "") => ({
        className: "subst",
        match: $w(/\\/, wA, /[\t ]*(?:[\r\n]|\r\n)/)
      }),
      C = (wA = "") => ({
        className: "subst",
        label: "interpol",
        begin: $w(/\\/, wA, /\(/),
        end: /\)/
      }),
      R = (wA = "") => ({
        begin: $w(wA, /"""/),
        end: $w(/"""/, wA),
        contains: [N(wA), T(wA), C(wA)]
      }),
      x = (wA = "") => ({
        begin: $w(wA, /"/),
        end: $w(/"/, wA),
        contains: [N(wA), C(wA)]
      }),
      y = {
        className: "string",
        variants: [R(), R("#"), R("##"), R("###"), x(), x("#"), x("##"), x("###")]
      },
      B = {
        match: $w(/`/, lg, /`/)
      },
      b = {
        className: "variable",
        match: /\$\d+/
      },
      F = {
        className: "variable",
        match: `\\$${EaA}+`
      },
      Q = [B, b, F],
      u = {
        match: /(@|#)available/,
        className: "keyword",
        starts: {
          contains: [{
            begin: /\(/,
            end: /\)/,
            keywords: ENq,
            contains: [...j, f, y]
          }]
        }
      },
      d = {
        className: "keyword",
        match: $w(/@/, cj(...vNq))
      },
      r = {
        className: "meta",
        match: $w(/@/, lg)
      },
      c = [u, d, r],
      YA = {
        match: iwA(/\b[A-Z]/),
        relevance: 0,
        contains: [{
          className: "type",
          match: $w(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, EaA, "+")
        }, {
          className: "type",
          match: fx1,
          relevance: 0
        }, {
          match: /[?!]+/,
          relevance: 0
        }, {
          match: /\.\.\./,
          relevance: 0
        }, {
          match: $w(/\s+&\s+/, iwA(fx1)),
          relevance: 0
        }]
      },
      e = {
        begin: /</,
        end: />/,
        keywords: X,
        contains: [...Y, ...$, ...c, W, YA]
      };
    YA.contains.push(e);
    let qA = {
        match: $w(lg, /\s*:/),
        keywords: "_|0",
        relevance: 0
      },
      HA = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: X,
        contains: ["self", qA, ...Y, ...$, ...Z, ...j, f, y, ...Q, ...c, YA]
      },
      _A = {
        beginKeywords: "func",
        contains: [{
          className: "title",
          match: cj(B.match, lg, Vx1),
          endsParent: !0,
          relevance: 0
        }, K]
      },
      a = {
        begin: /</,
        end: />/,
        contains: [...Y, YA]
      },
      JA = {
        begin: cj(iwA($w(lg, /\s*:/)), iwA($w(lg, /\s+/, lg, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [{
          className: "keyword",
          match: /\b_\b/
        }, {
          className: "params",
          match: lg
        }]
      },
      jA = {
        begin: /\(/,
        end: /\)/,
        keywords: X,
        contains: [JA, ...Y, ...$, ...j, f, y, ...c, YA, HA],
        endsParent: !0,
        illegal: /["']/
      },
      MA = {
        className: "function",
        match: iwA(/\bfunc\b/),
        contains: [_A, a, jA, K],
        illegal: [/\[/, /%/]
      },
      hA = {
        className: "function",
        match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
        keywords: {
          keyword: "subscript init init? init!",
          $pattern: /\w+[?!]?/
        },
        contains: [a, jA, K],
        illegal: /\[|%/
      },
      yA = {
        beginKeywords: "operator",
        end: A.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: Vx1,
          endsParent: !0,
          relevance: 0
        }]
      },
      AA = {
        beginKeywords: "precedencegroup",
        end: A.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: fx1,
          relevance: 0
        }, {
          begin: /{/,
          end: /}/,
          relevance: 0,
          endsParent: !0,
          keywords: [...NNq, ...C$8],
          contains: [YA]
        }]
      };
    for (let wA of y.variants) {
      let GA = wA.contains.find(t => t.label === "interpol");
      GA.keywords = X;
      let OA = [...$, ...Z, ...j, f, y, ...Q];
      GA.contains = [...OA, {
        begin: /\(/,
        end: /\)/,
        contains: ["self", ...OA]
      }];
    }
    return {
      name: "Swift",
      keywords: X,
      contains: [...Y, MA, hA, {
        className: "class",
        beginKeywords: "struct protocol class extension enum",
        end: "\\{",
        excludeEnd: !0,
        keywords: X,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
        }), ...$]
      }, yA, AA, {
        beginKeywords: "import",
        end: /$/,
        contains: [...Y],
        relevance: 0
      }, ...$, ...Z, ...j, f, y, ...Q, ...c, YA, HA]
    };
  }
  h$8.exports = kNq;
});

// Register to shared state
__$.b$8 = b$8;
