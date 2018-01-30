// x.ts
import { one, add, Lorem } from './y';
console.log(add(one, 2));

var lorem = new Lorem();
console.log(lorem.name);

// y.ts
export var one = 1;
export function add(a: number, b: number) {
  return a + b;
}
export class Lorem {
  name = "ipsum";
}
