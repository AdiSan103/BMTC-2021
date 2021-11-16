// datatable
$(document).ready( function () {
    $('#table_id').DataTable();
} );



// hamburger menu

function queryClass(theSelector) {
    return document.querySelector(theSelector);
  }
  function addClass(theSelector, theClass) {
    return queryClass(theSelector).classList.add(theClass);
  }
  
  function removeClass(theSelector, theClass) {
    return queryClass(theSelector).classList.remove(theClass);
  }
  
  
  queryClass('.hamburger-menu').addEventListener('click', function() {
    if(window.innerWidth < 992) {
      //cek class d-none
      if( queryClass('.navbar1-link').classList.contains('d-none') == true ) {
        // navbar-link
        removeClass('.navbar1-link','d-none');
        addClass('.navbar1-link','d-flex');
        setTimeout(() => {
          addClass('.navbar1-link ul','true');
        }, 100)
        // hamburger menu
        addClass('.hamburger-1', 'true');
        addClass('.hamburger-2', 'true');
        addClass('.hamburger-3', 'true');
      }  else {
        // navbar-link
        removeClass('.navbar1-link','d-flex');
        removeClass('.navbar1-link ul','true');
        setTimeout(() => {
          addClass('.navbar1-link','d-none');
        }, 750)
        // hamburger menu
        removeClass('.hamburger-1', 'true');
        removeClass('.hamburger-2', 'true');
        removeClass('.hamburger-3', 'true');
      }
    }
  })