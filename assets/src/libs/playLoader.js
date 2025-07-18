function playLoader() {
  var e,
    t,
    n,
    i,
    s,
    o,
    d,
    a,
    l,
    r,
    h,
    c,
    g,
    m,
    p,
    u = !1;
  (this._init = function () {
    this._defaultValues(),
      this._appendStyle(),
      this._appendHtml(),
      this._appendPreload(),
      this._setEnableModifiers();
  }),
    (this.loadProcess = function (e) {
      this._moveFurther(e),
        e >= a.maxLoad &&
        window.setTimeout(this._unload.bind(this), a.nextDelay);
    }),
    (this.modify = function (e, t) {
      (a.maxLoad = e), (a.nextDelay = t);
    }),
    (this.enableMain = function () {
      (document.getElementById("mainLoader").style.display = "none"),
        this._resizeHandle();
    }),
    (this.disableMain = function () {
      document.getElementById("mainLoader").style.display = "none";
    }),
    (this.disablePre = function () {
      var e = document.getElementById("preLoader");
      (document.getElementsByTagName("body")[0].style.backgroundImage =
        'url("../assets/SplashScreen/splashbg.png")'),
        (document.getElementsByTagName("body")[0].style.backgroundSize =
          "cover"),
        (e.style.display = "none");
    }),
    (this.getStyle = function () {
      return e;
    }),
    (this.getHtmlBlog = function () {
      return (
        t +
        "\n" +
        i +
        "\n" +
        s +
        "\n" +
        n +
        "\n" +
        l +
        "\n" +
        g +
        "\n" +
        h +
        "\n" +
        c +
        "\n" +
        r
      );
    }),
    (this.unload = function () {
      this._unload();
    }),
    (this._appendPreload = function () {
      o += 2;
      var e = document.getElementById("underPreload"),
        t = "rect(0px, " + o + "px, 100px, 0px)";
      (e.style.clip = t),
        1 == d &&
        o < 42 &&
        window.setTimeout(this._appendPreload.bind(this), 1e3);
    }),
    (this._defaultValues = function () {
      (m = {
        width: 82,
        height: 39,
        hMod: 50,
        maxMask: 82,
        maskHeight: 139,
        totalImages: 1,
        loaded: 0,
      }),
        (a = { maxLoad: 100, nextDelay: 200 }),
        (o = 0),
        (d = !0),
        !0,
        (p = 0),
        window.addEventListener("resize", this._resizeHandle.bind(this));
    }),
    (this._postMessage = function (e) {
      if (1 != u) {
        var t = parseInt(e);
        window.top.postMessage(
          { type: "loading", gameCode: "Hk3bj6nMdgb", progress: t },
          "*"
        ),
          window.postMessage(
            { type: "loading", gameCode: "Hk3bj6nMdgb", progress: t },
            "*"
          );
      }
    }),
    (this._moveFurther = function (e) {
      null != e && 0 !== e && (p = e);
      var t = document.getElementById("processbar"),
        n = t.offsetWidth;
      (n = parseInt((n / 100) * p)), this._postMessage(p);
      var i = "rect(0px, " + n + "px, 0px, 0px)";
      t.style.clip = i;
    }),
    (this._resizeHandle = function () {
      var e = window.innerWidth,
        t = window.innerHeight,
        n = document.getElementById("processbar"),
        i = document.getElementById("sadProcessbar");
      e > t
        ? ((i.style.width = "40%"), (n.style.width = "40%"))
        : ((i.style.width = "45%"), (n.style.width = "45%")),
        this._moveFurther(0);
    }),
    (this._switchToMainLoader = function () {
      this.disablePre(), this.enableMain();
    }),
    (this._onLoaded = function () {
      m.loaded++, m.loaded >= m.totalImages && this._switchToMainLoader();
    }),
    (this._setEnableModifiers = function () {
      var e = document.getElementById("dummyImg"),
        t = document.getElementById("processbar"),
        n = document.getElementById("sadProcessbar");
      (e.onload = this._onLoaded.bind(this)),
        (t.onload = this._onLoaded.bind(this)),
        (n.onload = this._onLoaded.bind(this));
    }),
    (this._setProcessBegin = function () {
      l = '<div id="mainLoader">';
    }),
    (this._setPreloadBegin = function () {
      t = '<div id="preLoader">';
    }),
    (this._setPreloadEnd = function () {
      n = "</div>";
    }),
    (this._setDummy = function () {
      g =
        '<img id="dummyImg" style="display:none;" src="../assets/SplashScreen/splashbg.png" />';
    }),
    (this._setProcessEnd = function () {
      r = "</div>";
    }),
    (this._setEmptyProcess = function () {
      h = '<img id="sadProcessbar" src="../assets/SplashScreen/splashlogo.png" />';
    }),
    (this._setFilledProcess = function () {
      c = '<img id="processbar" style="display:none;" src=""/>';
    }),
    (this._setFilledPreload = function () {
      i = '<img id="underPreload" style="display:none;" src=""/>';
    }),
    (this._setEmptyPreload = function () {
      s = '<img id="overPreload" style="display:none;" src=""/>';
    }),
    (this._appendHtml = function () {
      var e;
      this._setPreloadBegin(),
        this._setPreloadEnd(),
        this._setFilledPreload(),
        this._setEmptyPreload(),
        this._setProcessBegin(),
        this._setProcessEnd(),
        this._setEmptyProcess(),
        this._setFilledProcess(),
        this._setDummy(),
        (e = this.getHtmlBlog()),
        document.getElementById("TOPMOST").insertAdjacentHTML("beforebegin", e);
    }),
    (this._setStyle = function () {
      e =
        "<style>               #mainLoader{\n                  width:100%;\n                  height:100%;\n                  background-image:url('../assets/SplashScreen/splashbg.png');\n                  background-size: contain;\n                  z-index: 900;\n                  display:none\n              }\n              \n              \n              \n              #preLoader{\n                 width:100%;\n                 height:100%;\n                 background-color:#000000;\n                 background-size: contain;\n                 z-index: 800;\n                 display:block\n               }\n               \n               \n               \n               #sadProcessbar{\n                 width: 40%;\n                 margin: auto;\n                 position: absolute;\n                 top: 0;\n                 left: 0;\n                 bottom: 0;\n                 right: 0;\n                 align: middle\n               }\n               \n               \n               \n               #processbar{\n                 width: 40%;\n                 clip: rect(0px, 90px, 200px, 0px);\n                 margin: auto;\n                 position: absolute;\n                 top: 0;\n                 left: 0;\n                 bottom: 0;\n                 right: 0;\n                 align: middle\n               }\n               \n               \n               \n               #overPreload{\n                 width: 64px;\n                 margin: auto;\n                 position: absolute;\n                 top: 0;\n                 left: 0;\n                 bottom: 0;\n                 right: 0;\n                 align: middle\n               }\n               \n               \n               \n               #underPreload{\n                 width: 64px;\n                 clip: rect(0px, 0px, 200px, 0px);\n                 margin: auto;\n                 position: absolute;\n                 top: 0;\n                 left: 0;\n                 bottom: 0;\n                 right: 0;\n                 align: middle\n               }\n               </style>\n             ";
    }),
    (this._appendStyle = function () {
      this._setStyle();
      var e = this.getStyle();
      document.querySelector("head").insertAdjacentHTML("afterbegin", e);
    }),
    (this._unload = function () {
      (document.getElementsByTagName("canvas")[0].style.display = "block"),
        this.disableMain(),
        this.disablePre(),
        (document.getElementsByTagName("body")[0].style.backgroundImage =
          "none"),
        1 != u && (segadroid.setState({ state: "loaded" }), (u = !0));
    }),
    this._init();
}
var GZLOADER = new playLoader();
