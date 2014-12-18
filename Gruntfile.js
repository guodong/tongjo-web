module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//            },
//            build: {
//                src: 'src/js/*.js',
//                dest: 'public/build/js/tongjo.min.js'
//            }
//        },
        concat: {
            css: {
                src: ['src/css/*.css'],
                dest: 'dest/css/all.css'
            }
        },
        less: {
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    "dest/css/tongjo.css": "src/less/tongjo.less"
                }
            }
        },
        cssmin: {
            css: {
                src: 'dest/css/tongjo.css',
                dest: 'public/build/css/tongjo.min.css'
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './public/lib'
                }
            }
        },
//        requirejs: {
//            compile: {
//                options: {
//                    baseUrl: "src/js",
//                    mainConfigFile: "src/js/config.js",
//                    name: "config",
//                    dir: "public/build/js",
//                    out: "public/build/js/tongjo.min.js"
//                }
//            }
//        },
        watch: {
            css: {
                files: ['src/less/*.less', 'src/less/*/*.less'],
                tasks: ['less', 'concat', 'cssmin'],
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('all', ['bower', 'concat', 'cssmin']);
    grunt.registerTask('default', ['less', 'concat', 'cssmin']);
};