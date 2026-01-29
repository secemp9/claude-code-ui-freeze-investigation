// Module: dX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dX8 = v((yLz, pX8) => {
  function dfq(A) {
    let q = "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
      Y = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: A.IDENT_RE + "!?",
        keyword: q,
        literal: "true false Some None Ok Err",
        built_in: Y
      },
      illegal: "</",
      contains: [A.C_LINE_COMMENT_MODE, A.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), A.inherit(A.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }), {
        className: "string",
        variants: [{
          begin: /r(#*)"(.|\n)*?"\1(?!#)/
        }, {
          begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
        }]
      }, {
        className: "symbol",
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0o([0-7_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([ui](8|16|32|64|128|size)|f(32|64))?"
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "fn",
        end: "(\\(|<)",
        excludeEnd: !0,
        contains: [A.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        className: "class",
        beginKeywords: "type",
        end: ";",
        contains: [A.inherit(A.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "\\S"
      }, {
        className: "class",
        beginKeywords: "trait enum struct union",
        end: /\{/,
        contains: [A.inherit(A.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "[\\w\\d]"
      }, {
        begin: A.IDENT_RE + "::",
        keywords: {
          built_in: Y
        }
      }, {
        begin: "->"
      }]
    };
  }
  pX8.exports = dfq;
});

// Register to shared state
__$.dX8 = dX8;
