{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);
}

{
    let s = 'bbb_bb_b';
    let a1=/b+/g; //保留上一次匹配的位置
    let a2=/b+/y; //匹配的字符必须满足条件，要不然就是null
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky); //验证正则匹配是否开启y
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));
}
