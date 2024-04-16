import { d as i, A as It, _ as ne, w as De, K as ve, a3 as Jn, W as le, a4 as Kn, G as de, s as ae, z, y as U, a5 as ba, a6 as qn, t as oe, D as xe, a7 as Ia, J as qe, a8 as $n, F as _n, a9 as pa, aa as va, ab as Ca, ac as fa, ad as ye, M as pt, H as ha, x as xa, ae as ya, T as fe, af as vt, ag as eo, ah as Ba, ai as Ga, P as E, aj as wa, R as Xa, N as qt, O as Vt, ak as to, al as wn, Q as no, am as Xn, an as Sa, C as oo, U as ao, ao as Ra, S as Sn, ap as Na, aq as Ha, ar as Za, as as Oa, at as Da, au as Ma, av as Ea, B as zt, aw as Wa, ax as La, ay as Pa, az as Va, aA as Rn, i as io, aB as za, aC as ro, a as et, b as B, aD as Nn, j as re, aE as Fa, a1 as Ya, aF as ka, aG as ja, k as ee, u as $t, I as Hn, e as Ta, p as Ua, f as Qa, m as lo, Y as Ja, Z as _t, h as Ce, q as Ka, c as Zn, aH as qa, aI as $a, l as so, aJ as dt, aK as _a, a2 as ei, g as ti, E as ni, aL as oi } from "./index-0DiK2-ze.js";
import { j as Ao, k as $e, T as en, l as ai, e as gt, s as ii, n as ri, o as li, p as si, q as Ai, r as On, v as ci, w as di, x as gi, y as ui, t as co, u as Me, F as Ft, z as mi, I as tn, m as go, b as st, h as bi, g as Ii } from "./util-DbfKY0tm.js";
var pi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const vi = pi;
var Ci = function(t, n) {
  return /* @__PURE__ */ i.createElement(It, ne({}, t, {
    ref: n,
    icon: vi
  }));
}, fi = /* @__PURE__ */ i.forwardRef(Ci);
const Yt = fi;
var hi = ve.ESC, xi = ve.TAB;
function yi(e) {
  var t = e.visible, n = e.triggerRef, o = e.onVisibleChange, a = e.autoFocus, l = e.overlayRef, r = i.useRef(!1), s = function() {
    if (t) {
      var d, g;
      (d = n.current) === null || d === void 0 || (g = d.focus) === null || g === void 0 || g.call(d), o == null || o(!1);
    }
  }, A = function() {
    var d;
    return (d = l.current) !== null && d !== void 0 && d.focus ? (l.current.focus(), r.current = !0, !0) : !1;
  }, c = function(d) {
    switch (d.keyCode) {
      case hi:
        s();
        break;
      case xi: {
        var g = !1;
        r.current || (g = A()), g ? d.preventDefault() : s();
        break;
      }
    }
  };
  i.useEffect(function() {
    return t ? (window.addEventListener("keydown", c), a && De(A, 3), function() {
      window.removeEventListener("keydown", c), r.current = !1;
    }) : function() {
      r.current = !1;
    };
  }, [t]);
}
var Bi = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.overlay, o = e.arrow, a = e.prefixCls, l = i.useMemo(function() {
    var s;
    return typeof n == "function" ? s = n() : s = n, s;
  }, [n]), r = Jn(t, l == null ? void 0 : l.ref);
  return /* @__PURE__ */ le.createElement(le.Fragment, null, o && /* @__PURE__ */ le.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ le.cloneElement(l, {
    ref: Kn(l) ? r : void 0
  }));
}), He = {
  adjustX: 1,
  adjustY: 1
}, Ze = [0, 0], Gi = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: He,
    offset: [0, -4],
    targetOffset: Ze
  },
  top: {
    points: ["bc", "tc"],
    overflow: He,
    offset: [0, -4],
    targetOffset: Ze
  },
  topRight: {
    points: ["br", "tr"],
    overflow: He,
    offset: [0, -4],
    targetOffset: Ze
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: He,
    offset: [0, 4],
    targetOffset: Ze
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: He,
    offset: [0, 4],
    targetOffset: Ze
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: He,
    offset: [0, 4],
    targetOffset: Ze
  }
}, wi = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function Xi(e, t) {
  var n, o = e.arrow, a = o === void 0 ? !1 : o, l = e.prefixCls, r = l === void 0 ? "rc-dropdown" : l, s = e.transitionName, A = e.animation, c = e.align, b = e.placement, d = b === void 0 ? "bottomLeft" : b, g = e.placements, I = g === void 0 ? Gi : g, m = e.getPopupContainer, p = e.showAction, v = e.hideAction, f = e.overlayClassName, S = e.overlayStyle, C = e.visible, h = e.trigger, G = h === void 0 ? ["hover"] : h, u = e.autoFocus, X = e.overlay, x = e.children, w = e.onVisibleChange, D = de(e, wi), O = le.useState(), R = ae(O, 2), y = R[0], N = R[1], Z = "visible" in e ? C : y, M = le.useRef(null), H = le.useRef(null), P = le.useRef(null);
  le.useImperativeHandle(t, function() {
    return M.current;
  });
  var k = function(_) {
    N(_), w == null || w(_);
  };
  yi({
    visible: Z,
    triggerRef: P,
    onVisibleChange: k,
    autoFocus: u,
    overlayRef: H
  });
  var L = function(_) {
    var J = e.onOverlayClick;
    N(!1), J && J(_);
  }, F = function() {
    return /* @__PURE__ */ le.createElement(Bi, {
      ref: H,
      overlay: X,
      prefixCls: r,
      arrow: a
    });
  }, T = function() {
    return typeof X == "function" ? F : F();
  }, Q = function() {
    var _ = e.minOverlayWidthMatchTrigger, J = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? _ : !J;
  }, Y = function() {
    var _ = e.openClassName;
    return _ !== void 0 ? _ : "".concat(r, "-open");
  }, W = /* @__PURE__ */ le.cloneElement(x, {
    className: z((n = x.props) === null || n === void 0 ? void 0 : n.className, Z && Y()),
    ref: Kn(x) ? Jn(P, x.ref) : void 0
  }), te = v;
  return !te && G.indexOf("contextMenu") !== -1 && (te = ["click"]), /* @__PURE__ */ le.createElement(Ao, ne({
    builtinPlacements: I
  }, D, {
    prefixCls: r,
    ref: M,
    popupClassName: z(f, U({}, "".concat(r, "-show-arrow"), a)),
    popupStyle: S,
    action: G,
    showAction: p,
    hideAction: te,
    popupPlacement: d,
    popupAlign: c,
    popupTransitionName: s,
    popupAnimation: A,
    popupVisible: Z,
    stretch: Q() ? "minWidth" : "",
    popup: T(),
    onPopupVisibleChange: k,
    onPopupClick: L,
    getPopupContainer: m
  }), W);
}
const Si = /* @__PURE__ */ le.forwardRef(Xi);
var uo = /* @__PURE__ */ i.createContext(null);
function mo(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function bo(e) {
  var t = i.useContext(uo);
  return mo(t, e);
}
var Ri = ["children", "locked"], pe = /* @__PURE__ */ i.createContext(null);
function Ni(e, t) {
  var n = oe({}, e);
  return Object.keys(t).forEach(function(o) {
    var a = t[o];
    a !== void 0 && (n[o] = a);
  }), n;
}
function _e(e) {
  var t = e.children, n = e.locked, o = de(e, Ri), a = i.useContext(pe), l = ba(function() {
    return Ni(a, o);
  }, [a, o], function(r, s) {
    return !n && (r[0] !== s[0] || !qn(r[1], s[1], !0));
  });
  return /* @__PURE__ */ i.createElement(pe.Provider, {
    value: l
  }, t);
}
var Hi = [], Io = /* @__PURE__ */ i.createContext(null);
function Ct() {
  return i.useContext(Io);
}
var po = /* @__PURE__ */ i.createContext(Hi);
function Ee(e) {
  var t = i.useContext(po);
  return i.useMemo(function() {
    return e !== void 0 ? [].concat(xe(t), [e]) : t;
  }, [t, e]);
}
var vo = /* @__PURE__ */ i.createContext(null), nn = /* @__PURE__ */ i.createContext({});
function Dn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Ia(e)) {
    var n = e.nodeName.toLowerCase(), o = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), l = Number(a), r = null;
    return a && !Number.isNaN(l) ? r = l : o && r === null && (r = 0), o && e.disabled && (r = null), r !== null && (r >= 0 || t && r < 0);
  }
  return !1;
}
function Zi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = xe(e.querySelectorAll("*")).filter(function(o) {
    return Dn(o, t);
  });
  return Dn(e, t) && n.unshift(e), n;
}
var kt = ve.LEFT, jt = ve.RIGHT, Tt = ve.UP, At = ve.DOWN, ct = ve.ENTER, Co = ve.ESC, Qe = ve.HOME, Je = ve.END, Mn = [Tt, At, kt, jt];
function Oi(e, t, n, o) {
  var a, l = "prev", r = "next", s = "children", A = "parent";
  if (e === "inline" && o === ct)
    return {
      inlineTrigger: !0
    };
  var c = U(U({}, Tt, l), At, r), b = U(U(U(U({}, kt, n ? r : l), jt, n ? l : r), At, s), ct, s), d = U(U(U(U(U(U({}, Tt, l), At, r), ct, s), Co, A), kt, n ? s : A), jt, n ? A : s), g = {
    inline: c,
    horizontal: b,
    vertical: d,
    inlineSub: c,
    horizontalSub: d,
    verticalSub: d
  }, I = (a = g["".concat(e).concat(t ? "" : "Sub")]) === null || a === void 0 ? void 0 : a[o];
  switch (I) {
    case l:
      return {
        offset: -1,
        sibling: !0
      };
    case r:
      return {
        offset: 1,
        sibling: !0
      };
    case A:
      return {
        offset: -1,
        sibling: !1
      };
    case s:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function Di(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Mi(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function on(e, t) {
  var n = Zi(e, !0);
  return n.filter(function(o) {
    return t.has(o);
  });
}
function En(e, t, n) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = on(e, t), l = a.length, r = a.findIndex(function(s) {
    return n === s;
  });
  return o < 0 ? r === -1 ? r = l - 1 : r -= 1 : o > 0 && (r += 1), r = (r + l) % l, a[r];
}
var Ut = function(t, n) {
  var o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    var s = document.querySelector("[data-menu-id='".concat(mo(n, r), "']"));
    s && (o.add(s), l.set(s, r), a.set(r, s));
  }), {
    elements: o,
    key2element: a,
    element2key: l
  };
};
function Ei(e, t, n, o, a, l, r, s, A, c) {
  var b = i.useRef(), d = i.useRef();
  d.current = t;
  var g = function() {
    De.cancel(b.current);
  };
  return i.useEffect(function() {
    return function() {
      g();
    };
  }, []), function(I) {
    var m = I.which;
    if ([].concat(Mn, [ct, Co, Qe, Je]).includes(m)) {
      var p = l(), v = Ut(p, o), f = v, S = f.elements, C = f.key2element, h = f.element2key, G = C.get(t), u = Mi(G, S), X = h.get(u), x = Oi(e, r(X, !0).length === 1, n, m);
      if (!x && m !== Qe && m !== Je)
        return;
      (Mn.includes(m) || [Qe, Je].includes(m)) && I.preventDefault();
      var w = function(H) {
        if (H) {
          var P = H, k = H.querySelector("a");
          k != null && k.getAttribute("href") && (P = k);
          var L = h.get(H);
          s(L), g(), b.current = De(function() {
            d.current === L && P.focus();
          });
        }
      };
      if ([Qe, Je].includes(m) || x.sibling || !u) {
        var D;
        !u || e === "inline" ? D = a.current : D = Di(u);
        var O, R = on(D, S);
        m === Qe ? O = R[0] : m === Je ? O = R[R.length - 1] : O = En(D, S, u, x.offset), w(O);
      } else if (x.inlineTrigger)
        A(X);
      else if (x.offset > 0)
        A(X, !0), g(), b.current = De(function() {
          v = Ut(p, o);
          var M = u.getAttribute("aria-controls"), H = document.getElementById(M), P = En(H, v.elements);
          w(P);
        }, 5);
      else if (x.offset < 0) {
        var y = r(X, !0), N = y[y.length - 2], Z = C.get(N);
        A(N, !1), w(Z);
      }
    }
    c == null || c(I);
  };
}
function Wi(e) {
  Promise.resolve().then(e);
}
var an = "__RC_UTIL_PATH_SPLIT__", Wn = function(t) {
  return t.join(an);
}, Li = function(t) {
  return t.split(an);
}, Qt = "rc-menu-more";
function Pi() {
  var e = i.useState({}), t = ae(e, 2), n = t[1], o = i.useRef(/* @__PURE__ */ new Map()), a = i.useRef(/* @__PURE__ */ new Map()), l = i.useState([]), r = ae(l, 2), s = r[0], A = r[1], c = i.useRef(0), b = i.useRef(!1), d = function() {
    b.current || n({});
  }, g = i.useCallback(function(C, h) {
    var G = Wn(h);
    a.current.set(G, C), o.current.set(C, G), c.current += 1;
    var u = c.current;
    Wi(function() {
      u === c.current && d();
    });
  }, []), I = i.useCallback(function(C, h) {
    var G = Wn(h);
    a.current.delete(G), o.current.delete(C);
  }, []), m = i.useCallback(function(C) {
    A(C);
  }, []), p = i.useCallback(function(C, h) {
    var G = o.current.get(C) || "", u = Li(G);
    return h && s.includes(u[0]) && u.unshift(Qt), u;
  }, [s]), v = i.useCallback(function(C, h) {
    return C.some(function(G) {
      var u = p(G, !0);
      return u.includes(h);
    });
  }, [p]), f = function() {
    var h = xe(o.current.keys());
    return s.length && h.push(Qt), h;
  }, S = i.useCallback(function(C) {
    var h = "".concat(o.current.get(C)).concat(an), G = /* @__PURE__ */ new Set();
    return xe(a.current.keys()).forEach(function(u) {
      u.startsWith(h) && G.add(a.current.get(u));
    }), G;
  }, []);
  return i.useEffect(function() {
    return function() {
      b.current = !0;
    };
  }, []), {
    // Register
    registerPath: g,
    unregisterPath: I,
    refreshOverflowKeys: m,
    // Util
    isSubPathKey: v,
    getKeyPath: p,
    getKeys: f,
    getSubPathKeys: S
  };
}
function Ke(e) {
  var t = i.useRef(e);
  t.current = e;
  var n = i.useCallback(function() {
    for (var o, a = arguments.length, l = new Array(a), r = 0; r < a; r++)
      l[r] = arguments[r];
    return (o = t.current) === null || o === void 0 ? void 0 : o.call.apply(o, [t].concat(l));
  }, []);
  return e ? n : void 0;
}
var Vi = Math.random().toFixed(5).toString().slice(2), Ln = 0;
function zi(e) {
  var t = qe(e, {
    value: e
  }), n = ae(t, 2), o = n[0], a = n[1];
  return i.useEffect(function() {
    Ln += 1;
    var l = "".concat(Vi, "-").concat(Ln);
    a("rc-menu-uuid-".concat(l));
  }, []), o;
}
function fo(e, t, n, o) {
  var a = i.useContext(pe), l = a.activeKey, r = a.onActive, s = a.onInactive, A = {
    active: l === e
  };
  return t || (A.onMouseEnter = function(c) {
    n == null || n({
      key: e,
      domEvent: c
    }), r(e);
  }, A.onMouseLeave = function(c) {
    o == null || o({
      key: e,
      domEvent: c
    }), s(e);
  }), A;
}
function ho(e) {
  var t = i.useContext(pe), n = t.mode, o = t.rtl, a = t.inlineIndent;
  if (n !== "inline")
    return null;
  var l = e;
  return o ? {
    paddingRight: l * a
  } : {
    paddingLeft: l * a
  };
}
function xo(e) {
  var t = e.icon, n = e.props, o = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ i.createElement(t, oe({}, n)) : typeof t != "boolean" && (a = t), a || o || null);
}
var Fi = ["item"];
function ut(e) {
  var t = e.item, n = de(e, Fi);
  return Object.defineProperty(n, "item", {
    get: function() {
      return $n(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var Yi = ["title", "attribute", "elementRef"], ki = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], ji = ["active"], Ti = /* @__PURE__ */ function(e) {
  pa(n, e);
  var t = va(n);
  function n() {
    return Ca(this, n), t.apply(this, arguments);
  }
  return fa(n, [{
    key: "render",
    value: function() {
      var a = this.props, l = a.title, r = a.attribute, s = a.elementRef, A = de(a, Yi), c = ye(A, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return $n(!r, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ i.createElement($e.Item, ne({}, r, {
        title: typeof l == "string" ? l : void 0
      }, c, {
        ref: s
      }));
    }
  }]), n;
}(i.Component), Ui = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.style, o = e.className, a = e.eventKey;
  e.warnKey;
  var l = e.disabled, r = e.itemIcon, s = e.children, A = e.role, c = e.onMouseEnter, b = e.onMouseLeave, d = e.onClick, g = e.onKeyDown, I = e.onFocus, m = de(e, ki), p = bo(a), v = i.useContext(pe), f = v.prefixCls, S = v.onItemClick, C = v.disabled, h = v.overflowDisabled, G = v.itemIcon, u = v.selectedKeys, X = v.onActive, x = i.useContext(nn), w = x._internalRenderMenuItem, D = "".concat(f, "-item"), O = i.useRef(), R = i.useRef(), y = C || l, N = _n(t, R), Z = Ee(a), M = function(J) {
    return {
      key: a,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: xe(Z).reverse(),
      item: O.current,
      domEvent: J
    };
  }, H = r || G, P = fo(a, y, c, b), k = P.active, L = de(P, ji), F = u.includes(a), T = ho(Z.length), Q = function(J) {
    if (!y) {
      var se = M(J);
      d == null || d(ut(se)), S(se);
    }
  }, Y = function(J) {
    if (g == null || g(J), J.which === ve.ENTER) {
      var se = M(J);
      d == null || d(ut(se)), S(se);
    }
  }, W = function(J) {
    X(a), I == null || I(J);
  }, te = {};
  e.role === "option" && (te["aria-selected"] = F);
  var $ = /* @__PURE__ */ i.createElement(Ti, ne({
    ref: O,
    elementRef: N,
    role: A === null ? "none" : A || "menuitem",
    tabIndex: l ? null : -1,
    "data-menu-id": h && p ? null : p
  }, m, L, te, {
    component: "li",
    "aria-disabled": l,
    style: oe(oe({}, T), n),
    className: z(D, U(U(U({}, "".concat(D, "-active"), k), "".concat(D, "-selected"), F), "".concat(D, "-disabled"), y), o),
    onClick: Q,
    onKeyDown: Y,
    onFocus: W
  }), s, /* @__PURE__ */ i.createElement(xo, {
    props: oe(oe({}, e), {}, {
      isSelected: F
    }),
    icon: H
  }));
  return w && ($ = w($, e, {
    selected: F
  })), $;
});
function Qi(e, t) {
  var n = e.eventKey, o = Ct(), a = Ee(n);
  return i.useEffect(function() {
    if (o)
      return o.registerPath(n, a), function() {
        o.unregisterPath(n, a);
      };
  }, [a]), o ? null : /* @__PURE__ */ i.createElement(Ui, ne({}, e, {
    ref: t
  }));
}
const ft = /* @__PURE__ */ i.forwardRef(Qi);
var Ji = ["className", "children"], Ki = function(t, n) {
  var o = t.className, a = t.children, l = de(t, Ji), r = i.useContext(pe), s = r.prefixCls, A = r.mode, c = r.rtl;
  return /* @__PURE__ */ i.createElement("ul", ne({
    className: z(s, c && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(A === "inline" ? "inline" : "vertical"), o),
    role: "menu"
  }, l, {
    "data-menu-list": !0,
    ref: n
  }), a);
}, rn = /* @__PURE__ */ i.forwardRef(Ki);
rn.displayName = "SubMenuList";
function ln(e, t) {
  return pt(e).map(function(n, o) {
    if (/* @__PURE__ */ i.isValidElement(n)) {
      var a, l, r = n.key, s = (a = (l = n.props) === null || l === void 0 ? void 0 : l.eventKey) !== null && a !== void 0 ? a : r, A = s == null;
      A && (s = "tmp_key-".concat([].concat(xe(t), [o]).join("-")));
      var c = {
        key: s,
        eventKey: s
      };
      return /* @__PURE__ */ i.cloneElement(n, c);
    }
    return n;
  });
}
var ie = {
  adjustX: 1,
  adjustY: 1
}, qi = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ie
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ie
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ie
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ie
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: ie
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: ie
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: ie
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: ie
  }
}, $i = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ie
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ie
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ie
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ie
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: ie
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: ie
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: ie
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: ie
  }
};
function yo(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var _i = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function er(e) {
  var t = e.prefixCls, n = e.visible, o = e.children, a = e.popup, l = e.popupStyle, r = e.popupClassName, s = e.popupOffset, A = e.disabled, c = e.mode, b = e.onVisibleChange, d = i.useContext(pe), g = d.getPopupContainer, I = d.rtl, m = d.subMenuOpenDelay, p = d.subMenuCloseDelay, v = d.builtinPlacements, f = d.triggerSubMenuAction, S = d.forceSubMenuRender, C = d.rootClassName, h = d.motion, G = d.defaultMotions, u = i.useState(!1), X = ae(u, 2), x = X[0], w = X[1], D = I ? oe(oe({}, $i), v) : oe(oe({}, qi), v), O = _i[c], R = yo(c, h, G), y = i.useRef(R);
  c !== "inline" && (y.current = R);
  var N = oe(oe({}, y.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), Z = i.useRef();
  return i.useEffect(function() {
    return Z.current = De(function() {
      w(n);
    }), function() {
      De.cancel(Z.current);
    };
  }, [n]), /* @__PURE__ */ i.createElement(Ao, {
    prefixCls: t,
    popupClassName: z("".concat(t, "-popup"), U({}, "".concat(t, "-rtl"), I), r, C),
    stretch: c === "horizontal" ? "minWidth" : null,
    getPopupContainer: g,
    builtinPlacements: D,
    popupPlacement: O,
    popupVisible: x,
    popup: a,
    popupStyle: l,
    popupAlign: s && {
      offset: s
    },
    action: A ? [] : [f],
    mouseEnterDelay: m,
    mouseLeaveDelay: p,
    onPopupVisibleChange: b,
    forceRender: S,
    popupMotion: N,
    fresh: !0
  }, o);
}
function tr(e) {
  var t = e.id, n = e.open, o = e.keyPath, a = e.children, l = "inline", r = i.useContext(pe), s = r.prefixCls, A = r.forceSubMenuRender, c = r.motion, b = r.defaultMotions, d = r.mode, g = i.useRef(!1);
  g.current = d === l;
  var I = i.useState(!g.current), m = ae(I, 2), p = m[0], v = m[1], f = g.current ? n : !1;
  i.useEffect(function() {
    g.current && v(!1);
  }, [d]);
  var S = oe({}, yo(l, c, b));
  o.length > 1 && (S.motionAppear = !1);
  var C = S.onVisibleChanged;
  return S.onVisibleChanged = function(h) {
    return !g.current && !h && v(!0), C == null ? void 0 : C(h);
  }, p ? null : /* @__PURE__ */ i.createElement(_e, {
    mode: l,
    locked: !g.current
  }, /* @__PURE__ */ i.createElement(ha, ne({
    visible: f
  }, S, {
    forceRender: A,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(h) {
    var G = h.className, u = h.style;
    return /* @__PURE__ */ i.createElement(rn, {
      id: t,
      className: G,
      style: u
    }, a);
  }));
}
var nr = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], or = ["active"], ar = function(t) {
  var n = t.style, o = t.className, a = t.title, l = t.eventKey;
  t.warnKey;
  var r = t.disabled, s = t.internalPopupClose, A = t.children, c = t.itemIcon, b = t.expandIcon, d = t.popupClassName, g = t.popupOffset, I = t.popupStyle, m = t.onClick, p = t.onMouseEnter, v = t.onMouseLeave, f = t.onTitleClick, S = t.onTitleMouseEnter, C = t.onTitleMouseLeave, h = de(t, nr), G = bo(l), u = i.useContext(pe), X = u.prefixCls, x = u.mode, w = u.openKeys, D = u.disabled, O = u.overflowDisabled, R = u.activeKey, y = u.selectedKeys, N = u.itemIcon, Z = u.expandIcon, M = u.onItemClick, H = u.onOpenChange, P = u.onActive, k = i.useContext(nn), L = k._internalRenderSubMenuItem, F = i.useContext(vo), T = F.isSubPathKey, Q = Ee(), Y = "".concat(X, "-submenu"), W = D || r, te = i.useRef(), $ = i.useRef(), _ = c ?? N, J = b ?? Z, se = w.includes(l), ge = !O && se, K = T(y, l), Le = fo(l, W, S, C), Be = Le.active, Pe = de(Le, or), wt = i.useState(!1), Ve = ae(wt, 2), ze = Ve[0], Xt = Ve[1], me = function(Ie) {
    W || Xt(Ie);
  }, St = function(Ie) {
    me(!0), p == null || p({
      key: l,
      domEvent: Ie
    });
  }, ot = function(Ie) {
    me(!1), v == null || v({
      key: l,
      domEvent: Ie
    });
  }, Fe = i.useMemo(function() {
    return Be || (x !== "inline" ? ze || T([R], l) : !1);
  }, [x, Be, R, ze, l, T]), Rt = ho(Q.length), Se = function(Ie) {
    W || (f == null || f({
      key: l,
      domEvent: Ie
    }), x === "inline" && H(l, !se));
  }, Ye = Ke(function(be) {
    m == null || m(ut(be)), M(be);
  }), ke = function(Ie) {
    x !== "inline" && H(l, Ie);
  }, Nt = function() {
    P(l);
  }, Re = G && "".concat(G, "-popup"), ue = /* @__PURE__ */ i.createElement("div", ne({
    role: "menuitem",
    style: Rt,
    className: "".concat(Y, "-title"),
    tabIndex: W ? null : -1,
    ref: te,
    title: typeof a == "string" ? a : null,
    "data-menu-id": O && G ? null : G,
    "aria-expanded": ge,
    "aria-haspopup": !0,
    "aria-controls": Re,
    "aria-disabled": W,
    onClick: Se,
    onFocus: Nt
  }, Pe), a, /* @__PURE__ */ i.createElement(xo, {
    icon: x !== "horizontal" ? J : void 0,
    props: oe(oe({}, t), {}, {
      isOpen: ge,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ i.createElement("i", {
    className: "".concat(Y, "-arrow")
  }))), Ne = i.useRef(x);
  if (x !== "inline" && Q.length > 1 ? Ne.current = "vertical" : Ne.current = x, !O) {
    var Ge = Ne.current;
    ue = /* @__PURE__ */ i.createElement(er, {
      mode: Ge,
      prefixCls: Y,
      visible: !s && ge && x !== "inline",
      popupClassName: d,
      popupOffset: g,
      popupStyle: I,
      popup: /* @__PURE__ */ i.createElement(
        _e,
        {
          mode: Ge === "horizontal" ? "vertical" : Ge
        },
        /* @__PURE__ */ i.createElement(rn, {
          id: Re,
          ref: $
        }, A)
      ),
      disabled: W,
      onVisibleChange: ke
    }, ue);
  }
  var je = /* @__PURE__ */ i.createElement($e.Item, ne({
    role: "none"
  }, h, {
    component: "li",
    style: n,
    className: z(Y, "".concat(Y, "-").concat(x), o, U(U(U(U({}, "".concat(Y, "-open"), ge), "".concat(Y, "-active"), Fe), "".concat(Y, "-selected"), K), "".concat(Y, "-disabled"), W)),
    onMouseEnter: St,
    onMouseLeave: ot
  }), ue, !O && /* @__PURE__ */ i.createElement(tr, {
    id: Re,
    open: ge,
    keyPath: Q
  }, A));
  return L && (je = L(je, t, {
    selected: K,
    active: Fe,
    open: ge,
    disabled: W
  })), /* @__PURE__ */ i.createElement(_e, {
    onItemClick: Ye,
    mode: x === "horizontal" ? "vertical" : x,
    itemIcon: _,
    expandIcon: J
  }, je);
};
function ht(e) {
  var t = e.eventKey, n = e.children, o = Ee(t), a = ln(n, o), l = Ct();
  i.useEffect(function() {
    if (l)
      return l.registerPath(t, o), function() {
        l.unregisterPath(t, o);
      };
  }, [o]);
  var r;
  return l ? r = a : r = /* @__PURE__ */ i.createElement(ar, e, a), /* @__PURE__ */ i.createElement(po.Provider, {
    value: o
  }, r);
}
var ir = ["className", "title", "eventKey", "children"], rr = ["children"], lr = function(t) {
  var n = t.className, o = t.title;
  t.eventKey;
  var a = t.children, l = de(t, ir), r = i.useContext(pe), s = r.prefixCls, A = "".concat(s, "-item-group");
  return /* @__PURE__ */ i.createElement("li", ne({
    role: "presentation"
  }, l, {
    onClick: function(b) {
      return b.stopPropagation();
    },
    className: z(A, n)
  }), /* @__PURE__ */ i.createElement("div", {
    role: "presentation",
    className: "".concat(A, "-title"),
    title: typeof o == "string" ? o : void 0
  }, o), /* @__PURE__ */ i.createElement("ul", {
    role: "group",
    className: "".concat(A, "-list")
  }, a));
};
function xt(e) {
  var t = e.children, n = de(e, rr), o = Ee(n.eventKey), a = ln(t, o), l = Ct();
  return l ? a : /* @__PURE__ */ i.createElement(lr, ye(n, ["warnKey"]), a);
}
function sn(e) {
  var t = e.className, n = e.style, o = i.useContext(pe), a = o.prefixCls, l = Ct();
  return l ? null : /* @__PURE__ */ i.createElement("li", {
    role: "separator",
    className: z("".concat(a, "-item-divider"), t),
    style: n
  });
}
var sr = ["label", "children", "key", "type"];
function Jt(e) {
  return (e || []).map(function(t, n) {
    if (t && xa(t) === "object") {
      var o = t, a = o.label, l = o.children, r = o.key, s = o.type, A = de(o, sr), c = r ?? "tmp-".concat(n);
      return l || s === "group" ? s === "group" ? /* @__PURE__ */ i.createElement(xt, ne({
        key: c
      }, A, {
        title: a
      }), Jt(l)) : /* @__PURE__ */ i.createElement(ht, ne({
        key: c
      }, A, {
        title: a
      }), Jt(l)) : s === "divider" ? /* @__PURE__ */ i.createElement(sn, ne({
        key: c
      }, A)) : /* @__PURE__ */ i.createElement(ft, ne({
        key: c
      }, A), a);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function Ar(e, t, n) {
  var o = e;
  return t && (o = Jt(t)), ln(o, n);
}
var cr = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Oe = [], dr = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n, o = e, a = o.prefixCls, l = a === void 0 ? "rc-menu" : a, r = o.rootClassName, s = o.style, A = o.className, c = o.tabIndex, b = c === void 0 ? 0 : c, d = o.items, g = o.children, I = o.direction, m = o.id, p = o.mode, v = p === void 0 ? "vertical" : p, f = o.inlineCollapsed, S = o.disabled, C = o.disabledOverflow, h = o.subMenuOpenDelay, G = h === void 0 ? 0.1 : h, u = o.subMenuCloseDelay, X = u === void 0 ? 0.1 : u, x = o.forceSubMenuRender, w = o.defaultOpenKeys, D = o.openKeys, O = o.activeKey, R = o.defaultActiveFirst, y = o.selectable, N = y === void 0 ? !0 : y, Z = o.multiple, M = Z === void 0 ? !1 : Z, H = o.defaultSelectedKeys, P = o.selectedKeys, k = o.onSelect, L = o.onDeselect, F = o.inlineIndent, T = F === void 0 ? 24 : F, Q = o.motion, Y = o.defaultMotions, W = o.triggerSubMenuAction, te = W === void 0 ? "hover" : W, $ = o.builtinPlacements, _ = o.itemIcon, J = o.expandIcon, se = o.overflowedIndicator, ge = se === void 0 ? "..." : se, K = o.overflowedIndicatorPopupClassName, Le = o.getPopupContainer, Be = o.onClick, Pe = o.onOpenChange, wt = o.onKeyDown;
  o.openAnimation, o.openTransitionName;
  var Ve = o._internalRenderMenuItem, ze = o._internalRenderSubMenuItem, Xt = de(o, cr), me = i.useMemo(function() {
    return Ar(g, d, Oe);
  }, [g, d]), St = i.useState(!1), ot = ae(St, 2), Fe = ot[0], Rt = ot[1], Se = i.useRef(), Ye = zi(m), ke = I === "rtl", Nt = qe(w, {
    value: D,
    postState: function(V) {
      return V || Oe;
    }
  }), Re = ae(Nt, 2), ue = Re[0], Ne = Re[1], Ge = function(V) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Ae() {
      Ne(V), Pe == null || Pe(V);
    }
    j ? ya.flushSync(Ae) : Ae();
  }, je = i.useState(ue), be = ae(je, 2), Ie = be[0], zo = be[1], Ht = i.useRef(!1), Fo = i.useMemo(function() {
    return (v === "inline" || v === "vertical") && f ? ["vertical", f] : [v, !1];
  }, [v, f]), gn = ae(Fo, 2), at = gn[0], Zt = gn[1], un = at === "inline", Yo = i.useState(at), mn = ae(Yo, 2), he = mn[0], ko = mn[1], jo = i.useState(Zt), bn = ae(jo, 2), To = bn[0], Uo = bn[1];
  i.useEffect(function() {
    ko(at), Uo(Zt), Ht.current && (un ? Ne(Ie) : Ge(Oe));
  }, [at, Zt]);
  var Qo = i.useState(0), In = ae(Qo, 2), it = In[0], Jo = In[1], Ot = it >= me.length - 1 || he !== "horizontal" || C;
  i.useEffect(function() {
    un && zo(ue);
  }, [ue]), i.useEffect(function() {
    return Ht.current = !0, function() {
      Ht.current = !1;
    };
  }, []);
  var we = Pi(), pn = we.registerPath, vn = we.unregisterPath, Ko = we.refreshOverflowKeys, Cn = we.isSubPathKey, qo = we.getKeyPath, fn = we.getKeys, $o = we.getSubPathKeys, _o = i.useMemo(function() {
    return {
      registerPath: pn,
      unregisterPath: vn
    };
  }, [pn, vn]), ea = i.useMemo(function() {
    return {
      isSubPathKey: Cn
    };
  }, [Cn]);
  i.useEffect(function() {
    Ko(Ot ? Oe : me.slice(it + 1).map(function(q) {
      return q.key;
    }));
  }, [it, Ot]);
  var ta = qe(O || R && ((n = me[0]) === null || n === void 0 ? void 0 : n.key), {
    value: O
  }), hn = ae(ta, 2), Te = hn[0], Dt = hn[1], na = Ke(function(q) {
    Dt(q);
  }), oa = Ke(function() {
    Dt(void 0);
  });
  i.useImperativeHandle(t, function() {
    return {
      list: Se.current,
      focus: function(V) {
        var j, Ae = fn(), ce = Ut(Ae, Ye), lt = ce.elements, Mt = ce.key2element, ua = ce.element2key, Bn = on(Se.current, lt), Gn = Te ?? (Bn[0] ? ua.get(Bn[0]) : (j = me.find(function(ma) {
          return !ma.props.disabled;
        })) === null || j === void 0 ? void 0 : j.key), Ue = Mt.get(Gn);
        if (Gn && Ue) {
          var Et;
          Ue == null || (Et = Ue.focus) === null || Et === void 0 || Et.call(Ue, V);
        }
      }
    };
  });
  var aa = qe(H || [], {
    value: P,
    // Legacy convert key to array
    postState: function(V) {
      return Array.isArray(V) ? V : V == null ? Oe : [V];
    }
  }), xn = ae(aa, 2), rt = xn[0], ia = xn[1], ra = function(V) {
    if (N) {
      var j = V.key, Ae = rt.includes(j), ce;
      M ? Ae ? ce = rt.filter(function(Mt) {
        return Mt !== j;
      }) : ce = [].concat(xe(rt), [j]) : ce = [j], ia(ce);
      var lt = oe(oe({}, V), {}, {
        selectedKeys: ce
      });
      Ae ? L == null || L(lt) : k == null || k(lt);
    }
    !M && ue.length && he !== "inline" && Ge(Oe);
  }, la = Ke(function(q) {
    Be == null || Be(ut(q)), ra(q);
  }), yn = Ke(function(q, V) {
    var j = ue.filter(function(ce) {
      return ce !== q;
    });
    if (V)
      j.push(q);
    else if (he !== "inline") {
      var Ae = $o(q);
      j = j.filter(function(ce) {
        return !Ae.has(ce);
      });
    }
    qn(ue, j, !0) || Ge(j, !0);
  }), sa = function(V, j) {
    var Ae = j ?? !ue.includes(V);
    yn(V, Ae);
  }, Aa = Ei(he, Te, ke, Ye, Se, fn, qo, Dt, sa, wt);
  i.useEffect(function() {
    Rt(!0);
  }, []);
  var ca = i.useMemo(function() {
    return {
      _internalRenderMenuItem: Ve,
      _internalRenderSubMenuItem: ze
    };
  }, [Ve, ze]), da = he !== "horizontal" || C ? me : (
    // Need wrap for overflow dropdown that do not response for open
    me.map(function(q, V) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ i.createElement(_e, {
          key: q.key,
          overflowDisabled: V > it
        }, q)
      );
    })
  ), ga = /* @__PURE__ */ i.createElement($e, ne({
    id: m,
    ref: Se,
    prefixCls: "".concat(l, "-overflow"),
    component: "ul",
    itemComponent: ft,
    className: z(l, "".concat(l, "-root"), "".concat(l, "-").concat(he), A, U(U({}, "".concat(l, "-inline-collapsed"), To), "".concat(l, "-rtl"), ke), r),
    dir: I,
    style: s,
    role: "menu",
    tabIndex: b,
    data: da,
    renderRawItem: function(V) {
      return V;
    },
    renderRawRest: function(V) {
      var j = V.length, Ae = j ? me.slice(-j) : null;
      return /* @__PURE__ */ i.createElement(ht, {
        eventKey: Qt,
        title: ge,
        disabled: Ot,
        internalPopupClose: j === 0,
        popupClassName: K
      }, Ae);
    },
    maxCount: he !== "horizontal" || C ? $e.INVALIDATE : $e.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(V) {
      Jo(V);
    },
    onKeyDown: Aa
  }, Xt));
  return /* @__PURE__ */ i.createElement(nn.Provider, {
    value: ca
  }, /* @__PURE__ */ i.createElement(uo.Provider, {
    value: Ye
  }, /* @__PURE__ */ i.createElement(_e, {
    prefixCls: l,
    rootClassName: r,
    mode: he,
    openKeys: ue,
    rtl: ke,
    disabled: S,
    motion: Fe ? Q : null,
    defaultMotions: Fe ? Y : null,
    activeKey: Te,
    onActive: na,
    onInactive: oa,
    selectedKeys: rt,
    inlineIndent: T,
    subMenuOpenDelay: G,
    subMenuCloseDelay: X,
    forceSubMenuRender: x,
    builtinPlacements: $,
    triggerSubMenuAction: te,
    getPopupContainer: Le,
    itemIcon: _,
    expandIcon: J,
    onItemClick: la,
    onOpenChange: yn
  }, /* @__PURE__ */ i.createElement(vo.Provider, {
    value: ea
  }, ga), /* @__PURE__ */ i.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ i.createElement(Io.Provider, {
    value: _o
  }, me)))));
}), tt = dr;
tt.Item = ft;
tt.SubMenu = ht;
tt.ItemGroup = xt;
tt.Divider = sn;
var gr = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const ur = gr;
var mr = function(t, n) {
  return /* @__PURE__ */ i.createElement(It, ne({}, t, {
    ref: n,
    icon: ur
  }));
}, br = /* @__PURE__ */ i.forwardRef(mr);
const Ir = br;
var pr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const vr = pr;
var Cr = function(t, n) {
  return /* @__PURE__ */ i.createElement(It, ne({}, t, {
    ref: n,
    icon: vr
  }));
}, fr = /* @__PURE__ */ i.forwardRef(Cr);
const Pn = fr, hr = (e) => !isNaN(parseFloat(e)) && isFinite(e), Bo = /* @__PURE__ */ i.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var xr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const Vn = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, yt = /* @__PURE__ */ i.createContext({}), yr = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), Br = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: o,
    trigger: a,
    children: l,
    defaultCollapsed: r = !1,
    theme: s = "dark",
    style: A = {},
    collapsible: c = !1,
    reverseArrow: b = !1,
    width: d = 200,
    collapsedWidth: g = 80,
    zeroWidthTriggerStyle: I,
    breakpoint: m,
    onCollapse: p,
    onBreakpoint: v
  } = e, f = xr(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: S
  } = i.useContext(Bo), [C, h] = i.useState("collapsed" in e ? e.collapsed : r), [G, u] = i.useState(!1);
  i.useEffect(() => {
    "collapsed" in e && h(e.collapsed);
  }, [e.collapsed]);
  const X = (y, N) => {
    "collapsed" in e || h(y), p == null || p(y, N);
  }, x = i.useRef();
  x.current = (y) => {
    u(y.matches), v == null || v(y.matches), C !== y.matches && X(y.matches, "responsive");
  }, i.useEffect(() => {
    function y(Z) {
      return x.current(Z);
    }
    let N;
    if (typeof window < "u") {
      const {
        matchMedia: Z
      } = window;
      if (Z && m && m in Vn) {
        N = Z(`screen and (max-width: ${Vn[m]})`);
        try {
          N.addEventListener("change", y);
        } catch {
          N.addListener(y);
        }
        y(N);
      }
    }
    return () => {
      try {
        N == null || N.removeEventListener("change", y);
      } catch {
        N == null || N.removeListener(y);
      }
    };
  }, [m]), i.useEffect(() => {
    const y = yr("ant-sider-");
    return S.addSider(y), () => S.removeSider(y);
  }, []);
  const w = () => {
    X(!C, "clickTrigger");
  }, {
    getPrefixCls: D
  } = i.useContext(fe), O = () => {
    const y = D("layout-sider", n), N = ye(f, ["collapsed"]), Z = C ? g : d, M = hr(Z) ? `${Z}px` : String(Z), H = parseFloat(String(g || 0)) === 0 ? /* @__PURE__ */ i.createElement("span", {
      onClick: w,
      className: z(`${y}-zero-width-trigger`, `${y}-zero-width-trigger-${b ? "right" : "left"}`),
      style: I
    }, a || /* @__PURE__ */ i.createElement(Ir, null)) : null, L = {
      expanded: b ? /* @__PURE__ */ i.createElement(Yt, null) : /* @__PURE__ */ i.createElement(Pn, null),
      collapsed: b ? /* @__PURE__ */ i.createElement(Pn, null) : /* @__PURE__ */ i.createElement(Yt, null)
    }[C ? "collapsed" : "expanded"], F = a !== null ? H || /* @__PURE__ */ i.createElement("div", {
      className: `${y}-trigger`,
      onClick: w,
      style: {
        width: M
      }
    }, a || L) : null, T = Object.assign(Object.assign({}, A), {
      flex: `0 0 ${M}`,
      maxWidth: M,
      minWidth: M,
      width: M
    }), Q = z(y, `${y}-${s}`, {
      [`${y}-collapsed`]: !!C,
      [`${y}-has-trigger`]: c && a !== null && !H,
      [`${y}-below`]: !!G,
      [`${y}-zero-width`]: parseFloat(M) === 0
    }, o);
    return /* @__PURE__ */ i.createElement("aside", Object.assign({
      className: Q
    }, N, {
      style: T,
      ref: t
    }), /* @__PURE__ */ i.createElement("div", {
      className: `${y}-children`
    }, l), c || G && H ? F : null);
  }, R = i.useMemo(() => ({
    siderCollapsed: C
  }), [C]);
  return /* @__PURE__ */ i.createElement(yt.Provider, {
    value: R
  }, O());
}), An = Br;
var Gr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const wr = Gr;
var Xr = function(t, n) {
  return /* @__PURE__ */ i.createElement(It, ne({}, t, {
    ref: n,
    icon: wr
  }));
}, Sr = /* @__PURE__ */ i.forwardRef(Xr);
const Go = Sr;
var Rr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const Nr = (e) => {
  const {
    prefixCls: t,
    className: n,
    dashed: o
  } = e, a = Rr(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: l
  } = i.useContext(fe), r = l("menu", t), s = z({
    [`${r}-item-divider-dashed`]: !!o
  }, n);
  return /* @__PURE__ */ i.createElement(sn, Object.assign({
    className: s
  }, a));
}, wo = Nr, Hr = /* @__PURE__ */ i.createContext({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), mt = Hr, Zr = (e) => {
  var t;
  const {
    className: n,
    children: o,
    icon: a,
    title: l,
    danger: r
  } = e, {
    prefixCls: s,
    firstLevel: A,
    direction: c,
    disableMenuItemTitleTooltip: b,
    inlineCollapsed: d
  } = i.useContext(mt), g = (S) => {
    const C = /* @__PURE__ */ i.createElement("span", {
      className: `${s}-title-content`
    }, o);
    return (!a || /* @__PURE__ */ i.isValidElement(o) && o.type === "span") && o && S && A && typeof o == "string" ? /* @__PURE__ */ i.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, o.charAt(0)) : C;
  }, {
    siderCollapsed: I
  } = i.useContext(yt);
  let m = l;
  typeof l > "u" ? m = A ? o : "" : l === !1 && (m = "");
  const p = {
    title: m
  };
  !I && !d && (p.title = null, p.open = !1);
  const v = pt(o).length;
  let f = /* @__PURE__ */ i.createElement(ft, Object.assign({}, ye(e, ["title", "icon", "danger"]), {
    className: z({
      [`${s}-item-danger`]: r,
      [`${s}-item-only-child`]: (a ? v + 1 : v) === 1
    }, n),
    title: typeof l == "string" ? l : void 0
  }), vt(a, {
    className: z(/* @__PURE__ */ i.isValidElement(a) ? (t = a.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
  }), g(d));
  return b || (f = /* @__PURE__ */ i.createElement(en, Object.assign({}, p, {
    placement: c === "rtl" ? "left" : "right",
    overlayClassName: `${s}-inline-collapsed-tooltip`
  }), f)), f;
}, Xo = Zr, Or = (e) => {
  var t;
  const {
    popupClassName: n,
    icon: o,
    title: a,
    theme: l
  } = e, r = i.useContext(mt), {
    prefixCls: s,
    inlineCollapsed: A,
    theme: c
  } = r, b = Ee();
  let d;
  if (!o)
    d = A && !b.length && a && typeof a == "string" ? /* @__PURE__ */ i.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, a.charAt(0)) : /* @__PURE__ */ i.createElement("span", {
      className: `${s}-title-content`
    }, a);
  else {
    const m = /* @__PURE__ */ i.isValidElement(a) && a.type === "span";
    d = /* @__PURE__ */ i.createElement(i.Fragment, null, vt(o, {
      className: z(/* @__PURE__ */ i.isValidElement(o) ? (t = o.props) === null || t === void 0 ? void 0 : t.className : "", `${s}-item-icon`)
    }), m ? a : /* @__PURE__ */ i.createElement("span", {
      className: `${s}-title-content`
    }, a));
  }
  const g = i.useMemo(() => Object.assign(Object.assign({}, r), {
    firstLevel: !1
  }), [r]), [I] = eo("Menu");
  return /* @__PURE__ */ i.createElement(mt.Provider, {
    value: g
  }, /* @__PURE__ */ i.createElement(ht, Object.assign({}, ye(e, ["icon"]), {
    title: d,
    popupClassName: z(s, n, `${s}-${l || c}`),
    popupStyle: {
      zIndex: I
    }
  })));
}, So = Or;
var Dr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
function Kt(e) {
  return (e || []).map((t, n) => {
    if (t && typeof t == "object") {
      const o = t, {
        label: a,
        children: l,
        key: r,
        type: s
      } = o, A = Dr(o, ["label", "children", "key", "type"]), c = r ?? `tmp-${n}`;
      return l || s === "group" ? s === "group" ? /* @__PURE__ */ i.createElement(xt, Object.assign({
        key: c
      }, A, {
        title: a
      }), Kt(l)) : /* @__PURE__ */ i.createElement(So, Object.assign({
        key: c
      }, A, {
        title: a
      }), Kt(l)) : s === "divider" ? /* @__PURE__ */ i.createElement(wo, Object.assign({
        key: c
      }, A)) : /* @__PURE__ */ i.createElement(Xo, Object.assign({
        key: c
      }, A), a);
    }
    return null;
  }).filter((t) => t);
}
function Mr(e) {
  return i.useMemo(() => e && Kt(e), [e]);
}
var Er = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const bt = /* @__PURE__ */ i.createContext(null), Wr = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    children: n
  } = e, o = Er(e, ["children"]), a = i.useContext(bt), l = i.useMemo(() => Object.assign(Object.assign({}, a), o), [
    a,
    o.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    o.mode,
    o.selectable,
    o.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), r = Ba(n), s = _n(t, r ? n.ref : null);
  return /* @__PURE__ */ i.createElement(bt.Provider, {
    value: l
  }, /* @__PURE__ */ i.createElement(Ga, null, r ? /* @__PURE__ */ i.cloneElement(n, {
    ref: s
  }) : n));
}), Lr = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    horizontalLineHeight: o,
    colorSplit: a,
    lineWidth: l,
    lineType: r,
    itemPaddingInline: s
  } = e;
  return {
    [`${t}-horizontal`]: {
      lineHeight: o,
      border: 0,
      borderBottom: `${E(l)} ${r} ${a}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${t}-item, ${t}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: s
      },
      [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${t}-item, ${t}-submenu-title`]: {
        transition: [`border-color ${n}`, `background ${n}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${t}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
}, Pr = (e) => {
  let {
    componentCls: t,
    menuArrowOffset: n,
    calc: o
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    },
    [`${t}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
      [`${t}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(${E(o(n).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${E(n)})`
        }
      }
    }
  };
}, zn = (e) => Object.assign({}, wa(e)), Fn = (e, t) => {
  const {
    componentCls: n,
    itemColor: o,
    itemSelectedColor: a,
    groupTitleColor: l,
    itemBg: r,
    subMenuItemBg: s,
    itemSelectedBg: A,
    activeBarHeight: c,
    activeBarWidth: b,
    activeBarBorderWidth: d,
    motionDurationSlow: g,
    motionEaseInOut: I,
    motionEaseOut: m,
    itemPaddingInline: p,
    motionDurationMid: v,
    itemHoverColor: f,
    lineType: S,
    colorSplit: C,
    // Disabled
    itemDisabledColor: h,
    // Danger
    dangerItemColor: G,
    dangerItemHoverColor: u,
    dangerItemSelectedColor: X,
    dangerItemActiveBg: x,
    dangerItemSelectedBg: w,
    // Bg
    popupBg: D,
    itemHoverBg: O,
    itemActiveBg: R,
    menuSubMenuBg: y,
    // Horizontal
    horizontalItemSelectedColor: N,
    horizontalItemSelectedBg: Z,
    horizontalItemBorderRadius: M,
    horizontalItemHoverBg: H
  } = e;
  return {
    [`${n}-${t}, ${n}-${t} > ${n}`]: {
      color: o,
      background: r,
      [`&${n}-root:focus-visible`]: Object.assign({}, zn(e)),
      // ======================== Item ========================
      [`${n}-item-group-title`]: {
        color: l
      },
      [`${n}-submenu-selected`]: {
        [`> ${n}-submenu-title`]: {
          color: a
        }
      },
      [`${n}-item, ${n}-submenu-title`]: {
        color: o,
        [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, zn(e))
      },
      // Disabled
      [`${n}-item-disabled, ${n}-submenu-disabled`]: {
        color: `${h} !important`
      },
      // Hover
      [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
        [`&:hover, > ${n}-submenu-title:hover`]: {
          color: f
        }
      },
      [`&:not(${n}-horizontal)`]: {
        [`${n}-item:not(${n}-item-selected)`]: {
          "&:hover": {
            backgroundColor: O
          },
          "&:active": {
            backgroundColor: R
          }
        },
        [`${n}-submenu-title`]: {
          "&:hover": {
            backgroundColor: O
          },
          "&:active": {
            backgroundColor: R
          }
        }
      },
      // Danger - only Item has
      [`${n}-item-danger`]: {
        color: G,
        [`&${n}-item:hover`]: {
          [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
            color: u
          }
        },
        [`&${n}-item:active`]: {
          background: x
        }
      },
      [`${n}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${n}-item-selected`]: {
        color: a,
        // Danger
        [`&${n}-item-danger`]: {
          color: X
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${n}-item-selected`]: {
        backgroundColor: A,
        // Danger
        [`&${n}-item-danger`]: {
          backgroundColor: w
        }
      },
      [`&${n}-submenu > ${n}`]: {
        backgroundColor: y
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${n}-popup > ${n}`]: {
        backgroundColor: D
      },
      [`&${n}-submenu-popup > ${n}`]: {
        backgroundColor: D
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${n}-horizontal`]: Object.assign(Object.assign({}, t === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${n}-item, > ${n}-submenu`]: {
          top: d,
          marginTop: e.calc(d).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: M,
          "&::after": {
            position: "absolute",
            insetInline: p,
            bottom: 0,
            borderBottom: `${E(c)} solid transparent`,
            transition: `border-color ${g} ${I}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: H,
            "&::after": {
              borderBottomWidth: c,
              borderBottomColor: N
            }
          },
          "&-selected": {
            color: N,
            backgroundColor: Z,
            "&:hover": {
              backgroundColor: Z
            },
            "&::after": {
              borderBottomWidth: c,
              borderBottomColor: N
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${n}-root`]: {
        [`&${n}-inline, &${n}-vertical`]: {
          borderInlineEnd: `${E(d)} ${S} ${C}`
        }
      },
      // ======================== Inline ========================
      [`&${n}-inline`]: {
        // Sub
        [`${n}-sub${n}-inline`]: {
          background: s
        },
        [`${n}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${E(b)} solid ${a}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${v} ${m}`, `opacity ${v} ${m}`].join(","),
            content: '""'
          },
          // Danger
          [`&${n}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: X
            }
          }
        },
        [`${n}-selected, ${n}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${v} ${I}`, `opacity ${v} ${I}`].join(",")
          }
        }
      }
    }
  };
}, Yn = (e) => {
  const {
    componentCls: t,
    itemHeight: n,
    itemMarginInline: o,
    padding: a,
    menuArrowSize: l,
    marginXS: r,
    itemMarginBlock: s,
    itemWidth: A
  } = e, c = e.calc(l).add(a).add(r).equal();
  return {
    [`${t}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${t}-item, ${t}-submenu-title`]: {
      height: n,
      lineHeight: E(n),
      paddingInline: a,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: o,
      marginBlock: s,
      width: A
    },
    [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
      height: n,
      lineHeight: E(n)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: c
    }
  };
}, Vr = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    itemHeight: o,
    colorTextLightSolid: a,
    dropdownWidth: l,
    controlHeightLG: r,
    motionDurationMid: s,
    motionEaseOut: A,
    paddingXL: c,
    itemMarginInline: b,
    fontSizeLG: d,
    motionDurationSlow: g,
    paddingXS: I,
    boxShadowSecondary: m,
    collapsedWidth: p,
    collapsedIconSize: v
  } = e, f = {
    height: o,
    lineHeight: E(o),
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [t]: {
        "&-inline, &-vertical": Object.assign({
          [`&${t}-root`]: {
            boxShadow: "none"
          }
        }, Yn(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, Yn(e)), {
          boxShadow: m
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: l,
        maxHeight: `calc(100vh - ${E(e.calc(r).mul(2.5).equal())})`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${t}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${g}`, `background ${g}`, `padding ${s} ${A}`].join(","),
            [`> ${t}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${t}-sub${t}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${t}-submenu > ${t}-submenu-title`]: f,
          [`& ${t}-item-group-title`]: {
            paddingInlineStart: c
          }
        },
        // >>>>> Item
        [`${t}-item`]: f
      }
    },
    // Inline Collapse Only
    {
      [`${t}-inline-collapsed`]: {
        width: p,
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
            [`> ${t}-inline-collapsed-noicon`]: {
              fontSize: d,
              textAlign: "center"
            }
          }
        },
        [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${E(e.calc(d).div(2).equal())} - ${E(b)})`,
          textOverflow: "clip",
          [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${t}-item-icon, ${n}`]: {
            margin: 0,
            fontSize: v,
            lineHeight: E(o),
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${t}-item-icon, ${n}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${t}-item-icon, ${n}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: a
          }
        },
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, Xa), {
          paddingInline: I
        })
      }
    }
  ];
}, kn = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    motionDurationMid: o,
    motionEaseInOut: a,
    motionEaseOut: l,
    iconCls: r,
    iconSize: s,
    iconMarginInlineEnd: A
  } = e;
  return {
    // >>>>> Item
    [`${t}-item, ${t}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${n}`, `background ${n}`, `padding ${n} ${a}`].join(","),
      [`${t}-item-icon, ${r}`]: {
        minWidth: s,
        fontSize: s,
        transition: [`font-size ${o} ${l}`, `margin ${n} ${a}`, `color ${n}`].join(","),
        "+ span": {
          marginInlineStart: A,
          opacity: 1,
          transition: [`opacity ${n} ${a}`, `margin ${n}`, `color ${n}`].join(",")
        }
      },
      [`${t}-item-icon`]: Object.assign({}, Sa()),
      [`&${t}-item-only-child`]: {
        [`> ${r}, > ${t}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${t}-item-disabled, ${t}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${t}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
}, jn = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    motionEaseInOut: o,
    borderRadius: a,
    menuArrowSize: l,
    menuArrowOffset: r
  } = e;
  return {
    [`${t}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: e.margin,
        width: l,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${n} ${o}, opacity ${n}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: e.calc(l).mul(0.6).equal(),
          height: e.calc(l).mul(0.15).equal(),
          backgroundColor: "currentcolor",
          borderRadius: a,
          transition: [`background ${n} ${o}`, `transform ${n} ${o}`, `top ${n} ${o}`, `color ${n} ${o}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(${E(e.calc(r).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${E(r)})`
        }
      }
    }
  };
}, zr = (e) => {
  const {
    antCls: t,
    componentCls: n,
    fontSize: o,
    motionDurationSlow: a,
    motionDurationMid: l,
    motionEaseInOut: r,
    paddingXS: s,
    padding: A,
    colorSplit: c,
    lineWidth: b,
    zIndexPopup: d,
    borderRadiusLG: g,
    subMenuItemBorderRadius: I,
    menuArrowSize: m,
    menuArrowOffset: p,
    lineType: v,
    groupTitleLineHeight: f,
    groupTitleFontSize: S
  } = e;
  return [
    // Misc
    {
      "": {
        [`${n}`]: Object.assign(Object.assign({}, wn()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${n}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, no(e)), wn()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize: o,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        // Magic cubic here but smooth transition
        transition: `width ${a} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${n}-item`]: {
            flex: "none"
          }
        },
        [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
          borderRadius: e.itemBorderRadius
        },
        [`${n}-item-group-title`]: {
          padding: `${E(s)} ${E(A)}`,
          fontSize: S,
          lineHeight: f,
          transition: `all ${a}`
        },
        [`&-horizontal ${n}-submenu`]: {
          transition: [`border-color ${a} ${r}`, `background ${a} ${r}`].join(",")
        },
        [`${n}-submenu, ${n}-submenu-inline`]: {
          transition: [`border-color ${a} ${r}`, `background ${a} ${r}`, `padding ${l} ${r}`].join(",")
        },
        [`${n}-submenu ${n}-sub`]: {
          cursor: "initial",
          transition: [`background ${a} ${r}`, `padding ${a} ${r}`].join(",")
        },
        [`${n}-title-content`]: {
          transition: `color ${a}`,
          // https://github.com/ant-design/ant-design/issues/41143
          [`> ${t}-typography-ellipsis-single-line`]: {
            display: "inline",
            verticalAlign: "unset"
          }
        },
        [`${n}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${n}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: c,
          borderStyle: v,
          borderWidth: 0,
          borderTopWidth: b,
          marginBlock: b,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), kn(e)), {
        [`${n}-item-group`]: {
          [`${n}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${n}-item, ${n}-submenu-title`]: {
              paddingInline: `${E(e.calc(o).mul(2).equal())} ${E(A)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: d,
            borderRadius: g,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${n}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            },
            [`> ${n}`]: Object.assign(Object.assign(Object.assign({
              borderRadius: g
            }, kn(e)), jn(e)), {
              [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                borderRadius: I
              },
              [`${n}-submenu-title::after`]: {
                transition: `transform ${a} ${r}`
              }
            })
          },
          "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ": {
            transformOrigin: "100% 0"
          },
          "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ": {
            transformOrigin: "100% 100%"
          },
          "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ": {
            transformOrigin: "0 100%"
          },
          "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ": {
            transformOrigin: "0 0"
          },
          "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ": {
            paddingInlineEnd: e.paddingXS
          },
          "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": {
            paddingInlineStart: e.paddingXS
          },
          "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": {
            paddingBottom: e.paddingXS
          },
          "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": {
            paddingTop: e.paddingXS
          }
        }
      }), jn(e)), {
        [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${E(p)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${E(e.calc(p).mul(-1).equal())})`
          }
        },
        [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${E(e.calc(m).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${E(e.calc(p).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${E(p)})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${t}-layout-header`]: {
        [n]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
}, Fr = (e) => {
  var t, n, o;
  const {
    colorPrimary: a,
    colorError: l,
    colorTextDisabled: r,
    colorErrorBg: s,
    colorText: A,
    colorTextDescription: c,
    colorBgContainer: b,
    colorFillAlter: d,
    colorFillContent: g,
    lineWidth: I,
    lineWidthBold: m,
    controlItemBgActive: p,
    colorBgTextHover: v,
    controlHeightLG: f,
    lineHeight: S,
    colorBgElevated: C,
    marginXXS: h,
    padding: G,
    fontSize: u,
    controlHeightSM: X,
    fontSizeLG: x,
    colorTextLightSolid: w,
    colorErrorHover: D
  } = e, O = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, R = (n = e.activeBarBorderWidth) !== null && n !== void 0 ? n : I, y = (o = e.itemMarginInline) !== null && o !== void 0 ? o : e.marginXXS, N = new Xn(w).setAlpha(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: e.zIndexPopupBase + 50,
    radiusItem: e.borderRadiusLG,
    itemBorderRadius: e.borderRadiusLG,
    radiusSubMenuItem: e.borderRadiusSM,
    subMenuItemBorderRadius: e.borderRadiusSM,
    colorItemText: A,
    itemColor: A,
    colorItemTextHover: A,
    itemHoverColor: A,
    colorItemTextHoverHorizontal: a,
    horizontalItemHoverColor: a,
    colorGroupTitle: c,
    groupTitleColor: c,
    colorItemTextSelected: a,
    itemSelectedColor: a,
    colorItemTextSelectedHorizontal: a,
    horizontalItemSelectedColor: a,
    colorItemBg: b,
    itemBg: b,
    colorItemBgHover: v,
    itemHoverBg: v,
    colorItemBgActive: g,
    itemActiveBg: p,
    colorSubItemBg: d,
    subMenuItemBg: d,
    colorItemBgSelected: p,
    itemSelectedBg: p,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth: O,
    colorActiveBarHeight: m,
    activeBarHeight: m,
    colorActiveBarBorderSize: I,
    activeBarBorderWidth: R,
    // Disabled
    colorItemTextDisabled: r,
    itemDisabledColor: r,
    // Danger
    colorDangerItemText: l,
    dangerItemColor: l,
    colorDangerItemTextHover: l,
    dangerItemHoverColor: l,
    colorDangerItemTextSelected: l,
    dangerItemSelectedColor: l,
    colorDangerItemBgActive: s,
    dangerItemActiveBg: s,
    colorDangerItemBgSelected: s,
    dangerItemSelectedBg: s,
    itemMarginInline: y,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: f,
    groupTitleLineHeight: S,
    collapsedWidth: f * 2,
    popupBg: C,
    itemMarginBlock: h,
    itemPaddingInline: G,
    horizontalLineHeight: `${f * 1.15}px`,
    iconSize: u,
    iconMarginInlineEnd: X - u,
    collapsedIconSize: x,
    groupTitleFontSize: u,
    // Disabled
    darkItemDisabledColor: new Xn(w).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: N,
    darkDangerItemColor: l,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: w,
    darkItemSelectedBg: a,
    darkDangerItemSelectedBg: l,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: N,
    darkItemHoverColor: w,
    darkDangerItemHoverColor: D,
    darkDangerItemSelectedColor: w,
    darkDangerItemActiveBg: l,
    // internal
    itemWidth: O ? `calc(100% + ${R}px)` : `calc(100% - ${y * 2}px)`
  };
}, Yr = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return qt("Menu", (a) => {
    const {
      colorBgElevated: l,
      controlHeightLG: r,
      fontSize: s,
      darkItemColor: A,
      darkDangerItemColor: c,
      darkItemBg: b,
      darkSubMenuItemBg: d,
      darkItemSelectedColor: g,
      darkItemSelectedBg: I,
      darkDangerItemSelectedBg: m,
      darkItemHoverBg: p,
      darkGroupTitleColor: v,
      darkItemHoverColor: f,
      darkItemDisabledColor: S,
      darkDangerItemHoverColor: C,
      darkDangerItemSelectedColor: h,
      darkDangerItemActiveBg: G,
      popupBg: u,
      darkPopupBg: X
    } = a, x = a.calc(s).div(7).mul(5).equal(), w = Vt(a, {
      menuArrowSize: x,
      menuHorizontalHeight: a.calc(r).mul(1.15).equal(),
      menuArrowOffset: a.calc(x).mul(0.25).equal(),
      menuSubMenuBg: l,
      calc: a.calc,
      popupBg: u
    }), D = Vt(w, {
      itemColor: A,
      itemHoverColor: f,
      groupTitleColor: v,
      itemSelectedColor: g,
      itemBg: b,
      popupBg: X,
      subMenuItemBg: d,
      itemActiveBg: "transparent",
      itemSelectedBg: I,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: p,
      // Disabled
      itemDisabledColor: S,
      // Danger
      dangerItemColor: c,
      dangerItemHoverColor: C,
      dangerItemSelectedColor: h,
      dangerItemActiveBg: G,
      dangerItemSelectedBg: m,
      menuSubMenuBg: d,
      // Horizontal
      horizontalItemSelectedColor: g,
      horizontalItemSelectedBg: I
    });
    return [
      // Basic
      zr(w),
      // Horizontal
      Lr(w),
      // Hard code for some light style
      // Vertical
      Vr(w),
      // Hard code for some light style
      // Theme
      Fn(w, "light"),
      Fn(D, "dark"),
      // RTL
      Pr(w),
      // Motion
      ai(w),
      gt(w, "slide-up"),
      gt(w, "slide-down"),
      to(w, "zoom-big")
    ];
  }, Fr, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle: n,
    unitless: {
      groupTitleLineHeight: !0
    }
  })(e, t);
};
var kr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
function Wt(e) {
  return e === null || e === !1;
}
const jr = /* @__PURE__ */ i.forwardRef((e, t) => {
  var n;
  const o = i.useContext(bt), a = o || {}, {
    getPrefixCls: l,
    getPopupContainer: r,
    direction: s,
    menu: A
  } = i.useContext(fe), c = l(), {
    prefixCls: b,
    className: d,
    style: g,
    theme: I = "light",
    expandIcon: m,
    _internalDisableMenuItemTitleTooltip: p,
    inlineCollapsed: v,
    siderCollapsed: f,
    items: S,
    children: C,
    rootClassName: h,
    mode: G,
    selectable: u,
    onClick: X,
    overflowedIndicatorPopupClassName: x
  } = e, w = kr(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), D = ye(w, ["collapsedWidth"]), O = Mr(S) || C;
  (n = a.validator) === null || n === void 0 || n.call(a, {
    mode: G
  });
  const R = oo(function() {
    var W;
    X == null || X.apply(void 0, arguments), (W = a.onClick) === null || W === void 0 || W.call(a);
  }), y = a.mode || G, N = u ?? a.selectable, Z = i.useMemo(() => f !== void 0 ? f : v, [v, f]), M = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: Ra(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, H = l("menu", b || a.prefixCls), P = ao(H), [k, L, F] = Yr(H, P, !o), T = z(`${H}-${I}`, A == null ? void 0 : A.className, d), Q = i.useMemo(() => {
    var W, te;
    if (typeof m == "function" || Wt(m))
      return m || null;
    if (typeof a.expandIcon == "function" || Wt(a.expandIcon))
      return a.expandIcon || null;
    if (typeof (A == null ? void 0 : A.expandIcon) == "function" || Wt(A == null ? void 0 : A.expandIcon))
      return (A == null ? void 0 : A.expandIcon) || null;
    const $ = (W = m ?? (a == null ? void 0 : a.expandIcon)) !== null && W !== void 0 ? W : A == null ? void 0 : A.expandIcon;
    return vt($, {
      className: z(`${H}-submenu-expand-icon`, /* @__PURE__ */ i.isValidElement($) ? (te = $.props) === null || te === void 0 ? void 0 : te.className : void 0)
    });
  }, [m, a == null ? void 0 : a.expandIcon, A == null ? void 0 : A.expandIcon, H]), Y = i.useMemo(() => ({
    prefixCls: H,
    inlineCollapsed: Z || !1,
    direction: s,
    firstLevel: !0,
    theme: I,
    mode: y,
    disableMenuItemTitleTooltip: p
  }), [H, Z, s, p, I]);
  return k(/* @__PURE__ */ i.createElement(bt.Provider, {
    value: null
  }, /* @__PURE__ */ i.createElement(mt.Provider, {
    value: Y
  }, /* @__PURE__ */ i.createElement(tt, Object.assign({
    getPopupContainer: r,
    overflowedIndicator: /* @__PURE__ */ i.createElement(Go, null),
    overflowedIndicatorPopupClassName: z(H, `${H}-${I}`, x),
    mode: y,
    selectable: N,
    onClick: R
  }, D, {
    inlineCollapsed: Z,
    style: Object.assign(Object.assign({}, A == null ? void 0 : A.style), g),
    className: T,
    prefixCls: H,
    direction: s,
    defaultMotions: M,
    expandIcon: Q,
    ref: t,
    rootClassName: z(h, L, a.rootClassName, F, P)
  }), O))));
}), Tr = jr, nt = /* @__PURE__ */ i.forwardRef((e, t) => {
  const n = i.useRef(null), o = i.useContext(yt);
  return i.useImperativeHandle(t, () => ({
    menu: n.current,
    focus: (a) => {
      var l;
      (l = n.current) === null || l === void 0 || l.focus(a);
    }
  })), /* @__PURE__ */ i.createElement(Tr, Object.assign({
    ref: n
  }, e, o));
});
nt.Item = Xo;
nt.SubMenu = So;
nt.Divider = wo;
nt.ItemGroup = xt;
const Ur = nt, Qr = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    colorError: o,
    colorTextLightSolid: a
  } = e, l = `${n}-item`;
  return {
    [`${t}, ${t}-menu-submenu`]: {
      [`${n} ${l}`]: {
        [`&${l}-danger:not(${l}-disabled)`]: {
          color: o,
          "&:hover": {
            color: a,
            backgroundColor: o
          }
        }
      }
    }
  };
}, Jr = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    zIndexPopup: o,
    dropdownArrowDistance: a,
    sizePopupArrow: l,
    antCls: r,
    iconCls: s,
    motionDurationMid: A,
    paddingBlock: c,
    fontSize: b,
    dropdownEdgeChildPadding: d,
    colorTextDisabled: g,
    fontSizeIcon: I,
    controlPaddingHorizontal: m,
    colorBgElevated: p
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign({}, no(e)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: o,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: e.calc(l).div(2).sub(a).equal(),
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`&-trigger${r}-btn`]: {
          [`& > ${s}-down, & > ${r}-btn-icon > ${s}-down`]: {
            fontSize: I
          }
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${r}-btn > ${s}-down`]: {
            fontSize: I
          },
          [`${s}-down::before`]: {
            transition: `transform ${A}`
          }
        },
        [`${t}-wrap-open`]: {
          [`${s}-down::before`]: {
            transform: "rotate(180deg)"
          }
        },
        "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
          display: "none"
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottomLeft,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottomLeft,
          &${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottom,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottom,
          &${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottomRight,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottomRight`]: {
          animationName: ii
        },
        [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-topLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-topLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-top,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-top,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-topRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: ri
        },
        [`&${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottomLeft,
          &${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottom,
          &${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: li
        },
        [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-top,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: si
        }
      })
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    Ai(e, p, {
      arrowPlacement: {
        top: !0,
        bottom: !0
      }
    }),
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${t} ${n}`]: {
        position: "relative",
        margin: 0
      },
      [`${n}-submenu-popup`]: {
        position: "absolute",
        zIndex: o,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul, li": {
          listStyle: "none",
          margin: 0
        }
      },
      [`${t}, ${t}-menu-submenu`]: {
        [n]: Object.assign(Object.assign({
          padding: d,
          listStyleType: "none",
          backgroundColor: p,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, Sn(e)), {
          "&:empty": {
            padding: 0,
            boxShadow: "none"
          },
          [`${n}-item-group-title`]: {
            padding: `${E(c)} ${E(m)}`,
            color: e.colorTextDescription,
            transition: `all ${A}`
          },
          // ======================= Item Content =======================
          [`${n}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center"
          },
          [`${n}-item-icon`]: {
            minWidth: b,
            marginInlineEnd: e.marginXS,
            fontSize: e.fontSizeSM
          },
          [`${n}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${A}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${n}-item, ${n}-submenu-title`]: Object.assign(Object.assign({
            clear: "both",
            margin: 0,
            padding: `${E(c)} ${E(m)}`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: b,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${A}`,
            borderRadius: e.borderRadiusSM,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, Sn(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: g,
              cursor: "not-allowed",
              "&:hover": {
                color: g,
                backgroundColor: p,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              // By design
              margin: `${E(e.marginXXS)} 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: e.colorSplit
            },
            [`${t}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              [`${t}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: e.colorTextDescription,
                fontSize: I,
                fontStyle: "normal"
              }
            }
          }),
          [`${n}-item-group-list`]: {
            margin: `0 ${E(e.marginXS)}`,
            padding: 0,
            listStyle: "none"
          },
          [`${n}-submenu-title`]: {
            paddingInlineEnd: e.calc(m).add(e.fontSizeSM).equal()
          },
          [`${n}-submenu-vertical`]: {
            position: "relative"
          },
          [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: g,
              backgroundColor: p,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${n}-submenu-selected ${t}-menu-submenu-title`]: {
            color: e.colorPrimary
          }
        })
      }
    },
    // Follow code may reuse in other components
    [gt(e, "slide-up"), gt(e, "slide-down"), On(e, "move-up"), On(e, "move-down"), to(e, "zoom-big")]
  ];
}, Kr = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, ci({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), di(e)), qr = qt("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: n,
    paddingXXS: o,
    componentCls: a
  } = e, l = Vt(e, {
    menuCls: `${a}-menu`,
    dropdownArrowDistance: e.calc(n).div(2).add(t).equal(),
    dropdownEdgeChildPadding: o
  });
  return [Jr(l), Qr(l)];
}, Kr), cn = (e) => {
  const {
    menu: t,
    arrow: n,
    prefixCls: o,
    children: a,
    trigger: l,
    disabled: r,
    dropdownRender: s,
    getPopupContainer: A,
    overlayClassName: c,
    rootClassName: b,
    overlayStyle: d,
    open: g,
    onOpenChange: I,
    // Deprecated
    visible: m,
    onVisibleChange: p,
    mouseEnterDelay: v = 0.15,
    mouseLeaveDelay: f = 0.1,
    autoAdjustOverflow: S = !0,
    placement: C = "",
    overlay: h,
    transitionName: G
  } = e, {
    getPopupContainer: u,
    getPrefixCls: X,
    direction: x,
    dropdown: w
  } = i.useContext(fe);
  Na();
  const D = i.useMemo(() => {
    const K = X();
    return G !== void 0 ? G : C.includes("top") ? `${K}-slide-down` : `${K}-slide-up`;
  }, [X, C, G]), O = i.useMemo(() => C ? C.includes("Center") ? C.slice(0, C.indexOf("Center")) : C : x === "rtl" ? "bottomRight" : "bottomLeft", [C, x]), R = X("dropdown", o), y = ao(R), [N, Z, M] = qr(R, y), [, H] = Ha(), P = i.Children.only(a), k = vt(P, {
    className: z(`${R}-trigger`, {
      [`${R}-rtl`]: x === "rtl"
    }, P.props.className),
    disabled: r
  }), L = r ? [] : l;
  let F;
  L && L.includes("contextMenu") && (F = !0);
  const [T, Q] = qe(!1, {
    value: g ?? m
  }), Y = oo((K) => {
    I == null || I(K, {
      source: "trigger"
    }), p == null || p(K), Q(K);
  }), W = z(c, b, Z, M, y, w == null ? void 0 : w.className, {
    [`${R}-rtl`]: x === "rtl"
  }), te = gi({
    arrowPointAtCenter: typeof n == "object" && n.pointAtCenter,
    autoAdjustOverflow: S,
    offset: H.marginXXS,
    arrowWidth: n ? H.sizePopupArrow : 0,
    borderRadius: H.borderRadius
  }), $ = i.useCallback(() => {
    t != null && t.selectable && (t != null && t.multiple) || (I == null || I(!1, {
      source: "menu"
    }), Q(!1));
  }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]), _ = () => {
    let K;
    return t != null && t.items ? K = /* @__PURE__ */ i.createElement(Ur, Object.assign({}, t)) : typeof h == "function" ? K = h() : K = h, s && (K = s(K)), K = i.Children.only(typeof K == "string" ? /* @__PURE__ */ i.createElement("span", null, K) : K), /* @__PURE__ */ i.createElement(Wr, {
      prefixCls: `${R}-menu`,
      rootClassName: z(M, y),
      expandIcon: /* @__PURE__ */ i.createElement("span", {
        className: `${R}-menu-submenu-arrow`
      }, /* @__PURE__ */ i.createElement(Yt, {
        className: `${R}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: $,
      validator: (Le) => {
      }
    }, K);
  }, [J, se] = eo("Dropdown", d == null ? void 0 : d.zIndex);
  let ge = /* @__PURE__ */ i.createElement(Si, Object.assign({
    alignPoint: F
  }, ye(e, ["rootClassName"]), {
    mouseEnterDelay: v,
    mouseLeaveDelay: f,
    visible: T,
    builtinPlacements: te,
    arrow: !!n,
    overlayClassName: W,
    prefixCls: R,
    getPopupContainer: A || u,
    transitionName: D,
    trigger: L,
    overlay: _,
    placement: O,
    onVisibleChange: Y,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, w == null ? void 0 : w.style), d), {
      zIndex: J
    })
  }), k);
  return J && (ge = /* @__PURE__ */ i.createElement(Za.Provider, {
    value: se
  }, ge)), N(ge);
};
function $r(e) {
  return Object.assign(Object.assign({}, e), {
    align: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
}
const _r = Oa(cn, "dropdown", (e) => e, $r), el = (e) => /* @__PURE__ */ i.createElement(_r, Object.assign({}, e), /* @__PURE__ */ i.createElement("span", null));
cn._InternalPanelDoNotUseOrYouWillBeFired = el;
const Ro = cn;
function Tn(e) {
  return ["small", "middle", "large"].includes(e);
}
function Un(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const No = /* @__PURE__ */ le.createContext({
  latestIndex: 0
}), tl = No.Provider, nl = (e) => {
  let {
    className: t,
    index: n,
    children: o,
    split: a,
    style: l
  } = e;
  const {
    latestIndex: r
  } = i.useContext(No);
  return o == null ? null : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", {
    className: t,
    style: l
  }, o), n < r && a && /* @__PURE__ */ i.createElement("span", {
    className: `${t}-split`
  }, a));
}, ol = nl;
var al = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const il = /* @__PURE__ */ i.forwardRef((e, t) => {
  var n, o;
  const {
    getPrefixCls: a,
    space: l,
    direction: r
  } = i.useContext(fe), {
    size: s = (l == null ? void 0 : l.size) || "small",
    align: A,
    className: c,
    rootClassName: b,
    children: d,
    direction: g = "horizontal",
    prefixCls: I,
    split: m,
    style: p,
    wrap: v = !1,
    classNames: f,
    styles: S
  } = e, C = al(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [h, G] = Array.isArray(s) ? s : [s, s], u = Tn(G), X = Tn(h), x = Un(G), w = Un(h), D = pt(d, {
    keepEmpty: !0
  }), O = A === void 0 && g === "horizontal" ? "center" : A, R = a("space", I), [y, N, Z] = Ma(R), M = z(R, l == null ? void 0 : l.className, N, `${R}-${g}`, {
    [`${R}-rtl`]: r === "rtl",
    [`${R}-align-${O}`]: O,
    [`${R}-gap-row-${G}`]: u,
    [`${R}-gap-col-${h}`]: X
  }, c, b, Z), H = z(`${R}-item`, (n = f == null ? void 0 : f.item) !== null && n !== void 0 ? n : (o = l == null ? void 0 : l.classNames) === null || o === void 0 ? void 0 : o.item);
  let P = 0;
  const k = D.map((T, Q) => {
    var Y, W;
    T != null && (P = Q);
    const te = T && T.key || `${H}-${Q}`;
    return /* @__PURE__ */ i.createElement(ol, {
      className: H,
      key: te,
      index: Q,
      split: m,
      style: (Y = S == null ? void 0 : S.item) !== null && Y !== void 0 ? Y : (W = l == null ? void 0 : l.styles) === null || W === void 0 ? void 0 : W.item
    }, T);
  }), L = i.useMemo(() => ({
    latestIndex: P
  }), [P]);
  if (D.length === 0)
    return null;
  const F = {};
  return v && (F.flexWrap = "wrap"), !X && w && (F.columnGap = h), !u && x && (F.rowGap = G), y(/* @__PURE__ */ i.createElement("div", Object.assign({
    ref: t,
    className: M,
    style: Object.assign(Object.assign(Object.assign({}, F), l == null ? void 0 : l.style), p)
  }, C), /* @__PURE__ */ i.createElement(tl, {
    value: L
  }, k)));
}), Ho = il;
Ho.Compact = Da;
const rl = Ho;
var ll = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
const Zo = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: n,
    direction: o
  } = i.useContext(fe), {
    prefixCls: a,
    type: l = "default",
    danger: r,
    disabled: s,
    loading: A,
    onClick: c,
    htmlType: b,
    children: d,
    className: g,
    menu: I,
    arrow: m,
    autoFocus: p,
    overlay: v,
    trigger: f,
    align: S,
    open: C,
    onOpenChange: h,
    placement: G,
    getPopupContainer: u,
    href: X,
    icon: x = /* @__PURE__ */ i.createElement(Go, null),
    title: w,
    buttonsRender: D = (_) => _,
    mouseEnterDelay: O,
    mouseLeaveDelay: R,
    overlayClassName: y,
    overlayStyle: N,
    destroyPopupOnHide: Z,
    dropdownRender: M
  } = e, H = ll(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), P = n("dropdown", a), k = `${P}-button`, L = {
    menu: I,
    arrow: m,
    autoFocus: p,
    align: S,
    disabled: s,
    trigger: s ? [] : f,
    onOpenChange: h,
    getPopupContainer: u || t,
    mouseEnterDelay: O,
    mouseLeaveDelay: R,
    overlayClassName: y,
    overlayStyle: N,
    destroyPopupOnHide: Z,
    dropdownRender: M
  }, {
    compactSize: F,
    compactItemClassnames: T
  } = Ea(P, o), Q = z(k, T, g);
  "overlay" in e && (L.overlay = v), "open" in e && (L.open = C), "placement" in e ? L.placement = G : L.placement = o === "rtl" ? "bottomLeft" : "bottomRight";
  const Y = /* @__PURE__ */ i.createElement(zt, {
    type: l,
    danger: r,
    disabled: s,
    loading: A,
    onClick: c,
    htmlType: b,
    href: X,
    title: w
  }, d), W = /* @__PURE__ */ i.createElement(zt, {
    type: l,
    danger: r,
    icon: x
  }), [te, $] = D([Y, W]);
  return /* @__PURE__ */ i.createElement(rl.Compact, Object.assign({
    className: Q,
    size: F,
    block: !0
  }, H), te, /* @__PURE__ */ i.createElement(Ro, Object.assign({}, L), $));
};
Zo.__ANT_BUTTON = !0;
const sl = Zo, Oo = Ro;
Oo.Button = sl;
const Do = Oo;
function Al(e, t, n) {
  return typeof n == "boolean" ? n : e.length ? !0 : pt(t).some((a) => a.type === An);
}
const cl = (e) => {
  const {
    componentCls: t,
    bodyBg: n,
    lightSiderBg: o,
    lightTriggerBg: a,
    lightTriggerColor: l
  } = e;
  return {
    [`${t}-sider-light`]: {
      background: o,
      [`${t}-sider-trigger`]: {
        color: l,
        background: a
      },
      [`${t}-sider-zero-width-trigger`]: {
        color: l,
        background: a,
        border: `1px solid ${n}`,
        // Safe to modify to any other color
        borderInlineStart: 0
      }
    }
  };
}, dl = (e) => {
  const {
    antCls: t,
    // .ant
    componentCls: n,
    // .ant-layout
    colorText: o,
    triggerColor: a,
    footerBg: l,
    triggerBg: r,
    headerHeight: s,
    headerPadding: A,
    headerColor: c,
    footerPadding: b,
    triggerHeight: d,
    zeroTriggerHeight: g,
    zeroTriggerWidth: I,
    motionDurationMid: m,
    motionDurationSlow: p,
    fontSize: v,
    borderRadius: f,
    bodyBg: S,
    headerBg: C,
    siderBg: h
  } = e;
  return {
    [n]: Object.assign(Object.assign({
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: S,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${n}-has-sider`]: {
        flexDirection: "row",
        [`> ${n}, > ${n}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${n}-header, &${n}-footer`]: {
        flex: "0 0 auto"
      },
      [`${n}-sider`]: {
        position: "relative",
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: h,
        transition: `all ${m}, background 0s`,
        "&-children": {
          height: "100%",
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${t}-menu${t}-menu-inline-collapsed`]: {
            width: "auto"
          }
        },
        "&-has-trigger": {
          paddingBottom: d
        },
        "&-right": {
          order: 1
        },
        "&-trigger": {
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          height: d,
          color: a,
          lineHeight: E(d),
          textAlign: "center",
          background: r,
          cursor: "pointer",
          transition: `all ${m}`
        },
        "&-zero-width": {
          "> *": {
            overflow: "hidden"
          },
          "&-trigger": {
            position: "absolute",
            top: s,
            insetInlineEnd: e.calc(I).mul(-1).equal(),
            zIndex: 1,
            width: I,
            height: g,
            color: a,
            fontSize: e.fontSizeXL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: h,
            borderStartStartRadius: 0,
            borderStartEndRadius: f,
            borderEndEndRadius: f,
            borderEndStartRadius: 0,
            cursor: "pointer",
            transition: `background ${p} ease`,
            "&::after": {
              position: "absolute",
              inset: 0,
              background: "transparent",
              transition: `all ${p}`,
              content: '""'
            },
            "&:hover::after": {
              background: "rgba(255, 255, 255, 0.2)"
            },
            "&-right": {
              insetInlineStart: e.calc(I).mul(-1).equal(),
              borderStartStartRadius: f,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: f
            }
          }
        }
      }
    }, cl(e)), {
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    }),
    // ==================== Header ====================
    [`${n}-header`]: {
      height: s,
      padding: A,
      color: c,
      lineHeight: E(s),
      background: C,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${t}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${n}-footer`]: {
      padding: b,
      color: o,
      fontSize: v,
      background: l
    },
    // =================== Content ====================
    [`${n}-content`]: {
      flex: "auto",
      color: o,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
}, gl = (e) => {
  const {
    colorBgLayout: t,
    controlHeight: n,
    controlHeightLG: o,
    colorText: a,
    controlHeightSM: l,
    marginXXS: r,
    colorTextLightSolid: s,
    colorBgContainer: A
  } = e, c = o * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: t,
    colorBgTrigger: "#002140",
    bodyBg: t,
    headerBg: "#001529",
    headerHeight: n * 2,
    headerPadding: `0 ${c}px`,
    headerColor: a,
    footerPadding: `${l}px ${c}px`,
    footerBg: t,
    siderBg: "#001529",
    triggerHeight: o + r * 2,
    triggerBg: "#002140",
    triggerColor: s,
    zeroTriggerWidth: o,
    zeroTriggerHeight: o,
    lightSiderBg: A,
    lightTriggerBg: A,
    lightTriggerColor: a
  };
}, Mo = qt("Layout", (e) => [dl(e)], gl, {
  deprecatedTokens: [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]]
});
var Eo = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
  return n;
};
function Bt(e) {
  let {
    suffixCls: t,
    tagName: n,
    displayName: o
  } = e;
  return (a) => /* @__PURE__ */ i.forwardRef((r, s) => /* @__PURE__ */ i.createElement(a, Object.assign({
    ref: s,
    suffixCls: t,
    tagName: n
  }, r)));
}
const dn = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: n,
    suffixCls: o,
    className: a,
    tagName: l
  } = e, r = Eo(e, ["prefixCls", "suffixCls", "className", "tagName"]), {
    getPrefixCls: s
  } = i.useContext(fe), A = s("layout", n), [c, b, d] = Mo(A), g = o ? `${A}-${o}` : A;
  return c(/* @__PURE__ */ i.createElement(l, Object.assign({
    className: z(n || g, a, b, d),
    ref: t
  }, r)));
}), ul = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    direction: n
  } = i.useContext(fe), [o, a] = i.useState([]), {
    prefixCls: l,
    className: r,
    rootClassName: s,
    children: A,
    hasSider: c,
    tagName: b,
    style: d
  } = e, g = Eo(e, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]), I = ye(g, ["suffixCls"]), {
    getPrefixCls: m,
    layout: p
  } = i.useContext(fe), v = m("layout", l), f = Al(o, A, c), [S, C, h] = Mo(v), G = z(v, {
    [`${v}-has-sider`]: f,
    [`${v}-rtl`]: n === "rtl"
  }, p == null ? void 0 : p.className, r, s, C, h), u = i.useMemo(() => ({
    siderHook: {
      addSider: (X) => {
        a((x) => [].concat(xe(x), [X]));
      },
      removeSider: (X) => {
        a((x) => x.filter((w) => w !== X));
      }
    }
  }), []);
  return S(/* @__PURE__ */ i.createElement(Bo.Provider, {
    value: u
  }, /* @__PURE__ */ i.createElement(b, Object.assign({
    ref: t,
    className: G,
    style: Object.assign(Object.assign({}, p == null ? void 0 : p.style), d)
  }, I), A)));
}), ml = Bt({
  tagName: "div",
  displayName: "Layout"
})(ul), bl = Bt({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(dn), Il = Bt({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(dn), pl = Bt({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(dn), vl = ml, We = vl;
We.Header = bl;
We.Footer = Il;
We.Content = pl;
We.Sider = An;
We._InternalSiderContext = yt;
const Qn = We;
function Cl(e, t, n, o) {
  for (var a = -1, l = e == null ? 0 : e.length; ++a < l; ) {
    var r = e[a];
    t(o, r, n(r), e);
  }
  return o;
}
function fl(e, t, n, o) {
  return Wa(e, function(a, l, r) {
    t(o, a, n(a), r);
  }), o;
}
function hl(e, t) {
  return function(n, o) {
    var a = Pa(n) ? Cl : fl, l = t ? t() : {};
    return a(n, e, La(o), l);
  };
}
var Lt = function() {
  return Va.Date.now();
}, xl = "Expected a function", yl = Math.max, Bl = Math.min;
function Wo(e, t, n) {
  var o, a, l, r, s, A, c = 0, b = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(xl);
  t = Rn(t) || 0, io(n) && (b = !!n.leading, d = "maxWait" in n, l = d ? yl(Rn(n.maxWait) || 0, t) : l, g = "trailing" in n ? !!n.trailing : g);
  function I(u) {
    var X = o, x = a;
    return o = a = void 0, c = u, r = e.apply(x, X), r;
  }
  function m(u) {
    return c = u, s = setTimeout(f, t), b ? I(u) : r;
  }
  function p(u) {
    var X = u - A, x = u - c, w = t - X;
    return d ? Bl(w, l - x) : w;
  }
  function v(u) {
    var X = u - A, x = u - c;
    return A === void 0 || X >= t || X < 0 || d && x >= l;
  }
  function f() {
    var u = Lt();
    if (v(u))
      return S(u);
    s = setTimeout(f, p(u));
  }
  function S(u) {
    return s = void 0, g && o ? I(u) : (o = a = void 0, r);
  }
  function C() {
    s !== void 0 && clearTimeout(s), c = 0, o = A = a = s = void 0;
  }
  function h() {
    return s === void 0 ? r : S(Lt());
  }
  function G() {
    var u = Lt(), X = v(u);
    if (o = arguments, a = this, A = u, X) {
      if (s === void 0)
        return m(A);
      if (d)
        return clearTimeout(s), s = setTimeout(f, t), I(A);
    }
    return s === void 0 && (s = setTimeout(f, t)), r;
  }
  return G.cancel = C, G.flush = h, G;
}
var Gl = Object.prototype, wl = Gl.hasOwnProperty, Xl = hl(function(e, t, n) {
  wl.call(e, n) ? e[n].push(t) : za(e, n, [t]);
}), Sl = "Expected a function";
function Rl(e, t, n) {
  var o = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(Sl);
  return io(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), Wo(e, t, {
    leading: o,
    maxWait: t,
    trailing: a
  });
}
function Nl(e, t) {
  if (!e || !e.trim())
    return {};
  ui(e, "?") && (e = e.slice(1));
  var n = {}, o = e.split("&");
  return o.forEach(function(a) {
    var l = a.split("="), r = l[0], s = l[1], A = s === void 0 ? "" : s;
    n[r] ? Array.isArray(n[r]) ? n[r].push(t ? A : decodeURIComponent(A)) : n[r] = [n[r], t ? A : decodeURIComponent(A)] : n[r] = t ? A : decodeURIComponent(A);
  }), n;
}
function Hl() {
  var e = ro().search, t = et(), n = i.useRef(Nl(e)), o = function(a) {
    var l = a(n.current);
    n.current = l, t(co(l), {
      replace: !0
    });
  };
  return [n.current, o];
}
const Zl = "data:image/png;base64,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", Ol = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20focusable='false'%20viewBox='0%200%2024%2024'%20class='option-icon'%20data-v-8e1d3227=''%3e%3cpath%20d='M0%200h24v24H0z'%20fill='none'%3e%3c/path%3e%3cpath%20d='%20M12.87%2015.07l-2.54-2.51.03-.03c1.74-1.94%202.98-4.17%203.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5%207.92%2010.44%209.75%209%2011.35%208.07%2010.32%207.3%209.19%206.69%208h-2c.73%201.63%201.73%203.17%202.98%204.56l-5.09%205.02L4%2019l5-5%203.11%203.11.76-2.04zM18.5%2010h-2L12%2022h2l1.12-3h4.75L21%2022h2l-4.5-12zm-2.62%207l1.62-4.33L19.12%2017h-3.24z%20'%20class='css-c4d79v'%20fill='%23333'%3e%3c/path%3e%3c/svg%3e";
var Dl = {
  name: "mfa3sb",
  styles: "line-height:10px;cursor:pointer"
}, Ml = {
  name: "1mqis16",
  styles: "width:16px;height:16px;opacity:0.6"
};
function El() {
  const {
    t: e,
    i18n: t
  } = Me();
  return B(Do, {
    menu: {
      items: [{
        key: "0",
        label: e("head.en"),
        onClick() {
          t.changeLanguage(Nn.en);
        }
      }, {
        key: "1",
        label: e("head.zh"),
        onClick() {
          t.changeLanguage(Nn.zh);
        }
      }]
    },
    children: B("a", {
      css: Dl,
      onClick: (n) => n.preventDefault(),
      children: B("img", {
        src: Ol,
        css: Ml,
        alt: "lang"
      })
    })
  });
}
const Wl = "data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGitHub%3c/title%3e%3cpath%20d='M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12'%20fill='%23333'%3e%3c/path%3e%3c/svg%3e";
var Lo = { TERM_PROGRAM: "vscode", NODE: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NVM_CD_FLAGS: "-q", INIT_CWD: "/Users/alexander/my-code/github/openapi-ui", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_global_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", TERM_PROGRAM_VERSION: "1.88.0", GVM_ROOT: "/Users/alexander/.gvm", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", ZDOTDIR: "/Users/alexander", COLOR: "1", npm_config_noproxy: "", ZSH: "/Users/alexander/.oh-my-zsh", PNPM_HOME: "/Users/alexander/Library/pnpm", npm_config_local_prefix: "/Users/alexander/my-code/github/openapi-ui", USER: "alexander", NVM_DIR: "/Users/alexander/.nvm", LD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/alexander/.nvm/versions/node/v16.10.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.jaFD8W3kId/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x19:0x34", npm_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.bin:/Users/alexander/my-code/github/node_modules/.bin:/Users/alexander/my-code/node_modules/.bin:/Users/alexander/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", npm_package_json: "/Users/alexander/my-code/github/openapi-ui/package.json", __CFBundleIdentifier: "com.microsoft.VSCode", USER_ZDOTDIR: "/Users/alexander", npm_config_auto_install_peers: "true", npm_config_init_module: "/Users/alexander/.npm-init.js", npm_config_userconfig: "/Users/alexander/.npmrc", PWD: "/Users/alexander/my-code/github/openapi-ui", GVM_VERSION: "1.0.22", npm_command: "run-script", EDITOR: "vi", npm_lifecycle_event: "build:package", LANG: "zh_CN.UTF-8", npm_package_name: "openapi-ui-dist", gvm_pkgset_name: "global", NODE_PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/bin/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/node_modules", XPC_FLAGS: "0x0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", npm_package_engines_node: "^18.0.0 || >=20.0.0", npm_config_node_gyp: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", XPC_SERVICE_NAME: "0", npm_package_version: "2.0.0", VSCODE_INJECTION: "1", HOME: "/Users/alexander", SHLVL: "2", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", GOROOT: "/Users/alexander/.gvm/gos/go1.20", DYLD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", gvm_go_name: "go1.20", LOGNAME: "alexander", LESS: "-R", npm_config_cache: "/Users/alexander/.npm", GVM_OVERLAY_PREFIX: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay", npm_lifecycle_script: "tsc && vite build --config vite.package.config.ts --mode package", LC_CTYPE: "zh_CN.UTF-8", VSCODE_GIT_IPC_HANDLE: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/vscode-git-14571c2f30.sock", NVM_BIN: "/Users/alexander/.nvm/versions/node/v16.10.0/bin", PKG_CONFIG_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:", GOPATH: "/Users/alexander/mygo", npm_config_user_agent: "npm/7.24.0 node/v16.10.0 darwin x64 workspaces/false", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GVM_PATH_BACKUP: "/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", COLORTERM: "truecolor", npm_config_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", npm_node_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NODE_ENV: "production" };
function Po() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ll = Lo.NODE_ENV === "production" ? {
  name: "baa6rt",
  styles: "color:gold"
} : {
  name: "32hpr9-GithubStar",
  styles: "color:gold;label:GithubStar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvY29tcG9uZW50cy9naXRodWItc3Rhci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQiIsImZpbGUiOiIvVXNlcnMvYWxleGFuZGVyL215LWNvZGUvZ2l0aHViL29wZW5hcGktdWkvc3JjL2NvbXBvbmVudHMvZ2l0aHViLXN0YXIvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpdGh1YlN0YXIoKSB7XG4gIGNvbnN0IFtzdGFyLCBzZXRTdGFyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNGZXRjaGVkLCBzZXRJc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFN0YXIoKTtcbiAgICAgICAgc2V0U3RhcihyZXMuc3RhcmdhemVyc19jb3VudCk7XG4gICAgICAgIHNldElzRmV0Y2hlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBnaXRodWIgaW5mbyBlcnJvcjpcIiwgZSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YXIoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Jvb2tpZS1sdW9jaGFvL29wZW5hcGktdWlcIik7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cblxuICBpZiAoIWlzRmV0Y2hlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Jvb2tpZS1sdW9jaGFvL29wZW5hcGktdWlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtgJHtzdGFyfWAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpfVxuICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGNvbG9yOiBcImdvbGRcIiB9fT4mIzk3MzM7PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8aW1nIGNzcz17eyB3aWR0aDogMTYsIG9wYWNpdHk6IDAuNiwgXCImOmhvdmVyXCI6IHsgb3BhY2l0eTogMSB9IH19IHNyYz17Z2l0aHViSWNvbn0gYWx0PVwiZ2l0aHViXCIgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8L2E+XG4gICk7XG59XG4iXX0= */",
  toString: Po
}, Pl = Lo.NODE_ENV === "production" ? {
  name: "wbpb17",
  styles: "width:16px;opacity:0.6;&:hover{opacity:1;}"
} : {
  name: "16ml1ie-GithubStar",
  styles: "width:16px;opacity:0.6;&:hover{opacity:1;};label:GithubStar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvY29tcG9uZW50cy9naXRodWItc3Rhci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENhIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvY29tcG9uZW50cy9naXRodWItc3Rhci9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2l0aHViU3RhcigpIHtcbiAgY29uc3QgW3N0YXIsIHNldFN0YXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0ZldGNoZWQsIHNldElzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0U3RhcigpO1xuICAgICAgICBzZXRTdGFyKHJlcy5zdGFyZ2F6ZXJzX2NvdW50KTtcbiAgICAgICAgc2V0SXNGZXRjaGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGdpdGh1YiBpbmZvIGVycm9yOlwiLCBlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhcigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvcm9va2llLWx1b2NoYW8vb3BlbmFwaS11aVwiKTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxuXG4gIGlmICghaXNGZXRjaGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcm9va2llLWx1b2NoYW8vb3BlbmFwaS11aVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPFRvb2x0aXBcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2Ake3N0YXJ9YC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIil9XG4gICAgICAgICAgICA8c3BhbiBjc3M9e3sgY29sb3I6IFwiZ29sZFwiIH19PiYjOTczMzs8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxpbWcgY3NzPXt7IHdpZHRoOiAxNiwgb3BhY2l0eTogMC42LCBcIiY6aG92ZXJcIjogeyBvcGFjaXR5OiAxIH0gfX0gc3JjPXtnaXRodWJJY29ufSBhbHQ9XCJnaXRodWJcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIDwvYT5cbiAgKTtcbn1cbiJdfQ== */",
  toString: Po
};
function Vl() {
  const [e, t] = i.useState(0), [n, o] = i.useState(!1);
  i.useEffect(() => {
    (async () => {
      try {
        const l = await a();
        t(l.stargazers_count), o(!0);
      } catch {
      }
    })();
  }, []);
  async function a() {
    const l = await fetch("https://api.github.com/repos/rookie-luochao/openapi-ui");
    if (!l.ok)
      throw new Error("Failed to fetch data");
    return l.json();
  }
  return n ? B("a", {
    href: "https://github.com/rookie-luochao/openapi-ui",
    target: "_blank",
    children: B(en, {
      title: re("span", {
        children: [`${e}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","), B("span", {
          css: Ll,
          children: "★"
        })]
      }),
      children: B("img", {
        css: Pl,
        src: Wl,
        alt: "github"
      })
    })
  }) : null;
}
const zl = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1709478286586'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6896'%20width='32'%20height='32'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M577.16491%204.216164C296.74428-31.752019%2040.196107%20166.39648%204.227924%20446.84711c-35.968183%20280.42063%20162.146317%20536.936804%20442.598946%20572.936986%20280.45263%2035.968183%20537.064801-162.178316%20572.936986-442.630946%2035.999182-280.42063-162.082318-536.936804-442.598946-572.936986z%20m105.441605%20319.365746a36.466172%2036.466172%200%200%200-25.310425%2010.655758L467.307405%20524.224352l-40.545079-40.545079c187.266746-186.722759%20221.026979-188.514718%20255.844189-160.130362z%20m-207.495287%20207.395289l189.446697-189.443697a26.469399%2026.469399%200%201%201%2036.192178%2038.528125l-0.032%200.031999L500.235657%20556.097628z%20m14.08868%2029.632327l-46.948934%2010.143769a2.870935%202.870935%200%200%201-0.575987%200.063999%202.63194%202.63194%200%200%201-2.299947-1.407968%202.476944%202.476944%200%200%201-0.351992-1.279971%202.510943%202.510943%200%200%201%200.767982-1.823959l27.516375-27.517374z%20m-119.622283-19.584555l50.016864-50.016864%2037.506148%2037.472149-84.449082%2018.176587a3.044931%203.044931%200%200%201-0.799982%200.099998%203.09993%203.09993%200%200%201-2.815936-1.759961v-0.031999a2.978932%202.978932%200%200%201-0.479989-1.663962%203.162928%203.162928%200%200%201%201.023977-2.299948zM214.023159%20799.4931a3.237926%203.237926%200%200%201-2.943934-3.231927v-0.319993a3.299925%203.299925%200%200%201%200.927979-1.951955h0.099998l40.353083-40.353084%2052.128816%2052.128816z%20m103.457649-53.598783a9.763778%209.763778%200%200%200-5.24788%208.639804%209.344788%209.344788%200%200%200%200.287993%202.335947v-0.063999l8.671803%2036.899162a5.327879%205.327879%200%200%201-5.188882%206.61985%205.26288%205.26288%200%200%201-3.807913-1.599964h-0.127998l-52.38481-52.448809L420.201475%20585.921951l77.665236-16.768619%2037.280153%2037.280153c-53.536784%2047.008932-126.754121%2093.921867-217.603057%20139.425833z%20m225.251884-146.244678h-0.099998l-35.808186-35.808187%20200.486446-176.003002a41.607055%2041.607055%200%200%200%205.023885-5.343878l0.063999-0.099998c-6.299857%2057.376697-86.561034%20138.465855-169.696145%20217.219066zM698.767148%20323.992901l-0.127997-0.099998A77.753234%2077.753234%200%200%201%20803.692764%20209.467502l-0.127997-0.099998-68.705439%2068.833437a5.099884%205.099884%200%200%200%200%207.231835l53.216791%2053.216792a77.457241%2077.457241%200%200%201-89.280972-14.619668z%20m109.985501%200a72.269358%2072.269358%200%200%201-11.299743%209.119792l-0.287993%200.159997h-0.032l-51.48883-51.488831%2065.409514-65.408514A77.776233%2077.776233%200%200%201%20808.752649%20323.992901z%20m-4.259903-65.852505a6.090862%206.090862%200%200%200-2.527943%204.927888%206.376855%206.376855%200%200%200%200.255995%201.79196v-0.032a17.774596%2017.774596%200%200%201-2.299948%2019.232564l0.031999-0.032a5.973864%205.973864%200%200%200%200.991978%208.38381%206.022863%206.022863%200%200%200%203.583918%201.279971%205.999864%205.999864%200%200%200%204.511898-2.111952%2029.450331%2029.450331%200%200%200%203.615918-32.192269l0.063998%200.159996a5.885866%205.885866%200%200%200-8.287812-1.407968h0.032z'%20fill='%23FF6C37'%20p-id='6897'%3e%3c/path%3e%3c/svg%3e";
function Fl() {
  return re("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    version: "1.1",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    children: [B("defs", {
      children: re("filter", {
        id: "master_svg0_182_24814",
        filterUnits: "objectBoundingBox",
        colorInterpolationFilters: "sRGB",
        x: "0",
        y: "0",
        width: "18",
        height: "18",
        children: [B("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), B("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), B("feGaussianBlur", {
          in: "BackgroundImage",
          stdDeviation: "2"
        }), B("feComposite", {
          in2: "SourceAlpha",
          operator: "in",
          result: "effect1_foregroundBlur"
        }), B("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_foregroundBlur",
          result: "shape"
        })]
      })
    }), re("g", {
      children: [B("g", {
        filter: "url(#master_svg0_182_24814)",
        children: B("rect", {
          x: "0",
          y: "0",
          width: "18",
          height: "18",
          rx: "4",
          fill: "#EEF2F9",
          fillOpacity: "0.8500000238418579"
        })
      }), B("g", {
        transform: "matrix(-1,0,0,-1,26,24)",
        children: B("path", {
          d: "M13.649878,16.187649999999998C13.387973,16.51503,13.621059,17,14.04031,17L19.959690000000002,17C20.37894,17,20.61203,16.51503,20.35012,16.187649999999998L17.390430000000002,12.488043C17.190269999999998,12.23784,16.809730000000002,12.23784,16.60957,12.488043L13.649878,16.187649999999998Z",
          fill: "#8B8EA2",
          fillOpacity: "1"
        })
      })]
    })]
  });
}
const Pt = Ft.Item;
var Yl = {
  name: "1d3w5wq",
  styles: "width:100%"
}, kl = {
  name: "1d3w5wq",
  styles: "width:100%"
};
function jl({
  onSuccess: e
}) {
  const [t] = Ft.useForm(), {
    configInfo: n,
    updateConfigInfo: o
  } = Ya(), {
    t: a
  } = Me();
  function l(r) {
    o(r), go.success(a("head.updateConfigSuccess")), e();
  }
  return B(ja, {
    title: a("head.updateConfig"),
    open: !0,
    footer: null,
    onCancel: e,
    children: re(Ft, {
      name: "config",
      form: t,
      layout: "vertical",
      initialValues: {
        timeout: (n == null ? void 0 : n.timeout) || ka,
        authorization: n == null ? void 0 : n.authorization
      },
      onFinish: l,
      children: [B(Pt, {
        name: "timeout",
        label: a("head.requestTimeoutLabel"),
        rules: [{
          required: !0,
          message: a("head.requestTimeoutPlaceholder")
        }],
        children: B(mi, {
          css: Yl,
          min: 1,
          max: 3600,
          placeholder: a("head.requestTimeoutPlaceholder")
        })
      }), B(Pt, {
        name: "authorization",
        label: a("head.authorizationLabel"),
        children: B(tn, {
          css: kl,
          placeholder: a("head.authorizationPlaceholder")
        })
      }), B(Pt, {
        children: B(zt, {
          type: "primary",
          htmlType: "submit",
          style: {
            width: "100%"
          },
          children: a("head.submit")
        })
      })]
    })
  });
}
var Tl = {
  name: "wbpb17",
  styles: "width:16px;opacity:0.6;&:hover{opacity:1;}"
};
function ss() {
  const e = et(), {
    t
  } = Me();
  return B(en, {
    title: t("postman.goToPostman"),
    children: B("a", {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        e(`${Fa}`);
      },
      children: B("img", {
        css: Tl,
        src: zl,
        alt: "github"
      })
    })
  });
}
function Ul({
  ...e
}) {
  return B("div", {
    css: [st(), {
      width: "100%",
      minWidth: 1200,
      height: 32,
      fontSize: ee.fontSize.xs,
      color: ee.color.text,
      opacity: 0.6
    }, "", ""],
    ...e,
    children: "湘ICP备2024041043号"
  });
}
const Ql = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1702091156489'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6551'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='32'%20height='32'%3e%3cpath%20d='M465.92%20661.333333a106.666667%20106.666667%200%201%200%200-213.333333%20106.666667%20106.666667%200%200%200%200%20213.333333z'%20fill='%23FFFFFF'%20p-id='6552'%3e%3c/path%3e%3cpath%20d='M469.333333%20554.666667m-85.333333%200a85.333333%2085.333333%200%201%200%20170.666667%200%2085.333333%2085.333333%200%201%200-170.666667%200Z'%20fill='%23424144'%20p-id='6553'%3e%3c/path%3e%3cpath%20d='M853.333333%20170.666667m-85.333333%200a85.333333%2085.333333%200%201%200%20170.666667%200%2085.333333%2085.333333%200%201%200-170.666667%200Z'%20fill='%23424144'%20p-id='6554'%3e%3c/path%3e%3cpath%20d='M775.68%20205.824L503.466667%20476.885333l44.373333%2044.458667%20272.384-272.768z'%20fill='%23424144'%20p-id='6555'%3e%3c/path%3e%3cpath%20d='M469.333333%20170.666667v277.333333a147.541333%20147.541333%200%200%200-26.112%202.218667c-5.589333%201.237333-12.8%204.010667-21.589333%208.32L279.765333%20221.056c37.418667-17.92%2066.816-29.738667%2088.064-35.413333C389.12%20180.053333%20422.954667%20175.018667%20469.333333%20170.666667z'%20fill='%236CA338'%20p-id='6556'%3e%3c/path%3e%3cpath%20d='M488.32%20170.666667v279.552c3.242667%200.597333%205.930667%201.28%208.106667%201.92a13.568%2013.568%200%200%200%207.253333%200l196.608-202.922667c-31.616-24.362667-63.146667-42.24-94.634667-53.589333-31.488-11.392-70.613333-19.712-117.333333-24.96z'%20fill='%234E5A2F'%20p-id='6557'%3e%3c/path%3e%3cpath%20d='M262.229333%20231.082667l145.194667%20233.813333-2.816%202.389333-185.984-203.050666z'%20fill='%2394D608'%20p-id='6558'%3e%3c/path%3e%3cpath%20d='M671.274667%20881.066667l-142.336-239.786667%202.730666-2.688%20188.373334%20206.378667a384.853333%20384.853333%200%200%201-22.016%2018.005333c-5.76%204.266667-14.677333%2010.24-26.752%2018.048zM359.253333%20554.666667H85.333333c3.2-67.84%2015.957333-123.306667%2038.144-166.4%2022.229333-43.093333%2048.682667-80.042667%2079.36-110.933334l184.490667%20204.074667c-11.349333%2013.482667-18.773333%2024.746667-22.272%2033.92-3.498667%209.130667-5.461333%2022.229333-5.802667%2039.338667zM572.586667%20554.666667H853.333333c-2.773333-50.688-9.258667-92.373333-19.541333-125.056-10.24-32.682667-30.208-69.077333-59.861333-109.098667l-205.781334%20203.221333c1.792%206.058667%202.944%2010.965333%203.456%2014.72%200.554667%203.754667%200.853333%209.130667%200.981334%2016.213334z'%20fill='%234E5A2F'%20p-id='6559'%3e%3c/path%3e%3cpath%20d='M547.84%20623.616l189.184%20208.853333c36.778667-44.458667%2063.317333-82.944%2079.658667-115.498666%2016.298667-32.512%2028.544-79.232%2036.650666-140.074667h-280.746666a144.170667%20144.170667%200%200%201-9.301334%2024.533333c-2.986667%205.546667-8.106667%2012.970667-15.402666%2022.186667z'%20fill='%236BA238'%20p-id='6560'%3e%3c/path%3e%3cpath%20d='M428.117333%20654.549333l-126.762666%20244.650667c-24.874667-12.629333-42.453333-22.528-52.821334-29.653333-10.325333-7.168-23.466667-18.474667-39.296-33.962667l201.6-189.269333c3.797333%202.304%206.656%203.925333%208.618667%204.864%201.962667%200.896%204.864%202.048%208.661333%203.413333z'%20fill='%234E5A2F'%20p-id='6561'%3e%3c/path%3e%3cpath%20d='M509.866667%20651.562667l144.853333%20240.298666c-47.488%2025.856-102.144%2041.429333-164.053333%2046.805334-61.866667%205.376-119.210667-4.949333-171.989334-30.933334L448%20661.333333c13.184%201.152%2023.338667%201.152%2030.549333%200%207.253333-1.152%2017.664-4.394667%2031.36-9.770666zM361.088%20577.365333c4.352%2013.482667%208.832%2024.021333%2013.482667%2031.573334%204.608%207.594667%2011.221333%2016.213333%2019.84%2025.898666L192%20820.693333c-37.546667-44.8-62.378667-80.981333-74.453333-108.544-12.074667-27.562667-22.826667-72.490667-32.213334-134.784h275.754667z'%20fill='%2394D608'%20p-id='6562'%3e%3c/path%3e%3c/svg%3e";
function Jl({
  onChange: e
}) {
  const {
    openapiWithServiceInfo: t
  } = $t(), {
    t: n
  } = Me(), o = (a) => {
    if (!(a != null && a.trim()))
      return go.warning(n("head.inputUrl"));
    e(a);
  };
  return B(_t, {
    children: (t == null ? void 0 : t.importModeType) === "url" ? B(tn.Search, {
      allowClear: !0,
      enterButton: !0,
      size: "small",
      placeholder: n("head.inputUrl"),
      style: {
        minWidth: 476
      },
      defaultValue: t == null ? void 0 : t.serviceURL,
      onSearch: o
    }) : B("div", {
      css: /* @__PURE__ */ Ce({
        color: ee.color.text,
        opacity: 0.6,
        fontWeight: 500,
        fontSize: ee.fontSize.xs
      }, "", ""),
      children: t == null ? void 0 : t.serviceURL
    })
  });
}
function Kl() {
  const e = et(), {
    t
  } = Me(), {
    updateOpenapiWithServiceInfo: n
  } = $t(), [o, a] = Hl(), {
    serviceURL: l,
    importModeType: r,
    logon: s
  } = o, [A, c] = i.useState(!1), b = i.useRef(!0);
  i.useEffect(() => {
    b.current && (r === Hn.url && l && !s ? d(l) : a((g) => ({
      ...g,
      logon: ""
    })), b.current = !1);
  }, []);
  async function d(g, I) {
    const m = await Ta(Object.assign({
      url: g
    }));
    if ((m == null ? void 0 : m.status) >= 200 && (m == null ? void 0 : m.status) < 300) {
      const p = await Ua(m.data), v = {
        serviceURL: g,
        importModeType: Hn.url,
        openapi: p,
        operations: Qa(p.paths || {})
      };
      n(v), I && e(`/${lo}${co({
        ...o,
        serviceURL: g
      })}`, {
        replace: !0
      });
    }
  }
  return re(_t, {
    children: [A && B(jl, {
      onSuccess: () => c(!1)
    }), B("div", {
      css: [st({
        justifyContent: "flex-end"
      }), {
        height: Gt,
        backgroundColor: ee.color.bg,
        padding: 12
      }, "", ""],
      children: re("div", {
        css: [st(), "& > * + *{margin-left:6px;}", ""],
        children: [B(Jl, {
          onChange: (g) => d(g, !0)
        }), B(Do, {
          menu: {
            items: [{
              key: "0",
              label: t("head.updateConfig"),
              onClick() {
                c(!0);
              }
            }, {
              key: "1",
              label: t("head.reselectService"),
              onClick() {
                e(Ja);
              }
            }]
          },
          children: B("a", {
            css: st(),
            onClick: (g) => g.preventDefault(),
            children: B(Fl, {})
          })
        }), B(El, {}), !1, B(Vl, {})]
      })
    })]
  });
}
function ql({
  method: e,
  children: t
}) {
  return B("div", {
    css: /* @__PURE__ */ Ce({
      position: "absolute",
      top: 0,
      right: 0,
      fontSize: ee.fontSize.l,
      fontFamily: ee.fontFamily.mono,
      color: Ii(e),
      opacity: 0.6,
      textTransform: "uppercase",
      padding: 8
    }, "", ""),
    children: t
  });
}
function $l({
  deprecated: e,
  children: t
}) {
  return B("div", {
    css: /* @__PURE__ */ Ce({
      padding: "0 8px",
      textDecoration: e ? "line-through" : "none",
      "& > *": {
        width: 240,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "", ""),
    children: t
  });
}
var _l = {
  name: "bjn8wh",
  styles: "position:relative"
};
function es({
  group: e,
  operationList: t,
  activeOperationId: n,
  isCollapsed: o
}) {
  const a = et(), l = ro();
  return re("div", {
    css: _l,
    children: [B("div", {
      css: /* @__PURE__ */ Ce({
        fontSize: ee.fontSize.xs,
        color: ee.color.bg,
        backgroundColor: ee.color.primary,
        opacity: 0.6,
        padding: "0.5em 0.8em",
        borderBottom: `1px solid ${ee.color.border}`,
        borderRadius: 4
      }, "", ""),
      children: e
    }), B("div", {
      children: so(t, (r, s) => re("a", {
        onClick: () => {
          a(`/${lo}/${r.operationId}${l.search}`);
        },
        css: [{
          height: 46,
          borderBottom: `1px solid ${ee.color.border}`,
          position: "relative",
          fontSize: ee.fontSize.xxs,
          display: "flex",
          alignItems: "center",
          padding: "0.8em 0.4em",
          textDecoration: "none",
          color: ee.color.text,
          borderRadius: 4,
          ":hover": {
            backgroundColor: ee.color.bgGray,
            cursor: "pointer"
          }
        }, dt(n) === dt(r.operationId) ? {
          backgroundColor: ee.color.bgGray
        } : {}, "", ""],
        children: [B(ql, {
          method: r.method,
          children: r.method === ei.delete ? r.method.slice(0, 3) : r.method
        }), o ? B("div", {
          style: {
            height: 46
          }
        }) : re($l, {
          deprecated: r.deprecated,
          children: [B("div", {
            css: /* @__PURE__ */ Ce({
              fontSize: ee.fontSize.xs,
              fontWeight: "bold",
              marginBottom: 4
            }, "", ""),
            children: r.operationId || ""
          }), re("div", {
            css: /* @__PURE__ */ Ce({
              fontSize: ee.fontSize.xxs
            }, "", ""),
            children: [r.summary || "", " "]
          })]
        })]
      }, s))
    })]
  });
}
var ts = {
  name: "bjn8wh",
  styles: "position:relative"
};
function ns(e) {
  const {
    operationId: t
  } = Ka(), {
    t: n
  } = Me(), {
    openapiWithServiceInfo: o
  } = $t(), a = (o == null ? void 0 : o.operations) || {}, [l, r] = i.useState(""), [s, A] = i.useState({});
  return i.useEffect(() => {
    if (!Zn(a)) {
      const c = l ? qa(a, (d) => bi(dt(d.operationId) || "", dt(l))) : $a(a), b = Xl(c, (d) => d.group);
      A(b);
    }
  }, [a, l]), re("div", {
    css: ts,
    children: [B("div", {
      css: /* @__PURE__ */ Ce({
        fontSize: ee.fontSize.xs,
        padding: "0.5em 0.8em"
      }, "", ""),
      children: B(tn, {
        placeholder: n("openapi.searchPlaceholder"),
        onChange: Wo((c) => {
          r(c.target.value);
        }, 500)
      })
    }), B("div", {
      children: !Zn(s) && B(_t, {
        children: so(s, (c, b) => _a(es, {
          ...e,
          key: b,
          group: b,
          operationList: c,
          activeOperationId: t
        }))
      })
    })]
  });
}
var Xe = { TERM_PROGRAM: "vscode", NODE: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NVM_CD_FLAGS: "-q", INIT_CWD: "/Users/alexander/my-code/github/openapi-ui", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_global_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", TERM_PROGRAM_VERSION: "1.88.0", GVM_ROOT: "/Users/alexander/.gvm", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", ZDOTDIR: "/Users/alexander", COLOR: "1", npm_config_noproxy: "", ZSH: "/Users/alexander/.oh-my-zsh", PNPM_HOME: "/Users/alexander/Library/pnpm", npm_config_local_prefix: "/Users/alexander/my-code/github/openapi-ui", USER: "alexander", NVM_DIR: "/Users/alexander/.nvm", LD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/alexander/.nvm/versions/node/v16.10.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.jaFD8W3kId/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x19:0x34", npm_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.bin:/Users/alexander/my-code/github/node_modules/.bin:/Users/alexander/my-code/node_modules/.bin:/Users/alexander/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", npm_package_json: "/Users/alexander/my-code/github/openapi-ui/package.json", __CFBundleIdentifier: "com.microsoft.VSCode", USER_ZDOTDIR: "/Users/alexander", npm_config_auto_install_peers: "true", npm_config_init_module: "/Users/alexander/.npm-init.js", npm_config_userconfig: "/Users/alexander/.npmrc", PWD: "/Users/alexander/my-code/github/openapi-ui", GVM_VERSION: "1.0.22", npm_command: "run-script", EDITOR: "vi", npm_lifecycle_event: "build:package", LANG: "zh_CN.UTF-8", npm_package_name: "openapi-ui-dist", gvm_pkgset_name: "global", NODE_PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/bin/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/node_modules", XPC_FLAGS: "0x0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", npm_package_engines_node: "^18.0.0 || >=20.0.0", npm_config_node_gyp: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", XPC_SERVICE_NAME: "0", npm_package_version: "2.0.0", VSCODE_INJECTION: "1", HOME: "/Users/alexander", SHLVL: "2", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", GOROOT: "/Users/alexander/.gvm/gos/go1.20", DYLD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", gvm_go_name: "go1.20", LOGNAME: "alexander", LESS: "-R", npm_config_cache: "/Users/alexander/.npm", GVM_OVERLAY_PREFIX: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay", npm_lifecycle_script: "tsc && vite build --config vite.package.config.ts --mode package", LC_CTYPE: "zh_CN.UTF-8", VSCODE_GIT_IPC_HANDLE: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/vscode-git-14571c2f30.sock", NVM_BIN: "/Users/alexander/.nvm/versions/node/v16.10.0/bin", PKG_CONFIG_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:", GOPATH: "/Users/alexander/mygo", npm_config_user_agent: "npm/7.24.0 node/v16.10.0 darwin x64 workspaces/false", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GVM_PATH_BACKUP: "/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", COLORTERM: "truecolor", npm_config_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", npm_node_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NODE_ENV: "production" };
function os() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const Gt = 54, Vo = ({
  isCollapsed: e
}) => (et(), B("a", {
  className: "logo",
  css: [{
    height: Gt,
    display: "flex",
    alignItems: "center",
    marginLeft: 24
  }, {
    cursor: "default"
  }, "", ""],
  onClick: () => {
  },
  children: B("img", {
    css: [e ? {
      width: 32
    } : {
      width: 128
    }, "", ""],
    src: e ? Ql : Zl,
    alt: "logo"
  })
}));
var as = Xe.NODE_ENV === "production" ? {
  name: "102swt",
  styles: "min-width:880px"
} : {
  name: "ta50cz-MainLayout",
  styles: "min-width:880px;label:MainLayout;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdvQyIsImZpbGUiOiIvVXNlcnMvYWxleGFuZGVyL215LWNvZGUvZ2l0aHViL29wZW5hcGktdWkvc3JjL21haW4vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTaWRlciBmcm9tIFwiYW50ZC9lcy9sYXlvdXQvU2lkZXJcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLWVzL3Rocm90dGxlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2dvSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IExvZ29NaW5pSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvX21pbmkuc3ZnXCI7XG5pbXBvcnQgeyBIZWFkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xuaW1wb3J0IHsgSUNQUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaWNwLXJlZ2lzdHJhdGlvblwiO1xuaW1wb3J0IHsgRW52IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIi4uL2NvcmUvaHR0cC9jb25maWdcIjtcbmltcG9ydCB7IGRzYyB9IGZyb20gXCIuLi9jb3JlL3N0eWxlL2RlZmF1bHRTdHlsZUNvbmZpZ1wiO1xuaW1wb3J0IHsgbG9naW5Nb2R1bGVOYW1lIH0gZnJvbSBcIi4uL2xvZ2luL3JvdXRlc1wiO1xuaW1wb3J0IHsgT3BlcmF0aW9uTGlzdCB9IGZyb20gXCIuLi9vcGVuYXBpL09wZXJhdGlvbkxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51VGl0bGVIZWlnaHQgPSA1NDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VkIHtcbiAgaXNDb2xsYXBzZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTG9nbyA9ICh7IGlzQ29sbGFwc2VkIH06IElDb2xsYXBzZWQpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBoZWlnaHQ6IGRlZmF1bHRNZW51VGl0bGVIZWlnaHQsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAyNCxcbiAgICAgICAgfSxcbiAgICAgICAgaW1wb3J0Lm1ldGEuZW52Lk1PREUgPT09IFwicGFja2FnZVwiID8geyBjdXJzb3I6IFwiZGVmYXVsdFwiIH0gOiB7fVxuICAgICAgXX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFICE9PSBcInBhY2thZ2VcIikge1xuICAgICAgICAgIG5hdmlnYXRlKGxvZ2luTW9kdWxlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjc3M9e1tpc0NvbGxhcHNlZCA/IHsgd2lkdGg6IDMyIH0gOiB7IHdpZHRoOiAxMjggfV19XG4gICAgICAgIHNyYz17aXNDb2xsYXBzZWQgPyBMb2dvTWluaUljb24gOiBMb2dvSWNvbn1cbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAvPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5MYXlvdXQoKSB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZW51SGVpZ2h0LCBzZXRNZW51SGVpZ2h0XSA9IHVzZVN0YXRlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICBjb25zdCBkZWZhdWx0Q29udGVudEhlaWdodCA9IG1lbnVIZWlnaHQgLSBkZWZhdWx0TWVudVRpdGxlSGVpZ2h0O1xuICBjb25zdCBkZWZhdWx0TWVudUhlaWdodCA9IGRlZmF1bHRDb250ZW50SGVpZ2h0IC0gNDg7IC8vIDQ4cHjkuLrlsZXlvIDmlLbnvKnlm77moIfpq5jluqZcbiAgY29uc3QgaXNaaCA9IGdldENvbmZpZygpLmVudiA9PT0gRW52LnpoO1xuXG4gIGNvbnN0IHRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSB0aHJvdHRsZShcbiAgICAoKSA9PiB7XG4gICAgICBzZXRNZW51SGVpZ2h0KGdsb2JhbFRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgfSxcbiAgICAxMjAwLFxuICAgIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkUmVzaXplSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3Rocm90dGxlZFJlc2l6ZUhhbmRsZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2lkZXIgdGhlbWU9e1wibGlnaHRcIn0gd2lkdGg9ezMyMH0gY29sbGFwc2libGUgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2U9e3NldENvbGxhcHNlZH0+XG4gICAgICAgIDxMb2dvIGlzQ29sbGFwc2VkPXtjb2xsYXBzZWR9IC8+XG4gICAgICAgIDxkaXYgY3NzPXt7IGhlaWdodDogZGVmYXVsdE1lbnVIZWlnaHQsIG92ZXJmbG93OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICA8T3BlcmF0aW9uTGlzdCBpc0NvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCIgY3NzPXt7IGJhY2tncm91bmRDb2xvcjogZHNjLmNvbG9yLmJnIH19PlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgcGFkZGluZzogMTIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZHNjLmNvbG9yLmJnR3JheSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHggMCAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNaaCA/IHsgcGFkZGluZ0JvdHRvbTogMCB9IDoge30sXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY3NzPXtpc1poID8geyBtaW5IZWlnaHQ6IGRlZmF1bHRDb250ZW50SGVpZ2h0IC0gMzIgLSAxMiB9IDoge319PlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1poICYmIDxJQ1BSZWdpc3RyYXRpb24gY3NzPXt7IG1pbldpZHRoOiA4ODAgfX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */",
  toString: os
};
function is() {
  const [e, t] = i.useState(!1), [n, o] = i.useState(document.documentElement.clientHeight), a = n - Gt, l = a - 48, r = ti().env === ni.zh, s = Rl(() => {
    o(globalThis.document.documentElement.clientHeight);
  }, 1200, {
    leading: !0,
    trailing: !0
  });
  return i.useEffect(() => (globalThis.addEventListener("resize", s), () => {
    globalThis.removeEventListener("resize", s);
  }), [s]), re(Qn, {
    children: [re(An, {
      theme: "light",
      width: 320,
      collapsible: !0,
      collapsed: e,
      onCollapse: t,
      children: [B(Vo, {
        isCollapsed: e
      }), B("div", {
        css: /* @__PURE__ */ Ce({
          height: l,
          overflow: "auto"
        }, Xe.NODE_ENV === "production" ? "" : ";label:MainLayout;", Xe.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVhIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFNpZGVyIGZyb20gXCJhbnRkL2VzL2xheW91dC9TaWRlclwiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gtZXMvdGhyb3R0bGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE91dGxldCwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ29JY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgTG9nb01pbmlJY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ29fbWluaS5zdmdcIjtcbmltcG9ydCB7IEhlYWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5pbXBvcnQgeyBJQ1BSZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pY3AtcmVnaXN0cmF0aW9uXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi4vY29yZS9odHRwL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZHNjIH0gZnJvbSBcIi4uL2NvcmUvc3R5bGUvZGVmYXVsdFN0eWxlQ29uZmlnXCI7XG5pbXBvcnQgeyBsb2dpbk1vZHVsZU5hbWUgfSBmcm9tIFwiLi4vbG9naW4vcm91dGVzXCI7XG5pbXBvcnQgeyBPcGVyYXRpb25MaXN0IH0gZnJvbSBcIi4uL29wZW5hcGkvT3BlcmF0aW9uTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE1lbnVUaXRsZUhlaWdodCA9IDU0O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZWQge1xuICBpc0NvbGxhcHNlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKHsgaXNDb2xsYXBzZWQgfTogSUNvbGxhcHNlZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAge1xuICAgICAgICAgIGhlaWdodDogZGVmYXVsdE1lbnVUaXRsZUhlaWdodCxcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IDI0LFxuICAgICAgICB9LFxuICAgICAgICBpbXBvcnQubWV0YS5lbnYuTU9ERSA9PT0gXCJwYWNrYWdlXCIgPyB7IGN1cnNvcjogXCJkZWZhdWx0XCIgfSA6IHt9XG4gICAgICBdfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoaW1wb3J0Lm1ldGEuZW52Lk1PREUgIT09IFwicGFja2FnZVwiKSB7XG4gICAgICAgICAgbmF2aWdhdGUobG9naW5Nb2R1bGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNzcz17W2lzQ29sbGFwc2VkID8geyB3aWR0aDogMzIgfSA6IHsgd2lkdGg6IDEyOCB9XX1cbiAgICAgICAgc3JjPXtpc0NvbGxhcHNlZCA/IExvZ29NaW5pSWNvbiA6IExvZ29JY29ufVxuICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgIC8+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkxheW91dCgpIHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lbnVIZWlnaHQsIHNldE1lbnVIZWlnaHRdID0gdXNlU3RhdGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIGNvbnN0IGRlZmF1bHRDb250ZW50SGVpZ2h0ID0gbWVudUhlaWdodCAtIGRlZmF1bHRNZW51VGl0bGVIZWlnaHQ7XG4gIGNvbnN0IGRlZmF1bHRNZW51SGVpZ2h0ID0gZGVmYXVsdENvbnRlbnRIZWlnaHQgLSA0ODsgLy8gNDhweOS4uuWxleW8gOaUtue8qeWbvuagh+mrmOW6plxuICBjb25zdCBpc1poID0gZ2V0Q29uZmlnKCkuZW52ID09PSBFbnYuemg7XG5cbiAgY29uc3QgdGhyb3R0bGVkUmVzaXplSGFuZGxlciA9IHRocm90dGxlKFxuICAgICgpID0+IHtcbiAgICAgIHNldE1lbnVIZWlnaHQoZ2xvYmFsVGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICB9LFxuICAgIDEyMDAsXG4gICAgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZSB9LFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRocm90dGxlZFJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGdsb2JhbFRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbdGhyb3R0bGVkUmVzaXplSGFuZGxlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTaWRlciB0aGVtZT17XCJsaWdodFwifSB3aWR0aD17MzIwfSBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZT17c2V0Q29sbGFwc2VkfT5cbiAgICAgICAgPExvZ28gaXNDb2xsYXBzZWQ9e2NvbGxhcHNlZH0gLz5cbiAgICAgICAgPGRpdiBjc3M9e3sgaGVpZ2h0OiBkZWZhdWx0TWVudUhlaWdodCwgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxPcGVyYXRpb25MaXN0IGlzQ29sbGFwc2VkPXtjb2xsYXBzZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWRlcj5cbiAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIiBjc3M9e3sgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmcgfX0+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0Q29udGVudEhlaWdodCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmdHcmF5LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweCAwIDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1poID8geyBwYWRkaW5nQm90dG9tOiAwIH0gOiB7fSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjc3M9e2lzWmggPyB7IG1pbkhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQgLSAzMiAtIDEyIH0gOiB7fX0+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzWmggJiYgPElDUFJlZ2lzdHJhdGlvbiBjc3M9e3sgbWluV2lkdGg6IDg4MCB9fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */"),
        children: B(ns, {
          isCollapsed: e
        })
      })]
    }), re(Qn, {
      className: "site-layout",
      css: /* @__PURE__ */ Ce({
        backgroundColor: ee.color.bg
      }, Xe.NODE_ENV === "production" ? "" : ";label:MainLayout;", Xe.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZzQyIsImZpbGUiOiIvVXNlcnMvYWxleGFuZGVyL215LWNvZGUvZ2l0aHViL29wZW5hcGktdWkvc3JjL21haW4vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTaWRlciBmcm9tIFwiYW50ZC9lcy9sYXlvdXQvU2lkZXJcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLWVzL3Rocm90dGxlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2dvSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IExvZ29NaW5pSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvX21pbmkuc3ZnXCI7XG5pbXBvcnQgeyBIZWFkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xuaW1wb3J0IHsgSUNQUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaWNwLXJlZ2lzdHJhdGlvblwiO1xuaW1wb3J0IHsgRW52IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIi4uL2NvcmUvaHR0cC9jb25maWdcIjtcbmltcG9ydCB7IGRzYyB9IGZyb20gXCIuLi9jb3JlL3N0eWxlL2RlZmF1bHRTdHlsZUNvbmZpZ1wiO1xuaW1wb3J0IHsgbG9naW5Nb2R1bGVOYW1lIH0gZnJvbSBcIi4uL2xvZ2luL3JvdXRlc1wiO1xuaW1wb3J0IHsgT3BlcmF0aW9uTGlzdCB9IGZyb20gXCIuLi9vcGVuYXBpL09wZXJhdGlvbkxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZW51VGl0bGVIZWlnaHQgPSA1NDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VkIHtcbiAgaXNDb2xsYXBzZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTG9nbyA9ICh7IGlzQ29sbGFwc2VkIH06IElDb2xsYXBzZWQpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgY3NzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBoZWlnaHQ6IGRlZmF1bHRNZW51VGl0bGVIZWlnaHQsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAyNCxcbiAgICAgICAgfSxcbiAgICAgICAgaW1wb3J0Lm1ldGEuZW52Lk1PREUgPT09IFwicGFja2FnZVwiID8geyBjdXJzb3I6IFwiZGVmYXVsdFwiIH0gOiB7fVxuICAgICAgXX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFICE9PSBcInBhY2thZ2VcIikge1xuICAgICAgICAgIG5hdmlnYXRlKGxvZ2luTW9kdWxlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjc3M9e1tpc0NvbGxhcHNlZCA/IHsgd2lkdGg6IDMyIH0gOiB7IHdpZHRoOiAxMjggfV19XG4gICAgICAgIHNyYz17aXNDb2xsYXBzZWQgPyBMb2dvTWluaUljb24gOiBMb2dvSWNvbn1cbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAvPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5MYXlvdXQoKSB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZW51SGVpZ2h0LCBzZXRNZW51SGVpZ2h0XSA9IHVzZVN0YXRlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICBjb25zdCBkZWZhdWx0Q29udGVudEhlaWdodCA9IG1lbnVIZWlnaHQgLSBkZWZhdWx0TWVudVRpdGxlSGVpZ2h0O1xuICBjb25zdCBkZWZhdWx0TWVudUhlaWdodCA9IGRlZmF1bHRDb250ZW50SGVpZ2h0IC0gNDg7IC8vIDQ4cHjkuLrlsZXlvIDmlLbnvKnlm77moIfpq5jluqZcbiAgY29uc3QgaXNaaCA9IGdldENvbmZpZygpLmVudiA9PT0gRW52LnpoO1xuXG4gIGNvbnN0IHRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSB0aHJvdHRsZShcbiAgICAoKSA9PiB7XG4gICAgICBzZXRNZW51SGVpZ2h0KGdsb2JhbFRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgfSxcbiAgICAxMjAwLFxuICAgIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkUmVzaXplSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3Rocm90dGxlZFJlc2l6ZUhhbmRsZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2lkZXIgdGhlbWU9e1wibGlnaHRcIn0gd2lkdGg9ezMyMH0gY29sbGFwc2libGUgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2U9e3NldENvbGxhcHNlZH0+XG4gICAgICAgIDxMb2dvIGlzQ29sbGFwc2VkPXtjb2xsYXBzZWR9IC8+XG4gICAgICAgIDxkaXYgY3NzPXt7IGhlaWdodDogZGVmYXVsdE1lbnVIZWlnaHQsIG92ZXJmbG93OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICA8T3BlcmF0aW9uTGlzdCBpc0NvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCIgY3NzPXt7IGJhY2tncm91bmRDb2xvcjogZHNjLmNvbG9yLmJnIH19PlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgcGFkZGluZzogMTIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZHNjLmNvbG9yLmJnR3JheSxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHggMCAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNaaCA/IHsgcGFkZGluZ0JvdHRvbTogMCB9IDoge30sXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY3NzPXtpc1poID8geyBtaW5IZWlnaHQ6IGRlZmF1bHRDb250ZW50SGVpZ2h0IC0gMzIgLSAxMiB9IDoge319PlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1poICYmIDxJQ1BSZWdpc3RyYXRpb24gY3NzPXt7IG1pbldpZHRoOiA4ODAgfX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */"),
      children: [B(Kl, {}), re("div", {
        css: [{
          height: a,
          overflow: "auto",
          padding: 12,
          backgroundColor: ee.color.bgGray,
          borderRadius: "10px 0 0"
        }, r ? {
          paddingBottom: 0
        } : {}, Xe.NODE_ENV === "production" ? "" : ";label:MainLayout;", Xe.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZVIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvbWFpbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFNpZGVyIGZyb20gXCJhbnRkL2VzL2xheW91dC9TaWRlclwiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gXCJsb2Rhc2gtZXMvdGhyb3R0bGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE91dGxldCwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ29JY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgTG9nb01pbmlJY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ29fbWluaS5zdmdcIjtcbmltcG9ydCB7IEhlYWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5pbXBvcnQgeyBJQ1BSZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pY3AtcmVnaXN0cmF0aW9uXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi4vY29yZS9odHRwL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZHNjIH0gZnJvbSBcIi4uL2NvcmUvc3R5bGUvZGVmYXVsdFN0eWxlQ29uZmlnXCI7XG5pbXBvcnQgeyBsb2dpbk1vZHVsZU5hbWUgfSBmcm9tIFwiLi4vbG9naW4vcm91dGVzXCI7XG5pbXBvcnQgeyBPcGVyYXRpb25MaXN0IH0gZnJvbSBcIi4uL29wZW5hcGkvT3BlcmF0aW9uTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE1lbnVUaXRsZUhlaWdodCA9IDU0O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsYXBzZWQge1xuICBpc0NvbGxhcHNlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKHsgaXNDb2xsYXBzZWQgfTogSUNvbGxhcHNlZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICBjc3M9e1tcbiAgICAgICAge1xuICAgICAgICAgIGhlaWdodDogZGVmYXVsdE1lbnVUaXRsZUhlaWdodCxcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IDI0LFxuICAgICAgICB9LFxuICAgICAgICBpbXBvcnQubWV0YS5lbnYuTU9ERSA9PT0gXCJwYWNrYWdlXCIgPyB7IGN1cnNvcjogXCJkZWZhdWx0XCIgfSA6IHt9XG4gICAgICBdfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoaW1wb3J0Lm1ldGEuZW52Lk1PREUgIT09IFwicGFja2FnZVwiKSB7XG4gICAgICAgICAgbmF2aWdhdGUobG9naW5Nb2R1bGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNzcz17W2lzQ29sbGFwc2VkID8geyB3aWR0aDogMzIgfSA6IHsgd2lkdGg6IDEyOCB9XX1cbiAgICAgICAgc3JjPXtpc0NvbGxhcHNlZCA/IExvZ29NaW5pSWNvbiA6IExvZ29JY29ufVxuICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgIC8+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkxheW91dCgpIHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lbnVIZWlnaHQsIHNldE1lbnVIZWlnaHRdID0gdXNlU3RhdGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIGNvbnN0IGRlZmF1bHRDb250ZW50SGVpZ2h0ID0gbWVudUhlaWdodCAtIGRlZmF1bHRNZW51VGl0bGVIZWlnaHQ7XG4gIGNvbnN0IGRlZmF1bHRNZW51SGVpZ2h0ID0gZGVmYXVsdENvbnRlbnRIZWlnaHQgLSA0ODsgLy8gNDhweOS4uuWxleW8gOaUtue8qeWbvuagh+mrmOW6plxuICBjb25zdCBpc1poID0gZ2V0Q29uZmlnKCkuZW52ID09PSBFbnYuemg7XG5cbiAgY29uc3QgdGhyb3R0bGVkUmVzaXplSGFuZGxlciA9IHRocm90dGxlKFxuICAgICgpID0+IHtcbiAgICAgIHNldE1lbnVIZWlnaHQoZ2xvYmFsVGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICB9LFxuICAgIDEyMDAsXG4gICAgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZSB9LFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRocm90dGxlZFJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGdsb2JhbFRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbdGhyb3R0bGVkUmVzaXplSGFuZGxlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTaWRlciB0aGVtZT17XCJsaWdodFwifSB3aWR0aD17MzIwfSBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZT17c2V0Q29sbGFwc2VkfT5cbiAgICAgICAgPExvZ28gaXNDb2xsYXBzZWQ9e2NvbGxhcHNlZH0gLz5cbiAgICAgICAgPGRpdiBjc3M9e3sgaGVpZ2h0OiBkZWZhdWx0TWVudUhlaWdodCwgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxPcGVyYXRpb25MaXN0IGlzQ29sbGFwc2VkPXtjb2xsYXBzZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWRlcj5cbiAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIiBjc3M9e3sgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmcgfX0+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0Q29udGVudEhlaWdodCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmdHcmF5LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweCAwIDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1poID8geyBwYWRkaW5nQm90dG9tOiAwIH0gOiB7fSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjc3M9e2lzWmggPyB7IG1pbkhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQgLSAzMiAtIDEyIH0gOiB7fX0+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzWmggJiYgPElDUFJlZ2lzdHJhdGlvbiBjc3M9e3sgbWluV2lkdGg6IDg4MCB9fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */"],
        children: [B("div", {
          css: r ? {
            minHeight: a - 32 - 12
          } : {},
          children: B(oi, {})
        }), r && B(Ul, {
          css: as
        })]
      })]
    })]
  });
}
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Logo: Vo,
  default: is,
  defaultMenuTitleHeight: Gt
}, Symbol.toStringTag, { value: "Module" }));
export {
  El as C,
  Si as D,
  tt as E,
  ss as G,
  Ul as I,
  Zl as L,
  ft as M,
  jl as U,
  Vl as a,
  Go as b,
  Fl as c,
  Gt as d,
  Do as e,
  As as i,
  zl as p,
  Rl as t,
  Hl as u
};
