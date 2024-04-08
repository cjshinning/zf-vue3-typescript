// 类 最早都是用构造函数来代替的 es6类的概念（function）
// 实例属性方法 new XXX来调用，静态属性方法，原型属性和方法

// public 是属性修饰符 表示自己和子类和子类职位都可以访问到
// protected  只有自己和自己的后辈可以访问
// private  只有自己可以访问，子类和外界都不能用
// 我们可以给构造函数添加修饰符，如果被标识为protected，说明不能被new了，如果标识成private说明不能继承了，同事也不能被new
// readonly 表示仅读（类似const），如果在初始化完毕就不能再修改了，如果是对象可以更改属性

// class Pointer {
//   // x: number
//   // y: number
//   constructor(public x: number, public y: number) { //在constructor中的操作都是初始化
//     // this.x = x;
//     // this.y = y;
//   }
// }
// let pointer = new Pointer(100, 100)
// console.log(pointer);

class Animal {
  public readonly n: number = 1;
  constructor(public name: string, public age: number) {
    console.log(this.name);
  }
  static type = '哺乳动物'; //静态属性 es7语法
  // static get type() {  //属性访问器 es6语法
  //   return '哺乳动物';
  // }
  static getName() {
    return '动物';
  }
  say() {
    console.log('父');
  }
}
// console.log(Animal.type, Animal.getName());

class Cat extends Animal {
  constructor(name: string, age: number, readonly address: string) {
    super(name, age); //Animal.call(this,name,age)
    console.log(this.name);
  }
  static type = '猫科动物';
  static getName() {
    console.log(super.getName());
    return '猫';
  }
  say() {
    super.say();
  }
  private str: string = '';
  get content() {
    return this.str;
  }
  set content(newValue: string) {
    this.str = newValue
  }
  // aaaa = 1; //es7语法 ts不建议使用 会做为实例方法
}
// 静态方法可以被继承，super默认在构造函数中和静态方法中都指向自己的父类，在原型方法中super指向父类的原型
// 原型方法直接写就是原型方法
console.log(Cat.type, Cat.getName());

let cat = new Cat('Tom', 8, '美国');
// cat.addres = '上海';
// console.log(cat.name);
cat.say();
console.log(cat.content);

export { }