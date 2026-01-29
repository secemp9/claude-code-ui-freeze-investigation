// Module: MgA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MgA = v(oI7 => {
  Object.defineProperty(oI7, "__esModule", {
    value: !0
  });
  oI7.NetworkParam = oI7.NetworkDefault = oI7.Endpoint = void 0;
  oI7.Endpoint = {
    _initialize: "initialize",
    _rgstr: "rgstr",
    _download_config_specs: "download_config_specs"
  };
  oI7.NetworkDefault = {
    [oI7.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
    [oI7.Endpoint._initialize]: "https://featureassets.org/v1",
    [oI7.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1"
  };
  oI7.NetworkParam = {
    EventCount: "ec",
    SdkKey: "k",
    SdkType: "st",
    SdkVersion: "sv",
    Time: "t",
    SessionID: "sid",
    StatsigEncoded: "se",
    IsGzipped: "gz"
  };
});

// Register to shared state
__$.MgA = MgA;
