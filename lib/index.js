"use strict";

var getReplaceProcessor = require("./replace-processor"),
  usage = require("./usage"),
  parseOptions = require("./parse-options");

function LessPluginReplace(options) {
  this.options = options;
}

LessPluginReplace.prototype = {
  install: function (less, pluginManager) {
    var ReplaceProcessor = getReplaceProcessor(less);
    pluginManager.addPostProcessor(new ReplaceProcessor(this.options));
  },
  printUsage: function () {
    usage.printUsage();
  },
  setOptions: function (options) {
    this.options = parseOptions(options);
  },
  minVersion: [2, 1, 0]
};

module.exports = LessPluginReplace;
