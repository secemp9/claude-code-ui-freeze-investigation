// Module: Jw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jw8 = v((iEz, Hw8) => {
  function kjq(A) {
    let q = {
        keyword: "if for while var new function do return void else break",
        literal: "BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined",
        built_in: "Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year "
      },
      Y = {
        className: "symbol",
        begin: "\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"
      },
      z = {
        className: "number",
        variants: [{
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: A.C_NUMBER_RE
        }],
        relevance: 0
      },
      w = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: q,
        contains: []
      },
      H = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [A.BACKSLASH_ESCAPE, w]
      };
    w.contains = [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, H, z, A.REGEXP_MODE];
    let J = w.contains.concat([A.C_BLOCK_COMMENT_MODE, A.C_LINE_COMMENT_MODE]);
    return {
      name: "ArcGIS Arcade",
      keywords: q,
      contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, H, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Y, z, {
        begin: /[{,]\s*/,
        relevance: 0,
        contains: [{
          begin: "[A-Za-z_][0-9A-Za-z_]*\\s*:",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "attr",
            begin: "[A-Za-z_][0-9A-Za-z_]*",
            relevance: 0
          }]
        }]
      }, {
        begin: "(" + A.RE_STARTERS_RE + "|\\b(return)\\b)\\s*",
        keywords: "return",
        contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.REGEXP_MODE, {
          className: "function",
          begin: "(\\(.*?\\)|[A-Za-z_][0-9A-Za-z_]*)\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: "[A-Za-z_][0-9A-Za-z_]*"
            }, {
              begin: /\(\s*\)/
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: q,
              contains: J
            }]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z_][0-9A-Za-z_]*"
        }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: J
        }],
        illegal: /\[|%/
      }, {
        begin: /\$[(.]/
      }],
      illegal: /#(?!!)/
    };
  }
  Hw8.exports = kjq;
});

// Register to shared state
__$.Jw8 = Jw8;
