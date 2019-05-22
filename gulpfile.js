let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
/*
 * Variables
 */
// Sass Source
let scssFiles = './src/scss/style.scss';

// CSS destination
let cssDest = './dist/css';

// Options for development
let sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
let sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */

// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', () => {
    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', () => {
    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});
  
// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', () => {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);
