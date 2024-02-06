//Number, String, and Boolean

const temperature: number = 27;
const welcomeMessage: string = "welcome to TS world";
const isLoggedIn: boolean = true;

//Arrays and Tuples

const colors: string[] = ["black", "red", "green", "yellow"];
let userInfo: [string, number] = ["ahmed", 20];

//Enum, Any, Void, Null, and Undefined
enum Season {
  Spring = "Spring",
  Summer = "Summer",
  Autumn = "Autumn",
  Winter = "Winter",
}
//--logValue
function logValue(val: any) {
  return console.log(val);
}
logValue("nice learning");

//--noReturn
function noReturn(val: any): void {
  console.log(val);
}
logValue("nice learning");

//Function Types
function greet(name: string): string {
  return `Hello ${name}`;
}
greet("karim");

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}
multiply(10, 10);

//Optional and Default Parameters
function createEmail(to: string, subject = "No Subject") {
  console.log(`this message is to ${to} for ${subject}`);
}
createEmail("Khalid", "math");

function add(x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
}

//Interfaces
interface Vehicle {
  make: string;
  model: string;
  year: number;
}
function createVehicle(vehicle: Vehicle) {
  return `${vehicle.make} ${vehicle.model} in ${vehicle.year} `;
}
const car: Vehicle = {
  make: "NY",
  model: "new model",
  year: 2024,
};
createVehicle(car);

//Optional Properties
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

interface Personemail extends Person {
  email?: string;
}

function updatePerson(person: Person, updates?: Person) {
  if (updates) {
    person.firstName = updates.firstName;
    person.lastName = updates.lastName;
  }
}

const person1: Person = { firstName: "karim", lastName: "eljaouhari" };

updatePerson(person1, { firstName: "aziz", lastName: "wardi" });
