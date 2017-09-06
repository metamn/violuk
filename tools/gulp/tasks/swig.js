// SWIG
//
// Compile .swig files into .html, .scss or .js
// - .swig files has to have two extensions like colors.scss.swig or page.html.swig. Once compiled the .swig extension will be removed.
// - if there is a YAML Front Matter definition in a .swig file it will be processed
// - if there is an associated .json file it will be processed (ie. colors.scss.swig will look for colors.scss.json)
// - when generating the styleguide the associated .json file from site will be used. For example colors.scss.json from site will be available for colors.scss.swig in the styleguide
// - the global 'config.json' will be processed
// - when generating the styleguide the global 'styleguide/config.json' will be processed
// - the global 'kss.json' file will be processed
//
// Styleguide swig


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),

    swig = require('gulp-swig'),
    data = require('gulp-data'),
    marked = require('swig-marked'),
    typeset = require('gulp-typeset'),
    gulpif = require('gulp-if'),


    fs = require('fs'),
    path = require('path'),
    onError = require('../utils/onError'),
    getJSONData = require('../utils/getJSONData');


// Configuration
var paths = require('./../config');


// check if file contains markdown
// - wanted to fix the &mdash; which is rendered with random spacw by swig. No luck
// - used gulp-typeset, gulp-typogr etc...
var isMarkdown = function(file) {
  //var fileContent = fs.readFileSync(file.path, "utf8");
  //var md = (fileContent.indexOf('class="markdown"') !== -1)
  //return md;
  return false;
}



var _swig = function(source, dest, config, articles) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))

    // load JSONs
    .pipe(data(getJSONData))
    .pipe(swig({
      defaults: {
        cache: false,
        locals: {
          // Load all articles
          // articles: require(articles),

          // Load site-wide JSON settings
          site: require(config),
        }
      },
      setup: function(swig) {
        marked.useTag(swig, 'markdown');
      }
    }))
    .pipe(rename({ extname: '' }))
    //.pipe(gulpif(isMarkdown, typeset()))
    .pipe(gulp.dest(dest));
}


// Task for compiling .swig files from /site
gulp.task('swig', function() {
  _swig(paths.swig_src, paths.swig_dest, paths.config_json, paths.rootDir + paths.articles_json);
});
