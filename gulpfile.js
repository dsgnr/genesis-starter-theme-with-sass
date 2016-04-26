// Include gulp
var gulp = require('gulp'); 
// Include Our Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['Android >= 2.3',
    'BlackBerry >= 7',
    'Chrome >= 9',
    'Firefox >= 4',
    'Explorer >= 9',
    'iOS >= 5',
    'Opera >= 11',
    'Safari >= 5',
    'OperaMobile >= 11',
    'OperaMini >= 6',
    'ChromeAndroid >= 9',
    'FirefoxAndroid >= 4',
    'ExplorerMobile >= 9']
};




// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
        .pipe(sass())
		.pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./'));
});


// Initiate BrowserSync. Check for CSS changes and reload. Don't forget to change the proxy to the correct domain!
gulp.task('browser-sync', function (cb) {
browserSync.init({
		proxy: "my.website.com"
    }, function() {
			gulp.watch('style.css').on('change', function () {
            gulp.src('style.css')
            .pipe(browserSync.stream());
        });  
        cb();
    });
});



// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('styles/*/*.scss', ['sass']);
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('style.css');
    
});

// Default Task
gulp.task('default', ['watch', 'browser-sync']);
