import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { isImg, isBackgroundImg, hasAttribute, DEFAULT_URL, isLoadImg } from './utils';
import useIntersectionObserver from './hook/useIntersectionObserver';
import usePrevState from './hook/usePrevState';
import { ILazyLoadProps } from '.';

const LazyLoad = (props: ILazyLoadProps) => {

    const {
        children: childrenProp
    } = props;


    const [children, setChildren] = useState<any>();

    React.useEffect(() => {
        setChildren(React.cloneElement(childrenProp,{src:DEFAULT_URL}))
    }, [])

    return children ? children : null
};

export default LazyLoad;