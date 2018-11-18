import gulp from 'gulp'
import browserSync from 'browser-sync'
import config from '../gulpconfig'

// watch function
const watch = () => 
{
  gulp.watch(config.path.scripts.src).on('change', () => server.reload)
  gulp.watch(config.path.scss.src).on('change', () => server.reload)
  gulp.watch(config.path.html.src).on('change', () => server.reload)
}

//init server using watcher
const serves = () => 
{
  // create server
  const server = browserSync.create();
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

const serve = gulp.series(serves)
export default serve