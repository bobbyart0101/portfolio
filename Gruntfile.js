module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/shards-ui/dist/js/shards.min.js',
                    'node_modules/aos/dist/aos.js',
                    'node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js',
                    'node_modules/zingtouch/dist/zingtouch.min.js'
                    ],
                dest: 'assets/js/libs.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/css/app.styles.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'node_modules/shards-ui/dist/css/shards.min.css',
                        'node_modules/aos/dist/aos.css',
                        'node_modules/animate.css/animate.min.css',
                        'assets/css/animista/animista.css',
                        'assets/css/styles.css']
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify', 'cssmin']);

};
