!function(t){function e(e){for(var n,r,i=e[0],u=e[1],l=0,c=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(_&&_(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0};n.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=function(t){return n.p+""+({2:"route-home"}[t]||t)+".chunk."+{2:"0606b"}[t]+".js"}(t);var _=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;_.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",_.name="ChunkLoadError",_.type=r,_.request=i,n[1](_)}o[t]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/abudhabi-toronto-time-converter/",n.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var _=u;n(n.s="mdyV")}({QfWi:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var _=i[1].split("&"),c=0;c<_.length;c++){var a=_[c].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),s=0;s<f;s++)if(e[s]&&":"===e[s].charAt(0)){var p=e[s].replace(/(^:|[+*?]+$)/g,""),d=(e[s].match(/[+*?]+$/)||m)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),y=t[s]||"";if(!y&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(y),h||v){u[p]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(_).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function _(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:C).pathname||"")+(t.search||"")}function a(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),g&&g[e]?g[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=k.length;r--;)k[r](t);return e}function s(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return s(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(s(e))return d(t)}}while(e=e.parentNode)}}function v(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var r=n.__k;if(r){Array.isArray(r)||(r=[r]);var o=r.indexOf(t);-1===o&&(o=r.length);for(var i=o;i--;){var u=r[i],l=u&&u.__e||v(u,!0);if(l)return l}}return e?void 0:v(n)}}n.r(e);var y=n("hosL"),m={},g=null,b=[],k=[],C={},x=!1,O=function(t){function e(e){t.call(this,e),e.history&&(g=e.history),this.state={url:e.url||c()},x||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){f(c())})),addEventListener("click",h)),x=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(y.k)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;g&&(this.unlisten=g.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(y.c)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(y.k)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(y.a);O.subscribers=k,O.getCurrentUrl=c,O.route=a,O.Router=O,O.Route=function(t){return Object(y.e)(t.component,t)},O.Link=function(t){return Object(y.e)("a",r({onClick:p},t))},O.exec=o;var P=function(){return Object(y.g)("header",null)},S="/".concat("abudhabi-toronto-time-converter"),j={},w=function(t){function e(){var e=this;y.a.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(y.g)(n,t);var r=v(e.__v),o=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return o&&Object(y.g)(o.localName,{dangerouslySetInnerHTML:j})}}var n;return e.preload=t,(e.prototype=new y.a).constructor=e,e}((function(t){n.e(2).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){return Object(y.g)("div",{id:"app"},Object(y.g)(P,null),Object(y.g)(O,null,Object(y.g)(w,{path:"/".concat(S)})))}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++E:o};return null==o&&null!=M.vnode&&M.vnode(i),i}function l(){return{current:null}}function _(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function s(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||R!==M.debounceRendering)&&((R=M.debounceRendering)||W)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?a(i):u,i.__h),x(n,i),i.__e!=u&&f(i)))}))}function d(t,e,n,r,o,i,l,c,f,s){var p,d,v,m,g,b,k,x=r&&r.__k||H,O=x.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(_,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[p])||v&&m.key==v.key&&m.type===v.type)x[p]=void 0;else for(d=0;d<O;d++){if((v=x[d])&&m.key==v.key&&m.type===v.type){x[d]=void 0;break}v=null}C(t,m,v=v||N,o,i,l,c,f,s),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=h(m,f,t):f=y(t,m,v,x,g,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=t&&(f=a(v))}for(n.__e=b,p=O;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=a(r,p+1)),S(x[p],x[p]));if(k)for(p=0;p<k.length;p++)P(k[p],k[++p],k[++p])}function h(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?h(r,e,n):y(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,_;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,_=0;(l=l.nextSibling)&&_<r.length;_+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||K.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](M.event?M.event(t):t)}function k(t){this.l[t.type+!0](M.event?M.event(t):t)}function C(t,e,n,o,i,u,l,a,f){var s,p,h,v,y,m,g,b,k,C,x,P=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(f=n.__h,a=e.__e=n.__e,e.__h=null,u=[a]),(s=M.__b)&&s(e);try{t:if("function"==typeof P){if(b=e.props,k=(s=P.contextType)&&o[s.__c],C=s?k?k.props.value:s.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?e.__c=p=new P(b,C):(e.__c=p=new c(b,C),p.constructor=P,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,P.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(s=M.__r)&&s(e),p.__d=!1,p.__v=e,p.__P=t,s=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=s&&s.type===_&&null==s.key?s.props.children:s,d(t,Array.isArray(x)?x:[x],e,n,o,i,u,l,a,f),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=O(n.__e,e,n,o,i,u,l,f);(s=M.diffed)&&s(e)}catch(t){e.__v=null,(f||null!=u)&&(e.__e=a,e.__h=!!f,u[u.indexOf(a)]=null),M.__e(t,e,n)}}function x(t,e){M.__c&&M.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){M.__e(t,e.__v)}}))}function O(t,e,n,r,i,u,l,_){var c,f,s,p=n.props,h=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((c=u[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),u=null,_=!1}if(null===v)p===h||_&&t.data===h||(t.data=h);else{if(u=u&&L.call(t.childNodes),f=(p=n.props||N).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!_){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,h,p,i,_),s)e.__k=[];else if(y=e.props.children,d(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&a(n,0),_),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);_||("value"in h&&void 0!==(y=h.value)&&(y!==p.value||y!==t.value||"progress"===v&&!y)&&g(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function P(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){M.__e(t,n)}}function S(t,e,n){var r,i;if(M.unmount&&M.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||P(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){M.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&S(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function w(t,e,n){var r,o,u;M.__&&M.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(_,null,[t]),o||N,N,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?L.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),x(u,t)}function U(t,e){w(t,e,U)}function A(t,e,n){var o,i,l,_=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:_[l]=e[l];return arguments.length>2&&(_.children=arguments.length>3?L.call(arguments,2):n),u(t.type,_,o||t.key,i||t.ref,null)}function T(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(s)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.d(e,"j",(function(){return w})),n.d(e,"h",(function(){return U})),n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return _})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return T})),n.d(e,"k",(function(){return v})),n.d(e,"i",(function(){return M}));var L,M,E,D,W,R,I,N={},H=[],K=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=H.slice,M={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},E=0,c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),s(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},c.prototype.render=_,D=[],W="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.g,i=r.j,u=r.h,l=function(t){return t&&t.default?t.default:t},_=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(_(n.p)+"sw.js"),"function"==typeof l(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e},f=e.url?_(e.url):"";(u&&f===_(location.pathname)?u:i)(o(t,{CLI_DATA:a}),document.body,c)}()}}});
//# sourceMappingURL=bundle.46c7b.js.map