const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sassLint = require('gulp-sass-lint'),
  sassDoc = require('sassDoc');

const sassOptions = {
  precision: 8
};

const sassLintOptions = {
  files: {
    ignore: 'src/scss/partials/_normalize.scss' // ignore normalize, by its nature it breaks the rules!
  }
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

const sassDocOptions = {
  dest: 'docs/css',
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true
  },
  package: {
    title: 'BGT WebApps Layout',
    name: 'bgt-layout',
    license: 'Internal Use Only',
    homepage: 'https://github.com/MattWorrall/WP-BGT-Layout',
    description: 'Standard layout frame work for BGT web applications'
  }
};

gulp.task('build:scss', () => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sassLint(sassLintOptions))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sassDoc(sassDocOptions)) // TODO move this to release:scss task when created
    .pipe(sourceMaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoPrefixerOptions))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});
