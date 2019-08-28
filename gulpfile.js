const gulp = require("gulp");
const nj = require("gulp-nunjucks-render");
const inline_source = require("gulp-inline-source");
const inline_css = require("gulp-inline-css");

function build() {
  return gulp
    .src("./templates/**/*.nj")
    .pipe(nj())
    .pipe(
      inline_source({
        rootpath: __dirname
      })
    )
    .pipe(
      inline_css({
        applyLinkTags: false,
        removeLinkTags: true
      })
    )
    .pipe(gulp.dest("./build"));
}

function watch() {
  return gulp.watch(["./templates", "./lib"], build);
}

exports.build = build;
exports.watch = gulp.series(build, watch);
