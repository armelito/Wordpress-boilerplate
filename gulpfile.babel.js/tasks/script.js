import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import gulp from 'gulp'
import config from '../gulpconfig'

// scripts minify
const script = () =>
{
  return gulp.src(config.path.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(config.path.build+'js'))
}

export default script;