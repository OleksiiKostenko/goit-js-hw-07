import { galleryItems } from './gallery-items.js';
// Change code below this line
// const takeDivTag = document.querySelector("div.gallery");

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
        divEl.appendChild(linkEL);
        takeDivTag.appendChild(divEl);

        return divEl;
    });
};

const element = createImgGallery(galleryItems);
takeDivTag.append(...element);




console.log(galleryItems);
