document.addEventListener('DOMContentLoaded', function () {
	const html = document.documentElement;
	const burger = document.querySelector('.burger');
	const burgerIcon = burger.querySelector('.burger__icon');
	const menu = document.querySelector('.menu');
	const close = document.querySelectorAll('.menu__close');

	// add burger icon
	if (burger && !burgerIcon) {
		 burger.innerHTML = `
			  <span class="burger__icon">
					<span class="burger__line burger__line_1"></span>
					<span class="burger__line burger__line_2"></span>
					<span class="burger__line burger__line_3"></span>
			  </span>`;
	}

	const addClass = (element, className) => element.classList.add(className);
	const removeClass = (element, className) => element.classList.remove(className);

	// open menu
	const openMenu = () => {
		addClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
		addClass(menu, 'menu_open');
		addClass(html, 'scroll-disable');
	};
	burger.addEventListener('click', openMenu);

	// close menu
	const closeMenu = () => {
		removeClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
		removeClass(menu, 'menu_open');
		removeClass(html, 'scroll-disable');
	};
	close.forEach(link => link.addEventListener('click', closeMenu));
});
