//imports
import gulp from 'gulp';
import clean from './clean';
import script from './script';
import style from './style';
import serve from './browsersync';

// default task export
const dev = gulp.series(clean, script, serve, style);
export default dev;