const fs = require('fs').promises;

const mkdirp = (path) => {
  fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, object) => {
  fs.writeFile(path, JSON.stringify(object))
    .then(() => object);
};

const readJSON = (path) => {
  fs.readFile(path)
    .then((object) => JSON.parse(object));
};

// const callback = (err, files) => {
//   console.log(files)
// };

// const readDirectoryJSON = (path) => {
//   fs.readdir(path, callback)
//     .then(() => );
// };

// const updateJSON = (path) => {
//   fs.
// };

const deleteFile = (path) => {
  fs.rmdir(path);
};

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  // readDirectoryJSON,
  // updateJSON,
  deleteFile
};
