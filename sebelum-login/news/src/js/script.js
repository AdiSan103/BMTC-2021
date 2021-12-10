// datatable
$(document).ready( function () {
    $('#table_id').DataTable();
} );
// -------------animate----------------
removeClass('.banner h3', 'toUp');
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  removeClass('.banner p', 'toUp');
}, 500)

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;
  // tabel data mews
  if(thisScroll > queryClass('.hotNews').offsetTop - 200) {
      removeClass('.hotNews .left','toRight');
      removeClass('.hotNews .right', 'toLeft');
  }

  // dataTabel
  if(thisScroll > queryClass('.dataTabel').offsetTop - 400 ) {
    foreachLoopRemove('tbody tr.card1','toUp',200);
  }
})