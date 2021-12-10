document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        focus  : 'center',
        autoplay: true,
      } );
    splide.mount();
  } );


// ---------------animate-------------------
// 1.banner
removeClass('.banner h3', 'toUp');
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  removeClass('.banner p', 'toUp');
  setTimeout(() => {
    removeClass('.banner .button', 'toUp');
  }, 500);
}, 500)

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;

  // 2.content1
  if(thisScroll > queryClass('.content1').offsetTop - 200) {
    foreachLoopRemove('.content1 .card1', 'toRight', 200);
    removeClass('.otherNews','toRight');
    removeClass('.content1 .rightContent', 'toLeft');
  }

  // 3.
  if(thisScroll > queryClass('.content2').offsetTop - 200) {
    // content1
    foreachLoopAdd('.content1 .card1', 'toRight', 200);
   addClass('.otherNews','toRight');
   addClass('.content1 .rightContent', 'toLeft');

    // content2
    removeClass('.content2 .left svg','toUp');
    setTimeout(() => {
      removeClass('.content2 .left img', 'toUp');
    },200);

    removeClass('.content2 .right h2','toRight');
    setTimeout(() => {
      removeClass('.content2 .right h5', 'fade1');
      removeClass('.content2 .right .paragraph', 'fade1');
    }, 300);
  }

  // 4.content3
  if(thisScroll > queryClass('.content3').offsetTop - 200) {
    // content2
    addClass('.content2 .left svg','toUp');
    addClass('.content2 .left img', 'toUp');
    addClass('.content2 .right h2','toRight');
    addClass('.content2 .right h5', 'fade1');
    addClass('.content2 .right .paragraph', 'fade1');

    //content3 
    removeClass('.content3 h2','toRight');
    setTimeout(() => {
      foreachLoopRemove('.content3 .card2', 'toUp', 100);
    },200);
  }

  // 5
  if(thisScroll > queryClass('.content4').offsetTop - 200) {
    //content3 
    addClass('.content3 h2','toRight');
    foreachLoopAdd('.content3 .card2', 'toUp', 100);

    // content4
    removeClass('.content4 h2', 'fade1');
    setTimeout(() => {
      foreachLoopRemove('.content4 .card3','toUp', 100);
    },200);
  }

  // 6
  if(thisScroll > queryClass('.galeri').offsetTop - 400) {
    // content4
    addClass('.content4 h2', 'fade1');
    foreachLoopAdd('.content4 .card3','toUp', 100);

    // galeri
    removeClass('.galeri h2', 'fade1');
    setTimeout(() => {
      foreachLoopRemove('.galeri .card4','toUp', 100);
    },200);
  }

  // 7
  if(thisScroll > queryClass('.testimoni').offsetTop - 200) {
    // galeri
    addClass('.galeri h2', 'fade1');
    foreachLoopAdd('.galeri .card4','toUp', 100);

    // testimoni
    removeClass('.testimoni h2','fade1');
    removeClass('.testimoni .testimoniMain','toUp');
  }
})