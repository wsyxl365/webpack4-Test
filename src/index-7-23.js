// import React, { Component } from 'react'
// import ReactDom from 'react-dom'
//
// export default class App extends Component {
//     render() {
//         return (
//             <div>world hello!111111122222333</div>
//         )
//     }
// }
//
// ReactDom.render(<App/>, document.getElementById('root'));
//
// if(module.hot){
//     // accept itself
//     module.hot.accept()
// }

// Tree Shaking 只支持 ES Module
// import { add } from './math.js'
// //
// // add(1,6);
// import _ from "lodash"

// 第一种方式
// main.js 2mb
// 打包文件会很大，加载时间会长
// main.js 2mb
// 重新访问我们的页面，又要加载2mb的内容
// console.log(_.join(['a','b','c'], "****"));
//此处省略10万行业务逻辑
// console.log(_.join(['a','b','c'], "-----"));

// 第二种方式
// main.js 被拆成lodash.js(1mb), main.js(1mb)
// 当页面业务逻辑发生变化时，只要加载main.js即可(lodash.js在缓存中不需要重新加载)

// Code Splitting
// import _ from 'lodash';
// import './asyncFun'
// 重新访问我们的页面，又要加载2mb的内容
//console.log(_.join(['a','b','c'], "****"));
//此处省略10万行业务逻辑
//console.log(_.join(['a','b','c'], "-----"));

// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */'lodash')
//         .then(({default: _ })=>{
//             let element = document.createElement('div');
//             element.innerHTML = _.join(['Dell', 'Lee'], '-');
//             return element;
//         })
// }
//
// getComponent().then(element => {
//     document.body.appendChild(element);
// })
// import _ from 'lodash'
// let element = document.createElement('div');
// element.innerHTML = _.join(['Dell', 'Lee'], '-');
// document.body.appendChild(element);
