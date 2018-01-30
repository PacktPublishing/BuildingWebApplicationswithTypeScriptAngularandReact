var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("gulp-typescript");
var browserify = require("browserify");
var tsify = require("tsify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");

var tsServer = typescript.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("compile-client", function() {
	return browserify({
		basedir: ".",
		debug: true,
		entries: ["lib/client/index.tsx"],
		cache: {},
		packageCache: {}
	})
		.plugin(tsify)
		.bundle()
		.pipe(source("scripts.js"))
		.pipe(gulp.dest("static/scripts"));
});
gulp.task("compile-server", function() {
	return gulp.src(["lib/server/**/*.ts", "lib/shared/**/*.ts"], { base: "lib" })
		.pipe(sourcemaps.init())
		.pipe(tsServer())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist"));
});
gulp.task("release", ["compile-client", "compile-server"], function() {
	return gulp.src("static/scripts/**.js")
		.pipe(uglify())
		.pipe(gulp.dest("static/scripts"));
});

gulp.task("default", ["compile-client", "compile-server"]);
