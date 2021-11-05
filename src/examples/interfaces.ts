/**
 * Objects are used extensively to store and pass data in JavaScript
 * applications, so you may be tempted to use the "object" type frequently.
 *
 * However, if you know that the keys and values within an object should
 * adhere to a particular structure you can more accurately type it using
 * an interface.
 *
 * You can think of an interface as a more specific type of object, where
 * the individual keys and values within the object are defined and typed.
 */

interface User {
  name: string;
  age: number;
  isMarried: boolean;
  // You can specify that a property is optional using `?`
  favoriteFood?: string;
}

const user: User = {
  name: "Bob",
  age: 42,
  isMarried: false,
  favoriteFood: "pizza",
};

const badUser: User = {
  name: "Jim",
  age: "old",
  isMarried: false,
  favoriteFood: "pizza",
};

function printUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old.`);

  if (user.favoriteFood) {
    console.log(`${user.name}'s favorite food is ${user.favoriteFood}`);
  }
}

printUser(user);
