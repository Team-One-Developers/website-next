/* eslint-disable */
// Generated 2024-11-18T10:32:03.671Z
// Minified build, append `?min=0` for easier debugging

var ut = ["gray", "blue", "purple", "magenta", "red", "orange", "yellow", "green", "cyan"],
    Pt = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]
var Hr = { title: "Black", hex: "#0d0e12" },
    Fr = { title: "White", hex: "#ffffff" },
    Ir = {
        50: { title: "Gray 50", hex: "#f6f6f8" },
        100: { title: "Gray 100", hex: "#eeeef1" },
        200: { title: "Gray 200", hex: "#e3e4e8" },
        300: { title: "Gray 300", hex: "#bbbdc9" },
        400: { title: "Gray 400", hex: "#9499ad" },
        500: { title: "Gray 500", hex: "#727892" },
        600: { title: "Gray 600", hex: "#515870" },
        700: { title: "Gray 700", hex: "#383d51" },
        800: { title: "Gray 800", hex: "#252837" },
        900: { title: "Gray 900", hex: "#1b1d27" },
        950: { title: "Gray 950", hex: "#13141b" }
    },
    Gr = {
        50: { title: "Blue 50", hex: "#f5f8ff" },
        100: { title: "Blue 100", hex: "#e5edff" },
        200: { title: "Blue 200", hex: "#dbe5ff" },
        300: { title: "Blue 300", hex: "#a8bfff" },
        400: { title: "Blue 400", hex: "#7595ff" },
        500: { title: "Blue 500", hex: "#556bfc" },
        600: { title: "Blue 600", hex: "#4043e7" },
        700: { title: "Blue 700", hex: "#2927aa" },
        800: { title: "Blue 800", hex: "#192457" },
        900: { title: "Blue 900", hex: "#161a41" },
        950: { title: "Blue 950", hex: "#101228" }
    },
    Ar = {
        50: { title: "Purple 50", hex: "#f8f5ff" },
        100: { title: "Purple 100", hex: "#f1ebff" },
        200: { title: "Purple 200", hex: "#ece1fe" },
        300: { title: "Purple 300", hex: "#ccb1fc" },
        400: { title: "Purple 400", hex: "#b087f7" },
        500: { title: "Purple 500", hex: "#8f57ef" },
        600: { title: "Purple 600", hex: "#721fe5" },
        700: { title: "Purple 700", hex: "#4c1a9e" },
        800: { title: "Purple 800", hex: "#2f1862" },
        900: { title: "Purple 900", hex: "#23173f" },
        950: { title: "Purple 950", hex: "#181128" }
    },
    Pr = {
        50: { title: "Magenta 50", hex: "#fef6f9" },
        100: { title: "Magenta 100", hex: "#fde8ef" },
        200: { title: "Magenta 200", hex: "#fcdee9" },
        300: { title: "Magenta 300", hex: "#f7abc5" },
        400: { title: "Magenta 400", hex: "#f0709b" },
        500: { title: "Magenta 500", hex: "#e72767" },
        600: { title: "Magenta 600", hex: "#b11651" },
        700: { title: "Magenta 700", hex: "#7c1342" },
        800: { title: "Magenta 800", hex: "#4b1130" },
        900: { title: "Magenta 900", hex: "#341325" },
        950: { title: "Magenta 950", hex: "#1f0f14" }
    },
    Er = {
        50: { title: "Red 50", hex: "#fff6f5" },
        100: { title: "Red 100", hex: "#ffe7e5" },
        200: { title: "Red 200", hex: "#ffdedc" },
        300: { title: "Red 300", hex: "#fdada5" },
        400: { title: "Red 400", hex: "#f77769" },
        500: { title: "Red 500", hex: "#ef4434" },
        600: { title: "Red 600", hex: "#cc2819" },
        700: { title: "Red 700", hex: "#8b2018" },
        800: { title: "Red 800", hex: "#4d1714" },
        900: { title: "Red 900", hex: "#321615" },
        950: { title: "Red 950", hex: "#1e1011" }
    },
    Lr = {
        50: { title: "Orange 50", hex: "#fff7f0" },
        100: { title: "Orange 100", hex: "#ffeadb" },
        200: { title: "Orange 200", hex: "#ffddc7" },
        300: { title: "Orange 300", hex: "#ffb685" },
        400: { title: "Orange 400", hex: "#ff8e42" },
        500: { title: "Orange 500", hex: "#fa6400" },
        600: { title: "Orange 600", hex: "#b14802" },
        700: { title: "Orange 700", hex: "#7c3404" },
        800: { title: "Orange 800", hex: "#461e07" },
        900: { title: "Orange 900", hex: "#32160b" },
        950: { title: "Orange 950", hex: "#21120d" }
    },
    $r = {
        50: { title: "Yellow 50", hex: "#fefae1" },
        100: { title: "Yellow 100", hex: "#fcf3bb" },
        200: { title: "Yellow 200", hex: "#f9e994" },
        300: { title: "Yellow 300", hex: "#f7d455" },
        400: { title: "Yellow 400", hex: "#f9bc15" },
        500: { title: "Yellow 500", hex: "#d28a04" },
        600: { title: "Yellow 600", hex: "#965908" },
        700: { title: "Yellow 700", hex: "#653a0b" },
        800: { title: "Yellow 800", hex: "#3b220c" },
        900: { title: "Yellow 900", hex: "#271a11" },
        950: { title: "Yellow 950", hex: "#181410" }
    },
    Nr = {
        50: { title: "Green 50", hex: "#e7fef5" },
        100: { title: "Green 100", hex: "#c5fce8" },
        200: { title: "Green 200", hex: "#a9f9dc" },
        300: { title: "Green 300", hex: "#59f3ba" },
        400: { title: "Green 400", hex: "#0ff0a1" },
        500: { title: "Green 500", hex: "#04b97a" },
        600: { title: "Green 600", hex: "#01794f" },
        700: { title: "Green 700", hex: "#015133" },
        800: { title: "Green 800", hex: "#023120" },
        900: { title: "Green 900", hex: "#06231a" },
        950: { title: "Green 950", hex: "#071715" }
    },
    jr = {
        50: { title: "Cyan 50", hex: "#e7fefe" },
        100: { title: "Cyan 100", hex: "#c5fcfc" },
        200: { title: "Cyan 200", hex: "#96f8f8" },
        300: { title: "Cyan 300", hex: "#62efef" },
        400: { title: "Cyan 400", hex: "#18e2e2" },
        500: { title: "Cyan 500", hex: "#04b8be" },
        600: { title: "Cyan 600", hex: "#037782" },
        700: { title: "Cyan 700", hex: "#024950" },
        800: { title: "Cyan 800", hex: "#042f34" },
        900: { title: "Cyan 900", hex: "#072227" },
        950: { title: "Cyan 950", hex: "#0d181c" }
    },
    Wr = { gray: Ir, blue: Gr, purple: Ar, magenta: Pr, red: Er, orange: Lr, yellow: $r, green: Nr, cyan: jr },
    Et = { black: Hr, white: Fr, ...Wr }
var F = {
    default: {
        lightest: "hsl(0, 0%, 95%)",
        lighter: "hsl(0, 0%, 70%)",
        light: "hsl(0, 0%, 65%)",
        base: "hsl(0, 0%, 50%)",
        dark: "hsl(0, 0%, 35%)",
        darker: "hsl(0, 0%, 20%)",
        darkest: "hsl(0, 0%, 5%)"
    },
    transparent: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    primary: {
        lightest: "hsl(240, 100%, 95%)",
        lighter: "hsl(240, 100%, 70%)",
        light: "hsl(240, 100%, 65%)",
        base: "hsl(240, 100%, 50%)",
        dark: "hsl(240, 100%, 35%)",
        darker: "hsl(240, 100%, 20%)",
        darkest: "hsl(240, 100%, 5%)"
    },
    positive: {
        lightest: "hsl(120, 100%, 95%)",
        lighter: "hsl(120, 100%, 70%)",
        light: "hsl(120, 100%, 65%)",
        base: "hsl(120, 100%, 50%)",
        dark: "hsl(120, 100%, 35%)",
        darker: "hsl(120, 100%, 20%)",
        darkest: "hsl(120, 100%, 5%)"
    },
    caution: {
        lightest: "hsl(60, 100%, 95%)",
        lighter: "hsl(60, 100%, 70%)",
        light: "hsl(60, 100%, 65%)",
        base: "hsl(60, 100%, 50%)",
        dark: "hsl(60, 100%, 35%)",
        darker: "hsl(60, 100%, 20%)",
        darkest: "hsl(60, 100%, 5%)"
    },
    critical: {
        lightest: "hsl(0, 100%, 95%)",
        lighter: "hsl(0, 100%, 70%)",
        light: "hsl(0, 100%, 65%)",
        base: "hsl(0, 100%, 50%)",
        dark: "hsl(0, 100%, 35%)",
        darker: "hsl(0, 100%, 20%)",
        darkest: "hsl(0, 100%, 5%)"
    }
}
var ei = {
    transparent: {
        bg: [F.transparent.darkest, F.transparent.lightest],
        fg: [F.transparent.lightest, F.transparent.darkest],
        border: [F.transparent.darker, F.transparent.lighter],
        focusRing: [F.transparent.base, F.transparent.base]
    },
    primary: {
        bg: [F.primary.darkest, F.primary.lightest],
        fg: [F.primary.lightest, F.primary.darkest],
        border: [F.primary.darker, F.primary.lighter],
        focusRing: [F.primary.base, F.primary.base]
    },
    positive: {
        bg: [F.positive.darkest, F.positive.lightest],
        fg: [F.positive.lightest, F.positive.darkest],
        border: [F.positive.darker, F.positive.lighter],
        focusRing: [F.positive.base, F.positive.base]
    },
    caution: {
        bg: [F.caution.darkest, F.caution.lightest],
        fg: [F.caution.lightest, F.caution.darkest],
        border: [F.caution.darker, F.caution.lighter],
        focusRing: [F.caution.base, F.caution.base]
    },
    critical: {
        bg: [F.critical.darkest, F.critical.lightest],
        fg: [F.critical.lightest, F.critical.darkest],
        border: [F.critical.darker, F.critical.lighter],
        focusRing: [F.critical.base, F.critical.base]
    }
}
var dt = 1,
    Dr = 0.5,
    k = {
        _version: 2,
        avatar: {
            sizes: [
                { distance: -4, size: 19 },
                { distance: -4, size: 25 },
                { distance: -8, size: 33 },
                { distance: -12, size: 49 }
            ],
            focusRing: { offset: 1, width: 1 }
        },
        button: { textWeight: "medium", border: { width: dt }, focusRing: { offset: -1, width: 1 } },
        card: { border: { width: dt }, focusRing: { offset: -1, width: 1 }, shadow: { outline: Dr } },
        container: [320, 640, 960, 1280, 1600, 1920],
        media: [360, 600, 900, 1200, 1800, 2400],
        layer: { dialog: { zOffset: 600 }, popover: { zOffset: 400 }, tooltip: { zOffset: 200 } },
        radius: [0, 1, 3, 6, 9, 12, 21],
        shadow: [
            null,
            { umbra: [0, 0, 0, 0], penumbra: [0, 0, 0, 0], ambient: [0, 0, 0, 0] },
            { umbra: [0, 3, 5, -2], penumbra: [0, 6, 10, 0], ambient: [0, 1, 18, 1] },
            { umbra: [0, 7, 8, -4], penumbra: [0, 12, 17, 2], ambient: [0, 5, 22, 4] },
            { umbra: [0, 9, 11, -5], penumbra: [0, 18, 28, 2], ambient: [0, 7, 34, 6] },
            { umbra: [0, 11, 15, -7], penumbra: [0, 24, 38, 3], ambient: [0, 9, 46, 8] }
        ],
        space: [0, 4, 8, 12, 20, 32, 52, 84, 136, 220],
        input: {
            border: { width: dt },
            checkbox: { size: 17, focusRing: { offset: -1, width: 1 } },
            radio: { size: 17, markSize: 9, focusRing: { offset: -1, width: 1 } },
            switch: {
                width: 25,
                height: 17,
                padding: 5,
                transitionDurationMs: 150,
                transitionTimingFunction: "ease-out",
                focusRing: { offset: 1, width: 1 }
            },
            select: { focusRing: { offset: -1, width: 1 } },
            text: { focusRing: { offset: -1, width: 1 } }
        },
        style: { button: { root: { transition: "background-color 100ms,border-color 100ms,color 100ms" } } }
    },
    Yr = {
        code: {
            family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
            weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
            sizes: [
                { ascenderHeight: 4, descenderHeight: 4, fontSize: 10, iconSize: 17, lineHeight: 15, letterSpacing: 0 },
                { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 21, lineHeight: 19, letterSpacing: 0 },
                { ascenderHeight: 6, descenderHeight: 6, fontSize: 16, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
                { ascenderHeight: 7, descenderHeight: 7, fontSize: 19, iconSize: 29, lineHeight: 27, letterSpacing: 0 },
                { ascenderHeight: 8, descenderHeight: 8, fontSize: 22, iconSize: 33, lineHeight: 31, letterSpacing: 0 }
            ]
        },
        heading: {
            family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
            weights: { regular: 700, medium: 800, semibold: 900, bold: 900 },
            sizes: [
                { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 17, lineHeight: 19, letterSpacing: 0 },
                { ascenderHeight: 6, descenderHeight: 6, fontSize: 16, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
                { ascenderHeight: 7, descenderHeight: 7, fontSize: 21, iconSize: 33, lineHeight: 29, letterSpacing: 0 },
                { ascenderHeight: 8, descenderHeight: 8, fontSize: 27, iconSize: 41, lineHeight: 35, letterSpacing: 0 },
                {
                    ascenderHeight: 9.5,
                    descenderHeight: 8.5,
                    fontSize: 33,
                    iconSize: 49,
                    lineHeight: 41,
                    letterSpacing: 0
                },
                {
                    ascenderHeight: 10.5,
                    descenderHeight: 9.5,
                    fontSize: 38,
                    iconSize: 53,
                    lineHeight: 47,
                    letterSpacing: 0
                }
            ]
        },
        label: {
            family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',
            weights: { regular: 600, medium: 700, semibold: 800, bold: 900 },
            sizes: [
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 8.1,
                    iconSize: 13,
                    lineHeight: 10,
                    letterSpacing: 0.5
                },
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 9.5,
                    iconSize: 15,
                    lineHeight: 11,
                    letterSpacing: 0.5
                },
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 10.8,
                    iconSize: 17,
                    lineHeight: 12,
                    letterSpacing: 0.5
                },
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 12.25,
                    iconSize: 19,
                    lineHeight: 13,
                    letterSpacing: 0.5
                },
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 13.6,
                    iconSize: 21,
                    lineHeight: 14,
                    letterSpacing: 0.5
                },
                {
                    ascenderHeight: 2,
                    descenderHeight: 2,
                    fontSize: 15,
                    iconSize: 23,
                    lineHeight: 15,
                    letterSpacing: 0.5
                }
            ]
        },
        text: {
            family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
            weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
            sizes: [
                { ascenderHeight: 4, descenderHeight: 4, fontSize: 10, iconSize: 17, lineHeight: 15, letterSpacing: 0 },
                { ascenderHeight: 5, descenderHeight: 5, fontSize: 13, iconSize: 21, lineHeight: 19, letterSpacing: 0 },
                { ascenderHeight: 6, descenderHeight: 6, fontSize: 15, iconSize: 25, lineHeight: 23, letterSpacing: 0 },
                { ascenderHeight: 7, descenderHeight: 7, fontSize: 18, iconSize: 29, lineHeight: 27, letterSpacing: 0 },
                { ascenderHeight: 8, descenderHeight: 8, fontSize: 21, iconSize: 33, lineHeight: 31, letterSpacing: 0 }
            ]
        }
    }
var Kr = new WeakMap()
function Ur(e) {
    let t = Kr.get(e)
    if (t) return t
    let {
        avatar: r,
        button: o,
        color: n,
        container: i,
        font: u,
        input: d,
        media: s,
        radius: v,
        shadow: y,
        space: C,
        style: S
    } = e
    return {
        _version: 0,
        avatar: r,
        button: o,
        container: i,
        color: {
            light: {
                transparent: V(n.light.transparent),
                default: V(n.light.default),
                primary: V(n.light.primary),
                positive: V(n.light.positive),
                caution: V(n.light.caution),
                critical: V(n.light.critical)
            },
            dark: {
                transparent: V(n.dark.transparent),
                default: V(n.dark.default),
                primary: V(n.dark.primary),
                positive: V(n.dark.positive),
                caution: V(n.dark.caution),
                critical: V(n.dark.critical)
            }
        },
        focusRing: d.text.focusRing,
        fonts: u,
        input: d,
        media: s,
        radius: v,
        shadows: y,
        space: C,
        styles: S,
        v2: e
    }
}
function V(e) {
    return {
        base: { bg: e.bg, fg: e.fg, border: e.border, focusRing: e.focusRing, shadow: e.shadow },
        button: e.button,
        card: e.selectable.default,
        dark: e._dark,
        input: { default: Lt(e.input.default), invalid: Lt(e.input.invalid) },
        muted: { ...e.button.ghost, transparent: e.button.ghost.default },
        solid: { ...e.button.default, transparent: e.button.default.default },
        selectable: e.selectable,
        spot: {
            gray: e.avatar.gray.bg,
            blue: e.avatar.blue.bg,
            purple: e.avatar.purple.bg,
            magenta: e.avatar.magenta.bg,
            red: e.avatar.red.bg,
            orange: e.avatar.orange.bg,
            yellow: e.avatar.yellow.bg,
            green: e.avatar.green.bg,
            cyan: e.avatar.cyan.bg
        },
        syntax: e.syntax
    }
}
function Lt(e) {
    return { enabled: Ve(e.enabled), disabled: Ve(e.disabled), readOnly: Ve(e.readOnly), hovered: Ve(e.hovered) }
}
function Ve(e) {
    return { bg: e.bg, bg2: e.muted.bg, border: e.border, fg: e.fg, placeholder: e.placeholder }
}
var qr = ["multiply", "screen"],
    Kt = ["transparent", "default", "primary", "positive", "caution", "critical"],
    Ne = ["default", "primary", "positive", "caution", "critical"],
    je = ["enabled", "hovered", "pressed", "selected", "disabled"],
    Ut = ["default", "ghost", "bleed"],
    qt = ["default", "invalid"],
    Vt = ["enabled", "hovered", "readOnly", "disabled"],
    Vr = ut
