module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
         babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "src/game",
                    "src": ["**/*.js"],
                    "dest": "build/",
                    "ext": ".js"
                }]
            }
        },
        concat: {
            dist: {
                src: [  
                    "src/phaser.min.js",
                    "src/lib/**/*.js",
                    "build/**/*.js"
                ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['babel','concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['babel','concat', 'connect', 'open', 'watch']);

}