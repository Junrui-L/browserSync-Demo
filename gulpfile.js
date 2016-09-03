/*
1.  npm install -g gulp

2.创建一个空文件夹用于放我们的项目

3.cd 到我们刚才创建的目录   运行npm install --save-dev gulp

4.在项目根目录下创建一个名为 gulpfile.js 的文件：


5. cd到我们的项目目录 运行               gulp 任务名称    默认：gulp default 执行全部命令


6.成功的话到我们的项目目录安装 npm install --save-dev gulp-uglify       js压缩插件


7.

minify-js表示任务名称    执行任务 gulp minify-js

gulp.task('minify-js', function () {
 gulp.src('js/*.js')          // 引入js   
     .pipe(uglify())              //   声明压缩js文件
     .pipe(gulp.dest('gulp_demo/js'));   //   压缩后的保存目录
});

*/

//这是一个将css.js,html,img压缩的集合
var gulp = require('gulp'),   /*引入gulp js压缩插件   1.安装 npm install -g gulp*/

/*2.引入gulp js压缩插件   1.到我们的项目目录安装 npm install --save-dev gulp-uglify*/
uglify = require("gulp-uglify"),  //js压缩

minifyHtml = require("gulp-minify-html"), //html压缩

minifyCss = require("gulp-minify-css"), //css压缩

imagemin = require('gulp-imagemin'),   //img压缩
 
pngquant = require('imagemin-pngquant'),//png压缩

rename = require('gulp-rename'), //重命名

notify = require('gulp-notify'),  //任务完成后的通知

sass = require('gulp-sass'), //sass

//sass = require('gulp-ruby-sass'), //sass

concat = require("gulp-concat"), //合并js文件


//  文件修改后台监视,实时刷新页面,所有的浏览器都会刷新
    browserSync = require("browser-sync"),
    path = {
        HTML : "src/html/*.html",
        CSS : "src/css/*.css",
        JS : "src/js/*.js"
    };

gulp.task("serve", ["css", "js-watch", "html"], function() {
    browserSync.init({
        server : "./src",
        index : 'index.html'
    });

    gulp.watch(path.CSS, ["css"]);
    gulp.watch(path.JS, ["js-watch"]);
    gulp.watch(path.HTML, ["html"]);
    gulp.watch(path.HTML).on("change", function() {
        browserSync.reload;
    });
});


gulp.task("css", function() {
    gulp.src(path.CSS)
        .pipe(browserSync.stream());
})


gulp.task("js-watch", function() {
    gulp.src(path.JS)
        .pipe(browserSync.stream());
})

gulp.task("html", function() {
    gulp.src(path.HTML)
        .pipe(browserSync.stream());
})


//我如果用了less/sass就不用监听css了


/*压缩js

1.到我们的项目目录安装 插件 npm install --save-dev gulp-uglify

2.引入插件   uglify = require("gulp-uglify");

3.使用插件   .pipe(uglify()) 

*/

/*html压缩*/
gulp.task('minify-html', function () {
 gulp.src('src/html/*.html') // 要压缩的html文件
     .pipe(minifyHtml())    //压缩
     .pipe(rename({ suffix: '.min' })) //压缩后改名字
     .pipe(gulp.dest('gulp_min/html_min')) //   压缩后的保存目录
     .pipe(notify({ message: '-html-压缩完成保存在 /html_min/*.min.html'}));
});

/*js压缩*/
gulp.task('minify-js', function () {
 gulp.src('src/js/*.js')          // 引入js
     .pipe(uglify())            //声明压缩js文件
	 .pipe(rename({ suffix: '.min' }))	 //  压缩后改名字
     .pipe(gulp.dest('gulp_min/js_min'))
     .pipe(notify({ message: '--js--压缩完成保存在/js_min/*.min.js'})); //   压缩后的保存目录
});

/*css压缩*/
gulp.task('minify-css', function () {
 gulp.src('src/css/*.css') // 要压缩的css文件
     .pipe(minifyCss())    //压缩css
     .pipe(rename({ suffix: '.min' })) //压缩后改名字
     .pipe(gulp.dest('gulp_min/css_min'))
     .pipe(notify({ message: '-css--压缩完成保存在 /css_min/*.min.css'}));

});


/*sass编译并压缩**/
gulp.task('sass', function() {
	return gulp.src('src/sass/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('src/css'))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('gulp_min/css_min'))
    .pipe(notify({ message: 'sass编译完成' }));
	

});


/*img压缩*/
gulp.task('minify-img', function () {
 gulp.src('src/img/*')
     .pipe(imagemin({
      progressive: true,
      use: [pngquant()] //使用pngquant来压缩png图片
     }))
     .pipe(gulp.dest('gulp_min/img_min'));
});

/*默认全部压缩*/

gulp.task('default', function () {
    gulp.start('sass','minify-js','minify-html','minify-img');
});

/*合并js文件*/
gulp.task('concat', function () {
    gulp.src('src/js/*.js')  //要合并的文件
        .pipe(concat('index.js'))  // 合并匹配到的js文件并命名为 "index.js"
        .pipe(gulp.dest('concat'));
});


/*liveLoad设置*/

gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行
    var server = livereload();

    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('src/**/*.*', function () {
        server.changed();
    });
});