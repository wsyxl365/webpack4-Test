import './style.css'
let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerHTML = '新增'
btn.onclick = function () {
    let div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}

function test() {
    return new Promise((resolve, reject) => {
        console.log('hello world!');
        resolve();
    })
}

test();