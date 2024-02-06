// 1. Define an enum `Season` with values for `Spring`, `Summer`, `Autumn`, and `Winter`. Use it in a variable declaration.
// Answer:
enum Season {
  Spring,
  Summer,
  Autumn,
  Winter,
}

const currentSeason: Season = Season.Winter;
// 2. Create a function `logValue` that takes an `any` type argument and logs it to the console.
// Answer:
function logValue(arg: any): void {
  console.log("🚀 ~ logValue ~ arg:", arg);
}
// 3. Write a function `noReturn` that returns `void` and logs "No return" to the console.
// Answer
function noReturn(): void {
  console.log("No return");
}
