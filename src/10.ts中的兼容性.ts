// ts中的兼容性 我们希望可以相互赋值

// 普通类型 接口 函数 类

// 1.基本类型的兼容性 默认情况下都是定义好类型后不能复制给其他类型

type NumOrStr = number | string;
let numOrStr: NumOrStr = 'abc'; //| 表示大的类型 子类型 -> 父类型

// 检测方式，鸭子检测，只要叫声像鸭子，就是鸭子
type MyString = {
  toString(): string
}
// let str: MyString = { toString: () => 'xxx' };
let str: MyString = 'hello';  //多的条件可以赋予给少的条件，一切都是为了安全

interface IVegetables {
  color: string,
  taste: string
}
interface ITomato { //将一个值赋予给了类型，是不会出现兼容性的，要求必须满足这个接口，两个接口之前是存在兼容性问题的
  color: string,
  taste: string,
  size: string
}
// let vegetable!:IVegetables;
// let tomato: ITomato;

// let tomato: IVegetables = {
// color: 'red',
// taste: 'sweet'
// }

let vegetable: IVegetables;
let tomato = {
  color: 'red',
  taste: 'sweet',
  size: 'big'
}
vegetable = tomato; //通过接口的兼容性，可以处理赋予多的属性

// 3.函数的兼容性 （1）函数的参数和（2）返回值  类型的兼容 类型的复制可能会发生兼容性处理
// let sum1 = (a: string, b: string): string => a + b;
// let sum2 = (a: string): string => a;

// 针对参数的个数和返回值
// sum1 = sum2;  //我允许你传递两个参数，但是你传递了一个，安全；我只能传递一个，你给了我两个，不安全

function forEach<T>(arr: T[], cb: (item: T, inex: number, arr: T[]) => void) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
forEach([1, 2, 3, 4], (item, index, arr) => {
  console.log(item);
})

type sum1 = (a: string, b: string) => string | number;
type sum2 = (a: string) => number
let sum1!: sum1;
let sum2!: sum2;
sum1 = sum2;

// 针对参数的类型做兼容处理
// 逆变和协变 函数的参数是逆变的，可以传父类 函数的返回值是协变的，可以返回子类
// 传逆父 返协子
// 参数可以传父类，返回值可以传子类

class Parent {
  money!: string
}
class Child extends Parent {
  house!: string
}
class Grandson extends Child {
  eat!: string
}

// 对于参数而言，儿子可以处理钱和房子
function getFn(cb: (person: Child) => Child) {

}
// Child Parent => Child Grandson
// getFn((person: Child) => new Child);
getFn((person: Parent) => new Grandson);

let fn: (person: Child) => Child = (person: Parent) => new Grandson;
fn(new Child);

function getType(cb: (val: string | number) => string) {

}



export { }