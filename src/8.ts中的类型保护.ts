// 类型保护主要靠的就是js的特性

// 1.typeof 区分类型保护变量
function fn(val: string | number) {
  if (typeof val === 'string') {
    val.match
  } else {
    val.toFixed
  }
}

// 2.instanceof
class Person { eat() { } }
class Dog { }
const createClass = (clazz: new () => Person | Dog) => {
  return new clazz;
}
let r = createClass(Person);
if (r instanceof Person) {
  r //Person
} else {
  r  //Dog
}

// 3.in语法
interface Fish {
  swiming: string
}
interface Bird {
  fly: string
}
function isFish(animal: Fish | Bird): animal is Fish {
  return 'swiming' in animal;
}
function getAnimalType(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal
  } else {
    animal
  }
}

// 以上情况都是通过js判断出来的，可以增加一个字面量类型进行判断，可识别类型
interface IButton1 {
  color: 'blue',
  class: string
}
interface IButton2 {
  color: 'green',
  class: string
}
function getButton(button: IButton1 | IButton2) {
  if (button.color === 'blue') {
    button
  } else {
    button
  }
}

// js语法 用来定义自己的类型
function isString(val: any): val is string {
  return Object.prototype.toString.call(val) == '[object String]';
}
let str = 1
if (isString(str)) {
  str
}

// null保护 val!=null ! ?
function getNum(val: number | null) {
  val = val || 3;
  val.toFixed //明确是数字

  function inner() { //内层函数可能会判断不正常
    // if (val !== null) {
    val?.toFixed
    // }

  }
  inner();
}

// 代码的完整性保护 主要靠never，利用never无法到达最终结果的特性，来保证代码的完整
interface ISquare {
  kind: 'square',
  width: number
}
interface IRant {
  kind: 'rant',
  width: number,
  height: number
}
interface ICircle {
  kind: 'circle',
  r: number
}

const assert = (obj: never) => { throw new Error('err') }
// 完整性保护，保证代码逻辑全部覆盖到
function getArea(obj: ISquare | IRant | ICircle) {
  switch (obj.kind) {
    case 'square':
      return obj.width * obj.width;
      break;
    case 'rant':
      return obj.width * obj.height;
      break;
    case 'circle':
      return
      break;
    default:
      assert(obj);
  }
}
getArea({ kind: 'circle', r: 10 });

// typeof instanceof in ts可是被类型is语法 完整度保护 null保护

export { }