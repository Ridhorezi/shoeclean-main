"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Architecture_Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(8655);
;// CONCATENATED MODULE: ./src/data/architecture/contact.json
const contact_namespaceObject = JSON.parse('{"TN":"Shoe Clean","m7":"+62 5758 5758","Do":"shoclean@gmail.com","Lk":"Bekasi, Jawa Barat, Indonesia."}');
;// CONCATENATED MODULE: ./src/components/Architecture/Contact/index.jsx




const Contact = ()=>{
    const { 0: formData , 1: setFormData  } = (0,external_react_.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { 0: alert , 1: setAlert  } = (0,external_react_.useState)({
        show: false,
        message: ""
    });
    const showAlert = (message)=>{
        setAlert({
            show: true,
            message
        });
    };
    (0,external_react_.useEffect)(()=>{
        let timeoutId;
        if (alert.show) {
            timeoutId = setTimeout(()=>{
                setAlert({
                    show: false,
                    message: ""
                });
            }, 7000);
        }
        return ()=>{
            clearTimeout(timeoutId);
        };
    }, [
        alert.show
    ]);
    const { 0: errMessage , 1: setErrMessage  } = (0,external_react_.useState)(null);
    const validateForm = (formValues)=>{
        if (!formValues.name || !formValues.email || !formValues.message) {
            setErrMessage("Please fill in all fields !");
            return false;
        }
        if (formValues.name.length < 5) {
            setErrMessage("Name must be at least 5 characters !");
            return false;
        }
        if (formValues.message.length < 10) {
            setErrMessage("Message must be at least 5 characters !");
            return false;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
            setErrMessage("Email is invalid");
            return false;
        }
        return true;
    };
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        //= Validate Form
        if (!validateForm(formData)) return;
        //= Clear Error Message
        setErrMessage("");
        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: "ridhosuhaebi01@gmail.com",
            message: formData.message
        };
        external_emailjs_com_.send("service_dkaz7v5", "template_viej8dw", templateParams, "TzBeyK0h9A8CNoECI").then((result)=>{
            ;
            showAlert("Yeay, successfully sent the message, We will reply to your message soon.");
        }, (error)=>{
            ;
            showAlert("ups! something when wrong.");
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact sub-bg section-padding mt-80",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-9",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont mb-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "sub-title fw-200 yellow-green-color mb-30",
                                    children: "Contact Now"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "For more information !"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "cont-info md-mb50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-30 fw-700",
                                        children: contact_namespaceObject.TN
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: contact_namespaceObject.Lk
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-10 underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: contact_namespaceObject.m7
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: contact_namespaceObject.Do
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-9",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                id: "contact-form",
                                onSubmit: handleSubmit,
                                children: [
                                    alert.show && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "alert-container",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: alert.message
                                        })
                                    }),
                                    errMessage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "messages",
                                        children: errMessage
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "controls row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_name",
                                                        type: "text",
                                                        name: "name",
                                                        placeholder: "Name",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        value: formData.name
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_email",
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        value: formData.email
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        id: "form_message",
                                                        name: "message",
                                                        placeholder: "Message",
                                                        rows: "4",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        value: formData.message
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-12 text-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    type: "submit",
                                                    className: "butn-dots",
                                                    onSubmit: handleSubmit,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Let‘s Talk"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "bord-round"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Architecture_Contact = (Contact);


/***/ }),

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ({ hideTop  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `container ${hideTop ? "" : "pt-10"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `sub-f ${hideTop ? "" : "mt-10"}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-9",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "copyrights d-flex justify-content-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\xa9 2023 ShoeClean™ All rights reserved"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ app_layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbars/AppNavbar/index.jsx
/* eslint-disable @next/next/no-img-element */ 

const Navbar = ({ links , navbarRef , theme , logoTheme , container  })=>{
    const goToSection = (e, link)=>{
        if (link == "#0") e.preventDefault();
        const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `container${container === "nft-market" ? "-xxl" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        children: [
                            logoTheme === "dark" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            }),
                            logoTheme === "light" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-light.png",
                                alt: ""
                            }),
                            !logoTheme && "ShoeClean™"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-bars"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "navbar-nav",
                        children: links && links.length && links.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link",
                                    href: link.href,
                                    "data-scroll-nav": idx,
                                    onClick: (e)=>goToSection(e, link.href),
                                    children: link.name
                                })
                            }, idx))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const AppNavbar = (Navbar);

;// CONCATENATED MODULE: ./src/layouts/app-layout.jsx
/* eslint-disable @next/next/no-css-tags */ 


//= Components

const AppLayout = ({ children , links , type , navTheme  })=>{
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
            else navbar.classList.remove("nav-scroll");
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/plugins.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/style.css"
                    }),
                    type === "mobile-app" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/mobile-app/css/mobile-app.css"
                    }) : null,
                    type === "architecture" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/arch/css/arch-style.css"
                    }) : null,
                    type === "nft-market" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/nft/css/nft.css"
                    }) : null,
                    type === "freelancer" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/freelancer/css/freelancer-style.css"
                    }) : null,
                    type === "restaurant" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/restaurant/css/restaurant-style.css"
                    }) : null
                ]
            }),
            [
                "freelancer",
                "restaurant",
                "architecture"
            ].includes(type) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AppNavbar, {
                        navbarRef: navbarRef,
                        logoTheme: navTheme,
                        theme: navTheme ? navTheme : "light",
                        links: links,
                        container: type
                    }),
                    children
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(AppNavbar, {
                            navbarRef: navbarRef,
                            logoTheme: navTheme,
                            theme: navTheme ? navTheme : "light",
                            links: links,
                            container: type
                        }),
                        children
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const app_layout = (AppLayout);


/***/ })

};
;