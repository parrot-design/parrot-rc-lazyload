'use strict';

var React = require('react');
var classnames = require('@parrotjs/classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const Loading = React__default['default'].forwardRef((props, ref) => {
    const SIZE = 44;
    const { prefixCls: customizedPrefixCls = 'parrot', componentName = 'loading', className, size = 40, style, color = 'primary', overlayColor = "rgba(0,0,0,.1)", thickness = 3.6, children, loading = true, description, descriptionWrapperClass } = props, restProps = __rest(props, ["prefixCls", "componentName", "className", "size", "style", "color", "overlayColor", "thickness", "children", "loading", "description", "descriptionWrapperClass"]);
    const prefixCls = customizedPrefixCls + '-' + componentName;
    const classes = classnames__default['default'](prefixCls, className);
    const loadingNode = (React__default['default'].createElement("div", Object.assign({ className: classes }, restProps, { style: Object.assign({ width: size, height: size }, style), ref: ref }),
        React__default['default'].createElement("svg", { className: classnames__default['default'](`${prefixCls}-svg`), viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}` },
            React__default['default'].createElement("circle", { className: classnames__default['default'](`${prefixCls}-circle`, `${prefixCls}-indeterminate`, {
                    [`${prefixCls}-${color}`]: color
                }), cx: SIZE, cy: SIZE, r: (SIZE - thickness) / 2, fill: "none", strokeWidth: thickness }))));
    return children ?
        React__default['default'].createElement("div", { className: classnames__default['default'](`${prefixCls}-container`), ref: ref },
            loading && (React__default['default'].createElement("div", { className: classnames__default['default'](`${prefixCls}-overlay`), style: { backgroundColor: overlayColor } }, description ? (React__default['default'].createElement("div", { className: classnames__default['default'](`${prefixCls}-overlay-descriptor-container`, descriptionWrapperClass) },
                React__default['default'].createElement("div", null, loadingNode),
                React__default['default'].createElement("div", { style: { lineHeight: "initial" } }, description))) : loadingNode)),
            children) :
        loadingNode;
});
var Loading$1 = React__default['default'].memo(Loading);

module.exports = Loading$1;
