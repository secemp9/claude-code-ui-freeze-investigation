// Module: wuK
// Dependencies: cd6, ld6, XC1, nd6, GC1, quK, XfA, rd6, Rc, _C1
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wuK = k(() => {
  __$.cd6();
  __$.ld6();
  __$.XC1();
  __$.nd6();
  __$.GC1();
  __$.quK();
  __$.XfA = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, __$.rd6 = {
    G: function (A, K, q) {
      let Y = A.getFullYear() > 0 ? 1 : 0;
      switch (K) {
        case "G":
        case "GG":
        case "GGG":
          return q.era(Y, {
            width: "abbreviated"
          });
        case "GGGGG":
          return q.era(Y, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return q.era(Y, {
            width: "wide"
          });
      }
    },
    y: function (A, K, q) {
      if (K === "yo") {
        let Y = A.getFullYear(),
          z = Y > 0 ? Y : 1 - Y;
        return q.ordinalNumber(z, {
          unit: "year"
        });
      }
      return __$.Rc.y(A, K);
    },
    Y: function (A, K, q, Y) {
      let z = __$._C1(A, Y),
        w = z > 0 ? z : 1 - z;
      if (K === "YY") {
        let H = w % 100;
        return __$.T2(H, 2);
      }
      if (K === "Yo") return q.ordinalNumber(w, {
        unit: "year"
      });
      return __$.T2(w, K.length);
    },
    R: function (A, K) {
      let q = __$.OC1(A);
      return __$.T2(q, K.length);
    },
    u: function (A, K) {
      let q = A.getFullYear();
      return __$.T2(q, K.length);
    },
    Q: function (A, K, q) {
      let Y = Math.ceil((A.getMonth() + 1) / 3);
      switch (K) {
        case "Q":
          return String(Y);
        case "QQ":
          return __$.T2(Y, 2);
        case "Qo":
          return q.ordinalNumber(Y, {
            unit: "quarter"
          });
        case "QQQ":
          return q.quarter(Y, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return q.quarter(Y, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return q.quarter(Y, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function (A, K, q) {
      let Y = Math.ceil((A.getMonth() + 1) / 3);
      switch (K) {
        case "q":
          return String(Y);
        case "qq":
          return __$.T2(Y, 2);
        case "qo":
          return q.ordinalNumber(Y, {
            unit: "quarter"
          });
        case "qqq":
          return q.quarter(Y, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return q.quarter(Y, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return q.quarter(Y, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function (A, K, q) {
      let Y = A.getMonth();
      switch (K) {
        case "M":
        case "MM":
          return __$.Rc.M(A, K);
        case "Mo":
          return q.ordinalNumber(Y + 1, {
            unit: "month"
          });
        case "MMM":
          return q.month(Y, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return q.month(Y, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return q.month(Y, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function (A, K, q) {
      let Y = A.getMonth();
      switch (K) {
        case "L":
          return String(Y + 1);
        case "LL":
          return __$.T2(Y + 1, 2);
        case "Lo":
          return q.ordinalNumber(Y + 1, {
            unit: "month"
          });
        case "LLL":
          return q.month(Y, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return q.month(Y, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return q.month(Y, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function (A, K, q, Y) {
      let z = __$.KuK(A, Y);
      if (K === "wo") return q.ordinalNumber(z, {
        unit: "week"
      });
      return __$.T2(z, K.length);
    },
    I: function (A, K, q) {
      let Y = __$.exK(A);
      if (K === "Io") return q.ordinalNumber(Y, {
        unit: "week"
      });
      return __$.T2(Y, K.length);
    },
    d: function (A, K, q) {
      if (K === "do") return q.ordinalNumber(A.getDate(), {
        unit: "date"
      });
      return __$.Rc.d(A, K);
    },
    D: function (A, K, q) {
      let Y = __$.txK(A);
      if (K === "Do") return q.ordinalNumber(Y, {
        unit: "dayOfYear"
      });
      return __$.T2(Y, K.length);
    },
    E: function (A, K, q) {
      let Y = A.getDay();
      switch (K) {
        case "E":
        case "EE":
        case "EEE":
          return q.day(Y, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return q.day(Y, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return q.day(Y, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return q.day(Y, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function (A, K, q, Y) {
      let z = A.getDay(),
        w = (z - Y.weekStartsOn + 8) % 7 || 7;
      switch (K) {
        case "e":
          return String(w);
        case "ee":
          return __$.T2(w, 2);
        case "eo":
          return q.ordinalNumber(w, {
            unit: "day"
          });
        case "eee":
          return q.day(z, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return q.day(z, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return q.day(z, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return q.day(z, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function (A, K, q, Y) {
      let z = A.getDay(),
        w = (z - Y.weekStartsOn + 8) % 7 || 7;
      switch (K) {
        case "c":
          return String(w);
        case "cc":
          return __$.T2(w, K.length);
        case "co":
          return q.ordinalNumber(w, {
            unit: "day"
          });
        case "ccc":
          return q.day(z, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return q.day(z, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return q.day(z, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return q.day(z, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function (A, K, q) {
      let Y = A.getDay(),
        z = Y === 0 ? 7 : Y;
      switch (K) {
        case "i":
          return String(z);
        case "ii":
          return __$.T2(z, K.length);
        case "io":
          return q.ordinalNumber(z, {
            unit: "day"
          });
        case "iii":
          return q.day(Y, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return q.day(Y, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return q.day(Y, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return q.day(Y, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function (A, K, q) {
      let z = A.getHours() / 12 >= 1 ? "pm" : "am";
      switch (K) {
        case "a":
        case "aa":
          return q.dayPeriod(z, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return q.dayPeriod(z, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return q.dayPeriod(z, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return q.dayPeriod(z, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function (A, K, q) {
      let Y = A.getHours(),
        z;
      if (Y === 12) z = __$.XfA.noon;else if (Y === 0) z = __$.XfA.midnight;else z = Y / 12 >= 1 ? "pm" : "am";
      switch (K) {
        case "b":
        case "bb":
          return q.dayPeriod(z, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return q.dayPeriod(z, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return q.dayPeriod(z, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return q.dayPeriod(z, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function (A, K, q) {
      let Y = A.getHours(),
        z;
      if (Y >= 17) z = __$.XfA.evening;else if (Y >= 12) z = __$.XfA.afternoon;else if (Y >= 4) z = __$.XfA.morning;else z = __$.XfA.night;
      switch (K) {
        case "B":
        case "BB":
        case "BBB":
          return q.dayPeriod(z, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return q.dayPeriod(z, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return q.dayPeriod(z, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function (A, K, q) {
      if (K === "ho") {
        let Y = A.getHours() % 12;
        if (Y === 0) Y = 12;
        return q.ordinalNumber(Y, {
          unit: "hour"
        });
      }
      return __$.Rc.h(A, K);
    },
    H: function (A, K, q) {
      if (K === "Ho") return q.ordinalNumber(A.getHours(), {
        unit: "hour"
      });
      return __$.Rc.H(A, K);
    },
    K: function (A, K, q) {
      let Y = A.getHours() % 12;
      if (K === "Ko") return q.ordinalNumber(Y, {
        unit: "hour"
      });
      return __$.T2(Y, K.length);
    },
    k: function (A, K, q) {
      let Y = A.getHours();
      if (Y === 0) Y = 24;
      if (K === "ko") return q.ordinalNumber(Y, {
        unit: "hour"
      });
      return __$.T2(Y, K.length);
    },
    m: function (A, K, q) {
      if (K === "mo") return q.ordinalNumber(A.getMinutes(), {
        unit: "minute"
      });
      return __$.Rc.m(A, K);
    },
    s: function (A, K, q) {
      if (K === "so") return q.ordinalNumber(A.getSeconds(), {
        unit: "second"
      });
      return __$.Rc.s(A, K);
    },
    S: function (A, K) {
      return __$.Rc.S(A, K);
    },
    X: function (A, K, q) {
      let Y = A.getTimezoneOffset();
      if (Y === 0) return "Z";
      switch (K) {
        case "X":
          return __$.zuK(Y);
        case "XXXX":
        case "XX":
          return __$.SYA(Y);
        case "XXXXX":
        case "XXX":
        default:
          return __$.SYA(Y, ":");
      }
    },
    x: function (A, K, q) {
      let Y = A.getTimezoneOffset();
      switch (K) {
        case "x":
          return __$.zuK(Y);
        case "xxxx":
        case "xx":
          return __$.SYA(Y);
        case "xxxxx":
        case "xxx":
        default:
          return __$.SYA(Y, ":");
      }
    },
    O: function (A, K, q) {
      let Y = A.getTimezoneOffset();
      switch (K) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + __$.YuK(Y, ":");
        case "OOOO":
        default:
          return "GMT" + __$.SYA(Y, ":");
      }
    },
    z: function (A, K, q) {
      let Y = A.getTimezoneOffset();
      switch (K) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + __$.YuK(Y, ":");
        case "zzzz":
        default:
          return "GMT" + __$.SYA(Y, ":");
      }
    },
    t: function (A, K, q) {
      let Y = Math.trunc(+A / 1000);
      return __$.T2(Y, K.length);
    },
    T: function (A, K, q) {
      return __$.T2(+A, K.length);
    }
  };
});

// Register to shared state
__$.wuK = wuK;
