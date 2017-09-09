var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

//watch task creates a server to render changes from our HTML and CSS files
gulp.task("watch", function() {

  //Initializes a browser
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });

  watch("./app/assets/scripts/**/*.js", function() {
    gulp.start("scriptsRefresh");
  });

});

//cssInject task runs styles task then renders changes to our CSS to the browser
gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
