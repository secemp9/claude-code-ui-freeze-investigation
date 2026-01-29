// Module: of8
// Dependencies: H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var of8 = v(rf8 => {
  var {
    _optionalChain: Zi
  } = __$.H8();
  Object.defineProperty(rf8, "__esModule", {
    value: !0
  });
  var bvA = __$.H8(),
    nf8 = __$.wV(),
    viq = __$.Gi(),
    Eiq = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
    kiq = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"]
    };
  function Ciq(A) {
    return A && typeof A === "object" && A.once && typeof A.once === "function";
  }
  class DtA {
    static __initStatic() {
      this.id = "Mongo";
    }
    constructor(A = {}) {
      this.name = DtA.id, this._operations = Array.isArray(A.operations) ? A.operations : Eiq, this._describeOperations = "describeOperations" in A ? A.describeOperations : !0, this._useMongoose = !!A.useMongoose;
    }
    loadDependency() {
      let A = this._useMongoose ? "mongoose" : "mongodb";
      return this._module = this._module || bvA.loadModule(A);
    }
    setupOnce(A, K) {
      if (viq.shouldDisableAutoInstrumentation(K)) {
        nf8.DEBUG_BUILD && bvA.logger.log("Mongo Integration is skipped because of instrumenter configuration.");
        return;
      }
      let q = this.loadDependency();
      if (!q) {
        let Y = this._useMongoose ? "mongoose" : "mongodb";
        nf8.DEBUG_BUILD && bvA.logger.error(`Mongo Integration was unable to require \`${Y}\` package.`);
        return;
      }
      this._instrumentOperations(q.Collection, this._operations, K);
    }
    _instrumentOperations(A, K, q) {
      K.forEach(Y => this._patchOperation(A, Y, q));
    }
    _patchOperation(A, K, q) {
      if (!(K in A.prototype)) return;
      let Y = this._getSpanContextFromOperationArguments.bind(this);
      bvA.fill(A.prototype, K, function (z) {
        return function (...w) {
          let H = w[w.length - 1],
            J = q(),
            O = J.getScope(),
            X = J.getClient(),
            $ = O.getSpan(),
            _ = Zi([X, "optionalAccess", Z => Z.getOptions, "call", Z => Z(), "access", Z => Z.sendDefaultPii]);
          if (typeof H !== "function" || K === "mapReduce" && w.length === 2) {
            let Z = Zi([$, "optionalAccess", D => D.startChild, "call", D => D(Y(this, K, w, _))]),
              W = z.call(this, ...w);
            if (bvA.isThenable(W)) return W.then(D => {
              return Zi([Z, "optionalAccess", j => j.end, "call", j => j()]), D;
            });else if (Ciq(W)) {
              let D = W;
              try {
                D.once("close", () => {
                  Zi([Z, "optionalAccess", j => j.end, "call", j => j()]);
                });
              } catch (j) {
                Zi([Z, "optionalAccess", M => M.end, "call", M => M()]);
              }
              return D;
            } else return Zi([Z, "optionalAccess", D => D.end, "call", D => D()]), W;
          }
          let G = Zi([$, "optionalAccess", Z => Z.startChild, "call", Z => Z(Y(this, K, w.slice(0, -1)))]);
          return z.call(this, ...w.slice(0, -1), function (Z, W) {
            Zi([G, "optionalAccess", D => D.end, "call", D => D()]), H(Z, W);
          });
        };
      });
    }
    _getSpanContextFromOperationArguments(A, K, q, Y = !1) {
      let z = {
          "db.system": "mongodb",
          "db.name": A.dbName,
          "db.operation": K,
          "db.mongodb.collection": A.collectionName
        },
        w = {
          op: "db",
          origin: "auto.db.mongo",
          description: K,
          data: z
        },
        H = kiq[K],
        J = Array.isArray(this._describeOperations) ? this._describeOperations.includes(K) : this._describeOperations;
      if (!H || !J || !Y) return w;
      try {
        if (K === "mapReduce") {
          let [O, X] = q;
          z[H[0]] = typeof O === "string" ? O : O.name || "<anonymous>", z[H[1]] = typeof X === "string" ? X : X.name || "<anonymous>";
        } else for (let O = 0; O < H.length; O++) z[`db.mongodb.${H[O]}`] = JSON.stringify(q[O]);
      } catch (O) {}
      return w;
    }
  }
  DtA.__initStatic();
  rf8.Mongo = DtA;
});

// Register to shared state
__$.of8 = of8;
