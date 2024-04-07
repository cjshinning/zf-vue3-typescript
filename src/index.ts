// 联合类型，如果不进行初始化操作，必须要给类型，否则都是any
let numOrStr: string | number;
// 默认联合类型，在没有确定类型之前，只能调用两个类型共同方法
// 在变量确定类型后，可以设置对应的方法
numOrStr = 'abc';
numOrStr = 123;

// 如果赋予类型后，可以根据上下文自动推断对应类型的方法
const ele: HTMLElement | null = document.getElementById('app');
// ele && (ele.innerHTML = 'abc');
// as / <> 非空断言，表示这个东西一定有值，告诉ts按照我的想法来，如果后续出错自己负责，一定不为空
// ele!.innerHTML = 'abc';

// 直接强转某个类型，强制告诉人家，这个类型就是里面的某一个
let a: string | number | undefined;
(a as any) as boolean;  //双重断言，先转化成any，再转化成一个具体的类型，可能会导致类型出问题

// ? 等价于 aa && aa.xxx  链判断运算符  ？是js中就存在的
// ele?.style.color

false ?? true  //?? 表示排除 null和undefined

// 字面量类型 类型的内容是固定的 枚举
// 如果类型过于复杂，希望后续复用，可以把类型单独提取出来
type IType = 'a' | 'b' | 'c' | 'd'; //类型别名
let type: IType = 'b';
let type2: IType = 'c';

export { }