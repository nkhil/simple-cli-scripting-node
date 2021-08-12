const args = process.argv;

const [, , firstName, lastName, favouriteFood, favouriteDayOfWeek] = process.argv

if (!firstName || !lastName || !favouriteFood || !favouriteDayOfWeek) {
  console.error('No details provided! Please provide your first name, last name, favourite food and favourite day of week');
  console.error('For eg: node 01.js Boris Johnson chips Monday');
} else {
  console.log(`Oh, hi ${firstName} ${lastName}!`);
  console.log(`Would you like to get some ${favouriteFood} on ${favouriteDayOfWeek}?`);
}
