import { d as l, A as ge, _ as oe, s as Pt, aR as Dt, x as me, t as Le, G as nt, z as X, bx as Ne, N as ot, O as at, Q as it, P as K, by as Me, T as Se, ad as Ft, aU as jt, V as Rt, bz as Lt, a8 as Nt, a9 as st, aa as lt, ab as ct, y as H, bA as Z, D as pe, ac as dt, W as ke, aN as kt, bB as Tt, bC as We, al as ut, R as pt, bD as Mt, bE as He, H as ft, ao as At, bF as Ut, af as Xe, aV as qe, B as Ve, aX as zt, J as _t, aS as Bt, bG as Wt, ae as Ge } from "./index-0DiK2-ze.js";
import { T as mt, l as Ht, Y as Xt } from "./util-DbfKY0tm.js";
var qt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const Vt = qt;
var Gt = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: Vt
  }));
}, Kt = /* @__PURE__ */ l.forwardRef(Gt);
const Jt = Kt;
function Yt() {
  const [, e] = l.useReducer((t) => t + 1, 0);
  return e;
}
var Qt = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1,
  gapPosition: "bottom"
}, Zt = function() {
  var t = l.useRef([]), r = l.useRef(null);
  return l.useEffect(function() {
    var n = Date.now(), i = !1;
    t.current.forEach(function(a) {
      if (a) {
        i = !0;
        var s = a.style;
        s.transitionDuration = ".3s, .3s, .3s, .06s", r.current && n - r.current < 100 && (s.transitionDuration = "0s, 0s");
      }
    }), i && (r.current = Date.now());
  }), t.current;
}, Ke = 0, er = Dt();
function tr() {
  var e;
  return er ? (e = Ke, Ke += 1) : e = "TEST_OR_SSR", e;
}
const rr = function(e) {
  var t = l.useState(), r = Pt(t, 2), n = r[0], i = r[1];
  return l.useEffect(function() {
    i("rc_progress_".concat(tr()));
  }, []), e || n;
};
var Je = function(t) {
  var r = t.bg, n = t.children;
  return /* @__PURE__ */ l.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: r
    }
  }, n);
};
function Ye(e, t) {
  return Object.keys(e).map(function(r) {
    var n = parseFloat(r), i = "".concat(Math.floor(n * t), "%");
    return "".concat(e[r], " ").concat(i);
  });
}
var nr = /* @__PURE__ */ l.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.color, i = e.gradientId, a = e.radius, s = e.style, o = e.ptg, d = e.strokeLinecap, c = e.strokeWidth, u = e.size, p = e.gapDegree, f = n && me(n) === "object", $ = f ? "#FFF" : void 0, b = u / 2, w = /* @__PURE__ */ l.createElement("circle", {
    className: "".concat(r, "-circle-path"),
    r: a,
    cx: b,
    cy: b,
    stroke: $,
    strokeLinecap: d,
    strokeWidth: c,
    opacity: o === 0 ? 0 : 1,
    style: s,
    ref: t
  });
  if (!f)
    return w;
  var y = "".concat(i, "-conic"), E = p ? "".concat(180 + p / 2, "deg") : "0deg", S = Ye(n, (360 - p) / 360), O = Ye(n, 1), h = "conic-gradient(from ".concat(E, ", ").concat(S.join(", "), ")"), m = "linear-gradient(to ".concat(p ? "bottom" : "top", ", ").concat(O.join(", "), ")");
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("mask", {
    id: y
  }, w), /* @__PURE__ */ l.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: u,
    height: u,
    mask: "url(#".concat(y, ")")
  }, /* @__PURE__ */ l.createElement(Je, {
    bg: m
  }, /* @__PURE__ */ l.createElement(Je, {
    bg: h
  }))));
}), ve = 100, Pe = function(t, r, n, i, a, s, o, d, c, u) {
  var p = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, f = n / 100 * 360 * ((360 - s) / 360), $ = s === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[o], b = (100 - i) / 100 * r;
  c === "round" && i !== 100 && (b += u / 2, b >= r && (b = r - 0.01));
  var w = ve / 2;
  return {
    stroke: typeof d == "string" ? d : void 0,
    strokeDasharray: "".concat(r, "px ").concat(t),
    strokeDashoffset: b + p,
    transform: "rotate(".concat(a + f + $, "deg)"),
    transformOrigin: "".concat(w, "px ").concat(w, "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
}, or = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
function Qe(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var ar = function(t) {
  var r = Le(Le({}, Qt), t), n = r.id, i = r.prefixCls, a = r.steps, s = r.strokeWidth, o = r.trailWidth, d = r.gapDegree, c = d === void 0 ? 0 : d, u = r.gapPosition, p = r.trailColor, f = r.strokeLinecap, $ = r.style, b = r.className, w = r.strokeColor, y = r.percent, E = nt(r, or), S = ve / 2, O = rr(n), h = "".concat(O, "-gradient"), m = S - s / 2, P = Math.PI * 2 * m, D = c > 0 ? 90 + c / 2 : -90, A = P * ((360 - c) / 360), q = me(a) === "object" ? a : {
    count: a,
    gap: 2
  }, j = q.count, V = q.gap, ee = Qe(y), U = Qe(w), R = U.find(function(B) {
    return B && me(B) === "object";
  }), _ = R && me(R) === "object", k = _ ? "butt" : f, L = Pe(P, A, 0, 100, D, c, u, p, k, s), ae = Zt(), ie = function() {
    var J = 0;
    return ee.map(function(g, I) {
      var W = U[I] || U[U.length - 1], T = Pe(P, A, J, g, D, c, u, W, k, s);
      return J += g, /* @__PURE__ */ l.createElement(nr, {
        key: I,
        color: W,
        ptg: g,
        radius: m,
        prefixCls: i,
        gradientId: h,
        style: T,
        strokeLinecap: k,
        strokeWidth: s,
        gapDegree: c,
        ref: function(re) {
          ae[I] = re;
        },
        size: ve
      });
    }).reverse();
  }, ce = function() {
    var J = Math.round(j * (ee[0] / 100)), g = 100 / j, I = 0;
    return new Array(j).fill(null).map(function(W, T) {
      var Y = T <= J - 1 ? U[0] : p, re = Y && me(Y) === "object" ? "url(#".concat(h, ")") : void 0, Q = Pe(P, A, I, g, D, c, u, Y, "butt", s, V);
      return I += (A - Q.strokeDashoffset + V) * 100 / A, /* @__PURE__ */ l.createElement("circle", {
        key: T,
        className: "".concat(i, "-circle-path"),
        r: m,
        cx: S,
        cy: S,
        stroke: re,
        strokeWidth: s,
        opacity: 1,
        style: Q,
        ref: function(te) {
          ae[T] = te;
        }
      });
    });
  };
  return /* @__PURE__ */ l.createElement("svg", oe({
    className: X("".concat(i, "-circle"), b),
    viewBox: "0 0 ".concat(ve, " ").concat(ve),
    style: $,
    id: n,
    role: "presentation"
  }, E), !j && /* @__PURE__ */ l.createElement("circle", {
    className: "".concat(i, "-circle-trail"),
    r: m,
    cx: S,
    cy: S,
    stroke: p,
    strokeLinecap: k,
    strokeWidth: o || s,
    style: L
  }), j ? ce() : ie());
};
function le(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function we(e) {
  let {
    success: t,
    successPercent: r
  } = e, n = r;
  return t && "progress" in t && (n = t.progress), t && "percent" in t && (n = t.percent), n;
}
const ir = (e) => {
  let {
    percent: t,
    success: r,
    successPercent: n
  } = e;
  const i = le(we({
    success: r,
    successPercent: n
  }));
  return [i, le(le(t) - i)];
}, sr = (e) => {
  let {
    success: t = {},
    strokeColor: r
  } = e;
  const {
    strokeColor: n
  } = t;
  return [n || Ne.green, r || null];
}, Ee = (e, t, r) => {
  var n, i, a, s;
  let o = -1, d = -1;
  if (t === "step") {
    const c = r.steps, u = r.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (o = e === "small" ? 2 : 14, d = u ?? 8) : typeof e == "number" ? [o, d] = [e, e] : [o = 14, d = 8] = e, o *= c;
  } else if (t === "line") {
    const c = r == null ? void 0 : r.strokeWidth;
    typeof e == "string" || typeof e > "u" ? d = c || (e === "small" ? 6 : 8) : typeof e == "number" ? [o, d] = [e, e] : [o = -1, d = 8] = e;
  } else
    (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [o, d] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [o, d] = [e, e] : (o = (i = (n = e[0]) !== null && n !== void 0 ? n : e[1]) !== null && i !== void 0 ? i : 120, d = (s = (a = e[0]) !== null && a !== void 0 ? a : e[1]) !== null && s !== void 0 ? s : 120));
  return [o, d];
}, lr = 3, cr = (e) => lr / e * 100, dr = (e) => {
  const {
    prefixCls: t,
    trailColor: r = null,
    strokeLinecap: n = "round",
    gapPosition: i,
    gapDegree: a,
    width: s = 120,
    type: o,
    children: d,
    success: c,
    size: u = s,
    steps: p
  } = e, [f, $] = Ee(u, "circle");
  let {
    strokeWidth: b
  } = e;
  b === void 0 && (b = Math.max(cr(f), 6));
  const w = {
    width: f,
    height: $,
    fontSize: f * 0.15 + 6
  }, y = l.useMemo(() => {
    if (a || a === 0)
      return a;
    if (o === "dashboard")
      return 75;
  }, [a, o]), E = ir(e), S = i || o === "dashboard" && "bottom" || void 0, O = Object.prototype.toString.call(e.strokeColor) === "[object Object]", h = sr({
    success: c,
    strokeColor: e.strokeColor
  }), m = X(`${t}-inner`, {
    [`${t}-circle-gradient`]: O
  }), P = /* @__PURE__ */ l.createElement(ar, {
    steps: p,
    percent: p ? E[1] : E,
    strokeWidth: b,
    trailWidth: b,
    strokeColor: p ? h[1] : h,
    strokeLinecap: n,
    trailColor: r,
    prefixCls: t,
    gapDegree: y,
    gapPosition: S
  });
  return /* @__PURE__ */ l.createElement("div", {
    className: m,
    style: w
  }, f <= 20 ? /* @__PURE__ */ l.createElement(mt, {
    title: d
  }, /* @__PURE__ */ l.createElement("span", null, P)) : /* @__PURE__ */ l.createElement(l.Fragment, null, P, d));
}, ur = dr, Ce = "--progress-line-stroke-color", gt = "--progress-percent", Ze = (e) => {
  const t = e ? "100%" : "-100%";
  return new Me(`antProgress${e ? "RTL" : "LTR"}Active`, {
    "0%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.1
    },
    "20%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: "translateX(0) scaleX(1)",
      opacity: 0
    }
  });
}, pr = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, it(e)), {
      display: "inline-block",
      "&-rtl": {
        direction: "rtl"
      },
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: e.fontSize
      },
      [`${t}-outer`]: {
        display: "inline-block",
        width: "100%"
      },
      [`&${t}-show-info`]: {
        [`${t}-outer`]: {
          marginInlineEnd: `calc(-2em - ${K(e.marginXS)})`,
          paddingInlineEnd: `calc(2em + ${K(e.paddingXS)})`
        }
      },
      [`${t}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: e.remainingColor,
        borderRadius: e.lineBorderRadius
      },
      [`${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.defaultColor
        }
      },
      [`${t}-success-bg, ${t}-bg`]: {
        position: "relative",
        background: e.defaultColor,
        borderRadius: e.lineBorderRadius,
        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
      },
      [`${t}-bg`]: {
        overflow: "hidden",
        "&::after": {
          content: '""',
          background: {
            _multi_value_: !0,
            value: ["inherit", `var(${Ce})`]
          },
          height: "100%",
          width: `calc(1 / var(${gt}) * 100%)`,
          display: "block"
        }
      },
      [`${t}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: e.colorSuccess
      },
      [`${t}-text`]: {
        display: "inline-block",
        width: "2em",
        marginInlineStart: e.marginXS,
        color: e.colorText,
        lineHeight: 1,
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [r]: {
          fontSize: e.fontSize
        }
      },
      [`&${t}-status-active`]: {
        [`${t}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: e.colorBgContainer,
          borderRadius: e.lineBorderRadius,
          opacity: 0,
          animationName: Ze(),
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-rtl${t}-status-active`]: {
        [`${t}-bg::before`]: {
          animationName: Ze(!0)
        }
      },
      [`&${t}-status-exception`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorError
        },
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorError
        }
      },
      [`&${t}-status-success`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      },
      [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorSuccess
        }
      }
    })
  };
}, fr = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: {
      [`${t}-circle-trail`]: {
        stroke: e.remainingColor
      },
      [`&${t}-circle ${t}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${t}-circle ${t}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: e.circleTextColor,
        fontSize: e.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [r]: {
          fontSize: e.circleIconFontSize
        }
      },
      [`${t}-circle&-status-exception`]: {
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`${t}-circle&-status-success`]: {
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      }
    },
    [`${t}-inline-circle`]: {
      lineHeight: 1,
      [`${t}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
}, mr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: e.progressStepMinWidth,
          marginInlineEnd: e.progressStepMarginInlineEnd,
          backgroundColor: e.remainingColor,
          transition: `all ${e.motionDurationSlow}`,
          "&-active": {
            backgroundColor: e.defaultColor
          }
        }
      }
    }
  };
}, gr = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, hr = (e) => ({
  circleTextColor: e.colorText,
  defaultColor: e.colorInfo,
  remainingColor: e.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
}), vr = ot("Progress", (e) => {
  const t = e.calc(e.marginXXS).div(2).equal(), r = at(e, {
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [pr(r), fr(r), mr(r), gr(r)];
}, hr);
var br = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const yr = (e) => {
  let t = [];
  return Object.keys(e).forEach((r) => {
    const n = parseFloat(r.replace(/%/g, ""));
    isNaN(n) || t.push({
      key: n,
      value: e[r]
    });
  }), t = t.sort((r, n) => r.key - n.key), t.map((r) => {
    let {
      key: n,
      value: i
    } = r;
    return `${i} ${n}%`;
  }).join(", ");
}, $r = (e, t) => {
  const {
    from: r = Ne.blue,
    to: n = Ne.blue,
    direction: i = t === "rtl" ? "to left" : "to right"
  } = e, a = br(e, ["from", "to", "direction"]);
  if (Object.keys(a).length !== 0) {
    const o = yr(a), d = `linear-gradient(${i}, ${o})`;
    return {
      background: d,
      [Ce]: d
    };
  }
  const s = `linear-gradient(${i}, ${r}, ${n})`;
  return {
    background: s,
    [Ce]: s
  };
}, wr = (e) => {
  const {
    prefixCls: t,
    direction: r,
    percent: n,
    size: i,
    strokeWidth: a,
    strokeColor: s,
    strokeLinecap: o = "round",
    children: d,
    trailColor: c = null,
    success: u
  } = e, p = s && typeof s != "string" ? $r(s, r) : {
    [Ce]: s,
    background: s
  }, f = o === "square" || o === "butt" ? 0 : void 0, $ = i ?? [-1, a || (i === "small" ? 6 : 8)], [b, w] = Ee($, "line", {
    strokeWidth: a
  }), y = {
    backgroundColor: c || void 0,
    borderRadius: f
  }, E = Object.assign(Object.assign({
    width: `${le(n)}%`,
    height: w,
    borderRadius: f
  }, p), {
    [gt]: le(n) / 100
  }), S = we(e), O = {
    width: `${le(S)}%`,
    height: w,
    borderRadius: f,
    backgroundColor: u == null ? void 0 : u.strokeColor
  }, h = {
    width: b < 0 ? "100%" : b,
    height: w
  };
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", {
    className: `${t}-outer`,
    style: h
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${t}-inner`,
    style: y
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${t}-bg`,
    style: E
  }), S !== void 0 ? /* @__PURE__ */ l.createElement("div", {
    className: `${t}-success-bg`,
    style: O
  }) : null)), d);
}, Cr = wr, Sr = (e) => {
  const {
    size: t,
    steps: r,
    percent: n = 0,
    strokeWidth: i = 8,
    strokeColor: a,
    trailColor: s = null,
    prefixCls: o,
    children: d
  } = e, c = Math.round(r * (n / 100)), p = t ?? [t === "small" ? 2 : 14, i], [f, $] = Ee(p, "step", {
    steps: r,
    strokeWidth: i
  }), b = f / r, w = new Array(r);
  for (let y = 0; y < r; y++) {
    const E = Array.isArray(a) ? a[y] : a;
    w[y] = /* @__PURE__ */ l.createElement("div", {
      key: y,
      className: X(`${o}-steps-item`, {
        [`${o}-steps-item-active`]: y <= c - 1
      }),
      style: {
        backgroundColor: y <= c - 1 ? E : s,
        width: b,
        height: $
      }
    });
  }
  return /* @__PURE__ */ l.createElement("div", {
    className: `${o}-steps-outer`
  }, w, d);
}, Er = Sr;
var Or = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const xr = ["normal", "exception", "active", "success"], Ir = /* @__PURE__ */ l.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    rootClassName: i,
    steps: a,
    strokeColor: s,
    percent: o = 0,
    size: d = "default",
    showInfo: c = !0,
    type: u = "line",
    status: p,
    format: f,
    style: $
  } = e, b = Or(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style"]), w = l.useMemo(() => {
    var U, R;
    const _ = we(e);
    return parseInt(_ !== void 0 ? (U = _ ?? 0) === null || U === void 0 ? void 0 : U.toString() : (R = o ?? 0) === null || R === void 0 ? void 0 : R.toString(), 10);
  }, [o, e.success, e.successPercent]), y = l.useMemo(() => !xr.includes(p) && w >= 100 ? "success" : p || "normal", [p, w]), {
    getPrefixCls: E,
    direction: S,
    progress: O
  } = l.useContext(Se), h = E("progress", r), [m, P, D] = vr(h), A = l.useMemo(() => {
    if (!c)
      return null;
    const U = we(e);
    let R;
    const _ = f || ((L) => `${L}%`), k = u === "line";
    return f || y !== "exception" && y !== "success" ? R = _(le(o), le(U)) : y === "exception" ? R = k ? /* @__PURE__ */ l.createElement(jt, null) : /* @__PURE__ */ l.createElement(Rt, null) : y === "success" && (R = k ? /* @__PURE__ */ l.createElement(Lt, null) : /* @__PURE__ */ l.createElement(Jt, null)), /* @__PURE__ */ l.createElement("span", {
      className: `${h}-text`,
      title: typeof R == "string" ? R : void 0
    }, R);
  }, [c, o, w, y, u, h, f]), q = Array.isArray(s) ? s[0] : s, j = typeof s == "string" || Array.isArray(s) ? s : void 0;
  let V;
  u === "line" ? V = a ? /* @__PURE__ */ l.createElement(Er, Object.assign({}, e, {
    strokeColor: j,
    prefixCls: h,
    steps: typeof a == "object" ? a.count : a
  }), A) : /* @__PURE__ */ l.createElement(Cr, Object.assign({}, e, {
    strokeColor: q,
    prefixCls: h,
    direction: S
  }), A) : (u === "circle" || u === "dashboard") && (V = /* @__PURE__ */ l.createElement(ur, Object.assign({}, e, {
    strokeColor: q,
    prefixCls: h,
    progressStatus: y
  }), A));
  const ee = X(h, `${h}-status-${y}`, {
    [`${h}-${u === "dashboard" && "circle" || u}`]: u !== "line",
    [`${h}-inline-circle`]: u === "circle" && Ee(d, "circle")[0] <= 20,
    [`${h}-line`]: !a && u === "line",
    [`${h}-steps`]: a,
    [`${h}-show-info`]: c,
    [`${h}-${d}`]: typeof d == "string",
    [`${h}-rtl`]: S === "rtl"
  }, O == null ? void 0 : O.className, n, i, P, D);
  return m(/* @__PURE__ */ l.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, O == null ? void 0 : O.style), $),
    className: ee,
    role: "progressbar",
    "aria-valuenow": w
  }, Ft(b, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), V));
}), Pr = Ir;
var Dr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
const Fr = Dr;
var jr = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: Fr
  }));
}, Rr = /* @__PURE__ */ l.forwardRef(jr);
const Lr = Rr, De = function(e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(","), n = e.name || "", i = e.type || "", a = i.replace(/\/.*$/, "");
    return r.some(function(s) {
      var o = s.trim();
      if (/^\*(\/\*)?$/.test(s))
        return !0;
      if (o.charAt(0) === ".") {
        var d = n.toLowerCase(), c = o.toLowerCase(), u = [c];
        return (c === ".jpg" || c === ".jpeg") && (u = [".jpg", ".jpeg"]), u.some(function(p) {
          return d.endsWith(p);
        });
      }
      return /\/\*$/.test(o) ? a === o.replace(/\/.*$/, "") : i === o ? !0 : /^\w+$/.test(o) ? (Nt(!1, "Upload takes an invalidate 'accept' type '".concat(o, "'.Skip for check.")), !0) : !1;
    });
  }
  return !0;
};
function Nr(e, t) {
  var r = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(t.status, "'"), n = new Error(r);
  return n.status = t.status, n.method = e.method, n.url = e.action, n;
}
function et(e) {
  var t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function kr(e) {
  var t = new XMLHttpRequest();
  e.onProgress && t.upload && (t.upload.onprogress = function(a) {
    a.total > 0 && (a.percent = a.loaded / a.total * 100), e.onProgress(a);
  });
  var r = new FormData();
  e.data && Object.keys(e.data).forEach(function(i) {
    var a = e.data[i];
    if (Array.isArray(a)) {
      a.forEach(function(s) {
        r.append("".concat(i, "[]"), s);
      });
      return;
    }
    r.append(i, a);
  }), e.file instanceof Blob ? r.append(e.filename, e.file, e.file.name) : r.append(e.filename, e.file), t.onerror = function(a) {
    e.onError(a);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(Nr(e, t), et(t)) : e.onSuccess(et(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  var n = e.headers || {};
  return n["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(n).forEach(function(i) {
    n[i] !== null && t.setRequestHeader(i, n[i]);
  }), t.send(r), {
    abort: function() {
      t.abort();
    }
  };
}
function Tr(e, t) {
  var r = e.createReader(), n = [];
  function i() {
    r.readEntries(function(a) {
      var s = Array.prototype.slice.apply(a);
      n = n.concat(s);
      var o = !s.length;
      o ? t(n) : i();
    });
  }
  i();
}
var Mr = function(t, r, n) {
  var i = function a(s, o) {
    s && (s.path = o || "", s.isFile ? s.file(function(d) {
      n(d) && (s.fullPath && !d.webkitRelativePath && (Object.defineProperties(d, {
        webkitRelativePath: {
          writable: !0
        }
      }), d.webkitRelativePath = s.fullPath.replace(/^\//, ""), Object.defineProperties(d, {
        webkitRelativePath: {
          writable: !1
        }
      })), r([d]));
    }) : s.isDirectory && Tr(s, function(d) {
      d.forEach(function(c) {
        a(c, "".concat(o).concat(s.name, "/"));
      });
    }));
  };
  t.forEach(function(a) {
    i(a.webkitGetAsEntry());
  });
}, Ar = +/* @__PURE__ */ new Date(), Ur = 0;
function Fe() {
  return "rc-upload-".concat(Ar, "-").concat(++Ur);
}
var zr = ["component", "prefixCls", "className", "classNames", "disabled", "id", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "hasControlInside"], _r = /* @__PURE__ */ function(e) {
  st(r, e);
  var t = lt(r);
  function r() {
    var n;
    ct(this, r);
    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return n = t.call.apply(t, [this].concat(a)), H(Z(n), "state", {
      uid: Fe()
    }), H(Z(n), "reqs", {}), H(Z(n), "fileInput", void 0), H(Z(n), "_isMounted", void 0), H(Z(n), "onChange", function(o) {
      var d = n.props, c = d.accept, u = d.directory, p = o.target.files, f = pe(p).filter(function($) {
        return !u || De($, c);
      });
      n.uploadFiles(f), n.reset();
    }), H(Z(n), "onClick", function(o) {
      var d = n.fileInput;
      if (d) {
        var c = o.target, u = n.props.onClick;
        if (c && c.tagName === "BUTTON") {
          var p = d.parentNode;
          p.focus(), c.blur();
        }
        d.click(), u && u(o);
      }
    }), H(Z(n), "onKeyDown", function(o) {
      o.key === "Enter" && n.onClick(o);
    }), H(Z(n), "onFileDrop", function(o) {
      var d = n.props.multiple;
      if (o.preventDefault(), o.type !== "dragover")
        if (n.props.directory)
          Mr(Array.prototype.slice.call(o.dataTransfer.items), n.uploadFiles, function(u) {
            return De(u, n.props.accept);
          });
        else {
          var c = pe(o.dataTransfer.files).filter(function(u) {
            return De(u, n.props.accept);
          });
          d === !1 && (c = c.slice(0, 1)), n.uploadFiles(c);
        }
    }), H(Z(n), "uploadFiles", function(o) {
      var d = pe(o), c = d.map(function(u) {
        return u.uid = Fe(), n.processFile(u, d);
      });
      Promise.all(c).then(function(u) {
        var p = n.props.onBatchStart;
        p == null || p(u.map(function(f) {
          var $ = f.origin, b = f.parsedFile;
          return {
            file: $,
            parsedFile: b
          };
        })), u.filter(function(f) {
          return f.parsedFile !== null;
        }).forEach(function(f) {
          n.post(f);
        });
      });
    }), H(Z(n), "processFile", /* @__PURE__ */ function() {
      var o = Tt(/* @__PURE__ */ We().mark(function d(c, u) {
        var p, f, $, b, w, y, E, S, O;
        return We().wrap(function(m) {
          for (; ; )
            switch (m.prev = m.next) {
              case 0:
                if (p = n.props.beforeUpload, f = c, !p) {
                  m.next = 14;
                  break;
                }
                return m.prev = 3, m.next = 6, p(c, u);
              case 6:
                f = m.sent, m.next = 12;
                break;
              case 9:
                m.prev = 9, m.t0 = m.catch(3), f = !1;
              case 12:
                if (f !== !1) {
                  m.next = 14;
                  break;
                }
                return m.abrupt("return", {
                  origin: c,
                  parsedFile: null,
                  action: null,
                  data: null
                });
              case 14:
                if ($ = n.props.action, typeof $ != "function") {
                  m.next = 21;
                  break;
                }
                return m.next = 18, $(c);
              case 18:
                b = m.sent, m.next = 22;
                break;
              case 21:
                b = $;
              case 22:
                if (w = n.props.data, typeof w != "function") {
                  m.next = 29;
                  break;
                }
                return m.next = 26, w(c);
              case 26:
                y = m.sent, m.next = 30;
                break;
              case 29:
                y = w;
              case 30:
                return E = // string type is from legacy `transformFile`.
                // Not sure if this will work since no related test case works with it
                (me(f) === "object" || typeof f == "string") && f ? f : c, E instanceof File ? S = E : S = new File([E], c.name, {
                  type: c.type
                }), O = S, O.uid = c.uid, m.abrupt("return", {
                  origin: c,
                  data: y,
                  parsedFile: O,
                  action: b
                });
              case 35:
              case "end":
                return m.stop();
            }
        }, d, null, [[3, 9]]);
      }));
      return function(d, c) {
        return o.apply(this, arguments);
      };
    }()), H(Z(n), "saveFileInput", function(o) {
      n.fileInput = o;
    }), n;
  }
  return dt(r, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._isMounted = !1, this.abort();
    }
  }, {
    key: "post",
    value: function(i) {
      var a = this, s = i.data, o = i.origin, d = i.action, c = i.parsedFile;
      if (this._isMounted) {
        var u = this.props, p = u.onStart, f = u.customRequest, $ = u.name, b = u.headers, w = u.withCredentials, y = u.method, E = o.uid, S = f || kr, O = {
          action: d,
          filename: $,
          data: s,
          file: c,
          headers: b,
          withCredentials: w,
          method: y || "post",
          onProgress: function(m) {
            var P = a.props.onProgress;
            P == null || P(m, c);
          },
          onSuccess: function(m, P) {
            var D = a.props.onSuccess;
            D == null || D(m, c, P), delete a.reqs[E];
          },
          onError: function(m, P) {
            var D = a.props.onError;
            D == null || D(m, P, c), delete a.reqs[E];
          }
        };
        p(o), this.reqs[E] = S(O);
      }
    }
  }, {
    key: "reset",
    value: function() {
      this.setState({
        uid: Fe()
      });
    }
  }, {
    key: "abort",
    value: function(i) {
      var a = this.reqs;
      if (i) {
        var s = i.uid ? i.uid : i;
        a[s] && a[s].abort && a[s].abort(), delete a[s];
      } else
        Object.keys(a).forEach(function(o) {
          a[o] && a[o].abort && a[o].abort(), delete a[o];
        });
    }
  }, {
    key: "render",
    value: function() {
      var i, a = this.props, s = a.component, o = a.prefixCls, d = a.className, c = a.classNames, u = c === void 0 ? {} : c, p = a.disabled, f = a.id, $ = a.style, b = a.styles, w = b === void 0 ? {} : b, y = a.multiple, E = a.accept, S = a.capture, O = a.children, h = a.directory, m = a.openFileDialogOnClick, P = a.onMouseEnter, D = a.onMouseLeave, A = a.hasControlInside, q = nt(a, zr), j = X((i = {}, H(i, o, !0), H(i, "".concat(o, "-disabled"), p), H(i, d, d), i)), V = h ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {}, ee = p ? {} : {
        onClick: m ? this.onClick : function() {
        },
        onKeyDown: m ? this.onKeyDown : function() {
        },
        onMouseEnter: P,
        onMouseLeave: D,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: A ? void 0 : "0"
      };
      return /* @__PURE__ */ ke.createElement(s, oe({}, ee, {
        className: j,
        role: A ? void 0 : "button",
        style: $
      }), /* @__PURE__ */ ke.createElement("input", oe({}, kt(q, {
        aria: !0,
        data: !0
      }), {
        id: f,
        disabled: p,
        type: "file",
        ref: this.saveFileInput,
        onClick: function(R) {
          return R.stopPropagation();
        },
        key: this.state.uid,
        style: Le({
          display: "none"
        }, w.input),
        className: u.input,
        accept: E
      }, V, {
        multiple: y,
        onChange: this.onChange
      }, S != null ? {
        capture: S
      } : {})), O);
    }
  }]), r;
}(l.Component);
function je() {
}
var Te = /* @__PURE__ */ function(e) {
  st(r, e);
  var t = lt(r);
  function r() {
    var n;
    ct(this, r);
    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return n = t.call.apply(t, [this].concat(a)), H(Z(n), "uploader", void 0), H(Z(n), "saveUploader", function(o) {
      n.uploader = o;
    }), n;
  }
  return dt(r, [{
    key: "abort",
    value: function(i) {
      this.uploader.abort(i);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ ke.createElement(_r, oe({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]), r;
}(l.Component);
H(Te, "defaultProps", {
  component: "span",
  prefixCls: "rc-upload",
  data: {},
  headers: {},
  name: "file",
  multipart: !1,
  onStart: je,
  onError: je,
  onSuccess: je,
  multiple: !1,
  beforeUpload: null,
  customRequest: null,
  withCredentials: !1,
  openFileDialogOnClick: !0,
  hasControlInside: !1
});
const Br = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: e.colorFillAlter,
        border: `${K(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [t]: {
          padding: e.padding
        },
        [`${t}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: e.borderRadiusLG,
          "&:focus-visible": {
            outline: `${K(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
          }
        },
        [`${t}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: {
          borderColor: e.colorPrimaryHover
        },
        [`p${t}-drag-icon`]: {
          marginBottom: e.margin,
          [r]: {
            color: e.colorPrimary,
            fontSize: e.uploadThumbnailSize
          }
        },
        [`p${t}-text`]: {
          margin: `0 0 ${K(e.marginXXS)}`,
          color: e.colorTextHeading,
          fontSize: e.fontSizeLG
        },
        [`p${t}-hint`]: {
          color: e.colorTextDescription,
          fontSize: e.fontSize
        },
        // ===================== Disabled =====================
        [`&${t}-disabled`]: {
          [`p${t}-drag-icon ${r},
            p${t}-text,
            p${t}-hint
          `]: {
            color: e.colorTextDisabled
          }
        }
      }
    }
  };
}, Wr = (e) => {
  const {
    componentCls: t,
    antCls: r,
    iconCls: n,
    fontSize: i,
    lineHeight: a,
    calc: s
  } = e, o = `${t}-list-item`, d = `${o}-actions`, c = `${o}-action`, u = e.fontHeightSM;
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: Object.assign(Object.assign({}, ut()), {
        lineHeight: e.lineHeight,
        [o]: {
          position: "relative",
          height: s(e.lineHeight).mul(i).equal(),
          marginTop: e.marginXS,
          fontSize: i,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${o}-name`]: Object.assign(Object.assign({}, pt), {
            padding: `0 ${K(e.paddingXS)}`,
            lineHeight: a,
            flex: "auto",
            transition: `all ${e.motionDurationSlow}`
          }),
          [d]: {
            whiteSpace: "nowrap",
            [c]: {
              opacity: 0
            },
            [n]: {
              color: e.actionsColor,
              transition: `all ${e.motionDurationSlow}`
            },
            [`
              ${c}:focus-visible,
              &.picture ${c}
            `]: {
              opacity: 1
            },
            [`${c}${r}-btn`]: {
              height: u,
              border: 0,
              lineHeight: 1
            }
          },
          [`${t}-icon ${n}`]: {
            color: e.colorTextDescription,
            fontSize: i
          },
          [`${o}-progress`]: {
            position: "absolute",
            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
            width: "100%",
            paddingInlineStart: s(i).add(e.paddingXS).equal(),
            fontSize: i,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${o}:hover ${c}`]: {
          opacity: 1
        },
        [`${o}-error`]: {
          color: e.colorError,
          [`${o}-name, ${t}-icon ${n}`]: {
            color: e.colorError
          },
          [d]: {
            [`${n}, ${n}:hover`]: {
              color: e.colorError
            },
            [c]: {
              opacity: 1
            }
          }
        },
        [`${t}-list-item-container`]: {
          transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      })
    }
  };
}, tt = new Me("uploadAnimateInlineIn", {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), rt = new Me("uploadAnimateInlineOut", {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
}), Hr = (e) => {
  const {
    componentCls: t
  } = e, r = `${t}-animate-inline`;
  return [{
    [`${t}-wrapper`]: {
      [`${r}-appear, ${r}-enter, ${r}-leave`]: {
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${r}-appear, ${r}-enter`]: {
        animationName: tt
      },
      [`${r}-leave`]: {
        animationName: rt
      }
    }
  }, {
    [`${t}-wrapper`]: Mt(e)
  }, tt, rt];
}, Xr = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    uploadThumbnailSize: n,
    uploadProgressOffset: i,
    calc: a
  } = e, s = `${t}-list`, o = `${s}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`
        ${s}${s}-picture,
        ${s}${s}-picture-card,
        ${s}${s}-picture-circle
      `]: {
        [o]: {
          position: "relative",
          height: a(n).add(a(e.lineWidth).mul(2)).add(a(e.paddingXS).mul(2)).equal(),
          padding: e.paddingXS,
          border: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${o}-thumbnail`]: Object.assign(Object.assign({}, pt), {
            width: n,
            height: n,
            lineHeight: K(a(n).add(e.paddingSM).equal()),
            textAlign: "center",
            flex: "none",
            [r]: {
              fontSize: e.fontSizeHeading2,
              color: e.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          }),
          [`${o}-progress`]: {
            bottom: i,
            width: `calc(100% - ${K(a(e.paddingSM).mul(2).equal())})`,
            marginTop: 0,
            paddingInlineStart: a(n).add(e.paddingXS).equal()
          }
        },
        [`${o}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${o}-thumbnail ${r}`]: {
            [`svg path[fill='${He[0]}']`]: {
              fill: e.colorErrorBg
            },
            [`svg path[fill='${He.primary}']`]: {
              fill: e.colorError
            }
          }
        },
        [`${o}-uploading`]: {
          borderStyle: "dashed",
          [`${o}-name`]: {
            marginBottom: i
          }
        }
      },
      [`${s}${s}-picture-circle ${o}`]: {
        [`&, &::before, ${o}-thumbnail`]: {
          borderRadius: "50%"
        }
      }
    }
  };
}, qr = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontSizeLG: n,
    colorTextLightSolid: i,
    calc: a
  } = e, s = `${t}-list`, o = `${s}-item`, d = e.uploadPicCardSize;
  return {
    [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, ut()), {
      display: "inline-block",
      width: "100%",
      [`${t}${t}-select`]: {
        width: d,
        height: d,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: e.colorFillAlter,
        border: `${K(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [`> ${t}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimary
        }
      },
      // list
      [`${s}${s}-picture-card, ${s}${s}-picture-circle`]: {
        display: "flex",
        flexWrap: "wrap",
        "@supports not (gap: 1px)": {
          "& > *": {
            marginBlockEnd: e.marginXS,
            marginInlineEnd: e.marginXS
          }
        },
        "@supports (gap: 1px)": {
          gap: e.marginXS
        },
        [`${s}-item-container`]: {
          display: "inline-block",
          width: d,
          height: d,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        "&::before": {
          display: "none"
        },
        [o]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${K(a(e.paddingXS).mul(2).equal())})`,
            height: `calc(100% - ${K(a(e.paddingXS).mul(2).equal())})`,
            backgroundColor: e.colorBgMask,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${o}:hover`]: {
          [`&::before, ${o}-actions`]: {
            opacity: 1
          }
        },
        [`${o}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`
            ${r}-eye,
            ${r}-download,
            ${r}-delete
          `]: {
            zIndex: 10,
            width: n,
            margin: `0 ${K(e.marginXXS)}`,
            fontSize: n,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`,
            color: i,
            "&:hover": {
              color: i
            },
            svg: {
              verticalAlign: "baseline"
            }
          }
        },
        [`${o}-thumbnail, ${o}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${o}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${o}-file + ${o}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${K(a(e.paddingXS).mul(2).equal())})`
        },
        [`${o}-uploading`]: {
          [`&${o}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${r}-eye, ${r}-download, ${r}-delete`]: {
            display: "none"
          }
        },
        [`${o}-progress`]: {
          bottom: e.marginXL,
          width: `calc(100% - ${K(a(e.paddingXS).mul(2).equal())})`,
          paddingInlineStart: 0
        }
      }
    }),
    [`${t}-wrapper${t}-picture-circle-wrapper`]: {
      [`${t}${t}-select`]: {
        borderRadius: "50%"
      }
    }
  };
}, Vr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, Gr = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: r
  } = e;
  return {
    [`${t}-wrapper`]: Object.assign(Object.assign({}, it(e)), {
      [t]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${t}-select`]: {
        display: "inline-block"
      },
      [`${t}-disabled`]: {
        color: r,
        cursor: "not-allowed"
      }
    })
  };
}, Kr = (e) => ({
  actionsColor: e.colorTextDescription
}), Jr = ot("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontHeight: r,
    lineWidth: n,
    controlHeightLG: i,
    calc: a
  } = e, s = at(e, {
    uploadThumbnailSize: a(t).mul(2).equal(),
    uploadProgressOffset: a(a(r).div(2)).add(n).equal(),
    uploadPicCardSize: a(i).mul(2.55).equal()
  });
  return [Gr(s), Br(s), Xr(s), qr(s), Wr(s), Hr(s), Vr(s), Ht(s)];
}, Kr);
var Yr = { icon: function(t, r) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: r } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" };
const Qr = Yr;
var Zr = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: Qr
  }));
}, en = /* @__PURE__ */ l.forwardRef(Zr);
const tn = en;
var rn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" };
const nn = rn;
var on = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: nn
  }));
}, an = /* @__PURE__ */ l.forwardRef(on);
const sn = an;
var ln = { icon: function(t, r) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: r } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: r } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: r } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" };
const cn = ln;
var dn = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: cn
  }));
}, un = /* @__PURE__ */ l.forwardRef(dn);
const pn = un;
function ye(e) {
  return Object.assign(Object.assign({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  });
}
function $e(e, t) {
  const r = pe(t), n = r.findIndex((i) => {
    let {
      uid: a
    } = i;
    return a === e.uid;
  });
  return n === -1 ? r.push(e) : r[n] = e, r;
}
function Re(e, t) {
  const r = e.uid !== void 0 ? "uid" : "name";
  return t.filter((n) => n[r] === e[r])[0];
}
function fn(e, t) {
  const r = e.uid !== void 0 ? "uid" : "name", n = t.filter((i) => i[r] !== e[r]);
  return n.length === t.length ? null : n;
}
const mn = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), n = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(n) || [""])[0];
}, ht = (e) => e.indexOf("image/") === 0, gn = (e) => {
  if (e.type && !e.thumbUrl)
    return ht(e.type);
  const t = e.thumbUrl || e.url || "", r = mn(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(r) ? !0 : !(/^data:/.test(t) || r);
}, se = 200;
function hn(e) {
  return new Promise((t) => {
    if (!e.type || !ht(e.type)) {
      t("");
      return;
    }
    const r = document.createElement("canvas");
    r.width = se, r.height = se, r.style.cssText = `position: fixed; left: 0; top: 0; width: ${se}px; height: ${se}px; z-index: 9999; display: none;`, document.body.appendChild(r);
    const n = r.getContext("2d"), i = new Image();
    if (i.onload = () => {
      const {
        width: a,
        height: s
      } = i;
      let o = se, d = se, c = 0, u = 0;
      a > s ? (d = s * (se / a), u = -(d - o) / 2) : (o = a * (se / s), c = -(o - d) / 2), n.drawImage(i, c, u, o, d);
      const p = r.toDataURL();
      document.body.removeChild(r), window.URL.revokeObjectURL(i.src), t(p);
    }, i.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const a = new FileReader();
      a.onload = () => {
        a.result && typeof a.result == "string" && (i.src = a.result);
      }, a.readAsDataURL(e);
    } else if (e.type.startsWith("image/gif")) {
      const a = new FileReader();
      a.onload = () => {
        a.result && t(a.result);
      }, a.readAsDataURL(e);
    } else
      i.src = window.URL.createObjectURL(e);
  });
}
var vn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" };
const bn = vn;
var yn = function(t, r) {
  return /* @__PURE__ */ l.createElement(ge, oe({}, t, {
    ref: r,
    icon: bn
  }));
}, $n = /* @__PURE__ */ l.forwardRef(yn);
const wn = $n, Cn = /* @__PURE__ */ l.forwardRef((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: i,
    locale: a,
    listType: s,
    file: o,
    items: d,
    progress: c,
    iconRender: u,
    actionIconRender: p,
    itemRender: f,
    isImgUrl: $,
    showPreviewIcon: b,
    showRemoveIcon: w,
    showDownloadIcon: y,
    previewIcon: E,
    removeIcon: S,
    downloadIcon: O,
    onPreview: h,
    onDownload: m,
    onClose: P
  } = e;
  var D, A;
  const {
    status: q
  } = o, [j, V] = l.useState(q);
  l.useEffect(() => {
    q !== "removed" && V(q);
  }, [q]);
  const [ee, U] = l.useState(!1);
  l.useEffect(() => {
    const M = setTimeout(() => {
      U(!0);
    }, 300);
    return () => {
      clearTimeout(M);
    };
  }, []);
  const R = u(o);
  let _ = /* @__PURE__ */ l.createElement("div", {
    className: `${r}-icon`
  }, R);
  if (s === "picture" || s === "picture-card" || s === "picture-circle")
    if (j === "uploading" || !o.thumbUrl && !o.url) {
      const M = X(`${r}-list-item-thumbnail`, {
        [`${r}-list-item-file`]: j !== "uploading"
      });
      _ = /* @__PURE__ */ l.createElement("div", {
        className: M
      }, R);
    } else {
      const M = $ != null && $(o) ? /* @__PURE__ */ l.createElement("img", {
        src: o.thumbUrl || o.url,
        alt: o.name,
        className: `${r}-list-item-image`,
        crossOrigin: o.crossOrigin
      }) : R, te = X(`${r}-list-item-thumbnail`, {
        [`${r}-list-item-file`]: $ && !$(o)
      });
      _ = /* @__PURE__ */ l.createElement("a", {
        className: te,
        onClick: (ne) => h(o, ne),
        href: o.url || o.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, M);
    }
  const k = X(`${r}-list-item`, `${r}-list-item-${j}`), L = typeof o.linkProps == "string" ? JSON.parse(o.linkProps) : o.linkProps, ae = w ? p(
    (typeof S == "function" ? S(o) : S) || /* @__PURE__ */ l.createElement(Lr, null),
    () => P(o),
    r,
    a.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    !0
  ) : null, ie = y && j === "done" ? p((typeof O == "function" ? O(o) : O) || /* @__PURE__ */ l.createElement(wn, null), () => m(o), r, a.downloadFile) : null, ce = s !== "picture-card" && s !== "picture-circle" && /* @__PURE__ */ l.createElement("span", {
    key: "download-delete",
    className: X(`${r}-list-item-actions`, {
      picture: s === "picture"
    })
  }, ie, ae), B = X(`${r}-list-item-name`), J = o.url ? [/* @__PURE__ */ l.createElement("a", Object.assign({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: B,
    title: o.name
  }, L, {
    href: o.url,
    onClick: (M) => h(o, M)
  }), o.name), ce] : [/* @__PURE__ */ l.createElement("span", {
    key: "view",
    className: B,
    onClick: (M) => h(o, M),
    title: o.name
  }, o.name), ce], g = b && (o.url || o.thumbUrl) ? /* @__PURE__ */ l.createElement("a", {
    href: o.url || o.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (M) => h(o, M),
    title: a.previewFile
  }, typeof E == "function" ? E(o) : E || /* @__PURE__ */ l.createElement(Xt, null)) : null, I = (s === "picture-card" || s === "picture-circle") && j !== "uploading" && /* @__PURE__ */ l.createElement("span", {
    className: `${r}-list-item-actions`
  }, g, j === "done" && ie, ae), {
    getPrefixCls: W
  } = l.useContext(Se), T = W(), Y = /* @__PURE__ */ l.createElement("div", {
    className: k
  }, _, J, I, ee && /* @__PURE__ */ l.createElement(ft, {
    motionName: `${T}-fade`,
    visible: j === "uploading",
    motionDeadline: 2e3
  }, (M) => {
    let {
      className: te
    } = M;
    const ne = "percent" in o ? /* @__PURE__ */ l.createElement(Pr, Object.assign({}, c, {
      type: "line",
      percent: o.percent,
      "aria-label": o["aria-label"],
      "aria-labelledby": o["aria-labelledby"]
    })) : null;
    return /* @__PURE__ */ l.createElement("div", {
      className: X(`${r}-list-item-progress`, te)
    }, ne);
  })), re = o.response && typeof o.response == "string" ? o.response : ((D = o.error) === null || D === void 0 ? void 0 : D.statusText) || ((A = o.error) === null || A === void 0 ? void 0 : A.message) || a.uploadError, Q = j === "error" ? /* @__PURE__ */ l.createElement(mt, {
    title: re,
    getPopupContainer: (M) => M.parentNode
  }, Y) : Y;
  return /* @__PURE__ */ l.createElement("div", {
    className: X(`${r}-list-item-container`, n),
    style: i,
    ref: t
  }, f ? f(Q, o, d, {
    download: m.bind(null, o),
    preview: h.bind(null, o),
    remove: P.bind(null, o)
  }) : Q);
}), Sn = Cn, En = (e, t) => {
  const {
    listType: r = "text",
    previewFile: n = hn,
    onPreview: i,
    onDownload: a,
    onRemove: s,
    locale: o,
    iconRender: d,
    isImageUrl: c = gn,
    prefixCls: u,
    items: p = [],
    showPreviewIcon: f = !0,
    showRemoveIcon: $ = !0,
    showDownloadIcon: b = !1,
    removeIcon: w,
    previewIcon: y,
    downloadIcon: E,
    progress: S = {
      size: [-1, 2],
      showInfo: !1
    },
    appendAction: O,
    appendActionVisible: h = !0,
    itemRender: m,
    disabled: P
  } = e, D = Yt(), [A, q] = l.useState(!1);
  l.useEffect(() => {
    r !== "picture" && r !== "picture-card" && r !== "picture-circle" || (p || []).forEach((g) => {
      typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(g.originFileObj instanceof File || g.originFileObj instanceof Blob) || g.thumbUrl !== void 0 || (g.thumbUrl = "", n && n(g.originFileObj).then((I) => {
        g.thumbUrl = I || "", D();
      }));
    });
  }, [r, p, n]), l.useEffect(() => {
    q(!0);
  }, []);
  const j = (g, I) => {
    if (i)
      return I == null || I.preventDefault(), i(g);
  }, V = (g) => {
    typeof a == "function" ? a(g) : g.url && window.open(g.url);
  }, ee = (g) => {
    s == null || s(g);
  }, U = (g) => {
    if (d)
      return d(g, r);
    const I = g.status === "uploading", W = c && c(g) ? /* @__PURE__ */ l.createElement(pn, null) : /* @__PURE__ */ l.createElement(tn, null);
    let T = I ? /* @__PURE__ */ l.createElement(qe, null) : /* @__PURE__ */ l.createElement(sn, null);
    return r === "picture" ? T = I ? /* @__PURE__ */ l.createElement(qe, null) : W : (r === "picture-card" || r === "picture-circle") && (T = I ? o.uploading : W), T;
  }, R = (g, I, W, T, Y) => {
    const re = {
      type: "text",
      size: "small",
      title: T,
      onClick: (Q) => {
        var M, te;
        I(), /* @__PURE__ */ l.isValidElement(g) && ((te = (M = g.props).onClick) === null || te === void 0 || te.call(M, Q));
      },
      className: `${W}-list-item-action`
    };
    if (Y && (re.disabled = P), /* @__PURE__ */ l.isValidElement(g)) {
      const Q = Xe(g, Object.assign(Object.assign({}, g.props), {
        onClick: () => {
        }
      }));
      return /* @__PURE__ */ l.createElement(Ve, Object.assign({}, re, {
        icon: Q
      }));
    }
    return /* @__PURE__ */ l.createElement(Ve, Object.assign({}, re), /* @__PURE__ */ l.createElement("span", null, g));
  };
  l.useImperativeHandle(t, () => ({
    handlePreview: j,
    handleDownload: V
  }));
  const {
    getPrefixCls: _
  } = l.useContext(Se), k = _("upload", u), L = _(), ae = X(`${k}-list`, `${k}-list-${r}`), ie = pe(p.map((g) => ({
    key: g.uid,
    file: g
  })));
  let B = {
    motionDeadline: 2e3,
    motionName: `${k}-${r === "picture-card" || r === "picture-circle" ? "animate-inline" : "animate"}`,
    keys: ie,
    motionAppear: A
  };
  const J = l.useMemo(() => {
    const g = Object.assign({}, At(L));
    return delete g.onAppearEnd, delete g.onEnterEnd, delete g.onLeaveEnd, g;
  }, [L]);
  return r !== "picture-card" && r !== "picture-circle" && (B = Object.assign(Object.assign({}, J), B)), /* @__PURE__ */ l.createElement("div", {
    className: ae
  }, /* @__PURE__ */ l.createElement(Ut, Object.assign({}, B, {
    component: !1
  }), (g) => {
    let {
      key: I,
      file: W,
      className: T,
      style: Y
    } = g;
    return /* @__PURE__ */ l.createElement(Sn, {
      key: I,
      locale: o,
      prefixCls: k,
      className: T,
      style: Y,
      file: W,
      items: p,
      progress: S,
      listType: r,
      isImgUrl: c,
      showPreviewIcon: f,
      showRemoveIcon: $,
      showDownloadIcon: b,
      removeIcon: w,
      previewIcon: y,
      downloadIcon: E,
      iconRender: U,
      actionIconRender: R,
      itemRender: m,
      onPreview: j,
      onDownload: V,
      onClose: ee
    });
  }), O && /* @__PURE__ */ l.createElement(ft, Object.assign({}, B, {
    visible: h,
    forceRender: !0
  }), (g) => {
    let {
      className: I,
      style: W
    } = g;
    return Xe(O, (T) => ({
      className: X(T.className, I),
      style: Object.assign(Object.assign(Object.assign({}, W), {
        // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
        pointerEvents: I ? "none" : void 0
      }), T.style)
    }));
  }));
}, On = /* @__PURE__ */ l.forwardRef(En), xn = On;
var In = function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(u) {
      try {
        c(n.next(u));
      } catch (p) {
        s(p);
      }
    }
    function d(u) {
      try {
        c(n.throw(u));
      } catch (p) {
        s(p);
      }
    }
    function c(u) {
      u.done ? a(u.value) : i(u.value).then(o, d);
    }
    c((n = n.apply(e, t || [])).next());
  });
};
const be = `__LIST_IGNORE_${Date.now()}__`, Pn = (e, t) => {
  const {
    fileList: r,
    defaultFileList: n,
    onRemove: i,
    showUploadList: a = !0,
    listType: s = "text",
    onPreview: o,
    onDownload: d,
    onChange: c,
    onDrop: u,
    previewFile: p,
    disabled: f,
    locale: $,
    iconRender: b,
    isImageUrl: w,
    progress: y,
    prefixCls: E,
    className: S,
    type: O = "select",
    children: h,
    style: m,
    itemRender: P,
    maxCount: D,
    data: A = {},
    multiple: q = !1,
    hasControlInside: j = !0,
    action: V = "",
    accept: ee = "",
    supportServerRender: U = !0,
    rootClassName: R
  } = e, _ = l.useContext(zt), k = f ?? _, [L, ae] = _t(n || [], {
    value: r,
    postState: (v) => v ?? []
  }), [ie, ce] = l.useState("drop"), B = l.useRef(null);
  l.useMemo(() => {
    const v = Date.now();
    (r || []).forEach((x, N) => {
      !x.uid && !Object.isFrozen(x) && (x.uid = `__AUTO__${v}_${N}__`);
    });
  }, [r]);
  const J = (v, x, N) => {
    let C = pe(x), F = !1;
    D === 1 ? C = C.slice(-1) : D && (F = C.length > D, C = C.slice(0, D)), Ge.flushSync(() => {
      ae(C);
    });
    const G = {
      file: v,
      fileList: C
    };
    N && (G.event = N), (!F || v.status === "removed" || // We should ignore event if current file is exceed `maxCount`
    C.some((de) => de.uid === v.uid)) && Ge.flushSync(() => {
      c == null || c(G);
    });
  }, g = (v, x) => In(void 0, void 0, void 0, function* () {
    const {
      beforeUpload: N,
      transformFile: C
    } = e;
    let F = v;
    if (N) {
      const G = yield N(v, x);
      if (G === !1)
        return !1;
      if (delete v[be], G === be)
        return Object.defineProperty(v, be, {
          value: !0,
          configurable: !0
        }), !1;
      typeof G == "object" && G && (F = G);
    }
    return C && (F = yield C(F)), F;
  }), I = (v) => {
    const x = v.filter((F) => !F.file[be]);
    if (!x.length)
      return;
    const N = x.map((F) => ye(F.file));
    let C = pe(L);
    N.forEach((F) => {
      C = $e(F, C);
    }), N.forEach((F, G) => {
      let de = F;
      if (x[G].parsedFile)
        F.status = "uploading";
      else {
        const {
          originFileObj: fe
        } = F;
        let ue;
        try {
          ue = new File([fe], fe.name, {
            type: fe.type
          });
        } catch {
          ue = new Blob([fe], {
            type: fe.type
          }), ue.name = fe.name, ue.lastModifiedDate = /* @__PURE__ */ new Date(), ue.lastModified = (/* @__PURE__ */ new Date()).getTime();
        }
        ue.uid = F.uid, de = ue;
      }
      J(de, C);
    });
  }, W = (v, x, N) => {
    try {
      typeof v == "string" && (v = JSON.parse(v));
    } catch {
    }
    if (!Re(x, L))
      return;
    const C = ye(x);
    C.status = "done", C.percent = 100, C.response = v, C.xhr = N;
    const F = $e(C, L);
    J(C, F);
  }, T = (v, x) => {
    if (!Re(x, L))
      return;
    const N = ye(x);
    N.status = "uploading", N.percent = v.percent;
    const C = $e(N, L);
    J(N, C, v);
  }, Y = (v, x, N) => {
    if (!Re(N, L))
      return;
    const C = ye(N);
    C.error = v, C.response = x, C.status = "error";
    const F = $e(C, L);
    J(C, F);
  }, re = (v) => {
    let x;
    Promise.resolve(typeof i == "function" ? i(v) : i).then((N) => {
      var C;
      if (N === !1)
        return;
      const F = fn(v, L);
      F && (x = Object.assign(Object.assign({}, v), {
        status: "removed"
      }), L == null || L.forEach((G) => {
        const de = x.uid !== void 0 ? "uid" : "name";
        G[de] === x[de] && !Object.isFrozen(G) && (G.status = "removed");
      }), (C = B.current) === null || C === void 0 || C.abort(x), J(x, F));
    });
  }, Q = (v) => {
    ce(v.type), v.type === "drop" && (u == null || u(v));
  };
  l.useImperativeHandle(t, () => ({
    onBatchStart: I,
    onSuccess: W,
    onProgress: T,
    onError: Y,
    fileList: L,
    upload: B.current
  }));
  const {
    getPrefixCls: M,
    direction: te,
    upload: ne
  } = l.useContext(Se), z = M("upload", E), he = Object.assign(Object.assign({
    onBatchStart: I,
    onError: Y,
    onProgress: T,
    onSuccess: W
  }, e), {
    data: A,
    multiple: q,
    action: V,
    accept: ee,
    supportServerRender: U,
    prefixCls: z,
    disabled: k,
    beforeUpload: g,
    onChange: void 0,
    hasControlInside: j
  });
  delete he.className, delete he.style, (!h || k) && delete he.id;
  const Ue = `${z}-wrapper`, [Oe, ze, bt] = Jr(z, Ue), [yt] = Bt("Upload", Wt.Upload), {
    showRemoveIcon: _e,
    showPreviewIcon: $t,
    showDownloadIcon: wt,
    removeIcon: Ct,
    previewIcon: St,
    downloadIcon: Et
  } = typeof a == "boolean" ? {} : a, Ot = typeof _e > "u" ? !k : !!_e, xe = (v, x) => a ? /* @__PURE__ */ l.createElement(xn, {
    prefixCls: z,
    listType: s,
    items: L,
    previewFile: p,
    onPreview: o,
    onDownload: d,
    onRemove: re,
    showRemoveIcon: Ot,
    showPreviewIcon: $t,
    showDownloadIcon: wt,
    removeIcon: Ct,
    previewIcon: St,
    downloadIcon: Et,
    iconRender: b,
    locale: Object.assign(Object.assign({}, yt), $),
    isImageUrl: w,
    progress: y,
    appendAction: v,
    appendActionVisible: x,
    itemRender: P,
    disabled: k
  }) : v, Ie = X(Ue, S, R, ze, bt, ne == null ? void 0 : ne.className, {
    [`${z}-rtl`]: te === "rtl",
    [`${z}-picture-card-wrapper`]: s === "picture-card",
    [`${z}-picture-circle-wrapper`]: s === "picture-circle"
  }), xt = Object.assign(Object.assign({}, ne == null ? void 0 : ne.style), m);
  if (O === "drag") {
    const v = X(ze, z, `${z}-drag`, {
      [`${z}-drag-uploading`]: L.some((x) => x.status === "uploading"),
      [`${z}-drag-hover`]: ie === "dragover",
      [`${z}-disabled`]: k,
      [`${z}-rtl`]: te === "rtl"
    });
    return Oe(/* @__PURE__ */ l.createElement("span", {
      className: Ie
    }, /* @__PURE__ */ l.createElement("div", {
      className: v,
      style: xt,
      onDrop: Q,
      onDragOver: Q,
      onDragLeave: Q
    }, /* @__PURE__ */ l.createElement(Te, Object.assign({}, he, {
      ref: B,
      className: `${z}-btn`
    }), /* @__PURE__ */ l.createElement("div", {
      className: `${z}-drag-container`
    }, h))), xe()));
  }
  const It = X(z, `${z}-select`, {
    [`${z}-disabled`]: k
  }), Be = /* @__PURE__ */ l.createElement("div", {
    className: It,
    style: h ? void 0 : {
      display: "none"
    }
  }, /* @__PURE__ */ l.createElement(Te, Object.assign({}, he, {
    ref: B
  })));
  return Oe(s === "picture-card" || s === "picture-circle" ? /* @__PURE__ */ l.createElement("span", {
    className: Ie
  }, xe(Be, !!h)) : /* @__PURE__ */ l.createElement("span", {
    className: Ie
  }, Be, xe()));
}, Dn = /* @__PURE__ */ l.forwardRef(Pn), vt = Dn;
var Fn = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const jn = /* @__PURE__ */ l.forwardRef((e, t) => {
  var {
    style: r,
    height: n,
    hasControlInside: i = !1
  } = e, a = Fn(e, ["style", "height", "hasControlInside"]);
  return /* @__PURE__ */ l.createElement(vt, Object.assign({
    ref: t,
    hasControlInside: i
  }, a, {
    type: "drag",
    style: Object.assign(Object.assign({}, r), {
      height: n
    })
  }));
}), Rn = jn, Ae = vt;
Ae.Dragger = Rn;
Ae.LIST_IGNORE = be;
const Tn = Ae, Mn = "data:image/svg+xml,%3csvg%20t='1706144764009'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='20100'%20width='16'%20height='16'%3e%3cpath%20d='M896%20629.333333c-17.066667%200-32%2014.933333-32%2032v170.666667c0%206.4-4.266667%2010.666667-10.666667%2010.666667H170.666667c-6.4%200-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v170.666667c0%2040.533333%2034.133333%2074.666667%2074.666667%2074.666667h682.666666c40.533333%200%2074.666667-34.133333%2074.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z'%20fill='%23000000'%20p-id='20101'%3e%3c/path%3e%3cpath%20d='M322.133333%20407.466667l157.866667-157.866667V704c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V247.466667l157.866667%20157.866666c6.4%206.4%2014.933333%208.533333%2023.466666%208.533334s17.066667-2.133333%2023.466667-8.533334c12.8-12.8%2012.8-32%200-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8%200l-213.333334%20213.333333c-12.8%2012.8-12.8%2032%200%2044.8%2010.666667%2012.8%2032%2012.8%2044.8%202.133334z'%20fill='%23000000'%20p-id='20102'%3e%3c/path%3e%3c/svg%3e";
export {
  Jt as C,
  Tn as U,
  Mn as a
};
