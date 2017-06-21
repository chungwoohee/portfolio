module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    serve: {
        options: {
            port: 9000
        }
    },
    less: {
        product: {
            options: {
            paths: ['assets/css'],
            compress:true
            },
            files: {
            'assets/css/style.css': 'assets/less/import.less'
            }
        },
        dev: {
            options: {
            paths: ['assets/css'],
            dumpLineNumbers:"comments"
            },
            files: {
            'assets/css/style.dev.css': 'assets/less/import.less'
            }
        }
    },
    watch: {
        scripts: {
            files: ['assets/less/*.less'],
            tasks: ['less'],
            options: {
            spawn: false,
            },
        },
    },
    includes: {
          files: {
            src: ['path/to/foo.html', 'path/to/bar.html'], // Source files
            dest: 'tmp', // Destination directory
            flatten: true,
            cwd: '.',
            options: {
              silent: true,
              banner: '<!-- I am a banner <% includes.files.dest %> -->'
            }
          },
          htmlhint: {
      html1: {
        options: {
          'tag-pair': true
        },
        src: ['path/to/**/*.html']
      },
      html2: {
        options: {
          'tag-pair': true
        },
        src: ['path/to/**/*.html']
      }
}
}

});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['serve']);


  //grunt-htmlhint html 구문검사
  grunt.loadNpmTasks('grunt-htmlhint');
  //grunt-includes html 환경에서 인크루드를 쓸수있게 해줌
  grunt.loadNpmTasks('grunt-includes');
};
