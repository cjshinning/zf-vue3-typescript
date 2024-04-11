// ts 装包和拆包
// ref(10)=> xxx.value 在模板取值 拆包{{xxx}} 泛型

let data = {
  name: 'cj',
  age: 12
}

type Proxy<T> = {
  get(): T,
  set(value: any): void
}
type Proxify<T extends object> = {
  [K in keyof T]: Proxy<T[K]>
}

function proxify<T extends object>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>;

  for (let key in obj) {
    let value = obj[key];
    result[key] = {
      get() {
        return value
      },
      set(newValue) {
        value = newValue;
      }
    }
  }

  return result;
}
let proxyData = proxify(data);
// 为什么vue没用这种方式，需要用户学习新的api
console.log(proxyData.name.get());
proxyData.name.set('xxx');
console.log(proxyData.name.get());

function unProxify<T extends object>(obj: Proxify<T>): T {
  let result = {} as T;
  for (let key in obj) {
    let value = obj[key];
    result[key] = value.get();
  }
  return result;
}
let data2 = unProxify(proxyData);
console.log(data2);

// let data1 = {
//   name: {
//     get() {
//       return 'xxx';
//     },
//     set() {
//       // 更改属性
//     }
//   },
//   age: {
//     get() {
//       return 'xxx';
//     },
//     set() {
//       // 更改属性
//     }
//   }
// }


let person1 = {
  name: 'cj',
  age: 12,
  address: 'xxx'
}
let person2 = {
  address: 'xxx'
}
// 差集 获取两个类型的差集 exclude 在一群类型中忽略掉某个类型 和 omit 对象中忽略
type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type myDiff = Diff<typeof person1, typeof person2>;

// 交集 不是交叉类型 从一个对象中跳去某个类型
type Inter<T extends object, K extends object> = Extract<keyof T, keyof K>;
type myInter = Inter<typeof person1, typeof person2>;

type Person1 = {
  name: string,
  age: number
}

type Person2 = {
  age: string,
  address: string,
  a: string,
  b: number
}

// 两个对象合并，一般都是以后者为准，如果Person1里有的，Person2里没有的再进行添加

// 1.需要拿到多余肯定需要的
// 2.公共的以后面的为准
type Merge<T extends object, K extends object> = Diff<T, K> & Diff<K, T>;
type myMerge = Merge<Person1, Person2>

let merge: myMerge = {
  name: 'abc',
  address: 'abc',
  a: '1',
  b: 0
}

// type Merge<T extends object, K extends object> = Omit<T, keyof K> & K;


export { }