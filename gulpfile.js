var gulp = require('gulp'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: [__dirname],
    livereload: true
  });
});

gulp.task('html', function(){
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function(){
  gulp.src('static/css/site/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('static/css/site/*.css', ['css']);
  gulp.watch('*.html', ['html']);
});

gulp.task('default', ['connect', 'html', 'css', 'watch']);