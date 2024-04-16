import { d as i, A as Ct, _ as ge, s as W, W as pt, w as ha, t as ae, v as ht, x as ia, y as M, z as F, K as le, C as At, D as Aa, F as yt, G as ke, H as xt, J as ya, L as St, M as Gt, N as Xt, O as Rt, P as x, Q as za, R as Zt, S as Ua, T as _t, U as Vt, V as Bt, X as Wt, a as Tt, j as E, b as c, k as pe, Y as xa, Z as $e, $ as Ie, l as Qe, B as Ge, c as Ha, a0 as Ya, a1 as $t, a2 as je, e as Nt, g as kt, E as Pt } from "./index-0DiK2-ze.js";
import { E as Et, M as wt, D as Lt, b as zt, U as Ut, d as Da, p as Ht, c as Yt, e as Dt, C as Ot, a as Mt, t as Ft, I as jt } from "./index-D0PHcIU3.js";
import { R as Je, i as Jt, e as Sa, u as Pe, a as Kt, b as Ga, F as K, I as qe, h as Qt, f as qt, T as en, m as an } from "./util-DbfKY0tm.js";
import { u as Oa } from "./index-LZUrktWh.js";
import { b as ea, D as tn, d as Xa, e as nn, f as Ra, S as Za, g as rn, h as Se, H as ln, i as on, C as sn, j as cn, t as dn } from "./RequestBuilder-DLGbTW_q.js";
import { U as un, a as gn } from "./upload-CBZPKiUF.js";
var bn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
const mn = bn;
var vn = function(a, n) {
  return /* @__PURE__ */ i.createElement(Ct, ge({}, a, {
    ref: n,
    icon: mn
  }));
}, In = /* @__PURE__ */ i.forwardRef(vn);
const fn = In, Ee = /* @__PURE__ */ i.createContext(null);
var Cn = function(a) {
  var n = a.activeTabOffset, t = a.horizontal, r = a.rtl, o = a.indicator, s = o === void 0 ? {} : o, l = s.size, u = s.align, g = u === void 0 ? "center" : u, v = i.useState(), m = W(v, 2), I = m[0], S = m[1], p = i.useRef(), A = pt.useCallback(function(f) {
    return typeof l == "function" ? l(f) : typeof l == "number" ? l : f;
  }, [l]);
  function R() {
    ha.cancel(p.current);
  }
  return i.useEffect(function() {
    var f = {};
    if (n)
      if (t) {
        f.width = A(n.width);
        var d = r ? "right" : "left";
        g === "start" && (f[d] = n[d]), g === "center" && (f[d] = n[d] + n.width / 2, f.transform = r ? "translateX(50%)" : "translateX(-50%)"), g === "end" && (f[d] = n[d] + n.width, f.transform = "translateX(-100%)");
      } else
        f.height = A(n.height), g === "start" && (f.top = n.top), g === "center" && (f.top = n.top + n.height / 2, f.transform = "translateY(-50%)"), g === "end" && (f.top = n.top + n.height, f.transform = "translateY(-100%)");
    return R(), p.current = ha(function() {
      S(f);
    }), R;
  }, [n, t, r, g, A]), {
    style: I
  };
}, _a = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function pn(e, a, n) {
  return i.useMemo(function() {
    for (var t, r = /* @__PURE__ */ new Map(), o = a.get((t = e[0]) === null || t === void 0 ? void 0 : t.key) || _a, s = o.left + o.width, l = 0; l < e.length; l += 1) {
      var u = e[l].key, g = a.get(u);
      if (!g) {
        var v;
        g = a.get((v = e[l - 1]) === null || v === void 0 ? void 0 : v.key) || _a;
      }
      var m = r.get(u) || ae({}, g);
      m.right = s - m.left - m.width, r.set(u, m);
    }
    return r;
  }, [e.map(function(t) {
    return t.key;
  }).join("_"), a, n]);
}
function Va(e, a) {
  var n = i.useRef(e), t = i.useState({}), r = W(t, 2), o = r[1];
  function s(l) {
    var u = typeof l == "function" ? l(n.current) : l;
    u !== n.current && a(u, n.current), n.current = u, o({});
  }
  return [n.current, s];
}
var hn = 0.1, Ba = 0.01, Ne = 20, Wa = Math.pow(0.995, Ne);
function An(e, a) {
  var n = i.useState(), t = W(n, 2), r = t[0], o = t[1], s = i.useState(0), l = W(s, 2), u = l[0], g = l[1], v = i.useState(0), m = W(v, 2), I = m[0], S = m[1], p = i.useState(), A = W(p, 2), R = A[0], f = A[1], d = i.useRef();
  function h(C) {
    var V = C.touches[0], y = V.screenX, B = V.screenY;
    o({
      x: y,
      y: B
    }), window.clearInterval(d.current);
  }
  function L(C) {
    if (r) {
      C.preventDefault();
      var V = C.touches[0], y = V.screenX, B = V.screenY;
      o({
        x: y,
        y: B
      });
      var b = y - r.x, Z = B - r.y;
      a(b, Z);
      var j = Date.now();
      g(j), S(j - u), f({
        x: b,
        y: Z
      });
    }
  }
  function z() {
    if (r && (o(null), f(null), R)) {
      var C = R.x / I, V = R.y / I, y = Math.abs(C), B = Math.abs(V);
      if (Math.max(y, B) < hn)
        return;
      var b = C, Z = V;
      d.current = window.setInterval(function() {
        if (Math.abs(b) < Ba && Math.abs(Z) < Ba) {
          window.clearInterval(d.current);
          return;
        }
        b *= Wa, Z *= Wa, a(b * Ne, Z * Ne);
      }, Ne);
    }
  }
  var N = i.useRef();
  function P(C) {
    var V = C.deltaX, y = C.deltaY, B = 0, b = Math.abs(V), Z = Math.abs(y);
    b === Z ? B = N.current === "x" ? V : y : b > Z ? (B = V, N.current = "x") : (B = y, N.current = "y"), a(-B, -B) && C.preventDefault();
  }
  var _ = i.useRef(null);
  _.current = {
    onTouchStart: h,
    onTouchMove: L,
    onTouchEnd: z,
    onWheel: P
  }, i.useEffect(function() {
    function C(b) {
      _.current.onTouchStart(b);
    }
    function V(b) {
      _.current.onTouchMove(b);
    }
    function y(b) {
      _.current.onTouchEnd(b);
    }
    function B(b) {
      _.current.onWheel(b);
    }
    return document.addEventListener("touchmove", V, {
      passive: !1
    }), document.addEventListener("touchend", y, {
      passive: !1
    }), e.current.addEventListener("touchstart", C, {
      passive: !1
    }), e.current.addEventListener("wheel", B), function() {
      document.removeEventListener("touchmove", V), document.removeEventListener("touchend", y);
    };
  }, []);
}
function Ma(e) {
  var a = i.useState(0), n = W(a, 2), t = n[0], r = n[1], o = i.useRef(0), s = i.useRef();
  return s.current = e, ht(function() {
    var l;
    (l = s.current) === null || l === void 0 || l.call(s);
  }, [t]), function() {
    o.current === t && (o.current += 1, r(o.current));
  };
}
function yn(e) {
  var a = i.useRef([]), n = i.useState({}), t = W(n, 2), r = t[1], o = i.useRef(typeof e == "function" ? e() : e), s = Ma(function() {
    var u = o.current;
    a.current.forEach(function(g) {
      u = g(u);
    }), a.current = [], o.current = u, r({});
  });
  function l(u) {
    a.current.push(u), s();
  }
  return [o.current, l];
}
var Ta = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function xn(e, a, n, t, r, o, s) {
  var l = s.tabs, u = s.tabPosition, g = s.rtl, v, m, I;
  return ["top", "bottom"].includes(u) ? (v = "width", m = g ? "right" : "left", I = Math.abs(n)) : (v = "height", m = "top", I = -n), i.useMemo(function() {
    if (!l.length)
      return [0, 0];
    for (var S = l.length, p = S, A = 0; A < S; A += 1) {
      var R = e.get(l[A].key) || Ta;
      if (R[m] + R[v] > I + a) {
        p = A - 1;
        break;
      }
    }
    for (var f = 0, d = S - 1; d >= 0; d -= 1) {
      var h = e.get(l[d].key) || Ta;
      if (h[m] < I) {
        f = d + 1;
        break;
      }
    }
    return f >= p ? [0, 0] : [f, p];
  }, [e, a, t, r, o, I, u, l.map(function(S) {
    return S.key;
  }).join("_"), g]);
}
function $a(e) {
  var a;
  return e instanceof Map ? (a = {}, e.forEach(function(n, t) {
    a[t] = n;
  })) : a = e, JSON.stringify(a);
}
var Sn = "TABS_DQ";
function Fa(e) {
  return String(e).replace(/"/g, Sn);
}
function ja(e, a, n, t) {
  return (
    // Only editable tabs can be removed
    !(!n || // Tabs cannot be removed when disabled
    t || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (a === !1 || a === null))
  );
}
var Ja = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.prefixCls, t = e.editable, r = e.locale, o = e.style;
  return !t || t.showAdd === !1 ? null : /* @__PURE__ */ i.createElement("button", {
    ref: a,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: o,
    "aria-label": (r == null ? void 0 : r.addAriaLabel) || "Add tab",
    onClick: function(l) {
      t.onEdit("add", {
        event: l
      });
    }
  }, t.addIcon || "+");
}), Na = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.position, t = e.prefixCls, r = e.extra;
  if (!r)
    return null;
  var o, s = {};
  return ia(r) === "object" && !/* @__PURE__ */ i.isValidElement(r) ? s = r : s.right = r, n === "right" && (o = s.right), n === "left" && (o = s.left), o ? /* @__PURE__ */ i.createElement("div", {
    className: "".concat(t, "-extra-content"),
    ref: a
  }, o) : null;
}), Gn = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.prefixCls, t = e.id, r = e.tabs, o = e.locale, s = e.mobile, l = e.moreIcon, u = l === void 0 ? "More" : l, g = e.moreTransitionName, v = e.style, m = e.className, I = e.editable, S = e.tabBarGutter, p = e.rtl, A = e.removeAriaLabel, R = e.onTabClick, f = e.getPopupContainer, d = e.popupClassName, h = i.useState(!1), L = W(h, 2), z = L[0], N = L[1], P = i.useState(null), _ = W(P, 2), C = _[0], V = _[1], y = "".concat(t, "-more-popup"), B = "".concat(n, "-dropdown"), b = C !== null ? "".concat(y, "-").concat(C) : null, Z = o == null ? void 0 : o.dropdownAriaLabel;
  function j(X, k) {
    X.preventDefault(), X.stopPropagation(), I.onEdit("remove", {
      key: k,
      event: X
    });
  }
  var Y = /* @__PURE__ */ i.createElement(Et, {
    onClick: function(k) {
      var O = k.key, U = k.domEvent;
      R(O, U), N(!1);
    },
    prefixCls: "".concat(B, "-menu"),
    id: y,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": b,
    selectedKeys: [C],
    "aria-label": Z !== void 0 ? Z : "expanded dropdown"
  }, r.map(function(X) {
    var k = X.closable, O = X.disabled, U = X.closeIcon, H = X.key, ie = X.label, ee = ja(k, U, I, O);
    return /* @__PURE__ */ i.createElement(wt, {
      key: H,
      id: "".concat(y, "-").concat(H),
      role: "option",
      "aria-controls": t && "".concat(t, "-panel-").concat(H),
      disabled: O
    }, /* @__PURE__ */ i.createElement("span", null, ie), ee && /* @__PURE__ */ i.createElement("button", {
      type: "button",
      "aria-label": A || "remove",
      tabIndex: 0,
      className: "".concat(B, "-menu-item-remove"),
      onClick: function(ce) {
        ce.stopPropagation(), j(ce, H);
      }
    }, U || I.removeIcon || "×"));
  }));
  function Q(X) {
    for (var k = r.filter(function(ee) {
      return !ee.disabled;
    }), O = k.findIndex(function(ee) {
      return ee.key === C;
    }) || 0, U = k.length, H = 0; H < U; H += 1) {
      O = (O + X + U) % U;
      var ie = k[O];
      if (!ie.disabled) {
        V(ie.key);
        return;
      }
    }
  }
  function D(X) {
    var k = X.which;
    if (!z) {
      [le.DOWN, le.SPACE, le.ENTER].includes(k) && (N(!0), X.preventDefault());
      return;
    }
    switch (k) {
      case le.UP:
        Q(-1), X.preventDefault();
        break;
      case le.DOWN:
        Q(1), X.preventDefault();
        break;
      case le.ESC:
        N(!1);
        break;
      case le.SPACE:
      case le.ENTER:
        C !== null && R(C, X);
        break;
    }
  }
  i.useEffect(function() {
    var X = document.getElementById(b);
    X && X.scrollIntoView && X.scrollIntoView(!1);
  }, [C]), i.useEffect(function() {
    z || V(null);
  }, [z]);
  var q = M({}, p ? "marginRight" : "marginLeft", S);
  r.length || (q.visibility = "hidden", q.order = 1);
  var oe = F(M({}, "".concat(B, "-rtl"), p)), ne = s ? null : /* @__PURE__ */ i.createElement(Lt, {
    prefixCls: B,
    overlay: Y,
    trigger: ["hover"],
    visible: r.length ? z : !1,
    transitionName: g,
    onVisibleChange: N,
    overlayClassName: F(oe, d),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: f
  }, /* @__PURE__ */ i.createElement("button", {
    type: "button",
    className: "".concat(n, "-nav-more"),
    style: q,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": y,
    id: "".concat(t, "-more"),
    "aria-expanded": z,
    onKeyDown: D
  }, u));
  return /* @__PURE__ */ i.createElement("div", {
    className: F("".concat(n, "-nav-operations"), m),
    style: v,
    ref: a
  }, ne, /* @__PURE__ */ i.createElement(Ja, {
    prefixCls: n,
    locale: o,
    editable: I
  }));
});
const Xn = /* @__PURE__ */ i.memo(Gn, function(e, a) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    a.tabMoving
  );
});
var Rn = function(a) {
  var n = a.prefixCls, t = a.id, r = a.active, o = a.tab, s = o.key, l = o.label, u = o.disabled, g = o.closeIcon, v = o.icon, m = a.closable, I = a.renderWrapper, S = a.removeAriaLabel, p = a.editable, A = a.onClick, R = a.onFocus, f = a.style, d = "".concat(n, "-tab"), h = ja(m, g, p, u);
  function L(_) {
    u || A(_);
  }
  function z(_) {
    _.preventDefault(), _.stopPropagation(), p.onEdit("remove", {
      key: s,
      event: _
    });
  }
  var N = i.useMemo(function() {
    return v && typeof l == "string" ? /* @__PURE__ */ i.createElement("span", null, l) : l;
  }, [l, v]), P = /* @__PURE__ */ i.createElement("div", {
    key: s,
    "data-node-key": Fa(s),
    className: F(d, M(M(M({}, "".concat(d, "-with-remove"), h), "".concat(d, "-active"), r), "".concat(d, "-disabled"), u)),
    style: f,
    onClick: L
  }, /* @__PURE__ */ i.createElement("div", {
    role: "tab",
    "aria-selected": r,
    id: t && "".concat(t, "-tab-").concat(s),
    className: "".concat(d, "-btn"),
    "aria-controls": t && "".concat(t, "-panel-").concat(s),
    "aria-disabled": u,
    tabIndex: u ? null : 0,
    onClick: function(C) {
      C.stopPropagation(), L(C);
    },
    onKeyDown: function(C) {
      [le.SPACE, le.ENTER].includes(C.which) && (C.preventDefault(), L(C));
    },
    onFocus: R
  }, v && /* @__PURE__ */ i.createElement("span", {
    className: "".concat(d, "-icon")
  }, v), l && N), h && /* @__PURE__ */ i.createElement("button", {
    type: "button",
    "aria-label": S || "remove",
    tabIndex: 0,
    className: "".concat(d, "-remove"),
    onClick: function(C) {
      C.stopPropagation(), z(C);
    }
  }, g || p.removeIcon || "×"));
  return I ? I(P) : P;
}, Zn = function(a, n) {
  var t = a.offsetWidth, r = a.offsetHeight, o = a.offsetTop, s = a.offsetLeft, l = a.getBoundingClientRect(), u = l.width, g = l.height, v = l.x, m = l.y;
  return Math.abs(u - t) < 1 ? [u, g, v - n.x, m - n.y] : [t, r, s, o];
}, Ce = function(a) {
  var n = a.current || {}, t = n.offsetWidth, r = t === void 0 ? 0 : t, o = n.offsetHeight, s = o === void 0 ? 0 : o;
  if (a.current) {
    var l = a.current.getBoundingClientRect(), u = l.width, g = l.height;
    if (Math.abs(u - r) < 1)
      return [u, g];
  }
  return [r, s];
}, We = function(a, n) {
  return a[n ? 0 : 1];
}, ka = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.className, t = e.style, r = e.id, o = e.animated, s = e.activeKey, l = e.rtl, u = e.extra, g = e.editable, v = e.locale, m = e.tabPosition, I = e.tabBarGutter, S = e.children, p = e.onTabClick, A = e.onTabScroll, R = e.indicator, f = i.useContext(Ee), d = f.prefixCls, h = f.tabs, L = i.useRef(null), z = i.useRef(null), N = i.useRef(null), P = i.useRef(null), _ = i.useRef(null), C = i.useRef(null), V = i.useRef(null), y = m === "top" || m === "bottom", B = Va(0, function($, G) {
    y && A && A({
      direction: $ > G ? "left" : "right"
    });
  }), b = W(B, 2), Z = b[0], j = b[1], Y = Va(0, function($, G) {
    !y && A && A({
      direction: $ > G ? "top" : "bottom"
    });
  }), Q = W(Y, 2), D = Q[0], q = Q[1], oe = i.useState([0, 0]), ne = W(oe, 2), X = ne[0], k = ne[1], O = i.useState([0, 0]), U = W(O, 2), H = U[0], ie = U[1], ee = i.useState([0, 0]), se = W(ee, 2), ce = se[0], he = se[1], we = i.useState([0, 0]), Ae = W(we, 2), Le = Ae[0], T = Ae[1], be = yn(/* @__PURE__ */ new Map()), fe = W(be, 2), tt = fe[0], nt = fe[1], Xe = pn(h, tt, H[0]), ze = We(X, y), ye = We(H, y), Ue = We(ce, y), la = We(Le, y), oa = ze < ye + Ue, re = oa ? ze - la : ze - Ue, it = "".concat(d, "-nav-operations-hidden"), de = 0, me = 0;
  y && l ? (de = 0, me = Math.max(0, ye - re)) : (de = Math.min(0, re - ye), me = 0);
  function He($) {
    return $ < de ? de : $ > me ? me : $;
  }
  var Ye = i.useRef(null), rt = i.useState(), sa = W(rt, 2), Re = sa[0], ca = sa[1];
  function De() {
    ca(Date.now());
  }
  function Oe() {
    Ye.current && clearTimeout(Ye.current);
  }
  An(P, function($, G) {
    function w(J, ve) {
      J(function(ue) {
        var Ve = He(ue + ve);
        return Ve;
      });
    }
    return oa ? (y ? w(j, $) : w(q, G), Oe(), De(), !0) : !1;
  }), i.useEffect(function() {
    return Oe(), Re && (Ye.current = setTimeout(function() {
      ca(0);
    }, 100)), Oe;
  }, [Re]);
  var lt = xn(
    Xe,
    // Container
    re,
    // Transform
    y ? Z : D,
    // Tabs
    ye,
    // Add
    Ue,
    // Operation
    la,
    ae(ae({}, e), {}, {
      tabs: h
    })
  ), da = W(lt, 2), ot = da[0], st = da[1], ua = At(function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s, G = Xe.get($) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (y) {
      var w = Z;
      l ? G.right < Z ? w = G.right : G.right + G.width > Z + re && (w = G.right + G.width - re) : G.left < -Z ? w = -G.left : G.left + G.width > -Z + re && (w = -(G.left + G.width - re)), q(0), j(He(w));
    } else {
      var J = D;
      G.top < -D ? J = -G.top : G.top + G.height > -D + re && (J = -(G.top + G.height - re)), j(0), q(He(J));
    }
  }), Ze = {};
  m === "top" || m === "bottom" ? Ze[l ? "marginRight" : "marginLeft"] = I : Ze.marginTop = I;
  var ga = h.map(function($, G) {
    var w = $.key;
    return /* @__PURE__ */ i.createElement(Rn, {
      id: r,
      prefixCls: d,
      key: w,
      tab: $,
      style: G === 0 ? void 0 : Ze,
      closable: $.closable,
      editable: g,
      active: w === s,
      renderWrapper: S,
      removeAriaLabel: v == null ? void 0 : v.removeAriaLabel,
      onClick: function(ve) {
        p(w, ve);
      },
      onFocus: function() {
        ua(w), De(), P.current && (l || (P.current.scrollLeft = 0), P.current.scrollTop = 0);
      }
    });
  }), ba = function() {
    return nt(function() {
      var G, w = /* @__PURE__ */ new Map(), J = (G = _.current) === null || G === void 0 ? void 0 : G.getBoundingClientRect();
      return h.forEach(function(ve) {
        var ue, Ve = ve.key, pa = (ue = _.current) === null || ue === void 0 ? void 0 : ue.querySelector('[data-node-key="'.concat(Fa(Ve), '"]'));
        if (pa) {
          var bt = Zn(pa, J), Be = W(bt, 4), mt = Be[0], vt = Be[1], It = Be[2], ft = Be[3];
          w.set(Ve, {
            width: mt,
            height: vt,
            left: It,
            top: ft
          });
        }
      }), w;
    });
  };
  i.useEffect(function() {
    ba();
  }, [h.map(function($) {
    return $.key;
  }).join("_")]);
  var _e = Ma(function() {
    var $ = Ce(L), G = Ce(z), w = Ce(N);
    k([$[0] - G[0] - w[0], $[1] - G[1] - w[1]]);
    var J = Ce(V);
    he(J);
    var ve = Ce(C);
    T(ve);
    var ue = Ce(_);
    ie([ue[0] - J[0], ue[1] - J[1]]), ba();
  }), ct = h.slice(0, ot), dt = h.slice(st + 1), ma = [].concat(Aa(ct), Aa(dt)), va = Xe.get(s), ut = Cn({
    activeTabOffset: va,
    horizontal: y,
    indicator: R,
    rtl: l
  }), gt = ut.style;
  i.useEffect(function() {
    ua();
  }, [s, de, me, $a(va), $a(Xe), y]), i.useEffect(function() {
    _e();
  }, [l]);
  var Ia = !!ma.length, xe = "".concat(d, "-nav-wrap"), Me, Fe, fa, Ca;
  return y ? l ? (Fe = Z > 0, Me = Z !== me) : (Me = Z < 0, Fe = Z !== de) : (fa = D < 0, Ca = D !== de), /* @__PURE__ */ i.createElement(Je, {
    onResize: _e
  }, /* @__PURE__ */ i.createElement("div", {
    ref: yt(a, L),
    role: "tablist",
    className: F("".concat(d, "-nav"), n),
    style: t,
    onKeyDown: function() {
      De();
    }
  }, /* @__PURE__ */ i.createElement(Na, {
    ref: z,
    position: "left",
    extra: u,
    prefixCls: d
  }), /* @__PURE__ */ i.createElement(Je, {
    onResize: _e
  }, /* @__PURE__ */ i.createElement("div", {
    className: F(xe, M(M(M(M({}, "".concat(xe, "-ping-left"), Me), "".concat(xe, "-ping-right"), Fe), "".concat(xe, "-ping-top"), fa), "".concat(xe, "-ping-bottom"), Ca)),
    ref: P
  }, /* @__PURE__ */ i.createElement(Je, {
    onResize: _e
  }, /* @__PURE__ */ i.createElement("div", {
    ref: _,
    className: "".concat(d, "-nav-list"),
    style: {
      transform: "translate(".concat(Z, "px, ").concat(D, "px)"),
      transition: Re ? "none" : void 0
    }
  }, ga, /* @__PURE__ */ i.createElement(Ja, {
    ref: V,
    prefixCls: d,
    locale: v,
    editable: g,
    style: ae(ae({}, ga.length === 0 ? void 0 : Ze), {}, {
      visibility: Ia ? "hidden" : null
    })
  }), /* @__PURE__ */ i.createElement("div", {
    className: F("".concat(d, "-ink-bar"), M({}, "".concat(d, "-ink-bar-animated"), o.inkBar)),
    style: gt
  }))))), /* @__PURE__ */ i.createElement(Xn, ge({}, e, {
    removeAriaLabel: v == null ? void 0 : v.removeAriaLabel,
    ref: C,
    prefixCls: d,
    tabs: ma,
    className: !Ia && it,
    tabMoving: !!Re
  })), /* @__PURE__ */ i.createElement(Na, {
    ref: N,
    position: "right",
    extra: u,
    prefixCls: d
  })));
}), Ka = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.prefixCls, t = e.className, r = e.style, o = e.id, s = e.active, l = e.tabKey, u = e.children;
  return /* @__PURE__ */ i.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(l),
    role: "tabpanel",
    tabIndex: s ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(l),
    "aria-hidden": !s,
    style: r,
    className: F(n, s && "".concat(n, "-active"), t),
    ref: a
  }, u);
}), _n = ["renderTabBar"], Vn = ["label", "key"], Bn = function(a) {
  var n = a.renderTabBar, t = ke(a, _n), r = i.useContext(Ee), o = r.tabs;
  if (n) {
    var s = ae(ae({}, t), {}, {
      // Legacy support. We do not use this actually
      panes: o.map(function(l) {
        var u = l.label, g = l.key, v = ke(l, Vn);
        return /* @__PURE__ */ i.createElement(Ka, ge({
          tab: u,
          key: g,
          tabKey: g
        }, v));
      })
    });
    return n(s, ka);
  }
  return /* @__PURE__ */ i.createElement(ka, t);
}, Wn = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], Tn = function(a) {
  var n = a.id, t = a.activeKey, r = a.animated, o = a.tabPosition, s = a.destroyInactiveTabPane, l = i.useContext(Ee), u = l.prefixCls, g = l.tabs, v = r.tabPane, m = "".concat(u, "-tabpane");
  return /* @__PURE__ */ i.createElement("div", {
    className: F("".concat(u, "-content-holder"))
  }, /* @__PURE__ */ i.createElement("div", {
    className: F("".concat(u, "-content"), "".concat(u, "-content-").concat(o), M({}, "".concat(u, "-content-animated"), v))
  }, g.map(function(I) {
    var S = I.key, p = I.forceRender, A = I.style, R = I.className, f = I.destroyInactiveTabPane, d = ke(I, Wn), h = S === t;
    return /* @__PURE__ */ i.createElement(xt, ge({
      key: S,
      visible: h,
      forceRender: p,
      removeOnLeave: !!(s || f),
      leavedClassName: "".concat(m, "-hidden")
    }, r.tabPaneMotion), function(L, z) {
      var N = L.style, P = L.className;
      return /* @__PURE__ */ i.createElement(Ka, ge({}, d, {
        prefixCls: m,
        id: n,
        tabKey: S,
        animated: v,
        active: h,
        style: ae(ae({}, A), N),
        className: F(R, P),
        ref: z
      }));
    });
  })));
};
function $n() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, a;
  return e === !1 ? a = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? a = {
    inkBar: !0,
    tabPane: !1
  } : a = ae({
    inkBar: !0
  }, ia(e) === "object" ? e : {}), a.tabPaneMotion && a.tabPane === void 0 && (a.tabPane = !0), !a.tabPaneMotion && a.tabPane && (a.tabPane = !1), a;
}
var Nn = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], Pa = 0, kn = /* @__PURE__ */ i.forwardRef(function(e, a) {
  var n = e.id, t = e.prefixCls, r = t === void 0 ? "rc-tabs" : t, o = e.className, s = e.items, l = e.direction, u = e.activeKey, g = e.defaultActiveKey, v = e.editable, m = e.animated, I = e.tabPosition, S = I === void 0 ? "top" : I, p = e.tabBarGutter, A = e.tabBarStyle, R = e.tabBarExtraContent, f = e.locale, d = e.moreIcon, h = e.moreTransitionName, L = e.destroyInactiveTabPane, z = e.renderTabBar, N = e.onChange, P = e.onTabClick, _ = e.onTabScroll, C = e.getPopupContainer, V = e.popupClassName, y = e.indicator, B = ke(e, Nn), b = i.useMemo(function() {
    return (s || []).filter(function(T) {
      return T && ia(T) === "object" && "key" in T;
    });
  }, [s]), Z = l === "rtl", j = $n(m), Y = i.useState(!1), Q = W(Y, 2), D = Q[0], q = Q[1];
  i.useEffect(function() {
    q(Jt());
  }, []);
  var oe = ya(function() {
    var T;
    return (T = b[0]) === null || T === void 0 ? void 0 : T.key;
  }, {
    value: u,
    defaultValue: g
  }), ne = W(oe, 2), X = ne[0], k = ne[1], O = i.useState(function() {
    return b.findIndex(function(T) {
      return T.key === X;
    });
  }), U = W(O, 2), H = U[0], ie = U[1];
  i.useEffect(function() {
    var T = b.findIndex(function(fe) {
      return fe.key === X;
    });
    if (T === -1) {
      var be;
      T = Math.max(0, Math.min(H, b.length - 1)), k((be = b[T]) === null || be === void 0 ? void 0 : be.key);
    }
    ie(T);
  }, [b.map(function(T) {
    return T.key;
  }).join("_"), X, H]);
  var ee = ya(null, {
    value: n
  }), se = W(ee, 2), ce = se[0], he = se[1];
  i.useEffect(function() {
    n || (he("rc-tabs-".concat(Pa)), Pa += 1);
  }, []);
  function we(T, be) {
    P == null || P(T, be);
    var fe = T !== X;
    k(T), fe && (N == null || N(T));
  }
  var Ae = {
    id: ce,
    activeKey: X,
    animated: j,
    tabPosition: S,
    rtl: Z,
    mobile: D
  }, Le = ae(ae({}, Ae), {}, {
    editable: v,
    locale: f,
    moreIcon: d,
    moreTransitionName: h,
    tabBarGutter: p,
    onTabClick: we,
    onTabScroll: _,
    extra: R,
    style: A,
    panes: null,
    getPopupContainer: C,
    popupClassName: V,
    indicator: y
  });
  return /* @__PURE__ */ i.createElement(Ee.Provider, {
    value: {
      tabs: b,
      prefixCls: r
    }
  }, /* @__PURE__ */ i.createElement("div", ge({
    ref: a,
    id: n,
    className: F(r, "".concat(r, "-").concat(S), M(M(M({}, "".concat(r, "-mobile"), D), "".concat(r, "-editable"), v), "".concat(r, "-rtl"), Z), o)
  }, B), /* @__PURE__ */ i.createElement(Bn, ge({}, Le, {
    renderTabBar: z
  })), /* @__PURE__ */ i.createElement(Tn, ge({
    destroyInactiveTabPane: L
  }, Ae, {
    animated: j
  }))));
});
const Pn = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function En(e) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inkBar: !0,
    tabPane: !1
  }, n;
  return a === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : a === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof a == "object" ? a : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, Pn), {
    motionName: St(e, "switch")
  })), n;
}
var wn = function(e, a) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      a.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (n[t[r]] = e[t[r]]);
  return n;
};
function Ln(e) {
  return e.filter((a) => a);
}
function zn(e, a) {
  if (e)
    return e;
  const n = Gt(a).map((t) => {
    if (/* @__PURE__ */ i.isValidElement(t)) {
      const {
        key: r,
        props: o
      } = t, s = o || {}, {
        tab: l
      } = s, u = wn(s, ["tab"]);
      return Object.assign(Object.assign({
        key: String(r)
      }, u), {
        label: l
      });
    }
    return null;
  });
  return Ln(n);
}
const Un = (e) => {
  const {
    componentCls: a,
    motionDurationSlow: n
  } = e;
  return [
    {
      [a]: {
        [`${a}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${n}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [Sa(e, "slide-up"), Sa(e, "slide-down")]
  ];
}, Hn = (e) => {
  const {
    componentCls: a,
    tabsCardPadding: n,
    cardBg: t,
    cardGutter: r,
    colorBorderSecondary: o,
    itemSelectedColor: s
  } = e;
  return {
    [`${a}-card`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        [`${a}-tab`]: {
          margin: 0,
          padding: n,
          background: t,
          border: `${x(e.lineWidth)} ${e.lineType} ${o}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${a}-tab-active`]: {
          color: s,
          background: e.colorBgContainer
        },
        [`${a}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${a}-top, &${a}-bottom`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab + ${a}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: x(r)
            }
          }
        }
      },
      [`&${a}-top`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab`]: {
            borderRadius: `${x(e.borderRadiusLG)} ${x(e.borderRadiusLG)} 0 0`
          },
          [`${a}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${a}-bottom`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab`]: {
            borderRadius: `0 0 ${x(e.borderRadiusLG)} ${x(e.borderRadiusLG)}`
          },
          [`${a}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${a}-left, &${a}-right`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab + ${a}-tab`]: {
            marginTop: x(r)
          }
        }
      },
      [`&${a}-left`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${x(e.borderRadiusLG)} 0 0 ${x(e.borderRadiusLG)}`
            }
          },
          [`${a}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${a}-right`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${x(e.borderRadiusLG)} ${x(e.borderRadiusLG)} 0`
            }
          },
          [`${a}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, Yn = (e) => {
  const {
    componentCls: a,
    itemHoverColor: n,
    dropdownEdgeChildVerticalPadding: t
  } = e;
  return {
    [`${a}-dropdown`]: Object.assign(Object.assign({}, za(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${a}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${x(t)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, Zt), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${x(e.paddingXXS)} ${x(e.paddingSM)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: n
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, Dn = (e) => {
  const {
    componentCls: a,
    margin: n,
    colorBorderSecondary: t,
    horizontalMargin: r,
    verticalItemPadding: o,
    verticalItemMargin: s,
    calc: l
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${a}-top, ${a}-bottom`]: {
      flexDirection: "column",
      [`> ${a}-nav, > div > ${a}-nav`]: {
        margin: r,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${x(e.lineWidth)} ${e.lineType} ${t}`,
          content: "''"
        },
        [`${a}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${a}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${a}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${a}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${a}-top`]: {
      [`> ${a}-nav,
        > div > ${a}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${a}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${a}-bottom`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        order: 1,
        marginTop: n,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${a}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${a}-content-holder, > div > ${a}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${a}-left, ${a}-right`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        flexDirection: "column",
        minWidth: l(e.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${a}-tab`]: {
          padding: o,
          textAlign: "center"
        },
        [`${a}-tab + ${a}-tab`]: {
          margin: s
        },
        // >>>>>>>>>>> Nav
        [`${a}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${a}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${a}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${a}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${a}-nav-list, ${a}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${a}-left`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        [`${a}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${a}-content-holder, > div > ${a}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: x(l(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${x(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${a}-content > ${a}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${a}-right`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        order: 1,
        [`${a}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${a}-content-holder, > div > ${a}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: l(e.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: !0,
          value: `${x(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${a}-content > ${a}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, On = (e) => {
  const {
    componentCls: a,
    cardPaddingSM: n,
    cardPaddingLG: t,
    horizontalItemPaddingSM: r,
    horizontalItemPaddingLG: o
  } = e;
  return {
    [a]: {
      "&-small": {
        [`> ${a}-nav`]: {
          [`${a}-tab`]: {
            padding: r,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${a}-nav`]: {
          [`${a}-tab`]: {
            padding: o,
            fontSize: e.titleFontSizeLG
          }
        }
      }
    },
    [`${a}-card`]: {
      [`&${a}-small`]: {
        [`> ${a}-nav`]: {
          [`${a}-tab`]: {
            padding: n
          }
        },
        [`&${a}-bottom`]: {
          [`> ${a}-nav ${a}-tab`]: {
            borderRadius: `0 0 ${x(e.borderRadius)} ${x(e.borderRadius)}`
          }
        },
        [`&${a}-top`]: {
          [`> ${a}-nav ${a}-tab`]: {
            borderRadius: `${x(e.borderRadius)} ${x(e.borderRadius)} 0 0`
          }
        },
        [`&${a}-right`]: {
          [`> ${a}-nav ${a}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${x(e.borderRadius)} ${x(e.borderRadius)} 0`
            }
          }
        },
        [`&${a}-left`]: {
          [`> ${a}-nav ${a}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${x(e.borderRadius)} 0 0 ${x(e.borderRadius)}`
            }
          }
        }
      },
      [`&${a}-large`]: {
        [`> ${a}-nav`]: {
          [`${a}-tab`]: {
            padding: t
          }
        }
      }
    }
  };
}, Mn = (e) => {
  const {
    componentCls: a,
    itemActiveColor: n,
    itemHoverColor: t,
    iconCls: r,
    tabsHorizontalItemMargin: o,
    horizontalItemPadding: s,
    itemSelectedColor: l,
    itemColor: u
  } = e, g = `${a}-tab`;
  return {
    [g]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: s,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: u,
      "&-btn, &-remove": Object.assign({
        "&:focus:not(:focus-visible), &:active": {
          color: n
        }
      }, Ua(e)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s",
        [`${g}-icon:not(:last-child)`]: {
          marginInlineEnd: e.marginSM
        }
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: e.calc(e.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorTextDescription,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      "&:hover": {
        color: t
      },
      [`&${g}-active ${g}-btn`]: {
        color: l,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${g}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${g}-disabled ${g}-btn, &${g}-disabled ${a}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${g}-remove ${r}`]: {
        margin: 0
      },
      [`${r}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${g} + ${g}`]: {
      margin: {
        _skip_check_: !0,
        value: o
      }
    }
  };
}, Fn = (e) => {
  const {
    componentCls: a,
    tabsHorizontalItemMarginRTL: n,
    iconCls: t,
    cardGutter: r,
    calc: o
  } = e;
  return {
    [`${a}-rtl`]: {
      direction: "rtl",
      [`${a}-nav`]: {
        [`${a}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: n
          },
          [`${a}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [t]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: x(e.marginSM)
            }
          },
          [`${a}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: x(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: x(o(e.marginXXS).mul(-1).equal())
            },
            [t]: {
              margin: 0
            }
          }
        }
      },
      [`&${a}-left`]: {
        [`> ${a}-nav`]: {
          order: 1
        },
        [`> ${a}-content-holder`]: {
          order: 0
        }
      },
      [`&${a}-right`]: {
        [`> ${a}-nav`]: {
          order: 0
        },
        [`> ${a}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${a}-card${a}-top, &${a}-card${a}-bottom`]: {
        [`> ${a}-nav, > div > ${a}-nav`]: {
          [`${a}-tab + ${a}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: r
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${a}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${a}-menu-item`]: {
      [`${a}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, jn = (e) => {
  const {
    componentCls: a,
    tabsCardPadding: n,
    cardHeight: t,
    cardGutter: r,
    itemHoverColor: o,
    itemActiveColor: s,
    colorBorderSecondary: l
  } = e;
  return {
    [a]: Object.assign(Object.assign(Object.assign(Object.assign({}, za(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${a}-nav, > div > ${a}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${a}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${a}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${a}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${a}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${a}-nav-more`]: {
          position: "relative",
          padding: n,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.calc(e.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${a}-nav-add`]: Object.assign({
          minWidth: t,
          minHeight: t,
          marginLeft: {
            _skip_check_: !0,
            value: r
          },
          padding: `0 ${x(e.paddingXS)}`,
          background: "transparent",
          border: `${x(e.lineWidth)} ${e.lineType} ${l}`,
          borderRadius: `${x(e.borderRadiusLG)} ${x(e.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: o
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: s
          }
        }, Ua(e))
      },
      [`${a}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${a}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), Mn(e)), {
      // =========================== TabPanes ===========================
      [`${a}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${a}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${a}-tabpane`]: {
        outline: "none",
        "&-hidden": {
          display: "none"
        }
      }
    }),
    [`${a}-centered`]: {
      [`> ${a}-nav, > div > ${a}-nav`]: {
        [`${a}-nav-wrap`]: {
          [`&:not([class*='${a}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
}, Jn = (e) => {
  const a = e.controlHeightLG;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    cardHeight: a,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(a - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
    cardPaddingSM: `${e.paddingXXS * 1.5}px ${e.padding}px`,
    cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS * 1.5}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemColor: e.colorText,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
}, Kn = Xt("Tabs", (e) => {
  const a = Rt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${x(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${x(e.horizontalItemGutter)}`
  });
  return [On(a), Fn(a), Dn(a), Yn(a), Hn(a), jn(a), Un(a)];
}, Jn), Qn = () => null, qn = Qn;
var ei = function(e, a) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      a.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (n[t[r]] = e[t[r]]);
  return n;
};
const Qa = (e) => {
  var a, n, t, r, o, s, l, u;
  const {
    type: g,
    className: v,
    rootClassName: m,
    size: I,
    onEdit: S,
    hideAdd: p,
    centered: A,
    addIcon: R,
    removeIcon: f,
    moreIcon: d,
    popupClassName: h,
    children: L,
    items: z,
    animated: N,
    style: P,
    indicatorSize: _,
    indicator: C
  } = e, V = ei(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]), {
    prefixCls: y
  } = V, {
    direction: B,
    tabs: b,
    getPrefixCls: Z,
    getPopupContainer: j
  } = i.useContext(_t), Y = Z("tabs", y), Q = Vt(Y), [D, q, oe] = Kn(Y, Q);
  let ne;
  g === "editable-card" && (ne = {
    onEdit: (ee, se) => {
      let {
        key: ce,
        event: he
      } = se;
      S == null || S(ee === "add" ? he : ce, ee);
    },
    removeIcon: (a = f ?? (b == null ? void 0 : b.removeIcon)) !== null && a !== void 0 ? a : /* @__PURE__ */ i.createElement(Bt, null),
    addIcon: (R ?? (b == null ? void 0 : b.addIcon)) || /* @__PURE__ */ i.createElement(fn, null),
    showAdd: p !== !0
  });
  const X = Z(), k = Wt(I), O = zn(z, L), U = En(Y, N), H = Object.assign(Object.assign({}, b == null ? void 0 : b.style), P), ie = {
    align: (n = C == null ? void 0 : C.align) !== null && n !== void 0 ? n : (t = b == null ? void 0 : b.indicator) === null || t === void 0 ? void 0 : t.align,
    size: (l = (o = (r = C == null ? void 0 : C.size) !== null && r !== void 0 ? r : _) !== null && o !== void 0 ? o : (s = b == null ? void 0 : b.indicator) === null || s === void 0 ? void 0 : s.size) !== null && l !== void 0 ? l : b == null ? void 0 : b.indicatorSize
  };
  return D(/* @__PURE__ */ i.createElement(kn, Object.assign({
    direction: B,
    getPopupContainer: j,
    moreTransitionName: `${X}-slide-up`
  }, V, {
    items: O,
    className: F({
      [`${Y}-${k}`]: k,
      [`${Y}-card`]: ["card", "editable-card"].includes(g),
      [`${Y}-editable-card`]: g === "editable-card",
      [`${Y}-centered`]: A
    }, b == null ? void 0 : b.className, v, m, q, oe, Q),
    popupClassName: F(h, q, oe, Q),
    style: H,
    editable: ne,
    moreIcon: (u = d ?? (b == null ? void 0 : b.moreIcon)) !== null && u !== void 0 ? u : /* @__PURE__ */ i.createElement(zt, null),
    prefixCls: Y,
    animated: U,
    indicator: ie
  })));
};
Qa.TabPane = qn;
const qa = Qa;
var ai = {
  name: "i2ygnv",
  styles: "height:100%;cursor:pointer"
};
function ti() {
  const e = Tt(), {
    t: a
  } = Pe(), [n, t] = i.useState(!1);
  return E($e, {
    children: [n && c(Ut, {
      onSuccess: () => t(!1)
    }), E("div", {
      css: [Kt(), {
        height: Da,
        backgroundColor: pe.color.bg,
        padding: 12,
        margin: "0 16px",
        boxSizing: "border-box"
      }, "", ""],
      children: [c("a", {
        css: ai,
        onClick: () => {
          e(xa);
        },
        children: c("img", {
          src: Ht,
          alt: "postman"
        })
      }), E("div", {
        css: [Ga(), "& > * + *{margin-left:6px;}", ""],
        children: [c(Dt, {
          menu: {
            items: [{
              key: "0",
              label: a("head.updateConfig"),
              onClick() {
                t(!0);
              }
            }, {
              key: "1",
              label: a("head.reselectService"),
              onClick() {
                e(xa);
              }
            }]
          },
          children: c("a", {
            css: Ga(),
            onClick: (r) => r.preventDefault(),
            children: c(Yt, {})
          })
        }), c(Ot, {}), c(Mt, {})]
      })]
    })]
  });
}
var aa = /* @__PURE__ */ ((e) => (e.dateTimeUnix = "dateTimeUnix", e.dateUnix = "dateUnix", e.dateTime = "dateTime", e.date = "date", e))(aa || {}), et = /* @__PURE__ */ ((e) => (e.dateTime = "dateTime", e.dateTimeUnix = "dateTimeUnix", e))(et || {});
const ni = (e) => ({
  dateTime: Ie.t("postman.dateTime"),
  date: Ie.t("postman.date"),
  dateTimeUnix: Ie.t("postman.dateTimeUnix"),
  dateUnix: Ie.t("postman.dateUnix")
})[e];
var te = /* @__PURE__ */ ((e) => (e.fieldName = "fieldName", e.fieldType = "fieldType", e.fieldValue = "fieldValue", e))(te || {}), ta = /* @__PURE__ */ ((e) => (e.single = "single", e.multiple = "multiple", e))(ta || {});
const ii = (e) => ({
  single: Ie.t("postman.single"),
  multiple: Ie.t("postman.multiple")
})[e];
var na = /* @__PURE__ */ ((e) => (e.fieldName = "fieldName", e.fieldType = "fieldType", e.fieldValue = "fieldValue", e))(na || {});
function Ea({
  position: e,
  form: a
}) {
  const {
    t: n
  } = Pe(), t = Qe(aa, (l) => ({
    label: ni(l),
    value: l
  })), r = Qe(ta, (l) => ({
    label: ii(l),
    value: l
  })), o = (l) => Array.isArray(l) ? l : l == null ? void 0 : l.fileList, s = (l, u) => {
    var g;
    return ((g = a.getFieldValue(l)) == null ? void 0 : g[u]) || {};
  };
  return E($e, {
    children: [c(Za, {
      title: n("postman.customTime"),
      children: c(K.List, {
        name: `custom${e}Times`,
        children: (l, {
          add: u,
          remove: g
        }) => E($e, {
          children: [l.map(({
            key: v,
            name: m,
            ...I
          }, S) => {
            const p = s(`custom${e}Times`, S);
            return E("div", {
              style: {
                display: "flex"
              },
              children: [c(K.Item, {
                ...I,
                name: [m, te.fieldName],
                style: {
                  width: "35%",
                  marginRight: 8
                },
                children: c(qe, {
                  addonBefore: n("postman.fieldName"),
                  placeholder: n("postman.fieldNamePlaceholder")
                })
              }), c(K.Item, {
                ...I,
                name: [m, te.fieldType],
                style: {
                  width: "27%",
                  marginRight: 8
                },
                children: c(ea, {
                  placeholder: "please select time type",
                  options: t
                })
              }), c(K.Item, {
                ...I,
                name: [m, te.fieldValue],
                style: {
                  width: "33%",
                  marginRight: 8
                },
                children: c(tn, {
                  showTime: Qt(et, p.fieldType),
                  needConfirm: !1,
                  style: {
                    width: "100%"
                  }
                })
              }), c(K.Item, {
                ...I,
                style: {
                  width: "5%"
                },
                children: c("a", {
                  onClick: () => g(m),
                  children: c("img", {
                    src: Xa
                  })
                })
              })]
            }, v);
          }), c("div", {
            children: c(Ge, {
              type: "dashed",
              onClick: () => u({
                [te.fieldName]: "time",
                [te.fieldType]: aa.dateTimeUnix,
                [te.fieldValue]: nn()
              }),
              style: {
                width: "60%"
              },
              icon: c("img", {
                src: Ra
              }),
              children: n("postman.addTimeField")
            })
          })]
        })
      })
    }), e === "Data" && c(Za, {
      title: n("postman.customFile"),
      children: c(K.List, {
        name: "customDataFiles",
        children: (l, {
          add: u,
          remove: g
        }) => E($e, {
          children: [l.map(({
            key: v,
            name: m,
            ...I
          }, S) => {
            const p = s("customDataFiles", S);
            return E("div", {
              style: {
                display: "flex"
              },
              children: [c(K.Item, {
                ...I,
                name: [m, na.fieldName],
                style: {
                  width: "35%",
                  marginRight: 8
                },
                children: c(qe, {
                  addonBefore: n("postman.fieldName"),
                  placeholder: n("postman.fieldNamePlaceholder")
                })
              }), c(K.Item, {
                ...I,
                name: [m, te.fieldType],
                style: {
                  width: "27%",
                  marginRight: 8
                },
                children: c(ea, {
                  placeholder: "please select upload file type",
                  options: r
                })
              }), c(K.Item, {
                ...I,
                name: [m, na.fieldValue],
                valuePropName: "fileList",
                getValueFromEvent: o,
                style: {
                  width: "33%",
                  marginRight: 8
                },
                children: c(un, {
                  multiple: (p == null ? void 0 : p.fieldType) === "multiple",
                  beforeUpload: () => !1,
                  children: E(Ge, {
                    css: [qt(), "&:hover img{filter:invert(30%) sepia(85%) saturate(2525%) hue-rotate(208deg) brightness(104%) contrast(101%);}", ""],
                    children: [c("img", {
                      src: gn,
                      style: {
                        marginRight: 6
                      },
                      alt: "upload"
                    }), c("span", {
                      style: {
                        fontSize: pe.fontSize.xs
                      },
                      children: n("postman.uploadFile")
                    })]
                  })
                })
              }), c(K.Item, {
                ...I,
                style: {
                  width: "5%"
                },
                children: c("a", {
                  onClick: () => g(m),
                  children: c("img", {
                    src: Xa
                  })
                })
              })]
            }, v);
          }), c("div", {
            children: c(Ge, {
              type: "dashed",
              onClick: () => u({
                [te.fieldName]: "file",
                [te.fieldType]: ta.single,
                [te.fieldValue]: null
              }),
              style: {
                width: "60%"
              },
              icon: c("img", {
                src: Ra
              }),
              children: n("postman.addFileField")
            })
          })]
        })
      })
    })]
  });
}
function ra(e) {
  const a = e.value ? JSON.stringify(e.value, null, 4) : "{}";
  return c(rn, {
    height: e.height || 300,
    theme: "vs-dark",
    defaultLanguage: "json",
    value: a,
    onChange: (n) => {
      if (!n)
        return e.onChange(null);
      try {
        const t = JSON.parse(n);
        t && e.onChange(t);
      } catch {
      }
    },
    onMount: (n, t) => {
      try {
        t.languages.json.jsonDefaults.setDiagnosticsOptions({
          validate: !0
        });
      } catch {
      }
    }
  });
}
const ri = (e) => {
  const a = {
    value: e.value || {},
    onChange: e.onChange ? e.onChange : () => {
    }
  };
  return E("div", {
    children: [c(ra, {
      ...a,
      height: 400
    }), E(Se.Group, {
      style: {
        marginTop: 10
      },
      value: a.value["Content-Type"] || "",
      onChange: (n) => a.onChange(Object.assign({}, a.value, {
        "Content-Type": n.target.value
      })),
      children: [c(Se, {
        value: "",
        children: "none"
      }), c(Se, {
        value: "application/json",
        children: "json"
      }), c(Se, {
        value: "multipart/form-data",
        children: "form-data"
      }), c(Se, {
        value: "application/x-www-form-urlencoded",
        children: "x-www-form-urlencoded"
      })]
    })]
  });
}, li = (e) => {
  const a = {
    value: e.value || {},
    onChange: e.onChange ? e.onChange : () => {
    }
  };
  return c(ra, {
    ...a,
    height: 400
  });
}, oi = (e) => {
  const a = {
    value: e.value || {},
    onChange: e.onChange ? e.onChange : () => {
    }
  };
  return c(ra, {
    ...a,
    height: 400
  });
};
function si(e = {}) {
  var r, o;
  if (!e.url)
    return e;
  const [a, n] = ci(e.url);
  e.baseURL = a, e.url = n;
  const t = ((r = e == null ? void 0 : e.headers) == null ? void 0 : r["Content-Type"]) || "application/json";
  return (o = e == null ? void 0 : e.headers) != null && o.Referer && (e == null || delete e.headers.Referer), Ha(e == null ? void 0 : e.data) || (e.headers = {
    ...(e == null ? void 0 : e.headers) || {},
    "Content-Type": t + ";charset=UTF-8"
  }), e;
}
function ci(e) {
  if (!e || !Oa.test(e))
    return ["//serviceURL", "/URL"];
  const a = e.split("//"), n = a[1].split("/"), t = `${a[0]}//${n[0]}`, r = `/${n.slice(1).join("/")}`;
  return [t, r];
}
function wa(e) {
  return !e || !e.length ? {} : Ya(e, (n, t) => (t != null && t.fieldValue && (n[t == null ? void 0 : t.fieldName] = t != null && t.fieldType.toLocaleLowerCase().includes("unix") ? t == null ? void 0 : t.fieldValue.unix() : t == null ? void 0 : t.fieldValue.toISOString()), n), {});
}
function di(e) {
  return !e || !e.length ? {} : Ya(e, (n, t) => (t != null && t.fieldValue && (n[t == null ? void 0 : t.fieldName] = (t == null ? void 0 : t.fieldType) === "single" ? t == null ? void 0 : t.fieldValue[0] : t == null ? void 0 : t.fieldValue), n), {});
}
function ui({
  size: e = "18",
  fill: a = "#8A8A8A",
  ...n
}) {
  return c("svg", {
    width: e,
    height: e,
    viewBox: "0 0 1024 1024",
    ...n,
    children: c("path", {
      d: "M512 81.408a422.4 422.4 0 1 0 422.4 422.4A422.4 422.4 0 0 0 512 81.408zm26.624 629.76a45.056 45.056 0 0 1-31.232 12.288 42.496 42.496 0 0 1-31.232-12.8 41.984 41.984 0 0 1-12.8-30.72 39.424 39.424 0 0 1 12.8-30.72 42.496 42.496 0 0 1 31.232-12.288 43.008 43.008 0 0 1 31.744 12.288 39.424 39.424 0 0 1 12.8 30.72 43.008 43.008 0 0 1-13.312 31.744zm87.04-235.52a617.472 617.472 0 0 1-51.2 47.104 93.184 93.184 0 0 0-25.088 31.232 80.896 80.896 0 0 0-9.728 39.936v10.24h-64v-10.24a119.808 119.808 0 0 1 12.288-57.344A311.296 311.296 0 0 1 555.52 460.8l10.24-11.264a71.168 71.168 0 0 0 16.896-44.032A69.632 69.632 0 0 0 563.2 358.4a69.632 69.632 0 0 0-51.2-17.92 67.072 67.072 0 0 0-58.88 26.112 102.4 102.4 0 0 0-16.384 61.44h-61.44a140.288 140.288 0 0 1 37.888-102.4 140.8 140.8 0 0 1 104.96-38.4 135.68 135.68 0 0 1 96.256 29.184 108.032 108.032 0 0 1 36.352 86.528 116.736 116.736 0 0 1-25.088 73.216z",
      fill: a
    })
  });
}
const Ke = K.Item;
var gi = {
  name: "1m24gx0",
  styles: "width:90%;margin-right:5px"
}, bi = {
  name: "14t521x",
  styles: "margin-bottom:8px;& > *{margin-right:4px;}"
};
function at() {
  const [e] = K.useForm(), {
    t: a
  } = Pe(), {
    configInfo: n
  } = $t(), [t, r] = i.useState({}), [o, s] = i.useState(!1), [l, u] = i.useState(0), [g, v] = i.useState(je.get), [m, I] = i.useState("");
  i.useEffect(() => {
    e.setFieldValue("headers", Object.assign({}, e.getFieldValue("headers") || {}, {
      Authorization: n == null ? void 0 : n.authorization
    })), u((d) => d + 1);
  }, [n == null ? void 0 : n.authorization]);
  const S = [{
    key: "0",
    label: a("postman.headers"),
    children: c(Ke, {
      name: "headers",
      children: c(ri, {})
    })
  }, {
    key: "1",
    label: a("postman.query"),
    children: E("div", {
      children: [c(Ke, {
        name: "params",
        style: {
          marginBottom: 6
        },
        children: c(li, {})
      }), c(Ea, {
        position: "Params",
        form: e
      })]
    })
  }, {
    key: "2",
    label: E("div", {
      style: {
        display: "flex",
        alignItems: "center"
      },
      children: [a("postman.body"), " ", c(en, {
        title: a("postman.bodyTitleTip"),
        overlayInnerStyle: {
          width: 260
        },
        children: c(ui, {})
      })]
    }),
    children: E("div", {
      children: [c(Ke, {
        name: "data",
        style: {
          marginBottom: 6
        },
        children: c(oi, {})
      }), c(Ea, {
        position: "Data",
        form: e
      })]
    })
  }], p = i.useMemo(() => Qe(je, (d) => ({
    label: dn(d),
    value: d
  })), []), A = () => c(ea, {
    style: {
      width: 96
    },
    options: p,
    defaultValue: je.get,
    onSelect: v
  });
  async function R(d) {
    s(!0);
    const h = await Nt(d).finally(() => s(!1));
    (h == null ? void 0 : h.status) >= 200 && (h == null ? void 0 : h.status) < 300 && r(h), s(!1);
  }
  const f = i.useMemo(() => {
    const d = e.getFieldsValue();
    if (d.customParamsTimes) {
      const h = wa(d.customParamsTimes);
      d.params = {
        ...d.params || {},
        ...h || {}
      }, delete d.customParamsTimes;
    }
    if (d.customDataTimes) {
      const h = wa(d.customDataTimes);
      d.data = {
        ...d.data || {},
        ...h || {}
      }, delete d.customDataTimes;
    }
    if (d.customDataFiles) {
      const h = di(d.customDataFiles);
      d.data = {
        ...d.data || {},
        ...h || {}
      }, delete d.customDataFiles;
    }
    return si(Object.assign({
      method: g,
      url: m
    }, d));
  }, [g, m, e.getFieldsValue()]);
  return E("div", {
    style: {
      display: "flex"
    },
    children: [E("div", {
      style: {
        width: "50%"
      },
      children: [E("div", {
        style: {
          display: "flex",
          marginBottom: 10
        },
        children: [c(qe, {
          css: gi,
          addonBefore: c(A, {}),
          placeholder: a("postman.urlPlaceholder"),
          defaultValue: m,
          onChange: (d) => {
            var h;
            return I((h = d.target.value) == null ? void 0 : h.trim());
          }
        }), c(Ge, {
          type: "primary",
          disabled: o,
          onClick: () => {
            Oa.test(m) ? e.submit() : an.warning(a("postman.validUrlTip"));
          },
          children: a("postman.send")
        })]
      }), c("div", {
        children: c(K, {
          form: e,
          name: "postman-request-control-form",
          initialValues: {
            headers: n != null && n.authorization ? {
              Authorization: n == null ? void 0 : n.authorization
            } : null,
            params: null,
            customParamsTimes: null,
            data: null,
            customDataTimes: null,
            customDataFiles: null
          },
          onValuesChange: () => {
            u(l + 1);
          },
          onFinish: () => {
            R(f);
          },
          children: c(qa, {
            defaultActiveKey: "1",
            items: S
          })
        })
      })]
    }), E("div", {
      style: {
        width: "50%",
        fontSize: pe.fontSize.xxs,
        paddingLeft: 10
      },
      children: [c("div", {
        style: {
          marginBottom: 8
        },
        children: c(ln, {
          request: f
        })
      }), c("div", {
        css: bi,
        children: c(on, {
          content: c(sn, {
            request: Object.assign({}, f, {
              url: m
            })
          }),
          trigger: "click",
          children: c(Ge, {
            size: "small",
            style: {
              fontSize: pe.fontSize.xxs
            },
            children: a("openapi.cURL")
          })
        })
      }), !Ha(t) && c(cn, {
        ...t
      })]
    })]
  });
}
var Te = { TERM_PROGRAM: "vscode", NODE: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NVM_CD_FLAGS: "-q", INIT_CWD: "/Users/alexander/my-code/github/openapi-ui", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_global_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", TERM_PROGRAM_VERSION: "1.88.0", GVM_ROOT: "/Users/alexander/.gvm", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", ZDOTDIR: "/Users/alexander", COLOR: "1", npm_config_noproxy: "", ZSH: "/Users/alexander/.oh-my-zsh", PNPM_HOME: "/Users/alexander/Library/pnpm", npm_config_local_prefix: "/Users/alexander/my-code/github/openapi-ui", USER: "alexander", NVM_DIR: "/Users/alexander/.nvm", LD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/alexander/.nvm/versions/node/v16.10.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.jaFD8W3kId/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x19:0x34", npm_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/bin/npm-cli.js", PAGER: "less", LSCOLORS: "Gxfxcxdxbxegedabagacad", PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.bin:/Users/alexander/my-code/github/node_modules/.bin:/Users/alexander/my-code/node_modules/.bin:/Users/alexander/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", npm_package_json: "/Users/alexander/my-code/github/openapi-ui/package.json", __CFBundleIdentifier: "com.microsoft.VSCode", USER_ZDOTDIR: "/Users/alexander", npm_config_auto_install_peers: "true", npm_config_init_module: "/Users/alexander/.npm-init.js", npm_config_userconfig: "/Users/alexander/.npmrc", PWD: "/Users/alexander/my-code/github/openapi-ui", GVM_VERSION: "1.0.22", npm_command: "run-script", EDITOR: "vi", npm_lifecycle_event: "build:package", LANG: "zh_CN.UTF-8", npm_package_name: "openapi-ui-dist", gvm_pkgset_name: "global", NODE_PATH: "/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/bin/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules/vite/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.21/node_modules:/Users/alexander/my-code/github/openapi-ui/node_modules/.pnpm/node_modules", XPC_FLAGS: "0x0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", npm_package_engines_node: "^18.0.0 || >=20.0.0", npm_config_node_gyp: "/Users/alexander/.nvm/versions/node/v16.10.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", XPC_SERVICE_NAME: "0", npm_package_version: "2.0.0", VSCODE_INJECTION: "1", HOME: "/Users/alexander", SHLVL: "2", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", GOROOT: "/Users/alexander/.gvm/gos/go1.20", DYLD_LIBRARY_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib:", gvm_go_name: "go1.20", LOGNAME: "alexander", LESS: "-R", npm_config_cache: "/Users/alexander/.npm", GVM_OVERLAY_PREFIX: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay", npm_lifecycle_script: "tsc && vite build --config vite.package.config.ts --mode package", LC_CTYPE: "zh_CN.UTF-8", VSCODE_GIT_IPC_HANDLE: "/var/folders/7b/f28gh86d083_xqj9p9hs97k80000gn/T/vscode-git-14571c2f30.sock", NVM_BIN: "/Users/alexander/.nvm/versions/node/v16.10.0/bin", PKG_CONFIG_PATH: "/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/lib/pkgconfig:", GOPATH: "/Users/alexander/mygo", npm_config_user_agent: "npm/7.24.0 node/v16.10.0 darwin x64 workspaces/false", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GVM_PATH_BACKUP: "/Users/alexander/.gvm/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.gvm/bin:/Users/alexander/mygo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/opt/ruby/bin:/Users/alexander/Library/pnpm:/Users/alexander/.yarn/bin:/Users/alexander/.config/yarn/global/node_modules/.bin:/Users/alexander/.gvm/pkgsets/go1.20/global/bin:/Users/alexander/.gvm/gos/go1.20/bin:/Users/alexander/.gvm/pkgsets/go1.20/global/overlay/bin:/Users/alexander/.gvm/bin:/Users/alexander/.nvm/versions/node/v16.10.0/bin:/Users/alexander/.cargo/bin:/usr/local/mysql/bin:/Users/alexander/.gem/ruby/3.2.0/bin", COLORTERM: "truecolor", npm_config_prefix: "/Users/alexander/.nvm/versions/node/v16.10.0", npm_node_execpath: "/Users/alexander/.nvm/versions/node/v16.10.0/bin/node", NODE_ENV: "production" };
const La = [{
  key: "0",
  label: `${Ie.t("postman.request")} 1`,
  children: c(at, {}),
  closable: !1
}];
function hi() {
  const {
    t: e
  } = Pe(), [a, n] = i.useState(document.documentElement.clientHeight), t = a - Da, r = kt().env === Pt.zh, [o, s] = i.useState(La[0].key), [l, u] = i.useState(La), g = i.useRef(0), v = Ft(() => {
    n(globalThis.document.documentElement.clientHeight);
  }, 1200, {
    leading: !0,
    trailing: !0
  });
  i.useEffect(() => (globalThis.addEventListener("resize", v), () => {
    globalThis.removeEventListener("resize", v);
  }), [v]);
  const m = () => {
    const p = `${++g.current}`, A = [...l];
    A.push({
      key: p,
      label: `${e("postman.request")} ${g.current + 1}`,
      children: c(at, {}),
      closable: !0
    }), u(A), s(p);
  }, I = (p) => {
    let A = o, R = -1;
    l.forEach((d, h) => {
      d.key === p && (R = h - 1);
    });
    const f = l.filter((d) => d.key !== p);
    f.length && A === p && (R >= 0 ? A = f[R].key : A = f[0].key), u(f), s(A);
  }, S = (p, A) => {
    A === "add" ? m() : I(p);
  };
  return E("div", {
    children: [c(ti, {}), E("div", {
      css: [{
        height: t,
        overflow: "auto",
        padding: 12,
        backgroundColor: pe.color.bgGray,
        borderRadius: "10px 10px 0",
        boxSizing: "border-box"
      }, r ? {
        paddingBottom: 0
      } : {}, Te.NODE_ENV === "production" ? "" : ";label:Postman;", Te.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvcG9zdG1hbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdRIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvcG9zdG1hbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJzIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBQb3N0bWFuSGVhZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWQvUG9zdG1hbkhlYWRcIjtcbmltcG9ydCB7IElDUFJlZ2lzdHJhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ljcC1yZWdpc3RyYXRpb25cIjtcbmltcG9ydCB7IEVudiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCIuLi9jb3JlL2h0dHAvY29uZmlnXCI7XG5pbXBvcnQgeyBkc2MgfSBmcm9tIFwiLi4vY29yZS9zdHlsZS9kZWZhdWx0U3R5bGVDb25maWdcIjtcbmltcG9ydCBpMThuIGZyb20gXCIuLi9pMThuXCI7XG5pbXBvcnQgeyBkZWZhdWx0TWVudVRpdGxlSGVpZ2h0IH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IFJlcXVlc3RCdWlsZGVyIH0gZnJvbSBcIi4vUmVxdWVzdEJ1aWxkZXJcIjtcblxudHlwZSBUYXJnZXRLZXkgPSBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudCB8IHN0cmluZztcblxuY29uc3QgaW5pdGlhbEl0ZW1zID0gW1xuICB7XG4gICAga2V5OiBcIjBcIixcbiAgICBsYWJlbDogYCR7aTE4bi50KFwicG9zdG1hbi5yZXF1ZXN0XCIpfSAxYCxcbiAgICBjaGlsZHJlbjogPFJlcXVlc3RCdWlsZGVyIC8+LFxuICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RtYW4oKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW21lbnVIZWlnaHQsIHNldE1lbnVIZWlnaHRdID0gdXNlU3RhdGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIGNvbnN0IGRlZmF1bHRDb250ZW50SGVpZ2h0ID0gbWVudUhlaWdodCAtIGRlZmF1bHRNZW51VGl0bGVIZWlnaHQ7XG4gIGNvbnN0IGlzWmggPSBnZXRDb25maWcoKS5lbnYgPT09IEVudi56aDtcbiAgY29uc3QgW2FjdGl2ZUtleSwgc2V0QWN0aXZlS2V5XSA9IHVzZVN0YXRlKGluaXRpYWxJdGVtc1swXS5rZXkpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGluaXRpYWxJdGVtcyk7XG4gIGNvbnN0IG5ld1RhYkluZGV4ID0gdXNlUmVmKDApO1xuXG4gIGNvbnN0IHRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSB0aHJvdHRsZShcbiAgICAoKSA9PiB7XG4gICAgICBzZXRNZW51SGVpZ2h0KGdsb2JhbFRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgfSxcbiAgICAxMjAwLFxuICAgIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkUmVzaXplSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3Rocm90dGxlZFJlc2l6ZUhhbmRsZXJdKTtcblxuICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aXZlS2V5ID0gYCR7KytuZXdUYWJJbmRleC5jdXJyZW50fWA7XG4gICAgY29uc3QgbmV3UGFuZXMgPSBbLi4uaXRlbXNdO1xuICAgIG5ld1BhbmVzLnB1c2goe1xuICAgICAga2V5OiBuZXdBY3RpdmVLZXksXG4gICAgICBsYWJlbDogYCR7dChcInBvc3RtYW4ucmVxdWVzdFwiKX0gJHtuZXdUYWJJbmRleC5jdXJyZW50ICsgMX1gLFxuICAgICAgY2hpbGRyZW46IDxSZXF1ZXN0QnVpbGRlciAvPixcbiAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIHNldEl0ZW1zKG5ld1BhbmVzKTtcbiAgICBzZXRBY3RpdmVLZXkobmV3QWN0aXZlS2V5KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAodGFyZ2V0S2V5OiBUYXJnZXRLZXkpID0+IHtcbiAgICBsZXQgbmV3QWN0aXZlS2V5ID0gYWN0aXZlS2V5O1xuICAgIGxldCBsYXN0SW5kZXggPSAtMTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGlmIChpdGVtLmtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICAgIGxhc3RJbmRleCA9IGkgLSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5ld1BhbmVzID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSAhPT0gdGFyZ2V0S2V5KTtcblxuICAgIGlmIChuZXdQYW5lcy5sZW5ndGggJiYgbmV3QWN0aXZlS2V5ID09PSB0YXJnZXRLZXkpIHtcbiAgICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgICBuZXdBY3RpdmVLZXkgPSBuZXdQYW5lc1tsYXN0SW5kZXhdLmtleTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0FjdGl2ZUtleSA9IG5ld1BhbmVzWzBdLmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJdGVtcyhuZXdQYW5lcyk7XG4gICAgc2V0QWN0aXZlS2V5KG5ld0FjdGl2ZUtleSk7XG4gIH07XG5cbiAgY29uc3Qgb25FZGl0ID0gKHRhcmdldEtleTogVGFyZ2V0S2V5LCBhY3Rpb246IFwiYWRkXCIgfCBcInJlbW92ZVwiKSA9PiB7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgYWRkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSh0YXJnZXRLZXkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UG9zdG1hbkhlYWQgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0Q29udGVudEhlaWdodCxcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmdHcmF5LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHggMTBweCAwXCIsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNaaCA/IHsgcGFkZGluZ0JvdHRvbTogMCB9IDoge30sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHsgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmcsIHBhZGRpbmc6IDEwLCBib3JkZXJSYWRpdXM6IDggfSxcbiAgICAgICAgICAgIGlzWmggPyB7IG1pbkhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQgLSAzMiAtIDEyIH0gOiB7fSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIHR5cGU9XCJlZGl0YWJsZS1jYXJkXCJcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICBhY3RpdmVLZXk9e2FjdGl2ZUtleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdBY3RpdmVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUtleShuZXdBY3RpdmVLZXkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkVkaXQ9e29uRWRpdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNaaCAmJiA8SUNQUmVnaXN0cmF0aW9uIC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */"],
      children: [c("div", {
        css: [{
          backgroundColor: pe.color.bg,
          padding: 10,
          borderRadius: 8
        }, r ? {
          minHeight: t - 32 - 12
        } : {}, Te.NODE_ENV === "production" ? "" : ";label:Postman;", Te.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvcG9zdG1hbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEdVIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kZXIvbXktY29kZS9naXRodWIvb3BlbmFwaS11aS9zcmMvcG9zdG1hbi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJzIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBQb3N0bWFuSGVhZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWQvUG9zdG1hbkhlYWRcIjtcbmltcG9ydCB7IElDUFJlZ2lzdHJhdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ljcC1yZWdpc3RyYXRpb25cIjtcbmltcG9ydCB7IEVudiB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCIuLi9jb3JlL2h0dHAvY29uZmlnXCI7XG5pbXBvcnQgeyBkc2MgfSBmcm9tIFwiLi4vY29yZS9zdHlsZS9kZWZhdWx0U3R5bGVDb25maWdcIjtcbmltcG9ydCBpMThuIGZyb20gXCIuLi9pMThuXCI7XG5pbXBvcnQgeyBkZWZhdWx0TWVudVRpdGxlSGVpZ2h0IH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IFJlcXVlc3RCdWlsZGVyIH0gZnJvbSBcIi4vUmVxdWVzdEJ1aWxkZXJcIjtcblxudHlwZSBUYXJnZXRLZXkgPSBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudCB8IHN0cmluZztcblxuY29uc3QgaW5pdGlhbEl0ZW1zID0gW1xuICB7XG4gICAga2V5OiBcIjBcIixcbiAgICBsYWJlbDogYCR7aTE4bi50KFwicG9zdG1hbi5yZXF1ZXN0XCIpfSAxYCxcbiAgICBjaGlsZHJlbjogPFJlcXVlc3RCdWlsZGVyIC8+LFxuICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RtYW4oKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW21lbnVIZWlnaHQsIHNldE1lbnVIZWlnaHRdID0gdXNlU3RhdGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIGNvbnN0IGRlZmF1bHRDb250ZW50SGVpZ2h0ID0gbWVudUhlaWdodCAtIGRlZmF1bHRNZW51VGl0bGVIZWlnaHQ7XG4gIGNvbnN0IGlzWmggPSBnZXRDb25maWcoKS5lbnYgPT09IEVudi56aDtcbiAgY29uc3QgW2FjdGl2ZUtleSwgc2V0QWN0aXZlS2V5XSA9IHVzZVN0YXRlKGluaXRpYWxJdGVtc1swXS5rZXkpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGluaXRpYWxJdGVtcyk7XG4gIGNvbnN0IG5ld1RhYkluZGV4ID0gdXNlUmVmKDApO1xuXG4gIGNvbnN0IHRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSB0aHJvdHRsZShcbiAgICAoKSA9PiB7XG4gICAgICBzZXRNZW51SGVpZ2h0KGdsb2JhbFRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgfSxcbiAgICAxMjAwLFxuICAgIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSxcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRSZXNpemVIYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkUmVzaXplSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3Rocm90dGxlZFJlc2l6ZUhhbmRsZXJdKTtcblxuICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aXZlS2V5ID0gYCR7KytuZXdUYWJJbmRleC5jdXJyZW50fWA7XG4gICAgY29uc3QgbmV3UGFuZXMgPSBbLi4uaXRlbXNdO1xuICAgIG5ld1BhbmVzLnB1c2goe1xuICAgICAga2V5OiBuZXdBY3RpdmVLZXksXG4gICAgICBsYWJlbDogYCR7dChcInBvc3RtYW4ucmVxdWVzdFwiKX0gJHtuZXdUYWJJbmRleC5jdXJyZW50ICsgMX1gLFxuICAgICAgY2hpbGRyZW46IDxSZXF1ZXN0QnVpbGRlciAvPixcbiAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIHNldEl0ZW1zKG5ld1BhbmVzKTtcbiAgICBzZXRBY3RpdmVLZXkobmV3QWN0aXZlS2V5KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAodGFyZ2V0S2V5OiBUYXJnZXRLZXkpID0+IHtcbiAgICBsZXQgbmV3QWN0aXZlS2V5ID0gYWN0aXZlS2V5O1xuICAgIGxldCBsYXN0SW5kZXggPSAtMTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGlmIChpdGVtLmtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICAgIGxhc3RJbmRleCA9IGkgLSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5ld1BhbmVzID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSAhPT0gdGFyZ2V0S2V5KTtcblxuICAgIGlmIChuZXdQYW5lcy5sZW5ndGggJiYgbmV3QWN0aXZlS2V5ID09PSB0YXJnZXRLZXkpIHtcbiAgICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgICBuZXdBY3RpdmVLZXkgPSBuZXdQYW5lc1tsYXN0SW5kZXhdLmtleTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0FjdGl2ZUtleSA9IG5ld1BhbmVzWzBdLmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJdGVtcyhuZXdQYW5lcyk7XG4gICAgc2V0QWN0aXZlS2V5KG5ld0FjdGl2ZUtleSk7XG4gIH07XG5cbiAgY29uc3Qgb25FZGl0ID0gKHRhcmdldEtleTogVGFyZ2V0S2V5LCBhY3Rpb246IFwiYWRkXCIgfCBcInJlbW92ZVwiKSA9PiB7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgYWRkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSh0YXJnZXRLZXkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UG9zdG1hbkhlYWQgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0Q29udGVudEhlaWdodCxcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgIHBhZGRpbmc6IDEyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmdHcmF5LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHggMTBweCAwXCIsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNaaCA/IHsgcGFkZGluZ0JvdHRvbTogMCB9IDoge30sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHsgYmFja2dyb3VuZENvbG9yOiBkc2MuY29sb3IuYmcsIHBhZGRpbmc6IDEwLCBib3JkZXJSYWRpdXM6IDggfSxcbiAgICAgICAgICAgIGlzWmggPyB7IG1pbkhlaWdodDogZGVmYXVsdENvbnRlbnRIZWlnaHQgLSAzMiAtIDEyIH0gOiB7fSxcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIHR5cGU9XCJlZGl0YWJsZS1jYXJkXCJcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICBhY3RpdmVLZXk9e2FjdGl2ZUtleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdBY3RpdmVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUtleShuZXdBY3RpdmVLZXkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkVkaXQ9e29uRWRpdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNaaCAmJiA8SUNQUmVnaXN0cmF0aW9uIC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */"],
        children: c("div", {
          children: c(qa, {
            type: "editable-card",
            items: l,
            activeKey: o,
            onChange: (p) => {
              s(p);
            },
            onEdit: S
          })
        })
      }), r && c(jt, {})]
    })]
  });
}
export {
  hi as default
};
