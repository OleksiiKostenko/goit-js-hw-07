import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrapp = document.querySelector("div.gallery");

function createImgGallery  (item)  {
    return item.map(item => {
    
        const divEl = document.createElement("div");
        divEl.classList.add("gallery__item");

        const linkEL = document.createElement("a");
        linkEL.classList.add("gallery__link");
        linkEL.href = item.original;

        const imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.src = item.preview;
        imgEl.dataset.source = item.original;
        imgEl.alt = item.description;

        linkEL.appendChild(imgEl);
        divEl.appendChild(linkEL);
        galleryWrapp.appendChild(divEl);

        return divEl;
    });
};

const element = createImgGallery(galleryItems);
galleryWrapp.append(...element);

galleryWrapp.addEventListener('click', (evt) => {
    
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">`)
    instance.show();
            
    window.addEventListener('keydown', onCloseModal);

    function onCloseModal (evt){
        if (evt.code === 'Escape') {
            instance.close();
            console.log(evt.code)
            window.removeEventListener('keydown', onCloseModal);
        } 
    };
});
console.log(galleryItems);


