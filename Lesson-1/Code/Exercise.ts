function add(a, b): Promise<number> {
return new Promise(function(resolve) {
setTimeout(function() {
resolve(a + b);
}, 500);
})
}
async function main() {
console.log(await add(5, 2));
}
