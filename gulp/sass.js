const autoprefixer = require("autoprefixer");
const cleancss = require("gulp-clean-css");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const settings = require("./gulp.config");
const stylelint = require("gulp-stylelint");

const processors = [
	autoprefixer({
		flexbox: "no-2009",
		grid: true,
	}),
];

const scss = () => {
    return gulp
		.src(settings.paths.source.scss)
		.pipe(
			stylelint({
				reporters: [{ formatter: "verbose", console: true }],
				fix: true,
			})
		)
		.pipe(sass({ outputStyle: "expanded" }))
		.on("error", sass.logError)
		.pipe(cleancss({ level: 2 }))
		.pipe(postcss(processors))
        .pipe(rename({
                suffix: ".min",
				basename: "custom",
			})
		)
		.pipe(gulp.dest(settings.paths.destination.assets));
};

module.exports = {
    compile: scss
};