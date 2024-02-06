// Basic Types
const temperature: number = 26;
const welcomeMessage: string = 'Hello!';
const isLoggedIn: boolean = true;

// Arrays and Tuples
const colors: string[] = ['red', 'green', 'blue'];
const userInfo: [string, number] = ['anass', 27];

// Enum, Any, Void, Null, and Undefined
enum Season {Spring, Summer, Autumn, Winter};
const sp: Season = Season.Spring;
const su: Season = Season.Summer;
const a: Season = Season.Autumn;
const w: Season = Season.Winter;

const logValue:any = 10;
console.log(logValue);

function noReturn(): void {
    console.log('No return');
}

// Functions
function greet(name: string): string {
    return 'Hello '+ name;
}

function multiply(x:number, y:number): number {
    return x * y;
}

// Optional and Default Parameters
function createEmail(to:string, subject?:string) {
    if(!subject) subject = 'No Subject'
}

function add(x: number, y: number, z?:number): number {
    if(z) return x + y + z;
    else return x + y;
}

// Rest Parameters
function concatenateStrings(...strings: string[]): string {
    return strings.join('');
}

function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}

// Interfaces
interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicle: Vehicle) {
    console.log("the Car "+vehicle.make+", model "+vehicle.model+"was made in rhe year "+vehicle.year);
}

// Optional Properties
interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

interface addEmail extends Person {
    email?: string;
}

function updatePerson(config: Person): {age: number} {
    let newPerson = {firstName: 'anass', lastName: 'salama', age: 27}
    if(config.age) {
        newPerson.age = config.age;
    }
    return newPerson;
}

// Readonly Properties
interface Circle {
    readonly centerX: number,
    readonly centerY: number,
    readonly radius: number,
}

function moveCircle(circle: Circle, newCenterX: number, newCenterY: number): Circle {
    const newCircle: Circle = {
        centerX: newCenterX,
        centerY: newCenterY,
        radius: circle.radius
    }

    return newCircle;
}