function kr(e) {
    return qr.includes(e)
}
function Jr(e) {
    return ut.includes(e)
}
function $t(e) {
    return Pt.includes(e)
}
var Qr = [
        "_hue",
        "bg",
        "fg",
        "border",
        "focusRing",
        "muted/fg",
        "accent/fg",
        "link/fg",
        "code/bg",
        "code/fg",
        "skeleton/from",
        "skeleton/to",
        "status/dot",
        "status/icon"
    ],
    ti = [
        ...Qr,
        "_hue",
        "bg",
        "fg",
        "border",
        "focusRing",
        "shadow/outline",
        "shadow/umbra",
        "shadow/penumbra",
        "shadow/ambient"
    ]
var ri = ["*", ...Vr],
    ni = ["*", ...Kt],
    oi = ["*", ...Ne],
    ii = ["*", ...je],
    li = ["*", ...qt],
    ai = ["*", ...Vt]
function st(e) {
    return /^\d+%$/.test(e)
}
function kt(e) {
    let t = e.split("/"),
        r = t.shift() || "",
        [o, n] = r.split(" ")
    if ($t(o)) {
        let i = o,
            u = t.shift() || ""
        if (st(n)) {
            let d = Number(n.slice(0, -1)) / 100
            return { type: "color", tint: i, mix: d }
        }
        if (ct(u)) {
            let d = Number(u)
            return { type: "color", tint: i, opacity: d }
        }
        return { type: "color", tint: i }
    }
    if (Xr(o)) {
        let i = o,
            u = t.shift() || ""
        if (st(n)) {
            let d = Number(n.slice(0, -1)) / 100
            return { type: "color", key: i, mix: d }
        }
        if (ct(u)) {
            let d = Number(u)
            return { type: "color", key: i, opacity: d }
        }
        return { type: "color", key: i }
    }
    if (Jr(o)) {
        let i = o
        r = t.shift() || ""
        let [u, d] = r.split(" ")
        if ($t(u)) {
            let s = u,
                v = t.shift() || ""
            if (st(d)) {
                let y = Number(d.slice(0, -1)) / 100
                return { type: "color", hue: i, tint: s, mix: y }
            }
            if (ct(v)) {
                let y = Number(v)
                return { type: "color", hue: i, tint: s, opacity: y }
            }
            return { type: "color", hue: i, tint: s }
        }
        return { type: "hue", value: i }
    }
    if (kr(o)) return { type: "blendMode", value: o }
}
function Xr(e) {
    return e === "black" || e === "white"
}
function ct(e) {
    return e === "0" || /^0\.[0-9]+$/.test(e) || e === "1"
}
function Zr(e) {
    let t = ""
    return (
        e.key === "black" || e.key === "white" ? (t = e.key) : (t = "".concat(e.hue, "/").concat(e.tint)),
        e.mix !== void 0
            ? "".concat(t, " ").concat(e.mix * 100, "%")
            : (e.opacity !== void 0 && (t += "/".concat(e.opacity)), t)
    )
}
var en = ["500", "500"]
function g(e, t = en) {
    let { hue: r, scheme: o } = e,
        n = kt(t[o === "light" ? 0 : 1])
    if (!n || n.type !== "color") throw new Error("Invalid color token: ".concat(t[0]))
    return Zr({ ...n, hue: n.hue || r })
}
var tn = {
    base: {
        "*": {
            _blend: ["multiply", "screen"],
            accent: { fg: ["purple/600", "purple/400"] },
            avatar: { "*": { _blend: ["screen", "multiply"], bg: ["500", "400"], fg: ["white", "black"] } },
            backdrop: ["gray/200/0.5", "black/0.5"],
            badge: {
                "*": { bg: ["100", "900"], fg: ["600", "400"], icon: ["500", "500"], dot: ["500", "500"] },
                positive: { bg: ["200 50%", "900"], fg: ["600", "500"] },
                caution: { bg: ["200 50%", "900"], fg: ["600", "500"] }
            },
            bg: ["50", "950"],
            border: ["200", "800"],
            code: { bg: ["50", "950"], fg: ["600", "400"] },
            fg: ["800", "200"],
            focusRing: ["blue/500", "blue/500"],
            icon: ["600", "400"],
            kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
            link: { fg: ["blue/600", "blue/300"] },
            muted: { bg: ["50", "950"], fg: ["700 75%", "300 75%"] },
            shadow: {
                outline: ["500/0.3", "500/0.4"],
                umbra: ["gray/500/0.1", "black/0.2"],
                penumbra: ["gray/500/0.07", "black/0.14"],
                ambient: ["gray/500/0.06", "black/0.12"]
            },
            skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] }
        },
        transparent: { bg: ["50", "black"] },
        default: { bg: ["white", "950"], fg: ["800", "200"], muted: { fg: ["600", "400"] } },
        primary: { _hue: "blue" },
        positive: { _hue: "green", shadow: { outline: ["500/0.4", "500/0.4"] } },
        caution: { _hue: "yellow", shadow: { outline: ["600/0.3", "500/0.4"] } },
        critical: { _hue: "red" }
    },
    button: {
        default: {
            "*": {
                "*": {
                    _blend: ["screen", "multiply"],
                    accent: { fg: ["purple/300", "purple/700"] },
                    avatar: { "*": { _blend: ["multiply", "screen"], bg: ["white", "black"], fg: ["black", "white"] } },
                    badge: {
                        "*": { bg: ["900", "100"], fg: ["400", "600"], dot: ["500", "500"], icon: ["500", "500"] }
                    },
                    bg: ["500", "400"],
                    border: ["500/0", "400/0"],
                    code: { bg: ["500 20%", "400 20%"], fg: ["200", "600"] },
                    fg: ["white", "black"],
                    icon: ["100 70%", "900 70%"],
                    kbd: { bg: ["black", "white"], fg: ["200", "600"], border: ["800", "200"] },
                    link: { fg: ["blue/200", "blue/600"] },
                    muted: { bg: ["950", "50"], fg: ["100 70%", "900 70%"] },
                    skeleton: { from: ["900", "100"], to: ["900 50%", "100 50%"] }
                },
                hovered: { bg: ["700", "300"], border: ["700/0", "300/0"] },
                pressed: { bg: ["700", "300"] },
                selected: { bg: ["700", "300"] },
                disabled: {
                    _hue: "gray",
                    accent: { fg: ["100 70%", "900 70%"] },
                    badge: {
                        "*": {
                            bg: ["gray/700", "gray/300"],
                            fg: ["white", "black"],
                            dot: ["white", "black"],
                            icon: ["white", "black"]
                        }
                    },
                    bg: ["300", "600"],
                    fg: ["300", "600"],
                    muted: { bg: ["300", "600"], fg: ["300", "600"] },
                    kbd: { bg: ["black", "white"], fg: ["white", "black"], border: ["700", "300"] },
                    link: { fg: ["100 70%", "900 70%"] }
                }
            },
            default: {
                "*": { bg: ["800", "200"], muted: { bg: ["950", "50"], fg: ["400", "600"] } },
                hovered: { bg: ["900", "100"] },
                pressed: { bg: ["black", "white"] },
                selected: { bg: ["black", "white"] }
            }
        },
        ghost: {
            "*": {
                "*": {
                    _blend: ["multiply", "screen"],
                    accent: { fg: ["purple/700 60%", "purple/300 70%"] },
                    badge: {
                        "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] }
                    },
                    bg: ["50", "950"],
                    border: ["100", "900"],
                    code: { bg: ["500 10%", "400 10%"], fg: ["700 60%", "400 60%"] },
                    fg: ["600", "400"],
                    icon: ["700 60%", "300 60%"],
                    kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
                    link: { fg: ["blue/700 60%", "blue/300 60%"] },
                    muted: { bg: ["100", "950"], fg: ["700 60%", "300 60%"] },
                    skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] }
                },
                hovered: { bg: ["100", "900"], fg: ["700", "300"] },
                pressed: { bg: ["100", "900"], fg: ["800", "200"] },
                selected: { bg: ["100", "900"], fg: ["800", "200"] },
                disabled: {
                    _hue: "gray",
                    accent: { fg: ["200", "800"] },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: ["50", "950"],
                            fg: ["gray/200", "gray/800"],
                            dot: ["gray/200", "gray/800"],
                            icon: ["gray/200", "gray/800"]
                        }
                    },
                    border: ["100", "900"],
                    code: { bg: ["50", "950"], fg: ["200", "800"] },
                    fg: ["400", "600"],
                    icon: ["300", "700"],
                    muted: { fg: ["400", "600"] },
                    kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
                    link: { fg: ["200", "800"] }
                }
            },
            positive: { "*": { border: ["600 20%", "800"] } },
            caution: { "*": { border: ["600 20%", "800"] } }
        },
        bleed: {
            "*": {
                "*": {
                    _blend: ["multiply", "screen"],
                    accent: { fg: ["purple/700 70%", "purple/300 70%"] },
                    badge: {
                        "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] }
                    },
                    bg: ["white", "black"],
                    border: ["white/0", "black/0"],
                    code: { bg: ["50", "950"], fg: ["700 75%", "300 75%"] },
                    fg: ["700", "300"],
                    icon: ["700 75%", "300 75%"],
                    kbd: { bg: ["white", "black"], fg: ["700", "300"], border: ["200", "800"] },
                    link: { fg: ["blue/700 70%", "blue/300 70%"] },
                    muted: { bg: ["100", "950"], fg: ["700 75%", "300 75%"] },
                    skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] }
                },
                hovered: { bg: ["50", "950"], icon: ["700 70%", "400 70%"] },
                pressed: { bg: ["100", "900"], fg: ["800", "200"], icon: ["800 70%", "200 70%"] },
                selected: { bg: ["100", "900"], fg: ["800", "200"], icon: ["800 60%", "200 60%"] },
                disabled: {
                    _hue: "gray",
                    accent: { fg: ["200", "800"] },
                    badge: {
                        "*": {
                            _hue: "gray",
                            bg: ["50", "950"],
                            fg: ["gray/200", "gray/800"],
                            dot: ["gray/200", "gray/800"],
                            icon: ["gray/200", "gray/800"]
                        }
                    },
                    code: { bg: ["50", "950"], fg: ["200", "800"] },
                    fg: ["400", "600"],
                    icon: ["300", "700"],
                    muted: { fg: ["400", "600"] },
                    kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
                    link: { fg: ["200", "800"] }
                }
            }
        }
    },
    input: {
        "*": {
            "*": {
                _blend: ["multiply", "screen"],
                bg: ["white", "black"],
                border: ["200", "800"],
                fg: ["black", "200"],
                muted: { bg: ["50", "950"] },
                placeholder: ["400", "600 50%"]
            },
            hovered: { border: ["300", "700"] },
            readOnly: { bg: ["50", "950"], border: ["200", "800"], fg: ["800", "200"] },
            disabled: { fg: ["200", "800"], border: ["100", "900"] }
        },
        invalid: { "*": { _hue: "red", bg: ["100", "950"] } }
    },
    selectable: {
        "*": {
            "*": {
                _blend: ["multiply", "screen"],
                accent: { fg: ["purple/700 70%", "purple/300 70%"] },
                badge: { "*": { bg: ["100", "900"], fg: ["600", "400"], dot: ["500", "500"], icon: ["500", "500"] } },
                bg: ["white", "black"],
                border: ["200", "800"],
                code: { bg: ["50", "950"], fg: ["600", "400"] },
                fg: ["700", "300"],
                icon: ["700 75%", "300 75%"],
                kbd: { bg: ["white", "black"], fg: ["600", "400"], border: ["200", "800"] },
                link: { fg: ["blue/700 70%", "blue/300 70%"] },
                muted: { bg: ["100", "950"], fg: ["700 75%", "300 75%"] },
                skeleton: { from: ["100", "900"], to: ["100 50%", "900 50%"] }
            },
            hovered: { bg: ["50", "950"] },
            pressed: { bg: ["100", "900"] },
            selected: {
                _blend: ["screen", "multiply"],
                accent: { fg: ["purple/300", "purple/700"] },
                avatar: { "*": { _blend: ["multiply", "screen"], bg: ["white", "black"], fg: ["black", "white"] } },
                badge: { "*": { bg: ["900", "100"], fg: ["400", "600"], dot: ["500", "500"], icon: ["500", "500"] } },
                bg: ["500", "400"],
                border: ["500 20%", "400 20%"],
                code: { bg: ["500 20%", "400 20%"], fg: ["200", "600"] },
                fg: ["white", "black"],
                icon: ["100 70%", "900 70%"],
                kbd: { bg: ["black", "white"], fg: ["200", "600"], border: ["800", "200"] },
                link: { fg: ["blue/200", "blue/600"] },
                muted: { bg: ["950", "50"], fg: ["100 70%", "900 70%"] },
                skeleton: { from: ["900", "100"], to: ["900 50%", "100 50%"] }
            },
            disabled: {
                _hue: "gray",
                accent: { fg: ["200", "800"] },
                badge: {
                    "*": {
                        _hue: "gray",
                        bg: ["50", "950"],
                        fg: ["gray/200", "gray/800"],
                        dot: ["gray/200", "gray/800"],
                        icon: ["gray/200", "gray/800"]
                    }
                },
                border: ["100", "900"],
                code: { bg: ["50", "950"], fg: ["200", "800"] },
                fg: ["200", "800"],
                icon: ["200", "800"],
                kbd: { bg: ["white", "black"], fg: ["200", "800"], border: ["100", "900"] },
                link: { fg: ["200", "800"] },
                muted: { fg: ["200", "800"] }
            }
        },
        default: { selected: { _hue: "blue" } },
        critical: { disabled: { bg: ["50 50%", "950 50%"] } }
    },
    syntax: {
        atrule: ["purple/600", "purple/400"],
        attrName: ["green/600", "green/400"],
        attrValue: ["yellow/600", "yellow/400"],
        attribute: ["yellow/600", "yellow/400"],
        boolean: ["purple/600", "purple/400"],
        builtin: ["purple/600", "purple/400"],
        cdata: ["yellow/600", "yellow/400"],
        char: ["yellow/600", "yellow/400"],
        class: ["orange/600", "orange/400"],
        className: ["cyan/600", "cyan/400"],
        comment: ["gray/400", "gray/600"],
        constant: ["purple/600", "purple/400"],
        deleted: ["red/600", "red/400"],
        entity: ["red/600", "red/400"],
        function: ["green/600", "green/400"],
        hexcode: ["blue/600", "blue/400"],
        id: ["purple/600", "purple/400"],
        important: ["purple/600", "purple/400"],
        inserted: ["yellow/600", "yellow/400"],
        keyword: ["magenta/600", "magenta/400"],
        number: ["purple/600", "purple/400"],
        operator: ["magenta/600", "magenta/400"],
        property: ["blue/600", "blue/400"],
        pseudoClass: ["yellow/600", "yellow/400"],
        pseudoElement: ["yellow/600", "yellow/400"],
        punctuation: ["gray/600", "gray/400"],
        regex: ["blue/600", "blue/400"],
        selector: ["red/600", "red/400"],
        string: ["yellow/600", "yellow/400"],
        symbol: ["purple/600", "purple/400"],
        tag: ["red/600", "red/400"],
        unit: ["orange/600", "orange/400"],
        url: ["red/600", "red/400"],
        variable: ["red/600", "red/400"]
    }
}
function Nt(e) {
    return !!(e && typeof e == "object" && !Array.isArray(e))
}
function A(...e) {
    let t = e.filter(Boolean)
    return t.length === 0 ? {} : t.reduce(rn, {})
}
function rn(e, t) {
    for (let r of Object.keys(t)) {
        let o = e[r],
            n = t[r]
        Nt(o) && Nt(n) ? (e[r] = A(o, n)) : (e[r] = n)
    }
    return e
}
function nn(e) {
    let t = A(tn, e)
    return { base: on(t), button: an(t), input: cn(t), selectable: gn(t), syntax: t.syntax }
}
function on(e) {
    let t = {}
    for (let r of Kt) t[r] = ln(e, r)
    return t
}
function ln(e, t) {
    var r,
        o,
        n,
        i,
        u,
        d,
        s,
        v,
        y,
        C,
        S,
        x,
        P,
        H,
        z,
        w,
        a,
        l,
        f,
        c,
        m,
        h,
        O,
        L,
        T,
        _,
        $,
        R,
        B,
        N,
        oe,
        ie,
        le,
        ae,
        ue,
        de,
        se,
        ce,
        he,
        fe,
        ge,
        be
    let I = A(
            (r = e == null ? void 0 : e.base) == null ? void 0 : r["*"],
            (o = e == null ? void 0 : e.base) == null ? void 0 : o[t]
        ),
        q =
            I._hue ||
            ((i = (n = e == null ? void 0 : e.base) == null ? void 0 : n[t]) == null ? void 0 : i._hue) ||
            "gray"
    return {
        ...I,
        _hue: q,
        avatar: {
            gray: A(
                { _hue: "gray" },
                (u = I.avatar) == null ? void 0 : u["*"],
                (d = I.avatar) == null ? void 0 : d.gray
            ),
            blue: A(
                { _hue: "blue" },
                (s = I.avatar) == null ? void 0 : s["*"],
                (v = I.avatar) == null ? void 0 : v.blue
            ),
            purple: A(
                { _hue: "purple" },
                (y = I.avatar) == null ? void 0 : y["*"],
                (C = I.avatar) == null ? void 0 : C.purple
            ),
            magenta: A(
                { _hue: "magenta" },
                (S = I.avatar) == null ? void 0 : S["*"],
                (x = I.avatar) == null ? void 0 : x.magenta
            ),
            red: A({ _hue: "red" }, (P = I.avatar) == null ? void 0 : P["*"], (H = I.avatar) == null ? void 0 : H.red),
            orange: A(
                { _hue: "orange" },
                (z = I.avatar) == null ? void 0 : z["*"],
                (w = I.avatar) == null ? void 0 : w.orange
            ),
            yellow: A(
                { _hue: "yellow" },
                (a = I.avatar) == null ? void 0 : a["*"],
                (l = I.avatar) == null ? void 0 : l.yellow
            ),
            green: A(
                { _hue: "green" },
                (f = I.avatar) == null ? void 0 : f["*"],
                (c = I.avatar) == null ? void 0 : c.green
            ),
            cyan: A(
                { _hue: "cyan" },
                (m = I.avatar) == null ? void 0 : m["*"],
                (h = I.avatar) == null ? void 0 : h.cyan
            )
        },
        badge: {
            default: {
                _hue:
                    ((L = (O = e == null ? void 0 : e.base) == null ? void 0 : O.default) == null ? void 0 : L._hue) ||
                    q,
                ...((T = I.badge) == null ? void 0 : T["*"]),
                ...((_ = I.badge) == null ? void 0 : _.default)
            },
            primary: {
                _hue:
                    ((R = ($ = e == null ? void 0 : e.base) == null ? void 0 : $.primary) == null ? void 0 : R._hue) ||
                    q,
                ...((B = I.badge) == null ? void 0 : B["*"]),
                ...((N = I.badge) == null ? void 0 : N.primary)
            },
            positive: {
                _hue:
                    ((ie = (oe = e == null ? void 0 : e.base) == null ? void 0 : oe.positive) == null
                        ? void 0
                        : ie._hue) || q,
                ...((le = I.badge) == null ? void 0 : le["*"]),
                ...((ae = I.badge) == null ? void 0 : ae.positive)
            },
            caution: {
                _hue:
                    ((de = (ue = e == null ? void 0 : e.base) == null ? void 0 : ue.caution) == null
                        ? void 0
                        : de._hue) || q,
                ...((se = I.badge) == null ? void 0 : se["*"]),
                ...((ce = I.badge) == null ? void 0 : ce.caution)
            },
            critical: {
                _hue:
                    ((fe = (he = e == null ? void 0 : e.base) == null ? void 0 : he.critical) == null
                        ? void 0
                        : fe._hue) || q,
                ...((ge = I.badge) == null ? void 0 : ge["*"]),
                ...((be = I.badge) == null ? void 0 : be.critical)
            }
        }
    }
}
function an(e) {
    let t = {}
    for (let r of Ut) t[r] = un(e, r)
    return t
}
function un(e, t) {
    let r = {}
    for (let o of Ne) r[o] = dn(e, t, o)
    return r
}
function dn(e, t, r) {
    let o = {}
    for (let n of je) o[n] = sn(e, r, t, n)
    return o
}
function sn(e, t, r, o) {
    var n,
        i,
        u,
        d,
        s,
        v,
        y,
        C,
        S,
        x,
        P,
        H,
        z,
        w,
        a,
        l,
        f,
        c,
        m,
        h,
        O,
        L,
        T,
        _,
        $,
        R,
        B,
        N,
        oe,
        ie,
        le,
        ae,
        ue,
        de,
        se,
        ce,
        he,
        fe,
        ge,
        be,
        I,
        q,
        Me,
        ze,
        He,
        Fe,
        Ie,
        G,
        qe,
        It,
        Gt,
        At
    let E = A(
            (u = (i = (n = e == null ? void 0 : e.button) == null ? void 0 : n[r]) == null ? void 0 : i["*"]) == null
                ? void 0
                : u["*"],
            (v = (s = (d = e == null ? void 0 : e.button) == null ? void 0 : d[r]) == null ? void 0 : s[t]) == null
                ? void 0
                : v["*"],
            (S = (C = (y = e == null ? void 0 : e.button) == null ? void 0 : y[r]) == null ? void 0 : C["*"]) == null
                ? void 0
                : S[o],
            (H = (P = (x = e == null ? void 0 : e.button) == null ? void 0 : x[r]) == null ? void 0 : P[t]) == null
                ? void 0
                : H[o]
        ),
        zr = E._hue || ((w = (z = e == null ? void 0 : e.base) == null ? void 0 : z[t]) == null ? void 0 : w._hue)
    return {
        ...E,
        _hue: zr,
        avatar: {
            gray: A(
                { _hue: "gray" },
                (a = E.avatar) == null ? void 0 : a["*"],
                (l = E.avatar) == null ? void 0 : l.gray
            ),
            blue: A(
                { _hue: "blue" },
                (f = E.avatar) == null ? void 0 : f["*"],
                (c = E.avatar) == null ? void 0 : c.blue
            ),
            purple: A(
                { _hue: "purple" },
                (m = E.avatar) == null ? void 0 : m["*"],
                (h = E.avatar) == null ? void 0 : h.purple
            ),
            magenta: A(
                { _hue: "magenta" },
                (O = E.avatar) == null ? void 0 : O["*"],
                (L = E.avatar) == null ? void 0 : L.magenta
            ),
            red: A({ _hue: "red" }, (T = E.avatar) == null ? void 0 : T["*"], (_ = E.avatar) == null ? void 0 : _.red),
            orange: A(
                { _hue: "orange" },
                ($ = E.avatar) == null ? void 0 : $["*"],
                (R = E.avatar) == null ? void 0 : R.orange
            ),
            yellow: A(
                { _hue: "yellow" },
                (B = E.avatar) == null ? void 0 : B["*"],
                (N = E.avatar) == null ? void 0 : N.yellow
            ),
            green: A(
                { _hue: "green" },
                (oe = E.avatar) == null ? void 0 : oe["*"],
                (ie = E.avatar) == null ? void 0 : ie.green
            ),
            cyan: A(
                { _hue: "cyan" },
                (le = E.avatar) == null ? void 0 : le["*"],
                (ae = E.avatar) == null ? void 0 : ae.cyan
            )
        },
        badge: {
            default: {
                _hue:
                    (de = (ue = e == null ? void 0 : e.base) == null ? void 0 : ue.default) == null ? void 0 : de._hue,
                ...((se = E.badge) == null ? void 0 : se["*"]),
                ...((ce = E.badge) == null ? void 0 : ce.default)
            },
            primary: {
                _hue:
                    (fe = (he = e == null ? void 0 : e.base) == null ? void 0 : he.primary) == null ? void 0 : fe._hue,
                ...((ge = E.badge) == null ? void 0 : ge["*"]),
                ...((be = E.badge) == null ? void 0 : be.primary)
            },
            positive: {
                _hue: (q = (I = e == null ? void 0 : e.base) == null ? void 0 : I.positive) == null ? void 0 : q._hue,
                ...((Me = E.badge) == null ? void 0 : Me["*"]),
                ...((ze = E.badge) == null ? void 0 : ze.positive)
            },
            caution: {
                _hue:
                    (Fe = (He = e == null ? void 0 : e.base) == null ? void 0 : He.caution) == null ? void 0 : Fe._hue,
                ...((Ie = E.badge) == null ? void 0 : Ie["*"]),
                ...((G = E.badge) == null ? void 0 : G.caution)
            },
            critical: {
                _hue:
                    (It = (qe = e == null ? void 0 : e.base) == null ? void 0 : qe.critical) == null ? void 0 : It._hue,
                ...((Gt = E.badge) == null ? void 0 : Gt["*"]),
                ...((At = E.badge) == null ? void 0 : At.critical)
            }
        }
    }
}
function cn(e) {
    let t = {}
    for (let r of qt) t[r] = hn(e, r)
    return t
}
function hn(e, t) {
    let r = {}
    for (let o of Vt) r[o] = fn(e, t, o)
    return r
}
function fn(e, t, r) {
    var o, n, i, u, d, s, v, y, C, S
    let x = A(
            (n = (o = e == null ? void 0 : e.input) == null ? void 0 : o["*"]) == null ? void 0 : n["*"],
            (u = (i = e == null ? void 0 : e.input) == null ? void 0 : i[t]) == null ? void 0 : u["*"],
            (s = (d = e == null ? void 0 : e.input) == null ? void 0 : d["*"]) == null ? void 0 : s[r],
            (y = (v = e == null ? void 0 : e.input) == null ? void 0 : v[t]) == null ? void 0 : y[r]
        ),
        P = x._hue || ((S = (C = e == null ? void 0 : e.input) == null ? void 0 : C[t]) == null ? void 0 : S._hue)
    return { ...x, _hue: P }
}
function gn(e) {
    let t = {}
    for (let r of Ne) t[r] = bn(e, r)
    return t
}
function bn(e, t) {
    var r, o, n, i
    let u = {
        _hue:
            ((o = (r = e == null ? void 0 : e.selectable) == null ? void 0 : r[t]) == null ? void 0 : o._hue) ||
            ((i = (n = e == null ? void 0 : e.base) == null ? void 0 : n[t]) == null ? void 0 : i._hue)
    }
    for (let d of je) u[d] = pn(e, t, d)
    return u
}
function pn(e, t, r) {
    var o,
        n,
        i,
        u,
        d,
        s,
        v,
        y,
        C,
        S,
        x,
        P,
        H,
        z,
        w,
        a,
        l,
        f,
        c,
        m,
        h,
        O,
        L,
        T,
        _,
        $,
        R,
        B,
        N,
        oe,
        ie,
        le,
        ae,
        ue,
        de,
        se,
        ce,
        he,
        fe,
        ge,
        be,
        I,
        q,
        Me,
        ze,
        He,
        Fe,
        Ie
    let G = A(
            (n = (o = e == null ? void 0 : e.selectable) == null ? void 0 : o["*"]) == null ? void 0 : n["*"],
            (u = (i = e == null ? void 0 : e.selectable) == null ? void 0 : i[t]) == null ? void 0 : u["*"],
            (s = (d = e == null ? void 0 : e.selectable) == null ? void 0 : d["*"]) == null ? void 0 : s[r],
            (y = (v = e == null ? void 0 : e.selectable) == null ? void 0 : v[t]) == null ? void 0 : y[r]
        ),
        qe = G._hue || ((S = (C = e == null ? void 0 : e.base) == null ? void 0 : C[t]) == null ? void 0 : S._hue)
    return {
        ...G,
        _hue: qe,
        avatar: {
            gray: A(
                { _hue: "gray" },
                (x = G.avatar) == null ? void 0 : x["*"],
                (P = G.avatar) == null ? void 0 : P.gray
            ),
            blue: A(
                { _hue: "blue" },
                (H = G.avatar) == null ? void 0 : H["*"],
                (z = G.avatar) == null ? void 0 : z.blue
            ),
            purple: A(
                { _hue: "purple" },
                (w = G.avatar) == null ? void 0 : w["*"],
                (a = G.avatar) == null ? void 0 : a.purple
            ),
            magenta: A(
                { _hue: "magenta" },
                (l = G.avatar) == null ? void 0 : l["*"],
                (f = G.avatar) == null ? void 0 : f.magenta
            ),
            red: A({ _hue: "red" }, (c = G.avatar) == null ? void 0 : c["*"], (m = G.avatar) == null ? void 0 : m.red),
            orange: A(
                { _hue: "orange" },
                (h = G.avatar) == null ? void 0 : h["*"],
                (O = G.avatar) == null ? void 0 : O.orange
            ),
            yellow: A(
                { _hue: "yellow" },
                (L = G.avatar) == null ? void 0 : L["*"],
                (T = G.avatar) == null ? void 0 : T.yellow
            ),
            green: A(
                { _hue: "green" },
                (_ = G.avatar) == null ? void 0 : _["*"],
                ($ = G.avatar) == null ? void 0 : $.green
            ),
            cyan: A(
                { _hue: "cyan" },
                (R = G.avatar) == null ? void 0 : R["*"],
                (B = G.avatar) == null ? void 0 : B.cyan
            )
        },
        badge: {
            default: {
                _hue: (oe = (N = e == null ? void 0 : e.base) == null ? void 0 : N.default) == null ? void 0 : oe._hue,
                ...((ie = G.badge) == null ? void 0 : ie["*"]),
                ...((le = G.badge) == null ? void 0 : le.default)
            },
            primary: {
                _hue:
                    (ue = (ae = e == null ? void 0 : e.base) == null ? void 0 : ae.primary) == null ? void 0 : ue._hue,
                ...((de = G.badge) == null ? void 0 : de["*"]),
                ...((se = G.badge) == null ? void 0 : se.primary)
            },
            positive: {
                _hue:
                    (he = (ce = e == null ? void 0 : e.base) == null ? void 0 : ce.positive) == null ? void 0 : he._hue,
                ...((fe = G.badge) == null ? void 0 : fe["*"]),
                ...((ge = G.badge) == null ? void 0 : ge.positive)
            },
            caution: {
                _hue: (I = (be = e == null ? void 0 : e.base) == null ? void 0 : be.caution) == null ? void 0 : I._hue,
                ...((q = G.badge) == null ? void 0 : q["*"]),
                ...((Me = G.badge) == null ? void 0 : Me.caution)
            },
            critical: {
                _hue:
                    (He = (ze = e == null ? void 0 : e.base) == null ? void 0 : ze.critical) == null ? void 0 : He._hue,
                ...((Fe = G.badge) == null ? void 0 : Fe["*"]),
                ...((Ie = G.badge) == null ? void 0 : Ie.critical)
            }
        }
    }
}
function mn(e) {
    let t = { ...e, color: nn(e == null ? void 0 : e.color) }
    return { light: jt({ scheme: "light" }, t), dark: jt({ scheme: "dark" }, t) }
}
function jt(e, t) {
    let { scheme: r } = e
    return {
        transparent: Ce({ scheme: r, tone: "transparent" }, t),
        default: Ce({ scheme: r, tone: "default" }, t),
        primary: Ce({ scheme: r, tone: "primary" }, t),
        positive: Ce({ scheme: r, tone: "positive" }, t),
        caution: Ce({ scheme: r, tone: "caution" }, t),
        critical: Ce({ scheme: r, tone: "critical" }, t)
    }
}
function Ce(e, t) {
    var r, o, n, i, u, d, s, v, y, C, S, x, P
    let { scheme: H, tone: z } = e,
        w = (o = (r = t == null ? void 0 : t.color) == null ? void 0 : r.base) == null ? void 0 : o[z],
        a = { hue: (w == null ? void 0 : w._hue) || "gray", scheme: H }
    return {
        _blend: ((w == null ? void 0 : w._blend) || ["multiply", "screen"])[H === "light" ? 0 : 1],
        _dark: H === "dark",
        accent: { fg: g(a, (n = w == null ? void 0 : w.accent) == null ? void 0 : n.fg) },
        avatar: vt({ scheme: H }, w),
        backdrop: g(a, w == null ? void 0 : w.backdrop),
        badge: xt(w == null ? void 0 : w.badge, { scheme: H }, t),
        bg: g(a, w == null ? void 0 : w.bg),
        border: g(a, w == null ? void 0 : w.border),
        button: vn({ scheme: H }, t),
        code: {
            bg: g(a, (i = w == null ? void 0 : w.code) == null ? void 0 : i.bg),
            fg: g(a, (u = w == null ? void 0 : w.code) == null ? void 0 : u.fg)
        },
        fg: g(a, w == null ? void 0 : w.fg),
        focusRing: g(a, w == null ? void 0 : w.focusRing),
        icon: g(a, w == null ? void 0 : w.icon),
        input: wn({ scheme: H, tone: z }, t),
        kbd: {
            bg: g(a, (d = w == null ? void 0 : w.kbd) == null ? void 0 : d.bg),
            fg: g(a, (s = w == null ? void 0 : w.kbd) == null ? void 0 : s.fg),
            border: g(a, (v = w == null ? void 0 : w.kbd) == null ? void 0 : v.border)
        },
        link: { fg: g(a, (y = w == null ? void 0 : w.link) == null ? void 0 : y.fg) },
        muted: {
            bg: g(a, (C = w == null ? void 0 : w.muted) == null ? void 0 : C.bg),
            fg: g(a, (S = w == null ? void 0 : w.muted) == null ? void 0 : S.fg)
        },
        selectable: Sn({ scheme: H }, t),
        shadow: yn({ scheme: H, tone: z }, t),
        skeleton: {
            from: g(a, (x = w == null ? void 0 : w.skeleton) == null ? void 0 : x.from),
            to: g(a, (P = w == null ? void 0 : w.skeleton) == null ? void 0 : P.to)
        },
        syntax: Rn({ scheme: H }, t)
    }
}
function yn(e, t) {
    var r, o, n, i, u, d
    let { scheme: s, tone: v } = e,
        y = (o = (r = t == null ? void 0 : t.color) == null ? void 0 : r.base) == null ? void 0 : o[v],
        C = { hue: (y == null ? void 0 : y._hue) || "gray", scheme: s }
    return {
        outline: g(C, (n = y == null ? void 0 : y.shadow) == null ? void 0 : n.outline),
        umbra: g(C, (i = y == null ? void 0 : y.shadow) == null ? void 0 : i.umbra),
        penumbra: g(C, (u = y == null ? void 0 : y.shadow) == null ? void 0 : u.penumbra),
        ambient: g(C, (d = y == null ? void 0 : y.shadow) == null ? void 0 : d.ambient)
    }
}
function vt(e, t) {
    let { scheme: r } = e
    return {
        gray: Z({ color: "gray", scheme: r }, t),
        blue: Z({ color: "blue", scheme: r }, t),
        purple: Z({ color: "purple", scheme: r }, t),
        magenta: Z({ color: "magenta", scheme: r }, t),
        red: Z({ color: "red", scheme: r }, t),
        orange: Z({ color: "orange", scheme: r }, t),
        yellow: Z({ color: "yellow", scheme: r }, t),
        green: Z({ color: "green", scheme: r }, t),
        cyan: Z({ color: "cyan", scheme: r }, t)
    }
}
function Z(e, t) {
    var r
    let { color: o, scheme: n } = e,
        i = (r = t == null ? void 0 : t.avatar) == null ? void 0 : r[o],
        u = { hue: (i == null ? void 0 : i._hue) || "gray", scheme: n }
    return {
        _blend: ((i == null ? void 0 : i._blend) || ["screen", "multiply"])[n === "light" ? 0 : 1],
        bg: g(u, i == null ? void 0 : i.bg),
        fg: g(u, i == null ? void 0 : i.fg)
    }
}
function xt(e, t, r) {
    let { scheme: o } = t
    return {
        default: Ge(e, { scheme: o, tone: "default" }, r),
        primary: Ge(e, { scheme: o, tone: "primary" }, r),
        positive: Ge(e, { scheme: o, tone: "positive" }, r),
        caution: Ge(e, { scheme: o, tone: "caution" }, r),
        critical: Ge(e, { scheme: o, tone: "critical" }, r)
    }
}
function Ge(e, t, r) {
    var o, n, i
    let { scheme: u, tone: d } = t,
        s = e == null ? void 0 : e[d],
        v = {
            hue:
                (s == null ? void 0 : s._hue) ||
                ((i = (n = (o = r == null ? void 0 : r.color) == null ? void 0 : o.base) == null ? void 0 : n[d]) ==
                null
                    ? void 0
                    : i._hue) ||
                "gray",
            scheme: u
        }
    return {
        bg: g(v, s == null ? void 0 : s.bg),
        fg: g(v, s == null ? void 0 : s.fg),
        dot: g(v, s == null ? void 0 : s.dot),
        icon: g(v, s == null ? void 0 : s.icon)
    }
}
function vn(e, t) {
    let { scheme: r } = e,
        o = {}
    for (let n of Ut) o[n] = xn({ scheme: r, mode: n }, t)
    return o
}
function xn(e, t) {
    let { mode: r, scheme: o } = e,
        n = {}
    for (let i of Ne) n[i] = Cn({ mode: r, scheme: o, tone: i }, t)
    return n
}
function Cn(e, t) {
    let { mode: r, scheme: o, tone: n } = e,
        i = {}
    for (let u of je) i[u] = Tn({ mode: r, tone: n, scheme: o, state: u }, t)
    return i
}
function Tn(e, t) {
    var r, o, n, i, u, d, s, v, y, C, S, x, P, H, z
    let { mode: w, tone: a, scheme: l, state: f } = e,
        c =
            (i =
                (n = (o = (r = t == null ? void 0 : t.color) == null ? void 0 : r.button) == null ? void 0 : o[w]) ==
                null
                    ? void 0
                    : n[a]) == null
                ? void 0
                : i[f],
        m = (c == null ? void 0 : c._hue) || "gray",
        h = (c == null ? void 0 : c._blend) || ["screen", "multiply"],
        O = { hue: m, scheme: l }
    return {
        _blend: h[l === "light" ? 0 : 1],
        accent: { fg: g(O, (u = c == null ? void 0 : c.accent) == null ? void 0 : u.fg) },
        avatar: vt({ scheme: l }, c),
        badge: xt(c == null ? void 0 : c.badge, { scheme: l }, t),
        bg: g(O, c == null ? void 0 : c.bg),
        border: g(O, c == null ? void 0 : c.border),
        code: {
            bg: g(O, (d = c == null ? void 0 : c.code) == null ? void 0 : d.bg),
            fg: g(O, (s = c == null ? void 0 : c.code) == null ? void 0 : s.fg)
        },
        fg: g(O, c == null ? void 0 : c.fg),
        icon: g(O, c == null ? void 0 : c.icon),
        muted: {
            bg: g(O, (v = c == null ? void 0 : c.muted) == null ? void 0 : v.bg),
            fg: g(O, (y = c == null ? void 0 : c.muted) == null ? void 0 : y.fg)
        },
        kbd: {
            bg: g(O, (C = c == null ? void 0 : c.kbd) == null ? void 0 : C.bg),
            fg: g(O, (S = c == null ? void 0 : c.kbd) == null ? void 0 : S.fg),
            border: g(O, (x = c == null ? void 0 : c.kbd) == null ? void 0 : x.border)
        },
        link: { fg: g(O, (P = c == null ? void 0 : c.link) == null ? void 0 : P.fg) },
        skeleton: {
            from: g(O, (H = c == null ? void 0 : c.skeleton) == null ? void 0 : H.from),
            to: g(O, (z = c == null ? void 0 : c.skeleton) == null ? void 0 : z.to)
        }
    }
}
function wn(e, t) {
    let { scheme: r, tone: o } = e
    return {
        default: Wt({ mode: "default", scheme: r, tone: o }, t),
        invalid: Wt({ mode: "invalid", scheme: r, tone: o }, t)
    }
}
function Wt(e, t) {
    let { mode: r, scheme: o, tone: n } = e
    return {
        enabled: ke({ mode: r, scheme: o, state: "enabled", tone: n }, t),
        hovered: ke({ mode: r, scheme: o, state: "hovered", tone: n }, t),
        readOnly: ke({ mode: r, scheme: o, state: "readOnly", tone: n }, t),
        disabled: ke({ mode: r, scheme: o, state: "disabled", tone: n }, t)
    }
}
function ke(e, t) {
    var r, o, n, i, u, d, s
    let { mode: v, tone: y, scheme: C, state: S } = e,
        x =
            (n = (o = (r = t == null ? void 0 : t.color) == null ? void 0 : r.input) == null ? void 0 : o[v]) == null
                ? void 0
                : n[S],
        P =
            (x == null ? void 0 : x._hue) ||
            ((d = (u = (i = t == null ? void 0 : t.color) == null ? void 0 : i.base) == null ? void 0 : u[y]) == null
                ? void 0
                : d._hue) ||
            "gray",
        H = (x == null ? void 0 : x._blend) || ["screen", "multiply"],
        z = { hue: P, scheme: C }
    return {
        _blend: H[C === "light" ? 0 : 1],
        bg: g(z, x == null ? void 0 : x.bg),
        border: g(z, x == null ? void 0 : x.border),
        fg: g(z, x == null ? void 0 : x.fg),
        muted: { bg: g(z, (s = x == null ? void 0 : x.muted) == null ? void 0 : s.bg) },
        placeholder: g(z, x == null ? void 0 : x.placeholder)
    }
}
function Sn(e, t) {
    let { scheme: r } = e,
        o = {}
    for (let n of Ne) o[n] = _n({ scheme: r, tone: n }, t)
    return o
}
function _n(e, t) {
    let { scheme: r, tone: o } = e,
        n = {}
    for (let i of je) n[i] = On({ tone: o, scheme: r, state: i }, t)
    return n
}
function On(e, t) {
    var r, o, n, i, u, d, s, v, y, C, S, x, P, H
    let { scheme: z, state: w, tone: a } = e,
        l =
            (n = (o = (r = t == null ? void 0 : t.color) == null ? void 0 : r.selectable) == null ? void 0 : o[a]) ==
            null
                ? void 0
                : n[w],
        f = (l == null ? void 0 : l._hue) || "gray",
        c = (l == null ? void 0 : l._blend) || ["screen", "multiply"],
        m = { hue: f, scheme: z }
    return {
        _blend: c[z === "light" ? 0 : 1],
        accent: { fg: g(m, (i = l == null ? void 0 : l.accent) == null ? void 0 : i.fg) },
        avatar: vt({ scheme: z }, l),
        badge: xt(l == null ? void 0 : l.badge, { scheme: z }, t),
        bg: g(m, l == null ? void 0 : l.bg),
        border: g(m, l == null ? void 0 : l.border),
        code: {
            bg: g(m, (u = l == null ? void 0 : l.code) == null ? void 0 : u.bg),
            fg: g(m, (d = l == null ? void 0 : l.code) == null ? void 0 : d.fg)
        },
        fg: g(m, l == null ? void 0 : l.fg),
        icon: g(m, l == null ? void 0 : l.icon),
        muted: {
            bg: g(m, (s = l == null ? void 0 : l.muted) == null ? void 0 : s.bg),
            fg: g(m, (v = l == null ? void 0 : l.muted) == null ? void 0 : v.fg)
        },
        kbd: {
            bg: g(m, (y = l == null ? void 0 : l.kbd) == null ? void 0 : y.bg),
            fg: g(m, (C = l == null ? void 0 : l.kbd) == null ? void 0 : C.fg),
            border: g(m, (S = l == null ? void 0 : l.kbd) == null ? void 0 : S.border)
        },
        link: { fg: g(m, (x = l == null ? void 0 : l.link) == null ? void 0 : x.fg) },
        skeleton: {
            from: g(m, (P = l == null ? void 0 : l.skeleton) == null ? void 0 : P.from),
            to: g(m, (H = l == null ? void 0 : l.skeleton) == null ? void 0 : H.to)
        }
    }
}
function Rn(e, t) {
    var r
    let { scheme: o } = e,
        n = (r = t == null ? void 0 : t.color) == null ? void 0 : r.syntax,
        i = { hue: "gray", scheme: o }
    return {
        atrule: g(i, n == null ? void 0 : n.atrule),
        attrName: g(i, n == null ? void 0 : n.attrName),
        attrValue: g(i, n == null ? void 0 : n.attrValue),
        attribute: g(i, n == null ? void 0 : n.attribute),
        boolean: g(i, n == null ? void 0 : n.boolean),
        builtin: g(i, n == null ? void 0 : n.builtin),
        cdata: g(i, n == null ? void 0 : n.cdata),
        char: g(i, n == null ? void 0 : n.char),
        class: g(i, n == null ? void 0 : n.class),
        className: g(i, n == null ? void 0 : n.className),
        comment: g(i, n == null ? void 0 : n.comment),
        constant: g(i, n == null ? void 0 : n.constant),
        deleted: g(i, n == null ? void 0 : n.deleted),
        doctype: g(i, n == null ? void 0 : n.doctype),
        entity: g(i, n == null ? void 0 : n.entity),
        function: g(i, n == null ? void 0 : n.function),
        hexcode: g(i, n == null ? void 0 : n.hexcode),
        id: g(i, n == null ? void 0 : n.id),
        important: g(i, n == null ? void 0 : n.important),
        inserted: g(i, n == null ? void 0 : n.inserted),
        keyword: g(i, n == null ? void 0 : n.keyword),
        number: g(i, n == null ? void 0 : n.number),
        operator: g(i, n == null ? void 0 : n.operator),
        prolog: g(i, n == null ? void 0 : n.prolog),
        property: g(i, n == null ? void 0 : n.property),
        pseudoClass: g(i, n == null ? void 0 : n.pseudoClass),
        pseudoElement: g(i, n == null ? void 0 : n.pseudoElement),
        punctuation: g(i, n == null ? void 0 : n.punctuation),
        regex: g(i, n == null ? void 0 : n.regex),
        selector: g(i, n == null ? void 0 : n.selector),
        string: g(i, n == null ? void 0 : n.string),
        symbol: g(i, n == null ? void 0 : n.symbol),
        tag: g(i, n == null ? void 0 : n.tag),
        unit: g(i, n == null ? void 0 : n.unit),
        url: g(i, n == null ? void 0 : n.url),
        variable: g(i, n == null ? void 0 : n.variable)
    }
}
var Bn = Et
function ht(e, t, r) {
    let o = (t - e) * r
    return e + o
}
function Mn(e, t, r) {
    return { r: ht(e.r, t.r, r), g: ht(e.g, t.g, r), b: ht(e.b, t.b, r) }
}
function ft(e, t) {
    return e * t
}
function zn(e, t) {
    return { r: ft(e.r / 255, t.r / 255) * 255, g: ft(e.g / 255, t.g / 255) * 255, b: ft(e.b / 255, t.b / 255) * 255 }
}
function gt(e, t) {
    return e + t - e * t
}
function Hn(e, t) {
    return { r: gt(e.r / 255, t.r / 255) * 255, g: gt(e.g / 255, t.g / 255) * 255, b: gt(e.b / 255, t.b / 255) * 255 }
}
function Fn(e, t, r) {
    return e * (1 - r) + t * r
}
function In(e, t, r) {
    return K((r - e) / (t - e))
}
function K(e, t = 0, r = 1) {
    return Math.min(r, Math.max(t, e))
}
function ee(e, t, r, o, n) {
    return Fn(r, o, In(e, t, n))
}
function bt(e) {
    return Math.round(e)
}
function yt(e) {
    if (e.length === 4) {
        let t = e.slice(1, 2),
            r = e.slice(2, 3),
            o = e.slice(3, 4)
        return { r: parseInt(t + t, 16), g: parseInt(r + r, 16), b: parseInt(o + o, 16) }
    }
    return { r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) }
}
function Gn(e) {
    let t = e.replace(/rgba\(|\)/g, "").split(",")
    return { r: parseInt(t[0]), g: parseInt(t[1]), b: parseInt(t[2]), a: parseFloat(t[3]) }
}
function Jt(e) {
    let t = bt(K(Math.round(e.r), 0, 255)),
        r = bt(K(Math.round(e.g), 0, 255)),
        o = bt(K(Math.round(e.b), 0, 255))
    return "a" in e
        ? "rgba(".concat(t, ",").concat(r, ",").concat(o, ",").concat(e.a, ")")
        : "#" + ((1 << 24) + (t << 16) + (r << 8) + o).toString(16).slice(1)
}
function An(e) {
    let t = e.s / 100,
        r = e.l / 100,
        o = (1 - Math.abs(2 * r - 1)) * t,
        n = o * (1 - Math.abs(((e.h / 60) % 2) - 1)),
        i = r - o / 2,
        u = 0,
        d = 0,
        s = 0
    return (
        0 <= e.h && e.h < 60
            ? ((u = o), (d = n), (s = 0))
            : 60 <= e.h && e.h < 120
              ? ((u = n), (d = o), (s = 0))
              : 120 <= e.h && e.h < 180
                ? ((u = 0), (d = o), (s = n))
                : 180 <= e.h && e.h < 240
                  ? ((u = 0), (d = n), (s = o))
                  : 240 <= e.h && e.h < 300
                    ? ((u = n), (d = 0), (s = o))
                    : 300 <= e.h && e.h < 360 && ((u = o), (d = 0), (s = n)),
        { r: Math.round((u + i) * 255), g: Math.round((d + i) * 255), b: Math.round((s + i) * 255) }
    )
}
var Pn = "0123456789ABCDEFabcdef",
    En = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i
