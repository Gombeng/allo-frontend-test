const descriptions = [
  "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006–2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
  "The Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons, it can carry heavy payloads far into space.",
  "Starship is SpaceX’s fully reusable spacecraft, designed for missions to Mars and beyond. It features a stainless steel body and is intended to drastically reduce space travel costs.",
  "The Saturn V was a multistage liquid-fuel expendable rocket used by NASA between 1967 and 1973. It remains the tallest, heaviest, and most powerful rocket ever brought to operational status.",
  "Atlas V is an expendable launch system and the fifth major version in the Atlas rocket family. It is known for its high reliability and has been used in various NASA and military launches.",
];

export const getRandomDescription = () => {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const rocketPrefixes = [
  "Falcon",
  "Star",
  "Nova",
  "Atlas",
  "Titan",
  "Vega",
  "Orion",
  "Zephyr",
  "Phoenix",
  "Lynx",
];

const rocketSuffixes = [
  "X",
  "I",
  "II",
  "V",
  "One",
  "Heavy",
  "Prime",
  "Explorer",
  "Max",
  "Z",
];

export const generateRocketName = () => {
  const prefix =
    rocketPrefixes[Math.floor(Math.random() * rocketPrefixes.length)];
  const suffix =
    rocketSuffixes[Math.floor(Math.random() * rocketSuffixes.length)];
  const number = Math.floor(Math.random() * 100);
  return `${prefix} ${suffix}-${number}`;
};

export const generateCostPerLaunch = () => {
  // Random number between $50 million and $500 million
  const cost =
    Math.floor(Math.random() * (500_000_000 - 50_000_000 + 1)) + 50_000_000;
  return cost;
};

export const generateFirstFlight = () => {
  const start = new Date(2000, 0, 1); // Jan 1, 2000
  const end = new Date(2025, 11, 31); // Dec 31, 2025
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // Format: YYYY-MM-DD
  return randomDate.toISOString().split("T")[0];
};
