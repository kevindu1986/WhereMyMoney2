module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        //Compile TypeScript files into JavaScript
        ts: {
            base: {
                src: ['Scripts/app/boot.ts', 'Scripts/app/**/*.ts'],
                outDir: 'wwwroot/app',
                tsconfig: './tsconfig.json'
            }
        },

        //Combine and minify all the files from the Scripts folder and generates the result within wwwroot folder
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'wwwroot/app',
                    src: ['**/*.js'],
                    dest: 'wwwroot/app'
                }]
            },
            options: {
                sourceMap: true
            }
        },

        // Copy all JS files from external libraries and required NPM packages to wwwroot/js
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'Scripts/js/**/*.js',
                        'node_modules/es6-shim/es6-shim.min.js',
                        'node_modules/systemjs/dist/system-polyfills.js',
                        'node_modules/angular2/bundles/angular2-polyfills.js',
                        'node_modules/systemjs/dist/system.src.js',
                        'node_modules/rxjs/bundles/Rx.js',
                        'node_modules/angular2/bundles/angular2.js',
                        'node_modules/angular2/bundles/http.js',
                        'node_modules/angular2/bundles/router.js'
                    ],
                    dest: 'wwwroot/js/',
                    filter: 'isFile'
                },
                {
                    cwd: 'Pages/',
                    src: '**/*.html',
                    dest: 'wwwroot/pages/',
                    filter: 'isFile',
                    expand: true
                }]
            },
        },

        //Clean all file in wwwroot before compiling the scripts
        clean: {
            app: "wwwroot/app",
            js: "wwwroot/js",
            pages: "wwwroot/pages"
        }

        // Watch specified files and define what to do upon file changes
        //watch: {
        //    scripts: {
        //        files: ['Scripts/**/*.js'],
        //        tasks: ['ts', 'uglify', 'copy']
        //    }
        //}
    });

    // Define the default task so it will launch all other tasks
    grunt.registerTask('default', ['clean', 'ts', 'uglify', 'copy']);
};