function Ln(e) {
    for (let t of e) if (Pn.indexOf(t) === -1) return !1
    return !0
}
function $n(e) {
    return e[0] !== "#" || !(e.length === 4 || e.length === 7) ? !1 : Ln(e.slice(1))
}
function Nn(e) {
    let t = En.exec(e)
    if (!t) throw new Error('parseHsl: string is not a HSL color: "'.concat(e, '"'))
    return { h: parseInt(t[1]), s: parseFloat(t[3]), l: parseFloat(t[5]) }
}
function $e(e) {
    if (!e) return { r: 0, g: 0, b: 0 }
    if (typeof e != "string") throw new Error("parseColor: expected a string")
    if ($n(e)) return yt(e)
    if (e.startsWith("hsl(")) return An(Nn(e))
    if (e.startsWith("rgba(")) return Gn(e)
    throw new Error('parseColor: unexpected color format: "'.concat(e, '"'))
}
function jn(e, t) {
    let r = $e(e)
    return "rgba(".concat(r.r, ",").concat(r.g, ",").concat(r.b, ",").concat(t, ")")
}
var D = [0, 255]
function Wn(e, t) {
    let { blendMode: r } = t,
        o = $e(e),
        n = $e(t.black),
        i = $e(t.white),
        u = t.bg ? $e(t.bg) : r === "multiply" ? i : n,
        d = { r: [n.r, i.r], g: [n.g, i.g], b: [n.b, i.b] },
        s = { r: K(ee(...d.r, ...D, u.r), ...D), g: K(ee(...d.g, ...D, u.g), ...D), b: K(ee(...d.b, ...D, u.b), ...D) },
        v = { r: K(ee(...d.r, ...D, o.r), ...D), g: K(ee(...d.g, ...D, o.g), ...D), b: K(ee(...d.b, ...D, o.b), ...D) },
        y = r === "multiply" ? zn(s, v) : Hn(s, v),
        C = {
            r: K(ee(...D, ...d.r, y.r), ...d.r),
            g: K(ee(...D, ...d.g, y.g), ...d.g),
            b: K(ee(...D, ...d.b, y.b), ...d.b)
        }
    return Jt(C)
}
function p(e, t) {
    let { bg: r, blendMode: o, colorPalette: n } = t
    if (r === "white") throw new Error("Cannot blend with white background")
    let i = kt(e)
    if (!i || i.type !== "color") throw new Error("Invalid color token value: ".concat(e))
    let u = ""
    if (
        (i.key === "black" && (u = Ae(n.black)),
        i.key === "white" && (u = Ae(n.white)),
        i.hue && i.tint && (u = Ae(n[i.hue][i.tint])),
        !u)
    )
        throw new Error("Invalid color token value: ".concat(e))
    let d = u,
        s = { blendMode: o, bg: r, black: Ae(n.black), white: Ae(n.white) }
    try {
        if (((u = Wn(u, s)), r && i.mix !== void 0)) {
            let v = yt(r),
                y = yt(u)
            u = Jt(Mn(v, y, i.mix))
        }
    } catch (v) {
        throw (console.warn("could not blend", u, s), v)
    }
    return (
        u === "#aN" && (console.warn("invalid color token value: ".concat(e)), (u = d)),
        i.opacity !== void 0 && (u = jn(u, i.opacity)),
        u
    )
}
function Ae(e) {
    return typeof e == "string" ? e : e.hex
}
function Dn(e, t) {
    var r
    let o = (r = t == null ? void 0 : t.palette) != null ? r : Bn
    return { light: Dt(o, e.light), dark: Dt(o, e.dark) }
}
function Dt(e, t) {
    let r = Object.entries(t),
        [, o] = r.find(([s]) => s === "transparent"),
        [, n] = r.find(([s]) => s === "default"),
        i = pt(o, { colorPalette: e }),
        u = pt(n, { colorPalette: e }),
        d = u.bg
    if (d === "white") throw new Error("Cannot blend with white background")
    return Object.fromEntries([
        ["transparent", i],
        ["default", u],
        ...r
            .filter(([s]) => s !== "default" && s !== "transparent")
            .map(([s, v]) => [s, pt(v, { bg: d, colorPalette: e })])
    ])
}
function pt(e, t) {
    let { colorPalette: r, bg: o } = t,
        n = e._blend || "multiply",
        i = p(e.bg, { colorPalette: r, bg: o, blendMode: n }),
        u = { colorPalette: r, bg: i, blendMode: n },
        d = Kn(e.button, { baseBg: i, blendMode: n, colorPalette: r }),
        s = qn(e.selectable, { colorPalette: r, baseBg: i, blendMode: n }),
        v = {
            outline: p(e.shadow.outline, u),
            umbra: p(e.shadow.umbra, { ...u, bg: void 0, colorPalette: { ...r, black: "#000000" } }),
            penumbra: p(e.shadow.penumbra, { ...u, bg: void 0, colorPalette: { ...r, black: "#000000" } }),
            ambient: p(e.shadow.ambient, { ...u, bg: void 0, colorPalette: { ...r, black: "#000000" } })
        }
    return {
        _blend: n,
        _dark: e._dark,
        accent: { fg: p(e.accent.fg, u) },
        avatar: Qt(e.avatar, { baseBg: i, colorPalette: r, blendMode: n }),
        backdrop: p(e.backdrop, u),
        badge: Xt(e.badge, { baseBg: i, colorPalette: r, blendMode: n }),
        bg: i,
        border: p(e.border, u),
        button: d,
        code: { bg: p(e.code.bg, u), fg: p(e.code.fg, u) },
        fg: p(e.fg, u),
        focusRing: p(e.focusRing, u),
        icon: p(e.icon, u),
        input: Un(e.input, { baseBg: i, colorPalette: r, blendMode: n }),
        kbd: Yn(e.kbd, { baseBg: i, colorPalette: r, blendMode: n }),
        link: { fg: p(e.link.fg, u) },
        muted: { bg: p(e.muted.bg, u), fg: p(e.muted.fg, u) },
        shadow: v,
        skeleton: { from: p(e.skeleton.from, u), to: p(e.skeleton.to, u) },
        syntax: Vn(e.syntax, { baseBg: i, colorPalette: r, blendMode: n }),
        selectable: s
    }
}
function Yn(e, t) {
    let { baseBg: r, blendMode: o, colorPalette: n } = t,
        i = { bg: r, blendMode: o, colorPalette: n },
        u = p(e.bg, i),
        d = { bg: u, blendMode: o, colorPalette: n }
    return { bg: u, fg: p(e.fg, d), border: p(e.border, d) }
}
function Qt(e, t) {
    return {
        gray: te(e.gray, t),
        blue: te(e.blue, t),
        purple: te(e.purple, t),
        magenta: te(e.magenta, t),
        red: te(e.red, t),
        orange: te(e.orange, t),
        yellow: te(e.yellow, t),
        green: te(e.green, t),
        cyan: te(e.cyan, t)
    }
}
function te(e, t) {
    let { baseBg: r, blendMode: o, colorPalette: n } = t,
        i = e._blend || "multiply",
        u = { bg: r, blendMode: o, colorPalette: n },
        d = p(e.bg, u),
        s = { bg: d, blendMode: i, colorPalette: n }
    return { _blend: i, bg: d, fg: p(e.fg, s) }
}
function Xt(e, t) {
    return {
        default: Pe(e.default, t),
        primary: Pe(e.primary, t),
        positive: Pe(e.positive, t),
        caution: Pe(e.caution, t),
        critical: Pe(e.critical, t)
    }
}
function Pe(e, t) {
    let { baseBg: r, blendMode: o, colorPalette: n } = t,
        i = o,
        u = { bg: r, blendMode: o, colorPalette: n },
        d = p(e.bg, u),
        s = { bg: d, blendMode: i, colorPalette: n }
    return { bg: d, dot: p(e.dot, s), fg: p(e.fg, s), icon: p(e.icon, s) }
}
function Kn(e, t) {
    return { default: mt(e.default, t), ghost: mt(e.ghost, t), bleed: mt(e.bleed, t) }
}
function mt(e, t) {
    return {
        default: Ee(e.default, t),
        primary: Ee(e.primary, t),
        positive: Ee(e.positive, t),
        caution: Ee(e.caution, t),
        critical: Ee(e.critical, t)
    }
}
function Ee(e, t) {
    return {
        enabled: J(e.enabled, t),
        hovered: J(e.hovered, t),
        pressed: J(e.pressed, t),
        selected: J(e.selected, t),
        disabled: J(e.disabled, t)
    }
}
function J(e, t) {
    var r, o
    let { baseBg: n, blendMode: i, colorPalette: u } = t,
        d = e._blend || "multiply",
        s = { bg: n, blendMode: i, colorPalette: u },
        v = p(e.bg, s),
        y = { bg: v, blendMode: d, colorPalette: u }
    return {
        _blend: d,
        accent: { fg: p(e.accent.fg, y) },
        avatar: Qt(e.avatar, { baseBg: n, colorPalette: u, blendMode: d }),
        badge: Xt(e.badge, { baseBg: v, colorPalette: u, blendMode: d }),
        bg: v,
        border: p(e.border, y),
        code: { bg: p(e.code.bg, y), fg: p(e.code.fg, y) },
        fg: p(e.fg, y),
        icon: p(e.icon, y),
        link: { fg: p(e.link.fg, y) },
        muted: { bg: p(e.muted.bg, y), fg: p(e.muted.fg, y) },
        kbd: { bg: p(e.kbd.bg, y), fg: p(e.kbd.fg, y), border: p(e.kbd.border, y) },
        skeleton: {
            from: p((r = e.skeleton) == null ? void 0 : r.from, y),
            to: p((o = e.skeleton) == null ? void 0 : o.to, y)
        }
    }
}
function Un(e, t) {
    return { default: Yt(e.default, t), invalid: Yt(e.invalid, t) }
}
function Yt(e, t) {
    return {
        enabled: Je(e.enabled, t),
        hovered: Je(e.hovered, t),
        readOnly: Je(e.readOnly, t),
        disabled: Je(e.disabled, t)
    }
}
function Je(e, t) {
    let { baseBg: r, blendMode: o, colorPalette: n } = t,
        i = e._blend || "multiply",
        u = { colorPalette: n, bg: r, blendMode: o },
        d = p(e.bg, u),
        s = { colorPalette: n, bg: d, blendMode: i }
    return {
        _blend: i,
        bg: d,
        border: p(e.border, s),
        fg: p(e.fg, s),
        muted: { bg: p(e.muted.bg, s) },
        placeholder: p(e.placeholder, s)
    }
}
function qn(e, t) {
    return {
        default: Le(e.default, t),
        primary: Le(e.primary, t),
        positive: Le(e.positive, t),
        caution: Le(e.caution, t),
        critical: Le(e.critical, t)
    }
}
function Le(e, t) {
    return {
        enabled: J(e.enabled, t),
        hovered: J(e.hovered, t),
        pressed: J(e.pressed, t),
        selected: J(e.selected, t),
        disabled: J(e.disabled, t)
    }
}
function Vn(e, t) {
    let { colorPalette: r, baseBg: o, blendMode: n } = t,
        i = { colorPalette: r, bg: o, blendMode: n }
    return {
        atrule: p(e.atrule, i),
        attrName: p(e.attrName, i),
        attrValue: p(e.attrValue, i),
        attribute: p(e.attribute, i),
        boolean: p(e.boolean, i),
        builtin: p(e.builtin, i),
        cdata: p(e.cdata, i),
        char: p(e.char, i),
        class: p(e.class, i),
        className: p(e.className, i),
        comment: p(e.comment, i),
        constant: p(e.constant, i),
        deleted: p(e.deleted, i),
        doctype: p(e.doctype, i),
        entity: p(e.entity, i),
        function: p(e.function, i),
        hexcode: p(e.hexcode, i),
        id: p(e.id, i),
        important: p(e.important, i),
        inserted: p(e.inserted, i),
        keyword: p(e.keyword, i),
        number: p(e.number, i),
        operator: p(e.operator, i),
        prolog: p(e.prolog, i),
        property: p(e.property, i),
        pseudoClass: p(e.pseudoClass, i),
        pseudoElement: p(e.pseudoElement, i),
        punctuation: p(e.punctuation, i),
        regex: p(e.regex, i),
        selector: p(e.selector, i),
        string: p(e.string, i),
        symbol: p(e.symbol, i),
        tag: p(e.tag, i),
        unit: p(e.unit, i),
        url: p(e.url, i),
        variable: p(e.variable, i)
    }
}
function Zt(e) {
    var t, r, o, n, i, u, d, s, v, y, C, S
    let x = mn(e),
        P = {
            _version: 2,
            avatar: (t = e == null ? void 0 : e.avatar) != null ? t : k.avatar,
            button: (r = e == null ? void 0 : e.button) != null ? r : k.button,
            card: (o = e == null ? void 0 : e.card) != null ? o : k.card,
            color: Dn(x, e),
            container: (n = e == null ? void 0 : e.container) != null ? n : k.container,
            font: (i = e == null ? void 0 : e.font) != null ? i : Yr,
            input: (u = e == null ? void 0 : e.input) != null ? u : k.input,
            layer: (d = e == null ? void 0 : e.layer) != null ? d : k.layer,
            media: (s = e == null ? void 0 : e.media) != null ? s : k.media,
            radius: (v = e == null ? void 0 : e.radius) != null ? v : k.radius,
            shadow: (y = e == null ? void 0 : e.shadow) != null ? y : k.shadow,
            space: (C = e == null ? void 0 : e.space) != null ? C : k.space,
            style: (S = e == null ? void 0 : e.style) != null ? S : k.style
        }
    return Ur(P)
}
var er = Zt()
var kn = "#101112",
    Jn = "#fff",
    Qn = {
        50: { title: "Gray 50", hex: "#f2f3f5" },
        100: { title: "Gray 100", hex: "#e6e8ec" },
        200: { title: "Gray 200", hex: "#ced2d9" },
        300: { title: "Gray 300", hex: "#b6bcc6" },
        400: { title: "Gray 400", hex: "#9ea6b3" },
        500: { title: "Gray 500", hex: "#8690a0" },
        600: { title: "Gray 600", hex: "#6e7683" },
        700: { title: "Gray 700", hex: "#565d67" },
        800: { title: "Gray 800", hex: "#3f434a" },
        900: { title: "Gray 900", hex: "#272a2e" },
        950: { title: "Gray 950", hex: "#1b1d20" }
    },
    Xn = {
        50: { title: "Blue 50", hex: "#e8f1fe" },
        100: { title: "Blue 100", hex: "#d2e3fe" },
        200: { title: "Blue 200", hex: "#a6c8fd" },
        300: { title: "Blue 300", hex: "#7aacfd" },
        400: { title: "Blue 400", hex: "#4e91fc" },
        500: { title: "Blue 500", hex: "#2276fc" },
        600: { title: "Blue 600", hex: "#1e61cd" },
        700: { title: "Blue 700", hex: "#1a4d9e" },
        800: { title: "Blue 800", hex: "#17396f" },
        900: { title: "Blue 900", hex: "#132540" },
        950: { title: "Blue 950", hex: "#111b29" }
    },
    Zn = {
        50: { title: "Purple 50", hex: "#f8e9fe" },
        100: { title: "Purple 100", hex: "#f2d3fe" },
        200: { title: "Purple 200", hex: "#e6a7fd" },
        300: { title: "Purple 300", hex: "#d97bfd" },
        400: { title: "Purple 400", hex: "#cd4efc" },
        500: { title: "Purple 500", hex: "#c123fc" },
        600: { title: "Purple 600", hex: "#9d1fcd" },
        700: { title: "Purple 700", hex: "#7a1b9e" },
        800: { title: "Purple 800", hex: "#56186f" },
        900: { title: "Purple 900", hex: "#331440" },
        950: { title: "Purple 950", hex: "#211229" }
    },
    eo = {
        50: { title: "Magenta 50", hex: "#fcebf5" },
        100: { title: "Magenta 100", hex: "#f9d7eb" },
        200: { title: "Magenta 200", hex: "#f4afd8" },
        300: { title: "Magenta 300", hex: "#ef87c4" },
        400: { title: "Magenta 400", hex: "#ea5fb1" },
        500: { title: "Magenta 500", hex: "#e5389e" },
        600: { title: "Magenta 600", hex: "#ba3082" },
        700: { title: "Magenta 700", hex: "#8f2866" },
        800: { title: "Magenta 800", hex: "#65204a" },
        900: { title: "Magenta 900", hex: "#3a182d" },
        950: { title: "Magenta 950", hex: "#25141f" }
    },
    to = {
        50: { title: "Red 50", hex: "#fdebea" },
        100: { title: "Red 100", hex: "#fcd8d5" },
        200: { title: "Red 200", hex: "#f9b1ab" },
        300: { title: "Red 300", hex: "#f68b82" },
        400: { title: "Red 400", hex: "#f36458" },
        500: { title: "Red 500", hex: "#f03e2f" },
        600: { title: "Red 600", hex: "#c33529" },
        700: { title: "Red 700", hex: "#962c23" },
        800: { title: "Red 800", hex: "#69231d" },
        900: { title: "Red 900", hex: "#3c1a17" },
        950: { title: "Red 950", hex: "#261514" }
    },
    ro = {
        50: { title: "Orange 50", hex: "#fef0e6" },
        100: { title: "Orange 100", hex: "#fee2ce" },
        200: { title: "Orange 200", hex: "#fdc59d" },
        300: { title: "Orange 300", hex: "#fca86d" },
        400: { title: "Orange 400", hex: "#fb8b3c" },
        500: { title: "Orange 500", hex: "#e57322" },
        600: { title: "Orange 600", hex: "#ba5f1f" },
        700: { title: "Orange 700", hex: "#904b1b" },
        800: { title: "Orange 800", hex: "#653818" },
        900: { title: "Orange 900", hex: "#3a2415" },
        950: { title: "Orange 950", hex: "#251a13" }
    },
    no = {
        50: { title: "Yellow 50", hex: "#fef7da" },
        100: { title: "Yellow 100", hex: "#fdefb6" },
        200: { title: "Yellow 200", hex: "#fcdf6d" },
        300: { title: "Yellow 300", hex: "#fbd024" },
        400: { title: "Yellow 400", hex: "#d9b421" },
        500: { title: "Yellow 500", hex: "#b7991e" },
        600: { title: "Yellow 600", hex: "#967e1c" },
        700: { title: "Yellow 700", hex: "#746219" },
        800: { title: "Yellow 800", hex: "#534717" },
        900: { title: "Yellow 900", hex: "#312c14" },
        950: { title: "Yellow 950", hex: "#201e13" }
    },
    oo = {
        50: { title: "Green 50", hex: "#e7f9ed" },
        100: { title: "Green 100", hex: "#d0f4dc" },
        200: { title: "Green 200", hex: "#a1eaba" },
        300: { title: "Green 300", hex: "#72e097" },
        400: { title: "Green 400", hex: "#43d675" },
        500: { title: "Green 500", hex: "#3ab564" },
        600: { title: "Green 600", hex: "#329454" },
        700: { title: "Green 700", hex: "#297343" },
        800: { title: "Green 800", hex: "#215233" },
        900: { title: "Green 900", hex: "#183122" },
        950: { title: "Green 950", hex: "#14211a" }
    },
    io = {
        50: { title: "Cyan 50", hex: "#e3fafd" },
        100: { title: "Cyan 100", hex: "#c7f5fc" },
        200: { title: "Cyan 200", hex: "#90ecf9" },
        300: { title: "Cyan 300", hex: "#59e3f6" },
        400: { title: "Cyan 400", hex: "#22daf4" },
        500: { title: "Cyan 500", hex: "#1fb8ce" },
        600: { title: "Cyan 600", hex: "#1c97a8" },
        700: { title: "Cyan 700", hex: "#197583" },
        800: { title: "Cyan 800", hex: "#16545d" },
        900: { title: "Cyan 900", hex: "#133237" },
        950: { title: "Cyan 950", hex: "#112124" }
    },
    tr = { gray: Qn, blue: Xn, purple: Zn, magenta: eo, red: to, orange: ro, yellow: no, green: oo, cyan: io }
