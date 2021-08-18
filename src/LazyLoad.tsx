import React , { useState,useEffect,useLayoutEffect,useMemo,useRef } from 'react';
import { isImg,isBackgroundImg,hasAttribute,DEFAULT_URL,isLoadImg } from './utils';
import useIntersectionObserver from './hook/useIntersectionObserver';
import usePrevState from './hook/usePrevState';
import { ILazyLoadProps } from '.';  

const LazyLoad=(props:ILazyLoadProps)=>{ 

    const {
       children:childrenProp,
       prefixCls:customizePrefixCls='parrot',
       component='lazyload'
    }=props; 

    const prefixCls=customizePrefixCls+'-'+component;

    const { root,visible }=useIntersectionObserver();  

    const [children,setChildren]=useState<any>();

    const prevChildren=usePrevState(children);
    
    useEffect(()=>{ 
        setChildren(childrenProp)
    },[]);

    return (
        <div className={prefixCls} ref={root}>
            {children ? children : null}
        </div>
    );
};

export default React.memo(LazyLoad);