var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpts = require("gulp-typescript");
const browserSync = require('browser-sync')

gulp.task('scripts', async () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('compiled'))
});
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });
})
gulp.task('copyclient', async () => {
    gulp.src('./client/build/**')
        .pipe(gulp.dest('./dist/client/'));
});