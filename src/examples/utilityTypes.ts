/**
 * The Record utility type constructs an object type whose
 * the keys are the first argument, and values are the second
 * type argument.
 *
 * Notice how Type Arguments can be passed by using
 * angle brackets <>
 */

type Drinks = "latte" | "coldBrew" | "mocha" | "tea";

type DrinkPriceMap = Record<Drinks, number>;

const prices: DrinkPriceMap = {
  latte: 3,
  coldBrew: 5,
  mocha: 2,
  tea: 2,
};
