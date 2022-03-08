/*  Table of content
    1. Functions
        1.1 Slideshow

    2. Event Listeners
        2.1 Slideshow
*/

/* ==========
    Functions
    ========= */
const slideShowNext = (slideShow, width) => {
  slideShow.scrollBy({ left: width, behavior: "smooth" });
};

const slideShowPrev = (slideShow, width) => {
  slideShow.scrollBy({ left: -width, behavior: "smooth" });
};

/* ================
    Event Listeners
    =============== */
if (document.querySelector(".slide-show")) {
  const slideShow = document.querySelector(".slide-show-elmts");
  const width = document.querySelector(".slide-show-elmts>*").offsetWidth;
  document.querySelector(".slide-show-next").addEventListener("click", () => {
    slideShowNext(slideShow, width);
  });
  document.querySelector(".slide-show-prev").addEventListener("click", () => {
    slideShowPrev(slideShow, width);
  });
}
