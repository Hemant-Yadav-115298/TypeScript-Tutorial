// let str = "hemant"
// // str=10
// let num = 19
// console.log(str);
// console.log(typeof str);

// function increment(num: number) {
//     return num + 1;
// }

// const res = increment(5)


// OOPs

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
        return this.age
    }

    getCall(): number {
        return this.call
    }
}

let p1 = new Person("hem", 12, 1234567);
console.log(p1.name)
console.log(p1.getAge())
console.log(p1.getCall());


class Employee extends Person{
    constructor(name: string, age: number, call: number) {
        super(name,age,call)
    }

}
let p11 = new Employee("he22m", 12, 1234567);
console.log(p11.getCall());




