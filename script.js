var data = ["خرید قهوه", "محصولات", "انواع قهوه", "دستگاه قهوه ساز", "لوازم قهوه", "مقالات", "تخفیف ویژه", "همکاری در فروش"];

var menu = document.getElementById('data-menu');

data.map((item) => {
    var element = document.createElement('div');
    element.textContent = item;
    element.classList.add('menu-item');
    menu.appendChild(element);
})