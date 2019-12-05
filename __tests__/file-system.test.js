const fs = require('fs');
const {
  mkdirp,
  //   writeJSON,
  //   readJSON,
  //   readDirectoryJSON,
  //   updateJSON,
  deleteFile
} = require('../lib/file-system.js')
;

describe('file system', () => {

  it('make a directory', () => {
    mkdirp('./mydirectory');
    fs.readdir('./mydirectory', (err, files) => {
      expect(Array.isArray(files)).toBeTruthy();
    });
  });
  it('deletes a file', () => {
    deleteFile('./mydirectory');
    fs.readdir('./mydirectory', (err, files) => {
      expect(Array.isArray(files)).toBeFalsy();
    });
  });
})
;
