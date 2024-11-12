let swiper2 = new Swiper(".mySwiper2", {
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      // برای صفحات کوچکتر از 320 پیکسل
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      // برای صفحات 640 پیکسل و بالاتر
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      // برای صفحات 768 پیکسل و بالاتر
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      // برای صفحات 1024 پیکسل و بالاتر
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const customPrevBtn2 = document.getElementById("slidernext2");
const customNextBtn2 = document.getElementById("sliderprev2");

// Add event listeners to custom buttons
customPrevBtn2.addEventListener("click", function () {
  swiper2.slidePrev(); // Go to the previous slide
});

customNextBtn2.addEventListener("click", function () {
  swiper2.slideNext(); // Go to the next slide
});

//  gallery
let swiper4 = new Swiper(".mySwiper4", {
  spaceBetween: 10,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 4,
    },

    640: {
      // برای صفحات 640 پیکسل و بالاتر
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      // برای صفحات 768 پیکسل و بالاتر
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// active gallery
let swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper4,
  },
});

const customPrevBtn1 = document.getElementById("slidernext1");
const customNextBtn1 = document.getElementById("sliderprev1");

// Add event listeners to custom buttons
customPrevBtn1.addEventListener("click", function () {
  swiper3.slidePrev(); // Go to the previous slide
});

customNextBtn1.addEventListener("click", function () {
  swiper3.slideNext(); // Go to the next slide
});

// Select all elements with the class "heart"
const hearts = document.querySelectorAll(".heart");

// Add click event listener to each heart
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // Toggle the "active" class on the clicked heart
    heart.classList.toggle("active");
  });
});
