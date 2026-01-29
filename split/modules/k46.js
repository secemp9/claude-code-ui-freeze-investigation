// Module: k46
// Dependencies: y8w, ERA, Mr3, YRA, I8w, v0A, S8w, m34, Pr3, E0A
//   ... and 86 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var k46 = k(() => {
  __$.y8w = __$.ERA(), __$.Mr3 = __$.YRA(), __$.I8w = __$.v0A(), __$.S8w = __$.m34(), __$.Pr3 = __$.E0A(), __$.h8w = __$.j86(), __$.Vr3 = __$.Y94(), __$.b8w = __$.$94(), __$.fr3 = __$._2(), __$.Zq1 = __$.j9(), {
    InvalidArgumentError: __$.Gq1
  } = __$.fr3, __$.n0A = __$.YY4(), __$.x8w = __$.wRA(), __$.u8w = __$.U86(), __$.B8w = __$.pY4(), __$.m8w = __$.d86(), __$.g8w = __$.I86(), __$.F8w = __$.TK1(), {
    getGlobalDispatcher: __$.Nr3,
    setGlobalDispatcher: __$.Tr3
  } = __$.SK1(), __$.Q8w = __$.hK1(), __$.U8w = __$.GK1(), __$.p8w = __$.ZK1();
  Object.assign(__$.Mr3.prototype, __$.n0A);
  __$.v46 = __$.Pr3, __$.E46 = __$.Vr3, __$.kr3 = {
    redirect: __$.oY4(),
    retry: __$.sY4(),
    dump: __$.A24(),
    dns: __$.w24()
  }, __$.Cr3 = {
    parseHeaders: __$.Zq1.parseHeaders,
    headerNameToString: __$.Zq1.headerNameToString
  };
  __$.Wq1 = __$.Tr3;
  __$.d8w = __$.pRA().fetch;
  __$.Lr3 = __$.d8A().Headers, __$.Rr3 = __$.QRA().Response, __$.yr3 = __$.u0A().Request, __$.Ir3 = __$._RA().FormData, __$.Sr3 = globalThis.File ?? CA("node:buffer").File, __$.hr3 = __$.Nz4().FileReader;
  ({
    setGlobalOrigin: __$.c8w,
    getGlobalOrigin: __$.l8w
  } = __$.L66()), {
    CacheStorage: __$.vr3
  } = __$.Iz4(), {
    kConstruct: __$.Er3
  } = __$.tK1();
  __$.br3 = new __$.vr3(__$.Er3);
  ({
    deleteCookie: __$.i8w,
    getCookies: __$.n8w,
    getSetCookies: __$.r8w,
    setCookie: __$.o8w
  } = __$.pz4()), {
    parseMIMEType: __$.a8w,
    serializeAMimeType: __$.s8w
  } = __$.IV(), {
    CloseEvent: __$.t8w,
    ErrorEvent: __$.e8w,
    MessageEvent: __$.A4w
  } = __$.U0A();
  __$.xr3 = __$.Qw4().WebSocket, __$.ur3 = __$.YyA(__$.n0A.request), __$.Br3 = __$.YyA(__$.n0A.stream), __$.mr3 = __$.YyA(__$.n0A.pipeline), __$.gr3 = __$.YyA(__$.n0A.connect), __$.Fr3 = __$.YyA(__$.n0A.upgrade);
  ({
    EventSource: __$.K4w
  } = __$.AH4());
});

// Register to shared state
__$.k46 = k46;
