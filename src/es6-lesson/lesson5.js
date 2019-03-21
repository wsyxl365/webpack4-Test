{
    // 判断是否有尽
    console.log(Number.isFinite(15)); //true
    console.log('Nan', Number.isFinite(NaN)); // false
    console.log('1/0', Number.isFinite('true'/0)); //false
    // 判断是否为数
    console.log('NaN', Number.isNaN(NaN));
    console.log('0', Number.isNaN(0));
}

{
    //判断是否为整数
    console.log('25', Number.isInteger(25));
    console.log('25.0', Number.isInteger(25.0));
    console.log('25.1', Number.isInteger(25.1));
    console.log('25.1', Number.isInteger('25.1'));
}

{
    //判断幂
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);

    //判断一个数是否安全
    console.log('10', Number.isSafeInteger(10));
    console.log('10000000000000000000000000000000000000000000', Number.isSafeInteger(10000000000000000000000000000000000000000000));
}

{
    //判断小数部分的整数部分
    console.log(4.1,Math.trunc(4.1));
    console.log(4.9,Math.trunc(4.9));
}

{
    //判断正数、负数、0
    console.log('-5', Math.sign(-5));
    console.log('0', Math.sign(0));
    console.log('5', Math.sign(5));
    console.log('5x', Math.sign('5x'));
}

{
    //立方根
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}

