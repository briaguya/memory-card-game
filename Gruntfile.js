
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: ['react_components/*.js', 'Gruntfile.js'],
        tasks: ['browserify', 'jshint']
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['react_components/*.js'],
        dest: 'public/js/app.built.js'
      }
    },
    jshint: {
      all: ['react_components/*.js'],
      options: {
        newcap: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.registerTask('default', ['browserify']);

};
