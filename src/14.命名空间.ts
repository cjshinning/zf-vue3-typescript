// 命名空间 js中是默认没有的  最早实现命名空间
// 命名空间解决的问题：命名冲突，（调用过长的问题，可能还是会重名问题）
// ts自己实现了命名空间
// 内部模块，使用命名空间来声明，解决同一个文件下的命名冲突问题，注意module在使用的时候，最终还是希望写好namspace，后面有场景只有使用mdoule关键字
// 命名空间就是通过自治性函数来实现的，我们一般写代码不会使用
// let obj1 = {
//   person1() {

//   }
// }
// let obj2 = {
//   person1() {

//   }
// }

namespace Home1 {
  // export class Dog { } //命名空间的内容，需要导出
  export const b = 'abc';
  export namespace Garden {
    export const a = '花园';
  }
}

namespace Home1 {
  export class Dog { }
  export const a = 'abc'
}

// 两个重名的命名空间会合并，但是合并后重名的会报错
// module
// 命名空间可以进行无线嵌套

// Home1.Dog
// Home2.a

// namespace / module 内部模块
// 外部模块 import export

export { }