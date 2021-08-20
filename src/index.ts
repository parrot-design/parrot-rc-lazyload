import React, { ReactElement } from 'react';

export { default } from './LazyLoad';

export interface ILazyLoadProps{ 
    prefixCls?:string;
    componentName?:string; 
    placeholder?:any;
    children?:any;
} 