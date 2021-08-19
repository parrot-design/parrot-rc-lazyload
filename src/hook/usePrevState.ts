import React,{ useEffect } from 'react';

export default function usePrevState(state:any){

    const prevState=React.useRef(state); 

    useEffect(() => { 
        prevState.current=state;
    }, [state])

    return prevState.current;
}