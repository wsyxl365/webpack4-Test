// import test from './test';
// console.log(test.name);
// import _ from 'lodash'
// // import jquery from 'jquery'
// let element = document.createElement('div');
// element.innerHTML = _.join(['Dell', 'Lee'], '-');
// document.body.appendChild(element);
//
// async function getComponent() {
//     const {default:_} = await import(/* webpackChunkName:"lodash" */'lodash');
//     let element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element;
// }

// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */'lodash')
//         .then(({default: _ })=>{
//             let element = document.createElement('div');
//             element.innerHTML = _.join(['Dell', 'Lee'], '---');
//             return element;
//         })
// }
//
//
// document.addEventListener('click', () =>{
//     getComponent().then(element => {
//         document.body.appendChild(element);
//         console.log(11111);
//     })
// })

let arrTest = [1,2,3,4,5]
arrTest.map(item =>{
    return item
})

function hello() {
    return new Promise((resolve,reject)=>{
        resolve();
    })
}

hello().then(res=>{
    console.log('111111');
})
