1.添加less支持
  1.安装
    npm install -D less less-loader
  2.配置
    拉取配置：npm run eject
    webpack.config.dev.js和webpack.config.prod.js修改配置

2.添加路由配置
  1.安装
    npm install --save react-router  react-router-dom

3.初始化样式与字体图标
  static:静态资源:图标，初始化样式，图片...
  assets:资源文件夹：文档，结构文档,脑图...
  dist/build/public:打包之后的文件夹
  container/pages:容器
  components:公共组件

4.首页Header实现
  HomeHeader
  SearchInput

5.轮播图
  轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，即`npm install swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用

6.模拟数据Mock
  1.express+node
  2.安装
    npm install --save-dev express

7.跨域处理
  "proxy": {
    "/api": {
      "target": "http://localhost:8080",
      "changeOrigin": true
    }
  }
  添加fetch并且添加home的访问方式

8.超值特惠实现
  1.Home(容器) -> Ad(网络请求) -> HomeAd(渲染视图)

9.推荐列表
  1.后端设置数据
  2.前端读取数据
  3.UI读取
  1.Home(容器) -> List(网络请求) -> List(渲染视图) -> Item(item视图显然)
