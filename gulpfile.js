var gulp = require('gulp');
var del = require('del');
var to5 = require('gulp-6to5');
var nodemon = require('gulp-nodemon');

var paths = {
    scripts: ['app/**/*.js']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['build'], cb);
});

gulp.task('6to5',['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(to5())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('develop',['6to5'], function () {
    nodemon({ script: './dist/server.js', ext: 'js', ignore: ['./dist/server.js']})
        /*.on('change', ['6to5'],function() {
            console.log('changed!');
        })*/
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('default', ['develop']);