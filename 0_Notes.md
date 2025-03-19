Annotations
Specifies datatype of variables, parameters, function return value and other values

```typescript
     let/const/var <varible name>: <type> = <value>
```

Types:
number
string
boolean
void: absence of any value

In js we can reassign values for var and let and we can also change type while reassign but,
We cannot reassign diffrent type value to variables

```typescript
let boolVar: boolean = false;

boolVar = 10; //Error
```

---

Type Inference
Allows compiler to automatically determine the type of variable based on its value

```typescript
let str = "Hello";

str = 10; //Error
```

Any Type

```typescript
let str: any = "Hello";
str = 10;
```

---

Function
Function parameter annotation

```typescript
     function <fun_name>(<parameter_name>:<parameter_type>)
```

Also in typescript we can pass exact same number of parameters which are defined in fcuntion definition

Default parameter

```typescript
     function <fun_name>(<parameter_name>:<parameter_type>="<default_value>")

     function greet (name : string= "Anonymus")
```

Return type

```typescript
     function <fun_name>(<parameter_name>:<parameter_type>):<return_type>

     function increment(num : number) : number
     function greet(name : string) : void
```

Never keyword in function return
Its used when function is not returning anything
When variable will not have any value
Help to catch error at compile time

Use cases:
A funtion that always throws error

```typescript
function throwErr(msg: string): never {
  throw new Error(msg);
}
```

A function that has infinite loop

```typescript
function infiniteLoop(): never {
  while (true) {}
}
```

A variable that can never have a value

```typescript
let x = never;
function neverReturn(): never {
  while (true) {}
}
x = neverReturn();
```

---

Array

```typescript
//1.
const num: number[] = [1, 2, 3];
//2.
const items: Array<string> = [];
```

Multidimentional array

```typescript
const num: number[][] = [[1], [2], [3]];
```

---

Objects

types varName : (annotation / type) = {property : value}

```typescript
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Hemant",
  lastName: "Yadav",
  age: 19,
};
```

function returning object

```typescript
     const printUser(): {firstName:string; lastName:string; age:number} = {return {firstName:'Hemant', lastName:'Yadav', age:19,}; }
```

---

Type Aliases
For creating custom type
Uses existing types to define new one

```typescript
type Person = {
  name: string;
  age: number;
};

function printDetails(person: Person) {
  Console.log(`Name:${person.name}, Age:${person.age}`);
}

const myPerson: Person = { name: "Hemant", age: 22 };
printDetails(myPerson);
```

---

Optional Properties
add '?' to make that property optional

```typescript
type Person = {
  name: string;
  age: number;
  email?: string;
};
```

---

Intersection types
Add two types in one

```typescript
type Person = {
  name: string;
  age: number;
};
type Employee = {
  id: string;
  title: string;
};

type PersonEmoloyee = Person & Employee;

const PE1: PersonEmoloyee = {
  name: "Hemant",
  age: 22,
  id: "www",
  title: "www",
};
```

---

Unions
A type which have one or more possible types
Allow variable or parameter to aceept multiple types
'|'

```typescript
let vvar: string | string[];

function foo(param: string | string[]) {}

interface myInterface {
  newProp: string | number;
}

type Person = {
  name: string;
  age: number;
};
type Employee = {
  id: string;
  title: string;
};

type PersonEmoloyee = Person | Employee;

const PE1: PersonEmoloyee = {
  name: "Hemant",
  title: "www",
};

const item: number | string[] = [1, 2, 3, 4, "hi", "hello"];
```

---

Tuples
Array with fixed number of elements
Each element can have diffrent types
The order of actual values must be same as the defined in types

```typescript
let myTuple: [number, string, number] = [19, "Hwllo", 87];
Console.log(myTuple[0]);
Console.log(myTuple[1]);
```

Destructuring of tuples

```typescript
let myTuple: [number, string, number] = [19, "Hwllo", 87];
let [first, second, third] = myTuple;
Console.log(first);
Console.log(second);
Console.log(third);
```

---

Enum
Define set of named constants
Allow you to define collection of relted values
If value not assigned for key it returns the index position

```typescript
enum WeatherCondition {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}

Console.log(WeatherCondition.Rainy); // 2 i.e. index position

enum WeatherCondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

Console.log(WeatherCondition.Rainy); // rainy
```

---

OOPs

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

Access Modifiers
Public
Private
Protected

```typescript
class Person {
  public name: string;
  private age: number;
  protected call: number;

  constructor(name: string, age: number, call: number) {
    this.name = name;
    this.age = age;
    this.call = call;
  }

  getAge(): number {
    return this.age;
  }

  getCall(): number {
    return this.call;
  }
}

let p1 = new Person("hem", 12, 1234567);
console.log(p1.name);
console.log(p1.getAge());
console.log(p1.getCall());

class Employee extends Person {
  constructor(name: string, age: number, call: number) {
    super(name, age, call);
  }
}
let p11 = new Employee("he22m", 12, 1234567);
console.log(p11.getCall());
```

Getters & Setters
```typescript
class MyClass{
     private num: number;

     get getNum(): number{
          return this.num
     }

     set setNum(numVal: number){
          this.num = numVal   
     }
}
```