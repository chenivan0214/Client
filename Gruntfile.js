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
                tasks: ['copy']
            },
            sass: {
                options: {},
                files: ['src/css/**/*'],
                tasks: ['sass']
            },
            script: {
                options: {},
                files: ['src/js/*'],
                tasks: ['jshint', 'uglify']
            },
            angular: {
                options: {},
                files: ['src/js/angular/**/*'],
                tasks: ['ngAnnotate', 'concat']
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/html/', src: '*', dest: 'dist/', filter: 'isFile'},
                    { expand: true, cwd: 'src/html/view/', src: '*', dest: 'dist/view', filter: 'isFile'}
                ]
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
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'src/js/angular_min/index_app.js': ['src/js/angular/index_app.js']
                }
            }
        },
        jshint: {
            options: {
                node: true
            },
            build: [ 'src/js/**/*']
        },
        concat: {
           angular: {
               src: [
                   'src/js/angular_min/index_app.js'
               ],
               dest: 'dist/js/angular_app.js'
           }
        }
    });

    grunt.registerTask('default', [
        'copy',
        'sass',
        'uglify',
        'ngAnnotate',
        'jshint',
        'concat'
    ]);
    grunt.registerTask('server', ['connect', 'watch']);
};