var rr = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
    nr = { title: "Black", hex: kn },
    or = { title: "White", hex: Jn }
var ye = or.hex.toLowerCase(),
    ve = nr.hex.toLowerCase(),
    Te = ["default", "transparent"]
var { blue: we, cyan: Ct, gray: j, green: Qe, magenta: Xe, orange: Ze, purple: Q, red: re, yellow: X } = tr
var lo = {
    default: { lightest: ye, darkest: ve, mid: "#8690a0", midPoint: 500 },
    primary: { lightest: ye, darkest: ve, mid: "#2276fc", midPoint: 500 },
    transparent: { lightest: ye, darkest: ve, mid: "#8690a0", midPoint: 500 },
    positive: { lightest: ye, darkest: ve, mid: "#43d675", midPoint: 400 },
    caution: { lightest: ye, darkest: ve, mid: "#fbd024", midPoint: 300 },
    critical: { lightest: ye, darkest: ve, mid: "#f03e2f", midPoint: 500 }
}
function ir(e, t = lo) {
    var v, y, C, S, x, P, H, z, w, a, l, f
    let r = JSON.parse(JSON.stringify(e)),
        o = ((y = (v = r.default) == null ? void 0 : v.mid) == null ? void 0 : y.toLowerCase()) || t.default.mid,
        n = ((S = (C = r.primary) == null ? void 0 : C.mid) == null ? void 0 : S.toLowerCase()) || t.primary.mid,
        i =
            ((P = (x = r.transparent) == null ? void 0 : x.mid) == null ? void 0 : P.toLowerCase()) ||
            t.transparent.mid,
        u = ((z = (H = r.positive) == null ? void 0 : H.mid) == null ? void 0 : z.toLowerCase()) || t.positive.mid,
        d = ((a = (w = r.caution) == null ? void 0 : w.mid) == null ? void 0 : a.toLowerCase()) || t.caution.mid,
        s = ((f = (l = r.critical) == null ? void 0 : l.mid) == null ? void 0 : f.toLowerCase()) || t.critical.mid
    return {
        default: { ...t.default, midPoint: o === t.default.mid ? t.default.midPoint : 500, ...r.default, mid: o },
        primary: { ...t.primary, midPoint: n === t.primary.mid ? t.primary.midPoint : 500, ...r.primary, mid: n },
        transparent: {
            ...t.transparent,
            midPoint: i === t.transparent.mid ? t.transparent.midPoint : 500,
            ...r.transparent,
            mid: i
        },
        positive: { ...t.positive, midPoint: u === t.positive.mid ? t.positive.midPoint : 500, ...r.positive, mid: u },
        caution: { ...t.caution, midPoint: d === t.caution.mid ? t.caution.midPoint : 500, ...r.caution, mid: d },
        critical: { ...t.critical, midPoint: s === t.critical.mid ? t.critical.midPoint : 500, ...r.critical, mid: s }
    }
}
function W() {
    return (
        (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t]
                      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                  }
                  return e
              }),
        W.apply(this, arguments)
    )
}
function Tt(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return e
}
function ne(e, t) {
    return (
        (ne = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (o, n) {
                  return (o.__proto__ = n), o
              }),
        ne(e, t)
    )
}
function wt(e, t) {
    ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ne(e, t)
}
function We(e) {
    return (
        (We = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r)
              }),
        We(e)
    )
}
function St(e) {
    try {
        return Function.toString.call(e).indexOf("[native code]") !== -1
    } catch (t) {
        return typeof e == "function"
    }
}
function et() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
    } catch (t) {}
    return (et = function () {
        return !!e
    })()
}
function _t(e, t, r) {
    if (et()) return Reflect.construct.apply(null, arguments)
    var o = [null]
    o.push.apply(o, t)
    var n = new (e.bind.apply(e, o))()
    return r && ne(n, r.prototype), n
}
function De(e) {
    var t = typeof Map == "function" ? new Map() : void 0
    return (
        (De = function (o) {
            if (o === null || !St(o)) return o
            if (typeof o != "function") throw new TypeError("Super expression must either be null or a function")
            if (typeof t < "u") {
                if (t.has(o)) return t.get(o)
                t.set(o, n)
            }
            function n() {
                return _t(o, arguments, We(this).constructor)
            }
            return (
                (n.prototype = Object.create(o.prototype, {
                    constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
                })),
                ne(n, o)
            )
        }),
        De(e)
    )
}
var Y = (function (e) {
    wt(t, e)
    function t(r) {
        var o
        if (1)
            o =
                e.call(
                    this,
                    "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                        r +
                        " for more information."
                ) || this
        else for (var n, i, u; u < n; u++);
        return Tt(o)
    }
    return t
})(De(Error))
function lr(e, t) {
    return e.substr(-t.length) === t
}
var ao = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
function ar(e) {
    if (typeof e != "string") return e
    var t = e.match(ao)
    return t ? parseFloat(e) : e
}
var uo = function (t) {
        return function (r, o) {
            o === void 0 && (o = "16px")
            var n = r,
                i = o
            if (typeof r == "string") {
                if (!lr(r, "px")) throw new Y(69, t, r)
                n = ar(r)
            }
            if (typeof o == "string") {
                if (!lr(o, "px")) throw new Y(70, t, o)
                i = ar(o)
            }
            if (typeof n == "string") throw new Y(71, r, t)
            if (typeof i == "string") throw new Y(72, o, t)
            return "" + n / i + t
        }
    },
    dr = uo,
    $i = dr("em")
