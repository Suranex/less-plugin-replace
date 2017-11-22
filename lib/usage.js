"use strict";

module.exports = {
  printUsage: function() {
    console.log("");
    console.log("Replace Plugin");
    console.log("specify plugin with --replace");
    this.printOptions();
    console.log("");
  },
  printOptions: function() {
    console.log("Only option: --patterns=search|replace");
  }
};
