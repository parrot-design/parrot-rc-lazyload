import React from 'react';
export { default } from './Loading';
export interface ILoadingProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    size?: number;
    style?: React.CSSProperties;
    color?: 'inherit' | 'primary' | 'danger' | 'warning' | 'info' | 'success' | 'default' | 'second';
    thickness?: number;
    children?: any;
    loading?: boolean;
    overlayColor?: string;
    description?: string;
    descriptionWrapperClass?: string;
}
