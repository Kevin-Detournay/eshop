(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"/Pty":function(e,t,n){e.exports={navBar:"navBar_navBar__kRLoF",navBar__link:"navBar_navBar__link__1l1ma"}},"5Yp1":function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y}));var r=n("nKUr"),a=n("g4pe"),i=n.n(a),o=n("Aiso"),c=n.n(o),s=n("Tred"),l=n.n(s),u=n("Z4Yb"),d=n.n(u),f=n("YFqc"),p=n.n(f),h=n("/Pty"),m=n.n(h),v=function(){return Object(r.jsxs)("nav",{className:m.a.navBar,children:[Object(r.jsx)(p.a,{href:"/",children:Object(r.jsx)("a",{className:m.a.navBar__link,children:"Acceuil"})}),Object(r.jsx)(p.a,{href:"/gallery",children:Object(r.jsx)("a",{className:m.a.navBar__link,children:"Gallerie"})}),Object(r.jsx)(p.a,{href:"/about",children:Object(r.jsx)("a",{className:m.a.navBar__link,children:"A Propos"})})]})},g="ARTISTE PEINTRE",b="Next.js Sample Website";function y(e){var t=e.children,n=e.home;return Object(r.jsxs)("div",{className:l.a.container,children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),Object(r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(b),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),Object(r.jsx)("meta",{name:"og:title",content:b}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(r.jsxs)("header",{className:l.a.header,children:[n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{priority:!0,src:"/images/profile.jpg",className:d.a.borderCircle,height:144,width:144,alt:g}),Object(r.jsx)("h1",{className:d.a.headingXl,children:g})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h2",{className:d.a.headingLg,children:Object(r.jsx)(p.a,{href:"/",children:Object(r.jsx)("a",{className:d.a.colorInherit,children:g})})})}),Object(r.jsx)(v,{})]}),Object(r.jsx)("main",{className:l.a.mainContent,children:t}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("script",{async:!0,src:"https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js"}),Object(r.jsx)("div",{hidden:!0,id:"snipcart","data-api-key":"NTZiZjlkNjEtMGQ5Yi00ZmU0LThiYWMtNDIxZTEzZWMwNDFmNjM3NDkxODUyMjE4MzE4ODU4"})]})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var u=f[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),r[u]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},Tred:function(e,t,n){e.exports={header:"layout_header__2rhWq",mainContent:"layout_mainContent__2pAB6",backToHome:"layout_backToHome__1vZsp"}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},Z4Yb:function(e,t,n){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=i.Children.only(h),_=y&&"object"===typeof y&&y.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),j=r(x,2),w=j[0],A=j[1],O=i.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);(0,i.useEffect)((function(){var e=A&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,a=l[f+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,f,p,{locale:r})}),[p,f,A,b,t,n]);var k={ref:O,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,m,v,g,b)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var M="undefined"!==typeof b?b:n&&n.locale,S=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);k.href=S||(0,o.addBasePath)((0,o.addLocale)(p,M,n&&n.defaultLocale))}return i.default.cloneElement(y,k)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),a=n("RIqP"),i=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,c=void 0!==i&&i,d=e.priority,p=void 0!==d&&d,h=e.loading,v=e.className,g=e.quality,b=e.width,j=e.height,w=e.objectFit,A=e.objectPosition,O=e.loader,k=void 0===O?x:O,M=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=n?"responsive":"intrinsic",I=!1;"unsized"in M?(I=Boolean(M.unsized),delete M.unsized):"layout"in M&&(M.layout&&(S=M.layout),delete M.layout);0;var E=!p&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(c=!0,E=!1);var z,C,N,q=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),L=r(q,2),R=L[0],D=L[1],P=!E||D,H=_(b),F=_(j),B=_(g),T={visibility:P?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:A};if("undefined"!==typeof H&&"undefined"!==typeof F&&"fill"!==S){var W=F/H,U=isNaN(W)?"100%":"".concat(100*W,"%");"responsive"===S?(z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={display:"block",boxSizing:"border-box",paddingTop:U}):"intrinsic"===S?(z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={boxSizing:"border-box",display:"block",maxWidth:"100%"},N='<svg width="'.concat(H,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:F})}else"undefined"===typeof H&&"undefined"===typeof F&&"fill"===S&&(z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Y={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};P&&(Y=function(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:m,kind:"w"};return{widths:a(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(i,r),u=l.widths,d=l.kind,f=u.length-1;return{src:s({src:t,quality:o,width:u[f]}),sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", ")}}({src:t,unoptimized:c,layout:S,width:H,quality:B,sizes:n,loader:k}));I&&(z=void 0,C=void 0,T=void 0);return s.default.createElement("div",{style:z},C?s.default.createElement("div",{style:C},N?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(N))}):null):null,s.default.createElement("img",Object.assign({},M,Y,{decoding:"async",className:v,ref:R,style:T})),p?s.default.createElement(l.default,null,s.default.createElement("link",{key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src,imagesrcset:Y.srcSet,imagesizes:Y.sizes})):null)};var o=i(n("8OQS")),c=i(n("pVnL")),s=i(n("q1tI")),l=i(n("8Kt/")),u=n("dEHY"),d=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["auto=format","fit=max","w="+r],o="";a&&i.push("q="+a);i.length&&(o="?"+i.join("&"));return"".concat(t).concat(j(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,m=h.deviceSizes,v=h.imageSizes,g=h.loader,b=h.path,y=(h.domains,[].concat(a(m),a(v)));function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=p.get(g);if(t)return t((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(g))}function j(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!o&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map}}]);