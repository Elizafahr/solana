const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

//навигационное меню
navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

//таб
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";

  // Add the "selected-btn" class to the clicked button
  var buttons = document.getElementsByClassName("w3-bar-item w3-button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected-btn");
  }
  event.target.classList.add("selected-btn");
}

//анимации
document.addEventListener("DOMContentLoaded", function () {
  const storiesContainer = document.querySelector(
    ".Stories .container .Stories-items"
  );
  const storiesItems = document.querySelectorAll(".Stories-item");
  const imgContainer = document.querySelector(".CTA .container .img");

  function animateStories() {
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const containerTop =
      storiesContainer.getBoundingClientRect().top + scrollPosition;
    const imgContainerTop =
      imgContainer.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition > containerTop - windowHeight * 0.8) {
      storiesContainer.classList.add("active");

      storiesItems.forEach((item, index) => {
        if (scrollPosition > containerTop + index * 200 - windowHeight * 0.8) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    } else {
      storiesContainer.classList.remove("active");

      storiesItems.forEach((item) => {
        item.classList.remove("active");
      });
    }

    if (scrollPosition > imgContainerTop - windowHeight * 0.8) {
      imgContainer.classList.add("onActive");
    } else {
      imgContainer.classList.remove("onActive");
    }
  }

  window.addEventListener("scroll", animateStories);
});

// cursor
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.transform = `translate(${e.clientX - 15}px, ${
    e.clientY - 15
  }px)`;
  cursor.style.backgroundColor = `rgb(${e.clientX % 25}, ${e.clientY % 255}, ${
    Math.abs(e.clientX - e.clientY) % 255
  })`;
});



//  SwiperRewiews
const swiperElRewiews = document.querySelector("#mySwiperRewiews");
// Инициализируем Swiper
swiperElRewiews.initialize();
const swiperRewiews = swiperElRewiews.swiper;
// Функция для изменения количества слайдов в зависимости от размера экрана
function updateSlidesPerView() {
  if (window.innerWidth <= 600) {
    // Пример условие для мобильных устройств
    swiperRewiews.params.slidesPerView = 1;
  } else if (window.innerWidth <= 768) {
    // Пример условие для мобильных устройств
    swiperRewiews.params.slidesPerView = 2;
  } else if (window.innerWidth <= 1368) {
    // Пример условие для мобильных устройств
    swiperRewiews.params.slidesPerView = 3;
  } else {
    swiperRewiews.params.slidesPerView = 4;
  }
  swiperRewiews.update(); // Обновляем параметры слайдера
}

// Вызываем функцию при загрузке страницы
updateSlidesPerView();

// Добавляем обработчик события resize для обновления количества слайдов при изменении размера окна
window.addEventListener("resize", updateSlidesPerView);






// анимация
const paralaxImgs = document.querySelectorAll(".paralax-img");
const observerOptions = { threshold: 0.5 };
let currentIndex = 0;

function setupObserver(index) {
  const img = paralaxImgs[index];
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      img.classList.add("show");
      currentIndex++;
      if (currentIndex < paralaxImgs.length) {
        setTimeout(() => setupObserver(currentIndex), 350); // Задержка перед следующим наблюдателем
      }
    }
  }, observerOptions);

  observer.observe(img);
}

setupObserver(currentIndex);
