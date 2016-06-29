'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');


gulp.task('watch', ['sync'], function(){
  gulp.watch(['public/**/**.css', 'public/**/**.js', 'public/**/*.html']).on('change', browserSync.reload);
});

gulp.task('sync', function(){
  browserSync.init({
    server: "./public"
  })
});

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', function(cb){
  return runSequence('watch', ['sass:watch'], cb)
});
