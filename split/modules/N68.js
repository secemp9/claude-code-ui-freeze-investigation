// Module: N68
// Dependencies: Ow, W68, JoA, orA, ZI1, D1A, j68, ATA, uN, M68
//   ... and 22 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N68 = k(() => {
  __$.Ow();
  __$.W68();
  __$.JoA();
  __$.orA();
  __$.ZI1();
  __$.D1A();
  __$.j68();
  __$.ATA();
  __$.uN();
  __$.M68();
  __$.lh();
  __$.pI1();
  __$.V68();
  __$.mX = __$.f68(__$.FzA);
  __$.mX.Axios = __$.WTA;
  __$.mX.CanceledError = __$.BN;
  __$.mX.CancelToken = __$.D68;
  __$.mX.isCancel = __$.zTA;
  __$.mX.VERSION = __$.T1A;
  __$.mX.toFormData = __$.yl;
  __$.mX.AxiosError = __$.a4;
  __$.mX.Cancel = __$.mX.CanceledError;
  __$.mX.all = function (K) {
    return Promise.all(K);
  };
  __$.mX.spread = __$.lI1;
  __$.mX.isAxiosError = __$.iI1;
  __$.mX.mergeConfig = __$.yR;
  __$.mX.AxiosHeaders = __$.eJ;
  __$.mX.formToJSON = A => __$.rrA(__$.i1.isHTMLForm(A) ? new FormData(A) : A);
  __$.mX.getAdapter = __$._oA.getAdapter;
  __$.mX.HttpStatusCode = __$.P68;
  __$.mX.default = __$.mX;
  __$.A8 = __$.mX;
});

// Register to shared state
__$.N68 = N68;
