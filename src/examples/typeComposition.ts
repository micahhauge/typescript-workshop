/**
 * You can compose types that you define using all of the strategies
 * you have learned so far create more advanced types.
 */

type State = "TN" | "FL" | "TX";

interface Address {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: State;
  zipCode: number;
}

type HomeType = "single_family_home" | "town_home" | "condo";

interface Home {
  address: Address;
  bedroomCount: number;
  bathroomCount: number;
  type: HomeType;
}

const home: Home = {
  address: {
    addressLine1: "1234 Battle Ave.",
    city: "Franklin",
    state: "TN",
    zipCode: 37064,
  },
  bedroomCount: 3,
  bathroomCount: 2,
  type: "single_family_home",
};
