// Module: VX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VX8 = v((MLz, PX8) => {
  function Efq(A) {
    let K = {
        className: "string",
        begin: '(~)?"',
        end: '"',
        illegal: "\\n"
      },
      q = {
        className: "symbol",
        begin: "#[a-zA-Z_]\\w*\\$?"
      };
    return {
      name: "PureBASIC",
      aliases: ["pb", "pbi"],
      keywords: "Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr",
      contains: [A.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "function",
        begin: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
        end: "\\(",
        excludeEnd: !0,
        returnBegin: !0,
        contains: [{
          className: "keyword",
          begin: "(Procedure|Declare)(C|CDLL|DLL)?",
          excludeEnd: !0
        }, {
          className: "type",
          begin: "\\.\\w*"
        }, A.UNDERSCORE_TITLE_MODE]
      }, K, q]
    };
  }
  PX8.exports = Efq;
});

// Register to shared state
__$.VX8 = VX8;
