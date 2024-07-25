! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ec5ba7f-abe4-4627-83ac-e88c2d7fa26d", e._sentryDebugIdIdentifier = "sentry-dbid-7ec5ba7f-abe4-4627-83ac-e88c2d7fa26d")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2962], {
        2962: function(e, t, r) {
            r.d(t, {
                PB: function() {
                    return m
                },
                Qb: function() {
                    return I
                },
                gR: function() {
                    return R
                },
                ns: function() {
                    return L
                }
            });
            var n = r(67294),
                a = r(9008),
                o = r.n(a);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function p(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }
            var l = ["keyOverride"],
                c = ["crossOrigin"],
                u = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    norobots: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                s = function(e, t, r) {
                    void 0 === t && (t = []);
                    var a = void 0 === r ? {} : r,
                        o = a.defaultWidth,
                        i = a.defaultHeight;
                    return t.reduce(function(t, r, a) {
                        return t.push(n.createElement("meta", {
                            key: "og:" + e + ":0" + a,
                            property: "og:" + e,
                            content: r.url
                        })), r.alt && t.push(n.createElement("meta", {
                            key: "og:" + e + ":alt0" + a,
                            property: "og:" + e + ":alt",
                            content: r.alt
                        })), r.secureUrl && t.push(n.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + a,
                            property: "og:" + e + ":secure_url",
                            content: r.secureUrl.toString()
                        })), r.type && t.push(n.createElement("meta", {
                            key: "og:" + e + ":type0" + a,
                            property: "og:" + e + ":type",
                            content: r.type.toString()
                        })), r.width ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + a,
                            property: "og:" + e + ":width",
                            content: r.width.toString()
                        })) : o && t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + a,
                            property: "og:" + e + ":width",
                            content: o.toString()
                        })), r.height ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + a,
                            property: "og:" + e + ":height",
                            content: r.height.toString()
                        })) : i && t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + a,
                            property: "og:" + e + ":height",
                            content: i.toString()
                        })), t
                    }, [])
                },
                d = function(e) {
                    var t, r, a, o, d, h = [];
                    e.titleTemplate && (u.templateTitle = e.titleTemplate);
                    var m = "";
                    e.title ? (m = e.title, u.templateTitle && (m = u.templateTitle.replace(/%s/g, function() {
                        return m
                    }))) : e.defaultTitle && (m = e.defaultTitle), m && h.push(n.createElement("title", {
                        key: "title"
                    }, m));
                    var f = void 0 === e.noindex ? u.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                        g = void 0 === e.nofollow ? u.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                        y = e.norobots || u.norobots,
                        v = "";
                    if (e.robotsProps) {
                        var k = e.robotsProps,
                            G = k.nosnippet,
                            b = k.maxSnippet,
                            E = k.maxImagePreview,
                            w = k.maxVideoPreview,
                            O = k.noarchive,
                            A = k.noimageindex,
                            T = k.notranslate,
                            _ = k.unavailableAfter;
                        v = (G ? ",nosnippet" : "") + (b ? ",max-snippet:" + b : "") + (E ? ",max-image-preview:" + E : "") + (O ? ",noarchive" : "") + (_ ? ",unavailable_after:" + _ : "") + (A ? ",noimageindex" : "") + (w ? ",max-video-preview:" + w : "") + (T ? ",notranslate" : "")
                    }
                    if (e.norobots && (u.norobots = !0), f || g ? (e.dangerouslySetAllPagesToNoIndex && (u.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (u.nofollow = !0), h.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (f ? "noindex" : "index") + "," + (g ? "nofollow" : "follow") + v
                        }))) : (!y || v) && h.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + v
                        })), e.description && h.push(n.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: e.description
                        })), e.themeColor && h.push(n.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: e.themeColor
                        })), e.mobileAlternate && h.push(n.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                            h.push(n.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }), e.twitter && (e.twitter.cardType && h.push(n.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: e.twitter.cardType
                        })), e.twitter.site && h.push(n.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: e.twitter.site
                        })), e.twitter.handle && h.push(n.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: e.twitter.handle
                        }))), e.facebook && e.facebook.appId && h.push(n.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: e.facebook.appId
                        })), (null != (t = e.openGraph) && t.title || m) && h.push(n.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (o = e.openGraph) ? void 0 : o.title) || m
                        })), (null != (r = e.openGraph) && r.description || e.description) && h.push(n.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (d = e.openGraph) ? void 0 : d.description) || e.description
                        })), e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && h.push(n.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var x = e.openGraph.type.toLowerCase();
                            h.push(n.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: x
                            })), "profile" === x && e.openGraph.profile ? (e.openGraph.profile.firstName && h.push(n.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && h.push(n.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && h.push(n.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && h.push(n.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === x && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && h.push(n.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && h.push(n.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === x && e.openGraph.article ? (e.openGraph.article.publishedTime && h.push(n.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && h.push(n.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && h.push(n.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && h.push(n.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === x || "video.episode" === x || "video.tv_show" === x || "video.other" === x) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                                e.profile && h.push(n.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && h.push(n.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && h.push(n.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && h.push(n.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                                h.push(n.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && h.push(n.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (u.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (u.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && h.push.apply(h, s("image", e.openGraph.images, {
                            defaultWidth: u.defaultOpenGraphImageWidth,
                            defaultHeight: u.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (u.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (u.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && h.push.apply(h, s("video", e.openGraph.videos, {
                            defaultWidth: u.defaultOpenGraphVideoWidth,
                            defaultHeight: u.defaultOpenGraphVideoHeight
                        })), e.openGraph.audio && h.push.apply(h, s("audio", e.openGraph.audio)), e.openGraph.locale && h.push(n.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), (e.openGraph.siteName || e.openGraph.site_name) && h.push(n.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.siteName || e.openGraph.site_name
                        }))
                    }
                    return e.canonical && h.push(n.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                        var t, r, a = e.keyOverride,
                            o = p(e, l);
                        h.push(n.createElement("meta", i({
                            key: "meta:" + (null != (t = null != (r = null != a ? a : o.name) ? r : o.property) ? t : o.httpEquiv)
                        }, o)))
                    }), null != (a = e.additionalLinkTags) && a.length && e.additionalLinkTags.forEach(function(e) {
                        var t, r = e.crossOrigin,
                            a = p(e, c);
                        h.push(n.createElement("link", i({
                            key: "link" + (null != (t = a.keyOverride) ? t : a.href) + a.rel
                        }, a, {
                            crossOrigin: "anonymous" === r || "use-credentials" === r || "" === r ? r : void 0
                        })))
                    }), h
                },
                h = function(e) {
                    return n.createElement(o(), null, d(e))
                },
                m = function(e) {
                    var t = e.title,
                        r = e.themeColor,
                        a = e.noindex,
                        o = e.nofollow,
                        i = e.robotsProps,
                        p = e.description,
                        l = e.canonical,
                        c = e.openGraph,
                        u = e.facebook,
                        s = e.twitter,
                        d = e.additionalMetaTags,
                        m = e.titleTemplate,
                        f = e.defaultTitle,
                        g = e.mobileAlternate,
                        y = e.languageAlternates,
                        v = e.additionalLinkTags;
                    return n.createElement(n.Fragment, null, n.createElement(h, {
                        title: t,
                        themeColor: r,
                        noindex: a,
                        nofollow: o,
                        robotsProps: i,
                        description: p,
                        canonical: l,
                        facebook: u,
                        openGraph: c,
                        additionalMetaTags: d,
                        twitter: s,
                        titleTemplate: m,
                        defaultTitle: f,
                        mobileAlternate: g,
                        languageAlternates: y,
                        additionalLinkTags: v
                    }))
                },
                f = function(e, t) {
                    var r = t;
                    return Array.isArray(r) && 1 === r.length && (r = i({}, t[0])), {
                        __html: JSON.stringify(Array.isArray(r) ? r.map(function(t) {
                            return g(e, t)
                        }) : g(e, r), G)
                    }
                },
                g = function(e, t) {
                    var r = t.id,
                        n = i({}, (void 0 === r ? void 0 : r) ? {
                            "@id": t.id
                        } : {}, t);
                    return delete n.id, i({
                        "@context": "https://schema.org",
                        "@type": e
                    }, n)
                },
                y = Object.freeze({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;"
                }),
                v = RegExp("[" + Object.keys(y).join("") + "]", "g"),
                k = function(e) {
                    return y[e]
                },
                G = function(e, t) {
                    switch (typeof t) {
                        case "object":
                            if (null === t) return;
                            return t;
                        case "number":
                        case "boolean":
                        case "bigint":
                            return t;
                        case "string":
                            return t.replace(v, k);
                        default:
                            return
                    }
                },
                b = ["type", "keyOverride", "scriptKey", "scriptId", "dataArray", "useAppDir"];

            function E(e) {
                var t = e.type,
                    r = void 0 === t ? "Thing" : t,
                    a = e.keyOverride,
                    l = e.scriptKey,
                    c = e.scriptId,
                    u = void 0 === c ? void 0 : c,
                    s = e.dataArray,
                    d = e.useAppDir,
                    h = p(e, b),
                    m = function() {
                        return n.createElement("script", {
                            type: "application/ld+json",
                            id: u,
                            "data-testid": u,
                            dangerouslySetInnerHTML: f(r, void 0 === s ? i({}, h) : s),
                            key: "jsonld-" + l + (a ? "-" + a : "")
                        })
                    };
                return void 0 !== d && d ? n.createElement(m, null) : n.createElement(o(), null, m())
            }

            function w(e) {
                if ("string" == typeof e) return {
                    "@type": "Person",
                    name: e
                };
                if (e.name) {
                    var t;
                    return {
                        "@type": null != (t = null == e ? void 0 : e.type) ? t : "Person",
                        name: e.name,
                        url: null == e ? void 0 : e.url
                    }
                }
            }

            function O(e) {
                if (e) return {
                    "@type": "ImageObject",
                    url: e
                }
            }
            var A = ["reviewRating", "author", "publisher"];

            function T(e) {
                return "string" == typeof e ? e : i({
                    "@type": "PostalAddress"
                }, e)
            }
            var _ = ["seller"];

            function x(e) {
                function t(e) {
                    var t = e.seller,
                        r = p(e, _);
                    return i({}, r, {
                        "@type": "Offer"
                    }, t && {
                        seller: {
                            "@type": "Organization",
                            name: t.name
                        }
                    })
                }
                return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
            }
            var P = ["type", "keyOverride", "images", "brand", "reviews", "aggregateRating", "manufacturerLogo", "manufacturerName", "offers", "aggregateOffer", "productName"];

            function I(e) {
                var t = e.type,
                    r = e.keyOverride,
                    a = e.images,
                    o = e.brand,
                    l = e.reviews,
                    c = e.aggregateRating,
                    u = e.manufacturerLogo,
                    s = e.manufacturerName,
                    d = e.offers,
                    h = e.aggregateOffer,
                    m = e.productName,
                    f = p(e, P),
                    g = i({}, f, {
                        image: a,
                        brand: function(e) {
                            if (e) return {
                                "@type": "Brand",
                                name: e
                            }
                        }(o),
                        review: function(e) {
                            function t(e) {
                                var t = e.reviewRating,
                                    r = e.author,
                                    n = e.publisher,
                                    a = p(e, A);
                                return i({}, a, {
                                    "@type": "Review"
                                }, r && {
                                    author: Array.isArray(r) ? r.map(function(e) {
                                        return w(e)
                                    }).filter(function(e) {
                                        return !!e
                                    }) : r ? w(r) : void 0
                                }, t && {
                                    reviewRating: function(e) {
                                        if (e) return i({}, e, {
                                            "@type": "Rating"
                                        })
                                    }(t)
                                }, n && {
                                    publisher: function(e, t) {
                                        if (e) return {
                                            "@type": "Organization",
                                            name: e,
                                            logo: O(void 0)
                                        }
                                    }(n.name)
                                })
                            }
                            return Array.isArray(e) ? e.map(t) : e ? t(e) : void 0
                        }(l),
                        aggregateRating: function(e) {
                            if (e) return {
                                "@type": "AggregateRating",
                                ratingCount: e.ratingCount,
                                reviewCount: e.reviewCount,
                                bestRating: e.bestRating,
                                ratingValue: e.ratingValue,
                                worstRating: e.worstRating
                            }
                        }(c),
                        manufacturer: function(e) {
                            if (e && (e.manufacturerName || e.manufacturerLogo)) return {
                                "@type": "Organization",
                                name: e.manufacturerName,
                                logo: O(e.manufacturerLogo)
                            }
                        }({
                            manufacturerLogo: u,
                            manufacturerName: s
                        }),
                        offers: d ? x(d) : function(e) {
                            if (e) return {
                                "@type": "AggregateOffer",
                                priceCurrency: e.priceCurrency,
                                highPrice: e.highPrice,
                                lowPrice: e.lowPrice,
                                offerCount: e.offerCount,
                                offers: x(e.offers)
                            }
                        }(h),
                        name: m
                    });
                return n.createElement(E, i({
                    type: void 0 === t ? "Product" : t,
                    keyOverride: r
                }, g, {
                    scriptKey: "Product"
                }))
            }
            var N = ["type", "keyOverride", "address", "contactPoints", "contactPoint"];

            function L(e) {
                var t = e.type,
                    r = e.keyOverride,
                    a = e.address,
                    o = e.contactPoints,
                    l = e.contactPoint,
                    c = p(e, N),
                    u = i({}, c, {
                        address: function(e) {
                            if (e) return Array.isArray(e) ? 1 === e.length ? T(e[0]) : e.map(T) : T(e)
                        }(a),
                        contactPoint: function(e) {
                            if (e && e.length) return e.map(function(e) {
                                return i({
                                    "@type": "ContactPoint"
                                }, e)
                            })
                        }(l || o)
                    });
                return n.createElement(E, i({
                    type: void 0 === t ? "Organization" : t,
                    keyOverride: r
                }, u, {
                    scriptKey: "organization"
                }))
            }
            var C = ["type", "keyOverride", "itemListElements"];

            function R(e) {
                var t = e.type,
                    r = e.keyOverride,
                    a = e.itemListElements,
                    o = p(e, C),
                    l = i({}, o, {
                        itemListElement: function(e) {
                            if (e && e.length) return e.map(function(e) {
                                return {
                                    "@type": "ListItem",
                                    position: e.position,
                                    item: e.item,
                                    name: e.name
                                }
                            })
                        }(a)
                    });
                return n.createElement(E, i({
                    type: void 0 === t ? "BreadcrumbList" : t,
                    keyOverride: r
                }, l, {
                    scriptKey: "breadcrumb"
                }))
            }
        }
    }
]);