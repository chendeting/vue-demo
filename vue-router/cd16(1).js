// 定义组件
var Foo = Vue.extend({
    template:  '<div class="foo">' +
                 '<h2>This is Foo!</h2>' +
                 '<a v-link="{ path: \'/foo/foo1\' , replace: true }">Go to Foo1</a>'+
                 '<a v-link="{ path: \'/foo/foo2\',activeClass: \'custom-active-class\' }">Go to Foo2</a>'+
                 '<router-view></router-view>' + 
               '</div>'
})

var Bar = Vue.extend({
    data:function(){
       return {
          user:[]
       }
    },
    route:{
       activate:function(transition){
            var auth = this.$route.auth;
            if (auth) {
              // 往后面发请求，验证是否登陆
                setTimeout(function(){
                    if (Math.random()>=0.5) {
                       console.log("验证通过");
                      //transition.next();
                    }else{
                       console.error("验证失败,请重新登陆");
                        //页面跳转
                      // transition.abort();
                    }; 
                    
                },1000)
            };
       },
       data:function(transition){
            setTimeout(function(){
                this.user = [1,2,3,4];
                /*transition.next();*/
                //transition.abort() //不让你切换
            }.bind(this),2000)
       }
    },
    template: '<p>This is bar!<span v-for="a in user">{{a}}</span></p>',
    created:function(){
      //返回当前的路径
      console.log(this.$route.path);
      //返回查询参数
      console.log(this.$route.query);
      //$route.router 返回当前的路由实例
      console.log(this.$route.matched);//拿到当前匹配路由的全部信息，包括组件等等。。。
    }
})


var Foo1 = Vue.extend({
    template: '<p>This is foo1!我是子组件1</p>'
});

var Foo2 = Vue.extend({
    template: '<p>This is foo2!我是子组件2</p>'
});


var User = Vue.extend({
    template: '<p>我是用户：{{$route.params.userId}}</p>'
});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({
   data:function(){
      return {
         userId:'cd1604-2'
      }
   }
});

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
  linkActiveClass:'active',
  transitionOnLoad:true,
  suppressTransitionError:true
})

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
      component: function (resolve) {
         resolve(Bar)
      },
      auth:true  //自定义的属性，加上这个标示，标示这个要进行验证的
    },
    '/user/:userId':{
        name: 'user',
        component: User
    }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')