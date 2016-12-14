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
            html: {
                options: {},
                files: ['src/html/**/*'],
                tasks: ['copy:html']
            },
            less: {
                files: ['src/css/**/*'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            script: {
                options: {},
                files: ['src/js/**/*'],
                tasks: ['coffee']
            }
        },
        coffee: {
            compile: {
                files: {
                   'dist/js/test.js': 'src/js/test.coffee'
                }
            }
        },
        less: {
            development: {
                options: {
                    //compress: true,
                    path: ['src/css/import']
                },
                files: {
                    'dist/css/style.css': 'src/css/style.less'
                }
            }
        },
        copy: {
            html: {
                files: [
                    { expand: true, cwd: 'src/html/', src: '*', dest: 'dist', filter: 'isFile'},
                ]
            }
        }
    });

    grunt.registerTask('server', ['connect', 'watch']);
};
