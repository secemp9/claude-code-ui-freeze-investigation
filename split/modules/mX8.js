// Module: mX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mX8 = v((CLz, BX8) => {
  function Qfq(A) {
    let H = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d#@][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      J = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [A.BACKSLASH_ESCAPE, H, {
          className: "variable",
          begin: /\$\(/,
          end: /\)/,
          contains: [A.BACKSLASH_ESCAPE]
        }]
      },
      O = {
        className: "string",
        begin: /'/,
        end: /'/
      };
    return {
      name: "Microtik RouterOS script",
      aliases: ["mikrotik"],
      case_insensitive: !0,
      keywords: {
        $pattern: /:?[\w-]+/,
        literal: "true false yes no nothing nil null",
        keyword: "foreach do while for if from to step else on-error and or not in :" + "foreach do while for if from to step else on-error and or not in".split(" ").join(" :") + " :" + "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")
      },
      contains: [{
        variants: [{
          begin: /\/\*/,
          end: /\*\//
        }, {
          begin: /\/\//,
          end: /$/
        }, {
          begin: /<\//,
          end: />/
        }],
        illegal: /./
      }, A.COMMENT("^#", "$"), J, O, H, {
        begin: /[\w-]+=([^\s{}[\]()>]+)/,
        relevance: 0,
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: /[^=]+/
        }, {
          begin: /=/,
          endsWithParent: !0,
          relevance: 0,
          contains: [J, O, H, {
            className: "literal",
            begin: "\\b(" + "true false yes no nothing nil null".split(" ").join("|") + ")\\b"
          }, {
            begin: /("[^"]*"|[^\s{}[\]]+)/
          }]
        }]
      }, {
        className: "number",
        begin: /\*[0-9a-fA-F]+/
      }, {
        begin: "\\b(" + "add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|") + ")([\\s[(\\]|])",
        returnBegin: !0,
        contains: [{
          className: "builtin-name",
          begin: /\w+/
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "(\\.\\./|/|\\s)((" + "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|") + ");?\\s)+"
        }, {
          begin: /\.\./,
          relevance: 0
        }]
      }]
    };
  }
  BX8.exports = Qfq;
});

// Register to shared state
__$.mX8 = mX8;
