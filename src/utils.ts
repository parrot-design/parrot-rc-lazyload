
let URL_REGULAR=/^url\(.+\)$/;
let DEFAULT_ATTRIBUTES=['background','backgroundImage'];
export const DEFAULT_URL='https://cdn.jsdelivr.net/gh/parrot-design/parrot-access-imgs/lazyload.gif';

//是否初始化了DEFAULT_URL
function hasDefaultSrc(children:any){
    return children.props.src===DEFAULT_URL;
}
//是否有src
function hasSrcImg(children:any){
    return !!children.props.src;
}
//是否有datasrc
function hasDataSrcImg(children:any){
    return !!children.props.datasrc;
}
//判断是图片
export function isImg(children:any){
    return children.type==='img';
} 
//判断是否已经加载完
export function isLoadImg(children:any){
    return hasDefaultSrc(children) && hasDataSrcImg(children);
} 
//判断是背景图
export function isBackgroundImg(children:any){
    let style=children.props.style;
    return !!style.backgroundImage || (style.background && URL_REGULAR.test(style.background));
}
//获取正确的样式
export function hasAttribute(children:any,arr=DEFAULT_ATTRIBUTES){
    let matches=Object.keys(children.props.style).reduce((total:any,current)=>{
        if(arr.indexOf(current)>-1){
            return total.concat(current);
        }
        return total;
    },[]);
    return matches[matches.length-1];
}