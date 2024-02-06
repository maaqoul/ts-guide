let temperature = 25;

let welcomeMessage = "salam !!";

let isLoggedIn = true;

// exercice 2
let colors: string[] = ['black','blue'];

let userInfo: [string, number] = ["ibrahim", 27];

//exercice 3

enum Season {Spring, Summer, Autumn,Winter};

function logValue(a) {
    console.log(a);
}

function noReturn(): void {
    console.log('no return');
}


//exercice 4

function greet(name: string): string {
    return `salam, ${name}`;
}

function multiply(a: number, b: number): number {
    return a * b;
}


//exercice 5

function concatenateStrings(...strings: string[]): string {
    return strings.join(' ');
}

console.log(concatenateStrings('test','test2','test3','test4')); //console test test2 test3 test4



function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}

console.log(maxNumber(3, 7, 2, 9, 5)); // console 9



//exercice 6 && 7

interface Vehicle {
    make: string;
    model: string;
    year?: number;
    email?:string;
}

function createVehicle(vehicle: Vehicle): Vehicle {
    return vehicle;
}

function updateVehicle(vehicleinit: Vehicle,vehicleoptionalitems: Vehicle):Vehicle {
    return { ...vehicleinit, ...vehicleoptionalitems };
}

let c:Vehicle={make:'dacia',model:'logan'}
let d:Vehicle={make:'dacia',model:'duster',email:'test@test@.com'}
console.log(createVehicle(c)); // console { make: 'dacia', model: 'logan' }
console.log(updateVehicle(c,d)); // console { make: 'dacia', model: 'duster', email: 'test@test@.com' }


//exercice 8

interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle(circle: Circle, centerX: number, centerY: number): Circle {
    //circle.centerX=centerX; // hello.ts(8,12): error TS2540: Cannot assign to 'centerX' because it is a read-only property.
    //circle.centerX=centerY; //hello.ts(9,12): error TS2540: Cannot assign to 'centerX' because it is a read-only property.

    return {
        centerX: centerX,
        centerY: centerY,
        radius: circle.radius
    };
}

const t: Circle = {
    centerX: 0,
    centerY: 1,
    radius: 2
};

const movedCircle = moveCircle(t, 3, 4);
console.log(movedCircle); // console: { centerX: 3, centerY: 4, radius: 2 }
console.log(t); // console: { centerX: 0, centerY: 1, radius: 2 }


// exercice 9

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number) {
        console.log(`${this.name} dog moved ${distanceInMeters}m `);
    }
}

let dog=new Dog('messi');
let animal=new Animal('chat');

dog.move(5); //console messi  dog moved 5m
animal.move(10); //console chat moved 10m.

//exercice 10

class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let per=new Person('ibrahim');
//console.log(per.name); // console error Property 'name' is private and only accessible within class 'Person'.
console.log(per.getName()); //console : ibrahim


//exercice 11

function identity<T>(arg: T): T {
    console.log(`Type of arg : ${typeof arg}`);
    return arg;
}

const testSting : string=identity("test"); // console Type of arg : string
console.log(testSting); // console test
const testInt : number=identity(8); // console Type of arg : number
console.log(testInt); // console 8
const testBool : boolean=identity(true); // console Type of arg : boolean
console.log(testBool); // console true
const testArrayString : string[] =identity(['lundi', 'mardi']); // console Type of arg : object
console.log(testArrayString); // console [ 'lundi', 'mardi' ]
const testArrayNumber : number[] =identity([0, 1,2,3]); // console Type of arg : object
console.log(testArrayNumber); // console  [ 0, 1, 2, 3 ]
const testAny : any =identity(['test1', 1,'2',3]); // console Type of arg : object
console.log(testAny); //  console [ 'test1', 1, '2', 3 ]


// exercice 12

interface GenericIdentityFn<T> {
    (arg: T): T;
}

// Implémentation
const implementString: GenericIdentityFn<string> = function<T>(arg: T): T {
    return arg;
};
const implementNumber: GenericIdentityFn<number> = function<T>(arg: T): T {
    return arg;
};

const testString = implementString("salam");
console.log(testString); // console  : Salam
const testNumber = implementNumber(55555);
console.log(testNumber); // console  : 55555


interface GenericArray<T> {
    [index: number]: T;
    length: number;
}

const testArray: GenericArray<number> = [1, 2, 3];

console.log(testArray[0]); // console: 1
console.log(testArray.length); // console: 3

// exercice 13

// @ts-ignore
enum Response {
    Non = 0,
    Yes = 1,
}

function testResponse(response: Response): string {
    return response === Response.Yes ? "Response YES" : "Response NO";
}

console.log(testResponse(Response.Yes)); // console Response YES
console.log(testResponse(Response.Non)); // Response NO

// exercice 14
enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function testResult(status: boolean): Message {
    return status ? Message.Success : Message.Failure;
}

console.log(testResult(true)); // console: SUCCESS
console.log(testResult(false)); // console: FAILURE


//exercice 15

function padLeft(value: string, padding: string | number) {
    return padding + value;
}

console.log(padLeft("salam", " ")); // Sortie: " salam"
console.log(padLeft("salam", 4)); // Sortie: "4World"


//exercice 16


