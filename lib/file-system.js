const fs = require('fs').promises;

const mkdirp = (path) => {
  fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, object) => {
  return fs.writeFile(path, JSON.stringify(object));
};

const readJSON = (path) => {
  return fs.readFile(path, 'utf8')
    .then((object) => JSON.parse(object));
};

// const callback = (err, files) => {
//   console.log(files)
// };

// const readDirectoryJSON = (path) => {
//   fs.readdir(path)
//     .then(files => {});
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
