/*
 * MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
 * Version: 1.5
 * License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
 * http://creativecommons.org/licenses/by-nd/3.0/
 * This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
 * Author: Patrick Kunka
 * Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
 *
 * http://mixitup.io
 */
(function (e) {
    function k(c, a, g, d, b) {
        function j() {
            l.unbind(); a && v(a, g, d, b); b.startOrder = []; b.newOrder = []; b.origSort = []; b.checkSort = []; u.removeStyle(b.prefix + "filter, filter, " + b.prefix + "transform, transform, opacity, display").css(b.clean).removeAttr("data-checksum"); window.atob || u.css({ display: "none", opacity: "0" }); l.removeStyle(b.prefix + "transition, transition, " + b.prefix + "perspective, perspective, " + b.prefix + "perspective-origin, perspective-origin, " + (b.resizeContainer ? "height" : "")); "list" == b.layoutMode ?
                (q.css({ display: b.targetDisplayList, opacity: "1" }), b.origDisplay = b.targetDisplayList) : (q.css({ display: b.targetDisplayGrid, opacity: "1" }), b.origDisplay = b.targetDisplayGrid); b.origLayout = b.layoutMode; setTimeout(function () { u.removeStyle(b.prefix + "transition, transition"); b.mixing = !1; if ("function" == typeof b.onMixEnd) { var a = b.onMixEnd.call(this, b); b = a ? a : b } })
        } clearInterval(b.failsafe); b.mixing = !0; if ("function" == typeof b.onMixStart) { var f = b.onMixStart.call(this, b); b = f ? f : b } for (var h = b.transitionSpeed, f = 0; 2 >
            f; f++) { var m = 0 == f ? m = b.prefix : ""; b.transition[m + "transition"] = "all " + h + "ms linear"; b.transition[m + "transform"] = m + "translate3d(0,0,0)"; b.perspective[m + "perspective"] = b.perspectiveDistance + "px"; b.perspective[m + "perspective-origin"] = b.perspectiveOrigin } var r = b.targetSelector, u = d.find(r); u.each(function () { this.data = {} }); var l = u.parent(); l.css(b.perspective); b.easingFallback = "ease-in-out"; "smooth" == b.easing && (b.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"); "snap" == b.easing && (b.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
        "windback" == b.easing && (b.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", b.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"); "windup" == b.easing && (b.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", b.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)"); f = "list" == b.layoutMode && null != b.listEffects ? b.listEffects : b.effects; Array.prototype.indexOf && (b.fade = -1 < f.indexOf("fade") ? "0" : "", b.scale = -1 < f.indexOf("scale") ? "scale(.01)" : "", b.rotateZ = -1 < f.indexOf("rotateZ") ? "rotate(180deg)" : "", b.rotateY = -1 <
            f.indexOf("rotateY") ? "rotateY(90deg)" : "", b.rotateX = -1 < f.indexOf("rotateX") ? "rotateX(90deg)" : "", b.blur = -1 < f.indexOf("blur") ? "blur(8px)" : "", b.grayscale = -1 < f.indexOf("grayscale") ? "grayscale(100%)" : ""); c = c.replace(/\s|\//g, "."); var q = e(), s = e(); if ("or" == b.filterLogic) { var k = c.split("."); !0 == b.multiFilter && "" == k[0] && k.shift(); 1 > k.length ? s = s.add(d.find(r + ":visible")) : u.each(function () { for (var b = 0, a = e(this), c = 0; c < k.length; c++)a.hasClass(k[c]) && (q = q.add(a), b++); 0 == b && (s = s.add(a)) }) } else q = q.add(l.find(r + "." +
                c)), s = s.add(l.find(r + ":not(." + c + "):visible")); c = q.length; var t = e(), p = e(), n = e(); s.each(function () { var b = e(this); "none" != b.css("display") && (t = t.add(b), n = n.add(b)) }); if (q.filter(":visible").length == c && !t.length && !a) { if (b.origLayout == b.layoutMode) return j(), !1; if (1 == q.length) return "list" == b.layoutMode ? (d.addClass(b.listClass), d.removeClass(b.gridClass), n.css("display", b.targetDisplayList)) : (d.addClass(b.gridClass), d.removeClass(b.listClass), n.css("display", b.targetDisplayGrid)), j(), !1 } b.origHeight = l.height();
        if (q.length) {
            d.removeClass(b.failClass); q.each(function () { var b = e(this); "none" == b.css("display") ? p = p.add(b) : n = n.add(b) }); if (b.origLayout != b.layoutMode && !1 == b.animateGridList) return "list" == b.layoutMode ? (d.addClass(b.listClass), d.removeClass(b.gridClass), n.css("display", b.targetDisplayList)) : (d.addClass(b.gridClass), d.removeClass(b.listClass), n.css("display", b.targetDisplayGrid)), j(), !1; if (!window.atob) return j(), !1; u.css(b.clean); n.each(function () { this.data.origPos = e(this).offset() }); "list" == b.layoutMode ?
                (d.addClass(b.listClass), d.removeClass(b.gridClass), p.css("display", b.targetDisplayList)) : (d.addClass(b.gridClass), d.removeClass(b.listClass), p.css("display", b.targetDisplayGrid)); p.each(function () { this.data.showInterPos = e(this).offset() }); t.each(function () { this.data.hideInterPos = e(this).offset() }); n.each(function () { this.data.preInterPos = e(this).offset() }); "list" == b.layoutMode ? n.css("display", b.targetDisplayList) : n.css("display", b.targetDisplayGrid); a && v(a, g, d, b); if (a && b.origSort.compare(b.checkSort)) return j(),
                    !1; t.hide(); p.each(function () { this.data.finalPos = e(this).offset() }); n.each(function () { this.data.finalPrePos = e(this).offset() }); b.newHeight = l.height(); a && v("reset", null, d, b); p.hide(); n.css("display", b.origDisplay); "block" == b.origDisplay ? (d.addClass(b.listClass), p.css("display", b.targetDisplayList)) : (d.removeClass(b.listClass), p.css("display", b.targetDisplayGrid)); b.resizeContainer && l.css("height", b.origHeight + "px"); c = {}; for (f = 0; 2 > f; f++)m = 0 == f ? m = b.prefix : "", c[m + "transform"] = b.scale + " " + b.rotateX + " " +
                        b.rotateY + " " + b.rotateZ, c[m + "filter"] = b.blur + " " + b.grayscale; p.css(c); n.each(function () { var a = this.data, c = e(this); c.hasClass("mix_tohide") ? (a.preTX = a.origPos.left - a.hideInterPos.left, a.preTY = a.origPos.top - a.hideInterPos.top) : (a.preTX = a.origPos.left - a.preInterPos.left, a.preTY = a.origPos.top - a.preInterPos.top); for (var d = {}, f = 0; 2 > f; f++) { var m = 0 == f ? m = b.prefix : ""; d[m + "transform"] = "translate(" + a.preTX + "px," + a.preTY + "px)" } c.css(d) }); "list" == b.layoutMode ? (d.addClass(b.listClass), d.removeClass(b.gridClass)) :
                            (d.addClass(b.gridClass), d.removeClass(b.listClass)); setTimeout(function () {
                                if (b.resizeContainer) { for (var a = {}, c = 0; 2 > c; c++) { var d = 0 == c ? d = b.prefix : ""; a[d + "transition"] = "all " + h + "ms ease-in-out"; a.height = b.newHeight + "px" } l.css(a) } t.css("opacity", b.fade); p.css("opacity", 1); p.each(function () {
                                    var a = this.data; a.tX = a.finalPos.left - a.showInterPos.left; a.tY = a.finalPos.top - a.showInterPos.top; for (var c = {}, d = 0; 2 > d; d++) {
                                        var f = 0 == d ? f = b.prefix : ""; c[f + "transition-property"] = f + "transform, " + f + "filter, opacity"; c[f +
                                            "transition-timing-function"] = b.easing + ", linear, linear"; c[f + "transition-duration"] = h + "ms"; c[f + "transition-delay"] = "0"; c[f + "transform"] = "translate(" + a.tX + "px," + a.tY + "px)"; c[f + "filter"] = "none"
                                    } e(this).css("-webkit-transition", "all " + h + "ms " + b.easingFallback).css(c)
                                }); n.each(function () {
                                    var a = this.data; a.tX = 0 != a.finalPrePos.left ? a.finalPrePos.left - a.preInterPos.left : 0; a.tY = 0 != a.finalPrePos.left ? a.finalPrePos.top - a.preInterPos.top : 0; for (var c = {}, d = 0; 2 > d; d++) {
                                        var f = 0 == d ? f = b.prefix : ""; c[f + "transition"] =
                                            "all " + h + "ms " + b.easing; c[f + "transform"] = "translate(" + a.tX + "px," + a.tY + "px)"
                                    } e(this).css("-webkit-transition", "all " + h + "ms " + b.easingFallback).css(c)
                                }); a = {}; for (c = 0; 2 > c; c++)d = 0 == c ? d = b.prefix : "", a[d + "transition"] = "all " + h + "ms " + b.easing + ", " + d + "filter " + h + "ms linear, opacity " + h + "ms linear", a[d + "transform"] = b.scale + " " + b.rotateX + " " + b.rotateY + " " + b.rotateZ, a[d + "filter"] = b.blur + " " + b.grayscale, a.opacity = b.fade; t.css(a); l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (a) {
                                    if (-1 <
                                        a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) -1 < r.indexOf(".") ? e(a.target).hasClass(r.replace(".", "")) && j() : e(a.target).is(r) && j()
                                })
                            }, 10); b.failsafe = setTimeout(function () { b.mixing && j() }, h + 400)
        } else {
            b.resizeContainer && l.css("height", b.origHeight + "px"); if (!window.atob) return j(), !1; t = s; setTimeout(function () {
                l.css(b.perspective); if (b.resizeContainer) {
                    for (var a = {}, c = 0; 2 > c; c++) {
                        var e = 0 == c ? e = b.prefix : ""; a[e + "transition"] = "height " + h + "ms ease-in-out";
                        a.height = b.minHeight + "px"
                    } l.css(a)
                } u.css(b.transition); if (s.length) { a = {}; for (c = 0; 2 > c; c++)e = 0 == c ? e = b.prefix : "", a[e + "transform"] = b.scale + " " + b.rotateX + " " + b.rotateY + " " + b.rotateZ, a[e + "filter"] = b.blur + " " + b.grayscale, a.opacity = b.fade; t.css(a); l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (a) { if (-1 < a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) d.addClass(b.failClass), j() }) } else b.mixing = !1
            }, 10)
        }
    } function v(c, a,
        g, d) {
        function b(a, b) { var d = isNaN(1 * a.attr(c)) ? a.attr(c).toLowerCase() : 1 * a.attr(c), e = isNaN(1 * b.attr(c)) ? b.attr(c).toLowerCase() : 1 * b.attr(c); return d < e ? -1 : d > e ? 1 : 0 } function j(b) { "asc" == a ? f.prepend(b).prepend(" ") : f.append(b).append(" ") } g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>'); var f = g.find(".mix_sorter"); d.origSort.length || f.find(d.targetSelector + ":visible").each(function () { e(this).wrap("<s/>"); d.origSort.push(e(this).parent().html().replace(/\s+/g, "")); e(this).unwrap() }); f.empty();
        if ("reset" == c) e.each(d.startOrder, function () { f.append(this).append(" ") }); else if ("default" == c) e.each(d.origOrder, function () { j(this) }); else if ("random" == c) { if (!d.newOrder.length) { for (var h = d.startOrder.slice(), m = h.length, r = m; r--;) { var k = parseInt(Math.random() * m), l = h[r]; h[r] = h[k]; h[k] = l } d.newOrder = h } e.each(d.newOrder, function () { f.append(this).append(" ") }) } else if ("custom" == c) e.each(a, function () { j(this) }); else {
            if ("undefined" === typeof d.origOrder[0].attr(c)) return console.log("No such attribute found. Terminating"),
                !1; d.newOrder.length || (e.each(d.origOrder, function () { d.newOrder.push(e(this)) }), d.newOrder.sort(b)); e.each(d.newOrder, function () { j(this) })
        } d.checkSort = []; f.find(d.targetSelector + ":visible").each(function (a) { var b = e(this); 0 == a && b.attr("data-checksum", "1"); b.wrap("<s/>"); d.checkSort.push(b.parent().html().replace(/\s+/g, "")); b.unwrap() }); g.find(d.targetSelector).unwrap()
    } var w = {
        init: function (c) {
            return this.each(function () {
                var a = {
                    targetSelector: ".mix", filterSelector: ".filter", sortSelector: ".sort", buttonEvent: "click",
                    effects: ["fade", "scale"], listEffects: null, easing: "smooth", layoutMode: "grid", targetDisplayGrid: "inline-block", targetDisplayList: "block", listClass: "", gridClass: "", transitionSpeed: 600, showOnLoad: "all", sortOnLoad: !1, multiFilter: !1, filterLogic: "or", resizeContainer: !0, minHeight: 0, failClass: "fail", perspectiveDistance: "3000", perspectiveOrigin: "50% 50%", animateGridList: !0, onMixLoad: null, onMixStart: null, onMixEnd: null, container: null, origOrder: [], startOrder: [], newOrder: [], origSort: [], checkSort: [], filter: "", mixing: !1,
                    origDisplay: "", origLayout: "", origHeight: 0, newHeight: 0, isTouch: !1, resetDelay: 0, failsafe: null, prefix: "", easingFallback: "ease-in-out", transition: {}, perspective: {}, clean: {}, fade: "1", scale: "", rotateX: "", rotateY: "", rotateZ: "", blur: "", grayscale: ""
                }; c && e.extend(a, c); this.config = a; e.support.touch = "ontouchend" in document; e.support.touch && (a.isTouch = !0, a.resetDelay = 350); a.container = e(this); var g = a.container, d; a: {
                    d = g[0]; for (var b = ["Webkit", "Moz", "O", "ms"], j = 0; j < b.length; j++)if (b[j] + "Transition" in d.style) {
                        d =
                            b[j]; break a
                    } d = "transition" in d.style ? "" : !1
                } a.prefix = d; a.prefix = a.prefix ? "-" + a.prefix.toLowerCase() + "-" : ""; g.find(a.targetSelector).each(function () { a.origOrder.push(e(this)) }); if (a.sortOnLoad) { var f; e.isArray(a.sortOnLoad) ? (d = a.sortOnLoad[0], f = a.sortOnLoad[1], e(a.sortSelector + "[data-sort=" + a.sortOnLoad[0] + "][data-order=" + a.sortOnLoad[1] + "]").addClass("active")) : (e(a.sortSelector + "[data-sort=" + a.sortOnLoad + "]").addClass("active"), d = a.sortOnLoad, a.sortOnLoad = "desc"); v(d, f, g, a) } for (f = 0; 2 > f; f++)d = 0 ==
                    f ? d = a.prefix : "", a.transition[d + "transition"] = "all " + a.transitionSpeed + "ms ease-in-out", a.perspective[d + "perspective"] = a.perspectiveDistance + "px", a.perspective[d + "perspective-origin"] = a.perspectiveOrigin; for (f = 0; 2 > f; f++)d = 0 == f ? d = a.prefix : "", a.clean[d + "transition"] = "none"; "list" == a.layoutMode ? (g.addClass(a.listClass), a.origDisplay = a.targetDisplayList) : (g.addClass(a.gridClass), a.origDisplay = a.targetDisplayGrid); a.origLayout = a.layoutMode; f = a.showOnLoad.split(" "); e.each(f, function () {
                        e(a.filterSelector +
                            '[data-filter="' + this + '"]').addClass("active")
                    }); g.find(a.targetSelector).addClass("mix_all"); "all" == f[0] && (f[0] = "mix_all", a.showOnLoad = "mix_all"); var h = e(); e.each(f, function () { h = h.add(e("." + this)) }); h.each(function () { var b = e(this); "list" == a.layoutMode ? b.css("display", a.targetDisplayList) : b.css("display", a.targetDisplayGrid); b.css(a.transition) }); setTimeout(function () {
                        a.mixing = !0; h.css("opacity", "1"); setTimeout(function () {
                            "list" == a.layoutMode ? h.removeStyle(a.prefix + "transition, transition").css({
                                display: a.targetDisplayList,
                                opacity: 1
                            }) : h.removeStyle(a.prefix + "transition, transition").css({ display: a.targetDisplayGrid, opacity: 1 }); a.mixing = !1; if ("function" == typeof a.onMixLoad) { var b = a.onMixLoad.call(this, a); a = b ? b : a }
                        }, a.transitionSpeed)
                    }, 10); a.filter = a.showOnLoad; e(a.sortSelector).bind(a.buttonEvent, function () {
                        if (!a.mixing) {
                            var b = e(this), c = b.attr("data-sort"), d = b.attr("data-order"); if (b.hasClass("active")) { if ("random" != c) return !1 } else e(a.sortSelector).removeClass("active"), b.addClass("active"); g.find(a.targetSelector).each(function () { a.startOrder.push(e(this)) });
                            k(a.filter, c, d, g, a)
                        }
                    }); e(a.filterSelector).bind(a.buttonEvent, function () {
                        if (!a.mixing) {
                            var b = e(this); if (!1 == a.multiFilter) e(a.filterSelector).removeClass("active"), b.addClass("active"), a.filter = b.attr("data-filter"), e(a.filterSelector + '[data-filter="' + a.filter + '"]').addClass("active"), "all" == a.filter && (a.filter = "mix_all"); else {
                                var c = b.attr("data-filter"); "all" == c && (c = "mix_all"); b.hasClass("active") ? (b.removeClass("active"), a.filter = a.filter.replace(RegExp("(\\s|^)" + c), "")) : (b.addClass("active"), a.filter =
                                    a.filter + " " + c)
                            } k(a.filter, null, null, g, a)
                        }
                    })
            })
        }, toGrid: function () { return this.each(function () { var c = this.config; "grid" != c.layoutMode && (c.layoutMode = "grid", k(c.filter, null, null, e(this), c)) }) }, toList: function () { return this.each(function () { var c = this.config; "list" != c.layoutMode && (c.layoutMode = "list", k(c.filter, null, null, e(this), c)) }) }, filter: function (c) {
            return this.each(function () {
                var a = this.config; a.mixing || (e(a.filterSelector).removeClass("active"), e(a.filterSelector + '[data-filter="' + c + '"]').addClass("active"),
                    "all" == c && (c = "mix_all"), a.filter = c, k(c, null, null, e(this), a))
            })
        }, sort: function (c) { return this.each(function () { var a = this.config, g = e(this); if (!a.mixing) { e(a.sortSelector).removeClass("active"); if (e.isArray(c)) { var d = c[0], b = c[1]; e(a.sortSelector + '[data-sort="' + c[0] + '"][data-order="' + c[1] + '"]').addClass("active") } else e(a.sortSelector + '[data-sort="' + c + '"]').addClass("active"), d = c, b = "desc"; g.find(a.targetSelector).each(function () { a.startOrder.push(e(this)) }); k(a.filter, d, b, g, a) } }) }, multimix: function (c) {
            return this.each(function () {
                var a =
                    this.config, g = e(this); multiOut = { filter: a.filter, sort: null, order: "desc", layoutMode: a.layoutMode }; e.extend(multiOut, c); a.mixing || (e(a.filterSelector).add(a.sortSelector).removeClass("active"), e(a.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "all" == multiOut.filter && (multiOur.filter = "mix_all"), "undefined" !== typeof multiOut.sort && (e(a.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), g.find(a.targetSelector).each(function () { a.startOrder.push(e(this)) })),
                        a.layoutMode = multiOut.layoutMode, k(multiOut.filter, multiOut.sort, multiOut.order, g, a))
            })
        }, remix: function (c) { return this.each(function () { var a = this.config, g = e(this); a.origOrder = []; g.find(a.targetSelector).each(function () { var c = e(this); c.addClass("mix_all"); a.origOrder.push(c) }); !a.mixing && "undefined" !== typeof c && (e(a.filterSelector).removeClass("active"), e(a.filterSelector + '[data-filter="' + c + '"]').addClass("active"), "all" == c && (c = "mix_all"), a.filter = c, k(c, null, null, g, a)) }) }
    }; e.fn.mixitup = function (c,
        a) { if (w[c]) return w[c].apply(this, Array.prototype.slice.call(arguments, 1)); if ("object" === typeof c || !c) return w.init.apply(this, arguments) }; e.fn.removeStyle = function (c) { return this.each(function () { var a = e(this); c = c.replace(/\s+/g, ""); var g = c.split(","); e.each(g, function () { var c = RegExp(this.toString() + "[^;]+;?", "g"); a.attr("style", function (a, e) { if (e) return e.replace(c, "") }) }) }) }; Array.prototype.compare = function (c) {
            if (this.length != c.length) return !1; for (var a = 0; a < c.length; a++)if (this[a].compare && !this[a].compare(c[a]) ||
                this[a] !== c[a]) return !1; return !0
        }
})(jQuery);
