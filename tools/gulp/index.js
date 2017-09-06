console.time("Loading plugins"); //start measuring

// Cache require file names
require('cache-require-paths');

// Loading all tasks
var fs = require('fs');
var tasks = fs.readdirSync('./tools/gulp/tasks/');
var special_tasks = fs.readdirSync('./tools/gulp/special_tasks/');

tasks.forEach(function(task) {
  require('./tasks/' + task);
});

special_tasks.forEach(function(task) {
  require('./special_tasks/' + task);
});
