import React, { ReactElement } from 'react';

export { default } from './LazyLoad';

export interface ILazyLoadProps{
    component?:any;
    prefixCls?:string;
    componentName?:string;
    className?:string;
    size?:number;
    style?:React.CSSProperties;
    color?:'inherit'|'primary'|'danger'|'warning'|'info'|'success'|'default'|'second',
    thickness?:number;//线框宽度
    children?:any;
    loading?:boolean;//指定被包裹元素的加载状态
    overlayColor?:string;//蒙层的颜色
    description?:string;
    descriptionWrapperClass?:string;
} 