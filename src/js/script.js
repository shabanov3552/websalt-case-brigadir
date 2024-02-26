Fancybox.bind("[data-fancybox]", {});


(() => {
    const item = document.querySelector(".nav-networks__link--showreel");
    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > 0) {
            item.classList.add("nav-networks__link--is-show");
        } else {
            item.classList.remove("nav-networks__link--is-show");
        }
    });
})();

(() => {
    const btn = document.querySelector(".js-open-menu");
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");

    btn.addEventListener("click", () => {
        if (!header.classList.contains("header--is-active")) {
            header.classList.add("header--is-active");
            document.body.classList.add("hidden");
            nav.style.display = "flex";
        } else {
            header.classList.remove("header--is-active");
            document.body.classList.remove("hidden");
            setTimeout(() => (nav.style.display = "none"), 300);
        }
    });
})();

if (document.querySelector('.case-brig-info__slider')) { // Указываем скласс нужного слайдера
    const sliders = document.querySelectorAll('.case-brig-info__slider');

    sliders.forEach((slider, i) => {
        let className = `case-brig-info__slider_${i + 1}`;
        slider.classList.add(className);
        // Создаем слайдер
        new Swiper(`.${className}`, { // Указываем скласс нужного слайдера
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            // Эффекты
            effect: 'creative',
            creativeEffect: {
                limitProgress: 3,
                shadowPerProgress: true,
                next: {
                    translate: [17, 17, 0]
                },
                prev: { translate: [-5, -5, -0] },
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: `.${className} .swiper-button-prev`,
                nextEl: `.${className} .swiper-button-next`,
            },
        });
    });
}