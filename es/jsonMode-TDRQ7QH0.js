import { m as er } from "./RequestBuilder-DLGbTW_q.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var rr = Object.defineProperty, tr = Object.getOwnPropertyDescriptor, nr = Object.getOwnPropertyNames, ir = Object.prototype.hasOwnProperty, oe = (e, n, i, t) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let r of nr(n))
      !ir.call(e, r) && r !== i && rr(e, r, { get: () => n[r], enumerable: !(t = tr(n, r)) || t.enumerable });
  return e;
}, ar = (e, n, i) => (oe(e, n, "default"), i && oe(i, n, "default")), f = {};
ar(f, er);
var sr = 2 * 60 * 1e3, or = class {
  constructor(e) {
    this._defaults = e, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
  }
  _stopWorker() {
    this._worker && (this._worker.dispose(), this._worker = null), this._client = null;
  }
  dispose() {
    clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker();
  }
  _checkIfIdle() {
    if (!this._worker)
      return;
    Date.now() - this._lastUsedTime > sr && this._stopWorker();
  }
  _getClient() {
    return this._lastUsedTime = Date.now(), this._client || (this._worker = f.editor.createWebWorker({
      // module that exports the create() method and returns a `JSONWorker` instance
      moduleId: "vs/language/json/jsonWorker",
      label: this._defaults.languageId,
      // passed in to the create() method
      createData: {
        languageSettings: this._defaults.diagnosticsOptions,
        languageId: this._defaults.languageId,
        enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
      }
    }), this._client = this._worker.getProxy()), this._client;
  }
  getLanguageServiceWorker(...e) {
    let n;
    return this._getClient().then((i) => {
      n = i;
    }).then((i) => {
      if (this._worker)
        return this._worker.withSyncedResources(e);
    }).then((i) => n);
  }
}, ue;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
})(ue || (ue = {}));
var Y;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
})(Y || (Y = {}));
var T;
(function(e) {
  function n(t, r) {
    return t === Number.MAX_VALUE && (t = Y.MAX_VALUE), r === Number.MAX_VALUE && (r = Y.MAX_VALUE), { line: t, character: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.objectLiteral(r) && o.uinteger(r.line) && o.uinteger(r.character);
  }
  e.is = i;
})(T || (T = {}));
var _;
(function(e) {
  function n(t, r, a, s) {
    if (o.uinteger(t) && o.uinteger(r) && o.uinteger(a) && o.uinteger(s))
      return { start: T.create(t, r), end: T.create(a, s) };
    if (T.is(t) && T.is(r))
      return { start: t, end: r };
    throw new Error("Range#create called with invalid arguments[" + t + ", " + r + ", " + a + ", " + s + "]");
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.objectLiteral(r) && T.is(r.start) && T.is(r.end);
  }
  e.is = i;
})(_ || (_ = {}));
var ee;
(function(e) {
  function n(t, r) {
    return { uri: t, range: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && _.is(r.range) && (o.string(r.uri) || o.undefined(r.uri));
  }
  e.is = i;
})(ee || (ee = {}));
var ce;
(function(e) {
  function n(t, r, a, s) {
    return { targetUri: t, targetRange: r, targetSelectionRange: a, originSelectionRange: s };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && _.is(r.targetRange) && o.string(r.targetUri) && (_.is(r.targetSelectionRange) || o.undefined(r.targetSelectionRange)) && (_.is(r.originSelectionRange) || o.undefined(r.originSelectionRange));
  }
  e.is = i;
})(ce || (ce = {}));
var re;
(function(e) {
  function n(t, r, a, s) {
    return {
      red: t,
      green: r,
      blue: a,
      alpha: s
    };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.numberRange(r.red, 0, 1) && o.numberRange(r.green, 0, 1) && o.numberRange(r.blue, 0, 1) && o.numberRange(r.alpha, 0, 1);
  }
  e.is = i;
})(re || (re = {}));
var de;
(function(e) {
  function n(t, r) {
    return {
      range: t,
      color: r
    };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return _.is(r.range) && re.is(r.color);
  }
  e.is = i;
})(de || (de = {}));
var fe;
(function(e) {
  function n(t, r, a) {
    return {
      label: t,
      textEdit: r,
      additionalTextEdits: a
    };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.string(r.label) && (o.undefined(r.textEdit) || R.is(r)) && (o.undefined(r.additionalTextEdits) || o.typedArray(r.additionalTextEdits, R.is));
  }
  e.is = i;
})(fe || (fe = {}));
var W;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(W || (W = {}));
var le;
(function(e) {
  function n(t, r, a, s, u) {
    var l = {
      startLine: t,
      endLine: r
    };
    return o.defined(a) && (l.startCharacter = a), o.defined(s) && (l.endCharacter = s), o.defined(u) && (l.kind = u), l;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.uinteger(r.startLine) && o.uinteger(r.startLine) && (o.undefined(r.startCharacter) || o.uinteger(r.startCharacter)) && (o.undefined(r.endCharacter) || o.uinteger(r.endCharacter)) && (o.undefined(r.kind) || o.string(r.kind));
  }
  e.is = i;
})(le || (le = {}));
var te;
(function(e) {
  function n(t, r) {
    return {
      location: t,
      message: r
    };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && ee.is(r.location) && o.string(r.message);
  }
  e.is = i;
})(te || (te = {}));
var N;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(N || (N = {}));
var ge;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(ge || (ge = {}));
var he;
(function(e) {
  function n(i) {
    var t = i;
    return t != null && o.string(t.href);
  }
  e.is = n;
})(he || (he = {}));
var $;
(function(e) {
  function n(t, r, a, s, u, l) {
    var c = { range: t, message: r };
    return o.defined(a) && (c.severity = a), o.defined(s) && (c.code = s), o.defined(u) && (c.source = u), o.defined(l) && (c.relatedInformation = l), c;
  }
  e.create = n;
  function i(t) {
    var r, a = t;
    return o.defined(a) && _.is(a.range) && o.string(a.message) && (o.number(a.severity) || o.undefined(a.severity)) && (o.integer(a.code) || o.string(a.code) || o.undefined(a.code)) && (o.undefined(a.codeDescription) || o.string((r = a.codeDescription) === null || r === void 0 ? void 0 : r.href)) && (o.string(a.source) || o.undefined(a.source)) && (o.undefined(a.relatedInformation) || o.typedArray(a.relatedInformation, te.is));
  }
  e.is = i;
})($ || ($ = {}));
var V;
(function(e) {
  function n(t, r) {
    for (var a = [], s = 2; s < arguments.length; s++)
      a[s - 2] = arguments[s];
    var u = { title: t, command: r };
    return o.defined(a) && a.length > 0 && (u.arguments = a), u;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.string(r.title) && o.string(r.command);
  }
  e.is = i;
})(V || (V = {}));
var R;
(function(e) {
  function n(a, s) {
    return { range: a, newText: s };
  }
  e.replace = n;
  function i(a, s) {
    return { range: { start: a, end: a }, newText: s };
  }
  e.insert = i;
  function t(a) {
    return { range: a, newText: "" };
  }
  e.del = t;
  function r(a) {
    var s = a;
    return o.objectLiteral(s) && o.string(s.newText) && _.is(s.range);
  }
  e.is = r;
})(R || (R = {}));
var O;
(function(e) {
  function n(t, r, a) {
    var s = { label: t };
    return r !== void 0 && (s.needsConfirmation = r), a !== void 0 && (s.description = a), s;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r !== void 0 && o.objectLiteral(r) && o.string(r.label) && (o.boolean(r.needsConfirmation) || r.needsConfirmation === void 0) && (o.string(r.description) || r.description === void 0);
  }
  e.is = i;
})(O || (O = {}));
var w;
(function(e) {
  function n(i) {
    var t = i;
    return typeof t == "string";
  }
  e.is = n;
})(w || (w = {}));
var P;
(function(e) {
  function n(a, s, u) {
    return { range: a, newText: s, annotationId: u };
  }
  e.replace = n;
  function i(a, s, u) {
    return { range: { start: a, end: a }, newText: s, annotationId: u };
  }
  e.insert = i;
  function t(a, s) {
    return { range: a, newText: "", annotationId: s };
  }
  e.del = t;
  function r(a) {
    var s = a;
    return R.is(s) && (O.is(s.annotationId) || w.is(s.annotationId));
  }
  e.is = r;
})(P || (P = {}));
var G;
(function(e) {
  function n(t, r) {
    return { textDocument: t, edits: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && Q.is(r.textDocument) && Array.isArray(r.edits);
  }
  e.is = i;
})(G || (G = {}));
var H;
(function(e) {
  function n(t, r, a) {
    var s = {
      kind: "create",
      uri: t
    };
    return r !== void 0 && (r.overwrite !== void 0 || r.ignoreIfExists !== void 0) && (s.options = r), a !== void 0 && (s.annotationId = a), s;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && r.kind === "create" && o.string(r.uri) && (r.options === void 0 || (r.options.overwrite === void 0 || o.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || o.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || w.is(r.annotationId));
  }
  e.is = i;
})(H || (H = {}));
var z;
(function(e) {
  function n(t, r, a, s) {
    var u = {
      kind: "rename",
      oldUri: t,
      newUri: r
    };
    return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (u.options = a), s !== void 0 && (u.annotationId = s), u;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && r.kind === "rename" && o.string(r.oldUri) && o.string(r.newUri) && (r.options === void 0 || (r.options.overwrite === void 0 || o.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || o.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || w.is(r.annotationId));
  }
  e.is = i;
})(z || (z = {}));
var B;
(function(e) {
  function n(t, r, a) {
    var s = {
      kind: "delete",
      uri: t
    };
    return r !== void 0 && (r.recursive !== void 0 || r.ignoreIfNotExists !== void 0) && (s.options = r), a !== void 0 && (s.annotationId = a), s;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && r.kind === "delete" && o.string(r.uri) && (r.options === void 0 || (r.options.recursive === void 0 || o.boolean(r.options.recursive)) && (r.options.ignoreIfNotExists === void 0 || o.boolean(r.options.ignoreIfNotExists))) && (r.annotationId === void 0 || w.is(r.annotationId));
  }
  e.is = i;
})(B || (B = {}));
var ne;
(function(e) {
  function n(i) {
    var t = i;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || t.documentChanges.every(function(r) {
      return o.string(r.kind) ? H.is(r) || z.is(r) || B.is(r) : G.is(r);
    }));
  }
  e.is = n;
})(ne || (ne = {}));
var J = (
  /** @class */
  function() {
    function e(n, i) {
      this.edits = n, this.changeAnnotations = i;
    }
    return e.prototype.insert = function(n, i, t) {
      var r, a;
      if (t === void 0 ? r = R.insert(n, i) : w.is(t) ? (a = t, r = P.insert(n, i, t)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(t), r = P.insert(n, i, a)), this.edits.push(r), a !== void 0)
        return a;
    }, e.prototype.replace = function(n, i, t) {
      var r, a;
      if (t === void 0 ? r = R.replace(n, i) : w.is(t) ? (a = t, r = P.replace(n, i, t)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(t), r = P.replace(n, i, a)), this.edits.push(r), a !== void 0)
        return a;
    }, e.prototype.delete = function(n, i) {
      var t, r;
      if (i === void 0 ? t = R.del(n) : w.is(i) ? (r = i, t = P.del(n, i)) : (this.assertChangeAnnotations(this.changeAnnotations), r = this.changeAnnotations.manage(i), t = P.del(n, r)), this.edits.push(t), r !== void 0)
        return r;
    }, e.prototype.add = function(n) {
      this.edits.push(n);
    }, e.prototype.all = function() {
      return this.edits;
    }, e.prototype.clear = function() {
      this.edits.splice(0, this.edits.length);
    }, e.prototype.assertChangeAnnotations = function(n) {
      if (n === void 0)
        throw new Error("Text edit change is not configured to manage change annotations.");
    }, e;
  }()
), ve = (
  /** @class */
  function() {
    function e(n) {
      this._annotations = n === void 0 ? /* @__PURE__ */ Object.create(null) : n, this._counter = 0, this._size = 0;
    }
    return e.prototype.all = function() {
      return this._annotations;
    }, Object.defineProperty(e.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.manage = function(n, i) {
      var t;
      if (w.is(n) ? t = n : (t = this.nextId(), i = n), this._annotations[t] !== void 0)
        throw new Error("Id " + t + " is already in use.");
      if (i === void 0)
        throw new Error("No annotation provided for id " + t);
      return this._annotations[t] = i, this._size++, t;
    }, e.prototype.nextId = function() {
      return this._counter++, this._counter.toString();
    }, e;
  }()
);
/** @class */
(function() {
  function e(n) {
    var i = this;
    this._textEditChanges = /* @__PURE__ */ Object.create(null), n !== void 0 ? (this._workspaceEdit = n, n.documentChanges ? (this._changeAnnotations = new ve(n.changeAnnotations), n.changeAnnotations = this._changeAnnotations.all(), n.documentChanges.forEach(function(t) {
      if (G.is(t)) {
        var r = new J(t.edits, i._changeAnnotations);
        i._textEditChanges[t.textDocument.uri] = r;
      }
    })) : n.changes && Object.keys(n.changes).forEach(function(t) {
      var r = new J(n.changes[t]);
      i._textEditChanges[t] = r;
    })) : this._workspaceEdit = {};
  }
  return Object.defineProperty(e.prototype, "edit", {
    /**
     * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
     * use to be returned from a workspace edit operation like rename.
     */
    get: function() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.getTextEditChange = function(n) {
    if (Q.is(n)) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      var i = { uri: n.uri, version: n.version }, t = this._textEditChanges[i.uri];
      if (!t) {
        var r = [], a = {
          textDocument: i,
          edits: r
        };
        this._workspaceEdit.documentChanges.push(a), t = new J(r, this._changeAnnotations), this._textEditChanges[i.uri] = t;
      }
      return t;
    } else {
      if (this.initChanges(), this._workspaceEdit.changes === void 0)
        throw new Error("Workspace edit is not configured for normal text edit changes.");
      var t = this._textEditChanges[n];
      if (!t) {
        var r = [];
        this._workspaceEdit.changes[n] = r, t = new J(r), this._textEditChanges[n] = t;
      }
      return t;
    }
  }, e.prototype.initDocumentChanges = function() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new ve(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
  }, e.prototype.initChanges = function() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
  }, e.prototype.createFile = function(n, i, t) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var r;
    O.is(i) || w.is(i) ? r = i : t = i;
    var a, s;
    if (r === void 0 ? a = H.create(n, t) : (s = w.is(r) ? r : this._changeAnnotations.manage(r), a = H.create(n, t, s)), this._workspaceEdit.documentChanges.push(a), s !== void 0)
      return s;
  }, e.prototype.renameFile = function(n, i, t, r) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var a;
    O.is(t) || w.is(t) ? a = t : r = t;
    var s, u;
    if (a === void 0 ? s = z.create(n, i, r) : (u = w.is(a) ? a : this._changeAnnotations.manage(a), s = z.create(n, i, r, u)), this._workspaceEdit.documentChanges.push(s), u !== void 0)
      return u;
  }, e.prototype.deleteFile = function(n, i, t) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var r;
    O.is(i) || w.is(i) ? r = i : t = i;
    var a, s;
    if (r === void 0 ? a = B.create(n, t) : (s = w.is(r) ? r : this._changeAnnotations.manage(r), a = B.create(n, t, s)), this._workspaceEdit.documentChanges.push(a), s !== void 0)
      return s;
  }, e;
})();
var pe;
(function(e) {
  function n(t) {
    return { uri: t };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.string(r.uri);
  }
  e.is = i;
})(pe || (pe = {}));
var me;
(function(e) {
  function n(t, r) {
    return { uri: t, version: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.string(r.uri) && o.integer(r.version);
  }
  e.is = i;
})(me || (me = {}));
var Q;
(function(e) {
  function n(t, r) {
    return { uri: t, version: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.string(r.uri) && (r.version === null || o.integer(r.version));
  }
  e.is = i;
})(Q || (Q = {}));
var _e;
(function(e) {
  function n(t, r, a, s) {
    return { uri: t, languageId: r, version: a, text: s };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.string(r.uri) && o.string(r.languageId) && o.integer(r.version) && o.string(r.text);
  }
  e.is = i;
})(_e || (_e = {}));
var q;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
})(q || (q = {}));
(function(e) {
  function n(i) {
    var t = i;
    return t === e.PlainText || t === e.Markdown;
  }
  e.is = n;
})(q || (q = {}));
var ie;
(function(e) {
  function n(i) {
    var t = i;
    return o.objectLiteral(i) && q.is(t.kind) && o.string(t.value);
  }
  e.is = n;
})(ie || (ie = {}));
var p;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(p || (p = {}));
var ae;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(ae || (ae = {}));
var ke;
(function(e) {
  e.Deprecated = 1;
})(ke || (ke = {}));
var we;
(function(e) {
  function n(t, r, a) {
    return { newText: t, insert: r, replace: a };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && o.string(r.newText) && _.is(r.insert) && _.is(r.replace);
  }
  e.is = i;
})(we || (we = {}));
var be;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(be || (be = {}));
var Ce;
(function(e) {
  function n(i) {
    return { label: i };
  }
  e.create = n;
})(Ce || (Ce = {}));
var Ee;
(function(e) {
  function n(i, t) {
    return { items: i || [], isIncomplete: !!t };
  }
  e.create = n;
})(Ee || (Ee = {}));
var Z;
(function(e) {
  function n(t) {
    return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = n;
  function i(t) {
    var r = t;
    return o.string(r) || o.objectLiteral(r) && o.string(r.language) && o.string(r.value);
  }
  e.is = i;
})(Z || (Z = {}));
var Ae;
(function(e) {
  function n(i) {
    var t = i;
    return !!t && o.objectLiteral(t) && (ie.is(t.contents) || Z.is(t.contents) || o.typedArray(t.contents, Z.is)) && (i.range === void 0 || _.is(i.range));
  }
  e.is = n;
})(Ae || (Ae = {}));
var Se;
(function(e) {
  function n(i, t) {
    return t ? { label: i, documentation: t } : { label: i };
  }
  e.create = n;
})(Se || (Se = {}));
var Ie;
(function(e) {
  function n(i, t) {
    for (var r = [], a = 2; a < arguments.length; a++)
      r[a - 2] = arguments[a];
    var s = { label: i };
    return o.defined(t) && (s.documentation = t), o.defined(r) ? s.parameters = r : s.parameters = [], s;
  }
  e.create = n;
})(Ie || (Ie = {}));
var U;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(U || (U = {}));
var ye;
(function(e) {
  function n(i, t) {
    var r = { range: i };
    return o.number(t) && (r.kind = t), r;
  }
  e.create = n;
})(ye || (ye = {}));
var m;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(m || (m = {}));
var Te;
(function(e) {
  e.Deprecated = 1;
})(Te || (Te = {}));
var Pe;
(function(e) {
  function n(i, t, r, a, s) {
    var u = {
      name: i,
      kind: t,
      location: { uri: a, range: r }
    };
    return s && (u.containerName = s), u;
  }
  e.create = n;
})(Pe || (Pe = {}));
var Re;
(function(e) {
  function n(t, r, a, s, u, l) {
    var c = {
      name: t,
      detail: r,
      kind: a,
      range: s,
      selectionRange: u
    };
    return l !== void 0 && (c.children = l), c;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && o.string(r.name) && o.number(r.kind) && _.is(r.range) && _.is(r.selectionRange) && (r.detail === void 0 || o.string(r.detail)) && (r.deprecated === void 0 || o.boolean(r.deprecated)) && (r.children === void 0 || Array.isArray(r.children)) && (r.tags === void 0 || Array.isArray(r.tags));
  }
  e.is = i;
})(Re || (Re = {}));
var Me;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(Me || (Me = {}));
var De;
(function(e) {
  function n(t, r) {
    var a = { diagnostics: t };
    return r != null && (a.only = r), a;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.typedArray(r.diagnostics, $.is) && (r.only === void 0 || o.typedArray(r.only, o.string));
  }
  e.is = i;
})(De || (De = {}));
var Le;
(function(e) {
  function n(t, r, a) {
    var s = { title: t }, u = !0;
    return typeof r == "string" ? (u = !1, s.kind = r) : V.is(r) ? s.command = r : s.edit = r, u && a !== void 0 && (s.kind = a), s;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r && o.string(r.title) && (r.diagnostics === void 0 || o.typedArray(r.diagnostics, $.is)) && (r.kind === void 0 || o.string(r.kind)) && (r.edit !== void 0 || r.command !== void 0) && (r.command === void 0 || V.is(r.command)) && (r.isPreferred === void 0 || o.boolean(r.isPreferred)) && (r.edit === void 0 || ne.is(r.edit));
  }
  e.is = i;
})(Le || (Le = {}));
var Ne;
(function(e) {
  function n(t, r) {
    var a = { range: t };
    return o.defined(r) && (a.data = r), a;
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && _.is(r.range) && (o.undefined(r.command) || V.is(r.command));
  }
  e.is = i;
})(Ne || (Ne = {}));
var Oe;
(function(e) {
  function n(t, r) {
    return { tabSize: t, insertSpaces: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && o.uinteger(r.tabSize) && o.boolean(r.insertSpaces);
  }
  e.is = i;
})(Oe || (Oe = {}));
var xe;
(function(e) {
  function n(t, r, a) {
    return { range: t, target: r, data: a };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return o.defined(r) && _.is(r.range) && (o.undefined(r.target) || o.string(r.target));
  }
  e.is = i;
})(xe || (xe = {}));
var je;
(function(e) {
  function n(t, r) {
    return { range: t, parent: r };
  }
  e.create = n;
  function i(t) {
    var r = t;
    return r !== void 0 && _.is(r.range) && (r.parent === void 0 || e.is(r.parent));
  }
  e.is = i;
})(je || (je = {}));
var Fe;
(function(e) {
  function n(a, s, u, l) {
    return new ur(a, s, u, l);
  }
  e.create = n;
  function i(a) {
    var s = a;
    return !!(o.defined(s) && o.string(s.uri) && (o.undefined(s.languageId) || o.string(s.languageId)) && o.uinteger(s.lineCount) && o.func(s.getText) && o.func(s.positionAt) && o.func(s.offsetAt));
  }
  e.is = i;
  function t(a, s) {
    for (var u = a.getText(), l = r(s, function(y, D) {
      var x = y.range.start.line - D.range.start.line;
      return x === 0 ? y.range.start.character - D.range.start.character : x;
    }), c = u.length, v = l.length - 1; v >= 0; v--) {
      var g = l[v], b = a.offsetAt(g.range.start), h = a.offsetAt(g.range.end);
      if (h <= c)
        u = u.substring(0, b) + g.newText + u.substring(h, u.length);
      else
        throw new Error("Overlapping edit");
      c = b;
    }
    return u;
  }
  e.applyEdits = t;
  function r(a, s) {
    if (a.length <= 1)
      return a;
    var u = a.length / 2 | 0, l = a.slice(0, u), c = a.slice(u);
    r(l, s), r(c, s);
    for (var v = 0, g = 0, b = 0; v < l.length && g < c.length; ) {
      var h = s(l[v], c[g]);
      h <= 0 ? a[b++] = l[v++] : a[b++] = c[g++];
    }
    for (; v < l.length; )
      a[b++] = l[v++];
    for (; g < c.length; )
      a[b++] = c[g++];
    return a;
  }
})(Fe || (Fe = {}));
var ur = (
  /** @class */
  function() {
    function e(n, i, t, r) {
      this._uri = n, this._languageId = i, this._version = t, this._content = r, this._lineOffsets = void 0;
    }
    return Object.defineProperty(e.prototype, "uri", {
      get: function() {
        return this._uri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "languageId", {
      get: function() {
        return this._languageId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      get: function() {
        return this._version;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getText = function(n) {
      if (n) {
        var i = this.offsetAt(n.start), t = this.offsetAt(n.end);
        return this._content.substring(i, t);
      }
      return this._content;
    }, e.prototype.update = function(n, i) {
      this._content = n.text, this._version = i, this._lineOffsets = void 0;
    }, e.prototype.getLineOffsets = function() {
      if (this._lineOffsets === void 0) {
        for (var n = [], i = this._content, t = !0, r = 0; r < i.length; r++) {
          t && (n.push(r), t = !1);
          var a = i.charAt(r);
          t = a === "\r" || a === `
`, a === "\r" && r + 1 < i.length && i.charAt(r + 1) === `
` && r++;
        }
        t && i.length > 0 && n.push(i.length), this._lineOffsets = n;
      }
      return this._lineOffsets;
    }, e.prototype.positionAt = function(n) {
      n = Math.max(Math.min(n, this._content.length), 0);
      var i = this.getLineOffsets(), t = 0, r = i.length;
      if (r === 0)
        return T.create(0, n);
      for (; t < r; ) {
        var a = Math.floor((t + r) / 2);
        i[a] > n ? r = a : t = a + 1;
      }
      var s = t - 1;
      return T.create(s, n - i[s]);
    }, e.prototype.offsetAt = function(n) {
      var i = this.getLineOffsets();
      if (n.line >= i.length)
        return this._content.length;
      if (n.line < 0)
        return 0;
      var t = i[n.line], r = n.line + 1 < i.length ? i[n.line + 1] : this._content.length;
      return Math.max(Math.min(t + n.character, r), t);
    }, Object.defineProperty(e.prototype, "lineCount", {
      get: function() {
        return this.getLineOffsets().length;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
), o;
(function(e) {
  var n = Object.prototype.toString;
  function i(h) {
    return typeof h < "u";
  }
  e.defined = i;
  function t(h) {
    return typeof h > "u";
  }
  e.undefined = t;
  function r(h) {
    return h === !0 || h === !1;
  }
  e.boolean = r;
  function a(h) {
    return n.call(h) === "[object String]";
  }
  e.string = a;
  function s(h) {
    return n.call(h) === "[object Number]";
  }
  e.number = s;
  function u(h, y, D) {
    return n.call(h) === "[object Number]" && y <= h && h <= D;
  }
  e.numberRange = u;
  function l(h) {
    return n.call(h) === "[object Number]" && -2147483648 <= h && h <= 2147483647;
  }
  e.integer = l;
  function c(h) {
    return n.call(h) === "[object Number]" && 0 <= h && h <= 2147483647;
  }
  e.uinteger = c;
  function v(h) {
    return n.call(h) === "[object Function]";
  }
  e.func = v;
  function g(h) {
    return h !== null && typeof h == "object";
  }
  e.objectLiteral = g;
  function b(h, y) {
    return Array.isArray(h) && h.every(y);
  }
  e.typedArray = b;
})(o || (o = {}));
var cr = class {
  constructor(e, n, i) {
    this._languageId = e, this._worker = n, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
    const t = (a) => {
      let s = a.getLanguageId();
      if (s !== this._languageId)
        return;
      let u;
      this._listener[a.uri.toString()] = a.onDidChangeContent(() => {
        window.clearTimeout(u), u = window.setTimeout(() => this._doValidate(a.uri, s), 500);
      }), this._doValidate(a.uri, s);
    }, r = (a) => {
      f.editor.setModelMarkers(a, this._languageId, []);
      let s = a.uri.toString(), u = this._listener[s];
      u && (u.dispose(), delete this._listener[s]);
    };
    this._disposables.push(f.editor.onDidCreateModel(t)), this._disposables.push(f.editor.onWillDisposeModel(r)), this._disposables.push(
      f.editor.onDidChangeModelLanguage((a) => {
        r(a.model), t(a.model);
      })
    ), this._disposables.push(
      i((a) => {
        f.editor.getModels().forEach((s) => {
          s.getLanguageId() === this._languageId && (r(s), t(s));
        });
      })
    ), this._disposables.push({
      dispose: () => {
        f.editor.getModels().forEach(r);
        for (let a in this._listener)
          this._listener[a].dispose();
      }
    }), f.editor.getModels().forEach(t);
  }
  dispose() {
    this._disposables.forEach((e) => e && e.dispose()), this._disposables.length = 0;
  }
  _doValidate(e, n) {
    this._worker(e).then((i) => i.doValidation(e.toString())).then((i) => {
      const t = i.map((a) => fr(e, a));
      let r = f.editor.getModel(e);
      r && r.getLanguageId() === n && f.editor.setModelMarkers(r, n, t);
    }).then(void 0, (i) => {
    });
  }
};
function dr(e) {
  switch (e) {
    case N.Error:
      return f.MarkerSeverity.Error;
    case N.Warning:
      return f.MarkerSeverity.Warning;
    case N.Information:
      return f.MarkerSeverity.Info;
    case N.Hint:
      return f.MarkerSeverity.Hint;
    default:
      return f.MarkerSeverity.Info;
  }
}
function fr(e, n) {
  let i = typeof n.code == "number" ? String(n.code) : n.code;
  return {
    severity: dr(n.severity),
    startLineNumber: n.range.start.line + 1,
    startColumn: n.range.start.character + 1,
    endLineNumber: n.range.end.line + 1,
    endColumn: n.range.end.character + 1,
    message: n.message,
    code: i,
    source: n.source
  };
}
var lr = class {
  constructor(e, n) {
    this._worker = e, this._triggerCharacters = n;
  }
  get triggerCharacters() {
    return this._triggerCharacters;
  }
  provideCompletionItems(e, n, i, t) {
    const r = e.uri;
    return this._worker(r).then((a) => a.doComplete(r.toString(), M(n))).then((a) => {
      if (!a)
        return;
      const s = e.getWordUntilPosition(n), u = new f.Range(
        n.lineNumber,
        s.startColumn,
        n.lineNumber,
        s.endColumn
      ), l = a.items.map((c) => {
        const v = {
          label: c.label,
          insertText: c.insertText || c.label,
          sortText: c.sortText,
          filterText: c.filterText,
          documentation: c.documentation,
          detail: c.detail,
          command: vr(c.command),
          range: u,
          kind: hr(c.kind)
        };
        return c.textEdit && (gr(c.textEdit) ? v.range = {
          insert: C(c.textEdit.insert),
          replace: C(c.textEdit.replace)
        } : v.range = C(c.textEdit.range), v.insertText = c.textEdit.newText), c.additionalTextEdits && (v.additionalTextEdits = c.additionalTextEdits.map(X)), c.insertTextFormat === ae.Snippet && (v.insertTextRules = f.languages.CompletionItemInsertTextRule.InsertAsSnippet), v;
      });
      return {
        isIncomplete: a.isIncomplete,
        suggestions: l
      };
    });
  }
};
function M(e) {
  if (e)
    return { character: e.column - 1, line: e.lineNumber - 1 };
}
function Be(e) {
  if (e)
    return {
      start: {
        line: e.startLineNumber - 1,
        character: e.startColumn - 1
      },
      end: { line: e.endLineNumber - 1, character: e.endColumn - 1 }
    };
}
function C(e) {
  if (e)
    return new f.Range(
      e.start.line + 1,
      e.start.character + 1,
      e.end.line + 1,
      e.end.character + 1
    );
}
function gr(e) {
  return typeof e.insert < "u" && typeof e.replace < "u";
}
function hr(e) {
  const n = f.languages.CompletionItemKind;
  switch (e) {
    case p.Text:
      return n.Text;
    case p.Method:
      return n.Method;
    case p.Function:
      return n.Function;
    case p.Constructor:
      return n.Constructor;
    case p.Field:
      return n.Field;
    case p.Variable:
      return n.Variable;
    case p.Class:
      return n.Class;
    case p.Interface:
      return n.Interface;
    case p.Module:
      return n.Module;
    case p.Property:
      return n.Property;
    case p.Unit:
      return n.Unit;
    case p.Value:
      return n.Value;
    case p.Enum:
      return n.Enum;
    case p.Keyword:
      return n.Keyword;
    case p.Snippet:
      return n.Snippet;
    case p.Color:
      return n.Color;
    case p.File:
      return n.File;
    case p.Reference:
      return n.Reference;
  }
  return n.Property;
}
function X(e) {
  if (e)
    return {
      range: C(e.range),
      text: e.newText
    };
}
function vr(e) {
  return e && e.command === "editor.action.triggerSuggest" ? { id: e.command, title: e.title, arguments: e.arguments } : void 0;
}
var pr = class {
  constructor(e) {
    this._worker = e;
  }
  provideHover(e, n, i) {
    let t = e.uri;
    return this._worker(t).then((r) => r.doHover(t.toString(), M(n))).then((r) => {
      if (r)
        return {
          range: C(r.range),
          contents: _r(r.contents)
        };
    });
  }
};
function mr(e) {
  return e && typeof e == "object" && typeof e.kind == "string";
}
function We(e) {
  return typeof e == "string" ? {
    value: e
  } : mr(e) ? e.kind === "plaintext" ? {
    value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
  } : {
    value: e.value
  } : { value: "```" + e.language + `
` + e.value + "\n```\n" };
}
function _r(e) {
  if (e)
    return Array.isArray(e) ? e.map(We) : [We(e)];
}
var qr = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentHighlights(e, n, i) {
    const t = e.uri;
    return this._worker(t).then((r) => r.findDocumentHighlights(t.toString(), M(n))).then((r) => {
      if (r)
        return r.map((a) => ({
          range: C(a.range),
          kind: kr(a.kind)
        }));
    });
  }
};
function kr(e) {
  switch (e) {
    case U.Read:
      return f.languages.DocumentHighlightKind.Read;
    case U.Write:
      return f.languages.DocumentHighlightKind.Write;
    case U.Text:
      return f.languages.DocumentHighlightKind.Text;
  }
  return f.languages.DocumentHighlightKind.Text;
}
var Xr = class {
  constructor(e) {
    this._worker = e;
  }
  provideDefinition(e, n, i) {
    const t = e.uri;
    return this._worker(t).then((r) => r.findDefinition(t.toString(), M(n))).then((r) => {
      if (r)
        return [qe(r)];
    });
  }
};
function qe(e) {
  return {
    uri: f.Uri.parse(e.uri),
    range: C(e.range)
  };
}
var Jr = class {
  constructor(e) {
    this._worker = e;
  }
  provideReferences(e, n, i, t) {
    const r = e.uri;
    return this._worker(r).then((a) => a.findReferences(r.toString(), M(n))).then((a) => {
      if (a)
        return a.map(qe);
    });
  }
}, Yr = class {
  constructor(e) {
    this._worker = e;
  }
  provideRenameEdits(e, n, i, t) {
    const r = e.uri;
    return this._worker(r).then((a) => a.doRename(r.toString(), M(n), i)).then((a) => wr(a));
  }
};
function wr(e) {
  if (!e || !e.changes)
    return;
  let n = [];
  for (let i in e.changes) {
    const t = f.Uri.parse(i);
    for (let r of e.changes[i])
      n.push({
        resource: t,
        versionId: void 0,
        textEdit: {
          range: C(r.range),
          text: r.newText
        }
      });
  }
  return {
    edits: n
  };
}
var br = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentSymbols(e, n) {
    const i = e.uri;
    return this._worker(i).then((t) => t.findDocumentSymbols(i.toString())).then((t) => {
      if (t)
        return t.map((r) => Cr(r) ? Xe(r) : {
          name: r.name,
          detail: "",
          containerName: r.containerName,
          kind: Je(r.kind),
          range: C(r.location.range),
          selectionRange: C(r.location.range),
          tags: []
        });
    });
  }
};
function Cr(e) {
  return "children" in e;
}
function Xe(e) {
  return {
    name: e.name,
    detail: e.detail ?? "",
    kind: Je(e.kind),
    range: C(e.range),
    selectionRange: C(e.selectionRange),
    tags: e.tags ?? [],
    children: (e.children ?? []).map((n) => Xe(n))
  };
}
function Je(e) {
  let n = f.languages.SymbolKind;
  switch (e) {
    case m.File:
      return n.File;
    case m.Module:
      return n.Module;
    case m.Namespace:
      return n.Namespace;
    case m.Package:
      return n.Package;
    case m.Class:
      return n.Class;
    case m.Method:
      return n.Method;
    case m.Property:
      return n.Property;
    case m.Field:
      return n.Field;
    case m.Constructor:
      return n.Constructor;
    case m.Enum:
      return n.Enum;
    case m.Interface:
      return n.Interface;
    case m.Function:
      return n.Function;
    case m.Variable:
      return n.Variable;
    case m.Constant:
      return n.Constant;
    case m.String:
      return n.String;
    case m.Number:
      return n.Number;
    case m.Boolean:
      return n.Boolean;
    case m.Array:
      return n.Array;
  }
  return n.Function;
}
var $r = class {
  constructor(e) {
    this._worker = e;
  }
  provideLinks(e, n) {
    const i = e.uri;
    return this._worker(i).then((t) => t.findDocumentLinks(i.toString())).then((t) => {
      if (t)
        return {
          links: t.map((r) => ({
            range: C(r.range),
            url: r.target
          }))
        };
    });
  }
}, Er = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentFormattingEdits(e, n, i) {
    const t = e.uri;
    return this._worker(t).then((r) => r.format(t.toString(), null, Ye(n)).then((a) => {
      if (!(!a || a.length === 0))
        return a.map(X);
    }));
  }
}, Ar = class {
  constructor(e) {
    this._worker = e, this.canFormatMultipleRanges = !1;
  }
  provideDocumentRangeFormattingEdits(e, n, i, t) {
    const r = e.uri;
    return this._worker(r).then((a) => a.format(r.toString(), Be(n), Ye(i)).then((s) => {
      if (!(!s || s.length === 0))
        return s.map(X);
    }));
  }
};
function Ye(e) {
  return {
    tabSize: e.tabSize,
    insertSpaces: e.insertSpaces
  };
}
var Sr = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentColors(e, n) {
    const i = e.uri;
    return this._worker(i).then((t) => t.findDocumentColors(i.toString())).then((t) => {
      if (t)
        return t.map((r) => ({
          color: r.color,
          range: C(r.range)
        }));
    });
  }
  provideColorPresentations(e, n, i) {
    const t = e.uri;
    return this._worker(t).then(
      (r) => r.getColorPresentations(t.toString(), n.color, Be(n.range))
    ).then((r) => {
      if (r)
        return r.map((a) => {
          let s = {
            label: a.label
          };
          return a.textEdit && (s.textEdit = X(a.textEdit)), a.additionalTextEdits && (s.additionalTextEdits = a.additionalTextEdits.map(X)), s;
        });
    });
  }
}, Ir = class {
  constructor(e) {
    this._worker = e;
  }
  provideFoldingRanges(e, n, i) {
    const t = e.uri;
    return this._worker(t).then((r) => r.getFoldingRanges(t.toString(), n)).then((r) => {
      if (r)
        return r.map((a) => {
          const s = {
            start: a.startLine + 1,
            end: a.endLine + 1
          };
          return typeof a.kind < "u" && (s.kind = yr(a.kind)), s;
        });
    });
  }
};
function yr(e) {
  switch (e) {
    case W.Comment:
      return f.languages.FoldingRangeKind.Comment;
    case W.Imports:
      return f.languages.FoldingRangeKind.Imports;
    case W.Region:
      return f.languages.FoldingRangeKind.Region;
  }
}
var Tr = class {
  constructor(e) {
    this._worker = e;
  }
  provideSelectionRanges(e, n, i) {
    const t = e.uri;
    return this._worker(t).then(
      (r) => r.getSelectionRanges(
        t.toString(),
        n.map(M)
      )
    ).then((r) => {
      if (r)
        return r.map((a) => {
          const s = [];
          for (; a; )
            s.push({ range: C(a.range) }), a = a.parent;
          return s;
        });
    });
  }
};
function Pr(e, n) {
  n === void 0 && (n = !1);
  var i = e.length, t = 0, r = "", a = 0, s = 16, u = 0, l = 0, c = 0, v = 0, g = 0;
  function b(d, E) {
    for (var I = 0, A = 0; I < d || !E; ) {
      var k = e.charCodeAt(t);
      if (k >= 48 && k <= 57)
        A = A * 16 + k - 48;
      else if (k >= 65 && k <= 70)
        A = A * 16 + k - 65 + 10;
      else if (k >= 97 && k <= 102)
        A = A * 16 + k - 97 + 10;
      else
        break;
      t++, I++;
    }
    return I < d && (A = -1), A;
  }
  function h(d) {
    t = d, r = "", a = 0, s = 16, g = 0;
  }
  function y() {
    var d = t;
    if (e.charCodeAt(t) === 48)
      t++;
    else
      for (t++; t < e.length && L(e.charCodeAt(t)); )
        t++;
    if (t < e.length && e.charCodeAt(t) === 46)
      if (t++, t < e.length && L(e.charCodeAt(t)))
        for (t++; t < e.length && L(e.charCodeAt(t)); )
          t++;
      else
        return g = 3, e.substring(d, t);
    var E = t;
    if (t < e.length && (e.charCodeAt(t) === 69 || e.charCodeAt(t) === 101))
      if (t++, (t < e.length && e.charCodeAt(t) === 43 || e.charCodeAt(t) === 45) && t++, t < e.length && L(e.charCodeAt(t))) {
        for (t++; t < e.length && L(e.charCodeAt(t)); )
          t++;
        E = t;
      } else
        g = 3;
    return e.substring(d, E);
  }
  function D() {
    for (var d = "", E = t; ; ) {
      if (t >= i) {
        d += e.substring(E, t), g = 2;
        break;
      }
      var I = e.charCodeAt(t);
      if (I === 34) {
        d += e.substring(E, t), t++;
        break;
      }
      if (I === 92) {
        if (d += e.substring(E, t), t++, t >= i) {
          g = 2;
          break;
        }
        var A = e.charCodeAt(t++);
        switch (A) {
          case 34:
            d += '"';
            break;
          case 92:
            d += "\\";
            break;
          case 47:
            d += "/";
            break;
          case 98:
            d += "\b";
            break;
          case 102:
            d += "\f";
            break;
          case 110:
            d += `
`;
            break;
          case 114:
            d += "\r";
            break;
          case 116:
            d += "	";
            break;
          case 117:
            var k = b(4, !0);
            k >= 0 ? d += String.fromCharCode(k) : g = 4;
            break;
          default:
            g = 5;
        }
        E = t;
        continue;
      }
      if (I >= 0 && I <= 31)
        if (j(I)) {
          d += e.substring(E, t), g = 2;
          break;
        } else
          g = 6;
      t++;
    }
    return d;
  }
  function x() {
    if (r = "", g = 0, a = t, l = u, v = c, t >= i)
      return a = i, s = 17;
    var d = e.charCodeAt(t);
    if (K(d)) {
      do
        t++, r += String.fromCharCode(d), d = e.charCodeAt(t);
      while (K(d));
      return s = 15;
    }
    if (j(d))
      return t++, r += String.fromCharCode(d), d === 13 && e.charCodeAt(t) === 10 && (t++, r += `
`), u++, c = t, s = 14;
    switch (d) {
      case 123:
        return t++, s = 1;
      case 125:
        return t++, s = 2;
      case 91:
        return t++, s = 3;
      case 93:
        return t++, s = 4;
      case 58:
        return t++, s = 6;
      case 44:
        return t++, s = 5;
      case 34:
        return t++, r = D(), s = 10;
      case 47:
        var E = t - 1;
        if (e.charCodeAt(t + 1) === 47) {
          for (t += 2; t < i && !j(e.charCodeAt(t)); )
            t++;
          return r = e.substring(E, t), s = 12;
        }
        if (e.charCodeAt(t + 1) === 42) {
          t += 2;
          for (var I = i - 1, A = !1; t < I; ) {
            var k = e.charCodeAt(t);
            if (k === 42 && e.charCodeAt(t + 1) === 47) {
              t += 2, A = !0;
              break;
            }
            t++, j(k) && (k === 13 && e.charCodeAt(t) === 10 && t++, u++, c = t);
          }
          return A || (t++, g = 1), r = e.substring(E, t), s = 13;
        }
        return r += String.fromCharCode(d), t++, s = 16;
      case 45:
        if (r += String.fromCharCode(d), t++, t === i || !L(e.charCodeAt(t)))
          return s = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return r += y(), s = 11;
      default:
        for (; t < i && Ze(d); )
          t++, d = e.charCodeAt(t);
        if (a !== t) {
          switch (r = e.substring(a, t), r) {
            case "true":
              return s = 8;
            case "false":
              return s = 9;
            case "null":
              return s = 7;
          }
          return s = 16;
        }
        return r += String.fromCharCode(d), t++, s = 16;
    }
  }
  function Ze(d) {
    if (K(d) || j(d))
      return !1;
    switch (d) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function Ke() {
    var d;
    do
      d = x();
    while (d >= 12 && d <= 15);
    return d;
  }
  return {
    setPosition: h,
    getPosition: function() {
      return t;
    },
    scan: n ? Ke : x,
    getToken: function() {
      return s;
    },
    getTokenValue: function() {
      return r;
    },
    getTokenOffset: function() {
      return a;
    },
    getTokenLength: function() {
      return t - a;
    },
    getTokenStartLine: function() {
      return l;
    },
    getTokenStartCharacter: function() {
      return a - v;
    },
    getTokenError: function() {
      return g;
    }
  };
}
function K(e) {
  return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function j(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function L(e) {
  return e >= 48 && e <= 57;
}
var Ue;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(Ue || (Ue = {}));
var Rr = Pr;
function Mr(e) {
  return {
    getInitialState: () => new Ge(null, null, !1, null),
    tokenize: (n, i) => Vr(e, n, i)
  };
}
var Ve = "delimiter.bracket.json", He = "delimiter.array.json", Dr = "delimiter.colon.json", Lr = "delimiter.comma.json", Nr = "keyword.json", Or = "keyword.json", xr = "string.value.json", jr = "number.json", Fr = "string.key.json", Wr = "comment.block.json", Ur = "comment.line.json", F = class $e {
  constructor(n, i) {
    this.parent = n, this.type = i;
  }
  static pop(n) {
    return n ? n.parent : null;
  }
  static push(n, i) {
    return new $e(n, i);
  }
  static equals(n, i) {
    if (!n && !i)
      return !0;
    if (!n || !i)
      return !1;
    for (; n && i; ) {
      if (n === i)
        return !0;
      if (n.type !== i.type)
        return !1;
      n = n.parent, i = i.parent;
    }
    return !0;
  }
}, Ge = class se {
  constructor(n, i, t, r) {
    this._state = n, this.scanError = i, this.lastWasColon = t, this.parents = r;
  }
  clone() {
    return new se(this._state, this.scanError, this.lastWasColon, this.parents);
  }
  equals(n) {
    return n === this ? !0 : !n || !(n instanceof se) ? !1 : this.scanError === n.scanError && this.lastWasColon === n.lastWasColon && F.equals(this.parents, n.parents);
  }
  getStateData() {
    return this._state;
  }
  setStateData(n) {
    this._state = n;
  }
};
function Vr(e, n, i, t = 0) {
  let r = 0, a = !1;
  switch (i.scanError) {
    case 2:
      n = '"' + n, r = 1;
      break;
    case 1:
      n = "/*" + n, r = 2;
      break;
  }
  const s = Rr(n);
  let u = i.lastWasColon, l = i.parents;
  const c = {
    tokens: [],
    endState: i.clone()
  };
  for (; ; ) {
    let v = t + s.getPosition(), g = "";
    const b = s.scan();
    if (b === 17)
      break;
    if (v === t + s.getPosition())
      throw new Error(
        "Scanner did not advance, next 3 characters are: " + n.substr(s.getPosition(), 3)
      );
    switch (a && (v -= r), a = r > 0, b) {
      case 1:
        l = F.push(
          l,
          0
          /* Object */
        ), g = Ve, u = !1;
        break;
      case 2:
        l = F.pop(l), g = Ve, u = !1;
        break;
      case 3:
        l = F.push(
          l,
          1
          /* Array */
        ), g = He, u = !1;
        break;
      case 4:
        l = F.pop(l), g = He, u = !1;
        break;
      case 6:
        g = Dr, u = !0;
        break;
      case 5:
        g = Lr, u = !1;
        break;
      case 8:
      case 9:
        g = Nr, u = !1;
        break;
      case 7:
        g = Or, u = !1;
        break;
      case 10:
        const y = (l ? l.type : 0) === 1;
        g = u || y ? xr : Fr, u = !1;
        break;
      case 11:
        g = jr, u = !1;
        break;
    }
    if (e)
      switch (b) {
        case 12:
          g = Ur;
          break;
        case 13:
          g = Wr;
          break;
      }
    c.endState = new Ge(
      i.getStateData(),
      s.getTokenError(),
      u,
      l
    ), c.tokens.push({
      startIndex: v,
      scopes: g
    });
  }
  return c;
}
var S;
function Gr() {
  return new Promise((e, n) => {
    if (!S)
      return n("JSON not registered!");
    e(S);
  });
}
var Hr = class extends cr {
  constructor(e, n, i) {
    super(e, n, i.onDidChange), this._disposables.push(
      f.editor.onWillDisposeModel((t) => {
        this._resetSchema(t.uri);
      })
    ), this._disposables.push(
      f.editor.onDidChangeModelLanguage((t) => {
        this._resetSchema(t.model.uri);
      })
    );
  }
  _resetSchema(e) {
    this._worker().then((n) => {
      n.resetSchema(e.toString());
    });
  }
};
function Qr(e) {
  const n = [], i = [], t = new or(e);
  n.push(t), S = (...s) => t.getLanguageServiceWorker(...s);
  function r() {
    const { languageId: s, modeConfiguration: u } = e;
    Qe(i), u.documentFormattingEdits && i.push(
      f.languages.registerDocumentFormattingEditProvider(
        s,
        new Er(S)
      )
    ), u.documentRangeFormattingEdits && i.push(
      f.languages.registerDocumentRangeFormattingEditProvider(
        s,
        new Ar(S)
      )
    ), u.completionItems && i.push(
      f.languages.registerCompletionItemProvider(
        s,
        new lr(S, [" ", ":", '"'])
      )
    ), u.hovers && i.push(
      f.languages.registerHoverProvider(s, new pr(S))
    ), u.documentSymbols && i.push(
      f.languages.registerDocumentSymbolProvider(
        s,
        new br(S)
      )
    ), u.tokens && i.push(f.languages.setTokensProvider(s, Mr(!0))), u.colors && i.push(
      f.languages.registerColorProvider(
        s,
        new Sr(S)
      )
    ), u.foldingRanges && i.push(
      f.languages.registerFoldingRangeProvider(
        s,
        new Ir(S)
      )
    ), u.diagnostics && i.push(new Hr(s, S, e)), u.selectionRanges && i.push(
      f.languages.registerSelectionRangeProvider(
        s,
        new Tr(S)
      )
    );
  }
  r(), n.push(f.languages.setLanguageConfiguration(e.languageId, zr));
  let a = e.modeConfiguration;
  return e.onDidChange((s) => {
    s.modeConfiguration !== a && (a = s.modeConfiguration, r());
  }), n.push(ze(i)), ze(n);
}
function ze(e) {
  return { dispose: () => Qe(e) };
}
function Qe(e) {
  for (; e.length; )
    e.pop().dispose();
}
var zr = {
  wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string"] },
    { open: "[", close: "]", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] }
  ]
};
export {
  lr as CompletionAdapter,
  Xr as DefinitionAdapter,
  cr as DiagnosticsAdapter,
  Sr as DocumentColorAdapter,
  Er as DocumentFormattingEditProvider,
  qr as DocumentHighlightAdapter,
  $r as DocumentLinkAdapter,
  Ar as DocumentRangeFormattingEditProvider,
  br as DocumentSymbolAdapter,
  Ir as FoldingRangeAdapter,
  pr as HoverAdapter,
  Jr as ReferenceAdapter,
  Yr as RenameAdapter,
  Tr as SelectionRangeAdapter,
  or as WorkerManager,
  M as fromPosition,
  Be as fromRange,
  Gr as getWorker,
  Qr as setupMode,
  C as toRange,
  X as toTextEdit
};
