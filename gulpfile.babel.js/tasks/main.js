import gulp from 'gulp'
import browserSync from 'browser-sync'
import config from '../gulpconfig'
import concat from 'gulp-concat'
import del from 'del'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import imagemin from 'gulp-imagemin'

gulp.task('images', () =>
 {
    return gulp.src( config.path.src + 'img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)' )
    .pipe( changed( config.path.build + 'img/' ) )
    .pipe( gulp.dest( config.path.build + 'img/' ) );
  });
  
//server
const server = browserSync.create();

// Output scripts
gulp.task('script', () => 
{
    return gulp.src(config.path.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(config.path.build+'js'))
});

// Output styles
gulp.task('styles', () =>
    {
        return gulp.src( config.path.src + 'scss/**/*.scss', { sourcemaps: true } )
    .pipe(plumber((error) => 
    {
		console.log("Something happened!", error.message)
		this.emit('end')
	}))
    .pipe(sass( 
    {
        includePaths: [
          config.path.src + 'scss/'
        ],
        precision: 6,
        onError: (err) =>
        {
          return console.log(err)
        }
    }))
    .pipe(autoprefixer( 
    {
        add: true,
        browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(config.path.build + 'css/'))
    .pipe(server.stream());
})


// Build a copy
gulp.task('build', gulp.parallel('script', 'styles'), () =>
{
 
})


// Prepare for a clean build
gulp.task('wipe-dist', () => 
{
  return del([
    config.path.dist
  ])
})


// Clean out after build
gulp.task('clean-build', gulp.series('build', 'wipe-dist'), () => 
{
  return del([ // A glob pattern matching junk files to clean out of `build`; feel free to add to this array
    config.path.theme + '**/.DS_Store',
  ]);
});



// Copy files to dist
gulp.task('copy-theme', gulp.series('clean-build'), () => 
{
  return gulp.src([
    config.path.theme + '**/*',
    '!' + config.path.theme + '**/*.map',
    '!' + config.path.theme + '**/composer.lock',
    '!' + config.path.theme + '{src,src/**}',
    '!' + config.path.theme + '{vendor,vendor/**}'
  ])
  .pipe(gulp.dest(
    config.path.dist + config.theme.name
  ))
})

// Optimize images in the `dist` folder (slow)
gulp.task('images-optimize', gulp.series('copy-theme'), function() {
    return gulp.src( [
      config.path.dist + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
      '!' + config.path.dist + 'screenshot.png'
    ] )
    .pipe( imagemin( {
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    } ) )
    .pipe( gulp.dest ( config.path.dist ) );
  });

gulp.task('serve', gulp.series('build', function(){
  server.init({

    files: [
      config.path.theme+'**'
    ],
    notify: true,
    open: true,
    browser: "google chrome",
    port: 3000,
    proxy: config.proxy,
    watchOptions: {
      debounceDelay: 4000
    }
  })
}))


//watch files and rebuild
const watcher = gulp.watch(config.path.src + 'js/**/*.js', gulp.series('clean-build', 'copy-theme')),
    watcher2 = gulp.watch(config.path.src + 'scss/**/*.scss', gulp.series('clean-build', 'copy-theme'))


// Default task
gulp.task('default', gulp.series('serve'))