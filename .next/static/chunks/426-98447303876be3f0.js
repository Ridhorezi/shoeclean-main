(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{9101:function(e,t,r){"use strict";r.d(t,{lW:function(){return i}});const n={_origin:"https://api.emailjs.com"},o=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class a{constructor(e){this.status=e.status,this.text=e.responseText}}const u=(e,t,r={})=>new Promise(((o,u)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new a(e);200===t.status||"OK"===t.text?o(t):u(t)})),i.addEventListener("error",(({target:e})=>{u(new a(e))})),i.open("POST",n._origin+e,!0),Object.keys(r).forEach((e=>{i.setRequestHeader(e,r[e])})),i.send(t)})),i=(e,t,r,a)=>{const i=a||n._userID;o(i,e,t);const l={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:r};return u("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,a=r(7273).Z,u=o(r(7294)),i=r(6273),l=r(2725),c=r(3462),s=r(1018),f=r(7190),d=r(1210),p=r(8684),y={};function v(e,t,r,n){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;y[t+"%"+r+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var r,o=e.href,b=e.as,h=e.children,m=e.prefetch,g=e.passHref,O=e.replace,j=e.shallow,_=e.scroll,C=e.locale,w=e.onClick,M=e.onMouseEnter,x=e.onTouchStart,L=e.legacyBehavior,P=void 0===L?!0!==Boolean(!1):L,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=h,!P||"string"!==typeof r&&"number"!==typeof r||(r=u.default.createElement("a",null,r));var R=!1!==m,S=u.default.useContext(c.RouterContext),T=u.default.useContext(s.AppRouterContext);T&&(S=T);var k,I=u.default.useMemo((function(){var e=n(i.resolveHref(S,o,!0),2),t=e[0],r=e[1];return{href:t,as:b?i.resolveHref(S,b):r||t}}),[S,o,b]),D=I.href,A=I.as,U=u.default.useRef(D),Z=u.default.useRef(A);P&&(k=u.default.Children.only(r));var q=P?k&&"object"===typeof k&&k.ref:t,H=n(f.useIntersection({rootMargin:"200px"}),3),N=H[0],B=H[1],K=H[2],V=u.default.useCallback((function(e){Z.current===A&&U.current===D||(K(),Z.current=A,U.current=D),N(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[A,q,D,K,N]);u.default.useEffect((function(){var e=B&&R&&i.isLocalURL(D),t="undefined"!==typeof C?C:S&&S.locale,r=y[D+"%"+A+(t?"%"+t:"")];e&&!r&&v(S,D,A,{locale:t})}),[A,D,B,C,R,S]);var G={ref:V,onClick:function(e){P||"function"!==typeof w||w(e),P&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!f})};s?u.default.startTransition(d):d()}}(e,S,D,A,O,j,_,C,Boolean(T),R)},onMouseEnter:function(e){P||"function"!==typeof M||M(e),P&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),!R&&T||i.isLocalURL(D)&&v(S,D,A,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof x||x(e),P&&k.props&&"function"===typeof k.props.onTouchStart&&k.props.onTouchStart(e),!R&&T||i.isLocalURL(D)&&v(S,D,A,{priority:!0})}};if(!P||g||"a"===k.type&&!("href"in k.props)){var z="undefined"!==typeof C?C:S&&S.locale,J=S&&S.isLocaleDomain&&d.getDomainLocale(A,z,S.locales,S.domainLocales);G.href=J||p.addBasePath(l.addLocale(A,z,S&&S.defaultLocale))}return P?u.default.cloneElement(k,G):u.default.createElement("a",Object.assign({},E,G),r)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!u,s=n(o.useState(!1),2),f=s[0],d=s[1],p=n(o.useState(null),2),y=p[0],v=p[1];o.useEffect((function(){if(u){if(c||f)return;if(y&&y.tagName){var e=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=i.get(n)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(y,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!f){var n=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(n)}}}),[y,c,r,t,f]);var b=o.useCallback((function(){d(!1)}),[]);return[v,f,b]};var o=r(7294),a=r(9311),u="function"===typeof IntersectionObserver,i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),o=n.default.createContext(null);t.AppRouterContext=o;var a=n.default.createContext(null);t.LayoutRouterContext=a;var u=n.default.createContext(null);t.GlobalLayoutRouterContext=u;var i=n.default.createContext(null);t.TemplateContext=i},1664:function(e,t,r){e.exports=r(8418)},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})},797:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})}}]);