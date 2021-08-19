import React from 'react'; 
import "./index.css";
const DEFAULT_URL='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const src = 'https://img1.baidu.com/it/u=3603159866,823086297&fm=26&fmt=auto&gp=0.jpg';

const Demo = () => {

    console.log("Render demo");

    return (
        <> 
            <img src={src} style={{height:400,width:600,marginBottom:50}} /> 
            <Demo2>
                <img src={src} style={{height:400,width:600,marginBottom:50}} />
            </Demo2>  
        </>
    )
}

const Demo2=({children:childrenProp})=>{

    const [children,setChildren]=React.useState<any>();

    React.useEffect(() => {
        setChildren(React.cloneElement(childrenProp,{src:DEFAULT_URL}))
    }, [])

    return children?children:null;
}

export default Demo;