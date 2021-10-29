/**
 * One of the builtin TypeScript types is "object".
 *
 * Objects are used extensively in JavaScript applications, so you may
 * be tempted to use the "object" type frequently.
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

function printUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old.`);

  if (user.favoriteFood) {
    console.log(`${user.name}'s favorite food is ${user.favoriteFood}`);
  }
}

printUser(user);

/**
 * Notice that we can pass the const "looksLikeUser" to the function "printUser"
 * even though it isn't explicitly typed as a "User".
 *
 * This is possible because TypeScript utilizes Duck Typing. This means that
 * arguments can be passed to the "printUser" function as long as they have the same
 * type signature as the User type, even if they aren't explicitly typed as a "User".
 *
 * "Walks like a duck? Talks like a duck? It's a duck!"
 */
const looksLikeUser = {
  name: "John",
  age: 37,
  isMarried: true,
  favoriteFood: "sushi",
};

printUser(looksLikeUser);
