// declare let a: string;
declare function fn(): void;
declare class Person {
  constructor(name: string)
}
declare interface tomato {
  color: string
}
declare enum Seasons {
  Spring,
  Summer
}
declare namespace A {
  const a: string //declare中的内容，不需要默认导出
}
declare module '*.vue' {
  const component: object;
  export default component
}

// declare module 'jquery' { }
declare module '*.jpg' { }


// 默认不导出 没有import和export这里的声明就是全局的

// declare 名字可能会冲突
// 接口同名，默认会合并命名空间也能合并，函数和命名空间能合并

