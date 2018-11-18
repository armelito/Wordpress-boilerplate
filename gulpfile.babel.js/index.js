// import config
import dev from './tasks/main'
import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./tasks');

const development = gulp.series(dev)
export default development