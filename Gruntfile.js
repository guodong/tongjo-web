module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/*.js',
                dest: 'public/build/js/tongjo.min.js'
            }
        },
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
        watch: {
            css: {
                files: ['src/less/*.less'],
                tasks: ['less', 'concat', 'cssmin'],
            },
        },
    });
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('all', ['uglify', 'bower', 'concat', 'cssmin']);
    grunt.registerTask('default', ['uglify', 'less', 'concat', 'cssmin']);
};