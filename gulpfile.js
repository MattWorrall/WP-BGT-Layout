const gulp = require('gulp'),
    HubRegistry = require('gulp-hub');

const hub = new HubRegistry(['tasks/*.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);