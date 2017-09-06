// Video Move
//
// - move videos to destination
//
// Styleguide videoMove

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),
    rename = require('gulp-rename'),
    data = require('gulp-data');


// Configuration
var paths = require('./../config');


// Task for moving video files to /dist
gulp.task('video', function() {
  return gulp.src(paths.video_src)
    .pipe(plumber({errorHandler: onError}))
    .pipe(rename({ dirname: '' }))
    .pipe(data(function(fileName) {
      console.log('Moving ' + fileName.path);
    }))
    .pipe(gulp.dest(paths.video_dest))
});
