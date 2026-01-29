// Module: Sk7
// Dependencies: Lk7, cf6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sk7 = v($pY => {
  var JpY = __$.Lk7(),
    {
      DOCUMENT_MODE: OpY
    } = __$.cf6(),
    Rk7 = {
      element: 1,
      text: 3,
      cdata: 4,
      comment: 8
    },
    yk7 = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data"
    };
  class ks {
    constructor(A) {
      for (let K of Object.keys(A)) this[K] = A[K];
    }
    get firstChild() {
      let A = this.children;
      return A && A[0] || null;
    }
    get lastChild() {
      let A = this.children;
      return A && A[A.length - 1] || null;
    }
    get nodeType() {
      return Rk7[this.type] || Rk7.element;
    }
  }
  Object.keys(yk7).forEach(A => {
    let K = yk7[A];
    Object.defineProperty(ks.prototype, A, {
      get: function () {
        return this[K] || null;
      },
      set: function (q) {
        return this[K] = q, q;
      }
    });
  });
  $pY.createDocument = function () {
    return new ks({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: [],
      "x-mode": OpY.NO_QUIRKS
    });
  };
  $pY.createDocumentFragment = function () {
    return new ks({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: []
    });
  };
  $pY.createElement = function (A, K, q) {
    let Y = Object.create(null),
      z = Object.create(null),
      w = Object.create(null);
    for (let H = 0; H < q.length; H++) {
      let J = q[H].name;
      Y[J] = q[H].value, z[J] = q[H].namespace, w[J] = q[H].prefix;
    }
    return new ks({
      type: A === "script" || A === "style" ? A : "tag",
      name: A,
      namespace: K,
      attribs: Y,
      "x-attribsNamespace": z,
      "x-attribsPrefix": w,
      children: [],
      parent: null,
      prev: null,
      next: null
    });
  };
  $pY.createCommentNode = function (A) {
    return new ks({
      type: "comment",
      data: A,
      parent: null,
      prev: null,
      next: null
    });
  };
  var Ik7 = function (A) {
      return new ks({
        type: "text",
        data: A,
        parent: null,
        prev: null,
        next: null
      });
    },
    lf6 = $pY.appendChild = function (A, K) {
      let q = A.children[A.children.length - 1];
      if (q) q.next = K, K.prev = q;
      A.children.push(K), K.parent = A;
    },
    XpY = $pY.insertBefore = function (A, K, q) {
      let Y = A.children.indexOf(q),
        z = q.prev;
      if (z) z.next = K, K.prev = z;
      q.prev = K, K.next = q, A.children.splice(Y, 0, K), K.parent = A;
    };
  $pY.setTemplateContent = function (A, K) {
    lf6(A, K);
  };
  $pY.getTemplateContent = function (A) {
    return A.children[0];
  };
  $pY.setDocumentType = function (A, K, q, Y) {
    let z = JpY.serializeContent(K, q, Y),
      w = null;
    for (let H = 0; H < A.children.length; H++) if (A.children[H].type === "directive" && A.children[H].name === "!doctype") {
      w = A.children[H];
      break;
    }
    if (w) w.data = z, w["x-name"] = K, w["x-publicId"] = q, w["x-systemId"] = Y;else lf6(A, new ks({
      type: "directive",
      name: "!doctype",
      data: z,
      "x-name": K,
      "x-publicId": q,
      "x-systemId": Y
    }));
  };
  $pY.setDocumentMode = function (A, K) {
    A["x-mode"] = K;
  };
  $pY.getDocumentMode = function (A) {
    return A["x-mode"];
  };
  $pY.detachNode = function (A) {
    if (A.parent) {
      let K = A.parent.children.indexOf(A),
        q = A.prev,
        Y = A.next;
      if (A.prev = null, A.next = null, q) q.next = Y;
      if (Y) Y.prev = q;
      A.parent.children.splice(K, 1), A.parent = null;
    }
  };
  $pY.insertText = function (A, K) {
    let q = A.children[A.children.length - 1];
    if (q && q.type === "text") q.data += K;else lf6(A, Ik7(K));
  };
  $pY.insertTextBefore = function (A, K, q) {
    let Y = A.children[A.children.indexOf(q) - 1];
    if (Y && Y.type === "text") Y.data += K;else XpY(A, Ik7(K), q);
  };
  $pY.adoptAttributes = function (A, K) {
    for (let q = 0; q < K.length; q++) {
      let Y = K[q].name;
      if (typeof A.attribs[Y] > "u") A.attribs[Y] = K[q].value, A["x-attribsNamespace"][Y] = K[q].namespace, A["x-attribsPrefix"][Y] = K[q].prefix;
    }
  };
  $pY.getFirstChild = function (A) {
    return A.children[0];
  };
  $pY.getChildNodes = function (A) {
    return A.children;
  };
  $pY.getParentNode = function (A) {
    return A.parent;
  };
  $pY.getAttrList = function (A) {
    let K = [];
    for (let q in A.attribs) K.push({
      name: q,
      value: A.attribs[q],
      namespace: A["x-attribsNamespace"][q],
      prefix: A["x-attribsPrefix"][q]
    });
    return K;
  };
  $pY.getTagName = function (A) {
    return A.name;
  };
  $pY.getNamespaceURI = function (A) {
    return A.namespace;
  };
  $pY.getTextNodeContent = function (A) {
    return A.data;
  };
  $pY.getCommentNodeContent = function (A) {
    return A.data;
  };
  $pY.getDocumentTypeNodeName = function (A) {
    return A["x-name"];
  };
  $pY.getDocumentTypeNodePublicId = function (A) {
    return A["x-publicId"];
  };
  $pY.getDocumentTypeNodeSystemId = function (A) {
    return A["x-systemId"];
  };
  $pY.isTextNode = function (A) {
    return A.type === "text";
  };
  $pY.isCommentNode = function (A) {
    return A.type === "comment";
  };
  $pY.isDocumentTypeNode = function (A) {
    return A.type === "directive" && A.name === "!doctype";
  };
  $pY.isElementNode = function (A) {
    return !!A.attribs;
  };
  $pY.setNodeSourceCodeLocation = function (A, K) {
    A.sourceCodeLocation = K;
  };
  $pY.getNodeSourceCodeLocation = function (A) {
    return A.sourceCodeLocation;
  };
  $pY.updateNodeSourceCodeLocation = function (A, K) {
    A.sourceCodeLocation = Object.assign(A.sourceCodeLocation, K);
  };
});

// Register to shared state
__$.Sk7 = Sk7;
