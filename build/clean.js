const rimraf = require('rimraf');
const { paths } = require('./config');

function clean(done) {
  rimraf(paths.dest.root, er => done(er));
}

module.exports = clean;