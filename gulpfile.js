const wiredep = require('wiredep').stream;
const gulp = require('gulp');

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
});