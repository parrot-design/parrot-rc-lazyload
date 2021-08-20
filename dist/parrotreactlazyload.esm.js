import React, { useRef, useState, useCallback, useEffect } from 'react';
import IntersectionObserver from 'intersection-observer-polyfill';

let URL_REGULAR = /^url\(.+\)$/;
let DEFAULT_ATTRIBUTES = ['background', 'backgroundImage'];
const DEFAULT_URL = 'https://cdn.jsdelivr.net/gh/parrot-design/parrot-access-imgs/lazyload.gif';
//判断是图片
function isImg(children) {
    return children.type === 'img';
}
//判断是背景图
function isBackgroundImg(children) {
    let style = children.props.style;
    return !!style.backgroundImage || (style.background && URL_REGULAR.test(style.background));
}
//获取正确的样式
function hasAttribute(children, arr = DEFAULT_ATTRIBUTES) {
    let matches = Object.keys(children.props.style).reduce((total, current) => {
        if (arr.indexOf(current) > -1) {
            return total.concat(current);
        }
        return total;
    }, []);
    return matches[matches.length - 1];
}

function useIntersectionObserver(options) {
    const root = useRef(null);
    const observer = useRef(null);
    const [visible, setVisible] = useState(false);
    const handleVisible = useCallback((entries) => {
        let entry = entries[0];
        setVisible(entry.isIntersecting);
    }, []);
    useEffect(() => {
        observer.current = new IntersectionObserver(handleVisible);
        observer.current.observe(root.current);
    }, []);
    return {
        root,
        visible
    };
}

function usePrevState(state) {
    const prevState = React.useRef(state);
    useEffect(() => {
        prevState.current = state;
    }, [state]);
    return prevState.current;
}

const LazyLoad = (props) => {
    const { children: childrenProp, prefixCls: customizedPrefixCls = 'parrot', componentName = 'lazyload', placeholder } = props;
    const prefixCls = customizedPrefixCls + '-' + componentName;
    const { root, visible } = useIntersectionObserver();
    const prevVisible = usePrevState(visible);
    const [children, setChildren] = useState();
    const prevChildren = usePrevState(children);
    React.useEffect(() => {
        //图片刚加载到页面时
        if (!prevVisible && !visible) {
            if (isImg(childrenProp)) {
                setChildren(React.cloneElement(childrenProp, { src: DEFAULT_URL, datasrc: childrenProp.props.src }));
            }
            else if (isBackgroundImg(childrenProp)) {
                setChildren(React.cloneElement(childrenProp, {
                    style: Object.assign(Object.assign({}, childrenProp.props.style), { [hasAttribute(childrenProp)]: `url(${DEFAULT_URL})` }),
                    datasrc: childrenProp.props.style[hasAttribute(childrenProp)]
                }));
            }
            //当图片进入视图时
        }
        else if (!prevVisible && visible) {
            if (isImg(childrenProp)) {
                setChildren(React.cloneElement(prevChildren, { src: prevChildren.props.datasrc }));
            }
            else if (isBackgroundImg(childrenProp)) {
                setChildren(React.cloneElement(prevChildren, {
                    style: Object.assign(Object.assign({}, childrenProp.props.style), { [hasAttribute(childrenProp)]: prevChildren.props.datasrc }),
                }));
            }
            else {
                setChildren(childrenProp);
            }
        }
    }, [visible, childrenProp]);
    return (React.createElement("div", { className: prefixCls, ref: root }, children ? children : placeholder ? placeholder : React.createElement("div", { className: `${prefixCls}-placeholder` })));
};

export default LazyLoad;
