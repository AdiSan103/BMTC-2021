// -------public function----------

// query class
function queryClass(theSelector) {
    return document.querySelector(theSelector);
  }
  
  // add class
  function addClass(theSelector, theClass) {
    return queryClass(theSelector).classList.add(theClass);
  }
  
  // remove class
  function removeClass(theSelector, theClass) {
    return queryClass(theSelector).classList.remove(theClass);
  }
  
  // foreach loops Remove
  function foreachLoopRemove(queryClassAll, classRemove, time) {
    // variabel
    let i = 0;
    let j = document.querySelectorAll(queryClassAll);
    // action
    for(let k = 0; k < j.length; k++){
        setTimeout(() => {
            j[k].classList.remove(classRemove);
        }, time * i);
        i++;
    }
  }
  
  // foreach loops Add
  function foreachLoopAdd(queryClassAll, classAdd) {
    // variabel
    let j = document.querySelectorAll(queryClassAll);
    // action
    for(let k = 0; k < j.length; k++){
        j[k].classList.add(classAdd);
    }
  } 
  
  // ----------hamburger menu------------------
  function hamburgerMenuClick() {
      //cek class d-none
      if( queryClass('.hamburger-1').classList.contains('true') == true ) {
        // hamburger menu
        removeClass('.hamburger-1', 'true');
        removeClass('.hamburger-2', 'true');
        removeClass('.hamburger-3', 'true');
      }  else {
        // hamburger menu
        addClass('.hamburger-1', 'true');
        addClass('.hamburger-2', 'true');
        addClass('.hamburger-3', 'true');
      }
  }