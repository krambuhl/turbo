const gulp = require('gulp');

// Clean
const clean = require('./build/clean');

// Styles
const styles = require('./build/styles');

// Render pages to html
const pages = require('./build/pages');


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    styles.compileStyles,
    pages.compilePages
  )
));

gulp.task('watch', gulp.parallel(
  styles.watchStyles,
  pages.watchPages
));