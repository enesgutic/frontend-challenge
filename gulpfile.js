var gulp = require('gulp');
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
  gulp.src('./themes/adchallenge/sass/style.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/adchallenge/css/'))
    .pipe(livereload())
});


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./themes/adchallenge/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass'));

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var connect = require('gulp-connect');

// gulp.task('connect', function(){
//   connect.server({
//     root: 'themes/adchallenge',
//     livereload: true
//   });
// });

// // keeps gulp from crashing for scss errors
// gulp.task('sass', function () {
//   return gulp.src('./themes/adchallenge/sass/*.scss')
//       .pipe(sass({ errLogToConsole: true }))
//       .pipe(gulp.dest('./themes/adchallenge/css'));
// });

// gulp.task('livereload', function (){
//   gulp.src('./themes/adchallenge/**/*')
//   .pipe(connect.reload());
// });

// gulp.task('watch', function () {
//   gulp.watch('./themes/adchallenge/sass/**/*.scss', gulp.series('sass'));
//   gulp.watch('./themes/adchallenge/**/*', gulp.series('livereload'));
// });

// gulp.task('default', gulp.series('connect', 'watch', 'sass'));
