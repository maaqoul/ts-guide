// 1. Write a function `createEmail` with two parameters: `to` (string) and `subject` (string, optional). If `subject` is not provided, it should default to "No Subject".
// Answer:
function createEmail(to: string, subject = "No Subject") {
  console.log({ to, subject });
}
// 2. Modify the `add` function to include a third optional parameter `z` of type `number`. If `z` is provided, add it to the result of `x` and `y`.
// Answer:
function add(x: number, y: number, z?: number) {
  if (z) return x + y + z;
  return x + y;
}
