const gulp = require('gulp');
const scss = require('./gulp/sass');
const vendor = require('./gulp/vendor');
const settings = require('./gulp/gulp.config');

const watcher = done => {
    gulp.watch('./scss/**/*', scss.compile)
    done();
};
const compile = gulp.series(
    scss.compile,
    vendor.compile
);

const watch = gulp.series(watcher);
const build = gulp.series(compile);

exports.build = build;
exports.default = watch;
