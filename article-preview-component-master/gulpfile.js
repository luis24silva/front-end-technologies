var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var gls = require('gulp-live-server');

gulp.task('sass', function(){
    gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('serve', function(){
    var server = gls.static('./app', 9922);
    server.start();
});

gulp.task('default', gulp.parallel('sass', 'serve', function(){
    console.log("Up and running");
}));

