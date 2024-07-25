! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            l = Error().stack;
        l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "91c614d8-b4c1-42d6-8430-ee1381cf431e", e._sentryDebugIdIdentifier = "sentry-dbid-91c614d8-b4c1-42d6-8430-ee1381cf431e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3668], {
        33485: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return ew
                }
            });
            var i = t(85893),
                a = t(11163),
                d = t(67294),
                s = t(6490),
                r = t(23958),
                n = t(25675),
                o = t.n(n),
                c = {
                    src: "/_next/static/media/aarti_article_image.0d882263.webp",
                    height: 384,
                    width: 536,
                    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSBUAAAABF/D+/4iIgiDbZjv55O8Q0f9cnAEAVlA4IDwAAAAwAgCdASoIAAYAAkA4JbACdLoB+AADUo9pwAD+669W/gebdnlVAGlCtLv/qcfk4/Mr/V2/+WffH8ndQAA=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                x = {
                    src: "/_next/static/media/ayurvedic_article_image.0a07e763.webp",
                    height: 384,
                    width: 536,
                    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSBUAAAABF/D+/4iIgiDbZjv55O8Q0f9cnAEAVlA4ID4AAADwAQCdASoIAAYAAkA4JbACdAEWULcmpPAA/fvCV+OEZCUawxFiw2LQzLH/yq2h3/IAv8v4wBRrJqO3loAAAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                m = {
                    src: "/_next/static/media/chaalisa_article_image.940dd0a3.webp",
                    height: 384,
                    width: 536,
                    blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSBUAAAABF/D+/4iIgiDbZjv55O8Q0f9cnAEAVlA4IEoAAAAQAgCdASoIAAYAAkA4JbACdLoAAzfGyvZEAOJnoFx6w9Cl+XDJxPavAOQce7i9kqbUwb/5E0SoDmfbiH8Ef8DDzdvdI6h9XvWwAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                p = {
                    src: "/_next/static/media/mantra_article_image.c0b022ae.webp",
                    height: 384,
                    width: 536,
                    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSBUAAAABF/D+/4iIgiDbZjv55O8Q0f9cnAEAVlA4IEQAAADwAQCdASoIAAYAAkA4JagCdLoAAmtcuAAA/vNQ5Qao6Qnndmg2AiwpjPnhdJsbE2u0p7/ziZW/YH5b9q/8bss4bpAAAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                h = e => {
                    var l, t, a, d, s, n, h, g, u, A, v, f, b, w, j;
                    let {
                        acceptLanguage: _
                    } = e;
                    return (0, i.jsx)("aside", {
                        "aria-label": "Related articles",
                        className: "bg-white dark:bg-gray-900 py-8 lg:pt-12 lg:pb-16",
                        children: (0, i.jsxs)("div", {
                            className: "px-4 md:px-0 mx-auto max-w-screen-xl",
                            children: [(0, i.jsxs)("div", {
                                className: "mx-auto text-left md:text-center  mb-8 lg:mb-16",
                                children: [(0, i.jsx)("h2", {
                                    className: "mb-4 text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] ",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.articles_title) || void 0 === l ? void 0 : l[_]
                                }), (0, i.jsx)("p", {
                                    className: "text-gray-90 sm:text-xl dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.articles_sub_title) || void 0 === t ? void 0 : t[_]
                                }), (0, i.jsxs)("a", {
                                    className: "inline-flex items-center  font-semibold text-orange-500 dark:text-orange-500 hover:underline",
                                    href: "/articles",
                                    children: [null === r.Z || void 0 === r.Z ? void 0 : null === (a = r.Z.read_all) || void 0 === a ? void 0 : a[_], " ", (0, i.jsx)("svg", {
                                        className: "w-4 h-4 ml-1 text-orange-500 dark:text-orange-500",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "grid gap-6 lg:gap-12 md:grid-cols-4 ",
                                children: [(0, i.jsxs)("article", {
                                    className: "flex flex-col xl:flex-col grow",
                                    children: [(0, i.jsxs)("div", {
                                        className: "shrink-0 h-[192px] w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "hidden md-block",
                                            children: (0, i.jsx)(o(), {
                                                width: 268,
                                                height: 192,
                                                src: c,
                                                alt: "Aarti"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "flex md-hidden w-full h-full relative",
                                            children: (0, i.jsx)(o(), {
                                                fill: !0,
                                                src: c,
                                                alt: "Aarti"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col h-full justify-between pt-7 md:pl-0",
                                        children: [(0, i.jsx)("div", {
                                            className: "mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white",
                                            children: (0, i.jsx)("h4", {
                                                className: "mb-2 text-[16px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (d = r.Z.articles_aarti_title) || void 0 === d ? void 0 : d[_]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (s = r.Z.articles_aarti_sub_title) || void 0 === s ? void 0 : s[_]
                                            })
                                        }), (0, i.jsx)("a", {
                                            href: "https://www.srimandir.com/articles/aarti",
                                            className: "inline-flex items-center decoration-orange-500 underline underline-offset-4  dark:text-orange-500 hover:no-underline",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px] text-orange-500",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (n = r.Z.read_all) || void 0 === n ? void 0 : n[_]
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("article", {
                                    className: "flex flex-col xl:flex-col grow",
                                    children: [(0, i.jsxs)("div", {
                                        className: "shrink-0 h-[192px] w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "hidden md-block",
                                            children: (0, i.jsx)(o(), {
                                                width: 268,
                                                height: 192,
                                                src: m,
                                                alt: "Chalisa"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "flex md-hidden w-full h-full relative",
                                            children: (0, i.jsx)(o(), {
                                                fill: !0,
                                                src: m,
                                                alt: "Chalisa"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col h-full justify-between pt-7 md:pl-0",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("h4", {
                                                className: "mb-2 text-[16px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (h = r.Z.articles_chalisa_title) || void 0 === h ? void 0 : h[_]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (g = r.Z.articles_chalisa_sub_title) || void 0 === g ? void 0 : g[_]
                                            })
                                        }), (0, i.jsx)("a", {
                                            href: "https://www.srimandir.com/articles/chalisa",
                                            className: "inline-flex items-center decoration-orange-500 underline underline-offset-4  dark:text-orange-500 hover:no-underline",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px] text-orange-500",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (u = r.Z.read_all) || void 0 === u ? void 0 : u[_]
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("article", {
                                    className: "flex flex-col xl:flex-col grow",
                                    children: [(0, i.jsxs)("div", {
                                        className: "shrink-0 h-[192px] w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "hidden md-block",
                                            children: (0, i.jsx)(o(), {
                                                width: 268,
                                                height: 192,
                                                src: p,
                                                alt: "Mantra"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "flex md-hidden w-full h-full relative",
                                            children: (0, i.jsx)(o(), {
                                                fill: !0,
                                                src: p,
                                                alt: "Mantra"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col h-full justify-between pt-7 md:pl-0",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("h4", {
                                                className: "mb-2 text-[16px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (A = r.Z.articles_mantra_title) || void 0 === A ? void 0 : A[_]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (v = r.Z.articles_mantra_sub_title) || void 0 === v ? void 0 : v[_]
                                            })
                                        }), (0, i.jsx)("a", {
                                            href: "https://www.srimandir.com/articles/mantra-aarth-or-unke-labh",
                                            className: "inline-flex items-center decoration-orange-500 underline underline-offset-4  dark:text-orange-500 hover:no-underline",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px] text-orange-500",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (f = r.Z.read_all) || void 0 === f ? void 0 : f[_]
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("article", {
                                    className: "flex flex-col xl:flex-col grow",
                                    children: [(0, i.jsxs)("div", {
                                        className: "shrink-0 h-[192px] w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "hidden md-block",
                                            children: (0, i.jsx)(o(), {
                                                width: 268,
                                                height: 192,
                                                src: x,
                                                alt: "Ayurvedic & Home Remedies"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "flex md-hidden w-full h-full relative",
                                            children: (0, i.jsx)(o(), {
                                                fill: !0,
                                                src: x,
                                                alt: "Ayurvedic & Home Remedies"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col h-full justify-between pt-7 md:pl-0 ",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("h4", {
                                                className: "mb-2 text-[16px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (b = r.Z.articles_ayurvedic_title) || void 0 === b ? void 0 : b[_]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (w = r.Z.articles_ayurvedic_sub_title) || void 0 === w ? void 0 : w[_]
                                            })
                                        }), (0, i.jsx)("a", {
                                            href: "https://www.srimandir.com/articles/aayurvedik-upchar-or-gharelu-nuskhe",
                                            className: "inline-flex items-center decoration-orange-500 underline underline-offset-4  dark:text-orange-500 hover:no-underline",
                                            children: (0, i.jsx)("p", {
                                                className: "text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px] text-orange-500",
                                                children: null === r.Z || void 0 === r.Z ? void 0 : null === (j = r.Z.read_all) || void 0 === j ? void 0 : j[_]
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                g = {
                    src: "/_next/static/media/img_link_01.1dea7667.png",
                    height: 200,
                    width: 400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX8/Py7u7v19fXv7+/ExMTJycnOzs46JZhNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nCXJwQ0AMAwCMQ5I9h+5UuOvZX1WBspGKR2IruwHBAAAOYgqA+QAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                u = {
                    src: "/_next/static/media/img_link_02.bddcfd94.png",
                    height: 200,
                    width: 400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEXe3t7y8vK9vb3Dw8Pl5eXZ2dmvr6/ExMTRbzd0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nB3BiQ0AMAgDscsD7L9xpdqITzReb0QdnyM0wFQPBFcARgc11UAAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                A = {
                    src: "/_next/static/media/img_link_03.d53d3f19.png",
                    height: 200,
                    width: 400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEX19fXa2trCwsLh4eHs7OzJycnk5OS8vLzHx8dN/J7LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggAFGdg4mViYmNgYWZmZGRkZmFrgMAAQeADYBkb4yAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                v = {
                    src: "/_next/static/media/img_link_04.3e3537d0.png",
                    height: 200,
                    width: 400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX7+/vZ2dnKysr19fXn5+e7u7uUlJSnp6fu7u7p6emxsbG4yCpiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nB3JyREAIAwDsY2di/4bZkBfYT6zEYqZQ5ZK3ckrY18F4QBZzKsI+QAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                f = e => {
                    var l;
                    let {
                        acceptLanguage: t
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-WHITE-20 dark:bg-gray-900 w-full",
                        children: (0, i.jsxs)("div", {
                            className: "py-8 lg:py-16 mx-auto max-w-screen-xl px-4 md:px-0",
                            children: [(0, i.jsx)("div", {
                                className: "mb-8 flex justify-center",
                                children: (0, i.jsx)("h2", {
                                    className: "mb-4 text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.featured_in) || void 0 === l ? void 0 : l[t]
                                })
                            }), (0, i.jsxs)("div", {
                                className: " grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400",
                                children: [(0, i.jsx)("a", {
                                    href: "https://www.mid-day.com/brand-media/article/bonding-over-devotion-spirituality-with-sri-mandir-23277062",
                                    className: "flex justify-center items-center",
                                    target: "blank",
                                    "aria-label": "read more about srimandir on mid-day",
                                    rel: "nofollow",
                                    children: (0, i.jsx)(o(), {
                                        src: g,
                                        alt: "srimandir featured in mid-day",
                                        title: "srimandir featured in mid-day"
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://yourstory.com/2022/06/sequoia-devotional-startup-appsforbharat-spiritual-needs-india",
                                    className: "flex justify-center items-center",
                                    target: "blank",
                                    "aria-label": "read more about srimandir on your story",
                                    rel: "nofollow",
                                    children: (0, i.jsx)(o(), {
                                        src: u,
                                        alt: "srimandir featured in yourstory",
                                        title: "srimandir featured in yourstory"
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://www.businessworld.in/article/Sri-Mandir-Devotion-In-The-Age-Of-Smartphones/07-02-2023-464762/",
                                    className: "flex justify-center items-center",
                                    target: "blank",
                                    "aria-label": "read more about srimandir on business world",
                                    rel: "nofollow",
                                    children: (0, i.jsx)(o(), {
                                        src: A,
                                        alt: "srimandir featured in businessworld",
                                        title: "srimandir featured in businessworld"
                                    })
                                }), (0, i.jsx)("a", {
                                    href: "https://news.abplive.com/brand-wire/sri-mandir-an-app-for-india-s-devotional-needs-1586839",
                                    className: "flex justify-center items-center",
                                    target: "blank",
                                    "aria-label": "read more about srimandir on abplive",
                                    rel: "nofollow",
                                    children: (0, i.jsx)(o(), {
                                        src: v,
                                        alt: "srimandir featured in abplive",
                                        title: "srimandir featured in abplive"
                                    })
                                })]
                            })]
                        })
                    })
                },
                b = {
                    src: "/_next/static/media/ic_feature_01.38a91c16.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                w = {
                    src: "/_next/static/media/ic_feature_02.72c4e291.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                j = {
                    src: "/_next/static/media/ic_feature_03.0e2a0288.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                _ = {
                    src: "/_next/static/media/ic_feature_04.760720d9.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                N = {
                    src: "/_next/static/media/ic_feature_05.609e5be6.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                Z = {
                    src: "/_next/static/media/ic_feature_06.0596b28a.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                y = e => {
                    var l, t, a, d, s, n, c, x, m, p, h, g, u, A;
                    let {
                        acceptLanguage: v
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-white dark:bg-gray-900 sm:mb-4",
                        children: (0, i.jsxs)("div", {
                            className: "px-4 md:px-0 mx-auto max-w-screen-xl py-8  md:py-12 ",
                            children: [(0, i.jsxs)("div", {
                                className: "w-full mb-8 lg:mb-12 flex flex-col justify-center items-center",
                                children: [(0, i.jsx)("h2", {
                                    className: "mb-4 text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.features_title) || void 0 === l ? void 0 : l[v]
                                }), (0, i.jsx)("p", {
                                    className: "text-gray-90 sm:text-xl dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.features_sub_title) || void 0 === t ? void 0 : t[v]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0",
                                children: [(0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: b,
                                            alt: "Divine Temple",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (a = r.Z.features_block_1_title) || void 0 === a ? void 0 : a[v]
                                    }), (0, i.jsx)("div", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (d = r.Z.features_block_1_sub_title) || void 0 === d ? void 0 : d[v]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: w,
                                            alt: "Hindu Literature",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (s = r.Z.features_block_2_title) || void 0 === s ? void 0 : s[v]
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (n = r.Z.features_block_2_sub_title) || void 0 === n ? void 0 : n[v]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: j,
                                            alt: "Devotional Music",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (c = r.Z.features_block_3_title) || void 0 === c ? void 0 : c[v]
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (x = r.Z.features_block_3_sub_title) || void 0 === x ? void 0 : x[v]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: _,
                                            alt: "Panchang, Horoscope & Festivals",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (m = r.Z.features_block_4_title) || void 0 === m ? void 0 : m[v]
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (p = r.Z.features_block_4_sub_title) || void 0 === p ? void 0 : p[v]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: N,
                                            alt: "Puja and Chadhava Seva",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (h = r.Z.features_block_5_title) || void 0 === h ? void 0 : h[v]
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (g = r.Z.features_block_5_sub_title) || void 0 === g ? void 0 : g[v]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14  bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: Z,
                                            alt: "Sanatani Community",
                                            width: 56,
                                            height: 56,
                                            className: "rounded-lg"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-[20px] font-bold leading-[24.52px] md:text-[20px] md:font-bold md:leading-[27.24px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (u = r.Z.features_block_6_title) || void 0 === u ? void 0 : u[v]
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-90 dark:text-gray-400 text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (A = r.Z.features_block_6_sub_title) || void 0 === A ? void 0 : A[v]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                k = {
                    src: "/_next/static/media/img_hero_artwork_hi.e0dd8df4.webp",
                    height: 744,
                    width: 882,
                    blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDYAAAABYBvZthI00ojUoS93j5wXQ2bF/XKwX0RETAArOwhlthTf2KHEtR2uuHC7D7BuAAHBaZZi8gRWUDggZAAAANABAJ0BKggABwACQDglkAJ0APRPD5OAAPwCfeTzehh+qaDUn446nd7nuKMxs/tJh9jmKKFWO0ti2JGZUPHPWAtlVfOhi1p+hR10UU2byRv/ByZ/Iz+5A9tScLR8W3/ycmIAAAA=",
                    blurWidth: 8,
                    blurHeight: 7
                },
                E = {
                    src: "/_next/static/media/img_hero_artwork_en.ecfc0911.webp",
                    height: 744,
                    width: 882,
                    blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDUAAAABYBvZthI00ojUoS93j5xXA1LcLwd7RUTEBPCqR0jhKumNTjXWD1h1YXsIsO8AESUYjmaLFABWUDggZAAAANABAJ0BKggABwACQDglkAJ0APPbZVwAAPwCfeT1rrCfqmg1J+PR59Ed+TC2oihqI3v0Ha+C9oN+2Gi+wSChumqNjAbh87vor2eW8DdmzfKZ/8HJn8jP7kD21Jwjwj/ycmIAAAA=",
                    blurWidth: 8,
                    blurHeight: 7
                },
                L = t(73160),
                C = t(68975),
                R = {
                    src: "/_next/static/media/img_achievement.6722fe43.webp",
                    height: 256,
                    width: 256,
                    blurDataURL: "data:image/webp;base64,UklGRswAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAKI8ex1AAAAZf////9NAACl/////5QAAH7/////cwAADcv//8gLAAAApP//pQAAAANuwNz2FAAAAAAPbScZAABWUDggZAAAABACAJ0BKggACAACQDglmAJ0ARY9r/ykIAAA/th47aKzveBZKmYQlLxevXSe+Po/YO3o59KBlxwzhW/T+BYm2t/+L+gV2xz7jYdVZWn0L0FvmuZEZjdegl36/noHex/RtLU5oAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                B = t(9335),
                U = e => {
                    let {
                        acceptLanguage: l,
                        isMobile: t
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-orange-50 dark:bg-gray-900",
                        children: (0, i.jsxs)("div", {
                            className: "grid max-w-screen-xl px-4 lg:px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12",
                            children: [(0, i.jsxs)("div", {
                                className: "mr-auto place-self-center lg:col-span-7 w-full md:w-8/12",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [(0, i.jsx)("span", {
                                        className: "hidden md:block shrink-0",
                                        children: (0, i.jsx)(o(), {
                                            alt: "achivement",
                                            width: 32,
                                            height: 32,
                                            src: R,
                                            className: "shrink-0"
                                        })
                                    }), (0, i.jsx)("span", {
                                        className: "md:hidden shrink-0",
                                        children: (0, i.jsx)(o(), {
                                            alt: "achivement",
                                            width: 24,
                                            height: 24,
                                            src: R,
                                            className: "shrink-0"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[12px] md:text-[16px] font-normal text-[#6A3A0C] pl-1",
                                        children: "en" === l ? "WORLD’S LARGEST APP FOR HINDU DEVOTEES" : "हिंदू भक्तों के लिए दुनिया का सबसे बड़ा ऐप"
                                    })]
                                }), "en" === l ? (0, i.jsxs)("h1", {
                                    className: "inline text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] max-w-2xl mb-4  tracking-tight leading-50 xl:text-[36px] dark:text-white",
                                    children: [(0, i.jsxs)("span", {
                                        className: " whitespace-nowrap",
                                        children: [(0, i.jsx)("span", {
                                            children: "Pray daily with "
                                        }), (0, i.jsxs)("span", {
                                            className: "w-full  md:inline md:pr-1 whitespace-nowrap text-orange-500",
                                            children: ["Sri Mandir", (0, i.jsx)("span", {
                                                className: "text-black",
                                                children: "."
                                            })]
                                        })]
                                    }), (0, i.jsx)("span", {
                                        className: "block",
                                        children: "One App for all your devotional needs."
                                    })]
                                }) : (0, i.jsxs)("h1", {
                                    className: "max-w-2xl mb-4  tracking-tight leading-50 md:text-[36px] xl:text-[36px] md:leading-[3.05rem] dark:text-white",
                                    children: [(0, i.jsx)("span", {
                                        className: " md:inline md:pr-1 text-orange-500 whitespace-nowrap text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px]",
                                        children: "श्री मंदिर"
                                    }), (0, i.jsxs)("span", {
                                        className: "pl-2 inline text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px]",
                                        children: ["के साथ रोज़ करें प्रार्थना।", (0, i.jsx)("br", {}), "एक एप आपकी सभी धार्मिक ज़रूरतों के लिए"]
                                    })]
                                }), "hi" === l ? (0, i.jsx)("div", {
                                    className: "md:hidden my-4",
                                    children: (0, i.jsx)(o(), {
                                        priority: !0,
                                        loading: "eager",
                                        src: k,
                                        alt: "srimandir banner",
                                        title: "srimandir banner"
                                    })
                                }) : (0, i.jsx)("div", {
                                    className: " md:hidden my-4",
                                    children: (0, i.jsx)(o(), {
                                        priority: !0,
                                        loading: "eager",
                                        src: E,
                                        alt: "srimandir banner",
                                        title: "srimandir banner"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-row w-full justify-center md:justify-start md:mt-10",
                                    children: [(0, i.jsxs)("a", {
                                        href: t ? "https://srimandir.app.link/TRGP" : B.Z3,
                                        className: "inline-flex items-center",
                                        children: [(0, i.jsx)("span", {
                                            className: "hidden md:block w-48 h-16",
                                            children: (0, i.jsx)(o(), {
                                                loading: "eager",
                                                priority: !0,
                                                src: C.Z,
                                                alt: "Play Store"
                                            })
                                        }), (0, i.jsx)("span", {
                                            className: "xs:w-36 w-40 h-11 md:hidden",
                                            children: (0, i.jsx)(o(), {
                                                loading: "eager",
                                                priority: !0,
                                                src: C.Z,
                                                alt: "Play Store"
                                            })
                                        })]
                                    }), (0, i.jsxs)("a", {
                                        href: t ? "https://srimandir.app.link/TRGP" : B.O5,
                                        className: "inline-flex items-center pl-4 ",
                                        children: [(0, i.jsx)("span", {
                                            className: "hidden md:block w-48 h-16",
                                            children: (0, i.jsx)(o(), {
                                                loading: "eager",
                                                priority: !0,
                                                src: L.Z,
                                                alt: "App Store"
                                            })
                                        }), (0, i.jsx)("span", {
                                            className: "xs:w-36 w-40 h-11 md:hidden",
                                            children: (0, i.jsx)(o(), {
                                                loading: "eager",
                                                priority: !0,
                                                src: L.Z,
                                                alt: "App Store"
                                            })
                                        })]
                                    })]
                                })]
                            }), "hi" === l ? (0, i.jsx)("div", {
                                className: " hidden md:block order-first md:order-last lg:mt-0 lg:col-span-5 lg:flex",
                                children: (0, i.jsx)(o(), {
                                    priority: !0,
                                    loading: "eager",
                                    src: k,
                                    alt: "srimandir banner",
                                    title: "srimandir banner"
                                })
                            }) : (0, i.jsx)("div", {
                                className: "hidden md:block  order-first md:order-last lg:mt-0 lg:col-span-5 lg:flex",
                                children: (0, i.jsx)(o(), {
                                    priority: !0,
                                    loading: "eager",
                                    src: E,
                                    alt: "srimandir banner",
                                    title: "srimandir banner"
                                })
                            })]
                        })
                    })
                },
                S = {
                    src: "/_next/static/media/ic_panchnag_01.c9296043.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                I = {
                    src: "/_next/static/media/ic_panchnag_02.2522314c.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                D = {
                    src: "/_next/static/media/ic_panchnag_03.aea76792.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                P = {
                    src: "/_next/static/media/ic_panchnag_04.74b6b851.svg",
                    height: 56,
                    width: 56,
                    blurWidth: 0,
                    blurHeight: 0
                },
                Q = t(30381),
                M = t.n(Q),
                H = e => {
                    var l, t, a, d, s, n, c, x, m, p, h;
                    let {
                        acceptLanguage: g
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-gray-50 dark:bg-gray-900 w-full",
                        children: (0, i.jsxs)("div", {
                            className: "py-6 px-4 md:px-0 mx-auto max-w-screen-xl sm:py-16 lg:px-0",
                            children: [(0, i.jsxs)("div", {
                                className: "mx-auto max-w-screen-md text-left md:text-center mb-8 lg:mb-9",
                                children: [(0, i.jsx)("h1", {
                                    className: " text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] mb-4 tracking-tight text-gray-900 dark:text-white block",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.panchang_title) || void 0 === l ? void 0 : l[g]
                                }), (0, i.jsx)("p", {
                                    className: "font-light text-gray-500 dark:text-gray-400 sm:text-xl mb-4",
                                    children: (0, i.jsx)("span", {
                                        className: "text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px] text-gray-90",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.panchang_sub_title) || void 0 === t ? void 0 : t[g]
                                    })
                                }), (0, i.jsxs)("a", {
                                    className: "inline-flex items-center ml-2 font-semibold text-orange-500 dark:text-orange-500 hover:underline hover:text-orange-600",
                                    href: "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY")),
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-[14px] font-normal leading-[19.07px] md:text-[16px] md:font-bold md:leading-[21.79px]",
                                        children: [null === r.Z || void 0 === r.Z ? void 0 : null === (a = r.Z.panchang_view_detail) || void 0 === a ? void 0 : a[g], " "]
                                    }), (0, i.jsx)("svg", {
                                        className: "w-4 h-4 ml-1 text-orange-500 dark:text-orange-500",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0 ",
                                children: [(0, i.jsxs)("a", {
                                    href: "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY")),
                                    className: "p-6  rounded  dark:bg-gray-800 block bg-gradient-to-r from-[#fbc69c] to-[#fde8d7]",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14 rounded bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: S,
                                            alt: "Auspicious-Inauspicious timings",
                                            className: "rounded-md"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-xl font-bold dark:text-white text-[18px] leading-[19.07px] md:text-[18px] md:font-bold md:leading-[24.52px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (d = r.Z.panchang_auspicious_title) || void 0 === d ? void 0 : d[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-gray-500 dark:text-gray-400 text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (s = r.Z.panchang_auspicious_sub_title) || void 0 === s ? void 0 : s[g]
                                    })]
                                }), (0, i.jsxs)("a", {
                                    href: "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY")),
                                    className: "p-6  rounded  dark:bg-gray-800 block bg-gradient-to-r from-[#b4ddff] to-[#e1f1ff]",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14 bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: I,
                                            alt: "Rahukal and Gulik Kaal",
                                            className: "rounded-md"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-xl font-bold dark:text-white text-[18px] leading-[19.07px] md:text-[18px] md:font-bold md:leading-[24.52px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (n = r.Z.panchang_raahukaal_title) || void 0 === n ? void 0 : n[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-gray-500 dark:text-gray-400 text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (c = r.Z.panchang_raahukaal_sub_title) || void 0 === c ? void 0 : c[g]
                                    })]
                                }), (0, i.jsxs)("a", {
                                    href: "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY")),
                                    className: "p-6  rounded  dark:bg-gray-800 block bg-gradient-to-r from-[#fbbab3] to-[#ffdeda]",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14 rounded bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: D,
                                            alt: "Sunrise-Sunset",
                                            className: "rounded-md"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-xl font-bold dark:text-white text-[18px] leading-[19.07px] md:text-[18px] md:font-bold md:leading-[24.52px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (x = r.Z.panchang_sunrise_title) || void 0 === x ? void 0 : x[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-gray-500 dark:text-gray-400 text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (m = r.Z.panchang_sunrise_sub_title) || void 0 === m ? void 0 : m[g]
                                    })]
                                }), (0, i.jsxs)("a", {
                                    href: "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY")),
                                    className: "p-6  rounded  dark:bg-gray-800 block bg-gradient-to-r from-[#e0b3fe] to-[#ebcdff]",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center items-center mb-4 w-14 h-14 rounded bg-primary-100  dark:bg-primary-900",
                                        children: (0, i.jsx)(o(), {
                                            src: P,
                                            alt: "Upcoming Festivals",
                                            className: "rounded-md"
                                        })
                                    }), (0, i.jsx)("h3", {
                                        className: "mb-2 text-xl dark:text-white text-[18px] font-bold leading-[19.07px] md:text-[18px] md:font-bold md:leading-[24.52px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (p = r.Z.panchang_festivals_title) || void 0 === p ? void 0 : p[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-gray-500 dark:text-gray-400 text-[16px] font-medium leading-[21.79px] md:text-[16px] md:font-medium md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (h = r.Z.panchang_festivals_sub_title) || void 0 === h ? void 0 : h[g]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                W = t(36410),
                O = {
                    src: "/_next/static/media/ic_puja_venue.d37df969.svg",
                    height: 16,
                    width: 16,
                    blurWidth: 0,
                    blurHeight: 0
                },
                V = t(94560),
                Y = e => {
                    var l, t, a, d, s;
                    let {
                        acceptLanguage: n,
                        pooja_list_item_large: o,
                        isGlobal: c = !1
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-white dark:bg-gray-900",
                        children: (0, i.jsxs)("div", {
                            className: "py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:py-12 lg:px-0",
                            children: [(0, i.jsxs)("div", {
                                className: "mx-auto max-w-screen-md text-left md:text-center  lg:mb-0",
                                children: [(0, i.jsx)("h1", {
                                    className: " text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] mb-4 tracking-tight text-gray-900 dark:text-white block",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.puja_sava_title) || void 0 === l ? void 0 : l[n]
                                }), c ? (0, i.jsx)("span", {
                                    className: "block",
                                    children: (0, i.jsx)("p", {
                                        className: "text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px] text-gray-500 sm:text-xl dark:text-gray-400 block mb-3",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.puja_sava_sub_title_us) || void 0 === t ? void 0 : t[n]
                                    })
                                }) : (0, i.jsx)("span", {
                                    className: "block",
                                    children: (0, i.jsx)("p", {
                                        className: "text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px] text-gray-500 sm:text-xl dark:text-gray-400 block mb-3",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (a = r.Z.puja_sava_sub_title) || void 0 === a ? void 0 : a[n]
                                    })
                                }), (0, i.jsx)("p", {
                                    children: (0, i.jsxs)("a", {
                                        className: "flex flex-row justify-center items-center ml-2 font-semibold text-orange-500 dark:text-orange-500 hover:underline hover:text-orange-600 mb-3",
                                        href: "epuja?lang=".concat(c ? "en-us" : n),
                                        children: [(0, i.jsxs)("span", {
                                            className: "text-[14px] font-normal leading-[19.07px] md:text-[16px] md:font-bold md:leading-[21.79px]",
                                            children: [null === r.Z || void 0 === r.Z ? void 0 : null === (d = r.Z.puja_seva_view_detail) || void 0 === d ? void 0 : d[n], " "]
                                        }), (0, i.jsx)("svg", {
                                            className: "w-4 h-4 ml-1 text-orange-500 dark:text-orange-500",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, i.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "grid gap-9 sm:grid-cols-2 lg:grid-cols-3",
                                children: null == o ? void 0 : null === (s = o.slice(0, 3)) || void 0 === s ? void 0 : s.map((e, l) => {
                                    var t, a, d, s, r, o, x, m, p, h, g, u, A, v, f, b, w, j, _, N, Z, y;
                                    return (0, i.jsx)(V.Z, {
                                        id: "".concat(null == e ? void 0 : null === (a = e.pooja_list_item_large) || void 0 === a ? void 0 : null === (t = a.store) || void 0 === t ? void 0 : t.title),
                                        ctaText: null == e ? void 0 : null === (r = e.pooja_list_item_large) || void 0 === r ? void 0 : null === (s = r.store) || void 0 === s ? void 0 : null === (d = s.cta) || void 0 === d ? void 0 : d.text,
                                        title: null == e ? void 0 : null === (x = e.pooja_list_item_large) || void 0 === x ? void 0 : null === (o = x.store) || void 0 === o ? void 0 : o.title,
                                        subTitle: null == e ? void 0 : null === (p = e.pooja_list_item_large) || void 0 === p ? void 0 : null === (m = p.store) || void 0 === m ? void 0 : m.sub_title,
                                        location: null == e ? void 0 : null === (g = e.pooja_list_item_large) || void 0 === g ? void 0 : null === (h = g.store) || void 0 === h ? void 0 : h.location,
                                        locationIcon: O,
                                        processDate: null == e ? void 0 : null === (A = e.pooja_list_item_large) || void 0 === A ? void 0 : null === (u = A.store) || void 0 === u ? void 0 : u.process_date,
                                        processDateIcon: W.Z,
                                        slug: "/epuja/".concat(null == e ? void 0 : null === (f = e.pooja_list_item_large) || void 0 === f ? void 0 : null === (v = f.store) || void 0 === v ? void 0 : v.slug),
                                        mediaImage: null == e ? void 0 : null === (j = e.pooja_list_item_large) || void 0 === j ? void 0 : null === (w = j.store) || void 0 === w ? void 0 : null === (b = w.cover_media) || void 0 === b ? void 0 : b.media_url,
                                        specificity: null == e ? void 0 : null === (N = e.pooja_list_item_large) || void 0 === N ? void 0 : null === (_ = N.store) || void 0 === _ ? void 0 : _.pooja_specificity,
                                        acceptLanguage: n,
                                        isButtonArrowPresent: !0,
                                        isGlobal: c
                                    }, "".concat(null == e ? void 0 : null === (y = e.pooja_list_item_large) || void 0 === y ? void 0 : null === (Z = y.store) || void 0 === Z ? void 0 : Z.title, "-").concat(l))
                                })
                            })]
                        })
                    })
                },
                X = {
                    src: "/_next/static/media/ic_stat_01.2f98b129.svg",
                    height: 68,
                    width: 68,
                    blurWidth: 0,
                    blurHeight: 0
                },
                T = {
                    src: "/_next/static/media/ic_stat_02.57aa5413.svg",
                    height: 67,
                    width: 68,
                    blurWidth: 0,
                    blurHeight: 0
                },
                G = {
                    src: "/_next/static/media/ic_stat_03.afcf0089.svg",
                    height: 67,
                    width: 67,
                    blurWidth: 0,
                    blurHeight: 0
                },
                z = {
                    src: "/_next/static/media/ic_stat_04.dc6fde4f.svg",
                    height: 67,
                    width: 68,
                    blurWidth: 0,
                    blurHeight: 0
                },
                J = e => {
                    var l, t, a, d, s, n, c, x, m, p, h;
                    let {
                        acceptLanguage: g
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "w-full bg-gradient-to-r from-[#121f36] to-[#162e59] dark:bg-gray-900",
                        children: (0, i.jsxs)("div", {
                            className: "items-center py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-12 lg:px-0",
                            children: [(0, i.jsxs)("div", {
                                className: "col-span-2 mb-8",
                                children: [(0, i.jsx)("p", {
                                    className: " text-[#72A0F1] dark:text-[#72A0F1] font-bold leading-[25px] text-[18px] md:font-bold md:leading-[24.52px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.stats_title_1) || void 0 === l ? void 0 : l[g]
                                }), (0, i.jsxs)("h2", {
                                    className: "text-[24px] font-extrabold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] mt-3 mb-4  tracking-tight text-white md:text-4xl dark:text-white",
                                    children: [" ", null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.stats_title_2) || void 0 === t ? void 0 : t[g]]
                                }), (0, i.jsx)("span", {
                                    className: "block text-white text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px]",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (a = r.Z.stats_title_3) || void 0 === a ? void 0 : a[g]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0",
                                children: [(0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(o(), {
                                        src: X,
                                        alt: "srimandir stats",
                                        className: "rounded-md",
                                        width: 56,
                                        height: 56
                                    }), (0, i.jsx)("span", {
                                        className: "block text-white mb-2 text-[22px] font-bold leading-[29.96px] md:text-[24px] md:font-bold md:leading-[32.69px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (d = r.Z.stats_block_1_title) || void 0 === d ? void 0 : d[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-[#b3b3b3] dark:text-[#b3b3b3] text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (s = r.Z.stats_block_1_sub_title) || void 0 === s ? void 0 : s[g]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(o(), {
                                        src: T,
                                        alt: "srimandir stats",
                                        className: "rounded-md",
                                        width: 56,
                                        height: 56
                                    }), (0, i.jsx)("span", {
                                        className: "block text-white mb-2 text-[22px] font-bold leading-[29.96px] md:text-[24px] md:font-bold md:leading-[32.69px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (n = r.Z.stats_block_2_title) || void 0 === n ? void 0 : n[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-[#b3b3b3] dark:text-[#b3b3b3] text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (c = r.Z.stats_block_2_sub_title) || void 0 === c ? void 0 : c[g]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(o(), {
                                        src: G,
                                        alt: "srimandir stats",
                                        className: "rounded-md",
                                        width: 56,
                                        height: 56
                                    }), (0, i.jsx)("span", {
                                        className: "block text-white mb-2 text-[22px] font-bold leading-[29.96px] md:text-[24px] md:font-bold md:leading-[32.69px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (x = r.Z.stats_block_3_title) || void 0 === x ? void 0 : x[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-[#b3b3b3] dark:text-[#b3b3b3] text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (m = r.Z.stats_block_3_sub_title) || void 0 === m ? void 0 : m[g]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(o(), {
                                        src: z,
                                        alt: "srimandir stats",
                                        className: "rounded-md",
                                        width: 56,
                                        height: 56
                                    }), (0, i.jsx)("span", {
                                        className: "block text-white mb-2 text-[22px] font-bold leading-[29.96px] md:text-[24px] md:font-bold md:leading-[32.69px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (p = r.Z.stats_block_4_title) || void 0 === p ? void 0 : p[g]
                                    }), (0, i.jsx)("p", {
                                        className: " text-[#b3b3b3] dark:text-[#b3b3b3] text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]",
                                        children: null === r.Z || void 0 === r.Z ? void 0 : null === (h = r.Z.stats_block_4_sub_title) || void 0 === h ? void 0 : h[g]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                K = t(50543),
                F = t(32693),
                q = e => {
                    var l, t;
                    let {
                        acceptLanguage: a,
                        isGlobal: d
                    } = e;
                    return (0, i.jsx)("section", {
                        className: "bg-[#FAFAFA] dark:bg-gray-900 w-full",
                        children: (0, i.jsxs)("div", {
                            className: " md:px-0 pt-6 pb-4 lg:py-8 mx-auto max-w-screen-xl text-left md:text-center",
                            children: [(0, i.jsxs)("div", {
                                className: "mx-auto max-w-screen-sm mb-8 lg:mb-16",
                                children: [(0, i.jsx)("h2", {
                                    className: " px-4 md:px-0 text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] mb-4 tracking-tight",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (l = r.Z.review_title) || void 0 === l ? void 0 : l[a]
                                }), (0, i.jsx)("span", {
                                    className: "px-4 md:px-0 text-[16px] font-normal leading-[21.79px] md:text-[20px] md:font-normal md:leading-[27.24px] flex justify-center",
                                    children: null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.review_sub_title) || void 0 === t ? void 0 : t[a]
                                })]
                            }), (0, i.jsx)(K.Z, {
                                data: null === F.A || void 0 === F.A ? void 0 : F.A[d ? "enUs" : a],
                                acceptLanguage: a,
                                id: "home-review"
                            })]
                        })
                    })
                },
                $ = t(82285),
                ee = {
                    src: "/_next/static/media/ic_astro.4e8171bd.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                el = {
                    src: "/_next/static/media/ic_chadhava_seva.c04d828f.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                et = {
                    src: "/_next/static/media/ic_festivals.19495f6a.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ei = {
                    src: "/_next/static/media/ic_mandir_darshan.68d86126.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ea = {
                    src: "/_next/static/media/ic_music.b3aeb0a3.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ed = {
                    src: "/_next/static/media/ic_panchang.0458f8f4.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                es = {
                    src: "/_next/static/media/ic_puja_seva.48294bc9.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                er = {
                    src: "/_next/static/media/ic_sahitya.976e992d.svg",
                    height: 48,
                    width: 48,
                    blurWidth: 0,
                    blurHeight: 0
                },
                en = t(29815);
            let eo = ["EPUJA", "ASTRO", "CHADAVA", "FESTIVAL", "MUSIC", "MANDIR_DARSHAN", "LITERATURE", "PANCHANG"];
            var ec = e => {
                    var l, t, a, d, s, r, n, c, x;
                    let {
                        acceptLanguage: m = "en",
                        clickHandler: p,
                        isGlobal: h
                    } = e, g = [{
                        image: es,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (l = en.Z.homepage_explore_srimandir_puja_tile_title) || void 0 === l ? void 0 : l[m]
                        }),
                        url: "/epuja?lang=".concat(h ? "en-us" : m)
                    }, {
                        image: ee,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (t = en.Z.homepage_explore_srimandir_astro_tile_title) || void 0 === t ? void 0 : t[m]
                        })
                    }, {
                        image: el,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (a = en.Z.homepage_explore_srimandir_chadava_tile_title) || void 0 === a ? void 0 : a[m]
                        })
                    }, {
                        image: et,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (d = en.Z.homepage_explore_srimandir_festival_tile_title) || void 0 === d ? void 0 : d[m]
                        })
                    }, {
                        image: ea,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (s = en.Z.homepage_explore_srimandir_music_tile_title) || void 0 === s ? void 0 : s[m]
                        })
                    }, {
                        image: ei,
                        title: (0, i.jsx)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: null === en.Z || void 0 === en.Z ? void 0 : null === (r = en.Z.homepage_explore_srimandir_mandir_darshan_tile_title) || void 0 === r ? void 0 : r[m]
                        })
                    }, {
                        image: er,
                        title: (0, i.jsxs)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: [" ", null === en.Z || void 0 === en.Z ? void 0 : null === (n = en.Z.homepage_explore_srimandir_hindu_litereture_tile_title) || void 0 === n ? void 0 : n[m]]
                        }),
                        url: h ? "" : "/articles?lang=".concat(m)
                    }, {
                        image: ed,
                        title: (0, i.jsxs)("div", {
                            className: "text-balance max-w-[80px] md:max-w-[130px]",
                            children: [" ", null === en.Z || void 0 === en.Z ? void 0 : null === (c = en.Z.homepage_explore_srimandir_panchang_tile_title) || void 0 === c ? void 0 : c[m]]
                        }),
                        url: h ? "" : "/panchang/varanasi/".concat(M()().format("DD-MM-YYYY"), "?lang=").concat(m)
                    }], u = (e, l) => (0, i.jsxs)("div", {
                        role: "button",
                        onClick: () => !(null == e ? void 0 : e.url) && p(eo[l]),
                        tabIndex: -1,
                        onKeyDown: () => 0 !== l && p(eo[l]),
                        className: "flex flex-col justify-start items-center ".concat(0 === l ? "md:pr-8" : "md:px-8", " ").concat(7 === l ? "md:pl-8" : "md:px-8", "  ").concat(l > 3 ? "pt-6 md:pt-0" : "", " "),
                        children: [(0, i.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, i.jsx)(o(), {
                                src: null == e ? void 0 : e.image,
                                width: 84,
                                height: 84
                            })
                        }), (0, i.jsx)("div", {
                            className: "md:hidden",
                            children: (0, i.jsx)(o(), {
                                src: null == e ? void 0 : e.image,
                                width: 48,
                                height: 48
                            })
                        }), (0, i.jsx)("div", {
                            className: "text-[#434343] text-[12px] text-center md:text-[16px] font-medium",
                            children: null == e ? void 0 : e.title
                        })]
                    });
                    return (0, i.jsx)("section", {
                        className: "bg-white dark:bg-gray-900 w-full",
                        children: (0, i.jsx)("div", {
                            className: "py-8 px-4 md:px-0 mx-auto max-w-screen-xl w-full lg:py-12 lg:px-0",
                            children: (0, i.jsxs)("div", {
                                className: "mx-auto text-left md:text-center  lg:mb-0",
                                children: [(0, i.jsx)("h1", {
                                    className: " text-[24px] font-bold leading-[32.69px] md:text-[36px] md:font-bold md:leading-[49px] mb-6 md:mb-0 tracking-tight text-gray-900 dark:text-white block",
                                    children: null === en.Z || void 0 === en.Z ? void 0 : null === (x = en.Z.puja_explore_srimandir_title) || void 0 === x ? void 0 : x[m]
                                }), (0, i.jsx)("div", {
                                    className: " justify-between md:justify-center  flex-wrap flex-grow w-full md:pt-9 grid grid-cols-4 md:grid-cols-8",
                                    children: null == g ? void 0 : g.map((e, l) => (null == e ? void 0 : e.url) ? (0, i.jsx)("a", {
                                        href: null == e ? void 0 : e.url,
                                        children: u(e, l)
                                    }) : u(e, l))
                                })]
                            })
                        })
                    })
                },
                ex = {
                    src: "/_next/static/media/img_download_popup_astro.4eab1d59.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX/qh7/oRn7qi3+nBT5tEjt6uPrvnX7uEni3tjZz8bY2N+M84tQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXBhxEAMAwCsQdsp+w/cC4SiWecINXtkoDavfh82vAAB4wAYti1jawAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                em = {
                    src: "/_next/static/media/img_download_popup_astro_global.7ab6f064.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX+mxT/oRn4nBv/qh35tUjg3+Dqu3j8pSr3pTLww4zx8es905JXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nAXBiQEAIAwCsQP6qPsPbALszAJSdZdEUv0qwT5zj/0BB8oAe6TC1Q8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                ep = {
                    src: "/_next/static/media/img_download_popup_chadhava.55bf038e.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX/nhf/qB3+rR/7t0r7sjXYv4PNo5LtwHfcz7v8pCn7sz9yK0zKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nBXBhw0AMAzDMMXO/P/hoiRwM8fnbgMR3nUEUlal9AAHfQBnKkJ7dQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                eh = {
                    src: "/_next/static/media/img_download_popup_library.4477df24.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX/qh7+nBX+oiD8uEr8sjO3rqTn5ubtwHawm464mIb7s0gxe20AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nBXBhxEAIAwDsbfTIPsPzCEhecYS9navBURV8OW5CQ8HkgBnPu4YVwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                eg = {
                    src: "/_next/static/media/img_download_popup_music.984f7a11.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX/rB//pRv+nRX2sUX6sTKjk4y+jEXw6+L6oSdWPjxPPD3smCvzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAXBgQEAIAjDsG4DQf8/2AR7z1kbK+9GRqQ7ElAzBR8IrQBtFe8EAgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                eu = {
                    src: "/_next/static/media/img_download_popup_mandir_darshan.ba7f4eb0.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEX/rB/+pSD+nRb2skX5rzB7UzLorkVnQi6WdD6YdD3iNEpCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nAXBhwEAMAzCMANZ/f/hStiakY2Ve5ER6Q4CarfgAwa7AFzZA8CmAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                eA = {
                    src: "/_next/static/media/img_download_popup_panchang.2e7419bc.png",
                    height: 480,
                    width: 960,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX/pBr/rB/+nBT7tUjh3tf8szTsv3fw7Of8pCrMxr/0skODBw3PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nB3GyQ0AIBADsUn2hP4LRsIvY2/32kDkBIDu+ZEqs6QHCBUAaoT7o0AAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                ev = t(3755),
                ef = t(7566),
                eb = t(97769),
                ew = e => {
                    var l, t, r, n, c, x, m, p, g, u, A, v, b, w;
                    let {
                        cardsData: j,
                        lang: _,
                        isGlobal: N = !1
                    } = e, {
                        acceptLanguage: Z
                    } = (0, eb.bp)(), k = (0, ef.Z)(), E = (0, d.useRef)(""), R = _ || Z, S = (0, d.useRef)(), I = (0, d.useRef)(), D = (0, d.useRef)(), P = (0, d.useRef)(), Q = (0, d.useRef)(), M = (0, d.useRef)(), W = (0, d.useRef)(), O = (0, a.useRouter)(), V = () => (0, i.jsx)("div", {
                        className: "bg-[#F9F8FD] pt-4 w-full shrink-0 md:hidden"
                    });
                    (0, d.useEffect)(() => {
                        var e, l;
                        null === (e = localStorage) || void 0 === e || e.removeItem("cart_items"), null === (l = localStorage) || void 0 === l || l.removeItem("sankalp_form_data")
                    }, []), (0, d.useEffect)(() => {
                        var e;
                        let l = () => {};
                        return null == O || null === (e = O.events) || void 0 === e || e.on("routeChangeComplete", l), () => {
                            var e;
                            null == O || null === (e = O.events) || void 0 === e || e.off("routeChangeComplete", l)
                        }
                    }, [null == O ? void 0 : O.events]);
                    let X = () => {
                            var e;
                            null == S || null === (e = S.current) || void 0 === e || e.hide()
                        },
                        T = () => {
                            var e;
                            null == I || null === (e = I.current) || void 0 === e || e.hide()
                        },
                        G = () => {
                            var e;
                            null == D || null === (e = D.current) || void 0 === e || e.hide()
                        },
                        z = () => {
                            var e;
                            null == P || null === (e = P.current) || void 0 === e || e.hide()
                        },
                        K = () => {
                            var e;
                            null == Q || null === (e = Q.current) || void 0 === e || e.hide()
                        },
                        F = () => {
                            var e;
                            null == M || null === (e = M.current) || void 0 === e || e.hide()
                        },
                        ee = () => {
                            var e;
                            null == W || null === (e = W.current) || void 0 === e || e.hide()
                        };
                    return (0, i.jsxs)(s.Z, {
                        pageKey: $.Z.pageKeys.home,
                        language: R,
                        isGlobal: N,
                        children: [(0, i.jsxs)("main", {
                            className: "flex min-h-screen flex-col items-center justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "w-full bg-orange-50",
                                children: (0, i.jsx)(U, {
                                    acceptLanguage: R,
                                    isMobile: k
                                })
                            }), (0, i.jsx)(ec, {
                                acceptLanguage: R,
                                isGlobal: N,
                                clickHandler: e => {
                                    var l, t, i, a, d, s, r;
                                    E.current = e, "ASTRO" === E.current ? null == S || null === (l = S.current) || void 0 === l || l.show() : "CHADAVA" === E.current ? null == I || null === (t = I.current) || void 0 === t || t.show() : "FESTIVAL" === E.current ? null == D || null === (i = D.current) || void 0 === i || i.show() : "MUSIC" === E.current ? null == P || null === (a = P.current) || void 0 === a || a.show() : "MANDIR_DARSHAN" === E.current ? null == Q || null === (d = Q.current) || void 0 === d || d.show() : "LITERATURE" === E.current ? null == M || null === (s = M.current) || void 0 === s || s.show() : "PANCHANG" === E.current && (null == W || null === (r = W.current) || void 0 === r || r.show())
                                }
                            }), (0, i.jsx)(f, {
                                acceptLanguage: R
                            }), (0, i.jsx)(Y, {
                                acceptLanguage: R,
                                pooja_list_item_large: (e => {
                                    if ("pooja_list_item_large" === e) return j.filter(l => (null == l ? void 0 : l.visible) && (null == l ? void 0 : l.type) === e)
                                })("pooja_list_item_large"),
                                isGlobal: N
                            }), !N && (0, i.jsx)(H, {
                                acceptLanguage: R
                            }), (0, i.jsx)(J, {
                                acceptLanguage: R
                            }), (0, i.jsx)(q, {
                                acceptLanguage: R,
                                isGlobal: N
                            }), V(), (0, i.jsx)(y, {
                                acceptLanguage: R
                            }), V(), !N && (0, i.jsx)(h, {
                                acceptLanguage: R
                            }), V()]
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                S.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: X,
                                        onKeyDown: X,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            alt: "astro_seva",
                                            fill: !0,
                                            loading: "eager",
                                            src: N ? em : ex,
                                            className: "rounded-xl",
                                            style: {
                                                objectFit: "cover"
                                            }
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (l = en.Z.homepage_explore_srimandir_modal_astro_title) || void 0 === l ? void 0 : l[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (t = en.Z.homepage_explore_srimandir_modal_astro_sub_title) || void 0 === t ? void 0 : t[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                I.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: T,
                                        onKeyDown: T,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            priority: !0,
                                            loading: "eager",
                                            src: ep,
                                            fill: !0,
                                            alt: "chadava",
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (r = en.Z.homepage_explore_srimandir_modal_chadava_title) || void 0 === r ? void 0 : r[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (n = en.Z.homepage_explore_srimandir_modal_chadava_sub_title) || void 0 === n ? void 0 : n[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                D.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: G,
                                        onKeyDown: G,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            alt: "festival_seva",
                                            priority: !0,
                                            loading: "eager",
                                            src: eh,
                                            fill: !0,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (c = en.Z.homepage_explore_srimandir_modal_festival_title) || void 0 === c ? void 0 : c[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (x = en.Z.homepage_explore_srimandir_modal_festival_sub_title) || void 0 === x ? void 0 : x[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                P.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: z,
                                        onKeyDown: z,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            priority: !0,
                                            loading: "eager",
                                            alt: "music",
                                            src: eg,
                                            fill: !0,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (m = en.Z.homepage_explore_srimandir_modal_music_title) || void 0 === m ? void 0 : m[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (p = en.Z.homepage_explore_srimandir_modal_music_sub_title) || void 0 === p ? void 0 : p[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                Q.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: K,
                                        onKeyDown: K,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            priority: !0,
                                            loading: "eager",
                                            alt: "mandir_darshan",
                                            src: eu,
                                            fill: !0,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (g = en.Z.homepage_explore_srimandir_modal_darshan_title) || void 0 === g ? void 0 : g[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (u = en.Z.homepage_explore_srimandir_modal_darshan_sub_title) || void 0 === u ? void 0 : u[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                M.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: F,
                                        onKeyDown: F,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            priority: !0,
                                            loading: "eager",
                                            src: eh,
                                            alt: "literature",
                                            fill: !0,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (A = en.Z.homepage_explore_srimandir_modal_litereture_title) || void 0 === A ? void 0 : A[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (v = en.Z.homepage_explore_srimandir_modal_litereture_sub_title) || void 0 === v ? void 0 : v[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsx)(ev.Z, {
                            modalOptions: {
                                closable: !1,
                                backdropClasses: "bg-gray-900/70 dark:bg-gray-900/70 fixed inset-0 z-40"
                            },
                            getModalInstance: e => {
                                W.current = e
                            },
                            contentContainerHeightClass: "flex  md:w-2/5",
                            children: (0, i.jsx)("div", {
                                className: "flex fixed md:static bottom-0 top-0 justify-center items-center   w-full ",
                                children: (0, i.jsxs)("div", {
                                    className: "relative flex flex-col w-full max-w-[320px] md:max-w-[504px]  bg-white my-auto rounded-xl md:rounded-2xl p-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute right-6 top-6 rounded-full bg-white",
                                        role: "button",
                                        onClick: ee,
                                        onKeyDown: ee,
                                        tabIndex: -1,
                                        style: {
                                            zIndex: 120
                                        },
                                        children: (0, i.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, i.jsx)("g", {
                                                clipPath: "url(#clip0_8256_14501)",
                                                children: (0, i.jsx)("path", {
                                                    d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
                                                    fill: "black"
                                                })
                                            }), (0, i.jsx)("defs", {
                                                children: (0, i.jsx)("clipPath", {
                                                    id: "clip0_8256_14501",
                                                    children: (0, i.jsx)("rect", {
                                                        width: "24",
                                                        height: "24",
                                                        fill: "white"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "flex w-full relative h-[148px] md:h-[240px]",
                                        children: (0, i.jsx)(o(), {
                                            priority: !0,
                                            loading: "eager",
                                            src: eA,
                                            fill: !0,
                                            alt: "panchang",
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-xl"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-[18px] md:text-[20px] font-bold text-black pt-[16px] text-center",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (b = en.Z.homepage_explore_srimandir_modal_panchang_title) || void 0 === b ? void 0 : b[Z]
                                    }), (0, i.jsx)("div", {
                                        className: "text-[16px] font-normal text-[#6B7280] pt-[6px] text-center md:px-6",
                                        children: null === en.Z || void 0 === en.Z ? void 0 : null === (w = en.Z.homepage_explore_srimandir_modal_panchang_sub_title) || void 0 === w ? void 0 : w[Z]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-row justify-center pt-4 md:pb-1",
                                        children: [(0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.Z3,
                                            className: "inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: C.Z,
                                                    alt: "Play Store"
                                                })
                                            })]
                                        }), (0, i.jsxs)("a", {
                                            href: k ? "https://srimandir.app.link/TRGP" : B.O5,
                                            className: "inline-flex items-center pl-4 ",
                                            children: [(0, i.jsx)("span", {
                                                className: "hidden md:block w-[160px] h-[44px]",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            }), (0, i.jsx)("span", {
                                                className: "xs:w-36 w-[142px] h-[44px] md:hidden",
                                                children: (0, i.jsx)(o(), {
                                                    loading: "eager",
                                                    priority: !0,
                                                    src: L.Z,
                                                    alt: "App Store"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        57725: function() {},
        13207: function() {},
        4276: function() {},
        15560: function(e, l, t) {
            "use strict";
            t.d(l, {
                Gk: function() {
                    return i.Z
                },
                Rv: function() {
                    return n.Z
                },
                W_: function() {
                    return a.Z
                },
                o3: function() {
                    return r.Z
                },
                pt: function() {
                    return s.Z
                },
                tl: function() {
                    return d.Z
                }
            }), t(34257), t(65647);
            var i = t(8104),
                a = t(32562),
                d = t(41853);
            t(75278), t(39278), t(88498), t(35824), t(22126), t(28538), t(24914);
            var s = t(13758),
                r = t(46765),
                n = t(92844);
            t(21395), t(30820), t(15646), t(66160), t(35485), t(80557)
        },
        51532: function(e, l, t) {
            "use strict";
            t.d(l, {
                tq: function() {
                    return m
                },
                o5: function() {
                    return p
                }
            });
            var i = t(67294),
                a = t(96236),
                d = t(62546);
            let s = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var l = 1; l < arguments.length; l++) {
                        var t = arguments[l];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function n(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function o(e, l) {
                return "undefined" == typeof window ? (0, i.useEffect)(e, l) : (0, i.useLayoutEffect)(e, l)
            }
            let c = (0, i.createContext)(null),
                x = (0, i.createContext)(null),
                m = (0, i.forwardRef)(function(e, l) {
                    let {
                        className: t,
                        tag: c = "div",
                        wrapperTag: m = "div",
                        children: p,
                        onSwiper: h,
                        ...g
                    } = void 0 === e ? {} : e, u = !1, [A, v] = (0, i.useState)("swiper"), [f, b] = (0, i.useState)(null), [w, j] = (0, i.useState)(!1), _ = (0, i.useRef)(!1), N = (0, i.useRef)(null), Z = (0, i.useRef)(null), y = (0, i.useRef)(null), k = (0, i.useRef)(null), E = (0, i.useRef)(null), L = (0, i.useRef)(null), C = (0, i.useRef)(null), R = (0, i.useRef)(null), {
                        params: B,
                        passedParams: U,
                        rest: S,
                        events: I
                    } = function(e, l) {
                        void 0 === e && (e = {}), void 0 === l && (l = !0);
                        let t = {
                                on: {}
                            },
                            i = {},
                            s = {};
                        (0, d.e)(t, a.d), t._emitClasses = !0, t.init = !1;
                        let r = {},
                            n = d.p.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(a => {
                            void 0 !== e[a] && (n.indexOf(a) >= 0 ? (0, d.i)(e[a]) ? (t[a] = {}, s[a] = {}, (0, d.e)(t[a], e[a]), (0, d.e)(s[a], e[a])) : (t[a] = e[a], s[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? l ? i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : t.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
                        }), {
                            params: t,
                            passedParams: s,
                            rest: r,
                            events: i
                        }
                    }(g), {
                        slides: D,
                        slots: P
                    } = function(e) {
                        let l = [],
                            t = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return i.Children.toArray(e).forEach(e => {
                            if (n(e)) l.push(e);
                            else if (e.props && e.props.slot && t[e.props.slot]) t[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let a = function e(l) {
                                    let t = [];
                                    return i.Children.toArray(l).forEach(l => {
                                        n(l) ? t.push(l) : l.props && l.props.children && e(l.props.children).forEach(e => t.push(e))
                                    }), t
                                }(e.props.children);
                                a.length > 0 ? a.forEach(e => l.push(e)) : t["container-end"].push(e)
                            } else t["container-end"].push(e)
                        }), {
                            slides: l,
                            slots: t
                        }
                    }(p), Q = () => {
                        j(!w)
                    };
                    Object.assign(B.on, {
                        _containerClasses(e, l) {
                            v(l)
                        }
                    });
                    let M = () => {
                        Object.assign(B.on, I), u = !0;
                        let e = { ...B
                        };
                        if (delete e.wrapperClass, Z.current = new a.S(e), Z.current.virtual && Z.current.params.virtual.enabled) {
                            Z.current.virtual.slides = D;
                            let e = {
                                cache: !1,
                                slides: D,
                                renderExternal: b,
                                renderExternalUpdate: !1
                            };
                            (0, d.e)(Z.current.params.virtual, e), (0, d.e)(Z.current.originalParams.virtual, e)
                        }
                    };
                    N.current || M(), Z.current && Z.current.on("_beforeBreakpoint", Q);
                    let H = () => {
                            !u && I && Z.current && Object.keys(I).forEach(e => {
                                Z.current.on(e, I[e])
                            })
                        },
                        W = () => {
                            I && Z.current && Object.keys(I).forEach(e => {
                                Z.current.off(e, I[e])
                            })
                        };
                    return (0, i.useEffect)(() => () => {
                        Z.current && Z.current.off("_beforeBreakpoint", Q)
                    }), (0, i.useEffect)(() => {
                        !_.current && Z.current && (Z.current.emitSlidesClasses(), _.current = !0)
                    }), o(() => {
                        if (l && (l.current = N.current), N.current) return Z.current.destroyed && M(),
                            function(e, l) {
                                let {
                                    el: t,
                                    nextEl: i,
                                    prevEl: a,
                                    paginationEl: s,
                                    scrollbarEl: r,
                                    swiper: n
                                } = e;
                                (0, d.n)(l) && i && a && (n.params.navigation.nextEl = i, n.originalParams.navigation.nextEl = i, n.params.navigation.prevEl = a, n.originalParams.navigation.prevEl = a), (0, d.a)(l) && s && (n.params.pagination.el = s, n.originalParams.pagination.el = s), (0, d.b)(l) && r && (n.params.scrollbar.el = r, n.originalParams.scrollbar.el = r), n.init(t)
                            }({
                                el: N.current,
                                nextEl: E.current,
                                prevEl: L.current,
                                paginationEl: C.current,
                                scrollbarEl: R.current,
                                swiper: Z.current
                            }, B), h && h(Z.current), () => {
                                Z.current && !Z.current.destroyed && Z.current.destroy(!0, !1)
                            }
                    }, []), o(() => {
                        H();
                        let e = function(e, l, t, i, a) {
                            let s = [];
                            if (!l) return s;
                            let r = e => {
                                0 > s.indexOf(e) && s.push(e)
                            };
                            if (t && i) {
                                let e = i.map(a),
                                    l = t.map(a);
                                e.join("") !== l.join("") && r("children"), i.length !== t.length && r("children")
                            }
                            return d.p.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(t => {
                                if (t in e && t in l) {
                                    if ((0, d.i)(e[t]) && (0, d.i)(l[t])) {
                                        let i = Object.keys(e[t]),
                                            a = Object.keys(l[t]);
                                        i.length !== a.length ? r(t) : (i.forEach(i => {
                                            e[t][i] !== l[t][i] && r(t)
                                        }), a.forEach(i => {
                                            e[t][i] !== l[t][i] && r(t)
                                        }))
                                    } else e[t] !== l[t] && r(t)
                                }
                            }), s
                        }(U, y.current, D, k.current, e => e.key);
                        return y.current = U, k.current = D, e.length && Z.current && !Z.current.destroyed && (0, d.u)({
                            swiper: Z.current,
                            slides: D,
                            passedParams: U,
                            changedParams: e,
                            nextEl: E.current,
                            prevEl: L.current,
                            scrollbarEl: R.current,
                            paginationEl: C.current
                        }), () => {
                            W()
                        }
                    }), o(() => {
                        s(Z.current)
                    }, [f]), i.createElement(c, r({
                        ref: N,
                        className: (0, d.d)(`${A}${t?` ${t}`:""}`)
                    }, S), i.createElement(x.Provider, {
                        value: Z.current
                    }, P["container-start"], i.createElement(m, {
                        className: (0, d.w)(B.wrapperClass)
                    }, P["wrapper-start"], B.virtual ? function(e, l, t) {
                        if (!t) return null;
                        let a = e => {
                                let t = e;
                                return e < 0 ? t = l.length + e : t >= l.length && (t -= l.length), t
                            },
                            d = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${t.offset}px`
                            } : {
                                top: `${t.offset}px`
                            },
                            {
                                from: s,
                                to: r
                            } = t,
                            n = e.params.loop ? -l.length : 0,
                            o = e.params.loop ? 2 * l.length : l.length,
                            c = [];
                        for (let e = n; e < o; e += 1) e >= s && e <= r && c.push(l[a(e)]);
                        return c.map((l, t) => i.cloneElement(l, {
                            swiper: e,
                            style: d,
                            key: `slide-${t}`
                        }))
                    }(Z.current, D, f) : D.map((e, l) => i.cloneElement(e, {
                        swiper: Z.current,
                        swiperSlideIndex: l
                    })), P["wrapper-end"]), (0, d.n)(B) && i.createElement(i.Fragment, null, i.createElement("div", {
                        ref: L,
                        className: "swiper-button-prev"
                    }), i.createElement("div", {
                        ref: E,
                        className: "swiper-button-next"
                    })), (0, d.b)(B) && i.createElement("div", {
                        ref: R,
                        className: "swiper-scrollbar"
                    }), (0, d.a)(B) && i.createElement("div", {
                        ref: C,
                        className: "swiper-pagination"
                    }), P["container-end"]))
                });
            m.displayName = "Swiper";
            let p = (0, i.forwardRef)(function(e, l) {
                let {
                    tag: t = "div",
                    children: a,
                    className: s = "",
                    swiper: n,
                    zoom: x,
                    lazy: m,
                    virtualIndex: p,
                    swiperSlideIndex: h,
                    ...g
                } = void 0 === e ? {} : e, u = (0, i.useRef)(null), [A, v] = (0, i.useState)("swiper-slide"), [f, b] = (0, i.useState)(!1);

                function w(e, l, t) {
                    l === u.current && v(t)
                }
                o(() => {
                    if (void 0 !== h && (u.current.swiperSlideIndex = h), l && (l.current = u.current), u.current && n) {
                        if (n.destroyed) {
                            "swiper-slide" !== A && v("swiper-slide");
                            return
                        }
                        return n.on("_slideClass", w), () => {
                            n && n.off("_slideClass", w)
                        }
                    }
                }), o(() => {
                    n && u.current && !n.destroyed && v(n.getSlideClasses(u.current))
                }, [n]);
                let j = {
                        isActive: A.indexOf("swiper-slide-active") >= 0,
                        isVisible: A.indexOf("swiper-slide-visible") >= 0,
                        isPrev: A.indexOf("swiper-slide-prev") >= 0,
                        isNext: A.indexOf("swiper-slide-next") >= 0
                    },
                    _ = () => "function" == typeof a ? a(j) : a;
                return i.createElement(t, r({
                    ref: u,
                    className: (0, d.d)(`${A}${s?` ${s}`:""}`),
                    "data-swiper-slide-index": p,
                    onLoad: () => {
                        b(!0)
                    }
                }, g), x && i.createElement(c.Provider, {
                    value: j
                }, i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof x ? x : void 0
                }, _(), m && !f && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !x && i.createElement(c.Provider, {
                    value: j
                }, _(), m && !f && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            p.displayName = "SwiperSlide"
        }
    }
]);