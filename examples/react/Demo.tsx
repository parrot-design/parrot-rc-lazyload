import React from 'react';
import Lazy from '../../src';
import LazyLoad from 'react-lazyload';
import "./index.css";

const src = 'https://img1.baidu.com/it/u=3603159866,823086297&fm=26&fmt=auto&gp=0.jpg';

const Demo = () => {
    return (
        <>
            <Lazy>
                <img src={src} />
            </Lazy>
            {/* <Lazy>
                <img src={src} style={{ display: 'block',height:2000 }} />
            </Lazy>
            <Lazy>
                <img src={src} style={{ display: 'block',height:2000 }} />
            </Lazy> */}
        </>
    )
}

export default Demo;