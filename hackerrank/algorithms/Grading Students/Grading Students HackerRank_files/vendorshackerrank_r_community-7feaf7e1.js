(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{"1GBj":function(t,e,n){var o=n("vlbB");t.exports=function(t,e){var n=-1,r=t.length,i=r-1;for(e=void 0===e?r:e;++n<e;){var u=o(n,i),l=t[u];t[u]=t[n],t[n]=l}return t.length=e,t}},"4Oe1":function(t,e,n){var o=n("YO3V");t.exports=function(t){return o(t)?void 0:t}},"9WAK":function(t,e,n){var o=n("Il6v"),r=n("OVaF"),i=n("Z0cm");t.exports=function(t){return(i(t)?o:r)(t)}},FkOY:function(t,e,n){},HLqC:function(t,e,n){var o=n("R5Y4"),r=n("mv/X"),i=n("ZCgT");t.exports=function(t){return function(e,n,u){return u&&"number"!=typeof u&&r(e,n,u)&&(n=u=void 0),e=i(e),void 0===n?(n=e,e=0):n=i(n),u=void 0===u?e<n?1:-1:i(u),o(e,n,u,t)}}},Il6v:function(t,e,n){var o=n("Q1l4"),r=n("1GBj");t.exports=function(t){return r(o(t))}},J2iB:function(t,e){t.exports=function(t){return null==t}},JELi:function(t,e,n){var o=n("KwMD"),r=n("ut/Y"),i=n("Sxd8"),u=Math.max,l=Math.min;t.exports=function(t,e,n){var a=null==t?0:t.length;if(!a)return-1;var f=a-1;return void 0!==n&&(f=i(n),f=n<0?u(a+f,0):l(f,a-1)),o(t,r(e,3),f,!0)}},JmpY:function(t,e,n){var o=n("eUgh");t.exports=function(t,e){return o(e,(function(e){return t[e]}))}},LlRK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n("cDcd"),a=(o=l)&&o.__esModule?o:{default:o};function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=86400,p=function(t){function e(){var t,n,o;f(this,e);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=o=c(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),o.isStillMounted=!1,o.tick=function(t){if(o.isStillMounted&&o.props.live){var e=new Date(o.props.date).valueOf(),n=Date.now(),r=Math.round(Math.abs(n-e)/1e3),i=r<60?1e3:r<3600?6e4:r<s?36e5:0,u=Math.min(Math.max(i,1e3*o.props.minPeriod),1e3*o.props.maxPeriod);u&&(o.timeoutId=setTimeout(o.tick,u)),t||o.forceUpdate()}},c(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),u(e,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(t){this.props.live===t.live&&this.props.date===t.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var t=this.props,e=t.date,n=(t.formatter,t.component),o=(t.live,t.minPeriod,t.maxPeriod,t.title),u=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["date","formatter","component","live","minPeriod","maxPeriod","title"]),l=new Date(e).valueOf(),f=Date.now(),c=Math.round(Math.abs(f-l)/1e3),p=l<f?"ago":"from now",d=c<60?[Math.round(c),"second"]:c<3600?[Math.round(c/60),"minute"]:c<s?[Math.round(c/3600),"hour"]:c<604800?[Math.round(c/s),"day"]:c<2592e3?[Math.round(c/604800),"week"]:c<31536e3?[Math.round(c/2592e3),"month"]:[Math.round(c/31536e3),"year"],v=i(d,2),h=v[0],m=v[1],y=void 0===o?"string"==typeof e?e:new Date(e).toISOString().substr(0,16).replace("T"," "):o;return"time"===n&&(u.dateTime=new Date(e).toISOString()),a.default.createElement(n,r({},u,{title:y}),this.props.formatter(h,m,p,l))}}]),e}(l.Component);p.displayName="TimeAgo",p.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:function(t,e,n){return 1!==t&&(e+="s"),t+" "+e+" "+n}},e.default=p},OVaF:function(t,e,n){var o=n("1GBj"),r=n("P/G1");t.exports=function(t){return o(r(t))}},"P/G1":function(t,e,n){var o=n("JmpY"),r=n("7GkX");t.exports=function(t){return null==t?[]:o(t,r(t))}},Puqe:function(t,e,n){var o=n("eUgh"),r=n("OBhP"),i=n("S7Xf"),u=n("4uTw"),l=n("juv8"),a=n("4Oe1"),f=n("xs/l"),c=n("G6z8"),s=f((function(t,e){var n={};if(null==t)return n;var f=!1;e=o(e,(function(e){return e=u(e,t),f||(f=e.length>1),e})),l(t,c(t),n),f&&(n=r(n,7,a));for(var s=e.length;s--;)i(n,e[s]);return n}));t.exports=s},R5Y4:function(t,e){var n=Math.ceil,o=Math.max;t.exports=function(t,e,r,i){for(var u=-1,l=o(n((e-t)/(r||1)),0),a=Array(l);l--;)a[i?l:++u]=t,t+=r;return a}},S9lL:function(t,e,n){t.exports=n("zt9T")},V9xz:function(t,e){t.exports=function(t,e){return t>e}},WjpJ:function(t,e,n){var o=n("HLqC")();t.exports=o},YO3V:function(t,e,n){var o=n("NykK"),r=n("LcsW"),i=n("ExA7"),u=Function.prototype,l=Object.prototype,a=u.toString,f=l.hasOwnProperty,c=a.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=o(t))return!1;var e=r(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==c}},ZDp4:function(t,e){t.exports=function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}},"bt/X":function(t,e,n){var o=n("hypo"),r=n("UMY1"),i=Object.prototype.hasOwnProperty,u=r((function(t,e,n){i.call(t,n)?t[n].push(e):o(t,n,[e])}));t.exports=u},jB5C:function(t,e){function n(t,e){var n=t["page"+(e?"Y":"X")+"Offset"],o="scroll"+(e?"Top":"Left");if("number"!=typeof n){var r=t.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function o(t){return n(t)}function r(t){return n(t,!0)}function i(t){var e=function(t){var e,n,o,r=t.ownerDocument,i=r.body,u=r&&r.documentElement;return n=(e=t.getBoundingClientRect()).left,o=e.top,{left:n-=u.clientLeft||i.clientLeft||0,top:o-=u.clientTop||i.clientTop||0}}(t),n=t.ownerDocument,i=n.defaultView||n.parentWindow;return e.left+=o(i),e.top+=r(i),e}var u,l=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),a=/^(top|right|bottom|left)$/,f="left";function c(t,e){for(var n=0;n<t.length;n++)e(t[n])}function s(t){return"border-box"===u(t,"boxSizing")}"undefined"!=typeof window&&(u=window.getComputedStyle?function(t,e,n){var o="",r=t.ownerDocument;return(n=n||r.defaultView.getComputedStyle(t,null))&&(o=n.getPropertyValue(e)||n[e]),o}:function(t,e){var n=t.currentStyle&&t.currentStyle[e];if(l.test(n)&&!a.test(e)){var o=t.style,r=o[f],i=t.runtimeStyle[f];t.runtimeStyle[f]=t.currentStyle[f],o[f]="fontSize"===e?"1em":n||0,n=o.pixelLeft+"px",o[f]=r,t.runtimeStyle[f]=i}return""===n?"auto":n});var p=["margin","border","padding"];function d(t,e,n){var o,r={},i=t.style;for(o in e)r[o]=i[o],i[o]=e[o];for(o in n.call(t),e)i[o]=r[o]}function v(t,e,n){var o,r,i,l=0;for(r=0;r<e.length;r++)if(o=e[r])for(i=0;i<n.length;i++){var a;a="border"===o?o+n[i]+"Width":o+n[i],l+=parseFloat(u(t,a))||0}return l}function h(t){return null!=t&&t==t.window}var m={};function y(t,e,n){if(h(t))return"width"===e?m.viewportWidth(t):m.viewportHeight(t);if(9===t.nodeType)return"width"===e?m.docWidth(t):m.docHeight(t);var o="width"===e?["Left","Right"]:["Top","Bottom"],r="width"===e?t.offsetWidth:t.offsetHeight,i=(u(t),s(t)),l=0;(null==r||r<=0)&&(r=void 0,(null==(l=u(t,e))||Number(l)<0)&&(l=t.style[e]||0),l=parseFloat(l)||0),void 0===n&&(n=i?1:-1);var a=void 0!==r||i,f=r||l;return-1===n?a?f-v(t,["border","padding"],o):l:a?f+(1===n?0:2===n?-v(t,["border"],o):v(t,["margin"],o)):l+v(t,p.slice(n),o)}c(["Width","Height"],(function(t){m["doc"+t]=function(e){var n=e.document;return Math.max(n.documentElement["scroll"+t],n.body["scroll"+t],m["viewport"+t](n))},m["viewport"+t]=function(e){var n="client"+t,o=e.document,r=o.body,i=o.documentElement[n];return"CSS1Compat"===o.compatMode&&i||r&&r[n]||i}}));var b={position:"absolute",visibility:"hidden",display:"block"};function g(t){var e,n=arguments;return 0!==t.offsetWidth?e=y.apply(void 0,n):d(t,b,(function(){e=y.apply(void 0,n)})),e}function w(t,e,n){if("object"!=typeof e){if(void 0===n)return u(t,e);"number"==typeof n&&(n+="px"),t.style[e]=n}else for(var o in e)w(t,o,e[o])}function x(t,e){for(var n in e)t[n]=e[n];return t}c(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);m["outer"+e]=function(e,n){return e&&g(e,t,n?0:1)};var n="width"===t?["Left","Right"]:["Top","Bottom"];m[t]=function(e,o){if(void 0===o)return e&&g(e,t,-1);if(e){u(e);return s(e)&&(o+=v(e,["padding","border"],n)),w(e,t,o)}}}));var T=t.exports={getWindow:function(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},offset:function(t,e){if(void 0===e)return i(t);!function(t,e){"static"===w(t,"position")&&(t.style.position="relative");var n,o,r=i(t),u={};for(o in e)n=parseFloat(w(t,o))||0,u[o]=n+e[o]-r[o];w(t,u)}(t,e)},isWindow:h,each:c,css:w,clone:function(t){var e={};for(var n in t)e[n]=t[n];if(t.overflow)for(n in t)e.overflow[n]=t.overflow[n];return e},mix:x,scrollLeft:function(t,e){if(h(t)){if(void 0===e)return o(t);window.scrollTo(e,r(t))}else{if(void 0===e)return t.scrollLeft;t.scrollLeft=e}},scrollTop:function(t,e){if(h(t)){if(void 0===e)return r(t);window.scrollTo(o(t),e)}else{if(void 0===e)return t.scrollTop;t.scrollTop=e}},merge:function(){for(var t={},e=0;e<arguments.length;e++)T.mix(t,arguments[e]);return t},viewportWidth:0,viewportHeight:0};x(T,m)},mRsi:function(t,e,n){var o=n("XGnz");t.exports=function(t){return(null==t?0:t.length)?o(t,1/0):[]}},"mVx/":function(t,e,n){var o=n("XKAG")(n("JELi"));t.exports=o},"mv/X":function(t,e,n){var o=n("ljhN"),r=n("MMmD"),i=n("wJg7"),u=n("GoyQ");t.exports=function(t,e,n){if(!u(n))return!1;var l=typeof e;return!!("number"==l?r(n)&&i(e,n.length):"string"==l&&e in n)&&o(n[e],t)}},q92V:function(t,e,n){var o=n("dunj"),r=n("V9xz"),i=n("zZ0H");t.exports=function(t){return t&&t.length?o(t,i,r):void 0}},qCJc:function(t,e,n){"use strict";e.__esModule=!0,e.default=u;var o=i(n("cDcd")),r=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=(t.width||36)+"px",n=(t.height||30)+"px",r=parseInt(n.replace("px",""))/2+"px",i=t.isOpen||!1,u=t.strokeWidth||2,l="-"+u/2+"px",a=t.animationDuration||"0.4",f=function(t,e,n){return"translate3d(0,"+(t?r:e)+",0) rotate("+(t?n+"deg":"0")+")"},c={container:{width:e,height:n,position:"relative",transform:"rotate("+(t.rotate||0)+"deg)"},lineBase:{display:"block",height:u+"px",width:"100%",background:t.color||"#000",transitionTimingFunction:"ease",transitionDuration:a+"s",borderRadius:(t.borderRadius||0)+"px",transformOrigin:"center",position:"absolute"},firstLine:{transform:f(i,0,45),marginTop:l},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:a/4+"s",opacity:i?"0":"1",top:r,marginTop:l},thirdLine:{transform:f(i,n,-45),marginTop:l}};return o.default.createElement("div",{style:c.container,onClick:t.menuClicked},o.default.createElement("span",{style:Object.assign({},c.lineBase,c.firstLine)}),o.default.createElement("span",{style:Object.assign({},c.lineBase,c.secondLine)}),o.default.createElement("span",{style:Object.assign({},c.lineBase,c.thirdLine)}))}u.propTypes={isOpen:r.default.bool.isRequired,menuClicked:r.default.func.isRequired,width:r.default.number,height:r.default.number,strokeWidth:r.default.number,rotate:r.default.number,color:r.default.string,borderRadius:r.default.number,animationDuration:r.default.number}},v8eK:function(t,e,n){var o=n("XGnz"),r=n("EA7m"),i=n("LGYb"),u=n("3L66"),l=r((function(t){return i(o(t,1,u,!0))}));t.exports=l},vlbB:function(t,e){var n=Math.floor,o=Math.random;t.exports=function(t,e){return t+n(o()*(e-t+1))}},zt9T:function(t,e,n){var o=n("jB5C");t.exports=function(t,e,n){n=n||{},9===e.nodeType&&(e=o.getWindow(e));var r=n.allowHorizontalScroll,i=n.onlyScrollIfNeeded,u=n.alignWithTop,l=n.alignWithLeft;r=void 0===r||r;var a,f,c,s,p,d,v,h,m,y,b=o.isWindow(e),g=o.offset(t),w=o.outerHeight(t),x=o.outerWidth(t);b?(v=e,y=o.height(v),m=o.width(v),h={left:o.scrollLeft(v),top:o.scrollTop(v)},p={left:g.left-h.left,top:g.top-h.top},d={left:g.left+x-(h.left+m),top:g.top+w-(h.top+y)},s=h):(a=o.offset(e),f=e.clientHeight,c=e.clientWidth,s={left:e.scrollLeft,top:e.scrollTop},p={left:g.left-(a.left+(parseFloat(o.css(e,"borderLeftWidth"))||0)),top:g.top-(a.top+(parseFloat(o.css(e,"borderTopWidth"))||0))},d={left:g.left+x-(a.left+c+(parseFloat(o.css(e,"borderRightWidth"))||0)),top:g.top+w-(a.top+f+(parseFloat(o.css(e,"borderBottomWidth"))||0))}),p.top<0||d.top>0?!0===u?o.scrollTop(e,s.top+p.top):!1===u?o.scrollTop(e,s.top+d.top):p.top<0?o.scrollTop(e,s.top+p.top):o.scrollTop(e,s.top+d.top):i||((u=void 0===u||!!u)?o.scrollTop(e,s.top+p.top):o.scrollTop(e,s.top+d.top)),r&&(p.left<0||d.left>0?!0===l?o.scrollLeft(e,s.left+p.left):!1===l?o.scrollLeft(e,s.left+d.left):p.left<0?o.scrollLeft(e,s.left+p.left):o.scrollLeft(e,s.left+d.left):i||((l=void 0===l||!!l)?o.scrollLeft(e,s.left+p.left):o.scrollLeft(e,s.left+d.left)))}}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/vendors~hackerrank_r_community-7feaf7e1.js.map