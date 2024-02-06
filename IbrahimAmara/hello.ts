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