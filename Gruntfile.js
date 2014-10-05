/**
 * oweb-default
 * https://github.com/sman591/oweb-default/
 * Copyright (c) 2014 Stuart Olivera
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
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

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['dist/*.html']
    },

    watch: {
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');

  // Default to tasks to run with the "grunt" command.
  grunt.registerTask('default', ['clean', 'haml', 'assemble']);
};
