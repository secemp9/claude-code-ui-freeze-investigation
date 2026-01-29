// Module: KjK
// Dependencies: gg6, Ug6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KjK = v((uFJ, AjK) => {
  var BQ2 = CA("util"),
    eDK = __$.gg6(),
    mQ2 = __$.Ug6(),
    gQ2 = AjK.exports = function (A) {
      eDK.call(this);
      let K = [],
        q = this;
      this._filter = new mQ2(A, {
        read: this.read.bind(this),
        write: function (Y) {
          K.push(Y);
        },
        complete: function () {
          q.emit("complete", Buffer.concat(K));
        }
      }), this._filter.start();
    };
  BQ2.inherits(gQ2, eDK);
});

// Register to shared state
__$.KjK = KjK;
