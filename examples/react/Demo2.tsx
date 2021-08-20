import React from 'react';
import Lazy from '../../src';

const url1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201509%2F23%2F20150923195106_nHKML.thumb.700_0.jpeg&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632016723&t=dadc885810261ce9c89b3ea814053d1b';
const url2 = 'https://img0.baidu.com/it/u=597322882,3979563159&fm=15&fmt=auto&gp=0.jpg';
const url3 = 'https://img0.baidu.com/it/u=3535486195,2859311265&fm=15&fmt=auto&gp=0.jpg';
const url4 = 'https://img2.baidu.com/it/u=881124525,886726031&fm=15&fmt=auto&gp=0.jpg';

const App = () => {

  return (
    <>
      <div style={{ height: 400,width:300,backgroundImage:`url("${url1}")`}}> 
      </div>
      <div style={{ height: 400,width:300,backgroundImage:`url("${url2}")` }}> 
      </div>
      <div style={{ height: 400,width:300,backgroundImage:`url("${url3})"` }}> 
      </div>
      <div style={{ height: 400,width:300,backgroundImage:`url("${url4})"` }}> 
      </div>
 
      <Lazy>
        <div style={{ height: 400,width:300,backgroundColor:'yellow' }} />
      </Lazy>
    </>
  )
}

export default App;