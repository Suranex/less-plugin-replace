"use strict";

module.exports = function () {
  function ReplaceProcessor(options) {
    this.options = options || {};
  }

  ReplaceProcessor.prototype = {
    process: function (css, extra) {
      var options = this.options;
      var patterns = options.patterns;

      if (typeof patterns === "undefined") {
        patterns = [];
      }

      var output = css;
      for (var i = 0; i < patterns.length; i++) {
        var regex = (typeof patterns[i].match === 'object') ? patterns[i].match : new RegExp(patterns[i].match, "g");
        output = output.replace(regex, patterns[i].replacement);
      }

      return output;
    }
  };

  return ReplaceProcessor;
};

