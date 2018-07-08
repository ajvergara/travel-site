const gulp = require("gulp"),
      watch = require("gulp-watch"),
      browserSync = require("browser-sync").create();

gulp.task("watch", function(){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("cssInject");
  });

  watch("./app/assets/scripts/**/*.js", function(){
    gulp.start("jsRefresh");
  });

  watch("./app/**/*.html", function(){
    browserSync.reload();
  });
});

gulp.task("cssInject", ["styles"], function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("jsRefresh", ["scripts"], function(){
  browserSync.reload();
});
