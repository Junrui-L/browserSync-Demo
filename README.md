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