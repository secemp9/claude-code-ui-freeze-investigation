// Module: dO4
// Dependencies: AK6, Sx, IyA, M51

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dO4 = k(() => {
  __$.AK6();
  __$.Sx = class Sx {
    style;
    measureFunc;
    children = [];
    parent = null;
    layout = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    dirty = !0;
    lastConstraints = null;
    constructor(A = {}, K) {
      this.style = A, this.measureFunc = K ?? null;
    }
    appendChild(A) {
      A.parent = this, this.children.push(A), this.markDirty();
    }
    insertChild(A, K) {
      A.parent = this, this.children.splice(K, 0, A), this.markDirty();
    }
    removeChild(A) {
      let K = this.children.indexOf(A);
      if (K !== -1) A.parent = null, this.children.splice(K, 1), this.markDirty();
    }
    markDirty() {
      if (this.dirty) return;
      this.dirty = !0, this.parent?.markDirty();
    }
    calculateLayout(A, K) {
      this.measureNode(A, K), this.layout.x = 0, this.layout.y = 0, this.positionChildren(), this.dirty = !1;
    }
    measureNode(A, K) {
      let q = this.lastConstraints !== null && this.lastConstraints.width === A && this.lastConstraints.height === K;
      if (!this.dirty && q) return;
      this.lastConstraints = {
        width: A,
        height: K
      };
      let {
          style: Y
        } = this,
        z = this.getPadding(),
        w = this.getBorder(),
        H = __$.IyA(z, w),
        J = this.resolveDimension(Y.width, A, Y.minWidth, Y.maxWidth);
      if (J === void 0 && !Y.width && A !== void 0 && !this.parent) J = A;
      let O = this.resolveDimension(Y.height, K, Y.minHeight, Y.maxHeight);
      if (this.measureFunc && this.children.length === 0) {
        let X = J ?? A,
          $ = X !== void 0 ? X - H.left - H.right : void 0,
          _ = O !== void 0 ? O - H.top - H.bottom : void 0,
          G = this.measureFunc($, _);
        if (J === void 0) J = G.width + H.left + H.right;
        if (O === void 0) O = G.height + H.top + H.bottom;
      }
      if (this.children.length > 0) {
        let X = this.measureChildren(J ?? A, O, H);
        if (J === void 0) J = X.contentWidth + H.left + H.right;
        if (O === void 0) O = X.contentHeight + H.top + H.bottom;
      }
      J = __$.M51(J ?? H.left + H.right, Y.minWidth, Y.maxWidth), O = __$.M51(O ?? H.top + H.bottom, Y.minHeight, Y.maxHeight), this.layout.width = J, this.layout.height = O, this.dirty = !1;
    }
    measureChildren(A, K, q) {
      let {
          style: Y,
          children: z
        } = this,
        w = Y.flexDirection ?? "column",
        H = w === "row" || w === "row-reverse",
        O = (Y.flexWrap ?? "nowrap") !== "nowrap",
        X = H ? Y.columnGap ?? Y.gap ?? 0 : Y.rowGap ?? Y.gap ?? 0,
        $ = H ? Y.rowGap ?? Y.gap ?? 0 : Y.columnGap ?? Y.gap ?? 0,
        _ = X,
        Z = z.filter(R => !R.isHidden()).filter(R => !R.isAbsolute()),
        W = A !== void 0 ? A - q.left - q.right : void 0,
        D = K !== void 0 ? K - q.top - q.bottom : void 0,
        j = 0,
        M = 0,
        P = 0,
        f = [];
      for (let R of Z) {
        let x = this.getGrowFactor(R, H);
        P += x;
        let y = R.getMargin(),
          B = H ? y.left + y.right : y.top + y.bottom,
          b = H ? y.top + y.bottom : y.left + y.right;
        R.measureNode(W, D);
        let F = (H ? R.layout.height : R.layout.width) + b,
          Q;
        if (R.style.flexBasis !== void 0) {
          let u = R.style.flexBasis;
          if (H) R.layout.width = u;else R.layout.height = u;
          Q = u + B;
        } else if (x > 0) {
          if ((H ? W : D) !== void 0) {
            if (H) R.layout.width = 0;else R.layout.height = 0;
            Q = B;
          } else Q = (H ? R.layout.width : R.layout.height) + B;
        } else Q = (H ? R.layout.width : R.layout.height) + B;
        f.push({
          main: Q,
          cross: F,
          grow: x
        }), j += Q, M = Math.max(M, F);
      }
      let N = Z.length > 1 ? _ * (Z.length - 1) : 0,
        T = H ? W : D,
        C = j + N;
      if (T !== void 0 && P > 0) {
        let R = Math.max(0, T - j - N),
          x = 0,
          y = 0;
        for (let B = 0; B < Z.length; B++) {
          let b = Z[B],
            F = f[B];
          if (F.grow > 0) {
            y += F.grow;
            let Q = Math.round(R * y / P),
              u = Q - x;
            x = Q;
            let r = (H ? b.layout.width : b.layout.height) + u;
            if (H) b.layout.width = r;else b.layout.height = r;
            let c = b.getMargin(),
              YA = H ? c.left + c.right : c.top + c.bottom;
            f[B] = {
              main: r + YA,
              cross: F.cross,
              grow: F.grow
            };
          }
        }
        C = T;
      }
      if (T !== void 0 && C > T) {
        let R = C - T,
          x = Z.map((B, b) => {
            let F = B.style.flexShrink ?? 0,
              Q = H ? B.layout.width : B.layout.height,
              u = H ? B.style.minWidth ?? 0 : B.style.minHeight ?? 0;
            return {
              index: b,
              child: B,
              shrinkFactor: F,
              currentSize: Q,
              minSize: u,
              canShrink: F > 0 && Q > u
            };
          }),
          y = 0;
        for (let B of x) if (B.canShrink) y += B.currentSize * B.shrinkFactor;
        if (y > 0) {
          let B = 0,
            b = 0;
          for (let F of x) {
            if (!F.canShrink) continue;
            let Q = F.currentSize * F.shrinkFactor;
            b += Q;
            let d = Math.round(R * b / y) - B,
              r = F.currentSize - F.minSize;
            if (d > r) d = r;
            if (B += d, F.currentSize -= d, H) F.child.layout.width = F.currentSize;else F.child.layout.height = F.currentSize;
            let c = F.child.getMargin(),
              YA = H ? c.left + c.right : c.top + c.bottom;
            f[F.index] = {
              main: F.currentSize + YA,
              cross: f[F.index].cross,
              grow: f[F.index].grow
            };
          }
        }
        C = N;
        for (let B of f) C += B.main;
      }
      if (O && Z.length > 0) {
        let R = H ? W : D,
          x = this.calculateFlexLines(Z, R, H, X),
          y = 0,
          B = 0;
        for (let b = 0; b < x.length; b++) {
          let F = x[b];
          y = Math.max(y, F.mainSize), B += F.crossSize + (b > 0 ? $ : 0);
        }
        return {
          contentWidth: H ? y : B,
          contentHeight: H ? B : y
        };
      }
      return {
        contentWidth: H ? C : M,
        contentHeight: H ? M : C
      };
    }
    positionChildren() {
      let {
        style: A,
        children: K,
        layout: q
      } = this;
      if (K.length === 0) return;
      let Y = K.filter(b => !b.isHidden()),
        z = Y.filter(b => !b.isAbsolute()),
        w = Y.filter(b => b.isAbsolute()),
        H = __$.IyA(this.getPadding(), this.getBorder()),
        J = q.width - H.left - H.right,
        O = q.height - H.top - H.bottom;
      for (let b of w) {
        b.measureNode(J, O);
        let F;
        if (b.style.left !== void 0) F = q.x + H.left + b.style.left;else if (b.style.right !== void 0) F = q.x + H.left + J - b.layout.width - b.style.right;else F = q.x + H.left;
        let Q;
        if (b.style.top !== void 0) Q = q.y + H.top + b.style.top;else if (b.style.bottom !== void 0) Q = q.y + H.top + O - b.layout.height - b.style.bottom;else Q = q.y + H.top;
        b.layout.x = F, b.layout.y = Q, b.positionChildren();
      }
      if (z.length === 0) return;
      let X = A.flexDirection ?? "column",
        $ = A.alignItems ?? "stretch",
        _ = A.justifyContent ?? "start",
        G = X === "row" || X === "row-reverse",
        Z = A.flexWrap ?? "nowrap",
        W = Z !== "nowrap",
        D = G ? A.columnGap ?? A.gap ?? 0 : A.rowGap ?? A.gap ?? 0,
        j = G ? A.rowGap ?? A.gap ?? 0 : A.columnGap ?? A.gap ?? 0,
        M = D,
        P = X === "row-reverse" || X === "column-reverse";
      if (W) {
        this.positionWrappedChildren(z, q, H, J, O, G, Z, $, _, D, j, P);
        return;
      }
      let f = 0;
      for (let b of z) {
        let F = b.getMargin(),
          Q = G ? F.left + F.right : F.top + F.bottom;
        f += (G ? b.layout.width : b.layout.height) + Q;
      }
      if (z.length > 1) f += M * (z.length - 1);
      let N = G ? J : O,
        T = N - f,
        C = P ? _ === "start" ? "end" : _ === "end" ? "start" : _ : _,
        R = P && (_ === "space-between" || _ === "space-around" || _ === "space-evenly"),
        x = P && !R ? [...z].reverse() : z,
        y = 0;
      switch (C) {
        case "start":
          y = 0;
          break;
        case "center":
          y = Math.round(T / 2);
          break;
        case "end":
          y = T;
          break;
        case "space-between":
          y = 0;
          break;
        case "space-around":
        case "space-evenly":
          break;
      }
      if (R) {
        let b = z.length,
          F = Math.max(0, T);
        for (let Q = 0; Q < b; Q++) {
          let u = z[Q],
            d = u.getMargin(),
            r = G ? u.layout.width : u.layout.height,
            c = G ? u.layout.height : u.layout.width,
            YA = G ? O : J,
            e = G ? d.top : d.left,
            qA = G ? d.bottom : d.right,
            HA = G ? d.right : d.bottom,
            _A;
          if (_ === "space-between" && b > 1) _A = Math.round(F * Q / (b - 1));else if (_ === "space-around") {
            let yA = b * 2,
              AA = Q * 2 + 1;
            _A = Math.round(F * AA / yA);
          } else _A = Math.round(F * (Q + 1) / (b + 1));
          let a = 0;
          for (let yA = 0; yA < Q; yA++) {
            let AA = z[yA],
              wA = AA.getMargin(),
              GA = G ? wA.left + wA.right : wA.top + wA.bottom;
            a += G ? AA.layout.width : AA.layout.height, a += GA + M;
          }
          let JA = N - _A - a - r - HA,
            jA = u.style.alignSelf && u.style.alignSelf !== "auto" ? u.style.alignSelf : $,
            MA = e + c + qA,
            hA = e;
          switch (jA) {
            case "start":
              hA = e;
              break;
            case "center":
              hA = Math.round((YA - MA) / 2) + e;
              break;
            case "end":
              hA = YA - c - qA;
              break;
            case "stretch":
              {
                if (hA = e, !(G ? u.style.height?.type === "fixed" : u.style.width?.type === "fixed")) __$.Sx.stretchChild(u, G, YA - e - qA);
                break;
              }
          }
          if (G) u.layout.x = q.x + H.left + JA, u.layout.y = q.y + H.top + hA;else u.layout.x = q.x + H.left + hA, u.layout.y = q.y + H.top + JA;
          u.positionChildren();
        }
        return;
      }
      let B = y;
      for (let b = 0; b < x.length; b++) {
        let F = x[b],
          Q = F.getMargin(),
          u = G ? F.layout.width : F.layout.height,
          d = G ? F.layout.height : F.layout.width,
          r = G ? O : J,
          c = G ? Q.left : Q.top,
          YA = G ? Q.right : Q.bottom,
          e = G ? Q.top : Q.left,
          qA = G ? Q.bottom : Q.right,
          HA = Math.max(0, T);
        if (C === "space-between" && x.length > 1) {
          B = Math.round(HA * b / (x.length - 1));
          for (let jA = 0; jA < b; jA++) {
            let MA = x[jA],
              hA = MA.getMargin(),
              yA = G ? hA.left + hA.right : hA.top + hA.bottom;
            B += G ? MA.layout.width : MA.layout.height, B += yA + M;
          }
        } else if (C === "space-around") {
          let jA = x.length * 2,
            MA = b * 2 + 1;
          B = Math.round(HA * MA / jA);
          for (let hA = 0; hA < b; hA++) {
            let yA = x[hA],
              AA = yA.getMargin(),
              wA = G ? AA.left + AA.right : AA.top + AA.bottom;
            B += G ? yA.layout.width : yA.layout.height, B += wA + M;
          }
        } else if (C === "space-evenly") {
          let jA = x.length + 1;
          B = Math.round(HA * (b + 1) / jA);
          for (let MA = 0; MA < b; MA++) {
            let hA = x[MA],
              yA = hA.getMargin(),
              AA = G ? yA.left + yA.right : yA.top + yA.bottom;
            B += G ? hA.layout.width : hA.layout.height, B += AA + M;
          }
        }
        let _A = F.style.alignSelf && F.style.alignSelf !== "auto" ? F.style.alignSelf : $,
          a = e + d + qA,
          JA = e;
        switch (_A) {
          case "start":
            JA = e;
            break;
          case "center":
            JA = Math.round((r - a) / 2) + e;
            break;
          case "end":
            JA = r - d - qA;
            break;
          case "stretch":
            {
              if (JA = e, !(G ? F.style.height?.type === "fixed" : F.style.width?.type === "fixed")) __$.Sx.stretchChild(F, G, r - e - qA);
              break;
            }
        }
        if (G) F.layout.x = q.x + H.left + B + c, F.layout.y = q.y + H.top + JA;else F.layout.x = q.x + H.left + JA, F.layout.y = q.y + H.top + B + c;
        if (F.positionChildren(), C === "start" || C === "center" || C === "end") B += u + c + YA + M;
      }
    }
    resolveDimension(A, K, q, Y) {
      if (!A) return;
      let z;
      switch (A.type) {
        case "fixed":
          z = A.value;
          break;
        case "percent":
          z = K !== void 0 ? K * A.value / 100 : void 0;
          break;
        case "fit":
        case "grow":
          z = void 0;
          break;
      }
      return z !== void 0 ? __$.M51(z, q, Y) : void 0;
    }
    static stretchChild(A, K, q) {
      if (K) {
        let Y = q !== A.layout.height;
        if (A.layout.height = q, Y && A.children.length > 0) {
          let z = __$.IyA(A.getPadding(), A.getBorder());
          A.measureChildren(A.layout.width, q, z);
        }
      } else {
        let Y = q !== A.layout.width;
        if (A.layout.width = q, Y && A.children.length > 0) {
          let z = __$.IyA(A.getPadding(), A.getBorder());
          A.measureChildren(q, A.layout.height, z);
        }
      }
    }
    getGrowFactor(A, K) {
      if (A.style.flexGrow !== void 0) return A.style.flexGrow;
      let q = K ? A.style.width : A.style.height;
      if (q?.type === "grow") return q.factor;
      return 0;
    }
    static ZERO = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    getPadding() {
      return this.style.padding ?? __$.Sx.ZERO;
    }
    getMargin() {
      return this.style.margin ?? __$.Sx.ZERO;
    }
    getBorder() {
      return this.style.border ?? __$.Sx.ZERO;
    }
    isHidden() {
      return this.style.display === "none";
    }
    isAbsolute() {
      return this.style.position === "absolute";
    }
    positionWrappedChildren(A, K, q, Y, z, w, H, J, O, X, $, _) {
      let G = w ? Y : z,
        Z = w ? z : Y,
        W = this.calculateFlexLines(A, G, w, X);
      if (H === "wrap-reverse") W.reverse();
      let D = 0;
      for (let M = 0; M < W.length; M++) D += W[M].crossSize + (M > 0 ? $ : 0);
      let j = 0;
      if (H === "wrap-reverse") j = Z - D;
      for (let M = 0; M < W.length; M++) {
        let P = W[M],
          f = G - P.mainSize,
          N = _ ? O === "start" ? "end" : O === "end" ? "start" : O : O,
          T = 0;
        switch (N) {
          case "start":
            T = 0;
            break;
          case "center":
            T = Math.round(f / 2);
            break;
          case "end":
            T = f;
            break;
          case "space-between":
          case "space-around":
          case "space-evenly":
            break;
        }
        let C = _ ? [...P.children].reverse() : P.children,
          R = T;
        for (let x = 0; x < C.length; x++) {
          let y = C[x],
            B = y.getMargin(),
            b = w ? y.layout.width : y.layout.height,
            F = w ? y.layout.height : y.layout.width,
            Q = w ? B.left : B.top,
            u = w ? B.right : B.bottom,
            d = w ? B.top : B.left,
            r = w ? B.bottom : B.right,
            c = Math.max(0, f),
            YA = C.length;
          if (N === "space-between" && YA > 1) {
            R = Math.round(c * x / (YA - 1));
            for (let _A = 0; _A < x; _A++) {
              let a = C[_A],
                JA = a.getMargin(),
                jA = w ? JA.left + JA.right : JA.top + JA.bottom;
              R += w ? a.layout.width : a.layout.height, R += jA + X;
            }
          } else if (N === "space-around") {
            let _A = YA * 2,
              a = x * 2 + 1;
            R = Math.round(c * a / _A);
            for (let JA = 0; JA < x; JA++) {
              let jA = C[JA],
                MA = jA.getMargin(),
                hA = w ? MA.left + MA.right : MA.top + MA.bottom;
              R += w ? jA.layout.width : jA.layout.height, R += hA + X;
            }
          } else if (N === "space-evenly") {
            let _A = YA + 1;
            R = Math.round(c * (x + 1) / _A);
            for (let a = 0; a < x; a++) {
              let JA = C[a],
                jA = JA.getMargin(),
                MA = w ? jA.left + jA.right : jA.top + jA.bottom;
              R += w ? JA.layout.width : JA.layout.height, R += MA + X;
            }
          }
          let e = y.style.alignSelf && y.style.alignSelf !== "auto" ? y.style.alignSelf : J,
            qA = d + F + r,
            HA = d;
          switch (e) {
            case "start":
              HA = d;
              break;
            case "center":
              HA = Math.round((P.crossSize - qA) / 2) + d;
              break;
            case "end":
              HA = P.crossSize - F - r;
              break;
            case "stretch":
              {
                if (HA = d, !(w ? y.style.height?.type === "fixed" : y.style.width?.type === "fixed")) __$.Sx.stretchChild(y, w, P.crossSize - d - r);
                break;
              }
          }
          if (w) y.layout.x = K.x + q.left + R + Q, y.layout.y = K.y + q.top + j + HA;else y.layout.x = K.x + q.left + j + HA, y.layout.y = K.y + q.top + R + Q;
          if (y.positionChildren(), N === "start" || N === "center" || N === "end") R += b + Q + u + X;
        }
        j += P.crossSize + $;
      }
    }
    calculateFlexLines(A, K, q, Y) {
      if (!((this.style.flexWrap ?? "nowrap") !== "nowrap" && K !== void 0) || A.length === 0) {
        let $ = 0,
          _ = 0;
        for (let G = 0; G < A.length; G++) {
          let Z = A[G],
            W = Z.getMargin(),
            D = q ? W.left + W.right : W.top + W.bottom,
            j = q ? W.top + W.bottom : W.left + W.right,
            M = (q ? Z.layout.width : Z.layout.height) + D,
            P = (q ? Z.layout.height : Z.layout.width) + j;
          $ += M + (G > 0 ? Y : 0), _ = Math.max(_, P);
        }
        return [{
          children: A,
          mainSize: $,
          crossSize: _
        }];
      }
      let H = [],
        J = [],
        O = 0,
        X = 0;
      for (let $ of A) {
        let _ = $.getMargin(),
          G = q ? _.left + _.right : _.top + _.bottom,
          Z = q ? _.top + _.bottom : _.left + _.right,
          W = (q ? $.layout.width : $.layout.height) + G,
          D = (q ? $.layout.height : $.layout.width) + Z,
          j = J.length > 0 ? Y : 0;
        if (J.length > 0 && O + j + W > K) H.push({
          children: J,
          mainSize: O,
          crossSize: X
        }), J = [$], O = W, X = D;else J.push($), O += j + W, X = Math.max(X, D);
      }
      if (J.length > 0) H.push({
        children: J,
        mainSize: O,
        crossSize: X
      });
      return H;
    }
  };
});

// Register to shared state
__$.dO4 = dO4;
