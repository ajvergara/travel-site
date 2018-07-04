const gulp = require("gulp"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssImport = require("postcss-import"),
      cssVars = require("postcss-simple-vars"),
      cssNested = require("postcss-nested"),
      hexrgba = require("postcss-hexrgba"),
      cssMixins = require("postcss-mixins");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssVars, cssMixins, hexrgba, autoprefixer, cssNested]))
    .on("error", function(errorInfo){
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
