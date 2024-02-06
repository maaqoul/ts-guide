const isLoggedIn: boolean = true;
const welcomeMessage: string = 'Hello TS'
const temperature: number = 35


let colors: string[] = ['red', 'blue', 'black'];
let userInfo: [string, number] = ['Fethi', 99];

enum season{Spring, Summer, Autumn, Winter};
let s:season = season.Autumn;

let logValue: any = null;
console.log(logValue);
logValue = "Log";
console.log(logValue);

function noReturn () {
    console.log('No return');
}


function greet(name: string): string {
    return `Hello ${name};`
}

function multiply(number1: number, number2: number): number {
    return number1 * number2;
}

function createEmail(to: string, subject = "No Subject"): string {
    return `To: ${to}. Subject: ${subject}`;
}

function add (x: number, y: number, z?:number): number {
    if (z) {
        return x * y * z;
    }

    return x*y;
}

function concatenateStrings(...strings: string[]): string {
    return strings.join('');
}

function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}

/******************************************************** */
interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicle: Vehicle): Vehicle {
    return vehicle;
}

let myCar = createVehicle({
    make: 'BMW',
    model: 'X5',
    year: 2022
});

console.log(createVehicle(myCar));


/******************************************************** */
interface Person {
    name: string;
    age: number;
    email?: string;
  }
  
  function updatePerson(person: Person, updates: Partial<Person>): Person {
      return { ...person, ...updates };
  }
  
  
  const person: Person = {
    name: "Fethi",
    age: 99,
  };
  
  const updatedPerson = updatePerson(person, { age: 28, email: "fethi@email.com" });
  
  console.log(updatedPerson);

/******************************************************** */
interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}
// Cannot assign to 'centerX' because it is a read-only property.ts
//Cannot assign to 'centerY' because it is a read-only property.ts
/*
function moveCircleError(circle: Circle, deltaX: number, deltaY: number): Circle {
    circle.centerX += deltaX;
    circle.centerY += deltaY;
  
    return circle;
}*/

// Create new object
function moveCircle(circle: Circle, deltaX: number, deltaY: number): Circle {
    return {
      centerX: circle.centerX + deltaX,
      centerY: circle.centerY + deltaY,
      radius: circle.radius, 
    };
}

const circle: Circle = {centerX: 0, centerY: 0, radius: 5};
console.log(moveCircle(circle, 20, 40));

  