# gulp 插件browserSync实时刷新，边改边看
=======================================
修改html,css,js文件，浏览器页面自动刷新
---------------------------------------
### 插件基于node.js服务器
### 后台监视文件修改,实时刷新页面
### 用同一地址在别的浏览器打开也会刷新
### 连接到同一局域网的电脑，手机，平板都可以实时刷新
### 操作一个浏览器，其余浏览器也会跟着页面滚动，跳转

-------------------------------------------------
##使用方法
### 1.clone本项目到本地
### 2.安装node.js ^4.X稳定版本
### 3.npm 版本 ^3.0以上全局安装gulp  命令： $ npm install –g gulp 
### 4.cd 本项目目录 执行命令： $ npm install 会自动安装依赖包
### 5.在本目录执行命令 ：$ gulp serve 
### 6.移动端在同一局域网下输入 http://192.168.1.XXX:3001/index.html 
### 也会同步
## 进入src 文件夹修改任意文件，就可以看到浏览器实时自动刷新了
## 打开的浏览器是同步的，点击跟滚动也是同步的

==========================================================================
#webstorm scss watcher配置css的输出目录


 *webstorm支持sass的同步编译,也就是即写即编译,并且可以指定编译后的css的目录.

 *本文使用的webstorm为8.0版本

 *scss安装：http://www.w3cplus.com/sassguide/install.html

 *打开webstorm：

 *点击左上角的File→Settings→File Watchers

 *在弹窗的窗口的右上角点击绿色的 ‘+’ 号,然后选择scss

 

-------------------------------------------------------------------------------

Arguments:

 *可以配置编译后的文件的输出路径,我这里写的是:

--no-cache --update --sourcemap --watch $FileName$:$FileParentDir$\css\$FileNameWithoutExtension$.css

*注意, $FileName$后面有个冒号,然后$FileParentDir$表示的是scss文件所在的文件夹的父级文件夹,而不是scss文件的父文件夹.

*举个栗子,我的项目叫sass-learn,里面有个scss文件夹,里面存放scss文件,那么按照这样配置的结果,style.scss所在的文件夹就是scss,scss的父文件夹就是sass-*learn,然后找到sass-learn下的css文件夹,编译后的style.css文件就会在这里.

---------------------------------------------------------------------------------

Output paths to refresh:

*改成这样:$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map

##在使用的过程中还有两点需要注意:

 1.同步编译只能在项目文件夹下,也就是webstorm左侧打开的项目.随便打开一个项目外的文件是不行的.
 2.这个和webstorm没有什么关系,就是sass编译不能带有中文,无论是路径名,文件名,文件里的内容,都不能识别中文,如果要修改它也不是不可以,但我觉得不用中文也   挺好的,养成好习惯嘛.

