// generated on 2018-11-08 using generator-webapp-b4-php 3.0.1
const connect = require('gulp-connect-php');
const httpProxy = require('http-proxy');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
    return gulp.src('styles/*.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({ stream: true }));
});

gulp.task('scripts', () => {
    return gulp.src('scripts/**/*.js')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe(reload({ stream: true }));
});

function lint(files, options) {
    return gulp.src(files)
        .pipe(reload({ stream: true, once: true }))
        .pipe($.eslint(options))
        .pipe($.eslint.format())
        .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
    return lint('scripts/**/*.js', {
            fix: true
        })
        .pipe(gulp.dest('scripts'));
});
gulp.task('lint:test', () => {
    return lint('test/spec/**/*.js', {
            fix: true,
            env: {
                mocha: true
            }
        })
        .pipe(gulp.dest('test/spec/**/*.js'));
});

gulp.task('html', ['styles', 'scripts'], () => {
    return gulp.src(['./*.html', './*.php'])
        .pipe($.useref({ searchPath: ['.tmp', '.', '.'] }))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.cssnano({ discardComments: true, safe: true, autoprefixer: false })))
        .pipe($.if('*.html', $.htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('dist'));
});








gulp.task('images', () => {
    return gulp.src('./images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{ cleanupIDs: false }]
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
    return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function(err) {})
            .concat('./fonts/**/*'))
        .pipe(gulp.dest('.tmp/fonts'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
    return gulp.src([
        './**/*.*',
        '!./*.html',
        '!./scripts/**/*.js',
        '!./styles/**/*.scss',
        '!./styles/**/*.css',
        '!./**/*.json',
        '!./*.js',
        '!./*.babelrc',
        '!./*.bowerrc',
        '!./*.editorconfig',
        '!./*.gitignore',
        '!./*.gitattributes',
        '!bower_components/**/*.*',
        '!node_modules/**/*.*'

    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'scripts', 'fonts'], () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', '.'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch([
        './*.html',
        './images/**/*',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('./styles/**/*.scss', ['styles']);
    gulp.watch('./scripts/**/*.js', ['scripts']);
    gulp.watch('./fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['dist']
        }
    });
});

gulp.task('serve:test', ['scripts'], () => {
    browserSync({
        notify: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: 'test',
            routes: {
                '/scripts': '.tmp/scripts',
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch('./scripts/**/*.js', ['scripts']);
    gulp.watch('test/spec/**/*.js').on('change', reload);
    gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {

    gulp.src('functions.php')
        .pipe(wiredep({
            fileTypes: {
                php: {
                    block: /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                    detect: {
                        js: /script\(.*src=['"]([^'"]+)/gi,
                        css: /link\(.*href=['"]([^'"]+)/gi
                    },
                    replace: {
                        js: function(filePath) {
                            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
                            var wpHandle = fileName.replace(".", "-");
                            return "wp_enqueue_script('" + wpHandle + "', get_stylesheet_directory_uri() . '/" + filePath + "');";
                        },
                        css: function(filePath) {
                            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
                            var wpHandle = fileName.replace(".", "-");
                            return "wp_enqueue_style('" + wpHandle + "', get_stylesheet_directory_uri() . '/" + filePath + "');";
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
    return gulp.src('dist/**/*').pipe($.size({ title: 'build', gzip: true }));
});

gulp.task('default', ['clean'], () => {
    gulp.start('build');
});

gulp.task('php-serve', ['styles', 'scripts', 'fonts'], function() {
    connect.server({
        port: 9001,
        base: '.',
        bin: '/usr/local/bin/php',
        ini: '/usr/local/etc/php/7.2/php.ini',
        open: false
    });

    var proxy = httpProxy.createProxyServer({});

    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', '.'],
            routes: {
                '/bower_components': 'bower_components'
            },
            middleware: function(req, res, next) {
                var url = req.url;

                if (!url.match(/^\/(styles|fonts|bower_components)\//)) {
                    proxy.web(req, res, { target: 'http://127.0.0.1:9001' });
                } else {
                    next();
                }
            }
        }
    });

    // watch for changes
    gulp.watch([
        './*.html',
        './*.php',
        './scripts/**/*.js',
        './images/**/*',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('./styles/**/*.scss', ['styles']);
    gulp.watch('./fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
})