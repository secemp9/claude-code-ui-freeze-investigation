// Module: Eq4
// Dependencies: Jq4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eq4 = v(Dq4 => {
  Object.defineProperty(Dq4, "__esModule", {
    value: !0
  });
  Dq4.SPECIAL_HEADERS = Dq4.HEADER_STATE = Dq4.MINOR = Dq4.MAJOR = Dq4.CONNECTION_TOKEN_CHARS = Dq4.HEADER_CHARS = Dq4.TOKEN = Dq4.STRICT_TOKEN = Dq4.HEX = Dq4.URL_CHAR = Dq4.STRICT_URL_CHAR = Dq4.USERINFO_CHARS = Dq4.MARK = Dq4.ALPHANUM = Dq4.NUM = Dq4.HEX_MAP = Dq4.NUM_MAP = Dq4.ALPHA = Dq4.FINISH = Dq4.H_METHOD_MAP = Dq4.METHOD_MAP = Dq4.METHODS_RTSP = Dq4.METHODS_ICE = Dq4.METHODS_HTTP = Dq4.METHODS = Dq4.LENIENT_FLAGS = Dq4.FLAGS = Dq4.TYPE = Dq4.ERROR = void 0;
  var xB3 = __$.Jq4(),
    uB3;
  (function (A) {
    A[A.OK = 0] = "OK", A[A.INTERNAL = 1] = "INTERNAL", A[A.STRICT = 2] = "STRICT", A[A.LF_EXPECTED = 3] = "LF_EXPECTED", A[A.UNEXPECTED_CONTENT_LENGTH = 4] = "UNEXPECTED_CONTENT_LENGTH", A[A.CLOSED_CONNECTION = 5] = "CLOSED_CONNECTION", A[A.INVALID_METHOD = 6] = "INVALID_METHOD", A[A.INVALID_URL = 7] = "INVALID_URL", A[A.INVALID_CONSTANT = 8] = "INVALID_CONSTANT", A[A.INVALID_VERSION = 9] = "INVALID_VERSION", A[A.INVALID_HEADER_TOKEN = 10] = "INVALID_HEADER_TOKEN", A[A.INVALID_CONTENT_LENGTH = 11] = "INVALID_CONTENT_LENGTH", A[A.INVALID_CHUNK_SIZE = 12] = "INVALID_CHUNK_SIZE", A[A.INVALID_STATUS = 13] = "INVALID_STATUS", A[A.INVALID_EOF_STATE = 14] = "INVALID_EOF_STATE", A[A.INVALID_TRANSFER_ENCODING = 15] = "INVALID_TRANSFER_ENCODING", A[A.CB_MESSAGE_BEGIN = 16] = "CB_MESSAGE_BEGIN", A[A.CB_HEADERS_COMPLETE = 17] = "CB_HEADERS_COMPLETE", A[A.CB_MESSAGE_COMPLETE = 18] = "CB_MESSAGE_COMPLETE", A[A.CB_CHUNK_HEADER = 19] = "CB_CHUNK_HEADER", A[A.CB_CHUNK_COMPLETE = 20] = "CB_CHUNK_COMPLETE", A[A.PAUSED = 21] = "PAUSED", A[A.PAUSED_UPGRADE = 22] = "PAUSED_UPGRADE", A[A.PAUSED_H2_UPGRADE = 23] = "PAUSED_H2_UPGRADE", A[A.USER = 24] = "USER";
  })(uB3 = Dq4.ERROR || (Dq4.ERROR = {}));
  var BB3;
  (function (A) {
    A[A.BOTH = 0] = "BOTH", A[A.REQUEST = 1] = "REQUEST", A[A.RESPONSE = 2] = "RESPONSE";
  })(BB3 = Dq4.TYPE || (Dq4.TYPE = {}));
  var mB3;
  (function (A) {
    A[A.CONNECTION_KEEP_ALIVE = 1] = "CONNECTION_KEEP_ALIVE", A[A.CONNECTION_CLOSE = 2] = "CONNECTION_CLOSE", A[A.CONNECTION_UPGRADE = 4] = "CONNECTION_UPGRADE", A[A.CHUNKED = 8] = "CHUNKED", A[A.UPGRADE = 16] = "UPGRADE", A[A.CONTENT_LENGTH = 32] = "CONTENT_LENGTH", A[A.SKIPBODY = 64] = "SKIPBODY", A[A.TRAILING = 128] = "TRAILING", A[A.TRANSFER_ENCODING = 512] = "TRANSFER_ENCODING";
  })(mB3 = Dq4.FLAGS || (Dq4.FLAGS = {}));
  var gB3;
  (function (A) {
    A[A.HEADERS = 1] = "HEADERS", A[A.CHUNKED_LENGTH = 2] = "CHUNKED_LENGTH", A[A.KEEP_ALIVE = 4] = "KEEP_ALIVE";
  })(gB3 = Dq4.LENIENT_FLAGS || (Dq4.LENIENT_FLAGS = {}));
  var zq;
  (function (A) {
    A[A.DELETE = 0] = "DELETE", A[A.GET = 1] = "GET", A[A.HEAD = 2] = "HEAD", A[A.POST = 3] = "POST", A[A.PUT = 4] = "PUT", A[A.CONNECT = 5] = "CONNECT", A[A.OPTIONS = 6] = "OPTIONS", A[A.TRACE = 7] = "TRACE", A[A.COPY = 8] = "COPY", A[A.LOCK = 9] = "LOCK", A[A.MKCOL = 10] = "MKCOL", A[A.MOVE = 11] = "MOVE", A[A.PROPFIND = 12] = "PROPFIND", A[A.PROPPATCH = 13] = "PROPPATCH", A[A.SEARCH = 14] = "SEARCH", A[A.UNLOCK = 15] = "UNLOCK", A[A.BIND = 16] = "BIND", A[A.REBIND = 17] = "REBIND", A[A.UNBIND = 18] = "UNBIND", A[A.ACL = 19] = "ACL", A[A.REPORT = 20] = "REPORT", A[A.MKACTIVITY = 21] = "MKACTIVITY", A[A.CHECKOUT = 22] = "CHECKOUT", A[A.MERGE = 23] = "MERGE", A[A["M-SEARCH"] = 24] = "M-SEARCH", A[A.NOTIFY = 25] = "NOTIFY", A[A.SUBSCRIBE = 26] = "SUBSCRIBE", A[A.UNSUBSCRIBE = 27] = "UNSUBSCRIBE", A[A.PATCH = 28] = "PATCH", A[A.PURGE = 29] = "PURGE", A[A.MKCALENDAR = 30] = "MKCALENDAR", A[A.LINK = 31] = "LINK", A[A.UNLINK = 32] = "UNLINK", A[A.SOURCE = 33] = "SOURCE", A[A.PRI = 34] = "PRI", A[A.DESCRIBE = 35] = "DESCRIBE", A[A.ANNOUNCE = 36] = "ANNOUNCE", A[A.SETUP = 37] = "SETUP", A[A.PLAY = 38] = "PLAY", A[A.PAUSE = 39] = "PAUSE", A[A.TEARDOWN = 40] = "TEARDOWN", A[A.GET_PARAMETER = 41] = "GET_PARAMETER", A[A.SET_PARAMETER = 42] = "SET_PARAMETER", A[A.REDIRECT = 43] = "REDIRECT", A[A.RECORD = 44] = "RECORD", A[A.FLUSH = 45] = "FLUSH";
  })(zq = Dq4.METHODS || (Dq4.METHODS = {}));
  Dq4.METHODS_HTTP = [zq.DELETE, zq.GET, zq.HEAD, zq.POST, zq.PUT, zq.CONNECT, zq.OPTIONS, zq.TRACE, zq.COPY, zq.LOCK, zq.MKCOL, zq.MOVE, zq.PROPFIND, zq.PROPPATCH, zq.SEARCH, zq.UNLOCK, zq.BIND, zq.REBIND, zq.UNBIND, zq.ACL, zq.REPORT, zq.MKACTIVITY, zq.CHECKOUT, zq.MERGE, zq["M-SEARCH"], zq.NOTIFY, zq.SUBSCRIBE, zq.UNSUBSCRIBE, zq.PATCH, zq.PURGE, zq.MKCALENDAR, zq.LINK, zq.UNLINK, zq.PRI, zq.SOURCE];
  Dq4.METHODS_ICE = [zq.SOURCE];
  Dq4.METHODS_RTSP = [zq.OPTIONS, zq.DESCRIBE, zq.ANNOUNCE, zq.SETUP, zq.PLAY, zq.PAUSE, zq.TEARDOWN, zq.GET_PARAMETER, zq.SET_PARAMETER, zq.REDIRECT, zq.RECORD, zq.FLUSH, zq.GET, zq.POST];
  Dq4.METHOD_MAP = xB3.enumToMap(zq);
  Dq4.H_METHOD_MAP = {};
  Object.keys(Dq4.METHOD_MAP).forEach(A => {
    if (/^H/.test(A)) Dq4.H_METHOD_MAP[A] = Dq4.METHOD_MAP[A];
  });
  var FB3;
  (function (A) {
    A[A.SAFE = 0] = "SAFE", A[A.SAFE_WITH_CB = 1] = "SAFE_WITH_CB", A[A.UNSAFE = 2] = "UNSAFE";
  })(FB3 = Dq4.FINISH || (Dq4.FINISH = {}));
  Dq4.ALPHA = [];
  for (let A = 65; A <= 90; A++) Dq4.ALPHA.push(String.fromCharCode(A)), Dq4.ALPHA.push(String.fromCharCode(A + 32));
  Dq4.NUM_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  Dq4.HEX_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  Dq4.NUM = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  Dq4.ALPHANUM = Dq4.ALPHA.concat(Dq4.NUM);
  Dq4.MARK = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
  Dq4.USERINFO_CHARS = Dq4.ALPHANUM.concat(Dq4.MARK).concat(["%", ";", ":", "&", "=", "+", "$", ","]);
  Dq4.STRICT_URL_CHAR = ["!", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"].concat(Dq4.ALPHANUM);
  Dq4.URL_CHAR = Dq4.STRICT_URL_CHAR.concat(["\t", "\f"]);
  for (let A = 128; A <= 255; A++) Dq4.URL_CHAR.push(A);
  Dq4.HEX = Dq4.NUM.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
  Dq4.STRICT_TOKEN = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "^", "_", "`", "|", "~"].concat(Dq4.ALPHANUM);
  Dq4.TOKEN = Dq4.STRICT_TOKEN.concat([" "]);
  Dq4.HEADER_CHARS = ["\t"];
  for (let A = 32; A <= 255; A++) if (A !== 127) Dq4.HEADER_CHARS.push(A);
  Dq4.CONNECTION_TOKEN_CHARS = Dq4.HEADER_CHARS.filter(A => A !== 44);
  Dq4.MAJOR = Dq4.NUM_MAP;
  Dq4.MINOR = Dq4.MAJOR;
  var X0A;
  (function (A) {
    A[A.GENERAL = 0] = "GENERAL", A[A.CONNECTION = 1] = "CONNECTION", A[A.CONTENT_LENGTH = 2] = "CONTENT_LENGTH", A[A.TRANSFER_ENCODING = 3] = "TRANSFER_ENCODING", A[A.UPGRADE = 4] = "UPGRADE", A[A.CONNECTION_KEEP_ALIVE = 5] = "CONNECTION_KEEP_ALIVE", A[A.CONNECTION_CLOSE = 6] = "CONNECTION_CLOSE", A[A.CONNECTION_UPGRADE = 7] = "CONNECTION_UPGRADE", A[A.TRANSFER_ENCODING_CHUNKED = 8] = "TRANSFER_ENCODING_CHUNKED";
  })(X0A = Dq4.HEADER_STATE || (Dq4.HEADER_STATE = {}));
  Dq4.SPECIAL_HEADERS = {
    connection: X0A.CONNECTION,
    "content-length": X0A.CONTENT_LENGTH,
    "proxy-connection": X0A.CONNECTION,
    "transfer-encoding": X0A.TRANSFER_ENCODING,
    upgrade: X0A.UPGRADE
  };
});

// Register to shared state
__$.Eq4 = Eq4;
