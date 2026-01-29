// Module: CJ6
// Dependencies: vJ6, Zo, Ds4, _o

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CJ6 = v(E_A => {
  var Se9 = E_A && E_A.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    _w1,
    Ms4;
  Object.defineProperty(E_A, "__esModule", {
    value: !0
  });
  E_A.AwsClient = void 0;
  var he9 = __$.vJ6(),
    be9 = __$.Zo(),
    xe9 = __$.Ds4(),
    js4 = __$._o();
  class fhA extends be9.BaseExternalAccountClient {
    constructor(A, K) {
      super(A, K);
      let q = (0, js4.originalOrCamelOptions)(A),
        Y = q.get("credential_source"),
        z = q.get("aws_security_credentials_supplier");
      if (!Y && !z) throw Error("A credential source or AWS security credentials supplier must be specified.");
      if (Y && z) throw Error("Only one of credential source or AWS security credentials supplier can be specified.");
      if (z) this.awsSecurityCredentialsSupplier = z, this.regionalCredVerificationUrl = Se9(_w1, _w1, "f", Ms4), this.credentialSourceType = "programmatic";else {
        let w = (0, js4.originalOrCamelOptions)(Y);
        this.environmentId = w.get("environment_id");
        let H = w.get("region_url"),
          J = w.get("url"),
          O = w.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new xe9.DefaultAwsSecurityCredentialsSupplier({
          regionUrl: H,
          securityCredentialsUrl: J,
          imdsV2SessionTokenUrl: O
        }), this.regionalCredVerificationUrl = w.get("regional_cred_verification_url"), this.credentialSourceType = "aws", this.validateEnvironmentId();
      }
      this.awsRequestSigner = null, this.region = "";
    }
    validateEnvironmentId() {
      var A;
      let K = (A = this.environmentId) === null || A === void 0 ? void 0 : A.match(/^(aws)(\d+)$/);
      if (!K || !this.regionalCredVerificationUrl) throw Error('No valid AWS "credential_source" provided');else if (parseInt(K[2], 10) !== 1) throw Error(`aws version "${K[2]}" is not supported in the current build.`);
    }
    async retrieveSubjectToken() {
      if (!this.awsRequestSigner) this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), this.awsRequestSigner = new he9.AwsRequestSigner(async () => {
        return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext);
      }, this.region);
      let A = await this.awsRequestSigner.getRequestOptions({
          ..._w1.RETRY_CONFIG,
          url: this.regionalCredVerificationUrl.replace("{region}", this.region),
          method: "POST"
        }),
        K = [],
        q = Object.assign({
          "x-goog-cloud-target-resource": this.audience
        }, A.headers);
      for (let Y in q) K.push({
        key: Y,
        value: q[Y]
      });
      return encodeURIComponent(JSON.stringify({
        url: A.url,
        method: A.method,
        headers: K
      }));
    }
  }
  E_A.AwsClient = fhA;
  _w1 = fhA;
  Ms4 = {
    value: "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"
  };
  fhA.AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
  fhA.AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
});

// Register to shared state
__$.CJ6 = CJ6;
