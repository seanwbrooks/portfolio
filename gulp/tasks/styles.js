var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
cssNested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");

//styles task takes our featured css and converts it into regular css
gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, autoprefixer, cssNested, cssVars]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
