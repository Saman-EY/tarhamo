document.addEventListener("DOMContentLoaded", function () {
  // فعال‌سازی Swiper برای اولین تب
  // فعال‌سازی Swiper برای اولین تب با Breakpoints
  let swiper1 = new Swiper(".mySwiper1", {
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
    swiper1.slidePrev(); // Go to the previous slide
  });

  customNextBtn2.addEventListener("click", function () {
    swiper1.slideNext(); // Go to the next slide
  });

  const tabs = document.querySelectorAll(".tab");

  // رویداد کلیک برای هر تب
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Toggle the 'active' class
      tab.classList.toggle("active");
    });
  });
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
