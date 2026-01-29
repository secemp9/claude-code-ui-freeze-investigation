// Module: TJ6
// Dependencies: Zo, _o, As4, zs4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TJ6 = v(ws4 => {
  Object.defineProperty(ws4, "__esModule", {
    value: !0
  });
  ws4.IdentityPoolClient = void 0;
  var ke9 = __$.Zo(),
    fJ6 = __$._o(),
    Ce9 = __$.As4(),
    Le9 = __$.zs4();
  class NJ6 extends ke9.BaseExternalAccountClient {
    constructor(A, K) {
      super(A, K);
      let q = (0, fJ6.originalOrCamelOptions)(A),
        Y = q.get("credential_source"),
        z = q.get("subject_token_supplier");
      if (!Y && !z) throw Error("A credential source or subject token supplier must be specified.");
      if (Y && z) throw Error("Only one of credential source or subject token supplier can be specified.");
      if (z) this.subjectTokenSupplier = z, this.credentialSourceType = "programmatic";else {
        let w = (0, fJ6.originalOrCamelOptions)(Y),
          H = (0, fJ6.originalOrCamelOptions)(w.get("format")),
          J = H.get("type") || "text",
          O = H.get("subject_token_field_name");
        if (J !== "json" && J !== "text") throw Error(`Invalid credential_source format "${J}"`);
        if (J === "json" && !O) throw Error("Missing subject_token_field_name for JSON credential_source format");
        let X = w.get("file"),
          $ = w.get("url"),
          _ = w.get("headers");
        if (X && $) throw Error('No valid Identity Pool "credential_source" provided, must be either file or url.');else if (X && !$) this.credentialSourceType = "file", this.subjectTokenSupplier = new Ce9.FileSubjectTokenSupplier({
          filePath: X,
          formatType: J,
          subjectTokenFieldName: O
        });else if (!X && $) this.credentialSourceType = "url", this.subjectTokenSupplier = new Le9.UrlSubjectTokenSupplier({
          url: $,
          formatType: J,
          subjectTokenFieldName: O,
          headers: _,
          additionalGaxiosOptions: NJ6.RETRY_CONFIG
        });else throw Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
      }
    }
    async retrieveSubjectToken() {
      return this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
    }
  }
  ws4.IdentityPoolClient = NJ6;
});

// Register to shared state
__$.TJ6 = TJ6;
