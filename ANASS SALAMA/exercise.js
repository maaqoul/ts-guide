// Basic Types
var temperature = 26;
var welcomeMessage = 'Hello!';
var isLoggedIn = true;
// Arrays and Tuples
var colors = ['red', 'green', 'blue'];
var userInfo = ['anass', 27];
// Enum, Any, Void, Null, and Undefined
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var sp = Season.Spring;
var su = Season.Summer;
var a = Season.Autumn;
var w = Season.Winter;
var logValue = 10;
console.log(logValue);
function noReturn() {
    console.log('No return');
}
// Functions
function greet(name) {
    return 'Hello ' + name;
}
function multiply(x, y) {
    return x * y;
}
// Optional and Default Parameters
function createEmail(to, subject) {
    if (!subject)
        subject = 'No Subject';
}
function add(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
// Rest Parameters
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
    console.log("the Car " + vehicle.make + ", model " + vehicle.model + "was made in rhe year " + vehicle.year);
}
