// Module: Es4
// Dependencies: Ww1, xJ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Es4 = v(Ts4 => {
  Object.defineProperty(Ts4, "__esModule", {
    value: !0
  });
  Ts4.PluggableAuthHandler = void 0;
  var de9 = __$.Ww1(),
    m7A = __$.xJ6(),
    ce9 = CA("child_process"),
    uJ6 = CA("fs");
  class BJ6 {
    constructor(A) {
      if (!A.command) throw Error("No command provided.");
      if (this.commandComponents = BJ6.parseCommand(A.command), this.timeoutMillis = A.timeoutMillis, !this.timeoutMillis) throw Error("No timeoutMillis provided.");
      this.outputFile = A.outputFile;
    }
    retrieveResponseFromExecutable(A) {
      return new Promise((K, q) => {
        let Y = ce9.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
            env: {
              ...process.env,
              ...Object.fromEntries(A)
            }
          }),
          z = "";
        Y.stdout.on("data", H => {
          z += H;
        }), Y.stderr.on("data", H => {
          z += H;
        });
        let w = setTimeout(() => {
          return Y.removeAllListeners(), Y.kill(), q(Error("The executable failed to finish within the timeout specified."));
        }, this.timeoutMillis);
        Y.on("close", H => {
          if (clearTimeout(w), H === 0) try {
            let J = JSON.parse(z),
              O = new m7A.ExecutableResponse(J);
            return K(O);
          } catch (J) {
            if (J instanceof m7A.ExecutableResponseError) return q(J);
            return q(new m7A.ExecutableResponseError(`The executable returned an invalid response: ${z}`));
          } else return q(new de9.ExecutableError(z, H.toString()));
        });
      });
    }
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0) return;
      let A;
      try {
        A = await uJ6.promises.realpath(this.outputFile);
      } catch (q) {
        return;
      }
      if (!(await uJ6.promises.lstat(A)).isFile()) return;
      let K = await uJ6.promises.readFile(A, {
        encoding: "utf8"
      });
      if (K === "") return;
      try {
        let q = JSON.parse(K);
        if (new m7A.ExecutableResponse(q).isValid()) return new m7A.ExecutableResponse(q);
        return;
      } catch (q) {
        if (q instanceof m7A.ExecutableResponseError) throw q;
        throw new m7A.ExecutableResponseError(`The output file contained an invalid response: ${K}`);
      }
    }
    static parseCommand(A) {
      let K = A.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!K) throw Error(`Provided command: "${A}" could not be parsed.`);
      for (let q = 0; q < K.length; q++) if (K[q][0] === '"' && K[q].slice(-1) === '"') K[q] = K[q].slice(1, -1);
      return K;
    }
  }
  Ts4.PluggableAuthHandler = BJ6;
});

// Register to shared state
__$.Es4 = Es4;
