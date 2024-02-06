var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var isLoggedIn = true;
var welcomeMessage = 'Hello TS';
var temperature = 35;
var colors = ['red', 'blue', 'black'];
var userInfo = ['Fethi', 99];
var season;
(function (season) {
    season[season["Spring"] = 0] = "Spring";
    season[season["Summer"] = 1] = "Summer";
    season[season["Autumn"] = 2] = "Autumn";
    season[season["Winter"] = 3] = "Winter";
})(season || (season = {}));
;
var s = season.Autumn;
var logValue = null;
console.log(logValue);
logValue = "Log";
console.log(logValue);
function noReturn() {
    console.log('No return');
}
function greet(name) {
    return "Hello ".concat(name, ";");
}
function multiply(number1, number2) {
    return number1 * number2;
}
function createEmail(to, subject) {
    if (subject === void 0) { subject = "No Subject"; }
    return "To: ".concat(to, ". Subject: ").concat(subject);
}
function add(x, y, z) {
    if (z) {
        return x * y * z;
    }
    return x * y;
}
function concatenateStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join('');
}
function maxNumber() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
}
function createVehicle(vehicle) {
    return vehicle;
}
var myCar = createVehicle({
    make: 'BMW',
    model: 'X5',
    year: 2022
});
console.log(createVehicle(myCar));
function updatePerson(person, updates) {
    return __assign(__assign({}, person), updates);
}
var person = {
    name: "Fethi",
    age: 99,
};
var updatedPerson = updatePerson(person, { age: 28, email: "fethi@email.com" });
console.log(updatedPerson);
// Cannot assign to 'centerX' because it is a read-only property.ts
//Cannot assign to 'centerY' because it is a read-only property.ts
/*
function moveCircleError(circle: Circle, deltaX: number, deltaY: number): Circle {
    circle.centerX += deltaX;
    circle.centerY += deltaY;
  
    return circle;
}*/
function moveCircle(circle, deltaX, deltaY) {
    return {
        centerX: circle.centerX + deltaX,
        centerY: circle.centerY + deltaY,
        radius: circle.radius,
    };
}
var circle = { centerX: 0, centerY: 0, radius: 5 };
console.log(moveCircle(circle, 20, 40));
