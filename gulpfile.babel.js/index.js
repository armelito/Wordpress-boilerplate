//imports
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';

// import config
const config = require('./gulpconfig.js');

//paths
const paths = 
{
  html: {
    src: '../public/themes/armel/*.html',
  },
  scripts: {
    src: '../public/themes/armel/*.js',
    dest: '../web/themes/armel/dist/js/'
  },
  scss: {
    src: '../public/themes/mz/*.scss',
    dest: '../public/themes/armel/dist/css/'
  }
}

// clean function
const clean = () => del(['../public/themes/armel/dist']);

// sass compile & inject
const styles = () => 
{
  return gulp.src(paths.scss.src, { sourcemaps: true })
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.scss.dest))
      .pipe(server.stream());
}

// scripts minify
const scripts = () =>
{
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

// watch function
const watch = () => 
{
  gulp.watch(paths.scripts.src).on('change', server.reload);
  gulp.watch(paths.scss.src).on('change', styles, server.reload);
  gulp.watch(paths.html.src).on('change', server.reload);
}


// create server
const server = browserSync.create();


//init server using watcher
const serve = () => 
{
  server.init
  (
    {

      files: [
        config.path.theme+'**'
      ],
      notify: true,
      open: true,
      browser: "google chrome",
      port: 3000,
      proxy: config.proxy,
      watchOptions: {
        debounceDelay: 2000
      }
    }
  )
  watch()
}

// default task export
const dev = gulp.series(clean, scripts, styles, serve);
export default dev;