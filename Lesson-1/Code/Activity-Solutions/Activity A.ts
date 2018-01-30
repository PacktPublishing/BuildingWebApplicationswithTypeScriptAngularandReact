function sum(a, b) { return a + b; }
alert(sum(5, 10)); // alerts “15”
alert(sum([], {})); // alerts string “[object Object]”
function sum(a: number, b: number) { return a + b; }
alert(sum(5, 10)); // alerts “15”, same as before
alert(sum([], {})); // now an error (“Argument of type ‘undefined []’ is not assignable to Number”)
alert(sum(…, …)); // editor now shows that parameters are of type Number while typing.
