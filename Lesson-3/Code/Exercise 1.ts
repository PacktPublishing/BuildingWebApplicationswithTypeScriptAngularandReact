import { writeFile } from "fs";
const writeFilePromise = function(file, data, callback) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if(err) reject(err);
      else resolve();
    });
  });
}

await writeFilePromise('foo.txt', 'Hello, world!');