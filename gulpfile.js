"use strict";
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('minify', () => {
	return gulp.src('mscan/index.js')
	.pipe(uglify())
	.pipe(rename('min.js'))
	.pipe(gulp.dest('mscan'));
});