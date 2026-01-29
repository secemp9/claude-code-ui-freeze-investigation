// Module: O07
// Dependencies: BO7, UO7, A07

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O07 = v((X8H, J07) => {
  var {
      createFile: K07,
      createFileSync: q07
    } = __$.BO7(),
    {
      createLink: Y07,
      createLinkSync: z07
    } = __$.UO7(),
    {
      createSymlink: w07,
      createSymlinkSync: H07
    } = __$.A07();
  J07.exports = {
    createFile: K07,
    createFileSync: q07,
    ensureFile: K07,
    ensureFileSync: q07,
    createLink: Y07,
    createLinkSync: z07,
    ensureLink: Y07,
    ensureLinkSync: z07,
    createSymlink: w07,
    createSymlinkSync: H07,
    ensureSymlink: w07,
    ensureSymlinkSync: H07
  };
});

// Register to shared state
__$.O07 = O07;
