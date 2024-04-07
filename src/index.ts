
// 1.基础类型
// 最基本的类型有 数字 字符串 布尔

// 所有的类型都在冒号后面，ts的核心一切都是以安全为准
// 什么时候可以不用类型

// number和大Number区别 js特性
let num1: number = Number(1);
let num2: Number = new Number(1);

// 最基本
let num: number = 1;
let str: string = 'cj';
let bool: boolean = true;

// 数组类型，数组的概念：一类类型的集合
const arr1: number[] = [];
const arr2: (number | string)[] = ['a', 1]; //并集的含义
// 如果数组里放的内容，就是无规律的，有规律的数组
const arr3: any[] = ['', 1, {}];
const arr4: Array<boolean> = [true, false];

// 元组 ts中自己实现的 内容固定 类型固定
const tuple: [string, boolean, number] = ['a', true, 1]; //初始化的时候必须按要求填入数据
let r = tuple.pop();
tuple.push('str');  //在放入的时候，可以放任元素定义的类型
// tuple[3] = 100; //不能通过索引更改元组

// 数据交换，会用到元组

// 枚举类型，ts最终编译成js，是没有类型的，只是在开发时使用的
// 普通美剧，异构美剧，常量美剧
const enum ROLE { //大写是规范，加上const后，不会生成一个对象（更简洁），但是不支持反举了
  USER = 'USER',
  ADMIN = 5,
  MANAGER
}
// 枚举可以支持饭局，但是限于所以，会根据上一个人的值，进行自动的推断
// console.log(ROLE.USER);
// console.log(ROLE[0]);
// console.log(ROLE.USER);

// null undefined 是任何类型的子类型，在严格模式下undefined只能赋值给undefined，null也只能赋值给null
let u: undefined = undefined;
let n: null = null;

// never 从不，表示代码无法达到终点，无法执行到结尾
// 出错、死循环、走不到的判断
function setValue(val: string) {
  if (typeof val === 'string') {

  } else {
    val //never，帮代码做完整校验
  }
}

function throwError(): never {
  throw new Error();
}

// let xx: string = throwError();

function whileTrue(): never {
  while (true) {

  }
}

// void 表示函数返回值为空，也可以描述变量，void的值只能赋值null和undefined
// 严格模式下，不能吧null赋值给void类型
function getVoid(): void {
  return undefined;
}

// 非原始数据类型
function create(obj: object) {

}
create({});
create(function () { });
create([]);

// Symbol BigInt
let s1: symbol = Symbol(1);
let s2: symbol = Symbol(2);
console.log(s1 === s2); //false

let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1 === max + 2); //true
console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2)); //false

// let name: number = undefined

// 数字 字符串 布尔 数组 元组 any never void null undefined 枚举

// 内置类型、自定义类型、高级类型

export { }  //防止模块间的数据共享类型