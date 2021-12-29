const items = document.querySelectorAll('.item img')
const gallery =  document.querySelector('.gallery')
const galleryInner = gallery.querySelector('.gallery__inner')
const close = gallery.querySelector('.close')
const next = gallery.querySelector('.next')
const prev = gallery.querySelector('.prev')
var currentIndex;

function showGallery(e) {
    gallery.classList.add('show')
    galleryInner.innerHTML = `<img src="${e.target.src}" alt="">`
}

function showOffGallery() {
    gallery.classList.remove('show')
}

function checkIndex(currentIndex) {
    if (currentIndex == items.length-1) {
        next.classList.add('hidden')
    }
    else if (currentIndex == 0) {
        prev.classList.add('hidden')
    }
    else {
        next.classList.remove('hidden')
        prev.classList.remove('hidden')
    }
}

function showGalleryImg(e) {
    gallery.classList.add('show')
    if (e.target.id === 'next') {
        currentIndex++;
        checkIndex(currentIndex)
        galleryInner.innerHTML = `<img src="${items[currentIndex].src}" alt="">`
    } 
    else if (e.target.id === 'prev') {
        currentIndex--;
        checkIndex(currentIndex)
        galleryInner.innerHTML = `<img src="${items[currentIndex].src}" alt="">`
    }
       
}

//Show Gallery
items.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        currentIndex = index
        checkIndex(currentIndex);
        showGallery(e)
    })
});


//Show off Gallery
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') showOffGallery()
})

close.addEventListener('click', showOffGallery)


//show IMG Gallery
next.addEventListener('click', (e) =>
showGalleryImg(e)
)
prev.addEventListener('click', (e) =>
showGalleryImg(e)
)




