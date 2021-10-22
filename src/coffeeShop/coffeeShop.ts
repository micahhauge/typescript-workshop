type Size = "small" | "medium" | "large";
type DrinkName = "latte" | "mocha" | "coldBrew";
type HotOrIced = "hot" | "iced";

interface Drink {
  name: DrinkName;
  size: Size;
  hotOrIced: HotOrIced;
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
  { name: "latte", hotOrIced: "hot", size: "medium", extraEspressoShots: 1 },
  { name: "coldBrew", hotOrIced: "iced", size: "large" },
  { name: "coldBrew", hotOrIced: "iced", size: "large" },
];

drinks.forEach((drink) => {
  const drinkPrice = getDrinkPrice(drink);
  console.log(`${drink.size} ${drink.hotOrIced} ${drink.name}: ${drinkPrice}`);
});
