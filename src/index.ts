// interface 描述对象的形状和结构，可以给数据增加类型
// type的方式，通过别名来重新定义类型

// interface 可以被类实现和继承，type 没有这个功能
// type 可以使用联合类型，interface 不能使用联合类型

// 1）如何用接口描述对象类型，如果有联合类型，就使用type
// type IObj = { name: string, age: number } | string;

interface IObj {
  name: string;
  age: number;
}

const getObj = (obj: IObj) => {

}

getObj({ name: 'cj', age: 18 });

// 2）描述函数类型
// interface ISum {
//   (a: string, b: string): string
// }
type ISum = (a: string, b: string) => string;
const sum: ISum = (a: string, b: string) => {
  return a + b;
}

// 3）希望写个计数器的例子，每次调用函数就累加1
interface ICount {  //接口中的混合类型
  (): number;
  count: number;
}
const fn: ICount = (() => { //函数返回函数，一般要表示函数的返回类型
  return ++fn.count
}) as ICount
fn.count = 0;

console.log(fn());  // 1
console.log(fn());  // 2

// 4）接口的特性
// interface IVegetables {
//   color: string;
//   taste: string;
// }

// 4.1）直接断言，断言后可以直接使用，要保证接口中限制的数据必须有
// const tomato: IVegetables = {
//   color: 'red',
//   taste: 'sweet',
//   size: 'big'
// } as IVegetables;

// 4.2）接口的合并
// interface IVegetables {
//   size: string;
// }
// const tomato: IVegetables = {
//   color: 'red',
//   taste: 'sweet',
//   size: 'big'
// }

// 4.3）单独写一个tomato接口，继承蔬菜接口
// interface ITomato extends IVegetables{  //接口继承，ts里面的
//   size:string;
// }
// const tomato: ITomato = {
//   color: 'red',
//   taste: 'sweet',
//   size: 'big'
// }

// 4.4）可选属性，可以通过?来实现
// interface IVegetables {
//   color: string;
//   taste: string;
//   [key: string]: any; //任意接口，可多填
// }
// const tomato: IVegetables = {
//   color: 'red',
//   taste: 'sweet',
//   id: 1,
//   1: 1
// }

// 4.5）可索引接口
// interface ILikeArray {
//   [key: number]: any
// }
// let arr: ILikeArray = [1, 2, 3];
// let arr1: ILikeArray = { 1: 1, 2: 2 };

// 把一个对象赋值给一个接口，要满足接口中的所有属性
// 如果多出来的属性，可以采用断言、可选、任意接口

// 接口中的类型，可以通过类型别名的方式拿出来，但是只能用[]
// type MyType = { key: string, value: string };
// interface IArr {
//   arr: MyType[],
//   a: {
//     n: MyType
//   }
// }
// type My = IArr['a']['n'];

// 6）接口实现 接口可以被类实现 接口中的方法都是抽象（没有具体实现）的
interface Ispeakable {
  name: string,
  // 用接口来形容类的时候，void表示不关心返回值
  speak(): void //描述当前实例上的方法，或者原型的方法
}
interface IChineseSpeakable {
  speakChinese(): void
}
class Speaker implements Ispeakable, IChineseSpeakable {  //类本身需要实现接口中的方法
  speakChinese(): void {
    throw new Error('Method not implemented.');
  }
  name!: string;
  // speak: () => void;
  // constructor() {
  //   this.speak = function () {

  //   }
  // }
  speak(): string {
    return 'xxx';
  }

}
let s = new Speaker();
s.speak()

// 7）抽象类，不能被new，可以被继承
abstract class Animal { //只有类被标记成abstract，属性才可以描述成abstract的
  abstract name: string //没有具体事项，需要子类实现
  eat() {
    console.log('eat');
  }
  abstract drink(): void
}
class Cat extends Animal {
  drink(): void {
    console.log('Method not implemented.');
  }
  name: string = 'a';
}


export { }