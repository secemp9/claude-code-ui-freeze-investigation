// Module: jc7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jc7 = v((CEH, YY2) => {
  YY2.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              Api: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  methods: {
                    rule: "repeated",
                    type: "Method",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  },
                  version: {
                    type: "string",
                    id: 4
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 5
                  },
                  mixins: {
                    rule: "repeated",
                    type: "Mixin",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Method: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  requestTypeUrl: {
                    type: "string",
                    id: 2
                  },
                  requestStreaming: {
                    type: "bool",
                    id: 3
                  },
                  responseTypeUrl: {
                    type: "string",
                    id: 4
                  },
                  responseStreaming: {
                    type: "bool",
                    id: 5
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Mixin: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  root: {
                    type: "string",
                    id: 2
                  }
                }
              },
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Option: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "Any",
                    id: 2
                  }
                }
              },
              Syntax: {
                values: {
                  SYNTAX_PROTO2: 0,
                  SYNTAX_PROTO3: 1
                }
              }
            }
          }
        }
      }
    }
  };
});

// Register to shared state
__$.jc7 = jc7;
