!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("intersection-observer-polyfill")):"function"==typeof define&&define.amd?define(["react","intersection-observer-polyfill"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ParrotRcLoading=t(e.React,e.IntersectionObserver)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),s=r(t);let l=/^url\(.+\)$/,c=["background","backgroundImage"];const o="https://cdn.jsdelivr.net/gh/parrot-design/parrot-access-imgs/lazyload.gif";function a(e){return"img"===e.type}function u(e){let t=e.props.style;return!!t.backgroundImage||t.background&&l.test(t.background)}function i(e,t=c){let r=Object.keys(e.props.style).reduce(((e,r)=>t.indexOf(r)>-1?e.concat(r):e),[]);return r[r.length-1]}function f(t){const r=n.default.useRef(t);return e.useEffect((()=>{r.current=t}),[t]),r.current}return t=>{const{children:r,prefixCls:l="parrot",componentName:c="lazyload",placeholder:d}=t,p=l+"-"+c,{root:b,visible:g}=function(t){const r=e.useRef(null),n=e.useRef(null),[l,c]=e.useState(!1),o=e.useCallback((e=>{let t=e[0];c(t.isIntersecting)}),[]);return e.useEffect((()=>{n.current=new s.default(o),n.current.observe(r.current)}),[]),{root:r,visible:l}}(),y=f(g),[m,v]=e.useState(),h=f(m);return n.default.useEffect((()=>{y||g?!y&&g&&(a(r)?v(n.default.cloneElement(h,{src:h.props.datasrc})):u(r)?v(n.default.cloneElement(h,{style:Object.assign(Object.assign({},r.props.style),{[i(r)]:h.props.datasrc})})):v(r)):a(r)?v(n.default.cloneElement(r,{src:o,datasrc:r.props.src})):u(r)&&v(n.default.cloneElement(r,{style:Object.assign(Object.assign({},r.props.style),{[i(r)]:`url(${o})`}),datasrc:r.props.style[i(r)]}))}),[g,r]),n.default.createElement("div",{className:p,ref:b},m||(d||n.default.createElement("div",{className:`${p}-placeholder`})))}}));
