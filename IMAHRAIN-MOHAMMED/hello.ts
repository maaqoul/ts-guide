// 1
let message: string = "Hello TypeScript !";
console.log(message);
// 2
let temperature: number = 32;
let welcomeMessage: string = 'Hello from VsCode !';
let isLoggedIn: boolean = false;
// 3
let colors: string[] = ['grey', 'red', 'skyblue'];
let userInfo: [string, number] = ['Mohammed', 54];
// 4
enum Season {Spring, Summer, Autumn, Winter}

let logValue: any = 78;
logValue = 'ok let\'s change it to string';

console.log(logValue);

function noReturn(): void{
    console.log("No Return");
}
// 5
function greet(word: string ): string {
    return word;
}

console.log(greet("Hello There !"));

function multiply(num1: number, num2: number): number{
    return num1*num2;
}

console.log(multiply(2,4));
// 6
function createEmail(to: string, subject?: string): string{
    return subject ? "your email to : "+to+" subject : "+subject : "your email to : "+to+" with no subject";
}
console.log(createEmail('hicham-maaqoul@mail.com', 'TS exercise'));
console.log(createEmail('hicham-maaqoul@mail.com'));

function add(x: number, y: number, z?: number): number{
    return z ? x+y+z : x+y;
}

console.log(add(12, 25))
console.log(add(12, 25, 9))
// 7
function concatenateStrings(...strings: string[]): string {
    return strings.reduce(
        (accumulate, curr) => accumulate +" "+ curr
        );
}

console.log(concatenateStrings("It", "could", "be", "blue"));

function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers)
}

console.log(maxNumber(1 , 2 , 3 , 4 , 3));

// 8
interface Vehicule {
    make: string,
    model: string,
    year?: number
}



function createVehicule(vehicule: Vehicule) {
    vehicule.year ?  console.log('your vehicule is '+ vehicule.make + ' It\'s model is '+ vehicule.model + ' year is '+ vehicule.year) : console.log('your vehicule is '+ vehicule.make + ' It\'s model is '+ vehicule.model)

}

let v1 = {make: 'BMW', model: "APT", year: 2004}
createVehicule(v1)
let v2 = {make: 'BMW', model: "APT"}
createVehicule(v2)

// 9
interface Person{
    email: string;
}

function updatePerson(config: Person): { email: string; } {
 let person = {email: "person@mail.com"};
 if(config.email) {
    person.email = config.email;
 }

 return person;
}
let p2 = {email: "mamadowatara@mail.com"}
console.log(updatePerson(p2))

// 10

interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

let c1: Circle = {centerX: 10, centerY: 15, radius: 25}

// function moveCircle(c: Circle, centerX: number, centerY: number, radius: number){
//     c.centerX = centerX; // error TS2540: Cannot assign to 'centerX' because it is a read-only property.
//     c.centerY = centerY; // error TS2540: Cannot assign to 'centerY' because it is a read-only property.
//     c.radius = radius; // error TS2540: Cannot assign to 'radius' because it is a read-only property.
//     return c;
// }

// 11 

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {

}

let d1 = new Dog("max");
d1.move(12)

class Personne {
    private name: string;
    constructor(name: string) { this.name = name; }
}

// 12

let pe1 = new Personne("mohammed");
// console.log(pe1.name) // error TS2341: Property 'name' is private and only accessible within class 'Personne'

// 13

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity("yep"))

function identity2<T>(arg: T): string {
    return typeof arg;
}

console.log(identity2("yep"))
// 14
interface GenericIdentityFn<T> {
    (arg: T): T;
}

// 15

enum Reponse {
    No = 0,
    Yes = 1
}

function getReponse(resp: boolean){
  return resp ? Reponse.Yes : Reponse.No
}

console.log(getReponse(false))

// 16

enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function getMessage(code: boolean){
    return code ? Message.Success : Message.Failure
}

console.log(getMessage(false))