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
                files: ['dist/*.html', 'dist/view/*.html', 'dist/css/*', 'dist/js/**/*']
            },
            html: {
                options: {},
                files: ['src/html/*.html'],
                tasks: ['htmlmin']
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
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/html/index.html'
                }
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [
        'htmlmin',
        'sass',
        'uglify',
        'ngAnnotate',
        'jshint',
        'concat'
    ]);
    grunt.registerTask('live', ['connect', 'watch']);
};
