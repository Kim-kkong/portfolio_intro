// DinoWorks Common JS
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
  
  
  //슬라이드_01
var numSlide = $('#pf_F div.innerbox .box-img > li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 1;

var numShow = $('#pf_F div.innerbox .box-text > li').length;
var showNow = 0;
var showPrev = 0;
var showNext = 0;
var showFirst = 1;


showSlide(slideFirst);
showUp(showFirst);

$('#pf_F div.innerbox .box-img > li').each(function(m) {
  $(this).css({'left': (m* 100) + '%', 'display': 'block'});
  $('#pf_F div.box div .indicator').append('<li><a href="#">' + (m + 1) + '번 슬라이드</a></li>\n');
});

$('#pf_F div.innerbox .box-text > li').each(function(s) {
  $(this).css({'top': (s * 100) + '%', 'display': 'block'});
});

showSlide(slideFirst);
showUp(showFirst);

$('#pf_F div.box div .indicator li a').on('click', function() {
  var index = $('#pf_F div.box div .indicator li').index($(this).parent());
  var index02 = $('#pf_F div.innerbox .box-text > li').index($(this).parent());
  showSlide(index + 1);
  showUp(index02 + 1);
});

$('#pf_F div.box .control a.prev').on('click', function() {
  showSlide(slidePrev);
  showUp(showPrev);
});

$('#pf_F div.box .control a.next').on('click', function() {
  showSlide(slideNext);
  showUp(showNext);
});


function showSlide(l) {
  $('#pf_F div.innerbox .box-img').css({'transition': 'left 1s', 'left': (-(l - 1) * 100) + '%'});

  $('#pf_F div.box div .indicator li').removeClass('on');
  $('#pf_F div.box div .indicator li:eq(' + (l - 1) + ')').addClass('on');
  slideNow = l;
  slidePrev = (l === 1) ? numSlide : (l - 1);
  slideNext = (l === numSlide) ? 1 : (l + 1);
  //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
}

function showUp(o) {
  $('#pf_F div.innerbox .box-text').css({'transition': 'top 1.2s', 'top': (-(o - 1) * 100) + '%'});

  showNow = o;
  showPrev = (o === 1) ? numShow : (o - 1);
  showNext = (o === numShow) ? 1 : (o + 1);
  //console.log(showPrev + ' / ' + showNow + ' / ' + showNext);
}


//슬라이드_02

var numSlide02 = $('#pf_E div.innerbox .box-img > li').length;
var slideNow02 = 0;
var slidePrev02 = 0;
var slideNext02 = 0;
var slideFirst02 = 1;

var numShow02 = $('#pf_E div.innerbox .box-text > li').length;
var showNow02 = 0;
var showPrev02 = 0;
var showNext02 = 0;
var showFirst02 = 1;


showSlide02(slideFirst02);
showUp02(showFirst02);

$('#pf_E div.innerbox .box-img > li').each(function(m) {
  $(this).css({'left': (m* 100) + '%', 'display': 'block'});
  $('#pf_E div.box div .indicator').append('<li><a href="#">' + (m + 1) + '번 슬라이드</a></li>\n');
});

$('#pf_E div.innerbox .box-text > li').each(function(s) {
  $(this).css({'top': (s * 100) + '%', 'display': 'block'});
});

showSlide02(slideFirst02);
showUp02(showFirst02);

$('#pf_E div.box div .indicator li a').on('click', function() {
  var index = $('#pf_E div.box div .indicator li').index($(this).parent());
  var index02 = $('#pf_E div.innerbox .box-text > li').index($(this).parent());
  showSlide02(index + 1);
  showUp02(index02 + 1);
});

$('#pf_E div.box .control a.prev').on('click', function() {
  showSlide02(slidePrev02);
  showUp02(showPrev02);
});

$('#pf_E div.box .control a.next').on('click', function() {
  showSlide02(slideNext02);
  showUp02(showNext02);
});


function showSlide02(l) {
  $('#pf_E div.innerbox .box-img').css({'transition': 'left 1s', 'left': (-(l - 1) * 100) + '%'});

  $('#pf_E div.box div .indicator li').removeClass('on');
  $('#pf_E div.box div .indicator li:eq(' + (l - 1) + ')').addClass('on');
  slideNow02 = l;
  slidePrev02 = (l === 1) ? numSlide02 : (l - 1);
  slideNext02 = (l === numSlide02) ? 1 : (l + 1);
  //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
}

function showUp02(o) {
  $('#pf_E div.innerbox .box-text').css({'transition': 'top 1.2s', 'top': (-(o - 1) * 100) + '%'});

  showNow02 = o;
  showPrev02 = (o === 1) ? numShow02 : (o - 1);
  showNext02 = (o === numShow02) ? 1 : (o + 1);
  //console.log(showPrev02 + ' / ' + showNow02 + ' / ' + showNext02);
}




























});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}

