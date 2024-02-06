# TypeScript Guide

## Table of Contents

1. [**Introduction to TypeScript**](#introduction-to-typescript)
   - [What is TypeScript?](#what-is-typescript)
   - [Why Use TypeScript?](#why-use-typescript)
   - [TypeScript vs. JavaScript](#typescript-vs-javascript)

2. [**Setting Up Your Environment**](#setting-up-your-environment)
   - [Installing TypeScript](#installing-typescript)
   - [Configuring Your IDE](#configuring-your-ide)
   - [Compiling Your First TypeScript File](#compiling-your-first-typescript-file)

3. [**Basic Types**](#basic-types)
   - [Number, String, and Boolean](#number-string-and-boolean)
   - [Arrays and Tuples](#arrays-and-tuples)
   - [Enum, Any, Void, Null, and Undefined](#enum-any-void-null-and-undefined)

4. [**Functions**](#functions)
   - [Function Types](#function-types)
   - [Optional and Default Parameters](#optional-and-default-parameters)
   - [Rest Parameters](#rest-parameters)

5. [**Interfaces**](#interfaces)
   - [Defining Interfaces](#defining-interfaces)
   - [Optional Properties](#optional-properties)
   - [Readonly Properties](#readonly-properties)
   - [Excess Property Checks](#excess-property-checks)

6. [**Classes**](#classes)
   - [Classes and Inheritance](#classes-and-inheritance)
   - [Public, Private, and Protected Modifiers](#public-private-and-protected-modifiers)
   - [Getters/Setters](#getterssetters)

7. [**Generics**](#generics)
   - [Generic Functions](#generic-functions)
   - [Generic Interfaces](#generic-interfaces)
   - [Generic Classes](#generic-classes)

8. [**Enums**](#enums)
   - [Numeric Enums](#numeric-enums)
   - [String Enums](#string-enums)
   - [Heterogeneous Enums](#heterogeneous-enums)

9. [**Advanced Types**](#advanced-types)
   - [Union Types](#union-types)
   - [Intersection Types](#intersection-types)
   - [Type Guards and Differentiating Types](#type-guards-and-differentiating-types)
   - [Type Assertions](#type-assertions)

10. [**Modules**](#modules)
    - [Exporting and Importing Modules](#exporting-and-importing-modules)
    - [Default Exports](#default-exports)
    - [Importing without a Module Bundler](#importing-without-a-module-bundler)

11. [**Namespaces**](#namespaces)
    - [Namespaces vs. Modules](#namespaces-vs-modules)
    - [Splitting Across Files](#splitting-across-files)

12. [**Decorators**](#decorators)
    - [Class Decorators](#class-decorators)
    - [Method Decorators](#method-decorators)
    - [Property Decorators](#property-decorators)

13. [**Mixins**](#mixins)
    - [Understanding Mixins](#understanding-mixins)
    - [Implementing a Mixin](#implementing-a-mixin)

14. [**Utility Types**](#utility-types)
    - [Partial, Readonly, Pick, and Record](#partial-readonly-pick-and-record)
    - [Conditional Types](#conditional-types)

15. [**TypeScript Configuration**](#typescript-configuration)
    - [tsconfig.json Explained](#tsconfigjson-explained)
    - [Compiler Options](#compiler-options)
    - [Including and Excluding Files](#including-and-excluding-files)

16. [**TypeScript Tooling**](#typescript-tooling)
    - [Linting with TSLint](#linting-with-tslint)
    - [Debugging TypeScript](#debugging-typescript)
    - [Unit Testing](#unit-testing)

17. [**Conclusion**](#conclusion)
    - [Recap](#recap)
    - [Further Resources](#further-resources)
    - [How to Stay Updated](#how-to-stay-updated)

---

## Introduction to TypeScript

### What is TypeScript?

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript extends JavaScript by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

TypeScript is designed for the development of large applications and transcompiles to JavaScript. As applications grow in complexity, TypeScript's static typing can help developers detect and prevent many types of errors during the development process, improving the stability and maintainability of the code.

### Why Use TypeScript?

TypeScript offers several advantages over JavaScript:

- **Type Safety**: TypeScript provides a strict typing system, including both static and dynamic checking. This helps catch errors early in the development process, reducing runtime errors.
- **Improved Tooling**: Auto-completion, type checking, and source documentation are enhanced in TypeScript, making the development process smoother and faster.
- **Better Collaboration**: In large projects, TypeScript's type system can help ensure more predictable code and ease the collaboration between multiple developers.
- **Future-Proof**: TypeScript supports new JavaScript features, allowing developers to use the latest concepts without waiting for browser support. TypeScript then compiles these down to older, more compatible JavaScript versions.

### TypeScript vs. JavaScript

While JavaScript is the most widely used scripting language for web development, TypeScript has gained popularity for its additional features that facilitate large-scale development. Here are some key differences:

- **Static vs. Dynamic Typing**: JavaScript is dynamically typed, meaning that variables can change types at runtime. TypeScript, being statically typed, requires type definitions at compile time, leading to more predictable code.
- **TypeScript Features**: TypeScript introduces features like interfaces, generics, and enums, which are not present in JavaScript.
- **Compilation**: TypeScript code is transcompiled into JavaScript code, which can then be run in any environment that supports JavaScript.

In summary, TypeScript enhances JavaScript with type definitions and new features, making it more robust for developing large applications. It strikes a balance between the dynamic flexibility of JavaScript and the rigorous structure needed for large-scale development.

## Setting Up Your Environment

Setting up a proper development environment is crucial for working efficiently with TypeScript. This section guides you through the process of installing TypeScript, configuring your Integrated Development Environment (IDE), and compiling your first TypeScript file.

### Installing TypeScript

To get started with TypeScript, you first need to install it. TypeScript requires Node.js as a prerequisite, so make sure you have Node.js installed on your machine. If you haven't installed Node.js yet, download and install it from [nodejs.org](https://nodejs.org/).

Once Node.js is installed, you can install TypeScript globally using npm (Node Package Manager), which comes with Node.js. Open your terminal or command prompt and run the following command:

```bash
npm install -g typescript
```

This command installs the TypeScript compiler globally on your computer, making it accessible from any terminal or command prompt.

### Configuring Your IDE

For a better development experience, it's recommended to use an Integrated Development Environment (IDE) or a code editor that supports TypeScript. Visual Studio Code (VS Code) is a popular choice among developers for TypeScript development due to its excellent TypeScript support.

To enhance your TypeScript development in VS Code, consider installing the following extensions:

- **TypeScript TSLint Plugin** for linting TypeScript code.
- **Path Intellisense** for auto-completing filenames.
- **Prettier** for auto-formatting your code.

### Compiling Your First TypeScript File

To compile TypeScript code to JavaScript, you can use the TypeScript compiler (`tsc`). Here's a simple example to get you started:

1. Create a new file named `hello.ts`.
2. Add the following TypeScript code to the file:

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

3. Open your terminal or command prompt, navigate to the directory containing your `hello.ts` file, and compile the file with the following command:

```bash
tsc hello.ts
```

This command converts the `hello.ts` TypeScript file into a `hello.js` JavaScript file, which you can run using Node.js or in any JavaScript environment.

## Basic Types

TypeScript enhances JavaScript by adding types. These types enable you to describe the shape of variables, function parameters, and objects, providing better documentation and allowing TypeScript to validate that your code is working as expected.

### Number, String, and Boolean

These are the basic types in TypeScript, similar to JavaScript.

- **Number**: All numbers in TypeScript are floating point values. These include integers, fractions, and exponentials.
- **String**: Textual data in TypeScript is represented using the `string` type.
- **Boolean**: This type represents logical values: `true` and `false`.

#### Example

```typescript
let age: number = 30;
let name: string = "John Doe";
let isStudent: boolean = false;
```

#### Exercises

1. Declare a variable `temperature` of type `number` and assign it a value.
2. Create a variable `welcomeMessage` of type `string` that contains a greeting.
3. Make a variable `isLoggedIn` of type `boolean` to check if a user is logged in.

### Arrays and Tuples

TypeScript allows you to work with arrays of values. You can specify the type of the array elements to ensure uniformity. Tuples are a TypeScript feature that allows you to create an array with fixed types and a fixed number of elements.

#### Example

```typescript
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10]; // Tuple type
```

#### Exercises

1. Create an array `colors` of type `string[]` and initialize it with a few colors.
2. Define a tuple `userInfo` that contains a `string` (for user name) and a `number` (for user age).

### Enum, Any, Void, Null, and Undefined

- **Enum**: A way to organize a collection of related values. Use enums to make your code more readable and less error-prone.
- **Any**: Use this type to bypass the type-checking system. Useful when you don't know the type of a variable because it's dynamic or comes from a third-party library.
- **Void**: A function that doesn't return a value returns `void`.
- **Null and Undefined**: In TypeScript, both `null` and `undefined` have their types named `null` and `undefined` respectively.

#### Example

```typescript
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";

function warnUser(): void {
    console.log("This is a warning message");
}

let u: undefined = undefined;
let n: null = null;
```

#### Exercises

1. Define an enum `Season` with values for `Spring`, `Summer`, `Autumn`, and `Winter`. Use it in a variable declaration.
2. Create a function `logValue` that takes an `any` type argument and logs it to the console.
3. Write a function `noReturn` that returns `void` and logs "No return" to the console.

## Functions

TypeScript provides full support for JavaScript functions with added benefits of type checking and type annotations. Functions are the building blocks of readable, maintainable, and reusable code.

### Function Types

In TypeScript, you can specify the types of the function parameters and the return type of the function to ensure your functions are called with the correct types of arguments and return the correct type of result.

#### Example

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

#### Exercises

1. Write a function `greet` that takes a `string` as an argument and returns a `string` with a greeting message.
2. Create a function `multiply` that takes two `number` arguments and returns their product as a `number`.

### Optional and Default Parameters

TypeScript allows you to define functions with optional parameters and default parameters, enabling you to write more flexible and reusable code.

#### Example

```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

function buildAddress(city: string, country = "USA"): string {
    return city + ", " + country;
}
```

#### Exercises

1. Write a function `createEmail` with two parameters: `to` (string) and `subject` (string, optional). If `subject` is not provided, it should default to "No Subject".
2. Modify the `add` function to include a third optional parameter `z` of type `number`. If `z` is provided, add it to the result of `x` and `y`.

### Rest Parameters

Rest parameters allow you to work with an indefinite number of arguments as an array, providing the flexibility to handle multiple inputs more gracefully.

#### Example

```typescript
function getTotal(...numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
```

#### Exercises

1. Create a function `concatenateStrings` that takes a rest parameter of type `string[]` and returns all the strings concatenated together.
2. Implement a function `maxNumber` that takes a rest parameter of numbers and returns the maximum number from the list.

## Interfaces

TypeScript's interfaces are a powerful way of defining contracts within your code as well as contracts with code outside of your project. Interfaces define the shape of objects, making it easier to manage and use complex data structures.

### Defining Interfaces

An interface in TypeScript is used to define the structure of an object. You can specify the types of various properties that the object can have.

#### Example

```typescript
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

function greet(person: Person) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
```

#### Exercises

1. Define an interface `Vehicle` with properties `make`, `model`, and an optional property `year`.
2. Write a function `createVehicle` that takes an object of type `Vehicle` as an argument and returns it.

### Optional Properties

Interfaces can have optional properties, marked with a `?`. This means that objects of the interface can have these properties omitted.

#### Example

```typescript
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; width: number } {
    let newSquare = {color: "white", width: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.width = config.width;
    }
    return newSquare;
}
```

#### Exercises

1. Extend the `Person` interface to include an optional property `email`.
2. Implement a function `updatePerson` that takes a `Person` object and an object with updates to some of the person's properties. The function should return the updated person object.

### Readonly Properties

TypeScript allows you to make properties in an interface readonly. This means that once a property is assigned a value, it cannot be changed.

#### Example

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error: cannot reassign a readonly property
```

#### Exercises

1. Create an interface `Circle` with readonly properties `centerX`, `centerY`, and `radius`.
2. Write a function `moveCircle` that attempts to modify the `centerX` and `centerY` properties of a `Circle` object. Observe the TypeScript error and then fix the code.

## Classes

TypeScript enhances JavaScript's class syntax with features like types, modifiers (public, private, etc.), and interfaces for implementing strong typing within classes.

### Classes and Inheritance

```typescript
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

#### Exercises

1. Extend the `Animal` class with a `Dog` class that overrides the `move` method.
2. Create an instance of the `Dog` class and call its `move` method.

### Public, Private, and Protected Modifiers

```typescript
class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
}
```

#### Exercises

1. Try to access the `name` property from outside the `Person` class and observe the TypeScript error.
2. Add a public method to the `Person` class that returns the `name` property.

## Generics

Generics provide a way to create reusable components that work with any data type, not just one.

### Generic Functions

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

#### Exercises

1. Use the `identity` function with different types and observe the inferred return type.
2. Extend the `identity` function to log the type of `arg` using `typeof`.

### Generic Interfaces

```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}
```

#### Exercises

1. Implement the `GenericIdentityFn` interface with a function that returns its argument.
2. Create an interface `GenericArray` with a generic type that represents an array of that type.

## Enums

Enums allow you to define a set of named constants, making your code more readable and maintainable.

### Numeric Enums

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

#### Exercises

1. Create a numeric enum `Response` with values `No = 0`, `Yes = 1`, and use it in a function.

### String Enums

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

#### Exercises

1. Define a string enum `Message` with values `Success = "SUCCESS"`, `Failure = "FAILURE"` and use it to return function results.

## Advanced Types

Advanced types in TypeScript include union types, intersection types, type guards, and type assertions, among others.

### Union Types

```typescript
function padLeft(value: string, padding: string | number) {
    // function body
}
```

#### Exercises

1. Use the `padLeft` function with both a `string` and a `number` as the `padding` parameter.

### Intersection Types

```typescript
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;
```

#### Exercises

1. Create an object of type `Customer` and use it to call a function that requires a `BusinessPartner` and a `Contact`.

## Modules

Modules in TypeScript allow for the modularization of code, making it easier to organize, maintain, and reuse across different parts of your application or across projects.

### Exporting and Importing Modules

```typescript
// In file mathUtils.ts
export function add(x: number, y: number): number {
    return x + y;
}

// In another file
import { add } from './mathUtils';
```

#### Exercises

1. Create a module `stringUtils` with a function `capitalize` that takes a `string` and returns it with the first letter capitalized. Import and use it in another file.

### Default Exports

```typescript
// In file greeter.ts
export default function greet(name: string): string {
    return `Hello, ${name}!`;
}

// In another file
import greet from './greeter';
```

#### Exercises

1. Modify the `greeter` module to include a default export and a named export. Import and use both in another file.

## Namespaces

Namespaces are a TypeScript feature that allows you to group related functionalities under a single name, helping you to avoid global namespace pollution and organize your code more effectively.

### Namespaces vs. Modules

```typescript
namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }
}
```

#### Exercises

1. Define a namespace `Calculator` with a class `BasicCalculator` and use it in another file without importing.

## Decorators

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.

### Class Decorators

```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

#### Exercises

1. Create a decorator `@logged` that logs whenever a new instance of a class is created.

### Method Decorators

```typescript
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

#### Exercises

1. Implement a method decorator `@format` that formats the return value of `greet` method as uppercase.

## Utility Types

TypeScript provides several utility types to facilitate common type transformations. These utilities help you manipulate types easily, making your code more flexible and robust.

### Partial, Readonly, Pick, and Record

```typescript
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};

// todo1.title = "Hello"; // Error: cannot reassign a readonly property
```

#### Exercises

1. Use the `Partial` utility type to write a function that updates only certain fields of a `Todo` object.
2. Apply the `Readonly` utility type to make a `User` object that should not be modified after creation.

## TypeScript Configuration

TypeScript's behavior can be customized through the `tsconfig.json` file. This file specifies the root files and the compiler options required to compile the project.

### tsconfig.json Explained

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": [
    "./src/**/*"
  ]
}
```

#### Exercises

1. Create a `tsconfig.json` file for a project that compiles TypeScript files from a `src` folder to a `dist` folder, targeting ES6.

### Compiler Options

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

#### Exercises

1. Modify the `tsconfig.json` to enable `strictNullChecks` and observe how it affects the compilation of your code.

### Including and Excluding Files

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

#### Exercises

1. Adjust the `include` and `exclude` options in your `tsconfig.json` to specifically target the files you want to compile.

## TypeScript Tooling

TypeScript integrates with many tools that help improve the development workflow, from linting to testing.

### Linting with ESLint

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

#### Exercises

1. Set up ESLint in a TypeScript project and configure it to extend `@typescript-eslint/recommended`.

### Debugging TypeScript

Most modern IDEs support debugging TypeScript directly, especially when source maps are enabled in the `tsconfig.json`.

#### Exercises

1. Configure your IDE to debug a TypeScript file with source maps enabled.

### Unit Testing

TypeScript can work seamlessly with most JavaScript testing frameworks, such as Jest or Mocha.

```bash
npm install jest @types/jest ts-jest --save-dev
```

#### Exercises

1. Set up Jest in a TypeScript project and write a simple test for a TypeScript function.

## Conclusion

Congratulations on completing this TypeScript guide! You've learned the essentials of TypeScript, from basic types and functions to advanced concepts like generics and decorators. Remember, the key to mastering TypeScript is practice and continuous learning.

### Further Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript GitHub Repository](https://github.com/Microsoft/TypeScript)
- [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)

### How to Stay Updated

Stay updated with TypeScript's latest features and improvements by following the [TypeScript blog](https://devblogs.microsoft.com/typescript/) and [GitHub releases page](https://github.com/Microsoft/TypeScript/releases).


