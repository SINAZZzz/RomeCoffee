var data = ["خرید قهوه", "محصولات", "انواع قهوه", "دستگاه قهوه ساز", "لوازم قهوه", "مقالات", "تخفیف ویژه", "همکاری در فروش"];

var menu = document.getElementById('data-menu');

data.map((item) => {
    var element = document.createElement('div');
    element.textContent = item;
    element.classList.add('menu-item');
    menu.appendChild(element);
})


var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    centerSlide: 'true',
    fade:'true',
    grabCursor:'true',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centerSlide: 'true',
    fade:'true',
    grabCursor:'true',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });