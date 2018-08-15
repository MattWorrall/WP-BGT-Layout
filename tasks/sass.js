const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

const sassOptions = {
    precision: 8
};

const autoPrefixerOptions = {
    browsers: [
        'Android >= 6',
        'Chrome >= 56',
        'Firefox >= 51',
        'Explorer >= 11',
        'iOS >= 10',
        'Opera >= 43',
        'Safari >= 10',
        'Edge >= 12'
    ]
};

gulp.task('build:scss', () => {
    return gulp.src('./src/scss/bgt-layout.scss')
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoPrefixerOptions))
        .pipe(gulp.dest('./dist/css'));
});