
$(function () {
  var $menu = $('.menu li')
  var $icon = $('.header a')

  $menu.on({
    "mouseenter":function(){
      $(this).find('a').css('color','white')
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
    "mouseenter":function(){
      $(this).find('svg path').attr('fill','white')
    },
    "mouseleave":function(){
      $(this).find('svg path').attr('fill','#999999')
    }
  })


})
