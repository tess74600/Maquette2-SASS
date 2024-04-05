let logo = document.querySelector("#logo");

logo.addEventListener("mouseover", () => {
  logo.style.transform = "scale(2)";

  setTimeout(() => {
    logo.style.transform = "";
  }, 500);
});

let imagesCarrousel = document.querySelectorAll(".header__banner--img");
let buttonCarrousel = document.querySelector(".button__white--icon");
let buttonsWrapper = document.querySelector(".button__white--icons");
let carrousel = document.querySelector(".simple");

// CARROUSEL HORIZONTAL

// for (let i = 0; i < imagesCarrousel.length; i++) {
//   let btn = buttonCarrousel.cloneNode();
//   if (i === 0) {
//     btn.classList.add("active");
//   }
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     carrousel.style.transform = `translateX(-${i * 100}%)`;
//     document
//       .querySelector(".button__white--icon.active")
//       .classList.remove("active");
//     btn.classList.add("active");
//   });
//   buttonsWrapper.appendChild(btn);
// }
// buttonCarrousel.remove();

// CARROUSEL VERTICAL
function changeImage(imgNumber) {
  // RESET IMG
  // for (let j = 0; j < imagesCarrousel.length; j++) {
  //   // imagesCarrousel[j].style.zIndex = "";
  //   // imagesCarrousel[j].style.position = "relative";
  //   // imagesCarrousel[j].classList.remove("transition");
  //   imagesCarrousel[j].classList.remove("active");
  // }

  // RESET BTN
  document
    .querySelector(".button__white--icon.active")
    .classList.remove("active");
  document
    .querySelector(".header__banner--img.active")
    .classList.remove("active");

  // CHANGE IMG ET BTN
  document
    .querySelectorAll(".button__white--icon")
    [imgNumber].classList.add("active");
  imagesCarrousel[imgNumber].classList.add("active");
  // imagesCarrousel[imgNumber].classList.add("transition");

  // imagesCarrousel[imgNumber].style.zIndex = "4";
  // imagesCarrousel[imgNumber].style.position = "absolute";
}

for (let i = 0; i < imagesCarrousel.length; i++) {
  let btn = buttonCarrousel.cloneNode();
  if (i === 0) {
    btn.classList.add("active");
    imagesCarrousel[i].classList.add("active");
    // imagesCarrousel[i].classList.add("transition");
    // imagesCarrousel[i].style.zIndex = "2";
  }
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    changeImage(i);
  });
  buttonsWrapper.appendChild(btn);
}

buttonCarrousel.remove();