var Ni = dr("rem")
function Ot(e) {
    return Math.round(e * 255)
}
function so(e, t, r) {
    return Ot(e) + "," + Ot(t) + "," + Ot(r)
}
function Ye(e, t, r, o) {
    if ((o === void 0 && (o = so), t === 0)) return o(r, r, r)
    var n = (((e % 360) + 360) % 360) / 60,
        i = (1 - Math.abs(2 * r - 1)) * t,
        u = i * (1 - Math.abs((n % 2) - 1)),
        d = 0,
        s = 0,
        v = 0
    n >= 0 && n < 1
        ? ((d = i), (s = u))
        : n >= 1 && n < 2
          ? ((d = u), (s = i))
          : n >= 2 && n < 3
            ? ((s = i), (v = u))
            : n >= 3 && n < 4
              ? ((s = u), (v = i))
              : n >= 4 && n < 5
                ? ((d = u), (v = i))
                : n >= 5 && n < 6 && ((d = i), (v = u))
    var y = r - i / 2,
        C = d + y,
        S = s + y,
        x = v + y
    return o(C, S, x)
}
var ur = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
}
function co(e) {
    if (typeof e != "string") return e
    var t = e.toLowerCase()
    return ur[t] ? "#" + ur[t] : e
}
var ho = /^#[a-fA-F0-9]{6}$/,
    fo = /^#[a-fA-F0-9]{8}$/,
    go = /^#[a-fA-F0-9]{3}$/,
    bo = /^#[a-fA-F0-9]{4}$/,
    Rt = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    po = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    mo = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    yo =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function Se(e) {
    if (typeof e != "string") throw new Y(3)
    var t = co(e)
    if (t.match(ho))
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16)
        }
    if (t.match(fo)) {
        var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2))
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: r
        }
    }
    if (t.match(go))
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16)
        }
    if (t.match(bo)) {
        var o = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2))
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: o
        }
    }
    var n = Rt.exec(t)
    if (n) return { red: parseInt("" + n[1], 10), green: parseInt("" + n[2], 10), blue: parseInt("" + n[3], 10) }
    var i = po.exec(t.substring(0, 50))
    if (i)
        return {
            red: parseInt("" + i[1], 10),
            green: parseInt("" + i[2], 10),
            blue: parseInt("" + i[3], 10),
            alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
        }
    var u = mo.exec(t)
    if (u) {
        var d = parseInt("" + u[1], 10),
            s = parseInt("" + u[2], 10) / 100,
            v = parseInt("" + u[3], 10) / 100,
            y = "rgb(" + Ye(d, s, v) + ")",
            C = Rt.exec(y)
        if (!C) throw new Y(4, t, y)
        return { red: parseInt("" + C[1], 10), green: parseInt("" + C[2], 10), blue: parseInt("" + C[3], 10) }
    }
    var S = yo.exec(t.substring(0, 50))
    if (S) {
        var x = parseInt("" + S[1], 10),
            P = parseInt("" + S[2], 10) / 100,
            H = parseInt("" + S[3], 10) / 100,
            z = "rgb(" + Ye(x, P, H) + ")",
            w = Rt.exec(z)
        if (!w) throw new Y(4, t, z)
        return {
            red: parseInt("" + w[1], 10),
            green: parseInt("" + w[2], 10),
            blue: parseInt("" + w[3], 10),
            alpha: parseFloat("" + S[4]) > 1 ? parseFloat("" + S[4]) / 100 : parseFloat("" + S[4])
        }
    }
    throw new Y(5)
}
function vo(e) {
    var t = e.red / 255,
        r = e.green / 255,
        o = e.blue / 255,
        n = Math.max(t, r, o),
        i = Math.min(t, r, o),
        u = (n + i) / 2
    if (n === i)
        return e.alpha !== void 0
            ? { hue: 0, saturation: 0, lightness: u, alpha: e.alpha }
            : { hue: 0, saturation: 0, lightness: u }
    var d,
        s = n - i,
        v = u > 0.5 ? s / (2 - n - i) : s / (n + i)
    switch (n) {
        case t:
            d = (r - o) / s + (r < o ? 6 : 0)
            break
        case r:
            d = (o - t) / s + 2
            break
        default:
            d = (t - r) / s + 4
            break
    }
    return (
        (d *= 60),
        e.alpha !== void 0
            ? { hue: d, saturation: v, lightness: u, alpha: e.alpha }
            : { hue: d, saturation: v, lightness: u }
    )
}
function pe(e) {
    return vo(Se(e))
}
var xo = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t
    },
    Mt = xo
