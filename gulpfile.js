var gulp = require('gulp');
var load = require('gulp-load-plugins')()
var browser = require('browser-sync').create()
//编译scss文件
gulp.task('sass',function(done){
    gulp.src('./src/css/*.scss')
    .pipe(load.sass())
    .pipe(load.minifyCss())
    .pipe(gulp.dest('./dist/css/'))
    done()
})
//压缩html文件
gulp.task('html',function(done){
    gulp.src('./src/*.html')
    .pipe(load.minifyHtml())
    .pipe(gulp.dest('./dist/'))
    done()
})

//save执行任务sass和js 并重新加载浏览器
gulp.task('save',gulp.series(gulp.parallel('sass','html'),function(done){
    browser.reload()
    done()
}))
//开启自刷新的静态服务器
gulp.task('server',function(done){
    browser.init({
        server:'./dist/',
        port:8080,
      
    })
    //观测到scr文件夹下的文件变化后跟新服务器
    gulp.watch('./src/',gulp.series('save'))
    done()
})