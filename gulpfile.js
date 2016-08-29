'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('scripts', function(){
    return gulp.src('src/js/main.js')
    .pipe(gulp.dest('dist/'));
})

gulp.task('scripts:watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
})

gulp.task('default', ['sass:watch', 'scripts:watch']);
