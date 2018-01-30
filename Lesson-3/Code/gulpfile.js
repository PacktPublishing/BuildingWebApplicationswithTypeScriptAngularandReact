var gulp = require("gulp");
var typescript = require("gulp-typescript");
var browserify = require("browserify");
var tsify = require("tsify");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");

var tsServer = typescript.createProject("tsconfig.json");

gulp.task("compile-client", function() {
	return browserify({
		basedir: ".",
		debug: true,
		entries: ["lib/client/index.ts"],
		cache: {},
		packageCache: {}
	})
		.plugin(tsify)
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("static/scripts"));
});
gulp.task("compile-server", function() {
	return gulp
		.src(["lib/server/**/*.ts", "lib/shared/**/*.ts"], { base: "lib" })
		.pipe(sourcemaps.init())
		.pipe(tsServer())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("dist"));
});
gulp.task("release", ["compile-client", "compile-server"], function() {
	return gulp
		.src("static/scripts/bundle.js")
		.pipe(uglify())
		.pipe(gulp.dest("static/scripts"));
});

gulp.task("default", ["compile-client", "compile-server"]);

gulp.task("watch", function() {
	gulp.watch("lib/client/**/*.ts", ["compile-client"]);
	gulp.watch("lib/server/**/*.ts", ["compile-server"]);
});
