// 定义组件
var Foo = Vue.extend({
    template:  '<div class="foo">' +
                 '<h2>This is Foo!</h2>' +
                 '<a v-link="{ path: \'/foo/foo1\' }">Go to Foo1</a>'+
                 '<a v-link="{ path: \'/foo/foo2\' }">Go to Foo2</a>'+
                 '<router-view></router-view>' + 
               '</div>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})


var Foo1 = Vue.extend({
    template: '<p>This is foo1!我是子组件1</p>'
});

var Foo2 = Vue.extend({
    template: '<p>This is foo2!我是子组件2</p>'
});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({});

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
    '/foo': {
        component: Foo,
        subRoutes:{
          '/foo1':{
             component: Foo1
          },
          '/foo2':{
            component: Foo2
          }
        }
    },
    '/bar': {
        component: Bar
    }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')