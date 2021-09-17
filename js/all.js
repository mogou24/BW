$(document).ready(function () {
    $("a").on("click", function () {
      var hrefLink = $(this).attr("href");
      console.log(hrefLink);
      $("html,body").animate(
        {
          scrollTop: $(hrefLink).offset().top+100 //直接到相對位置
        },
        1200
      );
    });
  });

  /* AOS */
  AOS.init();

  $(function(){
    AOS.init({
      duration: 800,
    easing: "ease-in-sine",
    disable: window.innerWidth <1100
   });
 })

 new WOW().init();




// /* 滾動移除class */
//   $(window).scroll(function(){            //當視窗滾動時
//         if ( $(this).scrollTop() > 5) {     //如果視窗向下滾動100px
//           $('.circlepic').addClass('animate__fadeInRight');  //header 加上我們剛剛寫好的scroll css
//         } else {
//           $('.circlepic').addClass('animate__fadeInRight'); //如果沒有的話就刪除 scroll css
//        }
//     });