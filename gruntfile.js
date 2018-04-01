module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        dist:{
            options: {
                style: 'compressed'
            },
            files: {
                'css/komplete.css': 'scss/komplete.scss'
            }
        }
    },
    watch: {
      css: {
          files: ['scss/*.scss'],
          tasks: ['sass'], 
          options:{
              spawn:false
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass', 'watch']);

};