function xe(e) {
    var t = e.toString(16)
    return t.length === 1 ? "0" + t : t
}
function Bt(e) {
    return xe(Math.round(e * 255))
}
function Co(e, t, r) {
    return Mt("#" + Bt(e) + Bt(t) + Bt(r))
}
function tt(e, t, r) {
    return Ye(e, t, r, Co)
}
function To(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number") return tt(e, t, r)
    if (typeof e == "object" && t === void 0 && r === void 0) return tt(e.hue, e.saturation, e.lightness)
    throw new Y(1)
}
function wo(e, t, r, o) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof o == "number")
        return o >= 1 ? tt(e, t, r) : "rgba(" + Ye(e, t, r) + "," + o + ")"
    if (typeof e == "object" && t === void 0 && r === void 0 && o === void 0)
        return e.alpha >= 1
            ? tt(e.hue, e.saturation, e.lightness)
            : "rgba(" + Ye(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")"
    throw new Y(2)
}
function zt(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number") return Mt("#" + xe(e) + xe(t) + xe(r))
    if (typeof e == "object" && t === void 0 && r === void 0) return Mt("#" + xe(e.red) + xe(e.green) + xe(e.blue))
    throw new Y(6)
}
function rt(e, t, r, o) {
    if (typeof e == "string" && typeof t == "number") {
        var n = Se(e)
        return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + t + ")"
    } else {
        if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof o == "number")
            return o >= 1 ? zt(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + o + ")"
        if (typeof e == "object" && t === void 0 && r === void 0 && o === void 0)
            return e.alpha >= 1
                ? zt(e.red, e.green, e.blue)
                : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")"
    }
    throw new Y(7)
}
var So = function (t) {
        return (
            typeof t.red == "number" &&
            typeof t.green == "number" &&
            typeof t.blue == "number" &&
            (typeof t.alpha != "number" || typeof t.alpha > "u")
        )
    },
    _o = function (t) {
        return (
            typeof t.red == "number" &&
            typeof t.green == "number" &&
            typeof t.blue == "number" &&
            typeof t.alpha == "number"
        )
    },
    Oo = function (t) {
        return (
            typeof t.hue == "number" &&
            typeof t.saturation == "number" &&
            typeof t.lightness == "number" &&
            (typeof t.alpha != "number" || typeof t.alpha > "u")
        )
    },
    Ro = function (t) {
        return (
            typeof t.hue == "number" &&
            typeof t.saturation == "number" &&
            typeof t.lightness == "number" &&
            typeof t.alpha == "number"
        )
    }
function me(e) {
    if (typeof e != "object") throw new Y(8)
    if (_o(e)) return rt(e)
    if (So(e)) return zt(e)
    if (Ro(e)) return wo(e)
    if (Oo(e)) return To(e)
    throw new Y(8)
}
function sr(e, t, r) {
    return function () {
        var n = r.concat(Array.prototype.slice.call(arguments))
        return n.length >= t ? e.apply(this, n) : sr(e, t, n)
    }
}
function U(e) {
    return sr(e, e.length, [])
}
function Bo(e, t) {
    if (t === "transparent") return t
    var r = pe(t)
    return me(W({}, r, { hue: r.hue + parseFloat(e) }))
}
var ji = U(Bo)
function _e(e, t, r) {
    return Math.max(e, Math.min(t, r))
}
function Mo(e, t) {
    if (t === "transparent") return t
    var r = pe(t)
    return me(W({}, r, { lightness: _e(0, 1, r.lightness - parseFloat(e)) }))
}
var Wi = U(Mo)
function zo(e, t) {
    if (t === "transparent") return t
    var r = pe(t)
    return me(W({}, r, { saturation: _e(0, 1, r.saturation - parseFloat(e)) }))
}
var Di = U(zo)
function Ho(e, t) {
    if (t === "transparent") return t
    var r = pe(t)
    return me(W({}, r, { lightness: _e(0, 1, r.lightness + parseFloat(e)) }))
}
var Yi = U(Ho)
function Fo(e, t, r) {
    if (t === "transparent") return r
    if (r === "transparent") return t
    if (e === 0) return r
    var o = Se(t),
        n = W({}, o, { alpha: typeof o.alpha == "number" ? o.alpha : 1 }),
        i = Se(r),
        u = W({}, i, { alpha: typeof i.alpha == "number" ? i.alpha : 1 }),
        d = n.alpha - u.alpha,
        s = parseFloat(e) * 2 - 1,
        v = s * d === -1 ? s : s + d,
        y = 1 + s * d,
        C = (v / y + 1) / 2,
        S = 1 - C,
        x = {
            red: Math.floor(n.red * C + u.red * S),
            green: Math.floor(n.green * C + u.green * S),
            blue: Math.floor(n.blue * C + u.blue * S),
            alpha: n.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e))
        }
    return rt(x)
}
var Io = U(Fo),
    Ke = Io
