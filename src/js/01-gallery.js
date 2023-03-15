import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)
const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionsData: 'alt', captionDelay: 250 });

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div><a class="gallery__item" href="${original}">
        <img style="display: block" class="gallery__image" src="${preview}" alt="${description}" />
    </a></div>
    `;
    })
    .join("");
    
}