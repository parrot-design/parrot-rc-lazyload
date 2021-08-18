
let URL_REGULAR=/^url\(.+\)$/;
let DEFAULT_ATTRIBUTES=['background','backgroundImage'];
export const DEFAULT_URL='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

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
    return style.backgroundImage || (style.background && URL_REGULAR.test(style.background));
}
//获取正确的样式
export function hasAttribute(style:any,arr=DEFAULT_ATTRIBUTES){
    let total=Object.keys(style).reduce((total:any,current)=>{
        if(arr.indexOf(current)>-1){
            return total.concat(current);
        }
    },[]);
    return total[total.length-1];
}