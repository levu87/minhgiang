function setBackground() {
  $('[setBackground]').each(function () {
    var background = $(this).attr('setBackground')
    $(this).css({
      "background-image": "url(" + background + ")",
      "background-size": "cover",
      "background-position": "center center"
    })
  })
  $('[setBackgroundRepeat]').each(function () {
    var background = $(this).attr('setBackgroundRepeat')
    $(this).css({
      "background-image": "url(" + background + ")",
      "background-repeat": "repeat"
    })
  })
}
///fixed
function headerfixed(){
  if ($(window).scrollTop() > 0) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	}
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('header').addClass('fixed')
		} else {
			$('header').removeClass('fixed')
		}
	})

}
//searchbox
function searchbox() {
  $('.iconsearch').on('click', function () {
    $('.searchbox').toggleClass('active')
  });
}
//toggle header
function toggleHeader() {
  $('.toggle-button').on('click', function () {
    $('.sidebar-menu').toggleClass('active')
  })
//   $(window).on('click', function() {
//     $('.sidebar-menu').removeClass('active')
//  })
}

function movemenu() {
  var movecall = new MappingListener({
    selector: '.main-menu',
    mobileWrapper: '.sidebar-menu',
    mobileMethod: 'appendTo',
    desktopWrapper: '.minhgiang-logo',
    desktopMethod: 'insertAfter',
    breakpoint: 1200,
  }).watch()
}

function movecall() {
  var movecall = new MappingListener({
    selector: '.call',
    mobileWrapper: '.sidebar-menu',
    mobileMethod: 'appendTo',
    desktopWrapper: '.language',
    desktopMethod: 'insertAfter',
    breakpoint: 1200,
  }).watch()
}

function language() {
  $('.lang-active').on('click', function () {
    $('.lang-list').slideToggle()
  })
}

function hampurger() {
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
}
// home slider
function homeslide() {
  var swiper = new Swiper('.homeslide .swiper-container', {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
//tin tuc 
function TintucSlider() {
  var swiper = new Swiper('.home-tintuc .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.15,
        spaceBetween: 10},
        1025: {
          slidesPerView: 2.5,
          spaceBetween: 10},
      },
  });
}
function gotop(){
  $('#gotop').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1000)
	})
}
$(document).ready(function () {
  headerfixed()
  searchbox()
  setBackground()
  toggleHeader()
  hampurger()
  movecall()
  movemenu()
  homeslide()
  language()
  TintucSlider()
  gotop()
});