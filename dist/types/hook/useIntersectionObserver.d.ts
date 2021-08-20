import React from 'react';
export default function useIntersectionObserver(options?: any): {
    root: React.MutableRefObject<null>;
    visible: boolean;
};
