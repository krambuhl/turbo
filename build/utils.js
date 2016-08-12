const through = require('through2');

const createIndex = (templates, requirementCreator) => {
  const reqs = templates.map(requirementCreator);

  return `{ \n  ${reqs.join(',\n  ')} \n}`;
};

const createRequirement = (name, path) => `"${name}": require("./${path}")`;

const addFileToArray = arr =>
  through.obj(function(file, enc, done) {
    arr.push(file);
    done(null, file);
  });

module.exports = {
  createIndex,
  createRequirement,
  addFileToArray
};