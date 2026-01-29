// Module: i$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i$8 = v((eLz, l$8) => {
  function bNq(A) {
    let K = {
        className: "number",
        begin: "[1-9][0-9]*",
        relevance: 0
      },
      q = {
        className: "symbol",
        begin: ":[^\\]]+"
      },
      Y = {
        className: "built_in",
        begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
        end: "\\]",
        contains: ["self", K, q]
      },
      z = {
        className: "built_in",
        begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
        end: "\\]",
        contains: ["self", K, A.QUOTE_STRING_MODE, q]
      };
    return {
      name: "TP",
      keywords: {
        keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
        literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
      },
      contains: [Y, z, {
        className: "keyword",
        begin: "/(PROG|ATTR|MN|POS|END)\\b"
      }, {
        className: "keyword",
        begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
      }, {
        className: "keyword",
        begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
      }, {
        className: "number",
        begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
        relevance: 0
      }, A.COMMENT("//", "[;$]"), A.COMMENT("!", "[;$]"), A.COMMENT("--eg:", "$"), A.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "'"
      }, A.C_NUMBER_MODE, {
        className: "variable",
        begin: "\\$[A-Za-z0-9_]+"
      }]
    };
  }
  l$8.exports = bNq;
});

// Register to shared state
__$.i$8 = i$8;
