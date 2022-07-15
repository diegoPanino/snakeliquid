"use strict";

const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const settings = require("./gulp.config");

const bundle = () => {
	return gulp
		.src(settings.paths.source.jsvendor)
		.pipe(uglify())
		.pipe(concat("vendor.bundle.min.js"))
		.pipe(gulp.dest(settings.paths.destination.assets));
};

module.exports = {
	compile: bundle,
};
