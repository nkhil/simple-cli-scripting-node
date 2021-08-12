const superagent = require('superagent');

const [, , package] = process.argv;

if (!package) {
  console.error('Error: Please provide an npm package name when you call this script')
  throw new Error('Package name not provided')
}

(async () => {
  const response = await superagent
    .get(`https://api.npmjs.org/downloads/point/last-month/${package}`);
  const { downloads } = JSON.parse(response.text)
  console.log('----')
  console.log(`${package} was downloaded ${downloads} times in the last month`);
  console.log('----')
})()
