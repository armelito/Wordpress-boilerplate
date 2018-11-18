import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import gulp from 'gulp'
import config from '../gulpconfig'

// scripts minify
const scripts = () =>
{
  return gulp.src(config.path.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(config.path.scripts.dest));
}

const script = gulp.series(scripts)
export default script;