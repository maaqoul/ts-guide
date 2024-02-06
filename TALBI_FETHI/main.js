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
    function Dog(theName) {
        return _super.call(this, theName) || this;
    }
    return Dog;
}(Animal));
var dog = new Dog("bobi");
dog.move();
// Public, Private, and Protected Modifiers
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("geek");
// console.log(person.name);
console.log(person.getName());
// Generic Functions
function identity(arg) {
    console.log("Type of ".concat(arg, ": ").concat(typeof arg));
    return arg;
}
var outputString = identity("geek");
var outputNumber = identity(28);
var outputBoolean = identity(true);
var outputObject = identity({ name: "geek", age: 28 });
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
var myIdentityResult = myIdentity('hello');
console.log(myIdentityResult);
var numberArray = {
    items: [1, 2, 3]
};
//numberArray.items.push('test'); // Error!
numberArray.items.push(4);
var stringArray = {
    items: ["hello", "world"]
};
console.log(numberArray.items);
console.log(stringArray.items);
// Enums
var enumResponse;
(function (enumResponse) {
    enumResponse[enumResponse["No"] = 0] = "No";
    enumResponse[enumResponse["Yes"] = 1] = "Yes";
})(enumResponse || (enumResponse = {}));
function resultResponse(person, message) {
    console.log(" ".concat(person, " a vot\u00E9(e) par : ").concat(enumResponse[message]));
}
resultResponse("Geek", enumResponse['Yes']);
resultResponse("Geek", enumResponse['No']);
