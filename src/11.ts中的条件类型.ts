// ts中的条件类型，满足某个条件给一个类型，不满足给另一个类型
interface Fish {
  name: string,
  type: '鱼'
}
interface Bird {
  name: string,
  type: '鸟'
}
interface Swimming {
  swimming: string
}
interface Sky {
  sky: string
}
type MyType<T> = T extends Bird ? Sky : Swimming; //三元表达式，如果传入的是一个联合类型，它会进行条件的分发 Fish extends Bird | Bird extends Bird
type IEnv = MyType<Fish | Bird> //Swimming | Sky 这个类型具备分发功能
// type IEnv = MyType<Fish & Bird> //这个类型不具备分发功能

// 如果用户传递了name熟悉，就必须传递age
// 其他情况下，用户可以只传递age

interface ISchool1 {
  name: string,
  age: number
}
interface ISchool2 {
  age?: number,
  size: string
}
type School<T> = T extends { name: string } ? ISchool1 : ISchool2;
type MySchool = School<{ name: 'cj' }>

let s: MySchool = {
  name: 'xxx',
  age: 18
}

// ts中内置的类型 内置类型包含条件的情况（内部用条件来实现的）
// Exclude:在多个类型中排除掉某几个类型
type Exclude<T, K> = T extends K ? never : T;
type MyExclude = Exclude<string | number | boolean, boolean>;

// Exact:多个属性中 抽离某几个
type Extract<T, K> = T extends K ? T : never;
type MyExtract = Extract<string | number | boolean, boolean>;

// 在多个类型中排除null类型

type NonNullable<T> = T extends null | undefined ? never : T;
type MyNonNullable = NonNullable<string | number | null | undefined>

// -------------------infer 推断-------------------------
function getSchool(x: string, y: string) {
  return { name: 'cj', age: 18 }
}
// infer要配合extends关键词，否则无法使用，infer有推荐类型的跟你，可以自动推断出结果
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
type MyReturnType = ReturnType<typeof getSchool>;


type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : any;
type MyParameters = Parameters<typeof getSchool>


class Person {
  constructor(name: string) { }
}
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer CP) => any ? CP : any;
type MyConstructorParameters = ConstructorParameters<typeof Person>;


type x = InstanceType<typeof Person>;

export { }