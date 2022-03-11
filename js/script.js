/*  Table of content
    1. Functions
        1.1 Slideshow

    2. Event Listeners
        2.1 Slideshow
*/

/* ==========
    Functions
    ========= */

const slideShowStart = () => {
  const slideShow = document.querySelector(".slide-show-elmts");
  const width = document.querySelector(".slide-show-elmts>*").offsetWidth;
  let delay = 0;
  document.querySelector(".slide-show-next").addEventListener("click", () => {
    if (delay > 0) {
      return;
    } else {
      slideShowNext(slideShow, width, delay);
      delay++;
      setTimeout(
        () => {
          delay = 0;
        },
        width <= 500 ? width * 3 : width * 1.2
      );
    }
  });
  document.querySelector(".slide-show-prev").addEventListener("click", () => {
    if (delay > 0) {
      return;
    } else {
      slideShowPrev(slideShow, width, delay);
      delay++;
      setTimeout(
        () => {
          delay = 0;
        },
        width <= 500 ? width * 3 : width * 1.2
      );
    }
  });
};

const slideShowNext = (slideShow, width, delay) => {
  slideShow.scrollBy({ left: width, behavior: "smooth" });
};

const slideShowPrev = (slideShow, width, delay) => {
  slideShow.scrollBy({ left: -width, behavior: "smooth" });
};

/* ================
    Event Listeners
    =============== */
if (document.querySelector(".slide-show")) {
  slideShowStart();
}

window.onresize = () => {
  slideShowStart();
};
