"use strict";

module.exports = function (options) {
  if (typeof options === "string") {
    var optionArgs = options.split(" ");
    options = {};
    options.patterns = [];

    for (var i = 0; i < optionArgs.length; i++) {
      var argSplit = optionArgs[i].split("="),
        argName = argSplit[0].replace(/^-+/, "");
      switch (argName) {
        case "patterns":
          var patterns = argSplit[1];
          var parts = patterns.split('|');

          options.patterns.push({
            match: parts[0],
            replacement: parts[1]
          });
          break;
        default:
          throw new Error("unrecognised replace option '" + argSplit[0] + "'");
      }
    }
  }
  return options;
};
