/**
 * oweb-default
 * https://github.com/sman591/oweb-default/
 * Copyright (c) 2014 Stuart Olivera
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          bundleExec: true,
          sassDir: 'src',
          cssDir: 'dist',
          environment: 'production'
        }
      }
    },

    haml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.haml',
        }
      }
    },

    clean: ['dist/*.html', 'dist/*.css'],

    watch: {
      css: {
        files: 'src/*.sass',
        tasks: ['compass']
      },
      haml: {
        files: 'src/*.haml',
        tasks: ['haml']
      },
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['clean', 'compass', 'haml']);

  grunt.registerTask('default', ['build', 'watch']);
};
