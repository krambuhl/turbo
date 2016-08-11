const path = require('path');
const gulp = require('gulp');

const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const nested = require('postcss-nested');
const variables = require('postcss-css-variables');
const functions = require('postcss-functions');
const autoprefix = require('autoprefixer');

const { paths, globs } = require('./config');

function compileStyles() {
  return gulp.src(path.join(paths.src.root, globs.css))
    .pipe(postcss([
      cssimport(),
      nested(),
      variables(),
      functions({ 
        functions: require('turbo-components/dist/variables')
      }),
      autoprefix()
    ]))
    .pipe(gulp.dest(paths.dest.assets));
}

function watchStyles() {
  gulp.watch(path.join(paths.src.root, globs.css), compileStyles);
}

module.exports = {
  compileStyles,
  watchStyles
};