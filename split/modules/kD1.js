// Module: kD1
// Dependencies: UG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kD1 = v($U7 => {
  Object.defineProperty($U7, "__esModule", {
    value: !0
  });
  $U7.CallCredentials = void 0;
  var uE6 = __$.UG();
  function PK2(A) {
    return "getRequestHeaders" in A && typeof A.getRequestHeaders === "function";
  }
  class eDA {
    static createFromMetadataGenerator(A) {
      return new BE6(A);
    }
    static createFromGoogleCredential(A) {
      return eDA.createFromMetadataGenerator((K, q) => {
        let Y;
        if (PK2(A)) Y = A.getRequestHeaders(K.service_url);else Y = new Promise((z, w) => {
          A.getRequestMetadata(K.service_url, (H, J) => {
            if (H) {
              w(H);
              return;
            }
            if (!J) {
              w(Error("Headers not set by metadata plugin"));
              return;
            }
            z(J);
          });
        });
        Y.then(z => {
          let w = new uE6.Metadata();
          for (let H of Object.keys(z)) w.add(H, z[H]);
          q(null, w);
        }, z => {
          q(z);
        });
      });
    }
    static createEmpty() {
      return new mE6();
    }
  }
  $U7.CallCredentials = eDA;
  class ED1 extends eDA {
    constructor(A) {
      super();
      this.creds = A;
    }
    async generateMetadata(A) {
      let K = new uE6.Metadata(),
        q = await Promise.all(this.creds.map(Y => Y.generateMetadata(A)));
      for (let Y of q) K.merge(Y);
      return K;
    }
    compose(A) {
      return new ED1(this.creds.concat([A]));
    }
    _equals(A) {
      if (this === A) return !0;
      if (A instanceof ED1) return this.creds.every((K, q) => K._equals(A.creds[q]));else return !1;
    }
  }
  class BE6 extends eDA {
    constructor(A) {
      super();
      this.metadataGenerator = A;
    }
    generateMetadata(A) {
      return new Promise((K, q) => {
        this.metadataGenerator(A, (Y, z) => {
          if (z !== void 0) K(z);else q(Y);
        });
      });
    }
    compose(A) {
      return new ED1([this, A]);
    }
    _equals(A) {
      if (this === A) return !0;
      if (A instanceof BE6) return this.metadataGenerator === A.metadataGenerator;else return !1;
    }
  }
  class mE6 extends eDA {
    generateMetadata(A) {
      return Promise.resolve(new uE6.Metadata());
    }
    compose(A) {
      return A;
    }
    _equals(A) {
      return A instanceof mE6;
    }
  }
});

// Register to shared state
__$.kD1 = kD1;
