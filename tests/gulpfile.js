const gulp = require('gulp');
const gulpMocha = require('gulp-mocha')
gulp.task('test-helper',()=>gulp.src('./testhelper.js'))
gulp.task('test-server', gulp.series('test-helper',()=>{
  return gulp.src('./server/server.test.js')
    .pipe(gulpMocha())
}));
gulp.task('test-routes', gulp.series('test-helper', 'test-server',()=>{
  return gulp.src('./server/routes.test.js')
    .pipe(gulpMocha())
}));

gulp.task('build', gulp.series('test-helper', 'test-server', 'test-routes'))