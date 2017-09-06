// Get Twitter Avatars
//
// Load a JSON file with Twitter IDs, get avatar images and save into a JSON file
// The result file looks like "id1":"url1", "id2": "url2", ...
// To maket it a real JSON file manually the last `,` should be removed and '{}' added
//


// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    fs = require('fs');



// Twitter setup
var Twit = require('twit');

var T = new Twit({
  consumer_key: '7DDlJdQFjOdZH2idGTifxL68A',
  consumer_secret: 'AJzFukL6ss4jlQfkJTONdpI3kasAbK0jSSZkb8PqwngwBwWYwp',
  access_token: '15352486-XpqGNG89qiRBFeD0qXY8Ldd0QSWm8tb3m8MZoO4WS',
  access_token_secret: 'XMMvAzKazKUSp0QeNGB4ubh9C2iPKtjAUyNQ99P8qvT4N'
});



// The JSON source file
var source = '/code/pages/what-some-people-apart-are-up-to-in-2016/what-some-people-apart-are-up-to-in-2016.json';

// The JSON destination file
var dest = '/code/pages/what-some-people-apart-are-up-to-in-2016/avatars.json';



var _getTwitterAvatar = function(source, dest) {
  var json = require('../../..' + source);
  var content = json.content;

  for (var i = 0; i < content.length; i++) {
    var twitter_id = content[i].property1.twitter;

    if (twitter_id != '') {
      T.get('users/show', { screen_name: twitter_id }, function(error, data, response) {
        if (!error) {
          // /1.1/users/show.json?screen_name=Cennydd
          var path = response.request.path;
          twitter_id = path.split("=")[1];
          fs.appendFileSync(process.cwd() + dest, '"' + twitter_id + '": "' + data.profile_image_url + '",');
          console.log(JSON.stringify(twitter_id) + ':' + data.profile_image_url);
          //console.log(response.request.path);
          //console.log(' ')
        } else {
          console.log("Twitter error: " + JSON.stringify(error));
        }
      });
    }
  }
}



gulp.task('getTwitterAvatar', function() {
  _getTwitterAvatar(source, dest);
});
