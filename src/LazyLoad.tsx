import React, { useState } from 'react';
import { isImg, isBackgroundImg, hasAttribute, DEFAULT_URL } from './utils';
import useIntersectionObserver from './hook/useIntersectionObserver';
import usePrevState from './hook/usePrevState';
import { ILazyLoadProps } from '.';

const LazyLoad = (props: ILazyLoadProps) => {

    const {
        children: childrenProp,
        prefixCls:customizedPrefixCls='parrot',
        componentName='lazyload',
        placeholder
    } = props;

    const prefixCls=customizedPrefixCls+'-'+componentName;

    const { root,visible } = useIntersectionObserver();

    const prevVisible=usePrevState(visible);

    const [children, setChildren] = useState<any>();

    const prevChildren=usePrevState(children);

    React.useEffect(() => {  
        //图片刚加载到页面时
        if(!prevVisible && !visible){
            if(isImg(childrenProp)){
                setChildren(React.cloneElement(childrenProp,{src:DEFAULT_URL,datasrc:childrenProp.props.src}))
            }else if(isBackgroundImg(childrenProp)){ 
                setChildren(React.cloneElement(childrenProp,{
                    style:{
                        ...childrenProp.props.style, 
                        [hasAttribute(childrenProp)]:`url(${DEFAULT_URL})`
                    },
                    datasrc:childrenProp.props.style[hasAttribute(childrenProp)]})
            )}
        //当图片进入视图时
        }else if(!prevVisible && visible){
            if(isImg(childrenProp)){
                setChildren(React.cloneElement(prevChildren,{src:prevChildren.props.datasrc}))
            } else if(isBackgroundImg(childrenProp)){ 
                setChildren(React.cloneElement(prevChildren,{
                    style:{
                        ...childrenProp.props.style, 
                        [hasAttribute(childrenProp)]:prevChildren.props.datasrc
                    },
                }))
            }else{
                setChildren(childrenProp)
            }
        } 
    }, [visible,childrenProp])

    return (
        <div className={prefixCls} ref={root}>
            {children ? children : placeholder ? placeholder : <div className={`${prefixCls}-placeholder`}></div>}
        </div>
    )
};

export default LazyLoad;