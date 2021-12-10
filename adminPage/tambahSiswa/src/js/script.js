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

// hamburger-menu
queryClass('.hamburger-menu1').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('false-md') == true ) {
            removeClass('.nav','false-md')
        }  else {
            addClass('.nav','false-md')
        }
    }
})

queryClass('.hamburger-menu2').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('false-md') == true ) {
            removeClass('.nav','false-md')
        }  else {
            addClass('.nav','false-md')
        }
    }
})


function previewImg1() {
    const gambar = document.querySelector('#gambar1');
    // const gambarLabel = document.querySelector('.custom-file-label.gambar1');
    const imgPreview = document.querySelector('.img-preview1');

    // isikan nama pada label sesuai gambar
    // gambarLabel.textContent = gambar.files[0].name;

    // mengambil file yang akan di upload, lalu ambil nama filenya
    const fileGambar = new FileReader();
    fileGambar.readAsDataURL(gambar.files[0]);

    // untuk disimpan ke gambarnya
    // ketika di load
    fileGambar.onload = function(e) {
        // ubah preview
        imgPreview.src = e.target.result;
    }
}


