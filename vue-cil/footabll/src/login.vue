<template>

      
</template>

<script>
     module.exports = {
         data:function(){
            return {
               User:{
                  name:'',
                  pwd:''
               }
            }
         },
         methods:{
            goLogin:function(){
               this.$http.post('/api/login',{},{'user':this.User}).then(function(res){

                      console.log(res);
                 if(res.data.code){
                     this.$route.router.go('/index');
                 }

               },function(){})
            }
         
         }
     }
</script>