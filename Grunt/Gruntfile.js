'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config =  grunt.file.readYAML('config.yaml');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                hostname: config.server.host,
                port: config.server.localhostPort,
                livereload: config.server.listenerPort
            },
            server: {
                options: {
                    base: 'dist/'
                }
            }
        },
        watch: {
            options: {
                livereload: config.server.listenerPort
            },
            client: {
                options: {
                    livereload: true
                },
                files: ['dist/*.html', 'dist/view/*.html', 'dist/css/*', 'dist/js/**/*']
            },
            html: {
                options: {},
                files: ['src/html/**/*'],
                tasks: ['copyHTML']
            },
            sass: {
                options: {},
                files: ['src/css/**/*'],
                tasks: ['sass']
            },
            script: {
                options: {},
                files: ['src/js/**'],
                tasks: ['jshint', 'copyJS']
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
        copy: {
            main: {
            },
            html: {
                files: [
                    { expand: true, cwd: 'src/html/', src: '*', dest: 'dist', filter: 'isFile'},
                    { expand: true, cwd: 'src/html/view/', src: '*', dest: 'dist/view', filter: 'isFile'}
                ]
            },
            js: {
                files: [
                    { expand: true, cwd: 'src/js/', src: '*', dest: 'dist/js', filter: 'isFile'},
                    { expand: true, cwd: 'src/js/angular/', src: '*', dest: 'dist/js', filter: 'isFile'}
                ]
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
            options: {
                jshintrc: '.jshintrc'
            },
            build: [ 'src/js/**/*']
        }
    });

    grunt.registerTask('default', ['sass', 'uglify', 'jshint']);
    grunt.registerTask('copyHTML', ['copy:html']);
    grunt.registerTask('copyJS', ['copy:js']);
    grunt.registerTask('server', ['connect', 'watch']);
};
