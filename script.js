const galleryContainer = document.querySelector(".gallery-grid");

const createImage = (src) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("gallery-grid__item");

  const img = document.createElement("img");
  img.src = src;

  imgContainer.appendChild(img);

  return imgContainer;
};

const createGallery = (images) => {
  return images.map((image) => createImage(image));
};

const fetchImages = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const images = data.slice(0, 12).map((image) => image.url);

  return images;
};

document.addEventListener("DOMContentLoaded", async () => {
  const images = await fetchImages();
  const gallery = createGallery(images);

  galleryContainer.append(...gallery);
});
