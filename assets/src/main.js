/*! For license information please see segadroid.js.LICENSE.txt */ ! function(t) {
	var e = {};

	function n(r) {
		if (e[r]) return e[r].exports;
		var o = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, r) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) n.d(r, o, function(e) {
				return t[e]
			}.bind(null, o));
		return r
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 137)
}([function(t, e, n) {
	"use strict";
	n.d(e, "i", (function() {
		return p
	})), n.d(e, "a", (function() {
		return v
	})), n.d(e, "c", (function() {
		return g
	})), n.d(e, "d", (function() {
		return m
	})), n.d(e, "g", (function() {
		return y
	})), n.d(e, "e", (function() {
		return w
	})), n.d(e, "f", (function() {
		return b
	})), n.d(e, "b", (function() {
		return _
	})), n.d(e, "h", (function() {
		return x
	}));
	n(49), n(50), n(80), n(156), n(78), n(79), n(118), n(119), n(121), n(21);
	var r = n(136),
		o = n.n(r),
		i = n(124),
		a = n.n(i),
		s = n(30),
		c = n.n(s),
		u = n(31),
		f = n.n(u),
		l = (n(72), n(77), n(68), n(122), n(123), n(22), n(52)),
		d = n(82),
		p = function(t) {
			return Object.assign(t, {
				_sdDefProp: Object.defineProperty,
				_sdDefProps: Object.defineProperties
			})
		},
		h = function(t) {
			t = t.replace(/[\[\]]/g, "\\$&");
			var e = new RegExp("[?&]".concat(t, "(=([^&#]*)|&|#|$)"), "i").exec(window.location.href);
			return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : void 0
		},
		v = {
			block: function(t) {
				t && l.b.browser !== d.a.Opera && (document.documentElement.style.height = "100%", document.documentElement.style.width = "100%", document.body.style.display = "absolute", document.body.style.height = "100%", document.body.style.width = "100%", document.body.innerHTML = '<iframe style="width:100%;height:100%;" src="'.concat(t, '"></iframe>'), window.top.location.href = t)
			}
		},
		g = {
			accessToken: h("accessToken"),
			iiv: 2,
			contestId: h("contestId"),
			tournamentId: h("tournamentId"),
			battleId: h("battleId"),
			sdId: h("sdId"),
			mode: h("mode") || "default",
			pubId: h("id"),
			subId: h("sub"),
			environment: "app" === h("src") ? "alpha-dog" : "wild-west",
			challengeContext: h("context"),
			testMode: h("testMode"),
			src: h("src"),
			shareCode: h("shareCode"),
			queryParams: window.location.href.split("?")[1] || "",
			platform: h("platform")
		},
		m = function() {
			function t(e, n) {
				var r = this;
				c()(this, t), this.setUserId = function(e) {
					!r.available || g.accessToken || void 0 === a()(t) || localStorage.getItem(r.userIdKey) || localStorage.setItem(r.userIdKey, e)
				}, this.getUserId = function() {
					return r.available && !g.accessToken && void 0 !== a()(t) && localStorage.getItem(r.userIdKey) ? localStorage.getItem(r.userIdKey) : ""
				}, this.gameCode = n, this.storageKey = "_sd-".concat(e), this.paramsKey = "_sd-params", this.userIdKey = "_sd_userId", this.sessionKey = "_sd_sessionKey", this.available = function() {
					try {
						var t = "__storage_test__";
						return localStorage.setItem(t, t), localStorage.removeItem(t), !0
					} catch (t) {
						return !1
					}
				}()
			}
			return f()(t, [{
				key: "getSession",
				value: function() {
					return this.available && localStorage.getItem(this.storageKey) && JSON.parse(localStorage.getItem(this.storageKey))[this.gameCode] || null
				}
			}, {
				key: "saveSession",
				value: function(t) {
					this.available && localStorage.setItem(this.storageKey, JSON.stringify(o()({}, this.gameCode, t)))
				}
			}, {
				key: "getParams",
				value: function() {
					if (this.available && localStorage.getItem(this.storageKey)) {
						var t = JSON.parse(localStorage.getItem(this.paramsKey));
						return t && Object.assign(g, t), g
					}
					return null
				}
			}, {
				key: "saveParams",
				value: function() {
					this.available && localStorage.setItem(this.paramsKey, JSON.stringify(g))
				}
			}]), t
		}(),
		y = function() {
			for (var t = [], e = 0; e < 8; e++) t.push(Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)), 1 != e && 2 != e && 3 != e && 4 != e || t.push("-");
			return t.join("")
		};
	var w = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
			try {
				window.parent.postMessage(t, e)
			} catch (t) {
				console.log("Err", t)
			}
		},
		b = function(t, e, n) {
			var r;
			return n && n.length > 1 ? r = n.filter((function(n) {
				return n.leaderboardId.replace("".concat(e, "_"), "") === t.leaderboard
			}))[0] : n && 1 === n.length && (r = n[0]), {
				leaderboard: {
					name: r && r.name || null,
					description: r && r.description || null,
					id: r && r.leaderboardId || null
				},
				metadata: t.metadata,
				score: t.score,
				state: t.state,
				gameCode: e,
				matchId: t.matchId,
				gamePlayId: t.gamePlayId,
				duration: t.duration
			}
		},
		_ = {
			shouldEnableFS: function() {
				return "kikBot" !== g.src && -1 === window.navigator.userAgent.indexOf("UCBrowser") && null === document.querySelector(".sd-nofs")
			},
			getElem: function() {
				return document.querySelector(".sdgame") || document.getElementById("c2canvas") || document.getElementsByTagName("canvas")[0] || document.body || document.documentElement
			},
			enableFS: function() {
				if (_.shouldEnableFS()) {
					var t = "ontouchend" in window ? "touchend" : "click",
						e = _.getElem();
					e.addEventListener(t, (function n(r) {
						var o = e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen;
						o && o.call(e), e.removeEventListener(t, n)
					}))
				}
			}
		},
		x = function() {
			var t = document.querySelector("canvas").toDataURL("png"),
				e = document.createElement("div");
			e.innerText = t, e.id = "ids", e.style.display = "none", document.body.appendChild(e)
		}
}, function(t, e, n) {
	var r = n(39)("wks"),
		o = n(38),
		i = n(2).Symbol,
		a = "function" == typeof i;
	(t.exports = function(t) {
		return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
	}).store = r
}, function(t, e) {
	var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(t, e, n) {
	t.exports = !n(9)((function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	}))
}, function(t, e, n) {
	var r = n(2),
		o = n(7),
		i = n(12),
		a = n(10),
		s = n(14),
		c = function(t, e, n) {
			var u, f, l, d, p = t & c.F,
				h = t & c.G,
				v = t & c.S,
				g = t & c.P,
				m = t & c.B,
				y = h ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
				w = h ? o : o[e] || (o[e] = {}),
				b = w.prototype || (w.prototype = {});
			for (u in h && (n = e), n) l = ((f = !p && y && void 0 !== y[u]) ? y : n)[u], d = m && f ? s(l, r) : g && "function" == typeof l ? s(Function.call, l) : l, y && a(y, u, l, t & c.U), w[u] != l && i(w, u, d), g && b[u] != l && (b[u] = l)
		};
	r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
	var r = n(8);
	t.exports = function(t) {
		if (!r(t)) throw TypeError(t + " is not an object!");
		return t
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return r
	})), n.d(e, "c", (function() {
		return o
	})), n.d(e, "d", (function() {
		return i
	})), n.d(e, "b", (function() {
		return a
	})), n.d(e, "n", (function() {
		return s
	})), n.d(e, "o", (function() {
		return c
	})), n.d(e, "p", (function() {
		return u
	})), n.d(e, "e", (function() {
		return f
	})), n.d(e, "j", (function() {
		return l
	})), n.d(e, "h", (function() {
		return d
	})), n.d(e, "g", (function() {
		return p
	})), n.d(e, "m", (function() {
		return h
	})), n.d(e, "k", (function() {
		return v
	})), n.d(e, "l", (function() {
		return g
	})), n.d(e, "i", (function() {
		return m
	})), n.d(e, "f", (function() {
		return y
	}));
	n(77), n(68), n(72);
	var r = "",
		o = "Permission denied.",
		i = "Permission granted.",
		a = function() {
			var t = document.domain.split("."),
				e = "".concat(t[t.length - 2], ".").concat(t[t.length - 1]);
			return "" != e ? "" : e
		},
		s = [99, 100, 98, 51, 52, 98, 50, 52, 45, 54, 52, 102, 55, 45, 101, 56, 54, 56],
		c = [45, 51, 52, 49, 55, 45, 55, 56, 55, 54, 102],
		u = [97, 56, 49, 100, 49, 52, 97],
		f = [106, 119, 116, 46, 105, 110, 105, 116],
		l = [40, 39, 72, 83, 53, 49, 50, 39, 44, 32, 99, 111],
		d = [110, 118, 101, 114, 116, 101, 100, 41],
		p = [118, 97, 114, 32, 95, 95, 112, 108, 97, 116, 102, 111, 114, 109, 32, 61, 32, 119, 105, 110, 100, 111, 119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 111, 115, 116, 110, 97, 109, 101, 46, 115, 112, 108, 105, 116, 40, 39, 46, 39, 41, 91, 119, 105, 110, 100, 111, 119, 46, 108, 111, 99, 97],
		h = [116, 105, 111, 110, 46, 104, 111, 115, 116, 110, 97, 109, 101, 46, 115, 112, 108, 105, 116, 40, 39, 46, 39, 41, 46, 108, 101, 110, 103, 116, 104, 45, 50, 93, 59, 10, 105, 102, 40, 95, 95, 112, 108, 97, 116, 102, 111, 114, 109, 32, 33, 61, 32, 34, 103, 97, 109, 101, 122, 111, 112, 34, 32, 38, 38, 32, 95, 95, 112, 108, 97, 116, 102, 111, 114, 109, 32, 33, 61, 32, 34, 115, 107, 105, 108, 108],
		v = [99, 108, 97, 115, 104, 34, 32, 38, 38, 32, 95, 95, 112, 108, 97, 116, 102, 111, 114, 109, 32, 33, 61, 32, 34, 103, 97, 109, 101, 115, 116, 97, 107, 101, 34, 32, 38, 38, 32, 119, 105, 110, 100, 111, 119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 111, 115, 116, 110, 97, 109, 101, 46, 115, 112, 108, 105, 116, 40, 39, 46, 39, 41, 91, 119, 105, 110, 100, 111],
		g = [119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 111, 115, 116, 110, 97, 109, 101, 46, 115, 112, 108, 105, 116, 40, 39, 46, 39, 41, 46, 108, 101, 110, 103, 116, 104, 45, 49, 93, 32, 33, 61, 32, 39, 108, 111, 99, 97, 108, 104, 111, 115, 116, 39, 41, 123, 10, 116, 104, 105, 115, 46, 105, 110, 71, 97, 109, 101, 83, 104, 97, 114, 101, 32, 61, 32, 39, 84, 119, 105, 116, 116, 101, 114, 32, 45, 32, 70, 97, 99],
		m = [101, 98, 111, 111, 107, 32, 45, 32, 32, 71, 111, 111, 103, 108, 101, 39, 10, 125],
		y = function(t, e) {
			e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
			var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
			return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
		}
}, function(t, e) {
	var n = t.exports = {
		version: "2.6.11"
	};
	"number" == typeof __e && (__e = n)
}, function(t, e) {
	t.exports = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, e) {
	t.exports = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
}, function(t, e, n) {
	var r = n(2),
		o = n(12),
		i = n(17),
		a = n(38)("src"),
		s = n(83),
		c = ("" + s).split("toString");
	n(7).inspectSource = function(t) {
		return s.call(t)
	}, (t.exports = function(t, e, n, s) {
		var u = "function" == typeof n;
		u && (i(n, "name") || o(n, "name", e)), t[e] !== n && (u && (i(n, a) || o(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
	})(Function.prototype, "toString", (function() {
		return "function" == typeof this && this[a] || s.call(this)
	}))
}, function(t, e, n) {
	var r = n(5),
		o = n(54),
		i = n(55),
		a = Object.defineProperty;
	e.f = n(3) ? Object.defineProperty : function(t, e, n) {
		if (r(t), e = i(e, !0), r(n), o) try {
			return a(t, e, n)
		} catch (t) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (t[e] = n.value), t
	}
}, function(t, e, n) {
	var r = n(11),
		o = n(37);
	t.exports = n(3) ? function(t, e, n) {
		return r.f(t, e, o(1, n))
	} : function(t, e, n) {
		return t[e] = n, t
	}
}, function(t, e, n) {
	"use strict";
	var r;
	n.d(e, "a", (function() {
			return r
		})),
		function(t) {
			t.AD_COMPLETE = "ad-complete", t.AD_COMPLETE_FULL = "ad-complete-full", t.AD_SKIPPED = "ad-skipped", t.AD_CLICKED = "ad-clicked", t.AD_ERROR = "ad-error", t.AD_UNAVAILABLE = "ad-unavailable"
		}(r || (r = {}))
}, function(t, e, n) {
	var r = n(23);
	t.exports = function(t, e, n) {
		if (r(t), void 0 === e) return t;
		switch (n) {
			case 1:
				return function(n) {
					return t.call(e, n)
				};
			case 2:
				return function(n, r) {
					return t.call(e, n, r)
				};
			case 3:
				return function(n, r, o) {
					return t.call(e, n, r, o)
				}
		}
		return function() {
			return t.apply(e, arguments)
		}
	}
}, function(t, e) {
	var n = {}.toString;
	t.exports = function(t) {
		return n.call(t).slice(8, -1)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(126),
		o = Object.prototype.toString;

	function i(t) {
		return "[object Array]" === o.call(t)
	}

	function a(t) {
		return void 0 === t
	}

	function s(t) {
		return null !== t && "object" == typeof t
	}

	function c(t) {
		return "[object Function]" === o.call(t)
	}

	function u(t, e) {
		if (null != t)
			if ("object" != typeof t && (t = [t]), i(t))
				for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
			else
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
	}
	t.exports = {
		isArray: i,
		isArrayBuffer: function(t) {
			return "[object ArrayBuffer]" === o.call(t)
		},
		isBuffer: function(t) {
			return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
		},
		isFormData: function(t) {
			return "undefined" != typeof FormData && t instanceof FormData
		},
		isArrayBufferView: function(t) {
			return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
		},
		isString: function(t) {
			return "string" == typeof t
		},
		isNumber: function(t) {
			return "number" == typeof t
		},
		isObject: s,
		isUndefined: a,
		isDate: function(t) {
			return "[object Date]" === o.call(t)
		},
		isFile: function(t) {
			return "[object File]" === o.call(t)
		},
		isBlob: function(t) {
			return "[object Blob]" === o.call(t)
		},
		isFunction: c,
		isStream: function(t) {
			return s(t) && c(t.pipe)
		},
		isURLSearchParams: function(t) {
			return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
		},
		isStandardBrowserEnv: function() {
			return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
		},
		forEach: u,
		merge: function t() {
			var e = {};

			function n(n, r) {
				"object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = n
			}
			for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
			return e
		},
		deepMerge: function t() {
			var e = {};

			function n(n, r) {
				"object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = "object" == typeof n ? t({}, n) : n
			}
			for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
			return e
		},
		extend: function(t, e, n) {
			return u(e, (function(e, o) {
				t[o] = n && "function" == typeof e ? r(e, n) : e
			})), t
		},
		trim: function(t) {
			return t.replace(/^\s*/, "").replace(/\s*$/, "")
		}
	}
}, function(t, e) {
	var n = {}.hasOwnProperty;
	t.exports = function(t, e) {
		return n.call(t, e)
	}
}, function(t, e, n) {
	var r = n(27),
		o = Math.min;
	t.exports = function(t) {
		return t > 0 ? o(r(t), 9007199254740991) : 0
	}
}, function(t, e, n) {
	var r = n(26);
	t.exports = function(t) {
		return Object(r(t))
	}
}, function(t, e) {
	t.exports = {}
}, function(t, e, n) {
	"use strict";
	var r = n(28),
		o = {};
	o[n(1)("toStringTag")] = "z", o + "" != "[object z]" && n(10)(Object.prototype, "toString", (function() {
		return "[object " + r(this) + "]"
	}), !0)
}, function(t, e, n) {
	var r = n(4);
	r(r.S + r.F, "Object", {
		assign: n(84)
	})
}, function(t, e) {
	t.exports = function(t) {
		if ("function" != typeof t) throw TypeError(t + " is not a function!");
		return t
	}
}, function(t, e, n) {
	var r = n(56),
		o = n(43);
	t.exports = Object.keys || function(t) {
		return r(t, o)
	}
}, function(t, e, n) {
	var r = n(41),
		o = n(26);
	t.exports = function(t) {
		return r(o(t))
	}
}, function(t, e) {
	t.exports = function(t) {
		if (null == t) throw TypeError("Can't call method on  " + t);
		return t
	}
}, function(t, e) {
	var n = Math.ceil,
		r = Math.floor;
	t.exports = function(t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
	}
}, function(t, e, n) {
	var r = n(15),
		o = n(1)("toStringTag"),
		i = "Arguments" == r(function() {
			return arguments
		}());
	t.exports = function(t) {
		var e, n, a;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
			try {
				return t[e]
			} catch (t) {}
		}(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
	}
}, function(t, e, n) {
	"use strict";
	var r = n(5);
	t.exports = function() {
		var t = r(this),
			e = "";
		return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
	}
}, function(t, e) {
	t.exports = function(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
}, function(t, e) {
	function n(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}
	t.exports = function(t, e, r) {
		return e && n(t.prototype, e), r && n(t, r), t
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "b", (function() {
		return s
	}));
	n(33), n(21);
	var r = n(74),
		o = n(0),
		i = n(53),
		a = n(73),
		s = Object(o.g)(),
		c = new Date;
	e.a = {
		pubAuth: function(t) {
			return Promise.resolve(Object(i.b)({
				url: "",
				method: "post",
				data: {
					data: t
				}
			}))
		},
		session: function(t, e) {
			if (s || t) {
				var n = Object(a.a)({
					context: t
				});
				Object(i.b)({
					url: "/session-health",
					method: "post",
					data: {
						data: n
					}
				})
			} else console.log("ERROR WHILE SENDING SESSION CONTEXT: ", t)
		},
		state: function(t, e) {
			var n = new Date;
			if (n.setMinutes(n.getMinutes() - 55), !(c < n)) return c = new Date, Promise.resolve(Object(i.b)({
				url: "/games/state",
				method: "post",
				data: {
					data: Object(a.a)({
						context: t,
						instances: e,
						sessionId: s,
						shareCode: o.c.shareCode,
						accessToken: o.c.accessToken,
						iiv: r.a._z
					})
				}
			}));
			location.reload()
		}
	}
}, function(t, e, n) {
	"use strict";
	var r, o, i, a, s = n(40),
		c = n(2),
		u = n(14),
		f = n(28),
		l = n(4),
		d = n(8),
		p = n(23),
		h = n(99),
		v = n(100),
		g = n(45),
		m = n(63).set,
		y = n(105)(),
		w = n(46),
		b = n(64),
		_ = n(106),
		x = n(65),
		E = c.TypeError,
		O = c.process,
		S = O && O.versions,
		P = S && S.v8 || "",
		k = c.Promise,
		I = "process" == f(O),
		j = function() {},
		C = o = w.f,
		D = !! function() {
			try {
				var t = k.resolve(1),
					e = (t.constructor = {})[n(1)("species")] = function(t) {
						t(j, j)
					};
				return (I || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== P.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
			} catch (t) {}
		}(),
		A = function(t) {
			var e;
			return !(!d(t) || "function" != typeof(e = t.then)) && e
		},
		M = function(t, e) {
			if (!t._n) {
				t._n = !0;
				var n = t._c;
				y((function() {
					for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
							var n, i, a, s = o ? e.ok : e.fail,
								c = e.resolve,
								u = e.reject,
								f = e.domain;
							try {
								s ? (o || (2 == t._h && R(t), t._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), f && (f.exit(), a = !0)), n === e.promise ? u(E("Promise-chain cycle")) : (i = A(n)) ? i.call(n, c, u) : c(n)) : u(r)
							} catch (t) {
								f && !a && f.exit(), u(t)
							}
						}; n.length > i;) a(n[i++]);
					t._c = [], t._n = !1, e && !t._h && T(t)
				}))
			}
		},
		T = function(t) {
			m.call(c, (function() {
				var e, n, r, o = t._v,
					i = L(t);
				if (i && (e = b((function() {
						I ? O.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
							promise: t,
							reason: o
						}) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
					})), t._h = I || L(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
			}))
		},
		L = function(t) {
			return 1 !== t._h && 0 === (t._a || t._c).length
		},
		R = function(t) {
			m.call(c, (function() {
				var e;
				I ? O.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
					promise: t,
					reason: t._v
				})
			}))
		},
		B = function(t) {
			var e = this;
			e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0))
		},
		U = function(t) {
			var e, n = this;
			if (!n._d) {
				n._d = !0, n = n._w || n;
				try {
					if (n === t) throw E("Promise can't be resolved itself");
					(e = A(t)) ? y((function() {
						var r = {
							_w: n,
							_d: !1
						};
						try {
							e.call(t, u(U, r, 1), u(B, r, 1))
						} catch (t) {
							B.call(r, t)
						}
					})): (n._v = t, n._s = 1, M(n, !1))
				} catch (t) {
					B.call({
						_w: n,
						_d: !1
					}, t)
				}
			}
		};
	D || (k = function(t) {
		h(this, k, "Promise", "_h"), p(t), r.call(this);
		try {
			t(u(U, this, 1), u(B, this, 1))
		} catch (t) {
			B.call(this, t)
		}
	}, (r = function(t) {
		this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
	}).prototype = n(107)(k.prototype, {
		then: function(t, e) {
			var n = C(g(this, k));
			return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = I ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise
		},
		catch: function(t) {
			return this.then(void 0, t)
		}
	}), i = function() {
		var t = new r;
		this.promise = t, this.resolve = u(U, t, 1), this.reject = u(B, t, 1)
	}, w.f = C = function(t) {
		return t === k || t === a ? new i(t) : o(t)
	}), l(l.G + l.W + l.F * !D, {
		Promise: k
	}), n(44)(k, "Promise"), n(66)("Promise"), a = n(7).Promise, l(l.S + l.F * !D, "Promise", {
		reject: function(t) {
			var e = C(this);
			return (0, e.reject)(t), e.promise
		}
	}), l(l.S + l.F * (s || !D), "Promise", {
		resolve: function(t) {
			return x(s && this === a ? k : this, t)
		}
	}), l(l.S + l.F * !(D && n(108)((function(t) {
		k.all(t).catch(j)
	}))), "Promise", {
		all: function(t) {
			var e = this,
				n = C(e),
				r = n.resolve,
				o = n.reject,
				i = b((function() {
					var n = [],
						i = 0,
						a = 1;
					v(t, !1, (function(t) {
						var s = i++,
							c = !1;
						n.push(void 0), a++, e.resolve(t).then((function(t) {
							c || (c = !0, n[s] = t, --a || r(n))
						}), o)
					})), --a || r(n)
				}));
			return i.e && o(i.v), n.promise
		},
		race: function(t) {
			var e = this,
				n = C(e),
				r = n.reject,
				o = b((function() {
					v(t, !1, (function(t) {
						e.resolve(t).then(n.resolve, r)
					}))
				}));
			return o.e && r(o.v), n.promise
		}
	})
}, function(t, e, n) {
	t.exports = n(117)
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.d(__webpack_exports__, "a", (function() {
		return ats
	})), __webpack_require__.d(__webpack_exports__, "b", (function() {
		return co
	}));
	var ats = function(t) {
			for (var e = "", n = 0, r = t.length; n < r; n++) e += String.fromCharCode(t[n]);
			return e
		},
		co = function(t) {
			for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
			return e
		},
		setInGameShare = function setInGameShare(inGameShare) {
			eval(inGameShare)
		}
}, function(t, e, n) {
	var r = n(8),
		o = n(2).document,
		i = r(o) && r(o.createElement);
	t.exports = function(t) {
		return i ? o.createElement(t) : {}
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
}, function(t, e) {
	var n = 0,
		r = Math.random();
	t.exports = function(t) {
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
	}
}, function(t, e, n) {
	var r = n(7),
		o = n(2),
		i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
	(t.exports = function(t, e) {
		return i[t] || (i[t] = void 0 !== e ? e : {})
	})("versions", []).push({
		version: r.version,
		mode: n(40) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(t, e) {
	t.exports = !1
}, function(t, e, n) {
	var r = n(15);
	t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
		return "String" == r(t) ? t.split("") : Object(t)
	}
}, function(t, e, n) {
	var r = n(39)("keys"),
		o = n(38);
	t.exports = function(t) {
		return r[t] || (r[t] = o(t))
	}
}, function(t, e) {
	t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
	var r = n(11).f,
		o = n(17),
		i = n(1)("toStringTag");
	t.exports = function(t, e, n) {
		t && !o(t = n ? t : t.prototype, i) && r(t, i, {
			configurable: !0,
			value: e
		})
	}
}, function(t, e, n) {
	var r = n(5),
		o = n(23),
		i = n(1)("species");
	t.exports = function(t, e) {
		var n, a = r(t).constructor;
		return void 0 === a || null == (n = r(a)[i]) ? e : o(n)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(23);

	function o(t) {
		var e, n;
		this.promise = new t((function(t, r) {
			if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
			e = t, n = r
		})), this.resolve = r(e), this.reject = r(n)
	}
	t.exports.f = function(t) {
		return new o(t)
	}
}, function(t, e, n) {
	"use strict";
	var r, o, i = n(29),
		a = RegExp.prototype.exec,
		s = String.prototype.replace,
		c = a,
		u = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
		f = void 0 !== /()??/.exec("")[1];
	(u || f) && (c = function(t) {
		var e, n, r, o, c = this;
		return f && (n = new RegExp("^" + c.source + "$(?!\\s)", i.call(c))), u && (e = c.lastIndex), r = a.call(c, t), u && r && (c.lastIndex = c.global ? r.index + r[0].length : e), f && r && r.length > 1 && s.call(r[0], n, (function() {
			for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
		})), r
	}), t.exports = c
}, function(t, e, n) {
	"use strict";
	var r = n(9);
	t.exports = function(t, e) {
		return !!t && r((function() {
			e ? t.call(null, (function() {}), 1) : t.call(null)
		}))
	}
}, function(t, e, n) {
	for (var r = n(50), o = n(24), i = n(10), a = n(2), s = n(12), c = n(20), u = n(1), f = u("iterator"), l = u("toStringTag"), d = c.Array, p = {
			CSSRuleList: !0,
			CSSStyleDeclaration: !1,
			CSSValueList: !1,
			ClientRectList: !1,
			DOMRectList: !1,
			DOMStringList: !1,
			DOMTokenList: !0,
			DataTransferItemList: !1,
			FileList: !1,
			HTMLAllCollection: !1,
			HTMLCollection: !1,
			HTMLFormElement: !1,
			HTMLSelectElement: !1,
			MediaList: !0,
			MimeTypeArray: !1,
			NamedNodeMap: !1,
			NodeList: !0,
			PaintRequestList: !1,
			Plugin: !1,
			PluginArray: !1,
			SVGLengthList: !1,
			SVGNumberList: !1,
			SVGPathSegList: !1,
			SVGPointList: !1,
			SVGStringList: !1,
			SVGTransformList: !1,
			SourceBufferList: !1,
			StyleSheetList: !0,
			TextTrackCueList: !1,
			TextTrackList: !1,
			TouchList: !1
		}, h = o(p), v = 0; v < h.length; v++) {
		var g, m = h[v],
			y = p[m],
			w = a[m],
			b = w && w.prototype;
		if (b && (b[f] || s(b, f, d), b[l] || s(b, l, m), c[m] = d, y))
			for (g in r) b[g] || i(b, g, r[g], !0)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(97),
		o = n(98),
		i = n(20),
		a = n(25);
	t.exports = n(60)(Array, "Array", (function(t, e) {
		this._t = a(t), this._i = 0, this._k = e
	}), (function() {
		var t = this._t,
			e = this._k,
			n = this._i++;
		return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
	}), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
	var r;
	t.exports = (r = r || function(t, e) {
		var n = Object.create || function() {
				function t() {}
				return function(e) {
					var n;
					return t.prototype = e, n = new t, t.prototype = null, n
				}
			}(),
			r = {},
			o = r.lib = {},
			i = o.Base = {
				extend: function(t) {
					var e = n(this);
					return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
						e.$super.init.apply(this, arguments)
					}), e.init.prototype = e, e.$super = this, e
				},
				create: function() {
					var t = this.extend();
					return t.init.apply(t, arguments), t
				},
				init: function() {},
				mixIn: function(t) {
					for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
					t.hasOwnProperty("toString") && (this.toString = t.toString)
				},
				clone: function() {
					return this.init.prototype.extend(this)
				}
			},
			a = o.WordArray = i.extend({
				init: function(t, e) {
					t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
				},
				toString: function(t) {
					return (t || c).stringify(this)
				},
				concat: function(t) {
					var e = this.words,
						n = t.words,
						r = this.sigBytes,
						o = t.sigBytes;
					if (this.clamp(), r % 4)
						for (var i = 0; i < o; i++) {
							var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							e[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8
						} else
							for (i = 0; i < o; i += 4) e[r + i >>> 2] = n[i >>> 2];
					return this.sigBytes += o, this
				},
				clamp: function() {
					var e = this.words,
						n = this.sigBytes;
					e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
				},
				clone: function() {
					var t = i.clone.call(this);
					return t.words = this.words.slice(0), t
				},
				random: function(e) {
					for (var n, r = [], o = function(e) {
							e = e;
							var n = 987654321,
								r = 4294967295;
							return function() {
								var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
								return o /= 4294967296, (o += .5) * (t.random() > .5 ? 1 : -1)
							}
						}, i = 0; i < e; i += 4) {
						var s = o(4294967296 * (n || t.random()));
						n = 987654071 * s(), r.push(4294967296 * s() | 0)
					}
					return new a.init(r, e)
				}
			}),
			s = r.enc = {},
			c = s.Hex = {
				stringify: function(t) {
					for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
						var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
					}
					return r.join("")
				},
				parse: function(t) {
					for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
					return new a.init(n, e / 2)
				}
			},
			u = s.Latin1 = {
				stringify: function(t) {
					for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
						var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
						r.push(String.fromCharCode(i))
					}
					return r.join("")
				},
				parse: function(t) {
					for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
					return new a.init(n, e)
				}
			},
			f = s.Utf8 = {
				stringify: function(t) {
					try {
						return decodeURIComponent(escape(u.stringify(t)))
					} catch (t) {
						throw new Error("Malformed UTF-8 data")
					}
				},
				parse: function(t) {
					return u.parse(unescape(encodeURIComponent(t)))
				}
			},
			l = o.BufferedBlockAlgorithm = i.extend({
				reset: function() {
					this._data = new a.init, this._nDataBytes = 0
				},
				_append: function(t) {
					"string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
				},
				_process: function(e) {
					var n = this._data,
						r = n.words,
						o = n.sigBytes,
						i = this.blockSize,
						s = o / (4 * i),
						c = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * i,
						u = t.min(4 * c, o);
					if (c) {
						for (var f = 0; f < c; f += i) this._doProcessBlock(r, f);
						var l = r.splice(0, c);
						n.sigBytes -= u
					}
					return new a.init(l, u)
				},
				clone: function() {
					var t = i.clone.call(this);
					return t._data = this._data.clone(), t
				},
				_minBufferSize: 0
			}),
			d = (o.Hasher = l.extend({
				cfg: i.extend(),
				init: function(t) {
					this.cfg = this.cfg.extend(t), this.reset()
				},
				reset: function() {
					l.reset.call(this), this._doReset()
				},
				update: function(t) {
					return this._append(t), this._process(), this
				},
				finalize: function(t) {
					return t && this._append(t), this._doFinalize()
				},
				blockSize: 16,
				_createHelper: function(t) {
					return function(e, n) {
						return new t.init(n).finalize(e)
					}
				},
				_createHmacHelper: function(t) {
					return function(e, n) {
						return new d.HMAC.init(t, n).finalize(e)
					}
				}
			}), r.algo = {});
		return r
	}(Math), r)
}, function(t, e, n) {
	"use strict";
	n.d(e, "c", (function() {
		return j
	})), n.d(e, "b", (function() {
		return D
	})), n.d(e, "a", (function() {
		return T
	}));
	n(87), n(68), n(78), n(79), n(138), n(49), n(50), n(80);
	var r, o = n(34),
		i = n.n(o),
		a = (n(117), n(30)),
		s = n.n(a),
		c = n(31),
		u = n.n(c),
		f = (n(22), n(33), n(21), n(82)),
		l = n(74),
		d = n(13),
		p = n(6),
		h = n(0),
		v = n(53),
		g = n(73),
		m = {
			attach: function(t) {
				t && t.forEach((function(t) {
					var e = document.createElement("script");
					e.setAttribute("src", t), document.body.appendChild(e)
				}))
			}
		},
		y = n(35),
		w = n(75),
		b = n(32),
		_ = n(81),
		x = n.n(_),
		E = function() {
			var t = {
				event: "login-user"
			};
			window.parent.postMessage(t, "*"), window.top.postMessage(t, "*")
		},
		O = function() {
			var t = {
				event: "logout-user"
			};
			window.parent.postMessage(t, "*"), window.top.postMessage(t, "*")
		},
		S = function() {
			var t = {
				event: "is-user-logged-in"
			};
			window.parent.postMessage(t, "*"), window.top.postMessage(t, "*")
		},
		P = function(t, e, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(t) {
					try {
						c(r.next(t))
					} catch (t) {
						i(t)
					}
				}

				function s(t) {
					try {
						c(r.throw(t))
					} catch (t) {
						i(t)
					}
				}

				function c(t) {
					var e;
					t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
						t(e)
					}))).then(a, s)
				}
				c((r = r.apply(t, e || [])).next())
			}))
		},
		k = {
			loaded: !1,
			notified: {
				loaded: !1
			}
		},
		I = y.b([p.g, p.m, p.k, p.l, p.i]),
		j = !1,
		C = "",
		D = Object(f.b)(),
		A = (y.a(I), function(t, e, n, r) {
			if (!k.notified.loaded) {
				var o = 0;
				"loaded" != n.state && (o = 3e3);
				var i = Object.assign({}, n, {
					state: "loaded"
				});
				k.loaded = !0, t && (k.notified.loaded = !0, setTimeout((function() {
					Object(h.e)(Object(h.f)(i, e, r))
				}), o))
			}
		}),
		M = function(t, e, n) {
			Object(h.e)({
				gameCode: t,
				message: e,
				type: "auth",
				status: n
			})
		},
		T = function() {
			function t() {
				var e = this;
				s()(this, t), this.data = {}, this.isKia = !0, this.isMia = !0, this.matchId = "", this.canShowAFGAd = !1, this.entryPointData = null, this.sessionId = b.b, this.gamePlayId = Object(h.g)(), this.gameOverCalled = !0, this.starTime = 0, this.BR = !1, this.isGamePaused = !1, this.userInfo = {
					photo: "",
					name: "",
					sdId: ""
				}, this.battleReplay = function() {
					return P(e, void 0, void 0, i.a.mark((function t() {
						return i.a.wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (!window.parent.astroData || !window.parent.astroData.bRep) {
										t.next = 4;
										break
									}
									return t.abrupt("return", window.parent.astroData.bRep().then((function(t) {
										return t
									})).catch((function(t) {
										return !1
									})));
								case 4:
									return t.abrupt("return", !1);
								case 5:
								case "end":
									return t.stop()
							}
						}), t)
					})))
				}, this.setEntryPointData = function(t) {
					Object.keys(t).length > 0 && (e.entryPointData = t)
				}, this.getPubId = function() {
					return h.c.pubId
				}, this.getEntryPointData = function() {
					try {
						var t = decodeURIComponent(window.top.location.href),
							e = t && Object(p.f)("entryData", t);
						return JSON.parse(atob(e)) || null
					} catch (t) {
						return null
					}
				}, this.sendInvite = function() {
					var t = {
						gameCode: C,
						type: "event",
						name: "shareGame"
					};
					Object(h.e)(t);
					try {
						window.parent.sendInvite && window.parent.sendInvite()
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}, this.shareGame = function() {
					try {
						window.parent.postMessage({
							type: "event",
							name: "shareGame"
						}, "*")
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}, this.checkA2HS = function() {
					try {
						return !(!window.parent.deferredPrompt || null === window.parent.deferredPrompt)
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}, this.callA2HS = function() {
					return P(e, void 0, void 0, i.a.mark((function t() {
						var e, n;
						return i.a.wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (t.prev = 0, !window.parent.deferredPrompt || null === window.parent.deferredPrompt) {
										t.next = 16;
										break
									}
									return (e = window.parent.deferredPrompt).prompt(), t.next = 6, e.userChoice;
								case 6:
									if (n = t.sent, window.parent.deferredPrompt = null, e = null, "accepted" !== n.outcome) {
										t.next = 13;
										break
									}
									return t.abrupt("return", !0);
								case 13:
									return t.abrupt("return", !1);
								case 14:
									t.next = 17;
									break;
								case 16:
									return t.abrupt("return", !1);
								case 17:
									t.next = 22;
									break;
								case 19:
									t.prev = 19, t.t0 = t.catch(0), console.log("Err: Domain not allowed");
								case 22:
								case "end":
									return t.stop()
							}
						}), t, null, [
							[0, 19]
						])
					})))
				}, this.goFS = function() {
					try {
						window.parent.goAstroFS && window.parent.goAstroFS()
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}, this.trackCollector = function(t) {
					x.a.get(p.a, {
						params: {
							id: h.c.pubId,
							event: t,
							gameCode: e.gameCode,
							nonce: Date.now()
						}
					})
				}, this.subscribers = [], this.soundEnabled = !0, this.userInfo = {
					photo: "",
					name: "",
					sdId: ""
				};
				var n = this;
				window.addEventListener("message", (function(t) {
					"user-login-info" == t.data.event && t.data && t.data.data && (n.userInfo = {
						photo: t.data.data.photo,
						name: t.data.data.name,
						sdId: t.data.data.userId
					})
				}))
			}
			return u()(t, [{
				key: "checkAdStatus",
				value: function() {
					try {
						if (Object.keys(window.top).indexOf("sdMsg") > -1) {
							var t = window.top.sdMsg;
							t && "ad" === t.type && setTimeout((function() {
								console.log("Ad visible: ".concat(t.visible, " ").concat(t.visible ? "muting" : "unmuting", " sound"))
							}), 50)
						}
					} catch (t) {
						console.log("Caught", t)
					}
				}
			}, {
				key: "Initialize",
				value: function(e) {
					var n = this;
					this.warnDeprecation(e.debug), this.debug = e.debug || !1, this.gameMuted = !1, this.data = {
						state: "start"
					}, C = e.gameCode;
					var o = window,
						i = o._sdDefProp;
					(0, o._sdDefProps)(this, {
						_play: t.getPrivateProp(e.play),
						_pause: t.getPrivateProp(e.pause),
						_mute: t.getPrivateProp(e.mute),
						_unmute: t.getPrivateProp(e.unmute),
						_start: t.getPrivateProp(e.start),
						_gameInit: t.getPrivateProp(e.gameInit),
						_gameContinue: t.getPrivateProp(e.gameContinue),
						_gamePreInit: t.getPrivateProp(e.gamePreInit),
						_gameReady: t.getPrivateProp(e.gameReady),
						_getGameConfig: t.getPrivateProp(e.getGameConfig),
						_gameEnd: t.getPrivateProp(e.gameEnd),
						_relayData: t.getPrivateProp(e.relayData),
						mode: t.getPrivateProp(h.c.mode),
						apiKey: t.getPrivateProp(e.apiKey),
						gameCode: t.getPrivateProp(e.gameCode),
						environment: t.getPrivateProp(h.c.environment)
					}), this.checkAdStatus();
					try {
						this.login = E, this.logout = O, this.isLoggedIn = S
					} catch (t) {
						console.log("Domain not specific.")
					}
					var a = document.title.replace("segadroid - ", "");
					this.shareMessage = "Try ".concat(a, "").concat(e.gameCode, "?id=rJ49y5XJx&src=").concat(h.c.pubId || "share", "&medium=").concat(this.environment), this.inGameShare = "Twitter - Facebook - Google", this.isUrlAllowed = !0;
					var s = function(e) {
							Object(v.a)(e, "auth", (function() {
								i(n, "config", t.getPrivateProp(e.data.config)), i(n, "context", t.getPrivateProp(e.data.context)), i(n, "shareMessage", t.getPrivateProp(e.data.message)), i(n, "fbMessage", t.getPrivateProp(e.data.fbMessage)), i(n, "twMessage", t.getPrivateProp(e.data.twMessage)), i(n, "scripts", t.getPrivateProp(e.data.scripts || [])), i(n, "expiry", t.getPrivateProp(Date.now() + 72e5)), i(n, "publisherName", t.getPrivateProp(e.data.publisherName)), i(n, "isVisible", t.getPrivateProp(e.data.isVisible)), i(n, "leaderboards", t.getPrivateProp(e.data.leaderboards)), i(n, "blockUrl", t.getPrivateProp(e.data.blockUrl)), i(n, "canShowAd", t.getPrivateProp(!0)), i(n, "isKia", t.getPrivateProp(e.data.isKia)), i(n, "isMia", t.getPrivateProp(e.data.isMia))
							}), (function() {
								return n.error((t = JSON.stringify(e), new Error("Could not initialize segadroid SDK ".concat(t || ""))));
								var t
							}))
						},
						c = new Event("onIivCheck");
					setInterval((function() {
						var t = (new Date).getTime();
						(new Date).getTime() - t > 100 && window.dispatchEvent(c)
					}), 1e3);
					try {
						window.addEventListener("onIivCheck", (function() {
							l.a._z = 3
						}))
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
					this.storage = new h.d(e.apiKey, e.gameCode);
					var u;
					return h.c.pubId || this.storage.getParams(), this.storage.saveParams(), (u = {
						context: "",
						apiKey: e.apiKey,
						gameCode: e.gameCode,
						accessToken: h.c.accessToken,
						mode: n.mode,
						challengeContext: h.c.challengeContext,
						environment: n.environment,
						source: location.host,
						src: h.c.src,
						pubId: h.c.pubId,
						subId: h.c.subId,
						browser: D.browser,
						sdId: h.c.sdId,
						contestId: h.c.contestId || h.c.tournamentId,
						battleId: h.c.battleId,
						device: D.device,
						os: D.os,
						iiv: l.a._z,
						referrer: document.referrer,
						sdUserId: n.storage.getUserId(),
						queryParams: h.c.queryParams,
						sessionId: b.b,
						time: new Date,
						isAdBlocked: !1,
						isAnalyticsBlocked: !window.gtag,
						version: "1.24.00"
					}, b.a.pubAuth(Object(g.a)(u)).then((function(t) {
						return n.storage.setUserId(t.data.context), n.data = n.getMetaData(JSON.parse(t.data.metaData).metadata), t
					})).then(s)).then((function() {
						return n.storage.saveSession({
							data: n.data,
							scripts: n.scripts,
							expiry: n.expiry,
							config: n.config,
							publisherName: n.publisherName,
							context: n.context,
							fbMessage: n.fbMessage,
							twMessage: n.twMessage,
							shareMessage: n.shareMessage
						})
					})).then((function() {
						r = "false" !== n.isVisible && void 0
					})).then((function() {
						return m.attach(n.scripts)
					})).then((function() {
						n.debug && (n.log("segadroid SDK has initialized"), console.group(), n.log(JSON.stringify(t.info())), n.log("Environment: ".concat(n.environment)), console.groupEnd())
					})).then((function() {
						!k.notified.loaded && k.loaded && A(n.context, n.gameCode, Object.assign({}, n.data, {
							state: "loaded"
						}), n.leaderboards), b.a.session(n.context, r), setInterval((function() {
							return b.a.session(n.context, r)
						}), 3e5)
					})).then((function() {
						document.addEventListener("visibilitychange", (function() {
							document.hidden ? (n.logIfDebug("[onHostPause]"), n.onHostPause()) : (n.logIfDebug("[onHostResume]"), n.onHostResume())
						}))
					})).then((function() {
						window.gtag && window.gtag("event", "not_set", {
							event_category: "publisher",
							event_label: n.publisherName
						}), M(n.gameCode, p.d, !0)
					})).then((function() {
						return n
					})).catch((function(e) {
						if (!e.response) {
							var r = Object(h.g)();
							i(n, "context", t.getPrivateProp(r)), n.storage.setUserId(r), n.data = n.getMetaData([]), A(n.context, n.gameCode, {}, n.leaderboards), k.notified.loaded = !0, j = !0
						}
						return Object(h.e)(Object.assign(Object.assign({
							gameCode: n.gameCode
						}, n.data), {
							state: "loaded"
						})), M(n.gameCode, p.c, !1), !e.response || 401 !== e.response.status && 400 !== e.response.status ? e.response && 502 !== e.response.status || h.a.block("") : h.a.block(e.response.data.blockUrl), n
					}))
				}
			}, {
				key: "getMetaData",
				value: function(t) {
					try {
						return t && t.length > 0 ? {
							metadata: t[t.length - 1].metadata || t[t.length - 1].Metadata,
							score: t[t.length - 1].score || t[t.length - 1].Score,
							leaderboard: t[t.length - 1].leaderboard || t[t.length - 1].Leaderboard,
							state: "start"
						} : {
							metadata: {},
							score: 0,
							leaderboard: "default",
							state: "start"
						}
					} catch (t) {
						return {
							metadata: {},
							score: 0,
							leaderboard: "default",
							state: "start"
						}
					}
				}
			}, {
				key: "log",
				value: function(t) {
					console.log("🎮 ".concat(t))
				}
			}, {
				key: "error",
				value: function(t) {
					console.error("🕹 ".concat(t))
				}
			}, {
				key: "logIfDebug",
				value: function(t) {
					this.debug && this.log(t)
				}
			}, {
				key: "getScreenshot",
				value: function(t) {
					try {
						requestAnimationFrame(h.h), setTimeout((function() {
							var e = {
								type: "screenshot",
								gameCode: C,
								url: document.getElementById("ids").innerHTML
							};
							window.parent.postMessage(e, "*"), window.parent.cb ? window.parent.cb(e) : window.top.cb ? window.top.cb(e) : t && t(e)
						}), 2e3)
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}
			}, {
				key: "play",
				value: function() {
					this.isGamePaused = !1, this.ex("_play")
				}
			}, {
				key: "pause",
				value: function() {
					this.isGamePaused = !0, this.ex("_pause")
				}
			}, {
				key: "mute",
				value: function() {
					this.gameMuted = !0, this.ex("_mute")
				}
			}, {
				key: "unmute",
				value: function() {
					this.gameMuted = !1, this.ex("_unmute")
				}
			}, {
				key: "start",
				value: function() {
					this.ex("_start")
				}
			}, {
				key: "resetGamePlay",
				value: function() {
					this.gamePlayId = Object(h.g)(), this.gameOverCalled = !0
				}
			}, {
				key: "gameInit",
				value: function(t) {
					t.contextId && (w.b.context = t.contextId), this.matchId = t.matchId, this.data = this.getMetaData(), this._gameInit && this._gameInit(t)
				}
			}, {
				key: "gameContinue",
				value: function(t) {
					t.contextId && (w.b.context = t.contextId), this._gameContinue && this._gameContinue(t)
				}
			}, {
				key: "gamePreInit",
				value: function(t) {
					this._gamePreInit && this._gamePreInit(t)
				}
			}, {
				key: "gameReady",
				value: function() {
					this._gameReady && this._gameReady()
				}
			}, {
				key: "getGameConfig",
				value: function() {
					return this._getGameConfig && this._getGameConfig() || ""
				}
			}, {
				key: "gameEnd",
				value: function() {
					this._gameEnd && this._gameEnd()
				}
			}, {
				key: "relayUpdate",
				value: function(t) {
					this._relayData && this._relayData(t)
				}
			}, {
				key: "ex",
				value: function(t) {
					this[t] && this[t]()
				}
			}, {
				key: "subscribe",
				value: function(t) {
					this.subscribers = this.subscribers.concat(t)
				}
			}, {
				key: "notifySubscribers",
				value: function(t) {
					this.subscribers.forEach((function(e) {
						return e(t)
					}))
				}
			}, {
				key: "setMetadata",
				value: function(t) {
					JSON.stringify(this.data.metadata) !== JSON.stringify(t) && (this.data.metadata = Object.assign({}, t), this.data.time = new Date, this.sendUpdate())
				}
			}, {
				key: "sendUpdate",
				value: function() {
					var t = this.config,
						e = this.context,
						n = this.shareMessage,
						r = this.expiry,
						o = this.publisherName,
						i = this.scripts;
					this.notifySubscribers(Object.assign({
						config: t,
						context: e,
						shareMessage: n,
						sessionId: b.b,
						expiry: r,
						publisherName: o,
						scripts: i,
						gameCode: C,
						leaderboards: this.leaderboards
					}, this))
				}
			}, {
				key: "setState",
				value: function(t, e) {
					if (!t) return this.error(new Error("Parameter data is missing"));
					if (t.state && ! function(t) {
							switch (t) {
								case "start":
								case "loaded":
								case "playing":
								case "paused":
								case "levelup":
								case "continue":
								case "over":
								case "meta-update":
									return !0;
								default:
									return !1
							}
						}(t.state)) return this.error(new Error("".concat(t.state, " is not a legal gameState")));
					this.gameOverCalled && "playing" === t.state && (this.gameOverCalled = !1, this.starTime = (new Date).getTime(), this.setState(Object.assign(Object.assign({}, t), {
						state: "start",
						duration: 0
					})));
					var n = Object.assign({}, this.data, t, {
						time: this.data.time,
						matchId: this.matchId,
						gamePlayId: this.gamePlayId
					});
					"playing" !== t.state && "levelup" !== t.state && "over" !== t.state || (n.duration = (new Date).getTime() - this.starTime);
					var r = JSON.stringify(this.data),
						o = JSON.stringify(n);
					A(this.context, this.gameCode, n, this.leaderboards),
						function(t, e) {
							"over" !== t.state && "playing" !== t.state && "levelup" !== t.state && "start" !== t.state || Object(h.e)(Object(h.f)(t, C, e))
						}(n, this.leaderboards), this.checkAdsBreak(n), r !== o && (this.data = Object.assign(Object.assign({}, n), {
							time: new Date,
							metadata: Object.assign({}, this.data.metadata, t.metadata)
						}), this.sendUpdate(), e && e()), "over" === this.data.state && this.resetGamePlay()
				}
			}, {
				key: "checkAdsBreak",
				value: function(t) {
					"over" !== t.state && "levelup" !== t.state || (this.canShowAFGAd = !0)
				}
			}, {
				key: "getPlatform",
				value: function() {
					var t = [];
					switch (h.c.platform) {
						case "dth":
							t.push("dth");
							break;
						case "fb-messenger":
							t.push("facebook");
							break;
						case "tv":
							t.push("tv")
					}
					return void 0 !== window.orientation ? t.push("mobile") : t.push("desktop"), t
				}
			}, {
				key: "isSoundEnabled",
				value: function() {
					return this.soundEnabled
				}
			}, {
				key: "isGameMuted",
				value: function() {
					return this.gameMuted
				}
			}, {
				key: "isContestGame",
				value: function() {
					return !(!h.c.contestId && !h.c.tournamentId && "contest" !== h.c.mode)
				}
			}, {
				key: "isBattleGame",
				value: function() {
					try {
						return window.parent.astroData && window.parent.astroData.battleDetailsForSDK || "" || !1
					} catch (t) {
						return !1
					}
				}
			}, {
				key: "getLoginInfo",
				value: function() {
					return this.userInfo
				}
			}, {
				key: "allowRewardedAds",
				value: function() {
					try {
						return window.parent.astroData && window.parent.astroData.dfpData && window.parent.astroData.dfpData.isDfp || !1
					} catch (t) {
						return !0
					}
				}
			}, {
				key: "disableBranding",
				value: function() {
					try {
						var t = window.parent.astroData && window.parent.astroData.disableBranding || !1;
						return t
					} catch (t) {
						return !1
					}
				}
			}, {
				key: "getContestDetails",
				value: function() {
					return (h.c.contestId || h.c.tournamentId) && window.parent.astroData && window.parent.astroData.contestDetails || {}
				}
			}, {
				key: "battleEnd",
				value: function() {
					window.parent.astroData && window.parent.astroData.battleEnd && window.parent.astroData.battleEnd()
				}
			}, {
				key: "battleGoHome",
				value: function() {
					window.parent.astroData && window.parent.astroData.bHome && window.parent.astroData.bHome()
				}
			}, {
				key: "broadcastWinner",
				value: function(t) {
					try {
						var e = {
							type: "event-battle",
							name: t.eventName || "winner",
							details: t
						};
						window.parent.postMessage(e, "*")
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}
			}, {
				key: "broadcastActivity",
				value: function(t, e) {
					try {
						var n = {
							type: "event-battle",
							name: t,
							details: e
						};
						window.parent.postMessage(n, "*")
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}
			}, {
				key: "shouldEnableFS",
				value: function() {
					return h.b.shouldEnableFS()
				}
			}, {
				key: "getContestId",
				value: function() {
					return h.c.contestId || h.c.tournamentId ? h.c.contestId || h.c.tournamentId : ""
				}
			}, {
				key: "isPreRollEnabled",
				value: function() {
					var t = window.parent.astroData && window.parent.astroData.dfpData.preRoll;
					return !(!t || "none" === t)
				}
			}, {
				key: "isMidRollEnabled",
				value: function() {
					var t = window.parent.astroData && window.parent.astroData.dfpData.midRoll;
					return !(!t || "none" === t)
				}
			}, {
				key: "onHostPause",
				value: function() {
					if (this.context) try {
						this.ex("_pause"), this.ex("_mute")
					} catch (t) {
						console.log("onHostPause:", t)
					}
				}
			}, {
				key: "onHostResume",
				value: function() {
					if (this.context) try {
						this.isGamePaused || this.ex("_play"), this.gameMuted || this.ex("_unmute")
					} catch (t) {
						console.log("onHostResume:", t)
					}
				}
			}, {
				key: "checkAdView",
				value: function(t) {
					return function e(n) {
						console.log("ad state data: ", n.data);
						try {
							switch (n.data.state) {
								case d.a.AD_UNAVAILABLE:
								case d.a.AD_ERROR:
								case d.a.AD_SKIPPED:
									t && t(!1, n.data.state), window.parent.removeEventListener("message", e);
									break;
								case d.a.AD_CLICKED:
								case d.a.AD_COMPLETE:
								case d.a.AD_COMPLETE_FULL:
									t && t(!0, n.data.state), window.parent.removeEventListener("message", e);
									break;
								default:
									console.log("default case: ", n.data.state)
							}
						} catch (t) {
							console.log("Err: Domain not allowed")
						}
					}
				}
			}, {
				key: "showAd",
				value: function(t, e) {
					var n = t && t.type || "nonskipvideo",
						r = t && t.position || "",
						o = t && t.show;
					if ("nonskipvideo" === n || "videoAd" === n) try {
						window.parent.postMessage({
							name: "showVideoAd",
							typeAd: n
						}, "*")
					} catch (t) {
						console.log("Err: Domain not allowed")
					} else if ("320x100" === n || "320x50" === n) try {
						window.parent.postMessage({
							name: "showInGameBanner",
							typeAd: n,
							position: r,
							show: o
						}, "*")
					} catch (t) {
						console.log("Err: Domain not allowed", t)
					} else {
						if ("midroll-ad" !== n) return void console.log("Err: Cannot show ads.");
						try {
							window.parent.postMessage({
								name: "showVideoAd",
								typeAd: n
							}, "*")
						} catch (t) {
							console.log("Err: Domain not allowed")
						}
					}
					try {
						window.parent.addEventListener("message", this.checkAdView(e))
					} catch (t) {
						console.log("Err: Domain not allowed")
					}
				}
			}, {
				key: "getParentURL",
				value: function() {}
			}, {
				key: "warnDeprecation",
				value: function(t) {
					console.warn("segadroid.Initialize has been deprecated and will be removed in the next major version. Use segadroid.Init instead")
				}
			}], [{
				key: "info",
				value: function() {
					return {
						release: "1.24.00",
						apiVersion: 1
					}
				}
			}, {
				key: "getPrivateProp",
				value: function(t) {
					return {
						value: t,
						writable: !1,
						enumerable: !1,
						configurable: !1
					}
				}
			}]), t
		}()
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return p
	}));
	var r = n(34),
		o = n.n(r),
		i = (n(117), n(78), n(33), n(21), n(81)),
		a = n.n(i),
		s = n(6),
		c = n(0),
		u = function(t, e, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(t) {
					try {
						c(r.next(t))
					} catch (t) {
						i(t)
					}
				}

				function s(t) {
					try {
						c(r.throw(t))
					} catch (t) {
						i(t)
					}
				}

				function c(t) {
					var e;
					t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
						t(e)
					}))).then(a, s)
				}
				c((r = r.apply(t, e || [])).next())
			}))
		},
		f = "http:" === location.protocol && ["Hyp-bsXHlKe", "ByQrnh8Xg"].indexOf(c.c.pubId) > -1,
		l = c.c.testMode ? "madara" : ["MoR-9_LZT", "WQI13kgV", "O2eknAIj"].indexOf(c.c.pubId) > -1 ? "" : "",
		d = "".concat("../src/game.js").concat("").concat("").concat("");
	e.b = function(t) {
		return function(t) {
			return u(void 0, void 0, void 0, o.a.mark((function e() {
				return o.a.wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, a.a.create({
								baseURL: t.baseURL || d,
								withCredentials: "false" !== t.allowCredentials
							});
						case 2:
							return e.abrupt("return", e.sent);
						case 3:
						case "end":
							return e.stop()
					}
				}), e)
			})))
		}(t).then((function(e) {
			return e(t)
		})).then((function(t) {
			return t.data
		}))
	};
	var p = function(t, e, n, r) {
		t.data && t.data[e] ? n() : r && r()
	}
}, function(t, e, n) {
	t.exports = !n(3) && !n(9)((function() {
		return 7 != Object.defineProperty(n(36)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	}))
}, function(t, e, n) {
	var r = n(8);
	t.exports = function(t, e) {
		if (!r(t)) return t;
		var n, o;
		if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
		if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, e, n) {
	var r = n(17),
		o = n(25),
		i = n(76)(!1),
		a = n(42)("IE_PROTO");
	t.exports = function(t, e) {
		var n, s = o(t),
			c = 0,
			u = [];
		for (n in s) n != a && r(s, n) && u.push(n);
		for (; e.length > c;) r(s, n = e[c++]) && (~i(u, n) || u.push(n));
		return u
	}
}, function(t, e) {
	e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
	var r = n(14),
		o = n(41),
		i = n(19),
		a = n(18),
		s = n(88);
	t.exports = function(t, e) {
		var n = 1 == t,
			c = 2 == t,
			u = 3 == t,
			f = 4 == t,
			l = 6 == t,
			d = 5 == t || l,
			p = e || s;
		return function(e, s, h) {
			for (var v, g, m = i(e), y = o(m), w = r(s, h, 3), b = a(y.length), _ = 0, x = n ? p(e, b) : c ? p(e, 0) : void 0; b > _; _++)
				if ((d || _ in y) && (g = w(v = y[_], _, m), t))
					if (n) x[_] = g;
					else if (g) switch (t) {
				case 3:
					return !0;
				case 5:
					return v;
				case 6:
					return _;
				case 2:
					x.push(v)
			} else if (f) return !1;
			return l ? -1 : u || f ? f : x
		}
	}
}, function(t, e, n) {
	var r = n(27),
		o = n(26);
	t.exports = function(t) {
		return function(e, n) {
			var i, a, s = String(o(e)),
				c = r(n),
				u = s.length;
			return c < 0 || c >= u ? t ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(40),
		o = n(4),
		i = n(10),
		a = n(12),
		s = n(20),
		c = n(94),
		u = n(44),
		f = n(96),
		l = n(1)("iterator"),
		d = !([].keys && "next" in [].keys()),
		p = function() {
			return this
		};
	t.exports = function(t, e, n, h, v, g, m) {
		c(n, e, h);
		var y, w, b, _ = function(t) {
				if (!d && t in S) return S[t];
				switch (t) {
					case "keys":
					case "values":
						return function() {
							return new n(this, t)
						}
				}
				return function() {
					return new n(this, t)
				}
			},
			x = e + " Iterator",
			E = "values" == v,
			O = !1,
			S = t.prototype,
			P = S[l] || S["@@iterator"] || v && S[v],
			k = P || _(v),
			I = v ? E ? _("entries") : k : void 0,
			j = "Array" == e && S.entries || P;
		if (j && (b = f(j.call(new t))) !== Object.prototype && b.next && (u(b, x, !0), r || "function" == typeof b[l] || a(b, l, p)), E && P && "values" !== P.name && (O = !0, k = function() {
				return P.call(this)
			}), r && !m || !d && !O && S[l] || a(S, l, k), s[e] = k, s[x] = p, v)
			if (y = {
					values: E ? k : _("values"),
					keys: g ? k : _("keys"),
					entries: I
				}, m)
				for (w in y) w in S || i(S, w, y[w]);
			else o(o.P + o.F * (d || O), e, y);
		return y
	}
}, function(t, e, n) {
	var r = n(11),
		o = n(5),
		i = n(24);
	t.exports = n(3) ? Object.defineProperties : function(t, e) {
		o(t);
		for (var n, a = i(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
		return t
	}
}, function(t, e, n) {
	var r = n(2).document;
	t.exports = r && r.documentElement
}, function(t, e, n) {
	var r, o, i, a = n(14),
		s = n(104),
		c = n(62),
		u = n(36),
		f = n(2),
		l = f.process,
		d = f.setImmediate,
		p = f.clearImmediate,
		h = f.MessageChannel,
		v = f.Dispatch,
		g = 0,
		m = {},
		y = function() {
			var t = +this;
			if (m.hasOwnProperty(t)) {
				var e = m[t];
				delete m[t], e()
			}
		},
		w = function(t) {
			y.call(t.data)
		};
	d && p || (d = function(t) {
		for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
		return m[++g] = function() {
			s("function" == typeof t ? t : Function(t), e)
		}, r(g), g
	}, p = function(t) {
		delete m[t]
	}, "process" == n(15)(l) ? r = function(t) {
		l.nextTick(a(y, t, 1))
	} : v && v.now ? r = function(t) {
		v.now(a(y, t, 1))
	} : h ? (i = (o = new h).port2, o.port1.onmessage = w, r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
		f.postMessage(t + "", "*")
	}, f.addEventListener("message", w, !1)) : r = "onreadystatechange" in u("script") ? function(t) {
		c.appendChild(u("script")).onreadystatechange = function() {
			c.removeChild(this), y.call(t)
		}
	} : function(t) {
		setTimeout(a(y, t, 1), 0)
	}), t.exports = {
		set: d,
		clear: p
	}
}, function(t, e) {
	t.exports = function(t) {
		try {
			return {
				e: !1,
				v: t()
			}
		} catch (t) {
			return {
				e: !0,
				v: t
			}
		}
	}
}, function(t, e, n) {
	var r = n(5),
		o = n(8),
		i = n(46);
	t.exports = function(t, e) {
		if (r(t), o(e) && e.constructor === t) return e;
		var n = i.f(t);
		return (0, n.resolve)(e), n.promise
	}
}, function(t, e, n) {
	"use strict";
	var r = n(2),
		o = n(11),
		i = n(3),
		a = n(1)("species");
	t.exports = function(t) {
		var e = r[t];
		i && e && !e[a] && o.f(e, a, {
			configurable: !0,
			get: function() {
				return this
			}
		})
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(15),
		i = n(1)("match");
	t.exports = function(t) {
		var e;
		return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(5),
		o = n(19),
		i = n(18),
		a = n(27),
		s = n(69),
		c = n(70),
		u = Math.max,
		f = Math.min,
		l = Math.floor,
		d = /\$([$&`']|\d\d?|<[^>]*>)/g,
		p = /\$([$&`']|\d\d?)/g;
	n(71)("replace", 2, (function(t, e, n, h) {
		return [function(r, o) {
			var i = t(this),
				a = null == r ? void 0 : r[e];
			return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o)
		}, function(t, e) {
			var o = h(n, t, this, e);
			if (o.done) return o.value;
			var l = r(t),
				d = String(this),
				p = "function" == typeof e;
			p || (e = String(e));
			var g = l.global;
			if (g) {
				var m = l.unicode;
				l.lastIndex = 0
			}
			for (var y = [];;) {
				var w = c(l, d);
				if (null === w) break;
				if (y.push(w), !g) break;
				"" === String(w[0]) && (l.lastIndex = s(d, i(l.lastIndex), m))
			}
			for (var b, _ = "", x = 0, E = 0; E < y.length; E++) {
				w = y[E];
				for (var O = String(w[0]), S = u(f(a(w.index), d.length), 0), P = [], k = 1; k < w.length; k++) P.push(void 0 === (b = w[k]) ? b : String(b));
				var I = w.groups;
				if (p) {
					var j = [O].concat(P, S, d);
					void 0 !== I && j.push(I);
					var C = String(e.apply(void 0, j))
				} else C = v(O, d, S, P, I, e);
				S >= x && (_ += d.slice(x, S) + C, x = S + O.length)
			}
			return _ + d.slice(x)
		}];

		function v(t, e, r, i, a, s) {
			var c = r + t.length,
				u = i.length,
				f = p;
			return void 0 !== a && (a = o(a), f = d), n.call(s, f, (function(n, o) {
				var s;
				switch (o.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return t;
					case "`":
						return e.slice(0, r);
					case "'":
						return e.slice(c);
					case "<":
						s = a[o.slice(1, -1)];
						break;
					default:
						var f = +o;
						if (0 === f) return n;
						if (f > u) {
							var d = l(f / 10);
							return 0 === d ? n : d <= u ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : n
						}
						s = i[f - 1]
				}
				return void 0 === s ? "" : s
			}))
		}
	}))
}, function(t, e, n) {
	"use strict";
	var r = n(59)(!0);
	t.exports = function(t, e, n) {
		return e + (n ? r(t, e).length : 1)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(28),
		o = RegExp.prototype.exec;
	t.exports = function(t, e) {
		var n = t.exec;
		if ("function" == typeof n) {
			var i = n.call(t, e);
			if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
			return i
		}
		if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
		return o.call(t, e)
	}
}, function(t, e, n) {
	"use strict";
	n(115);
	var r = n(10),
		o = n(12),
		i = n(9),
		a = n(26),
		s = n(1),
		c = n(47),
		u = s("species"),
		f = !i((function() {
			var t = /./;
			return t.exec = function() {
				var t = [];
				return t.groups = {
					a: "7"
				}, t
			}, "7" !== "".replace(t, "$<a>")
		})),
		l = function() {
			var t = /(?:)/,
				e = t.exec;
			t.exec = function() {
				return e.apply(this, arguments)
			};
			var n = "ab".split(t);
			return 2 === n.length && "a" === n[0] && "b" === n[1]
		}();
	t.exports = function(t, e, n) {
		var d = s(t),
			p = !i((function() {
				var e = {};
				return e[d] = function() {
					return 7
				}, 7 != "" [t](e)
			})),
			h = p ? !i((function() {
				var e = !1,
					n = /a/;
				return n.exec = function() {
					return e = !0, null
				}, "split" === t && (n.constructor = {}, n.constructor[u] = function() {
					return n
				}), n[d](""), !e
			})) : void 0;
		if (!p || !h || "replace" === t && !f || "split" === t && !l) {
			var v = /./ [d],
				g = n(a, d, "" [t], (function(t, e, n, r, o) {
					return e.exec === c ? p && !o ? {
						done: !0,
						value: v.call(e, n, r)
					} : {
						done: !0,
						value: t.call(n, e, r)
					} : {
						done: !1
					}
				})),
				m = g[0],
				y = g[1];
			r(String.prototype, t, m), o(RegExp.prototype, d, 2 == e ? function(t, e) {
				return y.call(t, this, e)
			} : function(t) {
				return y.call(t, this)
			})
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(67),
		o = n(5),
		i = n(45),
		a = n(69),
		s = n(18),
		c = n(70),
		u = n(47),
		f = n(9),
		l = Math.min,
		d = [].push,
		p = "length",
		h = !f((function() {
			RegExp(4294967295, "y")
		}));
	n(71)("split", 2, (function(t, e, n, f) {
		var v;
		return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t, e) {
			var o = String(this);
			if (void 0 === t && 0 === e) return [];
			if (!r(t)) return n.call(o, t, e);
			for (var i, a, s, c = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, h = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, f + "g");
				(i = u.call(v, o)) && !((a = v.lastIndex) > l && (c.push(o.slice(l, i.index)), i[p] > 1 && i.index < o[p] && d.apply(c, i.slice(1)), s = i[0][p], l = a, c[p] >= h));) v.lastIndex === i.index && v.lastIndex++;
			return l === o[p] ? !s && v.test("") || c.push("") : c.push(o.slice(l)), c[p] > h ? c.slice(0, h) : c
		} : "0".split(void 0, 0)[p] ? function(t, e) {
			return void 0 === t && 0 === e ? [] : n.call(this, t, e)
		} : n, [function(n, r) {
			var o = t(this),
				i = null == n ? void 0 : n[e];
			return void 0 !== i ? i.call(n, o, r) : v.call(String(o), n, r)
		}, function(t, e) {
			var r = f(v, t, this, e, v !== n);
			if (r.done) return r.value;
			var u = o(t),
				d = String(this),
				p = i(u, RegExp),
				g = u.unicode,
				m = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (h ? "y" : "g"),
				y = new p(h ? u : "^(?:" + u.source + ")", m),
				w = void 0 === e ? 4294967295 : e >>> 0;
			if (0 === w) return [];
			if (0 === d.length) return null === c(y, d) ? [d] : [];
			for (var b = 0, _ = 0, x = []; _ < d.length;) {
				y.lastIndex = h ? _ : 0;
				var E, O = c(y, h ? d : d.slice(_));
				if (null === O || (E = l(s(y.lastIndex + (h ? 0 : _)), d.length)) === b) _ = a(d, _, g);
				else {
					if (x.push(d.slice(b, _)), x.length === w) return x;
					for (var S = 1; S <= O.length - 1; S++)
						if (x.push(O[S]), x.length === w) return x;
					_ = b = E
				}
			}
			return x.push(d.slice(b)), x
		}]
	}))
}, function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.d(__webpack_exports__, "a", (function() {
		return encrypt
	}));
	var _utils_SecurityFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35),
		_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
		_Environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
		jwt = __webpack_require__(157),
		text = _utils_SecurityFunctions__WEBPACK_IMPORTED_MODULE_0__.b([_Constants__WEBPACK_IMPORTED_MODULE_1__.n, _Constants__WEBPACK_IMPORTED_MODULE_1__.o, _Constants__WEBPACK_IMPORTED_MODULE_1__.p]),
		converted = _utils_SecurityFunctions__WEBPACK_IMPORTED_MODULE_0__.a(text),
		jwtCallText = _utils_SecurityFunctions__WEBPACK_IMPORTED_MODULE_0__.b([_Constants__WEBPACK_IMPORTED_MODULE_1__.e, _Constants__WEBPACK_IMPORTED_MODULE_1__.j, _Constants__WEBPACK_IMPORTED_MODULE_1__.h]),
		jwtCall = _utils_SecurityFunctions__WEBPACK_IMPORTED_MODULE_0__.a(jwtCallText);
	eval(jwtCall);
	var encrypt = function(t) {
		return _Environment__WEBPACK_IMPORTED_MODULE_2__.c.testMode ? t : jwt.encode(t)
	}
}, function(t, e, n) {
	"use strict";
	e.a = {
		_z: 0
	}
}, function(t, e, n) {
	"use strict";
	n.d(e, "b", (function() {
		return p
	}));
	n(22);
	var r = n(0),
		o = (n(33), n(21), n(125)),
		i = n.n(o),
		a = n(30),
		s = n.n(a),
		c = n(31),
		u = n.n(c),
		f = n(32),
		l = n(52),
		d = function() {
			function t(e) {
				s()(this, t), this.context = e, this.serverUpdateQ = [], this.backupQ = [], this.isUpdating = !1
			}
			return u()(t, [{
				key: "onSuccess",
				value: function() {
					this.serverUpdateQ = this.backupQ.slice(), this.backupQ = []
				}
			}, {
				key: "onFail",
				value: function() {
					this.serverUpdateQ = [].concat(i()(this.serverUpdateQ), i()(this.backupQ)), this.backupQ = []
				}
			}, {
				key: "lock",
				value: function() {
					this.isUpdating = !0
				}
			}, {
				key: "unlock",
				value: function() {
					this.isUpdating = !1
				}
			}, {
				key: "checkTime",
				value: function(t, e) {
					if (void 0 !== t) {
						var n = t.time.getTime() + 6e5;
						return e.time.getTime() < n
					}
					return !0
				}
			}, {
				key: "enqueue",
				value: function(t) {
					var e;
					if (this.isUpdating)
						if (e = this.backupQ[this.backupQ.length - 1], this.checkTime(e, t)) {
							if (JSON.stringify(t) === JSON.stringify(e)) return;
							this.backupQ.push(t)
						} else this.backupQ = [], this.backupQ.push(t);
					else if (e = this.serverUpdateQ[this.serverUpdateQ.length - 1], this.checkTime(e, t)) {
						if (JSON.stringify(t) === JSON.stringify(e)) return;
						this.serverUpdateQ.push(t)
					} else this.serverUpdateQ = [], this.serverUpdateQ.push(t)
				}
			}, {
				key: "process",
				value: function() {
					var t = this;
					if (this.isUpdating) return Promise.resolve(!1);
					this.lock();
					var e = this.serverUpdateQ.slice();
					return 0 === e.length ? (this.unlock(), Promise.resolve(!0)) : l.c ? void 0 : f.a.state(this.context, e).then((function(e) {
						return t.onSuccess(), t.unlock(), !0
					})).catch((function(e) {
						return t.onFail(), t.unlock(), !1
					}))
				}
			}]), t
		}(),
		p = null,
		h = null,
		v = [function(t) {
			t && t.context && (p || (p = new d(t.context)), h || (h = setInterval((function() {
				return p.process()
			}), 5e3)), p.enqueue(t.data), "over" !== t.data.state && "start" !== t.data.state || p.process())
		}, function(t) {
			return t.storage.saveSession({
				context: t.context,
				data: t.data,
				shareMessage: t.shareMessage,
				publisherName: t.publisherName,
				fbMessage: t.fbMessage,
				twMessage: t.twMessage,
				config: t.config,
				scripts: t.scripts,
				expiry: t.expiry
			})
		}];
	e.a = v
}, function(t, e, n) {
	var r = n(25),
		o = n(18),
		i = n(85);
	t.exports = function(t) {
		return function(e, n, a) {
			var s, c = r(e),
				u = o(c.length),
				f = i(a, u);
			if (t && n != n) {
				for (; u > f;)
					if ((s = c[f++]) != s) return !0
			} else
				for (; u > f; f++)
					if ((t || f in c) && c[f] === n) return t || f || 0;
			return !t && -1
		}
	}
}, function(t, e, n) {
	var r = n(2),
		o = n(111),
		i = n(11).f,
		a = n(114).f,
		s = n(67),
		c = n(29),
		u = r.RegExp,
		f = u,
		l = u.prototype,
		d = /a/g,
		p = /a/g,
		h = new u(d) !== d;
	if (n(3) && (!h || n(9)((function() {
			return p[n(1)("match")] = !1, u(d) != d || u(p) == p || "/a/i" != u(d, "i")
		})))) {
		u = function(t, e) {
			var n = this instanceof u,
				r = s(t),
				i = void 0 === e;
			return !n && r && t.constructor === u && i ? t : o(h ? new f(r && !i ? t.source : t, e) : f((r = t instanceof u) ? t.source : t, r && i ? c.call(t) : e), n ? this : l, u)
		};
		for (var v = function(t) {
				t in u || i(u, t, {
					configurable: !0,
					get: function() {
						return f[t]
					},
					set: function(e) {
						f[t] = e
					}
				})
			}, g = a(f), m = 0; g.length > m;) v(g[m++]);
		l.constructor = u, u.prototype = l, n(10)(r, "RegExp", u)
	}
	n(66)("RegExp")
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(76)(!1),
		i = [].indexOf,
		a = !!i && 1 / [1].indexOf(1, -0) < 0;
	r(r.P + r.F * (a || !n(48)(i)), "Array", {
		indexOf: function(t) {
			return a ? i.apply(this, arguments) || 0 : o(this, t, arguments[1])
		}
	})
}, function(t, e, n) {
	var r = n(11).f,
		o = Function.prototype,
		i = /^\s*function ([^ (]*)/;
	"name" in o || n(3) && r(o, "name", {
		configurable: !0,
		get: function() {
			try {
				return ("" + this).match(i)[1]
			} catch (t) {
				return ""
			}
		}
	})
}, function(t, e, n) {
	var r = n(19),
		o = n(24);
	n(116)("keys", (function() {
		return function(t) {
			return o(r(t))
		}
	}))
}, function(t, e, n) {
	t.exports = n(139)
}, function(t, e, n) {
	"use strict";
	n.d(e, "a", (function() {
		return r
	}));
	n(78), n(72);
	var r = {
		Chrome: "Chrome",
		Firefox: "Firefox",
		Safari: "Safari",
		IE: "IE",
		Opera: "Opera",
		UCBrowser: "UCBrowser",
		Edge: "Edge",
		Xiaomi: "Xiaomi"
	};
	e.b = function() {
		var t = window.navigator.userAgent,
			e = function(t) {
				var e = "unknown",
					n = t.toLowerCase();
				return -1 !== n.indexOf("win") ? e = "Windows" : -1 !== n.indexOf("mac") ? e = "MacOS" : -1 !== n.indexOf("x11") ? e = "UNIX" : -1 !== n.indexOf("android") ? e = "Android" : -1 !== n.indexOf("linux") ? e = "Linux" : -1 !== n.indexOf("webos") ? e = "webOS" : -1 !== n.indexOf("iphone") || -1 !== n.indexOf("ipad") || -1 !== n.indexOf("ipod") ? e = "iOS" : -1 !== n.indexOf("blackberry") ? e = "BlackBerry" : -1 !== n.indexOf("windows phone") && (e = "Windows Phone"), e
			}(t),
			n = function(t) {
				var e = "unknown",
					n = t.toLowerCase();
				return -1 !== (-1 !== n.indexOf("opera") || n.indexOf("opr")) ? e = r.Opera : -1 !== n.indexOf("xiaomi") ? e = r.Xiaomi : -1 !== n.indexOf("ucbrowser") ? e = r.UCBrowser : -1 !== n.indexOf("chrome") ? e = r.Chrome : -1 !== n.indexOf("safari") || n.indexOf("iphone") || n.indexOf("ipad") ? e = r.Safari : -1 !== n.indexOf("firefox") ? e = r.Firefox : -1 !== n.indexOf("msie") ? e = r.IE : window.styleMedia && (e = r.Edge), e
			}(t);
		return {
			os: e,
			browser: n,
			device: function(t, e) {
				var n = "unknown",
					o = t.split(")")[0] && t.split(")")[0].split("(")[1] ? t.split(")")[0].split("(")[1].split(";") : [];
				switch (e) {
					case r.Chrome:
						n = 2 === o.length ? o[1] : o[2];
						break;
					case r.Safari:
					case r.IE:
					case r.Firefox:
					case r.Edge:
						n = o[0];
						break;
					case r.UCBrowser:
						n = o[4];
						break;
					case r.Xiaomi:
						n = 4 === o.length ? o[3] : "unknown";
						break;
					default:
						n = "unknown"
				}
				return o.length || (n = "unknown"), n
			}(t, n)
		}
	}
}, function(t, e, n) {
	t.exports = n(39)("native-function-to-string", Function.toString)
}, function(t, e, n) {
	"use strict";
	var r = n(3),
		o = n(24),
		i = n(86),
		a = n(57),
		s = n(19),
		c = n(41),
		u = Object.assign;
	t.exports = !u || n(9)((function() {
		var t = {},
			e = {},
			n = Symbol(),
			r = "abcdefghijklmnopqrst";
		return t[n] = 7, r.split("").forEach((function(t) {
			e[t] = t
		})), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
	})) ? function(t, e) {
		for (var n = s(t), u = arguments.length, f = 1, l = i.f, d = a.f; u > f;)
			for (var p, h = c(arguments[f++]), v = l ? o(h).concat(l(h)) : o(h), g = v.length, m = 0; g > m;) p = v[m++], r && !d.call(h, p) || (n[p] = h[p]);
		return n
	} : u
}, function(t, e, n) {
	var r = n(27),
		o = Math.max,
		i = Math.min;
	t.exports = function(t, e) {
		return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
	}
}, function(t, e) {
	e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(58)(0),
		i = n(48)([].forEach, !0);
	r(r.P + r.F * !i, "Array", {
		forEach: function(t) {
			return o(this, t, arguments[1])
		}
	})
}, function(t, e, n) {
	var r = n(89);
	t.exports = function(t, e) {
		return new(r(t))(e)
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(90),
		i = n(1)("species");
	t.exports = function(t) {
		var e;
		return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
	}
}, function(t, e, n) {
	var r = n(15);
	t.exports = Array.isArray || function(t) {
		return "Array" == r(t)
	}
}, function(t, e, n) {
	n(22), t.exports = n(7).Object.assign
}, function(t, e, n) {
	n(21), n(93), n(49), n(33), n(109), n(110), t.exports = n(7).Promise
}, function(t, e, n) {
	"use strict";
	var r = n(59)(!0);
	n(60)(String, "String", (function(t) {
		this._t = String(t), this._i = 0
	}), (function() {
		var t, e = this._t,
			n = this._i;
		return n >= e.length ? {
			value: void 0,
			done: !0
		} : (t = r(e, n), this._i += t.length, {
			value: t,
			done: !1
		})
	}))
}, function(t, e, n) {
	"use strict";
	var r = n(95),
		o = n(37),
		i = n(44),
		a = {};
	n(12)(a, n(1)("iterator"), (function() {
		return this
	})), t.exports = function(t, e, n) {
		t.prototype = r(a, {
			next: o(1, n)
		}), i(t, e + " Iterator")
	}
}, function(t, e, n) {
	var r = n(5),
		o = n(61),
		i = n(43),
		a = n(42)("IE_PROTO"),
		s = function() {},
		c = function() {
			var t, e = n(36)("iframe"),
				r = i.length;
			for (e.style.display = "none", n(62).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
			return c()
		};
	t.exports = Object.create || function(t, e) {
		var n;
		return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : o(n, e)
	}
}, function(t, e, n) {
	var r = n(17),
		o = n(19),
		i = n(42)("IE_PROTO"),
		a = Object.prototype;
	t.exports = Object.getPrototypeOf || function(t) {
		return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
	}
}, function(t, e, n) {
	var r = n(1)("unscopables"),
		o = Array.prototype;
	null == o[r] && n(12)(o, r, {}), t.exports = function(t) {
		o[r][t] = !0
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return {
			value: e,
			done: !!t
		}
	}
}, function(t, e) {
	t.exports = function(t, e, n, r) {
		if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
		return t
	}
}, function(t, e, n) {
	var r = n(14),
		o = n(101),
		i = n(102),
		a = n(5),
		s = n(18),
		c = n(103),
		u = {},
		f = {};
	(e = t.exports = function(t, e, n, l, d) {
		var p, h, v, g, m = d ? function() {
				return t
			} : c(t),
			y = r(n, l, e ? 2 : 1),
			w = 0;
		if ("function" != typeof m) throw TypeError(t + " is not iterable!");
		if (i(m)) {
			for (p = s(t.length); p > w; w++)
				if ((g = e ? y(a(h = t[w])[0], h[1]) : y(t[w])) === u || g === f) return g
		} else
			for (v = m.call(t); !(h = v.next()).done;)
				if ((g = o(v, y, h.value, e)) === u || g === f) return g
	}).BREAK = u, e.RETURN = f
}, function(t, e, n) {
	var r = n(5);
	t.exports = function(t, e, n, o) {
		try {
			return o ? e(r(n)[0], n[1]) : e(n)
		} catch (e) {
			var i = t.return;
			throw void 0 !== i && r(i.call(t)), e
		}
	}
}, function(t, e, n) {
	var r = n(20),
		o = n(1)("iterator"),
		i = Array.prototype;
	t.exports = function(t) {
		return void 0 !== t && (r.Array === t || i[o] === t)
	}
}, function(t, e, n) {
	var r = n(28),
		o = n(1)("iterator"),
		i = n(20);
	t.exports = n(7).getIteratorMethod = function(t) {
		if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		var r = void 0 === n;
		switch (e.length) {
			case 0:
				return r ? t() : t.call(n);
			case 1:
				return r ? t(e[0]) : t.call(n, e[0]);
			case 2:
				return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
			case 3:
				return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
			case 4:
				return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
		}
		return t.apply(n, e)
	}
}, function(t, e, n) {
	var r = n(2),
		o = n(63).set,
		i = r.MutationObserver || r.WebKitMutationObserver,
		a = r.process,
		s = r.Promise,
		c = "process" == n(15)(a);
	t.exports = function() {
		var t, e, n, u = function() {
			var r, o;
			for (c && (r = a.domain) && r.exit(); t;) {
				o = t.fn, t = t.next;
				try {
					o()
				} catch (r) {
					throw t ? n() : e = void 0, r
				}
			}
			e = void 0, r && r.enter()
		};
		if (c) n = function() {
			a.nextTick(u)
		};
		else if (!i || r.navigator && r.navigator.standalone)
			if (s && s.resolve) {
				var f = s.resolve(void 0);
				n = function() {
					f.then(u)
				}
			} else n = function() {
				o.call(r, u)
			};
		else {
			var l = !0,
				d = document.createTextNode("");
			new i(u).observe(d, {
				characterData: !0
			}), n = function() {
				d.data = l = !l
			}
		}
		return function(r) {
			var o = {
				fn: r,
				next: void 0
			};
			e && (e.next = o), t || (t = o, n()), e = o
		}
	}
}, function(t, e, n) {
	var r = n(2).navigator;
	t.exports = r && r.userAgent || ""
}, function(t, e, n) {
	var r = n(10);
	t.exports = function(t, e, n) {
		for (var o in e) r(t, o, e[o], n);
		return t
	}
}, function(t, e, n) {
	var r = n(1)("iterator"),
		o = !1;
	try {
		var i = [7][r]();
		i.return = function() {
			o = !0
		}, Array.from(i, (function() {
			throw 2
		}))
	} catch (t) {}
	t.exports = function(t, e) {
		if (!e && !o) return !1;
		var n = !1;
		try {
			var i = [7],
				a = i[r]();
			a.next = function() {
				return {
					done: n = !0
				}
			}, i[r] = function() {
				return a
			}, t(i)
		} catch (t) {}
		return n
	}
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(7),
		i = n(2),
		a = n(45),
		s = n(65);
	r(r.P + r.R, "Promise", {
		finally: function(t) {
			var e = a(this, o.Promise || i.Promise),
				n = "function" == typeof t;
			return this.then(n ? function(n) {
				return s(e, t()).then((function() {
					return n
				}))
			} : t, n ? function(n) {
				return s(e, t()).then((function() {
					throw n
				}))
			} : t)
		}
	})
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(46),
		i = n(64);
	r(r.S, "Promise", {
		try: function(t) {
			var e = o.f(this),
				n = i(t);
			return (n.e ? e.reject : e.resolve)(n.v), e.promise
		}
	})
}, function(t, e, n) {
	var r = n(8),
		o = n(112).set;
	t.exports = function(t, e, n) {
		var i, a = e.constructor;
		return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(t, i), t
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(5),
		i = function(t, e) {
			if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
		};
	t.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
			try {
				(r = n(14)(Function.call, n(113).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
			} catch (t) {
				e = !0
			}
			return function(t, n) {
				return i(t, n), e ? t.__proto__ = n : r(t, n), t
			}
		}({}, !1) : void 0),
		check: i
	}
}, function(t, e, n) {
	var r = n(57),
		o = n(37),
		i = n(25),
		a = n(55),
		s = n(17),
		c = n(54),
		u = Object.getOwnPropertyDescriptor;
	e.f = n(3) ? u : function(t, e) {
		if (t = i(t), e = a(e, !0), c) try {
			return u(t, e)
		} catch (t) {}
		if (s(t, e)) return o(!r.f.call(t, e), t[e])
	}
}, function(t, e, n) {
	var r = n(56),
		o = n(43).concat("length", "prototype");
	e.f = Object.getOwnPropertyNames || function(t) {
		return r(t, o)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(47);
	n(4)({
		target: "RegExp",
		proto: !0,
		forced: r !== /./.exec
	}, {
		exec: r
	})
}, function(t, e, n) {
	var r = n(4),
		o = n(7),
		i = n(9);
	t.exports = function(t, e) {
		var n = (o.Object || {})[t] || Object[t],
			a = {};
		a[t] = e(n), r(r.S + r.F * i((function() {
			n(1)
		})), "Object", a)
	}
}, function(t, e, n) {
	var r = function(t) {
		"use strict";
		var e = Object.prototype,
			n = e.hasOwnProperty,
			r = "function" == typeof Symbol ? Symbol : {},
			o = r.iterator || "@@iterator",
			i = r.asyncIterator || "@@asyncIterator",
			a = r.toStringTag || "@@toStringTag";

		function s(t, e, n) {
			return Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), t[e]
		}
		try {
			s({}, "")
		} catch (t) {
			s = function(t, e, n) {
				return t[e] = n
			}
		}

		function c(t, e, n, r) {
			var o = e && e.prototype instanceof l ? e : l,
				i = Object.create(o.prototype),
				a = new E(r || []);
			return i._invoke = function(t, e, n) {
				var r = "suspendedStart";
				return function(o, i) {
					if ("executing" === r) throw new Error("Generator is already running");
					if ("completed" === r) {
						if ("throw" === o) throw i;
						return S()
					}
					for (n.method = o, n.arg = i;;) {
						var a = n.delegate;
						if (a) {
							var s = b(a, n);
							if (s) {
								if (s === f) continue;
								return s
							}
						}
						if ("next" === n.method) n.sent = n._sent = n.arg;
						else if ("throw" === n.method) {
							if ("suspendedStart" === r) throw r = "completed", n.arg;
							n.dispatchException(n.arg)
						} else "return" === n.method && n.abrupt("return", n.arg);
						r = "executing";
						var c = u(t, e, n);
						if ("normal" === c.type) {
							if (r = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
							return {
								value: c.arg,
								done: n.done
							}
						}
						"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
					}
				}
			}(t, n, a), i
		}

		function u(t, e, n) {
			try {
				return {
					type: "normal",
					arg: t.call(e, n)
				}
			} catch (t) {
				return {
					type: "throw",
					arg: t
				}
			}
		}
		t.wrap = c;
		var f = {};

		function l() {}

		function d() {}

		function p() {}
		var h = {};
		h[o] = function() {
			return this
		};
		var v = Object.getPrototypeOf,
			g = v && v(v(O([])));
		g && g !== e && n.call(g, o) && (h = g);
		var m = p.prototype = l.prototype = Object.create(h);

		function y(t) {
			["next", "throw", "return"].forEach((function(e) {
				s(t, e, (function(t) {
					return this._invoke(e, t)
				}))
			}))
		}

		function w(t, e) {
			var r;
			this._invoke = function(o, i) {
				function a() {
					return new e((function(r, a) {
						! function r(o, i, a, s) {
							var c = u(t[o], t, i);
							if ("throw" !== c.type) {
								var f = c.arg,
									l = f.value;
								return l && "object" == typeof l && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
									r("next", t, a, s)
								}), (function(t) {
									r("throw", t, a, s)
								})) : e.resolve(l).then((function(t) {
									f.value = t, a(f)
								}), (function(t) {
									return r("throw", t, a, s)
								}))
							}
							s(c.arg)
						}(o, i, r, a)
					}))
				}
				return r = r ? r.then(a, a) : a()
			}
		}

		function b(t, e) {
			var n = t.iterator[e.method];
			if (void 0 === n) {
				if (e.delegate = null, "throw" === e.method) {
					if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return f;
					e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return f
			}
			var r = u(n, t.iterator, e.arg);
			if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, f;
			var o = r.arg;
			return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
		}

		function _(t) {
			var e = {
				tryLoc: t[0]
			};
			1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
		}

		function x(t) {
			var e = t.completion || {};
			e.type = "normal", delete e.arg, t.completion = e
		}

		function E(t) {
			this.tryEntries = [{
				tryLoc: "root"
			}], t.forEach(_, this), this.reset(!0)
		}

		function O(t) {
			if (t) {
				var e = t[o];
				if (e) return e.call(t);
				if ("function" == typeof t.next) return t;
				if (!isNaN(t.length)) {
					var r = -1,
						i = function e() {
							for (; ++r < t.length;)
								if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
							return e.value = void 0, e.done = !0, e
						};
					return i.next = i
				}
			}
			return {
				next: S
			}
		}

		function S() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = m.constructor = p, p.constructor = d, d.displayName = s(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
			var e = "function" == typeof t && t.constructor;
			return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
		}, t.mark = function(t) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
		}, t.awrap = function(t) {
			return {
				__await: t
			}
		}, y(w.prototype), w.prototype[i] = function() {
			return this
		}, t.AsyncIterator = w, t.async = function(e, n, r, o, i) {
			void 0 === i && (i = Promise);
			var a = new w(c(e, n, r, o), i);
			return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
				return t.done ? t.value : a.next()
			}))
		}, y(m), s(m, a, "Generator"), m[o] = function() {
			return this
		}, m.toString = function() {
			return "[object Generator]"
		}, t.keys = function(t) {
			var e = [];
			for (var n in t) e.push(n);
			return e.reverse(),
				function n() {
					for (; e.length;) {
						var r = e.pop();
						if (r in t) return n.value = r, n.done = !1, n
					}
					return n.done = !0, n
				}
		}, t.values = O, E.prototype = {
			constructor: E,
			reset: function(t) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
					for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
			},
			stop: function() {
				this.done = !0;
				var t = this.tryEntries[0].completion;
				if ("throw" === t.type) throw t.arg;
				return this.rval
			},
			dispatchException: function(t) {
				if (this.done) throw t;
				var e = this;

				function r(n, r) {
					return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var i = this.tryEntries[o],
						a = i.completion;
					if ("root" === i.tryLoc) return r("end");
					if (i.tryLoc <= this.prev) {
						var s = n.call(i, "catchLoc"),
							c = n.call(i, "finallyLoc");
						if (s && c) {
							if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
							if (this.prev < i.finallyLoc) return r(i.finallyLoc)
						} else if (s) {
							if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
						} else {
							if (!c) throw new Error("try statement without catch or finally");
							if (this.prev < i.finallyLoc) return r(i.finallyLoc)
						}
					}
				}
			},
			abrupt: function(t, e) {
				for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var o = this.tryEntries[r];
					if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
						var i = o;
						break
					}
				}
				i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
				var a = i ? i.completion : {};
				return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
			},
			complete: function(t, e) {
				if ("throw" === t.type) throw t.arg;
				return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
			},
			finish: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var n = this.tryEntries[e];
					if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), f
				}
			},
			catch: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var n = this.tryEntries[e];
					if (n.tryLoc === t) {
						var r = n.completion;
						if ("throw" === r.type) {
							var o = r.arg;
							x(n)
						}
						return o
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(t, e, n) {
				return this.delegate = {
					iterator: O(t),
					resultName: e,
					nextLoc: n
				}, "next" === this.method && (this.arg = void 0), f
			}
		}, t
	}(t.exports);
	try {
		regeneratorRuntime = r
	} catch (t) {
		Function("r", "regeneratorRuntime = r")(r)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(58)(2);
	r(r.P + r.F * !n(48)([].filter, !0), "Array", {
		filter: function(t) {
			return o(this, t, arguments[1])
		}
	})
}, function(t, e, n) {
	"use strict";
	n(120);
	var r = n(5),
		o = n(29),
		i = n(3),
		a = /./.toString,
		s = function(t) {
			n(10)(RegExp.prototype, "toString", t, !0)
		};
	n(9)((function() {
		return "/a/b" != a.call({
			source: "a",
			flags: "b"
		})
	})) ? s((function() {
		var t = r(this);
		return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
	})) : "toString" != a.name && s((function() {
		return a.call(this)
	}))
}, function(t, e, n) {
	n(3) && "g" != /./g.flags && n(11).f(RegExp.prototype, "flags", {
		configurable: !0,
		get: n(29)
	})
}, function(t, e, n) {
	var r = Date.prototype,
		o = r.toString,
		i = r.getTime;
	new Date(NaN) + "" != "Invalid Date" && n(10)(r, "toString", (function() {
		var t = i.call(this);
		return t == t ? o.call(this) : "Invalid Date"
	}))
}, function(t, e, n) {
	var r = n(4);
	r(r.S + r.F * !n(3), "Object", {
		defineProperties: n(61)
	})
}, function(t, e, n) {
	var r = n(4);
	r(r.S + r.F * !n(3), "Object", {
		defineProperty: n(11).f
	})
}, function(t, e) {
	function n(e) {
		return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
			return typeof t
		} : t.exports = n = function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, n(e)
	}
	t.exports = n
}, function(t, e, n) {
	var r = n(164),
		o = n(165),
		i = n(166),
		a = n(167);
	t.exports = function(t) {
		return r(t) || o(t) || i(t) || a()
	}
}, function(t, e, n) {
	"use strict";
	t.exports = function(t, e) {
		return function() {
			for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
			return t.apply(e, n)
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);

	function o(t) {
		return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}
	t.exports = function(t, e, n) {
		if (!e) return t;
		var i;
		if (n) i = n(e);
		else if (r.isURLSearchParams(e)) i = e.toString();
		else {
			var a = [];
			r.forEach(e, (function(t, e) {
				null != t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) {
					r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t))
				})))
			})), i = a.join("&")
		}
		if (i) {
			var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
		}
		return t
	}
}, function(t, e, n) {
	"use strict";
	t.exports = function(t) {
		return !(!t || !t.__CANCEL__)
	}
}, function(t, e, n) {
	"use strict";
	(function(e) {
		var r = n(16),
			o = n(145),
			i = {
				"Content-Type": "application/x-www-form-urlencoded"
			};

		function a(t, e) {
			!r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
		}
		var s, c = {
			adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (s = n(130)), s),
			transformRequest: [function(t, e) {
				return o(e, "Accept"), o(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
			}],
			transformResponse: [function(t) {
				if ("string" == typeof t) try {
					t = JSON.parse(t)
				} catch (t) {}
				return t
			}],
			timeout: 0,
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN",
			maxContentLength: -1,
			validateStatus: function(t) {
				return t >= 200 && t < 300
			}
		};
		c.headers = {
			common: {
				Accept: "application/json, text/plain, */*"
			}
		}, r.forEach(["delete", "get", "head"], (function(t) {
			c.headers[t] = {}
		})), r.forEach(["post", "put", "patch"], (function(t) {
			c.headers[t] = r.merge(i)
		})), t.exports = c
	}).call(this, n(144))
}, function(t, e, n) {
	"use strict";
	var r = n(16),
		o = n(146),
		i = n(127),
		a = n(148),
		s = n(151),
		c = n(152),
		u = n(131);
	t.exports = function(t) {
		return new Promise((function(e, f) {
			var l = t.data,
				d = t.headers;
			r.isFormData(l) && delete d["Content-Type"];
			var p = new XMLHttpRequest;
			if (t.auth) {
				var h = t.auth.username || "",
					v = t.auth.password || "";
				d.Authorization = "Basic " + btoa(h + ":" + v)
			}
			var g = a(t.baseURL, t.url);
			if (p.open(t.method.toUpperCase(), i(g, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p.onreadystatechange = function() {
					if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
						var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
							r = {
								data: t.responseType && "text" !== t.responseType ? p.response : p.responseText,
								status: p.status,
								statusText: p.statusText,
								headers: n,
								config: t,
								request: p
							};
						o(e, f, r), p = null
					}
				}, p.onabort = function() {
					p && (f(u("Request aborted", t, "ECONNABORTED", p)), p = null)
				}, p.onerror = function() {
					f(u("Network Error", t, null, p)), p = null
				}, p.ontimeout = function() {
					var e = "timeout of " + t.timeout + "ms exceeded";
					t.timeoutErrorMessage && (e = t.timeoutErrorMessage), f(u(e, t, "ECONNABORTED", p)), p = null
				}, r.isStandardBrowserEnv()) {
				var m = n(153),
					y = (t.withCredentials || c(g)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0;
				y && (d[t.xsrfHeaderName] = y)
			}
			if ("setRequestHeader" in p && r.forEach(d, (function(t, e) {
					void 0 === l && "content-type" === e.toLowerCase() ? delete d[e] : p.setRequestHeader(e, t)
				})), r.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), t.responseType) try {
				p.responseType = t.responseType
			} catch (e) {
				if ("json" !== t.responseType) throw e
			}
			"function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
				p && (p.abort(), f(t), p = null)
			})), void 0 === l && (l = null), p.send(l)
		}))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(147);
	t.exports = function(t, e, n, o, i) {
		var a = new Error(t);
		return r(a, e, n, o, i)
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);
	t.exports = function(t, e) {
		e = e || {};
		var n = {},
			o = ["url", "method", "params", "data"],
			i = ["headers", "auth", "proxy"],
			a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
		r.forEach(o, (function(t) {
			void 0 !== e[t] && (n[t] = e[t])
		})), r.forEach(i, (function(o) {
			r.isObject(e[o]) ? n[o] = r.deepMerge(t[o], e[o]) : void 0 !== e[o] ? n[o] = e[o] : r.isObject(t[o]) ? n[o] = r.deepMerge(t[o]) : void 0 !== t[o] && (n[o] = t[o])
		})), r.forEach(a, (function(r) {
			void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r])
		}));
		var s = o.concat(i).concat(a),
			c = Object.keys(e).filter((function(t) {
				return -1 === s.indexOf(t)
			}));
		return r.forEach(c, (function(r) {
			void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r])
		})), n
	}
}, function(t, e, n) {
	"use strict";

	function r(t) {
		this.message = t
	}
	r.prototype.toString = function() {
		return "Cancel" + (this.message ? ": " + this.message : "")
	}, r.prototype.__CANCEL__ = !0, t.exports = r
}, function(t, e, n) {
	var r, o, i, a, s, c;
	t.exports = (c = n(51), o = (r = c).lib, i = o.Base, a = o.WordArray, (s = r.x64 = {}).Word = i.extend({
		init: function(t, e) {
			this.high = t, this.low = e
		}
	}), s.WordArray = i.extend({
		init: function(t, e) {
			t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length
		},
		toX32: function() {
			for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
				var o = t[r];
				n.push(o.high), n.push(o.low)
			}
			return a.create(n, this.sigBytes)
		},
		clone: function() {
			for (var t = i.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++) e[r] = e[r].clone();
			return t
		}
	}), c)
}, function(t, e) {
	t.exports = function(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}
}, function(t, e) {
	t.exports = function(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
}, function(t, e, n) {
	"use strict";
	n.r(e);
	n(22), n(87);
	var r = n(52),
		o = n(6),
		i = n(0),
		a = n(75);
	n(91), n(92);
	! function(t) {
		try {
			document.domain = Object(o.b)()
		} catch (t) {
			console.log(t)
		}
		var e = new r.a;
		a.a.forEach((function(t) {
			return e.subscribe(t)
		})), Object(i.i)(t), Object.assign(t, {
			segadroid: e
		})
	}(window)
}, function(t, e, n) {
	var r = n(4);
	r(r.S, "Date", {
		now: function() {
			return (new Date).getTime()
		}
	})
}, function(t, e, n) {
	"use strict";
	var r = n(16),
		o = n(126),
		i = n(140),
		a = n(132);

	function s(t) {
		var e = new i(t),
			n = o(i.prototype.request, e);
		return r.extend(n, i.prototype, e), r.extend(n, e), n
	}
	var c = s(n(129));
	c.Axios = i, c.create = function(t) {
		return s(a(c.defaults, t))
	}, c.Cancel = n(133), c.CancelToken = n(154), c.isCancel = n(128), c.all = function(t) {
		return Promise.all(t)
	}, c.spread = n(155), t.exports = c, t.exports.default = c
}, function(t, e, n) {
	"use strict";
	var r = n(16),
		o = n(127),
		i = n(141),
		a = n(142),
		s = n(132);

	function c(t) {
		this.defaults = t, this.interceptors = {
			request: new i,
			response: new i
		}
	}
	c.prototype.request = function(t) {
		"string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
		var e = [a, void 0],
			n = Promise.resolve(t);
		for (this.interceptors.request.forEach((function(t) {
				e.unshift(t.fulfilled, t.rejected)
			})), this.interceptors.response.forEach((function(t) {
				e.push(t.fulfilled, t.rejected)
			})); e.length;) n = n.then(e.shift(), e.shift());
		return n
	}, c.prototype.getUri = function(t) {
		return t = s(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
	}, r.forEach(["delete", "get", "head", "options"], (function(t) {
		c.prototype[t] = function(e, n) {
			return this.request(r.merge(n || {}, {
				method: t,
				url: e
			}))
		}
	})), r.forEach(["post", "put", "patch"], (function(t) {
		c.prototype[t] = function(e, n, o) {
			return this.request(r.merge(o || {}, {
				method: t,
				url: e,
				data: n
			}))
		}
	})), t.exports = c
}, function(t, e, n) {
	"use strict";
	var r = n(16);

	function o() {
		this.handlers = []
	}
	o.prototype.use = function(t, e) {
		return this.handlers.push({
			fulfilled: t,
			rejected: e
		}), this.handlers.length - 1
	}, o.prototype.eject = function(t) {
		this.handlers[t] && (this.handlers[t] = null)
	}, o.prototype.forEach = function(t) {
		r.forEach(this.handlers, (function(e) {
			null !== e && t(e)
		}))
	}, t.exports = o
}, function(t, e, n) {
	"use strict";
	var r = n(16),
		o = n(143),
		i = n(128),
		a = n(129);

	function s(t) {
		t.cancelToken && t.cancelToken.throwIfRequested()
	}
	t.exports = function(t) {
		return s(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
			delete t.headers[e]
		})), (t.adapter || a.adapter)(t).then((function(e) {
			return s(t), e.data = o(e.data, e.headers, t.transformResponse), e
		}), (function(e) {
			return i(e) || (s(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
		}))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);
	t.exports = function(t, e, n) {
		return r.forEach(n, (function(n) {
			t = n(t, e)
		})), t
	}
}, function(t, e) {
	var n, r, o = t.exports = {};

	function i() {
		throw new Error("setTimeout has not been defined")
	}

	function a() {
		throw new Error("clearTimeout has not been defined")
	}

	function s(t) {
		if (n === setTimeout) return setTimeout(t, 0);
		if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
		try {
			return n(t, 0)
		} catch (e) {
			try {
				return n.call(null, t, 0)
			} catch (e) {
				return n.call(this, t, 0)
			}
		}
	}! function() {
		try {
			n = "function" == typeof setTimeout ? setTimeout : i
		} catch (t) {
			n = i
		}
		try {
			r = "function" == typeof clearTimeout ? clearTimeout : a
		} catch (t) {
			r = a
		}
	}();
	var c, u = [],
		f = !1,
		l = -1;

	function d() {
		f && c && (f = !1, c.length ? u = c.concat(u) : l = -1, u.length && p())
	}

	function p() {
		if (!f) {
			var t = s(d);
			f = !0;
			for (var e = u.length; e;) {
				for (c = u, u = []; ++l < e;) c && c[l].run();
				l = -1, e = u.length
			}
			c = null, f = !1,
				function(t) {
					if (r === clearTimeout) return clearTimeout(t);
					if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
					try {
						r(t)
					} catch (e) {
						try {
							return r.call(null, t)
						} catch (e) {
							return r.call(this, t)
						}
					}
				}(t)
		}
	}

	function h(t, e) {
		this.fun = t, this.array = e
	}

	function v() {}
	o.nextTick = function(t) {
		var e = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
		u.push(new h(t, e)), 1 !== u.length || f || s(p)
	}, h.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
		return []
	}, o.binding = function(t) {
		throw new Error("process.binding is not supported")
	}, o.cwd = function() {
		return "/"
	}, o.chdir = function(t) {
		throw new Error("process.chdir is not supported")
	}, o.umask = function() {
		return 0
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);
	t.exports = function(t, e) {
		r.forEach(t, (function(n, r) {
			r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
		}))
	}
}, function(t, e, n) {
	"use strict";
	var r = n(131);
	t.exports = function(t, e, n) {
		var o = n.config.validateStatus;
		!o || o(n.status) ? t(n) : e(r("Request failed with status code " + n.status, n.config, null, n.request, n))
	}
}, function(t, e, n) {
	"use strict";
	t.exports = function(t, e, n, r, o) {
		return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: this.config,
				code: this.code
			}
		}, t
	}
}, function(t, e, n) {
	"use strict";
	var r = n(149),
		o = n(150);
	t.exports = function(t, e) {
		return t && !r(e) ? o(t, e) : e
	}
}, function(t, e, n) {
	"use strict";
	t.exports = function(t) {
		return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
	}
}, function(t, e, n) {
	"use strict";
	t.exports = function(t, e) {
		return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16),
		o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
	t.exports = function(t) {
		var e, n, i, a = {};
		return t ? (r.forEach(t.split("\n"), (function(t) {
			if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) {
				if (a[e] && o.indexOf(e) >= 0) return;
				a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n
			}
		})), a) : a
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);
	t.exports = r.isStandardBrowserEnv() ? function() {
		var t, e = /(msie|trident)/i.test(navigator.userAgent),
			n = document.createElement("a");

		function o(t) {
			var r = t;
			return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
				href: n.href,
				protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
				host: n.host,
				search: n.search ? n.search.replace(/^\?/, "") : "",
				hash: n.hash ? n.hash.replace(/^#/, "") : "",
				hostname: n.hostname,
				port: n.port,
				pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
			}
		}
		return t = o(window.location.href),
			function(e) {
				var n = r.isString(e) ? o(e) : e;
				return n.protocol === t.protocol && n.host === t.host
			}
	}() : function() {
		return !0
	}
}, function(t, e, n) {
	"use strict";
	var r = n(16);
	t.exports = r.isStandardBrowserEnv() ? {
		write: function(t, e, n, o, i, a) {
			var s = [];
			s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
		},
		read: function(t) {
			var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
			return e ? decodeURIComponent(e[3]) : null
		},
		remove: function(t) {
			this.write(t, "", Date.now() - 864e5)
		}
	} : {
		write: function() {},
		read: function() {
			return null
		},
		remove: function() {}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(133);

	function o(t) {
		if ("function" != typeof t) throw new TypeError("executor must be a function.");
		var e;
		this.promise = new Promise((function(t) {
			e = t
		}));
		var n = this;
		t((function(t) {
			n.reason || (n.reason = new r(t), e(n.reason))
		}))
	}
	o.prototype.throwIfRequested = function() {
		if (this.reason) throw this.reason
	}, o.source = function() {
		var t;
		return {
			token: new o((function(e) {
				t = e
			})),
			cancel: t
		}
	}, t.exports = o
}, function(t, e, n) {
	"use strict";
	t.exports = function(t) {
		return function(e) {
			return t.apply(null, e)
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(4),
		o = n(58)(1);
	r(r.P + r.F * !n(48)([].map, !0), "Array", {
		map: function(t) {
			return o(this, t, arguments[1])
		}
	})
}, function(t, e, n) {
	t.exports = n(158)
}, function(t, e, n) {
	"use strict";
	var r = n(159),
		o = n(160),
		i = n(161),
		a = function(t) {
			var e = r.stringify(t);
			return e = (e = (e = e.replace(/=+$/, "")).replace(/\+/g, "-")).replace(/\//g, "_")
		},
		s = {
			alg: "HS512",
			typ: "JWT"
		},
		c = void 0;
	e.init = function(t, e) {
		u ? (s.alg = t, c = e) : console.log("invalid algorithm")
	}, e.encode = function(t, e) {
		try {
			if (e) c = e;
			else if (!c) return void console.log("secret key can not be null");
			var n = o.parse(JSON.stringify(s)),
				r = a(n),
				i = o.parse(JSON.stringify(t)),
				u = r + "." + a(i),
				l = f(u, s.alg, c);
			return u + "." + a(l)
		} catch (t) {
			console.log(t)
		}
	};
	var u = function(t) {
			return ["HS512"].forEach((function(e) {
				if (e === t) return !0
			})), !1
		},
		f = function(t, e, n) {
			switch (e) {
				case "HS512":
					return i(t, n);
				default:
					return console.log("Invalid algo"), !1
			}
		}
}, function(t, e, n) {
	var r, o, i;
	t.exports = (i = n(51), o = (r = i).lib.WordArray, r.enc.Base64 = {
		stringify: function(t) {
			var e = t.words,
				n = t.sigBytes,
				r = this._map;
			t.clamp();
			for (var o = [], i = 0; i < n; i += 3)
				for (var a = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++) o.push(r.charAt(a >>> 6 * (3 - s) & 63));
			var c = r.charAt(64);
			if (c)
				for (; o.length % 4;) o.push(c);
			return o.join("")
		},
		parse: function(t) {
			var e = t.length,
				n = this._map,
				r = this._reverseMap;
			if (!r) {
				r = this._reverseMap = [];
				for (var i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i
			}
			var a = n.charAt(64);
			if (a) {
				var s = t.indexOf(a); - 1 !== s && (e = s)
			}
			return function(t, e, n) {
				for (var r = [], i = 0, a = 0; a < e; a++)
					if (a % 4) {
						var s = n[t.charCodeAt(a - 1)] << a % 4 * 2,
							c = n[t.charCodeAt(a)] >>> 6 - a % 4 * 2;
						r[i >>> 2] |= (s | c) << 24 - i % 4 * 8, i++
					} return o.create(r, i)
			}(t, e, r)
		},
		_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	}, i.enc.Base64)
}, function(t, e, n) {
	var r;
	t.exports = (r = n(51), r.enc.Utf8)
}, function(t, e, n) {
	var r;
	t.exports = (r = n(51), n(134), n(162), n(163), r.HmacSHA512)
}, function(t, e, n) {
	var r;
	t.exports = (r = n(51), n(134), function() {
		var t = r,
			e = t.lib.Hasher,
			n = t.x64,
			o = n.Word,
			i = n.WordArray,
			a = t.algo;

		function s() {
			return o.create.apply(o, arguments)
		}
		var c = [s(1116352408, 3609767458), s(1899447441, 602891725), s(3049323471, 3964484399), s(3921009573, 2173295548), s(961987163, 4081628472), s(1508970993, 3053834265), s(2453635748, 2937671579), s(2870763221, 3664609560), s(3624381080, 2734883394), s(310598401, 1164996542), s(607225278, 1323610764), s(1426881987, 3590304994), s(1925078388, 4068182383), s(2162078206, 991336113), s(2614888103, 633803317), s(3248222580, 3479774868), s(3835390401, 2666613458), s(4022224774, 944711139), s(264347078, 2341262773), s(604807628, 2007800933), s(770255983, 1495990901), s(1249150122, 1856431235), s(1555081692, 3175218132), s(1996064986, 2198950837), s(2554220882, 3999719339), s(2821834349, 766784016), s(2952996808, 2566594879), s(3210313671, 3203337956), s(3336571891, 1034457026), s(3584528711, 2466948901), s(113926993, 3758326383), s(338241895, 168717936), s(666307205, 1188179964), s(773529912, 1546045734), s(1294757372, 1522805485), s(1396182291, 2643833823), s(1695183700, 2343527390), s(1986661051, 1014477480), s(2177026350, 1206759142), s(2456956037, 344077627), s(2730485921, 1290863460), s(2820302411, 3158454273), s(3259730800, 3505952657), s(3345764771, 106217008), s(3516065817, 3606008344), s(3600352804, 1432725776), s(4094571909, 1467031594), s(275423344, 851169720), s(430227734, 3100823752), s(506948616, 1363258195), s(659060556, 3750685593), s(883997877, 3785050280), s(958139571, 3318307427), s(1322822218, 3812723403), s(1537002063, 2003034995), s(1747873779, 3602036899), s(1955562222, 1575990012), s(2024104815, 1125592928), s(2227730452, 2716904306), s(2361852424, 442776044), s(2428436474, 593698344), s(2756734187, 3733110249), s(3204031479, 2999351573), s(3329325298, 3815920427), s(3391569614, 3928383900), s(3515267271, 566280711), s(3940187606, 3454069534), s(4118630271, 4000239992), s(116418474, 1914138554), s(174292421, 2731055270), s(289380356, 3203993006), s(460393269, 320620315), s(685471733, 587496836), s(852142971, 1086792851), s(1017036298, 365543100), s(1126000580, 2618297676), s(1288033470, 3409855158), s(1501505948, 4234509866), s(1607167915, 987167468), s(1816402316, 1246189591)],
			u = [];
		! function() {
			for (var t = 0; t < 80; t++) u[t] = s()
		}();
		var f = a.SHA512 = e.extend({
			_doReset: function() {
				this._hash = new i.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)])
			},
			_doProcessBlock: function(t, e) {
				for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], f = n[5], l = n[6], d = n[7], p = r.high, h = r.low, v = o.high, g = o.low, m = i.high, y = i.low, w = a.high, b = a.low, _ = s.high, x = s.low, E = f.high, O = f.low, S = l.high, P = l.low, k = d.high, I = d.low, j = p, C = h, D = v, A = g, M = m, T = y, L = w, R = b, B = _, U = x, N = E, F = O, z = S, H = P, K = k, G = I, q = 0; q < 80; q++) {
					var W = u[q];
					if (q < 16) var J = W.high = 0 | t[e + 2 * q],
						Q = W.low = 0 | t[e + 2 * q + 1];
					else {
						var V = u[q - 15],
							$ = V.high,
							X = V.low,
							Y = ($ >>> 1 | X << 31) ^ ($ >>> 8 | X << 24) ^ $ >>> 7,
							Z = (X >>> 1 | $ << 31) ^ (X >>> 8 | $ << 24) ^ (X >>> 7 | $ << 25),
							tt = u[q - 2],
							et = tt.high,
							nt = tt.low,
							rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6,
							ot = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26),
							it = u[q - 7],
							at = it.high,
							st = it.low,
							ct = u[q - 16],
							ut = ct.high,
							ft = ct.low;
						J = (J = (J = Y + at + ((Q = Z + st) >>> 0 < Z >>> 0 ? 1 : 0)) + rt + ((Q += ot) >>> 0 < ot >>> 0 ? 1 : 0)) + ut + ((Q += ft) >>> 0 < ft >>> 0 ? 1 : 0), W.high = J, W.low = Q
					}
					var lt, dt = B & N ^ ~B & z,
						pt = U & F ^ ~U & H,
						ht = j & D ^ j & M ^ D & M,
						vt = C & A ^ C & T ^ A & T,
						gt = (j >>> 28 | C << 4) ^ (j << 30 | C >>> 2) ^ (j << 25 | C >>> 7),
						mt = (C >>> 28 | j << 4) ^ (C << 30 | j >>> 2) ^ (C << 25 | j >>> 7),
						yt = (B >>> 14 | U << 18) ^ (B >>> 18 | U << 14) ^ (B << 23 | U >>> 9),
						wt = (U >>> 14 | B << 18) ^ (U >>> 18 | B << 14) ^ (U << 23 | B >>> 9),
						bt = c[q],
						_t = bt.high,
						xt = bt.low,
						Et = K + yt + ((lt = G + wt) >>> 0 < G >>> 0 ? 1 : 0),
						Ot = mt + vt;
					K = z, G = H, z = N, H = F, N = B, F = U, B = L + (Et = (Et = (Et = Et + dt + ((lt += pt) >>> 0 < pt >>> 0 ? 1 : 0)) + _t + ((lt += xt) >>> 0 < xt >>> 0 ? 1 : 0)) + J + ((lt += Q) >>> 0 < Q >>> 0 ? 1 : 0)) + ((U = R + lt | 0) >>> 0 < R >>> 0 ? 1 : 0) | 0, L = M, R = T, M = D, T = A, D = j, A = C, j = Et + (gt + ht + (Ot >>> 0 < mt >>> 0 ? 1 : 0)) + ((C = lt + Ot | 0) >>> 0 < lt >>> 0 ? 1 : 0) | 0
				}
				h = r.low = h + C, r.high = p + j + (h >>> 0 < C >>> 0 ? 1 : 0), g = o.low = g + A, o.high = v + D + (g >>> 0 < A >>> 0 ? 1 : 0), y = i.low = y + T, i.high = m + M + (y >>> 0 < T >>> 0 ? 1 : 0), b = a.low = b + R, a.high = w + L + (b >>> 0 < R >>> 0 ? 1 : 0), x = s.low = x + U, s.high = _ + B + (x >>> 0 < U >>> 0 ? 1 : 0), O = f.low = O + F, f.high = E + N + (O >>> 0 < F >>> 0 ? 1 : 0), P = l.low = P + H, l.high = S + z + (P >>> 0 < H >>> 0 ? 1 : 0), I = d.low = I + G, d.high = k + K + (I >>> 0 < G >>> 0 ? 1 : 0)
			},
			_doFinalize: function() {
				var t = this._data,
					e = t.words,
					n = 8 * this._nDataBytes,
					r = 8 * t.sigBytes;
				return e[r >>> 5] |= 128 << 24 - r % 32, e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), e[31 + (r + 128 >>> 10 << 5)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32()
			},
			clone: function() {
				var t = e.clone.call(this);
				return t._hash = this._hash.clone(), t
			},
			blockSize: 32
		});
		t.SHA512 = e._createHelper(f), t.HmacSHA512 = e._createHmacHelper(f)
	}(), r.SHA512)
}, function(t, e, n) {
	var r, o, i, a;
	t.exports = (r = n(51), i = (o = r).lib.Base, a = o.enc.Utf8, void(o.algo.HMAC = i.extend({
		init: function(t, e) {
			t = this._hasher = new t.init, "string" == typeof e && (e = a.parse(e));
			var n = t.blockSize,
				r = 4 * n;
			e.sigBytes > r && (e = t.finalize(e)), e.clamp();
			for (var o = this._oKey = e.clone(), i = this._iKey = e.clone(), s = o.words, c = i.words, u = 0; u < n; u++) s[u] ^= 1549556828, c[u] ^= 909522486;
			o.sigBytes = i.sigBytes = r, this.reset()
		},
		reset: function() {
			var t = this._hasher;
			t.reset(), t.update(this._iKey)
		},
		update: function(t) {
			return this._hasher.update(t), this
		},
		finalize: function(t) {
			var e = this._hasher,
				n = e.finalize(t);
			return e.reset(), e.finalize(this._oKey.clone().concat(n))
		}
	})))
}, function(t, e, n) {
	var r = n(135);
	t.exports = function(t) {
		if (Array.isArray(t)) return r(t)
	}
}, function(t, e) {
	t.exports = function(t) {
		if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
	}
}, function(t, e, n) {
	var r = n(135);
	t.exports = function(t, e) {
		if (t) {
			if ("string" == typeof t) return r(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
		}
	}
}, function(t, e) {
	t.exports = function() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}
}]);