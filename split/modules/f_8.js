// Module: f_8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var f_8 = v(($Rz, V_8) => {
  function tNq(A) {
    let q = {
        $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
        keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
        literal: "true false nil",
        built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"
      },
      Y = {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n"
      },
      z = {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n"
      },
      w = {
        className: "string",
        begin: "<<",
        end: ">>"
      },
      H = {
        className: "number",
        begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
      },
      J = {
        beginKeywords: "import",
        end: "$",
        keywords: q,
        contains: [Y]
      },
      O = {
        className: "function",
        begin: /[a-z][^\n]*->/,
        returnBegin: !0,
        end: /->/,
        contains: [A.inherit(A.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            keywords: q
          }
        })]
      };
    return {
      name: "XL",
      aliases: ["tao"],
      keywords: q,
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Y, z, w, O, J, H, A.NUMBER_MODE]
    };
  }
  V_8.exports = tNq;
});

// Register to shared state
__$.f_8 = f_8;
