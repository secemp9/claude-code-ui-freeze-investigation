// Module: wX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wX8 = v(($Lz, zX8) => {
  function Mfq(A) {
    let K = ["string", "char", "byte", "int", "long", "bool", "decimal", "single", "double", "DateTime", "xml", "array", "hashtable", "void"],
      q = "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",
      Y = "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",
      z = {
        $pattern: /-?[A-z\.\-]+\b/,
        keyword: "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
        built_in: "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
      },
      w = /\w[\w\d]*((-)[\w\d]+)*/,
      H = {
        begin: "`[\\s\\S]",
        relevance: 0
      },
      J = {
        className: "variable",
        variants: [{
          begin: /\$\B/
        }, {
          className: "keyword",
          begin: /\$this/
        }, {
          begin: /\$[\w\d][\w\d_:]*/
        }]
      },
      O = {
        className: "literal",
        begin: /\$(null|true|false)\b/
      },
      X = {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /@"/,
          end: /^"@/
        }],
        contains: [H, J, {
          className: "variable",
          begin: /\$[A-z]/,
          end: /[^A-z]/
        }]
      },
      $ = {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /@'/,
          end: /^'@/
        }]
      },
      _ = {
        className: "doctag",
        variants: [{
          begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
        }, {
          begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
        }]
      },
      G = A.inherit(A.COMMENT(null, null), {
        variants: [{
          begin: /#/,
          end: /$/
        }, {
          begin: /<#/,
          end: /#>/
        }],
        contains: [_]
      }),
      Z = {
        className: "built_in",
        variants: [{
          begin: "(".concat(q, ")+(-)[\\w\\d]+")
        }]
      },
      W = {
        className: "class",
        beginKeywords: "class enum",
        end: /\s*[{]/,
        excludeEnd: !0,
        relevance: 0,
        contains: [A.TITLE_MODE]
      },
      D = {
        className: "function",
        begin: /function\s+/,
        end: /\s*\{|$/,
        excludeEnd: !0,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          begin: "function",
          relevance: 0,
          className: "keyword"
        }, {
          className: "title",
          begin: w,
          relevance: 0
        }, {
          begin: /\(/,
          end: /\)/,
          className: "params",
          relevance: 0,
          contains: [J]
        }]
      },
      j = {
        begin: /using\s/,
        end: /$/,
        returnBegin: !0,
        contains: [X, $, {
          className: "keyword",
          begin: /(using|assembly|command|module|namespace|type)/
        }]
      },
      M = {
        variants: [{
          className: "operator",
          begin: "(".concat(Y, ")\\b")
        }, {
          className: "literal",
          begin: /(-)[\w\d]+/,
          relevance: 0
        }]
      },
      P = {
        className: "selector-tag",
        begin: /@\B/,
        relevance: 0
      },
      f = {
        className: "function",
        begin: /\[.*\]\s*[\w]+[ ]??\(/,
        end: /$/,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "keyword",
          begin: "(".concat(z.keyword.toString().replace(/\s/g, "|"), ")\\b"),
          endsParent: !0,
          relevance: 0
        }, A.inherit(A.TITLE_MODE, {
          endsParent: !0
        })]
      },
      N = [f, G, H, A.NUMBER_MODE, X, $, Z, J, O, P],
      T = {
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [].concat("self", N, {
          begin: "(" + K.join("|") + ")",
          className: "built_in",
          relevance: 0
        }, {
          className: "type",
          begin: /[\.\w\d]+/,
          relevance: 0
        })
      };
    return f.contains.unshift(T), {
      name: "PowerShell",
      aliases: ["ps", "ps1"],
      case_insensitive: !0,
      keywords: z,
      contains: N.concat(W, D, j, M, T)
    };
  }
  zX8.exports = Mfq;
});

// Register to shared state
__$.wX8 = wX8;
