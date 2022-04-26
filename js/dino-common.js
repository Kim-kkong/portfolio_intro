// Common JS
$(document).ready(function() {
  preventDefaultAnchor();

  checkScroll();
  $(window).on('scroll', function() {
    checkScroll();
  });

  function checkScroll() {
    var scrollAmt = $(document).scrollTop();
    if (scrollAmt > 200) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  }

  //gnb
  $('#nav ul.gnb li a').on('click focus', function() {
    $('#nav ul.gnb li').removeClass('on');
    $(this).parent().addClass('on');
  });



  //타이핑
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt > ul > li").length;
    
    var typingTxt = $(".typing-txt > ul > li").eq(liIndex).text(); 
    typingTxt=typingTxt.split("");
    if(typingBool==false){
        typingBool=true; 
        var tyInt = setInterval(typing , 150);
    } 
        
    function typing(){ 
      if(typingIdx < typingTxt.length){ 
        $(".typing").append(typingTxt[typingIdx]); 
        typingIdx++; 
      } else {

        if(liIndex >= liLength-1){
          liIndex = 0;
        }else{
          liIndex++; 
        }
        
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
          
            clearInterval(tyInt);
            setTimeout(function(){
                $(".typing").html('');
              tyInt = setInterval(typing, 150);
            }, 1500);
        } 
    }  
    
    
    //슬라이드_01, _02
    setImageSlide('div.box');

    function setImageSlide(selector) {
      $(selector).each(function() {
        var $selector = $(this);
        var numSlide = $selector.find('.box-img > li').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var slideFirst = 1;
        var numShow = $selector.find('.box-text > li').length;
        var showNow = 0;
        var showPrev = 0;
        var showNext = 0;
        var showFirst = 1;
      
        showSlide(slideFirst);
        showUp(showFirst);
      
        $selector.find('.box-img > li').each(function(m) {
          $(this).css({'left': (m* 100) + '%', 'display': 'block'});
          $selector.find('.indicator').append('<li><a href="#">' + (m + 1) + '번 슬라이드</a></li>\n');
        });
      
        $selector.find('.box-text > li').each(function(s) {
          $(this).css({'top': (s * 100) + '%', 'display': 'block'});
        });
      
        showSlide(slideFirst);
        showUp(showFirst);
      
        $selector.find('.indicator li a').on('click', function() {
          var index = $selector.find('.indicator li').index($(this).parent());
          var index02 = $selector.find('.box-text li').index($(this).parent());
          showSlide(index + 1);
          showUp(index02 + 1);
        });
      
        $selector.find('.control a.prev').on('click', function() {
          showSlide(slidePrev);
          showUp(showPrev);
        });
      
        $selector.find('.control a.next').on('click', function() {
          showSlide(slideNext);
          showUp(showNext);
        });
      
        function showSlide(l) {
          $selector.find('.box-img').css({'transition': 'left 1s', 'left': (-(l - 1) * 100) + '%'});
      
          $selector.find('.indicator li').removeClass('on');
          $selector.find('.indicator li:eq(' + (l - 1) + ')').addClass('on');
          slideNow = l;
          slidePrev = (l === 1) ? numSlide : (l - 1);
          slideNext = (l === numSlide) ? 1 : (l + 1);
          //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
        }
      
        function showUp(o) {
          $selector.find('.box-text').css({'transition': 'top 1.2s', 'top': (-(o - 1) * 100) + '%'});
      
          showNow = o;
          showPrev = (o === 1) ? numShow : (o - 1);
          showNext = (o === numShow) ? 1 : (o + 1);
          //console.log(showPrev + ' / ' + showNow + ' / ' + showNext);
        }
      });
      
    }

  //배너슬라이드//
  var numBanner = 0;
  var bannerNow = 1;
  var bannerPrev = 0;
  var bannerNext = 0;
  var offsetLeft = 0;
  var widthBox = 0;
  var widthBar = 0;
  var offsetLeftMin = 0;
  var loadCounter = 0;
  var bounceTimerId = '';
    

  $('div.box ul.slide > li img').on('load', function() {
    loadCounter++;
    if (loadCounter === $('div.box ul.slide > li').length) {
      setStatus();
    }
  });

  $('ul.text li p.control a.prev').on('click', function() {
    showBanner(bannerPrev);
  });

  $('ul.text li p.control a.next').on('click', function() {
    showBanner(bannerNext);
  });

  $(window).on('resize', function() {
    clearTimeout(bounceTimerId);
    bounceTimerId = setTimeout(function() {setStatus();}, 100);
  });

  function showBanner(n) {
    offsetLeft = -$('div.box ul.slide > li:eq(' + (n - 1) + ')').position().left;
    //console.log(offsetLeft);
    if (offsetLeft <= offsetLeftMin) offsetLeft = offsetLeftMin;
    $('div.box ul.slide').css({'transition': 'left 0.3s', 'left': offsetLeft + 'px'});
    bannerNow = n;
    bannerPrev = (n === 1) ? 1 : (n - 1);
    bannerNext = (n === numBanner) ? numBanner : (n + 1);
    console.log(bannerPrev + ' / ' + bannerNow + ' / ' + bannerNext);
  }

  function setStatus() {
    widthBox = $('div.box div.inner').innerWidth();
    widthBar = 0;
    $('div.box ul.slide > li').each(function() {
      widthBar += $(this).outerWidth(true);
    });
    offsetLeftMin = widthBox - widthBar;
    $('div.box ul.slide').css({'width': (widthBar + 5) + 'px'});

    $('div.box ul.slide > li').each(function(i) {
      if (-$(this).position().left <= offsetLeftMin) {
        //console.log(i + 1);
        numBanner = i + 1;
        return false;
      }
    });
    
    if (numBanner < bannerNow) bannerNow = numBanner;
    //console.log(widthBox + ' / ' + widthBar + ' / ' + offsetLeftMin + ' :::' + numBanner);
    showBanner(bannerNow);
  }

});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}

