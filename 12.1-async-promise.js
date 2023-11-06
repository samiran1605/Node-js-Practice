const { readFile, writeFile } = require('fs').promises;
// const { reject, result } = require('lodash');
// const { resolve } = require('path');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/result-mind-granade.txt', `THIS IS WRITE FILE PROMISE: ${first} : ${second}`, { flag: 'a' })
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()



// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))