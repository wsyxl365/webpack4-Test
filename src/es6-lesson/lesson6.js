{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr', arr);

    let empty = Array.of();
    console.log('empty', empty);
}

{
    //集合转换成数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(item=>{
        console.log(item.textContent);
    });

    //映射
    console.log(Array.from([1,3,5], function (item) {
        return item * 2;
    }))
}

{
    //fill-填充数组
    console.log('fill-7', [1,'a',undefined].fill(7));
    // fill-pos
    console.log('fill,pos', ['a','b','c'].fill(7,1,3));
}

{
    // keys values entries
    for(let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    for(let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }

    for(let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}

{
    //复制 替换
    console.log([1,2,3,4,5,6].copyWithin(0,3,5));
}

{
    //查找
    console.log([1,2,3,4,5,6].find(item=>{
        return item > 3;
    }))

    console.log([1,2,3,4,5,6].findIndex(item=>{
        return item > 3;
    }))
}

{
    //  NaN也可以处理
    console.log('number', [{"name": 2},2,NaN].includes(item=>{
        return item === "name"
    }));
}