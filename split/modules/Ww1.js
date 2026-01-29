// Module: Ww1
// Dependencies: Zo, xJ6, Es4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ww1 = v(ys4 => {
  Object.defineProperty(ys4, "__esModule", {
    value: !0
  });
  ys4.PluggableAuthClient = ys4.ExecutableError = void 0;
  var le9 = __$.Zo(),
    ie9 = __$.xJ6(),
    ne9 = __$.Es4();
  class mJ6 extends Error {
    constructor(A, K) {
      super(`The executable failed with exit code: ${K} and error message: ${A}.`);
      this.code = K, Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  ys4.ExecutableError = mJ6;
  var re9 = 30000,
    ks4 = 5000,
    Cs4 = 120000,
    oe9 = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES",
    Ls4 = 1;
  class Rs4 extends le9.BaseExternalAccountClient {
    constructor(A, K) {
      super(A, K);
      if (!A.credential_source.executable) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (this.command = A.credential_source.executable.command, !this.command) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (A.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = re9;else if (this.timeoutMillis = A.credential_source.executable.timeout_millis, this.timeoutMillis < ks4 || this.timeoutMillis > Cs4) throw Error(`Timeout must be between ${ks4} and ${Cs4} milliseconds.`);
      this.outputFile = A.credential_source.executable.output_file, this.handler = new ne9.PluggableAuthHandler({
        command: this.command,
        timeoutMillis: this.timeoutMillis,
        outputFile: this.outputFile
      }), this.credentialSourceType = "executable";
    }
    async retrieveSubjectToken() {
      if (process.env[oe9] !== "1") throw Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
      let A = void 0;
      if (this.outputFile) A = await this.handler.retrieveCachedResponse();
      if (!A) {
        let K = new Map();
        if (K.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), K.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), K.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile) K.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
        let q = this.getServiceAccountEmail();
        if (q) K.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", q);
        A = await this.handler.retrieveResponseFromExecutable(K);
      }
      if (A.version > Ls4) throw Error(`Version of executable is not currently supported, maximum supported version is ${Ls4}.`);
      if (!A.success) throw new mJ6(A.errorMessage, A.errorCode);
      if (this.outputFile) {
        if (!A.expirationTime) throw new ie9.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
      }
      if (A.isExpired()) throw Error("Executable response is expired.");
      return A.subjectToken;
    }
  }
  ys4.PluggableAuthClient = Rs4;
});

// Register to shared state
__$.Ww1 = Ww1;
