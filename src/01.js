const args = process.argv;
console.log('~  -----------')
console.log('~ args', args)
console.log('~  -----------')

const firstName = args[2]

// Can also be done in a single line using destructuring like so:
// const [ , ,firstName] = process.argv

if (!firstName) {
  console.error('No first name provided! Please provide a first name');
  console.error('For eg: node 01.js Boris');
} else {
  console.log(`Oh, hi ${firstName}!`);
}
