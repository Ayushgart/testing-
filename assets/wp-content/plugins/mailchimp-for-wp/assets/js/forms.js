(() => {
    var e = {
            1677: () => {
                function e(e) {
                    for (var t = !!e.getAttribute("data-show-if"), r = t ? e.getAttribute("data-show-if").split(":") : e.getAttribute("data-hide-if").split(":"), n = r[0], a = (r.length > 1 ? r[1] : "*").split("|"), i = function(e, t) {
                            for (var r = [], n = e.querySelectorAll('input[name="' + t + '"],select[name="' + t + '"],textarea[name="' + t + '"]'), a = 0; a < n.length; a++) {
                                var i = n[a];
                                ("radio" !== i.type && "checkbox" !== i.type || i.checked) && r.push(i.value)
                            }
                            return r
                        }(function(e) {
                            for (var t = e; t.parentElement;)
                                if ("FORM" === (t = t.parentElement).tagName) return t;
                            return null
                        }(e), n), o = !1, s = 0; s < i.length; s++) {
                        var c = i[s];
                        if (o = a.indexOf(c) > -1 || a.indexOf("*") > -1 && c.length > 0) break
                    }
                    e.style.display = t ? o ? "" : "none" : o ? "none" : "";
                    var u = e.querySelectorAll("input,select,textarea");
                    [].forEach.call(u, (function(e) {
                        (o || t) && e.getAttribute("data-was-required") && (e.required = !0, e.removeAttribute("data-was-required")), o && t || !e.required || (e.setAttribute("data-was-required", "true"), e.required = !1)
                    }))
                }

                function t() {
                    var t = document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");
                    [].forEach.call(t, e)
                }

                function r(t) {
                    if (t.target && t.target.form && !(t.target.form.className.indexOf("mc4wp-form") < 0)) {
                        var r = t.target.form.querySelectorAll("[data-show-if],[data-hide-if]");
                        [].forEach.call(r, e)
                    }
                }
                document.addEventListener("keyup", r, !0), document.addEventListener("change", r, !0), document.addEventListener("mc4wp-refresh", t, !0), window.addEventListener("load", t), t()
            },
            2573: (e, t, r) => {
                var n = r(7422),
                    a = r(3409),
                    i = function(e, t) {
                        this.id = e, this.element = t || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
                    };
                i.prototype.setData = function(e) {
                    try {
                        a(this.element, e)
                    } catch (e) {
                        console.error(e)
                    }
                }, i.prototype.getData = function() {
                    return n(this.element, {
                        hash: !0,
                        empty: !0
                    })
                }, i.prototype.getSerializedData = function() {
                    return n(this.element, {
                        hash: !1,
                        empty: !0
                    })
                }, i.prototype.setResponse = function(e) {
                    this.element.querySelector(".mc4wp-response").innerHTML = e
                }, i.prototype.reset = function() {
                    this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
                }, e.exports = i
            },
            8592: (e, t, r) => {
                var n = r(2573),
                    a = [],
                    i = {};

                function o(e, t) {
                    i[e] = i[e] || [], i[e].forEach((function(e) {
                        return e.apply(null, t)
                    }))
                }

                function s(e, t) {
                    t = t || parseInt(e.getAttribute("data-id")) || 0;
                    var r = new n(t, e);
                    return a.push(r), r
                }
                e.exports = {
                    get: function(e) {
                        e = parseInt(e);
                        for (var t = 0; t < a.length; t++)
                            if (a[t].id === e) return a[t];
                        return s(document.querySelector(".mc4wp-form-" + e), e)
                    },
                    getByElement: function(e) {
                        for (var t = e.form || e, r = 0; r < a.length; r++)
                            if (a[r].element === t) return a[r];
                        return s(t)
                    },
                    on: function(e, t) {
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    off: function(e, t) {
                        i[e] = i[e] || [], i[e] = i[e].filter((function(e) {
                            return e !== t
                        }))
                    },
                    trigger: function(e, t) {
                        "submit" === e || e.indexOf(".submit") > 0 ? o(e, t) : window.setTimeout((function() {
                            o(e, t)
                        }), 1)
                    }
                }
            },
            7422: e => {
                var t = /^(?:submit|button|image|reset|file)$/i,
                    r = /^(?:input|select|textarea|keygen)/i,
                    n = /(\[[^\[\]]*\])/g;

                function a(e, t, r) {
                    if (0 === t.length) return r;
                    var n = t.shift(),
                        i = n.match(/^\[(.+?)\]$/);
                    if ("[]" === n) return e = e || [], Array.isArray(e) ? e.push(a(null, t, r)) : (e._values = e._values || [], e._values.push(a(null, t, r))), e;
                    if (i) {
                        var o = i[1],
                            s = +o;
                        isNaN(s) ? (e = e || {})[o] = a(e[o], t, r) : (e = e || [])[s] = a(e[s], t, r)
                    } else e[n] = a(e[n], t, r);
                    return e
                }

                function i(e, t, r) {
                    if (t.match(n)) a(e, function(e) {
                        var t = [],
                            r = new RegExp(n),
                            a = /^([^\[\]]*)/.exec(e);
                        for (a[1] && t.push(a[1]); null !== (a = r.exec(e));) t.push(a[1]);
                        return t
                    }(t), r);
                    else {
                        var i = e[t];
                        i ? (Array.isArray(i) || (e[t] = [i]), e[t].push(r)) : e[t] = r
                    }
                    return e
                }

                function o(e, t, r) {
                    return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), e + (e ? "&" : "") + encodeURIComponent(t) + "=" + r
                }
                e.exports = function(e, n) {
                    "object" != typeof n ? n = {
                        hash: !!n
                    } : void 0 === n.hash && (n.hash = !0);
                    for (var a = n.hash ? {} : "", s = n.serializer || (n.hash ? i : o), c = e && e.elements ? e.elements : [], u = Object.create(null), l = 0; l < c.length; ++l) {
                        var f = c[l];
                        if ((n.disabled || !f.disabled) && f.name && r.test(f.nodeName) && !t.test(f.type)) {
                            var d = f.name,
                                m = f.value;
                            if ("checkbox" !== f.type && "radio" !== f.type || f.checked || (m = void 0), n.empty) {
                                if ("checkbox" !== f.type || f.checked || (m = ""), "radio" === f.type && (u[f.name] || f.checked ? f.checked && (u[f.name] = !0) : u[f.name] = !1), null == m && "radio" == f.type) continue
                            } else if (!m) continue;
                            if ("select-multiple" !== f.type) a = s(a, d, m);
                            else {
                                m = [];
                                for (var p = f.options, h = !1, v = 0; v < p.length; ++v) {
                                    var g = p[v],
                                        y = n.empty && !g.value,
                                        w = g.value || y;
                                    g.selected && w && (h = !0, a = n.hash && "[]" !== d.slice(d.length - 2) ? s(a, d + "[]", g.value) : s(a, d, g.value))
                                }!h && n.empty && (a = s(a, d, ""))
                            }
                        }
                    }
                    if (n.empty)
                        for (var d in u) u[d] || (a = s(a, d, ""));
                    return a
                }
            },
            3409: e => {
                e.exports && (e.exports = function e(t, r, n) {
                    for (var a in r)
                        if (r.hasOwnProperty(a)) {
                            var i = a,
                                o = r[a];
                            if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== n && (i = n + "[" + a + "]"), o.constructor === Array) i += "[]";
                            else if ("object" == typeof o) {
                                e(t, o, i);
                                continue
                            }
                            var s = t.elements.namedItem(i);
                            if (s) switch (s.type || s[0].type) {
                                default: s.value = o;
                                break;
                                case "radio":
                                        case "checkbox":
                                        for (var c = o.constructor === Array ? o : [o], u = 0; u < s.length; u++) s[u].checked = c.indexOf(s[u].value) > -1;
                                    break;
                                case "select-multiple":
                                        c = o.constructor === Array ? o : [o];
                                    for (var l = 0; l < s.options.length; l++) s.options[l].selected = c.indexOf(s.options[l].value) > -1;
                                    break;
                                case "select":
                                        case "select-one":
                                        s.value = o.toString() || o;
                                    break;
                                case "date":
                                        s.value = new Date(o).toISOString().split("T")[0]
                            }
                        }
                })
            }
        },
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n](i, i.exports, r), i.exports
    }(() => {
        var e = window.mc4wp || {},
            t = r(8592);

        function n(e, r) {
            t.trigger(r[0].id + "." + e, r), t.trigger(e, r)
        }

        function a(e, t) {
            document.addEventListener(e, (function(e) {
                if (e.target) {
                    var r = e.target,
                        n = !1;
                    "string" == typeof r.className && (n = r.className.indexOf("mc4wp-form") > -1), n || "function" != typeof r.matches || (n = r.matches(".mc4wp-form *")), n && t.call(e, e)
                }
            }), !0)
        }
        if (r(1677), a("submit", (function(e) {
                var r = t.getByElement(e.target);
                e.defaultPrevented || t.trigger(r.id + ".submit", [r, e]), e.defaultPrevented || t.trigger("submit", [r, e])
            })), a("focus", (function(e) {
                var r = t.getByElement(e.target);
                r.started || (n("started", [r, e]), r.started = !0)
            })), a("change", (function(e) {
                n("change", [t.getByElement(e.target), e])
            })), e.listeners) {
            for (var i = e.listeners, o = 0; o < i.length; o++) t.on(i[o].event, i[o].callback);
            delete e.listeners
        }
        e.forms = t, window.mc4wp = e
    })()
})();