var Vue = require('Vue');//不加路径，默认到node_modules下面去找Vue

var http = require('vue-resource');
var vueRouter = require('vue-router');
//加载使用插件
Vue.use(vueRouter);

var routerConfig = require('./router-config');

var App = require('./App');
//创建路由对象
var router = new vueRouter({

});

//配置路由
routerConfig(router);


router.start(App,"#app");