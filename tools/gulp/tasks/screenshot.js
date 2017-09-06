// Create sceenshots
// - create screenshoots from URLs
// - resize them responsively
// - optimize them and move the to production
// - create a JSON file with all information from the URLs
//
// Usage
// - run the tasks step by step, ie first do the screenshots, then resize, then optimize & move
// - it's good to have `@assests/images/resized` created apriori running the script
//
// Caveats:
// - sometimes screenshots are blank (when WebGL is used, when render starts on mouse scroll, etc)
// - this 'sometimes' means ~50% of cases ...
// - the script sometimes doesn't stops, ctrl+c must be used


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),
    getJSONData = require('../utils/getJSONData'),

    data = require('gulp-data'),
    fs = require('fs'),
    webshot = require('webshot'),
    path = require('path'),
    titleize = require('titleize'),

    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

    rename = require('gulp-rename'),
    imageResize = require('gulp-image-resize'),
    gulpif = require('gulp-if');


// Configuration
var paths = require('./../config');


// Helpers
// ---


// URL to filename
// - http://showroom.littleworkshop.fr/ => showroom.littleworkshop
var urlToFilename = function(url) {
  var ret = url.replace('http://', '');
  ret = ret.replace('https://', '');
  ret = ret.replace('www.', '');
  ret = ret.replace('/', '');
  ret = ret.replace(/\./g, '-');
  return ret;
}


// Filename to title
// - abscreenwear-com => Abscreenwear
var fileNameToTitle = function(fileName) {
  var s = fileName.replace(/-/g, ' ');
  s = s.split(' ');
  s = s.slice(0, s.length - 1).join(" ");
  return titleize(s);
}


// Final file name
// - abscreenwear-landscape.png
var finalFileName = function(folder, fileName, suffix, extension) {
  return folder + fileName + '-' + suffix + extension;
}


// Screenshots
// ---


// Create single screenshot for an url
var makeScreenshot = function(url, options, suffix, folder) {
  var fileName = urlToFilename(url);
  var dest = finalFileName(folder, fileName, suffix, '.png');
  webshot(url, dest, options, function(err) {
    console.log('Creating ' + dest);
  });
}


// Create multiple screenshots for an url
// - for portrait, landscape
var makeScreenshots = function(url, sizes, folder) {
  for (var i = 0; i < sizes.length; i++) {
    var options = {
      screenSize: {
        width: sizes[i].width,
        height: sizes[i].height
      },
      renderDelay: 20000,
      timout: 30000
    }
    makeScreenshot(url, options, sizes[i].suffix, folder);
  }
}


// Create screenshots for a list of urls
var screenshots = function(urls, sizes, folder) {
  for (var i = 0; i < urls.length; i++) {
    makeScreenshots(urls[i], sizes, folder);
  }
}



// JSON
// ---

// The JSON entry for sliders
var jsonEntryForSlider = function(fileName, title, url) {
  return {
    "title": title,
    "name": fileName + '-landscape',
    "responsive": [
      {
        "breakpoint": "mobile",
        "name": fileName + '-portrait'
      },
      {
        "breakpoint": "tablet",
        "name": fileName + '-portrait'
      }
    ],
    "url": url,
    "figcaption": "<a class='link' href='" + url + "'>" + url + "</a>"
  }
}


// The JSON entry for image inside a post
var jsonEntryForPost = function(fileName, title, url) {
  return {
    "title": title,
    "name": fileName + '-landscape',
    "responsive": [
      {
        "breakpoint": "mobile",
        "name": fileName + '-portrait'
      },
      {
        "breakpoint": "tablet",
        "name": fileName + '-portrait'
      }
    ],
    "link": {
      "title": title,
      "url": url,
      "type": "external"
    }
  }
}


// Create an 'images' JSON descriptor from a list of urls
// - the JSON descriptor can be configured using options
var jsonImages = function(urls, sizes, folder, options) {
  dest = folder + 'images.json';
  jsonType = options.json;

  fs.openSync(dest, 'w');
  json = [];

  for (var i = 0; i < urls.length; i++) {
    var fileName = urlToFilename(urls[i]);
    var title = fileNameToTitle(fileName);

    switch (jsonType) {
      case 'for slider':
        var entry = jsonEntryForSlider(fileName, title, urls[i]);
        json.push(entry);
        break;
      case 'for post':
        var entry = jsonEntryForPost(fileName, title, urls[i]);
        json.push(entry);
        break;
      default:
        console.log('No options.json is set.');
    }
  }

  //console.log(JSON.stringify(json));
  fs.appendFileSync(dest, JSON.stringify(json, null, 2));
}



// Resize
// ---


// Resize a single image with ImageMagick
var _imageResize = function(file, sizeType, size, name, dest) {
  console.log("Resizing " + file + " " + sizeType + " to " + size);
  gulp.src(file)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulpif(sizeType == 'height',
      imageResize({
        height : size,
        sharpen: true,
        imageMagick: true
      }),
      imageResize({
        width : size,
        sharpen: true,
        imageMagick: true
      })
    ))
    .pipe(rename(function (path) { path.basename += "_" + name; }))
    .pipe(gulp.dest(dest));
}


// Resize an image to 1x and 2x
var imageSize = function(file, sizes, dest) {
  for (i in sizes) {

    // Width or height?
    size = sizes[i].width;
    sizeType = 'width';
    if (typeof sizes[i].height !== 'undefined') {
      size = sizes[i].height;
      sizeType = 'height';
    }

    // Normal and retina
    _imageResize(file, sizeType, size, sizes[i].name, dest);
    _imageResize(file, sizeType, size * 2, sizes[i].name + '2x', dest);
  }
}



// Resize a list of images
var resize = function(urls, sizes, responsive, folder, resizeFolder) {
  for (var i = 0; i < urls.length; i++) {
    var fileName = urlToFilename(urls[i]);

    for (var j = 0; j < sizes.length; j++) {
      var src = finalFileName(folder, fileName, sizes[j].suffix, '.png');
      imageSize(src, responsive, resizeFolder)
    }
  }
}



// Optimize
// ---

// Optimize images from a folder
var optimize = function(src, dest) {
  return gulp.src(src)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      console.log('Optimizing ' + file.path);
    }))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(dest));
}




// The main task
gulp.task('screenshot', function() {
  var fileName = process.argv[4];
  var action = process.argv[6]

  if (fileName === undefined || action === undefined) {
    console.log('Usage: gulp screenshot --file <complete-path-to-imagelist-file.json> --action json|screenshot|resize|optimize');
  } else {

    return gulp.src(fileName)
      .pipe(plumber({errorHandler: onError}))
      .pipe(data(function(fileName) {

        var data = getJSONData(fileName);
        var folder = path.dirname(fileName.path) + '/@assets/images/';
        var resizeFolder = folder + 'resized/';
        var resizeFolderImages = resizeFolder.slice(0, -1) + paths.image_ext;

        if (data) {

          var urls = data.urls;
          var sizes = data.sizes;
          var responsive = data.responsive;
          var options = data.options;

          switch (action) {
            case 'json':
              jsonImages(urls, sizes, folder, options);
              break;
            case 'screenshot':
              screenshots(urls, sizes, folder);
              break;
            case 'resize':
              resize(urls, sizes, responsive, folder, resizeFolder);
              break;
            case 'optimize':
              optimize(resizeFolderImages, paths.image_dest);
              break;
            default:
              console.log('Action not recognized.');
          }
        }
      }))
  }
});
