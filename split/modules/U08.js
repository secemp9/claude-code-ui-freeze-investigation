// Module: U08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U08 = v((KLz, Q08) => {
  function Ofq(A) {
    let K = {
        className: "keyword",
        begin: "\\$(f[asn]|t|vp[rtd]|children)"
      },
      q = {
        className: "literal",
        begin: "false|true|PI|undef"
      },
      Y = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
        relevance: 0
      },
      z = A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }),
      w = {
        className: "meta",
        keywords: {
          "meta-keyword": "include use"
        },
        begin: "include|use <",
        end: ">"
      },
      H = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: ["self", Y, z, K, q]
      },
      J = {
        begin: "[*!#%]",
        relevance: 0
      },
      O = {
        className: "function",
        beginKeywords: "module function",
        end: /=|\{/,
        contains: [H, A.UNDERSCORE_TITLE_MODE]
      };
    return {
      name: "OpenSCAD",
      aliases: ["scad"],
      keywords: {
        keyword: "function module include use for intersection_for if else \\%",
        literal: "false true PI undef",
        built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Y, w, z, K, J, O]
    };
  }
  Q08.exports = Ofq;
});

// Register to shared state
__$.U08 = U08;
