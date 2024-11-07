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