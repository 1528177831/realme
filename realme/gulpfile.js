const gulp = require('gulp');

gulp.task('copy-html', function() {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
gulp.task('scss', function() {
  return gulp.src('./stylesheet/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename(function(path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  return gulp.src('./images/*.{png,jpg,svg,gif}')
    .pipe(gulp.dest('dist/images/'))
    .pipe(connect.reload());
})

gulp.task('data', function() {
  return gulp.src('./data/*.json')
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());
})

var uglify = require('gulp-uglify');
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})

gulp.task('build', ['copy-html', 'scss', 'images', 'data', 'scripts'], () => {
  console.log('项目建立成功');
})

gulp.task('watch',function(){
  gulp.watch('*.html',['copy-html']);
  gulp.watch("./stylesheet/*.{scss,sass}",['scss']);
  gulp.watch("./images/*.{png,jpg,svg,gif}",['images']);
  gulp.watch('./data/*.json',['data']);
  gulp.watch('./js/*.js',['scripts']);
})

const connect = require('gulp-connect');
gulp.task('server',function() {
  connect.server({
    root:'dist',
    port:'8888',
    livereload:true
  })
})

gulp.task('default',['watch','server']);