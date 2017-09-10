require('./../../framework/design/decorations/wave/wave.js');


var click = require('./../../framework/helpers/js/click.js');
var select = require('./../../framework/helpers/js/select.js');
var klass = require('./../../framework/helpers/js/klass.js');


var artwork = function() {
  var trigger = select('.artwork');
  var target = select('.about');

  click(trigger, function() {
    klass(target[0], 'about--active', 'toggle');
  });
}

artwork();
