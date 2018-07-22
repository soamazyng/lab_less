var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var less = require('gulp-less');

gulp.task('default', ['less', 'watch', 'browser-sync']);

gulp.task('less', function() {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('./less/*', ['less']);  
});

gulp.task('browser-sync', function() {
    
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);    
    gulp.watch("./less/*.less").on("change", reload);

});
