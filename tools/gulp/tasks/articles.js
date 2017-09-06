// Articles
//
// Generate a file with JSON metadata from all posts.


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),

    data = require('gulp-data'),
    fs = require('fs'),
    runSequence = require('run-sequence'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');


// Generate the JSON article file
gulp.task('articleCreateFile', function() {
  // Reset the articles.json file
  fs.openSync(paths.articles_json, 'w');
  fs.appendFileSync(paths.articles_json, '[');

  return gulp.src(paths.articles_src)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      // Do not include .jsons from @assets && the home.json
      if ((file.path.indexOf('@assets') == -1) && (file.path.indexOf('home.json') == -1)) {
        // Do not include empty JSONS
        if (file.contents != '{}') {
          fs.appendFileSync(paths.articles_json, file.contents + ',');
        }
      }
    }))
});


// Close the JSON article file
gulp.task('articleCloseFile', function() {
  fs.appendFileSync(paths.articles_json, '{}]');
});


// Sort articles by date
// - after working well for a year this code broke without being touched
function sortByDate(data) {
  var sorted = [];

  Object.keys(data).sort(function(a, b) {
    return data[a].date > data[b].date ? -1 : 1
  }).forEach(function(key) {
    sorted.push(data[key]);
  });

  return sorted;
}


// Order the JSON article file by date
gulp.task('articleOrderArticles', function() {
  var articles = JSON.parse(fs.readFileSync(paths.articles_json, 'utf8'));

  articles = sortByDate(articles);
  /*
  articles.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });
  */

  fs.openSync(paths.articles_json, 'w');
  fs.appendFileSync(paths.articles_json, JSON.stringify(articles));
});


gulp.task('articles', function(cb) {
  runSequence(
    'articleCreateFile',
    'articleCloseFile',
    'articleOrderArticles',
    cb
  );
});
