;(function(window, document, undefined) {
    var j = void 0
      , k = !0
      , l = null
      , p = !1;
    function q(a) {
        return function() {
            return this[a]
        }
    }
    var aa = this;
    function ba(a, b) {
        var c = a.split(".")
          , d = aa;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && b !== j ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }
    aa.Ba = k;
    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function da(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function s(a, b, c) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return s.apply(l, arguments)
    }
    var ea = Date.now || function() {
        return +new Date
    }
    ;
    function fa(a, b) {
        this.G = a;
        this.u = b || a;
        this.z = this.u.document;
        this.R = j
    }
    fa.prototype.createElement = function(a, b, c) {
        a = this.z.createElement(a);
        if (b)
            for (var d in b)
                if (b.hasOwnProperty(d))
                    if ("style" == d) {
                        var e = a
                          , f = b[d];
                        ga(this) ? e.setAttribute("style", f) : e.style.cssText = f
                    } else
                        a.setAttribute(d, b[d]);
        c && a.appendChild(this.z.createTextNode(c));
        return a
    }
    ;
    function t(a, b, c) {
        a = a.z.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    function u(a, b) {
        return a.createElement("link", {
            rel: "stylesheet",
            href: b
        })
    }
    function ha(a, b) {
        return a.createElement("script", {
            src: b
        })
    }
    function v(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
                return;
        c.push(b);
        a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function w(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++)
            c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function ia(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
                return k;
        return p
    }
    function ga(a) {
        if (a.R === j) {
            var b = a.z.createElement("p");
            b.innerHTML = '<a style="top:1px;">w</a>';
            a.R = /top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.R
    }
    function x(a) {
        var b = a.u.location.protocol;
        "about:" == b && (b = a.G.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }
    ;function y(a, b, c) {
        this.w = a;
        this.T = b;
        this.Aa = c
    }
    ba("webfont.BrowserInfo", y);
    y.prototype.qa = q("w");
    y.prototype.hasWebFontSupport = y.prototype.qa;
    y.prototype.ra = q("T");
    y.prototype.hasWebKitFallbackBug = y.prototype.ra;
    y.prototype.sa = q("Aa");
    y.prototype.hasWebKitMetricsBug = y.prototype.sa;
    function z(a, b, c, d) {
        this.e = a != l ? a : l;
        this.o = b != l ? b : l;
        this.ba = c != l ? c : l;
        this.f = d != l ? d : l
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    z.prototype.toString = function() {
        return [this.e, this.o || "", this.ba || "", this.f || ""].join("")
    }
    ;
    function A(a) {
        a = ja.exec(a);
        var b = l
          , c = l
          , d = l
          , e = l;
        a && (a[1] !== l && a[1] && (b = parseInt(a[1], 10)),
        a[2] !== l && a[2] && (c = parseInt(a[2], 10)),
        a[3] !== l && a[3] && (d = parseInt(a[3], 10)),
        a[4] !== l && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new z(b,c,d,e)
    }
    ;function B(a, b, c, d, e, f, g, h, n, m, r) {
        this.J = a;
        this.Ha = b;
        this.za = c;
        this.ga = d;
        this.Fa = e;
        this.fa = f;
        this.xa = g;
        this.Ga = h;
        this.wa = n;
        this.ea = m;
        this.k = r
    }
    ba("webfont.UserAgent", B);
    B.prototype.getName = q("J");
    B.prototype.getName = B.prototype.getName;
    B.prototype.pa = q("za");
    B.prototype.getVersion = B.prototype.pa;
    B.prototype.la = q("ga");
    B.prototype.getEngine = B.prototype.la;
    B.prototype.ma = q("fa");
    B.prototype.getEngineVersion = B.prototype.ma;
    B.prototype.na = q("xa");
    B.prototype.getPlatform = B.prototype.na;
    B.prototype.oa = q("wa");
    B.prototype.getPlatformVersion = B.prototype.oa;
    B.prototype.ka = q("ea");
    B.prototype.getDocumentMode = B.prototype.ka;
    B.prototype.ja = q("k");
    B.prototype.getBrowserInfo = B.prototype.ja;
    function C(a, b) {
        this.a = a;
        this.H = b
    }
    var ka = new B("Unknown",new z,"Unknown","Unknown",new z,"Unknown","Unknown",new z,"Unknown",j,new y(p,p,p));
    C.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE")) {
            a = D(this);
            var b = E(this)
              , c = A(b)
              , d = F(this.a, /MSIE ([\d\w\.]+)/, 1)
              , e = A(d);
            a = new B("MSIE",e,d,"MSIE",e,d,a,c,b,G(this.H),new y("Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e,p,p))
        } else if (-1 != this.a.indexOf("Opera"))
            a: {
                a = "Unknown";
                var b = F(this.a, /Presto\/([\d\w\.]+)/, 1)
                  , c = A(b)
                  , d = E(this)
                  , e = A(d)
                  , f = G(this.H);
                c.e !== l ? a = "Presto" : (-1 != this.a.indexOf("Gecko") && (a = "Gecko"),
                b = F(this.a, /rv:([^\)]+)/, 1),
                c = A(b));
                if (-1 != this.a.indexOf("Opera Mini/")) {
                    var g = F(this.a, /Opera Mini\/([\d\.]+)/, 1)
                      , h = A(g);
                    a = new B("OperaMini",h,g,a,c,b,D(this),e,d,f,new y(p,p,p))
                } else {
                    if (-1 != this.a.indexOf("Version/") && (g = F(this.a, /Version\/([\d\.]+)/, 1),
                    h = A(g),
                    h.e !== l)) {
                        a = new B("Opera",h,g,a,c,b,D(this),e,d,f,new y(10 <= h.e,p,p));
                        break a
                    }
                    g = F(this.a, /Opera[\/ ]([\d\.]+)/, 1);
                    h = A(g);
                    a = h.e !== l ? new B("Opera",h,g,a,c,b,D(this),e,d,f,new y(10 <= h.e,p,p)) : new B("Opera",new z,"Unknown",a,c,b,D(this),e,d,f,new y(p,p,p))
                }
            }
        else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = D(this);
            var b = E(this)
              , c = A(b)
              , d = F(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)
              , e = A(d)
              , f = "Unknown"
              , g = new z
              , h = "Unknown"
              , n = p;
            -1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? f = "Chrome" : /Silk\/\d/.test(this.a) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf("Safari") ? f = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (f = "AdobeAIR");
            "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = F(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == f ? h = F(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? h = F(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == f && (h = F(this.a, /AdobeAIR\/([\d\.]+)/, 1));
            g = A(h);
            n = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o;
            a = new B(f,g,h,"AppleWebKit",e,d,a,c,b,G(this.H),new y(n,536 > e.e || 536 == e.e && 11 > e.o,"iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a))
        } else
            -1 != this.a.indexOf("Gecko") ? (a = "Unknown",
            b = new z,
            c = "Unknown",
            d = E(this),
            e = A(d),
            f = p,
            -1 != this.a.indexOf("Firefox") ? (a = "Firefox",
            c = F(this.a, /Firefox\/([\d\w\.]+)/, 1),
            b = A(c),
            f = 3 <= b.e && 5 <= b.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"),
            g = F(this.a, /rv:([^\)]+)/, 1),
            h = A(g),
            f || (f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match(/1\.9\.1b[123]/) != l || g.match(/1\.9\.1\.[\d\.]+/) != l),
            a = new B(a,b,c,"Gecko",h,g,D(this),e,d,G(this.H),new y(f,p,p))) : a = ka;
        return a
    }
    ;
    function D(a) {
        var b = F(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b)
            return /BB\d{2}/.test(b) && (b = "BlackBerry"),
            b;
        a = F(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"),
        a) : "Unknown"
    }
    function E(a) {
        var b = F(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = F(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = F(a.a, /(iPhone )?OS ([\d_]+)/, 2)))
            return b;
        if (b = F(a.a, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c]))
                    return b[c];
        return (a = F(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }
    function F(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }
    function G(a) {
        if (a.documentMode)
            return a.documentMode
    }
    ;function la(a) {
        this.va = a || "-"
    }
    la.prototype.f = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.va)
    }
    ;
    function H(a, b) {
        this.J = a;
        this.U = 4;
        this.K = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.K = c[1],
        this.U = parseInt(c[2], 10))
    }
    H.prototype.getName = q("J");
    function I(a) {
        return a.K + a.U
    }
    function ma(a) {
        var b = 4
          , c = "n"
          , d = l;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()),
        (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    }
    ;function na(a, b, c) {
        this.c = a;
        this.h = b;
        this.M = c;
        this.j = "wf";
        this.g = new la("-")
    }
    function pa(a) {
        v(a.h, a.g.f(a.j, "loading"));
        J(a, "loading")
    }
    function K(a) {
        w(a.h, a.g.f(a.j, "loading"));
        ia(a.h, a.g.f(a.j, "active")) || v(a.h, a.g.f(a.j, "inactive"));
        J(a, "inactive")
    }
    function J(a, b, c) {
        if (a.M[b])
            if (c)
                a.M[b](c.getName(), I(c));
            else
                a.M[b]()
    }
    ;function L(a, b) {
        this.c = a;
        this.C = b;
        this.s = this.c.createElement("span", {
            "aria-hidden": "true"
        }, this.C)
    }
    function M(a, b) {
        var c = a.s, d;
        d = [];
        for (var e = b.J.split(/,\s*/), f = 0; f < e.length; f++) {
            var g = e[f].replace(/['"]/g, "");
            -1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'")
        }
        d = d.join(",");
        e = "normal";
        f = b.U + "00";
        "o" === b.K ? e = "oblique" : "i" === b.K && (e = "italic");
        d = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + e + ";font-weight:" + f + ";");
        ga(a.c) ? c.setAttribute("style", d) : c.style.cssText = d
    }
    function N(a) {
        t(a.c, "body", a.s)
    }
    L.prototype.remove = function() {
        var a = this.s;
        a.parentNode && a.parentNode.removeChild(a)
    }
    ;
    function qa(a, b, c, d, e, f, g, h) {
        this.V = a;
        this.ta = b;
        this.c = c;
        this.q = d;
        this.C = h || "BESbswy";
        this.k = e;
        this.F = {};
        this.S = f || 5E3;
        this.Z = g || l;
        this.B = this.A = l;
        a = new L(this.c,this.C);
        N(a);
        for (var n in O)
            O.hasOwnProperty(n) && (M(a, new H(O[n],I(this.q))),
            this.F[O[n]] = a.s.offsetWidth);
        a.remove()
    }
    var O = {
        Ea: "serif",
        Da: "sans-serif",
        Ca: "monospace"
    };
    qa.prototype.start = function() {
        this.A = new L(this.c,this.C);
        N(this.A);
        this.B = new L(this.c,this.C);
        N(this.B);
        this.ya = ea();
        M(this.A, new H(this.q.getName() + ",serif",I(this.q)));
        M(this.B, new H(this.q.getName() + ",sans-serif",I(this.q)));
        ra(this)
    }
    ;
    function sa(a, b, c) {
        for (var d in O)
            if (O.hasOwnProperty(d) && b === a.F[O[d]] && c === a.F[O[d]])
                return k;
        return p
    }
    function ra(a) {
        var b = a.A.s.offsetWidth
          , c = a.B.s.offsetWidth;
        b === a.F.serif && c === a.F["sans-serif"] || a.k.T && sa(a, b, c) ? ea() - a.ya >= a.S ? a.k.T && sa(a, b, c) && (a.Z === l || a.Z.hasOwnProperty(a.q.getName())) ? P(a, a.V) : P(a, a.ta) : setTimeout(s(function() {
            ra(this)
        }, a), 25) : P(a, a.V)
    }
    function P(a, b) {
        a.A.remove();
        a.B.remove();
        b(a.q)
    }
    ;function R(a, b, c, d) {
        this.c = b;
        this.t = c;
        this.N = 0;
        this.ca = this.Y = p;
        this.S = d;
        this.k = a.k
    }
    function ta(a, b, c, d, e) {
        if (0 === b.length && e)
            K(a.t);
        else {
            a.N += b.length;
            e && (a.Y = e);
            for (e = 0; e < b.length; e++) {
                var f = b[e]
                  , g = c[f.getName()]
                  , h = a.t
                  , n = f;
                v(h.h, h.g.f(h.j, n.getName(), I(n).toString(), "loading"));
                J(h, "fontloading", n);
                (new qa(s(a.ha, a),s(a.ia, a),a.c,f,a.k,a.S,d,g)).start()
            }
        }
    }
    R.prototype.ha = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading"));
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive"));
        v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active"));
        J(b, "fontactive", a);
        this.ca = k;
        ua(this)
    }
    ;
    R.prototype.ia = function(a) {
        var b = this.t;
        w(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "loading"));
        ia(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "active")) || v(b.h, b.g.f(b.j, a.getName(), I(a).toString(), "inactive"));
        J(b, "fontinactive", a);
        ua(this)
    }
    ;
    function ua(a) {
        0 == --a.N && a.Y && (a.ca ? (a = a.t,
        w(a.h, a.g.f(a.j, "loading")),
        w(a.h, a.g.f(a.j, "inactive")),
        v(a.h, a.g.f(a.j, "active")),
        J(a, "active")) : K(a.t))
    }
    ;function S(a, b, c) {
        this.G = a;
        this.W = b;
        this.a = c;
        this.O = this.P = 0
    }
    function T(a, b) {
        U.W.$[a] = b
    }
    S.prototype.load = function(a) {
        var b = a.context || this.G;
        this.c = new fa(this.G,b);
        b = new na(this.c,b.document.documentElement,a);
        if (this.a.k.w) {
            var c = this.W, d = this.c, e = [], f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = c.$[f];
                    g && e.push(g(a[f], d))
                }
            a = a.timeout;
            this.O = this.P = e.length;
            a = new R(this.a,this.c,b,a);
            f = 0;
            for (c = e.length; f < c; f++)
                d = e[f],
                d.v(this.a, s(this.ua, this, d, b, a))
        } else
            K(b)
    }
    ;
    S.prototype.ua = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, h) {
            var n = 0 == --e.P;
            n && pa(b);
            setTimeout(function() {
                ta(c, a, d || {}, h || l, n)
            }, 0)
        }) : (a = 0 == --this.P,
        this.O--,
        a && (0 == this.O ? K(b) : pa(b)),
        ta(c, [], {}, l, a))
    }
    ;
    var va = window
      , wa = (new C(navigator.userAgent,document)).parse()
      , U = va.WebFont = new S(window,new function() {
        this.$ = {}
    }
    ,wa);
    U.load = U.load;
    function V(a, b) {
        this.c = a;
        this.d = b
    }
    V.prototype.load = function(a) {
        var b, c, d = this.d.urls || [], e = this.d.families || [];
        b = 0;
        for (c = d.length; b < c; b++)
            t(this.c, "head", u(this.c, d[b]));
        d = [];
        b = 0;
        for (c = e.length; b < c; b++) {
            var f = e[b].split(":");
            if (f[1])
                for (var g = f[1].split(","), h = 0; h < g.length; h += 1)
                    d.push(new H(f[0],g[h]));
            else
                d.push(new H(f[0]))
        }
        a(d)
    }
    ;
    V.prototype.v = function(a, b) {
        return b(a.k.w)
    }
    ;
    T("custom", function(a, b) {
        return new V(b,a)
    });
    function W(a, b) {
        this.c = a;
        this.d = b
    }
    var xa = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    W.prototype.v = function(a, b) {
        return b(a.k.w)
    }
    ;
    W.prototype.load = function(a) {
        t(this.c, "head", u(this.c, x(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        for (var b = this.d.families, c = [], d = 0, e = b.length; d < e; d++)
            c.push.apply(c, ya(b[d]));
        a(c)
    }
    ;
    function ya(a) {
        var b = a.split(":");
        a = b[0];
        if (b[1]) {
            for (var c = b[1].split(","), b = [], d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (f) {
                    var g = xa[f];
                    b.push(g ? g : f)
                }
            }
            c = [];
            for (d = 0; d < b.length; d += 1)
                c.push(new H(a,b[d]));
            return c
        }
        return [new H(a)]
    }
    T("ascender", function(a, b) {
        return new W(b,a)
    });
    function X(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c;
        this.m = []
    }
    X.prototype.v = function(a, b) {
        var c = this
          , d = c.d.projectId
          , e = c.d.version;
        if (d) {
            var f = c.c.u
              , g = c.c.createElement("script");
            g.id = "__MonotypeAPIScript__" + d;
            var h = p;
            g.onload = g.onreadystatechange = function() {
                if (!h && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
                    h = k;
                    if (f["__mti_fntLst" + d]) {
                        var e = f["__mti_fntLst" + d]();
                        if (e)
                            for (var m = 0; m < e.length; m++)
                                c.m.push(new H(e[m].fontfamily))
                    }
                    b(a.k.w);
                    g.onload = g.onreadystatechange = l
                }
            }
            ;
            g.src = c.D(d, e);
            t(this.c, "head", g)
        } else
            b(k)
    }
    ;
    X.prototype.D = function(a, b) {
        var c = x(this.c)
          , d = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    }
    ;
    X.prototype.load = function(a) {
        a(this.m)
    }
    ;
    T("monotype", function(a, b) {
        var c = (new C(navigator.userAgent,document)).parse();
        return new X(c,b,a)
    });
    function Y(a, b) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    Y.prototype.D = function(a) {
        var b = x(this.c);
        return (this.d.api || b + "//use.typekit.net") + "/" + a + ".js"
    }
    ;
    Y.prototype.v = function(a, b) {
        var c = this.d.id
          , d = this.d
          , e = this.c.u
          , f = this;
        c ? (e.__webfonttypekitmodule__ || (e.__webfonttypekitmodule__ = {}),
        e.__webfonttypekitmodule__[c] = function(c) {
            c(a, d, function(a, c, d) {
                for (var e = 0; e < c.length; e += 1) {
                    var g = d[c[e]];
                    if (g)
                        for (var Q = 0; Q < g.length; Q += 1)
                            f.m.push(new H(c[e],g[Q]));
                    else
                        f.m.push(new H(c[e]))
                }
                b(a)
            })
        }
        ,
        c = ha(this.c, this.D(c)),
        t(this.c, "head", c)) : b(k)
    }
    ;
    Y.prototype.load = function(a) {
        a(this.m)
    }
    ;
    T("typekit", function(a, b) {
        return new Y(b,a)
    });
    function za(a, b, c) {
        this.L = a ? a : b + Aa;
        this.p = [];
        this.Q = [];
        this.da = c || ""
    }

var Aa = "../fonts/fonts.css";
za.prototype.f = function() {
    if (0 == this.p.length) {
        throw Error("No fonts to load !");
    }
    if (-1 != this.L.indexOf("kit=")) {
        return this.L;
    }
    var a = this.p.length, 
        b = [], 
        c = 0;

    for (c = 0; c < a; c++) {
        b.push(this.p[c].replace(/ /g, "+"));
    }

    a = Aa;

    if (0 < this.Q.length) {
        a += "&subset=" + this.Q.join(",");
    }

    if (0 < this.da.length) {
        a += "&text=" + encodeURIComponent(this.da);
    }

    return a;
}

    ;
    function Ba(a) {
        this.p = a;
        this.aa = [];
        this.I = {}
    }
    var Ca = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    }
      , Da = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }
      , Ea = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }
      , Fa = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    Ba.prototype.parse = function() {
        for (var a = this.p.length, b = 0; b < a; b++) {
            var c = this.p[b].split(":")
              , d = c[0].replace(/\+/g, " ")
              , e = ["n4"];
            if (2 <= c.length) {
                var f;
                var g = c[1];
                f = [];
                if (g)
                    for (var g = g.split(","), h = g.length, n = 0; n < h; n++) {
                        var m;
                        m = g[n];
                        if (m.match(/^[\w]+$/)) {
                            m = Fa.exec(m.toLowerCase());
                            var r = j;
                            if (m == l)
                                r = "";
                            else {
                                r = j;
                                r = m[1];
                                if (r == l || "" == r)
                                    r = "4";
                                else
                                    var oa = Da[r]
                                      , r = oa ? oa : isNaN(r) ? "4" : r.substr(0, 1);
                                r = [m[2] == l || "" == m[2] ? "n" : Ea[m[2]], r].join("")
                            }
                            m = r
                        } else
                            m = "";
                        m && f.push(m)
                    }
                0 < f.length && (e = f);
                3 == c.length && (c = c[2],
                f = [],
                c = !c ? f : c.split(","),
                0 < c.length && (c = Ca[c[0]]) && (this.I[d] = c))
            }
            this.I[d] || (c = Ca[d]) && (this.I[d] = c);
            for (c = 0; c < e.length; c += 1)
                this.aa.push(new H(d,e[c]))
        }
    }
    ;
    function Z(a, b, c) {
        this.a = a;
        this.c = b;
        this.d = c
    }
    var Ga = {
        Arimo: k,
        Cousine: k,
        Tinos: k
    };
    Z.prototype.v = function(a, b) {
        b(a.k.w)
    }
    ;
    Z.prototype.load = function(a) {
        var b = this.c;
        if ("MSIE" == this.a.getName() && this.d.blocking != k) {
            var c = s(this.X, this, a)
              , d = function() {
                b.z.body ? c() : setTimeout(d, 0)
            };
            d()
        } else
            this.X(a)
    }
    ;
    Z.prototype.X = function(a) {
        for (var b = this.c, c = new za(this.d.api,x(b),this.d.text), d = this.d.families, e = d.length, f = 0; f < e; f++) {
            var g = d[f].split(":");
            3 == g.length && c.Q.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":");
            c.p.push(g.join(h))
        }
        d = new Ba(d);
        d.parse();
        t(b, "head", u(b, c.f()));
        a(d.aa, d.I, Ga)
    }
    ;
    T("google", function(a, b) {
        var c = (new C(navigator.userAgent,document)).parse();
        return new Z(c,b,a)
    });
    function $(a, b) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    $.prototype.D = function(a) {
        return x(this.c) + (this.d.api || "") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + a + ".js"
    }
    ;
    $.prototype.v = function(a, b) {
        var c = this.d.id
          , d = this.c.u
          , e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}),
        d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, n = c.fonts.length; d < n; ++d) {
                var m = c.fonts[d];
                e.m.push(new H(m.name,ma("font-weight:" + m.weight + ";font-style:" + m.style)))
            }
            b(a)
        }
        ,
        c = ha(this.c, this.D(c)),
        t(this.c, "head", c)) : b(k)
    }
    ;
    $.prototype.load = function(a) {
        a(this.m)
    }
    ;
    T("fontdeck", function(a, b) {
        return new $(b,a)
    });
    window.WebFontConfig && U.load(window.WebFontConfig);
}
)(this, document);