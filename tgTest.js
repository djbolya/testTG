var Uf = e=>{
    throw TypeError(e)
}
;
var yg = (e,t)=>()=>(t || e((t = {
    exports: {}
}).exports, t),
t.exports);
var Wl = (e,t,n)=>t.has(e) || Uf("Cannot " + n);
var y = (e,t,n)=>(Wl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , me = (e,t,n)=>t.has(e) ? Uf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , X = (e,t,n,s)=>(Wl(e, t, "write to private field"),
s ? s.call(e, n) : t.set(e, n),
n)
  , Oe = (e,t,n)=>(Wl(e, t, "access private method"),
n);
var oa = (e,t,n,s)=>({
    set _(r) {
        X(e, t, r, n)
    },
    get _() {
        return y(e, t, s)
    }
});
var TT = yg((VT,Ra)=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload"))
            return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
            s(r);
        new MutationObserver(r=>{
            for (const i of r)
                if (i.type === "childList")
                    for (const o of i.addedNodes)
                        o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(r) {
            const i = {};
            return r.integrity && (i.integrity = r.integrity),
            r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
        }
        function s(r) {
            if (r.ep)
                return;
            r.ep = !0;
            const i = n(r);
            fetch(r.href, i)
        }
    }
    )();
    /**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
    /*! #__NO_SIDE_EFFECTS__ */
    function yu(e, t) {
        const n = new Set(e.split(","));
        return s=>n.has(s)
    }
    const Je = {}
      , Kr = []
      , nn = ()=>{}
      , vg = ()=>!1
      , ll = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
      , vu = e=>e.startsWith("onUpdate:")
      , ft = Object.assign
      , bu = (e,t)=>{
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
      , bg = Object.prototype.hasOwnProperty
      , ze = (e,t)=>bg.call(e, t)
      , de = Array.isArray
      , Gr = e=>Bo(e) === "[object Map]"
      , cl = e=>Bo(e) === "[object Set]"
      , qf = e=>Bo(e) === "[object Date]"
      , we = e=>typeof e == "function"
      , dt = e=>typeof e == "string"
      , as = e=>typeof e == "symbol"
      , Ge = e=>e !== null && typeof e == "object"
      , Gh = e=>(Ge(e) || we(e)) && we(e.then) && we(e.catch)
      , Qh = Object.prototype.toString
      , Bo = e=>Qh.call(e)
      , wg = e=>Bo(e).slice(8, -1)
      , Jh = e=>Bo(e) === "[object Object]"
      , wu = e=>dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
      , Xi = yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
      , ul = e=>{
        const t = Object.create(null);
        return n=>t[n] || (t[n] = e(n))
    }
      , xg = /-(\w)/g
      , Fn = ul(e=>e.replace(xg, (t,n)=>n ? n.toUpperCase() : ""))
      , Mg = /\B([A-Z])/g
      , Ri = ul(e=>e.replace(Mg, "-$1").toLowerCase())
      , fl = ul(e=>e.charAt(0).toUpperCase() + e.slice(1))
      , Yl = ul(e=>e ? `on${fl(e)}` : "")
      , Ys = (e,t)=>!Object.is(e, t)
      , ga = (e,...t)=>{
        for (let n = 0; n < e.length; n++)
            e[n](...t)
    }
      , Xh = (e,t,n,s=!1)=>{
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: s,
            value: n
        })
    }
      , kg = e=>{
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }
      , Sg = e=>{
        const t = dt(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    }
    ;
    let Bf;
    const ep = ()=>Bf || (Bf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    function pn(e) {
        if (de(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const s = e[n]
                  , r = dt(s) ? Tg(s) : pn(s);
                if (r)
                    for (const i in r)
                        t[i] = r[i]
            }
            return t
        } else if (dt(e) || Ge(e))
            return e
    }
    const Og = /;(?![^(]*\))/g
      , Eg = /:([^]+)/
      , Cg = /\/\*[^]*?\*\//g;
    function Tg(e) {
        const t = {};
        return e.replace(Cg, "").split(Og).forEach(n=>{
            if (n) {
                const s = n.split(Eg);
                s.length > 1 && (t[s[0].trim()] = s[1].trim())
            }
        }
        ),
        t
    }
    function le(e) {
        let t = "";
        if (dt(e))
            t = e;
        else if (de(e))
            for (let n = 0; n < e.length; n++) {
                const s = le(e[n]);
                s && (t += s + " ")
            }
        else if (Ge(e))
            for (const n in e)
                e[n] && (t += n + " ");
        return t.trim()
    }
    function lo(e) {
        if (!e)
            return null;
        let {class: t, style: n} = e;
        return t && !dt(t) && (e.class = le(t)),
        n && (e.style = pn(n)),
        e
    }
    const Rg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
      , Pg = yu(Rg);
    function tp(e) {
        return !!e || e === ""
    }
    function Ag(e, t) {
        if (e.length !== t.length)
            return !1;
        let n = !0;
        for (let s = 0; n && s < e.length; s++)
            n = vi(e[s], t[s]);
        return n
    }
    function vi(e, t) {
        if (e === t)
            return !0;
        let n = qf(e)
          , s = qf(t);
        if (n || s)
            return n && s ? e.getTime() === t.getTime() : !1;
        if (n = as(e),
        s = as(t),
        n || s)
            return e === t;
        if (n = de(e),
        s = de(t),
        n || s)
            return n && s ? Ag(e, t) : !1;
        if (n = Ge(e),
        s = Ge(t),
        n || s) {
            if (!n || !s)
                return !1;
            const r = Object.keys(e).length
              , i = Object.keys(t).length;
            if (r !== i)
                return !1;
            for (const o in e) {
                const a = e.hasOwnProperty(o)
                  , l = t.hasOwnProperty(o);
                if (a && !l || !a && l || !vi(e[o], t[o]))
                    return !1
            }
        }
        return String(e) === String(t)
    }
    function np(e, t) {
        return e.findIndex(n=>vi(n, t))
    }
    const he = e=>dt(e) ? e : e == null ? "" : de(e) || Ge(e) && (e.toString === Qh || !we(e.toString)) ? JSON.stringify(e, sp, 2) : String(e)
      , sp = (e,t)=>t && t.__v_isRef ? sp(e, t.value) : Gr(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n,[s,r],i)=>(n[Zl(s, i) + " =>"] = r,
        n), {})
    } : cl(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n=>Zl(n))
    } : as(t) ? Zl(t) : Ge(t) && !de(t) && !Jh(t) ? String(t) : t
      , Zl = (e,t="")=>{
        var n;
        return as(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    }
    ;
    /**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
    let Wt;
    class rp {
        constructor(t=!1) {
            this.detached = t,
            this._active = !0,
            this.effects = [],
            this.cleanups = [],
            this.parent = Wt,
            !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1)
        }
        get active() {
            return this._active
        }
        run(t) {
            if (this._active) {
                const n = Wt;
                try {
                    return Wt = this,
                    t()
                } finally {
                    Wt = n
                }
            }
        }
        on() {
            Wt = this
        }
        off() {
            Wt = this.parent
        }
        stop(t) {
            if (this._active) {
                let n, s;
                for (n = 0,
                s = this.effects.length; n < s; n++)
                    this.effects[n].stop();
                for (n = 0,
                s = this.cleanups.length; n < s; n++)
                    this.cleanups[n]();
                if (this.scopes)
                    for (n = 0,
                    s = this.scopes.length; n < s; n++)
                        this.scopes[n].stop(!0);
                if (!this.detached && this.parent && !t) {
                    const r = this.parent.scopes.pop();
                    r && r !== this && (this.parent.scopes[this.index] = r,
                    r.index = this.index)
                }
                this.parent = void 0,
                this._active = !1
            }
        }
    }
    function ip(e) {
        return new rp(e)
    }
    function $g(e, t=Wt) {
        t && t.active && t.effects.push(e)
    }
    function xu() {
        return Wt
    }
    function dl(e) {
        Wt && Wt.cleanups.push(e)
    }
    let vr;
    class Mu {
        constructor(t, n, s, r) {
            this.fn = t,
            this.trigger = n,
            this.scheduler = s,
            this.active = !0,
            this.deps = [],
            this._dirtyLevel = 5,
            this._trackId = 0,
            this._runnings = 0,
            this._shouldSchedule = !1,
            this._depsLength = 0,
            $g(this, r)
        }
        get dirty() {
            if (this._dirtyLevel === 2)
                return !1;
            if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
                this._dirtyLevel = 1,
                er();
                for (let t = 0; t < this._depsLength; t++) {
                    const n = this.deps[t];
                    if (n.computed) {
                        if (n.computed.effect._dirtyLevel === 2)
                            return !0;
                        if (Dg(n.computed),
                        this._dirtyLevel >= 5)
                            break
                    }
                }
                this._dirtyLevel === 1 && (this._dirtyLevel = 0),
                tr()
            }
            return this._dirtyLevel >= 5
        }
        set dirty(t) {
            this._dirtyLevel = t ? 5 : 0
        }
        run() {
            if (this._dirtyLevel = 0,
            !this.active)
                return this.fn();
            let t = Vs
              , n = vr;
            try {
                return Vs = !0,
                vr = this,
                this._runnings++,
                Vf(this),
                this.fn()
            } finally {
                Hf(this),
                this._runnings--,
                vr = n,
                Vs = t
            }
        }
        stop() {
            this.active && (Vf(this),
            Hf(this),
            this.onStop && this.onStop(),
            this.active = !1)
        }
    }
    function Dg(e) {
        return e.value
    }
    function Vf(e) {
        e._trackId++,
        e._depsLength = 0
    }
    function Hf(e) {
        if (e.deps.length > e._depsLength) {
            for (let t = e._depsLength; t < e.deps.length; t++)
                op(e.deps[t], e);
            e.deps.length = e._depsLength
        }
    }
    function op(e, t) {
        const n = e.get(t);
        n !== void 0 && t._trackId !== n && (e.delete(t),
        e.size === 0 && e.cleanup())
    }
    let Vs = !0
      , bc = 0;
    const ap = [];
    function er() {
        ap.push(Vs),
        Vs = !1
    }
    function tr() {
        const e = ap.pop();
        Vs = e === void 0 ? !0 : e
    }
    function ku() {
        bc++
    }
    function Su() {
        for (bc--; !bc && wc.length; )
            wc.shift()()
    }
    function lp(e, t, n) {
        if (t.get(e) !== e._trackId) {
            t.set(e, e._trackId);
            const s = e.deps[e._depsLength];
            s !== t ? (s && op(s, e),
            e.deps[e._depsLength++] = t) : e._depsLength++
        }
    }
    const wc = [];
    function cp(e, t, n) {
        ku();
        for (const s of e.keys()) {
            if (!e.computed && s.computed && e.get(s) === s._trackId && s._runnings > 0) {
                s._dirtyLevel = 2;
                continue
            }
            let r;
            s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
            s.computed && s._dirtyLevel === 2 && (s._shouldSchedule = !0),
            s._dirtyLevel = t),
            s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (s.trigger(),
            (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 3 && (s._shouldSchedule = !1,
            s.scheduler && wc.push(s.scheduler)))
        }
        Su()
    }
    const up = (e,t)=>{
        const n = new Map;
        return n.cleanup = e,
        n.computed = t,
        n
    }
      , Pa = new WeakMap
      , br = Symbol("")
      , xc = Symbol("");
    function Bt(e, t, n) {
        if (Vs && vr) {
            let s = Pa.get(e);
            s || Pa.set(e, s = new Map);
            let r = s.get(n);
            r || s.set(n, r = up(()=>s.delete(n))),
            lp(vr, r)
        }
    }
    function ss(e, t, n, s, r, i) {
        const o = Pa.get(e);
        if (!o)
            return;
        let a = [];
        if (t === "clear")
            a = [...o.values()];
        else if (n === "length" && de(e)) {
            const l = Number(s);
            o.forEach((u,c)=>{
                (c === "length" || !as(c) && c >= l) && a.push(u)
            }
            )
        } else
            switch (n !== void 0 && a.push(o.get(n)),
            t) {
            case "add":
                de(e) ? wu(n) && a.push(o.get("length")) : (a.push(o.get(br)),
                Gr(e) && a.push(o.get(xc)));
                break;
            case "delete":
                de(e) || (a.push(o.get(br)),
                Gr(e) && a.push(o.get(xc)));
                break;
            case "set":
                Gr(e) && a.push(o.get(br));
                break
            }
        ku();
        for (const l of a)
            l && cp(l, 5);
        Su()
    }
    function Lg(e, t) {
        const n = Pa.get(e);
        return n && n.get(t)
    }
    const zg = yu("__proto__,__v_isRef,__isVue")
      , fp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(as))
      , Wf = Ng();
    function Ng() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
            e[t] = function(...n) {
                const s = De(this);
                for (let i = 0, o = this.length; i < o; i++)
                    Bt(s, "get", i + "");
                const r = s[t](...n);
                return r === -1 || r === !1 ? s[t](...n.map(De)) : r
            }
        }
        ),
        ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
            e[t] = function(...n) {
                er(),
                ku();
                const s = De(this)[t].apply(this, n);
                return Su(),
                tr(),
                s
            }
        }
        ),
        e
    }
    function Ig(e) {
        as(e) || (e = String(e));
        const t = De(this);
        return Bt(t, "has", e),
        t.hasOwnProperty(e)
    }
    class dp {
        constructor(t=!1, n=!1) {
            this._isReadonly = t,
            this._isShallow = n
        }
        get(t, n, s) {
            const r = this._isReadonly
              , i = this._isShallow;
            if (n === "__v_isReactive")
                return !r;
            if (n === "__v_isReadonly")
                return r;
            if (n === "__v_isShallow")
                return i;
            if (n === "__v_raw")
                return s === (r ? i ? Qg : _p : i ? mp : pp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
            const o = de(t);
            if (!r) {
                if (o && ze(Wf, n))
                    return Reflect.get(Wf, n, s);
                if (n === "hasOwnProperty")
                    return Ig
            }
            const a = Reflect.get(t, n, s);
            return (as(n) ? fp.has(n) : zg(n)) || (r || Bt(t, "get", n),
            i) ? a : it(a) ? o && wu(n) ? a : a.value : Ge(a) ? r ? Vo(a) : ls(a) : a
        }
    }
    class hp extends dp {
        constructor(t=!1) {
            super(!1, t)
        }
        set(t, n, s, r) {
            let i = t[n];
            if (!this._isShallow) {
                const l = co(i);
                if (!Aa(s) && !co(s) && (i = De(i),
                s = De(s)),
                !de(t) && it(i) && !it(s))
                    return l ? !1 : (i.value = s,
                    !0)
            }
            const o = de(t) && wu(n) ? Number(n) < t.length : ze(t, n)
              , a = Reflect.set(t, n, s, r);
            return t === De(r) && (o ? Ys(s, i) && ss(t, "set", n, s) : ss(t, "add", n, s)),
            a
        }
        deleteProperty(t, n) {
            const s = ze(t, n);
            t[n];
            const r = Reflect.deleteProperty(t, n);
            return r && s && ss(t, "delete", n, void 0),
            r
        }
        has(t, n) {
            const s = Reflect.has(t, n);
            return (!as(n) || !fp.has(n)) && Bt(t, "has", n),
            s
        }
        ownKeys(t) {
            return Bt(t, "iterate", de(t) ? "length" : br),
            Reflect.ownKeys(t)
        }
    }
    class Fg extends dp {
        constructor(t=!1) {
            super(!0, t)
        }
        set(t, n) {
            return !0
        }
        deleteProperty(t, n) {
            return !0
        }
    }
    const jg = new hp
      , Ug = new Fg
      , qg = new hp(!0)
      , Ou = e=>e
      , hl = e=>Reflect.getPrototypeOf(e);
    function aa(e, t, n=!1, s=!1) {
        e = e.__v_raw;
        const r = De(e)
          , i = De(t);
        n || (Ys(t, i) && Bt(r, "get", t),
        Bt(r, "get", i));
        const {has: o} = hl(r)
          , a = s ? Ou : n ? Ru : uo;
        if (o.call(r, t))
            return a(e.get(t));
        if (o.call(r, i))
            return a(e.get(i));
        e !== r && e.get(t)
    }
    function la(e, t=!1) {
        const n = this.__v_raw
          , s = De(n)
          , r = De(e);
        return t || (Ys(e, r) && Bt(s, "has", e),
        Bt(s, "has", r)),
        e === r ? n.has(e) : n.has(e) || n.has(r)
    }
    function ca(e, t=!1) {
        return e = e.__v_raw,
        !t && Bt(De(e), "iterate", br),
        Reflect.get(e, "size", e)
    }
    function Yf(e) {
        e = De(e);
        const t = De(this);
        return hl(t).has.call(t, e) || (t.add(e),
        ss(t, "add", e, e)),
        this
    }
    function Zf(e, t) {
        t = De(t);
        const n = De(this)
          , {has: s, get: r} = hl(n);
        let i = s.call(n, e);
        i || (e = De(e),
        i = s.call(n, e));
        const o = r.call(n, e);
        return n.set(e, t),
        i ? Ys(t, o) && ss(n, "set", e, t) : ss(n, "add", e, t),
        this
    }
    function Kf(e) {
        const t = De(this)
          , {has: n, get: s} = hl(t);
        let r = n.call(t, e);
        r || (e = De(e),
        r = n.call(t, e)),
        s && s.call(t, e);
        const i = t.delete(e);
        return r && ss(t, "delete", e, void 0),
        i
    }
    function Gf() {
        const e = De(this)
          , t = e.size !== 0
          , n = e.clear();
        return t && ss(e, "clear", void 0, void 0),
        n
    }
    function ua(e, t) {
        return function(s, r) {
            const i = this
              , o = i.__v_raw
              , a = De(o)
              , l = t ? Ou : e ? Ru : uo;
            return !e && Bt(a, "iterate", br),
            o.forEach((u,c)=>s.call(r, l(u), l(c), i))
        }
    }
    function fa(e, t, n) {
        return function(...s) {
            const r = this.__v_raw
              , i = De(r)
              , o = Gr(i)
              , a = e === "entries" || e === Symbol.iterator && o
              , l = e === "keys" && o
              , u = r[e](...s)
              , c = n ? Ou : t ? Ru : uo;
            return !t && Bt(i, "iterate", l ? xc : br),
            {
                next() {
                    const {value: f, done: d} = u.next();
                    return d ? {
                        value: f,
                        done: d
                    } : {
                        value: a ? [c(f[0]), c(f[1])] : c(f),
                        done: d
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }
    function ys(e) {
        return function(...t) {
            return e === "delete" ? !1 : e === "clear" ? void 0 : this
        }
    }
    function Bg() {
        const e = {
            get(i) {
                return aa(this, i)
            },
            get size() {
                return ca(this)
            },
            has: la,
            add: Yf,
            set: Zf,
            delete: Kf,
            clear: Gf,
            forEach: ua(!1, !1)
        }
          , t = {
            get(i) {
                return aa(this, i, !1, !0)
            },
            get size() {
                return ca(this)
            },
            has: la,
            add: Yf,
            set: Zf,
            delete: Kf,
            clear: Gf,
            forEach: ua(!1, !0)
        }
          , n = {
            get(i) {
                return aa(this, i, !0)
            },
            get size() {
                return ca(this, !0)
            },
            has(i) {
                return la.call(this, i, !0)
            },
            add: ys("add"),
            set: ys("set"),
            delete: ys("delete"),
            clear: ys("clear"),
            forEach: ua(!0, !1)
        }
          , s = {
            get(i) {
                return aa(this, i, !0, !0)
            },
            get size() {
                return ca(this, !0)
            },
            has(i) {
                return la.call(this, i, !0)
            },
            add: ys("add"),
            set: ys("set"),
            delete: ys("delete"),
            clear: ys("clear"),
            forEach: ua(!0, !0)
        };
        return ["keys", "values", "entries", Symbol.iterator].forEach(i=>{
            e[i] = fa(i, !1, !1),
            n[i] = fa(i, !0, !1),
            t[i] = fa(i, !1, !0),
            s[i] = fa(i, !0, !0)
        }
        ),
        [e, n, t, s]
    }
    const [Vg,Hg,Wg,Yg] = Bg();
    function Eu(e, t) {
        const n = t ? e ? Yg : Wg : e ? Hg : Vg;
        return (s,r,i)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(ze(n, r) && r in s ? n : s, r, i)
    }
    const Zg = {
        get: Eu(!1, !1)
    }
      , Kg = {
        get: Eu(!1, !0)
    }
      , Gg = {
        get: Eu(!0, !1)
    }
      , pp = new WeakMap
      , mp = new WeakMap
      , _p = new WeakMap
      , Qg = new WeakMap;
    function Jg(e) {
        switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
        }
    }
    function Xg(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : Jg(wg(e))
    }
    function ls(e) {
        return co(e) ? e : Cu(e, !1, jg, Zg, pp)
    }
    function gp(e) {
        return Cu(e, !1, qg, Kg, mp)
    }
    function Vo(e) {
        return Cu(e, !0, Ug, Gg, _p)
    }
    function Cu(e, t, n, s, r) {
        if (!Ge(e) || e.__v_raw && !(t && e.__v_isReactive))
            return e;
        const i = r.get(e);
        if (i)
            return i;
        const o = Xg(e);
        if (o === 0)
            return e;
        const a = new Proxy(e,o === 2 ? s : n);
        return r.set(e, a),
        a
    }
    function wr(e) {
        return co(e) ? wr(e.__v_raw) : !!(e && e.__v_isReactive)
    }
    function co(e) {
        return !!(e && e.__v_isReadonly)
    }
    function Aa(e) {
        return !!(e && e.__v_isShallow)
    }
    function yp(e) {
        return e ? !!e.__v_raw : !1
    }
    function De(e) {
        const t = e && e.__v_raw;
        return t ? De(t) : e
    }
    function Tu(e) {
        return Object.isExtensible(e) && Xh(e, "__v_skip", !0),
        e
    }
    const uo = e=>Ge(e) ? ls(e) : e
      , Ru = e=>Ge(e) ? Vo(e) : e;
    class vp {
        constructor(t, n, s, r) {
            this.getter = t,
            this._setter = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this.__v_isReadonly = !1,
            this.effect = new Mu(()=>t(this._value),()=>ya(this, this.effect._dirtyLevel === 3 ? 3 : 4)),
            this.effect.computed = this,
            this.effect.active = this._cacheable = !r,
            this.__v_isReadonly = s
        }
        get value() {
            const t = De(this);
            return (!t._cacheable || t.effect.dirty) && Ys(t._value, t._value = t.effect.run()) && ya(t, 5),
            bp(t),
            t.effect._dirtyLevel >= 2 && ya(t, 3),
            t._value
        }
        set value(t) {
            this._setter(t)
        }
        get _dirty() {
            return this.effect.dirty
        }
        set _dirty(t) {
            this.effect.dirty = t
        }
    }
    function ey(e, t, n=!1) {
        let s, r;
        const i = we(e);
        return i ? (s = e,
        r = nn) : (s = e.get,
        r = e.set),
        new vp(s,r,i || !r,n)
    }
    function bp(e) {
        var t;
        Vs && vr && (e = De(e),
        lp(vr, (t = e.dep) != null ? t : e.dep = up(()=>e.dep = void 0, e instanceof vp ? e : void 0)))
    }
    function ya(e, t=5, n, s) {
        e = De(e);
        const r = e.dep;
        r && cp(r, t)
    }
    function it(e) {
        return !!(e && e.__v_isRef === !0)
    }
    function fe(e) {
        return wp(e, !1)
    }
    function ty(e) {
        return wp(e, !0)
    }
    function wp(e, t) {
        return it(e) ? e : new ny(e,t)
    }
    class ny {
        constructor(t, n) {
            this.__v_isShallow = n,
            this.dep = void 0,
            this.__v_isRef = !0,
            this._rawValue = n ? t : De(t),
            this._value = n ? t : uo(t)
        }
        get value() {
            return bp(this),
            this._value
        }
        set value(t) {
            const n = this.__v_isShallow || Aa(t) || co(t);
            t = n ? t : De(t),
            Ys(t, this._rawValue) && (this._rawValue,
            this._rawValue = t,
            this._value = n ? t : uo(t),
            ya(this, 5))
        }
    }
    function S(e) {
        return it(e) ? e.value : e
    }
    const sy = {
        get: (e,t,n)=>S(Reflect.get(e, t, n)),
        set: (e,t,n,s)=>{
            const r = e[t];
            return it(r) && !it(n) ? (r.value = n,
            !0) : Reflect.set(e, t, n, s)
        }
    };
    function xp(e) {
        return wr(e) ? e : new Proxy(e,sy)
    }
    function pl(e) {
        const t = de(e) ? new Array(e.length) : {};
        for (const n in e)
            t[n] = iy(e, n);
        return t
    }
    class ry {
        constructor(t, n, s) {
            this._object = t,
            this._key = n,
            this._defaultValue = s,
            this.__v_isRef = !0
        }
        get value() {
            const t = this._object[this._key];
            return t === void 0 ? this._defaultValue : t
        }
        set value(t) {
            this._object[this._key] = t
        }
        get dep() {
            return Lg(De(this._object), this._key)
        }
    }
    function iy(e, t, n) {
        const s = e[t];
        return it(s) ? s : new ry(e,t,n)
    }
    /**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
    function Hs(e, t, n, s) {
        try {
            return s ? e(...s) : e()
        } catch (r) {
            ml(r, t, n)
        }
    }
    function sn(e, t, n, s) {
        if (we(e)) {
            const r = Hs(e, t, n, s);
            return r && Gh(r) && r.catch(i=>{
                ml(i, t, n)
            }
            ),
            r
        }
        if (de(e)) {
            const r = [];
            for (let i = 0; i < e.length; i++)
                r.push(sn(e[i], t, n, s));
            return r
        }
    }
    function ml(e, t, n, s=!0) {
        const r = t ? t.vnode : null;
        if (t) {
            let i = t.parent;
            const o = t.proxy
              , a = `https://vuejs.org/error-reference/#runtime-${n}`;
            for (; i; ) {
                const u = i.ec;
                if (u) {
                    for (let c = 0; c < u.length; c++)
                        if (u[c](e, o, a) === !1)
                            return
                }
                i = i.parent
            }
            const l = t.appContext.config.errorHandler;
            if (l) {
                er(),
                Hs(l, null, 10, [e, o, a]),
                tr();
                return
            }
        }
        oy(e, n, r, s)
    }
    function oy(e, t, n, s=!0) {
        console.error(e)
    }
    let fo = !1
      , Mc = !1;
    const St = [];
    let Dn = 0;
    const Qr = [];
    let Ss = null
      , lr = 0;
    const Mp = Promise.resolve();
    let Pu = null;
    function Ho(e) {
        const t = Pu || Mp;
        return e ? t.then(this ? e.bind(this) : e) : t
    }
    function ay(e) {
        let t = Dn + 1
          , n = St.length;
        for (; t < n; ) {
            const s = t + n >>> 1
              , r = St[s]
              , i = ho(r);
            i < e || i === e && r.pre ? t = s + 1 : n = s
        }
        return t
    }
    function Au(e) {
        (!St.length || !St.includes(e, fo && e.allowRecurse ? Dn + 1 : Dn)) && (e.id == null ? St.push(e) : St.splice(ay(e.id), 0, e),
        kp())
    }
    function kp() {
        !fo && !Mc && (Mc = !0,
        Pu = Mp.then(Op))
    }
    function ly(e) {
        const t = St.indexOf(e);
        t > Dn && St.splice(t, 1)
    }
    function cy(e) {
        de(e) ? Qr.push(...e) : (!Ss || !Ss.includes(e, e.allowRecurse ? lr + 1 : lr)) && Qr.push(e),
        kp()
    }
    function Qf(e, t, n=fo ? Dn + 1 : 0) {
        for (; n < St.length; n++) {
            const s = St[n];
            if (s && s.pre) {
                if (e && s.id !== e.uid)
                    continue;
                St.splice(n, 1),
                n--,
                s()
            }
        }
    }
    function Sp(e) {
        if (Qr.length) {
            const t = [...new Set(Qr)].sort((n,s)=>ho(n) - ho(s));
            if (Qr.length = 0,
            Ss) {
                Ss.push(...t);
                return
            }
            for (Ss = t,
            lr = 0; lr < Ss.length; lr++) {
                const n = Ss[lr];
                n.active !== !1 && n()
            }
            Ss = null,
            lr = 0
        }
    }
    const ho = e=>e.id == null ? 1 / 0 : e.id
      , uy = (e,t)=>{
        const n = ho(e) - ho(t);
        if (n === 0) {
            if (e.pre && !t.pre)
                return -1;
            if (t.pre && !e.pre)
                return 1
        }
        return n
    }
    ;
    function Op(e) {
        Mc = !1,
        fo = !0,
        St.sort(uy);
        try {
            for (Dn = 0; Dn < St.length; Dn++) {
                const t = St[Dn];
                t && t.active !== !1 && Hs(t, null, 14)
            }
        } finally {
            Dn = 0,
            St.length = 0,
            Sp(),
            fo = !1,
            Pu = null,
            (St.length || Qr.length) && Op()
        }
    }
    function fy(e, t, ...n) {
        if (e.isUnmounted)
            return;
        const s = e.vnode.props || Je;
        let r = n;
        const i = t.startsWith("update:")
          , o = i && t.slice(7);
        if (o && o in s) {
            const c = `${o === "modelValue" ? "model" : o}Modifiers`
              , {number: f, trim: d} = s[c] || Je;
            d && (r = n.map(h=>dt(h) ? h.trim() : h)),
            f && (r = n.map(kg))
        }
        let a, l = s[a = Yl(t)] || s[a = Yl(Fn(t))];
        !l && i && (l = s[a = Yl(Ri(t))]),
        l && sn(l, e, 6, r);
        const u = s[a + "Once"];
        if (u) {
            if (!e.emitted)
                e.emitted = {};
            else if (e.emitted[a])
                return;
            e.emitted[a] = !0,
            sn(u, e, 6, r)
        }
    }
    function Ep(e, t, n=!1) {
        const s = t.emitsCache
          , r = s.get(e);
        if (r !== void 0)
            return r;
        const i = e.emits;
        let o = {}
          , a = !1;
        if (!we(e)) {
            const l = u=>{
                const c = Ep(u, t, !0);
                c && (a = !0,
                ft(o, c))
            }
            ;
            !n && t.mixins.length && t.mixins.forEach(l),
            e.extends && l(e.extends),
            e.mixins && e.mixins.forEach(l)
        }
        return !i && !a ? (Ge(e) && s.set(e, null),
        null) : (de(i) ? i.forEach(l=>o[l] = null) : ft(o, i),
        Ge(e) && s.set(e, o),
        o)
    }
    function _l(e, t) {
        return !e || !ll(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
        ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, Ri(t)) || ze(e, t))
    }
    let mt = null
      , gl = null;
    function $a(e) {
        const t = mt;
        return mt = e,
        gl = e && e.type.__scopeId || null,
        t
    }
    function ds(e) {
        gl = e
    }
    function hs() {
        gl = null
    }
    function ie(e, t=mt, n) {
        if (!t || e._n)
            return e;
        const s = (...r)=>{
            s._d && ud(-1);
            const i = $a(t);
            let o;
            try {
                o = e(...r)
            } finally {
                $a(i),
                s._d && ud(1)
            }
            return o
        }
        ;
        return s._n = !0,
        s._c = !0,
        s._d = !0,
        s
    }
    function Kl(e) {
        const {type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: g, inheritAttrs: v} = e
          , C = $a(e);
        let M, k;
        try {
            if (n.shapeFlag & 4) {
                const U = r || s
                  , G = U;
                M = $n(u.call(G, U, c, f, h, d, g)),
                k = a
            } else {
                const U = t;
                M = $n(U.length > 1 ? U(f, {
                    attrs: a,
                    slots: o,
                    emit: l
                }) : U(f, null)),
                k = t.props ? a : dy(a)
            }
        } catch (U) {
            no.length = 0,
            ml(U, e, 1),
            M = Z(Ut)
        }
        let w = M;
        if (k && v !== !1) {
            const U = Object.keys(k)
              , {shapeFlag: G} = w;
            U.length && G & 7 && (i && U.some(vu) && (k = hy(k, i)),
            w = Zs(w, k, !1, !0))
        }
        return n.dirs && (w = Zs(w, null, !1, !0),
        w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs),
        n.transition && (w.transition = n.transition),
        M = w,
        $a(C),
        M
    }
    const dy = e=>{
        let t;
        for (const n in e)
            (n === "class" || n === "style" || ll(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    }
      , hy = (e,t)=>{
        const n = {};
        for (const s in e)
            (!vu(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
        return n
    }
    ;
    function py(e, t, n) {
        const {props: s, children: r, component: i} = e
          , {props: o, children: a, patchFlag: l} = t
          , u = i.emitsOptions;
        if (t.dirs || t.transition)
            return !0;
        if (n && l >= 0) {
            if (l & 1024)
                return !0;
            if (l & 16)
                return s ? Jf(s, o, u) : !!o;
            if (l & 8) {
                const c = t.dynamicProps;
                for (let f = 0; f < c.length; f++) {
                    const d = c[f];
                    if (o[d] !== s[d] && !_l(u, d))
                        return !0
                }
            }
        } else
            return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? Jf(s, o, u) : !0 : !!o;
        return !1
    }
    function Jf(e, t, n) {
        const s = Object.keys(t);
        if (s.length !== Object.keys(e).length)
            return !0;
        for (let r = 0; r < s.length; r++) {
            const i = s[r];
            if (t[i] !== e[i] && !_l(n, i))
                return !0
        }
        return !1
    }
    function my({vnode: e, parent: t}, n) {
        for (; t; ) {
            const s = t.subTree;
            if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
            s === e)
                (e = t.vnode).el = n,
                t = t.parent;
            else
                break
        }
    }
    const _y = "components";
    function $u(e, t) {
        return yy(_y, e, !0, t) || e
    }
    const gy = Symbol.for("v-ndc");
    function yy(e, t, n=!0, s=!1) {
        const r = mt || yt;
        if (r) {
            const i = r.type;
            {
                const a = cv(i, !1);
                if (a && (a === t || a === Fn(t) || a === fl(Fn(t))))
                    return i
            }
            const o = Xf(r[e] || i[e], t) || Xf(r.appContext[e], t);
            return !o && s ? i : o
        }
    }
    function Xf(e, t) {
        return e && (e[t] || e[Fn(t)] || e[fl(Fn(t))])
    }
    const vy = e=>e.__isSuspense;
    function by(e, t) {
        t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : cy(e)
    }
    function yl(e, t, n=yt, s=!1) {
        if (n) {
            const r = n[e] || (n[e] = [])
              , i = t.__weh || (t.__weh = (...o)=>{
                er();
                const a = Yo(n)
                  , l = sn(t, n, e, o);
                return a(),
                tr(),
                l
            }
            );
            return s ? r.unshift(i) : r.push(i),
            i
        }
    }
    const ps = e=>(t,n=yt)=>{
        (!xl || e === "sp") && yl(e, (...s)=>t(...s), n)
    }
      , wy = ps("bm")
      , Wo = ps("m")
      , xy = ps("bu")
      , Cp = ps("u")
      , Tp = ps("bum")
      , Du = ps("um")
      , My = ps("sp")
      , ky = ps("rtg")
      , Sy = ps("rtc");
    function Oy(e, t=yt) {
        yl("ec", e, t)
    }
    function Da(e, t) {
        if (mt === null)
            return e;
        const n = Ml(mt)
          , s = e.dirs || (e.dirs = []);
        for (let r = 0; r < t.length; r++) {
            let[i,o,a,l=Je] = t[r];
            i && (we(i) && (i = {
                mounted: i,
                updated: i
            }),
            i.deep && Ts(o),
            s.push({
                dir: i,
                instance: n,
                value: o,
                oldValue: void 0,
                arg: a,
                modifiers: l
            }))
        }
        return e
    }
    function rr(e, t, n, s) {
        const r = e.dirs
          , i = t && t.dirs;
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            i && (a.oldValue = i[o].value);
            let l = a.dir[s];
            l && (er(),
            sn(l, n, 8, [e.el, a, e, t]),
            tr())
        }
    }
    function xt(e, t, n, s) {
        let r;
        const i = n;
        if (de(e) || dt(e)) {
            r = new Array(e.length);
            for (let o = 0, a = e.length; o < a; o++)
                r[o] = t(e[o], o, void 0, i)
        } else if (typeof e == "number") {
            r = new Array(e);
            for (let o = 0; o < e; o++)
                r[o] = t(o + 1, o, void 0, i)
        } else if (Ge(e))
            if (e[Symbol.iterator])
                r = Array.from(e, (o,a)=>t(o, a, void 0, i));
            else {
                const o = Object.keys(e);
                r = new Array(o.length);
                for (let a = 0, l = o.length; a < l; a++) {
                    const u = o[a];
                    r[a] = t(e[u], u, a, i)
                }
            }
        else
            r = [];
        return r
    }
    /*! #__NO_SIDE_EFFECTS__ */
    function Pe(e, t) {
        return we(e) ? ft({
            name: e.name
        }, t, {
            setup: e
        }) : e
    }
    const eo = e=>!!e.type.__asyncLoader;
    function Lr(e, t, n={}, s, r) {
        if (mt.isCE || mt.parent && eo(mt.parent) && mt.parent.isCE)
            return Z("slot", n, s);
        let i = e[t];
        i && i._c && (i._d = !1),
        E();
        const o = i && Rp(i(n))
          , a = ve(qe, {
            key: n.key || o && o.key || `_${t}`
        }, o || [], o && e._ === 1 ? 64 : -2);
        return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
        i && i._c && (i._d = !0),
        a
    }
    function Rp(e) {
        return e.some(t=>za(t) ? !(t.type === Ut || t.type === qe && !Rp(t.children)) : !0) ? e : null
    }
    const kc = e=>e ? em(e) ? Ml(e) : kc(e.parent) : null
      , to = ft(Object.create(null), {
        $: e=>e,
        $el: e=>e.vnode.el,
        $data: e=>e.data,
        $props: e=>e.props,
        $attrs: e=>e.attrs,
        $slots: e=>e.slots,
        $refs: e=>e.refs,
        $parent: e=>kc(e.parent),
        $root: e=>kc(e.root),
        $emit: e=>e.emit,
        $options: e=>Lu(e),
        $forceUpdate: e=>e.f || (e.f = ()=>{
            e.effect.dirty = !0,
            Au(e.update)
        }
        ),
        $nextTick: e=>e.n || (e.n = Ho.bind(e.proxy)),
        $watch: e=>Yy.bind(e)
    })
      , Gl = (e,t)=>e !== Je && !e.__isScriptSetup && ze(e, t)
      , Ey = {
        get({_: e}, t) {
            if (t === "__v_skip")
                return !0;
            const {ctx: n, setupState: s, data: r, props: i, accessCache: o, type: a, appContext: l} = e;
            let u;
            if (t[0] !== "$") {
                const h = o[t];
                if (h !== void 0)
                    switch (h) {
                    case 1:
                        return s[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                    }
                else {
                    if (Gl(s, t))
                        return o[t] = 1,
                        s[t];
                    if (r !== Je && ze(r, t))
                        return o[t] = 2,
                        r[t];
                    if ((u = e.propsOptions[0]) && ze(u, t))
                        return o[t] = 3,
                        i[t];
                    if (n !== Je && ze(n, t))
                        return o[t] = 4,
                        n[t];
                    Sc && (o[t] = 0)
                }
            }
            const c = to[t];
            let f, d;
            if (c)
                return t === "$attrs" && Bt(e.attrs, "get", ""),
                c(e);
            if ((f = a.__cssModules) && (f = f[t]))
                return f;
            if (n !== Je && ze(n, t))
                return o[t] = 4,
                n[t];
            if (d = l.config.globalProperties,
            ze(d, t))
                return d[t]
        },
        set({_: e}, t, n) {
            const {data: s, setupState: r, ctx: i} = e;
            return Gl(r, t) ? (r[t] = n,
            !0) : s !== Je && ze(s, t) ? (s[t] = n,
            !0) : ze(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
            !0)
        },
        has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i}}, o) {
            let a;
            return !!n[o] || e !== Je && ze(e, o) || Gl(t, o) || (a = i[0]) && ze(a, o) || ze(s, o) || ze(to, o) || ze(r.config.globalProperties, o)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ze(n, "value") && this.set(e, t, n.value, null),
            Reflect.defineProperty(e, t, n)
        }
    };
    function ed(e) {
        return de(e) ? e.reduce((t,n)=>(t[n] = null,
        t), {}) : e
    }
    let Sc = !0;
    function Cy(e) {
        const t = Lu(e)
          , n = e.proxy
          , s = e.ctx;
        Sc = !1,
        t.beforeCreate && td(t.beforeCreate, e, "bc");
        const {data: r, computed: i, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: g, activated: v, deactivated: C, beforeDestroy: M, beforeUnmount: k, destroyed: w, unmounted: U, render: G, renderTracked: I, renderTriggered: j, errorCaptured: D, serverPrefetch: R, expose: Q, inheritAttrs: se, components: L, directives: re, filters: Ve} = t;
        if (u && Ty(u, s, null),
        o)
            for (const Fe in o) {
                const je = o[Fe];
                we(je) && (s[Fe] = je.bind(n))
            }
        if (r) {
            const Fe = r.call(n, n);
            Ge(Fe) && (e.data = ls(Fe))
        }
        if (Sc = !0,
        i)
            for (const Fe in i) {
                const je = i[Fe]
                  , Wn = we(je) ? je.bind(n, n) : we(je.get) ? je.get.bind(n, n) : nn
                  , gs = !we(je) && we(je.set) ? je.set.bind(n) : nn
                  , On = ye({
                    get: Wn,
                    set: gs
                });
                Object.defineProperty(s, Fe, {
                    enumerable: !0,
                    configurable: !0,
                    get: ()=>On.value,
                    set: Lt=>On.value = Lt
                })
            }
        if (a)
            for (const Fe in a)
                Pp(a[Fe], s, n, Fe);
        if (l) {
            const Fe = we(l) ? l.call(n) : l;
            Reflect.ownKeys(Fe).forEach(je=>{
                va(je, Fe[je])
            }
            )
        }
        c && td(c, e, "c");
        function Se(Fe, je) {
            de(je) ? je.forEach(Wn=>Fe(Wn.bind(n))) : je && Fe(je.bind(n))
        }
        if (Se(wy, f),
        Se(Wo, d),
        Se(xy, h),
        Se(Cp, g),
        Se(Zy, v),
        Se(Ky, C),
        Se(Oy, D),
        Se(Sy, I),
        Se(ky, j),
        Se(Tp, k),
        Se(Du, U),
        Se(My, R),
        de(Q))
            if (Q.length) {
                const Fe = e.exposed || (e.exposed = {});
                Q.forEach(je=>{
                    Object.defineProperty(Fe, je, {
                        get: ()=>n[je],
                        set: Wn=>n[je] = Wn
                    })
                }
                )
            } else
                e.exposed || (e.exposed = {});
        G && e.render === nn && (e.render = G),
        se != null && (e.inheritAttrs = se),
        L && (e.components = L),
        re && (e.directives = re)
    }
    function Ty(e, t, n=nn) {
        de(e) && (e = Oc(e));
        for (const s in e) {
            const r = e[s];
            let i;
            Ge(r) ? "default"in r ? i = Zt(r.from || s, r.default, !0) : i = Zt(r.from || s) : i = Zt(r),
            it(i) ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: ()=>i.value,
                set: o=>i.value = o
            }) : t[s] = i
        }
    }
    function td(e, t, n) {
        sn(de(e) ? e.map(s=>s.bind(t.proxy)) : e.bind(t.proxy), t, n)
    }
    function Pp(e, t, n, s) {
        const r = s.includes(".") ? Vp(n, s) : ()=>n[s];
        if (dt(e)) {
            const i = t[e];
            we(i) && ht(r, i)
        } else if (we(e))
            ht(r, e.bind(n));
        else if (Ge(e))
            if (de(e))
                e.forEach(i=>Pp(i, t, n, s));
            else {
                const i = we(e.handler) ? e.handler.bind(n) : t[e.handler];
                we(i) && ht(r, i, e)
            }
    }
    function Lu(e) {
        const t = e.type
          , {mixins: n, extends: s} = t
          , {mixins: r, optionsCache: i, config: {optionMergeStrategies: o}} = e.appContext
          , a = i.get(t);
        let l;
        return a ? l = a : !r.length && !n && !s ? l = t : (l = {},
        r.length && r.forEach(u=>La(l, u, o, !0)),
        La(l, t, o)),
        Ge(t) && i.set(t, l),
        l
    }
    function La(e, t, n, s=!1) {
        const {mixins: r, extends: i} = t;
        i && La(e, i, n, !0),
        r && r.forEach(o=>La(e, o, n, !0));
        for (const o in t)
            if (!(s && o === "expose")) {
                const a = Ry[o] || n && n[o];
                e[o] = a ? a(e[o], t[o]) : t[o]
            }
        return e
    }
    const Ry = {
        data: nd,
        props: sd,
        emits: sd,
        methods: Ki,
        computed: Ki,
        beforeCreate: Tt,
        created: Tt,
        beforeMount: Tt,
        mounted: Tt,
        beforeUpdate: Tt,
        updated: Tt,
        beforeDestroy: Tt,
        beforeUnmount: Tt,
        destroyed: Tt,
        unmounted: Tt,
        activated: Tt,
        deactivated: Tt,
        errorCaptured: Tt,
        serverPrefetch: Tt,
        components: Ki,
        directives: Ki,
        watch: Ay,
        provide: nd,
        inject: Py
    };
    function nd(e, t) {
        return t ? e ? function() {
            return ft(we(e) ? e.call(this, this) : e, we(t) ? t.call(this, this) : t)
        }
        : t : e
    }
    function Py(e, t) {
        return Ki(Oc(e), Oc(t))
    }
    function Oc(e) {
        if (de(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++)
                t[e[n]] = e[n];
            return t
        }
        return e
    }
    function Tt(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }
    function Ki(e, t) {
        return e ? ft(Object.create(null), e, t) : t
    }
    function sd(e, t) {
        return e ? de(e) && de(t) ? [...new Set([...e, ...t])] : ft(Object.create(null), ed(e), ed(t ?? {})) : t
    }
    function Ay(e, t) {
        if (!e)
            return t;
        if (!t)
            return e;
        const n = ft(Object.create(null), e);
        for (const s in t)
            n[s] = Tt(e[s], t[s]);
        return n
    }
    function Ap() {
        return {
            app: null,
            config: {
                isNativeTag: vg,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }
    let $y = 0;
    function Dy(e, t) {
        return function(s, r=null) {
            we(s) || (s = ft({}, s)),
            r != null && !Ge(r) && (r = null);
            const i = Ap()
              , o = new WeakSet;
            let a = !1;
            const l = i.app = {
                _uid: $y++,
                _component: s,
                _props: r,
                _container: null,
                _context: i,
                _instance: null,
                version: fv,
                get config() {
                    return i.config
                },
                set config(u) {},
                use(u, ...c) {
                    return o.has(u) || (u && we(u.install) ? (o.add(u),
                    u.install(l, ...c)) : we(u) && (o.add(u),
                    u(l, ...c))),
                    l
                },
                mixin(u) {
                    return i.mixins.includes(u) || i.mixins.push(u),
                    l
                },
                component(u, c) {
                    return c ? (i.components[u] = c,
                    l) : i.components[u]
                },
                directive(u, c) {
                    return c ? (i.directives[u] = c,
                    l) : i.directives[u]
                },
                mount(u, c, f) {
                    if (!a) {
                        const d = Z(s, r);
                        return d.appContext = i,
                        f === !0 ? f = "svg" : f === !1 && (f = void 0),
                        c && t ? t(d, u) : e(d, u, f),
                        a = !0,
                        l._container = u,
                        u.__vue_app__ = l,
                        Ml(d.component)
                    }
                },
                unmount() {
                    a && (e(null, l._container),
                    delete l._container.__vue_app__)
                },
                provide(u, c) {
                    return i.provides[u] = c,
                    l
                },
                runWithContext(u) {
                    const c = Jr;
                    Jr = l;
                    try {
                        return u()
                    } finally {
                        Jr = c
                    }
                }
            };
            return l
        }
    }
    let Jr = null;
    function va(e, t) {
        if (yt) {
            let n = yt.provides;
            const s = yt.parent && yt.parent.provides;
            s === n && (n = yt.provides = Object.create(s)),
            n[e] = t
        }
    }
    function Zt(e, t, n=!1) {
        const s = yt || mt;
        if (s || Jr) {
            const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Jr._context.provides;
            if (r && e in r)
                return r[e];
            if (arguments.length > 1)
                return n && we(t) ? t.call(s && s.proxy) : t
        }
    }
    function $p() {
        return !!(yt || mt || Jr)
    }
    const Dp = {}
      , Lp = ()=>Object.create(Dp)
      , zp = e=>Object.getPrototypeOf(e) === Dp;
    function Ly(e, t, n, s=!1) {
        const r = {}
          , i = Lp();
        e.propsDefaults = Object.create(null),
        Np(e, t, r, i);
        for (const o in e.propsOptions[0])
            o in r || (r[o] = void 0);
        n ? e.props = s ? r : gp(r) : e.type.props ? e.props = r : e.props = i,
        e.attrs = i
    }
    function zy(e, t, n, s) {
        const {props: r, attrs: i, vnode: {patchFlag: o}} = e
          , a = De(r)
          , [l] = e.propsOptions;
        let u = !1;
        if ((s || o > 0) && !(o & 16)) {
            if (o & 8) {
                const c = e.vnode.dynamicProps;
                for (let f = 0; f < c.length; f++) {
                    let d = c[f];
                    if (_l(e.emitsOptions, d))
                        continue;
                    const h = t[d];
                    if (l)
                        if (ze(i, d))
                            h !== i[d] && (i[d] = h,
                            u = !0);
                        else {
                            const g = Fn(d);
                            r[g] = Ec(l, a, g, h, e, !1)
                        }
                    else
                        h !== i[d] && (i[d] = h,
                        u = !0)
                }
            }
        } else {
            Np(e, t, r, i) && (u = !0);
            let c;
            for (const f in a)
                (!t || !ze(t, f) && ((c = Ri(f)) === f || !ze(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (r[f] = Ec(l, a, f, void 0, e, !0)) : delete r[f]);
            if (i !== a)
                for (const f in i)
                    (!t || !ze(t, f)) && (delete i[f],
                    u = !0)
        }
        u && ss(e.attrs, "set", "")
    }
    function Np(e, t, n, s) {
        const [r,i] = e.propsOptions;
        let o = !1, a;
        if (t)
            for (let l in t) {
                if (Xi(l))
                    continue;
                const u = t[l];
                let c;
                r && ze(r, c = Fn(l)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : _l(e.emitsOptions, l) || (!(l in s) || u !== s[l]) && (s[l] = u,
                o = !0)
            }
        if (i) {
            const l = De(n)
              , u = a || Je;
            for (let c = 0; c < i.length; c++) {
                const f = i[c];
                n[f] = Ec(r, l, f, u[f], e, !ze(u, f))
            }
        }
        return o
    }
    function Ec(e, t, n, s, r, i) {
        const o = e[n];
        if (o != null) {
            const a = ze(o, "default");
            if (a && s === void 0) {
                const l = o.default;
                if (o.type !== Function && !o.skipFactory && we(l)) {
                    const {propsDefaults: u} = r;
                    if (n in u)
                        s = u[n];
                    else {
                        const c = Yo(r);
                        s = u[n] = l.call(null, t),
                        c()
                    }
                } else
                    s = l
            }
            o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === Ri(n)) && (s = !0))
        }
        return s
    }
    function Ip(e, t, n=!1) {
        const s = t.propsCache
          , r = s.get(e);
        if (r)
            return r;
        const i = e.props
          , o = {}
          , a = [];
        let l = !1;
        if (!we(e)) {
            const c = f=>{
                l = !0;
                const [d,h] = Ip(f, t, !0);
                ft(o, d),
                h && a.push(...h)
            }
            ;
            !n && t.mixins.length && t.mixins.forEach(c),
            e.extends && c(e.extends),
            e.mixins && e.mixins.forEach(c)
        }
        if (!i && !l)
            return Ge(e) && s.set(e, Kr),
            Kr;
        if (de(i))
            for (let c = 0; c < i.length; c++) {
                const f = Fn(i[c]);
                rd(f) && (o[f] = Je)
            }
        else if (i)
            for (const c in i) {
                const f = Fn(c);
                if (rd(f)) {
                    const d = i[c]
                      , h = o[f] = de(d) || we(d) ? {
                        type: d
                    } : ft({}, d);
                    if (h) {
                        const g = ad(Boolean, h.type)
                          , v = ad(String, h.type);
                        h[0] = g > -1,
                        h[1] = v < 0 || g < v,
                        (g > -1 || ze(h, "default")) && a.push(f)
                    }
                }
            }
        const u = [o, a];
        return Ge(e) && s.set(e, u),
        u
    }
    function rd(e) {
        return e[0] !== "$" && !Xi(e)
    }
    function id(e) {
        return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
    }
    function od(e, t) {
        return id(e) === id(t)
    }
    function ad(e, t) {
        return de(t) ? t.findIndex(n=>od(n, e)) : we(t) && od(t, e) ? 0 : -1
    }
    const Fp = e=>e[0] === "_" || e === "$stable"
      , zu = e=>de(e) ? e.map($n) : [$n(e)]
      , Ny = (e,t,n)=>{
        if (t._n)
            return t;
        const s = ie((...r)=>zu(t(...r)), n);
        return s._c = !1,
        s
    }
      , jp = (e,t,n)=>{
        const s = e._ctx;
        for (const r in e) {
            if (Fp(r))
                continue;
            const i = e[r];
            if (we(i))
                t[r] = Ny(r, i, s);
            else if (i != null) {
                const o = zu(i);
                t[r] = ()=>o
            }
        }
    }
      , Up = (e,t)=>{
        const n = zu(t);
        e.slots.default = ()=>n
    }
      , Iy = (e,t)=>{
        const n = e.slots = Lp();
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (ft(n, t),
            Xh(n, "_", s, !0)) : jp(t, n)
        } else
            t && Up(e, t)
    }
      , Fy = (e,t,n)=>{
        const {vnode: s, slots: r} = e;
        let i = !0
          , o = Je;
        if (s.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? i = !1 : (ft(r, t),
            !n && a === 1 && delete r._) : (i = !t.$stable,
            jp(t, r)),
            o = t
        } else
            t && (Up(e, t),
            o = {
                default: 1
            });
        if (i)
            for (const a in r)
                !Fp(a) && o[a] == null && delete r[a]
    }
    ;
    function Cc(e, t, n, s, r=!1) {
        if (de(e)) {
            e.forEach((d,h)=>Cc(d, t && (de(t) ? t[h] : t), n, s, r));
            return
        }
        if (eo(s) && !r)
            return;
        const i = s.shapeFlag & 4 ? Ml(s.component) : s.el
          , o = r ? null : i
          , {i: a, r: l} = e
          , u = t && t.r
          , c = a.refs === Je ? a.refs = {} : a.refs
          , f = a.setupState;
        if (u != null && u !== l && (dt(u) ? (c[u] = null,
        ze(f, u) && (f[u] = null)) : it(u) && (u.value = null)),
        we(l))
            Hs(l, a, 12, [o, c]);
        else {
            const d = dt(l)
              , h = it(l);
            if (d || h) {
                const g = ()=>{
                    if (e.f) {
                        const v = d ? ze(f, l) ? f[l] : c[l] : l.value;
                        r ? de(v) && bu(v, i) : de(v) ? v.includes(i) || v.push(i) : d ? (c[l] = [i],
                        ze(f, l) && (f[l] = c[l])) : (l.value = [i],
                        e.k && (c[e.k] = l.value))
                    } else
                        d ? (c[l] = o,
                        ze(f, l) && (f[l] = o)) : h && (l.value = o,
                        e.k && (c[e.k] = o))
                }
                ;
                o ? (g.id = -1,
                zt(g, n)) : g()
            }
        }
    }
    const zt = by;
    function jy(e) {
        return Uy(e)
    }
    function Uy(e, t) {
        const n = ep();
        n.__VUE__ = !0;
        const {insert: s, remove: r, patchProp: i, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h=nn, insertStaticContent: g} = e
          , v = (p,_,x,A=null,T=null,q=null,H=void 0,F=null,B=!!_.dynamicChildren)=>{
            if (p === _)
                return;
            p && !cr(p, _) && (A = P(p),
            Lt(p, T, q, !0),
            p = null),
            _.patchFlag === -2 && (B = !1,
            _.dynamicChildren = null);
            const {type: $, ref: ne, shapeFlag: pe} = _;
            switch ($) {
            case bl:
                C(p, _, x, A);
                break;
            case Ut:
                M(p, _, x, A);
                break;
            case ba:
                p == null && k(_, x, A, H);
                break;
            case qe:
                L(p, _, x, A, T, q, H, F, B);
                break;
            default:
                pe & 1 ? G(p, _, x, A, T, q, H, F, B) : pe & 6 ? re(p, _, x, A, T, q, H, F, B) : (pe & 64 || pe & 128) && $.process(p, _, x, A, T, q, H, F, B, oe)
            }
            ne != null && T && Cc(ne, p && p.ref, q, _ || p, !_)
        }
          , C = (p,_,x,A)=>{
            if (p == null)
                s(_.el = a(_.children), x, A);
            else {
                const T = _.el = p.el;
                _.children !== p.children && u(T, _.children)
            }
        }
          , M = (p,_,x,A)=>{
            p == null ? s(_.el = l(_.children || ""), x, A) : _.el = p.el
        }
          , k = (p,_,x,A)=>{
            [p.el,p.anchor] = g(p.children, _, x, A, p.el, p.anchor)
        }
          , w = ({el: p, anchor: _},x,A)=>{
            let T;
            for (; p && p !== _; )
                T = d(p),
                s(p, x, A),
                p = T;
            s(_, x, A)
        }
          , U = ({el: p, anchor: _})=>{
            let x;
            for (; p && p !== _; )
                x = d(p),
                r(p),
                p = x;
            r(_)
        }
          , G = (p,_,x,A,T,q,H,F,B)=>{
            _.type === "svg" ? H = "svg" : _.type === "math" && (H = "mathml"),
            p == null ? I(_, x, A, T, q, H, F, B) : R(p, _, T, q, H, F, B)
        }
          , I = (p,_,x,A,T,q,H,F)=>{
            let B, $;
            const {props: ne, shapeFlag: pe, transition: ue, dirs: be} = p;
            if (B = p.el = o(p.type, q, ne && ne.is, ne),
            pe & 8 ? c(B, p.children) : pe & 16 && D(p.children, B, null, A, T, Ql(p, q), H, F),
            be && rr(p, null, A, "created"),
            j(B, p, p.scopeId, H, A),
            ne) {
                for (const Qe in ne)
                    Qe !== "value" && !Xi(Qe) && i(B, Qe, null, ne[Qe], q, p.children, A, T, Mt);
                "value"in ne && i(B, "value", null, ne.value, q),
                ($ = ne.onVnodeBeforeMount) && Cn($, A, p)
            }
            be && rr(p, null, A, "beforeMount");
            const Te = qy(T, ue);
            Te && ue.beforeEnter(B),
            s(B, _, x),
            (($ = ne && ne.onVnodeMounted) || Te || be) && zt(()=>{
                $ && Cn($, A, p),
                Te && ue.enter(B),
                be && rr(p, null, A, "mounted")
            }
            , T)
        }
          , j = (p,_,x,A,T)=>{
            if (x && h(p, x),
            A)
                for (let q = 0; q < A.length; q++)
                    h(p, A[q]);
            if (T) {
                let q = T.subTree;
                if (_ === q) {
                    const H = T.vnode;
                    j(p, H, H.scopeId, H.slotScopeIds, T.parent)
                }
            }
        }
          , D = (p,_,x,A,T,q,H,F,B=0)=>{
            for (let $ = B; $ < p.length; $++) {
                const ne = p[$] = F ? Es(p[$]) : $n(p[$]);
                v(null, ne, _, x, A, T, q, H, F)
            }
        }
          , R = (p,_,x,A,T,q,H)=>{
            const F = _.el = p.el;
            let {patchFlag: B, dynamicChildren: $, dirs: ne} = _;
            B |= p.patchFlag & 16;
            const pe = p.props || Je
              , ue = _.props || Je;
            let be;
            if (x && ir(x, !1),
            (be = ue.onVnodeBeforeUpdate) && Cn(be, x, _, p),
            ne && rr(_, p, x, "beforeUpdate"),
            x && ir(x, !0),
            $ ? Q(p.dynamicChildren, $, F, x, A, Ql(_, T), q) : H || je(p, _, F, null, x, A, Ql(_, T), q, !1),
            B > 0) {
                if (B & 16)
                    se(F, _, pe, ue, x, A, T);
                else if (B & 2 && pe.class !== ue.class && i(F, "class", null, ue.class, T),
                B & 4 && i(F, "style", pe.style, ue.style, T),
                B & 8) {
                    const Te = _.dynamicProps;
                    for (let Qe = 0; Qe < Te.length; Qe++) {
                        const Ue = Te[Qe]
                          , gt = pe[Ue]
                          , un = ue[Ue];
                        (un !== gt || Ue === "value") && i(F, Ue, gt, un, T, p.children, x, A, Mt)
                    }
                }
                B & 1 && p.children !== _.children && c(F, _.children)
            } else
                !H && $ == null && se(F, _, pe, ue, x, A, T);
            ((be = ue.onVnodeUpdated) || ne) && zt(()=>{
                be && Cn(be, x, _, p),
                ne && rr(_, p, x, "updated")
            }
            , A)
        }
          , Q = (p,_,x,A,T,q,H)=>{
            for (let F = 0; F < _.length; F++) {
                const B = p[F]
                  , $ = _[F]
                  , ne = B.el && (B.type === qe || !cr(B, $) || B.shapeFlag & 70) ? f(B.el) : x;
                v(B, $, ne, null, A, T, q, H, !0)
            }
        }
          , se = (p,_,x,A,T,q,H)=>{
            if (x !== A) {
                if (x !== Je)
                    for (const F in x)
                        !Xi(F) && !(F in A) && i(p, F, x[F], null, H, _.children, T, q, Mt);
                for (const F in A) {
                    if (Xi(F))
                        continue;
                    const B = A[F]
                      , $ = x[F];
                    B !== $ && F !== "value" && i(p, F, $, B, H, _.children, T, q, Mt)
                }
                "value"in A && i(p, "value", x.value, A.value, H)
            }
        }
          , L = (p,_,x,A,T,q,H,F,B)=>{
            const $ = _.el = p ? p.el : a("")
              , ne = _.anchor = p ? p.anchor : a("");
            let {patchFlag: pe, dynamicChildren: ue, slotScopeIds: be} = _;
            be && (F = F ? F.concat(be) : be),
            p == null ? (s($, x, A),
            s(ne, x, A),
            D(_.children || [], x, ne, T, q, H, F, B)) : pe > 0 && pe & 64 && ue && p.dynamicChildren ? (Q(p.dynamicChildren, ue, x, T, q, H, F),
            (_.key != null || T && _ === T.subTree) && qp(p, _, !0)) : je(p, _, x, ne, T, q, H, F, B)
        }
          , re = (p,_,x,A,T,q,H,F,B)=>{
            _.slotScopeIds = F,
            p == null ? _.shapeFlag & 512 ? T.ctx.activate(_, x, A, H, B) : Ve(_, x, A, T, q, H, B) : Ze(p, _, B)
        }
          , Ve = (p,_,x,A,T,q,H)=>{
            const F = p.component = rv(p, A, T);
            if (vl(p) && (F.ctx.renderer = oe),
            iv(F),
            F.asyncDep) {
                if (T && T.registerDep(F, Se, H),
                !p.el) {
                    const B = F.subTree = Z(Ut);
                    M(null, B, _, x)
                }
            } else
                Se(F, p, _, x, T, q, H)
        }
          , Ze = (p,_,x)=>{
            const A = _.component = p.component;
            if (py(p, _, x))
                if (A.asyncDep && !A.asyncResolved) {
                    Fe(A, _, x);
                    return
                } else
                    A.next = _,
                    ly(A.update),
                    A.effect.dirty = !0,
                    A.update();
            else
                _.el = p.el,
                A.vnode = _
        }
          , Se = (p,_,x,A,T,q,H)=>{
            const F = ()=>{
                if (p.isMounted) {
                    let {next: ne, bu: pe, u: ue, parent: be, vnode: Te} = p;
                    {
                        const Fr = Bp(p);
                        if (Fr) {
                            ne && (ne.el = Te.el,
                            Fe(p, ne, H)),
                            Fr.asyncDep.then(()=>{
                                p.isUnmounted || F()
                            }
                            );
                            return
                        }
                    }
                    let Qe = ne, Ue;
                    ir(p, !1),
                    ne ? (ne.el = Te.el,
                    Fe(p, ne, H)) : ne = Te,
                    pe && ga(pe),
                    (Ue = ne.props && ne.props.onVnodeBeforeUpdate) && Cn(Ue, be, ne, Te),
                    ir(p, !0);
                    const gt = Kl(p)
                      , un = p.subTree;
                    p.subTree = gt,
                    v(un, gt, f(un.el), P(un), p, T, q),
                    ne.el = gt.el,
                    Qe === null && my(p, gt.el),
                    ue && zt(ue, T),
                    (Ue = ne.props && ne.props.onVnodeUpdated) && zt(()=>Cn(Ue, be, ne, Te), T)
                } else {
                    let ne;
                    const {el: pe, props: ue} = _
                      , {bm: be, m: Te, parent: Qe} = p
                      , Ue = eo(_);
                    if (ir(p, !1),
                    be && ga(be),
                    !Ue && (ne = ue && ue.onVnodeBeforeMount) && Cn(ne, Qe, _),
                    ir(p, !0),
                    pe && st) {
                        const gt = ()=>{
                            p.subTree = Kl(p),
                            st(pe, p.subTree, p, T, null)
                        }
                        ;
                        Ue ? _.type.__asyncLoader().then(()=>!p.isUnmounted && gt()) : gt()
                    } else {
                        const gt = p.subTree = Kl(p);
                        v(null, gt, x, A, p, T, q),
                        _.el = gt.el
                    }
                    if (Te && zt(Te, T),
                    !Ue && (ne = ue && ue.onVnodeMounted)) {
                        const gt = _;
                        zt(()=>Cn(ne, Qe, gt), T)
                    }
                    (_.shapeFlag & 256 || Qe && eo(Qe.vnode) && Qe.vnode.shapeFlag & 256) && p.a && zt(p.a, T),
                    p.isMounted = !0,
                    _ = x = A = null
                }
            }
              , B = p.effect = new Mu(F,nn,()=>Au($),p.scope)
              , $ = p.update = ()=>{
                B.dirty && B.run()
            }
            ;
            $.id = p.uid,
            ir(p, !0),
            $()
        }
          , Fe = (p,_,x)=>{
            _.component = p;
            const A = p.vnode.props;
            p.vnode = _,
            p.next = null,
            zy(p, _.props, A, x),
            Fy(p, _.children, x),
            er(),
            Qf(p),
            tr()
        }
          , je = (p,_,x,A,T,q,H,F,B=!1)=>{
            const $ = p && p.children
              , ne = p ? p.shapeFlag : 0
              , pe = _.children
              , {patchFlag: ue, shapeFlag: be} = _;
            if (ue > 0) {
                if (ue & 128) {
                    gs($, pe, x, A, T, q, H, F, B);
                    return
                } else if (ue & 256) {
                    Wn($, pe, x, A, T, q, H, F, B);
                    return
                }
            }
            be & 8 ? (ne & 16 && Mt($, T, q),
            pe !== $ && c(x, pe)) : ne & 16 ? be & 16 ? gs($, pe, x, A, T, q, H, F, B) : Mt($, T, q, !0) : (ne & 8 && c(x, ""),
            be & 16 && D(pe, x, A, T, q, H, F, B))
        }
          , Wn = (p,_,x,A,T,q,H,F,B)=>{
            p = p || Kr,
            _ = _ || Kr;
            const $ = p.length
              , ne = _.length
              , pe = Math.min($, ne);
            let ue;
            for (ue = 0; ue < pe; ue++) {
                const be = _[ue] = B ? Es(_[ue]) : $n(_[ue]);
                v(p[ue], be, x, null, T, q, H, F, B)
            }
            $ > ne ? Mt(p, T, q, !0, !1, pe) : D(_, x, A, T, q, H, F, B, pe)
        }
          , gs = (p,_,x,A,T,q,H,F,B)=>{
            let $ = 0;
            const ne = _.length;
            let pe = p.length - 1
              , ue = ne - 1;
            for (; $ <= pe && $ <= ue; ) {
                const be = p[$]
                  , Te = _[$] = B ? Es(_[$]) : $n(_[$]);
                if (cr(be, Te))
                    v(be, Te, x, null, T, q, H, F, B);
                else
                    break;
                $++
            }
            for (; $ <= pe && $ <= ue; ) {
                const be = p[pe]
                  , Te = _[ue] = B ? Es(_[ue]) : $n(_[ue]);
                if (cr(be, Te))
                    v(be, Te, x, null, T, q, H, F, B);
                else
                    break;
                pe--,
                ue--
            }
            if ($ > pe) {
                if ($ <= ue) {
                    const be = ue + 1
                      , Te = be < ne ? _[be].el : A;
                    for (; $ <= ue; )
                        v(null, _[$] = B ? Es(_[$]) : $n(_[$]), x, Te, T, q, H, F, B),
                        $++
                }
            } else if ($ > ue)
                for (; $ <= pe; )
                    Lt(p[$], T, q, !0),
                    $++;
            else {
                const be = $
                  , Te = $
                  , Qe = new Map;
                for ($ = Te; $ <= ue; $++) {
                    const Vt = _[$] = B ? Es(_[$]) : $n(_[$]);
                    Vt.key != null && Qe.set(Vt.key, $)
                }
                let Ue, gt = 0;
                const un = ue - Te + 1;
                let Fr = !1
                  , If = 0;
                const qi = new Array(un);
                for ($ = 0; $ < un; $++)
                    qi[$] = 0;
                for ($ = be; $ <= pe; $++) {
                    const Vt = p[$];
                    if (gt >= un) {
                        Lt(Vt, T, q, !0);
                        continue
                    }
                    let En;
                    if (Vt.key != null)
                        En = Qe.get(Vt.key);
                    else
                        for (Ue = Te; Ue <= ue; Ue++)
                            if (qi[Ue - Te] === 0 && cr(Vt, _[Ue])) {
                                En = Ue;
                                break
                            }
                    En === void 0 ? Lt(Vt, T, q, !0) : (qi[En - Te] = $ + 1,
                    En >= If ? If = En : Fr = !0,
                    v(Vt, _[En], x, null, T, q, H, F, B),
                    gt++)
                }
                const Ff = Fr ? By(qi) : Kr;
                for (Ue = Ff.length - 1,
                $ = un - 1; $ >= 0; $--) {
                    const Vt = Te + $
                      , En = _[Vt]
                      , jf = Vt + 1 < ne ? _[Vt + 1].el : A;
                    qi[$] === 0 ? v(null, En, x, jf, T, q, H, F, B) : Fr && (Ue < 0 || $ !== Ff[Ue] ? On(En, x, jf, 2) : Ue--)
                }
            }
        }
          , On = (p,_,x,A,T=null)=>{
            const {el: q, type: H, transition: F, children: B, shapeFlag: $} = p;
            if ($ & 6) {
                On(p.component.subTree, _, x, A);
                return
            }
            if ($ & 128) {
                p.suspense.move(_, x, A);
                return
            }
            if ($ & 64) {
                H.move(p, _, x, oe);
                return
            }
            if (H === qe) {
                s(q, _, x);
                for (let pe = 0; pe < B.length; pe++)
                    On(B[pe], _, x, A);
                s(p.anchor, _, x);
                return
            }
            if (H === ba) {
                w(p, _, x);
                return
            }
            if (A !== 2 && $ & 1 && F)
                if (A === 0)
                    F.beforeEnter(q),
                    s(q, _, x),
                    zt(()=>F.enter(q), T);
                else {
                    const {leave: pe, delayLeave: ue, afterLeave: be} = F
                      , Te = ()=>s(q, _, x)
                      , Qe = ()=>{
                        pe(q, ()=>{
                            Te(),
                            be && be()
                        }
                        )
                    }
                    ;
                    ue ? ue(q, Te, Qe) : Qe()
                }
            else
                s(q, _, x)
        }
          , Lt = (p,_,x,A=!1,T=!1)=>{
            const {type: q, props: H, ref: F, children: B, dynamicChildren: $, shapeFlag: ne, patchFlag: pe, dirs: ue, memoIndex: be} = p;
            if (F != null && Cc(F, null, x, p, !0),
            be != null && (_.renderCache[be] = void 0),
            ne & 256) {
                _.ctx.deactivate(p);
                return
            }
            const Te = ne & 1 && ue
              , Qe = !eo(p);
            let Ue;
            if (Qe && (Ue = H && H.onVnodeBeforeUnmount) && Cn(Ue, _, p),
            ne & 6)
                ia(p.component, x, A);
            else {
                if (ne & 128) {
                    p.suspense.unmount(x, A);
                    return
                }
                Te && rr(p, null, _, "beforeUnmount"),
                ne & 64 ? p.type.remove(p, _, x, T, oe, A) : $ && (q !== qe || pe > 0 && pe & 64) ? Mt($, _, x, !1, !0) : (q === qe && pe & 384 || !T && ne & 16) && Mt(B, _, x),
                A && Nr(p)
            }
            (Qe && (Ue = H && H.onVnodeUnmounted) || Te) && zt(()=>{
                Ue && Cn(Ue, _, p),
                Te && rr(p, null, _, "unmounted")
            }
            , x)
        }
          , Nr = p=>{
            const {type: _, el: x, anchor: A, transition: T} = p;
            if (_ === qe) {
                Ir(x, A);
                return
            }
            if (_ === ba) {
                U(p);
                return
            }
            const q = ()=>{
                r(x),
                T && !T.persisted && T.afterLeave && T.afterLeave()
            }
            ;
            if (p.shapeFlag & 1 && T && !T.persisted) {
                const {leave: H, delayLeave: F} = T
                  , B = ()=>H(x, q);
                F ? F(p.el, q, B) : B()
            } else
                q()
        }
          , Ir = (p,_)=>{
            let x;
            for (; p !== _; )
                x = d(p),
                r(p),
                p = x;
            r(_)
        }
          , ia = (p,_,x)=>{
            const {bum: A, scope: T, update: q, subTree: H, um: F, m: B, a: $} = p;
            ld(B),
            ld($),
            A && ga(A),
            T.stop(),
            q && (q.active = !1,
            Lt(H, p, _, x)),
            F && zt(F, _),
            zt(()=>{
                p.isUnmounted = !0
            }
            , _),
            _ && _.pendingBranch && !_.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === _.pendingId && (_.deps--,
            _.deps === 0 && _.resolve())
        }
          , Mt = (p,_,x,A=!1,T=!1,q=0)=>{
            for (let H = q; H < p.length; H++)
                Lt(p[H], _, x, A, T)
        }
          , P = p=>p.shapeFlag & 6 ? P(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el);
        let te = !1;
        const W = (p,_,x)=>{
            p == null ? _._vnode && Lt(_._vnode, null, null, !0) : v(_._vnode || null, p, _, null, null, null, x),
            te || (te = !0,
            Qf(),
            Sp(),
            te = !1),
            _._vnode = p
        }
          , oe = {
            p: v,
            um: Lt,
            m: On,
            r: Nr,
            mt: Ve,
            mc: D,
            pc: je,
            pbc: Q,
            n: P,
            o: e
        };
        let He, st;
        return {
            render: W,
            hydrate: He,
            createApp: Dy(W, He)
        }
    }
    function Ql({type: e, props: t}, n) {
        return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
    }
    function ir({effect: e, update: t}, n) {
        e.allowRecurse = t.allowRecurse = n
    }
    function qy(e, t) {
        return (!e || e && !e.pendingBranch) && t && !t.persisted
    }
    function qp(e, t, n=!1) {
        const s = e.children
          , r = t.children;
        if (de(s) && de(r))
            for (let i = 0; i < s.length; i++) {
                const o = s[i];
                let a = r[i];
                a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Es(r[i]),
                a.el = o.el),
                !n && a.patchFlag !== -2 && qp(o, a)),
                a.type === bl && (a.el = o.el)
            }
    }
    function By(e) {
        const t = e.slice()
          , n = [0];
        let s, r, i, o, a;
        const l = e.length;
        for (s = 0; s < l; s++) {
            const u = e[s];
            if (u !== 0) {
                if (r = n[n.length - 1],
                e[r] < u) {
                    t[s] = r,
                    n.push(s);
                    continue
                }
                for (i = 0,
                o = n.length - 1; i < o; )
                    a = i + o >> 1,
                    e[n[a]] < u ? i = a + 1 : o = a;
                u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]),
                n[i] = s)
            }
        }
        for (i = n.length,
        o = n[i - 1]; i-- > 0; )
            n[i] = o,
            o = t[o];
        return n
    }
    function Bp(e) {
        const t = e.subTree.component;
        if (t)
            return t.asyncDep && !t.asyncResolved ? t : Bp(t)
    }
    function ld(e) {
        if (e)
            for (let t = 0; t < e.length; t++)
                e[t].active = !1
    }
    const Vy = Symbol.for("v-scx")
      , Hy = ()=>Zt(Vy);
    function Wy(e, t) {
        return Nu(e, null, t)
    }
    const da = {};
    function ht(e, t, n) {
        return Nu(e, t, n)
    }
    function Nu(e, t, {immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: a}=Je) {
        if (t && i) {
            const I = t;
            t = (...j)=>{
                I(...j),
                G()
            }
        }
        const l = yt
          , u = I=>s === !0 ? I : Ts(I, s === !1 ? 1 : void 0);
        let c, f = !1, d = !1;
        if (it(e) ? (c = ()=>e.value,
        f = Aa(e)) : wr(e) ? (c = ()=>u(e),
        f = !0) : de(e) ? (d = !0,
        f = e.some(I=>wr(I) || Aa(I)),
        c = ()=>e.map(I=>{
            if (it(I))
                return I.value;
            if (wr(I))
                return u(I);
            if (we(I))
                return Hs(I, l, 2)
        }
        )) : we(e) ? t ? c = ()=>Hs(e, l, 2) : c = ()=>(h && h(),
        sn(e, l, 3, [g])) : c = nn,
        t && s) {
            const I = c;
            c = ()=>Ts(I())
        }
        let h, g = I=>{
            h = w.onStop = ()=>{
                Hs(I, l, 4),
                h = w.onStop = void 0
            }
        }
        , v;
        if (xl)
            if (g = nn,
            t ? n && sn(t, l, 3, [c(), d ? [] : void 0, g]) : c(),
            r === "sync") {
                const I = Hy();
                v = I.__watcherHandles || (I.__watcherHandles = [])
            } else
                return nn;
        let C = d ? new Array(e.length).fill(da) : da;
        const M = ()=>{
            if (!(!w.active || !w.dirty))
                if (t) {
                    const I = w.run();
                    (s || f || (d ? I.some((j,D)=>Ys(j, C[D])) : Ys(I, C))) && (h && h(),
                    sn(t, l, 3, [I, C === da ? void 0 : d && C[0] === da ? [] : C, g]),
                    C = I)
                } else
                    w.run()
        }
        ;
        M.allowRecurse = !!t;
        let k;
        r === "sync" ? k = M : r === "post" ? k = ()=>zt(M, l && l.suspense) : (M.pre = !0,
        l && (M.id = l.uid),
        k = ()=>Au(M));
        const w = new Mu(c,nn,k)
          , U = xu()
          , G = ()=>{
            w.stop(),
            U && bu(U.effects, w)
        }
        ;
        return t ? n ? M() : C = w.run() : r === "post" ? zt(w.run.bind(w), l && l.suspense) : w.run(),
        v && v.push(G),
        G
    }
    function Yy(e, t, n) {
        const s = this.proxy
          , r = dt(e) ? e.includes(".") ? Vp(s, e) : ()=>s[e] : e.bind(s, s);
        let i;
        we(t) ? i = t : (i = t.handler,
        n = t);
        const o = Yo(this)
          , a = Nu(r, i.bind(s), n);
        return o(),
        a
    }
    function Vp(e, t) {
        const n = t.split(".");
        return ()=>{
            let s = e;
            for (let r = 0; r < n.length && s; r++)
                s = s[n[r]];
            return s
        }
    }
    function Ts(e, t=1 / 0, n) {
        if (t <= 0 || !Ge(e) || e.__v_skip || (n = n || new Set,
        n.has(e)))
            return e;
        if (n.add(e),
        t--,
        it(e))
            Ts(e.value, t, n);
        else if (de(e))
            for (let s = 0; s < e.length; s++)
                Ts(e[s], t, n);
        else if (cl(e) || Gr(e))
            e.forEach(s=>{
                Ts(s, t, n)
            }
            );
        else if (Jh(e)) {
            for (const s in e)
                Ts(e[s], t, n);
            for (const s of Object.getOwnPropertySymbols(e))
                Object.prototype.propertyIsEnumerable.call(e, s) && Ts(e[s], t, n)
        }
        return e
    }
    const vl = e=>e.type.__isKeepAlive;
    function Zy(e, t) {
        Hp(e, "a", t)
    }
    function Ky(e, t) {
        Hp(e, "da", t)
    }
    function Hp(e, t, n=yt) {
        const s = e.__wdc || (e.__wdc = ()=>{
            let r = n;
            for (; r; ) {
                if (r.isDeactivated)
                    return;
                r = r.parent
            }
            return e()
        }
        );
        if (yl(t, s, n),
        n) {
            let r = n.parent;
            for (; r && r.parent; )
                vl(r.parent.vnode) && Gy(s, t, n, r),
                r = r.parent
        }
    }
    function Gy(e, t, n, s) {
        const r = yl(t, e, s, !0);
        Du(()=>{
            bu(s[t], r)
        }
        , n)
    }
    const Os = Symbol("_leaveCb")
      , ha = Symbol("_enterCb");
    function Wp() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Wo(()=>{
            e.isMounted = !0
        }
        ),
        Tp(()=>{
            e.isUnmounting = !0
        }
        ),
        e
    }
    const Qt = [Function, Array]
      , Yp = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Qt,
        onEnter: Qt,
        onAfterEnter: Qt,
        onEnterCancelled: Qt,
        onBeforeLeave: Qt,
        onLeave: Qt,
        onAfterLeave: Qt,
        onLeaveCancelled: Qt,
        onBeforeAppear: Qt,
        onAppear: Qt,
        onAfterAppear: Qt,
        onAppearCancelled: Qt
    }
      , Zp = e=>{
        const t = e.subTree;
        return t.component ? Zp(t.component) : t
    }
      , Qy = {
        name: "BaseTransition",
        props: Yp,
        setup(e, {slots: t}) {
            const n = wl()
              , s = Wp();
            return ()=>{
                const r = t.default && Iu(t.default(), !0);
                if (!r || !r.length)
                    return;
                let i = r[0];
                if (r.length > 1) {
                    for (const d of r)
                        if (d.type !== Ut) {
                            i = d;
                            break
                        }
                }
                const o = De(e)
                  , {mode: a} = o;
                if (s.isLeaving)
                    return Jl(i);
                const l = cd(i);
                if (!l)
                    return Jl(i);
                let u = po(l, o, s, n, d=>u = d);
                bi(l, u);
                const c = n.subTree
                  , f = c && cd(c);
                if (f && f.type !== Ut && !cr(l, f) && Zp(n).type !== Ut) {
                    const d = po(f, o, s, n);
                    if (bi(f, d),
                    a === "out-in" && l.type !== Ut)
                        return s.isLeaving = !0,
                        d.afterLeave = ()=>{
                            s.isLeaving = !1,
                            n.update.active !== !1 && (n.effect.dirty = !0,
                            n.update())
                        }
                        ,
                        Jl(i);
                    a === "in-out" && l.type !== Ut && (d.delayLeave = (h,g,v)=>{
                        const C = Kp(s, f);
                        C[String(f.key)] = f,
                        h[Os] = ()=>{
                            g(),
                            h[Os] = void 0,
                            delete u.delayedLeave
                        }
                        ,
                        u.delayedLeave = v
                    }
                    )
                }
                return i
            }
        }
    }
      , Jy = Qy;
    function Kp(e, t) {
        const {leavingVNodes: n} = e;
        let s = n.get(t.type);
        return s || (s = Object.create(null),
        n.set(t.type, s)),
        s
    }
    function po(e, t, n, s, r) {
        const {appear: i, mode: o, persisted: a=!1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: g, onLeaveCancelled: v, onBeforeAppear: C, onAppear: M, onAfterAppear: k, onAppearCancelled: w} = t
          , U = String(e.key)
          , G = Kp(n, e)
          , I = (R,Q)=>{
            R && sn(R, s, 9, Q)
        }
          , j = (R,Q)=>{
            const se = Q[1];
            I(R, Q),
            de(R) ? R.every(L=>L.length <= 1) && se() : R.length <= 1 && se()
        }
          , D = {
            mode: o,
            persisted: a,
            beforeEnter(R) {
                let Q = l;
                if (!n.isMounted)
                    if (i)
                        Q = C || l;
                    else
                        return;
                R[Os] && R[Os](!0);
                const se = G[U];
                se && cr(e, se) && se.el[Os] && se.el[Os](),
                I(Q, [R])
            },
            enter(R) {
                let Q = u
                  , se = c
                  , L = f;
                if (!n.isMounted)
                    if (i)
                        Q = M || u,
                        se = k || c,
                        L = w || f;
                    else
                        return;
                let re = !1;
                const Ve = R[ha] = Ze=>{
                    re || (re = !0,
                    Ze ? I(L, [R]) : I(se, [R]),
                    D.delayedLeave && D.delayedLeave(),
                    R[ha] = void 0)
                }
                ;
                Q ? j(Q, [R, Ve]) : Ve()
            },
            leave(R, Q) {
                const se = String(e.key);
                if (R[ha] && R[ha](!0),
                n.isUnmounting)
                    return Q();
                I(d, [R]);
                let L = !1;
                const re = R[Os] = Ve=>{
                    L || (L = !0,
                    Q(),
                    Ve ? I(v, [R]) : I(g, [R]),
                    R[Os] = void 0,
                    G[se] === e && delete G[se])
                }
                ;
                G[se] = e,
                h ? j(h, [R, re]) : re()
            },
            clone(R) {
                const Q = po(R, t, n, s, r);
                return r && r(Q),
                Q
            }
        };
        return D
    }
    function Jl(e) {
        if (vl(e))
            return e = Zs(e),
            e.children = null,
            e
    }
    function cd(e) {
        if (!vl(e))
            return e;
        const {shapeFlag: t, children: n} = e;
        if (n) {
            if (t & 16)
                return n[0];
            if (t & 32 && we(n.default))
                return n.default()
        }
    }
    function bi(e, t) {
        e.shapeFlag & 6 && e.component ? bi(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
        e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }
    function Iu(e, t=!1, n) {
        let s = []
          , r = 0;
        for (let i = 0; i < e.length; i++) {
            let o = e[i];
            const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
            o.type === qe ? (o.patchFlag & 128 && r++,
            s = s.concat(Iu(o.children, t, a))) : (t || o.type !== Ut) && s.push(a != null ? Zs(o, {
                key: a
            }) : o)
        }
        if (r > 1)
            for (let i = 0; i < s.length; i++)
                s[i].patchFlag = -2;
        return s
    }
    const Xy = e=>e.__isTeleport
      , qe = Symbol.for("v-fgt")
      , bl = Symbol.for("v-txt")
      , Ut = Symbol.for("v-cmt")
      , ba = Symbol.for("v-stc")
      , no = [];
    let mn = null;
    function E(e=!1) {
        no.push(mn = e ? null : [])
    }
    function ev() {
        no.pop(),
        mn = no[no.length - 1] || null
    }
    let mo = 1;
    function ud(e) {
        mo += e
    }
    function Gp(e) {
        return e.dynamicChildren = mo > 0 ? mn || Kr : null,
        ev(),
        mo > 0 && mn && mn.push(e),
        e
    }
    function V(e, t, n, s, r, i) {
        return Gp(m(e, t, n, s, r, i, !0))
    }
    function ve(e, t, n, s, r) {
        return Gp(Z(e, t, n, s, r, !0))
    }
    function za(e) {
        return e ? e.__v_isVNode === !0 : !1
    }
    function cr(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Qp = ({key: e})=>e ?? null
      , wa = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
    e != null ? dt(e) || it(e) || we(e) ? {
        i: mt,
        r: e,
        k: t,
        f: !!n
    } : e : null);
    function m(e, t=null, n=null, s=0, r=null, i=e === qe ? 0 : 1, o=!1, a=!1) {
        const l = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && Qp(t),
            ref: t && wa(t),
            scopeId: gl,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: i,
            patchFlag: s,
            dynamicProps: r,
            dynamicChildren: null,
            appContext: null,
            ctx: mt
        };
        return a ? (Fu(l, n),
        i & 128 && e.normalize(l)) : n && (l.shapeFlag |= dt(n) ? 8 : 16),
        mo > 0 && !o && mn && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && mn.push(l),
        l
    }
    const Z = tv;
    function tv(e, t=null, n=null, s=0, r=null, i=!1) {
        if ((!e || e === gy) && (e = Ut),
        za(e)) {
            const a = Zs(e, t, !0);
            return n && Fu(a, n),
            mo > 0 && !i && mn && (a.shapeFlag & 6 ? mn[mn.indexOf(e)] = a : mn.push(a)),
            a.patchFlag = -2,
            a
        }
        if (uv(e) && (e = e.__vccOpts),
        t) {
            t = Jp(t);
            let {class: a, style: l} = t;
            a && !dt(a) && (t.class = le(a)),
            Ge(l) && (yp(l) && !de(l) && (l = ft({}, l)),
            t.style = pn(l))
        }
        const o = dt(e) ? 1 : vy(e) ? 128 : Xy(e) ? 64 : Ge(e) ? 4 : we(e) ? 2 : 0;
        return m(e, t, n, s, r, o, i, !0)
    }
    function Jp(e) {
        return e ? yp(e) || zp(e) ? ft({}, e) : e : null
    }
    function Zs(e, t, n=!1, s=!1) {
        const {props: r, ref: i, patchFlag: o, children: a, transition: l} = e
          , u = t ? At(r || {}, t) : r
          , c = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Qp(u),
            ref: t && t.ref ? n && i ? de(i) ? i.concat(wa(t)) : [i, wa(t)] : wa(t) : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: a,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== qe ? o === -1 ? 16 : o | 16 : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: l,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Zs(e.ssContent),
            ssFallback: e.ssFallback && Zs(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
        return l && s && bi(c, l.clone(c)),
        c
    }
    function ct(e=" ", t=0) {
        return Z(bl, null, e, t)
    }
    function Xp(e, t) {
        const n = Z(ba, null, e);
        return n.staticCount = t,
        n
    }
    function ut(e="", t=!1) {
        return t ? (E(),
        ve(Ut, null, e)) : Z(Ut, null, e)
    }
    function $n(e) {
        return e == null || typeof e == "boolean" ? Z(Ut) : de(e) ? Z(qe, null, e.slice()) : typeof e == "object" ? Es(e) : Z(bl, null, String(e))
    }
    function Es(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zs(e)
    }
    function Fu(e, t) {
        let n = 0;
        const {shapeFlag: s} = e;
        if (t == null)
            t = null;
        else if (de(t))
            n = 16;
        else if (typeof t == "object")
            if (s & 65) {
                const r = t.default;
                r && (r._c && (r._d = !1),
                Fu(e, r()),
                r._c && (r._d = !0));
                return
            } else {
                n = 32;
                const r = t._;
                !r && !zp(t) ? t._ctx = mt : r === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2,
                e.patchFlag |= 1024))
            }
        else
            we(t) ? (t = {
                default: t,
                _ctx: mt
            },
            n = 32) : (t = String(t),
            s & 64 ? (n = 16,
            t = [ct(t)]) : n = 8);
        e.children = t,
        e.shapeFlag |= n
    }
    function At(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n];
            for (const r in s)
                if (r === "class")
                    t.class !== s.class && (t.class = le([t.class, s.class]));
                else if (r === "style")
                    t.style = pn([t.style, s.style]);
                else if (ll(r)) {
                    const i = t[r]
                      , o = s[r];
                    o && i !== o && !(de(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
                } else
                    r !== "" && (t[r] = s[r])
        }
        return t
    }
    function Cn(e, t, n, s=null) {
        sn(e, t, 7, [n, s])
    }
    const nv = Ap();
    let sv = 0;
    function rv(e, t, n) {
        const s = e.type
          , r = (t ? t.appContext : e.appContext) || nv
          , i = {
            uid: sv++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new rp(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ip(s, r),
            emitsOptions: Ep(s, r),
            emit: null,
            emitted: null,
            propsDefaults: Je,
            inheritAttrs: s.inheritAttrs,
            ctx: Je,
            data: Je,
            props: Je,
            attrs: Je,
            slots: Je,
            refs: Je,
            setupState: Je,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
        return i.ctx = {
            _: i
        },
        i.root = t ? t.root : i,
        i.emit = fy.bind(null, i),
        e.ce && e.ce(i),
        i
    }
    let yt = null;
    const wl = ()=>yt || mt;
    let Na, Tc;
    {
        const e = ep()
          , t = (n,s)=>{
            let r;
            return (r = e[n]) || (r = e[n] = []),
            r.push(s),
            i=>{
                r.length > 1 ? r.forEach(o=>o(i)) : r[0](i)
            }
        }
        ;
        Na = t("__VUE_INSTANCE_SETTERS__", n=>yt = n),
        Tc = t("__VUE_SSR_SETTERS__", n=>xl = n)
    }
    const Yo = e=>{
        const t = yt;
        return Na(e),
        e.scope.on(),
        ()=>{
            e.scope.off(),
            Na(t)
        }
    }
      , fd = ()=>{
        yt && yt.scope.off(),
        Na(null)
    }
    ;
    function em(e) {
        return e.vnode.shapeFlag & 4
    }
    let xl = !1;
    function iv(e, t=!1) {
        t && Tc(t);
        const {props: n, children: s} = e.vnode
          , r = em(e);
        Ly(e, n, r, t),
        Iy(e, s);
        const i = r ? ov(e, t) : void 0;
        return t && Tc(!1),
        i
    }
    function ov(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null),
        e.proxy = new Proxy(e.ctx,Ey);
        const {setup: s} = n;
        if (s) {
            const r = e.setupContext = s.length > 1 ? lv(e) : null
              , i = Yo(e);
            er();
            const o = Hs(s, e, 0, [e.props, r]);
            if (tr(),
            i(),
            Gh(o)) {
                if (o.then(fd, fd),
                t)
                    return o.then(a=>{
                        dd(e, a, t)
                    }
                    ).catch(a=>{
                        ml(a, e, 0)
                    }
                    );
                e.asyncDep = o
            } else
                dd(e, o, t)
        } else
            tm(e, t)
    }
    function dd(e, t, n) {
        we(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ge(t) && (e.setupState = xp(t)),
        tm(e, n)
    }
    let hd;
    function tm(e, t, n) {
        const s = e.type;
        if (!e.render) {
            if (!t && hd && !s.render) {
                const r = s.template || Lu(e).template;
                if (r) {
                    const {isCustomElement: i, compilerOptions: o} = e.appContext.config
                      , {delimiters: a, compilerOptions: l} = s
                      , u = ft(ft({
                        isCustomElement: i,
                        delimiters: a
                    }, o), l);
                    s.render = hd(r, u)
                }
            }
            e.render = s.render || nn
        }
        {
            const r = Yo(e);
            er();
            try {
                Cy(e)
            } finally {
                tr(),
                r()
            }
        }
    }
    const av = {
        get(e, t) {
            return Bt(e, "get", ""),
            e[t]
        }
    };
    function lv(e) {
        const t = n=>{
            e.exposed = n || {}
        }
        ;
        return {
            attrs: new Proxy(e.attrs,av),
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }
    function Ml(e) {
        return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xp(Tu(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in to)
                    return to[n](e)
            },
            has(t, n) {
                return n in t || n in to
            }
        })) : e.proxy
    }
    function cv(e, t=!0) {
        return we(e) ? e.displayName || e.name : e.name || t && e.__name
    }
    function uv(e) {
        return we(e) && "__vccOpts"in e
    }
    const ye = (e,t)=>ey(e, t, xl);
    function ju(e, t, n) {
        const s = arguments.length;
        return s === 2 ? Ge(t) && !de(t) ? za(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && za(n) && (n = [n]),
        Z(e, t, n))
    }
    const fv = "3.4.29";
    /**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
    const dv = "http://www.w3.org/2000/svg"
      , hv = "http://www.w3.org/1998/Math/MathML"
      , Jn = typeof document < "u" ? document : null
      , pd = Jn && Jn.createElement("template")
      , pv = {
        insert: (e,t,n)=>{
            t.insertBefore(e, n || null)
        }
        ,
        remove: e=>{
            const t = e.parentNode;
            t && t.removeChild(e)
        }
        ,
        createElement: (e,t,n,s)=>{
            const r = t === "svg" ? Jn.createElementNS(dv, e) : t === "mathml" ? Jn.createElementNS(hv, e) : n ? Jn.createElement(e, {
                is: n
            }) : Jn.createElement(e);
            return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
            r
        }
        ,
        createText: e=>Jn.createTextNode(e),
        createComment: e=>Jn.createComment(e),
        setText: (e,t)=>{
            e.nodeValue = t
        }
        ,
        setElementText: (e,t)=>{
            e.textContent = t
        }
        ,
        parentNode: e=>e.parentNode,
        nextSibling: e=>e.nextSibling,
        querySelector: e=>Jn.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, r, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n),
                !(r === i || !(r = r.nextSibling)); )
                    ;
            else {
                pd.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
                const a = pd.content;
                if (s === "svg" || s === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild; )
                        a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }
      , vs = "transition"
      , Bi = "animation"
      , wi = Symbol("_vtc")
      , wt = (e,{slots: t})=>ju(Jy, sm(e), t);
    wt.displayName = "Transition";
    const nm = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    }
      , mv = wt.props = ft({}, Yp, nm)
      , or = (e,t=[])=>{
        de(e) ? e.forEach(n=>n(...t)) : e && e(...t)
    }
      , md = e=>e ? de(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
    function sm(e) {
        const t = {};
        for (const L in e)
            L in nm || (t[L] = e[L]);
        if (e.css === !1)
            return t;
        const {name: n="v", type: s, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: u=o, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
          , g = _v(r)
          , v = g && g[0]
          , C = g && g[1]
          , {onBeforeEnter: M, onEnter: k, onEnterCancelled: w, onLeave: U, onLeaveCancelled: G, onBeforeAppear: I=M, onAppear: j=k, onAppearCancelled: D=w} = t
          , R = (L,re,Ve)=>{
            xs(L, re ? c : a),
            xs(L, re ? u : o),
            Ve && Ve()
        }
          , Q = (L,re)=>{
            L._isLeaving = !1,
            xs(L, f),
            xs(L, h),
            xs(L, d),
            re && re()
        }
          , se = L=>(re,Ve)=>{
            const Ze = L ? j : k
              , Se = ()=>R(re, L, Ve);
            or(Ze, [re, Se]),
            _d(()=>{
                xs(re, L ? l : i),
                Kn(re, L ? c : a),
                md(Ze) || gd(re, s, v, Se)
            }
            )
        }
        ;
        return ft(t, {
            onBeforeEnter(L) {
                or(M, [L]),
                Kn(L, i),
                Kn(L, o)
            },
            onBeforeAppear(L) {
                or(I, [L]),
                Kn(L, l),
                Kn(L, u)
            },
            onEnter: se(!1),
            onAppear: se(!0),
            onLeave(L, re) {
                L._isLeaving = !0;
                const Ve = ()=>Q(L, re);
                Kn(L, f),
                Kn(L, d),
                im(),
                _d(()=>{
                    L._isLeaving && (xs(L, f),
                    Kn(L, h),
                    md(U) || gd(L, s, C, Ve))
                }
                ),
                or(U, [L, Ve])
            },
            onEnterCancelled(L) {
                R(L, !1),
                or(w, [L])
            },
            onAppearCancelled(L) {
                R(L, !0),
                or(D, [L])
            },
            onLeaveCancelled(L) {
                Q(L),
                or(G, [L])
            }
        })
    }
    function _v(e) {
        if (e == null)
            return null;
        if (Ge(e))
            return [Xl(e.enter), Xl(e.leave)];
        {
            const t = Xl(e);
            return [t, t]
        }
    }
    function Xl(e) {
        return Sg(e)
    }
    function Kn(e, t) {
        t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
        (e[wi] || (e[wi] = new Set)).add(t)
    }
    function xs(e, t) {
        t.split(/\s+/).forEach(s=>s && e.classList.remove(s));
        const n = e[wi];
        n && (n.delete(t),
        n.size || (e[wi] = void 0))
    }
    function _d(e) {
        requestAnimationFrame(()=>{
            requestAnimationFrame(e)
        }
        )
    }
    let gv = 0;
    function gd(e, t, n, s) {
        const r = e._endId = ++gv
          , i = ()=>{
            r === e._endId && s()
        }
        ;
        if (n)
            return setTimeout(i, n);
        const {type: o, timeout: a, propCount: l} = rm(e, t);
        if (!o)
            return s();
        const u = o + "end";
        let c = 0;
        const f = ()=>{
            e.removeEventListener(u, d),
            i()
        }
          , d = h=>{
            h.target === e && ++c >= l && f()
        }
        ;
        setTimeout(()=>{
            c < l && f()
        }
        , a + 1),
        e.addEventListener(u, d)
    }
    function rm(e, t) {
        const n = window.getComputedStyle(e)
          , s = g=>(n[g] || "").split(", ")
          , r = s(`${vs}Delay`)
          , i = s(`${vs}Duration`)
          , o = yd(r, i)
          , a = s(`${Bi}Delay`)
          , l = s(`${Bi}Duration`)
          , u = yd(a, l);
        let c = null
          , f = 0
          , d = 0;
        t === vs ? o > 0 && (c = vs,
        f = o,
        d = i.length) : t === Bi ? u > 0 && (c = Bi,
        f = u,
        d = l.length) : (f = Math.max(o, u),
        c = f > 0 ? o > u ? vs : Bi : null,
        d = c ? c === vs ? i.length : l.length : 0);
        const h = c === vs && /\b(transform|all)(,|$)/.test(s(`${vs}Property`).toString());
        return {
            type: c,
            timeout: f,
            propCount: d,
            hasTransform: h
        }
    }
    function yd(e, t) {
        for (; e.length < t.length; )
            e = e.concat(e);
        return Math.max(...t.map((n,s)=>vd(n) + vd(e[s])))
    }
    function vd(e) {
        return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }
    function im() {
        return document.body.offsetHeight
    }
    function yv(e, t, n) {
        const s = e[wi];
        s && (t = (t ? [t, ...s] : [...s]).join(" ")),
        t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }
    const Ia = Symbol("_vod")
      , om = Symbol("_vsh")
      , bd = {
        beforeMount(e, {value: t}, {transition: n}) {
            e[Ia] = e.style.display === "none" ? "" : e.style.display,
            n && t ? n.beforeEnter(e) : Vi(e, t)
        },
        mounted(e, {value: t}, {transition: n}) {
            n && t && n.enter(e)
        },
        updated(e, {value: t, oldValue: n}, {transition: s}) {
            !t != !n && (s ? t ? (s.beforeEnter(e),
            Vi(e, !0),
            s.enter(e)) : s.leave(e, ()=>{
                Vi(e, !1)
            }
            ) : Vi(e, t))
        },
        beforeUnmount(e, {value: t}) {
            Vi(e, t)
        }
    };
    function Vi(e, t) {
        e.style.display = t ? e[Ia] : "none",
        e[om] = !t
    }
    const vv = Symbol("")
      , bv = /(^|;)\s*display\s*:/;
    function wv(e, t, n) {
        const s = e.style
          , r = dt(n);
        let i = !1;
        if (n && !r) {
            if (t)
                if (dt(t))
                    for (const o of t.split(";")) {
                        const a = o.slice(0, o.indexOf(":")).trim();
                        n[a] == null && xa(s, a, "")
                    }
                else
                    for (const o in t)
                        n[o] == null && xa(s, o, "");
            for (const o in n)
                o === "display" && (i = !0),
                xa(s, o, n[o])
        } else if (r) {
            if (t !== n) {
                const o = s[vv];
                o && (n += ";" + o),
                s.cssText = n,
                i = bv.test(n)
            }
        } else
            t && e.removeAttribute("style");
        Ia in e && (e[Ia] = i ? s.display : "",
        e[om] && (s.display = "none"))
    }
    const wd = /\s*!important$/;
    function xa(e, t, n) {
        if (de(n))
            n.forEach(s=>xa(e, t, s));
        else if (n == null && (n = ""),
        t.startsWith("--"))
            e.setProperty(t, n);
        else {
            const s = xv(e, t);
            wd.test(n) ? e.setProperty(Ri(s), n.replace(wd, ""), "important") : e[s] = n
        }
    }
    const xd = ["Webkit", "Moz", "ms"]
      , ec = {};
    function xv(e, t) {
        const n = ec[t];
        if (n)
            return n;
        let s = Fn(t);
        if (s !== "filter" && s in e)
            return ec[t] = s;
        s = fl(s);
        for (let r = 0; r < xd.length; r++) {
            const i = xd[r] + s;
            if (i in e)
                return ec[t] = i
        }
        return t
    }
    const Md = "http://www.w3.org/1999/xlink";
    function kd(e, t, n, s, r, i=Pg(t)) {
        s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Md, t.slice(6, t.length)) : e.setAttributeNS(Md, t, n) : n == null || i && !tp(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : String(n))
    }
    function Mv(e, t, n, s, r, i, o) {
        if (t === "innerHTML" || t === "textContent") {
            s && o(s, r, i),
            e[t] = n ?? "";
            return
        }
        const a = e.tagName;
        if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
            const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value
              , c = n == null ? "" : String(n);
            (u !== c || !("_value"in e)) && (e.value = c),
            n == null && e.removeAttribute(t),
            e._value = n;
            return
        }
        let l = !1;
        if (n === "" || n == null) {
            const u = typeof e[t];
            u === "boolean" ? n = tp(n) : n == null && u === "string" ? (n = "",
            l = !0) : u === "number" && (n = 0,
            l = !0)
        }
        try {
            e[t] = n
        } catch {}
        l && e.removeAttribute(t)
    }
    function Uu(e, t, n, s) {
        e.addEventListener(t, n, s)
    }
    function kv(e, t, n, s) {
        e.removeEventListener(t, n, s)
    }
    const Sd = Symbol("_vei");
    function Sv(e, t, n, s, r=null) {
        const i = e[Sd] || (e[Sd] = {})
          , o = i[t];
        if (s && o)
            o.value = s;
        else {
            const [a,l] = Ov(t);
            if (s) {
                const u = i[t] = Tv(s, r);
                Uu(e, a, u, l)
            } else
                o && (kv(e, a, o, l),
                i[t] = void 0)
        }
    }
    const Od = /(?:Once|Passive|Capture)$/;
    function Ov(e) {
        let t;
        if (Od.test(e)) {
            t = {};
            let s;
            for (; s = e.match(Od); )
                e = e.slice(0, e.length - s[0].length),
                t[s[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : Ri(e.slice(2)), t]
    }
    let tc = 0;
    const Ev = Promise.resolve()
      , Cv = ()=>tc || (Ev.then(()=>tc = 0),
    tc = Date.now());
    function Tv(e, t) {
        const n = s=>{
            if (!s._vts)
                s._vts = Date.now();
            else if (s._vts <= n.attached)
                return;
            sn(Rv(s, n.value), t, 5, [s])
        }
        ;
        return n.value = e,
        n.attached = Cv(),
        n
    }
    function Rv(e, t) {
        if (de(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = ()=>{
                n.call(e),
                e._stopped = !0
            }
            ,
            t.map(s=>r=>!r._stopped && s && s(r))
        } else
            return t
    }
    const Ed = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
      , Pv = (e,t,n,s,r,i,o,a,l)=>{
        const u = r === "svg";
        t === "class" ? yv(e, s, u) : t === "style" ? wv(e, n, s) : ll(t) ? vu(t) || Sv(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1),
        !0) : t[0] === "^" ? (t = t.slice(1),
        !1) : Av(e, t, s, u)) ? (Mv(e, t, s, i, o, a, l),
        (t === "value" || t === "checked" || t === "selected") && kd(e, t, s, u, o, t !== "value")) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
        kd(e, t, s, u))
    }
    ;
    function Av(e, t, n, s) {
        if (s)
            return !!(t === "innerHTML" || t === "textContent" || t in e && Ed(t) && we(n));
        if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
            return !1;
        if (t === "width" || t === "height") {
            const r = e.tagName;
            if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
                return !1
        }
        return Ed(t) && dt(n) ? !1 : t in e
    }
    const am = new WeakMap
      , lm = new WeakMap
      , Fa = Symbol("_moveCb")
      , Cd = Symbol("_enterCb")
      , cm = {
        name: "TransitionGroup",
        props: ft({}, mv, {
            tag: String,
            moveClass: String
        }),
        setup(e, {slots: t}) {
            const n = wl()
              , s = Wp();
            let r, i;
            return Cp(()=>{
                if (!r.length)
                    return;
                const o = e.moveClass || `${e.name || "v"}-move`;
                if (!Iv(r[0].el, n.vnode.el, o))
                    return;
                r.forEach(Lv),
                r.forEach(zv);
                const a = r.filter(Nv);
                im(),
                a.forEach(l=>{
                    const u = l.el
                      , c = u.style;
                    Kn(u, o),
                    c.transform = c.webkitTransform = c.transitionDuration = "";
                    const f = u[Fa] = d=>{
                        d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f),
                        u[Fa] = null,
                        xs(u, o))
                    }
                    ;
                    u.addEventListener("transitionend", f)
                }
                )
            }
            ),
            ()=>{
                const o = De(e)
                  , a = sm(o);
                let l = o.tag || qe;
                if (r = [],
                i)
                    for (let u = 0; u < i.length; u++) {
                        const c = i[u];
                        c.el && c.el instanceof Element && (r.push(c),
                        bi(c, po(c, a, s, n)),
                        am.set(c, c.el.getBoundingClientRect()))
                    }
                i = t.default ? Iu(t.default()) : [];
                for (let u = 0; u < i.length; u++) {
                    const c = i[u];
                    c.key != null && bi(c, po(c, a, s, n))
                }
                return Z(l, null, i)
            }
        }
    }
      , $v = e=>delete e.mode;
    cm.props;
    const Dv = cm;
    function Lv(e) {
        const t = e.el;
        t[Fa] && t[Fa](),
        t[Cd] && t[Cd]()
    }
    function zv(e) {
        lm.set(e, e.el.getBoundingClientRect())
    }
    function Nv(e) {
        const t = am.get(e)
          , n = lm.get(e)
          , s = t.left - n.left
          , r = t.top - n.top;
        if (s || r) {
            const i = e.el.style;
            return i.transform = i.webkitTransform = `translate(${s}px,${r}px)`,
            i.transitionDuration = "0s",
            e
        }
    }
    function Iv(e, t, n) {
        const s = e.cloneNode()
          , r = e[wi];
        r && r.forEach(a=>{
            a.split(/\s+/).forEach(l=>l && s.classList.remove(l))
        }
        ),
        n.split(/\s+/).forEach(a=>a && s.classList.add(a)),
        s.style.display = "none";
        const i = t.nodeType === 1 ? t : t.parentNode;
        i.appendChild(s);
        const {hasTransform: o} = rm(s);
        return i.removeChild(s),
        o
    }
    const ja = e=>{
        const t = e.props["onUpdate:modelValue"] || !1;
        return de(t) ? n=>ga(t, n) : t
    }
      , Xr = Symbol("_assign")
      , Fv = {
        deep: !0,
        created(e, t, n) {
            e[Xr] = ja(n),
            Uu(e, "change", ()=>{
                const s = e._modelValue
                  , r = um(e)
                  , i = e.checked
                  , o = e[Xr];
                if (de(s)) {
                    const a = np(s, r)
                      , l = a !== -1;
                    if (i && !l)
                        o(s.concat(r));
                    else if (!i && l) {
                        const u = [...s];
                        u.splice(a, 1),
                        o(u)
                    }
                } else if (cl(s)) {
                    const a = new Set(s);
                    i ? a.add(r) : a.delete(r),
                    o(a)
                } else
                    o(fm(e, i))
            }
            )
        },
        mounted: Td,
        beforeUpdate(e, t, n) {
            e[Xr] = ja(n),
            Td(e, t, n)
        }
    };
    function Td(e, {value: t, oldValue: n}, s) {
        e._modelValue = t,
        de(t) ? e.checked = np(t, s.props.value) > -1 : cl(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = vi(t, fm(e, !0)))
    }
    const jv = {
        created(e, {value: t}, n) {
            e.checked = vi(t, n.props.value),
            e[Xr] = ja(n),
            Uu(e, "change", ()=>{
                e[Xr](um(e))
            }
            )
        },
        beforeUpdate(e, {value: t, oldValue: n}, s) {
            e[Xr] = ja(s),
            t !== n && (e.checked = vi(t, s.props.value))
        }
    };
    function um(e) {
        return "_value"in e ? e._value : e.value
    }
    function fm(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t
    }
    const Uv = ["ctrl", "shift", "alt", "meta"]
      , qv = {
        stop: e=>e.stopPropagation(),
        prevent: e=>e.preventDefault(),
        self: e=>e.target !== e.currentTarget,
        ctrl: e=>!e.ctrlKey,
        shift: e=>!e.shiftKey,
        alt: e=>!e.altKey,
        meta: e=>!e.metaKey,
        left: e=>"button"in e && e.button !== 0,
        middle: e=>"button"in e && e.button !== 1,
        right: e=>"button"in e && e.button !== 2,
        exact: (e,t)=>Uv.some(n=>e[`${n}Key`] && !t.includes(n))
    }
      , jr = (e,t)=>{
        const n = e._withMods || (e._withMods = {})
          , s = t.join(".");
        return n[s] || (n[s] = (r,...i)=>{
            for (let o = 0; o < t.length; o++) {
                const a = qv[t[o]];
                if (a && a(r, t))
                    return
            }
            return e(r, ...i)
        }
        )
    }
      , Bv = ft({
        patchProp: Pv
    }, pv);
    let Rd;
    function Vv() {
        return Rd || (Rd = jy(Bv))
    }
    const Hv = (...e)=>{
        const t = Vv().createApp(...e)
          , {mount: n} = t;
        return t.mount = s=>{
            const r = Yv(s);
            if (!r)
                return;
            const i = t._component;
            !we(i) && !i.render && !i.template && (i.template = r.innerHTML),
            r.innerHTML = "";
            const o = n(r, !1, Wv(r));
            return r instanceof Element && (r.removeAttribute("v-cloak"),
            r.setAttribute("data-v-app", "")),
            o
        }
        ,
        t
    }
    ;
    function Wv(e) {
        if (e instanceof SVGElement)
            return "svg";
        if (typeof MathMLElement == "function" && e instanceof MathMLElement)
            return "mathml"
    }
    function Yv(e) {
        return dt(e) ? document.querySelector(e) : e
    }
    const dm = "/img/lines.png"
      , qu = "/img/extra-lines.png"
      , Zv = "/img/short-logo.svg"
      , Kv = "/img/boost.png";
    var Gv = !1;
    /*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
    let hm;
    const kl = e=>hm = e
      , pm = Symbol();
    function Rc(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
    }
    var so;
    (function(e) {
        e.direct = "direct",
        e.patchObject = "patch object",
        e.patchFunction = "patch function"
    }
    )(so || (so = {}));
    function Qv() {
        const e = ip(!0)
          , t = e.run(()=>fe({}));
        let n = []
          , s = [];
        const r = Tu({
            install(i) {
                kl(r),
                r._a = i,
                i.provide(pm, r),
                i.config.globalProperties.$pinia = r,
                s.forEach(o=>n.push(o)),
                s = []
            },
            use(i) {
                return !this._a && !Gv ? s.push(i) : n.push(i),
                this
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map,
            state: t
        });
        return r
    }
    const mm = ()=>{}
    ;
    function Pd(e, t, n, s=mm) {
        e.push(t);
        const r = ()=>{
            const i = e.indexOf(t);
            i > -1 && (e.splice(i, 1),
            s())
        }
        ;
        return !n && xu() && dl(r),
        r
    }
    function Ur(e, ...t) {
        e.slice().forEach(n=>{
            n(...t)
        }
        )
    }
    const Jv = e=>e();
    function Pc(e, t) {
        e instanceof Map && t instanceof Map && t.forEach((n,s)=>e.set(s, n)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n))
                continue;
            const s = t[n]
              , r = e[n];
            Rc(r) && Rc(s) && e.hasOwnProperty(n) && !it(s) && !wr(s) ? e[n] = Pc(r, s) : e[n] = s
        }
        return e
    }
    const Xv = Symbol();
    function e0(e) {
        return !Rc(e) || !e.hasOwnProperty(Xv)
    }
    const {assign: Ms} = Object;
    function t0(e) {
        return !!(it(e) && e.effect)
    }
    function n0(e, t, n, s) {
        const {state: r, actions: i, getters: o} = t
          , a = n.state.value[e];
        let l;
        function u() {
            a || (n.state.value[e] = r ? r() : {});
            const c = pl(n.state.value[e]);
            return Ms(c, i, Object.keys(o || {}).reduce((f,d)=>(f[d] = Tu(ye(()=>{
                kl(n);
                const h = n._s.get(e);
                return o[d].call(h, h)
            }
            )),
            f), {}))
        }
        return l = _m(e, u, t, n, s, !0),
        l
    }
    function _m(e, t, n={}, s, r, i) {
        let o;
        const a = Ms({
            actions: {}
        }, n)
          , l = {
            deep: !0
        };
        let u, c, f = [], d = [], h;
        const g = s.state.value[e];
        !i && !g && (s.state.value[e] = {}),
        fe({});
        let v;
        function C(D) {
            let R;
            u = c = !1,
            typeof D == "function" ? (D(s.state.value[e]),
            R = {
                type: so.patchFunction,
                storeId: e,
                events: h
            }) : (Pc(s.state.value[e], D),
            R = {
                type: so.patchObject,
                payload: D,
                storeId: e,
                events: h
            });
            const Q = v = Symbol();
            Ho().then(()=>{
                v === Q && (u = !0)
            }
            ),
            c = !0,
            Ur(f, R, s.state.value[e])
        }
        const M = i ? function() {
            const {state: R} = n
              , Q = R ? R() : {};
            this.$patch(se=>{
                Ms(se, Q)
            }
            )
        }
        : mm;
        function k() {
            o.stop(),
            f = [],
            d = [],
            s._s.delete(e)
        }
        function w(D, R) {
            return function() {
                kl(s);
                const Q = Array.from(arguments)
                  , se = []
                  , L = [];
                function re(Se) {
                    se.push(Se)
                }
                function Ve(Se) {
                    L.push(Se)
                }
                Ur(d, {
                    args: Q,
                    name: D,
                    store: G,
                    after: re,
                    onError: Ve
                });
                let Ze;
                try {
                    Ze = R.apply(this && this.$id === e ? this : G, Q)
                } catch (Se) {
                    throw Ur(L, Se),
                    Se
                }
                return Ze instanceof Promise ? Ze.then(Se=>(Ur(se, Se),
                Se)).catch(Se=>(Ur(L, Se),
                Promise.reject(Se))) : (Ur(se, Ze),
                Ze)
            }
        }
        const U = {
            _p: s,
            $id: e,
            $onAction: Pd.bind(null, d),
            $patch: C,
            $reset: M,
            $subscribe(D, R={}) {
                const Q = Pd(f, D, R.detached, ()=>se())
                  , se = o.run(()=>ht(()=>s.state.value[e], L=>{
                    (R.flush === "sync" ? c : u) && D({
                        storeId: e,
                        type: so.direct,
                        events: h
                    }, L)
                }
                , Ms({}, l, R)));
                return Q
            },
            $dispose: k
        }
          , G = ls(U);
        s._s.set(e, G);
        const j = (s._a && s._a.runWithContext || Jv)(()=>s._e.run(()=>(o = ip()).run(t)));
        for (const D in j) {
            const R = j[D];
            if (it(R) && !t0(R) || wr(R))
                i || (g && e0(R) && (it(R) ? R.value = g[D] : Pc(R, g[D])),
                s.state.value[e][D] = R);
            else if (typeof R == "function") {
                const Q = w(D, R);
                j[D] = Q,
                a.actions[D] = R
            }
        }
        return Ms(G, j),
        Ms(De(G), j),
        Object.defineProperty(G, "$state", {
            get: ()=>s.state.value[e],
            set: D=>{
                C(R=>{
                    Ms(R, D)
                }
                )
            }
        }),
        s._p.forEach(D=>{
            Ms(G, o.run(()=>D({
                store: G,
                app: s._a,
                pinia: s,
                options: a
            })))
        }
        ),
        g && i && n.hydrate && n.hydrate(G.$state, g),
        u = !0,
        c = !0,
        G
    }
    function s0(e, t, n) {
        let s, r;
        const i = typeof t == "function";
        s = e,
        r = i ? n : t;
        function o(a, l) {
            const u = $p();
            return a = a || (u ? Zt(pm, null) : null),
            a && kl(a),
            a = hm,
            a._s.has(s) || (i ? _m(s, t, r, a) : n0(s, r, a)),
            a._s.get(s)
        }
        return o.$id = s,
        o
    }
    const on = s0("user", {
        state: ()=>({
            user: null,
            passiveIncome: 0,
            level: null,
            vibro: !1,
            initData: !1,
            leagues: []
        }),
        actions: {
            setUser(e) {
                this.user = e
            },
            setInitData(e) {
                this.initData = e
            },
            setPassiveIncome(e) {
                this.passiveIncome = e
            },
            setVibro(e) {
                this.vibro = e
            },
            setLeagues(e) {
                this.leagues = e
            },
            setLevelInfo(e) {
                this.level = e,
                !(!this.user || !this.leagues.length) && (this.user.current_league >= this.leagues.length - 1 || (this.user.earn_per_tap = this.user.earn_per_tap - this.user.league.points_per_tap + this.user.next_league.points_per_tap,
                this.user.max_energy = this.user.max_energy - this.user.league.max_energy + this.user.next_league.max_energy,
                this.user.league = this.user.next_league,
                this.user.current_league += 1,
                this.user.current_league < this.leagues.length - 1 && (this.user.next_league = this.leagues[this.user.current_league + 1])))
            },
            mineCoins() {
                var e;
                console.log(!!this.user, (e = this.user) == null ? void 0 : e.energy),
                this.user && this.user.energy >= this.user.earn_per_tap && (this.user.balance += this.user.earn_per_tap,
                this.user.energy -= this.user.earn_per_tap)
            },
            recharge() {
                if (this.user) {
                    if (this.user.energy + 3 > this.user.max_energy) {
                        this.user.energy = this.user.max_energy;
                        return
                    }
                    this.user.energy += 3
                }
            }
        }
    });
    /*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
    const Br = typeof document < "u";
    function r0(e) {
        return e.__esModule || e[Symbol.toStringTag] === "Module"
    }
    const We = Object.assign;
    function nc(e, t) {
        const n = {};
        for (const s in t) {
            const r = t[s];
            n[s] = bn(r) ? r.map(e) : e(r)
        }
        return n
    }
    const ro = ()=>{}
      , bn = Array.isArray
      , gm = /#/g
      , i0 = /&/g
      , o0 = /\//g
      , a0 = /=/g
      , l0 = /\?/g
      , ym = /\+/g
      , c0 = /%5B/g
      , u0 = /%5D/g
      , vm = /%5E/g
      , f0 = /%60/g
      , bm = /%7B/g
      , d0 = /%7C/g
      , wm = /%7D/g
      , h0 = /%20/g;
    function Bu(e) {
        return encodeURI("" + e).replace(d0, "|").replace(c0, "[").replace(u0, "]")
    }
    function p0(e) {
        return Bu(e).replace(bm, "{").replace(wm, "}").replace(vm, "^")
    }
    function Ac(e) {
        return Bu(e).replace(ym, "%2B").replace(h0, "+").replace(gm, "%23").replace(i0, "%26").replace(f0, "`").replace(bm, "{").replace(wm, "}").replace(vm, "^")
    }
    function m0(e) {
        return Ac(e).replace(a0, "%3D")
    }
    function _0(e) {
        return Bu(e).replace(gm, "%23").replace(l0, "%3F")
    }
    function g0(e) {
        return e == null ? "" : _0(e).replace(o0, "%2F")
    }
    function _o(e) {
        try {
            return decodeURIComponent("" + e)
        } catch {}
        return "" + e
    }
    const y0 = /\/$/
      , v0 = e=>e.replace(y0, "");
    function sc(e, t, n="/") {
        let s, r = {}, i = "", o = "";
        const a = t.indexOf("#");
        let l = t.indexOf("?");
        return a < l && a >= 0 && (l = -1),
        l > -1 && (s = t.slice(0, l),
        i = t.slice(l + 1, a > -1 ? a : t.length),
        r = e(i)),
        a > -1 && (s = s || t.slice(0, a),
        o = t.slice(a, t.length)),
        s = M0(s ?? t, n),
        {
            fullPath: s + (i && "?") + i + o,
            path: s,
            query: r,
            hash: _o(o)
        }
    }
    function b0(e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "")
    }
    function Ad(e, t) {
        return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
    }
    function w0(e, t, n) {
        const s = t.matched.length - 1
          , r = n.matched.length - 1;
        return s > -1 && s === r && xi(t.matched[s], n.matched[r]) && xm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
    }
    function xi(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t)
    }
    function xm(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (const n in e)
            if (!x0(e[n], t[n]))
                return !1;
        return !0
    }
    function x0(e, t) {
        return bn(e) ? $d(e, t) : bn(t) ? $d(t, e) : e === t
    }
    function $d(e, t) {
        return bn(t) ? e.length === t.length && e.every((n,s)=>n === t[s]) : e.length === 1 && e[0] === t
    }
    function M0(e, t) {
        if (e.startsWith("/"))
            return e;
        if (!e)
            return t;
        const n = t.split("/")
          , s = e.split("/")
          , r = s[s.length - 1];
        (r === ".." || r === ".") && s.push("");
        let i = n.length - 1, o, a;
        for (o = 0; o < s.length; o++)
            if (a = s[o],
            a !== ".")
                if (a === "..")
                    i > 1 && i--;
                else
                    break;
        return n.slice(0, i).join("/") + "/" + s.slice(o).join("/")
    }
    var go;
    (function(e) {
        e.pop = "pop",
        e.push = "push"
    }
    )(go || (go = {}));
    var io;
    (function(e) {
        e.back = "back",
        e.forward = "forward",
        e.unknown = ""
    }
    )(io || (io = {}));
    function k0(e) {
        if (!e)
            if (Br) {
                const t = document.querySelector("base");
                e = t && t.getAttribute("href") || "/",
                e = e.replace(/^\w+:\/\/[^\/]+/, "")
            } else
                e = "/";
        return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
        v0(e)
    }
    const S0 = /^[^#]+#/;
    function O0(e, t) {
        return e.replace(S0, "#") + t
    }
    function E0(e, t) {
        const n = document.documentElement.getBoundingClientRect()
          , s = e.getBoundingClientRect();
        return {
            behavior: t.behavior,
            left: s.left - n.left - (t.left || 0),
            top: s.top - n.top - (t.top || 0)
        }
    }
    const Sl = ()=>({
        left: window.scrollX,
        top: window.scrollY
    });
    function C0(e) {
        let t;
        if ("el"in e) {
            const n = e.el
              , s = typeof n == "string" && n.startsWith("#")
              , r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!r)
                return;
            t = E0(r, e)
        } else
            t = e;
        "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
    }
    function Dd(e, t) {
        return (history.state ? history.state.position - t : -1) + e
    }
    const $c = new Map;
    function T0(e, t) {
        $c.set(e, t)
    }
    function R0(e) {
        const t = $c.get(e);
        return $c.delete(e),
        t
    }
    let P0 = ()=>location.protocol + "//" + location.host;
    function Mm(e, t) {
        const {pathname: n, search: s, hash: r} = t
          , i = e.indexOf("#");
        if (i > -1) {
            let a = r.includes(e.slice(i)) ? e.slice(i).length : 1
              , l = r.slice(a);
            return l[0] !== "/" && (l = "/" + l),
            Ad(l, "")
        }
        return Ad(n, e) + s + r
    }
    function A0(e, t, n, s) {
        let r = []
          , i = []
          , o = null;
        const a = ({state: d})=>{
            const h = Mm(e, location)
              , g = n.value
              , v = t.value;
            let C = 0;
            if (d) {
                if (n.value = h,
                t.value = d,
                o && o === g) {
                    o = null;
                    return
                }
                C = v ? d.position - v.position : 0
            } else
                s(h);
            r.forEach(M=>{
                M(n.value, g, {
                    delta: C,
                    type: go.pop,
                    direction: C ? C > 0 ? io.forward : io.back : io.unknown
                })
            }
            )
        }
        ;
        function l() {
            o = n.value
        }
        function u(d) {
            r.push(d);
            const h = ()=>{
                const g = r.indexOf(d);
                g > -1 && r.splice(g, 1)
            }
            ;
            return i.push(h),
            h
        }
        function c() {
            const {history: d} = window;
            d.state && d.replaceState(We({}, d.state, {
                scroll: Sl()
            }), "")
        }
        function f() {
            for (const d of i)
                d();
            i = [],
            window.removeEventListener("popstate", a),
            window.removeEventListener("beforeunload", c)
        }
        return window.addEventListener("popstate", a),
        window.addEventListener("beforeunload", c, {
            passive: !0
        }),
        {
            pauseListeners: l,
            listen: u,
            destroy: f
        }
    }
    function Ld(e, t, n, s=!1, r=!1) {
        return {
            back: e,
            current: t,
            forward: n,
            replaced: s,
            position: window.history.length,
            scroll: r ? Sl() : null
        }
    }
    function $0(e) {
        const {history: t, location: n} = window
          , s = {
            value: Mm(e, n)
        }
          , r = {
            value: t.state
        };
        r.value || i(s.value, {
            back: null,
            current: s.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0);
        function i(l, u, c) {
            const f = e.indexOf("#")
              , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : P0() + e + l;
            try {
                t[c ? "replaceState" : "pushState"](u, "", d),
                r.value = u
            } catch (h) {
                console.error(h),
                n[c ? "replace" : "assign"](d)
            }
        }
        function o(l, u) {
            const c = We({}, t.state, Ld(r.value.back, l, r.value.forward, !0), u, {
                position: r.value.position
            });
            i(l, c, !0),
            s.value = l
        }
        function a(l, u) {
            const c = We({}, r.value, t.state, {
                forward: l,
                scroll: Sl()
            });
            i(c.current, c, !0);
            const f = We({}, Ld(s.value, l, null), {
                position: c.position + 1
            }, u);
            i(l, f, !1),
            s.value = l
        }
        return {
            location: s,
            state: r,
            push: a,
            replace: o
        }
    }
    function D0(e) {
        e = k0(e);
        const t = $0(e)
          , n = A0(e, t.state, t.location, t.replace);
        function s(i, o=!0) {
            o || n.pauseListeners(),
            history.go(i)
        }
        const r = We({
            location: "",
            base: e,
            go: s,
            createHref: O0.bind(null, e)
        }, t, n);
        return Object.defineProperty(r, "location", {
            enumerable: !0,
            get: ()=>t.location.value
        }),
        Object.defineProperty(r, "state", {
            enumerable: !0,
            get: ()=>t.state.value
        }),
        r
    }
    function L0(e) {
        return typeof e == "string" || e && typeof e == "object"
    }
    function km(e) {
        return typeof e == "string" || typeof e == "symbol"
    }
    const bs = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    }
      , Sm = Symbol("");
    var zd;
    (function(e) {
        e[e.aborted = 4] = "aborted",
        e[e.cancelled = 8] = "cancelled",
        e[e.duplicated = 16] = "duplicated"
    }
    )(zd || (zd = {}));
    function Mi(e, t) {
        return We(new Error, {
            type: e,
            [Sm]: !0
        }, t)
    }
    function Yn(e, t) {
        return e instanceof Error && Sm in e && (t == null || !!(e.type & t))
    }
    const Nd = "[^/]+?"
      , z0 = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    }
      , N0 = /[.+*?^${}()[\]/\\]/g;
    function I0(e, t) {
        const n = We({}, z0, t)
          , s = [];
        let r = n.start ? "^" : "";
        const i = [];
        for (const u of e) {
            const c = u.length ? [] : [90];
            n.strict && !u.length && (r += "/");
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                let h = 40 + (n.sensitive ? .25 : 0);
                if (d.type === 0)
                    f || (r += "/"),
                    r += d.value.replace(N0, "\\$&"),
                    h += 40;
                else if (d.type === 1) {
                    const {value: g, repeatable: v, optional: C, regexp: M} = d;
                    i.push({
                        name: g,
                        repeatable: v,
                        optional: C
                    });
                    const k = M || Nd;
                    if (k !== Nd) {
                        h += 10;
                        try {
                            new RegExp(`(${k})`)
                        } catch (U) {
                            throw new Error(`Invalid custom RegExp for param "${g}" (${k}): ` + U.message)
                        }
                    }
                    let w = v ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
                    f || (w = C && u.length < 2 ? `(?:/${w})` : "/" + w),
                    C && (w += "?"),
                    r += w,
                    h += 20,
                    C && (h += -8),
                    v && (h += -20),
                    k === ".*" && (h += -50)
                }
                c.push(h)
            }
            s.push(c)
        }
        if (n.strict && n.end) {
            const u = s.length - 1;
            s[u][s[u].length - 1] += .7000000000000001
        }
        n.strict || (r += "/?"),
        n.end ? r += "$" : n.strict && (r += "(?:/|$)");
        const o = new RegExp(r,n.sensitive ? "" : "i");
        function a(u) {
            const c = u.match(o)
              , f = {};
            if (!c)
                return null;
            for (let d = 1; d < c.length; d++) {
                const h = c[d] || ""
                  , g = i[d - 1];
                f[g.name] = h && g.repeatable ? h.split("/") : h
            }
            return f
        }
        function l(u) {
            let c = ""
              , f = !1;
            for (const d of e) {
                (!f || !c.endsWith("/")) && (c += "/"),
                f = !1;
                for (const h of d)
                    if (h.type === 0)
                        c += h.value;
                    else if (h.type === 1) {
                        const {value: g, repeatable: v, optional: C} = h
                          , M = g in u ? u[g] : "";
                        if (bn(M) && !v)
                            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                        const k = bn(M) ? M.join("/") : M;
                        if (!k)
                            if (C)
                                d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                            else
                                throw new Error(`Missing required param "${g}"`);
                        c += k
                    }
            }
            return c || "/"
        }
        return {
            re: o,
            score: s,
            keys: i,
            parse: a,
            stringify: l
        }
    }
    function F0(e, t) {
        let n = 0;
        for (; n < e.length && n < t.length; ) {
            const s = t[n] - e[n];
            if (s)
                return s;
            n++
        }
        return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
    }
    function Om(e, t) {
        let n = 0;
        const s = e.score
          , r = t.score;
        for (; n < s.length && n < r.length; ) {
            const i = F0(s[n], r[n]);
            if (i)
                return i;
            n++
        }
        if (Math.abs(r.length - s.length) === 1) {
            if (Id(s))
                return 1;
            if (Id(r))
                return -1
        }
        return r.length - s.length
    }
    function Id(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0
    }
    const j0 = {
        type: 0,
        value: ""
    }
      , U0 = /[a-zA-Z0-9_]/;
    function q0(e) {
        if (!e)
            return [[]];
        if (e === "/")
            return [[j0]];
        if (!e.startsWith("/"))
            throw new Error(`Invalid path "${e}"`);
        function t(h) {
            throw new Error(`ERR (${n})/"${u}": ${h}`)
        }
        let n = 0
          , s = n;
        const r = [];
        let i;
        function o() {
            i && r.push(i),
            i = []
        }
        let a = 0, l, u = "", c = "";
        function f() {
            u && (n === 0 ? i.push({
                type: 0,
                value: u
            }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
                type: 1,
                value: u,
                regexp: c,
                repeatable: l === "*" || l === "+",
                optional: l === "*" || l === "?"
            })) : t("Invalid state to consume buffer"),
            u = "")
        }
        function d() {
            u += l
        }
        for (; a < e.length; ) {
            if (l = e[a++],
            l === "\\" && n !== 2) {
                s = n,
                n = 4;
                continue
            }
            switch (n) {
            case 0:
                l === "/" ? (u && f(),
                o()) : l === ":" ? (f(),
                n = 1) : d();
                break;
            case 4:
                d(),
                n = s;
                break;
            case 1:
                l === "(" ? n = 2 : U0.test(l) ? d() : (f(),
                n = 0,
                l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case 2:
                l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
                break;
            case 3:
                f(),
                n = 0,
                l !== "*" && l !== "?" && l !== "+" && a--,
                c = "";
                break;
            default:
                t("Unknown state");
                break
            }
        }
        return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
        f(),
        o(),
        r
    }
    function B0(e, t, n) {
        const s = I0(q0(e.path), n)
          , r = We(s, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
        return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
        r
    }
    function V0(e, t) {
        const n = []
          , s = new Map;
        t = Ud({
            strict: !1,
            end: !0,
            sensitive: !1
        }, t);
        function r(c) {
            return s.get(c)
        }
        function i(c, f, d) {
            const h = !d
              , g = H0(c);
            g.aliasOf = d && d.record;
            const v = Ud(t, c)
              , C = [g];
            if ("alias"in c) {
                const w = typeof c.alias == "string" ? [c.alias] : c.alias;
                for (const U of w)
                    C.push(We({}, g, {
                        components: d ? d.record.components : g.components,
                        path: U,
                        aliasOf: d ? d.record : g
                    }))
            }
            let M, k;
            for (const w of C) {
                const {path: U} = w;
                if (f && U[0] !== "/") {
                    const G = f.record.path
                      , I = G[G.length - 1] === "/" ? "" : "/";
                    w.path = f.record.path + (U && I + U)
                }
                if (M = B0(w, f, v),
                d ? d.alias.push(M) : (k = k || M,
                k !== M && k.alias.push(M),
                h && c.name && !jd(M) && o(c.name)),
                Em(M) && l(M),
                g.children) {
                    const G = g.children;
                    for (let I = 0; I < G.length; I++)
                        i(G[I], M, d && d.children[I])
                }
                d = d || M
            }
            return k ? ()=>{
                o(k)
            }
            : ro
        }
        function o(c) {
            if (km(c)) {
                const f = s.get(c);
                f && (s.delete(c),
                n.splice(n.indexOf(f), 1),
                f.children.forEach(o),
                f.alias.forEach(o))
            } else {
                const f = n.indexOf(c);
                f > -1 && (n.splice(f, 1),
                c.record.name && s.delete(c.record.name),
                c.children.forEach(o),
                c.alias.forEach(o))
            }
        }
        function a() {
            return n
        }
        function l(c) {
            const f = Z0(c, n);
            n.splice(f, 0, c),
            c.record.name && !jd(c) && s.set(c.record.name, c)
        }
        function u(c, f) {
            let d, h = {}, g, v;
            if ("name"in c && c.name) {
                if (d = s.get(c.name),
                !d)
                    throw Mi(1, {
                        location: c
                    });
                v = d.record.name,
                h = We(Fd(f.params, d.keys.filter(k=>!k.optional).concat(d.parent ? d.parent.keys.filter(k=>k.optional) : []).map(k=>k.name)), c.params && Fd(c.params, d.keys.map(k=>k.name))),
                g = d.stringify(h)
            } else if (c.path != null)
                g = c.path,
                d = n.find(k=>k.re.test(g)),
                d && (h = d.parse(g),
                v = d.record.name);
            else {
                if (d = f.name ? s.get(f.name) : n.find(k=>k.re.test(f.path)),
                !d)
                    throw Mi(1, {
                        location: c,
                        currentLocation: f
                    });
                v = d.record.name,
                h = We({}, f.params, c.params),
                g = d.stringify(h)
            }
            const C = [];
            let M = d;
            for (; M; )
                C.unshift(M.record),
                M = M.parent;
            return {
                name: v,
                path: g,
                params: h,
                matched: C,
                meta: Y0(C)
            }
        }
        return e.forEach(c=>i(c)),
        {
            addRoute: i,
            resolve: u,
            removeRoute: o,
            getRoutes: a,
            getRecordMatcher: r
        }
    }
    function Fd(e, t) {
        const n = {};
        for (const s of t)
            s in e && (n[s] = e[s]);
        return n
    }
    function H0(e) {
        return {
            path: e.path,
            redirect: e.redirect,
            name: e.name,
            meta: e.meta || {},
            aliasOf: void 0,
            beforeEnter: e.beforeEnter,
            props: W0(e),
            children: e.children || [],
            instances: {},
            leaveGuards: new Set,
            updateGuards: new Set,
            enterCallbacks: {},
            components: "components"in e ? e.components || null : e.component && {
                default: e.component
            }
        }
    }
    function W0(e) {
        const t = {}
          , n = e.props || !1;
        if ("component"in e)
            t.default = n;
        else
            for (const s in e.components)
                t[s] = typeof n == "object" ? n[s] : n;
        return t
    }
    function jd(e) {
        for (; e; ) {
            if (e.record.aliasOf)
                return !0;
            e = e.parent
        }
        return !1
    }
    function Y0(e) {
        return e.reduce((t,n)=>We(t, n.meta), {})
    }
    function Ud(e, t) {
        const n = {};
        for (const s in e)
            n[s] = s in t ? t[s] : e[s];
        return n
    }
    function Z0(e, t) {
        let n = 0
          , s = t.length;
        for (; n !== s; ) {
            const i = n + s >> 1;
            Om(e, t[i]) < 0 ? s = i : n = i + 1
        }
        const r = K0(e);
        return r && (s = t.lastIndexOf(r, s - 1)),
        s
    }
    function K0(e) {
        let t = e;
        for (; t = t.parent; )
            if (Em(t) && Om(e, t) === 0)
                return t
    }
    function Em({record: e}) {
        return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
    }
    function G0(e) {
        const t = {};
        if (e === "" || e === "?")
            return t;
        const s = (e[0] === "?" ? e.slice(1) : e).split("&");
        for (let r = 0; r < s.length; ++r) {
            const i = s[r].replace(ym, " ")
              , o = i.indexOf("=")
              , a = _o(o < 0 ? i : i.slice(0, o))
              , l = o < 0 ? null : _o(i.slice(o + 1));
            if (a in t) {
                let u = t[a];
                bn(u) || (u = t[a] = [u]),
                u.push(l)
            } else
                t[a] = l
        }
        return t
    }
    function qd(e) {
        let t = "";
        for (let n in e) {
            const s = e[n];
            if (n = m0(n),
            s == null) {
                s !== void 0 && (t += (t.length ? "&" : "") + n);
                continue
            }
            (bn(s) ? s.map(i=>i && Ac(i)) : [s && Ac(s)]).forEach(i=>{
                i !== void 0 && (t += (t.length ? "&" : "") + n,
                i != null && (t += "=" + i))
            }
            )
        }
        return t
    }
    function Q0(e) {
        const t = {};
        for (const n in e) {
            const s = e[n];
            s !== void 0 && (t[n] = bn(s) ? s.map(r=>r == null ? null : "" + r) : s == null ? s : "" + s)
        }
        return t
    }
    const J0 = Symbol("")
      , Bd = Symbol("")
      , Ol = Symbol("")
      , Vu = Symbol("")
      , Dc = Symbol("");
    function Hi() {
        let e = [];
        function t(s) {
            return e.push(s),
            ()=>{
                const r = e.indexOf(s);
                r > -1 && e.splice(r, 1)
            }
        }
        function n() {
            e = []
        }
        return {
            add: t,
            list: ()=>e.slice(),
            reset: n
        }
    }
    function Cs(e, t, n, s, r, i=o=>o()) {
        const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
        return ()=>new Promise((a,l)=>{
            const u = d=>{
                d === !1 ? l(Mi(4, {
                    from: n,
                    to: t
                })) : d instanceof Error ? l(d) : L0(d) ? l(Mi(2, {
                    from: t,
                    to: d
                })) : (o && s.enterCallbacks[r] === o && typeof d == "function" && o.push(d),
                a())
            }
              , c = i(()=>e.call(s && s.instances[r], t, n, u));
            let f = Promise.resolve(c);
            e.length < 3 && (f = f.then(u)),
            f.catch(d=>l(d))
        }
        )
    }
    function rc(e, t, n, s, r=i=>i()) {
        const i = [];
        for (const o of e)
            for (const a in o.components) {
                let l = o.components[a];
                if (!(t !== "beforeRouteEnter" && !o.instances[a]))
                    if (X0(l)) {
                        const c = (l.__vccOpts || l)[t];
                        c && i.push(Cs(c, n, s, o, a, r))
                    } else {
                        let u = l();
                        i.push(()=>u.then(c=>{
                            if (!c)
                                return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));
                            const f = r0(c) ? c.default : c;
                            o.components[a] = f;
                            const h = (f.__vccOpts || f)[t];
                            return h && Cs(h, n, s, o, a, r)()
                        }
                        ))
                    }
            }
        return i
    }
    function X0(e) {
        return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
    }
    function Vd(e) {
        const t = Zt(Ol)
          , n = Zt(Vu)
          , s = ye(()=>{
            const l = S(e.to);
            return t.resolve(l)
        }
        )
          , r = ye(()=>{
            const {matched: l} = s.value
              , {length: u} = l
              , c = l[u - 1]
              , f = n.matched;
            if (!c || !f.length)
                return -1;
            const d = f.findIndex(xi.bind(null, c));
            if (d > -1)
                return d;
            const h = Hd(l[u - 2]);
            return u > 1 && Hd(c) === h && f[f.length - 1].path !== h ? f.findIndex(xi.bind(null, l[u - 2])) : d
        }
        )
          , i = ye(()=>r.value > -1 && s1(n.params, s.value.params))
          , o = ye(()=>r.value > -1 && r.value === n.matched.length - 1 && xm(n.params, s.value.params));
        function a(l={}) {
            return n1(l) ? t[S(e.replace) ? "replace" : "push"](S(e.to)).catch(ro) : Promise.resolve()
        }
        return {
            route: s,
            href: ye(()=>s.value.href),
            isActive: i,
            isExactActive: o,
            navigate: a
        }
    }
    const e1 = Pe({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Vd,
        setup(e, {slots: t}) {
            const n = ls(Vd(e))
              , {options: s} = Zt(Ol)
              , r = ye(()=>({
                [Wd(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
                [Wd(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
            }));
            return ()=>{
                const i = t.default && t.default(n);
                return e.custom ? i : ju("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    })
      , t1 = e1;
    function n1(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                const t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t))
                    return
            }
            return e.preventDefault && e.preventDefault(),
            !0
        }
    }
    function s1(e, t) {
        for (const n in t) {
            const s = t[n]
              , r = e[n];
            if (typeof s == "string") {
                if (s !== r)
                    return !1
            } else if (!bn(r) || r.length !== s.length || s.some((i,o)=>i !== r[o]))
                return !1
        }
        return !0
    }
    function Hd(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
    }
    const Wd = (e,t,n)=>e ?? t ?? n
      , r1 = Pe({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {attrs: t, slots: n}) {
            const s = Zt(Dc)
              , r = ye(()=>e.route || s.value)
              , i = Zt(Bd, 0)
              , o = ye(()=>{
                let u = S(i);
                const {matched: c} = r.value;
                let f;
                for (; (f = c[u]) && !f.components; )
                    u++;
                return u
            }
            )
              , a = ye(()=>r.value.matched[o.value]);
            va(Bd, ye(()=>o.value + 1)),
            va(J0, a),
            va(Dc, r);
            const l = fe();
            return ht(()=>[l.value, a.value, e.name], ([u,c,f],[d,h,g])=>{
                c && (c.instances[f] = u,
                h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
                u && c && (!h || !xi(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(v=>v(u))
            }
            , {
                flush: "post"
            }),
            ()=>{
                const u = r.value
                  , c = e.name
                  , f = a.value
                  , d = f && f.components[c];
                if (!d)
                    return Yd(n.default, {
                        Component: d,
                        route: u
                    });
                const h = f.props[c]
                  , g = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null
                  , C = ju(d, We({}, g, t, {
                    onVnodeUnmounted: M=>{
                        M.component.isUnmounted && (f.instances[c] = null)
                    }
                    ,
                    ref: l
                }));
                return Yd(n.default, {
                    Component: C,
                    route: u
                }) || C
            }
        }
    });
    function Yd(e, t) {
        if (!e)
            return null;
        const n = e(t);
        return n.length === 1 ? n[0] : n
    }
    const i1 = r1;
    function o1(e) {
        const t = V0(e.routes, e)
          , n = e.parseQuery || G0
          , s = e.stringifyQuery || qd
          , r = e.history
          , i = Hi()
          , o = Hi()
          , a = Hi()
          , l = ty(bs);
        let u = bs;
        Br && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
        const c = nc.bind(null, P=>"" + P)
          , f = nc.bind(null, g0)
          , d = nc.bind(null, _o);
        function h(P, te) {
            let W, oe;
            return km(P) ? (W = t.getRecordMatcher(P),
            oe = te) : oe = P,
            t.addRoute(oe, W)
        }
        function g(P) {
            const te = t.getRecordMatcher(P);
            te && t.removeRoute(te)
        }
        function v() {
            return t.getRoutes().map(P=>P.record)
        }
        function C(P) {
            return !!t.getRecordMatcher(P)
        }
        function M(P, te) {
            if (te = We({}, te || l.value),
            typeof P == "string") {
                const _ = sc(n, P, te.path)
                  , x = t.resolve({
                    path: _.path
                }, te)
                  , A = r.createHref(_.fullPath);
                return We(_, x, {
                    params: d(x.params),
                    hash: _o(_.hash),
                    redirectedFrom: void 0,
                    href: A
                })
            }
            let W;
            if (P.path != null)
                W = We({}, P, {
                    path: sc(n, P.path, te.path).path
                });
            else {
                const _ = We({}, P.params);
                for (const x in _)
                    _[x] == null && delete _[x];
                W = We({}, P, {
                    params: f(_)
                }),
                te.params = f(te.params)
            }
            const oe = t.resolve(W, te)
              , He = P.hash || "";
            oe.params = c(d(oe.params));
            const st = b0(s, We({}, P, {
                hash: p0(He),
                path: oe.path
            }))
              , p = r.createHref(st);
            return We({
                fullPath: st,
                hash: He,
                query: s === qd ? Q0(P.query) : P.query || {}
            }, oe, {
                redirectedFrom: void 0,
                href: p
            })
        }
        function k(P) {
            return typeof P == "string" ? sc(n, P, l.value.path) : We({}, P)
        }
        function w(P, te) {
            if (u !== P)
                return Mi(8, {
                    from: te,
                    to: P
                })
        }
        function U(P) {
            return j(P)
        }
        function G(P) {
            return U(We(k(P), {
                replace: !0
            }))
        }
        function I(P) {
            const te = P.matched[P.matched.length - 1];
            if (te && te.redirect) {
                const {redirect: W} = te;
                let oe = typeof W == "function" ? W(P) : W;
                return typeof oe == "string" && (oe = oe.includes("?") || oe.includes("#") ? oe = k(oe) : {
                    path: oe
                },
                oe.params = {}),
                We({
                    query: P.query,
                    hash: P.hash,
                    params: oe.path != null ? {} : P.params
                }, oe)
            }
        }
        function j(P, te) {
            const W = u = M(P)
              , oe = l.value
              , He = P.state
              , st = P.force
              , p = P.replace === !0
              , _ = I(W);
            if (_)
                return j(We(k(_), {
                    state: typeof _ == "object" ? We({}, He, _.state) : He,
                    force: st,
                    replace: p
                }), te || W);
            const x = W;
            x.redirectedFrom = te;
            let A;
            return !st && w0(s, oe, W) && (A = Mi(16, {
                to: x,
                from: oe
            }),
            On(oe, oe, !0, !1)),
            (A ? Promise.resolve(A) : Q(x, oe)).catch(T=>Yn(T) ? Yn(T, 2) ? T : gs(T) : je(T, x, oe)).then(T=>{
                if (T) {
                    if (Yn(T, 2))
                        return j(We({
                            replace: p
                        }, k(T.to), {
                            state: typeof T.to == "object" ? We({}, He, T.to.state) : He,
                            force: st
                        }), te || x)
                } else
                    T = L(x, oe, !0, p, He);
                return se(x, oe, T),
                T
            }
            )
        }
        function D(P, te) {
            const W = w(P, te);
            return W ? Promise.reject(W) : Promise.resolve()
        }
        function R(P) {
            const te = Ir.values().next().value;
            return te && typeof te.runWithContext == "function" ? te.runWithContext(P) : P()
        }
        function Q(P, te) {
            let W;
            const [oe,He,st] = a1(P, te);
            W = rc(oe.reverse(), "beforeRouteLeave", P, te);
            for (const _ of oe)
                _.leaveGuards.forEach(x=>{
                    W.push(Cs(x, P, te))
                }
                );
            const p = D.bind(null, P, te);
            return W.push(p),
            Mt(W).then(()=>{
                W = [];
                for (const _ of i.list())
                    W.push(Cs(_, P, te));
                return W.push(p),
                Mt(W)
            }
            ).then(()=>{
                W = rc(He, "beforeRouteUpdate", P, te);
                for (const _ of He)
                    _.updateGuards.forEach(x=>{
                        W.push(Cs(x, P, te))
                    }
                    );
                return W.push(p),
                Mt(W)
            }
            ).then(()=>{
                W = [];
                for (const _ of st)
                    if (_.beforeEnter)
                        if (bn(_.beforeEnter))
                            for (const x of _.beforeEnter)
                                W.push(Cs(x, P, te));
                        else
                            W.push(Cs(_.beforeEnter, P, te));
                return W.push(p),
                Mt(W)
            }
            ).then(()=>(P.matched.forEach(_=>_.enterCallbacks = {}),
            W = rc(st, "beforeRouteEnter", P, te, R),
            W.push(p),
            Mt(W))).then(()=>{
                W = [];
                for (const _ of o.list())
                    W.push(Cs(_, P, te));
                return W.push(p),
                Mt(W)
            }
            ).catch(_=>Yn(_, 8) ? _ : Promise.reject(_))
        }
        function se(P, te, W) {
            a.list().forEach(oe=>R(()=>oe(P, te, W)))
        }
        function L(P, te, W, oe, He) {
            const st = w(P, te);
            if (st)
                return st;
            const p = te === bs
              , _ = Br ? history.state : {};
            W && (oe || p ? r.replace(P.fullPath, We({
                scroll: p && _ && _.scroll
            }, He)) : r.push(P.fullPath, He)),
            l.value = P,
            On(P, te, W, p),
            gs()
        }
        let re;
        function Ve() {
            re || (re = r.listen((P,te,W)=>{
                if (!ia.listening)
                    return;
                const oe = M(P)
                  , He = I(oe);
                if (He) {
                    j(We(He, {
                        replace: !0
                    }), oe).catch(ro);
                    return
                }
                u = oe;
                const st = l.value;
                Br && T0(Dd(st.fullPath, W.delta), Sl()),
                Q(oe, st).catch(p=>Yn(p, 12) ? p : Yn(p, 2) ? (j(p.to, oe).then(_=>{
                    Yn(_, 20) && !W.delta && W.type === go.pop && r.go(-1, !1)
                }
                ).catch(ro),
                Promise.reject()) : (W.delta && r.go(-W.delta, !1),
                je(p, oe, st))).then(p=>{
                    p = p || L(oe, st, !1),
                    p && (W.delta && !Yn(p, 8) ? r.go(-W.delta, !1) : W.type === go.pop && Yn(p, 20) && r.go(-1, !1)),
                    se(oe, st, p)
                }
                ).catch(ro)
            }
            ))
        }
        let Ze = Hi(), Se = Hi(), Fe;
        function je(P, te, W) {
            gs(P);
            const oe = Se.list();
            return oe.length ? oe.forEach(He=>He(P, te, W)) : console.error(P),
            Promise.reject(P)
        }
        function Wn() {
            return Fe && l.value !== bs ? Promise.resolve() : new Promise((P,te)=>{
                Ze.add([P, te])
            }
            )
        }
        function gs(P) {
            return Fe || (Fe = !P,
            Ve(),
            Ze.list().forEach(([te,W])=>P ? W(P) : te()),
            Ze.reset()),
            P
        }
        function On(P, te, W, oe) {
            const {scrollBehavior: He} = e;
            if (!Br || !He)
                return Promise.resolve();
            const st = !W && R0(Dd(P.fullPath, 0)) || (oe || !W) && history.state && history.state.scroll || null;
            return Ho().then(()=>He(P, te, st)).then(p=>p && C0(p)).catch(p=>je(p, P, te))
        }
        const Lt = P=>r.go(P);
        let Nr;
        const Ir = new Set
          , ia = {
            currentRoute: l,
            listening: !0,
            addRoute: h,
            removeRoute: g,
            hasRoute: C,
            getRoutes: v,
            resolve: M,
            options: e,
            push: U,
            replace: G,
            go: Lt,
            back: ()=>Lt(-1),
            forward: ()=>Lt(1),
            beforeEach: i.add,
            beforeResolve: o.add,
            afterEach: a.add,
            onError: Se.add,
            isReady: Wn,
            install(P) {
                const te = this;
                P.component("RouterLink", t1),
                P.component("RouterView", i1),
                P.config.globalProperties.$router = te,
                Object.defineProperty(P.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: ()=>S(l)
                }),
                Br && !Nr && l.value === bs && (Nr = !0,
                U(r.location).catch(He=>{}
                ));
                const W = {};
                for (const He in bs)
                    Object.defineProperty(W, He, {
                        get: ()=>l.value[He],
                        enumerable: !0
                    });
                P.provide(Ol, te),
                P.provide(Vu, gp(W)),
                P.provide(Dc, l);
                const oe = P.unmount;
                Ir.add(P),
                P.unmount = function() {
                    Ir.delete(P),
                    Ir.size < 1 && (u = bs,
                    re && re(),
                    re = null,
                    l.value = bs,
                    Nr = !1,
                    Fe = !1),
                    oe()
                }
            }
        };
        function Mt(P) {
            return P.reduce((te,W)=>te.then(()=>R(W)), Promise.resolve())
        }
        return ia
    }
    function a1(e, t) {
        const n = []
          , s = []
          , r = []
          , i = Math.max(t.matched.length, e.matched.length);
        for (let o = 0; o < i; o++) {
            const a = t.matched[o];
            a && (e.matched.find(u=>xi(u, a)) ? s.push(a) : n.push(a));
            const l = e.matched[o];
            l && (t.matched.find(u=>xi(u, l)) || r.push(l))
        }
        return [n, s, r]
    }
    function Cm() {
        return Zt(Ol)
    }
    function Tm() {
        return Zt(Vu)
    }
    const Or = Pe({
        __name: "Card",
        props: {
            dark: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", {
                class: le(["bg-bondex-dark/50 rounded-2xl shadow-card backdrop-blur-sm", {
                    "bg-bondex-dark/70": t.dark
                }])
            }, [Lr(n.$slots, "default")], 2))
        }
    })
      , l1 = ["srcset"]
      , c1 = ["src", "alt", "loading"]
      , Ua = Pe({
        __name: "Picture",
        props: {
            src: {},
            lazy: {
                type: Boolean
            }
        },
        emits: ["onLogoLoad"],
        setup(e, {emit: t}) {
            const n = e
              , s = t;
            function r(o) {
                return o.match(/(\b.(?:png|jpg|jpeg)\b)(?!.*\1)/g) ? o.replace(/(\b.(?:png|jpg|jpeg)\b)(?!.*\1)/g, ".avif") : o
            }
            const i = o=>{
                s("onLogoLoad")
            }
            ;
            return (o,a)=>(E(),
            V("picture", null, [m("source", {
                srcset: r(n.src),
                type: "image/avif"
            }, null, 8, l1), m("img", {
                onLoad: i,
                src: n.src,
                alt: n.src,
                loading: n.lazy === void 0 ? void 0 : n.lazy ? "lazy" : "eager"
            }, null, 40, c1)]))
        }
    })
      , u1 = {
        class: "w-8 h-8"
    }
      , f1 = Pe({
        __name: "Menu",
        setup(e) {
            const t = Tm()
              , n = [{
                title: "Home",
                path: "/",
                src: "/img/nav/home.png"
            }, {
                title: "Earn",
                path: "/earn",
                src: "/img/nav/earn.png"
            }, {
                title: "Leaders",
                path: "/leaders",
                src: "/img/nav/leaders.png"
            }, {
                title: "Friends",
                path: "/friends",
                src: "/img/nav/friends.png"
            }, {
                title: "Quests",
                path: "/quests",
                src: "/img/nav/quests.png"
            }];
            return (s,r)=>{
                const i = $u("router-link");
                return E(),
                V("nav", null, [Z(Or, {
                    class: "flex justify-between p-3 relative z-10"
                }, {
                    default: ie(()=>[(E(),
                    V(qe, null, xt(n, o=>m("div", {
                        key: o.title,
                        class: "flex flex-col gap-1 items-center"
                    }, [Z(i, {
                        to: o.path
                    }, {
                        default: ie(()=>[m("div", {
                            class: le(["w-[56px] h-[56px] flex flex-col justify-center items-center bg-bondex-dark/50 rounded-lg", {
                                "bg-gradient-to-b to-bondex-dark/50 from-bondex-green/50": o.path === S(t).path
                            }])
                        }, [m("div", u1, [Z(Ua, {
                            src: o.src,
                            class: "w-full"
                        }, null, 8, ["src"])])], 2)]),
                        _: 2
                    }, 1032, ["to"]), m("p", {
                        class: le(["text-bondex-white text-12", {
                            "text-12-bold": o.path === S(t).path
                        }])
                    }, he(o.title), 3)])), 64))]),
                    _: 1
                })])
            }
        }
    })
      , d1 = "/img/logo.svg";
    var h1 = Object.defineProperty
      , p1 = (e,t,n)=>t in e ? h1(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
      , oo = (e,t,n)=>p1(e, typeof t != "symbol" ? t + "" : t, n);
    function Rm(e, t) {
        let n;
        const s = ()=>{
            n !== void 0 && t && t(n),
            n = void 0
        }
        ;
        return [()=>n === void 0 ? n = e(s) : n, s]
    }
    class m1 {
        constructor(t, n={}) {
            this.scope = t,
            this.options = n
        }
        print(t, ...n) {
            const s = new Date
              , r = Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                fractionalSecondDigits: 3,
                timeZone: "UTC"
            }).format(s)
              , {textColor: i, bgColor: o} = this.options
              , a = "font-weight: bold;padding: 0 5px;border-radius:5px";
            console[t](`%c${r}%c / %c${this.scope}`, `${a};background-color: lightblue;color:black`, "", `${a};${i ? `color:${i};` : ""}${o ? `background-color:${o}` : ""}`, ...n)
        }
        error(...t) {
            this.print("error", ...t)
        }
        log(...t) {
            this.print("log", ...t)
        }
    }
    const _1 = new m1("SDK",{
        bgColor: "forestgreen",
        textColor: "white"
    });
    let Zd = class {
        constructor() {
            oo(this, "listeners", new Map),
            oo(this, "listenersCount", 0),
            oo(this, "subscribeListeners", [])
        }
        clear() {
            this.listeners.clear(),
            this.subscribeListeners = []
        }
        get count() {
            return this.listenersCount + this.subscribeListeners.length
        }
        emit(t, ...n) {
            this.subscribeListeners.forEach(s=>s({
                event: t,
                args: n
            })),
            (this.listeners.get(t) || []).forEach(([s,r])=>{
                s(...n),
                r && this.off(t, s)
            }
            )
        }
        on(t, n, s) {
            let r = this.listeners.get(t);
            return r || this.listeners.set(t, r = []),
            r.push([n, s]),
            this.listenersCount += 1,
            ()=>this.off(t, n)
        }
        off(t, n) {
            const s = this.listeners.get(t) || [];
            for (let r = 0; r < s.length; r += 1)
                if (n === s[r][0]) {
                    s.splice(r, 1),
                    this.listenersCount -= 1;
                    return
                }
        }
        subscribe(t) {
            return this.subscribeListeners.push(t),
            ()=>this.unsubscribe(t)
        }
        unsubscribe(t) {
            for (let n = 0; n < this.subscribeListeners.length; n += 1)
                if (this.subscribeListeners[n] === t) {
                    this.subscribeListeners.splice(n, 1);
                    return
                }
        }
    }
    ;
    function Kd(e, t, n) {
        return window.addEventListener(e, t, n),
        ()=>window.removeEventListener(e, t, n)
    }
    function Hu(...e) {
        let t = !1;
        const n = e.flat(1);
        return [s=>!t && n.push(s), ()=>{
            t || (t = !0,
            n.forEach(s=>s()))
        }
        , t]
    }
    let g1 = class Pm extends Error {
        constructor(t, n, s) {
            super(n, {
                cause: s
            }),
            this.type = t,
            Object.setPrototypeOf(this, Pm.prototype)
        }
    }
    ;
    function Er(e, t, n) {
        return new g1(e,t,n)
    }
    const y1 = "ERR_METHOD_UNSUPPORTED"
      , v1 = "ERR_METHOD_PARAMETER_UNSUPPORTED"
      , b1 = "ERR_UNKNOWN_ENV"
      , w1 = "ERR_TIMED_OUT"
      , x1 = "ERR_UNEXPECTED_TYPE"
      , Am = "ERR_PARSE";
    function Zo() {
        return Er(x1, "Value has unexpected type")
    }
    let Wu = class {
        constructor(t, n, s) {
            this.parser = t,
            this.isOptional = n,
            this.type = s
        }
        parse(t) {
            if (!(this.isOptional && t === void 0))
                try {
                    return this.parser(t)
                } catch (n) {
                    throw Er(Am, `Unable to parse value${this.type ? ` as ${this.type}` : ""}`, n)
                }
        }
        optional() {
            return this.isOptional = !0,
            this
        }
    }
    ;
    function Pi(e, t) {
        return ()=>new Wu(e,!1,t)
    }
    const Fs = Pi(e=>{
        if (typeof e == "boolean")
            return e;
        const t = String(e);
        if (t === "1" || t === "true")
            return !0;
        if (t === "0" || t === "false")
            return !1;
        throw Zo()
    }
    , "boolean");
    function $m(e, t) {
        const n = {};
        for (const s in e) {
            const r = e[s];
            if (!r)
                continue;
            let i, o;
            if (typeof r == "function" || "parse"in r)
                i = s,
                o = typeof r == "function" ? r : r.parse.bind(r);
            else {
                const {type: a} = r;
                i = r.from || s,
                o = typeof a == "function" ? a : a.parse.bind(a)
            }
            try {
                const a = o(t(i));
                a !== void 0 && (n[s] = a)
            } catch (a) {
                throw Er(Am, `Unable to parse field "${s}"`, a)
            }
        }
        return n
    }
    function Dm(e) {
        let t = e;
        if (typeof t == "string" && (t = JSON.parse(t)),
        typeof t != "object" || t === null || Array.isArray(t))
            throw Zo();
        return t
    }
    function ur(e, t) {
        return new Wu(n=>{
            const s = Dm(n);
            return $m(e, r=>s[r])
        }
        ,!1,t)
    }
    const ki = Pi(e=>{
        if (typeof e == "number")
            return e;
        if (typeof e == "string") {
            const t = Number(e);
            if (!Number.isNaN(t))
                return t
        }
        throw Zo()
    }
    , "number")
      , Xe = Pi(e=>{
        if (typeof e == "string" || typeof e == "number")
            return e.toString();
        throw Zo()
    }
    , "string");
    function M1(e) {
        return ur({
            eventType: Xe(),
            eventData: t=>t
        }).parse(e)
    }
    function k1() {
        ["TelegramGameProxy_receiveEvent", "TelegramGameProxy", "Telegram"].forEach(e=>{
            delete window[e]
        }
        )
    }
    function S1(e, t) {
        window.dispatchEvent(new MessageEvent("message",{
            data: JSON.stringify({
                eventType: e,
                eventData: t
            }),
            source: window.parent
        }))
    }
    function O1() {
        [["TelegramGameProxy_receiveEvent"], ["TelegramGameProxy", "receiveEvent"], ["Telegram", "WebView", "receiveEvent"]].forEach(e=>{
            let t = window;
            e.forEach((n,s,r)=>{
                if (s === r.length - 1) {
                    t[n] = S1;
                    return
                }
                n in t || (t[n] = {}),
                t = t[n]
            }
            )
        }
        )
    }
    const E1 = {
        clipboard_text_received: ur({
            req_id: Xe(),
            data: e=>e === null ? e : Xe().optional().parse(e)
        }),
        custom_method_invoked: ur({
            req_id: Xe(),
            result: e=>e,
            error: Xe().optional()
        }),
        popup_closed: {
            parse(e) {
                return ur({
                    button_id: t=>t == null ? void 0 : Xe().parse(t)
                }).parse(e ?? {})
            }
        },
        viewport_changed: ur({
            height: ki(),
            width: e=>e == null ? window.innerWidth : ki().parse(e),
            is_state_stable: Fs(),
            is_expanded: Fs()
        })
    };
    function C1() {
        const e = new Zd
          , t = new Zd;
        t.subscribe(s=>{
            e.emit("event", {
                name: s.event,
                payload: s.args[0]
            })
        }
        ),
        O1();
        const [,n] = Hu(k1, Kd("resize", ()=>{
            t.emit("viewport_changed", {
                width: window.innerWidth,
                height: window.innerHeight,
                is_state_stable: !0,
                is_expanded: !0
            })
        }
        ), Kd("message", s=>{
            if (s.source !== window.parent)
                return;
            let r;
            try {
                r = M1(s.data)
            } catch {
                return
            }
            const {eventType: i, eventData: o} = r
              , a = E1[i];
            try {
                const l = a ? a.parse(o) : o;
                t.emit(...l ? [i, l] : [i])
            } catch (l) {
                _1.error(`An error occurred processing the "${i}" event from the Telegram application.
Please, file an issue here:
https://github.com/Telegram-Mini-Apps/tma.js/issues/new/choose`, r, l)
            }
        }
        ), ()=>e.clear(), ()=>t.clear());
        return [{
            on: t.on.bind(t),
            off: t.off.bind(t),
            subscribe(s) {
                return e.on("event", s)
            },
            unsubscribe(s) {
                e.off("event", s)
            },
            get count() {
                return t.count + e.count
            }
        }, n]
    }
    const [T1,$T] = Rm(e=>{
        const [t,n] = C1()
          , s = t.off.bind(t);
        return t.off = (r,i)=>{
            const {count: o} = t;
            s(r, i),
            o && !t.count && e()
        }
        ,
        [t, n]
    }
    , ([,e])=>e());
    function R1() {
        return T1()[0]
    }
    function P1(e, t, n) {
        return R1().on(e, t, n)
    }
    function Yu(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }
    function A1(e, t) {
        const n = e.split(".")
          , s = t.split(".")
          , r = Math.max(n.length, s.length);
        for (let i = 0; i < r; i += 1) {
            const o = parseInt(n[i] || "0", 10)
              , a = parseInt(s[i] || "0", 10);
            if (o !== a)
                return o > a ? 1 : -1
        }
        return 0
    }
    function fn(e, t) {
        return A1(e, t) <= 0
    }
    function Si(e, t, n) {
        if (typeof n == "string") {
            if (e === "web_app_open_link") {
                if (t === "try_instant_view")
                    return fn("6.4", n);
                if (t === "try_browser")
                    return fn("7.6", n)
            }
            if (e === "web_app_set_header_color" && t === "color")
                return fn("6.9", n);
            if (e === "web_app_close" && t === "return_back")
                return fn("7.6", n)
        }
        switch (e) {
        case "web_app_open_tg_link":
        case "web_app_open_invoice":
        case "web_app_setup_back_button":
        case "web_app_set_background_color":
        case "web_app_set_header_color":
        case "web_app_trigger_haptic_feedback":
            return fn("6.1", t);
        case "web_app_open_popup":
            return fn("6.2", t);
        case "web_app_close_scan_qr_popup":
        case "web_app_open_scan_qr_popup":
        case "web_app_read_text_from_clipboard":
            return fn("6.4", t);
        case "web_app_switch_inline_query":
            return fn("6.7", t);
        case "web_app_invoke_custom_method":
        case "web_app_request_write_access":
        case "web_app_request_phone":
            return fn("6.9", t);
        case "web_app_setup_settings_button":
            return fn("6.10", t);
        case "web_app_biometry_get_info":
        case "web_app_biometry_open_settings":
        case "web_app_biometry_request_access":
        case "web_app_biometry_request_auth":
        case "web_app_biometry_update_token":
            return fn("7.2", t);
        default:
            return ["iframe_ready", "iframe_will_reload", "web_app_close", "web_app_data_send", "web_app_expand", "web_app_open_link", "web_app_ready", "web_app_request_theme", "web_app_request_viewport", "web_app_setup_main_button", "web_app_setup_closing_behavior"].includes(e)
        }
    }
    function $1(e) {
        return "external"in e && Yu(e.external) && "notify"in e.external && typeof e.external.notify == "function"
    }
    function D1(e) {
        return "TelegramWebviewProxy"in e && Yu(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && typeof e.TelegramWebviewProxy.postEvent == "function"
    }
    function L1() {
        try {
            return window.self !== window.top
        } catch {
            return !0
        }
    }
    const z1 = "https://web.telegram.org";
    let N1 = z1;
    function I1() {
        return N1
    }
    function Lm(e, t, n) {
        let s = {}, r;
        if (!t && !n ? s = {} : t && n ? (s = n,
        r = t) : t && ("targetOrigin"in t ? s = t : r = t),
        L1())
            return window.parent.postMessage(JSON.stringify({
                eventType: e,
                eventData: r
            }), s.targetOrigin || I1());
        if ($1(window)) {
            window.external.notify(JSON.stringify({
                eventType: e,
                eventData: r
            }));
            return
        }
        if (D1(window)) {
            window.TelegramWebviewProxy.postEvent(e, JSON.stringify(r));
            return
        }
        throw Er(b1, "Unable to determine current environment and possible way to send event. You are probably trying to use Mini Apps method outside the Telegram application environment.")
    }
    function F1(e) {
        return (t,n)=>{
            if (!Si(t, e))
                throw Er(y1, `Method "${t}" is unsupported in Mini Apps version ${e}`);
            if (Yu(n) && t === "web_app_set_header_color" && "color"in n && !Si(t, "color", e))
                throw Er(v1, `Parameter "color" of "${t}" method is unsupported in Mini Apps version ${e}`);
            return Lm(t, n)
        }
    }
    function j1(e) {
        return ({req_id: t})=>t === e
    }
    function U1(e) {
        return Er(w1, `Timeout reached: ${e}ms`)
    }
    function q1(e, t) {
        return Promise.race([typeof e == "function" ? e() : e, new Promise((n,s)=>{
            setTimeout(()=>{
                s(U1(t))
            }
            , t)
        }
        )])
    }
    async function B1(e) {
        let t;
        const n = new Promise(a=>t = a)
          , {event: s, capture: r, timeout: i} = e
          , [,o] = Hu((Array.isArray(s) ? s : [s]).map(a=>P1(a, l=>{
            (!r || (Array.isArray(s) ? r({
                event: a,
                payload: l
            }) : r(l))) && t(l)
        }
        )));
        try {
            return (e.postEvent || Lm)(e.method, e.params),
            await (i ? q1(n, i) : n)
        } finally {
            o()
        }
    }
    function V1(e) {
        return /^#[\da-f]{6}$/i.test(e)
    }
    function H1(e) {
        return /^#[\da-f]{3}$/i.test(e)
    }
    function W1(e) {
        const t = e.replace(/\s/g, "").toLowerCase();
        if (V1(t))
            return t;
        if (H1(t)) {
            let s = "#";
            for (let r = 0; r < 3; r += 1)
                s += t[1 + r].repeat(2);
            return s
        }
        const n = t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) || t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
        if (!n)
            throw new Error(`Value "${e}" does not satisfy any of known RGB formats.`);
        return n.slice(1).reduce((s,r)=>{
            const i = parseInt(r, 10).toString(16);
            return s + (i.length === 1 ? "0" : "") + i
        }
        , "#")
    }
    function Y1(e, t) {
        return n=>Si(t[n], e)
    }
    const Z1 = Pi(e=>e instanceof Date ? e : new Date(ki().parse(e) * 1e3), "Date");
    function zm(e, t) {
        return new Wu(n=>{
            if (typeof n != "string" && !(n instanceof URLSearchParams))
                throw Zo();
            const s = typeof n == "string" ? new URLSearchParams(n) : n;
            return $m(e, r=>{
                const i = s.get(r);
                return i === null ? void 0 : i
            }
            )
        }
        ,!1,t)
    }
    const K1 = ur({
        id: ki(),
        type: Xe(),
        title: Xe(),
        photoUrl: {
            type: Xe().optional(),
            from: "photo_url"
        },
        username: Xe().optional()
    }, "Chat").optional()
      , Gd = ur({
        addedToAttachmentMenu: {
            type: Fs().optional(),
            from: "added_to_attachment_menu"
        },
        allowsWriteToPm: {
            type: Fs().optional(),
            from: "allows_write_to_pm"
        },
        firstName: {
            type: Xe(),
            from: "first_name"
        },
        id: ki(),
        isBot: {
            type: Fs().optional(),
            from: "is_bot"
        },
        isPremium: {
            type: Fs().optional(),
            from: "is_premium"
        },
        languageCode: {
            type: Xe().optional(),
            from: "language_code"
        },
        lastName: {
            type: Xe().optional(),
            from: "last_name"
        },
        photoUrl: {
            type: Xe().optional(),
            from: "photo_url"
        },
        username: Xe().optional()
    }, "User").optional();
    function G1() {
        return zm({
            authDate: {
                type: Z1(),
                from: "auth_date"
            },
            canSendAfter: {
                type: ki().optional(),
                from: "can_send_after"
            },
            chat: K1,
            chatInstance: {
                type: Xe().optional(),
                from: "chat_instance"
            },
            chatType: {
                type: Xe().optional(),
                from: "chat_type"
            },
            hash: Xe(),
            queryId: {
                type: Xe().optional(),
                from: "query_id"
            },
            receiver: Gd,
            startParam: {
                type: Xe().optional(),
                from: "start_param"
            },
            user: Gd
        }, "InitData")
    }
    const Q1 = Pi(e=>W1(Xe().parse(e)), "rgb");
    function J1(e) {
        return e.replace(/_[a-z]/g, t=>t[1].toUpperCase())
    }
    function X1(e) {
        return e.replace(/[A-Z]/g, t=>`_${t.toLowerCase()}`)
    }
    const eb = Pi(e=>{
        const t = Q1().optional();
        return Object.entries(Dm(e)).reduce((n,[s,r])=>(n[J1(s)] = t.parse(r),
        n), {})
    }
    , "ThemeParams");
    function Nm(e) {
        return zm({
            botInline: {
                type: Fs().optional(),
                from: "tgWebAppBotInline"
            },
            initData: {
                type: G1().optional(),
                from: "tgWebAppData"
            },
            initDataRaw: {
                type: Xe().optional(),
                from: "tgWebAppData"
            },
            platform: {
                type: Xe(),
                from: "tgWebAppPlatform"
            },
            showSettings: {
                type: Fs().optional(),
                from: "tgWebAppShowSettings"
            },
            startParam: {
                type: Xe().optional(),
                from: "tgWebAppStartParam"
            },
            themeParams: {
                type: eb(),
                from: "tgWebAppThemeParams"
            },
            version: {
                type: Xe(),
                from: "tgWebAppVersion"
            }
        }).parse(e)
    }
    function Im(e) {
        return Nm(e.replace(/^[^?#]*[?#]/, "").replace(/[?#]/g, "&"))
    }
    function tb() {
        return Im(window.location.href)
    }
    function Fm() {
        return performance.getEntriesByType("navigation")[0]
    }
    function nb() {
        const e = Fm();
        if (!e)
            throw new Error("Unable to get first navigation entry.");
        return Im(e.name)
    }
    function jm(e) {
        return `tma.js/${e.replace(/[A-Z]/g, t=>`-${t.toLowerCase()}`)}`
    }
    function Um(e, t) {
        sessionStorage.setItem(jm(e), JSON.stringify(t))
    }
    function qm(e) {
        const t = sessionStorage.getItem(jm(e));
        try {
            return t ? JSON.parse(t) : void 0
        } catch {}
    }
    function sb() {
        return Nm(qm("launchParams") || "")
    }
    function rb(e) {
        return JSON.stringify(Object.fromEntries(Object.entries(e).map(([t,n])=>[X1(t), n])))
    }
    function ib(e) {
        const {initDataRaw: t, themeParams: n, platform: s, version: r, showSettings: i, startParam: o, botInline: a} = e
          , l = new URLSearchParams;
        return l.set("tgWebAppPlatform", s),
        l.set("tgWebAppThemeParams", rb(n)),
        l.set("tgWebAppVersion", r),
        t && l.set("tgWebAppData", t),
        o && l.set("tgWebAppStartParam", o),
        typeof i == "boolean" && l.set("tgWebAppShowSettings", i ? "1" : "0"),
        typeof a == "boolean" && l.set("tgWebAppBotInline", a ? "1" : "0"),
        l.toString()
    }
    function ob(e) {
        Um("launchParams", ib(e))
    }
    function Zu() {
        for (const e of [tb, nb, sb])
            try {
                const t = e();
                return ob(t),
                t
            } catch {}
        throw new Error("Unable to retrieve launch parameters from any known source.")
    }
    function ab() {
        const e = Fm();
        return !!(e && e.type === "reload")
    }
    function lb() {
        let e = 0;
        return ()=>(e += 1).toString()
    }
    const [cb] = Rm(lb);
    function Bm(e, t) {
        return ()=>{
            const n = Zu()
              , s = {
                ...n,
                postEvent: F1(n.version),
                createRequestId: cb()
            };
            if (typeof e == "function")
                return e(s);
            const [r,i,o] = Hu()
              , a = t({
                ...s,
                state: ab() ? qm(e) : void 0,
                addCleanup: r
            })
              , l = u=>(o || r(u.on("change", c=>{
                Um(e, c)
            }
            )),
            u);
            return [a instanceof Promise ? a.then(l) : l(a), i]
        }
    }
    let Vm = class {
        constructor(t, n) {
            oo(this, "supports"),
            this.supports = Y1(t, n)
        }
    }
      , ub = class extends Vm {
        constructor(t, n) {
            super(t, {
                impactOccurred: "web_app_trigger_haptic_feedback",
                notificationOccurred: "web_app_trigger_haptic_feedback",
                selectionChanged: "web_app_trigger_haptic_feedback"
            }),
            this.postEvent = n
        }
        impactOccurred(t) {
            this.postEvent("web_app_trigger_haptic_feedback", {
                type: "impact",
                impact_style: t
            })
        }
        notificationOccurred(t) {
            this.postEvent("web_app_trigger_haptic_feedback", {
                type: "notification",
                notification_type: t
            })
        }
        selectionChanged() {
            this.postEvent("web_app_trigger_haptic_feedback", {
                type: "selection_change"
            })
        }
    }
    ;
    const fb = Bm(({version: e, postEvent: t})=>new ub(e,t));
    function db(e, t) {
        return n=>{
            const [s,r] = t[n];
            return Si(s, r, e)
        }
    }
    function Qd(e, t) {
        return e.startsWith(t) ? e : `${t}${e}`
    }
    function hb(e) {
        return new URL(typeof e == "string" ? e : `${e.pathname || ""}${Qd(e.search || "", "?")}${Qd(e.hash || "", "#")}`,"http://a")
    }
    let pb = class extends Vm {
        constructor(t, n, s) {
            super(t, {
                readTextFromClipboard: "web_app_read_text_from_clipboard"
            }),
            oo(this, "supportsParam"),
            this.version = t,
            this.createRequestId = n,
            this.postEvent = s,
            this.supportsParam = db(t, {
                "openLink.tryInstantView": ["web_app_open_link", "try_instant_view"]
            })
        }
        openLink(t, n) {
            const s = hb(t).toString();
            if (!Si("web_app_open_link", this.version)) {
                window.open(s, "_blank");
                return
            }
            const r = typeof n == "boolean" ? {
                tryInstantView: n
            } : n || {};
            this.postEvent("web_app_open_link", {
                url: s,
                try_browser: r.tryBrowser,
                try_instant_view: r.tryInstantView
            })
        }
        openTelegramLink(t) {
            const {hostname: n, pathname: s, search: r} = new URL(t,"https://t.me");
            if (n !== "t.me")
                throw new Error(`URL has not allowed hostname: ${n}. Only "t.me" is allowed`);
            if (!Si("web_app_open_tg_link", this.version)) {
                window.location.href = t;
                return
            }
            this.postEvent("web_app_open_tg_link", {
                path_full: s + r
            })
        }
        async readTextFromClipboard() {
            const t = this.createRequestId()
              , {data: n=null} = await B1({
                method: "web_app_read_text_from_clipboard",
                event: "clipboard_text_received",
                postEvent: this.postEvent,
                params: {
                    req_id: t
                },
                capture: j1(t)
            });
            return n
        }
        shareURL(t, n) {
            this.openTelegramLink("https://t.me/share/url?" + new URLSearchParams({
                url: t,
                text: n || ""
            }).toString().replace(/\+/g, "%20"))
        }
    }
    ;
    const Hm = Bm(({version: e, postEvent: t, createRequestId: n})=>new pb(e,n,t))
      , mb = m("img", {
        src: d1,
        alt: "logo",
        class: "max-w-[110px]"
    }, null, -1)
      , _b = {
        class: "rounded-xl bg-bondex-dark/50 flex items-center gap-2 p-3"
    }
      , gb = {
        class: "text-bondex-white text-12"
    }
      , yb = Pe({
        __name: "Header",
        setup(e) {
            const {initData: t} = Zu();
            return (n,s)=>(E(),
            V("header", null, [Z(Or, {
                class: "py-2 px-2 flex justify-between items-center"
            }, {
                default: ie(()=>{
                    var r, i;
                    return [mb, m("div", _b, [m("p", gb, he(((i = (r = S(t)) == null ? void 0 : r.user) == null ? void 0 : i.firstName) ?? ""), 1)])]
                }
                ),
                _: 1
            })]))
        }
    })
      , vb = {
        class: "flex h-full min-h-screen max-h-screen w-full flex-col gap-2 relative overflow-hidden"
    }
      , bb = m("div", {
        class: "pointer-events-none bg-bondex-dark-green/50 blur-3xl translate-x-[-70%] w-[197px] h-[313px] absolute top-[40%]"
    }, null, -1)
      , wb = m("div", {
        class: "pointer-events-none blur-3xl bg-bondex-indigo/50 w-[197px] h-[313px] absolute top-[70%] right-0 translate-x-[50%]"
    }, null, -1)
      , xb = m("div", {
        class: "pointer-events-none w-[197px] h-[313px] blur-3xl bg-bondex-indigo/50 absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
    }, null, -1)
      , Mb = {
        class: "flex w-full flex-col flex-grow max-h-full overflow-y-auto scroll-smooth relative"
    }
      , Ai = Pe({
        __name: "Layout",
        props: {
            noMenu: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", vb, [bb, wb, xb, Z(yb, {
                class: le(["px-4", {
                    "!px-0": t.noMenu
                }])
            }, null, 8, ["class"]), m("main", Mb, [Lr(n.$slots, "default")]), t.noMenu ? ut("", !0) : (E(),
            ve(f1, {
                key: 0,
                class: "px-4"
            }))]))
        }
    });
    function qa(e) {
        return xu() ? (dl(e),
        !0) : !1
    }
    function jt(e) {
        return typeof e == "function" ? e() : S(e)
    }
    const Oi = typeof window < "u" && typeof document < "u";
    typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    const kb = Object.prototype.toString
      , Sb = e=>kb.call(e) === "[object Object]"
      , Nn = ()=>{}
      , Ob = Eb();
    function Eb() {
        var e, t;
        return Oi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
    }
    function Ku(e, t) {
        function n(...s) {
            return new Promise((r,i)=>{
                Promise.resolve(e(()=>t.apply(this, s), {
                    fn: t,
                    thisArg: this,
                    args: s
                })).then(r).catch(i)
            }
            )
        }
        return n
    }
    const Cb = e=>e();
    function Wm(e, t={}) {
        let n, s, r = Nn;
        const i = a=>{
            clearTimeout(a),
            r(),
            r = Nn
        }
        ;
        return a=>{
            const l = jt(e)
              , u = jt(t.maxWait);
            return n && i(n),
            l <= 0 || u !== void 0 && u <= 0 ? (s && (i(s),
            s = null),
            Promise.resolve(a())) : new Promise((c,f)=>{
                r = t.rejectOnCancel ? f : c,
                u && !s && (s = setTimeout(()=>{
                    n && i(n),
                    s = null,
                    c(a())
                }
                , u)),
                n = setTimeout(()=>{
                    s && i(s),
                    s = null,
                    c(a())
                }
                , l)
            }
            )
        }
    }
    function Tb(...e) {
        let t = 0, n, s = !0, r = Nn, i, o, a, l, u;
        !it(e[0]) && typeof e[0] == "object" ? {delay: o, trailing: a=!0, leading: l=!0, rejectOnCancel: u=!1} = e[0] : [o,a=!0,l=!0,u=!1] = e;
        const c = ()=>{
            n && (clearTimeout(n),
            n = void 0,
            r(),
            r = Nn)
        }
        ;
        return d=>{
            const h = jt(o)
              , g = Date.now() - t
              , v = ()=>i = d();
            return c(),
            h <= 0 ? (t = Date.now(),
            v()) : (g > h && (l || !s) ? (t = Date.now(),
            v()) : a && (i = new Promise((C,M)=>{
                r = u ? M : C,
                n = setTimeout(()=>{
                    t = Date.now(),
                    s = !0,
                    C(v()),
                    c()
                }
                , Math.max(0, h - g))
            }
            )),
            !l && !n && (n = setTimeout(()=>s = !0, h)),
            s = !1,
            i)
        }
    }
    function Rb(e) {
        let t;
        function n() {
            return t || (t = e()),
            t
        }
        return n.reset = async()=>{
            const s = t;
            t = void 0,
            s && await s
        }
        ,
        n
    }
    function Pb(e) {
        return wl()
    }
    function Ab(e, t=200, n={}) {
        return Ku(Wm(t, n), e)
    }
    function $b(e, t=200, n=!1, s=!0, r=!1) {
        return Ku(Tb(t, n, s, r), e)
    }
    function Db(e, t, n={}) {
        const {eventFilter: s=Cb, ...r} = n;
        return ht(e, Ku(s, t), r)
    }
    function Lb(e, t=!0, n) {
        Pb() ? Wo(e, n) : t ? e() : Ho(e)
    }
    function zb(e, t=1e3, n={}) {
        const {immediate: s=!0, immediateCallback: r=!1} = n;
        let i = null;
        const o = fe(!1);
        function a() {
            i && (clearInterval(i),
            i = null)
        }
        function l() {
            o.value = !1,
            a()
        }
        function u() {
            const c = jt(t);
            c <= 0 || (o.value = !0,
            r && e(),
            a(),
            i = setInterval(e, c))
        }
        if (s && Oi && u(),
        it(t) || typeof t == "function") {
            const c = ht(t, ()=>{
                o.value && Oi && u()
            }
            );
            qa(c)
        }
        return qa(l),
        {
            isActive: o,
            pause: l,
            resume: u
        }
    }
    function Nb(e, t, n={}) {
        const {immediate: s=!0} = n
          , r = fe(!1);
        let i = null;
        function o() {
            i && (clearTimeout(i),
            i = null)
        }
        function a() {
            r.value = !1,
            o()
        }
        function l(...u) {
            o(),
            r.value = !0,
            i = setTimeout(()=>{
                r.value = !1,
                i = null,
                e(...u)
            }
            , jt(t))
        }
        return s && (r.value = !0,
        Oi && l()),
        qa(a),
        {
            isPending: Vo(r),
            start: l,
            stop: a
        }
    }
    function Ib(e, t, n={}) {
        const {debounce: s=0, maxWait: r=void 0, ...i} = n;
        return Db(e, t, {
            ...i,
            eventFilter: Wm(s, {
                maxWait: r
            })
        })
    }
    function Fb(e, t, n) {
        const s = ht(e, (...r)=>(Ho(()=>s()),
        t(...r)), n);
        return s
    }
    function Wr(e) {
        var t;
        const n = jt(e);
        return (t = n == null ? void 0 : n.$el) != null ? t : n
    }
    const Gu = Oi ? window : void 0
      , Ym = Oi ? window.navigator : void 0;
    function xr(...e) {
        let t, n, s, r;
        if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,s,r] = e,
        t = Gu) : [t,n,s,r] = e,
        !t)
            return Nn;
        Array.isArray(n) || (n = [n]),
        Array.isArray(s) || (s = [s]);
        const i = []
          , o = ()=>{
            i.forEach(c=>c()),
            i.length = 0
        }
          , a = (c,f,d,h)=>(c.addEventListener(f, d, h),
        ()=>c.removeEventListener(f, d, h))
          , l = ht(()=>[Wr(t), jt(r)], ([c,f])=>{
            if (o(),
            !c)
                return;
            const d = Sb(f) ? {
                ...f
            } : f;
            i.push(...n.flatMap(h=>s.map(g=>a(c, h, g, d))))
        }
        , {
            immediate: !0,
            flush: "post"
        })
          , u = ()=>{
            l(),
            o()
        }
        ;
        return qa(u),
        u
    }
    let Jd = !1;
    function jb(e, t, n={}) {
        const {window: s=Gu, ignore: r=[], capture: i=!0, detectIframe: o=!1} = n;
        if (!s)
            return Nn;
        Ob && !Jd && (Jd = !0,
        Array.from(s.document.body.children).forEach(d=>d.addEventListener("click", Nn)),
        s.document.documentElement.addEventListener("click", Nn));
        let a = !0;
        const l = d=>r.some(h=>{
            if (typeof h == "string")
                return Array.from(s.document.querySelectorAll(h)).some(g=>g === d.target || d.composedPath().includes(g));
            {
                const g = Wr(h);
                return g && (d.target === g || d.composedPath().includes(g))
            }
        }
        )
          , c = [xr(s, "click", d=>{
            const h = Wr(e);
            if (!(!h || h === d.target || d.composedPath().includes(h))) {
                if (d.detail === 0 && (a = !l(d)),
                !a) {
                    a = !0;
                    return
                }
                t(d)
            }
        }
        , {
            passive: !0,
            capture: i
        }), xr(s, "pointerdown", d=>{
            const h = Wr(e);
            a = !l(d) && !!(h && !d.composedPath().includes(h))
        }
        , {
            passive: !0
        }), o && xr(s, "blur", d=>{
            setTimeout(()=>{
                var h;
                const g = Wr(e);
                ((h = s.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(g != null && g.contains(s.document.activeElement)) && t(d)
            }
            , 0)
        }
        )].filter(Boolean);
        return ()=>c.forEach(d=>d())
    }
    function Ub() {
        const e = fe(!1)
          , t = wl();
        return t && Wo(()=>{
            e.value = !0
        }
        , t),
        e
    }
    function Zm(e) {
        const t = Ub();
        return ye(()=>(t.value,
        !!e()))
    }
    function Xd(e, t={}) {
        const {controls: n=!1, navigator: s=Ym} = t
          , r = Zm(()=>s && "permissions"in s);
        let i;
        const o = typeof e == "string" ? {
            name: e
        } : e
          , a = fe()
          , l = ()=>{
            i && (a.value = i.state)
        }
          , u = Rb(async()=>{
            if (r.value) {
                if (!i)
                    try {
                        i = await s.permissions.query(o),
                        xr(i, "change", l),
                        l()
                    } catch {
                        a.value = "prompt"
                    }
                return i
            }
        }
        );
        return u(),
        n ? {
            state: a,
            isSupported: r,
            query: u
        } : a
    }
    function qb(e={}) {
        const {navigator: t=Ym, read: n=!1, source: s, copiedDuring: r=1500, legacy: i=!1} = e
          , o = Zm(()=>t && "clipboard"in t)
          , a = Xd("clipboard-read")
          , l = Xd("clipboard-write")
          , u = ye(()=>o.value || i)
          , c = fe("")
          , f = fe(!1)
          , d = Nb(()=>f.value = !1, r);
        function h() {
            o.value && M(a.value) ? t.clipboard.readText().then(k=>{
                c.value = k
            }
            ) : c.value = C()
        }
        u.value && n && xr(["copy", "cut"], h);
        async function g(k=jt(s)) {
            u.value && k != null && (o.value && M(l.value) ? await t.clipboard.writeText(k) : v(k),
            c.value = k,
            f.value = !0,
            d.start())
        }
        function v(k) {
            const w = document.createElement("textarea");
            w.value = k ?? "",
            w.style.position = "absolute",
            w.style.opacity = "0",
            document.body.appendChild(w),
            w.select(),
            document.execCommand("copy"),
            w.remove()
        }
        function C() {
            var k, w, U;
            return (U = (w = (k = document == null ? void 0 : document.getSelection) == null ? void 0 : k.call(document)) == null ? void 0 : w.toString()) != null ? U : ""
        }
        function M(k) {
            return k === "granted" || k === "prompt"
        }
        return {
            isSupported: u,
            text: c,
            copied: f,
            copy: g
        }
    }
    const eh = 1;
    function Ko(e, t={}) {
        const {throttle: n=0, idle: s=200, onStop: r=Nn, onScroll: i=Nn, offset: o={
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, eventListenerOptions: a={
            capture: !1,
            passive: !0
        }, behavior: l="auto", window: u=Gu, onError: c=j=>{
            console.error(j)
        }
        } = t
          , f = fe(0)
          , d = fe(0)
          , h = ye({
            get() {
                return f.value
            },
            set(j) {
                v(j, void 0)
            }
        })
          , g = ye({
            get() {
                return d.value
            },
            set(j) {
                v(void 0, j)
            }
        });
        function v(j, D) {
            var R, Q, se, L;
            if (!u)
                return;
            const re = jt(e);
            if (!re)
                return;
            (se = re instanceof Document ? u.document.body : re) == null || se.scrollTo({
                top: (R = jt(D)) != null ? R : g.value,
                left: (Q = jt(j)) != null ? Q : h.value,
                behavior: jt(l)
            });
            const Ve = ((L = re == null ? void 0 : re.document) == null ? void 0 : L.documentElement) || (re == null ? void 0 : re.documentElement) || re;
            h != null && (f.value = Ve.scrollLeft),
            g != null && (d.value = Ve.scrollTop)
        }
        const C = fe(!1)
          , M = ls({
            left: !0,
            right: !1,
            top: !0,
            bottom: !1
        })
          , k = ls({
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        })
          , w = j=>{
            C.value && (C.value = !1,
            k.left = !1,
            k.right = !1,
            k.top = !1,
            k.bottom = !1,
            r(j))
        }
          , U = Ab(w, n + s)
          , G = j=>{
            var D;
            if (!u)
                return;
            const R = ((D = j == null ? void 0 : j.document) == null ? void 0 : D.documentElement) || (j == null ? void 0 : j.documentElement) || Wr(j)
              , {display: Q, flexDirection: se} = getComputedStyle(R)
              , L = R.scrollLeft;
            k.left = L < f.value,
            k.right = L > f.value;
            const re = Math.abs(L) <= (o.left || 0)
              , Ve = Math.abs(L) + R.clientWidth >= R.scrollWidth - (o.right || 0) - eh;
            Q === "flex" && se === "row-reverse" ? (M.left = Ve,
            M.right = re) : (M.left = re,
            M.right = Ve),
            f.value = L;
            let Ze = R.scrollTop;
            j === u.document && !Ze && (Ze = u.document.body.scrollTop),
            k.top = Ze < d.value,
            k.bottom = Ze > d.value;
            const Se = Math.abs(Ze) <= (o.top || 0)
              , Fe = Math.abs(Ze) + R.clientHeight >= R.scrollHeight - (o.bottom || 0) - eh;
            Q === "flex" && se === "column-reverse" ? (M.top = Fe,
            M.bottom = Se) : (M.top = Se,
            M.bottom = Fe),
            d.value = Ze
        }
          , I = j=>{
            var D;
            if (!u)
                return;
            const R = (D = j.target.documentElement) != null ? D : j.target;
            G(R),
            C.value = !0,
            U(j),
            i(j)
        }
        ;
        return xr(e, "scroll", n ? $b(I, n, !0, !1) : I, a),
        Lb(()=>{
            try {
                const j = jt(e);
                if (!j)
                    return;
                G(j)
            } catch (j) {
                c(j)
            }
        }
        ),
        xr(e, "scrollend", w, a),
        {
            x: h,
            y: g,
            isScrolling: C,
            arrivedState: M,
            directions: k,
            measure() {
                const j = jt(e);
                u && j && G(j)
            }
        }
    }
    var Bb = e=>{
        let t = Object.keys(e).sort((n,s)=>n.localeCompare(s));
        if (t.some(n=>n.startsWith("_")))
            throw new Error('Keys that start with "_" are reserved for Query Key Factory');
        return t
    }
    ;
    function vt(e) {
        return Object.assign(Object.create(null), e)
    }
    function Km(e, t) {
        let n = {
            _def: [e]
        };
        if (t == null)
            return vt(n);
        let s = (i,o)=>Bb(i).reduce((a,l)=>{
            let u = i[l], c = [...o, l], f = h=>Array.isArray(h), d;
            if (typeof u == "function") {
                let h = (...g)=>{
                    let v = u(...g);
                    if (f(v))
                        return vt({
                            queryKey: [...c, ...v]
                        });
                    let C = [...c, ...v.queryKey];
                    if ("queryFn"in v) {
                        let M = {
                            queryKey: C,
                            queryFn: v.queryFn
                        };
                        if ("contextQueries"in v) {
                            let k = s(v.contextQueries, C);
                            return vt({
                                _ctx: vt(Object.fromEntries(k)),
                                ...M
                            })
                        }
                        return vt({
                            ...M
                        })
                    }
                    if ("contextQueries"in v) {
                        let M = s(v.contextQueries, C);
                        return vt({
                            _ctx: vt(Object.fromEntries(M)),
                            queryKey: C
                        })
                    }
                    return vt({
                        queryKey: C
                    })
                }
                ;
                h._def = c,
                d = h
            } else if (u == null)
                d = vt({
                    queryKey: c
                });
            else if (f(u))
                d = vt({
                    _def: c,
                    queryKey: [...c, ...u]
                });
            else if ("queryFn"in u) {
                let h = {
                    ...u.queryKey ? {
                        _def: c
                    } : void 0
                }
                  , g = [...c, ...u.queryKey ?? []]
                  , v = {
                    queryKey: g,
                    queryFn: u.queryFn
                };
                if ("contextQueries"in u) {
                    let C = s(u.contextQueries, g);
                    d = vt({
                        _ctx: vt(Object.fromEntries(C)),
                        ...h,
                        ...v
                    })
                } else
                    d = vt({
                        ...h,
                        ...v
                    })
            } else if ("contextQueries"in u) {
                let h = {
                    ...u.queryKey ? {
                        _def: c
                    } : void 0
                }
                  , g = [...c, ...u.queryKey ?? []]
                  , v = s(u.contextQueries, g);
                d = vt({
                    _ctx: vt(Object.fromEntries(v)),
                    queryKey: g,
                    ...h
                })
            } else {
                let h = {
                    ...u.queryKey ? {
                        _def: c
                    } : void 0
                }
                  , g = [...c, ...u.queryKey ?? []];
                d = vt({
                    queryKey: g,
                    ...h
                })
            }
            return a.set(l, d),
            a
        }
        , new Map)
          , r = s(t, n._def);
        return vt({
            ...Object.fromEntries(r),
            ...n
        })
    }
    var $i = class {
        constructor() {
            this.listeners = new Set,
            this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e),
            this.onSubscribe(),
            ()=>{
                this.listeners.delete(e),
                this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    }
      , Cr = typeof window > "u" || "Deno"in globalThis;
    function en() {}
    function Vb(e, t) {
        return typeof e == "function" ? e(t) : e
    }
    function Lc(e) {
        return typeof e == "number" && e >= 0 && e !== 1 / 0
    }
    function Gm(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0)
    }
    function ei(e, t) {
        return typeof e == "function" ? e(t) : e
    }
    function hn(e, t) {
        return typeof e == "function" ? e(t) : e
    }
    function th(e, t) {
        const {type: n="all", exact: s, fetchStatus: r, predicate: i, queryKey: o, stale: a} = e;
        if (o) {
            if (s) {
                if (t.queryHash !== Qu(o, t.options))
                    return !1
            } else if (!yo(t.queryKey, o))
                return !1
        }
        if (n !== "all") {
            const l = t.isActive();
            if (n === "active" && !l || n === "inactive" && l)
                return !1
        }
        return !(typeof a == "boolean" && t.isStale() !== a || r && r !== t.state.fetchStatus || i && !i(t))
    }
    function nh(e, t) {
        const {exact: n, status: s, predicate: r, mutationKey: i} = e;
        if (i) {
            if (!t.options.mutationKey)
                return !1;
            if (n) {
                if (Tr(t.options.mutationKey) !== Tr(i))
                    return !1
            } else if (!yo(t.options.mutationKey, i))
                return !1
        }
        return !(s && t.state.status !== s || r && !r(t))
    }
    function Qu(e, t) {
        return ((t == null ? void 0 : t.queryKeyHashFn) || Tr)(e)
    }
    function Tr(e) {
        return JSON.stringify(e, (t,n)=>zc(n) ? Object.keys(n).sort().reduce((s,r)=>(s[r] = n[r],
        s), {}) : n)
    }
    function yo(e, t) {
        return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n=>!yo(e[n], t[n])) : !1
    }
    function Qm(e, t) {
        if (e === t)
            return e;
        const n = sh(e) && sh(t);
        if (n || zc(e) && zc(t)) {
            const s = n ? e : Object.keys(e)
              , r = s.length
              , i = n ? t : Object.keys(t)
              , o = i.length
              , a = n ? [] : {};
            let l = 0;
            for (let u = 0; u < o; u++) {
                const c = n ? u : i[u];
                (!n && s.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0,
                l++) : (a[c] = Qm(e[c], t[c]),
                a[c] === e[c] && e[c] !== void 0 && l++)
            }
            return r === o && l === r ? e : a
        }
        return t
    }
    function Ba(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (const n in e)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function sh(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length
    }
    function zc(e) {
        if (!rh(e))
            return !1;
        const t = e.constructor;
        if (t === void 0)
            return !0;
        const n = t.prototype;
        return !(!rh(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
    }
    function rh(e) {
        return Object.prototype.toString.call(e) === "[object Object]"
    }
    function Hb(e) {
        return new Promise(t=>{
            setTimeout(t, e)
        }
        )
    }
    function Nc(e, t, n) {
        return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Qm(e, t) : t
    }
    function Wb(e, t, n=0) {
        const s = [...e, t];
        return n && s.length > n ? s.slice(1) : s
    }
    function Yb(e, t, n=0) {
        const s = [t, ...e];
        return n && s.length > n ? s.slice(0, -1) : s
    }
    var Jm = Symbol(), Xm = (e,t)=>!e.queryFn && (t != null && t.initialPromise) ? ()=>t.initialPromise : !e.queryFn || e.queryFn === Jm ? ()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn, dr, Ps, oi, jh, Zb = (jh = class extends $i {
        constructor() {
            super();
            me(this, dr);
            me(this, Ps);
            me(this, oi);
            X(this, oi, t=>{
                if (!Cr && window.addEventListener) {
                    const n = ()=>t();
                    return window.addEventListener("visibilitychange", n, !1),
                    ()=>{
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            }
            )
        }
        onSubscribe() {
            y(this, Ps) || this.setEventListener(y(this, oi))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = y(this, Ps)) == null || t.call(this),
            X(this, Ps, void 0))
        }
        setEventListener(t) {
            var n;
            X(this, oi, t),
            (n = y(this, Ps)) == null || n.call(this),
            X(this, Ps, t(s=>{
                typeof s == "boolean" ? this.setFocused(s) : this.onFocus()
            }
            ))
        }
        setFocused(t) {
            y(this, dr) !== t && (X(this, dr, t),
            this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n=>{
                n(t)
            }
            )
        }
        isFocused() {
            var t;
            return typeof y(this, dr) == "boolean" ? y(this, dr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }
    ,
    dr = new WeakMap,
    Ps = new WeakMap,
    oi = new WeakMap,
    jh), Ju = new Zb, ai, As, li, Uh, Kb = (Uh = class extends $i {
        constructor() {
            super();
            me(this, ai, !0);
            me(this, As);
            me(this, li);
            X(this, li, t=>{
                if (!Cr && window.addEventListener) {
                    const n = ()=>t(!0)
                      , s = ()=>t(!1);
                    return window.addEventListener("online", n, !1),
                    window.addEventListener("offline", s, !1),
                    ()=>{
                        window.removeEventListener("online", n),
                        window.removeEventListener("offline", s)
                    }
                }
            }
            )
        }
        onSubscribe() {
            y(this, As) || this.setEventListener(y(this, li))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = y(this, As)) == null || t.call(this),
            X(this, As, void 0))
        }
        setEventListener(t) {
            var n;
            X(this, li, t),
            (n = y(this, As)) == null || n.call(this),
            X(this, As, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            y(this, ai) !== t && (X(this, ai, t),
            this.listeners.forEach(s=>{
                s(t)
            }
            ))
        }
        isOnline() {
            return y(this, ai)
        }
    }
    ,
    ai = new WeakMap,
    As = new WeakMap,
    li = new WeakMap,
    Uh), Va = new Kb;
    function Gb(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }
    function e_(e) {
        return (e ?? "online") === "online" ? Va.isOnline() : !0
    }
    var t_ = class {
        constructor(e) {
            this.revert = e == null ? void 0 : e.revert,
            this.silent = e == null ? void 0 : e.silent
        }
    }
    ;
    function ic(e) {
        return e instanceof t_
    }
    function n_(e) {
        let t = !1, n = 0, s = !1, r, i, o;
        const a = new Promise((M,k)=>{
            i = M,
            o = k
        }
        )
          , l = M=>{
            var k;
            s || (g(new t_(M)),
            (k = e.abort) == null || k.call(e))
        }
          , u = ()=>{
            t = !0
        }
          , c = ()=>{
            t = !1
        }
          , f = ()=>Ju.isFocused() && (e.networkMode === "always" || Va.isOnline()) && e.canRun()
          , d = ()=>e_(e.networkMode) && e.canRun()
          , h = M=>{
            var k;
            s || (s = !0,
            (k = e.onSuccess) == null || k.call(e, M),
            r == null || r(),
            i(M))
        }
          , g = M=>{
            var k;
            s || (s = !0,
            (k = e.onError) == null || k.call(e, M),
            r == null || r(),
            o(M))
        }
          , v = ()=>new Promise(M=>{
            var k;
            r = w=>{
                (s || f()) && M(w)
            }
            ,
            (k = e.onPause) == null || k.call(e)
        }
        ).then(()=>{
            var M;
            r = void 0,
            s || (M = e.onContinue) == null || M.call(e)
        }
        )
          , C = ()=>{
            if (s)
                return;
            let M;
            const k = n === 0 ? e.initialPromise : void 0;
            try {
                M = k ?? e.fn()
            } catch (w) {
                M = Promise.reject(w)
            }
            Promise.resolve(M).then(h).catch(w=>{
                var D;
                if (s)
                    return;
                const U = e.retry ?? (Cr ? 0 : 3)
                  , G = e.retryDelay ?? Gb
                  , I = typeof G == "function" ? G(n, w) : G
                  , j = U === !0 || typeof U == "number" && n < U || typeof U == "function" && U(n, w);
                if (t || !j) {
                    g(w);
                    return
                }
                n++,
                (D = e.onFail) == null || D.call(e, n, w),
                Hb(I).then(()=>f() ? void 0 : v()).then(()=>{
                    t ? g(w) : C()
                }
                )
            }
            )
        }
        ;
        return {
            promise: a,
            cancel: l,
            continue: ()=>(r == null || r(),
            a),
            cancelRetry: u,
            continueRetry: c,
            canStart: d,
            start: ()=>(d() ? C() : v().then(C),
            a)
        }
    }
    function Qb() {
        let e = []
          , t = 0
          , n = d=>{
            d()
        }
          , s = d=>{
            d()
        }
          , r = d=>setTimeout(d, 0);
        const i = d=>{
            r = d
        }
          , o = d=>{
            let h;
            t++;
            try {
                h = d()
            } finally {
                t--,
                t || u()
            }
            return h
        }
          , a = d=>{
            t ? e.push(d) : r(()=>{
                n(d)
            }
            )
        }
          , l = d=>(...h)=>{
            a(()=>{
                d(...h)
            }
            )
        }
          , u = ()=>{
            const d = e;
            e = [],
            d.length && r(()=>{
                s(()=>{
                    d.forEach(h=>{
                        n(h)
                    }
                    )
                }
                )
            }
            )
        }
        ;
        return {
            batch: o,
            batchCalls: l,
            schedule: a,
            setNotifyFunction: d=>{
                n = d
            }
            ,
            setBatchNotifyFunction: d=>{
                s = d
            }
            ,
            setScheduler: i
        }
    }
    var bt = Qb(), hr, qh, s_ = (qh = class {
        constructor() {
            me(this, hr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(),
            Lc(this.gcTime) && X(this, hr, setTimeout(()=>{
                this.optionalRemove()
            }
            , this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (Cr ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            y(this, hr) && (clearTimeout(y(this, hr)),
            X(this, hr, void 0))
        }
    }
    ,
    hr = new WeakMap,
    qh), ci, ui, Xt, kt, Fo, pr, dn, Gn, Bh, Jb = (Bh = class extends s_ {
        constructor(t) {
            super();
            me(this, dn);
            me(this, ci);
            me(this, ui);
            me(this, Xt);
            me(this, kt);
            me(this, Fo);
            me(this, pr);
            X(this, pr, !1),
            X(this, Fo, t.defaultOptions),
            this.setOptions(t.options),
            this.observers = [],
            X(this, Xt, t.cache),
            this.queryKey = t.queryKey,
            this.queryHash = t.queryHash,
            X(this, ci, t.state || Xb(this.options)),
            this.state = y(this, ci),
            this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = y(this, kt)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = {
                ...y(this, Fo),
                ...t
            },
            this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && y(this, Xt).remove(this)
        }
        setData(t, n) {
            const s = Nc(this.state.data, t, this.options);
            return Oe(this, dn, Gn).call(this, {
                data: s,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }),
            s
        }
        setState(t, n) {
            Oe(this, dn, Gn).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var s, r;
            const n = (s = y(this, kt)) == null ? void 0 : s.promise;
            return (r = y(this, kt)) == null || r.cancel(t),
            n ? n.then(en).catch(en) : Promise.resolve()
        }
        destroy() {
            super.destroy(),
            this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(),
            this.setState(y(this, ci))
        }
        isActive() {
            return this.observers.some(t=>hn(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t=>t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t=0) {
            return this.state.isInvalidated || this.state.data === void 0 || !Gm(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(s=>s.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
            (n = y(this, kt)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(s=>s.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }),
            (n = y(this, kt)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t),
            this.clearGcTimeout(),
            y(this, Xt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n=>n !== t),
            this.observers.length || (y(this, kt) && (y(this, pr) ? y(this, kt).cancel({
                revert: !0
            }) : y(this, kt).cancelRetry()),
            this.scheduleGc()),
            y(this, Xt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Oe(this, dn, Gn).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var l, u, c;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                    this.cancel({
                        silent: !0
                    });
                else if (y(this, kt))
                    return y(this, kt).continueRetry(),
                    y(this, kt).promise
            }
            if (t && this.setOptions(t),
            !this.options.queryFn) {
                const f = this.observers.find(d=>d.options.queryFn);
                f && this.setOptions(f.options)
            }
            const s = new AbortController
              , r = f=>{
                Object.defineProperty(f, "signal", {
                    enumerable: !0,
                    get: ()=>(X(this, pr, !0),
                    s.signal)
                })
            }
              , i = ()=>{
                const f = Xm(this.options, n)
                  , d = {
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(d),
                X(this, pr, !1),
                this.options.persister ? this.options.persister(f, d, this) : f(d)
            }
              , o = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: i
            };
            r(o),
            (l = this.options.behavior) == null || l.onFetch(o, this),
            X(this, ui, this.state),
            (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) && Oe(this, dn, Gn).call(this, {
                type: "fetch",
                meta: (c = o.fetchOptions) == null ? void 0 : c.meta
            });
            const a = f=>{
                var d, h, g, v;
                ic(f) && f.silent || Oe(this, dn, Gn).call(this, {
                    type: "error",
                    error: f
                }),
                ic(f) || ((h = (d = y(this, Xt).config).onError) == null || h.call(d, f, this),
                (v = (g = y(this, Xt).config).onSettled) == null || v.call(g, this.state.data, f, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                this.isFetchingOptimistic = !1
            }
            ;
            return X(this, kt, n_({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: o.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: f=>{
                    var d, h, g, v;
                    if (f === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    this.setData(f),
                    (h = (d = y(this, Xt).config).onSuccess) == null || h.call(d, f, this),
                    (v = (g = y(this, Xt).config).onSettled) == null || v.call(g, f, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    this.isFetchingOptimistic = !1
                }
                ,
                onError: a,
                onFail: (f,d)=>{
                    Oe(this, dn, Gn).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: d
                    })
                }
                ,
                onPause: ()=>{
                    Oe(this, dn, Gn).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: ()=>{
                    Oe(this, dn, Gn).call(this, {
                        type: "continue"
                    })
                }
                ,
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: ()=>!0
            })),
            y(this, kt).start()
        }
    }
    ,
    ci = new WeakMap,
    ui = new WeakMap,
    Xt = new WeakMap,
    kt = new WeakMap,
    Fo = new WeakMap,
    pr = new WeakMap,
    dn = new WeakSet,
    Gn = function(t) {
        const n = s=>{
            switch (t.type) {
            case "failed":
                return {
                    ...s,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error
                };
            case "pause":
                return {
                    ...s,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...s,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...s,
                    ...r_(s.data, this.options),
                    fetchMeta: t.meta ?? null
                };
            case "success":
                return {
                    ...s,
                    data: t.data,
                    dataUpdateCount: s.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const r = t.error;
                return ic(r) && r.revert && y(this, ui) ? {
                    ...y(this, ui),
                    fetchStatus: "idle"
                } : {
                    ...s,
                    error: r,
                    errorUpdateCount: s.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: s.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...s,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...s,
                    ...t.state
                }
            }
        }
        ;
        this.state = n(this.state),
        bt.batch(()=>{
            this.observers.forEach(s=>{
                s.onQueryUpdate()
            }
            ),
            y(this, Xt).notify({
                query: this,
                type: "updated",
                action: t
            })
        }
        )
    }
    ,
    Bh);
    function r_(e, t) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: e_(t.networkMode) ? "fetching" : "paused",
            ...e === void 0 && {
                error: null,
                status: "pending"
            }
        }
    }
    function Xb(e) {
        const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
          , n = t !== void 0
          , s = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
        return {
            data: t,
            dataUpdateCount: 0,
            dataUpdatedAt: n ? s ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: n ? "success" : "pending",
            fetchStatus: "idle"
        }
    }
    var Tn, Vh, i_ = (Vh = class extends $i {
        constructor(n={}) {
            super();
            me(this, Tn);
            this.config = n,
            X(this, Tn, new Map)
        }
        build(n, s, r) {
            const i = s.queryKey
              , o = s.queryHash ?? Qu(i, s);
            let a = this.get(o);
            return a || (a = new Jb({
                cache: this,
                queryKey: i,
                queryHash: o,
                options: n.defaultQueryOptions(s),
                state: r,
                defaultOptions: n.getQueryDefaults(i)
            }),
            this.add(a)),
            a
        }
        add(n) {
            y(this, Tn).has(n.queryHash) || (y(this, Tn).set(n.queryHash, n),
            this.notify({
                type: "added",
                query: n
            }))
        }
        remove(n) {
            const s = y(this, Tn).get(n.queryHash);
            s && (n.destroy(),
            s === n && y(this, Tn).delete(n.queryHash),
            this.notify({
                type: "removed",
                query: n
            }))
        }
        clear() {
            bt.batch(()=>{
                this.getAll().forEach(n=>{
                    this.remove(n)
                }
                )
            }
            )
        }
        get(n) {
            return y(this, Tn).get(n)
        }
        getAll() {
            return [...y(this, Tn).values()]
        }
        find(n) {
            const s = {
                exact: !0,
                ...n
            };
            return this.getAll().find(r=>th(s, r))
        }
        findAll(n={}) {
            const s = this.getAll();
            return Object.keys(n).length > 0 ? s.filter(r=>th(n, r)) : s
        }
        notify(n) {
            bt.batch(()=>{
                this.listeners.forEach(s=>{
                    s(n)
                }
                )
            }
            )
        }
        onFocus() {
            bt.batch(()=>{
                this.getAll().forEach(n=>{
                    n.onFocus()
                }
                )
            }
            )
        }
        onOnline() {
            bt.batch(()=>{
                this.getAll().forEach(n=>{
                    n.onOnline()
                }
                )
            }
            )
        }
    }
    ,
    Tn = new WeakMap,
    Vh), Rn, Rt, mr, Pn, ks, Hh, ew = (Hh = class extends s_ {
        constructor(t) {
            super();
            me(this, Pn);
            me(this, Rn);
            me(this, Rt);
            me(this, mr);
            this.mutationId = t.mutationId,
            X(this, Rt, t.mutationCache),
            X(this, Rn, []),
            this.state = t.state || o_(),
            this.setOptions(t.options),
            this.scheduleGc()
        }
        setOptions(t) {
            this.options = t,
            this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            y(this, Rn).includes(t) || (y(this, Rn).push(t),
            this.clearGcTimeout(),
            y(this, Rt).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            X(this, Rn, y(this, Rn).filter(n=>n !== t)),
            this.scheduleGc(),
            y(this, Rt).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            y(this, Rn).length || (this.state.status === "pending" ? this.scheduleGc() : y(this, Rt).remove(this))
        }
        continue() {
            var t;
            return ((t = y(this, mr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var r, i, o, a, l, u, c, f, d, h, g, v, C, M, k, w, U, G, I, j;
            X(this, mr, n_({
                fn: ()=>this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (D,R)=>{
                    Oe(this, Pn, ks).call(this, {
                        type: "failed",
                        failureCount: D,
                        error: R
                    })
                }
                ,
                onPause: ()=>{
                    Oe(this, Pn, ks).call(this, {
                        type: "pause"
                    })
                }
                ,
                onContinue: ()=>{
                    Oe(this, Pn, ks).call(this, {
                        type: "continue"
                    })
                }
                ,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: ()=>y(this, Rt).canRun(this)
            }));
            const n = this.state.status === "pending"
              , s = !y(this, mr).canStart();
            try {
                if (!n) {
                    Oe(this, Pn, ks).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: s
                    }),
                    await ((i = (r = y(this, Rt).config).onMutate) == null ? void 0 : i.call(r, t, this));
                    const R = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
                    R !== this.state.context && Oe(this, Pn, ks).call(this, {
                        type: "pending",
                        context: R,
                        variables: t,
                        isPaused: s
                    })
                }
                const D = await y(this, mr).start();
                return await ((u = (l = y(this, Rt).config).onSuccess) == null ? void 0 : u.call(l, D, t, this.state.context, this)),
                await ((f = (c = this.options).onSuccess) == null ? void 0 : f.call(c, D, t, this.state.context)),
                await ((h = (d = y(this, Rt).config).onSettled) == null ? void 0 : h.call(d, D, null, this.state.variables, this.state.context, this)),
                await ((v = (g = this.options).onSettled) == null ? void 0 : v.call(g, D, null, t, this.state.context)),
                Oe(this, Pn, ks).call(this, {
                    type: "success",
                    data: D
                }),
                D
            } catch (D) {
                try {
                    throw await ((M = (C = y(this, Rt).config).onError) == null ? void 0 : M.call(C, D, t, this.state.context, this)),
                    await ((w = (k = this.options).onError) == null ? void 0 : w.call(k, D, t, this.state.context)),
                    await ((G = (U = y(this, Rt).config).onSettled) == null ? void 0 : G.call(U, void 0, D, this.state.variables, this.state.context, this)),
                    await ((j = (I = this.options).onSettled) == null ? void 0 : j.call(I, void 0, D, t, this.state.context)),
                    D
                } finally {
                    Oe(this, Pn, ks).call(this, {
                        type: "error",
                        error: D
                    })
                }
            } finally {
                y(this, Rt).runNext(this)
            }
        }
    }
    ,
    Rn = new WeakMap,
    Rt = new WeakMap,
    mr = new WeakMap,
    Pn = new WeakSet,
    ks = function(t) {
        const n = s=>{
            switch (t.type) {
            case "failed":
                return {
                    ...s,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return {
                    ...s,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...s,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...s,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...s,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...s,
                    data: void 0,
                    error: t.error,
                    failureCount: s.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = n(this.state),
        bt.batch(()=>{
            y(this, Rn).forEach(s=>{
                s.onMutationUpdate(t)
            }
            ),
            y(this, Rt).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        }
        )
    }
    ,
    Hh);
    function o_() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        }
    }
    var Ht, jo, Wh, a_ = (Wh = class extends $i {
        constructor(n={}) {
            super();
            me(this, Ht);
            me(this, jo);
            this.config = n,
            X(this, Ht, new Map),
            X(this, jo, Date.now())
        }
        build(n, s, r) {
            const i = new ew({
                mutationCache: this,
                mutationId: ++oa(this, jo)._,
                options: n.defaultMutationOptions(s),
                state: r
            });
            return this.add(i),
            i
        }
        add(n) {
            const s = pa(n)
              , r = y(this, Ht).get(s) ?? [];
            r.push(n),
            y(this, Ht).set(s, r),
            this.notify({
                type: "added",
                mutation: n
            })
        }
        remove(n) {
            var r;
            const s = pa(n);
            if (y(this, Ht).has(s)) {
                const i = (r = y(this, Ht).get(s)) == null ? void 0 : r.filter(o=>o !== n);
                i && (i.length === 0 ? y(this, Ht).delete(s) : y(this, Ht).set(s, i))
            }
            this.notify({
                type: "removed",
                mutation: n
            })
        }
        canRun(n) {
            var r;
            const s = (r = y(this, Ht).get(pa(n))) == null ? void 0 : r.find(i=>i.state.status === "pending");
            return !s || s === n
        }
        runNext(n) {
            var r;
            const s = (r = y(this, Ht).get(pa(n))) == null ? void 0 : r.find(i=>i !== n && i.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        }
        clear() {
            bt.batch(()=>{
                this.getAll().forEach(n=>{
                    this.remove(n)
                }
                )
            }
            )
        }
        getAll() {
            return [...y(this, Ht).values()].flat()
        }
        find(n) {
            const s = {
                exact: !0,
                ...n
            };
            return this.getAll().find(r=>nh(s, r))
        }
        findAll(n={}) {
            return this.getAll().filter(s=>nh(n, s))
        }
        notify(n) {
            bt.batch(()=>{
                this.listeners.forEach(s=>{
                    s(n)
                }
                )
            }
            )
        }
        resumePausedMutations() {
            const n = this.getAll().filter(s=>s.state.isPaused);
            return bt.batch(()=>Promise.all(n.map(s=>s.continue().catch(en))))
        }
    }
    ,
    Ht = new WeakMap,
    jo = new WeakMap,
    Wh);
    function pa(e) {
        var t;
        return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
    }
    function tw(e) {
        return {
            onFetch: (t,n)=>{
                const s = async()=>{
                    var g, v, C, M, k;
                    const r = t.options
                      , i = (C = (v = (g = t.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : v.fetchMore) == null ? void 0 : C.direction
                      , o = ((M = t.state.data) == null ? void 0 : M.pages) || []
                      , a = ((k = t.state.data) == null ? void 0 : k.pageParams) || []
                      , l = {
                        pages: [],
                        pageParams: []
                    };
                    let u = !1;
                    const c = w=>{
                        Object.defineProperty(w, "signal", {
                            enumerable: !0,
                            get: ()=>(t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", ()=>{
                                u = !0
                            }
                            ),
                            t.signal)
                        })
                    }
                      , f = Xm(t.options, t.fetchOptions)
                      , d = async(w,U,G)=>{
                        if (u)
                            return Promise.reject();
                        if (U == null && w.pages.length)
                            return Promise.resolve(w);
                        const I = {
                            queryKey: t.queryKey,
                            pageParam: U,
                            direction: G ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        c(I);
                        const j = await f(I)
                          , {maxPages: D} = t.options
                          , R = G ? Yb : Wb;
                        return {
                            pages: R(w.pages, j, D),
                            pageParams: R(w.pageParams, U, D)
                        }
                    }
                    ;
                    let h;
                    if (i && o.length) {
                        const w = i === "backward"
                          , U = w ? nw : ih
                          , G = {
                            pages: o,
                            pageParams: a
                        }
                          , I = U(r, G);
                        h = await d(G, I, w)
                    } else {
                        h = await d(l, a[0] ?? r.initialPageParam);
                        const w = e ?? o.length;
                        for (let U = 1; U < w; U++) {
                            const G = ih(r, h);
                            h = await d(h, G)
                        }
                    }
                    return h
                }
                ;
                t.options.persister ? t.fetchFn = ()=>{
                    var r, i;
                    return (i = (r = t.options).persister) == null ? void 0 : i.call(r, s, {
                        queryKey: t.queryKey,
                        meta: t.options.meta,
                        signal: t.signal
                    }, n)
                }
                : t.fetchFn = s
            }
        }
    }
    function ih(e, {pages: t, pageParams: n}) {
        const s = t.length - 1;
        return e.getNextPageParam(t[s], t, n[s], n)
    }
    function nw(e, {pages: t, pageParams: n}) {
        var s;
        return (s = e.getPreviousPageParam) == null ? void 0 : s.call(e, t[0], t, n[0], n)
    }
    var ot, $s, Ds, fi, di, Ls, hi, pi, Yh, sw = (Yh = class {
        constructor(t={}) {
            me(this, ot);
            me(this, $s);
            me(this, Ds);
            me(this, fi);
            me(this, di);
            me(this, Ls);
            me(this, hi);
            me(this, pi);
            X(this, ot, t.queryCache || new i_),
            X(this, $s, t.mutationCache || new a_),
            X(this, Ds, t.defaultOptions || {}),
            X(this, fi, new Map),
            X(this, di, new Map),
            X(this, Ls, 0)
        }
        mount() {
            oa(this, Ls)._++,
            y(this, Ls) === 1 && (X(this, hi, Ju.subscribe(async t=>{
                t && (await this.resumePausedMutations(),
                y(this, ot).onFocus())
            }
            )),
            X(this, pi, Va.subscribe(async t=>{
                t && (await this.resumePausedMutations(),
                y(this, ot).onOnline())
            }
            )))
        }
        unmount() {
            var t, n;
            oa(this, Ls)._--,
            y(this, Ls) === 0 && ((t = y(this, hi)) == null || t.call(this),
            X(this, hi, void 0),
            (n = y(this, pi)) == null || n.call(this),
            X(this, pi, void 0))
        }
        isFetching(t) {
            return y(this, ot).findAll({
                ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return y(this, $s).findAll({
                ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: t
            });
            return (s = y(this, ot).get(n.queryHash)) == null ? void 0 : s.state.data
        }
        ensureQueryData(t) {
            const n = this.getQueryData(t.queryKey);
            if (n === void 0)
                return this.fetchQuery(t);
            {
                const s = this.defaultQueryOptions(t)
                  , r = y(this, ot).build(this, s);
                return t.revalidateIfStale && r.isStaleByTime(ei(s.staleTime, r)) && this.prefetchQuery(s),
                Promise.resolve(n)
            }
        }
        getQueriesData(t) {
            return y(this, ot).findAll(t).map(({queryKey: n, state: s})=>{
                const r = s.data;
                return [n, r]
            }
            )
        }
        setQueryData(t, n, s) {
            const r = this.defaultQueryOptions({
                queryKey: t
            })
              , i = y(this, ot).get(r.queryHash)
              , o = i == null ? void 0 : i.state.data
              , a = Vb(n, o);
            if (a !== void 0)
                return y(this, ot).build(this, r).setData(a, {
                    ...s,
                    manual: !0
                })
        }
        setQueriesData(t, n, s) {
            return bt.batch(()=>y(this, ot).findAll(t).map(({queryKey: r})=>[r, this.setQueryData(r, n, s)]))
        }
        getQueryState(t) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: t
            });
            return (s = y(this, ot).get(n.queryHash)) == null ? void 0 : s.state
        }
        removeQueries(t) {
            const n = y(this, ot);
            bt.batch(()=>{
                n.findAll(t).forEach(s=>{
                    n.remove(s)
                }
                )
            }
            )
        }
        resetQueries(t, n) {
            const s = y(this, ot)
              , r = {
                type: "active",
                ...t
            };
            return bt.batch(()=>(s.findAll(t).forEach(i=>{
                i.reset()
            }
            ),
            this.refetchQueries(r, n)))
        }
        cancelQueries(t={}, n={}) {
            const s = {
                revert: !0,
                ...n
            }
              , r = bt.batch(()=>y(this, ot).findAll(t).map(i=>i.cancel(s)));
            return Promise.all(r).then(en).catch(en)
        }
        invalidateQueries(t={}, n={}) {
            return bt.batch(()=>{
                if (y(this, ot).findAll(t).forEach(r=>{
                    r.invalidate()
                }
                ),
                t.refetchType === "none")
                    return Promise.resolve();
                const s = {
                    ...t,
                    type: t.refetchType ?? t.type ?? "active"
                };
                return this.refetchQueries(s, n)
            }
            )
        }
        refetchQueries(t={}, n) {
            const s = {
                ...n,
                cancelRefetch: (n == null ? void 0 : n.cancelRefetch) ?? !0
            }
              , r = bt.batch(()=>y(this, ot).findAll(t).filter(i=>!i.isDisabled()).map(i=>{
                let o = i.fetch(void 0, s);
                return s.throwOnError || (o = o.catch(en)),
                i.state.fetchStatus === "paused" ? Promise.resolve() : o
            }
            ));
            return Promise.all(r).then(en)
        }
        fetchQuery(t) {
            const n = this.defaultQueryOptions(t);
            n.retry === void 0 && (n.retry = !1);
            const s = y(this, ot).build(this, n);
            return s.isStaleByTime(ei(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(en).catch(en)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = tw(t.pages),
            this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(en).catch(en)
        }
        resumePausedMutations() {
            return Va.isOnline() ? y(this, $s).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return y(this, ot)
        }
        getMutationCache() {
            return y(this, $s)
        }
        getDefaultOptions() {
            return y(this, Ds)
        }
        setDefaultOptions(t) {
            X(this, Ds, t)
        }
        setQueryDefaults(t, n) {
            y(this, fi).set(Tr(t), {
                queryKey: t,
                defaultOptions: n
            })
        }
        getQueryDefaults(t) {
            const n = [...y(this, fi).values()];
            let s = {};
            return n.forEach(r=>{
                yo(t, r.queryKey) && (s = {
                    ...s,
                    ...r.defaultOptions
                })
            }
            ),
            s
        }
        setMutationDefaults(t, n) {
            y(this, di).set(Tr(t), {
                mutationKey: t,
                defaultOptions: n
            })
        }
        getMutationDefaults(t) {
            const n = [...y(this, di).values()];
            let s = {};
            return n.forEach(r=>{
                yo(t, r.mutationKey) && (s = {
                    ...s,
                    ...r.defaultOptions
                })
            }
            ),
            s
        }
        defaultQueryOptions(t) {
            if (t._defaulted)
                return t;
            const n = {
                ...y(this, Ds).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = Qu(n.queryKey, n)),
            n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"),
            n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
            !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
            n.enabled !== !0 && n.queryFn === Jm && (n.enabled = !1),
            n
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : {
                ...y(this, Ds).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            y(this, ot).clear(),
            y(this, $s).clear()
        }
    }
    ,
    ot = new WeakMap,
    $s = new WeakMap,
    Ds = new WeakMap,
    fi = new WeakMap,
    di = new WeakMap,
    Ls = new WeakMap,
    hi = new WeakMap,
    pi = new WeakMap,
    Yh), It, Ae, Uo, Pt, _r, mi, An, qo, _i, gi, gr, yr, zs, yi, Be, Gi, Ic, Fc, jc, Uc, qc, Bc, Vc, l_, Zh, rw = (Zh = class extends $i {
        constructor(t, n) {
            super();
            me(this, Be);
            me(this, It);
            me(this, Ae);
            me(this, Uo);
            me(this, Pt);
            me(this, _r);
            me(this, mi);
            me(this, An);
            me(this, qo);
            me(this, _i);
            me(this, gi);
            me(this, gr);
            me(this, yr);
            me(this, zs);
            me(this, yi, new Set);
            this.options = n,
            X(this, It, t),
            X(this, An, null),
            this.bindMethods(),
            this.setOptions(n)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (y(this, Ae).addObserver(this),
            oh(y(this, Ae), this.options) ? Oe(this, Be, Gi).call(this) : this.updateResult(),
            Oe(this, Be, Uc).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return Hc(y(this, Ae), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return Hc(y(this, Ae), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set,
            Oe(this, Be, qc).call(this),
            Oe(this, Be, Bc).call(this),
            y(this, Ae).removeObserver(this)
        }
        setOptions(t, n) {
            const s = this.options
              , r = y(this, Ae);
            if (this.options = y(this, It).defaultQueryOptions(t),
            this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof hn(this.options.enabled, y(this, Ae)) != "boolean")
                throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
            Oe(this, Be, Vc).call(this),
            y(this, Ae).setOptions(this.options),
            s._defaulted && !Ba(this.options, s) && y(this, It).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: y(this, Ae),
                observer: this
            });
            const i = this.hasListeners();
            i && ah(y(this, Ae), r, this.options, s) && Oe(this, Be, Gi).call(this),
            this.updateResult(n),
            i && (y(this, Ae) !== r || hn(this.options.enabled, y(this, Ae)) !== hn(s.enabled, y(this, Ae)) || ei(this.options.staleTime, y(this, Ae)) !== ei(s.staleTime, y(this, Ae))) && Oe(this, Be, Ic).call(this);
            const o = Oe(this, Be, Fc).call(this);
            i && (y(this, Ae) !== r || hn(this.options.enabled, y(this, Ae)) !== hn(s.enabled, y(this, Ae)) || o !== y(this, zs)) && Oe(this, Be, jc).call(this, o)
        }
        getOptimisticResult(t) {
            const n = y(this, It).getQueryCache().build(y(this, It), t)
              , s = this.createResult(n, t);
            return ow(this, s) && (X(this, Pt, s),
            X(this, mi, this.options),
            X(this, _r, y(this, Ae).state)),
            s
        }
        getCurrentResult() {
            return y(this, Pt)
        }
        trackResult(t, n) {
            const s = {};
            return Object.keys(t).forEach(r=>{
                Object.defineProperty(s, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: ()=>(this.trackProp(r),
                    n == null || n(r),
                    t[r])
                })
            }
            ),
            s
        }
        trackProp(t) {
            y(this, yi).add(t)
        }
        getCurrentQuery() {
            return y(this, Ae)
        }
        refetch({...t}={}) {
            return this.fetch({
                ...t
            })
        }
        fetchOptimistic(t) {
            const n = y(this, It).defaultQueryOptions(t)
              , s = y(this, It).getQueryCache().build(y(this, It), n);
            return s.isFetchingOptimistic = !0,
            s.fetch().then(()=>this.createResult(s, n))
        }
        fetch(t) {
            return Oe(this, Be, Gi).call(this, {
                ...t,
                cancelRefetch: t.cancelRefetch ?? !0
            }).then(()=>(this.updateResult(),
            y(this, Pt)))
        }
        createResult(t, n) {
            var j;
            const s = y(this, Ae)
              , r = this.options
              , i = y(this, Pt)
              , o = y(this, _r)
              , a = y(this, mi)
              , u = t !== s ? t.state : y(this, Uo)
              , {state: c} = t;
            let f = {
                ...c
            }, d = !1, h;
            if (n._optimisticResults) {
                const D = this.hasListeners()
                  , R = !D && oh(t, n)
                  , Q = D && ah(t, s, n, r);
                (R || Q) && (f = {
                    ...f,
                    ...r_(c.data, t.options)
                }),
                n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle")
            }
            let {error: g, errorUpdatedAt: v, status: C} = f;
            if (n.select && f.data !== void 0)
                if (i && f.data === (o == null ? void 0 : o.data) && n.select === y(this, qo))
                    h = y(this, _i);
                else
                    try {
                        X(this, qo, n.select),
                        h = n.select(f.data),
                        h = Nc(i == null ? void 0 : i.data, h, n),
                        X(this, _i, h),
                        X(this, An, null)
                    } catch (D) {
                        X(this, An, D)
                    }
            else
                h = f.data;
            if (n.placeholderData !== void 0 && h === void 0 && C === "pending") {
                let D;
                if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
                    D = i.data;
                else if (D = typeof n.placeholderData == "function" ? n.placeholderData((j = y(this, gi)) == null ? void 0 : j.state.data, y(this, gi)) : n.placeholderData,
                n.select && D !== void 0)
                    try {
                        D = n.select(D),
                        X(this, An, null)
                    } catch (R) {
                        X(this, An, R)
                    }
                D !== void 0 && (C = "success",
                h = Nc(i == null ? void 0 : i.data, D, n),
                d = !0)
            }
            y(this, An) && (g = y(this, An),
            h = y(this, _i),
            v = Date.now(),
            C = "error");
            const M = f.fetchStatus === "fetching"
              , k = C === "pending"
              , w = C === "error"
              , U = k && M
              , G = h !== void 0;
            return {
                status: C,
                fetchStatus: f.fetchStatus,
                isPending: k,
                isSuccess: C === "success",
                isError: w,
                isInitialLoading: U,
                isLoading: U,
                data: h,
                dataUpdatedAt: f.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: f.fetchFailureCount,
                failureReason: f.fetchFailureReason,
                errorUpdateCount: f.errorUpdateCount,
                isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
                isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
                isFetching: M,
                isRefetching: M && !k,
                isLoadingError: w && !G,
                isPaused: f.fetchStatus === "paused",
                isPlaceholderData: d,
                isRefetchError: w && G,
                isStale: Xu(t, n),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const n = y(this, Pt)
              , s = this.createResult(y(this, Ae), this.options);
            if (X(this, _r, y(this, Ae).state),
            X(this, mi, this.options),
            y(this, _r).data !== void 0 && X(this, gi, y(this, Ae)),
            Ba(s, n))
                return;
            X(this, Pt, s);
            const r = {}
              , i = ()=>{
                if (!n)
                    return !0;
                const {notifyOnChangeProps: o} = this.options
                  , a = typeof o == "function" ? o() : o;
                if (a === "all" || !a && !y(this, yi).size)
                    return !0;
                const l = new Set(a ?? y(this, yi));
                return this.options.throwOnError && l.add("error"),
                Object.keys(y(this, Pt)).some(u=>{
                    const c = u;
                    return y(this, Pt)[c] !== n[c] && l.has(c)
                }
                )
            }
            ;
            (t == null ? void 0 : t.listeners) !== !1 && i() && (r.listeners = !0),
            Oe(this, Be, l_).call(this, {
                ...r,
                ...t
            })
        }
        onQueryUpdate() {
            this.updateResult(),
            this.hasListeners() && Oe(this, Be, Uc).call(this)
        }
    }
    ,
    It = new WeakMap,
    Ae = new WeakMap,
    Uo = new WeakMap,
    Pt = new WeakMap,
    _r = new WeakMap,
    mi = new WeakMap,
    An = new WeakMap,
    qo = new WeakMap,
    _i = new WeakMap,
    gi = new WeakMap,
    gr = new WeakMap,
    yr = new WeakMap,
    zs = new WeakMap,
    yi = new WeakMap,
    Be = new WeakSet,
    Gi = function(t) {
        Oe(this, Be, Vc).call(this);
        let n = y(this, Ae).fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(en)),
        n
    }
    ,
    Ic = function() {
        Oe(this, Be, qc).call(this);
        const t = ei(this.options.staleTime, y(this, Ae));
        if (Cr || y(this, Pt).isStale || !Lc(t))
            return;
        const s = Gm(y(this, Pt).dataUpdatedAt, t) + 1;
        X(this, gr, setTimeout(()=>{
            y(this, Pt).isStale || this.updateResult()
        }
        , s))
    }
    ,
    Fc = function() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(y(this, Ae)) : this.options.refetchInterval) ?? !1
    }
    ,
    jc = function(t) {
        Oe(this, Be, Bc).call(this),
        X(this, zs, t),
        !(Cr || hn(this.options.enabled, y(this, Ae)) === !1 || !Lc(y(this, zs)) || y(this, zs) === 0) && X(this, yr, setInterval(()=>{
            (this.options.refetchIntervalInBackground || Ju.isFocused()) && Oe(this, Be, Gi).call(this)
        }
        , y(this, zs)))
    }
    ,
    Uc = function() {
        Oe(this, Be, Ic).call(this),
        Oe(this, Be, jc).call(this, Oe(this, Be, Fc).call(this))
    }
    ,
    qc = function() {
        y(this, gr) && (clearTimeout(y(this, gr)),
        X(this, gr, void 0))
    }
    ,
    Bc = function() {
        y(this, yr) && (clearInterval(y(this, yr)),
        X(this, yr, void 0))
    }
    ,
    Vc = function() {
        const t = y(this, It).getQueryCache().build(y(this, It), this.options);
        if (t === y(this, Ae))
            return;
        const n = y(this, Ae);
        X(this, Ae, t),
        X(this, Uo, t.state),
        this.hasListeners() && (n == null || n.removeObserver(this),
        t.addObserver(this))
    }
    ,
    l_ = function(t) {
        bt.batch(()=>{
            t.listeners && this.listeners.forEach(n=>{
                n(y(this, Pt))
            }
            ),
            y(this, It).getQueryCache().notify({
                query: y(this, Ae),
                type: "observerResultsUpdated"
            })
        }
        )
    }
    ,
    Zh);
    function iw(e, t) {
        return hn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
    }
    function oh(e, t) {
        return iw(e, t) || e.state.data !== void 0 && Hc(e, t, t.refetchOnMount)
    }
    function Hc(e, t, n) {
        if (hn(t.enabled, e) !== !1) {
            const s = typeof n == "function" ? n(e) : n;
            return s === "always" || s !== !1 && Xu(e, t)
        }
        return !1
    }
    function ah(e, t, n, s) {
        return (e !== t || hn(s.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Xu(e, n)
    }
    function Xu(e, t) {
        return hn(t.enabled, e) !== !1 && e.isStaleByTime(ei(t.staleTime, e))
    }
    function ow(e, t) {
        return !Ba(e.getCurrentResult(), t)
    }
    var Ns, Is, Ft, es, os, Ma, Wc, Kh, aw = (Kh = class extends $i {
        constructor(n, s) {
            super();
            me(this, os);
            me(this, Ns);
            me(this, Is);
            me(this, Ft);
            me(this, es);
            X(this, Ns, n),
            this.setOptions(s),
            this.bindMethods(),
            Oe(this, os, Ma).call(this)
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this),
            this.reset = this.reset.bind(this)
        }
        setOptions(n) {
            var r;
            const s = this.options;
            this.options = y(this, Ns).defaultMutationOptions(n),
            Ba(this.options, s) || y(this, Ns).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: y(this, Ft),
                observer: this
            }),
            s != null && s.mutationKey && this.options.mutationKey && Tr(s.mutationKey) !== Tr(this.options.mutationKey) ? this.reset() : ((r = y(this, Ft)) == null ? void 0 : r.state.status) === "pending" && y(this, Ft).setOptions(this.options)
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || (n = y(this, Ft)) == null || n.removeObserver(this)
        }
        onMutationUpdate(n) {
            Oe(this, os, Ma).call(this),
            Oe(this, os, Wc).call(this, n)
        }
        getCurrentResult() {
            return y(this, Is)
        }
        reset() {
            var n;
            (n = y(this, Ft)) == null || n.removeObserver(this),
            X(this, Ft, void 0),
            Oe(this, os, Ma).call(this),
            Oe(this, os, Wc).call(this)
        }
        mutate(n, s) {
            var r;
            return X(this, es, s),
            (r = y(this, Ft)) == null || r.removeObserver(this),
            X(this, Ft, y(this, Ns).getMutationCache().build(y(this, Ns), this.options)),
            y(this, Ft).addObserver(this),
            y(this, Ft).execute(n)
        }
    }
    ,
    Ns = new WeakMap,
    Is = new WeakMap,
    Ft = new WeakMap,
    es = new WeakMap,
    os = new WeakSet,
    Ma = function() {
        var s;
        const n = ((s = y(this, Ft)) == null ? void 0 : s.state) ?? o_();
        X(this, Is, {
            ...n,
            isPending: n.status === "pending",
            isSuccess: n.status === "success",
            isError: n.status === "error",
            isIdle: n.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        })
    }
    ,
    Wc = function(n) {
        bt.batch(()=>{
            var s, r, i, o, a, l, u, c;
            if (y(this, es) && this.hasListeners()) {
                const f = y(this, Is).variables
                  , d = y(this, Is).context;
                (n == null ? void 0 : n.type) === "success" ? ((r = (s = y(this, es)).onSuccess) == null || r.call(s, n.data, f, d),
                (o = (i = y(this, es)).onSettled) == null || o.call(i, n.data, null, f, d)) : (n == null ? void 0 : n.type) === "error" && ((l = (a = y(this, es)).onError) == null || l.call(a, n.error, f, d),
                (c = (u = y(this, es)).onSettled) == null || c.call(u, void 0, n.error, f, d))
            }
            this.listeners.forEach(f=>{
                f(y(this, Is))
            }
            )
        }
        )
    }
    ,
    Kh), lw = "VUE_QUERY_CLIENT";
    function c_(e) {
        const t = e ? `:${e}` : "";
        return `${lw}${t}`
    }
    function Yc(e, t) {
        Object.keys(e).forEach(n=>{
            e[n] = t[n]
        }
        )
    }
    function Zc(e, t, n="", s=0) {
        if (t) {
            const r = t(e, n, s);
            if (r === void 0 && it(e) || r !== void 0)
                return r
        }
        if (Array.isArray(e))
            return e.map((r,i)=>Zc(r, t, String(i), s + 1));
        if (typeof e == "object" && uw(e)) {
            const r = Object.entries(e).map(([i,o])=>[i, Zc(o, t, i, s + 1)]);
            return Object.fromEntries(r)
        }
        return e
    }
    function cw(e, t) {
        return Zc(e, t)
    }
    function Ce(e, t=!1) {
        return cw(e, (n,s,r)=>{
            if (r === 1 && s === "queryKey")
                return Ce(n, !0);
            if (t && fw(n))
                return Ce(n(), t);
            if (it(n))
                return Ce(S(n), t)
        }
        )
    }
    function uw(e) {
        if (Object.prototype.toString.call(e) !== "[object Object]")
            return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t === Object.prototype
    }
    function fw(e) {
        return typeof e == "function"
    }
    function Kc(e, t) {
        return typeof e == "function" ? e(...t) : !!e
    }
    function nr(e="") {
        if (!$p())
            throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");
        const t = c_(e)
          , n = Zt(t);
        if (!n)
            throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");
        return n
    }
    var u_ = class extends i_ {
        find(e) {
            return super.find(Ce(e))
        }
        findAll(e={}) {
            return super.findAll(Ce(e))
        }
    }
      , f_ = class extends a_ {
        find(e) {
            return super.find(Ce(e))
        }
        findAll(e={}) {
            return super.findAll(Ce(e))
        }
    }
      , d_ = class extends sw {
        constructor(e={}) {
            const t = {
                defaultOptions: e.defaultOptions,
                queryCache: e.queryCache || new u_,
                mutationCache: e.mutationCache || new f_
            };
            super(t),
            this.isRestoring = fe(!1)
        }
        isFetching(e={}) {
            return super.isFetching(Ce(e))
        }
        isMutating(e={}) {
            return super.isMutating(Ce(e))
        }
        getQueryData(e) {
            return super.getQueryData(Ce(e))
        }
        ensureQueryData(e) {
            return super.ensureQueryData(Ce(e))
        }
        getQueriesData(e) {
            return super.getQueriesData(Ce(e))
        }
        setQueryData(e, t, n={}) {
            return super.setQueryData(Ce(e), t, Ce(n))
        }
        setQueriesData(e, t, n={}) {
            return super.setQueriesData(Ce(e), t, Ce(n))
        }
        getQueryState(e) {
            return super.getQueryState(Ce(e))
        }
        removeQueries(e={}) {
            return super.removeQueries(Ce(e))
        }
        resetQueries(e={}, t={}) {
            return super.resetQueries(Ce(e), Ce(t))
        }
        cancelQueries(e={}, t={}) {
            return super.cancelQueries(Ce(e), Ce(t))
        }
        invalidateQueries(e={}, t={}) {
            return new Promise(n=>{
                setTimeout(async()=>{
                    await super.invalidateQueries(Ce(e), Ce(t)),
                    n()
                }
                , 0)
            }
            )
        }
        refetchQueries(e={}, t={}) {
            return super.refetchQueries(Ce(e), Ce(t))
        }
        fetchQuery(e) {
            return super.fetchQuery(Ce(e))
        }
        prefetchQuery(e) {
            return super.prefetchQuery(Ce(e))
        }
        fetchInfiniteQuery(e) {
            return super.fetchInfiniteQuery(Ce(e))
        }
        prefetchInfiniteQuery(e) {
            return super.prefetchInfiniteQuery(Ce(e))
        }
        setDefaultOptions(e) {
            super.setDefaultOptions(Ce(e))
        }
        setQueryDefaults(e, t) {
            super.setQueryDefaults(Ce(e), Ce(t))
        }
        getQueryDefaults(e) {
            return super.getQueryDefaults(Ce(e))
        }
        setMutationDefaults(e, t) {
            super.setMutationDefaults(Ce(e), Ce(t))
        }
        getMutationDefaults(e) {
            return super.getMutationDefaults(Ce(e))
        }
    }
      , dw = {
        install: (e,t={})=>{
            const n = c_(t.queryClientKey);
            let s;
            if ("queryClient"in t && t.queryClient)
                s = t.queryClient;
            else {
                const o = "queryClientConfig"in t ? t.queryClientConfig : void 0;
                s = new d_(o)
            }
            Cr || s.mount();
            let r = ()=>{}
            ;
            if (t.clientPersister) {
                s.isRestoring.value = !0;
                const [o,a] = t.clientPersister(s);
                r = o,
                a.then(()=>{
                    var l;
                    s.isRestoring.value = !1,
                    (l = t.clientPersisterOnSuccess) == null || l.call(t, s)
                }
                )
            }
            const i = ()=>{
                s.unmount(),
                r()
            }
            ;
            if (e.onUnmount)
                e.onUnmount(i);
            else {
                const o = e.unmount;
                e.unmount = function() {
                    i(),
                    o()
                }
            }
            e.provide(n, s)
        }
    };
    function hw(e, t, n) {
        const s = nr()
          , r = ye(()=>{
            const d = Ce(t);
            typeof d.enabled == "function" && (d.enabled = d.enabled());
            const h = s.defaultQueryOptions(d);
            return h._optimisticResults = s.isRestoring.value ? "isRestoring" : "optimistic",
            h
        }
        )
          , i = new e(s,r.value)
          , o = ls(i.getCurrentResult());
        let a = ()=>{}
        ;
        ht(s.isRestoring, d=>{
            d || (a(),
            a = i.subscribe(h=>{
                Yc(o, h)
            }
            ))
        }
        , {
            immediate: !0
        });
        const l = ()=>{
            i.setOptions(r.value),
            Yc(o, i.getCurrentResult())
        }
        ;
        ht(r, l),
        dl(()=>{
            a()
        }
        );
        const u = (...d)=>(l(),
        o.refetch(...d))
          , c = ()=>new Promise((d,h)=>{
            let g = ()=>{}
            ;
            const v = ()=>{
                if (r.value.enabled !== !1) {
                    i.setOptions(r.value);
                    const C = i.getOptimisticResult(r.value);
                    C.isStale ? (g(),
                    i.fetchOptimistic(r.value).then(d, M=>{
                        Kc(r.value.throwOnError, [M, i.getCurrentQuery()]) ? h(M) : d(i.getCurrentResult())
                    }
                    )) : (g(),
                    d(C))
                }
            }
            ;
            v(),
            g = ht(r, v)
        }
        );
        ht(()=>o.error, d=>{
            if (o.isError && !o.isFetching && Kc(r.value.throwOnError, [d, i.getCurrentQuery()]))
                throw d
        }
        );
        const f = pl(Vo(o));
        for (const d in o)
            typeof o[d] == "function" && (f[d] = o[d]);
        return f.suspense = c,
        f.refetch = u,
        f
    }
    function sr(e, t) {
        return hw(rw, e)
    }
    function Di(e, t) {
        const n = nr()
          , s = ye(()=>n.defaultMutationOptions(Ce(e)))
          , r = new aw(n,s.value)
          , i = ls(r.getCurrentResult())
          , o = r.subscribe(u=>{
            Yc(i, u)
        }
        )
          , a = (u,c)=>{
            r.mutate(u, c).catch(()=>{}
            )
        }
        ;
        ht(s, ()=>{
            r.setOptions(s.value)
        }
        ),
        dl(()=>{
            o()
        }
        );
        const l = pl(Vo(i));
        return ht(()=>i.error, u=>{
            if (u && Kc(s.value.throwOnError, [u]))
                throw u
        }
        ),
        {
            ...l,
            mutate: a,
            mutateAsync: i.mutate,
            reset: i.reset
        }
    }
    function h_(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {toString: pw} = Object.prototype
      , {getPrototypeOf: ef} = Object
      , El = (e=>t=>{
        const n = pw.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    }
    )(Object.create(null))
      , kn = e=>(e = e.toLowerCase(),
    t=>El(t) === e)
      , Cl = e=>t=>typeof t === e
      , {isArray: Li} = Array
      , vo = Cl("undefined");
    function mw(e) {
        return e !== null && !vo(e) && e.constructor !== null && !vo(e.constructor) && rn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const p_ = kn("ArrayBuffer");
    function _w(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && p_(e.buffer),
        t
    }
    const gw = Cl("string")
      , rn = Cl("function")
      , m_ = Cl("number")
      , Tl = e=>e !== null && typeof e == "object"
      , yw = e=>e === !0 || e === !1
      , ka = e=>{
        if (El(e) !== "object")
            return !1;
        const t = ef(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }
      , vw = kn("Date")
      , bw = kn("File")
      , ww = kn("Blob")
      , xw = kn("FileList")
      , Mw = e=>Tl(e) && rn(e.pipe)
      , kw = e=>{
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || rn(e.append) && ((t = El(e)) === "formdata" || t === "object" && rn(e.toString) && e.toString() === "[object FormData]"))
    }
      , Sw = kn("URLSearchParams")
      , [Ow,Ew,Cw,Tw] = ["ReadableStream", "Request", "Response", "Headers"].map(kn)
      , Rw = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function Go(e, t, {allOwnKeys: n=!1}={}) {
        if (e === null || typeof e > "u")
            return;
        let s, r;
        if (typeof e != "object" && (e = [e]),
        Li(e))
            for (s = 0,
            r = e.length; s < r; s++)
                t.call(null, e[s], s, e);
        else {
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
              , o = i.length;
            let a;
            for (s = 0; s < o; s++)
                a = i[s],
                t.call(null, e[a], a, e)
        }
    }
    function __(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let s = n.length, r;
        for (; s-- > 0; )
            if (r = n[s],
            t === r.toLowerCase())
                return r;
        return null
    }
    const g_ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
      , y_ = e=>!vo(e) && e !== g_;
    function Gc() {
        const {caseless: e} = y_(this) && this || {}
          , t = {}
          , n = (s,r)=>{
            const i = e && __(t, r) || r;
            ka(t[i]) && ka(s) ? t[i] = Gc(t[i], s) : ka(s) ? t[i] = Gc({}, s) : Li(s) ? t[i] = s.slice() : t[i] = s
        }
        ;
        for (let s = 0, r = arguments.length; s < r; s++)
            arguments[s] && Go(arguments[s], n);
        return t
    }
    const Pw = (e,t,n,{allOwnKeys: s}={})=>(Go(t, (r,i)=>{
        n && rn(r) ? e[i] = h_(r, n) : e[i] = r
    }
    , {
        allOwnKeys: s
    }),
    e)
      , Aw = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e)
      , $w = (e,t,n,s)=>{
        e.prototype = Object.create(t.prototype, s),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {
            value: t.prototype
        }),
        n && Object.assign(e.prototype, n)
    }
      , Dw = (e,t,n,s)=>{
        let r, i, o;
        const a = {};
        if (t = t || {},
        e == null)
            return t;
        do {
            for (r = Object.getOwnPropertyNames(e),
            i = r.length; i-- > 0; )
                o = r[i],
                (!s || s(o, e, t)) && !a[o] && (t[o] = e[o],
                a[o] = !0);
            e = n !== !1 && ef(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }
      , Lw = (e,t,n)=>{
        e = String(e),
        (n === void 0 || n > e.length) && (n = e.length),
        n -= t.length;
        const s = e.indexOf(t, n);
        return s !== -1 && s === n
    }
      , zw = e=>{
        if (!e)
            return null;
        if (Li(e))
            return e;
        let t = e.length;
        if (!m_(t))
            return null;
        const n = new Array(t);
        for (; t-- > 0; )
            n[t] = e[t];
        return n
    }
      , Nw = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && ef(Uint8Array))
      , Iw = (e,t)=>{
        const s = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = s.next()) && !r.done; ) {
            const i = r.value;
            t.call(e, i[0], i[1])
        }
    }
      , Fw = (e,t)=>{
        let n;
        const s = [];
        for (; (n = e.exec(t)) !== null; )
            s.push(n);
        return s
    }
      , jw = kn("HTMLFormElement")
      , Uw = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
        return s.toUpperCase() + r
    })
      , lh = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
      , qw = kn("RegExp")
      , v_ = (e,t)=>{
        const n = Object.getOwnPropertyDescriptors(e)
          , s = {};
        Go(n, (r,i)=>{
            let o;
            (o = t(r, i, e)) !== !1 && (s[i] = o || r)
        }
        ),
        Object.defineProperties(e, s)
    }
      , Bw = e=>{
        v_(e, (t,n)=>{
            if (rn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const s = e[n];
            if (rn(s)) {
                if (t.enumerable = !1,
                "writable"in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = ()=>{
                    throw Error("Can not rewrite read-only method '" + n + "'")
                }
                )
            }
        }
        )
    }
      , Vw = (e,t)=>{
        const n = {}
          , s = r=>{
            r.forEach(i=>{
                n[i] = !0
            }
            )
        }
        ;
        return Li(e) ? s(e) : s(String(e).split(t)),
        n
    }
      , Hw = ()=>{}
      , Ww = (e,t)=>e != null && Number.isFinite(e = +e) ? e : t
      , oc = "abcdefghijklmnopqrstuvwxyz"
      , ch = "0123456789"
      , b_ = {
        DIGIT: ch,
        ALPHA: oc,
        ALPHA_DIGIT: oc + oc.toUpperCase() + ch
    }
      , Yw = (e=16,t=b_.ALPHA_DIGIT)=>{
        let n = "";
        const {length: s} = t;
        for (; e--; )
            n += t[Math.random() * s | 0];
        return n
    }
    ;
    function Zw(e) {
        return !!(e && rn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }
    const Kw = e=>{
        const t = new Array(10)
          , n = (s,r)=>{
            if (Tl(s)) {
                if (t.indexOf(s) >= 0)
                    return;
                if (!("toJSON"in s)) {
                    t[r] = s;
                    const i = Li(s) ? [] : {};
                    return Go(s, (o,a)=>{
                        const l = n(o, r + 1);
                        !vo(l) && (i[a] = l)
                    }
                    ),
                    t[r] = void 0,
                    i
                }
            }
            return s
        }
        ;
        return n(e, 0)
    }
      , Gw = kn("AsyncFunction")
      , Qw = e=>e && (Tl(e) || rn(e)) && rn(e.then) && rn(e.catch)
      , O = {
        isArray: Li,
        isArrayBuffer: p_,
        isBuffer: mw,
        isFormData: kw,
        isArrayBufferView: _w,
        isString: gw,
        isNumber: m_,
        isBoolean: yw,
        isObject: Tl,
        isPlainObject: ka,
        isReadableStream: Ow,
        isRequest: Ew,
        isResponse: Cw,
        isHeaders: Tw,
        isUndefined: vo,
        isDate: vw,
        isFile: bw,
        isBlob: ww,
        isRegExp: qw,
        isFunction: rn,
        isStream: Mw,
        isURLSearchParams: Sw,
        isTypedArray: Nw,
        isFileList: xw,
        forEach: Go,
        merge: Gc,
        extend: Pw,
        trim: Rw,
        stripBOM: Aw,
        inherits: $w,
        toFlatObject: Dw,
        kindOf: El,
        kindOfTest: kn,
        endsWith: Lw,
        toArray: zw,
        forEachEntry: Iw,
        matchAll: Fw,
        isHTMLForm: jw,
        hasOwnProperty: lh,
        hasOwnProp: lh,
        reduceDescriptors: v_,
        freezeMethods: Bw,
        toObjectSet: Vw,
        toCamelCase: Uw,
        noop: Hw,
        toFiniteNumber: Ww,
        findKey: __,
        global: g_,
        isContextDefined: y_,
        ALPHABET: b_,
        generateString: Yw,
        isSpecCompliantForm: Zw,
        toJSONObject: Kw,
        isAsyncFn: Gw,
        isThenable: Qw
    };
    function xe(e, t, n, s, r) {
        Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = e,
        this.name = "AxiosError",
        t && (this.code = t),
        n && (this.config = n),
        s && (this.request = s),
        r && (this.response = r)
    }
    O.inherits(xe, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: O.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    const w_ = xe.prototype
      , x_ = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
        x_[e] = {
            value: e
        }
    }
    );
    Object.defineProperties(xe, x_);
    Object.defineProperty(w_, "isAxiosError", {
        value: !0
    });
    xe.from = (e,t,n,s,r,i)=>{
        const o = Object.create(w_);
        return O.toFlatObject(e, o, function(l) {
            return l !== Error.prototype
        }, a=>a !== "isAxiosError"),
        xe.call(o, e.message, t, n, s, r),
        o.cause = e,
        o.name = e.name,
        i && Object.assign(o, i),
        o
    }
    ;
    const Jw = null;
    function Qc(e) {
        return O.isPlainObject(e) || O.isArray(e)
    }
    function M_(e) {
        return O.endsWith(e, "[]") ? e.slice(0, -2) : e
    }
    function uh(e, t, n) {
        return e ? e.concat(t).map(function(r, i) {
            return r = M_(r),
            !n && i ? "[" + r + "]" : r
        }).join(n ? "." : "") : t
    }
    function Xw(e) {
        return O.isArray(e) && !e.some(Qc)
    }
    const e9 = O.toFlatObject(O, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });
    function Rl(e, t, n) {
        if (!O.isObject(e))
            throw new TypeError("target must be an object");
        t = t || new FormData,
        n = O.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(v, C) {
            return !O.isUndefined(C[v])
        });
        const s = n.metaTokens
          , r = n.visitor || c
          , i = n.dots
          , o = n.indexes
          , l = (n.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
        if (!O.isFunction(r))
            throw new TypeError("visitor must be a function");
        function u(g) {
            if (g === null)
                return "";
            if (O.isDate(g))
                return g.toISOString();
            if (!l && O.isBlob(g))
                throw new xe("Blob is not supported. Use a Buffer instead.");
            return O.isArrayBuffer(g) || O.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
        }
        function c(g, v, C) {
            let M = g;
            if (g && !C && typeof g == "object") {
                if (O.endsWith(v, "{}"))
                    v = s ? v : v.slice(0, -2),
                    g = JSON.stringify(g);
                else if (O.isArray(g) && Xw(g) || (O.isFileList(g) || O.endsWith(v, "[]")) && (M = O.toArray(g)))
                    return v = M_(v),
                    M.forEach(function(w, U) {
                        !(O.isUndefined(w) || w === null) && t.append(o === !0 ? uh([v], U, i) : o === null ? v : v + "[]", u(w))
                    }),
                    !1
            }
            return Qc(g) ? !0 : (t.append(uh(C, v, i), u(g)),
            !1)
        }
        const f = []
          , d = Object.assign(e9, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Qc
        });
        function h(g, v) {
            if (!O.isUndefined(g)) {
                if (f.indexOf(g) !== -1)
                    throw Error("Circular reference detected in " + v.join("."));
                f.push(g),
                O.forEach(g, function(M, k) {
                    (!(O.isUndefined(M) || M === null) && r.call(t, M, O.isString(k) ? k.trim() : k, v, d)) === !0 && h(M, v ? v.concat(k) : [k])
                }),
                f.pop()
            }
        }
        if (!O.isObject(e))
            throw new TypeError("data must be an object");
        return h(e),
        t
    }
    function fh(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
            return t[s]
        })
    }
    function tf(e, t) {
        this._pairs = [],
        e && Rl(e, this, t)
    }
    const k_ = tf.prototype;
    k_.append = function(t, n) {
        this._pairs.push([t, n])
    }
    ;
    k_.toString = function(t) {
        const n = t ? function(s) {
            return t.call(this, s, fh)
        }
        : fh;
        return this._pairs.map(function(r) {
            return n(r[0]) + "=" + n(r[1])
        }, "").join("&")
    }
    ;
    function t9(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    function S_(e, t, n) {
        if (!t)
            return e;
        const s = n && n.encode || t9
          , r = n && n.serialize;
        let i;
        if (r ? i = r(t, n) : i = O.isURLSearchParams(t) ? t.toString() : new tf(t,n).toString(s),
        i) {
            const o = e.indexOf("#");
            o !== -1 && (e = e.slice(0, o)),
            e += (e.indexOf("?") === -1 ? "?" : "&") + i
        }
        return e
    }
    class dh {
        constructor() {
            this.handlers = []
        }
        use(t, n, s) {
            return this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: s ? s.synchronous : !1,
                runWhen: s ? s.runWhen : null
            }),
            this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            O.forEach(this.handlers, function(s) {
                s !== null && t(s)
            })
        }
    }
    const O_ = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }
      , n9 = typeof URLSearchParams < "u" ? URLSearchParams : tf
      , s9 = typeof FormData < "u" ? FormData : null
      , r9 = typeof Blob < "u" ? Blob : null
      , i9 = {
        isBrowser: !0,
        classes: {
            URLSearchParams: n9,
            FormData: s9,
            Blob: r9
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }
      , nf = typeof window < "u" && typeof document < "u"
      , o9 = (e=>nf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
      , a9 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
      , l9 = nf && window.location.href || "http://localhost"
      , c9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: nf,
        hasStandardBrowserEnv: o9,
        hasStandardBrowserWebWorkerEnv: a9,
        origin: l9
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , yn = {
        ...c9,
        ...i9
    };
    function u9(e, t) {
        return Rl(e, new yn.classes.URLSearchParams, Object.assign({
            visitor: function(n, s, r, i) {
                return yn.isNode && O.isBuffer(n) ? (this.append(s, n.toString("base64")),
                !1) : i.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }
    function f9(e) {
        return O.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
    }
    function d9(e) {
        const t = {}
          , n = Object.keys(e);
        let s;
        const r = n.length;
        let i;
        for (s = 0; s < r; s++)
            i = n[s],
            t[i] = e[i];
        return t
    }
    function E_(e) {
        function t(n, s, r, i) {
            let o = n[i++];
            if (o === "__proto__")
                return !0;
            const a = Number.isFinite(+o)
              , l = i >= n.length;
            return o = !o && O.isArray(r) ? r.length : o,
            l ? (O.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s,
            !a) : ((!r[o] || !O.isObject(r[o])) && (r[o] = []),
            t(n, s, r[o], i) && O.isArray(r[o]) && (r[o] = d9(r[o])),
            !a)
        }
        if (O.isFormData(e) && O.isFunction(e.entries)) {
            const n = {};
            return O.forEachEntry(e, (s,r)=>{
                t(f9(s), r, n, 0)
            }
            ),
            n
        }
        return null
    }
    function h9(e, t, n) {
        if (O.isString(e))
            try {
                return (t || JSON.parse)(e),
                O.trim(e)
            } catch (s) {
                if (s.name !== "SyntaxError")
                    throw s
            }
        return (n || JSON.stringify)(e)
    }
    const Qo = {
        transitional: O_,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(t, n) {
            const s = n.getContentType() || ""
              , r = s.indexOf("application/json") > -1
              , i = O.isObject(t);
            if (i && O.isHTMLForm(t) && (t = new FormData(t)),
            O.isFormData(t))
                return r ? JSON.stringify(E_(t)) : t;
            if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
                return t;
            if (O.isArrayBufferView(t))
                return t.buffer;
            if (O.isURLSearchParams(t))
                return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                t.toString();
            let a;
            if (i) {
                if (s.indexOf("application/x-www-form-urlencoded") > -1)
                    return u9(t, this.formSerializer).toString();
                if ((a = O.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                    const l = this.env && this.env.FormData;
                    return Rl(a ? {
                        "files[]": t
                    } : t, l && new l, this.formSerializer)
                }
            }
            return i || r ? (n.setContentType("application/json", !1),
            h9(t)) : t
        }
        ],
        transformResponse: [function(t) {
            const n = this.transitional || Qo.transitional
              , s = n && n.forcedJSONParsing
              , r = this.responseType === "json";
            if (O.isResponse(t) || O.isReadableStream(t))
                return t;
            if (t && O.isString(t) && (s && !this.responseType || r)) {
                const o = !(n && n.silentJSONParsing) && r;
                try {
                    return JSON.parse(t)
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError" ? xe.from(a, xe.ERR_BAD_RESPONSE, this, null, this.response) : a
                }
            }
            return t
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: yn.classes.FormData,
            Blob: yn.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    O.forEach(["delete", "get", "head", "post", "put", "patch"], e=>{
        Qo.headers[e] = {}
    }
    );
    const p9 = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
      , m9 = e=>{
        const t = {};
        let n, s, r;
        return e && e.split(`
`).forEach(function(o) {
            r = o.indexOf(":"),
            n = o.substring(0, r).trim().toLowerCase(),
            s = o.substring(r + 1).trim(),
            !(!n || t[n] && p9[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
        }),
        t
    }
      , hh = Symbol("internals");
    function Wi(e) {
        return e && String(e).trim().toLowerCase()
    }
    function Sa(e) {
        return e === !1 || e == null ? e : O.isArray(e) ? e.map(Sa) : String(e)
    }
    function _9(e) {
        const t = Object.create(null)
          , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let s;
        for (; s = n.exec(e); )
            t[s[1]] = s[2];
        return t
    }
    const g9 = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
    function ac(e, t, n, s, r) {
        if (O.isFunction(s))
            return s.call(this, t, n);
        if (r && (t = n),
        !!O.isString(t)) {
            if (O.isString(s))
                return t.indexOf(s) !== -1;
            if (O.isRegExp(s))
                return s.test(t)
        }
    }
    function y9(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,s)=>n.toUpperCase() + s)
    }
    function v9(e, t) {
        const n = O.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(s=>{
            Object.defineProperty(e, s + n, {
                value: function(r, i, o) {
                    return this[s].call(this, t, r, i, o)
                },
                configurable: !0
            })
        }
        )
    }
    class qt {
        constructor(t) {
            t && this.set(t)
        }
        set(t, n, s) {
            const r = this;
            function i(a, l, u) {
                const c = Wi(l);
                if (!c)
                    throw new Error("header name must be a non-empty string");
                const f = O.findKey(r, c);
                (!f || r[f] === void 0 || u === !0 || u === void 0 && r[f] !== !1) && (r[f || l] = Sa(a))
            }
            const o = (a,l)=>O.forEach(a, (u,c)=>i(u, c, l));
            if (O.isPlainObject(t) || t instanceof this.constructor)
                o(t, n);
            else if (O.isString(t) && (t = t.trim()) && !g9(t))
                o(m9(t), n);
            else if (O.isHeaders(t))
                for (const [a,l] of t.entries())
                    i(l, a, s);
            else
                t != null && i(n, t, s);
            return this
        }
        get(t, n) {
            if (t = Wi(t),
            t) {
                const s = O.findKey(this, t);
                if (s) {
                    const r = this[s];
                    if (!n)
                        return r;
                    if (n === !0)
                        return _9(r);
                    if (O.isFunction(n))
                        return n.call(this, r, s);
                    if (O.isRegExp(n))
                        return n.exec(r);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, n) {
            if (t = Wi(t),
            t) {
                const s = O.findKey(this, t);
                return !!(s && this[s] !== void 0 && (!n || ac(this, this[s], s, n)))
            }
            return !1
        }
        delete(t, n) {
            const s = this;
            let r = !1;
            function i(o) {
                if (o = Wi(o),
                o) {
                    const a = O.findKey(s, o);
                    a && (!n || ac(s, s[a], a, n)) && (delete s[a],
                    r = !0)
                }
            }
            return O.isArray(t) ? t.forEach(i) : i(t),
            r
        }
        clear(t) {
            const n = Object.keys(this);
            let s = n.length
              , r = !1;
            for (; s--; ) {
                const i = n[s];
                (!t || ac(this, this[i], i, t, !0)) && (delete this[i],
                r = !0)
            }
            return r
        }
        normalize(t) {
            const n = this
              , s = {};
            return O.forEach(this, (r,i)=>{
                const o = O.findKey(s, i);
                if (o) {
                    n[o] = Sa(r),
                    delete n[i];
                    return
                }
                const a = t ? y9(i) : String(i).trim();
                a !== i && delete n[i],
                n[a] = Sa(r),
                s[a] = !0
            }
            ),
            this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const n = Object.create(null);
            return O.forEach(this, (s,r)=>{
                s != null && s !== !1 && (n[r] = t && O.isArray(s) ? s.join(", ") : s)
            }
            ),
            n
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...n) {
            const s = new this(t);
            return n.forEach(r=>s.set(r)),
            s
        }
        static accessor(t) {
            const s = (this[hh] = this[hh] = {
                accessors: {}
            }).accessors
              , r = this.prototype;
            function i(o) {
                const a = Wi(o);
                s[a] || (v9(r, o),
                s[a] = !0)
            }
            return O.isArray(t) ? t.forEach(i) : i(t),
            this
        }
    }
    qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    O.reduceDescriptors(qt.prototype, ({value: e},t)=>{
        let n = t[0].toUpperCase() + t.slice(1);
        return {
            get: ()=>e,
            set(s) {
                this[n] = s
            }
        }
    }
    );
    O.freezeMethods(qt);
    function lc(e, t) {
        const n = this || Qo
          , s = t || n
          , r = qt.from(s.headers);
        let i = s.data;
        return O.forEach(e, function(a) {
            i = a.call(n, i, r.normalize(), t ? t.status : void 0)
        }),
        r.normalize(),
        i
    }
    function C_(e) {
        return !!(e && e.__CANCEL__)
    }
    function zi(e, t, n) {
        xe.call(this, e ?? "canceled", xe.ERR_CANCELED, t, n),
        this.name = "CanceledError"
    }
    O.inherits(zi, xe, {
        __CANCEL__: !0
    });
    function T_(e, t, n) {
        const s = n.config.validateStatus;
        !n.status || !s || s(n.status) ? e(n) : t(new xe("Request failed with status code " + n.status,[xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
    }
    function b9(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }
    function w9(e, t) {
        e = e || 10;
        const n = new Array(e)
          , s = new Array(e);
        let r = 0, i = 0, o;
        return t = t !== void 0 ? t : 1e3,
        function(l) {
            const u = Date.now()
              , c = s[i];
            o || (o = u),
            n[r] = l,
            s[r] = u;
            let f = i
              , d = 0;
            for (; f !== r; )
                d += n[f++],
                f = f % e;
            if (r = (r + 1) % e,
            r === i && (i = (i + 1) % e),
            u - o < t)
                return;
            const h = c && u - c;
            return h ? Math.round(d * 1e3 / h) : void 0
        }
    }
    function x9(e, t) {
        let n = 0;
        const s = 1e3 / t;
        let r = null;
        return function() {
            const o = this === !0
              , a = Date.now();
            if (o || a - n > s)
                return r && (clearTimeout(r),
                r = null),
                n = a,
                e.apply(null, arguments);
            r || (r = setTimeout(()=>(r = null,
            n = Date.now(),
            e.apply(null, arguments)), s - (a - n)))
        }
    }
    const Ha = (e,t,n=3)=>{
        let s = 0;
        const r = w9(50, 250);
        return x9(i=>{
            const o = i.loaded
              , a = i.lengthComputable ? i.total : void 0
              , l = o - s
              , u = r(l)
              , c = o <= a;
            s = o;
            const f = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && a && c ? (a - o) / u : void 0,
                event: i,
                lengthComputable: a != null
            };
            f[t ? "download" : "upload"] = !0,
            e(f)
        }
        , n)
    }
      , M9 = yn.hasStandardBrowserEnv ? function() {
        const t = /(msie|trident)/i.test(navigator.userAgent)
          , n = document.createElement("a");
        let s;
        function r(i) {
            let o = i;
            return t && (n.setAttribute("href", o),
            o = n.href),
            n.setAttribute("href", o),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return s = r(window.location.href),
        function(o) {
            const a = O.isString(o) ? r(o) : o;
            return a.protocol === s.protocol && a.host === s.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }()
      , k9 = yn.hasStandardBrowserEnv ? {
        write(e, t, n, s, r, i) {
            const o = [e + "=" + encodeURIComponent(t)];
            O.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            O.isString(s) && o.push("path=" + s),
            O.isString(r) && o.push("domain=" + r),
            i === !0 && o.push("secure"),
            document.cookie = o.join("; ")
        },
        read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };
    function S9(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }
    function O9(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
    function R_(e, t) {
        return e && !S9(t) ? O9(e, t) : t
    }
    const ph = e=>e instanceof qt ? {
        ...e
    } : e;
    function Rr(e, t) {
        t = t || {};
        const n = {};
        function s(u, c, f) {
            return O.isPlainObject(u) && O.isPlainObject(c) ? O.merge.call({
                caseless: f
            }, u, c) : O.isPlainObject(c) ? O.merge({}, c) : O.isArray(c) ? c.slice() : c
        }
        function r(u, c, f) {
            if (O.isUndefined(c)) {
                if (!O.isUndefined(u))
                    return s(void 0, u, f)
            } else
                return s(u, c, f)
        }
        function i(u, c) {
            if (!O.isUndefined(c))
                return s(void 0, c)
        }
        function o(u, c) {
            if (O.isUndefined(c)) {
                if (!O.isUndefined(u))
                    return s(void 0, u)
            } else
                return s(void 0, c)
        }
        function a(u, c, f) {
            if (f in t)
                return s(u, c);
            if (f in e)
                return s(void 0, u)
        }
        const l = {
            url: i,
            method: i,
            data: i,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            withXSRFToken: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: a,
            headers: (u,c)=>r(ph(u), ph(c), !0)
        };
        return O.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
            const f = l[c] || r
              , d = f(e[c], t[c], c);
            O.isUndefined(d) && f !== a || (n[c] = d)
        }),
        n
    }
    const P_ = e=>{
        const t = Rr({}, e);
        let {data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a} = t;
        t.headers = o = qt.from(o),
        t.url = S_(R_(t.baseURL, t.url), e.params, e.paramsSerializer),
        a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
        let l;
        if (O.isFormData(n)) {
            if (yn.hasStandardBrowserEnv || yn.hasStandardBrowserWebWorkerEnv)
                o.setContentType(void 0);
            else if ((l = o.getContentType()) !== !1) {
                const [u,...c] = l ? l.split(";").map(f=>f.trim()).filter(Boolean) : [];
                o.setContentType([u || "multipart/form-data", ...c].join("; "))
            }
        }
        if (yn.hasStandardBrowserEnv && (s && O.isFunction(s) && (s = s(t)),
        s || s !== !1 && M9(t.url))) {
            const u = r && i && k9.read(i);
            u && o.set(r, u)
        }
        return t
    }
      , E9 = typeof XMLHttpRequest < "u"
      , C9 = E9 && function(e) {
        return new Promise(function(n, s) {
            const r = P_(e);
            let i = r.data;
            const o = qt.from(r.headers).normalize();
            let {responseType: a} = r, l;
            function u() {
                r.cancelToken && r.cancelToken.unsubscribe(l),
                r.signal && r.signal.removeEventListener("abort", l)
            }
            let c = new XMLHttpRequest;
            c.open(r.method.toUpperCase(), r.url, !0),
            c.timeout = r.timeout;
            function f() {
                if (!c)
                    return;
                const h = qt.from("getAllResponseHeaders"in c && c.getAllResponseHeaders())
                  , v = {
                    data: !a || a === "text" || a === "json" ? c.responseText : c.response,
                    status: c.status,
                    statusText: c.statusText,
                    headers: h,
                    config: e,
                    request: c
                };
                T_(function(M) {
                    n(M),
                    u()
                }, function(M) {
                    s(M),
                    u()
                }, v),
                c = null
            }
            "onloadend"in c ? c.onloadend = f : c.onreadystatechange = function() {
                !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f)
            }
            ,
            c.onabort = function() {
                c && (s(new xe("Request aborted",xe.ECONNABORTED,r,c)),
                c = null)
            }
            ,
            c.onerror = function() {
                s(new xe("Network Error",xe.ERR_NETWORK,r,c)),
                c = null
            }
            ,
            c.ontimeout = function() {
                let g = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                const v = r.transitional || O_;
                r.timeoutErrorMessage && (g = r.timeoutErrorMessage),
                s(new xe(g,v.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,r,c)),
                c = null
            }
            ,
            i === void 0 && o.setContentType(null),
            "setRequestHeader"in c && O.forEach(o.toJSON(), function(g, v) {
                c.setRequestHeader(v, g)
            }),
            O.isUndefined(r.withCredentials) || (c.withCredentials = !!r.withCredentials),
            a && a !== "json" && (c.responseType = r.responseType),
            typeof r.onDownloadProgress == "function" && c.addEventListener("progress", Ha(r.onDownloadProgress, !0)),
            typeof r.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ha(r.onUploadProgress)),
            (r.cancelToken || r.signal) && (l = h=>{
                c && (s(!h || h.type ? new zi(null,e,c) : h),
                c.abort(),
                c = null)
            }
            ,
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
            const d = b9(r.url);
            if (d && yn.protocols.indexOf(d) === -1) {
                s(new xe("Unsupported protocol " + d + ":",xe.ERR_BAD_REQUEST,e));
                return
            }
            c.send(i || null)
        }
        )
    }
      , T9 = (e,t)=>{
        let n = new AbortController, s;
        const r = function(l) {
            if (!s) {
                s = !0,
                o();
                const u = l instanceof Error ? l : this.reason;
                n.abort(u instanceof xe ? u : new zi(u instanceof Error ? u.message : u))
            }
        };
        let i = t && setTimeout(()=>{
            r(new xe(`timeout ${t} of ms exceeded`,xe.ETIMEDOUT))
        }
        , t);
        const o = ()=>{
            e && (i && clearTimeout(i),
            i = null,
            e.forEach(l=>{
                l && (l.removeEventListener ? l.removeEventListener("abort", r) : l.unsubscribe(r))
            }
            ),
            e = null)
        }
        ;
        e.forEach(l=>l && l.addEventListener && l.addEventListener("abort", r));
        const {signal: a} = n;
        return a.unsubscribe = o,
        [a, ()=>{
            i && clearTimeout(i),
            i = null
        }
        ]
    }
      , R9 = function*(e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let s = 0, r;
        for (; s < n; )
            r = s + t,
            yield e.slice(s, r),
            s = r
    }
      , P9 = async function*(e, t, n) {
        for await(const s of e)
            yield*R9(ArrayBuffer.isView(s) ? s : await n(String(s)), t)
    }
      , mh = (e,t,n,s,r)=>{
        const i = P9(e, t, r);
        let o = 0;
        return new ReadableStream({
            type: "bytes",
            async pull(a) {
                const {done: l, value: u} = await i.next();
                if (l) {
                    a.close(),
                    s();
                    return
                }
                let c = u.byteLength;
                n && n(o += c),
                a.enqueue(new Uint8Array(u))
            },
            cancel(a) {
                return s(a),
                i.return()
            }
        },{
            highWaterMark: 2
        })
    }
      , _h = (e,t)=>{
        const n = e != null;
        return s=>setTimeout(()=>t({
            lengthComputable: n,
            total: e,
            loaded: s
        }))
    }
      , Pl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
      , A_ = Pl && typeof ReadableStream == "function"
      , Jc = Pl && (typeof TextEncoder == "function" ? (e=>t=>e.encode(t))(new TextEncoder) : async e=>new Uint8Array(await new Response(e).arrayBuffer()))
      , A9 = A_ && (()=>{
        let e = !1;
        const t = new Request(yn.origin,{
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return e = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return e && !t
    }
    )()
      , gh = 64 * 1024
      , Xc = A_ && !!(()=>{
        try {
            return O.isReadableStream(new Response("").body)
        } catch {}
    }
    )()
      , Wa = {
        stream: Xc && (e=>e.body)
    };
    Pl && (e=>{
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t=>{
            !Wa[t] && (Wa[t] = O.isFunction(e[t]) ? n=>n[t]() : (n,s)=>{
                throw new xe(`Response type '${t}' is not supported`,xe.ERR_NOT_SUPPORT,s)
            }
            )
        }
        )
    }
    )(new Response);
    const $9 = async e=>{
        if (e == null)
            return 0;
        if (O.isBlob(e))
            return e.size;
        if (O.isSpecCompliantForm(e))
            return (await new Request(e).arrayBuffer()).byteLength;
        if (O.isArrayBufferView(e))
            return e.byteLength;
        if (O.isURLSearchParams(e) && (e = e + ""),
        O.isString(e))
            return (await Jc(e)).byteLength
    }
      , D9 = async(e,t)=>{
        const n = O.toFiniteNumber(e.getContentLength());
        return n ?? $9(t)
    }
      , L9 = Pl && (async e=>{
        let {url: t, method: n, data: s, signal: r, cancelToken: i, timeout: o, onDownloadProgress: a, onUploadProgress: l, responseType: u, headers: c, withCredentials: f="same-origin", fetchOptions: d} = P_(e);
        u = u ? (u + "").toLowerCase() : "text";
        let[h,g] = r || i || o ? T9([r, i], o) : [], v, C;
        const M = ()=>{
            !v && setTimeout(()=>{
                h && h.unsubscribe()
            }
            ),
            v = !0
        }
        ;
        let k;
        try {
            if (l && A9 && n !== "get" && n !== "head" && (k = await D9(c, s)) !== 0) {
                let I = new Request(t,{
                    method: "POST",
                    body: s,
                    duplex: "half"
                }), j;
                O.isFormData(s) && (j = I.headers.get("content-type")) && c.setContentType(j),
                I.body && (s = mh(I.body, gh, _h(k, Ha(l)), null, Jc))
            }
            O.isString(f) || (f = f ? "cors" : "omit"),
            C = new Request(t,{
                ...d,
                signal: h,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: s,
                duplex: "half",
                withCredentials: f
            });
            let w = await fetch(C);
            const U = Xc && (u === "stream" || u === "response");
            if (Xc && (a || U)) {
                const I = {};
                ["status", "statusText", "headers"].forEach(D=>{
                    I[D] = w[D]
                }
                );
                const j = O.toFiniteNumber(w.headers.get("content-length"));
                w = new Response(mh(w.body, gh, a && _h(j, Ha(a, !0)), U && M, Jc),I)
            }
            u = u || "text";
            let G = await Wa[O.findKey(Wa, u) || "text"](w, e);
            return !U && M(),
            g && g(),
            await new Promise((I,j)=>{
                T_(I, j, {
                    data: G,
                    headers: qt.from(w.headers),
                    status: w.status,
                    statusText: w.statusText,
                    config: e,
                    request: C
                })
            }
            )
        } catch (w) {
            throw M(),
            w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(new xe("Network Error",xe.ERR_NETWORK,e,C), {
                cause: w.cause || w
            }) : xe.from(w, w && w.code, e, C)
        }
    }
    )
      , eu = {
        http: Jw,
        xhr: C9,
        fetch: L9
    };
    O.forEach(eu, (e,t)=>{
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }
    );
    const yh = e=>`- ${e}`
      , z9 = e=>O.isFunction(e) || e === null || e === !1
      , $_ = {
        getAdapter: e=>{
            e = O.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, s;
            const r = {};
            for (let i = 0; i < t; i++) {
                n = e[i];
                let o;
                if (s = n,
                !z9(n) && (s = eu[(o = String(n)).toLowerCase()],
                s === void 0))
                    throw new xe(`Unknown adapter '${o}'`);
                if (s)
                    break;
                r[o || "#" + i] = s
            }
            if (!s) {
                const i = Object.entries(r).map(([a,l])=>`adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = t ? i.length > 1 ? `since :
` + i.map(yh).join(`
`) : " " + yh(i[0]) : "as no adapter specified";
                throw new xe("There is no suitable adapter to dispatch the request " + o,"ERR_NOT_SUPPORT")
            }
            return s
        }
        ,
        adapters: eu
    };
    function cc(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
            throw new zi(null,e)
    }
    function vh(e) {
        return cc(e),
        e.headers = qt.from(e.headers),
        e.data = lc.call(e, e.transformRequest),
        ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
        $_.getAdapter(e.adapter || Qo.adapter)(e).then(function(s) {
            return cc(e),
            s.data = lc.call(e, e.transformResponse, s),
            s.headers = qt.from(s.headers),
            s
        }, function(s) {
            return C_(s) || (cc(e),
            s && s.response && (s.response.data = lc.call(e, e.transformResponse, s.response),
            s.response.headers = qt.from(s.response.headers))),
            Promise.reject(s)
        })
    }
    const D_ = "1.7.2"
      , sf = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
        sf[e] = function(s) {
            return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
    );
    const bh = {};
    sf.transitional = function(t, n, s) {
        function r(i, o) {
            return "[Axios v" + D_ + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "")
        }
        return (i,o,a)=>{
            if (t === !1)
                throw new xe(r(o, " has been removed" + (n ? " in " + n : "")),xe.ERR_DEPRECATED);
            return n && !bh[o] && (bh[o] = !0,
            console.warn(r(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
            t ? t(i, o, a) : !0
        }
    }
    ;
    function N9(e, t, n) {
        if (typeof e != "object")
            throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);
        const s = Object.keys(e);
        let r = s.length;
        for (; r-- > 0; ) {
            const i = s[r]
              , o = t[i];
            if (o) {
                const a = e[i]
                  , l = a === void 0 || o(a, i, e);
                if (l !== !0)
                    throw new xe("option " + i + " must be " + l,xe.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0)
                throw new xe("Unknown option " + i,xe.ERR_BAD_OPTION)
        }
    }
    const tu = {
        assertOptions: N9,
        validators: sf
    }
      , ws = tu.validators;
    class Mr {
        constructor(t) {
            this.defaults = t,
            this.interceptors = {
                request: new dh,
                response: new dh
            }
        }
        async request(t, n) {
            try {
                return await this._request(t, n)
            } catch (s) {
                if (s instanceof Error) {
                    let r;
                    Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error;
                    const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                    try {
                        s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i
                    } catch {}
                }
                throw s
            }
        }
        _request(t, n) {
            typeof t == "string" ? (n = n || {},
            n.url = t) : n = t || {},
            n = Rr(this.defaults, n);
            const {transitional: s, paramsSerializer: r, headers: i} = n;
            s !== void 0 && tu.assertOptions(s, {
                silentJSONParsing: ws.transitional(ws.boolean),
                forcedJSONParsing: ws.transitional(ws.boolean),
                clarifyTimeoutError: ws.transitional(ws.boolean)
            }, !1),
            r != null && (O.isFunction(r) ? n.paramsSerializer = {
                serialize: r
            } : tu.assertOptions(r, {
                encode: ws.function,
                serialize: ws.function
            }, !0)),
            n.method = (n.method || this.defaults.method || "get").toLowerCase();
            let o = i && O.merge(i.common, i[n.method]);
            i && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g=>{
                delete i[g]
            }
            ),
            n.headers = qt.concat(o, i);
            const a = [];
            let l = !0;
            this.interceptors.request.forEach(function(v) {
                typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous,
                a.unshift(v.fulfilled, v.rejected))
            });
            const u = [];
            this.interceptors.response.forEach(function(v) {
                u.push(v.fulfilled, v.rejected)
            });
            let c, f = 0, d;
            if (!l) {
                const g = [vh.bind(this), void 0];
                for (g.unshift.apply(g, a),
                g.push.apply(g, u),
                d = g.length,
                c = Promise.resolve(n); f < d; )
                    c = c.then(g[f++], g[f++]);
                return c
            }
            d = a.length;
            let h = n;
            for (f = 0; f < d; ) {
                const g = a[f++]
                  , v = a[f++];
                try {
                    h = g(h)
                } catch (C) {
                    v.call(this, C);
                    break
                }
            }
            try {
                c = vh.call(this, h)
            } catch (g) {
                return Promise.reject(g)
            }
            for (f = 0,
            d = u.length; f < d; )
                c = c.then(u[f++], u[f++]);
            return c
        }
        getUri(t) {
            t = Rr(this.defaults, t);
            const n = R_(t.baseURL, t.url);
            return S_(n, t.params, t.paramsSerializer)
        }
    }
    O.forEach(["delete", "get", "head", "options"], function(t) {
        Mr.prototype[t] = function(n, s) {
            return this.request(Rr(s || {}, {
                method: t,
                url: n,
                data: (s || {}).data
            }))
        }
    });
    O.forEach(["post", "put", "patch"], function(t) {
        function n(s) {
            return function(i, o, a) {
                return this.request(Rr(a || {}, {
                    method: t,
                    headers: s ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: i,
                    data: o
                }))
            }
        }
        Mr.prototype[t] = n(),
        Mr.prototype[t + "Form"] = n(!0)
    });
    class rf {
        constructor(t) {
            if (typeof t != "function")
                throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function(i) {
                n = i
            }
            );
            const s = this;
            this.promise.then(r=>{
                if (!s._listeners)
                    return;
                let i = s._listeners.length;
                for (; i-- > 0; )
                    s._listeners[i](r);
                s._listeners = null
            }
            ),
            this.promise.then = r=>{
                let i;
                const o = new Promise(a=>{
                    s.subscribe(a),
                    i = a
                }
                ).then(r);
                return o.cancel = function() {
                    s.unsubscribe(i)
                }
                ,
                o
            }
            ,
            t(function(i, o, a) {
                s.reason || (s.reason = new zi(i,o,a),
                n(s.reason))
            })
        }
        throwIfRequested() {
            if (this.reason)
                throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners)
                return;
            const n = this._listeners.indexOf(t);
            n !== -1 && this._listeners.splice(n, 1)
        }
        static source() {
            let t;
            return {
                token: new rf(function(r) {
                    t = r
                }
                ),
                cancel: t
            }
        }
    }
    function I9(e) {
        return function(n) {
            return e.apply(null, n)
        }
    }
    function F9(e) {
        return O.isObject(e) && e.isAxiosError === !0
    }
    const nu = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(nu).forEach(([e,t])=>{
        nu[t] = e
    }
    );
    function L_(e) {
        const t = new Mr(e)
          , n = h_(Mr.prototype.request, t);
        return O.extend(n, Mr.prototype, t, {
            allOwnKeys: !0
        }),
        O.extend(n, t, null, {
            allOwnKeys: !0
        }),
        n.create = function(r) {
            return L_(Rr(e, r))
        }
        ,
        n
    }
    const pt = L_(Qo);
    pt.Axios = Mr;
    pt.CanceledError = zi;
    pt.CancelToken = rf;
    pt.isCancel = C_;
    pt.VERSION = D_;
    pt.toFormData = Rl;
    pt.AxiosError = xe;
    pt.Cancel = pt.CanceledError;
    pt.all = function(t) {
        return Promise.all(t)
    }
    ;
    pt.spread = I9;
    pt.isAxiosError = F9;
    pt.mergeConfig = Rr;
    pt.AxiosHeaders = qt;
    pt.formToJSON = e=>E_(O.isHTMLForm(e) ? new FormData(e) : e);
    pt.getAdapter = $_.getAdapter;
    pt.HttpStatusCode = nu;
    pt.default = pt;
    var $e;
    (function(e) {
        e.assertEqual = r=>r;
        function t(r) {}
        e.assertIs = t;
        function n(r) {
            throw new Error
        }
        e.assertNever = n,
        e.arrayToEnum = r=>{
            const i = {};
            for (const o of r)
                i[o] = o;
            return i
        }
        ,
        e.getValidEnumValues = r=>{
            const i = e.objectKeys(r).filter(a=>typeof r[r[a]] != "number")
              , o = {};
            for (const a of i)
                o[a] = r[a];
            return e.objectValues(o)
        }
        ,
        e.objectValues = r=>e.objectKeys(r).map(function(i) {
            return r[i]
        }),
        e.objectKeys = typeof Object.keys == "function" ? r=>Object.keys(r) : r=>{
            const i = [];
            for (const o in r)
                Object.prototype.hasOwnProperty.call(r, o) && i.push(o);
            return i
        }
        ,
        e.find = (r,i)=>{
            for (const o of r)
                if (i(o))
                    return o
        }
        ,
        e.isInteger = typeof Number.isInteger == "function" ? r=>Number.isInteger(r) : r=>typeof r == "number" && isFinite(r) && Math.floor(r) === r;
        function s(r, i=" | ") {
            return r.map(o=>typeof o == "string" ? `'${o}'` : o).join(i)
        }
        e.joinValues = s,
        e.jsonStringifyReplacer = (r,i)=>typeof i == "bigint" ? i.toString() : i
    }
    )($e || ($e = {}));
    var su;
    (function(e) {
        e.mergeShapes = (t,n)=>({
            ...t,
            ...n
        })
    }
    )(su || (su = {}));
    const J = $e.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
      , Rs = e=>{
        switch (typeof e) {
        case "undefined":
            return J.undefined;
        case "string":
            return J.string;
        case "number":
            return isNaN(e) ? J.nan : J.number;
        case "boolean":
            return J.boolean;
        case "function":
            return J.function;
        case "bigint":
            return J.bigint;
        case "symbol":
            return J.symbol;
        case "object":
            return Array.isArray(e) ? J.array : e === null ? J.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? J.promise : typeof Map < "u" && e instanceof Map ? J.map : typeof Set < "u" && e instanceof Set ? J.set : typeof Date < "u" && e instanceof Date ? J.date : J.object;
        default:
            return J.unknown
        }
    }
      , z = $e.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
      , j9 = e=>JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
    class Kt extends Error {
        constructor(t) {
            super(),
            this.issues = [],
            this.addIssue = s=>{
                this.issues = [...this.issues, s]
            }
            ,
            this.addIssues = (s=[])=>{
                this.issues = [...this.issues, ...s]
            }
            ;
            const n = new.target.prototype;
            Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
            this.name = "ZodError",
            this.issues = t
        }
        get errors() {
            return this.issues
        }
        format(t) {
            const n = t || function(i) {
                return i.message
            }
              , s = {
                _errors: []
            }
              , r = i=>{
                for (const o of i.issues)
                    if (o.code === "invalid_union")
                        o.unionErrors.map(r);
                    else if (o.code === "invalid_return_type")
                        r(o.returnTypeError);
                    else if (o.code === "invalid_arguments")
                        r(o.argumentsError);
                    else if (o.path.length === 0)
                        s._errors.push(n(o));
                    else {
                        let a = s
                          , l = 0;
                        for (; l < o.path.length; ) {
                            const u = o.path[l];
                            l === o.path.length - 1 ? (a[u] = a[u] || {
                                _errors: []
                            },
                            a[u]._errors.push(n(o))) : a[u] = a[u] || {
                                _errors: []
                            },
                            a = a[u],
                            l++
                        }
                    }
            }
            ;
            return r(this),
            s
        }
        static assert(t) {
            if (!(t instanceof Kt))
                throw new Error(`Not a ZodError: ${t}`)
        }
        toString() {
            return this.message
        }
        get message() {
            return JSON.stringify(this.issues, $e.jsonStringifyReplacer, 2)
        }
        get isEmpty() {
            return this.issues.length === 0
        }
        flatten(t=n=>n.message) {
            const n = {}
              , s = [];
            for (const r of this.issues)
                r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [],
                n[r.path[0]].push(t(r))) : s.push(t(r));
            return {
                formErrors: s,
                fieldErrors: n
            }
        }
        get formErrors() {
            return this.flatten()
        }
    }
    Kt.create = e=>new Kt(e);
    const Ei = (e,t)=>{
        let n;
        switch (e.code) {
        case z.invalid_type:
            e.received === J.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
            break;
        case z.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, $e.jsonStringifyReplacer)}`;
            break;
        case z.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${$e.joinValues(e.keys, ", ")}`;
            break;
        case z.invalid_union:
            n = "Invalid input";
            break;
        case z.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${$e.joinValues(e.options)}`;
            break;
        case z.invalid_enum_value:
            n = `Invalid enum value. Expected ${$e.joinValues(e.options)}, received '${e.received}'`;
            break;
        case z.invalid_arguments:
            n = "Invalid function arguments";
            break;
        case z.invalid_return_type:
            n = "Invalid function return type";
            break;
        case z.invalid_date:
            n = "Invalid date";
            break;
        case z.invalid_string:
            typeof e.validation == "object" ? "includes"in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
            typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith"in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith"in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : $e.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
            break;
        case z.too_small:
            e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
            break;
        case z.too_big:
            e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
            break;
        case z.custom:
            n = "Invalid input";
            break;
        case z.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
        case z.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
        case z.not_finite:
            n = "Number must be finite";
            break;
        default:
            n = t.defaultError,
            $e.assertNever(e)
        }
        return {
            message: n
        }
    }
    ;
    let z_ = Ei;
    function U9(e) {
        z_ = e
    }
    function Ya() {
        return z_
    }
    const Za = e=>{
        const {data: t, path: n, errorMaps: s, issueData: r} = e
          , i = [...n, ...r.path || []]
          , o = {
            ...r,
            path: i
        };
        if (r.message !== void 0)
            return {
                ...r,
                path: i,
                message: r.message
            };
        let a = "";
        const l = s.filter(u=>!!u).slice().reverse();
        for (const u of l)
            a = u(o, {
                data: t,
                defaultError: a
            }).message;
        return {
            ...r,
            path: i,
            message: a
        }
    }
      , q9 = [];
    function Y(e, t) {
        const n = Ya()
          , s = Za({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === Ei ? void 0 : Ei].filter(r=>!!r)
        });
        e.common.issues.push(s)
    }
    class Et {
        constructor() {
            this.value = "valid"
        }
        dirty() {
            this.value === "valid" && (this.value = "dirty")
        }
        abort() {
            this.value !== "aborted" && (this.value = "aborted")
        }
        static mergeArray(t, n) {
            const s = [];
            for (const r of n) {
                if (r.status === "aborted")
                    return ge;
                r.status === "dirty" && t.dirty(),
                s.push(r.value)
            }
            return {
                status: t.value,
                value: s
            }
        }
        static async mergeObjectAsync(t, n) {
            const s = [];
            for (const r of n) {
                const i = await r.key
                  , o = await r.value;
                s.push({
                    key: i,
                    value: o
                })
            }
            return Et.mergeObjectSync(t, s)
        }
        static mergeObjectSync(t, n) {
            const s = {};
            for (const r of n) {
                const {key: i, value: o} = r;
                if (i.status === "aborted" || o.status === "aborted")
                    return ge;
                i.status === "dirty" && t.dirty(),
                o.status === "dirty" && t.dirty(),
                i.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (s[i.value] = o.value)
            }
            return {
                status: t.value,
                value: s
            }
        }
    }
    const ge = Object.freeze({
        status: "aborted"
    })
      , Yr = e=>({
        status: "dirty",
        value: e
    })
      , $t = e=>({
        status: "valid",
        value: e
    })
      , ru = e=>e.status === "aborted"
      , iu = e=>e.status === "dirty"
      , bo = e=>e.status === "valid"
      , wo = e=>typeof Promise < "u" && e instanceof Promise;
    function Ka(e, t, n, s) {
        if (typeof t == "function" ? e !== t || !s : !t.has(e))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return t.get(e)
    }
    function N_(e, t, n, s, r) {
        if (typeof t == "function" ? e !== t || !r : !t.has(e))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return t.set(e, n),
        n
    }
    var ae;
    (function(e) {
        e.errToObj = t=>typeof t == "string" ? {
            message: t
        } : t || {},
        e.toString = t=>typeof t == "string" ? t : t == null ? void 0 : t.message
    }
    )(ae || (ae = {}));
    var Qi, Ji;
    class jn {
        constructor(t, n, s, r) {
            this._cachedPath = [],
            this.parent = t,
            this.data = n,
            this._path = s,
            this._key = r
        }
        get path() {
            return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
        }
    }
    const wh = (e,t)=>{
        if (bo(t))
            return {
                success: !0,
                data: t.value
            };
        if (!e.common.issues.length)
            throw new Error("Validation failed but no issues detected.");
        return {
            success: !1,
            get error() {
                if (this._error)
                    return this._error;
                const n = new Kt(e.common.issues);
                return this._error = n,
                this._error
            }
        }
    }
    ;
    function Me(e) {
        if (!e)
            return {};
        const {errorMap: t, invalid_type_error: n, required_error: s, description: r} = e;
        if (t && (n || s))
            throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
        return t ? {
            errorMap: t,
            description: r
        } : {
            errorMap: (o,a)=>{
                var l, u;
                const {message: c} = e;
                return o.code === "invalid_enum_value" ? {
                    message: c ?? a.defaultError
                } : typeof a.data > "u" ? {
                    message: (l = c ?? s) !== null && l !== void 0 ? l : a.defaultError
                } : o.code !== "invalid_type" ? {
                    message: a.defaultError
                } : {
                    message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError
                }
            }
            ,
            description: r
        }
    }
    class Ee {
        constructor(t) {
            this.spa = this.safeParseAsync,
            this._def = t,
            this.parse = this.parse.bind(this),
            this.safeParse = this.safeParse.bind(this),
            this.parseAsync = this.parseAsync.bind(this),
            this.safeParseAsync = this.safeParseAsync.bind(this),
            this.spa = this.spa.bind(this),
            this.refine = this.refine.bind(this),
            this.refinement = this.refinement.bind(this),
            this.superRefine = this.superRefine.bind(this),
            this.optional = this.optional.bind(this),
            this.nullable = this.nullable.bind(this),
            this.nullish = this.nullish.bind(this),
            this.array = this.array.bind(this),
            this.promise = this.promise.bind(this),
            this.or = this.or.bind(this),
            this.and = this.and.bind(this),
            this.transform = this.transform.bind(this),
            this.brand = this.brand.bind(this),
            this.default = this.default.bind(this),
            this.catch = this.catch.bind(this),
            this.describe = this.describe.bind(this),
            this.pipe = this.pipe.bind(this),
            this.readonly = this.readonly.bind(this),
            this.isNullable = this.isNullable.bind(this),
            this.isOptional = this.isOptional.bind(this)
        }
        get description() {
            return this._def.description
        }
        _getType(t) {
            return Rs(t.data)
        }
        _getOrReturnCtx(t, n) {
            return n || {
                common: t.parent.common,
                data: t.data,
                parsedType: Rs(t.data),
                schemaErrorMap: this._def.errorMap,
                path: t.path,
                parent: t.parent
            }
        }
        _processInputParams(t) {
            return {
                status: new Et,
                ctx: {
                    common: t.parent.common,
                    data: t.data,
                    parsedType: Rs(t.data),
                    schemaErrorMap: this._def.errorMap,
                    path: t.path,
                    parent: t.parent
                }
            }
        }
        _parseSync(t) {
            const n = this._parse(t);
            if (wo(n))
                throw new Error("Synchronous parse encountered promise.");
            return n
        }
        _parseAsync(t) {
            const n = this._parse(t);
            return Promise.resolve(n)
        }
        parse(t, n) {
            const s = this.safeParse(t, n);
            if (s.success)
                return s.data;
            throw s.error
        }
        safeParse(t, n) {
            var s;
            const r = {
                common: {
                    issues: [],
                    async: (s = n == null ? void 0 : n.async) !== null && s !== void 0 ? s : !1,
                    contextualErrorMap: n == null ? void 0 : n.errorMap
                },
                path: (n == null ? void 0 : n.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: t,
                parsedType: Rs(t)
            }
              , i = this._parseSync({
                data: t,
                path: r.path,
                parent: r
            });
            return wh(r, i)
        }
        async parseAsync(t, n) {
            const s = await this.safeParseAsync(t, n);
            if (s.success)
                return s.data;
            throw s.error
        }
        async safeParseAsync(t, n) {
            const s = {
                common: {
                    issues: [],
                    contextualErrorMap: n == null ? void 0 : n.errorMap,
                    async: !0
                },
                path: (n == null ? void 0 : n.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: t,
                parsedType: Rs(t)
            }
              , r = this._parse({
                data: t,
                path: s.path,
                parent: s
            })
              , i = await (wo(r) ? r : Promise.resolve(r));
            return wh(s, i)
        }
        refine(t, n) {
            const s = r=>typeof n == "string" || typeof n > "u" ? {
                message: n
            } : typeof n == "function" ? n(r) : n;
            return this._refinement((r,i)=>{
                const o = t(r)
                  , a = ()=>i.addIssue({
                    code: z.custom,
                    ...s(r)
                });
                return typeof Promise < "u" && o instanceof Promise ? o.then(l=>l ? !0 : (a(),
                !1)) : o ? !0 : (a(),
                !1)
            }
            )
        }
        refinement(t, n) {
            return this._refinement((s,r)=>t(s) ? !0 : (r.addIssue(typeof n == "function" ? n(s, r) : n),
            !1))
        }
        _refinement(t) {
            return new wn({
                schema: this,
                typeName: _e.ZodEffects,
                effect: {
                    type: "refinement",
                    refinement: t
                }
            })
        }
        superRefine(t) {
            return this._refinement(t)
        }
        optional() {
            return In.create(this, this._def)
        }
        nullable() {
            return Js.create(this, this._def)
        }
        nullish() {
            return this.nullable().optional()
        }
        array() {
            return vn.create(this, this._def)
        }
        promise() {
            return Ti.create(this, this._def)
        }
        or(t) {
            return So.create([this, t], this._def)
        }
        and(t) {
            return Oo.create(this, t, this._def)
        }
        transform(t) {
            return new wn({
                ...Me(this._def),
                schema: this,
                typeName: _e.ZodEffects,
                effect: {
                    type: "transform",
                    transform: t
                }
            })
        }
        default(t) {
            const n = typeof t == "function" ? t : ()=>t;
            return new Po({
                ...Me(this._def),
                innerType: this,
                defaultValue: n,
                typeName: _e.ZodDefault
            })
        }
        brand() {
            return new of({
                typeName: _e.ZodBranded,
                type: this,
                ...Me(this._def)
            })
        }
        catch(t) {
            const n = typeof t == "function" ? t : ()=>t;
            return new Ao({
                ...Me(this._def),
                innerType: this,
                catchValue: n,
                typeName: _e.ZodCatch
            })
        }
        describe(t) {
            const n = this.constructor;
            return new n({
                ...this._def,
                description: t
            })
        }
        pipe(t) {
            return Jo.create(this, t)
        }
        readonly() {
            return $o.create(this)
        }
        isOptional() {
            return this.safeParse(void 0).success
        }
        isNullable() {
            return this.safeParse(null).success
        }
    }
    const B9 = /^c[^\s-]{8,}$/i
      , V9 = /^[0-9a-z]+$/
      , H9 = /^[0-9A-HJKMNP-TV-Z]{26}$/
      , W9 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
      , Y9 = /^[a-z0-9_-]{21}$/i
      , Z9 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
      , K9 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
      , G9 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    let uc;
    const Q9 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
      , J9 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
      , X9 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
      , I_ = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
      , ex = new RegExp(`^${I_}$`);
    function F_(e) {
        let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
        return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`),
        t
    }
    function tx(e) {
        return new RegExp(`^${F_(e)}$`)
    }
    function j_(e) {
        let t = `${I_}T${F_(e)}`;
        const n = [];
        return n.push(e.local ? "Z?" : "Z"),
        e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
        t = `${t}(${n.join("|")})`,
        new RegExp(`^${t}$`)
    }
    function nx(e, t) {
        return !!((t === "v4" || !t) && Q9.test(e) || (t === "v6" || !t) && J9.test(e))
    }
    class _n extends Ee {
        _parse(t) {
            if (this._def.coerce && (t.data = String(t.data)),
            this._getType(t) !== J.string) {
                const i = this._getOrReturnCtx(t);
                return Y(i, {
                    code: z.invalid_type,
                    expected: J.string,
                    received: i.parsedType
                }),
                ge
            }
            const s = new Et;
            let r;
            for (const i of this._def.checks)
                if (i.kind === "min")
                    t.data.length < i.value && (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.too_small,
                        minimum: i.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "max")
                    t.data.length > i.value && (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.too_big,
                        maximum: i.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "length") {
                    const o = t.data.length > i.value
                      , a = t.data.length < i.value;
                    (o || a) && (r = this._getOrReturnCtx(t, r),
                    o ? Y(r, {
                        code: z.too_big,
                        maximum: i.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: i.message
                    }) : a && Y(r, {
                        code: z.too_small,
                        minimum: i.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: i.message
                    }),
                    s.dirty())
                } else if (i.kind === "email")
                    K9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "email",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "emoji")
                    uc || (uc = new RegExp(G9,"u")),
                    uc.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "emoji",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "uuid")
                    W9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "uuid",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "nanoid")
                    Y9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "nanoid",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "cuid")
                    B9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "cuid",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "cuid2")
                    V9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "cuid2",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "ulid")
                    H9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "ulid",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty());
                else if (i.kind === "url")
                    try {
                        new URL(t.data)
                    } catch {
                        r = this._getOrReturnCtx(t, r),
                        Y(r, {
                            validation: "url",
                            code: z.invalid_string,
                            message: i.message
                        }),
                        s.dirty()
                    }
                else
                    i.kind === "regex" ? (i.regex.lastIndex = 0,
                    i.regex.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "regex",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: {
                            includes: i.value,
                            position: i.position
                        },
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: {
                            startsWith: i.value
                        },
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: {
                            endsWith: i.value
                        },
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "datetime" ? j_(i).test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: "datetime",
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "date" ? ex.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: "date",
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "time" ? tx(i).test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        code: z.invalid_string,
                        validation: "time",
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "duration" ? Z9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "duration",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "ip" ? nx(t.data, i.version) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "ip",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty()) : i.kind === "base64" ? X9.test(t.data) || (r = this._getOrReturnCtx(t, r),
                    Y(r, {
                        validation: "base64",
                        code: z.invalid_string,
                        message: i.message
                    }),
                    s.dirty()) : $e.assertNever(i);
            return {
                status: s.value,
                value: t.data
            }
        }
        _regex(t, n, s) {
            return this.refinement(r=>t.test(r), {
                validation: n,
                code: z.invalid_string,
                ...ae.errToObj(s)
            })
        }
        _addCheck(t) {
            return new _n({
                ...this._def,
                checks: [...this._def.checks, t]
            })
        }
        email(t) {
            return this._addCheck({
                kind: "email",
                ...ae.errToObj(t)
            })
        }
        url(t) {
            return this._addCheck({
                kind: "url",
                ...ae.errToObj(t)
            })
        }
        emoji(t) {
            return this._addCheck({
                kind: "emoji",
                ...ae.errToObj(t)
            })
        }
        uuid(t) {
            return this._addCheck({
                kind: "uuid",
                ...ae.errToObj(t)
            })
        }
        nanoid(t) {
            return this._addCheck({
                kind: "nanoid",
                ...ae.errToObj(t)
            })
        }
        cuid(t) {
            return this._addCheck({
                kind: "cuid",
                ...ae.errToObj(t)
            })
        }
        cuid2(t) {
            return this._addCheck({
                kind: "cuid2",
                ...ae.errToObj(t)
            })
        }
        ulid(t) {
            return this._addCheck({
                kind: "ulid",
                ...ae.errToObj(t)
            })
        }
        base64(t) {
            return this._addCheck({
                kind: "base64",
                ...ae.errToObj(t)
            })
        }
        ip(t) {
            return this._addCheck({
                kind: "ip",
                ...ae.errToObj(t)
            })
        }
        datetime(t) {
            var n, s;
            return typeof t == "string" ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: t
            }) : this._addCheck({
                kind: "datetime",
                precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
                offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
                local: (s = t == null ? void 0 : t.local) !== null && s !== void 0 ? s : !1,
                ...ae.errToObj(t == null ? void 0 : t.message)
            })
        }
        date(t) {
            return this._addCheck({
                kind: "date",
                message: t
            })
        }
        time(t) {
            return typeof t == "string" ? this._addCheck({
                kind: "time",
                precision: null,
                message: t
            }) : this._addCheck({
                kind: "time",
                precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
                ...ae.errToObj(t == null ? void 0 : t.message)
            })
        }
        duration(t) {
            return this._addCheck({
                kind: "duration",
                ...ae.errToObj(t)
            })
        }
        regex(t, n) {
            return this._addCheck({
                kind: "regex",
                regex: t,
                ...ae.errToObj(n)
            })
        }
        includes(t, n) {
            return this._addCheck({
                kind: "includes",
                value: t,
                position: n == null ? void 0 : n.position,
                ...ae.errToObj(n == null ? void 0 : n.message)
            })
        }
        startsWith(t, n) {
            return this._addCheck({
                kind: "startsWith",
                value: t,
                ...ae.errToObj(n)
            })
        }
        endsWith(t, n) {
            return this._addCheck({
                kind: "endsWith",
                value: t,
                ...ae.errToObj(n)
            })
        }
        min(t, n) {
            return this._addCheck({
                kind: "min",
                value: t,
                ...ae.errToObj(n)
            })
        }
        max(t, n) {
            return this._addCheck({
                kind: "max",
                value: t,
                ...ae.errToObj(n)
            })
        }
        length(t, n) {
            return this._addCheck({
                kind: "length",
                value: t,
                ...ae.errToObj(n)
            })
        }
        nonempty(t) {
            return this.min(1, ae.errToObj(t))
        }
        trim() {
            return new _n({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "trim"
                }]
            })
        }
        toLowerCase() {
            return new _n({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "toLowerCase"
                }]
            })
        }
        toUpperCase() {
            return new _n({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: "toUpperCase"
                }]
            })
        }
        get isDatetime() {
            return !!this._def.checks.find(t=>t.kind === "datetime")
        }
        get isDate() {
            return !!this._def.checks.find(t=>t.kind === "date")
        }
        get isTime() {
            return !!this._def.checks.find(t=>t.kind === "time")
        }
        get isDuration() {
            return !!this._def.checks.find(t=>t.kind === "duration")
        }
        get isEmail() {
            return !!this._def.checks.find(t=>t.kind === "email")
        }
        get isURL() {
            return !!this._def.checks.find(t=>t.kind === "url")
        }
        get isEmoji() {
            return !!this._def.checks.find(t=>t.kind === "emoji")
        }
        get isUUID() {
            return !!this._def.checks.find(t=>t.kind === "uuid")
        }
        get isNANOID() {
            return !!this._def.checks.find(t=>t.kind === "nanoid")
        }
        get isCUID() {
            return !!this._def.checks.find(t=>t.kind === "cuid")
        }
        get isCUID2() {
            return !!this._def.checks.find(t=>t.kind === "cuid2")
        }
        get isULID() {
            return !!this._def.checks.find(t=>t.kind === "ulid")
        }
        get isIP() {
            return !!this._def.checks.find(t=>t.kind === "ip")
        }
        get isBase64() {
            return !!this._def.checks.find(t=>t.kind === "base64")
        }
        get minLength() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "min" && (t === null || n.value > t) && (t = n.value);
            return t
        }
        get maxLength() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "max" && (t === null || n.value < t) && (t = n.value);
            return t
        }
    }
    _n.create = e=>{
        var t;
        return new _n({
            checks: [],
            typeName: _e.ZodString,
            coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
            ...Me(e)
        })
    }
    ;
    function sx(e, t) {
        const n = (e.toString().split(".")[1] || "").length
          , s = (t.toString().split(".")[1] || "").length
          , r = n > s ? n : s
          , i = parseInt(e.toFixed(r).replace(".", ""))
          , o = parseInt(t.toFixed(r).replace(".", ""));
        return i % o / Math.pow(10, r)
    }
    class Ks extends Ee {
        constructor() {
            super(...arguments),
            this.min = this.gte,
            this.max = this.lte,
            this.step = this.multipleOf
        }
        _parse(t) {
            if (this._def.coerce && (t.data = Number(t.data)),
            this._getType(t) !== J.number) {
                const i = this._getOrReturnCtx(t);
                return Y(i, {
                    code: z.invalid_type,
                    expected: J.number,
                    received: i.parsedType
                }),
                ge
            }
            let s;
            const r = new Et;
            for (const i of this._def.checks)
                i.kind === "int" ? $e.isInteger(t.data) || (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.invalid_type,
                    expected: "integer",
                    received: "float",
                    message: i.message
                }),
                r.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.too_small,
                    minimum: i.value,
                    type: "number",
                    inclusive: i.inclusive,
                    exact: !1,
                    message: i.message
                }),
                r.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.too_big,
                    maximum: i.value,
                    type: "number",
                    inclusive: i.inclusive,
                    exact: !1,
                    message: i.message
                }),
                r.dirty()) : i.kind === "multipleOf" ? sx(t.data, i.value) !== 0 && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.not_multiple_of,
                    multipleOf: i.value,
                    message: i.message
                }),
                r.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.not_finite,
                    message: i.message
                }),
                r.dirty()) : $e.assertNever(i);
            return {
                status: r.value,
                value: t.data
            }
        }
        gte(t, n) {
            return this.setLimit("min", t, !0, ae.toString(n))
        }
        gt(t, n) {
            return this.setLimit("min", t, !1, ae.toString(n))
        }
        lte(t, n) {
            return this.setLimit("max", t, !0, ae.toString(n))
        }
        lt(t, n) {
            return this.setLimit("max", t, !1, ae.toString(n))
        }
        setLimit(t, n, s, r) {
            return new Ks({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: t,
                    value: n,
                    inclusive: s,
                    message: ae.toString(r)
                }]
            })
        }
        _addCheck(t) {
            return new Ks({
                ...this._def,
                checks: [...this._def.checks, t]
            })
        }
        int(t) {
            return this._addCheck({
                kind: "int",
                message: ae.toString(t)
            })
        }
        positive(t) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !1,
                message: ae.toString(t)
            })
        }
        negative(t) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !1,
                message: ae.toString(t)
            })
        }
        nonpositive(t) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: !0,
                message: ae.toString(t)
            })
        }
        nonnegative(t) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: !0,
                message: ae.toString(t)
            })
        }
        multipleOf(t, n) {
            return this._addCheck({
                kind: "multipleOf",
                value: t,
                message: ae.toString(n)
            })
        }
        finite(t) {
            return this._addCheck({
                kind: "finite",
                message: ae.toString(t)
            })
        }
        safe(t) {
            return this._addCheck({
                kind: "min",
                inclusive: !0,
                value: Number.MIN_SAFE_INTEGER,
                message: ae.toString(t)
            })._addCheck({
                kind: "max",
                inclusive: !0,
                value: Number.MAX_SAFE_INTEGER,
                message: ae.toString(t)
            })
        }
        get minValue() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "min" && (t === null || n.value > t) && (t = n.value);
            return t
        }
        get maxValue() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "max" && (t === null || n.value < t) && (t = n.value);
            return t
        }
        get isInt() {
            return !!this._def.checks.find(t=>t.kind === "int" || t.kind === "multipleOf" && $e.isInteger(t.value))
        }
        get isFinite() {
            let t = null
              , n = null;
            for (const s of this._def.checks) {
                if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
                    return !0;
                s.kind === "min" ? (n === null || s.value > n) && (n = s.value) : s.kind === "max" && (t === null || s.value < t) && (t = s.value)
            }
            return Number.isFinite(n) && Number.isFinite(t)
        }
    }
    Ks.create = e=>new Ks({
        checks: [],
        typeName: _e.ZodNumber,
        coerce: (e == null ? void 0 : e.coerce) || !1,
        ...Me(e)
    });
    class Gs extends Ee {
        constructor() {
            super(...arguments),
            this.min = this.gte,
            this.max = this.lte
        }
        _parse(t) {
            if (this._def.coerce && (t.data = BigInt(t.data)),
            this._getType(t) !== J.bigint) {
                const i = this._getOrReturnCtx(t);
                return Y(i, {
                    code: z.invalid_type,
                    expected: J.bigint,
                    received: i.parsedType
                }),
                ge
            }
            let s;
            const r = new Et;
            for (const i of this._def.checks)
                i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.too_small,
                    type: "bigint",
                    minimum: i.value,
                    inclusive: i.inclusive,
                    message: i.message
                }),
                r.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.too_big,
                    type: "bigint",
                    maximum: i.value,
                    inclusive: i.inclusive,
                    message: i.message
                }),
                r.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (s = this._getOrReturnCtx(t, s),
                Y(s, {
                    code: z.not_multiple_of,
                    multipleOf: i.value,
                    message: i.message
                }),
                r.dirty()) : $e.assertNever(i);
            return {
                status: r.value,
                value: t.data
            }
        }
        gte(t, n) {
            return this.setLimit("min", t, !0, ae.toString(n))
        }
        gt(t, n) {
            return this.setLimit("min", t, !1, ae.toString(n))
        }
        lte(t, n) {
            return this.setLimit("max", t, !0, ae.toString(n))
        }
        lt(t, n) {
            return this.setLimit("max", t, !1, ae.toString(n))
        }
        setLimit(t, n, s, r) {
            return new Gs({
                ...this._def,
                checks: [...this._def.checks, {
                    kind: t,
                    value: n,
                    inclusive: s,
                    message: ae.toString(r)
                }]
            })
        }
        _addCheck(t) {
            return new Gs({
                ...this._def,
                checks: [...this._def.checks, t]
            })
        }
        positive(t) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: !1,
                message: ae.toString(t)
            })
        }
        negative(t) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !1,
                message: ae.toString(t)
            })
        }
        nonpositive(t) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: !0,
                message: ae.toString(t)
            })
        }
        nonnegative(t) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: !0,
                message: ae.toString(t)
            })
        }
        multipleOf(t, n) {
            return this._addCheck({
                kind: "multipleOf",
                value: t,
                message: ae.toString(n)
            })
        }
        get minValue() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "min" && (t === null || n.value > t) && (t = n.value);
            return t
        }
        get maxValue() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "max" && (t === null || n.value < t) && (t = n.value);
            return t
        }
    }
    Gs.create = e=>{
        var t;
        return new Gs({
            checks: [],
            typeName: _e.ZodBigInt,
            coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
            ...Me(e)
        })
    }
    ;
    class xo extends Ee {
        _parse(t) {
            if (this._def.coerce && (t.data = !!t.data),
            this._getType(t) !== J.boolean) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.boolean,
                    received: s.parsedType
                }),
                ge
            }
            return $t(t.data)
        }
    }
    xo.create = e=>new xo({
        typeName: _e.ZodBoolean,
        coerce: (e == null ? void 0 : e.coerce) || !1,
        ...Me(e)
    });
    class Pr extends Ee {
        _parse(t) {
            if (this._def.coerce && (t.data = new Date(t.data)),
            this._getType(t) !== J.date) {
                const i = this._getOrReturnCtx(t);
                return Y(i, {
                    code: z.invalid_type,
                    expected: J.date,
                    received: i.parsedType
                }),
                ge
            }
            if (isNaN(t.data.getTime())) {
                const i = this._getOrReturnCtx(t);
                return Y(i, {
                    code: z.invalid_date
                }),
                ge
            }
            const s = new Et;
            let r;
            for (const i of this._def.checks)
                i.kind === "min" ? t.data.getTime() < i.value && (r = this._getOrReturnCtx(t, r),
                Y(r, {
                    code: z.too_small,
                    message: i.message,
                    inclusive: !0,
                    exact: !1,
                    minimum: i.value,
                    type: "date"
                }),
                s.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (r = this._getOrReturnCtx(t, r),
                Y(r, {
                    code: z.too_big,
                    message: i.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: i.value,
                    type: "date"
                }),
                s.dirty()) : $e.assertNever(i);
            return {
                status: s.value,
                value: new Date(t.data.getTime())
            }
        }
        _addCheck(t) {
            return new Pr({
                ...this._def,
                checks: [...this._def.checks, t]
            })
        }
        min(t, n) {
            return this._addCheck({
                kind: "min",
                value: t.getTime(),
                message: ae.toString(n)
            })
        }
        max(t, n) {
            return this._addCheck({
                kind: "max",
                value: t.getTime(),
                message: ae.toString(n)
            })
        }
        get minDate() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "min" && (t === null || n.value > t) && (t = n.value);
            return t != null ? new Date(t) : null
        }
        get maxDate() {
            let t = null;
            for (const n of this._def.checks)
                n.kind === "max" && (t === null || n.value < t) && (t = n.value);
            return t != null ? new Date(t) : null
        }
    }
    Pr.create = e=>new Pr({
        checks: [],
        coerce: (e == null ? void 0 : e.coerce) || !1,
        typeName: _e.ZodDate,
        ...Me(e)
    });
    class Ga extends Ee {
        _parse(t) {
            if (this._getType(t) !== J.symbol) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.symbol,
                    received: s.parsedType
                }),
                ge
            }
            return $t(t.data)
        }
    }
    Ga.create = e=>new Ga({
        typeName: _e.ZodSymbol,
        ...Me(e)
    });
    class Mo extends Ee {
        _parse(t) {
            if (this._getType(t) !== J.undefined) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.undefined,
                    received: s.parsedType
                }),
                ge
            }
            return $t(t.data)
        }
    }
    Mo.create = e=>new Mo({
        typeName: _e.ZodUndefined,
        ...Me(e)
    });
    class ko extends Ee {
        _parse(t) {
            if (this._getType(t) !== J.null) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.null,
                    received: s.parsedType
                }),
                ge
            }
            return $t(t.data)
        }
    }
    ko.create = e=>new ko({
        typeName: _e.ZodNull,
        ...Me(e)
    });
    class Ci extends Ee {
        constructor() {
            super(...arguments),
            this._any = !0
        }
        _parse(t) {
            return $t(t.data)
        }
    }
    Ci.create = e=>new Ci({
        typeName: _e.ZodAny,
        ...Me(e)
    });
    class kr extends Ee {
        constructor() {
            super(...arguments),
            this._unknown = !0
        }
        _parse(t) {
            return $t(t.data)
        }
    }
    kr.create = e=>new kr({
        typeName: _e.ZodUnknown,
        ...Me(e)
    });
    class cs extends Ee {
        _parse(t) {
            const n = this._getOrReturnCtx(t);
            return Y(n, {
                code: z.invalid_type,
                expected: J.never,
                received: n.parsedType
            }),
            ge
        }
    }
    cs.create = e=>new cs({
        typeName: _e.ZodNever,
        ...Me(e)
    });
    class Qa extends Ee {
        _parse(t) {
            if (this._getType(t) !== J.undefined) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.void,
                    received: s.parsedType
                }),
                ge
            }
            return $t(t.data)
        }
    }
    Qa.create = e=>new Qa({
        typeName: _e.ZodVoid,
        ...Me(e)
    });
    class vn extends Ee {
        _parse(t) {
            const {ctx: n, status: s} = this._processInputParams(t)
              , r = this._def;
            if (n.parsedType !== J.array)
                return Y(n, {
                    code: z.invalid_type,
                    expected: J.array,
                    received: n.parsedType
                }),
                ge;
            if (r.exactLength !== null) {
                const o = n.data.length > r.exactLength.value
                  , a = n.data.length < r.exactLength.value;
                (o || a) && (Y(n, {
                    code: o ? z.too_big : z.too_small,
                    minimum: a ? r.exactLength.value : void 0,
                    maximum: o ? r.exactLength.value : void 0,
                    type: "array",
                    inclusive: !0,
                    exact: !0,
                    message: r.exactLength.message
                }),
                s.dirty())
            }
            if (r.minLength !== null && n.data.length < r.minLength.value && (Y(n, {
                code: z.too_small,
                minimum: r.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.minLength.message
            }),
            s.dirty()),
            r.maxLength !== null && n.data.length > r.maxLength.value && (Y(n, {
                code: z.too_big,
                maximum: r.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.maxLength.message
            }),
            s.dirty()),
            n.common.async)
                return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new jn(n,o,n.path,a)))).then(o=>Et.mergeArray(s, o));
            const i = [...n.data].map((o,a)=>r.type._parseSync(new jn(n,o,n.path,a)));
            return Et.mergeArray(s, i)
        }
        get element() {
            return this._def.type
        }
        min(t, n) {
            return new vn({
                ...this._def,
                minLength: {
                    value: t,
                    message: ae.toString(n)
                }
            })
        }
        max(t, n) {
            return new vn({
                ...this._def,
                maxLength: {
                    value: t,
                    message: ae.toString(n)
                }
            })
        }
        length(t, n) {
            return new vn({
                ...this._def,
                exactLength: {
                    value: t,
                    message: ae.toString(n)
                }
            })
        }
        nonempty(t) {
            return this.min(1, t)
        }
    }
    vn.create = (e,t)=>new vn({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: _e.ZodArray,
        ...Me(t)
    });
    function Vr(e) {
        if (e instanceof rt) {
            const t = {};
            for (const n in e.shape) {
                const s = e.shape[n];
                t[n] = In.create(Vr(s))
            }
            return new rt({
                ...e._def,
                shape: ()=>t
            })
        } else
            return e instanceof vn ? new vn({
                ...e._def,
                type: Vr(e.element)
            }) : e instanceof In ? In.create(Vr(e.unwrap())) : e instanceof Js ? Js.create(Vr(e.unwrap())) : e instanceof Un ? Un.create(e.items.map(t=>Vr(t))) : e
    }
    class rt extends Ee {
        constructor() {
            super(...arguments),
            this._cached = null,
            this.nonstrict = this.passthrough,
            this.augment = this.extend
        }
        _getCached() {
            if (this._cached !== null)
                return this._cached;
            const t = this._def.shape()
              , n = $e.objectKeys(t);
            return this._cached = {
                shape: t,
                keys: n
            }
        }
        _parse(t) {
            if (this._getType(t) !== J.object) {
                const u = this._getOrReturnCtx(t);
                return Y(u, {
                    code: z.invalid_type,
                    expected: J.object,
                    received: u.parsedType
                }),
                ge
            }
            const {status: s, ctx: r} = this._processInputParams(t)
              , {shape: i, keys: o} = this._getCached()
              , a = [];
            if (!(this._def.catchall instanceof cs && this._def.unknownKeys === "strip"))
                for (const u in r.data)
                    o.includes(u) || a.push(u);
            const l = [];
            for (const u of o) {
                const c = i[u]
                  , f = r.data[u];
                l.push({
                    key: {
                        status: "valid",
                        value: u
                    },
                    value: c._parse(new jn(r,f,r.path,u)),
                    alwaysSet: u in r.data
                })
            }
            if (this._def.catchall instanceof cs) {
                const u = this._def.unknownKeys;
                if (u === "passthrough")
                    for (const c of a)
                        l.push({
                            key: {
                                status: "valid",
                                value: c
                            },
                            value: {
                                status: "valid",
                                value: r.data[c]
                            }
                        });
                else if (u === "strict")
                    a.length > 0 && (Y(r, {
                        code: z.unrecognized_keys,
                        keys: a
                    }),
                    s.dirty());
                else if (u !== "strip")
                    throw new Error("Internal ZodObject error: invalid unknownKeys value.")
            } else {
                const u = this._def.catchall;
                for (const c of a) {
                    const f = r.data[c];
                    l.push({
                        key: {
                            status: "valid",
                            value: c
                        },
                        value: u._parse(new jn(r,f,r.path,c)),
                        alwaysSet: c in r.data
                    })
                }
            }
            return r.common.async ? Promise.resolve().then(async()=>{
                const u = [];
                for (const c of l) {
                    const f = await c.key
                      , d = await c.value;
                    u.push({
                        key: f,
                        value: d,
                        alwaysSet: c.alwaysSet
                    })
                }
                return u
            }
            ).then(u=>Et.mergeObjectSync(s, u)) : Et.mergeObjectSync(s, l)
        }
        get shape() {
            return this._def.shape()
        }
        strict(t) {
            return ae.errToObj,
            new rt({
                ...this._def,
                unknownKeys: "strict",
                ...t !== void 0 ? {
                    errorMap: (n,s)=>{
                        var r, i, o, a;
                        const l = (o = (i = (r = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(r, n, s).message) !== null && o !== void 0 ? o : s.defaultError;
                        return n.code === "unrecognized_keys" ? {
                            message: (a = ae.errToObj(t).message) !== null && a !== void 0 ? a : l
                        } : {
                            message: l
                        }
                    }
                } : {}
            })
        }
        strip() {
            return new rt({
                ...this._def,
                unknownKeys: "strip"
            })
        }
        passthrough() {
            return new rt({
                ...this._def,
                unknownKeys: "passthrough"
            })
        }
        extend(t) {
            return new rt({
                ...this._def,
                shape: ()=>({
                    ...this._def.shape(),
                    ...t
                })
            })
        }
        merge(t) {
            return new rt({
                unknownKeys: t._def.unknownKeys,
                catchall: t._def.catchall,
                shape: ()=>({
                    ...this._def.shape(),
                    ...t._def.shape()
                }),
                typeName: _e.ZodObject
            })
        }
        setKey(t, n) {
            return this.augment({
                [t]: n
            })
        }
        catchall(t) {
            return new rt({
                ...this._def,
                catchall: t
            })
        }
        pick(t) {
            const n = {};
            return $e.objectKeys(t).forEach(s=>{
                t[s] && this.shape[s] && (n[s] = this.shape[s])
            }
            ),
            new rt({
                ...this._def,
                shape: ()=>n
            })
        }
        omit(t) {
            const n = {};
            return $e.objectKeys(this.shape).forEach(s=>{
                t[s] || (n[s] = this.shape[s])
            }
            ),
            new rt({
                ...this._def,
                shape: ()=>n
            })
        }
        deepPartial() {
            return Vr(this)
        }
        partial(t) {
            const n = {};
            return $e.objectKeys(this.shape).forEach(s=>{
                const r = this.shape[s];
                t && !t[s] ? n[s] = r : n[s] = r.optional()
            }
            ),
            new rt({
                ...this._def,
                shape: ()=>n
            })
        }
        required(t) {
            const n = {};
            return $e.objectKeys(this.shape).forEach(s=>{
                if (t && !t[s])
                    n[s] = this.shape[s];
                else {
                    let i = this.shape[s];
                    for (; i instanceof In; )
                        i = i._def.innerType;
                    n[s] = i
                }
            }
            ),
            new rt({
                ...this._def,
                shape: ()=>n
            })
        }
        keyof() {
            return U_($e.objectKeys(this.shape))
        }
    }
    rt.create = (e,t)=>new rt({
        shape: ()=>e,
        unknownKeys: "strip",
        catchall: cs.create(),
        typeName: _e.ZodObject,
        ...Me(t)
    });
    rt.strictCreate = (e,t)=>new rt({
        shape: ()=>e,
        unknownKeys: "strict",
        catchall: cs.create(),
        typeName: _e.ZodObject,
        ...Me(t)
    });
    rt.lazycreate = (e,t)=>new rt({
        shape: e,
        unknownKeys: "strip",
        catchall: cs.create(),
        typeName: _e.ZodObject,
        ...Me(t)
    });
    class So extends Ee {
        _parse(t) {
            const {ctx: n} = this._processInputParams(t)
              , s = this._def.options;
            function r(i) {
                for (const a of i)
                    if (a.result.status === "valid")
                        return a.result;
                for (const a of i)
                    if (a.result.status === "dirty")
                        return n.common.issues.push(...a.ctx.common.issues),
                        a.result;
                const o = i.map(a=>new Kt(a.ctx.common.issues));
                return Y(n, {
                    code: z.invalid_union,
                    unionErrors: o
                }),
                ge
            }
            if (n.common.async)
                return Promise.all(s.map(async i=>{
                    const o = {
                        ...n,
                        common: {
                            ...n.common,
                            issues: []
                        },
                        parent: null
                    };
                    return {
                        result: await i._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: o
                        }),
                        ctx: o
                    }
                }
                )).then(r);
            {
                let i;
                const o = [];
                for (const l of s) {
                    const u = {
                        ...n,
                        common: {
                            ...n.common,
                            issues: []
                        },
                        parent: null
                    }
                      , c = l._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: u
                    });
                    if (c.status === "valid")
                        return c;
                    c.status === "dirty" && !i && (i = {
                        result: c,
                        ctx: u
                    }),
                    u.common.issues.length && o.push(u.common.issues)
                }
                if (i)
                    return n.common.issues.push(...i.ctx.common.issues),
                    i.result;
                const a = o.map(l=>new Kt(l));
                return Y(n, {
                    code: z.invalid_union,
                    unionErrors: a
                }),
                ge
            }
        }
        get options() {
            return this._def.options
        }
    }
    So.create = (e,t)=>new So({
        options: e,
        typeName: _e.ZodUnion,
        ...Me(t)
    });
    const Qn = e=>e instanceof Co ? Qn(e.schema) : e instanceof wn ? Qn(e.innerType()) : e instanceof To ? [e.value] : e instanceof Qs ? e.options : e instanceof Ro ? $e.objectValues(e.enum) : e instanceof Po ? Qn(e._def.innerType) : e instanceof Mo ? [void 0] : e instanceof ko ? [null] : e instanceof In ? [void 0, ...Qn(e.unwrap())] : e instanceof Js ? [null, ...Qn(e.unwrap())] : e instanceof of || e instanceof $o ? Qn(e.unwrap()) : e instanceof Ao ? Qn(e._def.innerType) : [];
    class Al extends Ee {
        _parse(t) {
            const {ctx: n} = this._processInputParams(t);
            if (n.parsedType !== J.object)
                return Y(n, {
                    code: z.invalid_type,
                    expected: J.object,
                    received: n.parsedType
                }),
                ge;
            const s = this.discriminator
              , r = n.data[s]
              , i = this.optionsMap.get(r);
            return i ? n.common.async ? i._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            }) : i._parseSync({
                data: n.data,
                path: n.path,
                parent: n
            }) : (Y(n, {
                code: z.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [s]
            }),
            ge)
        }
        get discriminator() {
            return this._def.discriminator
        }
        get options() {
            return this._def.options
        }
        get optionsMap() {
            return this._def.optionsMap
        }
        static create(t, n, s) {
            const r = new Map;
            for (const i of n) {
                const o = Qn(i.shape[t]);
                if (!o.length)
                    throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
                for (const a of o) {
                    if (r.has(a))
                        throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
                    r.set(a, i)
                }
            }
            return new Al({
                typeName: _e.ZodDiscriminatedUnion,
                discriminator: t,
                options: n,
                optionsMap: r,
                ...Me(s)
            })
        }
    }
    function ou(e, t) {
        const n = Rs(e)
          , s = Rs(t);
        if (e === t)
            return {
                valid: !0,
                data: e
            };
        if (n === J.object && s === J.object) {
            const r = $e.objectKeys(t)
              , i = $e.objectKeys(e).filter(a=>r.indexOf(a) !== -1)
              , o = {
                ...e,
                ...t
            };
            for (const a of i) {
                const l = ou(e[a], t[a]);
                if (!l.valid)
                    return {
                        valid: !1
                    };
                o[a] = l.data
            }
            return {
                valid: !0,
                data: o
            }
        } else if (n === J.array && s === J.array) {
            if (e.length !== t.length)
                return {
                    valid: !1
                };
            const r = [];
            for (let i = 0; i < e.length; i++) {
                const o = e[i]
                  , a = t[i]
                  , l = ou(o, a);
                if (!l.valid)
                    return {
                        valid: !1
                    };
                r.push(l.data)
            }
            return {
                valid: !0,
                data: r
            }
        } else
            return n === J.date && s === J.date && +e == +t ? {
                valid: !0,
                data: e
            } : {
                valid: !1
            }
    }
    class Oo extends Ee {
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t)
              , r = (i,o)=>{
                if (ru(i) || ru(o))
                    return ge;
                const a = ou(i.value, o.value);
                return a.valid ? ((iu(i) || iu(o)) && n.dirty(),
                {
                    status: n.value,
                    value: a.data
                }) : (Y(s, {
                    code: z.invalid_intersection_types
                }),
                ge)
            }
            ;
            return s.common.async ? Promise.all([this._def.left._parseAsync({
                data: s.data,
                path: s.path,
                parent: s
            }), this._def.right._parseAsync({
                data: s.data,
                path: s.path,
                parent: s
            })]).then(([i,o])=>r(i, o)) : r(this._def.left._parseSync({
                data: s.data,
                path: s.path,
                parent: s
            }), this._def.right._parseSync({
                data: s.data,
                path: s.path,
                parent: s
            }))
        }
    }
    Oo.create = (e,t,n)=>new Oo({
        left: e,
        right: t,
        typeName: _e.ZodIntersection,
        ...Me(n)
    });
    class Un extends Ee {
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t);
            if (s.parsedType !== J.array)
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.array,
                    received: s.parsedType
                }),
                ge;
            if (s.data.length < this._def.items.length)
                return Y(s, {
                    code: z.too_small,
                    minimum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }),
                ge;
            !this._def.rest && s.data.length > this._def.items.length && (Y(s, {
                code: z.too_big,
                maximum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            n.dirty());
            const i = [...s.data].map((o,a)=>{
                const l = this._def.items[a] || this._def.rest;
                return l ? l._parse(new jn(s,o,s.path,a)) : null
            }
            ).filter(o=>!!o);
            return s.common.async ? Promise.all(i).then(o=>Et.mergeArray(n, o)) : Et.mergeArray(n, i)
        }
        get items() {
            return this._def.items
        }
        rest(t) {
            return new Un({
                ...this._def,
                rest: t
            })
        }
    }
    Un.create = (e,t)=>{
        if (!Array.isArray(e))
            throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new Un({
            items: e,
            typeName: _e.ZodTuple,
            rest: null,
            ...Me(t)
        })
    }
    ;
    class Eo extends Ee {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t);
            if (s.parsedType !== J.object)
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.object,
                    received: s.parsedType
                }),
                ge;
            const r = []
              , i = this._def.keyType
              , o = this._def.valueType;
            for (const a in s.data)
                r.push({
                    key: i._parse(new jn(s,a,s.path,a)),
                    value: o._parse(new jn(s,s.data[a],s.path,a)),
                    alwaysSet: a in s.data
                });
            return s.common.async ? Et.mergeObjectAsync(n, r) : Et.mergeObjectSync(n, r)
        }
        get element() {
            return this._def.valueType
        }
        static create(t, n, s) {
            return n instanceof Ee ? new Eo({
                keyType: t,
                valueType: n,
                typeName: _e.ZodRecord,
                ...Me(s)
            }) : new Eo({
                keyType: _n.create(),
                valueType: t,
                typeName: _e.ZodRecord,
                ...Me(n)
            })
        }
    }
    class Ja extends Ee {
        get keySchema() {
            return this._def.keyType
        }
        get valueSchema() {
            return this._def.valueType
        }
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t);
            if (s.parsedType !== J.map)
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.map,
                    received: s.parsedType
                }),
                ge;
            const r = this._def.keyType
              , i = this._def.valueType
              , o = [...s.data.entries()].map(([a,l],u)=>({
                key: r._parse(new jn(s,a,s.path,[u, "key"])),
                value: i._parse(new jn(s,l,s.path,[u, "value"]))
            }));
            if (s.common.async) {
                const a = new Map;
                return Promise.resolve().then(async()=>{
                    for (const l of o) {
                        const u = await l.key
                          , c = await l.value;
                        if (u.status === "aborted" || c.status === "aborted")
                            return ge;
                        (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                        a.set(u.value, c.value)
                    }
                    return {
                        status: n.value,
                        value: a
                    }
                }
                )
            } else {
                const a = new Map;
                for (const l of o) {
                    const u = l.key
                      , c = l.value;
                    if (u.status === "aborted" || c.status === "aborted")
                        return ge;
                    (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                    a.set(u.value, c.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
        }
    }
    Ja.create = (e,t,n)=>new Ja({
        valueType: t,
        keyType: e,
        typeName: _e.ZodMap,
        ...Me(n)
    });
    class Ar extends Ee {
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t);
            if (s.parsedType !== J.set)
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.set,
                    received: s.parsedType
                }),
                ge;
            const r = this._def;
            r.minSize !== null && s.data.size < r.minSize.value && (Y(s, {
                code: z.too_small,
                minimum: r.minSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: r.minSize.message
            }),
            n.dirty()),
            r.maxSize !== null && s.data.size > r.maxSize.value && (Y(s, {
                code: z.too_big,
                maximum: r.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message
            }),
            n.dirty());
            const i = this._def.valueType;
            function o(l) {
                const u = new Set;
                for (const c of l) {
                    if (c.status === "aborted")
                        return ge;
                    c.status === "dirty" && n.dirty(),
                    u.add(c.value)
                }
                return {
                    status: n.value,
                    value: u
                }
            }
            const a = [...s.data.values()].map((l,u)=>i._parse(new jn(s,l,s.path,u)));
            return s.common.async ? Promise.all(a).then(l=>o(l)) : o(a)
        }
        min(t, n) {
            return new Ar({
                ...this._def,
                minSize: {
                    value: t,
                    message: ae.toString(n)
                }
            })
        }
        max(t, n) {
            return new Ar({
                ...this._def,
                maxSize: {
                    value: t,
                    message: ae.toString(n)
                }
            })
        }
        size(t, n) {
            return this.min(t, n).max(t, n)
        }
        nonempty(t) {
            return this.min(1, t)
        }
    }
    Ar.create = (e,t)=>new Ar({
        valueType: e,
        minSize: null,
        maxSize: null,
        typeName: _e.ZodSet,
        ...Me(t)
    });
    class ti extends Ee {
        constructor() {
            super(...arguments),
            this.validate = this.implement
        }
        _parse(t) {
            const {ctx: n} = this._processInputParams(t);
            if (n.parsedType !== J.function)
                return Y(n, {
                    code: z.invalid_type,
                    expected: J.function,
                    received: n.parsedType
                }),
                ge;
            function s(a, l) {
                return Za({
                    data: a,
                    path: n.path,
                    errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ya(), Ei].filter(u=>!!u),
                    issueData: {
                        code: z.invalid_arguments,
                        argumentsError: l
                    }
                })
            }
            function r(a, l) {
                return Za({
                    data: a,
                    path: n.path,
                    errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ya(), Ei].filter(u=>!!u),
                    issueData: {
                        code: z.invalid_return_type,
                        returnTypeError: l
                    }
                })
            }
            const i = {
                errorMap: n.common.contextualErrorMap
            }
              , o = n.data;
            if (this._def.returns instanceof Ti) {
                const a = this;
                return $t(async function(...l) {
                    const u = new Kt([])
                      , c = await a._def.args.parseAsync(l, i).catch(h=>{
                        throw u.addIssue(s(l, h)),
                        u
                    }
                    )
                      , f = await Reflect.apply(o, this, c);
                    return await a._def.returns._def.type.parseAsync(f, i).catch(h=>{
                        throw u.addIssue(r(f, h)),
                        u
                    }
                    )
                })
            } else {
                const a = this;
                return $t(function(...l) {
                    const u = a._def.args.safeParse(l, i);
                    if (!u.success)
                        throw new Kt([s(l, u.error)]);
                    const c = Reflect.apply(o, this, u.data)
                      , f = a._def.returns.safeParse(c, i);
                    if (!f.success)
                        throw new Kt([r(c, f.error)]);
                    return f.data
                })
            }
        }
        parameters() {
            return this._def.args
        }
        returnType() {
            return this._def.returns
        }
        args(...t) {
            return new ti({
                ...this._def,
                args: Un.create(t).rest(kr.create())
            })
        }
        returns(t) {
            return new ti({
                ...this._def,
                returns: t
            })
        }
        implement(t) {
            return this.parse(t)
        }
        strictImplement(t) {
            return this.parse(t)
        }
        static create(t, n, s) {
            return new ti({
                args: t || Un.create([]).rest(kr.create()),
                returns: n || kr.create(),
                typeName: _e.ZodFunction,
                ...Me(s)
            })
        }
    }
    class Co extends Ee {
        get schema() {
            return this._def.getter()
        }
        _parse(t) {
            const {ctx: n} = this._processInputParams(t);
            return this._def.getter()._parse({
                data: n.data,
                path: n.path,
                parent: n
            })
        }
    }
    Co.create = (e,t)=>new Co({
        getter: e,
        typeName: _e.ZodLazy,
        ...Me(t)
    });
    class To extends Ee {
        _parse(t) {
            if (t.data !== this._def.value) {
                const n = this._getOrReturnCtx(t);
                return Y(n, {
                    received: n.data,
                    code: z.invalid_literal,
                    expected: this._def.value
                }),
                ge
            }
            return {
                status: "valid",
                value: t.data
            }
        }
        get value() {
            return this._def.value
        }
    }
    To.create = (e,t)=>new To({
        value: e,
        typeName: _e.ZodLiteral,
        ...Me(t)
    });
    function U_(e, t) {
        return new Qs({
            values: e,
            typeName: _e.ZodEnum,
            ...Me(t)
        })
    }
    class Qs extends Ee {
        constructor() {
            super(...arguments),
            Qi.set(this, void 0)
        }
        _parse(t) {
            if (typeof t.data != "string") {
                const n = this._getOrReturnCtx(t)
                  , s = this._def.values;
                return Y(n, {
                    expected: $e.joinValues(s),
                    received: n.parsedType,
                    code: z.invalid_type
                }),
                ge
            }
            if (Ka(this, Qi) || N_(this, Qi, new Set(this._def.values)),
            !Ka(this, Qi).has(t.data)) {
                const n = this._getOrReturnCtx(t)
                  , s = this._def.values;
                return Y(n, {
                    received: n.data,
                    code: z.invalid_enum_value,
                    options: s
                }),
                ge
            }
            return $t(t.data)
        }
        get options() {
            return this._def.values
        }
        get enum() {
            const t = {};
            for (const n of this._def.values)
                t[n] = n;
            return t
        }
        get Values() {
            const t = {};
            for (const n of this._def.values)
                t[n] = n;
            return t
        }
        get Enum() {
            const t = {};
            for (const n of this._def.values)
                t[n] = n;
            return t
        }
        extract(t, n=this._def) {
            return Qs.create(t, {
                ...this._def,
                ...n
            })
        }
        exclude(t, n=this._def) {
            return Qs.create(this.options.filter(s=>!t.includes(s)), {
                ...this._def,
                ...n
            })
        }
    }
    Qi = new WeakMap;
    Qs.create = U_;
    class Ro extends Ee {
        constructor() {
            super(...arguments),
            Ji.set(this, void 0)
        }
        _parse(t) {
            const n = $e.getValidEnumValues(this._def.values)
              , s = this._getOrReturnCtx(t);
            if (s.parsedType !== J.string && s.parsedType !== J.number) {
                const r = $e.objectValues(n);
                return Y(s, {
                    expected: $e.joinValues(r),
                    received: s.parsedType,
                    code: z.invalid_type
                }),
                ge
            }
            if (Ka(this, Ji) || N_(this, Ji, new Set($e.getValidEnumValues(this._def.values))),
            !Ka(this, Ji).has(t.data)) {
                const r = $e.objectValues(n);
                return Y(s, {
                    received: s.data,
                    code: z.invalid_enum_value,
                    options: r
                }),
                ge
            }
            return $t(t.data)
        }
        get enum() {
            return this._def.values
        }
    }
    Ji = new WeakMap;
    Ro.create = (e,t)=>new Ro({
        values: e,
        typeName: _e.ZodNativeEnum,
        ...Me(t)
    });
    class Ti extends Ee {
        unwrap() {
            return this._def.type
        }
        _parse(t) {
            const {ctx: n} = this._processInputParams(t);
            if (n.parsedType !== J.promise && n.common.async === !1)
                return Y(n, {
                    code: z.invalid_type,
                    expected: J.promise,
                    received: n.parsedType
                }),
                ge;
            const s = n.parsedType === J.promise ? n.data : Promise.resolve(n.data);
            return $t(s.then(r=>this._def.type.parseAsync(r, {
                path: n.path,
                errorMap: n.common.contextualErrorMap
            })))
        }
    }
    Ti.create = (e,t)=>new Ti({
        type: e,
        typeName: _e.ZodPromise,
        ...Me(t)
    });
    class wn extends Ee {
        innerType() {
            return this._def.schema
        }
        sourceType() {
            return this._def.schema._def.typeName === _e.ZodEffects ? this._def.schema.sourceType() : this._def.schema
        }
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t)
              , r = this._def.effect || null
              , i = {
                addIssue: o=>{
                    Y(s, o),
                    o.fatal ? n.abort() : n.dirty()
                }
                ,
                get path() {
                    return s.path
                }
            };
            if (i.addIssue = i.addIssue.bind(i),
            r.type === "preprocess") {
                const o = r.transform(s.data, i);
                if (s.common.async)
                    return Promise.resolve(o).then(async a=>{
                        if (n.value === "aborted")
                            return ge;
                        const l = await this._def.schema._parseAsync({
                            data: a,
                            path: s.path,
                            parent: s
                        });
                        return l.status === "aborted" ? ge : l.status === "dirty" || n.value === "dirty" ? Yr(l.value) : l
                    }
                    );
                {
                    if (n.value === "aborted")
                        return ge;
                    const a = this._def.schema._parseSync({
                        data: o,
                        path: s.path,
                        parent: s
                    });
                    return a.status === "aborted" ? ge : a.status === "dirty" || n.value === "dirty" ? Yr(a.value) : a
                }
            }
            if (r.type === "refinement") {
                const o = a=>{
                    const l = r.refinement(a, i);
                    if (s.common.async)
                        return Promise.resolve(l);
                    if (l instanceof Promise)
                        throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                    return a
                }
                ;
                if (s.common.async === !1) {
                    const a = this._def.schema._parseSync({
                        data: s.data,
                        path: s.path,
                        parent: s
                    });
                    return a.status === "aborted" ? ge : (a.status === "dirty" && n.dirty(),
                    o(a.value),
                    {
                        status: n.value,
                        value: a.value
                    })
                } else
                    return this._def.schema._parseAsync({
                        data: s.data,
                        path: s.path,
                        parent: s
                    }).then(a=>a.status === "aborted" ? ge : (a.status === "dirty" && n.dirty(),
                    o(a.value).then(()=>({
                        status: n.value,
                        value: a.value
                    }))))
            }
            if (r.type === "transform")
                if (s.common.async === !1) {
                    const o = this._def.schema._parseSync({
                        data: s.data,
                        path: s.path,
                        parent: s
                    });
                    if (!bo(o))
                        return o;
                    const a = r.transform(o.value, i);
                    if (a instanceof Promise)
                        throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                    return {
                        status: n.value,
                        value: a
                    }
                } else
                    return this._def.schema._parseAsync({
                        data: s.data,
                        path: s.path,
                        parent: s
                    }).then(o=>bo(o) ? Promise.resolve(r.transform(o.value, i)).then(a=>({
                        status: n.value,
                        value: a
                    })) : o);
            $e.assertNever(r)
        }
    }
    wn.create = (e,t,n)=>new wn({
        schema: e,
        typeName: _e.ZodEffects,
        effect: t,
        ...Me(n)
    });
    wn.createWithPreprocess = (e,t,n)=>new wn({
        schema: t,
        effect: {
            type: "preprocess",
            transform: e
        },
        typeName: _e.ZodEffects,
        ...Me(n)
    });
    class In extends Ee {
        _parse(t) {
            return this._getType(t) === J.undefined ? $t(void 0) : this._def.innerType._parse(t)
        }
        unwrap() {
            return this._def.innerType
        }
    }
    In.create = (e,t)=>new In({
        innerType: e,
        typeName: _e.ZodOptional,
        ...Me(t)
    });
    class Js extends Ee {
        _parse(t) {
            return this._getType(t) === J.null ? $t(null) : this._def.innerType._parse(t)
        }
        unwrap() {
            return this._def.innerType
        }
    }
    Js.create = (e,t)=>new Js({
        innerType: e,
        typeName: _e.ZodNullable,
        ...Me(t)
    });
    class Po extends Ee {
        _parse(t) {
            const {ctx: n} = this._processInputParams(t);
            let s = n.data;
            return n.parsedType === J.undefined && (s = this._def.defaultValue()),
            this._def.innerType._parse({
                data: s,
                path: n.path,
                parent: n
            })
        }
        removeDefault() {
            return this._def.innerType
        }
    }
    Po.create = (e,t)=>new Po({
        innerType: e,
        typeName: _e.ZodDefault,
        defaultValue: typeof t.default == "function" ? t.default : ()=>t.default,
        ...Me(t)
    });
    class Ao extends Ee {
        _parse(t) {
            const {ctx: n} = this._processInputParams(t)
              , s = {
                ...n,
                common: {
                    ...n.common,
                    issues: []
                }
            }
              , r = this._def.innerType._parse({
                data: s.data,
                path: s.path,
                parent: {
                    ...s
                }
            });
            return wo(r) ? r.then(i=>({
                status: "valid",
                value: i.status === "valid" ? i.value : this._def.catchValue({
                    get error() {
                        return new Kt(s.common.issues)
                    },
                    input: s.data
                })
            })) : {
                status: "valid",
                value: r.status === "valid" ? r.value : this._def.catchValue({
                    get error() {
                        return new Kt(s.common.issues)
                    },
                    input: s.data
                })
            }
        }
        removeCatch() {
            return this._def.innerType
        }
    }
    Ao.create = (e,t)=>new Ao({
        innerType: e,
        typeName: _e.ZodCatch,
        catchValue: typeof t.catch == "function" ? t.catch : ()=>t.catch,
        ...Me(t)
    });
    class Xa extends Ee {
        _parse(t) {
            if (this._getType(t) !== J.nan) {
                const s = this._getOrReturnCtx(t);
                return Y(s, {
                    code: z.invalid_type,
                    expected: J.nan,
                    received: s.parsedType
                }),
                ge
            }
            return {
                status: "valid",
                value: t.data
            }
        }
    }
    Xa.create = e=>new Xa({
        typeName: _e.ZodNaN,
        ...Me(e)
    });
    const rx = Symbol("zod_brand");
    class of extends Ee {
        _parse(t) {
            const {ctx: n} = this._processInputParams(t)
              , s = n.data;
            return this._def.type._parse({
                data: s,
                path: n.path,
                parent: n
            })
        }
        unwrap() {
            return this._def.type
        }
    }
    class Jo extends Ee {
        _parse(t) {
            const {status: n, ctx: s} = this._processInputParams(t);
            if (s.common.async)
                return (async()=>{
                    const i = await this._def.in._parseAsync({
                        data: s.data,
                        path: s.path,
                        parent: s
                    });
                    return i.status === "aborted" ? ge : i.status === "dirty" ? (n.dirty(),
                    Yr(i.value)) : this._def.out._parseAsync({
                        data: i.value,
                        path: s.path,
                        parent: s
                    })
                }
                )();
            {
                const r = this._def.in._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return r.status === "aborted" ? ge : r.status === "dirty" ? (n.dirty(),
                {
                    status: "dirty",
                    value: r.value
                }) : this._def.out._parseSync({
                    data: r.value,
                    path: s.path,
                    parent: s
                })
            }
        }
        static create(t, n) {
            return new Jo({
                in: t,
                out: n,
                typeName: _e.ZodPipeline
            })
        }
    }
    class $o extends Ee {
        _parse(t) {
            const n = this._def.innerType._parse(t)
              , s = r=>(bo(r) && (r.value = Object.freeze(r.value)),
            r);
            return wo(n) ? n.then(r=>s(r)) : s(n)
        }
        unwrap() {
            return this._def.innerType
        }
    }
    $o.create = (e,t)=>new $o({
        innerType: e,
        typeName: _e.ZodReadonly,
        ...Me(t)
    });
    function q_(e, t={}, n) {
        return e ? Ci.create().superRefine((s,r)=>{
            var i, o;
            if (!e(s)) {
                const a = typeof t == "function" ? t(s) : typeof t == "string" ? {
                    message: t
                } : t
                  , l = (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null && o !== void 0 ? o : !0
                  , u = typeof a == "string" ? {
                    message: a
                } : a;
                r.addIssue({
                    code: "custom",
                    ...u,
                    fatal: l
                })
            }
        }
        ) : Ci.create()
    }
    const ix = {
        object: rt.lazycreate
    };
    var _e;
    (function(e) {
        e.ZodString = "ZodString",
        e.ZodNumber = "ZodNumber",
        e.ZodNaN = "ZodNaN",
        e.ZodBigInt = "ZodBigInt",
        e.ZodBoolean = "ZodBoolean",
        e.ZodDate = "ZodDate",
        e.ZodSymbol = "ZodSymbol",
        e.ZodUndefined = "ZodUndefined",
        e.ZodNull = "ZodNull",
        e.ZodAny = "ZodAny",
        e.ZodUnknown = "ZodUnknown",
        e.ZodNever = "ZodNever",
        e.ZodVoid = "ZodVoid",
        e.ZodArray = "ZodArray",
        e.ZodObject = "ZodObject",
        e.ZodUnion = "ZodUnion",
        e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
        e.ZodIntersection = "ZodIntersection",
        e.ZodTuple = "ZodTuple",
        e.ZodRecord = "ZodRecord",
        e.ZodMap = "ZodMap",
        e.ZodSet = "ZodSet",
        e.ZodFunction = "ZodFunction",
        e.ZodLazy = "ZodLazy",
        e.ZodLiteral = "ZodLiteral",
        e.ZodEnum = "ZodEnum",
        e.ZodEffects = "ZodEffects",
        e.ZodNativeEnum = "ZodNativeEnum",
        e.ZodOptional = "ZodOptional",
        e.ZodNullable = "ZodNullable",
        e.ZodDefault = "ZodDefault",
        e.ZodCatch = "ZodCatch",
        e.ZodPromise = "ZodPromise",
        e.ZodBranded = "ZodBranded",
        e.ZodPipeline = "ZodPipeline",
        e.ZodReadonly = "ZodReadonly"
    }
    )(_e || (_e = {}));
    const ox = (e,t={
        message: `Input not instance of ${e.name}`
    })=>q_(n=>n instanceof e, t)
      , B_ = _n.create
      , V_ = Ks.create
      , ax = Xa.create
      , lx = Gs.create
      , H_ = xo.create
      , cx = Pr.create
      , ux = Ga.create
      , fx = Mo.create
      , dx = ko.create
      , hx = Ci.create
      , px = kr.create
      , mx = cs.create
      , _x = Qa.create
      , gx = vn.create
      , yx = rt.create
      , vx = rt.strictCreate
      , bx = So.create
      , wx = Al.create
      , xx = Oo.create
      , Mx = Un.create
      , kx = Eo.create
      , Sx = Ja.create
      , Ox = Ar.create
      , Ex = ti.create
      , Cx = Co.create
      , Tx = To.create
      , Rx = Qs.create
      , Px = Ro.create
      , Ax = Ti.create
      , xh = wn.create
      , $x = In.create
      , Dx = Js.create
      , Lx = wn.createWithPreprocess
      , zx = Jo.create
      , Nx = ()=>B_().optional()
      , Ix = ()=>V_().optional()
      , Fx = ()=>H_().optional()
      , jx = {
        string: e=>_n.create({
            ...e,
            coerce: !0
        }),
        number: e=>Ks.create({
            ...e,
            coerce: !0
        }),
        boolean: e=>xo.create({
            ...e,
            coerce: !0
        }),
        bigint: e=>Gs.create({
            ...e,
            coerce: !0
        }),
        date: e=>Pr.create({
            ...e,
            coerce: !0
        })
    }
      , Ux = ge;
    var b = Object.freeze({
        __proto__: null,
        defaultErrorMap: Ei,
        setErrorMap: U9,
        getErrorMap: Ya,
        makeIssue: Za,
        EMPTY_PATH: q9,
        addIssueToContext: Y,
        ParseStatus: Et,
        INVALID: ge,
        DIRTY: Yr,
        OK: $t,
        isAborted: ru,
        isDirty: iu,
        isValid: bo,
        isAsync: wo,
        get util() {
            return $e
        },
        get objectUtil() {
            return su
        },
        ZodParsedType: J,
        getParsedType: Rs,
        ZodType: Ee,
        datetimeRegex: j_,
        ZodString: _n,
        ZodNumber: Ks,
        ZodBigInt: Gs,
        ZodBoolean: xo,
        ZodDate: Pr,
        ZodSymbol: Ga,
        ZodUndefined: Mo,
        ZodNull: ko,
        ZodAny: Ci,
        ZodUnknown: kr,
        ZodNever: cs,
        ZodVoid: Qa,
        ZodArray: vn,
        ZodObject: rt,
        ZodUnion: So,
        ZodDiscriminatedUnion: Al,
        ZodIntersection: Oo,
        ZodTuple: Un,
        ZodRecord: Eo,
        ZodMap: Ja,
        ZodSet: Ar,
        ZodFunction: ti,
        ZodLazy: Co,
        ZodLiteral: To,
        ZodEnum: Qs,
        ZodNativeEnum: Ro,
        ZodPromise: Ti,
        ZodEffects: wn,
        ZodTransformer: wn,
        ZodOptional: In,
        ZodNullable: Js,
        ZodDefault: Po,
        ZodCatch: Ao,
        ZodNaN: Xa,
        BRAND: rx,
        ZodBranded: of,
        ZodPipeline: Jo,
        ZodReadonly: $o,
        custom: q_,
        Schema: Ee,
        ZodSchema: Ee,
        late: ix,
        get ZodFirstPartyTypeKind() {
            return _e
        },
        coerce: jx,
        any: hx,
        array: gx,
        bigint: lx,
        boolean: H_,
        date: cx,
        discriminatedUnion: wx,
        effect: xh,
        enum: Rx,
        function: Ex,
        instanceof: ox,
        intersection: xx,
        lazy: Cx,
        literal: Tx,
        map: Sx,
        nan: ax,
        nativeEnum: Px,
        never: mx,
        null: dx,
        nullable: Dx,
        number: V_,
        object: yx,
        oboolean: Fx,
        onumber: Ix,
        optional: $x,
        ostring: Nx,
        pipeline: zx,
        preprocess: Lx,
        promise: Ax,
        record: kx,
        set: Ox,
        strictObject: vx,
        string: B_,
        symbol: ux,
        transformer: xh,
        tuple: Mx,
        undefined: fx,
        union: bx,
        unknown: px,
        void: _x,
        NEVER: Ux,
        ZodIssueCode: z,
        quotelessJson: j9,
        ZodError: Kt
    });
    function qx(e, t) {
        let n = {
            ...e
        };
        for (let s of t)
            delete n[s];
        return n
    }
    var Bx = /:([a-zA-Z_][a-zA-Z0-9_]*)/g;
    function Vx(e) {
        let t = e.url
          , n = e.params;
        return n && (t = t.replace(Bx, (s,r)=>r in n ? `${n[r]}` : s)),
        t
    }
    function Mh(e, t, n) {
        return e.find(s=>s.method === t && s.path === n)
    }
    function Hx(e) {
        let t = new FormData;
        for (let n in e)
            t.append(n, e[n]);
        return {
            data: t
        }
    }
    var el = class extends Error {
        constructor(e, t, n, s) {
            super(e),
            this.config = t,
            this.data = n,
            this.cause = s
        }
    }
      , Wx = {
        name: "form-data",
        request: async(e,t)=>{
            if (typeof t.data != "object" || Array.isArray(t.data))
                throw new el("Zodios: multipart/form-data body must be an object",t);
            let n = Hx(t.data);
            return {
                ...t,
                data: n.data,
                headers: {
                    ...t.headers,
                    ...n.headers
                }
            }
        }
    };
    function Yx() {
        return Wx
    }
    var Zx = {
        name: "form-url",
        request: async(e,t)=>{
            if (typeof t.data != "object" || Array.isArray(t.data))
                throw new el("Zodios: application/x-www-form-urlencoded body must be an object",t);
            return {
                ...t,
                data: new URLSearchParams(t.data).toString(),
                headers: {
                    ...t.headers,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        }
    };
    function Kx() {
        return Zx
    }
    function kh(e, t) {
        return {
            request: async(n,s)=>({
                ...s,
                headers: {
                    ...s.headers,
                    [e]: t
                }
            })
        }
    }
    function Sh(e) {
        return [!0, "response", "all"].includes(e)
    }
    function Oh(e) {
        return [!0, "request", "all"].includes(e)
    }
    function Gx({validate: e, transform: t, sendDefaults: n}) {
        return {
            name: "zod-validation",
            request: Oh(e) ? async(s,r)=>{
                let i = Mh(s, r.method, r.url);
                if (!i)
                    throw new Error(`No endpoint found for ${r.method} ${r.url}`);
                let {parameters: o} = i;
                if (!o)
                    return r;
                let a = {
                    ...r,
                    queries: {
                        ...r.queries
                    },
                    headers: {
                        ...r.headers
                    },
                    params: {
                        ...r.params
                    }
                }
                  , l = {
                    Query: f=>{
                        var d;
                        return (d = a.queries) == null ? void 0 : d[f]
                    }
                    ,
                    Body: f=>a.data,
                    Header: f=>{
                        var d;
                        return (d = a.headers) == null ? void 0 : d[f]
                    }
                    ,
                    Path: f=>{
                        var d;
                        return (d = a.params) == null ? void 0 : d[f]
                    }
                }
                  , u = {
                    Query: (f,d)=>a.queries[f] = d,
                    Body: (f,d)=>a.data = d,
                    Header: (f,d)=>a.headers[f] = d,
                    Path: (f,d)=>a.params[f] = d
                }
                  , c = Oh(t);
                for (let f of o) {
                    let {name: d, schema: h, type: g} = f
                      , v = l[g](d);
                    if (n || v !== void 0) {
                        let C = await h.safeParseAsync(v);
                        if (!C.success)
                            throw new el(`Zodios: Invalid ${g} parameter '${d}'`,r,v,C.error);
                        c && u[g](d, C.data)
                    }
                }
                return a
            }
            : void 0,
            response: Sh(e) ? async(s,r,i)=>{
                var o, a, l, u;
                let c = Mh(s, r.method, r.url);
                if (!c)
                    throw new Error(`No endpoint found for ${r.method} ${r.url}`);
                if ((a = (o = i.headers) == null ? void 0 : o["content-type"]) != null && a.includes("application/json") || (u = (l = i.headers) == null ? void 0 : l["content-type"]) != null && u.includes("application/vnd.api+json")) {
                    let f = await c.response.safeParseAsync(i.data);
                    if (!f.success)
                        throw new el(`Zodios: Invalid response from endpoint '${c.method} ${c.path}'
status: ${i.status} ${i.statusText}
cause:
${f.error.message}
received:
${JSON.stringify(i.data, null, 2)}`,r,i.data,f.error);
                    Sh(t) && (i.data = f.data)
                }
                return i
            }
            : void 0
        }
    }
    var Eh = class {
        constructor(t, n) {
            this.plugins = [],
            this.key = `${t}-${n}`
        }
        indexOf(t) {
            return this.plugins.findIndex(n=>(n == null ? void 0 : n.name) === t)
        }
        use(t) {
            if (t.name) {
                let n = this.indexOf(t.name);
                if (n !== -1)
                    return this.plugins[n] = t,
                    {
                        key: this.key,
                        value: n
                    }
            }
            return this.plugins.push(t),
            {
                key: this.key,
                value: this.plugins.length - 1
            }
        }
        eject(t) {
            if (typeof t == "string") {
                let n = this.indexOf(t);
                if (n === -1)
                    throw new Error(`Plugin with name '${t}' not found`);
                this.plugins[n] = void 0
            } else {
                if (t.key !== this.key)
                    throw new Error(`Plugin with key '${t.key}' is not registered for endpoint '${this.key}'`);
                this.plugins[t.value] = void 0
            }
        }
        async interceptRequest(t, n) {
            let s = n;
            for (let r of this.plugins)
                r != null && r.request && (s = await r.request(t, s));
            return s
        }
        async interceptResponse(t, n, s) {
            let r = s;
            for (let i = this.plugins.length - 1; i >= 0; i--) {
                let o = this.plugins[i];
                o && (r = r.then(o != null && o.response ? a=>o.response(t, n, a) : void 0, o != null && o.error ? a=>o.error(t, n, a) : void 0))
            }
            return r
        }
        count() {
            return this.plugins.reduce((t,n)=>n ? t + 1 : t, 0)
        }
    }
    ;
    function W_(e) {
        let t = new Set;
        for (let s of e) {
            let r = `${s.method} ${s.path}`;
            if (t.has(r))
                throw new Error(`Zodios: Duplicate path '${r}'`);
            t.add(r)
        }
        let n = new Set;
        for (let s of e)
            if (s.alias) {
                if (n.has(s.alias))
                    throw new Error(`Zodios: Duplicate alias '${s.alias}'`);
                n.add(s.alias)
            }
        for (let s of e)
            if (s.parameters && s.parameters.filter(r=>r.type === "Body").length > 1)
                throw new Error(`Zodios: Multiple body parameters in endpoint '${s.path}'`)
    }
    function Y_(e) {
        return W_(e),
        e
    }
    var Qx = class {
        constructor(t, n, s) {
            this.endpointPlugins = new Map;
            let r;
            if (!t)
                throw Array.isArray(n) ? new Error("Zodios: missing base url") : new Error("Zodios: missing api description");
            let i;
            if (typeof t == "string" && Array.isArray(n))
                i = t,
                this.api = n,
                r = s || {};
            else if (Array.isArray(t) && !Array.isArray(n))
                this.api = t,
                r = n || {};
            else
                throw new Error("Zodios: api must be an array");
            W_(this.api),
            this.options = {
                validate: !0,
                transform: !0,
                sendDefaults: !1,
                ...r
            },
            this.options.axiosInstance ? this.axiosInstance = this.options.axiosInstance : this.axiosInstance = pt.create({
                ...this.options.axiosConfig
            }),
            i && (this.axiosInstance.defaults.baseURL = i),
            this.injectAliasEndpoints(),
            this.initPlugins(),
            [!0, "all", "request", "response"].includes(this.options.validate) && this.use(Gx(this.options))
        }
        initPlugins() {
            this.endpointPlugins.set("any-any", new Eh("any","any")),
            this.api.forEach(t=>{
                let n = new Eh(t.method,t.path);
                switch (t.requestFormat) {
                case "binary":
                    n.use(kh("Content-Type", "application/octet-stream"));
                    break;
                case "form-data":
                    n.use(Yx());
                    break;
                case "form-url":
                    n.use(Kx());
                    break;
                case "text":
                    n.use(kh("Content-Type", "text/plain"));
                    break
                }
                this.endpointPlugins.set(`${t.method}-${t.path}`, n)
            }
            )
        }
        getAnyEndpointPlugins() {
            return this.endpointPlugins.get("any-any")
        }
        findAliasEndpointPlugins(t) {
            let n = this.api.find(s=>s.alias === t);
            if (n)
                return this.endpointPlugins.get(`${n.method}-${n.path}`)
        }
        findEnpointPlugins(t, n) {
            return this.endpointPlugins.get(`${t}-${n}`)
        }
        get baseURL() {
            return this.axiosInstance.defaults.baseURL
        }
        get axios() {
            return this.axiosInstance
        }
        use(...t) {
            if (typeof t[0] == "object")
                return this.getAnyEndpointPlugins().use(t[0]);
            if (typeof t[0] == "string" && typeof t[1] == "object") {
                let n = this.findAliasEndpointPlugins(t[0]);
                if (!n)
                    throw new Error(`Zodios: no alias '${t[0]}' found to register plugin`);
                return n.use(t[1])
            } else if (typeof t[0] == "string" && typeof t[1] == "string" && typeof t[2] == "object") {
                let n = this.findEnpointPlugins(t[0], t[1]);
                if (!n)
                    throw new Error(`Zodios: no endpoint '${t[0]} ${t[1]}' found to register plugin`);
                return n.use(t[2])
            }
            throw new Error("Zodios: invalid plugin registration")
        }
        eject(t) {
            var n;
            if (typeof t == "string") {
                this.getAnyEndpointPlugins().eject(t);
                return
            }
            (n = this.endpointPlugins.get(t.key)) == null || n.eject(t)
        }
        injectAliasEndpoints() {
            this.api.forEach(t=>{
                t.alias && (["post", "put", "patch", "delete"].includes(t.method) ? this[t.alias] = (n,s)=>this.request({
                    ...s,
                    method: t.method,
                    url: t.path,
                    data: n
                }) : this[t.alias] = n=>this.request({
                    ...n,
                    method: t.method,
                    url: t.path
                }))
            }
            )
        }
        async request(t) {
            let n = t
              , s = this.getAnyEndpointPlugins()
              , r = this.findEnpointPlugins(n.method, n.url);
            n = await s.interceptRequest(this.api, n),
            r && (n = await r.interceptRequest(this.api, n));
            let i = this.axiosInstance.request({
                ...qx(n, ["params", "queries"]),
                url: Vx(n),
                params: n.queries
            });
            return r && (i = r.interceptResponse(this.api, n, i)),
            i = s.interceptResponse(this.api, n, i),
            (await i).data
        }
        async get(t, ...[n]) {
            return this.request({
                ...n,
                method: "get",
                url: t
            })
        }
        async post(t, n, ...[s]) {
            return this.request({
                ...s,
                method: "post",
                url: t,
                data: n
            })
        }
        async put(t, n, ...[s]) {
            return this.request({
                ...s,
                method: "put",
                url: t,
                data: n
            })
        }
        async patch(t, n, ...[s]) {
            return this.request({
                ...s,
                method: "patch",
                url: t,
                data: n
            })
        }
        async delete(t, n, ...[s]) {
            return this.request({
                ...s,
                method: "delete",
                url: t,
                data: n
            })
        }
    }
      , af = Qx;
    const Ch = b.object({
        max_energy: b.number().int(),
        must_reach_balance: b.number().int(),
        name: b.string(),
        points_per_tap: b.number().int()
    })
      , Jx = b.object({
        access_token: b.string(),
        access_token_expires_at: b.string(),
        auto_farmer: b.boolean(),
        auto_farmer_profit: b.number().int(),
        balance: b.number().int(),
        current_league: b.number().int(),
        daily_bonus_streak: b.number().int(),
        daily_booster_available_at: b.string(),
        earn_per_tap: b.number().int(),
        energy: b.number().int(),
        first_name: b.string(),
        id: b.number().int(),
        is_premium: b.boolean(),
        last_auto_farm_at: b.string(),
        last_mine_at: b.string(),
        latest_profit: b.number().int(),
        league: Ch,
        max_energy: b.number().int(),
        max_energy_level: b.number().int(),
        mine_level: b.number().int(),
        next_league: Ch,
        premium_expires_at: b.string().nullable(),
        profit_per_hour: b.number().int(),
        total_leagues: b.number().int()
    })
      , Xx = Y_([{
        method: "post",
        path: "/authorize",
        requestFormat: "json",
        parameters: [{
            name: "hash",
            type: "Body",
            schema: b.string()
        }],
        response: Jx
    }])
      , e2 = new af("https://backend.got.bondex.app",Xx)
      , Do = b.object({
        max_energy: b.number().int(),
        must_reach_balance: b.number().int(),
        name: b.string(),
        points_per_tap: b.number().int()
    })
      , Oa = b.object({
        access_token: b.string(),
        access_token_expires_at: b.string(),
        auto_farmer: b.boolean(),
        auto_farmer_profit: b.number().int(),
        balance: b.number().int(),
        current_league: b.number().int(),
        daily_bonus_streak: b.number().int(),
        daily_booster_available_at: b.string(),
        earn_per_tap: b.number().int(),
        energy: b.number().int(),
        first_name: b.string(),
        id: b.number().int(),
        is_premium: b.boolean(),
        last_auto_farm_at: b.string(),
        last_mine_at: b.string(),
        latest_profit: b.number().int(),
        league: Do,
        max_energy: b.number().int(),
        max_energy_level: b.number().int(),
        mine_level: b.number().int(),
        next_league: Do,
        premium_expires_at: b.string().nullable(),
        profit_per_hour: b.number().int(),
        total_leagues: b.number().int()
    })
      , t2 = b.object({
        "@type": b.string()
    });
    b.object({
        code: b.number().int(),
        details: b.array(t2),
        message: b.string()
    });
    const Z_ = b.object({
        auto_farmer_price: b.number().int(),
        current_energy_level: b.number().int(),
        current_max_energy: b.number().int(),
        current_mine_level: b.number().int(),
        energy_level_price: b.number().int(),
        max_energy_price: b.number().int(),
        mine_level_price: b.number().int()
    });
    b.object({
        boost: b.string()
    });
    const n2 = b.object({
        boosts: Z_,
        user: Oa
    })
      , K_ = b.object({
        category: b.string(),
        cur_level: b.number().int(),
        cur_total_farming: b.number().int(),
        description: b.string(),
        farming_upgrade: b.number().int(),
        id: b.number().int(),
        logo_s3_key: b.string(),
        name: b.string(),
        upgrade_cost: b.string()
    })
      , s2 = b.array(K_);
    b.object({
        id: b.number().int()
    });
    const r2 = b.object({
        balance: b.number().int(),
        cards: b.array(K_)
    });
    b.object({
        id: b.number().int()
    });
    const i2 = b.object({
        id: b.number().int(),
        invite_link: b.string(),
        is_available: b.boolean(),
        is_highlighted: b.boolean().optional(),
        quest_type: b.number().int(),
        reward: b.number().int(),
        title: b.string()
    })
      , Th = b.object({
        channels: b.array(i2).nullable()
    })
      , o2 = b.object({
        coin: b.number().int(),
        energy: b.number().int(),
        next_at: b.string()
    })
      , a2 = b.object({
        avatar: b.string().nullable(),
        identity: b.string(),
        reward: b.number().int()
    })
      , l2 = b.object({
        copy_link: b.string(),
        friend_link: b.string(),
        friends: b.array(a2).nullable(),
        friends_count: b.number().int()
    })
      , c2 = b.object({
        claimed: b.boolean(),
        current: b.boolean(),
        id: b.number().int(),
        reward: b.number().int()
    })
      , u2 = b.object({
        bonuses: b.array(c2),
        has_available: b.boolean()
    })
      , Rh = b.object({
        avatar_key: b.string().nullable(),
        first_name: b.string(),
        id: b.number().int(),
        league: b.number().int(),
        position: b.number().int(),
        score: b.number().int(),
        username: b.string()
    })
      , f2 = b.object({
        me: Rh,
        players: b.array(Rh).nullable()
    })
      , d2 = b.object({
        leagues: b.array(Do)
    });
    b.object({
        count: b.number().int()
    });
    const h2 = b.object({
        balance: b.number().int(),
        current_league: b.number().int(),
        league: Do,
        mined: b.number().int(),
        newEnergy: b.number().int(),
        next_league: Do
    })
      , G_ = Y_([{
        method: "post",
        path: "/authorize",
        requestFormat: "json",
        parameters: [{
            name: "hash",
            type: "Query",
            schema: b.string()
        }],
        response: Oa
    }, {
        method: "get",
        path: "/boosts",
        requestFormat: "json",
        parameters: [],
        response: Z_
    }, {
        method: "post",
        path: "/boosts",
        requestFormat: "json",
        parameters: [{
            name: "body",
            type: "Body",
            schema: b.object({
                boost: b.string()
            })
        }],
        response: n2
    }, {
        method: "get",
        path: "/cards",
        requestFormat: "json",
        parameters: [{
            name: "category",
            type: "Query",
            schema: b.string()
        }],
        response: s2
    }, {
        method: "post",
        path: "/cards",
        requestFormat: "json",
        parameters: [{
            name: "body",
            type: "Body",
            schema: b.object({
                id: b.number().int()
            })
        }],
        response: r2
    }, {
        method: "post",
        path: "/channel/reward",
        requestFormat: "json",
        parameters: [{
            name: "body",
            type: "Body",
            schema: b.object({
                id: b.number().int()
            })
        }],
        response: Th
    }, {
        method: "get",
        path: "/channels",
        requestFormat: "json",
        parameters: [],
        response: Th
    }, {
        method: "post",
        path: "/dailyBooster",
        requestFormat: "json",
        parameters: [],
        response: o2
    }, {
        method: "get",
        path: "/friends",
        requestFormat: "json",
        parameters: [{
            name: "limit",
            type: "Query",
            schema: b.number().int()
        }, {
            name: "offset",
            type: "Query",
            schema: b.number().int()
        }],
        response: l2
    }, {
        method: "get",
        path: "/getDailyBonuses",
        requestFormat: "json",
        parameters: [],
        response: u2
    }, {
        method: "get",
        path: "/getMe",
        requestFormat: "json",
        parameters: [],
        response: Oa
    }, {
        method: "get",
        path: "/leaderboard",
        requestFormat: "json",
        parameters: [{
            name: "level",
            type: "Query",
            schema: b.number().int()
        }, {
            name: "limit",
            type: "Query",
            schema: b.number().int()
        }, {
            name: "offset",
            type: "Query",
            schema: b.number().int()
        }],
        response: f2
    }, {
        method: "get",
        path: "/leagues",
        requestFormat: "json",
        response: d2
    }, {
        method: "get",
        path: "/media",
        requestFormat: "json",
        parameters: [{
            name: "key",
            type: "Query",
            schema: b.string()
        }],
        response: b.object({})
    }, {
        method: "post",
        path: "/mine",
        requestFormat: "json",
        parameters: [{
            name: "body",
            type: "Body",
            schema: b.object({
                count: b.number().int()
            })
        }],
        response: h2
    }, {
        method: "post",
        path: "/pickDailyBonus",
        requestFormat: "json",
        parameters: [],
        response: Oa
    }]);
    new af(G_);
    function p2(e, t) {
        return new af(e,G_,t)
    }
    const m2 = e=>({
        request: async(t,n)=>{
            const s = await e.getToken();
            return s && (n = {
                ...n,
                headers: {
                    ...n.headers,
                    "x-api-key": s
                }
            }),
            n
        }
    })
      , _2 = e=>({
        request: async(t,n)=>{
            if (!await e.getToken())
                throw new Error("No token provided");
            return n
        }
    })
      , {initData: ni} = Zu()
      , Dt = p2("https://backend.got.bondex.app");
    Dt.use(m2({
        getToken: async()=>{
            var e;
            return localStorage.getItem(`access_token_${(e = ni == null ? void 0 : ni.user) == null ? void 0 : e.id}`) ?? ""
        }
    }));
    Dt.use(_2({
        getToken: async()=>{
            var e;
            return localStorage.getItem(`access_token_${(e = ni == null ? void 0 : ni.user) == null ? void 0 : e.id}`) ?? ""
        }
    }));
    //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var Q_;
    function K() {
        return Q_.apply(null, arguments)
    }
    function g2(e) {
        Q_ = e
    }
    function xn(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }
    function Sr(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]"
    }
    function Ne(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function lf(e) {
        if (Object.getOwnPropertyNames)
            return Object.getOwnPropertyNames(e).length === 0;
        var t;
        for (t in e)
            if (Ne(e, t))
                return !1;
        return !0
    }
    function Nt(e) {
        return e === void 0
    }
    function us(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
    }
    function Xo(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }
    function J_(e, t) {
        var n = [], s, r = e.length;
        for (s = 0; s < r; ++s)
            n.push(t(e[s], s));
        return n
    }
    function js(e, t) {
        for (var n in t)
            Ne(t, n) && (e[n] = t[n]);
        return Ne(t, "toString") && (e.toString = t.toString),
        Ne(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function Vn(e, t, n, s) {
        return w4(e, t, n, s, !0).utc()
    }
    function y2() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }
    function ke(e) {
        return e._pf == null && (e._pf = y2()),
        e._pf
    }
    var au;
    Array.prototype.some ? au = Array.prototype.some : au = function(e) {
        var t = Object(this), n = t.length >>> 0, s;
        for (s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t))
                return !0;
        return !1
    }
    ;
    function cf(e) {
        var t = null
          , n = !1
          , s = e._d && !isNaN(e._d.getTime());
        if (s && (t = ke(e),
        n = au.call(t.parsedDateParts, function(r) {
            return r != null
        }),
        s = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n),
        e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)),
        Object.isFrozen == null || !Object.isFrozen(e))
            e._isValid = s;
        else
            return s;
        return e._isValid
    }
    function $l(e) {
        var t = Vn(NaN);
        return e != null ? js(ke(t), e) : ke(t).userInvalidated = !0,
        t
    }
    var Ph = K.momentProperties = []
      , fc = !1;
    function uf(e, t) {
        var n, s, r, i = Ph.length;
        if (Nt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        Nt(t._i) || (e._i = t._i),
        Nt(t._f) || (e._f = t._f),
        Nt(t._l) || (e._l = t._l),
        Nt(t._strict) || (e._strict = t._strict),
        Nt(t._tzm) || (e._tzm = t._tzm),
        Nt(t._isUTC) || (e._isUTC = t._isUTC),
        Nt(t._offset) || (e._offset = t._offset),
        Nt(t._pf) || (e._pf = ke(t)),
        Nt(t._locale) || (e._locale = t._locale),
        i > 0)
            for (n = 0; n < i; n++)
                s = Ph[n],
                r = t[s],
                Nt(r) || (e[s] = r);
        return e
    }
    function ea(e) {
        uf(this, e),
        this._d = new Date(e._d != null ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        fc === !1 && (fc = !0,
        K.updateOffset(this),
        fc = !1)
    }
    function Mn(e) {
        return e instanceof ea || e != null && e._isAMomentObject != null
    }
    function X_(e) {
        K.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
    }
    function an(e, t) {
        var n = !0;
        return js(function() {
            if (K.deprecationHandler != null && K.deprecationHandler(null, e),
            n) {
                var s = [], r, i, o, a = arguments.length;
                for (i = 0; i < a; i++) {
                    if (r = "",
                    typeof arguments[i] == "object") {
                        r += `
[` + i + "] ";
                        for (o in arguments[0])
                            Ne(arguments[0], o) && (r += o + ": " + arguments[0][o] + ", ");
                        r = r.slice(0, -2)
                    } else
                        r = arguments[i];
                    s.push(r)
                }
                X_(e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack),
                n = !1
            }
            return t.apply(this, arguments)
        }, t)
    }
    var Ah = {};
    function e4(e, t) {
        K.deprecationHandler != null && K.deprecationHandler(e, t),
        Ah[e] || (X_(t),
        Ah[e] = !0)
    }
    K.suppressDeprecationWarnings = !1;
    K.deprecationHandler = null;
    function Hn(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }
    function v2(e) {
        var t, n;
        for (n in e)
            Ne(e, n) && (t = e[n],
            Hn(t) ? this[n] = t : this["_" + n] = t);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function lu(e, t) {
        var n = js({}, e), s;
        for (s in t)
            Ne(t, s) && (Sr(e[s]) && Sr(t[s]) ? (n[s] = {},
            js(n[s], e[s]),
            js(n[s], t[s])) : t[s] != null ? n[s] = t[s] : delete n[s]);
        for (s in e)
            Ne(e, s) && !Ne(t, s) && Sr(e[s]) && (n[s] = js({}, n[s]));
        return n
    }
    function ff(e) {
        e != null && this.set(e)
    }
    var cu;
    Object.keys ? cu = Object.keys : cu = function(e) {
        var t, n = [];
        for (t in e)
            Ne(e, t) && n.push(t);
        return n
    }
    ;
    var b2 = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    function w2(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return Hn(s) ? s.call(t, n) : s
    }
    function qn(e, t, n) {
        var s = "" + Math.abs(e)
          , r = t - s.length
          , i = e >= 0;
        return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + s
    }
    var df = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , ma = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , dc = {}
      , si = {};
    function ce(e, t, n, s) {
        var r = s;
        typeof s == "string" && (r = function() {
            return this[s]()
        }
        ),
        e && (si[e] = r),
        t && (si[t[0]] = function() {
            return qn(r.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (si[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        }
        )
    }
    function x2(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function M2(e) {
        var t = e.match(df), n, s;
        for (n = 0,
        s = t.length; n < s; n++)
            si[t[n]] ? t[n] = si[t[n]] : t[n] = x2(t[n]);
        return function(r) {
            var i = "", o;
            for (o = 0; o < s; o++)
                i += Hn(t[o]) ? t[o].call(r, e) : t[o];
            return i
        }
    }
    function Ea(e, t) {
        return e.isValid() ? (t = t4(t, e.localeData()),
        dc[t] = dc[t] || M2(t),
        dc[t](e)) : e.localeData().invalidDate()
    }
    function t4(e, t) {
        var n = 5;
        function s(r) {
            return t.longDateFormat(r) || r
        }
        for (ma.lastIndex = 0; n >= 0 && ma.test(e); )
            e = e.replace(ma, s),
            ma.lastIndex = 0,
            n -= 1;
        return e
    }
    var k2 = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function S2(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(df).map(function(s) {
            return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s
        }).join(""),
        this._longDateFormat[e])
    }
    var O2 = "Invalid date";
    function E2() {
        return this._invalidDate
    }
    var C2 = "%d"
      , T2 = /\d{1,2}/;
    function R2(e) {
        return this._ordinal.replace("%d", e)
    }
    var P2 = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    function A2(e, t, n, s) {
        var r = this._relativeTime[n];
        return Hn(r) ? r(e, t, n, s) : r.replace(/%d/i, e)
    }
    function $2(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Hn(n) ? n(t) : n.replace(/%s/i, t)
    }
    var $h = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
    };
    function ln(e) {
        return typeof e == "string" ? $h[e] || $h[e.toLowerCase()] : void 0
    }
    function hf(e) {
        var t = {}, n, s;
        for (s in e)
            Ne(e, s) && (n = ln(s),
            n && (t[n] = e[s]));
        return t
    }
    var D2 = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    };
    function L2(e) {
        var t = [], n;
        for (n in e)
            Ne(e, n) && t.push({
                unit: n,
                priority: D2[n]
            });
        return t.sort(function(s, r) {
            return s.priority - r.priority
        }),
        t
    }
    var n4 = /\d/, Gt = /\d\d/, s4 = /\d{3}/, pf = /\d{4}/, Dl = /[+-]?\d{6}/, tt = /\d\d?/, r4 = /\d\d\d\d?/, i4 = /\d\d\d\d\d\d?/, Ll = /\d{1,3}/, mf = /\d{1,4}/, zl = /[+-]?\d{1,6}/, Ni = /\d+/, Nl = /[+-]?\d+/, z2 = /Z|[+-]\d\d:?\d\d/gi, Il = /Z|[+-]\d\d(?::?\d\d)?/gi, N2 = /[+-]?\d+(\.\d{1,3})?/, ta = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ii = /^[1-9]\d?/, _f = /^([1-9]\d|\d)/, tl;
    tl = {};
    function ee(e, t, n) {
        tl[e] = Hn(t) ? t : function(s, r) {
            return s && n ? n : t
        }
    }
    function I2(e, t) {
        return Ne(tl, e) ? tl[e](t._strict, t._locale) : new RegExp(F2(e))
    }
    function F2(e) {
        return rs(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, n, s, r, i) {
            return n || s || r || i
        }))
    }
    function rs(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function tn(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function Re(e) {
        var t = +e
          , n = 0;
        return t !== 0 && isFinite(t) && (n = tn(t)),
        n
    }
    var uu = {};
    function Ke(e, t) {
        var n, s = t, r;
        for (typeof e == "string" && (e = [e]),
        us(t) && (s = function(i, o) {
            o[t] = Re(i)
        }
        ),
        r = e.length,
        n = 0; n < r; n++)
            uu[e[n]] = s
    }
    function na(e, t) {
        Ke(e, function(n, s, r, i) {
            r._w = r._w || {},
            t(n, r._w, r, i)
        })
    }
    function j2(e, t, n) {
        t != null && Ne(uu, e) && uu[e](t, n._a, n, e)
    }
    function Fl(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    var Ot = 0
      , ts = 1
      , Ln = 2
      , _t = 3
      , gn = 4
      , ns = 5
      , fr = 6
      , U2 = 7
      , q2 = 8;
    ce("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? qn(e, 4) : "+" + e
    });
    ce(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    ce(0, ["YYYY", 4], 0, "year");
    ce(0, ["YYYYY", 5], 0, "year");
    ce(0, ["YYYYYY", 6, !0], 0, "year");
    ee("Y", Nl);
    ee("YY", tt, Gt);
    ee("YYYY", mf, pf);
    ee("YYYYY", zl, Dl);
    ee("YYYYYY", zl, Dl);
    Ke(["YYYYY", "YYYYYY"], Ot);
    Ke("YYYY", function(e, t) {
        t[Ot] = e.length === 2 ? K.parseTwoDigitYear(e) : Re(e)
    });
    Ke("YY", function(e, t) {
        t[Ot] = K.parseTwoDigitYear(e)
    });
    Ke("Y", function(e, t) {
        t[Ot] = parseInt(e, 10)
    });
    function ao(e) {
        return Fl(e) ? 366 : 365
    }
    K.parseTwoDigitYear = function(e) {
        return Re(e) + (Re(e) > 68 ? 1900 : 2e3)
    }
    ;
    var o4 = Fi("FullYear", !0);
    function B2() {
        return Fl(this.year())
    }
    function Fi(e, t) {
        return function(n) {
            return n != null ? (a4(this, e, n),
            K.updateOffset(this, t),
            this) : Lo(this, e)
        }
    }
    function Lo(e, t) {
        if (!e.isValid())
            return NaN;
        var n = e._d
          , s = e._isUTC;
        switch (t) {
        case "Milliseconds":
            return s ? n.getUTCMilliseconds() : n.getMilliseconds();
        case "Seconds":
            return s ? n.getUTCSeconds() : n.getSeconds();
        case "Minutes":
            return s ? n.getUTCMinutes() : n.getMinutes();
        case "Hours":
            return s ? n.getUTCHours() : n.getHours();
        case "Date":
            return s ? n.getUTCDate() : n.getDate();
        case "Day":
            return s ? n.getUTCDay() : n.getDay();
        case "Month":
            return s ? n.getUTCMonth() : n.getMonth();
        case "FullYear":
            return s ? n.getUTCFullYear() : n.getFullYear();
        default:
            return NaN
        }
    }
    function a4(e, t, n) {
        var s, r, i, o, a;
        if (!(!e.isValid() || isNaN(n))) {
            switch (s = e._d,
            r = e._isUTC,
            t) {
            case "Milliseconds":
                return void (r ? s.setUTCMilliseconds(n) : s.setMilliseconds(n));
            case "Seconds":
                return void (r ? s.setUTCSeconds(n) : s.setSeconds(n));
            case "Minutes":
                return void (r ? s.setUTCMinutes(n) : s.setMinutes(n));
            case "Hours":
                return void (r ? s.setUTCHours(n) : s.setHours(n));
            case "Date":
                return void (r ? s.setUTCDate(n) : s.setDate(n));
            case "FullYear":
                break;
            default:
                return
            }
            i = n,
            o = e.month(),
            a = e.date(),
            a = a === 29 && o === 1 && !Fl(i) ? 28 : a,
            r ? s.setUTCFullYear(i, o, a) : s.setFullYear(i, o, a)
        }
    }
    function V2(e) {
        return e = ln(e),
        Hn(this[e]) ? this[e]() : this
    }
    function H2(e, t) {
        if (typeof e == "object") {
            e = hf(e);
            var n = L2(e), s, r = n.length;
            for (s = 0; s < r; s++)
                this[n[s].unit](e[n[s].unit])
        } else if (e = ln(e),
        Hn(this[e]))
            return this[e](t);
        return this
    }
    function W2(e, t) {
        return (e % t + t) % t
    }
    var at;
    Array.prototype.indexOf ? at = Array.prototype.indexOf : at = function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ;
    function gf(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = W2(t, 12);
        return e += (t - n) / 12,
        n === 1 ? Fl(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    ce("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    ce("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    });
    ce("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    });
    ee("M", tt, Ii);
    ee("MM", tt, Gt);
    ee("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    });
    ee("MMMM", function(e, t) {
        return t.monthsRegex(e)
    });
    Ke(["M", "MM"], function(e, t) {
        t[ts] = Re(e) - 1
    });
    Ke(["MMM", "MMMM"], function(e, t, n, s) {
        var r = n._locale.monthsParse(e, s, n._strict);
        r != null ? t[ts] = r : ke(n).invalidMonth = e
    });
    var Y2 = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , l4 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , c4 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , Z2 = ta
      , K2 = ta;
    function G2(e, t) {
        return e ? xn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || c4).test(t) ? "format" : "standalone"][e.month()] : xn(this._months) ? this._months : this._months.standalone
    }
    function Q2(e, t) {
        return e ? xn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[c4.test(t) ? "format" : "standalone"][e.month()] : xn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    function J2(e, t, n) {
        var s, r, i, o = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            s = 0; s < 12; ++s)
                i = Vn([2e3, s]),
                this._shortMonthsParse[s] = this.monthsShort(i, "").toLocaleLowerCase(),
                this._longMonthsParse[s] = this.months(i, "").toLocaleLowerCase();
        return n ? t === "MMM" ? (r = at.call(this._shortMonthsParse, o),
        r !== -1 ? r : null) : (r = at.call(this._longMonthsParse, o),
        r !== -1 ? r : null) : t === "MMM" ? (r = at.call(this._shortMonthsParse, o),
        r !== -1 ? r : (r = at.call(this._longMonthsParse, o),
        r !== -1 ? r : null)) : (r = at.call(this._longMonthsParse, o),
        r !== -1 ? r : (r = at.call(this._shortMonthsParse, o),
        r !== -1 ? r : null))
    }
    function X2(e, t, n) {
        var s, r, i;
        if (this._monthsParseExact)
            return J2.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        s = 0; s < 12; s++) {
            if (r = Vn([2e3, s]),
            n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
            !n && !this._monthsParse[s] && (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
            this._monthsParse[s] = new RegExp(i.replace(".", ""),"i")),
            n && t === "MMMM" && this._longMonthsParse[s].test(e))
                return s;
            if (n && t === "MMM" && this._shortMonthsParse[s].test(e))
                return s;
            if (!n && this._monthsParse[s].test(e))
                return s
        }
    }
    function u4(e, t) {
        if (!e.isValid())
            return e;
        if (typeof t == "string") {
            if (/^\d+$/.test(t))
                t = Re(t);
            else if (t = e.localeData().monthsParse(t),
            !us(t))
                return e
        }
        var n = t
          , s = e.date();
        return s = s < 29 ? s : Math.min(s, gf(e.year(), n)),
        e._isUTC ? e._d.setUTCMonth(n, s) : e._d.setMonth(n, s),
        e
    }
    function f4(e) {
        return e != null ? (u4(this, e),
        K.updateOffset(this, !0),
        this) : Lo(this, "Month")
    }
    function eM() {
        return gf(this.year(), this.month())
    }
    function tM(e) {
        return this._monthsParseExact ? (Ne(this, "_monthsRegex") || d4.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ne(this, "_monthsShortRegex") || (this._monthsShortRegex = Z2),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function nM(e) {
        return this._monthsParseExact ? (Ne(this, "_monthsRegex") || d4.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (Ne(this, "_monthsRegex") || (this._monthsRegex = K2),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    function d4() {
        function e(l, u) {
            return u.length - l.length
        }
        var t = [], n = [], s = [], r, i, o, a;
        for (r = 0; r < 12; r++)
            i = Vn([2e3, r]),
            o = rs(this.monthsShort(i, "")),
            a = rs(this.months(i, "")),
            t.push(o),
            n.push(a),
            s.push(a),
            s.push(o);
        t.sort(e),
        n.sort(e),
        s.sort(e),
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
    }
    function sM(e, t, n, s, r, i, o) {
        var a;
        return e < 100 && e >= 0 ? (a = new Date(e + 400,t,n,s,r,i,o),
        isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e,t,n,s,r,i,o),
        a
    }
    function zo(e) {
        var t, n;
        return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments),
        n[0] = e + 400,
        t = new Date(Date.UTC.apply(null, n)),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
        t
    }
    function nl(e, t, n) {
        var s = 7 + t - n
          , r = (7 + zo(e, 0, s).getUTCDay() - t) % 7;
        return -r + s - 1
    }
    function h4(e, t, n, s, r) {
        var i = (7 + n - s) % 7, o = nl(e, s, r), a = 1 + 7 * (t - 1) + i + o, l, u;
        return a <= 0 ? (l = e - 1,
        u = ao(l) + a) : a > ao(e) ? (l = e + 1,
        u = a - ao(e)) : (l = e,
        u = a),
        {
            year: l,
            dayOfYear: u
        }
    }
    function No(e, t, n) {
        var s = nl(e.year(), t, n), r = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, i, o;
        return r < 1 ? (o = e.year() - 1,
        i = r + is(o, t, n)) : r > is(e.year(), t, n) ? (i = r - is(e.year(), t, n),
        o = e.year() + 1) : (o = e.year(),
        i = r),
        {
            week: i,
            year: o
        }
    }
    function is(e, t, n) {
        var s = nl(e, t, n)
          , r = nl(e + 1, t, n);
        return (ao(e) - s + r) / 7
    }
    ce("w", ["ww", 2], "wo", "week");
    ce("W", ["WW", 2], "Wo", "isoWeek");
    ee("w", tt, Ii);
    ee("ww", tt, Gt);
    ee("W", tt, Ii);
    ee("WW", tt, Gt);
    na(["w", "ww", "W", "WW"], function(e, t, n, s) {
        t[s.substr(0, 1)] = Re(e)
    });
    function rM(e) {
        return No(e, this._week.dow, this._week.doy).week
    }
    var iM = {
        dow: 0,
        doy: 6
    };
    function oM() {
        return this._week.dow
    }
    function aM() {
        return this._week.doy
    }
    function lM(e) {
        var t = this.localeData().week(this);
        return e == null ? t : this.add((e - t) * 7, "d")
    }
    function cM(e) {
        var t = No(this, 1, 4).week;
        return e == null ? t : this.add((e - t) * 7, "d")
    }
    ce("d", 0, "do", "day");
    ce("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    });
    ce("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    });
    ce("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    });
    ce("e", 0, 0, "weekday");
    ce("E", 0, 0, "isoWeekday");
    ee("d", tt);
    ee("e", tt);
    ee("E", tt);
    ee("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    });
    ee("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    });
    ee("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    });
    na(["dd", "ddd", "dddd"], function(e, t, n, s) {
        var r = n._locale.weekdaysParse(e, s, n._strict);
        r != null ? t.d = r : ke(n).invalidWeekday = e
    });
    na(["d", "e", "E"], function(e, t, n, s) {
        t[s] = Re(e)
    });
    function uM(e, t) {
        return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e),
        typeof e == "number" ? e : null) : parseInt(e, 10)
    }
    function fM(e, t) {
        return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }
    function yf(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    var dM = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , p4 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , hM = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , pM = ta
      , mM = ta
      , _M = ta;
    function gM(e, t) {
        var n = xn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return e === !0 ? yf(n, this._week.dow) : e ? n[e.day()] : n
    }
    function yM(e) {
        return e === !0 ? yf(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function vM(e) {
        return e === !0 ? yf(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function bM(e, t, n) {
        var s, r, i, o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            s = 0; s < 7; ++s)
                i = Vn([2e3, 1]).day(s),
                this._minWeekdaysParse[s] = this.weekdaysMin(i, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[s] = this.weekdaysShort(i, "").toLocaleLowerCase(),
                this._weekdaysParse[s] = this.weekdays(i, "").toLocaleLowerCase();
        return n ? t === "dddd" ? (r = at.call(this._weekdaysParse, o),
        r !== -1 ? r : null) : t === "ddd" ? (r = at.call(this._shortWeekdaysParse, o),
        r !== -1 ? r : null) : (r = at.call(this._minWeekdaysParse, o),
        r !== -1 ? r : null) : t === "dddd" ? (r = at.call(this._weekdaysParse, o),
        r !== -1 || (r = at.call(this._shortWeekdaysParse, o),
        r !== -1) ? r : (r = at.call(this._minWeekdaysParse, o),
        r !== -1 ? r : null)) : t === "ddd" ? (r = at.call(this._shortWeekdaysParse, o),
        r !== -1 || (r = at.call(this._weekdaysParse, o),
        r !== -1) ? r : (r = at.call(this._minWeekdaysParse, o),
        r !== -1 ? r : null)) : (r = at.call(this._minWeekdaysParse, o),
        r !== -1 || (r = at.call(this._weekdaysParse, o),
        r !== -1) ? r : (r = at.call(this._shortWeekdaysParse, o),
        r !== -1 ? r : null))
    }
    function wM(e, t, n) {
        var s, r, i;
        if (this._weekdaysParseExact)
            return bM.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        s = 0; s < 7; s++) {
            if (r = Vn([2e3, 1]).day(s),
            n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[s] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
            this._weekdaysParse[s] = new RegExp(i.replace(".", ""),"i")),
            n && t === "dddd" && this._fullWeekdaysParse[s].test(e))
                return s;
            if (n && t === "ddd" && this._shortWeekdaysParse[s].test(e))
                return s;
            if (n && t === "dd" && this._minWeekdaysParse[s].test(e))
                return s;
            if (!n && this._weekdaysParse[s].test(e))
                return s
        }
    }
    function xM(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var t = Lo(this, "Day");
        return e != null ? (e = uM(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    function MM(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? t : this.add(e - t, "d")
    }
    function kM(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            var t = fM(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        } else
            return this.day() || 7
    }
    function SM(e) {
        return this._weekdaysParseExact ? (Ne(this, "_weekdaysRegex") || vf.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ne(this, "_weekdaysRegex") || (this._weekdaysRegex = pM),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function OM(e) {
        return this._weekdaysParseExact ? (Ne(this, "_weekdaysRegex") || vf.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ne(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = mM),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function EM(e) {
        return this._weekdaysParseExact ? (Ne(this, "_weekdaysRegex") || vf.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ne(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = _M),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function vf() {
        function e(c, f) {
            return f.length - c.length
        }
        var t = [], n = [], s = [], r = [], i, o, a, l, u;
        for (i = 0; i < 7; i++)
            o = Vn([2e3, 1]).day(i),
            a = rs(this.weekdaysMin(o, "")),
            l = rs(this.weekdaysShort(o, "")),
            u = rs(this.weekdays(o, "")),
            t.push(a),
            n.push(l),
            s.push(u),
            r.push(a),
            r.push(l),
            r.push(u);
        t.sort(e),
        n.sort(e),
        s.sort(e),
        r.sort(e),
        this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
    }
    function bf() {
        return this.hours() % 12 || 12
    }
    function CM() {
        return this.hours() || 24
    }
    ce("H", ["HH", 2], 0, "hour");
    ce("h", ["hh", 2], 0, bf);
    ce("k", ["kk", 2], 0, CM);
    ce("hmm", 0, 0, function() {
        return "" + bf.apply(this) + qn(this.minutes(), 2)
    });
    ce("hmmss", 0, 0, function() {
        return "" + bf.apply(this) + qn(this.minutes(), 2) + qn(this.seconds(), 2)
    });
    ce("Hmm", 0, 0, function() {
        return "" + this.hours() + qn(this.minutes(), 2)
    });
    ce("Hmmss", 0, 0, function() {
        return "" + this.hours() + qn(this.minutes(), 2) + qn(this.seconds(), 2)
    });
    function m4(e, t) {
        ce(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    m4("a", !0);
    m4("A", !1);
    function _4(e, t) {
        return t._meridiemParse
    }
    ee("a", _4);
    ee("A", _4);
    ee("H", tt, _f);
    ee("h", tt, Ii);
    ee("k", tt, Ii);
    ee("HH", tt, Gt);
    ee("hh", tt, Gt);
    ee("kk", tt, Gt);
    ee("hmm", r4);
    ee("hmmss", i4);
    ee("Hmm", r4);
    ee("Hmmss", i4);
    Ke(["H", "HH"], _t);
    Ke(["k", "kk"], function(e, t, n) {
        var s = Re(e);
        t[_t] = s === 24 ? 0 : s
    });
    Ke(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    });
    Ke(["h", "hh"], function(e, t, n) {
        t[_t] = Re(e),
        ke(n).bigHour = !0
    });
    Ke("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[_t] = Re(e.substr(0, s)),
        t[gn] = Re(e.substr(s)),
        ke(n).bigHour = !0
    });
    Ke("hmmss", function(e, t, n) {
        var s = e.length - 4
          , r = e.length - 2;
        t[_t] = Re(e.substr(0, s)),
        t[gn] = Re(e.substr(s, 2)),
        t[ns] = Re(e.substr(r)),
        ke(n).bigHour = !0
    });
    Ke("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[_t] = Re(e.substr(0, s)),
        t[gn] = Re(e.substr(s))
    });
    Ke("Hmmss", function(e, t, n) {
        var s = e.length - 4
          , r = e.length - 2;
        t[_t] = Re(e.substr(0, s)),
        t[gn] = Re(e.substr(s, 2)),
        t[ns] = Re(e.substr(r))
    });
    function TM(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }
    var RM = /[ap]\.?m?\.?/i
      , PM = Fi("Hours", !0);
    function AM(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    var g4 = {
        calendar: b2,
        longDateFormat: k2,
        invalidDate: O2,
        ordinal: C2,
        dayOfMonthOrdinalParse: T2,
        relativeTime: P2,
        months: Y2,
        monthsShort: l4,
        week: iM,
        weekdays: dM,
        weekdaysMin: hM,
        weekdaysShort: p4,
        meridiemParse: RM
    }, nt = {}, Yi = {}, Io;
    function $M(e, t) {
        var n, s = Math.min(e.length, t.length);
        for (n = 0; n < s; n += 1)
            if (e[n] !== t[n])
                return n;
        return s
    }
    function Dh(e) {
        return e && e.toLowerCase().replace("_", "-")
    }
    function DM(e) {
        for (var t = 0, n, s, r, i; t < e.length; ) {
            for (i = Dh(e[t]).split("-"),
            n = i.length,
            s = Dh(e[t + 1]),
            s = s ? s.split("-") : null; n > 0; ) {
                if (r = jl(i.slice(0, n).join("-")),
                r)
                    return r;
                if (s && s.length >= n && $M(i, s) >= n - 1)
                    break;
                n--
            }
            t++
        }
        return Io
    }
    function LM(e) {
        return !!(e && e.match("^[^/\\\\]*$"))
    }
    function jl(e) {
        var t = null, n;
        if (nt[e] === void 0 && typeof Ra < "u" && Ra && Ra.exports && LM(e))
            try {
                t = Io._abbr,
                n = require,
                n("./locale/" + e),
                Ws(t)
            } catch {
                nt[e] = null
            }
        return nt[e]
    }
    function Ws(e, t) {
        var n;
        return e && (Nt(t) ? n = ms(e) : n = wf(e, t),
        n ? Io = n : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        Io._abbr
    }
    function wf(e, t) {
        if (t !== null) {
            var n, s = g4;
            if (t.abbr = e,
            nt[e] != null)
                e4("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                s = nt[e]._config;
            else if (t.parentLocale != null)
                if (nt[t.parentLocale] != null)
                    s = nt[t.parentLocale]._config;
                else if (n = jl(t.parentLocale),
                n != null)
                    s = n._config;
                else
                    return Yi[t.parentLocale] || (Yi[t.parentLocale] = []),
                    Yi[t.parentLocale].push({
                        name: e,
                        config: t
                    }),
                    null;
            return nt[e] = new ff(lu(s, t)),
            Yi[e] && Yi[e].forEach(function(r) {
                wf(r.name, r.config)
            }),
            Ws(e),
            nt[e]
        } else
            return delete nt[e],
            null
    }
    function zM(e, t) {
        if (t != null) {
            var n, s, r = g4;
            nt[e] != null && nt[e].parentLocale != null ? nt[e].set(lu(nt[e]._config, t)) : (s = jl(e),
            s != null && (r = s._config),
            t = lu(r, t),
            s == null && (t.abbr = e),
            n = new ff(t),
            n.parentLocale = nt[e],
            nt[e] = n),
            Ws(e)
        } else
            nt[e] != null && (nt[e].parentLocale != null ? (nt[e] = nt[e].parentLocale,
            e === Ws() && Ws(e)) : nt[e] != null && delete nt[e]);
        return nt[e]
    }
    function ms(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Io;
        if (!xn(e)) {
            if (t = jl(e),
            t)
                return t;
            e = [e]
        }
        return DM(e)
    }
    function NM() {
        return cu(nt)
    }
    function xf(e) {
        var t, n = e._a;
        return n && ke(e).overflow === -2 && (t = n[ts] < 0 || n[ts] > 11 ? ts : n[Ln] < 1 || n[Ln] > gf(n[Ot], n[ts]) ? Ln : n[_t] < 0 || n[_t] > 24 || n[_t] === 24 && (n[gn] !== 0 || n[ns] !== 0 || n[fr] !== 0) ? _t : n[gn] < 0 || n[gn] > 59 ? gn : n[ns] < 0 || n[ns] > 59 ? ns : n[fr] < 0 || n[fr] > 999 ? fr : -1,
        ke(e)._overflowDayOfYear && (t < Ot || t > Ln) && (t = Ln),
        ke(e)._overflowWeeks && t === -1 && (t = U2),
        ke(e)._overflowWeekday && t === -1 && (t = q2),
        ke(e).overflow = t),
        e
    }
    var IM = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , FM = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , jM = /Z|[+-]\d\d(?::?\d\d)?/
      , _a = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
      , hc = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , UM = /^\/?Date\((-?\d+)/i
      , qM = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
      , BM = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    function y4(e) {
        var t, n, s = e._i, r = IM.exec(s) || FM.exec(s), i, o, a, l, u = _a.length, c = hc.length;
        if (r) {
            for (ke(e).iso = !0,
            t = 0,
            n = u; t < n; t++)
                if (_a[t][1].exec(r[1])) {
                    o = _a[t][0],
                    i = _a[t][2] !== !1;
                    break
                }
            if (o == null) {
                e._isValid = !1;
                return
            }
            if (r[3]) {
                for (t = 0,
                n = c; t < n; t++)
                    if (hc[t][1].exec(r[3])) {
                        a = (r[2] || " ") + hc[t][0];
                        break
                    }
                if (a == null) {
                    e._isValid = !1;
                    return
                }
            }
            if (!i && a != null) {
                e._isValid = !1;
                return
            }
            if (r[4])
                if (jM.exec(r[4]))
                    l = "Z";
                else {
                    e._isValid = !1;
                    return
                }
            e._f = o + (a || "") + (l || ""),
            kf(e)
        } else
            e._isValid = !1
    }
    function VM(e, t, n, s, r, i) {
        var o = [HM(e), l4.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(r, 10)];
        return i && o.push(parseInt(i, 10)),
        o
    }
    function HM(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }
    function WM(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function YM(e, t, n) {
        if (e) {
            var s = p4.indexOf(e)
              , r = new Date(t[0],t[1],t[2]).getDay();
            if (s !== r)
                return ke(n).weekdayMismatch = !0,
                n._isValid = !1,
                !1
        }
        return !0
    }
    function ZM(e, t, n) {
        if (e)
            return BM[e];
        if (t)
            return 0;
        var s = parseInt(n, 10)
          , r = s % 100
          , i = (s - r) / 100;
        return i * 60 + r
    }
    function v4(e) {
        var t = qM.exec(WM(e._i)), n;
        if (t) {
            if (n = VM(t[4], t[3], t[2], t[5], t[6], t[7]),
            !YM(t[1], n, e))
                return;
            e._a = n,
            e._tzm = ZM(t[8], t[9], t[10]),
            e._d = zo.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            ke(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function KM(e) {
        var t = UM.exec(e._i);
        if (t !== null) {
            e._d = new Date(+t[1]);
            return
        }
        if (y4(e),
        e._isValid === !1)
            delete e._isValid;
        else
            return;
        if (v4(e),
        e._isValid === !1)
            delete e._isValid;
        else
            return;
        e._strict ? e._isValid = !1 : K.createFromInputFallback(e)
    }
    K.createFromInputFallback = an("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    });
    function Hr(e, t, n) {
        return e ?? t ?? n
    }
    function GM(e) {
        var t = new Date(K.now());
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function Mf(e) {
        var t, n, s = [], r, i, o;
        if (!e._d) {
            for (r = GM(e),
            e._w && e._a[Ln] == null && e._a[ts] == null && QM(e),
            e._dayOfYear != null && (o = Hr(e._a[Ot], r[Ot]),
            (e._dayOfYear > ao(o) || e._dayOfYear === 0) && (ke(e)._overflowDayOfYear = !0),
            n = zo(o, 0, e._dayOfYear),
            e._a[ts] = n.getUTCMonth(),
            e._a[Ln] = n.getUTCDate()),
            t = 0; t < 3 && e._a[t] == null; ++t)
                e._a[t] = s[t] = r[t];
            for (; t < 7; t++)
                e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
            e._a[_t] === 24 && e._a[gn] === 0 && e._a[ns] === 0 && e._a[fr] === 0 && (e._nextDay = !0,
            e._a[_t] = 0),
            e._d = (e._useUTC ? zo : sM).apply(null, s),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[_t] = 24),
            e._w && typeof e._w.d < "u" && e._w.d !== i && (ke(e).weekdayMismatch = !0)
        }
    }
    function QM(e) {
        var t, n, s, r, i, o, a, l, u;
        t = e._w,
        t.GG != null || t.W != null || t.E != null ? (i = 1,
        o = 4,
        n = Hr(t.GG, e._a[Ot], No(et(), 1, 4).year),
        s = Hr(t.W, 1),
        r = Hr(t.E, 1),
        (r < 1 || r > 7) && (l = !0)) : (i = e._locale._week.dow,
        o = e._locale._week.doy,
        u = No(et(), i, o),
        n = Hr(t.gg, e._a[Ot], u.year),
        s = Hr(t.w, u.week),
        t.d != null ? (r = t.d,
        (r < 0 || r > 6) && (l = !0)) : t.e != null ? (r = t.e + i,
        (t.e < 0 || t.e > 6) && (l = !0)) : r = i),
        s < 1 || s > is(n, i, o) ? ke(e)._overflowWeeks = !0 : l != null ? ke(e)._overflowWeekday = !0 : (a = h4(n, s, r, i, o),
        e._a[Ot] = a.year,
        e._dayOfYear = a.dayOfYear)
    }
    K.ISO_8601 = function() {}
    ;
    K.RFC_2822 = function() {}
    ;
    function kf(e) {
        if (e._f === K.ISO_8601) {
            y4(e);
            return
        }
        if (e._f === K.RFC_2822) {
            v4(e);
            return
        }
        e._a = [],
        ke(e).empty = !0;
        var t = "" + e._i, n, s, r, i, o, a = t.length, l = 0, u, c;
        for (r = t4(e._f, e._locale).match(df) || [],
        c = r.length,
        n = 0; n < c; n++)
            i = r[n],
            s = (t.match(I2(i, e)) || [])[0],
            s && (o = t.substr(0, t.indexOf(s)),
            o.length > 0 && ke(e).unusedInput.push(o),
            t = t.slice(t.indexOf(s) + s.length),
            l += s.length),
            si[i] ? (s ? ke(e).empty = !1 : ke(e).unusedTokens.push(i),
            j2(i, s, e)) : e._strict && !s && ke(e).unusedTokens.push(i);
        ke(e).charsLeftOver = a - l,
        t.length > 0 && ke(e).unusedInput.push(t),
        e._a[_t] <= 12 && ke(e).bigHour === !0 && e._a[_t] > 0 && (ke(e).bigHour = void 0),
        ke(e).parsedDateParts = e._a.slice(0),
        ke(e).meridiem = e._meridiem,
        e._a[_t] = JM(e._locale, e._a[_t], e._meridiem),
        u = ke(e).era,
        u !== null && (e._a[Ot] = e._locale.erasConvertYear(u, e._a[Ot])),
        Mf(e),
        xf(e)
    }
    function JM(e, t, n) {
        var s;
        return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (s = e.isPM(n),
        s && t < 12 && (t += 12),
        !s && t === 12 && (t = 0)),
        t)
    }
    function XM(e) {
        var t, n, s, r, i, o, a = !1, l = e._f.length;
        if (l === 0) {
            ke(e).invalidFormat = !0,
            e._d = new Date(NaN);
            return
        }
        for (r = 0; r < l; r++)
            i = 0,
            o = !1,
            t = uf({}, e),
            e._useUTC != null && (t._useUTC = e._useUTC),
            t._f = e._f[r],
            kf(t),
            cf(t) && (o = !0),
            i += ke(t).charsLeftOver,
            i += ke(t).unusedTokens.length * 10,
            ke(t).score = i,
            a ? i < s && (s = i,
            n = t) : (s == null || i < s || o) && (s = i,
            n = t,
            o && (a = !0));
        js(e, n || t)
    }
    function ek(e) {
        if (!e._d) {
            var t = hf(e._i)
              , n = t.day === void 0 ? t.date : t.day;
            e._a = J_([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function(s) {
                return s && parseInt(s, 10)
            }),
            Mf(e)
        }
    }
    function tk(e) {
        var t = new ea(xf(b4(e)));
        return t._nextDay && (t.add(1, "d"),
        t._nextDay = void 0),
        t
    }
    function b4(e) {
        var t = e._i
          , n = e._f;
        return e._locale = e._locale || ms(e._l),
        t === null || n === void 0 && t === "" ? $l({
            nullInput: !0
        }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        Mn(t) ? new ea(xf(t)) : (Xo(t) ? e._d = t : xn(n) ? XM(e) : n ? kf(e) : nk(e),
        cf(e) || (e._d = null),
        e))
    }
    function nk(e) {
        var t = e._i;
        Nt(t) ? e._d = new Date(K.now()) : Xo(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? KM(e) : xn(t) ? (e._a = J_(t.slice(0), function(n) {
            return parseInt(n, 10)
        }),
        Mf(e)) : Sr(t) ? ek(e) : us(t) ? e._d = new Date(t) : K.createFromInputFallback(e)
    }
    function w4(e, t, n, s, r) {
        var i = {};
        return (t === !0 || t === !1) && (s = t,
        t = void 0),
        (n === !0 || n === !1) && (s = n,
        n = void 0),
        (Sr(e) && lf(e) || xn(e) && e.length === 0) && (e = void 0),
        i._isAMomentObject = !0,
        i._useUTC = i._isUTC = r,
        i._l = n,
        i._i = e,
        i._f = t,
        i._strict = s,
        tk(i)
    }
    function et(e, t, n, s) {
        return w4(e, t, n, s, !1)
    }
    var sk = an("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = et.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : $l()
    })
      , rk = an("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = et.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : $l()
    });
    function x4(e, t) {
        var n, s;
        if (t.length === 1 && xn(t[0]) && (t = t[0]),
        !t.length)
            return et();
        for (n = t[0],
        s = 1; s < t.length; ++s)
            (!t[s].isValid() || t[s][e](n)) && (n = t[s]);
        return n
    }
    function ik() {
        var e = [].slice.call(arguments, 0);
        return x4("isBefore", e)
    }
    function ok() {
        var e = [].slice.call(arguments, 0);
        return x4("isAfter", e)
    }
    var ak = function() {
        return Date.now ? Date.now() : +new Date
    }
      , Zi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function lk(e) {
        var t, n = !1, s, r = Zi.length;
        for (t in e)
            if (Ne(e, t) && !(at.call(Zi, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
                return !1;
        for (s = 0; s < r; ++s)
            if (e[Zi[s]]) {
                if (n)
                    return !1;
                parseFloat(e[Zi[s]]) !== Re(e[Zi[s]]) && (n = !0)
            }
        return !0
    }
    function ck() {
        return this._isValid
    }
    function uk() {
        return Sn(NaN)
    }
    function Ul(e) {
        var t = hf(e)
          , n = t.year || 0
          , s = t.quarter || 0
          , r = t.month || 0
          , i = t.week || t.isoWeek || 0
          , o = t.day || 0
          , a = t.hour || 0
          , l = t.minute || 0
          , u = t.second || 0
          , c = t.millisecond || 0;
        this._isValid = lk(t),
        this._milliseconds = +c + u * 1e3 + l * 6e4 + a * 1e3 * 60 * 60,
        this._days = +o + i * 7,
        this._months = +r + s * 3 + n * 12,
        this._data = {},
        this._locale = ms(),
        this._bubble()
    }
    function Ca(e) {
        return e instanceof Ul
    }
    function fu(e) {
        return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
    }
    function fk(e, t, n) {
        var s = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, o;
        for (o = 0; o < s; o++)
            Re(e[o]) !== Re(t[o]) && i++;
        return i + r
    }
    function M4(e, t) {
        ce(e, 0, 0, function() {
            var n = this.utcOffset()
              , s = "+";
            return n < 0 && (n = -n,
            s = "-"),
            s + qn(~~(n / 60), 2) + t + qn(~~n % 60, 2)
        })
    }
    M4("Z", ":");
    M4("ZZ", "");
    ee("Z", Il);
    ee("ZZ", Il);
    Ke(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Sf(Il, e)
    });
    var dk = /([\+\-]|\d\d)/gi;
    function Sf(e, t) {
        var n = (t || "").match(e), s, r, i;
        return n === null ? null : (s = n[n.length - 1] || [],
        r = (s + "").match(dk) || ["-", 0, 0],
        i = +(r[1] * 60) + Re(r[2]),
        i === 0 ? 0 : r[0] === "+" ? i : -i)
    }
    function Of(e, t) {
        var n, s;
        return t._isUTC ? (n = t.clone(),
        s = (Mn(e) || Xo(e) ? e.valueOf() : et(e).valueOf()) - n.valueOf(),
        n._d.setTime(n._d.valueOf() + s),
        K.updateOffset(n, !1),
        n) : et(e).local()
    }
    function du(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    K.updateOffset = function() {}
    ;
    function hk(e, t, n) {
        var s = this._offset || 0, r;
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            if (typeof e == "string") {
                if (e = Sf(Il, e),
                e === null)
                    return this
            } else
                Math.abs(e) < 16 && !n && (e = e * 60);
            return !this._isUTC && t && (r = du(this)),
            this._offset = e,
            this._isUTC = !0,
            r != null && this.add(r, "m"),
            s !== e && (!t || this._changeInProgress ? O4(this, Sn(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            K.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        } else
            return this._isUTC ? s : du(this)
    }
    function pk(e, t) {
        return e != null ? (typeof e != "string" && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }
    function mk(e) {
        return this.utcOffset(0, e)
    }
    function _k(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(du(this), "m")),
        this
    }
    function gk() {
        if (this._tzm != null)
            this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = Sf(z2, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function yk(e) {
        return this.isValid() ? (e = e ? et(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 === 0) : !1
    }
    function vk() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function bk() {
        if (!Nt(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {}, t;
        return uf(e, this),
        e = b4(e),
        e._a ? (t = e._isUTC ? Vn(e._a) : et(e._a),
        this._isDSTShifted = this.isValid() && fk(e._a, t.toArray()) > 0) : this._isDSTShifted = !1,
        this._isDSTShifted
    }
    function wk() {
        return this.isValid() ? !this._isUTC : !1
    }
    function xk() {
        return this.isValid() ? this._isUTC : !1
    }
    function k4() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
    }
    var Mk = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , kk = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Sn(e, t) {
        var n = e, s = null, r, i, o;
        return Ca(e) ? n = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : us(e) || !isNaN(+e) ? (n = {},
        t ? n[t] = +e : n.milliseconds = +e) : (s = Mk.exec(e)) ? (r = s[1] === "-" ? -1 : 1,
        n = {
            y: 0,
            d: Re(s[Ln]) * r,
            h: Re(s[_t]) * r,
            m: Re(s[gn]) * r,
            s: Re(s[ns]) * r,
            ms: Re(fu(s[fr] * 1e3)) * r
        }) : (s = kk.exec(e)) ? (r = s[1] === "-" ? -1 : 1,
        n = {
            y: ar(s[2], r),
            M: ar(s[3], r),
            w: ar(s[4], r),
            d: ar(s[5], r),
            h: ar(s[6], r),
            m: ar(s[7], r),
            s: ar(s[8], r)
        }) : n == null ? n = {} : typeof n == "object" && ("from"in n || "to"in n) && (o = Sk(et(n.from), et(n.to)),
        n = {},
        n.ms = o.milliseconds,
        n.M = o.months),
        i = new Ul(n),
        Ca(e) && Ne(e, "_locale") && (i._locale = e._locale),
        Ca(e) && Ne(e, "_isValid") && (i._isValid = e._isValid),
        i
    }
    Sn.fn = Ul.prototype;
    Sn.invalid = uk;
    function ar(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Lh(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + (t.year() - e.year()) * 12,
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Sk(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Of(t, e),
        e.isBefore(t) ? n = Lh(e, t) : (n = Lh(t, e),
        n.milliseconds = -n.milliseconds,
        n.months = -n.months),
        n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function S4(e, t) {
        return function(n, s) {
            var r, i;
            return s !== null && !isNaN(+s) && (e4(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            i = n,
            n = s,
            s = i),
            r = Sn(n, s),
            O4(this, r, e),
            this
        }
    }
    function O4(e, t, n, s) {
        var r = t._milliseconds
          , i = fu(t._days)
          , o = fu(t._months);
        e.isValid() && (s = s ?? !0,
        o && u4(e, Lo(e, "Month") + o * n),
        i && a4(e, "Date", Lo(e, "Date") + i * n),
        r && e._d.setTime(e._d.valueOf() + r * n),
        s && K.updateOffset(e, i || o))
    }
    var Ok = S4(1, "add")
      , Ek = S4(-1, "subtract");
    function E4(e) {
        return typeof e == "string" || e instanceof String
    }
    function Ck(e) {
        return Mn(e) || Xo(e) || E4(e) || us(e) || Rk(e) || Tk(e) || e === null || e === void 0
    }
    function Tk(e) {
        var t = Sr(e) && !lf(e), n = !1, s = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], r, i, o = s.length;
        for (r = 0; r < o; r += 1)
            i = s[r],
            n = n || Ne(e, i);
        return t && n
    }
    function Rk(e) {
        var t = xn(e)
          , n = !1;
        return t && (n = e.filter(function(s) {
            return !us(s) && E4(e)
        }).length === 0),
        t && n
    }
    function Pk(e) {
        var t = Sr(e) && !lf(e), n = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], r, i;
        for (r = 0; r < s.length; r += 1)
            i = s[r],
            n = n || Ne(e, i);
        return t && n
    }
    function Ak(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    function $k(e, t) {
        arguments.length === 1 && (arguments[0] ? Ck(arguments[0]) ? (e = arguments[0],
        t = void 0) : Pk(arguments[0]) && (t = arguments[0],
        e = void 0) : (e = void 0,
        t = void 0));
        var n = e || et()
          , s = Of(n, this).startOf("day")
          , r = K.calendarFormat(this, s) || "sameElse"
          , i = t && (Hn(t[r]) ? t[r].call(this, n) : t[r]);
        return this.format(i || this.localeData().calendar(r, this, et(n)))
    }
    function Dk() {
        return new ea(this)
    }
    function Lk(e, t) {
        var n = Mn(e) ? e : et(e);
        return this.isValid() && n.isValid() ? (t = ln(t) || "millisecond",
        t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }
    function zk(e, t) {
        var n = Mn(e) ? e : et(e);
        return this.isValid() && n.isValid() ? (t = ln(t) || "millisecond",
        t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1
    }
    function Nk(e, t, n, s) {
        var r = Mn(e) ? e : et(e)
          , i = Mn(t) ? t : et(t);
        return this.isValid() && r.isValid() && i.isValid() ? (s = s || "()",
        (s[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (s[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1
    }
    function Ik(e, t) {
        var n = Mn(e) ? e : et(e), s;
        return this.isValid() && n.isValid() ? (t = ln(t) || "millisecond",
        t === "millisecond" ? this.valueOf() === n.valueOf() : (s = n.valueOf(),
        this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1
    }
    function Fk(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    function jk(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    function Uk(e, t, n) {
        var s, r, i;
        if (!this.isValid())
            return NaN;
        if (s = Of(e, this),
        !s.isValid())
            return NaN;
        switch (r = (s.utcOffset() - this.utcOffset()) * 6e4,
        t = ln(t),
        t) {
        case "year":
            i = Ta(this, s) / 12;
            break;
        case "month":
            i = Ta(this, s);
            break;
        case "quarter":
            i = Ta(this, s) / 3;
            break;
        case "second":
            i = (this - s) / 1e3;
            break;
        case "minute":
            i = (this - s) / 6e4;
            break;
        case "hour":
            i = (this - s) / 36e5;
            break;
        case "day":
            i = (this - s - r) / 864e5;
            break;
        case "week":
            i = (this - s - r) / 6048e5;
            break;
        default:
            i = this - s
        }
        return n ? i : tn(i)
    }
    function Ta(e, t) {
        if (e.date() < t.date())
            return -Ta(t, e);
        var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(n, "months"), r, i;
        return t - s < 0 ? (r = e.clone().add(n - 1, "months"),
        i = (t - s) / (s - r)) : (r = e.clone().add(n + 1, "months"),
        i = (t - s) / (r - s)),
        -(n + i) || 0
    }
    K.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    K.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function qk() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function Bk(e) {
        if (!this.isValid())
            return null;
        var t = e !== !0
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? Ea(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Hn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ea(n, "Z")) : Ea(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function Vk() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment", t = "", n, s, r, i;
        return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
        t = "Z"),
        n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        r = "-MM-DD[T]HH:mm:ss.SSS",
        i = t + '[")]',
        this.format(n + s + r + i)
    }
    function Hk(e) {
        e || (e = this.isUtc() ? K.defaultFormatUtc : K.defaultFormat);
        var t = Ea(this, e);
        return this.localeData().postformat(t)
    }
    function Wk(e, t) {
        return this.isValid() && (Mn(e) && e.isValid() || et(e).isValid()) ? Sn({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function Yk(e) {
        return this.from(et(), e)
    }
    function Zk(e, t) {
        return this.isValid() && (Mn(e) && e.isValid() || et(e).isValid()) ? Sn({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function Kk(e) {
        return this.to(et(), e)
    }
    function C4(e) {
        var t;
        return e === void 0 ? this._locale._abbr : (t = ms(e),
        t != null && (this._locale = t),
        this)
    }
    var T4 = an("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e)
    });
    function R4() {
        return this._locale
    }
    var sl = 1e3
      , ri = 60 * sl
      , rl = 60 * ri
      , P4 = (365 * 400 + 97) * 24 * rl;
    function ii(e, t) {
        return (e % t + t) % t
    }
    function A4(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400,t,n) - P4 : new Date(e,t,n).valueOf()
    }
    function $4(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - P4 : Date.UTC(e, t, n)
    }
    function Gk(e) {
        var t, n;
        if (e = ln(e),
        e === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (n = this._isUTC ? $4 : A4,
        e) {
        case "year":
            t = n(this.year(), 0, 1);
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = n(this.year(), this.month(), 1);
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(),
            t -= ii(t + (this._isUTC ? 0 : this.utcOffset() * ri), rl);
            break;
        case "minute":
            t = this._d.valueOf(),
            t -= ii(t, ri);
            break;
        case "second":
            t = this._d.valueOf(),
            t -= ii(t, sl);
            break
        }
        return this._d.setTime(t),
        K.updateOffset(this, !0),
        this
    }
    function Qk(e) {
        var t, n;
        if (e = ln(e),
        e === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (n = this._isUTC ? $4 : A4,
        e) {
        case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(),
            t += rl - ii(t + (this._isUTC ? 0 : this.utcOffset() * ri), rl) - 1;
            break;
        case "minute":
            t = this._d.valueOf(),
            t += ri - ii(t, ri) - 1;
            break;
        case "second":
            t = this._d.valueOf(),
            t += sl - ii(t, sl) - 1;
            break
        }
        return this._d.setTime(t),
        K.updateOffset(this, !0),
        this
    }
    function Jk() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }
    function Xk() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function eS() {
        return new Date(this.valueOf())
    }
    function tS() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function nS() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function sS() {
        return this.isValid() ? this.toISOString() : null
    }
    function rS() {
        return cf(this)
    }
    function iS() {
        return js({}, ke(this))
    }
    function oS() {
        return ke(this).overflow
    }
    function aS() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ce("N", 0, 0, "eraAbbr");
    ce("NN", 0, 0, "eraAbbr");
    ce("NNN", 0, 0, "eraAbbr");
    ce("NNNN", 0, 0, "eraName");
    ce("NNNNN", 0, 0, "eraNarrow");
    ce("y", ["y", 1], "yo", "eraYear");
    ce("y", ["yy", 2], 0, "eraYear");
    ce("y", ["yyy", 3], 0, "eraYear");
    ce("y", ["yyyy", 4], 0, "eraYear");
    ee("N", Ef);
    ee("NN", Ef);
    ee("NNN", Ef);
    ee("NNNN", yS);
    ee("NNNNN", vS);
    Ke(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, s) {
        var r = n._locale.erasParse(e, s, n._strict);
        r ? ke(n).era = r : ke(n).invalidEra = e
    });
    ee("y", Ni);
    ee("yy", Ni);
    ee("yyy", Ni);
    ee("yyyy", Ni);
    ee("yo", bS);
    Ke(["y", "yy", "yyy", "yyyy"], Ot);
    Ke(["yo"], function(e, t, n, s) {
        var r;
        n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse ? t[Ot] = n._locale.eraYearOrdinalParse(e, r) : t[Ot] = parseInt(e, 10)
    });
    function lS(e, t) {
        var n, s, r, i = this._eras || ms("en")._eras;
        for (n = 0,
        s = i.length; n < s; ++n) {
            switch (typeof i[n].since) {
            case "string":
                r = K(i[n].since).startOf("day"),
                i[n].since = r.valueOf();
                break
            }
            switch (typeof i[n].until) {
            case "undefined":
                i[n].until = 1 / 0;
                break;
            case "string":
                r = K(i[n].until).startOf("day").valueOf(),
                i[n].until = r.valueOf();
                break
            }
        }
        return i
    }
    function cS(e, t, n) {
        var s, r, i = this.eras(), o, a, l;
        for (e = e.toUpperCase(),
        s = 0,
        r = i.length; s < r; ++s)
            if (o = i[s].name.toUpperCase(),
            a = i[s].abbr.toUpperCase(),
            l = i[s].narrow.toUpperCase(),
            n)
                switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (a === e)
                        return i[s];
                    break;
                case "NNNN":
                    if (o === e)
                        return i[s];
                    break;
                case "NNNNN":
                    if (l === e)
                        return i[s];
                    break
                }
            else if ([o, a, l].indexOf(e) >= 0)
                return i[s]
    }
    function uS(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return t === void 0 ? K(e.since).year() : K(e.since).year() + (t - e.offset) * n
    }
    function fS() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
                return s[e].name;
        return ""
    }
    function dS() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
                return s[e].narrow;
        return ""
    }
    function hS() {
        var e, t, n, s = this.localeData().eras();
        for (e = 0,
        t = s.length; e < t; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
                return s[e].abbr;
        return ""
    }
    function pS() {
        var e, t, n, s, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e)
            if (n = r[e].since <= r[e].until ? 1 : -1,
            s = this.clone().startOf("day").valueOf(),
            r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
                return (this.year() - K(r[e].since).year()) * n + r[e].offset;
        return this.year()
    }
    function mS(e) {
        return Ne(this, "_erasNameRegex") || Cf.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    function _S(e) {
        return Ne(this, "_erasAbbrRegex") || Cf.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    function gS(e) {
        return Ne(this, "_erasNarrowRegex") || Cf.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    function Ef(e, t) {
        return t.erasAbbrRegex(e)
    }
    function yS(e, t) {
        return t.erasNameRegex(e)
    }
    function vS(e, t) {
        return t.erasNarrowRegex(e)
    }
    function bS(e, t) {
        return t._eraYearOrdinalRegex || Ni
    }
    function Cf() {
        var e = [], t = [], n = [], s = [], r, i, o, a, l, u = this.eras();
        for (r = 0,
        i = u.length; r < i; ++r)
            o = rs(u[r].name),
            a = rs(u[r].abbr),
            l = rs(u[r].narrow),
            t.push(o),
            e.push(a),
            n.push(l),
            s.push(o),
            s.push(a),
            s.push(l);
        this._erasRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + t.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")","i")
    }
    ce(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    });
    ce(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });
    function ql(e, t) {
        ce(0, [e, e.length], 0, t)
    }
    ql("gggg", "weekYear");
    ql("ggggg", "weekYear");
    ql("GGGG", "isoWeekYear");
    ql("GGGGG", "isoWeekYear");
    ee("G", Nl);
    ee("g", Nl);
    ee("GG", tt, Gt);
    ee("gg", tt, Gt);
    ee("GGGG", mf, pf);
    ee("gggg", mf, pf);
    ee("GGGGG", zl, Dl);
    ee("ggggg", zl, Dl);
    na(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
        t[s.substr(0, 2)] = Re(e)
    });
    na(["gg", "GG"], function(e, t, n, s) {
        t[s] = K.parseTwoDigitYear(e)
    });
    function wS(e) {
        return D4.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function xS(e) {
        return D4.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function MS() {
        return is(this.year(), 1, 4)
    }
    function kS() {
        return is(this.isoWeekYear(), 1, 4)
    }
    function SS() {
        var e = this.localeData()._week;
        return is(this.year(), e.dow, e.doy)
    }
    function OS() {
        var e = this.localeData()._week;
        return is(this.weekYear(), e.dow, e.doy)
    }
    function D4(e, t, n, s, r) {
        var i;
        return e == null ? No(this, s, r).year : (i = is(e, s, r),
        t > i && (t = i),
        ES.call(this, e, t, n, s, r))
    }
    function ES(e, t, n, s, r) {
        var i = h4(e, t, n, s, r)
          , o = zo(i.year, 0, i.dayOfYear);
        return this.year(o.getUTCFullYear()),
        this.month(o.getUTCMonth()),
        this.date(o.getUTCDate()),
        this
    }
    ce("Q", 0, "Qo", "quarter");
    ee("Q", n4);
    Ke("Q", function(e, t) {
        t[ts] = (Re(e) - 1) * 3
    });
    function CS(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
    }
    ce("D", ["DD", 2], "Do", "date");
    ee("D", tt, Ii);
    ee("DD", tt, Gt);
    ee("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    });
    Ke(["D", "DD"], Ln);
    Ke("Do", function(e, t) {
        t[Ln] = Re(e.match(tt)[0])
    });
    var L4 = Fi("Date", !0);
    ce("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    ee("DDD", Ll);
    ee("DDDD", s4);
    Ke(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = Re(e)
    });
    function TS(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? t : this.add(e - t, "d")
    }
    ce("m", ["mm", 2], 0, "minute");
    ee("m", tt, _f);
    ee("mm", tt, Gt);
    Ke(["m", "mm"], gn);
    var RS = Fi("Minutes", !1);
    ce("s", ["ss", 2], 0, "second");
    ee("s", tt, _f);
    ee("ss", tt, Gt);
    Ke(["s", "ss"], ns);
    var PS = Fi("Seconds", !1);
    ce("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    });
    ce(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    });
    ce(0, ["SSS", 3], 0, "millisecond");
    ce(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10
    });
    ce(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100
    });
    ce(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3
    });
    ce(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4
    });
    ce(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5
    });
    ce(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6
    });
    ee("S", Ll, n4);
    ee("SS", Ll, Gt);
    ee("SSS", Ll, s4);
    var Us, z4;
    for (Us = "SSSS"; Us.length <= 9; Us += "S")
        ee(Us, Ni);
    function AS(e, t) {
        t[fr] = Re(("0." + e) * 1e3)
    }
    for (Us = "S"; Us.length <= 9; Us += "S")
        Ke(Us, AS);
    z4 = Fi("Milliseconds", !1);
    ce("z", 0, 0, "zoneAbbr");
    ce("zz", 0, 0, "zoneName");
    function $S() {
        return this._isUTC ? "UTC" : ""
    }
    function DS() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    var N = ea.prototype;
    N.add = Ok;
    N.calendar = $k;
    N.clone = Dk;
    N.diff = Uk;
    N.endOf = Qk;
    N.format = Hk;
    N.from = Wk;
    N.fromNow = Yk;
    N.to = Zk;
    N.toNow = Kk;
    N.get = V2;
    N.invalidAt = oS;
    N.isAfter = Lk;
    N.isBefore = zk;
    N.isBetween = Nk;
    N.isSame = Ik;
    N.isSameOrAfter = Fk;
    N.isSameOrBefore = jk;
    N.isValid = rS;
    N.lang = T4;
    N.locale = C4;
    N.localeData = R4;
    N.max = rk;
    N.min = sk;
    N.parsingFlags = iS;
    N.set = H2;
    N.startOf = Gk;
    N.subtract = Ek;
    N.toArray = tS;
    N.toObject = nS;
    N.toDate = eS;
    N.toISOString = Bk;
    N.inspect = Vk;
    typeof Symbol < "u" && Symbol.for != null && (N[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    );
    N.toJSON = sS;
    N.toString = qk;
    N.unix = Xk;
    N.valueOf = Jk;
    N.creationData = aS;
    N.eraName = fS;
    N.eraNarrow = dS;
    N.eraAbbr = hS;
    N.eraYear = pS;
    N.year = o4;
    N.isLeapYear = B2;
    N.weekYear = wS;
    N.isoWeekYear = xS;
    N.quarter = N.quarters = CS;
    N.month = f4;
    N.daysInMonth = eM;
    N.week = N.weeks = lM;
    N.isoWeek = N.isoWeeks = cM;
    N.weeksInYear = SS;
    N.weeksInWeekYear = OS;
    N.isoWeeksInYear = MS;
    N.isoWeeksInISOWeekYear = kS;
    N.date = L4;
    N.day = N.days = xM;
    N.weekday = MM;
    N.isoWeekday = kM;
    N.dayOfYear = TS;
    N.hour = N.hours = PM;
    N.minute = N.minutes = RS;
    N.second = N.seconds = PS;
    N.millisecond = N.milliseconds = z4;
    N.utcOffset = hk;
    N.utc = mk;
    N.local = _k;
    N.parseZone = gk;
    N.hasAlignedHourOffset = yk;
    N.isDST = vk;
    N.isLocal = wk;
    N.isUtcOffset = xk;
    N.isUtc = k4;
    N.isUTC = k4;
    N.zoneAbbr = $S;
    N.zoneName = DS;
    N.dates = an("dates accessor is deprecated. Use date instead.", L4);
    N.months = an("months accessor is deprecated. Use month instead", f4);
    N.years = an("years accessor is deprecated. Use year instead", o4);
    N.zone = an("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", pk);
    N.isDSTShifted = an("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", bk);
    function LS(e) {
        return et(e * 1e3)
    }
    function zS() {
        return et.apply(null, arguments).parseZone()
    }
    function N4(e) {
        return e
    }
    var Ie = ff.prototype;
    Ie.calendar = w2;
    Ie.longDateFormat = S2;
    Ie.invalidDate = E2;
    Ie.ordinal = R2;
    Ie.preparse = N4;
    Ie.postformat = N4;
    Ie.relativeTime = A2;
    Ie.pastFuture = $2;
    Ie.set = v2;
    Ie.eras = lS;
    Ie.erasParse = cS;
    Ie.erasConvertYear = uS;
    Ie.erasAbbrRegex = _S;
    Ie.erasNameRegex = mS;
    Ie.erasNarrowRegex = gS;
    Ie.months = G2;
    Ie.monthsShort = Q2;
    Ie.monthsParse = X2;
    Ie.monthsRegex = nM;
    Ie.monthsShortRegex = tM;
    Ie.week = rM;
    Ie.firstDayOfYear = aM;
    Ie.firstDayOfWeek = oM;
    Ie.weekdays = gM;
    Ie.weekdaysMin = vM;
    Ie.weekdaysShort = yM;
    Ie.weekdaysParse = wM;
    Ie.weekdaysRegex = SM;
    Ie.weekdaysShortRegex = OM;
    Ie.weekdaysMinRegex = EM;
    Ie.isPM = TM;
    Ie.meridiem = AM;
    function il(e, t, n, s) {
        var r = ms()
          , i = Vn().set(s, t);
        return r[n](i, e)
    }
    function I4(e, t, n) {
        if (us(e) && (t = e,
        e = void 0),
        e = e || "",
        t != null)
            return il(e, t, n, "month");
        var s, r = [];
        for (s = 0; s < 12; s++)
            r[s] = il(e, s, n, "month");
        return r
    }
    function Tf(e, t, n, s) {
        typeof e == "boolean" ? (us(t) && (n = t,
        t = void 0),
        t = t || "") : (t = e,
        n = t,
        e = !1,
        us(t) && (n = t,
        t = void 0),
        t = t || "");
        var r = ms(), i = e ? r._week.dow : 0, o, a = [];
        if (n != null)
            return il(t, (n + i) % 7, s, "day");
        for (o = 0; o < 7; o++)
            a[o] = il(t, (o + i) % 7, s, "day");
        return a
    }
    function NS(e, t) {
        return I4(e, t, "months")
    }
    function IS(e, t) {
        return I4(e, t, "monthsShort")
    }
    function FS(e, t, n) {
        return Tf(e, t, n, "weekdays")
    }
    function jS(e, t, n) {
        return Tf(e, t, n, "weekdaysShort")
    }
    function US(e, t, n) {
        return Tf(e, t, n, "weekdaysMin")
    }
    Ws("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10
              , n = Re(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }
    });
    K.lang = an("moment.lang is deprecated. Use moment.locale instead.", Ws);
    K.langData = an("moment.langData is deprecated. Use moment.localeData instead.", ms);
    var Zn = Math.abs;
    function qS() {
        var e = this._data;
        return this._milliseconds = Zn(this._milliseconds),
        this._days = Zn(this._days),
        this._months = Zn(this._months),
        e.milliseconds = Zn(e.milliseconds),
        e.seconds = Zn(e.seconds),
        e.minutes = Zn(e.minutes),
        e.hours = Zn(e.hours),
        e.months = Zn(e.months),
        e.years = Zn(e.years),
        this
    }
    function F4(e, t, n, s) {
        var r = Sn(t, n);
        return e._milliseconds += s * r._milliseconds,
        e._days += s * r._days,
        e._months += s * r._months,
        e._bubble()
    }
    function BS(e, t) {
        return F4(this, e, t, 1)
    }
    function VS(e, t) {
        return F4(this, e, t, -1)
    }
    function zh(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function HS() {
        var e = this._milliseconds, t = this._days, n = this._months, s = this._data, r, i, o, a, l;
        return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += zh(hu(n) + t) * 864e5,
        t = 0,
        n = 0),
        s.milliseconds = e % 1e3,
        r = tn(e / 1e3),
        s.seconds = r % 60,
        i = tn(r / 60),
        s.minutes = i % 60,
        o = tn(i / 60),
        s.hours = o % 24,
        t += tn(o / 24),
        l = tn(j4(t)),
        n += l,
        t -= zh(hu(l)),
        a = tn(n / 12),
        n %= 12,
        s.days = t,
        s.months = n,
        s.years = a,
        this
    }
    function j4(e) {
        return e * 4800 / 146097
    }
    function hu(e) {
        return e * 146097 / 4800
    }
    function WS(e) {
        if (!this.isValid())
            return NaN;
        var t, n, s = this._milliseconds;
        if (e = ln(e),
        e === "month" || e === "quarter" || e === "year")
            switch (t = this._days + s / 864e5,
            n = this._months + j4(t),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (t = this._days + Math.round(hu(this._months)),
            e) {
            case "week":
                return t / 7 + s / 6048e5;
            case "day":
                return t + s / 864e5;
            case "hour":
                return t * 24 + s / 36e5;
            case "minute":
                return t * 1440 + s / 6e4;
            case "second":
                return t * 86400 + s / 1e3;
            case "millisecond":
                return Math.floor(t * 864e5) + s;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    function _s(e) {
        return function() {
            return this.as(e)
        }
    }
    var U4 = _s("ms")
      , YS = _s("s")
      , ZS = _s("m")
      , KS = _s("h")
      , GS = _s("d")
      , QS = _s("w")
      , JS = _s("M")
      , XS = _s("Q")
      , e3 = _s("y")
      , t3 = U4;
    function n3() {
        return Sn(this)
    }
    function s3(e) {
        return e = ln(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    function zr(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var r3 = zr("milliseconds")
      , i3 = zr("seconds")
      , o3 = zr("minutes")
      , a3 = zr("hours")
      , l3 = zr("days")
      , c3 = zr("months")
      , u3 = zr("years");
    function f3() {
        return tn(this.days() / 7)
    }
    var Xn = Math.round
      , Zr = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    function d3(e, t, n, s, r) {
        return r.relativeTime(t || 1, !!n, e, s)
    }
    function h3(e, t, n, s) {
        var r = Sn(e).abs()
          , i = Xn(r.as("s"))
          , o = Xn(r.as("m"))
          , a = Xn(r.as("h"))
          , l = Xn(r.as("d"))
          , u = Xn(r.as("M"))
          , c = Xn(r.as("w"))
          , f = Xn(r.as("y"))
          , d = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || o <= 1 && ["m"] || o < n.m && ["mm", o] || a <= 1 && ["h"] || a < n.h && ["hh", a] || l <= 1 && ["d"] || l < n.d && ["dd", l];
        return n.w != null && (d = d || c <= 1 && ["w"] || c < n.w && ["ww", c]),
        d = d || u <= 1 && ["M"] || u < n.M && ["MM", u] || f <= 1 && ["y"] || ["yy", f],
        d[2] = t,
        d[3] = +e > 0,
        d[4] = s,
        d3.apply(null, d)
    }
    function p3(e) {
        return e === void 0 ? Xn : typeof e == "function" ? (Xn = e,
        !0) : !1
    }
    function m3(e, t) {
        return Zr[e] === void 0 ? !1 : t === void 0 ? Zr[e] : (Zr[e] = t,
        e === "s" && (Zr.ss = t - 1),
        !0)
    }
    function _3(e, t) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var n = !1, s = Zr, r, i;
        return typeof e == "object" && (t = e,
        e = !1),
        typeof e == "boolean" && (n = e),
        typeof t == "object" && (s = Object.assign({}, Zr, t),
        t.s != null && t.ss == null && (s.ss = t.s - 1)),
        r = this.localeData(),
        i = h3(this, !n, s, r),
        n && (i = r.pastFuture(+this, i)),
        r.postformat(i)
    }
    var pc = Math.abs;
    function qr(e) {
        return (e > 0) - (e < 0) || +e
    }
    function Bl() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e = pc(this._milliseconds) / 1e3, t = pc(this._days), n = pc(this._months), s, r, i, o, a = this.asSeconds(), l, u, c, f;
        return a ? (s = tn(e / 60),
        r = tn(s / 60),
        e %= 60,
        s %= 60,
        i = tn(n / 12),
        n %= 12,
        o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
        l = a < 0 ? "-" : "",
        u = qr(this._months) !== qr(a) ? "-" : "",
        c = qr(this._days) !== qr(a) ? "-" : "",
        f = qr(this._milliseconds) !== qr(a) ? "-" : "",
        l + "P" + (i ? u + i + "Y" : "") + (n ? u + n + "M" : "") + (t ? c + t + "D" : "") + (r || s || e ? "T" : "") + (r ? f + r + "H" : "") + (s ? f + s + "M" : "") + (e ? f + o + "S" : "")) : "P0D"
    }
    var Le = Ul.prototype;
    Le.isValid = ck;
    Le.abs = qS;
    Le.add = BS;
    Le.subtract = VS;
    Le.as = WS;
    Le.asMilliseconds = U4;
    Le.asSeconds = YS;
    Le.asMinutes = ZS;
    Le.asHours = KS;
    Le.asDays = GS;
    Le.asWeeks = QS;
    Le.asMonths = JS;
    Le.asQuarters = XS;
    Le.asYears = e3;
    Le.valueOf = t3;
    Le._bubble = HS;
    Le.clone = n3;
    Le.get = s3;
    Le.milliseconds = r3;
    Le.seconds = i3;
    Le.minutes = o3;
    Le.hours = a3;
    Le.days = l3;
    Le.weeks = f3;
    Le.months = c3;
    Le.years = u3;
    Le.humanize = _3;
    Le.toISOString = Bl;
    Le.toString = Bl;
    Le.toJSON = Bl;
    Le.locale = C4;
    Le.localeData = R4;
    Le.toIsoString = an("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bl);
    Le.lang = T4;
    ce("X", 0, 0, "unix");
    ce("x", 0, 0, "valueOf");
    ee("x", Nl);
    ee("X", N2);
    Ke("X", function(e, t, n) {
        n._d = new Date(parseFloat(e) * 1e3)
    });
    Ke("x", function(e, t, n) {
        n._d = new Date(Re(e))
    });
    //! moment.js
    K.version = "2.30.1";
    g2(et);
    K.fn = N;
    K.min = ik;
    K.max = ok;
    K.now = ak;
    K.utc = Vn;
    K.unix = LS;
    K.months = NS;
    K.isDate = Xo;
    K.locale = Ws;
    K.invalid = $l;
    K.duration = Sn;
    K.isMoment = Mn;
    K.weekdays = FS;
    K.parseZone = zS;
    K.localeData = ms;
    K.isDuration = Ca;
    K.monthsShort = IS;
    K.weekdaysMin = US;
    K.defineLocale = wf;
    K.updateLocale = zM;
    K.locales = NM;
    K.weekdaysShort = jS;
    K.normalizeUnits = ln;
    K.relativeTimeRounding = p3;
    K.relativeTimeThreshold = m3;
    K.calendarFormat = Ak;
    K.prototype = N;
    K.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    const mc = 30;
    var pu = (e=>(e[e.TG = 0] = "TG",
    e[e.DISCORD = 1] = "DISCORD",
    e[e.YOUTUBE = 2] = "YOUTUBE",
    e[e.TWITTER = 3] = "TWITTER",
    e[e.PARTNERS = 4] = "PARTNERS",
    e[e.LOGIN = 5] = "LOGIN",
    e[e.DOWNLOAD = 6] = "DOWNLOAD",
    e[e.TRADING = 7] = "TRADING",
    e[e.OTHER = 8] = "OTHER",
    e))(pu || {});
    const $r = e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      , q4 = e=>"https://backend.got.bondex.app/media?key=" + e
      , zn = e=>{
        if (e >= 1e9) {
            const t = (e / 1e9).toFixed(1);
            return t.split(".")[1] == "0" ? t.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "B" : t + "B"
        } else if (e >= 1e6) {
            const t = (e / 1e6).toFixed(1);
            return t.split(".")[1] == "0" ? t.split(".")[0] + "M" : t + "M"
        } else if (e >= 1e3) {
            const t = (e / 1e3).toFixed(1);
            return t.split(".")[1] == "0" ? t.split(".")[0] + "K" : t + "K"
        } else
            return e.toString()
    }
      , Nh = e=>e < 4 ? e : e > 1e3 ? "+1000" : e > 1e4 ? "+10000" : e > 9 ? e : `0${e}`;
    function B4(e) {
        return e[2]
    }
    const Ct = Km("user", {
        getMe: null,
        getBoosts: null,
        getFriends: null,
        getDailyBonuses: null,
        getChannels: null,
        getCards: e=>[{
            category: e
        }],
        getLeagues: null
    })
      , Rf = ()=>{
        const e = on()
          , t = sr({
            ...Ct.getMe,
            queryFn: async()=>Dt.get("/getMe").then(n=>(e.setUser(n),
            e.setInitData(!0),
            n))
        });
        return {
            ...t,
            me: ye(()=>S(t.data))
        }
    }
      , g3 = ()=>{
        const e = sr({
            ...Ct.getBoosts,
            queryFn: async()=>Dt.get("/boosts")
        });
        return {
            ...e,
            boosts: ye(()=>S(e.data))
        }
    }
      , y3 = ()=>{
        const e = sr({
            ...Ct.getFriends,
            queryFn: async()=>Dt.get("/friends", {
                queries: {
                    limit: 50,
                    offset: 0
                }
            })
        });
        return {
            ...e,
            friends: ye(()=>S(e.data))
        }
    }
      , v3 = ()=>{
        const e = sr({
            ...Ct.getDailyBonuses,
            queryFn: async()=>Dt.get("/getDailyBonuses")
        });
        return {
            ...e,
            bonuses: ye(()=>S(e.data))
        }
    }
      , b3 = ()=>{
        const e = sr({
            ...Ct.getChannels,
            queryFn: async()=>Dt.get("/channels")
        });
        return {
            ...e,
            channels: ye(()=>{
                var t;
                return (t = S(e.data)) == null ? void 0 : t.channels
            }
            )
        }
    }
      , w3 = e=>{
        const t = sr({
            ...Ct.getCards(e),
            queryFn: async({queryKey: n})=>{
                const {category: s} = B4(n);
                return Dt.get("/cards", {
                    queries: {
                        category: s
                    }
                })
            }
        });
        return {
            ...t,
            cards: ye(()=>(S(t.data) ?? []).map(s=>({
                id: s.id,
                name: s.name,
                src: q4(s.logo_s3_key ?? ""),
                cost: Number(s.upgrade_cost),
                profit: s.cur_total_farming,
                nextCardAvailable: !!s.farming_upgrade,
                nextLevelProfit: s.farming_upgrade,
                description: s.description,
                category: s.category,
                level: s.cur_level
            })))
        }
    }
      , x3 = ()=>{
        const e = sr({
            ...Ct.getLeagues,
            queryFn: async()=>Dt.get("/leagues"),
            staleTime: 1 / 0
        });
        return {
            ...e,
            leagues: ye(()=>{
                var t;
                return ((t = S(e.data)) == null ? void 0 : t.leagues) ?? []
            }
            )
        }
    }
      , M3 = ()=>{
        const e = nr();
        return Di({
            mutationKey: ["purchase", "boosters"],
            async mutationFn(t) {
                return await Dt.post("/boosts", {
                    boost: t
                })
            },
            onSuccess() {
                e.invalidateQueries({
                    queryKey: Ct.getBoosts.queryKey
                }),
                e.invalidateQueries({
                    queryKey: Ct.getMe.queryKey
                })
            }
        })
    }
      , k3 = ()=>{
        const e = nr();
        return Di({
            mutationKey: ["mine", "coins"],
            async mutationFn(t) {
                return await Dt.post("/mine", {
                    count: t
                })
            },
            onSuccess(t) {},
            onError() {
                e.invalidateQueries({
                    queryKey: Ct.getMe.queryKey
                })
            }
        })
    }
      , S3 = ()=>{
        const e = nr();
        return Di({
            mutationKey: ["pick", "bonus"],
            async mutationFn() {
                return await Dt.post("/pickDailyBonus", void 0)
            },
            onSuccess(t) {
                e.invalidateQueries({
                    queryKey: Ct.getDailyBonuses.queryKey
                }),
                e.invalidateQueries({
                    queryKey: Ct.getMe.queryKey
                })
            }
        })
    }
      , O3 = ()=>{
        const e = nr();
        return Di({
            mutationKey: ["buy", "card"],
            async mutationFn(t) {
                return await Dt.post("/cards", {
                    id: t
                })
            },
            onSuccess(t) {
                e.invalidateQueries({
                    queryKey: Ct.getMe.queryKey
                }),
                e.invalidateQueries({
                    queryKey: Ct.getCards._def
                })
            }
        })
    }
      , E3 = ()=>{
        const e = nr();
        return Di({
            mutationKey: ["pick", "quest", "reward"],
            async mutationFn(t) {
                return await Dt.post("/channel/reward", {
                    id: t
                })
            },
            onSuccess(t) {
                e.invalidateQueries({
                    queryKey: Ct.getChannels.queryKey
                })
            }
        })
    }
      , fs = "/img/coin.png"
      , V4 = e=>(ds("data-v-983a998c"),
    e = e(),
    hs(),
    e)
      , C3 = {
        class: "w-full flex flex-col"
    }
      , T3 = {
        class: "flex justify-between items-center px-1 mb-1"
    }
      , R3 = {
        class: "text-bondex-white text-12"
    }
      , P3 = {
        class: "text-bondex-white text-12"
    }
      , A3 = {
        class: "text-12-bold"
    }
      , $3 = {
        ref: "progressBar",
        class: "relative h-[8px] overflow-hidden rounded-[16px]"
    }
      , D3 = {
        class: "w-full overflow-hidden relative flex-grow"
    }
      , L3 = V4(()=>m("div", {
        class: "absolute top-[10px] right-[25px] -translate-y-[50%] translate-x-[50%] w-[158px] h-[158px]"
    }, [m("img", {
        src: fs,
        class: "h-full w-full rotate-[-45deg]",
        alt: "coin"
    })], -1))
      , z3 = V4(()=>m("div", {
        class: "absolute left-[-59px] bottom-[-53px] w-[158px] h-[158px]"
    }, [m("img", {
        src: fs,
        class: "h-full w-full",
        alt: "coin"
    })], -1))
      , N3 = {
        class: "flex items-center justify-center w-full h-full relative"
    }
      , I3 = Pe({
        __name: "Progress",
        props: {
            progress: {},
            currentLeague: {},
            leagueProgress: {}
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", C3, [Da(m("div", T3, [m("p", R3, he(t.currentLeague), 1), m("p", P3, [ct(" Level "), m("span", A3, he(t.leagueProgress), 1)])], 512), [[bd, n.progress]]), Z(Or, {
                class: "overflow-hidden"
            }, {
                default: ie(()=>[Da(m("div", $3, [m("div", {
                    class: "progress-bar h-full rounded-[16px]",
                    style: pn(`width: ${n.progress}%`)
                }, null, 4)], 512), [[bd, n.progress]]), m("div", D3, [L3, z3, m("div", N3, [Lr(n.$slots, "default", {}, void 0, !0)])])]),
                _: 3
            })]))
        }
    })
      , cn = (e,t)=>{
        const n = e.__vccOpts || e;
        for (const [s,r] of t)
            n[s] = r;
        return n
    }
      , Vl = cn(I3, [["__scopeId", "data-v-983a998c"]])
      , F3 = {
        class: "text-bondex-white flex flex-col items-center gap-2 pb-4 pt-1"
    }
      , j3 = {
        class: "flex gap-4"
    }
      , U3 = {
        class: "flex flex-col items-center gap-1"
    }
      , q3 = {
        class: "text-12"
    }
      , B3 = {
        class: "text-24-bold"
    }
      , H4 = Pe({
        __name: "Stats",
        setup(e) {
            var o;
            const t = on()
              , n = ye(()=>{
                if (!t.user)
                    return 0;
                if (!t.user.next_league)
                    return 100;
                const a = t.user.balance / t.user.next_league.must_reach_balance * 100;
                return a >= 100 ? 100 : a
            }
            )
              , s = fe(((o = t.user) == null ? void 0 : o.balance) || 0);
            function r(a) {
                const l = s.value
                  , u = a - l;
                let c = 900;
                u <= 10 && (c = 300);
                const f = performance.now();
                function d(h) {
                    const g = h - f
                      , v = Math.min(g / c, 1);
                    s.value = Math.round(l + u * v),
                    v < 1 && requestAnimationFrame(d)
                }
                requestAnimationFrame(d)
            }
            const i = ye(()=>{
                var l, u, c, f, d, h;
                const a = (((l = t.user) == null ? void 0 : l.next_league.must_reach_balance) ?? 0) - (((u = t.user) == null ? void 0 : u.balance) ?? 0) < 0 ? 0 : (((c = t.user) == null ? void 0 : c.next_league.must_reach_balance) ?? 0) - (((f = t.user) == null ? void 0 : f.balance) ?? 0);
                return [{
                    title: "Earn per tap",
                    value: zn(((d = t.user) == null ? void 0 : d.earn_per_tap) ?? 0)
                }, {
                    title: "Coins to lvl up",
                    value: zn(a)
                }, {
                    title: "Profit per hour",
                    value: zn(((h = t.user) == null ? void 0 : h.profit_per_hour) ?? 0)
                }]
            }
            );
            return ht(()=>{
                var a;
                return ((a = t.user) == null ? void 0 : a.balance) ?? 0
            }
            , a=>{
                r(a)
            }
            , {
                immediate: !0
            }),
            (a,l)=>{
                var u, c, f;
                return E(),
                ve(Vl, {
                    progress: n.value,
                    currentLeague: (u = S(t).user) == null ? void 0 : u.league.name,
                    leagueProgress: (((c = S(t).user) == null ? void 0 : c.current_league) ?? 0) + 1 + "/" + ((f = S(t).user) == null ? void 0 : f.total_leagues),
                    class: "relative z-10"
                }, {
                    default: ie(()=>[m("div", F3, [m("h2", null, he(s.value > 1e9 ? S(zn)(s.value) : S($r)(s.value)), 1), m("div", j3, [(E(!0),
                    V(qe, null, xt(i.value, d=>(E(),
                    V("div", U3, [m("p", q3, he(d.title), 1), m("p", B3, he(d.value), 1)]))), 256))])])]),
                    _: 1
                }, 8, ["progress", "currentLeague", "leagueProgress"])
            }
        }
    })
      , Bn = "/img/bondexCoin.png"
      , V3 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "none"
    }
      , H3 = m("g", {
        fill: "#fff",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
    }, [m("path", {
        d: "M.672.672a.95.95 0 0 1 1.345 0l13.31 13.311a.95.95 0 0 1-1.344 1.345L.673 2.017a.95.95 0 0 1 0-1.345"
    }), m("path", {
        d: "M15.328.672a.95.95 0 0 0-1.345 0L.673 13.983a.95.95 0 0 0 1.344 1.345l13.31-13.311a.95.95 0 0 0 0-1.345"
    })], -1)
      , W3 = [H3];
    function Y3(e, t) {
        return E(),
        V("svg", V3, [...W3])
    }
    const Z3 = {
        render: Y3
    }
      , Hl = Pe({
        __name: "Popup",
        props: {
            closeCallback: {
                type: Function
            },
            centered: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e
              , n = fe(null);
            return jb(n, ()=>t.closeCallback()),
            (s,r)=>(E(),
            V("div", {
                class: le(["fixed z-50 backdrop-blur-[8px] inset-0 bg-opacity-50 flex items-end justify-center", {
                    "items-center": t.centered
                }])
            }, [m("div", {
                ref_key: "popup",
                ref: n,
                class: le(["bg-bondex-dark/90 rounded-2xl w-full pt-[48px] px-5 flex flex-col items-center relative mx-4 z-20 text-bondex-white overflow-hidden", {
                    "!bg-bondex-dark": t.centered
                }])
            }, [m("button", {
                onClick: r[0] || (r[0] = (...i)=>t.closeCallback && t.closeCallback(...i)),
                class: "absolute top-0 right-0 z-10 p-5"
            }, [Z(S(Z3))]), Lr(s.$slots, "default")], 2)], 2))
        }
    })
      , K3 = ["disabled", "type"]
      , G3 = Pe({
        __name: "Button",
        props: {
            type: {},
            disabled: {
                type: Boolean
            },
            primary: {
                type: Boolean
            },
            secondary: {
                type: Boolean
            },
            share: {
                type: Boolean
            },
            dark: {
                type: Boolean
            },
            green: {
                type: Boolean
            },
            loading: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("button", {
                class: le(["w-full h-[56px] p-3 flex items-center justify-center rounded-[8px] text-12-bold text-bondex-white active:opacity-80 transition-all duration-300", {
                    primary: n.primary,
                    green: t.green,
                    "share uppercase": n.share,
                    "bg-bondex-dark": n.secondary,
                    "py-[6px] bg-bondex-dark !rounded-2xl h-min ": t.dark,
                    "pointer-events-none button-loader": t.loading,
                    "opacity-80 pointer-events-none": t.disabled
                }]),
                disabled: t.disabled,
                type: t.type
            }, [Lr(n.$slots, "default", {}, void 0, !0)], 10, K3))
        }
    })
      , Yt = cn(G3, [["__scopeId", "data-v-49ddd614"]])
      , Q3 = {
        class: "h-[144px] w-[144px] mb-2 overflow-hidden"
    }
      , J3 = m("h3", {
        class: "text-24-bold mb-2"
    }, "You have received", -1)
      , X3 = {
        class: "flex gap-2 items-center mb-8"
    }
      , e6 = {
        class: "w-8 h-8 shrink-0"
    }
      , t6 = {
        class: "text-40-bold text-bondex-green"
    }
      , n6 = m("p", {
        class: "text-12 text-center mb-2"
    }, " In your absence the whale continued the hard work in order to bring you some more Bunny Blitz Coins from the web3 ocean! ", -1)
      , s6 = m("p", {
        class: "text-12 text-center mb-7"
    }, [m("span", {
        class: "text-12-bold"
    }, "Note:"), ct(" automatic mining is active only during the first 3 hours of absence. ")], -1)
      , r6 = Pe({
        __name: "PassiveIncome",
        props: {
            closeCallback: {
                type: Function
            },
            amount: {}
        },
        setup(e) {
            const t = e
              , n = fe(!1)
              , s = fe(!1)
              , r = ()=>{
                n.value = !0
            }
              , i = ()=>{
                s.value = !0
            }
            ;
            return (o,a)=>(E(),
            ve(Hl, {
                "close-callback": t.closeCallback
            }, {
                default: ie(()=>[m("div", Q3, [m("img", {
                    onLoad: r,
                    src: fs,
                    class: le(["w-full h-full transition-all duration-300 opacity-0", {
                        "opacity-100": n.value
                    }]),
                    alt: "coin"
                }, null, 34)]), J3, m("div", X3, [m("div", e6, [m("img", {
                    onLoad: i,
                    src: Bn,
                    alt: "bondex_coin",
                    class: le(["w-full h-full transition-all duration-300 opacity-0", {
                        "opacity-100": s.value
                    }])
                }, null, 34)]), m("p", t6, he(`+${S(zn)(t.amount)}`), 1)]), n6, s6, Z(Yt, {
                    green: "",
                    class: "w-full max-w-[167px] !h-[39px] !rounded-[60px] mx-auto mb-[60px]",
                    onClick: t.closeCallback
                }, {
                    default: ie(()=>[ct(" Got it ")]),
                    _: 1
                }, 8, ["onClick"])]),
                _: 1
            }, 8, ["close-callback"]))
        }
    })
      , i6 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "12",
        fill: "none"
    }
      , o6 = m("path", {
        fill: "#16AF91",
        d: "M24 6 14 .226v11.548zM0 7h15V5H0z"
    }, null, -1)
      , a6 = [o6];
    function l6(e, t) {
        return E(),
        V("svg", i6, [...a6])
    }
    const c6 = {
        render: l6
    }
      , W4 = e=>(ds("data-v-6e876d1f"),
    e = e(),
    hs(),
    e)
      , u6 = W4(()=>m("p", {
        class: "text-24-bold mb-1"
    }, "Congratulations!", -1))
      , f6 = W4(()=>m("p", {
        class: "text-12 mb-4"
    }, "You have reached a new level", -1))
      , d6 = {
        class: "flex items-center gap-2 text-20-bold text-bondex-green mb-2 whitespace-nowrap"
    }
      , h6 = {
        class: "w-full h-[60vh] relative"
    }
      , p6 = Pe({
        __name: "LevelUp",
        props: {
            closeCallback: {
                type: Function
            }
        },
        setup(e) {
            const t = e
              , n = on()
              , s = fe(!1)
              , r = i=>{
                s.value = i
            }
            ;
            return (i,o)=>(E(),
            ve(Hl, {
                "close-callback": t.closeCallback
            }, {
                default: ie(()=>{
                    var a, l, u, c;
                    return [u6, f6, m("div", d6, [m("p", null, he((a = S(n).level) == null ? void 0 : a.currentLevelName), 1), Z(S(c6)), m("p", null, he((l = S(n).level) == null ? void 0 : l.nextLevelName), 1)]), m("div", h6, [Z(Ua, {
                        onOnLogoLoad: o[0] || (o[0] = f=>r(!0)),
                        src: ((u = S(n).level) == null ? void 0 : u.currentLevelSrc) ?? "",
                        class: le(["w-full h-full current transition-all absolute duration-300 translate-x-[3%]", {
                            "opacity-100": s.value
                        }])
                    }, null, 8, ["src", "class"]), Z(Ua, {
                        src: ((c = S(n).level) == null ? void 0 : c.nextLevelSrc) ?? "",
                        class: "w-full h-full opacity-0 next absolute translate-x-[3%]"
                    }, null, 8, ["src"])]), Z(Yt, {
                        green: "",
                        class: "w-full max-w-[167px] !h-[39px] !rounded-[60px] mx-auto mb-[60px]",
                        onClick: t.closeCallback
                    }, {
                        default: ie(()=>[ct(" Got it ")]),
                        _: 1
                    }, 8, ["onClick"])]
                }
                ),
                _: 1
            }, 8, ["close-callback"]))
        }
    })
      , m6 = cn(p6, [["__scopeId", "data-v-6e876d1f"]])
      , _6 = Pe({
        __name: "Toggle",
        props: {
            modelValue: {
                type: Boolean
            }
        },
        emits: ["update:modelValue"],
        setup(e, {emit: t}) {
            const n = e
              , s = t
              , r = ye({
                get: ()=>n.modelValue,
                set: i=>s("update:modelValue", i)
            });
            return (i,o)=>(E(),
            V("div", null, [Da(m("input", {
                name: "toggle",
                id: "toggle",
                type: "checkbox",
                value: !0,
                class: "hidden",
                "onUpdate:modelValue": o[0] || (o[0] = a=>r.value = a)
            }, null, 512), [[Fv, r.value]]), m("label", {
                for: "toggle",
                class: le(["bg-bondex-blue flex h-6 w-[48px] cursor-pointer items-center rounded-2xl transition-all duration-300", {
                    "bg-gradient-to-t from-bondex-green to-bondex-green/40": r.value
                }])
            }, [m("div", {
                class: le(["h-6 w-6 rounded-full flex transform items-center justify-center opacity-80 bg-gradient-to-r from-bondex-green to-bondex-indigo transition-all duration-300", {
                    "translate-x-[calc(100%)] !opacity-100": r.value
                }])
            }, null, 2)], 2)]))
        }
    })
      , g6 = {
        class: "flex h-full w-full flex-grow flex-col justify-between transition-all duration-300 px-4"
    }
      , y6 = {
        class: "fixed inset-0 translate-y-[35%] px-3"
    }
      , v6 = {
        class: "relative flex h-full w-full flex-grow"
    }
      , b6 = {
        class: "text-bondex-white text-12-bold flex justify-between"
    }
      , w6 = m("img", {
        src: Zv,
        alt: "logo",
        class: "w-4"
    }, null, -1)
      , x6 = m("p", null, "VIBRO", -1)
      , M6 = m("img", {
        src: Kv,
        alt: "",
        class: ""
    }, null, -1)
      , k6 = m("p", null, "BOOST", -1)
      , S6 = [M6, k6]
      , O6 = Pe({
        __name: "Miner",
        setup(e) {
            const t = fe(null)
              , n = fe(!1)
              , s = fe(0)
              , r = fe(0)
              , i = fe(0)
              , o = fe()
              , {mutate: a} = k3()
              , {me: l} = Rf()
              , {leagues: u} = x3()
              , c = on()
              , f = fb();
            ht(l, Q=>{
                if (!Q)
                    return;
                console.log("me changed");
                const se = {
                    ...Q
                };
                c.setUser(se)
            }
            ),
            ht(u, Q=>{
                Q && c.setLeagues(Q)
            }
            );
            const d = ye(()=>!!c.passiveIncome)
              , h = fe(c.vibro)
              , g = ()=>{
                c.setPassiveIncome(0)
            }
              , v = ()=>{
                n.value = !1
            }
              , C = ()=>{
                s.value += 1,
                setTimeout(()=>{
                    s.value -= 1
                }
                , 500)
            }
              , M = Q=>{
                const se = Q;
                let L = [];
                for (let re = 0; re < se.targetTouches.length; re++)
                    L.push({
                        x: se.touches[re].clientX,
                        y: se.touches[re].clientY
                    });
                o.value = L,
                setTimeout(()=>{
                    o.value = []
                }
                , 10)
            }
              , k = ()=>{
                r.value += 1,
                C()
            }
              , w = Q=>{
                var se, L, re, Ve, Ze, Se;
                S(i) > 20 || c.user && t.value && S(l) && (c.user.energy < c.user.earn_per_tap || (c.user.balance + (((se = c.user) == null ? void 0 : se.earn_per_tap) ?? 0) >= (((L = c.user) == null ? void 0 : L.next_league.must_reach_balance) ?? 0) && c.user.current_league < c.leagues.length - 1 && (c.setLevelInfo({
                    currentLevelName: ((re = c.user) == null ? void 0 : re.league.name) ?? "",
                    currentLevelSrc: `/img/level/rabbit-${(((Ve = c.user) == null ? void 0 : Ve.current_league) ?? 0) + 1}.png`,
                    nextLevelName: ((Ze = c.user) == null ? void 0 : Ze.next_league.name) ?? "",
                    nextLevelSrc: `/img/level/rabbit-${(((Se = c.user) == null ? void 0 : Se.current_league) ?? 0) + 2}.png`
                }),
                n.value = !0),
                c.mineCoins(),
                k(),
                M(Q),
                S(h) && f.impactOccurred("light"),
                t.value.style.transform = "scale(0.98)",
                i.value += 1))
            }
              , U = ()=>{
                t.value && (t.value.style.transform = "scale(1)")
            }
              , G = Cm()
              , I = ye(()=>S(s) > 10 ? 1 : S(s) / 10);
            Ib(r, async()=>{
                S(r) !== 0 && (a(r.value),
                r.value = 0)
            }
            , {
                debounce: 300
            });
            const j = fe(!1)
              , D = Q=>{
                j.value = Q
            }
              , R = fe("/img/level/rabbit-1.png");
            return ht(()=>{
                var Q;
                return (Q = c.user) == null ? void 0 : Q.current_league
            }
            , Q=>{
                j.value = !1,
                R.value = `/img/level/rabbit-${(Q ?? 0) + 1}.png`
            }
            , {
                immediate: !0
            }),
            zb(()=>{
                i.value = 0
            }
            , 1e3),
            (Q,se)=>(E(),
            ve(Ai, {
                class: "p-page"
            }, {
                default: ie(()=>[Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[n.value ? (E(),
                    ve(m6, lo(At({
                        key: 0
                    }, {
                        closeCallback: v
                    })), null, 16)) : ut("", !0)]),
                    _: 1
                }), Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[d.value ? (E(),
                    ve(r6, lo(At({
                        key: 0
                    }, {
                        amount: S(c).passiveIncome,
                        closeCallback: g
                    })), null, 16)) : ut("", !0)]),
                    _: 1
                }), m("section", g6, [m("div", {
                    class: "bg-bondex-white/50 pointer-events-none fixed top-[40%] h-[313px] w-[197px] translate-x-[-70%] rounded-full blur-3xl transition-all duration-300",
                    style: pn({
                        opacity: I.value
                    })
                }, null, 4), m("div", {
                    class: "bg-bondex-white/50 pointer-events-none fixed right-0 top-[70%] h-[313px] w-[197px] blur-3xl transition-all duration-300",
                    style: pn({
                        opacity: I.value
                    })
                }, null, 4), m("div", y6, [Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[s.value ? (E(),
                    V("img", {
                        key: 0,
                        src: dm,
                        alt: "lines",
                        class: "absolute w-full transition-all duration-300",
                        style: pn({
                            opacity: I.value
                        })
                    }, null, 4)) : ut("", !0)]),
                    _: 1
                }), Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[s.value >= 5 ? (E(),
                    V("img", {
                        key: 0,
                        src: qu,
                        alt: "extra-lines",
                        class: "absolute w-full transition-all duration-300",
                        style: pn({
                            opacity: I.value
                        })
                    }, null, 4)) : ut("", !0)]),
                    _: 1
                })]), Z(H4, {
                    class: "relative z-10"
                }), m("div", v6, [m("div", {
                    ref_key: "coinRef",
                    ref: t,
                    class: le(["absolute h-full w-full select-none", {
                        "pointer-events-none": !S(c).user
                    }]),
                    onMousedown: jr(w, ["prevent"]),
                    onTouchstart: jr(w, ["prevent"]),
                    onMouseup: jr(U, ["prevent"]),
                    onMouseleave: jr(U, ["prevent"]),
                    onTouchend: jr(U, ["prevent"]),
                    onTouchmove: se[1] || (se[1] = jr(()=>{}
                    , ["prevent"])),
                    style: {
                        "touch-action": "manipulation"
                    }
                }, [m("div", {
                    class: le(["bg-bondex-green/70 pointer-events-none blur-xl absolute left-[50%] top-[50%] aspect-square w-[270px] translate-x-[-50%] translate-y-[-45%] rounded-full transition-all duration-300", {
                        "opacity-0": s.value
                    }])
                }, null, 2), m("div", {
                    class: le(["bg-bondex-white/70 opacity-0 pointer-events-none absolute left-[50%] top-[50%] aspect-square w-[270px] translate-x-[-50%] translate-y-[-45%] rounded-full blur-xl transition-all duration-300", {
                        "opacity-100": s.value
                    }])
                }, null, 2), Z(Ua, {
                    onOnLogoLoad: se[0] || (se[0] = L=>D(!0)),
                    src: R.value,
                    class: le(["absolute left-[50%] top-[50%] w-full max-w-[318px] translate-x-[-47%] translate-y-[-60%] opacity-0 transition-all duration-300", {
                        "opacity-100": j.value
                    }])
                }, null, 8, ["src", "class"])], 34)]), m("div", b6, [Z(Or, {
                    class: "flex h-10 w-full max-w-[120px] items-center justify-center gap-1 rounded-lg"
                }, {
                    default: ie(()=>{
                        var L, re;
                        return [w6, m("p", null, he(`${((L = S(c).user) == null ? void 0 : L.energy) ?? 0}/${(re = S(c).user) == null ? void 0 : re.max_energy}`), 1)]
                    }
                    ),
                    _: 1
                }), Z(Or, {
                    class: "flex h-10 px-3 items-center justify-center gap-1 rounded-lg"
                }, {
                    default: ie(()=>[Z(_6, {
                        modelValue: h.value,
                        "onUpdate:modelValue": [se[2] || (se[2] = L=>h.value = L), se[3] || (se[3] = L=>S(c).setVibro(h.value))]
                    }, null, 8, ["modelValue"]), x6]),
                    _: 1
                }), m("button", {
                    class: "to-bondex-dark/50 max-w-[100px] z-10 from-bondex-green/50 flex h-10 w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-b shadow-card",
                    onClick: se[4] || (se[4] = L=>S(G).push({
                        path: "/boosts"
                    }))
                }, S6)]), Z(Dv, {
                    name: "to-top"
                }, {
                    default: ie(()=>[(E(!0),
                    V(qe, null, xt(o.value, L=>{
                        var re;
                        return E(),
                        V("div", {
                            key: L.x,
                            style: pn(`left: ${L.x}px; top: ${L.y}px;`),
                            class: "text-40-bold pointer-events-none fixed text-bondex-white select-none"
                        }, he(`+${(re = S(c).user) == null ? void 0 : re.earn_per_tap}`), 5)
                    }
                    ), 128))]),
                    _: 1
                })])]),
                _: 1
            }))
        }
    })
      , E6 = {
        class: "flex gap-2 relative"
    }
      , C6 = {
        class: "w-full shadow-card text-bondex-white text-12"
    }
      , T6 = ["value", "id"]
      , R6 = ["for"]
      , P6 = Pe({
        __name: "GroupButton",
        props: {
            options: {},
            modelValue: {}
        },
        emits: ["update:modelValue"],
        setup(e, {emit: t}) {
            const n = e
              , s = t
              , r = ye({
                get: ()=>n.modelValue,
                set: i=>s("update:modelValue", i)
            });
            return (i,o)=>(E(),
            V("div", E6, [(E(!0),
            V(qe, null, xt(n.options, (a,l)=>(E(),
            V("div", C6, [Da(m("input", {
                name: "groupButton",
                value: a.value,
                id: a.value,
                type: "radio",
                class: "hidden",
                "onUpdate:modelValue": o[0] || (o[0] = u=>r.value = u)
            }, null, 8, T6), [[jv, r.value]]), m("label", {
                for: a.value,
                class: le(["transition-all duration-300 flex justify-center py-3 bg-bondex-dark/50 rounded-lg text-12 backdrop-blur-sm", {
                    "bg-gradient-to-b to-bondex-dark/50 from-bondex-green/50 text-12-bold": r.value === a.value
                }])
            }, he(a.title), 11, R6)]))), 256))]))
        }
    })
      , A6 = e=>(ds("data-v-831082ec"),
    e = e(),
    hs(),
    e)
      , $6 = {
        class: "w-[96px] h-[96px] rounded overflow-hidden mb-4"
    }
      , D6 = ["src"]
      , L6 = {
        class: "flex flex-col gap-1 items-center text-center mb-4"
    }
      , z6 = {
        class: "text-10-bold text-bondex-black py-1 px-2 bg-bondex-white rounded-2xl"
    }
      , N6 = {
        class: "text-24-bold"
    }
      , I6 = {
        class: "text-12"
    }
      , F6 = {
        key: 0,
        class: "flex flex-col gap-1 text-12-bold items-center mb-4"
    }
      , j6 = A6(()=>m("p", {
        class: "text-bondex-green"
    }, "Profit per hour", -1))
      , U6 = {
        class: "flex items-center gap-1"
    }
      , q6 = {
        class: "w-4 h-4"
    }
      , B6 = {
        key: 1,
        class: "flex items-center gap-2 mb-5"
    }
      , V6 = {
        class: "w-8 h-8"
    }
      , H6 = {
        class: "text-40-bold"
    }
      , W6 = {
        class: "w-full max-w-[167px] mx-auto mb-[60px]"
    }
      , Y6 = {
        class: "h-[210px] flex items-end relative"
    }
      , Z6 = {
        class: "flex flex-col"
    }
      , K6 = {
        class: "text-bondex-white text-10-bold"
    }
      , G6 = {
        class: "text-bondex-white text-10"
    }
      , Q6 = {
        class: "max-w-[140px] mb-4 mt-auto"
    }
      , J6 = {
        class: "absolute top-0 left-[50%] translate-x-[-50%]"
    }
      , X6 = {
        class: "h-[96px] w-[96px] rounded overflow-hidden"
    }
      , eO = ["src"]
      , tO = {
        class: "flex items-center gap-1 absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]"
    }
      , nO = {
        class: "text-10-bold text-bondex-black py-1 px-2 bg-bondex-white rounded-2xl whitespace-nowrap"
    }
      , sO = {
        class: "text-10-bold text-bondex-black py-1 px-2 bg-bondex-white rounded-2xl whitespace-nowrap"
    }
      , rO = Pe({
        __name: "Card",
        props: {
            id: {},
            name: {},
            cost: {},
            profit: {},
            nextCardAvailable: {
                type: Boolean
            },
            nextLevelProfit: {},
            src: {},
            description: {},
            level: {},
            category: {}
        },
        setup(e) {
            const t = e
              , {src: n} = pl(t)
              , s = fe(!1)
              , r = ()=>{
                s.value = !1
            }
              , i = ()=>{
                s.value = !0
            }
              , {mutateAsync: o, isPending: a} = O3()
              , l = on()
              , u = async v=>{
                await o(v),
                s.value = !1
            }
              , c = fe(!1)
              , f = fe(!1)
              , d = v=>{
                c.value = !0
            }
              , h = ()=>{
                f.value = !0
            }
              , g = ye(()=>{
                switch (t.category.toLowerCase()) {
                case "hard skills":
                    return "background: linear-gradient(180deg, #001126 0%, #015847 100%)";
                case "soft skills":
                    return "background: linear-gradient(180deg, #001126 0%, #014D58 100%)";
                case "knowledge":
                    return "background: linear-gradient(180deg, #001126 0%, #410158 100%)";
                case "experience":
                    return "background: linear-gradient(180deg, #001126 0%, #580101 100%)";
                default:
                    return "background: linear-gradient(180deg, #001126 0%, #015847 100%)"
                }
            }
            );
            return (v,C)=>{
                var M;
                return E(),
                V("div", null, [Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[s.value ? (E(),
                    ve(Hl, {
                        key: 0,
                        "close-callback": r
                    }, {
                        default: ie(()=>{
                            var k;
                            return [m("div", $6, [m("img", {
                                onLoad: d,
                                src: S(n),
                                alt: "img",
                                class: le(["h-full w-full object-cover opacity-0 transition-all duration-300", {
                                    "opacity-100": c.value
                                }])
                            }, null, 42, D6)]), m("div", L6, [m("div", z6, he(`Level ${t.level}`), 1), m("p", N6, he(t.name), 1), m("p", I6, he(t.description), 1)]), t.nextCardAvailable ? (E(),
                            V("div", F6, [j6, m("div", U6, [m("div", q6, [m("img", {
                                onLoad: h,
                                src: Bn,
                                alt: "bondex_coin",
                                class: le(["w-full h-full transition-all duration-300 opacity-0", {
                                    "opacity-100": f.value
                                }])
                            }, null, 34)]), m("p", null, he(`+ ${t.nextLevelProfit}`), 1)])])) : ut("", !0), t.nextCardAvailable ? (E(),
                            V("div", B6, [m("div", V6, [m("img", {
                                onLoad: h,
                                src: Bn,
                                alt: "bondex_coin",
                                class: le(["w-full h-full transition-all duration-300 opacity-0", {
                                    "opacity-100": f.value
                                }])
                            }, null, 34)]), m("p", H6, he(S($r)(t.cost)), 1)])) : ut("", !0), m("div", W6, [t.nextCardAvailable ? Number(t.cost) > (((k = S(l).user) == null ? void 0 : k.balance) ?? 0) ? (E(),
                            ve(Yt, {
                                key: 1,
                                green: "",
                                class: "w-full !h-[39px] !rounded-[60px]",
                                disabled: ""
                            }, {
                                default: ie(()=>{
                                    var w;
                                    return [ct(he(`Need ${Number(t.cost) - (((w = S(l).user) == null ? void 0 : w.balance) ?? 0)}`), 1)]
                                }
                                ),
                                _: 1
                            })) : (E(),
                            ve(Yt, {
                                key: 2,
                                onClick: C[0] || (C[0] = w=>u(t.id)),
                                green: "",
                                class: "w-full !h-[39px] !rounded-[60px]",
                                loading: S(a)
                            }, {
                                default: ie(()=>[ct(he(S(a) ? "Loading..." : "Buy"), 1)]),
                                _: 1
                            }, 8, ["loading"])) : (E(),
                            ve(Yt, {
                                key: 0,
                                green: "",
                                class: "w-full !h-[39px] !rounded-[60px]",
                                disabled: ""
                            }, {
                                default: ie(()=>[ct(" Max Lvl ")]),
                                _: 1
                            }))])]
                        }
                        ),
                        _: 1
                    })) : ut("", !0)]),
                    _: 1
                }), m("div", Y6, [m("div", {
                    class: "h-[200px] pt-[104px] w-full rounded-lg backdrop-blur-[2px] gap-2 flex flex-col items-center relative text-center px-1",
                    style: pn(g.value)
                }, [m("div", Z6, [m("p", K6, he(t.name), 1), m("p", G6, he(t.description), 1)]), m("div", Q6, [Number(t.cost) > (((M = S(l).user) == null ? void 0 : M.balance) ?? 0) ? (E(),
                ve(Yt, {
                    key: 0,
                    onClick: i,
                    dark: "",
                    class: "w-full"
                }, {
                    default: ie(()=>[ct(" Not enough coins ")]),
                    _: 1
                })) : (E(),
                ve(Yt, {
                    key: 1,
                    onClick: i,
                    dark: "",
                    class: "w-full"
                }, {
                    default: ie(()=>[ct(he(`Buy for ${S(zn)(Number(t.cost))}`), 1)]),
                    _: 1
                }))])], 4), m("div", J6, [m("div", X6, [m("img", {
                    onLoad: d,
                    src: S(n),
                    alt: "img",
                    class: le(["h-full w-full object-cover opacity-0 transition-all duration-300", {
                        "opacity-100": c.value
                    }])
                }, null, 42, eO)]), m("div", tO, [m("div", nO, he(`Level ${t.level}`), 1), m("div", sO, he(`${t.profit} / hour`), 1)])])])])
            }
        }
    })
      , iO = cn(rO, [["__scopeId", "data-v-831082ec"]])
      , oO = {
        class: "relative"
    }
      , aO = {
        key: 0,
        class: "grid scroll grid-cols-2 gap-3 w-full h-full left-0"
    }
      , lO = {
        key: 1,
        class: "grid scroll grid-cols-2 auto-rows-[210px] gap-3 w-full h-full left-0"
    }
      , cO = Pe({
        __name: "Earn",
        setup(e) {
            const t = fe(null)
              , {arrivedState: n} = Ko(t)
              , s = [{
                title: "Hard Skills",
                value: "Hard Skills"
            }, {
                title: "Soft Skills",
                value: "Soft Skills"
            }, {
                title: "Knowledge",
                value: "Knowledge"
            }, {
                title: "Experience",
                value: "Experience"
            }]
              , r = fe("Hard Skills")
              , {cards: i, isPending: o} = w3(r);
            return (a,l)=>{
                const u = $u("SkeletonLoader");
                return E(),
                ve(Ai, {
                    class: "p-page"
                }, {
                    default: ie(()=>[m("section", {
                        ref_key: "scrollable",
                        ref: t,
                        class: "flex h-full w-full flex-grow flex-col gap-4 overflow-y-auto max-h-full px-4"
                    }, [m("div", {
                        class: le(["earn-gradient fixed left-0 z-10 h-[30%] bottom-0 w-full pointer-events-none transition-all duration-300", {
                            "invisible opacity-0 h-[0%]": S(n).bottom
                        }])
                    }, null, 2), Z(H4, {
                        class: "relative z-10"
                    }), Z(P6, {
                        modelValue: r.value,
                        "onUpdate:modelValue": l[0] || (l[0] = c=>r.value = c),
                        options: s,
                        class: "sticky top-0 z-10"
                    }, null, 8, ["modelValue"]), m("div", oO, [Z(wt, {
                        name: "fade",
                        mode: "out-in"
                    }, {
                        default: ie(()=>[S(o) ? (E(),
                        V("div", lO, [(E(!0),
                        V(qe, null, xt(Array(6).keys(), c=>(E(),
                        ve(u, {
                            class: "w-full h-full custom-loader shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2px] rounded-lg"
                        }))), 256))])) : (E(),
                        V("div", aO, [(E(!0),
                        V(qe, null, xt(S(i), c=>(E(),
                        ve(iO, At({
                            key: c.id,
                            ref_for: !0
                        }, c), null, 16))), 128))]))]),
                        _: 1
                    })])], 512)]),
                    _: 1
                })
            }
        }
    })
      , uO = "/img/share.png"
      , fO = "/img/copy.png"
      , dO = "/img/friends/inviteTelegram.png"
      , hO = "/img/friends/inviteTelegramPremium.png"
      , pO = m("h3", {
        class: "text-bondex-white text-24-bold mb-1"
    }, "Invite friends", -1)
      , mO = m("p", {
        class: "text-bondex-white text-12 mb-4"
    }, " You and your friends will receive bonuses ", -1)
      , _O = m("div", {
        class: "flex gap-2 w-full justify-between"
    }, [m("div", {
        class: "p-2 flex justify-between bg-bondex-dark/70 rounded-[16px] w-full relative shadow-card"
    }, [m("div", {
        class: "h-full flex flex-col justify-between gap-2"
    }, [m("h4", {
        class: "text-bondex-white text-12-bold text-start"
    }, "Invite a friend"), m("div", {
        class: "flex flex-col"
    }, [m("p", {
        class: "flex items-center gap-[2px]"
    }, [m("img", {
        src: Bn,
        alt: "coin_logo",
        class: "w-2 h-2 shrink-0"
    }), m("span", {
        class: "text-12-bold text-bondex-green"
    }, "10 000")]), m("p", {
        class: "text-bondex-white text-10"
    }, "for you and friends")])]), m("img", {
        src: dO,
        alt: "invite_telegram",
        class: "absolute w-12 right-0 top-[50%] translate-y-[-50%] opacity-50 translate-x-[-10%]"
    })]), m("div", {
        class: "p-2 flex justify-between bg-bondex-dark/70 rounded-[16px] relative w-full shadow-card"
    }, [m("div", {
        class: "h-full flex flex-col gap-2"
    }, [m("h4", {
        class: "text-bondex-white text-12-bold text-start"
    }, [ct(" Invite a friend "), m("br"), ct(" with Telegram "), m("br"), ct(" Premium ")]), m("div", {
        class: "flex flex-col"
    }, [m("p", {
        class: "flex items-center gap-[2px]"
    }, [m("img", {
        src: Bn,
        alt: "coin_logo",
        class: "w-2 h-2 shrink-0"
    }), m("span", {
        class: "text-12-bold text-bondex-green"
    }, "25 000")]), m("p", {
        class: "text-bondex-white text-10"
    }, "for you and friends")])]), m("img", {
        src: hO,
        alt: "invite_telegram_premium",
        class: "absolute w-12 right-0 top-[50%] translate-y-[-50%] opacity-50"
    })])], -1)
      , gO = Pe({
        __name: "InviteFriends",
        setup(e) {
            return (t,n)=>(E(),
            ve(Or, {
                class: "flex flex-col p-4"
            }, {
                default: ie(()=>[pO, mO, _O]),
                _: 1
            }))
        }
    })
      , yO = {
        class: "w-full h-[106px] flex items-center justify-center"
    }
      , vO = {
        class: "text-bondex-white text-center"
    }
      , bO = {
        class: "flex gap-2 mb-4"
    }
      , wO = m("div", {
        class: "flex items-center gap-1"
    }, [m("span", null, [m("img", {
        src: uO,
        class: "h-4 w-4 shrink-0"
    })]), m("span", null, "Share link")], -1)
      , xO = {
        class: "flex items-center gap-1"
    }
      , MO = m("span", null, [m("img", {
        src: fO,
        class: "h-4 w-4 shrink-0"
    })], -1)
      , kO = {
        key: 0,
        class: "grid grid-cols-[auto,4fr,1fr] gap-x-4 gap-y-2 w-full"
    }
      , SO = m("div", {
        class: "contents text-bondex-white text-10 uppercase"
    }, [m("p", {
        class: "mb-4"
    }, "#"), m("p", null, "Username"), m("p", {
        class: "justify-self-end"
    }, "Reward")], -1)
      , OO = {
        class: "contents text-15 text-bondex-white"
    }
      , EO = {
        class: "justify-self-end"
    }
      , CO = Pe({
        __name: "Friends",
        setup(e) {
            const t = fe(null)
              , {arrivedState: n} = Ko(t)
              , s = on()
              , {friends: r, isPending: i} = y3()
              , o = Hm()
              , a = ()=>{
                var f;
                o.openTelegramLink(((f = S(r)) == null ? void 0 : f.friend_link) ?? "")
            }
              , {copy: l, copied: u} = qb()
              , c = ye(()=>{
                if (!s.user)
                    return 0;
                if (!s.user.next_league)
                    return 100;
                const f = s.user.balance / s.user.next_league.must_reach_balance * 100;
                return f >= 100 ? 100 : f
            }
            );
            return (f,d)=>(E(),
            ve(Ai, {
                class: "p-page"
            }, {
                default: ie(()=>{
                    var h, g, v, C;
                    return [m("section", {
                        ref_key: "scrollable",
                        ref: t,
                        class: "flex h-full w-full flex-grow flex-col max-h-full overflow-auto px-4"
                    }, [(((h = S(r)) == null ? void 0 : h.friends_count) ?? 0) > 1 ? (E(),
                    V("div", {
                        key: 0,
                        class: le(["earn-gradient fixed left-0 z-10 h-[30%] bottom-0 w-full pointer-events-none transition-all duration-300", {
                            "invisible opacity-0 h-[0%]": S(n).bottom
                        }])
                    }, null, 2)) : ut("", !0), Z(Vl, {
                        progress: c.value,
                        currentLeague: (g = S(s).user) == null ? void 0 : g.league.name,
                        leagueProgress: (((v = S(s).user) == null ? void 0 : v.current_league) ?? 0) + 1 + "/" + ((C = S(s).user) == null ? void 0 : C.total_leagues),
                        class: "mb-4"
                    }, {
                        default: ie(()=>{
                            var M, k;
                            return [m("div", yO, [m("h2", vO, he(`${((M = S(r)) == null ? void 0 : M.friends_count) ?? 0} FRIEND${(((k = S(r)) == null ? void 0 : k.friends_count) ?? 0) > 1 ? "S" : ""}`), 1)])]
                        }
                        ),
                        _: 1
                    }, 8, ["progress", "currentLeague", "leagueProgress"]), Z(gO, {
                        class: "mb-4"
                    }), m("div", bO, [Z(Yt, {
                        onClick: a,
                        share: "",
                        loading: S(i)
                    }, {
                        default: ie(()=>[wO]),
                        _: 1
                    }, 8, ["loading"]), Z(Yt, {
                        onClick: d[0] || (d[0] = M=>{
                            var k;
                            return S(l)(((k = S(r)) == null ? void 0 : k.copy_link) ?? "")
                        }
                        ),
                        share: "",
                        loading: S(i)
                    }, {
                        default: ie(()=>[m("div", xO, [MO, m("span", null, he(S(u) ? "Copied" : "Copy link"), 1)])]),
                        _: 1
                    }, 8, ["loading"])]), Z(wt, {
                        name: "fade"
                    }, {
                        default: ie(()=>{
                            var M;
                            return [(M = S(r)) != null && M.friends_count ? (E(),
                            V("div", kO, [SO, (E(!0),
                            V(qe, null, xt(S(r).friends, (k,w)=>(E(),
                            V("div", OO, [m("p", null, he((w + 1).toString().padStart(2, "0")), 1), m("p", null, he(k.identity), 1), m("p", EO, he(`+${k.reward}`), 1)]))), 256))])) : ut("", !0)]
                        }
                        ),
                        _: 1
                    })], 512)]
                }
                ),
                _: 1
            }))
        }
    })
      , TO = e=>(ds("data-v-0575caca"),
    e = e(),
    hs(),
    e)
      , RO = {
        class: "flex items-center gap-2"
    }
      , PO = {
        class: "w-8 h-8 rounded overflow-hidden shrink-0 bg-bondex-white"
    }
      , AO = ["src"]
      , $O = {
        class: "flex flex-col justify-between gap-1"
    }
      , DO = {
        class: "text-bondex-white text-12-bold"
    }
      , LO = {
        key: 0,
        class: "text-bondex-green text-10-bold"
    }
      , zO = {
        key: 1,
        class: "flex items-center gap-1"
    }
      , NO = TO(()=>m("img", {
        src: Bn,
        alt: "bondex_coin",
        class: "w-2 h-2 shrink-0"
    }, null, -1))
      , IO = {
        class: "text-bondex-green text-10-bold"
    }
      , FO = Pe({
        __name: "QuestItem",
        props: {
            title: {},
            profit: {},
            img: {},
            complited: {
                type: Boolean
            },
            disabled: {
                type: Boolean
            },
            highlighted: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", {
                class: le(["w-full p-4 rounded-[8px] flex items-center justify-between backdrop-blur-[2px] bg-gradient-to-r from-50% from-bondex-dark/50 to-bondex-dark-green/50 transition-all duration-300", {
                    "opacity-50": t.disabled,
                    "!to-bondex-white/25": t.highlighted
                }])
            }, [m("div", RO, [m("div", PO, [m("img", {
                src: t.img ?? "/img/bondexCoin.png",
                class: "w-full h-full object-cover",
                alt: "quest_item_img"
            }, null, 8, AO)]), m("div", $O, [m("h4", DO, he(t.title), 1), t.complited ? (E(),
            V("p", LO, "Completed")) : (E(),
            V("div", zO, [NO, m("p", IO, he("+" + S($r)(t.profit)), 1)]))])]), Lr(n.$slots, "default", {}, void 0, !0)], 2))
        }
    })
      , _c = cn(FO, [["__scopeId", "data-v-0575caca"]])
      , jO = ["disabled", "type"]
      , UO = {
        key: 0,
        class: "flex items-center justify-center"
    }
      , qO = m("div", {
        class: "animate-spin rounded-full border-t-2 border-r-2 border-white border-solid h-[1em] w-[1em]"
    }, null, -1)
      , BO = [qO]
      , gc = Pe({
        __name: "QuestButton",
        props: {
            type: {},
            disabled: {
                type: Boolean
            },
            isLoading: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("button", {
                class: le(["flex h-[28px] justify-center items-center gap-1 bg-bondex-dark shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] px-4 py-1.5 rounded-[16px] disabled:opacity-50", "text-bondex-white text-12-bold"]),
                disabled: t.disabled,
                type: t.type
            }, [n.isLoading ? (E(),
            V("div", UO, BO)) : Lr(n.$slots, "default", {
                key: 1
            })], 8, jO))
        }
    })
      , VO = "/img/dailyReward/big-calendar.png"
      , HO = {
        class: "text-bondex-white text-center text-12"
    }
      , WO = {
        key: 0,
        class: "text-10 text-bondex-white p-1 bg-bondex-daily-green border border-bondex-daily-dark rounded-xl"
    }
      , YO = {
        key: 1,
        src: Bn,
        alt: "bondex_coin",
        class: "w-6 h-6 shrink-0"
    }
      , ZO = {
        class: "text-bondex-green text-center text-12-bold"
    }
      , KO = Pe({
        __name: "DailyItem",
        props: {
            dayNumber: {},
            reward: {},
            available: {
                type: Boolean
            },
            collected: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", {
                class: le(["rounded-[8px] w-full h-full flex flex-col p-[6px] items-center justify-between daily_item", {
                    gr: t.available,
                    "bg-bondex-dark/50": !t.available
                }])
            }, [m("p", HO, "Day " + he(t.dayNumber), 1), t.collected ? (E(),
            V("div", WO, " Collected ")) : (E(),
            V("img", YO)), m("p", ZO, he(S(zn)(t.reward)), 1)], 2))
        }
    })
      , GO = cn(KO, [["__scopeId", "data-v-157519ab"]])
      , Y4 = e=>(ds("data-v-cd6af99c"),
    e = e(),
    hs(),
    e)
      , QO = Y4(()=>m("h2", {
        class: "text-bondex-white text-center text-24-bold mb-1"
    }, "Daily Reward", -1))
      , JO = Y4(()=>m("p", {
        class: "text-bondex-white text-12 text-center"
    }, [ct(" Collect your daily rewards by clicking "), m("br"), ct(" on the button below ")], -1))
      , XO = {
        class: "mb-[60px] z-10 w-full"
    }
      , eE = Pe({
        __name: "DailyRewards",
        props: {
            dailyBonuses: {},
            loading: {
                type: Boolean
            }
        },
        emits: ["collectReward"],
        setup(e, {emit: t}) {
            const n = e
              , s = fe(null)
              , {arrivedState: r} = Ko(s);
            Fb(()=>n.dailyBonuses, ()=>{
                r.bottom = !1
            }
            );
            const i = t
              , o = fe(!1)
              , a = l=>{
                o.value = !0
            }
            ;
            return (l,u)=>(E(),
            ve(Or, {
                class: "flex h-full w-full flex-grow flex-col pt-12 px-4 rounded-b-none"
            }, {
                default: ie(()=>[m("div", {
                    class: le(["earn-gradient fixed left-0 z-10 h-[30%] bottom-0 w-full pointer-events-none transition-all duration-300", {
                        "invisible opacity-0 h-[0%]": S(r).bottom
                    }])
                }, null, 2), m("div", {
                    class: le(["h-[96px] w-[96px] mx-auto mb-4 opacity-0 transition-all duration-300", {
                        "opacity-100": o.value
                    }])
                }, [m("img", {
                    onLoad: a,
                    src: VO,
                    alt: "daily_reward",
                    class: "w-full h-full"
                }, null, 32)], 2), QO, JO, m("div", {
                    class: le(["flex h-full w-full flex-grow relative mt-8 px-4", {
                        "mb-2": S(r).bottom
                    }])
                }, [m("div", {
                    ref_key: "scrollable",
                    ref: s,
                    class: "grid grid-cols-4 gap-2 auto-rows-[80px] overflow-y-auto max-h-full w-full h-full absolute left-0"
                }, [(E(!0),
                V(qe, null, xt(n.dailyBonuses.bonuses, c=>(E(),
                ve(GO, At({
                    ref_for: !0
                }, {
                    dayNumber: c.id,
                    reward: c.reward,
                    available: c.claimed || n.dailyBonuses.has_available && c.current,
                    collected: c.claimed
                }), null, 16))), 256))], 512)], 2), m("div", XO, [Z(Yt, {
                    onClick: u[0] || (u[0] = c=>i("collectReward")),
                    loading: n.loading,
                    green: "",
                    class: "w-[167px] max-w-[167px] !h-[39px] !rounded-[60px] mx-auto"
                }, {
                    default: ie(()=>[ct(he(n.dailyBonuses.has_available ? "Collect" : "Close"), 1)]),
                    _: 1
                }, 8, ["loading"])])]),
                _: 1
            }))
        }
    })
      , tE = cn(eE, [["__scopeId", "data-v-cd6af99c"]])
      , nE = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "12",
        fill: "none"
    }
      , sE = m("path", {
        fill: "#fff",
        d: "M16.53 6.53a.75.75 0 0 0 0-1.06L11.757.697a.75.75 0 0 0-1.06 1.06L14.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6.75h16v-1.5H0z"
    }, null, -1)
      , rE = [sE];
    function iE(e, t) {
        return E(),
        V("svg", nE, [...rE])
    }
    const yc = {
        render: iE
    }
      , oE = {
        class: "flex flex-col gap-2 mb-6"
    }
      , aE = {
        class: "w-full flex flex-col items-center justify-center h-[106px]"
    }
      , lE = {
        class: "text-bondex-white text-center"
    }
      , cE = m("p", {
        class: "text-bondex-white text-center text-12"
    }, "available", -1)
      , uE = {
        class: "flex flex-grow flex-col relative gap-8"
    }
      , fE = {
        class: "flex flex-col gap-3"
    }
      , dE = m("h4", {
        class: "text-15 text-bondex-white"
    }, "Highlighted tasks", -1)
      , hE = {
        class: "flex flex-col gap-[6px] w-full"
    }
      , pE = {
        key: 0,
        class: "flex flex-col gap-3"
    }
      , mE = m("h4", {
        class: "text-15 text-bondex-white"
    }, "Main tasks", -1)
      , _E = {
        class: "flex flex-col gap-[6px] w-full"
    }
      , gE = {
        key: 1,
        class: "flex flex-col gap-1 text-bondex-white items-center my-auto"
    }
      , yE = m("p", {
        class: "text-24-bold"
    }, "No available tasks", -1)
      , vE = m("p", {
        class: "text-12"
    }, "Come back later", -1)
      , bE = [yE, vE]
      , wE = Pe({
        __name: "Quests",
        setup(e) {
            const t = fe(!1)
              , n = fe(null)
              , {arrivedState: s} = Ko(n)
              , {channels: r} = b3()
              , {bonuses: i} = v3()
              , {mutateAsync: o, isPending: a} = S3()
              , {mutate: l} = E3()
              , u = on()
              , c = Hm()
              , f = async()=>{
                var w;
                (w = S(i)) != null && w.has_available && await o(),
                t.value = !1
            }
              , d = ()=>t.value = !0
              , h = w=>{
                if (w.is_available = !1,
                w.quest_type === pu.PARTNERS && w.invite_link.startsWith("https://t.me")) {
                    c.openTelegramLink(w.invite_link),
                    w.is_available && l(w.id);
                    return
                }
                if (w.quest_type === pu.TG) {
                    c.openTelegramLink(w.invite_link);
                    return
                }
                c.openLink(w.invite_link),
                w.is_available && l(w.id)
            }
              , g = ye(()=>{
                var w;
                if (S(r))
                    return (w = S(r)) == null ? void 0 : w.filter(U=>U.is_available).length
            }
            )
              , v = ye(()=>{
                var U, G, I;
                const w = (U = S(i)) == null ? void 0 : U.bonuses.find(j=>j.current === !0);
                return (G = S(i)) != null && G.has_available ? w : (I = S(i)) == null ? void 0 : I.bonuses.find(j=>j.id === ((w == null ? void 0 : w.id) ?? 0) - 1)
            }
            )
              , C = ye(()=>{
                var w;
                if (S(r))
                    return (w = S(r)) == null ? void 0 : w.filter(U=>U.is_highlighted)
            }
            )
              , M = ye(()=>{
                var w;
                if (S(r))
                    return (w = S(r)) == null ? void 0 : w.filter(U=>!U.is_highlighted)
            }
            )
              , k = ye(()=>{
                if (!u.user)
                    return 0;
                if (!u.user.next_league)
                    return 100;
                const w = u.user.balance / u.user.next_league.must_reach_balance * 100;
                return w >= 100 ? 100 : w
            }
            );
            return (w,U)=>(E(),
            ve(Ai, {
                class: le(["p-page", {
                    "pb-0 px-4": t.value
                }]),
                noMenu: t.value
            }, {
                default: ie(()=>[Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[t.value ? (E(),
                    ve(tE, {
                        key: 0,
                        dailyBonuses: S(i) ?? {},
                        loading: S(a),
                        onCollectReward: f,
                        class: "absolute z-50"
                    }, null, 8, ["dailyBonuses", "loading"])) : ut("", !0)]),
                    _: 1
                }), Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>{
                        var G, I, j, D;
                        return [m("section", {
                            ref_key: "scrollable",
                            ref: n,
                            class: le(["flex h-full w-full flex-grow flex-col px-4 max-h-full overflow-auto transition-all duration-300", {
                                "opacity-0": t.value
                            }])
                        }, [m("div", {
                            class: le(["earn-gradient fixed left-0 z-10 h-[30%] bottom-0 w-full pointer-events-none transition-all duration-300", {
                                "invisible opacity-0 h-[0%]": S(s).bottom
                            }])
                        }, null, 2), m("div", oE, [Z(Vl, {
                            progress: k.value,
                            currentLeague: (G = S(u).user) == null ? void 0 : G.league.name,
                            leagueProgress: (((I = S(u).user) == null ? void 0 : I.current_league) ?? 0) + 1 + "/" + ((j = S(u).user) == null ? void 0 : j.total_leagues)
                        }, {
                            default: ie(()=>[m("div", aE, [m("h2", lE, he(g.value ?? 0) + " TASKS ", 1), cE])]),
                            _: 1
                        }, 8, ["progress", "currentLeague", "leagueProgress"])]), m("div", uE, [m("div", fE, [dE, m("div", hE, [Z(_c, lo(Jp({
                            title: "Daily reward",
                            profit: ((D = v.value) == null ? void 0 : D.reward) ?? 0,
                            img: "/img/dailyReward/calendar.png",
                            highlighted: !0
                        })), {
                            default: ie(()=>[Z(gc, {
                                onClick: d
                            }, {
                                default: ie(()=>[Z(S(yc))]),
                                _: 1
                            })]),
                            _: 1
                        }, 16), (E(!0),
                        V(qe, null, xt(C.value, R=>(E(),
                        ve(_c, At({
                            key: R.id,
                            ref_for: !0
                        }, {
                            title: R.title,
                            profit: R.reward,
                            img: `/img/quests/${R.quest_type}.png`,
                            highlighted: R.is_highlighted,
                            complited: !R.is_available
                        }), {
                            default: ie(()=>[Z(gc, {
                                onClick: Q=>h(R)
                            }, {
                                default: ie(()=>[Z(S(yc))]),
                                _: 2
                            }, 1032, ["onClick"])]),
                            _: 2
                        }, 1040))), 128))])]), M.value ? (E(),
                        V("div", pE, [mE, m("div", _E, [(E(!0),
                        V(qe, null, xt(M.value, R=>(E(),
                        ve(_c, At({
                            key: R.id,
                            ref_for: !0
                        }, {
                            title: R.title,
                            profit: R.reward,
                            img: `/img/quests/${R.quest_type}.png`,
                            highlighted: R.is_highlighted,
                            complited: !R.is_available
                        }), {
                            default: ie(()=>[Z(gc, {
                                onClick: Q=>h(R)
                            }, {
                                default: ie(()=>[Z(S(yc))]),
                                _: 2
                            }, 1032, ["onClick"])]),
                            _: 2
                        }, 1040))), 128))])])) : (E(),
                        V("div", gE, bE))])], 2)]
                    }
                    ),
                    _: 1
                })]),
                _: 1
            }, 8, ["class", "noMenu"]))
        }
    })
      , xE = {
        class: "flex flex-col justify-center text-center items-center h-[106px] text-bondex-white"
    }
      , ME = m("p", {
        class: "text-12"
    }, "Your balance", -1)
      , kE = Pe({
        __name: "Balance",
        setup(e) {
            var r;
            const t = on()
              , n = fe(((r = t.user) == null ? void 0 : r.balance) || 0);
            function s(i) {
                const o = n.value
                  , a = i - o;
                let l = 900;
                a <= 10 && (l = 300);
                const u = performance.now();
                function c(f) {
                    const d = f - u
                      , h = Math.min(d / l, 1);
                    n.value = Math.round(o + a * h),
                    h < 1 && requestAnimationFrame(c)
                }
                requestAnimationFrame(c)
            }
            return ht(()=>{
                var i;
                return ((i = t.user) == null ? void 0 : i.balance) ?? 0
            }
            , i=>{
                s(i)
            }
            , {
                immediate: !0
            }),
            (i,o)=>(E(),
            ve(Vl, null, {
                default: ie(()=>[m("div", xE, [ME, m("h2", null, he(n.value > 1e9 ? S(zn)(n.value) : S($r)(n.value)), 1)])]),
                _: 1
            }))
        }
    })
      , Z4 = e=>(ds("data-v-94208570"),
    e = e(),
    hs(),
    e)
      , SE = {
        class: "relative"
    }
      , OE = {
        class: "w-[80px] h-[80px] rounded overflow-hidden mb-5"
    }
      , EE = ["src"]
      , CE = {
        class: "flex flex-col gap-3 items-center text-center mb-4"
    }
      , TE = {
        class: "text-10-bold text-bondex-black py-1 px-2 bg-bondex-white rounded-2xl"
    }
      , RE = {
        class: "text-24-bold"
    }
      , PE = {
        class: "text-12"
    }
      , AE = {
        key: 0,
        class: "flex flex-col gap-1 text-12-bold items-center mb-4"
    }
      , $E = Z4(()=>m("p", {
        class: "text-bondex-green"
    }, "Profit", -1))
      , DE = {
        class: "flex items-center gap-1"
    }
      , LE = {
        key: 1,
        class: "flex items-center gap-2 mb-5"
    }
      , zE = {
        class: "w-8 h-8"
    }
      , NE = {
        class: "text-40-bold"
    }
      , IE = {
        class: "w-full max-w-[167px] mx-auto mb-[60px]"
    }
      , FE = ["disabled"]
      , jE = {
        class: "flex flex-row items-center gap-2"
    }
      , UE = ["src"]
      , qE = {
        class: "flex flex-col text-left"
    }
      , BE = {
        class: "text-bondex-white text-12-bold"
    }
      , VE = {
        key: 0,
        class: "text-10 text-bondex-green"
    }
      , HE = {
        key: 1,
        class: "flex items-center gap-1 text-10"
    }
      , WE = {
        class: "flex items-center gap-[2px] text-bondex-white"
    }
      , YE = Z4(()=>m("img", {
        src: Bn,
        alt: "bondex_coin",
        class: "w-2 h-2 shrink-0"
    }, null, -1))
      , ZE = {
        class: "text-bondex-green"
    }
      , KE = {
        class: "text-bondex-white"
    }
      , GE = {
        key: 2,
        class: "text-bondex-white text-10"
    }
      , QE = Pe({
        __name: "BoostItem",
        props: {
            type: {},
            disabled: {
                type: Boolean
            },
            img: {},
            id: {},
            name: {},
            description: {},
            nextLevelSpec: {},
            price: {},
            next_level: {},
            level: {},
            text: {},
            isLoading: {
                type: Boolean
            }
        },
        emits: ["purchase"],
        setup(e, {emit: t}) {
            const n = t
              , s = e
              , r = fe(!1)
              , i = ()=>{
                r.value = !1
            }
              , o = ()=>{
                r.value = !0
            }
              , a = fe(!1)
              , l = fe(!1)
              , u = d=>{
                a.value = !0
            }
              , c = ()=>{
                l.value = !0
            }
              , f = on();
            return (d,h)=>(E(),
            V("div", SE, [Z(wt, {
                name: "fade"
            }, {
                default: ie(()=>[r.value ? (E(),
                ve(Hl, {
                    key: 0,
                    "close-callback": i
                }, {
                    default: ie(()=>{
                        var g;
                        return [m("div", OE, [m("img", {
                            onLoad: u,
                            src: s.img,
                            alt: "img",
                            class: le(["h-full w-full object-cover opacity-0 transition-all duration-300", {
                                "opacity-100": a.value
                            }])
                        }, null, 42, EE)]), m("div", CE, [m("div", TE, he(`Level ${s.level}`), 1), m("p", RE, he(s.name), 1), m("p", PE, he(s.description), 1)]), s.next_level ? (E(),
                        V("div", AE, [$E, m("div", DE, [m("p", null, he(`${s.nextLevelSpec[0]}`), 1)])])) : ut("", !0), s.next_level ? (E(),
                        V("div", LE, [m("div", zE, [m("img", {
                            onLoad: c,
                            src: Bn,
                            alt: "bondex_coin",
                            class: le(["w-full h-full transition-all duration-300 opacity-0", {
                                "opacity-100": l.value
                            }])
                        }, null, 34)]), m("p", NE, he(s.price > 1e9 ? S(zn)(s.price) : S($r)(s.price)), 1)])) : ut("", !0), m("div", IE, [s.level === S(mc) ? (E(),
                        ve(Yt, {
                            key: 0,
                            green: "",
                            class: "w-full !h-[39px] !rounded-[60px]",
                            disabled: ""
                        }, {
                            default: ie(()=>[ct(" Max Lvl ")]),
                            _: 1
                        })) : Number(s.price) > (((g = S(f).user) == null ? void 0 : g.balance) ?? 0) ? (E(),
                        ve(Yt, {
                            key: 1,
                            green: "",
                            class: "w-full !h-[39px] !rounded-[60px]",
                            disabled: ""
                        }, {
                            default: ie(()=>{
                                var v;
                                return [ct(he(`Need ${Number(s.price) - (((v = S(f).user) == null ? void 0 : v.balance) ?? 0)}`), 1)]
                            }
                            ),
                            _: 1
                        })) : (E(),
                        ve(Yt, {
                            key: 2,
                            green: "",
                            class: "w-full !h-[39px] !rounded-[60px]",
                            onClick: h[0] || (h[0] = ()=>{
                                n("purchase", s.id),
                                i()
                            }
                            )
                        }, {
                            default: ie(()=>[ct(" Buy ")]),
                            _: 1
                        }))])]
                    }
                    ),
                    _: 1
                })) : ut("", !0)]),
                _: 1
            }), m("button", {
                class: "w-full p-4 rounded-[8px] disabled:opacity-50 h-[55px] flex items-center",
                disabled: d.disabled || s.level === S(mc),
                onClick: o
            }, [m("div", jE, [m("img", {
                src: d.img,
                class: "h-6 w-6 shrink-0"
            }, null, 8, UE), m("div", qE, [m("p", BE, he(d.name), 1), d.price && s.level === S(mc) ? (E(),
            V("div", VE, " Max lvl ")) : d.price ? (E(),
            V("div", HE, [m("div", WE, [YE, m("span", ZE, he(d.price > 1e6 ? S(zn)(d.price) : S($r)(d.price)), 1)]), m("p", KE, he(d.text), 1)])) : (E(),
            V("p", GE, he(d.text), 1))])])], 8, FE)]))
        }
    })
      , vc = cn(QE, [["__scopeId", "data-v-94208570"]])
      , JE = {}
      , XE = {
        class: "w-full h-full custom-loader shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2px] rounded-lg"
    };
    function e5(e, t) {
        return E(),
        V("div", XE)
    }
    const ol = cn(JE, [["render", e5]])
      , K4 = e=>(ds("data-v-3b0bbce3"),
    e = e(),
    hs(),
    e)
      , t5 = {
        id: "free_boosts",
        class: "w-full flex flex-col gap-4 mb-8 px-4"
    }
      , n5 = K4(()=>m("h3", {
        class: "text-bondex-white text-15"
    }, "Free daily boosters", -1))
      , s5 = {
        key: 0,
        class: "grid grid-cols-2 w-full gap-2"
    }
      , r5 = {
        key: 1,
        class: "grid grid-cols-2 w-full gap-2 auto-rows-[55px]"
    }
      , i5 = {
        id: "payable_boosts",
        class: "w-full flex flex-col gap-4 px-4"
    }
      , o5 = K4(()=>m("h3", {
        class: "text-bondex-white text-15"
    }, "Boosters", -1))
      , a5 = {
        key: 0,
        class: "grid grid-cols-2 w-full gap-2"
    }
      , l5 = {
        key: 1,
        class: "grid grid-cols-2 w-full gap-2 auto-rows-[55px]"
    }
      , c5 = Pe({
        __name: "BoostsIndex",
        setup(e) {
            const t = on()
              , {boosts: n, isPending: s} = g3()
              , {mutateAsync: r} = M3()
              , i = [{
                id: "energy",
                name: "Full energy",
                img: "/img/boosts/full_energy.png",
                description: "",
                nextLevelSpec: [""],
                price: 0,
                next_level: 0,
                level: 0,
                text: "Coming soon"
            }, {
                id: "turbo",
                name: "Turbo",
                img: "/img/boosts/turbo.png",
                description: "",
                nextLevelSpec: [""],
                price: 0,
                next_level: 0,
                level: 0,
                text: "Coming soon"
            }]
              , o = ye(()=>{
                var a, l, u, c, f, d, h, g;
                return [{
                    id: "multitap",
                    name: "Multitap",
                    description: "Increase amount of coins you can earn per one tap",
                    img: "/img/boosts/multitap.png",
                    nextLevelSpec: ["+1 per tap for each level."],
                    price: ((a = S(n)) == null ? void 0 : a.mine_level_price) ?? 0,
                    next_level: (((l = S(n)) == null ? void 0 : l.current_mine_level) ?? 0) + 1,
                    level: ((u = S(n)) == null ? void 0 : u.current_mine_level) ?? 0,
                    text: (((c = S(n)) == null ? void 0 : c.current_mine_level) ?? 0).toLocaleString() + " lvl"
                }, {
                    id: "max_energy",
                    name: "Energy Limit",
                    description: "Increase your energy limit, so you can mine more per session",
                    nextLevelSpec: ["+500 energy points for each level."],
                    price: ((f = S(n)) == null ? void 0 : f.max_energy_price) ?? 0,
                    next_level: (((d = t.user) == null ? void 0 : d.max_energy_level) ?? 0) + 1,
                    level: ((h = t.user) == null ? void 0 : h.max_energy_level) ?? 0,
                    img: "/img/boosts/energy_limit.png",
                    title: "Energy limit",
                    text: (((g = t.user) == null ? void 0 : g.max_energy_level) ?? 0).toLocaleString() + " lvl"
                }]
            }
            );
            return (a,l)=>(E(),
            ve(Ai, {
                class: "p-page"
            }, {
                default: ie(()=>[Z(kE, {
                    class: "mb-6 px-4"
                }), m("section", t5, [n5, Z(wt, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: ie(()=>[S(s) ? (E(),
                    V("div", r5, [(E(!0),
                    V(qe, null, xt(Array(2).keys(), u=>(E(),
                    ve(ol))), 256))])) : (E(),
                    V("div", s5, [Z(vc, At(i[0], {
                        disabled: ""
                    }), null, 16), Z(vc, At(i[1], {
                        disabled: ""
                    }), null, 16)]))]),
                    _: 1
                })]), m("section", i5, [o5, Z(wt, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: ie(()=>[S(s) ? (E(),
                    V("div", l5, [(E(!0),
                    V(qe, null, xt(Array(2).keys(), u=>(E(),
                    ve(ol))), 256))])) : (E(),
                    V("div", a5, [(E(!0),
                    V(qe, null, xt(o.value, u=>(E(),
                    ve(vc, At({
                        key: u.id,
                        ref_for: !0
                    }, u, {
                        onPurchase: S(r)
                    }), null, 16, ["onPurchase"]))), 128))]))]),
                    _: 1
                })])]),
                _: 1
            }))
        }
    })
      , u5 = cn(c5, [["__scopeId", "data-v-3b0bbce3"]])
      , f5 = "/img/leaders/gold.png"
      , d5 = "/img/leaders/silver.png"
      , h5 = "/img/leaders/bronze.png"
      , p5 = {
        class: "flex items-center gap-2"
    }
      , m5 = {
        key: 0,
        class: "w-6 relative items-center justify-center flex"
    }
      , _5 = {
        key: 0,
        src: f5,
        alt: "gold",
        class: "absolute w-full"
    }
      , g5 = {
        key: 1,
        src: d5,
        alt: "gold",
        class: "absolute w-full"
    }
      , y5 = {
        key: 2,
        src: h5,
        alt: "gold",
        class: "absolute w-full"
    }
      , v5 = {
        class: "flex flex-col text-14-bold"
    }
      , b5 = {
        class: "text-bondex-green"
    }
      , w5 = {
        class: "flex items-center gap-1 text-14-bold"
    }
      , x5 = m("img", {
        src: Bn,
        alt: "bondex_coin",
        class: "w-4 h-4 shrink-0"
    }, null, -1)
      , mu = Pe({
        __name: "LeaderItem",
        props: {
            position: {},
            name: {},
            lvl: {},
            balance: {},
            src: {},
            isMe: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e
              , n = ye(()=>t.position <= 3);
            return (s,r)=>(E(),
            V("div", {
                ref: "el",
                class: le(["rounded-lg px-4 py-2 flex items-center justify-between text-bondex-white from-50%", {
                    "bg-bondex-dark/50": !t.isMe && !n.value,
                    "bg-gradient-to-r from-bondex-dark/50 to-bondex-dark-green/50": n.value,
                    "bg-gradient-to-r from-bondex-dark/50 to-bondex-white/50 border border-bondex-white": t.isMe
                }])
            }, [m("div", p5, [m("p", {
                class: le(["relative flex items-center justify-center", {
                    "text-14": !t.isMe,
                    "text-14-bold": n.value
                }])
            }, [t.position < 4 ? (E(),
            V("div", m5, [t.position === 1 ? (E(),
            V("img", _5)) : ut("", !0), t.position === 2 ? (E(),
            V("img", g5)) : ut("", !0), t.position === 3 ? (E(),
            V("img", y5)) : ut("", !0), m("span", {
                class: le(["relative", {
                    "text-bondex-black": n.value
                }])
            }, he(S(Nh)(t.position)), 3)])) : (E(),
            V("span", {
                key: 1,
                class: le(["relative", {
                    "text-bondex-black": n.value
                }])
            }, he(S(Nh)(t.position)), 3))], 2), m("div", v5, [m("p", null, he(t.isMe ? "You" : t.name), 1), m("p", b5, he(`${t.lvl} lvl`), 1)])]), m("div", w5, [x5, m("p", null, he(`${S($r)(t.balance)}`), 1)])], 2))
        }
    })
      , M5 = {
        class: "flex flex-col gap-2"
    }
      , k5 = Pe({
        __name: "Top",
        props: {
            data: {},
            me: {}
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", M5, [(E(!0),
            V(qe, null, xt(t.data, r=>(E(),
            ve(mu, At({
                ref_for: !0
            }, {
                ...r,
                isMe: t.me.position === r.position
            }), null, 16))), 256))]))
        }
    })
      , S5 = Pe({
        __name: "List",
        props: {
            data: {},
            me: {}
        },
        setup(e) {
            const t = e;
            return (n,s)=>(E(),
            V("div", {
                class: le(["flex flex-col gap-2", {
                    "last:mb-[68px]": t.me.position > 50
                }])
            }, [(E(!0),
            V(qe, null, xt(t.data, r=>(E(),
            ve(mu, At({
                ref_for: !0
            }, {
                ...r,
                isMe: t.me.position === r.position
            }, {
                class: {
                    "bottom-2 sticky z-10 backdrop-blur-sm": t.me.position === r.position
                }
            }), null, 16, ["class"]))), 256)), t.me.position > 50 ? (E(),
            ve(mu, At({
                key: 0
            }, {
                ...t.me,
                isMe: !0
            }, {
                class: "fixed inset-x-0 mx-4 bottom-[132px] z-10 backdrop-blur-sm"
            }), null, 16)) : ut("", !0)], 2))
        }
    })
      , O5 = Km("leaders", {
        getLeaders: (e,t,n)=>[{
            limit: e,
            offset: t,
            level: n
        }]
    })
      , E5 = (e,t,n)=>{
        const s = sr({
            ...O5.getLeaders(e, t, n),
            queryFn: async({queryKey: r})=>{
                const {limit: i, offset: o, level: a} = B4(r);
                return Dt.get("/leaderboard", {
                    queries: {
                        limit: i,
                        offset: o,
                        level: a ?? 0
                    }
                })
            }
            ,
            enabled: ye(()=>Number(S(n)) != null)
        });
        return {
            ...s,
            leaders: ye(()=>{
                var i;
                return (((i = S(s.data)) == null ? void 0 : i.players) ?? []).map(o=>({
                    id: (o == null ? void 0 : o.id) ?? -1,
                    name: (o == null ? void 0 : o.first_name) ?? "",
                    lvl: ((o == null ? void 0 : o.league) ?? 0) + 1,
                    balance: (o == null ? void 0 : o.score) ?? 0,
                    src: q4((o == null ? void 0 : o.avatar_key) ?? ""),
                    position: (o == null ? void 0 : o.position) ?? 0
                }))
            }
            ),
            me: ye(()=>{
                var i;
                const r = (i = S(s.data)) == null ? void 0 : i.me;
                return {
                    id: (r == null ? void 0 : r.id) ?? -1,
                    name: (r == null ? void 0 : r.first_name) ?? "",
                    lvl: ((r == null ? void 0 : r.league) ?? 0) + 1,
                    balance: (r == null ? void 0 : r.score) ?? 0,
                    position: (r == null ? void 0 : r.position) ?? 0
                }
            }
            )
        }
    }
      , C5 = {
        class: "flex flex-col gap-8 w-full"
    }
      , T5 = {
        key: 1,
        class: "w-full grid grid-cols-1 auto-rows-[58px] gap-2"
    }
      , R5 = {
        key: 1,
        class: "w-full grid grid-cols-1 auto-rows-[58px] gap-2"
    }
      , P5 = Pe({
        __name: "Leaderboard",
        setup(e) {
            const {me: t} = Rf()
              , {me: n, leaders: s, isPending: r} = E5(50, 0, ye(()=>{
                var u;
                return ((u = S(t)) == null ? void 0 : u.current_league) ?? 0
            }
            ))
              , i = fe(null)
              , {arrivedState: o} = Ko(i)
              , a = ye(()=>S(s).slice(0, 3))
              , l = ye(()=>S(s).slice(3));
            return (u,c)=>(E(),
            ve(Ai, {
                class: "p-page"
            }, {
                default: ie(()=>[m("section", {
                    ref_key: "scrollable",
                    ref: i,
                    class: "flex h-full w-full flex-grow flex-col overflow-y-auto max-h-full relative px-4"
                }, [m("div", {
                    class: le(["earn-gradient fixed left-0 z-10 h-[30%] bottom-0 w-full pointer-events-none transition-all duration-300", {
                        "invisible opacity-0 h-[0%]": S(o).bottom
                    }])
                }, null, 2), m("div", C5, [Z(wt, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: ie(()=>[S(r) ? (E(),
                    V("div", T5, [(E(!0),
                    V(qe, null, xt(Array(3).keys(), f=>(E(),
                    ve(ol, {
                        class: "w-full h-full custom-loader shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2px] rounded-lg"
                    }))), 256))])) : (E(),
                    ve(k5, lo(At({
                        key: 0
                    }, {
                        data: a.value,
                        me: S(n)
                    })), null, 16))]),
                    _: 1
                }), Z(wt, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: ie(()=>[S(r) ? (E(),
                    V("div", R5, [(E(!0),
                    V(qe, null, xt(Array(6).keys(), f=>(E(),
                    ve(ol, {
                        class: "w-full h-full custom-loader shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2px] rounded-lg"
                    }))), 256))])) : (E(),
                    ve(S5, lo(At({
                        key: 0
                    }, {
                        data: l.value,
                        me: S(n)
                    })), null, 16))]),
                    _: 1
                })])], 512)]),
                _: 1
            }))
        }
    })
      , A5 = [{
        path: "/",
        name: "miner",
        component: O6
    }, {
        path: "/earn",
        name: "earn",
        component: cO
    }, {
        path: "/leaders",
        name: "leaders",
        component: P5
    }, {
        path: "/friends",
        name: "friends",
        component: CO
    }, {
        path: "/quests",
        name: "quests",
        component: wE
    }, {
        path: "/boosts",
        name: "boosts",
        component: u5
    }]
      , $5 = o1({
        routes: A5,
        history: D0()
    });
    var D5 = Object.defineProperty
      , L5 = (e,t,n)=>t in e ? D5(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
      , lt = (e,t,n)=>L5(e, typeof t != "symbol" ? t + "" : t, n);
    function G4(e, t) {
        let n;
        const s = ()=>{
            n !== void 0 && t && t(n),
            n = void 0
        }
        ;
        return [()=>n === void 0 ? n = e(s) : n, s]
    }
    class z5 {
        constructor(t, n={}) {
            this.scope = t,
            this.options = n
        }
        print(t, ...n) {
            const s = new Date
              , r = Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                fractionalSecondDigits: 3,
                timeZone: "UTC"
            }).format(s)
              , {textColor: i, bgColor: o} = this.options
              , a = "font-weight: bold;padding: 0 5px;border-radius:5px";
            console[t](`%c${r}%c / %c${this.scope}`, `${a};background-color: lightblue;color:black`, "", `${a};${i ? `color:${i};` : ""}${o ? `background-color:${o}` : ""}`, ...n)
        }
        error(...t) {
            this.print("error", ...t)
        }
        log(...t) {
            this.print("log", ...t)
        }
    }
    const Q4 = new z5("SDK",{
        bgColor: "forestgreen",
        textColor: "white"
    });
    let N5 = !1;
    function I5(...e) {
        N5 && Q4.log(...e)
    }
    class _u {
        constructor() {
            lt(this, "listeners", new Map),
            lt(this, "listenersCount", 0),
            lt(this, "subscribeListeners", [])
        }
        clear() {
            this.listeners.clear(),
            this.subscribeListeners = []
        }
        get count() {
            return this.listenersCount + this.subscribeListeners.length
        }
        emit(t, ...n) {
            this.subscribeListeners.forEach(s=>s({
                event: t,
                args: n
            })),
            (this.listeners.get(t) || []).forEach(([s,r])=>{
                s(...n),
                r && this.off(t, s)
            }
            )
        }
        on(t, n, s) {
            let r = this.listeners.get(t);
            return r || this.listeners.set(t, r = []),
            r.push([n, s]),
            this.listenersCount += 1,
            ()=>this.off(t, n)
        }
        off(t, n) {
            const s = this.listeners.get(t) || [];
            for (let r = 0; r < s.length; r += 1)
                if (n === s[r][0]) {
                    s.splice(r, 1),
                    this.listenersCount -= 1;
                    return
                }
        }
        subscribe(t) {
            return this.subscribeListeners.push(t),
            ()=>this.unsubscribe(t)
        }
        unsubscribe(t) {
            for (let n = 0; n < this.subscribeListeners.length; n += 1)
                if (this.subscribeListeners[n] === t) {
                    this.subscribeListeners.splice(n, 1);
                    return
                }
        }
    }
    function Ih(e, t, n) {
        return window.addEventListener(e, t, n),
        ()=>window.removeEventListener(e, t, n)
    }
    function Pf(...e) {
        let t = !1;
        const n = e.flat(1);
        return [s=>!t && n.push(s), ()=>{
            t || (t = !0,
            n.forEach(s=>s()))
        }
        , t]
    }
    class Af extends Error {
        constructor(t, n, s) {
            super(n, {
                cause: s
            }),
            this.type = t,
            Object.setPrototypeOf(this, Af.prototype)
        }
    }
    function Xs(e, t, n) {
        return new Af(e,t,n)
    }
    const F5 = "ERR_METHOD_UNSUPPORTED"
      , j5 = "ERR_METHOD_PARAMETER_UNSUPPORTED"
      , U5 = "ERR_UNKNOWN_ENV"
      , q5 = "ERR_INVOKE_CUSTOM_METHOD_RESPONSE"
      , B5 = "ERR_TIMED_OUT"
      , V5 = "ERR_UNEXPECTED_TYPE"
      , J4 = "ERR_PARSE";
    function sa() {
        return Xs(V5, "Value has unexpected type")
    }
    class $f {
        constructor(t, n, s) {
            this.parser = t,
            this.isOptional = n,
            this.type = s
        }
        parse(t) {
            if (!(this.isOptional && t === void 0))
                try {
                    return this.parser(t)
                } catch (n) {
                    throw Xs(J4, `Unable to parse value${this.type ? ` as ${this.type}` : ""}`, n)
                }
        }
        optional() {
            return this.isOptional = !0,
            this
        }
    }
    function ji(e, t) {
        return ()=>new $f(e,!1,t)
    }
    const qs = ji(e=>{
        if (typeof e == "boolean")
            return e;
        const t = String(e);
        if (t === "1" || t === "true")
            return !0;
        if (t === "0" || t === "false")
            return !1;
        throw sa()
    }
    , "boolean");
    function X4(e, t) {
        const n = {};
        for (const s in e) {
            const r = e[s];
            if (!r)
                continue;
            let i, o;
            if (typeof r == "function" || "parse"in r)
                i = s,
                o = typeof r == "function" ? r : r.parse.bind(r);
            else {
                const {type: a} = r;
                i = r.from || s,
                o = typeof a == "function" ? a : a.parse.bind(a)
            }
            try {
                const a = o(t(i));
                a !== void 0 && (n[s] = a)
            } catch (a) {
                throw Xs(J4, `Unable to parse field "${s}"`, a)
            }
        }
        return n
    }
    function eg(e) {
        let t = e;
        if (typeof t == "string" && (t = JSON.parse(t)),
        typeof t != "object" || t === null || Array.isArray(t))
            throw sa();
        return t
    }
    function Bs(e, t) {
        return new $f(n=>{
            const s = eg(n);
            return X4(e, r=>s[r])
        }
        ,!1,t)
    }
    const Dr = ji(e=>{
        if (typeof e == "number")
            return e;
        if (typeof e == "string") {
            const t = Number(e);
            if (!Number.isNaN(t))
                return t
        }
        throw sa()
    }
    , "number")
      , Ye = ji(e=>{
        if (typeof e == "string" || typeof e == "number")
            return e.toString();
        throw sa()
    }
    , "string");
    function H5(e) {
        return Bs({
            eventType: Ye(),
            eventData: t=>t
        }).parse(e)
    }
    function W5() {
        ["TelegramGameProxy_receiveEvent", "TelegramGameProxy", "Telegram"].forEach(e=>{
            delete window[e]
        }
        )
    }
    function Y5(e, t) {
        window.dispatchEvent(new MessageEvent("message",{
            data: JSON.stringify({
                eventType: e,
                eventData: t
            }),
            source: window.parent
        }))
    }
    function Z5() {
        [["TelegramGameProxy_receiveEvent"], ["TelegramGameProxy", "receiveEvent"], ["Telegram", "WebView", "receiveEvent"]].forEach(e=>{
            let t = window;
            e.forEach((n,s,r)=>{
                if (s === r.length - 1) {
                    t[n] = Y5;
                    return
                }
                n in t || (t[n] = {}),
                t = t[n]
            }
            )
        }
        )
    }
    const K5 = {
        clipboard_text_received: Bs({
            req_id: Ye(),
            data: e=>e === null ? e : Ye().optional().parse(e)
        }),
        custom_method_invoked: Bs({
            req_id: Ye(),
            result: e=>e,
            error: Ye().optional()
        }),
        popup_closed: {
            parse(e) {
                return Bs({
                    button_id: t=>t == null ? void 0 : Ye().parse(t)
                }).parse(e ?? {})
            }
        },
        viewport_changed: Bs({
            height: Dr(),
            width: e=>e == null ? window.innerWidth : Dr().parse(e),
            is_state_stable: qs(),
            is_expanded: qs()
        })
    };
    function G5() {
        const e = new _u
          , t = new _u;
        t.subscribe(s=>{
            e.emit("event", {
                name: s.event,
                payload: s.args[0]
            })
        }
        ),
        Z5();
        const [,n] = Pf(W5, Ih("resize", ()=>{
            t.emit("viewport_changed", {
                width: window.innerWidth,
                height: window.innerHeight,
                is_state_stable: !0,
                is_expanded: !0
            })
        }
        ), Ih("message", s=>{
            if (s.source !== window.parent)
                return;
            let r;
            try {
                r = H5(s.data)
            } catch {
                return
            }
            const {eventType: i, eventData: o} = r
              , a = K5[i];
            try {
                const l = a ? a.parse(o) : o;
                t.emit(...l ? [i, l] : [i])
            } catch (l) {
                Q4.error(`An error occurred processing the "${i}" event from the Telegram application.
Please, file an issue here:
https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose`, r, l)
            }
        }
        ), ()=>e.clear(), ()=>t.clear());
        return [{
            on: t.on.bind(t),
            off: t.off.bind(t),
            subscribe(s) {
                return e.on("event", s)
            },
            unsubscribe(s) {
                e.off("event", s)
            },
            get count() {
                return t.count + e.count
            }
        }, n]
    }
    const [Q5,BT] = G4(e=>{
        const [t,n] = G5()
          , s = t.off.bind(t);
        return t.off = (r,i)=>{
            const {count: o} = t;
            s(r, i),
            o && !t.count && e()
        }
        ,
        [t, n]
    }
    , ([,e])=>e());
    function tg() {
        return Q5()[0]
    }
    function J5(e, t) {
        tg().off(e, t)
    }
    function ng(e, t, n) {
        return tg().on(e, t, n)
    }
    function Df(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }
    function X5(e, t) {
        const n = e.split(".")
          , s = t.split(".")
          , r = Math.max(n.length, s.length);
        for (let i = 0; i < r; i += 1) {
            const o = parseInt(n[i] || "0", 10)
              , a = parseInt(s[i] || "0", 10);
            if (o !== a)
                return o > a ? 1 : -1
        }
        return 0
    }
    function Jt(e, t) {
        return X5(e, t) <= 0
    }
    function al(e, t, n) {
        if (typeof n == "string") {
            if (e === "web_app_open_link") {
                if (t === "try_instant_view")
                    return Jt("6.4", n);
                if (t === "try_browser")
                    return Jt("7.6", n)
            }
            if (e === "web_app_set_header_color" && t === "color")
                return Jt("6.9", n);
            if (e === "web_app_close" && t === "return_back")
                return Jt("7.6", n)
        }
        switch (e) {
        case "web_app_open_tg_link":
        case "web_app_open_invoice":
        case "web_app_setup_back_button":
        case "web_app_set_background_color":
        case "web_app_set_header_color":
        case "web_app_trigger_haptic_feedback":
            return Jt("6.1", t);
        case "web_app_open_popup":
            return Jt("6.2", t);
        case "web_app_close_scan_qr_popup":
        case "web_app_open_scan_qr_popup":
        case "web_app_read_text_from_clipboard":
            return Jt("6.4", t);
        case "web_app_switch_inline_query":
            return Jt("6.7", t);
        case "web_app_invoke_custom_method":
        case "web_app_request_write_access":
        case "web_app_request_phone":
            return Jt("6.9", t);
        case "web_app_setup_settings_button":
            return Jt("6.10", t);
        case "web_app_biometry_get_info":
        case "web_app_biometry_open_settings":
        case "web_app_biometry_request_access":
        case "web_app_biometry_request_auth":
        case "web_app_biometry_update_token":
            return Jt("7.2", t);
        case "web_app_setup_swipe_behavior":
            return Jt("7.7", t);
        default:
            return ["iframe_ready", "iframe_will_reload", "web_app_close", "web_app_data_send", "web_app_expand", "web_app_open_link", "web_app_ready", "web_app_request_theme", "web_app_request_viewport", "web_app_setup_main_button", "web_app_setup_closing_behavior"].includes(e)
        }
    }
    function eC(e) {
        return "external"in e && Df(e.external) && "notify"in e.external && typeof e.external.notify == "function"
    }
    function tC(e) {
        return "TelegramWebviewProxy"in e && Df(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && typeof e.TelegramWebviewProxy.postEvent == "function"
    }
    function nC() {
        try {
            return window.self !== window.top
        } catch {
            return !0
        }
    }
    const sC = "https://web.telegram.org";
    let rC = sC;
    function iC() {
        return rC
    }
    function Lf(e, t, n) {
        let s = {}, r;
        if (!t && !n ? s = {} : t && n ? (s = n,
        r = t) : t && ("targetOrigin"in t ? s = t : r = t),
        I5("Posting event:", r ? {
            event: e,
            data: r
        } : {
            event: e
        }),
        nC())
            return window.parent.postMessage(JSON.stringify({
                eventType: e,
                eventData: r
            }), s.targetOrigin || iC());
        if (eC(window)) {
            window.external.notify(JSON.stringify({
                eventType: e,
                eventData: r
            }));
            return
        }
        if (tC(window)) {
            window.TelegramWebviewProxy.postEvent(e, JSON.stringify(r));
            return
        }
        throw Xs(U5, "Unable to determine current environment and possible way to send event. You are probably trying to use Mini Apps method outside the Telegram application environment.")
    }
    function oC(e) {
        return (t,n)=>{
            if (!al(t, e))
                throw Xs(F5, `Method "${t}" is unsupported in Mini Apps version ${e}`);
            if (Df(n) && t === "web_app_set_header_color" && "color"in n && !al(t, "color", e))
                throw Xs(j5, `Parameter "color" of "${t}" method is unsupported in Mini Apps version ${e}`);
            return Lf(t, n)
        }
    }
    function aC(e) {
        return ({req_id: t})=>t === e
    }
    function sg(e) {
        return Xs(B5, `Timeout reached: ${e}ms`)
    }
    function rg(e, t) {
        return Promise.race([typeof e == "function" ? e() : e, new Promise((n,s)=>{
            setTimeout(()=>{
                s(sg(t))
            }
            , t)
        }
        )])
    }
    async function gu(e) {
        let t;
        const n = new Promise(a=>t = a)
          , {event: s, capture: r, timeout: i} = e
          , [,o] = Pf((Array.isArray(s) ? s : [s]).map(a=>ng(a, l=>{
            (!r || (Array.isArray(s) ? r({
                event: a,
                payload: l
            }) : r(l))) && t(l)
        }
        )));
        try {
            return (e.postEvent || Lf)(e.method, e.params),
            await (i ? rg(n, i) : n)
        } finally {
            o()
        }
    }
    async function lC(e, t, n, s={}) {
        const {result: r, error: i} = await gu({
            ...s,
            method: "web_app_invoke_custom_method",
            event: "custom_method_invoked",
            params: {
                method: e,
                params: t,
                req_id: n
            },
            capture: aC(n)
        });
        if (i)
            throw Xs(q5, i);
        return r
    }
    function ig(e) {
        return /^#[\da-f]{6}$/i.test(e)
    }
    function cC(e) {
        return /^#[\da-f]{3}$/i.test(e)
    }
    function og(e) {
        const t = e.replace(/\s/g, "").toLowerCase();
        if (ig(t))
            return t;
        if (cC(t)) {
            let s = "#";
            for (let r = 0; r < 3; r += 1)
                s += t[1 + r].repeat(2);
            return s
        }
        const n = t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) || t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
        if (!n)
            throw new Error(`Value "${e}" does not satisfy any of known RGB formats.`);
        return n.slice(1).reduce((s,r)=>{
            const i = parseInt(r, 10).toString(16);
            return s + (i.length === 1 ? "0" : "") + i
        }
        , "#")
    }
    function uC(e) {
        const t = og(e);
        return Math.sqrt([.299, .587, .114].reduce((n,s,r)=>{
            const i = parseInt(t.slice(1 + r * 2, 1 + (r + 1) * 2), 16);
            return n + i * i * s
        }
        , 0)) < 120
    }
    class fC {
        constructor(t) {
            lt(this, "ee", new _u),
            lt(this, "on", this.ee.on.bind(this.ee)),
            lt(this, "off", this.ee.off.bind(this.ee)),
            this.state = t
        }
        clone() {
            return {
                ...this.state
            }
        }
        set(t, n) {
            Object.entries(typeof t == "string" ? {
                [t]: n
            } : t).reduce((s,[r,i])=>this.state[r] === i || i === void 0 ? s : (this.state[r] = i,
            this.ee.emit(`change:${r}`, i),
            !0), !1) && this.ee.emit("change", this.state)
        }
        get(t) {
            return this.state[t]
        }
    }
    class dC {
        constructor(t) {
            lt(this, "state"),
            lt(this, "get"),
            lt(this, "set"),
            lt(this, "clone"),
            this.state = new fC(t),
            this.set = this.state.set.bind(this.state),
            this.get = this.state.get.bind(this.state),
            this.clone = this.state.clone.bind(this.state)
        }
    }
    function hC(e, t) {
        return n=>al(t[n], e)
    }
    class ag extends dC {
        constructor(t, n, s) {
            super(t),
            lt(this, "supports"),
            this.supports = hC(n, s)
        }
    }
    class pC extends ag {
        constructor(t, n, s) {
            super({
                isVisible: t
            }, n, {
                show: "web_app_setup_back_button",
                hide: "web_app_setup_back_button"
            }),
            lt(this, "on", (r,i)=>r === "click" ? ng("back_button_pressed", i) : this.state.on(r, i)),
            lt(this, "off", (r,i)=>r === "click" ? J5("back_button_pressed", i) : this.state.off(r, i)),
            this.postEvent = s
        }
        set isVisible(t) {
            this.set("isVisible", t),
            this.postEvent("web_app_setup_back_button", {
                is_visible: t
            })
        }
        get isVisible() {
            return this.get("isVisible")
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
    }
    const lg = ji(e=>e instanceof Date ? e : new Date(Dr().parse(e) * 1e3), "Date");
    function zf(e, t) {
        return new $f(n=>{
            if (typeof n != "string" && !(n instanceof URLSearchParams))
                throw sa();
            const s = typeof n == "string" ? new URLSearchParams(n) : n;
            return X4(e, r=>{
                const i = s.get(r);
                return i === null ? void 0 : i
            }
            )
        }
        ,!1,t)
    }
    const mC = Bs({
        id: Dr(),
        type: Ye(),
        title: Ye(),
        photoUrl: {
            type: Ye().optional(),
            from: "photo_url"
        },
        username: Ye().optional()
    }, "Chat").optional()
      , Fh = Bs({
        addedToAttachmentMenu: {
            type: qs().optional(),
            from: "added_to_attachment_menu"
        },
        allowsWriteToPm: {
            type: qs().optional(),
            from: "allows_write_to_pm"
        },
        firstName: {
            type: Ye(),
            from: "first_name"
        },
        id: Dr(),
        isBot: {
            type: qs().optional(),
            from: "is_bot"
        },
        isPremium: {
            type: qs().optional(),
            from: "is_premium"
        },
        languageCode: {
            type: Ye().optional(),
            from: "language_code"
        },
        lastName: {
            type: Ye().optional(),
            from: "last_name"
        },
        photoUrl: {
            type: Ye().optional(),
            from: "photo_url"
        },
        username: Ye().optional()
    }, "User").optional();
    function _C() {
        return zf({
            authDate: {
                type: lg(),
                from: "auth_date"
            },
            canSendAfter: {
                type: Dr().optional(),
                from: "can_send_after"
            },
            chat: mC,
            chatInstance: {
                type: Ye().optional(),
                from: "chat_instance"
            },
            chatType: {
                type: Ye().optional(),
                from: "chat_type"
            },
            hash: Ye(),
            queryId: {
                type: Ye().optional(),
                from: "query_id"
            },
            receiver: Fh,
            startParam: {
                type: Ye().optional(),
                from: "start_param"
            },
            user: Fh
        }, "InitData")
    }
    const gC = ji(e=>og(Ye().parse(e)), "rgb");
    function yC(e) {
        return e.replace(/_[a-z]/g, t=>t[1].toUpperCase())
    }
    function vC(e) {
        return e.replace(/[A-Z]/g, t=>`_${t.toLowerCase()}`)
    }
    const bC = ji(e=>{
        const t = gC().optional();
        return Object.entries(eg(e)).reduce((n,[s,r])=>(n[yC(s)] = t.parse(r),
        n), {})
    }
    , "ThemeParams");
    function cg(e) {
        return zf({
            botInline: {
                type: qs().optional(),
                from: "tgWebAppBotInline"
            },
            initData: {
                type: _C().optional(),
                from: "tgWebAppData"
            },
            initDataRaw: {
                type: Ye().optional(),
                from: "tgWebAppData"
            },
            platform: {
                type: Ye(),
                from: "tgWebAppPlatform"
            },
            showSettings: {
                type: qs().optional(),
                from: "tgWebAppShowSettings"
            },
            startParam: {
                type: Ye().optional(),
                from: "tgWebAppStartParam"
            },
            themeParams: {
                type: bC(),
                from: "tgWebAppThemeParams"
            },
            version: {
                type: Ye(),
                from: "tgWebAppVersion"
            }
        }).parse(e)
    }
    function ug(e) {
        return cg(e.replace(/^[^?#]*[?#]/, "").replace(/[?#]/g, "&"))
    }
    function wC() {
        return ug(window.location.href)
    }
    function fg() {
        return performance.getEntriesByType("navigation")[0]
    }
    function xC() {
        const e = fg();
        if (!e)
            throw new Error("Unable to get first navigation entry.");
        return ug(e.name)
    }
    function dg(e) {
        return `telegram-apps/${e.replace(/[A-Z]/g, t=>`-${t.toLowerCase()}`)}`
    }
    function hg(e, t) {
        sessionStorage.setItem(dg(e), JSON.stringify(t))
    }
    function pg(e) {
        const t = sessionStorage.getItem(dg(e));
        try {
            return t ? JSON.parse(t) : void 0
        } catch {}
    }
    function MC() {
        return cg(pg("launchParams") || "")
    }
    function kC(e) {
        return JSON.stringify(Object.fromEntries(Object.entries(e).map(([t,n])=>[vC(t), n])))
    }
    function SC(e) {
        const {initDataRaw: t, themeParams: n, platform: s, version: r, showSettings: i, startParam: o, botInline: a} = e
          , l = new URLSearchParams;
        return l.set("tgWebAppPlatform", s),
        l.set("tgWebAppThemeParams", kC(n)),
        l.set("tgWebAppVersion", r),
        t && l.set("tgWebAppData", t),
        o && l.set("tgWebAppStartParam", o),
        typeof i == "boolean" && l.set("tgWebAppShowSettings", i ? "1" : "0"),
        typeof a == "boolean" && l.set("tgWebAppBotInline", a ? "1" : "0"),
        l.toString()
    }
    function OC(e) {
        hg("launchParams", SC(e))
    }
    function mg() {
        for (const e of [wC, xC, MC])
            try {
                const t = e();
                return OC(t),
                t
            } catch {}
        throw new Error("Unable to retrieve launch parameters from any known source.")
    }
    function EC() {
        const e = fg();
        return !!(e && e.type === "reload")
    }
    function CC() {
        let e = 0;
        return ()=>(e += 1).toString()
    }
    const [TC] = G4(CC);
    function _g(e, t) {
        return ()=>{
            const n = mg()
              , s = {
                ...n,
                postEvent: oC(n.version),
                createRequestId: TC()
            };
            if (typeof e == "function")
                return e(s);
            const [r,i,o] = Pf()
              , a = t({
                ...s,
                state: EC() ? pg(e) : void 0,
                addCleanup: r
            })
              , l = u=>(o || r(u.on("change", c=>{
                hg(e, c)
            }
            )),
            u);
            return [a instanceof Promise ? a.then(l) : l(a), i]
        }
    }
    const RC = _g("backButton", ({postEvent: e, version: t, state: n={
        isVisible: !1
    }})=>new pC(n.isVisible,t,e));
    class PC extends ag {
        constructor() {
            super(...arguments),
            lt(this, "on", this.state.on.bind(this.state)),
            lt(this, "off", this.state.off.bind(this.state))
        }
    }
    function AC() {
        return zf({
            contact: Bs({
                userId: {
                    type: Dr(),
                    from: "user_id"
                },
                phoneNumber: {
                    type: Ye(),
                    from: "phone_number"
                },
                firstName: {
                    type: Ye(),
                    from: "first_name"
                },
                lastName: {
                    type: Ye().optional(),
                    from: "last_name"
                }
            }),
            authDate: {
                type: lg(),
                from: "auth_date"
            },
            hash: Ye()
        }, "RequestedContact")
    }
    function $C(e, t) {
        return n=>{
            const [s,r] = t[n];
            return al(s, r, e)
        }
    }
    function DC(e) {
        return new Promise(t=>{
            setTimeout(t, e)
        }
        )
    }
    class LC extends PC {
        constructor({postEvent: t, createRequestId: n, version: s, botInline: r, ...i}) {
            super(i, s, {
                requestPhoneAccess: "web_app_request_phone",
                requestWriteAccess: "web_app_request_write_access",
                switchInlineQuery: "web_app_switch_inline_query",
                setHeaderColor: "web_app_set_header_color",
                setBackgroundColor: "web_app_set_background_color"
            }),
            lt(this, "botInline"),
            lt(this, "postEvent"),
            lt(this, "createRequestId"),
            lt(this, "requestPhoneAccessPromise"),
            lt(this, "requestWriteAccessPromise"),
            lt(this, "supportsParam"),
            this.createRequestId = n,
            this.postEvent = t,
            this.botInline = r;
            const o = this.supports.bind(this);
            this.supports = a=>o(a) ? a !== "switchInlineQuery" || r : !1,
            this.supportsParam = $C(s, {
                "setHeaderColor.color": ["web_app_set_header_color", "color"],
                "close.returnBack": ["web_app_close", "return_back"]
            })
        }
        async getRequestedContact({timeout: t=1e4}={}) {
            return AC().parse(await lC("getRequestedContact", {}, this.createRequestId(), {
                postEvent: this.postEvent,
                timeout: t
            }))
        }
        get bgColor() {
            return this.get("bgColor")
        }
        close(t) {
            this.postEvent("web_app_close", this.supportsParam("close.returnBack") ? {
                return_back: t
            } : {})
        }
        get headerColor() {
            return this.get("headerColor")
        }
        get isBotInline() {
            return this.botInline
        }
        get isDark() {
            return uC(this.bgColor)
        }
        ready() {
            this.postEvent("web_app_ready")
        }
        async requestContact({timeout: t=5e3}={}) {
            try {
                return await this.getRequestedContact()
            } catch {}
            if (await this.requestPhoneAccess() !== "sent")
                throw new Error("Access denied.");
            const n = Date.now() + t;
            let s = 50;
            return rg(async()=>{
                for (; Date.now() < n; ) {
                    try {
                        return await this.getRequestedContact()
                    } catch {}
                    await DC(s),
                    s += 50
                }
                throw sg(t)
            }
            , t)
        }
        async requestPhoneAccess(t={}) {
            return this.requestPhoneAccessPromise || (this.requestPhoneAccessPromise = gu({
                ...t,
                method: "web_app_request_phone",
                event: "phone_requested",
                postEvent: this.postEvent
            }).then(({status: n})=>n).finally(()=>this.requestPhoneAccessPromise = void 0)),
            this.requestPhoneAccessPromise
        }
        async requestWriteAccess(t={}) {
            return this.requestWriteAccessPromise || (this.requestWriteAccessPromise = gu({
                ...t,
                method: "web_app_request_write_access",
                event: "write_access_requested",
                postEvent: this.postEvent
            }).then(({status: n})=>n).finally(()=>this.requestWriteAccessPromise = void 0)),
            this.requestWriteAccessPromise
        }
        sendData(t) {
            const {size: n} = new Blob([t]);
            if (!n || n > 4096)
                throw new Error(`Passed data has incorrect size: ${n}`);
            this.postEvent("web_app_data_send", {
                data: t
            })
        }
        setHeaderColor(t) {
            this.postEvent("web_app_set_header_color", ig(t) ? {
                color: t
            } : {
                color_key: t
            }),
            this.set("headerColor", t)
        }
        setBgColor(t) {
            this.postEvent("web_app_set_background_color", {
                color: t
            }),
            this.set("bgColor", t)
        }
        switchInlineQuery(t, n=[]) {
            if (!this.supports("switchInlineQuery") && !this.isBotInline)
                throw new Error("Method is unsupported because Mini App should be launched in inline mode.");
            this.postEvent("web_app_switch_inline_query", {
                query: t,
                chat_types: n
            })
        }
    }
    const zC = _g("miniApp", ({themeParams: e, botInline: t=!1, state: n={
        bgColor: e.bgColor || "#ffffff",
        headerColor: e.headerBgColor || "#000000"
    }, ...s})=>new LC({
        ...s,
        ...n,
        botInline: t
    }))
      , NC = "/img/loading-rabbit.png"
      , IC = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "110",
        height: "24",
        fill: "none"
    }
      , FC = Xp('<path fill="#fff" d="M33.14 8.263c-1.807 0-3.176.652-3.898 1.458V3.35h-2.039v17.1h1.921l.077-1.309c.836.917 2.212 1.414 3.959 1.414s3.202-.504 4.084-1.455c1.093-1.17 1.603-2.694 1.603-4.795 0-1.974-.483-3.454-1.479-4.524-.965-1.035-2.309-1.517-4.229-1.517m-.187 1.922c1.464 0 2.408.368 3.058 1.194.537.687.776 1.621.776 3.03 0 1.531-.282 2.556-.888 3.223l-.002.002c-.624.704-1.649 1.06-3.048 1.06-2.282 0-3.117-1.26-3.413-2.017-.127-.398-.235-.748-.235-1.977 0-1.083.056-1.547.18-2.167.377-1.514 1.646-2.348 3.572-2.348M46.173 8.263c-1.957 0-3.555.642-4.621 1.858-.956 1.09-1.461 2.586-1.461 4.329 0 3.874 2.273 6.187 6.081 6.187s6.04-2.371 6.04-6.187-2.201-6.187-6.04-6.187m0 10.431c-2.645 0-4.042-1.467-4.042-4.244s1.465-4.202 4.02-4.202c2.744 0 4.022 1.335 4.022 4.202s-1.42 4.244-4 4.244M64.384 12.367c0 3.176.013 6.162.028 8.083h-2.104c-.005-1.905-.005-5.104-.005-7.812 0-1.617-.908-2.37-2.859-2.37-2.334 0-3.378 1.326-3.378 2.64v7.542h-2.06V8.49h1.998V9.61c1-1.153 2.834-1.348 3.96-1.348 2.768 0 4.421 1.535 4.421 4.105zM77.579 19.051V3.453h-2.04v6.154c-.776-.805-2.104-1.282-3.668-1.282-3.585 0-5.811 2.379-5.811 6.208s1.916 6.103 5.396 6.103c1.117 0 3.014-.204 4.116-1.458l.139 1.27h1.955l-.026-.276c0-.007-.062-.66-.062-1.122zm-5.79-.253c-2.469 0-3.67-1.402-3.67-4.286 0-2.735 1.284-4.182 3.711-4.182 1.305 0 2.188.29 2.782.914.638.67.949 1.76.949 3.33 0 2.882-1.199 4.224-3.772 4.224M90.686 16.445h-2.039l-.023.227c-.066.627-.547 2.084-3.608 2.084-2.472 0-3.806-1.146-3.967-3.408h9.663l.012-.24c.11-2.35-.39-4.127-1.487-5.282-.986-1.037-2.447-1.563-4.345-1.563-1.797 0-3.284.546-4.3 1.58-1.059 1.075-1.595 2.619-1.595 4.586 0 4.119 2.018 6.208 5.999 6.208 4.521 0 5.452-2.726 5.642-3.898zm-5.794-6.26c2.434 0 3.662 1.088 3.746 3.325h-7.596c.066-1.348.7-3.325 3.85-3.325"></path><path fill="#fff" d="m97.93 14.328 4.903-5.836h-2.402l-3.672 4.351-3.433-4.351h-2.538l4.766 5.893-5.09 6.065h2.381l3.841-4.582 3.701 4.582h2.496zM105.386 4.028v2.534h-.69V4.028h-1.008v-.574h2.709v.574zM109.369 6.562V4.51l-.717 2.053h-.667l-.694-2.053v2.053h-.631V3.454h.918l.749 2.25.784-2.25h.89v3.108h-.632"></path><path fill="url(#a)" d="M0 11.993V24h15.271L3.315 12z"></path><path fill="url(#b)" d="M0 11.993V24h15.271L3.315 12z"></path><path fill="url(#c)" d="M16.293 11.994 9.801 18.51l5.443 5.463 6.492-6.516z"></path><path fill="url(#d)" d="M15.245.014 9.802 5.477l6.492 6.517 5.443-5.463z"></path><path fill="url(#e)" d="M0 15.328 15.271 0H0v15.328"></path><defs><linearGradient id="a" x1="7.636" x2="7.636" y1="12.066" y2="23.561" gradientUnits="userSpaceOnUse"><stop offset=".65" stop-color="#1A8772"></stop><stop offset=".89" stop-color="#16AF91"></stop><stop offset="1" stop-color="#1A8772"></stop></linearGradient><linearGradient id="b" x1="-.309" x2="5.915" y1="16.027" y2="22.227" gradientUnits="userSpaceOnUse"><stop stop-color="#205147"></stop><stop offset="1" stop-color="#205349" stop-opacity="0"></stop></linearGradient><linearGradient id="c" x1="12.394" x2="18.622" y1="21.369" y2="15.165" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#205147"></stop><stop offset=".5" stop-color="#1D6C5C"></stop></linearGradient><linearGradient id="d" x1="12.469" x2="18.606" y1="2.69" y2="8.806" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#205147"></stop><stop offset=".5" stop-color="#1D6C5C"></stop></linearGradient><linearGradient id="e" x1="7.636" x2="7.636" y1="15.562" y2=".662" gradientUnits="userSpaceOnUse"><stop offset=".65" stop-color="#1A8772"></stop><stop offset=".89" stop-color="#16AF91"></stop><stop offset="1" stop-color="#1A8772"></stop></linearGradient></defs>', 8)
      , jC = [FC];
    function UC(e, t) {
        return E(),
        V("svg", IC, [...jC])
    }
    const Nf = {
        render: UC
    }
      , ra = e=>(ds("data-v-cac868fa"),
    e = e(),
    hs(),
    e)
      , qC = {
        class: "flex h-full w-full items-center min-h-screen flex-col pt-[10%] relative"
    }
      , BC = ra(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-dark-green/50 blur-xl translate-x-[-70%] aspect-square h-[313px] absolute top-[40%]"
    }, null, -1))
      , VC = ra(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo/50 blur-xl h-[313px] aspect-square absolute top-[70%] right-0 translate-x-[50%]"
    }, null, -1))
      , HC = ra(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo/50 blur-xl h-[313px] aspect-square absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
    }, null, -1))
      , WC = ra(()=>m("h2", {
        class: "uppercase mb-4 relative"
    }, "Loading", -1))
      , YC = {
        class: "relative flex flex-grow w-full h-full overflow-visible"
    }
      , ZC = ra(()=>m("div", {
        class: "bg-bondex-white/50 pointer-events-none absolute left-[50%] top-[50%] aspect-square w-[120%] translate-x-[-50%] translate-y-[-45%] rounded-full blur-[30px]"
    }, null, -1))
      , KC = Pe({
        __name: "LoadingScreen",
        setup(e) {
            const t = fe(!1)
              , n = fe(!1)
              , s = fe(!1)
              , r = fe(!1)
              , i = ()=>{
                t.value = !0
            }
              , o = ()=>{
                n.value = !0
            }
              , a = ()=>{
                s.value = !0
            }
              , l = ()=>{
                r.value = !0
            }
            ;
            return (u,c)=>(E(),
            V("div", qC, [BC, VC, HC, m("img", {
                onLoad: o,
                src: fs,
                class: le(["w-[190px] absolute move-animation right-0 rotate-[-45deg] translate-x-[40%] transition-all duration-1000", {
                    "opacity-100": n.value
                }]),
                alt: "coin"
            }, null, 34), m("img", {
                onLoad: i,
                src: fs,
                class: le(["w-[190px] absolute move-top-animation left-0 translate-x-[-40%] opacity-0 transition-all duration-1000", {
                    "opacity-100": t.value
                }]),
                alt: "coin"
            }, null, 34), Z(S(Nf), {
                class: "mb-6 relative"
            }), WC, m("div", YC, [m("img", {
                onLoad: l,
                src: qu,
                alt: "extra-lines",
                class: le(["absolute w-full transition-all duration-[2s] translate-y-[120%] opacity-0", {
                    "!translate-y-0 opacity-100": r.value
                }])
            }, null, 34), ZC, m("img", {
                onLoad: a,
                src: NC,
                alt: "rabbit",
                class: le(["absolute h-full left-[50%] translate-x-[-50%] object-cover opacity-0 transition-all duration-1000", {
                    "opacity-100 ": s.value
                }])
            }, null, 34)])]))
        }
    })
      , GC = cn(KC, [["__scopeId", "data-v-cac868fa"]])
      , QC = "/img/desktop-rabbit.png"
      , JC = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "144",
        height: "144",
        fill: "none"
    }
      , XC = Xp('<path fill="#fff" d="M39.368 0h-4.49v4.49h4.49zM48.087 0h-4.49v4.49h4.49zM61.166 0h-4.49v4.49h4.49zM69.886 0h-4.491v4.49h4.49zM78.605 0h-4.49v4.49h4.49zM91.684 0h-4.49v4.49h4.49zM104.763 0h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 0h-4.49v4.49h4.49zM39.368 4.36h-4.49v4.49h4.49zM48.087 4.36h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 4.36h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 4.36h-4.49v4.49h4.49zM65.526 4.36h-4.49v4.49h4.49zM74.245 4.36h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 4.36h-4.49v4.49h4.49zM87.324 4.36h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 4.36h-4.49v4.49h4.49zM100.403 4.36h-4.49v4.49h4.49zM39.368 8.72h-4.49v4.49h4.49zM52.447 8.72h-4.49v4.49h4.49zM65.526 8.72h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 8.72h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 8.72h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 8.72h-4.49v4.49h4.49zM87.324 8.72h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 8.72h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 8.72h-4.49v4.49h4.49zM104.763 8.72h-4.491v4.49h4.491zM56.807 13.079h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 13.079h-4.49v4.49h4.49zM69.886 13.079h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 13.079h-4.49v4.49h4.49zM91.684 13.079h-4.49v4.49h4.49zM100.403 13.079h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 13.079h-4.491v4.49h4.491zM43.727 17.439h-4.49v4.49h4.49zM61.166 17.439h-4.49v4.49h4.49z"></path><path fill="#fff" d="M65.526 17.439h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 17.439h-4.491v4.49h4.49zM82.965 17.439h-4.49v4.49h4.49zM96.044 17.439h-4.49v4.49h4.49zM109.122 17.439h-4.49v4.49h4.49zM39.368 21.798h-4.49v4.49h4.49zM52.447 21.798h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 21.798h-4.49v4.49h4.49zM39.368 26.158h-4.49v4.49h4.49zM48.087 26.158h-4.49v4.49h4.49zM56.807 26.158h-4.49v4.49h4.49zM65.526 26.158h-4.49v4.49h4.49zM74.245 26.158h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 26.158h-4.49v4.49h4.49zM91.684 26.158h-4.49v4.49h4.49zM100.403 26.158h-4.49v4.49h4.49zM109.122 26.158h-4.49v4.49h4.49zM39.368 30.518h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 30.518h-4.49v4.49h4.49zM52.447 30.518h-4.49v4.49h4.49zM74.245 30.518h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 30.518h-4.49v4.49h4.49zM96.044 30.518h-4.49v4.49h4.49zM109.122 30.518h-4.49v4.49h4.49zM13.21 34.877H8.72v4.49h4.49z"></path><path fill="#fff" d="M17.57 34.877h-4.491v4.49h4.49z"></path><path fill="#fff" d="M21.93 34.877h-4.491v4.49h4.49zM30.649 34.877h-4.49v4.49h4.49zM39.368 34.877h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 34.877h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 34.877h-4.49v4.49h4.49zM69.886 34.877h-4.491v4.49h4.49zM78.605 34.877h-4.49v4.49h4.49zM87.324 34.877h-4.49v4.49h4.49zM100.403 34.877h-4.49v4.49h4.49zM109.122 34.877h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 34.877h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 34.877h-4.491v4.49h4.491z"></path><path fill="#fff" d="M122.202 34.877h-4.491v4.49h4.491zM135.281 34.877h-4.491v4.49h4.491z"></path><path fill="#fff" d="M139.64 34.877h-4.49v4.49h4.49z"></path><path fill="#fff" d="M144 34.877h-4.491v4.49H144zM4.49 39.237H0v4.49h4.49zM13.21 39.237H8.72v4.49h4.49zM39.368 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 39.237h-4.49v4.49h4.49zM56.807 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M65.526 39.237h-4.49v4.49h4.49zM78.605 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 39.237h-4.49v4.49h4.49zM104.763 39.237h-4.491v4.49h4.491zM113.482 39.237h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 39.237h-4.491v4.49h4.491zM135.281 39.237h-4.491v4.49h4.491zM144 39.237h-4.491v4.49H144zM4.49 43.597H0v4.49h4.49zM30.649 43.597h-4.49v4.49h4.49z"></path><path fill="#fff" d="M35.008 43.597h-4.49v4.49h4.49zM48.087 43.597h-4.49v4.49h4.49zM56.807 43.597h-4.49v4.49h4.49zM65.526 43.597h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 43.597h-4.491v4.49h4.49zM82.965 43.597h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 43.597h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 43.597h-4.49v4.49h4.49zM100.403 43.597h-4.49v4.49h4.49zM113.482 43.597h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 43.597h-4.491v4.49h4.491z"></path><path fill="#fff" d="M122.202 43.597h-4.491v4.49h4.491zM139.64 43.597h-4.49v4.49h4.49zM4.49 47.956H0v4.49h4.49zM13.21 47.956H8.72v4.49h4.49zM21.93 47.956h-4.491v4.49h4.49z"></path><path fill="#fff" d="M26.289 47.956h-4.49v4.49h4.49zM43.727 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 47.956h-4.49v4.49h4.49zM69.886 47.956h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 47.956h-4.49v4.49h4.49zM104.763 47.956h-4.491v4.49h4.491zM113.482 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 47.956h-4.491v4.49h4.491zM130.921 47.956h-4.49v4.49h4.49z"></path><path fill="#fff" d="M135.281 47.956h-4.491v4.49h4.491zM144 47.956h-4.491v4.49H144zM4.49 52.316H0v4.49h4.49zM13.21 52.316H8.72v4.49h4.49z"></path><path fill="#fff" d="M17.57 52.316h-4.491v4.49h4.49zM30.649 52.316h-4.49v4.49h4.49zM56.807 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M65.526 52.316h-4.49v4.49h4.49zM74.245 52.316h-4.49v4.49h4.49zM87.324 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M100.403 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 52.316h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 52.316h-4.49v4.49h4.49zM122.202 52.316h-4.491v4.49h4.491zM139.64 52.316h-4.49v4.49h4.49z"></path><path fill="#fff" d="M144 52.316h-4.491v4.49H144zM8.85 56.676H4.36v4.49h4.49z"></path><path fill="#fff" d="M13.21 56.676H8.72v4.49h4.49zM26.289 56.676h-4.49v4.49h4.49zM39.368 56.676h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 56.676h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 56.676h-4.49v4.49h4.49zM56.807 56.676h-4.49v4.49h4.49zM65.526 56.676h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 56.676h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 56.676h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 56.676h-4.49v4.49h4.49zM104.763 56.676h-4.491v4.49h4.491zM126.561 56.676h-4.49v4.49h4.49z"></path><path fill="#fff" d="M130.921 56.676h-4.49v4.49h4.49zM144 56.676h-4.491v4.49H144zM4.49 61.035H0v4.49h4.49zM13.21 61.035H8.72v4.49h4.49z"></path><path fill="#fff" d="M17.57 61.035h-4.491v4.49h4.49z"></path><path fill="#fff" d="M21.93 61.035h-4.491v4.49h4.49z"></path><path fill="#fff" d="M26.289 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M30.649 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M35.008 61.035h-4.49v4.49h4.49zM43.727 61.035h-4.49v4.49h4.49zM65.526 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 61.035h-4.491v4.49h4.49zM78.605 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 61.035h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 61.036h-4.49v4.49h4.49zM100.403 61.035h-4.49v4.49h4.49zM113.482 61.035h-4.49v4.49h4.49zM122.202 61.035h-4.491v4.49h4.491z"></path><path fill="#fff" d="M126.561 61.035h-4.49v4.49h4.49zM139.64 61.035h-4.49v4.49h4.49zM4.49 65.395H0v4.49h4.49z"></path><path fill="#fff" d="M8.85 65.395H4.36v4.49h4.49zM26.289 65.395h-4.49v4.49h4.49zM39.368 65.395h-4.49v4.49h4.49zM48.087 65.395h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 65.395h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 65.395h-4.49v4.49h4.49zM69.886 65.395h-4.491v4.49h4.49zM82.965 65.395h-4.49v4.49h4.49zM91.684 65.395h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 65.395h-4.49v4.49h4.49z"></path><path fill="#fff" d="M100.403 65.395h-4.49v4.49h4.49zM126.561 65.395h-4.49v4.49h4.49z"></path><path fill="#fff" d="M130.921 65.395h-4.49v4.49h4.49zM144 65.395h-4.491v4.49H144zM8.85 69.755H4.36v4.49h4.49z"></path><path fill="#fff" d="M13.21 69.755H8.72v4.49h4.49z"></path><path fill="#fff" d="M17.57 69.755h-4.491v4.49h4.49zM30.649 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M35.008 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M39.368 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 69.755h-4.49v4.49h4.49zM74.245 69.755h-4.49v4.49h4.49zM87.324 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 69.755h-4.49v4.49h4.49zM100.403 69.755h-4.49v4.49h4.49zM109.122 69.755h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 69.755h-4.49v4.49h4.49zM126.561 69.755h-4.49v4.49h4.49zM135.281 69.755h-4.491v4.49h4.491zM144 69.755h-4.491v4.49H144zM4.49 74.114H0v4.49h4.49z"></path><path fill="#fff" d="M8.85 74.114H4.36v4.49h4.49zM17.57 74.114h-4.491v4.49h4.49zM39.368 74.114h-4.49v4.49h4.49zM56.807 74.114h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 74.114h-4.49v4.49h4.49zM100.403 74.114h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 74.114h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 74.114h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 74.114h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 74.114h-4.491v4.49h4.491zM26.289 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M30.649 78.474h-4.49v4.49h4.49zM43.727 78.474h-4.49v4.49h4.49zM52.447 78.474h-4.49v4.49h4.49zM61.166 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M65.526 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M69.886 78.474h-4.491v4.49h4.49zM78.605 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 78.474h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 78.474h-4.49v4.49h4.49zM100.403 78.474h-4.49v4.49h4.49zM109.122 78.474h-4.49v4.49h4.49zM135.281 78.474h-4.491v4.49h4.491zM8.85 82.834H4.36v4.49h4.49z"></path><path fill="#fff" d="M13.21 82.834H8.72v4.49h4.49z"></path><path fill="#fff" d="M17.57 82.834h-4.491v4.49h4.49zM26.289 82.834h-4.49v4.49h4.49zM35.008 82.834h-4.49v4.49h4.49zM43.727 82.834h-4.49v4.49h4.49zM52.447 82.834h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 82.834h-4.49v4.49h4.49zM91.684 82.834h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 82.834h-4.49v4.49h4.49zM104.763 82.834h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 82.834h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 82.834h-4.49v4.49h4.49zM122.202 82.834h-4.491v4.49h4.491z"></path><path fill="#fff" d="M126.561 82.834h-4.49v4.49h4.49z"></path><path fill="#fff" d="M130.921 82.834h-4.49v4.49h4.49z"></path><path fill="#fff" d="M135.281 82.834h-4.491v4.49h4.491zM26.289 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M30.649 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M35.008 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M39.368 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 87.194h-4.49v4.49h4.49zM56.807 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 87.194h-4.49v4.49h4.49zM69.886 87.194h-4.491v4.49h4.49zM78.605 87.194h-4.49v4.49h4.49zM87.324 87.194h-4.49v4.49h4.49zM100.403 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 87.194h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 87.194h-4.49v4.49h4.49zM122.202 87.194h-4.491v4.49h4.491z"></path><path fill="#fff" d="M126.561 87.194h-4.49v4.49h4.49z"></path><path fill="#fff" d="M130.921 87.194h-4.49v4.49h4.49zM139.64 87.194h-4.49v4.49h4.49zM4.49 91.553H0v4.49h4.49z"></path><path fill="#fff" d="M8.85 91.553H4.36v4.49h4.49zM17.57 91.553h-4.491v4.49h4.49zM26.289 91.553h-4.49v4.49h4.49zM35.008 91.553h-4.49v4.49h4.49zM43.727 91.553h-4.49v4.49h4.49zM56.807 91.553h-4.49v4.49h4.49zM69.886 91.553h-4.491v4.49h4.49zM78.605 91.553h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 91.553h-4.49v4.49h4.49zM100.403 91.553h-4.49v4.49h4.49zM113.482 91.553h-4.49v4.49h4.49zM122.202 91.553h-4.491v4.49h4.491zM130.921 91.553h-4.49v4.49h4.49zM4.49 95.913H0v4.49h4.49zM26.289 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M30.649 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M35.008 95.913h-4.49v4.49h4.49zM43.727 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 95.913h-4.49v4.49h4.49zM74.245 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 95.913h-4.49v4.49h4.49zM100.403 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 95.913h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 95.913h-4.49v4.49h4.49zM130.921 95.913h-4.49v4.49h4.49z"></path><path fill="#fff" d="M135.281 95.913h-4.491v4.49h4.491z"></path><path fill="#fff" d="M139.64 95.913h-4.49v4.49h4.49zM4.49 100.272H0v4.491h4.49zM17.57 100.272h-4.491v4.491h4.49zM26.289 100.272h-4.49v4.491h4.49zM35.008 100.272h-4.49v4.491h4.49zM48.087 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M52.447 100.272h-4.49v4.491h4.49zM65.526 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M69.886 100.272h-4.491v4.491h4.49zM78.605 100.272h-4.49v4.491h4.49zM91.684 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M96.044 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M100.403 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M104.763 100.272h-4.491v4.491h4.491zM130.921 100.272h-4.49v4.491h4.49z"></path><path fill="#fff" d="M135.281 100.272h-4.491v4.491h4.491z"></path><path fill="#fff" d="M139.64 100.272h-4.49v4.491h4.49zM4.49 104.632H0v4.491h4.49zM13.21 104.632H8.72v4.491h4.49z"></path><path fill="#fff" d="M17.57 104.632h-4.491v4.491h4.49z"></path><path fill="#fff" d="M21.93 104.632h-4.491v4.491h4.49z"></path><path fill="#fff" d="M26.289 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M30.649 104.632h-4.49v4.491h4.49zM43.727 104.632h-4.49v4.491h4.49zM52.447 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M56.807 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M61.166 104.632h-4.49v4.491h4.49zM69.886 104.632h-4.491v4.491h4.49z"></path><path fill="#fff" d="M74.245 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M78.605 104.632h-4.49v4.491h4.49zM87.324 104.632h-4.49v4.491h4.49zM100.403 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M104.763 104.632h-4.491v4.491h4.491z"></path><path fill="#fff" d="M109.122 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M113.482 104.632h-4.49v4.491h4.49z"></path><path fill="#fff" d="M117.842 104.632h-4.491v4.491h4.491z"></path><path fill="#fff" d="M122.202 104.632h-4.491v4.491h4.491z"></path><path fill="#fff" d="M126.561 104.632h-4.49v4.491h4.49zM144 104.632h-4.491v4.491H144zM39.368 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M43.727 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 108.992h-4.49v4.49h4.49zM69.886 108.992h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 108.992h-4.49v4.49h4.49zM91.684 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M100.403 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M104.763 108.992h-4.491v4.49h4.491z"></path><path fill="#fff" d="M109.122 108.992h-4.49v4.49h4.49zM126.561 108.992h-4.49v4.49h4.49z"></path><path fill="#fff" d="M130.921 108.992h-4.49v4.49h4.49zM144 108.992h-4.491v4.49H144zM43.727 113.352h-4.49v4.49h4.49z"></path><path fill="#fff" d="M48.087 113.352h-4.49v4.49h4.49zM61.166 113.352h-4.49v4.49h4.49zM69.886 113.352h-4.491v4.49h4.49z"></path><path fill="#fff" d="M74.245 113.352h-4.49v4.49h4.49zM96.044 113.352h-4.49v4.49h4.49zM109.122 113.352h-4.49v4.49h4.49zM117.842 113.352h-4.491v4.49h4.491zM126.561 113.352h-4.49v4.49h4.49zM135.281 113.352h-4.491v4.49h4.491zM43.727 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M48.087 117.711h-4.49v4.491h4.49zM61.166 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M65.526 117.711h-4.49v4.491h4.49zM87.324 117.711h-4.49v4.491h4.49zM96.044 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M100.403 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M104.763 117.711h-4.491v4.491h4.491z"></path><path fill="#fff" d="M109.122 117.711h-4.49v4.491h4.49zM126.561 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M130.921 117.711h-4.49v4.491h4.49z"></path><path fill="#fff" d="M135.281 117.711h-4.491v4.491h4.491zM39.368 122.071h-4.49v4.49h4.49zM48.087 122.071h-4.49v4.49h4.49zM61.166 122.071h-4.49v4.49h4.49zM74.245 122.071h-4.49v4.49h4.49zM87.324 122.071h-4.49v4.49h4.49z"></path><path fill="#fff" d="M91.684 122.071h-4.49v4.49h4.49z"></path><path fill="#fff" d="M96.044 122.071h-4.49v4.49h4.49zM109.122 122.071h-4.49v4.49h4.49z"></path><path fill="#fff" d="M113.482 122.071h-4.49v4.49h4.49z"></path><path fill="#fff" d="M117.842 122.071h-4.491v4.49h4.491z"></path><path fill="#fff" d="M122.202 122.071h-4.491v4.49h4.491z"></path><path fill="#fff" d="M126.561 122.071h-4.49v4.49h4.49zM139.64 122.071h-4.49v4.49h4.49zM39.368 126.431h-4.49v4.49h4.49zM48.087 126.431h-4.49v4.49h4.49zM61.166 126.431h-4.49v4.49h4.49zM78.605 126.431h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 126.431h-4.49v4.49h4.49zM91.684 126.431h-4.49v4.49h4.49zM100.403 126.431h-4.49v4.49h4.49zM126.561 126.431h-4.49v4.49h4.49zM135.281 126.431h-4.491v4.49h4.491z"></path><path fill="#fff" d="M139.64 126.431h-4.49v4.49h4.49zM39.368 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M43.727 130.79h-4.49v4.491h4.49zM56.807 130.79h-4.49v4.491h4.49zM69.886 130.79h-4.491v4.491h4.49zM78.605 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M82.965 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M87.324 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M91.684 130.79h-4.49v4.491h4.49zM113.482 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M117.842 130.79h-4.491v4.491h4.491zM130.921 130.79h-4.49v4.491h4.49z"></path><path fill="#fff" d="M135.281 130.79h-4.491v4.491h4.491zM48.087 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M52.447 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M56.807 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M61.166 135.15h-4.49v4.49h4.49zM74.245 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M78.605 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M82.965 135.15h-4.49v4.49h4.49z"></path><path fill="#fff" d="M87.324 135.15h-4.49v4.49h4.49zM96.044 135.15h-4.49v4.49h4.49zM104.763 135.15h-4.491v4.49h4.491zM122.202 135.15h-4.491v4.49h4.491zM135.281 135.15h-4.491v4.49h4.491zM43.727 139.51h-4.49V144h4.49zM56.807 139.51h-4.49V144h4.49z"></path><path fill="#fff" d="M61.166 139.51h-4.49V144h4.49zM74.245 139.51h-4.49V144h4.49z"></path><path fill="#fff" d="M78.605 139.51h-4.49V144h4.49z"></path><path fill="#fff" d="M82.965 139.51h-4.49V144h4.49zM91.684 139.51h-4.49V144h4.49zM104.763 139.51h-4.491V144h4.491z"></path><path fill="#fff" d="M109.122 139.51h-4.49V144h4.49zM117.842 139.51h-4.491V144h4.491zM130.921 139.51h-4.49V144h4.49z"></path><path fill="#fff" d="M135.281 139.51h-4.491V144h4.491z"></path><path fill="#fff" d="M139.64 139.51h-4.49V144h4.49zM0 0v30.518h30.518V0zm26.158 26.158H4.36V4.36h21.798zM113.351 0v30.518h30.518V0zm26.158 26.158h-21.798V4.36h21.798zM0 113.352v30.517h30.518v-30.517zm26.158 26.158H4.36v-21.799h21.798z"></path><path fill="#fff" d="M21.798 8.72H8.72v13.078H21.8zM135.15 8.72h-13.079v13.078h13.079zM21.798 122.071H8.72v13.079H21.8z"></path>', 205)
      , eT = [XC];
    function tT(e, t) {
        return E(),
        V("svg", JC, [...eT])
    }
    const nT = {
        render: tT
    }
      , sT = {
        class: "flex h-full w-full items-center min-h-screen flex-col justify-center pt-[10%] relative text-bondex-white"
    }
      , rT = m("div", {
        class: "pointer-events-none rounded-full bg-bondex-dark-green blur-[150px] translate-x-[-70%] w-[197px] h-[313px] absolute top-[40%]"
    }, null, -1)
      , iT = m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo blur-[150px] w-[197px] h-[313px] absolute top-[70%] right-0 translate-x-[50%]"
    }, null, -1)
      , oT = m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo blur-[150px] w-[197px] h-[313px] absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
    }, null, -1)
      , aT = m("h3", {
        class: "text-24-bold relative mb-[40px]"
    }, "Play on your mobile", -1)
      , lT = m("p", {
        class: "text-12 mb-3"
    }, "@BunnyBlitz_bot", -1)
      , cT = {
        class: "relative flex flex-grow w-full h-full"
    }
      , uT = Pe({
        __name: "DesktopScreen",
        setup(e) {
            const t = fe(!1)
              , n = fe(!1)
              , s = fe(!1)
              , r = fe(!1)
              , i = ()=>{
                t.value = !0
            }
              , o = ()=>{
                n.value = !0
            }
              , a = ()=>{
                s.value = !0
            }
              , l = ()=>{
                r.value = !0
            }
            ;
            return (u,c)=>(E(),
            V("div", sT, [rT, iT, oT, m("img", {
                onLoad: o,
                src: fs,
                class: le(["w-[190px] absolute right-0 rotate-[-45deg] top-[60%] translate-x-[100%] transition-all duration-1000", {
                    "!translate-x-[40%]": n.value
                }]),
                alt: "coin"
            }, null, 34), m("img", {
                onLoad: i,
                src: fs,
                class: le(["w-[190px] absolute left-0 top-0 translate-y-[-30%] translate-x-[-100%] transition-all duration-1000", {
                    "!translate-x-[-40%]": t.value
                }]),
                alt: "coin"
            }, null, 34), Z(S(Nf), {
                class: "mb-[40px] relative"
            }), aT, Z(S(nT), {
                class: "mb-2 relative"
            }), lT, m("div", cT, [m("img", {
                onLoad: l,
                src: dm,
                alt: "lines",
                class: le(["absolute w-[70%] transition-all duration-1000 translate-y-[120%] left-[50%] translate-x-[-50%] opacity-0", {
                    "!translate-y-0 opacity-100": r.value
                }])
            }, null, 34), m("img", {
                onLoad: a,
                src: QC,
                alt: "rabbit",
                class: le(["absolute h-full left-[50%] translate-x-[-50%] opacity-0 transition-all duration-1000", {
                    "opacity-100": s.value
                }])
            }, null, 34)])]))
        }
    })
      , fT = (e,t)=>{
        const n = nr()
          , s = on();
        return Di({
            mutationKey: ["login"],
            async mutationFn() {
                return await e2.post("/authorize", e)
            },
            onSuccess(r) {
                localStorage.setItem(`access_token_${t}`, r.access_token),
                n.invalidateQueries({
                    queryKey: Ct.getMe.queryKey
                }),
                s.setUser(r),
                s.setPassiveIncome(r.latest_profit)
            }
        })
    }
      , dT = "/img/construction-rabbit.png"
      , Ui = e=>(ds("data-v-46beeb6b"),
    e = e(),
    hs(),
    e)
      , hT = {
        class: "flex h-full w-full items-center min-h-screen flex-col pt-[10%] relative"
    }
      , pT = Ui(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-dark-green/50 blur-xl translate-x-[-70%] aspect-square h-[313px] absolute top-[40%]"
    }, null, -1))
      , mT = Ui(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo/50 blur-xl h-[313px] aspect-square absolute top-[70%] right-0 translate-x-[50%]"
    }, null, -1))
      , _T = Ui(()=>m("div", {
        class: "pointer-events-none rounded-full bg-bondex-indigo/50 blur-xl h-[313px] aspect-square absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]"
    }, null, -1))
      , gT = Ui(()=>m("h2", {
        class: "uppercase mb-3 text-[32px] font-semibold relative text-center"
    }, [ct(" Technical work "), m("br"), ct(" is in progress ")], -1))
      , yT = Ui(()=>m("p", {
        class: "text-bondex-white text-xs font-sora font-light"
    }, "Please come back later", -1))
      , vT = {
        class: "relative flex flex-grow w-full h-full overflow-visible"
    }
      , bT = Ui(()=>m("div", {
        class: "bg-bondex-white/50 pointer-events-none absolute left-[50%] top-[50%] aspect-square w-[120%] translate-x-[-50%] translate-y-[-45%] rounded-full blur-[30px]"
    }, null, -1))
      , wT = Pe({
        __name: "Placeholder",
        setup(e) {
            const t = fe(!1)
              , n = fe(!1)
              , s = fe(!1)
              , r = fe(!1)
              , i = ()=>{
                t.value = !0
            }
              , o = ()=>{
                n.value = !0
            }
              , a = ()=>{
                s.value = !0
            }
              , l = ()=>{
                r.value = !0
            }
            ;
            return (u,c)=>(E(),
            V("div", hT, [pT, mT, _T, m("img", {
                onLoad: o,
                src: fs,
                class: le(["w-[190px] absolute move-animation right-0 rotate-[-45deg] translate-x-[40%] transition-all duration-1000", {
                    "opacity-100": n.value
                }]),
                alt: "coin"
            }, null, 34), m("img", {
                onLoad: i,
                src: fs,
                class: le(["w-[190px] absolute move-top-animation left-0 translate-x-[-40%] opacity-0 transition-all duration-1000", {
                    "opacity-100": t.value
                }]),
                alt: "coin"
            }, null, 34), Z(S(Nf), {
                class: "mb-6 relative"
            }), gT, yT, m("div", vT, [m("img", {
                onLoad: l,
                src: qu,
                alt: "extra-lines",
                class: le(["absolute w-full transition-all duration-[2s] translate-y-[120%] opacity-0", {
                    "!translate-y-0 opacity-100": r.value
                }])
            }, null, 34), bT, m("img", {
                onLoad: a,
                src: dT,
                alt: "rabbit",
                class: le(["absolute h-full left-[50%] translate-x-[-50%] object-cover opacity-0 transition-all duration-1000", {
                    "opacity-100 ": s.value
                }])
            }, null, 34)])]))
        }
    })
      , xT = cn(wT, [["__scopeId", "data-v-46beeb6b"]])
      , MT = {
        key: 1,
        class: "contents"
    }
      , kT = Pe({
        __name: "App",
        setup(e) {
            var h;
            const {initDataRaw: t, platform: n, initData: s} = mg()
              , [r] = RC()
              , [i] = zC()
              , o = Cm()
              , a = Tm()
              , l = on()
              , {mutateAsync: u} = fT(t ?? "", ((h = s == null ? void 0 : s.user) == null ? void 0 : h.id) ?? 0);
            Rf(),
            r.on("click", ()=>{
                o.push("/"),
                r.hide()
            }
            ),
            Lf("web_app_expand");
            let c;
            Wo(async()=>{
                var g;
                o.push("/"),
                localStorage.setItem(`access_token_${((g = s == null ? void 0 : s.user) == null ? void 0 : g.id) ?? 0}`, ""),
                i.ready(),
                await u(),
                l.user && (c = setInterval(()=>{
                    l.recharge()
                }
                , 1e3))
            }
            ),
            Du(()=>{
                c && clearInterval(c)
            }
            ),
            Wy(()=>{
                if (a.path !== "/") {
                    r.show();
                    return
                }
                r.hide()
            }
            );
            const f = ye(()=>{
                switch (n) {
                case "android":
                case "ios":
                    return !0;
                case "desktop":
                case "tdesktop":
                case "web":
                    return !0;
                default:
                    return !0
                }
            }
            )
              , d = ye(()=>!1);
            return (g,v)=>{
                const C = $u("RouterView");
                return d.value ? (E(),
                ve(xT, {
                    key: 0
                })) : (E(),
                V("div", MT, [Z(wt, {
                    name: "fade"
                }, {
                    default: ie(()=>[S(l).initData ? ut("", !0) : (E(),
                    ve(GC, {
                        key: 0
                    }))]),
                    _: 1
                }), f.value && S(l).initData ? (E(),
                ve(C, {
                    key: 0
                })) : ut("", !0), !f.value && S(l).initData ? (E(),
                ve(uT, {
                    key: 1
                })) : ut("", !0)]))
            }
        }
    })
      , ST = Qv()
      , gg = Hv(kT)
      , OT = {
        beforeMount(e, t) {
            e.stopProp = n=>n.stopPropagation(),
            e.event = n=>{
                t.value && typeof t.value == "function" && t.value(n)
            }
            ,
            e.addEventListener("click", e.stopProp),
            document.body.addEventListener("click", e.event)
        },
        unmounted(e) {
            e.stopProp && e.removeEventListener("click", e.stopProp),
            e.event && document.body.removeEventListener("click", e.event)
        }
    }
      , ET = new d_({
        defaultOptions: {
            queries: {
                retry: 0
            }
        },
        queryCache: new u_({
            onError: async(e,t)=>{
                console.error(t.queryKey, e.message)
            }
        }),
        mutationCache: new f_({
            onError: async e=>{
                console.error(e)
            }
        })
    })
      , CT = {
        queryClient: ET
    };
    gg.directive("click-outside", OT);
    gg.use(ST).use($5).use(dw, CT).mount("#app")
}
);
export default TT();
