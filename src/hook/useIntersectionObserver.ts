
import React ,{ useEffect,useRef,useState,useCallback } from 'react';
import IntersectionObserver from 'intersection-observer-polyfill';

export default function useIntersectionObserver(options?:any){

    const root=useRef(null);

    const observer=useRef<any>(null);

    const [visible,setVisible]=useState(false);

    const handleVisible=useCallback((entries:any)=>{
        let entry=entries[0]; 
        console.log("entry.isIntersecting",entry)
        setVisible(entry.isIntersecting);
    },[]);

    useEffect(()=>{
        observer.current=new IntersectionObserver(handleVisible);
        observer.current.observe(root.current);
    },[]);

    return {
        root,
        visible
    }
}