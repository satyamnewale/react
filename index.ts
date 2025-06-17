// type Person = {
//     name : string ;
// };

// const person:Person = {
//     name : " John",
// };

// console.log(person.name);

//? annotations : help catch error, used to specify data type of var, para, fun return value and other type of value.

// let myVar : type = value;
//           ---------------

// eg
let myName: string = "Shree";
myName = "sham";
// myName = 12 ;   // throws error
// console.log(myName);

// similar for number , boolean ,string

let myNum: Number = 100;
// myNum = true;  // gives error
// myNum = "one"; // error

let tsHard: boolean = false;

//? type inference :feature in typescript that allows compiler to automatically determine type of variable based on its value. means if u declare var without explicitly specify type, ts will try to infer type based on value you assign to it.

// here we're inference the value

const tech = "sham"; //its declared as string
const tech2 = true; // boolean
const tech3 = 100; // num

// tech = 100 ; // not assignable
// tech = true; // not assignable
// tech = "ram" ; // (allowed) assignable

console.log(typeof tech);
console.log(typeof tech2);
console.log(typeof tech3);

//? anytype : special that can be used to represent any type.when used with the variable ts allows it to have any type and disable type checking for that variable.
//! warning :over use can lead to bug and should be used sparing and always check type of variable before using any type , useful only in few way and may not useful if typechecking in compulsory.

// let color: any = " red";
// color = 20;
// color = true ;
// color(); // here it not gives any error but it give error like "color is not a function"

//? fuctions
//regular
function addOne(num: number) {
  return num + 1;
}

const res = addOne(3);
console.log(res);

function addname(num: string) {
  return num;
}

const res1 = addname("ram");
console.log(res1);

// arrow fun

const num = (x: number, y: number) => x * y;
console.log(num(2, 4));

const name1 = (x: string, y: string) => x + y;
console.log(name1("hari", " om"));

//default parameter

function name2(person: string = "hello world") {
  return person;
}

console.log(name2());

// regular function : return value type

function name3(person: string = " hii"): string {
  return person;
}

console.log(name3());

const double = (x: number): number => x * x;
console.log(double(3));

//? void : type (function) that not return any value

function print(message: string): void {
  console.log(`hii there im ${message}`);
  // return mesaage ; // when hover it will show return type
}
//! never use always return something;

//? never : used to indicate that function will not return anything or that a var can never have value
// when use :function that always throws error , function gives infinite loop , a variable that can never have any value

//? array :
//declare ; two types
const number: number[] = [1, 2, 3, 4, 5];
// not allowed const number : number[] = [1,2,"string", true] // where as in js its allowed
const names: Array<string> = ["om", "sham", "ram"]; // less used

// names.push(12) // not allowed

// for 2d

const mixed2d: (number | string)[][] = [
  [1, "apple"],
  ["banana", 2],
];
const fixed2d: [number, string][] = [
  [1, "om"],
  [2, "sham"],
];

//? object

const person: { firstName: string; lastNmae: string; age?: number } = {
  //'?' helps if whether we have to declare age or not depents on user
  firstName: "om",
  lastNmae: "sham",
};

console.log(person);

type Person1 = {
  firstName: string;
  age: number;
};

type PartialUser = Partial<Person1>; // { name?: string; age?: number }
type ReadonlyUser = Readonly<Person1>; // Cannot be changed

function printA(person: Person1): string {
  return `name: ${person.firstName} age: ${person.age}`;
}

const myPerson: Person1 = { firstName: "alice", age: 34 };
console.log(printA(myPerson));

const printB = (person: Person1): string => {
  return `name: ${person.firstName + ".B"} age: ${person.age + 12}`;
};

console.log(printB(myPerson));

//? omit
type User = { name: string; age: number };
type UpdatedUser = Omit<User, "age"> & {
  age1: number;
  isAdult: boolean;
};

const data: UpdatedUser = {
  name: "om",
  age1: 10,
  isAdult: true,
};

console.log(data);

//? intersect &
type details = { address: string; id: number };

type Employe = User & details;

const shree: Employe = {
  name: "shree",
  age: 20,
  address: " pune",
  id: 10,
};

console.log(shree);

//? union | ( its like this or that :helps var to accept multiple types)

const id: string | number = 10;
console.log(id);

//objects

type ID = string | number;
type User1 = {
  id: ID;
  name: string;
};
type User2 = {
  id: ID;
  name: string;
};
const user1: User1 | User2 = {
  id: 10,
  name: "ram",
};
console.log(user1);

// in array
const arr: (string | number)[] = [1, 2, 3, "ram"];
console.log(arr);

// function
function addOne1(num: number): number | string {
  return num + 1;
}

console.log(addOne1(10));

const addOne2 = (num: number): number | string => num + 1;
console.log(addOne2(10));

//? type assertion: used to specify a more specific type of a value

const num1 = 10 as unknown as string;
console.log(num1);

//? literal type: literal type is a type that is exactly the same as the value it is assigned to

type Sizes = "small" | "medium" | "large";
// Size = "big" not allowed
const shirtSize: Sizes = "small";

//? enum: enum is a way to create a set of named constants that can be used to represent a fixed set of values

enum Size {
  Small = 1,
  Medium = "ram",
  Large = 20,
}
const shirtSize1: Size = Size.Small;
console.log(shirtSize1);

//? tuples: tuples are arrays with a fixed length and elements of different types and can be accessed by index or destructuring. its unique feature is that its elements can be of different types and can be accessed by index.

let myTuple: [number, string?] = [10, "hello world"];
// let myTuple: [number, string] = ["hello world", 10] // not allowed

//? classes

//! access modifier
// public: can be accessed from anywhere
// private: can be accessed only from inside the class
// protected: can be accessed only from inside the class and its subclasses

//code

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person("John");
console.log(person1.name);

// private

class Person2 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person2 = new Person2("John");
//   console.log(person2.name); cannot be accessed

//? generics : generics are a way to create reusable components that can work with different types of data. its allow us to create components that can work with any type of data.
// T is a generic type parameter that is used to specify the type of data that the component works with.
// <T> is a generic type parameter.

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("hello"));

// big example

class Stack<T> {
  private store: T[] = [];

  push(item: T): void {
    this.store.push(item);
  }

  pop(): T | undefined {
    return this.store.pop();
  }
}

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop());

//? hirerarchy

class Animal {
  name?: string;
}

class Dog extends Animal {
  breed?: string;
}

const dog = new Dog();
dog.name = "Fido";
dog.breed = "Labrador";

//? interface : interface is a way to create a new type that can be used to describe the shape of an object. its allow us to create a new type that can be used to describe the shape of an object.

interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "John",
  age: 30,
};

// can be extended
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

// interface can have method byut not defined in it
interface Per {
  readonly name: string;
  age: number;
  greet(): void;
}

const personZ: Per = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};


interface Song{
  title: string;
  artist: string;
  duration: number;
  printInfo(title: string , artist: string): string;
}

const song1: Song = {
  title: "song1",
  artist: "artist1",
  duration: 10,
  printInfo(title: string, artist: string) {
    return `${title} by ${artist}`;
  },
};

console.log(song1.printInfo(song1.title , song1.artist));

// generic
function uniqueDataTypesFunc<t1, t2>(data: t1, data2: t2): [t1, t2] {
  return [data, data2];
}

console.log(uniqueDataTypesFunc<string, number>("hello", 10));