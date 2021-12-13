// ---------------animate-------------------
// 1.banner
removeClass('.body-content svg', 'toUp');
setTimeout(() => {
  removeClass('.body-content img', 'toUp');
  removeClass('.body-content .right', 'toUp');

}, 500)



// ---------------animate-------------------
// 1.banner
removeClass('.banner h3', 'toUp');
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  removeClass('.banner p', 'toUp');
}, 500)

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;

  // 2
  if(thisScroll > queryClass('.content2').offsetTop - 200) {
    // content2
    removeClass('.content2 svg', 'toUp');
    removeClass('.content2 .right', 'toUp');
  }

  // 3
  if(thisScroll > queryClass('.content3').offsetTop - 200) {
    // content2
    addClass('.content2 svg', 'toUp');
    addClass('.content2 .right', 'toUp');

    // content3
    removeClass('.content3 h2', 'toUp');
    foreachLoopRemove('.content3 .grid-container .card ','toUp', 100);
  }
})