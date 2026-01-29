// Module: uf6
// Dependencies: Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uf6 = v(AFY => {
  var {
    DOCUMENT_MODE: tgY
  } = __$.Ts();
  AFY.createDocument = function () {
    return {
      nodeName: "#document",
      mode: tgY.NO_QUIRKS,
      childNodes: []
    };
  };
  AFY.createDocumentFragment = function () {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  };
  AFY.createElement = function (A, K, q) {
    return {
      nodeName: A,
      tagName: A,
      attrs: q,
      namespaceURI: K,
      childNodes: [],
      parentNode: null
    };
  };
  AFY.createCommentNode = function (A) {
    return {
      nodeName: "#comment",
      data: A,
      parentNode: null
    };
  };
  var cE7 = function (A) {
      return {
        nodeName: "#text",
        value: A,
        parentNode: null
      };
    },
    lE7 = AFY.appendChild = function (A, K) {
      A.childNodes.push(K), K.parentNode = A;
    },
    egY = AFY.insertBefore = function (A, K, q) {
      let Y = A.childNodes.indexOf(q);
      A.childNodes.splice(Y, 0, K), K.parentNode = A;
    };
  AFY.setTemplateContent = function (A, K) {
    A.content = K;
  };
  AFY.getTemplateContent = function (A) {
    return A.content;
  };
  AFY.setDocumentType = function (A, K, q, Y) {
    let z = null;
    for (let w = 0; w < A.childNodes.length; w++) if (A.childNodes[w].nodeName === "#documentType") {
      z = A.childNodes[w];
      break;
    }
    if (z) z.name = K, z.publicId = q, z.systemId = Y;else lE7(A, {
      nodeName: "#documentType",
      name: K,
      publicId: q,
      systemId: Y
    });
  };
  AFY.setDocumentMode = function (A, K) {
    A.mode = K;
  };
  AFY.getDocumentMode = function (A) {
    return A.mode;
  };
  AFY.detachNode = function (A) {
    if (A.parentNode) {
      let K = A.parentNode.childNodes.indexOf(A);
      A.parentNode.childNodes.splice(K, 1), A.parentNode = null;
    }
  };
  AFY.insertText = function (A, K) {
    if (A.childNodes.length) {
      let q = A.childNodes[A.childNodes.length - 1];
      if (q.nodeName === "#text") {
        q.value += K;
        return;
      }
    }
    lE7(A, cE7(K));
  };
  AFY.insertTextBefore = function (A, K, q) {
    let Y = A.childNodes[A.childNodes.indexOf(q) - 1];
    if (Y && Y.nodeName === "#text") Y.value += K;else egY(A, cE7(K), q);
  };
  AFY.adoptAttributes = function (A, K) {
    let q = [];
    for (let Y = 0; Y < A.attrs.length; Y++) q.push(A.attrs[Y].name);
    for (let Y = 0; Y < K.length; Y++) if (q.indexOf(K[Y].name) === -1) A.attrs.push(K[Y]);
  };
  AFY.getFirstChild = function (A) {
    return A.childNodes[0];
  };
  AFY.getChildNodes = function (A) {
    return A.childNodes;
  };
  AFY.getParentNode = function (A) {
    return A.parentNode;
  };
  AFY.getAttrList = function (A) {
    return A.attrs;
  };
  AFY.getTagName = function (A) {
    return A.tagName;
  };
  AFY.getNamespaceURI = function (A) {
    return A.namespaceURI;
  };
  AFY.getTextNodeContent = function (A) {
    return A.value;
  };
  AFY.getCommentNodeContent = function (A) {
    return A.data;
  };
  AFY.getDocumentTypeNodeName = function (A) {
    return A.name;
  };
  AFY.getDocumentTypeNodePublicId = function (A) {
    return A.publicId;
  };
  AFY.getDocumentTypeNodeSystemId = function (A) {
    return A.systemId;
  };
  AFY.isTextNode = function (A) {
    return A.nodeName === "#text";
  };
  AFY.isCommentNode = function (A) {
    return A.nodeName === "#comment";
  };
  AFY.isDocumentTypeNode = function (A) {
    return A.nodeName === "#documentType";
  };
  AFY.isElementNode = function (A) {
    return !!A.tagName;
  };
  AFY.setNodeSourceCodeLocation = function (A, K) {
    A.sourceCodeLocation = K;
  };
  AFY.getNodeSourceCodeLocation = function (A) {
    return A.sourceCodeLocation;
  };
});

// Register to shared state
__$.uf6 = uf6;
