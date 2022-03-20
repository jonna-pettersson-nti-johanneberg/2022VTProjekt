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
        width <= 500 ? width * 3 : width * 1
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
        width <= 500 ? width * 3 : width * 1
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

const burgerMenu = () => {
  menu = document.querySelector(".burger-menu");
  deselect = document.querySelector(".deselect");
  menu.style.transform = "translateX(-50vw)";
  deselect.style.visibility = "visible";
  deselect.style.opacity = 0.65;
};

const burgerMenuDeselect = () => {
  menu = document.querySelector(".burger-menu");
  deselect = document.querySelector(".deselect");
  menu.style.transform = "translateX(50vw)";
  deselect.style.visibility = "hidden";
  deselect.style.opacity = 0;
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

if (document.querySelector(".burger-menu-btn")) {
  document
    .querySelector(".burger-menu-btn")
    .addEventListener("click", burgerMenu);
  document
    .querySelector(".deselect")
    .addEventListener("click", burgerMenuDeselect);
}

if (document.getElementsByClassName("accordion")) {
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", () => {
      acc[i].classList.toggle("active");
      var panel = acc[i].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
