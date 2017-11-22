less-plugin-replace
========================

Simply replaces given strings with other strings

## lessc usage

Install..

```
npm install -g less-plugin-replace
```

and then on the command line,

```
lessc file.less --replace="{pattern}"
```

The pattern is {searchstring}|{replacestring}

```bash
lessc path/to/source.less --replace="patterns='my/path/before/compile|my/new/path/after/compile'"
```

## Programmatic usage

```js
var LessPluginReplace = require('less-plugin-replace');
var replacePlugin = new LessPluginReplace({
    patterns: [
      {
        match: /foo/g,
        replacement: 'bar'
      },
      {
        match: 'my/path/before/compile',
        replacement: 'my/new/path/after/compile'
      }
    ]
  }
);

less.render(lessString, { plugins: [replacePlugin] })
  .then(
```

## Grunt usage

```js
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ['assets/css'],
          plugins: [
            new (require('less-plugin-replace'))({browsers: ["last 2 versions"]}),
          ]
        },
        files: {
          'path/to/result.css': 'path/to/source.less'
        }
      }
    }

  });
  grunt.registerTask('default', 'less');
};
```
