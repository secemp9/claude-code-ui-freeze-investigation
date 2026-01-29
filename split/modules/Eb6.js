// Module: Eb6
// Dependencies: P0, sV1, vUA, rh6, uV1, hUA, Sh6, Kf1, ah6, Yf1
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eb6 = v((bUA, K2K) => {
  var vb6 = __$.P0();
  bUA = K2K.exports = {
    CSSStyleDeclaration: __$.sV1(),
    CharacterData: __$.vUA(),
    Comment: __$.rh6(),
    DOMException: __$.uV1(),
    DOMImplementation: __$.hUA(),
    DOMTokenList: __$.Sh6(),
    Document: __$.Kf1(),
    DocumentFragment: __$.ah6(),
    DocumentType: __$.Yf1(),
    Element: __$.QMA(),
    HTMLParser: __$.$f1(),
    NamedNodeMap: __$.mh6(),
    Node: __$.RW(),
    NodeList: __$.A9A(),
    NodeFilter: __$.LUA(),
    ProcessingInstruction: __$.th6(),
    Text: __$.ih6(),
    Window: __$.kb6()
  };
  vb6.merge(bUA, __$.Jb6());
  vb6.merge(bUA, __$.eV1().elements);
  vb6.merge(bUA, __$.Zb6().elements);
});

// Register to shared state
__$.Eb6 = Eb6;
