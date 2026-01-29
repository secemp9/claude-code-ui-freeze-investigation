// Module: A21
// Dependencies: N7A, tY6, ySA, DM, cL9, lL9, iL9, bSA, nL9, Iu4
//   ... and 68 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A21 = k(() => {
  __$.N7A = __$.tY6();
  __$.ySA = {
    exec: () => null
  };
  __$.DM = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: A => new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: A => new RegExp(`^ {0,${Math.min(3, A - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: A => new RegExp(`^ {0,${Math.min(3, A - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: A => new RegExp(`^ {0,${Math.min(3, A - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: A => new RegExp(`^ {0,${Math.min(3, A - 1)}}#`),
    htmlBeginRegex: A => new RegExp(`^ {0,${Math.min(3, A - 1)}}<(?:[a-z].*>|!--)`, "i")
  }, __$.cL9 = /^(?:[ \t]*(?:\n|$))+/, __$.lL9 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, __$.iL9 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, __$.bSA = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, __$.nL9 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, __$.Iu4 = /(?:[*+-]|\d{1,9}[.)])/, __$.Su4 = __$.Nz(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, __$.Iu4).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), __$.eY6 = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, __$.rL9 = /^[^\n]+/, __$.A26 = /(?!\s*\])(?:\\.|[^\[\]\\])+/, __$.oL9 = __$.Nz(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", __$.A26).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), __$.aL9 = __$.Nz(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, __$.Iu4).getRegex(), __$.K26 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, __$.sL9 = __$.Nz("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", __$.K26).replace("tag", __$.sY1).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), __$.hu4 = __$.Nz(__$.eY6).replace("hr", __$.bSA).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", __$.sY1).getRegex(), __$.tL9 = __$.Nz(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", __$.hu4).getRegex(), __$.q26 = {
    blockquote: __$.tL9,
    code: __$.lL9,
    def: __$.oL9,
    fences: __$.iL9,
    heading: __$.nL9,
    hr: __$.bSA,
    html: __$.sL9,
    lheading: __$.Su4,
    list: __$.aL9,
    newline: __$.cL9,
    paragraph: __$.hu4,
    table: __$.ySA,
    text: __$.rL9
  }, __$.Eu4 = __$.Nz("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", __$.bSA).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", __$.sY1).getRegex(), __$.eL9 = {
    ...__$.q26,
    table: __$.Eu4,
    paragraph: __$.Nz(__$.eY6).replace("hr", __$.bSA).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", __$.Eu4).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", __$.sY1).getRegex()
  }, __$.AR9 = {
    ...__$.q26,
    html: __$.Nz(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", __$.K26).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: __$.ySA,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: __$.Nz(__$.eY6).replace("hr", __$.bSA).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", __$.Su4).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  }, __$.KR9 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, __$.qR9 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, __$.bu4 = /^( {2,}|\\)\n(?!\s*$)/, __$.YR9 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, __$.tY1 = /[\p{P}\p{S}]/u, __$.Y26 = /[\s\p{P}\p{S}]/u, __$.xu4 = /[^\s\p{P}\p{S}]/u, __$.zR9 = __$.Nz(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, __$.Y26).getRegex(), __$.uu4 = /(?!~)[\p{P}\p{S}]/u, __$.wR9 = /(?!~)[\s\p{P}\p{S}]/u, __$.HR9 = /(?:[^\s\p{P}\p{S}]|~)/u, __$.JR9 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, __$.Bu4 = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, __$.OR9 = __$.Nz(__$.Bu4, "u").replace(/punct/g, __$.tY1).getRegex(), __$.XR9 = __$.Nz(__$.Bu4, "u").replace(/punct/g, __$.uu4).getRegex(), __$.$R9 = __$.Nz(__$.mu4, "gu").replace(/notPunctSpace/g, __$.xu4).replace(/punctSpace/g, __$.Y26).replace(/punct/g, __$.tY1).getRegex(), __$._R9 = __$.Nz(__$.mu4, "gu").replace(/notPunctSpace/g, __$.HR9).replace(/punctSpace/g, __$.wR9).replace(/punct/g, __$.uu4).getRegex(), __$.GR9 = __$.Nz("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, __$.xu4).replace(/punctSpace/g, __$.Y26).replace(/punct/g, __$.tY1).getRegex(), __$.ZR9 = __$.Nz(/\\(punct)/, "gu").replace(/punct/g, __$.tY1).getRegex(), __$.WR9 = __$.Nz(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), __$.DR9 = __$.Nz(__$.K26).replace("(?:-->|$)", "-->").getRegex(), __$.jR9 = __$.Nz("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", __$.DR9).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), __$.aY1 = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, __$.MR9 = __$.Nz(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", __$.aY1).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), __$.gu4 = __$.Nz(/^!?\[(label)\]\[(ref)\]/).replace("label", __$.aY1).replace("ref", __$.A26).getRegex(), __$.Fu4 = __$.Nz(/^!?\[(ref)\](?:\[\])?/).replace("ref", __$.A26).getRegex(), __$.PR9 = __$.Nz("reflink|nolink(?!\\()", "g").replace("reflink", __$.gu4).replace("nolink", __$.Fu4).getRegex(), __$.z26 = {
    _backpedal: __$.ySA,
    anyPunctuation: __$.ZR9,
    autolink: __$.WR9,
    blockSkip: __$.JR9,
    br: __$.bu4,
    code: __$.qR9,
    del: __$.ySA,
    emStrongLDelim: __$.OR9,
    emStrongRDelimAst: __$.$R9,
    emStrongRDelimUnd: __$.GR9,
    escape: __$.KR9,
    link: __$.MR9,
    nolink: __$.Fu4,
    punctuation: __$.zR9,
    reflink: __$.gu4,
    reflinkSearch: __$.PR9,
    tag: __$.jR9,
    text: __$.YR9,
    url: __$.ySA
  }, __$.VR9 = {
    ...__$.z26,
    link: __$.Nz(/^!?\[(label)\]\((.*?)\)/).replace("label", __$.aY1).getRegex(),
    reflink: __$.Nz(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", __$.aY1).getRegex()
  }, __$.sY6 = {
    ...__$.z26,
    emStrongRDelimAst: __$._R9,
    emStrongLDelim: __$.XR9,
    url: __$.Nz(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }, __$.fR9 = {
    ...__$.sY6,
    br: __$.Nz(__$.bu4).replace("{2,}", "*").getRegex(),
    text: __$.Nz(__$.sY6.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  }, __$.oY1 = {
    normal: __$.q26,
    gfm: __$.eL9,
    pedantic: __$.AR9
  }, __$.LSA = {
    normal: __$.z26,
    gfm: __$.sY6,
    breaks: __$.fR9,
    pedantic: __$.VR9
  }, __$.NR9 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  __$.ISA = class ISA {
    options;
    block;
    constructor(A) {
      this.options = A || __$.N7A;
    }
    static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(A) {
      return A;
    }
    postprocess(A) {
      return A;
    }
    processAllTokens(A) {
      return A;
    }
    provideLexer() {
      return this.block ? __$.jM.lex : __$.jM.lexInline;
    }
    provideParser() {
      return this.block ? __$.KC.parse : __$.KC.parseInline;
    }
  };
  __$.f7A = new __$.Qu4();
  __$.sY.options = __$.sY.setOptions = function (A) {
    return __$.f7A.setOptions(A), __$.sY.defaults = __$.f7A.defaults, __$.yu4(__$.sY.defaults), __$.sY;
  };
  __$.sY.getDefaults = __$.tY6;
  __$.sY.defaults = __$.N7A;
  __$.sY.use = function (...A) {
    return __$.f7A.use(...A), __$.sY.defaults = __$.f7A.defaults, __$.yu4(__$.sY.defaults), __$.sY;
  };
  __$.sY.walkTokens = function (A, K) {
    return __$.f7A.walkTokens(A, K);
  };
  __$.sY.parseInline = __$.f7A.parseInline;
  __$.sY.Parser = __$.KC;
  __$.sY.parser = __$.KC.parse;
  __$.sY.Renderer = __$.hSA;
  __$.sY.TextRenderer = __$.eY1;
  __$.sY.Lexer = __$.jM;
  __$.sY.lexer = __$.jM.lex;
  __$.sY.Tokenizer = __$.SSA;
  __$.sY.Hooks = __$.ISA;
  __$.sY.parse = __$.sY;
  __$.gMw = __$.sY.options, __$.FMw = __$.sY.setOptions, __$.QMw = __$.sY.use, __$.UMw = __$.sY.walkTokens, __$.pMw = __$.sY.parseInline, __$.dMw = __$.KC.parse, __$.cMw = __$.jM.lex;
});

// Register to shared state
__$.A21 = A21;
