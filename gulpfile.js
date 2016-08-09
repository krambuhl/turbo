const gulp = require('gulp');

// Clean
const clean = require('./build/clean');

// Render pages to html
const pages = require('./build/pages');


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    pages.compilePages
  )
));

gulp.task('watch', gulp.parallel(
  pages.watchPages
));