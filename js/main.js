// drop down & Window Scrollto btn
// _.throttle(function, time)
// gsap(element, time, option)
const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    //hide badge
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
    //show button
    gsap.to(toTopEl, .2, {
      x: 0 
    })
  }
  else{
    //show badge
    gsap.to(badgeEL, .6, {
      opacity: 1.,
      display: 'block'
    });
    //hide button
    gsap.to(toTopEl, .2, {
      x: 100 
    })
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// VISUAL SECTION - fadein
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: .7 * (index+1)
  })
})


//SWIPER(NOTICE vertical + promotion horizontal) & (AWARDS horizontal)
//Swiper(element, option)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  autoplay: {
    delay: 5000   
  }
});
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


//PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn =  document.querySelector('.toggle-promotion');
let isHidePromotion = true;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    //hide promotion
    promotionEl.classList.add('hide');
  }
  else{
    //unhide promotion
    promotionEl.classList.remove('hide');
  }
})


// FLOATING OBJECTS IN YOUTUBE
function random(min, max) {
  // ?????? ?????? ??????(????????? 2????????????)
  // `.toFixed()`??? ?????? ????????? ?????? ????????????,
  // `parseFloat()`??? ?????? ???????????? ????????? ?????? ???????????? ??????
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  //gsap.to(??????, ????????????, ??????)
  gsap.to(
    selector, //??????
    random(1.5, 2.5), //????????????
    { //??????
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL DOWN ANIMATION
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach( function (spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //????????? ????????? ????????? ????????? ??????
      triggerHook: .6
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});