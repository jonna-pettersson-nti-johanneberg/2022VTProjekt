/*  Table of content
    1. Functions
        1.1 Slideshow

    2. Event Listeners
        2.1 Slideshow
*/

/* ==========
    Functions
    ========= */

const startDeselect = (name) => {
  const deselectEl = document.querySelector(".deselect");
  deselectEl.style.visibility = "visible";
  deselectEl.setAttribute("name", name);
  deselectEl.style.opacity = 0.65;

  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = -scrollY + "px";
};

const deselect = () => {
  const deselectEl = document.querySelector(".deselect");
  const temp = document.querySelector(deselectEl.getAttribute("name"));

  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);

  if (deselectEl.getAttribute("name") == ".burger-menu") {
    temp.style.transform =
      window.innerWidth <= 600 ? "translateX(4em)" : "translateX(10em)";
  } else {
    temp.remove();
  }
  deselectEl.style.visibility = "hidden";
  deselectEl.style.opacity = 0;
};

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
  menu.style.transform =
    window.innerWidth <= 600 ? "translateX(-50vw)" : "translateX(-10em)";
  startDeselect(".burger-menu");
};

const submit = () => {
  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.outline = "2px solid black";
  box.style.padding = "1ch";
  box.style.height = "max-content";
  box.style.maxWidth = "calc(15em - 2ch)";
  box.style.position = "fixed";
  box.style.top = window.innerHeight / 4 - box.offsetHeight * 2 + "px";
  box.style.left = "calc((100vw / 2) - (15em / 2))";
  box.style.zIndex = "100";
  box.id = "alert";
  box.innerHTML =
    "Tack för ditt meddelande! <br/><br/> Vi på H&M jobbar hårt dagligen för att förbättra vårt arbete. <br/><br/> Vi återkommer så snart som möjligt! <br/> <img class='logo' src='./img/logga.png' alt='logga' style='margin-left:calc(100% - 6em - 0.5ch); margin-top: 1ch;' />";
  document.body.appendChild(box);
  startDeselect("#alert");
};

/* ================
    Event Listeners
    =============== */
if (document.querySelector(".slide-show")) {
  slideShowStart();
}

window.onresize = () => {
  if (document.querySelector(".slide-show")) {
    slideShowStart();
  }
};

if (document.querySelector(".burger-menu-btn")) {
  document
    .querySelector(".burger-menu-btn")
    .addEventListener("click", burgerMenu);
  document
    .querySelector(".burger-menu-btn")
    .addEventListener("keydown", burgerMenu);
  document.querySelector(".deselect").addEventListener("click", deselect);
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

if (document.querySelector(".submit")) {
  document.querySelector(".submit").addEventListener("click", submit);
}
