// Add Twitter avatar
//
// Loads a JSON file where avatars needs to be inserted and inserts avatars from another JSON file containing the avatar images
// These two tasks couldn't be merged into one because getting Twitter avatars is slow and Gulp / node is async even with runSequence
// So I've split getting avatars into a seperate task which must be run first
//



// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    fs = require('fs');


// Script setup
var source1 = '/code/pages/what-some-people-apart-are-up-to-in-2016/what-some-people-apart-are-up-to-in-2016.json';
var source2 = '/code/pages/what-some-people-apart-are-up-to-in-2016/avatars.json';



var _addTwitterAvatar = function(source1, source2) {
  var json1 = require('../../..' + source1);
  var json2 = require('../../..' + source2);

  for (var i = 0; i < json1.content.length; i++) {
    var id = json1.content[i].property1.twitter;
    var avatar = json2[id];

    console.log('id:' + id);
    console.log('avatar:' + avatar);

    if ((id != '') && (avatar)) {
      json1.content[i].property1.avatar = avatar;
    }
  }

  return json1;
}



gulp.task('addTwitterAvatar', function() {
  var json = _addTwitterAvatar(source1, source2);
  //console.log(JSON.stringify(json, null, 2));

  fs.openSync(process.cwd() + source1, 'w');
  fs.appendFileSync(process.cwd() + source1, JSON.stringify(json, null, 2));
});
