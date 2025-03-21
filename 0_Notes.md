# TypeScript Notes

## Type Annotations

TypeScript uses type annotations to specify the type of variables, parameters, and return values.

Basic syntax:

```typescript
let/const/var variableName: type = value;
```

### Basic Types

- `number`: Numeric values
- `string`: Text values
- `boolean`: True/false values
- `void`: Absence of any value

### Type Safety

In TypeScript, you cannot reassign values of different types to typed variables:

```typescript
let boolVar: boolean = false;
boolVar = 10; // Error: Type 'number' is not assignable to type 'boolean'
```

## Type Inference

TypeScript can automatically determine types based on assigned values:

```typescript
let str = "Hello"; // Type inferred as string
str = 10; // Error: Type 'number' is not assignable to type 'string'
```

### Any Type

The `any` type opts out of type checking:

```typescript
let flexible: any = "Hello";
flexible = 10; // OK - no type checking
```

## Functions

### Parameter Annotations

```typescript
function functionName(paramName: paramType): returnType {
  // Function body
}
```

### Default Parameters

```typescript
function greet(name: string = "Anonymous"): void {
  console.log(`Hello ${name}`);
}
```

### Never Type

Used for functions that never return or always throw errors:

```typescript
// Function that throws error
function throwError(message: string): never {
  throw new Error(message);
}

// Infinite loop
function infiniteLoop(): never {
  while (true) {}
}
```

## Arrays

```typescript
// Two ways to declare arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ["a", "b", "c"];

// Multidimensional arrays
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

## Objects

```typescript
// Object type annotation
const person: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
```

## Type Aliases

Create custom reusable types:

```typescript
type Person = {
  name: string;
  age: number;
  email?: string; // Optional property
};

function printPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}
```

## Advanced Types

### Intersection Types

Combine multiple types:

```typescript
type Employee = {
  id: string;
  title: string;
};

type PersonEmployee = Person & Employee;
```

### Union Types

Allow multiple type options:

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // Also valid
```

## Tuples

Fixed-length arrays with specific types:

```typescript
let userInfo: [string, number, boolean] = ["John", 30, true];
let [name, age, isAdmin] = userInfo; // Destructuring
```

## Enums

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

console.log(Status.Active); // "ACTIVE"
```

## Classes

```typescript
class Person {
  public name: string;
  private age: number;
  protected phone: number;

  constructor(name: string, age: number, phone: number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }

  getAge(): number {
    return this.age;
  }
}

// Inheritance
class Employee extends Person {
  constructor(name: string, age: number, phone: number) {
    super(name, age, phone);
  }
}
```

### Getters & Setters

```typescript
class Counter {
  private _value: number = 0;

  get value(): number {
    return this._value;
  }

  set value(newValue: number) {
    if (newValue >= 0) {
      this._value = newValue;
    }
  }
}

const Obj = new Counter();
Console.log(Obj.value); // 0
Obj.value = 11;
Console.log(Obj.value); // 11
```

---

## Interface

It spacifies the properties and methods that a class should implement
Must have all properties

Interfaces can also be used to describe the shape of function and classes

```typescript
//Interface Definition

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "hem",
  lastName: "ydv",
  age: 12,
};


//Interface for functioon
intefce MathFunction {
  (num1:number , num2:number): number;
}

const add: MathFunction = (num1, num2) => a+b;

const addition = add(1, 2);


//Interface for classses
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

