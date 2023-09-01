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
