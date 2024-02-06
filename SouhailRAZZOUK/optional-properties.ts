// 1. Extend the `Person` interface to include an optional property `email`.
// Answer:
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  email?: string;
}

// 2. Implement a function `updatePerson` that takes a `Person` object and an object with updates to some of the person's properties. The function should return the updated person object.
// Answer:
function updatePerson(person: Person, updates: Person): Person {
  return { ...person, ...updates };
}
