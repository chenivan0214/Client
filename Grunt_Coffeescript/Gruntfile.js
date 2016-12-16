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
                files: ['dist/*.html', 'dist/css/*', 'dist/js/**/*']
            },
            script: {
                options: {},
                files: ['src/js/**/*'],
                tasks: ['coffee', 'jshint']
            },
            html: {
                options: {},
                files: ['src/jade/**/*'],
                tasks: ['jade']
            },
            less: {
                files: ['src/css/**/*'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        coffee: {
            compile: {
                files: {
                   'dist/js/test.js': 'src/js/test.coffee'
                }
            }
        },
        jshint: {
            build: [ 'dist/js/**/*' ]
        },
        less: {
            development: {
                options: {
                    path: ['src/css/import']
                },
                files: {
                    'dist/css/style.css': 'src/css/style.less'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [
                   {expand: true, cwd: 'src/jade/', src: '*.jade', dest: 'dist', ext: '.html'}
               ]
            }
        }
    });

    grunt.registerTask('server', ['connect', 'watch']);
};
