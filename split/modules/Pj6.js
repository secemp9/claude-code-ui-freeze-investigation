// Module: Pj6
// Dependencies: m3, xI, LZA, cX1, vqA, Gj6, uC, SZA, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pj6 = v((b4H, LG7) => {
  var R8 = __$.m3();
  __$.xI();
  __$.LZA();
  __$.cX1();
  __$.vqA();
  __$.Gj6();
  __$.uC();
  __$.SZA();
  __$.bY();
  var J$1 = function (A, K, q, Y) {
      var z = R8.util.createBuffer(),
        w = A.length >> 1,
        H = w + (A.length & 1),
        J = A.substr(0, H),
        O = A.substr(w, H),
        X = R8.util.createBuffer(),
        $ = R8.hmac.create();
      q = K + q;
      var _ = Math.ceil(Y / 16),
        G = Math.ceil(Y / 20);
      $.start("MD5", J);
      var Z = R8.util.createBuffer();
      X.putBytes(q);
      for (var W = 0; W < _; ++W) $.start(null, null), $.update(X.getBytes()), X.putBuffer($.digest()), $.start(null, null), $.update(X.bytes() + q), Z.putBuffer($.digest());
      $.start("SHA1", O);
      var D = R8.util.createBuffer();
      X.clear(), X.putBytes(q);
      for (var W = 0; W < G; ++W) $.start(null, null), $.update(X.getBytes()), X.putBuffer($.digest()), $.start(null, null), $.update(X.bytes() + q), D.putBuffer($.digest());
      return z.putBytes(R8.util.xorBytes(Z.getBytes(), D.getBytes(), Y)), z;
    },
    evY = function (A, K, q) {
      var Y = R8.hmac.create();
      Y.start("SHA1", A);
      var z = R8.util.createBuffer();
      return z.putInt32(K[0]), z.putInt32(K[1]), z.putByte(q.type), z.putByte(q.version.major), z.putByte(q.version.minor), z.putInt16(q.length), z.putBytes(q.fragment.bytes()), Y.update(z.getBytes()), Y.digest().getBytes();
    },
    AEY = function (A, K, q) {
      var Y = !1;
      try {
        var z = A.deflate(K.fragment.getBytes());
        K.fragment = R8.util.createBuffer(z), K.length = z.length, Y = !0;
      } catch (w) {}
      return Y;
    },
    KEY = function (A, K, q) {
      var Y = !1;
      try {
        var z = A.inflate(K.fragment.getBytes());
        K.fragment = R8.util.createBuffer(z), K.length = z.length, Y = !0;
      } catch (w) {}
      return Y;
    },
    rT = function (A, K) {
      var q = 0;
      switch (K) {
        case 1:
          q = A.getByte();
          break;
        case 2:
          q = A.getInt16();
          break;
        case 3:
          q = A.getInt24();
          break;
        case 4:
          q = A.getInt32();
          break;
      }
      return R8.util.createBuffer(A.getBytes(q));
    },
    FC = function (A, K, q) {
      A.putInt(q.length(), K << 3), A.putBuffer(q);
    },
    A1 = {};
  A1.Versions = {
    TLS_1_0: {
      major: 3,
      minor: 1
    },
    TLS_1_1: {
      major: 3,
      minor: 2
    },
    TLS_1_2: {
      major: 3,
      minor: 3
    }
  };
  A1.SupportedVersions = [A1.Versions.TLS_1_1, A1.Versions.TLS_1_0];
  A1.Version = A1.SupportedVersions[0];
  A1.MaxFragment = 15360;
  A1.ConnectionEnd = {
    server: 0,
    client: 1
  };
  A1.PRFAlgorithm = {
    tls_prf_sha256: 0
  };
  A1.BulkCipherAlgorithm = {
    none: null,
    rc4: 0,
    des3: 1,
    aes: 2
  };
  A1.CipherType = {
    stream: 0,
    block: 1,
    aead: 2
  };
  A1.MACAlgorithm = {
    none: null,
    hmac_md5: 0,
    hmac_sha1: 1,
    hmac_sha256: 2,
    hmac_sha384: 3,
    hmac_sha512: 4
  };
  A1.CompressionMethod = {
    none: 0,
    deflate: 1
  };
  A1.ContentType = {
    change_cipher_spec: 20,
    alert: 21,
    handshake: 22,
    application_data: 23,
    heartbeat: 24
  };
  A1.HandshakeType = {
    hello_request: 0,
    client_hello: 1,
    server_hello: 2,
    certificate: 11,
    server_key_exchange: 12,
    certificate_request: 13,
    server_hello_done: 14,
    certificate_verify: 15,
    client_key_exchange: 16,
    finished: 20
  };
  A1.Alert = {};
  A1.Alert.Level = {
    warning: 1,
    fatal: 2
  };
  A1.Alert.Description = {
    close_notify: 0,
    unexpected_message: 10,
    bad_record_mac: 20,
    decryption_failed: 21,
    record_overflow: 22,
    decompression_failure: 30,
    handshake_failure: 40,
    bad_certificate: 42,
    unsupported_certificate: 43,
    certificate_revoked: 44,
    certificate_expired: 45,
    certificate_unknown: 46,
    illegal_parameter: 47,
    unknown_ca: 48,
    access_denied: 49,
    decode_error: 50,
    decrypt_error: 51,
    export_restriction: 60,
    protocol_version: 70,
    insufficient_security: 71,
    internal_error: 80,
    user_canceled: 90,
    no_renegotiation: 100
  };
  A1.HeartbeatMessageType = {
    heartbeat_request: 1,
    heartbeat_response: 2
  };
  A1.CipherSuites = {};
  A1.getCipherSuite = function (A) {
    var K = null;
    for (var q in A1.CipherSuites) {
      var Y = A1.CipherSuites[q];
      if (Y.id[0] === A.charCodeAt(0) && Y.id[1] === A.charCodeAt(1)) {
        K = Y;
        break;
      }
    }
    return K;
  };
  A1.handleUnexpected = function (A, K) {
    var q = !A.open && A.entity === A1.ConnectionEnd.client;
    if (!q) A.error(A, {
      message: "Unexpected message. Received TLS record out of order.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.unexpected_message
      }
    });
  };
  A1.handleHelloRequest = function (A, K, q) {
    if (!A.handshaking && A.handshakes > 0) A1.queue(A, A1.createAlert(A, {
      level: A1.Alert.Level.warning,
      description: A1.Alert.Description.no_renegotiation
    })), A1.flush(A);
    A.process();
  };
  A1.parseHelloMessage = function (A, K, q) {
    var Y = null,
      z = A.entity === A1.ConnectionEnd.client;
    if (q < 38) A.error(A, {
      message: z ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });else {
      var w = K.fragment,
        H = w.length();
      if (Y = {
        version: {
          major: w.getByte(),
          minor: w.getByte()
        },
        random: R8.util.createBuffer(w.getBytes(32)),
        session_id: rT(w, 1),
        extensions: []
      }, z) Y.cipher_suite = w.getBytes(2), Y.compression_method = w.getByte();else Y.cipher_suites = rT(w, 2), Y.compression_methods = rT(w, 1);
      if (H = q - (H - w.length()), H > 0) {
        var J = rT(w, 2);
        while (J.length() > 0) Y.extensions.push({
          type: [J.getByte(), J.getByte()],
          data: rT(J, 2)
        });
        if (!z) for (var O = 0; O < Y.extensions.length; ++O) {
          var X = Y.extensions[O];
          if (X.type[0] === 0 && X.type[1] === 0) {
            var $ = rT(X.data, 2);
            while ($.length() > 0) {
              var _ = $.getByte();
              if (_ !== 0) break;
              A.session.extensions.server_name.serverNameList.push(rT($, 2).getBytes());
            }
          }
        }
      }
      if (A.session.version) {
        if (Y.version.major !== A.session.version.major || Y.version.minor !== A.session.version.minor) return A.error(A, {
          message: "TLS version change is disallowed during renegotiation.",
          send: !0,
          alert: {
            level: A1.Alert.Level.fatal,
            description: A1.Alert.Description.protocol_version
          }
        });
      }
      if (z) A.session.cipherSuite = A1.getCipherSuite(Y.cipher_suite);else {
        var G = R8.util.createBuffer(Y.cipher_suites.bytes());
        while (G.length() > 0) if (A.session.cipherSuite = A1.getCipherSuite(G.getBytes(2)), A.session.cipherSuite !== null) break;
      }
      if (A.session.cipherSuite === null) return A.error(A, {
        message: "No cipher suites in common.",
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.handshake_failure
        },
        cipherSuite: R8.util.bytesToHex(Y.cipher_suite)
      });
      if (z) A.session.compressionMethod = Y.compression_method;else A.session.compressionMethod = A1.CompressionMethod.none;
    }
    return Y;
  };
  A1.createSecurityParameters = function (A, K) {
    var q = A.entity === A1.ConnectionEnd.client,
      Y = K.random.bytes(),
      z = q ? A.session.sp.client_random : Y,
      w = q ? Y : A1.createRandom().getBytes();
    A.session.sp = {
      entity: A.entity,
      prf_algorithm: A1.PRFAlgorithm.tls_prf_sha256,
      bulk_cipher_algorithm: null,
      cipher_type: null,
      enc_key_length: null,
      block_length: null,
      fixed_iv_length: null,
      record_iv_length: null,
      mac_algorithm: null,
      mac_length: null,
      mac_key_length: null,
      compression_algorithm: A.session.compressionMethod,
      pre_master_secret: null,
      master_secret: null,
      client_random: z,
      server_random: w
    };
  };
  A1.handleServerHello = function (A, K, q) {
    var Y = A1.parseHelloMessage(A, K, q);
    if (A.fail) return;
    if (Y.version.minor <= A.version.minor) A.version.minor = Y.version.minor;else return A.error(A, {
      message: "Incompatible TLS version.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.protocol_version
      }
    });
    A.session.version = A.version;
    var z = Y.session_id.bytes();
    if (z.length > 0 && z === A.session.id) A.expect = TG7, A.session.resuming = !0, A.session.sp.server_random = Y.random.bytes();else A.expect = YEY, A.session.resuming = !1, A1.createSecurityParameters(A, Y);
    A.session.id = z, A.process();
  };
  A1.handleClientHello = function (A, K, q) {
    var Y = A1.parseHelloMessage(A, K, q);
    if (A.fail) return;
    var z = Y.session_id.bytes(),
      w = null;
    if (A.sessionCache) {
      if (w = A.sessionCache.getSession(z), w === null) z = "";else if (w.version.major !== Y.version.major || w.version.minor > Y.version.minor) w = null, z = "";
    }
    if (z.length === 0) z = R8.random.getBytes(32);
    if (A.session.id = z, A.session.clientHelloVersion = Y.version, A.session.sp = {}, w) A.version = A.session.version = w.version, A.session.sp = w.sp;else {
      var H;
      for (var J = 1; J < A1.SupportedVersions.length; ++J) if (H = A1.SupportedVersions[J], H.minor <= Y.version.minor) break;
      A.version = {
        major: H.major,
        minor: H.minor
      }, A.session.version = A.version;
    }
    if (w !== null) A.expect = jj6, A.session.resuming = !0, A.session.sp.client_random = Y.random.bytes();else A.expect = A.verifyClient !== !1 ? $EY : Dj6, A.session.resuming = !1, A1.createSecurityParameters(A, Y);
    if (A.open = !0, A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createServerHello(A)
    })), A.session.resuming) A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.change_cipher_spec,
      data: A1.createChangeCipherSpec()
    })), A.state.pending = A1.createConnectionState(A), A.state.current.write = A.state.pending.write, A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createFinished(A)
    }));else if (A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createCertificate(A)
    })), !A.fail) {
      if (A1.queue(A, A1.createRecord(A, {
        type: A1.ContentType.handshake,
        data: A1.createServerKeyExchange(A)
      })), A.verifyClient !== !1) A1.queue(A, A1.createRecord(A, {
        type: A1.ContentType.handshake,
        data: A1.createCertificateRequest(A)
      }));
      A1.queue(A, A1.createRecord(A, {
        type: A1.ContentType.handshake,
        data: A1.createServerHelloDone(A)
      }));
    }
    A1.flush(A), A.process();
  };
  A1.handleCertificate = function (A, K, q) {
    if (q < 3) return A.error(A, {
      message: "Invalid Certificate message. Message too short.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });
    var Y = K.fragment,
      z = {
        certificate_list: rT(Y, 3)
      },
      w,
      H,
      J = [];
    try {
      while (z.certificate_list.length() > 0) w = rT(z.certificate_list, 3), H = R8.asn1.fromDer(w), w = R8.pki.certificateFromAsn1(H, !0), J.push(w);
    } catch (X) {
      return A.error(A, {
        message: "Could not parse certificate list.",
        cause: X,
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.bad_certificate
        }
      });
    }
    var O = A.entity === A1.ConnectionEnd.client;
    if ((O || A.verifyClient === !0) && J.length === 0) A.error(A, {
      message: O ? "No server certificate provided." : "No client certificate provided.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });else if (J.length === 0) A.expect = O ? fG7 : Dj6;else {
      if (O) A.session.serverCertificate = J[0];else A.session.clientCertificate = J[0];
      if (A1.verifyCertificateChain(A, J)) A.expect = O ? fG7 : Dj6;
    }
    A.process();
  };
  A1.handleServerKeyExchange = function (A, K, q) {
    if (q > 0) return A.error(A, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.unsupported_certificate
      }
    });
    A.expect = zEY, A.process();
  };
  A1.handleClientKeyExchange = function (A, K, q) {
    if (q < 48) return A.error(A, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.unsupported_certificate
      }
    });
    var Y = K.fragment,
      z = {
        enc_pre_master_secret: rT(Y, 2).getBytes()
      },
      w = null;
    if (A.getPrivateKey) try {
      w = A.getPrivateKey(A, A.session.serverCertificate), w = R8.pki.privateKeyFromPem(w);
    } catch (O) {
      A.error(A, {
        message: "Could not get private key.",
        cause: O,
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.internal_error
        }
      });
    }
    if (w === null) return A.error(A, {
      message: "No private key set.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.internal_error
      }
    });
    try {
      var H = A.session.sp;
      H.pre_master_secret = w.decrypt(z.enc_pre_master_secret);
      var J = A.session.clientHelloVersion;
      if (J.major !== H.pre_master_secret.charCodeAt(0) || J.minor !== H.pre_master_secret.charCodeAt(1)) throw Error("TLS version rollback attack detected.");
    } catch (O) {
      H.pre_master_secret = R8.random.getBytes(48);
    }
    if (A.expect = jj6, A.session.clientCertificate !== null) A.expect = _EY;
    A.process();
  };
  A1.handleCertificateRequest = function (A, K, q) {
    if (q < 3) return A.error(A, {
      message: "Invalid CertificateRequest. Message too short.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });
    var Y = K.fragment,
      z = {
        certificate_types: rT(Y, 1),
        certificate_authorities: rT(Y, 2)
      };
    A.session.certificateRequest = z, A.expect = wEY, A.process();
  };
  A1.handleCertificateVerify = function (A, K, q) {
    if (q < 2) return A.error(A, {
      message: "Invalid CertificateVerify. Message too short.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });
    var Y = K.fragment;
    Y.read -= 4;
    var z = Y.bytes();
    Y.read += 4;
    var w = {
        signature: rT(Y, 2).getBytes()
      },
      H = R8.util.createBuffer();
    H.putBuffer(A.session.md5.digest()), H.putBuffer(A.session.sha1.digest()), H = H.getBytes();
    try {
      var J = A.session.clientCertificate;
      if (!J.publicKey.verify(H, w.signature, "NONE")) throw Error("CertificateVerify signature does not match.");
      A.session.md5.update(z), A.session.sha1.update(z);
    } catch (O) {
      return A.error(A, {
        message: "Bad signature in CertificateVerify.",
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.handshake_failure
        }
      });
    }
    A.expect = jj6, A.process();
  };
  A1.handleServerHelloDone = function (A, K, q) {
    if (q > 0) return A.error(A, {
      message: "Invalid ServerHelloDone message. Invalid length.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.record_overflow
      }
    });
    if (A.serverCertificate === null) {
      var Y = {
          message: "No server certificate provided. Not enough security.",
          send: !0,
          alert: {
            level: A1.Alert.Level.fatal,
            description: A1.Alert.Description.insufficient_security
          }
        },
        z = 0,
        w = A.verify(A, Y.alert.description, z, []);
      if (w !== !0) {
        if (w || w === 0) {
          if (typeof w === "object" && !R8.util.isArray(w)) {
            if (w.message) Y.message = w.message;
            if (w.alert) Y.alert.description = w.alert;
          } else if (typeof w === "number") Y.alert.description = w;
        }
        return A.error(A, Y);
      }
    }
    if (A.session.certificateRequest !== null) K = A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createCertificate(A)
    }), A1.queue(A, K);
    K = A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createClientKeyExchange(A)
    }), A1.queue(A, K), A.expect = OEY;
    var H = function (J, O) {
      if (J.session.certificateRequest !== null && J.session.clientCertificate !== null) A1.queue(J, A1.createRecord(J, {
        type: A1.ContentType.handshake,
        data: A1.createCertificateVerify(J, O)
      }));
      A1.queue(J, A1.createRecord(J, {
        type: A1.ContentType.change_cipher_spec,
        data: A1.createChangeCipherSpec()
      })), J.state.pending = A1.createConnectionState(J), J.state.current.write = J.state.pending.write, A1.queue(J, A1.createRecord(J, {
        type: A1.ContentType.handshake,
        data: A1.createFinished(J)
      })), J.expect = TG7, A1.flush(J), J.process();
    };
    if (A.session.certificateRequest === null || A.session.clientCertificate === null) return H(A, null);
    A1.getClientSignature(A, H);
  };
  A1.handleChangeCipherSpec = function (A, K) {
    if (K.fragment.getByte() !== 1) return A.error(A, {
      message: "Invalid ChangeCipherSpec message received.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.illegal_parameter
      }
    });
    var q = A.entity === A1.ConnectionEnd.client;
    if (A.session.resuming && q || !A.session.resuming && !q) A.state.pending = A1.createConnectionState(A);
    if (A.state.current.read = A.state.pending.read, !A.session.resuming && q || A.session.resuming && !q) A.state.pending = null;
    A.expect = q ? HEY : GEY, A.process();
  };
  A1.handleFinished = function (A, K, q) {
    var Y = K.fragment;
    Y.read -= 4;
    var z = Y.bytes();
    Y.read += 4;
    var w = K.fragment.getBytes();
    Y = R8.util.createBuffer(), Y.putBuffer(A.session.md5.digest()), Y.putBuffer(A.session.sha1.digest());
    var H = A.entity === A1.ConnectionEnd.client,
      J = H ? "server finished" : "client finished",
      O = A.session.sp,
      X = 12,
      $ = J$1;
    if (Y = $(O.master_secret, J, Y.getBytes(), X), Y.getBytes() !== w) return A.error(A, {
      message: "Invalid verify_data in Finished message.",
      send: !0,
      alert: {
        level: A1.Alert.Level.fatal,
        description: A1.Alert.Description.decrypt_error
      }
    });
    if (A.session.md5.update(z), A.session.sha1.update(z), A.session.resuming && H || !A.session.resuming && !H) A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.change_cipher_spec,
      data: A1.createChangeCipherSpec()
    })), A.state.current.write = A.state.pending.write, A.state.pending = null, A1.queue(A, A1.createRecord(A, {
      type: A1.ContentType.handshake,
      data: A1.createFinished(A)
    }));
    A.expect = H ? JEY : ZEY, A.handshaking = !1, ++A.handshakes, A.peerCertificate = H ? A.session.serverCertificate : A.session.clientCertificate, A1.flush(A), A.isConnected = !0, A.connected(A), A.process();
  };
  A1.handleAlert = function (A, K) {
    var q = K.fragment,
      Y = {
        level: q.getByte(),
        description: q.getByte()
      },
      z;
    switch (Y.description) {
      case A1.Alert.Description.close_notify:
        z = "Connection closed.";
        break;
      case A1.Alert.Description.unexpected_message:
        z = "Unexpected message.";
        break;
      case A1.Alert.Description.bad_record_mac:
        z = "Bad record MAC.";
        break;
      case A1.Alert.Description.decryption_failed:
        z = "Decryption failed.";
        break;
      case A1.Alert.Description.record_overflow:
        z = "Record overflow.";
        break;
      case A1.Alert.Description.decompression_failure:
        z = "Decompression failed.";
        break;
      case A1.Alert.Description.handshake_failure:
        z = "Handshake failure.";
        break;
      case A1.Alert.Description.bad_certificate:
        z = "Bad certificate.";
        break;
      case A1.Alert.Description.unsupported_certificate:
        z = "Unsupported certificate.";
        break;
      case A1.Alert.Description.certificate_revoked:
        z = "Certificate revoked.";
        break;
      case A1.Alert.Description.certificate_expired:
        z = "Certificate expired.";
        break;
      case A1.Alert.Description.certificate_unknown:
        z = "Certificate unknown.";
        break;
      case A1.Alert.Description.illegal_parameter:
        z = "Illegal parameter.";
        break;
      case A1.Alert.Description.unknown_ca:
        z = "Unknown certificate authority.";
        break;
      case A1.Alert.Description.access_denied:
        z = "Access denied.";
        break;
      case A1.Alert.Description.decode_error:
        z = "Decode error.";
        break;
      case A1.Alert.Description.decrypt_error:
        z = "Decrypt error.";
        break;
      case A1.Alert.Description.export_restriction:
        z = "Export restriction.";
        break;
      case A1.Alert.Description.protocol_version:
        z = "Unsupported protocol version.";
        break;
      case A1.Alert.Description.insufficient_security:
        z = "Insufficient security.";
        break;
      case A1.Alert.Description.internal_error:
        z = "Internal error.";
        break;
      case A1.Alert.Description.user_canceled:
        z = "User canceled.";
        break;
      case A1.Alert.Description.no_renegotiation:
        z = "Renegotiation not supported.";
        break;
      default:
        z = "Unknown error.";
        break;
    }
    if (Y.description === A1.Alert.Description.close_notify) return A.close();
    A.error(A, {
      message: z,
      send: !1,
      origin: A.entity === A1.ConnectionEnd.client ? "server" : "client",
      alert: Y
    }), A.process();
  };
  A1.handleHandshake = function (A, K) {
    var q = K.fragment,
      Y = q.getByte(),
      z = q.getInt24();
    if (z > q.length()) return A.fragmented = K, K.fragment = R8.util.createBuffer(), q.read -= 4, A.process();
    A.fragmented = null, q.read -= 4;
    var w = q.bytes(z + 4);
    if (q.read += 4, Y in H$1[A.entity][A.expect]) {
      if (A.entity === A1.ConnectionEnd.server && !A.open && !A.fail) A.handshaking = !0, A.session = {
        version: null,
        extensions: {
          server_name: {
            serverNameList: []
          }
        },
        cipherSuite: null,
        compressionMethod: null,
        serverCertificate: null,
        clientCertificate: null,
        md5: R8.md.md5.create(),
        sha1: R8.md.sha1.create()
      };
      if (Y !== A1.HandshakeType.hello_request && Y !== A1.HandshakeType.certificate_verify && Y !== A1.HandshakeType.finished) A.session.md5.update(w), A.session.sha1.update(w);
      H$1[A.entity][A.expect][Y](A, K, z);
    } else A1.handleUnexpected(A, K);
  };
  A1.handleApplicationData = function (A, K) {
    A.data.putBuffer(K.fragment), A.dataReady(A), A.process();
  };
  A1.handleHeartbeat = function (A, K) {
    var q = K.fragment,
      Y = q.getByte(),
      z = q.getInt16(),
      w = q.getBytes(z);
    if (Y === A1.HeartbeatMessageType.heartbeat_request) {
      if (A.handshaking || z > w.length) return A.process();
      A1.queue(A, A1.createRecord(A, {
        type: A1.ContentType.heartbeat,
        data: A1.createHeartbeat(A1.HeartbeatMessageType.heartbeat_response, w)
      })), A1.flush(A);
    } else if (Y === A1.HeartbeatMessageType.heartbeat_response) {
      if (w !== A.expectedHeartbeatPayload) return A.process();
      if (A.heartbeatReceived) A.heartbeatReceived(A, R8.util.createBuffer(w));
    }
    A.process();
  };
  var qEY = 0,
    YEY = 1,
    fG7 = 2,
    zEY = 3,
    wEY = 4,
    TG7 = 5,
    HEY = 6,
    JEY = 7,
    OEY = 8,
    XEY = 0,
    $EY = 1,
    Dj6 = 2,
    _EY = 3,
    jj6 = 4,
    GEY = 5,
    ZEY = 6,
    oA = A1.handleUnexpected,
    vG7 = A1.handleChangeCipherSpec,
    YW = A1.handleAlert,
    cM = A1.handleHandshake,
    EG7 = A1.handleApplicationData,
    zW = A1.handleHeartbeat,
    Mj6 = [];
  Mj6[A1.ConnectionEnd.client] = [[oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [vG7, YW, oA, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, EG7, zW], [oA, YW, cM, oA, zW]];
  Mj6[A1.ConnectionEnd.server] = [[oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, oA, zW], [vG7, YW, oA, oA, zW], [oA, YW, cM, oA, zW], [oA, YW, cM, EG7, zW], [oA, YW, cM, oA, zW]];
  var {
      handleHelloRequest: ga,
      handleServerHello: WEY,
      handleCertificate: kG7,
      handleServerKeyExchange: NG7,
      handleCertificateRequest: Zj6,
      handleServerHelloDone: w$1,
      handleFinished: CG7
    } = A1,
    H$1 = [];
  H$1[A1.ConnectionEnd.client] = [[oA, oA, WEY, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, kG7, NG7, Zj6, w$1, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, NG7, Zj6, w$1, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, Zj6, w$1, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, w$1, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, CG7], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [ga, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA]];
  var {
    handleClientHello: DEY,
    handleClientKeyExchange: jEY,
    handleCertificateVerify: MEY
  } = A1;
  H$1[A1.ConnectionEnd.server] = [[oA, DEY, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, kG7, oA, oA, oA, oA, oA, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, jEY, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, MEY, oA, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, CG7], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA], [oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA, oA]];
  A1.generateKeys = function (A, K) {
    var q = J$1,
      Y = K.client_random + K.server_random;
    if (!A.session.resuming) K.master_secret = q(K.pre_master_secret, "master secret", Y, 48).bytes(), K.pre_master_secret = null;
    Y = K.server_random + K.client_random;
    var z = 2 * K.mac_key_length + 2 * K.enc_key_length,
      w = A.version.major === A1.Versions.TLS_1_0.major && A.version.minor === A1.Versions.TLS_1_0.minor;
    if (w) z += 2 * K.fixed_iv_length;
    var H = q(K.master_secret, "key expansion", Y, z),
      J = {
        client_write_MAC_key: H.getBytes(K.mac_key_length),
        server_write_MAC_key: H.getBytes(K.mac_key_length),
        client_write_key: H.getBytes(K.enc_key_length),
        server_write_key: H.getBytes(K.enc_key_length)
      };
    if (w) J.client_write_IV = H.getBytes(K.fixed_iv_length), J.server_write_IV = H.getBytes(K.fixed_iv_length);
    return J;
  };
  A1.createConnectionState = function (A) {
    var K = A.entity === A1.ConnectionEnd.client,
      q = function () {
        var w = {
          sequenceNumber: [0, 0],
          macKey: null,
          macLength: 0,
          macFunction: null,
          cipherState: null,
          cipherFunction: function (H) {
            return !0;
          },
          compressionState: null,
          compressFunction: function (H) {
            return !0;
          },
          updateSequenceNumber: function () {
            if (w.sequenceNumber[1] === 4294967295) w.sequenceNumber[1] = 0, ++w.sequenceNumber[0];else ++w.sequenceNumber[1];
          }
        };
        return w;
      },
      Y = {
        read: q(),
        write: q()
      };
    if (Y.read.update = function (w, H) {
      if (!Y.read.cipherFunction(H, Y.read)) w.error(w, {
        message: "Could not decrypt record or bad MAC.",
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.bad_record_mac
        }
      });else if (!Y.read.compressFunction(w, H, Y.read)) w.error(w, {
        message: "Could not decompress record.",
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.decompression_failure
        }
      });
      return !w.fail;
    }, Y.write.update = function (w, H) {
      if (!Y.write.compressFunction(w, H, Y.write)) w.error(w, {
        message: "Could not compress record.",
        send: !1,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.internal_error
        }
      });else if (!Y.write.cipherFunction(H, Y.write)) w.error(w, {
        message: "Could not encrypt record.",
        send: !1,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.internal_error
        }
      });
      return !w.fail;
    }, A.session) {
      var z = A.session.sp;
      switch (A.session.cipherSuite.initSecurityParameters(z), z.keys = A1.generateKeys(A, z), Y.read.macKey = K ? z.keys.server_write_MAC_key : z.keys.client_write_MAC_key, Y.write.macKey = K ? z.keys.client_write_MAC_key : z.keys.server_write_MAC_key, A.session.cipherSuite.initConnectionState(Y, A, z), z.compression_algorithm) {
        case A1.CompressionMethod.none:
          break;
        case A1.CompressionMethod.deflate:
          Y.read.compressFunction = KEY, Y.write.compressFunction = AEY;
          break;
        default:
          throw Error("Unsupported compression algorithm.");
      }
    }
    return Y;
  };
  A1.createRandom = function () {
    var A = new Date(),
      K = +A + A.getTimezoneOffset() * 60000,
      q = R8.util.createBuffer();
    return q.putInt32(K), q.putBytes(R8.random.getBytes(28)), q;
  };
  A1.createRecord = function (A, K) {
    if (!K.data) return null;
    var q = {
      type: K.type,
      version: {
        major: A.version.major,
        minor: A.version.minor
      },
      length: K.data.length(),
      fragment: K.data
    };
    return q;
  };
  A1.createAlert = function (A, K) {
    var q = R8.util.createBuffer();
    return q.putByte(K.level), q.putByte(K.description), A1.createRecord(A, {
      type: A1.ContentType.alert,
      data: q
    });
  };
  A1.createClientHello = function (A) {
    A.session.clientHelloVersion = {
      major: A.version.major,
      minor: A.version.minor
    };
    var K = R8.util.createBuffer();
    for (var q = 0; q < A.cipherSuites.length; ++q) {
      var Y = A.cipherSuites[q];
      K.putByte(Y.id[0]), K.putByte(Y.id[1]);
    }
    var z = K.length(),
      w = R8.util.createBuffer();
    w.putByte(A1.CompressionMethod.none);
    var H = w.length(),
      J = R8.util.createBuffer();
    if (A.virtualHost) {
      var O = R8.util.createBuffer();
      O.putByte(0), O.putByte(0);
      var X = R8.util.createBuffer();
      X.putByte(0), FC(X, 2, R8.util.createBuffer(A.virtualHost));
      var $ = R8.util.createBuffer();
      FC($, 2, X), FC(O, 2, $), J.putBuffer(O);
    }
    var _ = J.length();
    if (_ > 0) _ += 2;
    var G = A.session.id,
      Z = G.length + 1 + 2 + 4 + 28 + 2 + z + 1 + H + _,
      W = R8.util.createBuffer();
    if (W.putByte(A1.HandshakeType.client_hello), W.putInt24(Z), W.putByte(A.version.major), W.putByte(A.version.minor), W.putBytes(A.session.sp.client_random), FC(W, 1, R8.util.createBuffer(G)), FC(W, 2, K), FC(W, 1, w), _ > 0) FC(W, 2, J);
    return W;
  };
  A1.createServerHello = function (A) {
    var K = A.session.id,
      q = K.length + 1 + 2 + 4 + 28 + 2 + 1,
      Y = R8.util.createBuffer();
    return Y.putByte(A1.HandshakeType.server_hello), Y.putInt24(q), Y.putByte(A.version.major), Y.putByte(A.version.minor), Y.putBytes(A.session.sp.server_random), FC(Y, 1, R8.util.createBuffer(K)), Y.putByte(A.session.cipherSuite.id[0]), Y.putByte(A.session.cipherSuite.id[1]), Y.putByte(A.session.compressionMethod), Y;
  };
  A1.createCertificate = function (A) {
    var K = A.entity === A1.ConnectionEnd.client,
      q = null;
    if (A.getCertificate) {
      var Y;
      if (K) Y = A.session.certificateRequest;else Y = A.session.extensions.server_name.serverNameList;
      q = A.getCertificate(A, Y);
    }
    var z = R8.util.createBuffer();
    if (q !== null) try {
      if (!R8.util.isArray(q)) q = [q];
      var w = null;
      for (var H = 0; H < q.length; ++H) {
        var J = R8.pem.decode(q[H])[0];
        if (J.type !== "CERTIFICATE" && J.type !== "X509 CERTIFICATE" && J.type !== "TRUSTED CERTIFICATE") {
          var O = Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
          throw O.headerType = J.type, O;
        }
        if (J.procType && J.procType.type === "ENCRYPTED") throw Error("Could not convert certificate from PEM; PEM is encrypted.");
        var X = R8.util.createBuffer(J.body);
        if (w === null) w = R8.asn1.fromDer(X.bytes(), !1);
        var $ = R8.util.createBuffer();
        FC($, 3, X), z.putBuffer($);
      }
      if (q = R8.pki.certificateFromAsn1(w), K) A.session.clientCertificate = q;else A.session.serverCertificate = q;
    } catch (Z) {
      return A.error(A, {
        message: "Could not send certificate list.",
        cause: Z,
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.bad_certificate
        }
      });
    }
    var _ = 3 + z.length(),
      G = R8.util.createBuffer();
    return G.putByte(A1.HandshakeType.certificate), G.putInt24(_), FC(G, 3, z), G;
  };
  A1.createClientKeyExchange = function (A) {
    var K = R8.util.createBuffer();
    K.putByte(A.session.clientHelloVersion.major), K.putByte(A.session.clientHelloVersion.minor), K.putBytes(R8.random.getBytes(46));
    var q = A.session.sp;
    q.pre_master_secret = K.getBytes();
    var Y = A.session.serverCertificate.publicKey;
    K = Y.encrypt(q.pre_master_secret);
    var z = K.length + 2,
      w = R8.util.createBuffer();
    return w.putByte(A1.HandshakeType.client_key_exchange), w.putInt24(z), w.putInt16(K.length), w.putBytes(K), w;
  };
  A1.createServerKeyExchange = function (A) {
    var K = 0,
      q = R8.util.createBuffer();
    if (K > 0) q.putByte(A1.HandshakeType.server_key_exchange), q.putInt24(K);
    return q;
  };
  A1.getClientSignature = function (A, K) {
    var q = R8.util.createBuffer();
    q.putBuffer(A.session.md5.digest()), q.putBuffer(A.session.sha1.digest()), q = q.getBytes(), A.getSignature = A.getSignature || function (Y, z, w) {
      var H = null;
      if (Y.getPrivateKey) try {
        H = Y.getPrivateKey(Y, Y.session.clientCertificate), H = R8.pki.privateKeyFromPem(H);
      } catch (J) {
        Y.error(Y, {
          message: "Could not get private key.",
          cause: J,
          send: !0,
          alert: {
            level: A1.Alert.Level.fatal,
            description: A1.Alert.Description.internal_error
          }
        });
      }
      if (H === null) Y.error(Y, {
        message: "No private key set.",
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: A1.Alert.Description.internal_error
        }
      });else z = H.sign(z, null);
      w(Y, z);
    }, A.getSignature(A, q, K);
  };
  A1.createCertificateVerify = function (A, K) {
    var q = K.length + 2,
      Y = R8.util.createBuffer();
    return Y.putByte(A1.HandshakeType.certificate_verify), Y.putInt24(q), Y.putInt16(K.length), Y.putBytes(K), Y;
  };
  A1.createCertificateRequest = function (A) {
    var K = R8.util.createBuffer();
    K.putByte(1);
    var q = R8.util.createBuffer();
    for (var Y in A.caStore.certs) {
      var z = A.caStore.certs[Y],
        w = R8.pki.distinguishedNameToAsn1(z.subject),
        H = R8.asn1.toDer(w);
      q.putInt16(H.length()), q.putBuffer(H);
    }
    var J = 1 + K.length() + 2 + q.length(),
      O = R8.util.createBuffer();
    return O.putByte(A1.HandshakeType.certificate_request), O.putInt24(J), FC(O, 1, K), FC(O, 2, q), O;
  };
  A1.createServerHelloDone = function (A) {
    var K = R8.util.createBuffer();
    return K.putByte(A1.HandshakeType.server_hello_done), K.putInt24(0), K;
  };
  A1.createChangeCipherSpec = function () {
    var A = R8.util.createBuffer();
    return A.putByte(1), A;
  };
  A1.createFinished = function (A) {
    var K = R8.util.createBuffer();
    K.putBuffer(A.session.md5.digest()), K.putBuffer(A.session.sha1.digest());
    var q = A.entity === A1.ConnectionEnd.client,
      Y = A.session.sp,
      z = 12,
      w = J$1,
      H = q ? "client finished" : "server finished";
    K = w(Y.master_secret, H, K.getBytes(), z);
    var J = R8.util.createBuffer();
    return J.putByte(A1.HandshakeType.finished), J.putInt24(K.length()), J.putBuffer(K), J;
  };
  A1.createHeartbeat = function (A, K, q) {
    if (typeof q > "u") q = K.length;
    var Y = R8.util.createBuffer();
    Y.putByte(A), Y.putInt16(q), Y.putBytes(K);
    var z = Y.length(),
      w = Math.max(16, z - q - 3);
    return Y.putBytes(R8.random.getBytes(w)), Y;
  };
  A1.queue = function (A, K) {
    if (!K) return;
    if (K.fragment.length() === 0) {
      if (K.type === A1.ContentType.handshake || K.type === A1.ContentType.alert || K.type === A1.ContentType.change_cipher_spec) return;
    }
    if (K.type === A1.ContentType.handshake) {
      var q = K.fragment.bytes();
      A.session.md5.update(q), A.session.sha1.update(q), q = null;
    }
    var Y;
    if (K.fragment.length() <= A1.MaxFragment) Y = [K];else {
      Y = [];
      var z = K.fragment.bytes();
      while (z.length > A1.MaxFragment) Y.push(A1.createRecord(A, {
        type: K.type,
        data: R8.util.createBuffer(z.slice(0, A1.MaxFragment))
      })), z = z.slice(A1.MaxFragment);
      if (z.length > 0) Y.push(A1.createRecord(A, {
        type: K.type,
        data: R8.util.createBuffer(z)
      }));
    }
    for (var w = 0; w < Y.length && !A.fail; ++w) {
      var H = Y[w],
        J = A.state.current.write;
      if (J.update(A, H)) A.records.push(H);
    }
  };
  A1.flush = function (A) {
    for (var K = 0; K < A.records.length; ++K) {
      var q = A.records[K];
      A.tlsData.putByte(q.type), A.tlsData.putByte(q.version.major), A.tlsData.putByte(q.version.minor), A.tlsData.putInt16(q.fragment.length()), A.tlsData.putBuffer(A.records[K].fragment);
    }
    return A.records = [], A.tlsDataReady(A);
  };
  var Wj6 = function (A) {
      switch (A) {
        case !0:
          return !0;
        case R8.pki.certificateError.bad_certificate:
          return A1.Alert.Description.bad_certificate;
        case R8.pki.certificateError.unsupported_certificate:
          return A1.Alert.Description.unsupported_certificate;
        case R8.pki.certificateError.certificate_revoked:
          return A1.Alert.Description.certificate_revoked;
        case R8.pki.certificateError.certificate_expired:
          return A1.Alert.Description.certificate_expired;
        case R8.pki.certificateError.certificate_unknown:
          return A1.Alert.Description.certificate_unknown;
        case R8.pki.certificateError.unknown_ca:
          return A1.Alert.Description.unknown_ca;
        default:
          return A1.Alert.Description.bad_certificate;
      }
    },
    PEY = function (A) {
      switch (A) {
        case !0:
          return !0;
        case A1.Alert.Description.bad_certificate:
          return R8.pki.certificateError.bad_certificate;
        case A1.Alert.Description.unsupported_certificate:
          return R8.pki.certificateError.unsupported_certificate;
        case A1.Alert.Description.certificate_revoked:
          return R8.pki.certificateError.certificate_revoked;
        case A1.Alert.Description.certificate_expired:
          return R8.pki.certificateError.certificate_expired;
        case A1.Alert.Description.certificate_unknown:
          return R8.pki.certificateError.certificate_unknown;
        case A1.Alert.Description.unknown_ca:
          return R8.pki.certificateError.unknown_ca;
        default:
          return R8.pki.certificateError.bad_certificate;
      }
    };
  A1.verifyCertificateChain = function (A, K) {
    try {
      var q = {};
      for (var Y in A.verifyOptions) q[Y] = A.verifyOptions[Y];
      q.verify = function (w, H, J) {
        var O = Wj6(w),
          X = A.verify(A, w, H, J);
        if (X !== !0) {
          if (typeof X === "object" && !R8.util.isArray(X)) {
            var $ = Error("The application rejected the certificate.");
            if ($.send = !0, $.alert = {
              level: A1.Alert.Level.fatal,
              description: A1.Alert.Description.bad_certificate
            }, X.message) $.message = X.message;
            if (X.alert) $.alert.description = X.alert;
            throw $;
          }
          if (X !== w) X = PEY(X);
        }
        return X;
      }, R8.pki.verifyCertificateChain(A.caStore, K, q);
    } catch (w) {
      var z = w;
      if (typeof z !== "object" || R8.util.isArray(z)) z = {
        send: !0,
        alert: {
          level: A1.Alert.Level.fatal,
          description: Wj6(w)
        }
      };
      if (!("send" in z)) z.send = !0;
      if (!("alert" in z)) z.alert = {
        level: A1.Alert.Level.fatal,
        description: Wj6(z.error)
      };
      A.error(A, z);
    }
    return !A.fail;
  };
  A1.createSessionCache = function (A, K) {
    var q = null;
    if (A && A.getSession && A.setSession && A.order) q = A;else {
      q = {}, q.cache = A || {}, q.capacity = Math.max(K || 100, 1), q.order = [];
      for (var Y in A) if (q.order.length <= K) q.order.push(Y);else delete A[Y];
      q.getSession = function (z) {
        var w = null,
          H = null;
        if (z) H = R8.util.bytesToHex(z);else if (q.order.length > 0) H = q.order[0];
        if (H !== null && H in q.cache) {
          w = q.cache[H], delete q.cache[H];
          for (var J in q.order) if (q.order[J] === H) {
            q.order.splice(J, 1);
            break;
          }
        }
        return w;
      }, q.setSession = function (z, w) {
        if (q.order.length === q.capacity) {
          var H = q.order.shift();
          delete q.cache[H];
        }
        var H = R8.util.bytesToHex(z);
        q.order.push(H), q.cache[H] = w;
      };
    }
    return q;
  };
  A1.createConnection = function (A) {
    var K = null;
    if (A.caStore) {
      if (R8.util.isArray(A.caStore)) K = R8.pki.createCaStore(A.caStore);else K = A.caStore;
    } else K = R8.pki.createCaStore();
    var q = A.cipherSuites || null;
    if (q === null) {
      q = [];
      for (var Y in A1.CipherSuites) q.push(A1.CipherSuites[Y]);
    }
    var z = A.server ? A1.ConnectionEnd.server : A1.ConnectionEnd.client,
      w = A.sessionCache ? A1.createSessionCache(A.sessionCache) : null,
      H = {
        version: {
          major: A1.Version.major,
          minor: A1.Version.minor
        },
        entity: z,
        sessionId: A.sessionId,
        caStore: K,
        sessionCache: w,
        cipherSuites: q,
        connected: A.connected,
        virtualHost: A.virtualHost || null,
        verifyClient: A.verifyClient || !1,
        verify: A.verify || function ($, _, G, Z) {
          return _;
        },
        verifyOptions: A.verifyOptions || {},
        getCertificate: A.getCertificate || null,
        getPrivateKey: A.getPrivateKey || null,
        getSignature: A.getSignature || null,
        input: R8.util.createBuffer(),
        tlsData: R8.util.createBuffer(),
        data: R8.util.createBuffer(),
        tlsDataReady: A.tlsDataReady,
        dataReady: A.dataReady,
        heartbeatReceived: A.heartbeatReceived,
        closed: A.closed,
        error: function ($, _) {
          if (_.origin = _.origin || ($.entity === A1.ConnectionEnd.client ? "client" : "server"), _.send) A1.queue($, A1.createAlert($, _.alert)), A1.flush($);
          var G = _.fatal !== !1;
          if (G) $.fail = !0;
          if (A.error($, _), G) $.close(!1);
        },
        deflate: A.deflate || null,
        inflate: A.inflate || null
      };
    H.reset = function ($) {
      H.version = {
        major: A1.Version.major,
        minor: A1.Version.minor
      }, H.record = null, H.session = null, H.peerCertificate = null, H.state = {
        pending: null,
        current: null
      }, H.expect = H.entity === A1.ConnectionEnd.client ? qEY : XEY, H.fragmented = null, H.records = [], H.open = !1, H.handshakes = 0, H.handshaking = !1, H.isConnected = !1, H.fail = !($ || typeof $ > "u"), H.input.clear(), H.tlsData.clear(), H.data.clear(), H.state.current = A1.createConnectionState(H);
    }, H.reset();
    var J = function ($, _) {
        var G = _.type - A1.ContentType.change_cipher_spec,
          Z = Mj6[$.entity][$.expect];
        if (G in Z) Z[G]($, _);else A1.handleUnexpected($, _);
      },
      O = function ($) {
        var _ = 0,
          G = $.input,
          Z = G.length();
        if (Z < 5) _ = 5 - Z;else {
          $.record = {
            type: G.getByte(),
            version: {
              major: G.getByte(),
              minor: G.getByte()
            },
            length: G.getInt16(),
            fragment: R8.util.createBuffer(),
            ready: !1
          };
          var W = $.record.version.major === $.version.major;
          if (W && $.session && $.session.version) W = $.record.version.minor === $.version.minor;
          if (!W) $.error($, {
            message: "Incompatible TLS version.",
            send: !0,
            alert: {
              level: A1.Alert.Level.fatal,
              description: A1.Alert.Description.protocol_version
            }
          });
        }
        return _;
      },
      X = function ($) {
        var _ = 0,
          G = $.input,
          Z = G.length();
        if (Z < $.record.length) _ = $.record.length - Z;else {
          $.record.fragment.putBytes(G.getBytes($.record.length)), G.compact();
          var W = $.state.current.read;
          if (W.update($, $.record)) {
            if ($.fragmented !== null) if ($.fragmented.type === $.record.type) $.fragmented.fragment.putBuffer($.record.fragment), $.record = $.fragmented;else $.error($, {
              message: "Invalid fragmented record.",
              send: !0,
              alert: {
                level: A1.Alert.Level.fatal,
                description: A1.Alert.Description.unexpected_message
              }
            });
            $.record.ready = !0;
          }
        }
        return _;
      };
    return H.handshake = function ($) {
      if (H.entity !== A1.ConnectionEnd.client) H.error(H, {
        message: "Cannot initiate handshake as a server.",
        fatal: !1
      });else if (H.handshaking) H.error(H, {
        message: "Handshake already in progress.",
        fatal: !1
      });else {
        if (H.fail && !H.open && H.handshakes === 0) H.fail = !1;
        H.handshaking = !0, $ = $ || "";
        var _ = null;
        if ($.length > 0) {
          if (H.sessionCache) _ = H.sessionCache.getSession($);
          if (_ === null) $ = "";
        }
        if ($.length === 0 && H.sessionCache) {
          if (_ = H.sessionCache.getSession(), _ !== null) $ = _.id;
        }
        if (H.session = {
          id: $,
          version: null,
          cipherSuite: null,
          compressionMethod: null,
          serverCertificate: null,
          certificateRequest: null,
          clientCertificate: null,
          sp: {},
          md5: R8.md.md5.create(),
          sha1: R8.md.sha1.create()
        }, _) H.version = _.version, H.session.sp = _.sp;
        H.session.sp.client_random = A1.createRandom().getBytes(), H.open = !0, A1.queue(H, A1.createRecord(H, {
          type: A1.ContentType.handshake,
          data: A1.createClientHello(H)
        })), A1.flush(H);
      }
    }, H.process = function ($) {
      var _ = 0;
      if ($) H.input.putBytes($);
      if (!H.fail) {
        if (H.record !== null && H.record.ready && H.record.fragment.isEmpty()) H.record = null;
        if (H.record === null) _ = O(H);
        if (!H.fail && H.record !== null && !H.record.ready) _ = X(H);
        if (!H.fail && H.record !== null && H.record.ready) J(H, H.record);
      }
      return _;
    }, H.prepare = function ($) {
      return A1.queue(H, A1.createRecord(H, {
        type: A1.ContentType.application_data,
        data: R8.util.createBuffer($)
      })), A1.flush(H);
    }, H.prepareHeartbeatRequest = function ($, _) {
      if ($ instanceof R8.util.ByteBuffer) $ = $.bytes();
      if (typeof _ > "u") _ = $.length;
      return H.expectedHeartbeatPayload = $, A1.queue(H, A1.createRecord(H, {
        type: A1.ContentType.heartbeat,
        data: A1.createHeartbeat(A1.HeartbeatMessageType.heartbeat_request, $, _)
      })), A1.flush(H);
    }, H.close = function ($) {
      if (!H.fail && H.sessionCache && H.session) {
        var _ = {
          id: H.session.id,
          version: H.session.version,
          sp: H.session.sp
        };
        _.sp.keys = null, H.sessionCache.setSession(_.id, _);
      }
      if (H.open) {
        if (H.open = !1, H.input.clear(), H.isConnected || H.handshaking) H.isConnected = H.handshaking = !1, A1.queue(H, A1.createAlert(H, {
          level: A1.Alert.Level.warning,
          description: A1.Alert.Description.close_notify
        })), A1.flush(H);
        H.closed(H);
      }
      H.reset($);
    }, H;
  };
  LG7.exports = R8.tls = R8.tls || {};
  for (vBA in A1) if (typeof A1[vBA] !== "function") R8.tls[vBA] = A1[vBA];
  var vBA;
  R8.tls.prf_tls1 = J$1;
  R8.tls.hmac_sha1 = evY;
  R8.tls.createSessionCache = A1.createSessionCache;
  R8.tls.createConnection = A1.createConnection;
});

// Register to shared state
__$.Pj6 = Pj6;
