// 1. Define an interface `Vehicle` with properties `make`, `model`, and an optional property `year`.
// Answer:
interface Vehicle {
  make: string;
  model: string;
  year?: number;
}
// 2. Write a function `createVehicle` that takes an object of type `Vehicle` as an argument and returns it.
// Answer:
function createVehicle(obj: Vehicle): Vehicle {
  return obj;
}
