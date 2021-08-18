!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@parrotjs/classnames")):"function"==typeof define&&define.amd?define(["react","@parrotjs/classnames"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ParrotRcLoading=t(e.React,e.ParrotClassname)}(this,(function(e,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),l=a(t);const n=r.default.forwardRef(((e,t)=>{const a=44,{prefixCls:n="parrot",componentName:o="loading",className:s,size:i=40,style:c,color:d="primary",overlayColor:f="rgba(0,0,0,.1)",thickness:u=3.6,children:p,loading:m=!0,description:y,descriptionWrapperClass:g}=e,v=
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a}(e,["prefixCls","componentName","className","size","style","color","overlayColor","thickness","children","loading","description","descriptionWrapperClass"]),b=n+"-"+o,h=l.default(b,s),O=r.default.createElement("div",Object.assign({className:h},v,{style:Object.assign({width:i,height:i},c),ref:t}),r.default.createElement("svg",{className:l.default(`${b}-svg`),viewBox:"22 22 44 44"},r.default.createElement("circle",{className:l.default(`${b}-circle`,`${b}-indeterminate`,{[`${b}-${d}`]:d}),cx:a,cy:a,r:(a-u)/2,fill:"none",strokeWidth:u})));return p?r.default.createElement("div",{className:l.default(`${b}-container`),ref:t},m&&r.default.createElement("div",{className:l.default(`${b}-overlay`),style:{backgroundColor:f}},y?r.default.createElement("div",{className:l.default(`${b}-overlay-descriptor-container`,g)},r.default.createElement("div",null,O),r.default.createElement("div",{style:{lineHeight:"initial"}},y)):O),p):O}));return r.default.memo(n)}));
