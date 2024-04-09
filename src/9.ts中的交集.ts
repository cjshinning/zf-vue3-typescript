// 交叉类型 = 交集（和数学中的有点差异）

interface Person1 {
  handsome: string,
  // a: string  
}
interface Person2 {
  height: string,
  // a: number
}
type Person3 = Person1 & Person2; //并集 & 交集

let person: Person3 = {
  handsome: '帅',
  height: '高'
}

// 在原有的类型基础上想去扩展属性，可以用交叉类型
// ts的核心是为了安全，交叉类型可以赋予给没有交叉之前的类型
let p1: Person1 = person;
let p2: Person2 = person;

// 类型兼容
// 交叉类型，可以不生成一个新的类型，作为临时类型来使用

type Person4 = Person2 & { money: string };
let p4: Person4 = {
  height: '高',
  money: '有钱'
}

// 方法mixin默认推断会生成交集
function mixin<T extends object, K extends object>(o1: T, o2: K): T & K {
  return { ...o1, ...o2 };
}
// 后续真正合并熟悉的时候，要以一方为基础，不会直接香蕉，可能会导致never情况
let r = mixin({ name: 'cj', age: 18 }, { address: 'xxx', name: 12 })


export { }