// Module: H$7
// Dependencies: xX7, FX7, tX7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H$7 = v((F8H, w$7) => {
  var {
      createFile: eX7,
      createFileSync: A$7
    } = __$.xX7(),
    {
      createLink: K$7,
      createLinkSync: q$7
    } = __$.FX7(),
    {
      createSymlink: Y$7,
      createSymlinkSync: z$7
    } = __$.tX7();
  w$7.exports = {
    createFile: eX7,
    createFileSync: A$7,
    ensureFile: eX7,
    ensureFileSync: A$7,
    createLink: K$7,
    createLinkSync: q$7,
    ensureLink: K$7,
    ensureLinkSync: q$7,
    createSymlink: Y$7,
    createSymlinkSync: z$7,
    ensureSymlink: Y$7,
    ensureSymlinkSync: z$7
  };
});

// Register to shared state
__$.H$7 = H$7;
