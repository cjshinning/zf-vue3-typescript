// 泛型的用处在于当我们调用的时候确定类型，而不是一开始就写好类型，类型不确定，只有执行的时候才能确定
// 声明的时候需要用<>包裹起来，传值的时候也需要
// 1.单个泛型
// function createArray<T>(times: number, value: T): Array<T> {  //根据对应参数的类型给T赋值
//   let result = []
//   for (let i = 0; i < times; i++) {
//     result.push(value);
//   }
//   return result;
// }
// let r = createArray(5, 'abc');
// interface IMyArray<T> {
//   [key: number]: T
// }
// interface ICreateArray {
//   <T>(x: number, y: T): IMyArray<T>; //interface后面的类型和函数前面的区别，如果放在函数前表示使用函数的时候确定类型，放在接口后面表示是使用接口的时候确定
// }
// // type ICreateArray = <T>(x: number, y: T) => Array<T>; //如果泛型没传参，是unknown类型
// const createArray: ICreateArray = <T>(times: number, value: T): IMyArray<T> => {
//   let result = []
//   for (let i = 0; i < times; i++) {
//     result.push(value);
//   }
//   return result;
// }
// createArray(3, 'abc');


// 元祖进行类型交换
// 2.多个泛型
// const swap = <T, K>(tuple: [T, K]): [K, T] => {
//   return [tuple[1], tuple[0]];
// }

// let r = swap(['abc', 123]);  // => [123,'abc']  能确定的只有两项


// const sum = <T extends string>(a: T, b: T): T => {  //约束对象
//   return (a + b) as T;
// }
// sum('1', '2');

// 3.泛型约束 主要强调类型中必须包含某个属性
// [1,2,3] [4,5,6]
type withLen = { length: number }
const computeArrayLength = <T extends withLen, K extends withLen>(arr1: T, arr2: K): number => {
  return arr1.length + arr2.length;
}
computeArrayLength([1, 2, 3], { length: 3 });


const getVal = <T extends object, K extends keyof T>(obj: T, key: K) => {

}
type T1 = keyof { a: 1, b: 2 };
type T2 = keyof string;
type T3 = keyof any;  //string | number | symbol

getVal({ a: 1, b: 2 }, 'b')

// 泛型可以给类来使用
class GetArrayMax<T = number>{
  public arr: T[] = [];
  add(val: T) {
    this.arr.push(val);
  }
  getMax() {
    let arr = this.arr;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i] > max ? max = arr[i] : null;
    }
    return max;
  }
}
let arr = new GetArrayMax(); //泛型只有当使用后才知道具体的类型
arr.add(1);
arr.add(2);
arr.add(3);
let r = arr.getMax();

// extends 约束 keyof 取当前类型的key typeof 取当前值的类型

interface ISchool<T = number> {
  name: T
}
type BoolSchool = ISchool<boolean>;
type NumberSchool = ISchool;


export { }