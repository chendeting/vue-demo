<template>
    <section>
          <p class="loding">页面加载中。。。。</p>
         <router-view></router-view>
    </section> 
</template>

<script>


module.exports = {
  
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

 .loading{

 }
</style>
