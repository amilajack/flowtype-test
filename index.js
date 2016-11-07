// @flow

const foo = 'foo';
const bar: string = 'bar';
const count: number = 3;

console.log(`${foo}${bar}`.repeat(count)); // foobarfoobarfoobar 
console.log(foo, bar, count); // foo bar 3
