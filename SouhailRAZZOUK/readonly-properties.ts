// 1. Create an interface `Circle` with readonly properties `centerX`, `centerY`, and `radius`.
// Answer:
interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}

// 2. Write a function `moveCircle` that attempts to modify the `centerX` and `centerY` properties of a `Circle` object. Observe the TypeScript error and then fix the code.
// Answer:
const failedCircle: Circle = {
  centerX: 1,
  centerY: 1,
  radius: 1,
};
failedCircle.centerX = 10; // Error: Cannot assign to 'centerX' because it is a read-only property
failedCircle.centerY = 10; // Error: Cannot assign to 'centerY' because it is a read-only property

// Fixes:
// remove readonly from the props, and use the generic type ReadOnly on the instances
interface Circle2 {
  centerX: number;
  centerY: number;
  radius: number;
}

// successful compile:
const successfulCircle: Circle2 = {
  centerX: 1,
  centerY: 1,
  radius: 1,
};
successfulCircle.centerX = 10; // Error: Cannot assign to 'centerX' because it is a read-only property
successfulCircle.centerY = 10; // Error: Cannot assign to 'centerY' because it is a read-only property

// if we want a readonly object:
const readonlyCircle: Readonly<Circle2> = {
  centerX: 1,
  centerY: 1,
  radius: 1,
};
readonlyCircle.centerX = 10; // Error: Cannot assign to 'centerX' because it is a read-only property
readonlyCircle.centerY = 10; // Error: Cannot assign to 'centerY' because it is a read-only property
