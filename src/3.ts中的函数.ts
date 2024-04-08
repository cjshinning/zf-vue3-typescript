// 函数 对函数增加类型 对函数的返回值进行类型校验 对函数的本身来校验

// 考虑函数的参数和返回值 function关键字|表达式声明

// function sum(x: string, y: string): string {
//   return x + y;
// }

// 函数关键字，写完后会对当前函数自动推断类型
function sum1(x: number, y: string): string {
  return x + y;
}

// 1.自动根据当前等号邮编的内容，推断左边的类型
// 2.我们可以知道类型，赋予一个可以兼容这个类型的函数
const sum2 = (x: number, y: number) => {
  return x + y;
}
sum2(1, 2);

// ? 表示可传可不传
// const sum3 = (x: string, y?: string): string => {
//   return x + y;
// }
const sum3 = (x: number, y?: number, ...args: number[]): number => {
  return x + (y as number);
}

sum3(1, 2, 3, 4, 5);

// 函数重载
// 123 => [1, 2, 3]
// 'abc'=> [1, 2, 3]
// 一个方法，根据参数的不同实现不同的功能，ts的目的就是根据不同的参数返回类型
function toArray(value: string): string[]
function toArray(value: number): number[]
function toArray(value: number | string): number[] | string[] { //重载方法在真实方法的上面
  if (typeof value == 'string') {
    return value.split('');
  } else {
    return value.toString().split('').map(item => Number(item));
  }
}

let r = toArray(123);
// ts 为了安全，为了更好的提示
console.log(r);

export { }