var p = Object.defineProperty;
var y = (u, e, t) => e in u ? p(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var d = (u, e, t) => y(u, typeof e != "symbol" ? e + "" : e, t);
class C {
  constructor(e) {
    d(this, "config");
    d(this, "bubble", null);
    d(this, "window", null);
    d(this, "isVisible", !1);
    d(this, "isDragging", !1);
    d(this, "dragStartX", 0);
    d(this, "dragStartY", 0);
    d(this, "initialX", 0);
    d(this, "initialY", 0);
    d(this, "windowState", "normal");
    this.config = {
      ...this.getDefaultConfig(),
      ...e
    };
  }
  getDefaultConfig() {
    return {
      theme: {
        preset: "blue",
        primaryColor: "#2e88ff",
        secondaryColor: "#ffffff",
        textColor: "#333333",
        backgroundColor: "#ffffff",
        position: "right",
        marginBottom: 20,
        marginRight: 20,
        navbar: {
          backgroundColor: "#ffffff",
          textColor: "#333333"
        }
      },
      window: {
        title: "在线客服",
        width: 380,
        height: 640,
        position: "right",
        marginBottom: 20,
        marginRight: 20
      },
      text: {
        bubbleMessage: {
          show: !0,
          icon: "👋",
          title: "需要帮助吗？",
          subtitle: "点击开始对话"
        },
        tabLabels: {
          home: "首页",
          messages: "消息",
          help: "帮助",
          news: "新闻"
        }
      },
      tabs: {
        home: !1,
        messages: !0,
        help: !1,
        news: !1
      },
      showSupport: !0
    };
  }
  init() {
    this.createBubble(), this.setupMessageListener();
  }
  createBubble() {
    var h, o, l, a, c, f, w, g;
    console.log("createBubble"), this.bubble = document.createElement("div");
    const e = this.bubble.style;
    e.position = "fixed", e.zIndex = "9999", e.display = "inline-flex", e.flexDirection = "column", e.alignItems = "flex-end", e.bottom = `${((h = this.config.theme) == null ? void 0 : h.marginBottom) || 30}px`, ((o = this.config.theme) == null ? void 0 : o.position) === "left" ? e.left = `${((l = this.config.theme) == null ? void 0 : l.marginLeft) || 30}px` : e.right = `${((a = this.config.theme) == null ? void 0 : a.marginRight) || 30}px`;
    const t = document.createElement("button");
    t.style.width = "48px", t.style.height = "48px", t.style.borderRadius = "50%", t.style.backgroundColor = ((c = this.config.theme) == null ? void 0 : c.primaryColor) || "#2e88ff", t.style.color = ((f = this.config.theme) == null ? void 0 : f.secondaryColor) || "#ffffff", t.style.border = "none", t.style.cursor = "pointer", t.style.display = "flex", t.style.alignItems = "center", t.style.justifyContent = "center", t.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)", t.style.transition = "transform 0.2s", t.style.outline = "none", t.setAttribute("aria-label", "打开聊天");
    const n = (i) => {
      console.log("Button clicked - handleClick"), i.preventDefault(), i.stopPropagation(), this.window || this.createChatWindow(), this.window && (this.window.style.display = "flex", this.window.style.opacity = "1", this.window.style.transform = "translateY(0)", this.isVisible = !0, this.windowState = "normal", this.bubble && (this.bubble.style.display = "none"));
    };
    if (t.onclick = n, t.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    `, t.addEventListener("mouseover", () => {
      t.style.transform = "scale(1.1)";
    }), t.addEventListener("mouseout", () => {
      t.style.transform = "scale(1)";
    }), this.bubble.appendChild(t), this.bubble.onclick = n, console.log("Bubble created"), (g = (w = this.config.text) == null ? void 0 : w.bubbleMessage) != null && g.show) {
      const i = document.createElement("div");
      i.style.backgroundColor = "#ffffff", i.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)", i.style.borderRadius = "8px", i.style.padding = "12px", i.style.marginBottom = "8px", i.style.maxWidth = "280px", i.style.position = "relative", i.style.animation = "fadeInUp 0.3s ease", i.style.cursor = "pointer";
      const m = document.createElement("style");
      m.textContent = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `, document.head.appendChild(m);
      const b = document.createElement("div");
      if (b.style.position = "absolute", b.style.bottom = "-6px", b.style.right = "20px", b.style.width = "12px", b.style.height = "12px", b.style.backgroundColor = "#ffffff", b.style.transform = "rotate(45deg)", b.style.boxShadow = "4px 4px 8px rgba(0,0,0,0.1)", i.appendChild(b), this.config.text.bubbleMessage.icon) {
        const s = document.createElement("div");
        s.style.marginBottom = "8px", s.style.fontSize = "24px", s.textContent = this.config.text.bubbleMessage.icon, i.appendChild(s);
      }
      if (this.config.text.bubbleMessage.title) {
        const s = document.createElement("div");
        s.style.fontWeight = "600", s.style.fontSize = "14px", s.style.color = "#333333", s.style.marginBottom = "4px", s.textContent = this.config.text.bubbleMessage.title, i.appendChild(s);
      }
      if (this.config.text.bubbleMessage.subtitle) {
        const s = document.createElement("div");
        s.style.fontSize = "12px", s.style.color = "#666666", s.textContent = this.config.text.bubbleMessage.subtitle, i.appendChild(s);
      }
      const r = document.createElement("button");
      r.style.position = "absolute", r.style.top = "8px", r.style.right = "8px", r.style.background = "transparent", r.style.border = "none", r.style.color = "#999999", r.style.cursor = "pointer", r.style.fontSize = "16px", r.style.padding = "4px", r.style.lineHeight = "1", r.innerHTML = "×", r.onclick = (s) => {
        s.stopPropagation(), i.style.display = "none", console.log("Bubble message closed");
      }, i.appendChild(r), i.addEventListener("click", (s) => {
        s.preventDefault(), s.stopPropagation(), this.showChat();
      }), this.bubble.insertBefore(i, t);
    }
    document.body.appendChild(this.bubble), this.isVisible && this.window && (this.bubble.style.display = "none"), window.matchMedia("(max-width: 768px)").matches || (this.bubble.style.cursor = "move", this.addDragListeners(this.bubble));
  }
  addDragListeners(e) {
    const t = (o) => {
      this.isDragging = !0, this.dragStartX = o.clientX, this.dragStartY = o.clientY;
      const l = e.getBoundingClientRect();
      this.initialX = l.left, this.initialY = l.top, document.addEventListener("mousemove", n), document.addEventListener("mouseup", h);
    }, n = (o) => {
      if (!this.isDragging) return;
      o.preventDefault();
      const l = o.clientX - this.dragStartX, a = o.clientY - this.dragStartY, c = this.initialX + l, f = this.initialY + a, w = window.innerWidth - e.offsetWidth, g = window.innerHeight - e.offsetHeight, i = Math.max(0, Math.min(w, c)), m = Math.max(0, Math.min(g, f));
      e.style.left = `${i}px`, e.style.top = `${m}px`, e.style.right = "auto", e.style.bottom = "auto";
    }, h = () => {
      this.isDragging = !1, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", h);
      const o = e.getBoundingClientRect(), a = o.left + o.width / 2 > window.innerWidth / 2;
      this.config.theme && (this.config.theme.position = a ? "right" : "left", this.config.theme.marginRight = a ? window.innerWidth - o.right : void 0, this.config.theme.marginLeft = a ? void 0 : o.left, this.config.theme.marginBottom = window.innerHeight - o.bottom), this.createBubble();
    };
    e.addEventListener("mousedown", t);
  }
  createChatWindow() {
    var h, o, l, a, c;
    this.window && (document.body.removeChild(this.window), this.window = null);
    const e = window.innerWidth <= 768;
    this.window = document.createElement("div"), this.window.id = "bytedesk-chat-window";
    const t = this.window.style;
    if (t.position = "fixed", t.zIndex = "10000", t.backgroundColor = ((h = this.config.theme) == null ? void 0 : h.backgroundColor) || "#ffffff", t.boxShadow = "0 4px 12px rgba(0,0,0,0.15)", t.borderRadius = e ? "16px 16px 0 0" : "16px", t.overflow = "hidden", t.transition = "all 0.3s ease", t.display = "flex", t.flexDirection = "column", e)
      t.width = "100vw", t.height = "100vh", t.left = "0", t.bottom = "0";
    else {
      const { width: f = 380, height: w = 640 } = this.config.window || {};
      t.width = `${f}px`, t.height = `${w}px`, t.maxWidth = "calc(100vw - 40px)", t.maxHeight = "80vh";
      const g = ((o = this.config.theme) == null ? void 0 : o.marginBottom) || 20, i = ((l = this.config.theme) == null ? void 0 : l.marginRight) || 20, m = ((a = this.config.theme) == null ? void 0 : a.marginLeft) || 20;
      t.bottom = `${g}px`, ((c = this.config.theme) == null ? void 0 : c.position) === "left" ? (t.left = `${m}px`, t.right = "auto") : (t.right = `${i}px`, t.left = "auto");
    }
    const n = document.createElement("iframe");
    n.style.width = "100%", n.style.height = "100%", n.style.border = "none", n.src = this.generateChatUrl("messages"), n.title = "chat window", n.allow = "microphone; camera", this.window.appendChild(n), document.body.appendChild(this.window), console.log("Chat window created and added to DOM");
  }
  generateChatUrl(e = "messages") {
    var l, a, c, f, w, g;
    const t = "http://127.0.0.1:9006/chat/", h = {
      ...{
        org: "df_org_uid",
        t: 2,
        sid: "df_rt_uid",
        tab: e,
        navbarBg: ((a = (l = this.config.theme) == null ? void 0 : l.navbar) == null ? void 0 : a.backgroundColor) || ((c = this.config.theme) == null ? void 0 : c.primaryColor),
        navbarText: ((w = (f = this.config.theme) == null ? void 0 : f.navbar) == null ? void 0 : w.textColor) || ((g = this.config.theme) == null ? void 0 : g.secondaryColor)
      },
      ...this.config.chatParams
    }, o = new URLSearchParams(
      Object.entries(h).map(([i, m]) => [i, String(m)])
    ).toString();
    return `${t}?${o}`;
  }
  showChat() {
    try {
      this.window || this.createChatWindow(), this.window && (this.window.style.display = "flex", this.window.style.opacity = "1", this.window.style.transform = "translateY(0)", this.isVisible = !0, this.windowState = "normal", this.bubble && (this.bubble.style.display = "none"));
    } catch (e) {
      console.error("Error in showChat:", e);
    }
  }
  hideChat() {
    this.window && (this.window.style.transform = "translateY(20px)", this.window.style.opacity = "0", setTimeout(() => {
      this.window && (this.window.style.display = "none");
    }, 300), this.isVisible = !1, this.bubble && (this.bubble.style.display = "inline-flex"));
  }
  destroy() {
    this.bubble && (document.body.removeChild(this.bubble), this.bubble = null), this.window && (document.body.removeChild(this.window), this.window = null);
  }
  handleTabChange(e) {
    if (!this.window) return;
    const t = this.window.querySelector("iframe");
    t && (t.src = this.generateChatUrl(e));
  }
  // 更新消息监听处理
  setupMessageListener() {
    window.addEventListener("message", (e) => {
      switch (e.data.type) {
        case "CLOSE_CHAT_WINDOW":
          this.hideChat();
          break;
        case "CHANGE_TAB":
          this.handleTabChange(e.data.tab);
          break;
        case "MAXIMIZE_WINDOW":
          this.toggleMaximize();
          break;
        case "MINIMIZE_WINDOW":
          this.minimizeWindow();
          break;
      }
    });
  }
  minimizeWindow() {
    this.window && (this.windowState = "minimized", this.window.style.transform = "translateY(100%)", this.window.style.opacity = "0", setTimeout(() => {
      this.window && (this.window.style.display = "none");
    }, 300));
  }
  toggleMaximize() {
    var t, n;
    if (!(!this.window || window.innerWidth <= 768))
      if (this.windowState === "maximized") {
        this.windowState = "normal";
        const { width: h = 380, height: o = 640 } = this.config.window || {};
        this.window.style.width = `min(${h}px, 100vw - 40px)`, this.window.style.height = `min(${o}px, 80vh)`, this.window.style.top = "", this.window.style.left = "", this.window.style.right = ((t = this.config.window) == null ? void 0 : t.position) === "left" ? "" : "20px", this.window.style.bottom = `${((n = this.config.window) == null ? void 0 : n.marginBottom) || 80}px`;
      } else
        this.windowState = "maximized", this.window.style.width = "100vw", this.window.style.height = "100vh", this.window.style.top = "0", this.window.style.left = "0", this.window.style.right = "0", this.window.style.bottom = "0";
  }
}
export {
  C as default
};
