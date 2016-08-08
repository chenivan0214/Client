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
                    base: 'dist/'
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
                files: ['dist/*.html', 'dist/css/*', 'dist/js/*.js']
            },
            sass: {
                options: {},
                files: ['src/css/**/*'],
                tasks: ['sass']
            },
            script: {
                options: {},
                files: ['src/js/**/*'],
                tasks: ['uglify']
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'dist/css/style.css': 'src/css/style.scss'
                }
            }
        },
        uglify: {
            options: {},
            build: {
                src: 'src/js/*.js',
                dest: 'dist/js/common.min.js'
            }
        },
        jshint: {
            options: {},
            build: [ 'Gruntfile.js', 'src/js/**/*' ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['sass', 'uglify', 'jshint']);
    grunt.registerTask('live', ['connect', 'watch']);
};
