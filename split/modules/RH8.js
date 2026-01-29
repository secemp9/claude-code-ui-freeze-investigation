// Module: RH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RH8 = v((Rkz, LH8) => {
  function UMq(A) {
    let K = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
      q = [A.C_LINE_COMMENT_MODE, A.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), A.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      Y = {
        className: "meta",
        variants: [{
          begin: /\{\$/,
          end: /\}/
        }, {
          begin: /\(\*\$/,
          end: /\*\)/
        }]
      },
      z = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      w = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\$[0-9A-Fa-f]+"
        }, {
          begin: "&[0-7]+"
        }, {
          begin: "%[01]+"
        }]
      },
      H = {
        className: "string",
        begin: /(#\d+)+/
      },
      J = {
        begin: A.IDENT_RE + "\\s*=\\s*class\\s*\\(",
        returnBegin: !0,
        contains: [A.TITLE_MODE]
      },
      O = {
        className: "function",
        beginKeywords: "function constructor destructor procedure",
        end: /[:;]/,
        keywords: "function constructor|10 destructor|10 procedure|10",
        contains: [A.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: K,
          contains: [z, H, Y].concat(q)
        }, Y].concat(q)
      };
    return {
      name: "Delphi",
      aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
      case_insensitive: !0,
      keywords: K,
      illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
      contains: [z, H, A.NUMBER_MODE, w, J, O, Y].concat(q)
    };
  }
  LH8.exports = UMq;
});

// Register to shared state
__$.RH8 = RH8;
