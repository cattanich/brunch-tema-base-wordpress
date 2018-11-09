const wiredep = require('wiredep').stream;
const gulp = require('gulp');
var sass = require( 'gulp-sass' );

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
          js: function(filePath){
            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
            var wpHandle = fileName.replace(".","-");
            return "wp_enqueue_script('" + wpHandle + "', get_stylesheet_directory_uri() . '/" + filePath + "', '', '', true);";
          },
          css: function(filePath){
            var fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
            var wpHandle = fileName.replace(".","-");
            return "wp_enqueue_style('" + wpHandle + "', get_stylesheet_directory_uri() . '/" + filePath + "');";
          }
        }
      }
    }
  }))
  .pipe(gulp.dest('./'));

// gulp.src('./styles/*.scss')
//   .pipe(wiredep({
//     ignorePath: /^(\.\.\/)+/
//   }))
//   .pipe(gulp.dest('./styles'));

});






// Run:
// gulp sass
// Compiles SCSS files in CSS
gulp.task( 'sass', function() {
    var stream = gulp.src( 'styles/*.scss' )
        // .pipe( plumber( {
        //     errorHandler: function( err ) {
        //         console.log( err );
        //         this.emit( 'end' );
        //     }
        // } ) )
        // .pipe(sourcemaps.init({loadMaps: true}))
        .pipe( sass( { errLogToConsole: true } ) )
        // .pipe( autoprefixer( 'last 2 versions' ) )
        // .pipe(sourcemaps.write(undefined, { sourceRoot: null }))
        .pipe(gulp.dest('styles/'));
    return stream;
});


gulp.task( 'default', ['wiredep', 'sass'], function() {
} );