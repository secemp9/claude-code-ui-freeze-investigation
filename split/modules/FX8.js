// Module: FX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FX8 = v((LLz, gX8) => {
  function Ufq(A) {
    return {
      name: "RenderMan RSL",
      keywords: {
        keyword: "float color point normal vector matrix while for if do return else break extern continue",
        built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
      },
      illegal: "</",
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "surface displacement light volume imager",
        end: "\\("
      }, {
        beginKeywords: "illuminate illuminance gather",
        end: "\\("
      }]
    };
  }
  gX8.exports = Ufq;
});

// Register to shared state
__$.FX8 = FX8;
