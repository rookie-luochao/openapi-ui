import { d as i, a9 as ka, aa as Ya, ab as jr, ac as zr, a4 as Tr, F as zo, t as me, aQ as hr, x as vn, M as To, _ as Re, N as wt, O as at, by as Te, Q as ut, bH as Qa, T as Be, U as ft, bI as Ja, z as q, bJ as Za, bz as Ao, aU as Ar, bK as Fo, aV as Bo, ap as Fr, bL as ei, V as ti, bM as ni, bN as Do, G as Ge, w as ot, s as ue, C as rt, ae as ri, W as se, aP as Le, H as Br, a3 as zt, bO as oi, bP as Er, a7 as Lo, D as je, bQ as Or, bR as ai, bS as Wo, bT as Vo, A as Xt, aq as Ho, P as le, ak as ii, J as qn, ai as cn, bU as si, ag as li, L as ci, af as Fn, ar as ui, aT as Go, al as di, y as Se, ad as Dr, a8 as fi, v as br, am as mi, an as gi, av as Lr, aW as et, X as kt, aX as Un, bV as Bn, bW as qo, aN as vi, B as pi, bX as Uo, bY as Wr, ao as Zr, bF as hi, bZ as bi, b_ as yi, b$ as wi, c0 as Ci, c1 as Ko, c2 as dt, c3 as Si, c4 as $i, aS as xi, bG as Ei, c5 as Xo, c6 as Oi, c7 as Ii, c8 as Ri, c9 as Ni, ca as Mi, cb as Pi, cc as _i, cd as ji, ce as zi, cf as Ti, b8 as Ai, aI as Fi, cg as ko, bv as Bi, bo as Yo, ch as Di, ci as Li, cj as Wi, a0 as eo, a2 as rn, k as Mt, b9 as Vi, l as Hi } from "./index-0DiK2-ze.js";
var Ir = /* @__PURE__ */ i.createContext(null);
function Gi(e) {
  var t = e.children, n = e.onBatchResize, r = i.useRef(0), o = i.useRef([]), a = i.useContext(Ir), s = i.useCallback(function(l, c, u) {
    r.current += 1;
    var d = r.current;
    o.current.push({
      size: l,
      element: c,
      data: u
    }), Promise.resolve().then(function() {
      d === r.current && (n == null || n(o.current), o.current = []);
    }), a == null || a(l, c, u);
  }, [n, a]);
  return /* @__PURE__ */ i.createElement(Ir.Provider, {
    value: s
  }, t);
}
var Qo = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, a) {
      return o[0] === n ? (r = a, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var s = a[o];
          n.call(r, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), Rr = typeof window < "u" && typeof document < "u" && window.document === document, Dn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), qi = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Dn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ui = 2;
function Ki(e, t) {
  var n = !1, r = !1, o = 0;
  function a() {
    n && (n = !1, e()), r && l();
  }
  function s() {
    qi(a);
  }
  function l() {
    var c = Date.now();
    if (n) {
      if (c - o < Ui)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, t);
    o = c;
  }
  return l;
}
var Xi = 20, ki = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Yi = typeof MutationObserver < "u", Qi = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ki(this.refresh.bind(this), Xi);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Rr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Yi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Rr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = ki.some(function(a) {
        return !!~r.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Jo = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Kt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Dn;
}, Zo = Kn(0, 0, 0, 0);
function Ln(e) {
  return parseFloat(e) || 0;
}
function to(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var a = e["border-" + o + "-width"];
    return r + Ln(a);
  }, 0);
}
function Ji(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var a = o[r], s = e["padding-" + a];
    n[a] = Ln(s);
  }
  return n;
}
function Zi(e) {
  var t = e.getBBox();
  return Kn(0, 0, t.width, t.height);
}
function es(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Zo;
  var r = Kt(e).getComputedStyle(e), o = Ji(r), a = o.left + o.right, s = o.top + o.bottom, l = Ln(r.width), c = Ln(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + a) !== t && (l -= to(r, "left", "right") + a), Math.round(c + s) !== n && (c -= to(r, "top", "bottom") + s)), !ns(e)) {
    var u = Math.round(l + a) - t, d = Math.round(c + s) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return Kn(o.left, o.top, l, c);
}
var ts = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Kt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Kt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ns(e) {
  return e === Kt(e).document.documentElement;
}
function rs(e) {
  return Rr ? ts(e) ? Zi(e) : es(e) : Zo;
}
function os(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(a.prototype);
  return Jo(s, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), s;
}
function Kn(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var as = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Kn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = rs(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), is = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = os(n);
      Jo(this, { target: t, contentRect: r });
    }
    return e;
  }()
), ss = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Qo(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Kt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new as(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Kt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new is(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ea = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Qo(), ta = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Qi.getInstance(), r = new ss(t, n, this);
      ea.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  ta.prototype[e] = function() {
    var t;
    return (t = ea.get(this))[e].apply(t, arguments);
  };
});
var ls = function() {
  return typeof Dn.ResizeObserver < "u" ? Dn.ResizeObserver : ta;
}(), yt = /* @__PURE__ */ new Map();
function cs(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = yt.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var na = new ls(cs);
function us(e, t) {
  yt.has(e) || (yt.set(e, /* @__PURE__ */ new Set()), na.observe(e)), yt.get(e).add(t);
}
function ds(e, t) {
  yt.has(e) && (yt.get(e).delete(t), yt.get(e).size || (na.unobserve(e), yt.delete(e)));
}
var fs = /* @__PURE__ */ function(e) {
  ka(n, e);
  var t = Ya(n);
  function n() {
    return jr(this, n), t.apply(this, arguments);
  }
  return zr(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(i.Component);
function ms(e, t) {
  var n = e.children, r = e.disabled, o = i.useRef(null), a = i.useRef(null), s = i.useContext(Ir), l = typeof n == "function", c = l ? n(o) : n, u = i.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ i.isValidElement(c) && Tr(c), f = d ? c.ref : null, h = zo(f, o), g = function() {
    var S;
    return hr(o.current) || // Support `nativeElement` format
    (o.current && vn(o.current) === "object" ? hr((S = o.current) === null || S === void 0 ? void 0 : S.nativeElement) : null) || hr(a.current);
  };
  i.useImperativeHandle(t, function() {
    return g();
  });
  var y = i.useRef(e);
  y.current = e;
  var $ = i.useCallback(function(C) {
    var S = y.current, p = S.onResize, m = S.data, v = C.getBoundingClientRect(), w = v.width, b = v.height, O = C.offsetWidth, x = C.offsetHeight, E = Math.floor(w), N = Math.floor(b);
    if (u.current.width !== E || u.current.height !== N || u.current.offsetWidth !== O || u.current.offsetHeight !== x) {
      var j = {
        width: E,
        height: N,
        offsetWidth: O,
        offsetHeight: x
      };
      u.current = j;
      var A = O === Math.round(w) ? w : O, T = x === Math.round(b) ? b : x, P = me(me({}, j), {}, {
        offsetWidth: A,
        offsetHeight: T
      });
      s == null || s(P, C, m), p && Promise.resolve().then(function() {
        p(P, C);
      });
    }
  }, []);
  return i.useEffect(function() {
    var C = g();
    return C && !r && us(C, $), function() {
      return ds(C, $);
    };
  }, [o.current, r]), /* @__PURE__ */ i.createElement(fs, {
    ref: a
  }, d ? /* @__PURE__ */ i.cloneElement(c, {
    ref: h
  }) : c);
}
var gs = /* @__PURE__ */ i.forwardRef(ms), vs = "rc-observer-key";
function ps(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : To(n);
  return r.map(function(o, a) {
    var s = (o == null ? void 0 : o.key) || "".concat(vs, "-").concat(a);
    return /* @__PURE__ */ i.createElement(gs, Re({}, e, {
      key: s,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var Yt = /* @__PURE__ */ i.forwardRef(ps);
Yt.Collection = Gi;
const Wn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function hs(e, t) {
  return Wn.reduce((n, r) => {
    const o = e[`${r}1`], a = e[`${r}3`], s = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: s,
      textColor: l
    }));
  }, {});
}
const no = (e) => typeof e == "object" && e != null && e.nodeType === 1, ro = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", yr = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const n = getComputedStyle(e, null);
    return ro(n.overflowY, t) || ro(n.overflowX, t) || ((r) => {
      const o = ((a) => {
        if (!a.ownerDocument || !a.ownerDocument.defaultView)
          return null;
        try {
          return a.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    })(e);
  }
  return !1;
}, jn = (e, t, n, r, o, a, s, l) => a < e && s > t || a > e && s < t ? 0 : a <= e && l <= n || s >= t && l >= n ? a - e - r : s > t && l < n || a < e && l > n ? s - t + o : 0, bs = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, oo = (e, t) => {
  var n, r, o, a;
  if (typeof document > "u")
    return [];
  const { scrollMode: s, block: l, inline: c, boundary: u, skipOverflowHiddenElements: d } = t, f = typeof u == "function" ? u : (H) => H !== u;
  if (!no(e))
    throw new TypeError("Invalid target");
  const h = document.scrollingElement || document.documentElement, g = [];
  let y = e;
  for (; no(y) && f(y); ) {
    if (y = bs(y), y === h) {
      g.push(y);
      break;
    }
    y != null && y === document.body && yr(y) && !yr(document.documentElement) || y != null && yr(y, d) && g.push(y);
  }
  const $ = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, C = (a = (o = window.visualViewport) == null ? void 0 : o.height) != null ? a : innerHeight, { scrollX: S, scrollY: p } = window, { height: m, width: v, top: w, right: b, bottom: O, left: x } = e.getBoundingClientRect(), { top: E, right: N, bottom: j, left: A } = ((H) => {
    const M = window.getComputedStyle(H);
    return { top: parseFloat(M.scrollMarginTop) || 0, right: parseFloat(M.scrollMarginRight) || 0, bottom: parseFloat(M.scrollMarginBottom) || 0, left: parseFloat(M.scrollMarginLeft) || 0 };
  })(e);
  let T = l === "start" || l === "nearest" ? w - E : l === "end" ? O + j : w + m / 2 - E + j, P = c === "center" ? x + v / 2 - A + N : c === "end" ? b + N : x - A;
  const V = [];
  for (let H = 0; H < g.length; H++) {
    const M = g[H], { height: _, width: B, top: I, right: R, bottom: z, left: ee } = M.getBoundingClientRect();
    if (s === "if-needed" && w >= 0 && x >= 0 && O <= C && b <= $ && w >= I && O <= z && x >= ee && b <= R)
      return V;
    const F = getComputedStyle(M), L = parseInt(F.borderLeftWidth, 10), G = parseInt(F.borderTopWidth, 10), Z = parseInt(F.borderRightWidth, 10), U = parseInt(F.borderBottomWidth, 10);
    let W = 0, ie = 0;
    const re = "offsetWidth" in M ? M.offsetWidth - M.clientWidth - L - Z : 0, fe = "offsetHeight" in M ? M.offsetHeight - M.clientHeight - G - U : 0, ge = "offsetWidth" in M ? M.offsetWidth === 0 ? 0 : B / M.offsetWidth : 0, X = "offsetHeight" in M ? M.offsetHeight === 0 ? 0 : _ / M.offsetHeight : 0;
    if (h === M)
      W = l === "start" ? T : l === "end" ? T - C : l === "nearest" ? jn(p, p + C, C, G, U, p + T, p + T + m, m) : T - C / 2, ie = c === "start" ? P : c === "center" ? P - $ / 2 : c === "end" ? P - $ : jn(S, S + $, $, L, Z, S + P, S + P + v, v), W = Math.max(0, W + p), ie = Math.max(0, ie + S);
    else {
      W = l === "start" ? T - I - G : l === "end" ? T - z + U + fe : l === "nearest" ? jn(I, z, _, G, U + fe, T, T + m, m) : T - (I + _ / 2) + fe / 2, ie = c === "start" ? P - ee - L : c === "center" ? P - (ee + B / 2) + re / 2 : c === "end" ? P - R + Z + re : jn(ee, R, B, L, Z + re, P, P + v, v);
      const { scrollLeft: Ce, scrollTop: $e } = M;
      W = X === 0 ? 0 : Math.max(0, Math.min($e + W / X, M.scrollHeight - _ / X + fe)), ie = ge === 0 ? 0 : Math.max(0, Math.min(Ce + ie / ge, M.scrollWidth - B / ge + re)), T += $e - W, P += Ce - ie;
    }
    V.push({ el: M, top: W, left: ie });
  }
  return V;
}, ys = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function ws(e, t) {
  if (!e.isConnected || !((o) => {
    let a = o;
    for (; a && a.parentNode; ) {
      if (a.parentNode === document)
        return !0;
      a = a.parentNode instanceof ShadowRoot ? a.parentNode.host : a.parentNode;
    }
    return !1;
  })(e))
    return;
  const n = ((o) => {
    const a = window.getComputedStyle(o);
    return { top: parseFloat(a.scrollMarginTop) || 0, right: parseFloat(a.scrollMarginRight) || 0, bottom: parseFloat(a.scrollMarginBottom) || 0, left: parseFloat(a.scrollMarginLeft) || 0 };
  })(e);
  if (((o) => typeof o == "object" && typeof o.behavior == "function")(t))
    return t.behavior(oo(e, t));
  const r = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: o, top: a, left: s } of oo(e, ys(t))) {
    const l = a - n.top + n.bottom, c = s - n.left + n.right;
    o.scroll({ top: l, left: c, behavior: r });
  }
}
const Cs = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadow: r,
    colorText: o,
    colorSuccess: a,
    colorError: s,
    colorWarning: l,
    colorInfo: c,
    fontSizeLG: u,
    motionEaseInOutCirc: d,
    motionDurationSlow: f,
    marginXS: h,
    paddingXS: g,
    borderRadiusLG: y,
    zIndexPopup: $,
    // Custom token
    contentPadding: C,
    contentBg: S
  } = e, p = `${t}-notice`, m = new Te("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: g,
      transform: "translateY(0)",
      opacity: 1
    }
  }), v = new Te("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: g,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), w = {
    padding: g,
    textAlign: "center",
    [`${t}-custom-content > ${n}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: h,
      // affected by ltr or rtl
      fontSize: u
    },
    [`${p}-content`]: {
      display: "inline-block",
      padding: C,
      background: S,
      borderRadius: y,
      boxShadow: r,
      pointerEvents: "all"
    },
    [`${t}-success > ${n}`]: {
      color: a
    },
    [`${t}-error > ${n}`]: {
      color: s
    },
    [`${t}-warning > ${n}`]: {
      color: l
    },
    [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
      color: c
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, ut(e)), {
        color: o,
        position: "fixed",
        top: h,
        width: "100%",
        pointerEvents: "none",
        zIndex: $,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: m,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: v,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${p}-wrapper`]: Object.assign({}, w)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, w), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Ss = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Qa + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), ra = wt("Message", (e) => {
  const t = at(e, {
    height: 150
  });
  return [Cs(t)];
}, Ss);
var $s = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const xs = {
  info: /* @__PURE__ */ i.createElement(Za, null),
  success: /* @__PURE__ */ i.createElement(Ao, null),
  error: /* @__PURE__ */ i.createElement(Ar, null),
  warning: /* @__PURE__ */ i.createElement(Fo, null),
  loading: /* @__PURE__ */ i.createElement(Bo, null)
}, oa = (e) => {
  let {
    prefixCls: t,
    type: n,
    icon: r,
    children: o
  } = e;
  return /* @__PURE__ */ i.createElement("div", {
    className: q(`${t}-custom-content`, `${t}-${n}`)
  }, r || xs[n], /* @__PURE__ */ i.createElement("span", null, o));
}, Es = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, s = $s(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: l
  } = i.useContext(Be), c = t || l("message"), u = ft(c), [d, f, h] = ra(c, u);
  return d(/* @__PURE__ */ i.createElement(Ja, Object.assign({}, s, {
    prefixCls: c,
    className: q(n, f, `${c}-notice-pure-panel`, h, u),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ i.createElement(oa, {
      prefixCls: c,
      type: r,
      icon: o
    }, a)
  })));
}, Os = Es;
function Is(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Vr(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, a) => n.then(o, a), r.promise = n, r;
}
var Rs = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ns = 8, Ms = 3, Ps = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = ft(n), [o, a, s] = ra(n, r);
  return o(/* @__PURE__ */ i.createElement(ni, {
    classNames: {
      list: q(a, s, r)
    }
  }, t));
}, _s = (e, t) => {
  let {
    prefixCls: n,
    key: r
  } = t;
  return /* @__PURE__ */ i.createElement(Ps, {
    prefixCls: n,
    key: r
  }, e);
}, js = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: s = Ms,
    rtl: l,
    transitionName: c,
    onAllRemoved: u
  } = e, {
    getPrefixCls: d,
    getPopupContainer: f,
    message: h,
    direction: g
  } = i.useContext(Be), y = r || d("message"), $ = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? Ns
  }), C = () => q({
    [`${y}-rtl`]: l ?? g === "rtl"
  }), S = () => Is(y, c), p = /* @__PURE__ */ i.createElement("span", {
    className: `${y}-close-x`
  }, /* @__PURE__ */ i.createElement(ti, {
    className: `${y}-close-icon`
  })), [m, v] = ei({
    prefixCls: y,
    style: $,
    className: C,
    motion: S,
    closable: !1,
    closeIcon: p,
    duration: s,
    getContainer: () => (o == null ? void 0 : o()) || (f == null ? void 0 : f()) || document.body,
    maxCount: a,
    onAllRemoved: u,
    renderNotifications: _s
  });
  return i.useImperativeHandle(t, () => Object.assign(Object.assign({}, m), {
    prefixCls: y,
    message: h
  })), v;
});
let ao = 0;
function aa(e) {
  const t = i.useRef(null);
  return Fr(), [i.useMemo(() => {
    const r = (c) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(c);
    }, o = (c) => {
      if (!t.current) {
        const b = () => {
        };
        return b.then = () => {
        }, b;
      }
      const {
        open: u,
        prefixCls: d,
        message: f
      } = t.current, h = `${d}-notice`, {
        content: g,
        icon: y,
        type: $,
        key: C,
        className: S,
        style: p,
        onClose: m
      } = c, v = Rs(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = C;
      return w == null && (ao += 1, w = `antd-message-${ao}`), Vr((b) => (u(Object.assign(Object.assign({}, v), {
        key: w,
        content: /* @__PURE__ */ i.createElement(oa, {
          prefixCls: d,
          type: $,
          icon: y
        }, g),
        placement: "top",
        className: q($ && `${h}-${$}`, S, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), p),
        onClose: () => {
          m == null || m(), b();
        }
      })), () => {
        r(w);
      }));
    }, s = {
      open: o,
      destroy: (c) => {
        var u;
        c !== void 0 ? r(c) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const u = (d, f, h) => {
        let g;
        d && typeof d == "object" && "content" in d ? g = d : g = {
          content: d
        };
        let y, $;
        typeof f == "function" ? $ = f : (y = f, $ = h);
        const C = Object.assign(Object.assign({
          onClose: $,
          duration: y
        }, g), {
          type: c
        });
        return o(C);
      };
      s[c] = u;
    }), s;
  }, []), /* @__PURE__ */ i.createElement(js, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function zs(e) {
  return aa(e);
}
const Ts = new Te("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), As = new Te("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Fs = new Te("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Bs = new Te("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Ds = new Te("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Ls = new Te("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Ws = new Te("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Vs = new Te("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Hs = {
  "move-up": {
    inKeyframes: Ws,
    outKeyframes: Vs
  },
  "move-down": {
    inKeyframes: Ts,
    outKeyframes: As
  },
  "move-left": {
    inKeyframes: Fs,
    outKeyframes: Bs
  },
  "move-right": {
    inKeyframes: Ds,
    outKeyframes: Ls
  }
}, nf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = Hs[t];
  return [Do(r, o, a, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Gs = new Te("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), qs = new Te("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Us = new Te("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Ks = new Te("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), Xs = new Te("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), ks = new Te("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Ys = new Te("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), Qs = new Te("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), Js = {
  "slide-up": {
    inKeyframes: Gs,
    outKeyframes: qs
  },
  "slide-down": {
    inKeyframes: Us,
    outKeyframes: Ks
  },
  "slide-left": {
    inKeyframes: Xs,
    outKeyframes: ks
  },
  "slide-right": {
    inKeyframes: Ys,
    outKeyframes: Qs
  }
}, rf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = Js[t];
  return [Do(r, o, a, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, Zs = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), ia = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var el = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Vt = void 0;
function tl(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, a = e.renderItem, s = e.responsive, l = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, d = e.className, f = e.style, h = e.children, g = e.display, y = e.order, $ = e.component, C = $ === void 0 ? "div" : $, S = Ge(e, el), p = s && !g;
  function m(x) {
    c(u, x);
  }
  i.useEffect(function() {
    return function() {
      m(null);
    };
  }, []);
  var v = a && o !== Vt ? a(o) : h, w;
  r || (w = {
    opacity: p ? 0 : 1,
    height: p ? 0 : Vt,
    overflowY: p ? "hidden" : Vt,
    order: s ? y : Vt,
    pointerEvents: p ? "none" : Vt,
    position: p ? "absolute" : Vt
  });
  var b = {};
  p && (b["aria-hidden"] = !0);
  var O = /* @__PURE__ */ i.createElement(C, Re({
    className: q(!r && n, d),
    style: me(me({}, w), f)
  }, b, S, {
    ref: t
  }), v);
  return s && (O = /* @__PURE__ */ i.createElement(Yt, {
    onResize: function(E) {
      var N = E.offsetWidth;
      m(N);
    },
    disabled: l
  }, O)), O;
}
var sn = /* @__PURE__ */ i.forwardRef(tl);
sn.displayName = "Item";
function nl(e) {
  if (typeof MessageChannel > "u")
    ot(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function rl() {
  var e = i.useRef(null), t = function(r) {
    e.current || (e.current = [], nl(function() {
      ri.unstable_batchedUpdates(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function on(e, t) {
  var n = i.useState(t), r = ue(n, 2), o = r[0], a = r[1], s = rt(function(l) {
    e(function() {
      a(l);
    });
  });
  return [o, s];
}
var Vn = /* @__PURE__ */ se.createContext(null), ol = ["component"], al = ["className"], il = ["className"], sl = function(t, n) {
  var r = i.useContext(Vn);
  if (!r) {
    var o = t.component, a = o === void 0 ? "div" : o, s = Ge(t, ol);
    return /* @__PURE__ */ i.createElement(a, Re({}, s, {
      ref: n
    }));
  }
  var l = r.className, c = Ge(r, al), u = t.className, d = Ge(t, il);
  return /* @__PURE__ */ i.createElement(Vn.Provider, {
    value: null
  }, /* @__PURE__ */ i.createElement(sn, Re({
    ref: n,
    className: q(l, u)
  }, c, d)));
}, sa = /* @__PURE__ */ i.forwardRef(sl);
sa.displayName = "RawItem";
var ll = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], la = "responsive", ca = "invalidate";
function cl(e) {
  return "+ ".concat(e.length, " ...");
}
function ul(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, a = o === void 0 ? [] : o, s = e.renderItem, l = e.renderRawItem, c = e.itemKey, u = e.itemWidth, d = u === void 0 ? 10 : u, f = e.ssr, h = e.style, g = e.className, y = e.maxCount, $ = e.renderRest, C = e.renderRawRest, S = e.suffix, p = e.component, m = p === void 0 ? "div" : p, v = e.itemComponent, w = e.onVisibleChange, b = Ge(e, ll), O = f === "full", x = rl(), E = on(x, null), N = ue(E, 2), j = N[0], A = N[1], T = j || 0, P = on(x, /* @__PURE__ */ new Map()), V = ue(P, 2), H = V[0], M = V[1], _ = on(x, 0), B = ue(_, 2), I = B[0], R = B[1], z = on(x, 0), ee = ue(z, 2), F = ee[0], L = ee[1], G = on(x, 0), Z = ue(G, 2), U = Z[0], W = Z[1], ie = i.useState(null), re = ue(ie, 2), fe = re[0], ge = re[1], X = i.useState(null), Ce = ue(X, 2), $e = Ce[0], he = Ce[1], we = i.useMemo(function() {
    return $e === null && O ? Number.MAX_SAFE_INTEGER : $e || 0;
  }, [$e, j]), Y = i.useState(!1), J = ue(Y, 2), ve = J[0], Ie = J[1], de = "".concat(r, "-item"), pe = Math.max(I, F), be = y === la, xe = a.length && be, tt = y === ca, Ne = xe || typeof y == "number" && a.length > y, oe = i.useMemo(function() {
    var Q = a;
    return xe ? j === null && O ? Q = a : Q = a.slice(0, Math.min(a.length, T / d)) : typeof y == "number" && (Q = a.slice(0, y)), Q;
  }, [a, d, j, y, xe]), ye = i.useMemo(function() {
    return xe ? a.slice(we + 1) : a.slice(oe.length);
  }, [a, oe, xe, we]), Ee = i.useCallback(function(Q, ce) {
    var Oe;
    return typeof c == "function" ? c(Q) : (Oe = c && (Q == null ? void 0 : Q[c])) !== null && Oe !== void 0 ? Oe : ce;
  }, [c]), mt = i.useCallback(s || function(Q) {
    return Q;
  }, [s]);
  function qe(Q, ce, Oe) {
    $e === Q && (ce === void 0 || ce === fe) || (he(Q), Oe || (Ie(Q < a.length - 1), w == null || w(Q)), ce !== void 0 && ge(ce));
  }
  function St(Q, ce) {
    A(ce.clientWidth);
  }
  function Qe(Q, ce) {
    M(function(Oe) {
      var De = new Map(Oe);
      return ce === null ? De.delete(Q) : De.set(Q, ce), De;
    });
  }
  function Ae(Q, ce) {
    L(ce), R(F);
  }
  function We(Q, ce) {
    W(ce);
  }
  function nt(Q) {
    return H.get(Ee(oe[Q], Q));
  }
  Le(function() {
    if (T && typeof pe == "number" && oe) {
      var Q = U, ce = oe.length, Oe = ce - 1;
      if (!ce) {
        qe(0, null);
        return;
      }
      for (var De = 0; De < ce; De += 1) {
        var Je = nt(De);
        if (O && (Je = Je || 0), Je === void 0) {
          qe(De - 1, void 0, !0);
          break;
        }
        if (Q += Je, // Only one means `totalWidth` is the final width
        Oe === 0 && Q <= T || // Last two width will be the final width
        De === Oe - 1 && Q + nt(Oe) <= T) {
          qe(Oe, null);
          break;
        } else if (Q + pe > T) {
          qe(De - 1, Q - Je - U + F);
          break;
        }
      }
      S && nt(0) + U > T && ge(null);
    }
  }, [T, H, F, U, Ee, oe]);
  var Ve = ve && !!ye.length, ze = {};
  fe !== null && xe && (ze = {
    position: "absolute",
    left: fe,
    top: 0
  });
  var Ue = {
    prefixCls: de,
    responsive: xe,
    component: v,
    invalidate: tt
  }, it = l ? function(Q, ce) {
    var Oe = Ee(Q, ce);
    return /* @__PURE__ */ i.createElement(Vn.Provider, {
      key: Oe,
      value: me(me({}, Ue), {}, {
        order: ce,
        item: Q,
        itemKey: Oe,
        registerSize: Qe,
        display: ce <= we
      })
    }, l(Q, ce));
  } : function(Q, ce) {
    var Oe = Ee(Q, ce);
    return /* @__PURE__ */ i.createElement(sn, Re({}, Ue, {
      order: ce,
      key: Oe,
      item: Q,
      renderItem: mt,
      itemKey: Oe,
      registerSize: Qe,
      display: ce <= we
    }));
  }, te, D = {
    order: Ve ? we : Number.MAX_SAFE_INTEGER,
    className: "".concat(de, "-rest"),
    registerSize: Ae,
    display: Ve
  };
  if (C)
    C && (te = /* @__PURE__ */ i.createElement(Vn.Provider, {
      value: me(me({}, Ue), D)
    }, C(ye)));
  else {
    var K = $ || cl;
    te = /* @__PURE__ */ i.createElement(sn, Re({}, Ue, D), typeof K == "function" ? K(ye) : K);
  }
  var ne = /* @__PURE__ */ i.createElement(m, Re({
    className: q(!tt && r, g),
    style: h,
    ref: t
  }, b), oe.map(it), Ne ? te : null, S && /* @__PURE__ */ i.createElement(sn, Re({}, Ue, {
    responsive: be,
    responsiveDisabled: !xe,
    order: we,
    className: "".concat(de, "-suffix"),
    registerSize: We,
    display: !0,
    style: ze
  }), S));
  return be && (ne = /* @__PURE__ */ i.createElement(Yt, {
    onResize: St,
    disabled: !xe
  }, ne)), ne;
}
var Xn = /* @__PURE__ */ i.forwardRef(ul);
Xn.displayName = "Overflow";
Xn.Item = sa;
Xn.RESPONSIVE = la;
Xn.INVALIDATE = ca;
function dl(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, a = r || {}, s = a.className, l = a.content, c = o.x, u = c === void 0 ? 0 : c, d = o.y, f = d === void 0 ? 0 : d, h = i.useRef();
  if (!n || !n.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var y = n.points[0], $ = n.points[1], C = y[0], S = y[1], p = $[0], m = $[1];
    C === p || !["t", "b"].includes(C) ? g.top = f : C === "t" ? g.top = 0 : g.bottom = 0, S === m || !["l", "r"].includes(S) ? g.left = u : S === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ i.createElement("div", {
    ref: h,
    className: q("".concat(t, "-arrow"), s),
    style: g
  }, l);
}
function fl(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ i.createElement(Br, Re({}, a, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(s) {
    var l = s.className;
    return /* @__PURE__ */ i.createElement("div", {
      style: {
        zIndex: r
      },
      className: q("".concat(t, "-mask"), l)
    });
  }) : null;
}
var ml = /* @__PURE__ */ i.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
}), gl = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, a = e.style, s = e.target, l = e.onVisibleChanged, c = e.open, u = e.keepDom, d = e.fresh, f = e.onClick, h = e.mask, g = e.arrow, y = e.arrowPos, $ = e.align, C = e.motion, S = e.maskMotion, p = e.forceRender, m = e.getPopupContainer, v = e.autoDestroy, w = e.portal, b = e.zIndex, O = e.onMouseEnter, x = e.onMouseLeave, E = e.onPointerEnter, N = e.ready, j = e.offsetX, A = e.offsetY, T = e.offsetR, P = e.offsetB, V = e.onAlign, H = e.onPrepare, M = e.stretch, _ = e.targetWidth, B = e.targetHeight, I = typeof n == "function" ? n() : n, R = c || u, z = (m == null ? void 0 : m.length) > 0, ee = i.useState(!m || !z), F = ue(ee, 2), L = F[0], G = F[1];
  if (Le(function() {
    !L && z && s && G(!0);
  }, [L, z, s]), !L)
    return null;
  var Z = "auto", U = {
    left: "-1000vw",
    top: "-1000vh",
    right: Z,
    bottom: Z
  };
  if (N || !c) {
    var W, ie = $.points, re = $.dynamicInset || ((W = $._experimental) === null || W === void 0 ? void 0 : W.dynamicInset), fe = re && ie[0][1] === "r", ge = re && ie[0][0] === "b";
    fe ? (U.right = T, U.left = Z) : (U.left = j, U.right = Z), ge ? (U.bottom = P, U.top = Z) : (U.top = A, U.bottom = Z);
  }
  var X = {};
  return M && (M.includes("height") && B ? X.height = B : M.includes("minHeight") && B && (X.minHeight = B), M.includes("width") && _ ? X.width = _ : M.includes("minWidth") && _ && (X.minWidth = _)), c || (X.pointerEvents = "none"), /* @__PURE__ */ i.createElement(w, {
    open: p || R,
    getContainer: m && function() {
      return m(s);
    },
    autoDestroy: v
  }, /* @__PURE__ */ i.createElement(fl, {
    prefixCls: o,
    open: c,
    zIndex: b,
    mask: h,
    motion: S
  }), /* @__PURE__ */ i.createElement(Yt, {
    onResize: V,
    disabled: !c
  }, function(Ce) {
    return /* @__PURE__ */ i.createElement(Br, Re({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(o, "-hidden")
    }, C, {
      onAppearPrepare: H,
      onEnterPrepare: H,
      visible: c,
      onVisibleChanged: function(he) {
        var we;
        C == null || (we = C.onVisibleChanged) === null || we === void 0 || we.call(C, he), l(he);
      }
    }), function($e, he) {
      var we = $e.className, Y = $e.style, J = q(o, we, r);
      return /* @__PURE__ */ i.createElement("div", {
        ref: zt(Ce, t, he),
        className: J,
        style: me(me(me(me({
          "--arrow-x": "".concat(y.x || 0, "px"),
          "--arrow-y": "".concat(y.y || 0, "px")
        }, U), X), Y), {}, {
          boxSizing: "border-box",
          zIndex: b
        }, a),
        onMouseEnter: O,
        onMouseLeave: x,
        onPointerEnter: E,
        onClick: f
      }, g && /* @__PURE__ */ i.createElement(dl, {
        prefixCls: o,
        arrow: g,
        arrowPos: y,
        align: $
      }), /* @__PURE__ */ i.createElement(ml, {
        cache: !c && !d
      }, I));
    });
  }));
}), vl = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = Tr(n), a = i.useCallback(function(l) {
    oi(t, r ? r(l) : l);
  }, [r]), s = zo(a, n.ref);
  return o ? /* @__PURE__ */ i.cloneElement(n, {
    ref: s
  }) : n;
}), io = /* @__PURE__ */ i.createContext(null);
function so(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function pl(e, t, n, r) {
  return i.useMemo(function() {
    var o = so(n ?? t), a = so(r ?? t), s = new Set(o), l = new Set(a);
    return e && (s.has("hover") && (s.delete("hover"), s.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [s, l];
  }, [e, t, n, r]);
}
function hl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function bl(e, t, n, r) {
  for (var o = n.points, a = Object.keys(e), s = 0; s < a.length; s += 1) {
    var l, c = a[s];
    if (hl((l = e[c]) === null || l === void 0 ? void 0 : l.points, o, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function lo(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function pn(e) {
  return e.ownerDocument.defaultView;
}
function Nr(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = pn(n).getComputedStyle(n), a = o.overflowX, s = o.overflowY, l = o.overflow;
    [a, s, l].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function un(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function an(e) {
  return un(parseFloat(e), 0);
}
function co(e, t) {
  var n = me({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = pn(r).getComputedStyle(r), a = o.overflow, s = o.overflowClipMargin, l = o.borderTopWidth, c = o.borderBottomWidth, u = o.borderLeftWidth, d = o.borderRightWidth, f = r.getBoundingClientRect(), h = r.offsetHeight, g = r.clientHeight, y = r.offsetWidth, $ = r.clientWidth, C = an(l), S = an(c), p = an(u), m = an(d), v = un(Math.round(f.width / y * 1e3) / 1e3), w = un(Math.round(f.height / h * 1e3) / 1e3), b = (y - $ - p - m) * v, O = (h - g - C - S) * w, x = C * w, E = S * w, N = p * v, j = m * v, A = 0, T = 0;
      if (a === "clip") {
        var P = an(s);
        A = P * v, T = P * w;
      }
      var V = f.x + N - A, H = f.y + x - T, M = V + f.width + 2 * A - N - j - b, _ = H + f.height + 2 * T - x - E - O;
      n.left = Math.max(n.left, V), n.top = Math.max(n.top, H), n.right = Math.min(n.right, M), n.bottom = Math.min(n.bottom, _);
    }
  }), n;
}
function uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function fo(e, t) {
  var n = t || [], r = ue(n, 2), o = r[0], a = r[1];
  return [uo(e.width, o), uo(e.height, a)];
}
function mo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Ht(e, t) {
  var n = t[0], r = t[1], o, a;
  return n === "t" ? a = e.y : n === "b" ? a = e.y + e.height : a = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function bt(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function yl(e, t, n, r, o, a, s) {
  var l = i.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), c = ue(l, 2), u = c[0], d = c[1], f = i.useRef(0), h = i.useMemo(function() {
    return t ? Nr(t) : [];
  }, [t]), g = i.useRef({}), y = function() {
    g.current = {};
  };
  e || y();
  var $ = rt(function() {
    if (t && n && e) {
      let Ke = function(ct, Nt) {
        var Lt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : J, Wt = I.x + ct, tn = I.y + Nt, nn = Wt + W, Mn = tn + U, fr = Math.max(Wt, Lt.left), mr = Math.max(tn, Lt.top), gr = Math.min(nn, Lt.right), vr = Math.min(Mn, Lt.bottom);
        return Math.max(0, (gr - fr) * (vr - mr));
      }, Nn = function() {
        gt = I.y + K, vt = gt + U, pt = I.x + D, At = pt + W;
      };
      var p, m, v = t, w = v.ownerDocument, b = pn(v), O = b.getComputedStyle(v), x = O.width, E = O.height, N = O.position, j = v.style.left, A = v.style.top, T = v.style.right, P = v.style.bottom, V = v.style.overflow, H = me(me({}, o[r]), a), M = w.createElement("div");
      (p = v.parentElement) === null || p === void 0 || p.appendChild(M), M.style.left = "".concat(v.offsetLeft, "px"), M.style.top = "".concat(v.offsetTop, "px"), M.style.position = N, M.style.height = "".concat(v.offsetHeight, "px"), M.style.width = "".concat(v.offsetWidth, "px"), v.style.left = "0", v.style.top = "0", v.style.right = "auto", v.style.bottom = "auto", v.style.overflow = "hidden";
      var _;
      if (Array.isArray(n))
        _ = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var B = n.getBoundingClientRect();
        _ = {
          x: B.x,
          y: B.y,
          width: B.width,
          height: B.height
        };
      }
      var I = v.getBoundingClientRect(), R = w.documentElement, z = R.clientWidth, ee = R.clientHeight, F = R.scrollWidth, L = R.scrollHeight, G = R.scrollTop, Z = R.scrollLeft, U = I.height, W = I.width, ie = _.height, re = _.width, fe = {
        left: 0,
        top: 0,
        right: z,
        bottom: ee
      }, ge = {
        left: -Z,
        top: -G,
        right: F - Z,
        bottom: L - G
      }, X = H.htmlRegion, Ce = "visible", $e = "visibleFirst";
      X !== "scroll" && X !== $e && (X = Ce);
      var he = X === $e, we = co(ge, h), Y = co(fe, h), J = X === Ce ? Y : we, ve = he ? Y : J;
      v.style.left = "auto", v.style.top = "auto", v.style.right = "0", v.style.bottom = "0";
      var Ie = v.getBoundingClientRect();
      v.style.left = j, v.style.top = A, v.style.right = T, v.style.bottom = P, v.style.overflow = V, (m = v.parentElement) === null || m === void 0 || m.removeChild(M);
      var de = un(Math.round(W / parseFloat(x) * 1e3) / 1e3), pe = un(Math.round(U / parseFloat(E) * 1e3) / 1e3);
      if (de === 0 || pe === 0 || Er(n) && !Lo(n))
        return;
      var be = H.offset, xe = H.targetOffset, tt = fo(I, be), Ne = ue(tt, 2), oe = Ne[0], ye = Ne[1], Ee = fo(_, xe), mt = ue(Ee, 2), qe = mt[0], St = mt[1];
      _.x -= qe, _.y -= St;
      var Qe = H.points || [], Ae = ue(Qe, 2), We = Ae[0], nt = Ae[1], Ve = mo(nt), ze = mo(We), Ue = Ht(_, Ve), it = Ht(I, ze), te = me({}, H), D = Ue.x - it.x + oe, K = Ue.y - it.y + ye, ne = Ke(D, K), Q = Ke(D, K, Y), ce = Ht(_, ["t", "l"]), Oe = Ht(I, ["t", "l"]), De = Ht(_, ["b", "r"]), Je = Ht(I, ["b", "r"]), He = H.overflow || {}, er = He.adjustX, hn = He.adjustY, Tt = He.shiftX, Jt = He.shiftY, bn = function(Nt) {
        return typeof Nt == "boolean" ? Nt : Nt >= 0;
      }, gt, vt, pt, At;
      Nn();
      var Zt = bn(hn), en = ze[0] === Ve[0];
      if (Zt && ze[0] === "t" && (vt > ve.bottom || g.current.bt)) {
        var $t = K;
        en ? $t -= U - ie : $t = ce.y - Je.y - ye;
        var xt = Ke(D, $t), tr = Ke(D, $t, Y);
        // Of course use larger one
        xt > ne || xt === ne && (!he || // Choose recommend one
        tr >= Q) ? (g.current.bt = !0, K = $t, ye = -ye, te.points = [bt(ze, 0), bt(Ve, 0)]) : g.current.bt = !1;
      }
      if (Zt && ze[0] === "b" && (gt < ve.top || g.current.tb)) {
        var Fe = K;
        en ? Fe += U - ie : Fe = De.y - Oe.y - ye;
        var yn = Ke(D, Fe), nr = Ke(D, Fe, Y);
        // Of course use larger one
        yn > ne || yn === ne && (!he || // Choose recommend one
        nr >= Q) ? (g.current.tb = !0, K = Fe, ye = -ye, te.points = [bt(ze, 0), bt(Ve, 0)]) : g.current.tb = !1;
      }
      var wn = bn(er), Cn = ze[1] === Ve[1];
      if (wn && ze[1] === "l" && (At > ve.right || g.current.rl)) {
        var Et = D;
        Cn ? Et -= W - re : Et = ce.x - Je.x - oe;
        var Sn = Ke(Et, K), rr = Ke(Et, K, Y);
        // Of course use larger one
        Sn > ne || Sn === ne && (!he || // Choose recommend one
        rr >= Q) ? (g.current.rl = !0, D = Et, oe = -oe, te.points = [bt(ze, 1), bt(Ve, 1)]) : g.current.rl = !1;
      }
      if (wn && ze[1] === "r" && (pt < ve.left || g.current.lr)) {
        var Ot = D;
        Cn ? Ot += W - re : Ot = De.x - Oe.x - oe;
        var $n = Ke(Ot, K), Ft = Ke(Ot, K, Y);
        // Of course use larger one
        $n > ne || $n === ne && (!he || // Choose recommend one
        Ft >= Q) ? (g.current.lr = !0, D = Ot, oe = -oe, te.points = [bt(ze, 1), bt(Ve, 1)]) : g.current.lr = !1;
      }
      Nn();
      var st = Tt === !0 ? 0 : Tt;
      typeof st == "number" && (pt < Y.left && (D -= pt - Y.left - oe, _.x + re < Y.left + st && (D += _.x - Y.left + re - st)), At > Y.right && (D -= At - Y.right - oe, _.x > Y.right - st && (D += _.x - Y.right + st)));
      var It = Jt === !0 ? 0 : Jt;
      typeof It == "number" && (gt < Y.top && (K -= gt - Y.top - ye, _.y + ie < Y.top + It && (K += _.y - Y.top + ie - It)), vt > Y.bottom && (K -= vt - Y.bottom - ye, _.y > Y.bottom - It && (K += _.y - Y.bottom + It)));
      var Bt = I.x + D, Dt = Bt + W, lt = I.y + K, xn = lt + U, Rt = _.x, ht = Rt + re, En = _.y, or = En + ie, ar = Math.max(Bt, Rt), On = Math.min(Dt, ht), ir = (ar + On) / 2, sr = ir - Bt, lr = Math.max(lt, En), In = Math.min(xn, or), cr = (lr + In) / 2, ur = cr - lt;
      s == null || s(t, te);
      var Rn = Ie.right - I.x - (D + I.width), dr = Ie.bottom - I.y - (K + I.height);
      d({
        ready: !0,
        offsetX: D / de,
        offsetY: K / pe,
        offsetR: Rn / de,
        offsetB: dr / pe,
        arrowX: sr / de,
        arrowY: ur / pe,
        scaleX: de,
        scaleY: pe,
        align: te
      });
    }
  }), C = function() {
    f.current += 1;
    var m = f.current;
    Promise.resolve().then(function() {
      f.current === m && $();
    });
  }, S = function() {
    d(function(m) {
      return me(me({}, m), {}, {
        ready: !1
      });
    });
  };
  return Le(S, [r]), Le(function() {
    e || S();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, C];
}
function wl(e, t, n, r, o) {
  Le(function() {
    if (e && t && n) {
      let f = function() {
        r(), o();
      };
      var a = t, s = n, l = Nr(a), c = Nr(s), u = pn(s), d = new Set([u].concat(je(l), je(c)));
      return d.forEach(function(h) {
        h.addEventListener("scroll", f, {
          passive: !0
        });
      }), u.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(h) {
          h.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function Cl(e, t, n, r, o, a, s, l) {
  var c = i.useRef(e);
  c.current = e, i.useEffect(function() {
    if (t && r && (!o || a)) {
      var u = function(g) {
        var y = g.target;
        c.current && !s(y) && l(!1);
      }, d = pn(r);
      d.addEventListener("mousedown", u, !0), d.addEventListener("contextmenu", u, !0);
      var f = Or(n);
      return f && (f.addEventListener("mousedown", u, !0), f.addEventListener("contextmenu", u, !0)), function() {
        d.removeEventListener("mousedown", u, !0), d.removeEventListener("contextmenu", u, !0), f && (f.removeEventListener("mousedown", u, !0), f.removeEventListener("contextmenu", u, !0));
      };
    }
  }, [t, n, r, o, a]);
}
var Sl = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function $l() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wo, t = /* @__PURE__ */ i.forwardRef(function(n, r) {
    var o = n.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, s = n.children, l = n.action, c = l === void 0 ? "hover" : l, u = n.showAction, d = n.hideAction, f = n.popupVisible, h = n.defaultPopupVisible, g = n.onPopupVisibleChange, y = n.afterPopupVisibleChange, $ = n.mouseEnterDelay, C = n.mouseLeaveDelay, S = C === void 0 ? 0.1 : C, p = n.focusDelay, m = n.blurDelay, v = n.mask, w = n.maskClosable, b = w === void 0 ? !0 : w, O = n.getPopupContainer, x = n.forceRender, E = n.autoDestroy, N = n.destroyPopupOnHide, j = n.popup, A = n.popupClassName, T = n.popupStyle, P = n.popupPlacement, V = n.builtinPlacements, H = V === void 0 ? {} : V, M = n.popupAlign, _ = n.zIndex, B = n.stretch, I = n.getPopupClassNameFromAlign, R = n.fresh, z = n.alignPoint, ee = n.onPopupClick, F = n.onPopupAlign, L = n.arrow, G = n.popupMotion, Z = n.maskMotion, U = n.popupTransitionName, W = n.popupAnimation, ie = n.maskTransitionName, re = n.maskAnimation, fe = n.className, ge = n.getTriggerDOMNode, X = Ge(n, Sl), Ce = E || N || !1, $e = i.useState(!1), he = ue($e, 2), we = he[0], Y = he[1];
    Le(function() {
      Y(ia());
    }, []);
    var J = i.useRef({}), ve = i.useContext(io), Ie = i.useMemo(function() {
      return {
        registerSubPopup: function(ae, Me) {
          J.current[ae] = Me, ve == null || ve.registerSubPopup(ae, Me);
        }
      };
    }, [ve]), de = ai(), pe = i.useState(null), be = ue(pe, 2), xe = be[0], tt = be[1], Ne = rt(function(k) {
      Er(k) && xe !== k && tt(k), ve == null || ve.registerSubPopup(de, k);
    }), oe = i.useState(null), ye = ue(oe, 2), Ee = ye[0], mt = ye[1], qe = i.useRef(null), St = rt(function(k) {
      Er(k) && Ee !== k && (mt(k), qe.current = k);
    }), Qe = i.Children.only(s), Ae = (Qe == null ? void 0 : Qe.props) || {}, We = {}, nt = rt(function(k) {
      var ae, Me, _e = Ee;
      return (_e == null ? void 0 : _e.contains(k)) || ((ae = Or(_e)) === null || ae === void 0 ? void 0 : ae.host) === k || k === _e || (xe == null ? void 0 : xe.contains(k)) || ((Me = Or(xe)) === null || Me === void 0 ? void 0 : Me.host) === k || k === xe || Object.values(J.current).some(function(Pe) {
        return (Pe == null ? void 0 : Pe.contains(k)) || k === Pe;
      });
    }), Ve = lo(a, G, W, U), ze = lo(a, Z, re, ie), Ue = i.useState(h || !1), it = ue(Ue, 2), te = it[0], D = it[1], K = f ?? te, ne = rt(function(k) {
      f === void 0 && D(k);
    });
    Le(function() {
      D(f || !1);
    }, [f]);
    var Q = i.useRef(K);
    Q.current = K;
    var ce = i.useRef([]);
    ce.current = [];
    var Oe = rt(function(k) {
      var ae;
      ne(k), ((ae = ce.current[ce.current.length - 1]) !== null && ae !== void 0 ? ae : K) !== k && (ce.current.push(k), g == null || g(k));
    }), De = i.useRef(), Je = function() {
      clearTimeout(De.current);
    }, He = function(ae) {
      var Me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Je(), Me === 0 ? Oe(ae) : De.current = setTimeout(function() {
        Oe(ae);
      }, Me * 1e3);
    };
    i.useEffect(function() {
      return Je;
    }, []);
    var er = i.useState(!1), hn = ue(er, 2), Tt = hn[0], Jt = hn[1];
    Le(function(k) {
      (!k || K) && Jt(!0);
    }, [K]);
    var bn = i.useState(null), gt = ue(bn, 2), vt = gt[0], pt = gt[1], At = i.useState([0, 0]), Zt = ue(At, 2), en = Zt[0], $t = Zt[1], xt = function(ae) {
      $t([ae.clientX, ae.clientY]);
    }, tr = yl(K, xe, z ? en : Ee, P, H, M, F), Fe = ue(tr, 11), yn = Fe[0], nr = Fe[1], wn = Fe[2], Cn = Fe[3], Et = Fe[4], Sn = Fe[5], rr = Fe[6], Ot = Fe[7], $n = Fe[8], Ft = Fe[9], st = Fe[10], It = pl(we, c, u, d), Bt = ue(It, 2), Dt = Bt[0], lt = Bt[1], xn = Dt.has("click"), Rt = lt.has("click") || lt.has("contextMenu"), ht = rt(function() {
      Tt || st();
    }), En = function() {
      Q.current && z && Rt && He(!1);
    };
    wl(K, Ee, xe, ht, En), Le(function() {
      ht();
    }, [en, P]), Le(function() {
      K && !(H != null && H[P]) && ht();
    }, [JSON.stringify(M)]);
    var or = i.useMemo(function() {
      var k = bl(H, a, Ft, z);
      return q(k, I == null ? void 0 : I(Ft));
    }, [Ft, I, H, a, z]);
    i.useImperativeHandle(r, function() {
      return {
        nativeElement: qe.current,
        forceAlign: ht
      };
    });
    var ar = i.useState(0), On = ue(ar, 2), ir = On[0], sr = On[1], lr = i.useState(0), In = ue(lr, 2), cr = In[0], ur = In[1], Rn = function() {
      if (B && Ee) {
        var ae = Ee.getBoundingClientRect();
        sr(ae.width), ur(ae.height);
      }
    }, dr = function() {
      Rn(), ht();
    }, Ke = function(ae) {
      Jt(!1), st(), y == null || y(ae);
    }, Nn = function() {
      return new Promise(function(ae) {
        Rn(), pt(function() {
          return ae;
        });
      });
    };
    Le(function() {
      vt && (st(), vt(), pt(null));
    }, [vt]);
    function ct(k, ae, Me, _e) {
      We[k] = function(Pe) {
        var Pn;
        _e == null || _e(Pe), He(ae, Me);
        for (var pr = arguments.length, Jr = new Array(pr > 1 ? pr - 1 : 0), _n = 1; _n < pr; _n++)
          Jr[_n - 1] = arguments[_n];
        (Pn = Ae[k]) === null || Pn === void 0 || Pn.call.apply(Pn, [Ae, Pe].concat(Jr));
      };
    }
    (xn || Rt) && (We.onClick = function(k) {
      var ae;
      Q.current && Rt ? He(!1) : !Q.current && xn && (xt(k), He(!0));
      for (var Me = arguments.length, _e = new Array(Me > 1 ? Me - 1 : 0), Pe = 1; Pe < Me; Pe++)
        _e[Pe - 1] = arguments[Pe];
      (ae = Ae.onClick) === null || ae === void 0 || ae.call.apply(ae, [Ae, k].concat(_e));
    }), Cl(K, Rt, Ee, xe, v, b, nt, He);
    var Nt = Dt.has("hover"), Lt = lt.has("hover"), Wt, tn;
    Nt && (ct("onMouseEnter", !0, $, function(k) {
      xt(k);
    }), ct("onPointerEnter", !0, $, function(k) {
      xt(k);
    }), Wt = function(ae) {
      (K || Tt) && xe !== null && xe !== void 0 && xe.contains(ae.target) && He(!0, $);
    }, z && (We.onMouseMove = function(k) {
      var ae;
      (ae = Ae.onMouseMove) === null || ae === void 0 || ae.call(Ae, k);
    })), Lt && (ct("onMouseLeave", !1, S), ct("onPointerLeave", !1, S), tn = function() {
      He(!1, S);
    }), Dt.has("focus") && ct("onFocus", !0, p), lt.has("focus") && ct("onBlur", !1, m), Dt.has("contextMenu") && (We.onContextMenu = function(k) {
      var ae;
      Q.current && lt.has("contextMenu") ? He(!1) : (xt(k), He(!0)), k.preventDefault();
      for (var Me = arguments.length, _e = new Array(Me > 1 ? Me - 1 : 0), Pe = 1; Pe < Me; Pe++)
        _e[Pe - 1] = arguments[Pe];
      (ae = Ae.onContextMenu) === null || ae === void 0 || ae.call.apply(ae, [Ae, k].concat(_e));
    }), fe && (We.className = q(Ae.className, fe));
    var nn = me(me({}, Ae), We), Mn = {}, fr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    fr.forEach(function(k) {
      X[k] && (Mn[k] = function() {
        for (var ae, Me = arguments.length, _e = new Array(Me), Pe = 0; Pe < Me; Pe++)
          _e[Pe] = arguments[Pe];
        (ae = nn[k]) === null || ae === void 0 || ae.call.apply(ae, [nn].concat(_e)), X[k].apply(X, _e);
      });
    });
    var mr = /* @__PURE__ */ i.cloneElement(Qe, me(me({}, nn), Mn)), gr = {
      x: Sn,
      y: rr
    }, vr = L ? me({}, L !== !0 ? L : {}) : null;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Yt, {
      disabled: !K,
      ref: St,
      onResize: dr
    }, /* @__PURE__ */ i.createElement(vl, {
      getTriggerDOMNode: ge
    }, mr)), /* @__PURE__ */ i.createElement(io.Provider, {
      value: Ie
    }, /* @__PURE__ */ i.createElement(gl, {
      portal: e,
      ref: Ne,
      prefixCls: a,
      popup: j,
      className: q(A, or),
      style: T,
      target: Ee,
      onMouseEnter: Wt,
      onMouseLeave: tn,
      onPointerEnter: Wt,
      zIndex: _,
      open: K,
      keepDom: Tt,
      fresh: R,
      onClick: ee,
      mask: v,
      motion: Ve,
      maskMotion: ze,
      onVisibleChanged: Ke,
      onPrepare: Nn,
      forceRender: x,
      autoDestroy: Ce,
      getPopupContainer: O,
      align: Ft,
      arrow: vr,
      arrowPos: gr,
      ready: yn,
      offsetX: nr,
      offsetY: wn,
      offsetR: Cn,
      offsetB: Et,
      onAlign: ht,
      stretch: B,
      targetWidth: ir / Ot,
      targetHeight: cr / $n
    })));
  });
  return t;
}
const xl = $l(Wo);
function dn(e, t, n) {
  return q({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const kn = (e, t) => t || e, El = ["outlined", "borderless", "filled"], Hr = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  const n = i.useContext(Vo);
  let r;
  typeof e < "u" ? r = e : t === !1 ? r = "borderless" : r = n ?? "outlined";
  const o = El.includes(r);
  return [r, o];
};
var Ol = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const Il = Ol;
var Rl = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: Il
  }));
}, Nl = /* @__PURE__ */ i.forwardRef(Rl);
const Ml = Nl;
var Pl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const _l = Pl;
var jl = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: _l
  }));
}, zl = /* @__PURE__ */ i.forwardRef(jl);
const Tl = zl, fn = ["xxl", "xl", "lg", "md", "sm", "xs"], Al = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), Fl = (e) => {
  const t = e, n = [].concat(fn).reverse();
  return n.forEach((r, o) => {
    const a = r.toUpperCase(), s = `screen${a}Min`, l = `screen${a}`;
    if (!(t[s] <= t[l]))
      throw new Error(`${s}<=${l} fails : !(${t[s]}<=${t[l]})`);
    if (o < n.length - 1) {
      const c = `screen${a}Max`;
      if (!(t[l] <= t[c]))
        throw new Error(`${l}<=${c} fails : !(${t[l]}<=${t[c]})`);
      const d = `screen${n[o + 1].toUpperCase()}Min`;
      if (!(t[c] <= t[d]))
        throw new Error(`${c}<=${d} fails : !(${t[c]}<=${t[d]})`);
    }
  }), e;
};
function Bl() {
  const [, e] = Ho(), t = Al(Fl(e));
  return se.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    let r = -1, o = {};
    return {
      matchHandlers: {},
      dispatch(a) {
        return o = a, n.forEach((s) => s(o)), n.size >= 1;
      },
      subscribe(a) {
        return n.size || this.register(), r += 1, n.set(r, a), a(o), r;
      },
      unsubscribe(a) {
        n.delete(a), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((a) => {
          const s = t[a], l = this.matchHandlers[s];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
        }), n.clear();
      },
      register() {
        Object.keys(t).forEach((a) => {
          const s = t[a], l = (u) => {
            let {
              matches: d
            } = u;
            this.dispatch(Object.assign(Object.assign({}, o), {
              [a]: d
            }));
          }, c = window.matchMedia(s);
          c.addListener(l), this.matchHandlers[s] = {
            mql: c,
            listener: l
          }, l(c);
        });
      },
      responsiveMap: t
    };
  }, [e]);
}
function ua(e) {
  var t = e.children, n = e.prefixCls, r = e.id, o = e.overlayInnerStyle, a = e.className, s = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    className: q("".concat(n, "-content"), a),
    style: s
  }, /* @__PURE__ */ i.createElement("div", {
    className: "".concat(n, "-inner"),
    id: r,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var Gt = {
  shiftX: 64,
  adjustY: 1
}, qt = {
  adjustX: 1,
  shiftY: !0
}, Xe = [0, 0], Dl = {
  left: {
    points: ["cr", "cl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xe
  },
  right: {
    points: ["cl", "cr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xe
  },
  top: {
    points: ["bc", "tc"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Xe
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Xe
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Xe
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xe
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Gt,
    offset: [0, -4],
    targetOffset: Xe
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xe
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Xe
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qt,
    offset: [4, 0],
    targetOffset: Xe
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Gt,
    offset: [0, 4],
    targetOffset: Xe
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qt,
    offset: [-4, 0],
    targetOffset: Xe
  }
}, Ll = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], Wl = function(t, n) {
  var r = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, s = t.mouseEnterDelay, l = s === void 0 ? 0 : s, c = t.mouseLeaveDelay, u = c === void 0 ? 0.1 : c, d = t.overlayStyle, f = t.prefixCls, h = f === void 0 ? "rc-tooltip" : f, g = t.children, y = t.onVisibleChange, $ = t.afterVisibleChange, C = t.transitionName, S = t.animation, p = t.motion, m = t.placement, v = m === void 0 ? "right" : m, w = t.align, b = w === void 0 ? {} : w, O = t.destroyTooltipOnHide, x = O === void 0 ? !1 : O, E = t.defaultVisible, N = t.getTooltipContainer, j = t.overlayInnerStyle;
  t.arrowContent;
  var A = t.overlay, T = t.id, P = t.showArrow, V = P === void 0 ? !0 : P, H = Ge(t, Ll), M = i.useRef(null);
  i.useImperativeHandle(n, function() {
    return M.current;
  });
  var _ = me({}, H);
  "visible" in t && (_.popupVisible = t.visible);
  var B = function() {
    return /* @__PURE__ */ i.createElement(ua, {
      key: "content",
      prefixCls: h,
      id: T,
      overlayInnerStyle: j
    }, A);
  };
  return /* @__PURE__ */ i.createElement(xl, Re({
    popupClassName: r,
    prefixCls: h,
    popup: B,
    action: a,
    builtinPlacements: Dl,
    popupPlacement: v,
    ref: M,
    popupAlign: b,
    getPopupContainer: N,
    onPopupVisibleChange: y,
    afterPopupVisibleChange: $,
    popupTransitionName: C,
    popupAnimation: S,
    popupMotion: p,
    defaultPopupVisible: E,
    autoDestroy: x,
    mouseLeaveDelay: u,
    popupStyle: d,
    mouseEnterDelay: l,
    arrow: V
  }, _), g);
};
const Vl = /* @__PURE__ */ i.forwardRef(Wl);
function Hl(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, o = t / 2, a = 0, s = o, l = r * 1 / Math.sqrt(2), c = o - r * (1 - 1 / Math.sqrt(2)), u = o - n * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * o - u, h = d, g = 2 * o - l, y = c, $ = 2 * o - a, C = s, S = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2), p = r * (Math.sqrt(2) - 1), m = `polygon(${p}px 100%, 50% ${p}px, ${2 * o - p}px 100%, ${p}px 100%)`, v = `path('M ${a} ${s} A ${r} ${r} 0 0 0 ${l} ${c} L ${u} ${d} A ${n} ${n} 0 0 1 ${f} ${h} L ${g} ${y} A ${r} ${r} 0 0 0 ${$} ${C} Z')`;
  return {
    arrowShadowWidth: S,
    arrowPath: v,
    arrowPolygon: m
  };
}
const Gl = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: s,
    borderRadiusXS: l,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: c(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: s,
      height: s,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${le(l)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, da = 8;
function fa(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? da : r
  };
}
function zn(e, t) {
  return e ? t : {};
}
function ql(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: s
  } = e, {
    arrowDistance: l = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = n || {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Gl(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, zn(!!c.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: l,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: s
        }
      },
      [`&-placement-topRight > ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: s
        }
      }
    })), zn(!!c.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: l,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: s
        }
      },
      [`&-placement-bottomRight > ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: s
        }
      }
    })), zn(!!c.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: a
      }
    })), zn(!!c.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function Ul(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = r && typeof r == "object" ? r : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const s = Object.assign(Object.assign({}, a), o);
  return s.shiftX || (s.adjustX = !0), s.shiftY || (s.adjustY = !0), s;
}
const go = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, Kl = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, Xl = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function kl(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: o,
    borderRadius: a,
    visibleFirst: s
  } = e, l = t / 2, c = {};
  return Object.keys(go).forEach((u) => {
    const d = r && Kl[u] || go[u], f = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[u] = f, Xl.has(u) && (f.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -l - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = l + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -l - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = l + o;
        break;
    }
    const h = fa({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (r)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -h.arrowOffsetHorizontal - l;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = h.arrowOffsetHorizontal + l;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -h.arrowOffsetHorizontal - l;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = h.arrowOffsetHorizontal + l;
          break;
      }
    f.overflow = Ul(u, h, t, n), s && (f.htmlRegion = "visibleFirst");
  }), c;
}
const Yl = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
    tooltipBg: o,
    tooltipBorderRadius: a,
    zIndexPopup: s,
    controlHeight: l,
    boxShadowSecondary: c,
    paddingSM: u,
    paddingXS: d
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, ut(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": o,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${le(e.calc(u).div(2).equal())} ${le(d)}`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: o,
          borderRadius: a,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(a, da)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), hs(e, (f, h) => {
        let {
          darkColor: g
        } = h;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: g
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": g
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    ql(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, Ql = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, fa({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Hl(at(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), ma = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return wt("Tooltip", (r) => {
    const {
      borderRadius: o,
      colorTextLightSolid: a,
      colorBgSpotlight: s
    } = r, l = at(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: a,
      tooltipBorderRadius: o,
      tooltipBg: s
    });
    return [Yl(l), ii(r, "zoom-big-fast")];
  }, Ql, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, Jl = Wn.map((e) => `${e}-inverse`);
function Zl(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(je(Jl), je(Wn)).includes(e) : Wn.includes(e);
}
function ga(e, t) {
  const n = Zl(t), r = q({
    [`${e}-${t}`]: t && n
  }), o = {}, a = {};
  return t && !n && (o.background = t, a["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: a
  };
}
const ec = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: o,
    color: a,
    overlayInnerStyle: s
  } = e, {
    getPrefixCls: l
  } = i.useContext(Be), c = l("tooltip", t), [u, d, f] = ma(c), h = ga(c, a), g = h.arrowStyle, y = Object.assign(Object.assign({}, s), h.overlayStyle), $ = q(d, f, c, `${c}-pure`, `${c}-placement-${r}`, n, h.className);
  return u(/* @__PURE__ */ i.createElement("div", {
    className: $,
    style: g
  }, /* @__PURE__ */ i.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ i.createElement(ua, Object.assign({}, e, {
    className: d,
    prefixCls: c,
    overlayInnerStyle: y
  }), o)));
}, tc = ec;
var nc = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const va = /* @__PURE__ */ i.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: s,
    overlayClassName: l,
    color: c,
    overlayInnerStyle: u,
    children: d,
    afterOpenChange: f,
    afterVisibleChange: h,
    destroyTooltipOnHide: g,
    arrow: y = !0,
    title: $,
    overlay: C,
    builtinPlacements: S,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: m = !0
  } = e, v = !!y, [, w] = Ho(), {
    getPopupContainer: b,
    getPrefixCls: O,
    direction: x
  } = i.useContext(Be), E = Fr(), N = i.useRef(null), j = () => {
    var de;
    (de = N.current) === null || de === void 0 || de.forceAlign();
  };
  i.useImperativeHandle(t, () => ({
    forceAlign: j,
    forcePopupAlign: () => {
      E.deprecated(!1, "forcePopupAlign", "forceAlign"), j();
    }
  }));
  const [A, T] = qn(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), P = !$ && !C && $ !== 0, V = (de) => {
    var pe, be;
    T(P ? !1 : de), P || ((pe = e.onOpenChange) === null || pe === void 0 || pe.call(e, de), (be = e.onVisibleChange) === null || be === void 0 || be.call(e, de));
  }, H = i.useMemo(() => {
    var de, pe;
    let be = p;
    return typeof y == "object" && (be = (pe = (de = y.pointAtCenter) !== null && de !== void 0 ? de : y.arrowPointAtCenter) !== null && pe !== void 0 ? pe : p), S || kl({
      arrowPointAtCenter: be,
      autoAdjustOverflow: m,
      arrowWidth: v ? w.sizePopupArrow : 0,
      borderRadius: w.borderRadius,
      offset: w.marginXXS,
      visibleFirst: !0
    });
  }, [p, y, S, w]), M = i.useMemo(() => $ === 0 ? $ : C || $ || "", [C, $]), _ = /* @__PURE__ */ i.createElement(cn, null, typeof M == "function" ? M() : M), {
    getPopupContainer: B,
    placement: I = "top",
    mouseEnterDelay: R = 0.1,
    mouseLeaveDelay: z = 0.1,
    overlayStyle: ee,
    rootClassName: F
  } = e, L = nc(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), G = O("tooltip", o), Z = O(), U = e["data-popover-inject"];
  let W = A;
  !("open" in e) && !("visible" in e) && P && (W = !1);
  const ie = /* @__PURE__ */ i.isValidElement(d) && !si(d) ? d : /* @__PURE__ */ i.createElement("span", null, d), re = ie.props, fe = !re.className || typeof re.className == "string" ? q(re.className, a || `${G}-open`) : re.className, [ge, X, Ce] = ma(G, !U), $e = ga(G, c), he = $e.arrowStyle, we = Object.assign(Object.assign({}, u), $e.overlayStyle), Y = q(l, {
    [`${G}-rtl`]: x === "rtl"
  }, $e.className, F, X, Ce), [J, ve] = li("Tooltip", L.zIndex), Ie = /* @__PURE__ */ i.createElement(Vl, Object.assign({}, L, {
    zIndex: J,
    showArrow: v,
    placement: I,
    mouseEnterDelay: R,
    mouseLeaveDelay: z,
    prefixCls: G,
    overlayClassName: Y,
    overlayStyle: Object.assign(Object.assign({}, he), ee),
    getTooltipContainer: B || s || b,
    ref: N,
    builtinPlacements: H,
    overlay: _,
    visible: W,
    onVisibleChange: V,
    afterVisibleChange: f ?? h,
    overlayInnerStyle: we,
    arrowContent: /* @__PURE__ */ i.createElement("span", {
      className: `${G}-arrow-content`
    }),
    motion: {
      motionName: ci(Z, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!g
  }), W ? Fn(ie, {
    className: fe
  }) : ie);
  return ge(/* @__PURE__ */ i.createElement(ui.Provider, {
    value: ve
  }, Ie));
});
va._InternalPanelDoNotUseOrYouWillBeFired = tc;
const rc = va;
function Gr(e) {
  return at(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const qr = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: s,
    fontSizeLG: l,
    lineHeightLG: c,
    paddingSM: u,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: h,
    colorPrimaryHover: g,
    colorPrimary: y,
    controlOutlineWidth: $,
    controlOutline: C,
    colorErrorOutline: S,
    colorWarningOutline: p,
    colorBgContainer: m
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockSM: Math.max(Math.round((a - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockLG: Math.ceil((s - l * c) / 2 * 10) / 10 - o,
    paddingInline: u - o,
    paddingInlineSM: d - o,
    paddingInlineLG: f - o,
    addonBg: h,
    activeBorderColor: y,
    hoverBorderColor: g,
    activeShadow: `0 0 0 ${$}px ${C}`,
    errorActiveShadow: `0 0 0 ${$}px ${S}`,
    warningActiveShadow: `0 0 0 ${$}px ${p}`,
    hoverBg: m,
    activeBg: m,
    inputFontSize: n,
    inputFontSizeLG: l,
    inputFontSizeSM: n
  };
}, oc = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Ur = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, oc(at(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), pa = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), vo = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, pa(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), ha = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pa(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ur(e))
  }), vo(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), vo(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), po = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), ba = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, po(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), po(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Ur(e))
    }
  })
}), ya = (e, t) => ({
  "&-borderless": Object.assign({
    background: "transparent",
    border: "none",
    "&:focus, &:focus-within": {
      outline: "none"
    },
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled
    }
  }, t)
}), wa = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), ho = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, wa(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), Ca = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wa(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ur(e))
  }), ho(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), ho(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), bo = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), Sa = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, bo(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), bo(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), $a = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), xa = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${le(t)} ${le(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, Ea = (e) => ({
  padding: `${le(e.paddingBlockSM)} ${le(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Yn = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${le(e.paddingBlock)} ${le(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, $a(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, xa(e)),
  "&-sm": Object.assign({}, Ea(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), Oa = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, xa(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Ea(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${le(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${le(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${le(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${le(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${le(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, di()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, ac = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: o
  } = e, s = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ut(e)), Yn(e)), ha(e)), Ca(e)), ya(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: s,
          paddingBottom: s
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, ic = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${le(e.inputAffixPadding)}`
      }
    }
  };
}, sc = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: s,
    iconCls: l
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yn(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), ic(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: s
        }
      }
    })
  };
}, lc = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ut(e)), Oa(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, ba(e)), Sa(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, cc = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal({
          unit: !1
        })
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, uc = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${t}`]: {
          paddingInlineEnd: n
        }
      },
      [`&-affix-wrapper${r}-has-feedback`]: {
        [`${t}`]: {
          paddingInlineEnd: n
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
}, dc = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Kr = wt("Input", (e) => {
  const t = at(e, Gr(e));
  return [
    ac(t),
    uc(t),
    sc(t),
    lc(t),
    cc(t),
    dc(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Go(t)
  ];
}, qr), fc = /* @__PURE__ */ i.createContext({}), Ia = fc, mc = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, gc = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, vc = (e, t) => {
  const {
    prefixCls: n,
    componentCls: r,
    gridColumns: o
  } = e, a = {};
  for (let s = o; s >= 0; s--)
    s === 0 ? (a[`${r}${t}-${s}`] = {
      display: "none"
    }, a[`${r}-push-${s}`] = {
      insetInlineStart: "auto"
    }, a[`${r}-pull-${s}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-push-${s}`] = {
      insetInlineStart: "auto"
    }, a[`${r}${t}-pull-${s}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-offset-${s}`] = {
      marginInlineStart: 0
    }, a[`${r}${t}-order-${s}`] = {
      order: 0
    }) : (a[`${r}${t}-${s}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${s / o * 100}%`,
        maxWidth: `${s / o * 100}%`
      }
    ], a[`${r}${t}-push-${s}`] = {
      insetInlineStart: `${s / o * 100}%`
    }, a[`${r}${t}-pull-${s}`] = {
      insetInlineEnd: `${s / o * 100}%`
    }, a[`${r}${t}-offset-${s}`] = {
      marginInlineStart: `${s / o * 100}%`
    }, a[`${r}${t}-order-${s}`] = {
      order: s
    });
  return a[`${r}${t}-flex`] = {
    flex: `var(--${n}${t}-flex)`
  }, a;
}, Mr = (e, t) => vc(e, t), pc = (e, t, n) => ({
  [`@media (min-width: ${le(t)})`]: Object.assign({}, Mr(e, n))
}), hc = () => ({}), bc = () => ({}), yc = wt("Grid", mc, hc), wc = wt("Grid", (e) => {
  const t = at(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [gc(t), Mr(t, ""), Mr(t, "-xs"), Object.keys(n).map((r) => pc(t, n[r], r)).reduce((r, o) => Object.assign(Object.assign({}, r), o), {})];
}, bc);
var Cc = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function yo(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const Sc = ["xs", "sm", "md", "lg", "xl", "xxl"], $c = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = i.useContext(Be), {
    gutter: o,
    wrap: a
  } = i.useContext(Ia), {
    prefixCls: s,
    span: l,
    order: c,
    offset: u,
    push: d,
    pull: f,
    className: h,
    children: g,
    flex: y,
    style: $
  } = e, C = Cc(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), S = n("col", s), [p, m, v] = wc(S), w = {};
  let b = {};
  Sc.forEach((E) => {
    let N = {};
    const j = e[E];
    typeof j == "number" ? N.span = j : typeof j == "object" && (N = j || {}), delete C[E], b = Object.assign(Object.assign({}, b), {
      [`${S}-${E}-${N.span}`]: N.span !== void 0,
      [`${S}-${E}-order-${N.order}`]: N.order || N.order === 0,
      [`${S}-${E}-offset-${N.offset}`]: N.offset || N.offset === 0,
      [`${S}-${E}-push-${N.push}`]: N.push || N.push === 0,
      [`${S}-${E}-pull-${N.pull}`]: N.pull || N.pull === 0,
      [`${S}-rtl`]: r === "rtl"
    }), N.flex && (b[`${S}-${E}-flex`] = !0, w[`--${S}-${E}-flex`] = yo(N.flex));
  });
  const O = q(S, {
    [`${S}-${l}`]: l !== void 0,
    [`${S}-order-${c}`]: c,
    [`${S}-offset-${u}`]: u,
    [`${S}-push-${d}`]: d,
    [`${S}-pull-${f}`]: f
  }, h, b, m, v), x = {};
  if (o && o[0] > 0) {
    const E = o[0] / 2;
    x.paddingLeft = E, x.paddingRight = E;
  }
  return y && (x.flex = yo(y), a === !1 && !x.minWidth && (x.minWidth = 0)), p(/* @__PURE__ */ i.createElement("div", Object.assign({}, C, {
    style: Object.assign(Object.assign(Object.assign({}, x), $), w),
    className: O,
    ref: t
  }), g));
}), Ra = $c;
var xc = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function wo(e, t) {
  const [n, r] = i.useState(typeof e == "string" ? e : ""), o = () => {
    if (typeof e == "string" && r(e), typeof e == "object")
      for (let a = 0; a < fn.length; a++) {
        const s = fn[a];
        if (!t[s])
          continue;
        const l = e[s];
        if (l !== void 0) {
          r(l);
          return;
        }
      }
  };
  return i.useEffect(() => {
    o();
  }, [JSON.stringify(e), t]), n;
}
const Ec = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: n,
    justify: r,
    align: o,
    className: a,
    style: s,
    children: l,
    gutter: c = 0,
    wrap: u
  } = e, d = xc(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: f,
    direction: h
  } = i.useContext(Be), [g, y] = i.useState({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), [$, C] = i.useState({
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    xxl: !1
  }), S = wo(o, $), p = wo(r, $), m = i.useRef(c), v = Bl();
  i.useEffect(() => {
    const M = v.subscribe((_) => {
      C(_);
      const B = m.current || 0;
      (!Array.isArray(B) && typeof B == "object" || Array.isArray(B) && (typeof B[0] == "object" || typeof B[1] == "object")) && y(_);
    });
    return () => v.unsubscribe(M);
  }, []);
  const w = () => {
    const M = [void 0, void 0];
    return (Array.isArray(c) ? c : [c, void 0]).forEach((B, I) => {
      if (typeof B == "object")
        for (let R = 0; R < fn.length; R++) {
          const z = fn[R];
          if (g[z] && B[z] !== void 0) {
            M[I] = B[z];
            break;
          }
        }
      else
        M[I] = B;
    }), M;
  }, b = f("row", n), [O, x, E] = yc(b), N = w(), j = q(b, {
    [`${b}-no-wrap`]: u === !1,
    [`${b}-${p}`]: p,
    [`${b}-${S}`]: S,
    [`${b}-rtl`]: h === "rtl"
  }, a, x, E), A = {}, T = N[0] != null && N[0] > 0 ? N[0] / -2 : void 0;
  T && (A.marginLeft = T, A.marginRight = T);
  const [P, V] = N;
  A.rowGap = V;
  const H = i.useMemo(() => ({
    gutter: [P, V],
    wrap: u
  }), [P, V, u]);
  return O(/* @__PURE__ */ i.createElement(Ia.Provider, {
    value: H
  }, /* @__PURE__ */ i.createElement("div", Object.assign({}, d, {
    className: j,
    style: Object.assign(Object.assign({}, A), s),
    ref: t
  }), l)));
}), Oc = Ec;
var Ic = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
const Rc = Ic;
var Nc = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: Rc
  }));
}, Mc = /* @__PURE__ */ i.forwardRef(Nc);
const Pc = Mc;
function Pr() {
  return typeof BigInt == "function";
}
function Na(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
function jt(e) {
  var t = e.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = "0".concat(t));
  var r = t || "0", o = r.split("."), a = o[0] || "0", s = o[1] || "0";
  a === "0" && s === "0" && (n = !1);
  var l = n ? "-" : "";
  return {
    negative: n,
    negativeStr: l,
    trimStr: r,
    integerStr: a,
    decimalStr: s,
    fullStr: "".concat(l).concat(r)
  };
}
function Xr(e) {
  var t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function Pt(e) {
  var t = String(e);
  if (Xr(e)) {
    var n = Number(t.slice(t.indexOf("e-") + 2)), r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && kr(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function Qn(e) {
  var t = String(e);
  if (Xr(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(Pr() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(Pr() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(Pt(t));
  }
  return jt(t).fullStr;
}
function kr(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
var _c = /* @__PURE__ */ function() {
  function e(t) {
    if (jr(this, e), Se(this, "origin", ""), Se(this, "negative", void 0), Se(this, "integer", void 0), Se(this, "decimal", void 0), Se(this, "decimalLen", void 0), Se(this, "empty", void 0), Se(this, "nan", void 0), Na(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    var n = t;
    if (Xr(n) && (n = Number(n)), n = typeof n == "string" ? n : Qn(n), kr(n)) {
      var r = jt(n);
      this.negative = r.negative;
      var o = r.trimStr.split(".");
      this.integer = BigInt(o[0]);
      var a = o[1] || "0";
      this.decimal = BigInt(a), this.decimalLen = a.length;
    } else
      this.nan = !0;
  }
  return zr(e, [{
    key: "getMark",
    value: function() {
      return this.negative ? "-" : "";
    }
  }, {
    key: "getIntegerStr",
    value: function() {
      return this.integer.toString();
    }
    /**
     * @private get decimal string
     */
  }, {
    key: "getDecimalStr",
    value: function() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
    /**
     * @private Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function(n) {
      var r = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n, "0"));
      return BigInt(r);
    }
  }, {
    key: "negate",
    value: function() {
      var n = new e(this.toString());
      return n.negative = !n.negative, n;
    }
  }, {
    key: "cal",
    value: function(n, r, o) {
      var a = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), s = this.alignDecimal(a), l = n.alignDecimal(a), c = r(s, l).toString(), u = o(a), d = jt(c), f = d.negativeStr, h = d.trimStr, g = "".concat(f).concat(h.padStart(u + 1, "0"));
      return new e("".concat(g.slice(0, -u), ".").concat(g.slice(-u)));
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = new e(n);
      return r.isInvalidate() ? this : this.cal(r, function(o, a) {
        return o + a;
      }, function(o) {
        return o;
      });
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = new e(n);
      return this.isInvalidate() || r.isInvalidate() ? new e(NaN) : this.cal(r, function(o, a) {
        return o * a;
      }, function(o) {
        return o * 2;
      });
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toString() === (n == null ? void 0 : n.toString());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.isNaN() ? NaN : Number(this.toString());
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : jt("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), e;
}(), jc = /* @__PURE__ */ function() {
  function e(t) {
    if (jr(this, e), Se(this, "origin", ""), Se(this, "number", void 0), Se(this, "empty", void 0), Na(t)) {
      this.empty = !0;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  return zr(e, [{
    key: "negate",
    value: function() {
      return new e(-this.toNumber());
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = Number(n);
      if (Number.isNaN(r))
        return this;
      var o = this.number + r;
      if (o > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (o < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var a = Math.max(Pt(this.number), Pt(r));
      return new e(o.toFixed(a));
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = Number(n);
      if (this.isInvalidate() || Number.isNaN(r))
        return new e(NaN);
      var o = this.number * r;
      if (o > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (o < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var a = Math.max(Pt(this.number), Pt(r));
      return new e(o.toFixed(a));
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toNumber() === (n == null ? void 0 : n.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : Qn(this.number) : this.origin;
    }
  }]), e;
}();
function Ze(e) {
  return Pr() ? new _c(e) : new jc(e);
}
function An(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  var o = jt(e), a = o.negativeStr, s = o.integerStr, l = o.decimalStr, c = "".concat(t).concat(l), u = "".concat(a).concat(s);
  if (n >= 0) {
    var d = Number(l[n]);
    if (d >= 5 && !r) {
      var f = Ze(e).add("".concat(a, "0.").concat("0".repeat(n)).concat(10 - d));
      return An(f.toString(), t, n, r);
    }
    return n === 0 ? u : "".concat(u).concat(t).concat(l.padEnd(n, "0").slice(0, n));
  }
  return c === ".0" ? u : "".concat(u).concat(c);
}
function zc(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Tc(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Co(e, t, n) {
  var r = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), o;
}
function Hn(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      o = Co(t, e, ""), n(o);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      o = Co(t, e, r), n(o);
      return;
    }
    n(o);
  }
}
function Ma(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var o = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var Yr = function(t) {
  var n, r, o = t.inputElement, a = t.children, s = t.prefixCls, l = t.prefix, c = t.suffix, u = t.addonBefore, d = t.addonAfter, f = t.className, h = t.style, g = t.disabled, y = t.readOnly, $ = t.focused, C = t.triggerFocus, S = t.allowClear, p = t.value, m = t.handleReset, v = t.hidden, w = t.classes, b = t.classNames, O = t.dataAttrs, x = t.styles, E = t.components, N = a ?? o, j = (E == null ? void 0 : E.affixWrapper) || "span", A = (E == null ? void 0 : E.groupWrapper) || "span", T = (E == null ? void 0 : E.wrapper) || "span", P = (E == null ? void 0 : E.groupAddon) || "span", V = i.useRef(null), H = function(X) {
    var Ce;
    (Ce = V.current) !== null && Ce !== void 0 && Ce.contains(X.target) && (C == null || C());
  }, M = Tc(t), _ = /* @__PURE__ */ i.cloneElement(N, {
    value: p,
    className: q(N.props.className, !M && (b == null ? void 0 : b.variant)) || null
  });
  if (M) {
    var B, I = null;
    if (S) {
      var R, z = !g && !y && p, ee = "".concat(s, "-clear-icon"), F = vn(S) === "object" && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : "✖";
      I = /* @__PURE__ */ se.createElement("span", {
        onClick: m,
        onMouseDown: function(X) {
          return X.preventDefault();
        },
        className: q(ee, (R = {}, Se(R, "".concat(ee, "-hidden"), !z), Se(R, "".concat(ee, "-has-suffix"), !!c), R)),
        role: "button",
        tabIndex: -1
      }, F);
    }
    var L = "".concat(s, "-affix-wrapper"), G = q(L, (B = {}, Se(B, "".concat(s, "-disabled"), g), Se(B, "".concat(L, "-disabled"), g), Se(B, "".concat(L, "-focused"), $), Se(B, "".concat(L, "-readonly"), y), Se(B, "".concat(L, "-input-with-clear-btn"), c && S && p), B), w == null ? void 0 : w.affixWrapper, b == null ? void 0 : b.affixWrapper, b == null ? void 0 : b.variant), Z = (c || S) && /* @__PURE__ */ se.createElement("span", {
      className: q("".concat(s, "-suffix"), b == null ? void 0 : b.suffix),
      style: x == null ? void 0 : x.suffix
    }, I, c);
    _ = /* @__PURE__ */ se.createElement(j, Re({
      className: G,
      style: x == null ? void 0 : x.affixWrapper,
      onClick: H
    }, O == null ? void 0 : O.affixWrapper, {
      ref: V
    }), l && /* @__PURE__ */ se.createElement("span", {
      className: q("".concat(s, "-prefix"), b == null ? void 0 : b.prefix),
      style: x == null ? void 0 : x.prefix
    }, l), _, Z);
  }
  if (zc(t)) {
    var U = "".concat(s, "-group"), W = "".concat(U, "-addon"), ie = "".concat(U, "-wrapper"), re = q("".concat(s, "-wrapper"), U, w == null ? void 0 : w.wrapper, b == null ? void 0 : b.wrapper), fe = q(ie, Se({}, "".concat(ie, "-disabled"), g), w == null ? void 0 : w.group, b == null ? void 0 : b.groupWrapper);
    _ = /* @__PURE__ */ se.createElement(A, {
      className: fe
    }, /* @__PURE__ */ se.createElement(T, {
      className: re
    }, u && /* @__PURE__ */ se.createElement(P, {
      className: W
    }, u), _, d && /* @__PURE__ */ se.createElement(P, {
      className: W
    }, d)));
  }
  return /* @__PURE__ */ se.cloneElement(_, {
    className: q((n = _.props) === null || n === void 0 ? void 0 : n.className, f) || null,
    style: me(me({}, (r = _.props) === null || r === void 0 ? void 0 : r.style), h),
    hidden: v
  });
}, Ac = ["show"];
function Pa(e, t) {
  return i.useMemo(function() {
    var n = {};
    t && (n.show = vn(t) === "object" && t.formatter ? t.formatter : !!t), n = me(me({}, n), e);
    var r = n, o = r.show, a = Ge(r, Ac);
    return me(me({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(s) {
        return s.length;
      }
    });
  }, [e, t]);
}
var Fc = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], Bc = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.autoComplete, r = e.onChange, o = e.onFocus, a = e.onBlur, s = e.onPressEnter, l = e.onKeyDown, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, d = e.disabled, f = e.htmlSize, h = e.className, g = e.maxLength, y = e.suffix, $ = e.showCount, C = e.count, S = e.type, p = S === void 0 ? "text" : S, m = e.classes, v = e.classNames, w = e.styles, b = e.onCompositionStart, O = e.onCompositionEnd, x = Ge(e, Fc), E = i.useState(!1), N = ue(E, 2), j = N[0], A = N[1], T = i.useRef(!1), P = i.useRef(null), V = function(J) {
    P.current && Ma(P.current, J);
  }, H = qn(e.defaultValue, {
    value: e.value
  }), M = ue(H, 2), _ = M[0], B = M[1], I = _ == null ? "" : String(_), R = i.useState(null), z = ue(R, 2), ee = z[0], F = z[1], L = Pa(C, $), G = L.max || g, Z = L.strategy(I), U = !!G && Z > G;
  i.useImperativeHandle(t, function() {
    return {
      focus: V,
      blur: function() {
        var J;
        (J = P.current) === null || J === void 0 || J.blur();
      },
      setSelectionRange: function(J, ve, Ie) {
        var de;
        (de = P.current) === null || de === void 0 || de.setSelectionRange(J, ve, Ie);
      },
      select: function() {
        var J;
        (J = P.current) === null || J === void 0 || J.select();
      },
      input: P.current
    };
  }), i.useEffect(function() {
    A(function(Y) {
      return Y && d ? !1 : Y;
    });
  }, [d]);
  var W = function(J, ve, Ie) {
    var de = ve;
    if (!T.current && L.exceedFormatter && L.max && L.strategy(ve) > L.max) {
      if (de = L.exceedFormatter(ve, {
        max: L.max
      }), ve !== de) {
        var pe, be;
        F([((pe = P.current) === null || pe === void 0 ? void 0 : pe.selectionStart) || 0, ((be = P.current) === null || be === void 0 ? void 0 : be.selectionEnd) || 0]);
      }
    } else if (Ie.source === "compositionEnd")
      return;
    B(de), P.current && Hn(P.current, J, r, de);
  };
  i.useEffect(function() {
    if (ee) {
      var Y;
      (Y = P.current) === null || Y === void 0 || Y.setSelectionRange.apply(Y, je(ee));
    }
  }, [ee]);
  var ie = function(J) {
    W(J, J.target.value, {
      source: "change"
    });
  }, re = function(J) {
    T.current = !1, W(J, J.currentTarget.value, {
      source: "compositionEnd"
    }), O == null || O(J);
  }, fe = function(J) {
    s && J.key === "Enter" && s(J), l == null || l(J);
  }, ge = function(J) {
    A(!0), o == null || o(J);
  }, X = function(J) {
    A(!1), a == null || a(J);
  }, Ce = function(J) {
    B(""), V(), P.current && Hn(P.current, J, r);
  }, $e = U && "".concat(u, "-out-of-range"), he = function() {
    var J = Dr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ se.createElement("input", Re({
      autoComplete: n
    }, J, {
      onChange: ie,
      onFocus: ge,
      onBlur: X,
      onKeyDown: fe,
      className: q(u, Se({}, "".concat(u, "-disabled"), d), v == null ? void 0 : v.input),
      style: w == null ? void 0 : w.input,
      ref: P,
      size: f,
      type: p,
      onCompositionStart: function(Ie) {
        T.current = !0, b == null || b(Ie);
      },
      onCompositionEnd: re
    }));
  }, we = function() {
    var J = Number(G) > 0;
    if (y || L.show) {
      var ve = L.showFormatter ? L.showFormatter({
        value: I,
        count: Z,
        maxLength: G
      }) : "".concat(Z).concat(J ? " / ".concat(G) : "");
      return /* @__PURE__ */ se.createElement(se.Fragment, null, L.show && /* @__PURE__ */ se.createElement("span", {
        className: q("".concat(u, "-show-count-suffix"), Se({}, "".concat(u, "-show-count-has-suffix"), !!y), v == null ? void 0 : v.count),
        style: me({}, w == null ? void 0 : w.count)
      }, ve), y);
    }
    return null;
  };
  return /* @__PURE__ */ se.createElement(Yr, Re({}, x, {
    prefixCls: u,
    className: q(h, $e),
    handleReset: Ce,
    value: I,
    focused: j,
    triggerFocus: V,
    suffix: we(),
    disabled: d,
    classes: m,
    classNames: v,
    styles: w
  }), he());
});
function Dc(e, t) {
  var n = i.useRef(null);
  function r() {
    try {
      var a = e.selectionStart, s = e.selectionEnd, l = e.value, c = l.substring(0, a), u = l.substring(s);
      n.current = {
        start: a,
        end: s,
        value: l,
        beforeTxt: c,
        afterTxt: u
      };
    } catch {
    }
  }
  function o() {
    if (e && n.current && t)
      try {
        var a = e.value, s = n.current, l = s.beforeTxt, c = s.afterTxt, u = s.start, d = a.length;
        if (a.endsWith(c))
          d = a.length - n.current.afterTxt.length;
        else if (a.startsWith(l))
          d = l.length;
        else {
          var f = l[u - 1], h = a.indexOf(f, u - 1);
          h !== -1 && (d = h + 1);
        }
        e.setSelectionRange(d, d);
      } catch (g) {
        fi(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(g.message));
      }
  }
  return [r, o];
}
var Lc = function() {
  var t = i.useState(!1), n = ue(t, 2), r = n[0], o = n[1];
  return Le(function() {
    o(ia());
  }, []), r;
}, Wc = 200, Vc = 600;
function Hc(e) {
  var t = e.prefixCls, n = e.upNode, r = e.downNode, o = e.upDisabled, a = e.downDisabled, s = e.onStep, l = i.useRef(), c = i.useRef([]), u = i.useRef();
  u.current = s;
  var d = function() {
    clearTimeout(l.current);
  }, f = function(m, v) {
    m.preventDefault(), d(), u.current(v);
    function w() {
      u.current(v), l.current = setTimeout(w, Wc);
    }
    l.current = setTimeout(w, Vc);
  };
  i.useEffect(function() {
    return function() {
      d(), c.current.forEach(function(p) {
        return ot.cancel(p);
      });
    };
  }, []);
  var h = Lc();
  if (h)
    return null;
  var g = "".concat(t, "-handler"), y = q(g, "".concat(g, "-up"), Se({}, "".concat(g, "-up-disabled"), o)), $ = q(g, "".concat(g, "-down"), Se({}, "".concat(g, "-down-disabled"), a)), C = function() {
    return c.current.push(ot(d));
  }, S = {
    unselectable: "on",
    role: "button",
    onMouseUp: C,
    onMouseLeave: C
  };
  return /* @__PURE__ */ i.createElement("div", {
    className: "".concat(g, "-wrap")
  }, /* @__PURE__ */ i.createElement("span", Re({}, S, {
    onMouseDown: function(m) {
      f(m, !0);
    },
    "aria-label": "Increase Value",
    "aria-disabled": o,
    className: y
  }), n || /* @__PURE__ */ i.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-up-inner")
  })), /* @__PURE__ */ i.createElement("span", Re({}, S, {
    onMouseDown: function(m) {
      f(m, !1);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": a,
    className: $
  }), r || /* @__PURE__ */ i.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-down-inner")
  })));
}
function So(e) {
  var t = typeof e == "number" ? Qn(e) : jt(e).fullStr, n = t.includes(".");
  return n ? jt(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0";
}
const Gc = function() {
  var e = i.useRef(0), t = function() {
    ot.cancel(e.current);
  };
  return i.useEffect(function() {
    return t;
  }, []), function(n) {
    t(), e.current = ot(function() {
      n();
    });
  };
};
var qc = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "changeOnWheel", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "changeOnBlur"], Uc = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "className", "classNames"], $o = function(t, n) {
  return t || n.isEmpty() ? n.toString() : n.toNumber();
}, xo = function(t) {
  var n = Ze(t);
  return n.isInvalidate() ? null : n;
}, Kc = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n, r = e.prefixCls, o = r === void 0 ? "rc-input-number" : r, a = e.className, s = e.style, l = e.min, c = e.max, u = e.step, d = u === void 0 ? 1 : u, f = e.defaultValue, h = e.value, g = e.disabled, y = e.readOnly, $ = e.upHandler, C = e.downHandler, S = e.keyboard, p = e.changeOnWheel, m = p === void 0 ? !1 : p, v = e.controls, w = v === void 0 ? !0 : v;
  e.classNames;
  var b = e.stringMode, O = e.parser, x = e.formatter, E = e.precision, N = e.decimalSeparator, j = e.onChange, A = e.onInput, T = e.onPressEnter, P = e.onStep, V = e.changeOnBlur, H = V === void 0 ? !0 : V, M = Ge(e, qc), _ = "".concat(o, "-input"), B = i.useRef(null), I = i.useState(!1), R = ue(I, 2), z = R[0], ee = R[1], F = i.useRef(!1), L = i.useRef(!1), G = i.useRef(!1), Z = i.useState(function() {
    return Ze(h ?? f);
  }), U = ue(Z, 2), W = U[0], ie = U[1];
  function re(te) {
    h === void 0 && ie(te);
  }
  var fe = i.useCallback(function(te, D) {
    if (!D)
      return E >= 0 ? E : Math.max(Pt(te), Pt(d));
  }, [E, d]), ge = i.useCallback(function(te) {
    var D = String(te);
    if (O)
      return O(D);
    var K = D;
    return N && (K = K.replace(N, ".")), K.replace(/[^\w.-]+/g, "");
  }, [O, N]), X = i.useRef(""), Ce = i.useCallback(function(te, D) {
    if (x)
      return x(te, {
        userTyping: D,
        input: String(X.current)
      });
    var K = typeof te == "number" ? Qn(te) : te;
    if (!D) {
      var ne = fe(K, D);
      if (kr(K) && (N || ne >= 0)) {
        var Q = N || ".";
        K = An(K, Q, ne);
      }
    }
    return K;
  }, [x, fe, N]), $e = i.useState(function() {
    var te = f ?? h;
    return W.isInvalidate() && ["string", "number"].includes(vn(te)) ? Number.isNaN(te) ? "" : te : Ce(W.toString(), !1);
  }), he = ue($e, 2), we = he[0], Y = he[1];
  X.current = we;
  function J(te, D) {
    Y(Ce(
      // Invalidate number is sometime passed by external control, we should let it go
      // Otherwise is controlled by internal interactive logic which check by userTyping
      // You can ref 'show limited value when input is not focused' test for more info.
      te.isInvalidate() ? te.toString(!1) : te.toString(!D),
      D
    ));
  }
  var ve = i.useMemo(function() {
    return xo(c);
  }, [c, E]), Ie = i.useMemo(function() {
    return xo(l);
  }, [l, E]), de = i.useMemo(function() {
    return !ve || !W || W.isInvalidate() ? !1 : ve.lessEquals(W);
  }, [ve, W]), pe = i.useMemo(function() {
    return !Ie || !W || W.isInvalidate() ? !1 : W.lessEquals(Ie);
  }, [Ie, W]), be = Dc(B.current, z), xe = ue(be, 2), tt = xe[0], Ne = xe[1], oe = function(D) {
    return ve && !D.lessEquals(ve) ? ve : Ie && !Ie.lessEquals(D) ? Ie : null;
  }, ye = function(D) {
    return !oe(D);
  }, Ee = function(D, K) {
    var ne = D, Q = ye(ne) || ne.isEmpty();
    if (!ne.isEmpty() && !K && (ne = oe(ne) || ne, Q = !0), !y && !g && Q) {
      var ce = ne.toString(), Oe = fe(ce, K);
      return Oe >= 0 && (ne = Ze(An(ce, ".", Oe)), ye(ne) || (ne = Ze(An(ce, ".", Oe, !0)))), ne.equals(W) || (re(ne), j == null || j(ne.isEmpty() ? null : $o(b, ne)), h === void 0 && J(ne, K)), ne;
    }
    return W;
  }, mt = Gc(), qe = function te(D) {
    if (tt(), X.current = D, Y(D), !L.current) {
      var K = ge(D), ne = Ze(K);
      ne.isNaN() || Ee(ne, !0);
    }
    A == null || A(D), mt(function() {
      var Q = D;
      O || (Q = D.replace(/。/g, ".")), Q !== D && te(Q);
    });
  }, St = function() {
    L.current = !0;
  }, Qe = function() {
    L.current = !1, qe(B.current.value);
  }, Ae = function(D) {
    qe(D.target.value);
  }, We = function(D) {
    var K;
    if (!(D && de || !D && pe)) {
      F.current = !1;
      var ne = Ze(G.current ? So(d) : d);
      D || (ne = ne.negate());
      var Q = (W || Ze(0)).add(ne.toString()), ce = Ee(Q, !1);
      P == null || P($o(b, ce), {
        offset: G.current ? So(d) : d,
        type: D ? "up" : "down"
      }), (K = B.current) === null || K === void 0 || K.focus();
    }
  }, nt = function(D) {
    var K = Ze(ge(we)), ne = K;
    K.isNaN() ? ne = Ee(W, D) : ne = Ee(K, D), h !== void 0 ? J(W, !1) : ne.isNaN() || J(ne, !1);
  }, Ve = function() {
    F.current = !0;
  }, ze = function(D) {
    var K = D.key, ne = D.shiftKey;
    F.current = !0, G.current = ne, K === "Enter" && (L.current || (F.current = !1), nt(!1), T == null || T(D)), S !== !1 && !L.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(K) && (We(K === "Up" || K === "ArrowUp"), D.preventDefault());
  }, Ue = function() {
    F.current = !1, G.current = !1;
  };
  i.useEffect(function() {
    if (m && z) {
      var te = function(ne) {
        We(ne.deltaY < 0), ne.preventDefault();
      }, D = B.current;
      if (D)
        return D.addEventListener("wheel", te, {
          passive: !1
        }), function() {
          return D.removeEventListener("wheel", te);
        };
    }
  });
  var it = function() {
    H && nt(!1), ee(!1), F.current = !1;
  };
  return br(function() {
    W.isInvalidate() || J(W, !1);
  }, [E, x]), br(function() {
    var te = Ze(h);
    ie(te);
    var D = Ze(ge(we));
    (!te.equals(D) || !F.current || x) && J(te, F.current);
  }, [h]), br(function() {
    x && Ne();
  }, [we]), /* @__PURE__ */ i.createElement("div", {
    className: q(o, a, (n = {}, Se(n, "".concat(o, "-focused"), z), Se(n, "".concat(o, "-disabled"), g), Se(n, "".concat(o, "-readonly"), y), Se(n, "".concat(o, "-not-a-number"), W.isNaN()), Se(n, "".concat(o, "-out-of-range"), !W.isInvalidate() && !ye(W)), n)),
    style: s,
    onFocus: function() {
      ee(!0);
    },
    onBlur: it,
    onKeyDown: ze,
    onKeyUp: Ue,
    onCompositionStart: St,
    onCompositionEnd: Qe,
    onBeforeInput: Ve
  }, w && /* @__PURE__ */ i.createElement(Hc, {
    prefixCls: o,
    upNode: $,
    downNode: C,
    upDisabled: de,
    downDisabled: pe,
    onStep: We
  }), /* @__PURE__ */ i.createElement("div", {
    className: "".concat(_, "-wrap")
  }, /* @__PURE__ */ i.createElement("input", Re({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": l,
    "aria-valuemax": c,
    "aria-valuenow": W.isInvalidate() ? null : W.toString(),
    step: d
  }, M, {
    ref: zt(B, t),
    className: _,
    value: we,
    onChange: Ae,
    disabled: g,
    readOnly: y
  }))));
}), _a = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.disabled, r = e.style, o = e.prefixCls, a = e.value, s = e.prefix, l = e.suffix, c = e.addonBefore, u = e.addonAfter, d = e.className, f = e.classNames, h = Ge(e, Uc), g = i.useRef(null), y = function(C) {
    g.current && Ma(g.current, C);
  };
  return /* @__PURE__ */ i.createElement(Yr, {
    className: d,
    triggerFocus: y,
    prefixCls: o,
    value: a,
    disabled: n,
    style: r,
    prefix: s,
    suffix: l,
    addonAfter: u,
    addonBefore: c,
    classNames: f,
    components: {
      affixWrapper: "div",
      groupWrapper: "div",
      wrapper: "div",
      groupAddon: "div"
    }
  }, /* @__PURE__ */ i.createElement(Kc, Re({
    prefixCls: o,
    disabled: n,
    ref: zt(g, t),
    className: f == null ? void 0 : f.input
  }, h)));
});
_a.displayName = "InputNumber";
const Xc = (e) => {
  var t;
  const n = (t = e.handleVisible) !== null && t !== void 0 ? t : "auto";
  return Object.assign(Object.assign({}, qr(e)), {
    controlWidth: 90,
    handleWidth: e.controlHeightSM - e.lineWidth * 2,
    handleFontSize: e.fontSize / 2,
    handleVisible: n,
    handleActiveBg: e.colorFillAlter,
    handleBg: e.colorBgContainer,
    filledHandleBg: new mi(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),
    handleHoverColor: e.colorPrimary,
    handleBorderColor: e.colorBorder,
    handleOpacity: n === !0 ? 1 : 0
  });
}, Eo = (e, t) => {
  let {
    componentCls: n,
    borderRadiusSM: r,
    borderRadiusLG: o
  } = e;
  const a = t === "lg" ? o : r;
  return {
    [`&-${t}`]: {
      [`${n}-handler-wrap`]: {
        borderStartEndRadius: a,
        borderEndEndRadius: a
      },
      [`${n}-handler-up`]: {
        borderStartEndRadius: a
      },
      [`${n}-handler-down`]: {
        borderEndEndRadius: a
      }
    }
  };
}, kc = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    lineType: r,
    borderRadius: o,
    fontSizeLG: a,
    controlHeightLG: s,
    controlHeightSM: l,
    colorError: c,
    paddingInlineSM: u,
    paddingBlockSM: d,
    paddingBlockLG: f,
    paddingInlineLG: h,
    colorTextDescription: g,
    motionDurationMid: y,
    handleHoverColor: $,
    paddingInline: C,
    paddingBlock: S,
    handleBg: p,
    handleActiveBg: m,
    colorTextDisabled: v,
    borderRadiusSM: w,
    borderRadiusLG: b,
    controlWidth: O,
    handleOpacity: x,
    handleBorderColor: E,
    filledHandleBg: N,
    lineHeightLG: j,
    calc: A
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ut(e)), Yn(e)), {
        display: "inline-block",
        width: O,
        margin: 0,
        padding: 0,
        borderRadius: o
      }), ha(e, {
        [`${t}-handler-wrap`]: {
          background: p,
          [`${t}-handler-down`]: {
            borderBlockStart: `${le(n)} ${r} ${E}`
          }
        }
      })), Ca(e, {
        [`${t}-handler-wrap`]: {
          background: N,
          [`${t}-handler-down`]: {
            borderBlockStart: `${le(n)} ${r} ${E}`
          }
        },
        "&:focus-within": {
          [`${t}-handler-wrap`]: {
            background: p
          }
        }
      })), ya(e)), {
        "&-rtl": {
          direction: "rtl",
          [`${t}-input`]: {
            direction: "rtl"
          }
        },
        "&-lg": {
          padding: 0,
          fontSize: a,
          lineHeight: j,
          borderRadius: b,
          [`input${t}-input`]: {
            height: A(s).sub(A(n).mul(2)).equal(),
            padding: `${le(f)} ${le(h)}`
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: w,
          [`input${t}-input`]: {
            height: A(l).sub(A(n).mul(2)).equal(),
            padding: `${le(d)} ${le(u)}`
          }
        },
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          [`${t}-input-wrap`]: {
            input: {
              color: c
            }
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": Object.assign(Object.assign(Object.assign({}, ut(e)), Oa(e)), {
          "&-wrapper": Object.assign(Object.assign(Object.assign({
            display: "inline-block",
            textAlign: "start",
            verticalAlign: "top",
            [`${t}-affix-wrapper`]: {
              width: "100%"
            },
            // Size
            "&-lg": {
              [`${t}-group-addon`]: {
                borderRadius: b,
                fontSize: e.fontSizeLG
              }
            },
            "&-sm": {
              [`${t}-group-addon`]: {
                borderRadius: w
              }
            }
          }, ba(e)), Sa(e)), {
            // Fix the issue of using icons in Space Compact mode
            // https://github.com/ant-design/ant-design/issues/45764
            [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderRadius: 0
              }
            },
            [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
              [`${t}, ${t}-group-addon`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          })
        }),
        [`&-disabled ${t}-input`]: {
          cursor: "not-allowed"
        },
        [t]: {
          "&-input": Object.assign(Object.assign(Object.assign(Object.assign({}, ut(e)), {
            width: "100%",
            padding: `${le(S)} ${le(C)}`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: o,
            outline: 0,
            transition: `all ${y} linear`,
            appearance: "textfield",
            fontSize: "inherit"
          }), $a(e.colorTextPlaceholder)), {
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
              margin: 0,
              /* stylelint-disable-next-line property-no-vendor-prefix */
              webkitAppearance: "none",
              appearance: "none"
            }
          })
        }
      })
    },
    // Handler
    {
      [t]: Object.assign(Object.assign(Object.assign({
        [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
          opacity: 1
        },
        [`${t}-handler-wrap`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          width: e.handleWidth,
          height: "100%",
          borderStartStartRadius: 0,
          borderStartEndRadius: o,
          borderEndEndRadius: o,
          borderEndStartRadius: 0,
          opacity: x,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${y} linear ${y}`,
          // Fix input number inside Menu makes icon too large
          // We arise the selector priority by nest selector here
          // https://github.com/ant-design/ant-design/issues/14367
          [`${t}-handler`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "auto",
            height: "40%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              marginInlineEnd: 0,
              fontSize: e.handleFontSize
            }
          }
        },
        [`${t}-handler`]: {
          height: "50%",
          overflow: "hidden",
          color: g,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${le(n)} ${r} ${E}`,
          transition: `all ${y} linear`,
          "&:active": {
            background: m
          },
          // Hover
          "&:hover": {
            height: "60%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              color: $
            }
          },
          "&-up-inner, &-down-inner": Object.assign(Object.assign({}, gi()), {
            color: g,
            transition: `all ${y} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: o
        },
        [`${t}-handler-down`]: {
          borderEndEndRadius: o
        }
      }, Eo(e, "lg")), Eo(e, "sm")), {
        // Disabled
        "&-disabled, &-readonly": {
          [`${t}-handler-wrap`]: {
            display: "none"
          },
          [`${t}-input`]: {
            color: "inherit"
          }
        },
        [`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]: {
          cursor: "not-allowed"
        },
        [`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]: {
          color: v
        }
      })
    }
  ];
}, Yc = (e) => {
  const {
    componentCls: t,
    paddingBlock: n,
    paddingInline: r,
    inputAffixPadding: o,
    controlWidth: a,
    borderRadiusLG: s,
    borderRadiusSM: l,
    paddingInlineLG: c,
    paddingInlineSM: u,
    paddingBlockLG: d,
    paddingBlockSM: f
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign({
      [`input${t}-input`]: {
        padding: `${le(n)} 0`
      }
    }, Yn(e)), {
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      width: a,
      padding: 0,
      paddingInlineStart: r,
      "&-lg": {
        borderRadius: s,
        paddingInlineStart: c,
        [`input${t}-input`]: {
          padding: `${le(d)} 0`
        }
      },
      "&-sm": {
        borderRadius: l,
        paddingInlineStart: u,
        [`input${t}-input`]: {
          padding: `${le(f)} 0`
        }
      },
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`&-disabled > ${t}-disabled`]: {
        background: "transparent"
      },
      [`> div${t}`]: {
        width: "100%",
        border: "none",
        outline: "none",
        [`&${t}-focused`]: {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}-handler-wrap`]: {
        zIndex: 2
      },
      [t]: {
        color: "inherit",
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          pointerEvents: "none"
        },
        "&-prefix": {
          marginInlineEnd: o
        },
        "&-suffix": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: "100%",
          marginInlineEnd: r,
          marginInlineStart: o
        }
      }
    })
  };
}, Qc = wt("InputNumber", (e) => {
  const t = at(e, Gr(e));
  return [
    kc(t),
    Yc(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Go(t)
  ];
}, Xc, {
  unitless: {
    handleOpacity: !0
  }
});
var Jc = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ja = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = i.useContext(Be), o = i.useRef(null);
  i.useImperativeHandle(t, () => o.current);
  const {
    className: a,
    rootClassName: s,
    size: l,
    disabled: c,
    prefixCls: u,
    addonBefore: d,
    addonAfter: f,
    prefix: h,
    bordered: g,
    readOnly: y,
    status: $,
    controls: C,
    variant: S
  } = e, p = Jc(e, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls", "variant"]), m = n("input-number", u), v = ft(m), [w, b, O] = Qc(m, v), {
    compactSize: x,
    compactItemClassnames: E
  } = Lr(m, r);
  let N = /* @__PURE__ */ i.createElement(Pc, {
    className: `${m}-handler-up-inner`
  }), j = /* @__PURE__ */ i.createElement(Ml, {
    className: `${m}-handler-down-inner`
  });
  const A = typeof C == "boolean" ? C : void 0;
  typeof C == "object" && (N = typeof C.upIcon > "u" ? N : /* @__PURE__ */ i.createElement("span", {
    className: `${m}-handler-up-inner`
  }, C.upIcon), j = typeof C.downIcon > "u" ? j : /* @__PURE__ */ i.createElement("span", {
    className: `${m}-handler-down-inner`
  }, C.downIcon));
  const {
    hasFeedback: T,
    status: P,
    isFormItemInput: V,
    feedbackIcon: H
  } = i.useContext(et), M = kn(P, $), _ = kt((Z) => {
    var U;
    return (U = l ?? x) !== null && U !== void 0 ? U : Z;
  }), B = i.useContext(Un), I = c ?? B, [R, z] = Hr(S, g), ee = T && /* @__PURE__ */ i.createElement(i.Fragment, null, H), F = q({
    [`${m}-lg`]: _ === "large",
    [`${m}-sm`]: _ === "small",
    [`${m}-rtl`]: r === "rtl",
    [`${m}-in-form-item`]: V
  }, b), L = `${m}-group`, G = /* @__PURE__ */ i.createElement(_a, Object.assign({
    ref: o,
    disabled: I,
    className: q(O, v, a, s, E),
    upHandler: N,
    downHandler: j,
    prefixCls: m,
    readOnly: y,
    controls: A,
    prefix: h,
    suffix: ee,
    addonAfter: f && /* @__PURE__ */ i.createElement(cn, null, /* @__PURE__ */ i.createElement(Bn, {
      override: !0,
      status: !0
    }, f)),
    addonBefore: d && /* @__PURE__ */ i.createElement(cn, null, /* @__PURE__ */ i.createElement(Bn, {
      override: !0,
      status: !0
    }, d)),
    classNames: {
      input: F,
      variant: q({
        [`${m}-${R}`]: z
      }, dn(m, M, T)),
      affixWrapper: q({
        [`${m}-affix-wrapper-sm`]: _ === "small",
        [`${m}-affix-wrapper-lg`]: _ === "large",
        [`${m}-affix-wrapper-rtl`]: r === "rtl"
      }, b),
      wrapper: q({
        [`${L}-rtl`]: r === "rtl"
      }, b),
      groupWrapper: q({
        [`${m}-group-wrapper-sm`]: _ === "small",
        [`${m}-group-wrapper-lg`]: _ === "large",
        [`${m}-group-wrapper-rtl`]: r === "rtl",
        [`${m}-group-wrapper-${R}`]: z
      }, dn(`${m}-group-wrapper`, M, T), b)
    }
  }, p));
  return w(G);
}), za = ja, Zc = (e) => /* @__PURE__ */ i.createElement(qo, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: !0
      }
    }
  }
}, /* @__PURE__ */ i.createElement(ja, Object.assign({}, e)));
za._InternalPanelDoNotUseOrYouWillBeFired = Zc;
const of = za, eu = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = i.useContext(Be), {
    prefixCls: r,
    className: o
  } = e, a = t("input-group", r), s = t("input"), [l, c] = Kr(s), u = q(a, {
    [`${a}-lg`]: e.size === "large",
    [`${a}-sm`]: e.size === "small",
    [`${a}-compact`]: e.compact,
    [`${a}-rtl`]: n === "rtl"
  }, c, o), d = i.useContext(et), f = i.useMemo(() => Object.assign(Object.assign({}, d), {
    isFormItemInput: !1
  }), [d]);
  return l(/* @__PURE__ */ i.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ i.createElement(et.Provider, {
    value: f
  }, e.children)));
}, tu = eu, nu = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ se.createElement(Ar, null)
  }), t;
}, Ta = nu;
function Aa(e, t) {
  const n = i.useRef([]), r = () => {
    n.current.push(setTimeout(() => {
      var o, a, s, l;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((s = e.current) === null || s === void 0) && s.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"));
    }));
  };
  return i.useEffect(() => (t && r(), () => n.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), r;
}
function ru(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var ou = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function au(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
        break;
    }
  }
}
const iu = /* @__PURE__ */ i.forwardRef((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o = !0,
    status: a,
    size: s,
    disabled: l,
    onBlur: c,
    onFocus: u,
    suffix: d,
    allowClear: f,
    addonAfter: h,
    addonBefore: g,
    className: y,
    style: $,
    styles: C,
    rootClassName: S,
    onChange: p,
    classNames: m,
    variant: v
  } = e, w = ou(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]), {
    getPrefixCls: b,
    direction: O,
    input: x
  } = se.useContext(Be), E = b("input", r), N = i.useRef(null), j = ft(E), [A, T, P] = Kr(E, j), {
    compactSize: V,
    compactItemClassnames: H
  } = Lr(E, O), M = kt((ge) => {
    var X;
    return (X = s ?? V) !== null && X !== void 0 ? X : ge;
  }), _ = se.useContext(Un), B = l ?? _, {
    status: I,
    hasFeedback: R,
    feedbackIcon: z
  } = i.useContext(et), ee = kn(I, a), F = ru(e) || !!R;
  i.useRef(F);
  const L = Aa(N, !0), G = (ge) => {
    L(), c == null || c(ge);
  }, Z = (ge) => {
    L(), u == null || u(ge);
  }, U = (ge) => {
    L(), p == null || p(ge);
  }, W = (R || d) && /* @__PURE__ */ se.createElement(se.Fragment, null, d, R && z), ie = Ta(f ?? (x == null ? void 0 : x.allowClear)), [re, fe] = Hr(v, o);
  return A(/* @__PURE__ */ se.createElement(Bc, Object.assign({
    ref: zt(t, N),
    prefixCls: E,
    autoComplete: x == null ? void 0 : x.autoComplete
  }, w, {
    disabled: B,
    onBlur: G,
    onFocus: Z,
    style: Object.assign(Object.assign({}, x == null ? void 0 : x.style), $),
    styles: Object.assign(Object.assign({}, x == null ? void 0 : x.styles), C),
    suffix: W,
    allowClear: ie,
    className: q(y, S, P, j, H, x == null ? void 0 : x.className),
    onChange: U,
    addonAfter: h && /* @__PURE__ */ se.createElement(cn, null, /* @__PURE__ */ se.createElement(Bn, {
      override: !0,
      status: !0
    }, h)),
    addonBefore: g && /* @__PURE__ */ se.createElement(cn, null, /* @__PURE__ */ se.createElement(Bn, {
      override: !0,
      status: !0
    }, g)),
    classNames: Object.assign(Object.assign(Object.assign({}, m), x == null ? void 0 : x.classNames), {
      input: q({
        [`${E}-sm`]: M === "small",
        [`${E}-lg`]: M === "large",
        [`${E}-rtl`]: O === "rtl"
      }, m == null ? void 0 : m.input, (n = x == null ? void 0 : x.classNames) === null || n === void 0 ? void 0 : n.input, T),
      variant: q({
        [`${E}-${re}`]: fe
      }, dn(E, ee)),
      affixWrapper: q({
        [`${E}-affix-wrapper-sm`]: M === "small",
        [`${E}-affix-wrapper-lg`]: M === "large",
        [`${E}-affix-wrapper-rtl`]: O === "rtl"
      }, T),
      wrapper: q({
        [`${E}-group-rtl`]: O === "rtl"
      }, T),
      groupWrapper: q({
        [`${E}-group-wrapper-sm`]: M === "small",
        [`${E}-group-wrapper-lg`]: M === "large",
        [`${E}-group-wrapper-rtl`]: O === "rtl",
        [`${E}-group-wrapper-${re}`]: fe
      }, dn(`${E}-group-wrapper`, ee, R), T)
    })
  })));
}), Jn = iu, su = (e) => {
  const {
    componentCls: t,
    paddingXS: n
  } = e;
  return {
    [`${t}`]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: n,
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-input`]: {
        textAlign: "center",
        paddingInline: e.paddingXXS
      },
      // ================= Size =================
      [`&${t}-sm ${t}-input`]: {
        paddingInline: e.calc(e.paddingXXS).div(2).equal()
      },
      [`&${t}-lg ${t}-input`]: {
        paddingInline: e.paddingXS
      }
    }
  };
}, lu = wt(["Input", "OTP"], (e) => {
  const t = at(e, Gr(e));
  return [su(t)];
}, qr);
var cu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const uu = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    value: n,
    onChange: r,
    onActiveChange: o,
    index: a
  } = e, s = cu(e, ["value", "onChange", "onActiveChange", "index"]), l = (h) => {
    r(a, h.target.value);
  }, c = i.useRef(null);
  i.useImperativeHandle(t, () => c.current);
  const u = () => {
    ot(() => {
      var h;
      const g = (h = c.current) === null || h === void 0 ? void 0 : h.input;
      document.activeElement === g && g && g.select();
    });
  }, d = (h) => {
    let {
      key: g
    } = h;
    g === "ArrowLeft" ? o(a - 1) : g === "ArrowRight" && o(a + 1), u();
  }, f = (h) => {
    h.key === "Backspace" && !n && o(a - 1), u();
  };
  return /* @__PURE__ */ i.createElement(Jn, Object.assign({}, s, {
    ref: c,
    value: n,
    onInput: l,
    onFocus: u,
    onKeyDown: d,
    onKeyUp: f,
    onMouseDown: u,
    onMouseUp: u
  }));
}), du = uu;
var fu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Tn(e) {
  return e.split("");
}
const mu = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: n,
    length: r = 6,
    size: o,
    defaultValue: a,
    value: s,
    onChange: l,
    formatter: c,
    variant: u,
    disabled: d,
    status: f,
    autoFocus: h
  } = e, g = fu(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "variant", "disabled", "status", "autoFocus"]), {
    getPrefixCls: y,
    direction: $
  } = i.useContext(Be), C = y("otp", n), S = vi(g, {
    aria: !0,
    data: !0,
    attr: !0
  }), p = ft(C), [m, v, w] = lu(C, p), b = kt((I) => o ?? I), O = i.useContext(et), x = kn(O.status, f), E = i.useMemo(() => Object.assign(Object.assign({}, O), {
    status: x,
    hasFeedback: !1,
    feedbackIcon: null
  }), [O, x]), N = i.useRef(null), j = i.useRef({});
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var I;
      (I = j.current[0]) === null || I === void 0 || I.focus();
    },
    blur: () => {
      var I;
      for (let R = 0; R < r; R += 1)
        (I = j.current[R]) === null || I === void 0 || I.blur();
    },
    nativeElement: N.current
  }));
  const A = (I) => c ? c(I) : I, [T, P] = i.useState(Tn(A(a || "")));
  i.useEffect(() => {
    s && P(Tn(s));
  }, [s]);
  const V = rt((I) => {
    P(I), l && I.length === r && I.every((R) => R) && I.some((R, z) => T[z] !== R) && l(I.join(""));
  }), H = rt((I, R) => {
    let z = je(T);
    for (let F = 0; F < I; F += 1)
      z[F] || (z[F] = "");
    R.length <= 1 ? z[I] = R : z = z.slice(0, I).concat(Tn(R)), z = z.slice(0, r);
    for (let F = z.length - 1; F >= 0 && !z[F]; F -= 1)
      z.pop();
    const ee = A(z.map((F) => F || " ").join(""));
    return z = Tn(ee).map((F, L) => F === " " && !z[L] ? z[L] : F), z;
  }), M = (I, R) => {
    var z;
    const ee = H(I, R), F = Math.min(I + R.length, r - 1);
    F !== I && ((z = j.current[F]) === null || z === void 0 || z.focus()), V(ee);
  }, _ = (I) => {
    var R;
    (R = j.current[I]) === null || R === void 0 || R.focus();
  }, B = {
    variant: u,
    disabled: d,
    status: x
  };
  return m(/* @__PURE__ */ i.createElement("div", Object.assign({}, S, {
    ref: N,
    className: q(C, {
      [`${C}-sm`]: b === "small",
      [`${C}-lg`]: b === "large",
      [`${C}-rtl`]: $ === "rtl"
    }, w, v)
  }), /* @__PURE__ */ i.createElement(et.Provider, {
    value: E
  }, new Array(r).fill(0).map((I, R) => {
    const z = `otp-${R}`, ee = T[R] || "";
    return /* @__PURE__ */ i.createElement(du, Object.assign({
      ref: (F) => {
        j.current[R] = F;
      },
      key: z,
      index: R,
      size: b,
      htmlSize: 1,
      className: `${C}-input`,
      onChange: M,
      value: ee,
      onActiveChange: _,
      autoFocus: R === 0 && h
    }, B));
  }))));
}), gu = mu;
var vu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const pu = vu;
var hu = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: pu
  }));
}, bu = /* @__PURE__ */ i.forwardRef(hu);
const yu = bu;
var wu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const Cu = wu;
var Su = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: Cu
  }));
}, $u = /* @__PURE__ */ i.forwardRef(Su);
const xu = $u;
var Eu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ou = (e) => e ? /* @__PURE__ */ i.createElement(xu, null) : /* @__PURE__ */ i.createElement(yu, null), Iu = {
  click: "onClick",
  hover: "onMouseOver"
}, Ru = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    visibilityToggle: n = !0
  } = e, r = typeof n == "object" && n.visible !== void 0, [o, a] = i.useState(() => r ? n.visible : !1), s = i.useRef(null);
  i.useEffect(() => {
    r && a(n.visible);
  }, [r, n]);
  const l = Aa(s), c = () => {
    const {
      disabled: w
    } = e;
    w || (o && l(), a((b) => {
      var O;
      const x = !b;
      return typeof n == "object" && ((O = n.onVisibleChange) === null || O === void 0 || O.call(n, x)), x;
    }));
  }, u = (w) => {
    const {
      action: b = "click",
      iconRender: O = Ou
    } = e, x = Iu[b] || "", E = O(o), N = {
      [x]: c,
      className: `${w}-icon`,
      key: "passwordIcon",
      onMouseDown: (j) => {
        j.preventDefault();
      },
      onMouseUp: (j) => {
        j.preventDefault();
      }
    };
    return /* @__PURE__ */ i.cloneElement(/* @__PURE__ */ i.isValidElement(E) ? E : /* @__PURE__ */ i.createElement("span", null, E), N);
  }, {
    className: d,
    prefixCls: f,
    inputPrefixCls: h,
    size: g
  } = e, y = Eu(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: $
  } = i.useContext(Be), C = $("input", h), S = $("input-password", f), p = n && u(S), m = q(S, d, {
    [`${S}-${g}`]: !!g
  }), v = Object.assign(Object.assign({}, Dr(y, ["suffix", "iconRender", "visibilityToggle"])), {
    type: o ? "text" : "password",
    className: m,
    prefixCls: C,
    suffix: p
  });
  return g && (v.size = g), /* @__PURE__ */ i.createElement(Jn, Object.assign({
    ref: zt(t, s)
  }, v));
}), Nu = Ru;
var Mu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Pu = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: n,
    inputPrefixCls: r,
    className: o,
    size: a,
    suffix: s,
    enterButton: l = !1,
    addonAfter: c,
    loading: u,
    disabled: d,
    onSearch: f,
    onChange: h,
    onCompositionStart: g,
    onCompositionEnd: y
  } = e, $ = Mu(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: C,
    direction: S
  } = i.useContext(Be), p = i.useRef(!1), m = C("input-search", n), v = C("input", r), {
    compactSize: w
  } = Lr(m, S), b = kt((I) => {
    var R;
    return (R = a ?? w) !== null && R !== void 0 ? R : I;
  }), O = i.useRef(null), x = (I) => {
    I && I.target && I.type === "click" && f && f(I.target.value, I, {
      source: "clear"
    }), h && h(I);
  }, E = (I) => {
    var R;
    document.activeElement === ((R = O.current) === null || R === void 0 ? void 0 : R.input) && I.preventDefault();
  }, N = (I) => {
    var R, z;
    f && f((z = (R = O.current) === null || R === void 0 ? void 0 : R.input) === null || z === void 0 ? void 0 : z.value, I, {
      source: "input"
    });
  }, j = (I) => {
    p.current || u || N(I);
  }, A = typeof l == "boolean" ? /* @__PURE__ */ i.createElement(Tl, null) : null, T = `${m}-button`;
  let P;
  const V = l || {}, H = V.type && V.type.__ANT_BUTTON === !0;
  H || V.type === "button" ? P = Fn(V, Object.assign({
    onMouseDown: E,
    onClick: (I) => {
      var R, z;
      (z = (R = V == null ? void 0 : V.props) === null || R === void 0 ? void 0 : R.onClick) === null || z === void 0 || z.call(R, I), N(I);
    },
    key: "enterButton"
  }, H ? {
    className: T,
    size: b
  } : {})) : P = /* @__PURE__ */ i.createElement(pi, {
    className: T,
    type: l ? "primary" : void 0,
    size: b,
    disabled: d,
    key: "enterButton",
    onMouseDown: E,
    onClick: N,
    loading: u,
    icon: A
  }, l), c && (P = [P, Fn(c, {
    key: "addonAfter"
  })]);
  const M = q(m, {
    [`${m}-rtl`]: S === "rtl",
    [`${m}-${b}`]: !!b,
    [`${m}-with-button`]: !!l
  }, o), _ = (I) => {
    p.current = !0, g == null || g(I);
  }, B = (I) => {
    p.current = !1, y == null || y(I);
  };
  return /* @__PURE__ */ i.createElement(Jn, Object.assign({
    ref: zt(O, t),
    onPressEnter: j
  }, $, {
    size: b,
    onCompositionStart: _,
    onCompositionEnd: B,
    prefixCls: v,
    addonAfter: P,
    suffix: s,
    onChange: x,
    className: M,
    disabled: d
  }));
}), _u = Pu;
var ju = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, zu = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], wr = {}, ke;
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && wr[n])
    return wr[n];
  var r = window.getComputedStyle(e), o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), s = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = zu.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), c = {
    sizingStyle: l,
    paddingSize: a,
    borderSize: s,
    boxSizing: o
  };
  return t && n && (wr[n] = c), c;
}
function Au(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  ke || (ke = document.createElement("textarea"), ke.setAttribute("tab-index", "-1"), ke.setAttribute("aria-hidden", "true"), document.body.appendChild(ke)), e.getAttribute("wrap") ? ke.setAttribute("wrap", e.getAttribute("wrap")) : ke.removeAttribute("wrap");
  var o = Tu(e, t), a = o.paddingSize, s = o.borderSize, l = o.boxSizing, c = o.sizingStyle;
  ke.setAttribute("style", "".concat(c, ";").concat(ju)), ke.value = e.value || e.placeholder || "";
  var u = void 0, d = void 0, f, h = ke.scrollHeight;
  if (l === "border-box" ? h += s : l === "content-box" && (h -= a), n !== null || r !== null) {
    ke.value = " ";
    var g = ke.scrollHeight - a;
    n !== null && (u = g * n, l === "border-box" && (u = u + a + s), h = Math.max(u, h)), r !== null && (d = g * r, l === "border-box" && (d = d + a + s), f = h > d ? "" : "hidden", h = Math.min(d, h));
  }
  var y = {
    height: h,
    overflowY: f,
    resize: "none"
  };
  return u && (y.minHeight = u), d && (y.maxHeight = d), y;
}
var Fu = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Cr = 0, Sr = 1, $r = 2, Bu = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls;
  n.onPressEnter;
  var o = n.defaultValue, a = n.value, s = n.autoSize, l = n.onResize, c = n.className, u = n.style, d = n.disabled, f = n.onChange;
  n.onInternalAutoSize;
  var h = Ge(n, Fu), g = qn(o, {
    value: a,
    postState: function(F) {
      return F ?? "";
    }
  }), y = ue(g, 2), $ = y[0], C = y[1], S = function(F) {
    C(F.target.value), f == null || f(F);
  }, p = i.useRef();
  i.useImperativeHandle(t, function() {
    return {
      textArea: p.current
    };
  });
  var m = i.useMemo(function() {
    return s && vn(s) === "object" ? [s.minRows, s.maxRows] : [];
  }, [s]), v = ue(m, 2), w = v[0], b = v[1], O = !!s, x = function() {
    try {
      if (document.activeElement === p.current) {
        var F = p.current, L = F.selectionStart, G = F.selectionEnd, Z = F.scrollTop;
        p.current.setSelectionRange(L, G), p.current.scrollTop = Z;
      }
    } catch {
    }
  }, E = i.useState($r), N = ue(E, 2), j = N[0], A = N[1], T = i.useState(), P = ue(T, 2), V = P[0], H = P[1], M = function() {
    A(Cr);
  };
  Le(function() {
    O && M();
  }, [a, w, b, O]), Le(function() {
    if (j === Cr)
      A(Sr);
    else if (j === Sr) {
      var ee = Au(p.current, !1, w, b);
      A($r), H(ee);
    } else
      x();
  }, [j]);
  var _ = i.useRef(), B = function() {
    ot.cancel(_.current);
  }, I = function(F) {
    j === $r && (l == null || l(F), s && (B(), _.current = ot(function() {
      M();
    })));
  };
  i.useEffect(function() {
    return B;
  }, []);
  var R = O ? V : null, z = me(me({}, u), R);
  return (j === Cr || j === Sr) && (z.overflowY = "hidden", z.overflowX = "hidden"), /* @__PURE__ */ i.createElement(Yt, {
    onResize: I,
    disabled: !(s || l)
  }, /* @__PURE__ */ i.createElement("textarea", Re({}, h, {
    ref: p,
    style: z,
    className: q(r, c, Se({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: $,
    onChange: S
  })));
}), Du = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"], Lu = /* @__PURE__ */ se.forwardRef(function(e, t) {
  var n, r, o = e.defaultValue, a = e.value, s = e.onFocus, l = e.onBlur, c = e.onChange, u = e.allowClear, d = e.maxLength, f = e.onCompositionStart, h = e.onCompositionEnd, g = e.suffix, y = e.prefixCls, $ = y === void 0 ? "rc-textarea" : y, C = e.showCount, S = e.count, p = e.className, m = e.style, v = e.disabled, w = e.hidden, b = e.classNames, O = e.styles, x = e.onResize, E = Ge(e, Du), N = qn(o, {
    value: a,
    defaultValue: o
  }), j = ue(N, 2), A = j[0], T = j[1], P = A == null ? "" : String(A), V = se.useState(!1), H = ue(V, 2), M = H[0], _ = H[1], B = se.useRef(!1), I = se.useState(null), R = ue(I, 2), z = R[0], ee = R[1], F = i.useRef(null), L = function() {
    var oe;
    return (oe = F.current) === null || oe === void 0 ? void 0 : oe.textArea;
  }, G = function() {
    L().focus();
  };
  i.useImperativeHandle(t, function() {
    return {
      resizableTextArea: F.current,
      focus: G,
      blur: function() {
        L().blur();
      }
    };
  }), i.useEffect(function() {
    _(function(Ne) {
      return !v && Ne;
    });
  }, [v]);
  var Z = se.useState(null), U = ue(Z, 2), W = U[0], ie = U[1];
  se.useEffect(function() {
    if (W) {
      var Ne;
      (Ne = L()).setSelectionRange.apply(Ne, je(W));
    }
  }, [W]);
  var re = Pa(S, C), fe = (n = re.max) !== null && n !== void 0 ? n : d, ge = Number(fe) > 0, X = re.strategy(P), Ce = !!fe && X > fe, $e = function(oe, ye) {
    var Ee = ye;
    !B.current && re.exceedFormatter && re.max && re.strategy(ye) > re.max && (Ee = re.exceedFormatter(ye, {
      max: re.max
    }), ye !== Ee && ie([L().selectionStart || 0, L().selectionEnd || 0])), T(Ee), Hn(oe.currentTarget, oe, c, Ee);
  }, he = function(oe) {
    B.current = !0, f == null || f(oe);
  }, we = function(oe) {
    B.current = !1, $e(oe, oe.currentTarget.value), h == null || h(oe);
  }, Y = function(oe) {
    $e(oe, oe.target.value);
  }, J = function(oe) {
    var ye = E.onPressEnter, Ee = E.onKeyDown;
    oe.key === "Enter" && ye && ye(oe), Ee == null || Ee(oe);
  }, ve = function(oe) {
    _(!0), s == null || s(oe);
  }, Ie = function(oe) {
    _(!1), l == null || l(oe);
  }, de = function(oe) {
    T(""), G(), Hn(L(), oe, c);
  }, pe = g, be;
  re.show && (re.showFormatter ? be = re.showFormatter({
    value: P,
    count: X,
    maxLength: fe
  }) : be = "".concat(X).concat(ge ? " / ".concat(fe) : ""), pe = /* @__PURE__ */ se.createElement(se.Fragment, null, pe, /* @__PURE__ */ se.createElement("span", {
    className: q("".concat($, "-data-count"), b == null ? void 0 : b.count),
    style: O == null ? void 0 : O.count
  }, be)));
  var xe = function(oe) {
    var ye;
    x == null || x(oe), (ye = L()) !== null && ye !== void 0 && ye.style.height && ee(!0);
  }, tt = !E.autoSize && !C && !u;
  return /* @__PURE__ */ se.createElement(Yr, {
    value: P,
    allowClear: u,
    handleReset: de,
    suffix: pe,
    prefixCls: $,
    classNames: me(me({}, b), {}, {
      affixWrapper: q(b == null ? void 0 : b.affixWrapper, (r = {}, Se(r, "".concat($, "-show-count"), C), Se(r, "".concat($, "-textarea-allow-clear"), u), r))
    }),
    disabled: v,
    focused: M,
    className: q(p, Ce && "".concat($, "-out-of-range")),
    style: me(me({}, m), z && !tt ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof be == "string" ? be : void 0
      }
    },
    hidden: w
  }, /* @__PURE__ */ se.createElement(Bu, Re({}, E, {
    maxLength: d,
    onKeyDown: J,
    onChange: Y,
    onFocus: ve,
    onBlur: Ie,
    onCompositionStart: he,
    onCompositionEnd: we,
    className: q(b == null ? void 0 : b.textarea),
    style: me(me({}, O == null ? void 0 : O.textarea), {}, {
      resize: m == null ? void 0 : m.resize
    }),
    disabled: v,
    prefixCls: $,
    onResize: xe,
    ref: F
  })));
}), Wu = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Vu = /* @__PURE__ */ i.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    bordered: a = !0,
    size: s,
    disabled: l,
    status: c,
    allowClear: u,
    classNames: d,
    rootClassName: f,
    className: h,
    style: g,
    styles: y,
    variant: $
  } = e, C = Wu(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]), {
    getPrefixCls: S,
    direction: p,
    textArea: m
  } = i.useContext(Be), v = kt(s), w = i.useContext(Un), b = l ?? w, {
    status: O,
    hasFeedback: x,
    feedbackIcon: E
  } = i.useContext(et), N = kn(O, c), j = i.useRef(null);
  i.useImperativeHandle(t, () => {
    var I;
    return {
      resizableTextArea: (I = j.current) === null || I === void 0 ? void 0 : I.resizableTextArea,
      focus: (R) => {
        var z, ee;
        au((ee = (z = j.current) === null || z === void 0 ? void 0 : z.resizableTextArea) === null || ee === void 0 ? void 0 : ee.textArea, R);
      },
      blur: () => {
        var R;
        return (R = j.current) === null || R === void 0 ? void 0 : R.blur();
      }
    };
  });
  const A = S("input", o), T = ft(A), [P, V, H] = Kr(A, T), [M, _] = Hr($, a), B = Ta(u ?? (m == null ? void 0 : m.allowClear));
  return P(/* @__PURE__ */ i.createElement(Lu, Object.assign({
    autoComplete: m == null ? void 0 : m.autoComplete
  }, C, {
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), g),
    styles: Object.assign(Object.assign({}, m == null ? void 0 : m.styles), y),
    disabled: b,
    allowClear: B,
    className: q(H, T, h, f, m == null ? void 0 : m.className),
    classNames: Object.assign(Object.assign(Object.assign({}, d), m == null ? void 0 : m.classNames), {
      textarea: q({
        [`${A}-sm`]: v === "small",
        [`${A}-lg`]: v === "large"
      }, V, d == null ? void 0 : d.textarea, (n = m == null ? void 0 : m.classNames) === null || n === void 0 ? void 0 : n.textarea),
      variant: q({
        [`${A}-${M}`]: _
      }, dn(A, N)),
      affixWrapper: q(`${A}-textarea-affix-wrapper`, {
        [`${A}-affix-wrapper-rtl`]: p === "rtl",
        [`${A}-affix-wrapper-sm`]: v === "small",
        [`${A}-affix-wrapper-lg`]: v === "large",
        [`${A}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, V)
    }),
    prefixCls: A,
    suffix: x && /* @__PURE__ */ i.createElement("span", {
      className: `${A}-textarea-suffix`
    }, E),
    ref: j
  })));
}), Hu = Vu, Qt = Jn;
Qt.Group = tu;
Qt.Search = _u;
Qt.TextArea = Hu;
Qt.Password = Nu;
Qt.OTP = gu;
const af = Qt;
function Gn(e) {
  const [t, n] = i.useState(e);
  return i.useEffect(() => {
    const r = setTimeout(() => {
      n(e);
    }, e.length ? 0 : 10);
    return () => {
      clearTimeout(r);
    };
  }, [e]), t;
}
const Gu = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-show-help`, r = `${t}-show-help-item`;
  return {
    [n]: {
      // Explain holder
      transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [r]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
        [`&${r}-appear, &${r}-enter`]: {
          transform: "translateY(-5px)",
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${r}-leave-active`]: {
          transform: "translateY(-5px)"
        }
      }
    }
  };
}, qu = (e) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: e.marginLG,
    padding: 0,
    color: e.colorTextDescription,
    fontSize: e.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
    outline: 0,
    boxShadow: `0 0 0 ${le(e.controlOutlineWidth)} ${e.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  }
}), Oo = (e, t) => {
  const {
    formItemCls: n
  } = e;
  return {
    [n]: {
      [`${n}-label > label`]: {
        height: t
      },
      [`${n}-control-input`]: {
        minHeight: t
      }
    }
  };
}, Uu = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [e.componentCls]: Object.assign(Object.assign(Object.assign({}, ut(e)), qu(e)), {
      [`${t}-text`]: {
        display: "inline-block",
        paddingInlineEnd: e.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": Object.assign({}, Oo(e, e.controlHeightSM)),
      "&-large": Object.assign({}, Oo(e, e.controlHeightLG))
    })
  };
}, Ku = (e) => {
  const {
    formItemCls: t,
    iconCls: n,
    componentCls: r,
    rootPrefixCls: o,
    labelRequiredMarkColor: a,
    labelColor: s,
    labelFontSize: l,
    labelHeight: c,
    labelColonMarginInlineStart: u,
    labelColonMarginInlineEnd: d,
    itemMarginBottom: f
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, ut(e)), {
      marginBottom: f,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${o}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${t}-split`]: {
          color: e.colorError
        }
      },
      "&-has-error": {
        [`${t}-split`]: {
          color: e.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${t}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: e.lineHeight,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: c,
          color: s,
          fontSize: l,
          [`> ${n}`]: {
            fontSize: e.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: e.marginXXS,
            color: a,
            fontSize: e.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${r}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-optional`]: {
            display: "inline-block",
            marginInlineStart: e.marginXXS,
            color: e.colorTextDescription,
            [`${r}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${t}-tooltip`]: {
            color: e.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: e.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: u,
            marginInlineEnd: d
          },
          [`&${t}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${t}-control`]: {
        "--ant-display": "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: e.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [t]: {
        "&-explain, &-extra": {
          clear: "both",
          color: e.colorTextDescription,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: e.controlHeightSM,
          transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: e.colorError
          },
          "&-warning": {
            color: e.colorWarning
          }
        }
      },
      [`&-with-help ${t}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${t}-feedback-icon`]: {
        fontSize: e.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: Uo,
        animationDuration: e.motionDurationMid,
        animationTimingFunction: e.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: e.colorSuccess
        },
        "&-error": {
          color: e.colorError
        },
        "&-warning": {
          color: e.colorWarning
        },
        "&-validating": {
          color: e.colorPrimary
        }
      }
    })
  };
}, Xu = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${t}-horizontal`]: {
      [`${n}-label`]: {
        flexGrow: 0
      },
      [`${n}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      // https://github.com/ant-design/ant-design/issues/32980
      // https://github.com/ant-design/ant-design/issues/34903
      // https://github.com/ant-design/ant-design/issues/44538
      [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: {
        [`& + ${n}-control`]: {
          minWidth: "unset"
        }
      }
    }
  };
}, ku = (e) => {
  const {
    componentCls: t,
    formItemCls: n
  } = e;
  return {
    [`${t}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [n]: {
        flex: "none",
        marginInlineEnd: e.margin,
        marginBottom: 0,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${n}-label,
        > ${n}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${n}-label`]: {
          flex: "none"
        },
        [`${t}-text`]: {
          display: "inline-block"
        },
        [`${n}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
}, Ut = (e) => ({
  padding: e.verticalLabelPadding,
  margin: e.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: "hidden"
    }
  }
}), Yu = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
  } = e;
  return {
    [`${n} ${n}-label`]: Ut(e),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${t}:not(${t}-inline)`]: {
      [n]: {
        flexWrap: "wrap",
        [`${n}-label, ${n}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${r}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
}, Qu = (e) => {
  const {
    componentCls: t,
    formItemCls: n,
    rootPrefixCls: r
  } = e;
  return {
    [`${t}-vertical`]: {
      [n]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${t}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: Ut(e),
    [`@media (max-width: ${le(e.screenXSMax)})`]: [Yu(e), {
      [t]: {
        [`.${r}-col-xs-24${n}-label`]: Ut(e)
      }
    }],
    [`@media (max-width: ${le(e.screenSMMax)})`]: {
      [t]: {
        [`.${r}-col-sm-24${n}-label`]: Ut(e)
      }
    },
    [`@media (max-width: ${le(e.screenMDMax)})`]: {
      [t]: {
        [`.${r}-col-md-24${n}-label`]: Ut(e)
      }
    },
    [`@media (max-width: ${le(e.screenLGMax)})`]: {
      [t]: {
        [`.${r}-col-lg-24${n}-label`]: Ut(e)
      }
    }
  };
}, Ju = (e) => ({
  labelRequiredMarkColor: e.colorError,
  labelColor: e.colorTextHeading,
  labelFontSize: e.fontSize,
  labelHeight: e.controlHeight,
  labelColonMarginInlineStart: e.marginXXS / 2,
  labelColonMarginInlineEnd: e.marginXS,
  itemMarginBottom: e.marginLG,
  verticalLabelPadding: `0 0 ${e.paddingXS}px`,
  verticalLabelMargin: 0
}), Fa = (e, t) => at(e, {
  formItemCls: `${e.componentCls}-item`,
  rootPrefixCls: t
}), Qr = wt("Form", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Fa(e, n);
  return [Uu(r), Ku(r), Gu(r), Xu(r), ku(r), Qu(r), Zs(r), Uo];
}, Ju, {
  // Let From style before the Grid
  // ref https://github.com/ant-design/ant-design/issues/44386
  order: -1e3
}), Io = [];
function xr(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return {
    key: typeof e == "string" ? e : `${t}-${r}`,
    error: e,
    errorStatus: n
  };
}
const Zu = (e) => {
  let {
    help: t,
    helpStatus: n,
    errors: r = Io,
    warnings: o = Io,
    className: a,
    fieldId: s,
    onVisibleChanged: l
  } = e;
  const {
    prefixCls: c
  } = i.useContext(Wr), u = `${c}-item-explain`, d = ft(c), [f, h, g] = Qr(c, d), y = i.useMemo(() => Zr(c), [c]), $ = Gn(r), C = Gn(o), S = i.useMemo(() => t != null ? [xr(t, "help", n)] : [].concat(je($.map((m, v) => xr(m, "error", "error", v))), je(C.map((m, v) => xr(m, "warning", "warning", v)))), [t, n, $, C]), p = {};
  return s && (p.id = `${s}_help`), f(/* @__PURE__ */ i.createElement(Br, {
    motionDeadline: y.motionDeadline,
    motionName: `${c}-show-help`,
    visible: !!S.length,
    onVisibleChanged: l
  }, (m) => {
    const {
      className: v,
      style: w
    } = m;
    return /* @__PURE__ */ i.createElement("div", Object.assign({}, p, {
      className: q(u, v, g, d, a, h),
      style: w,
      role: "alert"
    }), /* @__PURE__ */ i.createElement(hi, Object.assign({
      keys: S
    }, Zr(c), {
      motionName: `${c}-show-help-item`,
      component: !1
    }), (b) => {
      const {
        key: O,
        error: x,
        errorStatus: E,
        className: N,
        style: j
      } = b;
      return /* @__PURE__ */ i.createElement("div", {
        key: O,
        className: q(N, {
          [`${u}-${E}`]: E
        }),
        style: j
      }, x);
    }));
  }));
}, Ba = Zu, ed = ["parentNode"], td = "form_item";
function ln(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function Da(e, t) {
  if (!e.length)
    return;
  const n = e.join("_");
  return t ? `${t}_${n}` : ed.includes(n) ? `${td}_${n}` : n;
}
function La(e, t, n, r, o, a) {
  let s = r;
  return a !== void 0 ? s = a : n.validating ? s = "validating" : e.length ? s = "error" : t.length ? s = "warning" : (n.touched || o && n.validated) && (s = "success"), s;
}
function Ro(e) {
  return ln(e).join("_");
}
function Wa(e) {
  const [t] = bi(), n = i.useRef({}), r = i.useMemo(() => e ?? Object.assign(Object.assign({}, t), {
    __INTERNAL__: {
      itemRef: (o) => (a) => {
        const s = Ro(o);
        a ? n.current[s] = a : delete n.current[s];
      }
    },
    scrollToField: function(o) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const s = ln(o), l = Da(s, r.__INTERNAL__.name), c = l ? document.getElementById(l) : null;
      c && ws(c, Object.assign({
        scrollMode: "if-needed",
        block: "nearest"
      }, a));
    },
    getFieldInstance: (o) => {
      const a = Ro(o);
      return n.current[a];
    }
  }), [e, t]);
  return [r];
}
var nd = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const rd = (e, t) => {
  const n = i.useContext(Un), {
    getPrefixCls: r,
    direction: o,
    form: a
  } = i.useContext(Be), {
    prefixCls: s,
    className: l,
    rootClassName: c,
    size: u,
    disabled: d = n,
    form: f,
    colon: h,
    labelAlign: g,
    labelWrap: y,
    labelCol: $,
    wrapperCol: C,
    hideRequiredMark: S,
    layout: p = "horizontal",
    scrollToFirstError: m,
    requiredMark: v,
    onFinishFailed: w,
    name: b,
    style: O,
    feedbackIcons: x,
    variant: E
  } = e, N = nd(e, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]), j = kt(u), A = i.useContext(yi), T = i.useMemo(() => v !== void 0 ? v : S ? !1 : a && a.requiredMark !== void 0 ? a.requiredMark : !0, [S, v, a]), P = h ?? (a == null ? void 0 : a.colon), V = r("form", s), H = ft(V), [M, _, B] = Qr(V, H), I = q(V, `${V}-${p}`, {
    [`${V}-hide-required-mark`]: T === !1,
    [`${V}-rtl`]: o === "rtl",
    [`${V}-${j}`]: j
  }, B, H, _, a == null ? void 0 : a.className, l, c), [R] = Wa(f), {
    __INTERNAL__: z
  } = R;
  z.name = b;
  const ee = i.useMemo(() => ({
    name: b,
    labelAlign: g,
    labelCol: $,
    labelWrap: y,
    wrapperCol: C,
    vertical: p === "vertical",
    colon: P,
    requiredMark: T,
    itemRef: z.itemRef,
    form: R,
    feedbackIcons: x
  }), [b, g, $, C, p, P, T, R, x]);
  i.useImperativeHandle(t, () => R);
  const F = (G, Z) => {
    if (G) {
      let U = {
        block: "nearest"
      };
      typeof G == "object" && (U = G), R.scrollToField(Z, U);
    }
  }, L = (G) => {
    if (w == null || w(G), G.errorFields.length) {
      const Z = G.errorFields[0].name;
      if (m !== void 0) {
        F(m, Z);
        return;
      }
      a && a.scrollToFirstError !== void 0 && F(a.scrollToFirstError, Z);
    }
  };
  return M(/* @__PURE__ */ i.createElement(Vo.Provider, {
    value: E
  }, /* @__PURE__ */ i.createElement(wi, {
    disabled: d
  }, /* @__PURE__ */ i.createElement(Ci.Provider, {
    value: j
  }, /* @__PURE__ */ i.createElement(Ko, {
    // This is not list in API, we pass with spread
    validateMessages: A
  }, /* @__PURE__ */ i.createElement(dt.Provider, {
    value: ee
  }, /* @__PURE__ */ i.createElement(Si, Object.assign({
    id: b
  }, N, {
    name: b,
    onFinishFailed: L,
    form: R,
    style: Object.assign(Object.assign({}, a == null ? void 0 : a.style), O),
    className: I
  }))))))));
}, od = /* @__PURE__ */ i.forwardRef(rd);
function ad(e) {
  if (typeof e == "function")
    return e;
  const t = To(e);
  return t.length <= 1 ? t[0] : t;
}
const Va = () => {
  const {
    status: e,
    errors: t = [],
    warnings: n = []
  } = i.useContext(et);
  return {
    status: e,
    errors: t,
    warnings: n
  };
};
Va.Context = et;
const id = Va;
function sd(e) {
  const [t, n] = i.useState(e), r = i.useRef(null), o = i.useRef([]), a = i.useRef(!1);
  i.useEffect(() => (a.current = !1, () => {
    a.current = !0, ot.cancel(r.current), r.current = null;
  }), []);
  function s(l) {
    a.current || (r.current === null && (o.current = [], r.current = ot(() => {
      r.current = null, n((c) => {
        let u = c;
        return o.current.forEach((d) => {
          u = d(u);
        }), u;
      });
    })), o.current.push(l));
  }
  return [t, s];
}
function ld() {
  const {
    itemRef: e
  } = i.useContext(dt), t = i.useRef({});
  function n(r, o) {
    const a = o && typeof o == "object" && o.ref, s = r.join("_");
    return (t.current.name !== s || t.current.originRef !== a) && (t.current.name = s, t.current.originRef = a, t.current.ref = zt(e(r), a)), t.current.ref;
  }
  return n;
}
const cd = (e) => {
  const {
    formItemCls: t
  } = e;
  return {
    "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
      // Fallback for IE, safe to remove we not support it anymore
      [`${t}-control`]: {
        display: "flex"
      }
    }
  };
}, ud = $i(["Form", "item-item"], (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Fa(e, n);
  return [cd(r)];
}), dd = (e) => {
  const {
    prefixCls: t,
    status: n,
    wrapperCol: r,
    children: o,
    errors: a,
    warnings: s,
    _internalItemRender: l,
    extra: c,
    help: u,
    fieldId: d,
    marginBottom: f,
    onErrorVisibleChanged: h
  } = e, g = `${t}-item`, y = i.useContext(dt), $ = r || y.wrapperCol || {}, C = q(`${g}-control`, $.className), S = i.useMemo(() => Object.assign({}, y), [y]);
  delete S.labelCol, delete S.wrapperCol;
  const p = /* @__PURE__ */ i.createElement("div", {
    className: `${g}-control-input`
  }, /* @__PURE__ */ i.createElement("div", {
    className: `${g}-control-input-content`
  }, o)), m = i.useMemo(() => ({
    prefixCls: t,
    status: n
  }), [t, n]), v = f !== null || a.length || s.length ? /* @__PURE__ */ i.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "nowrap"
    }
  }, /* @__PURE__ */ i.createElement(Wr.Provider, {
    value: m
  }, /* @__PURE__ */ i.createElement(Ba, {
    fieldId: d,
    errors: a,
    warnings: s,
    help: u,
    helpStatus: n,
    className: `${g}-explain-connected`,
    onVisibleChanged: h
  })), !!f && /* @__PURE__ */ i.createElement("div", {
    style: {
      width: 0,
      height: f
    }
  })) : null, w = {};
  d && (w.id = `${d}_extra`);
  const b = c ? /* @__PURE__ */ i.createElement("div", Object.assign({}, w, {
    className: `${g}-extra`
  }), c) : null, O = l && l.mark === "pro_table_render" && l.render ? l.render(e, {
    input: p,
    errorList: v,
    extra: b
  }) : /* @__PURE__ */ i.createElement(i.Fragment, null, p, v, b);
  return /* @__PURE__ */ i.createElement(dt.Provider, {
    value: S
  }, /* @__PURE__ */ i.createElement(Ra, Object.assign({}, $, {
    className: C
  }), O), /* @__PURE__ */ i.createElement(ud, {
    prefixCls: t
  }));
}, fd = dd;
var md = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" };
const gd = md;
var vd = function(t, n) {
  return /* @__PURE__ */ i.createElement(Xt, Re({}, t, {
    ref: n,
    icon: gd
  }));
}, pd = /* @__PURE__ */ i.forwardRef(vd);
const hd = pd;
var bd = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function yd(e) {
  return e ? typeof e == "object" && !/* @__PURE__ */ i.isValidElement(e) ? e : {
    title: e
  } : null;
}
const wd = (e) => {
  let {
    prefixCls: t,
    label: n,
    htmlFor: r,
    labelCol: o,
    labelAlign: a,
    colon: s,
    required: l,
    requiredMark: c,
    tooltip: u
  } = e;
  var d;
  const [f] = xi("Form"), {
    vertical: h,
    labelAlign: g,
    labelCol: y,
    labelWrap: $,
    colon: C
  } = i.useContext(dt);
  if (!n)
    return null;
  const S = o || y || {}, p = a || g, m = `${t}-item-label`, v = q(m, p === "left" && `${m}-left`, S.className, {
    [`${m}-wrap`]: !!$
  });
  let w = n;
  const b = s === !0 || C !== !1 && s !== !1;
  b && !h && typeof n == "string" && n.trim() !== "" && (w = n.replace(/[:|：]\s*$/, ""));
  const x = yd(u);
  if (x) {
    const {
      icon: A = /* @__PURE__ */ i.createElement(hd, null)
    } = x, T = bd(x, ["icon"]), P = /* @__PURE__ */ i.createElement(rc, Object.assign({}, T), /* @__PURE__ */ i.cloneElement(A, {
      className: `${t}-item-tooltip`,
      title: "",
      onClick: (V) => {
        V.preventDefault();
      },
      tabIndex: null
    }));
    w = /* @__PURE__ */ i.createElement(i.Fragment, null, w, P);
  }
  const E = c === "optional", N = typeof c == "function";
  N ? w = c(w, {
    required: !!l
  }) : E && !l && (w = /* @__PURE__ */ i.createElement(i.Fragment, null, w, /* @__PURE__ */ i.createElement("span", {
    className: `${t}-item-optional`,
    title: ""
  }, (f == null ? void 0 : f.optional) || ((d = Ei.Form) === null || d === void 0 ? void 0 : d.optional))));
  const j = q({
    [`${t}-item-required`]: l,
    [`${t}-item-required-mark-optional`]: E || N,
    [`${t}-item-no-colon`]: !b
  });
  return /* @__PURE__ */ i.createElement(Ra, Object.assign({}, S, {
    className: v
  }), /* @__PURE__ */ i.createElement("label", {
    htmlFor: r,
    className: j,
    title: typeof n == "string" ? n : ""
  }, w));
}, Cd = wd, Sd = {
  success: Ao,
  warning: Fo,
  error: Ar,
  validating: Bo
};
function Ha(e) {
  let {
    children: t,
    errors: n,
    warnings: r,
    hasFeedback: o,
    validateStatus: a,
    prefixCls: s,
    meta: l,
    noStyle: c
  } = e;
  const u = `${s}-item`, {
    feedbackIcons: d
  } = i.useContext(dt), f = La(n, r, l, null, !!o, a), {
    isFormItemInput: h,
    status: g,
    hasFeedback: y,
    feedbackIcon: $
  } = i.useContext(et), C = i.useMemo(() => {
    var S;
    let p;
    if (o) {
      const v = o !== !0 && o.icons || d, w = f && ((S = v == null ? void 0 : v({
        status: f,
        errors: n,
        warnings: r
      })) === null || S === void 0 ? void 0 : S[f]), b = f && Sd[f];
      p = w !== !1 && b ? /* @__PURE__ */ i.createElement("span", {
        className: q(`${u}-feedback-icon`, `${u}-feedback-icon-${f}`)
      }, w || /* @__PURE__ */ i.createElement(b, null)) : null;
    }
    const m = {
      status: f || "",
      errors: n,
      warnings: r,
      hasFeedback: !!o,
      feedbackIcon: p,
      isFormItemInput: !0
    };
    return c && (m.status = (f ?? g) || "", m.isFormItemInput = h, m.hasFeedback = !!(o ?? y), m.feedbackIcon = o !== void 0 ? m.feedbackIcon : $), m;
  }, [f, o, c, h, g]);
  return /* @__PURE__ */ i.createElement(et.Provider, {
    value: C
  }, t);
}
var $d = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function xd(e) {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    help: a,
    errors: s,
    warnings: l,
    validateStatus: c,
    meta: u,
    hasFeedback: d,
    hidden: f,
    children: h,
    fieldId: g,
    required: y,
    isRequired: $,
    onSubItemMetaChange: C
  } = e, S = $d(e, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange"]), p = `${t}-item`, {
    requiredMark: m
  } = i.useContext(dt), v = i.useRef(null), w = Gn(s), b = Gn(l), O = a != null, x = !!(O || s.length || l.length), E = !!v.current && Lo(v.current), [N, j] = i.useState(null);
  Le(() => {
    if (x && v.current) {
      const H = getComputedStyle(v.current);
      j(parseInt(H.marginBottom, 10));
    }
  }, [x, E]);
  const A = (H) => {
    H || j(null);
  }, P = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const M = H ? w : u.errors, _ = H ? b : u.warnings;
    return La(M, _, u, "", !!d, c);
  }(), V = q(p, n, r, {
    [`${p}-with-help`]: O || w.length || b.length,
    // Status
    [`${p}-has-feedback`]: P && d,
    [`${p}-has-success`]: P === "success",
    [`${p}-has-warning`]: P === "warning",
    [`${p}-has-error`]: P === "error",
    [`${p}-is-validating`]: P === "validating",
    [`${p}-hidden`]: f
  });
  return /* @__PURE__ */ i.createElement("div", {
    className: V,
    style: o,
    ref: v
  }, /* @__PURE__ */ i.createElement(Oc, Object.assign({
    className: `${p}-row`
  }, Dr(S, [
    "_internalItemRender",
    "colon",
    "dependencies",
    "extra",
    "fieldKey",
    "getValueFromEvent",
    "getValueProps",
    "htmlFor",
    "id",
    // It is deprecated because `htmlFor` is its replacement.
    "initialValue",
    "isListField",
    "label",
    "labelAlign",
    "labelCol",
    "labelWrap",
    "messageVariables",
    "name",
    "normalize",
    "noStyle",
    "preserve",
    "requiredMark",
    "rules",
    "shouldUpdate",
    "trigger",
    "tooltip",
    "validateFirst",
    "validateTrigger",
    "valuePropName",
    "wrapperCol",
    "validateDebounce"
  ])), /* @__PURE__ */ i.createElement(Cd, Object.assign({
    htmlFor: g
  }, e, {
    requiredMark: m,
    required: y ?? $,
    prefixCls: t
  })), /* @__PURE__ */ i.createElement(fd, Object.assign({}, e, u, {
    errors: w,
    warnings: b,
    prefixCls: t,
    status: P,
    help: a,
    marginBottom: N,
    onErrorVisibleChanged: A
  }), /* @__PURE__ */ i.createElement(Xo.Provider, {
    value: C
  }, /* @__PURE__ */ i.createElement(Ha, {
    prefixCls: t,
    meta: u,
    errors: u.errors,
    warnings: u.warnings,
    hasFeedback: d,
    // Already calculated
    validateStatus: P
  }, h)))), !!N && /* @__PURE__ */ i.createElement("div", {
    className: `${p}-margin-offset`,
    style: {
      marginBottom: -N
    }
  }));
}
const Ed = "__SPLIT__";
function Od(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every((o) => {
    const a = e[o], s = t[o];
    return a === s || typeof a == "function" || typeof s == "function";
  });
}
const Id = /* @__PURE__ */ i.memo((e) => {
  let {
    children: t
  } = e;
  return t;
}, (e, t) => Od(e.control, t.control) && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every((n, r) => n === t.childProps[r]));
function No() {
  return {
    errors: [],
    warnings: [],
    touched: !1,
    validating: !1,
    name: [],
    validated: !1
  };
}
function Rd(e) {
  const {
    name: t,
    noStyle: n,
    className: r,
    dependencies: o,
    prefixCls: a,
    shouldUpdate: s,
    rules: l,
    children: c,
    required: u,
    label: d,
    messageVariables: f,
    trigger: h = "onChange",
    validateTrigger: g,
    hidden: y,
    help: $
  } = e, {
    getPrefixCls: C
  } = i.useContext(Be), {
    name: S
  } = i.useContext(dt), p = ad(c), m = typeof p == "function", v = i.useContext(Xo), {
    validateTrigger: w
  } = i.useContext(Oi), b = g !== void 0 ? g : w, O = t != null, x = C("form", a), E = ft(x), [N, j, A] = Qr(x, E);
  Fr();
  const T = i.useContext(Ii), P = i.useRef(), [V, H] = sd({}), [M, _] = Ri(() => No()), B = (G) => {
    const Z = T == null ? void 0 : T.getKey(G.name);
    if (_(G.destroy ? No() : G, !0), n && $ !== !1 && v) {
      let U = G.name;
      if (G.destroy)
        U = P.current || U;
      else if (Z !== void 0) {
        const [W, ie] = Z;
        U = [W].concat(je(ie)), P.current = U;
      }
      v(G, U);
    }
  }, I = (G, Z) => {
    H((U) => {
      const W = Object.assign({}, U), re = [].concat(je(G.name.slice(0, -1)), je(Z)).join(Ed);
      return G.destroy ? delete W[re] : W[re] = G, W;
    });
  }, [R, z] = i.useMemo(() => {
    const G = je(M.errors), Z = je(M.warnings);
    return Object.values(V).forEach((U) => {
      G.push.apply(G, je(U.errors || [])), Z.push.apply(Z, je(U.warnings || []));
    }), [G, Z];
  }, [V, M.errors, M.warnings]), ee = ld();
  function F(G, Z, U) {
    return n && !y ? /* @__PURE__ */ i.createElement(Ha, {
      prefixCls: x,
      hasFeedback: e.hasFeedback,
      validateStatus: e.validateStatus,
      meta: M,
      errors: R,
      warnings: z,
      noStyle: !0
    }, G) : /* @__PURE__ */ i.createElement(xd, Object.assign({
      key: "row"
    }, e, {
      className: q(r, A, E, j),
      prefixCls: x,
      fieldId: Z,
      isRequired: U,
      errors: R,
      warnings: z,
      meta: M,
      onSubItemMetaChange: I
    }), G);
  }
  if (!O && !m && !o)
    return N(F(p));
  let L = {};
  return typeof d == "string" ? L.label = d : t && (L.label = String(t)), f && (L = Object.assign(Object.assign({}, L), f)), N(/* @__PURE__ */ i.createElement(Ni, Object.assign({}, e, {
    messageVariables: L,
    trigger: h,
    validateTrigger: b,
    onMetaChange: B
  }), (G, Z, U) => {
    const W = ln(t).length && Z ? Z.name : [], ie = Da(W, S), re = u !== void 0 ? u : !!(l && l.some((X) => {
      if (X && typeof X == "object" && X.required && !X.warningOnly)
        return !0;
      if (typeof X == "function") {
        const Ce = X(U);
        return Ce && Ce.required && !Ce.warningOnly;
      }
      return !1;
    })), fe = Object.assign({}, G);
    let ge = null;
    if (Array.isArray(p) && O)
      ge = p;
    else if (!(m && (!(s || o) || O))) {
      if (!(o && !m && !O))
        if (/* @__PURE__ */ i.isValidElement(p)) {
          const X = Object.assign(Object.assign({}, p.props), fe);
          if (X.id || (X.id = ie), $ || R.length > 0 || z.length > 0 || e.extra) {
            const he = [];
            ($ || R.length > 0) && he.push(`${ie}_help`), e.extra && he.push(`${ie}_extra`), X["aria-describedby"] = he.join(" ");
          }
          R.length > 0 && (X["aria-invalid"] = "true"), re && (X["aria-required"] = "true"), Tr(p) && (X.ref = ee(W, p)), new Set([].concat(je(ln(h)), je(ln(b)))).forEach((he) => {
            X[he] = function() {
              for (var we, Y, J, ve, Ie, de = arguments.length, pe = new Array(de), be = 0; be < de; be++)
                pe[be] = arguments[be];
              (J = fe[he]) === null || J === void 0 || (we = J).call.apply(we, [fe].concat(pe)), (Ie = (ve = p.props)[he]) === null || Ie === void 0 || (Y = Ie).call.apply(Y, [ve].concat(pe));
            };
          });
          const $e = [X["aria-required"], X["aria-invalid"], X["aria-describedby"]];
          ge = /* @__PURE__ */ i.createElement(Id, {
            control: fe,
            update: p,
            childProps: $e
          }, Fn(p, X));
        } else
          m && (s || o) && !O ? ge = p(U) : ge = p;
    }
    return F(ge, ie, re);
  }));
}
const Ga = Rd;
Ga.useStatus = id;
const Nd = Ga;
var Md = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Pd = (e) => {
  var {
    prefixCls: t,
    children: n
  } = e, r = Md(e, ["prefixCls", "children"]);
  const {
    getPrefixCls: o
  } = i.useContext(Be), a = o("form", t), s = i.useMemo(() => ({
    prefixCls: a,
    status: "error"
  }), [a]);
  return /* @__PURE__ */ i.createElement(Mi, Object.assign({}, r), (l, c, u) => /* @__PURE__ */ i.createElement(Wr.Provider, {
    value: s
  }, n(l.map((d) => Object.assign(Object.assign({}, d), {
    fieldKey: d.key
  })), c, {
    errors: u.errors,
    warnings: u.warnings
  })));
}, _d = Pd;
function jd() {
  const {
    form: e
  } = i.useContext(dt);
  return e;
}
const Ct = od;
Ct.Item = Nd;
Ct.List = _d;
Ct.ErrorList = Ba;
Ct.useForm = Wa;
Ct.useFormInstance = jd;
Ct.useWatch = Pi;
Ct.Provider = Ko;
Ct.create = () => {
};
let Ye = null, _t = (e) => e(), mn = [], gn = {};
function Mo() {
  const {
    getContainer: e,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  } = gn, a = (e == null ? void 0 : e()) || document.body;
  return {
    getContainer: () => a,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  };
}
const zd = /* @__PURE__ */ se.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = i.useContext(Be), a = gn.prefixCls || o("message"), s = i.useContext(zi), [l, c] = aa(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), s.message));
  return se.useImperativeHandle(t, () => {
    const u = Object.assign({}, l);
    return Object.keys(u).forEach((d) => {
      u[d] = function() {
        return r(), l[d].apply(l, arguments);
      };
    }), {
      instance: u,
      sync: r
    };
  }), c;
}), Td = /* @__PURE__ */ se.forwardRef((e, t) => {
  const [n, r] = se.useState(Mo), o = () => {
    r(Mo);
  };
  se.useEffect(o, []);
  const a = ji(), s = a.getRootPrefixCls(), l = a.getIconPrefixCls(), c = a.getTheme(), u = /* @__PURE__ */ se.createElement(zd, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ se.createElement(qo, {
    prefixCls: s,
    iconPrefixCls: l,
    theme: c
  }, a.holderRender ? a.holderRender(u) : u);
});
function Zn() {
  if (!Ye) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    Ye = t, _t(() => {
      _i(/* @__PURE__ */ se.createElement(Td, {
        ref: (n) => {
          const {
            instance: r,
            sync: o
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = o, Zn());
          });
        }
      }), e);
    });
    return;
  }
  Ye.instance && (mn.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          _t(() => {
            const r = Ye.instance.open(Object.assign(Object.assign({}, gn), e.config));
            r == null || r.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          _t(() => {
            Ye == null || Ye.instance.destroy(e.key);
          });
          break;
        default:
          _t(() => {
            var r;
            const o = (r = Ye.instance)[t].apply(r, je(e.args));
            o == null || o.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), mn = []);
}
function Ad(e) {
  gn = Object.assign(Object.assign({}, gn), e), _t(() => {
    var t;
    (t = Ye == null ? void 0 : Ye.sync) === null || t === void 0 || t.call(Ye);
  });
}
function Fd(e) {
  const t = Vr((n) => {
    let r;
    const o = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (a) => {
        r = a;
      }
    };
    return mn.push(o), () => {
      r ? _t(() => {
        r();
      }) : o.skipped = !0;
    };
  });
  return Zn(), t;
}
function Bd(e, t) {
  const n = Vr((r) => {
    let o;
    const a = {
      type: e,
      args: t,
      resolve: r,
      setCloseFn: (s) => {
        o = s;
      }
    };
    return mn.push(a), () => {
      o ? _t(() => {
        o();
      }) : a.skipped = !0;
    };
  });
  return Zn(), n;
}
function Dd(e) {
  mn.push({
    type: "destroy",
    key: e
  }), Zn();
}
const Ld = ["success", "info", "warning", "error", "loading"], Wd = {
  open: Fd,
  destroy: Dd,
  config: Ad,
  useMessage: zs,
  _InternalPanelDoNotUseOrYouWillBeFired: Os
}, qa = Wd;
Ld.forEach((e) => {
  qa[e] = function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Bd(e, n);
  };
});
const sf = qa;
function Vd(e) {
  return e !== e;
}
function Hd(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Gd(e, t, n) {
  return t === t ? Hd(e, t, n) : Ti(e, Vd, n);
}
function qd(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
var Ud = Math.max;
function lf(e, t, n, r) {
  e = Ai(e) ? e : Fi(e), n = n && !r ? ko(n) : 0;
  var o = e.length;
  return n < 0 && (n = Ud(o + n, 0)), Bi(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Gd(e, t, n) > -1;
}
function Kd() {
  var e = arguments, t = Yo(e[0]);
  return e.length < 3 ? t : t.replace(e[1], e[2]);
}
function cf(e, t, n) {
  return e = Yo(e), n = n == null ? 0 : qd(ko(n), 0, e.length), t = Di(t), e.slice(n, n + t.length) == t;
}
function Xd() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`);
  }
}
const Po = {};
function _r() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Po[t[0]] || (typeof t[0] == "string" && (Po[t[0]] = /* @__PURE__ */ new Date()), Xd(...t));
}
const Ua = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function _o(e, t, n) {
  e.loadNamespaces(t, Ua(e, n));
}
function jo(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Ua(e, r));
}
function kd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], o = t.options ? t.options.fallbackLng : !1, a = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  const s = (l, c) => {
    const u = t.services.backendConnector.state[`${l}|${c}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!o || s(a, e)));
}
function Yd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (_r("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, a) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : kd(e, t, n);
}
const Qd = i.createContext();
class Jd {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Zd = (e, t) => {
  const n = i.useRef();
  return i.useEffect(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function Ka(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function ef(e, t, n, r) {
  return i.useCallback(Ka(e, t, n, r), [e, t, n, r]);
}
function uf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = i.useContext(Qd) || {}, a = n || r || Wi();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new Jd()), !a) {
    _r("You will need to pass in an i18next instance by using initReactI18next");
    const v = (b, O) => typeof O == "string" ? O : O && typeof O == "object" && typeof O.defaultValue == "string" ? O.defaultValue : Array.isArray(b) ? b[b.length - 1] : b, w = [v, {}, !1];
    return w.t = v, w.i18n = {}, w.ready = !1, w;
  }
  a.options.react && a.options.react.wait !== void 0 && _r("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Li(),
    ...a.options.react,
    ...t
  }, {
    useSuspense: l,
    keyPrefix: c
  } = s;
  let u = e || o || a.options && a.options.defaultNS;
  u = typeof u == "string" ? [u] : u || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(u);
  const d = (a.isInitialized || a.initializedStoreOnce) && u.every((v) => Yd(v, a, s)), f = ef(a, t.lng || null, s.nsMode === "fallback" ? u : u[0], c), h = () => f, g = () => Ka(a, t.lng || null, s.nsMode === "fallback" ? u : u[0], c), [y, $] = i.useState(h);
  let C = u.join();
  t.lng && (C = `${t.lng}${C}`);
  const S = Zd(C), p = i.useRef(!0);
  i.useEffect(() => {
    const {
      bindI18n: v,
      bindI18nStore: w
    } = s;
    p.current = !0, !d && !l && (t.lng ? jo(a, t.lng, u, () => {
      p.current && $(g);
    }) : _o(a, u, () => {
      p.current && $(g);
    })), d && S && S !== C && p.current && $(g);
    function b() {
      p.current && $(g);
    }
    return v && a && a.on(v, b), w && a && a.store.on(w, b), () => {
      p.current = !1, v && a && v.split(" ").forEach((O) => a.off(O, b)), w && a && w.split(" ").forEach((O) => a.store.off(O, b));
    };
  }, [a, C]), i.useEffect(() => {
    p.current && d && $(h);
  }, [a, c, d]);
  const m = [y, a, d];
  if (m.t = y, m.i18n = a, m.ready = d, d || !d && !l)
    return m;
  throw new Promise((v) => {
    t.lng ? jo(a, t.lng, u, () => v()) : _o(a, u, () => v());
  });
}
function df(e, t) {
  if (!e)
    return "";
  var n = eo(e, function(r, o, a) {
    var s = "";
    return Array.isArray(o) ? s = eo(o, function(l, c) {
      return c = c || String(c) === "0" ? "".concat(a, "=").concat(t ? c : encodeURIComponent(c)) : "", l ? "".concat(l).concat(c ? "&".concat(c) : "") : c;
    }, "") : s = o || String(o) === "0" ? "".concat(a, "=").concat(t ? o : encodeURIComponent(o)) : "", r ? "".concat(r).concat(s ? "&".concat(s) : "") : s;
  }, "");
  return n ? "?".concat(n) : "";
}
const ff = (e = {}) => ({
  display: "flex",
  ...e
}), mf = (e = {}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...e
}), gf = (e = {}) => ({
  display: "flex",
  alignItems: "center",
  ...e
}), vf = (e = {}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ...e
});
function pf(e) {
  const t = "#00EEEE", n = "#68228B";
  switch (e) {
    case rn.get:
      return Mt.color.primary;
    case rn.post:
      return Mt.color.success;
    case rn.put:
      return Mt.color.warning;
    case rn.patch:
      return n;
    case rn.delete:
      return Mt.color.danger;
    default:
      return t;
  }
}
const Xa = /@StatusErr\[(.+)\]\[(.+)\]\[(.+)\](!)?/;
function hf(e = []) {
  return Hi(e, (t) => {
    const n = Xa.exec(t);
    return n != null ? {
      code: parseInt(n[2], 10),
      name: n[1],
      msg: n[3],
      canBeTalkError: !!n[4]
    } : {};
  });
}
function bf(e = "") {
  return Kd(e, new RegExp(Xa, "g"), "");
}
const yf = (e) => e >= 400 ? Mt.color.danger : e >= 300 ? Mt.color.warning : Mt.color.success;
function wf(e) {
  if (!e)
    return "//serviceURL";
  const t = e.split("//");
  return `${t[0]}//${t[1].split("/")[0]}`;
}
function Cf(e) {
  const t = Vi(e.content);
  let n = e.content;
  return t.length > 1 && (t.includes("application/json") ? n = {
    "application/json": n["application/json"]
  } : t.includes("multipart/form-data") ? n = {
    "multipart/form-data": n["multipart/form-data"]
  } : t.includes("application/x-www-form-urlencoded") ? n = {
    "application/x-www-form-urlencoded": n["application/x-www-form-urlencoded"]
  } : n = {
    [t[0]]: n[t[0]]
  }), n || {};
}
export {
  Hr as A,
  dn as B,
  kn as C,
  Ml as D,
  ua as E,
  Ct as F,
  qr as G,
  ha as H,
  af as I,
  Ca as J,
  ya as K,
  Gr as L,
  $a as M,
  Gl as N,
  Gd as O,
  Wn as P,
  Kd as Q,
  Yt as R,
  Tl as S,
  rc as T,
  hf as U,
  bf as V,
  yf as W,
  Cf as X,
  xu as Y,
  vf as a,
  mf as b,
  ff as c,
  wf as d,
  rf as e,
  gf as f,
  pf as g,
  lf as h,
  ia as i,
  xl as j,
  Xn as k,
  Zs as l,
  sf as m,
  Us as n,
  qs as o,
  Ks as p,
  ql as q,
  nf as r,
  Gs as s,
  df as t,
  uf as u,
  fa as v,
  Hl as w,
  kl as x,
  cf as y,
  of as z
};
