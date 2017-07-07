
$(function () {
  var $menu = $('.menu li')
  var $icon = $('.header a')
  var $end = $('.end li')
  var $snsBtngroup = $('.snsBtngroup')

  $menu.on({
    "mouseenter":function(){
      $(this).find('a').css({'color':'white','transition':'1s'})
    },
    "mouseleave":function(){
      $(this).find('a').css('color','')
    }
  }),

  $icon.on({
    "mouseenter":function(){
      $(this).find('svg rect').attr('fill','white')
    },
    "mouseleave":function(){
      $(this).find('svg rect').attr('fill','#999999')
    }
  })

  $icon.on({
    "click":function(){
      $('.menu').find('.sl').slideToggle('slow',function(){
        });
      }
    })



  $icon.on({
    "mouseenter":function(){
      $(this).find('svg path').attr('fill','white')
    },
    "mouseleave":function(){
      $(this).find('svg path').attr('fill','#999999')
    }
  }),

  $end.on({
    "mouseenter":function(){
      $(this).find('a').css({'color':'white','text-decoration':'underline'})
    },
    "mouseleave":function(){
      $(this).find('a').css({'color':'','text-decoration':''})
    }
  }),

  $snsBtngroup.children('a').on({
    "mouseenter":function(){
        var a = $(this).find('svg').attr('ass');
      $(this).find('.mark').css({'fill':a,'transition':'1s'})
    },
    "mouseleave":function(){
      $(this).find('.mark').css({'fill':'','transition':'1s'})
    }
  })



    $('.slidemenu>ul>li').hover(function(e){
      $('.slidemenu>ul>li').find('.sl').stop().slideDown();
    },function(){
      $('.slidemenu>ul>li').find('.sl').stop().slideUp();
    })


/*
    $('.menuBtn').hover(function(e){
      e.preventDefault();
      console.log(e);
      $('.menu').find('.sl').stop().slideDown();
    },function(){
      $('.menu').find('.sl').stop().slideUp();
    })
*/


})
