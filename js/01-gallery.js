import { galleryItems } from './gallery-items.js';
// Change code below this line

// function createImgGallery() {
 
// };

const imeges = galleryItems.map(item => {
    
    const takeDivTag = document.querySelector("div.gallery");
    const divEl = document.createElement("div");
    divEl.classList.add("gallery__item");

    const linkEL = document.createElement("a");
    linkEL.addEventListener('click', (evt) => {
        evt.preventDefault();
    }
    )
    linkEL.classList.add("gallery__link");
    linkEL.href = "large-image.jpg";

    const imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.src = item.preview;
    imgEl.dataset.source = "large-image.jpg";
    imgEl.alt = "Image description";

   
    
    linkEL.appendChild(imgEl);
    divEl.appendChild(linkEL);
    takeDivTag.appendChild(divEl);

    return divEl;
})





console.log(imeges)
console.log(takeDivTag);
console.log(galleryItems);




