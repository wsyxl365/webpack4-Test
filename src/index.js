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

function getComponent() {
    return import(/* webpackChunkName:"lodash" */'lodash')
        .then(({default: _ })=>{
            let element = document.createElement('div');
            element.innerHTML = _.join(['Dell', 'Lee'], '-');
            return element;
        })
}


document.addEventListener('click', () =>{
    getComponent().then(element => {
        document.body.appendChild(element);
    })
})

