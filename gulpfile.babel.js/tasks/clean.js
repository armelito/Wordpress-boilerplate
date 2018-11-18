import del from 'del';
import gulp from 'gulp';

// clean function
const cleans = () => del(['../public/themes/armel/dist']);

const clean = gulp.series(cleans)
export default clean;