class Employee implements Employee {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const employee = new Employee("John", "Doe", 30);
console.log(employee.fullName); // Output: "John Doe"
```

### Declaration Merging

TypeScipt allows you to merge multiple declarations of the same name into a single definition. This is particularly useful when working with interfaces, classes, and modules.

Declaration merging / interface extension / re-opening

Ability to extend or argument an existing declaration including interfaces.
Useful when you want to add new properties or methods to an existing type without modifying the original definition.

```typescript
interface Person {
  firstName: string;
}

interface Person {
  lastName: string;
}

const person: Person = {
  firstName: "hem",
  lastName: "ydv",
};
```

---

## Generics

Allows you to create reusable components that can work with diffrent data types while maintaining type safety.
Possible to define a generic class, interface or function.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const str = identity<string>("hem");
const num = identity<number>(11);
const bool = identity<boolean>(true);
```

Interface with generic function

```typescript
interface Dog {
  name: string;
  breed: string;
}

function uniqueFunc<T>(arg: T): T {
  return arg;
}

const dog1 = uniqueFunc<Dog>({ name: "Buddy", breed: "Labrador" }); // { name: 'Buddy', breed: 'Labrador' }
```

### IMP

```typescript
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const randomValue = obj[randomKey];
  return { key: randomKey, value: randomValue };
}

const obj = { a: 1, b: 2, c: 3 };
const randomPair = getRandomKeyValuePair(obj); // { key: 'b', value: 2 }
```

### Explaination

```typescript
function getRandomKeyValuePair<T>(obj: { [key: string]: T });
```

Here’s what’s happening:

1. Generic Type `<T>`

- `<T>` is a type parameter that acts as a placeholder for any data type.

- This makes the function work with any type of object values, instead of being limited to a specific type (like string or number).

2. Function Parameter `obj: { [key: string]: T }`

- The function takes an object where:
  - Keys are string
  - Values can be of any type T, determined when calling the function.

3. Return Type `{ key: string; value: T }`

- The function returns a randomly selected key-value pair.
- The value will have the same type T as in the input object.

Example Usage

```typescript
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const res = getRandomKeyValuePair<string>(stringObject);
console.log(res);
```

- The function is called with <string>, meaning T is inferred as string.
- So, the return type will be { key: string, value: string }.

#### Why Use Generics?

- Code Reusability: The function can be used for objects with different value types, not just strings.
- Type Safety: If you pass an object with number values, TypeScript ensures the returned value is a number.

#### Example with Different Types

_Numbers_

```typescript
const numberObject = { x: 10, y: 20, z: 30 };
const resNum = getRandomKeyValuePair<number>(numberObject);
console.log(resNum);
```

Here, `T = number`, so value will always be a number.

_Booleans_

```typescript
const boolObject = { isOn: true, isActive: false, isDone: true };
const resBool = getRandomKeyValuePair<boolean>(boolObject);
console.log(resBool);
```

Here, `T = boolean`, ensuring type safety.

#### why key is given type as string

In the function `getRandomKeyValuePair<T>(obj: { [key: string]: T })`, the key is explicitly given the type `string` because JavaScript object keys are always strings (or Symbols).

#### Explanation

Object keys are always strings (or Symbols).

- Even if you define a key as a number, JavaScript internally converts it to a string.
- Example:

```typescript
const obj = { 1: "one", 2: "two" };
console.log(Object.keys(obj)); // Output: ['1', '2']
```

Notice how the numeric keys 1 and 2 are converted to string

---

#### Eg: Generic filter function

```typescript
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item)=> condition(item));
}

const num = [1,2,3,4,5,6,7,8,9,10];
const evenNum = filterArray(num, (item) => item % 2 === 0);
console.log(evenNum); // [2, 4, 6, 8, 10]

const str = ["apple", "banana", "cherry", "date"];
const longStr = filterArray(str, (item) => item.length > 5);
console.log(longStr); // ['banana', 'cherry']

const bool = [true, false, true, false, true];
const trueBool = filterArray(bool, (item) => item === true);
console.log(trueBool); // [true, true, true]

```

### Multiple generic type peremeter
  
```typescript
function reversePair<T, U>(var1: T, var2: U): [T , U] {
  return [var1, var2];
}

const pair1 = reversePair(10, "apple"); // [10, 'apple']
```

### Generic Classes

```typescript
class Box<T>{
  private _value: T;

  constructor(value: T){
    this._value = value;
  }

  getValue(): T {
    return this._value;
  }

  setValue(newValue: T): void {
    this._value = newValue;
  }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // 10
numberBox.setValue(20);
console.log(numberBox.getValue()); // 20
```