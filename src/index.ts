
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
