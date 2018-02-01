var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/creative.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('css/creative.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/creative.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))

    gulp.src(['node_modules/magnific-popup/dist/*'])
        .pipe(gulp.dest('vendor/magnific-popup'))

    gulp.src(['node_modules/scrollreveal/dist/*.js'])
        .pipe(gulp.dest('vendor/scrollreveal'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('vendor/font-awesome'))
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy']);

gulp.task('package', ['default'], function() {
    //HTML
    gulp.src(['index.html']).pipe(gulp.dest('dist'))

    //CSS
    gulp.src(['css/creative.min.css']).pipe(gulp.dest('dist/css'))
    gulp.src(['vendor/bootstrap/css/bootstrap.min.css']).pipe(gulp.dest('dist/vendor/bootstrap/css'))
    gulp.src(['vendor/font-awesome/css/font-awesome.min.css']).pipe(gulp.dest('dist/vendor/font-awesome/css'))
    gulp.src(['vendor/magnific-popup/magnific-popup.css']).pipe(gulp.dest('dist/vendor/magnific-popup'))

    //JS
    gulp.src(['vendor/jquery/jquery.min.js']).pipe(gulp.dest('dist/vendor/jquery'))
    gulp.src(['vendor/bootstrap/js/bootstrap.min.js']).pipe(gulp.dest('dist/vendor/bootstrap/js'))
    gulp.src(['vendor/scrollreveal/scrollreveal.min.js']).pipe(gulp.dest('dist/vendor/scrollreveal'))
    gulp.src(['vendor/magnific-popup/jquery.magnific-popup.min.js']).pipe(gulp.dest('dist/vendor/magnific-popup'))
    gulp.src(['js/creative.min.js']).pipe(gulp.dest('dist/js'))

    //FONTS
    gulp.src(['vendor/font-awesome/fonts/fontawesome-webfont.woff']).pipe(gulp.dest('dist/vendor/font-awesome/fonts'))
    gulp.src(['vendor/font-awesome/fonts/fontawesome-webfont.woff2']).pipe(gulp.dest('dist/vendor/font-awesome/fonts'))
    gulp.src(['vendor/font-awesome/fonts/fontawesome-webfont.ttf']).pipe(gulp.dest('dist/vendor/font-awesome/fonts'))

    //IMAGES
    gulp.src(['img/header.jpg']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/logo.png']).pipe(gulp.dest('dist/img'))	
	gulp.src(['img/CodeStream-05.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/codestream-logo.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/portfolio/thumbnails/1.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))
    gulp.src(['img/portfolio/thumbnails/2.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))
    gulp.src(['img/portfolio/thumbnails/3.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))
    gulp.src(['img/portfolio/thumbnails/4.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))
    gulp.src(['img/portfolio/thumbnails/5.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))
    gulp.src(['img/portfolio/thumbnails/6.jpg']).pipe(gulp.dest('dist/img/portfolio/thumbnails'))

    //FAVICONS
    gulp.src(['favicon.ico']).pipe(gulp.dest('dist'))
    gulp.src(['img/apple-touch-icon-57x57.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-114x114.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-72x72.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-144x144.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-60x60.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-120x120.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-76x76.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/apple-touch-icon-152x152.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/favicon-196x196.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/favicon-96x96.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/favicon-32x32.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/favicon-16x16.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/favicon-128.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/mstile-144x144.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/mstile-70x70.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/mstile-150x150.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/mstile-310x150.png']).pipe(gulp.dest('dist/img'))
    gulp.src(['img/mstile-310x310.png']).pipe(gulp.dest('dist/img'))

});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});