function Go(e, t) {
    if (t === "transparent") return t
    var r = Se(t),
        o = typeof r.alpha == "number" ? r.alpha : 1,
        n = W({}, r, { alpha: _e(0, 1, (o * 100 + parseFloat(e) * 100) / 100) })
    return rt(n)
}
var Ki = U(Go)
function Ao(e, t) {
    if (t === "transparent") return t
    var r = pe(t)
    return me(W({}, r, { saturation: _e(0, 1, r.saturation + parseFloat(e)) }))
}
var Ui = U(Ao)
function Po(e, t) {
    return t === "transparent" ? t : me(W({}, pe(t), { hue: parseFloat(e) }))
}
var qi = U(Po)
function Eo(e, t) {
    return t === "transparent" ? t : me(W({}, pe(t), { lightness: parseFloat(e) }))
}
var Vi = U(Eo)
function Lo(e, t) {
    return t === "transparent" ? t : me(W({}, pe(t), { saturation: parseFloat(e) }))
}
var ki = U(Lo)
function $o(e, t) {
    return t === "transparent" ? t : Ke(parseFloat(e), "rgb(0, 0, 0)", t)
}
var Ji = U($o)
function No(e, t) {
    return t === "transparent" ? t : Ke(parseFloat(e), "rgb(255, 255, 255)", t)
}
var Qi = U(No)
function jo(e, t) {
    if (t === "transparent") return t
    var r = Se(t),
        o = typeof r.alpha == "number" ? r.alpha : 1,
        n = W({}, r, { alpha: _e(0, 1, +(o * 100 - parseFloat(e) * 100).toFixed(2) / 100) })
    return rt(n)
}
var Xi = U(jo)
function cr(e) {
    return {
        default: Oe(e.default, "Default"),
        primary: Oe(e.primary, "Primary"),
        transparent: Oe(e.transparent, "Transparent"),
        positive: Oe(e.positive, "Positive"),
        caution: Oe(e.caution, "Caution"),
        critical: Oe(e.critical, "Critical")
    }
}
function Oe(e, t) {
    let r = {}
    return rr.reduce((n, i) => ((n[i] = { title: "".concat(t, " ").concat(i), hex: Wo(e, i) }), n), r)
}
function Wo(e, t) {
    let r = Number(t),
        o = e.midPoint,
        n = 1e3 - o,
        i = r / o,
        u = (r - o) / n
    return r === o ? e.mid.toLowerCase() : r < o ? Ke(i, e.mid, e.lightest) : Ke(u, e.darkest, e.mid)
}
function Do(e) {
    switch (e) {
        case "blue":
            return we
        case "cyan":
            return Ct
        case "gray":
            return j
        case "green":
            return Qe
        case "magenta":
            return Xe
        case "orange":
            return Ze
        case "purple":
            return Q
        case "red":
            return re
        case "yellow":
            return X
        default:
            throw new Error("Unknown tint: ".concat(e))
    }
}
function hr({
    hues: e,
    studioTheme: t,
    multiply: r,
    screen: o,
    parseColor: n,
    rgbToHex: i,
    rgba: u,
    createColorTheme: d
}) {
    function s(a, l) {
        let f = n(a),
            c = n(l)
        return i(r(f, c))
    }
    function v(a, l) {
        let f = n(a),
            c = n(l)
        return i(o(f, c))
    }
    let y = ir(e),
        C = { title: "Black", hex: y.default.darkest },
        S = { title: "white", hex: y.default.lightest },
        x = cr(y),
        P = x.primary,
        H = x.critical,
        z = x.primary,
        w = d({
            base: ({ dark: a, name: l }) => {
                if (l === "default") {
                    let m = a ? x.transparent[900].hex : x.transparent[100].hex
                    return {
                        fg: a ? S.hex : C.hex,
                        bg: a ? C.hex : S.hex,
                        border: x.transparent[a ? 800 : 200].hex,
                        focusRing: P[500].hex,
                        shadow: {
                            outline: u(x.transparent[500].hex, 0.4),
                            umbra: u(a ? C.hex : x.transparent[500].hex, 0.2),
                            penumbra: u(a ? C.hex : x.transparent[500].hex, 0.14),
                            ambient: u(a ? C.hex : x.transparent[500].hex, 0.12)
                        },
                        skeleton: { from: m, to: u(m, 0.5) }
                    }
                }
                if (l === "transparent") {
                    let m = x.default,
                        h = m[a ? 800 : 200].hex
                    return {
                        fg: m[a ? 100 : 900].hex,
                        bg: m[a ? 950 : 50].hex,
                        border: m[a ? 800 : 300].hex,
                        focusRing: P[500].hex,
                        shadow: {
                            outline: u(m[500].hex, a ? 0.2 : 0.4),
                            umbra: u(a ? C.hex : m[500].hex, 0.2),
                            penumbra: u(a ? C.hex : m[500].hex, 0.14),
                            ambient: u(a ? C.hex : m[500].hex, 0.12)
                        },
                        skeleton: { from: h, to: u(h, 0.5) }
                    }
                }
                let f = x[l] || x.default,
                    c = f[a ? 800 : 200].hex
                return {
                    fg: f[a ? 100 : 900].hex,
                    bg: f[a ? 950 : 50].hex,
                    border: f[a ? 800 : 200].hex,
                    focusRing: f[500].hex,
                    shadow: {
                        outline: u(f[500].hex, a ? 0.2 : 0.4),
                        umbra: u(a ? C.hex : f[500].hex, 0.2),
                        penumbra: u(a ? C.hex : f[500].hex, 0.14),
                        ambient: u(a ? C.hex : f[500].hex, 0.12)
                    },
                    skeleton: { from: c, to: u(c, 0.5) }
                }
            },
            solid: ({ base: a, dark: l, name: f, state: c, tone: m }) => {
                let h = l ? v : s,
                    O = l ? s : v,
                    L = x[f] || x.default,
                    T = Te.includes(f) && Te.includes(m),
                    _ = x[m === "default" ? f : m] || L
                if (c === "disabled") {
                    _ = L
                    let B = h(a.bg, _[l ? 800 : 200].hex),
                        N = O(B, _[l ? 200 : 800].hex)
                    return {
                        bg: B,
                        bg2: O(B, _[l ? 50 : 950].hex),
                        border: h(a.bg, _[l ? 800 : 200].hex),
                        fg: h(a.bg, l ? C.hex : S.hex),
                        icon: h(a.bg, l ? C.hex : S.hex),
                        muted: { fg: h(a.bg, _[l ? 950 : 50].hex) },
                        accent: { fg: h(a.bg, _[l ? 950 : 50].hex) },
                        link: { fg: h(a.bg, _[l ? 950 : 50].hex) },
                        code: { bg: B, fg: h(a.bg, _[l ? 950 : 50].hex) },
                        skeleton: { from: N, to: u(N, 0.5) }
                    }
                }
                if (c === "hovered") {
                    let B = h(a.bg, _[l ? 300 : 600].hex),
                        N = O(B, _[l ? 200 : 800].hex)
                    return {
                        bg: B,
                        bg2: O(B, _[l ? 50 : 950].hex),
                        border: h(a.bg, _[l ? 300 : 600].hex),
                        fg: h(a.bg, l ? C.hex : S.hex),
                        icon: h(a.bg, l ? C.hex : S.hex),
                        muted: { fg: h(a.bg, _[l ? 800 : 200].hex) },
                        accent: { fg: O(B, H[l ? 800 : 200].hex) },
                        link: { fg: O(B, z[l ? 800 : 200].hex) },
                        code: { bg: h(B, _[l ? 950 : 50].hex), fg: h(a.bg, _[l ? 800 : 200].hex) },
                        skeleton: { from: N, to: u(N, 0.5) }
                    }
                }
                if (c === "pressed") {
                    let B = h(a.bg, _[l ? 200 : 800].hex),
                        N = O(B, _[l ? 200 : 800].hex)
                    return {
                        bg: h(a.bg, _[l ? 200 : 800].hex),
                        bg2: O(B, _[l ? 50 : 950].hex),
                        border: h(a.bg, _[l ? 200 : 800].hex),
                        fg: h(a.bg, l ? C.hex : S.hex),
                        icon: h(a.bg, l ? C.hex : S.hex),
                        muted: { fg: h(a.bg, _[l ? 800 : 200].hex) },
                        accent: { fg: O(B, H[l ? 800 : 200].hex) },
                        link: { fg: O(B, z[l ? 800 : 200].hex) },
                        code: { bg: h(B, _[l ? 950 : 50].hex), fg: h(a.bg, _[l ? 800 : 200].hex) },
                        skeleton: { from: N, to: u(N, 0.5) }
                    }
                }
                if (c === "selected") {
                    T && (_ = x.primary)
                    let B = h(a.bg, _[l ? 200 : 800].hex),
                        N = O(B, _[l ? 200 : 800].hex)
                    return {
                        bg: B,
                        bg2: O(B, _[l ? 50 : 950].hex),
                        border: h(a.bg, _[l ? 200 : 800].hex),
                        fg: h(a.bg, l ? C.hex : S.hex),
                        icon: h(a.bg, l ? C.hex : S.hex),
                        muted: { fg: h(a.bg, _[l ? 800 : 200].hex) },
                        accent: { fg: O(B, H[l ? 800 : 200].hex) },
                        link: { fg: O(B, z[l ? 800 : 200].hex) },
                        code: { bg: h(B, _[l ? 950 : 50].hex), fg: h(a.bg, _[l ? 800 : 200].hex) },
                        skeleton: { from: N, to: u(N, 0.5) }
                    }
                }
                let $ = h(a.bg, _[l ? 400 : 500].hex),
                    R = O($, _[l ? 200 : 800].hex)
                return {
                    bg: $,
                    bg2: O($, _[l ? 50 : 950].hex),
                    border: h(a.bg, _[l ? 400 : 500].hex),
                    fg: h(a.bg, l ? C.hex : S.hex),
                    icon: h(a.bg, l ? C.hex : S.hex),
                    muted: { fg: h(a.bg, _[l ? 900 : 100].hex) },
                    accent: { fg: O($, H[l ? 900 : 100].hex) },
                    link: { fg: O($, z[l ? 900 : 100].hex) },
                    code: { bg: h($, _[l ? 950 : 50].hex), fg: h(a.bg, _[l ? 900 : 100].hex) },
                    skeleton: { from: R, to: u(R, 0.5) }
                }
            },
            muted: ({ base: a, dark: l, name: f, state: c, tone: m }) => {
                let h = l ? v : s,
                    O = x[f] || x.default,
                    L = Te.includes(f) && Te.includes(m),
                    T = x[m === "default" ? f : m] || O
                if (c === "disabled") {
                    T = O
                    let R = a.bg,
                        B = h(R, T[l ? 900 : 100].hex)
                    return {
                        bg: R,
                        bg2: h(R, T[l ? 950 : 50].hex),
                        border: h(R, T[l ? 950 : 50].hex),
                        fg: h(R, T[l ? 800 : 200].hex),
                        icon: h(R, T[l ? 800 : 200].hex),
                        muted: { fg: h(R, T[l ? 900 : 100].hex) },
                        accent: { fg: h(R, T[l ? 900 : 100].hex) },
                        link: { fg: h(R, T[l ? 900 : 100].hex) },
                        code: { bg: R, fg: h(R, T[l ? 900 : 100].hex) },
                        skeleton: { from: u(B, 0.5), to: u(B, 0.25) }
                    }
                }
                if (c === "hovered") {
                    L && (T = x.primary)
                    let R = h(a.bg, T[l ? 950 : 50].hex),
                        B = h(R, T[l ? 900 : 100].hex)
                    return {
                        bg: R,
                        bg2: h(R, T[l ? 950 : 50].hex),
                        border: h(R, T[l ? 900 : 100].hex),
                        fg: h(a.bg, T[l ? 200 : 800].hex),
                        icon: h(a.bg, T[l ? 200 : 800].hex),
                        muted: { fg: h(a.bg, T[l ? 400 : 600].hex) },
                        accent: { fg: h(a.bg, z[l ? 400 : 500].hex) },
                        link: { fg: h(a.bg, z[l ? 400 : 600].hex) },
                        code: { bg: h(R, T[l ? 950 : 50].hex), fg: h(a.bg, T[l ? 400 : 600].hex) },
                        skeleton: { from: B, to: u(B, 0.5) }
                    }
                }
                if (c === "pressed") {
                    L && (T = x.primary)
                    let R = h(a.bg, T[l ? 900 : 100].hex),
                        B = h(R, T[l ? 900 : 100].hex)
                    return {
                        bg: R,
                        bg2: h(R, T[l ? 950 : 50].hex),
                        border: h(R, T[l ? 900 : 100].hex),
                        fg: h(a.bg, T[l ? 200 : 800].hex),
                        icon: h(a.bg, T[l ? 200 : 800].hex),
                        muted: { fg: h(a.bg, T[l ? 400 : 600].hex) },
                        accent: { fg: h(R, H[l ? 400 : 500].hex) },
                        link: { fg: h(R, z[l ? 400 : 600].hex) },
                        code: { bg: h(R, T[l ? 950 : 50].hex), fg: h(a.bg, T[l ? 400 : 600].hex) },
                        skeleton: { from: B, to: u(B, 0.5) }
                    }
                }
                if (c === "selected") {
                    L && (T = x.primary)
                    let R = h(a.bg, T[l ? 900 : 100].hex),
                        B = h(R, T[l ? 900 : 100].hex)
                    return {
                        bg: R,
                        bg2: h(R, T[l ? 950 : 50].hex),
                        border: h(R, T[l ? 900 : 100].hex),
                        fg: h(a.bg, T[l ? 200 : 800].hex),
                        icon: h(a.bg, T[l ? 200 : 800].hex),
                        muted: { fg: h(a.bg, T[l ? 400 : 600].hex) },
                        accent: { fg: h(R, H[l ? 400 : 500].hex) },
                        link: { fg: h(R, z[l ? 400 : 600].hex) },
                        code: { bg: h(R, T[l ? 950 : 50].hex), fg: h(a.bg, T[l ? 400 : 600].hex) },
                        skeleton: { from: B, to: u(B, 0.5) }
                    }
                }
                let _ = a.bg,
                    $ = h(_, T[l ? 900 : 100].hex)
                return {
                    bg: _,
                    bg2: h(_, T[l ? 950 : 50].hex),
                    border: h(_, T[l ? 900 : 100].hex),
                    fg: h(a.bg, T[l ? 300 : 700].hex),
                    icon: h(a.bg, T[l ? 300 : 700].hex),
                    muted: { fg: h(a.bg, T[l ? 400 : 600].hex) },
                    accent: { fg: h(a.bg, H[l ? 400 : 500].hex) },
                    link: { fg: h(a.bg, z[l ? 400 : 600].hex) },
                    code: { bg: h(a.bg, T[l ? 950 : 50].hex), fg: h(a.bg, T[l ? 400 : 600].hex) },
                    skeleton: { from: $, to: u($, 0.5) }
                }
            },
            button: ({ base: a, mode: l, muted: f, solid: c }) =>
                l === "bleed"
                    ? {
                          enabled: { ...f.enabled, border: f.enabled.bg },
                          hovered: { ...f.hovered, border: f.hovered.bg },
                          pressed: { ...f.pressed, border: f.pressed.bg },
                          selected: { ...f.selected, border: f.selected.bg },
                          disabled: { ...f.disabled, border: f.disabled.bg }
                      }
                    : l === "ghost"
                      ? { ...c, enabled: { ...f.enabled, border: a.border }, disabled: f.disabled }
                      : c,
            card: ({ base: a, dark: l, muted: f, name: c, solid: m, state: h }) => {
                if (h === "hovered") return f[c].hovered
                if (h === "disabled") return f[c].disabled
                let O = Te.includes(c),
                    L = x[c] || x.default,
                    T = l ? v : s
                if (h === "pressed") return O ? f.primary.pressed : f[c].pressed
                if (h === "selected") return O ? m.primary.enabled : m[c].enabled
                let _ = a.bg,
                    $ = T(a.bg, L[l ? 900 : 100].hex)
                return {
                    bg: _,
                    bg2: T(_, L[l ? 950 : 50].hex),
                    fg: a.fg,
                    icon: a.fg,
                    border: a.border,
                    muted: { fg: T(a.bg, L[l ? 400 : 600].hex) },
                    accent: { fg: T(a.bg, re[l ? 400 : 500].hex) },
                    link: { fg: T(a.bg, we[l ? 400 : 600].hex) },
                    code: { bg: T(a.bg, L[l ? 950 : 50].hex), fg: L[l ? 400 : 600].hex },
                    skeleton: { from: $, to: u($, 0.5) }
                }
            },
            input: ({ base: a, dark: l, mode: f, state: c }) => {
                let m = l ? v : s
                if (f === "invalid") {
                    let h = x.critical
                    return {
                        bg: m(a.bg, h[l ? 950 : 50].hex),
                        bg2: m(a.bg, h[l ? 800 : 200].hex),
                        fg: m(a.bg, h[l ? 400 : 600].hex),
                        border: m(a.bg, h[l ? 800 : 200].hex),
                        placeholder: m(a.bg, h[l ? 600 : 400].hex)
                    }
                }
                return c === "hovered"
                    ? {
                          bg: a.bg,
                          bg2: m(a.bg, j[l ? 700 : 300].hex),
                          fg: a.fg,
                          border: m(a.bg, j[l ? 700 : 300].hex),
                          placeholder: m(a.bg, j[l ? 600 : 400].hex)
                      }
                    : c === "disabled"
                      ? {
                            bg: m(a.bg, j[l ? 950 : 50].hex),
                            bg2: m(a.bg, j[l ? 900 : 100].hex),
                            fg: m(a.bg, j[l ? 700 : 300].hex),
                            border: m(a.bg, j[l ? 900 : 100].hex),
                            placeholder: m(a.bg, j[l ? 800 : 200].hex)
                        }
                      : c === "readOnly"
                        ? {
                              bg: m(a.bg, j[l ? 950 : 50].hex),
                              bg2: m(a.bg, j[l ? 800 : 200].hex),
                              fg: m(a.bg, j[l ? 200 : 800].hex),
                              border: m(a.bg, j[l ? 800 : 200].hex),
                              placeholder: m(a.bg, j[l ? 600 : 400].hex)
                          }
                        : {
                              bg: a.bg,
                              bg2: a.border,
                              fg: a.fg,
                              border: a.border,
                              placeholder: m(a.bg, j[l ? 600 : 400].hex)
                          }
            },
            selectable: ({ base: a, muted: l, tone: f, solid: c, state: m }) =>
                m === "enabled"
                    ? { ...l[f].enabled, bg: a.bg }
                    : m === "pressed"
                      ? f === "default"
                          ? l.primary.pressed
                          : l[f].pressed
                      : m === "selected"
                        ? f === "default"
                            ? c.primary.enabled
                            : c[f].enabled
                        : m === "disabled"
                          ? { ...l[f].disabled, bg: a.bg }
                          : l[f][m],
            spot: ({ base: a, dark: l, key: f }) => (l ? v : s)(a.bg, Do(f)[l ? 400 : 500].hex),
            syntax: ({ base: a, dark: l }) => {
                let f = l ? v : s,
                    c = l ? 400 : 600,
                    m = l ? 600 : 400
                return {
                    atrule: f(a.bg, Q[c].hex),
                    attrName: f(a.bg, Qe[c].hex),
                    attrValue: f(a.bg, X[c].hex),
                    attribute: f(a.bg, X[c].hex),
                    boolean: f(a.bg, Q[c].hex),
                    builtin: f(a.bg, Q[c].hex),
                    cdata: f(a.bg, X[c].hex),
                    char: f(a.bg, X[c].hex),
                    class: f(a.bg, Ze[c].hex),
                    className: f(a.bg, Ct[c].hex),
                    comment: f(a.bg, j[m].hex),
                    constant: f(a.bg, Q[c].hex),
                    deleted: f(a.bg, re[c].hex),
                    doctype: f(a.bg, j[m].hex),
                    entity: f(a.bg, re[c].hex),
                    function: f(a.bg, Qe[c].hex),
                    hexcode: f(a.bg, we[c].hex),
                    id: f(a.bg, Q[c].hex),
                    important: f(a.bg, Q[c].hex),
                    inserted: f(a.bg, X[c].hex),
                    keyword: f(a.bg, Xe[c].hex),
                    number: f(a.bg, Q[c].hex),
                    operator: f(a.bg, Xe[c].hex),
                    prolog: f(a.bg, j[m].hex),
                    property: f(a.bg, we[c].hex),
                    pseudoClass: f(a.bg, X[c].hex),
                    pseudoElement: f(a.bg, X[c].hex),
                    punctuation: f(a.bg, j[c].hex),
                    regex: f(a.bg, we[c].hex),
                    selector: f(a.bg, re[c].hex),
                    string: f(a.bg, X[c].hex),
                    symbol: f(a.bg, Q[c].hex),
                    tag: f(a.bg, re[c].hex),
                    unit: f(a.bg, Ze[c].hex),
                    url: f(a.bg, re[c].hex),
                    variable: f(a.bg, re[c].hex)
                }
            }
        })
    return { ...t, color: w, __themer: !0, v2: void 0 }
}
function Ht(e, t) {
    return e * t
}
function fr(e, t) {
    return { r: Ht(e.r / 255, t.r / 255) * 255, g: Ht(e.g / 255, t.g / 255) * 255, b: Ht(e.b / 255, t.b / 255) * 255 }
}
function Ft(e, t) {
    return e + t - e * t
}
function gr(e, t) {
    return { r: Ft(e.r / 255, t.r / 255) * 255, g: Ft(e.g / 255, t.g / 255) * 255, b: Ft(e.b / 255, t.b / 255) * 255 }
}
function nt(e, t = 0, r = 1) {
    return Math.min(r, Math.max(t, e))
}
function ot(e) {
    return Math.round(e)
}
function br(e) {
    if (e.length === 4) {
        let t = e.slice(1, 2),
            r = e.slice(2, 3),
            o = e.slice(3, 4)
        return { r: parseInt(t + t, 16), g: parseInt(r + r, 16), b: parseInt(o + o, 16) }
    }
    return { r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) }
}
function pr(e) {
    let t = e.replace(/rgba\(|\)/g, "").split(",")
    return { r: parseInt(t[0]), g: parseInt(t[1]), b: parseInt(t[2]), a: parseFloat(t[3]) }
}
function mr(e) {
    let t = ot(nt(Math.round(e.r), 0, 255)),
        r = ot(nt(Math.round(e.g), 0, 255)),
        o = ot(nt(Math.round(e.b), 0, 255))
    return "a" in e
        ? "rgba(".concat(t, ",").concat(r, ",").concat(o, ",").concat(e.a, ")")
        : "#" + ((1 << 24) + (t << 16) + (r << 8) + o).toString(16).slice(1)
}
function yr(e) {
    let t = e.s / 100,
        r = e.l / 100,
        o = (1 - Math.abs(2 * r - 1)) * t,
        n = o * (1 - Math.abs(((e.h / 60) % 2) - 1)),
        i = r - o / 2,
        u = 0,
        d = 0,
        s = 0
    return (
        0 <= e.h && e.h < 60
            ? ((u = o), (d = n), (s = 0))
            : 60 <= e.h && e.h < 120
              ? ((u = n), (d = o), (s = 0))
              : 120 <= e.h && e.h < 180
                ? ((u = 0), (d = o), (s = n))
                : 180 <= e.h && e.h < 240
                  ? ((u = 0), (d = n), (s = o))
                  : 240 <= e.h && e.h < 300
                    ? ((u = n), (d = 0), (s = o))
                    : 300 <= e.h && e.h < 360 && ((u = o), (d = 0), (s = n)),
        { r: Math.round((u + i) * 255), g: Math.round((d + i) * 255), b: Math.round((s + i) * 255) }
    )
}
var Yo = "0123456789ABCDEFabcdef",
    Ko = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i
