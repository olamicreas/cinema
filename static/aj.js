!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(f, t) {
    function e(t, e) {
        return e.toUpperCase()
    }
    var u = []
      , h = u.slice
      , m = u.concat
      , a = u.push
      , s = u.indexOf
      , i = {}
      , n = i.toString
      , g = i.hasOwnProperty
      , v = {}
      , r = "1.11.1"
      , T = function(t, e) {
        return new T.fn.init(t,e)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , l = /^-ms-/
      , c = /-([\da-z])/gi;
    function d(t) {
        var e = t.length
          , i = T.type(t);
        return "function" !== i && !T.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
    }
    T.fn = T.prototype = {
        jquery: r,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function() {
            return h.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : h.call(this)
        },
        pushStack: function(t) {
            var e = T.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return T.each(this, t, e)
        },
        map: function(i) {
            return this.pushStack(T.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: u.sort,
        splice: u.splice
    },
    T.extend = T.fn.extend = function() {
        var t, e, i, n, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || T.isFunction(o) || (o = {}),
        a === l && (o = this,
        a--); a < l; a++)
            if (null != (s = arguments[a]))
                for (n in s)
                    t = o[n],
                    o !== (i = s[n]) && (c && i && (T.isPlainObject(i) || (e = T.isArray(i))) ? (r = e ? (e = !1,
                    t && T.isArray(t) ? t : []) : t && T.isPlainObject(t) ? t : {},
                    o[n] = T.extend(c, r, i)) : void 0 !== i && (o[n] = i));
        return o
    }
    ,
    T.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === T.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === T.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !T.isArray(t) && 0 <= t - parseFloat(t)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== T.type(t) || t.nodeType || T.isWindow(t))
                return !1;
            try {
                if (t.constructor && !g.call(t, "constructor") && !g.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            if (v.ownLast)
                for (e in t)
                    return g.call(t, e);
            for (e in t)
                ;
            return void 0 === e || g.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[n.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            t && T.trim(t) && (f.execScript || function(t) {
                f.eval.call(f, t)
            }
            )(t)
        },
        camelCase: function(t) {
            return t.replace(l, "ms-").replace(c, e)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var n = 0
              , s = t.length
              , r = d(t);
            if (i) {
                if (r)
                    for (; n < s && !1 !== e.apply(t[n], i); n++)
                        ;
                else
                    for (n in t)
                        if (!1 === e.apply(t[n], i))
                            break
            } else if (r)
                for (; n < s && !1 !== e.call(t[n], n, t[n]); n++)
                    ;
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(o, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (d(Object(t)) ? T.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)),
            i
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (s)
                    return s.call(e, t, i);
                for (n = e.length,
                i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t)
                        return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; )
                t[s++] = e[n++];
            if (i != i)
                for (; void 0 !== e[n]; )
                    t[s++] = e[n++];
            return t.length = s,
            t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, r = t.length, o = !i; s < r; s++)
                !e(t[s], s) != o && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s = 0, r = t.length, o = [];
            if (d(t))
                for (; s < r; s++)
                    null != (n = e(t[s], s, i)) && o.push(n);
            else
                for (s in t)
                    null != (n = e(t[s], s, i)) && o.push(n);
            return m.apply([], o)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e],
            e = t,
            t = s),
            T.isFunction(t) ? (i = h.call(arguments, 2),
            (n = function() {
                return t.apply(e || this, i.concat(h.call(arguments)))
            }
            ).guid = t.guid = t.guid || T.guid++,
            n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: v
    }),
    T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function(i) {
        function u(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }
        var t, f, b, r, n, m, d, g, x, c, h, v, w, s, y, _, o, a, T, S = "sizzle" + -new Date, C = i.document, k = 0, p = 0, l = st(), P = st(), E = st(), A = function(t, e) {
            return t === e && (h = !0),
            0
        }, O = "undefined", D = {}.hasOwnProperty, e = [], N = e.pop, M = e.push, R = e.push, F = e.slice, L = e.indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (this[e] === t)
                    return e;
            return -1
        }
        , I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", z = "[\\x20\\t\\r\\n\\f]", $ = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = $.replace("w", "w#"), j = "\\[" + z + "*(" + $ + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + z + "*\\]", X = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", B = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$","g"), q = new RegExp("^" + z + "*," + z + "*"), V = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"), Y = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]","g"), W = new RegExp(X), U = new RegExp("^" + H + "$"), G = {
            ID: new RegExp("^#(" + $ + ")"),
            CLASS: new RegExp("^\\.(" + $ + ")"),
            TAG: new RegExp("^(" + $.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + j),
            PSEUDO: new RegExp("^" + X),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)","i")
        }, Q = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = /'|\\/g, it = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)","ig");
        try {
            R.apply(e = F.call(C.childNodes), C.childNodes),
            e[C.childNodes.length].nodeType
        } catch (t) {
            R = {
                apply: e.length ? function(t, e) {
                    M.apply(t, F.call(e))
                }
                : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }
            }
        }
        function nt(t, e, i, n) {
            var s, r, o, a, l, c, h, u, d, p;
            if ((e ? e.ownerDocument || e : C) !== w && v(e),
            i = i || [],
            !t || "string" != typeof t)
                return i;
            if (1 !== (a = (e = e || w).nodeType) && 9 !== a)
                return [];
            if (y && !n) {
                if (s = J.exec(t))
                    if (o = s[1]) {
                        if (9 === a) {
                            if (!(r = e.getElementById(o)) || !r.parentNode)
                                return i;
                            if (r.id === o)
                                return i.push(r),
                                i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && T(e, r) && r.id === o)
                            return i.push(r),
                            i
                    } else {
                        if (s[2])
                            return R.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((o = s[3]) && f.getElementsByClassName && e.getElementsByClassName)
                            return R.apply(i, e.getElementsByClassName(o)),
                            i
                    }
                if (f.qsa && (!_ || !_.test(t))) {
                    if (u = h = S,
                    d = e,
                    p = 9 === a && t,
                    1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = m(t),
                        (h = e.getAttribute("id")) ? u = h.replace(et, "\\$&") : e.setAttribute("id", u),
                        u = "[id='" + u + "'] ",
                        l = c.length; l--; )
                            c[l] = u + dt(c[l]);
                        d = tt.test(t) && ht(e.parentNode) || e,
                        p = c.join(",")
                    }
                    if (p)
                        try {
                            return R.apply(i, d.querySelectorAll(p)),
                            i
                        } catch (t) {} finally {
                            h || e.removeAttribute("id")
                        }
                }
            }
            return g(t.replace(B, "$1"), e, i, n)
        }
        function st() {
            var i = [];
            function n(t, e) {
                return i.push(t + " ") > b.cacheLength && delete n[i.shift()],
                n[t + " "] = e
            }
            return n
        }
        function rt(t) {
            return t[S] = !0,
            t
        }
        function ot(t) {
            var e = w.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function at(t, e) {
            for (var i = t.split("|"), n = t.length; n--; )
                b.attrHandle[i[n]] = e
        }
        function lt(t, e) {
            var i = e && t
              , n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function ct(o) {
            return rt(function(r) {
                return r = +r,
                rt(function(t, e) {
                    for (var i, n = o([], t.length, r), s = n.length; s--; )
                        t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }
        function ht(t) {
            return t && typeof t.getElementsByTagName !== O && t
        }
        for (t in f = nt.support = {},
        n = nt.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        v = nt.setDocument = function(t) {
            var e, l = t ? t.ownerDocument || t : C, i = l.defaultView;
            return l !== w && 9 === l.nodeType && l.documentElement ? (s = (w = l).documentElement,
            y = !n(l),
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                v()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                v()
            })),
            f.attributes = ot(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            f.getElementsByTagName = ot(function(t) {
                return t.appendChild(l.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = K.test(l.getElementsByClassName) && ot(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                t.firstChild.className = "i",
                2 === t.getElementsByClassName("i").length
            }),
            f.getById = ot(function(t) {
                return s.appendChild(t).id = S,
                !l.getElementsByName || !l.getElementsByName(S).length
            }),
            f.getById ? (b.find.ID = function(t, e) {
                if (typeof e.getElementById !== O && y) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            b.filter.ID = function(t) {
                var e = t.replace(it, u);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete b.find.ID,
            b.filter.ID = function(t) {
                var i = t.replace(it, u);
                return function(t) {
                    var e = typeof t.getAttributeNode !== O && t.getAttributeNode("id");
                    return e && e.value === i
                }
            }
            ),
            b.find.TAG = f.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== O ? e.getElementsByTagName(t) : void 0
            }
            : function(t, e) {
                var i, n = [], s = 0, r = e.getElementsByTagName(t);
                if ("*" !== t)
                    return r;
                for (; i = r[s++]; )
                    1 === i.nodeType && n.push(i);
                return n
            }
            ,
            b.find.CLASS = f.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== O && y ? e.getElementsByClassName(t) : void 0
            }
            ,
            o = [],
            _ = [],
            (f.qsa = K.test(l.querySelectorAll)) && (ot(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowclip^='']").length && _.push("[*^$]=" + z + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || _.push("\\[" + z + "*(?:value|" + I + ")"),
                t.querySelectorAll(":checked").length || _.push(":checked")
            }),
            ot(function(t) {
                var e = l.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && _.push("name" + z + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                _.push(",.*:")
            })),
            (f.matchesSelector = K.test(a = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ot(function(t) {
                f.disconnectedMatch = a.call(t, "div"),
                a.call(t, "[s!='']:x"),
                o.push("!=", X)
            }),
            _ = _.length && new RegExp(_.join("|")),
            o = o.length && new RegExp(o.join("|")),
            e = K.test(s.compareDocumentPosition),
            T = e || K.test(s.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t
                  , n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            A = e ? function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === C && T(C, t) ? -1 : e === l || e.ownerDocument === C && T(C, e) ? 1 : c ? L.call(c, t) - L.call(c, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var i, n = 0, s = t.parentNode, r = e.parentNode, o = [t], a = [e];
                if (!s || !r)
                    return t === l ? -1 : e === l ? 1 : s ? -1 : r ? 1 : c ? L.call(c, t) - L.call(c, e) : 0;
                if (s === r)
                    return lt(t, e);
                for (i = t; i = i.parentNode; )
                    o.unshift(i);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (; o[n] === a[n]; )
                    n++;
                return n ? lt(o[n], a[n]) : o[n] === C ? -1 : a[n] === C ? 1 : 0
            }
            ,
            l) : w
        }
        ,
        nt.matches = function(t, e) {
            return nt(t, null, null, e)
        }
        ,
        nt.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== w && v(t),
            e = e.replace(Y, "='$1']"),
            !(!f.matchesSelector || !y || o && o.test(e) || _ && _.test(e)))
                try {
                    var i = a.call(t, e);
                    if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return 0 < nt(e, w, null, [t]).length
        }
        ,
        nt.contains = function(t, e) {
            return (t.ownerDocument || t) !== w && v(t),
            T(t, e)
        }
        ,
        nt.attr = function(t, e) {
            (t.ownerDocument || t) !== w && v(t);
            var i = b.attrHandle[e.toLowerCase()]
              , n = i && D.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
            return void 0 !== n ? n : f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        ,
        nt.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        nt.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (h = !f.detectDuplicates,
            c = !f.sortStable && t.slice(0),
            t.sort(A),
            h) {
                for (; e = t[s++]; )
                    e === t[s] && (n = i.push(s));
                for (; n--; )
                    t.splice(i[n], 1)
            }
            return c = null,
            t
        }
        ,
        r = nt.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += r(t)
                } else if (3 === s || 4 === s)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += r(e);
            return i
        }
        ,
        (b = nt.selectors = {
            cacheLength: 50,
            createPseudo: rt,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(it, u),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(it, u),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && W.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                    t[2] = i.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(it, u).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = l[t + " "];
                    return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && l(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== O && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(i, n, s) {
                    return function(t) {
                        var e = nt.attr(t, i);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === s : "!=" === n ? e !== s : "^=" === n ? s && 0 === e.indexOf(s) : "*=" === n ? s && -1 < e.indexOf(s) : "$=" === n ? s && e.slice(-s.length) === s : "~=" === n ? -1 < (" " + e + " ").indexOf(s) : "|=" === n && (e === s || e.slice(0, s.length + 1) === s + "-"))
                    }
                },
                CHILD: function(p, t, e, f, m) {
                    var g = "nth" !== p.slice(0, 3)
                      , v = "last" !== p.slice(-4)
                      , y = "of-type" === t;
                    return 1 === f && 0 === m ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, i) {
                        var n, s, r, o, a, l, c = g != v ? "nextSibling" : "previousSibling", h = t.parentNode, u = y && t.nodeName.toLowerCase(), d = !i && !y;
                        if (h) {
                            if (g) {
                                for (; c; ) {
                                    for (r = t; r = r[c]; )
                                        if (y ? r.nodeName.toLowerCase() === u : 1 === r.nodeType)
                                            return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? h.firstChild : h.lastChild],
                            v && d) {
                                for (a = (n = (s = h[S] || (h[S] = {}))[p] || [])[0] === k && n[1],
                                o = n[0] === k && n[2],
                                r = a && h.childNodes[a]; r = ++a && r && r[c] || (o = a = 0) || l.pop(); )
                                    if (1 === r.nodeType && ++o && r === t) {
                                        s[p] = [k, a, o];
                                        break
                                    }
                            } else if (d && (n = (t[S] || (t[S] = {}))[p]) && n[0] === k)
                                o = n[1];
                            else
                                for (; (r = ++a && r && r[c] || (o = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++o || (d && ((r[S] || (r[S] = {}))[p] = [k, o]),
                                r !== t)); )
                                    ;
                            return (o -= m) === f || o % f == 0 && 0 <= o / f
                        }
                    }
                },
                PSEUDO: function(t, r) {
                    var e, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                    return o[S] ? o(r) : 1 < o.length ? (e = [t, t, "", r],
                    b.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, e) {
                        for (var i, n = o(t, r), s = n.length; s--; )
                            t[i = L.call(t, n[s])] = !(e[i] = n[s])
                    }) : function(t) {
                        return o(t, 0, e)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: rt(function(t) {
                    var n = []
                      , s = []
                      , a = d(t.replace(B, "$1"));
                    return a[S] ? rt(function(t, e, i, n) {
                        for (var s, r = a(t, null, n, []), o = t.length; o--; )
                            (s = r[o]) && (t[o] = !(e[o] = s))
                    }) : function(t, e, i) {
                        return n[0] = t,
                        a(n, null, i, s),
                        !s.pop()
                    }
                }),
                has: rt(function(e) {
                    return function(t) {
                        return 0 < nt(e, t).length
                    }
                }),
                contains: rt(function(e) {
                    return function(t) {
                        return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
                    }
                }),
                lang: rt(function(i) {
                    return U.test(i || "") || nt.error("unsupported lang: " + i),
                    i = i.replace(it, u).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var e = i.location && i.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === s
                },
                focus: function(t) {
                    return t === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return Z.test(t.nodeName)
                },
                input: function(t) {
                    return Q.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(t, e) {
                    return [e - 1]
                }),
                eq: ct(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: ct(function(t, e) {
                    for (var i = 0; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                odd: ct(function(t, e) {
                    for (var i = 1; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                lt: ct(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; 0 <= --n; )
                        t.push(n);
                    return t
                }),
                gt: ct(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            b.pseudos[t] = function(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }(t);
        function ut() {}
        function dt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)
                n += t[e].value;
            return n
        }
        function pt(o, t, e) {
            var a = t.dir
              , l = e && "parentNode" === a
              , c = p++;
            return t.first ? function(t, e, i) {
                for (; t = t[a]; )
                    if (1 === t.nodeType || l)
                        return o(t, e, i)
            }
            : function(t, e, i) {
                var n, s, r = [k, c];
                if (i) {
                    for (; t = t[a]; )
                        if ((1 === t.nodeType || l) && o(t, e, i))
                            return !0
                } else
                    for (; t = t[a]; )
                        if (1 === t.nodeType || l) {
                            if ((n = (s = t[S] || (t[S] = {}))[a]) && n[0] === k && n[1] === c)
                                return r[2] = n[2];
                            if ((s[a] = r)[2] = o(t, e, i))
                                return !0
                        }
            }
        }
        function ft(s) {
            return 1 < s.length ? function(t, e, i) {
                for (var n = s.length; n--; )
                    if (!s[n](t, e, i))
                        return !1;
                return !0
            }
            : s[0]
        }
        function mt(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++)
                !(r = t[a]) || i && !i(r, n, s) || (o.push(r),
                c && e.push(a));
            return o
        }
        function gt(p, f, m, g, v, t) {
            return g && !g[S] && (g = gt(g)),
            v && !v[S] && (v = gt(v, t)),
            rt(function(t, e, i, n) {
                var s, r, o, a = [], l = [], c = e.length, h = t || function(t, e, i) {
                    for (var n = 0, s = e.length; n < s; n++)
                        nt(t, e[n], i);
                    return i
                }(f || "*", i.nodeType ? [i] : i, []), u = !p || !t && f ? h : mt(h, a, p, i, n), d = m ? v || (t ? p : c || g) ? [] : e : u;
                if (m && m(u, d, i, n),
                g)
                    for (s = mt(d, l),
                    g(s, [], i, n),
                    r = s.length; r--; )
                        (o = s[r]) && (d[l[r]] = !(u[l[r]] = o));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (s = [],
                            r = d.length; r--; )
                                (o = d[r]) && s.push(u[r] = o);
                            v(null, d = [], s, n)
                        }
                        for (r = d.length; r--; )
                            (o = d[r]) && -1 < (s = v ? L.call(t, o) : a[r]) && (t[s] = !(e[s] = o))
                    }
                } else
                    d = mt(d === e ? d.splice(c, d.length) : d),
                    v ? v(null, e, d, n) : R.apply(e, d)
            })
        }
        function vt(g, v) {
            function t(t, e, i, n, s) {
                var r, o, a, l = 0, c = "0", h = t && [], u = [], d = x, p = t || _ && b.find.TAG("*", s), f = k += null == d ? 1 : Math.random() || .1, m = p.length;
                for (s && (x = e !== w && e); c !== m && null != (r = p[c]); c++) {
                    if (_ && r) {
                        for (o = 0; a = g[o++]; )
                            if (a(r, e, i)) {
                                n.push(r);
                                break
                            }
                        s && (k = f)
                    }
                    y && ((r = !a && r) && l--,
                    t && h.push(r))
                }
                if (l += c,
                y && c !== l) {
                    for (o = 0; a = v[o++]; )
                        a(h, u, e, i);
                    if (t) {
                        if (0 < l)
                            for (; c--; )
                                h[c] || u[c] || (u[c] = N.call(n));
                        u = mt(u)
                    }
                    R.apply(n, u),
                    s && !t && 0 < u.length && 1 < l + v.length && nt.uniqueSort(n)
                }
                return s && (k = f,
                x = d),
                h
            }
            var y = 0 < v.length
              , _ = 0 < g.length;
            return y ? rt(t) : t
        }
        return ut.prototype = b.filters = b.pseudos,
        b.setFilters = new ut,
        m = nt.tokenize = function(t, e) {
            var i, n, s, r, o, a, l, c = P[t + " "];
            if (c)
                return e ? 0 : c.slice(0);
            for (o = t,
            a = [],
            l = b.preFilter; o; ) {
                for (r in i && !(n = q.exec(o)) || (n && (o = o.slice(n[0].length) || o),
                a.push(s = [])),
                i = !1,
                (n = V.exec(o)) && (i = n.shift(),
                s.push({
                    value: i,
                    type: n[0].replace(B, " ")
                }),
                o = o.slice(i.length)),
                b.filter)
                    !(n = G[r].exec(o)) || l[r] && !(n = l[r](n)) || (i = n.shift(),
                    s.push({
                        value: i,
                        type: r,
                        matches: n
                    }),
                    o = o.slice(i.length));
                if (!i)
                    break
            }
            return e ? o.length : o ? nt.error(t) : P(t, a).slice(0)
        }
        ,
        d = nt.compile = function(t, e) {
            var i, n = [], s = [], r = E[t + " "];
            if (!r) {
                for (i = (e = e || m(t)).length; i--; )
                    (r = function t(e) {
                        for (var n, i, s, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], l = o ? 1 : 0, c = pt(function(t) {
                            return t === n
                        }, a, !0), h = pt(function(t) {
                            return -1 < L.call(n, t)
                        }, a, !0), u = [function(t, e, i) {
                            return !o && (i || e !== x) || ((n = e).nodeType ? c : h)(t, e, i)
                        }
                        ]; l < r; l++)
                            if (i = b.relative[e[l].type])
                                u = [pt(ft(u), i)];
                            else {
                                if ((i = b.filter[e[l].type].apply(null, e[l].matches))[S]) {
                                    for (s = ++l; s < r && !b.relative[e[s].type]; s++)
                                        ;
                                    return gt(1 < l && ft(u), 1 < l && dt(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(B, "$1"), i, l < s && t(e.slice(l, s)), s < r && t(e = e.slice(s)), s < r && dt(e))
                                }
                                u.push(i)
                            }
                        return ft(u)
                    }(e[i]))[S] ? n.push(r) : s.push(r);
                (r = E(t, vt(s, n))).selector = t
            }
            return r
        }
        ,
        g = nt.select = function(t, e, i, n) {
            var s, r, o, a, l, c = "function" == typeof t && t, h = !n && m(t = c.selector || t);
            if (i = i || [],
            1 === h.length) {
                if (2 < (r = h[0] = h[0].slice(0)).length && "ID" === (o = r[0]).type && f.getById && 9 === e.nodeType && y && b.relative[r[1].type]) {
                    if (!(e = (b.find.ID(o.matches[0].replace(it, u), e) || [])[0]))
                        return i;
                    c && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (s = G.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s],
                !b.relative[a = o.type]); )
                    if ((l = b.find[a]) && (n = l(o.matches[0].replace(it, u), tt.test(r[0].type) && ht(e.parentNode) || e))) {
                        if (r.splice(s, 1),
                        !(t = n.length && dt(r)))
                            return R.apply(i, n),
                            i;
                        break
                    }
            }
            return (c || d(t, h))(n, e, !y, i, tt.test(t) && ht(e.parentNode) || e),
            i
        }
        ,
        f.sortStable = S.split("").sort(A).join("") === S,
        f.detectDuplicates = !!h,
        v(),
        f.sortDetached = ot(function(t) {
            return 1 & t.compareDocumentPosition(w.createElement("div"))
        }),
        ot(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || at("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        f.attributes && ot(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || at("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        ot(function(t) {
            return null == t.getAttribute("disabled")
        }) || at(I, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }),
        nt
    }(f);
    T.find = p,
    T.expr = p.selectors,
    T.expr[":"] = T.expr.pseudos,
    T.unique = p.uniqueSort,
    T.text = p.getText,
    T.isXMLDoc = p.isXML,
    T.contains = p.contains;
    var y = T.expr.match.needsContext
      , _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , b = /^.[^:#\[\.,]*$/;
    function x(t, i, n) {
        if (T.isFunction(i))
            return T.grep(t, function(t, e) {
                return !!i.call(t, e, t) !== n
            });
        if (i.nodeType)
            return T.grep(t, function(t) {
                return t === i !== n
            });
        if ("string" == typeof i) {
            if (b.test(i))
                return T.filter(i, t, n);
            i = T.filter(i, t)
        }
        return T.grep(t, function(t) {
            return 0 <= T.inArray(t, i) !== n
        })
    }
    T.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? T.find.matchesSelector(n, t) ? [n] : [] : T.find.matches(t, T.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    T.fn.extend({
        find: function(t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t)
                return this.pushStack(T(t).filter(function() {
                    for (e = 0; e < s; e++)
                        if (T.contains(n[e], this))
                            return !0
                }));
            for (e = 0; e < s; e++)
                T.find(t, n[e], i);
            return (i = this.pushStack(1 < s ? T.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t,
            i
        },
        filter: function(t) {
            return this.pushStack(x(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(x(this, t || [], !0))
        },
        is: function(t) {
            return !!x(this, "string" == typeof t && y.test(t) ? T(t) : t || [], !1).length
        }
    });
    var w, S = f.document, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function(t, e) {
        var i, n;
        if (!t)
            return this;
        if ("string" != typeof t)
            return t.nodeType ? (this.context = this[0] = t,
            this.length = 1,
            this) : T.isFunction(t) ? void 0 !== w.ready ? w.ready(t) : t(T) : (void 0 !== t.selector && (this.selector = t.selector,
            this.context = t.context),
            T.makeArray(t, this));
        if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : C.exec(t)) || !i[1] && e)
            return !e || e.jquery ? (e || w).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof T ? e[0] : e,
            T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : S, !0)),
            _.test(i[1]) && T.isPlainObject(e))
                for (i in e)
                    T.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        if ((n = S.getElementById(i[2])) && n.parentNode) {
            if (n.id !== i[2])
                return w.find(t);
            this.length = 1,
            this[0] = n
        }
        return this.context = S,
        this.selector = t,
        this
    }
    ).prototype = T.fn,
    w = T(S);
    var k = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function E(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    T.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !T(s).is(i)); )
                1 === s.nodeType && n.push(s),
                s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }),
    T.fn.extend({
        has: function(t) {
            var e, i = T(t, this), n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (T.contains(this, i[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, r = [], o = y.test(t) || "string" != typeof t ? T(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && T.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(1 < r.length ? T.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? T.inArray(this[0], T(t)) : T.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(T.unique(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    T.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return T.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return T.dir(t, "parentNode", i)
        },
        next: function(t) {
            return E(t, "nextSibling")
        },
        prev: function(t) {
            return E(t, "previousSibling")
        },
        nextAll: function(t) {
            return T.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return T.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return T.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return T.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return T.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return T.sibling(t.firstChild)
        },
        contents: function(t) {
            return T.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : T.merge([], t.childNodes)
        }
    }, function(n, s) {
        T.fn[n] = function(t, e) {
            var i = T.map(this, s, t);
            return "Until" !== n.slice(-5) && (e = t),
            e && "string" == typeof e && (i = T.filter(e, i)),
            1 < this.length && (P[n] || (i = T.unique(i)),
            k.test(n) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var A, O = /\S+/g, D = {};
    function N() {
        S.addEventListener ? (S.removeEventListener("DOMContentLoaded", M, !1),
        f.removeEventListener("load", M, !1)) : (S.detachEvent("onreadystatechange", M),
        f.detachEvent("onload", M))
    }
    function M() {
        !S.addEventListener && "load" !== event.type && "complete" !== S.readyState || (N(),
        T.ready())
    }
    T.Callbacks = function(s) {
        var t, i;
        s = "string" == typeof s ? D[s] || (i = D[t = s] = {},
        T.each(t.match(O) || [], function(t, e) {
            i[e] = !0
        }),
        i) : T.extend({}, s);
        var n, e, r, o, a, l, c = [], h = !s.once && [], u = function(t) {
            for (e = s.memory && t,
            r = !0,
            a = l || 0,
            l = 0,
            o = c.length,
            n = !0; c && a < o; a++)
                if (!1 === c[a].apply(t[0], t[1]) && s.stopOnFalse) {
                    e = !1;
                    break
                }
            n = !1,
            c && (h ? h.length && u(h.shift()) : e ? c = [] : d.disable())
        }, d = {
            add: function() {
                var t;
                return c && (t = c.length,
                function n(t) {
                    T.each(t, function(t, e) {
                        var i = T.type(e);
                        "function" === i ? s.unique && d.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
                    })
                }(arguments),
                n ? o = c.length : e && (l = t,
                u(e))),
                this
            },
            remove: function() {
                return c && T.each(arguments, function(t, e) {
                    for (var i; -1 < (i = T.inArray(e, c, i)); )
                        c.splice(i, 1),
                        n && (i <= o && o--,
                        i <= a && a--)
                }),
                this
            },
            has: function(t) {
                return t ? -1 < T.inArray(t, c) : !(!c || !c.length)
            },
            empty: function() {
                return c = [],
                o = 0,
                this
            },
            disable: function() {
                return c = h = e = void 0,
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return h = void 0,
                e || d.disable(),
                this
            },
            locked: function() {
                return !h
            },
            fireWith: function(t, e) {
                return !c || r && !h || (e = [t, (e = e || []).slice ? e.slice() : e],
                n ? h.push(e) : u(e)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return d
    }
    ,
    T.extend({
        Deferred: function(t) {
            var r = [["resolve", "done", T.Callbacks("once memory"), "resolved"], ["reject", "fail", T.Callbacks("once memory"), "rejected"], ["notify", "progress", T.Callbacks("memory")]]
              , s = "pending"
              , o = {
                state: function() {
                    return s
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var s = arguments;
                    return T.Deferred(function(n) {
                        T.each(r, function(t, e) {
                            var i = T.isFunction(s[t]) && s[t];
                            a[e[1]](function() {
                                var t = i && i.apply(this, arguments);
                                t && T.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === o ? n.promise() : this, i ? [t] : arguments)
                            })
                        }),
                        s = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? T.extend(t, o) : o
                }
            }
              , a = {};
            return o.pipe = o.then,
            T.each(r, function(t, e) {
                var i = e[2]
                  , n = e[3];
                o[e[1]] = i.add,
                n && i.add(function() {
                    s = n
                }, r[1 ^ t][2].disable, r[2][2].lock),
                a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? o : this, arguments),
                    this
                }
                ,
                a[e[0] + "With"] = i.fireWith
            }),
            o.promise(a),
            t && t.call(a, a),
            a
        },
        when: function(t) {
            function e(e, i, n) {
                return function(t) {
                    i[e] = this,
                    n[e] = 1 < arguments.length ? h.call(arguments) : t,
                    n === s ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
                }
            }
            var s, i, n, r = 0, o = h.call(arguments), a = o.length, l = 1 !== a || t && T.isFunction(t.promise) ? a : 0, c = 1 === l ? t : T.Deferred();
            if (1 < a)
                for (s = new Array(a),
                i = new Array(a),
                n = new Array(a); r < a; r++)
                    o[r] && T.isFunction(o[r].promise) ? o[r].promise().done(e(r, n, o)).fail(c.reject).progress(e(r, i, s)) : --l;
            return l || c.resolveWith(n, o),
            c.promise()
        }
    }),
    T.fn.ready = function(t) {
        return T.ready.promise().done(t),
        this
    }
    ,
    T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? T.readyWait++ : T.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--T.readyWait : !T.isReady) {
                if (!S.body)
                    return setTimeout(T.ready);
                (T.isReady = !0) !== t && 0 < --T.readyWait || (A.resolveWith(S, [T]),
                T.fn.triggerHandler && (T(S).triggerHandler("ready"),
                T(S).off("ready")))
            }
        }
    }),
    T.ready.promise = function(t) {
        if (!A)
            if (A = T.Deferred(),
            "complete" === S.readyState)
                setTimeout(T.ready);
            else if (S.addEventListener)
                S.addEventListener("DOMContentLoaded", M, !1),
                f.addEventListener("load", M, !1);
            else {
                S.attachEvent("onreadystatechange", M),
                f.attachEvent("onload", M);
                var i = !1;
                try {
                    i = null == f.frameElement && S.documentElement
                } catch (t) {}
                i && i.doScroll && !function e() {
                    if (!T.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        N(),
                        T.ready()
                    }
                }()
            }
        return A.promise(t)
    }
    ;
    var R, F = "undefined";
    for (R in T(v))
        break;
    v.ownLast = "0" !== R,
    v.inlineBlockNeedsLayout = !1,
    T(function() {
        var t, e, i, n = S.getElementsByTagName("body")[0];
        n && n.style && (e = S.createElement("div"),
        (i = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(e),
        typeof e.style.zoom !== F && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        v.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
        t && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var t = S.createElement("div");
        if (null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                v.deleteExpando = !1
            }
        }
        t = null
    }(),
    T.acceptData = function(t) {
        var e = T.noData[(t.nodeName + " ").toLowerCase()]
          , i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }
    ;
    var L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , I = /([A-Z])/g;
    function z(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(I, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : L.test(i) ? T.parseJSON(i) : i)
                } catch (t) {}
                T.data(t, e, i)
            } else
                i = void 0
        }
        return i
    }
    function $(t) {
        var e;
        for (e in t)
            if (("data" !== e || !T.isEmptyObject(t[e])) && "toJSON" !== e)
                return;
        return 1
    }
    function H(t, e, i, n) {
        if (T.acceptData(t)) {
            var s, r, o = T.expando, a = t.nodeType, l = a ? T.cache : t, c = a ? t[o] : t[o] && o;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)
                return l[c = c || (a ? t[o] = u.pop() || T.guid++ : o)] || (l[c] = a ? {} : {
                    toJSON: T.noop
                }),
                "object" != typeof e && "function" != typeof e || (n ? l[c] = T.extend(l[c], e) : l[c].data = T.extend(l[c].data, e)),
                r = l[c],
                n || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== i && (r[T.camelCase(e)] = i),
                "string" == typeof e ? null == (s = r[e]) && (s = r[T.camelCase(e)]) : s = r,
                s
        }
    }
    function j(t, e, i) {
        if (T.acceptData(t)) {
            var n, s, r = t.nodeType, o = r ? T.cache : t, a = r ? t[T.expando] : T.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    s = (e = T.isArray(e) ? e.concat(T.map(e, T.camelCase)) : e in n ? [e] : (e = T.camelCase(e))in n ? [e] : e.split(" ")).length;
                    for (; s--; )
                        delete n[e[s]];
                    if (i ? !$(n) : !T.isEmptyObject(n))
                        return
                }
                (i || (delete o[a].data,
                $(o[a]))) && (r ? T.cleanData([t], !0) : v.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }
    T.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? T.cache[t[T.expando]] : t[T.expando]) && !$(t)
        },
        data: function(t, e, i) {
            return H(t, e, i)
        },
        removeData: function(t, e) {
            return j(t, e)
        },
        _data: function(t, e, i) {
            return H(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return j(t, e, !0)
        }
    }),
    T.fn.extend({
        data: function(t, e) {
            var i, n, s, r = this[0], o = r && r.attributes;
            if (void 0 !== t)
                return "object" == typeof t ? this.each(function() {
                    T.data(this, t)
                }) : 1 < arguments.length ? this.each(function() {
                    T.data(this, t, e)
                }) : r ? z(r, t, T.data(r, t)) : void 0;
            if (this.length && (s = T.data(r),
            1 === r.nodeType && !T._data(r, "parsedAttrs"))) {
                for (i = o.length; i--; )
                    o[i] && (0 === (n = o[i].name).indexOf("data-") && z(r, n = T.camelCase(n.slice(5)), s[n]));
                T._data(r, "parsedAttrs", !0)
            }
            return s
        },
        removeData: function(t) {
            return this.each(function() {
                T.removeData(this, t)
            })
        }
    }),
    T.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue",
            n = T._data(t, e),
            i && (!n || T.isArray(i) ? n = T._data(t, e, T.makeArray(i)) : n.push(i)),
            n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = T.queue(t, e)
              , n = i.length
              , s = i.shift()
              , r = T._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(),
            n--),
            s && ("fx" === e && i.unshift("inprogress"),
            delete r.stop,
            s.call(t, function() {
                T.dequeue(t, e)
            }, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return T._data(t, i) || T._data(t, i, {
                empty: T.Callbacks("once memory").add(function() {
                    T._removeData(t, e + "queue"),
                    T._removeData(t, i)
                })
            })
        }
    }),
    T.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e,
            e = "fx",
            t--),
            arguments.length < t ? T.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var t = T.queue(this, e, i);
                T._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                T.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function i() {
                --s || r.resolveWith(o, [o])
            }
            var n, s = 1, r = T.Deferred(), o = this, a = this.length;
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (n = T._data(o[a], t + "queueHooks")) && n.empty && (s++,
                n.empty.add(i));
            return i(),
            r.promise(e)
        }
    });
    function X(t, e) {
        return t = e || t,
        "none" === T.css(t, "display") || !T.contains(t.ownerDocument, t)
    }
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , q = ["Top", "Right", "Bottom", "Left"]
      , V = T.access = function(t, e, i, n, s, r, o) {
        var a = 0
          , l = t.length
          , c = null == i;
        if ("object" === T.type(i))
            for (a in s = !0,
            i)
                T.access(t, e, a, i[a], !0, r, o);
        else if (void 0 !== n && (s = !0,
        T.isFunction(n) || (o = !0),
        c && (e = o ? (e.call(t, n),
        null) : (c = e,
        function(t, e, i) {
            return c.call(T(t), i)
        }
        )),
        e))
            for (; a < l; a++)
                e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : r
    }
      , Y = /^(?:checkbox|radio)$/i;
    !function() {
        var t = S.createElement("input")
          , e = S.createElement("div")
          , i = S.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        v.leadingWhitespace = 3 === e.firstChild.nodeType,
        v.tbody = !e.getElementsByTagName("tbody").length,
        v.htmlSerialize = !!e.getElementsByTagName("link").length,
        v.html5Clone = "<:nav></:nav>" !== S.createElement("nav").cloneNode(!0).outerHTML,
        t.type = "checkbox",
        t.checked = !0,
        i.appendChild(t),
        v.appendChecked = t.checked,
        e.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        i.appendChild(e),
        e.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        v.noCloneEvent = !0,
        e.attachEvent && (e.attachEvent("onclick", function() {
            v.noCloneEvent = !1
        }),
        e.cloneNode(!0).click()),
        null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                v.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, e, i = S.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            e = "on" + t,
            (v[t + "Bubbles"] = e in f) || (i.setAttribute(e, "t"),
            v[t + "Bubbles"] = !1 === i.attributes[e].expando);
        i = null
    }();
    var W = /^(?:input|select|textarea)$/i
      , U = /^key/
      , G = /^(?:mouse|pointer|contextmenu)|click/
      , Q = /^(?:focusinfocus|focusoutblur)$/
      , Z = /^([^.]*)(?:\.(.+)|)$/;
    function K() {
        return !0
    }
    function J() {
        return !1
    }
    function tt() {
        try {
            return S.activeElement
        } catch (t) {}
    }
    function et(t) {
        var e = it.split("|")
          , i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length; )
                i.createElement(e.pop());
        return i
    }
    T.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, o, a, l, c, h, u, d, p, f, m, g = T._data(t);
            if (g) {
                for (i.handler && (i = (l = i).handler,
                s = l.selector),
                i.guid || (i.guid = T.guid++),
                (o = g.events) || (o = g.events = {}),
                (h = g.handle) || ((h = g.handle = function(t) {
                    return typeof T === F || t && T.event.triggered === t.type ? void 0 : T.event.dispatch.apply(h.elem, arguments)
                }
                ).elem = t),
                a = (e = (e || "").match(O) || [""]).length; a--; )
                    p = m = (r = Z.exec(e[a]) || [])[1],
                    f = (r[2] || "").split(".").sort(),
                    p && (c = T.event.special[p] || {},
                    p = (s ? c.delegateType : c.bindType) || p,
                    c = T.event.special[p] || {},
                    u = T.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && T.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l),
                    (d = o[p]) || ((d = o[p] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, n, f, h) || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    T.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var r, o, a, l, c, h, u, d, p, f, m, g = T.hasData(t) && T._data(t);
            if (g && (h = g.events)) {
                for (c = (e = (e || "").match(O) || [""]).length; c--; )
                    if (p = m = (a = Z.exec(e[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    p) {
                        for (u = T.event.special[p] || {},
                        d = h[p = (n ? u.delegateType : u.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = r = d.length; r--; )
                            o = d[r],
                            !s && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1),
                            o.selector && d.delegateCount--,
                            u.remove && u.remove.call(t, o));
                        l && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || T.removeEvent(t, p, g.handle),
                        delete h[p])
                    } else
                        for (p in h)
                            T.event.remove(t, p + e[c], i, n, !0);
                T.isEmptyObject(h) && (delete g.handle,
                T._removeData(t, "events"))
            }
        },
        trigger: function(t, e, i, n) {
            var s, r, o, a, l, c, h = [i || S], u = g.call(t, "type") ? t.type : t, d = g.call(t, "namespace") ? t.namespace.split(".") : [], p = l = i = i || S;
            if (3 !== i.nodeType && 8 !== i.nodeType && !Q.test(u + T.event.triggered) && (0 <= u.indexOf(".") && (u = (d = u.split(".")).shift(),
            d.sort()),
            r = u.indexOf(":") < 0 && "on" + u,
            (t = t[T.expando] ? t : new T.Event(u,"object" == typeof t && t)).isTrigger = n ? 2 : 3,
            t.namespace = d.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            e = null == e ? [t] : T.makeArray(e, [t]),
            a = T.event.special[u] || {},
            n || !a.trigger || !1 !== a.trigger.apply(i, e))) {
                if (!n && !a.noBubble && !T.isWindow(i)) {
                    for (o = a.delegateType || u,
                    Q.test(o + u) || (p = p.parentNode); p; p = p.parentNode)
                        h.push(p),
                        l = p;
                    l === (i.ownerDocument || S) && h.push(l.defaultView || l.parentWindow || f)
                }
                for (c = 0; (p = h[c++]) && !t.isPropagationStopped(); )
                    t.type = 1 < c ? o : a.bindType || u,
                    (s = (T._data(p, "events") || {})[t.type] && T._data(p, "handle")) && s.apply(p, e),
                    (s = r && p[r]) && s.apply && T.acceptData(p) && (t.result = s.apply(p, e),
                    !1 === t.result && t.preventDefault());
                if (t.type = u,
                !n && !t.isDefaultPrevented() && (!a._default || !1 === a._default.apply(h.pop(), e)) && T.acceptData(i) && r && i[u] && !T.isWindow(i)) {
                    (l = i[r]) && (i[r] = null),
                    T.event.triggered = u;
                    try {
                        i[u]()
                    } catch (t) {}
                    T.event.triggered = void 0,
                    l && (i[r] = l)
                }
                return t.result
            }
        },
        dispatch: function(t) {
            t = T.event.fix(t);
            var e, i, n, s, r, o = [], a = h.call(arguments), l = (T._data(this, "events") || {})[t.type] || [], c = T.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (o = T.event.handlers.call(this, t, l),
                e = 0; (s = o[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = s.elem,
                    r = 0; (n = s.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                        t.namespace_re && !t.namespace_re.test(n.namespace) || (t.handleObj = n,
                        t.data = n.data,
                        void 0 !== (i = ((T.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, r, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (s = [],
                        r = 0; r < a; r++)
                            void 0 === s[i = (n = e[r]).selector + " "] && (s[i] = n.needsContext ? 0 <= T(i, this).index(l) : T.find(i, this, null, [l]).length),
                            s[i] && s.push(n);
                        s.length && o.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }),
            o
        },
        fix: function(t) {
            if (t[T.expando])
                return t;
            var e, i, n, s = t.type, r = t, o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = G.test(s) ? this.mouseHooks : U.test(s) ? this.keyHooks : {}),
            n = o.props ? this.props.concat(o.props) : this.props,
            t = new T.Event(r),
            e = n.length; e--; )
                t[i = n[e]] = r[i];
            return t.target || (t.target = r.srcElement || S),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            o.filter ? o.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, r = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (s = (n = t.target.ownerDocument || S).documentElement,
                i = n.body,
                t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0),
                t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o),
                t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== tt() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === tt() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return T.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = T.extend(new T.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? T.event.trigger(s, null, e) : T.event.dispatch.call(e, s),
            s.isDefaultPrevented() && i.preventDefault()
        }
    },
    T.removeEvent = S.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }
    : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === F && (t[n] = null),
        t.detachEvent(n, i))
    }
    ,
    T.Event = function(t, e) {
        return this instanceof T.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? K : J) : this.type = t,
        e && T.extend(this, e),
        this.timeStamp = t && t.timeStamp || T.now(),
        void (this[T.expando] = !0)) : new T.Event(t,e)
    }
    ,
    T.Event.prototype = {
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = K,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = K,
            t && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = K,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, s) {
        T.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function(t) {
                var e, i = t.relatedTarget, n = t.handleObj;
                return i && (i === this || T.contains(this, i)) || (t.type = n.origType,
                e = n.handler.apply(this, arguments),
                t.type = s),
                e
            }
        }
    }),
    v.submitBubbles || (T.event.special.submit = {
        setup: function() {
            return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , i = T.nodeName(e, "input") || T.nodeName(e, "button") ? e.form : void 0;
                i && !T._data(i, "submitBubbles") && (T.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }),
                T._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && T.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return !T.nodeName(this, "form") && void T.event.remove(this, "._submit")
        }
    }),
    v.changeBubbles || (T.event.special.change = {
        setup: function() {
            return W.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (T.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }),
            T.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                T.event.simulate("change", this, t, !0)
            })),
            !1) : void T.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                W.test(e.nodeName) && !T._data(e, "changeBubbles") && (T.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || T.event.simulate("change", this.parentNode, t, !0)
                }),
                T._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return T.event.remove(this, "._change"),
            !W.test(this.nodeName)
        }
    }),
    v.focusinBubbles || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        function s(t) {
            T.event.simulate(n, t.target, T.event.fix(t), !0)
        }
        T.event.special[n] = {
            setup: function() {
                var t = this.ownerDocument || this
                  , e = T._data(t, n);
                e || t.addEventListener(i, s, !0),
                T._data(t, n, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this
                  , e = T._data(t, n) - 1;
                e ? T._data(t, n, e) : (t.removeEventListener(i, s, !0),
                T._removeData(t, n))
            }
        }
    }),
    T.fn.extend({
        on: function(t, e, i, n, s) {
            var r, o;
            if ("object" == typeof t) {
                for (r in "string" != typeof e && (i = i || e,
                e = void 0),
                t)
                    this.on(r, e, i, t[r], s);
                return this
            }
            if (null == i && null == n ? (n = e,
            i = e = void 0) : null == n && ("string" == typeof e ? (n = i,
            i = void 0) : (n = i,
            i = e,
            e = void 0)),
            !1 === n)
                n = J;
            else if (!n)
                return this;
            return 1 === s && (o = n,
            (n = function(t) {
                return T().off(t),
                o.apply(this, arguments)
            }
            ).guid = o.guid || (o.guid = T.guid++)),
            this.each(function() {
                T.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj,
                T(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" != typeof t)
                return !1 !== e && "function" != typeof e || (i = e,
                e = void 0),
                !1 === i && (i = J),
                this.each(function() {
                    T.event.remove(this, t, i, e)
                });
            for (s in t)
                this.off(s, e, t[s]);
            return this
        },
        trigger: function(t, e) {
            return this.each(function() {
                T.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? T.event.trigger(t, e, i, !0) : void 0
        }
    });
    var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , nt = / jQuery\d+="(?:null|\d+)"/g
      , st = new RegExp("<(?:" + it + ")[\\s/>]","i")
      , rt = /^\s+/
      , ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , at = /<([\w:]+)/
      , lt = /<tbody/i
      , ct = /<|&#?\w+;/
      , ht = /<(?:script|style|link)/i
      , ut = /checked\s*(?:[^=]|=\s*.checked.)/i
      , dt = /^$|\/(?:java|ecma)script/i
      , pt = /^true\/(.*)/
      , ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , mt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , gt = et(S).appendChild(S.createElement("div"));
    function vt(t, e) {
        var i, n, s = 0, r = typeof t.getElementsByTagName !== F ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== F ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [],
            i = t.childNodes || t; null != (n = i[s]); s++)
                !e || T.nodeName(n, e) ? r.push(n) : T.merge(r, vt(n, e));
        return void 0 === e || e && T.nodeName(t, e) ? T.merge([t], r) : r
    }
    function yt(t) {
        Y.test(t.type) && (t.defaultChecked = t.checked)
    }
    function _t(t, e) {
        return T.nodeName(t, "table") && T.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function bt(t) {
        return t.type = (null !== T.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function xt(t) {
        var e = pt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function wt(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)
            T._data(i, "globalEval", !e || T._data(e[n], "globalEval"))
    }
    function Tt(t, e) {
        if (1 === e.nodeType && T.hasData(t)) {
            var i, n, s, r = T._data(t), o = T._data(e, r), a = r.events;
            if (a)
                for (i in delete o.handle,
                o.events = {},
                a)
                    for (n = 0,
                    s = a[i].length; n < s; n++)
                        T.event.add(e, i, a[i][n]);
            o.data && (o.data = T.extend({}, o.data))
        }
    }
    mt.optgroup = mt.option,
    mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead,
    mt.th = mt.td,
    T.extend({
        clone: function(t, e, i) {
            var n, s, r, o, a, l = T.contains(t.ownerDocument, t);
            if (v.html5Clone || T.isXMLDoc(t) || !st.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (gt.innerHTML = t.outerHTML,
            gt.removeChild(r = gt.firstChild)),
            !(v.noCloneEvent && v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                for (n = vt(r),
                a = vt(t),
                o = 0; null != (s = a[o]); ++o)
                    n[o] && function(t, e) {
                        var i, n, s;
                        if (1 === e.nodeType) {
                            if (i = e.nodeName.toLowerCase(),
                            !v.noCloneEvent && e[T.expando]) {
                                for (n in (s = T._data(e)).events)
                                    T.removeEvent(e, n, s.handle);
                                e.removeAttribute(T.expando)
                            }
                            "script" === i && e.text !== t.text ? (bt(e).text = t.text,
                            xt(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML),
                            v.html5Clone && t.innerHTML && !T.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Y.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
                            e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
                        }
                    }(s, n[o]);
            if (e)
                if (i)
                    for (a = a || vt(t),
                    n = n || vt(r),
                    o = 0; null != (s = a[o]); o++)
                        Tt(s, n[o]);
                else
                    Tt(t, r);
            return 0 < (n = vt(r, "script")).length && wt(n, !l && vt(t, "script")),
            n = a = s = null,
            r
        },
        buildFragment: function(t, e, i, n) {
            for (var s, r, o, a, l, c, h, u = t.length, d = et(e), p = [], f = 0; f < u; f++)
                if ((r = t[f]) || 0 === r)
                    if ("object" === T.type(r))
                        T.merge(p, r.nodeType ? [r] : r);
                    else if (ct.test(r)) {
                        for (a = a || d.appendChild(e.createElement("div")),
                        l = (at.exec(r) || ["", ""])[1].toLowerCase(),
                        h = mt[l] || mt._default,
                        a.innerHTML = h[1] + r.replace(ot, "<$1></$2>") + h[2],
                        s = h[0]; s--; )
                            a = a.lastChild;
                        if (!v.leadingWhitespace && rt.test(r) && p.push(e.createTextNode(rt.exec(r)[0])),
                        !v.tbody)
                            for (s = (r = "table" !== l || lt.test(r) ? "<table>" !== h[1] || lt.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; s--; )
                                T.nodeName(c = r.childNodes[s], "tbody") && !c.childNodes.length && r.removeChild(c);
                        for (T.merge(p, a.childNodes),
                        a.textContent = ""; a.firstChild; )
                            a.removeChild(a.firstChild);
                        a = d.lastChild
                    } else
                        p.push(e.createTextNode(r));
            for (a && d.removeChild(a),
            v.appendChecked || T.grep(vt(p, "input"), yt),
            f = 0; r = p[f++]; )
                if ((!n || -1 === T.inArray(r, n)) && (o = T.contains(r.ownerDocument, r),
                a = vt(d.appendChild(r), "script"),
                o && wt(a),
                i))
                    for (s = 0; r = a[s++]; )
                        dt.test(r.type || "") && i.push(r);
            return a = null,
            d
        },
        cleanData: function(t, e) {
            for (var i, n, s, r, o = 0, a = T.expando, l = T.cache, c = v.deleteExpando, h = T.event.special; null != (i = t[o]); o++)
                if ((e || T.acceptData(i)) && (r = (s = i[a]) && l[s])) {
                    if (r.events)
                        for (n in r.events)
                            h[n] ? T.event.remove(i, n) : T.removeEvent(i, n, r.handle);
                    l[s] && (delete l[s],
                    c ? delete i[a] : typeof i.removeAttribute !== F ? i.removeAttribute(a) : i[a] = null,
                    u.push(s))
                }
        }
    }),
    T.fn.extend({
        text: function(t) {
            return V(this, function(t) {
                return void 0 === t ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = _t(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? T.filter(t, this) : this, s = 0; null != (i = n[s]); s++)
                e || 1 !== i.nodeType || T.cleanData(vt(i)),
                i.parentNode && (e && T.contains(i.ownerDocument, i) && wt(vt(i, "script")),
                i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && T.cleanData(vt(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && T.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return T.clone(this, t, e)
            })
        },
        html: function(t) {
            return V(this, function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(nt, "") : void 0;
                if (!("string" != typeof t || ht.test(t) || !v.htmlSerialize && st.test(t) || !v.leadingWhitespace && rt.test(t) || mt[(at.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(ot, "<$1></$2>");
                    try {
                        for (; i < n; i++)
                            1 === (e = this[i] || {}).nodeType && (T.cleanData(vt(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                T.cleanData(vt(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(i, n) {
            i = m.apply([], i);
            var t, e, s, r, o, a, l = 0, c = this.length, h = this, u = c - 1, d = i[0], p = T.isFunction(d);
            if (p || 1 < c && "string" == typeof d && !v.checkClone && ut.test(d))
                return this.each(function(t) {
                    var e = h.eq(t);
                    p && (i[0] = d.call(this, t, e.html())),
                    e.domManip(i, n)
                });
            if (c && (t = (a = T.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild,
            1 === a.childNodes.length && (a = t),
            t)) {
                for (s = (r = T.map(vt(a, "script"), bt)).length; l < c; l++)
                    e = a,
                    l !== u && (e = T.clone(e, !0, !0),
                    s && T.merge(r, vt(e, "script"))),
                    n.call(this[l], e, l);
                if (s)
                    for (o = r[r.length - 1].ownerDocument,
                    T.map(r, xt),
                    l = 0; l < s; l++)
                        e = r[l],
                        dt.test(e.type || "") && !T._data(e, "globalEval") && T.contains(o, e) && (e.src ? T._evalUrl && T._evalUrl(e.src) : T.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ft, "")));
                a = t = null
            }
            return this
        }
    }),
    T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, o) {
        T.fn[t] = function(t) {
            for (var e, i = 0, n = [], s = T(t), r = s.length - 1; i <= r; i++)
                e = i === r ? this : this.clone(!0),
                T(s[i])[o](e),
                a.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var St, Ct, kt = {};
    function Pt(t, e) {
        var i, n = T(e.createElement(t)).appendTo(e.body), s = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : T.css(n[0], "display");
        return n.detach(),
        s
    }
    function Et(t) {
        var e = S
          , i = kt[t];
        return i || ("none" !== (i = Pt(t, e)) && i || ((e = ((St = (St || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || St[0].contentDocument).document).write(),
        e.close(),
        i = Pt(t, e),
        St.detach()),
        kt[t] = i),
        i
    }
    v.shrinkWrapBlocks = function() {
        return null != Ct ? Ct : (Ct = !1,
        (e = S.getElementsByTagName("body")[0]) && e.style ? (t = S.createElement("div"),
        (i = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        e.appendChild(i).appendChild(t),
        typeof t.style.zoom !== F && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        t.appendChild(S.createElement("div")).style.width = "5px",
        Ct = 3 !== t.offsetWidth),
        e.removeChild(i),
        Ct) : void 0);
        var t, e, i
    }
    ;
    var At, Ot, Dt, Nt, Mt, Rt, Ft, Lt, It, zt = /^margin/, $t = new RegExp("^(" + B + ")(?!px)[a-z%]+$","i"), Ht = /^(top|right|bottom|left)$/;
    function jt(e, i) {
        return {
            get: function() {
                var t = e();
                if (null != t)
                    return t ? void delete this.get : (this.get = i).apply(this, arguments)
            }
        }
    }
    function Xt() {
        var t, e, i, n = S.getElementsByTagName("body")[0];
        n && n.style && (t = S.createElement("div"),
        (e = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(e).appendChild(t),
        t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
        Rt = Ft = !1,
        It = !0,
        f.getComputedStyle && (Rt = "1%" !== (f.getComputedStyle(t, null) || {}).top,
        Ft = "4px" === (f.getComputedStyle(t, null) || {
            width: "4px"
        }).width,
        (i = t.appendChild(S.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
        i.style.marginRight = i.style.width = "0",
        t.style.width = "1px",
        It = !parseFloat((f.getComputedStyle(i, null) || {}).marginRight)),
        t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
        (i = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
        (Lt = 0 === i[0].offsetHeight) && (i[0].style.display = "",
        i[1].style.display = "none",
        Lt = 0 === i[0].offsetHeight),
        n.removeChild(e))
    }
    f.getComputedStyle ? (At = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }
    ,
    Ot = function(t, e, i) {
        var n, s, r, o = t.style, a = (i = i || At(t)) ? i.getPropertyValue(e) || i[e] : void 0;
        return i && ("" !== a || T.contains(t.ownerDocument, t) || (a = T.style(t, e)),
        $t.test(a) && zt.test(e) && (n = o.width,
        s = o.minWidth,
        r = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = a,
        a = i.width,
        o.width = n,
        o.minWidth = s,
        o.maxWidth = r)),
        void 0 === a ? a : a + ""
    }
    ) : S.documentElement.currentStyle && (At = function(t) {
        return t.currentStyle
    }
    ,
    Ot = function(t, e, i) {
        var n, s, r, o, a = t.style;
        return null == (o = (i = i || At(t)) ? i[e] : void 0) && a && a[e] && (o = a[e]),
        $t.test(o) && !Ht.test(e) && (n = a.left,
        (r = (s = t.runtimeStyle) && s.left) && (s.left = t.currentStyle.left),
        a.left = "fontSize" === e ? "1em" : o,
        o = a.pixelLeft + "px",
        a.left = n,
        r && (s.left = r)),
        void 0 === o ? o : o + "" || "auto"
    }
    ),
    (Dt = S.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    (Nt = (Mt = Dt.getElementsByTagName("a")[0]) && Mt.style) && (Nt.cssText = "float:left;opacity:.5",
    v.opacity = "0.5" === Nt.opacity,
    v.cssFloat = !!Nt.cssFloat,
    Dt.style.backgroundClip = "content-box",
    Dt.cloneNode(!0).style.backgroundClip = "",
    v.clearCloneStyle = "content-box" === Dt.style.backgroundClip,
    v.boxSizing = "" === Nt.boxSizing || "" === Nt.MozBoxSizing || "" === Nt.WebkitBoxSizing,
    T.extend(v, {
        reliableHiddenOffsets: function() {
            return null == Lt && Xt(),
            Lt
        },
        boxSizingReliable: function() {
            return null == Ft && Xt(),
            Ft
        },
        pixelPosition: function() {
            return null == Rt && Xt(),
            Rt
        },
        reliableMarginRight: function() {
            return null == It && Xt(),
            It
        }
    })),
    T.swap = function(t, e, i, n) {
        var s, r, o = {};
        for (r in e)
            o[r] = t.style[r],
            t.style[r] = e[r];
        for (r in s = i.apply(t, n || []),
        e)
            t.style[r] = o[r];
        return s
    }
    ;
    var Bt = /alpha\([^)]*\)/i
      , qt = /opacity\s*=\s*([^)]*)/
      , Vt = /^(none|table(?!-c[ea]).+)/
      , Yt = new RegExp("^(" + B + ")(.*)$","i")
      , Wt = new RegExp("^([+-])=(" + B + ")","i")
      , Ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Gt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Qt = ["Webkit", "O", "Moz", "ms"];
    function Zt(t, e) {
        if (e in t)
            return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Qt.length; s--; )
            if ((e = Qt[s] + i)in t)
                return e;
        return n
    }
    function Kt(t, e) {
        for (var i, n, s, r = [], o = 0, a = t.length; o < a; o++)
            (n = t[o]).style && (r[o] = T._data(n, "olddisplay"),
            i = n.style.display,
            e ? (r[o] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && X(n) && (r[o] = T._data(n, "olddisplay", Et(n.nodeName)))) : (s = X(n),
            (i && "none" !== i || !s) && T._data(n, "olddisplay", s ? i : T.css(n, "display"))));
        for (o = 0; o < a; o++)
            (n = t[o]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
        return t
    }
    function Jt(t, e, i) {
        var n = Yt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function te(t, e, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; r < 4; r += 2)
            "margin" === i && (o += T.css(t, i + q[r], !0, s)),
            n ? ("content" === i && (o -= T.css(t, "padding" + q[r], !0, s)),
            "margin" !== i && (o -= T.css(t, "border" + q[r] + "Width", !0, s))) : (o += T.css(t, "padding" + q[r], !0, s),
            "padding" !== i && (o += T.css(t, "border" + q[r] + "Width", !0, s)));
        return o
    }
    function ee(t, e, i) {
        var n = !0
          , s = "width" === e ? t.offsetWidth : t.offsetHeight
          , r = At(t)
          , o = v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, r);
        if (s <= 0 || null == s) {
            if (((s = Ot(t, e, r)) < 0 || null == s) && (s = t.style[e]),
            $t.test(s))
                return s;
            n = o && (v.boxSizingReliable() || s === t.style[e]),
            s = parseFloat(s) || 0
        }
        return s + te(t, e, i || (o ? "border" : "content"), n, r) + "px"
    }
    function ie(t, e, i, n, s) {
        return new ie.prototype.init(t,e,i,n,s)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Ot(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = T.camelCase(e), l = t.style;
                if (e = T.cssProps[a] || (T.cssProps[a] = Zt(l, a)),
                o = T.cssHooks[e] || T.cssHooks[a],
                void 0 === i)
                    return o && "get"in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
                if ("string" === (r = typeof i) && (s = Wt.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(T.css(t, e)),
                r = "number"),
                null != i && i == i && ("number" !== r || T.cssNumber[a] || (i += "px"),
                v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                !(o && "set"in o && void 0 === (i = o.set(t, i, n)))))
                    try {
                        l[e] = i
                    } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, r, o, a = T.camelCase(e);
            return e = T.cssProps[a] || (T.cssProps[a] = Zt(t.style, a)),
            (o = T.cssHooks[e] || T.cssHooks[a]) && "get"in o && (r = o.get(t, !0, i)),
            void 0 === r && (r = Ot(t, e, n)),
            "normal" === r && e in Gt && (r = Gt[e]),
            "" === i || i ? (s = parseFloat(r),
            !0 === i || T.isNumeric(s) ? s || 0 : r) : r
        }
    }),
    T.each(["height", "width"], function(t, s) {
        T.cssHooks[s] = {
            get: function(t, e, i) {
                return e ? Vt.test(T.css(t, "display")) && 0 === t.offsetWidth ? T.swap(t, Ut, function() {
                    return ee(t, s, i)
                }) : ee(t, s, i) : void 0
            },
            set: function(t, e, i) {
                var n = i && At(t);
                return Jt(0, e, i ? te(t, s, i, v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, n), n) : 0)
            }
        }
    }),
    v.opacity || (T.cssHooks.opacity = {
        get: function(t, e) {
            return qt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style
              , n = t.currentStyle
              , s = T.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , r = n && n.filter || i.filter || "";
            ((i.zoom = 1) <= e || "" === e) && "" === T.trim(r.replace(Bt, "")) && i.removeAttribute && (i.removeAttribute("filter"),
            "" === e || n && !n.filter) || (i.filter = Bt.test(r) ? r.replace(Bt, s) : r + " " + s)
        }
    }),
    T.cssHooks.marginRight = jt(v.reliableMarginRight, function(t, e) {
        return e ? T.swap(t, {
            display: "inline-block"
        }, Ot, [t, "marginRight"]) : void 0
    }),
    T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, r) {
        T.cssHooks[s + r] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    i[s + q[e] + r] = n[e] || n[e - 2] || n[0];
                return i
            }
        },
        zt.test(s) || (T.cssHooks[s + r].set = Jt)
    }),
    T.fn.extend({
        css: function(t, e) {
            return V(this, function(t, e, i) {
                var n, s, r = {}, o = 0;
                if (T.isArray(e)) {
                    for (n = At(t),
                    s = e.length; o < s; o++)
                        r[e[o]] = T.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? T.style(t, e, i) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return Kt(this, !0)
        },
        hide: function() {
            return Kt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                X(this) ? T(this).show() : T(this).hide()
            })
        }
    }),
    (T.Tween = ie).prototype = {
        constructor: ie,
        init: function(t, e, i, n, s, r) {
            this.elem = t,
            this.prop = i,
            this.easing = s || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (T.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = ie.propHooks[this.prop];
            return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = ie.propHooks[this.prop];
            return this.pos = e = this.options.duration ? T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : ie.propHooks._default.set(this),
            this
        }
    },
    ie.prototype.init.prototype = ie.prototype,
    ie.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
            },
            set: function(t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[T.cssProps[t.prop]] || T.cssHooks[t.prop]) ? T.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    T.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    },
    T.fx = ie.prototype.init,
    T.fx.step = {};
    var ne, se, re, oe, ae, le, ce, he = /^(?:toggle|show|hide)$/, ue = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$","i"), de = /queueHooks$/, pe = [function(e, t, i) {
        var n, s, r, o, a, l, c, h = this, u = {}, d = e.style, p = e.nodeType && X(e), f = T._data(e, "fxshow");
        for (n in i.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        h.always(function() {
            h.always(function() {
                a.unqueued--,
                T.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [d.overflow, d.overflowX, d.overflowY],
        c = T.css(e, "display"),
        "inline" === ("none" === c ? T._data(e, "olddisplay") || Et(e.nodeName) : c) && "none" === T.css(e, "float") && (v.inlineBlockNeedsLayout && "inline" !== Et(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        i.overflow && (d.overflow = "hidden",
        v.shrinkWrapBlocks() || h.always(function() {
            d.overflow = i.overflow[0],
            d.overflowX = i.overflow[1],
            d.overflowY = i.overflow[2]
        })),
        t)
            if (s = t[n],
            he.exec(s)) {
                if (delete t[n],
                r = r || "toggle" === s,
                s === (p ? "hide" : "show")) {
                    if ("show" !== s || !f || void 0 === f[n])
                        continue;
                    p = !0
                }
                u[n] = f && f[n] || T.style(e, n)
            } else
                c = void 0;
        if (T.isEmptyObject(u))
            "inline" === ("none" === c ? Et(e.nodeName) : c) && (d.display = c);
        else
            for (n in f ? "hidden"in f && (p = f.hidden) : f = T._data(e, "fxshow", {}),
            r && (f.hidden = !p),
            p ? T(e).show() : h.done(function() {
                T(e).hide()
            }),
            h.done(function() {
                var t;
                for (t in T._removeData(e, "fxshow"),
                u)
                    T.style(e, t, u[t])
            }),
            u)
                o = ve(p ? f[n] : 0, n, h),
                n in f || (f[n] = o.start,
                p && (o.end = o.start,
                o.start = "width" === n || "height" === n ? 1 : 0))
    }
    ], fe = {
        "*": [function(t, e) {
            var i = this.createTween(t, e)
              , n = i.cur()
              , s = ue.exec(e)
              , r = s && s[3] || (T.cssNumber[t] ? "" : "px")
              , o = (T.cssNumber[t] || "px" !== r && +n) && ue.exec(T.css(i.elem, t))
              , a = 1
              , l = 20;
            if (o && o[3] !== r)
                for (r = r || o[3],
                s = s || [],
                o = +n || 1; o /= a = a || ".5",
                T.style(i.elem, t, o + r),
                a !== (a = i.cur() / n) && 1 !== a && --l; )
                    ;
            return s && (o = i.start = +o || +n || 0,
            i.unit = r,
            i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]),
            i
        }
        ]
    };
    function me() {
        return setTimeout(function() {
            ne = void 0
        }),
        ne = T.now()
    }
    function ge(t, e) {
        var i, n = {
            height: t
        }, s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e)
            n["margin" + (i = q[s])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function ve(t, e, i) {
        for (var n, s = (fe[e] || []).concat(fe["*"]), r = 0, o = s.length; r < o; r++)
            if (n = s[r].call(i, e, t))
                return n
    }
    function ye(r, t, e) {
        var i, o, n = 0, s = pe.length, a = T.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = ne || me(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++)
                c.tweens[n].run(i);
            return a.notifyWith(r, [c, i, e]),
            i < 1 && s ? e : (a.resolveWith(r, [c]),
            !1)
        }, c = a.promise({
            elem: r,
            props: T.extend({}, t),
            opts: T.extend(!0, {
                specialEasing: {}
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: ne || me(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                var i = T.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var e = 0
                  , i = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; e < i; e++)
                    c.tweens[e].run(1);
                return t ? a.resolveWith(r, [c, t]) : a.rejectWith(r, [c, t]),
                this
            }
        }), h = c.props;
        for (function(t, e) {
            var i, n, s, r, o;
            for (i in t)
                if (s = e[n = T.camelCase(i)],
                r = t[i],
                T.isArray(r) && (s = r[1],
                r = t[i] = r[0]),
                i !== n && (t[n] = r,
                delete t[i]),
                (o = T.cssHooks[n]) && "expand"in o)
                    for (i in r = o.expand(r),
                    delete t[n],
                    r)
                        i in t || (t[i] = r[i],
                        e[i] = s);
                else
                    e[n] = s
        }(h, c.opts.specialEasing); n < s; n++)
            if (i = pe[n].call(c, r, h, c.opts))
                return i;
        return T.map(h, ve, c),
        T.isFunction(c.opts.start) && c.opts.start.call(r, c),
        T.fx.timer(T.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    T.Animation = T.extend(ye, {
        tweener: function(t, e) {
            for (var i, n = 0, s = (t = T.isFunction(t) ? (e = t,
            ["*"]) : t.split(" ")).length; n < s; n++)
                i = t[n],
                fe[i] = fe[i] || [],
                fe[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? pe.unshift(t) : pe.push(t)
        }
    }),
    T.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? T.extend({}, t) : {
            complete: i || !i && e || T.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !T.isFunction(e) && e
        };
        return n.duration = T.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in T.fx.speeds ? T.fx.speeds[n.duration] : T.fx.speeds._default,
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            T.isFunction(n.old) && n.old.call(this),
            n.queue && T.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    T.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            function s() {
                var t = ye(this, T.extend({}, e), o);
                (r || T._data(this, "finish")) && t.stop(!0)
            }
            var r = T.isEmptyObject(e)
              , o = T.speed(t, i, n);
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(s, t, r) {
            function o(t) {
                var e = t.stop;
                delete t.stop,
                e(r)
            }
            return "string" != typeof s && (r = t,
            t = s,
            s = void 0),
            t && !1 !== s && this.queue(s || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != s && s + "queueHooks"
                  , i = T.timers
                  , n = T._data(this);
                if (e)
                    n[e] && n[e].stop && o(n[e]);
                else
                    for (e in n)
                        n[e] && n[e].stop && de.test(e) && o(n[e]);
                for (e = i.length; e--; )
                    i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(r),
                    t = !1,
                    i.splice(e, 1));
                !t && r || T.dequeue(this, s)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"),
            this.each(function() {
                var t, e = T._data(this), i = e[o + "queue"], n = e[o + "queueHooks"], s = T.timers, r = i ? i.length : 0;
                for (e.finish = !0,
                T.queue(this, o, []),
                n && n.stop && n.stop.call(this, !0),
                t = s.length; t--; )
                    s[t].elem === this && s[t].queue === o && (s[t].anim.stop(!0),
                    s.splice(t, 1));
                for (t = 0; t < r; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    T.each(["toggle", "show", "hide"], function(t, n) {
        var s = T.fn[n];
        T.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(ge(n, !0), t, e, i)
        }
    }),
    T.each({
        slideDown: ge("show"),
        slideUp: ge("hide"),
        slideToggle: ge("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        T.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }),
    T.timers = [],
    T.fx.tick = function() {
        var t, e = T.timers, i = 0;
        for (ne = T.now(); i < e.length; i++)
            (t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || T.fx.stop(),
        ne = void 0
    }
    ,
    T.fx.timer = function(t) {
        T.timers.push(t),
        t() ? T.fx.start() : T.timers.pop()
    }
    ,
    T.fx.interval = 13,
    T.fx.start = function() {
        se = se || setInterval(T.fx.tick, T.fx.interval)
    }
    ,
    T.fx.stop = function() {
        clearInterval(se),
        se = null
    }
    ,
    T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    T.fn.delay = function(n, t) {
        return n = T.fx && T.fx.speeds[n] || n,
        t = t || "fx",
        this.queue(t, function(t, e) {
            var i = setTimeout(t, n);
            e.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    (ce = S.createElement("div")).setAttribute("className", "t"),
    ce.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    ae = ce.getElementsByTagName("a")[0],
    le = (oe = S.createElement("select")).appendChild(S.createElement("option")),
    re = ce.getElementsByTagName("input")[0],
    ae.style.cssText = "top:1px",
    v.getSetAttribute = "t" !== ce.className,
    v.style = /top/.test(ae.getAttribute("style")),
    v.hrefNormalized = "/a" === ae.getAttribute("href"),
    v.checkOn = !!re.value,
    v.optSelected = le.selected,
    v.enctype = !!S.createElement("form").enctype,
    oe.disabled = !0,
    v.optDisabled = !le.disabled,
    (re = S.createElement("input")).setAttribute("value", ""),
    v.input = "" === re.getAttribute("value"),
    re.value = "t",
    re.setAttribute("type", "radio"),
    v.radioValue = "t" === re.value;
    var _e = /\r/g;
    T.fn.extend({
        val: function(i) {
            var n, t, s, e = this[0];
            return arguments.length ? (s = T.isFunction(i),
            this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = s ? i.call(this, t, T(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : T.isArray(e) && (e = T.map(e, function(t) {
                    return null == t ? "" : t + ""
                })),
                (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get"in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(_e, "") : null == t ? "" : t : void 0
        }
    }),
    T.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : T.trim(T.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || s < 0, o = r ? null : [], a = r ? s + 1 : n.length, l = s < 0 ? a : r ? s : 0; l < a; l++)
                        if (!(!(i = n[l]).selected && l !== s || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && T.nodeName(i.parentNode, "optgroup"))) {
                            if (e = T(i).val(),
                            r)
                                return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, r = T.makeArray(e), o = s.length; o--; )
                        if (n = s[o],
                        0 <= T.inArray(T.valHooks.option.get(n), r))
                            try {
                                n.selected = i = !0
                            } catch (t) {
                                n.scrollHeight
                            }
                        else
                            n.selected = !1;
                    return i || (t.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(t, e) {
                return T.isArray(e) ? t.checked = 0 <= T.inArray(T(t).val(), e) : void 0
            }
        },
        v.checkOn || (T.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var be, xe, we = T.expr.attrHandle, Te = /^(?:checked|selected)$/i, Se = v.getSetAttribute, Ce = v.input;
    T.fn.extend({
        attr: function(t, e) {
            return V(this, T.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                T.removeAttr(this, t)
            })
        }
    }),
    T.extend({
        attr: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)
                return typeof t.getAttribute === F ? T.prop(t, e, i) : (1 === r && T.isXMLDoc(t) || (e = e.toLowerCase(),
                n = T.attrHooks[e] || (T.expr.match.bool.test(e) ? xe : be)),
                void 0 === i ? n && "get"in n && null !== (s = n.get(t, e)) ? s : null == (s = T.find.attr(t, e)) ? void 0 : s : null !== i ? n && "set"in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""),
                i) : void T.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0, r = e && e.match(O);
            if (r && 1 === t.nodeType)
                for (; i = r[s++]; )
                    n = T.propFix[i] || i,
                    T.expr.match.bool.test(i) ? Ce && Se || !Te.test(i) ? t[n] = !1 : t[T.camelCase("default-" + i)] = t[n] = !1 : T.attr(t, i, ""),
                    t.removeAttribute(Se ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!v.radioValue && "radio" === e && T.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        }
    }),
    xe = {
        set: function(t, e, i) {
            return !1 === e ? T.removeAttr(t, i) : Ce && Se || !Te.test(i) ? t.setAttribute(!Se && T.propFix[i] || i, i) : t[T.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var r = we[e] || T.find.attr;
        we[e] = Ce && Se || !Te.test(e) ? function(t, e, i) {
            var n, s;
            return i || (s = we[e],
            we[e] = n,
            n = null != r(t, e, i) ? e.toLowerCase() : null,
            we[e] = s),
            n
        }
        : function(t, e, i) {
            return i ? void 0 : t[T.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Ce && Se || (T.attrHooks.value = {
        set: function(t, e, i) {
            return T.nodeName(t, "input") ? void (t.defaultValue = e) : be && be.set(t, e, i)
        }
    }),
    Se || (be = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
            n.value = e += "",
            "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    },
    we.id = we.name = we.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }
    ,
    T.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: be.set
    },
    T.attrHooks.contenteditable = {
        set: function(t, e, i) {
            be.set(t, "" !== e && e, i)
        }
    },
    T.each(["width", "height"], function(t, i) {
        T.attrHooks[i] = {
            set: function(t, e) {
                return "" === e ? (t.setAttribute(i, "auto"),
                e) : void 0
            }
        }
    })),
    v.style || (T.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ke = /^(?:input|select|textarea|button|object)$/i
      , Pe = /^(?:a|area)$/i;
    T.fn.extend({
        prop: function(t, e) {
            return V(this, T.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = T.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (t) {}
            })
        }
    }),
    T.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)
                return (1 !== r || !T.isXMLDoc(t)) && (e = T.propFix[e] || e,
                s = T.propHooks[e]),
                void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ke.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    v.hrefNormalized || T.each(["href", "src"], function(t, e) {
        T.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    v.optSelected || (T.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }),
    v.enctype || (T.propFix.enctype = "encoding");
    var Ee = /[\t\r\n\f]/g;
    T.fn.extend({
        addClass: function(e) {
            var t, i, n, s, r, o, a = 0, l = this.length, c = "string" == typeof e && e;
            if (T.isFunction(e))
                return this.each(function(t) {
                    T(this).addClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(O) || []; a < l; a++)
                    if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")) {
                        for (r = 0; s = t[r++]; )
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o = T.trim(n),
                        i.className !== o && (i.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, r, o, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (T.isFunction(e))
                return this.each(function(t) {
                    T(this).removeClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(O) || []; a < l; a++)
                    if (n = 1 === (i = this[a]).nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")) {
                        for (r = 0; s = t[r++]; )
                            for (; 0 <= n.indexOf(" " + s + " "); )
                                n = n.replace(" " + s + " ", " ");
                        o = e ? T.trim(n) : "",
                        i.className !== o && (i.className = o)
                    }
            return this
        },
        toggleClass: function(s, e) {
            var r = typeof s;
            return "boolean" == typeof e && "string" == r ? e ? this.addClass(s) : this.removeClass(s) : this.each(T.isFunction(s) ? function(t) {
                T(this).toggleClass(s.call(this, t, this.className, e), e)
            }
            : function() {
                if ("string" == r)
                    for (var t, e = 0, i = T(this), n = s.match(O) || []; t = n[e++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    r !== F && "boolean" != r || (this.className && T._data(this, "__className__", this.className),
                    this.className = !this.className && !1 !== s && T._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(Ee, " ").indexOf(e))
                    return !0;
            return !1
        }
    }),
    T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        T.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }),
    T.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ae = T.now()
      , Oe = /\?/
      , De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function(t) {
        if (f.JSON && f.JSON.parse)
            return f.JSON.parse(t + "");
        var s, r = null, e = T.trim(t + "");
        return e && !T.trim(e.replace(De, function(t, e, i, n) {
            return s && e && (r = 0),
            0 === r ? t : (s = i || e,
            r += !n - !i,
            "")
        })) ? Function("return " + e)() : T.error("Invalid JSON: " + t)
    }
    ,
    T.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t)
            return null;
        try {
            f.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
            e.loadXML(t))
        } catch (t) {
            e = void 0
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t),
        e
    }
    ;
    var Ne, Me, Re = /#.*$/, Fe = /([?&])_=[^&]*/, Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ie = /^(?:GET|HEAD)$/, ze = /^\/\//, $e = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, He = {}, je = {}, Xe = "*/".concat("*");
    try {
        Me = location.href
    } catch (t) {
        (Me = S.createElement("a")).href = "",
        Me = Me.href
    }
    function Be(r) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var i, n = 0, s = t.toLowerCase().match(O) || [];
            if (T.isFunction(e))
                for (; i = s[n++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (r[i] = r[i] || []).unshift(e)) : (r[i] = r[i] || []).push(e)
        }
    }
    function qe(e, s, r, o) {
        var a = {}
          , l = e === je;
        function c(t) {
            var n;
            return a[t] = !0,
            T.each(e[t] || [], function(t, e) {
                var i = e(s, r, o);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i),
                c(i),
                !1)
            }),
            n
        }
        return c(s.dataTypes[0]) || !a["*"] && c("*")
    }
    function Ve(t, e) {
        var i, n, s = T.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((s[n] ? t : i = i || {})[n] = e[n]);
        return i && T.extend(!0, t, i),
        t
    }
    Ne = $e.exec(Me.toLowerCase()) || [],
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Me,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ne[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": T.parseJSON,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ve(Ve(t, T.ajaxSettings), e) : Ve(T.ajaxSettings, t)
        },
        ajaxPrefilter: Be(He),
        ajaxTransport: Be(je),
        ajax: function(t, e) {
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var i, n, h, u, d, p, f, s, m = T.ajaxSetup({}, e), g = m.context || m, v = m.context && (g.nodeType || g.jquery) ? T(g) : T.event, y = T.Deferred(), _ = T.Callbacks("once memory"), b = m.statusCode || {}, r = {}, o = {}, x = 0, a = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; e = Le.exec(u); )
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? u : null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return x || (t = o[i] = o[i] || t,
                    r[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return x || (m.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (x < 2)
                            for (e in t)
                                b[e] = [b[e], t[e]];
                        else
                            w.always(t[w.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || a;
                    return f && f.abort(e),
                    l(0, e),
                    this
                }
            };
            if (y.promise(w).complete = _.add,
            w.success = w.done,
            w.error = w.fail,
            m.url = ((t || m.url || Me) + "").replace(Re, "").replace(ze, Ne[1] + "//"),
            m.type = e.method || e.type || m.method || m.type,
            m.dataTypes = T.trim(m.dataType || "*").toLowerCase().match(O) || [""],
            null == m.crossDomain && (i = $e.exec(m.url.toLowerCase()),
            m.crossDomain = !(!i || i[1] === Ne[1] && i[2] === Ne[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ne[3] || ("http:" === Ne[1] ? "80" : "443")))),
            m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)),
            qe(He, m, e, w),
            2 === x)
                return w;
            for (n in (p = m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !Ie.test(m.type),
            h = m.url,
            m.hasContent || (m.data && (h = m.url += (Oe.test(h) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (m.url = Fe.test(h) ? h.replace(Fe, "$1_=" + Ae++) : h + (Oe.test(h) ? "&" : "?") + "_=" + Ae++)),
            m.ifModified && (T.lastModified[h] && w.setRequestHeader("If-Modified-Since", T.lastModified[h]),
            T.etag[h] && w.setRequestHeader("If-None-Match", T.etag[h])),
            (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                w.setRequestHeader(n, m.headers[n]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || 2 === x))
                return w.abort();
            for (n in a = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                w[n](m[n]);
            if (f = qe(je, m, e, w)) {
                w.readyState = 1,
                p && v.trigger("ajaxSend", [w, m]),
                m.async && 0 < m.timeout && (d = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    x = 1,
                    f.send(r, l)
                } catch (t) {
                    if (!(x < 2))
                        throw t;
                    l(-1, t)
                }
            } else
                l(-1, "No Transport");
            function l(t, e, i, n) {
                var s, r, o, a, l, c = e;
                2 !== x && (x = 2,
                d && clearTimeout(d),
                f = void 0,
                u = n || "",
                w.readyState = 0 < t ? 4 : 0,
                s = 200 <= t && t < 300 || 304 === t,
                i && (a = function(t, e, i) {
                    for (var n, s, r, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s)
                        for (o in a)
                            if (a[o] && a[o].test(s)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in i)
                        r = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            n = n || o
                        }
                        r = r || n
                    }
                    return r ? (r !== l[0] && l.unshift(r),
                    i[r]) : void 0
                }(m, w, i)),
                a = function(t, e, i, n) {
                    var s, r, o, a, l, c = {}, h = t.dataTypes.slice();
                    if (h[1])
                        for (o in t.converters)
                            c[o.toLowerCase()] = t.converters[o];
                    for (r = h.shift(); r; )
                        if (t.responseFields[r] && (i[t.responseFields[r]] = e),
                        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = r,
                        r = h.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(o = c[l + " " + r] || c["* " + r]))
                                    for (s in c)
                                        if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0],
                                            h.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== o)
                                    if (o && t.throws)
                                        e = o(e);
                                    else
                                        try {
                                            e = o(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: o ? t : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, w, s),
                s ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (T.lastModified[h] = l),
                (l = w.getResponseHeader("etag")) && (T.etag[h] = l)),
                204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state,
                r = a.data,
                s = !(o = a.error))) : (o = c,
                !t && c || (c = "error",
                t < 0 && (t = 0))),
                w.status = t,
                w.statusText = (e || c) + "",
                s ? y.resolveWith(g, [r, c, w]) : y.rejectWith(g, [w, c, o]),
                w.statusCode(b),
                b = void 0,
                p && v.trigger(s ? "ajaxSuccess" : "ajaxError", [w, m, s ? r : o]),
                _.fireWith(g, [w, c]),
                p && (v.trigger("ajaxComplete", [w, m]),
                --T.active || T.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(t, e, i) {
            return T.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return T.get(t, void 0, e, "script")
        }
    }),
    T.each(["get", "post"], function(t, s) {
        T[s] = function(t, e, i, n) {
            return T.isFunction(e) && (n = n || i,
            i = e,
            e = void 0),
            T.ajax({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            })
        }
    }),
    T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        T.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    T._evalUrl = function(t) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    T.fn.extend({
        wrapAll: function(e) {
            return T.isFunction(e) ? this.each(function(t) {
                T(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = T(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                    t = t.firstChild;
                return t
            }).append(this)),
            this);
            var t
        },
        wrapInner: function(i) {
            return this.each(T.isFunction(i) ? function(t) {
                T(this).wrapInner(i.call(this, t))
            }
            : function() {
                var t = T(this)
                  , e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            }
            )
        },
        wrap: function(e) {
            var i = T.isFunction(e);
            return this.each(function(t) {
                T(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    T.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (t.style && t.style.display || T.css(t, "display"))
    }
    ,
    T.expr.filters.visible = function(t) {
        return !T.expr.filters.hidden(t)
    }
    ;
    var Ye = /%20/g
      , We = /\[\]$/
      , Ue = /\r?\n/g
      , Ge = /^(?:submit|button|image|reset|file)$/i
      , Qe = /^(?:input|select|textarea|keygen)/i;
    T.param = function(t, e) {
        function i(t, e) {
            e = T.isFunction(e) ? e() : null == e ? "" : e,
            s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }
        var n, s = [];
        if (void 0 === e && (e = T.ajaxSettings && T.ajaxSettings.traditional),
        T.isArray(t) || t.jquery && !T.isPlainObject(t))
            T.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                !function i(n, t, s, r) {
                    var e;
                    if (T.isArray(t))
                        T.each(t, function(t, e) {
                            s || We.test(n) ? r(n, e) : i(n + "[" + ("object" == typeof e ? t : "") + "]", e, s, r)
                        });
                    else if (s || "object" !== T.type(t))
                        r(n, t);
                    else
                        for (e in t)
                            i(n + "[" + e + "]", t[e], s, r)
                }(n, t[n], e, i);
        return s.join("&").replace(Ye, "+")
    }
    ,
    T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && Qe.test(this.nodeName) && !Ge.test(t) && (this.checked || !Y.test(t))
            }).map(function(t, e) {
                var i = T(this).val();
                return null == i ? null : T.isArray(i) ? T.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ue, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ue, "\r\n")
                }
            }).get()
        }
    }),
    T.ajaxSettings.xhr = void 0 !== f.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && ti() || function() {
            try {
                return new f.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }()
    }
    : ti;
    var Ze = 0
      , Ke = {}
      , Je = T.ajaxSettings.xhr();
    function ti() {
        try {
            return new f.XMLHttpRequest
        } catch (t) {}
    }
    f.ActiveXObject && T(f).on("unload", function() {
        for (var t in Ke)
            Ke[t](void 0, !0)
    }),
    v.cors = !!Je && "withCredentials"in Je,
    (Je = v.ajax = !!Je) && T.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || v.cors)
            return {
                send: function(t, r) {
                    var e, o = l.xhr(), a = ++Ze;
                    if (o.open(l.type, l.url, l.async, l.username, l.password),
                    l.xhrFields)
                        for (e in l.xhrFields)
                            o[e] = l.xhrFields[e];
                    for (e in l.mimeType && o.overrideMimeType && o.overrideMimeType(l.mimeType),
                    l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        void 0 !== t[e] && o.setRequestHeader(e, t[e] + "");
                    o.send(l.hasContent && l.data || null),
                    c = function(t, e) {
                        var i, n, s;
                        if (c && (e || 4 === o.readyState))
                            if (delete Ke[a],
                            c = void 0,
                            o.onreadystatechange = T.noop,
                            e)
                                4 !== o.readyState && o.abort();
                            else {
                                s = {},
                                i = o.status,
                                "string" == typeof o.responseText && (s.text = o.responseText);
                                try {
                                    n = o.statusText
                                } catch (t) {
                                    n = ""
                                }
                                i || !l.isLocal || l.crossDomain ? 1223 === i && (i = 204) : i = s.text ? 200 : 404
                            }
                        s && r(i, n, s, o.getAllResponseHeaders())
                    }
                    ,
                    l.async ? 4 === o.readyState ? setTimeout(c) : o.onreadystatechange = Ke[a] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
    }),
    T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return T.globalEval(t),
                t
            }
        }
    }),
    T.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    T.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, s = S.head || T("head")[0] || S.documentElement;
            return {
                send: function(t, i) {
                    (n = S.createElement("script")).async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(t, e) {
                        !e && n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        e || i(200, "success"))
                    }
                    ,
                    s.insertBefore(n, s.firstChild)
                },
                abort: function() {
                    n && n.onload(void 0, !0)
                }
            }
        }
    });
    var ei = []
      , ii = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ei.pop() || T.expando + "_" + Ae++;
            return this[t] = !0,
            t
        }
    }),
    T.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, s, r, o = !1 !== t.jsonp && (ii.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(t.data) && "data");
        return o || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = T.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        o ? t[o] = t[o].replace(ii, "$1" + n) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
        t.converters["script json"] = function() {
            return r || T.error(n + " was not called"),
            r[0]
        }
        ,
        t.dataTypes[0] = "json",
        s = f[n],
        f[n] = function() {
            r = arguments
        }
        ,
        i.always(function() {
            f[n] = s,
            t[n] && (t.jsonpCallback = e.jsonpCallback,
            ei.push(n)),
            r && T.isFunction(s) && s(r[0]),
            r = s = void 0
        }),
        "script") : void 0
    }),
    T.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (i = e,
        e = !1),
        e = e || S;
        var n = _.exec(t)
          , s = !i && [];
        return n ? [e.createElement(n[1])] : (n = T.buildFragment([t], e, s),
        s && s.length && T(s).remove(),
        T.merge([], n.childNodes))
    }
    ;
    var ni = T.fn.load;
    T.fn.load = function(t, e, i) {
        if ("string" != typeof t && ni)
            return ni.apply(this, arguments);
        var n, s, r, o = this, a = t.indexOf(" ");
        return 0 <= a && (n = T.trim(t.slice(a, t.length)),
        t = t.slice(0, a)),
        T.isFunction(e) ? (i = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        0 < o.length && T.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments,
            o.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }
        ),
        this
    }
    ,
    T.expr.filters.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var si = f.document.documentElement;
    function ri(t) {
        return T.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    T.offset = {
        setOffset: function(t, e, i) {
            var n, s, r, o, a, l, c = T.css(t, "position"), h = T(t), u = {};
            "static" === c && (t.style.position = "relative"),
            a = h.offset(),
            r = T.css(t, "top"),
            l = T.css(t, "left"),
            s = ("absolute" === c || "fixed" === c) && -1 < T.inArray("auto", [r, l]) ? (o = (n = h.position()).top,
            n.left) : (o = parseFloat(r) || 0,
            parseFloat(l) || 0),
            T.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (u.top = e.top - a.top + o),
            null != e.left && (u.left = e.left - a.left + s),
            "using"in e ? e.using.call(t, u) : h.css(u)
        }
    },
    T.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    T.offset.setOffset(this, e, t)
                });
            var t, i, n = {
                top: 0,
                left: 0
            }, s = this[0], r = s && s.ownerDocument;
            return r ? (t = r.documentElement,
            T.contains(t, s) ? (typeof s.getBoundingClientRect !== F && (n = s.getBoundingClientRect()),
            i = ri(r),
            {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                }, n = this[0];
                return "fixed" === T.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                T.nodeName(t[0], "html") || (i = t.offset()),
                i.top += T.css(t[0], "borderTopWidth", !0),
                i.left += T.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - T.css(n, "marginTop", !0),
                    left: e.left - i.left - T.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || si; t && !T.nodeName(t, "html") && "static" === T.css(t, "position"); )
                    t = t.offsetParent;
                return t || si
            })
        }
    }),
    T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var r = /Y/.test(s);
        T.fn[e] = function(t) {
            return V(this, function(t, e, i) {
                var n = ri(t);
                return void 0 === i ? n ? s in n ? n[s] : n.document.documentElement[e] : t[e] : void (n ? n.scrollTo(r ? T(n).scrollLeft() : i, r ? i : T(n).scrollTop()) : t[e] = i)
            }, e, t, arguments.length, null)
        }
    }),
    T.each(["top", "left"], function(t, i) {
        T.cssHooks[i] = jt(v.pixelPosition, function(t, e) {
            return e ? (e = Ot(t, i),
            $t.test(e) ? T(t).position()[i] + "px" : e) : void 0
        })
    }),
    T.each({
        Height: "height",
        Width: "width"
    }, function(r, o) {
        T.each({
            padding: "inner" + r,
            content: o,
            "": "outer" + r
        }, function(n, t) {
            T.fn[t] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t)
                  , s = n || (!0 === t || !0 === e ? "margin" : "border");
                return V(this, function(t, e, i) {
                    var n;
                    return T.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement,
                    Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? T.css(t, e, s) : T.style(t, e, i, s)
                }, o, i ? t : void 0, i, null)
            }
        })
    }),
    T.fn.size = function() {
        return this.length
    }
    ,
    T.fn.andSelf = T.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var oi = f.jQuery
      , ai = f.$;
    return T.noConflict = function(t) {
        return f.$ === T && (f.$ = ai),
        t && f.jQuery === T && (f.jQuery = oi),
        T
    }
    ,
    typeof t === F && (f.jQuery = f.$ = T),
    T
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t, T, x, w, S, v, g, e;
    function y(t, e, i, n) {
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = n,
        this.da = n - t,
        this.ca = i - t,
        this.ba = e - t
    }
    function C(t, e, i, n) {
        var s = {
            a: t
        }
          , r = {}
          , o = {}
          , a = {
            c: n
        }
          , l = (t + e) / 2
          , c = (e + i) / 2
          , h = (i + n) / 2
          , u = (l + c) / 2
          , d = (c + h) / 2
          , p = (d - u) / 8;
        return s.b = l + (t - l) / 4,
        r.b = u + p,
        s.c = r.a = (s.b + r.b) / 2,
        r.c = o.a = (u + d) / 2,
        o.b = d - p,
        a.b = h + (n - h) / 4,
        o.c = a.a = (o.b + a.b) / 2,
        [s, r, o, a]
    }
    function p(t, e, i, n, s, r) {
        var o, a, l, c, h, u, d, p, f = {}, m = [], g = r || t[0];
        for (a in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == e && (e = 1),
        t[0])
            m.push(a);
        if (1 < t.length) {
            for (p = t[t.length - 1],
            d = !0,
            o = m.length; -1 < --o; )
                if (a = m[o],
                .05 < Math.abs(g[a] - p[a])) {
                    d = !1;
                    break
                }
            d && (t = t.concat(),
            r && t.unshift(r),
            t.push(t[1]),
            r = t[t.length - 3])
        }
        for (x.length = w.length = S.length = 0,
        o = m.length; -1 < --o; )
            a = m[o],
            v[a] = -1 !== s.indexOf("," + a + ","),
            f[a] = function(t, e, i, n) {
                var s, r, o, a, l, c, h = [];
                if (n)
                    for (r = (t = [n].concat(t)).length; -1 < --r; )
                        "string" == typeof (c = t[r][e]) && "=" === c.charAt(1) && (t[r][e] = n[e] + Number(c.charAt(0) + c.substr(2)));
                if ((s = t.length - 2) < 0)
                    return h[0] = new y(t[0][e],0,0,t[s < -1 ? 0 : 1][e]),
                    h;
                for (r = 0; r < s; r++)
                    o = t[r][e],
                    a = t[r + 1][e],
                    h[r] = new y(o,0,0,a),
                    i && (l = t[r + 2][e],
                    x[r] = (x[r] || 0) + (a - o) * (a - o),
                    w[r] = (w[r] || 0) + (l - a) * (l - a));
                return h[r] = new y(t[r][e],0,0,t[r + 1][e]),
                h
            }(t, a, v[a], r);
        for (o = x.length; -1 < --o; )
            x[o] = Math.sqrt(x[o]),
            w[o] = Math.sqrt(w[o]);
        if (!n) {
            for (o = m.length; -1 < --o; )
                if (v[a])
                    for (u = (l = f[m[o]]).length - 1,
                    c = 0; c < u; c++)
                        h = l[c + 1].da / w[c] + l[c].da / x[c],
                        S[c] = (S[c] || 0) + h * h;
            for (o = S.length; -1 < --o; )
                S[o] = Math.sqrt(S[o])
        }
        for (o = m.length,
        c = i ? 4 : 1; -1 < --o; )
            (function(t, e, i, n, s) {
                for (var r, o, a, l, c, h, u, d, p, f, m, g, v = t.length - 1, y = 0, _ = t[0].a, b = 0; b < v; b++)
                    r = (l = t[y]).a,
                    o = l.d,
                    a = t[y + 1].d,
                    u = s ? (f = x[b],
                    g = .25 * ((m = w[b]) + f) * e / (!n && S[b] || .5),
                    o - ((c = o - (o - r) * (n ? .5 * e : 0 !== f ? g / f : 0)) + (((h = o + (a - o) * (n ? .5 * e : 0 !== m ? g / m : 0)) - c) * (3 * f / (f + m) + .5) / 4 || 0))) : o - ((c = o - .5 * (o - r) * e) + (h = o + .5 * (a - o) * e)) / 2,
                    c += u,
                    h += u,
                    l.c = d = c,
                    l.b = 0 !== b ? _ : _ = l.a + .6 * (l.c - l.a),
                    l.da = o - r,
                    l.ca = d - r,
                    l.ba = _ - r,
                    i ? (p = C(r, _, d, o),
                    t.splice(y, 1, p[0], p[1], p[2], p[3]),
                    y += 4) : y++,
                    _ = h;
                (l = t[y]).b = _,
                l.c = _ + .4 * (l.d - _),
                l.da = l.d - l.a,
                l.ca = l.c - l.a,
                l.ba = _ - l.a,
                i && (p = C(l.a, _, l.c, l.d),
                t.splice(y, 1, p[0], p[1], p[2], p[3]))
            }
            )(l = f[a = m[o]], e, i, n, v[a]),
            d && (l.splice(0, c),
            l.splice(l.length - c, c));
        return f
    }
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, h, f) {
        function m(t) {
            for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]))
                ;
            return e
        }
        var g = function(t, e, i) {
            f.call(this, t, e, i),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = g.prototype.render
        }
          , v = 1e-10
          , y = f._internals
          , _ = y.isSelector
          , b = y.isArray
          , t = g.prototype = f.to({}, .1, {})
          , x = [];
        g.version = "1.14.1",
        t.constructor = g,
        t.kill()._gc = !1,
        g.killTweensOf = g.killDelayedCallsTo = f.killTweensOf,
        g.getTweensOf = f.getTweensOf,
        g.lagSmoothing = f.lagSmoothing,
        g.ticker = f.ticker,
        g.render = f.render,
        t.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            f.prototype.invalidate.call(this)
        }
        ,
        t.updateTo = function(t, e) {
            var i, n = this.ratio;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            t)
                this.vars[i] = t[i];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && f._onPluginEvent("_onDisable", this),
                .998 < this._time / this._duration) {
                    var s = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(s, !0, !1)
                } else if (0 < this._time) {
                    this._initted = !1,
                    this._init();
                    for (var r, o = 1 / (1 - n), a = this._firstPT; a; )
                        r = a.s + a.c,
                        a.c *= o,
                        a.s = r - a.c,
                        a = a._next
                }
            return this
        }
        ,
        t.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, r, o, a, l, c, h, u = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, p = this._totalTime, f = this._cycle, m = this._duration, g = this._rawPrevTime;
            if (u <= t ? (this._totalTime = u,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            s = "onComplete"),
            0 !== m || !this._initted && this.vars.lazy && !i || (this._startTime === this._timeline._duration && (t = 0),
            (0 === t || g < 0 || g === v) && g !== t && (i = !0,
            v < g && (s = "onReverseComplete")),
            this._rawPrevTime = h = !e || t || g === t ? t : v)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== p || 0 === m && 0 < g && g !== v) && (s = "onReverseComplete",
            n = this._reversed),
            t < 0 && (this._active = !1,
            0 !== m || !this._initted && this.vars.lazy && !i || (0 <= g && (i = !0),
            this._rawPrevTime = h = !e || t || g === t ? t : v)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (o = m + this._repeatDelay,
            this._cycle = this._totalTime / o >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--,
            this._time = this._totalTime - this._cycle * o,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time),
            this._time > m ? this._time = m : this._time < 0 && (this._time = 0)),
            this._easeType ? (a = this._time / m,
            (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a),
            3 === l && (a *= 2),
            1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a),
            this.ratio = 1 === l ? 1 - a : 2 === l ? a : this._time / m < .5 ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / m)),
            d !== this._time || i || f !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = d,
                        this._totalTime = p,
                        this._rawPrevTime = g,
                        this._cycle = f,
                        y.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / m) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== d && 0 <= t && (this._active = !0),
                0 === p && (2 === this._initted && 0 < t && this._init(),
                this._startAt && (0 <= t ? this._startAt.render(t, e, i) : s = s || "_dummyGS"),
                !this.vars.onStart || 0 === this._totalTime && 0 !== m || (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || x))),
                r = this._firstPT; r; )
                    r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                    r = r._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || this._totalTime === p && !n || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x)),
                this._cycle !== f && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || x)),
                !s || this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || x),
                0 === m && this._rawPrevTime === v && h !== v && (this._rawPrevTime = 0))
            } else
                p !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x))
        }
        ,
        g.to = function(t, e, i) {
            return new g(t,e,i)
        }
        ,
        g.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new g(t,e,i)
        }
        ,
        g.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new g(t,e,n)
        }
        ,
        g.staggerTo = g.allTo = function(t, e, i, n, s, r, o) {
            n = n || 0;
            function a() {
                i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments),
                s.apply(o || this, r || x)
            }
            var l, c, h, u, d = i.delay || 0, p = [];
            for (b(t) || ("string" == typeof t && (t = f.selector(t) || t),
            _(t) && (t = m(t))),
            t = t || [],
            n < 0 && ((t = m(t)).reverse(),
            n *= -1),
            l = t.length - 1,
            h = 0; h <= l; h++) {
                for (u in c = {},
                i)
                    c[u] = i[u];
                c.delay = d,
                h === l && s && (c.onComplete = a),
                p[h] = new g(t[h],e,c),
                d += n
            }
            return p
        }
        ,
        g.staggerFrom = g.allFrom = function(t, e, i, n, s, r, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            g.staggerTo(t, e, i, n, s, r, o)
        }
        ,
        g.staggerFromTo = g.allFromTo = function(t, e, i, n, s, r, o, a) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            g.staggerTo(t, e, n, s, r, o, a)
        }
        ,
        g.delayedCall = function(t, e, i, n, s) {
            return new g(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        g.set = function(t, e) {
            return new g(t,0,e)
        }
        ,
        g.isTweening = function(t) {
            return 0 < f.getTweensOf(t, !0).length
        }
        ;
        var r = function(t, e) {
            for (var i = [], n = 0, s = t._first; s; )
                s instanceof f ? i[n++] = s : (e && (i[n++] = s),
                n = (i = i.concat(r(s, e))).length),
                s = s._next;
            return i
        }
          , u = g.getAllTweens = function(t) {
            return r(n._rootTimeline, t).concat(r(n._rootFramesTimeline, t))
        }
        ;
        g.killAll = function(t, e, i, n) {
            null == e && (e = !0),
            null == i && (i = !0);
            for (var s, r, o = u(0 != n), a = o.length, l = e && i && n, c = 0; c < a; c++)
                r = o[c],
                (l || r instanceof h || (s = r.target === r.vars.onComplete) && i || e && !s) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
        }
        ,
        g.killChildTweensOf = function(t, e) {
            if (null != t) {
                var i, n, s, r, o, a = y.tweenLookup;
                if ("string" == typeof t && (t = f.selector(t) || t),
                _(t) && (t = m(t)),
                b(t))
                    for (r = t.length; -1 < --r; )
                        g.killChildTweensOf(t[r], e);
                else {
                    for (s in i = [],
                    a)
                        for (n = a[s].target.parentNode; n; )
                            n === t && (i = i.concat(a[s].tweens)),
                            n = n.parentNode;
                    for (o = i.length,
                    r = 0; r < o; r++)
                        e && i[r].totalTime(i[r].totalDuration()),
                        i[r]._enabled(!1, !1)
                }
            }
        }
        ;
        function s(t, e, i, n) {
            e = !1 !== e,
            i = !1 !== i;
            for (var s, r, o = u(n = !1 !== n), a = e && i && n, l = o.length; -1 < --l; )
                r = o[l],
                (a || r instanceof h || (s = r.target === r.vars.onComplete) && i || e && !s) && r.paused(t)
        }
        return g.pauseAll = function(t, e, i) {
            s(!0, t, e, i)
        }
        ,
        g.resumeAll = function(t, e, i) {
            s(!1, t, e, i)
        }
        ,
        g.globalTimeScale = function(t) {
            var e = n._rootTimeline
              , i = f.ticker.time;
            return arguments.length ? (t = t || v,
            e._startTime = i - (i - e._startTime) * e._timeScale / t,
            e = n._rootFramesTimeline,
            i = f.ticker.frame,
            e._startTime = i - (i - e._startTime) * e._timeScale / t,
            e._timeScale = n._rootTimeline._timeScale = t) : e._timeScale
        }
        ,
        t.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        t.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        t.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        t.duration = function(t) {
            return arguments.length ? n.prototype.duration.call(this, t) : this._duration
        }
        ,
        t.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        t.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        t.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        t.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        g
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(h, u, d) {
        function p(t) {
            u.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var e, i, n = this.vars;
            for (i in n)
                e = n[i],
                y(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
            y(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
        }
        function f(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
        function s(t, e, i, n) {
            var s = t._timeline._totalTime;
            !e && this._forcingPlayhead || (t._timeline.pause(t._startTime),
            e && e.apply(n || t._timeline, i || x),
            this._forcingPlayhead && t._timeline.seek(s))
        }
        function m(t) {
            for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]))
                ;
            return e
        }
        var g = 1e-10
          , t = d._internals
          , v = t.isSelector
          , y = t.isArray
          , _ = t.lazyTweens
          , b = t.lazyRender
          , x = []
          , o = _gsScope._gsDefine.globals
          , e = p.prototype = new u;
        return p.version = "1.14.1",
        e.constructor = p,
        e.kill()._gc = e._forcingPlayhead = !1,
        e.to = function(t, e, i, n) {
            var s = i.repeat && o.TweenMax || d;
            return e ? this.add(new s(t,e,i), n) : this.set(t, i, n)
        }
        ,
        e.from = function(t, e, i, n) {
            return this.add((i.repeat && o.TweenMax || d).from(t, e, i), n)
        }
        ,
        e.fromTo = function(t, e, i, n, s) {
            var r = n.repeat && o.TweenMax || d;
            return e ? this.add(r.fromTo(t, e, i, n), s) : this.set(t, n, s)
        }
        ,
        e.staggerTo = function(t, e, i, n, s, r, o, a) {
            var l, c = new p({
                onComplete: r,
                onCompleteParams: o,
                onCompleteScope: a,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = d.selector(t) || t),
            v(t = t || []) && (t = m(t)),
            (n = n || 0) < 0 && ((t = m(t)).reverse(),
            n *= -1),
            l = 0; t.length > l; l++)
                i.startAt && (i.startAt = f(i.startAt)),
                c.to(t[l], e, f(i), l * n);
            return this.add(c, s)
        }
        ,
        e.staggerFrom = function(t, e, i, n, s, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, s, r, o, a)
        }
        ,
        e.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, s, r, o, a, l)
        }
        ,
        e.call = function(t, e, i, n) {
            return this.add(d.delayedCall(0, t, e, i), n)
        }
        ,
        e.set = function(t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0),
            null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused),
            this.add(new d(t,0,e), i)
        }
        ,
        p.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, n, s = new p(t), r = s._timeline;
            for (null == e && (e = !0),
            r._remove(s, !0),
            s._startTime = 0,
            s._rawPrevTime = s._time = s._totalTime = r._time,
            i = r._first; i; )
                n = i._next,
                e && i instanceof d && i.target === i.vars.onComplete || s.add(i, i._startTime - i._delay),
                i = n;
            return r.add(s, 0),
            s
        }
        ,
        e.add = function(t, e, i, n) {
            var s, r, o, a, l, c;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)),
            !(t instanceof h)) {
                if (t instanceof Array || t && t.push && y(t)) {
                    for (i = i || "normal",
                    n = n || 0,
                    s = e,
                    r = t.length,
                    o = 0; o < r; o++)
                        y(a = t[o]) && (a = new p({
                            tweens: a
                        })),
                        this.add(a, s),
                        "string" != typeof a && "function" != typeof a && ("sequence" === i ? s = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())),
                        s += n;
                    return this._uncache(!0)
                }
                if ("string" == typeof t)
                    return this.addLabel(t, e);
                if ("function" != typeof t)
                    throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = d.delayedCall(0, t)
            }
            if (u.prototype.add.call(this, t, e),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (c = (l = this).rawTime() > t._startTime; l._timeline; )
                    c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1),
                    l = l._timeline;
            return this
        }
        ,
        e.remove = function(t) {
            if (t instanceof h)
                return this._remove(t, !1);
            if (t instanceof Array || t && t.push && y(t)) {
                for (var e = t.length; -1 < --e; )
                    this.remove(t[e]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }
        ,
        e._remove = function(t, e) {
            u.prototype._remove.call(this, t, e);
            var i = this._last;
            return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        e.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        e.insert = e.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        e.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        e.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        e.addPause = function(t, e, i, n) {
            return this.call(s, ["{self}", e, i, n], this, t)
        }
        ,
        e.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        e.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        e._parseTimeOrLabel = function(t, e, i, n) {
            var s;
            if (n instanceof h && n.timeline === this)
                this.remove(n);
            else if (n && (n instanceof Array || n.push && y(n)))
                for (s = n.length; -1 < --s; )
                    n[s]instanceof h && n[s].timeline === this && this.remove(n[s]);
            if ("string" == typeof e)
                return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
            if (e = e || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = this.duration());
            else {
                if (-1 === (s = t.indexOf("=")))
                    return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)),
                t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : this.duration()
            }
            return Number(t) + e
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        e.stop = function() {
            return this.paused(!0)
        }
        ,
        e.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        e.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        e.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, r, o, a, l = this._dirty ? this.totalDuration() : this._totalDuration, c = this._time, h = this._startTime, u = this._timeScale, d = this._paused;
            if (l <= t ? (this._totalTime = this._time = l,
            this._reversed || this._hasPausedChild() || (s = !0,
            o = "onComplete",
            0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === g) && this._rawPrevTime !== t && this._first && (a = !0,
            this._rawPrevTime > g && (o = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : g,
            t = l + 1e-4) : t < 1e-7 ? (((this._totalTime = this._time = 0) !== c || 0 === this._duration && this._rawPrevTime !== g && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete",
            s = this._reversed),
            t < 0 ? (this._active = !1,
            0 <= this._rawPrevTime && this._first && (a = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : g,
            t = 0,
            this._initted || (a = !0))) : this._totalTime = this._time = this._rawPrevTime = t,
            this._time !== c && this._first || i || a) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== c && 0 < t && (this._active = !0),
                0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || x)),
                this._time >= c)
                    for (n = this._first; n && (r = n._next,
                    !this._paused || d); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                else
                    for (n = this._last; n && (r = n._prev,
                    !this._paused || d); )
                        (n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                this._onUpdate && (e || (_.length && b(),
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x))),
                o && (this._gc || h !== this._startTime && u === this._timeScale || !(0 === this._time || l >= this.totalDuration()) || (s && (_.length && b(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || x)))
            }
        }
        ,
        e._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof p && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        e.getChildren = function(t, e, i, n) {
            n = n || -9999999999;
            for (var s = [], r = this._first, o = 0; r; )
                n > r._startTime || (r instanceof d ? !1 !== e && (s[o++] = r) : (!1 !== i && (s[o++] = r),
                !1 !== t && (o = (s = s.concat(r.getChildren(!0, e, i))).length))),
                r = r._next;
            return s
        }
        ,
        e.getTweensOf = function(t, e) {
            var i, n, s = this._gc, r = [], o = 0;
            for (s && this._enabled(!0, !0),
            n = (i = d.getTweensOf(t)).length; -1 < --n; )
                (i[n].timeline === this || e && this._contains(i[n])) && (r[o++] = i[n]);
            return s && this._enabled(!1, !0),
            r
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        e.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first, r = this._labels; s; )
                s._startTime >= i && (s._startTime += t),
                s = s._next;
            if (e)
                for (n in r)
                    r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        }
        ,
        e._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; -1 < --n; )
                i[n]._kill(t, e) && (s = !0);
            return s
        }
        ,
        e.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        e.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return h.prototype.invalidate.call(this)
        }
        ,
        e._enabled = function(t, e) {
            if (t === this._gc)
                for (var i = this._first; i; )
                    i._enabled(t, !0),
                    i = i._next;
            return u.prototype._enabled.call(this, t, e)
        }
        ,
        e.totalTime = function() {
            this._forcingPlayhead = !0;
            var t = h.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            t
        }
        ,
        e.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        e.totalDuration = function(t) {
            if (arguments.length)
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
                this;
            if (this._dirty) {
                for (var e, i, n = 0, s = this._last, r = 999999999999; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime,
                    s._startTime < 0 && !s._paused && (n -= s._startTime,
                    this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale),
                    this.shiftChildren(-s._startTime, !1, -9999999999),
                    r = 0),
                    n < (i = s._startTime + s._totalDuration / s._timeScale) && (n = i),
                    s = e;
                this._duration = this._totalDuration = n,
                this._dirty = !1
            }
            return this._totalDuration
        }
        ,
        e.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
                t = t._timeline;
            return t === h._rootFramesTimeline
        }
        ,
        e.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        p
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, o, t) {
        function i(t) {
            e.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
        var S = 1e-10
          , C = []
          , n = o._internals
          , k = n.lazyTweens
          , P = n.lazyRender
          , a = new t(null,null,1,0)
          , s = i.prototype = new e;
        return s.constructor = i,
        s.kill()._gc = !1,
        i.version = "1.14.1",
        s.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            e.prototype.invalidate.call(this)
        }
        ,
        s.addCallback = function(t, e, i, n) {
            return this.add(o.delayedCall(0, t, i, n), e)
        }
        ,
        s.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); -1 < --n; )
                        i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }
        ,
        s.tweenTo = function(t, e) {
            var i, n, s, r = {
                ease: a,
                overwrite: (e = e || {}).delay ? 2 : 1,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (n in e)
                r[n] = e[n];
            return r.time = this._parseTimeOrLabel(t),
            i = Math.abs(Number(r.time) - this._time) / this._timeScale || .001,
            s = new o(this,i,r),
            r.onStart = function() {
                s.target.paused(!0),
                s.vars.time !== s.target.time() && i === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale),
                e.onStart && e.onStart.apply(e.onStartScope || s, e.onStartParams || C)
            }
            ,
            s
        }
        ,
        s.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        s.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, r, o, a, l, c = this._dirty ? this.totalDuration() : this._totalDuration, h = this._duration, u = this._time, d = this._totalTime, p = this._startTime, f = this._timeScale, m = this._rawPrevTime, g = this._paused, v = this._cycle;
            if (c <= t ? (this._locked || (this._totalTime = c,
            this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (s = !0,
            o = "onComplete",
            0 === this._duration && (0 === t || m < 0 || m === S) && m !== t && this._first && (a = !0,
            S < m && (o = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : S,
            this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = h) + 1e-4) : t < 1e-7 ? (this._locked || (this._totalTime = this._cycle = 0),
            ((this._time = 0) !== u || 0 === h && m !== S && (0 < m || t < 0 && 0 <= m) && !this._locked) && (o = "onReverseComplete",
            s = this._reversed),
            t < 0 ? (this._active = !1,
            0 <= m && this._first && (a = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = h || !e || t || this._rawPrevTime === t ? t : S,
            t = 0,
            this._initted || (a = !0))) : (0 === h && m < 0 && (a = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (l = h + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time),
            this._time > h ? t = (this._time = h) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time))),
            this._cycle !== v && !this._locked) {
                var y = this._yoyo && 0 != (1 & v)
                  , _ = y === (this._yoyo && 0 != (1 & this._cycle))
                  , b = this._totalTime
                  , x = this._cycle
                  , w = this._rawPrevTime
                  , T = this._time;
                if (this._totalTime = v * h,
                v > this._cycle ? y = !y : this._totalTime += h,
                this._time = u,
                this._rawPrevTime = 0 === h ? m - 1e-4 : m,
                this._cycle = v,
                this._locked = !0,
                u = y ? 0 : h,
                this.render(u, e, 0 === h),
                e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || C),
                _ && (u = y ? h + 1e-4 : -1e-4,
                this.render(u, !0, !1)),
                this._locked = !1,
                this._paused && !g)
                    return;
                this._time = T,
                this._totalTime = b,
                this._cycle = x,
                this._rawPrevTime = w
            }
            if (this._time !== u && this._first || i || a) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== d && 0 < t && (this._active = !0),
                0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || C)),
                this._time >= u)
                    for (n = this._first; n && (r = n._next,
                    !this._paused || g); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                else
                    for (n = this._last; n && (r = n._prev,
                    !this._paused || g); )
                        (n._active || u >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                this._onUpdate && (e || (k.length && P(),
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))),
                o && (this._locked || this._gc || p !== this._startTime && f === this._timeScale || !(0 === this._time || c >= this.totalDuration()) || (s && (k.length && P(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || C)))
            } else
                d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))
        }
        ,
        s.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            for (var n, s = [], r = this.getChildren(t, e, i), o = 0, a = r.length, l = 0; l < a; l++)
                (n = r[l]).isActive() && (s[o++] = n);
            return s
        }
        ,
        s.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length, n = 0; n < i; n++)
                if (e[n].time > t)
                    return e[n].name;
            return null
        }
        ,
        s.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }
        ,
        s.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        s.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        s.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        s.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        s.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        s.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        s.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        i
    }, !0),
    T = 180 / Math.PI,
    x = [],
    w = [],
    S = [],
    v = {},
    g = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.3",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._round = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, s, r, o, a, l, c = e.values || [], h = {}, u = c[0], d = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", !0 !== d && Number(d) || 0]] : null,
            u)
                this._props.push(n);
            for (r = this._props.length; -1 < --r; )
                n = this._props[r],
                this._overwriteProps.push(n),
                s = this._func[n] = "function" == typeof t[n],
                h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                a || h[n] !== c[0][n] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(c, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                var n, s, r, o, a, l, c, h, u, d, p, f = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, g = "soft" === e, v = [];
                if (g && i && (t = [i].concat(t)),
                null == t || 1 + m > t.length)
                    throw "invalid Bezier data";
                for (u in t[0])
                    v.push(u);
                for (l = v.length; -1 < --l; ) {
                    for (f[u = v[l]] = a = [],
                    d = 0,
                    h = t.length,
                    c = 0; c < h; c++)
                        n = null == i ? t[c][u] : "string" == typeof (p = t[c][u]) && "=" === p.charAt(1) ? i[u] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                        g && 1 < c && c < h - 1 && (a[d++] = (n + a[d - 2]) / 2),
                        a[d++] = n;
                    for (h = d - m + 1,
                    c = d = 0; c < h; c += m)
                        n = a[c],
                        s = a[c + 1],
                        r = a[c + 2],
                        o = 2 == m ? 0 : a[c + 3],
                        a[d++] = p = 3 == m ? new y(n,s,r,o) : new y(n,(2 * s + n) / 3,(2 * s + r) / 3,r);
                    a.length = d
                }
                return f
            }(c, e.type, h),
            this._segCount = this._beziers[n].length,
            this._timeRes && (l = function(t, e) {
                var i, n, s, r, o = [], a = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, u = [], d = [];
                for (i in t)
                    !function(t, e, i) {
                        for (var n, s, r, o, a, l, c, h, u, d, p, f = 1 / i, m = t.length; -1 < --m; )
                            for (r = (d = t[m]).a,
                            o = d.d - r,
                            a = d.c - r,
                            l = d.b - r,
                            n = s = 0,
                            h = 1; h <= i; h++)
                                n = s - (s = ((c = f * h) * c * o + 3 * (u = 1 - c) * (c * a + u * l)) * c),
                                e[p = m * i + h - 1] = (e[p] || 0) + n * n
                    }(t[i], o, e);
                for (s = o.length,
                n = 0; n < s; n++)
                    l += Math.sqrt(o[n]),
                    d[r = n % e] = l,
                    r === h && (c += l,
                    u[r = n / e >> 0] = d,
                    a[r] = c,
                    l = 0,
                    d = []);
                return {
                    length: c,
                    lengths: a,
                    segments: u
                }
            }(this._beziers, this._timeRes),
            this._length = l.length,
            this._lengths = l.lengths,
            this._segments = l.segments,
            this._l1 = this._li = this._s1 = this._si = 0,
            this._l2 = this._lengths[0],
            this._curSeg = this._segments[0],
            this._s2 = this._curSeg[0],
            this._prec = 1 / this._curSeg.length),
            d = this._autoRotate)
                for (this._initialRotations = [],
                d[0]instanceof Array || (this._autoRotate = d = [d]),
                r = d.length; -1 < --r; ) {
                    for (o = 0; o < 3; o++)
                        n = d[r][o],
                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = d[r][2],
                    this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(t) {
            var e, i, n, s, r, o, a, l, c, h = this._segCount, u = this._func, d = this._target, p = t !== this._startRatio;
            if (this._timeRes) {
                if (l = this._lengths,
                c = this._curSeg,
                t *= this._length,
                w = this._li,
                t > this._l2 && w < h - 1) {
                    for (a = h - 1; w < a && t >= (this._l2 = l[++w]); )
                        ;
                    this._l1 = l[w - 1],
                    this._li = w,
                    this._curSeg = c = this._segments[w],
                    this._s2 = c[this._s1 = this._si = 0]
                } else if (this._l1 > t && 0 < w) {
                    for (; 0 < w && (this._l1 = l[--w]) >= t; )
                        ;
                    0 === w && this._l1 > t ? this._l1 = 0 : w++,
                    this._l2 = l[w],
                    this._li = w,
                    this._curSeg = c = this._segments[w],
                    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                    this._s2 = c[this._si]
                }
                if (e = w,
                t -= this._l1,
                w = this._si,
                t > this._s2 && c.length - 1 > w) {
                    for (a = c.length - 1; w < a && t >= (this._s2 = c[++w]); )
                        ;
                    this._s1 = c[w - 1],
                    this._si = w
                } else if (this._s1 > t && 0 < w) {
                    for (; 0 < w && (this._s1 = c[--w]) >= t; )
                        ;
                    0 === w && this._s1 > t ? this._s1 = 0 : w++,
                    this._s2 = c[w],
                    this._si = w
                }
                r = (w + (t - this._s1) / (this._s2 - this._s1)) * this._prec
            } else
                r = (t - (e = t < 0 ? 0 : 1 <= t ? h - 1 : h * t >> 0) * (1 / h)) * h;
            for (i = 1 - r,
            w = this._props.length; -1 < --w; )
                n = this._props[w],
                o = (r * r * (s = this._beziers[n][e]).da + 3 * i * (r * s.ca + i * s.ba)) * r + s.a,
                this._round[n] && (o = Math.round(o)),
                u[n] ? d[n](o) : d[n] = o;
            if (this._autoRotate)
                for (var f, m, g, v, y, _, b, x = this._autoRotate, w = x.length; -1 < --w; )
                    n = x[w][2],
                    _ = x[w][3] || 0,
                    b = !0 === x[w][4] ? 1 : T,
                    s = this._beziers[x[w][0]],
                    f = this._beziers[x[w][1]],
                    s && f && (s = s[e],
                    f = f[e],
                    m = s.a + (s.b - s.a) * r,
                    m += ((v = s.b + (s.c - s.b) * r) - m) * r,
                    v += (s.c + (s.d - s.c) * r - v) * r,
                    g = f.a + (f.b - f.a) * r,
                    g += ((y = f.b + (f.c - f.b) * r) - g) * r,
                    y += (f.c + (f.d - f.c) * r - y) * r,
                    o = p ? Math.atan2(y - g, v - m) * b + _ : this._initialRotations[w],
                    u[n] ? d[n](o) : d[n] = o)
        }
    }),
    e = g.prototype,
    g.bezierThrough = p,
    g.cubicToQuadratic = C,
    g._autoCSS = !0,
    g.quadraticToCubic = function(t, e, i) {
        return new y(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
    }
    ,
    g._cssRegister = function() {
        var t, p, f, m, e = _gsScope._gsDefine.globals.CSSPlugin;
        e && (t = e._internals,
        p = t._parseToProxy,
        f = t._setPluginRatio,
        m = t.CSSPropTween,
        t._registerComplexSpecialProp("bezier", {
            parser: function(t, e, i, n, s, r) {
                e instanceof Array && (e = {
                    values: e
                }),
                r = new g;
                var o, a, l, c = e.values, h = c.length - 1, u = [], d = {};
                if (h < 0)
                    return s;
                for (o = 0; o <= h; o++)
                    l = p(t, c[o], n, s, r, h !== o),
                    u[o] = l.end;
                for (a in e)
                    d[a] = e[a];
                return d.values = u,
                (s = new m(t,"bezier",0,0,l.pt,2)).data = l,
                s.plugin = r,
                s.setRatio = f,
                0 === d.autoRotate && (d.autoRotate = !0),
                !d.autoRotate || d.autoRotate instanceof Array || (o = !0 === d.autoRotate ? 0 : Number(d.autoRotate),
                d.autoRotate = null != l.end.left ? [["left", "top", "rotation", o, !1]] : null != l.end.x && [["x", "y", "rotation", o, !1]]),
                d.autoRotate && (n._transform || n._enableTransforms(!1),
                l.autoRotate = n._target._gsTransform),
                r._onInitTween(l.proxy, d, n._tween),
                s
            }
        }))
    }
    ,
    e._roundProps = function(t, e) {
        for (var i = this._overwriteProps, n = i.length; -1 < --n; )
            (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
    }
    ,
    e._kill = function(t) {
        var e, i, n = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                i = n.length; -1 < --i; )
                    n[i] === e && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(r, d) {
        var f, T, tt, p, et = function() {
            r.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = et.prototype.setRatio
        }, m = {}, t = et.prototype = new r("css");
        (t.constructor = et).version = "1.14.1",
        et.API = 2,
        et.defaultTransformPerspective = 0,
        et.defaultSkewType = "compensated",
        t = "px",
        et.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        };
        function o(t, e) {
            return e.toUpperCase()
        }
        function a(t) {
            return L.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        function g(t) {
            window.console && console.log(t)
        }
        function S(t, e) {
            var i, n, s = (e = e || Y).style;
            if (void 0 !== s[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; -1 < --n && void 0 === s[i[n] + t]; )
                ;
            return 0 <= n ? (Q = "-" + (Z = 3 === n ? "ms" : i[n]).toLowerCase() + "-",
            Z + t) : null
        }
        function v(t, e) {
            var i, n, s = {};
            if (e = e || K(t, null))
                if (i = e.length)
                    for (; -1 < --i; )
                        s[e[i].replace($, o)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        s[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === s[i] && (s[i.replace($, o)] = e[i]);
            return G || (s.opacity = a(t)),
            n = At(t, e, !1),
            s.rotation = n.rotation,
            s.skewX = n.skewX,
            s.scaleX = n.scaleX,
            s.scaleY = n.scaleY,
            s.x = n.x,
            s.y = n.y,
            Ct && (s.z = n.z,
            s.rotationX = n.rotationX,
            s.rotationY = n.rotationY,
            s.scaleZ = n.scaleZ),
            s.filters && delete s.filters,
            s
        }
        function y(t, e, i, n, s) {
            var r, o, a, l = {}, c = t.style;
            for (o in i)
                "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(h, "") ? r : 0 : ot(t, o),
                void 0 !== c[o] && (a = new pt(c,o,c[o],a)));
            if (n)
                for (o in n)
                    "className" !== o && (l[o] = n[o]);
            return {
                difs: l,
                firstMPT: a
            }
        }
        function _(t, e) {
            null != t && "" !== t && "auto" !== t && "auto auto" !== t || (t = "0 0");
            var i = t.split(" ")
              , n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == s ? s = "0" : "center" === s && (s = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            e && (e.oxp = -1 !== n.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === n.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(n.replace(h, "")),
            e.oy = parseFloat(s.replace(h, ""))),
            n + " " + s + (2 < i.length ? " " + i[2] : "")
        }
        function k(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }
        function b(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }
        function x(t, e, i, n) {
            var s, r, o, a = null == t ? e : "number" == typeof t ? t : (s = 360,
            r = t.split("_"),
            o = Number(r[0].replace(h, "")) * (-1 === t.indexOf("rad") ? 1 : st) - ("=" === t.charAt(1) ? 0 : e),
            r.length && (n && (n[i] = e + o),
            -1 !== t.indexOf("short") && ((o %= s) !== o % 180 && (o = o < 0 ? o + s : o - s)),
            -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % s - (0 | o / s) * s : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % s - (0 | o / s) * s)),
            e + o);
            return a < 1e-6 && -1e-6 < a && (a = 0),
            a
        }
        function l(t, e, i) {
            return 0 | 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + 6 * (i - e) * t : t < .5 ? i : 3 * t < 2 ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }
        function P(t) {
            var e, i, n, s, r, o;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
            ct[t] ? ct[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (n = t.charAt(3)) + n),
            [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : ("hsl" === t.substr(0, 3) ? (t = t.match(D),
            s = Number(t[0]) % 360 / 360,
            r = Number(t[1]) / 100,
            e = 2 * (o = Number(t[2]) / 100) - (i = o <= .5 ? o * (1 + r) : o + r - o * r),
            3 < t.length && (t[3] = Number(t[3])),
            t[0] = l(s + 1 / 3, e, i),
            t[1] = l(s, e, i),
            t[2] = l(s - 1 / 3, e, i)) : ((t = t.match(D) || ct.transparent)[0] = Number(t[0]),
            t[1] = Number(t[1]),
            t[2] = Number(t[2]),
            3 < t.length && (t[3] = Number(t[3]))),
            t)) : ct.black
        }
        var E, w, C, R, A, O, e, i, n, D = /(?:\d|\-\d|\.\d|\-\.\d)+/g, N = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, M = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, h = /[^\d\-\.]/g, F = /(?:\d|\-|\+|=|#|\.)*/g, L = /opacity *= *([^)]*)/i, I = /opacity:([^;]*)/i, c = /alpha\(opacity *=.+?\)/i, z = /^(rgb|hsl)/, u = /([A-Z])/g, $ = /-([a-z])/gi, H = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, j = /(?:Left|Right|Width)/i, it = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, X = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, B = /,(?=[^\)]*(?:\(|$))/gi, nt = Math.PI / 180, st = 180 / Math.PI, q = {}, V = document, Y = (V.documentElement,
        V.createElement("div")), W = V.createElement("img"), s = et._internals = {
            _specialProps: m
        }, U = navigator.userAgent, G = (i = U.indexOf("Android"),
        n = V.createElement("div"),
        C = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === i || 3 < Number(U.substr(i + 8, 1))),
        A = C && Number(U.substr(U.indexOf("Version/") + 8, 1)) < 6,
        R = -1 !== U.indexOf("Firefox"),
        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (O = parseFloat(RegExp.$1)),
        n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
        !!(e = n.getElementsByTagName("a")[0]) && /^0.55/.test(e.style.opacity)), Q = "", Z = "", K = V.defaultView ? V.defaultView.getComputedStyle : function() {}
        , rt = et.getStyle = function(t, e, i, n, s) {
            var r;
            return G || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || K(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(u, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]),
            null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : a(t)
        }
        , J = s.convertToPixels = function(t, e, i, n, s) {
            if ("px" === n || !n)
                return i;
            if ("auto" === n || !i)
                return 0;
            var r, o, a, l = j.test(e), c = t, h = Y.style, u = i < 0;
            if (u && (i = -i),
            "%" === n && -1 !== e.indexOf("border"))
                r = i / 100 * (l ? t.clientWidth : t.clientHeight);
            else {
                if (h.cssText = "border:0 solid red;position:" + rt(t, "position") + ";line-height:0;",
                "%" !== n && c.appendChild)
                    h[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                else {
                    if (o = (c = t.parentNode || V.body)._gsCache,
                    a = d.ticker.frame,
                    o && l && o.time === a)
                        return o.width * i / 100;
                    h[l ? "width" : "height"] = i + n
                }
                c.appendChild(Y),
                r = parseFloat(Y[l ? "offsetWidth" : "offsetHeight"]),
                c.removeChild(Y),
                l && "%" === n && !1 !== et.cacheWidths && ((o = c._gsCache = c._gsCache || {}).time = a,
                o.width = r / i * 100),
                0 !== r || s || (r = J(t, e, i, n, !0))
            }
            return u ? -r : r
        }
        , ot = s.calculateOffset = function(t, e, i) {
            if ("absolute" !== rt(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , s = rt(t, "margin" + n, i);
            return t["offset" + n] - (J(t, e, parseFloat(s), s.replace(F, "")) || 0)
        }
        , at = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ct = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (t in ct)
            ht += "|" + t + "\\b";
        ht = RegExp(ht + ")", "gi");
        function ut(t, e, r, o) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var a, l = e ? (t.match(ht) || [""])[0] : "", c = t.split(l).join("").match(M) || [], h = t.substr(0, t.indexOf(c[0])), u = ")" === t.charAt(t.length - 1) ? ")" : "", d = -1 !== t.indexOf(" ") ? " " : ",", p = c.length, f = 0 < p ? c[0].replace(D, "") : "";
            return p ? a = e ? function(t) {
                var e, i, n, s;
                if ("number" == typeof t)
                    t += f;
                else if (o && B.test(t)) {
                    for (s = t.replace(B, "|").split("|"),
                    n = 0; s.length > n; n++)
                        s[n] = a(s[n]);
                    return s.join(",")
                }
                if (e = (t.match(ht) || [l])[0],
                n = (i = t.split(e).join("").match(M) || []).length,
                p > n--)
                    for (; p > ++n; )
                        i[n] = r ? i[0 | (n - 1) / 2] : c[n];
                return h + i.join(d) + d + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, i, n;
                if ("number" == typeof t)
                    t += f;
                else if (o && B.test(t)) {
                    for (i = t.replace(B, "|").split("|"),
                    n = 0; i.length > n; n++)
                        i[n] = a(i[n]);
                    return i.join(",")
                }
                if (n = (e = t.match(M) || []).length,
                p > n--)
                    for (; p > ++n; )
                        e[n] = r ? e[0 | (n - 1) / 2] : c[n];
                return h + e.join(d) + u
            }
            : function(t) {
                return t
            }
        }
        function dt(c) {
            return c = c.split(","),
            function(t, e, i, n, s, r, o) {
                var a, l = (e + "").split(" ");
                for (o = {},
                a = 0; a < 4; a++)
                    o[c[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                return n.parse(t, o, s, r)
            }
        }
        var pt = (s._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, r = this.data, o = r.proxy, a = r.firstMPT; a; )
                e = o[a.v],
                a.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                a.t[a.p] = e,
                a = a._next;
            if (r.autoRotate && (r.autoRotate.rotation = o.rotation),
            1 === t)
                for (a = r.firstMPT; a; ) {
                    if ((i = a.t).type) {
                        if (1 === i.type) {
                            for (s = i.xs0 + i.s + i.xs1,
                            n = 1; i.l > n; n++)
                                s += i["xn" + n] + i["xs" + (n + 1)];
                            i.e = s
                        }
                    } else
                        i.e = i.s + i.xs0;
                    a = a._next
                }
        }
        ,
        function(t, e, i, n, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            n && ((n._prev = this)._next = n)
        }
        )
          , ft = (s._parseToProxy = function(t, e, i, n, s, r) {
            var o, a, l, c, h, u = n, d = {}, p = {}, f = i._transform, m = q;
            for (i._transform = null,
            q = e,
            n = h = i.parse(t, e, n, s),
            q = m,
            r && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); n && n !== u; ) {
                if (n.type <= 1 && (p[a = n.p] = n.s + n.c,
                d[a] = n.s,
                r || (c = new pt(n,"s",a,c,n.r),
                n.c = 0),
                1 === n.type))
                    for (o = n.l; 0 < --o; )
                        l = "xn" + o,
                        p[a = n.p + "_" + l] = n.data[l],
                        d[a] = n[l],
                        r || (c = new pt(n,l,a,c,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: d,
                end: p,
                firstMPT: c,
                pt: h
            }
        }
        ,
        s.CSSPropTween = function(t, e, i, n, s, r, o, a, l, c, h) {
            this.t = t,
            this.p = e,
            this.s = i,
            this.c = n,
            this.n = o || e,
            t instanceof ft || p.push(this.n),
            this.r = a,
            this.type = r || 0,
            l && (this.pr = l,
            f = !0),
            this.b = void 0 === c ? i : c,
            this.e = void 0 === h ? i + n : h,
            s && ((this._next = s)._prev = this)
        }
        )
          , mt = et.parseComplex = function(t, e, i, n, s, r, o, a, l, c) {
            o = new ft(t,e,0,0,o,c ? 2 : 1,null,!1,a,i = i || r || "",n),
            n += "";
            var h, u, d, p, f, m, g, v, y, _, b, x, w = i.split(", ").join(",").split(" "), T = n.split(", ").join(",").split(" "), S = w.length, C = !1 !== E;
            for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (w = w.join(" ").replace(B, ", ").split(" "),
            T = T.join(" ").replace(B, ", ").split(" "),
            S = w.length),
            S !== T.length && (S = (w = (r || "").split(" ")).length),
            o.plugin = l,
            o.setRatio = c,
            h = 0; h < S; h++)
                if (p = w[h],
                f = T[h],
                (v = parseFloat(p)) || 0 === v)
                    o.appendXtra("", v, k(f, v), f.replace(N, ""), C && -1 !== f.indexOf("px"), !0);
                else if (s && ("#" === p.charAt(0) || ct[p] || z.test(p)))
                    x = "," === f.charAt(f.length - 1) ? ")," : ")",
                    p = P(p),
                    f = P(f),
                    (y = 6 < p.length + f.length) && !G && 0 === f[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                    o.e = o.e.split(T[h]).join("transparent")) : (G || (y = !1),
                    o.appendXtra(y ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], y ? "," : x, !0),
                    y && (p = p.length < 4 ? 1 : p[3],
                    o.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, x, !1)));
                else if (m = p.match(D)) {
                    if (!(g = f.match(N)) || g.length !== m.length)
                        return o;
                    for (u = d = 0; m.length > u; u++)
                        b = m[u],
                        _ = p.indexOf(b, d),
                        o.appendXtra(p.substr(d, _ - d), Number(b), k(g[u], b), "", C && "px" === p.substr(_ + b.length, 2), 0 === u),
                        d = _ + b.length;
                    o["xs" + o.l] += p.substr(d)
                } else
                    o["xs" + o.l] += o.l ? " " + p : p;
            if (-1 !== n.indexOf("=") && o.data) {
                for (x = o.xs0 + o.data.s,
                h = 1; o.l > h; h++)
                    x += o["xs" + h] + o.data["xn" + h];
                o.e = x + o["xs" + h]
            }
            return o.l || (o.type = -1,
            o.xs0 = o.e),
            o.xfirst || o
        }
          , gt = 9;
        for ((t = ft.prototype).l = t.pr = 0; 0 < --gt; )
            t["xn" + gt] = 0,
            t["xs" + gt] = "";
        t.xs0 = "",
        t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null,
        t.appendXtra = function(t, e, i, n, s, r) {
            var o = this
              , a = o.l;
            return o["xs" + a] += r && a ? " " + t : t || "",
            i || 0 === a || o.plugin ? (o.l++,
            o.type = o.setRatio ? 2 : 1,
            o["xs" + o.l] = n || "",
            0 < a ? (o.data["xn" + a] = e + i,
            o.rxp["xn" + a] = s,
            o["xn" + a] = e,
            o.plugin || (o.xfirst = new ft(o,"xn" + a,e,i,o.xfirst || o,0,o.n,s,o.pr),
            o.xfirst.xs0 = 0)) : (o.data = {
                s: e + i
            },
            o.rxp = {},
            o.s = e,
            o.c = i,
            o.r = s)) : o["xs" + a] += e + (n || ""),
            o
        }
        ;
        function vt(t, e) {
            e = e || {},
            this.p = e.prefix && S(t) || t,
            (m[t] = m[this.p] = this).format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
        var yt = s._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, s = t.split(","), r = e.defaultValue;
            for (i = i || [r],
            n = 0; s.length > n; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || r,
                new vt(s[n],e)
        }
        ;
        (t = vt.prototype).parseComplex = function(t, e, i, n, s, r) {
            var o, a, l, c, h, u = this.keyword;
            if (this.multi && (B.test(i) || B.test(e) ? (a = e.replace(B, "|").split("|"),
            l = i.replace(B, "|").split("|")) : u && (a = [e],
            l = [i])),
            l) {
                for (c = l.length > a.length ? l.length : a.length,
                o = 0; o < c; o++)
                    e = a[o] = a[o] || this.dflt,
                    i = l[o] = l[o] || this.dflt,
                    u && (e.indexOf(u) !== (h = i.indexOf(u)) && ((i = -1 === h ? l : a)[o] += " " + u));
                e = a.join(", "),
                i = l.join(", ")
            }
            return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
        }
        ,
        t.parse = function(t, e, i, n, s, r) {
            return this.parseComplex(t.style, this.format(rt(t, this.p, tt, !1, this.dflt)), this.format(e), s, r)
        }
        ,
        et.registerSpecialProp = function(t, a, l) {
            yt(t, {
                parser: function(t, e, i, n, s, r) {
                    var o = new ft(t,i,0,0,s,2,i,!1,l);
                    return o.plugin = r,
                    o.setRatio = a(t, e, n._tween, i),
                    o
                },
                priority: l
            })
        }
        ;
        function _t(t, e, i) {
            var n = t.getBBox();
            e = _(e).split(" "),
            i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x,
            i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
        }
        function bt(t) {
            var e, i, n = this.data, s = -n.rotation * nt, r = s + n.skewX * nt, o = 1e5, a = (0 | Math.cos(s) * n.scaleX * o) / o, l = (0 | Math.sin(s) * n.scaleX * o) / o, c = (0 | Math.sin(r) * -n.scaleY * o) / o, h = (0 | Math.cos(r) * n.scaleY * o) / o, u = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = l,
                l = -c,
                c = -i,
                e = d.filter,
                u.filter = "";
                var p = this.t.offsetWidth
                  , f = this.t.offsetHeight
                  , m = "absolute" !== d.position
                  , g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h
                  , v = n.x + p * n.xPercent / 100
                  , y = n.y + f * n.yPercent / 100;
                if (null != n.ox && (v += (T = (n.oxp ? .01 * p * n.ox : n.ox) - p / 2) - (T * a + (S = (n.oyp ? .01 * f * n.oy : n.oy) - f / 2) * l),
                y += S - (T * c + S * h)),
                m ? g += ", Dx=" + ((T = p / 2) - (T * a + (S = f / 2) * l) + v) + ", Dy=" + (S - (T * c + S * h) + y) + ")" : g += ", sizingMethod='auto expand')",
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(X, g) : g + " " + e,
                0 !== t && 1 !== t || 1 != a || 0 !== l || 0 !== c || 1 != h || (m && -1 === g.indexOf("Dx=0, Dy=0") || L.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")),
                !m) {
                    var _, b, x, w = O < 8 ? 1 : -1, T = n.ieOffsetX || 0, S = n.ieOffsetY || 0;
                    for (n.ieOffsetX = Math.round((p - ((a < 0 ? -a : a) * p + (l < 0 ? -l : l) * f)) / 2 + v),
                    n.ieOffsetY = Math.round((f - ((h < 0 ? -h : h) * f + (c < 0 ? -c : c) * p)) / 2 + y),
                    gt = 0; gt < 4; gt++)
                        x = (i = -1 !== (_ = d[b = lt[gt]]).indexOf("px") ? parseFloat(_) : J(this.t, b, parseFloat(_), _.replace(F, "")) || 0) !== n[b] ? gt < 2 ? -n.ieOffsetX : -n.ieOffsetY : gt < 2 ? T - n.ieOffsetX : S - n.ieOffsetY,
                        u[b] = (n[b] = Math.round(i - x * (0 === gt || 2 === gt ? 1 : w))) + "px"
                }
            }
        }
        var xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",")
          , wt = S("transform")
          , Tt = Q + "transform"
          , St = S("transformOrigin")
          , Ct = null !== S("perspective")
          , kt = s.Transform = function() {
            this.skewY = 0
        }
          , Pt = window.SVGElement
          , Et = Pt && (O || /Android/i.test(U) && !window.chrome)
          , At = s.getTransform = function(t, e, i, n) {
            if (t._gsTransform && i && !n)
                return t._gsTransform;
            var s, r, o, a, l, c, h, u, d, p, f, m, g, v, y, _, b, x, w, T, S, C, k, P, E, A, O, D, N, M, R, F, L, I, z, $, H, j, X, B, q, V, Y = i && t._gsTransform || new kt, W = Y.scaleX < 0, U = 2e-5, G = 1e5, Q = 179.99, Z = Q * nt, K = Ct && (parseFloat(rt(t, St, e, !1, "0 0 0").split(" ")[2]) || Y.zOrigin) || 0, J = parseFloat(et.defaultTransformPerspective) || 0;
            if (wt ? s = rt(t, Tt, e, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(it)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), Y.x || 0, Y.y || 0].join(",") : ""),
            s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
                for (o = (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; -1 < --o; )
                    a = Number(r[o]),
                    r[o] = (l = a - (a |= 0)) ? (0 | l * G + (l < 0 ? -.5 : .5)) / G + a : a;
                for (o in 16 === r.length ? (v = r[8],
                y = r[9],
                _ = r[10],
                b = r[12],
                x = r[13],
                w = r[14],
                Y.zOrigin && (b = v * (w = -Y.zOrigin) - r[12],
                x = y * w - r[13],
                w = _ * w + Y.zOrigin - r[14]),
                i && !n && null != Y.rotationX || (O = r[0],
                D = r[1],
                N = r[2],
                M = r[3],
                R = r[4],
                F = r[5],
                L = r[6],
                I = r[7],
                z = r[11],
                H = ($ = Math.atan2(L, _)) < -Z || Z < $,
                Y.rotationX = $ * st,
                $ && (T = R * (k = Math.cos(-$)) + v * (P = Math.sin(-$)),
                S = F * k + y * P,
                C = L * k + _ * P,
                v = R * -P + v * k,
                y = F * -P + y * k,
                _ = L * -P + _ * k,
                z = I * -P + z * k,
                R = T,
                F = S,
                L = C),
                $ = Math.atan2(v, O),
                Y.rotationY = $ * st,
                $ && (E = $ < -Z || Z < $,
                S = D * (k = Math.cos(-$)) - y * (P = Math.sin(-$)),
                C = N * k - _ * P,
                y = D * P + y * k,
                _ = N * P + _ * k,
                z = M * P + z * k,
                O = T = O * k - v * P,
                D = S,
                N = C),
                $ = Math.atan2(D, F),
                Y.rotation = $ * st,
                $ && (A = $ < -Z || Z < $,
                O = O * (k = Math.cos(-$)) + R * (P = Math.sin(-$)),
                S = D * k + F * P,
                F = D * -P + F * k,
                L = N * -P + L * k,
                D = S),
                A && H ? Y.rotation = Y.rotationX = 0 : A && E ? Y.rotation = Y.rotationY = 0 : E && H && (Y.rotationY = Y.rotationX = 0),
                Y.scaleX = (0 | Math.sqrt(O * O + D * D) * G + .5) / G,
                Y.scaleY = (0 | Math.sqrt(F * F + y * y) * G + .5) / G,
                Y.scaleZ = (0 | Math.sqrt(L * L + _ * _) * G + .5) / G,
                Y.skewX = 0,
                Y.perspective = z ? 1 / (z < 0 ? -z : z) : 0,
                Y.x = b,
                Y.y = x,
                Y.z = w)) : Ct && !n && r.length && Y.x === r[4] && Y.y === r[5] && (Y.rotationX || Y.rotationY) || void 0 !== Y.x && "none" === rt(t, "display", e) || (X = (j = 6 <= r.length) ? r[0] : 1,
                B = r[1] || 0,
                q = r[2] || 0,
                V = j ? r[3] : 1,
                Y.x = r[4] || 0,
                Y.y = r[5] || 0,
                c = Math.sqrt(X * X + B * B),
                h = Math.sqrt(V * V + q * q),
                u = X || B ? Math.atan2(B, X) * st : Y.rotation || 0,
                d = q || V ? Math.atan2(q, V) * st + u : Y.skewX || 0,
                p = c - Math.abs(Y.scaleX || 0),
                f = h - Math.abs(Y.scaleY || 0),
                90 < Math.abs(d) && Math.abs(d) < 270 && (W ? (c *= -1,
                d += u <= 0 ? 180 : -180,
                u += u <= 0 ? 180 : -180) : (h *= -1,
                d += d <= 0 ? 180 : -180)),
                m = (u - Y.rotation) % 180,
                g = (d - Y.skewX) % 180,
                (void 0 === Y.skewX || U < p || p < -U || U < f || f < -U || -Q < m && m < Q && !1 | m * G || -Q < g && g < Q && !1 | g * G) && (Y.scaleX = c,
                Y.scaleY = h,
                Y.rotation = u,
                Y.skewX = d),
                Ct && (Y.rotationX = Y.rotationY = Y.z = 0,
                Y.perspective = J,
                Y.scaleZ = 1)),
                Y.zOrigin = K,
                Y)
                    U > Y[o] && Y[o] > -U && (Y[o] = 0)
            } else
                Y = {
                    x: 0,
                    y: 0,
                    z: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    skewX: 0,
                    skewY: 0,
                    perspective: J,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    zOrigin: 0
                };
            return i && (t._gsTransform = Y),
            Y.svg = Pt && t instanceof Pt,
            Y.svg && _t(t, rt(t, St, tt, !1, "50% 50%") + "", Y),
            Y.xPercent = Y.yPercent = 0,
            Y
        }
          , Ot = s.set3DTransformRatio = function(t) {
            var e, i, n, s, r, o, a, l, c, h, u, d, p, f, m, g, v, y, _, b, x, w, T, S = this.data, C = this.t.style, k = S.rotation * nt, P = S.scaleX, E = S.scaleY, A = S.scaleZ, O = S.x, D = S.y, N = S.z, M = S.perspective;
            if (1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== A || M || N) {
                if (R && (P < 1e-4 && -1e-4 < P && (P = A = 2e-5),
                E < 1e-4 && -1e-4 < E && (E = A = 2e-5),
                !M || S.z || S.rotationX || S.rotationY || (M = 0)),
                k || S.skewX)
                    e = y = Math.cos(k),
                    r = _ = Math.sin(k),
                    S.skewX && (k -= S.skewX * nt,
                    y = Math.cos(k),
                    _ = Math.sin(k),
                    "simple" === S.skewType && (b = Math.tan(S.skewX * nt),
                    y *= b = Math.sqrt(1 + b * b),
                    _ *= b)),
                    i = -_,
                    o = y;
                else {
                    if (!(S.rotationY || S.rotationX || 1 !== A || M || S.svg))
                        return void (C[wt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + D + "px," + N + "px)" + (1 !== P || 1 !== E ? " scale(" + P + "," + E + ")" : ""));
                    e = o = 1,
                    i = r = 0
                }
                u = 1,
                n = s = a = l = c = h = d = p = f = 0,
                m = M ? -1 / M : 0,
                g = S.zOrigin,
                v = 1e5,
                (k = S.rotationY * nt) && (y = Math.cos(k),
                c = u * -(_ = Math.sin(k)),
                p = m * -_,
                n = e * _,
                a = r * _,
                u *= y,
                m *= y,
                e *= y,
                r *= y),
                (k = S.rotationX * nt) && (b = i * (y = Math.cos(k)) + n * (_ = Math.sin(k)),
                x = o * y + a * _,
                w = h * y + u * _,
                T = f * y + m * _,
                n = i * -_ + n * y,
                a = o * -_ + a * y,
                u = h * -_ + u * y,
                m = f * -_ + m * y,
                i = b,
                o = x,
                h = w,
                f = T),
                1 !== A && (n *= A,
                a *= A,
                u *= A,
                m *= A),
                1 !== E && (i *= E,
                o *= E,
                h *= E,
                f *= E),
                1 !== P && (e *= P,
                r *= P,
                c *= P,
                p *= P),
                g && (s = n * (d -= g),
                l = a * d,
                d = u * d + g),
                S.svg && (s += S.xOrigin - (S.xOrigin * e + S.yOrigin * i),
                l += S.yOrigin - (S.xOrigin * r + S.yOrigin * o)),
                s = (b = (s += O) - (s |= 0)) ? (0 | b * v + (b < 0 ? -.5 : .5)) / v + s : s,
                l = (b = (l += D) - (l |= 0)) ? (0 | b * v + (b < 0 ? -.5 : .5)) / v + l : l,
                d = (b = (d += N) - (d |= 0)) ? (0 | b * v + (b < 0 ? -.5 : .5)) / v + d : d,
                C[wt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | r * v) / v, (0 | c * v) / v, (0 | p * v) / v, (0 | i * v) / v, (0 | o * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | n * v) / v, (0 | a * v) / v, (0 | u * v) / v, (0 | m * v) / v, s, l, d, M ? 1 + -d / M : 1].join(",") + ")"
            } else
                Dt.call(this, t)
        }
          , Dt = s.set2DTransformRatio = function(t) {
            var e, i, n, s, r, o, a, l, c, h, u = this.data, d = this.t, p = d.style, f = u.x, m = u.y;
            return !(u.rotationX || u.rotationY || u.z || !0 === u.force3D || "auto" === u.force3D && 1 !== t && 0 !== t) || u.svg && Et || !Ct ? (s = u.scaleX,
            r = u.scaleY,
            void (u.rotation || u.skewX || u.svg ? (i = (e = u.rotation * nt) - u.skewX * nt,
            n = 1e5,
            o = Math.cos(e) * s,
            a = Math.sin(e) * s,
            l = Math.sin(i) * -r,
            c = Math.cos(i) * r,
            u.svg && ((f += u.xOrigin - (u.xOrigin * o + u.yOrigin * l)) < 1e-6 && -1e-6 < f && (f = 0),
            (m += u.yOrigin - (u.xOrigin * a + u.yOrigin * c)) < 1e-6 && -1e-6 < m && (m = 0)),
            h = (0 | o * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | c * n) / n + "," + f + "," + m + ")",
            u.svg && Et ? d.setAttribute("transform", "matrix(" + h) : p[wt] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + h) : p[wt] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + r + "," + f + "," + m + ")")) : void (this.setRatio = Ot).call(this, t)
        }
        ;
        yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(t, e, i, n, s, r, o) {
                if (n._transform)
                    return s;
                var a, l, c, h, u, d, p, f = n._transform = At(t, tt, !0, o.parseTransform), m = t.style, g = xt.length, v = o, y = {};
                if ("string" == typeof v.transform && wt)
                    (c = Y.style)[wt] = v.transform,
                    c.display = "block",
                    c.position = "absolute",
                    V.body.appendChild(Y),
                    a = At(Y, null, !1),
                    V.body.removeChild(Y);
                else if ("object" == typeof v) {
                    if (a = {
                        scaleX: b(null != v.scaleX ? v.scaleX : v.scale, f.scaleX),
                        scaleY: b(null != v.scaleY ? v.scaleY : v.scale, f.scaleY),
                        scaleZ: b(v.scaleZ, f.scaleZ),
                        x: b(v.x, f.x),
                        y: b(v.y, f.y),
                        z: b(v.z, f.z),
                        xPercent: b(v.xPercent, f.xPercent),
                        yPercent: b(v.yPercent, f.yPercent),
                        perspective: b(v.transformPerspective, f.perspective)
                    },
                    null != (p = v.directionalRotation))
                        if ("object" == typeof p)
                            for (c in p)
                                v[c] = p[c];
                        else
                            v.rotation = p;
                    "string" == typeof v.x && -1 !== v.x.indexOf("%") && (a.x = 0,
                    a.xPercent = b(v.x, f.xPercent)),
                    "string" == typeof v.y && -1 !== v.y.indexOf("%") && (a.y = 0,
                    a.yPercent = b(v.y, f.yPercent)),
                    a.rotation = x("rotation"in v ? v.rotation : "shortRotation"in v ? v.shortRotation + "_short" : "rotationZ"in v ? v.rotationZ : f.rotation, f.rotation, "rotation", y),
                    Ct && (a.rotationX = x("rotationX"in v ? v.rotationX : "shortRotationX"in v ? v.shortRotationX + "_short" : f.rotationX || 0, f.rotationX, "rotationX", y),
                    a.rotationY = x("rotationY"in v ? v.rotationY : "shortRotationY"in v ? v.shortRotationY + "_short" : f.rotationY || 0, f.rotationY, "rotationY", y)),
                    a.skewX = null == v.skewX ? f.skewX : x(v.skewX, f.skewX),
                    a.skewY = null == v.skewY ? f.skewY : x(v.skewY, f.skewY),
                    (l = a.skewY - f.skewY) && (a.skewX += l,
                    a.rotation += l)
                }
                for (Ct && null != v.force3D && (f.force3D = v.force3D,
                d = !0),
                f.skewType = v.skewType || f.skewType || et.defaultSkewType,
                (u = f.force3D || f.z || f.rotationX || f.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == v.scale || (a.scaleZ = 1); -1 < --g; )
                    (1e-6 < (h = a[i = xt[g]] - f[i]) || h < -1e-6 || null != v[i] || null != q[i]) && (d = !0,
                    s = new ft(f,i,f[i],h,s),
                    i in y && (s.e = y[i]),
                    s.xs0 = 0,
                    s.plugin = r,
                    n._overwriteProps.push(s.n));
                return (h = v.transformOrigin) && f.svg ? (_t(t, h, a),
                (s = new ft(f,"xOrigin",f.xOrigin,a.xOrigin - f.xOrigin,s,-1,"transformOrigin")).b = f.xOrigin,
                s.e = s.xs0 = a.xOrigin,
                (s = new ft(f,"yOrigin",f.yOrigin,a.yOrigin - f.yOrigin,s,-1,"transformOrigin")).b = f.yOrigin,
                s.e = s.xs0 = a.yOrigin,
                Rt(m, St)) : (h || Ct && u && f.zOrigin) && (wt ? (d = !0,
                i = St,
                h = (h || rt(t, i, tt, !1, "50% 50%")) + "",
                (s = new ft(m,i,0,0,s,-1,"transformOrigin")).b = m[i],
                s.plugin = r,
                Ct ? (c = f.zOrigin,
                h = h.split(" "),
                f.zOrigin = (2 < h.length && (0 === c || "0px" !== h[2]) ? parseFloat(h[2]) : c) || 0,
                s.xs0 = s.e = h[0] + " " + (h[1] || "50%") + " 0px",
                (s = new ft(f,"zOrigin",0,0,s,-1,s.n)).b = c,
                s.xs0 = s.e = f.zOrigin) : s.xs0 = s.e = h) : _(h + "", f)),
                d && (n._transformType = f.svg && Et || !u && 3 !== this._transformType ? 2 : 3),
                s
            },
            prefix: !0
        }),
        yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        yt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, s) {
                e = this.format(e);
                for (var r, o, a, l, c, h, u, d, p, f, m, g, v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], y = t.style, _ = parseFloat(t.offsetWidth), b = parseFloat(t.offsetHeight), x = e.split(" "), w = 0; v.length > w; w++)
                    this.p.indexOf("border") && (v[w] = S(v[w])),
                    -1 !== (a = o = rt(t, v[w], tt, !1, "0px")).indexOf(" ") && (a = (o = a.split(" "))[0],
                    o = o[1]),
                    l = r = x[w],
                    c = parseFloat(a),
                    d = a.substr((c + "").length),
                    "" === (u = (p = "=" === l.charAt(1)) ? (h = parseInt(l.charAt(0) + "1", 10),
                    l = l.substr(2),
                    h *= parseFloat(l),
                    l.substr((h + "").length - (h < 0 ? 1 : 0)) || "") : (h = parseFloat(l),
                    l.substr((h + "").length))) && (u = T[i] || d),
                    u !== d && (f = J(t, "borderLeft", c, d),
                    m = J(t, "borderTop", c, d),
                    o = "%" === u ? (a = f / _ * 100 + "%",
                    m / b * 100 + "%") : "em" === u ? (a = f / (g = J(t, "borderLeft", 1, "em")) + "em",
                    m / g + "em") : (a = f + "px",
                    m + "px"),
                    p && (l = parseFloat(a) + h + u,
                    r = parseFloat(o) + h + u)),
                    s = mt(y, v[w], a + " " + o, l + " " + r, !1, "0px", s);
                return s
            },
            prefix: !0,
            formatter: ut("0px 0px 0px 0px", !1, !0)
        }),
        yt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, s, r) {
                var o, a, l, c, h, u, d = "background-position", p = tt || K(t, null), f = this.format((p ? O ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), m = this.format(e);
                if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && ((u = rt(t, "backgroundImage").replace(H, "")) && "none" !== u)) {
                    for (o = f.split(" "),
                    a = m.split(" "),
                    W.setAttribute("src", u),
                    l = 2; -1 < --l; )
                        (c = -1 !== (f = o[l]).indexOf("%")) != (-1 !== a[l].indexOf("%")) && (h = 0 === l ? t.offsetWidth - W.width : t.offsetHeight - W.height,
                        o[l] = c ? parseFloat(f) / 100 * h + "px" : parseFloat(f) / h * 100 + "%");
                    f = o.join(" ")
                }
                return this.parseComplex(t.style, f, m, s, r)
            },
            formatter: _
        }),
        yt("backgroundSize", {
            defaultValue: "0 0",
            formatter: _
        }),
        yt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        yt("transformStyle", {
            prefix: !0
        }),
        yt("backfaceVisibility", {
            prefix: !0
        }),
        yt("userSelect", {
            prefix: !0
        }),
        yt("margin", {
            parser: dt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        yt("padding", {
            parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, s, r) {
                var o, a, l;
                return e = O < 9 ? (a = t.currentStyle,
                l = O < 8 ? " " : ",",
                o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")",
                this.format(e).split(",").join(l)) : (o = this.format(rt(t, this.p, tt, !1, this.dflt)),
                this.format(e)),
                this.parseComplex(t.style, o, e, s, r)
            }
        }),
        yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        yt("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }),
        yt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, s, r) {
                return this.parseComplex(t.style, this.format(rt(t, "borderTopWidth", tt, !1, "0px") + " " + rt(t, "borderTopStyle", tt, !1, "solid") + " " + rt(t, "borderTopColor", tt, !1, "#000")), this.format(e), s, r)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
            }
        }),
        yt("borderWidth", {
            parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        yt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s) {
                var r = t.style
                  , o = "cssFloat"in r ? "cssFloat" : "styleFloat";
                return new ft(r,o,0,0,s,-1,i,!1,0,r[o],e)
            }
        });
        function Nt(t) {
            var e, i = this.t, n = i.filter || rt(this.data, "filter") || "", s = 0 | this.s + this.c * t;
            100 == s && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            !rt(this.data, "filter")) : (i.filter = n.replace(c, ""),
            !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
            -1 === n.indexOf("pacity") ? 0 == s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(L, "opacity=" + s))
        }
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, s, r) {
                var o = parseFloat(rt(t, "opacity", tt, !1, "1"))
                  , a = t.style
                  , l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                l && 1 === o && "hidden" === rt(t, "visibility", tt) && 0 !== e && (o = 0),
                G ? s = new ft(a,"opacity",o,e - o,s) : ((s = new ft(a,"opacity",100 * o,100 * (e - o),s)).xn1 = l ? 1 : 0,
                a.zoom = 1,
                s.type = 2,
                s.b = "alpha(opacity=" + s.s + ")",
                s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                s.data = t,
                s.plugin = r,
                s.setRatio = Nt),
                l && ((s = new ft(a,"visibility",0,0,s,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(i)),
                s
            }
        });
        function Mt(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Rt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        }
        var Rt = function(t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)),
            t.removeProperty(e.replace(u, "-$1").toLowerCase())) : t.removeAttribute(e))
        };
        yt("className", {
            parser: function(t, e, i, n, s, r, o) {
                var a, l, c, h, u, d = t.getAttribute("class") || "", p = t.style.cssText;
                if ((s = n._classNamePT = new ft(t,i,0,0,s,2)).setRatio = Mt,
                s.pr = -11,
                f = !0,
                s.b = d,
                l = v(t, tt),
                c = t._gsClassPT) {
                    for (h = {},
                    u = c.data; u; )
                        h[u.p] = 1,
                        u = u._next;
                    c.setRatio(1)
                }
                return (t._gsClassPT = s).e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                n._tween._duration && (t.setAttribute("class", s.e),
                a = y(t, l, v(t), o, h),
                t.setAttribute("class", d),
                s.data = a.firstMPT,
                t.style.cssText = p,
                s = s.xfirst = n.parse(t, a.difs, s, r)),
                s
            }
        });
        function Ft(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, r = this.t.style, o = m.transform.parse;
                if ("all" === this.e)
                    s = !(r.cssText = "");
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; -1 < --n; )
                        i = e[n],
                        m[i] && (m[i].parse === o ? s = !0 : i = "transformOrigin" === i ? St : m[i].p),
                        Rt(r, i);
                s && (Rt(r, wt),
                this.t._gsTransform && delete this.t._gsTransform)
            }
        }
        for (yt("clearProps", {
            parser: function(t, e, i, n, s) {
                return (s = new ft(t,i,0,0,s,2)).setRatio = Ft,
                s.e = e,
                s.pr = -10,
                s.data = n._tween,
                f = !0,
                s
            }
        }),
        t = "bezier,throwProps,physicsProps,physics2D".split(","),
        gt = t.length; gt--; )
            !function(t) {
                var l;
                m[t] || (l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
                yt(t, {
                    parser: function(t, e, i, n, s, r, o) {
                        var a = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[l];
                        return a ? (a._cssRegister(),
                        m[i].parse(t, e, i, n, s, r, o)) : (g("Error: " + l + " js file not loaded."),
                        s)
                    }
                }))
            }(t[gt]);
        (t = et.prototype)._firstPT = null,
        t._onInitTween = function(t, e, i) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = i,
            this._vars = e,
            E = e.autoRound,
            f = !1,
            T = e.suffixMap || et.suffixMap,
            tt = K(t, ""),
            p = this._overwriteProps;
            var n, s, r, o, a, l, c, h, u, d = t.style;
            if (w && "" === d.zIndex && ("auto" !== (n = rt(t, "zIndex", tt)) && "" !== n || this._addLazySet(d, "zIndex", 0)),
            "string" == typeof e && (o = d.cssText,
            n = v(t, tt),
            d.cssText = o + ";" + e,
            n = y(t, n, v(t)).difs,
            !G && I.test(e) && (n.opacity = parseFloat(RegExp.$1)),
            e = n,
            d.cssText = o),
            this._firstPT = s = this.parse(t, e, null),
            this._transformType) {
                for (u = 3 === this._transformType,
                wt ? C && (w = !0,
                "" === d.zIndex && ("auto" !== (c = rt(t, "zIndex", tt)) && "" !== c || this._addLazySet(d, "zIndex", 0)),
                A && this._addLazySet(d, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : d.zoom = 1,
                r = s; r && r._next; )
                    r = r._next;
                h = new ft(t,"transform",0,0,null,2),
                this._linkCSSP(h, null, r),
                h.setRatio = u && Ct ? Ot : wt ? Dt : bt,
                h.data = this._transform || At(t, tt, !0),
                p.pop()
            }
            if (f) {
                for (; s; ) {
                    for (l = s._next,
                    r = o; r && r.pr > s.pr; )
                        r = r._next;
                    (s._prev = r ? r._prev : a) ? s._prev._next = s : o = s,
                    (s._next = r) ? r._prev = s : a = s,
                    s = l
                }
                this._firstPT = o
            }
            return !0
        }
        ,
        t.parse = function(t, e, i, n) {
            var s, r, o, a, l, c, h, u, d, p, f = t.style;
            for (s in e)
                c = e[s],
                (r = m[s]) ? i = r.parse(t, c, s, this, i, n, e) : (l = rt(t, s, tt) + "",
                d = "string" == typeof c,
                "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || d && z.test(c) ? (d || (c = (3 < (c = P(c)).length ? "rgba(" : "rgb(") + c.join(",") + ")"),
                i = mt(f, s, l, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (h = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "",
                "" !== l && "auto" !== l || (h = "width" === s || "height" === s ? (o = function(t, e, i) {
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                      , s = at[e]
                      , r = s.length;
                    for (i = i || K(t, null); -1 < --r; )
                        n -= parseFloat(rt(t, "padding" + s[r], i, !0)) || 0,
                        n -= parseFloat(rt(t, "border" + s[r] + "Width", i, !0)) || 0;
                    return n
                }(t, s, tt),
                "px") : "left" === s || "top" === s ? (o = ot(t, s, tt),
                "px") : (o = "opacity" !== s ? 0 : 1,
                "")),
                "" === (u = (p = d && "=" === c.charAt(1)) ? (a = parseInt(c.charAt(0) + "1", 10),
                c = c.substr(2),
                a *= parseFloat(c),
                c.replace(F, "")) : (a = parseFloat(c),
                d && c.substr((a + "").length) || "")) && (u = s in T ? T[s] : h),
                c = a || 0 === a ? (p ? a + o : a) + u : e[s],
                h !== u && "" !== u && (a || 0 === a) && o && (o = J(t, s, o, h),
                "%" === u ? (o /= J(t, s, 100, "%") / 100,
                !0 !== e.strictUnits && (l = o + "%")) : "em" === u ? o /= J(t, s, 1, "em") : "px" !== u && (a = J(t, s, a, u),
                u = "px"),
                p && (a || 0 === a) && (c = a + o + u)),
                p && (a += o),
                !o && 0 !== o || !a && 0 !== a ? void 0 !== f[s] && (c || "NaN" != c + "" && null != c) ? (i = new ft(f,s,a || o || 0,0,i,-1,s,!1,0,l,c)).xs0 = "none" !== c || "display" !== s && -1 === s.indexOf("Style") ? c : l : g("invalid " + s + " tween value: " + e[s]) : (i = new ft(f,s,o,a - o,i,0,s,!1 !== E && ("px" === u || "zIndex" === s),0,l,c)).xs0 = u) : i = mt(f, s, l, c, !0, null, i, 0, n)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        t.setRatio = function(t) {
            var e, i, n, s = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; s; ) {
                        if (e = s.c * t + s.s,
                        s.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                        s.type)
                            if (1 === s.type)
                                if (2 === (n = s.l))
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1,
                                    n = 1; s.l > n; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else
                            s.t[s.p] = e + s.xs0;
                        s = s._next
                    }
                else
                    for (; s; )
                        2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                        s = s._next;
            else
                for (; s; )
                    2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t),
                    s = s._next
        }
        ,
        t._enableTransforms = function(t) {
            this._transform = this._transform || At(this._target, tt, !0),
            this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        function Lt() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        }
        t._addLazySet = function(t, e, i) {
            var n = this._firstPT = new ft(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Lt,
            n.data = this
        }
        ,
        t._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        t._kill = function(t) {
            var e, i, n, s = t;
            if (t.autoAlpha || t.alpha) {
                for (i in s = {},
                t)
                    s[i] = t[i];
                s.opacity = 1,
                s.autoAlpha && (s.visibility = 1)
            }
            return t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next),
            e._next && this._linkCSSP(e._next, e._next._next, n._prev),
            this._classNamePT = null),
            r.prototype._kill.call(this, s)
        }
        ;
        var It = function(t, e, i) {
            var n, s, r, o;
            if (t.slice)
                for (s = t.length; -1 < --s; )
                    It(t[s], e, i);
            else
                for (s = (n = t.childNodes).length; -1 < --s; )
                    o = (r = n[s]).type,
                    r.style && (e.push(v(r)),
                    i && i.push(r)),
                    1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || It(r, e, i)
        };
        return et.cascadeTo = function(t, e, i) {
            var n, s, r, o = d.to(t, e, i), a = [o], l = [], c = [], h = [], u = d._internals.reservedProps;
            for (t = o._targets || o.target,
            It(t, l, h),
            o.render(e, !0),
            It(t, c),
            o.render(0, !0),
            o._enabled(!0),
            n = h.length; -1 < --n; )
                if ((s = y(h[n], l[n], c[n])).firstMPT) {
                    for (r in s = s.difs,
                    i)
                        u[r] && (s[r] = i[r]);
                    a.push(d.to(h[n], e, s))
                }
            return a
        }
        ,
        r.activate([et]),
        et
    }, !0),
    (t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
            return this._tween = i,
            !0
        }
    }).prototype)._onInitAllProps = function() {
        for (var t, e, i, n = this._tween, s = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = s.length, o = {}, a = n._propLookup.roundProps; -1 < --r; )
            o[s[r]] = 1;
        for (r = s.length; -1 < --r; )
            for (t = s[r],
            e = n._firstPT; e; )
                i = e._next,
                e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c),
                i && (i._prev = e._prev),
                e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i),
                e._next = e._prev = null,
                n._propLookup[t] = a),
                e = i;
        return !1
    }
    ,
    t._add = function(t, e, i, n) {
        this._addTween(t, e, i, i + n, e, !0),
        this._overwriteProps.push(e)
    }
    ,
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function(t, e) {
            var i, n, s;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (i in this._target = t,
            this._proxy = {},
            this._start = {},
            this._end = {},
            e)
                this._start[i] = this._proxy[i] = n = t.getAttribute(i),
                s = this._addTween(this._proxy, i, parseFloat(n), e[i], i),
                this._end[i] = s ? s.s + s.c : e[i],
                this._overwriteProps.push(i);
            return !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, s = 1 === t ? this._end : t ? this._proxy : this._start; -1 < --n; )
                e = i[n],
                this._target.setAttribute(e, s[e] + "")
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, n, s, r, o, a = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (i in e)
                "useRadians" !== i && (n = (o = (e[i] + "").split("_"))[0],
                s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                r = (this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - s,
                o.length && (-1 !== (n = o.join("_")).indexOf("short") && ((r %= a) !== r % (a / 2) && (r = r < 0 ? r + a : r - a)),
                -1 !== n.indexOf("_cw") && r < 0 ? r = (r + 9999999999 * a) % a - (0 | r / a) * a : -1 !== n.indexOf("ccw") && 0 < r && (r = (r - 9999999999 * a) % a - (0 | r / a) * a)),
                (1e-6 < r || r < -1e-6) && (this._addTween(t, i, s, s + r, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(g) {
        function t(t, e) {
            var i = h("easing." + t, function() {}, !0)
              , n = i.prototype = new g;
            return n.constructor = i,
            n.getRatio = e,
            i
        }
        function e(t, e, i, n) {
            var s = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return u(s, t),
            s
        }
        function v(t, e, i) {
            this.t = t,
            this.v = e,
            i && (((this.next = i).prev = this).c = i.v - e,
            this.gap = i.t - t)
        }
        function i(t, e) {
            var i = h("easing." + t, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , n = i.prototype = new g;
            return n.constructor = i,
            n.getRatio = e,
            n.config = function(t) {
                return new i(t)
            }
            ,
            i
        }
        var n, s, r, o = _gsScope.GreenSockGlobals || _gsScope, a = o.com.greensock, l = 2 * Math.PI, c = Math.PI / 2, h = a._class, u = g.register || function() {}
        , d = e("Back", i("BackOut", function(t) {
            return --t * t * ((this._p1 + 1) * t + this._p1) + 1
        }), i("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), i("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), p = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : 1 < t && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), f = p.prototype = new g;
        return f.constructor = p,
        f.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        p.ease = new p(.7,.7),
        f.config = p.config = function(t, e, i) {
            return new p(t,e,i)
        }
        ,
        (f = (n = h("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0)).prototype = new g).constructor = n,
        f.getRatio = function(t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        f.config = n.config = function(t) {
            return new n(t)
        }
        ,
        (f = (s = h("easing.RoughEase", function(t) {
            for (var e, i, n, s, r, o, a = (t = t || {}).taper || "none", l = [], c = 0, h = 0 | (t.points || 20), u = h, d = !1 !== t.randomize, p = !0 === t.clamp, f = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; -1 < --u; )
                e = d ? Math.random() : 1 / h * u,
                i = f ? f.getRatio(e) : e,
                n = "none" === a ? m : "out" === a ? (s = 1 - e) * s * m : "in" === a ? e * e * m : .5 * (s = e < .5 ? 2 * e : 2 * (1 - e)) * s * m,
                d ? i += Math.random() * n - .5 * n : u % 2 ? i += .5 * n : i -= .5 * n,
                p && (1 < i ? i = 1 : i < 0 && (i = 0)),
                l[c++] = {
                    x: e,
                    y: i
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new v(1,1,null),
            u = h; -1 < --u; )
                r = l[u],
                o = new v(r.x,r.y,o);
            this._prev = new v(0,0,0 !== o.t ? o : o.next)
        }, !0)).prototype = new g).constructor = s,
        f.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }
        ,
        f.config = function(t) {
            return new s(t)
        }
        ,
        s.ease = new s,
        e("Bounce", t("BounceOut", function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), t("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), t("BounceInOut", function(t) {
            var e = t < .5;
            return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        e("Circ", t("CircOut", function(t) {
            return Math.sqrt(1 - --t * t)
        }), t("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), t("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        e("Elastic", (r = function(t, e, i) {
            var n = h("easing." + t, function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || i,
                this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0)
            }, !0)
              , s = n.prototype = new g;
            return s.constructor = n,
            s.getRatio = e,
            s.config = function(t, e) {
                return new n(t,e)
            }
            ,
            n
        }
        )("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * l / this._p2) + 1
        }, .3), r("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * l / this._p2))
        }, .3), r("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * l / this._p2) : .5 * this._p1 * Math.pow(2, -10 * --t) * Math.sin((t - this._p3) * l / this._p2) + 1
        }, .45)),
        e("Expo", t("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), t("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), t("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        e("Sine", t("SineOut", function(t) {
            return Math.sin(t * c)
        }), t("SineIn", function(t) {
            return 1 - Math.cos(t * c)
        }), t("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(t) {
                return g.map[t]
            }
        }, !0),
        u(o.SlowMo, "SlowMo", "ease,"),
        u(s, "RoughEase", "ease,"),
        u(n, "SteppedEase", "ease,"),
        d
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(d) {
    "use strict";
    var e, i, p = d.GreenSockGlobals = d.GreenSockGlobals || d;
    if (!p.TweenLite) {
        var f, m = function(t) {
            for (var e = t.split("."), i = p, n = 0; e.length > n; n++)
                i[e[n]] = i = i[e[n]] || {};
            return i
        }, u = m("com.greensock"), g = 1e-10, l = function(t) {
            for (var e = [], i = t.length, n = 0; n !== i; e.push(t[n++]))
                ;
            return e
        }, n = function() {}, v = (e = Object.prototype.toString,
        i = e.call([]),
        function(t) {
            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
        }
        ), y = {}, _ = function(a, l, c, h) {
            this.sc = y[a] ? y[a].sc : [],
            (y[a] = this).gsClass = null,
            this.func = c;
            var u = [];
            this.check = function(t) {
                for (var e, i, n, s, r = l.length, o = r; -1 < --r; )
                    (e = y[l[r]] || new _(l[r],[])).gsClass ? (u[r] = e.gsClass,
                    o--) : t && e.sc.push(this);
                if (0 === o && c)
                    for (n = (i = ("com.greensock." + a).split(".")).pop(),
                    s = m(i.join("."))[n] = this.gsClass = c.apply(c, u),
                    h && (p[n] = s,
                    "function" == typeof define && define.amd ? define((d.GreenSockAMDPath ? d.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                        return s
                    }) : "TweenMax" === a && "undefined" != typeof module && module.exports && (module.exports = s)),
                    r = 0; this.sc.length > r; r++)
                        this.sc[r].check()
            }
            ,
            this.check(!0)
        }, s = d._gsDefine = function(t, e, i, n) {
            return new _(t,e,i,n)
        }
        , b = u._class = function(t, e, i) {
            return e = e || function() {}
            ,
            s(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        s.globals = p;
        var t, r = [0, 0, 1, 1], x = [], h = b("easing.Ease", function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? r.concat(e) : r
        }, !0), w = h.map = {}, o = h.register = function(t, e, i, n) {
            for (var s, r, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --c; )
                for (r = l[c],
                s = n ? b("easing." + r, null, !0) : u.easing[r] || {},
                o = h.length; -1 < --o; )
                    a = h[o],
                    w[r + "." + a] = w[a + r] = s[a] = t.getRatio ? t : t[a] || new t
        }
        ;
        for ((t = h.prototype)._calcEnd = !1,
        t.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
        }
        ,
        c = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -1 < --c; )
            t = a[c] + ",Power" + c,
            o(new h(null,null,1,c), t, "easeOut", !0),
            o(new h(null,null,2,c), t, "easeIn" + (0 === c ? ",easeNone" : "")),
            o(new h(null,null,3,c), t, "easeInOut");
        w.linear = u.easing.Linear.easeIn,
        w.swing = u.easing.Quad.easeInOut;
        var T = b("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        (t = T.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var r, o, a = this._listeners[t], l = 0;
            for (null == a && (this._listeners[t] = a = []),
            o = a.length; -1 < --o; )
                (r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === l && s > r.pr && (l = o + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            }),
            this !== A || f || A.wake()
        }
        ,
        t.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; -1 < --i; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        t.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for (e = s.length,
                i = this._eventTarget; -1 < --e; )
                    (n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        for (var a, S = d.requestAnimationFrame, C = d.cancelAnimationFrame, k = Date.now || function() {
            return (new Date).getTime()
        }
        , P = k(), c = (a = ["ms", "moz", "webkit", "o"]).length; -1 < --c && !S; )
            S = d[a[c] + "RequestAnimationFrame"],
            C = d[a[c] + "CancelAnimationFrame"] || d[a[c] + "CancelRequestAnimationFrame"];
        b("Ticker", function(t, e) {
            var s, r, o, a, l, c = this, h = k(), i = !1 !== e && S, u = 500, d = 33, p = function(t) {
                var e, i, n = k() - P;
                u < n && (h += n - d),
                P += n,
                c.time = (P - h) / 1e3,
                e = c.time - l,
                (!s || 0 < e || !0 === t) && (c.frame++,
                l += e + (a <= e ? .004 : a - e),
                i = !0),
                !0 !== t && (o = r(p)),
                i && c.dispatchEvent("tick")
            };
            T.call(c),
            c.time = c.frame = 0,
            c.tick = function() {
                p(!0)
            }
            ,
            c.lagSmoothing = function(t, e) {
                u = t || 1e10,
                d = Math.min(e, u, 0)
            }
            ,
            c.sleep = function() {
                null != o && ((i && C ? C : clearTimeout)(o),
                r = n,
                o = null,
                c === A && (f = !1))
            }
            ,
            c.wake = function() {
                null !== o ? c.sleep() : 10 < c.frame && (P = k() - u + 5),
                r = 0 === s ? n : i && S ? S : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                }
                ,
                c === A && (f = !0),
                p(2)
            }
            ,
            c.fps = function(t) {
                return arguments.length ? (a = 1 / ((s = t) || 60),
                l = this.time + a,
                void c.wake()) : s
            }
            ,
            c.useRAF = function(t) {
                return arguments.length ? (c.sleep(),
                i = t,
                void c.fps(s)) : i
            }
            ,
            c.fps(t),
            setTimeout(function() {
                i && (!o || c.frame < 5) && c.useRAF(!1)
            }, 1500)
        }),
        (t = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
        var E = b("core.Animation", function(t, e) {
            var i;
            this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            B && (f || A.wake(),
            (i = this.vars.useFrames ? X : B).add(this, i._time),
            this.vars.paused && this.paused(!0))
        })
          , A = E.ticker = new u.Ticker;
        (t = E.prototype)._dirty = t._gc = t._initted = t._paused = !1,
        t._totalTime = t._time = 0,
        t._rawPrevTime = -1,
        t._next = t._last = t._onUpdate = t._timeline = t.timeline = null,
        t._paused = !1;
        var O = function() {
            f && 2e3 < k() - P && A.wake(),
            setTimeout(O, 2e3)
        };
        O(),
        t.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        t.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        t.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        t.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        t.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        t.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        t.render = function() {}
        ,
        t.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            !this._gc && this.timeline || this._enabled(!0),
            this
        }
        ,
        t.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }
        ,
        t._enabled = function(t, e) {
            return f || A.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        t._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        t.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        t._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        t._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); -1 < --e; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        t.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                    return s[t];
                null == e ? delete s[t] : (s[t] = e,
                s[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                s[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        t.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        t.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        t.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        t.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        t.totalTime = function(t, e, i) {
            if (f || A.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , s = this._timeline;
                    if (n < t && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                    s._dirty || this._uncache(!1),
                    s._timeline)
                        for (; s._timeline; )
                            s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                            s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                this._totalTime === t && 0 !== this._duration || (this.render(t, e, !1),
                R.length && q())
            }
            return this
        }
        ,
        t.progress = t.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }
        ,
        t.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        t.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        t.timeScale = function(t) {
            return arguments.length ? (t = t || g,
            this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
            this._startTime = i - (i - this._startTime) * this._timeScale / t),
            this._timeScale = t,
            this._uncache(!1)) : this._timeScale;
            var e, i
        }
        ,
        t.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        t.paused = function(t) {
            return arguments.length ? (t != this._paused && this._timeline && (f || t || A.wake(),
            n = (i = (e = this._timeline).rawTime()) - this._pauseTime,
            !t && e.smoothChildTiming && (this._startTime += n,
            this._uncache(!1)),
            this._pauseTime = t ? i : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 != n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)),
            this._gc && !t && this._enabled(!0, !1),
            this) : this._paused;
            var e, i, n
        }
        ;
        var D = b("core.SimpleTimeline", function(t) {
            E.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (t = D.prototype = new E).constructor = D,
        t.kill()._gc = !1,
        t._first = t._last = t._recent = null,
        t._sortChildren = !1,
        t.add = t.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (n = t._startTime; i && i._startTime > n; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        t._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        t.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                n = s._next,
                (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = n
        }
        ,
        t.rawTime = function() {
            return f || A.wake(),
            this._totalTime
        }
        ;
        var N = b("TweenLite", function(t, e, i) {
            if (E.call(this, e, i),
            this.render = N.prototype.render,
            null == t)
                throw "Cannot tween a null target.";
            this.target = t = "string" == typeof t && N.selector(t) || t;
            var n, s, r, o = t.jquery || t.length && t !== d && t[0] && (t[0] === d || t[0].nodeType && t[0].style && !t.nodeType), a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? j[N.defaultOverwrite] : "number" == typeof a ? a >> 0 : j[a],
            (o || t instanceof Array || t.push && v(t)) && "number" != typeof t[0])
                for (this._targets = r = l(t),
                this._propLookup = [],
                this._siblings = [],
                n = 0; r.length > n; n++)
                    (s = r[n]) ? "string" != typeof s ? s.length && s !== d && s[0] && (s[0] === d || s[0].nodeType && s[0].style && !s.nodeType) ? (r.splice(n--, 1),
                    this._targets = r = r.concat(l(s))) : (this._siblings[n] = V(s, this, !1),
                    1 === a && 1 < this._siblings[n].length && W(s, this, null, 1, this._siblings[n])) : "string" == typeof (s = r[n--] = N.selector(s)) && r.splice(n + 1, 1) : r.splice(n--, 1);
            else
                this._propLookup = {},
                this._siblings = V(t, this, !1),
                1 === a && 1 < this._siblings.length && W(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -g,
            this.render(-this._delay))
        }, !0)
          , M = function(t) {
            return t && t.length && t !== d && t[0] && (t[0] === d || t[0].nodeType && t[0].style && !t.nodeType)
        };
        (t = N.prototype = new E).constructor = N,
        t.kill()._gc = !1,
        t.ratio = 0,
        t._firstPT = t._targets = t._overwrittenProps = t._startAt = null,
        t._notifyPluginsOfEnabled = t._lazy = !1,
        N.version = "1.14.1",
        N.defaultEase = t._ease = new h(null,null,1,1),
        N.defaultOverwrite = "auto",
        N.ticker = A,
        N.autoSleep = !0,
        N.lagSmoothing = function(t, e) {
            A.lagSmoothing(t, e)
        }
        ,
        N.selector = d.$ || d.jQuery || function(t) {
            var e = d.$ || d.jQuery;
            return e ? (N.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        }
        ;
        var R = []
          , F = {}
          , L = N._internals = {
            isArray: v,
            isSelector: M,
            lazyTweens: R
        }
          , I = N._plugins = {}
          , z = L.tweenLookup = {}
          , $ = 0
          , H = L.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }
          , j = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , X = E._rootFramesTimeline = new D
          , B = E._rootTimeline = new D
          , q = L.lazyRender = function() {
            var t, e = R.length;
            for (F = {}; -1 < --e; )
                (t = R[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            R.length = 0
        }
        ;
        B._startTime = A.time,
        X._startTime = A.frame,
        B._active = X._active = !0,
        setTimeout(q, 1),
        E._updateRoot = N.render = function() {
            var t, e, i;
            if (R.length && q(),
            B.render((A.time - B._startTime) * B._timeScale, !1, !1),
            X.render((A.frame - X._startTime) * X._timeScale, !1, !1),
            R.length && q(),
            !(A.frame % 120)) {
                for (i in z) {
                    for (t = (e = z[i].tweens).length; -1 < --t; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete z[i]
                }
                if ((!(i = B._first) || i._paused) && N.autoSleep && !X._first && 1 === A._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || A.sleep()
                }
            }
        }
        ,
        A.addEventListener("tick", E._updateRoot);
        var V = function(t, e, i) {
            var n, s, r = t._gsTweenID;
            if (z[r || (t._gsTweenID = r = "t" + $++)] || (z[r] = {
                target: t,
                tweens: []
            }),
            e && ((n = z[r].tweens)[s = n.length] = e,
            i))
                for (; -1 < --s; )
                    n[s] === e && n.splice(s, 1);
            return z[r].tweens
        }
          , Y = function(t, e, i, n) {
            var s = t.vars.onOverwrite;
            s && s(t, e, i, n),
            (s = N.onOverwrite) && s(t, e, i, n)
        }
          , W = function(t, e, i, n, s) {
            var r, o, a;
            if (1 === n || 4 <= n) {
                for (a = s.length,
                p = 0; p < a; p++)
                    if ((o = s[p]) !== e)
                        o._gc || (o._enabled(!1, !1) && (r = !0),
                        Y(o, e));
                    else if (5 === n)
                        break;
                return r
            }
            for (var l, c = e._startTime + g, h = [], u = 0, d = 0 === e._duration, p = s.length; -1 < --p; )
                (o = s[p]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, d),
                0 === U(o, l, d) && (h[u++] = o)) : c >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > c && ((d || !o._initted) && c - o._startTime <= 2e-10 || (h[u++] = o)));
            for (p = u; -1 < --p; )
                o = h[p],
                2 === n && o._kill(i, t, e) && (r = !0),
                (2 !== n || !o._firstPT && o._initted) && (o._enabled(!1, !1) && (r = !0),
                2 !== n && Y(o, e));
            return r
        }
          , U = function(t, e, i) {
            for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline; ) {
                if (r += n._startTime,
                s *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return e < (r /= s) ? r - e : i && r === e || !t._initted && r - e < 2 * g ? g : (r += t.totalDuration() / t._timeScale / s) > e + g ? 0 : r - e - g
        };
        t._init = function() {
            var t, e, i, n, s, r = this.vars, o = this._overwrittenProps, a = this._duration, l = !!r.immediateRender, c = r.ease;
            if (r.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                s = {},
                r.startAt)
                    s[n] = r.startAt[n];
                if (s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = l && !1 !== r.lazy,
                s.startAt = s.delay = null,
                this._startAt = N.to(this.target, 0, s),
                l)
                    if (0 < this._time)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (n in 0 !== this._time && (l = !1),
                    i = {},
                    r)
                        H[n] && "autoCSS" !== n || (i[n] = r[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = l && !1 !== r.lazy,
                    i.immediateRender = l,
                    this._startAt = N.to(this.target, 0, i),
                    l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof h ? c : "function" == typeof c ? new h(c,r.easeParams) : w[c] || N.defaultEase : N.defaultEase,
            r.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, r.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; -1 < --t; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && N._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        }
        ,
        t._initProps = function(t, e, i, n) {
            var s, r, o, a, l, c;
            if (null == t)
                return !1;
            for (s in F[t._gsTweenID] && q(),
            this.vars.css || t.style && t !== d && t.nodeType && I.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, t),
            this.vars) {
                if (c = this.vars[s],
                H[s])
                    c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                else if (I[s] && (a = new I[s])._onInitTween(t, this.vars[s], this)) {
                    for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: a,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: a._priority
                    },
                    r = a._overwriteProps.length; -1 < --r; )
                        e[a._overwriteProps[r]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (o = !0),
                    (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = e[s] = l = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    },
                    l.s = l.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                    l.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return n && this._kill(n, t) ? this._initProps(t, e, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && W(t, this, e, this._overwrite, i) ? (this._kill(e, t),
            this._initProps(t, e, i, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0),
            o)
        }
        ,
        t.render = function(t, e, i) {
            var n, s, r, o, a, l, c, h = this._time, u = this._duration, d = this._rawPrevTime;
            if (u <= t ? (this._totalTime = this._time = u,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (n = !0,
            s = "onComplete"),
            0 !== u || !this._initted && this.vars.lazy && !i || (this._startTime === this._timeline._duration && (t = 0),
            (0 === t || d < 0 || d === g) && d !== t && (i = !0,
            g < d && (s = "onReverseComplete")),
            this._rawPrevTime = o = !e || t || d === t ? t : g)) : t < 1e-7 ? (this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== h || 0 === u && 0 < d && d !== g) && (s = "onReverseComplete",
            n = this._reversed),
            t < 0 && (this._active = !1,
            0 !== u || !this._initted && this.vars.lazy && !i || (0 <= d && (i = !0),
            this._rawPrevTime = o = !e || t || d === t ? t : g)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            this._easeType ? (a = t / u,
            (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a),
            3 === l && (a *= 2),
            1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a),
            this.ratio = 1 === l ? 1 - a : 2 === l ? a : t / u < .5 ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(t / u)),
            this._time !== h || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = h,
                        this._rawPrevTime = d,
                        R.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / u) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && 0 <= t && (this._active = !0),
                0 === h && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : s = s || "_dummyGS"),
                !this.vars.onStart || 0 === this._time && 0 !== u || (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || x))),
                r = this._firstPT; r; )
                    r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                    r = r._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || this._time === h && !n || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x)),
                !s || this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || x),
                0 === u && this._rawPrevTime === g && o !== g && (this._rawPrevTime = 0))
            }
        }
        ,
        t._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            var n, s, r, o, a, l, c, h, u;
            if (e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e,
            (v(e) || M(e)) && "number" != typeof e[0])
                for (n = e.length; -1 < --n; )
                    this._kill(t, e[n]) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; -1 < --n; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    for (r in c = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill),
                    c)
                        (o = a[r]) && ((u = u || []).push(r),
                        o.pg && o.t._kill(c) && (l = !0),
                        o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next),
                        o._next && (o._next._prev = o._prev),
                        o._next = o._prev = null),
                        delete a[r]),
                        h && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1),
                    u && i && Y(this, i, e, u)
                }
            }
            return l
        }
        ,
        t.invalidate = function() {
            return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            E.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -g,
            this.render(-this._delay)),
            this
        }
        ,
        t._enabled = function(t, e) {
            if (f || A.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; -1 < --i; )
                        this._siblings[i] = V(n[i], this, !0);
                else
                    this._siblings = V(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        N.to = function(t, e, i) {
            return new N(t,e,i)
        }
        ,
        N.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new N(t,e,i)
        }
        ,
        N.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new N(t,e,n)
        }
        ,
        N.delayedCall = function(t, e, i, n, s) {
            return new N(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        N.set = function(t, e) {
            return new N(t,0,e)
        }
        ,
        N.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            var i, n, s, r;
            if (t = "string" == typeof t && N.selector(t) || t,
            (v(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; -1 < --i; )
                    n = n.concat(N.getTweensOf(t[i], e));
                for (i = n.length; -1 < --i; )
                    for (r = n[i],
                    s = i; -1 < --s; )
                        r === n[s] && n.splice(i, 1)
            } else
                for (i = (n = V(t).concat()).length; -1 < --i; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = N.getTweensOf(t, e), s = n.length; -1 < --s; )
                n[s]._kill(i, t)
        }
        ;
        var G = b("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = G.prototype
        }, !0);
        if (t = G.prototype,
        G.version = "1.10.1",
        G.API = 2,
        t._firstPT = null,
        t._addTween = function(t, e, i, n, s, r) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: o,
                f: "function" == typeof t[e],
                n: s || e,
                r: r
            },
            a._next && (a._next._prev = a),
            a) : void 0
        }
        ,
        t.setRatio = function(t) {
            for (var e, i = this._firstPT; i; )
                e = i.c * t + i.s,
                i.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
        ,
        t._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; -1 < --e; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        t._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        N._onPluginEvent = function(t, e) {
            var i, n, s, r, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (o = a._next,
                    n = s; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : r) ? a._prev._next = a : s = a,
                    (a._next = n) ? n._prev = a : r = a,
                    a = o
                }
                a = e._firstPT = s
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                a = a._next;
            return i
        }
        ,
        G.activate = function(t) {
            for (var e = t.length; -1 < --e; )
                t[e].API === G.API && (I[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        s.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, r = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                G.call(this, i, n),
                this._overwriteProps = s || []
            }, !0 === t.global), a = o.prototype = new G(i);
            for (e in (a.constructor = o).API = t.API,
            r)
                "function" == typeof t[e] && (a[r[e]] = t[e]);
            return o.version = t.version,
            G.activate([o]),
            o
        }
        ,
        a = d._gsQueue) {
            for (c = 0; a.length > c; c++)
                a[c]();
            for (t in y)
                y[t].func || d.console.log("GSAP encountered missing dependency: com.greensock." + t)
        }
        f = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
function(t, e) {
    var i;
    "function" == typeof define && define.amd ? define(["jquery", "TweenMax", "TimelineMax"], e) : (i = e(t.jQuery, t.TweenMax, t.TimelineMax),
    t.ScrollMagic = i.Controller,
    t.ScrollScene = i.Scene)
}(this, function(A, t, O) {
    function D(t) {
        function e(t) {
            if (t.length <= 1)
                return t;
            var e = t.slice(0);
            return e.sort(function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }),
            e
        }
        var n, i, s = "ScrollMagic", r = {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }, o = this, a = A.extend({}, r, t), l = [], c = !1, h = 0, u = "PAUSED", d = !0, p = 0, f = !0, m = function() {
            return a.vertical ? a.container.scrollTop() : a.container.scrollLeft()
        }, g = function(t) {
            a.vertical ? a.container.scrollTop(t) : a.container.scrollLeft(t)
        }, v = function() {
            var t, e, i;
            n = w(v),
            f && c && (t = A.isArray(c) ? c : l.slice(0),
            e = h,
            i = (h = o.scrollPos()) - e,
            u = 0 == i ? "PAUSED" : 0 < i ? "FORWARD" : "REVERSE",
            i < 0 && t.reverse(),
            A.each(t, function(t, e) {
                e.update(!0)
            }),
            0 === t.length && a.loglevel,
            c = !1)
        }, y = function(t) {
            "resize" == t.type && (p = a.vertical ? a.container.height() : a.container.width()),
            c = !0
        }, _ = function() {
            d || p != (a.vertical ? a.container.height() : a.container.width()) && a.container.trigger("resize"),
            A.each(l, function(t, e) {
                e.refresh()
            })
        };
        return this.addScene = function(i) {
            return A.isArray(i) ? A.each(i, function(t, e) {
                o.addScene(e)
            }) : i instanceof b && (i.parent() != o ? i.addTo(o) : A.inArray(i, l) < 0 && (l.push(i),
            l = e(l),
            i.on("shift." + s + "_sort", function() {
                l = e(l)
            }),
            A.each(a.globalSceneOptions, function(t, e) {
                i[t] && i[t].call(i, e)
            }))),
            o
        }
        ,
        this.removeScene = function(t) {
            var e;
            return A.isArray(t) ? A.each(t, function(t, e) {
                o.removeScene(e)
            }) : -1 < (e = A.inArray(t, l)) && (t.off("shift." + s + "_sort"),
            l.splice(e, 1),
            t.remove()),
            o
        }
        ,
        this.updateScene = function(t, i) {
            return A.isArray(t) ? A.each(t, function(t, e) {
                o.updateScene(e, i)
            }) : i ? t.update(!0) : (A.isArray(c) || (c = []),
            -1 == A.inArray(t, c) && c.push(t),
            c = e(c)),
            o
        }
        ,
        this.update = function(t) {
            return y({
                type: "resize"
            }),
            t && v(),
            o
        }
        ,
        this.scrollTo = function(t) {
            var e, i, n, s;
            return t instanceof b ? t.parent() === o ? o.scrollTo(t.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t) : "string" === A.type(t) || x(t) || t instanceof A ? (e = A(t).first())[0] ? (i = a.vertical ? "top" : "left",
            n = N(a.container),
            s = N(e),
            d || (n[i] -= o.scrollPos()),
            o.scrollTo(s[i] - n[i])) : log(2, "scrollTo(): The supplied element could not be found. Scroll cancelled.", t) : A.isFunction(t) ? g = t : g.call(a.container[0], t),
            o
        }
        ,
        this.scrollPos = function(t) {
            return arguments.length ? (A.isFunction(t) && (m = t),
            o) : m.call(o)
        }
        ,
        this.info = function(t) {
            var e = {
                size: p,
                vertical: a.vertical,
                scrollPos: h,
                scrollDirection: u,
                container: a.container,
                isDocument: d
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }
        ,
        this.loglevel = function(t) {
            return arguments.length ? (a.loglevel != t && (a.loglevel = t),
            o) : a.loglevel
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (f != t && (f = !!t,
            o.updateScene(l, !0)),
            o) : f
        }
        ,
        this.destroy = function(t) {
            window.clearTimeout(i);
            for (var e = l.length; e--; )
                l[e].destroy(t);
            return a.container.off("scroll resize", y),
            T(n),
            null
        }
        ,
        function() {
            if (o.version = o.constructor.version,
            A.each(a, function(t) {
                r.hasOwnProperty(t) || delete a[t]
            }),
            a.container = A(a.container).first(),
            0 === a.container.length)
                throw s + " init failed.";
            (d = !A.contains(document, a.container.get(0))) || a.container.on("resize", function(t) {
                t.stopPropagation()
            }),
            p = a.vertical ? a.container.height() : a.container.width(),
            a.container.on("scroll resize", y),
            a.refreshInterval = parseInt(a.refreshInterval),
            0 < a.refreshInterval && (i = window.setInterval(_, a.refreshInterval)),
            n = w(v)
        }(),
        o
    }
    D.version = "1.3.0";
    var b = function(t) {
        function i(t, e) {
            var i = !1
              , n = g[t];
            return g[t] != e && (g[t] = e,
            T(t),
            i = n != g[t]),
            i
        }
        function e(t) {
            var e;
            !n || i(e = "duration", n.call(m)) && !t && (m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m.trigger("shift", {
                reason: e
            }))
        }
        function a() {
            c && h && "DURING" === v && !c.info("isDocument") && P()
        }
        function l(t) {
            c && h && "DURING" === v && !c.info("isDocument") && (t.preventDefault(),
            c.scrollTo(c.info("scrollPos") - (t.originalEvent.wheelDelta / 3 || 30 * -t.originalEvent.detail)))
        }
        var n, c, s, h, u, r, o, d = {
            onCenter: .5,
            onEnter: 1,
            onLeave: 0
        }, p = "ScrollScene", f = {
            duration: 0,
            offset: 0,
            triggerElement: null,
            triggerHook: "onCenter",
            reverse: !0,
            tweenChanges: !1,
            loglevel: 2
        }, m = this, g = A.extend({}, f, t), v = "BEFORE", y = 0, _ = {
            start: 0,
            end: 0
        }, b = 0, x = !0, w = {
            unknownOptionSupplied: function() {
                A.each(g, function(t) {
                    f.hasOwnProperty(t) || delete g[t]
                })
            },
            duration: function() {
                if (A.isFunction(g.duration)) {
                    n = g.duration;
                    try {
                        g.duration = parseFloat(n())
                    } catch (t) {
                        n = void 0,
                        g.duration = f.duration
                    }
                } else
                    g.duration = parseFloat(g.duration),
                    (!A.isNumeric(g.duration) || g.duration < 0) && (g.duration = f.duration)
            },
            offset: function() {
                g.offset = parseFloat(g.offset),
                A.isNumeric(g.offset) || (g.offset = f.offset)
            },
            triggerElement: function() {
                null !== g.triggerElement && 0 === A(g.triggerElement).length && (g.triggerElement = f.triggerElement)
            },
            triggerHook: function() {
                g.triggerHook in d || (g.triggerHook = A.isNumeric(g.triggerHook) ? Math.max(0, Math.min(parseFloat(g.triggerHook), 1)) : f.triggerHook)
            },
            reverse: function() {
                g.reverse = !!g.reverse
            },
            tweenChanges: function() {
                g.tweenChanges = !!g.tweenChanges
            }
        }, T = function(t) {
            if (arguments.length)
                A.isArray(t) || (t = [t]);
            else
                for (var e in t = [],
                w)
                    t.push(e);
            A.each(t, function(t, e) {
                w[e] && w[e]()
            })
        }, S = function() {
            _ = {
                start: b + g.offset
            },
            c && g.triggerElement && (_.start -= c.info("size") * m.triggerHook()),
            _.end = _.start + g.duration
        }, C = function(t) {
            var e = 0;
            if (c && g.triggerElement) {
                for (var i = A(g.triggerElement).first(), n = c.info(), s = N(n.container), r = n.vertical ? "top" : "left"; i.parent().data("ScrollMagicPinSpacer"); )
                    i = i.parent();
                var o = N(i);
                n.isDocument || (s[r] -= c.scrollPos()),
                e = o[r] - s[r]
            }
            var a = e != b;
            b = e,
            a && !t && m.trigger("shift", {
                reason: "triggerElementPosition"
            })
        }, k = function(t) {
            if (s) {
                var e = 0 <= t && t <= 1 ? t : y;
                if (-1 === s.repeat())
                    if ("DURING" === v && s.paused())
                        s.play();
                    else {
                        if ("DURING" === v || s.paused())
                            return !1;
                        s.pause()
                    }
                else {
                    if (e == s.progress())
                        return !1;
                    0 === g.duration ? "DURING" === v ? s.play() : s.reverse() : g.tweenChanges ? s.tweenTo(e * s.duration()) : s.progress(e).pause()
                }
                return !0
            }
            return !1
        }, P = function(t) {
            var e, i, n, s, r;
            h && c && (e = c.info(),
            t || "DURING" !== v ? (i = {
                position: u.inFlow ? "relative" : "absolute",
                top: 0,
                left: 0
            },
            n = h.css("position") != i.position,
            u.pushFollowers ? 0 < g.duration && ("AFTER" === v && 0 === parseFloat(u.spacer.css("padding-top")) || "BEFORE" === v && 0 === parseFloat(u.spacer.css("padding-bottom"))) && (n = !0) : i[e.vertical ? "top" : "left"] = g.duration * y,
            h.css(i),
            n && (h.removeClass(u.pinnedClass),
            E())) : ("fixed" != h.css("position") && (h.css("position", "fixed"),
            E(),
            h.addClass(u.pinnedClass)),
            s = N(u.spacer, !0),
            r = g.reverse || 0 === g.duration ? e.scrollPos - _.start : Math.round(y * g.duration * 10) / 10,
            s.top -= parseFloat(u.spacer.css("margin-top")),
            s[e.vertical ? "top" : "left"] += r,
            h.css({
                top: s.top,
                left: s.left
            })))
        }, E = function() {
            var t, e, i, n, s, r, o, a;
            h && c && u.inFlow && (t = "AFTER" === v,
            e = "BEFORE" === v,
            i = "DURING" === v,
            n = "fixed" == h.css("position"),
            s = c.info("vertical"),
            r = u.spacer.children().first(),
            a = {},
            (o = M(u.spacer.css("display"))) ? (a["margin-top"] = e || i && n ? h.css("margin-top") : "auto",
            a["margin-bottom"] = t || i && n ? h.css("margin-bottom") : "auto") : a["margin-top"] = a["margin-bottom"] = "auto",
            u.relSize.width || u.relSize.autoFullWidth ? n ? A(window).width() == u.spacer.parent().width() ? h.css("width", u.relSize.autoFullWidth ? "100%" : "inherit") : h.css("width", u.spacer.width()) : h.css("width", "100%") : (a["min-width"] = r.outerWidth(!r.is(h)),
            a.width = n ? a["min-width"] : "auto"),
            u.relSize.height ? n ? A(window).height() == u.spacer.parent().height() ? h.css("height", "inherit") : h.css("height", u.spacer.height()) : h.css("height", "100%") : (a["min-height"] = r.outerHeight(!o),
            a.height = n ? a["min-height"] : "auto"),
            u.pushFollowers && (a["padding" + (s ? "Top" : "Left")] = g.duration * y,
            a["padding" + (s ? "Bottom" : "Right")] = g.duration * (1 - y)),
            u.spacer.css(a))
        };
        return this.parent = function() {
            return c
        }
        ,
        this.duration = function(t) {
            var e = "duration";
            return arguments.length ? (A.isFunction(t) || (n = void 0),
            i(e, t) && (m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m.trigger("shift", {
                reason: e
            })),
            m) : g[e]
        }
        ,
        this.offset = function(t) {
            var e = "offset";
            return arguments.length ? (i(e, t) && (m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m.trigger("shift", {
                reason: e
            })),
            m) : g[e]
        }
        ,
        this.triggerElement = function(t) {
            var e = "triggerElement";
            return arguments.length ? (i(e, t) && m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m) : g[e]
        }
        ,
        this.triggerHook = function(t) {
            var e = "triggerHook";
            return arguments.length ? (i(e, t) && (m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m.trigger("shift", {
                reason: e
            })),
            m) : A.isNumeric(g[e]) ? g[e] : d[g[e]]
        }
        ,
        this.reverse = function(t) {
            var e = "reverse";
            return arguments.length ? (i(e, t) && m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m) : g[e]
        }
        ,
        this.tweenChanges = function(t) {
            var e = "tweenChanges";
            return arguments.length ? (i(e, t) && m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m) : g[e]
        }
        ,
        this.loglevel = function(t) {
            var e = "loglevel";
            return arguments.length ? (i(e, t) && m.trigger("change", {
                what: e,
                newval: g[e]
            }),
            m) : g[e]
        }
        ,
        this.state = function() {
            return v
        }
        ,
        this.triggerPosition = function() {
            var t = g.offset;
            return c && (t += g.triggerElement ? b : c.info("size") * m.triggerHook()),
            t
        }
        ,
        this.triggerOffset = function() {
            return m.triggerPosition()
        }
        ,
        this.scrollOffset = function() {
            return _.start
        }
        ,
        this.update = function(t) {
            var e, i;
            return c && (t ? c.enabled() && x ? (e = c.info("scrollPos"),
            i = 0 < g.duration ? (e - _.start) / (_.end - _.start) : e >= _.start ? 1 : 0,
            m.trigger("update", {
                startPos: _.start,
                endPos: _.end,
                scrollPos: e
            }),
            m.progress(i)) : h && "DURING" === v && P(!0) : c.updateScene(m, !1)),
            m
        }
        ,
        this.refresh = function() {
            return e(),
            C(),
            m
        }
        ,
        this.progress = function(t) {
            if (arguments.length) {
                var e, i, n, s = !1, r = v, o = c ? c.info("scrollDirection") : "PAUSED", a = g.reverse || y <= t;
                return 0 === g.duration ? (s = y != t,
                v = 0 === (y = t < 1 && a ? 0 : 1) ? "BEFORE" : "DURING") : t <= 0 && "BEFORE" !== v && a ? (v = "BEFORE",
                s = !(y = 0)) : 0 < t && t < 1 && a ? (y = t,
                v = "DURING",
                s = !0) : 1 <= t && "AFTER" !== v ? (y = 1,
                v = "AFTER",
                s = !0) : "DURING" !== v || a || P(),
                s && (e = {
                    progress: y,
                    state: v,
                    scrollDirection: o
                },
                n = function(t) {
                    m.trigger(t, e)
                }
                ,
                (i = v != r) && "DURING" !== r && (n("enter"),
                n("BEFORE" === r ? "start" : "end")),
                n("progress"),
                i && "DURING" !== v && (n("BEFORE" === v ? "start" : "end"),
                n("leave"))),
                m
            }
            return y
        }
        ,
        this.setTween = function(t) {
            if (!O)
                return m;
            s && m.removeTween();
            try {
                s = new O({
                    smoothChildTiming: !0
                }).add(t).pause()
            } catch (t) {} finally {
                t.repeat && -1 === t.repeat() && (s.repeat(-1),
                s.yoyo(t.yoyo()))
            }
            return k(),
            m
        }
        ,
        this.removeTween = function(t) {
            return s && (t && k(0),
            s.kill(),
            s = void 0),
            m
        }
        ,
        this.setPin = function(t, e) {
            if (e = A.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer",
                pinnedClass: ""
            }, e),
            0 === (t = A(t).first()).length)
                return m;
            if ("fixed" == t.css("position"))
                return m;
            if (h) {
                if (h === t)
                    return m;
                m.removePin()
            }
            (h = t).parent().hide();
            var i = "absolute" != h.css("position")
              , n = h.css(["display", "top", "left", "bottom", "right"])
              , s = h.css(["width", "height"]);
            h.parent().show(),
            "0px" === s.width && i && M(n.display),
            !i && e.pushFollowers && (e.pushFollowers = !1);
            var r = A("<div></div>").addClass(e.spacerClass).css(n).data("ScrollMagicPinSpacer", !0).css({
                position: i ? "relative" : "absolute",
                "margin-left": "auto",
                "margin-right": "auto",
                "box-sizing": "content-box"
            })
              , o = h[0].style;
            return (u = {
                spacer: r,
                relSize: {
                    width: "%" === s.width.slice(-1),
                    height: "%" === s.height.slice(-1),
                    autoFullWidth: "0px" === s.width && i && M(n.display)
                },
                pushFollowers: e.pushFollowers,
                inFlow: i,
                origStyle: {
                    width: o.width || "",
                    position: o.position || "",
                    top: o.top || "",
                    left: o.left || "",
                    bottom: o.bottom || "",
                    right: o.right || "",
                    "box-sizing": o["box-sizing"] || "",
                    "-moz-box-sizing": o["-moz-box-sizing"] || "",
                    "-webkit-box-sizing": o["-webkit-box-sizing"] || ""
                },
                pinnedClass: e.pinnedClass
            }).relSize.width && r.css("width", s.width),
            u.relSize.height && r.css("height", s.height),
            h.before(r).appendTo(r).css({
                position: i ? "relative" : "absolute",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (u.relSize.width || u.relSize.autoFullWidth) && h.css("box-sizing", "border-box"),
            A(window).on("scroll." + p + "_pin resize." + p + "_pin", a),
            h.on("mousewheel DOMMouseScroll", l),
            P(),
            m
        }
        ,
        this.removePin = function(t) {
            return h && (t || !c ? (h.insertBefore(u.spacer).css(u.origStyle),
            u.spacer.remove()) : "DURING" === v && P(!0),
            A(window).off("scroll." + p + "_pin resize." + p + "_pin"),
            h.off("mousewheel DOMMouseScroll", l),
            h = void 0),
            m
        }
        ,
        this.setClassToggle = function(t, e) {
            var i = A(t);
            return 0 === i.length || "string" !== A.type(e) || (r = e,
            o = i,
            m.on("enter.internal_class leave.internal_class", function(t) {
                o.toggleClass(r, "enter" === t.type)
            })),
            m
        }
        ,
        this.removeClassToggle = function(t) {
            return o && t && o.removeClass(r),
            m.off("start.internal_class end.internal_class"),
            o = r = void 0,
            m
        }
        ,
        this.addTo = function(t) {
            return t instanceof D && c != t && (c && c.removeScene(m),
            c = t,
            T(),
            e(!0),
            C(!0),
            S(),
            E(),
            c.info("container").on("resize." + p, function() {
                c && h && "DURING" === v && ((u.relSize.width || u.relSize.autoFullWidth) && A(window).width() != u.spacer.parent().width() || u.relSize.height && A(window).height() != u.spacer.parent().height()) && E(),
                0 < m.triggerHook() && m.trigger("shift", {
                    reason: "containerSize"
                })
            }),
            t.addScene(m),
            m.update()),
            m
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (x != t && (x = !!t,
            m.update(!0)),
            m) : x
        }
        ,
        this.remove = function() {
            var t;
            return c && (c.info("container").off("resize." + p),
            t = c,
            c = void 0,
            t.removeScene(m)),
            m
        }
        ,
        this.destroy = function(t) {
            return m.removeTween(t),
            m.removePin(t),
            m.removeClassToggle(t),
            m.trigger("destroy", {
                reset: t
            }),
            m.remove(),
            m.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"),
            null
        }
        ,
        this.on = function(t, e) {
            var i;
            return A.isFunction(e) && (i = A.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + p + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + p),
            A(m).on(i, e)),
            m
        }
        ,
        this.off = function(t, e) {
            var i = A.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + p + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + p + "$3");
            return A(m).off(i, e),
            m
        }
        ,
        this.trigger = function(t, e) {
            var i = A.Event(A.trim(t).toLowerCase(), e);
            return A(m).trigger(i),
            m
        }
        ,
        T(),
        m.on("change.internal", function(t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? C() : "reverse" === t.what && m.update())
        }).on("shift.internal", function(t) {
            S(),
            m.update(),
            ("AFTER" === v && "duration" === t.reason || "DURING" === v && 0 === g.duration) && P()
        }).on("progress.internal", function() {
            k(),
            P()
        }).on("destroy", function(t) {
            t.preventDefault()
        }),
        m
    }
      , N = function(t, e) {
        var i, n = {
            top: 0,
            left: 0
        };
        return (t = t[0]) && t.getBoundingClientRect && (i = t.getBoundingClientRect(),
        n.top = i.top,
        n.left = i.left,
        e || (n.top += (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
        n.left += (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0))),
        n
    }
      , x = function(t) {
        return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }
      , M = function(t) {
        return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t)
    }
      , w = window.requestAnimationFrame
      , T = window.cancelAnimationFrame;
    return function(s) {
        for (var r = 0, t = ["ms", "moz", "webkit", "o"], e = 0; !w && e < t.length; ++e)
            w = s[t[e] + "RequestAnimationFrame"],
            T = s[t[e] + "CancelAnimationFrame"] || s[t[e] + "CancelRequestAnimationFrame"];
        w = w || function(t) {
            var e = (new Date).getTime()
              , i = Math.max(0, 16 - (e - r))
              , n = s.setTimeout(function() {
                t(e + i)
            }, i);
            return r = e + i,
            n
        }
        ,
        T = T || function(t) {
            s.clearTimeout(t)
        }
    }(window),
    {
        Controller: D,
        Scene: b
    }
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, i, n, s) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
    },
    easeInQuad: function(t, e, i, n, s) {
        return n * (e /= s) * e + i
    },
    easeOutQuad: function(t, e, i, n, s) {
        return -n * (e /= s) * (e - 2) + i
    },
    easeInOutQuad: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function(t, e, i, n, s) {
        return n * (e /= s) * e * e + i
    },
    easeOutCubic: function(t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e + 1) + i
    },
    easeInOutCubic: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function(t, e, i, n, s) {
        return n * (e /= s) * e * e * e + i
    },
    easeOutQuart: function(t, e, i, n, s) {
        return -n * ((e = e / s - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function(t, e, i, n, s) {
        return n * (e /= s) * e * e * e * e + i
    },
    easeOutQuint: function(t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function(t, e, i, n, s) {
        return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(t, e, i, n, s) {
        return n * Math.sin(e / s * (Math.PI / 2)) + i
    },
    easeInOutSine: function(t, e, i, n, s) {
        return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
    },
    easeInExpo: function(t, e, i, n, s) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
    },
    easeOutExpo: function(t, e, i, n, s) {
        return e == s ? i + n : n * (1 - Math.pow(2, -10 * e / s)) + i
    },
    easeInOutExpo: function(t, e, i, n, s) {
        return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
    },
    easeInCirc: function(t, e, i, n, s) {
        return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
    },
    easeOutCirc: function(t, e, i, n, s) {
        return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
    },
    easeInOutCirc: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function(t, e, i, n, s) {
        var r = 1.70158
          , o = 0
          , a = n;
        return 0 == e ? i : 1 == (e /= s) ? i + n : (o = o || .3 * s,
        r = a < Math.abs(n) ? (a = n,
        o / 4) : o / (2 * Math.PI) * Math.asin(n / a),
        -(a * Math.pow(2, 10 * --e) * Math.sin((e * s - r) * (2 * Math.PI) / o)) + i)
    },
    easeOutElastic: function(t, e, i, n, s) {
        var r = 1.70158
          , o = 0
          , a = n;
        return 0 == e ? i : 1 == (e /= s) ? i + n : (o = o || .3 * s,
        r = a < Math.abs(n) ? (a = n,
        o / 4) : o / (2 * Math.PI) * Math.asin(n / a),
        a * Math.pow(2, -10 * e) * Math.sin((e * s - r) * (2 * Math.PI) / o) + n + i)
    },
    easeInOutElastic: function(t, e, i, n, s) {
        var r = 1.70158
          , o = 0
          , a = n;
        return 0 == e ? i : 2 == (e /= s / 2) ? i + n : (o = o || s * (.3 * 1.5),
        r = a < Math.abs(n) ? (a = n,
        o / 4) : o / (2 * Math.PI) * Math.asin(n / a),
        e < 1 ? a * Math.pow(2, 10 * --e) * Math.sin((e * s - r) * (2 * Math.PI) / o) * -.5 + i : a * Math.pow(2, -10 * --e) * Math.sin((e * s - r) * (2 * Math.PI) / o) * .5 + n + i)
    },
    easeInBack: function(t, e, i, n, s, r) {
        return null == r && (r = 1.70158),
        n * (e /= s) * e * ((r + 1) * e - r) + i
    },
    easeOutBack: function(t, e, i, n, s, r) {
        return null == r && (r = 1.70158),
        n * ((e = e / s - 1) * e * ((r + 1) * e + r) + 1) + i
    },
    easeInOutBack: function(t, e, i, n, s, r) {
        return null == r && (r = 1.70158),
        (e /= s / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i
    },
    easeInBounce: function(t, e, i, n, s) {
        return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
    },
    easeOutBounce: function(t, e, i, n, s) {
        return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function(t, e, i, n, s) {
        return e < s / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
    }
}),
function() {
    "use strict";
    function o(s, t) {
        var e;
        if (t = t || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = t.touchBoundary || 10,
        this.layer = s,
        this.tapDelay = t.tapDelay || 200,
        this.tapTimeout = t.tapTimeout || 700,
        !o.notNeeded(s)) {
            for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, r = i.length; n < r; n++)
                this[i[n]] = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }(this[i[n]], this);
            a && (s.addEventListener("mouseover", this.onMouse, !0),
            s.addEventListener("mousedown", this.onMouse, !0),
            s.addEventListener("mouseup", this.onMouse, !0)),
            s.addEventListener("click", this.onClick, !0),
            s.addEventListener("touchstart", this.onTouchStart, !1),
            s.addEventListener("touchmove", this.onTouchMove, !1),
            s.addEventListener("touchend", this.onTouchEnd, !1),
            s.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (s.removeEventListener = function(t, e, i) {
                var n = Node.prototype.removeEventListener;
                "click" === t ? n.call(s, t, e.hijacked || e, i) : n.call(s, t, e, i)
            }
            ,
            s.addEventListener = function(t, e, i) {
                var n = Node.prototype.addEventListener;
                "click" === t ? n.call(s, t, e.hijacked || (e.hijacked = function(t) {
                    t.propagationStopped || e(t)
                }
                ), i) : n.call(s, t, e, i)
            }
            ),
            "function" == typeof s.onclick && (e = s.onclick,
            s.addEventListener("click", function(t) {
                e(t)
            }, !1),
            s.onclick = null)
        }
    }
    var t = 0 <= navigator.userAgent.indexOf("Windows Phone")
      , a = 0 < navigator.userAgent.indexOf("Android") && !t
      , l = /iP(ad|hone|od)/.test(navigator.userAgent) && !t
      , c = l && /OS 4_\d(_\d)?/.test(navigator.userAgent)
      , h = l && /OS [6-7]_\d/.test(navigator.userAgent)
      , s = 0 < navigator.userAgent.indexOf("BB10");
    o.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled)
                return !0;
            break;
        case "input":
            if (l && "file" === t.type || t.disabled)
                return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }
    ,
    o.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !a;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    }
    ,
    o.prototype.sendClick = function(t, e) {
        var i, n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
        n = e.changedTouches[0],
        (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
        i.forwardedTouchEvent = !0,
        t.dispatchEvent(i)
    }
    ,
    o.prototype.determineEventType = function(t) {
        return a && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    o.prototype.focus = function(t) {
        var e;
        l && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length,
        t.setSelectionRange(e, e)) : t.focus()
    }
    ,
    o.prototype.updateScrollParent = function(t) {
        var e, i = t.fastClickScrollParent;
        if (!i || !i.contains(t)) {
            e = t;
            do {
                if (e.scrollHeight > e.offsetHeight) {
                    i = e,
                    t.fastClickScrollParent = e;
                    break
                }
                e = e.parentElement
            } while (e)
        }
        i && (i.fastClickLastScrollTop = i.scrollTop)
    }
    ,
    o.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }
    ,
    o.prototype.onTouchStart = function(t) {
        var e, i, n;
        if (1 < t.targetTouches.length)
            return !0;
        if (e = this.getTargetElementFromEventTarget(t.target),
        i = t.targetTouches[0],
        l) {
            if ((n = window.getSelection()).rangeCount && !n.isCollapsed)
                return !0;
            if (!c) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier)
                    return t.preventDefault(),
                    !1;
                this.lastTouchIdentifier = i.identifier,
                this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = t.timeStamp,
        this.targetElement = e,
        this.touchStartX = i.pageX,
        this.touchStartY = i.pageY,
        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
        !0
    }
    ,
    o.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0]
          , i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }
    ,
    o.prototype.onTouchMove = function(t) {
        return this.trackingClick && (this.targetElement === this.getTargetElementFromEventTarget(t.target) && !this.touchHasMoved(t) || (this.trackingClick = !1,
        this.targetElement = null)),
        !0
    }
    ,
    o.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    o.prototype.onTouchEnd = function(t) {
        var e, i, n, s, r, o = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
            return !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = t.timeStamp,
        i = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        h && (r = t.changedTouches[0],
        (o = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || o).fastClickScrollParent = this.targetElement.fastClickScrollParent),
        "label" === (n = o.tagName.toLowerCase())) {
            if (e = this.findControl(o)) {
                if (this.focus(o),
                a)
                    return !1;
                o = e
            }
        } else if (this.needsFocus(o))
            return 100 < t.timeStamp - i || l && window.top !== window && "input" === n ? this.targetElement = null : (this.focus(o),
            this.sendClick(o, t),
            l && "select" === n || (this.targetElement = null,
            t.preventDefault())),
            !1;
        return !(!l || c || (!(s = o.fastClickScrollParent) || s.fastClickLastScrollTop === s.scrollTop)) || (this.needsClick(o) || (t.preventDefault(),
        this.sendClick(o, t)),
        !1)
    }
    ,
    o.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    o.prototype.onMouse = function(t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
        t.stopPropagation(),
        t.preventDefault(),
        !1)))
    }
    ,
    o.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null,
        !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null),
        e)
    }
    ,
    o.prototype.destroy = function() {
        var t = this.layer;
        a && (t.removeEventListener("mouseover", this.onMouse, !0),
        t.removeEventListener("mousedown", this.onMouse, !0),
        t.removeEventListener("mouseup", this.onMouse, !0)),
        t.removeEventListener("click", this.onClick, !0),
        t.removeEventListener("touchstart", this.onTouchStart, !1),
        t.removeEventListener("touchmove", this.onTouchMove, !1),
        t.removeEventListener("touchend", this.onTouchEnd, !1),
        t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    o.notNeeded = function(t) {
        var e, i, n;
        if (void 0 === window.ontouchstart)
            return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!a)
                return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no"))
                    return !0;
                if (31 < i && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (s && (10 <= (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= n[2] && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no"))
                return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && ((e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
    }
    ,
    o.attach = function(t, e) {
        return new o(t,e)
    }
    ,
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return o
    }) : "undefined" != typeof module && module.exports ? (module.exports = o.attach,
    module.exports.FastClick = o) : window.FastClick = o
}(),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(M) {
    "use strict";
    function i(t) {
        var e = t.data;
        t.isDefaultPrevented() || (t.preventDefault(),
        M(t.target).ajaxSubmit(e))
    }
    function n(t) {
        var e = t.target
          , i = M(e);
        if (!i.is("[type=submit],[type=image]")) {
            var n = i.closest("[type=submit]");
            if (0 === n.length)
                return;
            e = n[0]
        }
        var s, r = this;
        "image" == (r.clk = e).type && (void 0 !== t.offsetX ? (r.clk_x = t.offsetX,
        r.clk_y = t.offsetY) : "function" == typeof M.fn.offset ? (s = i.offset(),
        r.clk_x = t.pageX - s.left,
        r.clk_y = t.pageY - s.top) : (r.clk_x = t.pageX - e.offsetLeft,
        r.clk_y = t.pageY - e.offsetTop)),
        setTimeout(function() {
            r.clk = r.clk_x = r.clk_y = null
        }, 100)
    }
    function R() {
        var t;
        M.fn.ajaxSubmit.debug && (t = "[jquery.form] " + Array.prototype.join.call(arguments, ""),
        window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t))
    }
    var _ = {};
    _.fileapi = void 0 !== M("<input type='file'/>").get(0).files,
    _.formdata = void 0 !== window.FormData;
    var F = !!M.fn.prop;
    M.fn.attr2 = function() {
        if (!F)
            return this.attr.apply(this, arguments);
        var t = this.prop.apply(this, arguments);
        return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
    }
    ,
    M.fn.ajaxSubmit = function(A) {
        function t(t) {
            function h(e) {
                var i = null;
                try {
                    e.contentWindow && (i = e.contentWindow.document)
                } catch (t) {
                    R("cannot get iframe.contentWindow document: " + t)
                }
                if (i)
                    return i;
                try {
                    i = e.contentDocument ? e.contentDocument : e.document
                } catch (t) {
                    R("cannot get iframe.contentDocument: " + t),
                    i = e.document
                }
                return i
            }
            function e() {
                var t = D.attr2("target")
                  , e = D.attr2("action")
                  , i = D.attr("enctype") || D.attr("encoding") || "multipart/form-data";
                a.setAttribute("target", r),
                O && !/post/i.test(O) || a.setAttribute("method", "POST"),
                e != d.url && a.setAttribute("action", d.url),
                d.skipEncodingOverride || O && !/post/i.test(O) || D.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                d.timeout && (y = setTimeout(function() {
                    v = !0,
                    u(b)
                }, d.timeout));
                var n = [];
                try {
                    if (d.extraData)
                        for (var s in d.extraData)
                            d.extraData.hasOwnProperty(s) && n.push(M.isPlainObject(d.extraData[s]) && d.extraData[s].hasOwnProperty("name") && d.extraData[s].hasOwnProperty("value") ? M('<input type="hidden" name="' + d.extraData[s].name + '">').val(d.extraData[s].value).appendTo(a)[0] : M('<input type="hidden" name="' + s + '">').val(d.extraData[s]).appendTo(a)[0]);
                    d.iframeTarget || f.appendTo("body"),
                    m.attachEvent ? m.attachEvent("onload", u) : m.addEventListener("load", u, !1),
                    setTimeout(function t() {
                        try {
                            var e = h(m).readyState;
                            R("state = " + e),
                            e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                        } catch (t) {
                            R("Server abort: ", t, " (", t.name, ")"),
                            u(x),
                            y && clearTimeout(y),
                            y = void 0
                        }
                    }, 15);
                    try {
                        a.submit()
                    } catch (t) {
                        document.createElement("form").submit.apply(a)
                    }
                } finally {
                    a.setAttribute("action", e),
                    a.setAttribute("enctype", i),
                    t ? a.setAttribute("target", t) : D.removeAttr("target"),
                    M(n).remove()
                }
            }
            function u(t) {
                if (!g.aborted && !S) {
                    if ((T = h(m)) || (R("cannot access response document"),
                    t = x),
                    t === b && g)
                        return g.abort("timeout"),
                        void _.reject(g, "timeout");
                    if (t == x && g)
                        return g.abort("server abort"),
                        void _.reject(g, "error", "server abort");
                    if (T && T.location.href != d.iframeSrc || v) {
                        m.detachEvent ? m.detachEvent("onload", u) : m.removeEventListener("load", u, !1);
                        var e, i = "success";
                        try {
                            if (v)
                                throw "timeout";
                            var n = "xml" == d.dataType || T.XMLDocument || M.isXMLDoc(T);
                            if (R("isXml=" + n),
                            !n && window.opera && (null === T.body || !T.body.innerHTML) && --C)
                                return R("requeing onLoad callback, DOM not available"),
                                void setTimeout(u, 250);
                            var s = T.body ? T.body : T.documentElement;
                            g.responseText = s ? s.innerHTML : null,
                            g.responseXML = T.XMLDocument ? T.XMLDocument : T,
                            n && (d.dataType = "xml"),
                            g.getResponseHeader = function(t) {
                                return {
                                    "content-type": d.dataType
                                }[t.toLowerCase()]
                            }
                            ,
                            s && (g.status = Number(s.getAttribute("status")) || g.status,
                            g.statusText = s.getAttribute("statusText") || g.statusText);
                            var r, o, a, l = (d.dataType || "").toLowerCase(), c = /(json|script|text)/.test(l);
                            c || d.textarea ? (r = T.getElementsByTagName("textarea")[0]) ? (g.responseText = r.value,
                            g.status = Number(r.getAttribute("status")) || g.status,
                            g.statusText = r.getAttribute("statusText") || g.statusText) : c && (o = T.getElementsByTagName("pre")[0],
                            a = T.getElementsByTagName("body")[0],
                            o ? g.responseText = o.textContent ? o.textContent : o.innerText : a && (g.responseText = a.textContent ? a.textContent : a.innerText)) : "xml" == l && !g.responseXML && g.responseText && (g.responseXML = k(g.responseText));
                            try {
                                w = E(g, l, d)
                            } catch (t) {
                                i = "parsererror",
                                g.error = e = t || i
                            }
                        } catch (t) {
                            R("error caught: ", t),
                            i = "error",
                            g.error = e = t || i
                        }
                        g.aborted && (R("upload aborted"),
                        i = null),
                        g.status && (i = 200 <= g.status && g.status < 300 || 304 === g.status ? "success" : "error"),
                        "success" === i ? (d.success && d.success.call(d.context, w, "success", g),
                        _.resolve(g.responseText, "success", g),
                        p && M.event.trigger("ajaxSuccess", [g, d])) : i && (void 0 === e && (e = g.statusText),
                        d.error && d.error.call(d.context, g, i, e),
                        _.reject(g, "error", e),
                        p && M.event.trigger("ajaxError", [g, d, e])),
                        p && M.event.trigger("ajaxComplete", [g, d]),
                        p && !--M.active && M.event.trigger("ajaxStop"),
                        d.complete && d.complete.call(d.context, g, i),
                        S = !0,
                        d.timeout && clearTimeout(y),
                        setTimeout(function() {
                            d.iframeTarget ? f.attr("src", d.iframeSrc) : f.remove(),
                            g.responseXML = null
                        }, 100)
                    }
                }
            }
            var i, n, d, p, r, f, m, g, s, o, v, y, a = D[0], _ = M.Deferred();
            if (_.abort = function(t) {
                g.abort(t)
            }
            ,
            t)
                for (n = 0; n < N.length; n++)
                    i = M(N[n]),
                    F ? i.prop("disabled", !1) : i.removeAttr("disabled");
            if ((d = M.extend(!0, {}, M.ajaxSettings, A)).context = d.context || d,
            r = "jqFormIO" + (new Date).getTime(),
            d.iframeTarget ? (o = (f = M(d.iframeTarget)).attr2("name")) ? r = o : f.attr2("name", r) : (f = M('<iframe name="' + r + '" src="' + d.iframeSrc + '" />')).css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            }),
            m = f[0],
            g = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(t) {
                    var e = "timeout" === t ? "timeout" : "aborted";
                    R("aborting upload... " + e),
                    this.aborted = 1;
                    try {
                        m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop")
                    } catch (t) {}
                    f.attr("src", d.iframeSrc),
                    g.error = e,
                    d.error && d.error.call(d.context, g, e, t),
                    p && M.event.trigger("ajaxError", [g, d, e]),
                    d.complete && d.complete.call(d.context, g, e)
                }
            },
            (p = d.global) && 0 == M.active++ && M.event.trigger("ajaxStart"),
            p && M.event.trigger("ajaxSend", [g, d]),
            d.beforeSend && !1 === d.beforeSend.call(d.context, g, d))
                return d.global && M.active--,
                _.reject(),
                _;
            if (g.aborted)
                return _.reject(),
                _;
            !(s = a.clk) || (o = s.name) && !s.disabled && (d.extraData = d.extraData || {},
            d.extraData[o] = s.value,
            "image" == s.type && (d.extraData[o + ".x"] = a.clk_x,
            d.extraData[o + ".y"] = a.clk_y));
            var b = 1
              , x = 2
              , l = M("meta[name=csrf-token]").attr("content")
              , c = M("meta[name=csrf-param]").attr("content");
            c && l && (d.extraData = d.extraData || {},
            d.extraData[c] = l),
            d.forceSync ? e() : setTimeout(e, 10);
            var w, T, S, C = 50, k = M.parseXML || function(t, e) {
                return window.ActiveXObject ? ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"),
                e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
            }
            , P = M.parseJSON || function(t) {
                return window.eval("(" + t + ")")
            }
            , E = function(t, e, i) {
                var n = t.getResponseHeader("content-type") || ""
                  , s = "xml" === e || !e && 0 <= n.indexOf("xml")
                  , r = s ? t.responseXML : t.responseText;
                return s && "parsererror" === r.documentElement.nodeName && M.error && M.error("parsererror"),
                i && i.dataFilter && (r = i.dataFilter(r, e)),
                "string" == typeof r && ("json" === e || !e && 0 <= n.indexOf("json") ? r = P(r) : ("script" === e || !e && 0 <= n.indexOf("javascript")) && M.globalEval(r)),
                r
            };
            return _
        }
        if (!this.length)
            return R("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var O, e, i, D = this;
        "function" == typeof A ? A = {
            success: A
        } : void 0 === A && (A = {}),
        O = A.type || this.attr2("method"),
        i = (i = (i = "string" == typeof (e = A.url || this.attr2("action")) ? M.trim(e) : "") || window.location.href || "") && (i.match(/^([^#]+)/) || [])[1],
        A = M.extend(!0, {
            url: i,
            success: M.ajaxSettings.success,
            type: O || M.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, A);
        var n = {};
        if (this.trigger("form-pre-serialize", [this, A, n]),
        n.veto)
            return R("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (A.beforeSerialize && !1 === A.beforeSerialize(this, A))
            return R("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var s = A.traditional;
        void 0 === s && (s = M.ajaxSettings.traditional);
        var r, N = [], o = this.formToArray(A.semantic, N);
        if (A.data && (A.extraData = A.data,
        r = M.param(A.data, s)),
        A.beforeSubmit && !1 === A.beforeSubmit(o, this, A))
            return R("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [o, this, A, n]),
        n.veto)
            return R("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var a = M.param(o, s);
        r && (a = a ? a + "&" + r : r),
        "GET" == A.type.toUpperCase() ? (A.url += (0 <= A.url.indexOf("?") ? "&" : "?") + a,
        A.data = null) : A.data = a;
        var l, c, h, u = [];
        A.resetForm && u.push(function() {
            D.resetForm()
        }),
        A.clearForm && u.push(function() {
            D.clearForm(A.includeHidden)
        }),
        !A.dataType && A.target ? (l = A.success || function() {}
        ,
        u.push(function(t) {
            var e = A.replaceTarget ? "replaceWith" : "html";
            M(A.target)[e](t).each(l, arguments)
        })) : A.success && u.push(A.success),
        A.success = function(t, e, i) {
            for (var n = A.context || this, s = 0, r = u.length; s < r; s++)
                u[s].apply(n, [t, e, i || D, D])
        }
        ,
        A.error && (c = A.error,
        A.error = function(t, e, i) {
            var n = A.context || this;
            c.apply(n, [t, e, i, D])
        }
        ),
        A.complete && (h = A.complete,
        A.complete = function(t, e) {
            var i = A.context || this;
            h.apply(i, [t, e, D])
        }
        );
        var d = 0 < M("input[type=file]:enabled", this).filter(function() {
            return "" !== M(this).val()
        }).length
          , p = "multipart/form-data"
          , f = D.attr("enctype") == p || D.attr("encoding") == p
          , m = _.fileapi && _.formdata;
        R("fileAPI :" + m);
        var g, v = (d || f) && !m;
        !1 !== A.iframe && (A.iframe || v) ? A.closeKeepAlive ? M.get(A.closeKeepAlive, function() {
            g = t(o)
        }) : g = t(o) : g = (d || f) && m ? function(t) {
            for (var i = new FormData, e = 0; e < t.length; e++)
                i.append(t[e].name, t[e].value);
            if (A.extraData)
                for (var n = function(t) {
                    for (var e, i = M.param(t, A.traditional).split("&"), n = i.length, s = [], r = 0; r < n; r++)
                        i[r] = i[r].replace(/\+/g, " "),
                        e = i[r].split("="),
                        s.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
                    return s
                }(A.extraData), e = 0; e < n.length; e++)
                    n[e] && i.append(n[e][0], n[e][1]);
            A.data = null;
            var s = M.extend(!0, {}, M.ajaxSettings, A, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: O || "POST"
            });
            A.uploadProgress && (s.xhr = function() {
                var t = M.ajaxSettings.xhr();
                return t.upload && t.upload.addEventListener("progress", function(t) {
                    var e = 0
                      , i = t.loaded || t.position
                      , n = t.total;
                    t.lengthComputable && (e = Math.ceil(i / n * 100)),
                    A.uploadProgress(t, i, n, e)
                }, !1),
                t
            }
            ),
            s.data = null;
            var r = s.beforeSend;
            return s.beforeSend = function(t, e) {
                e.data = A.formData ? A.formData : i,
                r && r.call(this, t, e)
            }
            ,
            M.ajax(s)
        }(o) : M.ajax(A),
        D.removeData("jqxhr").data("jqxhr", g);
        for (var y = 0; y < N.length; y++)
            N[y] = null;
        return this.trigger("form-submit-notify", [this, A]),
        this
    }
    ,
    M.fn.ajaxForm = function(t) {
        if ((t = t || {}).delegation = t.delegation && M.isFunction(M.fn.on),
        t.delegation || 0 !== this.length)
            return t.delegation ? (M(document).off("submit.form-plugin", this.selector, i).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, t, i).on("click.form-plugin", this.selector, t, n),
            this) : this.ajaxFormUnbind().bind("submit.form-plugin", t, i).bind("click.form-plugin", t, n);
        var e = {
            s: this.selector,
            c: this.context
        };
        return !M.isReady && e.s ? (R("DOM not ready, queuing ajaxForm"),
        M(function() {
            M(e.s, e.c).ajaxForm(t)
        })) : R("terminating; zero elements found by selector" + (M.isReady ? "" : " (DOM not ready)")),
        this
    }
    ,
    M.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    M.fn.formToArray = function(t, e) {
        var i = [];
        if (0 === this.length)
            return i;
        var n, s, r, o, a, l, c, h, u, d, p = this[0], f = this.attr("id"), m = t ? p.getElementsByTagName("*") : p.elements;
        if (m && !/MSIE [678]/.test(navigator.userAgent) && (m = M(m).get()),
        f && ((n = M(':input[form="' + f + '"]').get()).length && (m = (m || []).concat(n))),
        !m || !m.length)
            return i;
        for (s = 0,
        l = m.length; s < l; s++)
            if ((d = (a = m[s]).name) && !a.disabled)
                if (t && p.clk && "image" == a.type)
                    p.clk == a && (i.push({
                        name: d,
                        value: M(a).val(),
                        type: a.type
                    }),
                    i.push({
                        name: d + ".x",
                        value: p.clk_x
                    }, {
                        name: d + ".y",
                        value: p.clk_y
                    }));
                else if ((o = M.fieldValue(a, !0)) && o.constructor == Array)
                    for (e && e.push(a),
                    r = 0,
                    c = o.length; r < c; r++)
                        i.push({
                            name: d,
                            value: o[r]
                        });
                else if (_.fileapi && "file" == a.type) {
                    e && e.push(a);
                    var g = a.files;
                    if (g.length)
                        for (r = 0; r < g.length; r++)
                            i.push({
                                name: d,
                                value: g[r],
                                type: a.type
                            });
                    else
                        i.push({
                            name: d,
                            value: "",
                            type: a.type
                        })
                } else
                    null != o && (e && e.push(a),
                    i.push({
                        name: d,
                        value: o,
                        type: a.type,
                        required: a.required
                    }));
        return t || !p.clk || (d = (u = (h = M(p.clk))[0]).name) && !u.disabled && "image" == u.type && (i.push({
            name: d,
            value: h.val()
        }),
        i.push({
            name: d + ".x",
            value: p.clk_x
        }, {
            name: d + ".y",
            value: p.clk_y
        })),
        i
    }
    ,
    M.fn.formSerialize = function(t) {
        return M.param(this.formToArray(t))
    }
    ,
    M.fn.fieldSerialize = function(s) {
        var r = [];
        return this.each(function() {
            var t = this.name;
            if (t) {
                var e = M.fieldValue(this, s);
                if (e && e.constructor == Array)
                    for (var i = 0, n = e.length; i < n; i++)
                        r.push({
                            name: t,
                            value: e[i]
                        });
                else
                    null != e && r.push({
                        name: this.name,
                        value: e
                    })
            }
        }),
        M.param(r)
    }
    ,
    M.fn.fieldValue = function(t) {
        for (var e = [], i = 0, n = this.length; i < n; i++) {
            var s = this[i]
              , r = M.fieldValue(s, t);
            null == r || r.constructor == Array && !r.length || (r.constructor == Array ? M.merge(e, r) : e.push(r))
        }
        return e
    }
    ,
    M.fieldValue = function(t, e) {
        var i = t.name
          , n = t.type
          , s = t.tagName.toLowerCase();
        if (void 0 === e && (e = !0),
        e && (!i || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == s && -1 == t.selectedIndex))
            return null;
        if ("select" != s)
            return M(t).val();
        var r = t.selectedIndex;
        if (r < 0)
            return null;
        for (var o = [], a = t.options, l = "select-one" == n, c = l ? r + 1 : a.length, h = l ? r : 0; h < c; h++) {
            var u = a[h];
            if (u.selected) {
                var d = (d = u.value) || (u.attributes && u.attributes.value && !u.attributes.value.specified ? u.text : u.value);
                if (l)
                    return d;
                o.push(d)
            }
        }
        return o
    }
    ,
    M.fn.clearForm = function(t) {
        return this.each(function() {
            M("input,select,textarea", this).clearFields(t)
        })
    }
    ,
    M.fn.clearFields = M.fn.clearInputs = function(i) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type
              , e = this.tagName.toLowerCase();
            n.test(t) || "textarea" == e ? this.value = "" : "checkbox" == t || "radio" == t ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == t ? /MSIE/.test(navigator.userAgent) ? M(this).replaceWith(M(this).clone(!0)) : M(this).val("") : i && (!0 === i && /hidden/.test(t) || "string" == typeof i && M(this).is(i)) && (this.value = "")
        })
    }
    ,
    M.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset()
        })
    }
    ,
    M.fn.enable = function(t) {
        return void 0 === t && (t = !0),
        this.each(function() {
            this.disabled = !t
        })
    }
    ,
    M.fn.selected = function(i) {
        return void 0 === i && (i = !0),
        this.each(function() {
            var t, e = this.type;
            "checkbox" == e || "radio" == e ? this.checked = i : "option" == this.tagName.toLowerCase() && (t = M(this).parent("select"),
            i && t[0] && "select-one" == t[0].type && t.find("option").selected(!1),
            this.selected = i)
        })
    }
    ,
    M.fn.ajaxSubmit.debug = !1
});
var Handlebars = function() {
    var c = function() {
        "use strict";
        function t(t) {
            this.string = t
        }
        return t.prototype.toString = function() {
            return "" + this.string
        }
        ,
        t
    }()
      , l = function() {
        "use strict";
        function e(t) {
            return n[t] || "&"
        }
        var t = {}
          , i = c
          , n = {
            "&": "&",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , s = /[&<>"'`]/g
          , r = /[&<>"'`]/;
        t.extend = function(t, e) {
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }
        ;
        var o = Object.prototype.toString;
        t.toString = o;
        var a = function(t) {
            return "function" == typeof t
        };
        a(/x/) && (a = function(t) {
            return "function" == typeof t && "[object Function]" === o.call(t)
        }
        ),
        t.isFunction = a;
        var l = Array.isArray || function(t) {
            return !(!t || "object" != typeof t) && "[object Array]" === o.call(t)
        }
        ;
        return t.isArray = l,
        t.escapeExpression = function(t) {
            return t instanceof i ? t.toString() : t || 0 === t ? (t = "" + t,
            r.test(t) ? t.replace(s, e) : t) : ""
        }
        ,
        t.isEmpty = function(t) {
            return !t && 0 !== t || !(!l(t) || 0 !== t.length)
        }
        ,
        t
    }()
      , d = function() {
        "use strict";
        function t(t, e) {
            var i;
            e && e.firstLine && (t += " - " + (i = e.firstLine) + ":" + e.firstColumn);
            for (var n = Error.prototype.constructor.call(this, t), s = 0; s < r.length; s++)
                this[r[s]] = n[r[s]];
            i && (this.lineNumber = i,
            this.column = e.firstColumn)
        }
        var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return t.prototype = new Error,
        t
    }()
      , h = function() {
        "use strict";
        function t(t, e) {
            var s;
            this.helpers = t || {},
            this.partials = e || {},
            (s = this).registerHelper("helperMissing", function(t) {
                if (2 !== arguments.length)
                    throw new r("Missing helper: '" + t + "'")
            }),
            s.registerHelper("blockHelperMissing", function(t, e) {
                var i = e.inverse || function() {}
                  , n = e.fn;
                return h(t) && (t = t.call(this)),
                !0 === t ? n(this) : !1 === t || null == t ? i(this) : c(t) ? 0 < t.length ? s.helpers.each(t, e) : i(this) : n(t)
            }),
            s.registerHelper("each", function(t, e) {
                var i, n = e.fn, s = e.inverse, r = 0, o = "";
                if (h(t) && (t = t.call(this)),
                e.data && (i = u(e.data)),
                t && "object" == typeof t)
                    if (c(t))
                        for (var a = t.length; r < a; r++)
                            i && (i.index = r,
                            i.first = 0 === r,
                            i.last = r === t.length - 1),
                            o += n(t[r], {
                                data: i
                            });
                    else
                        for (var l in t)
                            t.hasOwnProperty(l) && (i && (i.key = l,
                            i.index = r,
                            i.first = 0 === r),
                            o += n(t[l], {
                                data: i
                            }),
                            r++);
                return 0 === r && (o = s(this)),
                o
            }),
            s.registerHelper("if", function(t, e) {
                return h(t) && (t = t.call(this)),
                !e.hash.includeZero && !t || n.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }),
            s.registerHelper("unless", function(t, e) {
                return s.helpers.if.call(this, t, {
                    fn: e.inverse,
                    inverse: e.fn,
                    hash: e.hash
                })
            }),
            s.registerHelper("with", function(t, e) {
                if (h(t) && (t = t.call(this)),
                !n.isEmpty(t))
                    return e.fn(t)
            }),
            s.registerHelper("log", function(t, e) {
                var i = e.data && null != e.data.level ? parseInt(e.data.level, 10) : 1;
                s.log(i, t)
            })
        }
        function e(t, e) {
            a.log(t, e)
        }
        var i = {}
          , n = l
          , r = d;
        i.VERSION = "1.3.0";
        i.COMPILER_REVISION = 4;
        i.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        var c = n.isArray
          , h = n.isFunction
          , s = n.toString
          , o = "[object Object]";
        (i.HandlebarsEnvironment = t).prototype = {
            constructor: t,
            logger: a,
            log: e,
            registerHelper: function(t, e, i) {
                if (s.call(t) === o) {
                    if (i || e)
                        throw new r("Arg not supported with multiple helpers");
                    n.extend(this.helpers, t)
                } else
                    i && (e.not = i),
                    this.helpers[t] = e
            },
            registerPartial: function(t, e) {
                s.call(t) === o ? n.extend(this.partials, t) : this.partials[t] = e
            }
        };
        var a = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(t, e) {
                var i;
                a.level <= t && (i = a.methodMap[t],
                "undefined" != typeof console && console[i] && console[i].call(console, e))
            }
        };
        i.logger = a,
        i.log = e;
        var u = function(t) {
            var e = {};
            return n.extend(e, t),
            e
        };
        return i.createFrame = u,
        i
    }()
      , a = function() {
        "use strict";
        function s(t, i, n) {
            function e(t, e) {
                return i(t, (e = e || {}).data || n)
            }
            return e.program = t,
            e.depth = 0,
            e
        }
        var t = {}
          , n = l
          , c = d
          , r = h.COMPILER_REVISION
          , o = h.REVISION_CHANGES;
        return t.checkRevision = function(t) {
            var e = t && t[0] || 1;
            if (e !== r) {
                if (e < r) {
                    var i = o[r]
                      , n = o[e];
                    throw new c("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + n + ").")
                }
                throw new c("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }
        ,
        t.template = function(o, l) {
            if (!l)
                throw new c("No environment passed to template");
            var a = {
                escapeExpression: n.escapeExpression,
                invokePartial: function(t, e, i, n, s, r) {
                    var o = l.VM.invokePartial.apply(this, arguments);
                    if (null != o)
                        return o;
                    if (l.compile) {
                        var a = {
                            helpers: n,
                            partials: s,
                            data: r
                        };
                        return s[e] = l.compile(t, {
                            data: void 0 !== r
                        }, l),
                        s[e](i, a)
                    }
                    throw new c("The partial " + e + " could not be compiled when running in runtime-only mode")
                },
                programs: [],
                program: function(t, e, i) {
                    var n = this.programs[t];
                    return n = i ? s(t, e, i) : n || (this.programs[t] = s(t, e))
                },
                merge: function(t, e) {
                    var i = t || e;
                    return t && e && t !== e && (i = {},
                    n.extend(i, e),
                    n.extend(i, t)),
                    i
                },
                programWithDepth: l.VM.programWithDepth,
                noop: l.VM.noop,
                compilerInfo: null
            };
            return function(t, e) {
                var i, n, s = (e = e || {}).partial ? e : l;
                e.partial || (i = e.helpers,
                n = e.partials);
                var r = o.call(a, s, t, i, n, e.data);
                return e.partial || l.VM.checkRevision(a.compilerInfo),
                r
            }
        }
        ,
        t.programWithDepth = function(t, i, n) {
            function e(t, e) {
                return e = e || {},
                i.apply(this, [t, e.data || n].concat(s))
            }
            var s = Array.prototype.slice.call(arguments, 3);
            return e.program = t,
            e.depth = s.length,
            e
        }
        ,
        t.program = s,
        t.invokePartial = function(t, e, i, n, s, r) {
            var o = {
                partial: !0,
                helpers: n,
                partials: s,
                data: r
            };
            if (void 0 === t)
                throw new c("The partial " + e + " could not be found");
            if (t instanceof Function)
                return t(i, o)
        }
        ,
        t.noop = function() {
            return ""
        }
        ,
        t
    }()
      , i = function() {
        "use strict";
        function t() {
            var e = new i.HandlebarsEnvironment;
            return r.extend(e, i),
            e.SafeString = n,
            e.Exception = s,
            e.Utils = r,
            e.VM = o,
            e.template = function(t) {
                return o.template(t, e)
            }
            ,
            e
        }
        var i = h
          , n = c
          , s = d
          , r = l
          , o = a
          , e = t();
        return e.create = t,
        e
    }()
      , u = function() {
        "use strict";
        function l(t) {
            t = t || {},
            this.firstLine = t.first_line,
            this.firstColumn = t.first_column,
            this.lastColumn = t.last_column,
            this.lastLine = t.last_line
        }
        var c = d
          , o = {
            ProgramNode: function(t, e, i, n) {
                var s, r;
                3 === arguments.length ? (n = i,
                i = null) : 2 === arguments.length && (n = e,
                e = null),
                l.call(this, n),
                this.type = "program",
                this.statements = t,
                this.strip = {},
                i ? ((r = i[0]) ? (s = {
                    first_line: r.firstLine,
                    last_line: r.lastLine,
                    last_column: r.lastColumn,
                    first_column: r.firstColumn
                },
                this.inverse = new o.ProgramNode(i,e,s)) : this.inverse = new o.ProgramNode(i,e),
                this.strip.right = e.left) : e && (this.strip.left = e.right)
            },
            MustacheNode: function(t, e, i, n, s) {
                var r;
                l.call(this, s),
                this.type = "mustache",
                this.strip = n,
                null != i && i.charAt ? (r = i.charAt(3) || i.charAt(2),
                this.escaped = "{" !== r && "&" !== r) : this.escaped = !!i,
                t instanceof o.SexprNode ? this.sexpr = t : this.sexpr = new o.SexprNode(t,e),
                this.sexpr.isRoot = !0,
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(t, e, i) {
                l.call(this, i),
                this.type = "sexpr",
                this.hash = e;
                var n = this.id = t[0]
                  , s = this.params = t.slice(1)
                  , r = this.eligibleHelper = n.isSimple;
                this.isHelper = r && (s.length || e)
            },
            PartialNode: function(t, e, i, n) {
                l.call(this, n),
                this.type = "partial",
                this.partialName = t,
                this.context = e,
                this.strip = i
            },
            BlockNode: function(t, e, i, n, s) {
                if (l.call(this, s),
                t.sexpr.id.original !== n.path.original)
                    throw new c(t.sexpr.id.original + " doesn't match " + n.path.original,this);
                this.type = "block",
                this.mustache = t,
                this.program = e,
                this.inverse = i,
                this.strip = {
                    left: t.strip.left,
                    right: n.strip.right
                },
                (e || i).strip.left = t.strip.right,
                (i || e).strip.right = n.strip.left,
                i && !e && (this.isInverse = !0)
            },
            ContentNode: function(t, e) {
                l.call(this, e),
                this.type = "content",
                this.string = t
            },
            HashNode: function(t, e) {
                l.call(this, e),
                this.type = "hash",
                this.pairs = t
            },
            IdNode: function(t, e) {
                l.call(this, e),
                this.type = "ID";
                for (var i = "", n = [], s = 0, r = 0, o = t.length; r < o; r++) {
                    var a = t[r].part;
                    if (i += (t[r].separator || "") + a,
                    ".." === a || "." === a || "this" === a) {
                        if (0 < n.length)
                            throw new c("Invalid path: " + i,this);
                        ".." === a ? s++ : this.isScoped = !0
                    } else
                        n.push(a)
                }
                this.original = i,
                this.parts = n,
                this.string = n.join("."),
                this.depth = s,
                this.isSimple = 1 === t.length && !this.isScoped && 0 === s,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(t, e) {
                l.call(this, e),
                this.type = "PARTIAL_NAME",
                this.name = t.original
            },
            DataNode: function(t, e) {
                l.call(this, e),
                this.type = "DATA",
                this.id = t
            },
            StringNode: function(t, e) {
                l.call(this, e),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = t
            },
            IntegerNode: function(t, e) {
                l.call(this, e),
                this.type = "INTEGER",
                this.original = this.integer = t,
                this.stringModeValue = Number(t)
            },
            BooleanNode: function(t, e) {
                l.call(this, e),
                this.type = "BOOLEAN",
                this.bool = t,
                this.stringModeValue = "true" === t
            },
            CommentNode: function(t, e) {
                l.call(this, e),
                this.type = "comment",
                this.comment = t
            }
        };
        return o
    }()
      , n = function() {
        "use strict";
        var t, e;
        function l(t, e) {
            return {
                left: "~" === t.charAt(2),
                right: "~" === e.charAt(0) || "~" === e.charAt(1)
            }
        }
        function i() {
            this.yy = {}
        }
        return e = {
            EOF: 1,
            parseError: function(t, e) {
                if (!this.yy.parser)
                    throw new Error(t);
                this.yy.parser.parseError(t, e)
            },
            setInput: function(t) {
                return this._input = t,
                this._more = this._less = this.done = !1,
                this.yylineno = this.yyleng = 0,
                this.yytext = this.matched = this.match = "",
                this.conditionStack = ["INITIAL"],
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                },
                this.options.ranges && (this.yylloc.range = [0, 0]),
                this.offset = 0,
                this
            },
            input: function() {
                var t = this._input[0];
                return this.yytext += t,
                this.yyleng++,
                this.offset++,
                this.match += t,
                this.matched += t,
                t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++,
                this.yylloc.last_line++) : this.yylloc.last_column++,
                this.options.ranges && this.yylloc.range[1]++,
                this._input = this._input.slice(1),
                t
            },
            unput: function(t) {
                var e = t.length
                  , i = t.split(/(?:\r\n?|\n)/g);
                this._input = t + this._input,
                this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                this.offset -= e;
                var n = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1),
                this.matched = this.matched.substr(0, this.matched.length - 1),
                i.length - 1 && (this.yylineno -= i.length - 1);
                var s = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - e
                },
                this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - e]),
                this
            },
            more: function() {
                return this._more = !0,
                this
            },
            less: function(t) {
                this.unput(this.match.slice(t))
            },
            pastInput: function() {
                var t = this.matched.substr(0, this.matched.length - this.match.length);
                return (20 < t.length ? "..." : "") + t.substr(-20).replace(/\n/g, "")
            },
            upcomingInput: function() {
                var t = this.match;
                return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                (t.substr(0, 20) + (20 < t.length ? "..." : "")).replace(/\n/g, "")
            },
            showPosition: function() {
                var t = this.pastInput()
                  , e = new Array(t.length + 1).join("-");
                return t + this.upcomingInput() + "\n" + e + "^"
            },
            next: function() {
                if (this.done)
                    return this.EOF;
                var t, e, i, n, s;
                this._input || (this.done = !0),
                this._more || (this.yytext = "",
                this.match = "");
                for (var r = this._currentRules(), o = 0; o < r.length && (!(i = this._input.match(this.rules[r[o]])) || e && !(i[0].length > e[0].length) || (e = i,
                n = o,
                this.options.flex)); o++)
                    ;
                return e ? ((s = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += s.length),
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                },
                this.yytext += e[0],
                this.match += e[0],
                this.matches = e,
                this.yyleng = this.yytext.length,
                this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                this._more = !1,
                this._input = this._input.slice(e[0].length),
                this.matched += e[0],
                t = this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]),
                this.done && this._input && (this.done = !1),
                t || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                })
            },
            lex: function() {
                var t = this.next();
                return void 0 !== t ? t : this.lex()
            },
            begin: function(t) {
                this.conditionStack.push(t)
            },
            popState: function() {
                return this.conditionStack.pop()
            },
            _currentRules: function() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
            },
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2]
            },
            pushState: function(t) {
                this.begin(t)
            },
            options: {},
            performAction: function(t, i, e, n) {
                function s(t, e) {
                    return i.yytext = i.yytext.substr(t, i.yyleng - e)
                }
                switch (e) {
                case 0:
                    if ("\\\\" === i.yytext.slice(-2) ? (s(0, 1),
                    this.begin("mu")) : "\\" === i.yytext.slice(-1) ? (s(0, 1),
                    this.begin("emu")) : this.begin("mu"),
                    i.yytext)
                        return 14;
                    break;
                case 1:
                    return 14;
                case 2:
                    return this.popState(),
                    14;
                case 3:
                    return s(0, 4),
                    this.popState(),
                    15;
                case 4:
                    return 35;
                case 5:
                    return 36;
                case 6:
                    return 25;
                case 7:
                    return 16;
                case 8:
                    return 20;
                case 9:
                case 10:
                    return 19;
                case 11:
                    return 23;
                case 12:
                    return 22;
                case 13:
                    this.popState(),
                    this.begin("com");
                    break;
                case 14:
                    return s(3, 5),
                    this.popState(),
                    15;
                case 15:
                    return 22;
                case 16:
                    return 41;
                case 17:
                case 18:
                    return 40;
                case 19:
                    return 44;
                case 20:
                    break;
                case 21:
                    return this.popState(),
                    24;
                case 22:
                    return this.popState(),
                    18;
                case 23:
                    return i.yytext = s(1, 2).replace(/\\"/g, '"'),
                    32;
                case 24:
                    return i.yytext = s(1, 2).replace(/\\'/g, "'"),
                    32;
                case 25:
                    return 42;
                case 26:
                case 27:
                    return 34;
                case 28:
                    return 33;
                case 29:
                    return 40;
                case 30:
                    return i.yytext = s(1, 2),
                    40;
                case 31:
                    return "INVALID";
                case 32:
                    return 5
                }
            },
            rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
            conditions: {
                mu: {
                    rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                    inclusive: !(t = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            statements: 4,
                            EOF: 5,
                            program: 6,
                            simpleInverse: 7,
                            statement: 8,
                            openInverse: 9,
                            closeBlock: 10,
                            openBlock: 11,
                            mustache: 12,
                            partial: 13,
                            CONTENT: 14,
                            COMMENT: 15,
                            OPEN_BLOCK: 16,
                            sexpr: 17,
                            CLOSE: 18,
                            OPEN_INVERSE: 19,
                            OPEN_ENDBLOCK: 20,
                            path: 21,
                            OPEN: 22,
                            OPEN_UNESCAPED: 23,
                            CLOSE_UNESCAPED: 24,
                            OPEN_PARTIAL: 25,
                            partialName: 26,
                            partial_option0: 27,
                            sexpr_repetition0: 28,
                            sexpr_option0: 29,
                            dataName: 30,
                            param: 31,
                            STRING: 32,
                            INTEGER: 33,
                            BOOLEAN: 34,
                            OPEN_SEXPR: 35,
                            CLOSE_SEXPR: 36,
                            hash: 37,
                            hash_repetition_plus0: 38,
                            hashSegment: 39,
                            ID: 40,
                            EQUALS: 41,
                            DATA: 42,
                            pathSegments: 43,
                            SEP: 44,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "CONTENT",
                            15: "COMMENT",
                            16: "OPEN_BLOCK",
                            18: "CLOSE",
                            19: "OPEN_INVERSE",
                            20: "OPEN_ENDBLOCK",
                            22: "OPEN",
                            23: "OPEN_UNESCAPED",
                            24: "CLOSE_UNESCAPED",
                            25: "OPEN_PARTIAL",
                            32: "STRING",
                            33: "INTEGER",
                            34: "BOOLEAN",
                            35: "OPEN_SEXPR",
                            36: "CLOSE_SEXPR",
                            40: "ID",
                            41: "EQUALS",
                            42: "DATA",
                            44: "SEP"
                        },
                        productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
                        performAction: function(t, e, i, n, s, r, o) {
                            var a = r.length - 1;
                            switch (s) {
                            case 1:
                                return new n.ProgramNode(r[a - 1],this._$);
                            case 2:
                                return new n.ProgramNode([],this._$);
                            case 3:
                                this.$ = new n.ProgramNode([],r[a - 1],r[a],this._$);
                                break;
                            case 4:
                                this.$ = new n.ProgramNode(r[a - 2],r[a - 1],r[a],this._$);
                                break;
                            case 5:
                                this.$ = new n.ProgramNode(r[a - 1],r[a],[],this._$);
                                break;
                            case 6:
                                this.$ = new n.ProgramNode(r[a],this._$);
                                break;
                            case 7:
                            case 8:
                                this.$ = new n.ProgramNode([],this._$);
                                break;
                            case 9:
                                this.$ = [r[a]];
                                break;
                            case 10:
                                r[a - 1].push(r[a]),
                                this.$ = r[a - 1];
                                break;
                            case 11:
                                this.$ = new n.BlockNode(r[a - 2],r[a - 1].inverse,r[a - 1],r[a],this._$);
                                break;
                            case 12:
                                this.$ = new n.BlockNode(r[a - 2],r[a - 1],r[a - 1].inverse,r[a],this._$);
                                break;
                            case 13:
                            case 14:
                                this.$ = r[a];
                                break;
                            case 15:
                                this.$ = new n.ContentNode(r[a],this._$);
                                break;
                            case 16:
                                this.$ = new n.CommentNode(r[a],this._$);
                                break;
                            case 17:
                            case 18:
                                this.$ = new n.MustacheNode(r[a - 1],null,r[a - 2],l(r[a - 2], r[a]),this._$);
                                break;
                            case 19:
                                this.$ = {
                                    path: r[a - 1],
                                    strip: l(r[a - 2], r[a])
                                };
                                break;
                            case 20:
                            case 21:
                                this.$ = new n.MustacheNode(r[a - 1],null,r[a - 2],l(r[a - 2], r[a]),this._$);
                                break;
                            case 22:
                                this.$ = new n.PartialNode(r[a - 2],r[a - 1],l(r[a - 3], r[a]),this._$);
                                break;
                            case 23:
                                this.$ = l(r[a - 1], r[a]);
                                break;
                            case 24:
                                this.$ = new n.SexprNode([r[a - 2]].concat(r[a - 1]),r[a],this._$);
                                break;
                            case 25:
                                this.$ = new n.SexprNode([r[a]],null,this._$);
                                break;
                            case 26:
                                this.$ = r[a];
                                break;
                            case 27:
                                this.$ = new n.StringNode(r[a],this._$);
                                break;
                            case 28:
                                this.$ = new n.IntegerNode(r[a],this._$);
                                break;
                            case 29:
                                this.$ = new n.BooleanNode(r[a],this._$);
                                break;
                            case 30:
                                this.$ = r[a];
                                break;
                            case 31:
                                r[a - 1].isHelper = !0,
                                this.$ = r[a - 1];
                                break;
                            case 32:
                                this.$ = new n.HashNode(r[a],this._$);
                                break;
                            case 33:
                                this.$ = [r[a - 2], r[a]];
                                break;
                            case 34:
                                this.$ = new n.PartialNameNode(r[a],this._$);
                                break;
                            case 35:
                                this.$ = new n.PartialNameNode(new n.StringNode(r[a],this._$),this._$);
                                break;
                            case 36:
                                this.$ = new n.PartialNameNode(new n.IntegerNode(r[a],this._$));
                                break;
                            case 37:
                                this.$ = new n.DataNode(r[a],this._$);
                                break;
                            case 38:
                                this.$ = new n.IdNode(r[a],this._$);
                                break;
                            case 39:
                                r[a - 2].push({
                                    part: r[a],
                                    separator: r[a - 1]
                                }),
                                this.$ = r[a - 2];
                                break;
                            case 40:
                                this.$ = [{
                                    part: r[a]
                                }];
                                break;
                            case 43:
                                this.$ = [];
                                break;
                            case 44:
                                r[a - 1].push(r[a]);
                                break;
                            case 47:
                                this.$ = [r[a]];
                                break;
                            case 48:
                                r[a - 1].push(r[a])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [1, 3],
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 16],
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [2, 2]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            16: [2, 9],
                            19: [2, 9],
                            20: [2, 9],
                            22: [2, 9],
                            23: [2, 9],
                            25: [2, 9]
                        }, {
                            4: 20,
                            6: 18,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 20,
                            6: 22,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            5: [2, 13],
                            14: [2, 13],
                            15: [2, 13],
                            16: [2, 13],
                            19: [2, 13],
                            20: [2, 13],
                            22: [2, 13],
                            23: [2, 13],
                            25: [2, 13]
                        }, {
                            5: [2, 14],
                            14: [2, 14],
                            15: [2, 14],
                            16: [2, 14],
                            19: [2, 14],
                            20: [2, 14],
                            22: [2, 14],
                            23: [2, 14],
                            25: [2, 14]
                        }, {
                            5: [2, 15],
                            14: [2, 15],
                            15: [2, 15],
                            16: [2, 15],
                            19: [2, 15],
                            20: [2, 15],
                            22: [2, 15],
                            23: [2, 15],
                            25: [2, 15]
                        }, {
                            5: [2, 16],
                            14: [2, 16],
                            15: [2, 16],
                            16: [2, 16],
                            19: [2, 16],
                            20: [2, 16],
                            22: [2, 16],
                            23: [2, 16],
                            25: [2, 16]
                        }, {
                            17: 23,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 29,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 30,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 31,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            21: 33,
                            26: 32,
                            32: [1, 34],
                            33: [1, 35],
                            40: [1, 28],
                            43: 26
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            16: [2, 10],
                            19: [2, 10],
                            20: [2, 10],
                            22: [2, 10],
                            23: [2, 10],
                            25: [2, 10]
                        }, {
                            10: 36,
                            20: [1, 37]
                        }, {
                            4: 38,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 7],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            7: 39,
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 6],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            17: 23,
                            18: [1, 40],
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            10: 41,
                            20: [1, 37]
                        }, {
                            18: [1, 42]
                        }, {
                            18: [2, 43],
                            24: [2, 43],
                            28: 43,
                            32: [2, 43],
                            33: [2, 43],
                            34: [2, 43],
                            35: [2, 43],
                            36: [2, 43],
                            40: [2, 43],
                            42: [2, 43]
                        }, {
                            18: [2, 25],
                            24: [2, 25],
                            36: [2, 25]
                        }, {
                            18: [2, 38],
                            24: [2, 38],
                            32: [2, 38],
                            33: [2, 38],
                            34: [2, 38],
                            35: [2, 38],
                            36: [2, 38],
                            40: [2, 38],
                            42: [2, 38],
                            44: [1, 44]
                        }, {
                            21: 45,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [1, 46]
                        }, {
                            18: [1, 47]
                        }, {
                            24: [1, 48]
                        }, {
                            18: [2, 41],
                            21: 50,
                            27: 49,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 34],
                            40: [2, 34]
                        }, {
                            18: [2, 35],
                            40: [2, 35]
                        }, {
                            18: [2, 36],
                            40: [2, 36]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            16: [2, 11],
                            19: [2, 11],
                            20: [2, 11],
                            22: [2, 11],
                            23: [2, 11],
                            25: [2, 11]
                        }, {
                            21: 51,
                            40: [1, 28],
                            43: 26
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 3],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 52,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 5],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            14: [2, 23],
                            15: [2, 23],
                            16: [2, 23],
                            19: [2, 23],
                            20: [2, 23],
                            22: [2, 23],
                            23: [2, 23],
                            25: [2, 23]
                        }, {
                            5: [2, 12],
                            14: [2, 12],
                            15: [2, 12],
                            16: [2, 12],
                            19: [2, 12],
                            20: [2, 12],
                            22: [2, 12],
                            23: [2, 12],
                            25: [2, 12]
                        }, {
                            14: [2, 18],
                            15: [2, 18],
                            16: [2, 18],
                            19: [2, 18],
                            20: [2, 18],
                            22: [2, 18],
                            23: [2, 18],
                            25: [2, 18]
                        }, {
                            18: [2, 45],
                            21: 56,
                            24: [2, 45],
                            29: 53,
                            30: 60,
                            31: 54,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            36: [2, 45],
                            37: 55,
                            38: 62,
                            39: 63,
                            40: [1, 64],
                            42: [1, 27],
                            43: 26
                        }, {
                            40: [1, 65]
                        }, {
                            18: [2, 37],
                            24: [2, 37],
                            32: [2, 37],
                            33: [2, 37],
                            34: [2, 37],
                            35: [2, 37],
                            36: [2, 37],
                            40: [2, 37],
                            42: [2, 37]
                        }, {
                            14: [2, 17],
                            15: [2, 17],
                            16: [2, 17],
                            19: [2, 17],
                            20: [2, 17],
                            22: [2, 17],
                            23: [2, 17],
                            25: [2, 17]
                        }, {
                            5: [2, 20],
                            14: [2, 20],
                            15: [2, 20],
                            16: [2, 20],
                            19: [2, 20],
                            20: [2, 20],
                            22: [2, 20],
                            23: [2, 20],
                            25: [2, 20]
                        }, {
                            5: [2, 21],
                            14: [2, 21],
                            15: [2, 21],
                            16: [2, 21],
                            19: [2, 21],
                            20: [2, 21],
                            22: [2, 21],
                            23: [2, 21],
                            25: [2, 21]
                        }, {
                            18: [1, 66]
                        }, {
                            18: [2, 42]
                        }, {
                            18: [1, 67]
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 4],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            18: [2, 24],
                            24: [2, 24],
                            36: [2, 24]
                        }, {
                            18: [2, 44],
                            24: [2, 44],
                            32: [2, 44],
                            33: [2, 44],
                            34: [2, 44],
                            35: [2, 44],
                            36: [2, 44],
                            40: [2, 44],
                            42: [2, 44]
                        }, {
                            18: [2, 46],
                            24: [2, 46],
                            36: [2, 46]
                        }, {
                            18: [2, 26],
                            24: [2, 26],
                            32: [2, 26],
                            33: [2, 26],
                            34: [2, 26],
                            35: [2, 26],
                            36: [2, 26],
                            40: [2, 26],
                            42: [2, 26]
                        }, {
                            18: [2, 27],
                            24: [2, 27],
                            32: [2, 27],
                            33: [2, 27],
                            34: [2, 27],
                            35: [2, 27],
                            36: [2, 27],
                            40: [2, 27],
                            42: [2, 27]
                        }, {
                            18: [2, 28],
                            24: [2, 28],
                            32: [2, 28],
                            33: [2, 28],
                            34: [2, 28],
                            35: [2, 28],
                            36: [2, 28],
                            40: [2, 28],
                            42: [2, 28]
                        }, {
                            18: [2, 29],
                            24: [2, 29],
                            32: [2, 29],
                            33: [2, 29],
                            34: [2, 29],
                            35: [2, 29],
                            36: [2, 29],
                            40: [2, 29],
                            42: [2, 29]
                        }, {
                            18: [2, 30],
                            24: [2, 30],
                            32: [2, 30],
                            33: [2, 30],
                            34: [2, 30],
                            35: [2, 30],
                            36: [2, 30],
                            40: [2, 30],
                            42: [2, 30]
                        }, {
                            17: 68,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 32],
                            24: [2, 32],
                            36: [2, 32],
                            39: 69,
                            40: [1, 70]
                        }, {
                            18: [2, 47],
                            24: [2, 47],
                            36: [2, 47],
                            40: [2, 47]
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            41: [1, 71],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [2, 39],
                            24: [2, 39],
                            32: [2, 39],
                            33: [2, 39],
                            34: [2, 39],
                            35: [2, 39],
                            36: [2, 39],
                            40: [2, 39],
                            42: [2, 39],
                            44: [2, 39]
                        }, {
                            5: [2, 22],
                            14: [2, 22],
                            15: [2, 22],
                            16: [2, 22],
                            19: [2, 22],
                            20: [2, 22],
                            22: [2, 22],
                            23: [2, 22],
                            25: [2, 22]
                        }, {
                            5: [2, 19],
                            14: [2, 19],
                            15: [2, 19],
                            16: [2, 19],
                            19: [2, 19],
                            20: [2, 19],
                            22: [2, 19],
                            23: [2, 19],
                            25: [2, 19]
                        }, {
                            36: [1, 72]
                        }, {
                            18: [2, 48],
                            24: [2, 48],
                            36: [2, 48],
                            40: [2, 48]
                        }, {
                            41: [1, 71]
                        }, {
                            21: 56,
                            30: 60,
                            31: 73,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 31],
                            24: [2, 31],
                            32: [2, 31],
                            33: [2, 31],
                            34: [2, 31],
                            35: [2, 31],
                            36: [2, 31],
                            40: [2, 31],
                            42: [2, 31]
                        }, {
                            18: [2, 33],
                            24: [2, 33],
                            36: [2, 33],
                            40: [2, 33]
                        }],
                        defaultActions: {
                            3: [2, 2],
                            16: [2, 1],
                            50: [2, 42]
                        },
                        parseError: function(t, e) {
                            throw new Error(t)
                        },
                        parse: function(t) {
                            var e = this
                              , i = [0]
                              , n = [null]
                              , s = []
                              , r = this.table
                              , o = ""
                              , a = 0
                              , l = 0
                              , c = 0;
                            this.lexer.setInput(t),
                            this.lexer.yy = this.yy,
                            this.yy.lexer = this.lexer,
                            void 0 === (this.yy.parser = this).lexer.yylloc && (this.lexer.yylloc = {});
                            var h = this.lexer.yylloc;
                            s.push(h);
                            var u = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var d, p, f, m, g, v, y, _, b, x, w = {}; ; ) {
                                if (f = i[i.length - 1],
                                void 0 === (m = this.defaultActions[f] ? this.defaultActions[f] : (null == d && (x = void 0,
                                "number" != typeof (x = e.lexer.lex() || 1) && (x = e.symbols_[x] || x),
                                d = x),
                                r[f] && r[f][d])) || !m.length || !m[0]) {
                                    var T = "";
                                    if (!c) {
                                        for (v in b = [],
                                        r[f])
                                            this.terminals_[v] && 2 < v && b.push("'" + this.terminals_[v] + "'");
                                        T = this.lexer.showPosition ? "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + b.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (a + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"),
                                        this.parseError(T, {
                                            text: this.lexer.match,
                                            token: this.terminals_[d] || d,
                                            line: this.lexer.yylineno,
                                            loc: h,
                                            expected: b
                                        })
                                    }
                                }
                                if (m[0]instanceof Array && 1 < m.length)
                                    throw new Error("Parse Error: multiple actions possible at state: " + f + ", token: " + d);
                                switch (m[0]) {
                                case 1:
                                    i.push(d),
                                    n.push(this.lexer.yytext),
                                    s.push(this.lexer.yylloc),
                                    i.push(m[1]),
                                    d = null,
                                    p ? (d = p,
                                    p = null) : (l = this.lexer.yyleng,
                                    o = this.lexer.yytext,
                                    a = this.lexer.yylineno,
                                    h = this.lexer.yylloc,
                                    0 < c && c--);
                                    break;
                                case 2:
                                    if (y = this.productions_[m[1]][1],
                                    w.$ = n[n.length - y],
                                    w._$ = {
                                        first_line: s[s.length - (y || 1)].first_line,
                                        last_line: s[s.length - 1].last_line,
                                        first_column: s[s.length - (y || 1)].first_column,
                                        last_column: s[s.length - 1].last_column
                                    },
                                    u && (w._$.range = [s[s.length - (y || 1)].range[0], s[s.length - 1].range[1]]),
                                    void 0 !== (g = this.performAction.call(w, o, l, a, this.yy, m[1], n, s)))
                                        return g;
                                    y && (i = i.slice(0, -1 * y * 2),
                                    n = n.slice(0, -1 * y),
                                    s = s.slice(0, -1 * y)),
                                    i.push(this.productions_[m[1]][0]),
                                    n.push(w.$),
                                    s.push(w._$),
                                    _ = r[i[i.length - 2]][i[i.length - 1]],
                                    i.push(_);
                                    break;
                                case 3:
                                    return !0
                                }
                            }
                            return !0
                        }
                    })
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                com: {
                    rules: [3],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 32],
                    inclusive: !0
                }
            }
        },
        t.lexer = e,
        new ((i.prototype = t).Parser = i)
    }()
      , p = function() {
        "use strict";
        var t = {}
          , e = n
          , i = u;
        return t.parser = e,
        t.parse = function(t) {
            return t.constructor === i.ProgramNode ? t : (e.yy = i,
            e.parse(t))
        }
        ,
        t
    }()
      , f = function() {
        "use strict";
        function t() {}
        var e = {}
          , c = d;
        return (e.Compiler = t).prototype = {
            compiler: t,
            disassemble: function() {
                for (var t, e, i, n = this.opcodes, s = [], r = 0, o = n.length; r < o; r++)
                    if ("DECLARE" === (t = n[r]).opcode)
                        s.push("DECLARE " + t.name + "=" + t.value);
                    else {
                        e = [];
                        for (var a = 0; a < t.args.length; a++)
                            "string" == typeof (i = t.args[a]) && (i = '"' + i.replace("\n", "\\n") + '"'),
                            e.push(i);
                        s.push(t.opcode + " " + e.join(" "))
                    }
                return s.join("\n")
            },
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e)
                    return !1;
                for (var i = 0; i < e; i++) {
                    var n = this.opcodes[i]
                      , s = t.opcodes[i];
                    if (n.opcode !== s.opcode || n.args.length !== s.args.length)
                        return !1;
                    for (var r = 0; r < n.args.length; r++)
                        if (n.args[r] !== s.args[r])
                            return !1
                }
                if (e = this.children.length,
                t.children.length !== e)
                    return !1;
                for (i = 0; i < e; i++)
                    if (!this.children[i].equals(t.children[i]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(t, e) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = e;
                var i = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    if: !0,
                    unless: !0,
                    with: !0,
                    log: !0
                },
                i)
                    for (var n in i)
                        this.options.knownHelpers[n] = i[n];
                return this.accept(t)
            },
            accept: function(t) {
                var e, i = t.strip || {};
                return i.left && this.opcode("strip"),
                e = this[t.type](t),
                i.right && this.opcode("strip"),
                e
            },
            program: function(t) {
                for (var e = t.statements, i = 0, n = e.length; i < n; i++)
                    this.accept(e[i]);
                return this.isSimple = 1 === n,
                this.depths.list = this.depths.list.sort(function(t, e) {
                    return t - e
                }),
                this
            },
            compileProgram: function(t) {
                var e, i = (new this.compiler).compile(t, this.options), n = this.guid++;
                this.usePartial = this.usePartial || i.usePartial;
                for (var s = 0, r = (this.children[n] = i).depths.list.length; s < r; s++)
                    (e = i.depths.list[s]) < 2 || this.addDepth(e - 1);
                return n
            },
            block: function(t) {
                var e = t.mustache
                  , i = t.program
                  , n = t.inverse
                  , i = i && this.compileProgram(i)
                  , n = n && this.compileProgram(n)
                  , s = e.sexpr
                  , r = this.classifySexpr(s);
                "helper" === r ? this.helperSexpr(s, i, n) : "simple" === r ? (this.simpleSexpr(s),
                this.opcode("pushProgram", i),
                this.opcode("pushProgram", n),
                this.opcode("emptyHash"),
                this.opcode("blockValue")) : (this.ambiguousSexpr(s, i, n),
                this.opcode("pushProgram", i),
                this.opcode("pushProgram", n),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(t) {
                var e, i, n = t.pairs;
                this.opcode("pushHash");
                for (var s = 0, r = n.length; s < r; s++)
                    i = (e = n[s])[1],
                    this.options.stringParams ? (i.depth && this.addDepth(i.depth),
                    this.opcode("getContext", i.depth || 0),
                    this.opcode("pushStringParam", i.stringModeValue, i.type),
                    "sexpr" === i.type && this.sexpr(i)) : this.accept(i),
                    this.opcode("assignToHash", e[0]);
                this.opcode("popHash")
            },
            partial: function(t) {
                var e = t.partialName;
                this.usePartial = !0,
                t.context ? this.ID(t.context) : this.opcode("push", "depth0"),
                this.opcode("invokePartial", e.name),
                this.opcode("append")
            },
            content: function(t) {
                this.opcode("appendContent", t.string)
            },
            mustache: function(t) {
                this.sexpr(t.sexpr),
                t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ambiguousSexpr: function(t, e, i) {
                var n = t.id
                  , s = n.parts[0]
                  , r = null != e || null != i;
                this.opcode("getContext", n.depth),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                this.opcode("invokeAmbiguous", s, r)
            },
            simpleSexpr: function(t) {
                var e = t.id;
                "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth),
                this.opcode("getContext", e.depth),
                this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, i) {
                var n = this.setupFullMustacheParams(t, e, i)
                  , s = t.id.parts[0];
                if (this.options.knownHelpers[s])
                    this.opcode("invokeKnownHelper", n.length, s);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new c("You specified knownHelpersOnly, but used the unknown helper " + s,t);
                    this.opcode("invokeHelper", n.length, s, t.isRoot)
                }
            },
            sexpr: function(t) {
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ID: function(t) {
                this.addDepth(t.depth),
                this.opcode("getContext", t.depth),
                t.parts[0] ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
                for (var e = 1, i = t.parts.length; e < i; e++)
                    this.opcode("lookup", t.parts[e])
            },
            DATA: function(t) {
                if (this.options.data = !0,
                t.id.isScoped || t.id.depth)
                    throw new c("Scoped data references are not supported: " + t.original,t);
                this.opcode("lookupData");
                for (var e = t.id.parts, i = 0, n = e.length; i < n; i++)
                    this.opcode("lookup", e[i])
            },
            STRING: function(t) {
                this.opcode("pushString", t.string)
            },
            INTEGER: function(t) {
                this.opcode("pushLiteral", t.integer)
            },
            BOOLEAN: function(t) {
                this.opcode("pushLiteral", t.bool)
            },
            comment: function() {},
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: [].slice.call(arguments, 1)
                })
            },
            declare: function(t, e) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: t,
                    value: e
                })
            },
            addDepth: function(t) {
                0 !== t && (this.depths[t] || (this.depths[t] = !0,
                this.depths.list.push(t)))
            },
            classifySexpr: function(t) {
                var e, i = t.isHelper, n = t.eligibleHelper, s = this.options;
                return n && !i && (e = t.id.parts[0],
                s.knownHelpers[e] ? i = !0 : s.knownHelpersOnly && (n = !1)),
                i ? "helper" : n ? "ambiguous" : "simple"
            },
            pushParams: function(t) {
                for (var e, i = t.length; i--; )
                    e = t[i],
                    this.options.stringParams ? (e.depth && this.addDepth(e.depth),
                    this.opcode("getContext", e.depth || 0),
                    this.opcode("pushStringParam", e.stringModeValue, e.type),
                    "sexpr" === e.type && this.sexpr(e)) : this[e.type](e)
            },
            setupFullMustacheParams: function(t, e, i) {
                var n = t.params;
                return this.pushParams(n),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
                n
            }
        },
        e.precompile = function(t, e, i) {
            if (null == t || "string" != typeof t && t.constructor !== i.AST.ProgramNode)
                throw new c("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
            "data"in (e = e || {}) || (e.data = !0);
            var n = i.parse(t)
              , s = (new i.Compiler).compile(n, e);
            return (new i.JavaScriptCompiler).compile(s, e)
        }
        ,
        e.compile = function(r, o, a) {
            if (null == r || "string" != typeof r && r.constructor !== a.AST.ProgramNode)
                throw new c("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + r);
            var l;
            return "data"in (o = o || {}) || (o.data = !0),
            function(t, e) {
                var i, n, s;
                return l || (i = a.parse(r),
                n = (new a.Compiler).compile(i, o),
                s = (new a.JavaScriptCompiler).compile(n, o, void 0, !0),
                l = a.template(s)),
                l.call(this, t, e)
            }
        }
        ,
        e
    }()
      , m = function() {
        "use strict";
        function c(t) {
            this.value = t
        }
        function s() {}
        var t = h.COMPILER_REVISION
          , e = h.REVISION_CHANGES
          , l = h.log
          , a = d;
        s.prototype = {
            nameLookup: function(t, e) {
                var i, n;
                return 0 === t.indexOf("depth") && (i = !0),
                n = /^[0-9]+$/.test(e) ? t + "[" + e + "]" : s.isValidJavaScriptVariableName(e) ? t + "." + e : t + "['" + e + "']",
                i ? "(" + t + " && " + n + ")" : n
            },
            compilerInfo: function() {
                return "this.compilerInfo = [" + t + ",'" + e[t] + "'];\n"
            },
            appendToBuffer: function(t) {
                return this.environment.isSimple ? "return " + t + ";" : {
                    appendToBuffer: !0,
                    content: t,
                    toString: function() {
                        return "buffer += " + t + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(t, e, i, n) {
                this.environment = t,
                this.options = e || {},
                l("debug", this.environment.disassemble() + "\n\n"),
                this.name = this.environment.name,
                this.isChild = !!i,
                this.context = i || {
                    programs: [],
                    environments: [],
                    aliases: {}
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(t, e);
                var s, r = t.opcodes;
                this.i = 0;
                for (var o = r.length; this.i < o; this.i++)
                    "DECLARE" === (s = r[this.i]).opcode ? this[s.name] = s.value : this[s.opcode].apply(this, s.args),
                    s.opcode !== this.stripNext && (this.stripNext = !1);
                if (this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new a("Compile completed with content left on stack");
                return this.createFunctionContext(n)
            },
            preamble: function() {
                var t, e, i = [];
                this.isChild ? i.push("") : (e = "helpers = this.merge(helpers, " + (t = this.namespace) + ".helpers);",
                this.environment.usePartial && (e = e + " partials = this.merge(partials, " + t + ".partials);"),
                this.options.data && (e += " data = data || {};"),
                i.push(e)),
                this.environment.isSimple ? i.push("") : i.push(", buffer = " + this.initializeBuffer()),
                this.lastContext = 0,
                this.source = i
            },
            createFunctionContext: function(t) {
                var e = this.stackVars.concat(this.registers.list);
                if (0 < e.length && (this.source[1] = this.source[1] + ", " + e.join(", ")),
                !this.isChild)
                    for (var i in this.context.aliases)
                        this.context.aliases.hasOwnProperty(i) && (this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i]);
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
                this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
                this.environment.isSimple || this.pushSource("return buffer;");
                for (var n = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], s = 0, r = this.environment.depths.list.length; s < r; s++)
                    n.push("depth" + this.environment.depths.list[s]);
                var o = this.mergeSource();
                if (this.isChild || (o = this.compilerInfo() + o),
                t)
                    return n.push(o),
                    Function.apply(this, n);
                var a = "function " + (this.name || "") + "(" + n.join(",") + ") {\n  " + o + "}";
                return l("debug", a + "\n\n"),
                a
            },
            mergeSource: function() {
                for (var t, e = "", i = 0, n = this.source.length; i < n; i++) {
                    var s = this.source[i];
                    s.appendToBuffer ? t = t ? t + "\n    + " + s.content : s.content : (t && (e += "buffer += " + t + ";\n  ",
                    t = void 0),
                    e += s + "\n  ")
                }
                return e
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = ["depth0"];
                this.setupParams(0, e),
                this.replaceStack(function(t) {
                    return e.splice(1, 0, t),
                    "blockHelperMissing.call(" + e.join(", ") + ")"
                })
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var t = ["depth0"];
                this.setupParams(0, t);
                var e = this.topStack();
                t.splice(1, 0, e),
                this.pushSource("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
            },
            appendContent: function(t) {
                this.pendingContent && (t = this.pendingContent + t),
                this.stripNext && (t = t.replace(/^\s+/, "")),
                this.pendingContent = t
            },
            strip: function() {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")),
                this.stripNext = "strip"
            },
            append: function() {
                this.flushInline();
                var t = this.popStack();
                this.pushSource("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(t) {
                this.lastContext !== t && (this.lastContext = t)
            },
            lookupOnContext: function(t) {
                this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext)
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"',
                this.replaceStack(function(t) {
                    return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
                })
            },
            lookup: function(e) {
                this.replaceStack(function(t) {
                    return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
                })
            },
            lookupData: function() {
                this.pushStackLiteral("data")
            },
            pushStringParam: function(t, e) {
                this.pushStackLiteral("depth" + this.lastContext),
                this.pushString(e),
                "sexpr" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.options.stringParams && (this.push("{}"),
                this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                }
            },
            popHash: function() {
                var t = this.hash;
                this.hash = this.hashes.pop(),
                this.options.stringParams && (this.push("{" + t.contexts.join(",") + "}"),
                this.push("{" + t.types.join(",") + "}")),
                this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
            },
            pushString: function(t) {
                this.pushStackLiteral(this.quotedString(t))
            },
            push: function(t) {
                return this.inlineStack.push(t),
                t
            },
            pushLiteral: function(t) {
                this.pushStackLiteral(t)
            },
            pushProgram: function(t) {
                null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
            },
            invokeHelper: function(t, e, i) {
                this.context.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var n = this.lastHelper = this.setupHelper(t, e, !0)
                  , s = this.nameLookup("depth" + this.lastContext, e, "context")
                  , r = "helper = " + n.name + " || " + s;
                n.paramsInit && (r += "," + n.paramsInit),
                this.push("(" + r + ",helper ? helper.call(" + n.callParams + ") : helperMissing.call(" + n.helperMissingParams + "))"),
                i || this.flushInline()
            },
            invokeKnownHelper: function(t, e) {
                var i = this.setupHelper(t, e);
                this.push(i.name + ".call(" + i.callParams + ")")
            },
            invokeAmbiguous: function(t, e) {
                this.context.aliases.functionType = '"function"',
                this.useRegister("helper"),
                this.emptyHash();
                var i = this.setupHelper(0, t, e)
                  , n = this.lastHelper = this.nameLookup("helpers", t, "helper")
                  , s = this.nameLookup("depth" + this.lastContext, t, "context")
                  , r = this.nextStack();
                i.paramsInit && this.pushSource(i.paramsInit),
                this.pushSource("if (helper = " + n + ") { " + r + " = helper.call(" + i.callParams + "); }"),
                this.pushSource("else { helper = " + s + "; " + r + " = typeof helper === functionType ? helper.call(" + i.callParams + ") : helper; }")
            },
            invokePartial: function(t) {
                var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials"];
                this.options.data && e.push("data"),
                this.context.aliases.self = "this",
                this.push("self.invokePartial(" + e.join(", ") + ")")
            },
            assignToHash: function(t) {
                var e, i, n = this.popStack();
                this.options.stringParams && (i = this.popStack(),
                e = this.popStack());
                var s = this.hash;
                e && s.contexts.push("'" + t + "': " + e),
                i && s.types.push("'" + t + "': " + i),
                s.values.push("'" + t + "': (" + n + ")")
            },
            compiler: s,
            compileChildren: function(t, e) {
                for (var i, n, s = t.children, r = 0, o = s.length; r < o; r++) {
                    i = s[r],
                    n = new this.compiler;
                    var a = this.matchExistingProgram(i);
                    null == a ? (this.context.programs.push(""),
                    a = this.context.programs.length,
                    i.index = a,
                    i.name = "program" + a,
                    this.context.programs[a] = n.compile(i, e, this.context),
                    this.context.environments[a] = i) : (i.index = a,
                    i.name = "program" + a)
                }
            },
            matchExistingProgram: function(t) {
                for (var e = 0, i = this.context.environments.length; e < i; e++) {
                    var n = this.context.environments[e];
                    if (n && n.equals(t))
                        return e
                }
            },
            programExpression: function(t) {
                if (this.context.aliases.self = "this",
                null == t)
                    return "self.noop";
                for (var e, i = this.environment.children[t], n = i.depths.list, s = [i.index, i.name, "data"], r = 0, o = n.length; r < o; r++)
                    1 === (e = n[r]) ? s.push("depth0") : s.push("depth" + (e - 1));
                return (0 === n.length ? "self.program(" : "self.programWithDepth(") + s.join(", ") + ")"
            },
            register: function(t, e) {
                this.useRegister(t),
                this.pushSource(t + " = " + e + ";")
            },
            useRegister: function(t) {
                this.registers[t] || (this.registers[t] = !0,
                this.registers.list.push(t))
            },
            pushStackLiteral: function(t) {
                return this.push(new c(t))
            },
            pushSource: function(t) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
                this.pendingContent = void 0),
                t && this.source.push(t)
            },
            pushStack: function(t) {
                this.flushInline();
                var e = this.incrStack();
                return t && this.pushSource(e + " = " + t + ";"),
                this.compileStack.push(e),
                e
            },
            replaceStack: function(t) {
                var e, i, n, s, r, o = "", a = this.isInline();
                a ? (n = this.popStack(!0))instanceof c ? (r = n.value,
                i = !0) : (s = (e = !this.stackSlot) ? this.incrStack() : this.topStackName(),
                o = "(" + this.push(s) + " = " + n + "),",
                r = this.topStack()) : r = this.topStack();
                var l = t.call(this, r);
                return a ? (i || this.popStack(),
                e && this.stackSlot--,
                this.push("(" + o + l + ")")) : (/^stack/.test(r) || (r = this.nextStack()),
                this.pushSource(r + " = (" + o + l + ");")),
                r
            },
            nextStack: function() {
                return this.pushStack()
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var t = this.inlineStack;
                if (t.length) {
                    this.inlineStack = [];
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t[e];
                        n instanceof c ? this.compileStack.push(n) : this.pushStack(n)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(t) {
                var e = this.isInline()
                  , i = (e ? this.inlineStack : this.compileStack).pop();
                if (!t && i instanceof c)
                    return i.value;
                if (!e) {
                    if (!this.stackSlot)
                        throw new a("Invalid stack pop");
                    this.stackSlot--
                }
                return i
            },
            topStack: function(t) {
                var e = this.isInline() ? this.inlineStack : this.compileStack
                  , i = e[e.length - 1];
                return !t && i instanceof c ? i.value : i
            },
            quotedString: function(t) {
                return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            setupHelper: function(t, e, i) {
                var n = [];
                return {
                    params: n,
                    paramsInit: this.setupParams(t, n, i),
                    name: this.nameLookup("helpers", e, "helper"),
                    callParams: ["depth0"].concat(n).join(", "),
                    helperMissingParams: i && ["depth0", this.quotedString(e)].concat(n).join(", ")
                }
            },
            setupOptions: function(t, e) {
                var i, n, s, r = [], o = [], a = [];
                r.push("hash:" + this.popStack()),
                this.options.stringParams && (r.push("hashTypes:" + this.popStack()),
                r.push("hashContexts:" + this.popStack())),
                n = this.popStack(),
                ((s = this.popStack()) || n) && (s || (this.context.aliases.self = "this",
                s = "self.noop"),
                n || (this.context.aliases.self = "this",
                n = "self.noop"),
                r.push("inverse:" + n),
                r.push("fn:" + s));
                for (var l = 0; l < t; l++)
                    i = this.popStack(),
                    e.push(i),
                    this.options.stringParams && (a.push(this.popStack()),
                    o.push(this.popStack()));
                return this.options.stringParams && (r.push("contexts:[" + o.join(",") + "]"),
                r.push("types:[" + a.join(",") + "]")),
                this.options.data && r.push("data:data"),
                r
            },
            setupParams: function(t, e, i) {
                var n = "{" + this.setupOptions(t, e).join(",") + "}";
                return i ? (this.useRegister("options"),
                e.push("options"),
                "options=" + n) : (e.push(n),
                "")
            }
        };
        for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), n = s.RESERVED_WORDS = {}, r = 0, o = i.length; r < o; r++)
            n[i[r]] = !0;
        return s.isValidJavaScriptVariableName = function(t) {
            return !(s.RESERVED_WORDS[t] || !/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t))
        }
        ,
        s
    }();
    return function() {
        "use strict";
        function t() {
            var i = h();
            return i.compile = function(t, e) {
                return a(t, e, i)
            }
            ,
            i.precompile = function(t, e) {
                return l(t, e, i)
            }
            ,
            i.AST = n,
            i.Compiler = o,
            i.JavaScriptCompiler = c,
            i.Parser = s,
            i.parse = r,
            i
        }
        var e = i
          , n = u
          , s = p.parser
          , r = p.parse
          , o = f.Compiler
          , a = f.compile
          , l = f.precompile
          , c = m
          , h = e.create;
        return (e = t()).create = t,
        e
    }()
}();
!function(r, o, u) {
    var f = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(t) {
        r.setTimeout(t, 1e3 / 60)
    }
      , m = function() {
        var n = {}
          , s = o.createElement("div").style
          , e = function() {
            for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++)
                if (t[e] + "ransform"in s)
                    return t[e].substr(0, t[e].length - 1);
            return !1
        }();
        function t(t) {
            return !1 !== e && ("" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1))
        }
        n.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        n.extend = function(t, e) {
            for (var i in e)
                t[i] = e[i]
        }
        ,
        n.addEvent = function(t, e, i, n) {
            t.addEventListener(e, i, !!n)
        }
        ,
        n.removeEvent = function(t, e, i, n) {
            t.removeEventListener(e, i, !!n)
        }
        ,
        n.prefixPointerEvent = function(t) {
            return r.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
        }
        ,
        n.momentum = function(t, e, i, n, s, r) {
            var o, a = t - e, l = u.abs(a) / i, c = l / (r = void 0 === r ? 6e-4 : r);
            return (o = t + l * l / (2 * r) * (a < 0 ? -1 : 1)) < n ? (o = s ? n - s / 2.5 * (l / 8) : n,
            c = (a = u.abs(o - t)) / l) : 0 < o && (o = s ? s / 2.5 * (l / 8) : 0,
            c = (a = u.abs(t) + o) / l),
            {
                destination: u.round(o),
                duration: c
            }
        }
        ;
        var i = t("transform");
        return n.extend(n, {
            hasTransform: !1 !== i,
            hasPerspective: t("perspective")in s,
            hasTouch: "ontouchstart"in r,
            hasPointer: r.PointerEvent || r.MSPointerEvent,
            hasTransition: t("transition")in s
        }),
        n.isBadAndroid = /Android /.test(r.navigator.appVersion) && !/Chrome\/\d/.test(r.navigator.appVersion),
        n.extend(n.style = {}, {
            transform: i,
            transitionTimingFunction: t("transitionTimingFunction"),
            transitionDuration: t("transitionDuration"),
            transitionDelay: t("transitionDelay"),
            transformOrigin: t("transformOrigin")
        }),
        n.hasClass = function(t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        }
        ,
        n.addClass = function(t, e) {
            var i;
            n.hasClass(t, e) || ((i = t.className.split(" ")).push(e),
            t.className = i.join(" "))
        }
        ,
        n.removeClass = function(t, e) {
            var i;
            n.hasClass(t, e) && (i = new RegExp("(^|\\s)" + e + "(\\s|$)","g"),
            t.className = t.className.replace(i, " "))
        }
        ,
        n.offset = function(t) {
            for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent; )
                e -= t.offsetLeft,
                i -= t.offsetTop;
            return {
                left: e,
                top: i
            }
        }
        ,
        n.preventDefaultException = function(t, e) {
            for (var i in e)
                if (e[i].test(t[i]))
                    return !0;
            return !1
        }
        ,
        n.extend(n.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        n.extend(n.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return u.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    return --t * t * (5 * t + 4) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    return 0 === t ? 0 : 1 == t ? 1 : .4 * u.pow(2, -10 * t) * u.sin((t - .055) * (2 * u.PI) / .22) + 1
                }
            }
        }),
        n.tap = function(t, e) {
            var i = o.createEvent("Event");
            i.initEvent(e, !0, !0),
            i.pageX = t.pageX,
            i.pageY = t.pageY,
            t.target.dispatchEvent(i)
        }
        ,
        n.click = function(t) {
            var e, i = t.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || ((e = o.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null),
            e._constructed = !0,
            i.dispatchEvent(e))
        }
        ,
        n
    }();
    function t(t, e) {
        for (var i in this.wrapper = "string" == typeof t ? o.querySelector(t) : t,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !1,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        },
        e)
            this.options[i] = e[i];
        this.translateZ = this.options.HWCompositing && m.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = m.hasTransition && this.options.useTransition,
        this.options.useTransform = m.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? m.ease[this.options.bounceEasing] || m.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        !0 === this.options.tap && (this.options.tap = "tap"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        3 == this.options.probeType && (this.options.useTransition = !1),
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function a(t, e, i) {
        var n = o.createElement("div")
          , s = o.createElement("div");
        return !0 === i && (n.style.cssText = "position:absolute;z-index:9999",
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        s.className = "iScrollIndicator",
        "h" == t ? (!0 === i && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
        s.style.height = "100%"),
        n.className = "iScrollHorizontalScrollbar") : (!0 === i && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
        s.style.width = "100%"),
        n.className = "iScrollVerticalScrollbar"),
        n.style.cssText += ";overflow:hidden",
        e || (n.style.pointerEvents = "none"),
        n.appendChild(s),
        n
    }
    function l(t, e) {
        for (var i in this.wrapper = "string" == typeof e.el ? o.querySelector(e.el) : e.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = t,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        },
        e)
            this.options[i] = e[i];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (m.addEvent(this.indicator, "touchstart", this),
        m.addEvent(r, "touchend", this)),
        this.options.disablePointer || (m.addEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this),
        m.addEvent(r, m.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse || (m.addEvent(this.indicator, "mousedown", this),
        m.addEvent(r, "mouseup", this))),
        this.options.fade && (this.wrapperStyle[m.style.transform] = this.scroller.translateZ,
        this.wrapperStyle[m.style.transitionDuration] = m.isBadAndroid ? "0.001s" : "0ms",
        this.wrapperStyle.opacity = "0")
    }
    t.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            var e, i;
            1 != m.eventType[t.type] && 0 !== t.button || !this.enabled || this.initiated && m.eventType[t.type] !== this.initiated || (!this.options.preventDefault || m.isBadAndroid || m.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault(),
            e = t.touches ? t.touches[0] : t,
            this.initiated = m.eventType[t.type],
            this.moved = !1,
            this.distX = 0,
            this.distY = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.directionLocked = 0,
            this._transitionTime(),
            this.startTime = m.getTime(),
            this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
            i = this.getComputedPosition(),
            this._translate(u.round(i.x), u.round(i.y)),
            this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
            this._execEvent("scrollEnd")),
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = e.pageX,
            this.pointY = e.pageY,
            this._execEvent("beforeScrollStart"))
        },
        _move: function(t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, i, n, s, r = t.touches ? t.touches[0] : t, o = r.pageX - this.pointX, a = r.pageY - this.pointY, l = m.getTime();
                if (this.pointX = r.pageX,
                this.pointY = r.pageY,
                this.distX += o,
                this.distY += a,
                n = u.abs(this.distX),
                s = u.abs(this.distY),
                !(300 < l - this.endTime && n < 10 && s < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (n > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                    "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        a = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        o = 0
                    }
                    o = this.hasHorizontalScroll ? o : 0,
                    a = this.hasVerticalScroll ? a : 0,
                    e = this.x + o,
                    i = this.y + a,
                    (0 < e || e < this.maxScrollX) && (e = this.options.bounce ? this.x + o / 3 : 0 < e ? 0 : this.maxScrollX),
                    (0 < i || i < this.maxScrollY) && (i = this.options.bounce ? this.y + a / 3 : 0 < i ? 0 : this.maxScrollY),
                    this.directionX = 0 < o ? -1 : o < 0 ? 1 : 0,
                    this.directionY = 0 < a ? -1 : a < 0 ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(e, i),
                    300 < l - this.startTime && (this.startTime = l,
                    this.startX = this.x,
                    this.startY = this.y,
                    1 == this.options.probeType && this._execEvent("scroll")),
                    1 < this.options.probeType && this._execEvent("scroll")
                }
            }
        },
        _end: function(t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !m.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                t.changedTouches && t.changedTouches[0];
                var e, i, n, s = m.getTime() - this.startTime, r = u.round(this.x), o = u.round(this.y), a = u.abs(r - this.startX), l = u.abs(o - this.startY), c = 0, h = "";
                if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = m.getTime(),
                !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, o),
                    !this.moved)
                        return this.options.tap && m.tap(t, this.options.tap),
                        this.options.click && m.click(t),
                        void this._execEvent("scrollCancel");
                    if (this._events.flick && s < 200 && a < 100 && l < 100)
                        this._execEvent("flick");
                    else {
                        if (this.options.momentum && s < 300 && (e = this.hasHorizontalScroll ? m.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        },
                        i = this.hasVerticalScroll ? m.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: o,
                            duration: 0
                        },
                        r = e.destination,
                        o = i.destination,
                        c = u.max(e.duration, i.duration),
                        this.isInTransition = 1),
                        this.options.snap && (n = this._nearestSnap(r, o),
                        this.currentPage = n,
                        c = this.options.snapSpeed || u.max(u.max(u.min(u.abs(r - n.x), 1e3), u.min(u.abs(o - n.y), 1e3)), 300),
                        r = n.x,
                        o = n.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        h = this.options.bounceEasing),
                        r != this.x || o != this.y)
                            return (0 < r || r < this.maxScrollX || 0 < o || o < this.maxScrollY) && (h = m.ease.quadratic),
                            void this.scrollTo(r, o, c, h);
                        this._execEvent("scrollEnd")
                    }
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x
              , i = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || 0 < this.x ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
            !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
            (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = m.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(e)
        },
        off: function(t, e) {
            var i;
            !this._events[t] || -1 < (i = this._events[t].indexOf(e)) && this._events[t].splice(i, 1)
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0
                  , i = this._events[t].length;
                if (i)
                    for (; e < i; e++)
                        this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, n) {
            t = this.x + t,
            e = this.y + e,
            i = i || 0,
            this.scrollTo(t, e, i, n)
        },
        scrollTo: function(t, e, i, n) {
            n = n || m.ease.circular,
            this.isInTransition = this.options.useTransition && 0 < i,
            !i || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style),
            this._transitionTime(i),
            this._translate(t, e)) : this._animate(t, e, i, n.fn)
        },
        scrollToElement: function(t, e, i, n, s) {
            var r;
            (t = t.nodeType ? t : this.scroller.querySelector(t)) && ((r = m.offset(t)).left -= this.wrapperOffset.left,
            r.top -= this.wrapperOffset.top,
            !0 === i && (i = u.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            !0 === n && (n = u.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            r.left -= i || 0,
            r.top -= n || 0,
            r.left = 0 < r.left ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left,
            r.top = 0 < r.top ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top,
            e = null == e || "auto" === e ? u.max(u.abs(this.x - r.left), u.abs(this.y - r.top)) : e,
            this.scrollTo(r.left, r.top, e, s))
        },
        _transitionTime: function(t) {
            if (t = t || 0,
            this.scrollerStyle[m.style.transitionDuration] = t + "ms",
            !t && m.isBadAndroid && (this.scrollerStyle[m.style.transitionDuration] = "0.001s"),
            this.indicators)
                for (var e = this.indicators.length; e--; )
                    this.indicators[e].transitionTime(t)
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[m.style.transitionTimingFunction] = t,
            this.indicators)
                for (var e = this.indicators.length; e--; )
                    this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            if (this.options.useTransform ? this.scrollerStyle[m.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = u.round(t),
            e = u.round(e),
            this.scrollerStyle.left = t + "px",
            this.scrollerStyle.top = e + "px"),
            this.x = t,
            this.y = e,
            this.indicators)
                for (var i = this.indicators.length; i--; )
                    this.indicators[i].updatePosition()
        },
        _initEvents: function(t) {
            var e = t ? m.removeEvent : m.addEvent
              , i = this.options.bindToWrapper ? this.wrapper : r;
            e(r, "orientationchange", this),
            e(r, "resize", this),
            this.options.click && e(this.wrapper, "click", this, !0),
            this.options.disableMouse || (e(this.wrapper, "mousedown", this),
            e(i, "mousemove", this),
            e(i, "mousecancel", this),
            e(i, "mouseup", this)),
            m.hasPointer && !this.options.disablePointer && (e(this.wrapper, m.prefixPointerEvent("pointerdown"), this),
            e(i, m.prefixPointerEvent("pointermove"), this),
            e(i, m.prefixPointerEvent("pointercancel"), this),
            e(i, m.prefixPointerEvent("pointerup"), this)),
            m.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this),
            e(i, "touchmove", this),
            e(i, "touchcancel", this),
            e(i, "touchend", this)),
            e(this.scroller, "transitionend", this),
            e(this.scroller, "webkitTransitionEnd", this),
            e(this.scroller, "oTransitionEnd", this),
            e(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var t, e = r.getComputedStyle(this.scroller, null), i = this.options.useTransform ? (t = +((e = e[m.style.transform].split(")")[0].split(", "))[12] || e[4]),
            +(e[13] || e[5])) : (t = +e.left.replace(/[^-\d.]/g, ""),
            +e.top.replace(/[^-\d.]/g, ""));
            return {
                x: t,
                y: i
            }
        },
        _initIndicators: function() {
            var t, e = this.options.interactiveScrollbars, i = "string" != typeof this.options.scrollbars, n = [], s = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (t = {
                el: a("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(t.el),
            n.push(t)),
            this.options.scrollX && (t = {
                el: a("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(t.el),
            n.push(t))),
            this.options.indicators && (n = n.concat(this.options.indicators));
            for (var r = n.length; r--; )
                this.indicators.push(new l(this,n[r]));
            function o(t) {
                for (var e = s.indicators.length; e--; )
                    t.call(s.indicators[e])
            }
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                o(function() {
                    this.fade()
                })
            }),
            this.on("scrollCancel", function() {
                o(function() {
                    this.fade()
                })
            }),
            this.on("scrollStart", function() {
                o(function() {
                    this.fade(1)
                })
            }),
            this.on("beforeScrollStart", function() {
                o(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh", function() {
                o(function() {
                    this.refresh()
                })
            }),
            this.on("destroy", function() {
                o(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            var t = this.options.bindToWrapper ? this.wrapper : r;
            m.addEvent(t, "wheel", this),
            m.addEvent(t, "mousewheel", this),
            m.addEvent(t, "DOMMouseScroll", this),
            this.on("destroy", function() {
                m.removeEvent(t, "wheel", this),
                m.removeEvent(t, "mousewheel", this),
                m.removeEvent(t, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault(),
                t.stopPropagation();
                var e, i, n, s, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = setTimeout(function() {
                    r._execEvent("scrollEnd"),
                    r.wheelTimeout = void 0
                }, 400),
                "deltaX"in t)
                    i = 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed,
                    -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX,
                    -t.deltaY);
                else if ("wheelDeltaX"in t)
                    e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                    i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta"in t)
                    e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail"in t))
                        return;
                    e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection,
                i *= this.options.invertWheelDirection,
                this.hasVerticalScroll || (e = i,
                i = 0),
                this.options.snap)
                    return n = this.currentPage.pageX,
                    s = this.currentPage.pageY,
                    0 < e ? n-- : e < 0 && n++,
                    0 < i ? s-- : i < 0 && s++,
                    void this.goToPage(n, s);
                n = this.x + u.round(this.hasHorizontalScroll ? e : 0),
                s = this.y + u.round(this.hasVerticalScroll ? i : 0),
                0 < n ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX),
                0 < s ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY),
                this.scrollTo(n, s, 0),
                1 < this.options.probeType && this._execEvent("scroll")
            }
        },
        _initSnap: function() {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", function() {
                var t, e, i, n, s, r, o = 0, a = 0, l = 0, c = this.options.snapStepX || this.wrapperWidth, h = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [],
                this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap)
                        for (i = u.round(c / 2),
                        n = u.round(h / 2); l > -this.scrollerWidth; ) {
                            for (this.pages[o] = [],
                            s = t = 0; s > -this.scrollerHeight; )
                                this.pages[o][t] = {
                                    x: u.max(l, this.maxScrollX),
                                    y: u.max(s, this.maxScrollY),
                                    width: c,
                                    height: h,
                                    cx: l - i,
                                    cy: s - n
                                },
                                s -= h,
                                t++;
                            l -= c,
                            o++
                        }
                    else
                        for (t = (r = this.options.snap).length,
                        e = -1; o < t; o++)
                            (0 === o || r[o].offsetLeft <= r[o - 1].offsetLeft) && (a = 0,
                            e++),
                            this.pages[a] || (this.pages[a] = []),
                            l = u.max(-r[o].offsetLeft, this.maxScrollX),
                            s = u.max(-r[o].offsetTop, this.maxScrollY),
                            i = l - u.round(r[o].offsetWidth / 2),
                            n = s - u.round(r[o].offsetHeight / 2),
                            this.pages[a][e] = {
                                x: l,
                                y: s,
                                width: r[o].offsetWidth,
                                height: r[o].offsetHeight,
                                cx: i,
                                cy: n
                            },
                            l > this.maxScrollX && a++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold,
                    this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = u.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                    this.snapThresholdY = u.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on("flick", function() {
                var t = this.options.snapSpeed || u.max(u.max(u.min(u.abs(this.x - this.startX), 1e3), u.min(u.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, e) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var i = 0
              , n = this.pages.length
              , s = 0;
            if (u.abs(t - this.absStartX) < this.snapThresholdX && u.abs(e - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (0 < t ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX),
            0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); i < n; i++)
                if (t >= this.pages[i][0].cx) {
                    t = this.pages[i][0].x;
                    break
                }
            for (n = this.pages[i].length; s < n; s++)
                if (e >= this.pages[0][s].cy) {
                    e = this.pages[0][s].y;
                    break
                }
            return i == this.currentPage.pageX && ((i += this.directionX) < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1),
            t = this.pages[i][0].x),
            s == this.currentPage.pageY && ((s += this.directionY) < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1),
            e = this.pages[0][s].y),
            {
                x: t,
                y: e,
                pageX: i,
                pageY: s
            }
        },
        goToPage: function(t, e, i, n) {
            n = n || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
            e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var s = this.pages[t][e].x
              , r = this.pages[t][e].y;
            i = void 0 === i ? this.options.snapSpeed || u.max(u.max(u.min(u.abs(s - this.x), 1e3), u.min(u.abs(r - this.y), 1e3)), 300) : i,
            this.currentPage = {
                x: s,
                y: r,
                pageX: t,
                pageY: e
            },
            this.scrollTo(s, r, i, n)
        },
        next: function(t, e) {
            var i = this.currentPage.pageX
              , n = this.currentPage.pageY;
            ++i >= this.pages.length && this.hasVerticalScroll && (i = 0,
            n++),
            this.goToPage(i, n, t, e)
        },
        prev: function(t, e) {
            var i = this.currentPage.pageX
              , n = this.currentPage.pageY;
            --i < 0 && this.hasVerticalScroll && (i = 0,
            n--),
            this.goToPage(i, n, t, e)
        },
        _initKeys: function(t) {
            var e, i = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (e in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (e in i)
                this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
            m.addEvent(r, "keydown", this),
            this.on("destroy", function() {
                m.removeEvent(r, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var e, i = this.options.snap, n = i ? this.currentPage.pageX : this.x, s = i ? this.currentPage.pageY : this.y, r = m.getTime(), o = this.keyTime || 0;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(),
                this._translate(u.round(e.x), u.round(e.y)),
                this.isInTransition = !1),
                this.keyAcceleration = r - o < 200 ? u.min(this.keyAcceleration + .25, 50) : 0,
                t.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : s += i ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : s -= i ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    n = i ? this.pages.length - 1 : this.maxScrollX,
                    s = i ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    s = n = 0;
                    break;
                case this.options.keyBindings.left:
                    n += i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    s += i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    n -= i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    s -= i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                i ? this.goToPage(n, s) : (0 < n ? (n = 0,
                this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX,
                this.keyAcceleration = 0),
                0 < s ? (s = 0,
                this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY,
                this.keyAcceleration = 0),
                this.scrollTo(n, s, 0),
                this.keyTime = r)
            }
        },
        _animate: function(r, o, a, l) {
            var c = this
              , h = this.x
              , u = this.y
              , d = m.getTime()
              , p = d + a;
            this.isAnimating = !0,
            function t() {
                var e, i, n, s = m.getTime();
                if (p <= s)
                    return c.isAnimating = !1,
                    c._translate(r, o),
                    void (c.resetPosition(c.options.bounceTime) || c._execEvent("scrollEnd"));
                n = l(s = (s - d) / a),
                e = (r - h) * n + h,
                i = (o - u) * n + u,
                c._translate(e, i),
                c.isAnimating && f(t),
                3 == c.options.probeType && c._execEvent("scroll")
            }()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                t._constructed || (t.preventDefault(),
                t.stopPropagation())
            }
        }
    },
    l.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function() {
            this.options.interactive && (m.removeEvent(this.indicator, "touchstart", this),
            m.removeEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this),
            m.removeEvent(this.indicator, "mousedown", this),
            m.removeEvent(r, "touchmove", this),
            m.removeEvent(r, m.prefixPointerEvent("pointermove"), this),
            m.removeEvent(r, "mousemove", this),
            m.removeEvent(r, "touchend", this),
            m.removeEvent(r, m.prefixPointerEvent("pointerup"), this),
            m.removeEvent(r, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(t) {
            var e = t.touches ? t.touches[0] : t;
            this.scroller._execEvent("scrollbarGrab"),
            t.preventDefault(),
            t.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = e.pageX,
            this.lastPointY = e.pageY,
            this.startTime = m.getTime(),
            this.options.disableTouch || m.addEvent(r, "touchmove", this),
            this.options.disablePointer || m.addEvent(r, m.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || m.addEvent(r, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var e, i, n, s, r = t.touches ? t.touches[0] : t, o = m.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            e = r.pageX - this.lastPointX,
            this.lastPointX = r.pageX,
            i = r.pageY - this.lastPointY,
            this.lastPointY = r.pageY,
            n = this.x + e,
            s = this.y + i,
            this._pos(n, s),
            1 == this.scroller.options.probeType && 300 < o - this.startTime ? (this.startTime = o,
            this.scroller._execEvent("scroll")) : 1 < this.scroller.options.probeType && this.scroller._execEvent("scroll"),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function(t) {
            var e, i;
            this.initiated && (this.initiated = !1,
            t.preventDefault(),
            t.stopPropagation(),
            m.removeEvent(r, "touchmove", this),
            m.removeEvent(r, m.prefixPointerEvent("pointermove"), this),
            m.removeEvent(r, "mousemove", this),
            this.scroller.options.snap && (e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
            i = this.options.snapSpeed || u.max(u.max(u.min(u.abs(this.scroller.x - e.x), 1e3), u.min(u.abs(this.scroller.y - e.y), 1e3)), 300),
            this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0,
            this.scroller.directionY = 0,
            this.scroller.currentPage = e,
            this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing))),
            this.scroller._execEvent("scrollbarUngrab"),
            this.moved && this.scroller._execEvent("scrollEnd"))
        },
        transitionTime: function(t) {
            t = t || 0,
            this.indicatorStyle[m.style.transitionDuration] = t + "ms",
            !t && m.isBadAndroid && (this.indicatorStyle[m.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[m.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (m.addClass(this.wrapper, "iScrollBothScrollbars"),
            m.removeClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (m.removeClass(this.wrapper, "iScrollBothScrollbars"),
            m.addClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
            this.options.resize ? (this.indicatorWidth = u.max(u.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth,
            this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
            this.maxBoundaryX = this.maxPosX),
            this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
            this.options.resize ? (this.indicatorHeight = u.max(u.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight,
            this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
            this.maxBoundaryY = this.maxPosY),
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && u.round(this.sizeRatioX * this.scroller.x) || 0
              , e = this.options.listenY && u.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = u.max(this.indicatorWidth + t, 8),
            this.indicatorStyle.width = this.width + "px"),
            t = this.minBoundaryX) : t > this.maxBoundaryX ? t = "scale" == this.options.shrink ? (this.width = u.max(this.indicatorWidth - (t - this.maxPosX), 8),
            this.indicatorStyle.width = this.width + "px",
            this.maxPosX + this.indicatorWidth - this.width) : this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
            this.indicatorStyle.width = this.width + "px"),
            e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = u.max(this.indicatorHeight + 3 * e, 8),
            this.indicatorStyle.height = this.height + "px"),
            e = this.minBoundaryY) : e > this.maxBoundaryY ? e = "scale" == this.options.shrink ? (this.height = u.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8),
            this.indicatorStyle.height = this.height + "px",
            this.maxPosY + this.indicatorHeight - this.height) : this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
            this.indicatorStyle.height = this.height + "px")),
            this.x = t,
            this.y = e,
            this.scroller.options.useTransform ? this.indicatorStyle[m.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px",
            this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
            t = this.options.listenX ? u.round(t / this.sizeRatioX) : this.scroller.x,
            e = this.options.listenY ? u.round(e / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(t, e)
        },
        fade: function(t, e) {
            var i, n;
            e && !this.visible || (clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null,
            i = t ? 250 : 500,
            n = t ? 0 : 300,
            t = t ? "1" : "0",
            this.wrapperStyle[m.style.transitionDuration] = i + "ms",
            this.fadeTimeout = setTimeout(function(t) {
                this.wrapperStyle.opacity = t,
                this.visible = +t
            }
            .bind(this, t), n))
        }
    },
    t.utils = m,
    "undefined" != typeof module && module.exports ? module.exports = t : r.IScroll = t
}(window, document, Math),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(d) {
    function e(t) {
        var e, i, n = t || window.event, s = v.call(arguments, 1), r = 0, o = 0, a = 0, l = 0, c = 0, h = 0;
        if ((t = d.event.fix(n)).type = "mousewheel",
        "detail"in n && (a = -1 * n.detail),
        "wheelDelta"in n && (a = n.wheelDelta),
        "wheelDeltaY"in n && (a = n.wheelDeltaY),
        "wheelDeltaX"in n && (o = -1 * n.wheelDeltaX),
        "axis"in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * a,
        a = 0),
        r = 0 === a ? o : a,
        "deltaY"in n && (r = a = -1 * n.deltaY),
        "deltaX"in n && (o = n.deltaX,
        0 === a && (r = -1 * o)),
        0 !== a || 0 !== o) {
            1 === n.deltaMode ? (r *= e = d.data(this, "mousewheel-line-height"),
            a *= e,
            o *= e) : 2 === n.deltaMode && (r *= i = d.data(this, "mousewheel-page-height"),
            a *= i,
            o *= i);
            var u, l = Math.max(Math.abs(a), Math.abs(o));
            return g && !(l < g) || f(n, g = l) && (g /= 40),
            f(n, l) && (r /= 40,
            o /= 40,
            a /= 40),
            r = Math[1 <= r ? "floor" : "ceil"](r / g),
            o = Math[1 <= o ? "floor" : "ceil"](o / g),
            a = Math[1 <= a ? "floor" : "ceil"](a / g),
            y.settings.normalizeOffset && this.getBoundingClientRect && (u = this.getBoundingClientRect(),
            c = t.clientX - u.left,
            h = t.clientY - u.top),
            t.deltaX = o,
            t.deltaY = a,
            t.deltaFactor = g,
            t.offsetX = c,
            t.offsetY = h,
            t.deltaMode = 0,
            s.unshift(t, r, o, a),
            m && clearTimeout(m),
            m = setTimeout(p, 200),
            (d.event.dispatch || d.event.handle).apply(this, s)
        }
    }
    function p() {
        g = null
    }
    function f(t, e) {
        return y.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }
    var m, g, t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], i = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], v = Array.prototype.slice;
    if (d.event.fixHooks)
        for (var n = t.length; n; )
            d.event.fixHooks[t[--n]] = d.event.mouseHooks;
    var y = d.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var t = i.length; t; )
                    this.addEventListener(i[--t], e, !1);
            else
                this.onmousewheel = e;
            d.data(this, "mousewheel-line-height", y.getLineHeight(this)),
            d.data(this, "mousewheel-page-height", y.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = i.length; t; )
                    this.removeEventListener(i[--t], e, !1);
            else
                this.onmousewheel = null;
            d.removeData(this, "mousewheel-line-height"),
            d.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var e = d(t)["offsetParent"in d.fn ? "offsetParent" : "parent"]();
            return e.length || (e = d("body")),
            parseInt(e.css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return d(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    d.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function(t, i) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], function(t, e) {
        i(t.Scene, e)
    }) : i(t.ScrollScene, t.jQuery)
}(this, function(t, v) {
    t.prototype.addIndicators = function(t) {
        var e, i, n, s, r, o, a = {
            parent: void 0,
            zindex: 1e3,
            indent: 0,
            suffix: "",
            colorTrigger: "blue",
            colorStart: "green",
            colorEnd: "red"
        }, l = this, c = v.extend({}, a, t), h = this.parent();
        return h ? (e = h.info(),
        i = "" === c.labelSuffix ? "" : " " + c.suffix,
        n = 0 < v(c.parent).length ? v(c.parent) : e.isDocument ? v("body") : e.container,
        s = v("<div></div>").addClass("ScrollSceneIndicators").data("options", c).css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "text-align": "center",
            "z-index": c.zindex,
            "pointer-events": "none",
            "font-size": 10
        }),
        r = v("<div>trigger</div>").css({
            position: "fixed",
            overflow: "visible",
            color: c.colorTrigger
        }).addClass("hook"),
        $start = v("<div>start" + i + "</div>").css({
            position: "absolute",
            overflow: "visible",
            color: c.colorStart
        }).addClass("start"),
        $end = v("<div>end" + i + "</div>").css({
            position: "absolute",
            overflow: "visible",
            color: c.colorEnd
        }).addClass("end"),
        "static" == n.css("position") && n.css("position", "relative"),
        l.indicators = s.append(r).append($start).append($end).appendTo(n),
        l.updateIndicators(),
        o = function(t) {
            "scroll" != t.type && "resize" != t.type || e.isDocument ? l.updateIndicators() : l.updateIndicators(!0)
        }
        ,
        l.on("change.debug", o),
        e.container.on("resize scroll", o),
        e.isDocument || v(window).on("scroll resize", o)) : console.log("ERROR: Please add Scene to controller before adding indicators."),
        l
    }
    ,
    t.prototype.updateIndicators = function(t) {
        var e, i, n, s, r, o, a, l, c, h, u, d, p, f = this.parent(), m = this.indicators, g = m.data("options");
        m && f && (e = f.info(),
        i = m.children(".hook"),
        n = m.children(".start"),
        s = m.children(".end"),
        r = e.container.offset() || {
            top: 0,
            left: 0
        },
        o = e.vertical ? r.top : r.left,
        a = e.size * this.triggerHook() + o,
        l = e.vertical ? "v" : "h",
        e.isDocument ? (c = m.offsetParent().is("body") ? v("body").offset() : r,
        m.css({
            top: -c.top,
            left: -c.left
        })) : a -= e.vertical ? v(document).scrollTop() : v(document).scrollLeft(),
        i.attr("data-hook", a).attr("data-direction", l).data("parent", e.container),
        $otherhook = v('.ScrollSceneIndicators .hook[data-hook="' + a + '"][data-direction=' + l + "]:visible").not(i),
        0 < $otherhook.length && $otherhook.data("parent") == e.container ? i.hide() : (i.show(),
        h = a > .8 * e.size,
        e.vertical ? i.css({
            top: h ? a - i.height() - 2 : a,
            left: (e.isDocument ? e.container.width() : r.left + e.container.width() - v(document).scrollLeft()) - 70 - g.indent,
            width: 40,
            height: "auto",
            padding: "0 8px 2px 8px",
            "border-top": h ? "none" : "1px solid blue",
            "border-bottom": h ? "1px solid blue" : "none",
            "border-left": "none",
            "border-right": "none"
        }) : i.css({
            top: (e.isDocument ? e.container.height() : r.top + e.container.height() - v(document).scrollTop()) - 40 - g.indent,
            left: h ? a - i.width() - 9 : a,
            width: "auto",
            height: 20,
            padding: "5px 5px 0 5px",
            "border-top": "none",
            "border-bottom": "none",
            "border-left": h ? "none" : "1px solid blue",
            "border-right": h ? "1px solid blue" : "none"
        })),
        t || (d = (u = this.triggerPosition()) + this.duration(),
        p = {
            border: "none",
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto"
        },
        n.css(p),
        s.css(p),
        0 === this.duration() ? s.hide() : s.show(),
        e.vertical ? (n.css({
            top: u,
            right: 71 - e.container.scrollLeft() + g.indent,
            "border-top": "1px solid green",
            padding: "0 8px 0 8px"
        }),
        s.css({
            top: d,
            right: 71 - e.container.scrollLeft() + g.indent,
            "border-top": "1px solid red",
            padding: "0 8px 0 8px"
        })) : (n.css({
            left: u,
            bottom: 40 - e.container.scrollTop() + g.indent,
            "border-left": "1px solid green",
            padding: "0 8px 0 8px"
        }),
        s.css({
            left: d,
            bottom: 40 - e.container.scrollTop() + g.indent,
            "border-left": "1px solid red",
            padding: "0 8px 0 8px"
        }))))
    }
}),
function(s) {
    void 0 === s.fn.each2 && s.extend(s.fn, {
        each2: function(t) {
            for (var e = s([0]), i = -1, n = this.length; ++i < n && (e.context = e[0] = this[i]) && !1 !== t.call(e[0], i, e); )
                ;
            return this
        }
    })
}(jQuery),
function(x, b) {
    "use strict";
    function o(t) {
        var e = x(document.createTextNode(""));
        t.before(e),
        e.before(t),
        e.remove()
    }
    function a(t) {
        return t.replace(/[^\u0000-\u007E]/g, function(t) {
            return A[t] || t
        })
    }
    function h(t, e) {
        for (var i = 0, n = e.length; i < n; i += 1)
            if (p(t, e[i]))
                return i;
        return -1
    }
    function p(t, e) {
        return t === e || t !== b && e !== b && (null !== t && null !== e && (t.constructor === String ? t + "" == e + "" : e.constructor === String && e + "" == t + ""))
    }
    function s(t, e, i) {
        var n, s, r;
        if (null === t || t.length < 1)
            return [];
        for (s = 0,
        r = (n = t.split(e)).length; s < r; s += 1)
            n[s] = i(n[s]);
        return n
    }
    function l(t) {
        return t.outerWidth(!1) - t.width()
    }
    function c(e) {
        var i = "keyup-change-value";
        e.on("keydown", function() {
            x.data(e, i) === b && x.data(e, i, e.val())
        }),
        e.on("keyup", function() {
            var t = x.data(e, i);
            t !== b && e.val() !== t && (x.removeData(e, i),
            e.trigger("keyup-change"))
        })
    }
    function u(e, i, n) {
        var s;
        return n = n || b,
        function() {
            var t = arguments;
            window.clearTimeout(s),
            s = window.setTimeout(function() {
                i.apply(n, t)
            }, e)
        }
    }
    function d(t) {
        t.preventDefault(),
        t.stopPropagation()
    }
    function f(t, e, i) {
        var n, s = [], r = x.trim(t.attr("class"));
        r && x((r = "" + r).split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && s.push(this)
        }),
        (r = x.trim(e.attr("class"))) && x((r = "" + r).split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && ((n = i(this)) && s.push(n))
        }),
        t.attr("class", s.join(" "))
    }
    function r(t, e, i, n) {
        var s = a(t.toUpperCase()).indexOf(a(e.toUpperCase()))
          , r = e.length;
        return s < 0 ? void i.push(n(t)) : (i.push(n(t.substring(0, s))),
        i.push("<span class='select2-match'>"),
        i.push(n(t.substring(s, s + r))),
        i.push("</span>"),
        void i.push(n(t.substring(s + r, t.length))))
    }
    function t(t) {
        var e = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(t).replace(/[&<>"'\/\\]/g, function(t) {
            return e[t]
        })
    }
    function n(o) {
        var t, a = null, e = o.quietMillis || 100, l = o.url, c = this;
        return function(r) {
            window.clearTimeout(t),
            t = window.setTimeout(function() {
                var t = o.data
                  , e = l
                  , i = o.transport || x.fn.select2.ajaxDefaults.transport
                  , n = {
                    type: o.type || "GET",
                    cache: o.cache || !1,
                    jsonpCallback: o.jsonpCallback || b,
                    dataType: o.dataType || "json"
                }
                  , s = x.extend({}, x.fn.select2.ajaxDefaults.params, n)
                  , t = t ? t.call(c, r.term, r.page, r.context) : null
                  , e = "function" == typeof e ? e.call(c, r.term, r.page, r.context) : e;
                a && "function" == typeof a.abort && a.abort(),
                o.params && (x.isFunction(o.params) ? x.extend(s, o.params.call(c)) : x.extend(s, o.params)),
                x.extend(s, {
                    url: e,
                    dataType: o.dataType,
                    data: t,
                    success: function(t) {
                        var e = o.results(t, r.page, r);
                        r.callback(e)
                    },
                    error: function(t, e, i) {
                        var n = {
                            hasError: !0,
                            jqXHR: t,
                            textStatus: e,
                            errorThrown: i
                        };
                        r.callback(n)
                    }
                }),
                a = i.call(c, s)
            }, e)
        }
    }
    function m(t) {
        var e, i, n = t, a = function(t) {
            return "" + t.text
        };
        x.isArray(n) && (n = {
            results: i = n
        }),
        !1 === x.isFunction(n) && (i = n,
        n = function() {
            return i
        }
        );
        var s = n();
        return s.text && (a = s.text,
        x.isFunction(a) || (e = s.text,
        a = function(t) {
            return t[e]
        }
        )),
        function(s) {
            var r, o = s.term, i = {
                results: []
            };
            return "" === o ? void s.callback(n()) : (r = function(t, e) {
                var i, n;
                if ((t = t[0]).children) {
                    for (n in i = {},
                    t)
                        t.hasOwnProperty(n) && (i[n] = t[n]);
                    i.children = [],
                    x(t.children).each2(function(t, e) {
                        r(e, i.children)
                    }),
                    (i.children.length || s.matcher(o, a(i), t)) && e.push(i)
                } else
                    s.matcher(o, a(t), t) && e.push(t)
            }
            ,
            x(n().results).each2(function(t, e) {
                r(e, i.results)
            }),
            void s.callback(i))
        }
    }
    function g(e) {
        var r = x.isFunction(e);
        return function(i) {
            var n = i.term
              , s = {
                results: []
            }
              , t = r ? e(i) : e;
            x.isArray(t) && (x(t).each(function() {
                var t = this.text !== b
                  , e = t ? this.text : this;
                "" !== n && !i.matcher(n, e) || s.results.push(t ? this : {
                    id: this,
                    text: this
                })
            }),
            i.callback(s))
        }
    }
    function v(t, e) {
        if (x.isFunction(t))
            return 1;
        if (t) {
            if ("string" == typeof t)
                return 1;
            throw new Error(e + " must be a string, function, or falsy value")
        }
    }
    function w(t, e) {
        if (x.isFunction(t)) {
            var i = Array.prototype.slice.call(arguments, 2);
            return t.apply(e, i)
        }
        return t
    }
    function y() {
        var i = this;
        x.each(arguments, function(t, e) {
            i[e].remove(),
            i[e] = null
        })
    }
    function e(t, e) {
        function i() {}
        return ((i.prototype = new t).constructor = i).prototype.parent = t.prototype,
        i.prototype = x.extend(i.prototype, e),
        i
    }
    var i, _, T, S, C, k, P, E, A, O, D;
    window.Select2 === b && (P = {
        x: 0,
        y: 0
    },
    E = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function(t) {
            switch (t = t.which ? t.which : t) {
            case E.LEFT:
            case E.RIGHT:
            case E.UP:
            case E.DOWN:
                return !0
            }
            return !1
        },
        isControl: function(t) {
            switch (t.which) {
            case E.SHIFT:
            case E.CTRL:
            case E.ALT:
                return !0
            }
            return !!t.metaKey
        },
        isFunctionKey: function(t) {
            return 112 <= (t = t.which ? t.which : t) && t <= 123
        }
    },
    A = {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ω": "ω",
        "ς": "σ"
    },
    O = x(document),
    D = 1,
    S = function() {
        return D++
    }
    ,
    i = e(Object, {
        bind: function(t) {
            var e = this;
            return function() {
                t.apply(e, arguments)
            }
        },
        init: function(t) {
            var r, e, i, n, s, o = ".select2-results";
            this.opts = t = this.prepareOpts(t),
            this.id = t.id,
            t.element.data("select2") !== b && null !== t.element.data("select2") && t.element.data("select2").destroy(),
            this.container = this.createContainer(),
            this.liveRegion = x(".select2-hidden-accessible"),
            0 == this.liveRegion.length && (this.liveRegion = x("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("select2-hidden-accessible").appendTo(document.body)),
            this.containerId = "s2id_" + (t.element.attr("id") || "autogen" + S()),
            this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"),
            this.container.attr("id", this.containerId),
            this.container.attr("title", t.element.attr("title")),
            this.body = x(document.body),
            f(this.container, this.opts.element, this.opts.adaptContainerCssClass),
            this.container.attr("style", t.element.attr("style")),
            this.container.css(w(t.containerCss, this.opts.element)),
            this.container.addClass(w(t.containerCssClass, this.opts.element)),
            this.elementTabIndex = this.opts.element.attr("tabindex"),
            this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", d),
            this.container.data("select2", this),
            this.dropdown = this.container.find(".select2-drop"),
            f(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
            this.dropdown.addClass(w(t.dropdownCssClass, this.opts.element)),
            this.dropdown.data("select2", this),
            this.dropdown.on("click", d),
            this.results = r = this.container.find(o),
            this.search = e = this.container.find("input.select2-input"),
            this.queryCount = 0,
            this.resultsPage = 0,
            this.context = null,
            this.initContainer(),
            this.container.on("click", d),
            this.results.on("mousemove", function(t) {
                P !== b && P.x === t.pageX && P.y === t.pageY || x(t.target).trigger("mousemove-filtered", t)
            }),
            this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent)),
            this.dropdown.on("touchstart touchmove touchend", o, this.bind(function(t) {
                this._touchEvent = !0,
                this.highlightUnderEvent(t)
            })),
            this.dropdown.on("touchmove", o, this.bind(this.touchMoved)),
            this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved)),
            this.dropdown.on("click", this.bind(function() {
                this._touchEvent && (this._touchEvent = !1,
                this.selectHighlighted())
            })),
            i = 80,
            n = this.results,
            s = u(i, function(t) {
                n.trigger("scroll-debounced", t)
            }),
            n.on("scroll", function(t) {
                0 <= h(t.target, n.get()) && s(t)
            }),
            this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded)),
            x(this.container).on("change", ".select2-input", function(t) {
                t.stopPropagation()
            }),
            x(this.dropdown).on("change", ".select2-input", function(t) {
                t.stopPropagation()
            }),
            x.fn.mousewheel && r.mousewheel(function(t, e, i, n) {
                var s = r.scrollTop();
                0 < n && s - n <= 0 ? (r.scrollTop(0),
                d(t)) : n < 0 && r.get(0).scrollHeight - r.scrollTop() + n <= r.height() && (r.scrollTop(r.get(0).scrollHeight - r.height()),
                d(t))
            }),
            c(e),
            e.on("keyup-change input paste", this.bind(this.updateResults)),
            e.on("focus", function() {
                e.addClass("select2-focused")
            }),
            e.on("blur", function() {
                e.removeClass("select2-focused")
            }),
            this.dropdown.on("mouseup", o, this.bind(function(t) {
                0 < x(t.target).closest(".select2-result-selectable").length && (this.highlightUnderEvent(t),
                this.selectHighlighted(t))
            })),
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(t) {
                t.stopPropagation()
            }),
            this.nextSearchTerm = b,
            x.isFunction(this.opts.initSelection) && (this.initSelection(),
            this.monitorSource()),
            null !== t.maximumInputLength && this.search.attr("maxlength", t.maximumInputLength);
            var a = t.element.prop("disabled");
            a === b && (a = !1),
            this.enable(!a);
            var l = t.element.prop("readonly");
            l === b && (l = !1),
            this.readonly(l),
            k = k || function() {
                var t = x("<div class='select2-measure-scrollbar'></div>");
                t.appendTo(document.body);
                var e = {
                    width: t.width() - t[0].clientWidth,
                    height: t.height() - t[0].clientHeight
                };
                return t.remove(),
                e
            }(),
            this.autofocus = t.element.prop("autofocus"),
            t.element.prop("autofocus", !1),
            this.autofocus && this.focus(),
            this.search.attr("placeholder", t.searchInputPlaceholder)
        },
        destroy: function() {
            var t = this.opts.element
              , e = t.data("select2")
              , i = this;
            this.close(),
            t.length && t[0].detachEvent && i._sync && t.each(function() {
                i._sync && this.detachEvent("onpropertychange", i._sync)
            }),
            this.propertyObserver && (this.propertyObserver.disconnect(),
            this.propertyObserver = null),
            this._sync = null,
            e !== b && (e.container.remove(),
            e.liveRegion.remove(),
            e.dropdown.remove(),
            t.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1),
            this.elementTabIndex ? t.attr({
                tabindex: this.elementTabIndex
            }) : t.removeAttr("tabindex"),
            t.show()),
            y.call(this, "container", "liveRegion", "dropdown", "results", "search")
        },
        optionToData: function(t) {
            return t.is("option") ? {
                id: t.prop("value"),
                text: t.text(),
                element: t.get(),
                css: t.attr("class"),
                disabled: t.prop("disabled"),
                locked: p(t.attr("locked"), "locked") || p(t.data("locked"), !0)
            } : t.is("optgroup") ? {
                text: t.attr("label"),
                children: [],
                element: t.get(),
                css: t.attr("class")
            } : void 0
        },
        prepareOpts: function(y) {
            var t, e, i, _ = this, o = y.element;
            if ("select" === o.get(0).tagName.toLowerCase() && (this.select = t = y.element),
            t && x.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                if (this in y)
                    throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
            }),
            "function" != typeof (y = x.extend({}, {
                populateResults: function(t, e, f) {
                    var m = this.opts.id
                      , g = this.liveRegion
                      , v = function(t, e, i) {
                        for (var n, s, r, o, a, l, c, h, u = [], d = 0, p = (t = y.sortResults(t, e, f)).length; d < p; d += 1)
                            s = !(r = !0 === (n = t[d]).disabled) && m(n) !== b,
                            o = n.children && 0 < n.children.length,
                            (a = x("<li></li>")).addClass("select2-results-dept-" + i),
                            a.addClass("select2-result"),
                            a.addClass(s ? "select2-result-selectable" : "select2-result-unselectable"),
                            r && a.addClass("select2-disabled"),
                            o && a.addClass("select2-result-with-children"),
                            a.addClass(_.opts.formatResultCssClass(n)),
                            a.attr("role", "presentation"),
                            (l = x(document.createElement("div"))).addClass("select2-result-label"),
                            l.attr("id", "select2-result-label-" + S()),
                            l.attr("role", "option"),
                            (h = y.formatResult(n, l, f, _.opts.escapeMarkup)) !== b && (l.html(h),
                            a.append(l)),
                            o && ((c = x("<ul></ul>")).addClass("select2-result-sub"),
                            v(n.children, c, i + 1),
                            a.append(c)),
                            a.data("select2-data", n),
                            u.push(a[0]);
                        e.append(u),
                        g.text(y.formatMatches(t.length))
                    };
                    v(e, t, 0)
                }
            }, x.fn.select2.defaults, y)).id && (e = y.id,
            y.id = function(t) {
                return t[e]
            }
            ),
            x.isArray(y.element.data("select2Tags"))) {
                if ("tags"in y)
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + y.element.attr("id");
                y.tags = y.element.data("select2Tags")
            }
            if (t ? (y.query = this.bind(function(n) {
                var t, i = {
                    results: [],
                    more: !1
                }, s = n.term, r = function(t, e) {
                    var i;
                    t.is("option") ? n.matcher(s, t.text(), t) && e.push(_.optionToData(t)) : t.is("optgroup") && (i = _.optionToData(t),
                    t.children().each2(function(t, e) {
                        r(e, i.children)
                    }),
                    0 < i.children.length && e.push(i))
                }, e = o.children();
                this.getPlaceholder() !== b && 0 < e.length && ((t = this.getPlaceholderOption()) && (e = e.not(t))),
                e.each2(function(t, e) {
                    r(e, i.results)
                }),
                n.callback(i)
            }),
            y.id = function(t) {
                return t.id
            }
            ) : "query"in y || ("ajax"in y ? ((i = y.element.data("ajax-url")) && 0 < i.length && (y.ajax.url = i),
            y.query = n.call(y.element, y.ajax)) : "data"in y ? y.query = m(y.data) : "tags"in y && (y.query = g(y.tags),
            y.createSearchChoice === b && (y.createSearchChoice = function(t) {
                return {
                    id: x.trim(t),
                    text: x.trim(t)
                }
            }
            ),
            y.initSelection === b && (y.initSelection = function(t, e) {
                var i = [];
                x(s(t.val(), y.separator, y.transformVal)).each(function() {
                    var t = {
                        id: this,
                        text: this
                    }
                      , e = y.tags;
                    x.isFunction(e) && (e = e()),
                    x(e).each(function() {
                        return p(this.id, t.id) ? (t = this,
                        !1) : void 0
                    }),
                    i.push(t)
                }),
                e(i)
            }
            ))),
            "function" != typeof y.query)
                throw "query function not defined for Select2 " + y.element.attr("id");
            if ("top" === y.createSearchChoicePosition)
                y.createSearchChoicePosition = function(t, e) {
                    t.unshift(e)
                }
                ;
            else if ("bottom" === y.createSearchChoicePosition)
                y.createSearchChoicePosition = function(t, e) {
                    t.push(e)
                }
                ;
            else if ("function" != typeof y.createSearchChoicePosition)
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            return y
        },
        monitorSource: function() {
            var t, i = this.opts.element, e = this;
            i.on("change.select2", this.bind(function() {
                !0 !== this.opts.element.data("select2-change-triggered") && this.initSelection()
            })),
            this._sync = this.bind(function() {
                var t = i.prop("disabled");
                t === b && (t = !1),
                this.enable(!t);
                var e = i.prop("readonly");
                e === b && (e = !1),
                this.readonly(e),
                this.container && (f(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                this.container.addClass(w(this.opts.containerCssClass, this.opts.element))),
                this.dropdown && (f(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                this.dropdown.addClass(w(this.opts.dropdownCssClass, this.opts.element)))
            }),
            i.length && i[0].attachEvent && i.each(function() {
                this.attachEvent("onpropertychange", e._sync)
            }),
            (t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) !== b && (this.propertyObserver && (delete this.propertyObserver,
            this.propertyObserver = null),
            this.propertyObserver = new t(function(t) {
                x.each(t, e._sync)
            }
            ),
            this.propertyObserver.observe(i.get(0), {
                attributes: !0,
                subtree: !1
            }))
        },
        triggerSelect: function(t) {
            var e = x.Event("select2-selecting", {
                val: this.id(t),
                object: t,
                choice: t
            });
            return this.opts.element.trigger(e),
            !e.isDefaultPrevented()
        },
        triggerChange: function(t) {
            t = t || {},
            t = x.extend({}, t, {
                type: "change",
                val: this.val()
            }),
            this.opts.element.data("select2-change-triggered", !0),
            this.opts.element.trigger(t),
            this.opts.element.data("select2-change-triggered", !1),
            this.opts.element.click(),
            this.opts.blurOnChange && this.opts.element.blur()
        },
        isInterfaceEnabled: function() {
            return !0 === this.enabledInterface
        },
        enableInterface: function() {
            var t = this._enabled && !this._readonly
              , e = !t;
            return t !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", e),
            this.close(),
            this.enabledInterface = t,
            !0)
        },
        enable: function(t) {
            t === b && (t = !0),
            this._enabled !== t && (this._enabled = t,
            this.opts.element.prop("disabled", !t),
            this.enableInterface())
        },
        disable: function() {
            this.enable(!1)
        },
        readonly: function(t) {
            t === b && (t = !1),
            this._readonly !== t && (this._readonly = t,
            this.opts.element.prop("readonly", t),
            this.enableInterface())
        },
        opened: function() {
            return !!this.container && this.container.hasClass("select2-dropdown-open")
        },
        positionDropdown: function() {
            var t, e, i, n, s, r = this.dropdown, o = this.container, a = o.offset(), l = o.outerHeight(!1), c = o.outerWidth(!1), h = r.outerHeight(!1), u = x(window), d = u.width(), p = u.height(), f = u.scrollLeft() + d, m = u.scrollTop() + p, g = a.top + l, v = a.left, y = g + h <= m, _ = a.top - h >= u.scrollTop(), b = r.outerWidth(!1);
            r.hasClass("select2-drop-above") ? (e = !0,
            !_ && y && (e = !(i = !0))) : (e = !1,
            !y && _ && (e = i = !0)),
            i && (r.hide(),
            a = this.container.offset(),
            l = this.container.outerHeight(!1),
            c = this.container.outerWidth(!1),
            h = r.outerHeight(!1),
            f = u.scrollLeft() + d,
            m = u.scrollTop() + p,
            g = a.top + l,
            v = a.left,
            b = r.outerWidth(!1),
            r.show(),
            this.focusSearch()),
            this.opts.dropdownAutoWidth ? (s = x(".select2-results", r)[0],
            r.addClass("select2-drop-auto-width"),
            r.css("width", ""),
            c < (b = r.outerWidth(!1) + (s.scrollHeight === s.clientHeight ? 0 : k.width)) ? c = b : b = c,
            h = r.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"),
            "static" !== this.body.css("position") && (g -= (t = this.body.offset()).top,
            v -= t.left),
            !(v + b <= f) && a.left + f + o.outerWidth(!1) > b && (v = a.left + this.container.outerWidth(!1) - b),
            n = {
                left: v,
                width: c
            },
            e ? (n.top = a.top - h,
            n.bottom = "auto",
            this.container.addClass("select2-drop-above"),
            r.addClass("select2-drop-above")) : (n.top = g,
            n.bottom = "auto",
            this.container.removeClass("select2-drop-above"),
            r.removeClass("select2-drop-above")),
            n = x.extend(n, w(this.opts.dropdownCss, this.opts.element)),
            r.css(n)
        },
        shouldOpen: function() {
            var t;
            return !this.opened() && (!1 !== this._enabled && !0 !== this._readonly && (t = x.Event("select2-opening"),
            this.opts.element.trigger(t),
            !t.isDefaultPrevented()))
        },
        clearDropdownAlignmentPreference: function() {
            this.container.removeClass("select2-drop-above"),
            this.dropdown.removeClass("select2-drop-above")
        },
        open: function() {
            return !!this.shouldOpen() && (this.opening(),
            O.on("mousemove.select2Event", function(t) {
                P.x = t.pageX,
                P.y = t.pageY
            }),
            !0)
        },
        opening: function() {
            var n, t = this.containerEventName, e = "scroll." + t, i = "resize." + t, s = "orientationchange." + t;
            this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
            this.clearDropdownAlignmentPreference(),
            this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body),
            0 === (n = x("#select2-drop-mask")).length && ((n = x(document.createElement("div"))).attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"),
            n.hide(),
            n.appendTo(this.body),
            n.on("mousedown touchstart click", function(t) {
                o(n);
                var e, i = x("#select2-drop");
                0 < i.length && ((e = i.data("select2")).opts.selectOnBlur && e.selectHighlighted({
                    noFocus: !0
                }),
                e.close(),
                t.preventDefault(),
                t.stopPropagation())
            })),
            this.dropdown.prev()[0] !== n[0] && this.dropdown.before(n),
            x("#select2-drop").removeAttr("id"),
            this.dropdown.attr("id", "select2-drop"),
            n.show(),
            this.positionDropdown(),
            this.dropdown.show(),
            this.positionDropdown(),
            this.dropdown.addClass("select2-drop-active");
            var r = this;
            this.container.parents().add(window).each(function() {
                x(this).on(i + " " + e + " " + s, function() {
                    r.opened() && r.positionDropdown()
                })
            })
        },
        close: function() {
            var t, e, i, n;
            this.opened() && (t = this.containerEventName,
            e = "scroll." + t,
            i = "resize." + t,
            n = "orientationchange." + t,
            this.container.parents().add(window).each(function() {
                x(this).off(e).off(i).off(n)
            }),
            this.clearDropdownAlignmentPreference(),
            x("#select2-drop-mask").hide(),
            this.dropdown.removeAttr("id"),
            this.dropdown.hide(),
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),
            this.results.empty(),
            O.off("mousemove.select2Event"),
            this.clearSearch(),
            this.search.removeClass("select2-active"),
            this.opts.element.trigger(x.Event("select2-close")))
        },
        externalSearch: function(t) {
            this.open(),
            this.search.val(t),
            this.updateResults(!1)
        },
        clearSearch: function() {},
        getMaximumSelectionSize: function() {
            return w(this.opts.maximumSelectionSize, this.opts.element)
        },
        ensureHighlightVisible: function() {
            var t, e, i, n, s, r, o, a = this.results, l = this.highlight();
            if (!(l < 0)) {
                if (0 == l)
                    return void a.scrollTop(0);
                t = this.findHighlightableChoices().find(".select2-result-label"),
                i = (o = ((e = x(t[l])).offset() || {}).top || 0) + e.outerHeight(!0),
                l === t.length - 1 && (0 < (r = a.find("li.select2-more-results")).length && (i = r.offset().top + r.outerHeight(!0))),
                (n = a.offset().top + a.outerHeight(!1)) < i && a.scrollTop(a.scrollTop() + (i - n)),
                (s = o - a.offset().top) < 0 && "none" != e.css("display") && a.scrollTop(a.scrollTop() + s)
            }
        },
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
        },
        moveHighlight: function(t) {
            for (var e = this.findHighlightableChoices(), i = this.highlight(); -1 < i && i < e.length; ) {
                var n = x(e[i += t]);
                if (n.hasClass("select2-result-selectable") && !n.hasClass("select2-disabled") && !n.hasClass("select2-selected")) {
                    this.highlight(i);
                    break
                }
            }
        },
        highlight: function(t) {
            var e, i, n = this.findHighlightableChoices();
            return 0 === arguments.length ? h(n.filter(".select2-highlighted")[0], n.get()) : (t >= n.length && (t = n.length - 1),
            t < 0 && (t = 0),
            this.removeHighlight(),
            (e = x(n[t])).addClass("select2-highlighted"),
            this.search.attr("aria-activedescendant", e.find(".select2-result-label").attr("id")),
            this.ensureHighlightVisible(),
            this.liveRegion.text(e.text()),
            void ((i = e.data("select2-data")) && this.opts.element.trigger({
                type: "select2-highlight",
                val: this.id(i),
                choice: i
            })))
        },
        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted")
        },
        touchMoved: function() {
            this._touchMoved = !0
        },
        clearTouchMoved: function() {
            this._touchMoved = !1
        },
        countSelectableResults: function() {
            return this.findHighlightableChoices().length
        },
        highlightUnderEvent: function(t) {
            var e, i = x(t.target).closest(".select2-result-selectable");
            0 < i.length && !i.is(".select2-highlighted") ? (e = this.findHighlightableChoices(),
            this.highlight(e.index(i))) : 0 == i.length && this.removeHighlight()
        },
        loadMoreIfNeeded: function() {
            var e = this.results
              , i = e.find("li.select2-more-results")
              , n = this.resultsPage + 1
              , s = this
              , r = this.search.val()
              , o = this.context;
            0 === i.length || i.offset().top - e.offset().top - e.height() <= this.opts.loadMorePadding && (i.addClass("select2-active"),
            this.opts.query({
                element: this.opts.element,
                term: r,
                page: n,
                context: o,
                matcher: this.opts.matcher,
                callback: this.bind(function(t) {
                    s.opened() && (s.opts.populateResults.call(this, e, t.results, {
                        term: r,
                        page: n,
                        context: o
                    }),
                    s.postprocessResults(t, !1, !1),
                    !0 === t.more ? (i.detach().appendTo(e).html(s.opts.escapeMarkup(w(s.opts.formatLoadMore, s.opts.element, n + 1))),
                    window.setTimeout(function() {
                        s.loadMoreIfNeeded()
                    }, 10)) : i.remove(),
                    s.positionDropdown(),
                    s.resultsPage = n,
                    s.context = t.context,
                    this.opts.element.trigger({
                        type: "select2-loaded",
                        items: t
                    }))
                })
            }))
        },
        tokenize: function() {},
        updateResults: function(i) {
            function n() {
                o.removeClass("select2-active"),
                c.positionDropdown(),
                a.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? c.liveRegion.text(a.text()) : c.liveRegion.text(c.opts.formatMatches(a.find('.select2-result-selectable:not(".select2-selected")').length))
            }
            function s(t) {
                a.html(t),
                n()
            }
            var t, e, r, o = this.search, a = this.results, l = this.opts, c = this, h = o.val(), u = x.data(this.container, "select2-last-term");
            if ((!0 === i || !u || !p(h, u)) && (x.data(this.container, "select2-last-term", h),
            !0 === i || !1 !== this.showSearchInput && this.opened())) {
                r = ++this.queryCount;
                var d = this.getMaximumSelectionSize();
                if (1 <= d && (t = this.data(),
                x.isArray(t) && t.length >= d && v(l.formatSelectionTooBig, "formatSelectionTooBig")))
                    return void s("<li class='select2-selection-limit'>" + w(l.formatSelectionTooBig, l.element, d) + "</li>");
                if (o.val().length < l.minimumInputLength)
                    return v(l.formatInputTooShort, "formatInputTooShort") ? s("<li class='select2-no-results'>" + w(l.formatInputTooShort, l.element, o.val(), l.minimumInputLength) + "</li>") : s(""),
                    void (i && this.showSearch && this.showSearch(!0));
                if (l.maximumInputLength && o.val().length > l.maximumInputLength)
                    return void (v(l.formatInputTooLong, "formatInputTooLong") ? s("<li class='select2-no-results'>" + w(l.formatInputTooLong, l.element, o.val(), l.maximumInputLength) + "</li>") : s(""));
                l.formatSearching && 0 === this.findHighlightableChoices().length && s("<li class='select2-searching'>" + w(l.formatSearching, l.element) + "</li>"),
                o.addClass("select2-active"),
                this.removeHighlight(),
                (e = this.tokenize()) != b && null != e && o.val(e),
                this.resultsPage = 1,
                l.query({
                    element: l.element,
                    term: o.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: l.matcher,
                    callback: this.bind(function(t) {
                        var e;
                        if (r == this.queryCount) {
                            if (!this.opened())
                                return void this.search.removeClass("select2-active");
                            if (t.hasError !== b && v(l.formatAjaxError, "formatAjaxError"))
                                return void s("<li class='select2-ajax-error'>" + w(l.formatAjaxError, l.element, t.jqXHR, t.textStatus, t.errorThrown) + "</li>");
                            if (this.context = t.context === b ? null : t.context,
                            this.opts.createSearchChoice && "" !== o.val() && ((e = this.opts.createSearchChoice.call(c, o.val(), t.results)) !== b && null !== e && c.id(e) !== b && null !== c.id(e) && 0 === x(t.results).filter(function() {
                                return p(c.id(this), c.id(e))
                            }).length && this.opts.createSearchChoicePosition(t.results, e)),
                            0 === t.results.length && v(l.formatNoMatches, "formatNoMatches"))
                                return void s("<li class='select2-no-results'>" + w(l.formatNoMatches, l.element, o.val()) + "</li>");
                            a.empty(),
                            c.opts.populateResults.call(this, a, t.results, {
                                term: o.val(),
                                page: this.resultsPage,
                                context: null
                            }),
                            !0 === t.more && v(l.formatLoadMore, "formatLoadMore") && (a.append("<li class='select2-more-results'>" + l.escapeMarkup(w(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"),
                            window.setTimeout(function() {
                                c.loadMoreIfNeeded()
                            }, 10)),
                            this.postprocessResults(t, i),
                            n(),
                            this.opts.element.trigger({
                                type: "select2-loaded",
                                items: t
                            })
                        }
                    })
                })
            }
        },
        cancel: function() {
            this.close()
        },
        blur: function() {
            this.opts.selectOnBlur && this.selectHighlighted({
                noFocus: !0
            }),
            this.close(),
            this.container.removeClass("select2-container-active"),
            this.search[0] === document.activeElement && this.search.blur(),
            this.clearSearch(),
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
        },
        focusSearch: function() {
            var n;
            (n = this.search)[0] !== document.activeElement && window.setTimeout(function() {
                var t, e = n[0], i = n.val().length;
                n.focus(),
                (0 < e.offsetWidth || 0 < e.offsetHeight) && e === document.activeElement && (e.setSelectionRange ? e.setSelectionRange(i, i) : e.createTextRange && ((t = e.createTextRange()).collapse(!1),
                t.select()))
            }, 0)
        },
        selectHighlighted: function(t) {
            var e, i;
            this._touchMoved ? this.clearTouchMoved() : (e = this.highlight(),
            (i = this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data")) ? (this.highlight(e),
            this.onSelect(i, t)) : t && t.noFocus && this.close())
        },
        getPlaceholder: function() {
            var t;
            return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== b ? t.text() : b)
        },
        getPlaceholderOption: function() {
            if (this.select) {
                var t = this.select.children("option").first();
                if (this.opts.placeholderOption !== b)
                    return "first" === this.opts.placeholderOption && t || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                if ("" === x.trim(t.text()) && "" === t.val())
                    return t
            }
        },
        initContainerWidth: function() {
            var t = function() {
                var t, e, i, n, s;
                if ("off" === this.opts.width)
                    return null;
                if ("element" === this.opts.width)
                    return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                if ("copy" !== this.opts.width && "resolve" !== this.opts.width)
                    return x.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
                if ((t = this.opts.element.attr("style")) !== b)
                    for (n = 0,
                    s = (e = t.split(";")).length; n < s; n += 1)
                        if (null !== (i = e[n].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) && 1 <= i.length)
                            return i[1];
                return "resolve" === this.opts.width ? 0 < (t = this.opts.element.css("width")).indexOf("%") ? t : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
            }
            .call(this);
            null !== t && this.container.css("width", t)
        }
    }),
    _ = e(i, {
        createContainer: function() {
            return x(document.createElement("div")).attr({
                class: "select2-container"
            }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""))
        },
        enableInterface: function() {
            this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
        },
        opening: function() {
            var t, e, i;
            0 <= this.opts.minimumResultsForSearch && this.showSearch(!0),
            this.parent.opening.apply(this, arguments),
            !1 !== this.showSearchInput && this.search.val(this.focusser.val()),
            this.opts.shouldFocusInput(this) && (this.search.focus(),
            (t = this.search.get(0)).createTextRange ? ((e = t.createTextRange()).collapse(!1),
            e.select()) : t.setSelectionRange && (i = this.search.val().length,
            t.setSelectionRange(i, i))),
            "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm),
            this.search.select()),
            this.focusser.prop("disabled", !0).val(""),
            this.updateResults(!0),
            this.opts.element.trigger(x.Event("select2-open"))
        },
        close: function() {
            this.opened() && (this.parent.close.apply(this, arguments),
            this.focusser.prop("disabled", !1),
            this.opts.shouldFocusInput(this) && this.focusser.focus())
        },
        focus: function() {
            this.opened() ? this.close() : (this.focusser.prop("disabled", !1),
            this.opts.shouldFocusInput(this) && this.focusser.focus())
        },
        isFocused: function() {
            return this.container.hasClass("select2-container-active")
        },
        cancel: function() {
            this.parent.cancel.apply(this, arguments),
            this.focusser.prop("disabled", !1),
            this.opts.shouldFocusInput(this) && this.focusser.focus()
        },
        destroy: function() {
            x("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")),
            this.parent.destroy.apply(this, arguments),
            y.call(this, "selection", "focusser")
        },
        initContainer: function() {
            var e, t, i = this.container, n = this.dropdown, s = S();
            this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0),
            this.selection = e = i.find(".select2-choice"),
            this.focusser = i.find(".select2-focusser"),
            e.find(".select2-chosen").attr("id", "select2-chosen-" + s),
            this.focusser.attr("aria-labelledby", "select2-chosen-" + s),
            this.results.attr("id", "select2-results-" + s),
            this.search.attr("aria-owns", "select2-results-" + s),
            this.focusser.attr("id", "s2id_autogen" + s),
            t = x("label[for='" + this.opts.element.attr("id") + "']"),
            this.opts.element.focus(this.bind(function() {
                this.focus()
            })),
            this.focusser.prev().text(t.text()).attr("for", this.focusser.attr("id"));
            var r = this.opts.element.attr("title");
            this.opts.element.attr("title", r || t.text()),
            this.focusser.attr("tabindex", this.elementTabIndex),
            this.search.attr("id", this.focusser.attr("id") + "_search"),
            this.search.prev().text(x("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")),
            this.search.on("keydown", this.bind(function(t) {
                if (this.isInterfaceEnabled() && 229 != t.keyCode) {
                    if (t.which === E.PAGE_UP || t.which === E.PAGE_DOWN)
                        return void d(t);
                    switch (t.which) {
                    case E.UP:
                    case E.DOWN:
                        return this.moveHighlight(t.which === E.UP ? -1 : 1),
                        void d(t);
                    case E.ENTER:
                        return this.selectHighlighted(),
                        void d(t);
                    case E.TAB:
                        return void this.selectHighlighted({
                            noFocus: !0
                        });
                    case E.ESC:
                        return this.cancel(t),
                        void d(t)
                    }
                }
            })),
            this.search.on("blur", this.bind(function() {
                document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                    this.opened() && this.search.focus()
                }), 0)
            })),
            this.focusser.on("keydown", this.bind(function(t) {
                if (this.isInterfaceEnabled() && t.which !== E.TAB && !E.isControl(t) && !E.isFunctionKey(t) && t.which !== E.ESC) {
                    if (!1 === this.opts.openOnEnter && t.which === E.ENTER)
                        return void d(t);
                    if (t.which == E.DOWN || t.which == E.UP || t.which == E.ENTER && this.opts.openOnEnter) {
                        if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                            return;
                        return this.open(),
                        void d(t)
                    }
                    return t.which == E.DELETE || t.which == E.BACKSPACE ? (this.opts.allowClear && this.clear(),
                    void d(t)) : void 0
                }
            })),
            c(this.focusser),
            this.focusser.on("keyup-change input", this.bind(function(t) {
                if (0 <= this.opts.minimumResultsForSearch) {
                    if (t.stopPropagation(),
                    this.opened())
                        return;
                    this.open()
                }
            })),
            e.on("mousedown touchstart", "abbr", this.bind(function(t) {
                var e;
                this.isInterfaceEnabled() && (this.clear(),
                (e = t).preventDefault(),
                e.stopImmediatePropagation(),
                this.close(),
                this.selection && this.selection.focus())
            })),
            e.on("mousedown touchstart", this.bind(function(t) {
                o(e),
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(x.Event("select2-focus")),
                this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(),
                d(t)
            })),
            n.on("mousedown touchstart", this.bind(function() {
                this.opts.shouldFocusInput(this) && this.search.focus()
            })),
            e.on("focus", this.bind(function(t) {
                d(t)
            })),
            this.focusser.on("focus", this.bind(function() {
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(x.Event("select2-focus")),
                this.container.addClass("select2-container-active")
            })).on("blur", this.bind(function() {
                this.opened() || (this.container.removeClass("select2-container-active"),
                this.opts.element.trigger(x.Event("select2-blur")))
            })),
            this.search.on("focus", this.bind(function() {
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(x.Event("select2-focus")),
                this.container.addClass("select2-container-active")
            })),
            this.initContainerWidth(),
            this.opts.element.hide(),
            this.setPlaceholder()
        },
        clear: function(t) {
            var e = this.selection.data("select2-data");
            if (e) {
                var i = x.Event("select2-clearing");
                if (this.opts.element.trigger(i),
                i.isDefaultPrevented())
                    return;
                var n = this.getPlaceholderOption();
                this.opts.element.val(n ? n.val() : ""),
                this.selection.find(".select2-chosen").empty(),
                this.selection.removeData("select2-data"),
                this.setPlaceholder(),
                !1 !== t && (this.opts.element.trigger({
                    type: "select2-removed",
                    val: this.id(e),
                    choice: e
                }),
                this.triggerChange({
                    removed: e
                }))
            }
        },
        initSelection: function() {
            var e;
            this.isPlaceholderOptionSelected() ? (this.updateSelection(null),
            this.close(),
            this.setPlaceholder()) : (e = this).opts.initSelection.call(null, this.opts.element, function(t) {
                t !== b && null !== t && (e.updateSelection(t),
                e.close(),
                e.setPlaceholder(),
                e.nextSearchTerm = e.opts.nextSearchTerm(t, e.search.val()))
            })
        },
        isPlaceholderOptionSelected: function() {
            var t;
            return this.getPlaceholder() !== b && ((t = this.getPlaceholderOption()) !== b && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val())
        },
        prepareOpts: function() {
            var o = this.parent.prepareOpts.apply(this, arguments)
              , n = this;
            return "select" === o.element.get(0).tagName.toLowerCase() ? o.initSelection = function(t, e) {
                var i = t.find("option").filter(function() {
                    return this.selected && !this.disabled
                });
                e(n.optionToData(i))
            }
            : "data"in o && (o.initSelection = o.initSelection || function(t, e) {
                var s = t.val()
                  , r = null;
                o.query({
                    matcher: function(t, e, i) {
                        var n = p(s, o.id(i));
                        return n && (r = i),
                        n
                    },
                    callback: x.isFunction(e) ? function() {
                        e(r)
                    }
                    : x.noop
                })
            }
            ),
            o
        },
        getPlaceholder: function() {
            return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
        },
        setPlaceholder: function() {
            var t = this.getPlaceholder();
            if (this.isPlaceholderOptionSelected() && t !== b) {
                if (this.select && this.getPlaceholderOption() === b)
                    return;
                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)),
                this.selection.addClass("select2-default"),
                this.container.removeClass("select2-allowclear")
            }
        },
        postprocessResults: function(t, e, i) {
            var n, s = 0, r = this;
            this.findHighlightableChoices().each2(function(t, e) {
                return p(r.id(e.data("select2-data")), r.opts.element.val()) ? (s = t,
                !1) : void 0
            }),
            !1 !== i && (!0 === e && 0 <= s ? this.highlight(s) : this.highlight(0)),
            !0 === e && 0 <= (n = this.opts.minimumResultsForSearch) && this.showSearch(function i(t) {
                var n = 0;
                return x.each(t, function(t, e) {
                    e.children ? n += i(e.children) : n++
                }),
                n
            }(t.results) >= n)
        },
        showSearch: function(t) {
            this.showSearchInput !== t && (this.showSearchInput = t,
            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t),
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t),
            x(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
        },
        onSelect: function(t, e) {
            var i, n;
            this.triggerSelect(t) && (i = this.opts.element.val(),
            n = this.data(),
            this.opts.element.val(this.id(t)),
            this.updateSelection(t),
            this.opts.element.trigger({
                type: "select2-selected",
                val: this.id(t),
                choice: t
            }),
            this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()),
            this.close(),
            e && e.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(),
            p(i, this.id(t)) || this.triggerChange({
                added: t,
                removed: n
            }))
        },
        updateSelection: function(t) {
            var e, i, n = this.selection.find(".select2-chosen");
            this.selection.data("select2-data", t),
            n.empty(),
            null !== t && (e = this.opts.formatSelection(t, n, this.opts.escapeMarkup)),
            e !== b && n.append(e),
            (i = this.opts.formatSelectionCssClass(t, n)) !== b && n.addClass(i),
            this.selection.removeClass("select2-default"),
            this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
        },
        val: function() {
            var t, e = !1, i = null, n = this, s = this.data();
            if (0 === arguments.length)
                return this.opts.element.val();
            if (t = arguments[0],
            1 < arguments.length && (e = arguments[1]),
            this.select)
                this.select.val(t).find("option").filter(function() {
                    return this.selected
                }).each2(function(t, e) {
                    return i = n.optionToData(e),
                    !1
                }),
                this.updateSelection(i),
                this.setPlaceholder(),
                e && this.triggerChange({
                    added: i,
                    removed: s
                });
            else {
                if (!t && 0 !== t)
                    return void this.clear(e);
                if (this.opts.initSelection === b)
                    throw new Error("cannot call val() if initSelection() is not defined");
                this.opts.element.val(t),
                this.opts.initSelection(this.opts.element, function(t) {
                    n.opts.element.val(t ? n.id(t) : ""),
                    n.updateSelection(t),
                    n.setPlaceholder(),
                    e && n.triggerChange({
                        added: t,
                        removed: s
                    })
                })
            }
        },
        clearSearch: function() {
            this.search.val(""),
            this.focusser.val("")
        },
        data: function(t) {
            var e, i = !1;
            return 0 === arguments.length ? ((e = this.selection.data("select2-data")) == b && (e = null),
            e) : (1 < arguments.length && (i = arguments[1]),
            void (t ? (e = this.data(),
            this.opts.element.val(t ? this.id(t) : ""),
            this.updateSelection(t),
            i && this.triggerChange({
                added: t,
                removed: e
            })) : this.clear(i)))
        }
    }),
    T = e(i, {
        createContainer: function() {
            return x(document.createElement("div")).attr({
                class: "select2-container select2-container-multi"
            }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""))
        },
        prepareOpts: function() {
            var l = this.parent.prepareOpts.apply(this, arguments)
              , n = this;
            return "select" === l.element.get(0).tagName.toLowerCase() ? l.initSelection = function(t, e) {
                var i = [];
                t.find("option").filter(function() {
                    return this.selected && !this.disabled
                }).each2(function(t, e) {
                    i.push(n.optionToData(e))
                }),
                e(i)
            }
            : "data"in l && (l.initSelection = l.initSelection || function(t, r) {
                var o = s(t.val(), l.separator, l.transformVal)
                  , a = [];
                l.query({
                    matcher: function(t, e, i) {
                        var n = x.grep(o, function(t) {
                            return p(t, l.id(i))
                        }).length;
                        return n && a.push(i),
                        n
                    },
                    callback: x.isFunction(r) ? function() {
                        for (var t = [], e = 0; e < o.length; e++)
                            for (var i = o[e], n = 0; n < a.length; n++) {
                                var s = a[n];
                                if (p(i, l.id(s))) {
                                    t.push(s),
                                    a.splice(n, 1);
                                    break
                                }
                            }
                        r(t)
                    }
                    : x.noop
                })
            }
            ),
            l
        },
        selectChoice: function(t) {
            var e = this.container.find(".select2-search-choice-focus");
            e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e),
            e.removeClass("select2-search-choice-focus"),
            t && t.length && (this.close(),
            t.addClass("select2-search-choice-focus"),
            this.opts.element.trigger("choice-selected", t)))
        },
        destroy: function() {
            x("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")),
            this.parent.destroy.apply(this, arguments),
            y.call(this, "searchContainer", "selection")
        },
        initContainer: function() {
            var h, t = ".select2-choices";
            this.searchContainer = this.container.find(".select2-search-field"),
            this.selection = h = this.container.find(t);
            var e = this;
            this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                e.search[0].focus(),
                e.selectChoice(x(this))
            }),
            this.search.attr("id", "s2id_autogen" + S()),
            this.search.prev().text(x("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")),
            this.opts.element.focus(this.bind(function() {
                this.focus()
            })),
            this.search.on("input paste", this.bind(function() {
                this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
            })),
            this.search.attr("tabindex", this.elementTabIndex),
            this.keydowns = 0,
            this.search.on("keydown", this.bind(function(t) {
                if (this.isInterfaceEnabled()) {
                    ++this.keydowns;
                    var e = h.find(".select2-search-choice-focus")
                      , i = e.prev(".select2-search-choice:not(.select2-locked)")
                      , n = e.next(".select2-search-choice:not(.select2-locked)")
                      , s = (o = this.search,
                    c = l = 0,
                    "selectionStart"in (o = x(o)[0]) ? (l = o.selectionStart,
                    c = o.selectionEnd - l) : "selection"in document && (o.focus(),
                    a = document.selection.createRange(),
                    c = document.selection.createRange().text.length,
                    a.moveStart("character", -o.value.length),
                    l = a.text.length - c),
                    {
                        offset: l,
                        length: c
                    });
                    if (e.length && (t.which == E.LEFT || t.which == E.RIGHT || t.which == E.BACKSPACE || t.which == E.DELETE || t.which == E.ENTER)) {
                        var r = e;
                        return t.which == E.LEFT && i.length ? r = i : t.which == E.RIGHT ? r = n.length ? n : null : t.which === E.BACKSPACE ? this.unselect(e.first()) && (this.search.width(10),
                        r = i.length ? i : n) : t.which == E.DELETE ? this.unselect(e.first()) && (this.search.width(10),
                        r = n.length ? n : null) : t.which == E.ENTER && (r = null),
                        this.selectChoice(r),
                        d(t),
                        void (r && r.length || this.open())
                    }
                    if ((t.which === E.BACKSPACE && 1 == this.keydowns || t.which == E.LEFT) && 0 == s.offset && !s.length)
                        return this.selectChoice(h.find(".select2-search-choice:not(.select2-locked)").last()),
                        void d(t);
                    if (this.selectChoice(null),
                    this.opened())
                        switch (t.which) {
                        case E.UP:
                        case E.DOWN:
                            return this.moveHighlight(t.which === E.UP ? -1 : 1),
                            void d(t);
                        case E.ENTER:
                            return this.selectHighlighted(),
                            void d(t);
                        case E.TAB:
                            return this.selectHighlighted({
                                noFocus: !0
                            }),
                            void this.close();
                        case E.ESC:
                            return this.cancel(t),
                            void d(t)
                        }
                    if (t.which !== E.TAB && !E.isControl(t) && !E.isFunctionKey(t) && t.which !== E.BACKSPACE && t.which !== E.ESC) {
                        if (t.which === E.ENTER) {
                            if (!1 === this.opts.openOnEnter)
                                return;
                            if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                                return
                        }
                        this.open(),
                        t.which !== E.PAGE_UP && t.which !== E.PAGE_DOWN || d(t),
                        t.which === E.ENTER && d(t)
                    }
                }
                var o, a, l, c
            })),
            this.search.on("keyup", this.bind(function() {
                this.keydowns = 0,
                this.resizeSearch()
            })),
            this.search.on("blur", this.bind(function(t) {
                this.container.removeClass("select2-container-active"),
                this.search.removeClass("select2-focused"),
                this.selectChoice(null),
                this.opened() || this.clearSearch(),
                t.stopImmediatePropagation(),
                this.opts.element.trigger(x.Event("select2-blur"))
            })),
            this.container.on("click", t, this.bind(function(t) {
                this.isInterfaceEnabled() && (0 < x(t.target).closest(".select2-search-choice").length || (this.selectChoice(null),
                this.clearPlaceholder(),
                this.container.hasClass("select2-container-active") || this.opts.element.trigger(x.Event("select2-focus")),
                this.open(),
                this.focusSearch(),
                t.preventDefault()))
            })),
            this.container.on("focus", t, this.bind(function() {
                this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(x.Event("select2-focus")),
                this.container.addClass("select2-container-active"),
                this.dropdown.addClass("select2-drop-active"),
                this.clearPlaceholder())
            })),
            this.initContainerWidth(),
            this.opts.element.hide(),
            this.clearSearch()
        },
        enableInterface: function() {
            this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
        },
        initSelection: function() {
            var e;
            "" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]),
            this.close(),
            this.clearSearch()),
            !this.select && "" === this.opts.element.val() || (e = this).opts.initSelection.call(null, this.opts.element, function(t) {
                t !== b && null !== t && (e.updateSelection(t),
                e.close(),
                e.clearSearch())
            })
        },
        clearSearch: function() {
            var t = this.getPlaceholder()
              , e = this.getMaxSearchWidth();
            t !== b && 0 === this.getVal().length && !1 === this.search.hasClass("select2-focused") ? (this.search.val(t).addClass("select2-default"),
            this.search.width(0 < e ? e : this.container.css("width"))) : this.search.val("").width(10)
        },
        clearPlaceholder: function() {
            this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
        },
        opening: function() {
            this.clearPlaceholder(),
            this.resizeSearch(),
            this.parent.opening.apply(this, arguments),
            this.focusSearch(),
            "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm),
            this.search.select()),
            this.updateResults(!0),
            this.opts.shouldFocusInput(this) && this.search.focus(),
            this.opts.element.trigger(x.Event("select2-open"))
        },
        close: function() {
            this.opened() && this.parent.close.apply(this, arguments)
        },
        focus: function() {
            this.close(),
            this.search.focus()
        },
        isFocused: function() {
            return this.search.hasClass("select2-focused")
        },
        updateSelection: function(t) {
            var e = []
              , i = []
              , n = this;
            x(t).each(function() {
                h(n.id(this), e) < 0 && (e.push(n.id(this)),
                i.push(this))
            }),
            t = i,
            this.selection.find(".select2-search-choice").remove(),
            x(t).each(function() {
                n.addSelectedChoice(this)
            }),
            n.postprocessResults()
        },
        tokenize: function() {
            var t = this.search.val();
            null != (t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts)) && t != b && (this.search.val(t),
            0 < t.length && this.open())
        },
        onSelect: function(t, e) {
            this.triggerSelect(t) && "" !== t.text && (this.addSelectedChoice(t),
            this.opts.element.trigger({
                type: "selected",
                val: this.id(t),
                choice: t
            }),
            this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()),
            this.clearSearch(),
            this.updateResults(),
            !this.select && this.opts.closeOnSelect || this.postprocessResults(t, !1, !0 === this.opts.closeOnSelect),
            !this.opts.closeOnSelect && 0 < this.countSelectableResults() ? (this.search.width(10),
            this.resizeSearch(),
            0 < this.getMaximumSelectionSize() && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm),
            this.updateResults(),
            this.search.select()),
            this.positionDropdown()) : (this.close(),
            this.search.width(10)),
            this.triggerChange({
                added: t
            }),
            e && e.noFocus || this.focusSearch())
        },
        cancel: function() {
            this.close(),
            this.focusSearch()
        },
        addSelectedChoice: function(t) {
            var e, i = !t.locked, n = x("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"), s = x("<li class='select2-search-choice select2-locked'><div></div></li>"), r = i ? n : s, o = this.id(t), a = this.getVal(), l = this.opts.formatSelection(t, r.find("div"), this.opts.escapeMarkup);
            l != b && r.find("div").replaceWith(x("<div></div>").html(l)),
            (e = this.opts.formatSelectionCssClass(t, r.find("div"))) != b && r.addClass(e),
            i && r.find(".select2-search-choice-close").on("mousedown", d).on("click dblclick", this.bind(function(t) {
                this.isInterfaceEnabled() && (this.unselect(x(t.target)),
                this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
                d(t),
                this.close(),
                this.focusSearch())
            })).on("focus", this.bind(function() {
                this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"),
                this.dropdown.addClass("select2-drop-active"))
            })),
            r.data("select2-data", t),
            r.insertBefore(this.searchContainer),
            a.push(o),
            this.setVal(a)
        },
        unselect: function(t) {
            var e, i, n = this.getVal();
            if (0 === (t = t.closest(".select2-search-choice")).length)
                throw "Invalid argument: " + t + ". Must be .select2-search-choice";
            if (e = t.data("select2-data")) {
                var s = x.Event("select2-removing");
                if (s.val = this.id(e),
                s.choice = e,
                this.opts.element.trigger(s),
                s.isDefaultPrevented())
                    return !1;
                for (; 0 <= (i = h(this.id(e), n)); )
                    n.splice(i, 1),
                    this.setVal(n),
                    this.select && this.postprocessResults();
                return t.remove(),
                this.opts.element.trigger({
                    type: "select2-removed",
                    val: this.id(e),
                    choice: e
                }),
                this.triggerChange({
                    removed: e
                }),
                !0
            }
        },
        postprocessResults: function(t, e, i) {
            var n = this.getVal()
              , s = this.results.find(".select2-result")
              , r = this.results.find(".select2-result-with-children")
              , o = this;
            s.each2(function(t, e) {
                0 <= h(o.id(e.data("select2-data")), n) && (e.addClass("select2-selected"),
                e.find(".select2-result-selectable").addClass("select2-selected"))
            }),
            r.each2(function(t, e) {
                e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
            }),
            -1 == this.highlight() && !1 !== i && !0 === this.opts.closeOnSelect && o.highlight(0),
            !this.opts.createSearchChoice && 0 < !s.filter(".select2-result:not(.select2-selected)").length && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && v(o.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + w(o.opts.formatNoMatches, o.opts.element, o.search.val()) + "</li>")
        },
        getMaxSearchWidth: function() {
            return this.selection.width() - l(this.search)
        },
        resizeSearch: function() {
            var t, e, i, n, s, r, o = l(this.search);
            s = this.search,
            C || (r = s[0].currentStyle || window.getComputedStyle(s[0], null),
            (C = x(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: r.fontSize,
                fontFamily: r.fontFamily,
                fontStyle: r.fontStyle,
                fontWeight: r.fontWeight,
                letterSpacing: r.letterSpacing,
                textTransform: r.textTransform,
                whiteSpace: "nowrap"
            })).attr("class", "select2-sizer"),
            x(document.body).append(C)),
            C.text(s.val()),
            t = C.width() + 10,
            e = this.search.offset().left,
            (n = (i = this.selection.width()) - (e - this.selection.offset().left) - o) < t && (n = i - o),
            n < 40 && (n = i - o),
            n <= 0 && (n = t),
            this.search.width(Math.floor(n))
        },
        getVal: function() {
            var t;
            return this.select ? null === (t = this.select.val()) ? [] : t : s(t = this.opts.element.val(), this.opts.separator, this.opts.transformVal)
        },
        setVal: function(t) {
            var e;
            this.select ? this.select.val(t) : (e = [],
            x(t).each(function() {
                h(this, e) < 0 && e.push(this)
            }),
            this.opts.element.val(0 === e.length ? "" : e.join(this.opts.separator)))
        },
        buildChangeDetails: function(t, e) {
            for (var e = e.slice(0), t = t.slice(0), i = 0; i < e.length; i++)
                for (var n = 0; n < t.length; n++)
                    p(this.opts.id(e[i]), this.opts.id(t[n])) && (e.splice(i, 1),
                    0 < i && i--,
                    t.splice(n, 1),
                    n--);
            return {
                added: e,
                removed: t
            }
        },
        val: function(t, i) {
            var n, s = this;
            if (0 === arguments.length)
                return this.getVal();
            if ((n = this.data()).length || (n = []),
            !t && 0 !== t)
                return this.opts.element.val(""),
                this.updateSelection([]),
                this.clearSearch(),
                void (i && this.triggerChange({
                    added: this.data(),
                    removed: n
                }));
            if (this.setVal(t),
            this.select)
                this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                i && this.triggerChange(this.buildChangeDetails(n, this.data()));
            else {
                if (this.opts.initSelection === b)
                    throw new Error("val() cannot be called if initSelection() is not defined");
                this.opts.initSelection(this.opts.element, function(t) {
                    var e = x.map(t, s.id);
                    s.setVal(e),
                    s.updateSelection(t),
                    s.clearSearch(),
                    i && s.triggerChange(s.buildChangeDetails(n, s.data()))
                })
            }
            this.clearSearch()
        },
        onSortStart: function() {
            if (this.select)
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            this.search.width(0),
            this.searchContainer.hide()
        },
        onSortEnd: function() {
            var t = []
              , e = this;
            this.searchContainer.show(),
            this.searchContainer.appendTo(this.searchContainer.parent()),
            this.resizeSearch(),
            this.selection.find(".select2-search-choice").each(function() {
                t.push(e.opts.id(x(this).data("select2-data")))
            }),
            this.setVal(t),
            this.triggerChange()
        },
        data: function(t, e) {
            var i, n, s = this;
            return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                return x(this).data("select2-data")
            }).get() : (n = this.data(),
            t = t || [],
            i = x.map(t, function(t) {
                return s.opts.id(t)
            }),
            this.setVal(i),
            this.updateSelection(t),
            this.clearSearch(),
            void (e && this.triggerChange(this.buildChangeDetails(n, this.data()))))
        }
    }),
    x.fn.select2 = function() {
        var t, e, i, n, s, r = Array.prototype.slice.call(arguments, 0), o = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], a = ["opened", "isFocused", "container", "dropdown"], l = ["val", "data"], c = {
            search: "externalSearch"
        };
        return this.each(function() {
            if (0 === r.length || "object" == typeof r[0])
                (t = 0 === r.length ? {} : x.extend({}, r[0])).element = x(this),
                "select" === t.element.get(0).tagName.toLowerCase() ? s = t.element.prop("multiple") : (s = t.multiple || !1,
                "tags"in t && (t.multiple = s = !0)),
                (e = s ? new window.Select2.class.multi : new window.Select2.class.single).init(t);
            else {
                if ("string" != typeof r[0])
                    throw "Invalid arguments to select2 plugin: " + r;
                if (h(r[0], o) < 0)
                    throw "Unknown method: " + r[0];
                if (n = b,
                (e = x(this).data("select2")) === b)
                    return;
                if (i = r[0],
                n = "container" === i ? e.container : "dropdown" === i ? e.dropdown : (c[i] && (i = c[i]),
                e[i].apply(e, r.slice(1))),
                0 <= h(r[0], a) || 0 <= h(r[0], l) && 1 == r.length)
                    return !1
            }
        }),
        n === b ? this : n
    }
    ,
    x.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: !0,
        openOnEnter: !0,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(t, e, i, n) {
            var s = [];
            return r(this.text(t), i.term, s, n),
            s.join("")
        },
        transformVal: function(t) {
            return x.trim(t)
        },
        formatSelection: function(t, e, i) {
            return t ? i(this.text(t)) : b
        },
        sortResults: function(t) {
            return t
        },
        formatResultCssClass: function(t) {
            return t.css
        },
        formatSelectionCssClass: function() {
            return b
        },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function(t) {
            return t == b ? null : t.id
        },
        text: function(t) {
            return t && this.data && this.data.text ? x.isFunction(this.data.text) ? this.data.text(t) : t[this.data.text] : t.text
        },
        matcher: function(t, e) {
            return 0 <= a("" + e).toUpperCase().indexOf(a("" + t).toUpperCase())
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: function(t, e, i, n) {
            var s, r, o, a, l, c = t, h = !1;
            if (!n.createSearchChoice || !n.tokenSeparators || n.tokenSeparators.length < 1)
                return b;
            for (; ; ) {
                for (r = -1,
                o = 0,
                a = n.tokenSeparators.length; o < a && (l = n.tokenSeparators[o],
                !(0 <= (r = t.indexOf(l)))); o++)
                    ;
                if (r < 0)
                    break;
                if (s = t.substring(0, r),
                t = t.substring(r + l.length),
                0 < s.length && ((s = n.createSearchChoice.call(this, s, e)) !== b && null !== s && n.id(s) !== b && null !== n.id(s))) {
                    for (h = !1,
                    o = 0,
                    a = e.length; o < a; o++)
                        if (p(n.id(s), n.id(e[o]))) {
                            h = !0;
                            break
                        }
                    h || i(s)
                }
            }
            return c !== t ? t : void 0
        },
        escapeMarkup: t,
        blurOnChange: !1,
        selectOnBlur: !1,
        adaptContainerCssClass: function(t) {
            return t
        },
        adaptDropdownCssClass: function() {
            return null
        },
        nextSearchTerm: function() {
            return b
        },
        searchInputPlaceholder: "",
        createSearchChoicePosition: "top",
        shouldFocusInput: function(t) {
            return !("ontouchstart"in window || 0 < navigator.msMaxTouchPoints) || !(t.opts.minimumResultsForSearch < 0)
        }
    },
    x.fn.select2.locales = [],
    x.fn.select2.locales.en = {
        formatMatches: function(t) {
            return 1 === t ? "One result is available, press enter to select it." : t + " results are available, use up and down arrow keys to navigate."
        },
        formatNoMatches: function() {
            return "No matches found"
        },
        formatAjaxError: function() {
            return "Loading failed"
        },
        formatInputTooShort: function(t, e) {
            var i = e - t.length;
            return "Please enter " + i + " or more character" + (1 == i ? "" : "s")
        },
        formatInputTooLong: function(t, e) {
            var i = t.length - e;
            return "Please delete " + i + " character" + (1 == i ? "" : "s")
        },
        formatSelectionTooBig: function(t) {
            return "You can only select " + t + " item" + (1 == t ? "" : "s")
        },
        formatLoadMore: function() {
            return "Loading more results…"
        },
        formatSearching: function() {
            return "Searching…"
        }
    },
    x.extend(x.fn.select2.defaults, x.fn.select2.locales.en),
    x.fn.select2.ajaxDefaults = {
        transport: x.ajax,
        params: {
            type: "GET",
            cache: !1,
            dataType: "json"
        }
    },
    window.Select2 = {
        query: {
            ajax: n,
            local: m,
            tags: g
        },
        util: {
            debounce: u,
            markMatch: r,
            escapeMarkup: t,
            stripDiacritics: a
        },
        class: {
            abstract: i,
            single: _,
            multi: T
        }
    })
}(jQuery),
function(Pt, t, Et) {
    "use strict";
    function At(a, t, n) {
        function o() {
            if (I.initialized) {
                var c, h, u, t, d, p, f, e, i = 0, n = Z.length;
                if (B.old = Pt.extend({}, B),
                j = z ? 0 : $[L.horizontal ? "width" : "height"](),
                Y = q[L.horizontal ? "width" : "height"](),
                X = z ? a : H[L.horizontal ? "outerWidth" : "outerHeight"](),
                Z.length = 0,
                B.start = 0,
                B.end = ne(X - j, 0),
                lt && (i = J.length,
                K = H.children(L.itemSelector),
                J.length = 0,
                h = Ft(H, L.horizontal ? "paddingLeft" : "paddingTop"),
                u = Ft(H, L.horizontal ? "paddingRight" : "paddingBottom"),
                t = "border-box" === Pt(K).css("boxSizing"),
                d = "none" !== K.css("float"),
                p = 0,
                f = K.length - 1,
                X = 0,
                K.each(function(t, e) {
                    var i = Pt(e)
                      , n = i[L.horizontal ? "outerWidth" : "outerHeight"]()
                      , s = Ft(i, L.horizontal ? "marginLeft" : "marginTop")
                      , r = Ft(i, L.horizontal ? "marginRight" : "marginBottom")
                      , o = n + s + r
                      , a = !s || !r
                      , l = {};
                    l.el = e,
                    l.size = a ? n : o,
                    l.half = l.size / 2,
                    l.start = X + (a ? s : 0),
                    l.center = l.start - ie(j / 2 - l.size / 2),
                    l.end = l.start - j + l.size,
                    t || (X += h),
                    X += o,
                    L.horizontal || d || r && s && 0 < t && (X -= se(s, r)),
                    t === f && (l.end += u,
                    X += u,
                    p = a ? r : 0),
                    J.push(l),
                    c = l
                }),
                H[0].style[L.horizontal ? "width" : "height"] = (t ? X : X - h - u) + "px",
                X -= p,
                J.length ? (B.start = J[0][ot ? "center" : "start"],
                B.end = ot ? c.center : j < X ? c.end : B.start) : B.start = B.end = 0),
                B.center = ie(B.end / 2 + B.start / 2),
                v(),
                V.length && 0 < Y && (L.dynamicHandle ? (W = Lt(W = B.start === B.end ? Y : ie(Y * j / X), L.minHandleSize, Y),
                V[0].style[L.horizontal ? "width" : "height"] = W + "px") : W = V[L.horizontal ? "outerWidth" : "outerHeight"](),
                U.end = Y - W,
                Tt || m()),
                !z && 0 < j) {
                    var s = B.start
                      , r = "";
                    if (lt)
                        Pt.each(J, function(t, e) {
                            ot ? Z.push(e.center) : e.start + e.size > s && s <= B.end && (s = e.start,
                            Z.push(s),
                            (s += j) > B.end && s < B.end + j && Z.push(B.end))
                        });
                    else
                        for (; s - j < B.end; )
                            Z.push(s),
                            s += j;
                    if (G[0] && n !== Z.length) {
                        for (var o = 0; o < Z.length; o++)
                            r += L.pageBuilder.call(I, o);
                        (Q = G.html(r).children()).eq(tt.activePage).addClass(L.activeClass)
                    }
                }
                tt.slideeSize = X,
                tt.frameSize = j,
                tt.sbSize = Y,
                tt.handleSize = W,
                lt ? (I.initialized ? (tt.activeItem >= J.length || 0 === i && 0 < J.length) && g(tt.activeItem >= J.length ? J.length - 1 : 0, !i) : (g(L.startAt),
                I[at ? "toCenter" : "toStart"](L.startAt)),
                e = J[tt.activeItem],
                l(at && e ? e.center : Lt(B.dest, B.start, B.end))) : I.initialized ? l(Lt(B.dest, B.start, B.end)) : l(L.startAt, 1),
                M("load")
            }
        }
        function l(t, e, i) {
            var n, s;
            lt && xt.released && !i && (n = u(t),
            s = t > B.start && t < B.end,
            at ? (s && (t = J[n.centerItem].center),
            ot && L.activateMiddle && g(n.centerItem)) : s && (t = J[n.firstItem].start)),
            xt.init && xt.slidee && L.elasticBounds ? t > B.end ? t = B.end + (t - B.end) / 6 : t < B.start && (t = B.start + (t - B.start) / 6) : t = Lt(t, B.start, B.end),
            _t.start = +new Date,
            _t.time = 0,
            _t.from = B.cur,
            _t.to = t,
            _t.delta = t - B.cur,
            _t.tweesing = xt.tweese || xt.init && !xt.slidee,
            _t.immediate = !_t.tweesing && (e || xt.init && xt.slidee || !L.speed),
            xt.tweese = 0,
            t !== B.dest && (B.dest = t,
            M("change"),
            Tt || r()),
            f(),
            v(),
            d(),
            Q[0] && yt.page !== tt.activePage && (yt.page = tt.activePage,
            Q.removeClass(L.activeClass).eq(tt.activePage).addClass(L.activeClass),
            M("activePage", yt.page))
        }
        function r() {
            if (I.initialized) {
                if (!Tt)
                    return Tt = Bt(r),
                    void (xt.released && M("moveStart"));
                _t.immediate ? B.cur = _t.to : _t.tweesing ? (_t.tweeseDelta = _t.to - B.cur,
                Jt(_t.tweeseDelta) < .1 ? B.cur = _t.to : B.cur += _t.tweeseDelta * (xt.released ? L.swingSpeed : L.syncSpeed)) : (_t.time = se(new Date - _t.start, L.speed),
                B.cur = _t.from + _t.delta * jQuery.easing[L.easing](_t.time / L.speed, _t.time, 0, 1, L.speed)),
                _t.to === B.cur ? (B.cur = _t.to,
                xt.tweese = Tt = 0) : Tt = Bt(r),
                M("move"),
                z || (zt ? H[0].style[zt] = $t + (L.horizontal ? "translateX" : "translateY") + "(" + -B.cur + "px)" : H[0].style[L.horizontal ? "left" : "top"] = -ie(B.cur) + "px"),
                !Tt && xt.released && M("moveEnd"),
                m()
            }
        }
        function m() {
            V.length && (U.cur = B.start === B.end ? 0 : ((xt.init && !xt.slidee ? B.dest : B.cur) - B.start) / (B.end - B.start) * U.end,
            U.cur = Lt(ie(U.cur), U.start, U.end),
            yt.hPos !== U.cur && (yt.hPos = U.cur,
            zt ? V[0].style[zt] = $t + (L.horizontal ? "translateX" : "translateY") + "(" + U.cur + "px)" : V[0].style[L.horizontal ? "left" : "top"] = U.cur + "px"))
        }
        function e() {
            bt.speed && B.cur !== (0 < bt.speed ? B.end : B.start) || I.stop(),
            kt = xt.init ? Bt(e) : 0,
            bt.now = +new Date,
            bt.pos = B.cur + (bt.now - bt.lastTime) / 1e3 * bt.speed,
            l(xt.init ? bt.pos : ie(bt.pos)),
            xt.init || B.cur !== B.dest || M("moveEnd"),
            bt.lastTime = bt.now
        }
        function i(t, e, i) {
            if ("boolean" === Ot(e) && (i = e,
            e = Et),
            e === Et)
                l(B[t], i);
            else {
                if (at && "center" !== t)
                    return;
                var n = I.getPos(e);
                n && l(n[t], i, !at)
            }
        }
        function c(t) {
            return null != t ? Rt(t) ? 0 <= t && t < J.length ? t : -1 : K.index(t) : -1
        }
        function h(t) {
            return c(Rt(t) && t < 0 ? t + J.length : t)
        }
        function g(t, e) {
            var i = c(t);
            return !(!lt || i < 0) && (yt.active === i && !e || (K.eq(tt.activeItem).removeClass(L.activeClass),
            K.eq(i).addClass(L.activeClass),
            yt.active = tt.activeItem = i,
            d(),
            M("active", i)),
            i)
        }
        function u(t) {
            t = Lt(Rt(t) ? t : B.dest, B.start, B.end);
            var e = {}
              , i = ot ? 0 : j / 2;
            if (!z)
                for (var n = 0, s = Z.length; n < s; n++) {
                    if (t >= B.end || n === Z.length - 1) {
                        e.activePage = Z.length - 1;
                        break
                    }
                    if (t <= Z[n] + i) {
                        e.activePage = n;
                        break
                    }
                }
            if (lt) {
                for (var r = !1, o = !1, a = !1, l = 0, c = J.length; l < c; l++)
                    if (!1 === r && t <= J[l].start + J[l].half && (r = l),
                    !1 === a && t <= J[l].center + J[l].half && (a = l),
                    l === c - 1 || t <= J[l].end + J[l].half) {
                        o = l;
                        break
                    }
                e.firstItem = Rt(r) ? r : 0,
                e.centerItem = Rt(a) ? a : e.firstItem,
                e.lastItem = Rt(o) ? o : e.centerItem
            }
            return e
        }
        function v(t) {
            Pt.extend(tt, u(t))
        }
        function d() {
            var t, e, i, n = B.dest <= B.start, s = B.dest >= B.end, r = n ? 1 : s ? 2 : 3;
            yt.slideePosState !== r && (yt.slideePosState = r,
            mt.is("button,input") && mt.prop("disabled", n),
            gt.is("button,input") && gt.prop("disabled", s),
            mt.add(dt)[n ? "addClass" : "removeClass"](L.disabledClass),
            gt.add(ut)[s ? "addClass" : "removeClass"](L.disabledClass)),
            yt.fwdbwdState !== r && xt.released && (yt.fwdbwdState = r,
            dt.is("button,input") && dt.prop("disabled", n),
            ut.is("button,input") && ut.prop("disabled", s)),
            lt && (t = 0 === tt.activeItem,
            e = tt.activeItem >= J.length - 1,
            i = t ? 1 : e ? 2 : 3,
            yt.itemsButtonState !== i && (yt.itemsButtonState = i,
            pt.is("button,input") && pt.prop("disabled", t),
            ft.is("button,input") && ft.prop("disabled", e),
            pt[t ? "addClass" : "removeClass"](L.disabledClass),
            ft[e ? "addClass" : "removeClass"](L.disabledClass)))
        }
        function s(t, e, i) {
            var n, s, r;
            t = h(t),
            e = h(e),
            !(-1 < t && -1 < e && t !== e) || i && e === t - 1 || !i && e === t + 1 || (K.eq(t)[i ? "insertAfter" : "insertBefore"](J[e].el),
            n = t < e ? t : i ? e : e - 1,
            s = e < t ? t : i ? e + 1 : e,
            r = e < t,
            t === tt.activeItem ? yt.active = tt.activeItem = i ? r ? e + 1 : e : r ? e : e - 1 : tt.activeItem > n && tt.activeItem < s && (yt.active = tt.activeItem += r ? 1 : -1),
            o())
        }
        function p(t, e) {
            for (var i = 0, n = vt[t].length; i < n; i++)
                if (vt[t][i] === e)
                    return i;
            return -1
        }
        function f() {
            xt.released && !I.isPaused && I.resume()
        }
        function y(t) {
            return ie(Lt(t, U.start, U.end) / U.end * (B.end - B.start)) + B.start
        }
        function _() {
            xt.history[0] = xt.history[1],
            xt.history[1] = xt.history[2],
            xt.history[2] = xt.history[3],
            xt.history[3] = xt.delta
        }
        function b(t) {
            xt.released = 0,
            xt.source = t,
            xt.slidee = "slidee" === t
        }
        function x(t) {
            var e = "touchstart" === t.type
              , i = t.data.source
              , n = "slidee" === i;
            xt.init || !e && S(t.target) || !("handle" !== i || L.dragHandle && U.start !== U.end) || n && !(e ? L.touchDragging : L.mouseDragging && t.which < 2) || (e || Dt(t),
            b(i),
            xt.init = 0,
            xt.$source = Pt(t.target),
            xt.touch = e,
            xt.pointer = e ? t.originalEvent.touches[0] : t,
            xt.initX = xt.pointer.pageX,
            xt.initY = xt.pointer.pageY,
            xt.initPos = n ? B.cur : U.cur,
            xt.start = +new Date,
            xt.time = 0,
            xt.path = 0,
            xt.delta = 0,
            xt.locked = 0,
            xt.history = [0, 0, 0, 0],
            xt.pathToLock = n ? e ? 30 : 10 : 0,
            qt.on(e ? Wt : Yt, w),
            I.pause(1),
            (n ? H : V).addClass(L.draggedClass),
            M("moveStart"),
            n && (St = setInterval(_, 10)))
        }
        function w(t) {
            if (xt.released = "mouseup" === t.type || "touchend" === t.type,
            xt.pointer = xt.touch ? t.originalEvent[xt.released ? "changedTouches" : "touches"][0] : t,
            xt.pathX = xt.pointer.pageX - xt.initX,
            xt.pathY = xt.pointer.pageY - xt.initY,
            xt.path = te(ee(xt.pathX, 2) + ee(xt.pathY, 2)),
            xt.delta = L.horizontal ? xt.pathX : xt.pathY,
            !xt.init) {
                if (!(L.horizontal ? Jt(xt.pathX) > Jt(xt.pathY) : Jt(xt.pathX) < Jt(xt.pathY)))
                    return T();
                xt.init = 1
            }
            Dt(t),
            !xt.locked && xt.path > xt.pathToLock && xt.slidee && (xt.locked = 1,
            xt.$source.on(Gt, Nt)),
            xt.released && (T(),
            L.releaseSwing && xt.slidee && (xt.swing = (xt.delta - xt.history[0]) / 40 * 300,
            xt.delta += xt.swing,
            xt.tweese = 10 < Jt(xt.swing))),
            l(xt.slidee ? ie(xt.initPos - xt.delta) : y(xt.initPos + xt.delta))
        }
        function T() {
            clearInterval(St),
            qt.off(xt.touch ? Wt : Yt, w),
            (xt.slidee ? H : V).removeClass(L.draggedClass),
            setTimeout(function() {
                xt.$source.off(Gt, Nt)
            }),
            I.resume(1),
            B.cur === B.dest && xt.init && M("moveEnd"),
            xt.init = 0
        }
        function S(t) {
            return ~Pt.inArray(t.nodeName, Zt) || Pt(t).is(L.interactive)
        }
        function C() {
            I.stop(),
            qt.off("mouseup", C)
        }
        function k(t) {
            switch (Dt(t),
            this) {
            case ut[0]:
            case dt[0]:
                I.moveBy(ut.is(this) ? L.moveBy : -L.moveBy),
                qt.on("mouseup", C);
                break;
            case pt[0]:
                I.prev();
                break;
            case ft[0]:
                I.next();
                break;
            case mt[0]:
                I.prevPage();
                break;
            case gt[0]:
                I.nextPage()
            }
        }
        function P(t) {
            var e, i, n = +new Date;
            n < re + 300 ? re = n : L.scrollBy && B.start !== B.end && (i = t.originalEvent,
            wt.curDelta = (L.horizontal ? i.deltaY || i.deltaX : i.deltaY) || -i.wheelDelta,
            wt.curDelta /= 1 === i.deltaMode ? 3 : 100,
            e = lt ? (Ht = +new Date,
            wt.last < Ht - wt.resetTime && (wt.delta = 0),
            wt.last = Ht,
            wt.delta += wt.curDelta,
            Jt(wt.delta) < 1 ? wt.finalDelta = 0 : (wt.finalDelta = ie(+wt.delta),
            wt.delta %= 1),
            wt.finalDelta) : wt.curDelta,
            (L.scrollTrap || 0 < e && B.dest < B.end || e < 0 && B.dest > B.start) && Dt(t, 1),
            I.slideBy(L.scrollBy * e))
        }
        function E(t) {
            L.clickBar && t.target === q[0] && (Dt(t),
            l(y((L.horizontal ? t.pageX - q.offset().left : t.pageY - q.offset().top) - W / 2)))
        }
        function A(t) {
            if (L.keyboardNavBy)
                switch (t.which) {
                case L.horizontal ? 37 : 38:
                    Dt(t),
                    I["pages" === L.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case L.horizontal ? 39 : 40:
                    Dt(t),
                    I["pages" === L.keyboardNavBy ? "nextPage" : "next"]()
                }
        }
        function O(t) {
            return S(this) ? void t.stopPropagation() : void (this.parentNode === H[0] && I.activate(this))
        }
        function D() {
            this.parentNode === G[0] && I.activatePage(Q.index(this))
        }
        function N(t) {
            L.pauseOnHover && I["mouseenter" === t.type ? "pause" : "resume"](2)
        }
        function M(t, e) {
            if (vt[t]) {
                for (F = vt[t].length,
                Kt.length = 0,
                R = 0; R < F; R++)
                    Kt.push(vt[t][R]);
                for (R = 0; R < F; R++)
                    Kt[R].call(I, t, e)
            }
        }
        var R, F, L = Pt.extend({}, At.defaults, t), I = this, z = Rt(a), $ = Pt(a), H = $.children().eq(0), j = 0, X = 0, B = {
            start: 0,
            center: 0,
            end: 0,
            cur: 0,
            dest: 0
        }, q = Pt(L.scrollBar).eq(0), V = q.children().eq(0), Y = 0, W = 0, U = {
            start: 0,
            end: 0,
            cur: 0
        }, G = Pt(L.pagesBar), Q = 0, Z = [], K = 0, J = [], tt = {
            firstItem: 0,
            lastItem: 0,
            centerItem: 0,
            activeItem: -1,
            activePage: 0
        }, et = new It($[0]), it = new It(H[0]), nt = new It(q[0]), st = new It(V[0]), rt = "basic" === L.itemNav, ot = "forceCentered" === L.itemNav, at = "centered" === L.itemNav || ot, lt = !z && (rt || at || ot), ct = L.scrollSource ? Pt(L.scrollSource) : $, ht = L.dragSource ? Pt(L.dragSource) : $, ut = Pt(L.forward), dt = Pt(L.backward), pt = Pt(L.prev), ft = Pt(L.next), mt = Pt(L.prevPage), gt = Pt(L.nextPage), vt = {}, yt = {}, _t = {}, bt = {}, xt = {
            released: 1
        }, wt = {
            last: 0,
            delta: 0,
            resetTime: 200
        }, Tt = 0, St = 0, Ct = 0, kt = 0;
        z || (a = $[0]),
        I.initialized = 0,
        I.frame = a,
        I.slidee = H[0],
        I.pos = B,
        I.rel = tt,
        I.items = J,
        I.pages = Z,
        I.isPaused = 0,
        I.options = L,
        I.dragging = xt,
        I.reload = o,
        I.getPos = function(t) {
            if (lt) {
                var e = c(t);
                return -1 !== e && J[e]
            }
            var i = H.find(t).eq(0);
            if (i[0]) {
                var n = L.horizontal ? i.offset().left - H.offset().left : i.offset().top - H.offset().top
                  , s = i[L.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: n,
                    center: n - j / 2 + s / 2,
                    end: n - j + s,
                    size: s
                }
            }
            return !1
        }
        ,
        I.moveBy = function(t) {
            bt.speed = t,
            !xt.init && bt.speed && B.cur !== (0 < bt.speed ? B.end : B.start) && (bt.lastTime = +new Date,
            bt.startPos = B.cur,
            b("button"),
            xt.init = 1,
            M("moveStart"),
            Xt(kt),
            e())
        }
        ,
        I.stop = function() {
            "button" === xt.source && (xt.init = 0,
            xt.released = 1)
        }
        ,
        I.prev = function() {
            I.activate(tt.activeItem - 1)
        }
        ,
        I.next = function() {
            I.activate(tt.activeItem + 1)
        }
        ,
        I.prevPage = function() {
            I.activatePage(tt.activePage - 1)
        }
        ,
        I.nextPage = function() {
            I.activatePage(tt.activePage + 1)
        }
        ,
        I.slideBy = function(t, e) {
            t && (lt ? I[at ? "toCenter" : "toStart"](Lt((at ? tt.centerItem : tt.firstItem) + L.scrollBy * t, 0, J.length)) : l(B.dest + t, e))
        }
        ,
        I.slideTo = function(t, e) {
            l(t, e)
        }
        ,
        I.toStart = function(t, e) {
            i("start", t, e)
        }
        ,
        I.toEnd = function(t, e) {
            i("end", t, e)
        }
        ,
        I.toCenter = function(t, e) {
            i("center", t, e)
        }
        ,
        I.getIndex = c,
        I.activate = function(t, e) {
            var i = g(t);
            L.smart && !1 !== i && (at ? I.toCenter(i, e) : i >= tt.lastItem ? I.toStart(i, e) : i <= tt.firstItem ? I.toEnd(i, e) : f())
        }
        ,
        I.activatePage = function(t, e) {
            Rt(t) && l(Z[Lt(t, 0, Z.length - 1)], e)
        }
        ,
        I.resume = function(t) {
            !L.cycleBy || !L.cycleInterval || "items" === L.cycleBy && !J[0] || t < I.isPaused || (I.isPaused = 0,
            Ct ? Ct = clearTimeout(Ct) : M("resume"),
            Ct = setTimeout(function() {
                switch (M("cycle"),
                L.cycleBy) {
                case "items":
                    I.activate(tt.activeItem >= J.length - 1 ? 0 : tt.activeItem + 1);
                    break;
                case "pages":
                    I.activatePage(tt.activePage >= Z.length - 1 ? 0 : tt.activePage + 1)
                }
            }, L.cycleInterval))
        }
        ,
        I.pause = function(t) {
            t < I.isPaused || (I.isPaused = t || 100,
            Ct && (Ct = clearTimeout(Ct),
            M("pause")))
        }
        ,
        I.toggle = function() {
            I[Ct ? "pause" : "resume"]()
        }
        ,
        I.set = function(t, e) {
            Pt.isPlainObject(t) ? Pt.extend(L, t) : L.hasOwnProperty(t) && (L[t] = e)
        }
        ,
        I.add = function(t, e) {
            var i = Pt(t);
            lt ? (null == e || !J[0] || e >= J.length ? i.appendTo(H) : J.length && i.insertBefore(J[e].el),
            e <= tt.activeItem && (yt.active = tt.activeItem += i.length)) : H.append(i),
            o()
        }
        ,
        I.remove = function(t) {
            var e, i;
            lt ? -1 < (e = h(t)) && (K.eq(e).remove(),
            i = e === tt.activeItem,
            e < tt.activeItem && (yt.active = --tt.activeItem),
            o(),
            i && (yt.active = null,
            I.activate(tt.activeItem))) : (Pt(t).remove(),
            o())
        }
        ,
        I.moveAfter = function(t, e) {
            s(t, e, 1)
        }
        ,
        I.moveBefore = function(t, e) {
            s(t, e)
        }
        ,
        I.on = function(t, e) {
            if ("object" === Ot(t))
                for (var i in t)
                    t.hasOwnProperty(i) && I.on(i, t[i]);
            else if ("function" === Ot(e))
                for (var n = t.split(" "), s = 0, r = n.length; s < r; s++)
                    vt[n[s]] = vt[n[s]] || [],
                    -1 === p(n[s], e) && vt[n[s]].push(e);
            else if ("array" === Ot(e))
                for (var o = 0, a = e.length; o < a; o++)
                    I.on(t, e[o])
        }
        ,
        I.one = function(e, i) {
            I.on(e, function t() {
                i.apply(I, arguments),
                I.off(e, t)
            })
        }
        ,
        I.off = function(t, e) {
            if (e instanceof Array)
                for (var i = 0, n = e.length; i < n; i++)
                    I.off(t, e[i]);
            else
                for (var s = t.split(" "), r = 0, o = s.length; r < o; r++) {
                    var a;
                    vt[s[r]] = vt[s[r]] || [],
                    null == e ? vt[s[r]].length = 0 : -1 !== (a = p(s[r], e)) && vt[s[r]].splice(a, 1)
                }
        }
        ,
        I.destroy = function() {
            return qt.add(ct).add(V).add(q).add(G).add(ut).add(dt).add(pt).add(ft).add(mt).add(gt).unbind("." + jt),
            pt.add(ft).add(mt).add(gt).removeClass(L.disabledClass),
            K && K.eq(tt.activeItem).removeClass(L.activeClass),
            G.empty(),
            z || ($.unbind("." + jt),
            et.restore(),
            it.restore(),
            nt.restore(),
            st.restore(),
            Pt.removeData(a, jt)),
            J.length = Z.length = 0,
            yt = {},
            I.initialized = 0,
            I
        }
        ,
        I.init = function() {
            if (!I.initialized) {
                I.on(n);
                var t = ["overflow", "position"]
                  , e = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                et.save.apply(et, t),
                nt.save.apply(nt, t),
                it.save.apply(it, e),
                st.save.apply(st, e);
                var i = V;
                return z || (i = i.add(H),
                $.css("overflow", "hidden"),
                zt || "static" !== $.css("position") || $.css("position", "relative")),
                zt ? $t && i.css(zt, $t) : ("static" === q.css("position") && q.css("position", "relative"),
                i.css({
                    position: "absolute"
                })),
                L.forward && ut.on(Qt, k),
                L.backward && dt.on(Qt, k),
                L.prev && pt.on(Gt, k),
                L.next && ft.on(Gt, k),
                L.prevPage && mt.on(Gt, k),
                L.nextPage && gt.on(Gt, k),
                ct.on(Ut, P),
                q[0] && q.on(Gt, E),
                lt && L.activateOn && $.on(L.activateOn + "." + jt, "*", O),
                G[0] && L.activatePageOn && G.on(L.activatePageOn + "." + jt, "*", D),
                ht.on(Vt, {
                    source: "slidee"
                }, x),
                V && V.on(Vt, {
                    source: "handle"
                }, x),
                qt.bind("keydown." + jt, A),
                z || ($.on("mouseenter." + jt + " mouseleave." + jt, N),
                $.on("scroll." + jt, Mt)),
                I.initialized = 1,
                o(),
                L.cycleBy && !z && I[L.startPaused ? "pause" : "resume"](),
                I
            }
        }
    }
    function Ot(t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
    }
    function Dt(t, e) {
        t.preventDefault(),
        e && t.stopPropagation()
    }
    function Nt(t) {
        Dt(t, 1),
        Pt(this).off(t.type, Nt)
    }
    function Mt() {
        this.scrollLeft = 0,
        this.scrollTop = 0
    }
    function Rt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }
    function Ft(t, e) {
        return 0 | ie(String(t.css(e)).replace(/[^\-0-9.]/g, ""))
    }
    function Lt(t, e, i) {
        return t < e ? e : i < t ? i : t
    }
    function It(e) {
        var i = {
            style: {},
            save: function() {
                if (e) {
                    for (var t = 0; t < arguments.length; t++)
                        i.style[arguments[t]] = e.style[arguments[t]];
                    return i
                }
            },
            restore: function() {
                if (e) {
                    for (var t in i.style)
                        i.style.hasOwnProperty(t) && (e.style[t] = i.style[t]);
                    return i
                }
            }
        };
        return i
    }
    var zt, $t, Ht, s, r, jt = "sly", Xt = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, Bt = t.requestAnimationFrame, qt = Pt(document), Vt = "touchstart." + jt + " mousedown." + jt, Yt = "mousemove." + jt + " mouseup." + jt, Wt = "touchmove." + jt + " touchend." + jt, Ut = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + jt, Gt = "click." + jt, Qt = "mousedown." + jt, Zt = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"], Kt = [], Jt = Math.abs, te = Math.sqrt, ee = Math.pow, ie = Math.round, ne = Math.max, se = Math.min, re = 0;
    function e(t) {
        for (var e = 0, i = s.length; e < i; e++) {
            var n = s[e] ? s[e] + t.charAt(0).toUpperCase() + t.slice(1) : t;
            if (null != r.style[n])
                return n
        }
    }
    qt.on(Ut, function() {
        re = +new Date
    }),
    function(e) {
        Bt = e.requestAnimationFrame || e.webkitRequestAnimationFrame || function(t) {
            var e = (new Date).getTime()
              , i = Math.max(0, 16 - (e - s))
              , n = setTimeout(t, i);
            return s = e,
            n
        }
        ;
        var s = (new Date).getTime()
          , i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.clearTimeout;
        Xt = function(t) {
            i.call(e, t)
        }
    }(window),
    s = ["", "webkit", "moz", "ms", "o"],
    r = document.createElement("div"),
    zt = e("transform"),
    $t = e("perspective") ? "translateZ(0) " : "",
    t.Sly = At,
    Pt.fn.sly = function(n, s) {
        var r, o;
        return Pt.isPlainObject(n) || ("string" !== Ot(n) && !1 !== n || (r = !1 === n ? "destroy" : n,
        o = Array.prototype.slice.call(arguments, 1)),
        n = {}),
        this.each(function(t, e) {
            var i = Pt.data(e, jt);
            i || r ? i && r && i[r] && i[r].apply(i, o) : i = Pt.data(e, jt, new At(e,n,s).init())
        })
    }
    ,
    At.defaults = {
        horizontal: !1,
        itemNav: null,
        itemSelector: null,
        smart: !1,
        activateOn: null,
        activateMiddle: !1,
        scrollSource: null,
        scrollBy: 0,
        scrollHijack: 300,
        scrollTrap: !1,
        dragSource: null,
        mouseDragging: !1,
        touchDragging: !1,
        releaseSwing: !1,
        swingSpeed: .2,
        elasticBounds: !1,
        interactive: null,
        scrollBar: null,
        dragHandle: !1,
        dynamicHandle: !1,
        minHandleSize: 50,
        clickBar: !1,
        syncSpeed: .5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function(t) {
            return "<li>" + (t + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5e3,
        pauseOnHover: !1,
        startPaused: !1,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: 0,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
}(jQuery, window),
function(h) {
    var e = {
        columns: 2,
        direction: "vertical",
        itemsSelector: "li",
        containerTag: "div",
        containerClass: "list-container",
        columnTag: "ul",
        columnClass: "list-column",
        columnFirstClass: "list-column_first",
        columnLastClass: "list-column_last",
        columnAllowEmpty: !1
    };
    h.fn.splitter = function(t) {
        var l = h.extend(e, t)
          , c = h([]);
        return this.each(function() {
            var s, t = h(this), r = t.children(l.itemsSelector), o = r.length, e = h("<" + l.columnTag + "/>", {
                class: l.columnClass
            }), i = h("<" + l.containerTag + "/>", {
                class: l.containerClass
            });
            function n() {
                s = i.children()
            }
            for (var a = 0; a < l.columns; a++)
                i.append(e.clone());
            n(),
            "horizontal" == l.direction ? r.each(function(t) {
                s.eq(t % l.columns).append(h(this).clone())
            }) : function() {
                for (var t = Math.ceil(o / l.columns), e = 0, i = 0; i < o; i += t) {
                    var n = r.slice(i, i + t).clone();
                    s.eq(e++).append(n)
                }
            }(),
            l.columnAllowEmpty || (s.filter(":empty").remove(),
            n()),
            s.first().addClass(l.columnFirstClass),
            s.last().addClass(l.columnLastClass),
            t.replaceWith(i),
            c = c.add(i)
        }),
        c
    }
}(jQuery),
function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
}(function(rt) {
    var ot = "left"
      , at = "right"
      , lt = "up"
      , ct = "down"
      , ht = "in"
      , ut = "out"
      , dt = "none"
      , pt = "auto"
      , ft = "swipe"
      , mt = "pinch"
      , gt = "tap"
      , vt = "doubletap"
      , yt = "longtap"
      , _t = "horizontal"
      , bt = "vertical"
      , xt = "all"
      , wt = 10
      , Tt = "start"
      , St = "move"
      , Ct = "end"
      , kt = "cancel"
      , Pt = "ontouchstart"in window
      , Et = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled
      , At = window.navigator.pointerEnabled || window.navigator.msPointerEnabled
      , Ot = "TouchSwipe";
    function n(t, v) {
        var e = Pt || At || !v.fallbackToMouseEvents
          , i = e ? At ? Et ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
          , n = e ? At ? Et ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
          , s = e ? At ? Et ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
          , r = e ? null : "mouseleave"
          , o = At ? Et ? "MSPointerCancel" : "pointercancel" : "touchcancel"
          , y = 0
          , _ = null
          , b = 0
          , x = 0
          , w = 0
          , T = 1
          , S = 0
          , C = 0
          , k = null
          , a = rt(t)
          , P = "start"
          , E = 0
          , A = null
          , l = 0
          , O = 0
          , c = 0
          , h = 0
          , u = 0
          , d = null
          , D = null;
        try {
            a.bind(i, p),
            a.bind(o, g)
        } catch (t) {
            rt.error("events not supported " + i + "," + o + " on jQuery.swipe")
        }
        function p(t) {
            if (!0 !== a.data(Ot + "_intouch") && !(0 < rt(t.target).closest(v.excludedElements, a).length)) {
                var e, i, n = t.originalEvent ? t.originalEvent : t, s = Pt ? n.touches[0] : n;
                return (P = Tt,
                Pt ? E = n.touches.length : t.preventDefault(),
                C = _ = null,
                T = 1,
                S = w = x = b = y = 0,
                A = function() {
                    for (var t = [], e = 0; e <= 5; e++)
                        t.push({
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            },
                            identifier: 0
                        });
                    return t
                }(),
                (i = {})[ot] = et(ot),
                i[at] = et(at),
                i[lt] = et(lt),
                i[ct] = et(ct),
                k = i,
                G(),
                !Pt || E === v.fingers || v.fingers === xt || j() ? (K(0, s),
                l = st(),
                2 == E && (K(1, n.touches[1]),
                x = w = nt(A[0].start, A[1].start)),
                (v.swipeStatus || v.pinchStatus) && (e = F(n, P))) : e = !1,
                !1 === e) ? (F(n, P = kt),
                e) : (v.hold && (D = setTimeout(rt.proxy(function() {
                    a.trigger("hold", [n.target]),
                    v.hold && (e = v.hold.call(a, n, n.target))
                }, this), v.longTapThreshold)),
                Z(!0),
                null)
            }
        }
        function f(t) {
            var e, i, n, s, r, o, a, l, c, h, u, d, p, f, m, g = t.originalEvent ? t.originalEvent : t;
            P === Ct || P === kt || Q() || (i = J(Pt ? g.touches[0] : g),
            O = st(),
            Pt && (E = g.touches.length),
            v.hold && clearTimeout(D),
            P = St,
            2 == E && (0 == x ? (K(1, g.touches[1]),
            x = w = nt(A[0].start, A[1].start)) : (J(g.touches[1]),
            w = nt(A[0].end, A[1].end),
            A[0].end,
            A[1].end,
            C = T < 1 ? ut : ht),
            T = (w / x * 1).toFixed(2),
            S = Math.abs(x - w)),
            E === v.fingers || v.fingers === xt || !Pt || j() ? (p = i.start,
            f = i.end,
            m = function(t, e) {
                var i = t.x - e.x
                  , n = e.y - t.y
                  , s = Math.atan2(n, i)
                  , r = Math.round(180 * s / Math.PI);
                r < 0 && (r = 360 - Math.abs(r));
                return r
            }(p, f),
            function(t, e) {
                if (v.allowPageScroll === dt || j())
                    t.preventDefault();
                else {
                    var i = v.allowPageScroll === pt;
                    switch (e) {
                    case ot:
                        (v.swipeLeft && i || !i && v.allowPageScroll != _t) && t.preventDefault();
                        break;
                    case at:
                        (v.swipeRight && i || !i && v.allowPageScroll != _t) && t.preventDefault();
                        break;
                    case lt:
                        (v.swipeUp && i || !i && v.allowPageScroll != bt) && t.preventDefault();
                        break;
                    case ct:
                        (v.swipeDown && i || !i && v.allowPageScroll != bt) && t.preventDefault()
                    }
                }
            }(t, _ = m <= 45 && 0 <= m || m <= 360 && 315 <= m ? ot : 135 <= m && m <= 225 ? at : 45 < m && m < 135 ? ct : lt),
            u = i.start,
            d = i.end,
            y = Math.round(Math.sqrt(Math.pow(d.x - u.x, 2) + Math.pow(d.y - u.y, 2))),
            b = it(),
            c = _,
            h = y,
            h = Math.max(h, tt(c)),
            k[c].distance = h,
            (v.swipeStatus || v.pinchStatus) && (e = F(g, P)),
            v.triggerOnTouchEnd && !v.triggerOnTouchLeave || (n = !0,
            v.triggerOnTouchLeave && (s = {
                left: (l = (a = rt(a = this)).offset()).left,
                right: l.left + a.outerWidth(),
                top: l.top,
                bottom: l.top + a.outerHeight()
            },
            r = i.end,
            o = s,
            n = r.x > o.left && r.x < o.right && r.y > o.top && r.y < o.bottom),
            !v.triggerOnTouchEnd && n ? P = R(St) : v.triggerOnTouchLeave && !n && (P = R(Ct)),
            P != kt && P != Ct || F(g, P))) : F(g, P = kt),
            !1 === e && F(g, P = kt))
        }
        function m(t) {
            var e = t.originalEvent;
            return Pt && 0 < e.touches.length ? (c = st(),
            h = event.touches.length + 1,
            !0) : (Q() && (E = h),
            O = st(),
            b = it(),
            z() || !I() ? F(e, P = kt) : v.triggerOnTouchEnd || 0 == v.triggerOnTouchEnd && P === St ? (t.preventDefault(),
            F(e, P = Ct)) : !v.triggerOnTouchEnd && Y() ? L(e, P = Ct, gt) : P === St && F(e, P = kt),
            Z(!1),
            null)
        }
        function g() {
            w = x = l = O = E = 0,
            G(),
            Z(!(T = 1))
        }
        function N(t) {
            var e = t.originalEvent;
            v.triggerOnTouchLeave && F(e, P = R(Ct))
        }
        function M() {
            a.unbind(i, p),
            a.unbind(o, g),
            a.unbind(n, f),
            a.unbind(s, m),
            r && a.unbind(r, N),
            Z(!1)
        }
        function R(t) {
            var e = t
              , i = $()
              , n = I()
              , s = z();
            return !i || s ? e = kt : !n || t != St || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !n && t == Ct && v.triggerOnTouchLeave && (e = kt) : e = Ct,
            e
        }
        function F(t, e) {
            var i = void 0;
            return X() && B() || B() ? i = L(t, e, ft) : (H() && j() || j()) && !1 !== i && (i = L(t, e, mt)),
            U() && W() && !1 !== i ? i = L(t, e, vt) : b > v.longTapThreshold && y < wt && v.longTap && !1 !== i ? i = L(t, e, yt) : 1 !== E && Pt || !(isNaN(y) || y < v.threshold) || !Y() || !1 === i || (i = L(t, e, gt)),
            e === kt && g(),
            e !== Ct || Pt && 0 != t.touches.length || g(),
            i
        }
        function L(t, e, i) {
            var n = void 0;
            if (i == ft) {
                if (a.trigger("swipeStatus", [e, _ || null, y || 0, b || 0, E, A]),
                v.swipeStatus && !1 === (n = v.swipeStatus.call(a, t, e, _ || null, y || 0, b || 0, E, A)))
                    return !1;
                if (e == Ct && X()) {
                    if (a.trigger("swipe", [_, y, b, E, A]),
                    v.swipe && !1 === (n = v.swipe.call(a, t, _, y, b, E, A)))
                        return !1;
                    switch (_) {
                    case ot:
                        a.trigger("swipeLeft", [_, y, b, E, A]),
                        v.swipeLeft && (n = v.swipeLeft.call(a, t, _, y, b, E, A));
                        break;
                    case at:
                        a.trigger("swipeRight", [_, y, b, E, A]),
                        v.swipeRight && (n = v.swipeRight.call(a, t, _, y, b, E, A));
                        break;
                    case lt:
                        a.trigger("swipeUp", [_, y, b, E, A]),
                        v.swipeUp && (n = v.swipeUp.call(a, t, _, y, b, E, A));
                        break;
                    case ct:
                        a.trigger("swipeDown", [_, y, b, E, A]),
                        v.swipeDown && (n = v.swipeDown.call(a, t, _, y, b, E, A))
                    }
                }
            }
            if (i == mt) {
                if (a.trigger("pinchStatus", [e, C || null, S || 0, b || 0, E, T, A]),
                v.pinchStatus && !1 === (n = v.pinchStatus.call(a, t, e, C || null, S || 0, b || 0, E, T, A)))
                    return !1;
                if (e == Ct && H())
                    switch (C) {
                    case ht:
                        a.trigger("pinchIn", [C || null, S || 0, b || 0, E, T, A]),
                        v.pinchIn && (n = v.pinchIn.call(a, t, C || null, S || 0, b || 0, E, T, A));
                        break;
                    case ut:
                        a.trigger("pinchOut", [C || null, S || 0, b || 0, E, T, A]),
                        v.pinchOut && (n = v.pinchOut.call(a, t, C || null, S || 0, b || 0, E, T, A))
                    }
            }
            return i == gt ? e !== kt && e !== Ct || (clearTimeout(d),
            clearTimeout(D),
            W() && !U() ? (u = st(),
            d = setTimeout(rt.proxy(function() {
                u = null,
                a.trigger("tap", [t.target]),
                v.tap && (n = v.tap.call(a, t, t.target))
            }, this), v.doubleTapThreshold)) : (u = null,
            a.trigger("tap", [t.target]),
            v.tap && (n = v.tap.call(a, t, t.target)))) : i == vt ? e !== kt && e !== Ct || (clearTimeout(d),
            u = null,
            a.trigger("doubletap", [t.target]),
            v.doubleTap && (n = v.doubleTap.call(a, t, t.target))) : i == yt && (e !== kt && e !== Ct || (clearTimeout(d),
            u = null,
            a.trigger("longtap", [t.target]),
            v.longTap && (n = v.longTap.call(a, t, t.target)))),
            n
        }
        function I() {
            var t = !0;
            return null !== v.threshold && (t = y >= v.threshold),
            t
        }
        function z() {
            var t = !1;
            return null !== v.cancelThreshold && null !== _ && (t = tt(_) - y >= v.cancelThreshold),
            t
        }
        function $() {
            var t = !v.maxTimeThreshold || !(b >= v.maxTimeThreshold);
            return t
        }
        function H() {
            var t = q()
              , e = V()
              , i = null === v.pinchThreshold || S >= v.pinchThreshold;
            return t && e && i
        }
        function j() {
            return v.pinchStatus || v.pinchIn || v.pinchOut
        }
        function X() {
            var t = $()
              , e = I()
              , i = q()
              , n = V();
            return !z() && n && i && e && t
        }
        function B() {
            return v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown
        }
        function q() {
            return E === v.fingers || v.fingers === xt || !Pt
        }
        function V() {
            return 0 !== A[0].end.x
        }
        function Y() {
            return v.tap
        }
        function W() {
            return !!v.doubleTap
        }
        function U() {
            if (null == u)
                return !1;
            var t = st();
            return W() && t - u <= v.doubleTapThreshold
        }
        function G() {
            h = c = 0
        }
        function Q() {
            var t = !1;
            return c && st() - c <= v.fingerReleaseThreshold && (t = !0),
            t
        }
        function Z(t) {
            !0 === t ? (a.bind(n, f),
            a.bind(s, m),
            r && a.bind(r, N)) : (a.unbind(n, f, !1),
            a.unbind(s, m, !1),
            r && a.unbind(r, N, !1)),
            a.data(Ot + "_intouch", !0 === t)
        }
        function K(t, e) {
            var i = void 0 !== e.identifier ? e.identifier : 0;
            return A[t].identifier = i,
            A[t].start.x = A[t].end.x = e.pageX || e.clientX,
            A[t].start.y = A[t].end.y = e.pageY || e.clientY,
            A[t]
        }
        function J(t) {
            var e = function(t) {
                for (var e = 0; e < A.length; e++)
                    if (A[e].identifier == t)
                        return A[e]
            }(void 0 !== t.identifier ? t.identifier : 0);
            return e.end.x = t.pageX || t.clientX,
            e.end.y = t.pageY || t.clientY,
            e
        }
        function tt(t) {
            if (k[t])
                return k[t].distance
        }
        function et(t) {
            return {
                direction: t,
                distance: 0
            }
        }
        function it() {
            return O - l
        }
        function nt(t, e) {
            var i = Math.abs(t.x - e.x)
              , n = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(i * i + n * n))
        }
        function st() {
            return (new Date).getTime()
        }
        this.enable = function() {
            return a.bind(i, p),
            a.bind(o, g),
            a
        }
        ,
        this.disable = function() {
            return M(),
            a
        }
        ,
        this.destroy = function() {
            M(),
            a.data(Ot, null),
            a = null
        }
        ,
        this.option = function(t, e) {
            if (void 0 !== v[t]) {
                if (void 0 === e)
                    return v[t];
                v[t] = e
            } else
                rt.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    rt.fn.swipe = function(t) {
        var e = rt(this)
          , i = e.data(Ot);
        if (i && "string" == typeof t) {
            if (i[t])
                return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            rt.error("Method " + t + " does not exist on jQuery.swipe")
        } else if (!(i || "object" != typeof t && t))
            return function(i) {
                !i || void 0 !== i.allowPageScroll || void 0 === i.swipe && void 0 === i.swipeStatus || (i.allowPageScroll = dt);
                void 0 !== i.click && void 0 === i.tap && (i.tap = i.click);
                i = i || {};
                return i = rt.extend({}, rt.fn.swipe.defaults, i),
                this.each(function() {
                    var t = rt(this)
                      , e = t.data(Ot);
                    e || (e = new n(this,i),
                    t.data(Ot, e))
                })
            }
            .apply(this, arguments);
        return e
    }
    ,
    rt.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    },
    rt.fn.swipe.phases = {
        PHASE_START: Tt,
        PHASE_MOVE: St,
        PHASE_END: Ct,
        PHASE_CANCEL: kt
    },
    rt.fn.swipe.directions = {
        LEFT: ot,
        RIGHT: at,
        UP: lt,
        DOWN: ct,
        IN: ht,
        OUT: ut
    },
    rt.fn.swipe.pageScroll = {
        NONE: dt,
        HORIZONTAL: _t,
        VERTICAL: bt,
        AUTO: pt
    },
    rt.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: xt
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(c) {
    c.extend(c.fn, {
        validate: function(t) {
            if (this.length) {
                var n = c.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"),
                n = new c.validator(t,this[0]),
                c.data(this[0], "validator", n),
                n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target),
                    c(t.target).hasClass("cancel") && (n.cancelSubmit = !0),
                    void 0 !== c(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }),
                this.submit(function(i) {
                    function t() {
                        var t, e;
                        return !n.settings.submitHandler || (n.submitButton && (t = c("<input type='hidden'/>").attr("name", n.submitButton.name).val(c(n.submitButton).val()).appendTo(n.currentForm)),
                        e = n.settings.submitHandler.call(n, n.currentForm, i),
                        n.submitButton && t.remove(),
                        void 0 !== e && e)
                    }
                    return n.settings.debug && i.preventDefault(),
                    n.cancelSubmit ? (n.cancelSubmit = !1,
                    t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(),
                    !1)
                })),
                n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, e;
            return c(this[0]).is("form") ? t = this.validate().form() : (t = !0,
            e = c(this[0].form).validate(),
            this.each(function() {
                t = e.element(this) && t
            })),
            t
        },
        removeAttrs: function(t) {
            var i = {}
              , n = this;
            return c.each(t.split(/\s/), function(t, e) {
                i[e] = n.attr(e),
                n.removeAttr(e)
            }),
            i
        },
        rules: function(t, e) {
            var i, n, s, r, o, a, l = this[0];
            if (t)
                switch (i = c.data(l.form, "validator").settings,
                n = i.rules,
                s = c.validator.staticRules(l),
                t) {
                case "add":
                    c.extend(s, c.validator.normalizeRule(e)),
                    delete s.messages,
                    n[l.name] = s,
                    e.messages && (i.messages[l.name] = c.extend(i.messages[l.name], e.messages));
                    break;
                case "remove":
                    return e ? (a = {},
                    c.each(e.split(/\s/), function(t, e) {
                        a[e] = s[e],
                        delete s[e],
                        "required" === e && c(l).removeAttr("aria-required")
                    }),
                    a) : (delete n[l.name],
                    s)
                }
            return (r = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (o = r.required,
            delete r.required,
            r = c.extend({
                required: o
            }, r),
            c(l).attr("aria-required", "true")),
            r.remote && (o = r.remote,
            delete r.remote,
            r = c.extend(r, {
                remote: o
            })),
            r
        }
    }),
    c.extend(c.expr[":"], {
        blank: function(t) {
            return !c.trim("" + c(t).val())
        },
        filled: function(t) {
            return !!c.trim("" + c(t).val())
        },
        unchecked: function(t) {
            return !c(t).prop("checked")
        }
    }),
    c.validator = function(t, e) {
        this.settings = c.extend(!0, {}, c.validator.defaults, t),
        this.currentForm = e,
        this.init()
    }
    ,
    c.validator.format = function(i, t) {
        return 1 === arguments.length ? function() {
            var t = c.makeArray(arguments);
            return t.unshift(i),
            c.validator.format.apply(this, t)
        }
        : (2 < arguments.length && t.constructor !== Array && (t = c.makeArray(arguments).slice(1)),
        t.constructor !== Array && (t = [t]),
        c.each(t, function(t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return e
            })
        }),
        i)
    }
    ,
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || !(t.name in this.submitted || t === this.lastElement) || this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : c(t).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : c(t).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            c.extend(c.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var e = c.data(this[0].form, "validator")
                      , i = "on" + t.type.replace(/^validate/, "")
                      , n = e.settings;
                    n[i] && !this.is(n.ignore) && n[i].call(e, this[0], t)
                }
                this.labelContainer = c(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm),
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                c.each(this.settings.groups, function(i, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                    c.each(t, function(t, e) {
                        n[e] = i
                    })
                }),
                i = this.settings.rules,
                c.each(i, function(t, e) {
                    i[t] = c.validator.normalizeRule(e)
                }),
                c(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", t).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", t),
                this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler),
                c(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                c.extend(this.submitted, this.errorMap),
                this.invalid = c.extend({}, this.errorMap),
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                var e = this.clean(t)
                  , i = this.validationTargetFor(e)
                  , n = !0;
                return void 0 === (this.lastElement = i) ? delete this.invalid[e.name] : (this.prepareElement(i),
                this.currentElements = c(i),
                (n = !1 !== this.check(i)) ? delete this.invalid[i.name] : this.invalid[i.name] = !0),
                c(t).attr("aria-invalid", !n),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n
            },
            showErrors: function(e) {
                if (e) {
                    for (var t in c.extend(this.errorMap, e),
                    this.errorList = [],
                    e)
                        this.errorList.push({
                            message: e[t],
                            element: this.findByName(t)[0]
                        });
                    this.successList = c.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t)
                    i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === c.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var t = this
                  , e = {};
                return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    !(this.name in e || !t.objectLength(c(this).rules())) && (e[this.name] = !0)
                })
            },
            clean: function(t) {
                return c(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = c([]),
                this.toHide = c([]),
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(t) {
                var e, i = c(t), n = t.type;
                return "radio" === n || "checkbox" === n ? c("input[name='" + t.name + "']:checked").val() : "number" === n && void 0 !== t.validity ? !t.validity.badInput && i.val() : "string" == typeof (e = i.val()) ? e.replace(/\r/g, "") : e
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, n, s = c(e).rules(), r = c.map(s, function(t, e) {
                    return e
                }).length, o = !1, a = this.elementValue(e);
                for (i in s) {
                    n = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = c.validator.methods[i].call(this, a, e, n.parameters)) && 1 === r) {
                            o = !0;
                            continue
                        }
                        if (o = !1,
                        "pending" === t)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t)
                            return this.formatAndAdd(e, n),
                            !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t),
                        t
                    }
                }
                if (!o)
                    return this.objectLength(s) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(t, e) {
                return c(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(t).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t]
            },
            defaultMessage: function(t, e) {
                return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e.method)
                  , n = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = c.validator.format(i.replace(n, "{$1}"), e.parameters)),
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }),
                this.errorMap[t.name] = i,
                this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                for (var t, e, i = 0; this.errorList[i]; i++)
                    e = this.errorList[i],
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (i = 0; this.successList[i]; i++)
                        this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (i = 0,
                    t = this.validElements(); t[i]; i++)
                        this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i, n, s, r = this.errorsFor(t), o = this.idOrName(t), a = c(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.html(e)) : (i = r = c("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(e || ""),
                this.settings.wrapper && (i = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, c(t)) : i.insertAfter(t),
                r.is("label") ? r.attr("for", o) : 0 === r.parents("label[for='" + o + "']").length && (s = r.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"),
                a ? a.match(new RegExp("\\b" + s + "\\b")) || (a += " " + s) : a = s,
                c(t).attr("aria-describedby", a),
                (n = this.groups[t.name]) && c.each(this.groups, function(t, e) {
                    e === n && c("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                }))),
                !e && this.settings.success && (r.text(""),
                "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)),
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var e = this.idOrName(t)
                  , i = c(t).attr("aria-describedby")
                  , n = "label[for='" + e + "'], label[for='" + e + "'] *";
                return i && (n = n + ", #" + i.replace(/\s+/g, ", #")),
                this.errors().filter(n)
            },
            idOrName: function(t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                c(t).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                return c(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                case "select":
                    return c("option:selected", e).length;
                case "input":
                    if (this.checkable(e))
                        return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(t, e) {
                    return !!c(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(),
                this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return c.data(t, "previousValue") || c.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {}
              , i = c(t).attr("class");
            return i && c.each(i.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
            }),
            e
        },
        attributeRules: function(t) {
            var e, i, n = {}, s = c(t), r = t.getAttribute("type");
            for (e in c.validator.methods)
                i = "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0),
                !!i) : s.attr(e),
                /min|max/.test(e) && (null === r || /number|range|text/.test(r)) && (i = Number(i)),
                i || 0 === i ? n[e] = i : r === e && "range" !== r && (n[e] = !0);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength,
            n
        },
        dataRules: function(t) {
            var e, i, n = {}, s = c(t);
            for (e in c.validator.methods)
                void 0 !== (i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())) && (n[e] = i);
            return n
        },
        staticRules: function(t) {
            var e = {}
              , i = c.data(t.form, "validator");
            return i.settings.rules && (e = c.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            e
        },
        normalizeRules: function(n, s) {
            return c.each(n, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                        case "string":
                            i = !!c(e.depends, s.form).length;
                            break;
                        case "function":
                            i = e.depends.call(s, s)
                        }
                        i ? n[t] = void 0 === e.param || e.param : delete n[t]
                    }
                } else
                    delete n[t]
            }),
            c.each(n, function(t, e) {
                n[t] = c.isFunction(e) ? e(s) : e
            }),
            c.each(["minlength", "maxlength"], function() {
                n[this] && (n[this] = Number(n[this]))
            }),
            c.each(["rangelength", "range"], function() {
                var t;
                n[this] && (c.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                n[this] = [Number(t[0]), Number(t[1])]))
            }),
            c.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max],
            delete n.min,
            delete n.max),
            null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength],
            delete n.minlength,
            delete n.maxlength)),
            n
        },
        normalizeRule: function(t) {
            var e;
            return "string" == typeof t && (e = {},
            c.each(t.split(/\s/), function() {
                e[this] = !0
            }),
            t = e),
            t
        },
        addMethod: function(t, e, i) {
            c.validator.methods[t] = e,
            c.validator.messages[t] = void 0 !== i ? i : c.validator.messages[t],
            e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e))
                    return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < c.trim(t).length;
                var n = c(e).val();
                return n && 0 < n.length
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return !1;
                var i, n, s = 0, r = 0, o = !1;
                if ((t = t.replace(/\D/g, "")).length < 13 || 19 < t.length)
                    return !1;
                for (i = t.length - 1; 0 <= i; i--)
                    n = t.charAt(i),
                    r = parseInt(n, 10),
                    o && 9 < (r *= 2) && (r -= 9),
                    s += r,
                    o = !o;
                return s % 10 == 0
            },
            minlength: function(t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= n
            },
            maxlength: function(t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || n <= i
            },
            rangelength: function(t, e, i) {
                var n = c.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || n >= i[0] && n <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(t, e, i) {
                var n = c(i);
                return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    c(e).valid()
                }),
                t === n.val()
            },
            remote: function(r, o, t) {
                if (this.optional(o))
                    return "dependency-mismatch";
                var a, e, l = this.previousValue(o);
                return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}),
                l.originalMessage = this.settings.messages[o.name].remote,
                this.settings.messages[o.name].remote = l.message,
                t = "string" == typeof t ? {
                    url: t
                } : t,
                l.old === r ? l.valid : (l.old = r,
                (a = this).startRequest(o),
                (e = {})[o.name] = r,
                c.ajax(c.extend(!0, {
                    url: t,
                    mode: "abort",
                    port: "validate" + o.name,
                    dataType: "json",
                    data: e,
                    context: a.currentForm,
                    success: function(t) {
                        var e, i, n, s = !0 === t || "true" === t;
                        a.settings.messages[o.name].remote = l.originalMessage,
                        s ? (n = a.formSubmitted,
                        a.prepareElement(o),
                        a.formSubmitted = n,
                        a.successList.push(o),
                        delete a.invalid[o.name],
                        a.showErrors()) : (e = {},
                        i = t || a.defaultMessage(o, "remote"),
                        e[o.name] = l.message = c.isFunction(i) ? i(r) : i,
                        a.invalid[o.name] = !0,
                        a.showErrors(e)),
                        l.valid = s,
                        a.stopRequest(o, s)
                    }
                }, t)),
                "pending")
            }
        }
    }),
    c.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    }
    ;
    var n, s = {};
    c.ajaxPrefilter ? c.ajaxPrefilter(function(t, e, i) {
        var n = t.port;
        "abort" === t.mode && (s[n] && s[n].abort(),
        s[n] = i)
    }) : (n = c.ajax,
    c.ajax = function(t) {
        var e = ("mode"in t ? t : c.ajaxSettings).mode
          , i = ("port"in t ? t : c.ajaxSettings).port;
        return "abort" === e ? (s[i] && s[i].abort(),
        s[i] = n.apply(this, arguments),
        s[i]) : n.apply(this, arguments)
    }
    ),
    c.extend(c.fn, {
        validateDelegate: function(i, t, n) {
            return this.bind(t, function(t) {
                var e = c(t.target);
                return e.is(i) ? n.apply(e, arguments) : void 0
            })
        }
    })
}),
function(e) {
    function a(t) {
        var e = t.length
          , i = h.type(t);
        return "function" !== i && !h.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
    }
    if (!e.jQuery) {
        var h = function(t, e) {
            return new h.fn.init(t,e)
        };
        h.isWindow = function(t) {
            return null != t && t == t.window
        }
        ,
        h.type = function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t
        }
        ,
        h.isArray = Array.isArray || function(t) {
            return "array" === h.type(t)
        }
        ,
        h.isPlainObject = function(t) {
            var e;
            if (!t || "object" !== h.type(t) || t.nodeType || h.isWindow(t))
                return !1;
            try {
                if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            for (e in t)
                ;
            return void 0 === e || n.call(t, e)
        }
        ,
        h.each = function(t, e, i) {
            var n = 0
              , s = t.length
              , r = a(t);
            if (i) {
                if (r)
                    for (; n < s && !1 !== e.apply(t[n], i); n++)
                        ;
                else
                    for (n in t)
                        if (!1 === e.apply(t[n], i))
                            break
            } else if (r)
                for (; n < s && !1 !== e.call(t[n], n, t[n]); n++)
                    ;
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break;
            return t
        }
        ,
        h.data = function(t, e, i) {
            if (void 0 === i) {
                var n = (s = t[h.expando]) && r[s];
                if (void 0 === e)
                    return n;
                if (n && e in n)
                    return n[e]
            } else if (void 0 !== e) {
                var s = t[h.expando] || (t[h.expando] = ++h.uuid);
                return r[s] = r[s] || {},
                r[s][e] = i
            }
        }
        ,
        h.removeData = function(t, e) {
            var i = t[h.expando]
              , n = i && r[i];
            n && h.each(e, function(t, e) {
                delete n[e]
            })
        }
        ,
        h.extend = function() {
            var t, e, i, n, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof o && (c = o,
            o = arguments[a] || {},
            a++),
            "object" != typeof o && "function" !== h.type(o) && (o = {}),
            a === l && (o = this,
            a--); a < l; a++)
                if (null != (s = arguments[a]))
                    for (n in s)
                        t = o[n],
                        o !== (i = s[n]) && (c && i && (h.isPlainObject(i) || (e = h.isArray(i))) ? (r = e ? (e = !1,
                        t && h.isArray(t) ? t : []) : t && h.isPlainObject(t) ? t : {},
                        o[n] = h.extend(c, r, i)) : void 0 !== i && (o[n] = i));
            return o
        }
        ,
        h.queue = function(t, e, i) {
            if (t) {
                e = (e || "fx") + "queue";
                var n = h.data(t, e);
                return i ? (!n || h.isArray(i) ? n = h.data(t, e, (o = r || [],
                null != (s = i) && (a(Object(s)) ? function(t, e) {
                    for (var i = +e.length, n = 0, s = t.length; n < i; )
                        t[s++] = e[n++];
                    if (i != i)
                        for (; void 0 !== e[n]; )
                            t[s++] = e[n++];
                    t.length = s
                }(o, "string" == typeof s ? [s] : s) : [].push.call(o, s)),
                o)) : n.push(i),
                n) : n || []
            }
            var s, r, o
        }
        ,
        h.dequeue = function(t, s) {
            h.each(t.nodeType ? [t] : t, function(t, e) {
                s = s || "fx";
                var i = h.queue(e, s)
                  , n = i.shift();
                "inprogress" === n && (n = i.shift()),
                n && ("fx" === s && i.unshift("inprogress"),
                n.call(e, function() {
                    h.dequeue(e, s)
                }))
            })
        }
        ,
        h.fn = h.prototype = {
            init: function(t) {
                if (t.nodeType)
                    return this[0] = t,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position; )
                        t = t.offsetParent;
                    return t || document
                }
                var e = this[0]
                  , t = t.apply(e)
                  , i = this.offset()
                  , n = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : h(t).offset();
                return i.top -= parseFloat(e.style.marginTop) || 0,
                i.left -= parseFloat(e.style.marginLeft) || 0,
                t.style && (n.top += parseFloat(t.style.borderTopWidth) || 0,
                n.left += parseFloat(t.style.borderLeftWidth) || 0),
                {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            }
        };
        var r = {};
        h.expando = "velocity" + (new Date).getTime(),
        h.uuid = 0;
        for (var i = {}, n = i.hasOwnProperty, s = i.toString, t = "Boolean Number String Function Array Date RegExp Object Error".split(" "), o = 0; o < t.length; o++)
            i["[object " + t[o] + "]"] = t[o].toLowerCase();
        h.fn.init.prototype = h.fn,
        e.Velocity = {
            Utilities: h
        }
    }
}(window),
function(t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    return function(t, L, I, z) {
        function m(t) {
            return B.isWrapped(t) ? t = [].slice.call(t) : B.isNode(t) && (t = [t]),
            t
        }
        function $(t) {
            var e = X.data(t, "velocity");
            return null === e ? z : e
        }
        function n(o, e, a, i) {
            function n(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function l(t, e, i) {
                return ((n(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t
            }
            function c(t, e, i) {
                return 3 * n(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e
            }
            function s(t) {
                for (var e = 0, i = 1, n = p - 1; i != n && v[i] <= t; ++i)
                    e += f;
                var s = e + (t - v[--i]) / (v[i + 1] - v[i]) * f
                  , r = c(s, o, a);
                return .001 <= r ? function(t, e) {
                    for (var i = 0; i < h; ++i) {
                        var n = c(e, o, a);
                        if (0 === n)
                            return e;
                        e -= (l(e, o, a) - t) / n
                    }
                    return e
                }(t, s) : 0 == r ? s : function(t, e, i) {
                    for (var n, s, r = 0; 0 < (n = l(s = e + (i - e) / 2, o, a) - t) ? i = s : e = s,
                    Math.abs(n) > u && ++r < d; )
                        ;
                    return s
                }(t, e, e + f)
            }
            function r() {
                y = !0,
                o == e && a == i || function() {
                    for (var t = 0; t < p; ++t)
                        v[t] = l(t * f, o, a)
                }()
            }
            var h = 4
              , u = 1e-7
              , d = 10
              , p = 11
              , f = 1 / (p - 1)
              , t = "Float32Array"in L;
            if (4 !== arguments.length)
                return !1;
            for (var m = 0; m < 4; ++m)
                if ("number" != typeof arguments[m] || isNaN(arguments[m]) || !isFinite(arguments[m]))
                    return !1;
            o = Math.min(o, 1),
            a = Math.min(a, 1),
            o = Math.max(o, 0),
            a = Math.max(a, 0);
            function g(t) {
                return y || r(),
                o === e && a === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(s(t), e, i)
            }
            var v = new (t ? Float32Array : Array)(p)
              , y = !1;
            g.getControlPoints = function() {
                return [{
                    x: o,
                    y: e
                }, {
                    x: a,
                    y: i
                }]
            }
            ;
            var _ = "generateBezier(" + [o, e, a, i] + ")";
            return g.toString = function() {
                return _
            }
            ,
            g
        }
        function H(t, e) {
            var i = t;
            return B.isString(t) ? q.Easings[t] || (i = !1) : i = B.isArray(t) && 1 === t.length ? function(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }
            .apply(null, t) : B.isArray(t) && 2 === t.length ? o.apply(null, t.concat([e])) : !(!B.isArray(t) || 4 !== t.length) && n.apply(null, t),
            !1 === i && (i = q.Easings[q.defaults.easing] ? q.defaults.easing : r),
            i
        }
        function j(t) {
            if (t) {
                var e = (new Date).getTime()
                  , i = q.State.calls.length;
                1e4 < i && (q.State.calls = function(t) {
                    for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                        var s = t[e];
                        s && n.push(s)
                    }
                    return n
                }(q.State.calls));
                for (var n = 0; n < i; n++)
                    if (q.State.calls[n]) {
                        for (var s = q.State.calls[n], r = s[0], o = s[2], a = !!(c = s[3]), l = null, c = c || (q.State.calls[n][3] = e - 16), h = Math.min((e - c) / o.duration, 1), u = 0, d = r.length; u < d; u++) {
                            var p = r[u]
                              , f = p.element;
                            if ($(f)) {
                                var m = !1;
                                for (var g in o.display !== z && null !== o.display && "none" !== o.display && ("flex" === o.display && X.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(t, e) {
                                    V.setPropertyValue(f, "display", e)
                                }),
                                V.setPropertyValue(f, "display", o.display)),
                                o.visibility !== z && "hidden" !== o.visibility && V.setPropertyValue(f, "visibility", o.visibility),
                                p)
                                    if ("element" !== g) {
                                        var v, y, _, b = p[g], x = B.isString(b.easing) ? q.Easings[b.easing] : b.easing;
                                        if (1 === h)
                                            T = b.endValue;
                                        else {
                                            var w = b.endValue - b.startValue
                                              , T = b.startValue + w * x(h, o, w);
                                            if (!a && T === b.currentValue)
                                                continue
                                        }
                                        b.currentValue = T,
                                        "tween" === g ? l = T : (V.Hooks.registered[g] && (v = V.Hooks.getRoot(g),
                                        (y = $(f).rootPropertyValueCache[v]) && (b.rootPropertyValue = y)),
                                        _ = V.setPropertyValue(f, g, b.currentValue + (0 === parseFloat(T) ? "" : b.unitType), b.rootPropertyValue, b.scrollData),
                                        V.Hooks.registered[g] && ($(f).rootPropertyValueCache[v] = V.Normalizations.registered[v] ? V.Normalizations.registered[v]("extract", null, _[1]) : _[1]),
                                        "transform" === _[0] && (m = !0))
                                    }
                                o.mobileHA && $(f).transformCache.translate3d === z && ($(f).transformCache.translate3d = "(0px, 0px, 0px)",
                                m = !0),
                                m && V.flushTransformCache(f)
                            }
                        }
                        o.display !== z && "none" !== o.display && (q.State.calls[n][2].display = !1),
                        o.visibility !== z && "hidden" !== o.visibility && (q.State.calls[n][2].visibility = !1),
                        o.progress && o.progress.call(s[1], s[1], h, Math.max(0, c + o.duration - e), c, l),
                        1 === h && S(n)
                    }
            }
            q.State.isTicking && C(j)
        }
        function S(t, e) {
            if (q.State.calls[t]) {
                for (var i = q.State.calls[t][0], n = q.State.calls[t][1], s = q.State.calls[t][2], r = q.State.calls[t][4], o = !1, a = 0, l = i.length; a < l; a++) {
                    var c, h = i[a].element;
                    if (e || s.loop || ("none" === s.display && V.setPropertyValue(h, "display", s.display),
                    "hidden" === s.visibility && V.setPropertyValue(h, "visibility", s.visibility)),
                    !0 === s.loop || X.queue(h)[1] !== z && /\.velocityQueueEntryFlag/i.test(X.queue(h)[1]) || !$(h) || ($(h).isAnimating = !1,
                    c = !($(h).rootPropertyValueCache = {}),
                    X.each(V.Lists.transforms3D, function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0
                          , n = $(h).transformCache[e];
                        $(h).transformCache[e] !== z && new RegExp("^\\(" + i + "[^.]").test(n) && (c = !0,
                        delete $(h).transformCache[e])
                    }),
                    s.mobileHA && (c = !0,
                    delete $(h).transformCache.translate3d),
                    c && V.flushTransformCache(h),
                    V.Values.removeClass(h, "velocity-animating")),
                    !e && s.complete && !s.loop && a === l - 1)
                        try {
                            s.complete.call(n, n)
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                    r && !0 !== s.loop && r(n),
                    !0 !== s.loop || e || (X.each($(h).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0,
                        e.startValue = 360),
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0,
                        e.startValue = 100)
                    }),
                    q(h, "reverse", {
                        loop: !0,
                        delay: s.delay
                    })),
                    !1 !== s.queue && X.dequeue(h, s.queue)
                }
                q.State.calls[t] = !1;
                for (var u = 0, d = q.State.calls.length; u < d; u++)
                    if (!1 !== q.State.calls[u]) {
                        o = !0;
                        break
                    }
                !1 === o && (q.State.isTicking = !1,
                delete q.State.calls,
                q.State.calls = [])
            }
        }
        var X, s, u = function() {
            if (I.documentMode)
                return I.documentMode;
            for (var t = 7; 4 < t; t--) {
                var e = I.createElement("div");
                if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e",
                e.getElementsByTagName("span").length)
                    return e = null,
                    t
            }
            return z
        }(), e = (s = 0,
        L.webkitRequestAnimationFrame || L.mozRequestAnimationFrame || function(t) {
            var e = (new Date).getTime()
              , i = Math.max(0, 16 - (e - s));
            return s = e + i,
            setTimeout(function() {
                t(e + i)
            }, i)
        }
        ), B = {
            isString: function(t) {
                return "string" == typeof t
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ,
            isFunction: function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            },
            isNode: function(t) {
                return t && t.nodeType
            },
            isNodeList: function(t) {
                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== z && (0 === t.length || "object" == typeof t[0] && 0 < t[0].nodeType)
            },
            isWrapped: function(t) {
                return t && (t.jquery || L.Zepto && L.Zepto.zepto.isZ(t))
            },
            isSVG: function(t) {
                return L.SVGElement && t instanceof L.SVGElement
            },
            isEmptyObject: function(t) {
                for (var e in t)
                    return !1;
                return !0
            }
        }, i = !1;
        if (t.fn && t.fn.jquery ? (X = t,
        i = !0) : X = L.Velocity.Utilities,
        u <= 8 && !i)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(u <= 7)) {
            var r = "swing"
              , q = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: L.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: I.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: X,
                Redirects: {},
                Easings: {},
                Promise: L.Promise,
                defaults: {
                    queue: "",
                    duration: 400,
                    easing: r,
                    begin: z,
                    complete: z,
                    progress: z,
                    display: z,
                    visibility: z,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(t) {
                    X.data(t, "velocity", {
                        isSVG: B.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 1
                },
                debug: !1
            };
            L.pageYOffset !== z ? (q.State.scrollAnchor = L,
            q.State.scrollPropertyLeft = "pageXOffset",
            q.State.scrollPropertyTop = "pageYOffset") : (q.State.scrollAnchor = I.documentElement || I.body.parentNode || I.body,
            q.State.scrollPropertyLeft = "scrollLeft",
            q.State.scrollPropertyTop = "scrollTop");
            var o = function t(e, i, n) {
                var s, r, o, a, l, c, h, u, d, p, f, m = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, g = [0], v = 0;
                for (e = parseFloat(e) || 500,
                i = parseFloat(i) || 20,
                n = n || null,
                m.tension = e,
                m.friction = i,
                r = (s = null !== n) ? (v = t(e, i)) / n * .016 : .016; l = r,
                c = {
                    dx: (a = o || m).v,
                    dv: y(a)
                },
                h = _(a, .5 * l, c),
                u = _(a, .5 * l, h),
                d = _(a, l, u),
                p = 1 / 6 * (c.dx + 2 * (h.dx + u.dx) + d.dx),
                f = 1 / 6 * (c.dv + 2 * (h.dv + u.dv) + d.dv),
                a.x = a.x + p * l,
                a.v = a.v + f * l,
                o = a,
                g.push(1 + o.x),
                v += 16,
                1e-4 < Math.abs(o.x) && 1e-4 < Math.abs(o.v); )
                    ;
                return s ? function(t) {
                    return g[t * (g.length - 1) | 0]
                }
                : v
            };
            q.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            },
            X.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(t, e) {
                q.Easings[e[0]] = n.apply(null, e[1])
            });
            var V = q.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t, e, i, n = 0; n < V.Lists.colors.length; n++) {
                            var s = "color" === V.Lists.colors[n] ? "0 0 0 1" : "255 255 255 1";
                            V.Hooks.templates[V.Lists.colors[n]] = ["Red Green Blue Alpha", s]
                        }
                        if (u)
                            for (t in V.Hooks.templates) {
                                i = (e = V.Hooks.templates[t])[0].split(" ");
                                var r = e[1].match(V.RegEx.valueSplit);
                                "Color" === i[0] && (i.push(i.shift()),
                                r.push(r.shift()),
                                V.Hooks.templates[t] = [i.join(" "), r.join(" ")])
                            }
                        for (t in V.Hooks.templates)
                            for (var n in i = (e = V.Hooks.templates[t])[0].split(" ")) {
                                var o = t + i[n];
                                V.Hooks.registered[o] = [t, n]
                            }
                    },
                    getRoot: function(t) {
                        var e = V.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return V.RegEx.valueUnwrap.test(e) && (e = e.match(V.RegEx.valueUnwrap)[1]),
                        V.Values.isCSSNullValue(e) && (e = V.Hooks.templates[t][1]),
                        e
                    },
                    extractValue: function(t, e) {
                        var i = V.Hooks.registered[t];
                        if (i) {
                            var n = i[0]
                              , s = i[1];
                            return (e = V.Hooks.cleanRootPropertyValue(n, e)).toString().match(V.RegEx.valueSplit)[s]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = V.Hooks.registered[t];
                        if (n) {
                            var s, r = n[0], o = n[1];
                            return (s = (i = V.Hooks.cleanRootPropertyValue(r, i)).toString().match(V.RegEx.valueSplit))[o] = e,
                            s.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n = V.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (n = i.toString().match(V.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i;
                                return n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return q.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n, s = parseFloat(i);
                                return s || 0 === s || (s = (n = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i)) ? n[1] : 0),
                                s;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (u <= 8)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n ? n[1] / 100 : 1;
                                case "inject":
                                    return (e.style.zoom = 1) <= parseFloat(i) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function() {
                        u <= 9 || q.State.isGingerbread || (V.Lists.transformsBase = V.Lists.transformsBase.concat(V.Lists.transforms3D));
                        for (var t = 0; t < V.Lists.transformsBase.length; t++)
                            !function() {
                                var s = V.Lists.transformsBase[t];
                                V.Normalizations.registered[s] = function(t, e, i) {
                                    switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return $(e) === z || $(e).transformCache[s] === z ? /^scale/i.test(s) ? 1 : 0 : $(e).transformCache[s].replace(/[()]/g, "");
                                    case "inject":
                                        var n = !1;
                                        switch (s.substr(0, s.length - 1)) {
                                        case "translate":
                                            n = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                            break;
                                        case "scal":
                                        case "scale":
                                            q.State.isAndroid && $(e).transformCache[s] === z && i < 1 && (i = 1),
                                            n = !/(\d)$/i.test(i);
                                            break;
                                        case "skew":
                                            n = !/(deg|\d)$/i.test(i);
                                            break;
                                        case "rotate":
                                            n = !/(deg|\d)$/i.test(i)
                                        }
                                        return n || ($(e).transformCache[s] = "(" + i + ")"),
                                        $(e).transformCache[s]
                                    }
                                }
                            }();
                        for (t = 0; t < V.Lists.colors.length; t++)
                            !function() {
                                var o = V.Lists.colors[t];
                                V.Normalizations.registered[o] = function(t, e, i) {
                                    switch (t) {
                                    case "name":
                                        return o;
                                    case "extract":
                                        var n, s, r = V.RegEx.wrappedValueAlreadyExtracted.test(i) ? i : (s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        },
                                        /^[A-z]+$/i.test(i) ? n = s[i] !== z ? s[i] : s.black : V.RegEx.isHex.test(i) ? n = "rgb(" + V.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (n = s.black),
                                        (n || i).toString().match(V.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " "));
                                        return u <= 8 || 3 !== r.split(" ").length || (r += " 1"),
                                        r;
                                    case "inject":
                                        return u <= 8 ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"),
                                        (u <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (u || q.State.isAndroid && !q.State.isChrome) && (e += "|transform"),
                        new RegExp("^(" + e + ")$","i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (q.State.prefixMatches[t])
                            return [q.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; i < n; i++) {
                            var s = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            });
                            if (B.isString(q.State.prefixElement.style[s]))
                                return [q.State.prefixMatches[t] = s, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e;
                        return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }),
                        (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)","gi"), " ")
                    }
                },
                getPropertyValue: function(t, e, i, c) {
                    function h(t, e) {
                        function i() {
                            o && V.setPropertyValue(t, "display", "none")
                        }
                        var n, s = 0;
                        if (u <= 8)
                            s = X.css(t, e);
                        else {
                            var r, o = !1;
                            if (/^(width|height)$/.test(e) && 0 === V.getPropertyValue(t, "display") && (o = !0,
                            V.setPropertyValue(t, "display", V.Values.getDisplayType(t))),
                            !c) {
                                if ("height" === e && "border-box" !== V.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var a = t.offsetHeight - (parseFloat(V.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(V.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(V.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(V.getPropertyValue(t, "paddingBottom")) || 0);
                                    return i(),
                                    a
                                }
                                if ("width" === e && "border-box" !== V.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var l = t.offsetWidth - (parseFloat(V.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(V.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(V.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(V.getPropertyValue(t, "paddingRight")) || 0);
                                    return i(),
                                    l
                                }
                            }
                            r = $(t) === z ? L.getComputedStyle(t, null) : $(t).computedStyle ? $(t).computedStyle : $(t).computedStyle = L.getComputedStyle(t, null),
                            "borderColor" === e && (e = "borderTopColor"),
                            "" !== (s = 9 === u && "filter" === e ? r.getPropertyValue(e) : r[e]) && null !== s || (s = t.style[e]),
                            i()
                        }
                        return "auto" !== s || !/^(top|right|bottom|left)$/i.test(e) || ("fixed" === (n = h(t, "position")) || "absolute" === n && /top|left/i.test(e)) && (s = X(t).position()[e] + "px"),
                        s
                    }
                    var n, s, r, o, a;
                    if (V.Hooks.registered[e] ? (s = e,
                    r = V.Hooks.getRoot(s),
                    i === z && (i = V.getPropertyValue(t, V.Names.prefixCheck(r)[0])),
                    V.Normalizations.registered[r] && (i = V.Normalizations.registered[r]("extract", t, i)),
                    n = V.Hooks.extractValue(s, i)) : V.Normalizations.registered[e] && ("transform" !== (a = V.Normalizations.registered[e]("name", t)) && (o = h(t, V.Names.prefixCheck(a)[0]),
                    V.Values.isCSSNullValue(o) && V.Hooks.templates[e] && (o = V.Hooks.templates[e][1])),
                    n = V.Normalizations.registered[e]("extract", t, o)),
                    !/^[\d-]/.test(n))
                        if ($(t) && $(t).isSVG && V.Names.SVGAttribute(e))
                            if (/^(height|width)$/i.test(e))
                                try {
                                    n = t.getBBox()[e]
                                } catch (t) {
                                    n = 0
                                }
                            else
                                n = t.getAttribute(e);
                        else
                            n = h(t, V.Names.prefixCheck(e)[0]);
                    return V.Values.isCSSNullValue(n) && (n = 0),
                    2 <= q.debug && console.log("Get " + e + ": " + n),
                    n
                },
                setPropertyValue: function(t, e, i, n, s) {
                    var r, o, a = e;
                    if ("scroll" === e)
                        s.container ? s.container["scroll" + s.direction] = i : "Left" === s.direction ? L.scrollTo(i, s.alternateValue) : L.scrollTo(s.alternateValue, i);
                    else if (V.Normalizations.registered[e] && "transform" === V.Normalizations.registered[e]("name", t))
                        V.Normalizations.registered[e]("inject", t, i),
                        a = "transform",
                        i = $(t).transformCache[e];
                    else {
                        if (V.Hooks.registered[e] && (r = e,
                        o = V.Hooks.getRoot(e),
                        n = n || V.getPropertyValue(t, o),
                        i = V.Hooks.injectValue(r, i, n),
                        e = o),
                        V.Normalizations.registered[e] && (i = V.Normalizations.registered[e]("inject", t, i),
                        e = V.Normalizations.registered[e]("name", t)),
                        a = V.Names.prefixCheck(e)[0],
                        u <= 8)
                            try {
                                t.style[a] = i
                            } catch (t) {
                                q.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
                            }
                        else
                            $(t) && $(t).isSVG && V.Names.SVGAttribute(e) ? t.setAttribute(e, i) : t.style[a] = i;
                        2 <= q.debug && console.log("Set " + e + " (" + a + "): " + i)
                    }
                    return [a, i]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(V.getPropertyValue(e, t))
                    }
                    var i, n, s, r = "";
                    (u || q.State.isAndroid && !q.State.isChrome) && $(e).isSVG ? (i = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    },
                    X.each($(e).transformCache, function(t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                        i[t] && (r += t + "(" + i[t].join(" ") + ") ",
                        delete i[t])
                    })) : (X.each($(e).transformCache, function(t) {
                        return n = $(e).transformCache[t],
                        "transformPerspective" === t ? (s = n,
                        !0) : (9 === u && "rotateZ" === t && (t = "rotate"),
                        void (r += t + n + " "))
                    }),
                    s && (r = "perspective" + s + " " + r)),
                    V.setPropertyValue(e, "transform", r)
                }
            };
            V.Hooks.register(),
            V.Normalizations.register(),
            q.hook = function(t, n, s) {
                var r = z;
                return t = m(t),
                X.each(t, function(t, e) {
                    var i;
                    $(e) === z && q.init(e),
                    s === z ? r === z && (r = q.CSS.getPropertyValue(e, n)) : ("transform" === (i = q.CSS.setPropertyValue(e, n, s))[0] && q.CSS.flushTransformCache(e),
                    r = i)
                }),
                r
            }
            ;
            var g = function() {
                function t() {
                    return e ? M.promise || null : n
                }
                function i() {
                    function i(t) {
                        function u(t, e) {
                            var i = z
                              , n = z
                              , s = z;
                            return B.isArray(t) ? (i = t[0],
                            !B.isArray(t[1]) && /^[\d-]/.test(t[1]) || B.isFunction(t[1]) || V.RegEx.isHex.test(t[1]) ? s = t[1] : (B.isString(t[1]) && !V.RegEx.isHex.test(t[1]) || B.isArray(t[1])) && (n = e ? t[1] : H(t[1], C.duration),
                            t[2] !== z && (s = t[2]))) : i = t,
                            e || (n = n || C.easing),
                            B.isFunction(i) && (i = i.call(S, O, A)),
                            B.isFunction(s) && (s = s.call(S, O, A)),
                            [i || 0, n, s]
                        }
                        function e(t, e) {
                            var i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return n = t,
                                ""
                            })
                              , n = n || V.Values.getUnitType(t);
                            return [i, n]
                        }
                        if (C.begin && 0 === O)
                            try {
                                C.begin.call(P, P)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                        if ("scroll" === N) {
                            var i, n, s, r = /^x$/i.test(C.axis) ? "Left" : "Top", o = parseFloat(C.offset) || 0;
                            C.container ? B.isWrapped(C.container) || B.isNode(C.container) ? (C.container = C.container[0] || C.container,
                            s = (i = C.container["scroll" + r]) + X(S).position()[r.toLowerCase()] + o) : C.container = null : (i = q.State.scrollAnchor[q.State["scrollProperty" + r]],
                            n = q.State.scrollAnchor[q.State["scrollProperty" + ("Left" === r ? "Top" : "Left")]],
                            s = X(S).offset()[r.toLowerCase()] + o),
                            k = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: i,
                                    currentValue: i,
                                    endValue: s,
                                    unitType: "",
                                    easing: C.easing,
                                    scrollData: {
                                        container: C.container,
                                        direction: r,
                                        alternateValue: n
                                    }
                                },
                                element: S
                            },
                            q.debug && console.log("tweensContainer (scroll): ", k.scroll, S)
                        } else if ("reverse" === N) {
                            if (!$(S).tweensContainer)
                                return void X.dequeue(S, C.queue);
                            "none" === $(S).opts.display && ($(S).opts.display = "auto"),
                            "hidden" === $(S).opts.visibility && ($(S).opts.visibility = "visible"),
                            $(S).opts.loop = !1,
                            $(S).opts.begin = null,
                            $(S).opts.complete = null,
                            D.easing || delete C.easing,
                            D.duration || delete C.duration,
                            C = X.extend({}, $(S).opts, C);
                            var a, l = X.extend(!0, {}, $(S).tweensContainer);
                            for (var c in l) {
                                "element" !== c && (a = l[c].startValue,
                                l[c].startValue = l[c].currentValue = l[c].endValue,
                                l[c].endValue = a,
                                B.isEmptyObject(D) || (l[c].easing = C.easing),
                                q.debug && console.log("reverse tweensContainer (" + c + "): " + JSON.stringify(l[c]), S))
                            }
                            k = l
                        } else if ("start" === N) {
                            for (var h in $(S).tweensContainer && !0 === $(S).isAnimating && (l = $(S).tweensContainer),
                            X.each(E, function(t, e) {
                                if (RegExp("^" + V.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = u(e, !0)
                                      , n = i[0]
                                      , s = i[1]
                                      , r = i[2];
                                    if (V.RegEx.isHex.test(n)) {
                                        for (var o = ["Red", "Green", "Blue"], a = V.Values.hexToRgb(n), l = r ? V.Values.hexToRgb(r) : z, c = 0; c < o.length; c++) {
                                            var h = [a[c]];
                                            s && h.push(s),
                                            l !== z && h.push(l[c]),
                                            E[t + o[c]] = h
                                        }
                                        delete E[t]
                                    }
                                }
                            }),
                            E) {
                                var d = u(E[h])
                                  , p = d[0]
                                  , f = d[1]
                                  , m = d[2]
                                  , h = V.Names.camelCase(h)
                                  , g = V.Hooks.getRoot(h)
                                  , v = !1;
                                if ($(S).isSVG || "tween" === g || !1 !== V.Names.prefixCheck(g)[1] || V.Normalizations.registered[g] !== z) {
                                    (C.display !== z && null !== C.display && "none" !== C.display || C.visibility !== z && "hidden" !== C.visibility) && /opacity|filter/.test(h) && !m && 0 !== p && (m = 0),
                                    C._cacheValues && l && l[h] ? (m === z && (m = l[h].endValue + l[h].unitType),
                                    v = $(S).rootPropertyValueCache[g]) : V.Hooks.registered[h] ? m === z ? (v = V.getPropertyValue(S, g),
                                    m = V.getPropertyValue(S, h, v)) : v = V.Hooks.templates[g][1] : m === z && (m = V.getPropertyValue(S, h));
                                    var y = !1
                                      , _ = e(h, m)
                                      , m = _[0]
                                      , b = _[1]
                                      , p = (_ = e(h, p))[0].replace(/^([+-\/*])=/, function(t, e) {
                                        return y = e,
                                        ""
                                    })
                                      , x = _[1];
                                    if (m = parseFloat(m) || 0,
                                    p = parseFloat(p) || 0,
                                    "%" === x && (/^(fontSize|lineHeight)$/.test(h) ? (p /= 100,
                                    x = "em") : /^scale/.test(h) ? (p /= 100,
                                    x = "") : /(Red|Green|Blue)$/i.test(h) && (p = p / 100 * 255,
                                    x = "")),
                                    /[\/*]/.test(y))
                                        x = b;
                                    else if (b !== x && 0 !== m)
                                        if (0 === p)
                                            x = b;
                                        else {
                                            T = T || function() {
                                                var t = {
                                                    myParent: S.parentNode || I.body,
                                                    position: V.getPropertyValue(S, "position"),
                                                    fontSize: V.getPropertyValue(S, "fontSize")
                                                }
                                                  , e = t.position === R.lastPosition && t.myParent === R.lastParent
                                                  , i = t.fontSize === R.lastFontSize;
                                                R.lastParent = t.myParent,
                                                R.lastPosition = t.position,
                                                R.lastFontSize = t.fontSize;
                                                var n, s = {};
                                                return i && e ? (s.emToPx = R.lastEmToPx,
                                                s.percentToPxWidth = R.lastPercentToPxWidth,
                                                s.percentToPxHeight = R.lastPercentToPxHeight) : (n = $(S).isSVG ? I.createElementNS("http://www.w3.org/2000/svg", "rect") : I.createElement("div"),
                                                q.init(n),
                                                t.myParent.appendChild(n),
                                                X.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                    q.CSS.setPropertyValue(n, e, "hidden")
                                                }),
                                                q.CSS.setPropertyValue(n, "position", t.position),
                                                q.CSS.setPropertyValue(n, "fontSize", t.fontSize),
                                                q.CSS.setPropertyValue(n, "boxSizing", "content-box"),
                                                X.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                    q.CSS.setPropertyValue(n, e, "100%")
                                                }),
                                                q.CSS.setPropertyValue(n, "paddingLeft", "100em"),
                                                s.percentToPxWidth = R.lastPercentToPxWidth = (parseFloat(V.getPropertyValue(n, "width", null, !0)) || 1) / 100,
                                                s.percentToPxHeight = R.lastPercentToPxHeight = (parseFloat(V.getPropertyValue(n, "height", null, !0)) || 1) / 100,
                                                s.emToPx = R.lastEmToPx = (parseFloat(V.getPropertyValue(n, "paddingLeft")) || 1) / 100,
                                                t.myParent.removeChild(n)),
                                                null === R.remToPx && (R.remToPx = parseFloat(V.getPropertyValue(I.body, "fontSize")) || 16),
                                                null === R.vwToPx && (R.vwToPx = parseFloat(L.innerWidth) / 100,
                                                R.vhToPx = parseFloat(L.innerHeight) / 100),
                                                s.remToPx = R.remToPx,
                                                s.vwToPx = R.vwToPx,
                                                s.vhToPx = R.vhToPx,
                                                1 <= q.debug && console.log("Unit ratios: " + JSON.stringify(s), S),
                                                s
                                            }();
                                            var w = /margin|padding|left|right|width|text|word|letter/i.test(h) || /X$/.test(h) || "x" === h ? "x" : "y";
                                            switch (b) {
                                            case "%":
                                                m *= "x" == w ? T.percentToPxWidth : T.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                m *= T[b + "ToPx"]
                                            }
                                            switch (x) {
                                            case "%":
                                                m *= 1 / ("x" == w ? T.percentToPxWidth : T.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                m *= 1 / T[x + "ToPx"]
                                            }
                                        }
                                    switch (y) {
                                    case "+":
                                        p = m + p;
                                        break;
                                    case "-":
                                        p = m - p;
                                        break;
                                    case "*":
                                        p *= m;
                                        break;
                                    case "/":
                                        p = m / p
                                    }
                                    k[h] = {
                                        rootPropertyValue: v,
                                        startValue: m,
                                        currentValue: m,
                                        endValue: p,
                                        unitType: x,
                                        easing: f
                                    },
                                    q.debug && console.log("tweensContainer (" + h + "): " + JSON.stringify(k[h]), S)
                                } else
                                    q.debug && console.log("Skipping [" + g + "] due to a lack of browser support.")
                            }
                            k.element = S
                        }
                        k.element && (V.Values.addClass(S, "velocity-animating"),
                        F.push(k),
                        "" === C.queue && ($(S).tweensContainer = k,
                        $(S).opts = C),
                        $(S).isAnimating = !0,
                        O === A - 1 ? (q.State.calls.push([F, P, C, null, M.resolver]),
                        !1 === q.State.isTicking && (q.State.isTicking = !0,
                        j())) : O++)
                    }
                    var T, S = this, C = X.extend({}, q.defaults, D), k = {};
                    switch ($(S) === z && q.init(S),
                    parseFloat(C.delay) && !1 !== C.queue && X.queue(S, C.queue, function(t) {
                        q.velocityQueueEntryFlag = !0,
                        $(S).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(C.delay)),
                            next: t
                        }
                    }),
                    C.duration.toString().toLowerCase()) {
                    case "fast":
                        C.duration = 200;
                        break;
                    case "normal":
                        C.duration = 400;
                        break;
                    case "slow":
                        C.duration = 600;
                        break;
                    default:
                        C.duration = parseFloat(C.duration) || 1
                    }
                    !1 !== q.mock && (!0 === q.mock ? C.duration = C.delay = 1 : (C.duration *= parseFloat(q.mock) || 1,
                    C.delay *= parseFloat(q.mock) || 1)),
                    C.easing = H(C.easing, C.duration),
                    C.begin && !B.isFunction(C.begin) && (C.begin = null),
                    C.progress && !B.isFunction(C.progress) && (C.progress = null),
                    C.complete && !B.isFunction(C.complete) && (C.complete = null),
                    C.display !== z && null !== C.display && (C.display = C.display.toString().toLowerCase(),
                    "auto" === C.display && (C.display = q.CSS.Values.getDisplayType(S))),
                    C.visibility !== z && null !== C.visibility && (C.visibility = C.visibility.toString().toLowerCase()),
                    C.mobileHA = C.mobileHA && q.State.isMobile && !q.State.isGingerbread,
                    !1 === C.queue ? C.delay ? setTimeout(i, C.delay) : i() : X.queue(S, C.queue, function(t, e) {
                        return !0 === e ? (M.promise && M.resolver(P),
                        !0) : (q.velocityQueueEntryFlag = !0,
                        void i())
                    }),
                    "" !== C.queue && "fx" !== C.queue || "inprogress" === X.queue(S)[0] || X.dequeue(S)
                }
                var e, n, s, P, E, r = arguments[0] && (arguments[0].p || X.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || B.isString(arguments[0].properties));
                if (B.isWrapped(this) ? (e = !1,
                s = 0,
                n = P = this) : (e = !0,
                s = 1,
                P = r ? arguments[0].elements || arguments[0].e : arguments[0]),
                P = m(P)) {
                    D = r ? (E = arguments[0].properties || arguments[0].p,
                    arguments[0].options || arguments[0].o) : (E = arguments[s],
                    arguments[s + 1]);
                    var A = P.length
                      , O = 0;
                    if (!/^(stop|finish)$/i.test(E) && !X.isPlainObject(D))
                        for (var D = {}, o = s + 1; o < arguments.length; o++)
                            B.isArray(arguments[o]) || !/^(fast|normal|slow)$/i.test(arguments[o]) && !/^\d/.test(arguments[o]) ? B.isString(arguments[o]) || B.isArray(arguments[o]) ? D.easing = arguments[o] : B.isFunction(arguments[o]) && (D.complete = arguments[o]) : D.duration = arguments[o];
                    var N, M = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (e && q.Promise && (M.promise = new q.Promise(function(t, e) {
                        M.resolver = t,
                        M.rejecter = e
                    }
                    )),
                    E) {
                    case "scroll":
                        N = "scroll";
                        break;
                    case "reverse":
                        N = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        X.each(P, function(t, e) {
                            $(e) && $(e).delayTimer && (clearTimeout($(e).delayTimer.setTimeout),
                            $(e).delayTimer.next && $(e).delayTimer.next(),
                            delete $(e).delayTimer)
                        });
                        var a = [];
                        return X.each(q.State.calls, function(s, r) {
                            r && X.each(r[1], function(t, i) {
                                var n = D === z ? "" : D;
                                return !0 !== n && r[2].queue !== n && (D !== z || !1 !== r[2].queue) || void X.each(P, function(t, e) {
                                    e === i && (!0 !== D && !B.isString(D) || (X.each(X.queue(e, B.isString(D) ? D : ""), function(t, e) {
                                        B.isFunction(e) && e(null, !0)
                                    }),
                                    X.queue(e, B.isString(D) ? D : "", [])),
                                    "stop" === E ? ($(e) && $(e).tweensContainer && !1 !== n && X.each($(e).tweensContainer, function(t, e) {
                                        e.endValue = e.currentValue
                                    }),
                                    a.push(s)) : "finish" === E && (r[2].duration = 1))
                                })
                            })
                        }),
                        "stop" === E && (X.each(a, function(t, e) {
                            S(e, !0)
                        }),
                        M.promise && M.resolver(P)),
                        t();
                    default:
                        if (!X.isPlainObject(E) || B.isEmptyObject(E)) {
                            if (B.isString(E) && q.Redirects[E]) {
                                var l = (u = X.extend({}, D)).duration
                                  , c = u.delay || 0;
                                return !0 === u.backwards && (P = X.extend(!0, [], P).reverse()),
                                X.each(P, function(t, e) {
                                    parseFloat(u.stagger) ? u.delay = c + parseFloat(u.stagger) * t : B.isFunction(u.stagger) && (u.delay = c + u.stagger.call(e, t, A)),
                                    u.drag && (u.duration = parseFloat(l) || (/^(callout|transition)/.test(E) ? 1e3 : 400),
                                    u.duration = Math.max(u.duration * (u.backwards ? 1 - t / A : (t + 1) / A), .75 * u.duration, 200)),
                                    q.Redirects[E].call(e, e, u || {}, t, A, P, M.promise ? M : z)
                                }),
                                t()
                            }
                            var h = "Velocity: First argument (" + E + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return M.promise ? M.rejecter(new Error(h)) : console.log(h),
                            t()
                        }
                        N = "start"
                    }
                    var u, d, R = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, F = [];
                    if (X.each(P, function(t, e) {
                        B.isNode(e) && i.call(e)
                    }),
                    (u = X.extend({}, q.defaults, D)).loop = parseInt(u.loop),
                    d = 2 * u.loop - 1,
                    u.loop)
                        for (var p = 0; p < d; p++) {
                            var f = {
                                delay: u.delay,
                                progress: u.progress
                            };
                            p === d - 1 && (f.display = u.display,
                            f.visibility = u.visibility,
                            f.complete = u.complete),
                            g(P, "reverse", f)
                        }
                    return t()
                }
            };
            (q = X.extend(g, q)).animate = g;
            var C = L.requestAnimationFrame || e;
            return q.State.isMobile || I.hidden === z || I.addEventListener("visibilitychange", function() {
                I.hidden ? (C = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }
                ,
                j()) : C = L.requestAnimationFrame || e
            }),
            t.Velocity = q,
            t !== L && (t.fn.velocity = g,
            t.fn.velocity.defaults = q.defaults),
            X.each(["Down", "Up"], function(t, u) {
                q.Redirects["slide" + u] = function(i, t, e, n, s, r) {
                    var o = X.extend({}, t)
                      , a = o.begin
                      , l = o.complete
                      , c = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    }
                      , h = {};
                    o.display === z && (o.display = "Down" === u ? "inline" === q.CSS.Values.getDisplayType(i) ? "inline-block" : "block" : "none"),
                    o.begin = function() {
                        for (var t in a && a.call(s, s),
                        c) {
                            h[t] = i.style[t];
                            var e = q.CSS.getPropertyValue(i, t);
                            c[t] = "Down" === u ? [e, 0] : [0, e]
                        }
                        h.overflow = i.style.overflow,
                        i.style.overflow = "hidden"
                    }
                    ,
                    o.complete = function() {
                        for (var t in h)
                            i.style[t] = h[t];
                        l && l.call(s, s),
                        r && r.resolver(s)
                    }
                    ,
                    q(i, c, o)
                }
            }),
            X.each(["In", "Out"], function(t, c) {
                q.Redirects["fade" + c] = function(t, e, i, n, s, r) {
                    var o = X.extend({}, e)
                      , a = {
                        opacity: "In" === c ? 1 : 0
                    }
                      , l = o.complete;
                    o.complete = i !== n - 1 ? o.begin = null : function() {
                        l && l.call(s, s),
                        r && r.resolver(s)
                    }
                    ,
                    o.display === z && (o.display = "In" === c ? "auto" : "none"),
                    q(this, a, o)
                }
            }),
            q
        }
        function y(t) {
            return -t.tension * t.x - t.friction * t.v
        }
        function _(t, e, i) {
            var n = {
                x: t.x + i.dx * e,
                v: t.v + i.dv * e,
                tension: t.tension,
                friction: t.friction
            };
            return {
                dx: n.v,
                dv: y(n)
            }
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.viewportUnitsBuggyfill = e()
}(this, function() {
    "use strict";
    function r() {
        u && (t(),
        setTimeout(function() {
            a.textContent = i(),
            a.parentNode.appendChild(a)
        }, 1))
    }
    function t() {
        return n = [],
        f.call(document.styleSheets, function(t) {
            "patched-viewport" !== t.ownerNode.id && t.cssRules && "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") && (t.media && t.media.mediaText && window.matchMedia && !window.matchMedia(t.media.mediaText).matches || f.call(t.cssRules, e))
        }),
        n
    }
    function e(i) {
        if (7 === i.type) {
            var t;
            try {
                t = i.cssText
            } catch (t) {
                return
            }
            return p.lastIndex = 0,
            void (p.test(t) && (n.push([i, null, t]),
            c.hacks && c.hacks.findDeclarations(n, i, null, t)))
        }
        if (i.style)
            f.call(i.style, function(t) {
                var e = i.style.getPropertyValue(t);
                p.lastIndex = 0,
                p.test(e) && (n.push([i, t, e]),
                c.hacks && c.hacks.findDeclarations(n, i, t, e))
            });
        else {
            if (!i.cssRules)
                return;
            f.call(i.cssRules, function(t) {
                e(t)
            })
        }
    }
    function i() {
        var t, e;
        t = window.innerHeight,
        e = window.innerWidth,
        h = {
            vh: t,
            vw: e,
            vmax: Math.max(e, t),
            vmin: Math.min(e, t)
        };
        var s, r, o = [], a = [];
        return n.forEach(function(t) {
            var e = function(t, e, i) {
                var n, s = [];
                n = i.replace(p, l),
                c.hacks && (n = c.hacks.overwriteDeclaration(t, e, n));
                e && (s.push(t.selectorText),
                n = e + ": " + n + ";");
                var r = t.parentRule;
                for (; r; )
                    s.unshift("@media " + r.media.mediaText),
                    r = r.parentRule;
                return {
                    selector: s,
                    content: n
                }
            }
            .apply(null, t)
              , i = e.selector.length ? e.selector.join(" {\n") + " {\n" : ""
              , n = new Array(e.selector.length + 1).join("\n}");
            if (!i || i !== s)
                return a.length && (o.push(s + a.join("\n") + r),
                a.length = 0),
                void (i ? (s = i,
                r = n,
                a.push(e.content)) : (o.push(e.content),
                r = s = null));
            i && !s && (s = i,
            r = n),
            a.push(e.content)
        }),
        a.length && o.push(s + a.join("\n") + r),
        g && o.push("* { content: normal !important; }"),
        o.join("\n\n")
    }
    function l(t, e, i) {
        var n = h[i];
        return parseFloat(e) / 100 * n + "px"
    }
    function o(t) {
        return t.slice(0, t.indexOf("/", t.indexOf("://") + 3))
    }
    var c, h, n, a, s, u = !1, d = window.navigator.userAgent, p = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g, f = [].forEach, m = !1, g = -1 < d.indexOf("Opera Mini"), v = /(iPhone|iPod|iPad).+AppleWebKit/i.test(d) && ((s = d.match(/OS (\d)/)) && 1 < s.length && parseInt(s[1]) < 8), y = -1 < d.indexOf(" Android ") && -1 < d.indexOf("Version/") && parseFloat((d.match("Android ([0-9.]+)") || [])[1]) <= 4.4, m = m || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    return {
        version: "0.5.0",
        findProperties: t,
        getCss: i,
        init: function(t) {
            var e, n;
            function s() {
                --n || e()
            }
            u || (!0 === t && (t = {
                force: !0
            }),
            (c = t || {}).isMobileSafari = v,
            c.isBadStockAndroid = y,
            (c.force || v || m || y || g || c.hacks && c.hacks.required(c)) && (c.hacks && c.hacks.initialize(c),
            u = !0,
            (a = document.createElement("style")).id = "patched-viewport",
            document.head.appendChild(a),
            e = function() {
                var i, n, s, t = (i = r,
                n = c.refreshDebounceWait || 100,
                function() {
                    var t = this
                      , e = arguments;
                    clearTimeout(s),
                    s = setTimeout(function() {
                        i.apply(t, e)
                    }, n)
                }
                );
                window.addEventListener("orientationchange", t, !0),
                window.addEventListener("pageshow", t, !0),
                (c.force || m || function() {
                    try {
                        return window.self !== window.top
                    } catch (t) {
                        return 1
                    }
                }()) && (window.addEventListener("resize", t, !0),
                c._listeningToResize = !0),
                c.hacks && c.hacks.initializeEvents(c, r, t),
                r()
            }
            ,
            n = 0,
            f.call(document.styleSheets, function(t) {
                var e, i;
                t.href && o(t.href) !== o(location.href) && (n++,
                e = t.ownerNode,
                i = s,
                function(t, e, i) {
                    var n = new XMLHttpRequest;
                    if ("withCredentials"in n)
                        n.open("GET", t, !0);
                    else {
                        if ("undefined" == typeof XDomainRequest)
                            throw new Error("cross-domain XHR not supported");
                        (n = new XDomainRequest).open("GET", t)
                    }
                    n.onload = e,
                    n.onerror = i,
                    n.send()
                }(e.href, function() {
                    var t = document.createElement("style");
                    t.media = e.media,
                    t.setAttribute("data-href", e.href),
                    t.textContent = this.responseText,
                    e.parentNode.replaceChild(t, e),
                    i()
                }, i))
            }),
            n || e()))
        },
        refresh: r
    }
}),
$.fn.clients = function() {
    this.each(function() {
        var e = $(this);
        e.find("a.infopage__title__leftbtns__btn").click(function(t) {
            t.preventDefault(),
            $(this).hasClass("infopage__title__leftbtns__btn_active") || (e.find("a.infopage__title__leftbtns__btn").toggleClass("infopage__title__leftbtns__btn_active"),
            e.find("section.tabClients").toggle(),
            e.find("[data-info-columns]:visible").each(function() {
                $(this).data("infoColumns").refresh()
            }))
        })
    })
}
,
$.validator.addMethod("email_address", function(t, e) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(t)
}, "Please enter a valid email address"),
$.fn.contact = function() {
    this.each(function() {
        var t = $(this)
          , n = t.find(".contact__select")
          , e = t.find(".contact__office")
          , i = e.find(".contact__office__content")
          , s = e.find(".contact__office__column")
          , r = e.find(".control")
          , o = r.data("control")
          , a = e.find(".contact__office__column__picture")
          , l = e.find(".contact__office__map")
          , c = (n.find("option"),
        t.find(".contact__us"))
          , h = t.find(".contact__networks")
          , u = t.find(".contact__form")
          , d = u.find(".contact__form__subject")
          , p = u.find(".contact__form__cancel")
          , f = !1
          , m = !0
          , g = "easeOutCubic"
          , v = 0
          , y = s.length
          , _ = t.find(".contact__subscribe")
          , b = _.find(".contact__subscribe__field");
        b.on("propertychange change keyup paste input", function() {
            0 < b.val().length ? _.addClass("contact__subscribe_filled") : _.removeClass("contact__subscribe_filled")
        }),
        _.validate({
            rules: {
                email: {
                    required: !0,
                    email_address: !0
                }
            },
            messages: {
                email: {
                    required: "Please enter your e-mail",
                    email_address: "E-mail is invalid"
                }
            }
        }),
        u.validate({
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email_address: !0
                },
                message: {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Please enter your name"
                },
                email: {
                    required: "Please enter your e-mail",
                    email_address: "E-mail is invalid"
                },
                message: {
                    required: "Please enter a message"
                }
            }
        }),
        _.add(u).on("submit", function() {
            var e = $(this)
              , i = e.find("input, textarea, button");
            return e.hasClass("i-loading") || e.hasClass("i-success") || !e.valid() || (i.blur(),
            e.addClass("i-loading"),
            e.ajaxSubmit({
                dataType: "json",
                success: function(t) {
                    e.removeClass("i-loading"),
                    "success" == t.message && (i.attr("disabled", "disabled").attr("tabindex", "-1"),
                    e.addClass("i-success"))
                }
            })),
            !1
        }),
        a.each(function() {
            $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")")
        });
        function x() {
            y < 2 ? o.disableState() : y - v <= 1 ? o.restartState() : o.enableState()
        }
        x();
        n.select2({
            minimumResultsForSearch: -1,
            matcher: function(t, e, i) {
                return n.val() != i.attr("value")
            }
        }),
        $(".select2-focusser").hide(),
        $(".select2-drop").not(".select2-with-searchbox").find(".select2-search").hide(),
        u.velocity({
            translateX: 75,
            opacity: 0
        }, 0);
        function w() {
            n.select2("enable"),
            $(this).hide()
        }
        n.on("change", function() {
            var t = n.val();
            d.val(t);
            var e = "absolute" == u.css("position") ? 250 : 0;
            t && !f ? (f = !0,
            n.select2("disable"),
            c.add(h).velocity({
                translateX: -75,
                opacity: 0
            }, e, g, w),
            u.show().velocity({
                translateX: 0,
                opacity: 1
            }, e, g)) : !t && f && (f = !1,
            n.select2("disable"),
            c.add(h).show().velocity({
                translateX: 0,
                opacity: 1
            }, e, g),
            u.velocity({
                translateX: 75,
                opacity: 0
            }, e, g, w))
        }),
        p.on("click", function() {
            n.select2("val", "", !0)
        }),
        r.on("click", function() {
            if (!m)
                return !1;
            m = !1,
            setTimeout(function() {
                m = !0
            }, 350);
            var t = "translateX(" + -.5 * (v = y - v <= 1 ? 0 : v + 1) + "%)";
            i.css({
                "-webkit-transform": t,
                transform: t
            }),
            x()
        }),
        $window.on("load", function() {
            var t = new google.maps.Map(l[0],{
                center: new google.maps.LatLng(l.data("lat"),l.data("lng")),
                zoom: l.data("zoom"),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: !0,
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        color: "#141414"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        color: "#313131"
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#141414"
                    }, {
                        visibility: "off"
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#AAAAAA"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [{
                        color: "#313131"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#222222"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                minZoom: l.data("zoom") - 5,
                maxZoom: l.data("zoom") + 2
            })
              , e = new google.maps.MarkerImage(l.data("placemark"),new google.maps.Size(28,50),new google.maps.Point(0,0),new google.maps.Point(14,25),new google.maps.Size(28,50));
            new google.maps.Marker({
                position: new google.maps.LatLng(l.data("lat"),l.data("lng")),
                map: t,
                icon: e,
                clickable: !1
            });
            $window.on("resize", function() {
                t.setCenter(new google.maps.LatLng(l.data("lat"),l.data("lng")))
            })
        })
    })
}
,
$.fn.control = function() {
    this.each(function() {
        var t = $(this)
          , e = t.find(".control__icon")
          , i = {
            frame: {
                index: 0
            },
            length: 102,
            columnSize: 34,
            width: e.width(),
            height: e.height(),
            hovered: !1,
            reverted: !1,
            state: "disabled",
            mouseenter: function() {
                i.hovered = !0,
                "restart" != i.state || i.reverted || (i.reverted = !0,
                i.animate(50, 32))
            },
            mouseleave: function() {
                i.hovered = !1,
                "restart" == i.state && i.reverted && (i.reverted = !1,
                i.animate(32, 50))
            },
            disableState: function() {
                if ("disabled" == this.state)
                    return !1;
                this.state = "disabled",
                t.removeClass("control_next control_restart")
            },
            enableState: function() {
                if ("enabled" == this.state)
                    return !1;
                "disabled" == this.state ? (TweenLite.killTweensOf(this.frame),
                this.frame.index = 101,
                i.move(this.frame.index)) : i.animate(101, 73),
                this.state = "enabled",
                this.reverted = !1,
                t.removeClass("control_restart").addClass("control_next")
            },
            restartState: function() {
                if ("restart" == this.state)
                    return !1;
                "disabled" == this.state ? (TweenLite.killTweensOf(this.frame),
                this.frame.index = 31,
                i.move(this.frame.index)) : i.animate(31, 0),
                this.reverted = !1,
                this.state = "restart",
                t.removeClass("control_next").addClass("control_restart")
            },
            animate: function(t, e) {
                TweenLite.killTweensOf(this.frame),
                void 0 !== e && (this.frame.index = e),
                TweenMax.to(this.frame, .3, {
                    index: t,
                    roundProps: "index",
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        i.move(i.frame.index)
                    }
                })
            },
            move: function(t) {
                e[0].style.backgroundPosition = -Math.floor(t / this.columnSize) * this.width + "px " + t % this.columnSize * -this.height + "px"
            }
        };
        t.hover(i.mouseenter, i.mouseleave),
        t.data("control", i)
    })
}
,
$.fn.frame = function(t) {
    $body.addClass("l-frame");
    var i = this
      , e = i.find(t.sections).attr("tabindex", -1)
      , n = t.duration
      , s = !1
      , r = !1
      , o = {
        index: 0,
        pause: 600,
        paused: !1,
        enabled: !0,
        available: !0,
        pauseTimer: !1,
        length: e.length,
        screens: [],
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        }
    };
    e.each(function(t) {
        o.screens.push({
            position: t,
            type: "section",
            block: $(this),
            name: $(this).data("name")
        })
    });
    function a(t, e) {
        this.block.triggerHandler("beforeShow", {
            direction: t,
            force: e || !1
        }),
        this.block.triggerHandler("show", {
            direction: t,
            force: e || !1
        })
    }
    function l(t, e) {
        this.block.triggerHandler("beforeHide", {
            direction: t,
            force: e || !1
        }),
        this.block.triggerHandler("hide", {
            direction: t,
            force: e || !1
        })
    }
    var c, h;
    $.each(o.screens, function(t) {
        o.screens[t].block.data("screen", {
            block: o.screens[t].block,
            enable: a,
            disable: l
        })
    }),
    1 < o.screens.length && (i.append('<div class="ui-scroll"><i class="ui-scroll__content" /><i class="ui-scroll__handle" /></div>'),
    c = i.find(".ui-scroll__handle"),
    h = function() {
        r = 50 < site.sizes.height / o.screens.length ? (c.height(100 / o.screens.length + "%"),
        c.height()) : (c.height(50),
        50),
        c.css("top", (site.sizes.height - r) / o.screens.length * o.index)
    }
    ,
    $window.on("resize", h),
    h()),
    o.can = function(t) {
        return 0 <= o.index + t && o.index + t < o.screens.length && o.index + t != o.index
    }
    ,
    o.timer = function() {
        o.available = !1,
        setTimeout(function() {
            o.available = !0
        }, !1)
    }
    ,
    o.move = function(t) {
        return !(o.paused || !o.enabled || !o.can(t) || !o.available || $root.hasClass("page_menu") || $root.hasClass("page_panel")) && (o.timer(),
        o.screens[o.index].block.data("screen").disable(0 < t ? "prev" : "next"),
        o.index += t,
        o.scroll(o.index),
        o.screens[o.index].block.data("screen").enable(0 < t ? "next" : "prev"),
        !0)
    }
    ,
    o.jump = function(t, e) {
        if (o.paused || !o.enabled || !o.available || o.index == t || $root.hasClass("page_menu") || $root.hasClass("page_panel"))
            return !1;
        if (o.timer(),
        o.screens[o.index].block.data("screen").disable(o.index < t ? "prev" : "next"),
        t < o.index)
            for (var i = t + 1; i < o.index; i++)
                o.screens[i].block.data("screen").disable("next", !0);
        return o.scroll(t, e),
        o.screens[t].block.data("screen").enable(t > o.index ? "next" : "prev"),
        o.index = t,
        !0
    }
    ,
    o.scroll = function(t, e) {
        if (o.paused)
            return !1;
        c && c.velocity("stop").velocity({
            top: (site.sizes.height - r) / o.screens.length * t
        }, n, "easeOutCubic"),
        s && i.triggerHandler("frame-scroll")
    }
    ,
    $document.on("keydown.frame", function(t) {
        site.device.isPhone || $(t.target).is("input") || (38 == t.which && (o.move(-1),
        t.preventDefault()),
        40 == t.which && (o.move(1),
        t.preventDefault()))
    }),
    $document.on("touchmove", function(t) {
        t.preventDefault()
    }),
    i.swipe({
        swipeDown: function() {
            o.move(-1)
        },
        swipeUp: function() {
            o.move(1)
        },
        excludedElements: "label, button, input, select, textarea"
    });
    function u() {
        site.device.isMobile ? i.swipe("enable") : i.swipe("disable")
    }
    $window.on("resize", u),
    u(),
    i.on("mousewheel", function(t) {
        var e;
        !site.device.isMobile && !o.paused && 1 <= Math.abs(t.deltaY) && (e = 0 < t.deltaY ? -1 : 1,
        o.move(e),
        o.paused = !0,
        o.pauseTimer = setTimeout(function() {
            o.paused = !1
        }, o.pause)),
        t.preventDefault()
    }),
    i.data("frame", o);
    var d = 2 < window.location.hash.length && window.location.hash.replace("#", "")
      , p = 0;
    return $.each(o.screens, function(t, e) {
        e.name == d && (p = t)
    }),
    o.index = p,
    o.scroll(p),
    s = !0,
    o.screens[p].block.data("screen").enable("next", !0),
    $help.appendTo(o.screens[p].block),
    $help.data("ui-help").enable(!0),
    i.one("frame-scroll", function() {
        $help.data("ui-help").disable()
    }),
    i
}
,
$.fn.infoColumns = function() {
    this.each(function() {
        var e = $(this)
          , i = e.parent()
          , n = e.find("[data-info-columns-item]").clone()
          , s = e.closest(".infopage")
          , r = -1
          , o = function() {
            var t = Math.max(1, Math.floor(i.width() / 360));
            t != r && (r = t,
            s.removeClass("infopage_columns_1 infopage_columns_2 infopage_columns_3 infopage_columns_4"),
            s.addClass("infopage_columns_" + t),
            e.empty(),
            n.clone().appendTo(e),
            (e = e.splitter({
                columns: t,
                itemsSelector: "[data-info-columns-item]",
                columnTag: "div",
                direction: "vertical",
                containerClass: "rowslayout__row__columns",
                columnClass: "rowslayout__row__columns__column"
            })).attr("data-info-columns", "true"),
            e.data("infoColumns", {
                refresh: o
            }))
        };
        $window.on("resize", o),
        o()
    })
}
,
$.fn.menu = function() {
    this.each(function() {
        var t = $(this)
          , e = t.find(".menu__item")
          , i = t.find(".menu__close")
          , n = $root.find(".ui-menu")
          , s = $('<div class="menu__overlay" />').insertBefore(t)
          , r = t.find(".menu__search")
          , o = r.find(".menu__search__field")
          , a = !1;
        t.find("a, input, button").attr("tabindex", -1);
        function l() {
            $root.addClass("page_menu"),
            $document.on("touchmove.menu mousewheel.menu", function(t) {
                t.preventDefault()
            })
        }
        function c() {
            $root.removeClass("page_menu"),
            $document.off("touchmove.menu mousewheel.menu"),
            o.blur()
        }
        t.data("menu", {
            open: l,
            close: c
        }),
        n.on("click", l),
        i.add(s).on("click", c),
        o.on("propertychange change keyup paste input", function() {
            (a = 0 < o.val().length) ? r.addClass("menu__search_filled") : r.removeClass("menu__search_filled")
        }),
        r.on("submit", function() {
            if (!a)
                return !1
        }),
        site.device.isMobile && e.on("click", function() {
            var t = $(this);
            t.addClass("menu__item_tap"),
            setTimeout(function() {
                t.removeClass("menu__item_tap")
            }, 250)
        })
    })
}
,
$.fn.overview = function() {
    this.each(function() {
        function t() {
            h.height(window.innerHeight)
        }
        var h = $(this)
          , u = h.find(".overview__item");
        $window.on("resize", t),
        t(),
        h.find(".overview__item__icon").each(function() {
            var t = $(this)
              , e = t.find(".overview__item__icon__inner")
              , i = !1;
            t.on(site.device.support.touch ? "click" : "mouseenter", function() {
                i || (i = !0,
                e.velocity({
                    rotateZ: 0
                }, 0),
                e.velocity({
                    rotateZ: -180
                }, 280, "easeOutCubic", function() {
                    i = !1
                }))
            })
        }),
        u.each(function(t) {
            var n = $(this)
              , e = n.find(".overview__item__picture")
              , s = $('<i class="overview__item__overlay" />').appendTo(n)
              , i = e.find("img")
              , r = n.find(".overview__item__icon")
              , o = i.attr("src")
              , a = n.data("name")
              , l = t >= u.length - 1;
            $("<img />")[0].src = o,
            e.css("background-image", "url(" + o + ")");
            var c = {
                overlay: {
                    visible: {
                        opacity: 0
                    },
                    hidden: {
                        opacity: .3
                    }
                },
                section: {
                    visible: {
                        translateY: "0%",
                        scale: 1
                    },
                    prev: {
                        translateY: "-22%",
                        scale: .94
                    },
                    next: {
                        translateY: "100%",
                        scale: 1
                    }
                }
            };
            n.on("show", function(t, e) {
                l ? $(".bottomArrow").css("display", "none") : $(".bottomArrow").css("display", "block");
                var i = e.force ? 0 : 750;
                window.location.hash = a,
                h.addClass("overview_" + a),
                setTimeout(function() {
                    n.addClass("overview__item_active")
                }, 10),
                e.direction.prev ? (s.velocity(c.overlay.visible, 0),
                s.hide()) : s.show().velocity(c.overlay.visible, 750, "easeOutCubic", function() {
                    s.hide()
                }),
                s.velocity(c.overlay.visible, i, "easeOutCubic"),
                n.show().velocity(c.section[e.direction], 0).velocity(c.section.visible, i, "easeOutCubic"),
                site.device.isPhone || r.each(function() {
                    $(this).velocity("stop"),
                    "next" == e.direction && $(this).velocity({
                        translateY: 20 + 20 * Math.random()
                    }, 0),
                    $(this).velocity({
                        translateY: 0
                    }, {
                        duration: .75 * i + .5 * i * Math.random(),
                        easing: "easeOutCubic",
                        delay: 0
                    })
                })
            }),
            n.on("hide", function(t, e) {
                var i = e.force ? 0 : 750;
                h.removeClass("overview_" + a),
                s.show().velocity(c.overlay.visible, 0),
                "prev" == e.direction && s.velocity(c.overlay.hidden, i, "easeOutCubic"),
                n.show().velocity(c.section.visible, 0).velocity(c.section[e.direction], i, "easeOutCubic", function() {
                    l && "prev" == e.direction || (n.removeClass("overview__item_active"),
                    n.hide()),
                    "next" == e.direction && n.hide()
                }),
                site.device.isPhone || r.each(function() {
                    var t = ("prev" == e.direction ? -1 : 1) * (20 + 20 * Math.random());
                    $(this).velocity("stop").velocity({
                        translateY: t
                    }, {
                        duration: i + .5 * i * Math.random(),
                        easing: "easeOutCubic"
                    })
                })
            })
        }),
        u.hide(),
        h.frame({
            sections: ".overview__item, .subscribe",
            duration: 750,
            delay: 937.5
        })
    })
}
,
$.fn.panel = function() {
    this.each(function() {
        var n = $(this)
          , s = n.find(".panel__title")
          , t = n.find(".panel__content")
          , r = t.find(".panel__content__list")
          , e = n.find(".panel__close")
          , o = $([])
          , i = $('<div class="panel__overlay" />').insertBefore(n);
        updateURL = n.data("url"),
        source = n.find(".panel__template").html(),
        template = Handlebars.compile(source),
        request = null,
        duration = 350,
        itemWidth = 360,
        itemHeight = 240,
        ratio = itemWidth / itemHeight,
        currentName = !1,
        itemMaxHeight = 290,
        n.velocity({
            translateX: "0%"
        }, 0);
        var a = new IScroll(t[0],{
            disableMouse: !0,
            mouseWheel: !0,
            scrollX: !1,
            scrollY: !0,
            click: !1,
            tap: !1,
            bindToWrapper: !1,
            scrollbars: "custom",
            interactiveScrollbars: !site.device.support.touch,
            probeType: 3
        });
        a.disable();
        function l() {
            if (!currentName)
                return !1;
            categories[currentName].items.forEach(function(t, e) {
                var i, n;
                t.offset > -a.y - itemMaxHeight && t.offset < -a.y + site.sizes.height && !t.visible && (t.visible = !0,
                n = (i = t.$thumb.find(".panel__item__picture")).data("thumb"),
                i.append('<img src="' + n + '" />'))
            })
        }
        function c(t) {
            $root.removeClass("page_panel"),
            $document.off("touchmove.menu mousewheel.menu"),
            a.disable(),
            n.velocity({
                translateX: "0%"
            }, duration, "easeOutCubic", function() {
                n.hide(),
                "function" == typeof t && t()
            }),
            i.add(e).velocity("fadeOut", duration)
        }
        var h = function() {
            o.length && o.first().width() != itemWidth ? o.find(".panel__item__picture").height(Math.floor(o.first().width() / ratio)) : o.find(".panel__item__picture").height("auto"),
            a.refresh(),
            function() {
                if (!currentName)
                    return;
                categories[currentName].items.forEach(function(t) {
                    t.offset = t.$thumb.position().top
                })
            }(),
            l()
        };
        $window.on("resize", h),
        h(),
        n.data("panel", {
            open: function(t) {
                if ($root.hasClass("page_panel"))
                    return !1;
                $root.addClass("page_panel"),
                a.enable(),
                $document.on("touchmove.menu mousewheel.menu", function(t) {
                    t.preventDefault()
                }),
                n.show().velocity({
                    translateX: "100%"
                }, duration, "easeOutCubic"),
                h(),
                i.add(e).velocity("fadeIn", duration),
                "function" == typeof t && t(a)
            },
            close: c,
            showCategory: function(t, e, i) {
                t != currentName && categories[t] ? (currentName = categories[t].name,
                r.empty(),
                s.empty(),
                s.text(categories[t].title),
                r.html(template(categories[t])),
                o = n.find(".panel__item"),
                categories[t].items.forEach(function(t, e) {
                    t.visible = !1,
                    t.$thumb = o.eq(e)
                }),
                "function" == typeof e && e(o),
                $root.hasClass("page_panel") && h()) : "function" == typeof e && i(n.find(".panel__item"))
            },
            updateVisibility: l
        }),
        t.on("mousedown", function(t) {
            t.preventDefault()
        }),
        a.on("scroll", l),
        e.add(i).on("click", c)
    })
}
,
Handlebars.registerHelper("spaces", function(t) {
    return t.replace(/(^|\s)([a-zA-Z]{1,2}|\&)\s/g, "$1$2&nbsp;")
}),
$.fn.projects = function() {
    this.each(function() {
        var r = $(this)
          , t = r.find(".control")
          , e = r.find(".projects__menu")
          , o = e.find(".projects__menu__text")
          , i = t.data("control")
          , n = r.find(".projects__item-template").html()
          , s = Handlebars.compile(n)
          , a = r.find(".projects__slideshow-template").html()
          , l = Handlebars.compile(a)
          , c = r.find(".projects__slider-template").html()
          , h = Handlebars.compile(c)
          , u = []
          , d = "easeOutCubic"
          , p = !1
          , f = !1;
        for (name in categories)
            categories[name].items.forEach(function(t) {
                t.category = name,
                u.push(t)
            });
        function m() {
            r.height(site.sizes.height)
        }
        $window.on("resize.projects", m),
        m();
        function g(t, e, i) {
            t.velocity({
                opacity: 0,
                translateX: e
            }, 0).show().velocity({
                opacity: 1,
                translateX: 0
            }, i, d)
        }
        function v(t, e, i) {
            t.velocity({
                opacity: 0,
                translateX: -e
            }, i, d, function() {
                t.hide()
            })
        }
        function y(s) {
            s.$block.on("show", function(t, e) {
                var i;
                s.category != f && (f = s.category,
                o.html("All " + categories[s.category].title),
                i = categories[s.category].title,
                $('<div class="projects__message" />').text(i.replace("+ ", "+")).velocity({
                    translateX: "-50%",
                    scale: .9,
                    opacity: 0
                }, 0).appendTo(r).velocity({
                    scale: 1,
                    opacity: 1
                }, 250, "easeOutCubic").delay(250).velocity({
                    scale: 1.1,
                    opacity: 0
                }, 450, "easeInCubic", function() {
                    $(this).remove()
                })),
                s.interactive = !1;
                var n = e.force ? 0 : 450;
                g(s.$about, 40, .78 * n),
                g(s.$client, 20, .78 * n),
                "next" == e.direction ? site.device.isPhone ? s.$slider.velocity("stop").velocity("fadeIn", n, d, function() {
                    s.interactive = !0,
                    S.enable(s)
                }) : s.$pictures.velocity("stop").height("0vh").velocity({
                    height: "50vh"
                }, n, d, function() {
                    s.interactive = !0
                }) : (site.device.isPhone ? (s.$slider.velocity("stop").css("opacity", 1).show(),
                S.enable(s)) : s.$pictures.velocity("stop").height("50vh"),
                s.interactive = !0),
                s.hideTimer && clearTimeout(s.hideTimer),
                site.device.isPhone || s.$gallery.show()
            }),
            s.$block.on("hide", function(t, e) {
                s.interactive = !1,
                S.disable(s),
                v(s.$about, 40, 351),
                v(s.$client, 20, 351),
                "next" == e.direction ? site.device.isPhone ? s.$slider.velocity("stop").velocity("fadeOut", 450, d) : s.$pictures.velocity("stop").velocity({
                    height: "0vh"
                }, 450, d, function() {
                    s.$gallery.hide()
                }) : (s.hideTimer && clearTimeout(s.hideTimer),
                s.hideTimer = setTimeout(function() {
                    s.$gallery.hide()
                }, 500))
            })
        }
        var _ = {
            slide: function(t, e, i) {
                if (!t.galleryEnabled)
                    return !1;
                this.delay(t);
                var n = "translateX(" + -.25 * (t.galleryIndex = e) + "%)";
                i && t.$gallery.addClass("project__gallery_force"),
                t.$galleryContent.css({
                    "-webkit-transform": n,
                    transform: n
                }),
                setTimeout(function() {
                    i && t.$gallery.removeClass("project__gallery_force")
                }, 10),
                b()
            },
            next: function(t) {
                var e = t.columnsSize - t.galleryIndex <= 2 ? 0 : t.galleryIndex + 1;
                this.slide(t, e)
            },
            prev: function(t) {
                var e = t.galleryIndex ? t.galleryIndex - 1 : t.columnsSize - 2;
                this.slide(t, e)
            },
            delay: function(t) {
                t.galleryEnabled = !1,
                setTimeout(function() {
                    t.galleryEnabled = !0
                }, 350)
            }
        }
          , b = function() {
            p.slideshowOpened && p.imagesCount < 2 || !p.slideshowOpened && p.columnsSize < 3 ? i.disableState() : p.slideshowOpened && p.slideshowIndex >= p.imagesCount - 1 || !p.slideshowOpened && p.columnsSize - p.galleryIndex <= 2 ? i.restartState() : i.enableState()
        }
          , x = function(t) {
            t.$textContent.css("top", t.$about.height() + parseInt(t.$about.css("top"), 10)),
            t.textScroll.refresh()
        }
          , w = function(t) {
            t.textOpened = !0,
            t.$block.addClass("project_text"),
            r.data("frame").disable(),
            t.textScroll.enable(),
            t.$openLink.text("Close Info")
        }
          , T = function(t) {
            t.textOpened = !1,
            t.$block.removeClass("project_text"),
            r.data("frame").enable(),
            t.textScroll.disable(),
            t.$openLink.text("Show More Info")
        }
          , S = {
            create: function(t) {
                if (t.oneImage)
                    return !1;
                t.slider = new Sly(t.$slider,{
                    horizontal: !0,
                    easing: d,
                    itemNav: "forceCentered",
                    smart: !0,
                    activateMiddle: !0,
                    mouseDragging: !0,
                    touchDragging: !0,
                    releaseSwing: !0,
                    scrollBy: 0,
                    speed: 350,
                    elasticBounds: !0
                }),
                t.slider.init(),
                t.$sliderControl.on("click", function() {
                    t.slider.rel.activeItem >= t.imagesCount - 1 ? t.slider.activate(0) : t.slider.next()
                });
                t.$slider.find(".projects__slider__item").on("click", function() {
                    S.expand(t)
                }),
                t.$slider.find(".projects__slider__close").on("click", function() {
                    S.collapse(t)
                })
            },
            enable: function(t) {
                if (t.oneImage)
                    return !1;
                t.slider || this.create(t),
                t.slider.reload(),
                $window.on("resize.slider", function() {
                    t.slider.reload()
                })
            },
            disable: function(t) {
                if (t.oneImage)
                    return !1;
                t.slider || this.create(t),
                t.slider.reload(),
                $window.off("resize.slider")
            },
            expand: function(t) {
                t.$slider.addClass("projects__slider_expanded"),
                $root.addClass("page_allow-rotate")
            },
            collapse: function(t) {
                t.$slider.removeClass("projects__slider_expanded"),
                $root.removeClass("page_allow-rotate")
            }
        }
          , C = {
            slide: function(t, e, i) {
                if (!t.slideshowEnabled)
                    return !1;
                this.delay(t);
                var n = "translateX(" + -.5 * (t.slideshowIndex = e) + "%)";
                i && t.$slideshow.addClass("project__slideshow_force"),
                t.$slideshowContent.css({
                    "-webkit-transform": n,
                    transform: n
                }),
                setTimeout(function() {
                    i && t.$slideshow.removeClass("project__slideshow_force")
                }, 10),
                b();
                var s = t.images[e];
                s.loaded || ($("<img />").attr("src", s.src).one("load", function() {
                    s.$slide.css("background-image", "url(" + s.src + ")")
                }).each(function() {
                    this.complete && $(this).load()
                }),
                s.loaded = !0)
            },
            next: function(t) {
                var e = t.slideshowIndex >= t.imagesCount - 1 ? 0 : t.slideshowIndex + 1;
                this.slide(t, e)
            },
            prev: function(t) {
                var e = t.slideshowIndex ? t.slideshowIndex - 1 : t.imagesCount - 1;
                this.slide(t, e)
            },
            show: function(t, e) {
                r.data("frame").disable(),
                e && this.slide(t, e.index, !0),
                k.open(t, e, function() {
                    t.$slideshow.show()
                }),
                t.slideshowOpened = !0,
                b()
            },
            hide: function(t, e) {
                t.slideshowOpened = !1;
                var i = e.columnPosition;
                i - t.galleryIndex == 1 ? i = t.galleryIndex : !t.columns[e.columnIndex].isFull && t.columns[e.columnIndex].isLast && --i,
                _.slide(t, i, !0),
                b(),
                t.$slideshow.hide(),
                k.close(t, e, function() {
                    r.data("frame").enable()
                })
            },
            delay: function(t) {
                t.slideshowEnabled = !1,
                setTimeout(function() {
                    t.slideshowEnabled = !0
                }, 350)
            }
        }
          , k = {
            duration: 301.5,
            getLayout: function(t) {
                var e = t.offset();
                return {
                    width: t.width(),
                    height: t.height(),
                    top: e.top,
                    left: e.left
                }
            },
            getCoverSize: function(t, e) {
                var i = e.width / e.height
                  , n = {
                    width: t.width,
                    height: t.width / i
                };
                return n.height < t.height && (n = {
                    width: t.height * i,
                    height: t.height
                }),
                n
            },
            getContainSize: function(t, e) {
                var i = e.width / e.height
                  , n = {
                    width: t.width,
                    height: t.width / i
                };
                return n.height > t.height && (n = {
                    width: t.height * i,
                    height: t.height
                }),
                n
            },
            getFullscreenLayout: function() {
                return {
                    top: "-0.5%",
                    left: "-0.5%",
                    width: 1.01 * site.sizes.width,
                    height: 1.01 * site.sizes.height
                }
            },
            create: function(t) {
                var e = {};
                return e.$block = $('<i class="projects__popup" />'),
                e.$image = $("<img />").attr("src", t.small).appendTo(e.$block),
                e.thumbLayout = this.getLayout(t.$block),
                e
            },
            open: function(t, e, i) {
                var n = this.create(e);
                n.$image.css(this.getCoverSize(n.thumbLayout, e)),
                n.$block.css(n.thumbLayout).appendTo(r).velocity(this.getFullscreenLayout(), this.duration, d, function() {
                    n.$block.remove(),
                    i && i()
                }),
                n.$image.velocity(this.getContainSize(this.getFullscreenLayout(), e), this.duration, d)
            },
            close: function(t, e, i) {
                var n = this.create(e);
                n.$block.css(this.getFullscreenLayout()),
                n.$image.css(this.getContainSize(this.getFullscreenLayout(), e)),
                n.$block.appendTo(r).velocity(n.thumbLayout, this.duration, d).velocity({
                    opacity: 0
                }, 200, d, function() {
                    n.$block.remove(),
                    i && i()
                }),
                n.$image.velocity(this.getCoverSize(n.thumbLayout, e), this.duration, d)
            }
        }
          , P = function(t) {
            if (t.preloaded || t.visited)
                return !1;
            t.preloaded = !0,
            t.images.forEach(function(t) {
                t.columnIndex < 2 && ($("<img />")[0].src = t.defaultSrc)
            })
        }
          , E = function(t) {
            if (t.builded)
                return !1;
            var e, i, n;
            !function(i) {
                i.hasLargeText = i.text && 250 < i.text.length,
                $(s(i)).appendTo(i.$block);
                var n = i.$block.find(".project__gallery__item");
                i.$about = i.$block.find(".project__about"),
                i.$client = i.$block.find(".project__client"),
                i.$gallery = i.$block.find(".project__gallery"),
                i.$galleryContent = i.$gallery.find(".project__gallery__content"),
                i.$pictures = n.find(".project__gallery__item__picture"),
                i.$slideshow = $(l(i)).appendTo(r),
                i.$slideshowContent = i.$slideshow.find(".projects__slideshow__content"),
                i.$slideshowItems = i.$slideshowContent.find(".projects__slideshow__item"),
                i.$slider = $(h(i)).appendTo(r),
                i.$sliderControl = i.$slider.find(".projects__slider__control"),
                i.images.forEach(function(t, e) {
                    t.$block = n.eq(e),
                    t.$slide = i.$slideshowItems.eq(e)
                }),
                i.$block.on("show", function(t, e) {
                    i.visited = !0,
                    window.location.hash = i.category + "/" + i.name,
                    p = i
                })
            }(t),
            y(t),
            (e = t).galleryIndex = 0,
            e.galleryEnabled = !0,
            e.$block.on("show", function() {
                b()
            }),
            (i = t).slideshowIndex = 0,
            i.slideshowOpened = !1,
            i.slideshowEnabled = !0,
            i.images.forEach(function(t, e) {
                t.$block.on("click", function() {
                    i.interactive && C.show(i, t)
                }),
                t.$slide.on("click", function() {
                    C.hide(i, t)
                })
            }),
            t.hasLargeText && ((n = t).textOpened = !1,
            n.$openLink = n.$about.find(".project__about__open"),
            n.$text = n.$block.find(".project__text"),
            n.$textContent = n.$text.find(".project__text__content"),
            n.$textOverlay = $('<i class="project__text-overlay" />').insertAfter(n.$text),
            n.textScroll = new IScroll(n.$textContent[0],{
                disableMouse: !1,
                mouseWheel: !0,
                scrollX: !1,
                scrollY: !0,
                click: !1,
                tap: !1,
                scrollbars: "custom",
                interactiveScrollbars: !1
            }),
            n.textScroll.disable(),
            x(n),
            $window.on("resize load", function() {
                x(n)
            }),
            n.$openLink.on("click", function() {
                (n.textOpened ? T : w)(n)
            }),
            n.$textOverlay.on("click", function() {
                T(n)
            })),
            t.builded = !0
        };
        u.forEach(function(t, e) {
            var s, i;
            t.index = e,
            t.builded = !1,
            t.preloaded = !1,
            (s = t).imagesCount = s.images.length,
            s.oneImage = 1 === s.imagesCount,
            s.columns = [],
            s.columnsSize = 0,
            s.oneImage ? (s.images[0].isFull = !0,
            s.images[0].index = 0,
            s.columns.push({
                isFull: !0,
                items: [s.images[0]],
                columnPosition: 0
            }),
            s.columnsSize = 2) : s.images.forEach(function(t, e) {
                if (t.width = parseInt(t.width, 10),
                t.height = parseInt(t.height, 10),
                t.index = e,
                t.isLast = e >= s.imagesCount - 1,
                t.inColumn)
                    return !1;
                var i, n = {
                    isFull: !1,
                    items: [],
                    columnPosition: s.columnsSize
                };
                t.width < t.height ? (t.isFull = !0,
                n.items.push(t)) : s.imagesCount < 3 ? (t.isFull = !0,
                n.isFull = !0,
                s.columnsSize++,
                n.items.push(t)) : t.isLast ? (t.isFull = !0,
                n.items.push(t)) : (t.isFull = !1,
                n.items.push(t),
                i = s.images[e + 1],
                t.isFull = !1,
                i.inColumn = !0,
                n.items.push(i)),
                t.inColumn = !0,
                s.columns.push(n),
                s.columnsSize++
            }),
            s.columns.forEach(function(e, t) {
                e.columnIndex = t,
                e.isLast = t >= s.columns.length - 1,
                e.items.forEach(function(t) {
                    t.columnIndex = e.columnIndex,
                    t.columnPosition = e.columnPosition
                })
            }),
            s.images.forEach(function(t, e) {
                t.small == t.src && (t.small = !1),
                t.loaded = !t.small,
                t.defaultSrc = t.small ? t.small : t.src
            }),
            (i = t).$block = $('<section class="project" />').data("name", i.category + "/" + i.name).appendTo(r),
            i.$block.on("beforeShow", function() {
                E(i),
                u[i.index - 1] && P(u[i.index - 1]),
                u[i.index + 1] && P(u[i.index + 1]),
                u[i.index + 2] && P(u[i.index + 2])
            })
        }),
        r.frame({
            sections: ".project",
            duration: 450
        }),
        $document.on("keydown.promo", function(t) {
            p.textOpened || (p.slideshowOpened ? (37 == t.which && C.prev(p),
            39 == t.which && C.next(p)) : (37 == t.which && _.prev(p),
            39 == t.which && _.next(p)))
        }),
        t.on("click", function() {
            p.slideshowOpened ? C.next(p) : _.next(p)
        }),
        r.swipe("option", "swipeRight", function() {
            return !p.textOpened && void (p.slideshowOpened ? C.prev(p) : _.prev(p))
        }),
        r.swipe("option", "swipeLeft", function() {
            return !p.textOpened && void (p.slideshowOpened ? C.next(p) : _.next(p))
        });
        function A(n) {
            categories[p.category].items.forEach(function(t, e) {
                var i = n.eq(e);
                i.toggleClass("panel__item_active", t.index == p.index),
                i.on("click", function() {
                    return $panel.data("panel").close(function() {
                        r.data("frame").jump(t.index)
                    }),
                    !1
                })
            })
        }
        e.on("click", function() {
            $panel.data("panel").showCategory(p.category, A, A),
            $panel.data("panel").open(function(t) {
                t.scrollToElement($panel.find(".panel__item_active")[0], 0),
                setTimeout(function() {
                    $panel.data("panel").updateVisibility()
                }, 50)
            })
        })
    })
}
,
$.fn.promo = function() {
    this.each(function() {
        var t, e, i, n, s = $(this), r = s.find(".promo__content"), o = s.find(".promo__item"), a = s.find(".promo__next"), l = !0;
        $help.appendTo(s),
        $help.data("ui-help").enable(),
        site.device.isMobile ? (t = $('<div class="promo__bullets" />').appendTo(s),
        s.sly({
            horizontal: !0,
            itemNav: "forceCentered",
            smart: !0,
            activateMiddle: !0,
            mouseDragging: !0,
            touchDragging: !0,
            releaseSwing: !0,
            scrollBy: 0,
            speed: 600,
            elasticBounds: !0,
            pagesBar: t,
            activatePageOn: "click",
            pageBuilder: function(t) {
                return '<i class="promo__bullets__item" />'
            }
        }),
        $window.on("resize.promo", function() {
            s.sly("reload")
        })) : (o.first().addClass("promo__item_active").next().addClass("promo__item_next").nextUntil().addClass("promo__item_far"),
        e = TweenMax.to(r, 1, {
            y: "6%",
            scale: .94,
            opacity: .7,
            ease: Linear.easeNone
        }),
        i = TweenMax.to($help, 1, {
            y: -15,
            opacity: 0,
            ease: Cubic.easeOut
        }),
        (n = new TimelineMax).add([e, i]),
        new ScrollScene({
            triggerElement: s,
            triggerHook: 0,
            offset: 80,
            duration: $window.height() - 80
        }).setTween(n).addTo(site.scroller));
        function c() {
            if (!l)
                return !1;
            l = !1,
            s.find(".promo__item_active").removeClass("promo__item_active").prev().addClass("promo__item_far").appendTo(r),
            s.find(".promo__item_next").removeClass("promo__item_next").addClass("promo__item_active").next().addClass("promo__item_next").removeClass("promo__item_far"),
            setTimeout(function() {
                l = !0
            }, site.durations.move)
        }
        site.device.support.touch || a.hover(function() {
            s.addClass("promo_next")
        }, function() {
            s.removeClass("promo_next")
        }),
        a.on("click", c),
        $document.on("keydown.promo", function(t) {
            $(t.target).is("input,textarea,select") || (37 == t.which && function() {
                if (!l)
                    return;
                l = !1;
                var t = s.find(".promo__item_active").prev();
                t.length || (t = s.find(".promo__item:last").prependTo(r)),
                t.removeClass("promo__item_next promo__item_far").next().removeClass("promo__item_active").addClass("promo__item_next").next().removeClass("promo__item_next").addClass("promo__item_far"),
                setTimeout(function() {
                    t.addClass("promo__item_active")
                }, 1),
                setTimeout(function() {
                    l = !0
                }, site.durations.move)
            }(),
            39 == t.which && c())
        })
    })
}
,
$.fn.rotate = function() {
    this.each(function() {
        function t() {
            e.is(":visible") ? $document.on("touchmove.rotate mousewheel.rotate", function(t) {
                t.preventDefault()
            }) : $document.off("touchmove.rotate mousewheel.rotate")
        }
        var e = $(this);
        $window.on("resize.rotate", t),
        t()
    })
}
,
$.fn.search = function() {
    this.each(function() {
        var t = $(this)
          , e = t.find(".search__input")
          , i = !1;
        e.on("propertychange change keyup paste input", function() {
            (i = 0 < e.val().length) ? t.addClass("search__form_filled") : t.removeClass("search__form_filled")
        }),
        t.on("submit", function() {
            if (!i)
                return !1
        })
    })
}
,
$.fn.studio = function() {
    this.each(function() {
        var t = $(this)
          , e = t.find(".control")
          , i = t.find(".infopage__title")
          , n = t.find(".infopage__title__gallery__item")
          , s = e.data("control")
          , r = new Sly(i,{
            horizontal: !0,
            easing: "easeOutCubic",
            itemNav: "forceCentered",
            smart: !0,
            activateMiddle: !0,
            mouseDragging: !0,
            touchDragging: !0,
            releaseSwing: !0,
            scrollBy: 0,
            speed: 500,
            elasticBounds: !0
        });
        r.init(),
        e.on("click", function() {
            r.rel.activeItem >= n.length - 1 ? r.activate(0) : r.next()
        }),
        s.enableState(),
        r.on("active", function(t, e) {
            e >= n.length - 1 ? s.restartState() : s.enableState()
        }),
        $window.on("resize.slider", function() {
            r.reload()
        })
    })
}
,
$.fn.subscribe = function() {
    this.each(function() {
        var t = $(this)
          , i = t.find(".subscribe__form")
          , e = t.find(".subscribe__form__field");
        t.find("a, input, button").attr("tabindex", -1),
        t.on("show", function() {
            t.velocity("stop").velocity({
                translateY: "100%"
            }, 0).show().velocity({
                translateY: "0%"
            }, 750, "easeOutCubic")
        }),
        t.on("hide", function() {
            t.velocity("stop").velocity({
                translateY: "100%"
            }, 750, "easeOutCubic", function() {
                t.hide()
            }),
            e.blur()
        }),
        i.validate({
            rules: {
                email: {
                    email_address: !0
                }
            },
            messages: {
                email: {
                    email_address: "E-mail is invalid"
                }
            }
        }),
        i.on("submit", function() {
            var e = i.find("input, textarea, button");
            return i.hasClass("i-loading") || i.hasClass("i-success") || !i.valid() || (e.blur(),
            i.addClass("i-loading"),
            i.ajaxSubmit({
                dataType: "json",
                success: function(t) {
                    i.removeClass("i-loading"),
                    "success" == t.message && (e.attr("disabled", "disabled").attr("tabindex", "-1"),
                    i.addClass("i-success"))
                }
            })),
            !1
        })
    })
}
,
$.fn.uiHelp = function() {
    this.each(function() {
        function e() {
            active = !0,
            a.index = 0,
            p(15, u)
        }
        function t() {
            a.index = 15,
            p(0, d)
        }
        var i, n = $(this), s = n.find(".ui-help__hand"), r = s.find("svg"), o = "ui-help_keyboard", a = {
            index: 0
        }, l = "easeInOutCubic", c = {
            translateY: -20
        }, h = {
            translateY: 0
        }, u = function() {
            s.delay(100).velocity(c, 700, l, t)
        }, d = function() {
            s.delay(100).velocity(h, 700, l, e)
        }, p = function(t, e) {
            TweenMax.to(a, .15, {
                index: t,
                roundProps: "index",
                ease: Linear.easeNone,
                delay: .1,
                onUpdate: function() {
                    r[0].style.top = 50 * -a.index + "px"
                },
                onComplete: function() {
                    e && e()
                }
            })
        };
        n.data("ui-help", {
            enable: function(t) {
                t && (i = setInterval(function() {
                    n.hasClass(o) ? n.removeClass(o) : n.addClass(o)
                }, 5e3)),
                site.device.isMobile && e()
            },
            disable: function() {
                clearInterval(i),
                n.velocity("fadeOut", 450, "easeOutCubic", function() {
                    TweenMax.killTweensOf(a),
                    n.remove()
                })
            }
        })
    })
}
,
$.fn.works = function() {
    this.each(function() {
        var e = $(this)
          , t = e.find(".works__item");
        $menu.find(".menu__item_work").on("click", function() {
            var t = e.offset().top;
            return site.device.support.touch ? $window.scrollTop(t) : $("body,html").animate({
                scrollTop: t
            }, 350, "easeOutCubic"),
            $menu.data("menu").close(),
            !1
        }),
        t.each(function() {
            var t, e = $(this), i = e.find(".works__item__picture"), n = .25 - Math.random() / 2 + 1.35, s = e.css("background-color"), r = e.data("color");
            site.device.isMobile ? e.click(function() {
                e.css("background-color", r),
                setTimeout(function() {
                    e.css("background-color", s)
                }, 350)
            }) : (t = TweenMax.fromTo(i, n + Math.round(.2 * Math.random() - .1), {
                opacity: 0,
                y: 40 + Math.round(20 * Math.random() - 10)
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut
            }),
            new ScrollScene({
                triggerElement: this,
                triggerHook: 1,
                offset: site.sizes.height / 3 + Math.round(100 * Math.random() - 50)
            }).setTween(t).addTo(site.scroller),
            e.hover(function() {
                e.css("background-color", r)
            }, function() {
                e.css("background-color", s)
            })),
            e.on("click", function() {
                var t = $(this).data("category_name");
                $(this).data("category");
                window.location.href = baseUrl + "/projects/" + t
            })
        })
    })
}
;
var site = {
    scroller: new ScrollMagic,
    sizes: {},
    durations: {
        basic: 175,
        move: 500
    },
    device: {
        support: Modernizr
    }
}
  , $root = $("#root")
  , $html = $("html")
  , $body = $("body")
  , $window = $(window)
  , $document = $(document)
  , $menu = $root.find(".menu")
  , $panel = $root.find(".panel");
$help = $($root.find(".ui-help__template").html()),
function(t) {
    function e() {
        t.width = $window.width(),
        t.height = parseInt(window.innerHeight, 10)
    }
    $window.on("resize.site", e),
    e()
}(site.sizes),
function(t) {
    t.isMobile = t.support.touch,
    $html.addClass(t.isMobile ? "d-mobile" : "d-no-mobile");
    function e() {
        t.isPhone = site.sizes.width < 768,
        $html.addClass(t.isPhone ? "d-phone" : "d-no-phone"),
        $html.removeClass(t.isPhone ? "d-no-phone" : "d-phone")
    }
    $window.on("resize.phone-check", e),
    e(),
    $html.addClass(navigator.userAgent.match(/iPad/i) ? "d-ipad" : "d-no-ipad"),
    $html.addClass(navigator.userAgent.match(/(iPhone|iPod touch)/i) ? "d-iphone" : "d-no-iphone"),
    $html.addClass(navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i) ? "d-ios" : "d-no-ios"),
    $html.addClass(navigator.userAgent.match(/.*CPU.*OS 7_\d/i) ? "d-ios7" : "d-no-ios7"),
    $html.hasClass("d-ipad d-ios7") && $window.on("resize orientationchange focusout", function() {
        window.scrollTo(0, 0)
    }),
    window.viewportUnitsBuggyfill.init()
}(site.device),
$(function() {
    $root.find(".menu").menu(),
    $panel.panel(),
    $root.find(".control").control(),
    $help.uiHelp(),
    $root.find(".rotate").rotate(),
    $root.find(".promo").promo(),
    $root.find(".works").works(),
    $root.find(".projects").projects(),
    $root.find(".overview").overview(),
    $root.find(".subscribe").subscribe(),
    $root.find("[data-info-columns]").infoColumns(),
    $root.find(".infopage_studio").studio(),
    $root.find(".clients").clients(),
    $root.find(".contact").contact(),
    $root.find(".search__form").search(),
    FastClick.attach(document.body),
    $root.removeClass("page_loading")
});




/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-opacity-rgba-cssanimations-cssgradients-csstransforms-csstransitions-video-inlinesvg-svg-touch-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:m!
 */
;window.Modernizr = function(a, b, c) {
    function A(a) {
        j.cssText = a
    }
    function B(a, b) {
        return A(m.join(a + ";") + (b || ""))
    }
    function C(a, b) {
        return typeof a === b
    }
    function D(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function E(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!D(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function F(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function G(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + o.join(d + " ") + d).split(" ");
        return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "),
        F(e, b, c))
    }
    var d = "2.8.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {
        svg: "http://www.w3.org/2000/svg"
    }, r = {}, s = {}, t = {}, u = [], v = u.slice, w, x = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, y = {}.hasOwnProperty, z;
    !C(y, "undefined") && !C(y.call, "undefined") ? z = function(a, b) {
        return y.call(a, b)
    }
    : z = function(a, b) {
        return b in a && C(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = v.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }
    ),
    r.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ,
    r.rgba = function() {
        return A("background-color:rgba(150,255,150,.5)"),
        D(j.backgroundColor, "rgba")
    }
    ,
    r.opacity = function() {
        return B("opacity:.55"),
        /^0.55$/.test(j.opacity)
    }
    ,
    r.cssanimations = function() {
        return G("animationName")
    }
    ,
    r.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return A((a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(0, -a.length)),
        D(j.backgroundImage, "gradient")
    }
    ,
    r.csstransforms = function() {
        return !!G("transform")
    }
    ,
    r.csstransitions = function() {
        return G("transition")
    }
    ,
    r.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    r.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
    }
    ,
    r.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == q.svg
    }
    ;
    for (var H in r)
        z(r, H) && (w = H.toLowerCase(),
        e[w] = r[H](),
        u.push((e[w] ? "" : "no-") + w));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                z(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " m-" + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    A(""),
    i = k = null,
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.testProp = function(a) {
        return E([a])
    }
    ,
    e.testAllProps = G,
    e.testStyles = x,
    e.prefixed = function(a, b, c) {
        return b ? G(a, b, c) : G(a, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " m-js m-" + u.join(" m-") : ""),
    e
}(this, this.document);
