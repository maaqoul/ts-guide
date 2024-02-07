var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello TypeScript !";
console.log(message);
var temperature = 32;
var welcomeMessage = 'Hello from VsCode !';
var isLoggedIn = false;
var colors = ['grey', 'red', 'skyblue'];
var userInfo = ['Mohammed', 54];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
var logValue = 78;
logValue = 'ok let\'s change it to string';
console.log(logValue);
function noReturn() {
    console.log("No Return");
}
function greet(word) {
    return word;
}
console.log(greet("Hello There !"));
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 4));
function createEmail(to, subject) {
    return subject ? "your email to : " + to + " subject : " + subject : "your email to : " + to + " with no subject";
}
console.log(createEmail('hicham-maaqoul@mail.com', 'TS exercise'));
console.log(createEmail('hicham-maaqoul@mail.com'));
function add(x, y, z) {
    return z ? x + y + z : x + y;
}
console.log(add(12, 25));
console.log(add(12, 25, 9));
function concatenateStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.reduce(function (accumulate, curr) { return accumulate + " " + curr; });
}
console.log(concatenateStrings("It", "could", "be", "blue"));
function maxNumber() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
}
console.log(maxNumber(1, 2, 3, 4, 3));
function createVehicule(vehicule) {
    vehicule.year ? console.log('your vehicule is ' + vehicule.make + ' It\'s model is ' + vehicule.model + ' year is ' + vehicule.year) : console.log('your vehicule is ' + vehicule.make + ' It\'s model is ' + vehicule.model);
}
var v1 = { make: 'BMW', model: "APT", year: 2004 };
createVehicule(v1);
var v2 = { make: 'BMW', model: "APT" };
createVehicule(v2);
function updatePerson(config) {
    var person = { email: "person@mail.com" };
    if (config.email) {
        person.email = config.email;
    }
    return person;
}
var p2 = { email: "mamadowatara@mail.com" };
console.log(updatePerson(p2));
var c1 = { centerX: 10, centerY: 15, radius: 25 };
// function moveCircle(c: Circle, centerX: number, centerY: number, radius: number){
//     c.centerX = centerX; // error TS2540: Cannot assign to 'centerX' because it is a read-only property.
//     c.centerY = centerY; // error TS2540: Cannot assign to 'centerY' because it is a read-only property.
//     c.radius = radius; // error TS2540: Cannot assign to 'radius' because it is a read-only property.
//     return c;
// }
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var d1 = new Dog("max");
d1.move(12);
var Personne = /** @class */ (function () {
    function Personne(name) {
        this.name = name;
    }
    return Personne;
}());
var pe1 = new Personne("mohammed");
// console.log(pe1.name) // error TS2341: Property 'name' is private and only accessible within class 'Personne'
function identity(arg) {
    return arg;
}
console.log(identity("yep"));
function identity2(arg) {
    return typeof arg;
}
console.log(identity2("yep"));
var Reponse;
(function (Reponse) {
    Reponse[Reponse["No"] = 0] = "No";
    Reponse[Reponse["Yes"] = 1] = "Yes";
})(Reponse || (Reponse = {}));
function getReponse(resp) {
    return resp ? Reponse.Yes : Reponse.No;
}
console.log(getReponse(false));
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function getMessage(code) {
    return code ? Message.Success : Message.Failure;
}
console.log(getMessage(false));
