const gulp = require('gulp');

// Clean
const clean = require('turbo-components/build/clean');

// Styles
const { compileStyles, watchStyles } = require('./build/styles');

// Templates
const { compileTemplates, watchTemplates } = require('./build/templates');

// Render pages to html
const { compilePages, watchPages } = require('./build/pages');

// Watch External Dependencies
const { watchExternal } = require('./build/external');

gulp.task('clean', clean);

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    compileStyles,
    compileTemplates
  ),
	compilePages
));

gulp.task('watch', gulp.parallel(
  watchStyles,
  watchTemplates,
  watchExternal,
  watchPages
));