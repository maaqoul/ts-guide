// 1. Create a function `concatenateStrings` that takes a rest parameter of type `string[]` and returns all the strings concatenated together.
// Answer:
function concatenateStrings(...strs: string[]): string {
  return strs.reduce((acc, str) => `${acc} ${str}`, "");
}
// 2. Implement a function `maxNumber` that takes a rest parameter of numbers and returns the maximum number from the list.
function maxNumber(...numbers: number[]): number {
  return Math.max(...numbers);
}
