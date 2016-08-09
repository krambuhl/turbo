const gulp = require('gulp');
const path = require('path');
const Handlebars = require('handlebars');
const through = require('through2');

Handlebars.registerHelper(require('turbo-components/dist/helpers'));
Handlebars.registerPartial(require('turbo-components/dist/templates'));

const {
  paths,
  globs
} = require('./config');

const renderTemplate = opts => 
  through.obj(function(file, enc, done) {
    const template = Handlebars.compile(file.contents.toString());

    file.contents = new Buffer(template({}));
    file.extname = '.html';

    done(null, file);
  });

function compilePages() {
  return gulp.src(path.join(paths.src.pages, globs.hbs))
    .pipe(renderTemplate())
    .pipe(gulp.dest(paths.dest.root));
}

function watchPages() {
  gulp.watch(path.join(paths.src.components, globs.hbs), compilePages);
  gulp.watch(path.join(paths.src.pages, globs.hbs), compilePages);
}

module.exports = {
  compilePages,
  watchPages
};