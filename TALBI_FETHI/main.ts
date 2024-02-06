class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(theName: string) {
      super(theName);
    }
}

const dog = new Dog("bobi");
dog.move();

// Public, Private, and Protected Modifiers

class Person {
    private name: string;
    constructor(name: string) { this.name = name; }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("geek");
// console.log(person.name);

console.log(person.getName());

// Generic Functions
function identity<T>(arg: T): T {
    console.log(`Type of ${arg}: ${typeof arg}`);
    return arg;
}

let outputString = identity("geek");
let outputNumber = identity(28);
let outputBoolean = identity(true);
let outputObject = identity({ name: "geek", age: 28 });

//Generic Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity1<T>(arg: T): T {
    return arg;
}

const myIdentity: GenericIdentityFn<string> = identity1;
const myIdentityResult = myIdentity('hello');

console.log(myIdentityResult);

interface GenericArray<T> {
    items: T[];
}

const numberArray: GenericArray<number> = {
    items: [1, 2, 3]
};
//numberArray.items.push('test'); // Error!
numberArray.items.push(4);

const stringArray: GenericArray<string> = {
    items: ["hello", "world"]
};

console.log(numberArray.items);
console.log(stringArray.items);

// Enums
enum enumResponse {
    No = 0,
    Yes = 1
}

function resultResponse(person: string, message: enumResponse) {
    console.log(` ${person} a voté(e) par : ${enumResponse[message]}`);
}

resultResponse("Geek", enumResponse['Yes']); 
resultResponse("Geek", enumResponse['No']);










