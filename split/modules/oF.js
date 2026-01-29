// Module: oF
// Dependencies: Ub

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oF = v(vx5 => {
  var Sc8 = CA("os"),
    Fo1 = CA("process"),
    Px5 = __$.Ub(),
    hc8 = {
      isCrtAvailable: !1
    },
    Vx5 = () => {
      if (hc8.isCrtAvailable) return ["md/crt-avail"];
      return null;
    },
    bc8 = ({
      serviceId: A,
      clientVersion: K
    }) => {
      return async q => {
        let Y = [["aws-sdk-js", K], ["ua", "2.1"], [`os/${Sc8.platform()}`, Sc8.release()], ["lang/js"], ["md/nodejs", `${Fo1.versions.node}`]],
          z = Vx5();
        if (z) Y.push(z);
        if (A) Y.push([`api/${A}`, K]);
        if (Fo1.env.AWS_EXECUTION_ENV) Y.push([`exec-env/${Fo1.env.AWS_EXECUTION_ENV}`]);
        let w = await q?.userAgentAppId?.();
        return w ? [...Y, [`app/${w}`]] : [...Y];
      };
    },
    fx5 = bc8,
    xc8 = "AWS_SDK_UA_APP_ID",
    uc8 = "sdk_ua_app_id",
    Nx5 = "sdk-ua-app-id",
    Tx5 = {
      environmentVariableSelector: A => A[xc8],
      configFileSelector: A => A[uc8] ?? A[Nx5],
      default: Px5.DEFAULT_UA_APP_ID
    };
  vx5.NODE_APP_ID_CONFIG_OPTIONS = Tx5;
  vx5.UA_APP_ID_ENV_NAME = xc8;
  vx5.UA_APP_ID_INI_NAME = uc8;
  vx5.createDefaultUserAgentProvider = bc8;
  vx5.crtAvailability = hc8;
  vx5.defaultUserAgent = fx5;
});

// Register to shared state
__$.oF = oF;
