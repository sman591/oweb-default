/**
 * oweb-default
 * https://github.com/sman591/oweb-default/
 * Copyright (c) 2014 Stuart Olivera
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    haml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.haml',
        }
      }
    },

    assemble: {
      options: {flatten: true}
    },

    clean: ['dist/*.html', 'dist/*.css'],

    watch: {
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['clean', 'haml', 'assemble']);
};
