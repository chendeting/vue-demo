$(function(){

       $("footer").on('click','div',function(){
            if($(this).children('p').text() === "发现"){
                window.location.href = "search.html";
            }else if($(this).children('p').text() === "我的"){
               window.location.href = "user.html";
             }else if($(this).children('p').text() === "退出"){
                $(this).addClass("f_curr").siblings().removeClass('f_curr');
             }else if($(this).children('p').text() === "首页"){
                  window.location.href = "index-test.html";
             }
                 
       });
      $("header").on("click",'span',function(){
          if($(this).text() === "热点"){
                window.location.href = "index-test.html";
            }else if($(this).text() === "关注"){
               window.location.href = "attention.html";
             }

      });     
             

   });