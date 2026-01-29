// Module: d08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d08 = v((qLz, p08) => {
  function Xfq(A) {
    let K = {
        $pattern: /\.?\w+/,
        keyword: "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"
      },
      q = A.COMMENT(/\{/, /\}/, {
        relevance: 0
      }),
      Y = A.COMMENT("\\(\\*", "\\*\\)", {
        relevance: 10
      }),
      z = {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{
          begin: "''"
        }]
      },
      w = {
        className: "string",
        begin: "(#\\d+)+"
      },
      H = {
        className: "function",
        beginKeywords: "function constructor destructor procedure method",
        end: "[:;]",
        keywords: "function constructor|10 destructor|10 procedure|10 method|10",
        contains: [A.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          keywords: K,
          contains: [z, w]
        }, q, Y]
      };
    return {
      name: "Oxygene",
      case_insensitive: !0,
      keywords: K,
      illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
      contains: [q, Y, A.C_LINE_COMMENT_MODE, z, w, A.NUMBER_MODE, H, {
        className: "class",
        begin: "=\\bclass\\b",
        end: "end;",
        keywords: K,
        contains: [z, w, q, Y, A.C_LINE_COMMENT_MODE, H]
      }]
    };
  }
  p08.exports = Xfq;
});

// Register to shared state
__$.d08 = d08;
