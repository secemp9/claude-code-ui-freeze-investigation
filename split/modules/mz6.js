// Module: mz6
// Dependencies: dX, uz6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mz6 = v(gF9 => {
  var c21 = __$.dX();
  function iQ4(A) {
    return Promise.all(Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      if (typeof Y === "string") K.push([q, Y]);else K.push(Y().then(z => [q, z]));
      return K;
    }, [])).then(K => K.reduce((q, [Y, z]) => {
      return q[Y] = z, q;
    }, {}));
  }
  function nQ4(A) {
    return async K => {
      A.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
      let {
          GetCredentialsForIdentityCommand: q,
          CognitoIdentityClient: Y
        } = await Promise.resolve().then(function () {
          return __$.uz6();
        }),
        z = X => A.clientConfig?.[X] ?? A.parentClientConfig?.[X] ?? K?.callerClientConfig?.[X],
        {
          Credentials: {
            AccessKeyId: w = SF9(A.logger),
            Expiration: H,
            SecretKey: J = bF9(A.logger),
            SessionToken: O
          } = hF9(A.logger)
        } = await (A.client ?? new Y(Object.assign({}, A.clientConfig ?? {}, {
          region: z("region"),
          profile: z("profile"),
          userAgentAppId: z("userAgentAppId")
        }))).send(new q({
          CustomRoleArn: A.customRoleArn,
          IdentityId: A.identityId,
          Logins: A.logins ? await iQ4(A.logins) : void 0
        }));
      return {
        identityId: A.identityId,
        accessKeyId: w,
        secretAccessKey: J,
        sessionToken: O,
        expiration: H
      };
    };
  }
  function SF9(A) {
    throw new c21.CredentialsProviderError("Response from Amazon Cognito contained no access key ID", {
      logger: A
    });
  }
  function hF9(A) {
    throw new c21.CredentialsProviderError("Response from Amazon Cognito contained no credentials", {
      logger: A
    });
  }
  function bF9(A) {
    throw new c21.CredentialsProviderError("Response from Amazon Cognito contained no secret key", {
      logger: A
    });
  }
  var Bz6 = "IdentityIds";
  class rQ4 {
    dbName;
    constructor(A = "aws:cognito-identity-ids") {
      this.dbName = A;
    }
    getItem(A) {
      return this.withObjectStore("readonly", K => {
        let q = K.get(A);
        return new Promise(Y => {
          q.onerror = () => Y(null), q.onsuccess = () => Y(q.result ? q.result.value : null);
        });
      }).catch(() => null);
    }
    removeItem(A) {
      return this.withObjectStore("readwrite", K => {
        let q = K.delete(A);
        return new Promise((Y, z) => {
          q.onerror = () => z(q.error), q.onsuccess = () => Y();
        });
      });
    }
    setItem(A, K) {
      return this.withObjectStore("readwrite", q => {
        let Y = q.put({
          id: A,
          value: K
        });
        return new Promise((z, w) => {
          Y.onerror = () => w(Y.error), Y.onsuccess = () => z();
        });
      });
    }
    getDb() {
      let A = self.indexedDB.open(this.dbName, 1);
      return new Promise((K, q) => {
        A.onsuccess = () => {
          K(A.result);
        }, A.onerror = () => {
          q(A.error);
        }, A.onblocked = () => {
          q(Error("Unable to access DB"));
        }, A.onupgradeneeded = () => {
          let Y = A.result;
          Y.onerror = () => {
            q(Error("Failed to create object store"));
          }, Y.createObjectStore(Bz6, {
            keyPath: "id"
          });
        };
      });
    }
    withObjectStore(A, K) {
      return this.getDb().then(q => {
        let Y = q.transaction(Bz6, A);
        return Y.oncomplete = () => q.close(), new Promise((z, w) => {
          Y.onerror = () => w(Y.error), z(K(Y.objectStore(Bz6)));
        }).catch(z => {
          throw q.close(), z;
        });
      });
    }
  }
  class oQ4 {
    store;
    constructor(A = {}) {
      this.store = A;
    }
    getItem(A) {
      if (A in this.store) return this.store[A];
      return null;
    }
    removeItem(A) {
      delete this.store[A];
    }
    setItem(A, K) {
      this.store[A] = K;
    }
  }
  var xF9 = new oQ4();
  function uF9() {
    if (typeof self === "object" && self.indexedDB) return new rQ4();
    if (typeof window === "object" && window.localStorage) return window.localStorage;
    return xF9;
  }
  function BF9({
    accountId: A,
    cache: K = uF9(),
    client: q,
    clientConfig: Y,
    customRoleArn: z,
    identityPoolId: w,
    logins: H,
    userIdentifier: J = !H || Object.keys(H).length === 0 ? "ANONYMOUS" : void 0,
    logger: O,
    parentClientConfig: X
  }) {
    O?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
    let $ = J ? `aws:cognito-identity-credentials:${w}:${J}` : void 0,
      _ = async G => {
        let {
            GetIdCommand: Z,
            CognitoIdentityClient: W
          } = await Promise.resolve().then(function () {
            return __$.uz6();
          }),
          D = P => Y?.[P] ?? X?.[P] ?? G?.callerClientConfig?.[P],
          j = q ?? new W(Object.assign({}, Y ?? {}, {
            region: D("region"),
            profile: D("profile"),
            userAgentAppId: D("userAgentAppId")
          })),
          M = $ && (await K.getItem($));
        if (!M) {
          let {
            IdentityId: P = mF9(O)
          } = await j.send(new Z({
            AccountId: A,
            IdentityPoolId: w,
            Logins: H ? await iQ4(H) : void 0
          }));
          if (M = P, $) Promise.resolve(K.setItem($, M)).catch(() => {});
        }
        return _ = nQ4({
          client: j,
          customRoleArn: z,
          logins: H,
          identityId: M
        }), _(G);
      };
    return G => _(G).catch(async Z => {
      if ($) Promise.resolve(K.removeItem($)).catch(() => {});
      throw Z;
    });
  }
  function mF9(A) {
    throw new c21.CredentialsProviderError("Response from Amazon Cognito contained no identity ID", {
      logger: A
    });
  }
  gF9.fromCognitoIdentity = nQ4;
  gF9.fromCognitoIdentityPool = BF9;
});

// Register to shared state
__$.mz6 = mz6;
