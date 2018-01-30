import * as util from 'util';
function foo(): Promise<string> {
return new Promise((resolve) => setTimeout(() =>
resolve('hello'), 1000));
}
const callbackFoo = util.callbackify(foo);
callbackFoo((err, result) => {
console.log(result);
});
const promiseFoo = util.promisify(callbackFoo);
promiseFoo().then((result) => console.log(result));
