const gulp = require('gulp');
const path = require('path');
const Handlebars = require('handlebars');

const through = require('through2');

const {
  paths,
  globs
} = require('./config');

const registerTurbo = () => {
  delete require.cache['turbo-components'];
  delete require.cache['turbo-components/dist/helpers'];
  delete require.cache['turbo-components/dist/templates'];

  const helpers = require('turbo-components/dist/helpers');
  const templates = require('turbo-components/dist/templates');

  Handlebars.registerPartial(templates);

  Object.keys(helpers).forEach(name => {
    const helper = helpers[name];
    if (helper.register) {
      helper.register(Handlebars);
    } else {
      Handlebars.registerHelper(name, helper);
    }
  });
}

const renderTemplate = opts => {
  registerTurbo();
  return through.obj(function(file, enc, done) {
    const template = Handlebars.compile(file.contents.toString());

    file.contents = new Buffer(template({}));
    file.extname = '.html';

    done(null, file);
  });
}

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