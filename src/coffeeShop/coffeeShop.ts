type Size = "small" | "medium" | "large";
type DrinkName = "latte" | "mocha" | "coldBrew";

interface Drink {
  name: DrinkName;
  size: Size;
  extraEspressoShots?: number;
}

const BASE_DRINK_PRICES: Record<DrinkName, number> = {
  latte: 5,
  mocha: 6,
  coldBrew: 4,
};

const SIZE_UPCHARGE_PRICES: Record<Size, number> = {
  small: 0,
  medium: 1,
  large: 2,
};

function getDrinkPrice(drink: Drink) {
  return (
    BASE_DRINK_PRICES[drink.name] +
    SIZE_UPCHARGE_PRICES[drink.size] +
    (drink.extraEspressoShots || 0) * 1.5
  );
}

const drinks: Drink[] = [
  { name: "latte", size: "medium", extraEspressoShots: 1 },
  { name: "coldBrew", size: "large" },
  { name: "coldBrew", size: "large" },
];

drinks.forEach((drink) => {
  const drinkPrice = getDrinkPrice(drink);
  console.log(`${drink.size} ${drink.name}: ${drinkPrice}`);
});
