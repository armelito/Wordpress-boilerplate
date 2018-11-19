import sass from 'gulp-sass'
import gulp from 'gulp'
import config from '../gulpconfig'
//import serve from './browsersync'
//import browserSync from 'browser-sync'

// sass compile & inject
const style = () => 
{

  return gulp.src(config.path.src + 'scss/**/*.scss', { sourcemaps: true })
      .pipe(sass({
        includePaths: [config.path.src + 'scss/'],
        precision: 6}).on('error', sass.logError))
      .pipe(gulp.dest(config.path.build + 'css/'))
}


export default style;