// let arr = ["hello", "world"];
// let map = arr[Symbol.iterator]();
// console.log(map.next());
// console.log(map.next());
// console.log(map.next());

// let obj = {
//     start: [1,3,2],
//     end: [7,9,8],
//     ["helloworld"](){
//       console.log("哈哈哈")
//     },
//     [Symbol.iterator](){
//         let self = this;
//         let index = 0;
//         let arr = self.start.concat(self.end);
//         let len = arr.length;
//         return {
//             next() {
//                 if(index<len) {
//                     return {
//                         value: arr[index++],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         value: arr[index++],
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(obj, obj.helloworld());
// for(let key of obj) {
//     console.log(key);
// }

// let tell = function* (){
//     yield 'a';
//     yield 'b';
//     return 'c';
// }
//
// let k = tell();
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());
//
// let obj = {};
// obj[Symbol.iterator] = function * () {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// for(let key of obj) {
//     console.log(key);
// }

let state = function * () {
    while (true) {
        yield 'A';
        yield 'b';
        yield 'c';
    }
}
let states = state();
console.log(states.next());
console.log(states.next());
console.log(states.next());
console.log(states.next());
console.log(states.next());

// let nihao = async function () {
//         return await '1';
//         await '2';
//         await '3';
// }
// console.log(nihao());
// console.log(nihao().then(res=>{
//     console.log(res);
// }));
// console.log(nihao());
// console.log(nihao());
// console.log(nihao());
// console.log(nihao());

let draw = function (count) {
    // 具体抽奖逻辑
    console.info(`剩余${count}次`)
}
let residue = function * (count) {
    while (count > 0) {
        count--;
        yield draw(count);
    }
}

let start = residue(5);
let btn = document.createElement("button");
btn.id='start';
btn.textContent = '抽奖';
document.body.appendChild(btn);
document.getElementById('start').addEventListener('click', function() {
    start.next();
}, false)

// 长轮询
let ajax = function* () {
    yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({code: 0})
        }, 200)
    })
}

let pull = function () {
    let genertaor = ajax();
    let step = genertaor.next();
    step.value.then(d=>{
        if(d.code != 0) {
            setTimeout(()=>{
                console.log('wait');
                pull();
            },1000)
        } else {
            console.log(d);
        }
    })
}

pull();