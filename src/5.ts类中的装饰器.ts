// 装饰器 是一个实验性的语法，后面会有改动，vue2刚开始就是用的装饰器
// 装饰器的作用就是扩展类，不能修饰函数，洋葱模型

function addSay1(val: any) {
  console.log(val);
  return function (target: any) {
    console.log(1);
  }
}
function addSay2(val: any) {
  console.log(val);
  return function (target: any) {
    console.log(2);
  }
}
function addSay3(val: any) {
  console.log(val);
  return function (target: any) {
    console.log(3);
  }
}

// @addSay1('a1')
// @addSay2('a2')
// @addSay3('a3')

function eat(target: any) { // target=类
  target.prototype.eat = function () {
    console.log('eat');
  }
}

function toUpperCase(target: any, key: string) {  //target=>类的原型，key就是修饰的属性
  let val: string = '';
  Object.defineProperty(target, key, {
    get() {
      return val.toUpperCase();
    },
    set(newVal: string) {
      console.log(newVal);
      val = newVal;
    }
  })
}

function doubble(num: number) {
  return function (target: any, key: string) { //target=>类
    let v = target[key];
    Object.defineProperty(target, key, {
      get() {
        return num * v;
      }
    })
  }
}

function Enum(x: boolean) {
  return function (target: any, key: string, descritor: PropertyDescriptor) {  // target => 原型
    descritor.enumerable = false;
  }
}

function params(target: any, key: string, index: number) {  // target => 原型，drink index=0
  console.log(key, index);
}

// @eat
class Person {
  // eat!:()=>void
  @toUpperCase
  public name: string = 'cj';

  @doubble(2)
  static age: number = 18;

  @Enum(false)
  drink(@params content: any) {

  }
}
let p = new Person();
console.log(p.name);
console.log(p)

// addSay1(addSay2(addSay3(Person)));

export { }