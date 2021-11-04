/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript.
 *
 * Then see if you can improve the function by creating
 * an interface for the home parameter.
 *
 * See 'interfaces.ts' in examples if you need some direction.
 *
 * Run this file with "yarn estimateHomePrices"
 */

function estimateHomePrice(home) {
  return (
    home.bedrooms * 50000 +
    home.bathrooms * 25000 +
    home.squareFootage * 200 +
    home.garageSpaces * 20000
  );
}

const homes = [
  {
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1800,
    garageSpace: 2,
  },
  {
    bedRooms: 2,
    bathRooms: 1,
    squareFootage: 1300,
    garageSpaces: 0,
  },
  {
    bedrooms: 5,
    bathrooms: 3,
    squareFeet: 2800,
    garageSpaces: 4,
  },
];

homes.forEach((home, index) => {
  const estimatedPrice = estimateHomePrice(home);
  console.log(`Home ${index}: ${estimatedPrice}`);
});
