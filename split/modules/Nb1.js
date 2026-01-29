// Module: Nb1
// Dependencies: aY8, q28, V1A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nb1 = v(gN => {
  var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2157/node_modules/spawn-rx/lib/src",
    CE = gN && gN.__assign || function () {
      return CE = Object.assign || function (A) {
        for (var K, q = 1, Y = arguments.length; q < Y; q++) {
          K = arguments[q];
          for (var z in K) if (Object.prototype.hasOwnProperty.call(K, z)) A[z] = K[z];
        }
        return A;
      }, CE.apply(this, arguments);
    },
    TZq = gN && gN.__rest || function (A, K) {
      var q = {};
      for (var Y in A) if (Object.prototype.hasOwnProperty.call(A, Y) && K.indexOf(Y) < 0) q[Y] = A[Y];
      if (A != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var z = 0, Y = Object.getOwnPropertySymbols(A); z < Y.length; z++) if (K.indexOf(Y[z]) < 0 && Object.prototype.propertyIsEnumerable.call(A, Y[z])) q[Y[z]] = A[Y[z]];
      }
      return q;
    },
    vZq = gN && gN.__spreadArray || function (A, K, q) {
      if (q || arguments.length === 2) {
        for (var Y = 0, z = K.length, w; Y < z; Y++) if (w || !(Y in K)) {
          if (!w) w = Array.prototype.slice.call(K, 0, Y);
          w[Y] = K[Y];
        }
      }
      return A.concat(w || Array.prototype.slice.call(K));
    };
  Object.defineProperty(gN, "__esModule", {
    value: !0
  });
  gN.findActualExecutable = ioA;
  gN.spawnDetached = fb1;
  gN.spawn = RTA;
  gN.spawnDetachedPromise = LZq;
  gN.spawnPromise = RZq;
  var CTA = CA("path"),
    EZq = CA("net"),
    LTA = CA("fs"),
    Ai = __$.aY8(),
    Y28 = __$.q28(),
    kZq = CA("child_process"),
    CZq = __$.V1A(),
    H28 = process.platform === "win32",
    LwA = (0, CZq.default)("spawn-rx");
  function z28(A) {
    try {
      return LTA.statSync(A);
    } catch (K) {
      return null;
    }
  }
  function w28(A) {
    if (A.match(/[\\/]/)) return LwA("Path has slash in directory, bailing"), A;
    var K = CTA.join(".", A);
    if (z28(K)) return LwA("Found executable in currect directory: ".concat(K)), LTA.realpathSync(K);
    var q = process.env.PATH.split(H28 ? ";" : ":");
    for (var Y = 0, z = q; Y < z.length; Y++) {
      var w = z[Y],
        H = CTA.join(w, A);
      if (z28(H)) return LTA.realpathSync(H);
    }
    return LwA("Failed to find executable anywhere in path"), A;
  }
  function ioA(A, K) {
    if (process.platform !== "win32") return {
      cmd: w28(A),
      args: K
    };
    if (!LTA.existsSync(A)) {
      var q = [".exe", ".bat", ".cmd", ".ps1"];
      for (var Y = 0, z = q; Y < z.length; Y++) {
        var w = z[Y],
          H = w28("".concat(A).concat(w));
        if (LTA.existsSync(H)) return ioA(H, K);
      }
    }
    if (A.match(/\.ps1$/i)) {
      var J = CTA.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
        O = ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", A];
      return {
        cmd: J,
        args: O.concat(K)
      };
    }
    if (A.match(/\.(bat|cmd)$/i)) {
      var J = CTA.join(process.env.SYSTEMROOT, "System32", "cmd.exe"),
        X = vZq(["/C", A], K, !0);
      return {
        cmd: J,
        args: X
      };
    }
    if (A.match(/\.(js)$/i)) {
      var J = process.execPath,
        $ = [A];
      return {
        cmd: J,
        args: $.concat(K)
      };
    }
    return {
      cmd: A,
      args: K
    };
  }
  function fb1(A, K, q) {
    var Y = ioA(A, K !== null && K !== void 0 ? K : []),
      z = Y.cmd,
      w = Y.args;
    if (!H28) return RTA(z, w, Object.assign({}, q || {}, {
      detached: !0
    }));
    var H = [z].concat(w),
      J = CTA.join(__dirname, "..", "..", "vendor", "jobber", "Jobber.exe"),
      O = CE(CE({}, q !== null && q !== void 0 ? q : {}), {
        detached: !0,
        jobber: !0
      });
    return LwA("spawnDetached: ".concat(J, ", ").concat(H)), RTA(J, H, O);
  }
  function RTA(A, K, q) {
    q = q !== null && q !== void 0 ? q : {};
    var Y = new Ai.Observable(function (z) {
      var {
          stdin: w,
          jobber: H,
          split: J,
          encoding: O
        } = q,
        X = TZq(q, ["stdin", "jobber", "split", "encoding"]),
        $ = ioA(A, K),
        _ = $.cmd,
        G = $.args;
      LwA("spawning process: ".concat(_, " ").concat(G.join(), ", ").concat(JSON.stringify(X)));
      var Z = (0, kZq.spawn)(_, G, X),
        W = function (f) {
          return function (N) {
            if (N.length < 1) return;
            if (q.echoOutput) (f === "stdout" ? process.stdout : process.stderr).write(N);
            var T = "<< String sent back was too long >>";
            try {
              if (typeof N === "string") T = N.toString();else T = N.toString(O || "utf8");
            } catch (C) {
              T = "<< Lost chunk of process output for ".concat(A, " - length was ").concat(N.length, ">>");
            }
            z.next({
              source: f,
              text: T
            });
          };
        },
        D = new Ai.Subscription();
      if (q.stdin) if (Z.stdin) D.add(q.stdin.subscribe({
        next: function (f) {
          return Z.stdin.write(f);
        },
        error: z.error.bind(z),
        complete: function () {
          return Z.stdin.end();
        }
      }));else z.error(Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
      var j = null,
        M = null,
        P = !1;
      if (Z.stdout) M = new Ai.AsyncSubject(), Z.stdout.on("data", W("stdout")), Z.stdout.on("close", function () {
        M.next(!0), M.complete();
      });else M = (0, Ai.of)(!0);
      if (Z.stderr) j = new Ai.AsyncSubject(), Z.stderr.on("data", W("stderr")), Z.stderr.on("close", function () {
        j.next(!0), j.complete();
      });else j = (0, Ai.of)(!0);
      return Z.on("error", function (f) {
        P = !0, z.error(f);
      }), Z.on("close", function (f) {
        P = !0;
        var N = (0, Ai.merge)(M, j).pipe((0, Y28.reduce)(function (T) {
          return T;
        }, !0));
        if (f === 0) N.subscribe(function () {
          return z.complete();
        });else N.subscribe(function () {
          var T = Error("Failed with exit code: ".concat(f));
          T.exitCode = f, T.code = f, z.error(T);
        });
      }), D.add(new Ai.Subscription(function () {
        if (P) return;
        if (LwA("Killing process: ".concat(_, " ").concat(G.join())), q.jobber) EZq.connect("\\\\.\\pipe\\jobber-".concat(Z.pid)), setTimeout(function () {
          return Z.kill();
        }, 5000);else Z.kill();
      })), D;
    });
    return q.split ? Y : Y.pipe((0, Y28.map)(function (z) {
      return z === null || z === void 0 ? void 0 : z.text;
    }));
  }
  function J28(A) {
    return new Promise(function (K, q) {
      var Y = "";
      A.subscribe({
        next: function (z) {
          return Y += z;
        },
        error: function (z) {
          var w = Error("".concat(Y, `
`).concat(z.message));
          if ("exitCode" in z) w.exitCode = z.exitCode, w.code = z.exitCode;
          q(w);
        },
        complete: function () {
          return K(Y);
        }
      });
    });
  }
  function O28(A) {
    return new Promise(function (K, q) {
      var Y = "",
        z = "";
      A.subscribe({
        next: function (w) {
          return w.source === "stdout" ? Y += w.text : z += w.text;
        },
        error: function (w) {
          var H = Error("".concat(Y, `
`).concat(w.message));
          if ("exitCode" in w) H.exitCode = w.exitCode, H.code = w.exitCode, H.stdout = Y, H.stderr = z;
          q(H);
        },
        complete: function () {
          return K([Y, z]);
        }
      });
    });
  }
  function LZq(A, K, q) {
    if (q === null || q === void 0 ? void 0 : q.split) return O28(fb1(A, K, CE(CE({}, q !== null && q !== void 0 ? q : {}), {
      split: !0
    })));else return J28(fb1(A, K, CE(CE({}, q !== null && q !== void 0 ? q : {}), {
      split: !1
    })));
  }
  function RZq(A, K, q) {
    if (q === null || q === void 0 ? void 0 : q.split) return O28(RTA(A, K, CE(CE({}, q !== null && q !== void 0 ? q : {}), {
      split: !0
    })));else return J28(RTA(A, K, CE(CE({}, q !== null && q !== void 0 ? q : {}), {
      split: !1
    })));
  }
});

// Register to shared state
__$.Nb1 = Nb1;
