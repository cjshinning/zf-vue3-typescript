// ts中奇特的内置类型，根据定义好的已有的类型，演变出一些其他类型
interface ICompany {
  name: string,
  address: string
}

interface IPerson {
  name?: string,
  age: number,
  company?: ICompany
}

// Partial：表示选项可以是选填的，深度递归，默认不是深度递归
// type Partial<T> = {
//   [K in keyof T]?: T[K] extends object ? Partial<T[K]> : T[K]
// }
type MyPerson = Partial<IPerson>;
// let person: MyPerson = {
//   name: 'cj',
//   age: 18,
//   company: {
//     name: 'xxx',
//     address: 'yyy'
//   }
// }

// 把所有可选的变成必填 -? 去掉可选
// type Required<T> = { [K in keyof T]-?: T[K] };
type MyRequire = Required<MyPerson>;

// Readonly
type MyReadonly = Readonly<MyPerson>;

// Pick 精挑细选  (对象里选属性)
type Pick<T, K extends keyof T> = {
  [X in K]: T[X]
}
type MyPick = Pick<IPerson, 'age' | 'company'>; //挑选属性

// Omit 忽略属性

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type MyOmit = Omit<IPerson, 'name'> & { name: string };

// let t: MyOmit = {
//   name: 'xxx',
//   age: 123
// }

// Record类型
let obj: Record<string, any> = { a: 1, b: 2 }

// map方法

function map<K extends keyof any, V, X>(obj: Record<K, V>, cb: (item: V, key: K) => X): Record<K, X> {
  let result = {} as Record<K, X>;
  for (let key in obj) {
    result[key] = cb(obj[key], key)
  }
  return result;
}

map({ name: 'cj', age: 12 }, (item, key) => {
  return '$' + item;
})


export { }