// Module: GH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GH8 = v((fkz, _H8) => {
  function TMq(A) {
    let q = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",
      Y = "property rsc_defaults op_defaults",
      z = "params meta operations op rule attributes utilization",
      w = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",
      H = "number string",
      J = "Master Started Slave Stopped start promote demote stop monitor true false";
    return {
      name: "crmsh",
      aliases: ["crm", "pcmk"],
      case_insensitive: !0,
      keywords: {
        keyword: "params meta operations op rule attributes utilization " + w + " number string",
        literal: "Master Started Slave Stopped start promote demote stop monitor true false"
      },
      contains: [A.HASH_COMMENT_MODE, {
        beginKeywords: "node",
        starts: {
          end: "\\s*([\\w_-]+:)?",
          starts: {
            className: "title",
            end: "\\s*[\\$\\w_][\\w_-]*"
          }
        }
      }, {
        beginKeywords: "primitive rsc_template",
        starts: {
          className: "title",
          end: "\\s*[\\$\\w_][\\w_-]*",
          starts: {
            end: "\\s*@?[\\w_][\\w_\\.:-]*"
          }
        }
      }, {
        begin: "\\b(" + q.split(" ").join("|") + ")\\s+",
        keywords: q,
        starts: {
          className: "title",
          end: "[\\$\\w_][\\w_-]*"
        }
      }, {
        beginKeywords: "property rsc_defaults op_defaults",
        starts: {
          className: "title",
          end: "\\s*([\\w_-]+:)?"
        }
      }, A.QUOTE_STRING_MODE, {
        className: "meta",
        begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
        relevance: 0
      }, {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
        relevance: 0
      }, {
        className: "literal",
        begin: "[-]?(infinity|inf)",
        relevance: 0
      }, {
        className: "attr",
        begin: /([A-Za-z$_#][\w_-]+)=/,
        relevance: 0
      }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        relevance: 0
      }]
    };
  }
  _H8.exports = TMq;
});

// Register to shared state
__$.GH8 = GH8;
