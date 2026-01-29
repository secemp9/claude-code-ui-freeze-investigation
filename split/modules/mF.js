// Module: mF
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mF = v(X05 => {
  var ox8 = () => (A, K) => async q => {
      try {
        let Y = await A(q),
          {
            clientName: z,
            commandName: w,
            logger: H,
            dynamoDbDocumentClientOptions: J = {}
          } = K,
          {
            overrideInputFilterSensitiveLog: O,
            overrideOutputFilterSensitiveLog: X
          } = J,
          $ = O ?? K.inputFilterSensitiveLog,
          _ = X ?? K.outputFilterSensitiveLog,
          {
            $metadata: G,
            ...Z
          } = Y.output;
        return H?.info?.({
          clientName: z,
          commandName: w,
          input: $(q.input),
          output: _(Z),
          metadata: G
        }), Y;
      } catch (Y) {
        let {
            clientName: z,
            commandName: w,
            logger: H,
            dynamoDbDocumentClientOptions: J = {}
          } = K,
          {
            overrideInputFilterSensitiveLog: O
          } = J,
          X = O ?? K.inputFilterSensitiveLog;
        throw H?.error?.({
          clientName: z,
          commandName: w,
          input: X(q.input),
          error: Y,
          metadata: Y.$metadata
        }), Y;
      }
    },
    ax8 = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: !0
    },
    O05 = A => ({
      applyToStack: K => {
        K.add(ox8(), ax8);
      }
    });
  X05.getLoggerPlugin = O05;
  X05.loggerMiddleware = ox8;
  X05.loggerMiddlewareOptions = ax8;
});

// Register to shared state
__$.mF = mF;
