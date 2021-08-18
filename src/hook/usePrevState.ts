import React from 'react';

export default function usePrevState(state:any){

    const prevState=React.useRef(state); 

    return prevState.current;
}