'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./static/css/'));
});

 
// gulp.task('css', function () {
//   return gulp.src('./static/css/*.css')
//     .pipe(uglifycss({
//       // "maxLineLen": 80,
//       "uglyComments": true
//     }))
//     .pipe(gulp.dest('./static/css/'));
// });
// var uglify = require('gulp-uglify');
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
// var pump = require('pump');
 
// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('./static/css/*.css'),
//         uglify(),
//         gulp.dest('/static/css/')
//     ],
//     cb
//   );
// });