'use strict'; 

module.exports = function(grunt) {
    var loclhostPort = 8000,
        listenerPort = 35729;
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                port: loclhostPort,
                hostname: 'localhost',
                livereload: listenerPort
            },
            server: {
                options: {
                    base: 'src/'
                }
            }
        },
        watch: {
            options: {
                livereload: listenerPort
            },
            client: {
                options: {
                    livereload: true
                },
                files: ['src/*.html', 'src/css/**/*', 'src/js/**/*.js']
            }
        },
        uglify: {
            options: {},
            build: {
                src: 'src/js/*.js',
                dest: 'build/js/min.js'
            }
        },
        jshint: {
            build: [ 'Gruntfile.js', 'src/js/*.js' ],
            options: {}
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['uglify', 'jshint']);
    grunt.registerTask('live', ['connect', 'watch']);
};