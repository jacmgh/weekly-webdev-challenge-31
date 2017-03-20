var browserSync = require('browser-sync');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var PROD = process.env.NODE_ENV === 'production';
var proxy = '';

var paths = {
    styles: {
        entry: 'src/scss/index.scss',
        output: 'dist/css/',
        watch: 'src/scss/**/*.scss',
    },
    watch: 'dist/**/*.{html,php,js}',
    browserSync: {
        server: 'dist/',
        proxy: 'localhost/projects/' + proxy + '/dist/'
    }
};

var browsersList = {
    browsers: ['last 2 versions', '> 1%', '> 1% in PL', 'IE 10', 'Firefox ESR']
};

gulp.task('styles', function () {
    gulp.src(paths.styles.entry)
        .pipe(gulpif(!PROD, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PROD, postcss([autoprefixer(browsersList), cssnano()])))
        .pipe(rename('styles.min.css'))
        .pipe(gulpif(!PROD, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.output))
        .pipe(gulpif(!PROD, browserSync.stream({match: '**/*.css'})));
});

gulp.task('serve', function () {
    browserSync.init({
        server: !proxy && paths.browserSync.server,
        proxy: proxy && paths.browserSync.proxy,
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.styles.watch, ['styles']);
    gulp.watch(paths.watch).on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve', 'watch']);
gulp.task('build', ['styles']);
