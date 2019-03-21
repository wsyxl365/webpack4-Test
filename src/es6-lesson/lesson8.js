{
    //声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4);
}

{
    let a1=Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    //obj.abc = 'xxxx';
    console.log(obj)
    // for in 和 let of 拿不到Symbol属性
    Object.getOwnPropertySymbols(obj).forEach(item=>{
        console.log(obj[item]);
    })

    Reflect.ownKeys(obj).forEach(item=>{
        console.log('ownkeys', item, obj[item]);
    })
}

{
    let compose = (f, g) => (x => f(g(x)));

    let add1 = x => x + 1;
    let mul5 = x => x * 5;
    console.log("compose",compose(mul5, add1)(2))
}