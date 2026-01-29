// Module: Tg8
// Dependencies: _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tg8 = v(rD5 => {
  var fg8 = __$._z();
  class Ng8 {
    marshaller;
    serializer;
    deserializer;
    serdeContext;
    defaultContentType;
    constructor({
      marshaller: A,
      serializer: K,
      deserializer: q,
      serdeContext: Y,
      defaultContentType: z
    }) {
      this.marshaller = A, this.serializer = K, this.deserializer = q, this.serdeContext = Y, this.defaultContentType = z;
    }
    async serializeEventStream({
      eventStream: A,
      requestSchema: K,
      initialRequest: q
    }) {
      let Y = this.marshaller,
        z = K.getEventStreamMember(),
        w = K.getMemberSchema(z),
        H = this.serializer,
        J = this.defaultContentType,
        O = Symbol("initialRequestMarker"),
        X = {
          async *[Symbol.asyncIterator]() {
            if (q) {
              let $ = {
                ":event-type": {
                  type: "string",
                  value: "initial-request"
                },
                ":message-type": {
                  type: "string",
                  value: "event"
                },
                ":content-type": {
                  type: "string",
                  value: J
                }
              };
              H.write(K, q);
              let _ = H.flush();
              yield {
                [O]: !0,
                headers: $,
                body: _
              };
            }
            for await (let $ of A) yield $;
          }
        };
      return Y.serialize(X, $ => {
        if ($[O]) return {
          headers: $.headers,
          body: $.body
        };
        let _ = Object.keys($).find(M => {
            return M !== "__type";
          }) ?? "",
          {
            additionalHeaders: G,
            body: Z,
            eventType: W,
            explicitPayloadContentType: D
          } = this.writeEventBody(_, w, $);
        return {
          headers: {
            ":event-type": {
              type: "string",
              value: W
            },
            ":message-type": {
              type: "string",
              value: "event"
            },
            ":content-type": {
              type: "string",
              value: D ?? J
            },
            ...G
          },
          body: Z
        };
      });
    }
    async deserializeEventStream({
      response: A,
      responseSchema: K,
      initialResponseContainer: q
    }) {
      let Y = this.marshaller,
        z = K.getEventStreamMember(),
        H = K.getMemberSchema(z).getMemberSchemas(),
        J = Symbol("initialResponseMarker"),
        O = Y.deserialize(A.body, async _ => {
          let G = Object.keys(_).find(W => {
              return W !== "__type";
            }) ?? "",
            Z = _[G].body;
          if (G === "initial-response") {
            let W = await this.deserializer.read(K, Z);
            return delete W[z], {
              [J]: !0,
              ...W
            };
          } else if (G in H) {
            let W = H[G];
            if (W.isStructSchema()) {
              let D = {},
                j = !1;
              for (let [M, P] of W.structIterator()) {
                let {
                  eventHeader: f,
                  eventPayload: N
                } = P.getMergedTraits();
                if (j = j || Boolean(f || N), N) {
                  if (P.isBlobSchema()) D[M] = Z;else if (P.isStringSchema()) D[M] = (this.serdeContext?.utf8Encoder ?? fg8.toUtf8)(Z);else if (P.isStructSchema()) D[M] = await this.deserializer.read(P, Z);
                } else if (f) {
                  let T = _[G].headers[M]?.value;
                  if (T != null) if (P.isNumericSchema()) {
                    if (T && typeof T === "object" && "bytes" in T) D[M] = BigInt(T.toString());else D[M] = Number(T);
                  } else D[M] = T;
                }
              }
              if (j) return {
                [G]: D
              };
            }
            return {
              [G]: await this.deserializer.read(W, Z)
            };
          } else return {
            $unknown: _
          };
        }),
        X = O[Symbol.asyncIterator](),
        $ = await X.next();
      if ($.done) return O;
      if ($.value?.[J]) {
        if (!K) throw Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
        for (let [_, G] of Object.entries($.value)) q[_] = G;
      }
      return {
        async *[Symbol.asyncIterator]() {
          if (!$?.value?.[J]) yield $.value;
          while (!0) {
            let {
              done: _,
              value: G
            } = await X.next();
            if (_) break;
            yield G;
          }
        }
      };
    }
    writeEventBody(A, K, q) {
      let Y = this.serializer,
        z = A,
        w = null,
        H,
        J = (() => {
          return K.getSchema()[4].includes(A);
        })(),
        O = {};
      if (!J) {
        let [_, G] = q[A];
        z = _, Y.write(15, G);
      } else {
        let _ = K.getMemberSchema(A);
        if (_.isStructSchema()) {
          for (let [G, Z] of _.structIterator()) {
            let {
              eventHeader: W,
              eventPayload: D
            } = Z.getMergedTraits();
            if (D) {
              w = G;
              break;
            } else if (W) {
              let j = q[A][G],
                M = "binary";
              if (Z.isNumericSchema()) {
                if (-2147483648 <= j && j <= 2147483647) M = "integer";else M = "long";
              } else if (Z.isTimestampSchema()) M = "timestamp";else if (Z.isStringSchema()) M = "string";else if (Z.isBooleanSchema()) M = "boolean";
              if (j != null) O[G] = {
                type: M,
                value: j
              }, delete q[A][G];
            }
          }
          if (w !== null) {
            let G = _.getMemberSchema(w);
            if (G.isBlobSchema()) H = "application/octet-stream";else if (G.isStringSchema()) H = "text/plain";
            Y.write(G, q[A][w]);
          } else Y.write(_, q[A]);
        } else throw Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
      }
      let X = Y.flush();
      return {
        body: typeof X === "string" ? (this.serdeContext?.utf8Decoder ?? fg8.fromUtf8)(X) : X,
        eventType: z,
        explicitPayloadContentType: H,
        additionalHeaders: O
      };
    }
  }
  rD5.EventStreamSerde = Ng8;
});

// Register to shared state
__$.Tg8 = Tg8;
