var data = ["خرید قهوه", "محصولات", "انواع قهوه", "دستگاه قهوه ساز", "لوازم قهوه", "مقالات", "تخفیف ویژه", "همکاری در فروش"];

var menu = document.getElementById('data-menu');

data.map((item) => {
    var element = document.createElement('div');
    element.textContent = item;
    element.classList.add('menu-item');
    menu.appendChild(element);
})


var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    // slidesPerGroup: 2,
    centerSlide: 'true',
    fade:'true',
    grabCursor:'true',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });