const titles = document.querySelectorAll('.acardion__label');
const items = document.querySelectorAll('.acardion__item');


titles.forEach(label => {
    label.addEventListener('click', (e) => {
        const cleackedTitles = e.currentTarget;
        const element = cleackedTitles.parentNode;
        if (element.classList.contains('acardion__item--active')) {
            element.classList.remove('acardion__item--active');
        } else {
            items.forEach(element => {
                if (element.classList.contains('acardion__item--active')) {
                    element.classList.remove('acardion__item--active');
                }
            });
            element.classList.add('acardion__item--active');
        }
    });
})

AOS.init();