function Uo(e) {
    for (let t of e) if (Yo.indexOf(t) === -1) return !1
    return !0
}
function qo(e) {
    return e[0] !== "#" || !(e.length === 4 || e.length === 7) ? !1 : Uo(e.slice(1))
}
function Vo(e) {
    let t = Ko.exec(e)
    if (!t) throw new Error('parseHsl: string is not a HSL color: "'.concat(e, '"'))
    return { h: parseInt(t[1]), s: parseFloat(t[3]), l: parseFloat(t[5]) }
}
function it(e) {
    if (!e) return { r: 0, g: 0, b: 0 }
    if (typeof e != "string") throw new Error("parseColor: expected a string")
    if (qo(e)) return br(e)
    if (e.startsWith("hsl(")) return yr(Vo(e))
    if (e.startsWith("rgba(")) return pr(e)
    throw new Error('parseColor: unexpected color format: "'.concat(e, '"'))
}
function vr(e, t) {
    let r = it(e)
    return "rgba(".concat(r.r, ",").concat(r.g, ",").concat(r.b, ",").concat(t, ")")
}
function xr(e, t, r, o, n) {
    return {
        default: Ue(e, t, r, o, n, "default"),
        primary: Ue(e, t, r, o, n, "primary"),
        positive: Ue(e, t, r, o, n, "positive"),
        caution: Ue(e, t, r, o, n, "caution"),
        critical: Ue(e, t, r, o, n, "critical")
    }
}
function Ue(e, t, r, o, n, i) {
    return {
        enabled: e.selectable({ base: t, dark: r, solid: o, muted: n, state: "enabled", tone: i }),
        hovered: e.selectable({ base: t, dark: r, solid: o, muted: n, state: "hovered", tone: i }),
        pressed: e.selectable({ base: t, dark: r, solid: o, muted: n, state: "pressed", tone: i }),
        selected: e.selectable({ base: t, dark: r, solid: o, muted: n, state: "selected", tone: i }),
        disabled: e.selectable({ base: t, dark: r, solid: o, muted: n, state: "disabled", tone: i })
    }
}
function Cr(e, t, r, o) {
    return {
        default: {
            enabled: e.solid({ base: t, dark: r, tone: "default", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "default", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "default", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "default", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "default", name: o, state: "selected" })
        },
        transparent: {
            enabled: e.solid({ base: t, dark: r, tone: "transparent", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "transparent", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "transparent", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "transparent", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "transparent", name: o, state: "selected" })
        },
        primary: {
            enabled: e.solid({ base: t, dark: r, tone: "primary", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "primary", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "primary", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "primary", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "primary", name: o, state: "selected" })
        },
        positive: {
            enabled: e.solid({ base: t, dark: r, tone: "positive", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "positive", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "positive", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "positive", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "positive", name: o, state: "selected" })
        },
        caution: {
            enabled: e.solid({ base: t, dark: r, tone: "caution", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "caution", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "caution", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "caution", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "caution", name: o, state: "selected" })
        },
        critical: {
            enabled: e.solid({ base: t, dark: r, tone: "critical", name: o, state: "enabled" }),
            disabled: e.solid({ base: t, dark: r, tone: "critical", name: o, state: "disabled" }),
            hovered: e.solid({ base: t, dark: r, tone: "critical", name: o, state: "hovered" }),
            pressed: e.solid({ base: t, dark: r, tone: "critical", name: o, state: "pressed" }),
            selected: e.solid({ base: t, dark: r, tone: "critical", name: o, state: "selected" })
        }
    }
}
function lt(e, t, r, o, n, i) {
    return {
        default: e.button({ base: t, dark: r, solid: o.default, muted: n.default, mode: i }),
        primary: e.button({ base: t, dark: r, solid: o.primary, muted: n.primary, mode: i }),
        positive: e.button({ base: t, dark: r, solid: o.positive, muted: n.positive, mode: i }),
        caution: e.button({ base: t, dark: r, solid: o.caution, muted: n.caution, mode: i }),
        critical: e.button({ base: t, dark: r, solid: o.critical, muted: n.critical, mode: i })
    }
}
function Tr(e, t, r, o, n) {
    return {
        default: lt(e, t, r, o, n, "default"),
        ghost: lt(e, t, r, o, n, "ghost"),
        bleed: lt(e, t, r, o, n, "bleed")
    }
}
function wr(e, t, r, o, n, i) {
    return {
        enabled: e.card({ base: t, dark: r, name: o, state: "enabled", solid: n, muted: i }),
        disabled: e.card({ base: t, dark: r, name: o, state: "disabled", solid: n, muted: i }),
        hovered: e.card({ base: t, dark: r, name: o, state: "hovered", solid: n, muted: i }),
        pressed: e.card({ base: t, dark: r, name: o, state: "pressed", solid: n, muted: i }),
        selected: e.card({ base: t, dark: r, name: o, state: "selected", solid: n, muted: i })
    }
}
var b = "hsl(0, 0%, 0%)",
    Re = "hsl(0, 0%, 100%)",
    M = {
        default: {
            lightest: "hsl(0, 0%, 95%)",
            lighter: "hsl(0, 0%, 70%)",
            light: "hsl(0, 0%, 65%)",
            base: "hsl(0, 0%, 50%)",
            dark: "hsl(0, 0%, 35%)",
            darker: "hsl(0, 0%, 20%)",
            darkest: "hsl(0, 0%, 5%)"
        },
        transparent: {
            lightest: "hsl(240, 100%, 95%)",
            lighter: "hsl(240, 100%, 70%)",
            light: "hsl(240, 100%, 65%)",
            base: "hsl(240, 100%, 50%)",
            dark: "hsl(240, 100%, 35%)",
            darker: "hsl(240, 100%, 20%)",
            darkest: "hsl(240, 100%, 5%)"
        },
        primary: {
            lightest: "hsl(240, 100%, 95%)",
            lighter: "hsl(240, 100%, 70%)",
            light: "hsl(240, 100%, 65%)",
            base: "hsl(240, 100%, 50%)",
            dark: "hsl(240, 100%, 35%)",
            darker: "hsl(240, 100%, 20%)",
            darkest: "hsl(240, 100%, 5%)"
        },
        positive: {
            lightest: "hsl(120, 100%, 95%)",
            lighter: "hsl(120, 100%, 70%)",
            light: "hsl(120, 100%, 65%)",
            base: "hsl(120, 100%, 50%)",
            dark: "hsl(120, 100%, 35%)",
            darker: "hsl(120, 100%, 20%)",
            darkest: "hsl(120, 100%, 5%)"
        },
        caution: {
            lightest: "hsl(60, 100%, 95%)",
            lighter: "hsl(60, 100%, 70%)",
            light: "hsl(60, 100%, 65%)",
            base: "hsl(60, 100%, 50%)",
            dark: "hsl(60, 100%, 35%)",
            darker: "hsl(60, 100%, 20%)",
            darkest: "hsl(60, 100%, 5%)"
        },
        critical: {
            lightest: "hsl(0, 100%, 95%)",
            lighter: "hsl(0, 100%, 70%)",
            light: "hsl(0, 100%, 65%)",
            base: "hsl(0, 100%, 50%)",
            dark: "hsl(0, 100%, 35%)",
            darker: "hsl(0, 100%, 20%)",
            darkest: "hsl(0, 100%, 5%)"
        }
    },
    ko = {
        gray: "hsl(0, 0%, 50%)",
        red: "hsl(0, 100%, 50%)",
        orange: "hsl(30, 100%, 50%)",
        yellow: "hsl(60, 100%, 50%)",
        green: "hsl(120, 100%, 50%)",
        cyan: "hsl(180, 100%, 50%)",
        blue: "hsl(240, 100%, 50%)",
        purple: "hsl(270, 100%, 50%)",
        magenta: "hsl(300, 100%, 50%)"
    },
    at = {
        transparent: {
            bg: [M.transparent.darkest, M.transparent.lightest],
            fg: [M.transparent.lightest, M.transparent.darkest],
            border: [M.transparent.darker, M.transparent.lighter],
            focusRing: [M.transparent.base, M.transparent.base]
        },
        primary: {
            bg: [M.primary.darkest, M.primary.lightest],
            fg: [M.primary.lightest, M.primary.darkest],
            border: [M.primary.darker, M.primary.lighter],
            focusRing: [M.primary.base, M.primary.base]
        },
        positive: {
            bg: [M.positive.darkest, M.positive.lightest],
            fg: [M.positive.lightest, M.positive.darkest],
            border: [M.positive.darker, M.positive.lighter],
            focusRing: [M.positive.base, M.positive.base]
        },
        caution: {
            bg: [M.caution.darkest, M.caution.lightest],
            fg: [M.caution.lightest, M.caution.darkest],
            border: [M.caution.darker, M.caution.lighter],
            focusRing: [M.caution.base, M.caution.base]
        },
        critical: {
            bg: [M.critical.darkest, M.critical.lightest],
            fg: [M.critical.lightest, M.critical.darkest],
            border: [M.critical.darker, M.critical.lighter],
            focusRing: [M.critical.base, M.critical.base]
        }
    },
    Sr = {
        base: ({ dark: e, name: t }) =>
            t === "default"
                ? {
                      bg: e ? b : Re,
                      fg: e ? Re : b,
                      border: e ? M.default.darkest : M.default.lightest,
                      focusRing: M.primary.base,
                      shadow: { outline: b, umbra: b, penumbra: b, ambient: b },
                      skeleton: { from: e ? Re : b, to: e ? Re : b }
                  }
                : {
                      bg: at[t].bg[e ? 0 : 1],
                      fg: at[t].fg[e ? 0 : 1],
                      border: at[t].border[e ? 0 : 1],
                      focusRing: at[t].focusRing[e ? 0 : 1],
                      shadow: { outline: b, umbra: b, penumbra: b, ambient: b },
                      skeleton: { from: e ? Re : b, to: e ? Re : b }
                  },
        solid: ({ base: e, dark: t, state: r, tone: o }) => {
            let n = M[o]
            return r === "hovered"
                ? {
                      bg: t ? n.light : n.dark,
                      bg2: t ? n.light : n.dark,
                      border: t ? n.lighter : n.darker,
                      fg: t ? n.darkest : n.lightest,
                      icon: t ? n.darkest : n.lightest,
                      muted: { fg: b },
                      accent: { fg: b },
                      link: { fg: b },
                      code: { bg: b, fg: b },
                      skeleton: e.skeleton
                  }
                : {
                      bg: n.base,
                      bg2: n.base,
                      border: t ? n.light : n.dark,
                      fg: t ? n.darkest : n.lightest,
                      icon: t ? n.darkest : n.lightest,
                      muted: { fg: b },
                      accent: { fg: b },
                      link: { fg: b },
                      code: { bg: b, fg: b },
                      skeleton: e.skeleton
                  }
        },
        muted: ({ base: e, dark: t, state: r, tone: o }) => {
            let n = M[o]
            return r === "hovered"
                ? {
                      bg: t ? n.darker : n.lighter,
                      bg2: t ? n.darker : n.lighter,
                      border: t ? n.lighter : n.darker,
                      fg: t ? n.lightest : n.darkest,
                      icon: t ? n.lightest : n.darkest,
                      muted: { fg: b },
                      accent: { fg: b },
                      link: { fg: b },
                      code: { bg: b, fg: b },
                      skeleton: e.skeleton
                  }
                : {
                      bg: t ? n.darkest : n.lightest,
                      bg2: t ? n.darkest : n.lightest,
                      border: t ? n.darker : n.lighter,
                      fg: t ? n.lighter : n.darker,
                      icon: t ? n.lighter : n.darker,
                      muted: { fg: b },
                      accent: { fg: b },
                      link: { fg: b },
                      code: { bg: b, fg: b },
                      skeleton: e.skeleton
                  }
        },
        button: ({ base: e, mode: t, muted: r, solid: o }) =>
            t === "bleed"
                ? {
                      ...r,
                      enabled: {
                          bg: "transparent",
                          bg2: "transparent",
                          fg: r.enabled.fg,
                          icon: r.enabled.fg,
                          border: "transparent",
                          muted: { fg: b },
                          accent: { fg: b },
                          link: { fg: b },
                          code: { bg: b, fg: b },
                          skeleton: e.skeleton
                      },
                      hovered: {
                          bg: r.enabled.bg,
                          bg2: r.enabled.bg,
                          fg: r.hovered.fg,
                          icon: r.hovered.fg,
                          border: "transparent",
                          muted: { fg: b },
                          accent: { fg: b },
                          link: { fg: b },
                          code: { bg: b, fg: b },
                          skeleton: e.skeleton
                      }
                  }
                : t === "ghost"
                  ? { ...o, enabled: r.enabled }
                  : o,
        card: ({ base: e }) => ({
            bg: b,
            bg2: b,
            fg: b,
            icon: b,
            border: b,
            muted: { fg: b },
            accent: { fg: b },
            link: { fg: b },
            code: { bg: b, fg: b },
            skeleton: e.skeleton
        }),
        input: () => ({ bg: b, bg2: b, fg: b, border: b, placeholder: b }),
        selectable: ({ muted: e, state: t, tone: r }) => e[r][t],
        spot: ({ key: e }) => ko[e],
        syntax: () => ({
            atrule: b,
            attrName: b,
            attrValue: b,
            attribute: b,
            boolean: b,
            builtin: b,
            cdata: b,
            char: b,
            class: b,
            className: b,
            comment: b,
            constant: b,
            deleted: b,
            doctype: b,
            entity: b,
            function: b,
            hexcode: b,
            id: b,
            important: b,
            inserted: b,
            keyword: b,
            number: b,
            operator: b,
            prolog: b,
            property: b,
            pseudoClass: b,
            pseudoElement: b,
            punctuation: b,
            regex: b,
            selector: b,
            string: b,
            symbol: b,
            tag: b,
            unit: b,
            url: b,
            variable: b
        })
    }
function _r(e, t, r, o, n) {
    return {
        default: {
            enabled: e.input({
                base: t,
                dark: r,
                mode: "default",
                state: "enabled",
                solid: o.default,
                muted: n.default
            }),
            disabled: e.input({
                base: t,
                dark: r,
                mode: "default",
                state: "disabled",
                solid: o.default,
                muted: n.default
            }),
            hovered: e.input({
                base: t,
                dark: r,
                mode: "default",
                state: "hovered",
                solid: o.default,
                muted: n.default
            }),
            readOnly: e.input({
                base: t,
                dark: r,
                mode: "default",
                state: "readOnly",
                solid: o.default,
                muted: n.default
            })
        },
        invalid: {
            enabled: e.input({
                base: t,
                dark: r,
                mode: "invalid",
                state: "enabled",
                solid: o.default,
                muted: n.default
            }),
            disabled: e.input({
                base: t,
                dark: r,
                mode: "invalid",
                state: "disabled",
                solid: o.default,
                muted: n.default
            }),
            hovered: e.input({
                base: t,
                dark: r,
                mode: "invalid",
                state: "hovered",
                solid: o.default,
                muted: n.default
            }),
            readOnly: e.input({
                base: t,
                dark: r,
                mode: "invalid",
                state: "readOnly",
                solid: o.default,
                muted: n.default
            })
        }
    }
}
function Or(e, t, r, o) {
    return {
        default: {
            enabled: e.muted({ base: t, dark: r, tone: "default", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "default", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "default", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "default", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "default", name: o, state: "selected" })
        },
        transparent: {
            enabled: e.muted({ base: t, dark: r, tone: "transparent", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "transparent", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "transparent", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "transparent", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "transparent", name: o, state: "selected" })
        },
        primary: {
            enabled: e.muted({ base: t, dark: r, tone: "primary", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "primary", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "primary", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "primary", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "primary", name: o, state: "selected" })
        },
        positive: {
            enabled: e.muted({ base: t, dark: r, tone: "positive", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "positive", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "positive", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "positive", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "positive", name: o, state: "selected" })
        },
        caution: {
            enabled: e.muted({ base: t, dark: r, tone: "caution", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "caution", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "caution", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "caution", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "caution", name: o, state: "selected" })
        },
        critical: {
            enabled: e.muted({ base: t, dark: r, tone: "critical", name: o, state: "enabled" }),
            disabled: e.muted({ base: t, dark: r, tone: "critical", name: o, state: "disabled" }),
            hovered: e.muted({ base: t, dark: r, tone: "critical", name: o, state: "hovered" }),
            pressed: e.muted({ base: t, dark: r, tone: "critical", name: o, state: "pressed" }),
            selected: e.muted({ base: t, dark: r, tone: "critical", name: o, state: "selected" })
        }
    }
}
function Rr(e, t, r) {
    return {
        gray: e.spot({ base: t, dark: r, key: "gray" }),
        blue: e.spot({ base: t, dark: r, key: "blue" }),
        purple: e.spot({ base: t, dark: r, key: "purple" }),
        magenta: e.spot({ base: t, dark: r, key: "magenta" }),
        red: e.spot({ base: t, dark: r, key: "red" }),
        orange: e.spot({ base: t, dark: r, key: "orange" }),
        yellow: e.spot({ base: t, dark: r, key: "yellow" }),
        green: e.spot({ base: t, dark: r, key: "green" }),
        cyan: e.spot({ base: t, dark: r, key: "cyan" })
    }
}
function Mr(e = {}) {
    let t = { ...Sr, ...e }
    return { light: Br(t, !1), dark: Br(t, !0) }
}
function Br(e, t) {
    return {
        default: Be(e, t, "default"),
        transparent: Be(e, t, "transparent"),
        primary: Be(e, t, "primary"),
        positive: Be(e, t, "positive"),
        caution: Be(e, t, "caution"),
        critical: Be(e, t, "critical")
    }
}
function Be(e, t, r) {
    let o = e.base({ dark: t, name: r }),
        n = Cr(e, o, t, r),
        i = Or(e, o, t, r)
    return {
        base: o,
        button: Tr(e, o, t, n, i),
        card: wr(e, o, t, r, n, i),
        dark: t,
        input: _r(e, o, t, n, i),
        selectable: xr(e, o, t, n, i),
        spot: Rr(e, o, t),
        syntax: e.syntax({ base: o, dark: t }),
        solid: n,
        muted: i
    }
}
var Jo = {
        default: { lightest: "#ffffff", darkest: "#000000", mid: "#1d1d1d", midPoint: 700 },
        primary: { lightest: "#ffffff", darkest: "#000000", mid: "#46ffad", midPoint: 400 },
        transparent: { lightest: "#fff", darkest: "#101112", mid: "#8690a0", midPoint: 800 },
        positive: { lightest: "#fff", darkest: "#101112", mid: "#43d675", midPoint: 400 },
        caution: { lightest: "#fff", darkest: "#101112", mid: "#fbd024", midPoint: 300 },
        critical: { lightest: "#fff", darkest: "#101112", mid: "#f03e2f", midPoint: 500 }
    },
    Qo = (e) =>
        hr({
            createColorTheme: Mr,
            hues: e,
            multiply: fr,
            parseColor: it,
            rgba: vr,
            rgbToHex: mr,
            screen: gr,
            studioTheme: er
        }),
    $0 = Qo(Jo)
export { Qo as createTheme, Jo as hues, $0 as theme }
