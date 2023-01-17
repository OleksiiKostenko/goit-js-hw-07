import { galleryItems } from './gallery-items.js';
// Change code below this line



function createImgGallery  (item)  {
    return item.map(item => {

        const linkEL = document.createElement("a");
        linkEL.classList.add("gallery__item");
        linkEL.href = item.original;

        const imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.src = item.preview;
        imgEl.alt = item.description;

        linkEL.appendChild(imgEl);
        return linkEL;
    });
};

const galleryWrapp = document.querySelector(".gallery");
const element = createImgGallery(galleryItems);
galleryWrapp.append(...element);


galleryWrapp.addEventListener('click', (event) => {
    event.preventDefault();
})
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt', });