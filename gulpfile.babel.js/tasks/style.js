import sass from 'gulp-sass'
import gulp from 'gulp'
import config from '../gulpconfig'
//import serve from './browsersync'
//import browserSync from 'browser-sync'

// sass compile & inject
const styles = () => 
{

  return gulp.src(config.path.scss.src, { sourcemaps: true })
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(config.path.scss.dest))
      .pipe(server.stream());
}

const style = gulp.series(styles)
export default style;