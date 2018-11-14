const wiredep = require('wiredep').stream;
const gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var exec = require('child_process').exec;

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
                            return "wp_enqueue_script('" + wpHandle + "', get_stylesheet_directory_uri() . '/" + filePath + "', '', '', true);";
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

// Compiles SCSS files in CSS
gulp.task('sass', function() {
    var stream = gulp.src('styles/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact'
        }))
        .pipe(gulp.dest('styles/'));
    return stream;

    var auto = gulp.src('./styles/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('styles/'));
    return auto;

});


// PHP-CS-FIXER (brew install php-cs-fix)

gulp.task('phpfix', function() {
    gulp.src("./*.php").on('change', function(event) {
        var command = "php-cs-fixer fix " + event.path + " --config-file=" + __dirname + "/.php_cs"
        exec(command);
        console.log("execute command: " + command);
    })
});



gulp.task('default', ['wiredep', 'sass', 'phpfix'], function() {});